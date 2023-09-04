
// --------------편집장의 선택 탭-------------------------


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

// --------------------------추천 마법사의 선택 슬라이더 

$(function () {
    $("#jinnyWelcome_Back .swiper_wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
    });
    $("#jinnyWelcome .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#jinnyWelcome_Back .swiper_wrapper").slick("slickPrev");
    });

    $("#jinnyWelcome .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#jinnyWelcome_Back .swiper_wrapper").slick("slickNext");
    });
});


// --------------------------화제의 책 소식 슬라이더 

$(function () {
    $("#w_topic_type .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $("#w_topic_type .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#w_topic_type .w_topic .swiper_wrapper").slick("slickPrev");
    });

    $("#w_topic_type .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#w_topic_type .w_topic .swiper_wrapper").slick("slickNext");
    });
    
});

// --------------------------알라딘이 만든 사은품 슬라이더 

$(function () {
    $("#w_gift_type .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $("#w_gift_type .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#w_gift_type .w_gift .swiper_wrapper").slick("slickPrev");
    });

    $("#w_gift_type .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#w_gift_type .w_gift .swiper_wrapper").slick("slickNext");
    });
    
});

// --------------------------이달의 주목도서 슬라이더

$(function () {
    $("#w_monthBook_type .w_booklist .swiper_wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
    });
    $("#w_monthBook_type .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#w_monthBook_type .w_booklist .swiper_wrapper").slick("slickPrev");
    });

    $("#w_monthBook_type .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#w_monthBook_type .w_booklist .swiper_wrapper").slick("slickNext");
    });
    
});
// --------------------------이 주의 특가 슬라이더

$(function () {
    $("#w_specialPrice_type .w_booklist .swiper_wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
    });
    $("#w_specialPrice_type .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#w_specialPrice_type .w_booklist .swiper_wrapper").slick("slickPrev");
    });

    $("#w_specialPrice_type .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#w_specialPrice_type .w_booklist .swiper_wrapper").slick("slickNext");
    });
});


// --------------------------알라딘 스페셜 슬라이더

$(function () {
    $("#w_aladinSpecial_type .w_booklist .swiper_wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
    });

    $("#w_aladinSpecial_type .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#w_aladinSpecial_type .w_booklist .swiper_wrapper").slick("slickPrev");
    });

    $("#w_aladinSpecial_type .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#w_aladinSpecial_type .w_booklist .swiper_wrapper").slick("slickNext");
    });
});

// -------------------------중간 광고 배너 슬라이더 

$(function () {
    $("#w_eventbanner_type .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $("#w_eventbanner_type .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#w_eventbanner_type .w_banner .swiper_wrapper").slick("slickPrev");
    });

    $("#w_eventbanner_type .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#w_eventbanner_type .w_banner .swiper_wrapper").slick("slickNext");
    });
    
});

// --------------------------투비컨티뉴드 슬라이더

$(function () {
    $("#w_tobe_type .w_booklist .swiper_wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
    });
    $("#w_tobe_type .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#w_tobe_type .w_booklist .swiper_wrapper").slick("slickPrev");
    });

    $("#w_tobe_type .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#w_tobe_type .w_booklist .swiper_wrapper").slick("slickNext");
    });
    
});

// --------------------------알라디너의 선택 슬라이더

$(function () {
    $("#w_aladinerChoice_type .w_booklist .swiper_wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
    });
    $("#w_aladinerChoice_type .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#w_aladinerChoice_type .w_booklist .swiper_wrapper").slick("slickPrev");
    });

    $("#w_aladinerChoice_type .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#w_aladinerChoice_type .w_booklist .swiper_wrapper").slick("slickNext");
    });
    
});


// --------------------------마지막 광고 배너슬라이더 

$(function () {
    $("#w_bottombanner_type .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $("#w_bottombanner_type .white_circle_prev").on('click',function(e) {
        // e.preventDefault();
        $("#w_bottombanner_type .w_banner .swiper_wrapper").slick("slickPrev");
    });

    $("#w_bottombanner_type .white_circle_next").on('click',function(e) {
        // e.preventDefault();
        $("#w_bottombanner_type .w_banner .swiper_wrapper").slick("slickNext");
    });
    
});