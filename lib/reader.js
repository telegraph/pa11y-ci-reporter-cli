'use strict';

const fs = require('fs');

const jsonFromFile = (fileName) => {
    let jsonResults;

    try {
        jsonResults = fs.readFileSync(fileName, 'utf-8');
    }
    catch (error) {
        throw new Error(`Error opening file ${fileName} - ${error.message}`);
    }

    try {
        return JSON.parse(jsonResults);
    }
    catch (error) {
        throw new Error(`Error parsing JSON from file ${fileName} - ${error.message}`);
    }
};

module.exports.jsonFromFile = jsonFromFile;
