// ----------------추천마법사의 선택 레이어 호버

$(function () {
    $(".cover").hover(function () {
        $(this).children(".jinnybtnlayer").show();
        }, function () {
            $(".jinnybtnlayer").hide();
    });
})

