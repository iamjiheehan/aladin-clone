$(function () {
    $("#sub_event .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: true,
        dotsClass: 'dots_custom'
    });
});

// book flip

$(function () {
    $(".Bcoverwrap .cover .arr2_right").on("click", function (){
            $(".Bcoverwrap .cover #divFlipImg").css("opacity","0");
            $(".Bcoverwrap .cover .swiper_section").css("opacity","1");
            $(".Bcoverwrap .cover .swiper_section .swiper_wrapper").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
            });
        }
    );
    $(".Bcoverwrap .cover .arr2_right").on("mouseleave", function (){
        $(".Bcoverwrap .cover #divFlipImg").css("opacity","1");
        $(".Bcoverwrap .cover .swiper_section").css("opacity","0");
    });

    
})