'use strict';

const report = (report) => Object.keys(report.results).reduce((summary, key) => {
    report.results[key].forEach(issue => {
        summary[issue.type]++;
        summary.success = summary.success && issue.type !== 'error';
    });;
    return summary;
}, { error: 0, warning: 0, notice: 0, success: true });

module.exports.report = report;
