function fb_click() {
    u = location.href;
    t = document.title;
    window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
     return false;
}
function fb_click_item(u,t) {
    if (u == "" || u == undefined) { u = location.href; }
    if (t == "" || t == undefined) { t = document.title; }
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), '_blank', 'width = 700, height = 650');
    // return false;
}
function fbmessenger_click(u) {
    if (u == "" || u == undefined) { u = location.href; }
    window.open('fb-messenger://share?link=' + encodeURIComponent(u) + '&app_id=128100187245788');
}
function plurk_click() {
    u = location.href;
    t = document.title;
    msg = encodeURIComponent(u).concat(' (').concat(encodeURIComponent(t)).concat(')');
    window.open('http://www.plurk.com/?status=' + msg + '&qualifier=shares');
    // return false;
}
function twitter_click() {
    u = location.href;
    t = document.title;
    msg = encodeURIComponent(t).concat(' ').concat(encodeURIComponent(u));
    window.open('http://twitter.com/home/?status=' + msg);
    return false;
}
function twitter_click_item(u, t) {
    if (u == "" || u == undefined) { u = location.href; }
    if (t == "" || t == undefined) { t = document.title; }
    msg = encodeURIComponent(t).concat(' ').concat(encodeURIComponent(u));
    window.open('http://twitter.com/home/?status=' + msg);
    return false;
}
function google_click() {
    u = location.href;
    window.open('https://plus.google.com/share?url='.concat(encodeURIComponent(u)), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    //return false;
}
function google_click_item(u, t) {
    if (u == "" || u == undefined) { u = location.href; }
    if (t == "" || t == undefined) { t = document.title; }
    window.open('https://plus.google.com/share?url='.concat(encodeURIComponent(u)), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    //return false;
}
function sina_click() {
    u = location.href;
    t = document.title;
    window.open('http://v.t.sina.com.cn/share/share.php?title=' + encodeURIComponent(t) + '&url=' + encodeURIComponent(u) + '&source=bookmark', '_blank', 'width=450,height=400');
    //return false;
}

//line
function line_click(isMobile) {
    if (isMobile == "" || isMobile == undefined) { isMobile = false; } else if (isMobile == "True") { isMobile = true; }
    t = document.title;
    u = location.href;
    if (isMobile == true) {
        if (u.indexOf("?") == -1) { u += '?openExternalBrowser=1'; } else { u += '&openExternalBrowser=1'; }
        window.open('http://line.me/R/msg/text/?' + t + '%0D%0A' + u);
    } else {
        window.open('https://social-plugins.line.me/lineit/share?text=' + t + '&url=' + encodeURIComponent(u));
    }
    return false;
}
function line_click_item(u, t, isMobile) {
    if (u == "" || u == undefined) { u = location.href; }
    if (t == "" || t == undefined) { t = document.title; }
    if (isMobile == "" || isMobile == undefined) { isMobile = false; } else if (isMobile == "True") { isMobile = true; }
    if (isMobile == true) {
        if (u.indexOf("?") == -1) { u += '?openExternalBrowser=1'; } else { u += '&openExternalBrowser=1'; }
        window.open('http://line.me/R/msg/text/?' + t + '%0D%0A');
    } else {
        window.open('https://social-plugins.line.me/lineit/share?text=' + t + '&url=' + encodeURIComponent(u));
    }
    return false;
}

//wechat 手機出現網址,PC出現QRCODE
function wechat_click() {
    window.open("http://api.addthis.com/oexchange/0.8/forward/wechat/offer?url=" + location.href + "&title=" + $('meta[name=title]').attr('content') + "&description=" + $('meta[name=descript]').attr('content'));
    return false;
}
function wechat_click_item(u, t) {
    if (u == "" || u == undefined) { u = location.href; }
    if (t == "" || t == undefined) { t = document.title; }
    window.open("http://api.addthis.com/oexchange/0.8/forward/wechat/offer?url=" + u + "&title=" + t + "&description=" + $('meta[name=descript]').attr('content'));
}

function linkedin_click() {
    u = location.href;
    t = document.title;
    window.open('http://www.linkedin.com/shareArticle?mini=true&title=' + encodeURIComponent(t) + '&url=' + encodeURIComponent(u), '_blank', 'width=800,height=600');
    //return false;
}
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.10&appId=128100187245788";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function () {
    FB.init({
        appId: '128100187245788',
        xfbml: true,
        version: 'v2.10'
    });

    // ADD ADDITIONAL FACEBOOK CODE HERE
};

function postToFeed(name, description, link, picture) {
    var n, d, l, p;
    if ((typeof name == 'undefined') || (name == '')) {
        n = document.title;
    } else {
        n = name;
    }
    if ((typeof description == 'undefined') || (description == '')) {
        var d = '';
        var meta = document.getElementsByTagName('meta');
        for (var i = 0; i < meta.length; i++) {
            if (meta[i].getAttribute('name') == 'description') { d = meta[i].getAttribute('content'); break; };
        }
    } else {
        d = description;
    }
    if ((typeof link == 'undefined') || (link == '')) {
        l = location.href;
    } else {
        l = link;
    }
    if ((typeof picture == 'undefined') || (picture == '')) {
        p = 'http://www.1111.com.tw/images/share_job_fb.jpg';
    } else {
        p = picture;
    }
    var obj = {
        method: 'feed',
        name: n,
        caption: '',
        description: d,
        link: l,
        picture: p
    };

    function callback(response) {
        //document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
    }

    FB.ui(obj, callback);
}
