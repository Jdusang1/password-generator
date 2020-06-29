// Assignment Code
var numbers = [0,1,2,3,4,5,6,7,8,9]
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var characters = "!@#$%^&*()?><:"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var choice = [numbers, lowerCase, upperCase, characters]

function passwordOptions(){
  var length = prompt("How many characters would you like to use between 7-128?")
  if (isNaN(length)===true){
      alert("Use a number")
      return
  }

  if (length > 128 || length < 7){
    alert("password needs to be more than 7 and less than 128 characters")
    return
  }

  var specialChar = confirm("click of to confirm using special characters")
  var num = confirm("click of to confirm using numbers")
  var capital = confirm("click of to confirm using capital letters")
  var lower = confirm("click of to confirm using lower case letters")

  if (specialChar === false && num === false && capital === false && lower === false){
    alert("must select at least one of these character types!")
    return
  }
  var options = {
    length: length,
    specialChar: specialChar,
    num: num,
    capital: capital,
    lower:lower,
  }
  return options

}

function randomSelection(arr){
   var randomIndex = Math.floor(Math.random()*arr.length)
   var randomElement = arr [randomIndex]
   return randomElement
}

function generatePassword(){
  var optionsPassword = passwordOptions()
  var result = []

  if (optionsPassword.specialChar){
    result.push(randomSelection(characters))
  }
  if (optionsPassword.num){
    result.push(randomSelection(numbers))
  }
  if (optionsPassword.capital){
    result.push(randomSelection(upperCase))
  }
  if (optionsPassword.lower){
    result.push(randomSelection(lowerCase))
  }
  while(result.length < optionsPassword.length) {
    var selection = randomSelection(choice)
    result.push(randomSelection(selection))
  }

  return result.join("")
}

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
