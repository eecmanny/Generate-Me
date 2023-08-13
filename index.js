// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const generateREADMEQuestions = ({ title, installation, usage, license, features, contributes, test, questions, email, github, deployedSite }) =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What is your project's title?",
            },
            {
                type: 'input',
                name: 'credit',
                message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for use.',
            },
            {
                type: 'input',
                name: 'license',
                message: 'What is your license agreement for this project?',
            },
            {
                type: 'input',
                name: 'features',
                message: 'What features does your project have?',
            },
            {
                type: 'input',
                name: 'contributes',
                message: 'How would you like other users to use your application?',
            },
            {
                type: 'input',
                name: 'test',
                message: 'How do you run your test?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your Github link?',
            },
            {
                type: 'input',
                name: 'deployedSite',
                message: 'Enter your application link?',
            },
        ])
        .then((answers) => {
            const pREADMEPageContent = generateREADMEQuestions(answers);


            // TODO: Create a function to write README file
            // function writeToFile(fileName, data) { }

            fs.writeFile('Profesional_README.md', pREADMEPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });


// TODO: Create a function to initialize app
function init() { 
generateREADMEQuestions;
};

// Function call to initialize app
init();
