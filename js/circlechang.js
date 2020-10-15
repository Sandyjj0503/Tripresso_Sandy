
$(document).ready(function(){
	//滑鼠經過，改變圖片-start-
  $('.circleLink').mouseover(function(){
  	var N = $(this).attr("id");
  	$(this).children(".circleImg").attr("src","img/imgCircleLink"+N+"-c.png");
  });
  $('.circleLink').mouseout(function(){
    var X = $(this).attr("id");
    $(this).children(".circleImg").attr("src","img/imgCircleLink"+X+".png");
  });
  //滑鼠經過，改變圖片-end-
});
