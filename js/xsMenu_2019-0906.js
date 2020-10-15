// JavaScript Document
$(function(){

	$("#btn").on("click", OPENOPEN );
	$("#xsNav li").on("click", OPENOPEN );

	function OPENOPEN(){
		$("#xsNav").slideToggle(300);
	}

	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("#xsNav").attr("style","");
		}
	}

});

$(function(){
	$('.menuTitle').click(function(){
		// 當點到標題時，若詳細內容是隱藏時則顯示它；反之則隱藏
		var $classA_content = $(this).next('div.menuListContent');
			if(!$classA_content.is(':visible')){
				$('.subMenu li div.menuListContent:visible').slideUp();
			}
			$classA_content.slideToggle();

		var classQ_Arrow = $(this).children('.menuTitleArrow');
			$('.menuTitleArrow').not(classQ_Arrow).removeClass('open');
			  //toggle rotate class
			classQ_Arrow.toggleClass('open');
			  
	}).siblings().addClass('menuListContent').hide();
});
