$(function() {

	/*	MOBILE MENU	*/
	//$('.header-container').append('<div class="menu-trigger"><span></span></div>');
	$('.menu-trigger').click(function() {
		$(this).toggleClass('active');
		$('body').toggleClass('show-toggle-nav');
		//$('.site-mainMenu-wrapper').slideToggle(250).toggleClass('show');
		$('.site-mainMenu-wrapper').toggleClass('show');
	});


	/*	SCROLL HEADER	*/
	$(window).scroll(function() {
		if( $(this).scrollTop() > 2 ) {
			$('body').addClass('scroll-header');
		}
		else {
			$('body').removeClass('scroll-header');
		}
	});


	/*	Text Typing	
	var i = 0;
	var txt = document.querySelector(".text-type").html();
	var speed = 50;
	function typeWriter() {
		if (i < txt.length) {
			document.querySelector(".text-type").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}
	typeWriter();*/

});



//Type out examples:
new TypingText(document.querySelector(".text-type"), 350, function(i){ var ar = new Array(''); return " " + ar[i.length % ar.length]; });
TypingText.runAll();