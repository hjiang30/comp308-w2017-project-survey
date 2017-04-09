<<<<<<< HEAD
/* custom JS goes here */

// IIFE
(function(){
  $(".btn-danger").click(function(event){
    if(!confirm("Are you sure?")) {
      event.preventDefault();
      window.location.assign("/surveys/mySurveys");
    }
  });
})();


$(function () {
  $('#datetimepicker1').datetimepicker({locale:'en-ca'});
=======
/* custom JS goes here */

// IIFE
(function(){
  $(".btn-danger").click(function(event){
    if(!confirm("Are you sure?")) {
      event.preventDefault();
      window.location.assign("/games");
    }
  });
})();


$(function () {
  $('#datetimepicker1').datetimepicker({locale:'en-ca'});
>>>>>>> e398eb947cbc510166d83e92d001865b2bfc6266
})();