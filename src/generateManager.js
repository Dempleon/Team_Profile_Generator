
const Engineer = require("../lib/Engineer");


function generateManager(manager) {
    console.log('generate manager')
    console.log(manager);

    return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h3 class="card-title">${manager.getName()}</h3>
    <h5>Role: ${manager.getRole()}</h5>
    <p class="card-text">id: ${manager.getId()}</p>
    <p class="card-text">
        Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
    </p>
    <p class="card-text">Office number: ${manager.getOffice()}</p>
    </div>
    </div>
    `
}


module.exports = generateManager;