// Assignment Code
const generateBtn = document.querySelector("#generate");

// Assigning all possible characters to variables
const specialCharacters = ")(*&^%$#@!~`-_=+,.<>/?;:";
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharacters = "1234567890";

// Creating prompts to determine character length
function generatePassword() {
  const passwordLengthChoice = prompt("Please choose the length of your password between 8 and 128 characters.");

  // create a condition that checks that the password length is nnot less than 8 and not greater than 128
  if (passwordLengthChoice < 8 || passwordLengthChoice > 128) {
    alert("Password Length must be between 8 and 128 characters.");
    return;
  }

  //Promts to determine password type
  const specialCharactersChoice = confirm("Do you want special characters in your password?");
  const lowerCaseChoice = confirm("Do you want lower case characters in your password?");
  const upperCaseChoice = confirm("Do you want upper case characters in your password?");
  const numbersChoice = confirm("Do you want numbers in your password?")

  //Creating a condition to check that at least one character type was selected
  if (specialCharactersChoice === false && lowerCaseChoice === false && upperCaseChoice === false && numbersChoice === false) {
    alert("Please select one character type!");
    return;
  }

let passwordCharacterOptions = ''
 // Setting up a variable to add selected character strings
  if (specialCharactersChoice === true) {
    passwordCharacterOptions += specialCharacters
  }

  if(lowerCaseChoice === true){
    passwordCharacterOptions += lowerCaseCharacters
  }

  if (upperCaseChoice === true){
    passwordCharacterOptions += upperCaseCharacters
  }

  if (numbersChoice === true){
    passwordCharacterOptions += numberCharacters
  }
// Creating a variable array with all selected characters by spliting the string
  const allCharacters = passwordCharacterOptions.split('')
  
// Creating a function to randomly select the characters in the length selected by the user
  let finalPassword = [];
       for (let i = 0; i < passwordLengthChoice; i++ ){
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)]
          finalPassword.push(randomChar);
        };

        return finalPassword.join('')
}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

