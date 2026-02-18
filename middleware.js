// Redirect dimov.ch → www.dimov.ch (runs at edge before any cache)
export default async function middleware(request) {
  const url = new URL(request.url);

  if (url.hostname === 'dimov.ch') {
    return Response.redirect(`https://www.dimov.ch${url.pathname}${url.search}`, 308);
  }

  return fetch(request);
}
