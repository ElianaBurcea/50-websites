function selectColor(pressed_color){
  document.getElementById("color_chosen").innerHTML=pressed_color;
}
function color_me(element_id){
  document.getElementById(element_id).style.backgroundColor = document.getElementById("color_chosen").innerHTML;
}
elements_in_page = document.getElementsByClassName("clickable")
for (i=0; i < elements_in_page.length; i++){
  elements_in_page[i].onclick=apply_color;
}
function apply_color(){ 
  this.style.backgroundColor = document.getElementById("color_chosen").innerHTML;
}
