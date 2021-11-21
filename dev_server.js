/* eslint-disable @typescript-eslint/no-var-requires */
const { createServer } = require('http');
const { parse } = require('url');
const httpProxy = require('http-proxy');
const next = require('next');

const port = process.env.PORT || 3000;
const app = next({ dev: true });
const handle = app.getRequestHandler();

var proxy = httpProxy.createProxyServer({});

const redirect_path = [
  '/Login',
  '/logout',
  '/api',
  '/Reservation/ViewPdf',
  '/reservation/search',
];

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    let length = redirect_path.length;
    for (let i = 0; i < length; i++) {
      if (pathname.startsWith(redirect_path[i])) {
        proxy.web(req, res, { target: 'http://localhost/' });
        return;
      }
    }

    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
