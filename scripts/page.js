$(document).ready(function() {
    //Reset scrolltop
    $(window).scrollTop(0);

    //Header
    $("#header").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 668) {
            $("#header").fadeIn("slow");
        }
        else {
            $("#header").fadeOut("slow");
        }
    });

    //Slogan 1
    $("#slogan1").css("visibility", "hidden");
    setTimeout(function() {
        $("#slogan1").css("visibility", "visible").hide().fadeIn("slow");
    }, 400);

    //Slogan 2
    $("#slogan2").css("visibility", "hidden");
    setTimeout(function() {
        $("#slogan2").css("visibility", "visible").hide().fadeIn("slow");
    }, 1200);
});