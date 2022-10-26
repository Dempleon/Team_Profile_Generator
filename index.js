const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateTeam = require('./src/generateTeam')


console.log('Welcome to the team generator!');
// console.log("use 'npm run reset' to reset the dist/ folder");
const teamMembers = [];
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
    },

    {
        type: 'loop',
        name: 'teamMembers',
        message: 'Enter another team member?',
        questions: [
            {
                type: 'list',
                message: 'Which type of team member would you like to add?',
                name: 'role',
                choices: ['Engineer', 'Intern']
            },
            {
                when: (answer) => answer.role === 'Engineer',
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                when: (answer) => answer.role === 'Engineer',
                type: 'input',
                name: 'id',
                message: "What is the engineer's id?"
            },
            {
                when: (answer) => answer.role === 'Engineer',
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?"
            },
            {
                when: (answer) => answer.role === 'Engineer',
                type: 'input',
                name: 'github',
                message: "What is the engineer's github?"
            },
            {
                when: (answer) => answer.role === 'Intern',
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                when: (answer) => answer.role === 'Intern',
                type: 'input',
                name: 'id',
                message: "What is the intern's id?"
            },
            {
                when: (answer) => answer.role === 'Intern',
                type: 'input',
                name: 'email',
                message: "What is the intern's email?"
            },
            {
                when: (answer) => answer.role === 'Intern',
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            }
        ]
    }
]).then((answers) => {

    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

    const team = [];
    answers.teamMembers.forEach(member => {
        if(member.role === 'Engineer') {
            let engineer = new Engineer(member.name, member.id, member.email, member.github);
            team.push(engineer);
        }
        if(member.role === 'Intern') {
            let intern = new Intern(member.name, member.id, member.email, member.school)
            team.push(intern);
        }
    });
    // console.log(team);
    var managerHTML = generateTeam(manager, team);
    const pagehtml = generateHTML(managerHTML);
    fs.writeFile('./dist/index.html', pagehtml, (error) => {
        error? console.error(error) : console.log('success');
    })
})


const generateHTML = (obj) => 
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Info</title>
</head>

<body>
    <nav class="navbar">
        <h1>My Team</h1>
    </nav>
    <main class="" id="mainDiv">
        ${obj}
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../index.js"></script>
</body>

</html>
`