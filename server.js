/* eslint-disable @typescript-eslint/no-var-requires */
const { createServer } = require('http');
const { parse } = require('url');
const httpProxy = require('http-proxy');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = false; // process.env.NODE_ENV !== 'production'
const app = next({ dev });
// const app = next({ dev: false })

var proxyBlog = httpProxy.createProxyServer({});

proxyBlog.on('proxyRes', function (proxyRes, req, res) {
    var body = [];
    proxyRes.on('data', function (chunk) {
        body.push(chunk);
    });
    proxyRes.on('end', function () {
        if (proxyRes.statusCode!=200) {
          try {
            let path=req.ori_url;
            if (path.substr(path.length-1) == "/") {
              path = path.substr(0,path.length-1)
            }
            path = path.substr(0,path.lastIndexOf("/"))+"/"
            res.writeHead(302, {
              'Location': path
            });
            res.end("");
            return;
          }
          catch(e){}
        }
        body = Buffer.concat(body);
        res.write(body, 'binary')
        res.end(null,'binary');
    });
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    if (process.env.FORCE_SSL &&  process.env.FORCE_SSL.indexOf(req.headers.host)>=0 && req.headers['x-forwarded-proto']!='https') {
      res.writeHead(302, {'Location': 'https://' + req.headers.host + req.url});
      res.end();
      return;
    }
    const { pathname, query } = parsedUrl;

    if (pathname.startsWith("/blog") && process.env.FORCE_BLOG_ADDRESS) {
      req.ori_url = req.url
      if(req.url==="/blog") {
        req.url = req.url+"/index.html"
      }
      if(req.url.endsWith("/")) {
        req.url = req.url+"index.html"
      }
      proxyBlog.web(req, res, { target: process.env.FORCE_BLOG_ADDRESS, changeOrigin:true, secure:false, selfHandleResponse : true});
      return;
    }


    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
