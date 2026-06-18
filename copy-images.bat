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
    if !i!==3 set name=peach_blossom_1.png
    if !i!==4 set name=dasiy_2.png
    if !i!==5 set name=plum_blossom_3.png
    
    copy "%%f" "%dest%\%name%" >nul 2>&1
    if !errorlevel!==0 (
        echo [OK] !name!
    )
    set /a i+=1
)

echo.
echo Done!
pause
