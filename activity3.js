const fs = require("fs");

fs.readdir('test', (err, files) => {
    files.forEach(
        (file) => {
            console.log(file);
        }
    );

});