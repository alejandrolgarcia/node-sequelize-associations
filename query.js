const { User } = require('./models/user');
const { Task } = require('./models/task');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const findAllWithTasks = async () => {

    const users = await User.findAll({
        include: [{
            model: Task
        }]
    });

    console.log('All users with their associated tasks: ', JSON.stringify( users, null, 4 ));

}

const run = async () => {
    await findAllWithTasks();
    await process.exit();
}

run();