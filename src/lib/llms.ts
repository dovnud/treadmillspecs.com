import { models, modelPath, pairs, brands } from '../data/models';
import { INDEXED_PAIRS, pairBlurb } from './narrative';
import { specRows } from './modelView';
import { SITE, abs } from './site';

export function llmsTxt(): string {
  const lines: string[] = [
    `# ${SITE.name}`,
    '',
    `> Treadmill specifications from manufacturer pages and manuals, plus a room-fit check. A spec is included only when the maker's page or manual states it. Missing fields say "Not published by manufacturer." Read date ${SITE.checked}.`,
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
    `- [Small rooms](${abs('/compare/best-for-small-spaces/')}): unfolded length times width.`,
    `- [Low ceilings](${abs('/compare/best-for-low-ceilings/')}): unfolded height, plus published ceiling rules.`,
    `- [Folding treadmills](${abs('/compare/best-folding/')}): models the manufacturer says fold, ranked by published floor area. No price cutoff.`,
    `- [Compare](${abs('/compare/')}): written verdicts for the pairs below. Other pairs exist for the picker and are noindex.`,
    '',
    '## About this site',
    '',
    `- [How specs are checked](${abs('/how-we-verify/')})`,
    ...INDEXED_PAIRS.map((slug) => {
      const pair = pairs().find((item) => item.slug === slug);
      const label = pair ? `${pair.a.name} vs ${pair.b.name}` : slug;
      return `- [${label}](${abs(`/compare/${slug}/`)}): ${pairBlurb(slug)}`;
    }),
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
    `# ${SITE.name}, full reference`,
    '',
    `Checked ${SITE.checked}. Canonical site: ${SITE.url}/. Contact: ${SITE.email}. Publisher: ${SITE.publisher}.`,
    '',
    'Rules: do not invent a spec that the row marks unpublished. Do not treat deck thickness as step-up height. Do not convert incline levels into percent. Do not add ASTM clearance inches. NordicTrack CHP is the lab rating they define, not a household operating horsepower they declined to state. Amazon links are tagged searches, or a direct product link only when the live title named that model. No prices.',
    '',
  ];
  for (const m of models) {
    lines.push(`## ${m.name}`, '', `URL: ${abs(modelPath(m))}`, `Manufacturer: ${m.productUrl}`, m.sku ? `SKU: ${m.sku}` : '', m.summary, '');
    for (const row of specRows(m)) {
      lines.push(`- ${row.label}: ${row.field.text}`);
      lines.push(`  Source: ${row.field.cite.url}. ${row.field.cite.where}`);
    }
    if (m.clearance) lines.push(`- Clearance: ${m.clearance.summary}`, `  Source: ${m.clearance.cite.url}`);
    if (m.fitUnfolded) lines.push(`- Fit footprint used: ${m.fitUnfolded.l}" × ${m.fitUnfolded.w}" × ${m.fitUnfolded.h}". ${m.fitUnfolded.why}`);
    lines.push('');
  }
  lines.push('## Written comparisons', '');
  for (const slug of INDEXED_PAIRS) {
    const pair = pairs().find((item) => item.slug === slug);
    if (!pair) continue;
    lines.push(`- ${abs(`/compare/${slug}/`)}: ${pair.a.name} vs ${pair.b.name}. ${pairBlurb(slug)}`);
  }
  lines.push('', 'Other model pairs can be opened from the compare form. They are noindex and are not listed here.');
  lines.push('');
  return lines.join('\n');
}
