$(window).ready(function() {
  $('#dotgrid').dotgrid();
});

$.fn.dotgrid = function() {
  // Width and height can be gotten from data-attributes
  // Loops go here

  function randomHexDot() {
    // Copy hex method from task F
  }

  function randomColor() {
    // Copy random color method from task F
  }

  // Adds a zero to a string if it's only one char long
  // Hex requires that the input values are always two chars long
  function leadZero(n) { return ('0' + n).slice(-2); }
};
