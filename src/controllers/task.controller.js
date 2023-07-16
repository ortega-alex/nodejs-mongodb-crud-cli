const { connection } = require('../db');
const Task = require('../models/Task');

const addTask = async task => {
    await Task.create(task);
    console.log('New Task Created');
    await connection.close();
};

const listTask = async () => {
    const tasks = await Task.find().lean();
    console.table(tasks.map(item => ({ _id: item._id.toString(), title: item.title, description: item.description })));
    await connection.close();
    process.exit(0); // una forma de decirle a node que todo termino
};

const removeTask = async _id => {
    await Task.findByIdAndDelete(_id);
    console.log('Task Deleted');
    await connection.close();
    process.exit(0);
};

const updateTask = async (_id, newTask) => {
    await Task.updateOne({ _id }, newTask);
    console.log('Task Updated');
    await connection.close();
    process.exit(0);
};

const findTask = async text => {
    const search = new RegExp(text, 'i');
    const tasks = await Task.find({
        $or: [{ title: search }, { description: search }]
    });

    if (tasks.length === 0) console.log('No tasks fount');
    else console.table({ _id: tasks[0]._id.toString(), title: tasks[0].title, description: tasks[0].description });

    await connection.close();
    process.exit(0);
};

module.exports = {
    addTask,
    listTask,
    removeTask,
    updateTask,
    findTask
};
