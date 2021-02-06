// main.js

//document.getElementById("honk-btn-container").addEventListener("click", playHorn);

/*
function playHorn(){
  document.getElementById("volume-slider").value = "75";
 alert("worked");
 document.getElementById("volume-slider").value = "75";
 // document.getElementById("horn-sound").addEventListener('play');
 
}
*/

var num = document.getElementById('volume-number');

var slider = document.getElementById('volume-slider');


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

