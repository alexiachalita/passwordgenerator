var requirements = {
    length: 0,
    specialCharacters: null,
    lowercaseCharacters: null,
    uppercaseCharacters: null,
    numericCharacters: null
}

var specialCharacters = "!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "0123456789"

var generateEl = document.getElementById("generate")

generateEl.addEventListener('click',function(event){

prompt("How many characters would you like your password to contain?");
function whatLength(userEntry) {
    requirements.length = userEntry; 
}

confirm("Does your password include special characters?");
function isSpecialCharacters(userEntry) {
        if (userEntry === 'ok') {
            requirements.specialCharacters = true;
        }
    }

confirm("Does your password include lowercase characters?");
function isLowercaseCharacters(userEntry) {
        if (userEntry === 'ok') {
            requirements.lowercaseCharacters = true;
            }
        if (confirm("Does your password include lowercase characters?")) {
       alert("you want lowercase!");}
        }

confirm("Does your password include uppercase characters?");
function isUppercaseCharacters(userEntry) {
        if (userEntry === 'ok') 
                requirements.uppercaseCharacters = true;
        }

confirm("Does your password include numeric characters?");
function isNumericCharacters(userEntry) {
        if (userEntry === 'ok') {
                requirements.numericCharacters = true;}
        }

        
function determineRequirementString() {
    var reqstring = ''
    if (requirements.specialCharacters) {
        reqstring += specialCharacters;
    }
    if (requirements.lowercaseCharacters) {
        reqstring += lowercaseCharacters;
    }
    if (requirements.uppercaseCharacters) {
        reqstring += uppercaseCharacters;
    }
    if (requirements.numericCharacters) {
        reqstring += numericCharacters
    }
 //call randomize which will return passoword
 randomize(reqstring, requirements.length)

}
//after required string is determined, within that function we will call randomize function which will return passwordValue
function randomize(string, length) {
    var passwordValue = ''
    for (var i = 0, n = string.length; i < length; ++i) {
        passwordValue += string.charAt(Math.floor(Math.random() * n))
    }
    var i = passwordValue;
    return passwordValue;
}
alert(passwordValue);

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




















