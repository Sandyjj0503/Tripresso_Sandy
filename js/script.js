var vm = new Vue({
    el: "#main",
    data: {
        totalRecord: "30",
        totalPage: "3",
        dataList: [],
    },
    created: function () {
        this.getList();
    },
    methods: {
        rating_asc: function () {
            $(".searchParams").attr("value","rating_asc");
            var searchParams = $(".searchParams").val();
            var searchParam = "?sort=rating_asc";
            var sort = vm.getSearchParams("sort") != undefined ? vm.getSearchParams("sort") : "";

            var getUrlString = location.href;
            var url = new URL(getUrlString);
            var ratingParam = url.searchParams.get('sort');

           
            if (sort.length == 0 ) {
                window.location.href =location.href + searchParam;
            } else if (sort.length > 0 && ratingParam == "rating_desc"){
                var arr = getUrlString.split("?"); 
                getUrlString = arr[0];
                window.location.href =getUrlString + "?sort=rating_asc";
            } else {
                var arr = getUrlString.split("?"); 
                getUrlString = arr[0];
                window.location.href =getUrlString +"?sort="+ searchParams;
            }
        },
        rating_desc: function () {
            $(".searchParams").attr("value","rating_desc");
            var searchParams = $(".searchParams").val();
            var searchParam = "?sort=rating_desc";
            var sort = vm.getSearchParams("sort") != undefined ? vm.getSearchParams("sort") : "";
           
            var getUrlString = location.href;
            var url = new URL(getUrlString);
            var ratingParam = url.searchParams.get('sort');
            
            if (sort.length == 0 ) {
                window.location.href =location.href + searchParam;
            } else if (sort.length > 0 && ratingParam == "rating_asc"){
                var arr = getUrlString.split("?"); 
                getUrlString = arr[0];
                window.location.href =getUrlString + "?sort=rating_desc";
            } else {
                var arr = getUrlString.split("?"); 
                getUrlString = arr[0];
                window.location.href =getUrlString +"?sort="+ searchParams;
            }
        },
        price_asc: function () {
            $(".searchParams").attr("value","price_asc");
            var searchParams = $(".searchParams").val();
            var searchParam = "?sort=price_asc";
            var sort = vm.getSearchParams("sort") != undefined ? vm.getSearchParams("sort") : "";

            var getUrlString = location.href;
            var url = new URL(getUrlString);
            var priceParam = url.searchParams.get('sort');

           
            if (sort.length == 0 ) {
                window.location.href =location.href + searchParam;
            } else if (sort.length > 0 && priceParam == "price_desc"){
                var arr = getUrlString.split("?"); 
                getUrlString = arr[0];
                window.location.href =getUrlString + "?sort=price_asc";
            } else {
                var arr = getUrlString.split("?"); 
                getUrlString = arr[0];
                window.location.href =getUrlString +"?sort="+ searchParams;
            }
        },
        price_desc: function () {
            $(".searchParams").attr("value","price_desc");
            var searchParams = $(".searchParams").val();
            var searchParam = "?sort=price_desc";
            var sort = vm.getSearchParams("sort") != undefined ? vm.getSearchParams("sort") : "";
           
            var getUrlString = location.href;
            var url = new URL(getUrlString);
            var priceParam = url.searchParams.get('sort');
            
            if (sort.length == 0 ) {
                window.location.href =location.href + searchParam;
            } else if (sort.length > 0 && priceParam == "price_asc"){
                var arr = getUrlString.split("?"); 
                getUrlString = arr[0];
                window.location.href =getUrlString + "?sort=price_desc";
            } else {
                var arr = getUrlString.split("?"); 
                getUrlString = arr[0];
                window.location.href =getUrlString +"?sort="+ searchParams;
            }
        },
        getList: function () {
            var vm = this;
            var page = vm.getSearchParams("page") != undefined ? vm.getSearchParams("page") : "1";
            if (!$.isNumeric(page)) { page = "1"; }

            var getUrlString = location.href;
            var url = new URL(getUrlString);
            var searchParams = url.searchParams.get('sort');
            $(".searchParams").attr("value",searchParams);
            console.log(searchParams)

            // //組合param
            var searchParam = "";

            var sort = vm.getSearchParams("sort") != undefined ? vm.getSearchParams("sort") : "";
            if (sort.length > 0 && searchParams != "") { searchParam += "&sort=" + searchParams; }
            

            var url = "https://cors-anywhere.herokuapp.com/https://interview.tripresso.com/tour/search?row_per_page=10&page="+ page + searchParam;
            $.ajax({
                url: url,
                type: "GET",
                headers: {
                    Accept: "application/json; charset=utf-8"
                },          
                dataType: "json",
                success: function (result) {
                    var pageBtnHtml = getPageBtnHtml(vm.totalRecord, vm.totalPage, page, searchParam);
                    vm.dataList = result.data.tour_list;
                    $("#page-btn").html(pageBtnHtml);
                }, beforeSend: function () {
                    $('#loadingIMG').show();
                }, complete: function () {
                    $('#loadingIMG').hide();
                }, error: function (err) {
                    console.log(err)
                }
            });    
        },
        getSearchParams: function () {
            var key = false, res = {}, itm = null;
            var qs = location.search.substring(1);
            if (arguments.length > 0 && arguments[0].length > 1)
                key = arguments[0];
            var pattern = /([^&=]+)=([^&]*)/g;
            while (itm = pattern.exec(qs)) {
                if (key !== false && decodeURIComponent(itm[1]) === key)
                    return decodeURIComponent(itm[2]);
                else if (key === false)
                    res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
            }
            return key === false ? res : null;
        }
    }
});