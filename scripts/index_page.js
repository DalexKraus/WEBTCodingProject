$(document).ready(function() {

    $("#introduction_headline").css("visibility", "hidden");

    //Headline 1
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height() / 4) {
            $("#introduction_headline").css("visibility", "visible").hide().fadeTo(200, 1);
            $("introduction_headline").show("slide", { direction: "left" }, 1000);
        }
    });
});