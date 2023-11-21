! function(l, a, u, t) {
    function e(t, e) {
        function o() {
            r.timer = setInterval(function() {
                1 == r.winFocus && i(r.opts.direction)
            }, r.opts.interval), l(r.opts.controls.toggle).addClass("et-run").html(r.opts.controls.stopText)
        }

        function n() {
            clearInterval(r.timer), r.timer = 0, l(r.opts.controls.toggle).removeClass("et-run").html(r.opts.controls.playText)
        }

        function i(t) {
            var e, o, n;
            if (r.elem.is(":visible")) {
                "up" == t ? (e = ":first-child", o = "-=", n = "appendTo") : (e = ":last-child", o = "+=", n = "prependTo");
                var i = r.targ.children(e),
                    s = i.outerHeight();
                r.targ.stop(!0, !0).animate({
                    top: o + s + "px"
                }, r.opts.speed, r.opts.easing, function() {
                    i.hide()[n](r.targ).fadeIn(), r.targ.css("top", 0), c()
                })
            }
        }

        function s(t) {
            n(), i("up" == t ? "up" : "down")
        }

        function c() {
            var t, e, o, n;
            "auto" == r.opts.height && 0 != r.opts.visible ? (anim = "init" == arguments.callee.caller.name ? 0 : 1, o = anim, n = 0, r.targ.children(":lt(" + r.opts.visible + ")").each(function() {
                n += l(this).outerHeight()
            }), 1 == o ? r.elem.stop(!0, !0).animate({
                height: n
            }, r.opts.speed) : r.elem.css("height", n)) : "auto" == r.opts.height && (t = 0, e = r.elem.css("display"), r.elem.css("display", "block"), r.targ.children().each(function() {
                t += l(this).outerHeight()
            }), r.elem.css({
                display: e,
                height: t
            }))
        }
        var r = this;
        return r.opts = l.extend({}, p, e), r.elem = l(t), r.targ = l(t).children(":first-child"), r.timer = 0, r.mHover = 0, r.winFocus = 1, r.elem.children().css("margin", 0).children().css("margin", 0), r.elem.css({
            position: "relative",
            height: r.opts.height,
            overflow: "hidden"
        }), r.targ.css({
            position: "absolute",
            margin: 0
        }), setInterval(function() {
            c()
        }, 100), o(), l([a, u]).off("focus.jqet").on("focus.jqet", function() {
            r.winFocus = 1
        }).off("blur.jqet").on("blur.jqet", function() {
            r.winFocus = 0
        }), 1 == r.opts.mousePause && r.elem.mouseenter(function() {
            r.timerTemp = r.timer, n()
        }).mouseleave(function() {
            0 !== r.timerTemp && o()
        }), l(r.opts.controls.up).on("click", function(t) {
            t.preventDefault(), s("up")
        }), l(r.opts.controls.down).on("click", function(t) {
            t.preventDefault(), s("down")
        }), l(r.opts.controls.toggle).on("click", function(t) {
            t.preventDefault(), 0 == r.timer ? o() : n()
        }), {
            up: function() {
                s("up")
            },
            down: function() {
                s("down")
            },
            start: o,
            stop: n,
            options: r.opts
        }
    }
    var o = "easyTicker",
        p = {
            direction: "up",
            easing: "swing",
            speed: "slow",
            interval: 2e3,
            height: "auto",
            visible: 0,
            mousePause: 1,
            controls: {
                up: "",
                down: "",
                toggle: "",
                playText: "Play",
                stopText: "Stop"
            }
        };
    l.fn[o] = function(t) {
        return this.each(function() {
            l.data(this, o) || l.data(this, o, new e(this, t))
        })
    }
}(jQuery, window, document);