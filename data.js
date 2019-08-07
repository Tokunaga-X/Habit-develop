const fs = require('fs');
const path = require('path');


// fs.writeFile(path.join(__dirname,'/data','data.txt'),'hello?',(err) => {
//     if(err) throw err;
//     console.log("writed!");
// })
fs.readFile(path.join(__dirname,'/data','data.json'),'utf8',(err, data) => {
    if(err) throw err;
    else {
        let date = JSON.parse(data);
        let newdata = {
            time: "2019/8/5",
            check1: "√",
            check2: "√",
            check3: "√"
        }
        date.push(newdata);
        console.log(date);
        fs.writeFile(path.join(__dirname,'/data','data.json'),JSON.stringify(date),(err) => {
            if(err) throw err;
            
            console.log("writed!")
        })
    }
    
});