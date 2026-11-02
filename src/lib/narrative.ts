import indexedPairs from '../data/indexed-pairs.json';
import { brandGuides, modelGuides, pairGuides, type Guide } from '../data/guides.ts';
import { models, storedBox, useBox, type Model } from '../data/models.ts';

export const INDEXED_PAIRS: readonly string[] = indexedPairs;

export function isIndexedPair(slug: string): boolean {
  return INDEXED_PAIRS.includes(slug);
}

export type Section = { heading: string; paragraphs: string[] };

export type Ranked = {
  m: Model;
  box: { l: number; w: number; h: number };
  area: number;
  stored: { l: number; w: number; h: number } | null;
};

function withBox(list: Model[]): Ranked[] {
  const rows: Ranked[] = [];
  for (const m of list) {
    const box = useBox(m);
    if (!box) continue;
    rows.push({ m, box, area: Math.round(box.l * box.w), stored: storedBox(m) });
  }
  return rows;
}

export function byFloorArea(): Ranked[] {
  return withBox(models).sort((a, b) => a.area - b.area || a.m.name.localeCompare(b.m.name));
}

export function byHeight(): Ranked[] {
  return withBox(models).sort((a, b) => a.box.h - b.box.h || a.area - b.area);
}

export function foldingRanked(): Ranked[] {
  return withBox(models.filter((m) => m.folds === 'yes')).sort((a, b) => a.area - b.area || a.m.name.localeCompare(b.m.name));
}

function guideSections(guide: Guide): Section[] {
  return [
    { heading: 'Who it fits', paragraphs: [guide.who] },
    { heading: 'Room and ceiling', paragraphs: [guide.room] },
    { heading: 'Motor and deck', paragraphs: [guide.motor] },
    { heading: 'Warranty', paragraphs: [guide.warranty] },
    { heading: 'Verdict', paragraphs: [guide.verdict] },
  ];
}

export function modelSections(m: Model): Section[] {
  const guide = modelGuides[m.slug];
  if (!guide) throw new Error(`missing model guide: ${m.slug}`);
  return guideSections(guide);
}

export function pairSections(slug: string): Section[] | null {
  const guide = pairGuides[slug];
  if (!guide) return null;
  return guideSections(guide);
}

export function pairBlurb(slug: string): string {
  const guide = pairGuides[slug];
  if (!guide) return '';
  const sentence = guide.verdict.split(/(?<=\.)\s/)[0] ?? guide.verdict;
  return sentence;
}

export function relatedComparisons(slug: string): { slug: string; label: string }[] {
  const out: { slug: string; label: string }[] = [];
  for (const pair of INDEXED_PAIRS) {
    const [a, b] = pair.split('-vs-');
    if (a !== slug && b !== slug) continue;
    const left = models.find((m) => m.slug === a);
    const right = models.find((m) => m.slug === b);
    if (!left || !right) continue;
    out.push({ slug: pair, label: `${left.name} vs ${right.name}` });
  }
  return out;
}

export function brandSections(slug: string): Section[] {
  const guide = brandGuides[slug];
  if (!guide) throw new Error(`missing brand guide: ${slug}`);
  return [
    { heading: 'What is listed', paragraphs: [guide.lede] },
    { heading: 'How the published specs differ', paragraphs: [guide.differ] },
    { heading: 'Warranty', paragraphs: [guide.warranty] },
    { heading: 'Which comparison to open', paragraphs: [guide.next] },
  ];
}

function inches(n: number): string {
  return Number.isInteger(n) ? String(n) : String(n);
}

function bodyLine(row: Ranked): string {
  const fold =
    row.m.folds === 'yes'
      ? row.stored
        ? `It folds to ${inches(row.stored.l)} by ${inches(row.stored.w)} by ${inches(row.stored.h)} inches.`
        : 'The manufacturer says it folds.'
      : row.m.folds === 'no'
        ? 'The manufacturer says it does not fold.'
        : 'A folded size is not published.';
  return `${row.m.name} is ${inches(row.box.l)} by ${inches(row.box.w)} by ${inches(row.box.h)} inches, ${row.area} square inches of floor. ${fold}`;
}

