$(document).ready(function(){
	windowInner();
	var sw = screen.width;
	var sh = screen.height;
	$('#ss').text(sw+' x '+sh);
	var wwo = window.outerWidth;
	var who = window.outerHeight;
	$('#wvi').text(wwo+' x '+who);
});
$(window).resize(function(){
	windowInner();
});
function windowInner(){
	var wwi = window.innerWidth; 
	var whi = window.innerHeight;
	$('#wvs').text(wwi+' x '+whi);
}



