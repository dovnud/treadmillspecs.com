/** Brand-page notes. Figures are the same ones transcribed on the model pages. */

export type BrandCopy = {
  lede: string;
  note: string;
};

export const brandCopy: Record<string, BrandCopy> = {
  nordictrack: {
    lede: 'Seven NordicTrack pages, from the folding T Series and Commercial decks to the non-folding X16 and X24 incline trainers. Every CHP line on these pages carries NordicTrack’s laboratory-rating footnote.',
    note: `The folding Commercial trio shares a 22 by 60 inch belt, a 400 lb capacity, a 77.3 by 37.0 inch floor, a 10 inch step-up, and −3% to 12% incline. The 1250 prints 3.6 CHP and 12 mph at 59.5 inches high. The 1750 prints 4.25 CHP with that same speed and height. The 2450 keeps 4.25 CHP, raises top speed to 14 mph, and raises open height to 63.4 inches. Folded size on all three is 44.2 by 37 by 69 inches. None of those pages prints a side or rear clearance, or a household voltage.

The T Series 10 is the smaller folder: 20 by 60 inch belt, 3.0 CHP, 325 lb, 75.1 by 34.3 by 58.4 inches, step-up 8.3 inches. The T Series 6.5 S URL published the same SKU, NTL15425, and the same hardware on the day these tables were read. Folded size is printed on the T Series 10 page only.

The X16 and X24 do not fold. Both print 4.25 CHP, a 22 by 60 inch belt, 400 lb, 0 to 12 mph, −6% to 40% incline, and a 69.9 by 38.1 by 73.3 inch body with a 13.66 inch step-up. The X24 page states a 24 inch screen. The X16 rows do not include a screen size.

NordicTrack’s own footnote says continuous horsepower is a dynamometer rating and does not denote operational horsepower in ordinary household use. Warranty length is not in the spec sections transcribed here. Use each product page for the current terms, and the model pages for the row-level citations.`,
  },
  sole: {
    lede: 'Five Sole treadmills. The F63, F65, F80, and F85 fold and share a 2026 manual rule of 3 1/2 feet behind the deck. The TT8 page does not print a folded size.',
    note: `Belt width splits the folding line. The F63, F65, and F80 publish a 20 by 60 inch running surface. The F85 publishes 22 by 60. Motor lines, none of which say continuous or peak, run 3.0 HP on the F63, 3.25 HP on the F65 and F80, and 3.5 HP on the F85. Capacity is 325 lb on the F63 and 350 lb on the F65, F80, and F85. Deck thickness on those four is 18 mm, with a 2-ply, 1.6 mm belt. Speed is 0.5 to 12 mph. Incline is written as a percent on the feature card or description and as levels in the full specifications. Levels are not converted.

Open size grows with the line: F63 75 by 34 by 52, F65 77 by 36 by 55, F80 77 by 36 by 59, F85 78 by 38 by 60. The F65 and F80 share a folded size of 48 by 36 by 66. The F63 folds to 42 by 34 by 71, so it stores shorter and taller. Each of those four manuals also requires a 120-volt, 15-amp outlet used only by the treadmill. Step-up height is not published. Unit weight is 187 lb on the F63, unpublished in the F65 fields, 223 lb on the F80, and 250 lb on the F85.

The TT8 is the 4.0 HP, 400 lb, 22 by 60 inch machine with a 25 mm deck, decline printed as −6 to 15 levels, and unit measurements of 81 by 38 by 66. It weighs 319 lb on the page. A 2026 TT8 manual was not found at the URLs checked, so the F-series rear clearance is not copied onto it. Warranty length is not in the sections used for these tables.`,
  },
  horizon: {
    lede: 'Four folding Horizon treadmills. Horsepower is not in any of the machine-specs tables, so these pages do not rank them by a motor number.',
    note: `The 7.0 AT and the T202 use a 20 by 60 inch running area and a 325 lb cap. The 7.4 AT and 7.8 AT use a 22 by 60 inch running area, at 350 lb and 375 lb. Speed is 0.5 to 12 mph on all four. Incline is 0 to 15% on the three 7-series models and 0 to 12% on the T202. Every page says 60Hz, 120V, and not compatible with GFCI outlets.

Open height is the room split. The T202 is 76 by 34 by 57 and weighs 187 lb, with a 7 1/4 inch step-on and a 1.4 mm belt. The 7.0 AT is 76 by 35 by 67, 277 lb, step-on 8 5/8 inches, 1.6 mm belt, 0.7 inch deck. The 7.4 AT is 76 by 37 by 63, 318 lb, 1.6 mm belt, 0.8 inch deck. The 7.8 AT is 76 by 37 by 64, 330 lb, with a thicker 2.2 mm belt and the same 0.8 inch deck and the same folded size as the 7.4 AT (42 by 37 by 71). The 7.0 AT folds to 44 by 35 by 68. The T202 folds to 48 by 34 by 62.

No floor clearance or ceiling formula is printed, and no warranty length is in the columns transcribed here. The T202 page also shows a T101 Connect column. Only the T202 figures are used.`,
  },
  bowflex: {
    lede: 'Three folding BowFlex treadmills. None of the specs blocks publish horsepower. All three print the same ceiling rule: user height plus 20.75 inches.',
    note: `The T6 is a 20 by 60 inch running path, 325 lb, 0 to 12 mph, up to 15% incline, in a 76 by 35 by 71 inch frame that stays 71 inches tall when it is stowed at 44 by 35 inches. Product weight is 233.7 lb. The T9 widens the path to 22 inches and raises capacity to 350 lb. Its product page prints 77.2 by 37 by 67.6 inches and a stowed size of 48.6 by 37 by 67.6, at 282 lb. The owner’s manual prints 78 by 37 by 67 inches and 282.2 lb. The fit check uses the larger number on each axis.

The T16 keeps the 22 inch path and the product-page footprint of the T9, raises capacity to 375 lb, lists a 16 inch touchscreen in the product description, and weighs 293.2 lb. It does not repeat the T9 manual’s 78 inch length. Step-up height and floor clearance are unpublished on all three. The ceiling rule is applied as a single sum, because BowFlex does not split the 20.75 inches into deck, incline, and headroom.

A horsepower figure that appears only in a retailer title is not added to these tables. Warranty length is not in the specs blocks.`,
  },
  peloton: {
    lede: 'Two current Peloton shop pages, the Tread Vision and the Tread+ Vision. Both limit the user to 105–300 lb and 4 feet 11 inches to 6 feet 4 inches. Neither publishes horsepower or a folded size.',
    note: `The Tread Vision, sold at the /shop/tread address checked for this site, is 68 by 33 by 65 inches with an 8 inch step-up, a 59 by 20 inch belt, and a 316 lb machine weight. Speed is 0 to 12.5 mph. Incline is 0 to 12.5%. Delivery text asks for 24 inches on each side and in front, 78.7 inches behind, and a 7-foot ceiling. The FAQ prints 79 inches behind and a ceiling at least 20 inches over the user’s height. The fit check uses the larger rear figure. In use, that is a 171 by 81 inch floor, not a 68 by 33 inch floor.

The Tread+ Vision is 75 by 37 by 70 inches, with an 11 inch step-up, a 67 by 20 inch slat belt, incline to 15% in 0.05% steps, and a 460 lb machine weight. Its rear clearance is 78.7 inches, and the ceiling rule is user height plus 24 inches on top of the 7-foot minimum. In-use floor is about 178 by 85 inches. Both pages require a dedicated grounded circuit of 15 amps or more and do not state voltage.

Folding language on Peloton’s site for the Tread Flex is a different model and is not applied here. Warranty length is not in the spec blocks. A separate non-Vision Tread spec sheet was not found for the shop URL.`,
  },
  'life-fitness': {
    lede: 'One Life Fitness treadmill, the Run CX, transcribed from Life Fitness’s shop page after the catalog URL returned page not found.',
    note: `The Run CX publishes a 60 by 22 inch running surface, a 3.0 HP (6.0 HP peak) DC motor with a MagnaDrive controller, and a 400 lb user capacity. The page does not call the 3.0 HP figure continuous. Speed is 0.5 to 12 mph. Incline is 0 to 15% in 0.5% steps. SKU RRR-TR-0000-03. Dimensions are 79.5 by 32 by 61 inches, which is a long, narrow frame for a 22 inch belt. Step-up height in the product summary is 6 inches, the lowest step-up transcribed in this set. Machine weight is 341 lb.

The specifications table does not list a folded size. A review quoted on the shop page says the treadmill does not fold. That sentence stays a review, so folded size is left unpublished and the folding list does not include this model. Power requirements say all major voltage configurations, with a note that configurations outside the U.S. may vary, and a 6 foot cord at the front. A specific household amperage is not stated. No side, rear, or ceiling clearance is printed. With a 6 inch step-up and no ceiling rule, the extra ceiling check is step-up plus the height you enter.

The catalog address lifefitness.com/en-us/catalog/cardio/treadmills/run-cx returned page not found on 1 November 2026. The shop specifications are the citation. Warranty length is not in that specifications block. Read the current Life Fitness shop page before relying on a coverage period, and use the model page for each row’s link.

Who it fits is a user inside 400 lb who wants the 22 inch belt and can place a 79.5 by 32 inch machine that is not documented as folding. Who it does not fit, on these pages, is someone who needs a folded size with a specification-table citation. Other brands in this set print that size when they offer it.`,
  },
  lifespan: {
    lede: 'One LifeSpan treadmill, the TR1200i. It is the only belt in this set that is 56 inches long, and the motor line says 2.5 HP continuous-duty.',
    note: `LifeSpan prints a 20 by 56 inch belt, a 2-ply belt, and a 3/4 inch phenolic deck with a brace. The drive motor is 2.5 HP continuous-duty DC in both the product description and the specifications. Maximum user weight is 300 lb. Speed is 0.5 to 11 mph, the lowest top speed transcribed here. Incline is 15 levels. The page does not state a percent grade, and levels are not converted.

Unfolded size is 70.25 by 33 by 55 inches. Folded size is 39 by 33 by 63 inches. Step-up height is 8.25 inches. Product weight is 221 lb. Power is a 115V NEMA 5-15 non-GFI circuit, and the page says not to use a GFI outlet or circuit. No rear, side, or ceiling clearance is printed, so the fit check does not add one. Open height of 55 inches is among the lower machines in the set. Stored height grows to 63 inches.

A user over 300 lb, or anyone who needs a 60 inch belt, is outside this page. A 22 inch belt is outside it as well. Warranty length is not in the specifications. The model page has the row citations, including the continuous-duty wording, which is LifeSpan’s term and not a label added by this site.

Use the TR1200i when the shorter deck and the 70.25 by 33 inch floor are what the room allows, and 11 mph is enough. Use another brand’s 60 inch belt if the running length is the objection, and expect the floor to get longer.`,
  },
};
