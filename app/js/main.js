$(document).ready(function() {
    $(".button-collapse").sideNav({});

    $(".hero__text--body").css({"padding-top": $(".hero__image--main").height() });

    $('.parallax').parallax();

    var iphoneBottom = $(".hero__bg--fullscreen").height() - $(".hero__container").height() - 100;
    if(($(".hero__image--main").height() - iphoneBottom) <= 0) {
        $("#hero__image--bottom").css({"min-height": $(window).height() * 0.3 });
    }
    else {
        $("#hero__image--bottom").css({"min-height": $(".hero__image--main").height() - iphoneBottom });
    }
    
    
});