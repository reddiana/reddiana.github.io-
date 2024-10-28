cd /d "%~dp0"
rmdir /S /Q public

explorer http://localhost:8080

npx quartz build --serve