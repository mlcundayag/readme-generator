// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Built With](#Built-With)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Links](#Links)
  * [Questions](#Questions)
  ***
  ## Installation
  ${data.install}
  
  ### Built with
  -${data.tools[0]}
  -${data.tools[1]}
  -${data.tools[2]}
  -${data.tools[3]}

  ## Usage
  ${data.usage}
  
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
