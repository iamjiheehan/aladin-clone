
//------------------------------------------------웰컴 탑 컨텐츠 전환 이벤트

$(function(){
    $('.welcome_top_tab .swiper_wrapper .swiper_item').on('mouseover',function () {
        $('.welcome_top_content').hide();
        $('.welcome_top_content').eq($(this).index()).show();
    },function () {
        $('.welcome_top_content').hide();
        $('.welcome_top_content').eq($(this).index()).show();
    });
});


$(function () {
    // Initialize the current index to 0
    var currentIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
        $('.welcome_top_content').hide();
        currentIndex = (currentIndex + 1) % $('.welcome_top_tab .swiper_wrapper .swiper_item').length;
        $('.welcome_top_content').eq(currentIndex).show();
        
        // Update tab selection based on currentIndex
        $('.welcome_top_tab .swiper_wrapper .swiper_item').eq(currentIndex).addClass('welcome_hover').siblings().removeClass('welcome_hover');
    }

    // Set an interval to call showNextSlide every, for example, 3000 milliseconds (3 seconds)
    var interval = setInterval(showNextSlide, 2000);

    // Pause auto-play when mouse is over the tabs
    $('.welcome_top_tab .swiper_wrapper .swiper_item').on('mouseover', function () {
        clearInterval(interval); // Clear the auto-play interval
    });

    // Resume auto-play when mouse leaves the tabs
    $('.welcome_top_tab .swiper_wrapper .swiper_item').on('mouseout', function () {
        interval = setInterval(showNextSlide, 2000); // Restart the auto-play interval
    });

    // Trigger the initial auto-play
    showNextSlide();
});



// --------------------------편집장의 선택 컨텐츠 전환 이벤트
$(function () {
    $('.editor_tab a').on('mouseover',function () {
        $('.editor_list').hide();
        $('.editor_list').eq($(this).index()).show();
        $('.editor_btn div').hide();
        $('.editor_btn div').eq($(this).index()).show();
    },function () {
        $('.editor_list').hide();
        $('.editor_list').eq($(this).index()).show();
        $('.editor_btn div').hide();
        $('.editor_btn div').eq($(this).index()).show();
    })
});






