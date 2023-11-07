// Assignment code here
function generatePassword() {

  var passwordLength = prompt("How long would you like your password to be? \n(Please select a number between 8 - 128 characters.)");
  var includeLowercase = confirm("Would you like any lowercase letters in your password? \n(Select OK for YES or CANCEL for NO)");
  var includeUppercase = confirm("Would you like any uppercase letters in your password? \n(Select OK for YES or CANCEL for NO)");
  var includeNumber = confirm("Would you like any numbers in your password? \n(Select OK for YES or CANCEL for NO)");
  var includeSpecChar = confirm("Would you like any special characters in your password?\n Special Characters include: !  @  #  $  %  ^  &  *  +  ? \n\n(Select OK for YES or CANCEL for NO)");

  console.log("passwordLength:", passwordLength);
  console.log("includeLowercase:", includeLowercase);
  console.log("includeUppercase:", includeUppercase);
  console.log("includeNumber:", includeNumber);
  console.log("includeSpecChar:", includeSpecChar);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
