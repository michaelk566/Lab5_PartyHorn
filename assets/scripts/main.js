// main.js

//document.getElementById("honk-btn-container").addEventListener("click", playHorn);
document.getElementById("volume-number").value = "60";

//var num = document.getElementById("volume-slider").value;
//document.getElementById("volume-number").value = num;
/*
function playHorn(){
  document.getElementById("volume-slider").value = "75";
 alert("worked");
 document.getElementById("volume-slider").value = "75";
 // document.getElementById("horn-sound").addEventListener('play');
 
}
*/

var slide = document.getElementById('volume-number');
    //sliderDiv = document.getElementById("volume-number").value;

slide.onchange = function() {
    //sliderDiv = this.value;
  alert(slide.value);
}

