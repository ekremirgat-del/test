import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    message: 'Node.js backend bağlantısı aktif.',
    timestamp: new Date().toISOString(),
  });
});

if (process.env.NODE_ENV === 'production') {
  const clientPath = path.resolve(__dirname, '../dist');
  app.use(express.static(clientPath));
  app.get('*splat', (_request, response) => {
    response.sendFile(path.join(clientPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Backend http://localhost:${port} adresinde çalışıyor.`);
});
