
const argv = require('yargs')
    .options({
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base for multiplication'
    },
    'l': {
        alias: 'list',
        type: 'boolean',
        describe: 'Show the result on screen',
        default: false
    },
    'u':{
        alias: 'until',
        type: 'number',
        demandOption: true,
        describe: 'Multiplicate the base until reach this limit'
    }
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base debe ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;