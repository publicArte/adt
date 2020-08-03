/* Scroll to top Arrow */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#top-butt').fadeIn()
        .css({bottom:-1})
        .animate({bottom:17}, 100,);
    } else {
        $('#top-butt')
        .css({bottom:17})
        .animate({bottom:-30}, "fast",);
    }
});
$(document).ready(function() {
    $("#top-butt").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
