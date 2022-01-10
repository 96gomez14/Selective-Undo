$(document).ready(function(){
$('#Description').click(function(){
  $('#tab0').toggleClass('tab0_inv tab0');
});

$('#What_to_See').click(function() {
  $('#tab1').toggleClass('tab1_inv tab1');
});

$('#What_to_Do').click(function() {
  $('#tab2').toggleClass('tab2_inv tab2');
});

$('#What_to_taste').click(function() {
  $('#tab3').toggleClass('tab3_inv tab3');
});
});
