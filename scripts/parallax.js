$(document).ready(function() {
    $(window).scroll(function() {
        $("body").css("background-position-y", 0 - ($(this).scrollTop() / 8 - $(this).scrollTop() / 2));
    });
});