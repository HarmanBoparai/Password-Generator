// Assignment code here
var generateBtn=document.querySelector("#generate")
var lowercase=[  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var uppercase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numbers=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialcharacters=['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var pwdoptions=[];

function randomInt(min,max){
  if(!max) {
max=min
min=0
  }
  var rand=Math.random()
  return Math.floor(min*(1-rand)+rand*max)
}

function getRandomItem(list){
return list[randomInt(list.length)]
}

function generatePassword(){
  while (true){

  var userInput=window.prompt("How long do you want your password should be?")
  var pwdLength=parseInt(userInput)

  if (isNaN(pwdLength)){
    window.alert("It's not a number!")
  } else if (pwdLength<8 || pwdLength >128)
{
  window.alert("Invalid password length,The password length must be between 8 and 128 characters")
}  else{
  break
}
  }

var userWantNumbersinpwd = window.confirm("Do you like to include numbers in your password?")
var userWantSymbolsinpwd = window.confirm("Do you like to include symbols in your password?")
var userWantLowercaseinpwd = window.confirm("Do you like to include lowercase letters in your password?")
var userWantSymbolsinpwd = window.confirm("Do you like to include uppercase in your password?")

if (userWantNumbersinpwd===true){
pwdoptions.push(numbers)
}

if (userWantSymbolsinpwd===true){
  pwdoptions.push(specialcharacters)
  }

if (userWantLowercaseinpwd===true){
    pwdoptions.push(lowercase)
    }

if (userWantLowercaseinpwd===true){
      pwdoptions.push(uppercase)
      }
if (pwdoptions.length===0){
        pwdoptions.push(uppercase)
        }

var generatePassword= ""
for(var i=0;i<pwdLength;i++){
  var randomlist=getRandomItem(pwdoptions)
  var randomchar=getRandomItem(randomlist)
  generatePassword += randomchar
}
return generatePassword
    }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
