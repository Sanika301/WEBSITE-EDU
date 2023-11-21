! function() {
    function r() {
        return (new Date).getTime()
    }
    var s = jQuery,
        o = "jQuery.pause",
        u = 1,
        d = s.fn.animate,
        p = {};
    s.fn.animate = function(t, e, n, i) {
        var a = s.speed(e, n, i);
        return a.complete = a.old, this.each(function() {
            this[o] || (this[o] = u++);
            var e = s.extend({}, a);
            d.apply(s(this), [t, s.extend({}, e)]), p[this[o]] = {
                run: !0,
                prop: t,
                opt: e,
                start: r(),
                done: 0
            }
        })
    }, s.fn.pause = function() {
        return this.each(function() {
            this[o] || (this[o] = u++);
            var e = p[this[o]];
            e && e.run && (e.done += r() - e.start, e.done > e.opt.duration ? delete p[this[o]] : (s(this).stop(), e.run = !1))
        })
    }, s.fn.resume = function() {
        return this.each(function() {
            this[o] || (this[o] = u++);
            var e = p[this[o]];
            e && !e.run && (e.opt.duration -= e.done, e.done = 0, e.run = !0, e.start = r(), d.apply(s(this), [e.prop, s.extend({}, e.opt)]))
        })
    }
}(),
function(O) {
    O.fn.marquee = function(k) {
        return this.each(function() {
            var n, i, a, r, s, o = O.extend({}, O.fn.marquee.defaults, k),
                u = O(this),
                d = 3,
                e = "animation-play-state",
                p = !1,
                f = function(e, t, n) {
                    for (var i = ["webkit", "moz", "MS", "o", ""], a = 0; a < i.length; a++) i[a] || (t = t.toLowerCase()), e.addEventListener(i[a] + t, n, !1)
                },
                c = function() {
                    u.timer = setTimeout(A, o.delayBeforeStart)
                },
                t = {
                    pause: function() {
                        p && o.allowCss3Support ? n.css(e, "paused") : O.fn.pause && n.pause(), u.data("runningStatus", "paused"), u.trigger("paused")
                    },
                    resume: function() {
                        p && o.allowCss3Support ? n.css(e, "running") : O.fn.resume && n.resume(), u.data("runningStatus", "resumed"), u.trigger("resumed")
                    },
                    toggle: function() {
                        t["resumed" == u.data("runningStatus") ? "pause" : "resume"]()
                    },
                    destroy: function() {
                        clearTimeout(u.timer), u.find("*").andSelf().unbind(), u.html(u.find(".js-marquee:first").html())
                    }
                };
            if ("string" != typeof k) {
                var l;
                O.each(o, function(e, t) {
                    if (void 0 !== (l = u.attr("data-" + e))) {
                        switch (l) {
                            case "true":
                                l = !0;
                                break;
                            case "false":
                                l = !1
                        }
                        o[e] = l
                    }
                }), o.duration = o.speed || o.duration, r = "up" == o.direction || "down" == o.direction, o.gap = o.duplicated ? o.gap : 0, u.wrapInner('<div class="js-marquee"></div>');
                var m = u.find(".js-marquee").css({
                    "margin-right": o.gap,
                    float: "left"
                });
                if (o.duplicated && m.clone(!0).appendTo(u), u.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'), n = u.find(".js-marquee-wrapper"), r) {
                    var g = u.height();
                    n.removeAttr("style"), u.height(g), u.find(".js-marquee").css({
                        float: "none",
                        "margin-bottom": o.gap,
                        "margin-right": 0
                    }), o.duplicated && u.find(".js-marquee:last").css({
                        "margin-bottom": 0
                    });
                    var h = u.find(".js-marquee:first").height() + o.gap;
                    o.duration = (parseInt(h, 10) + parseInt(g, 10)) / parseInt(g, 10) * o.duration
                } else s = u.find(".js-marquee:first").width() + o.gap, i = u.width(), o.duration = (parseInt(s, 10) + parseInt(i, 10)) / parseInt(i, 10) * o.duration;
                if (o.duplicated && (o.duration = o.duration / 2), o.allowCss3Support) {
                    var v = document.body || document.createElement("div"),
                        y = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
                        w = "Webkit Moz O ms Khtml".split(" "),
                        x = "animation",
                        S = "",
                        j = "";
                    if (v.style.animation && (j = "@keyframes " + y + " ", p = !0), !1 === p)
                        for (var q = 0; q < w.length; q++)
                            if (void 0 !== v.style[w[q] + "AnimationName"]) {
                                var b = "-" + w[q].toLowerCase() + "-";
                                x = b + x, e = b + e, j = "@" + b + "keyframes " + y + " ", p = !0;
                                break
                            }
                    p && (S = y + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing, u.data("css3AnimationIsSupported", !0))
                }
                var I = function() {
                        n.css("margin-top", "up" == o.direction ? g + "px" : "-" + h + "px")
                    },
                    C = function() {
                        n.css("margin-left", "left" == o.direction ? i + "px" : "-" + s + "px")
                    };
                o.duplicated ? (r ? n.css("margin-top", "up" == o.direction ? g : "-" + (2 * h - o.gap) + "px") : n.css("margin-left", "left" == o.direction ? i + "px" : "-" + (2 * s - o.gap) + "px"), d = 1) : r ? I() : C();
                var A = function() {
                    if (o.duplicated && (1 === d ? (o._originalDuration = o.duration, o.duration = r ? "up" == o.direction ? o.duration + g / (h / o.duration) : 2 * o.duration : "left" == o.direction ? o.duration + i / (s / o.duration) : 2 * o.duration, S && (S = y + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing), d++) : 2 === d && (o.duration = o._originalDuration, S && (y += "0", j = O.trim(j) + "0 ", S = y + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing), d++)), r ? o.duplicated ? (2 < d && n.css("margin-top", "up" == o.direction ? 0 : "-" + h + "px"), a = {
                            "margin-top": "up" == o.direction ? "-" + h + "px" : 0
                        }) : (I(), a = {
                            "margin-top": "up" == o.direction ? "-" + n.height() + "px" : g + "px"
                        }) : o.duplicated ? (2 < d && n.css("margin-left", "left" == o.direction ? 0 : "-" + s + "px"), a = {
                            "margin-left": "left" == o.direction ? "-" + s + "px" : 0
                        }) : (C(), a = {
                            "margin-left": "left" == o.direction ? "-" + s + "px" : i + "px"
                        }), u.trigger("beforeStarting"), p) {
                        n.css(x, S);
                        var e = j + " { 100%  " + function(e) {
                                var t = [];
                                for (var n in e) e.hasOwnProperty(n) && t.push(n + ":" + e[n]);
                                return t.push(), "{" + t.join(",") + "}"
                            }(a) + "}",
                            t = O("style");
                        0 !== t.length ? t.filter(":last").append(e) : O("head").append("<style>" + e + "</style>"), f(n[0], "AnimationIteration", function() {
                            u.trigger("finished")
                        }), f(n[0], "AnimationEnd", function() {
                            A(), u.trigger("finished")
                        })
                    } else n.animate(a, o.duration, o.easing, function() {
                        u.trigger("finished"), o.pauseOnCycle ? c() : A()
                    });
                    u.data("runningStatus", "resumed")
                };
                u.bind("pause", t.pause), u.bind("resume", t.resume), o.pauseOnHover && u.bind("mouseenter mouseleave", t.toggle), p && o.allowCss3Support ? A() : c()
            } else O.isFunction(t[k]) && (n || (n = u.find(".js-marquee-wrapper")), !0 === u.data("css3AnimationIsSupported") && (p = !0), t[k]())
        })
    }, O.fn.marquee.defaults = {
        allowCss3Support: !0,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1e3,
        direction: "left",
        duplicated: !1,
        duration: 5e3,
        gap: 20,
        pauseOnCycle: !1,
        pauseOnHover: !1
    }
}(jQuery);