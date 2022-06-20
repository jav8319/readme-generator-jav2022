// TODO: Include packages needed for this application
const inquirer2 = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer2
    .prompt([
      {
        type: 'input',
        name: 'project',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'please add description of your projec?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'please add installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'please add usage information?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'please add contribution guidelines',
      },
      {
        type: 'input',
        name: 'test',
        message: 'please add test instructions',
      },
      {
        type: 'input',
        name: 'contact',
        message: 'please add contact email',
      },
      {
        type: 'input',
        name: 'Github',
        message: 'please add github user name',
      },
      {
        type: 'list',
        name: 'license',
        message: 'please choose lincese type',
        choices: ["Academic Free License v3.0","Apache license 2.0","Artistic license 2.0","Boost Software License 1.0","none"]
      }

 
    ])

    .then((data) => {
     




      const content= 
`
# ${data.project}  
      
## Table of content  

1.[Description](#description)
2.[Installation](#installation)
3.[Usage](#usage)  
4.[Contributions Guide Lines](#contributions-guide-lines) 
5.[Test Instructions](#test-instructions)
6.[License](#license)  
7.[Questions](#questions)  

## Description  

${data.description}  

## Installation  

${data.installation}  

## Usage  

${data.usage}  

## Contributions Guide Lines 

${data.contributions}  

## Test Instructions  

${data.test}  

## Questions  

I can be reached at <${data.contact}> or  [github]https://github.com/${data.Github}>

## License  

${data.license}
`;

      
      fs.writeFile("readme.md", content, (err) =>
      err ? console.log(err) : console.log('Success!')
      );
    });

