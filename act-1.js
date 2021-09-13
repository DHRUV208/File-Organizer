let fs = require('fs');
let path = require('path');
let inputArr=process.argv.slice(2);

let inputDir = inputArr[0];
let allEntities = fs.readdirSync(inputDir);
//console.log(allEntities);
let content ="";
for(let i =0;i<allEntities.length;i++){
    let entityName = allEntities[i];
    let ename = path.join(inputDir,entityName);
    let stats = fs.lstatSync(ename);
    let isFile = stats.isFile();
    if(isFile){
        let extName = path.extname(ename);
        if(extName == '.txt'||extName == '.js'){
content+=fs.readFileSync(ename);
        }
    }
}
// let summaryFile = path.join(process.cwd(),'summary.txt');
let summaryFile = 'C:\\Users\\dell\\Desktop\\WebDev\\Projects\\FileOrganizer\\summary.js';
fs.writeFileSync(summaryFile,content);