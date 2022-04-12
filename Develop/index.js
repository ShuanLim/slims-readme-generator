// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
   {
    type: 'input',
    name: 'title',
    message: 'Please input your project name.'
   },
   {
    type: 'input',
    name: 'description',
    message: 'Please input a summary of your projects description.'
   },   
   {
    type: 'input',
    name: 'installation',
    message: 'Please input an installation method.'
   },
   {
    type: 'list',
    name: 'license',
    message: 'Does your project have any licenses?',
    choices: 
    [
    'GPL V3', 
    'MIT',
    'APACHE LICENSE V2',
    'None'
    ]
   },
   {
    type: 'input',
    name: 'github',
    message: 'Please input your GitHub Username.'
   },
   {
    type: 'input',
    name: 'email',
    message: 'Please input your email address.'
   },
   {
    type: 'input',
    name: 'contribution',
    message: 'Please input contributors.'
   },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('README.md generation successful.\n' +
    'Please check the newReadme/ directory!');

    return fs.writeFileSync(fileName, data);
    };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(userInput){
        console.log(userInput);
        writeToFile('./newReadme/README.md', generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
