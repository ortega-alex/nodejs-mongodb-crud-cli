const { program } = require('commander');
const { prompt } = require('inquirer'); // nos permite estilizar la entrada de terminal
const { addTask, listTask, removeTask, updateTask, findTask } = require('./controllers/task.controller');

program.version('0.0.1').description('A command line tool for managing tasks');

// program.command('save') // definier un comando por teminal
// program.command('save <title> <description>')// define parametros
const taskQuestions = [
    {
        type: 'input',
        message: 'Task title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Task description',
        name: 'description'
    }
];

program
    .command('save')
    .alias('s')
    .action(async () => {
        const answers = await prompt(taskQuestions);
        addTask(answers);
    });

program
    .command('list')
    .alias('l')
    .action(() => listTask());

program
    .command('delete <id>')
    .alias('d')
    .action(_id => removeTask(_id));

program
    .command('update <id>')
    .alias('u')
    .action(async _id => {
        const answers = await prompt(taskQuestions);
        updateTask(_id, answers);
    });

program
    .command('find <searh>')
    .alias('f')
    .action(text => findTask(text));

program.parse(process.argv);
