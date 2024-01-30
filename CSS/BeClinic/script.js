$(document).ready( function() {
    // var position = $(window).scrollTop();
 
    // $(window).scroll( function() {
    //     var scroll = $(window).scrollTop();
    //     console.log(parseInt(position), parseInt(scroll));
    //     if (scroll > position) {
    //         $(".flyup").animate({
    //             top: '-=4px'
    //         }, 0)
    //     } else {
    //         $(".flyup").animate({
    //             top: '+=4px'
    //         }, 0)
    //     }
    //     position = scroll;
    // });

    var layer1 = $("#img1").css("top");
    layer1 = layer1.substring(0, layer1.length-2);
    layer1 = parseInt(layer1);

    var layer2 = $("#img3").css("top");
    layer2 = layer2.substring(0, layer2.length-2);
    layer2 = parseInt(layer2);

    var layer3 = $("#img5").css("top");
    layer3 = layer3.substring(0, layer3.length-2);
    layer3 = parseInt(layer3);

    $(document).scroll(function() {
        var scroll = $(document).scrollTop();

        var newtop1 = layer1 - scroll * 0.1;
        $("#img1, #img2").animate({top: newtop1}, 0)

        var newtop2 = layer2 - scroll * 0.12;
        $("#img3, #img4").animate({top: newtop2}, 0)

        var newtop3 = layer3 - scroll * 0.4;
        $("#img5, #img6").animate({top: newtop3}, 0)
    })
});