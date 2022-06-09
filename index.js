// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

// TODO: Create a function to initialize app
function init () {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project called?',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
        console.log('Please enter a project title.');
        return false;
        }
      }
    },
    {
      type: 'input',
      message: 'What does your project do? What problem does it solve? Why did you build it?',
      name: 'desc',
      validate: descInput => {
        if (descInput) {
          return true;
        } else {
        console.log('Please enter a project description.');
        return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Are there any specific installation instructions?',
      name: 'install',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
        console.log('Please enter installation instructions. If none, enter "none"');
        return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Please provide usage instructions.',
      name: 'usage',
      validate: usageInput => {
        if (usageInput) {
        return true;
        } else {
        console.log('Please enter usage instructions.');
        return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Please list any additional collaborators or sources.',
      name: 'credit',
      validate: creditInput => {
        if (creditInput) {
        return true;
        } else {
        console.log('Please enter collaborators or sources.');
        return false;
        }
      }
    },
    {

      type: 'checkbox',
      message: 'Please select license.',
      name: 'license',
      choices: ['MIT', 'Apache', 'Other']
    },
    {
      type: 'input',
      message: 'Please enter your email.',
      name: 'email',
      validate: titleInput => {
        if (titleInput) {
        return true;
        } else {
          console.log('Please enter your email.');
        return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username.',
      name: 'username',
      validate: titleInput => {
        if (titleInput) {
        return true;
        } else {
          console.log('Please enter your GitHub username.');
        return false;
        }
      }
    },
          
])

// TODO: Create a function to write README file
.then((data) => {
    const fileName = `${data.title
        .toLowerCase()
        .split(' ')
        .join('')}.md`;

        fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!')
)}
);
   
}


// Function call to initialize app
init();
