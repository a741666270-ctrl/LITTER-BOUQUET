# Create images folder if not exists
$dest = "C:\Users\a7416\Desktop\web\public\images"
if (!(Test-Path $dest)) { New-Item -ItemType Directory -Path $dest -Force }

# Source assets folder
$src = "C:\Users\a7416\.cursor\projects\c-Users-a7416-Desktop-web\assets"

# Copy ring images with correct names
Get-ChildItem "$src\*peach*" | Select-Object -First 1 | Copy-Item -Destination "$dest\peach_blossom_1.png" -Force
Get-ChildItem "$src\*dasiy*" | Select-Object -First 1 | Copy-Item -Destination "$dest\daisy_2.png" -Force
Get-ChildItem "$src\*plum*" | Select-Object -First 1 | Copy-Item -Destination "$dest\plum_blossom_3.png" -Force

# List results
Write-Host "`nImages in public/images:"
Get-ChildItem $dest | Format-Table Name
