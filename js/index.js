$(document).ready(function() {
    var resize = function() {
        $('.section-title').fitText(.8);
    }
    
    $(window).resize(resize);
    resize();
});