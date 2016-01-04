/**
 * Created by Administrator on 2015/12/23.
 */
$(function () {
    $(".color_change img").click(function () {
        var imgSrc=$(this).attr("src"); /*获取当前图片属性src*/

        var i=imgSrc.lastIndexOf("."); /*找到src字符串中最后一个"."的索引*/
        var unit=imgSrc.substring(i); /*获取i（包括i）索引后面的字符串，*/
        imgSrc=imgSrc.substring(0,i); /*获取从位置0开始到位置i之间的字符串*/
        //var imgSrc_big=imgSrc+"_one_big"+unit;/*字符串拼接*/
        var newImgSrc=imgSrc.replace("images/pro_img/","");/*imgSrc值为:"images/pro_img/blue.jpg";将"images/pro_img/"用""替换*/
        newImgSrc=newImgSrc.replace(".jpg",""); /*将.jpg也用""替换掉；现在的newImgSrc值为"blue"*/

        var imgAlt=$(this).attr("alt");/*获取当前图片属性alt*/
        $(".color_change strong").text(imgAlt);/*改变颜色文字显示*/

        $("#jnProitem .imgList li").hide(); /*对应的左侧小图隐藏与显示*/
        $("#jnProitem .imgList").find(".imgList_"+newImgSrc).show();
        /*左侧小图的第一个触发一次点击，否则放大镜区域显示的图片还是原来的图片*/
        $("#jnProitem .imgList").find(".imgList_"+newImgSrc).eq(0).find("img").trigger("click");



    })
})
