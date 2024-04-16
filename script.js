let slider = document.querySelector(".i_slide");
let images = ['main_img.png', 's_hotel.jpg', 't_hotel.jpg'];
let i = 0;

// Bouton preview //
function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

// Bouton next //
function next() {
  if (i >= images.length-1) i=-1;
    i++;
  
  return setImg();
}

function setImg() {
  return slider.setAttribute('src', 'images/' + images[i]);
}