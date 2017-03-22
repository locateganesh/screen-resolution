$(document).ready(function(){
	windowInner();
	var sw = screen.width;
	var sh = screen.height;
	$('#ss').text(sw+' x '+sh);
	var wwo = window.outerWidth;
	var who = window.outerHeight;
	$('#wvi').text(wwo+' x '+who);
	
	$('.info').click(function(e) {
		e.preventDefault();
		$('.sizeInfo').addClass('active');
		var href = $(this).attr("href");
		$('.siInner').animate({
		  scrollTop: $(href).offset().top+50
		}, 500);
		//return false;
	});
	
	$('.close').click(function(){
		$('.sizeInfo').removeClass('active'); 
	});
});
$(window).resize(function(){
	windowInner();
});
function windowInner(){
	var wwi = window.innerWidth; 
	var whi = window.innerHeight;
	$('#wvs').text(wwi+' x '+whi);
}



