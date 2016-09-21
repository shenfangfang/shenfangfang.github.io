/*!
 * games list
 * by shenfangfang
 * 2016-9-19 v1.0
 */

$(function(){
   $("dd").hover(function(){
       $(this).children(".t").addClass("hide");
       $(this).children(".f").removeClass("hide");
       $(this).siblings("dd").children(".f").addClass("hide");
       $(this).siblings("dd").children(".t").removeClass("hide");
   }),function(){
       $(this).children(".t").removeClass("hide");
       $(this).children(".f").addClass("hide");
   }
})

