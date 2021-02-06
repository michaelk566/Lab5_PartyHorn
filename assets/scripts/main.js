// main.js

document.getElementById("radio-car-horn").addEventListener("click", playHorn);


function playHorn(){
 alert("worked");
}


var audio = document.getElementById('horn-sound');

var num = document.getElementById('volume-number');

var slider = document.getElementById('volume-slider');

var button = document.getElementById("honk-btn");

var radio = document.getElementById("radio-air-horn-container")

if (document.getElementById("radio-air-horn").checked) {
  alert("yo");
}
num.onchange = function() {
    slider.value = num.value;
  
    if(num.value >= 67){
      document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg";
    }
    
    else if(num.value <= 66 && num.value >= 34){
      document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg";
      
    }
  
  
    else if(num.value > 0){
      document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg";
    }
  
    else{
      document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg";
    }
    
  
  
}

slider.onchange = function() {
    num.value = slider.value;
  
    if(slider.value >= 67){
      document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg";
    }
    
    else if(slider.value <= 66 && num.value >= 34){
      document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg";
      
    }
  
  
    else if(slider.value > 0){
      document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg";
    }
  
    else{
      document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg";
    }
  
}
button.addEventListener("click", function(event){
  event.preventDefault();
  audio.play();
});

