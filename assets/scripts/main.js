// main.js

alert("test1");



var audio = document.getElementById('horn-sound');

var num = document.getElementById('volume-number');

var slider = document.getElementById('volume-slider');

var button = document.getElementById("honk-btn");

var radio = document.getElementById("radio-air-horn-container");

var sImage = document.getElementById("sound-image");


document.getElementById("radio-air-horn").addEventListener("click", help);


function help(){
 alert("air");
}

document.getElementById("radio-car-horn").addEventListener("click", playHorn);


function playHorn(){
 alert("car");
}

document.getElementById("radio-party-horn").addEventListener("click", isParty);


function isParty(){
 alert("party");
}


num.onchange = function() {
    slider.value = num.value;
    audio.volume = Number(num.value);
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
    audio.volume = Number(slider.value);
 
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

