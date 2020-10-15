$(function () {
    var $wrap = $('.scrollable');
    var $all = $(".scrollInbox,.scrollNavi,.scrollPrev,.scrollNext");
    var $navi = $(".scrollNavi");
    var $next = $(".scrollNext");
    var $prev = $(".scrollPrev");

    var $list = $(".scrollInbox"),
        $item = $list.children('li'),
        _showIndex = 0,                                 //一頁顯示幾個
        _length = $item.length,
        _maxPage = _length //Math.ceil($item.length/_showIndex),  //最後一頁
    _lastItem = $item.length % _showIndex;            //未滿一頁的項目
    var pageIndex = 0;  //記錄目前的頁數  
    var _wrapWidth;

    var changeDOM;
    var _oldShowIndex = 0;
    var windowWidth = 0;
    var _once = true;
    var _speed = 2000;
    var $newItem = $list.children('li');

    $(window).resize(function (event) {
        var _newItemWidth;
        clearTimeout(changeDOM);
        changeDOM = 0;
        changeDOM = setTimeout(function () {
            var $window = $(window);
            var _winWidth = $window.width();

            if (_winWidth != windowWidth) {
                if (_winWidth < 300) {
                    _showIndex = 1
                } else if (_winWidth < 480) {
                    _showIndex = 1
                } else if (_winWidth < 767) {
                    _showIndex = 2
                } else if (_winWidth < 991) {
                    _showIndex = 2
                } else if (_winWidth < 1200) {
                    _showIndex = 3
                } else {
                    if (_length <= 4) {
                        _showIndex = _length
                    }
                    else
                        _showIndex =4
                }

                if (_oldShowIndex == _showIndex && _winWidth >= 1200) {
                    return;
                }

                _oldShowIndex = _showIndex;

                if (_length <= _showIndex) {
                    $next.hide();
                    $prev.hide();
                } else {
                    $next.show();
                    $prev.show();
                }
                $('.cloneItem').remove();

                //var _html=[];
                for (var i = 0; i < _showIndex; i++) {
                    //_html.push($item.eq(i).clone());                              //複製前面幾項到最後(使轉場連貫) 
                    $list.append($item.eq(i).clone().addClass('cloneItem'));         //JQuery1.7用
                }
                //$list.append(_html);
                $newItem = $list.children('li');


                if (_winWidth < 300) {
                    _newItemWidth = $wrap.width();
                } else {
                    //$wrap.width( $item.outerWidth(true) * _showIndex );
                    _newItemWidth = $wrap.width() / _showIndex;
                }

                $newItem.width(_newItemWidth);
                $wrap.height($newItem.height());

                _wrapWidth = $wrap.width();

                $list.stop().css("left", 0);
                pageIndex = 0;

                windowWidth = _winWidth;
            }

        }, 200);
    }).resize().load(function () {
        $wrap.height($newItem.height());
    });;

    var navi = "";                              //圓點
    for (var i = 0; i < _maxPage; i++) {
        navi += "<span";
        if (i == 0) {
            navi += " class=\"active\"";
        }
        navi += "></span>";
    }
    $navi.html(navi);


    function run() {
        var _moveWidth = 0;
        if (!$list.is(":animated")) {
            //if( pageIndex+1 === _maxPage-1 && _lastItem){        //動畫跑完才會 pageIndex++, 但需要再跑動畫前判斷是否已經到最後一頁了, 所以用pageIndex+1來判斷
            //_maxPage-1是因為, pageIndex是從0開始計算,而_maxPage是計算length, 兩個要比較就需要_maxPage-1
            _moveWidth = $item.outerWidth(true);//_lastItem*$item.outerWidth(true);
            //}else{    
            //_moveWidth = _wrapWidth;
            //}

            $list.animate({ left: "-=" + _moveWidth }, _speed, function () {
                if (pageIndex >= _maxPage - 1) {
                    pageIndex = -1;
                    $(this).css("left", 0);
                }
                pageIndex++;
                dot();
            });
        }

    }

    var sid = setInterval(run, 2000);
     $all.mouseenter(function() {
         clearInterval(sid);
         sid = 0;
     });
     $all.mouseleave(function() {
         sid = setInterval(run, 2000);
     });

    function dot() {
        $navi.find("span.active").removeClass();
        $navi.find("span").eq(pageIndex).addClass("active");
    }

    function back() {
        if (!$list.is(":animated")) {
            var _moveWidth = 0;
            //if( pageIndex == _maxPage -1 && _lastItem){                                  
            _moveWidth = $item.outerWidth(true); //_lastItem * $item.outerWidth(true);
            // }else{
            //     _moveWidth = _wrapWidth ;  
            // }
            if (pageIndex <= 0) {
                pageIndex = _maxPage;
                $list.css("left", $item.length * $item.outerWidth(true) * -1);
            }
            $list.animate({ left: "+=" + _moveWidth }, _speed, function () {
                pageIndex--;
                dot();
            });
        }
    }

    $next.click(function () {
        run();
    });
    $prev.click(function () {
        back();
    });


    $wrap.on("swipeleft", function () {
        run();
    }).on("swiperight", function () {
        back();
    });

    $navi.find("span").click(function () {
        pageIndex = $(this).index();
        var _move = 0;
        if (_lastItem > 0 && pageIndex === _maxPage - 1) {
            _move = (pageIndex - 1) * _wrapWidth + _lastItem * $item.outerWidth();
        } else {
            _move = pageIndex * _wrapWidth;
        }

        $list.animate({ left: _move * -1 }, function () {
            dot();
        });
    });

});



// 當網頁載入完
$(window).load(function(){
	var $onweidht=innerWidth;
	 if($onweidht <= 767){
	  $("#floaticon").hide();
	 }
	 else{
	  $("#floaticon").show();

	var $screen = $(window),
		$banner = $('#floaticon').css('opacity', 0).show(),
		_width = $banner.width(),
		_height = $banner.height(),
		_diffY = 330, _diffX = 0,
		_moveSpeed = 500;
	
	$banner.css({
		top: _diffY,	// 往上
		//left: _diffX,   // 靠左
		left: $screen.width() - _width - _diffX - 15,  // 靠右
		opacity: 1
	});
	
	$screen.on('scroll resize', function(){
		var $this = $(this);
		
		$banner.stop().animate({
			top: $this.scrollTop() + _diffY,	// 往上
			//left: $this.scrollLeft() + _diffX,   // 靠左
			left: $this.scrollLeft() + $this.width() - _width - _diffX - 15, // 靠右
			}, _moveSpeed); 
	}).scroll();


 };
});