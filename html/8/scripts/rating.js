/**
 * Created by ayongIMac on 15/12/23.
 */
$(function () {

    $(".rating li a").click(function () {
        var className=$(this).parent().attr("class");//点击的li元素的类名，one、two等
        var title=$(this).attr("title");
        alert("您给此商品的评分是："+title);
        var andClassName=className+"star" ; //新类名 onestar
        //alert(andClassName) ;
       $(this).parent().parent().removeClass().addClass("rating "+andClassName);
    })
})