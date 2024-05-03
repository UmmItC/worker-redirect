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

    return Response.redirect(destinationURL, statusCode);
  },
};
