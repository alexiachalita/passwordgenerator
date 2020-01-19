var textarea = document.getElementById('password');

var requirements = {
    length: null,
    specialCharacters: null,
    lowercaseCharacters: null,
    uppercaseCharacters: null,
    numericCharacters: null
}

var specialCharacters = ["!", "\|",  "#", "$", "%", "&", "*", "+", "-", ".", "/"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var generateEl = document.getElementById("generate")

generateEl.addEventListener('click',function(event){
var whatLength = prompt("How many characters would you like your password to contain?");
alert(whatLength);
function whatLength(userEntry) {
    requirements.length = userEntry; 
}
event();

function isSpecialCharacters() {
    var yesSpecial = confirm ("Does your password include special characters?");

if (yesSpecial === true) {
specialCharacters = userpickedspecialchar ();
}

else {
yesSpecial = false;
}

}

isSpecialCharacters();

function isLowercaseCharacters() {
    var yesLower = confirm ("Does your password include lowercase characters?");
    if (yesLower === true) {
    lowercaseCharacters = userpickedlower ();
}
    
    else {
    yesLower = false;
    }

}

isLowercaseCharacters();

function isUppercaseCharacters() {
var yesUpper = confirm ("Does your password include uppercase characters?");
    if (yesUpper === true) {
    UppercaseCharacters = userpickedupper ();
    }
        
    else {
    yesUpper = false;
    }

}
isUppercaseCharacters();

function isNumericCharacters() {
var yesNumeric = confirm ("Does your password include numeric characters?");
    if (yesNumeric === true) {
    NumericCharacters = userpickednumeric (); 
    }
            
    else {
    yesNumeric = false;
    }
   
    }

    isNumericCharacters();
        
function determineRequirementString() {
    var reqstring = ''
    if (yesSpecial === true) {
        reqstring = reqstring.concat(specialCharacters);
    }
    if (yesLower === true) {
        reqstring = reqstring.concat(lowercaseCharacters);
    }
    if (yesUpper === true) {
        reqstring = reqstring.concat(uppercaseCharacters);
    }
    if (yesNumeric === true) {
        reqstring = reqstring.concat(numericCharacters);
    }
 //call randomize which will return passoword
 var randompass = randomize(reqstring, requirements.length);
randompass();

}

determineRequirementString();


//after required string is determined, within that function we will call randomize function which will return passwordValue
function randomize(string, length) {
    var passwordValue = ''
    for (var i = 0, n = string.length; i < length; ++i) {
        passwordValue += string.charAt(Math.floor(Math.random() * n))
    }
    var i = passwordValue;
    return passwordValue;

}
randomize();

var finalanswer = alert ("We're sorry - we are having technical difficulties at the moment, please check back later");


})


//target id text area


document.body.style.backgroundColor = "lightgray";
document.getElementById("title").style.textAlign = "center";
document.getElementById("title").style.color = "gray";
document.getElementById("bigone").style.backgroundColor = "white";
document.getElementById("bigone").style.height = "500px";
document.getElementById("bigone").style.paddingTop = "15px";
document.getElementById("bigone").style.marginleft = "30px";
document.getElementById("bigone").style.paddingLeft = "5%";
document.getElementById("bigone").style.paddingRight = "5%";
document.getElementById("password").style.height = "150px";
document.getElementById("password").style.width = "100%";
document.getElementById("generate").style.backgroundColor = "red";
document.getElementById("generate").style.color = "white";
document.getElementById("copy").style.backgroundColor = "gray";
document.getElementById("copy").style.color = "white";
document.getElementById("copy").style.height = "35px";
document.getElementById("copy").style.width = "105px";
document.getElementById("generate").style.height = "35px";
document.getElementById("generate").style.width = "105px";
document.getElementById("password").style.textAlign = "center";
document.body.style.paddingLeft = "20px";
document.body.style.paddingRight = "20px";




















