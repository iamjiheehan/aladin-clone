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
    var $index = 0; 
    var item = $(".Bcoverwrap .cover .swiper_section .swiper_wrapper .swiper_item");
    var max = item.length;

    $(".Bcoverwrap .cover .arr2_right").on("click", function () {
        if ($index < max - 1) { 
            $index++;
            console.log("클릭후 인덱스 값은", $index);
            $(".Bcoverwrap .cover #divFlipImg").css("opacity", "0");
            $(".Bcoverwrap .cover .swiper_section").css("opacity", "1");
            var translateXValue = $index * -502 + "px";
            $(".Bcoverwrap .cover .swiper_section .swiper_wrapper").css("transform", "translateX(" + translateXValue + ")");
        }
        else if ($index == max - 1) {
            $("#lastpic").css("opacity", "1");
            // Reset the opacity after 2 seconds
            setTimeout(function () {
                $("#lastpic").css("opacity", "0");
            }, 2000); // 2000 milliseconds = 2 seconds
        }
    });

    $(".Bcoverwrap .cover .arr2_left").on("click", function () {
        if ($index > 0) {
            $index--;
            console.log("클릭후 인덱스 값은", $index);
            var translateXValue = $index * -502 + "px";
            $(".Bcoverwrap .cover .swiper_section .swiper_wrapper").css("transform", "translateX(" + translateXValue + ")");
        }
    });
});

