/**
 * Created by ayongIMac on 15/12/23.
 */
$(function () {
    var price=$(".pro_price strong").text();
    $(".num_sort").change(function () {
        var num=$(this).val();
        var amount=num*price;
        $(".pro_price strong").text(amount);
    }).change();//防止表单元素刷新后依旧保持原来的值而引起的价格没有联动的问题，需要在页面钢价在时，为元素绑定chang事件后立即触发change事件。
})
