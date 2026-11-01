import { storedBox, useBox, type Model } from '../data/models.ts';

export type FitMode = 'use' | 'stored';

export type FitInput = {
  roomL: number;
  roomW: number;
  ceiling: number;
  userH: number;
  userW?: number;
  mode: FitMode;
};

export type CheckStatus = 'pass' | 'fail' | 'warn' | 'na';

export type FitCheck = {
  id: string;
  title: string;
  status: CheckStatus;
  detail: string;
};

export type FitResult = {
  checks: FitCheck[];
  headline: string;
};

function round(n: number): string {
  return (Math.round(n * 100) / 100).toString();
}

function rectFits(needL: number, needW: number, roomL: number, roomW: number): boolean {
  return (needL <= roomL && needW <= roomW) || (needL <= roomW && needW <= roomL);
}

export function evaluateFit(model: Model, input: FitInput): FitResult {
  const checks: FitCheck[] = [];
  const stored = input.mode === 'stored';
  const box = stored ? storedBox(model) : useBox(model);

  if (!box) {
    checks.push({
      id: 'box',
      title: stored ? 'Folded size' : 'Unfolded size',
      status: 'na',
      detail: stored
        ? 'Folded dimensions are not published for this model, so stored size cannot be checked.'
        : 'Unfolded dimensions are not published for this model, so the footprint cannot be checked.',
    });
    return { checks, headline: 'Not enough published dimensions to check this model.' };
  }

  const c = model.clearance;
  const applyClearance = !stored && c;
  const front = applyClearance ? c.frontIn ?? 0 : 0;
  const rear = applyClearance ? Math.max(c.rearIn ?? 0, c.rearAlsoIn ?? 0) : 0;
  const side = applyClearance ? c.sideIn ?? 0 : 0;
  const needL = box.l + front + rear;
  const needW = box.w + side * 2;
  const floorOk = rectFits(needL, needW, input.roomL, input.roomW);

  const clearanceBits: string[] = [];
  if (!applyClearance) {
    clearanceBits.push(
      stored
        ? 'Workout clearances are not added in the stored check. Only the published folded machine is compared with the room.'
        : 'This manufacturer page does not publish side, front, or rear clearance, so only the machine footprint is compared with the room.',
    );
  } else {
    if (c.frontIn != null) clearanceBits.push(`${c.frontIn}" in front`);
    if (c.rearIn != null) {
      clearanceBits.push(
        c.rearAlsoIn != null
          ? `${round(Math.max(c.rearIn, c.rearAlsoIn))}" behind (the larger of ${c.rearIn}" and ${c.rearAlsoIn}", both printed on the cited page)`
          : `${c.rearIn}" behind`,
      );
    }
    if (c.sideIn != null) clearanceBits.push(`${c.sideIn}" on each side`);
    if (c.frontIn == null && c.sideIn == null && c.rearIn != null) {
      clearanceBits.push('Side and front clearances are not published, so they are not added.');
    }
  }

  checks.push({
    id: 'floor',
    title: stored ? 'Folded footprint in the room' : 'Footprint plus published clearance',
    status: floorOk ? 'pass' : 'fail',
    detail: `The check needs a clear rectangle of ${round(needL)}" × ${round(needW)}". ${clearanceBits.join(' ')} The rectangle may sit either way in the ${round(input.roomL)}" × ${round(input.roomW)}" room. ${c && applyClearance ? c.summary : ''}`.trim(),
  });

  const heightOk = box.h <= input.ceiling;
  checks.push({
    id: 'machine-height',
    title: stored ? 'Folded machine height' : 'Unfolded machine height',
    status: heightOk ? 'pass' : 'fail',
    detail: `Published machine height is ${round(box.h)}". The entered ceiling is ${round(input.ceiling)}".`,
  });

  if (!stored && c?.minCeilingIn != null) {
    checks.push({
      id: 'min-ceiling',
      title: 'Published minimum ceiling',
      status: input.ceiling >= c.minCeilingIn ? 'pass' : 'fail',
      detail: `The manufacturer says the ceiling must be at least ${round(c.minCeilingIn)}" (${round(c.minCeilingIn / 12)} ft). Entered ceiling: ${round(input.ceiling)}". ${c.summary}`,
    });
  }

  if (!stored && c?.userPlusIn != null) {
    const need = input.userH + c.userPlusIn;
    checks.push({
      id: 'user-plus',
      title: 'Published ceiling rule',
      status: input.ceiling >= need ? 'pass' : 'fail',
      detail: `The manufacturer’s rule is user height + ${c.userPlusIn}" = ${round(need)}" for a ${round(input.userH)}" user. That figure is used as published. It is not split into deck height, incline rise, and headroom. ${c.summary}`,
    });
  } else if (!stored && model.stepUpIn != null) {
    const need = model.stepUpIn + input.userH;
    checks.push({
      id: 'step-user',
      title: 'Step-up height plus user height',
      status: input.ceiling >= need ? 'pass' : 'fail',
      detail: `Published step-up height ${round(model.stepUpIn)}" plus entered user height ${round(input.userH)}" is ${round(need)}". Incline rise and extra headroom are not added, because this manufacturer page does not publish those inches. A person standing straight on the deck at the published step-up height is the whole of this check.`,
    });
  } else if (!stored) {
    checks.push({
      id: 'step-user',
      title: 'Step-up height plus user height',
      status: 'na',
      detail: 'Step-up height is not published, and this page does not give a user-height ceiling rule, so that sum is not calculated.',
    });
  }

  if (!stored && c?.recommendedHeadroomIn != null) {
    const need = input.userH + c.recommendedHeadroomIn;
    const ok = input.ceiling >= need;
    checks.push({
      id: 'headroom-rec',
      title: 'Recommended headroom',
      status: ok ? 'pass' : 'warn',
      detail: `The same page recommends at least ${c.recommendedHeadroomIn}" between the user’s head and the ceiling (${round(need)}" ceiling for this user). ${ok ? 'The entered ceiling meets that recommendation.' : 'The entered ceiling is under that recommendation. The recommendation is separate from the published minimums above.'}`,
    });
  }

  if (model.userHeight && !stored) {
    const { minIn, maxIn, text } = model.userHeight;
    const ok = input.userH >= minIn && input.userH <= maxIn;
    checks.push({
      id: 'user-height-range',
      title: 'Published user height range',
      status: ok ? 'pass' : 'fail',
      detail: `The manufacturer publishes a user height range of ${text} (${minIn}"–${maxIn}"). Entered height: ${round(input.userH)}".`,
    });
  }

  if (input.userW != null && model.maxUserLb != null) {
    checks.push({
      id: 'user-weight',
      title: 'Published maximum user weight',
      status: input.userW <= model.maxUserLb ? 'pass' : 'fail',
      detail: `Published maximum user weight is ${model.maxUser.text}. Entered weight: ${round(input.userW)} lb.`,
    });
  }

  const fails = checks.filter((ch) => ch.status === 'fail').length;
  const warns = checks.filter((ch) => ch.status === 'warn').length;
  const headline = fails
    ? `${fails} check${fails === 1 ? '' : 's'} do not pass on the published figures.`
    : warns
      ? 'The published minimums pass. A recommendation on the manufacturer page is still short.'
      : 'The published checks pass for the numbers entered.';

  return { checks, headline };
}
