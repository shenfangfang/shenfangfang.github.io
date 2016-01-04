/**
 * Created by Administrator on 2015/12/24.
 */
$(function () {
    $("#cart a").click(function () {
        var pro_name=$("#jnDetails").find("h4:first").text();
        var pro_size=$(".pro_size strong").text();
        var pro_color=$(".color_change strong").text();
        var pro_num=$(".pro_num .num_sort").val();
        var amount=$ (".pro_price strong").text();
        $("#buyList .content").append("<p>你购买的是："+pro_name+"；颜色："+pro_color+"；尺寸："+pro_size+"；数量"+pro_num+"；共计："+amount+"元；"+"</p>")
        $("#buyList").show();

        $(".content .close").click(function () {
            $("#buyList .content p").empty();
            $("#buyList").hide();
        })

    });
})