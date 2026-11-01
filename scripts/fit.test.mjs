import { getModel } from '../src/data/models.ts';
import { evaluateFit } from '../src/lib/fit.ts';

function status(model, input, id) {
  return evaluateFit(model, input).checks.find((c) => c.id === id)?.status;
}

const f63 = getModel('sole-f63');
const tight = { roomL: 75, roomW: 34, ceiling: 96, userH: 70, mode: 'use' };
if (status(f63, tight, 'floor') !== 'fail') throw new Error('F63 should fail without the 42 inch rear clearance');
if (status(f63, { ...tight, roomL: 120 }, 'floor') !== 'pass') throw new Error('F63 should pass with rear clearance');
if (status(f63, tight, 'step-user') !== 'na') throw new Error('F63 has no step-up, so that check stays na');

const t6 = getModel('bowflex-t6');
if (status(t6, { roomL: 200, roomW: 100, ceiling: 90, userH: 70, mode: 'use' }, 'user-plus') !== 'fail') {
  throw new Error('T6 ceiling rule is user + 20.75');
}
if (status(t6, { roomL: 200, roomW: 100, ceiling: 91, userH: 70, mode: 'use' }, 'user-plus') !== 'pass') {
  throw new Error('T6 should pass at 90.75 inches of ceiling');
}

const vision = getModel('peloton-tread-vision');
const visionFit = evaluateFit(vision, { roomL: 170, roomW: 80, ceiling: 96, userH: 70, mode: 'use' });
const floor = visionFit.checks.find((c) => c.id === 'floor');
if (!floor.detail.includes('79')) throw new Error('Vision fit should use the larger 79 inch rear figure');
if (floor.status !== 'fail') throw new Error('170 inch room is short of 68+24+79');

const t9 = getModel('bowflex-t9');
const t9floor = evaluateFit(t9, { roomL: 77.2, roomW: 37, ceiling: 120, userH: 68, mode: 'use' });
if (t9floor.checks.find((c) => c.id === 'floor').status !== 'fail') throw new Error('T9 fit length should be the larger 78 inch figure');

console.log('fit tests ok');
