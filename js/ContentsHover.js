// --------------------------편집장의 선택 컨텐츠 전환 이벤트
$(function () {
    $('.editor_tab a').mouseenter(function () {
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

//------------------------------------------------웰컴 탑 컨텐츠 전환 이벤트

$(function(){
    $('.welcome_top_tab .swiper_wrapper .swiper_item').mouseenter(function () {
        $('.welcome_top_content').hide();
        $('.welcome_top_content').eq($(this).index()).show();
    },function () {
        $('.welcome_top_content').hide();
        $('.welcome_top_content').eq($(this).index()).show();
    });
})






