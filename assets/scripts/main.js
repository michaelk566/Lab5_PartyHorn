// main.js

document.getElementById("honk-btn-container").addEventListener("click", playHorn);

function playHorn(){
 alert("worked");
 document.getElementById("volume-slider").value = "75";
  document.getElementById("horn-sound").addEventListener('play');
 
}
