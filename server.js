const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.port || 3000;
const app = next({ dev, hostname, port });
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      if (pathname === '/a') {
        await app.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query);
      } else {
        await handle(req, res, query);
      }
    } catch (error) {
      console.log('Error occured!', error);
      res.statusCode = 500;
      res.end('Internal server error!');
    }
  })
    .once('error', (err) => {
      console.log(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
