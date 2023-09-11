$(function () {
    $(window).scroll(function () {
        var scroll = $(document).scrollTop();
        var target = Math.floor(
            ($("#fixed_layer_point").scrollTop() /
                ($("#fixed_layer_point").prop("scrollHeight") -
                    $("#fixed_layer_point").prop("clientHeight"))) *
                100
        );
        console.log(target,scrollHeight);
        if (scroll == target) {
            $(".fixed_top-wrap").css("translate", "0");
            alert("도착했습니다.");
            console.log("Loading");
        }
    });
});
