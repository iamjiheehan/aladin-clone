// $(function () {
//     $(document).scroll(function() {
//         var currentScrollValue =  $(window).scrollTop()
//         if (currentScrollValue > 1200) {
//             $(".fixed_top-wrap").css('transform', 'translate(0, 0)');
//         } else {
//             $(".fixed_top-wrap").css('transform', 'translate(0, -150px)');
//         }
//     });
// });


$(function () {
    $(document).scroll(function() {
        var currentScrollValue = $(document).scrollTop();
        var fixedLayerPointTop = $("#fixed_layer_point").offset().top;

        if (currentScrollValue >= fixedLayerPointTop) {
            $(".fixed_top-wrap").css('transform', 'translate(0, 0)');
        } else {
            $(".fixed_top-wrap").css('transform', 'translate(0, -150px)').css("visibility", 'visible');
        }
    });
});
