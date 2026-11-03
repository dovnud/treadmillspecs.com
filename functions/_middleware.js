import { HSTS_HEADER, hstsOn } from './lib/public-env.js';

export async function onRequest(context) {
  const response = await context.next();
  if (hstsOn(context.env) && !response.headers.has('Strict-Transport-Security')) {
    response.headers.set('Strict-Transport-Security', HSTS_HEADER);
  }
  return response;
}
