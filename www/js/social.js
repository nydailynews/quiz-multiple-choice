$(document).ready(function() {
window.setTimeout(function() {
var ra = ra || {};
ra.click = function() {
    $("body").on("click", function(e) {
        ra.target = ra.getTarget(e);

        if (ra.target != "" && typeof ra.target !== "undefined") {
            switch (ra.target) {
                 case "ra-enlarge":
                     var theTarget = e.target;
                    ra.img.enlarge($(theTarget).parent(".ra-figure"));
                     break;
                 case "rao":
                 case "rao-close":
                     ra.overlay.hide();
                     break;
                case 'ra-share-f':
                    ra.share.facebook();
                    break;
                 case 'quotations':
                     ra.blockquote.share();
                     break;
            }
        }
        ra.target = "";
    });
};
ra.getTarget = function(e){
    if (e.target.id != "") ra.target = e.target.id;
    else if ($(e.target).attr("class") != "" && $(e.target).attr("class") != undefined) {
        ra.target = $(e.target).attr("class").split(/\s+/)[0];
    }
    return ra.target;
};

ra.getTarget = function(e){
    if (e.target.id != "") ra.target = e.target.id;
    else if ($(e.target).attr("class") != "" && $(e.target).attr("class") != undefined) {
        ra.target = $(e.target).attr("class").split(/\s+/)[0];
    }
    return ra.target;
};
ra.share={};
ra.share.initialize = function(){
    var fbAppId="236665236693741";

    //FACEBOOK INITIALIZATION
    (function(e, a, f) {
        var c, b = e.getElementsByTagName(a)[0];
        if (e.getElementById(f)) {
            return;
        }
        c = e.createElement(a);
        c.id = f;
        c.src = "//connect.facebook.net/en_US/sdk.js";
        b.parentNode.insertBefore(c, b);
    }(document, "script", "facebook-jssdk"));

    window.fbAsyncInit = function() {
        FB.init({
        // appId: 107464888913,
        appId: fbAppId,
        xfbml: true,
        version: 'v2.1',
        status:true
        });
    };

    //TWITTER INITIALIZATION
    ! function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) {js = d.createElement(s); js.id = id; js.src = "http://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs); } }(document, "script", "twitter-wjs");

}

ra.share.facebook = function(){
    var title = $('#og_url').attr('content');
    var url = document.location.href;
    FB.ui({
        method: 'share',
        href: url
    });
}
    ra.share.initialize();
    ra.click();
}, 2000);
});
