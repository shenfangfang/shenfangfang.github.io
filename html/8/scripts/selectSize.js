/**
 * Created by ayongIMac on 15/12/23.
 */
$(function () {
    $(".pro_size li").click(function () {
        var selectSize=$(this).text();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents().find(".pro_size strong").text(selectSize);
        //$(this).parents("ul").siblings("strong").text(selectSize);
    })
})