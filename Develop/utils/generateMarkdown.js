//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `<a href='https://img.shields.io/badge/License-${license}-blueviolet'><img src='https://img.shields.io/badge/License-${license}-blueviolet'></a>`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `<a href='https://opensource.org/licenses/${license}'>https://opensource.org/licenses/${license}</a>`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return 'This software distributed under the terms of the ' + license + ' license.';
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
    return `# ${data.title}


## Table Of Contents
- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [GitHub](#github)
- [Email](#email)
- [Contribution](#contribution)

### Project Title
${data.title}

### Description
${data.description}

### Installation
${data.installation}

### License
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

${renderLicenseBadge(data.license)}

### GitHub
${data.github}

### Email
${data.email}

### Contribution
${data.contribution}
`;
}

module.exports = generateMarkdown;
