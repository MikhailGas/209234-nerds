function slide() {
  'use strict';
  slider[i].checked = true;
  i += 1;
  if (i >= col) {
    i = 0;
  }
}
var slider  = document.body.getElementsByTagName('input');
var col = slider.length;
var i = 1;
setInterval(slide, 3000);