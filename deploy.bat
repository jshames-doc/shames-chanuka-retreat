@echo off
SETLOCAL
SET SERVICE_NAME=shames-chanuka-retreat
SET REGION=me-west1
SET PROJECT_ID=gen-lang-client-0026629090

echo ====================================================
echo   Cloud Run Deployment
echo ====================================================
echo.
echo Project: %PROJECT_ID%
echo Service: %SERVICE_NAME%
echo Region:  %REGION%
echo.
echo [1/3] Verifying Google Cloud login...
call gcloud config set project %PROJECT_ID%

echo.
echo [2/3] Building container image with Cloud Build...
echo This may take a few minutes...
echo.

call gcloud builds submit -t gcr.io/%PROJECT_ID%/%SERVICE_NAME% .

echo.
echo [3/3] Deploying to Cloud Run...
echo.

call gcloud run deploy %SERVICE_NAME% ^
  --image gcr.io/%PROJECT_ID%/%SERVICE_NAME% ^
  --platform managed ^
  --region %REGION% ^
  --allow-unauthenticated

echo.
echo ====================================================
echo   Deployment Process Finished
echo ====================================================
pause
