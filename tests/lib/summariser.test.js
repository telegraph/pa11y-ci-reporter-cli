'use strict';

const summarise = require('../../lib/summariser');

describe('summarise results ', () => {
    it('should return summary <0, 0, 0, success> for a report with no issues', () => {
        const raw = require('../fixtures/pa11y-ci-results-no-issues.json');
        const summary = summarise.report(raw);
        expect(summary).toEqual({
            error: 0,
            warning: 0,
            notice: 0,
            success: true
        });
    });

    it('should return summary <80, 0, 0, failure> for a report with 80 errors', () => {
        const raw = require('../fixtures/pa11y-ci-results-with-E.json');
        const summary = summarise.report(raw);
        expect(summary).toEqual({
            error: 80,
            warning: 0,
            notice: 0,
            success: false
        });
    });

    it('should return summary <0, 78, 0, success> for a report with 78 warnings', () => {
        const raw = require('../fixtures/pa11y-ci-results-with-W.json');
        const summary = summarise.report(raw);
        expect(summary).toEqual({
            error: 0,
            warning: 78,
            notice: 0,
            success: true
        });
    });

    it('should return summary <0, 0, 75, success> for a report with 75 notices', () => {
        const raw = require('../fixtures/pa11y-ci-results-with-N.json');
        const summary = summarise.report(raw);
        expect(summary).toEqual({
            error: 0,
            warning: 75,
            notice: 0,
            success: true
        });
    });

    it('should return summary <172, 391, 469, failure> for a report with some 172 errors, 391 warnings and 469 notices', () => {
        const raw = require('../fixtures/pa11y-ci-results-with-EWN.json');
        const summary = summarise.report(raw);
        expect(summary).toEqual({
            error: 172,
            warning: 391,
            notice: 469,
            success: false
        });
    });
});
