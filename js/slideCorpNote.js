$(function(){
	$('.slideTitle').click(function(){
		// 當點到標題時，若詳細內容是隱藏時則顯示它；反之則隱藏
		var $classA_content = $(this).next('div.slideContent');
			if(!$classA_content.is(':visible')){
				$('.slideInfoBox li div.slideContent:visible').slideUp();
			}
			$classA_content.slideToggle();

		var classQ_Arrow = $(this).children('.slideArrow');
			$('.slideArrow').not(classQ_Arrow).removeClass('open');
			  //toggle rotate class
			classQ_Arrow.toggleClass('open');
			  
	}).siblings().addClass('slideContent').hide();
	$('.slideInfoBox li div.slideArrow:first').addClass('open');
});
