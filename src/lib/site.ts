export const SITE = {
  name: 'TreadmillSpecs.com',
  url: 'https://treadmillspecs.com',
  email: 'contact@treadmillspecs.com',
  tagline: 'Treadmill specifications from manufacturer pages, and a room-fit check',
  checked: '2026-11-01',
  publisher: 'Treadmill Specs',
} as const;

export function abs(path: string): string {
  return SITE.url + path;
}
