// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//================================================= attempted code ================================================= //

function generatePassword() {

  const arrayNumb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];   

  const arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];  

  const arraySpecialChar = ["!", "#", "$", "%", "&", "*", "+", "-", ".", ":", ";", "?", "@", "^", "~"];  

  const arrayRandomChar = [ ];



  let charCount = prompt("How many characters would you like your password to be?");

    if (charCount < 8 || charCount > 120) {
      alert("Sorry! Your response didn't meet the acceptance criteria 😓");
      return;
    } else {
      console.log(charCount);
    }

  let lowercaseChar = confirm("Would you like to include lowercase letters in your password?");


  let uppercaseChar = confirm("Would you like to include uppercase letters in your password?");


  let numbChar = confirm("Would you like to include numbers in your password?");


  let specialChar = confirm("Would you like any special characters in your password? (!, @, #, $, %. etc.)");



  var randomLowercaseChar = arrayLetters[Math.floor(Math.random() * arrayLetters.length)];
    console.log(randomLowercaseChar);
 
  var randomUppercaseChar = randomLowercaseChar.toUpperCase();
  console.log(randomUppercaseChar);

  var randomNumb = arrayNumb[Math.floor(Math.random() * arrayNumb.length)];
  console.log(randomNumb);

  var randomSpecialChar = arraySpecialChar[Math.floor(Math.random() * arraySpecialChar.length)];
    console.log(randomSpecialChar);



  if (lowercaseChar === true) {
    includeLowercase = randomLowercaseChar
    arrayRandomChar.push(includeLowercase);
  } else {
    console.log("Didn't include lowercase letters.") 
  }


  if (uppercaseChar === true) {
    includeUppercase = randomUppercaseChar
    arrayRandomChar.push(includeUppercase);
  } else {
    console.log("Didn't include uppercase letters.") 
  }


  if (numbChar === true) {
    includeNumb = randomNumb
    arrayRandomChar.push(includeNumb);
  } else {
    console.log("Didn't include numbers.") 
  }


  if (specialChar === true) {
    includeSpecial = randomSpecialChar
    arrayRandomChar.push(includeSpecial);

  } else {
    console.log("Didn't include special characters.") 
  }
  
  console.log(arrayRandomChar);

  let randomChar = "";

  for (let i = 0; i < charCount; i++) {
    randomChar += arrayRandomChar[Math.floor(Math.random() * arrayRandomChar.length)]; // selects a random value from arrayRandomChar
  }
  
  arrayRandomChar.push(randomChar);
    finalPassword = arrayRandomChar.join();


    console.log(finalPassword);

    }

generatePassword();
