/**
 * Created by Administrator on 2015/12/21.
 */
/*超链接文字提示效果：
/*鼠标事件中增加/移除一个元素#tooltip，并在main.css设置此元素absolute绝对定位，通过top、left的值定位该元素位置;
 概念：绝对定位的元素脱离标准文档流（不影响其他元素的布局），它的位置相对于最近的已定位祖先元素，如果元素没有已定位的祖先元素，那么它的位置相对于最初的包含块 */

$(function () {
    var x=10;
    var y=20;
    $("a.tooltip").mouseover(function (e) {
        this.myTitle=this.title;
        this.title=""; //把默认title内容置为空
        var tooltip="<div id='tooltip'>"+this.myTitle+"</div>"; //创建div元素
        $("body").append(tooltip);//把它追加到body中
        $("#tooltip")
            .css({
                top:(e.pageY+y)+"px",
                left:(e.pageX+x)+"px"
            }).show("fast");   //设置X坐标、Y坐标，并且快速显示，相对于body元素定位
    }).mouseout(function () {
            this.title=this.myTitle;
            $("#tooltip").remove();//移除
    }).mousemove(function (e) {
            $("#tooltip")
                .css({
                    top:(e.pageY+y)+"px",
                    left:(e.pageX+x)+"px"
            });
        });
})