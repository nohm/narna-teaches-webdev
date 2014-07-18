$(window).ready(function() {
  var dotgrid = $('#dotgrid');
  var dot = '<span class="dot"></span>';

  var grid_width = 7;
  var grid_height = 7;

  for(var i = 0; i < grid_width; i++) {
    for(var j = 0; j < grid_height; j++) {
      dotgrid.append(dot);
    }
  }
});
