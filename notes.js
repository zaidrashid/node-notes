console.log('Starting notes.js');
const filePath = './notes.json';
const fs = require('fs');
const _ = require('lodash');

function getNotesFromFile_() {
    let notes = [];
    try {
        notes = fs.readFileSync(filePath);
    } catch(error) {
        console.log(`No such file exist: ${error}`);
    }

    return _.isEmpty(notes) ? notes : JSON.parse(notes);
}

function writeNoteToFile_(object) {
    fs.writeFileSync(filePath, JSON.stringify(object));
}

var addNote = (title, body) => {
    console.log(`Adding note of ${title}, ${body}`);
    let notes = getNotesFromFile_();
    let duplicateIndex = _.findIndex(notes, element => element.title === title);
    if (duplicateIndex > -1) {
        console.log('Duplicate notes found');
        return;
    }
    notes.push({title, body});
    writeNoteToFile_(notes);
};

var getAll = () => {
    console.log(`Getting all notes`);
    console.log(getNotesFromFile_());
};

var getNote = (title) => {
    console.log(`Reading ${title}`);
};

var removeNote = (title) => {
    console.log(`Deleting ${title}`);
    let notes = getNotesFromFile_();
    _.remove(notes, element => element.title === title);
    console.log(notes);
    writeNoteToFile_(notes);
};

module.exports = {
    addNote, getAll, getNote, removeNote
};