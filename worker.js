export default {
  async fetch(request) {
    const websites = [
      {
        url: "https://gitlab.com/UmmIt",
        title: "<h1>GitLab</h1>",
        devops: "GitLab"
      },
      {
        url: "https://codeberg.org/UmmIt",
        title: "<h1>Codeberg</h1>",
        devops: "Codeberg"
      }
    ];

    const statusCode = 301;

    const maxRedirects = 5; // Adjust this value as needed
    let redirectCount = 0;

    const randomIndex = Math.floor(Math.random() * websites.length);
    const { url, title, devops } = websites[randomIndex];

    redirectCount++;

    let redirectHTML;

    if (redirectCount <= maxRedirects) {
      redirectHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="refresh" content="5;url=${url}">
          <title>Redirecting...</title>
        </head>
        <body>
          <h1>${title}</h1>
          <div>
            <p>There's nothing to see at the moment, will redirect to my ${devops} ...</p>
          </div>
          <p>Redirecting to 
            <a href="${url}">${devops}</a> in 5 seconds...</p>
        </body>
        </html>
      `;
    } else {
      redirectHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Max Redirects Reached</title>
        </head>
        <body>
          <h1>Max Redirects Reached</h1>
          <p>No more redirects allowed.</p>
        </body>
        </html>
      `;
    }

    // Log the request URL
    console.log("Request URL:", request.url);

    // Create a new response with the redirect and cache control headers
    const response = new Response(redirectHTML, {
      status: statusCode,
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-store, max-age=0"
      }
    });

    return response;
  },
};

// Register the fetch event listener outside the fetch handler
self.addEventListener('fetch', event => {
  console.log("Inside fetch event listener");
});
