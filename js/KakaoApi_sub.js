// ----------------------------------------------서브페이지 마지막 섹션 API 호출 및 Slick 적용 

$(document).ready(function() {

    $(function () {
        var bookTitles = [
            "88번 버스의 기적",
            "타라바스",
            "지식의 기초",
            "전쟁과 죄책",
            "죽은자의 집 청소",
            "재일코리안 스포츠 영웅 열전",
            "아주 희미한 빛으로도",
            "연남동 빙굴빙굴 빨래방",
            "메리골드 마음 세탁소",
            "또 못 버린 물건들",
            "너무나 많은 여름이",
            "있을 법한 모든것",
            "순도 100퍼센트의 휴식",
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
    
        var $swiperWrapper = $('#last_bookwrap .swiper_section .swiper_wrapper');
    
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
                    $("#last_bookwrap .swiper_section .swiper_wrapper").not('.slick-initialized').slick({
                        lazyLoad:'ondemand',
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        dots: true,
                        infinite: true,
                        dotsClass: 'dots_custom',
                    });
                    $("#last_bookwrap .white_circle_prev").on('click',function(e) {
                        // e.preventDefault();
                        $("#last_bookwrap .swiper_section .swiper_wrapper").slick("slickPrev");
                    });
                
                    $("#last_bookwrap .white_circle_next").on('click',function(e) {
                        // e.preventDefault();
                        $("#last_bookwrap .swiper_section .swiper_wrapper").slick("slickNext");
                    });
    
                    $(window).on( 'resize', createSlick );
                });
            });
        });
    });
});

//------------------오늘 본 상품----------------------------

$(function() {
    var bookTitles = [
        "퓨처 셀프",
        "세이노의 가르침",
        "슈퍼노멀",
        "역행자",
        "집착의 법칙",
        "모든 멋진 일에는 두려움이 따른다",
        "혼자 있는 새벽 4시의 힘",
        "파리의 심리학 카페",
        "멘탈을 회복하는 연습",
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
                
                var $closeBtn = $("<div class='fix_del' style='display: none'><a href='javascript:void(0);' class='RecentDelete'><img src='./img/btn_del.png' alt='' border='0' /></a></div>");
                var $Wrapper = $("<li></li>");
                var $Item = $("<div class='recentList_item'></div>");

                console.log('====================================');
                console.log(title,"hello");
                console.log('====================================');
                $Item.append("<a href='javascript:void(0);'><img border='0' class='fiximg1' src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                
                $Wrapper.append($closeBtn);
                $Wrapper.append($Item);
                $recentList.append($Wrapper);
            }
        });
    });
});

