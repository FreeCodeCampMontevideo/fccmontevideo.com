// JS Goes here - ES6 supported


/* global $ */
$(document).ready(function() {
    var navigationHeight = $('.navigation').height();

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top - navigationHeight
                }, 1000);
                return false;
            }
        }
    });
});
