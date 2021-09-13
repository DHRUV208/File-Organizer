let path = require('path');
let fs = require('fs');

let inputArr = process.argv.slice(2);
console.log(inputArr);

let fileName = inputArr[0];
let content = inputArr[1];

 console.log('fileName',fileName);
 console.log('content',content);

 let currentPath = process.cwd();
 console.log(currentPath);

let joinedPath = path.join(currentPath,'abc','def.txt');
console.log(joinedPath);

let file = path.basename('C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\pathModule\\path.js','.js');
console.log(file);

let extensionName= path.extname('C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\pathModule\\path.js');
console.log(extensionName);

if(extensionName=='.txt'){
    let srcPath='C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\pathModule\\a.txt';
let destPath='C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\fsModule\\b.txt';
let toBeCopiedFileName = path.basename(srcPath);
let dest = path.join('C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\fsModule\\dir',toBeCopiedFileName);
console.log(dest);
fs.copyFileSync(srcPath,destPath);
fs.copyFileSync(srcPath,dest);
}








