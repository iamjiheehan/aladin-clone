$(function () {
    // Array of book titles
    var bookTitles = [
        "아주 희미한 빛으로도",
        "연남동 빙굴빙굴 빨래방",
        "메리골드 마음 세탁소",
        "또 못 버린 물건들",
        "너무나 많은 여름이",
        "있을 법한 모든것",
        "순도 100퍼센트의 휴식"
    ];

    var $swiperWrapper = $('#jinnyWelcome_Back .swiper_wrapper');

    // Loop through book titles and make separate AJAX requests
    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), // Limit to 1 result
            headers: { Authorization: "KakaoAK 6d7be6265b1495468abf689fe747c801" }
        })
        .done(function (msg) {
            if (msg.documents.length > 0) {
                var book = msg.documents[0]; // Assuming you want the first result

                var $swiperItem = $("<div class='swiper_item'></div>");
                var $cover = $("<div class='cover'></div>");

                // Thumbnail and layer
                $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                var $jinnybtnlayer = $("<div class='jinnybtnlayer'></div>");
                $jinnybtnlayer.append("<a href='#'>장바구니에 담기</a>");
                $jinnybtnlayer.append("<a href='#'>구매했어요</a>");
                $jinnybtnlayer.append("<a href='#'>관심없어요</a>");
                $cover.append($jinnybtnlayer);

                $swiperItem.append($cover);

                // Title
                var $text = $("<div class='text'></div>");
                var $title = $("<div class='title'></div>");
                $title.append("<a href='#'>" + book.title + "</a>");
                $text.append($title);
                $swiperItem.append($text);

                $swiperWrapper.append($swiperItem);
            }
        });
    });
});
