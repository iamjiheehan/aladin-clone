$(function () {
    $(window).scroll(function(){
        var target = $("#fixed_layer_point").top;
        var x = $(document).scrollTop();

        if(target == x){
            $(".fixed_top-wrap").css("translate","0");
            alert("도착했습니다.");
            console.log("Loading");
        }
    });
});