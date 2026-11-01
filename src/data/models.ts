/**
 * Manufacturer specs read on 1 November 2026.
 * A number appears here only when the cited page stated it.
 * "Not published by manufacturer" means that page did not state the field.
 */

export const CHECKED = '2026-11-01';

export type Cite = { url: string; where: string };

export type Field = {
  text: string;
  published: boolean;
  cite: Cite;
};

export type Dims = Field & {
  /** Inches, transcribed from the published figure. Absent when unpublished. */
  l?: number;
  w?: number;
  h?: number;
};

export type Clearance = {
  frontIn?: number;
  sideIn?: number;
  rearIn?: number;
  /** A second rear figure printed on the same page. The calculator uses the larger one. */
  rearAlsoIn?: number;
  minCeilingIn?: number;
  /** Published rule: ceiling must be at least the user's height plus this many inches. */
  userPlusIn?: number;
  /** Printed as a recommendation, not as the minimum. */
  recommendedHeadroomIn?: number;
  summary: string;
  cite: Cite;
};

export type Model = {
  slug: string;
  brand: string;
  brandSlug: string;
  name: string;
  sku?: string;
  folds: 'yes' | 'no' | 'unpublished';
  deck: Field;
  motor: Field;
  maxUserLb: number | null;
  maxUser: Field;
  unfolded: Dims;
  folded: Dims;
  stepUpIn: number | null;
  stepUp: Field;
  power: Field;
  incline: Field;
  speed: Field;
  machineWeight?: Field;
  clearance?: Clearance;
  /** Published rider height window, inches. */
  userHeight?: { minIn: number; maxIn: number; text: string; cite: Cite };
  /**
   * Inches the fit check uses for the unfolded machine when two official
   * sources disagree. Each axis is the larger published figure.
   */
  fitUnfolded?: { l: number; w: number; h: number; why: string };
  productUrl: string;
  searchQuery: string;
  summary: string;
  notes: string[];
};

const NT_CHP =
  'NordicTrack’s footnote on this page: Continuous Horsepower (“CHP”) is a laboratory dynamometer rating and “does not denote the operational horsepower of the treadmill in ordinary household use.”';

function field(text: string, url: string, where: string, published = true): Field {
  return { text, published, cite: { url, where } };
}

function missing(url: string, where: string): Field {
  return field('Not published by manufacturer', url, where, false);
}

function dims(text: string, url: string, where: string, l: number, w: number, h: number): Dims {
  return { ...field(text, url, where), l, w, h };
}

const soleRear = (manual: string, model: string): Clearance => ({
  rearIn: 42,
  summary:
    `${model} owner’s manual: install on a flat level surface with access to a 120-volt, 15-amp grounded outlet, and provide a minimum of 3 1/2 feet clearance between the rear of the treadmill and any fixed object. Side and front clearances are not stated in that section.`,
  cite: { url: manual, where: `${model} owner’s manual, Important Safety Instructions, read 1 November 2026` },
});

const solePower = (manual: string, model: string): Field =>
  field(
    '120-volt, 15-amp grounded outlet, with only the treadmill plugged into the circuit',
    manual,
    `${model} owner’s manual, Important Safety Instructions, read 1 November 2026`,
  );

const F63M = 'https://www.soletreadmills.com/cdn/shop/files/2026_F63_OM.pdf';
const F65M = 'https://www.soletreadmills.com/cdn/shop/files/2026_F65_OM.pdf';
const F80M = 'https://www.soletreadmills.com/cdn/shop/files/2026_F80_OM.pdf';
const F85M = 'https://www.soletreadmills.com/cdn/shop/files/2026_F85_OM.pdf';

const hzPower = (url: string): Field =>
  field(
    '60Hz – 120V. Not compatible with GFCI outlets.',
    url,
    'Machine Specs table, Electrical Requirements, on the product page',
  );

