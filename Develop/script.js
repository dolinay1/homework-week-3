// Assignment Code

//charAt()
// Math.floor(Math.random())
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordLength = prompt("Welcome! Please enter the number of characters you would like the password to be!");
  let passwordUppercase = prompt("Do you want the password to contain uppercase characters?");
  let passwordLowercase = prompt("Do you want the password to contain lowercase characters?");
  let passwordNumeric = prompt("Do you want the password to contain numeric characters?");
  let passwordSpecial = prompt("Do you want the password to contain special characters?");

  let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowercaseLetters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "<", ">"];

  if (passwordLength >= 8 && passwordLength <= 128) {
    return "Password length is valid";
  }
  return "Length not valid";

  if (passwordUppercase === true) {
    return "It will NOT contain uppercase characters"
  }

  if (passwordLowercase === true) {
    return "It will NOT contain lowercase characters"
  }

  if (passwordNumeric === true) {
    return "It will NOT contain numeric characters"
  }

  if (passwordSpecial === true) {
    return "It will NOT contain special characters"
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
