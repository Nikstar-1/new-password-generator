var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lower = ['a','b','c','d','e','f','g','h','i','j', 'k', 'l','m','n','o','p', 'q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var special = ['!','@','#','*','('];
 
function generatePassword() {
    var lengthOfPassword = parseInt(prompt('How long do you want your password to be?'));
    
    if (lengthOfPassword < 8 ) {
      alert("Password length must be between 8-128 characters Try again?");
     return 'Try Again'; 
    }
    if (lengthOfPassword > 128 ) {
      alert("Password length must be between 8-128 characters Try again?");
     return 'Try Again'; 
    }
  
    var confirmNumbers = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
    var confirmSpecial = confirm ("click OK to confirm if you would like to include special characters");
    while(confirmUpper === false && confirmLower === false && confirmSpecial === false && confirmNumbers === false) {
      alert("You must choose at least one parameter");
    }


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
function copied() {	
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("The password has been copied to your clipboard!");
     }
    
    }
