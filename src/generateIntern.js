const Intern = require("../lib/Intern");

function generateIntern(intern) {
    
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h3 class="card-title">${intern.getName()}</h3>
    <h5>Role: ${intern.getRole()}</h5>
    <p class="card-text">id: ${intern.getId()}</p>
    <p class="card-text">
        Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
    </p>
    <p class="card-text">school: ${intern.getSchool()}</p>
    </div>
    </div>
    `
}

module.exports = generateIntern;