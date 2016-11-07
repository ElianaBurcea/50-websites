window.onload = function(){

  var allSlides;
  var slideContainer;

  slideContainer = document.getElementsByClassName("slider-container")[0];
  allSlides = slideContainer.getElementsByClassName("slide");

  for (i = 0; i < allSlides.length; i++){
      allSlides[i].className = allSlides[i].className  + " hidden-image";
  }

  randomIndex = Math.floor(Math.random() * allSlides.length);

  allSlides[randomIndex].className = allSlides[randomIndex].className.replace(" hidden-image",' active-image');


  document.getElementById("change_slider").onclick = function(){

    var currentActiveImages;

    currentActiveImages = document.getElementsByClassName("active-image");
    for (i = 0; i < currentActiveImages.length; i++){
      currentActiveImages[i].className = currentActiveImages[i].className.replace(" active-image"," hidden-image");
    }

    randomIndex = Math.floor(Math.random() * allSlides.length);

    allSlides[randomIndex].className = allSlides[randomIndex].className.replace(" hidden-image",' active-image');

  };
}


// Am o lista L de imagini
// L = imagine1, imagine2, imagine3, imagine4
//
// Una dintre imagini este afisata = inseamna ca NU ARE class "hidden-image".
// Imagine afisata are clasa "active-image"
//
// Ia imagine activa ce are clasa "active-image" si inlocuieste "active-image" cu "hidden-image"
