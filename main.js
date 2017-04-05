var $ = function (id) {

    return document.getElementById(id);

}

// iniciando array

var game = ["MARIA", "WATER", "CAT", "CHEESE", "DOG", "MOUSE"]

var choice = Math.floor(Math.random()*6)

var answer = game[choice];

var myLength = answer.length;

var display=[myLength];

var win = myLength;

var letters = answer.split('');

var attemptsLeft= 10;

var output="";

var userLetter="";






var setup = function()
{
alert(answer);
    for (var i=0; i<answer.length; i++)
    {
        display[i] = "_ ";

        output = output + display[i];

    }
    document.getElementById("game").innerHTML = output;

    output ="";
}
var submit = function()

{
    output = "";

    userLetter = jQuery("#letter").val();
    jQuery("#letter").val ="";

    for (var c= 0; c<answer.length; c++)

        //alert(letters[c]);

        if (userLetter.toUpperCase() == letters[c])
        {
            display[c] = userLetter.toUpperCase();
            win--;
        }
        else
        {
            output = output + display[c] + " ";
        }

    document.getElementById("game").innerHTML = output;
    output="";

    attemptsLeft--;

    if (win < 1)

    {
        document.getElementById("guesses").innerHTML ="YOU WIN!";
    }
    else if (attemptsLeft < 1)

    {
        document.getElementById("guesses").innerHTML ="YOU LOSE!!";
    }
    else

    {

        document.getElementById("guesses").innerHTML ="You have " + attemptsLeft + " guesses left";
    }

};
window.onload = function()

{

alert("MARIA");

    setup();

    //$("#submit").onclick = submit;

}
    //alert(answer)
// =====================================================================
$(document).ready(function(){
  var degree = 30;
  $("button").click(function(){
    randomSpin();
    $("img").css({"transform":"rotate(" + degree + "deg)"});
    console.log(degree);
  });

  function randomSpin(){
    var random = Math.floor(Math.random() * (740 - 30)) + 30;
    degree = degree + random;
  };


});
