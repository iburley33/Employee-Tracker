INSERT INTO department (department_name)
VALUES ("Service"),
       ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Finance");

INSERT INTO roles (title, salary, department_id)
VALUES ("Customer Service Manager", 50000, 1),
       ("Customer Service", 40000, 1),
       ("Sales Manager", 60000, 2),
       ("Salesperson", 55000, 2),
       ("Engineering Manager", 80000, 3),
       ("Software Engineer", 72000, 3),
       ("Legal Team Manager", 110000, 4),
       ("Lawyer", 90000, 4),
       ("Finance Manager", 70000, 5),
       ("Accountant", 62000, 5);

INSERT INTO employee_data (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, NULL),
       ("John", "Smith", 2, 1),
       ("Ian", "Burley", 3, NULL), 
       ("Aaron", "Rogers", 4, 3),
       ("Tim", "Brady", 5, NULL),
       ("Kylee", "Kraft", 6, 5),
       ("Scott", "Scottson", 7, NULL),
       ("Trevor", "Moore", 8, 7),
       ("Tom", "Thompson", 9, NULL),
       ("Amanda", "Bynes", 10, 9);