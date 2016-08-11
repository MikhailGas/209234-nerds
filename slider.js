function slide() {
  
  for (var j=0; j < col; j++) {
    slider[j].style.display = 'none';
  }
  slider[i].style.display = 'block';
  i += 1;
  if (i == col) i = 0;
}
var slider  = document.body.getElementsByClassName('slider');

var col = slider.length;
var i = 0;
setInterval(slide,3000);