// const fs = require('fs');

// fs.writeFileSync('./abc.txt', 'Hello World');

// fs.writeFile('./abc.txt', 'Hello World sync', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File written successfully');
// });


// fs.readFile('./abc.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// const result=fs.readFileSync('./abc.txt', 'utf8');
// console.log(result);

// fs.appendFile('./abc.txt', 'Hello World', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File appended successfully');
// });

// fs.appendFileSync('./abc.txt', 'Hello World sync');


// fs.unlink('./abc.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File deleted successfully');
// });

const buffer=Buffer.from("NodeJs");
buffer.write("learning")
console.log(buffer.toString());
