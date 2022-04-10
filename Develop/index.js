// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require('.utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
   {
    type: 'input',
    name: 'project title',
    message: 'Please input your project name.'
   },
   {
    type: 'input',
    name: 'description',
    message: 'Please input a summary of your projects description.'
   },   
   {
    type: 'input',
    name: 'user story',
    message: 'Please input your user story.'
   },
   {
    type: 'input',
    name: 'acceptance criteria',
    message: 'Please input the projects acceptance criteria.'
   },
   {
    type: 'input',
    name: 'installation',
    message: 'Please input an installation method.'
   },
   {
    type: 'input',
    name: 'usage',
    message: 'What will your project be used for?'
   },
   {
    type: 'input',
    name: 'license',
    message: 'Does your project have any licenses?'
    choices: 
    [
    'GPL V3', 
    'MIT',
    'APACHE LICENSE V2',
    'ARTISTIC LICENSE 2.0',
    'CLARIFIED ARTISTIC LICENSE',
    'MPL-2.0', 
    'EPL-2.0',
    'EUPL-1.2',
    'MulanPSL-2.0',
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

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
