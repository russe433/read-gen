const licenseArr = ["MIT", "Apache"]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license===licenseArr[0]){
   return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
 } else if (license===licenseArr[1]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
 } else {
   return ""
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license===licenseArr[0]){
  return `[${licenseArr[0]}](https://opensource.org/licenses/MIT)`
} else if (license===licenseArr[1]){
   return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`
} else {
  return ""
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArr[0]){
    return `Click to read about ${licenseArr[0]}`
  } else if (license===licenseArr[1]){
     return `Click to read about ${licenseArr[1]}`
  } else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}
  ## Table Of Contents
  * [Description](#desc)
  * [Installation](#install)
  * [Usage](#usage)
  * [Credits](#credit)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description
  ${data.desc}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credit}
  
  ## License
  ${renderLicenseBadge(data.license)}  
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Questions
  [${data.username}](https://github.com/${data.username})  
  ${data.email}
  `;
}
module.exports = generateMarkdown;
