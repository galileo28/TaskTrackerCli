const { deleteTask } = require('../lib/taskManager');

function deleteTaskCommand(id) {
    deleteTask(id);
}

module.exports = {
    deleteTask: deleteTaskCommand
};
