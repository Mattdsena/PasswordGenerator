var special
var numbers 
var lowerCase 
var upperCase

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

special = confirm("Please click on OK if you would like to use special characters in your password, please click cancel if you do not want special characters in your password")
if (special) {
    allPossibleCharacters = allPossibleCharacters.concat(SPECIAL_CHARACTERS)
   }

numbers = confirm("Please click on OK if you would like to use numbers in your password, please click cancel if you do not want numbers in your password")
if (numbers) {
    allPossibleCharacters = allPossibleCharacters.concat(NUMERICAL_CHARACTERS)
      }

lowerCase  = confirm("Please click on OK if you would like to use lowercase characters in your password, please click cancel if you do not want lowercase characters in your password")
if (lowerCase) {
    allPossibleCharacters = allPossibleCharacters.concat(LOWERCASE_CHARACTERS)
         }
      
upperCase = confirm("Please click on OK if you would like to use uppercase characters in your password, please click cancel if you do not want uppercase characters in your password")
if (upperCase) {
    allPossibleCharacters = allPossibleCharacters.concat(UPPERCASE_CHARACTERS)
            }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);