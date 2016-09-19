/*!
 * images list lunbo
 * by shenfangfang
 * 2016-9-8 v1.0
 */
//多个列表轮播
$(function(){
    var scrnews=$("#todays .slider-main");
    var newst=setInterval(scroL,3500);
    //向右滚动
    function scroR(){
        scrnews.animate({left:0},500,function(){
            $(this).children("li:last").prependTo(this);
            $(this).css("left",-1000);
        })
    }
    //向左滚动
    function scroL(){
        scrnews.animate({left:-2000},500,function(){
            $(this).children("li:first").appendTo(this);
            $(this).css("left",-1000);
        })
    }
    //鼠标移到.slider-main上停止滚动
    scrnews.hover(function(){
        clearInterval(newst);
    },function(){
        newst=setInterval(scroL,3500);
    })

    //鼠标移动到向左移、向右移上时，停止滚动，需要注意在hover的两个函数后，增加了两个click事件
    $("#todays .slider-page a").hover(function () {
        clearInterval(newst);
    }), function () {
        newst = setInterval(scroL, 3500);
    }
    $("#todays .slider-prev").click(function () {
        clearInterval(newst);
        scroR();
    })
    $("#todays .slider-next").click(function () {
        clearInterval(newst);
        scroL();
    })

})



