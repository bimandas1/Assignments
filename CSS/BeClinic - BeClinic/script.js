// Navbar
$(document).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 56){
        $(".second").css({
            "position": "fixed",
            "top": "0rem",
            "backgroundColor": "var(--blue)"
        })
    }
    else {
        $(".second").css({
            "position": "absolute",
            "top": "3.5rem",
            "backgroundColor": "var(--transparent-grey)"
        })
    }
})

// Department Menu pop up
$(".department-menu").hide();

$("#department").mouseenter(function() {
    $(".department-menu").show();
})

$(".department-menu").mouseenter(function() {
    $(".department-menu").show();
})

$("#department").mouseleave(function() {
    $(".department-menu").hide();
})

$(".department-menu").mouseleave(function() {
    $(".department-menu").hide();
})