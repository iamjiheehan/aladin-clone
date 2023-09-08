$(function (){
    $('.btnScrollToTop').on('click', function() {
        $('html, body').animate({scrollTop: '0'}, 680);
    });
});



$(function (){
    $(".goodsbn_wrap .goodsbn_box .goodsbn_close").on('click', function() {
        $('.goodsbn_wrap').hide();
    });
});