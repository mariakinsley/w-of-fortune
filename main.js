var $ = function(id) {

    return document.getElementById(id);

};

// iniciando array
// string
var game = ["MARIA", "WATER", "CAT", "CHEESE", "MOUSE"];

var choice = Math.floor(Math.random() * 6);

var answer = game[choice];

var myLength = answer.length;

var display = myLength;

var win = myLength;

var letters = answer.split('');

var attemptsLeft = 5;

var output = "";

var words = document.getElementById("game");

var userLetter = "";
var undescores = document.getElementById("undescores");
var letterinput = document.getElementById("letter").value;
var form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    comparing();
});


function comparing() {
    var letterinput = document.getElementById("letter").value;

    console.log(letterinput);
    console.log(answer);


    for (var i = 0; i < letters.length; i++) {
        // letters[i] = "_ ";
        console.log('letters[i]',letters[i]);
        console.log('letterinput',letterinput);
        console.log("");
if (letters.output === to letterinput[i]) {

}

        // output = output + letters[i];
      }
        // ("winner");

}
// comparing();
// =========================================================
function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }  

var setup = function() {
    // (answer);
    for (var i = 0; i < letters.length; i++) {

        output = output + "_ ";

    }
    document.getElementById("game").innerHTML = output;

    output = "";
};
setup();
var submit = function(){


    // output = "";

    userLetter = jQuery("#letter").val();
    jQuery("#letter").val = "";

    for (var c = 0; c < answer.length; c++){



    if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
        }
    else {
        output = output + display[c] + " ";
    }

    document.getElementById("game").innerHTML = output;
    output = "";

    attemptsLeft--;

    if (win < 1){


        document.getElementById("win").innerHTML = "YOU WIN!";
        document.getElementById("win").style.color = ("red");

    } else if (attemptsLeft < 1){


        document.getElementById("guesses").innerHTML = "YOU LOSE!!";
    } else {


        document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
        document.getElementById("guesses").style.color = ("red");
    }

}};
window.onload = function(){



    // ("MARIA");

    // setup();

    //$("#submit").onclick = submit;

};
// (answer)
// =====================================================================
