function generateLogo(data) {
    let svgContent = '';

    switch(data.shape) {
        case 'circle':
            svgContent = `<circle cx="150" cy="100" r="50" fill="${data.shapeColor}" />`;
            break;
        case 'triangle':
            svgContent = `<polygon points="150,18 244,182 56,182" fill="${data.shapeColor}" />`;
            break;
        case 'square':
            svgContent = `<rect x="100" y="50" width="100" height="100" fill="${data.shapeColor}" />`;
            break;
    }

    svgContent += `<text x="150" y="100" font-size="24" fill="${data.textColor}" text-anchor="middle" dominant-baseline="central">${data.text}</text>`;
    return svgContent;
}

module.exports = generateLogo;