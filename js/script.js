// JavaScript
$(function(){

  if ($('#c0Cht').val() == '') { $('#c0Cht').val('地區'); $('#c0').val(''); }
  if ($('#d0Cht').val() == '') { $('#d0Cht').val('職務'); $('#d0').val(''); }
  if ($('#t0Cht').val() == '') { $('#t0Cht').val('行業'); $('#t0').val(''); }
  if ($('#cityOrganCht').val() == '') { $('#cityOrganCht').val('地區'); $('#cityOrgan').val(''); }

    $("#top").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#top').fadeIn("fast");
        } else {
            $('#top').stop().fadeOut("fast");
        }
    });
});

$(function(){
	// 預設顯示第一個 Tab
	var _showTab = 0;
	var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
 
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
 
		return false;
	}).find('a').focus(function(){
		this.blur();
	});
});


function resettext(id){
           //恢復文字
           if(id.value == "")
           {
                   id.value = id.defaultValue;
           id.className ="fildform";   
           }
                     }
function cleartext (id){ 
          //清除文字
          id.value ="";
      d.className ="";   
          }

