
const fs = require('fs');
const colours = require('colors');

const createFile = async( base = 1, list = false, until = 10) => {

    try {
        let out = '';
        let consoleOut = '';
        
        for(let i = 1; i <= until; i++ ){
            consoleOut += `   ${ base } ${ 'x'.yellow } ${ i } ${ '='.yellow } ${ base * i} \n`;
            out += `   ${ base } ${ 'x' } ${ i } ${ '=' } ${ base * i} \n`;
        }
        
        if( list ){
            console.log(colours.bgMagenta('================='));
            console.log(colours.bgMagenta(`== Tabla del ${ colours.yellow(base) } ==`));
            console.log(colours.bgMagenta('================='));
            console.log(consoleOut);    
        }
    
        // si ocurre un error hay que atraparlo con try-catch
        fs.writeFileSync( `./out/tabla-${ base }.txt`, out);
    
        return `tabla-${ base }.txt creado!`.green;
        
    } catch ( err ) {
        throw err;       
    }

}

module.exports = {
    createFile
}