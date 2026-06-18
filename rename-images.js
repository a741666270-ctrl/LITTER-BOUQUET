const fs = require('fs');
const path = require('path');

const dir = "C:\\Users\\a7416\\Desktop\\web\\public\\images";

const renames = {
    "hand model 1.png": "hand-model-1.png",
    "hand model 2.png": "hand-model-2.png",
    "ring details.png": "ring-details.png",
    "rose ring 2.png": "rose-ring-2.png",
    "peach blossom 1.png": "peach-blossom-1.png",
    "daisy 2.png": "daisy-2.png",
    "plum blossom 3.png": "plum-blossom-3.png",
};

Object.entries(renames).forEach(([oldName, newName]) => {
    const oldPath = path.join(dir, oldName);
    const newPath = path.join(dir, newName);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${oldName} -> ${newName}`);
    } else {
        console.log(`Not found: ${oldName}`);
    }
});

console.log("Done!");
