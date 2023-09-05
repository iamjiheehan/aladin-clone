
// ------------------------------------------------슬라이더 화살표

$(function (){
    $(".white_circle_next").click(function (){
        $(this).siblings(".white_circle_prev").show();
    });
});

//----------------우측 광고 배너 호버시 화살표 클릭시 컨텐츠 전환 이벤트
// $(function () {
//     var slide = 1;
//     var maxSlides = 3; // Adjust this to the total number of slides

//     // Update the total number of slides in the pagination
//     $('.swiper-pagination .swiper-pagination-total').text(maxSlides);

//     $('.right_big_bn .swiper-button-next').on('click', function () {
//         if (slide < maxSlides) {
//             slide++;
//         } else {
//             slide = 1;
//         }

//         var translateValue = -305 * (slide - 1);
//         $('.welcome_section1 .right_big_bn .swiper_section .swiper_wrapper').css({
//             'transform': 'translateX(' + translateValue + 'px)',
//             'transition': 'transform 0.5s ease'
//         });

//         // Update the current slide number in the pagination
//         $('.swiper-pagination .swiper-pagination-current').text(slide);
//     });

//     $('.right_big_bn .swiper-button-prev').on('click', function () {
//         if (slide > 1) {
//             slide--;
//         } else {
//             slide = maxSlides;
//         }

//         var translateValue = -305 * (slide - 1);
//         $('.welcome_section1 .right_big_bn .swiper_section .swiper_wrapper').css({
//             'transform': 'translateX(' + translateValue + 'px)',
//             'transition': 'transform 0.5s ease'
//         });

//         // Update the current slide number in the pagination
//         $('.swiper-pagination .swiper-pagination-current').text(slide);
//     });
// });


//------------------------------------------------와이드배너 슬라이더

var slideIndex = 1;
const slides = document.getElementsByClassName("wide_banner-item");

function plusSlides(n) {
    console.log("plusSlides is working", slideIndex, slides);
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    console.log("Current slide is working", slideIndex);
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    if (n > slides.length) {
        slideIndex = 1;
    }
        if (n < 1) {
            slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    console.log("FinalshowSlides is working", slideIndex);
}


