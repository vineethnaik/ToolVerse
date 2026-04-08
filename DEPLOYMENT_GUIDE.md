# Deployment Guide - ToolVerse Application

## Overview
This guide covers deploying the ToolVerse application with:
- **Backend**: Spring Boot API on Render
- **Frontend**: React SPA on Vercel
- **Database**: MongoDB Atlas (already configured)

## Backend Deployment (Render)

### 1. Prerequisites
- Render account (free tier available)
- MongoDB Atlas cluster (already configured)
- Git repository with backend code

### 2. Environment Variables Required
Set these in your Render dashboard:

```bash
MONGODB_URI=mongodb+srv://vineethnaikeslavath_db_user:hsj7XeL5tRhD3oAu@toolverse.ovqjujb.mongodb.net/?appName=ToolVerse
MONGODB_DATABASE=toolverse
JWT_SECRET=generate-a-new-secure-secret-key-here
SPRING_PROFILES_ACTIVE=production
SERVER_PORT=8080
```

### 3. Deployment Steps
1. Push your backend code to GitHub/GitLab
2. Create a new "Web Service" on Render
3. Connect your Git repository
4. Render will automatically detect the `render.yaml` configuration
5. The Dockerfile will be used for containerization
6. Set the environment variables in the Render dashboard
7. Deploy!

### 4. Health Check
The backend includes a health check endpoint: `/api/actuator/health`

## Frontend Deployment (Vercel)

### 1. Prerequisites
- Vercel account (free tier available)
- Git repository with frontend code

### 2. Environment Variables Required
Set these in your Vercel dashboard:

```bash
VITE_API_BASE_URL=https://your-backend-name.onrender.com/api
```

### 3. Deployment Steps
1. Push your frontend code to GitHub/GitLab
2. Connect your repository to Vercel
3. Vercel will auto-detect the Vite configuration
4. Set the environment variables in Vercel dashboard
5. Deploy!

### 4. Important Notes
- Update `VITE_API_BASE_URL` after your backend is deployed
- The `.env.production` file is included for local testing

## Post-Deployment Checklist

### Backend (Render)
- [ ] Service is running and accessible
- [ ] Health check endpoint responds: `https://your-app.onrender.com/api/actuator/health`
- [ ] Environment variables are properly set
- [ ] Database connection is working
- [ ] JWT authentication is functional

### Frontend (Vercel)
- [ ] Application loads successfully
- [ ] API calls reach the backend
- [ ] Authentication flow works
- [ ] All pages render correctly

## Security Recommendations

### Production JWT Secret
Generate a secure JWT secret for production:
```bash
# Use this command to generate a secure secret
openssl rand -base64 64
```

### Environment Variable Security
- Never commit `.env` files to version control
- Use different secrets for development and production
- Regularly rotate your JWT secrets

## Troubleshooting

### Common Issues
1. **Backend won't start**: Check environment variables and logs
2. **Frontend can't reach backend**: Verify `VITE_API_BASE_URL` is correct
3. **CORS errors**: Ensure backend allows frontend origin
4. **Database connection**: Verify MongoDB URI and network access

### Monitoring
- Render provides built-in logs and metrics
- Vercel offers deployment logs and performance insights
- Monitor both services after deployment

## File Structure Summary

```
Backend/
|-- render.yaml          # Render deployment configuration
|-- Dockerfile           # Container configuration
|-- .env                 # Local environment variables
|-- src/main/resources/
|   |-- application.yml  # Spring Boot configuration with env vars
|-- pom.xml             # Maven dependencies

Frontend/
|-- .env.production      # Production environment variables
|-- package.json         # Dependencies and build scripts
|-- vite.config.js       # Vite configuration
```

## Next Steps
1. Deploy backend first to get the production URL
2. Update frontend environment variables with backend URL
3. Deploy frontend
4. Test the complete application
5. Set up monitoring and alerts
