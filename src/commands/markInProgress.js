const { loadTasks, saveTasks } = require('../utils/fileHandler');

function markInProgress(id) {
    const tasks = loadTasks();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`Task with ID ${id} not found.`);
        return;
    }
    task.status = 'in-progress';
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Task ${id} marked as in-progress.`);
}

module.exports = {
    markInProgress
};
