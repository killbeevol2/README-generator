// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./src/readme");

// An array of questions for user input
const questions = [];
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username? (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "projName",
        message: "What is your project title name? (Required)",
        validate: (projNameInput) => {
          if (projNameInput) {
            return true;
          } else {
            console.log("Please enter your project title!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Enter a description about your project:",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter a description!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "contribution",
        message: "How to contribute:",
        validate: (contributionInput) => {
          if (contributionInput) {
            return true;
          } else {
            console.log("Please enter how to contribute!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "install",
        message: "Provide installation instructions:",
        validate: (installInput) => {
          if (installInput) {
            return true;
          } else {
            console.log("Please enter installation instructions!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Reasons for usage of application:",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("Please enter usage for the application!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "test",
        message: "How do you test the application?",
        validate: (testInput) => {
          if (testInput) {
            return true;
          } else {
            console.log("Please enter a description on how to test!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "credit",
        message: "List any contributors:",
        validate: (creditInput) => {
          if (creditInput) {
            return true;
          } else {
            console.log("Please name your contributors!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license for your application",
        choices: ["MIT", "ISC"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      const readmeData = generateReadme(answers);
      console.log(readmeData);
      writeToFile("./dist/readme.md", readmeData);
    });
};
// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw new Error(err);
  });
}

promptUser();
