jQuery.easing['jswing'] = jQuery.easing['swing'];

var attach = false;

jQuery.extend( jQuery.easing,
    {
        def: 'easeOutQuad',
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

$(function(){
    $('.navbar').affix({

        offset: {
            /* Affix the navbar after scroll below header */
            top: $("header").outerHeight(true)

        }
    });

});
var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('animated') ) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function(){

                $('body .animate-box.item-animate').each(function(k){
                    var el = $(this);
                    setTimeout( function () {
                        el.addClass('fadeInUp animated');
                        el.removeClass('item-animate');
                    },  k * 200, 'easeInOutExpo' );
                });

            }, 100);

        }

    } , { offset: '85%' } );
};

function move() {
    document.querySelector('.tiles2').scrollIntoView({
        behavior: 'smooth'
    });
}

$(document).ready(function(){
    contentWayPoint();
    $(".move").on('click',function (event) {
        $('html, body').animate({
            scrollTop: $('.tiles2').offset().top-200
        },800);
    });
    var scroll_start = 0;
    var startchange = $('.navbar');
    var offset = startchange.offset();
     if(startchange.length){
         $(document).scroll(function () {
             scroll_start = $(this).scrollTop();
             if(scroll_start > offset.top){
                 $('.navbar').css('background-color', '#1686d9');
             }
             else{
                 $('.navbar').css('background-color', 'rgba(0,0,0,0.3)');
             }
         });
     }

});