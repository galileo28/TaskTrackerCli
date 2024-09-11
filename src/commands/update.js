const { updateTask } = require('../lib/taskManager');

function updateTaskCommand(id, newDescription) {
    updateTask(id, newDescription);
}

module.exports = {
    updateTask: updateTaskCommand
};
