$(document).ready(function() {
    $(".button-collapse").sideNav({});

    $(".hero__text--body").css({"padding-top": $(".hero__image--main").height() });

    $('.parallax').parallax();

    var iphoneBottom = $(".hero__bg--fullscreen").height() - $(".hero__container").height() - 100;
    $("#hero__image--bottom").css({"min-height": $(".hero__image--main").height() - iphoneBottom });
    
});