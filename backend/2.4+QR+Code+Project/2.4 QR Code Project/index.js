import inquirer from 'inquirer';
import qr from 'qr-image'; 
import fs from 'fs';

inquirer
  .prompt([
    {"message":"Enter the URL you want to convert to a QR code:","name":"url","type":"input"}
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url, { type: 'png' });
    fs.writeFile("url.txt", url, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The URL was saved to url.txt!");
    });
    qr_svg.pipe(require('fs').createWriteStream('qr_img.png'));
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
