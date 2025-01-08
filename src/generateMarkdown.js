function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
    }
    return '';
}

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `This project is licensed under the ${license} license.`;
    }
    return '';
}

module.exports = function generateMarkdown(data) {
    return `
# ${data.title}

 ${renderLicenseBadge(data.license)}

## Description

 ${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

 ${data.installation}

## Usage
 ${data.usage}

## Contributing
 ${data.contributing}

## License
 ${renderLicenseSection(data.license)}

## Tests
 ${data.tests}

## Github
 ${data.github}

## Email
 ${data.email}

`
}