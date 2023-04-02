const inquirer = require('inquirer');
const mysql = require('mysql2');
const { exit } = require('process');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'M0destMouse!',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );


const createRoles = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the new title you would like to add?',
          name: 'title',
        },
        {
          type: 'input',
          message: 'What is the salary of this role?',
          name: 'salary',
        },
        {
          type: 'input',
          message: 'What is the department id of the department this role belongs to?',
          name: 'department',
        },
      ])
      .then((answers) => {
      const title = answers.title;
      const salary = answers.salary;
      const department = answers.department;

      const sql = `INSERT INTO roles (title, salary, department_id) VALUES ('${title}', ${salary}, ${department})`;
  
      db.query(sql, (err, result) => {
        console.log(result);
        console.log(err);
        console.log(`Added ${title} to the database`);
        beginPrompt()
      }); 
    })
};

const viewRoles = () => {
  db.query('SELECT * FROM roles', function (err, results) {
    console.table(results);
    beginPrompt()
  });
};

const createEmployees = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the first name of the employee?',
          name: 'fname',
        },
        {
          type: 'input',
          message: 'What is the last name of the employee?',
          name: 'lname',
        },
        {
          type: 'input',
          message: 'What is the role id of the employee?',
          name: 'roleid',
        },
        {
          type: 'input',
          message: 'What is the employee id of the manager of the new employee?',
          name: 'managerid',
        },

      ])
      .then((answers) => {
      const first_name = answers.fname;
      const last_name = answers.lname;
      const role_id = answers.roleid;
      const manager_id = answers.managerid;

      const sql = `INSERT INTO employee_data (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id})`;
  
      db.query(sql, (err, result) => {
        console.log(result);
        console.log(err);
        console.log(`Added ${first_name} to the database`);
        beginPrompt()
      }); 
    })
};

const viewEmployees = async () => {
  db.query('SELECT * FROM employee_data', function (err, results) {
    console.table(results);
    beginPrompt()
  })
};

const createDept = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'department',
    },
    ])
    .then((answers) => {
    const params = answers.department;
    const sql = `INSERT INTO department (department_name) VALUES ('${params}')`;

    db.query(sql, (err, result) => {
      console.log(result);
      console.log(err);
      console.log(`Added ${params} to the database`);
      beginPrompt()
    }); 
  })
}

const viewDept = () => {
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
    beginPrompt()
  });
};

const updateRole = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the employee ID of the employee whose role will be changed.',
      name: 'employee',
    },
    {
      type: 'input',
      message: 'Please enter the role ID of the employees new role.',
      name: 'newRole',
    },
    
  ])
  .then((answers) => {
  const emp = answers.employee;
  const newRole = answers.newRole;

  const sql = `UPDATE employee_data SET role_id = ? WHERE id = ?`
  const params = [newRole, emp]
  db.query(sql, params, (err, result) => {
      if (err) {
          console.error(err)
      } else {
          beginPrompt();
      }
  }); 
})

}

const beginPrompt = () => {
    inquirer
      .prompt([
          {
              type: 'list',
              message: 'What would you like to do?',
              name: 'action',
              choices: ['View All Employees', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Exit'],
          },

        ])
        .then((answers) => {
          if(answers.action === 'View All Employees') {
            viewEmployees()
          } if(answers.action === 'View All Roles') {
            viewRoles()
          } if(answers.action === 'View All Departments') {
            viewDept()
          } if(answers.action === 'Add Department') {
            createDept()
          } if(answers.action === 'Add Employees') {
            createEmployees()
          } if(answers.action === 'Add Role') {
            createRoles()
          } if(answers.action === 'Update Employee Role'){
            updateRole()
          } if(answers.action === 'Exit') {
            return exit
          };
        });
    };

    beginPrompt();