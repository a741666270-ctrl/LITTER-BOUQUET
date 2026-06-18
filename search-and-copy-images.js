const fs = require('fs');
const path = require('path');

const source = "C:\\Users\\a7416\\.cursor\\projects\\c-Users-a7416-Desktop-web\\assets";
const dest = "C:\\Users\\a7416\\Desktop\\web\\public\\images";

const files = [
    {src: "c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_hand_model1-b4c158b8-d8db-4f48-9302-fdd0d8d0fe03.png", dst: "hero.png"},
    {src: "c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_hand_model_2-acf3c464-00e6-4ebf-b29d-7c0549f899cf.png", dst: "stacked-1.png"},
    {src: "c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_rose_ring-89f11d03-0464-4eaa-8c65-1cf5dbc70bc5.png", dst: "stacked-2.png"},
    {src: "c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_rose_ring_2-87d951bd-ca91-4af2-af43-5ec0b9c4ed36.png", dst: "stacked-3.png"},
    {src: "c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_peach_blossom_1-bf3e538d-fff7-4a83-9223-baada8bbfe92.png", dst: "peach-blossom.png"},
    {src: "c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_dasiy_2-ccc8322f-65d6-40ff-b663-db0eb0237e03.png", dst: "daisy.png"},
    {src: "c__Users_a7416_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_plum_blossom_3-a7c82673-d0de-4a62-9009-4c05ad991457.png", dst: "plum-blossom.png"}
];

console.log("=== Image Copy Script ===\n");

// Check source directory
console.log("Source folder:", source);
if (!fs.existsSync(source)) {
    console.log("ERROR: Source folder does not exist!");
    
    // Try to find the files elsewhere
    const searchPaths = [
        "C:\\Users\\a7416\\AppData\\Roaming\\Cursor\\User\\workspaceStorage\\empty-window\\images",
        "C:\\Users\\a7416\\AppData\\Roaming\\Cursor\\User\\workspaceStorage",
    ];
    
    for (const searchPath of searchPaths) {
        if (fs.existsSync(searchPath)) {
            console.log("\nSearching in:", searchPath);
            try {
                const items = fs.readdirSync(searchPath);
                console.log("Contents:", items.slice(0, 20));
            } catch (e) {
                console.log("Could not read:", e.message);
            }
        }
    }
} else {
    console.log("Source folder exists.");
    try {
        const items = fs.readdirSync(source);
        console.log("Files in source:", items);
    } catch (e) {
        console.log("Could not read source:", e.message);
    }
}

// Ensure destination exists
if (!fs.existsSync(dest)) {
    console.log("\nCreating destination folder:", dest);
    fs.mkdirSync(dest, { recursive: true });
} else {
    console.log("\nDestination folder exists:", dest);
}

// Copy files
console.log("\n=== Copy Results ===");
let copied = 0;
let notFound = 0;

files.forEach(file => {
    const srcPath = path.join(source, file.src);
    const dstPath = path.join(dest, file.dst);
    
    if (fs.existsSync(srcPath)) {
        try {
            fs.copyFileSync(srcPath, dstPath);
            console.log(`SUCCESS: ${file.dst}`);
            copied++;
        } catch (e) {
            console.log(`ERROR copying ${file.dst}: ${e.message}`);
            notFound++;
        }
    } else {
        console.log(`NOT FOUND: ${file.src}`);
        notFound++;
    }
});

console.log(`\n=== Summary ===`);
console.log(`Copied: ${copied}`);
console.log(`Not found: ${notFound}`);
console.log("\nDone!");
