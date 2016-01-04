/**
 * Created by Administrator on 2015/12/23.
 */
$(function(){
    $(".imgList img").click(function () {
        var imgsrc=$(this).attr("src");/*获取当前点击的图片的src属性*/
        var i=imgsrc.lastIndexOf(".") /*找到src字符串中最后一个"."的索引*/
        var unit=imgsrc.substring(i);/*获取i（包括i）索引后面的字符串，*/
        imgsrc=imgsrc.substring(0,i);/*获取从位置0开始到位置i之间的字符串*/
        var imgsrc_big=imgsrc+"_big"+unit; /*字符串拼接*/
        $(".zoom img").attr("src",imgsrc_big);
    })
})