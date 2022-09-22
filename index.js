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
            message: `\x1b[35mWhat is the title of your project? \x1b[33m(Required)\x1b[0m`,
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
            message: `\x1b[35mPlease provide your github username: \x1b[33m(Required)\x1b[0m`,
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
            message: `\x1b[35mPlease provide your repository(repo) name for this project: \x1b[33m(Required)\x1b[0m`,
            validate: function(name) {
                if (name) {
                    return true;
                } else {
                    outputErrorText('You must enter your repo name')
                    return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'email',
            message: `\x1b[35mWhat is your email address?\x1b[0m`
        },
        //description
        {
            type: 'input',
            name: 'description',
            message: `\x1b[35mPlease provide a brief description of your project:\x1b[0m`,
        },   
        //Tools 
        {
            type: 'checkbox',
            message: `\x1b[35mWhat tools did you use for this project?\x1b[0m`,
            name: 'tools',
            choices: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        },
        //License
        {
            type: 'list',
            message: `\x1b[35mWhat is the license of your project\x1b[0m`,
            name: 'license',
            choices: ['MIT', 'ISC', 'GNU GPL', 'Unlicense', 'none'],
            default: 'MIT'
        },
        //Usage information
        {
            type: 'input',
            name: 'usage',
            message: `\x1b[35mWhat are the usage information\x1b[0m`
        }, 
        {
            type: 'input',
            name: 'install',
            message: `\x1b[35mPlease state the installation instructions:\x1b[0m`
        },
        {
            type: 'input',
            name: 'test',
            message: `\x1b[35mWhat are the test instruction for your project?\x1b[0m`
        }, 
        //Acknowledgements
        {
            type: 'input',
            name: 'acknowledgement',
            message: `\x1b[35mPlease list all your collaborators and references that you wish to acknowledge\x1b[0m`
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