@echo off
echo ========================================
echo   Portfolio Deployment Helper
echo ========================================
echo.

echo Step 1: Installing Vercel CLI...
call npm install -g vercel

echo.
echo Step 2: Logging into Vercel...
echo (A browser window will open for authentication)
call vercel login

echo.
echo Step 3: Deploying your portfolio...
call vercel --prod

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your portfolio is now live!
echo Check the URL above to access it.
echo.
pause
