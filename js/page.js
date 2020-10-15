function getPageBtnHtml(totalRecord, totalPage, page,searchParam) {
    if (page == undefined || page.length == 0 || !$.isNumeric(page)) { page = 1; } else { page = parseInt(page);}
    if (searchParam == undefined) { searchParam = ""; }
    if (searchParam.length > 0 && searchParam.substring(0, 1) !="&") {
        searchParam = "&" + searchParam;
    }

    var pageBtnHtml = "";
    if (totalRecord > 0) {
        pageBtnHtml +=
            "<div class=\"page-line\">";
        //上一頁
        if (page == 1) {
            pageBtnHtml +=
            "            <span><i class=\"fa fa-angle-left\"></i></span>";
        }else{
            pageBtnHtml +=
            "            <a href=\"?page=" + (page - 1).toString() + searchParam + "\" ><i class=\"fa fa-angle-left\"></i></a>";
        }
        //中間分頁按鈕
        var pStart = 0, pEnd = 0;
        if ((page - 4) < 1) { pStart = 1; } else { pStart = (page - 4); }
        if ((pStart + 9) > totalPage) {
            pEnd = totalPage;
            pStart = pEnd - 9;
            if (pStart < 1) { pStart = 1; }
        } else {
            pEnd = pStart + 9;
        }
        for (var p = pStart; p <= pEnd; p++) {
            if (p == page) {
                pageBtnHtml +=
                "           <span>" + p.toString() + "</span>";
            } else {
                pageBtnHtml +=
                "           <a class=\"\" href=\"?page=" + p.toString() + searchParam + "\">" + p.toString() + "</a>";
            }
        }
        //下一頁
        if (page == totalPage) {
            pageBtnHtml +=
            "           <span><i class=\"fa fa-angle-right\"></i></span>";
        } else {
            pageBtnHtml +=
            "            <a href=\"?page=" + (page + 1).toString() + searchParam + "\" ><i class=\"fa fa-angle-right\"></i></a>";
        }
        pageBtnHtml +=
            "   <div class=\"pageInfor\">跳至</div>" +
            "   <input id=\"goal-page\" type=\"text\" class=\"pageInput\" />" +
            "   <input id=\"total-page\" type=\"hidden\" value=\"" + totalPage + "\" />" +
            "   <div class=\"pageInfor\">頁</div>" +
            "   <button type=\"button\" onclick=\"goGoalPage();\" class=\"buttonPageGo\">GO</button>"+
            "</div>";
    }
    return pageBtnHtml;
}

function goGoalPage() {
    var goalPage = parseInt($("#goal-page").val()), totalPage = parseInt($("#total-page").val());
    var searchParam = $("#search-param").val();
    if (goalPage > totalPage) { goalPage = totalPage; }
    if (goalPage < 1) { goalPage = 1; }

    var currentUrl = new URL(location.href);
    var currentPage = currentUrl.searchParams.get('page');

    var goLink = location.href;
    if (currentPage != undefined) {
        goLink = goLink.replace("page=" + currentPage, "page=" + goalPage);
    } else if (goLink.indexOf("?") > -1) {
        goLink += "&page=" + goalPage;
    } else if (goLink.indexOf("?") ==-1) {
        goLink += "?page=" + goalPage;
    }
    
    window.location.href = goLink;
}