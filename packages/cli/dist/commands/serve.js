"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveCommand = void 0;
var commander_1 = require("commander");
var local_api_1 = require("local-api");
exports.serveCommand = new commander_1.Command()
    .command('serve [fileName]')
    .description('Open a file for editing')
    .option('-p, --port <number>', 'port to run a server on', '4005')
    .action(function (fileName, options) {
    if (fileName === void 0) { fileName = 'notebook.js'; }
    (0, local_api_1.serve)(parseInt(options.port), fileName, '/');
});
