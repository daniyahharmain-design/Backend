const fs = require('fs');
const path = require('path');

// const message = "This is my first file created with Node.js!"; step1 

// step 2 
// // const filePath = path.join(__dirname, 'my-message.txt');

// if (fs.existsSync(filePath)) {
//     const content = fs.readFileSync(filePath, 'utf8');

//     console.log("File content:");
//     console.log(content);
// } else {
//     console.log("File not found!");
// }  


// step 3 list of files 

// const files = fs.readdirSync('./'); to 
const files = fs.readdirSync(__dirname);

console.log("Files in current directory:");

files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
});



