/**
 * Maintained comparisons. A pair without an entry stays on the site for the
 * compare form and is noindex. Slugs follow models.ts order: earlier model first.
 */

export type ComparisonCopy = {
  slug: string;
  summary: string;
  fits: string;
  room: string;
  motor: string;
  warranty: string;
  verdict: string;
};

export const comparisonCopy: ComparisonCopy[] = [
  {
    slug: 'nordictrack-commercial-1250-vs-nordictrack-commercial-1750',
    summary: 'Commercial 1250 and 1750 share a footprint, belt, and 12 mph top speed. The published motor rating is 3.6 CHP versus 4.25 CHP.',
    fits: `Both pages print a 400 lb user capacity, a 22 by 60 inch belt, and a top speed of 12 mph. Neither prints a rider height window. Both fold. The 1250 is SKU NTL14125. The 1750 is SKU NTL17125.

Nothing in the user-weight or belt rows tells you to pick one person for one machine and a different person for the other. The published split that changes the motor line is 3.6 CHP on the 1250 and 4.25 CHP on the 1750. NordicTrack’s footnote on both pages says continuous horsepower is a laboratory dynamometer rating and does not denote operational horsepower in ordinary household use. Read both numbers with that footnote, not as two household horsepower tests.`,
    room: `Unfolded size matches: 77.3 inches long, 37.0 inches wide, 59.5 inches high. Folded size matches: 44.2 by 37 by 69 inches. Step-up matches at 10.0 inches. A room that fits one of these Commercial folders fits the other on the published inches.

Neither page prints a side, rear, or ceiling clearance. The fit check will not add a safety border for either. Folding raises the machine from 59.5 inches to 69 inches, the same way on both. In-box dimensions on the 1250 page are called out as the shipping carton. Do not use a carton figure as the folded size for either model.`,
    motor: `Incline matches at −3% to 12%. Speed matches at 0 to 12 mph. Voltage and amperage are missing on both pages, so power is not a way to separate them. The belt is 22 by 60 inches on both.

The motor row is the hardware difference in the tables: 3.6 CHP versus 4.25 CHP, each with the same laboratory-rating footnote. The T Series 10, which is not this pair, is the NordicTrack page with a 20 inch belt and a 325 lb capacity if the shared Commercial floor is too large.`,
    warranty: `Neither product page’s Performance Specs nor its Dimensions and weight block states a warranty length. This comparison does not award one machine a longer frame or motor term. Read each current NordicTrack page if you need the coverage language.`,
    verdict: `Pick the 1750 over the 1250 when you want the higher published CHP rating and you accept NordicTrack’s footnote that the figure is a lab rating. Pick the 1250 when that rating gap is not worth whatever else differs outside these tables, because the room, the belt, the step-up, the capacity, the incline, and the top speed do not give you a second published reason. Do not pick either one for a 14 mph top speed. That figure is on the 2450 page, which is also 63.4 inches tall.`,
  },
  {
    slug: 'nordictrack-commercial-1250-vs-nordictrack-commercial-2450',
    summary: 'The 1250 and 2450 share a 22 by 60 inch belt and a folding 77.3 by 37 inch floor. Speed and open height are the published splits.',
    fits: `Both list a 400 lb capacity and a 22 by 60 inch belt, and both fold. The 1250 tops out at 12 mph with a 3.6 CHP rating. The 2450 tops out at 14 mph with a 4.25 CHP rating. SKUs are NTL14125 and NTL19125. No height window is printed for either user.

A runner who wants the higher published speed is pointed at the 2450 by the spec strip alone. A walker inside 12 mph can use either capacity and belt. The CHP footnote applies to both: the rating is a lab dynamometer figure, not ordinary-use horsepower.`,
    room: `Length and width match at 77.3 by 37.0 inches. Open height does not: 59.5 inches on the 1250, 63.4 inches on the 2450. Folded size matches at 44.2 by 37 by 69 inches, so the closet is the same even though the open machine is not. Step-up is 10.0 inches on both.

If the ceiling clears 59.5 inches and not 63.4, the 1250 is the one that fits on machine height. Neither page adds a clearance zone around the deck. The fit check will not invent one.`,
    motor: `Incline matches at −3% to 12%. The speed row is 0 to 12 mph against 0 to 14 mph. The motor row is 3.6 CHP against 4.25 CHP. Power requirements are unpublished on both, which keeps the electrical plan the same: unknown from these pages.

The 1750 sits between them on the motor line (4.25 CHP, like the 2450) and with the 1250 on speed and height. Use that page if you want the higher CHP rating without the taller open frame.`,
    warranty: `Warranty terms are not in the cited spec sections for either SKU. This page does not award either machine a coverage period. Check the two NordicTrack product pages for the current wording.`,
    verdict: `Choose the 2450 if the published 14 mph top speed is the requirement and a 63.4 inch open height still fits. You also get the 4.25 CHP rating instead of 3.6, with the lab-rating footnote attached. Choose the 1250 if 12 mph is enough and you want the shorter 59.5 inch machine. Floor length, floor width, folded size, belt, step-up, capacity, and incline do not decide it.`,
  },
  {
    slug: 'nordictrack-commercial-1750-vs-nordictrack-commercial-2450',
    summary: 'The 1750 and 2450 share a 4.25 CHP rating, a 22 by 60 inch belt, and a folding floor. The 2450 adds speed and open height.',
    fits: `User capacity is 400 lb on both. Belt is 22 by 60 inches on both. Both fold. Both print 4.25 CHP and the same footnote that CHP is a lab rating, not household operating horsepower. The 1750 is SKU NTL17125 and stops at 12 mph. The 2450 is SKU NTL19125 and goes to 14 mph. No rider height range is published on either page.

If the shopper is choosing on capacity, belt width, or the CHP number alone, these two pages do not separate. Speed is the user-facing split.`,
    room: `The shared floor is 77.3 inches by 37.0 inches. The 1750 is 59.5 inches high unfolded. The 2450 is 63.4 inches high unfolded. Folded dimensions match at 44.2 by 37 by 69, and step-up matches at 10.0 inches.

A closet measured for one folded Commercial machine works for the other. A ceiling measured only for 59.5 inches does not automatically clear the 2450. No rear or side clearance is printed for either, so the fit check compares the machine rectangle only.`,
    motor: `Same motor rating, same incline (−3% to 12%), same missing voltage and amperage. Different top speed: 12 mph versus 14 mph. That is the motor-and-deck story. The belt construction details NordicTrack prints in the hardware line match at 22 by 60 inches (55 by 152 cm).

The 1250 shares the 1750’s speed and height and drops the motor rating to 3.6 CHP. It is the third page if the CHP number is the budget of specs you care about. This site still does not print a price.`,
    warranty: `Neither cited spec block includes a warranty length. Do not treat the higher model number as a longer warranty. That term was not on the pages used for these tables.`,
    verdict: `The 2450 is the 1750’s published speed and height variant: 14 mph and 63.4 inches, against 12 mph and 59.5 inches, with the motor rating, belt, fold, step-up, capacity, incline, and floor length and width left the same. Choose the 2450 for the speed. Choose the 1750 for the shorter open machine. Choose the 1250 only if you also accept 3.6 CHP.`,
  },
  {
    slug: 'nordictrack-commercial-1750-vs-nordictrack-t-series-10',
    summary: 'The Commercial 1750 has a wider belt, a higher capacity, and a higher CHP rating than the T Series 10, on a larger floor.',
    fits: `The 1750 prints a 400 lb capacity, a 22 by 60 inch belt, and 4.25 CHP. The T Series 10 prints a 325 lb capacity, a 20 by 60 inch belt, and 3.0 CHP. Both fold. Both reach 12 mph. SKUs are NTL17125 and NTL15425. The CHP footnote applies to both ratings.

A user between 325 and 400 lb is inside the 1750 page and outside the T Series 10 page. A user who wants the wider belt is pointed at the 1750 by the deck row alone. Neither page prints a height window for the rider.`,
    room: `The 1750 needs 77.3 by 37.0 inches of floor and 59.5 inches of open height. The T Series 10 needs 75.1 by 34.3 inches and 58.4 inches of height. Folded, the 1750 is 44.2 by 37 by 69 and the T Series 10 is 41 by 34.3 by 68.3. Step-up is 10.0 inches versus 8.3 inches.

The T Series floor is smaller on every axis, open and folded. The savings are real and modest: about 2 inches of length and under 3 inches of width. Neither page prints a clearance border, so the comparison is the machine itself. The T Series 6.5 S URL currently repeats the T Series 10 SKU and should not be treated as a third size.`,
    motor: `Incline on the 1750 is −3% to 12%. Incline on the T Series 10 is 0 to 12% in 0.5% increments, and the spec strip’s “−0% to 12%” does not add decline. The 1750 is the one with published decline. Speed matches at 0 to 12 mph. Power is unpublished on both.

Belt width, motor rating, and capacity move together from the T Series 10 to the 1750. You do not get to keep the small floor and take the 22 inch belt.`,
    warranty: `Warranty length is absent from both spec sections. The Commercial name does not document a longer term in the rows cited here.`,
    verdict: `Choose the T Series 10 when a 20 inch belt, 325 lb, and 3.0 CHP are acceptable and you want the smaller published floor and the lower 8.3 inch step-up. Choose the 1750 when you need the 22 inch belt, the 400 lb capacity, the 4.25 CHP rating, or the −3% decline. Pay for that, in inches, with a larger footprint. The speed cap does not help you decide.`,
  },
  {
    slug: 'nordictrack-t-series-10-vs-nordictrack-t-series-6-5-s',
    summary: 'The T Series 10 page and the T Series 6.5 S URL publish the same SKU, NTL15425, and the same hardware. Folded size is cited only on the T Series 10 page.',
    fits: `Both URLs list SKU NTL15425, a 20 by 60 inch belt, 3.0 CHP, a 325 lb capacity, and 0 to 12 mph. The CHP footnote applies to both. No rider height range is printed on either. There is no published capacity gap and no published belt gap to assign one user to one name.

On 1 November 2026 the 6.5 S URL’s title and structured data said “T Series 6.5 S Treadmill,” while image file names used a T10 prefix and the model switcher showed T Series 10 as the current selection. This comparison records that collision. It does not invent a second machine to make the names different.`,
    room: `Unfolded size matches at 75.1 by 34.3 by 58.4 inches. Step-up matches at 8.3 inches. The T Series 10 page prints a folded size of 41 by 34.3 by 68.3 inches. The 6.5 S specification block does not print folded dimensions. Those T Series 10 inches are not copied into the 6.5 S table.

If the closet is the question, cite the T Series 10 page. If you only have the 6.5 S URL open, you do not have a folded size to measure from. Neither URL prints a clearance rectangle.`,
    motor: `Motor, belt, incline, and speed text match: 3.0 CHP, 20 by 60 inches, 0 to 12% in 0.5% increments, 0 to 12 mph. Neither block states voltage or amperage. The 6.5 S block does not reveal a lower motor rating hiding behind the older name.

A Commercial 1750 is the nearby NordicTrack page that does change the belt, the capacity, and the CHP rating. That is a real step up. This pair is not.`,
    warranty: `Neither specification block states a warranty. Matching SKUs are not evidence of matching coverage beyond what the pages fail to say. Read NordicTrack’s current page for terms.`,
    verdict: `Treat these URLs as one published treadmill until NordicTrack prints a different SKU or a different specification block. Use the T Series 10 page when you need the folded size. Do not pay a different decision to the 6.5 S name on the basis of belt, motor, capacity, or footprint. Those rows match.`,
  },
  {
    slug: 'nordictrack-x16-vs-nordictrack-x24',
    summary: 'The X16 and X24 pages print the same belt, motor rating, footprint, step-up, and incline. The X24 page states a 24 inch screen. Neither folds.',
    fits: `Both are non-folding incline treadmills with a 22 by 60 inch belt, a 4.25 CHP rating, a 400 lb capacity, and speeds to 12 mph. The CHP footnote applies to both. The spec strip on each page says Foldable: No. No rider height window is printed.

The X24 page states a 24 inch screen. The X16 rows transcribed on this site do not include a screen size, so a screen size is not invented for the X16. A shopper who is choosing on user weight, belt, or speed will not find a split.`,
    room: `Footprint matches at 69.9 inches long, 38.1 inches wide, and 73.3 inches high. Step-up matches at 13.66 inches. There is no folded size on either page. The screen is not given an extra height allowance on top of the 73.3 inch figure. NordicTrack did not print one.

A ceiling that works for the X16 works for the X24 on the published machine height. A room that needed a folding deck is the wrong room for both. The Commercial folders are the pages with a folded size, and they top out at 12% incline rather than 40%.`,
    motor: `Incline matches at −6% to 40%. Speed matches at 0 to 12 mph. The motor rating matches at 4.25 CHP. Power is unpublished on both. The belt matches.

If the reason to compare them was a stronger motor or a longer deck, the tables do not support it. The difference the X24 page states, in the note kept with that model, is the screen.`,
    warranty: `Warranty length is not in either model’s cited spec sections. The higher screen size is not a warranty. Check the two product pages for coverage language.`,
    verdict: `On footprint, belt, motor rating, speed, incline, step-up, fold, and capacity, the X16 and the X24 are the same published machine. Choose the X24 when the 24 inch screen, or another feature outside these rows, is the reason. Do not choose it to save space or to gain a fold. For a fold, leave this pair.`,
  },
  {
    slug: 'nordictrack-commercial-2450-vs-nordictrack-x16',
    summary: 'The 2450 folds, runs to 14 mph, and inclines to 12%. The X16 does not fold, stops at 12 mph, and inclines from −6% to 40%.',
    fits: `Both print a 22 by 60 inch belt, a 4.25 CHP rating with the lab-rating footnote, and a 400 lb capacity. The 2450 folds and reaches 14 mph with incline from −3% to 12%. The X16 does not fold, reaches 12 mph, and inclines from −6% to 40%. SKU on the 2450 is NTL19125. The X16 page used here has no SKU in the table.

Choose the X16 for the steep incline range. Choose the 2450 for folding and the higher top speed. Capacity and belt width do not decide it. No rider height window is printed on either page.`,
    room: `The 2450 occupies 77.3 by 37.0 inches and stands 63.4 inches high, then folds to 44.2 by 37 by 69. The X16 occupies 69.9 by 38.1 inches and stands 73.3 inches high, with no folded size. Step-up is 10.0 inches on the 2450 and 13.66 inches on the X16.

The X16’s floor is shorter and a bit wider. Its open height is the problem under a low ceiling, and you cannot fold it down. The 2450’s folded height of 69 inches is still tall, but the open height is 10 inches lower than the X16. Neither page prints a clearance border.`,
    motor: `The CHP rating matches. The speed does not (14 mph versus 12 mph). The incline does not (−3% to 12% versus −6% to 40%). Power requirements are missing on both pages. The belt size matches, so cushioning and deck thickness are not in this comparison. NordicTrack did not print those construction rows in the fields used here.

The X24 matches the X16’s hardware rows and adds a stated 24 inch screen. It does not change this room comparison.`,
    warranty: `Neither cited spec section includes a warranty term. Folding versus a fixed incline trainer is not a coverage difference in these tables.`,
    verdict: `Pick the X16 for −6% to 40% incline if you can leave a 73.3 inch machine in a 69.9 by 38.1 inch footprint and you can live with 12 mph. Pick the 2450 if the deck has to fold, if you want 14 mph, and if 12% incline is enough. The shared 4.25 CHP rating and the shared 400 lb capacity are not the decision.`,
  },
  {
    slug: 'sole-f63-vs-sole-f65',
    summary: 'The F65 raises Sole’s motor line from 3.0 HP to 3.25 HP and capacity from 325 lb to 350 lb, on a larger floor than the F63.',
    fits: `The F63 lists 3.0 HP, a 20 by 60 inch running surface, and a 325 lb capacity. The F65 lists 3.25 HP, the same 20 by 60 inch surface, and a 350 lb capacity. Neither motor line says continuous or peak. Both fold. No rider height range is printed.

A user between 325 and 350 lb is on the F65 page only. A user who needs a 22 inch belt is on neither page. That width is the F85. The deck build text matches: 18 mm deck, 2-ply belt at 1.6 mm.`,
    room: `F63 unit measurements are 75 by 34 by 52 inches, folded 42 by 34 by 71. F65 dimension cards are 77 by 36 by 55, folded 48 by 36 by 66. The F65 is larger open and longer when folded, and shorter when folded than the F63’s 71 inch stored height.

Both 2026 manuals require 3 1/2 feet behind the treadmill. Side and ceiling clearances are not stated in that section for either model. The rear rule does not change the choice. The machine size does. Step-up height is unpublished on both, and deck thickness is not used in its place. The F63 publishes a 187 lb unit weight. The F65 transcription does not include a unit weight.`,
    motor: `Speed matches at 0.5 to 12 mph. Incline is 0–15% on the F63 feature card and in the F65 product description, and both full-specification tables say 0–15 levels. Levels are not converted to percent on either page. Both manuals call for a 120-volt, 15-amp grounded outlet with only the treadmill on the circuit.

The motor row and the capacity row are the performance split: 3.0 HP and 325 lb versus 3.25 HP and 350 lb.`,
    warranty: `The cited specification blocks and the manual safety sections used for power and rear clearance do not state a warranty length for either model. No coverage gap is claimed.`,
    verdict: `Move from the F63 to the F65 for the 350 lb capacity and the 3.25 HP line. Remeasure for 77 by 36 by 55 inches open and 48 by 36 by 66 folded, and keep the same 42 inch rear clearance. Stay with the F63 for the 75 by 34 inch floor and the 52 inch open height, inside 325 lb. The belt width does not change.`,
  },
  {
    slug: 'sole-f63-vs-sole-f85',
    summary: 'The F85 is the wide-belt step up from the F63: 22 inches, 3.5 HP, and 350 lb, against 20 inches, 3.0 HP, and 325 lb.',
    fits: `These are the ends of Sole’s folding line in this set, skipping the F65 and F80. The F63 is 3.0 HP, 20 by 60 inches, 325 lb. The F85 is 3.5 HP, 22 by 60 inches, 350 lb. Neither motor line says continuous or peak. Both fold. The F85’s wider belt is the deck reason to make this jump. The capacity rise is 25 lb.

A user over 350 lb is still outside both pages. The TT8 prints 400 lb and does not print a folded size.`,
    room: `F63: 75 by 34 by 52 open, 42 by 34 by 71 folded, unit weight 187 lb. F85: 78 by 38 by 60 open, 48 by 38 by 66 folded, unit weight 250 lb. You add 3 inches of length, 4 inches of width, and 8 inches of open height, and you move a heavier unit. Folded height drops from 71 to 66 while folded length and width grow.

Both 2026 manuals require 42 inches behind the deck and a dedicated 120-volt, 15-amp circuit. That shared rule means the clearance does not shrink on the smaller machine or grow on the larger one. Step-up is unpublished on both.`,
    motor: `Deck thickness matches at 18 mm. Belt ply matches at 2-ply, 1.6 mm. The running surface width does not match. Speed matches at 0.5 to 12 mph. Incline wording is percent on the feature or description and levels in the full specifications, on both pages. The motor line is 3.0 HP versus 3.5 HP.

The F65 and F80 sit between them at 3.25 HP, 350 lb, and a 20 inch belt. Use those pages if you need 350 lb without the 22 inch deck.`,
    warranty: `No warranty length is in the cited sections for either model. The step from F63 to F85 is not documented here as a longer warranty.`,
    verdict: `Choose the F85 when the 22 inch belt, the 3.5 HP line, or the 350 lb capacity is required, and the room can take 78 by 38 by 60 plus 42 inches behind. Choose the F63 when 325 lb and a 20 inch belt are enough and you want the smaller, lighter, lower machine. The rear-clearance sentence does not favor either one.`,
  },
  {
    slug: 'sole-f65-vs-sole-f80',
    summary: 'The F65 and F80 share a 3.25 HP line, a 20 by 60 inch deck, and a 350 lb capacity. Open height and unit weight are where the F80 page adds figures.',
    fits: `Motor, belt, and capacity match: 3.25 HP, 20 by 60 inches, 350 lb. Neither page says continuous or peak. Both fold. No rider height range is printed. A user who fits one of these on weight and belt width fits the other on those rows.

The F80 page adds a 223 lb unit weight. The F65 fields transcribed here do not include a unit weight, so this comparison does not invent one for the F65. The F63 is the step down (3.0 HP, 325 lb). The F85 is the step up in belt width.`,
    room: `F65 dimension cards: 77 by 36 by 55 open, 48 by 36 by 66 folded. F80 unit measurements: 77 by 36 by 59 open, 48 by 36 by 66 folded. Floor length, floor width, and folded size match. Open height is 55 inches versus 59 inches.

Both 2026 manuals ask for 3 1/2 feet behind the treadmill. The fit check adds that rear figure to both and adds nothing on the sides. Step-up is unpublished on both. A ceiling that clears 55 inches of machine may still fail the F80’s 59 inch height. That is the room decision.`,
    motor: `Deck text matches: 18 mm deck, 2-ply 1.6 mm belt, 20 by 60 inch surface. Speed matches at 0.5 to 12 mph. Incline is published as 0–15% and as 0–15 levels on both pages. Power matches: 120-volt, 15-amp dedicated circuit from each manual.

There is no motor-rating winner inside this pair. The 3.25 HP line is the same string.`,
    warranty: `Cited spec sections and the manual safety sections do not include a warranty length for the F65 or the F80. No term is implied by the higher model number.`,
    verdict: `Choose the F80 if you want the published 223 lb unit weight and you have room for a 59 inch open height. Choose the F65 if the 55 inch open height is the tighter fit. Belt, motor line, user capacity, folded size, speed, incline wording, and rear clearance do not separate them in this transcription.`,
  },
  {
    slug: 'sole-f80-vs-sole-f85',
    summary: 'The F85 widens Sole’s belt from 20 to 22 inches, raises the motor line from 3.25 HP to 3.5 HP, and grows the floor. Capacity stays 350 lb.',
    fits: `Both fold. Both list a 350 lb capacity and 0.5 to 12 mph. The F80 is 3.25 HP on a 20 by 60 inch surface with a 223 lb unit weight. The F85 is 3.5 HP on a 22 by 60 inch surface with a 250 lb unit weight. Neither motor line says continuous or peak. No rider height window is printed.

The wider belt is the reason most people open this pair. Capacity is not the reason. A user over 350 lb needs the TT8 page, which prints 400 lb and no folded size.`,
    room: `F80: 77 by 36 by 59 open, 48 by 36 by 66 folded. F85: 78 by 38 by 60 open, 48 by 38 by 66 folded. The F85 adds an inch of length, 2 inches of width, and an inch of open height. Folded width grows with the deck. Folded length and height match.

Both manuals require 42 inches behind the machine and a dedicated 15-amp, 120-volt circuit. The clearance sentence is a tie. Step-up height is missing on both, so it is not a tie-breaker. Moving weight goes from 223 lb to 250 lb.`,
    motor: `Deck thickness stays 18 mm. Belt thickness stays 2-ply, 1.6 mm. Width, motor line, and unit weight change. Incline remains a percent in the description or feature card and levels in the full specifications. Do not convert either model’s levels into an extra grade.

The F65 matches the F80’s motor line, belt, and capacity at a 55 inch open height, without a transcribed unit weight. It is the page to open if the F85’s width is unnecessary and the F80’s height is the problem.`,
    warranty: `No warranty length is printed in the sections cited for either treadmill. The 22 inch belt does not come with a documented longer term on this site.`,
    verdict: `Choose the F85 for the 22 inch belt and the 3.5 HP line, and give it 78 by 38 by 60 inches plus 42 inches behind, and a 250 lb move. Choose the F80 to keep a 20 inch belt, 3.25 HP, and a 36 inch width, at the same 350 lb capacity and the same folded length. The rear-clearance rule and the top speed do not decide it.`,
  },
  {
    slug: 'sole-f85-vs-sole-tt8',
    summary: 'The TT8 raises capacity to 400 lb and the motor line to 4.0 HP, with decline levels and no folded size. The F85 folds and stays at 350 lb.',
    fits: `Both use a 22 by 60 inch running surface and 0.5 to 12 mph. The F85 is 3.5 HP, 350 lb, an 18 mm deck, and it folds. The TT8 is 4.0 HP, 400 lb, a 25 mm deck described as waxed, no lubrication, reversible, and fold status is unpublished. Neither motor line says continuous or peak.

A user between 350 and 400 lb is on the TT8 page only. A user who must have a cited folded size is on the F85 page only. Incline on the TT8 is −6 to 15 levels, not a percent. The F85 description says incline to 15% and the spec table says 0–15 levels.`,
    room: `F85: 78 by 38 by 60 open, 48 by 38 by 66 folded, 250 lb unit weight. TT8: 81 by 38 by 66, no folded measurements, 319 lb unit weight. Width matches at 38 inches. The TT8 is 3 inches longer and 6 inches taller, and there is no folded length to reclaim the floor.

The F85 manual requires 42 inches behind the deck. A 2026 TT8 manual was not found at the URLs checked, so that 42 inch rule is not copied onto the TT8. The TT8 fit check is the 81 by 38 inch machine alone. Step-up is unpublished on both. The thicker TT8 deck is not a step-up height.`,
    motor: `Belt ply matches at 2-ply, 1.6 mm. Deck thickness does not: 18 mm versus 25 mm. Motor line does not: 3.5 HP versus 4.0 HP. The F85 has a cited 120-volt, 15-amp circuit. The TT8 product page does not state voltage or amperage. Decline levels exist only on the TT8 row, and they stay levels.

Speed does not separate them.`,
    warranty: `Neither cited section includes a warranty length. The missing TT8 manual is not filled with the F85 manual’s warranty, because that safety section did not state a warranty either.`,
    verdict: `Choose the TT8 for 400 lb, the 4.0 HP line, the thicker deck, or the published decline levels, and plan on an 81 by 38 by 66 inch, 319 lb machine with no folded size here. Choose the F85 for a folding 78 by 38 by 60 inch machine inside 350 lb, with the manual’s 42 inch rear clearance and a known 15-amp circuit. Do not convert TT8 levels into a percent to make the incline look like the F85’s.`,
  },
  {
    slug: 'horizon-7-0-at-vs-horizon-7-4-at',
    summary: 'The 7.4 AT widens Horizon’s belt to 22 inches and raises capacity to 350 lb. Horsepower is unpublished on both. The 7.0 AT is taller when open.',
    fits: `The 7.0 AT is a 20 by 60 inch running area and 325 lb. The 7.4 AT is a 22 by 60 inch running area and 350 lb. Both fold, both run 0.5 to 12 mph, and both incline from 0 to 15%. Horsepower is not in either machine-specs table. Both pages describe a RapidSync motor without a horsepower figure. No rider height window is printed.

The belt and the capacity are the user split. A horsepower comparison is not available from these tables.`,
    room: `7.0 AT: 76 by 35 by 67 open, 44 by 35 by 68 folded, step-on 8 5/8 inches, unit weight 277 lb. 7.4 AT: 76 by 37 by 63 open, 42 by 37 by 71 folded, step-on 8 3/4 inches, unit weight 318 lb. Length matches. The 7.4 AT is 2 inches wider, 4 inches shorter when open, and taller when folded. It is also the heavier unit.

No floor clearance is published for either, so the fit check does not add one. A low ceiling during use favors the 7.4 AT’s 63 inch open height. A low closet may favor the 7.0 AT’s 68 inch folded height over 71.`,
    motor: `Belt thickness matches at 1.6 mm silicone. Deck thickness moves from 0.7 inch on the 7.0 AT to 0.8 inch on the 7.4 AT. Electrical requirements match: 60Hz, 120V, not compatible with GFCI outlets. Speed and incline match. The missing horsepower matches too, which means it cannot be the reason to upgrade.

The 7.8 AT is the next capacity step, to 375 lb, with a 2.2 mm belt.`,
    warranty: `Neither specs table includes a warranty term. The wider belt is not paired with a coverage period in the rows used here.`,
    verdict: `Choose the 7.4 AT for the 22 inch belt and the 350 lb capacity, and measure a 76 by 37 by 63 inch open machine that folds to 71 inches high. Choose the 7.0 AT for a 20 inch belt inside 325 lb if you would rather have the narrower frame and can use a 67 inch open height. Do not choose on horsepower. Horizon did not print it.`,
  },
  {
    slug: 'horizon-7-0-at-vs-horizon-t202',
    summary: 'The T202 and the 7.0 AT share a 20 by 60 inch belt and a 325 lb cap. The T202 is much shorter and lighter. Incline stops at 12% instead of 15%.',
    fits: `Both fold. Both use a 20 by 60 inch running area and a 325 lb maximum. Both run 0.5 to 12 mph. Incline is 0 to 15% on the 7.0 AT and 0 to 12% on the T202. Horsepower is unpublished on both. The 7.0 AT page says RapidSync. The T202 page says ultra-quiet. Those names are not horsepower and are not ranked here. The T202 comparison table also lists a T101 Connect. Only the T202 column is used.

A user over 325 lb, or anyone who needs a 22 inch belt, is outside both pages. That starts at the 7.4 AT.`,
    room: `7.0 AT: 76 by 35 by 67 open, folded 44 by 35 by 68, step-on 8 5/8 inches, 277 lb. T202: 76 by 34 by 57 open, folded 48 by 34 by 62, step-on 7 1/4 inches, 187 lb. Length matches. The T202 is an inch narrower, 10 inches shorter when open, and 90 lb lighter. Folded, it is longer than the 7.0 AT and lower.

No clearance border is published for either. The open-height gap is the room reason to pick the T202. The folded-length gap is the reason to remeasure the closet.`,
    motor: `The T202 belt is 1.4 mm silicone. The 7.0 AT belt is 1.6 mm silicone. Deck thickness matches at 0.7 inch. Electrical line matches: 60Hz, 120V, not for GFCI outlets. Speed matches. Incline does not. Horsepower does not appear, so the quieter wording is not a motor score.

If 15% incline is the requirement, the T202 page does not offer it.`,
    warranty: `Warranty length is not in either machine-specs column. No term is added to make the 7-series look longer-covered than the T202.`,
    verdict: `Choose the T202 for the 57 inch open height, the 187 lb unit weight, and the slightly narrower frame, inside the same 325 lb and 20 inch belt, with incline limited to 12%. Choose the 7.0 AT for 15% incline, and take the 67 inch height and 277 lb unit. Folded shape changes too: the T202 stores longer and lower.`,
  },
  {
    slug: 'horizon-7-4-at-vs-horizon-7-8-at',
    summary: 'The 7.8 AT raises capacity from 350 lb to 375 lb and belt thickness from 1.6 mm to 2.2 mm. Folded size matches the 7.4 AT. Horsepower is unpublished.',
    fits: `Both have a 22 by 60 inch running area, 0.5 to 12 mph, 0 to 15% incline, and a folding frame. The 7.4 AT caps the user at 350 lb with a 1.6 mm belt. The 7.8 AT caps the user at 375 lb with a 2.2 mm belt. Deck thickness matches at 0.8 inch. Horsepower is missing on both, so this is not a motor-horsepower upgrade. No rider height range is printed.

A user between 350 and 375 lb has a published home on the 7.8 AT only, inside this Horizon set.`,
    room: `7.4 AT: 76 by 37 by 63 open, 42 by 37 by 71 folded, step-on 8 3/4 inches, 318 lb. 7.8 AT: 76 by 37 by 64 open, the same 42 by 37 by 71 folded size, the same 8 3/4 inch step-on, 330 lb. One inch of open height and 12 lb of unit weight are the room differences. The closet matches.

No clearance is published for either. A ceiling that clears the 7.4 AT by a slim margin should be checked again for 64 inches.`,
    motor: `Speed, incline, deck thickness, and the electrical line (60Hz, 120V, not GFCI) match. Belt thickness and user capacity do not. The RapidSync name appears on both product descriptions without a horsepower number. Ranking them by a motor watt or horsepower would add a figure Horizon did not print.

The 7.0 AT is the narrower, 325 lb sibling if the 22 inch belt is not required.`,
    warranty: `Neither table states a warranty period. The thicker belt is not accompanied by a coverage row in the transcription.`,
    verdict: `Choose the 7.8 AT for the 375 lb capacity or the 2.2 mm belt. The room change is one inch of open height and a 330 lb unit, with the folded size and step-on height left alone. Choose the 7.4 AT if 350 lb and a 1.6 mm belt are enough and you want the 63 inch open height. Horsepower cannot settle it.`,
  },
  {
    slug: 'bowflex-t6-vs-bowflex-t9',
    summary: 'The T9 widens the running path to 22 inches and raises capacity to 350 lb. The T6 is a 20 inch path at 325 lb. Horsepower is unpublished. Ceiling rules match.',
    fits: `The T6 is a 20 by 60 inch path, 0 to 12 mph, up to 15% incline, 325 lb, and it folds. The T9 is a 22 by 60 inch path with the same speed and incline, 350 lb, and it folds. Both name a MaxReact drive system and neither specs block publishes horsepower. No separate rider height window is printed. The ceiling rule is the height limit they share.

A user over 325 lb and at or under 350 lb is on the T9. A user who wants the wider path is on the T9 even inside 325 lb. The T16 is the 375 lb page, not this pair.`,
    room: `T6: 76 by 35 by 71 open, 44 by 35 by 71 stowed, 233.7 lb. T9 product page: 77.2 by 37 by 67.6, stowed 48.6 by 37 by 67.6, 282 lb. The T9 owner’s manual prints 78 by 37 by 67 and 282.2 lb. The fit check uses the larger T9 figure on each axis, 78 by 37 by 67.6, so both official sets fit.

The T6 is the narrower machine and the taller one. Folding the T6 does not lower its 71 inch height. The T9 product page is already under that height. Both use the same ceiling rule: user height plus 20.75 inches. For a 70 inch user that is 90.75 inches of ceiling, which is tighter than either machine height. Floor clearance is unpublished on both. Step-up height is unpublished on both.`,
    motor: `Speed and incline match. Path width and capacity do not. Voltage and amperage are unpublished on both. There is no horsepower row to prefer the T9. The manual checked for the T9 confirms the alternate inches and the 350 lb user weight. It does not add a motor number.`,
    warranty: `The T6 specs and the T9 sections checked for dimensions do not include a warranty length. The manual’s Tech Specs citation is not a warranty citation. No period is awarded to either model.`,
    verdict: `Choose the T9 for the 22 inch path and the 350 lb capacity, and measure for 78 by 37 by 67.6 inches plus the shared ceiling rule. Choose the T6 for a 20 inch path inside 325 lb, in a 76 by 35 inch floor, with a 71 inch machine that stays 71 inches when it is stowed. The ceiling rule will often be the limit for both.`,
  },
  {
    slug: 'bowflex-t9-vs-bowflex-t16',
    summary: 'The T16 raises capacity from 350 lb to 375 lb and describes a 16 inch screen. The product-page footprint matches the T9. Horsepower is unpublished on both.',
    fits: `Both print a 22 by 60 inch path, 0 to 12 mph, up to 15% incline, and a folding frame. The T9 user weight is 350 lb on the product page and in the manual. The T16 user weight is 375 lb. The T16 page describes a 16 inch touchscreen. Horsepower is absent from both specs blocks. A retailer title that mentions horsepower is not copied into either table. The MaxReact name is not a horsepower.

Users between 350 and 375 lb are inside the T16 page only. Users choosing on belt width get no help. The path matches.`,
    room: `T16 dimensions match the T9 product page: 77.2 by 37 by 67.6 open, 48.6 by 37 by 67.6 stowed. The T9 manual’s 78 inch length is not printed on the T16 page, so the T16 fit check stays at 77.2 inches. If you are buying the T9, still measure for 78 inches because of that manual.

Ceiling rule matches: user height plus 20.75 inches. Step-up is unpublished on both. Floor clearance is unpublished on both. Unit weight is 282 lb on the T9 page (282.2 lb in the manual) and 293.2 lb on the T16. The T16 is the heavier move by about 11 lb on the page figures.`,
    motor: `Path, speed, and incline match. Capacity does not. Power requirements are missing on both. There is no published motor number to justify the T16. The screen size is the feature the T16 page adds in its product description, next to the higher capacity.

The T6 is the 20 inch, 325 lb alternative if this pair is more machine than the room or the user needs.`,
    warranty: `Neither specs block states a warranty term. The screen and the capacity are not a coverage comparison in the cited sections.`,
    verdict: `Choose the T16 for the 375 lb capacity or the 16 inch screen, on the same product-page footprint as the T9 and the same ceiling rule. Choose the T9 if 350 lb is enough and you account for the manual’s 78 inch length and the lower published unit weight. Do not choose on horsepower. BowFlex did not print it for either model.`,
  },
  {
    slug: 'peloton-tread-vision-vs-peloton-tread-plus-vision',
    summary: 'Tread Vision and Tread+ Vision share Peloton’s user limits. The Tread+ has the longer slat belt, a higher incline, a larger body, and a much higher unit weight.',
    fits: `Both limit the user to 105 to 300 lb and to 4 feet 11 inches through 6 feet 4 inches. Horsepower is unstated on both. Neither specs block says the machine folds. The Tread Vision belt is 59 by 20 inches. The Tread+ Vision belt is 67 by 20 inches, described as 59 rubberized slats across that length. Speed is 0 to 12.5 mph on both.

The user who is allowed on one is allowed on the other, by the printed height and weight windows. The belt and the room are the difference. Peloton’s folding comments refer to the Tread Flex, a different model, and are not used here.`,
    room: `Tread Vision: 68 by 33 by 65, step-up 8 inches, 316 lb. Tread+ Vision: 75 by 37 by 70, step-up 11 inches, 460 lb. The Tread+ is larger on every machine axis and 144 lb heavier.

Clearance makes both rooms large. Tread Vision delivery text asks for 24 inches at the sides and front and 78.7 inches behind, with a 7-foot ceiling. Its FAQ prints 79 inches behind and a ceiling at least 20 inches over user height, and recommends 24 inches of headroom. The fit check uses the larger 79 inch rear figure. In-use floor is 171 by 81 inches. Tread+ delivery text uses 24 inches at the sides and front and 78.7 inches behind, a 7-foot ceiling, and a user-plus-24-inch ceiling rule, with the same 24 inch headroom recommendation. In-use floor is 177.7 by 85 inches. The smaller chassis does not remove the long rear clearance.`,
    motor: `Incline is 0 to 12.5% in 0.5% steps on the Tread Vision, and 0 to 15% in 0.05% steps on the Tread+. Speed increments match at 0.1 mph. No decline and no horsepower on either page. Both require a dedicated, grounded circuit of 15 amps or more. Voltage is not stated on either.

The slat belt and the finer, higher incline are the deck-and-motor story. A horsepower story is not in the sources.`,
    warranty: `Neither shop page’s specs or user-and-power block states a warranty length. The Tread+ name is not treated as a longer term. Read Peloton’s current pages for coverage.`,
    verdict: `Choose the Tread+ Vision for the 67 inch slat belt, the 15% incline, and the 11 inch step-up, if the room holds about 178 by 85 inches under Peloton’s clearances and the ceiling meets both the 7-foot minimum and user height plus 24 inches. You will move 460 lb. Choose the Tread Vision if the 59 inch belt and 12.5% incline are enough. You still need the long rear clearance, on a 68 by 33 by 65 inch, 316 lb machine, with user height plus 20 inches as well as a 7-foot ceiling. The user limits do not get larger on the Tread+.`,
  },
];

export function getComparisonCopy(slug: string): ComparisonCopy | undefined {
  return comparisonCopy.find((item) => item.slug === slug);
}

/** Pairs with a unique non-empty hand-written verdict. Templated or duplicate verdicts stay out. */
export function indexableComparisonSlugs(): string[] {
  const counts = new Map<string, number>();
  for (const item of comparisonCopy) {
    const verdict = item.verdict.trim();
    if (!verdict) continue;
    counts.set(verdict, (counts.get(verdict) ?? 0) + 1);
  }
  return comparisonCopy
    .filter((item) => {
      const verdict = item.verdict.trim();
      return verdict.length > 0 && counts.get(verdict) === 1;
    })
    .map((item) => item.slug);
}

export function comparisonsForModel(slug: string): ComparisonCopy[] {
  return comparisonCopy.filter((item) => item.slug.split('-vs-').includes(slug));
}
