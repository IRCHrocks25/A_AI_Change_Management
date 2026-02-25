# AI CHANGE MANAGEMENT A

This is a code bundle for AI CHANGE MANAGEMENT A. The original project is available at https://www.figma.com/design/c4uRU3ulJBGsyxOJSceT3I/AI-CHANGE-MANAGEMENT-A.

## Production URL

**Live Site:** https://aaichangemanagement-production.up.railway.app

## Running the code

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

### Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Deployment

This application is configured for Railway deployment. See `DEPLOYMENT_BEST_PRACTICES.md` for detailed deployment guidelines.

### Railway Configuration

- **Production URL:** https://aaichangemanagement-production.up.railway.app
- **Configuration Files:**
  - `railway.json` - Railway build and deploy configuration
  - `nixpacks.toml` - Fallback build configuration
  - `server.js` - Express server for SPA routing

## Environment Variables

Create a `.env` file (see `.env.example`) with:

```
RAILWAY_PRODUCTION_URL=https://aaichangemanagement-production.up.railway.app
PORT=3000
NODE_ENV=production
``` 
