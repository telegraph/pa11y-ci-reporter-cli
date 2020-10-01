'use strict';

const read = require('../lib/reader');
const summarise = require('../lib/summariser');
const validate = require('../lib/validator');
const write = require('../lib/writer');

const displayReportSummaryAndReturnExitCode = (sourceFileName) => {
    try {
        validate.fileName(sourceFileName, 'Invalid source file name');
        const pa11yReport = read.jsonFromFile(sourceFileName);
        validate.report(pa11yReport, 'Pa11y JSON report not supported');

        const summary = summarise.report(pa11yReport);
        write.toConsole(summary);

        const exitCode = summary.success ? 0 : 1;
        return exitCode;
    }
    catch (error) {
        console.error(error.message)
        return 1;
    }
};

module.exports = displayReportSummaryAndReturnExitCode;
