/**
 * Created by Administrator on 2015/12/18.
 */
/*二级导航菜单显示/隐藏效果*/
/* 也可以用find方法实现找到对应元素进行隐藏
    $(this).find(".jnNav").show();
    $(this).find(".jnNav").hide();
*/

$(function(){
    $("#nav li").hover(function(){
       $(this).children().eq(1).css("display","block ");
    }, function(){
        $(this).children().eq(1).css("display","none ");
    })
})