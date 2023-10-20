// Assignment Code
const generateBtn = document.querySelector("#generate");
const specialCharacters = ")(*&^%$#@!~`-_=+,.<>/?;:";
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  const passwordLengthChoice = prompt("Please choose the length of your password between 8 and 128 characters.")
  const specialCharactersChoice = confirm("Do you want special characters in your password?");
  const lowerCaseChoice = confirm("Do you want lower case characters in your password?");
  const upperCaseChoice = confirm("Do you want upper case characters in your password?");
  const numbersChoice = confirm("Do you want numbers in your password?")
}

if (passwordLengthChoice >= 8) {
  if (passwordLengthChoice <= 128) {

      let returnPassword = {
        specialCharacterQuantity = function() {
          return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
        },

        lowerCaseQuantity = function() {
          return lowerCaseCharacters(Math.floor(Math.random() * lowerCaseCharacters.length));
        },

        upperCaseQuantity = function() {
          return upperCaseCharacters(Math.floor(Math.random() * upperCaseCharacters.length));
        },

        numberQuantity = function() {
          return (Math.floor(Math.random() * 10));
        }
      }

      let specialCount = "";
      let lowerCaseCount = "";
      let upperCaseCount = "";
      let numberCount = "";

      let randomPassword = "";
      let minCharacter = 0;

      if (specialCharactersChoice === true) {
        specialCount = returnPassword.specialCharacterQuantity();
        minCharacter++;
      }

      if (lowerCaseChoice === true) {
        lowerCaseCount = returnPassword.lowerCaseQuantity();
        minCharacter++;
      }

      if (upperCaseChoice === true) {
        upperCaseCount = returnPassword.upperCaseQuantity();
        minCharacter++;
      }

      if (numbersChoice === true) {
        numberCount = returnPassword.numberQuantity();
        minCharacter++;
      }


    for (let i = 0; i <= passwordLengthChoice; i++ ){

      randomPassword =+ 
    };
  }
  else {
      document.getElementById("#password") = "Password Length must be between 8 and 128 characters."
  };
}

else  {
  document.getElementById("#password") = "Password Length must be between 8 and 128 characters."
};