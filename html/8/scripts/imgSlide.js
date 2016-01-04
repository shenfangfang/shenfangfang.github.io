/**
 * Created by Administrator on 2015/12/21.
 */
/*index.html页面右侧下部品牌活动横向滚动效果*/
$(function(){
    $("#jnBrandTab li a").click(function(){
        $(this).parent().addClass("chos").siblings().removeClass("chos");//右上角标题样式设置
        var index=$("#jnBrandTab li a").index(this);//获取当前索引
        showBrandList(index);//调用动画函数
        return false;
    }).eq(0).click();// eq(0).click()表示初始化第一个
})

function showBrandList(index) {
    var rollobj=$("#jnBrandList");
    var rollWidth =  rollobj.find("li").outerWidth();//使用outerWidth()方法获取每一个li元素的外部宽度，包括补白和边框
    rollWidth = rollWidth * 4; //一个版面的宽度
    rollobj.stop(true, false).animate({left: -rollWidth * index}, 1000); //stop(true,false)表示清除后续动画序列，当前动画执行完
}
