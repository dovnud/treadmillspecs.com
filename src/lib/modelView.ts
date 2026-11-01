import type { Model } from '../data/models';
import { modelPath } from '../data/models';
import { SITE } from './site';

export function specRows(m: Model) {
  const rows = [
    { label: 'Running surface', field: m.deck },
    { label: 'Motor', field: m.motor },
    { label: 'Maximum user weight', field: m.maxUser },
    { label: 'Unfolded dimensions', field: m.unfolded },
    { label: 'Folded dimensions', field: m.folded },
    { label: 'Step-up height', field: m.stepUp },
    { label: 'Power', field: m.power },
    { label: 'Incline', field: m.incline },
    { label: 'Speed', field: m.speed },
  ];
  rows.push({
    label: 'Machine weight',
    field: m.machineWeight ?? {
      text: 'Not published by manufacturer',
      published: false,
      cite: { url: m.productUrl, where: 'Not stated on the manufacturer page checked for this model.' },
    },
  });
  return rows;
}

export function modelFaqs(m: Model) {
  return [
    {
      q: `What running surface does the ${m.name} publish?`,
      a: m.deck.published
        ? `${m.deck.text} Source: ${m.deck.cite.url}`
        : `Not published by the manufacturer on the page we checked: ${m.deck.cite.url}`,
    },
    {
      q: `Does the ${m.name} fold?`,
      a: m.folds === 'yes'
        ? `Yes. Folded size: ${m.folded.text}`
        : m.folds === 'no'
          ? m.folded.text
          : m.folded.text,
    },
    {
      q: `What footprint does the manufacturer publish for the ${m.name}?`,
      a: m.unfolded.published
        ? `${m.unfolded.text} Source: ${m.unfolded.cite.url}`
        : 'Unfolded dimensions are not published on the page we checked.',
    },
    {
      q: `What user weight does the ${m.name} publish?`,
      a: m.maxUser.published ? m.maxUser.text : 'Not published by the manufacturer on the page we checked.',
    },
  ];
}

export function productLd(m: Model) {
  return {
    '@type': 'Product',
    name: m.name,
    sku: m.sku,
    brand: { '@type': 'Brand', name: m.brand },
    url: SITE.url + modelPath(m),
    description: m.summary,
    additionalProperty: specRows(m)
      .filter((row) => row.field.published)
      .map((row) => ({
        '@type': 'PropertyValue',
        name: row.label,
        value: row.field.text,
      })),
  };
}
