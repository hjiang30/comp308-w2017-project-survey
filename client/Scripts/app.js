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


//change expire date time zone to server time
function timeChange(){
      let time = moment().utcOffset();
      document.getElementById('timezone').value = time;
  }               



function showTimeOffset() {
  let time = moment().utcOffset();
    alert(time);
}
