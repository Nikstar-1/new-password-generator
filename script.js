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
      return "You need to select at least one of the criteria for your password!";
    }

    var charactersForPassword = []; 
    var finalPassword = []; 

    if (confirmNumbers === true){
        charactersForPassword = charactersForPassword.concat(numbers); 
        finalPassword.push(numbers[Math.floor(Math.random() * numbers.length)])
    }

    if (confirmLower === true){
        charactersForPassword = charactersForPassword.concat(lower); 
        finalPassword.push(lower[Math.floor(Math.random() * lower.length)])
    }

    if (confirmUpper === true){
        charactersForPassword = charactersForPassword.concat(upper); 
        finalPassword.push(upper[Math.floor(Math.random() * upper.length)])
    }

    if (confirmSpecial === true){
        charactersForPassword = charactersForPassword.concat(special); 
        finalPassword.push(special[Math.floor(Math.random() * special.length)])
    }

    while(finalPassword.length < lengthOfPassword){
        finalPassword.push(charactersForPassword[Math.floor(Math.random() * charactersForPassword.length)])
    }
    return finalPassword.join('');
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
  var textArea = document.getElementById("password").select();
  if(textArea === ""){
    console.log("No password to copy yet as area is blank!!!")
  }else{  
    document.execCommand("copy");
    document.querySelector('#passClipoard').style.display = "block"
  }   
}
    
    
