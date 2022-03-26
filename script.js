// Assignment Code
var generateBtn = document.querySelector("#generate");
// characters to choosse from
var special_characters=["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]

var uppercase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ]

var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// randomizing characters and no before mixing. 
// var random_special_characters = special_characters[Math.floor(Math.random(special_characters)* special_characters.length)];
// var random_uppercase = uppercase[Math.floor(Math.random(uppercase)* uppercase.length)];
// var random_lowercase = lowercase[Math.floor(Math.random(lowercase)* lowercase.length)];
// var random_no = numeric[Math.floor(Math.floor(Math.random(numeric)*numeric.length))];
// console.log(random_lowercase)
// getting elements from DOM. 
var pass_lengthEl = document.querySelector("#length");
var lowercheckedEl= document.querySelector("#lowercase");
var uppercheckedEl = document.querySelector("#uppercase");
var numericcheckedEl = document.querySelector("#numeric");
var specialcheckedEl = document.querySelector("#special");

// // getting value of element
// document.addEventListener("click", () => {
//   var length_ = pass_lengthEl.value;
//   var lower_ = lowercheckedEl.checked;
//   var upper_ = uppercheckedEl.checked;
//   var numeric_= numericcheckedEl.checked;
//   var special_= specialcheckedEl.checked;
  
//   console.log (length_)
// });

// console.log(confirm)



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
 
  document.addEventListener("click", () => {
    var length_ = pass_lengthEl.value;
    var upper_ = uppercheckedEl.checked;
    var numeric_= numericcheckedEl.checked;
    var special_= specialcheckedEl.checked;
    
   
  
  
  let coolchars = lowercase;
  if(upper_) coolchars = coolchars.concat(uppercase)
  if(numeric_ )coolchars = coolchars.concat(numeric)
  if(special_ ) coolchars = coolchars.concat(special_characters)
 

  var genpassword = []
  for(let i=0; i < length_; i++) {
    var char = coolchars[Math.floor(Math.random()* coolchars.length)];
    genpassword.push(char);  
    
    
  }
  console.log(genpassword)
  
  });
  return genpassword.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
