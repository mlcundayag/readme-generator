// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const outputSuccessText = (text) => console.log(`\x1b[32m${text}\x1b[0m`);
const outputErrorText = (text) => console.log(`\x1b[31m${text}\x1b[0m`);


// TODO: Create an array of questions for user input
const questions = () => {
 return inquirer
    .prompt([
        //Title
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: function(name) {
                if (name) {
                    return true;
                } else {
                    outputErrorText('You must enter your project title!')
                    return false;
                }
            }    
        },
        //gitHub Username
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please provide your github username: (Required)',
            validate: function(name) {
                if (name) {
                    return true;
                } else {
                    outputErrorText('You must enter your github username')
                    return false;
                }
            }    
        },
        //repository name
        {
            type: 'input',
            name: 'repoName',
            message: 'Please provide your repository(repo) name for this project: (Required)',
            validate: function(name) {
                if (name) {
                    return true;
                } else {
                    outputErrorText('You must enter your repo name')
                    return false;
                }
            }    
        },
        //description
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your project:',
        },   
        //Tools 
        {
            type: 'checkbox',
            message: 'What tools did you use for this project?',
            name: 'tools',
            choices: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        },
        //License
        {
            type: 'list',
            message: 'What is the license of your project',
            name: 'license',
            choices: ['MIT', 'ISC', 'GNU LPL', 'Unlicense', 'none'],
            default: 'MIT'
        },
        //Usage information
        {
            type: 'input',
            name: 'usage',
            message: 'What are the usage information'
        }, 
        {
            type: 'input',
            name: 'install',
            message: 'Please state the installation instructions:'
        }, 
        //Acknowledgements
        {
            type: 'input',
            name: 'acknowledgement',
            message: 'Please list all your collaborators and references that you wish to acknowledge'
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