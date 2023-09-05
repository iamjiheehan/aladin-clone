
// ------------------------------------------------슬라이더 화살표

$(function (){
    $(".white_circle_next").click(function (){
        $(this).siblings(".white_circle_prev").show();
    });
});
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


