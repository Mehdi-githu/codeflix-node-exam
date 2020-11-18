const fs = require('fs')
const path = require('path')
function cp(){
    const source=process.argv[2]
    const target=process.argv[3]
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
    // if (process.argv[4]== '-r'){

    //     //Folder and files
    //     const src = path.join(sourcedir, `${process.argv[2]}`);
    //     const sourcedir = fs.readdir(src, (err, files) => {
    //         if (err)
    //             console.log(err);
    //         else {
    //             files.forEach(file => {
    //                 return path.join(targetdir, file);
    //             })
    //         }
    //     })

    //     //Destination
    //     const targetdir = path.join(target, `${process.argv[3]}/`)

    //     //link
    //     const sourcedir = fs.createReadStream(source);
    //     const targetdir = fs.createWriteStream(target);
    //     read.pipe();

    // } (pas abouti)


}
cp()