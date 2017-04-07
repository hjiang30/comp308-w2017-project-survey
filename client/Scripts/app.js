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
})();