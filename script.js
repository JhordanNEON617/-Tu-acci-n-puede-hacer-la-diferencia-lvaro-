const fs = require('fs');

function createVirus() {
  fs.writeFile('virus.txt', 'Hello, I am a harmless virus!', (err) => {
    if (err) throw err;
    document.getElementById('statusMessage').innerHTML = 'Virus created successfully!';
  });
}

document.getElementById('createVirusButton').addEventListener('click', createVirus);