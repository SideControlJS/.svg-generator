const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./generateLogo.js');

const questions =  [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters for your logo text:',
        validate: input => input.length <= 3 || 'Text for your logo can only be a max of 3 characters!',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a text color (keyword or hex):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color for the shape of your logo (keyword or hex):',
    }
];

function writeToFile(fileName, data) {
    const content = generateLogo(data);
    fs.writeFile(fileName, content, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

function launch() {
    inquirer.prompt(questions).then((data) => {
        const fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

launch();


        
 




    

