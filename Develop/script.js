// Assignment code here
function generatePassword() {

  // users prompts.
  var passwordLength = prompt("How long would you like your password to be? \n(Please select a number between 8 - 128 characters.)");
  var includeLowercase = confirm("Would you like any lowercase letters in your password? \n(Select OK for YES or CANCEL for NO)");
  var includeUppercase = confirm("Would you like any uppercase letters in your password? \n(Select OK for YES or CANCEL for NO)");
  var includeNumber = confirm("Would you like any numbers in your password? \n(Select OK for YES or CANCEL for NO)");
  var includeSpecChar = confirm("Would you like any special characters in your password?\n Special Characters include: !  @  #  $  %  ^  &  *  +  ? \n\n(Select OK for YES or CANCEL for NO)");

  // test for checking if user input is being recorded. 
  console.log("passwordLength:", passwordLength);
  console.log("includeLowercase:", includeLowercase);
  console.log("includeUppercase:", includeUppercase);
  console.log("includeNumber:", includeNumber);
  console.log("includeSpecChar:", includeSpecChar);

  // arrays for password characters.
  lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  specialChars = ["!",  "@",  "#",  "$",  "%",  "^",  "&",  "*",  "+",  "?"];




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
