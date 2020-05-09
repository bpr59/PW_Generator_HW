//This are my variables

var results = document.querySelector("#password");
var codeUpper = [65, 90];
var codeLower = [97, 122];
var codeNum = [48, 57];
var codeSymbol = [33, 47];

//Adding EventListener to generate button

document.querySelector("#generate").addEventListener("click", () =>{

//Setting variables and linking to corresponding ids in html file

var length = document.querySelector("#length").Value;
var upper = document.querySelector("#uppercase").checked;
var lower = document.querySelector("#lowercase").checked;
var numbers = document.querySelector("#numbers").checked;
var symbols = document.querySelector("#symbols").checked;

//Setting randomSelector variable and conditions to cycle through values and generate password

var randomSelector = [];
var password = [];

if (upper === true) {
        for (var i = codeUpper[0]; i <= codeUpper[1]; i++) {
          randomSelector.push(i);
        }
}

if (lower === true) {
  for (var i = codeLower[0]; i <= codeLower[1]; i++) {
    randomSelector.push(i);
  }
}















})