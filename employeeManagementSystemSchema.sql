DROP DATABASE IF EXISTS employeeManagementSystem_DB;
CREATE DATABASE employeeManagementSystem_DB;

USE employeeManagementSystem_DB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  dep_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  departmentId INT,
  title VARCHAR(100) NOT NULL,
  salary INT(10) NOT NULL
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  managerId INT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT
  PRIMARY KEY (id)
);

