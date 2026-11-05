import { modelPath, type Model } from '../data/models.ts';
import { crumbLd, webPageLd } from './ld.ts';

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

/**
 * Model pages are WebPage documents. A Product snippet needs an offer, a review,
 * or an aggregate rating, and an offer needs a real price. This catalog has no
 * price, availability, or review, so the pages do not declare a product entity.
 */
export function modelPageLd(m: Model, checked: string) {
  const path = modelPath(m);
  const crumbs = [
    { name: 'Models', path: '/models/' },
    { name: m.name, path },
  ];
  return [
    webPageLd(`${m.name} specs`, path, m.summary, checked),
    crumbLd(crumbs),
    {
      '@type': 'FAQPage',
      mainEntity: modelFaqs(m).map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
}
