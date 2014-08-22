# which-win-shell [![NPM Version](http://badge.fury.io/js/which-win-shell.svg)](http://badge.fury.io/js/which-win-shell) [![Build Status](https://secure.travis-ci.org/stevenvachon/which-win-shell.svg)](http://travis-ci.org/stevenvachon/which-win-shell) [![Build status](https://ci.appveyor.com/api/projects/status/7vd9m3sh0lytea8v)](https://ci.appveyor.com/project/stevenvachon/which-win-shell)

> Discern between different command-line shells on Windows

## Getting Started
[Node.js](http://nodejs.org/) `~0.10` is required. To install, type this at the command line:
```
npm install which-win-shell --save-dev
```

### Usage
```js
var whichWinShell = require("which-win-shell");

console.log( whichWinShell() );
```

### Note
This module relies on Node's `process.title` to discern which shell is being used. If you plan to modify the title for your application, it is recommended that you concatenate:
```js
process.title += " - my application";	// safe
```
instead of overwrite:
```js
process.title = "my application";	// will impede this module
```
If you make the above mistake, this library will *always* return a value of `""`.

Unfortunately, both [npm](http://npmjs.org) and [Grunt](http://gruntjs.com) are currently making this mistake ([grunt-cli#64](https://github.com/gruntjs/grunt-cli/issues/64),[npm#6021](https://github.com/npm/npm/issues/6021)) which will prevent you from using this module in tandem with theirs.
