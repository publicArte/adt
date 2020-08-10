/***********************/
/* Scroll to Top Arrow */
/***********************/
$(document).ready(function() {

  var scrollTimeout;
    $(window).scroll((evt) => {
      if (scrollTimeout){
        // clear the timeout, if one is pending
        clearTimeout(scrollTimeout);
        scrollTimeout = null;
        }
        scrollTimeout = setTimeout(scrollHandler, 250);
      });
      scrollHandler = () => {
        // Check your page position
        if ($(this).scrollTop() > 200){
            $('#top-butt')
            .animate({bottom:17}, "fast",);
        } else {
            $('#top-butt')
            .animate({bottom:-30}, "fast",);
        }
  };

  $("#top-butt").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});


/*****************/
/* Animations    */
/*****************/

/* Scroll FadeIn */
  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".anim-scroll");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

/* Scroll Slide Left */
  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".slideL-scroll");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("slide-left");
      } else {
        $(tag).removeClass("slide-left");
      }
    }
  });

/* Scroll Slide Right */
  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".slideR-scroll");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("slide-right");
      } else {
        $(tag).removeClass("slide-right");
      }
    }
  });

/* Parallax */
// The function
var background_image_parallax = function($object, multiplier){
  multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
	multiplier = 1 - multiplier;
  var $doc = $(document);
  $object.css({"background-attatchment" : "fixed"});
	$(window).scroll(function(){
	  var from_top = $doc.scrollTop(),
	      bg_css = '0px ' +(multiplier * from_top) + 'px';
	  $object.css({"background-position" : bg_css });
  });
};
background_image_parallax($("header"));


/*******************/
/* Form Validation */
/*******************/

/* Input Validate */
$('input').blur(function() {
    if (!$(this).val()) {
      $(this).removeClass('valid');
      $(this).parent().removeClass('valid');
      $(this).addClass('invalid');
      $(this).parent().addClass('invalid');
    }
    else if ($(this).val().length >= 2 && $(this).hasClass('invalid')) {
      $(this).addClass('valid');
      $(this).parent().addClass('valid');
    }
});

$('input.zipcode').blur(function() {
    if ($(this).val().length < 5){
      $(this).removeClass('valid');
      $(this).parent().removeClass('valid');
      $(this).addClass('invalid');
      $(this).parent().addClass('invalid');
    }
});

$('input.phonenumber').blur(function() {
    if ($(this).val().length < 14) {
      $(this).removeClass('valid');
      $(this).parent().removeClass('valid');
      $(this).addClass('invalid');
      $(this).parent().addClass('invalid');
    }
});


/* Check for Invalid */
$(function() {
  (function($) {
      var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

      $.fn.attrchange = function(callback) {
          if (MutationObserver) {
              var options = {
                  subtree: false,
                  attributes: true
              };

              var observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(e) {
                      callback.call(e.target, e.attributeName);
                  });
              });

              return this.each(function() {
                  observer.observe(this, options);
              });

          }
      }
  })(jQuery);

  $("form[name='header-form'] > div").attrchange(function(attrName) {

      if(attrName == 'class'){
        $("form[name='header-form'] button").parent().addClass('invalid');
      }
  });
  $("form[name='footer-form'] > div").attrchange(function(attrName) {

      if(attrName == 'class'){
        $("form[name='footer-form'] button").parent().addClass('invalid');
      }
  });
});

/* Restrict Input */
(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));
/* Restrict Zipcode */
$(".zipcode").inputFilter(function(value) {
  return /^-?\d*$/.test(value); });
/* Restrict Name */
$(".name").inputFilter(function(value) {
  return /^[a-z]*$/i.test(value); });


/* ZipCode Count */
$('.zipcode').on("keyup change", function () {

  const max = 5;
  const len = $(this).val().length;

  if (len >= max) {
    $('.countDown').text("0");
  } else {
    const char = max - len;
    $('.countDown').text(char);
  }
});

/* Phone Number */
$('.phonenumber')

