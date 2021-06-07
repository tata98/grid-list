$(function () {
    // $(".list").click(function (e) {
    //     $(".grid").removeClass("active");
    //     $(this).addClass("active");
    //     $(".item").addClass("col-md-12").removeClass("col-md-4");
    // });

    // $(".grid").click(function (e) {
    //     $(".list").removeClass("active");
    //     $(this).addClass("active");
    //     $(".item").addClass("col-md-4").removeClass("col-md-12");
    // });

    $(".list").click(function (e) {
        //If animated than wait the animation to be over
        if ($(':animated').length) {
            return false;
        }
        $(".grid").removeClass("active");
        $(this).addClass("active");
        $(".card").animate({height: "100px"}, 500);
        $(".second").animate({top: "33%"}, 500);
        $(".third").animate({ top: "66%"}, 500,function(){
            $(".item").animate({ width: "100%"}, 500);
        });
    });


    $(".grid").click(function (e) {
        //If animated than wait the animation to be over
        if ($(':animated').length) {
        return false;
    }
        $(".list").removeClass("active");
        $(this).addClass("active");
        $(".item").animate({ width: "33%"}, 500);
        $(".third").animate({top: "0"}, 500);
        $(".second").animate({top: "0"}, 500, function(){
             $(".card").animate({ height: "340px"}, 200);
        });
    });
});