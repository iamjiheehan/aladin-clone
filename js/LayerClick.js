// 서브페이지 100자평 카테고리 활성화

$(function () {
    $(".re_select-icon").on("click",function () {
        $(".layer_list").toggleClass("hidden");
    });
});


//이책의 원서 번역서 클릭 레이어 이벤트

$(function () {
    $("#check_emtpy").on("click",function () {
        $("#foreignBookResult").toggleClass("hidden");
        $("#check_active").toggleClass("hidden");    
        $("#check_emtpy").toggleClass("hidden");    
    });
});
