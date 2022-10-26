const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateManager = require('./src/generateManager')
const generateEngineer = require('./src/generateEngineer')
const generateIntern = require('./src/generateIntern')


console.log('Welcome to the team generator!');
// console.log("use 'npm run reset' to reset the dist/ folder");

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?"
    }
]).then((answers) => {
    // console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    console.log(manager.getName());
    console.log(manager.getId());
    console.log(manager.getEmail());
    console.log(manager.getRole());
    console.log(manager.officeNumber)
    // var managerHTML = generateManager(JSON.stringify(answers));
    // console.log(managerHTML);
})

function engineerPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github?"
        }
    ]).then((answers) => {
        console.log(answers)
        var engineerHTML = generateEngineer(JSON.stringify(answers));
        console.log(engineerHTML);
    })
}

function internPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the intern's school?"
        }
    ]).then((answers) => {
        console.log(answers)
        var engineerHTML = generateEngineer(JSON.stringify(answers));
        console.log(engineerHTML);
    })
}