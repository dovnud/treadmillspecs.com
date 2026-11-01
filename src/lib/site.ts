export const SITE = {
  name: 'TreadmillSpecs.com',
  url: 'https://treadmillspecs.com',
  email: 'contact@treadmillspecs.com',
  tagline: 'Manufacturer-sourced treadmill specs and a will-it-fit check',
  checked: '2026-11-01',
  publisher: 'Treadmill Specs',
} as const;

export function abs(path: string): string {
  return SITE.url + path;
}
