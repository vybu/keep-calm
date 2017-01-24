const fs = require('fs-extra');
const path = require('path');

fs.copy(path.resolve(__dirname, '../', 'public'), path.resolve(__dirname, '../', 'dist'), function (err) {
    if (err) return console.error(err);
    console.log('successfully copied public files!');
});
