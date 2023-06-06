const inquirer= require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "userTitle",
        message:"What is name of the ReadMe Title?"
    },
    {
        type: "input",
        name:"userDescription",
        message:"How would you descrive your project in less than 3 sentences"
    },
    {
        type: "input",
        name:"installationProcess",
        message:"How can you install this project?"
    },
    {
        type: "input",
        name: "usageInfo",
        message:"How is this project used?"
    },
    {
        type: "input",
        name: "contributionGuide",
        message:"Who are the contributors to this project?"
    },
    {
        type:"input",
        name: "testInstructions",
        message: "How can this porject be tested?"
    },
    {
        type:"list",
        name: "licenses",
        message: "Which of these licenses do you want to use?",
        choices: ["Apache", "Boost", "GNU", "Eclipse", "MIT", "Mozilla", "Unlicense"]
    },
    {
        type:"input",
        name:"userName",
        message:"What is the name of the user?"
    },
    {
        type:"input",
        name:"emailAddress",
        message:"What is the user's email address"
    }
]).then((response) =>{
    console.log(response);
    const filename = `${response.userName.toLowerCase().split(' ').join('')}.md`;
    const readMe = 
    `# ${response.userTitle}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

${response.userDescription}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${response.installationProcess}

## Usage

${response.usageInfo}

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    

## Credits

List your collaborators, if any, with links to their GitHub profiles.


## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
${response.licenses}
---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
${response.contributionGuide}

## Tests
${response.testInstructions}
Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

This is my github username: ${response.userName}.
This is my email-address: ${response.emailAddress}.
`

    fs.writeFile(filename, readMe, (err) => err ? console.log(err): console.log("Success"));
});


