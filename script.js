// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var legalChars = [];

// Function to prompt user for password options
function getPasswordOptions() {
  var user = prompt("How many characters should the password be? \nPlease input any number that is at least 10 but no larger than 64.");

  while (isNaN(user) || user > 64) {
    alert("Please input any number that is at least 10 but no larger than 64.");
    user = prompt("How many characters should the password be? \nPlease input any number that is at least 10 but no larger than 64.");
  }

  var u = confirm("Are uppercase letters allowed?");
  var l = confirm("Are lowercase letters allowed?");
  var n = confirm("Are numeric characters allowed?");
  var s = confirm("Are special characters such as $,@,%,&,and * allowed?");

  if (u) {
    legalChars = legalChars.concat(upperCasedCharacters); 
  } 
  if (l) {
    legalChars = legalChars.concat(lowerCasedCharacters); 
  } 
  if (n) {
    legalChars = legalChars.concat(numericCharacters); 
  } 
  if (s) {
    legalChars = legalChars.concat(specialCharacters); 
  } 

  return parseInt(user);
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  var pass = "";
  var op = getPasswordOptions();

  while (legalChars == 0) {
    alert("Please choose at least one character type.");
    op = getPasswordOptions();
  }

  for (let i = 0; i < op; i++) {
    pass = pass + getRandom(legalChars);
  }

  legalChars = [];
  return pass;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);