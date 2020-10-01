'use strict';

const toConsole = (summary) => {
    const log = summary.success ? console.log : console.error;

    log(`
====================================================

            Accessibility Report Summary

====================================================

                Error(s)   : ${summary.error}
                Warning(s) : ${summary.warning}
                Notice(s)  : ${summary.notice}

====================================================

            => ${summary.success ? 'SUCCESS' : 'FAILURE'}

====================================================
`);
};

module.exports.toConsole = toConsole;
