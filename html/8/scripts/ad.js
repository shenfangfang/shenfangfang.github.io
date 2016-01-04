/**
 * Created by Administrator on 2015/12/21.
 */
/*大屏广告切换效果*/
$(function () {
    var index=0;
    var $imgrolls=$("#jnImageroll div a");//广告图片下方文字的集合
    var len=$imgrolls.length;
    var adTimer = null;
    //进入页面时初始化：第一个图片显示
    showImage(0);
    //鼠标经过事件
    $imgrolls.mouseover(function(){
        //获得当前所在文字的索引值index，然后调用图片同步显示函数showImagee
        index=$imgrolls.index(this);
        showImage(index);
    });

     // 鼠标滑入停止动画，滑出开始动画
    $("#jnImageroll").hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        //广告自动轮换函数adTimer实现，调用showImage函数，索引值加1，索引值等于len时，index置为0
        adTimer=setInterval(function(){
                showImage(index);
                index++;
                if(index==len){index=0;}
            },3000);
    }).trigger("mouseleave");

    /**showImage函数体
     * 索引值对应的图片以动画形式显示，同辈其他元素隐藏
     * 索引值对应的文字背景透明度为1，且增加类chos样式；同辈其他元素透明度为0.7，移除类chos样式
     * @param index：图片下方文字的索引值
     */
    function showImage(index){
        $("#JS_imgWrap img").eq(index).fadeIn()
                            .siblings().fadeOut();
        $imgrolls.eq(index).css("opacity","1").addClass("chos")
                                .siblings().css("opacity","0.7").removeClass("chos");
    }
})
