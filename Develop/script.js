//Constants 
const SPECIAL_CHARACTERS = '!@#$%^&*();:.,<>';
const NUMERICAL_CHARACTERS = '0123456789';
const LOWERCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

  function generatePassword() {
    let allPossibleCharacters = "";
    let PasswordLength = prompt("How many characters would you like your password to contain?");
   if (!PasswordLength) {
       return
   }

   if (PasswordLength < 8 || PasswordLength > 128) {
    return alert("Please try again & select a value between 8 and 128")
  }

   }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

