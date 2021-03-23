const fs = require('fs');

const readFile = () => {
    return JSON.parse(fs.readFileSync('partners.json', 'utf8'));
}

module.exports.readFile = readFile;
