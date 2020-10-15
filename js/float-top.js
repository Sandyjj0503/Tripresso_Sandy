// jQuery Document
$(function(){
	$(".goTop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
     });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('.goTop').fadeIn("fast");
        } else {
            $('.goTop').stop().fadeOut("fast");
        }
    });

});
