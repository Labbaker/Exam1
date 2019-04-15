"use strict";
(function(){
  window.onload = function() {
    document.getElementById("add").addEventListener("click", Add);
    document.getElementById("show").addEventListener("click", Show);
  }

  function Add(){
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("buttons").innerHTML = "<div>Click a button:</div>";
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var i;
    for(i = min; i <= max; i++){
      document.getElementById("buttons").innerHTML += "<button id= " + i + ">" + i + "</button>";
    }
  }

  function Show(){
    var divisor = parseInt(document.getElementById("divisor").value);
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var i;
    for(i = min; i <= max; i++){
      if(i%divisor == 0){
        document.getElementById(i).style.color = "red";
      }
      else{
        document.getElementById(i).style.color = "black";
      }
    }
  }
})();
