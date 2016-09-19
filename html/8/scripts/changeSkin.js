/**
 * Created by Administrator on 2015/12/17.
 */
//网页换肤效果，主页面要提前引入cookies插件
$(function(){
    var cookie_skin= $.cookie("MyCssSkin");
    if(cookie_skin){
        switchSkin(cookie_skin);
    }
    //点击事件,调用函数来保存cookie
    $("#skin li").click(function(){
        switchSkin(this.id);/*调用修改皮肤函数，this.id去的 $("#skin li")的id*/
    });

    function switchSkin(skinName){
        //修改界面上的皮肤选中状态，当前点击皮肤被选中，同辈元素去掉选中状态。
        $("#"+skinName).addClass("selected")
            .siblings().removeClass("selected");
        //通过更改导入的皮肤样式的href属性，改变皮肤。
        $("#cssfile").attr("href","styles/skin/"+skinName+".css");
        //存cookie，将当前cookie保存为MyCssSkin
        $.cookie("MyCssSkin",skinName,{path:'/',expires:10});
    }
})