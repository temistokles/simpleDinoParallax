/**
 * Simple Dino Parallax
 * Supports: vertical and horizontal parallaxes, transparency and rotation
 * Source: https://github.com/temistokles/simpleDinoParallax
 */
(function ( $ ) {

    var elements = [];

    function initElement(el){
        var position = $(el).position();

        $(el).data('parallax-original-offset-top', position.top);
        $(el).data('parallax-original-offset-left', position.left);

        if ($(el).data('parallax-starting-opacity')) {
            $(el).fadeTo(0, $(el).data('parallax-starting-opacity'));
        }
    }
    
    function parallaxEffect(el, scrollAmount){
        //vertical scrolling
        if ($(el).hasClass('parallax-vertical-scroll')) {
            var speed = $(el).data('parallax-vertical-speed') ? $(el).data('parallax-vertical-speed') : $(el).data('parallax-speed'); 
            var top = $(el).data('parallax-original-offset-top') + $(el).height() * speed * scrollAmount;
            var maxTop = $(el).parent().height() - $(el).height();

            if (top > maxTop){
                top = maxTop;
            }

            $(el).css('top', top + 'px');
        }

        //horizontal scrolling
        if ($(el).hasClass('parallax-horizontal-scroll')) {
            var speed = $(el).data('parallax-horizontal-speed') ? $(el).data('parallax-horizontal-speed') : $(el).data('parallax-speed'); 
            var left = $(el).data('parallax-original-offset-left') + $(el).width() * speed * scrollAmount;
            var maxLeft = $(el).parent().width() - $(el).width();

            if (left > maxLeft){
                left = maxLeft;
            }

            var right = $(el).parent().width() - left - $(el).width();
            $(el).css('right', right + 'px');
        }

        //transparency
        if ($(el).hasClass('parallax-transparency')) {
            var minOpacity = $(el).data('parallax-min-opacity');
            var speed = $(el).data('parallax-transparency-speed') ? $(el).data('parallax-transparency-speed') : $(el).data('parallax-speed'); 
            var opacity = $(el).data('parallax-starting-opacity') + scrollAmount * speed;
            if (opacity < minOpacity) {
                opacity = minOpacity;
            }           
            $(el).fadeTo(0.5, opacity);
        }

        //rotation
        if ($(el).hasClass('parallax-rotate')) {
            var speed = $(el).data('parallax-rotate-speed') ? $(el).data('parallax-rotate-speed') : $(el).data('parallax-speed'); 
            var angle = 360 * scrollAmount * speed;

            $(el).css('-ms-transform', 'rotate(' + angle + 'deg)')
                    .css('-webkit-transform', 'rotate(' + angle + 'deg)')
                    .css('-moz-transform', 'rotate(' + angle + 'deg)')
                    .css('-o-transform', 'rotate(' + angle + 'deg)')
                    .css('transform', 'rotate(' + angle + 'deg)');                                   
        }
        
    }
        
    $(window).scroll(function(e){
        var scrollAmount = $(window).scrollTop() / $(window).height();
        for (i in elements) {
            parallaxEffect(elements[i], scrollAmount);
        }
    });
    
    $.fn.parallax = function() {        
        return this.each(function() {
            initElement(this);
            elements[elements.length] = this;
        });        
    };
 
}( jQuery ));