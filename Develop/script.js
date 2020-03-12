// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  userPassword = "";
  passwordSet = "";

  let passwordLength = prompt("Welcome! Please enter the number of characters you would like the password to be!");
  let passwordUppercase = prompt("Do you want the password to contain uppercase characters? Enter 'y' or 'n'.");
  let passwordLowercase = prompt("Do you want the password to contain lowercase characters? Enter 'y' or 'n'.");
  let passwordNumeric = prompt("Do you want the password to contain numeric characters? Enter 'y' or 'n'.");
  let passwordSpecial = prompt("Do you want the password to contain special characters? Enter 'y' or 'n'.");

  // possibly want to make an object with all of the arrays and a "randomness" function
  // Math.floor(Math.random() * Characters.uppercase.length)
  //  charAt()

  // let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // let numberCharaters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "<", ">"];

  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let numberCharaters = "0123456789";
  let specialCharacters = "!@#$%^&*+?<>";

  // Charaters = {
  //   uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  //   lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  //   numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  //   special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "<", ">"],
  // }
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordValue = passwordLength;
    alert(passwordValue);
  }
  else alert("Password length is NOT valid");

  if (passwordUppercase === "y") {
    passwordSet += uppercase;
    alert(passwordSet);
  }
  else alert("It will NOT contain uppercase characters");

  if (passwordLowercase === "y") {
    alert("It will contain lowercase characters");
  }
  else alert("It will NOT contain lowercase characters");

  if (passwordNumeric === "y") {
    alert("It will contain numeric characters");
  }
  else alert("It will NOT contain numeric characters");

  if (passwordSpecial === "y") {
    alert("It will contain special characters");
  }
  else alert("It will NOT contain special characters");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
