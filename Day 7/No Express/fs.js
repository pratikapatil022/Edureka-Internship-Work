var fs = require('fs');

/*fs.writeFile('MyFile.txt','This is from FS Node',function(err){
    if(err) throw err;
    console.log('File Created')
})

fs.appendFile('MyFile.txt',`${Math.floor(Math.random()*(100-1)+1)} This is from FS Node \n`,(err)=>{
    if(err) throw err;
    console.log('File Created')
});


fs.readFile('MyFile.txt','utf-8',(err,data) => {
    if(err) throw err;
    console.log(data)
})

fs.readFile('db.json','utf-8',(err,data) => {
    if(err) throw err;
    console.log(data)
})


fs.rename('MyFile.txt','MyText.txt',(err) => {
    if(err) throw err;
    console.log('File Remaned')
})
*/


fs.unlink('MyText.txt',(err) => {
    if(err) throw err;
    console.log('File Deleted')
})





