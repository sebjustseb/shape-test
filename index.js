const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => input.length <= 3 && input.length > 0,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
    },
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case 'circle':
        shape = new Circle(answers.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(answers.shapeColor);
        break;
      case 'square':
        shape = new Square(answers.shapeColor);
        break;
    }

    const shapeRendering = shape.render();

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeRendering}
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
      </svg>
    `;

    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
  })
  .catch((error) => console.error(error));