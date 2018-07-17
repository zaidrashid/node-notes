console.log('Starting app.')

const notes = require('./notes.js');
const fs = require('fs');
const _ =  require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;
const command = argv._[0];

switch(command.toLowerCase()) {
    case 'addnote':
        notes.addNote(argv.title, argv.body);
        break;
    case 'getall':
        notes.getAll();
        break;
    case 'getnote':
        notes.getNote(argv.title);
        break;
    case 'removenote':
        notes.removeNote(argv.title);
        break;
}
