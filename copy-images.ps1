$source = "C:\Users\a7416\.cursor\projects\c-Users-a7416-Desktop-web\assets"
$dest = "C:\Users\a7416\Desktop\web\public\images"

$files = @(
    @{src="c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_hand_model1-b4c158b8-d8db-4f48-9302-fdd0d8d0fe03.png"; dst="hero.png"},
    @{src="c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_hand_model_2-acf3c464-00e6-4ebf-b29d-7c0549f899cf.png"; dst="stacked-1.png"},
    @{src="c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_rose_ring-89f11d03-0464-4eaa-8c65-1cf5dbc70bc5.png"; dst="stacked-2.png"},
    @{src="c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_rose_ring_2-87d951bd-ca91-4af2-af43-5ec0b9c4ed36.png"; dst="stacked-3.png"},
    @{src="c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_peach_blossom_1-bf3e538d-fff7-4a83-9223-baada8bbfe92.png"; dst="peach-blossom.png"},
    @{src="c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_dasiy_2-ccc8322f-65d6-40ff-b663-db0eb0237e03.png"; dst="daisy.png"},
    @{src="c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_plum_blossom_3-a7c82673-d0de-4a62-9009-4c05ad991457.png"; dst="plum-blossom.png"}
)

foreach ($file in $files) {
    $srcPath = Join-Path $source $file.src
    $dstPath = Join-Path $dest $file.dst
    if (Test-Path $srcPath) {
        Copy-Item -Path $srcPath -Destination $dstPath -Force
        Write-Host "Copied: $($file.dst)"
    } else {
        Write-Host "Not found: $($file.src)"
    }
}

Write-Host "Done!"
