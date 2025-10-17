const fs = require('fs');

fs.readFile('./user.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    console.log('File content:', data);
});
