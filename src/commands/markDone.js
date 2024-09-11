const { loadTasks, saveTasks } = require('../utils/fileHandler');

function markDone(id) {
    const tasks = loadTasks();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`Task with ID ${id} not found.`);
        return;
    }
    task.status = 'done';
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Task ${id} marked as done.`);
}

module.exports = {
    markDone
};
