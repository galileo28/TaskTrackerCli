#!/usr/bin/env node

const { addTask } = require('../src/commands/add');
const { listTasks } = require('../src/commands/list');
const { updateTask } = require('../src/commands/update');
const { deleteTask } = require('../src/commands/delete');
const { markDone } = require('../src/commands/markDone');
const { markInProgress } = require('../src/commands/markInProgress');

const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        addTask(args.join(' '));
        break;
    case 'list':
        listTasks(args[0]);
        break;
    case 'update':
        updateTask(parseInt(args[0], 10), args.slice(1).join(' '));
        break;
    case 'delete':
        deleteTask(parseInt(args[0], 10));
        break;
    case 'mark-done':
        markDone(parseInt(args[0], 10));
        break;
    case 'mark-in-progress':
        markInProgress(parseInt(args[0], 10));
        break;
    default:
        console.log('Unknown command. Available commands: add, list, update, delete, mark-done, mark-in-progress');
        break;
}
