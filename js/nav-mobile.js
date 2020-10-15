// JavaScript Document
$(function(){

	$("#mobtn").on("click", function(){
		$("#mobilenav").slideToggle(300);
		return false;
	});
	
	/*$("#mobileNav").on("click", function(){
		return false;
	});*/

	/*$(".otherlist").hide();
	$(".otherlist").siblings('a').click(function(event) {
		$(this).siblings('.otherlist').slideToggle(300);
		event.preventDefault();
	});*/


	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("#mobilenav").attr("style","");
		}
	}
	
});

$(function () {

    $("#mobileNav").click(function (event) {
        $(this).slideUp(300).removeClass('active');
        event.stopPropagation();
    });

    $("#mobileNav>ul").click(function (event) {
        event.stopPropagation();
    });

    $("#mobileNavBtn").on("click", function () {
        $("#mobileNav").slideToggle(300).toggleClass('active');
        $("#menu-mobile").toggleClass('active');
        return false;
    });
    /*$("#mobileNav").on("click", function(){
		return false;
	});*/

    $(".otherlist").hide();
    $(".otherlist").siblings('.caret').click(function (event) {
        $(this).toggleClass('active').siblings('.otherlist').slideToggle(300);
        return false;
    });



    $(window).on("resize", CLEARSTYLE);

    function CLEARSTYLE() {
        if ($(window).innerWidth() > 736) {
            $("#mobileNav").attr("style", "");
        }
    }

});


