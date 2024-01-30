$(document).ready(
    $(window).scroll( function() {
        if($(window).scrollTop() === 0){
            $(".nav").css({
                "backgroundColor": "transparent"
            })
        }
        else{
            $(".nav").css({
                "backgroundColor": "black"
            })
        }
    })
);