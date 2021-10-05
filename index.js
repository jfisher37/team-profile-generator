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

const htmlBottom = `
</ul>
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

const employees = [];

function askNext() {
    inquirer
        .prompt(nextQ)
        .then((response) => {
            if (response.next === `Yes`) {
                makeAnother();
            }
            else {
                finishHtml();
            }
        }
        )
};

function generateCards() {

    employees.forEach(item => {
        const cardTemplate = ` <li class="card" style="width: 18rem;">
        <div class="card-body">
            <ul>
                <li><h5 class="card-title">${item.getName()} (ID: ${item.getId()})</h5></li>
                <li><h5 class="card-text">Role: ${item.getRole()}</h5></li>
                <li><a href="mailto:${item.getEmail()}">Email</a></li>`;

        fs.appendFileSync('./dist/team-profile.html', cardTemplate);

        if (item.getRole() === `Manager`) {
            const nextTemp = `
             <li><h5>Office Number: ${item.getOffice()}</h5></li>
             </ul>
             </div>
             </li>`;

            fs.appendFileSync('./dist/team-profile.html', nextTemp);
        }
        else if (item.getRole() === `Engineer`) {
            const nextTemp = `
            <li><a href="https://github.com/${item.getGithub()}" target="blank_">${item.getGithub()}</a></li>
             </ul>
             </div>
             </li>`;

            fs.appendFileSync('./dist/team-profile.html', nextTemp);
        }
        else if (item.getRole() === `Intern`) {
            const nextTemp = `
            <li><h5>School: ${item.getSchool()}</h5></li>
             </ul>
             </div>
             </li>`;

            fs.appendFileSync('./dist/team-profile.html', nextTemp);
        }
    });
}

function addBottom(){
    fs.appendFileSync('./dist/team-profile.html', htmlBottom);
    return console.log(`Webpage created!`);
};

function finishHtml() {
    generateCards();
    addBottom();
};

function makeAnother() {
    let newEmployee = {};
    inquirer
        .prompt(newEmployeeQs)
        .then((response) => {
            newEmployee = new Employee(response.name, response.id, response.email);
            if (response.role === `Manager`) {
                inquirer
                    .prompt({
                        type: `input`,
                        message: `What's the manager's office number?`,
                        name: `office`,
                    })
                    .then((detail) => {
                        const newManager = new Manager(newEmployee.name, newEmployee.id, newEmployee.email, detail.office)
                        employees.push(newManager)
                        askNext();
                    })
            }
            else if (response.role === `Engineer`) {
                inquirer
                    .prompt({
                        type: `input`,
                        message: `What's the engineer's Github account?`,
                        name: `github`,
                    })
                    .then((detail) => {
                        const newEngineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, detail.github)
                        employees.push(newEngineer)
                        askNext();
                    })
            }
            else if (response.role === `Intern`) {
                inquirer
                    .prompt({
                        type: `input`,
                        message: `What school does the intern go to?`,
                        name: `school`,
                    })
                    .then((detail) => {
                        const newIntern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, detail.school)
                        employees.push(newIntern)
                        askNext();
                    })
            }
        })
};

const nextQ = {
    type: 'list',
    message: `Would you like to add another employee?`,
    name: 'next',
    choices: ['Yes', 'No'],
};

function init() {
    fs.writeFile(`./dist/team-profile.html`, htmlTop, (err) => { if (err) { console.log(err) } }
    );
    fs.writeFile(`./dist/style.css`, cssTemplate, (err) => { if (err) { console.log(err) } }
    );

    makeAnother();

}

init();