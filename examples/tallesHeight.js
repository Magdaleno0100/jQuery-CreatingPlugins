(function( $ ){
    'use strict';

    $.fn.equalizeHeight = function(){
        var tallesHeight = 0,
        $stories = $('#stories-2').find('.story');

        $stories.each(function(i, el){
            var elHeight = $(el).outerHeight();

            if(elHeight > tallesHeight){
                tallesHeight = elHeight;
            }
        });
        $stories.css('min-height', tallesHeight);
    };

}( jQuery ));

//invoque 

$(document).ready(){
    $('#stories-1').find('.story').equalizeHeight();
};