const hash = require('./hash.js');
const fs = require('fs');
let dir = "./test/";
let file = "text1"
let ext = ".txt";
let hashType = "md5";
hash.getHash(dir + file + ext, hashType).then((value) => {
    console.log('hash : ' + value);
    fs.writeFile(dir + file + "." + hashType + ext, value, (err) => {
        if (err) throw err;

        console.log("The file was succesfully saved!");
    });
});