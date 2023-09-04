$(function () {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: $.param({ query: "또 못 버린 물건들" }),
        headers: { Authorization: "KakaoAK 6d7be6265b1495468abf689fe747c801" }
    })
    .done(function (msg) {
        for (var i = 0; i < msg.documents.length; i++) {
            var book = msg.documents[i];
            var $swiperItem = $("<div class='swiper_item'></div>");
            var $cover = $("<div class='cover'></div>");
            
            // 썸네일 추가
            $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
            
            // 레이어 추가
            var $jinnybtnlayer = $("<div class='jinnybtnlayer'></div>");
            $jinnybtnlayer.append("<a href='#'>장바구니에 담기</a>");
            $jinnybtnlayer.append("<a href='#'>구매했어요</a>");
            $jinnybtnlayer.append("<a href='#'>관심없어요</a>");
            $cover.append($jinnybtnlayer);
            
            $swiperItem.append($cover);

            // 제목 추가
            var $text = $("<div class='text'></div>");
            var $title = $("<div class='title'></div>");
            $title.append("<a href='#'>" + book.title + "</a>");
            $text.append($title);
            $swiperItem.append($text);
            
        }
    });
});