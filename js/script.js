$(function() {

	$(window).scroll(function() {
		if( $(this).scrollTop() > 2 ) {
			$('body').addClass('scroll-header');
		}
		else {
			$('body').removeClass('scroll-header');
		}
	});

});