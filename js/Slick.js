$(function () {
    $(".editor_choice .swiper_section .swiper_wrapper").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        // arrows: true,
    });
    $(".editor_btn .editor-button-prev").on('click',function(e) {
        //e.preventDefault();
        $(".editor_choice .swiper_section .swiper_wrapper").slick("slickPrev");
    });

    $(".editor_btn .editor-button-next").on('click',function(e) {
        //e.preventDefault();
        $(".editor_choice .swiper_section .swiper_wrapper").slick("slickNext");
    });

    
});
