const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const htmlTop = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>

<body>
    <header>
        <h1>
            Team Profile
        </h1>
    </header>
    <main>
    <ul id=card-area>`

const htmlBottom = `/ul>
</main>
</body>

</html>`

const cssTemplate = `h1 {
    background-color: blue;
    color: white;
    text-align: center;
    margin-bottom: 40px;
}

main {
    display: flex;
    justify-content: center;
}

#card-area{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.card{
    margin: 25px;
}

li {
    list-style-type: none;
}

a {
    font-size: 1.25rem;
}
`

const newEmployeeQs = [
    {
        type: `input`,
        message: `What's the employee's name?`,
        name: `name`,
    },
    {
        type: `input`,
        message: `What's the employee's ID?`,
        name: `id`,
    },
    {
        type: `input`,
        message: `What's the employee's email address?`,
        name: `email`,
    },
    {
        type: 'list',
        message: `What is the employee's role?`,
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
];



function genDetails(data){

    const cardTemplate = ` <li class="card" style="width: 18rem;">
<div class="card-body">
    <ul>
        <li><h5 class="card-title">${data.name} (ID: ${data.id})</h5></li>
        <li><h5 class="card-text">Role: ${data.role}</h5></li>
        <li><a href="${data.email}">Email</a></li>`
    
   
    fs.appendFile('./dist/team-profile.html', cardTemplate, (err) =>
    {if (err) {console.log(err)}});

    if (data.role === `Manager`){
        inquirer
        .prompt({
            type: `input`,
            message: `What's the manager's office number?`,
            name: `office`,
        })
        .then((detail) => {
            const nextTemp = `
            <li><h5>Office Number: ${detail.office}</li></h5>
            </ul>
            </div>
            </li>`
            
            fs.appendFile('./dist/team-profile.html', nextTemp, (err) =>
    {if (err) {console.log(err)}});
         }
        )}

    else if (data.role === `Engineer`){
        genEngineer(response);
    }
    else if (data.role === `Intern`){
        genIntern(response);
    }

    
}
const EngineerQ = {
    type: `input`,
    message: `What's the engineer's Github account?`,
    name: `github`,
};

const InternQ = {
    type: `input`,
    message: `What school does the intern go to?`,
    name: `school`,
};

const nextQ = {
    type: 'list',
    message: `Would you like to add another employee?`,
    name: 'next',
    choices: ['Yes', 'No'],
};

function init() {
    fs.writeFile(`./dist/team-profile.html`, htmlTop, (err) =>
        {if (err) {console.log(err)}} 
    );
    fs.writeFile(`./dist/style.css`, cssTemplate, (err) =>
        {if (err) {console.log(err)}} 
    );
    inquirer
        .prompt(newEmployeeQs)
        .then((response) => {
           genDetails(response);
        }
        )
    }

    init();