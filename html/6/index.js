/*!
 * images lunbo
 * by shenfangfang
 * 2016-9-8 v1.0
 */
//大屏轮播图
$(function(){
    //配合index.html中$("#two li").eq(0) 默认增加.on;这样可以使一进入页面就可以看到第一张图及下方对应的数字显示。
    $("#one li").eq(0).addClass("on");

    //自动播放
    var i=0;
    var t=setInterval(move,1500);

    //自动播放及向右移动函数
    function move(){
        i++;
        if(i==6){
            i=0;
        }
        $("#one li").eq(i).fadeIn(600).siblings().fadeOut(600);
        $("#two li").eq(i).addClass("on").siblings().removeClass("on");

    }
    //向左移动函数
    function moveL(){
        i--;
        if(i==-1){
            i=5;
        }
        $("#one li").eq(i).fadeIn(600).siblings().fadeOut(600);
        $("#two li").eq(i).addClass("on").siblings().removeClass("on");
    }

    //点击向左\向右移动
    $("#left").click(function(){
        moveL();
    })
    $("#right").click(function(){
        move();
    })

    //手动控制轮播图，鼠标滑过下方的数字
     $("#two li").mouseover(function(){
         $(this).addClass("on").siblings().removeClass("on");
         var index=$(this).index();
         i=index;
         $("#one li").eq(index).stop().fadeIn(600).siblings().stop().fadeOut(600);
     });

    //鼠标移入移出，
    //这里要注意选择器要选择的是轮播元素$("#lunbo"),而不是子元素的$("#lunbo #one") 或$("#lunbo #two")，如果只选择$("#lunbo #one")，会导致鼠标在$("#lunbo #two")上不能停止定时器。
    $("#lunbo").hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(move,1500);
    })

})



