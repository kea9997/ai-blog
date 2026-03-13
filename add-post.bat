@echo off
pushd "%~dp0"
cls
echo ==========================================
echo   AI Blog: Adding New Post...
echo ==========================================
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "scripts\add-post.ps1"
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Something went wrong.
    pause
)
popd
