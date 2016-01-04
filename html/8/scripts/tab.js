/**
 * Created by Administrator on 2015/12/23.
 */
$(function () {
    $(".tab_menu li").click(function () {
        var i=$(this).index();
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".tab_box div").eq(i).removeClass("hide").siblings().addClass("hide");
    })
})
