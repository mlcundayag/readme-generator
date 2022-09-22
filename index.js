// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const outputSuccessText = (text) => console.log(`\x1b[32m${text}\x1b[0m`);


// TODO: Create an array of questions for user input
const questions = () => {
 return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            name: 'stack',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        },
        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            name: 'contact',
            choices: ['email', 'phone', 'telekinesis'],
        },
    ])
    .then(input => {
        return input;
    })
};    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        outputSuccessText('Success - Your README has been created!')
    })
}


// TODO: Create a function to initialize app
function init() {
    questions()
        .then(input => {
            return generateMarkdown(input);
        })
        .then(input => {
            writeToFile((`./files/README.md`), input)
        })
        .catch(err => {
            console.log(err);
        })
}

// // Function call to initialize app
init();