$(function () {
    var isRotated = false;
    $(".book").on("click",function () {
        if (isRotated) {
            $(this).css("transform", "rotateY(35deg)");
            isRotated = false;
        } else {
            $(this).css("transform", "rotateY(180deg)");
            $("#divFlipImg section").css("perspective","none");
            isRotated = true;

        }
    });

    $(".book").on("hover",
        function () {
            if (!isRotated) {
                $(this).css("transform", "rotateY(35deg)");
                $("#divFlipImg .coverItem").show();
            }
        },
        function () {
            if (!isRotated) {
                $(this).css("transform", "rotateY(0deg)");
            }
        }
    );
});


