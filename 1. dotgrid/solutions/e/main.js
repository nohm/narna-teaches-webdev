$(window).ready(function() {
  var dotgrid = $('#dotgrid');

  var grid_width = 7;
  var grid_height = 7;

  for(var i = 0; i < grid_width; i++) {
    for(var j = 0; j < grid_height; j++) {
      dotgrid.append(randomRGBDot());
    }
  }
});

function randomRGBDot() {
  var r = randomColor();
  var g = randomColor();
  var b = randomColor();

  return '<span class="dot" style="background-color:rgb(' + r + ',' + g + ',' + b +');"></span>'
}

function randomColor() {
  return Math.floor((Math.random() * 256) + 1);
}
