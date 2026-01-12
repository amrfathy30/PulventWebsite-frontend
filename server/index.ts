import express from 'express';
import { setupVite, serveStatic } from './vite.js';

const app = express();

if (app.get('env') === 'development') {
  await setupVite(app);
} else {
  serveStatic(app);
}

const port = 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`serving on port ${port}`);
});
