import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
      name: "user_name",
      message: "What is your name?",
    },
    {
      name: "location",
      message: "Where do you live?",
    },
    {
      name: "email",
      message: "What is your email?",
    },
    {
      name: "bio",
      message: "Tell me a little about yourself.",
    },
    {
      name: "linkedin",
      message: "What is your LinkedIn URL?",
    },
    {
      name: "github",
      message: "What is your GitHub URL?",
    },
  ])

  // HTML file created with answers from above inserted
  .then((answer) => {
    fs.writeFile(
      "./index.html",
      `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="./src/styles.css" rel="stylesheet" />
      
          <title>Portfolio Prompt</title>
        </head>
        <body>
          <div class="main-container">
            <div>
              <h1>${answer.user_name}'s Portfolio</h1>
            </div>
            <div class="main-details">
              <h2>Hi, my name is ${answer.user_name}. Welcome to my portfolio</h2>
              <div class="horizontal-div">
                <div class="location">I'm currently based in ${answer.location}</div>
                <div class="contact">Feel free to <a href="mailto:${answer.email}" target="_blank">contact me</a></div>
              </div>
              <p class="bio">${answer.bio}</p>
              <div class="horizontal-div">
                <a href="${answer.linkedin}" target="_blank"
                  ><img src="./images/linkedin.svg" class="linkedin-icon icon"
                /></a>
                <a href="mailto:${answer.email}" target="_blank"
                  ><img src="./images/envelope-solid.svg" class="email-icon icon"
                /></a>
                <a href="${answer.github}" target="_blank"
                  ><img src="./images/github.svg" class="github-icon icon"
                /></a>
              </div>
            </div>
          </div>
          <script type="text/javascript" src="index.js"></script>
        </body>
      </html>
      
    `,
      function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      }
    );
  });
