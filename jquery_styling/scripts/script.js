$(document).ready(function() {

    $('h4').hide();
    $('h5').hide();
    $('h4').fadeIn(3000);
    $('h4').fadeOut(5000);
    $('h5').show(3000);
    $('button').click(function() {
        $('p').css({
            "color": "limegreen",
            "font-size": "21px",
            "background": "black"
        });
    });
    $('blockquote').click(function() {
        $('blockquote').slideUp(1000);
    });
    $('h6').hover(function() {
        $('h4').fadeIn(2500);
    });
    $('input').keypress(function() {
        alert('Dumb Alert!');
    });
    $('#changebody').click(function() {
        $('body').css({
        	"font-family": "'Open Sans', sans-serif;",
        	"font-size": "30px;",
        	"color": "#FA6722"
        });
    });
});