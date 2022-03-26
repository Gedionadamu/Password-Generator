// Assignment Code
var generateBtn = document.querySelector("#generate");
// characters to choosse from
var special_characters=["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]

var uppercase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ]

var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// add mulitple copies of the number arry to adjust for porbablity.
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// getting elements from DOM. 
// and setting a variable for it.
var pass_lengthEl = document.querySelector("#length");
var lowercheckedEl= document.querySelector("#lowercase");
var uppercheckedEl = document.querySelector("#uppercase");
var numericcheckedEl = document.querySelector("#numeric");
var specialcheckedEl = document.querySelector("#special");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// generates password by adding concatinating and randomizing arrays.
function generatePassword(){
 
 // sets different variables for the values we get from elements
  var length_ = pass_lengthEl.value;
  var upper_ = uppercheckedEl.checked;
  var numeric_= numericcheckedEl.checked;
  var special_= specialcheckedEl.checked;
    
   
  
  // sets lowercase characters to be the pool from which to randomize
  let coolchars = lowercase;
  //adds uppercase characters to pool
  if(upper_) coolchars = coolchars.concat(uppercase)
  //adds numeric to characters to pool
  if(numeric_ )coolchars = coolchars.concat(numeric)
  //adds special characters to pool
  if(special_ ) coolchars = coolchars.concat(special_characters)
 
  // creates a array to add the random chartchters created
  var genpassword = []
  //creates a loop to create random characters. 
  for(let i=0; i < length_; i++) {
    var char = coolchars[Math.floor(Math.random()* coolchars.length)];
    genpassword.push(char);  
    
    
  }
  // returns the generated password as a string.
  return genpassword.join('');
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
