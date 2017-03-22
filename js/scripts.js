$(document).ready(function(){
	windowInner();
	var sw = screen.width;
	var sh = screen.height;
	$('#ss').text(sw+' x '+sh);
	var wwo = window.outerWidth;
	var who = window.outerHeight;
	$('#wvi').text(wwo+' x '+who);
	
	$('.info').click(function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$('.sizeInfo').fadeIn(500, function(){
			$('body').animate({
			  scrollTop: $(href).offset().top
			}, 300);
		});
		
	});
	$('.close').click(function(){
		$('.sizeInfo').fadeOut(500);
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



