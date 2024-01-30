$(document).ready( function() {
    $(".login").hide();

    $("#loginIcon").click( function() {
        $(".login").toggle();
    });

    $(".login a").click( function() {
        alert("Hello");
    });



    // Page-4  Grid

    $("#fourth .control a:nth-child(1)").click( function() {
        $("#fourth .items #box1").css({
            "gridColumnStart": "1",
            "gridColumnEnd": "2",
            "gridRowStart": "1",
            "gridRowEnd": "3",
        })
    })

    $("#fourth .control a:nth-child(2)").click( function() {
        $("#fourth .items #box1").css({
            "gridColumnStart": "2",
            "gridColumnEnd": "2",
            "gridRowStart": "2",
            "gridRowEnd": "4",
        })
    })

    $("#fourth .control a:nth-child(3)").click( function() {
        $("#fourth .items #box1").css({
            "gridColumnStart": "1",
            "gridColumnEnd": "2",
            "gridRowStart": "2",
            "gridRowEnd": "4",
        })
    })
});