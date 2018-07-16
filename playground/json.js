const fs = require('fs');

const objectJson = {
    title: 'the name',
    body: 25
};

var objectJsonStringify = JSON.stringify(objectJson);
fs.writeFileSync('test.json', objectJsonStringify);

var objectFromFile = fs.readFileSync('test.json');
var theRealObject = JSON.parse(objectFromFile);

console.log(theRealObject);
console.log(theRealObject.title);