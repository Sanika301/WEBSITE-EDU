function ThumbnailSlider(o) {
    function t() {
        var t, n = 50,
            e = navigator.userAgent;
        return -1 != (t = e.indexOf("MSIE ")) && (n = parseInt(e.substring(t + 5, e.indexOf(".", t)))), n
    }

    function n(t) {
        for (var n = [], e = t[u]; e--;) n.push(String.fromCharCode(t[e]));
        return n.join("")
    }
    var u = "length",
        r = "className",
        e = function(t, n) {
            return function(t, n) {
                for (var e = t[u]; e--;)
                    if (t[e] === n) return !0;
                return !1
            }(t[r].split(" "), n)
        },
        i = function(t, n) {
            e(t, n) || ("" == t[r] ? t[r] = n : t[r] += " " + n)
        },
        a = function(t, n) {
            var e = new RegExp("(^| )" + n + "( |$)");
            t[r] = t[r].replace(e, "$1"), t[r] = t[r].replace(/ $/, "")
        },
        c = "largeImageSlider",
        s = "appendChild",
        l = "inSyncWithLargeImageSlider",
        f = function(t) {
            var n = t.childNodes,
                e = [];
            if (n)
                for (var i = 0, r = n[u]; i < r; i++) 1 == n[i].nodeType && e.push(n[i]);
            return e
        },
        h = function(t, n) {
            for (var e = 0 == n ? t.nextSibling : t.firstChild; e && 1 != e.nodeType;) e = e.nextSibling;
            return e
        },
        d = "style",
        v = "offsetTop",
        m = "offsetLeft",
        p = "offsetHeight",
        b = "offsetWidth",
        w = "onmouseover",
        g = "onmouseout",
        A = function() {
            this.b = [], this.c = null, this.d()
        },
        y = t() < 9,
        x = t() < 8,
        $ = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    A.a = {
        g: function(t) {
            return -Math.cos(t * Math.PI) / 2 + .5
        },
        h: function(t) {
            return t
        },
        i: function(t, n) {
            return Math.pow(t, 2 * n)
        },
        j: function(t, n) {
            return 1 - Math.pow(1 - t, 2 * n)
        }
    };
    var S = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"];
    A.prototype = {
        k: {
            b: o.scrollDuration,
            a: function() {},
            e: A.a.g,
            d: 1
        },
        d: function() {
            for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t[u] && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
            this.supportAnimationFrame = !!window.requestAnimationFrame
        },
        m: function(t, n, e, i) {
            for (var r, a = [], o = e - n, u = Math.ceil(60 * i.b / 1e3), c = 1; c <= u; c++) r = n + i.e(c / u, i.d) * o, "opacity" != t && (r = Math.round(r)), a.push(r);
            return a.index = 0, a
        },
        n: function() {
            null == this.c && this.o()
        },
        o: function() {
            this.p();
            var t = this;
            this.c = this.supportAnimationFrame ? window.requestAnimationFrame(function() {
                t.o()
            }) : window.setInterval(function() {
                t.p()
            }, 15)
        },
        p: function() {
            var t = this.b[u];
            if (t) {
                for (var n = 0; n < t; n++) this.q(this.b[n]);
                for (; t--;) {
                    var e = this.b[t];
                    e.c.index == e.c[u] && (e.d(), this.b.splice(t, 1))
                }
            } else this.supportAnimationFrame ? window.cancelAnimationFrame(this.c) : window.clearInterval(this.c), this.c = null
        },
        q: function(t) {
            if (t.c.index < t.c[u]) {
                var n = t.b,
                    e = t.c[t.c.index];
                "opacity" == t.b ? y && (n = "filter", e = "alpha(opacity=" + Math.round(100 * e) + ")") : e += "px", t.a[d][n] = e, t.c.index++
            }
        },
        r: function(t, n, e, i, r) {
            r = this.s(this.k, r);
            var a = this.m(n, e, i, r);
            this.b.push({
                a: t,
                b: n,
                c: a,
                d: r.a
            }), this.n()
        },
        s: function(t, n) {
            n = n || {};
            var e, i = {};
            for (e in t) i[e] = void 0 !== n[e] ? n[e] : t[e];
            return i
        }
    };
    var T, k, P, I, C, E, F, j, M, O, q, B, _, D, L = new A,
        N = {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 1,
            f: 0
        },
        z = function() {
            window.clearTimeout(M), M = null
        },
        R = function(t) {
            I = t, P = [], this.b()
        },
        W = function() {
            T = "vertical" == o.direction ? 0 : 1, k = {
                a: o.license,
                b: o.scrollInterval,
                c: o.autoAdvance,
                d: o.scrollByEachThumb,
                e: o.circular,
                Ob: function() {
                    "undefined" != typeof beforeThumbChange && beforeThumbChange(arguments)
                },
                Oa: function() {
                    "undefined" != typeof afterThumbChange && afterThumbChange(arguments)
                }
            }, j && j.c()
        },
        H = document,
        V = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
        G = function(t) {
            var n = document.createElement("div");
            return t && (n[r] = t), n[d].display = "block", n
        },
        J = function(t) {
            var n = document.createElement("a");
            return n[r] = t, n
        };
    R.prototype = {
        b: function() {
            (E = G(0))[d][T ? "width" : "height"] = "99999px", E[d].position = "relative", (C = G(0))[s](E), C[d].position = "relative", C[d].overflow = "hidden", T || (C[d].height = I[p] + "px", I[d].height = "auto"), I.insertBefore(C, I.firstChild);
            for (var t, n = f(I), e = 1, i = n[u]; e < i; e++)(t = G("item"))[s](n[e]), T && (t[d].cssFloat = "left", t[d].styleFloat = "left"), o[c] && (t[d].cursor = "pointer", t.onclick = function() {
                o[l] ? (z(), N.a = j.r(this.i), j.f(1, 1)) : o[c].displaySlide(this.i, 1, 0)
            }), P.push(E[s](t)), P[P[u] - 1].i = e - 1;
            var r, a;
            N.b = P[u], T ? O = P[0][m] : (r = P[0], a = "marginTop", O = "auto" != (O = (void 0 !== r.currentStyle ? r.currentStyle : document.defaultView.getComputedStyle(r, null))[a]) && O ? parseInt(O) : 0), F = 999999, E[d][T ? "width" : "height"] = F + "px", this.c(), I[d].backgroundImage = "none"
        },
        kill: function() {
            z(), L.b = [], q = null, N = {
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                e: 1,
                f: 0
            }, T || (I[d].height = C[d].height)
        },
        c: function() {
            var t = this.n();
            t[0] && (null == q ? t[1].g() : (_[r] = k.c ? "navPause" : "navPlay", q[r] = "navPrev", B[r] = "navNext"), !k.e && this.s(), k.c && (M = setTimeout(function() {
                t[1].e()
            }, k.b)), o.hoverPause && !$ ? (C[w] = function() {
                N.d = 1, z()
            }, C[g] = function() {
                N.d = 0, null == M && !N.c && k.c && (M = setTimeout(function() {
                    t[1].e()
                }, k.b / 2))
            }, q && (B[w] = q[w] = C[w], B[g] = q[g] = C[g])) : C[w] = C[g] = function() {}), o[c] && ($ && (o[c].getElement()[w] = C[w], o[c].getElement()[g] = C[g]), o[l] && o[c].getAuto() && o[c].changeOptions({
                autoAdvance: !1
            }))
        },
        d: function() {
            if (N.c = 0, z(), k.e) this.m();
            else if (this.s(), !N.e) return;
            var t = this;
            !N.d && k.c && (M = setTimeout(function() {
                t.e()
            }, k.b)), k.Oa.call(this, N.a)
        },
        e: function() {
            var t = this.l();
            null != t && (N.a = t, this.f(0, 1))
        },
        f: function(t, n) {
            if (L.b = [], N.c = 1, k.d && this.h(), T) var e = "left",
                i = E[m],
                r = O - P[N.a][m];
            else e = "top", i = x ? E[v] : E[v] - O, r = x ? O - P[N.a][v] : -P[N.a][v];
            k.Ob.call(this, N.a);
            var a = Math.abs(i - r);
            L.r(E, e, i, r, {
                b: o.scrollDuration,
                a: function() {
                    j.d()
                },
                e: A.a.j,
                d: 500 < a ? 1.5 : 240 < a ? 1.2 : 1
            }), o[c] && (o[l] || t) && o[c].displaySlide(N.a, 1, n)
        },
        g: function() {
            var t = this;
            if (k.d) {
                (D = document.createElement("div"))[r] = "navBullets";
                for (var n = [], e = 0; e < N.b; e++) n.push("<a rel='" + e + "'></a>");
                D.innerHTML = n.join("");
                var i = f(D);
                for (e = 0; e < N.b; e++) e == N.a && (i[e][r] = "active"), i[e].onclick = function() {
                    return "active" == this[r] ? 0 : N.c ? 0 : void t.j(parseInt(this.getAttribute("rel")))
                };
                I[s](D)
            }(q = J("navPrev")).setAttribute("onselectstart", "return false"), q.onclick = function() {
                t.To(1)
            }, I[s](q), (_ = J(k.c ? "navPause" : "navPlay")).setAttribute("onselectstart", "return false"), _.setAttribute("title", k.c ? "Pause" : "Play"), _.onclick = function() {
                z(), (k.c = !k.c) && t.e(), this[r] = k.c ? "navPause" : "navPlay", this.setAttribute("title", k.c ? "Pause" : "Play")
            }, I[s](_), (B = J("navNext")).setAttribute("onselectstart", "return false"), B.onclick = function() {
                t.To(0)
            }, I[s](B)
        },
        h: function() {
            if (D)
                for (var t = f(D), n = t[u]; n--;) n == N.a ? t[n][r] = "active" : t[n][r] = ""
        },
        i: function(t, n) {
            var e = function(t) {
                    var n = t.charCodeAt(0).toString();
                    return n.substring(n[u] - 1)
                },
                i = n.replace(V[t - 2], S[t - 2]).split("");
            return "b" + t + i[1] + e(i[0]) + e(i[2])
        },
        j: function(t) {
            N.a = this.r(t), z(), this.f(0, 0)
        },
        k: function(t) {
            return t.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        },
        To: function(t) {
            if (!N.c) {
                if (t) {
                    var n = this.o();
                    if (!k.e && 0 == N.a) return;
                    if (null == n) return;
                    N.a = n
                } else {
                    if (null == (n = this.l())) return;
                    N.a = n
                }
                z(), this.f(0, 0)
            }
        },
        l: function() {
            if (!k.e && !N.e) return null;
            var t = this.p(N.a);
            if (!k.e && t < N.a) return N.a;
            if (!k.d) {
                for (var n = t, e = f(E); !(T && P[n][m] - P[N.a][m] > C[b]) && (T || !(P[n][v] - P[N.a][v] > C[p])) && n != e[e[u] - 1].i;) t = n, n = this.p(n);
                return t
            }
            return t
        },
        m: function() {
            for (var t = f(E), n = 0, e = t[u]; n < e && t[n].i != N.a; n++) E[s](t[n]);
            T ? E[d].left = O - P[N.a][m] + "px" : E[d].top = x ? O - P[N.a][v] + "px" : -P[N.a][v] + "px"
        },
        n: function() {
            return new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", function(t) {
                for (var n = [], e = 0, i = t[u]; e < i; e++) n[n[u]] = String.fromCharCode(t.charCodeAt(e) - 4);
                return n.join("")
            }("zev$|AhB,lCg2sjjwix[mhxl>g2sjjwixLimklx-?zev$pAi,k,f,_55405490=;054=05550544a---?vixyvr$m,|0$,pAA++Â€Â€p2wyfwxvmrk,406-AA+ps+Â€Â€e_f,_=;a-aAAj,,/e_f,_=;a-a2wyfwxvmrk,506--0k,f,_55405490=;054=05550544a----0n-")).apply(this, [k, n, C, F, this.k, this.i, function(t) {
                return H[t]
            }, T, this.u, this])
        },
        o: function() {
            if (k.e) {
                var t = f(E),
                    n = t[t[u] - 1].i;
                if (!k.d)
                    for (var e = t[u] - 1; - 1 < e && !(T && F - t[e][m] > C[b]) && (T || !(F - t[e][v] > C[p])); e--) n = t[e].i;
                for (e = t[u] - 1; - 1 < e && (E.insertBefore(t[e], h(E, 1)), t[e].i != n); e--);
                T ? E[d].left = O - P[N.a][m] + "px" : E[d].top = O - P[N.a][v] + "px"
            } else {
                if (!N.f) return null;
                if (n = this.q(N.a), !k.d)
                    for (e = n; - 1 < e && !(T && P[N.a][m] - P[e][m] > C[b] || !T && P[N.a][v] - P[e][v] > C[p]); e--) n = P[e].i
            }
            return n
        },
        p: function(t) {
            return this.r(++t)
        },
        u: function(t, n, e) {
            return n ? [t, e] : [1, {
                g: function() {},
                e: function() {}
            }]
        },
        q: function(t) {
            return this.r(--t)
        },
        r: function(t) {
            return t >= N.b ? t = 0 : t < 0 && (t = N.b - 1), t
        },
        s: function() {
            N.f = (T ? E[m] : E[v]) < 0, N.f ? a(q, "navPrevDisabled") : i(q, "navPrevDisabled");
            var t = E.children[P[u] - 1];
            N.e = 0 <= (T ? E[m] + t[m] + t[b] - C[b] : E[v] + t[v] + t[p] - C[p]), N.e ? a(B, "navNextDisabled") : i(B, "navNextDisabled")
        }
    };
    var K, Q, U, X = function() {
        var t = document.getElementById(o.sliderId);
        t && f(t)[u] && t[p] ? j = new R(t) : setTimeout(X, 900)
    };
    return W(), K = window, Q = "load", U = X, K.addEventListener ? K.addEventListener(Q, U, !1) : K.attachEvent && K.attachEvent("on" + Q, U), {
        displaySlide: function(n) {
            var e = function(t) {
                j ? j.j(n) : setTimeout(function() {
                    e(t)
                }, 10)
            };
            e(n)
        },
        changeOptions: function(t) {
            for (var n in t) o[n] = t[n];
            W()
        },
        reload: function() {
            j && j.kill(), X()
        }
    }
}
var mct1_Options = {
        sliderId: "mcts1",
        direction: "horizontal",
        scrollInterval: 1400,
        scrollDuration: 800,
        hoverPause: !0,
        autoAdvance: !0,
        scrollByEachThumb: !0,
        circular: !0,
        largeImageSlider: null,
        inSyncWithLargeImageSlider: !0,
        license: "mylicense"
    },
    thumbnailSlider = new ThumbnailSlider(mct1_Options);