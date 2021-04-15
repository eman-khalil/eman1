$(function(){
    "use strict";
    //adjust slider height

    var windoH = $(window).height(),
        upperH = $(".upper-bar").innerHeight(),
        navH = $(".navbar").height();
    $(".slider , .carousel-item").height(windoH - (upperH + navH ));
})


//featured work shuffel
$(".featured-work ul li").on("click",function(){
   $(this ).addClass("active").siblings().removeClass("active");
   if($(this).data("class") === "all")
   {
       $(".padding-0 .col-md").css("opacity" ,1);
   }else{
    $(".padding-0 .col-md").css("opacity" , ".08");
    $($(this).data("class")).parent().css("opacity",1);
   }
});





