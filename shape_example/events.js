$(document).ready(function(){
$('img').hover(function(){
	var newSrc = $(this).prop('src');
	$('#Magnifier').prop('src', newSrc);
	$('#Magnifier').toggleClass('Magnified Not_Magnified');
});
});

