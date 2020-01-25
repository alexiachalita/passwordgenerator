var textarea = document.getElementById('password');
var test = '';
var requirements = {
    length: null,
    specialCharacters: null,
    lowercaseCharacters: null,
    uppercaseCharacters: null,
    numericCharacters: null
}

var total = (specialCharacters + lowercaseCharacters + uppercaseCharacters + numericCharacters)

var specialCharacters = ["!", "\|", "#", "$", "%", "&", "*", "+", "-", ".", "/"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var generateEl = document.getElementById("generate")

var whatLength = prompt("How many characters would you like your password to contain?");
generateEl.addEventListener('click', function (event) {
    alert(whatLength);
    pushLengthToReq(whatLength);

    function pushLengthToReq(userEntry) {
        requirements.length = parseInt(userEntry);
    }
    function isSpecialCharacters() {
        var yesSpecial = confirm("Does your password include special characters?");

        if (yesSpecial === true) {
            requirements.specialCharacters = true;
        } else {
            yesSpecial = false;
        }

        return yesSpecial;

    }

    isSpecialCharacters();

    function isLowercaseCharacters() {
        var yesLower = confirm("Does your password include lowercase characters?");
        if (yesLower === true) {
            requirements.lowercaseCharacters = true;
            
        } else {
            yesLower = false;
        }
        return yesLower;
    }

    isLowercaseCharacters();

    function isUppercaseCharacters() {
        var yesUpper = confirm("Does your password include uppercase characters?");
        if (yesUpper === true) {
        requirements.uppercaseCharacters = true;
        } else {
            yesUpper = false;
        }
        return yesUpper;
    }
    isUppercaseCharacters();

    function isNumericCharacters() {
        var yesNumeric = confirm("Does your password include numeric characters?");
        if (yesNumeric === true) {
        requirements.numericCharacters = true;
        } else {
            yesNumeric = false;
        }
        return yesNumeric;
    }

    isNumericCharacters();

    function determineRequirementString() {
        var reqstring = []
        if (requirements.specialCharacters === true) {
            reqstring.push(specialCharacters);
        }
        if (requirements.lowercaseCharacters === true) {
            reqstring.push(lowercaseCharacters);

        }
        if (requirements.uppercaseCharacters === true) {
            reqstring.push(uppercaseCharacters);

        }
        if (requirements.NumericCharacters === true) {
            reqstring.push(numericCharacters);

        }
        console.log(reqstring);
        determineRequirementString();



        var passwordValue = '';
                for (var i = 0; i < whatLength; i++) {
                   passwordValue += 
          var randomnumber = (Math.floor(Math.random() * reqstring));


//         //call randomize which will return passoword
//         var randompass = randomize(reqstring, requirements.length);
//         randompass();

//     }



//     after required string is determined, within that function we will call randomize function which will return passwordValue
//     function randomize() {
//         var passwordValue = '';
//         for (var i = 0, n = string.length; i < length; ++i) {
//            passwordValue += 
//           var test = string.charAt(Math.floor(Math.random() * 9));
//         }
//         var i = passwordValue;
//         return passwordValue;

//     }
//     randomize();
//     console.log(test);
//     var finalanswer = alert("We're sorry - we are having technical difficulties at the moment, please check back later");


// })


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