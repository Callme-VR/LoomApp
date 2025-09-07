# Environment Setup Guide

This guide will help you set up the required environment variables for the Wagger application.

## Required Environment Variables

### 1. Xata Database Configuration

1. Go to your Xata dashboard: https://app.xata.io/
2. Navigate to your workspace and database
3. Go to Settings → API Keys
4. Copy your API key
5. Add to `.env.local`: `XATA_API_KEY=your_actual_api_key`

### 2. Google OAuth Configuration

1. Go to Google Cloud Console: https://console.cloud.google.com/
2. Create a new project or select existing project
3. Enable the Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Configure the OAuth consent screen
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
7. Copy Client ID and Client Secret
8. Add to `.env.local`:
   ```
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

### 3. Base URL Configuration

For development:
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

For production:
```
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## Complete .env.local Example

```env
# Xata Database Configuration
XATA_API_KEY=xau_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Google OAuth Configuration  
GOOGLE_CLIENT_ID=123456789-xxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxx

# Application Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Database URL (for Drizzle migrations)
DATABASE_URL_POSTGRES=your_postgres_connection_string
```

## Troubleshooting

### "Invalid API key" Error
- Double-check your `XATA_API_KEY` is correct
- Ensure the API key has proper permissions
- Verify the database URL matches your Xata workspace

### "GOOGLE_CLIENT_ID environment variable is required" Error
- Ensure all Google OAuth variables are set in `.env.local`
- Restart your development server after adding variables
- Check for typos in variable names

### Authentication Flow Issues
- Verify redirect URIs in Google Cloud Console match your app URLs
- Ensure OAuth consent screen is properly configured
- Check that the Google+ API is enabled in your project