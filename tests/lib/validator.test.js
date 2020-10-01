'use strict';

const validate = require('../../lib/validator');

describe('validate', () => {
    describe('file name', () => {
        it('should not throw if value is a valid string', () => {
            const value = 'foo';
            const message = 'not a string';
            expect(() => validate.fileName(value, message)).not.toThrow();
        });

        it('should throw if value is a number', () => {
            const value = 12345;
            const message = 'not a string';
            expect(() => validate.fileName(value, message)).toThrow(new TypeError(message));
        });

        it('should throw if value is a boolean', () => {
            const value = true;
            const message = 'not a string';
            expect(() => validate.fileName(value, message)).toThrow(new TypeError(message));
        });

        it('should throw if value is an object', () => {
            const value = { foo: 'bar' };
            const message = 'not a string';
            expect(() => validate.fileName(value, message)).toThrow(new TypeError(message));
        });

        it('should throw if value is an array', () => {
            const value = ['12345'];
            const message = 'not a string';
            expect(() => validate.fileName(value, message)).toThrow(new TypeError(message));
        });

        it('should throw if value is undefined', () => {
            const value = undefined;
            const message = 'not a string';
            expect(() => validate.fileName(value, message)).toThrow(new TypeError(message));
        });

        it('should throw if value is null', () => {
            const value = null;
            const message = 'not a string';
            expect(() => validate.fileName(value, message)).toThrow(new TypeError(message));
        });
    });

    describe('report', () => {
        it('should not throw if object is a valid report (simple)', () => {
            const value = {
                total: 0,
                passes: 0,
                errors: 0,
                results: {}
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).not.toThrow();
        });

        it('should not throw if object is a valid report (complex)', () => {
            const value = require('../fixtures/pa11y-ci-results-with-EWN.json');
            const message = 'invalid report';
            expect(() => validate.report(value, message)).not.toThrow();
        });

        it('should throw if object does not have total property', () => {
            const value = {
                passes: 0,
                errors: 0,
                results: {}
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if total property is not a number', () => {
            const value = {
                total: '0',
                passes: 0,
                errors: 0,
                results: {}
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if object does not have passes property', () => {
            const value = {
                total: 0,
                errors: 0,
                results: {}
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if passes property is not a number', () => {
            const value = {
                total: 0,
                passes: '0',
                errors: 0,
                results: {}
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if object does not have errors property', () => {
            const value = {
                total: 0,
                passes: 0,
                results: {}
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if errors property is not a number', () => {
            const value = {
                total: 0,
                passes: 0,
                errors: '0',
                results: {}
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if object does not have results property', () => {
            const value = {
                total: 0,
                passes: 0,
                errors: 0
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if results property is not an object', () => {
            const value = {
                total: '0',
                passes: 0,
                errors: 0,
                results: '{}'
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should not throw if results object has array as values', () => {
            const value = {
                total: 0,
                passes: 0,
                errors: 0,
                results: { key1: [], key2: [], key3: [] }
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).not.toThrow();
        });

        it('should throw if results object has a value that is not an arrray', () => {
            const value = {
                total: 0,
                passes: 0,
                errors: 0,
                results: { key1: [], key2: 'foo', key3: [] }
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should not throw if results object has array of valid issues as values', () => {
            const issue = {
                type: 'error',
                typeCode: 1,
                message: 'something went wrong'
            };

            const value = {
                total: 0,
                passes: 0,
                errors: 0,
                results: { key: [ issue ] }
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).not.toThrow();
        });

        it('should throw if some issue does not have a type property', () => {
            const issue = {
                typeCode: 1,
                message: 'something went wrong'
            };

            const value = {
                total: 0,
                passes: 0,
                errors: 0,
                results: { key: [ issue ] }
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if some issue does not have a typeCode property', () => {
            const issue = {
                type: 'error',
                message: 'something went wrong'
            };

            const value = {
                total: 0,
                passes: 0,
                errors: 0,
                results: { key: [ issue ] }
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if some issue does not have a message property', () => {
            const issue = {
                type: 'error',
                typeCode: 1
            };

            const value = {
                total: 0,
                passes: 0,
                errors: 0,
                results: { key: [ issue ] }
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if some issue has a type property that does not match the typeCode property', () => {
            const issue = {
                type: 'error',
                typeCode: 2,
                message: 'something went wrong'
            };

            const value = {
                total: 0,
                passes: 0,
                errors: 0,
                results: { key: [ issue ] }
            };
            const message = 'invalid report';
            expect(() => validate.report(value, message)).toThrow(new Error(message));
        });

        it('should throw if object is not a valid report (complex)', () => {
            const value1 = require('../fixtures/pa11y-ci-results-invalid-issue-1.json');
            const value2 = require('../fixtures/pa11y-ci-results-invalid-issue-2.json');
            const message = 'invalid report';
            expect(() => validate.report(value1, message)).toThrow(new Error(message));
            expect(() => validate.report(value2, message)).toThrow(new Error(message));
        });
    })
});
