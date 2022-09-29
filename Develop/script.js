// Assignment Code
var generateBtn = document.querySelector("#generate");
// Generating the random integer
function randomint(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomint(list.length)]
}
//First prompt once generaate button is pressed //
function generatePassword() {
  
  var userInput = window.prompt("How many characters would you like your password to be?");
 
//This is how we know if a number is not selected so we can prompt the user and return for a number.
  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Wait! That's not a number!");
    return 
  }
//This makes sure the number stays between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Wait! Password Length must be between 8 and 128 characters!");
    return 
  }
// Prompts for user
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?");
  var userWantsSpecialCharacters = window.confirm("Would you like to include special characters in your password?");
// Arrays for letters, numbers, and special characters //
  var numbersList = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseList = ["A", "B",  "C", "D", "E", "F", "G", "H", "I", "J", "K", 'L', "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];

//options cart holds the users choices //
  var optionsCart = []

  if (userWantsNumbers === true) {
    optionsCart.push(numbersList);
  } 
  if (userWantsLowercase === true) {
    optionsCart.push(lowerCaseList);
  } 
  if (userWantsUppercase === true) {
    optionsCart.push(upperCaseList);
  } 
  if (userWantsSpecialCharacters === true) {
    optionsCart.push(symbolList);
  } 
//prompt if nothing is selected // 
  if (optionsCart.length === 0) {
    window.alert("Please confirm one or more items!");
    return 
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar
  }
    return generatedPassword

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
