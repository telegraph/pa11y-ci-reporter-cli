'use strict';

const generateAndDisplaySummary = require('../../main');

describe('generate and display summary', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should log a summary from a valid JSON report with no issues', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-no-issues.json';
        generateAndDisplaySummary(fileName);

        expect(log).toHaveBeenCalled();
        expect(error).not.toHaveBeenCalled();
    });

    it('should exit with code 0 after displaying summary of a valid JSON report with no issues', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-no-issues.json';
        const exitCode = generateAndDisplaySummary(fileName);

        expect(exitCode).toBe(0);
    });

    it('should log a summary from a valid JSON report with some pa11y notices', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-with-N.json';
        generateAndDisplaySummary(fileName);

        expect(log).toHaveBeenCalled();
        expect(error).not.toHaveBeenCalled();
    });

    it('should exit with code 0 after displaying summary of a valid JSON report with some pa11y notices', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-with-N.json';
        const exitCode = generateAndDisplaySummary(fileName);

        expect(exitCode).toBe(0);
    });

    it('should log a summary from a valid JSON report with some pa11y warnings', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-with-W.json';
        generateAndDisplaySummary(fileName);

        expect(log).toHaveBeenCalled();
        expect(error).not.toHaveBeenCalled();
    });

    it('should exit with code 0 after displaying summary of a valid JSON report with some pa11y warnings', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-with-W.json';
        const exitCode = generateAndDisplaySummary(fileName);

        expect(exitCode).toBe(0);
    });

    it('should error a summary from a valid JSON report with some pa11y errors', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-with-E.json';
        generateAndDisplaySummary(fileName);

        expect(log).not.toHaveBeenCalled();
        expect(error).toHaveBeenCalled();
    });

    it('should exit with code 1 after displaying summary of a valid JSON report with some pa11y errors', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-with-E.json';
        const exitCode = generateAndDisplaySummary(fileName);

        expect(exitCode).toBe(1);
    });

    it('should error when provided with a non-existant file', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'not-on-disk-3141592.json';
        generateAndDisplaySummary(fileName);

        expect(log).not.toHaveBeenCalled();
        expect(error).toHaveBeenCalled();
    });

    it('should exit with code 1 when provided with a non-existant file', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'not-on-disk-3141592.json';
        const exitCode = generateAndDisplaySummary(fileName);

        expect(exitCode).toBe(1);
    });

    it('should error when provided with an empty file', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/empty-file.json';
        generateAndDisplaySummary(fileName);

        expect(log).not.toHaveBeenCalled();
        expect(error).toHaveBeenCalled();
    });

    it('should exit with code 1 when provided with an empty file', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/empty-file.json';
        const exitCode = generateAndDisplaySummary(fileName);

        expect(exitCode).toBe(1);
    });

    it('should error when provided with an invalid JSON file', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/invalid-json.json';
        generateAndDisplaySummary(fileName);

        expect(log).not.toHaveBeenCalled();
        expect(error).toHaveBeenCalled();
    });

    it('should exit with code 1 when provided with an invalid JSON file', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/invalid-json.json';
        const exitCode = generateAndDisplaySummary(fileName);

        expect(exitCode).toBe(1);
    });

    it('should error when provided with an invalid pa11y report', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-invalid-issue-1.json';
        generateAndDisplaySummary(fileName);

        expect(log).not.toHaveBeenCalled();
        expect(error).toHaveBeenCalled();
    });

    it('should exit with code 1 when provided with an invalid pa11y report', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const fileName = 'tests/fixtures/pa11y-ci-results-invalid-issue-1.json';
        const exitCode = generateAndDisplaySummary(fileName);

        expect(exitCode).toBe(1);
    });
});
