let fs = require ('fs');
let path = require('path');
let content = fs.readFileSync('f1.txt');
console.log(content + "");

fs.writeFileSync('abc.txt','hello evryone how r u');

fs.appendFileSync('abc.txt','Hakuna Matata');
//delete file --> fs.unlinkSync('abc.txt');

//directories 
// to make a folder
// fs.mkdirSync('pathModule');
//to delete a folder
//  fs.rmdirSync('pathModule');

//to check if a file exist or not
let doesExist=fs.existsSync('fs.js');
console.log('fs.js file',doesExist);

//statusObject of file/folder
let statusObj = fs.lstatSync('f1.txt');
console.log(statusObj);
// c/users/Program/PepCoding/Js --> to a folder
// c/users/Program/PepCoding/Js/array.js -->to a file
console.log(statusObj.isFile());
console.log(statusObj.isDirectory());

let fileArray=fs.readdirSync('C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\fsModule\\dir');
console.log(fileArray);


let srcPath='C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\fsModule\\f1.txt';
let destPath='C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\fsModule\\f2.txt';
let toBeCopiedFileName = path.basename(srcPath);
let dest = path.join('C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\fsModule\\dir',toBeCopiedFileName);
console.log(dest);
fs.copyFileSync(srcPath,destPath);
fs.copyFileSync(srcPath,dest);
