// ----------------------------------------------추천 마법사의 선택 API 호출 및 Slick 적용 

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

    // 반복문을 사용한 AJAX 데이터 값 요청
    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), // Limit to 1 result
            headers: { Authorization: "KakaoAK 6d7be6265b1495468abf689fe747c801" }
        })
        .done(function (msg) {
            if (msg.documents.length > 0) {
                var book = msg.documents[0]; // 결과 한 개만 보이도록 제한

                var $swiperItem = $("<div class='swiper_item'></div>");
                var $cover = $("<div class='cover'></div>");

                // 썸네일, 호버 레이어
                $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                var $jinnybtnlayer = $("<div class='jinnybtnlayer'></div>");
                $jinnybtnlayer.append("<a href='#'>장바구니에 담기</a>");
                $jinnybtnlayer.append("<a href='#'>구매했어요</a>");
                $jinnybtnlayer.append("<a href='#'>관심없어요</a>");
                $cover.append($jinnybtnlayer);

                $swiperItem.append($cover);

                // 제목
                var $text = $("<div class='text'></div>");
                var $title = $("<div class='title'></div>");
                $title.append("<a href='#'>" + book.title + "</a>");
                $text.append($title);
                $swiperItem.append($text);

                $swiperWrapper.append($swiperItem);
            }

            $(function () {
                $("#jinnyWelcome_Back .swiper_wrapper").slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                });
                $("#jinnyWelcome .white_circle_prev").on('click',function(e) {
                    // e.preventDefault();
                    $("#jinnyWelcome_Back .swiper_wrapper").slick("slickPrev");
                });
            
                $("#jinnyWelcome .white_circle_next").on('click',function(e) {
                    // e.preventDefault();
                    $("#jinnyWelcome_Back .swiper_wrapper").slick("slickNext");
                });
            });
        });
    });
});


// ----------------------------------------------이달의 주목도서 API 호출 및 Slick 적용 

$(function () {
    var bookTitles = [
        "오펜하이머 각본집",
        "탱크",
        "아메리칸 프로메테우스",
        "ADHD 우울증 치매 이렇게 고쳐라",
        "엄마의 10억",
        "벨기에 에세이",
        "감염 동물",
        "완벽이 온다",
        "물리적 힘"
    ];

    var $swiperWrapper = $('#w_monthBook .swiper_wrapper');

    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), 
            headers: { Authorization: "KakaoAK 6d7be6265b1495468abf689fe747c801" }
        })
        .done(function (msg) {
            if (msg.documents.length > 0) {
                var book = msg.documents[0]; 
                var $swiperItem = $("<div class='swiper_item'></div>");
                var $cover = $("<div class='cover'></div>");

                $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");

                $swiperItem.append($cover);

                var $text = $("<div class='text'></div>");
                var $title = $("<div class='title'></div>");
                $title.append("<a href='#'>" + book.title + "</a>");
                $text.append($title);
                $swiperItem.append($text);
                $swiperWrapper.append($swiperItem);
            }

            $(function () {
                $("#w_monthBook .swiper_wrapper").slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                });
                $("#w_monthBook_type .white_circle_prev").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_monthBook .swiper_wrapper").slick("slickPrev");
                });
            
                $("#w_monthBook_type .white_circle_next").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_monthBook .swiper_wrapper").slick("slickNext");
                });
            });
        });
    });
});

// ----------------------------------------------이주의 특가 API 호출 및 Slick 적용 

$(function () {
    // Array of book titles
    var bookTitles = [
        "뇌가 젊어지는 엄지손가락 자극법",
        "셜록 홈즈의 초대장",
        "선생님도 몰래보는 고사성어 숨은 뜻 이야기",
        "영어회화? 쉬운 패턴의 힘!",
        "나는 배당 투자로 한 달에 두 번 월급 받는다",
        "달콤한 팥소 레시피",
        "못난이 홈베이킹",
        "나 같은 기계들",
        "피너츠 포스터 북"
    ];

    var $swiperWrapper = $('#w_specialPrice .swiper_wrapper');

    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), 
            headers: { Authorization: "KakaoAK 6d7be6265b1495468abf689fe747c801" }
        })
        .done(function (msg) {
            if (msg.documents.length > 0) {
                var book = msg.documents[0]; 

                var $swiperItem = $("<div class='swiper_item'></div>");
                var $cover = $("<div class='cover'></div>");

                $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");

                $swiperItem.append($cover);

                var $text = $("<div class='text type2'></div>");
                var $title = $("<div class='title'></div>");
                var formattedPrice = parseInt(book.sale_price).toLocaleString();
                var $price = $("<div class='price'>" + formattedPrice + "원</div>");
                $title.append("<a href='#'>" + book.title + "</a>");
                $text.append($title);
                $text.append($price);
                $swiperItem.append($text);
                $swiperWrapper.append($swiperItem);
                console.log(book.sale_price);
            }

            $(function () {
                $("#w_specialPrice .swiper_wrapper").slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                });
                $("#w_specialPrice_type .white_circle_prev").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_specialPrice .swiper_wrapper").slick("slickPrev");
                });
            
                $("#w_specialPrice_type .white_circle_next").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_specialPrice .swiper_wrapper").slick("slickNext");
                });
            });
        });
    });
});