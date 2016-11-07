// When user clicks on a color, save the color somewhere so that we know what color was chosen
// When user clicks on a cell, set the cell background to the previously saved color.
//
//
//

function selectColor(pressed_color){
  console.log("You have chosen "+pressed_color);
  the_div = document.getElementById(pressed_color);
  the_chosen_color = the_div.style.backgroundColor;
  document.getElementById("color_chosen").innerHTML=the_chosen_color;
}


//put the function applyColor as the on click function for the row => this == row


function applyColor(){
  color = document.getElementById("color_chosen").innerHTML;
  this.style.backgroundColor = color;
}


function editInPlace(){
  this.innerHTML='<input type="text" id="edit_in_place">';
}

cells_to_be_clicked = document.getElementsByClassName("clickable");
for (i=0; i< cells_to_be_clicked.length; i++){
  cells_to_be_clicked[i].onclick = editInPlace;
}

// function selectColor(){
//   var color = document.getElementById('colour_palette').querySelectorAll(".selection");
// }
// selectColor();

// function applyColor(){
//   cellcount = Math.floor(Math.random() * 5);
//   rowcount = Math.floor(Math.random() * 5);
//   var box = 'row' + rowcount + '_' + 'cell' + cellcount;
//   document.box.style.backgroundColor =
// }
