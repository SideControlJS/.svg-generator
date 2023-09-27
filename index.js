const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

function promptUser() {
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
}

function generateSVG({ text, textColor, shape, shapeColor }) {
    let selectedShape;
    switch (shape) {
        case 'circle':
            selectedShape = new Circle();
            break;
        case 'triangle':
            selectedShape = new Triangle();
            break;
        case 'square':
            selectedShape = new Square();
            break;
    }

    selectedShape.setColor(shapeColor);

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${selectedShape.render()}
            <text x="150" y="110" font-family="Arial" font-size="24px" fill="${textColor}" text-anchor="middle">
                ${text}
            </text>
        </svg>
    `;

    return svgContent.trim();
}