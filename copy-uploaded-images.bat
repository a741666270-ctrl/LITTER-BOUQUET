@echo off
setlocal enabledelayedexpansion

set "src=C:\Users\a7416\.cursor\projects\c-Users-a7416-Desktop-web\assets"
set "dest=C:\Users\a7416\Desktop\web\public\images"

if not exist "%dest%" mkdir "%dest%"

echo Copying uploaded images...
echo.

set i=1
for %%f in ("%src%\*") do (
    if !i!==1 set name=hand-model-1.png
    if !i!==2 set name=hand-model-2.png
    if !i!==3 set name=rose-ring.png
    if !i!==4 set name=rose-ring-2.png
    if !i!==5 set name=rose-ring-3.png
    if !i!==6 set name=daisy-2.png
    if !i!==7 set name=peach-blossom-1.png
    if !i!==8 set name=plum-blossom-3.png
    if !i!==9 set name=birthstones-reference.png
    if !i!==10 set name=flower-card-1.png
    
    copy "%%f" "%dest%\%name%" >nul 2>&1
    if !errorlevel!==0 (
        echo [OK] %%~nxf -^> !name!
    ) else (
        echo [SKIP] %%~nxf - not found or already exists
    )
    set /a i+=1
)

echo.
echo Done! Images in %dest%
pause
