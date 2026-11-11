import { models, modelPath, brands } from '../data/models';
import { guides } from '../data/guides';
import { comparisonCopy } from '../data/comparison-copy';
import { specRows } from './modelView';
import { SITE, abs } from './site';

export function llmsTxt(): string {
  const lines: string[] = [
    `# ${SITE.name}`,
    '',
    `> Treadmill specifications from manufacturer pages, and a room-fit check. A spec is included only when the maker's page or manual states it. Missing fields say "Not published by manufacturer." Read date ${SITE.checked}.`,
    '',
    `Contact: ${SITE.email}`,
    `Full content for LLMs: ${abs('/llms-full.txt')}`,
    `Sitemap: ${abs('/sitemap-index.xml')}`,
    '',
    '## Models',
    '',
  ];
  for (const m of models) lines.push(`- [${m.name}](${abs(modelPath(m))}): ${m.summary}`);
  lines.push('', '## Brands', '');
  for (const b of brands()) lines.push(`- [${b.name}](${abs(`/brands/${b.slug}/`)})`);
  lines.push(
    '',
    '## Tools and lists',
    '',
    `- [Will it fit](${abs('/will-it-fit/')}): room, ceiling, and user height against published footprint and published clearances.`,
    `- [Best for small spaces](${abs('/compare/best-for-small-spaces/')}): unfolded length times width.`,
    `- [Best for low ceilings](${abs('/compare/best-for-low-ceilings/')}): unfolded height, plus published ceiling rules.`,
    `- [Smallest folding footprints](${abs('/compare/smallest-folding-footprints/')}): models the manufacturer says fold, ranked by published floor area. No price cutoff.`,
    `- [Compare](${abs('/compare/')}): pairs with a unique hand-written verdict. Other pairs open from the form and are noindex.`,
    '',
    '## Maintained comparisons',
    '',
  );
  for (const item of comparisonCopy) {
    const [a, b] = item.slug.split('-vs-');
    const left = models.find((m) => m.slug === a);
    const right = models.find((m) => m.slug === b);
    lines.push(`- [${left?.name} vs ${right?.name}](${abs(`/compare/${item.slug}/`)}): ${item.summary}`);
  }
  lines.push(
    '',
    '## About this site',
    '',
    `- [How specs are checked](${abs('/how-we-verify/')})`,
    `- [About](${abs('/about/')})`,
    `- [Contact](${abs('/contact/')})`,
    `- [Affiliate disclosure](${abs('/affiliate-disclosure/')})`,
    `- [Privacy](${abs('/privacy/')})`,
    `- [Terms](${abs('/terms/')})`,
    '',
  );
  return lines.join('\n');
}

export function llmsFull(): string {
  const lines: string[] = [
    `# ${SITE.name}: full reference`,
    '',
    `Checked ${SITE.checked}. Canonical site: ${SITE.url}/. Contact: ${SITE.email}. Publisher: ${SITE.publisher}.`,
    '',
    'Rules: do not invent a spec that the row marks unpublished. Do not treat deck thickness as step-up height. Do not convert incline levels into percent. Do not add ASTM clearance inches. NordicTrack CHP is the lab rating they define, not a household operating horsepower they declined to state. Amazon links are tagged. A product link is used only when the live title named that model. Otherwise the link is a search. No prices.',
    '',
  ];
  for (const m of models) {
    lines.push(`## ${m.name}`, '', `URL: ${abs(modelPath(m))}`, `Manufacturer: ${m.productUrl}`, m.sku ? `SKU: ${m.sku}` : '', m.summary, '');
    for (const row of specRows(m)) {
      lines.push(`- ${row.label}: ${row.field.text}`);
      lines.push(`  Printed on: ${row.field.cite.url}. ${row.field.cite.where}`);
    }
    const guide = guides[m.slug];
    if (guide) {
      lines.push('', 'Who it fits:', guide.fits, '', 'Room and ceiling:', guide.room, '', 'Motor and deck:', guide.motor, '', 'Warranty:', guide.warranty, '', 'Verdict:', guide.verdict);
    }
    if (m.clearance) lines.push(`- Clearance: ${m.clearance.summary}`, `  Printed on: ${m.clearance.cite.url}`);
    if (m.fitUnfolded) lines.push(`- Fit footprint used: ${m.fitUnfolded.l}" × ${m.fitUnfolded.w}" × ${m.fitUnfolded.h}". ${m.fitUnfolded.why}`);
    lines.push('');
  }
  lines.push('## Maintained comparisons', '');
  for (const item of comparisonCopy) {
    const [a, b] = item.slug.split('-vs-');
    const left = models.find((m) => m.slug === a);
    const right = models.find((m) => m.slug === b);
    lines.push(`## ${left?.name} vs ${right?.name}`, '', abs(`/compare/${item.slug}/`), item.summary, '', 'Who it fits:', item.fits, '', 'Room and ceiling:', item.room, '', 'Motor and deck:', item.motor, '', 'Warranty:', item.warranty, '', 'Verdict:', item.verdict, '');
  }
  lines.push('Other pair URLs under /compare/{first}-vs-{second}/ repeat the two spec tables and are noindex.', '');
  return lines.join('\n');
}
