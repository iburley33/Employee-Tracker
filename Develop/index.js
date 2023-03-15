const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'M0destMouse!',
      database: 'books_db'
    },
    console.log(`Connected to the books_db database.`)
  );

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: ['View All Employees', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        },

     ])
     .then((answers) => {
        if(answers.action === 'View All Employees') {

        }
     });