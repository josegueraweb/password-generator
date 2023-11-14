// Assignment code here
function generatePassword() {

  // password length prompt.
  var passwordLength = prompt("How long would you like your password to be? \n(Please select a number between 8 - 128 characters.)");

  // exits users out of application if an invalid input is given. 
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please select a valid number between 8 - 128.");
    return;
  }

  // users prompts
  var includeLowercase = confirm("Would you like any lowercase letters in your password? \n(Select OK for YES or CANCEL for NO)");
  var includeUppercase = confirm("Would you like any uppercase letters in your password? \n(Select OK for YES or CANCEL for NO)");
  var includeNumber = confirm("Would you like any numbers in your password? \n(Select OK for YES or CANCEL for NO)");
  var includeSpecChar = confirm("Would you like any special characters in your password?\n Special Characters include: !  @  #  $  %  ^  &  *  +  ? \n\n(Select OK for YES or CANCEL for NO)");

  // test for checking if user input is being recorded. 
  console.log("passwordLength: ", passwordLength);
  console.log("includeLowercase: ", includeLowercase);
  console.log("includeUppercase: ", includeUppercase);
  console.log("includeNumber: ", includeNumber);
  console.log("includeSpecChar: ", includeSpecChar);

  // arrays for password characters.
  var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?"];

  // array for the characters the user would like included in their password. 
  var selectedCharsArray = [];

  // if statements to push arrays into selectedCharsArray, depending on user input. 
  if (includeLowercase) {
    selectedCharsArray = selectedCharsArray.concat(lowercaseChars);
  }
  if (includeUppercase) {
    selectedCharsArray = selectedCharsArray.concat(uppercaseChars);
  }
  if (includeNumber) {
    selectedCharsArray = selectedCharsArray.concat(numberChars);
  }
  if (includeSpecChar) {
    selectedCharsArray = selectedCharsArray.concat(specialChars);
  }

  // array for generating the user's random password
  var passwordArray = [];

  // for loop that generates a randomly selected character from each of the available arrays from selectedCharsArray. 
  for (var i = 0; i < passwordLength; i++) {
    var randomlySelectedChar = Math.floor(Math.random() * selectedCharsArray.length);
    passwordArray.push(selectedCharsArray[randomlySelectedChar]);
  }

  // converts the contents of passwordArray to a string and stores it in a variable.
  var password = passwordArray.join("");

  // returns the variable to be utilized elsewhere in the code. 
  return password; 
}


// hooks into the #generate DOM element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// event listener that will execute the write password function when then generatebtn DOM element is clicked. 
generateBtn.addEventListener("click", writePassword);