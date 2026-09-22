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
echo Building and deploying to Cloud Run...
echo This may take a few minutes...
echo.

call gcloud run deploy %SERVICE_NAME% ^
  --source . ^
  --project %PROJECT_ID% ^
  --platform managed ^
  --region %REGION% ^
  --allow-unauthenticated

echo.
echo ====================================================
echo   Deployment Process Finished
echo ====================================================
pause
