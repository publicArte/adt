/* Scroll to top Arrow */
  
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