export function smallSpaceSections(): Section[] {
  const ranked = byFloorArea();
  const top = ranked.slice(0, 6).map(bodyLine).join(' ');
  const tallFold = ranked.filter((row) => row.stored && row.stored.h > row.box.h);
  const tallFoldLine = tallFold
    .map((row) => `${row.m.name} (${inches(row.box.h)} open, ${inches(row.stored!.h)} folded)`)
    .join('; ');
  const clearanceRows = ranked.filter((row) => row.m.clearance && (row.m.clearance.rearIn != null || row.m.clearance.sideIn != null));
  const clearanceLine = clearanceRows
    .map((row) => {
      const c = row.m.clearance!;
      const rear = c.rearIn != null ? Math.max(c.rearIn, c.rearAlsoIn ?? 0) : 0;
      const front = c.frontIn ?? 0;
      const side = c.sideIn ?? 0;
      const bits = [
        rear ? `${rear} inches behind` : '',
        front ? `${front} inches in front` : '',
        side ? `${side} inches on each side` : '',
      ].filter(Boolean);
      const length = row.box.l + front + rear;
      return `${row.m.name} publishes ${bits.join(', ')}. Adding the published end clearances to the ${inches(row.box.l)} inch body is ${inches(Math.round(length * 10) / 10)} inches of length.`;
    })
    .join(' ');
  return [
    {
      heading: 'How this rank is built',
      paragraphs: [
        'Each row is unfolded length times width, using the inches on that model’s spec page. Where two official sources disagree, the larger published number on each axis is the one multiplied. The product is this site’s arithmetic. The manufacturer did not print a square-inch total. Clearance the maker asks you to leave around the machine is not in the area. A short body with a long published rear clearance can rank as small and still need a long room once you run.',
        `The six smallest floors in this set: ${top}`,
      ],
    },
    {
      heading: 'Clearance the rank leaves out',
      paragraphs: [
        clearanceLine || 'None of the ranked pages print a side, front, or rear clearance.',
        'Sole’s 2026 F63, F65, F80, and F85 manuals are the 3 1/2 foot rear rule. Peloton’s shop pages print side, front, and rear figures, and those figures dwarf the machine body. Models with no clearance line are ranked on the body alone, and the fit check does the same. It does not invent an aisle.',
      ],
    },
    {
      heading: 'Folded height is a different question',
      paragraphs: [
        `Several machines are taller folded than open: ${tallFoldLine}. A rank of open floor area will not warn you about a closet shelf. The folding list is the page that keeps only models the manufacturer says fold, still ordered by open floor area, with the stored size in the table.`,
        'Models whose fold status is unpublished stay in this floor-area list. The X16 and X24 are here too, because NordicTrack says they do not fold and their open floors are still real floors. Use the folding list if a stored size is a requirement.',
      ],
    },
  ];
}

export function lowCeilingSections(): Section[] {
  const ranked = byHeight();
  const shortest = ranked.slice(0, 6);
  const tallest = ranked.slice(-3);
  const withRule = models.filter((m) => m.clearance && (m.clearance.userPlusIn != null || m.clearance.minCeilingIn != null));
  const ruleLine = withRule
    .map((m) => {
      const c = m.clearance!;
      const bits = [
        c.minCeilingIn != null ? `a minimum ceiling of ${c.minCeilingIn} inches` : '',
        c.userPlusIn != null ? `user height plus ${c.userPlusIn} inches` : '',
      ].filter(Boolean);
      return `${m.name} prints ${bits.join(' and ')}`;
    })
    .join('. ');
  const stepLine = ranked
    .filter((row) => row.m.stepUpIn != null && !(row.m.clearance && row.m.clearance.userPlusIn != null))
    .slice(0, 8)
    .map((row) => `${row.m.name} step-up ${row.m.stepUp.text}, machine height ${inches(row.box.h)} inches`)
    .join('; ');
  return [
    {
      heading: 'Machine height is not the runner’s head',
      paragraphs: [
        'The table sorts unfolded machine height, shortest first. That number is the console, not the top of a person standing on the belt. A short console can still be a bad fit if the step-up is high or the maker prints a user-height rule. A tall console can still pass if the user rule is the only ceiling test and the user is short. Read both.',
        `The six shortest machines: ${shortest.map((row) => `${row.m.name} at ${inches(row.box.h)} inches`).join('; ')}. The three tallest: ${tallest.map((row) => `${row.m.name} at ${inches(row.box.h)} inches`).join('; ')}. The Horizon 7.0 AT is a useful caution. It is a 20 inch belt and a 325 pound limit, like the T202, but it stands 67 inches tall while the T202 stands 57. Belt width did not predict console height.`,
      ],
    },
    {
      heading: 'Ceiling rules the manufacturer printed',
      paragraphs: [
        `${ruleLine}. Peloton also recommends 24 inches between the user’s head and the ceiling. BowFlex’s 20.75 inches is used as a single published sum. It is not split into deck, incline rise, and headroom, because BowFlex does not print that split. Sole’s manuals cited on this site state rear floor clearance and do not state a ceiling height.`,
        'If a page has no ceiling rule and it does publish a step-up, the fit check adds step-up to the height you type and does not add incline rise. Examples from this set: ' +
          stepLine +
          '. If step-up is also missing, that sum is skipped. Deck thickness, including Sole’s millimeter figures and LifeSpan’s 3/4 inch phenolic deck, is not a step-up.',
      ],
    },
    {
      heading: 'What a low ceiling should change',
      paragraphs: [
        'Start with the shortest consoles if the constraint is the machine itself under a soffit: the Sole F63 at 52 inches, then the LifeSpan TR1200i and the Sole F65 at 55, the Horizon T202 at 57, and the NordicTrack T Series 10 at 58.4. Then check stored height. The F63 folds to 71 inches, which is taller than many machines that ranked worse while open. The X16 and X24 at 73.3 inches, with a 13.66 inch step-up and no published ceiling formula, are the models a low ceiling is most likely to reject.',
        'User-height rules can reject a Peloton or a BowFlex even when the console number looks fine. A 72 inch user under BowFlex’s rule needs 92.75 inches of ceiling. Under the Tread+ Vision rule of user height plus 24 inches, the same user needs 96 inches, and Peloton also requires at least 84 inches regardless. Those sentences are the published rules plus ordinary addition. They are not a comfort score.',
      ],
    },
  ];
}

