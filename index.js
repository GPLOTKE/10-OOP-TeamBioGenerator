const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = (input) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
    <h3>${input.Name} <span class="badge badge-secondary">${input.Role}</span></h3>
    <ul class="list-group">
      <li class="list-group-item">ID: ${input.ID}</li>
      <li class="list-group-item">Email: ${input.Email}</li>
      <li class="list-group-item">GitHub: ${input.GitHub}</li>
      <li class="list-group-item">GitHub: ${input.OfficeNumber}</li>
      <li class="list-group-item">GitHub: ${input.School}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
    .prompt([{
            type: 'input',
            name: 'Name',
            message: 'Enter Name:',
        },
        {
            type: 'list',
            name: 'Role',
            message: 'Enter Role:',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ],
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Enter ID:',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter Email Address:',
        },
        {
            type: 'input',
            name: 'OfficeNumber',
            message: 'Enter Office Number:',
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter GitHub Username:',
        },
        {
            type: 'input',
            name: 'School',
            message: 'Enter School Name:',
        },
        {
            type: 'list',
            name: 'NewMember',
            message: 'Enter Role:',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ],
        },
    ])
    .then((input) => {
        const htmlPageContent = generateHTML(input);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created your Team Summary page!')
        );
    });