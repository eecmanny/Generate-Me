// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown')

// TODO: Create an array of questions for user input
const generateREADME = ({ project, section, description, installation, usage, license, contributing, test, questions, tableOfContent }) =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is your README project title?',
            },
            {
                type: 'input',
                name: 'section',
                message: 'What is the README section entitled',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the README description entitled',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What is your installation?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is your Usage?',
            },
            {
                type: 'input',
                name: 'license',
                message: 'What is your license?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What is your contributing?',
            },
            {
                type: 'input',
                name: 'test',
                message: 'Enter your tests?',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Enter your questions?',
            },
            // {
            //     message: 'Would you like a table of content?',
            //// Not right
            //     type: 'list',
            //     name: 'tableOfContent',
            //      input: y/n,
            // },
        ])
        .then((answers) => {
            const pREADMEPageContent = generateREADME(answers);


            // TODO: Create a function to write README file
            // function writeToFile(fileName, data) { }

            fs.writeFile('Profesional_README.md', pREADMEPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
