import  { Command } from 'commander';
import { serve } from 'local-api';
export const serveCommand = new Command()
    .command('serve [fileName]')
    .description('Open a file for editing')
    .option('-p, --port <number>', 'port to run a server on', '4005')
    .action((fileName = 'notebook.js', options: {port: string}) => {
        serve(parseInt(options.port), fileName, '/')
    })
