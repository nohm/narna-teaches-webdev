$(window).ready(function() {
  $('#dotgrid').dotgrid();
});

$.fn.dotgrid = function() {
  var grid_width = this.data('width');
  var grid_height = this.data('height');

  for(var i = 0; i < grid_width; i++) {
    for(var j = 0; j < grid_height; j++) {
      this.append(randomHexDot());
    }
  }

  function randomHexDot() {
    var r = randomColor();
    var g = randomColor();
    var b = randomColor();

    return '<span class="dot" style="background-color:#' + r + g + b + ';"></span>'
  }

  function randomColor() {
    return leadZero(Math.floor((Math.random() * 256) + 1).toString(16));
  }

  // Adds a zero to a string if it's only one char long
  // Hex requires that the input values are always two chars long
  function leadZero(n) { return ('0' + n).slice(-2); }
};
