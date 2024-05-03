export default {
  async fetch(request) {
    const urls = [
      "https://gitlab.com/UmmIt",
      "https://codeberg.org/UmmIt"
    ];
    const statusCode = 301;

    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomURL = urls[randomIndex];

    const url = new URL(request.url);
    const { pathname, search } = url;

    const destinationURL = `${randomURL}${pathname}${search}`;
    console.log(destinationURL);

    // Create a new response with the redirect and cache control headers
    const response = new Response(null, {
      status: statusCode,
      headers: {
        "Location": destinationURL,
        "Cache-Control": "no-store, max-age=0"
      }
    });
    
    return response;
  },
};
