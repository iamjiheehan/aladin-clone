// ----------------추천마법사의 선택 레이어 호버

$(function () {
    $(".cover").hover(function () {
        $(this).children(".jinnybtnlayer").show();
        }, function () {
            $(".jinnybtnlayer").hide();
    });
})

//-----------------------------서브페이지 오늘 본 도서목록 리스트 //호버시 delete 버튼 활성화

$(function () {
    $(".recentList_item").on("hover", function(){

    })
});