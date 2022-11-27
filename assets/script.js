var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 'L', "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var options = "";
var newPassword = "";

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

function writePassword() {

  var lowerCaseConfirm = confirm("Do you want your password to contain lowercase letters?");
  var upperCaseConfirm = confirm("Do you want your password to contain uppercase letters?");
  var numberConfirm = confirm("Do you want your password to contain numbers?");
  var specialCharacterConfirm = confirm("Do you want your password to contain special characters?");
  var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

  
  if (passwordLength < 8 || passwordLength > 128) {
      alert("Your password is not between 8 characters and 128 characters. Please try again.");
      var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  }

  else if (lowerCaseConfirm === false && upperCaseConfirm === false && numberConfirm === false && specialCharacterConfirm === false) {
      alert("You must chose at least one password criteria.");
      var lowerCaseConfirm = confirm("Do you want your password to contain lowercase letters?");
      var upperCaseConfirm = confirm("Do you want your password to contain uppercase letters?");
      var numberConfirm = confirm("Do you want your password to contain numbers?");
      var specialCharacterConfirm = confirm("Do you want your password to contain special characters?");
  };

  if (lowerCaseConfirm) {
      options += lowerCase;
  };

  if (upperCaseConfirm) {
      options += upperCase;
  };

  if (numberConfirm) {
      options += numbers;
  };

  if (specialCharacterConfirm) {
      options += specialCharacters;
  };

 
  for (var i = 0; i < passwordLength; i++) {
     
      newPassword += options.charAt(Math.floor(Math.random() * options.length));
  };
  password.value = newPassword;

};

// Add event listener to listen for click of the button
generateBtn.addEventListener("click", writePassword);