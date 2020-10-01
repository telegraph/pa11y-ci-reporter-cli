'use strict';

const read = require('../../lib/reader');

describe('read JSON file', () => {
    it('should read a valid JSON file and return the corresponding JS object', () => {
        const fileName = 'tests/fixtures/pa11y-ci-results-with-E.json';
        const output = read.jsonFromFile(fileName);
        expect(output).toEqual(expect.objectContaining({
            "total": 4,
            "passes": 1,
            "errors": 80,
            "results": expect.any(Object)
        }));
    });

    it('should throw error when passed an empty file name', () => {
        const fileName = '';
        expect(() => read.jsonFromFile(fileName)).toThrow(Error);
    });

    it('should throw error when passed an invalid file name', () => {
        const fileName = 'does-not-exist.json';
        expect(() => read.jsonFromFile(fileName)).toThrow(Error);
    });

    it('should throw error when passed a file name with invalid JSON', () => {
        const fileName = 'tests/fixtures/invalid-json.json';
        expect(() => read.jsonFromFile(fileName)).toThrow(Error);
    });
});
