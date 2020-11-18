const fs = require('fs')
const readline = require('readline') 
function args(){  
    if (process.argv.length == 2){
        const rl=readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.on('line', (input)=> console.log(input)) 
    }
    if (process.argv.length == 3){
        const filename=process.argv[2]
        console.log(fs.readFileSync(filename, 'utf8'))
        // fs.writeFileSync(filename=>filename.endsWith('$'))
        // // const regex = /dog/gi;
        // // console.log(p.replace(regex,'ferret'))
    } 
    if (process.argv[2] === "-e") {
        fs.readFile(process.argv[3], 'utf8', function(err, data) {
          if (err) throw err;
          const lines = data.split(/\r?\n/);
          lines.forEach((line) => {
              console.log(line + "$");
          });
      });
    }  
}
args()   
    
    



    