export function foldingSections(): Section[] {
  const ranked = foldingRanked();
  const taller = ranked.filter((row) => row.stored && row.stored.h > row.box.h);
  const leftOff = models.filter((m) => m.folds !== 'yes');
  return [
    {
      heading: 'What “folding” means on this page',
      paragraphs: [
        'A model is listed only when its manufacturer page says it folds and prints enough of a footprint to sort. The order is smallest open floor area among those models. It is not a cushion test, a noise test, or a price sort. This site does not print prices, so there is no dollar cutoff.',
        `Smallest open floors among the folders: ${ranked.slice(0, 5).map(bodyLine).join(' ')}`,
      ],
    },
    {
      heading: 'Stored height often goes up',
      paragraphs: [
        `On these models the folded height is greater than the open height: ${taller
          .map((row) => `${row.m.name}, ${inches(row.box.h)} open and ${inches(row.stored!.h)} folded`)
          .join('; ')}. The Sole F63 is the sharp example: 52 inches open and 71 inches folded. The BowFlex T6 holds 71 inches both ways and only gives length back. Measure the closet against the folded column, and measure the workout against the open column plus any clearance the manual prints.`,
        'Sole’s folding manuals still want 3 1/2 feet behind the deck while you use it. That rear figure is not part of the sort. Horizon’s folders all say they are not for GFCI outlets. That electrical note is also outside the area ranking, and it is on the model page.',
      ],
    },
    {
      heading: 'Left off on purpose',
      paragraphs: [
        `Not listed, because the page does not say the machine folds or the folded size was not printed: ${leftOff
          .map((m) => `${m.name} (${m.folds === 'no' ? 'the page says it does not fold' : 'fold status not published'})`)
          .join('; ')}. The NordicTrack T Series 6.5 S URL is the special case. It showed the same SKU as the T Series 10, and the folded inches are cited on the T Series 10 page, which is in the table. The X16 and X24 spec strips say Foldable: No.`,
      ],
    },
  ];
}

export function modelsIndexIntro(): string[] {
  const brands = new Map<string, number>();
  for (const m of models) brands.set(m.brand, (brands.get(m.brand) ?? 0) + 1);
  const brandLine = [...brands.entries()].map(([name, count]) => `${name} (${count})`).join(', ');
  const noHp = models.filter((m) => !m.motor.published).map((m) => m.name);
  const noFold = models.filter((m) => m.folds !== 'yes').map((m) => m.name);
  return [
    `This index is ${models.length} treadmills: ${brandLine}. Each name opens a spec table copied from that manufacturer’s page or manual, read on 1 November 2026. A blank in the source stays “Not published by manufacturer.” Deck thickness is not treated as step-up height. Incline levels are not converted into percent. NordicTrack’s CHP figure stays a lab rating, because that is what their footnote says.`,
    `Motor horsepower is missing on purpose for ${noHp.join(', ')}. Horizon describes a motor and does not print horsepower. BowFlex names MaxReact and does not print horsepower. Peloton’s shop specs do not state it. The BowFlex T16 Amazon title mentions 3.5 HP. That title is not written into the table.`,
    `Fold status is “not published” or “does not fold” for ${noFold.join(', ')}. Those models stay in the floor-area list and stay off the folding list, except where a different URL for the same SKU prints a fold. The T Series 10 is that URL for NTL15425.`,
    'Prices are not shown. Amazon buttons on the model pages are either a verified product link or a tagged search. A search is not a promise that the first result is this model. The room check uses the published inches and states every clearance it adds.',
  ];
}

