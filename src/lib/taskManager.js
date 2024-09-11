const { loadTasks, saveTasks } = require('../utils/fileHandler');

function generateId(tasks) {
    if (tasks.length === 0) return 1;
    return Math.max(...tasks.map(task => task.id)) + 1;
}

function addTask(description) {
    const tasks = loadTasks();
    const newTask = {
        id: generateId(tasks),
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
}

function updateTask(id, newDescription) {
    const tasks = loadTasks();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`Task with ID ${id} not found.`);
        return;
    }
    task.description = newDescription;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Task ${id} updated successfully.`);
}

function deleteTask(id) {
    let tasks = loadTasks();
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    if (tasks.length === initialLength) {
        console.log(`Task with ID ${id} not found.`);
        return;
    }
    saveTasks(tasks);
    console.log(`Task ${id} deleted successfully.`);
}

module.exports = {
    addTask,
    updateTask,
    deleteTask
};
