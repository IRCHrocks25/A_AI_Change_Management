import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const PRODUCTION_URL = process.env.RAILWAY_PRODUCTION_URL || 'https://aaichangemanagement-production.up.railway.app';

// CORS configuration (if needed for API calls)
app.use((req, res, next) => {
  // Allow requests from the production domain
  const origin = req.headers.origin;
  if (origin === PRODUCTION_URL || origin?.includes('railway.app')) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Serve static files from the build directory
app.use(express.static(join(__dirname, 'build')));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Production URL: ${PRODUCTION_URL}`);
});

