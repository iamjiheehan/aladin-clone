$(function () {
    $(".editor_choice #editorchoice .swiper_wrapper").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,
        // arrows: true,
    });
    $(".editor_btn .editor-button-prev").on('click',function(e) {
        //e.preventDefault();
        $(".editor_choice #editorchoice .swiper_wrapper").slick("slickPrev");
    });

    $(".editor_btn .editor-button-next").on('click',function(e) {
        //e.preventDefault();
        $(".editor_choice #editorchoice .swiper_wrapper").slick("slickNext");
    });
});


$(function () {
    $(".editor_choice #ebookchoice .swiper_wrapper").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,
        // arrows: true,
    });
    $(".editor_btn .editor-button-prev").on('click',function(e) {
        //e.preventDefault();
        $(".editor_choice #ebookchoice .swiper_wrapper").slick("slickPrev");
    });

    $(".editor_btn .editor-button-next").on('click',function(e) {
        //e.preventDefault();
        $(".editor_choice #ebookchoice .swiper_wrapper").slick("slickNext");
    });
});


$(function () {
    $(".editor_choice #foreignchoice .swiper_wrapper").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,
        // arrows: true,
    });
    $(".editor_btn .editor-button-prev").on('click',function(e) {
        //e.preventDefault();
        $(".editor_choice #foreignchoice .swiper_wrapper").slick("slickPrev");
    });

    $(".editor_btn .editor-button-next").on('click',function(e) {
        //e.preventDefault();
        $(".editor_choice #foreignchoice .swiper_wrapper").slick("slickNext");
    });
});


$(function () {
    $(".editor_choice #goodschoice .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,
        // arrows: true,
    });
    $(".editor_btn .editor-button-prev").on('click',function(e) {
        // e.preventDefault();
        $(".editor_choice #goodschoice .swiper_wrapper").slick("slickPrev");
    });

    $(".editor_btn .editor-button-next").on('click',function(e) {
        // e.preventDefault();
        $(".editor_choice #goodschoice .swiper_wrapper").slick("slickNext");
    });
    
});

