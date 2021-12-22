// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
     let userChoice = window.prompt("How many characters would you like your password to contain?");
    }
    
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

