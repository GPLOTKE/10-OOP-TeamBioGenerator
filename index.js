const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

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
    <h3>${input.name} <span class="badge badge-secondary">${input.role}</span></h3>
    <ul class="list-group">
      <li class="list-group-item">ID: ${input.id}</li>
      <li class="list-group-item">Email: ${input.email}</li>
      <li class="list-group-item">GitHub: ${input.github}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    }, ])
    .then((input) => {
        const htmlPageContent = generateHTML(input);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created your Team Summary page!')
        );
    });