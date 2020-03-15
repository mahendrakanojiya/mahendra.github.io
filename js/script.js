$(function() {

	/*	MOBILE MENU	*/
	//$('.header-container').append('<div class="menu-trigger"><span></span></div>');
	$('.menu-trigger').click(function() {
		$(this).toggleClass('active');
		$('body').toggleClass('show-toggle-nav');
		//$('.site-mainMenu-wrapper').slideToggle(250).toggleClass('show');
		$('.site-mainMenu-wrapper').toggleClass('show');
		$('.site-mainMenu-wrapper').addClass('hide-overlay');
		setTimeout(function(){
			$('.site-mainMenu-wrapper').removeClass('hide-overlay');
		}, 470);
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


	/* Skills Progess Bar */
	$('.progress-bar').each(function() {
		var progressWidth = $(this).attr('data-width');
		$(this).css('width', progressWidth);
		$(this).text(progressWidth);
		setTimeout(function() {
			$('.progress-bar').css('color', '#fff');
		}, 500)
	});
	$(window).load(function() {
	});

});



//Type out examples:
new TypingText(document.querySelector(".text-type"), 350, function(i){ var ar = new Array(''); return " " + ar[i.length % ar.length]; });
TypingText.runAll();



/**/
$('select.mk-input').on('change', function() {
	var this_val = '#' + $(this).find('option:selected').val();
	$(this_val).show().siblings('.reason-fieldset').hide();
});
if( $('select.mk-input option[selected]') != 1 ) {
	var this_val = $('select.mk-input option[selected]').val();
	$('#' + this_val).show().siblings('.reason-fieldset').hide();
}


$('.contact-form').submit(function(e) {
    e.preventDefault();
    var first_name = $('input[name="first_name"]');
    var last_name = $('input[name="last_name"]');
    var email = $('input[name="email_address"]');
    var phone_no = $('input[name="phone_number"]');
    //var select_reason = $('select[name="select_reason"]');

    $(".mk-input").removeClass('error');

    if (first_name.val().length < 1) {
      $(first_name).addClass('error');
    }
    if (last_name.val().length < 1) {
		$(last_name).addClass('error');
    }
    if (email.val().length < 1) {
		$(email).addClass('error');
	} 
	else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
		$(email).addClass('error');
      }
    }
    if (phone_no.val().length < 8) {
		$(phone_no).addClass('error');
	}
  });




/*
var input = $('.contact-form .mk-input.require');
$('.contact-form').on('submit', function() {
	var check = true;
	for (var i = 0; i < input.length; i++) {
		if (validate(input[i]) == false) {
			showValidate(input[i]);
			check = false;
		}
	}
	return check;
});
$('.contact-form .mk-input.require').each(function() {
	$(this).focus(function() {
		hideValidate(this);
	});
});
function validate(input) {
	if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
		if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
			return false;
		}
	} 
	else {
		if ($(input).val().trim() == '') {
			return false;
		}
	}
}
function showValidate(input) {
	var thisAlert = $(input).parent();
	$(thisAlert).addClass('alert-validate');
}
function hideValidate(input) {
	var thisAlert = $(input).parent();
	$(thisAlert).removeClass('alert-validate');
}
*/