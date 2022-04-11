// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  <a href='https://img.shields.io/badge/License-${data.license}-blueviolet'><img src='https://img.shields.io/badge/License-${data.license[0]}-blueviolet'></a>
  `

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table Of Contents
- [Project Title](#project-title)
- [badeDescription](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [GitHub](#github)
- [Email](#email)
- [Contribution](#contribution)

### Project Title
${data.project-title}

### Description
${data.description}

### User Story
${data.user-story}

### Acceptance Criteria
${data.acceptance-criteria}

### Installation
${data.installation}

### Usage
${data.usage}

### License
${data.license}

### GitHub
${data.github}

### Email
${data.email}

### Contribution
${data.contribution}

`;
}

module.exports = generateMarkdown;
