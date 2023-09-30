# SVG Logo Generator

An interactive SVG logo generation tool that allows users to customize and generate logos with a choice of shapes (circle, square, and triangle) and colors.

[Video Walkthrough Demo](https://drive.google.com/file/d/1o_juGioD9CEuMQe4e50l-OzYc_LNEzmY/view)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [Common-Issues-and-Solutions](#common-issues-and-solutions)
- [Contribute](#contribute)
- [License](#license)

## Features

- **Interactive CLI**: Utilizes the `inquirer` library for easy and interactive prompts.
- **Customizable Options**:
  - Choice of logo text (up to three characters).
  - Customize text color.
  - Choice of logo shapes: circle, triangle, or square.
  - Customize shape color.
- **SVG Output**: Generates an SVG file (`logo.svg`) with the designed logo.
- **Modular Architecture**: Shape classes are modular, making it easy to add more shapes in the future.

## Installation

1. Clone the repository:

```
git clone https://github.com/sidecontroljs/svg-generator.git
```

2. Navigate to the project directory:

```
cd svg-generator
```

3. Install the required dependencies:

```
npm install
```

## Usage

To launch the SVG Logo Generator, run (in your terminal):

```
node index.js
```

Follow the interactive prompts to design your logo. Once completed, the SVG file will be generated as `logo.svg`.

## Testing

Unit tests are available for the shape generation logic.

Run the tests using:

```
npm test
```

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For interactive CLI prompts.
- [jest](https://jestjs.io/): Used for testing.

## Common Issues and Solutions

### inquirer and Module System Compatibility
If you encounter an error like the following when running the application:

"Error [ERR_REQUIRE_ESM]: require() of ES Module .../node_modules/inquirer/lib/inquirer.js ... not supported.
This is related to a module system compatibility issue between CommonJS and ES Modules (ESM). Newer versions of inquirer are written as ES Modules, and older project setups may use require(), which is designed for CommonJS, causing the error."

### Solutions:
1. Use Dynamic Imports: You can use dynamic imports (import()) instead of require() to load ES Modules. In our main application logic:


import('inquirer').then(inquirer => {
    // Your code here
});

2. Use an Older Version of inquirer: If refactoring isn't an option, consider using an older version of inquirer that still uses CommonJS:

npm install inquirer@<version>

## Contribute

Contributions are always welcome!

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Open a pull request.

## License

This project is licensed under the ISC License. See [LICENSE](LICENSE.md) for details.