export function compareIndexIntro(): string[] {
  return [
    'The picker below opens any two models. Most of those pairs are not in the site index. A page that only repeats two full tables, for models nobody shops against each other, was not adding a decision. Those URLs still work, and they carry a noindex tag so they are not offered as search listings. The written comparisons are the pairs where the published rows split, or where they match so closely that the match is the finding.',
    'Same-brand pages cover the NordicTrack Commercial steps, the X16 against the X24 and against the 2450, the T Series 10 against the 6.5 S URL and against the Commercial 1750, the Sole F63 through the TT8, the Horizon 7-series and the T202, the BowFlex T6, T9, and T16, and Peloton’s Tread Vision against the Tread+ Vision. Each of those pages says who each model fits, how the floor and ceiling differ, what the motor and deck rows do, what the warranty blocks do not say, and a verdict limited to those rows.',
    'The three lists above the pairs are sorts, not scores. Small rooms are open length times width. Low ceilings are open machine height, plus the ceiling rules a manufacturer printed. Folding is the subset the manufacturer says folds, ordered by open floor area. None of the lists uses price, cushioning, or a ride test.',
  ];
}

export function fitPageSections(): Section[] {
  return [
    {
      heading: 'What the check uses',
      paragraphs: [
        'You enter room length, room width, ceiling height, and your height, in inches. Weight is optional. The model menu is the same set as the spec tables. Unfolded mode compares the published machine with the room and then applies clearances and ceiling rules that the manufacturer printed. Stored mode uses folded dimensions only, and only when those dimensions exist. Workout clearances are not applied to a folded machine.',
        'The floor rectangle may sit either way in the room. Clearances stay on the machine’s own length and width. They are not swapped when you rotate the treadmill. If a side or an end is not published, it is not filled in from ASTM F2115 or from another brand’s manual. ASTM F2115 is the motorized-treadmill specification, and the standard text is not quoted here.',
      ],
    },
    {
      heading: 'Clearance by brand',
      paragraphs: [
        'Sole’s 2026 F63, F65, F80, and F85 manuals say to leave a minimum of 3 1/2 feet between the rear of the treadmill and any fixed object. Side and front clearances are not in that section, so only the rear 42 inches is added. The TT8 has no cited manual, so it does not inherit that 42 inches. NordicTrack, Horizon, Life Fitness, and LifeSpan pages used here do not print side, front, or rear clearance. Their floor check is the machine body.',
        'BowFlex prints a ceiling rule instead of a step-up: user height plus 20.75 inches, on the T6, T9, and T16. Peloton prints 24 inches on the left, right, and front. The Tread Vision fit check uses 79 inches behind, the larger of 78.7 and 79. The Tread+ Vision uses 78.7 inches behind. Both require a ceiling of at least 84 inches. The Tread Vision also requires user height plus 20 inches. The Tread+ Vision requires user height plus 24 inches. Both recommend 24 inches from head to ceiling, and that recommendation is a warning when it misses, separate from the minimums.',
        'When no ceiling rule is published and step-up height is, the check adds step-up to your height and stops. Incline rise is not estimated from percent grade and deck length. When step-up is also missing, as on the Sole decks where only deck thickness is printed, that sum is marked not applicable. The T9 uses 78 inches of length and 67.6 inches of height because those are the larger figures across the product page and the manual.',
      ],
    },
    {
      heading: 'What a pass does not mean',
      paragraphs: [
        'A pass means the published checks succeeded for the numbers you typed. It does not mean a doorway, a turn on a stair, or a circuit in the house will work. Outlet notes stay on the model page: Sole’s dedicated 120-volt 15-amp circuit, Horizon’s non-GFCI 120 V requirement, LifeSpan’s 115 V non-GFI circuit, Peloton’s 15-amp dedicated circuit, Life Fitness’s front cord. The calculator does not know which wall your outlet is on.',
        'User weight is checked only if you type one and the model publishes a maximum. Peloton also checks the published height window, 59 to 76 inches. A pass on footprint with no weight entered says nothing about the 300 pound Peloton cap or the 400 pound Commercial cap.',
      ],
    },
  ];
}

export function sectionWordCount(sections: Section[]): number {
  return sections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}
