let slider = document.querySelector(".i_slide");
let images = ['main_img.png', 'bg_hotel.jpg', 'r_hotel.jpg'];
let i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length-1) i=-1;
    i++;
  
  return setImg();
}

function setImg() {
  return slider.setAttribute('src', 'images/' + images[i]);
}