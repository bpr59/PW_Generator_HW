PASSWORD GENERATOR HOMEWORK

General Information

* This password generator was developed using template documents provided as a starting point. Documents included .html, 
.js, .css files as well as a .png document as the background for the webpage.


Homework requirements

The client requested a password generator with the following options:
* total character range between 8 and 128 characters
* option to include individually, the following types of characters:
    - Uppercase 
    - Lowercase
    - Numbers
    - Symbols

* results generated should be displayed on the screen or on an alert

HTML - CSS Development Process

* I began by adding color to the css file followed by increasing the size of the window where I would display the category options requested by the client.
* Next I added a div to the HTML file with the character range information

<img src = "Assets/screenShot_1.png>

* Next I finished adding the character options 
* Once all options were set, I added color and size to the characters via the CSS file

<img src = "Assets/screenShot_3.png>

JavaScript Development Process

* First I declared all the variables needed to access the values requested by the client this included adding ASCII values to control the options for uppercase, lowercase, numbers and symbols
* Next I created an EventListener/click to control the Generate Password button
* Following step was to create querySelector variables linking them to the corresponding HTML divs for all values of upper, lower, numbers, symbols and length.
* Next variables for password and RandSelector were created
    * The RandSelector will be used to cycle through the values and generate the requested password utilizing the full range of all the values created in the original variables
* Following step was to create all the conditional statements necessary to generate the values for upper, lower, numbers and symbols.
* Next step was to create the condition that would generate the password using the CharacterCode string and the formula of MathFloor(MathRandom) multiplied by the length of the RandSelector.
* The last step was to push the generated password to the provided window in the HTML file.

<img src = "Assets/screenShot_6.png>

* During the development of the JavaScript file, I ran console.log to confirm if it was generating information of the four values requested by the client as well as recognizing the range of this values according to how they were set in the original variables.

<img src = "Assets/screenShot_5.png>

Project inspiration

*This project was developed using information provided in the following YouTube link:
   https://www.youtube.com/watch?v=VTc4gqvckr8
