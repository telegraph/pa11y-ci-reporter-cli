'use strict';

const write = require('../../lib/writer');

describe('write to console', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should call console.log when the summary passed in has its success flag set to true', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const summary = { success: true };
        write.toConsole(summary);

        expect(log).toHaveBeenCalled();
    });

    it('should not call console.error when the summary passed in has its success flag set to true', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const summary = { success: true };
        write.toConsole(summary);

        expect(error).not.toHaveBeenCalled();
    });

    it('should call console.error when the summary passed in has its success flag set to false', () => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});

        const summary = { success: false };
        write.toConsole(summary);

        expect(error).toHaveBeenCalled();
    });

    it('should not call console.log when the summary passed in has its success flag set to false', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const summary = { success: false };
        write.toConsole(summary);

        expect(log).not.toHaveBeenCalled();
    });
});
