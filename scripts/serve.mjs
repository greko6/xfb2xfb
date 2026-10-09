import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';

const page = await readFile(new URL('../dist/index.html', import.meta.url));
const port = Number(process.env.PORT || 4173);
createServer((request, response) => {
  const path = new URL(request.url, 'http://localhost').pathname;
  if (path !== '/' && path !== '/index.html') {
    response.writeHead(404).end('Not found');
    return;
  }
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(page);
}).listen(port, '127.0.0.1', () => {
  console.log(`Preview: http://127.0.0.1:${port}`);
});
