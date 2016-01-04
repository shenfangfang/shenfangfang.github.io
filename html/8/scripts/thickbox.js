/**
 * Created by Administrator on 2015/12/22.
 */
 $(function(){
     $("#jnProitem span a").click(function(){
         $("#layer .show img").remove(); //先移除遮罩层中的img元素。
         var showImg=$(this).parents().find(".zoom img").attr("src"); /*找到该图片的src属性，即路径*/
         $("#layer").show();  /*显示遮罩层*/
         $("#layer .show").append("<img src="+showImg+"/>").show();/*增加并显示遮罩层中的图片*/
     });
     $("#layer input").click(function(){
         $("#layer").hide();     /*隐藏遮罩层及图片*/
         $("#layer .show").hide();
     });
 })