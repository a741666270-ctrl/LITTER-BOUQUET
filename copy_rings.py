import shutil
import os
import glob

# Find source files in assets folder
src_folder = r"C:\Users\a7416\.cursor\projects\c-Users-a7416-Desktop-web\assets"
dst_folder = r"C:\Users\a7416\Desktop\web\public\images"

# Create destination folder
os.makedirs(dst_folder, exist_ok=True)

# Find and copy the three ring images
patterns = {
    "peach_blossom_1.png": "*peach*",
    "daisy_2.png": "*dasiy*",
    "plum_blossom_3.png": "*plum*"
}

for dest_name, pattern in patterns.items():
    files = glob.glob(os.path.join(src_folder, pattern + "*.png"))
    if files:
        dest_path = os.path.join(dst_folder, dest_name)
        shutil.copy(files[0], dest_path)
        print(f"Copied: {os.path.basename(files[0])} -> {dest_name}")
    else:
        print(f"Not found: {pattern}")

# List destination folder
print("\nFiles in destination:")
for f in os.listdir(dst_folder):
    print(f"  {f}")
