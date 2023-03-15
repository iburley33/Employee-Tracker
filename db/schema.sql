DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;


CREATE TABLE departments (
  department_id INT,
  department_name VARCHAR(30),
  PRIMARY KEY (department_name)
);

CREATE TABLE employee_data (
  id INT,
  first_name VARCHAR(30) NOT NULL,
  last_name INT,
  job_title VARCHAR(30) NOT NULL,
  department_name VARCHAR(30),
  salary INT,
  manager VARCHAR(30) NOT NULL,
  FOREIGN KEY (department_name)
  REFERENCES departments(department_name)
  ON DELETE SET NULL
);

CREATE TABLE roles (
    job_title VARCHAR(30),
    role_id INT,
    department_name VARCHAR(30),
    salary INT,
    FOREIGN KEY (department_name)
    REFERENCES departments(department_name)

)