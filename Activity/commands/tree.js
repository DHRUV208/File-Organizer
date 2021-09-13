let fs = require('fs');
let path = require('path');


function treeFunct(srcPath){
    let baseName = path.basename(srcPath)
    console.log(baseName);
console.log('|____');
    let content = fs.readFileSync(srcPath);
    let allEntities ="";
    for(let i=0;i<content.length;i++){
        allEntities+='\n\t'+'|___'+content[i];
        //console.log(content[i]);
    }
    console.log(allEntities);
}
module.exports={
    treeFn:treeFunct
};