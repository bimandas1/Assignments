// Search input - slide down
$(".search-input").hide();

$(".search").click(function() {
    $(".search-input").slideDown();
})

$(".search-input i").click(function() {
    $(".search-input").slideUp();
})


// Nav Links' menu (pop up on hover)
$(".nav-link-menu").hide();

$("#analysis").mouseover(function() {
    $(".nav-link-menu").css({
        "display":"block"
    });
})

$(".first, .third").mouseover(function() {
    $(".nav-link-menu").css({
        "display":"none"
    });
})

