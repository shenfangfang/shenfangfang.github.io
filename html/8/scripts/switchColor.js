/**
 * Created by Administrator on 2015/12/23.
 */
$(function () {
    $(".color_change img").click(function () {
        var imgSrc=$(this).attr("src"); /*��ȡ��ǰͼƬ����src*/

        var i=imgSrc.lastIndexOf("."); /*�ҵ�src�ַ��������һ��"."������*/
        var unit=imgSrc.substring(i); /*��ȡi������i������������ַ�����*/
        imgSrc=imgSrc.substring(0,i); /*��ȡ��λ��0��ʼ��λ��i֮����ַ���*/
        //var imgSrc_big=imgSrc+"_one_big"+unit;/*�ַ���ƴ��*/
        var newImgSrc=imgSrc.replace("images/pro_img/","");/*imgSrcֵΪ:"images/pro_img/blue.jpg";��"images/pro_img/"��""�滻*/
        newImgSrc=newImgSrc.replace(".jpg",""); /*��.jpgҲ��""�滻�������ڵ�newImgSrcֵΪ"blue"*/

        var imgAlt=$(this).attr("alt");/*��ȡ��ǰͼƬ����alt*/
        $(".color_change strong").text(imgAlt);/*�ı���ɫ������ʾ*/

        $("#jnProitem .imgList li").hide(); /*��Ӧ�����Сͼ��������ʾ*/
        $("#jnProitem .imgList").find(".imgList_"+newImgSrc).show();
        /*���Сͼ�ĵ�һ������һ�ε��������Ŵ�������ʾ��ͼƬ����ԭ����ͼƬ*/
        $("#jnProitem .imgList").find(".imgList_"+newImgSrc).eq(0).find("img").trigger("click");



    })
})
