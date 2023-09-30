const Triangle = require('../lib/triangle');
const Circle = require('../lib/circle');
const Square = require('../lib/square');

function generateLogo(data) {
    let shapeInstance;
    switch(data.shape) {
        case 'circle':
            shapeInstance = new Circle();
            break;
        case 'triangle':
            shapeInstance = new Triangle();
            break;
        case 'square':
            shapeInstance = new Square();
            break;
    }

    shapeInstance.setColor(data.shapeColor);

    let svgContent = shapeInstance.render();

    svgContent += `<text x="150" y="100" font-size="24" fill="${data.textColor}" text-anchor="middle" dominant-baseline="central">${data.text}</text>`;

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;
}

module.exports = generateLogo;