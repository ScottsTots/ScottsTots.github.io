$(document).ready(function() {
    var resize = function() {
        $('.section-title').fitText(.8);
        $('.hero-title').fitText(.5);
    }
    
    $(window).resize(resize);
    resize();
});