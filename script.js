
//function that starts the generate password process
function generatePassword() {

//const are never changing and are used to make a random password.
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeric = '0123456789';
const specialChar = '!@#$%^&*()_+{}[]|;:<>,.?/~'

//charset needs to be an empty string so that you can put the const's in it to provide the password with what they have picked.
var  charset = "";



let password = "";
var passwordLength;

//created function to ask the user to input a certain number of charcters they want their password to be. if they pick not in the expected range the fuction will restart and ask again until they pick in between them.
showPromt();

function showPromt()
{
var includePasswordLength = prompt("How Long do you want the password to be from 8 - 128?", 8)
  if( includePasswordLength < 8 || includePasswordLength > 128)
  {
    alert("The number you have picked is invalid. Pick a number between 8 - 128.")
    showPromt();
  }
    else
    {
      //making the passwordLength into whatever the input from the user makes it!
      passwordLength = includePasswordLength;
    }
}

//confirm methods are used as boolean values to make sure you want certain characters in your password.
var includeLowercase = confirm("Include lowercase characters? Hit Cancel for No.");
var includeUppercase = confirm("Include uppercase characters? Hit Cancel for No.");
var includeNumeric = confirm("Include numeric characters? Hit Cancel for No.");
var includeSpecialChars = confirm("Include special characters? Hit Cancel for No.");

//if statements are used to evaluate if the confirm method was true or false. if true it will allow that const value in the charset. if false it will skip over and go to the next if statement.
if(includeLowercase === true)
{
  charset += lowercase;
}
  else
  {
    charset;
  }

if(includeUppercase === true){
    charset += uppercase;
  }else{
    charset;
  }

if(includeNumeric === true)
{
  charset += numeric;
}
  else 
  {
    charset;
  }
if(includeSpecialChars === true)
{
  charset += specialChar;
}
  else
  {
    charset;
  }
  

  //for loop provides based on the length of the charset it will produce a random password, and return it.
for (let i = 0; i < passwordLength; i++) {
const randomIndex = Math.floor(Math.random() * charset.length);
password += charset[randomIndex];
}

return password;

}


// Assignment Code
let generateBtn = document.querySelector("#generate"); // this identifies the button on the html document.

// Write password to the #password input
function writePassword() 
{ //this starts the function generate password which we make the password random.
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //this starts the function writepassword.





