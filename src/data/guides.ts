/**
 * Buying notes built only from fields already transcribed in models.ts.
 * Warranty length is omitted on purpose: the cited spec sections do not state one.
 */

export type Guide = {
  fits: string;
  room: string;
  motor: string;
  warranty: string;
  verdict: string;
};

const NT_CHP =
  'NordicTrack prints a footnote on these pages: continuous horsepower (CHP) is a laboratory dynamometer rating and does not denote the operational horsepower of the treadmill in ordinary household use.';

export const guides: Record<string, Guide> = {
  'nordictrack-commercial-1250': {
    fits: `The Commercial 1250 is the lowest motor rating in the three Commercial folding models on NordicTrack’s site. The page lists a 400 lb user capacity, a 22 by 60 inch belt, and a top speed of 12 mph. The motor line is 3.6 CHP. ${NT_CHP}

A person who is over the 325 lb capacity printed for the T Series 10, and who wants a folding deck rather than the non-folding X16 or X24, is inside the capacity this page prints. The page does not publish a rider height window, so height is not a filter here. SKU on the page is NTL14125.`,
    room: `Unfolded size is 77.3 inches long, 37.0 inches wide, and 59.5 inches high. Folded size is 44.2 inches long, 37 inches wide, and 69 inches high. Folding shortens the length and raises the machine. The stored height is taller than the unfolded height, which matters in a closet with a low shelf.

Step-up height is 10.0 inches. The product page does not print a side, rear, or ceiling clearance. The room check compares the machine rectangle with the room. Because step-up is published and no ceiling rule is, the extra ceiling line is step-up plus the height you enter. Incline rise is not added. NordicTrack did not print that rise in inches. In-box dimensions on the same page are the shipping carton, not the folded treadmill.`,
    motor: `Belt 22 by 60 inches (55 by 152 cm). Motor 3.6 CHP, with the laboratory-rating footnote above. Incline runs from −3% to 12%. Speed runs from 0 to 12 mph (0 to 19 kph). Voltage and amperage are not stated in Performance Specs or in Dimensions and weight.

The 1750 page prints 4.25 CHP and the same belt, footprint, folded size, step-up, capacity, incline, and 12 mph top speed. The 2450 page also prints 4.25 CHP, then splits on speed (up to 14 mph) and unfolded height (63.4 inches).`,
    warranty: `Performance Specs and Dimensions and weight on the Commercial 1250 product page do not include a warranty length. Frame, motor, and labor terms are not filled in from a retailer listing. Read the current terms on NordicTrack’s product page before you rely on a coverage period.`,
    verdict: `Choose the 1250 when the published motor rating is the difference you can accept: 3.6 CHP here, against 4.25 CHP on the 1750, with the rest of the transcribed hardware matching the 1750. Choose the 2450 if you need the 14 mph top speed that page prints, and accept its taller 63.4 inch unfolded height. Choose the T Series 10 if a 20 inch belt, a 3.0 CHP rating, and a 325 lb capacity are enough, and you want the smaller 75.1 by 34.3 inch floor. This site does not score cushioning, and it does not print a price.`,
  },
  'nordictrack-commercial-1750': {
    fits: `The Commercial 1750 publishes a 400 lb user capacity, a 22 by 60 inch belt, and speeds to 12 mph. The motor line is 4.25 CHP. ${NT_CHP} SKU on the page is NTL17125.

That capacity is the same figure as the 1250 and the 2450, and higher than the 325 lb figure on the T Series 10 page. The 1750 is a folding machine. It is not the incline trainer: the X16 and X24 pages are the ones that print −6% to 40% and say they do not fold. No rider height minimum or maximum is printed.`,
    room: `The footprint matches the 1250: 77.3 inches long, 37.0 inches wide, 59.5 inches high. Folded size matches too: 44.2 by 37 by 69 inches. Plan on the taller folded height if the machine will stand in a closet.

Step-up is 10.0 inches. No side, front, rear, or ceiling clearance is printed, so those inches are not invented for the fit check. With a published step-up and no ceiling rule, the check adds step-up to the user height you type and stops there. The 2450, which shares the 4.25 CHP rating, is 63.4 inches tall unfolded, 3.9 inches taller than this one, on the same length and width.`,
    motor: `Deck and belt are 22 by 60 inches. Incline is −3% to 12%, the same range as the 1250 and the 2450. Top speed stays at 12 mph, which is the split with the 2450 (0 to 14 mph on that page). Power requirements are not stated.

Against the T Series 10, the published hardware steps up in four places: belt width 22 inches instead of 20, motor rating 4.25 CHP instead of 3.0 CHP, user capacity 400 lb instead of 325 lb, and a longer, wider footprint.`,
    warranty: `The Commercial 1750 spec sections used for this table do not state a warranty term. Nothing on this page supplies a frame, motor, or parts period from another site. The product page is the place to read whatever NordicTrack currently prints.`,
    verdict: `The 1750 is the Commercial folding model whose published motor rating matches the 2450 while its speed, height, and footprint still match the 1250. Move to the 2450 for the extra 2 mph and accept 63.4 inches of unfolded height. Stay with the 1250 if 3.6 CHP is the rating you want and every other transcribed number on these two pages already matches. For a shorter floor and a 20 inch belt, the T Series 10 is the NordicTrack page with those smaller figures.`,
  },
  'nordictrack-commercial-2450': {
    fits: `The Commercial 2450 page prints a 400 lb capacity, a 22 by 60 inch belt, a 4.25 CHP motor rating, and a top speed of 14 mph. ${NT_CHP} It folds. SKU NTL19125. No user height range is published.

The 14 mph top end is the speed figure that separates this page from the 1250 and the 1750, both of which stop at 12 mph. The X16 and X24 also stop at 12 mph, and they add a much steeper incline range on a machine that does not fold.`,
    room: `Unfolded footprint is 77.3 inches long and 37.0 inches wide, the same floor as the 1250 and 1750, but the height is 63.4 inches rather than 59.5. Folded size is still 44.2 by 37 by 69 inches, so the stored height matches the other two Commercial folders even though the open height does not.

Step-up is 10.0 inches. Clearance around the deck is not published. A low ceiling has to clear 63.4 inches of machine before the step-up-plus-user check is even considered. That makes this a poorer fit than the 1750 when the ceiling is the tight dimension and the extra 2 mph is not.`,
    motor: `Same belt and same −3% to 12% incline as the 1250 and 1750. Motor rating matches the 1750 at 4.25 CHP and sits above the 1250 at 3.6 CHP. Speed is 0 to 14 mph (0 to 22 kph). Household voltage and amperage are not on the page.

Do not read the CHP number as a tested household horsepower. NordicTrack’s footnote says it is a lab dynamometer rating.`,
    warranty: `Warranty length is not in the Performance Specs or Dimensions and weight blocks cited for the 2450. This page leaves it out. Check NordicTrack’s current product page for frame, motor, and labor language.`,
    verdict: `Buy the 2450 over the 1750 when the published 14 mph top speed is the feature you came for, and when an unfolded height of 63.4 inches still fits. The belt, fold, step-up, capacity, incline, motor rating, and floor length and width do not give you a second difference. Buy the 1750 when 12 mph is enough and you want the shorter 59.5 inch open height. Buy an X16 or X24 only if you want the −6% to 40% incline and can give the machine a permanent 69.9 by 38.1 inch floor, because those pages say the machines do not fold.`,
  },
  'nordictrack-x16': {
    fits: `The X16 is a non-folding incline treadmill. NordicTrack’s spec strip says Foldable: No. Published hardware is a 22 by 60 inch belt, a 4.25 CHP motor rating, a 400 lb user capacity, speeds to 12 mph, and incline from −6% to 40%. ${NT_CHP}

That incline range is the reason to look at this page instead of a Commercial folder, which tops out at 12% and declines only to −3%. The X16 does not suit a room that has to reclaim the floor after the workout. No rider height window is printed.`,
    room: `Unfolded size is 69.9 inches long, 38.1 inches wide, and 73.3 inches high. The floor is shorter than a Commercial 1750 (77.3 by 37.0) and wider, and the machine is much taller. There is no folded size to plan around.

Step-up height is 13.66 inches, several inches higher than the Commercial folders’ 10.0 inches and the T Series 10’s 8.3 inches. No clearance rectangle is published. The ceiling has to clear 73.3 inches of machine, then the step-up-plus-user check on top of the rules in the fit calculator. A basement with a low joist is the constraint to measure first.`,
    motor: `Belt 22 by 60 inches. Motor 4.25 CHP, same rating as the Commercial 1750 and 2450, with the same laboratory-rating footnote. Speed 0 to 12 mph. Incline −6% to 40%. Power volts and amps are not stated.

The X24 page publishes the same footprint, belt, motor, speed, incline, step-up, and user capacity. A screen size is not part of the X16 rows transcribed here, so this page does not invent one.`,
    warranty: `The X16 Performance Specs and Dimensions and weight sections do not state a warranty period. No coverage length is added from a shop listing. Use NordicTrack’s product page for the current terms.`,
    verdict: `Pick the X16 if the published −6% to 40% incline is the point, you can leave a 69.9 by 38.1 inch machine in place, and an unfolded height of 73.3 inches plus a 13.66 inch step-up still works under your ceiling. Pick the X24 only after you compare the screen and any other feature that page describes outside these matching hardware rows. Pick a Commercial 1750 or 2450 if you need the deck to fold and you can live with a 12% incline.`,
  },
  'nordictrack-x24': {
    fits: `The X24 page describes a non-folding incline treadmill with the same transcribed hardware as the X16: 22 by 60 inch belt, 4.25 CHP, 400 lb capacity, 0 to 12 mph, and −6% to 40% incline. ${NT_CHP} The spec strip says Foldable: No. The page states a 24 inch screen. The X16 rows on this site do not include a screen measurement, so that figure is not copied onto the X16 as if its page had printed it.

Someone comparing these two for the room, the belt, or the user weight will not find a split in those fields.`,
    room: `Footprint is 69.9 inches long, 38.1 inches wide, and 73.3 inches high, matching the X16 page including the metric rounding NordicTrack prints (186.2 cm high on both). Step-up is 13.66 inches on both pages. Neither page prints a folded size or a floor clearance.

A ceiling that clears the X16 clears the X24 on the published machine height. The fit check does not treat the screen size as added height. NordicTrack already folded the console into the 73.3 inch figure, or it did not say otherwise. This site does not add extra inches for the screen.`,
    motor: `Motor, belt, speed, and incline match the X16 transcription. Household electrical requirements are not published on the X24 page either. The CHP footnote applies: 4.25 CHP is the lab rating NordicTrack names, not a household operating horsepower they also printed.

Against a Commercial 2450, you give up folding and the 14 mph top speed, and you gain the −6% to 40% incline plus a taller, shorter, slightly wider machine.`,
    warranty: `Warranty length is absent from the X24 spec sections cited in the table. It is not borrowed from the X16 page or from a retailer. Read NordicTrack’s current X24 page for any frame or motor coverage they print there.`,
    verdict: `On the numbers this site transcribes, the X24 and the X16 are the same machine in the room. The X24 page’s stated difference in the notes is the 24 inch screen. Choose the X24 when that screen, or another feature outside the spec table, is why you are on this page. Do not choose it to save floor space, to fold it away, or to raise the published user capacity. Those figures match the X16. For a folding deck, leave this pair and use a Commercial or T Series page.`,
  },
  'nordictrack-t-series-10': {
    fits: `The T Series 10 is NordicTrack’s smaller folding treadmill in this set. The page lists SKU NTL15425, a 20 by 60 inch belt, a 3.0 CHP motor rating, a 325 lb user capacity, and speeds to 12 mph. ${NT_CHP}

The 20 inch belt and 325 lb capacity are the published limits to check before the footprint. The Commercial pages in this set print a 22 inch belt and a 400 lb capacity. No rider height range is on the page. The machine folds.`,
    room: `Unfolded size is 75.1 inches long, 34.3 inches wide, and 58.4 inches high. That is shorter and narrower than the Commercial 1750’s 77.3 by 37.0, and lower than its 59.5 inch height. Floor area is about 2,576 square inches against about 2,860 for the Commercial folders.

Folded size is 41 by 34.3 by 68.3 inches. Stored height is the number that grows. Step-up is 8.3 inches, lower than the Commercial 10.0 inch step-up. No surrounding clearance and no ceiling rule are printed. The fit check uses the footprint, then step-up plus user height, and does not invent a rear safety zone.`,
    motor: `Belt 20 by 60 inches (51 by 152 cm). Motor 3.0 CHP with the lab-rating footnote. Incline is 0 to 12% in 0.5% increments, described as 25 levels. The spec strip also prints “−0% to 12%,” which does not add decline. Speed is 0 to 12 mph. Volts and amps are not stated.

The T Series 6.5 S URL currently publishes this same SKU and the same footprint, belt, motor, incline, step-up, and capacity. Folded inches are printed here, not in that other URL’s specification block.`,
    warranty: `The T Series 10 Performance Specs and Dimensions and weight blocks do not include a warranty term. This page does not add one. NordicTrack’s product page is the source for any coverage language they publish.`,
    verdict: `Choose the T Series 10 when a 20 inch belt, a 325 lb capacity, and a 3.0 CHP rating are acceptable and you want the smaller published floor. Choose a Commercial 1250 or 1750 when you need the 22 inch belt or the 400 lb capacity, and give the room another 2.2 inches of length and 2.7 inches of width. Treat the T Series 6.5 S URL as the same SKU until NordicTrack prints a different specification block. Do not copy this page’s folded size onto that URL.`,
  },
  'nordictrack-t-series-6-5-s': {
    fits: `On 1 November 2026 the T Series 6.5 S URL published SKU NTL15425, the same model number as the T Series 10 page. The specification block labeled T Series 6.5 S lists the same 20 by 60 inch belt, 3.0 CHP rating, 325 lb capacity, 75.1 by 34.3 by 58.4 inch footprint, 8.3 inch step-up, 0 to 12% incline, and 0 to 12 mph speed. ${NT_CHP}

The page title and product structured data said “T Series 6.5 S Treadmill.” Image file names on that URL use a T10 prefix, and the on-page model switcher presented T Series 10 as the current selection. This page records what that URL printed. It does not decide that two different machines exist.`,
    room: `Use the unfolded inches this URL does print: 75.1 long, 34.3 wide, 58.4 high. Folded dimensions are not in the 6.5 S specification block. The T Series 10 page for the same SKU does print a folded size of 41 by 34.3 by 68.3 inches. Those inches stay on the T Series 10 page so this table does not pretend the 6.5 S block stated them.

If you are measuring a closet, open the T Series 10 page and use the folded figures cited there. Step-up on this URL is 8.3 inches. No clearance rectangle is published.`,
    motor: `Motor and deck text matches the T Series 10 transcription, including the CHP footnote. The 6.5 S block does not add a voltage or an amperage. It does not add decline. Incline is 0 to 12% in 0.5% steps.

Nothing in this block supports a claim that the 6.5 S has a different belt, a different capacity, or a different top speed from the T Series 10 page.`,
    warranty: `The 6.5 S specification block does not state a warranty. The matching T Series 10 block does not state one either. Coverage terms, if NordicTrack prints them, are outside these tables.`,
    verdict: `Do not shop the 6.5 S URL as a smaller or cheaper sibling of the T Series 10 on the basis of these specs. The published SKU and the published hardware match. Use the T Series 10 page when you need a folded size with a citation. Use a Commercial model when you need a 22 inch belt or a 400 lb capacity. If NordicTrack later separates the two URLs, the rows here should be read again. The checked date on the table is 1 November 2026.`,
  },
  'sole-f63': {
    fits: `The F63 is Sole’s smallest folding treadmill in this set. The product page lists a 3.0 HP motor, a 20 by 60 inch running surface, and a 325 lb weight capacity. The motor line does not say continuous or peak, so this site does not add either word. The machine folds.

It fits a user inside 325 lb who can run on a 20 inch belt. The F65 page raises capacity to 350 lb and the motor line to 3.25 HP. The F85 and TT8 pages are the ones with a 22 inch belt. No rider height range is published.`,
    room: `Unit measurements are 75 inches long, 34 inches wide, and 52 inches high. Folded measurements are 42 by 34 by 71 inches. Open height is the shortest unfolded height among the Sole folding models here. Folded height is 71 inches, so the closet needs more vertical room than the open machine does.

The 2026 F63 owner’s manual says to leave a minimum of 3 1/2 feet (42 inches) between the rear of the treadmill and any fixed object. Side and front clearances are not stated in that section, and neither is a ceiling height. The fit check adds the 42 inches behind the deck and does not invent sides. Step-up height is not published. Deck thickness, 18 mm, is not used as a step-up height.`,
    motor: `Deck is 18 mm (0.7 inch). Belt is 2-ply, 1.6 mm, on a 20 by 60 inch running surface. Motor 3.0 HP. Speed 0.5 to 12 mph. The feature card says 0–15% incline. Full specifications list elevation as 0–15 levels. Both wordings are cited. Levels are not converted into a percent.

Power, from the manual’s safety section, is a 120-volt, 15-amp grounded outlet with only the treadmill on the circuit. Unit weight is 187 lb.`,
    warranty: `The full-specifications block on the F63 product page, and the Important Safety Instructions section of the 2026 manual used for the outlet and the rear clearance, do not state a warranty length. A frame or motor period is not added. Sole’s product page is the place to read the current coverage.`,
    verdict: `Choose the F63 when 3.0 HP, a 20 inch belt, and a 325 lb capacity match the user, and when a 75 by 34 inch floor plus 42 inches behind the deck is the room you have. The open height of 52 inches is the low figure in this Sole group. Step up to the F65 if you need the 350 lb capacity or the 3.25 HP line, and remeasure: that page prints 77 by 36 by 55 inches. Do not pick the F63 for a 22 inch belt. That width starts at the F85 in this set.`,
  },
  'sole-f65': {
    fits: `The F65 publishes a 3.25 HP motor, a 20 by 60 inch deck, and a 350 lb weight capacity. The motor line does not say continuous or peak. It folds. Capacity is 25 lb above the F63 and matches the F80 and F85 pages. Belt width stays at 20 inches, which is the split with the F85’s 22 inch running surface.

No user height window is printed. A heavier user who still wants Sole’s folding line is inside the 350 lb figure. A user who wants the wider belt is not served by this page’s deck.`,
    room: `The product-page dimension cards print 77 inches long, 36 inches wide, and 55 inches high, and a folded size of 48 by 36 by 66 inches. The full-specifications table on the same page lists weight capacity and does not repeat those inches. The cards are the citation for the footprint.

Compared with the F63, the floor grows by 2 inches of length and 2 inches of width, and the open height grows from 52 to 55 inches. Folded length grows from 42 to 48 inches, while folded height drops from 71 to 66 inches. The 2026 F65 manual requires the same 3 1/2 feet behind the treadmill. Sides, front, and ceiling are not stated there. Step-up height is not published. The 18 mm deck thickness is not a step-up height.`,
    motor: `Deck 18 mm, belt 2-ply at 1.6 mm, running surface 20 by 60 inches. Those deck lines match the F63 and the F80. The motor line is 3.25 HP, matching the F80 and sitting above the F63’s 3.0 HP. Speed is 0.5 to 12 mph. Incline is 0–15% in the product description and 0–15 levels in full specifications.

The manual’s safety section calls for a 120-volt, 15-amp grounded outlet and says the treadmill should be the only thing on that circuit. Unit weight is not in the fields transcribed for the F65, so none is shown.`,
    warranty: `Warranty years are not in the F65 full specifications or in the manual section cited for power and rear clearance. They are left blank here. Confirm any frame, motor, or labor term on Sole’s page.`,
    verdict: `The F65 is the step up from the F63 in capacity (350 lb), motor line (3.25 HP), and footprint (77 by 36 by 55), with the same 20 inch belt and the same rear-clearance sentence in the 2026 manual. The F80 keeps that motor line and that capacity and changes the open height to 59 inches, with a published unit weight of 223 lb. Move to the F85 if the 22 inch belt is the requirement. The F65 does not provide it.`,
  },
  'sole-f80': {
    fits: `The F80 publishes a 3.25 HP motor, a 20 by 60 inch running surface, and a 350 lb capacity. It folds. The motor line does not say continuous or peak. On the transcribed numbers, capacity, belt, motor, and speed match the F65. The open height and the unit weight are where this page adds figures the F65 transcription does not.

It suits the same user as the F65 on belt width and capacity. It does not suit someone who needs the 22 inch belt printed for the F85, or the 400 lb capacity printed for the TT8.`,
    room: `Unit measurements are 77 by 36 by 59 inches. Folded measurements are 48 by 36 by 66 inches, the same folded card as the F65. The open machine is 4 inches taller than the F65’s 55 inch height and 7 inches taller than the F63’s 52 inch height. Floor length and width match the F65.

The 2026 F80 manual repeats the 3 1/2 foot rear clearance and a 120-volt, 15-amp dedicated circuit. It does not state side clearance or a ceiling height in that section. Step-up height is unpublished. Do not substitute the 18 mm deck thickness.`,
    motor: `Deck build matches the F63 and F65 text: 18 mm deck, 2-ply belt at 1.6 mm, 20 by 60 inch surface. Motor 3.25 HP. Speed 0.5 to 12 mph. The feature card says 0–15% incline and full specifications say 0–15 levels. Unit weight is 223 lb, which gives a moving figure the F65 page’s transcribed fields do not include.

The F85 moves the running surface to 22 by 60 inches, the motor line to 3.5 HP, the footprint to 78 by 38 by 60, and the unit weight to 250 lb, at the same 350 lb user capacity.`,
    warranty: `The F80 specification sections and the safety section of the 2026 manual cited for the outlet and the rear clearance do not print a warranty length. No period is added from memory or from a retailer.`,
    verdict: `Choose the F80 over the F65 when you want Sole’s published 223 lb unit weight and you have clearance for a 59 inch open height. The belt, motor line, user capacity, folded size, speed, and rear-clearance rule do not separate them in this transcription. Choose the F63 to save floor width and open height, and accept 3.0 HP and 325 lb. Choose the F85 for the wider belt and the 3.5 HP line.`,
  },
  'sole-f85': {
    fits: `The F85 is the folding Sole model in this set with a 22 inch belt. The page lists a 3.5 HP motor, a 22 by 60 inch running surface, a 350 lb capacity, and a 250 lb unit weight. The motor line does not say continuous or peak. It folds.

Pick it over the F63, F65, and F80 when belt width is the requirement. Those three publish 20 inch running surfaces. The user-weight figure stays at 350 lb, the same as the F65 and F80 and below the TT8’s 400 lb. No rider height range is printed.`,
    room: `Unit measurements are 78 by 38 by 60 inches. Folded measurements are 48 by 38 by 66 inches. Against the F80, you add an inch of length, 2 inches of width, and an inch of open height. Folded width grows with the deck, from 36 to 38 inches. Folded length and height match the F80 card.

The 2026 F85 manual requires 3 1/2 feet behind the treadmill and a 120-volt, 15-amp grounded outlet used only by the treadmill. Side and ceiling figures are not in that section. Step-up height is not published. The 18 mm deck is thickness, not step-up.`,
    motor: `Deck 18 mm (0.7 inch). Belt 2-ply, 1.6 mm. Running surface 22 by 60 inches. Motor 3.5 HP. Speed 0.5 to 12 mph. The product description says incline to 15%. Full specifications list elevation as 0–15 levels. Both are cited, and levels are not turned into a grade.

The TT8 is the next Sole page up: 4.0 HP, the same 22 by 60 inch surface, a thicker 25 mm deck, decline published as levels, a 400 lb capacity, and no folded size.`,
    warranty: `A warranty term is not part of the F85 full specifications or the manual section used for power and rear clearance. This page does not supply one. Read Sole’s current product page for coverage.`,
    verdict: `The F85 is the folding Sole choice when the published belt has to be 22 inches and the user is within 350 lb. You take a 78 by 38 inch floor, a 60 inch open height, a 250 lb unit to move, and 42 inches of rear clearance from the manual. The F80 saves 2 inches of width and an inch of height with a 20 inch belt and a 3.25 HP line. The TT8 raises capacity to 400 lb and motor line to 4.0 HP, and it does not give you a folded size to cite.`,
  },
  'sole-tt8': {
    fits: `The TT8 publishes the largest Sole numbers in this set: a 4.0 HP motor, a 22 by 60 inch running surface, a 400 lb capacity, and a 319 lb unit weight. The motor line does not say continuous or peak. Incline is printed as −6 to 15 levels, not as a percent grade. This site does not convert levels to percent.

It is the Sole page for a user between 350 and 400 lb, or for someone who wants decline in the spec line. Fold status is unpublished. The full specifications list unit measurements and do not list folded measurements or a fold-up row, so this page does not call it a folding treadmill.`,
    room: `Unit measurements are 81 by 38 by 66 inches. That is the longest and tallest Sole footprint here, 3 inches longer and 6 inches taller than the F85, at the same 38 inch width. There is no folded size to reclaim floor with.

A 2026 TT8 owner’s manual was not found at the manual URLs checked, so the 3 1/2 foot rear clearance from the F-series manuals is not copied onto the TT8. The fit check uses the 81 by 38 inch machine only. Step-up height is not published. Deck thickness is 25 mm and is not a step-up height. No ceiling rule is printed. Open height of 66 inches is the machine figure a low ceiling has to clear.`,
    motor: `Deck is 25 mm (0.98 inch), described as waxed, no lubrication, reversible. That is thicker than the 18 mm decks on the F63, F65, F80, and F85. Belt is 2-ply, 1.6 mm, on a 22 by 60 inch surface. Motor 4.0 HP. Speed 0.5 to 12 mph. Elevation “−6~15 levels.” Voltage and amperage are not stated on the product page. Unit weight 319 lb is the figure for stairs and delivery, well above the F85’s 250 lb.`,
    warranty: `The TT8 full specifications do not include a warranty length, and a 2026 manual was not available at the URLs checked to supply one. No coverage period is filled in. Use Sole’s product page for the current terms.`,
    verdict: `Choose the TT8 when you need the 400 lb capacity, the 4.0 HP line, or the published decline levels, and you can place an 81 by 38 by 66 inch machine that has no folded size on this site. Choose the F85 if you need a cited folded size and a 350 lb capacity is enough. You keep a 22 inch belt and drop to a 3.5 HP line, an 18 mm deck, and a 78 by 38 by 60 inch open size, plus the F85 manual’s 42 inch rear clearance. Do not treat TT8 incline levels as a percent.`,
  },
  'horizon-7-0-at': {
    fits: `The 7.0 AT is Horizon’s folding treadmill with a 20 by 60 inch running area and a 325 lb maximum user weight. The machine-specs table does not publish horsepower. The product page describes a RapidSync motor and stops there, so this site does not invent a horsepower number. Speed is 0.5 to 12 mph and incline is 0 to 15%. Frame type is listed as FeatherLight Folding.

It fits a user inside 325 lb on a 20 inch belt. The 7.4 AT page is the one that moves to a 22 inch belt and 350 lb. The T202 stays at 20 inches and 325 lb with a shorter open height.`,
    room: `Assembled dimensions are 76 by 35 by 67 inches. Folded dimensions are 44 by 35 by 68 inches. Folding cuts the length and barely changes the height, so it saves floor more than it saves vertical space. Step-on height is 8 5/8 inches.

No side, rear, or ceiling clearance is in the machine-specs table. The fit check uses the assembled rectangle, then step-on height plus the user height you enter. A 67 inch open height is already tall for a low basement, before that second check. Unit weight is 277 lb.`,
    motor: `Running area 20 by 60 inches. Belt 1.6 mm, silicone. Deck thickness 0.7 inch (18 mm). Speed 0.5 to 12 mph. Incline 0 to 15%. Electrical requirements are printed as 60Hz, 120V, and the page says the treadmill is not compatible with GFCI outlets.

The 7.4 AT keeps the speed and incline, widens the belt to 22 inches, thickens the deck to 0.8 inch, raises capacity to 350 lb, and changes the assembled size to 76 by 37 by 63. Horsepower stays unpublished there too.`,
    warranty: `The 7.0 AT machine-specs table does not include a warranty term. Horizon’s current product page is the source for any frame or motor coverage. A retailer warranty line is not copied here.`,
    verdict: `Choose the 7.0 AT for a 20 by 60 inch belt, a 325 lb capacity, and a folding frame, with the horsepower left unpublished. Measure for 76 by 35 inches on the floor and 67 inches of height. Choose the T202 if you want a lower 57 inch open height at the same belt width and capacity, and accept a 0 to 12% incline and a lighter 187 lb unit weight. Choose the 7.4 AT for the 22 inch belt and the 350 lb capacity.`,
  },
  'horizon-7-4-at': {
    fits: `The 7.4 AT publishes a 22 by 60 inch running area and a 350 lb maximum user weight. Horsepower is not in the machine-specs table. The page describes a RapidSync motor without a horsepower figure. Speed is 0.5 to 12 mph. Incline is 0 to 15%. It folds.

The wider belt and the extra 25 lb of capacity are the published reasons to move up from the 7.0 AT. The 7.8 AT keeps the 22 inch belt and raises capacity again, to 375 lb, with a thicker belt (2.2 mm versus 1.6 mm).`,
    room: `Assembled size is 76 inches long, 37 inches wide, and 63 inches high. Folded size is 42 by 37 by 71 inches. Against the 7.0 AT you add 2 inches of width and drop 4 inches of open height, then the folded height rises to 71 inches from 68. The closet is the taller object.

Step-on height is 8 3/4 inches. Floor clearance and a ceiling rule are not published. Unit weight is 318 lb, so delivery is a different problem from the T202’s 187 lb. The fit check uses 76 by 37 inches of machine and does not add a safety border the table omits.`,
    motor: `Belt 1.6 mm, silicone, the same belt thickness as the 7.0 AT, on a wider 22 inch running area. Deck thickness 0.8 inch (20 mm), up from 0.7 inch. Electrical line matches the other Horizon pages here: 60Hz, 120V, not compatible with GFCI outlets. Speed and incline match the 7.0 AT and the 7.8 AT.

What the table still does not say is horsepower. Comparing these Horizon models on a motor number would be an invention.`,
    warranty: `Warranty length is not a row in the 7.4 AT machine-specs table that was transcribed. It stays off this page. Read Horizon’s product page for the current terms.`,
    verdict: `The 7.4 AT is the middle Horizon folding model on belt and capacity: 22 by 60 inches and 350 lb, with horsepower unpublished and a 76 by 37 by 63 inch open size. The 7.0 AT is narrower, taller when open, and limited to 325 lb. The 7.8 AT adds capacity to 375 lb, a 2.2 mm belt, one inch of open height, and 12 lb of unit weight, with the same folded size as this page prints. Choose on those published splits.`,
  },
  'horizon-7-8-at': {
    fits: `The 7.8 AT publishes the highest user weight in the Horizon group here, 375 lb, on a 22 by 60 inch running area. The belt is 2.2 mm silicone, thicker than the 1.6 mm belts on the 7.0 AT and 7.4 AT. Deck thickness is 0.8 inch (20 mm). Horsepower is not published. The page names a RapidSync motor and does not give a horsepower figure. Speed 0.5 to 12 mph, incline 0 to 15%, and it folds.

It is the Horizon page for a user between 350 and 375 lb, or for the thicker belt, not for a horsepower comparison.`,
    room: `Assembled dimensions are 76 by 37 by 64 inches. Folded dimensions are 42 by 37 by 71 inches, the same folded size as the 7.4 AT. Open height is one inch above the 7.4 AT and 3 inches below the 7.0 AT’s 67 inches. Floor length matches both 7-series siblings. Width matches the 7.4 AT at 37 inches and is 2 inches wider than the 7.0 AT.

Step-on height is 8 3/4 inches, matching the 7.4 AT. No clearance border and no ceiling formula are printed. Unit weight is 330 lb. A low ceiling should be checked against 64 inches of machine first.`,
    motor: `The motor description does not include horsepower, continuous or peak. What is published is the belt construction, the 22 by 60 inch running area, 0.5 to 12 mph, and 0 to 15% incline. Power is 60Hz, 120V, and the page says it is not compatible with GFCI outlets.

The T202 is the Horizon page with a published lower open height (57 inches) and a lighter unit (187 lb), at the cost of a 20 inch belt, a 325 lb cap, a 1.4 mm belt, and a 0 to 12% incline.`,
    warranty: `The 7.8 AT specs table does not state a warranty period. This site does not fill one from a review or a store page. Horizon’s product page carries whatever term they currently print.`,
    verdict: `Choose the 7.8 AT over the 7.4 AT for the 375 lb capacity and the 2.2 mm belt. You accept one more inch of open height and a 330 lb unit weight. Folded size, step-on height, speed, incline, deck thickness, and the missing horsepower do not change. Choose the 7.4 AT if 350 lb and a 1.6 mm belt are enough and you want the 63 inch open height. Choose the 7.0 AT only if a 20 inch belt and 325 lb are enough and you can use a taller 67 inch open frame.`,
  },
  'horizon-t202': {
    fits: `The T202 publishes a 20 by 60 inch running area, a 325 lb maximum user weight, a 0.5 to 12 mph speed range, and a 0 to 12% incline. Horsepower is not in the table. The page describes an ultra-quiet motor and does not publish a horsepower number. It folds. The comparison table on the product page also lists a T101 Connect. Figures here are the T202 column only.

Belt width and capacity match the 7.0 AT. Incline tops out at 12% instead of 15%. The open machine is much shorter.`,
    room: `Assembled dimensions are 76 by 34 by 57 inches. That is the lowest Horizon open height in this set, 10 inches under the 7.0 AT and 6 inches under the 7.4 AT, at a 34 inch width that is an inch narrower than the 7.0 AT. Folded size is 48 by 34 by 62 inches. Folding reduces length by 28 inches and raises height from 57 to 62 inches.

Step-on height is 7 1/4 inches, the lowest step-on figure among these Horizon models. No rear or side clearance is published. Unit weight is 187 lb, the same published weight as the Sole F63 and far under the 7-series units (277 to 330 lb). Electrical requirements match the other Horizon pages: 60Hz, 120V, not for GFCI outlets.`,
    motor: `Belt 1.4 mm, silicone, thinner than the 1.6 mm belt on the 7.0 AT and the 2.2 mm belt on the 7.8 AT. Deck thickness 0.7 inch (18 mm), matching the 7.0 AT. Speed matches the 7-series at 0.5 to 12 mph. Incline stops at 12% rather than 15%. Horsepower remains unpublished, so the “ultra-quiet” description is not turned into a motor rank.

A user over 325 lb, or anyone who needs the 22 inch belt, is outside this page. Those figures start at the 7.4 AT.`,
    warranty: `The T202 machine-specs column does not include a warranty length. None is added. Check Horizon’s product page for the current frame and motor terms.`,
    verdict: `Choose the T202 when the room needs the 57 inch open height, the 34 inch width, or the 187 lb unit weight, and a 20 inch belt, a 325 lb cap, and a 12% incline are acceptable. Choose the 7.0 AT if you want 15% incline and can take 67 inches of height and 277 lb. Choose the 7.4 AT or 7.8 AT if you need a 22 inch belt or more than 325 lb of published capacity. Do not rank the T202 against them on horsepower. Horizon did not print it.`,
  },
  'bowflex-t6': {
    fits: `The T6 publishes a 20 inch by 60 inch running path, speeds from 0 to 12 mph, incline up to 15%, and a 325 lb maximum user weight. Horsepower is not on the specs block. The page names a MaxReact drive system and does not publish horsepower, so no horsepower is shown. It folds. Product weight is 233.7 lb.

It fits a user inside 325 lb who wants the narrower path. The T9 and T16 pages move to a 22 inch path. No separate rider height window is printed. The ceiling rule is the height constraint BowFlex does print.`,
    room: `Open dimensions are 76 inches long, 35 inches wide, and 71 inches high. Stowed dimensions are 44 by 35 by 71 inches. Folding shortens the length and leaves the height at 71 inches, so a low ceiling is not helped by folding.

BowFlex prints a minimum ceiling height of user height plus 20.75 inches. The fit check applies that sum as written. It does not split 20.75 inches into deck height, incline rise, and headroom, because BowFlex does not publish that split. A 70 inch user needs a 90.75 inch ceiling under that rule, which is stricter than the 71 inch machine height. Floor clearances beside or behind the treadmill are not stated. Step-up height is not stated.`,
    motor: `Running path 20 by 60 inches (50.8 by 152.4 cm). Speed 0 to 12 mph (0 to 20 km on the page’s wording). Incline up to 15%. No decline figure is printed for the T6. Voltage and amperage are not stated. The drive system name is not a horsepower.

The T9 keeps the 15% incline and 12 mph speed, widens the path to 22 inches, raises capacity to 350 lb, and changes the open length.`,
    warranty: `The T6 specs block does not include a warranty term. This page does not borrow one from a retailer or from another BowFlex model. The product page is where any current coverage is printed.`,
    verdict: `Choose the T6 when a 20 inch running path and a 325 lb capacity are enough, and the room can take a 71 inch machine height plus BowFlex’s user-height-plus-20.75-inch ceiling rule. Folding saves length down to 44 inches and does not lower the machine. Choose the T9 for a 22 inch path and a 350 lb capacity, and remeasure using the larger of the two official dimension sets. Choose the T16 if you also need the 375 lb capacity. None of the three pages publish horsepower in the specs block.`,
  },
  'bowflex-t9': {
    fits: `The T9 publishes a 22 by 60 inch running path, speeds to 12 mph, incline up to 15%, and a 350 lb maximum user weight. The product page prints 350 lb (158.8 kg). The owner’s manual prints 159 kg / 350 lb. Horsepower is not published. The page names a MaxReact drive system without a horsepower figure. It folds.

The wider path and the 350 lb capacity are the step up from the T6. The T16 keeps the 22 inch path and raises capacity to 375 lb. No separate user height range is printed beyond the ceiling rule.`,
    room: `Two official dimension sets disagree. The product page prints 77.2 inches long, 37 inches wide, and 67.6 inches high. The owner’s manual prints 78 inches long, 37 inches wide, and 67 inches high. The fit check uses the larger published number on each axis: 78 long, 37 wide, 67.6 high, so a room that passes is large enough for either set. Both sets are shown in the table.

Stowed size on the product page is 48.6 by 37 by 67.6 inches. The manual excerpt checked does not restate stowed size. Ceiling rule: user height plus 20.75 inches, same sentence as the T6 and T16. Floor clearance is not stated. Step-up height is not stated. Product weight is 282 lb on the page and 128 kg / 282.2 lb in the manual.`,
    motor: `Running path 22 by 60 inches. Speed 0 to 12 mph. Incline up to 15%. No horsepower, no voltage, and no amperage in the product-page specs or the manual Tech Specs section that was checked. The path width is the deck difference versus the T6. Capacity is the other.

The manual citation for the alternate inches is the Tech Specs section of BowFlex’s T9 owner’s manual, read 1 November 2026.`,
    warranty: `Neither the product-page specs nor the manual Tech Specs section checked for dimensions and weight include a warranty length. No period is added. Read BowFlex’s current page or the full warranty section of the manual you receive.`,
    verdict: `Choose the T9 when you need the 22 inch path and a 350 lb capacity, and you measure the room for 78 by 37 by 67.6 inches so both published dimension sets fit. The ceiling rule is still user height plus 20.75 inches, which will usually be the tighter vertical limit. Choose the T6 to keep a 20 inch path and a 325 lb cap in a 76 by 35 inch floor, with a taller 71 inch machine. Choose the T16 for 375 lb. The open and stowed inches on the T16 page match this product page’s inches, not the manual’s 78 inch length.`,
  },
  'bowflex-t16': {
    fits: `The T16 publishes a 22 by 60 inch running path, a 375 lb maximum user weight, speeds to 12 mph, and incline up to 15%. The summary on the product page includes a 16 inch touchscreen. Horsepower is not in the BowFlex specs block. The page names a MaxReact drive system and does not publish horsepower. A horsepower figure that shows up only in a retailer title is not copied into this table. It folds.

This is the BowFlex page in the set for a user between 350 and 375 lb. Belt width matches the T9, not the T6.`,
    room: `Dimensions are 77.2 inches long, 37 inches wide, and 67.6 inches high. Stowed dimensions are 48.6 by 37 by 67.6 inches. Those match the T9 product page and do not include the T9 manual’s alternate 78 inch length, because this model’s page does not print that second set. The fit check uses 77.2 by 37 by 67.6.

Ceiling rule: user height plus 20.75 inches. A 72 inch user needs 92.75 inches of ceiling under that rule, above the 67.6 inch machine. Floor clearances are not stated. Step-up height is not stated. Product weight is 293.2 lb, about 11 lb above the T9 page’s 282 lb and well above the T6’s 233.7 lb.`,
    motor: `Running path, speed, and incline match the T9 transcription. The capacity does not: 375 lb here, 350 lb on the T9, 325 lb on the T6. Power volts and amps are not stated. Deck width is the reason to leave the T6, not a motor number. There is no motor number on any of the three specs blocks.`,
    warranty: `The T16 specs block does not state a warranty term. This page does not invent a frame or motor period and does not copy one from the T9 manual. Check BowFlex’s product page for the current language.`,
    verdict: `Choose the T16 when the published need is the 375 lb capacity or the 16 inch screen the page describes, on a 22 by 60 inch path. The room matches the T9 product-page footprint, and the ceiling rule matches the T6 and the T9. Choose the T9 if 350 lb is enough and you want the slightly lower published unit weight, and measure for the T9 manual’s 78 inch length as well. Choose the T6 for the 20 inch path. Do not choose among them by horsepower. BowFlex did not print it.`,
  },
  'peloton-tread-vision': {
    fits: `The treadmill sold at Peloton’s /shop/tread page on 1 November 2026 is titled Tread Vision. Peloton prints a user weight range of 105 to 300 lb and a user height range of 4 feet 11 inches to 6 feet 4 inches (59 to 76 inches). The belt is 59 inches long and 20 inches wide. Horsepower is not stated. A separate non-Vision “Peloton Tread” spec sheet was not found, so these are the figures for the current shop page.

It does not fit a user outside that height band or over 300 lb, on Peloton’s own requirements. The page does not say this model folds. Peloton describes folding on the Tread Flex, which is a different model.`,
    room: `Dimensions are 68 inches long, 33 inches wide, and 65 inches high. The machine rectangle is one of the smaller floors in this set. The clearance Peloton prints changes that.

Delivery text asks for 24 inches on the left, right, and front, plus 78.7 inches behind, and a ceiling of at least 7 feet. The same page recommends at least 24 inches between the user’s head and the ceiling. The FAQ says 24 inches left, right, and front, 79 inches behind, and a ceiling at least 20 inches greater than the user’s height. The fit check uses the larger rear figure, 79 inches, and requires both the 7-foot ceiling and the user-plus-20-inch rule. Added up, the in-use length is 68 + 24 + 79 = 171 inches, and the width is 33 + 24 + 24 = 81 inches. The small chassis does not mean a small room.

Step-up height is 8 inches. Machine weight is 316 lb. The FAQ repeats the 68 by 33 by 65 inch size and the 316 lb weight.`,
    motor: `Belt 59 by 20 inches. Speed 0 to 12.5 mph in 0.1 mph steps. Incline 0 to 12.5% in 0.5% steps. No decline is printed. Horsepower is not in the specs block. Power is a dedicated, grounded circuit capable of carrying 15 or more amps. Voltage is not stated.

The Tread+ Vision page lengthens the belt to 67 by 20 inches, raises step-up to 11 inches, raises incline to 15% in 0.05% steps, and keeps the same speed range and the same 105 to 300 lb window. It does not add horsepower either.`,
    warranty: `The Tread Vision specs and the user and power requirements do not state a warranty length. None is added from a secondary listing. Peloton’s shop page is the place to read any coverage they print.`,
    verdict: `Choose the Tread Vision when the user is inside 4 feet 11 inches to 6 feet 4 inches and 105 to 300 lb, and the room can hold 171 by 81 inches once Peloton’s clearances are added. The 68 by 33 inch chassis is not the whole floor. Choose the Tread+ Vision for the longer slat belt, the 15% incline, and the 11 inch step-up, and plan on a 75 by 37 by 70 inch machine at 460 lb with its own clearance sentences. Neither page publishes horsepower or a folded size.`,
  },
  'peloton-tread-plus-vision': {
    fits: `The treadmill at Peloton’s /shop/tread-plus page on 1 November 2026 is titled Tread+ Vision. User weight is 105 to 300 lb. User height is 4 feet 11 inches to 6 feet 4 inches. The belt is 67 inches long and 20 inches wide, and the page describes 59 individual rubberized slats across 67 inches of running space. Horsepower is not stated. The specs do not say the machine folds.

The user limits match the Tread Vision. The belt, the step-up, the incline, the weight of the machine, and the footprint do not.`,
    room: `Dimensions are 75 inches long, 37 inches wide, and 70 inches high. That is 7 inches longer, 4 inches wider, and 5 inches taller than the Tread Vision, and the step-up is 11 inches instead of 8.

Delivery text: 24 inches of clearance on the left, right, and front, plus 78.7 inches behind, and a ceiling of at least 7 feet. The page recommends at least 24 inches between the user’s head and the ceiling. The FAQ uses the same 24 inch side and front figures, 78.7 inches behind, and a ceiling at least 24 inches greater than the user’s height. Unlike the Tread Vision FAQ, this FAQ does not print a second, larger rear number, so 78.7 inches is the rear figure. In-use length is 75 + 24 + 78.7 = 177.7 inches. In-use width is 37 + 48 = 85 inches. The fit check also requires the 7-foot ceiling and the user-plus-24-inch rule. Machine weight is 460 lb.`,
    motor: `Slat belt, 67 by 20 inches, rather than the Tread Vision’s 59 by 20 inch belt. Speed still 0 to 12.5 mph in 0.1 mph steps. Incline 0 to 15% in 0.05% steps, a higher top grade and a finer increment than the Tread Vision’s 12.5% in 0.5% steps. No horsepower. Power requirement matches: a dedicated, grounded circuit of 15 amps or more, voltage unstated.

The 460 lb unit weight is the delivery figure. It is 144 lb above the Tread Vision’s 316 lb.`,
    warranty: `Warranty length is not in the Tread+ Vision specs or the user and power block. It is not copied from the Tread Vision page. Read Peloton’s shop page for current coverage.`,
    verdict: `Choose the Tread+ Vision when you want the 67 inch slat belt, the 15% incline, and you can place a 75 by 37 by 70 inch, 460 lb machine inside Peloton’s clearance and ceiling rules. The user height and weight limits do not get wider than the Tread Vision. Choose the Tread Vision if the shorter belt is acceptable and you want the smaller chassis and the lower unit weight, still with a large published rear clearance. Neither machine has a folded size on these pages.`,
  },
  'life-fitness-run-cx': {
    fits: `The Run CX is the only Life Fitness treadmill in this set. The shop page lists a 60 by 22 inch running surface, a 3.0 HP (6.0 HP peak) DC motor with a MagnaDrive motor controller, and a 400 lb maximum user weight. The page does not use the word continuous, so that word is not added. Speed is 0.5 to 12 mph. Incline is 0 to 15% in 0.5% increments. SKU on the page is RRR-TR-0000-03.

It fits a user up to 400 lb who wants a 22 inch belt and a published peak-horsepower line. No rider height window is printed. The catalog URL lifefitness.com/en-us/catalog/cardio/treadmills/run-cx returned “page not found” on 1 November 2026. These figures are from Life Fitness’s own shop page.`,
    room: `Dimensions are 79.5 inches long, 32 inches wide, and 61 inches high. The width is narrow for a 22 inch belt: several 22 inch belts in this set sit on 37 or 38 inch frames. The length is among the longer floors. Step-up height in the product summary is 6 inches, the lowest published step-up in the set.

The specifications table does not list folded dimensions or a folding row. A quoted review on the shop page says the treadmill does not fold. That sentence is a review, not a specifications-table row, so folded size stays unpublished and the folding lists leave this model off. No side or rear clearance and no ceiling rule are printed. With a 6 inch step-up and no ceiling rule, the extra ceiling check is 6 inches plus the user height you enter. Machine weight is 341 lb. The power cord is 6 feet, at the front of the unit, which is the outlet placement to plan.`,
    motor: `Motor system: 3.0 HP (6.0 HP peak) DC with MagnaDrive. Running surface 60 by 22 inches (153 by 56 cm). Incline 0 to 15% in half-percent steps. Speed 0.5 to 12 mph (0.8 to 19 kph). Power requirements say “all major voltage configurations (outside U.S. may vary).” A specific household amperage is not stated.

That is a fuller electrical sentence than the NordicTrack Commercial pages, which do not state voltage, and a less specific one than Sole’s 120-volt, 15-amp manual line or Horizon’s 120V non-GFCI line.`,
    warranty: `The Run CX specifications block does not include a warranty length. The shop-page review is not used as a warranty source either. Read Life Fitness’s current shop page for any coverage they print. Nothing is copied from a dealer.`,
    verdict: `The Run CX is the page in this set with a 22 inch belt, a 32 inch frame width, a 6 inch step-up, a 400 lb capacity, and a motor line that states both 3.0 HP and 6.0 HP peak. Plan on 79.5 by 32 by 61 inches and a 341 lb unit, and do not assume it folds. The missing catalog page means the shop specifications are the citation. If you need a folded size you can cite, use a model whose own table prints one. If you need horsepower left as a single unqualified number, this page is the wrong comparison, because Life Fitness printed both a horsepower and a peak.`,
  },
  'lifespan-tr1200i': {
    fits: `The TR1200i is the only LifeSpan treadmill in this set, and the only one with a 56 inch belt length. LifeSpan publishes a 20 inch by 56 inch belt, a 2.5 HP continuous-duty DC motor, and a 300 lb maximum user weight. The product description and the specifications both use continuous-duty for that motor. It folds. Speed is 0.5 to 11 mph, which is the lowest top speed in this set. Incline is 15 levels. The page does not state a percent grade, and this site does not convert levels to percent.

It fits a user inside 300 lb who can use a shorter, 20 inch belt. It does not fit the 22 inch belt comparison, and it does not fit a user over 300 lb.`,
    room: `Unfolded dimensions are 70.25 inches long, 33 inches wide, and 55 inches high. That is one of the smaller floors and lower open heights in the set. Folded dimensions are 39 by 33 by 63 inches, a short stored length with a height that grows past the open machine.

Step-up height is 8.25 inches. No rear, side, or ceiling clearance is published, so the fit check does not add a safety border. Product weight is 221 lb. A low ceiling has to clear 55 inches of open machine, or 63 inches if it is stored upright, and then the step-up-plus-user check because no ceiling rule is printed.`,
    motor: `Drive motor 2.5 HP continuous-duty DC. Belt type 2-ply. Deck 3/4 inch phenolic with brace. Those deck words are more specific than a thickness alone. Speed 0.5 to 11 mph. Incline 15 levels, not a percent. Power source: 115V NEMA 5-15 non-GFI circuit. The page says not to plug into a GFI outlet or circuit.

Against a 60 inch belt, the running surface is 4 inches shorter. Against Horizon’s non-GFCI note and Sole’s dedicated 15-amp circuit, the published electrical limit is in the same family: a household 115V circuit that is not GFI.`,
    warranty: `The TR1200i specifications do not include a warranty term. No frame, motor, or labor period is added. LifeSpan’s product page is the source for any coverage they currently print.`,
    verdict: `Choose the TR1200i when the room wants a 70.25 by 33 by 55 inch open machine, the user is within 300 lb, and a 56 inch belt at up to 11 mph is enough. The motor line is one of the few in this set that says continuous-duty, at 2.5 HP. Choose a 60 inch belt from another brand if the shorter deck is the problem, and expect a longer floor. Do not treat 15 incline levels as 15 percent. LifeSpan did not print that equivalence.`,
  },
};
