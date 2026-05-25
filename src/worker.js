export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // SPA fallback: serve index.html for non-asset routes
    const isAsset = url.pathname.match(/\.[a-zA-Z0-9]+$/);
    if (!isAsset) {
      const indexRequest = new Request(`${url.origin}/index.html`, request);
      const indexResponse = await env.ASSETS.fetch(indexRequest);
      if (indexResponse.status === 200) {
        return new Response(indexResponse.body, {
          status: 200,
          headers: {
            'content-type': 'text/html; charset=utf-8',
            ...Object.fromEntries(indexResponse.headers),
          },
        });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