export const models: Model[] = [
  {
    slug: 'nordictrack-commercial-1250',
    brand: 'NordicTrack',
    brandSlug: 'nordictrack',
    name: 'NordicTrack Commercial 1250',
    sku: 'NTL14125',
    folds: 'yes',
    deck: field('22 × 60 in belt (55 × 152 cm)', 'https://www.nordictrack.com/product/commercial-1250-treadmill', 'Performance Specs, treadmill hardware features'),
    motor: field('3.6 CHP', 'https://www.nordictrack.com/product/commercial-1250-treadmill', `Performance Specs. The spec strip prints 3.60 CHP. ${NT_CHP}`),
    maxUserLb: 400,
    maxUser: field('400 lb (182 kg)', 'https://www.nordictrack.com/product/commercial-1250-treadmill', 'Dimensions and weight, user capacity'),
    unfolded: dims('77.3" L × 37.0" W × 59.5" H (196.3 × 94.0 × 151.1 cm)', 'https://www.nordictrack.com/product/commercial-1250-treadmill', 'Spec strip and Dimensions and weight, footprint', 77.3, 37, 59.5),
    folded: dims('44.2" L × 37" W × 69" H', 'https://www.nordictrack.com/product/commercial-1250-treadmill', 'Spec strip, folded dimensions. The page also prints separate in-box shipping dimensions, which are not the folded size.', 44.2, 37, 69),
    stepUpIn: 10,
    stepUp: field('10.0" (25.4 cm)', 'https://www.nordictrack.com/product/commercial-1250-treadmill', 'Dimensions and weight, step up height'),
    power: missing('https://www.nordictrack.com/product/commercial-1250-treadmill', 'Product page Performance Specs and Dimensions and weight. No voltage or amperage is stated.'),
    incline: field('−3% to 12%', 'https://www.nordictrack.com/product/commercial-1250-treadmill', 'Spec strip. Performance Specs says “12% Incline to −3% decline.”'),
    speed: field('0–12 MPH (0–19 KPH)', 'https://www.nordictrack.com/product/commercial-1250-treadmill', 'Spec strip and Performance Specs'),
    productUrl: 'https://www.nordictrack.com/product/commercial-1250-treadmill',
    searchQuery: 'NordicTrack Commercial 1250 treadmill',
    summary: 'Folding treadmill. NordicTrack publishes a 22 × 60 in belt, 3.6 CHP motor, 400 lb user capacity, and a 77.3 × 37.0 × 59.5 in footprint.',
    notes: [NT_CHP, 'In-box dimensions on this page are the shipping carton, not the folded treadmill.'],
  },
  {
    slug: 'nordictrack-commercial-1750',
    brand: 'NordicTrack',
    brandSlug: 'nordictrack',
    name: 'NordicTrack Commercial 1750',
    sku: 'NTL17125',
    folds: 'yes',
    deck: field('22 × 60 in belt (55 × 152 cm)', 'https://www.nordictrack.com/product/commercial-1750-treadmill', 'Performance Specs, treadmill hardware features'),
    motor: field('4.25 CHP', 'https://www.nordictrack.com/product/commercial-1750-treadmill', `Spec strip and Performance Specs. ${NT_CHP}`),
    maxUserLb: 400,
    maxUser: field('400 lb (182 kg)', 'https://www.nordictrack.com/product/commercial-1750-treadmill', 'Dimensions and weight, user capacity'),
    unfolded: dims('77.3" L × 37.0" W × 59.5" H (196.3 × 94.0 × 151.1 cm)', 'https://www.nordictrack.com/product/commercial-1750-treadmill', 'Spec strip and Dimensions and weight, footprint', 77.3, 37, 59.5),
    folded: dims('44.2" L × 37" W × 69" H', 'https://www.nordictrack.com/product/commercial-1750-treadmill', 'Spec strip, folded dimensions', 44.2, 37, 69),
    stepUpIn: 10,
    stepUp: field('10.0" (25.4 cm)', 'https://www.nordictrack.com/product/commercial-1750-treadmill', 'Dimensions and weight, step up height'),
    power: missing('https://www.nordictrack.com/product/commercial-1750-treadmill', 'Product page Performance Specs and Dimensions and weight. No voltage or amperage is stated.'),
    incline: field('−3% to 12%', 'https://www.nordictrack.com/product/commercial-1750-treadmill', 'Spec strip. Performance Specs says “12% Incline to −3% decline.”'),
    speed: field('0–12 MPH (0–19 KPH)', 'https://www.nordictrack.com/product/commercial-1750-treadmill', 'Spec strip and Performance Specs'),
    productUrl: 'https://www.nordictrack.com/product/commercial-1750-treadmill',
    searchQuery: 'NordicTrack Commercial 1750 treadmill',
    summary: 'Folding treadmill. NordicTrack publishes a 22 × 60 in belt, 4.25 CHP motor, 400 lb user capacity, and a 77.3 × 37.0 × 59.5 in footprint.',
    notes: [NT_CHP],
  },
  {
    slug: 'nordictrack-commercial-2450',
    brand: 'NordicTrack',
    brandSlug: 'nordictrack',
    name: 'NordicTrack Commercial 2450',
    sku: 'NTL19125',
    folds: 'yes',
    deck: field('22 × 60 in belt (55 × 152 cm)', 'https://www.nordictrack.com/product/commercial-2450-treadmill', 'Performance Specs, treadmill hardware features'),
    motor: field('4.25 CHP', 'https://www.nordictrack.com/product/commercial-2450-treadmill', `Spec strip and Performance Specs. ${NT_CHP}`),
    maxUserLb: 400,
    maxUser: field('400 lb (182 kg)', 'https://www.nordictrack.com/product/commercial-2450-treadmill', 'Dimensions and weight, user capacity'),
    unfolded: dims('77.3" L × 37.0" W × 63.4" H (196.3 × 94 × 161.0 cm)', 'https://www.nordictrack.com/product/commercial-2450-treadmill', 'Spec strip and Dimensions and weight, footprint', 77.3, 37, 63.4),
    folded: dims('44.2" L × 37" W × 69" H', 'https://www.nordictrack.com/product/commercial-2450-treadmill', 'Spec strip, folded dimensions', 44.2, 37, 69),
    stepUpIn: 10,
    stepUp: field('10.0" (25.4 cm)', 'https://www.nordictrack.com/product/commercial-2450-treadmill', 'Dimensions and weight, step up height'),
    power: missing('https://www.nordictrack.com/product/commercial-2450-treadmill', 'Product page Performance Specs and Dimensions and weight. No voltage or amperage is stated.'),
    incline: field('−3% to 12%', 'https://www.nordictrack.com/product/commercial-2450-treadmill', 'Spec strip. Performance Specs says “12% Incline to −3% decline.”'),
    speed: field('0–14 MPH (0–22 KPH)', 'https://www.nordictrack.com/product/commercial-2450-treadmill', 'Spec strip and Performance Specs'),
    productUrl: 'https://www.nordictrack.com/product/commercial-2450-treadmill',
    searchQuery: 'NordicTrack Commercial 2450 treadmill',
    summary: 'Folding treadmill. NordicTrack publishes a 22 × 60 in belt, 4.25 CHP motor, speeds to 14 MPH, and a 77.3 × 37.0 × 63.4 in footprint.',
    notes: [NT_CHP],
  },
  {
    slug: 'nordictrack-x16',
    brand: 'NordicTrack',
    brandSlug: 'nordictrack',
    name: 'NordicTrack X16',
    folds: 'no',
    deck: field('22 × 60 in belt (55 × 152 cm)', 'https://www.nordictrack.com/product/x16-treadmill', 'Performance Specs, treadmill hardware features'),
    motor: field('4.25 CHP', 'https://www.nordictrack.com/product/x16-treadmill', `Spec strip and Performance Specs. ${NT_CHP}`),
    maxUserLb: 400,
    maxUser: field('400 lb (182 kg)', 'https://www.nordictrack.com/product/x16-treadmill', 'Dimensions and weight, user capacity'),
    unfolded: dims('69.9" L × 38.1" W × 73.3" H (177.5 × 96.77 × 186.2 cm)', 'https://www.nordictrack.com/product/x16-treadmill', 'Spec strip and Dimensions and weight, footprint', 69.9, 38.1, 73.3),
    folded: field('Does not fold. The spec strip lists Foldable: No.', 'https://www.nordictrack.com/product/x16-treadmill', 'Spec strip, Foldable'),
    stepUpIn: 13.66,
    stepUp: field('13.66 inches (34.70 cm)', 'https://www.nordictrack.com/product/x16-treadmill', 'Dimensions and weight, step up height'),
    power: missing('https://www.nordictrack.com/product/x16-treadmill', 'Product page Performance Specs and Dimensions and weight. No voltage or amperage is stated.'),
    incline: field('−6% to 40%', 'https://www.nordictrack.com/product/x16-treadmill', 'Spec strip. Performance Specs says “40% Incline to −6% decline.”'),
    speed: field('0–12 MPH (0–19 KPH)', 'https://www.nordictrack.com/product/x16-treadmill', 'Spec strip and Performance Specs'),
    productUrl: 'https://www.nordictrack.com/product/x16-treadmill',
    searchQuery: 'NordicTrack X16 treadmill',
    summary: 'Non-folding incline treadmill. NordicTrack publishes a 22 × 60 in belt, −6% to 40% incline, and a 69.9 × 38.1 × 73.3 in footprint.',
    notes: [NT_CHP],
  },
  {
    slug: 'nordictrack-x24',
    brand: 'NordicTrack',
    brandSlug: 'nordictrack',
    name: 'NordicTrack X24',
    folds: 'no',
    deck: field('22 × 60 in belt (55 × 152 cm)', 'https://www.nordictrack.com/product/x24-treadmill', 'Performance Specs, treadmill hardware features'),
    motor: field('4.25 CHP', 'https://www.nordictrack.com/product/x24-treadmill', `Spec strip and Performance Specs. ${NT_CHP}`),
    maxUserLb: 400,
    maxUser: field('400 lb (182 kg)', 'https://www.nordictrack.com/product/x24-treadmill', 'Dimensions and weight, user capacity'),
    unfolded: dims('69.9" L × 38.1" W × 73.3" H (177.5 × 96.8 × 186.2 cm)', 'https://www.nordictrack.com/product/x24-treadmill', 'Spec strip and Dimensions and weight, footprint', 69.9, 38.1, 73.3),
    folded: field('Does not fold. The spec strip lists Foldable: No.', 'https://www.nordictrack.com/product/x24-treadmill', 'Spec strip, Foldable'),
    stepUpIn: 13.66,
    stepUp: field('13.66 inches (34.70 cm)', 'https://www.nordictrack.com/product/x24-treadmill', 'Dimensions and weight, step up height'),
    power: missing('https://www.nordictrack.com/product/x24-treadmill', 'Product page Performance Specs and Dimensions and weight. No voltage or amperage is stated.'),
    incline: field('−6% to 40%', 'https://www.nordictrack.com/product/x24-treadmill', 'Spec strip. Performance Specs says “40% Incline to −6% decline.”'),
    speed: field('0–12 MPH (0–19 KPH)', 'https://www.nordictrack.com/product/x24-treadmill', 'Spec strip and Performance Specs'),
    productUrl: 'https://www.nordictrack.com/product/x24-treadmill',
    searchQuery: 'NordicTrack X24 treadmill',
    summary: 'Non-folding incline treadmill. NordicTrack publishes a 22 × 60 in belt, −6% to 40% incline, and a 69.9 × 38.1 × 73.3 in footprint.',
    notes: [NT_CHP, 'The X24 product page publishes the same footprint, belt, motor, speed, incline, step-up height, and user capacity as the X16 page. The screen size differs (24 in on this page).'],
  },
  {
    slug: 'nordictrack-t-series-10',
    brand: 'NordicTrack',
    brandSlug: 'nordictrack',
    name: 'NordicTrack T Series 10',
    sku: 'NTL15425',
    folds: 'yes',
    deck: field('20 × 60 in belt (51 × 152 cm)', 'https://www.nordictrack.com/product/t-series-10-treadmill', 'Performance Specs for T Series 10 Treadmill (NTL15425)'),
    motor: field('3.0 CHP', 'https://www.nordictrack.com/product/t-series-10-treadmill', `Spec strip and Performance Specs. ${NT_CHP}`),
    maxUserLb: 325,
    maxUser: field('325 lb (148 kg)', 'https://www.nordictrack.com/product/t-series-10-treadmill', 'Dimensions and weight, user capacity'),
    unfolded: dims('75.1" L × 34.3" W × 58.4" H (190.8 × 87.1 × 148.3 cm)', 'https://www.nordictrack.com/product/t-series-10-treadmill', 'Spec strip and Dimensions and weight, footprint', 75.1, 34.3, 58.4),
    folded: dims('41" L × 34.3" W × 68.3" H', 'https://www.nordictrack.com/product/t-series-10-treadmill', 'Spec strip, folded dimensions', 41, 34.3, 68.3),
    stepUpIn: 8.3,
    stepUp: field('8.3 inches (21.1 cm)', 'https://www.nordictrack.com/product/t-series-10-treadmill', 'Dimensions and weight, step up height'),
    power: missing('https://www.nordictrack.com/product/t-series-10-treadmill', 'Product page Performance Specs and Dimensions and weight. No voltage or amperage is stated.'),
    incline: field('0–12% (0.5% increments, 25 levels of adjustability)', 'https://www.nordictrack.com/product/t-series-10-treadmill', 'Performance Specs. The spec strip prints “−0% to 12%.”'),
    speed: field('0–12 MPH (0–19 KPH)', 'https://www.nordictrack.com/product/t-series-10-treadmill', 'Spec strip and Performance Specs'),
    productUrl: 'https://www.nordictrack.com/product/t-series-10-treadmill',
    searchQuery: 'NordicTrack T Series 10 treadmill',
    summary: 'Folding treadmill, model NTL15425. NordicTrack publishes a 20 × 60 in belt, 3.0 CHP motor, and a 75.1 × 34.3 × 58.4 in footprint.',
    notes: [
      NT_CHP,
      'The T Series 6.5 S product URL currently publishes the same SKU, NTL15425, and the same footprint, belt, motor, incline, step-up height, and user capacity. See that page for the citation.',
    ],
  },
  {
    slug: 'nordictrack-t-series-6-5-s',
    brand: 'NordicTrack',
    brandSlug: 'nordictrack',
    name: 'NordicTrack T Series 6.5 S',
    sku: 'NTL15425',
    folds: 'unpublished',
    deck: field('20 × 60 in belt (51 × 152 cm)', 'https://www.nordictrack.com/product/t-series-6-5-s-treadmill', 'Performance Specs labeled T Series 6.5 S Treadmill (NTL15425)'),
    motor: field('3.0 CHP', 'https://www.nordictrack.com/product/t-series-6-5-s-treadmill', `Performance Specs labeled T Series 6.5 S Treadmill (NTL15425). ${NT_CHP}`),
    maxUserLb: 325,
    maxUser: field('325 lb (148 kg)', 'https://www.nordictrack.com/product/t-series-6-5-s-treadmill', 'Dimensions and weight under the T Series 6.5 S (NTL15425) block'),
    unfolded: dims('75.1" L × 34.3" W × 58.4" H (190.8 × 87.1 × 148.3 cm)', 'https://www.nordictrack.com/product/t-series-6-5-s-treadmill', 'Dimensions and weight under the T Series 6.5 S (NTL15425) block', 75.1, 34.3, 58.4),
    folded: missing('https://www.nordictrack.com/product/t-series-6-5-s-treadmill', 'The 6.5 S URL’s specification block does not print folded dimensions. The T Series 10 page for the same SKU does. Those inches are cited on the T Series 10 page, not copied here as if this URL stated them.'),
    stepUpIn: 8.3,
    stepUp: field('8.3 inches (21.1 cm)', 'https://www.nordictrack.com/product/t-series-6-5-s-treadmill', 'Dimensions and weight under the T Series 6.5 S (NTL15425) block'),
    power: missing('https://www.nordictrack.com/product/t-series-6-5-s-treadmill', 'Product page specification block. No voltage or amperage is stated.'),
    incline: field('0–12% (0.5% increments, 25 levels of adjustability)', 'https://www.nordictrack.com/product/t-series-6-5-s-treadmill', 'Performance Specs labeled T Series 6.5 S Treadmill (NTL15425)'),
    speed: field('0–12 MPH (0–19 KPH)', 'https://www.nordictrack.com/product/t-series-6-5-s-treadmill', 'Performance Specs labeled T Series 6.5 S Treadmill (NTL15425)'),
    productUrl: 'https://www.nordictrack.com/product/t-series-6-5-s-treadmill',
    searchQuery: 'NordicTrack T Series 6.5 S treadmill',
    summary: 'The T Series 6.5 S URL publishes SKU NTL15425, the same model number as the T Series 10 page, with the same footprint and belt.',
    notes: [
      'On 1 November 2026 the page title and product structured data said “T Series 6.5 S Treadmill,” SKU NTL15425. The same SKU is the T Series 10. Image file names on the 6.5 S URL use the T10 prefix, and the on-page model switcher presented T Series 10 as the current selection. Folded dimensions are published on the T Series 10 URL, not in the 6.5 S specification block, so this page does not repeat them.',
      NT_CHP,
    ],
  },
  {
    slug: 'sole-f63',
    brand: 'Sole',
    brandSlug: 'sole',
    name: 'Sole F63',
    folds: 'yes',
    deck: field('20" × 60" running surface. Deck 18 mm (0.7 inch). Belt 2-ply, 1.6 mm.', 'https://www.soletreadmills.com/products/sole-f63', 'Full specifications, Deck & build'),
    motor: field('3.0 HP', 'https://www.soletreadmills.com/products/sole-f63', 'Full specifications, Performance, Motor. The page does not say continuous or peak.'),
    maxUserLb: 325,
    maxUser: field('325 lb', 'https://www.soletreadmills.com/products/sole-f63', 'Full specifications, Dimensions & weight, weight capacity'),
    unfolded: dims('75" L × 34" W × 52" H', 'https://www.soletreadmills.com/products/sole-f63', 'Product dimensions card and full specifications, unit measurements 75×34×52"', 75, 34, 52),
    folded: dims('42" L × 34" W × 71" H', 'https://www.soletreadmills.com/products/sole-f63', 'Folded product dimensions card and full specifications, folded measurements 42×34×71"', 42, 34, 71),
    stepUpIn: null,
    stepUp: missing('https://www.soletreadmills.com/products/sole-f63', 'The page publishes deck thickness. It does not publish step-up height. Deck thickness is not used as step-up height.'),
    power: solePower(F63M, 'F63'),
    incline: field('0–15% on the product feature card. Full specifications list elevation as 0–15 levels.', 'https://www.soletreadmills.com/products/sole-f63', 'Feature card “0–15% Incline Range” and full specifications, Elevation'),
    speed: field('0.5–12 mph', 'https://www.soletreadmills.com/products/sole-f63', 'Full specifications, Speed'),
    machineWeight: field('187 lb unit weight', 'https://www.soletreadmills.com/products/sole-f63', 'Full specifications, Dimensions & weight, unit weight'),
    clearance: soleRear(F63M, 'F63'),
    productUrl: 'https://www.soletreadmills.com/products/sole-f63',
    searchQuery: 'Sole F63 treadmill',
    summary: 'Folding treadmill. Sole publishes a 3.0 HP motor, a 20 × 60 in deck, a 325 lb capacity, and unit measurements of 75 × 34 × 52 in.',
    notes: ['The 2026 F63 owner’s manual states the outlet and the rear clearance. It does not state a side clearance or a ceiling height.'],
  },
  {
    slug: 'sole-f65',
    brand: 'Sole',
    brandSlug: 'sole',
    name: 'Sole F65',
    folds: 'yes',
    deck: field('20" × 60" running surface. Deck 18 mm (0.7 inch). Belt 2-ply, 1.6 mm.', 'https://www.soletreadmills.com/products/sole-f65', 'Full specifications, Deck & build'),
    motor: field('3.25 HP', 'https://www.soletreadmills.com/products/sole-f65', 'Full specifications, Performance, Motor. The page does not say continuous or peak.'),
    maxUserLb: 350,
    maxUser: field('350 lb', 'https://www.soletreadmills.com/products/sole-f65', 'Full specifications, Dimensions & weight, weight capacity, and the at-a-glance weight capacity'),
    unfolded: dims('77" L × 36" W × 55" H', 'https://www.soletreadmills.com/products/sole-f65', 'Product dimensions card on the product page', 77, 36, 55),
    folded: dims('48" L × 36" W × 66" H', 'https://www.soletreadmills.com/products/sole-f65', 'Folded product dimensions card on the product page', 48, 36, 66),
    stepUpIn: null,
    stepUp: missing('https://www.soletreadmills.com/products/sole-f65', 'The page publishes deck thickness. It does not publish step-up height.'),
    power: solePower(F65M, 'F65'),
    incline: field('0–15% in the product description. Full specifications list elevation as 0–15 levels.', 'https://www.soletreadmills.com/products/sole-f65', 'Product description and full specifications, Elevation'),
    speed: field('0.5–12 mph', 'https://www.soletreadmills.com/products/sole-f65', 'Full specifications, Speed'),
    clearance: soleRear(F65M, 'F65'),
    productUrl: 'https://www.soletreadmills.com/products/sole-f65',
    searchQuery: 'Sole F65 treadmill',
    summary: 'Folding treadmill. Sole publishes a 3.25 HP motor, a 20 × 60 in deck, a 350 lb capacity, and product dimensions of 77 × 36 × 55 in.',
    notes: ['Unfolded and folded dimensions are on the product-page dimension cards. The full-specifications table on the same page lists weight capacity and does not repeat those inches.'],
  },
  {
    slug: 'sole-f80',
    brand: 'Sole',
    brandSlug: 'sole',
    name: 'Sole F80',
    folds: 'yes',
    deck: field('20" × 60" running surface. Deck 18 mm (0.7 inch). Belt 2-ply, 1.6 mm.', 'https://www.soletreadmills.com/products/sole-f80-treadmill', 'Full specifications, Deck & build'),
    motor: field('3.25 HP', 'https://www.soletreadmills.com/products/sole-f80-treadmill', 'Full specifications, Performance, Motor. The page does not say continuous or peak.'),
    maxUserLb: 350,
    maxUser: field('350 lb', 'https://www.soletreadmills.com/products/sole-f80-treadmill', 'Full specifications, Dimensions & weight, weight capacity'),
    unfolded: dims('77" × 36" × 59"', 'https://www.soletreadmills.com/products/sole-f80-treadmill', 'Full specifications, unit measurements 77×36×59"', 77, 36, 59),
    folded: dims('48" × 36" × 66"', 'https://www.soletreadmills.com/products/sole-f80-treadmill', 'Full specifications, folded measurements, and the folded product dimensions card', 48, 36, 66),
    stepUpIn: null,
    stepUp: missing('https://www.soletreadmills.com/products/sole-f80-treadmill', 'The page publishes deck thickness. It does not publish step-up height.'),
    power: solePower(F80M, 'F80'),
    incline: field('0–15% on the feature card. Full specifications list elevation as 0–15 levels.', 'https://www.soletreadmills.com/products/sole-f80-treadmill', 'Feature card “0–15% Incline Range” and full specifications, Elevation'),
    speed: field('0.5–12 mph', 'https://www.soletreadmills.com/products/sole-f80-treadmill', 'Full specifications, Speed'),
    machineWeight: field('223 lb unit weight', 'https://www.soletreadmills.com/products/sole-f80-treadmill', 'Full specifications, unit weight'),
    clearance: soleRear(F80M, 'F80'),
    productUrl: 'https://www.soletreadmills.com/products/sole-f80-treadmill',
    searchQuery: 'Sole F80 treadmill',
    summary: 'Folding treadmill. Sole publishes a 3.25 HP motor, a 20 × 60 in deck, a 350 lb capacity, and unit measurements of 77 × 36 × 59 in.',
    notes: [],
  },
  {
    slug: 'sole-f85',
    brand: 'Sole',
    brandSlug: 'sole',
    name: 'Sole F85',
    folds: 'yes',
    deck: field('22" × 60" running surface. Deck 18 mm (0.7 inch). Belt 2-ply, 1.6 mm.', 'https://www.soletreadmills.com/products/sole-f85-treadmill', 'Full specifications, Deck & build'),
    motor: field('3.5 HP', 'https://www.soletreadmills.com/products/sole-f85-treadmill', 'Full specifications, Performance, Motor. The page does not say continuous or peak.'),
    maxUserLb: 350,
    maxUser: field('350 lb', 'https://www.soletreadmills.com/products/sole-f85-treadmill', 'Full specifications, Dimensions & weight, weight capacity'),
    unfolded: dims('78" × 38" × 60"', 'https://www.soletreadmills.com/products/sole-f85-treadmill', 'Full specifications, unit measurements 78×38×60"', 78, 38, 60),
    folded: dims('48" × 38" × 66"', 'https://www.soletreadmills.com/products/sole-f85-treadmill', 'Full specifications, folded measurements, and the folded product dimensions card', 48, 38, 66),
    stepUpIn: null,
    stepUp: missing('https://www.soletreadmills.com/products/sole-f85-treadmill', 'The page publishes deck thickness. It does not publish step-up height.'),
    power: solePower(F85M, 'F85'),
    incline: field('0–15% in the product description (“incline to 15%”). Full specifications list elevation as 0–15 levels.', 'https://www.soletreadmills.com/products/sole-f85-treadmill', 'Product description and full specifications, Elevation'),
    speed: field('0.5–12 mph', 'https://www.soletreadmills.com/products/sole-f85-treadmill', 'Full specifications, Speed'),
    machineWeight: field('250 lb unit weight', 'https://www.soletreadmills.com/products/sole-f85-treadmill', 'Product description on the product page, unit weight'),
    clearance: soleRear(F85M, 'F85'),
    productUrl: 'https://www.soletreadmills.com/products/sole-f85-treadmill',
    searchQuery: 'Sole F85 treadmill',
    summary: 'Folding treadmill. Sole publishes a 3.5 HP motor, a 22 × 60 in deck, a 350 lb capacity, and unit measurements of 78 × 38 × 60 in.',
    notes: [],
  },
  {
    slug: 'sole-tt8',
    brand: 'Sole',
    brandSlug: 'sole',
    name: 'Sole TT8',
    folds: 'unpublished',
    deck: field('22" × 60" running surface. Deck 25 mm (0.98 inch), described as waxed, no lubrication, reversible. Belt 2-ply, 1.6 mm.', 'https://www.soletreadmills.com/products/sole-tt8', 'Full specifications, Deck & build'),
    motor: field('4.0 HP', 'https://www.soletreadmills.com/products/sole-tt8', 'Full specifications, Performance, Motor. The page does not say continuous or peak.'),
    maxUserLb: 400,
    maxUser: field('400 lb', 'https://www.soletreadmills.com/products/sole-tt8', 'Full specifications, Dimensions & weight, weight capacity'),
    unfolded: dims('81" × 38" × 66"', 'https://www.soletreadmills.com/products/sole-tt8', 'Full specifications, unit measurements 81×38×66"', 81, 38, 66),
    folded: missing('https://www.soletreadmills.com/products/sole-tt8', 'Full specifications list unit measurements and do not list folded measurements or a fold-up row.'),
    stepUpIn: null,
    stepUp: missing('https://www.soletreadmills.com/products/sole-tt8', 'The page publishes deck thickness. It does not publish step-up height.'),
    power: missing('https://www.soletreadmills.com/products/sole-tt8', 'Product page full specifications. No voltage or amperage is stated. A 2026 TT8 owner’s manual was not found at the manual URLs checked.'),
    incline: field('−6 to 15 levels', 'https://www.soletreadmills.com/products/sole-tt8', 'Full specifications, Elevation “−6~15 levels,” and the product description “−6 to 15 incline levels.” The page does not state a percent grade.'),
    speed: field('0.5–12 mph', 'https://www.soletreadmills.com/products/sole-tt8', 'Full specifications, Speed'),
    machineWeight: field('319 lb unit weight', 'https://www.soletreadmills.com/products/sole-tt8', 'Full specifications, unit weight'),
    productUrl: 'https://www.soletreadmills.com/products/sole-tt8',
    searchQuery: 'Sole TT8 treadmill',
    summary: 'Sole publishes a 4.0 HP motor, a 22 × 60 in deck, decline to −6 levels, a 400 lb capacity, and unit measurements of 81 × 38 × 66 in.',
    notes: ['Incline is published as levels, not as a percent grade. This site does not convert levels to percent.'],
  },
  {
    slug: 'horizon-7-0-at',
    brand: 'Horizon',
    brandSlug: 'horizon',
    name: 'Horizon 7.0 AT',
    folds: 'yes',
    deck: field('20" × 60" running area. Belt 1.6 mm, silicone. Deck thickness 0.7" (18 mm).', 'https://www.horizonfitness.com/products/horizon-7-0-at-treadmill', 'Machine Specs table, 7.0 AT column'),
    motor: missing('https://www.horizonfitness.com/products/horizon-7-0-at-treadmill', 'The product page describes a RapidSync motor and does not publish horsepower.'),
    maxUserLb: 325,
    maxUser: field('325 lb', 'https://www.horizonfitness.com/products/horizon-7-0-at-treadmill', 'Machine Specs table, 7.0 AT column, max user weight, and the product summary'),
    unfolded: dims('76" × 35" × 67"', 'https://www.horizonfitness.com/products/horizon-7-0-at-treadmill', 'Machine Specs table, 7.0 AT column, assembled dimensions (L × W × H)', 76, 35, 67),
    folded: dims('44" × 35" × 68"', 'https://www.horizonfitness.com/products/horizon-7-0-at-treadmill', 'Machine Specs table, 7.0 AT column, folded dimensions', 44, 35, 68),
    stepUpIn: 8.625,
    stepUp: field('8 5/8"', 'https://www.horizonfitness.com/products/horizon-7-0-at-treadmill', 'Machine Specs table, 7.0 AT column, step on height'),
    power: hzPower('https://www.horizonfitness.com/products/horizon-7-0-at-treadmill'),
    incline: field('0–15%', 'https://www.horizonfitness.com/products/horizon-7-0-at-treadmill', 'Machine Specs table, 7.0 AT column, incline range'),
    speed: field('0.5–12 mph', 'https://www.horizonfitness.com/products/horizon-7-0-at-treadmill', 'Machine Specs table, 7.0 AT column, speed range'),
    machineWeight: field('277 lb', 'https://www.horizonfitness.com/products/horizon-7-0-at-treadmill', 'Machine Specs table, 7.0 AT column, weight'),
    productUrl: 'https://www.horizonfitness.com/products/horizon-7-0-at-treadmill',
    searchQuery: 'Horizon 7.0 AT treadmill',
    summary: 'Folding treadmill. Horizon’s machine-specs table publishes a 20 × 60 in deck, 0.5–12 mph, 0–15% incline, and assembled dimensions of 76 × 35 × 67 in.',
    notes: ['Horsepower is not in the machine-specs table. Frame type is listed as FeatherLight Folding.'],
  },
  {
    slug: 'horizon-7-4-at',
    brand: 'Horizon',
    brandSlug: 'horizon',
    name: 'Horizon 7.4 AT',
    folds: 'yes',
    deck: field('22" × 60" running area. Belt 1.6 mm, silicone. Deck thickness 0.8" (20 mm).', 'https://www.horizonfitness.com/products/horizon-7-4-at-treadmill', 'Machine Specs table, 7.4 AT column, opened from See All Specs'),
    motor: missing('https://www.horizonfitness.com/products/horizon-7-4-at-treadmill', 'The product page describes a RapidSync motor and does not publish horsepower.'),
    maxUserLb: 350,
    maxUser: field('350 lb', 'https://www.horizonfitness.com/products/horizon-7-4-at-treadmill', 'Machine Specs table, 7.4 AT column, max user weight, and the product summary'),
    unfolded: dims('76" × 37" × 63"', 'https://www.horizonfitness.com/products/horizon-7-4-at-treadmill', 'Machine Specs table, 7.4 AT column, assembled dimensions (L × W × H)', 76, 37, 63),
    folded: dims('42" × 37" × 71"', 'https://www.horizonfitness.com/products/horizon-7-4-at-treadmill', 'Machine Specs table, 7.4 AT column, folded dimensions', 42, 37, 71),
    stepUpIn: 8.75,
    stepUp: field('8 3/4"', 'https://www.horizonfitness.com/products/horizon-7-4-at-treadmill', 'Machine Specs table, 7.4 AT column, step on height'),
    power: hzPower('https://www.horizonfitness.com/products/horizon-7-4-at-treadmill'),
    incline: field('0–15%', 'https://www.horizonfitness.com/products/horizon-7-4-at-treadmill', 'Machine Specs table, 7.4 AT column, incline range'),
    speed: field('0.5–12 mph', 'https://www.horizonfitness.com/products/horizon-7-4-at-treadmill', 'Machine Specs table, 7.4 AT column, speed range'),
    machineWeight: field('318 lb', 'https://www.horizonfitness.com/products/horizon-7-4-at-treadmill', 'Machine Specs table, 7.4 AT column, weight'),
    productUrl: 'https://www.horizonfitness.com/products/horizon-7-4-at-treadmill',
    searchQuery: 'Horizon 7.4 AT treadmill',
    summary: 'Folding treadmill. Horizon’s machine-specs table publishes a 22 × 60 in deck, a 350 lb user capacity, and assembled dimensions of 76 × 37 × 63 in.',
    notes: ['Horsepower is not in the machine-specs table.'],
  },
  {
    slug: 'horizon-7-8-at',
    brand: 'Horizon',
    brandSlug: 'horizon',
    name: 'Horizon 7.8 AT',
    folds: 'yes',
    deck: field('22" × 60" running area. Belt 2.2 mm, silicone. Deck thickness 0.8" (20 mm).', 'https://www.horizonfitness.com/products/horizon-7-8-at-treadmill', 'Machine Specs table, 7.8 AT column'),
    motor: missing('https://www.horizonfitness.com/products/horizon-7-8-at-treadmill', 'The product page describes a RapidSync motor and does not publish horsepower.'),
    maxUserLb: 375,
    maxUser: field('375 lb', 'https://www.horizonfitness.com/products/horizon-7-8-at-treadmill', 'Machine Specs table, 7.8 AT column, max user weight, and the product summary'),
    unfolded: dims('76" × 37" × 64"', 'https://www.horizonfitness.com/products/horizon-7-8-at-treadmill', 'Machine Specs table, 7.8 AT column, assembled dimensions (L × W × H)', 76, 37, 64),
    folded: dims('42" × 37" × 71"', 'https://www.horizonfitness.com/products/horizon-7-8-at-treadmill', 'Machine Specs table, 7.8 AT column, folded dimensions', 42, 37, 71),
    stepUpIn: 8.75,
    stepUp: field('8 3/4"', 'https://www.horizonfitness.com/products/horizon-7-8-at-treadmill', 'Machine Specs table, 7.8 AT column, step on height'),
    power: hzPower('https://www.horizonfitness.com/products/horizon-7-8-at-treadmill'),
    incline: field('0–15%', 'https://www.horizonfitness.com/products/horizon-7-8-at-treadmill', 'Machine Specs table, 7.8 AT column, incline range'),
    speed: field('0.5–12 mph', 'https://www.horizonfitness.com/products/horizon-7-8-at-treadmill', 'Machine Specs table, 7.8 AT column, speed range'),
    machineWeight: field('330 lb', 'https://www.horizonfitness.com/products/horizon-7-8-at-treadmill', 'Machine Specs table, 7.8 AT column, weight'),
    productUrl: 'https://www.horizonfitness.com/products/horizon-7-8-at-treadmill',
    searchQuery: 'Horizon 7.8 AT treadmill',
    summary: 'Folding treadmill. Horizon’s machine-specs table publishes a 22 × 60 in deck, a 375 lb user capacity, and assembled dimensions of 76 × 37 × 64 in.',
    notes: ['Horsepower is not in the machine-specs table.'],
  },
  {
    slug: 'horizon-t202',
    brand: 'Horizon',
    brandSlug: 'horizon',
    name: 'Horizon T202',
    folds: 'yes',
    deck: field('20" × 60" running area. Belt 1.4 mm, silicone. Deck thickness 0.7" (18 mm).', 'https://www.horizonfitness.com/products/t202-treadmill', 'Machine Specs table, T202 column'),
    motor: missing('https://www.horizonfitness.com/products/t202-treadmill', 'The product page describes an ultra-quiet motor and does not publish horsepower.'),
    maxUserLb: 325,
    maxUser: field('325 lb', 'https://www.horizonfitness.com/products/t202-treadmill', 'Machine Specs table, T202 column, max user weight, and the product summary'),
    unfolded: dims('76" × 34" × 57"', 'https://www.horizonfitness.com/products/t202-treadmill', 'Machine Specs table, T202 column, assembled dimensions (L × W × H)', 76, 34, 57),
    folded: dims('48" × 34" × 62"', 'https://www.horizonfitness.com/products/t202-treadmill', 'Machine Specs table, T202 column, folded dimensions', 48, 34, 62),
    stepUpIn: 7.25,
    stepUp: field('7 1/4"', 'https://www.horizonfitness.com/products/t202-treadmill', 'Machine Specs table, T202 column, step on height'),
    power: hzPower('https://www.horizonfitness.com/products/t202-treadmill'),
    incline: field('0–12%', 'https://www.horizonfitness.com/products/t202-treadmill', 'Machine Specs table, T202 column, incline range'),
    speed: field('0.5–12 mph', 'https://www.horizonfitness.com/products/t202-treadmill', 'Machine Specs table, T202 column, speed range'),
    machineWeight: field('187 lb', 'https://www.horizonfitness.com/products/t202-treadmill', 'Machine Specs table, T202 column, weight'),
    productUrl: 'https://www.horizonfitness.com/products/t202-treadmill',
    searchQuery: 'Horizon T202 treadmill',
    summary: 'Folding treadmill. Horizon’s machine-specs table publishes a 20 × 60 in deck, a 325 lb user capacity, and assembled dimensions of 76 × 34 × 57 in.',
    notes: ['The comparison table on this page also lists the T101 Connect. Figures here are the T202 column only.'],
  },
  {
    slug: 'bowflex-t6',
    brand: 'BowFlex',
    brandSlug: 'bowflex',
    name: 'BowFlex T6',
    folds: 'yes',
    deck: field('20" W × 60" L running path (50.8 × 152.4 cm)', 'https://www.bowflex.com/products/t6-treadmill', 'Compare block, running path, and the deck description'),
    motor: missing('https://www.bowflex.com/products/t6-treadmill', 'The product page names a MaxReact drive system and does not publish horsepower.'),
    maxUserLb: 325,
    maxUser: field('325 lb (147 kg)', 'https://www.bowflex.com/products/t6-treadmill', 'Specs, maximum user weight'),
    unfolded: dims('76" L × 35" W × 71" H (196 × 89.7 × 181 cm)', 'https://www.bowflex.com/products/t6-treadmill', 'Specs, dimensions', 76, 35, 71),
    folded: dims('44" L × 35" W × 71" H (113 × 89.7 × 181 cm)', 'https://www.bowflex.com/products/t6-treadmill', 'Specs, stowed dimensions', 44, 35, 71),
    stepUpIn: null,
    stepUp: missing('https://www.bowflex.com/products/t6-treadmill', 'Specs block. Step-up height is not stated. BowFlex publishes a ceiling rule instead.'),
    power: missing('https://www.bowflex.com/products/t6-treadmill', 'Specs block. Voltage and amperage are not stated.'),
    incline: field('Up to 15% incline', 'https://www.bowflex.com/products/t6-treadmill', 'Compare block, incline/decline'),
    speed: field('0–12 mph (0–20 km)', 'https://www.bowflex.com/products/t6-treadmill', 'Compare block, speed range'),
    machineWeight: field('233.7 lb (106 kg)', 'https://www.bowflex.com/products/t6-treadmill', 'Specs, product weight'),
    clearance: {
      userPlusIn: 20.75,
      summary: 'Minimum ceiling height: user height + 20.75" (user height + 52.7 cm). Floor clearances beside or behind the treadmill are not stated on this specs block.',
      cite: { url: 'https://www.bowflex.com/products/t6-treadmill', where: 'Specs, minimum ceiling height' },
    },
    productUrl: 'https://www.bowflex.com/products/t6-treadmill',
    searchQuery: 'BowFlex T6 treadmill',
    summary: 'Folding treadmill. BowFlex publishes a 20 × 60 in running path, speeds to 12 mph, up to 15% incline, and dimensions of 76 × 35 × 71 in.',
    notes: ['The ceiling rule is the manufacturer’s. This site does not split 20.75 inches into deck height, incline rise, and headroom, because BowFlex does not publish that split.'],
  },
  {
    slug: 'bowflex-t9',
    brand: 'BowFlex',
    brandSlug: 'bowflex',
    name: 'BowFlex T9',
    folds: 'yes',
    deck: field('22" W × 60" L running path (55.9 × 152.4 cm)', 'https://www.bowflex.com/products/t9-treadmill', 'Compare block, running path'),
    motor: missing('https://www.bowflex.com/products/t9-treadmill', 'The product page names a MaxReact drive system and does not publish horsepower.'),
    maxUserLb: 350,
    maxUser: field('350 lb (158.8 kg) on the product page. The owner’s manual prints 159 kg / 350 lb.', 'https://www.bowflex.com/products/t9-treadmill', 'Product page specs, maximum user weight. Manual: Tech Specs, max user weight.'),
    unfolded: dims(
      'Product page: 77.2" L × 37" W × 67.6" H (196 × 94 × 171.6 cm). Owner’s manual: 78" L × 37" W × 67" (198 × 94 × 171 cm).',
      'https://www.bowflex.com/products/t9-treadmill',
      'Product page Specs, dimensions. Manual Tech Specs also cited below.',
      77.2,
      37,
      67.6,
    ),
    folded: dims('48.6" L × 37" W × 67.6" H (123.5 × 95 × 171.6 cm)', 'https://www.bowflex.com/products/t9-treadmill', 'Specs, stowed dimensions. The manual excerpt checked does not restate stowed size.', 48.6, 37, 67.6),
    stepUpIn: null,
    stepUp: missing('https://www.bowflex.com/products/t9-treadmill', 'Specs block. Step-up height is not stated. BowFlex publishes a ceiling rule instead.'),
    power: missing('https://www.bowflex.com/products/t9-treadmill', 'Product page specs and the manual Tech Specs section checked. Voltage and amperage are not stated there.'),
    incline: field('Up to 15% incline', 'https://www.bowflex.com/products/t9-treadmill', 'Compare block, incline/decline'),
    speed: field('0–12 mph (0–20 km)', 'https://www.bowflex.com/products/t9-treadmill', 'Compare block, speed range'),
    machineWeight: field('Product page: 282 lb (128 kg). Owner’s manual: 128 kg / 282.2 lb.', 'https://www.bowflex.com/products/t9-treadmill', 'Product page Specs, product weight, and manual Tech Specs'),
    clearance: {
      userPlusIn: 20.75,
      summary: 'Minimum ceiling height: user height + 20.75" (user height + 52.7 cm). Floor clearances beside or behind the treadmill are not stated on this specs block.',
      cite: { url: 'https://www.bowflex.com/products/t9-treadmill', where: 'Specs, minimum ceiling height' },
    },
    fitUnfolded: {
      l: 78,
      w: 37,
      h: 67.6,
      why: 'The product page prints 77.2" long and 67.6" high. The owner’s manual prints 78" long and 67" high. The fit check uses the larger published number on each axis: 78" long, 37" wide, 67.6" high.',
    },
    productUrl: 'https://www.bowflex.com/products/t9-treadmill',
    searchQuery: 'BowFlex T9 treadmill',
    summary: 'Folding treadmill. The product page prints 77.2 × 37 × 67.6 in. The owner’s manual prints 78 × 37 × 67 in.',
    notes: [
      'Owner’s manual Tech Specs: https://download.bowflex.com/supportdocs/AM_OM/Bowflex/BFX.T9.OM.global.pdf — assembled dimensions 198 × 94 × 171 cm / 78" × 37" × 67", product weight 128 kg / 282.2 lb, max user weight 159 kg / 350 lb. Read 1 November 2026.',
      'The fit calculator uses 78" × 37" × 67.6" so a room that passes is large enough for either published set.',
    ],
  },
  {
    slug: 'bowflex-t16',
    brand: 'BowFlex',
    brandSlug: 'bowflex',
    name: 'BowFlex T16',
    folds: 'yes',
    deck: field('22" W × 60" L running path (55.9 × 152.4 cm)', 'https://www.bowflex.com/products/t16-treadmill', 'Compare block, running path'),
    motor: missing('https://www.bowflex.com/products/t16-treadmill', 'The product page names a MaxReact drive system and does not publish horsepower.'),
    maxUserLb: 375,
    maxUser: field('375 lb (170 kg)', 'https://www.bowflex.com/products/t16-treadmill', 'Specs, maximum user weight'),
    unfolded: dims('77.2" L × 37" W × 67.6" H (196 × 94 × 171.6 cm)', 'https://www.bowflex.com/products/t16-treadmill', 'Specs, dimensions', 77.2, 37, 67.6),
    folded: dims('48.6" L × 37" W × 67.6" H (123.5 × 94 × 171.6 cm)', 'https://www.bowflex.com/products/t16-treadmill', 'Specs, stowed dimensions', 48.6, 37, 67.6),
    stepUpIn: null,
    stepUp: missing('https://www.bowflex.com/products/t16-treadmill', 'Specs block. Step-up height is not stated. BowFlex publishes a ceiling rule instead.'),
    power: missing('https://www.bowflex.com/products/t16-treadmill', 'Specs block. Voltage and amperage are not stated.'),
    incline: field('Up to 15% incline', 'https://www.bowflex.com/products/t16-treadmill', 'Compare block, incline/decline'),
    speed: field('0–12 mph (0–20 km)', 'https://www.bowflex.com/products/t16-treadmill', 'Compare block, speed range'),
    machineWeight: field('293.2 lb (133 kg)', 'https://www.bowflex.com/products/t16-treadmill', 'Specs, product weight'),
    clearance: {
      userPlusIn: 20.75,
      summary: 'Minimum ceiling height: user height + 20.75" (user height + 52.7 cm). Floor clearances beside or behind the treadmill are not stated on this specs block.',
      cite: { url: 'https://www.bowflex.com/products/t16-treadmill', where: 'Specs, minimum ceiling height' },
    },
    productUrl: 'https://www.bowflex.com/products/t16-treadmill',
    searchQuery: 'BowFlex T16 treadmill',
    summary: 'Folding treadmill with a 16 inch touchscreen. BowFlex publishes a 22 × 60 in running path, a 375 lb user capacity, and dimensions of 77.2 × 37 × 67.6 in.',
    notes: [],
  },
  {
    slug: 'peloton-tread-vision',
    brand: 'Peloton',
    brandSlug: 'peloton',
    name: 'Peloton Tread Vision',
    folds: 'unpublished',
    deck: field('59" L × 20" W belt', 'https://www.onepeloton.com/shop/tread', 'Specs, belt'),
    motor: missing('https://www.onepeloton.com/shop/tread', 'Specs block. Horsepower is not stated.'),
    maxUserLb: 300,
    maxUser: field('105–300 lb', 'https://www.onepeloton.com/shop/tread', 'User and power requirements, weight range'),
    unfolded: dims('68" L × 33" W × 65" H', 'https://www.onepeloton.com/shop/tread', 'Specs, dimensions. The FAQ on the same page repeats 68" L × 33" W × 65" H.', 68, 33, 65),
    folded: missing('https://www.onepeloton.com/shop/tread', 'The Tread Vision specs do not say the machine folds. Peloton describes folding on the Tread Flex, which is a different model.'),
    stepUpIn: 8,
    stepUp: field('8"', 'https://www.onepeloton.com/shop/tread', 'Specs, step-up height'),
    power: field('A dedicated, grounded circuit capable of carrying 15 or more amps', 'https://www.onepeloton.com/shop/tread', 'User and power requirements. Voltage is not stated.'),
    incline: field('0 to 12.5% grade, adjustable in 0.5% increments', 'https://www.onepeloton.com/shop/tread', 'Specs, incline'),
    speed: field('0 to 12.5 mph, adjustable in 0.1 mph increments', 'https://www.onepeloton.com/shop/tread', 'Specs, speeds'),
    machineWeight: field('316 lb', 'https://www.onepeloton.com/shop/tread', 'Specs, total Peloton Tread Vision weight. The FAQ repeats 316 lb.'),
    userHeight: {
      minIn: 59,
      maxIn: 76,
      text: '4\'11"–6\'4"',
      cite: { url: 'https://www.onepeloton.com/shop/tread', where: 'User and power requirements, height range' },
    },
    clearance: {
      frontIn: 24,
      sideIn: 24,
      rearIn: 79,
      rearAlsoIn: 78.7,
      minCeilingIn: 84,
      userPlusIn: 20,
      recommendedHeadroomIn: 24,
      summary:
        'Delivery text: 24" clearance on the left, right, and front, plus 78.7" behind, and a ceiling at least 7 feet. The same page recommends at least 24" between the user’s head and the ceiling. The FAQ says 24" left, right, and front, 79" behind, and a ceiling at least 20" greater than the user’s height. The fit check uses the larger rear figure (79") and requires both the 7-foot ceiling and the user-height-plus-20-inch rule.',
      cite: { url: 'https://www.onepeloton.com/shop/tread', where: 'Delivery requirements and the “How much space do I need” FAQ' },
    },
    productUrl: 'https://www.onepeloton.com/shop/tread',
    searchQuery: 'Peloton Tread Vision treadmill',
    summary: 'Peloton’s current Tread shop page is the Tread Vision: 68 × 33 × 65 in, an 8 inch step-up, and a 59 × 20 in belt.',
    notes: [
      'This is the treadmill sold at onepeloton.com/shop/tread on 1 November 2026. Peloton titles it Tread Vision. A separate non-Vision “Peloton Tread” spec sheet was not found.',
    ],
  },
  {
    slug: 'peloton-tread-plus-vision',
    brand: 'Peloton',
    brandSlug: 'peloton',
    name: 'Peloton Tread+ Vision',
    folds: 'unpublished',
    deck: field('67" L × 20" W belt. The page also describes 59 individual rubberized slats across 67" of running space.', 'https://www.onepeloton.com/shop/tread-plus', 'Specs, belt, and the slat-belt description'),
    motor: missing('https://www.onepeloton.com/shop/tread-plus', 'Specs block. Horsepower is not stated.'),
    maxUserLb: 300,
    maxUser: field('105–300 lb', 'https://www.onepeloton.com/shop/tread-plus', 'User and power requirements, weight range'),
    unfolded: dims('75" L × 37" W × 70" H', 'https://www.onepeloton.com/shop/tread-plus', 'Specs, dimensions. The FAQ repeats 75" L × 37" W × 70" H.', 75, 37, 70),
    folded: missing('https://www.onepeloton.com/shop/tread-plus', 'The Tread+ Vision specs do not say the machine folds.'),
    stepUpIn: 11,
    stepUp: field('11"', 'https://www.onepeloton.com/shop/tread-plus', 'Specs, step-up height'),
    power: field('A dedicated, grounded circuit capable of carrying 15 or more amps', 'https://www.onepeloton.com/shop/tread-plus', 'User and power requirements. Voltage is not stated.'),
    incline: field('0 to 15% grade, adjustable in 0.05% increments', 'https://www.onepeloton.com/shop/tread-plus', 'Specs, incline'),
    speed: field('0 to 12.5 mph, adjustable in 0.1 mph increments', 'https://www.onepeloton.com/shop/tread-plus', 'Specs, speeds'),
    machineWeight: field('460 lb', 'https://www.onepeloton.com/shop/tread-plus', 'Specs, total Peloton Tread+ Vision weight'),
    userHeight: {
      minIn: 59,
      maxIn: 76,
      text: '4\'11"–6\'4"',
      cite: { url: 'https://www.onepeloton.com/shop/tread-plus', where: 'User and power requirements, height range' },
    },
    clearance: {
      frontIn: 24,
      sideIn: 24,
      rearIn: 78.7,
      minCeilingIn: 84,
      userPlusIn: 24,
      recommendedHeadroomIn: 24,
      summary:
        'Delivery text: 24" clearance on the left, right, and front, plus 78.7" behind, and a ceiling at least 7 feet. The same page recommends at least 24" between the user’s head and the ceiling. The FAQ says 24" left, right, and front, 78.7" behind, and a ceiling at least 24" greater than the user’s height. The fit check requires the 7-foot ceiling and the user-height-plus-24-inch rule.',
      cite: { url: 'https://www.onepeloton.com/shop/tread-plus', where: 'Delivery requirements and the space FAQ' },
    },
    productUrl: 'https://www.onepeloton.com/shop/tread-plus',
    searchQuery: 'Peloton Tread+ Vision treadmill',
    summary: 'Peloton’s current Tread+ shop page is the Tread+ Vision: 75 × 37 × 70 in, an 11 inch step-up, and a 67 × 20 in slat belt.',
    notes: [
      'This is the treadmill sold at onepeloton.com/shop/tread-plus on 1 November 2026. Peloton titles it Tread+ Vision.',
    ],
  },
  {
    slug: 'life-fitness-run-cx',
    brand: 'Life Fitness',
    brandSlug: 'life-fitness',
    name: 'Life Fitness Run CX',
    sku: 'RRR-TR-0000-03',
    folds: 'unpublished',
    deck: field('60" × 22" running surface (153 × 56 cm)', 'https://shop.lifefitness.com/products/run-cx-treadmill', 'Specifications, running surface size, and the product summary'),
    motor: field('3.0 HP (6.0 HP peak) DC motor with MagnaDrive motor controller', 'https://shop.lifefitness.com/products/run-cx-treadmill', 'Specifications, motor system. The page does not use the word continuous.'),
    maxUserLb: 400,
    maxUser: field('400 lb (182 kg)', 'https://shop.lifefitness.com/products/run-cx-treadmill', 'Specifications, max user weight'),
    unfolded: dims('79.5" × 32" × 61" (202 × 82 × 155 cm)', 'https://shop.lifefitness.com/products/run-cx-treadmill', 'Specifications, dimensions (L × W × H)', 79.5, 32, 61),
    folded: missing('https://shop.lifefitness.com/products/run-cx-treadmill', 'The specifications table does not list folded dimensions or a folding row.'),
    stepUpIn: 6,
    stepUp: field('6 inches', 'https://shop.lifefitness.com/products/run-cx-treadmill', 'Product summary, step-up height'),
    power: field('All major voltage configurations (outside U.S. may vary). Power cord 6 ft, front of unit.', 'https://shop.lifefitness.com/products/run-cx-treadmill', 'Specifications, power requirements and power cord. A specific household amperage is not stated.'),
    incline: field('0–15%, in 0.5% increments', 'https://shop.lifefitness.com/products/run-cx-treadmill', 'Specifications, incline and incline increment'),
    speed: field('0.5–12 mph (0.8–19 kph)', 'https://shop.lifefitness.com/products/run-cx-treadmill', 'Specifications, min speed and max speed'),
    machineWeight: field('341 lb (155 kg)', 'https://shop.lifefitness.com/products/run-cx-treadmill', 'Specifications, weight'),
    productUrl: 'https://shop.lifefitness.com/products/run-cx-treadmill',
    searchQuery: 'Life Fitness Run CX treadmill',
    summary: 'Life Fitness publishes a 60 × 22 in running surface, a 3.0 HP (6.0 HP peak) DC motor, a 400 lb user capacity, and dimensions of 79.5 × 32 × 61 in.',
    notes: [
      'The catalog URL lifefitness.com/en-us/catalog/cardio/treadmills/run-cx returned “page not found” on 1 November 2026. These figures are from Life Fitness’s own shop page.',
      'A quoted review on that shop page says the treadmill does not fold. That sentence is a review, not a specifications-table row, so folded size is left unpublished.',
    ],
  },
  {
    slug: 'lifespan-tr1200i',
    brand: 'LifeSpan',
    brandSlug: 'lifespan',
    name: 'LifeSpan TR1200i',
    folds: 'yes',
    deck: field('20" W × 56" L belt. Deck 3/4" phenolic with brace. Belt type 2-ply.', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Specifications, belt size, deck, and belt type'),
    motor: field('2.5 HP continuous-duty DC', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Product description “2.5 HP Continuous-Duty Motor” and specifications, drive motor “2.5 HP Continuous Duty DC”'),
    maxUserLb: 300,
    maxUser: field('300 lb (136.07 kg)', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Specifications, max user weight'),
    unfolded: dims('70.25" L × 33" W × 55" H', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Specifications, dimensions, unfolded', 70.25, 33, 55),
    folded: dims('39" L × 33" W × 63" H', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Specifications, dimensions, folded', 39, 33, 63),
    stepUpIn: 8.25,
    stepUp: field('8.25"', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Specifications, step-up height'),
    power: field('115V NEMA 5-15 non-GFI circuit. The page says not to plug into a GFI outlet or circuit.', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Specifications, power source'),
    incline: field('15 levels', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Specifications, incline. The page does not state a percent grade.'),
    speed: field('0.5–11 MPH', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Specifications, speed'),
    machineWeight: field('221 lb', 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill', 'Specifications, product weight'),
    productUrl: 'https://www.lifespanfitness.com/products/tr1200i-folding-treadmill',
    searchQuery: 'LifeSpan TR1200i treadmill',
    summary: 'Folding treadmill. LifeSpan publishes a 2.5 HP continuous-duty motor, a 20 × 56 in belt, and unfolded dimensions of 70.25 × 33 × 55 in.',
    notes: ['Incline is published as 15 levels, not as a percent grade. This site does not convert levels to percent.'],
  },
];

export function getModel(slug: string): Model | undefined {
  return models.find((m) => m.slug === slug);
}

export function brands(): { slug: string; name: string; count: number }[] {
  const map = new Map<string, { slug: string; name: string; count: number }>();
  for (const m of models) {
    const row = map.get(m.brandSlug) ?? { slug: m.brandSlug, name: m.brand, count: 0 };
    row.count += 1;
    map.set(m.brandSlug, row);
  }
  return [...map.values()];
}

export function modelPath(m: Model): string {
  return `/models/${m.slug}/`;
}

export function useBox(m: Model): { l: number; w: number; h: number } | null {
  if (m.fitUnfolded) return m.fitUnfolded;
  if (m.unfolded.l == null || m.unfolded.w == null || m.unfolded.h == null) return null;
  return { l: m.unfolded.l, w: m.unfolded.w, h: m.unfolded.h };
}

export function storedBox(m: Model): { l: number; w: number; h: number } | null {
  if (m.folds !== 'yes') return null;
  if (m.folded.l == null || m.folded.w == null || m.folded.h == null) return null;
  return { l: m.folded.l, w: m.folded.w, h: m.folded.h };
}

export function floorArea(m: Model): number | null {
  const box = useBox(m);
  return box ? box.l * box.w : null;
}

export type Pair = { slug: string; a: Model; b: Model };

export function pairs(): Pair[] {
  const out: Pair[] = [];
  for (let i = 0; i < models.length; i++) {
    for (let j = i + 1; j < models.length; j++) {
      out.push({ slug: `${models[i].slug}-vs-${models[j].slug}`, a: models[i], b: models[j] });
    }
  }
  return out;
}

export function getPair(slug: string): Pair | undefined {
  return pairs().find((p) => p.slug === slug);
}
