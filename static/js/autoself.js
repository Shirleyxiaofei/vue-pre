/**
 * 自适应
 */
!(function (win, doc) {
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        var viewW = window.innerWidth < 1200 ? 1200 : window.innerWidth
        var winWidth = (viewW / 1920) * 100;
        winWidth > 100 ? winWidth = 100: winWidth;
        doc.documentElement.style.fontSize =  winWidth + 'px';
    }

    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

    var timer = null;

    win.addEventListener(evt, function () {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 300);
    }, false);

    win.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 300);
        }
    }, false);

    // 初始化
    setFontSize();

}(window, document));
