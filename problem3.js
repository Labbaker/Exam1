"use strict";
(function(){
  window.onload = function() {
    newEq();
    document.getElementById("guess").addEventListener("click", Check);
  };

  function newEq(){
    document.getElementById("first").innerHTML = Math.floor(Math.random()*100);
    document.getElementById("second").innerHTML = Math.floor(Math.random()*100);
    document.getElementById("error").innerHTML = "";
  }

  function Check(){
    var guess = document.getElementById("answer").value;

    if(guess == parseInt(document.getElementById("first").innerHTML) + parseInt(document.getElementById("second").innerHTML)){
      New("correct");
    }
    else {
      New("incorrect")
    }
  }

function New(flag){
  var correct = document.getElementById(flag).innerHTML;
  correct.split(" ");
  correct = parseInt(correct[0]);
  correct = correct + 1;
  document.getElementById(flag).innerHTML = correct + " " + flag;
  if(flag == "incorrect"){
    document.getElementById("error").innerHTML = "please try again";
  }
  else{
    newEq();
  }
}

})();
