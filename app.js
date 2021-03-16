
const { createFile } = require('./helpers/mult');
const argv = require('./config/yargs');


console.clear();


// const [ , , arg3 = 'base=1' ] = process.argv;
// const [ , base ] = arg3.split('=');

// console.log( base );


// console.log( process.argv );
// console.log( argv );

// console.log('base: yargs', argv.base);
// console.log('list: yargs', argv.l );

createFile( argv.b, argv.l, argv.u )
    .then( msg => console.log(msg) )
    .catch( err => console.log(err) );

