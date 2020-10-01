'use strict';

const fileName = (value, message) => {
    if (typeof value !== 'string') {
        throw new TypeError(message);
    }
};

const report = (report, message) => {
    const isValidIssue = (issue) => {
        const issueChecks = [
            () => typeof issue === 'object' && issue !== null,
            () => typeof issue.type === 'string',
            () => ['error', 'warning', 'notice'].includes(issue.type),
            () => typeof issue.typeCode === 'number',
            () => ['error', 'warning', 'notice'].indexOf(issue.type) + 1 === issue.typeCode,
            () => typeof issue.message === 'string'
        ];

        return issueChecks.every(check => check());
    };

    const isValidPageResult = (result) => {
        const pageResultChecks = [
            () => Array.isArray(result),
            () => result.every(isValidIssue)
        ];

        return pageResultChecks.every(check => check());
    };

    const reportChecks = [
        () => typeof report.total === 'number',
        () => typeof report.passes === 'number',
        () => typeof report.errors === 'number',
        () => typeof report.results === 'object' && report.results !== null,
        () => Object.values(report.results).every(isValidPageResult),
    ];

    if (!reportChecks.every(check => check())) {
        throw new Error(message);
    }
}

module.exports.fileName = fileName;
module.exports.report = report;
