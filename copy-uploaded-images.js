const fs = require('fs');
const path = require('path');

const srcDir = "C:\\Users\\a7416\\.cursor\\projects\\c-Users-a7416-Desktop-web\\assets";
const destDir = "C:\\Users\\a7416\\Desktop\\web\\public\\images";

// Create destination if not exists
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Get all files in assets folder
const files = fs.readdirSync(srcDir);
console.log("Found files:", files);

// Copy each file with proper name
files.forEach((file, index) => {
    const src = path.join(srcDir, file);
    const ext = path.extname(file);
    
    // Map based on order
    const names = [
        "hand-model-1.png",
        "hand-model-2.png", 
        "rose-ring.png",
        "rose-ring-2.png",
        "rose-ring-3.png",
        "daisy-2.png",
        "peach-blossom-1.png",
        "plum-blossom-3.png",
        "birthstones-reference.png"
    ];
    
    const destName = names[index] || `image-${index + 1}${ext}`;
    const dest = path.join(destDir, destName);
    
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${file} -> ${destName}`);
});

console.log("Done!");
