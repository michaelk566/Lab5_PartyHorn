// main.js

alert("test7");


var audio = document.getElementById('horn-sound');

var num = document.getElementById('volume-number');

var slider = document.getElementById('volume-slider');

var button = document.getElementById("honk-btn");

var radio = document.getElementById("radio-air-horn-container");

var sImage = document.getElementById("sound-image");


document.getElementById("radio-air-horn").addEventListener("click", isAir);


function isAir(){
 audio.src = "./assets/media/audio/air-horn.mp3";
 sImage.src = "./assets/media/images/air-horn.svg";
 
}
document.getElementById("radio-car-horn").addEventListener("click", isCar);

function isCar(){
 audio.src = "./assets/media/audio/car-horn.mp3";
 sImage.src = "./assets/media/images/car.svg";
}
document.getElementById("radio-party-horn").addEventListener("click", isParty);

function isParty(){
 audio.src = "./assets/media/audio/party-horn.mp3";
 sImage.src = "./assets/media/images/party-horn.svg";
}

num.onchange = function() {
    slider.value = num.value;
    //audio.volume = Number(num.value);
 
    if(num.value == 0){
      button.disabled = true;
     
    }
    else{
      button.disabled = false;
    }
 
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
   // audio.volume = Number(slider.value);
   if(slider.value == 0){
      button.disabled = true;
     
    }
    else{
      button.disabled = false;
    }
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

