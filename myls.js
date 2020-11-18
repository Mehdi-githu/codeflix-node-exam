const fs = require('fs');

const filename=process.argv[2];
fs.readdir(filename, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});      
// (pas abouti)