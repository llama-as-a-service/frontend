const envVars = {
  NODE_ENV: process.env.NODE_ENV,
  TOKEN_COOKIE_KEY: 'laas-access-token',
  AUTH_API_URL: process.env.REACT_APP_AUTH_API_URL || 'http://localhost:7007',
  GATEWAY_API_URL: process.env.REACT_APP_GATEWAY_API_URL || 'http://localhost:8888',
}

export default envVars