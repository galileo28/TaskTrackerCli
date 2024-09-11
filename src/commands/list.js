const { loadTasks } = require('../utils/fileHandler');

function listTasks(status) {
    const tasks = loadTasks();
    const filteredTasks = status ? tasks.filter(task => task.status === status) : tasks;
    filteredTasks.forEach(task => {
        console.log(`[${task.id}] ${task.description} - ${task.status} (Created: ${task.createdAt})`);
    });
}

module.exports = {
    listTasks
};
