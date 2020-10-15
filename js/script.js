var vm = new Vue({
    el: "#main",
    data: {
        totalRecord: "100",
        totalPage: "10",
        dataList: [],
    },
    created: function () {
        this.getList();
    },
    methods: {
        getList: function () {
            var vm = this;
            var page = vm.getSearchParams("page") != undefined ? vm.getSearchParams("page") : "1";
            if (!$.isNumeric(page)) { page = "1"; }
            // //組合param
            var searchParam = "";

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