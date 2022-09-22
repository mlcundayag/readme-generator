// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'MIT') {
    return `![License Badge](https://img.shields.io/badge/license-MIT-yellow.svg)`
  } else if (license === 'ISC') {
    return `![License Badge](https://img.shields.io/badge/license-ISC-blue.svg)`
  } else if (license === 'GNU GPL'){
    return `![License Badge](https://img.shields.io/badge/License-GPL_v2-blue.svg)`
  } else if (license === 'Unlicense') {
    return `![License Badge](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  } else {
    return '';
  }
}


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === 'MIT') {
    return `[License Link](https://opensource.org/licenses/MIT)`
  } else if (license === 'ISC') {
    return `[License Link](https://opensource.org/licenses/ISC)`
  } else if (license === 'GNU GPL'){
    return `[License Link](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'Unlicense') {
    return `[License Link](http://unlicense.org/)`
  } else {
    return '';
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== 'none') {
    return `${renderLicenseLink(data.license)}`
  } else {
    return `This project is open source and no license.`
  }
 }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Built With](#Built-With)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Links](#Links)
  * [Questions](#Questions)
  ***
  ## Installation
  ${data.install}
  
  ### Built with
  
  ${data.tools}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data)}

  ## Contributing
  ${data.acknowledgement}

  ## Links

  1. [GitHub](https://github.com/${data.gitHub}/${data.repoName})
  2. [Website](https://${data.gitHub}.github.io/${data.repoName}/)
  
  ## Questions
  If you have any questions about the project you can reach out to me via email or GitHub with the information below. 
  >GitHub : [${data.gitHub}](https://github.com/${data.gitHub})
  `;
}

module.exports = generateMarkdown;
