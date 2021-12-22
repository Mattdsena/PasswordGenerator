var special = false;
var numbers = false;
var lowerCase = false;
var upperCase = false;

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
            
    if (special === false && numbers === false && lowerCase === false && upperCase === false) {
        return alert("Please try again, you must have at least one character type in your password")
        }
        var notValid = true;
        var validPassword = "";
        while (notValid) {
          let pass = generatePossible(PasswordLength, allPossibleCharacters);
          let valid = checkPasswordValid(pass);
          if (valid) {
            notValid = false;
            validPassword = pass;
          }
        }
        return validPassword;         
  }
  function checkPasswordValid(passToCheck) {
    console.log(passToCheck + " check password valid");
    if (special) {
        let check1 = commonChar(SPECIAL_CHARACTERS, passToCheck);
        console.log("check for special characters" + check1);
        if (!check1) {
          return false;
        }
      }
    if (numbers) {
      let check2 = commonChar(NUMERICAL_CHARACTERS, passToCheck);
      console.log("check for numbers " + check2);
      if (!check2) {
        return false;
      }
    }
    if (lowerCase) {
      let check3 = commonChar(LOWERCASE_CHARACTERS, passToCheck);
      console.log("check for lowercase " + check3);
      if (!check3) {
        return false;
      }
    }
    if (upperCase) {
      let check4 = commonChar(UPPERCASE_CHARACTERS, passToCheck);
      console.log("check for uppercase " + check4);
      if (!check4) {
        return false;
      }
  
    }
    return true;
  }
  function commonChar(charSetString, passwordToTest) {

    for (let i = 0; i < passwordToTest.length; i++) {
      if (charSetString.includes(passwordToTest[i])) {
        return true;
      }
    }
    return false;
  
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);