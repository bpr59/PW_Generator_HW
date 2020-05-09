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

//Setting randSelector variable and conditions to cycle through values and generate password

var randSelector = [];
var password = [];

if (upper === true) {
        for (var i = codeUpper[0]; i <= codeUpper[1]; i++) {
          randSelector.push(i);
        }
}

if (lower === true) {
  for (var i = codeLower[0]; i <= codeLower[1]; i++) {
    randSelector.push(i);
  }
}

if (numbers === true) {
  for (var i = codeNum[0]; i <= codeNum[1]; i++) {
    randSelector.push(i);
  }
}

if (symbols === true) {
  for (var i = codeSymbol[0]; i <= codeSymbol[1]; i++) {
    randSelector.push(i);
  }
}
 
//console.log(randSelector);














})