.keydown(function (e) {
	var key = e.which || e.charCode || e.keyCode || 0;
	$phone = $(this);

  // Don't let them remove the starting '('
  /*if ($phone.val().length === 1 && (key === 8 || key === 46)) {
		$phone.val('('); 
    return false;
	} */
  // Reset if they highlight and type over first char.
  if ($phone.val().charAt(0) !== '(') {
		$phone.val('('+String.fromCharCode(e.keyCode)+''); 
	}

	// Auto-format- do not expose the mask as the user begins to type
	if (key !== 8 && key !== 9) {
		if ($phone.val().length === 4) {
			$phone.val($phone.val() + ')');
		}
		if ($phone.val().length === 5) {
			$phone.val($phone.val() + ' ');
		}			
		if ($phone.val().length === 9) {
			$phone.val($phone.val() + '-');
		}
	}

	// Allow numeric (and tab, backspace, delete) keys only
	return (key == 8 || 
			key == 9 ||
			key == 46 ||
			(key >= 48 && key <= 57) ||
			(key >= 96 && key <= 105));	
})
	
.bind('focus click', function () {
	$phone = $(this);
	
	if ($phone.val().length === 0) {
		$phone.val('(');
	}
	else {
		var val = $phone.val();
		$phone.val('').val(val); // Ensure cursor remains at the end
	}
})
	
.blur(function () {
	$phone = $(this);
	
	if ($phone.val() === '(') {
		$phone.val('');
	}
});

/* Headet Form  Submit Button */
$('form[name="header-form"] button.submit').on('click', function() {
  if ($('form[name="header-form"] input[name="first-name"]').val().length <= 2) {
    $('form[name="header-form"] input[name="first-name"]').addClass('invalid');
    $('form[name="header-form"] input[name="first-name"]').parent().addClass('invalid');
  }
  if ($('form[name="header-form"] input[name="last-name"]').val().length <= 2) {
    $('form[name="header-form"] input[name="last-name"]').addClass('invalid');
    $('form[name="header-form"] input[name="last-name"]').parent().addClass('invalid');
  }
  if ($('form[name="header-form"] input.zipcode').val().length < 5){
    $('form[name="header-form"] input.zipcode').addClass('invalid');
    $('form[name="header-form"] input.zipcode').parent().addClass('invalid');
  }
  if ($('form[name="header-form"] input.phonenumber').val().length < 14) {
    $('form[name="header-form"] input.phonenumber').addClass('invalid');
    $('form[name="header-form"] input.phonenumber').parent().addClass('invalid');
  }
  if ($('form[name="header-form"] input[type="email"]').val().length <= 5) {
    $('form[name="header-form"] input[type="email"]').addClass('invalid');
    $('form[name="header-form"] input[type="email"]').parent().addClass('invalid');
  }
  if ($('form[name="header-form"] input.radio:checked').length == 0) {
    $('form[name="header-form"] .radio').closest('div').addClass('invalid');
  }
});

/* Footer Form  Submit Button */
$('form[name="footer-form"] button.submit').on('click', function() {
  if ($('form[name="footer-form"] input[name="first-name"]').val().length <= 2) {
    $('form[name="footer-form"] input[name="first-name"]').addClass('invalid');
    $('form[name="footer-form"] input[name="first-name"]').parent().addClass('invalid');
  }
  if ($('form[name="footer-form"] input[name="last-name"]').val().length <= 2) {
    $('form[name="footer-form"] input[name="last-name"]').addClass('invalid');
    $('form[name="footer-form"] input[name="last-name"]').parent().addClass('invalid');
  }
  if ($('form[name="footer-form"] input.zipcode').val().length < 5){
    $('form[name="footer-form"] input.zipcode').addClass('invalid');
    $('form[name="footer-form"] input.zipcode').parent().addClass('invalid');
  }
  if ($('form[name="footer-form"] input.phonenumber').val().length < 14) {
    $('form[name="footer-form"] input.phonenumber').addClass('invalid');
    $('form[name="footer-form"] input.phonenumber').parent().addClass('invalid');
  }
  if ($('form[name="footer-form"] input[type="email"]').val().length <= 5) {
    $('form[name="footer-form"] input[type="email"]').addClass('invalid');
    $('form[name="footer-form"] input[type="email"]').parent().addClass('invalid');
  }
  if ($('form[name="footer-form"] input.radio:checked').length == 0) {
    $('form[name="footer-form"] .radio').closest('div').addClass('invalid');
  }
});

