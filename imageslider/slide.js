var imagecount = 1;
var total = 4;

function slide(x) {
  var image = document.getElementById('img');
  imagecount += x;
  if(imagecount > total)
  {imagecount = 1;}
  if(imagecount < 1)
  {imagecount = total;}
  image.src = "images/img" + imagecount + ".jpg";
}


// [img1.jpg, img2.jpg, img3.jpg, img4.jpg]
//
// imagecount = 1;
//
// when I press left button I should havigate one position to the left.
// when I press right button I should havigate one position to the right.
//
//
// Test case
// my current image displayed is img2.jpg
// when I press left button I should havigate one position to the left => img2 => img1 img(2-1).jpg
//
// my current image displayed is img2.jpg
// when I press right button I should havigate one position to the right => img2 => img3 imag(2+1).jpg
//
//
// my current position is in variable imagecount
// filename will be formed "img"+imagecount+".jpg"
// imagecount-1
// imagecount+1
//
// function slideToLeft() {
//   var image = document.getElementById('img');
//   imagecount = imagecount - 1 ;
//   if(imagecount > total) {imagecount = 1;}
//   if(imagecount < 1) {imagecount = total;}
//   image.src = "images/img" + imagecount + ".jpg";
// }
//
// function slide(positionToMove) {
//   var image = document.getElementById('img');
//   imagecount = imagecount + positionToMove ;
//   if(imagecount > total) {imagecount = 1;}
//   if(imagecount < 1) {imagecount = total;}
//   image.src = "images/img" + imagecount + ".jpg";
// }
//
// slide(-1) => left
// slide(1) => right
