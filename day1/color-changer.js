/*function changeColor(){
  document.body.style.background = "#BCF269";
  document.body.style.background = "#69CBF2";
}*/
function makeRandomColor() {
  var color = '#';
  var letters = "0123456789ABCDEF".split('');

  for(i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  document.body.style.background = color;
}
