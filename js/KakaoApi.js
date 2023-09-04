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
            
            // Append the thumbnail image
            $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
            
            // Append the jinnybtnlayer
            var $jinnybtnlayer = $("<div class='jinnybtnlayer'></div>");
            $jinnybtnlayer.append("<a href='#'>장바구니에 담기</a>");
            $jinnybtnlayer.append("<a href='#'>구매했어요</a>");
            $jinnybtnlayer.append("<a href='#'>관심없어요</a>");
            $cover.append($jinnybtnlayer);
            
            $swiperItem.append($cover);
            
            // Append the book title
            var $text = $("<div class='text'></div>");
            var $title = $("<div class='title'></div>");
            $title.append("<a href='#'>" + book.title + "</a>");
            $text.append($title);
            
            $swiperItem.append($text);
            
            // Append the swiper_item to your container (replace '#your-container-selector' with your actual selector)
            $('#your-container-selector').append($swiperItem);
        }
    });
});
