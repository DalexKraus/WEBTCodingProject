$(document).ready(function() {
    $(window).scroll(function() {
        $("body").css("background-position-y", 0 - ($(this).scrollTop() / 4 - $(this).scrollTop() / 2));
    });
});