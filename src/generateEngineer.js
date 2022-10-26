const Engineer = require("../lib/Engineer");

function generateEngineer(engineer) {
    
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h3 class="card-title">${engineer.getName()}</h3>
    <h5>Role: ${engineer.getRole()}</h5>
    <p class="card-text">id: ${engineer.getId()}</p>
    <p class="card-text">
        Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
    </p>
    <p class="card-text">GitHub: ${engineer.getGitHub()}</p>
    </div>
    </div>
    `
}

module.exports = generateEngineer;