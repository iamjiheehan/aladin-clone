// ----------------------------------------------관련 구매상품 섹션 API 호출 및 Slick 적용 

$(function () {

    $(function () {
        var bookTitles = [
            "원씽 The One Thing",
            "유연함의 힘",
            "회복탄력성",
            "집착의 법칙",
            "초집중",
            "기브앤테이크",
            "세이노의 가르침",
            "네 안에 잠든 거인을 깨워라",
            "밥 프록터 부의 원리",
            "최적의 공부 뇌",
            "비욘드 디스럽션, 파괴적 혁신을 넘어",
            "미래의 나를 구하러 갑니다.",
            "일의 철학",
            "그레이트 마인드셋"
        ];
    
        var $swiperWrapper = $('.last_wrap-buy #last_bookwrap .swiper_section .swiper_wrapper');
    
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
    
                $(function createSlick() {
                    $(".last_wrap-buy #last_bookwrap .swiper_section .swiper_wrapper").not('.slick-initialized').slick({
                        lazyLoad:'ondemand',
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        dots: true,
                        infinite: true,
                        dotsClass: 'dots_custom',
                    });
                    $(".last_wrap-buy #last_bookwrap .white_circle_prev").on('click',function(e) {
                        // e.preventDefault();
                        $(".last_wrap-buy #last_bookwrap .swiper_section .swiper_wrapper").slick("slickPrev");
                    });
                
                    $(".last_wrap-buy #last_bookwrap .white_circle_next").on('click',function(e) {
                        // e.preventDefault();
                        $(".last_wrap-buy #last_bookwrap .swiper_section .swiper_wrapper").slick("slickNext");
                    });
    
                    $(window).on( 'resize', createSlick );
                });
            });
        });
    });
});


// ----------------------------------------------서브페이지 관련 클릭상품 섹션 API 호출 및 Slick 적용 

$(document).ready(function() {

    $(function () {
        var bookTitles = [
            "아무도 가지 않은 길에 부가 있다",
            "오리지널스",
            "퓨처 셀프",
            "집착의 법칙",
            "슈퍼노멀",
            "기브앤테이크",
            "세이노의 가르침",
            "네 안에 잠든 거인을 깨워라",
            "밥 프록터 부의 원리",
            "최적의 공부 뇌",
            "비욘드 디스럽션, 파괴적 혁신을 넘어",
            "미래의 나를 구하러 갑니다.",
            "대화력의 비밀",
            "심리 대화술"
        ];
    
        var $swiperWrapper = $('.last_wrap-click #last_bookwrap .swiper_section .swiper_wrapper');
    
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
    
                $(function createSlick() {
                    $(".last_wrap-click #last_bookwrap .swiper_section .swiper_wrapper").not('.slick-initialized').slick({
                        lazyLoad:'ondemand',
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        dots: true,
                        infinite: true,
                        dotsClass: 'dots_custom',
                    });
                    $(".last_wrap-click #last_bookwrap .white_circle_prev").on('click',function(e) {
                        // e.preventDefault();
                        $(".last_wrap-click #last_bookwrap .swiper_section .swiper_wrapper").slick("slickPrev");
                    });
                
                    $(".last_wrap-click #last_bookwrap .white_circle_next").on('click',function(e) {
                        // e.preventDefault();
                        $(".last_wrap-click #last_bookwrap .swiper_section .swiper_wrapper").slick("slickNext");
                    });
    
                    $(window).on( 'resize', createSlick );
                });
            });
        });
    });
});

//----------------오늘 본 상품----------------------------

$(document).ready(function() {

    $(function() {
        var bookTitles = [
            "나는 어떻게 삶의 해답을 찾는가",
            "슈퍼노멀",
            "세이노의 가르침",
            "퓨처 셀프",
            "오리지널스",
            "네 안에 잠든 거인을 깨워라",
            "역행자",
            "대화력의 비밀",
            "아주 작은 습관의 힘",
        ];

        var $recentList = $('#recentList');

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
                    
                    var $closeBtn = $("<div class='fix_del hidden'><a href='javascript:void(0);' class='RecentDelete'><img src='./img/btn_del.png' alt='' border='0' /></a></div>");
                    var $Wrapper = $("<li></li>");
                    var $Item = $("<div class='recentList_item'></div>");

                    $Item.append("<a href='javascript:void(0);'><img border='0' class='fiximg1' src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                    
                    $Wrapper.append($closeBtn);
                    $Wrapper.append($Item);
                    $recentList.append($Wrapper);
                }
            });
        });
    });
});