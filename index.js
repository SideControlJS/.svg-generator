let inquirer;

import('inquirer').then(module => {
    inquirer = module.default;

    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters for your logo text:',
            validate: input => input.length <= 3 || 'Text for your logo can only be a max of 3 characters!',
        },
        {
            type: 'iput',
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
    ]);

}).then(answers => {
    let svgContent = ''; //hold svg string

    //generate svg based on the shape that's selected
    switch(answers.shape) {
        case 'circle':
            svgContent = `circle cx="100" r="50" fill="${answers.shapeColor}" />`;
            break;
        case 'triangle':
            svgContent = `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`;
            break;
        case 'square':
            svgContent = `<rect x="100" y="50" width="100" height="100" fill="${answers.shapeColor}" />`;
            break;
    }

    //add text to the svg
    svgContent += `<text x="150" y="100" font-size="24" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="central">${answers.text}</text>`;
    
    svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgContent}
    </svg>
    `;
    
    //save svgContent to a file
    const fs = require('fs');
    fs.writeFileSync('logo.svg', svgContent, 'utf8');

    console.log('Generated logo.svg')
})


    

