$(document).ready(
    $(".sidebar").hide(),
    $(".sidebar-btn").click( function() {
        $(".sidebar").animate({
            "width": "toggle"
        })
    }),
    $(".sidebar .cross").click( function() {
        $(".sidebar").hide()
    })
);