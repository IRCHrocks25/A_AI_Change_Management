// Configuration file for the application
export const config = {
  // Railway production URL
  productionUrl: process.env.RAILWAY_PRODUCTION_URL || 'https://aaichangemanagement-production.up.railway.app',
  
  // Base URL for API calls (if needed in the future)
  apiBaseUrl: process.env.API_BASE_URL || process.env.RAILWAY_PRODUCTION_URL || 'https://aaichangemanagement-production.up.railway.app',
  
  // Environment
  env: process.env.NODE_ENV || 'development',
  
  // Is production
  isProduction: process.env.NODE_ENV === 'production',
};

