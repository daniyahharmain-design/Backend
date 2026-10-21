const fs = require('fs');

// 1. Write a note
fs.writeFileSync('notes.txt', 'Today I learned Node.js!');

//  2. Read the note
const content = fs.readFileSync('notes.txt', 'utf8');
console.log(content);

// 3.add a content in new line 
fs.appendFileSync('notes.txt', '\nTomorrow I will practice JavaScript.');



// 4.to check file is exist or not 
if (fs.existsSync('notes.txt')) {
    console.log('My notes file exists!');
}


