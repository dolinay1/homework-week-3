// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  userPassword = "";
  passwordSet = "";

  // Variables used
  const userLength = prompt("Welcome! Please enter the number of characters you would like the password to be!");
  const passwordUppercase = prompt("Do you want the password to contain uppercase characters? Enter 'y' or 'n'.");
  const passwordLowercase = prompt("Do you want the password to contain lowercase characters? Enter 'y' or 'n'.");
  const passwordNumeric = prompt("Do you want the password to contain numeric characters? Enter 'y' or 'n'.");
  const passwordSpecial = prompt("Do you want the password to contain special characters? Enter 'y' or 'n'.");
  let passwordLength;
  let passwordValue;

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numberCharacters = "0123456789";
  const specialCharacters = "!@#$%^&*+?<>";

  // Takes a value for the desired character amount entered by the user and stores it into a variable
  if (userLength >= 8 && userLength <= 128) {
    passwordValue = userLength;
  } else {
    return ("Error enter a valid number!")
  }

  // Goes through a series of prompts selected by the user to select which character will be used in the password
  if (passwordUppercase === "y") {
    passwordSet += uppercaseLetters;
  }

  if (passwordLowercase === "y") {
    passwordSet += lowercaseLetters;
  }

  if (passwordNumeric === "y") {
    passwordSet += numberCharacters;
  }

  if (passwordSpecial === "y") {
    passwordSet += specialCharacters;
  }
  else if(passwordSet === "") {
    return ("Error! Please refresh page!")
  }
 

  // Parses the values from the user sections above into the desired "password" using the password length value inputed at the start
  passwordLength = passwordValue;

  for (let i = 0; i < passwordLength; i++) {
    userPassword += passwordSet.charAt(
      Math.floor(Math.random() * passwordSet.length));
    
  }
  return userPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
