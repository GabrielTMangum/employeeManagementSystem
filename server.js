const mysql = require("mysql");
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "rootroot",
    database: "employeeManagementSystem_DB"
});

connection.connect(function (err) {
    if (err) throw err;

    initialize();
});

const addDept = () => {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title of this new department?"
            }
        ])
        .then(answer => {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    dep_name: answer.title,
                },
                err => {
                    if (err) throw err;
                    console.log("Your new department was created successfully!");
                    initialize();
                }
            );
        })
}

const addRole = () => {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title of this new role?"
            },
            {
                name: "salary",
                type: "input",
                message: "How much will this role make?"
            }
        ])
        .then(answer => {
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.title,
                    slary: answer.salary
                },
                err => {
                    if (err) throw err;
                    console.log("Your new role was created successfully!");
                    initialize();
                }
            );
        })
}

const initialize = () => {
    inquirer.prompt({
        name: "startQuestion",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add Department", "Add Role", "Add Employee", "View Departments", "View Roles", "View Employees", "Update Employee Roles"]
    }).then(function (answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.startQuestion === "Add Department") {
            console.log(`You Selected ${answer.startQuestion}`)
            addDept()
        }
        else if (answer.startQuestion === "Add Role") {
            console.log(`You Selected ${answer.startQuestion}`)
            addRole()
        }
        else if (answer.startQuestion === "Add Employee") {
            console.log(`You Selected ${answer.startQuestion}`)
        }
        else if (answer.startQuestion === "View Departments") {
            console.log(`You Selected ${answer.startQuestion}`)
        }
        else if (answer.startQuestion === "View Roles") {
            console.log(`You Selected ${answer.startQuestion}`)
        }
        else if (answer.startQuestion === "View Employees") {
            console.log(`You Selected ${answer.startQuestion}`)
        }
        else if (answer.startQuestion === "Update Employee Roles") {
            console.log(`You Selected ${answer.startQuestion}`)
        }
        else {
            connection.end()
        }
    });
};