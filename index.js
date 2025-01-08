const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./src/generateMarkdown');

// Questions input
const questions = [
  { type: 'input', name: 'title', message: 'What is the title of your project?' },
  { type: 'input', name: 'description', message: 'Provide a brief description of your project:' },
  { type: 'input', name: 'installation', message: 'What are the installation instructions?' },
  { type: 'input', name: 'usage', message: 'How is the application used?' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'] },
  { type: 'input', name: 'contributing', message: 'What are the contribution guidelines?' },
  { type: 'input', name: 'tests', message: 'What are the test instructions?' },
  { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
  { type: 'input', name: 'email', message: 'Enter your email address:' },
];

// README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('./output/README.md', markdown);
    console.log('README.md has been successfully generated!');
  });
}


init();
