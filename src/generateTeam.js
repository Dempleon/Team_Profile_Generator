const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateManager = require('./generateManager')
const generateEngineer = require('./generateEngineer')
const generateIntern = require('./generateIntern')

function generateTeam(manager, team) {
    console.log('generating team');
    console.log(manager);
    console.log(team);
    var html = generateManager(manager);
    team.forEach(member => {
        if(member instanceof Engineer) {
            html += generateEngineer(member);
        }
        if(member instanceof Intern) {
            html += generateIntern(member);
        }
    });
    return html;
}

module.exports = generateTeam;