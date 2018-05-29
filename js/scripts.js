$(document).ready(function() {
  $(".clickable").click(function() {
    $("#item-showing").slideToggle();
    $("#item-hidden").slideToggle();
  });
});
