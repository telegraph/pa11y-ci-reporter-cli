# Pa11y CI CLI Reporter

Pa11y CI CLI Reporter displays in the console the summary of [`Pa11y CI`](https://www.npmjs.com/package/pa11y-ci) JSON output.

## Motivation

By default, [`Pa11y CI`](https://www.npmjs.com/package/pa11y-ci) outputs its results to the console, but there are situations where more than one report (JSON, HTML, CLI) are desired.

Desired output 	| Tools
---	|---
CLI 	| [`Pa11y CI`](https://www.npmjs.com/package/pa11y-ci) (default)
JSON 	| [`Pa11y CI`](https://www.npmjs.com/package/pa11y-ci) (JSON)
HTML 	| [`Pa11y CI`](https://www.npmjs.com/package/pa11y-ci) (JSON) -> [`Pa11y CI HTML Reporter`](https://gitlab.com/gitlab-ci-utils/pa11y-ci-reporter-html/)
CLI + HTML 	| [`Pa11y CI`](https://www.npmjs.com/package/pa11y-ci) (JSON) -> [`Pa11y CI HTML Reporter`](https://gitlab.com/gitlab-ci-utils/pa11y-ci-reporter-html/) -> `Pa11y CI CLI Reporter`


## Usage

`Pa11y CI CLI Reporter` is intended to be run as a command line tool. It takes as input the JSON output from [`Pa11y CI`](https://www.npmjs.com/package/pa11y-ci). If no options are specified, it looks for a file named `pa11y-ci-results.json` in the current directory.

```
Usage: pa11y-ci-reporter-cli [options]

Options:
  -V, --version                  output the version number
  -s, --source <file>            the path to the pa11y-ci JSON input file (default: "./pa11y-ci-results.json")
  -h, --help                     output usage information
```
