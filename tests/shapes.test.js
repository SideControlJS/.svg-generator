
const Triangle = require('../lib/triangle');
const Circle = require('../lib/circle');
const Square = require('../lib/square');

//test for Triangle
test('Triangle class renders correct SVG', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

//test for Circle
test('Circle class renders correct SVG', () => {
  const shape = new Circle();
  shape.setColor("red");
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

//test for Square
test('Square class renders correct SVG', () => {
  const shape = new Square();
  shape.setColor("yellow");
  expect(shape.render()).toEqual('<rect width="160" height="160" x="70" y="20" fill="yellow" />');
});