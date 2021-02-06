// main.js

//document.getElementById("honk-btn-container").addEventListener("click", playHorn);
document.getElementById("volume-number").value = "10";

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
document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg";
var num = document.getElementById('volume-number');

var slider = document.getElementById('volume-slider');
    //sliderDiv = document.getElementById("volume-number").value;

num.onchange = function() {
    slider.value = num.value;
  
}

slider.onchange = function() {
    num.value = slider.value;
  
}

