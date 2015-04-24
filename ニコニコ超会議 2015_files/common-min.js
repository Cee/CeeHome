function whatdo() {
    function s() {
        var n = t * e - 1,
            i = r.filter(":gt('" + n + "')"),
            s = r.filter(":lt('" + n + "')");
        i.fadeOut(0);
        s.fadeIn(300, function() {
            $(window).trigger("changeGoodsPage")
        });
        if (r.length <= t * e) {
            $("#listMore").addClass("disable");
            $("#listMoreWrap").css({
                height: 27
            })
        } else {
            $("#listMore").removeClass("disable");
            $("#listMoreWrap").css({
                height: 120
            })
        }
    }

    function o(i) {
        i != "all" ? r = n.filter("[data-category*='" + i + "']") : r = n;
        var s = t * e - 1;
        e = 1;
        var o = r.filter(":lt(10)");
        n.fadeOut(0);
        o.delay(30).fadeIn(300, function() {
            $(window).trigger("changeGoodsPage")
        });
        if (r.length <= t * e) {
            $("#listMore").addClass("disable");
            $("#listMoreWrap").css({
                height: 27
            })
        } else {
            $("#listMore").removeClass("disable");
            $("#listMoreWrap").css({
                height: 120
            })
        }
    }
    var e = 1,
        t = 10;
    $(".whatdo li").hover(function() {
        if (!$(this).hasClass("active")) {
            var e = $(this).find("div");
            TweenMax.to(this, .3, {
                width: 110,
                height: 104
            });
            TweenMax.to(e, .4, {
                borderWidth: 9,
                borderRadius: 54,
                yoyo: !0,
                repeat: -1,
                ease: Linear.easeNone
            })
        }
    }, function() {
        if (!$(this).hasClass("active")) {
            var e = $(this).find("div");
            TweenMax.to(e, .4, {
                yoyo: !1,
                repeat: 0,
                width: 86,
                height: 86,
                borderWidth: 0,
                borderRadius: 43
            });
            TweenMax.to(this, .3, {
                width: 92,
                height: 86
            })
        }
    });
    $("#listMore").hover(function() {
        if (!$(this).hasClass("disable")) {
            TweenMax.to(this, .4, {
                borderWidth: 12,
                borderRadius: 51,
                yoyo: !0,
                repeat: -1,
                ease: Linear.easeNone
            });
            TweenMax.to(this, .4, {
                backgroundColor: "#ff8b62",
                color: "#fff"
            })
        }
    }, function() {
        TweenMax.to(this, .4, {
            backgroundColor: "#e4e4e4",
            color: "#666666"
        });
        TweenMax.to(this, .4, {
            borderWidth: 0,
            borderRadius: 39,
            yoyo: !1,
            repeat: 0,
            ease: Linear.easeNone
        })
    });
    $("#listMore").click(function() {
        if (!$(this).hasClass("disable")) {
            e++;
            s()
        }
    });
    $("#listMore,.whatdo li").trigger("mouseout");
    $(".whatdo li").click(function() {
        var e = this,
            t = $(this).find("div");
        TweenMax.to(this, .2, {
            width: 110,
            height: 104
        });
        TweenMax.to(t, .2, {
            yoyo: !1,
            repeat: 0,
            borderWidth: 0,
            width: 104,
            height: 104,
            borderRadius: 54
        });
        TweenMax.to($(this).find("b"), .1, {
            fontSize: 38,
            paddingTop: 18
        });
        var n = $(e).siblings(".active");
        TweenMax.to(n.find("b"), .1, {
            fontSize: 32,
            paddingTop: 15
        });
        TweenMax.to(n.find("div"), .3, {
            yoyo: !1,
            repeat: 0,
            width: 86,
            fontSize: 18,
            height: 86,
            borderWidth: 0,
            borderRadius: 43
        });
        n.removeClass("active");
        TweenMax.to(n, .5, {
            yoyo: !1,
            width: 92,
            height: 86,
            repeat: 0,
            ease: Back.easeOut,
            onComplete: function() {}
        });
        $(e).addClass("active");
        TweenMax.to(t, .3, {
            yoyo: !1,
            repeat: 0,
            fontSize: 21,
            borderWidth: 0,
            ease: Back.easeOut,
            onComplete: function() {
                o($(e).data("target"))
            }
        })
    });
    $("#whatdoList dl dd p").click(function() {
        TweenMax.to("#scramble", 3, {
            scrambleText: {
                text: "ScrambleText allows you to animate the scrambling of text.",
                chars: "lowerCase",
                revealDelay: .5,
                tweenLength: !1,
                ease: Linear.easeNone
            }
        })
    });
    var n = $("#whatdoList dl"),
        r = n,
        i = "all";
    s()
}


function shuffleContent(e) {

}(function (e, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})(typeof window != "undefined" ? window : this, function(e, t) {
    function g(e) {
        var t = e.length,
            n = h.type(e);
        return n === "function" || h.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
    }

    function S(e, t, n) {
        if (h.isFunction(t)) return h.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return h.grep(e, function(e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (E.test(t)) return h.filter(t, e, n);
            t = h.filter(t, e)
        }
        return h.grep(e, function(e) {
            return h.inArray(e, t) >= 0 !== n
        })
    }

    function A(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function _(e) {
        var t = M[e] = {};
        h.each(e.match(O) || [], function(e, n) {
            t[n] = !0
        });
        return t
    }

    function P() {
        if (T.addEventListener) {
            T.removeEventListener("DOMContentLoaded", H, !1);
            e.removeEventListener("load", H, !1)
        } else {
            T.detachEvent("onreadystatechange", H);
            e.detachEvent("onload", H)
        }
    }

    function H() {
        if (T.addEventListener || event.type === "load" || T.readyState === "complete") {
            P();
            h.ready()
        }
    }

    function q(e, t, n) {
        if (n === undefined && e.nodeType === 1) {
            var r = "data-" + t.replace(I, "-$1").toLowerCase();
            n = e.getAttribute(r);
            if (typeof n == "string") {
                try {
                    n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : F.test(n) ? h.parseJSON(n) : n
                } catch (i) {}
                h.data(e, t, n)
            } else n = undefined
        }
        return n
    }

    function R(e) {
        var t;
        for (t in e) {
            if (t === "data" && h.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function U(e, t, r, i) {
        if (!h.acceptData(e)) return;
        var s, o, u = h.expando,
            a = e.nodeType,
            f = a ? h.cache : e,
            l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === undefined && typeof t == "string") return;
        l || (a ? l = e[u] = n.pop() || h.guid++ : l = u);
        f[l] || (f[l] = a ? {} : {
            toJSON: h.noop
        });
        if (typeof t == "object" || typeof t == "function") i ? f[l] = h.extend(f[l], t) : f[l].data = h.extend(f[l].data, t);
        o = f[l];
        if (!i) {
            o.data || (o.data = {});
            o = o.data
        }
        r !== undefined && (o[h.camelCase(t)] = r);
        if (typeof t == "string") {
            s = o[t];
            s == null && (s = o[h.camelCase(t)])
        } else s = o;
        return s
    }

    function z(e, t, n) {
        if (!h.acceptData(e)) return;
        var r, i, s = e.nodeType,
            o = s ? h.cache : e,
            u = s ? e[h.expando] : h.expando;
        if (!o[u]) return;
        if (t) {
            r = n ? o[u] : o[u].data;
            if (r) {
                if (!h.isArray(t))
                    if (t in r) t = [t];
                    else {
                        t = h.camelCase(t);
                        t in r ? t = [t] : t = t.split(" ")
                    } else t = t.concat(h.map(t, h.camelCase));
                i = t.length;
                while (i--) delete r[t[i]];
                if (n ? !R(r) : !h.isEmptyObject(r)) return
            }
        }
        if (!n) {
            delete o[u].data;
            if (!R(o[u])) return
        }
        s ? h.cleanData([e], !0) : l.deleteExpando || o != o.window ? delete o[u] : o[u] = null
    }

    function et() {
        return !0
    }

    function tt() {
        return !1
    }

    function nt() {
        try {
            return T.activeElement
        } catch (e) {}
    }

    function rt(e) {
        var t = it.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function wt(e, t) {
        var n, r, i = 0,
            s = typeof e.getElementsByTagName !== B ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== B ? e.querySelectorAll(t || "*") : undefined;
        if (!s)
            for (s = [], n = e.childNodes || e;
                (r = n[i]) != null; i++)!t || h.nodeName(r, t) ? s.push(r) : h.merge(s, wt(r, t));
        return t === undefined || t && h.nodeName(e, t) ? h.merge([e], s) : s
    }

    function Et(e) {
        J.test(e.type) && (e.defaultChecked = e.checked)
    }

    function St(e, t) {
        return h.nodeName(e, "table") && h.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function xt(e) {
        e.type = (h.find.attr(e, "type") !== null) + "/" + e.type;
        return e
    }

    function Tt(e) {
        var t = vt.exec(e.type);
        t ? e.type = t[1] : e.removeAttribute("type");
        return e
    }

    function Nt(e, t) {
        var n, r = 0;
        for (;
            (n = e[r]) != null; r++) h._data(n, "globalEval", !t || h._data(t[r], "globalEval"))
    }

    function Ct(e, t) {
        if (t.nodeType !== 1 || !h.hasData(e)) return;
        var n, r, i, s = h._data(e),
            o = h._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle;
            o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) h.event.add(t, n, u[n][r])
        }
        o.data && (o.data = h.extend({}, o.data))
    }

    function kt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!l.noCloneEvent && t[h.expando]) {
            i = h._data(t);
            for (r in i.events) h.removeEvent(t, r, i.handle);
            t.removeAttribute(h.expando)
        }
        if (n === "script" && t.text !== e.text) {
            xt(t).text = e.text;
            Tt(t)
        } else if (n === "object") {
            t.parentNode && (t.outerHTML = e.outerHTML);
            l.html5Clone && e.innerHTML && !h.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)
        } else if (n === "input" && J.test(e.type)) {
            t.defaultChecked = t.checked = e.checked;
            t.value !== e.value && (t.value = e.value)
        } else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function Ot(t, n) {
        var r, i = h(n.createElement(t)).appendTo(n.body),
            s = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : h.css(i[0], "display");
        i.detach();
        return s
    }

    function Mt(e) {
        var t = T,
            n = At[e];
        if (!n) {
            n = Ot(e, t);
            if (n === "none" || !n) {
                Lt = (Lt || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);
                t = (Lt[0].contentWindow || Lt[0].contentDocument).document;
                t.write();
                t.close();
                n = Ot(e, t);
                Lt.detach()
            }
            At[e] = n
        }
        return n
    }

    function jt(e, t) {
        return {
            get: function() {
                var n = e();
                if (n == null) return;
                if (n) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function Vt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Xt.length;
        while (i--) {
            t = Xt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function $t(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = h._data(r, "olddisplay");
            n = r.style.display;
            if (t) {
                !s[o] && n === "none" && (r.style.display = "");
                r.style.display === "" && V(r) && (s[o] = h._data(r, "olddisplay", Mt(r.nodeName)))
            } else {
                i = V(r);
                (n && n !== "none" || !i) && h._data(r, "olddisplay", i ? n : h.css(r, "display"))
            }
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function Jt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Kt(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; s < 4; s += 2) {
            n === "margin" && (o += h.css(e, n + X[s], !0, i));
            if (r) {
                n === "content" && (o -= h.css(e, "padding" + X[s], !0, i));
                n !== "margin" && (o -= h.css(e, "border" + X[s] + "Width", !0, i))
            } else {
                o += h.css(e, "padding" + X[s], !0, i);
                n !== "padding" && (o += h.css(e, "border" + X[s] + "Width", !0, i))
            }
        }
        return o
    }

    function Qt(e, t, n) {
        var r = !0,
            i = t === "width" ? e.offsetWidth : e.offsetHeight,
            s = Pt(e),
            o = l.boxSizing && h.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Ht(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Dt.test(i)) return i;
            r = o && (l.boxSizingReliable() || i === e.style[t]);
            i = parseFloat(i) || 0
        }
        return i + Kt(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function Gt(e, t, n, r, i) {
        return new Gt.prototype.init(e, t, n, r, i)
    }

    function on() {
        setTimeout(function() {
            Yt = undefined
        });
        return Yt = h.now()
    }

    function un(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) {
            n = X[i];
            r["margin" + n] = r["padding" + n] = e
        }
        t && (r.opacity = r.width = e);
        return r
    }

    function an(e, t, n) {
        var r, i = (sn[t] || []).concat(sn["*"]),
            s = 0,
            o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function fn(e, t, n) {
        var r, i, s, o, u, a, f, c, p = this,
            d = {}, v = e.style,
            m = e.nodeType && V(e),
            g = h._data(e, "fxshow");
        if (!n.queue) {
            u = h._queueHooks(e, "fx");
            if (u.unqueued == null) {
                u.unqueued = 0;
                a = u.empty.fire;
                u.empty.fire = function() {
                    u.unqueued || a()
                }
            }
            u.unqueued++;
            p.always(function() {
                p.always(function() {
                    u.unqueued--;
                    h.queue(e, "fx").length || u.empty.fire()
                })
            })
        }
        if (e.nodeType === 1 && ("height" in t || "width" in t)) {
            n.overflow = [v.overflow, v.overflowX, v.overflowY];
            f = h.css(e, "display");
            c = f === "none" ? h._data(e, "olddisplay") || Mt(e.nodeName) : f;
            c === "inline" && h.css(e, "float") === "none" && (!l.inlineBlockNeedsLayout || Mt(e.nodeName) === "inline" ? v.display = "inline-block" : v.zoom = 1)
        }
        if (n.overflow) {
            v.overflow = "hidden";
            l.shrinkWrapBlocks() || p.always(function() {
                v.overflow = n.overflow[0];
                v.overflowX = n.overflow[1];
                v.overflowY = n.overflow[2]
            })
        }
        for (r in t) {
            i = t[r];
            if (en.exec(i)) {
                delete t[r];
                s = s || i === "toggle";
                if (i === (m ? "hide" : "show")) {
                    if (i !== "show" || !g || g[r] === undefined) continue;
                    m = !0
                }
                d[r] = g && g[r] || h.style(e, r)
            } else f = undefined
        }
        if (!h.isEmptyObject(d)) {
            g ? "hidden" in g && (m = g.hidden) : g = h._data(e, "fxshow", {});
            s && (g.hidden = !m);
            m ? h(e).show() : p.done(function() {
                h(e).hide()
            });
            p.done(function() {
                var t;
                h._removeData(e, "fxshow");
                for (t in d) h.style(e, t, d[t])
            });
            for (r in d) {
                o = an(m ? g[r] : 0, r, p);
                if (!(r in g)) {
                    g[r] = o.start;
                    if (m) {
                        o.end = o.start;
                        o.start = r === "width" || r === "height" ? 1 : 0
                    }
                }
            }
        } else(f === "none" ? Mt(e.nodeName) : f) === "inline" && (v.display = f)
    }

    function ln(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = h.camelCase(n);
            i = t[r];
            s = e[n];
            if (h.isArray(s)) {
                i = s[1];
                s = e[n] = s[0]
            }
            if (n !== r) {
                e[r] = s;
                delete e[n]
            }
            o = h.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s);
                delete e[r];
                for (n in s)
                    if (!(n in e)) {
                        e[n] = s[n];
                        t[n] = i
                    }
            } else t[r] = i
        }
    }

    function cn(e, t, n) {
        var r, i, s = 0,
            o = rn.length,
            u = h.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                var t = Yt || on(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; o < a; o++) f.tweens[o].run(s);
                u.notifyWith(e, [f, s, n]);
                if (s < 1 && a) return n;
                u.resolveWith(e, [f]);
                return !1
            }, f = u.promise({
                elem: e,
                props: h.extend({}, t),
                opts: h.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Yt || on(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = h.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    f.tweens.push(r);
                    return r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]);
                    return this
                }
            }),
            l = f.props;
        ln(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = rn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        h.map(l, an, f);
        h.isFunction(f.opts.start) && f.opts.start.call(e, f);
        h.fx.timer(h.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        }));
        return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Fn(e) {
        return function(t, n) {
            if (typeof t != "string") {
                n = t;
                t = "*"
            }
            var r, i = 0,
                s = t.toLowerCase().match(O) || [];
            if (h.isFunction(n))
                while (r = s[i++])
                    if (r.charAt(0) === "+") {
                        r = r.slice(1) || "*";
                        (e[r] = e[r] || []).unshift(n)
                    } else(e[r] = e[r] || []).push(n)
        }
    }

    function In(e, t, n, r) {
        function o(u) {
            var a;
            i[u] = !0;
            h.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) {
                    t.dataTypes.unshift(f);
                    o(f);
                    return !1
                }
                if (s) return !(a = f)
            });
            return a
        }
        var i = {}, s = e === Hn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function qn(e, t) {
        var n, r, i = h.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        n && h.extend(!0, e, n);
        return e
    }

    function Rn(e, t, n) {
        var r, i, s, o, u = e.contents,
            a = e.dataTypes;
        while (a[0] === "*") {
            a.shift();
            i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"))
        }
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    a.unshift(o);
                    break
                }
        if (a[0] in n) s = a[0];
        else {
            for (o in n) {
                if (!a[0] || e.converters[o + " " + a[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        } if (s) {
            s !== a[0] && a.unshift(s);
            return n[s]
        }
    }

    function Un(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t);
            !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType));
            a = s;
            s = l.shift();
            if (s)
                if (s === "*") s = a;
                else
            if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o)
                    for (i in f) {
                        u = i.split(" ");
                        if (u[1] === s) {
                            o = f[a + " " + u[0]] || f["* " + u[0]];
                            if (o) {
                                if (o === !0) o = f[i];
                                else if (f[i] !== !0) {
                                    s = u[0];
                                    l.unshift(u[1])
                                }
                                break
                            }
                        }
                    }
                if (o !== !0)
                    if (o && e["throws"]) t = o(t);
                    else try {
                        t = o(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: o ? c : "No conversion from " + a + " to " + s
                        }
                    }
            }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Jn(e, t, n, r) {
        var i;
        if (h.isArray(t)) h.each(t, function(t, i) {
            n || Wn.test(e) ? r(e, i) : Jn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && h.type(t) === "object")
            for (i in t) Jn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Yn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function ir(e) {
        return h.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n = [],
        r = n.slice,
        i = n.concat,
        s = n.push,
        o = n.indexOf,
        u = {}, a = u.toString,
        f = u.hasOwnProperty,
        l = {}, c = "1.11.2",
        h = function(e, t) {
            return new h.fn.init(e, t)
        }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        d = /^-ms-/,
        v = /-([\da-z])/gi,
        m = function(e, t) {
            return t.toUpperCase()
        };
    h.fn = h.prototype = {
        jquery: c,
        constructor: h,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return e != null ? e < 0 ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = h.merge(this.constructor(), e);
            t.prevObject = this;
            t.context = this.context;
            return t
        },
        each: function(e, t) {
            return h.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(h.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    };
    h.extend = h.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {}, u = 1,
            a = arguments.length,
            f = !1;
        if (typeof o == "boolean") {
            f = o;
            o = arguments[u] || {};
            u++
        }
        typeof o != "object" && !h.isFunction(o) && (o = {});
        if (u === a) {
            o = this;
            u--
        }
        for (; u < a; u++)
            if ((i = arguments[u]) != null)
                for (r in i) {
                    e = o[r];
                    n = i[r];
                    if (o === n) continue;
                    if (f && n && (h.isPlainObject(n) || (t = h.isArray(n)))) {
                        if (t) {
                            t = !1;
                            s = e && h.isArray(e) ? e : []
                        } else s = e && h.isPlainObject(e) ? e : {};
                        o[r] = h.extend(f, s, n)
                    } else n !== undefined && (o[r] = n)
                }
            return o
    };
    h.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return h.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return h.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !h.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || h.type(e) !== "object" || e.nodeType || h.isWindow(e)) return !1;
            try {
                if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (l.ownLast)
                for (t in e) return f.call(e, t);
            for (t in e);
            return t === undefined || f.call(e, t)
        },
        type: function(e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? u[a.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && h.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(d, "ms-").replace(v, m)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = g(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r === !1) break
                        } else if (o)
                            for (; i < s; i++) {
                                r = t.call(e[i], i, e[i]);
                                if (r === !1) break
                            } else
                                for (i in e) {
                                    r = t.call(e[i], i, e[i]);
                                    if (r === !1) break
                                }
                        return e
        },
        trim: function(e) {
            return e == null ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            e != null && (g(Object(e)) ? h.merge(n, typeof e == "string" ? [e] : e) : s.call(n, e));
            return n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (o) return o.call(t, e, n);
                r = t.length;
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = +t.length,
                r = 0,
                i = e.length;
            while (r < n) e[i++] = t[r++];
            if (n !== n)
                while (t[r] !== undefined) e[i++] = t[r++];
            e.length = i;
            return e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length,
                u = !n;
            for (; s < o; s++) {
                r = !t(e[s], s);
                r !== u && i.push(e[s])
            }
            return i
        },
        map: function(e, t, n) {
            var r, s = 0,
                o = e.length,
                u = g(e),
                a = [];
            if (u)
                for (; s < o; s++) {
                    r = t(e[s], s, n);
                    r != null && a.push(r)
                } else
                    for (s in e) {
                        r = t(e[s], s, n);
                        r != null && a.push(r)
                    }
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, s;
            if (typeof t == "string") {
                s = e[t];
                t = e;
                e = s
            }
            if (!h.isFunction(e)) return undefined;
            n = r.call(arguments, 2);
            i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            };
            i.guid = e.guid = e.guid || h.guid++;
            return i
        },
        now: function() {
            return +(new Date)
        },
        support: l
    });
    h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(e) {
        function ot(e, t, r, i) {
            var s, u, f, l, c, d, g, y, S, x;
            (t ? t.ownerDocument || t : E) !== p && h(t);
            t = t || p;
            r = r || [];
            l = t.nodeType;
            if (typeof e != "string" || !e || l !== 1 && l !== 9 && l !== 11) return r;
            if (!i && v) {
                if (l !== 11 && (s = Z.exec(e)))
                    if (f = s[1]) {
                        if (l === 9) {
                            u = t.getElementById(f);
                            if (!u || !u.parentNode) return r;
                            if (u.id === f) {
                                r.push(u);
                                return r
                            }
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f) {
                            r.push(u);
                            return r
                        }
                    } else {
                        if (s[2]) {
                            D.apply(r, t.getElementsByTagName(e));
                            return r
                        }
                        if ((f = s[3]) && n.getElementsByClassName) {
                            D.apply(r, t.getElementsByClassName(f));
                            return r
                        }
                    }
                if (n.qsa && (!m || !m.test(e))) {
                    y = g = w;
                    S = t;
                    x = l !== 1 && e;
                    if (l === 1 && t.nodeName.toLowerCase() !== "object") {
                        d = o(e);
                        (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y);
                        y = "[id='" + y + "'] ";
                        c = d.length;
                        while (c--) d[c] = y + gt(d[c]);
                        S = et.test(e) && vt(t.parentNode) || t;
                        x = d.join(",")
                    }
                    if (x) try {
                        D.apply(r, S.querySelectorAll(x));
                        return r
                    } catch (T) {} finally {
                        g || t.removeAttribute("id")
                    }
                }
            }
            return a(e.replace(z, "$1"), t, r, i)
        }

        function ut() {
            function t(n, i) {
                e.push(n + " ") > r.cacheLength && delete t[e.shift()];
                return t[n + " "] = i
            }
            var e = [];
            return t
        }

        function at(e) {
            e[w] = !0;
            return e
        }

        function ft(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"),
                i = e.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ct(e, t) {
            var n = t && e,
                r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || L) - (~e.sourceIndex || L);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ht(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function dt(e) {
            return at(function(t) {
                t = +t;
                return at(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function vt(e) {
            return e && typeof e.getElementsByTagName != "undefined" && e
        }

        function mt() {}

        function gt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var r = t.dir,
                i = n && r === "parentNode",
                s = x++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (t.nodeType === 1 || i) return e(t, n, s)
            } : function(t, n, o) {
                var u, a, f = [S, s];
                if (o) {
                    while (t = t[r])
                        if (t.nodeType === 1 || i)
                            if (e(t, n, o)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || i) {
                            a = t[w] || (t[w] = {});
                            if ((u = a[r]) && u[0] === S && u[1] === s) return f[2] = u[2];
                            a[r] = f;
                            if (f[2] = e(t, n, o)) return !0
                        }
            }
        }

        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function wt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) ot(e, t[r], n);
            return n
        }

        function Et(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) {
                        o.push(s);
                        f && t.push(u)
                    }
            return o
        }

        function St(e, t, n, r, i, s) {
            r && !r[w] && (r = St(r));
            i && !i[w] && (i = St(i, s));
            return at(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? Et(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = Et(g, p);
                    r(f, [], u, a);
                    l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [];
                            l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else {
                    g = Et(g === o ? g.splice(d, g.length) : g);
                    i ? i(null, o, g, a) : D.apply(o, g)
                }
            })
        }

        function xt(e) {
            var t, n, i, s = e.length,
                o = r.relative[e[0].type],
                u = o || r.relative[" "],
                a = o ? 1 : 0,
                l = yt(function(e) {
                    return e === t
                }, u, !0),
                c = yt(function(e) {
                    return H(t, e) > -1
                }, u, !0),
                h = [
                    function(e, n, r) {
                        var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                        t = null;
                        return i
                    }
                ];
            for (; a < s; a++)
                if (n = r.relative[e[a].type]) h = [yt(bt(h), n)];
                else {
                    n = r.filter[e[a].type].apply(null, e[a].matches);
                    if (n[w]) {
                        i = ++a;
                        for (; i < s; i++)
                            if (r.relative[e[i].type]) break;
                        return St(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                            value: e[a - 2].type === " " ? "*" : ""
                        })).replace(z, "$1"), n, a < i && xt(e.slice(a, i)), i < s && xt(e = e.slice(i)), i < s && gt(e))
                    }
                    h.push(n)
                }
            return bt(h)
        }

        function Tt(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                s = function(s, o, u, a, l) {
                    var c, h, d, v = 0,
                        m = "0",
                        g = s && [],
                        y = [],
                        b = f,
                        w = s || i && r.find.TAG("*", l),
                        E = S += b == null ? 1 : Math.random() || .1,
                        x = w.length;
                    l && (f = o !== p && o);
                    for (; m !== x && (c = w[m]) != null; m++) {
                        if (i && c) {
                            h = 0;
                            while (d = e[h++])
                                if (d(c, o, u)) {
                                    a.push(c);
                                    break
                                }
                            l && (S = E)
                        }
                        if (n) {
                            (c = !d && c) && v--;
                            s && g.push(c)
                        }
                    }
                    v += m;
                    if (n && m !== v) {
                        h = 0;
                        while (d = t[h++]) d(g, y, o, u);
                        if (s) {
                            if (v > 0)
                                while (m--)!g[m] && !y[m] && (y[m] = M.call(a));
                            y = Et(y)
                        }
                        D.apply(a, y);
                        l && !s && y.length > 0 && v + t.length > 1 && ot.uniqueSort(a)
                    }
                    if (l) {
                        S = E;
                        f = b
                    }
                    return g
                };
            return n ? at(s) : s
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date,
            E = e.document,
            S = 0,
            x = 0,
            T = ut(),
            N = ut(),
            C = ut(),
            k = function(e, t) {
                e === t && (c = !0);
                return 0
            }, L = 1 << 31,
            A = {}.hasOwnProperty,
            O = [],
            M = O.pop,
            _ = O.push,
            D = O.push,
            P = O.slice,
            H = function(e, t) {
                var n = 0,
                    r = e.length;
                for (; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            I = F.replace("w", "w#"),
            q = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
            R = ":(" + F + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|" + ".*" + ")\\)|)",
            U = new RegExp(j + "+", "g"),
            z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            W = new RegExp("^" + j + "*," + j + "*"),
            X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            V = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
            $ = new RegExp(R),
            J = new RegExp("^" + I + "$"),
            K = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + B + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            }, Q = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /[+~]/,
            tt = /'|\\/g,
            nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
            rt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            }, it = function() {
                h()
            };
        try {
            D.apply(O = P.call(E.childNodes), E.childNodes);
            O[E.childNodes.length].nodeType
        } catch (st) {
            D = {
                apply: O.length ? function(e, t) {
                    _.apply(e, P.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = ot.support = {};
        s = ot.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        h = ot.setDocument = function(e) {
            var t, i, o = e ? e.ownerDocument || e : E;
            if (o === p || o.nodeType !== 9 || !o.documentElement) return p;
            p = o;
            d = o.documentElement;
            i = o.defaultView;
            i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it));
            v = !s(o);
            n.attributes = ft(function(e) {
                e.className = "i";
                return !e.getAttribute("className")
            });
            n.getElementsByTagName = ft(function(e) {
                e.appendChild(o.createComment(""));
                return !e.getElementsByTagName("*").length
            });
            n.getElementsByClassName = Y.test(o.getElementsByClassName);
            n.getById = ft(function(e) {
                d.appendChild(e).id = w;
                return !o.getElementsByName || !o.getElementsByName(w).length
            });
            if (n.getById) {
                r.find.ID = function(e, t) {
                    if (typeof t.getElementById != "undefined" && v) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                };
                r.filter.ID = function(e) {
                    var t = e.replace(nt, rt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
            } else {
                delete r.find.ID;
                r.filter.ID = function(e) {
                    var t = e.replace(nt, rt);
                    return function(e) {
                        var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
            }
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e);
                if (n.qsa) return t.querySelectorAll(e)
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            };
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (v) return t.getElementsByClassName(e)
            };
            g = [];
            m = [];
            if (n.qsa = Y.test(o.querySelectorAll)) {
                ft(function(e) {
                    d.appendChild(e).innerHTML = "<a id='" + w + "'></a>" + "<select id='" + w + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
                    e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")");
                    e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")");
                    e.querySelectorAll("[id~=" + w + "-]").length || m.push("~=");
                    e.querySelectorAll(":checked").length || m.push(":checked");
                    e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                });
                ft(function(e) {
                    var t = o.createElement("input");
                    t.setAttribute("type", "hidden");
                    e.appendChild(t).setAttribute("name", "D");
                    e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?=");
                    e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled");
                    e.querySelectorAll("*,:x");
                    m.push(",.*:")
                })
            }(n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function(e) {
                n.disconnectedMatch = y.call(e, "div");
                y.call(e, "[s!='']:x");
                g.push("!=", R)
            });
            m = m.length && new RegExp(m.join("|"));
            g = g.length && new RegExp(g.join("|"));
            t = Y.test(d.compareDocumentPosition);
            b = t || Y.test(d.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !! r && r.nodeType === 1 && !! (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            };
            k = t ? function(e, t) {
                if (e === t) {
                    c = !0;
                    return 0
                }
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                if (r) return r;
                r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                return r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === o || e.ownerDocument === E && b(E, e) ? -1 : t === o || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : r & 4 ? -1 : 1
            } : function(e, t) {
                if (e === t) {
                    c = !0;
                    return 0
                }
                var n, r = 0,
                    i = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    a = [t];
                if (!i || !s) return e === o ? -1 : t === o ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
                if (i === s) return ct(e, t);
                n = e;
                while (n = n.parentNode) u.unshift(n);
                n = t;
                while (n = n.parentNode) a.unshift(n);
                while (u[r] === a[r]) r++;
                return r ? ct(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
            };
            return o
        };
        ot.matches = function(e, t) {
            return ot(e, null, null, t)
        };
        ot.matchesSelector = function(e, t) {
            (e.ownerDocument || e) !== p && h(e);
            t = t.replace(V, "='$1']");
            if (n.matchesSelector && v && (!g || !g.test(t)) && (!m || !m.test(t))) try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
            } catch (i) {}
            return ot(t, p, null, [e]).length > 0
        };
        ot.contains = function(e, t) {
            (e.ownerDocument || e) !== p && h(e);
            return b(e, t)
        };
        ot.attr = function(e, t) {
            (e.ownerDocument || e) !== p && h(e);
            var i = r.attrHandle[t.toLowerCase()],
                s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : undefined;
            return s !== undefined ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        };
        ot.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        ot.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                s = 0;
            c = !n.detectDuplicates;
            l = !n.sortStable && e.slice(0);
            e.sort(k);
            if (c) {
                while (t = e[s++]) t === e[s] && (i = r.push(s));
                while (i--) e.splice(r[i], 1)
            }
            l = null;
            return e
        };
        i = ot.getText = function(e) {
            var t, n = "",
                r = 0,
                s = e.nodeType;
            if (!s)
                while (t = e[r++]) n += i(t);
            else if (s === 1 || s === 9 || s === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
            } else if (s === 3 || s === 4) return e.nodeValue;
            return n
        };
        r = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(nt, rt);
                    e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt);
                    e[2] === "~=" && (e[3] = " " + e[3] + " ");
                    return e.slice(0, 4)
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        e[3] || ot.error(e[0]);
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +(e[7] + e[8] || e[3] === "odd")
                    } else e[3] && ot.error(e[0]);
                    return e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    if (K.CHILD.test(e[0])) return null;
                    if (e[3]) e[2] = e[4] || e[5] || "";
                    else if (n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                        e[0] = e[0].slice(0, t);
                        e[2] = n.slice(0, t)
                    }
                    return e.slice(0, 3)
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return e === "*" ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function(e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute != "undefined" && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ot.attr(r, e);
                        if (i == null) return t === "!=";
                        if (!t) return !0;
                        i += "";
                        return t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                        o = e.slice(-4) !== "last",
                        u = t === "of-type";
                    return r === 1 && i === 0 ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                l = m[w] || (m[w] = {});
                                f = l[e] || [];
                                p = f[0] === S && f[1];
                                h = f[0] === S && f[2];
                                c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [S, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        y && ((c[w] || (c[w] = {}))[e] = [S, h]);
                                        if (c === t) break
                                    } h -= i;
                            return h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    if (i[w]) return i(t);
                    if (i.length > 1) {
                        n = [e, e, "", t];
                        return r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                            var r, s = i(e, t),
                                o = s.length;
                            while (o--) {
                                r = H(e, s[o]);
                                e[r] = !(n[r] = s[o])
                            }
                        }) : function(e) {
                            return i(e, 0, n)
                        }
                    }
                    return i
                }
            },
            pseudos: {
                not: at(function(e) {
                    var t = [],
                        n = [],
                        r = u(e.replace(z, "$1"));
                    return r[w] ? at(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        t[0] = e;
                        r(t, null, s, n);
                        t[0] = null;
                        return !n.pop()
                    }
                }),
                has: at(function(e) {
                    return function(t) {
                        return ot(e, t).length > 0
                    }
                }),
                contains: at(function(e) {
                    e = e.replace(nt, rt);
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: at(function(e) {
                    J.test(e || "") || ot.error("unsupported lang: " + e);
                    e = e.replace(nt, rt).toLowerCase();
                    return function(t) {
                        var n;
                        do
                            if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                n = n.toLowerCase();
                                return n === e || n.indexOf(e + "-") === 0
                            } while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !! e.checked || t === "option" && !! e.selected
                },
                selected: function(e) {
                    e.parentNode && e.parentNode.selectedIndex;
                    return e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: dt(function() {
                    return [0]
                }),
                last: dt(function(e, t) {
                    return [t - 1]
                }),
                eq: dt(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: dt(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: dt(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: dt(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: dt(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        };
        r.pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[t] = ht(t);
        for (t in {
            submit: !0,
            reset: !0
        }) r.pseudos[t] = pt(t);
        mt.prototype = r.filters = r.pseudos;
        r.setFilters = new mt;
        o = ot.tokenize = function(e, t) {
            var n, i, s, o, u, a, f, l = N[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e;
            a = [];
            f = r.preFilter;
            while (u) {
                if (!n || (i = W.exec(u))) {
                    i && (u = u.slice(i[0].length) || u);
                    a.push(s = [])
                }
                n = !1;
                if (i = X.exec(u)) {
                    n = i.shift();
                    s.push({
                        value: n,
                        type: i[0].replace(z, " ")
                    });
                    u = u.slice(n.length)
                }
                for (o in r.filter)
                    if ((i = K[o].exec(u)) && (!f[o] || (i = f[o](i)))) {
                        n = i.shift();
                        s.push({
                            value: n,
                            type: o,
                            matches: i
                        });
                        u = u.slice(n.length)
                    }
                if (!n) break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        };
        u = ot.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = C[e + " "];
            if (!s) {
                t || (t = o(e));
                n = t.length;
                while (n--) {
                    s = xt(t[n]);
                    s[w] ? r.push(s) : i.push(s)
                }
                s = C(e, Tt(i, r));
                s.selector = e
            }
            return s
        };
        a = ot.select = function(e, t, i, s) {
            var a, f, l, c, h, p = typeof e == "function" && e,
                d = !s && o(e = p.selector || e);
            i = i || [];
            if (d.length === 1) {
                f = d[0] = d[0].slice(0);
                if (f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && v && r.relative[f[1].type]) {
                    t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0];
                    if (!t) return i;
                    p && (t = t.parentNode);
                    e = e.slice(f.shift().value.length)
                }
                a = K.needsContext.test(e) ? 0 : f.length;
                while (a--) {
                    l = f[a];
                    if (r.relative[c = l.type]) break;
                    if (h = r.find[c])
                        if (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && vt(t.parentNode) || t)) {
                            f.splice(a, 1);
                            e = s.length && gt(f);
                            if (!e) {
                                D.apply(i, s);
                                return i
                            }
                            break
                        }
                }
            }(p || u(e, d))(s, t, !v, i, et.test(e) && vt(t.parentNode) || t);
            return i
        };
        n.sortStable = w.split("").sort(k).join("") === w;
        n.detectDuplicates = !! c;
        h();
        n.sortDetached = ft(function(e) {
            return e.compareDocumentPosition(p.createElement("div")) & 1
        });
        ft(function(e) {
            e.innerHTML = "<a href='#'></a>";
            return e.firstChild.getAttribute("href") === "#"
        }) || lt("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        });
        (!n.attributes || !ft(function(e) {
            e.innerHTML = "<input/>";
            e.firstChild.setAttribute("value", "");
            return e.firstChild.getAttribute("value") === ""
        })) && lt("value", function(e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        });
        ft(function(e) {
            return e.getAttribute("disabled") == null
        }) || lt(B, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        });
        return ot
    }(e);
    h.find = y;
    h.expr = y.selectors;
    h.expr[":"] = h.expr.pseudos;
    h.unique = y.uniqueSort;
    h.text = y.getText;
    h.isXMLDoc = y.isXML;
    h.contains = y.contains;
    var b = h.expr.match.needsContext,
        w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^.[^:#\[\.,]*$/;
    h.filter = function(e, t, n) {
        var r = t[0];
        n && (e = ":not(" + e + ")");
        return t.length === 1 && r.nodeType === 1 ? h.find.matchesSelector(r, e) ? [r] : [] : h.find.matches(e, h.grep(t, function(e) {
            return e.nodeType === 1
        }))
    };
    h.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if (typeof e != "string") return this.pushStack(h(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (h.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) h.find(e, r[t], n);
            n = this.pushStack(i > 1 ? h.unique(n) : n);
            n.selector = this.selector ? this.selector + " " + e : e;
            return n
        },
        filter: function(e) {
            return this.pushStack(S(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(S(this, e || [], !0))
        },
        is: function(e) {
            return !!S(this, typeof e == "string" && b.test(e) ? h(e) : e || [], !1).length
        }
    });
    var x, T = e.document,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = h.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? n = [null, e, null] : n = N.exec(e);
                if (n && (n[1] || !t)) {
                    if (n[1]) {
                        t = t instanceof h ? t[0] : t;
                        h.merge(this, h.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0));
                        if (w.test(n[1]) && h.isPlainObject(t))
                            for (n in t) h.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    r = T.getElementById(n[2]);
                    if (r && r.parentNode) {
                        if (r.id !== n[2]) return x.find(e);
                        this.length = 1;
                        this[0] = r
                    }
                    this.context = T;
                    this.selector = e;
                    return this
                }
                return !t || t.jquery ? (t || x).find(e) : this.constructor(t).find(e)
            }
            if (e.nodeType) {
                this.context = this[0] = e;
                this.length = 1;
                return this
            }
            if (h.isFunction(e)) return typeof x.ready != "undefined" ? x.ready(e) : e(h);
            if (e.selector !== undefined) {
                this.selector = e.selector;
                this.context = e.context
            }
            return h.makeArray(e, this)
        };
    C.prototype = h.fn;
    x = h(T);
    var k = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    h.extend({
        dir: function(e, t, n) {
            var r = [],
                i = e[t];
            while (i && i.nodeType !== 9 && (n === undefined || i.nodeType !== 1 || !h(i).is(n))) {
                i.nodeType === 1 && r.push(i);
                i = i[t]
            }
            return r
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    h.fn.extend({
        has: function(e) {
            var t, n = h(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (h.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = b.test(e) || typeof e != "string" ? h(e, t || this.context) : 0;
            for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && h.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? h.unique(s) : s)
        },
        index: function(e) {
            return e ? typeof e == "string" ? h.inArray(this[0], h(e)) : h.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(h.unique(h.merge(this.get(), h(e, t))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });
    h.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return h.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h.dir(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return h.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return h.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return h.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return h.sibling(e.firstChild)
        },
        contents: function(e) {
            return h.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : h.merge([], e.childNodes)
        }
    }, function(e, t) {
        h.fn[e] = function(n, r) {
            var i = h.map(this, t, n);
            e.slice(-5) !== "Until" && (r = n);
            r && typeof r == "string" && (i = h.filter(r, i));
            if (this.length > 1) {
                L[e] || (i = h.unique(i));
                k.test(e) && (i = i.reverse())
            }
            return this.pushStack(i)
        }
    });
    var O = /\S+/g,
        M = {};
    h.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : h.extend({}, e);
        var t, n, r, i, s, o, u = [],
            a = !e.once && [],
            f = function(c) {
                n = e.memory && c;
                r = !0;
                s = o || 0;
                o = 0;
                i = u.length;
                t = !0;
                for (; u && s < i; s++)
                    if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1;
                u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
            }, l = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        (function s(t) {
                            h.each(t, function(t, n) {
                                var r = h.type(n);
                                r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && s(n)
                            })
                        })(arguments);
                        if (t) i = u.length;
                        else if (n) {
                            o = r;
                            f(n)
                        }
                    }
                    return this
                },
                remove: function() {
                    u && h.each(arguments, function(e, n) {
                        var r;
                        while ((r = h.inArray(n, u, r)) > -1) {
                            u.splice(r, 1);
                            if (t) {
                                r <= i && i--;
                                r <= s && s--
                            }
                        }
                    });
                    return this
                },
                has: function(e) {
                    return e ? h.inArray(e, u) > -1 : !! u && !! u.length
                },
                empty: function() {
                    u = [];
                    i = 0;
                    return this
                },
                disable: function() {
                    u = a = n = undefined;
                    return this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    a = undefined;
                    n || l.disable();
                    return this
                },
                locked: function() {
                    return !a
                },
                fireWith: function(e, n) {
                    if (u && (!r || a)) {
                        n = n || [];
                        n = [e, n.slice ? n.slice() : n];
                        t ? a.push(n) : f(n)
                    }
                    return this
                },
                fire: function() {
                    l.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    };
    h.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", h.Callbacks("once memory"), "resolved"],
                ["reject", "fail", h.Callbacks("once memory"), "rejected"],
                ["notify", "progress", h.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        i.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var e = arguments;
                        return h.Deferred(function(n) {
                            h.each(t, function(t, s) {
                                var o = h.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && h.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            });
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? h.extend(e, r) : r
                    }
                }, i = {};
            r.pipe = r.then;
            h.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add;
                u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock);
                i[s[0]] = function() {
                    i[s[0] + "With"](this === i ? r : this, arguments);
                    return this
                };
                i[s[0] + "With"] = o.fireWith
            });
            r.promise(i);
            e && e.call(i, i);
            return i
        },
        when: function(e) {
            var t = 0,
                n = r.call(arguments),
                i = n.length,
                s = i !== 1 || e && h.isFunction(e.promise) ? i : 0,
                o = s === 1 ? e : h.Deferred(),
                u = function(e, t, n) {
                    return function(i) {
                        t[e] = this;
                        n[e] = arguments.length > 1 ? r.call(arguments) : i;
                        n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                    }
                }, a, f, l;
            if (i > 1) {
                a = new Array(i);
                f = new Array(i);
                l = new Array(i);
                for (; t < i; t++) n[t] && h.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s
            }
            s || o.resolveWith(l, n);
            return o.promise()
        }
    });
    var D;
    h.fn.ready = function(e) {
        h.ready.promise().done(e);
        return this
    };
    h.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? h.readyWait++ : h.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --h.readyWait : h.isReady) return;
            if (!T.body) return setTimeout(h.ready);
            h.isReady = !0;
            if (e !== !0 && --h.readyWait > 0) return;
            D.resolveWith(T, [h]);
            if (h.fn.triggerHandler) {
                h(T).triggerHandler("ready");
                h(T).off("ready")
            }
        }
    });
    h.ready.promise = function(t) {
        if (!D) {
            D = h.Deferred();
            if (T.readyState === "complete") setTimeout(h.ready);
            else if (T.addEventListener) {
                T.addEventListener("DOMContentLoaded", H, !1);
                e.addEventListener("load", H, !1)
            } else {
                T.attachEvent("onreadystatechange", H);
                e.attachEvent("onload", H);
                var n = !1;
                try {
                    n = e.frameElement == null && T.documentElement
                } catch (r) {}
                n && n.doScroll && function i() {
                    if (!h.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        P();
                        h.ready()
                    }
                }()
            }
        }
        return D.promise(t)
    };
    var B = typeof undefined,
        j;
    for (j in h(l)) break;
    l.ownLast = j !== "0";
    l.inlineBlockNeedsLayout = !1;
    h(function() {
        var e, t, n, r;
        n = T.getElementsByTagName("body")[0];
        if (!n || !n.style) return;
        t = T.createElement("div");
        r = T.createElement("div");
        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        n.appendChild(r).appendChild(t);
        if (typeof t.style.zoom !== B) {
            t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            l.inlineBlockNeedsLayout = e = t.offsetWidth === 3;
            e && (n.style.zoom = 1)
        }
        n.removeChild(r)
    });
    (function() {
        var e = T.createElement("div");
        if (l.deleteExpando == null) {
            l.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                l.deleteExpando = !1
            }
        }
        e = null
    })();
    h.acceptData = function(e) {
        var t = h.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
        return n !== 1 && n !== 9 ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        I = /([A-Z])/g;
    h.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            e = e.nodeType ? h.cache[e[h.expando]] : e[h.expando];
            return !!e && !R(e)
        },
        data: function(e, t, n) {
            return U(e, t, n)
        },
        removeData: function(e, t) {
            return z(e, t)
        },
        _data: function(e, t, n) {
            return U(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return z(e, t, !0)
        }
    });
    h.fn.extend({
        data: function(e, t) {
            var n, r, i, s = this[0],
                o = s && s.attributes;
            if (e === undefined) {
                if (this.length) {
                    i = h.data(s);
                    if (s.nodeType === 1 && !h._data(s, "parsedAttrs")) {
                        n = o.length;
                        while (n--)
                            if (o[n]) {
                                r = o[n].name;
                                if (r.indexOf("data-") === 0) {
                                    r = h.camelCase(r.slice(5));
                                    q(s, r, i[r])
                                }
                            }
                        h._data(s, "parsedAttrs", !0)
                    }
                }
                return i
            }
            return typeof e == "object" ? this.each(function() {
                h.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                h.data(this, e, t)
            }) : s ? q(s, e, h.data(s, e)) : undefined
        },
        removeData: function(e) {
            return this.each(function() {
                h.removeData(this, e)
            })
        }
    });
    h.extend({
        queue: function(e, t, n) {
            var r;
            if (e) {
                t = (t || "fx") + "queue";
                r = h._data(e, t);
                n && (!r || h.isArray(n) ? r = h._data(e, t, h.makeArray(n)) : r.push(n));
                return r || []
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = h.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = h._queueHooks(e, t),
                o = function() {
                    h.dequeue(e, t)
                };
            if (i === "inprogress") {
                i = n.shift();
                r--
            }
            if (i) {
                t === "fx" && n.unshift("inprogress");
                delete s.stop;
                i.call(e, o, s)
            }!r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return h._data(e, n) || h._data(e, n, {
                empty: h.Callbacks("once memory").add(function() {
                    h._removeData(e, t + "queue");
                    h._removeData(e, n)
                })
            })
        }
    });
    h.fn.extend({
        queue: function(e, t) {
            var n = 2;
            if (typeof e != "string") {
                t = e;
                e = "fx";
                n--
            }
            return arguments.length < n ? h.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = h.queue(this, e, t);
                h._queueHooks(this, e);
                e === "fx" && n[0] !== "inprogress" && h.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                h.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = h.Deferred(),
                s = this,
                o = this.length,
                u = function() {
                    --r || i.resolveWith(s, [s])
                };
            if (typeof e != "string") {
                t = e;
                e = undefined
            }
            e = e || "fx";
            while (o--) {
                n = h._data(s[o], e + "queueHooks");
                if (n && n.empty) {
                    r++;
                    n.empty.add(u)
                }
            }
            u();
            return i.promise(t)
        }
    });
    var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        X = ["Top", "Right", "Bottom", "Left"],
        V = function(e, t) {
            e = t || e;
            return h.css(e, "display") === "none" || !h.contains(e.ownerDocument, e)
        }, $ = h.access = function(e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = n == null;
            if (h.type(n) === "object") {
                i = !0;
                for (u in n) h.access(e, t, u, n[u], !0, s, o)
            } else if (r !== undefined) {
                i = !0;
                h.isFunction(r) || (o = !0);
                if (f)
                    if (o) {
                        t.call(e, r);
                        t = null
                    } else {
                        f = t;
                        t = function(e, t, n) {
                            return f.call(h(e), n)
                        }
                    }
                if (t)
                    for (; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
            }
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
        }, J = /^(?:checkbox|radio)$/i;
    (function() {
        var e = T.createElement("input"),
            t = T.createElement("div"),
            n = T.createDocumentFragment();
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        l.leadingWhitespace = t.firstChild.nodeType === 3;
        l.tbody = !t.getElementsByTagName("tbody").length;
        l.htmlSerialize = !! t.getElementsByTagName("link").length;
        l.html5Clone = T.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>";
        e.type = "checkbox";
        e.checked = !0;
        n.appendChild(e);
        l.appendChecked = e.checked;
        t.innerHTML = "<textarea>x</textarea>";
        l.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue;
        n.appendChild(t);
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        l.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked;
        l.noCloneEvent = !0;
        if (t.attachEvent) {
            t.attachEvent("onclick", function() {
                l.noCloneEvent = !1
            });
            t.cloneNode(!0).click()
        }
        if (l.deleteExpando == null) {
            l.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                l.deleteExpando = !1
            }
        }
    })();
    (function() {
        var t, n, r = T.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            n = "on" + t;
            if (!(l[t + "Bubbles"] = n in e)) {
                r.setAttribute(n, "t");
                l[t + "Bubbles"] = r.attributes[n].expando === !1
            }
        }
        r = null
    })();
    var K = /^(?:input|select|textarea)$/i,
        Q = /^key/,
        G = /^(?:mouse|pointer|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = /^([^.]*)(?:\.(.+)|)$/;
    h.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, p, d, v, m, g = h._data(e);
            if (!g) return;
            if (n.handler) {
                a = n;
                n = a.handler;
                i = a.selector
            }
            n.guid || (n.guid = h.guid++);
            (o = g.events) || (o = g.events = {});
            if (!(l = g.handle)) {
                l = g.handle = function(e) {
                    return typeof h === B || !! e && h.event.triggered === e.type ? undefined : h.event.dispatch.apply(l.elem, arguments)
                };
                l.elem = e
            }
            t = (t || "").match(O) || [""];
            u = t.length;
            while (u--) {
                s = Z.exec(t[u]) || [];
                d = m = s[1];
                v = (s[2] || "").split(".").sort();
                if (!d) continue;
                f = h.event.special[d] || {};
                d = (i ? f.delegateType : f.bindType) || d;
                f = h.event.special[d] || {};
                c = h.extend({
                    type: d,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && h.expr.match.needsContext.test(i),
                    namespace: v.join(".")
                }, a);
                if (!(p = o[d])) {
                    p = o[d] = [];
                    p.delegateCount = 0;
                    if (!f.setup || f.setup.call(e, r, v, l) === !1) e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l)
                }
                if (f.add) {
                    f.add.call(e, c);
                    c.handler.guid || (c.handler.guid = n.guid)
                }
                i ? p.splice(p.delegateCount++, 0, c) : p.push(c);
                h.event.global[d] = !0
            }
            e = null
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, p, d, v, m, g = h.hasData(e) && h._data(e);
            if (!g || !(l = g.events)) return;
            t = (t || "").match(O) || [""];
            f = t.length;
            while (f--) {
                u = Z.exec(t[f]) || [];
                d = m = u[1];
                v = (u[2] || "").split(".").sort();
                if (!d) {
                    for (d in l) h.event.remove(e, d + t[f], n, r, !0);
                    continue
                }
                c = h.event.special[d] || {};
                d = (r ? c.delegateType : c.bindType) || d;
                p = l[d] || [];
                u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)");
                a = s = p.length;
                while (s--) {
                    o = p[s];
                    if ((i || m === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector)) {
                        p.splice(s, 1);
                        o.selector && p.delegateCount--;
                        c.remove && c.remove.call(e, o)
                    }
                }
                if (a && !p.length) {
                    (!c.teardown || c.teardown.call(e, v, g.handle) === !1) && h.removeEvent(e, d, g.handle);
                    delete l[d]
                }
            }
            if (h.isEmptyObject(l)) {
                delete g.handle;
                h._removeData(e, "events")
            }
        },
        trigger: function(t, n, r, i) {
            var s, o, u, a, l, c, p, d = [r || T],
                v = f.call(t, "type") ? t.type : t,
                m = f.call(t, "namespace") ? t.namespace.split(".") : [];
            u = c = r = r || T;
            if (r.nodeType === 3 || r.nodeType === 8) return;
            if (Y.test(v + h.event.triggered)) return;
            if (v.indexOf(".") >= 0) {
                m = v.split(".");
                v = m.shift();
                m.sort()
            }
            o = v.indexOf(":") < 0 && "on" + v;
            t = t[h.expando] ? t : new h.Event(v, typeof t == "object" && t);
            t.isTrigger = i ? 2 : 3;
            t.namespace = m.join(".");
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            t.result = undefined;
            t.target || (t.target = r);
            n = n == null ? [t] : h.makeArray(n, [t]);
            l = h.event.special[v] || {};
            if (!i && l.trigger && l.trigger.apply(r, n) === !1) return;
            if (!i && !l.noBubble && !h.isWindow(r)) {
                a = l.delegateType || v;
                Y.test(a + v) || (u = u.parentNode);
                for (; u; u = u.parentNode) {
                    d.push(u);
                    c = u
                }
                c === (r.ownerDocument || T) && d.push(c.defaultView || c.parentWindow || e)
            }
            p = 0;
            while ((u = d[p++]) && !t.isPropagationStopped()) {
                t.type = p > 1 ? a : l.bindType || v;
                s = (h._data(u, "events") || {})[t.type] && h._data(u, "handle");
                s && s.apply(u, n);
                s = o && u[o];
                if (s && s.apply && h.acceptData(u)) {
                    t.result = s.apply(u, n);
                    t.result === !1 && t.preventDefault()
                }
            }
            t.type = v;
            if (!i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && h.acceptData(r) && o && r[v] && !h.isWindow(r)) {
                c = r[o];
                c && (r[o] = null);
                h.event.triggered = v;
                try {
                    r[v]()
                } catch (g) {}
                h.event.triggered = undefined;
                c && (r[o] = c)
            }
            return t.result
        },
        dispatch: function(e) {
            e = h.event.fix(e);
            var t, n, i, s, o, u = [],
                a = r.call(arguments),
                f = (h._data(this, "events") || {})[e.type] || [],
                l = h.event.special[e.type] || {};
            a[0] = e;
            e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = h.event.handlers.call(this, e, f);
            t = 0;
            while ((s = u[t++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem;
                o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(i.namespace)) {
                        e.handleObj = i;
                        e.data = i.data;
                        n = ((h.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a);
                        if (n !== undefined && (e.result = n) === !1) {
                            e.preventDefault();
                            e.stopPropagation()
                        }
                    }
            }
            l.postDispatch && l.postDispatch.call(this, e);
            return e.result
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [],
                u = t.delegateCount,
                a = e.target;
            if (u && a.nodeType && (!e.button || e.type !== "click"))
                for (; a != this; a = a.parentNode || this)
                    if (a.nodeType === 1 && (a.disabled !== !0 || e.type !== "click")) {
                        i = [];
                        for (s = 0; s < u; s++) {
                            r = t[s];
                            n = r.selector + " ";
                            i[n] === undefined && (i[n] = r.needsContext ? h(n, this).index(a) >= 0 : h.find(n, this, null, [a]).length);
                            i[n] && i.push(r)
                        }
                        i.length && o.push({
                            elem: a,
                            handlers: i
                        })
                    }
            u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            });
            return o
        },
        fix: function(e) {
            if (e[h.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = G.test(i) ? this.mouseHooks : Q.test(i) ? this.keyHooks : {});
            r = o.props ? this.props.concat(o.props) : this.props;
            e = new h.Event(s);
            t = r.length;
            while (t--) {
                n = r[t];
                e[n] = s[n]
            }
            e.target || (e.target = s.srcElement || T);
            e.target.nodeType === 3 && (e.target = e.target.parentNode);
            e.metaKey = !! e.metaKey;
            return o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode);
                return e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button,
                    o = t.fromElement;
                if (e.pageX == null && t.clientX != null) {
                    r = e.target.ownerDocument || T;
                    i = r.documentElement;
                    n = r.body;
                    e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0);
                    e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)
                }!e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o);
                !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0);
                return e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== nt() && this.focus) try {
                        this.focus();
                        return !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === nt() && this.blur) {
                        this.blur();
                        return !1
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (h.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return !1
                    }
                },
                _default: function(e) {
                    return h.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = h.extend(new h.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? h.event.trigger(i, null, t) : h.event.dispatch.call(t, i);
            i.isDefaultPrevented() && n.preventDefault()
        }
    };
    h.removeEvent = T.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        if (e.detachEvent) {
            typeof e[r] === B && (e[r] = null);
            e.detachEvent(r, n)
        }
    };
    h.Event = function(e, t) {
        if (!(this instanceof h.Event)) return new h.Event(e, t);
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === !1 ? et : tt
        } else this.type = e;
        t && h.extend(this, t);
        this.timeStamp = e && e.timeStamp || h.now();
        this[h.expando] = !0
    };
    h.Event.prototype = {
        isDefaultPrevented: tt,
        isPropagationStopped: tt,
        isImmediatePropagationStopped: tt,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = et;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = et;
            if (!e) return;
            e.stopPropagation && e.stopPropagation();
            e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = et;
            e && e.stopImmediatePropagation && e.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    h.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        h.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                if (!i || i !== r && !h.contains(r, i)) {
                    e.type = s.origType;
                    n = s.handler.apply(this, arguments);
                    e.type = t
                }
                return n
            }
        }
    });
    l.submitBubbles || (h.event.special.submit = {
        setup: function() {
            if (h.nodeName(this, "form")) return !1;
            h.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = h.nodeName(t, "input") || h.nodeName(t, "button") ? t.form : undefined;
                if (n && !h._data(n, "submitBubbles")) {
                    h.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    });
                    h._data(n, "submitBubbles", !0)
                }
            })
        },
        postDispatch: function(e) {
            if (e._submit_bubble) {
                delete e._submit_bubble;
                this.parentNode && !e.isTrigger && h.event.simulate("submit", this.parentNode, e, !0)
            }
        },
        teardown: function() {
            if (h.nodeName(this, "form")) return !1;
            h.event.remove(this, "._submit")
        }
    });
    l.changeBubbles || (h.event.special.change = {
        setup: function() {
            if (K.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                    h.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    });
                    h.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1);
                        h.event.simulate("change", this, e, !0)
                    })
                }
                return !1
            }
            h.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                if (K.test(t.nodeName) && !h._data(t, "changeBubbles")) {
                    h.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && h.event.simulate("change", this.parentNode, e, !0)
                    });
                    h._data(t, "changeBubbles", !0)
                }
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            h.event.remove(this, "._change");
            return !K.test(this.nodeName)
        }
    });
    l.focusinBubbles || h.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            h.event.simulate(t, e.target, h.event.fix(e), !0)
        };
        h.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = h._data(r, t);
                i || r.addEventListener(e, n, !0);
                h._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = h._data(r, t) - 1;
                if (!i) {
                    r.removeEventListener(e, n, !0);
                    h._removeData(r, t)
                } else h._data(r, t, i)
            }
        }
    });
    h.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if (typeof e == "object") {
                if (typeof t != "string") {
                    n = n || t;
                    t = undefined
                }
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (n == null && r == null) {
                r = t;
                n = t = undefined
            } else if (r == null)
                if (typeof t == "string") {
                    r = n;
                    n = undefined
                } else {
                    r = n;
                    n = t;
                    t = undefined
                }
            if (r === !1) r = tt;
            else if (!r) return this;
            if (i === 1) {
                o = r;
                r = function(e) {
                    h().off(e);
                    return o.apply(this, arguments)
                };
                r.guid = o.guid || (o.guid = h.guid++)
            }
            return this.each(function() {
                h.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) {
                r = e.handleObj;
                h(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                return this
            }
            if (typeof e == "object") {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            if (t === !1 || typeof t == "function") {
                n = t;
                t = undefined
            }
            n === !1 && (n = tt);
            return this.each(function() {
                h.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                h.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return h.event.trigger(e, t, n, !0)
        }
    });
    var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        st = / jQuery\d+="(?:null|\d+)"/g,
        ot = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
        ut = /^\s+/,
        at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ft = /<([\w:]+)/,
        lt = /<tbody/i,
        ct = /<|&#?\w+;/,
        ht = /<(?:script|style|link)/i,
        pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dt = /^$|\/(?:java|ecma)script/i,
        vt = /^true\/(.*)/,
        mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, yt = rt(T),
        bt = yt.appendChild(T.createElement("div"));
    gt.optgroup = gt.option;
    gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead;
    gt.th = gt.td;
    h.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = h.contains(e.ownerDocument, e);
            if (l.html5Clone || h.isXMLDoc(e) || !ot.test("<" + e.nodeName + ">")) s = e.cloneNode(!0);
            else {
                bt.innerHTML = e.outerHTML;
                bt.removeChild(s = bt.firstChild)
            } if ((!l.noCloneEvent || !l.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !h.isXMLDoc(e)) {
                r = wt(s);
                u = wt(e);
                for (o = 0;
                    (i = u[o]) != null; ++o) r[o] && kt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || wt(e);
                    r = r || wt(s);
                    for (o = 0;
                        (i = u[o]) != null; o++) Ct(i, r[o])
                } else Ct(e, s);
            r = wt(s, "script");
            r.length > 0 && Nt(r, !a && wt(e, "script"));
            r = u = i = null;
            return s
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, c, p = e.length,
                d = rt(t),
                v = [],
                m = 0;
            for (; m < p; m++) {
                s = e[m];
                if (s || s === 0)
                    if (h.type(s) === "object") h.merge(v, s.nodeType ? [s] : s);
                    else
                if (!ct.test(s)) v.push(t.createTextNode(s));
                else {
                    u = u || d.appendChild(t.createElement("div"));
                    a = (ft.exec(s) || ["", ""])[1].toLowerCase();
                    c = gt[a] || gt._default;
                    u.innerHTML = c[1] + s.replace(at, "<$1></$2>") + c[2];
                    i = c[0];
                    while (i--) u = u.lastChild;
                    !l.leadingWhitespace && ut.test(s) && v.push(t.createTextNode(ut.exec(s)[0]));
                    if (!l.tbody) {
                        s = a === "table" && !lt.test(s) ? u.firstChild : c[1] === "<table>" && !lt.test(s) ? u : 0;
                        i = s && s.childNodes.length;
                        while (i--) h.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    h.merge(v, u.childNodes);
                    u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = d.lastChild
                }
            }
            u && d.removeChild(u);
            l.appendChecked || h.grep(wt(v, "input"), Et);
            m = 0;
            while (s = v[m++]) {
                if (r && h.inArray(s, r) !== -1) continue;
                o = h.contains(s.ownerDocument, s);
                u = wt(d.appendChild(s), "script");
                o && Nt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) dt.test(s.type || "") && n.push(s)
                }
            }
            u = null;
            return d
        },
        cleanData: function(e, t) {
            var r, i, s, o, u = 0,
                a = h.expando,
                f = h.cache,
                c = l.deleteExpando,
                p = h.event.special;
            for (;
                (r = e[u]) != null; u++)
                if (t || h.acceptData(r)) {
                    s = r[a];
                    o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (i in o.events) p[i] ? h.event.remove(r, i) : h.removeEvent(r, i, o.handle);
                        if (f[s]) {
                            delete f[s];
                            c ? delete r[a] : typeof r.removeAttribute !== B ? r.removeAttribute(a) : r[a] = null;
                            n.push(s)
                        }
                    }
                }
        }
    });
    h.fn.extend({
        text: function(e) {
            return $(this, function(e) {
                return e === undefined ? h.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = St(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = St(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? h.filter(e, this) : this,
                i = 0;
            for (;
                (n = r[i]) != null; i++) {
                !t && n.nodeType === 1 && h.cleanData(wt(n));
                if (n.parentNode) {
                    t && h.contains(n.ownerDocument, n) && Nt(wt(n, "script"));
                    n.parentNode.removeChild(n)
                }
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && h.cleanData(wt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && h.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            e = e == null ? !1 : e;
            t = t == null ? e : t;
            return this.map(function() {
                return h.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}, n = 0,
                    r = this.length;
                if (e === undefined) return t.nodeType === 1 ? t.innerHTML.replace(st, "") : undefined;
                if (typeof e == "string" && !ht.test(e) && (l.htmlSerialize || !ot.test(e)) && (l.leadingWhitespace || !ut.test(e)) && !gt[(ft.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(at, "<$1></$2>");
                    try {
                        for (; n < r; n++) {
                            t = this[n] || {};
                            if (t.nodeType === 1) {
                                h.cleanData(wt(t, !1));
                                t.innerHTML = e
                            }
                        }
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            this.domManip(arguments, function(t) {
                e = this.parentNode;
                h.cleanData(wt(this));
                e && e.replaceChild(t, this)
            });
            return e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, s, o, u, a, f = 0,
                c = this.length,
                p = this,
                d = c - 1,
                v = e[0],
                m = h.isFunction(v);
            if (m || c > 1 && typeof v == "string" && !l.checkClone && pt.test(v)) return this.each(function(n) {
                var r = p.eq(n);
                m && (e[0] = v.call(this, n, r.html()));
                r.domManip(e, t)
            });
            if (c) {
                a = h.buildFragment(e, this[0].ownerDocument, !1, this);
                n = a.firstChild;
                a.childNodes.length === 1 && (a = n);
                if (n) {
                    o = h.map(wt(a, "script"), xt);
                    s = o.length;
                    for (; f < c; f++) {
                        r = a;
                        if (f !== d) {
                            r = h.clone(r, !0, !0);
                            s && h.merge(o, wt(r, "script"))
                        }
                        t.call(this[f], r, f)
                    }
                    if (s) {
                        u = o[o.length - 1].ownerDocument;
                        h.map(o, Tt);
                        for (f = 0; f < s; f++) {
                            r = o[f];
                            dt.test(r.type || "") && !h._data(r, "globalEval") && h.contains(u, r) && (r.src ? h._evalUrl && h._evalUrl(r.src) : h.globalEval((r.text || r.textContent || r.innerHTML || "").replace(mt, "")))
                        }
                    }
                    a = n = null
                }
            }
            return this
        }
    });
    h.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        h.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = h(e),
                u = o.length - 1;
            for (; r <= u; r++) {
                n = r === u ? this : this.clone(!0);
                h(o[r])[t](n);
                s.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });
    var Lt, At = {};
    (function() {
        var e;
        l.shrinkWrapBlocks = function() {
            if (e != null) return e;
            e = !1;
            var t, n, r;
            n = T.getElementsByTagName("body")[0];
            if (!n || !n.style) return;
            t = T.createElement("div");
            r = T.createElement("div");
            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            n.appendChild(r).appendChild(t);
            if (typeof t.style.zoom !== B) {
                t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
                t.appendChild(T.createElement("div")).style.width = "5px";
                e = t.offsetWidth !== 3
            }
            n.removeChild(r);
            return e
        }
    })();
    var _t = /^margin/,
        Dt = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
        Pt, Ht, Bt = /^(top|right|bottom|left)$/;
    if (e.getComputedStyle) {
        Pt = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
        Ht = function(e, t, n) {
            var r, i, s, o, u = e.style;
            n = n || Pt(e);
            o = n ? n.getPropertyValue(t) || n[t] : undefined;
            if (n) {
                o === "" && !h.contains(e.ownerDocument, e) && (o = h.style(e, t));
                if (Dt.test(o) && _t.test(t)) {
                    r = u.width;
                    i = u.minWidth;
                    s = u.maxWidth;
                    u.minWidth = u.maxWidth = u.width = o;
                    o = n.width;
                    u.width = r;
                    u.minWidth = i;
                    u.maxWidth = s
                }
            }
            return o === undefined ? o : o + ""
        }
    } else if (T.documentElement.currentStyle) {
        Pt = function(e) {
            return e.currentStyle
        };
        Ht = function(e, t, n) {
            var r, i, s, o, u = e.style;
            n = n || Pt(e);
            o = n ? n[t] : undefined;
            o == null && u && u[t] && (o = u[t]);
            if (Dt.test(o) && !Bt.test(t)) {
                r = u.left;
                i = e.runtimeStyle;
                s = i && i.left;
                s && (i.left = e.currentStyle.left);
                u.left = t === "fontSize" ? "1em" : o;
                o = u.pixelLeft + "px";
                u.left = r;
                s && (i.left = s)
            }
            return o === undefined ? o : o + "" || "auto"
        }
    }(function() {
        function a() {
            var t, n, r, a;
            n = T.getElementsByTagName("body")[0];
            if (!n || !n.style) return;
            t = T.createElement("div");
            r = T.createElement("div");
            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            n.appendChild(r).appendChild(t);
            t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
            i = s = !1;
            u = !0;
            if (e.getComputedStyle) {
                i = (e.getComputedStyle(t, null) || {}).top !== "1%";
                s = (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width === "4px";
                a = t.appendChild(T.createElement("div"));
                a.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                a.style.marginRight = a.style.width = "0";
                t.style.width = "1px";
                u = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight);
                t.removeChild(a)
            }
            t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            a = t.getElementsByTagName("td");
            a[0].style.cssText = "margin:0;border:0;padding:0;display:none";
            o = a[0].offsetHeight === 0;
            if (o) {
                a[0].style.display = "";
                a[1].style.display = "none";
                o = a[0].offsetHeight === 0
            }
            n.removeChild(r)
        }
        var t, n, r, i, s, o, u;
        t = T.createElement("div");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        r = t.getElementsByTagName("a")[0];
        n = r && r.style;
        if (!n) return;
        n.cssText = "float:left;opacity:.5";
        l.opacity = n.opacity === "0.5";
        l.cssFloat = !! n.cssFloat;
        t.style.backgroundClip = "content-box";
        t.cloneNode(!0).style.backgroundClip = "";
        l.clearCloneStyle = t.style.backgroundClip === "content-box";
        l.boxSizing = n.boxSizing === "" || n.MozBoxSizing === "" || n.WebkitBoxSizing === "";
        h.extend(l, {
            reliableHiddenOffsets: function() {
                o == null && a();
                return o
            },
            boxSizingReliable: function() {
                s == null && a();
                return s
            },
            pixelPosition: function() {
                i == null && a();
                return i
            },
            reliableMarginRight: function() {
                u == null && a();
                return u
            }
        })
    })();
    h.swap = function(e, t, n, r) {
        var i, s, o = {};
        for (s in t) {
            o[s] = e.style[s];
            e.style[s] = t[s]
        }
        i = n.apply(e, r || []);
        for (s in t) e.style[s] = o[s];
        return i
    };
    var Ft = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        qt = /^(none|table(?!-c[ea]).+)/,
        Rt = new RegExp("^(" + W + ")(.*)$", "i"),
        Ut = new RegExp("^([+-])=(" + W + ")", "i"),
        zt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Wt = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Xt = ["Webkit", "O", "Moz", "ms"];
    h.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ht(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var i, s, o, u = h.camelCase(t),
                a = e.style;
            t = h.cssProps[u] || (h.cssProps[u] = Vt(a, u));
            o = h.cssHooks[t] || h.cssHooks[u];
            if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
            s = typeof n;
            if (s === "string" && (i = Ut.exec(n))) {
                n = (i[1] + 1) * i[2] + parseFloat(h.css(e, t));
                s = "number"
            }
            if (n == null || n !== n) return;
            s === "number" && !h.cssNumber[u] && (n += "px");
            !l.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
            if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) try {
                a[t] = n
            } catch (f) {}
        },
        css: function(e, t, n, r) {
            var i, s, o, u = h.camelCase(t);
            t = h.cssProps[u] || (h.cssProps[u] = Vt(e.style, u));
            o = h.cssHooks[t] || h.cssHooks[u];
            o && "get" in o && (s = o.get(e, !0, n));
            s === undefined && (s = Ht(e, t, r));
            s === "normal" && t in Wt && (s = Wt[t]);
            if (n === "" || n) {
                i = parseFloat(s);
                return n === !0 || h.isNumeric(i) ? i || 0 : s
            }
            return s
        }
    });
    h.each(["height", "width"], function(e, t) {
        h.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return qt.test(h.css(e, "display")) && e.offsetWidth === 0 ? h.swap(e, zt, function() {
                    return Qt(e, t, r)
                }) : Qt(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && Pt(e);
                return Jt(e, n, r ? Kt(e, t, r, l.boxSizing && h.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    });
    l.opacity || (h.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = h.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && h.trim(s.replace(Ft, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = Ft.test(s) ? s.replace(Ft, i) : s + " " + i
        }
    });
    h.cssHooks.marginRight = jt(l.reliableMarginRight, function(e, t) {
        if (t) return h.swap(e, {
            display: "inline-block"
        }, Ht, [e, "marginRight"])
    });
    h.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        h.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {}, s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + X[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        };
        _t.test(e) || (h.cssHooks[e + t].set = Jt)
    });
    h.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, s = {}, o = 0;
                if (h.isArray(t)) {
                    r = Pt(e);
                    i = t.length;
                    for (; o < i; o++) s[t[o]] = h.css(e, t[o], !1, r);
                    return s
                }
                return n !== undefined ? h.style(e, t, n) : h.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return $t(this, !0)
        },
        hide: function() {
            return $t(this)
        },
        toggle: function(e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                V(this) ? h(this).show() : h(this).hide()
            })
        }
    });
    h.Tween = Gt;
    Gt.prototype = {
        constructor: Gt,
        init: function(e, t, n, r, i, s) {
            this.elem = e;
            this.prop = n;
            this.easing = i || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = r;
            this.unit = s || (h.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Gt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Gt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Gt.propHooks[this.prop];
            this.options.duration ? this.pos = t = h.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e;
            this.now = (this.end - this.start) * t + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            n && n.set ? n.set(this) : Gt.propHooks._default.set(this);
            return this
        }
    };
    Gt.prototype.init.prototype = Gt.prototype;
    Gt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (e.elem[e.prop] == null || !! e.elem.style && e.elem.style[e.prop] != null) {
                    t = h.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t
                }
                return e.elem[e.prop]
            },
            set: function(e) {
                h.fx.step[e.prop] ? h.fx.step[e.prop](e) : e.elem.style && (e.elem.style[h.cssProps[e.prop]] != null || h.cssHooks[e.prop]) ? h.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    };
    Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    };
    h.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    };
    h.fx = Gt.prototype.init;
    h.fx.step = {};
    var Yt, Zt, en = /^(?:toggle|show|hide)$/,
        tn = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
        nn = /queueHooks$/,
        rn = [fn],
        sn = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = tn.exec(t),
                        s = i && i[3] || (h.cssNumber[e] ? "" : "px"),
                        o = (h.cssNumber[e] || s !== "px" && +r) && tn.exec(h.css(n.elem, e)),
                        u = 1,
                        a = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3];
                        i = i || [];
                        o = +r || 1;
                        do {
                            u = u || ".5";
                            o /= u;
                            h.style(n.elem, e, o + s)
                        } while (u !== (u = n.cur() / r) && u !== 1 && --a)
                    }
                    if (i) {
                        o = n.start = +o || +r || 0;
                        n.unit = s;
                        n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]
                    }
                    return n
                }
            ]
        };
    h.Animation = h.extend(cn, {
        tweener: function(e, t) {
            if (h.isFunction(e)) {
                t = e;
                e = ["*"]
            } else e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) {
                n = e[r];
                sn[n] = sn[n] || [];
                sn[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            t ? rn.unshift(e) : rn.push(e)
        }
    });
    h.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? h.extend({}, e) : {
            complete: n || !n && t || h.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !h.isFunction(t) && t
        };
        r.duration = h.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in h.fx.speeds ? h.fx.speeds[r.duration] : h.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        r.old = r.complete;
        r.complete = function() {
            h.isFunction(r.old) && r.old.call(this);
            r.queue && h.dequeue(this, r.queue)
        };
        return r
    };
    h.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = h.isEmptyObject(e),
                s = h.speed(t, n, r),
                o = function() {
                    var t = cn(this, h.extend({}, e), s);
                    (i || h._data(this, "finish")) && t.stop(!0)
                };
            o.finish = o;
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop;
                t(n)
            };
            if (typeof e != "string") {
                n = t;
                t = e;
                e = undefined
            }
            t && e !== !1 && this.queue(e || "fx", []);
            return this.each(function() {
                var t = !0,
                    i = e != null && e + "queueHooks",
                    s = h.timers,
                    o = h._data(this);
                if (i) o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o) o[i] && o[i].stop && nn.test(i) && r(o[i]);
                for (i = s.length; i--;)
                    if (s[i].elem === this && (e == null || s[i].queue === e)) {
                        s[i].anim.stop(n);
                        t = !1;
                        s.splice(i, 1)
                    }(t || !n) && h.dequeue(this, e)
            })
        },
        finish: function(e) {
            e !== !1 && (e = e || "fx");
            return this.each(function() {
                var t, n = h._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = h.timers,
                    o = r ? r.length : 0;
                n.finish = !0;
                h.queue(this, e, []);
                i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--;)
                    if (s[t].elem === this && s[t].queue === e) {
                        s[t].anim.stop(!0);
                        s.splice(t, 1)
                    }
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });
    h.each(["toggle", "show", "hide"], function(e, t) {
        var n = h.fn[t];
        h.fn[t] = function(e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(un(t, !0), e, r, i)
        }
    });
    h.each({
        slideDown: un("show"),
        slideUp: un("hide"),
        slideToggle: un("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        h.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    });
    h.timers = [];
    h.fx.tick = function() {
        var e, t = h.timers,
            n = 0;
        Yt = h.now();
        for (; n < t.length; n++) {
            e = t[n];
            !e() && t[n] === e && t.splice(n--, 1)
        }
        t.length || h.fx.stop();
        Yt = undefined
    };
    h.fx.timer = function(e) {
        h.timers.push(e);
        e() ? h.fx.start() : h.timers.pop()
    };
    h.fx.interval = 13;
    h.fx.start = function() {
        Zt || (Zt = setInterval(h.fx.tick, h.fx.interval))
    };
    h.fx.stop = function() {
        clearInterval(Zt);
        Zt = null
    };
    h.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    h.fn.delay = function(e, t) {
        e = h.fx ? h.fx.speeds[e] || e : e;
        t = t || "fx";
        return this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    };
    (function() {
        var e, t, n, r, i;
        t = T.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        r = t.getElementsByTagName("a")[0];
        n = T.createElement("select");
        i = n.appendChild(T.createElement("option"));
        e = t.getElementsByTagName("input")[0];
        r.style.cssText = "top:1px";
        l.getSetAttribute = t.className !== "t";
        l.style = /top/.test(r.getAttribute("style"));
        l.hrefNormalized = r.getAttribute("href") === "/a";
        l.checkOn = !! e.value;
        l.optSelected = i.selected;
        l.enctype = !! T.createElement("form").enctype;
        n.disabled = !0;
        l.optDisabled = !i.disabled;
        e = T.createElement("input");
        e.setAttribute("value", "");
        l.input = e.getAttribute("value") === "";
        e.value = "t";
        e.setAttribute("type", "radio");
        l.radioValue = e.value === "t"
    })();
    var hn = /\r/g;
    h.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (!arguments.length) {
                if (i) {
                    t = h.valHooks[i.type] || h.valHooks[i.nodeName.toLowerCase()];
                    if (t && "get" in t && (n = t.get(i, "value")) !== undefined) return n;
                    n = i.value;
                    return typeof n == "string" ? n.replace(hn, "") : n == null ? "" : n
                }
                return
            }
            r = h.isFunction(e);
            return this.each(function(n) {
                var i;
                if (this.nodeType !== 1) return;
                r ? i = e.call(this, n, h(this).val()) : i = e;
                i == null ? i = "" : typeof i == "number" ? i += "" : h.isArray(i) && (i = h.map(i, function(e) {
                    return e == null ? "" : e + ""
                }));
                t = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()];
                if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
            })
        }
    });
    h.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = h.find.attr(e, "value");
                    return t != null ? t : h.trim(h.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (l.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !h.nodeName(n.parentNode, "optgroup"))) {
                            t = h(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        s = h.makeArray(t),
                        o = i.length;
                    while (o--) {
                        r = i[o];
                        if (h.inArray(h.valHooks.option.get(r), s) >= 0) try {
                            r.selected = n = !0
                        } catch (u) {
                            r.scrollHeight
                        } else r.selected = !1
                    }
                    n || (e.selectedIndex = -1);
                    return i
                }
            }
        }
    });
    h.each(["radio", "checkbox"], function() {
        h.valHooks[this] = {
            set: function(e, t) {
                if (h.isArray(t)) return e.checked = h.inArray(h(e).val(), t) >= 0
            }
        };
        l.checkOn || (h.valHooks[this].get = function(e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var pn, dn, vn = h.expr.attrHandle,
        mn = /^(?:checked|selected)$/i,
        gn = l.getSetAttribute,
        yn = l.input;
    h.fn.extend({
        attr: function(e, t) {
            return $(this, h.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                h.removeAttr(this, e)
            })
        }
    });
    h.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (!e || s === 3 || s === 8 || s === 2) return;
            if (typeof e.getAttribute === B) return h.prop(e, t, n);
            if (s !== 1 || !h.isXMLDoc(e)) {
                t = t.toLowerCase();
                r = h.attrHooks[t] || (h.expr.match.bool.test(t) ? dn : pn)
            }
            if (n === undefined) {
                if (r && "get" in r && (i = r.get(e, t)) !== null) return i;
                i = h.find.attr(e, t);
                return i == null ? undefined : i
            }
            if (n !== null) {
                if (r && "set" in r && (i = r.set(e, n, t)) !== undefined) return i;
                e.setAttribute(t, n + "");
                return n
            }
            h.removeAttr(e, t)
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(O);
            if (s && e.nodeType === 1)
                while (n = s[i++]) {
                    r = h.propFix[n] || n;
                    h.expr.match.bool.test(n) ? yn && gn || !mn.test(n) ? e[r] = !1 : e[h.camelCase("default-" + n)] = e[r] = !1 : h.attr(e, n, "");
                    e.removeAttribute(gn ? n : r)
                }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!l.radioValue && t === "radio" && h.nodeName(e, "input")) {
                        var n = e.value;
                        e.setAttribute("type", t);
                        n && (e.value = n);
                        return t
                    }
                }
            }
        }
    });
    dn = {
        set: function(e, t, n) {
            t === !1 ? h.removeAttr(e, n) : yn && gn || !mn.test(n) ? e.setAttribute(!gn && h.propFix[n] || n, n) : e[h.camelCase("default-" + n)] = e[n] = !0;
            return n
        }
    };
    h.each(h.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = vn[t] || h.find.attr;
        vn[t] = yn && gn || !mn.test(t) ? function(e, t, r) {
            var i, s;
            if (!r) {
                s = vn[t];
                vn[t] = i;
                i = n(e, t, r) != null ? t.toLowerCase() : null;
                vn[t] = s
            }
            return i
        } : function(e, t, n) {
            if (!n) return e[h.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    if (!yn || !gn) h.attrHooks.value = {
        set: function(e, t, n) {
            if (!h.nodeName(e, "input")) return pn && pn.set(e, t, n);
            e.defaultValue = t
        }
    };
    if (!gn) {
        pn = {
            set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n));
                r.value = t += "";
                if (n === "value" || t === e.getAttribute(n)) return t
            }
        };
        vn.id = vn.name = vn.coords = function(e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && r.value !== "" ? r.value : null
        };
        h.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: pn.set
        };
        h.attrHooks.contenteditable = {
            set: function(e, t, n) {
                pn.set(e, t === "" ? !1 : t, n)
            }
        };
        h.each(["width", "height"], function(e, t) {
            h.attrHooks[t] = {
                set: function(e, n) {
                    if (n === "") {
                        e.setAttribute(t, "auto");
                        return n
                    }
                }
            }
        })
    }
    l.style || (h.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var bn = /^(?:input|select|textarea|button|object)$/i,
        wn = /^(?:a|area)$/i;
    h.fn.extend({
        prop: function(e, t) {
            return $(this, h.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            e = h.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = undefined;
                    delete this[e]
                } catch (t) {}
            })
        }
    });
    h.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2) return;
            s = o !== 1 || !h.isXMLDoc(e);
            if (s) {
                t = h.propFix[t] || t;
                i = h.propHooks[t]
            }
            return n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = h.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bn.test(e.nodeName) || wn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    });
    l.hrefNormalized || h.each(["href", "src"], function(e, t) {
        h.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    });
    l.optSelected || (h.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            if (t) {
                t.selectedIndex;
                t.parentNode && t.parentNode.selectedIndex
            }
            return null
        }
    });
    h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        h.propFix[this.toLowerCase()] = this
    });
    l.enctype || (h.propFix.enctype = "encoding");
    var En = /[\t\r\n\f]/g;
    h.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = typeof e == "string" && e;
            if (h.isFunction(e)) return this.each(function(t) {
                h(this).addClass(e.call(this, t, this.className))
            });
            if (f) {
                t = (e || "").match(O) || [];
                for (; u < a; u++) {
                    n = this[u];
                    r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(En, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = h.trim(r);
                        n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = arguments.length === 0 || typeof e == "string" && e;
            if (h.isFunction(e)) return this.each(function(t) {
                h(this).removeClass(e.call(this, t, this.className))
            });
            if (f) {
                t = (e || "").match(O) || [];
                for (; u < a; u++) {
                    n = this[u];
                    r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(En, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        o = e ? h.trim(r) : "";
                        n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : h.isFunction(e) ? this.each(function(n) {
                h(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var t, r = 0,
                        i = h(this),
                        s = e.match(O) || [];
                    while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else if (n === B || n === "boolean") {
                    this.className && h._data(this, "__className__", this.className);
                    this.className = this.className || e === !1 ? "" : h._data(this, "__className__") || ""
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(En, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        h.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    h.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Sn = h.now(),
        xn = /\?/,
        Tn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    h.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = h.trim(t + "");
        return i && !h.trim(i.replace(Tn, function(e, t, i, s) {
            n && t && (r = 0);
            if (r === 0) return e;
            n = i || t;
            r += !s - !i;
            return ""
        })) ? Function("return " + i)() : h.error("Invalid JSON: " + t)
    };
    h.parseXML = function(t) {
        var n, r;
        if (!t || typeof t != "string") return null;
        try {
            if (e.DOMParser) {
                r = new DOMParser;
                n = r.parseFromString(t, "text/xml")
            } else {
                n = new ActiveXObject("Microsoft.XMLDOM");
                n.async = "false";
                n.loadXML(t)
            }
        } catch (i) {
            n = undefined
        }(!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + t);
        return n
    };
    var Nn, Cn, kn = /#.*$/,
        Ln = /([?&])_=[^&]*/,
        An = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mn = /^(?:GET|HEAD)$/,
        _n = /^\/\//,
        Dn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Pn = {}, Hn = {}, Bn = "*/".concat("*");
    try {
        Cn = location.href
    } catch (jn) {
        Cn = T.createElement("a");
        Cn.href = "";
        Cn = Cn.href
    }
    Nn = Dn.exec(Cn.toLowerCase()) || [];
    h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Cn,
            type: "GET",
            isLocal: On.test(Nn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": h.parseJSON,
                "text xml": h.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qn(qn(e, h.ajaxSettings), t) : qn(h.ajaxSettings, e)
        },
        ajaxPrefilter: Fn(Pn),
        ajaxTransport: Fn(Hn),
        ajax: function(e, t) {
            function x(e, t, n, r) {
                var f, g, y, w, S, x = t;
                if (b === 2) return;
                b = 2;
                o && clearTimeout(o);
                a = undefined;
                s = r || "";
                E.readyState = e > 0 ? 4 : 0;
                f = e >= 200 && e < 300 || e === 304;
                n && (w = Rn(l, E, n));
                w = Un(l, w, E, f);
                if (f) {
                    if (l.ifModified) {
                        S = E.getResponseHeader("Last-Modified");
                        S && (h.lastModified[i] = S);
                        S = E.getResponseHeader("etag");
                        S && (h.etag[i] = S)
                    }
                    if (e === 204 || l.type === "HEAD") x = "nocontent";
                    else if (e === 304) x = "notmodified";
                    else {
                        x = w.state;
                        g = w.data;
                        y = w.error;
                        f = !y
                    }
                } else {
                    y = x;
                    if (e || !x) {
                        x = "error";
                        e < 0 && (e = 0)
                    }
                }
                E.status = e;
                E.statusText = (t || x) + "";
                f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]);
                E.statusCode(m);
                m = undefined;
                u && p.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]);
                v.fireWith(c, [E, x]);
                if (u) {
                    p.trigger("ajaxComplete", [E, l]);
                    --h.active || h.event.trigger("ajaxStop")
                }
            }
            if (typeof e == "object") {
                t = e;
                e = undefined
            }
            t = t || {};
            var n, r, i, s, o, u, a, f, l = h.ajaxSetup({}, t),
                c = l.context || l,
                p = l.context && (c.nodeType || c.jquery) ? h(c) : h.event,
                d = h.Deferred(),
                v = h.Callbacks("once memory"),
                m = l.statusCode || {}, g = {}, y = {}, b = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (b === 2) {
                            if (!f) {
                                f = {};
                                while (t = An.exec(s)) f[t[1].toLowerCase()] = t[2]
                            }
                            t = f[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return b === 2 ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        if (!b) {
                            e = y[n] = y[n] || e;
                            g[e] = t
                        }
                        return this
                    },
                    overrideMimeType: function(e) {
                        b || (l.mimeType = e);
                        return this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        a && a.abort(t);
                        x(0, t);
                        return this
                    }
                };
            d.promise(E).complete = v.add;
            E.success = E.done;
            E.error = E.fail;
            l.url = ((e || l.url || Cn) + "").replace(kn, "").replace(_n, Nn[1] + "//");
            l.type = t.method || t.type || l.method || l.type;
            l.dataTypes = h.trim(l.dataType || "*").toLowerCase().match(O) || [""];
            if (l.crossDomain == null) {
                n = Dn.exec(l.url.toLowerCase());
                l.crossDomain = !(!n || n[1] === Nn[1] && n[2] === Nn[2] && (n[3] || (n[1] === "http:" ? "80" : "443")) === (Nn[3] || (Nn[1] === "http:" ? "80" : "443")))
            }
            l.data && l.processData && typeof l.data != "string" && (l.data = h.param(l.data, l.traditional));
            In(Pn, l, t, E);
            if (b === 2) return E;
            u = h.event && l.global;
            u && h.active++ === 0 && h.event.trigger("ajaxStart");
            l.type = l.type.toUpperCase();
            l.hasContent = !Mn.test(l.type);
            i = l.url;
            if (!l.hasContent) {
                if (l.data) {
                    i = l.url += (xn.test(i) ? "&" : "?") + l.data;
                    delete l.data
                }
                l.cache === !1 && (l.url = Ln.test(i) ? i.replace(Ln, "$1_=" + Sn++) : i + (xn.test(i) ? "&" : "?") + "_=" + Sn++)
            }
            if (l.ifModified) {
                h.lastModified[i] && E.setRequestHeader("If-Modified-Since", h.lastModified[i]);
                h.etag[i] && E.setRequestHeader("If-None-Match", h.etag[i])
            }(l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType);
            E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + Bn + "; q=0.01" : "") : l.accepts["*"]);
            for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
            if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && b !== 2) {
                w = "abort";
                for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) E[r](l[r]);
                a = In(Hn, l, t, E);
                if (!a) x(-1, "No Transport");
                else {
                    E.readyState = 1;
                    u && p.trigger("ajaxSend", [E, l]);
                    l.async && l.timeout > 0 && (o = setTimeout(function() {
                        E.abort("timeout")
                    }, l.timeout));
                    try {
                        b = 1;
                        a.send(g, x)
                    } catch (S) {
                        if (!(b < 2)) throw S;
                        x(-1, S)
                    }
                }
                return E
            }
            return E.abort()
        },
        getJSON: function(e, t, n) {
            return h.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return h.get(e, undefined, t, "script")
        }
    });
    h.each(["get", "post"], function(e, t) {
        h[t] = function(e, n, r, i) {
            if (h.isFunction(n)) {
                i = i || r;
                r = n;
                n = undefined
            }
            return h.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    });
    h._evalUrl = function(e) {
        return h.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    h.fn.extend({
        wrapAll: function(e) {
            if (h.isFunction(e)) return this.each(function(t) {
                h(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = h(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return h.isFunction(e) ? this.each(function(t) {
                h(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = h(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = h.isFunction(e);
            return this.each(function(n) {
                h(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    h.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !l.reliableHiddenOffsets() && (e.style && e.style.display || h.css(e, "display")) === "none"
    };
    h.expr.filters.visible = function(e) {
        return !h.expr.filters.hidden(e)
    };
    var zn = /%20/g,
        Wn = /\[\]$/,
        Xn = /\r?\n/g,
        Vn = /^(?:submit|button|image|reset|file)$/i,
        $n = /^(?:input|select|textarea|keygen)/i;
    h.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = h.isFunction(t) ? t() : t == null ? "" : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        t === undefined && (t = h.ajaxSettings && h.ajaxSettings.traditional);
        if (h.isArray(e) || e.jquery && !h.isPlainObject(e)) h.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Jn(n, e[n], t, i);
        return r.join("&").replace(zn, "+")
    };
    h.fn.extend({
        serialize: function() {
            return h.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = h.prop(this, "elements");
                return e ? h.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !h(this).is(":disabled") && $n.test(this.nodeName) && !Vn.test(e) && (this.checked || !J.test(e))
            }).map(function(e, t) {
                var n = h(this).val();
                return n == null ? null : h.isArray(n) ? h.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Xn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Xn, "\r\n")
                }
            }).get()
        }
    });
    h.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Yn() || Zn()
    } : Yn;
    var Kn = 0,
        Qn = {}, Gn = h.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Qn) Qn[e](undefined, !0)
    });
    l.cors = !! Gn && "withCredentials" in Gn;
    Gn = l.ajax = !! Gn;
    Gn && h.ajaxTransport(function(e) {
        if (!e.crossDomain || l.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, s = e.xhr(),
                        o = ++Kn;
                    s.open(e.type, e.url, e.async, e.username, e.password);
                    if (e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType);
                    !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) n[i] !== undefined && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null);
                    t = function(n, i) {
                        var u, a, f;
                        if (t && (i || s.readyState === 4)) {
                            delete Qn[o];
                            t = undefined;
                            s.onreadystatechange = h.noop;
                            if (i) s.readyState !== 4 && s.abort();
                            else {
                                f = {};
                                u = s.status;
                                typeof s.responseText == "string" && (f.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (l) {
                                    a = ""
                                }!u && e.isLocal && !e.crossDomain ? u = f.text ? 200 : 404 : u === 1223 && (u = 204)
                            }
                        }
                        f && r(u, a, f, s.getAllResponseHeaders())
                    };
                    e.async ? s.readyState === 4 ? setTimeout(t) : s.onreadystatechange = Qn[o] = t : t()
                },
                abort: function() {
                    t && t(undefined, !0)
                }
            }
        }
    });
    h.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                h.globalEval(e);
                return e
            }
        }
    });
    h.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1);
        if (e.crossDomain) {
            e.type = "GET";
            e.global = !1
        }
    });
    h.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = T.head || h("head")[0] || T.documentElement;
            return {
                send: function(r, i) {
                    t = T.createElement("script");
                    t.async = !0;
                    e.scriptCharset && (t.charset = e.scriptCharset);
                    t.src = e.url;
                    t.onload = t.onreadystatechange = function(e, n) {
                        if (n || !t.readyState || /loaded|complete/.test(t.readyState)) {
                            t.onload = t.onreadystatechange = null;
                            t.parentNode && t.parentNode.removeChild(t);
                            t = null;
                            n || i(200, "success")
                        }
                    };
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(undefined, !0)
                }
            }
        }
    });
    var er = [],
        tr = /(=)\?(?=&|$)|\?\?/;
    h.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = er.pop() || h.expando + "_" + Sn++;
            this[e] = !0;
            return e
        }
    });
    h.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, s, o, u = t.jsonp !== !1 && (tr.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tr.test(t.data) && "data");
        if (u || t.dataTypes[0] === "jsonp") {
            i = t.jsonpCallback = h.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
            u ? t[u] = t[u].replace(tr, "$1" + i) : t.jsonp !== !1 && (t.url += (xn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i);
            t.converters["script json"] = function() {
                o || h.error(i + " was not called");
                return o[0]
            };
            t.dataTypes[0] = "json";
            s = e[i];
            e[i] = function() {
                o = arguments
            };
            r.always(function() {
                e[i] = s;
                if (t[i]) {
                    t.jsonpCallback = n.jsonpCallback;
                    er.push(i)
                }
                o && h.isFunction(s) && s(o[0]);
                o = s = undefined
            });
            return "script"
        }
    });
    h.parseHTML = function(e, t, n) {
        if (!e || typeof e != "string") return null;
        if (typeof t == "boolean") {
            n = t;
            t = !1
        }
        t = t || T;
        var r = w.exec(e),
            i = !n && [];
        if (r) return [t.createElement(r[1])];
        r = h.buildFragment([e], t, i);
        i && i.length && h(i).remove();
        return h.merge([], r.childNodes)
    };
    var nr = h.fn.load;
    h.fn.load = function(e, t, n) {
        if (typeof e != "string" && nr) return nr.apply(this, arguments);
        var r, i, s, o = this,
            u = e.indexOf(" ");
        if (u >= 0) {
            r = h.trim(e.slice(u, e.length));
            e = e.slice(0, u)
        }
        if (h.isFunction(t)) {
            n = t;
            t = undefined
        } else t && typeof t == "object" && (s = "POST");
        o.length > 0 && h.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments;
            o.html(r ? h("<div>").append(h.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        });
        return this
    };
    h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        h.fn[t] = function(e) {
            return this.on(t, e)
        }
    });
    h.expr.filters.animated = function(e) {
        return h.grep(h.timers, function(t) {
            return e === t.elem
        }).length
    };
    var rr = e.document.documentElement;
    h.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = h.css(e, "position"),
                c = h(e),
                p = {};
            l === "static" && (e.style.position = "relative");
            u = c.offset();
            s = h.css(e, "top");
            a = h.css(e, "left");
            f = (l === "absolute" || l === "fixed") && h.inArray("auto", [s, a]) > -1;
            if (f) {
                r = c.position();
                o = r.top;
                i = r.left
            } else {
                o = parseFloat(s) || 0;
                i = parseFloat(a) || 0
            }
            h.isFunction(t) && (t = t.call(e, n, u));
            t.top != null && (p.top = t.top - u.top + o);
            t.left != null && (p.left = t.left - u.left + i);
            "using" in t ? t.using.call(e, p) : c.css(p)
        }
    };
    h.fn.extend({
        offset: function(e) {
            if (arguments.length) return e === undefined ? this : this.each(function(t) {
                h.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                }, i = this[0],
                s = i && i.ownerDocument;
            if (!s) return;
            t = s.documentElement;
            if (!h.contains(t, i)) return r;
            typeof i.getBoundingClientRect !== B && (r = i.getBoundingClientRect());
            n = ir(s);
            return {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }
        },
        position: function() {
            if (!this[0]) return;
            var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
            if (h.css(r, "position") === "fixed") t = r.getBoundingClientRect();
            else {
                e = this.offsetParent();
                t = this.offset();
                h.nodeName(e[0], "html") || (n = e.offset());
                n.top += h.css(e[0], "borderTopWidth", !0);
                n.left += h.css(e[0], "borderLeftWidth", !0)
            }
            return {
                top: t.top - n.top - h.css(r, "marginTop", !0),
                left: t.left - n.left - h.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || rr;
                while (e && !h.nodeName(e, "html") && h.css(e, "position") === "static") e = e.offsetParent;
                return e || rr
            })
        }
    });
    h.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        h.fn[e] = function(r) {
            return $(this, function(e, r, i) {
                var s = ir(e);
                if (i === undefined) return s ? t in s ? s[t] : s.document.documentElement[r] : e[r];
                s ? s.scrollTo(n ? h(s).scrollLeft() : i, n ? i : h(s).scrollTop()) : e[r] = i
            }, e, r, arguments.length, null)
        }
    });
    h.each(["top", "left"], function(e, t) {
        h.cssHooks[t] = jt(l.pixelPosition, function(e, n) {
            if (n) {
                n = Ht(e, t);
                return Dt.test(n) ? h(e).position()[t] + "px" : n
            }
        })
    });
    h.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        h.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            h.fn[r] = function(r, i) {
                var s = arguments.length && (n || typeof r != "boolean"),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return $(this, function(t, n, r) {
                    var i;
                    if (h.isWindow(t)) return t.document.documentElement["client" + e];
                    if (t.nodeType === 9) {
                        i = t.documentElement;
                        return Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])
                    }
                    return r === undefined ? h.css(t, n, o) : h.style(t, n, r, o)
                }, t, s ? r : undefined, s, null)
            }
        })
    });
    h.fn.size = function() {
        return this.length
    };
    h.fn.andSelf = h.fn.addBack;
    typeof define == "function" && define.amd && define("jquery", [], function() {
        return h
    });
    var sr = e.jQuery,
        or = e.$;
    h.noConflict = function(t) {
        e.$ === h && (e.$ = or);
        t && e.jQuery === h && (e.jQuery = sr);
        return h
    };
    typeof t === B && (e.jQuery = e.$ = h);
    return h
});
(function() {
    if (!jQuery.browser) {
        jQuery.browser = {};
        jQuery.browser.mozilla = !1;
        jQuery.browser.webkit = !1;
        jQuery.browser.opera = !1;
        jQuery.browser.msie = !1;
        var e = navigator.userAgent;
        jQuery.browser.name = navigator.appName;
        jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
        jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var t, n;
        if (-1 != (n = e.indexOf("Opera"))) {
            if (jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = e.substring(n + 6), -1 != (n = e.indexOf("Version"))) jQuery.browser.fullVersion = e.substring(n + 8)
        } else if (-1 != (n = e.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = e.substring(n + 5);
        else if (-1 != (n = e.indexOf("Chrome"))) jQuery.browser.webkit = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = e.substring(n + 7);
        else if (-1 != (n = e.indexOf("Safari"))) {
            if (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = e.substring(n + 7), -1 != (n = e.indexOf("Version"))) jQuery.browser.fullVersion = e.substring(n + 8)
        } else -1 != (n = e.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = e.substring(n + 8)) : (t = e.lastIndexOf(" ") + 1) < (n = e.lastIndexOf("/")) && (jQuery.browser.name = e.substring(t, n), jQuery.browser.fullVersion = e.substring(n + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (e = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, e)); - 1 != (e = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, e));
        jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
        isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
        jQuery.browser.version = jQuery.browser.majorVersion
    }
})(jQuery);
(function(e, t, n) {
    "$:nomunge";

    function f(e) {
        e = e || location.href;
        return "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var r = "hashchange",
        i = document,
        s, o = e.event.special,
        u = i.documentMode,
        a = "on" + r in t && (u === n || u > 7);
    e.fn[r] = function(e) {
        return e ? this.bind(r, e) : this.trigger(r)
    };
    e.fn[r].delay = 50;
    o[r] = e.extend(o[r], {
        setup: function() {
            if (a) return !1;
            e(s.start)
        },
        teardown: function() {
            if (a) return !1;
            e(s.stop)
        }
    });
    s = function() {
        function p() {
            var n = f(),
                i = h(u);
            if (n !== u) {
                c(u = n, i);
                e(t).trigger(r)
            } else i !== u && (location.href = location.href.replace(/#.*/, "") + i);
            o = setTimeout(p, e.fn[r].delay)
        }
        var s = {}, o, u = f(),
            l = function(e) {
                return e
            }, c = l,
            h = l;
        s.start = function() {
            o || p()
        };
        s.stop = function() {
            o && clearTimeout(o);
            o = n
        };
        e.browser.msie && !a && function() {
            var t, n;
            s.start = function() {
                if (!t) {
                    n = e.fn[r].src;
                    n = n && n + f();
                    t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        n || c(f());
                        p()
                    }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow;
                    i.onpropertychange = function() {
                        try {
                            event.propertyName === "title" && (t.document.title = i.title)
                        } catch (e) {}
                    }
                }
            };
            s.stop = l;
            h = function() {
                return f(t.location.href)
            };
            c = function(n, s) {
                var o = t.document,
                    u = e.fn[r].domain;
                if (n !== s) {
                    o.title = i.title;
                    o.open();
                    u && o.write('<script>document.domain="' + u + '"</script>');
                    o.close();
                    t.location.hash = n
                }
            }
        }();
        return s
    }()
})(jQuery, this);
(function(e) {
    function t(t, r) {
        if (e.fn.ThreeDots.c_settings.allow_dangle == 1) return !1;
        var i = e(t).children("." + e.fn.ThreeDots.c_settings.e_span_class).get(0),
            s = e(i).css("display"),
            o = n(t, r);
        e(i).css("display", "none");
        var u = n(t, r);
        e(i).css("display", s);
        return o > u ? !0 : !1
    }

    function n(t, n) {
        var r = typeof n;
        if (r == "object" || r == undefined) return e(t).height() / n.lh;
        if (r == "boolean") {
            var s = i(e(t));
            return {
                lh: s
            }
        }
    }

    function r(t) {
        var n, r = e.fn.ThreeDots.c_settings.valid_delimiters;
        t = jQuery.trim(t);
        var i = -1,
            s = null,
            o = null;
        jQuery.each(r, function(e, n) {
            if ((new String(n)).length != 1 || n == null) return !1;
            var r = t.lastIndexOf(n);
            if (r != -1 && r > i) {
                i = r;
                s = t.substring(i + 1);
                o = n
            }
        });
        return i > 0 ? {
            updated_string: jQuery.trim(t.substring(0, i)),
            word: s,
            del: o
        } : {
            updated_string: "",
            word: jQuery.trim(t),
            del: null
        }
    }

    function i(t) {
        e(t).append("<div id='temp_ellipsis_div' style='position:absolute; visibility:hidden'>H</div>");
        var n = e("#temp_ellipsis_div").height();
        e("#temp_ellipsis_div").remove();
        return n
    }

    function s(t, r, i) {
        var s = e(r).text(),
            o = s,
            u = e.fn.ThreeDots.c_settings.max_rows,
            f, l, c, h, p, d;
        if (n(t, i) <= u) return;
        d = 0;
        curr_length = o.length;
        curr_middle = Math.floor((curr_length - d) / 2);
        f = s.substring(d, d + curr_middle);
        l = s.substring(d + curr_middle);
        while (curr_middle != 0) {
            e(r).text(f);
            if (n(t, i) <= u) {
                p = Math.floor(l.length / 2);
                c = l.substring(0, p);
                d = f.length;
                o = f + c;
                curr_length = o.length;
                e(r).text(o)
            } else {
                o = f;
                curr_length = o.length
            }
            curr_middle = Math.floor((curr_length - d) / 2);
            f = s.substring(0, d + curr_middle);
            l = s.substring(d + curr_middle)
        }
    }
    e.fn.ThreeDots = function(t) {
        var n = this;
        if (typeof t == "object" || t == undefined) {
            e.fn.ThreeDots.the_selected = this;
            var n = e.fn.ThreeDots.update(t)
        }
        return n
    };
    e.fn.ThreeDots.update = function(i) {
        var o, u = null,
            f, l, h, p, v, m, g, y, w, E;
        if (typeof i == "object" || i == undefined) {
            e.fn.ThreeDots.c_settings = e.extend({}, e.fn.ThreeDots.settings, i);
            var S = e.fn.ThreeDots.c_settings.max_rows;
            if (S < 1) return e.fn.ThreeDots.the_selected;
            var x = !1;
            jQuery.each(e.fn.ThreeDots.c_settings.valid_delimiters, function(e, t) {
                (new String(t)).length == 1 && (x = !0)
            });
            if (x == 0) return e.fn.ThreeDots.the_selected;
            e.fn.ThreeDots.the_selected.each(function() {
                o = e(this);
                if (e(o).children("." + e.fn.ThreeDots.c_settings.text_span_class).length == 0) return !0;
                m = e(o).children("." + e.fn.ThreeDots.c_settings.text_span_class).get(0);
                var i = n(o, !0),
                    f = e(m).text();
                s(o, m, i);
                var l = e(m).text();
                if ((w = e(o).attr("threedots")) != undefined) {
                    e(m).text(w);
                    e(o).children("." + e.fn.ThreeDots.c_settings.e_span_class).remove()
                }
                y = e(m).text();
                y.length <= 0 && (y = "");
                e(o).attr("threedots", f);
                if (n(o, i) > S) {
                    curr_ellipsis = e(o).append('<span style="white-space:nowrap" class="' + e.fn.ThreeDots.c_settings.e_span_class + '">' + e.fn.ThreeDots.c_settings.ellipsis_string + "</span>");
                    while (n(o, i) > S) {
                        g = r(e(m).text());
                        e(m).text(g.updated_string);
                        u = g.word;
                        E = g.del;
                        if (E == null) break
                    }
                    if (u != null) {
                        var h = t(o, i);
                        if (n(o, i) <= S - 1 || h || !e.fn.ThreeDots.c_settings.whole_word) {
                            y = e(m).text();
                            g.del != null && e(m).text(y + E);
                            if (n(o, i) > S) e(m).text(y);
                            else {
                                e(m).text(e(m).text() + u);
                                if (n(o, i) > S + 1 || !e.fn.ThreeDots.c_settings.whole_word || l == u || h)
                                    while (n(o, i) > S) {
                                        if (!(e(m).text().length > 0)) break;
                                        e(m).text(e(m).text().substr(0, e(m).text().length - 1))
                                    }
                            }
                        }
                    }
                }
                if (f == e(e(o).children("." + e.fn.ThreeDots.c_settings.text_span_class).get(0)).text()) e(o).children("." + e.fn.ThreeDots.c_settings.e_span_class).remove();
                else if (e(o).children("." + e.fn.ThreeDots.c_settings.e_span_class).length > 0) {
                    e.fn.ThreeDots.c_settings.alt_text_t && e(o).children("." + e.fn.ThreeDots.c_settings.text_span_class).attr("title", f);
                    e.fn.ThreeDots.c_settings.alt_text_e && e(o).children("." + e.fn.ThreeDots.c_settings.e_span_class).attr("title", f)
                }
            })
        }
        return e.fn.ThreeDots.the_selected
    };
    e.fn.ThreeDots.settings = {
        valid_delimiters: [" ", ",", "."],
        ellipsis_string: "...",
        max_rows: 2,
        text_span_class: "ellipsis_text",
        e_span_class: "threedots_ellipsis",
        whole_word: !0,
        allow_dangle: !1,
        alt_text_e: !1,
        alt_text_t: !1
    }
})(jQuery);
(function(e, t, n) {
    function Y(n, r, i) {
        var o = t.createElement(n);
        r && (o.id = s + r);
        i && (o.style.cssText = i);
        return e(o)
    }

    function Z() {
        return n.innerHeight ? n.innerHeight : e(n).height()
    }

    function et(e) {
        var t = E.length,
            n = (q + e) % t;
        return n < 0 ? t + n : n
    }

    function tt(e, t) {
        return Math.round((/%/.test(e) ? (t === "x" ? S.width() : Z()) / 100 : 1) * parseInt(e, 10))
    }

    function nt(e, t) {
        return e.photo || e.photoRegex.test(t)
    }

    function rt(e, t) {
        return e.retinaUrl && n.devicePixelRatio > 1 ? t.replace(e.photoRegex, e.retinaSuffix) : t
    }

    function it(e) {
        if ("contains" in d[0] && !d[0].contains(e.target)) {
            e.stopPropagation();
            d.focus()
        }
    }

    function st() {
        var t, n = e.data(I, i);
        if (n == null) {
            P = e.extend({}, r);
            console && console.log && console.log("Error: cboxElement missing settings object")
        } else P = e.extend({}, n);
        for (t in P) e.isFunction(P[t]) && t.slice(0, 2) !== "on" && (P[t] = P[t].call(I));
        P.rel = P.rel || I.rel || e(I).data("rel") || "nofollow";
        P.href = P.href || e(I).attr("href");
        P.title = P.title || I.title;
        typeof P.href == "string" && (P.href = e.trim(P.href))
    }

    function ot(n, r) {
        e(t).trigger(n);
        D.triggerHandler(n);
        e.isFunction(r) && r.call(I)
    }

    function at(n) {
        if (!W) {
            I = n;
            st();
            E = e(I);
            q = 0;
            if (P.rel !== "nofollow") {
                E = e("." + o).filter(function() {
                    var t = e.data(this, i),
                        n;
                    t && (n = e(this).data("rel") || t.rel || this.rel);
                    return n === P.rel
                });
                q = E.index(I);
                if (q === -1) {
                    E = E.add(I);
                    q = E.length - 1
                }
            }
            p.css({
                opacity: parseFloat(P.opacity),
                cursor: P.overlayClose ? "pointer" : "auto",
                visibility: "visible"
            }).show();
            J && d.add(p).removeClass(J);
            P.className && d.add(p).addClass(P.className);
            J = P.className;
            P.closeButton ? M.html(P.close).appendTo(m) : M.appendTo("<div/>");
            if (!U) {
                U = z = !0;
                d.css({
                    visibility: "hidden",
                    display: "block"
                });
                x = Y($, "LoadedContent", "width:0; height:0; overflow:hidden");
                m.css({
                    width: "",
                    height: ""
                }).append(x);
                H = g.height() + w.height() + m.outerHeight(!0) - m.height();
                B = y.width() + b.width() + m.outerWidth(!0) - m.width();
                j = x.outerHeight(!0);
                F = x.outerWidth(!0);
                P.w = tt(P.initialWidth, "x");
                P.h = tt(P.initialHeight, "y");
                x.css({
                    width: "",
                    height: P.h
                });
                V.position();
                ot(u, P.onOpen);
                _.add(C).hide();
                d.focus();
                if (P.trapFocus && t.addEventListener) {
                    t.addEventListener("focus", it, !0);
                    D.one(c, function() {
                        t.removeEventListener("focus", it, !0)
                    })
                }
                P.returnFocus && D.one(c, function() {
                    e(I).focus()
                })
            }
            ct()
        }
    }

    function ft() {
        if (!d && t.body) {
            G = !1;
            S = e(n);
            d = Y($).attr({
                id: i,
                "class": e.support.opacity === !1 ? s + "IE" : "",
                role: "dialog",
                tabindex: "-1"
            }).hide();
            p = Y($, "Overlay").hide();
            N = e([Y($, "LoadingOverlay")[0], Y($, "LoadingGraphic")[0]]);
            v = Y($, "Wrapper");
            m = Y($, "Content").append(C = Y($, "Title"), k = Y($, "Current"), O = e('<button type="button"/>').attr({
                id: s + "Previous"
            }), A = e('<button type="button"/>').attr({
                id: s + "Next"
            }), L = Y("button", "Slideshow"), N);
            M = e('<button type="button"/>').attr({
                id: s + "Close"
            });
            v.append(Y($).append(Y($, "TopLeft"), g = Y($, "TopCenter"), Y($, "TopRight")), Y($, !1, "clear:left").append(y = Y($, "MiddleLeft"), m, b = Y($, "MiddleRight")), Y($, !1, "clear:left").append(Y($, "BottomLeft"), w = Y($, "BottomCenter"), Y($, "BottomRight"))).find("div div").css({
                "float": "left"
            });
            T = Y($, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;");
            _ = A.add(O).add(k).add(L);
            e(t.body).append(p, d.append(v, T))
        }
    }

    function lt() {
        function n(e) {
            if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                at(this)
            }
        }
        if (d) {
            if (!G) {
                G = !0;
                A.click(function() {
                    V.next()
                });
                O.click(function() {
                    V.prev()
                });
                M.click(function() {
                    V.close()
                });
                p.click(function() {
                    P.overlayClose && V.close()
                });
                e(t).bind("keydown." + s, function(e) {
                    var t = e.keyCode;
                    if (U && P.escKey && t === 27) {
                        e.preventDefault();
                        V.close()
                    }
                    if (U && P.arrowKey && E[1] && !e.altKey)
                        if (t === 37) {
                            e.preventDefault();
                            O.click()
                        } else
                    if (t === 39) {
                        e.preventDefault();
                        A.click()
                    }
                });
                e.isFunction(e.fn.on) ? e(t).on("click." + s, "." + o, n) : e("." + o).live("click." + s, n)
            }
            return !0
        }
        return !1
    }

    function ct() {
        var r, i, o = V.prep,
            u, f = ++K;
        z = !0;
        R = !1;
        I = E[q];
        st();
        ot(h);
        ot(a, P.onLoad);
        P.h = P.height ? tt(P.height, "y") - j - H : P.innerHeight && tt(P.innerHeight, "y");
        P.w = P.width ? tt(P.width, "x") - F - B : P.innerWidth && tt(P.innerWidth, "x");
        P.mw = P.w;
        P.mh = P.h;
        if (P.maxWidth) {
            P.mw = tt(P.maxWidth, "x") - F - B;
            P.mw = P.w && P.w < P.mw ? P.w : P.mw
        }
        if (P.maxHeight) {
            P.mh = tt(P.maxHeight, "y") - j - H;
            P.mh = P.h && P.h < P.mh ? P.h : P.mh
        }
        r = P.href;
        X = setTimeout(function() {
            N.show()
        }, 100);
        if (P.inline) {
            u = Y($).hide().insertBefore(e(r)[0]);
            D.one(h, function() {
                u.replaceWith(x.children())
            });
            o(e(r))
        } else if (P.iframe) o(" ");
        else if (P.html) o(P.html);
        else if (nt(P, r)) {
            r = rt(P, r);
            R = t.createElement("img");
            e(R).addClass(s + "Photo").bind("error", function() {
                P.title = !1;
                o(Y($, "Error").html(P.imgError))
            }).one("load", function() {
                var t;
                if (f !== K) return;
                e.each(["alt", "longdesc", "aria-describedby"], function(t, n) {
                    var r = e(I).attr(n) || e(I).attr("data-" + n);
                    r && R.setAttribute(n, r)
                });
                if (P.retinaImage && n.devicePixelRatio > 1) {
                    R.height = R.height / n.devicePixelRatio;
                    R.width = R.width / n.devicePixelRatio
                }
                if (P.scalePhotos) {
                    i = function() {
                        R.height -= R.height * t;
                        R.width -= R.width * t
                    };
                    if (P.mw && R.width > P.mw) {
                        t = (R.width - P.mw) / R.width;
                        i()
                    }
                    if (P.mh && R.height > P.mh) {
                        t = (R.height - P.mh) / R.height;
                        i()
                    }
                }
                P.h && (R.style.marginTop = Math.max(P.mh - R.height, 0) / 2 + "px");
                if (E[1] && (P.loop || E[q + 1])) {
                    R.style.cursor = "pointer";
                    R.onclick = function() {
                        V.next()
                    }
                }
                R.style.width = R.width + "px";
                R.style.height = R.height + "px";
                setTimeout(function() {
                    o(R)
                }, 1)
            });
            setTimeout(function() {
                R.src = r
            }, 1)
        } else r && T.load(r, P.data, function(t, n) {
            f === K && o(n === "error" ? Y($, "Error").html(P.xhrError) : e(this).contents())
        })
    }
    var r = {
        html: !1,
        photo: !1,
        iframe: !1,
        inline: !1,
        transition: "fade",
        speed: 300,
        fadeOut: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        href: !1,
        title: !1,
        rel: !1,
        opacity: .9,
        preloading: !0,
        className: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: undefined,
        closeButton: !0,
        fastIframe: !0,
        open: !1,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
        retinaImage: !1,
        retinaUrl: !1,
        retinaSuffix: "@2x.$1",
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        xhrError: "This content failed to load.",
        imgError: "This image failed to load.",
        returnFocus: !0,
        trapFocus: !0,
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1
    }, i = "colorbox",
        s = "cbox",
        o = s + "Element",
        u = s + "_open",
        a = s + "_load",
        f = s + "_complete",
        l = s + "_cleanup",
        c = s + "_closed",
        h = s + "_purge",
        p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D = e("<a/>"),
        P, H, B, j, F, I, q, R, U, z, W, X, V, $ = "div",
        J, K = 0,
        Q = {}, G, ut = function() {
            function i() {
                clearTimeout(r)
            }

            function o() {
                if (P.loop || E[q + 1]) {
                    i();
                    r = setTimeout(V.next, P.slideshowSpeed)
                }
            }

            function u() {
                L.html(P.slideshowStop).unbind(n).one(n, c);
                D.bind(f, o).bind(a, i);
                d.removeClass(t + "off").addClass(t + "on")
            }

            function c() {
                i();
                D.unbind(f, o).unbind(a, i);
                L.html(P.slideshowStart).unbind(n).one(n, function() {
                    V.next();
                    u()
                });
                d.removeClass(t + "on").addClass(t + "off")
            }

            function h() {
                e = !1;
                L.hide();
                i();
                D.unbind(f, o).unbind(a, i);
                d.removeClass(t + "off " + t + "on")
            }
            var e, t = s + "Slideshow_",
                n = "click." + s,
                r;
            return function() {
                if (e) {
                    if (!P.slideshow) {
                        D.unbind(l, h);
                        h()
                    }
                } else if (P.slideshow && E[1]) {
                    e = !0;
                    D.one(l, h);
                    P.slideshowAuto ? u() : c();
                    L.show()
                }
            }
        }();
    if (e.colorbox) return;
    e(ft);
    V = e.fn[i] = e[i] = function(t, n) {
        var s = this;
        t = t || {};
        ft();
        if (lt()) {
            if (e.isFunction(s)) {
                s = e("<a/>");
                t.open = !0
            } else if (!s[0]) return s;
            n && (t.onComplete = n);
            s.each(function() {
                e.data(this, i, e.extend({}, e.data(this, i) || r, t))
            }).addClass(o);
            (e.isFunction(t.open) && t.open.call(s) || t.open) && at(s[0])
        }
        return s
    };
    V.position = function(t, n) {
        function l() {
            g[0].style.width = w[0].style.width = m[0].style.width = parseInt(d[0].style.width, 10) - B + "px";
            m[0].style.height = y[0].style.height = b[0].style.height = parseInt(d[0].style.height, 10) - H + "px"
        }
        var r, i = 0,
            o = 0,
            u = d.offset(),
            a, f;
        S.unbind("resize." + s);
        d.css({
            top: -9e4,
            left: -9e4
        });
        a = S.scrollTop();
        f = S.scrollLeft();
        if (P.fixed) {
            u.top -= a;
            u.left -= f;
            d.css({
                position: "fixed"
            })
        } else {
            i = a;
            o = f;
            d.css({
                position: "absolute"
            })
        }
        P.right !== !1 ? o += Math.max(S.width() - P.w - F - B - tt(P.right, "x"), 0) : P.left !== !1 ? o += tt(P.left, "x") : o += Math.round(Math.max(S.width() - P.w - F - B, 0) / 2);
        P.bottom !== !1 ? i += Math.max(Z() - P.h - j - H - tt(P.bottom, "y"), 0) : P.top !== !1 ? i += tt(P.top, "y") : i += Math.round(Math.max(Z() - P.h - j - H, 0) / 2);
        d.css({
            top: u.top,
            left: u.left,
            visibility: "visible"
        });
        v[0].style.width = v[0].style.height = "9999px";
        r = {
            width: P.w + F + B,
            height: P.h + j + H,
            top: i,
            left: o
        };
        if (t) {
            var c = 0;
            e.each(r, function(e) {
                if (r[e] !== Q[e]) {
                    c = t;
                    return
                }
            });
            t = c
        }
        Q = r;
        t || d.css(r);
        d.dequeue().animate(r, {
            duration: t || 0,
            complete: function() {
                l();
                z = !1;
                v[0].style.width = P.w + F + B + "px";
                v[0].style.height = P.h + j + H + "px";
                P.reposition && setTimeout(function() {
                    S.bind("resize." + s, V.position)
                }, 1);
                n && n()
            },
            step: l
        })
    };
    V.resize = function(e) {
        var t;
        if (U) {
            e = e || {};
            e.width && (P.w = tt(e.width, "x") - F - B);
            e.innerWidth && (P.w = tt(e.innerWidth, "x"));
            x.css({
                width: P.w
            });
            e.height && (P.h = tt(e.height, "y") - j - H);
            e.innerHeight && (P.h = tt(e.innerHeight, "y"));
            if (!e.innerHeight && !e.height) {
                t = x.scrollTop();
                x.css({
                    height: "auto"
                });
                P.h = x.height()
            }
            x.css({
                height: P.h
            });
            t && x.scrollTop(t);
            V.position(P.transition === "none" ? 0 : P.speed)
        }
    };
    V.prep = function(n) {
        function u() {
            P.w = P.w || x.width();
            P.w = P.mw && P.mw < P.w ? P.mw : P.w;
            return P.w
        }

        function a() {
            P.h = P.h || x.height();
            P.h = P.mh && P.mh < P.h ? P.mh : P.h;
            return P.h
        }
        if (!U) return;
        var r, o = P.transition === "none" ? 0 : P.speed;
        x.empty().remove();
        x = Y($, "LoadedContent").append(n);
        x.hide().appendTo(T.show()).css({
            width: u(),
            overflow: P.scrolling ? "auto" : "hidden"
        }).css({
            minHeight: a()
        }).prependTo(m);
        T.hide();
        e(R).css({
            "float": "none"
        });
        r = function() {
            function c() {
                e.support.opacity === !1 && d[0].style.removeAttribute("filter")
            }
            var n = E.length,
                r, u = "frameBorder",
                a = "allowTransparency",
                l;
            if (!U) return;
            l = function() {
                clearTimeout(X);
                N.hide();
                ot(f, P.onComplete)
            };
            C.html(P.title).add(x).show();
            if (n > 1) {
                typeof P.current == "string" && k.html(P.current.replace("{current}", q + 1).replace("{total}", n)).show();
                A[P.loop || q < n - 1 ? "show" : "hide"]().html(P.next);
                O[P.loop || q ? "show" : "hide"]().html(P.previous);
                ut();
                P.preloading && e.each([et(-1), et(1)], function() {
                    var n, r, s = E[this],
                        o = e.data(s, i);
                    if (o && o.href) {
                        n = o.href;
                        e.isFunction(n) && (n = n.call(s))
                    } else n = e(s).attr("href"); if (n && nt(o, n)) {
                        n = rt(o, n);
                        r = t.createElement("img");
                        r.src = n
                    }
                })
            } else _.hide(); if (P.iframe) {
                r = Y("iframe")[0];
                u in r && (r[u] = 0);
                a in r && (r[a] = "true");
                P.scrolling || (r.scrolling = "no");
                e(r).attr({
                    src: P.href,
                    name: (new Date).getTime(),
                    "class": s + "Iframe",
                    allowFullScreen: !0,
                    webkitAllowFullScreen: !0,
                    mozallowfullscreen: !0
                }).one("load", l).appendTo(x);
                D.one(h, function() {
                    r.src = "//about:blank"
                });
                P.fastIframe && e(r).trigger("load")
            } else l();
            P.transition === "fade" ? d.fadeTo(o, 1, c) : c()
        };
        P.transition === "fade" ? d.fadeTo(o, 0, function() {
            V.position(0, r)
        }) : V.position(o, r)
    };
    V.next = function() {
        if (!z && E[1] && (P.loop || E[q + 1])) {
            q = et(1);
            at(E[q])
        }
    };
    V.prev = function() {
        if (!z && E[1] && (P.loop || q)) {
            q = et(-1);
            at(E[q])
        }
    };
    V.close = function() {
        if (U && !W) {
            W = !0;
            U = !1;
            ot(l, P.onCleanup);
            S.unbind("." + s);
            p.fadeTo(P.fadeOut || 0, 0);
            d.stop().fadeTo(P.fadeOut || 0, 0, function() {
                d.add(p).css({
                    opacity: 1,
                    cursor: "auto"
                }).hide();
                ot(h);
                x.empty().remove();
                setTimeout(function() {
                    W = !1;
                    ot(c, P.onClosed)
                }, 1)
            })
        }
    };
    V.remove = function() {
        if (!d) return;
        d.stop();
        e.colorbox.close();
        d.stop().remove();
        p.remove();
        W = !1;
        d = null;
        e("." + o).removeData(i).removeClass(o);
        e(t).unbind("click." + s)
    };
    V.element = function() {
        return e(I)
    };
    V.settings = r
})(jQuery, document, window);
(function(e, t, n, r) {
    function o(t, n) {
        this.elements = t;
        this.options = e.extend({}, s, n);
        this._defaults = s;
        this._name = i;
        this.active = !1;
        this.init()
    }
    var i = "equalHeight",
        s = {
            wait: !1,
            responsive: !0,
            adjustPadding: !1,
            responsiveMinWidth: -1,
            responsiveMaxWidth: -1
        };
    o.prototype = {
        init: function() {
            this.options.wait || this.start();
            this.options.responsive && e(t).on("resize", e.proxy(this.onWindowResize, this))
        },
        magic: function() {
            var n = 0;
            this.reset();
            if (this.options.responsive) {
                if (this.options.responsiveMinWidth > -1 && this.options.responsiveMinWidth > e(t).width()) return;
                if (this.options.responsiveMaxWidth > -1 && this.options.responsiveMaxWidth < e(t).width()) return
            }
            for (var r = 0; r < this.elements.length; r++) {
                var i = e(this.elements[r]).outerHeight(),
                    s = e(this.elements[r]).css("min-height");
                n = i > n ? i : n
            }
            if (this.options.adjustPadding)
                for (var r = 0; r < this.elements.length; r++) {
                    var o = e(this.elements[r]).outerHeight(),
                        i = e(this.elements[r]).height(),
                        u = e(this.elements[r]).css("line-height"),
                        a = 0;
                    u.indexOf("px") != -1 ? a = parseInt(u) : a = parseInt(e(this.elements[r]).css("font-size")) * u;
                    var f = i <= a ? i : a,
                        l = (n - f) * .5;
                    o == n && (l = (n - i) * .5);
                    e(this.elements[r]).css({
                        maxHeight: n,
                        paddingTop: l,
                        paddingBottom: l
                    })
                } else
                    for (var c = 0; c < this.elements.length; c++) {
                        var h = e(this.elements[c]);
                        h.css("display") === "table-cell" ? h.css("height", n) : h.css("min-height", n)
                    }
        },
        reset: function() {
            this.elements.css("max-height", "");
            this.elements.css("min-height", "");
            this.elements.css("height", "");
            if (this.options.adjustPadding) {
                this.elements.css("paddingTop", "");
                this.elements.css("paddingBottom", "")
            }
        },
        start: function() {
            this.active = !0;
            this.magic()
        },
        stop: function() {
            this.active = !1;
            this.reset()
        },
        onWindowResize: function() {
            this.active && this.magic()
        }
    };
    e.fn[i] = function(e) {
        return new o(this, e)
    }
})(jQuery, window, document);
! function(e, t, n, r) {
    var i = e(t);
    e.fn.lazyload = function(s) {
        function o() {
            var t = 0;
            f.each(function() {
                var n = e(this);
                if (!l.skip_invisible || n.is(":visible"))
                    if (!e.abovethetop(this, l) && !e.leftofbegin(this, l))
                        if (e.belowthefold(this, l) || e.rightoffold(this, l)) {
                            if (++t > l.failure_limit) return !1
                        } else n.trigger("appear"), t = 0
            })
        }
        var u, f = this,
            l = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: t,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return s && (r !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), r !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), e.extend(l, s)), u = l.container === r || l.container === t ? i : e(l.container), 0 === l.event.indexOf("scroll") && u.bind(l.event, function() {
            return o()
        }), this.each(function() {
            var t = this,
                n = e(t);
            t.loaded = !1, (n.attr("src") === r || n.attr("src") === !1) && n.is("img") && n.attr("src", l.placeholder), n.one("appear", function() {
                if (!this.loaded) {
                    if (l.appear) {
                        var r = f.length;
                        l.appear.call(t, r, l)
                    }
                    e("<img />").bind("load", function() {
                        var r = n.attr("data-" + l.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"), n[l.effect](l.effect_speed), t.loaded = !0;
                        var i = e.grep(f, function(e) {
                            return !e.loaded
                        });
                        if (f = e(i), l.load) {
                            var s = f.length;
                            l.load.call(t, s, l)
                        }
                    }).attr("src", n.attr("data-" + l.data_attribute))
                }
            }), 0 !== l.event.indexOf("scroll") && n.bind(l.event, function() {
                t.loaded || n.trigger("appear")
            })
        }), i.bind("resize", function() {
            o()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && f.each(function() {
                e(this).trigger("appear")
            })
        }), e(n).ready(function() {
            o()
        }), this
    }, e.belowthefold = function(n, s) {
        var o;
        return o = s.container === r || s.container === t ? (t.innerHeight ? t.innerHeight : i.height()) + i.scrollTop() : e(s.container).offset().top + e(s.container).height(), o <= e(n).offset().top - s.threshold
    }, e.rightoffold = function(n, s) {
        var o;
        return o = s.container === r || s.container === t ? i.width() + i.scrollLeft() : e(s.container).offset().left + e(s.container).width(), o <= e(n).offset().left - s.threshold
    }, e.abovethetop = function(n, s) {
        var o;
        return o = s.container === r || s.container === t ? i.scrollTop() : e(s.container).offset().top, o >= e(n).offset().top + s.threshold + e(n).height()
    }, e.leftofbegin = function(n, s) {
        var o;
        return o = s.container === r || s.container === t ? i.scrollLeft() : e(s.container).offset().left, o >= e(n).offset().left + s.threshold + e(n).width()
    }, e.inviewport = function(t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
        var r = [].slice,
            i = function(e, t, r) {
                n.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = i.prototype.render
            }, s = 1e-10,
            o = n._internals.isSelector,
            u = n._internals.isArray,
            a = i.prototype = n.to({}, .1, {}),
            f = [];
        i.version = "1.11.2", a.constructor = i, a.kill()._gc = !1, i.killTweensOf = i.killDelayedCallsTo = n.killTweensOf, i.getTweensOf = n.getTweensOf, i.ticker = n.ticker, a.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
        }, a.updateTo = function(e, t) {
            var r, i = this.ratio;
            t && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (r in e) this.vars[r] = e[r];
            if (this._initted)
                if (t) this._initted = !1;
                else
            if (this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var s = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
            } else if (this._time > 0) {
                this._initted = !1, this._init();
                for (var o, u = 1 / (1 - i), a = this._firstPT; a;) o = a.s + a.c, a.c *= u, a.s = o - a.c, a = a._next
            }
            return this
        }, a.render = function(e, t, n) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, i, o, u, a, l, c, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                d = this._time,
                v = this._totalTime,
                m = this._cycle,
                g = this._duration;
            if (e >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, i = "onComplete"), 0 === g && (h = this._rawPrevTime, (0 === e || 0 > h || h === s) && h !== e && (n = !0, h > s && (i = "onReverseComplete")), this._rawPrevTime = h = !t || e ? e : s)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === g && this._rawPrevTime > s) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === g && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = h = !t || e ? e : s)) : this._initted || (n = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (u = g + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (a = this._time / g, l = this._easeType, c = this._easePower, (1 === l || 3 === l && a >= .5) && (a = 1 - a), 3 === l && (a *= 2), 1 === c ? a *= a : 2 === c ? a *= a * a : 3 === c ? a *= a * a * a : 4 === c && (a *= a * a * a * a), this.ratio = 1 === l ? 1 - a : 2 === l ? a : .5 > this._time / g ? a / 2 : 1 - a / 2) : this.ratio = this._ease.getRatio(this._time / g)), d === this._time && !n && m === this._cycle) return v !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                this._time && !r ? this.ratio = this._ease.getRatio(this._time / g) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== d && e >= 0 && (this._active = !0), 0 === v && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
            this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), this._cycle !== m && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f)), i && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || f), 0 === g && this._rawPrevTime === s && h !== s && (this._rawPrevTime = 0)))
        }, i.to = function(e, t, n) {
            return new i(e, t, n)
        }, i.from = function(e, t, n) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new i(e, t, n)
        }, i.fromTo = function(e, t, n, r) {
            return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new i(e, t, r)
        }, i.staggerTo = i.allTo = function(e, t, s, a, l, c, h) {
            a = a || 0;
            var p, d, v, m, g = s.delay || 0,
                y = [],
                b = function() {
                    s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), l.apply(h || this, c || f)
                };
            for (u(e) || ("string" == typeof e && (e = n.selector(e) || e), o(e) && (e = r.call(e, 0))), p = e.length, v = 0; p > v; v++) {
                d = {};
                for (m in s) d[m] = s[m];
                d.delay = g, v === p - 1 && l && (d.onComplete = b), y[v] = new i(e[v], t, d), g += a
            }
            return y
        }, i.staggerFrom = i.allFrom = function(e, t, n, r, s, o, u) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, i.staggerTo(e, t, n, r, s, o, u)
        }, i.staggerFromTo = i.allFromTo = function(e, t, n, r, s, o, u, a) {
            return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, i.staggerTo(e, t, r, s, o, u, a)
        }, i.delayedCall = function(e, t, n, r, s) {
            return new i(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                onCompleteScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                onReverseCompleteScope: r,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }, i.set = function(e, t) {
            return new i(e, 0, t)
        }, i.isTweening = function(e) {
            return n.getTweensOf(e, !0).length > 0
        };
        var l = function(e, t) {
            for (var r = [], i = 0, s = e._first; s;) s instanceof n ? r[i++] = s : (t && (r[i++] = s), r = r.concat(l(s, t)), i = r.length), s = s._next;
            return r
        }, c = i.getAllTweens = function(t) {
                return l(e._rootTimeline, t).concat(l(e._rootFramesTimeline, t))
            };
        i.killAll = function(e, n, r, i) {
            null == n && (n = !0), null == r && (r = !0);
            var s, o, u, a = c(0 != i),
                f = a.length,
                l = n && r && i;
            for (u = 0; f > u; u++) o = a[u], (l || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && (e ? o.totalTime(o.totalDuration()) : o._enabled(!1, !1))
        }, i.killChildTweensOf = function(e, t) {
            if (null != e) {
                var s, a, f, l, c, h = n._tweenLookup;
                if ("string" == typeof e && (e = n.selector(e) || e), o(e) && (e = r(e, 0)), u(e))
                    for (l = e.length; --l > -1;) i.killChildTweensOf(e[l], t);
                else {
                    s = [];
                    for (f in h)
                        for (a = h[f].target.parentNode; a;) a === e && (s = s.concat(h[f].tweens)), a = a.parentNode;
                    for (c = s.length, l = 0; c > l; l++) t && s[l].totalTime(s[l].totalDuration()), s[l]._enabled(!1, !1)
                }
            }
        };
        var h = function(e, n, r, i) {
            n = n !== !1, r = r !== !1, i = i !== !1;
            for (var s, o, u = c(i), a = n && r && i, f = u.length; --f > -1;) o = u[f], (a || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && o.paused(e)
        };
        return i.pauseAll = function(e, t, n) {
            h(!0, e, t, n)
        }, i.resumeAll = function(e, t, n) {
            h(!1, e, t, n)
        }, i.globalTimeScale = function(t) {
            var r = e._rootTimeline,
                i = n.ticker.time;
            return arguments.length ? (t = t || s, r._startTime = i - (i - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, i = n.ticker.frame, r._startTime = i - (i - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
        }, a.progress = function(e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, a.totalProgress = function(e) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
        }, a.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, a.duration = function(t) {
            return arguments.length ? e.prototype.duration.call(this, t) : this._duration
        }, a.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, a.repeat = function(e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, a.repeatDelay = function(e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, a.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, i
    }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
        var r = function(e) {
            t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var n, r, i = this.vars;
            for (r in i) n = i[r], o(n) && -1 !== n.join("").indexOf("{self}") && (i[r] = this._swapSelfInParams(n));
            o(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
        }, i = 1e-10,
            s = n._internals.isSelector,
            o = n._internals.isArray,
            u = [],
            a = function(e) {
                var t, n = {};
                for (t in e) n[t] = e[t];
                return n
            }, f = function(e, t, n, r) {
                e._timeline.pause(e._startTime), t && t.apply(r || e._timeline, n || u)
            }, l = u.slice,
            c = r.prototype = new t;
        return r.version = "1.11.0", c.constructor = r, c.kill()._gc = !1, c.to = function(e, t, r, i) {
            return t ? this.add(new n(e, t, r), i) : this.set(e, r, i)
        }, c.from = function(e, t, r, i) {
            return this.add(n.from(e, t, r), i)
        }, c.fromTo = function(e, t, r, i, s) {
            return t ? this.add(n.fromTo(e, t, r, i), s) : this.set(e, i, s)
        }, c.staggerTo = function(e, t, i, o, u, f, c, p) {
            var d, v = new r({
                    onComplete: f,
                    onCompleteParams: c,
                    onCompleteScope: p
                });
            for ("string" == typeof e && (e = n.selector(e) || e), s(e) && (e = l.call(e, 0)), o = o || 0, d = 0; e.length > d; d++) i.startAt && (i.startAt = a(i.startAt)), v.to(e[d], t, a(i), d * o);
            return this.add(v, u)
        }, c.staggerFrom = function(e, t, n, r, i, s, o, u) {
            return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(e, t, n, r, i, s, o, u)
        }, c.staggerFromTo = function(e, t, n, r, i, s, o, u, a) {
            return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, this.staggerTo(e, t, r, i, s, o, u, a)
        }, c.call = function(e, t, r, i) {
            return this.add(n.delayedCall(0, e, t, r), i)
        }, c.set = function(e, t, r) {
            return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new n(e, 0, t), r)
        }, r.exportRoot = function(e, t) {
            e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
            var i, s, o = new r(e),
                u = o._timeline;
            for (null == t && (t = !0), u._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = u._time, i = u._first; i;) s = i._next, t && i instanceof n && i.target === i.vars.onComplete || o.add(i, i._startTime - i._delay), i = s;
            return u.add(o, 0), o
        }, c.add = function(i, s, u, a) {
            var f, l, c, h, p, d;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, i)), !(i instanceof e)) {
                if (i instanceof Array || i && i.push && o(i)) {
                    for (u = u || "normal", a = a || 0, f = s, l = i.length, c = 0; l > c; c++) o(h = i[c]) && (h = new r({
                        tweens: h
                    })), this.add(h, f), "string" != typeof h && "function" != typeof h && ("sequence" === u ? f = h._startTime + h.totalDuration() / h._timeScale : "start" === u && (h._startTime -= h.delay())), f += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof i) return this.addLabel(i, s);
                if ("function" != typeof i) throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                i = n.delayedCall(0, i)
            }
            if (t.prototype.add.call(this, i, s), this._gc && !this._paused && this._duration < this.duration())
                for (p = this, d = p.rawTime() > i._startTime; p._gc && p._timeline;) p._timeline.smoothChildTiming && d ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline;
            return this
        }, c.remove = function(t) {
            if (t instanceof e) return this._remove(t, !1);
            if (t instanceof Array || t && t.push && o(t)) {
                for (var n = t.length; --n > -1;) this.remove(t[n]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, c._remove = function(e, n) {
            t.prototype._remove.call(this, e, n);
            var r = this._last;
            return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
        }, c.append = function(e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }, c.insert = c.insertMultiple = function(e, t, n, r) {
            return this.add(e, t || 0, n, r)
        }, c.appendMultiple = function(e, t, n, r) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, r)
        }, c.addLabel = function(e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t), this
        }, c.addPause = function(e, t, n, r) {
            return this.call(f, ["{self}", t, n, r], this, e)
        }, c.removeLabel = function(e) {
            return delete this._labels[e], this
        }, c.getLabelTime = function(e) {
            return null != this._labels[e] ? this._labels[e] : -1
        }, c._parseTimeOrLabel = function(t, n, r, i) {
            var s;
            if (i instanceof e && i.timeline === this) this.remove(i);
            else if (i && (i instanceof Array || i.push && o(i)))
                for (s = i.length; --s > -1;) i[s] instanceof e && i[s].timeline === this && this.remove(i[s]);
            if ("string" == typeof n) return this._parseTimeOrLabel(n, r && "number" == typeof t && null == this._labels[n] ? t - this.duration() : 0, r);
            if (n = n || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
            else {
                if (s = t.indexOf("="), -1 === s) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + n : n : this._labels[t] + n;
                n = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, r) : this.duration()
            }
            return Number(t) + n
        }, c.seek = function(e, t) {
            return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
        }, c.stop = function() {
            return this.paused(!0)
        }, c.gotoAndPlay = function(e, t) {
            return this.play(e, t)
        }, c.gotoAndStop = function(e, t) {
            return this.pause(e, t)
        }, c.render = function(e, t, n) {
            this._gc && this._enabled(!0, !1);
            var r, s, o, a, f, l = this._dirty ? this.totalDuration() : this._totalDuration,
                c = this._time,
                h = this._startTime,
                p = this._timeScale,
                d = this._paused;
            if (e >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === i) && this._rawPrevTime !== e && this._first && (f = !0, this._rawPrevTime > i && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e ? e : i, e = l + 1e-6) : 1e-7 > e ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && (this._rawPrevTime > i || 0 > e && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (f = !0), this._rawPrevTime = e) : (this._rawPrevTime = this._duration || !t || e ? e : i, e = 0, this._initted || (f = !0))) : this._totalTime = this._time = this._rawPrevTime = e, this._time !== c && this._first || n || f) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && e > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= c)
                    for (r = this._first; r && (o = r._next, !this._paused || d);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
                else
                    for (r = this._last; r && (o = r._prev, !this._paused || d);)(r._active || c >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
                this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), a && (this._gc || (h === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || u)))
            }
        }, c._hasPausedChild = function() {
            for (var e = this._first; e;) {
                if (e._paused || e instanceof r && e._hasPausedChild()) return !0;
                e = e._next
            }
            return !1
        }, c.getChildren = function(e, t, r, i) {
            i = i || -9999999999;
            for (var s = [], o = this._first, u = 0; o;) i > o._startTime || (o instanceof n ? t !== !1 && (s[u++] = o) : (r !== !1 && (s[u++] = o), e !== !1 && (s = s.concat(o.getChildren(!0, t, r)), u = s.length))), o = o._next;
            return s
        }, c.getTweensOf = function(e, t) {
            for (var r = n.getTweensOf(e), i = r.length, s = [], o = 0; --i > -1;)(r[i].timeline === this || t && this._contains(r[i])) && (s[o++] = r[i]);
            return s
        }, c._contains = function(e) {
            for (var t = e.timeline; t;) {
                if (t === this) return !0;
                t = t.timeline
            }
            return !1
        }, c.shiftChildren = function(e, t, n) {
            n = n || 0;
            for (var r, i = this._first, s = this._labels; i;) i._startTime >= n && (i._startTime += e), i = i._next;
            if (t)
                for (r in s) s[r] >= n && (s[r] += e);
            return this._uncache(!0)
        }, c._kill = function(e, t) {
            if (!e && !t) return this._enabled(!1, !1);
            for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = n.length, i = !1; --r > -1;) n[r]._kill(e, t) && (i = !0);
            return i
        }, c.clear = function(e) {
            var t = this.getChildren(!1, !0, !0),
                n = t.length;
            for (this._time = this._totalTime = 0; --n > -1;) t[n]._enabled(!1, !1);
            return e !== !1 && (this._labels = {}), this._uncache(!0)
        }, c.invalidate = function() {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return this
        }, c._enabled = function(e, n) {
            if (e === this._gc)
                for (var r = this._first; r;) r._enabled(e, !0), r = r._next;
            return t.prototype._enabled.call(this, e, n)
        }, c.duration = function(e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
        }, c.totalDuration = function(e) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t, n, r = 0, i = this._last, s = 999999999999; i;) t = i._prev, i._dirty && i.totalDuration(), i._startTime > s && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : s = i._startTime, 0 > i._startTime && !i._paused && (r -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), s = 0), n = i._startTime + i._totalDuration / i._timeScale, n > r && (r = n), i = t;
                    this._duration = this._totalDuration = r, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
        }, c.usesFrames = function() {
            for (var t = this._timeline; t._timeline;) t = t._timeline;
            return t === e._rootFramesTimeline
        }, c.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, r
    }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, n) {
        var r = function(t) {
            e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, i = 1e-10,
            s = [],
            o = new n(null, null, 1, 0),
            u = r.prototype = new e;
        return u.constructor = r, u.kill()._gc = !1, r.version = "1.11.0", u.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, u.addCallback = function(e, n, r, i) {
            return this.add(t.delayedCall(0, e, r, i), n)
        }, u.removeCallback = function(e, t) {
            if (e)
                if (null == t) this._kill(null, e);
                else
                    for (var n = this.getTweensOf(e, !1), r = n.length, i = this._parseTimeOrLabel(t); --r > -1;) n[r]._startTime === i && n[r]._enabled(!1, !1);
            return this
        }, u.tweenTo = function(e, n) {
            n = n || {};
            var r, i, u = {
                    ease: o,
                    overwrite: 2,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                };
            for (r in n) u[r] = n[r];
            return u.time = this._parseTimeOrLabel(e), i = new t(this, Math.abs(Number(u.time) - this._time) / this._timeScale || .001, u), u.onStart = function() {
                i.target.paused(!0), i.vars.time !== i.target.time() && i.duration(Math.abs(i.vars.time - i.target.time()) / i.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || i, n.onStartParams || s)
            }, i
        }, u.tweenFromTo = function(e, t, n) {
            n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                onCompleteScope: this
            }, n.immediateRender = n.immediateRender !== !1;
            var r = this.tweenTo(t, n);
            return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
        }, u.render = function(e, t, n) {
            this._gc && this._enabled(!0, !1);
            var r, o, u, a, f, l, c = this._dirty ? this.totalDuration() : this._totalDuration,
                h = this._duration,
                p = this._time,
                d = this._totalTime,
                v = this._startTime,
                m = this._timeScale,
                g = this._rawPrevTime,
                y = this._paused,
                b = this._cycle;
            if (e >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", 0 === this._duration && (0 === e || 0 > g || g === i) && g !== e && this._first && (f = !0, g > i && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e ? e : i, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = h, e = h + 1e-6)) : 1e-7 > e ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === h && (g > i || 0 > e && g >= 0) && !this._locked) && (a = "onReverseComplete", o = this._reversed), 0 > e ? (this._active = !1, 0 === h && g >= 0 && this._first && (f = !0), this._rawPrevTime = e) : (this._rawPrevTime = h || !t || e ? e : i, e = 0, this._initted || (f = !0))) : (0 === h && 0 > g && (f = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (l = h + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = h - this._time), this._time > h ? (this._time = h, e = h + 1e-6) : 0 > this._time ? this._time = e = 0 : e = this._time))), this._cycle !== b && !this._locked) {
                var w = this._yoyo && 0 !== (1 & b),
                    E = w === (this._yoyo && 0 !== (1 & this._cycle)),
                    S = this._totalTime,
                    x = this._cycle,
                    T = this._rawPrevTime,
                    N = this._time;
                if (this._totalTime = b * h, b > this._cycle ? w = !w : this._totalTime += h, this._time = p, this._rawPrevTime = 0 === h ? g - 1e-5 : g, this._cycle = b, this._locked = !0, p = w ? 0 : h, this.render(p, t, 0 === h), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), E && (p = w ? h + 1e-6 : -0.000001, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;
                this._time = N, this._totalTime = S, this._cycle = x, this._rawPrevTime = T
            }
            if (!(this._time !== p && this._first || n || f)) return d !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), void 0;
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && e > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= p)
                for (r = this._first; r && (u = r._next, !this._paused || y);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = u;
            else
                for (r = this._last; r && (u = r._prev, !this._paused || y);)(r._active || p >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = u;
            this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), a && (this._locked || this._gc || (v === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || s)))
        }, u.getActive = function(e, t, n) {
            null == e && (e = !0), null == t && (t = !0), null == n && (n = !1);
            var r, i, s = [],
                o = this.getChildren(e, t, n),
                u = 0,
                a = o.length;
            for (r = 0; a > r; r++) i = o[r], i.isActive() && (s[u++] = i);
            return s
        }, u.getLabelAfter = function(e) {
            e || 0 !== e && (e = this._time);
            var t, n = this.getLabelsArray(),
                r = n.length;
            for (t = 0; r > t; t++)
                if (n[t].time > e) return n[t].name;
            return null
        }, u.getLabelBefore = function(e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), n = t.length; --n > -1;)
                if (e > t[n].time) return t[n].name;
            return null
        }, u.getLabelsArray = function() {
            var e, t = [],
                n = 0;
            for (e in this._labels) t[n++] = {
                time: this._labels[e],
                name: e
            };
            return t.sort(function(e, t) {
                return e.time - t.time
            }), t
        }, u.progress = function(e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, u.totalProgress = function(e) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
        }, u.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, u.repeat = function(e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function(e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, u.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }, r
    }, !0),
    function() {
        var e = 180 / Math.PI,
            t = [],
            n = [],
            r = [],
            i = {}, s = function(e, t, n, r) {
                this.a = e, this.b = t, this.c = n, this.d = r, this.da = r - e, this.ca = n - e, this.ba = t - e
            }, o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            u = function(e, t, n, r) {
                var i = {
                    a: e
                }, s = {}, o = {}, u = {
                        c: r
                    }, a = (e + t) / 2,
                    f = (t + n) / 2,
                    l = (n + r) / 2,
                    c = (a + f) / 2,
                    h = (f + l) / 2,
                    p = (h - c) / 8;
                return i.b = a + (e - a) / 4, s.b = c + p, i.c = s.a = (i.b + s.b) / 2, s.c = o.a = (c + h) / 2, o.b = h - p, u.b = l + (r - l) / 4, o.c = u.a = (o.b + u.b) / 2, [i, s, o, u]
            }, a = function(e, i, s, o, a) {
                var f, l, c, h, p, d, v, m, g, y, b, w, E, S = e.length - 1,
                    x = 0,
                    T = e[0].a;
                for (f = 0; S > f; f++) p = e[x], l = p.a, c = p.d, h = e[x + 1].d, a ? (b = t[f], w = n[f], E = .25 * (w + b) * i / (o ? .5 : r[f] || .5), d = c - (c - l) * (o ? .5 * i : 0 !== b ? E / b : 0), v = c + (h - c) * (o ? .5 * i : 0 !== w ? E / w : 0), m = c - (d + ((v - d) * (3 * b / (b + w) + .5) / 4 || 0))) : (d = c - .5 * (c - l) * i, v = c + .5 * (h - c) * i, m = c - (d + v) / 2), d += m, v += m, p.c = g = d, p.b = 0 !== f ? T : T = p.a + .6 * (p.c - p.a), p.da = c - l, p.ca = g - l, p.ba = T - l, s ? (y = u(l, T, g, c), e.splice(x, 1, y[0], y[1], y[2], y[3]), x += 4) : x++, T = v;
                p = e[x], p.b = T, p.c = T + .4 * (p.d - T), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = T - p.a, s && (y = u(p.a, T, p.c, p.d), e.splice(x, 1, y[0], y[1], y[2], y[3]))
            }, f = function(e, r, i, o) {
                var u, a, f, l, c, h, p = [];
                if (o)
                    for (e = [o].concat(e), a = e.length; --a > -1;) "string" == typeof(h = e[a][r]) && "=" === h.charAt(1) && (e[a][r] = o[r] + Number(h.charAt(0) + h.substr(2)));
                if (u = e.length - 2, 0 > u) return p[0] = new s(e[0][r], 0, 0, e[-1 > u ? 0 : 1][r]), p;
                for (a = 0; u > a; a++) f = e[a][r], l = e[a + 1][r], p[a] = new s(f, 0, 0, l), i && (c = e[a + 2][r], t[a] = (t[a] || 0) + (l - f) * (l - f), n[a] = (n[a] || 0) + (c - l) * (c - l));
                return p[a] = new s(e[a][r], 0, 0, e[a + 1][r]), p
            }, l = function(e, s, u, l, c, h) {
                var p, d, v, m, g, y, b, w, E = {}, S = [],
                    x = h || e[0];
                c = "string" == typeof c ? "," + c + "," : o, null == s && (s = 1);
                for (d in e[0]) S.push(d);
                if (e.length > 1) {
                    for (w = e[e.length - 1], b = !0, p = S.length; --p > -1;)
                        if (d = S[p], Math.abs(x[d] - w[d]) > .05) {
                            b = !1;
                            break
                        }
                    b && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
                }
                for (t.length = n.length = r.length = 0, p = S.length; --p > -1;) d = S[p], i[d] = -1 !== c.indexOf("," + d + ","), E[d] = f(e, d, i[d], h);
                for (p = t.length; --p > -1;) t[p] = Math.sqrt(t[p]), n[p] = Math.sqrt(n[p]);
                if (!l) {
                    for (p = S.length; --p > -1;)
                        if (i[d])
                            for (v = E[S[p]], y = v.length - 1, m = 0; y > m; m++) g = v[m + 1].da / n[m] + v[m].da / t[m], r[m] = (r[m] || 0) + g * g;
                    for (p = r.length; --p > -1;) r[p] = Math.sqrt(r[p])
                }
                for (p = S.length, m = u ? 4 : 1; --p > -1;) d = S[p], v = E[d], a(v, s, u, l, i[d]), b && (v.splice(0, m), v.splice(v.length - m, m));
                return E
            }, c = function(e, t, n) {
                t = t || "soft";
                var r, i, o, u, a, f, l, c, h, p, d, v = {}, m = "cubic" === t ? 3 : 2,
                    g = "soft" === t,
                    y = [];
                if (g && n && (e = [n].concat(e)), null == e || m + 1 > e.length) throw "invalid Bezier data";
                for (h in e[0]) y.push(h);
                for (f = y.length; --f > -1;) {
                    for (h = y[f], v[h] = a = [], p = 0, c = e.length, l = 0; c > l; l++) r = null == n ? e[l][h] : "string" == typeof(d = e[l][h]) && "=" === d.charAt(1) ? n[h] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && l > 1 && c - 1 > l && (a[p++] = (r + a[p - 2]) / 2), a[p++] = r;
                    for (c = p - m + 1, p = 0, l = 0; c > l; l += m) r = a[l], i = a[l + 1], o = a[l + 2], u = 2 === m ? 0 : a[l + 3], a[p++] = d = 3 === m ? new s(r, i, o, u) : new s(r, (2 * i + r) / 3, (2 * i + o) / 3, o);
                    a.length = p
                }
                return v
            }, h = function(e, t, n) {
                for (var r, i, s, o, u, a, f, l, c, h, p, d = 1 / n, v = e.length; --v > -1;)
                    for (h = e[v], s = h.a, o = h.d - s, u = h.c - s, a = h.b - s, r = i = 0, l = 1; n >= l; l++) f = d * l, c = 1 - f, r = i - (i = (f * f * o + 3 * c * (f * u + c * a)) * f), p = v * n + l - 1, t[p] = (t[p] || 0) + r * r
            }, p = function(e, t) {
                t = t >> 0 || 6;
                var n, r, i, s, o = [],
                    u = [],
                    a = 0,
                    f = 0,
                    l = t - 1,
                    c = [],
                    p = [];
                for (n in e) h(e[n], o, t);
                for (i = o.length, r = 0; i > r; r++) a += Math.sqrt(o[r]), s = r % t, p[s] = a, s === l && (f += a, s = r / t >> 0, c[s] = p, u[s] = f, a = 0, p = []);
                return {
                    length: f,
                    lengths: u,
                    segments: c
                }
            }, d = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                API: 2,
                global: !0,
                init: function(e, t, n) {
                    this._target = e, t instanceof Array && (t = {
                        values: t
                    }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                    var r, i, s, o, u, a = t.values || [],
                        f = {}, h = a[0],
                        d = t.autoRotate || n.vars.orientToBezier;
                    this._autoRotate = d ? d instanceof Array ? d : [
                        ["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]
                    ] : null;
                    for (r in h) this._props.push(r);
                    for (s = this._props.length; --s > -1;) r = this._props[s], this._overwriteProps.push(r), i = this._func[r] = "function" == typeof e[r], f[r] = i ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), u || f[r] !== a[0][r] && (u = f);
                    if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? l(a, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, u) : c(a, t.type, f), this._segCount = this._beziers[r].length, this._timeRes) {
                        var v = p(this._beziers, this._timeRes);
                        this._length = v.length, this._lengths = v.lengths, this._segments = v.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (d = this._autoRotate)
                        for (d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1;)
                            for (o = 0; 3 > o; o++) r = d[s][o], this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                    return !0
                },
                set: function(t) {
                    var n, r, i, s, o, u, a, f, l, c, h = this._segCount,
                        p = this._func,
                        d = this._target;
                    if (this._timeRes) {
                        if (l = this._lengths, c = this._curSeg, t *= this._length, i = this._li, t > this._l2 && h - 1 > i) {
                            for (f = h - 1; f > i && t >= (this._l2 = l[++i]););
                            this._l1 = l[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
                        } else if (this._l1 > t && i > 0) {
                            for (; i > 0 && (this._l1 = l[--i]) >= t;);
                            0 === i && this._l1 > t ? this._l1 = 0 : i++, this._l2 = l[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                        }
                        if (n = i, t -= this._l1, i = this._si, t > this._s2 && c.length - 1 > i) {
                            for (f = c.length - 1; f > i && t >= (this._s2 = c[++i]););
                            this._s1 = c[i - 1], this._si = i
                        } else if (this._s1 > t && i > 0) {
                            for (; i > 0 && (this._s1 = c[--i]) >= t;);
                            0 === i && this._s1 > t ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
                        }
                        u = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else n = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0, u = (t - n * (1 / h)) * h;
                    for (r = 1 - u, i = this._props.length; --i > -1;) s = this._props[i], o = this._beziers[s][n], a = (u * u * o.da + 3 * r * (u * o.ca + r * o.ba)) * u + o.a, this._round[s] && (a = a + (a > 0 ? .5 : -0.5) >> 0), p[s] ? d[s](a) : d[s] = a;
                    if (this._autoRotate) {
                        var v, m, g, y, b, w, E, S = this._autoRotate;
                        for (i = S.length; --i > -1;) s = S[i][2], w = S[i][3] || 0, E = S[i][4] === !0 ? 1 : e, o = this._beziers[S[i][0]], v = this._beziers[S[i][1]], o && v && (o = o[n], v = v[n], m = o.a + (o.b - o.a) * u, y = o.b + (o.c - o.b) * u, m += (y - m) * u, y += (o.c + (o.d - o.c) * u - y) * u, g = v.a + (v.b - v.a) * u, b = v.b + (v.c - v.b) * u, g += (b - g) * u, b += (v.c + (v.d - v.c) * u - b) * u, a = Math.atan2(b - g, y - m) * E + w, p[s] ? d[s](a) : d[s] = a)
                    }
                }
            }),
            v = d.prototype;
        d.bezierThrough = l, d.cubicToQuadratic = u, d._autoCSS = !0, d.quadraticToCubic = function(e, t, n) {
            return new s(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
        }, d._cssRegister = function() {
            var e = window._gsDefine.globals.CSSPlugin;
            if (e) {
                var t = e._internals,
                    n = t._parseToProxy,
                    r = t._setPluginRatio,
                    i = t.CSSPropTween;
                t._registerComplexSpecialProp("bezier", {
                    parser: function(e, t, s, o, u, a) {
                        t instanceof Array && (t = {
                            values: t
                        }), a = new d;
                        var f, l, c, h = t.values,
                            p = h.length - 1,
                            v = [],
                            m = {};
                        if (0 > p) return u;
                        for (f = 0; p >= f; f++) c = n(e, h[f], o, u, a, p !== f), v[f] = c.end;
                        for (l in t) m[l] = t[l];
                        return m.values = v, u = new i(e, "bezier", 0, 0, c.pt, 2), u.data = c, u.plugin = a, u.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (f = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [
                            ["left", "top", "rotation", f, !1]
                        ] : null != c.end.x ? [
                            ["x", "y", "rotation", f, !1]
                        ] : !1), m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), a._onInitTween(c.proxy, m, o._tween), u
                    }
                })
            }
        }, v._roundProps = function(e, t) {
            for (var n = this._overwriteProps, r = n.length; --r > -1;)(e[n[r]] || e.bezier || e.bezierThrough) && (this._round[n[r]] = t)
        }, v._kill = function(e) {
            var t, n, r = this._props;
            for (t in this._beziers)
                if (t in e)
                    for (delete this._beziers[t], delete this._func[t], n = r.length; --n > -1;) r[n] === t && r.splice(n, 1);
            return this._super._kill.call(this, e)
        }
    }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
        var n, r, i, s, o = function() {
                e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
            }, u = {}, a = o.prototype = new e("css");
        a.constructor = o, o.version = "1.11.2", o.API = 2, o.defaultTransformPerspective = 0, a = "px", o.suffixMap = {
            top: a,
            right: a,
            bottom: a,
            left: a,
            width: a,
            height: a,
            fontSize: a,
            padding: a,
            margin: a,
            perspective: a
        };
        var f, l, c, h, p, d, v = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            y = /[^\d\-\.]/g,
            b = /(?:\d|\-|\+|=|#|\.)*/g,
            w = /opacity *= *([^)]*)/,
            E = /opacity:([^;]*)/,
            S = /alpha\(opacity *=.+?\)/i,
            x = /^(rgb|hsl)/,
            T = /([A-Z])/g,
            N = /-([a-z])/gi,
            C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            k = function(e, t) {
                return t.toUpperCase()
            }, L = /(?:Left|Right|Width)/i,
            A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            M = /,(?=[^\)]*(?:\(|$))/gi,
            _ = Math.PI / 180,
            D = 180 / Math.PI,
            P = {}, H = document,
            B = H.createElement("div"),
            j = H.createElement("img"),
            F = o._internals = {
                _specialProps: u
            }, I = navigator.userAgent,
            q = function() {
                var e, t = I.indexOf("Android"),
                    n = H.createElement("div");
                return c = -1 !== I.indexOf("Safari") && -1 === I.indexOf("Chrome") && (-1 === t || Number(I.substr(t + 8, 1)) > 3), p = c && 6 > Number(I.substr(I.indexOf("Version/") + 8, 1)), h = -1 !== I.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I) && (d = parseFloat(RegExp.$1)), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", e = n.getElementsByTagName("a")[0], e ? /^0.55/.test(e.style.opacity) : !1
            }(),
            R = function(e) {
                return w.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, U = function(e) {
                window.console && console.log(e)
            }, z = "",
            W = "",
            X = function(e, t) {
                t = t || B;
                var n, r, i = t.style;
                if (void 0 !== i[e]) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + e];);
                return r >= 0 ? (W = 3 === r ? "ms" : n[r], z = "-" + W.toLowerCase() + "-", W + e) : null
            }, V = H.defaultView ? H.defaultView.getComputedStyle : function() {}, $ = o.getStyle = function(e, t, n, r, i) {
                var s;
                return q || "opacity" !== t ? (!r && e.style[t] ? s = e.style[t] : (n = n || V(e, null)) ? (e = n.getPropertyValue(t.replace(T, "-$1").toLowerCase()), s = e || n.length ? e : n[t]) : e.currentStyle && (s = e.currentStyle[t]), null == i || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : i) : R(e)
            }, J = function(e, t, n, r, i) {
                if ("px" === r || !r) return n;
                if ("auto" === r || !n) return 0;
                var s, o = L.test(t),
                    u = e,
                    a = B.style,
                    f = 0 > n;
                return f && (n = -n), "%" === r && -1 !== t.indexOf("border") ? s = n / 100 * (o ? e.clientWidth : e.clientHeight) : (a.cssText = "border:0 solid red;position:" + $(e, "position") + ";line-height:0;", "%" !== r && u.appendChild ? a[o ? "borderLeftWidth" : "borderTopWidth"] = n + r : (u = e.parentNode || H.body, a[o ? "width" : "height"] = n + r), u.appendChild(B), s = parseFloat(B[o ? "offsetWidth" : "offsetHeight"]), u.removeChild(B), 0 !== s || i || (s = J(e, t, n, r, !0))), f ? -s : s
            }, K = function(e, t, n) {
                if ("absolute" !== $(e, "position", n)) return 0;
                var r = "left" === t ? "Left" : "Top",
                    i = $(e, "margin" + r, n);
                return e["offset" + r] - (J(e, t, parseFloat(i), i.replace(b, "")) || 0)
            }, Q = function(e, t) {
                var n, r, i = {};
                if (t = t || V(e, null))
                    if (n = t.length)
                        for (; --n > -1;) i[t[n].replace(N, k)] = t.getPropertyValue(t[n]);
                    else
                        for (n in t) i[n] = t[n];
                    else
                if (t = e.currentStyle || e.style)
                    for (n in t) "string" == typeof n && void 0 !== i[n] && (i[n.replace(N, k)] = t[n]);
                return q || (i.opacity = R(e)), r = xt(e, t, !1), i.rotation = r.rotation, i.skewX = r.skewX, i.scaleX = r.scaleX, i.scaleY = r.scaleY, i.x = r.x, i.y = r.y, St && (i.z = r.z, i.rotationX = r.rotationX, i.rotationY = r.rotationY, i.scaleZ = r.scaleZ), i.filters && delete i.filters, i
            }, G = function(e, t, n, r, i) {
                var s, o, u, a = {}, f = e.style;
                for (o in n) "cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (s = n[o]) || i && i[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (a[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[o] || "" === t[o].replace(y, "") ? s : 0 : K(e, o), void 0 !== f[o] && (u = new ct(f, o, f[o], u)));
                if (r)
                    for (o in r) "className" !== o && (a[o] = r[o]);
                return {
                    difs: a,
                    firstMPT: u
                }
            }, Y = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, Z = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            et = function(e, t, n) {
                var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                    i = Y[t],
                    s = i.length;
                for (n = n || V(e, null); --s > -1;) r -= parseFloat($(e, "padding" + i[s], n, !0)) || 0, r -= parseFloat($(e, "border" + i[s] + "Width", n, !0)) || 0;
                return r
            }, tt = function(e, t) {
                (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                var n = e.split(" "),
                    r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                    i = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                return null == i ? i = "0" : "center" === i && (i = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== i.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === i.charAt(1), t.ox = parseFloat(r.replace(y, "")), t.oy = parseFloat(i.replace(y, ""))), r + " " + i + (n.length > 2 ? " " + n[2] : "")
            }, nt = function(e, t) {
                return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
            }, rt = function(e, t) {
                return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
            }, it = function(e, t, n, r) {
                var i, s, o, u, a = 1e-6;
                return null == e ? u = t : "number" == typeof e ? u = e : (i = 360, s = e.split("_"), o = Number(s[0].replace(y, "")) * (-1 === e.indexOf("rad") ? 1 : D) - ("=" === e.charAt(1) ? 0 : t), s.length && (r && (r[n] = t + o), -1 !== e.indexOf("short") && (o %= i, o !== o % (i / 2) && (o = 0 > o ? o + i : o - i)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * i) % i - (0 | o / i) * i : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * i) % i - (0 | o / i) * i)), u = t + o), a > u && u > -a && (u = 0), u
            }, st = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ot = function(e, t, n) {
                return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (n - t) * e : .5 > e ? n : 2 > 3 * e ? t + 6 * (n - t) * (2 / 3 - e) : t) + .5
            }, ut = function(e) {
                var t, n, r, i, s, o;
                return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), st[e] ? st[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), n = e.charAt(2), r = e.charAt(3), e = "#" + t + t + n + n + r + r), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(v), i = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, o = Number(e[2]) / 100, n = .5 >= o ? o * (s + 1) : o + s - o * s, t = 2 * o - n, e.length > 3 && (e[3] = Number(e[3])), e[0] = ot(i + 1 / 3, t, n), e[1] = ot(i, t, n), e[2] = ot(i - 1 / 3, t, n), e) : (e = e.match(v) || st.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : st.black
            }, at = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (a in st) at += "|" + a + "\\b";
        at = RegExp(at + ")", "gi");
        var ft = function(e, t, n, r) {
            if (null == e) return function(e) {
                return e
            };
            var i, s = t ? (e.match(at) || [""])[0] : "",
                o = e.split(s).join("").match(g) || [],
                u = e.substr(0, e.indexOf(o[0])),
                a = ")" === e.charAt(e.length - 1) ? ")" : "",
                f = -1 !== e.indexOf(" ") ? " " : ",",
                l = o.length,
                c = l > 0 ? o[0].replace(v, "") : "";
            return l ? i = t ? function(e) {
                var t, h, p, d;
                if ("number" == typeof e) e += c;
                else if (r && M.test(e)) {
                    for (d = e.replace(M, "|").split("|"), p = 0; d.length > p; p++) d[p] = i(d[p]);
                    return d.join(",")
                }
                if (t = (e.match(at) || [s])[0], h = e.split(t).join("").match(g) || [], p = h.length, l > p--)
                    for (; l > ++p;) h[p] = n ? h[0 | (p - 1) / 2] : o[p];
                return u + h.join(f) + f + t + a + (-1 !== e.indexOf("inset") ? " inset" : "")
            } : function(e) {
                var t, s, h;
                if ("number" == typeof e) e += c;
                else if (r && M.test(e)) {
                    for (s = e.replace(M, "|").split("|"), h = 0; s.length > h; h++) s[h] = i(s[h]);
                    return s.join(",")
                }
                if (t = e.match(g) || [], h = t.length, l > h--)
                    for (; l > ++h;) t[h] = n ? t[0 | (h - 1) / 2] : o[h];
                return u + t.join(f) + a
            } : function(e) {
                return e
            }
        }, lt = function(e) {
                return e = e.split(","),
                function(t, n, r, i, s, o, u) {
                    var a, f = (n + "").split(" ");
                    for (u = {}, a = 0; 4 > a; a++) u[e[a]] = f[a] = f[a] || f[(a - 1) / 2 >> 0];
                    return i.parse(t, u, s, o)
                }
            }, ct = (F._setPluginRatio = function(e) {
                this.plugin.setRatio(e);
                for (var t, n, r, i, s = this.data, o = s.proxy, u = s.firstMPT, a = 1e-6; u;) t = o[u.v], u.r ? t = t > 0 ? 0 | t + .5 : 0 | t - .5 : a > t && t > -a && (t = 0), u.t[u.p] = t, u = u._next;
                if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === e)
                    for (u = s.firstMPT; u;) {
                        if (n = u.t, n.type) {
                            if (1 === n.type) {
                                for (i = n.xs0 + n.s + n.xs1, r = 1; n.l > r; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                n.e = i
                            }
                        } else n.e = n.s + n.xs0;
                        u = u._next
                    }
            }, function(e, t, n, r, i) {
                this.t = e, this.p = t, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
            }),
            ht = (F._parseToProxy = function(e, t, n, r, i, s) {
                var o, u, a, f, l, c = r,
                    h = {}, p = {}, d = n._transform,
                    v = P;
                for (n._transform = null, P = t, r = l = n.parse(e, t, r, i), P = v, s && (n._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
                    if (1 >= r.type && (u = r.p, p[u] = r.s + r.c, h[u] = r.s, s || (f = new ct(r, "s", u, f, r.r), r.c = 0), 1 === r.type))
                        for (o = r.l; --o > 0;) a = "xn" + o, u = r.p + "_" + a, p[u] = r.data[a], h[u] = r[a], s || (f = new ct(r, a, u, f, r.rxp[a]));
                    r = r._next
                }
                return {
                    proxy: h,
                    end: p,
                    firstMPT: f,
                    pt: l
                }
            }, F.CSSPropTween = function(e, t, r, i, o, u, a, f, l, c, h) {
                this.t = e, this.p = t, this.s = r, this.c = i, this.n = a || t, e instanceof ht || s.push(this.n), this.r = f, this.type = u || 0, l && (this.pr = l, n = !0), this.b = void 0 === c ? r : c, this.e = void 0 === h ? r + i : h, o && (this._next = o, o._prev = this)
            }),
            pt = o.parseComplex = function(e, t, n, r, i, s, o, u, a, l) {
                n = n || s || "", o = new ht(e, t, 0, 0, o, l ? 2 : 1, null, !1, u, n, r), r += "";
                var c, h, p, d, g, y, b, w, E, S, T, N, C = n.split(", ").join(",").split(" "),
                    k = r.split(", ").join(",").split(" "),
                    L = C.length,
                    A = f !== !1;
                for ((-1 !== r.indexOf(",") || -1 !== n.indexOf(",")) && (C = C.join(" ").replace(M, ", ").split(" "), k = k.join(" ").replace(M, ", ").split(" "), L = C.length), L !== k.length && (C = (s || "").split(" "), L = C.length), o.plugin = a, o.setRatio = l, c = 0; L > c; c++)
                    if (d = C[c], g = k[c], w = parseFloat(d), w || 0 === w) o.appendXtra("", w, nt(g, w), g.replace(m, ""), A && -1 !== g.indexOf("px"), !0);
                    else
                if (i && ("#" === d.charAt(0) || st[d] || x.test(d))) N = "," === g.charAt(g.length - 1) ? ")," : ")", d = ut(d), g = ut(g), E = d.length + g.length > 6, E && !q && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(k[c]).join("transparent")) : (q || (E = !1), o.appendXtra(E ? "rgba(" : "rgb(", d[0], g[0] - d[0], ",", !0, !0).appendXtra("", d[1], g[1] - d[1], ",", !0).appendXtra("", d[2], g[2] - d[2], E ? "," : N, !0), E && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > g.length ? 1 : g[3]) - d, N, !1)));
                else if (y = d.match(v)) {
                    if (b = g.match(m), !b || b.length !== y.length) return o;
                    for (p = 0, h = 0; y.length > h; h++) T = y[h], S = d.indexOf(T, p), o.appendXtra(d.substr(p, S - p), Number(T), nt(b[h], T), "", A && "px" === d.substr(S + T.length, 2), 0 === h), p = S + T.length;
                    o["xs" + o.l] += d.substr(p)
                } else o["xs" + o.l] += o.l ? " " + d : d; if (-1 !== r.indexOf("=") && o.data) {
                    for (N = o.xs0 + o.data.s, c = 1; o.l > c; c++) N += o["xs" + c] + o.data["xn" + c];
                    o.e = N + o["xs" + c]
                }
                return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
            }, dt = 9;
        for (a = ht.prototype, a.l = a.pr = 0; --dt > 0;) a["xn" + dt] = 0, a["xs" + dt] = "";
        a.xs0 = "", a._next = a._prev = a.xfirst = a.data = a.plugin = a.setRatio = a.rxp = null, a.appendXtra = function(e, t, n, r, i, s) {
            var o = this,
                u = o.l;
            return o["xs" + u] += s && u ? " " + e : e || "", n || 0 === u || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", u > 0 ? (o.data["xn" + u] = t + n, o.rxp["xn" + u] = i, o["xn" + u] = t, o.plugin || (o.xfirst = new ht(o, "xn" + u, t, n, o.xfirst || o, 0, o.n, i, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                s: t + n
            }, o.rxp = {}, o.s = t, o.c = n, o.r = i, o)) : (o["xs" + u] += t + (r || ""), o)
        };
        var vt = function(e, t) {
            t = t || {}, this.p = t.prefix ? X(e) || e : e, u[e] = u[this.p] = this, this.format = t.formatter || ft(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
        }, mt = F._registerComplexSpecialProp = function(e, t, n) {
                "object" != typeof t && (t = {
                    parser: n
                });
                var r, i, s = e.split(","),
                    o = t.defaultValue;
                for (n = n || [o], r = 0; s.length > r; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = n[r] || o, i = new vt(s[r], t)
            }, gt = function(e) {
                if (!u[e]) {
                    var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                    mt(e, {
                        parser: function(e, n, r, i, s, o, a) {
                            var f = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                            return f ? (f._cssRegister(), u[r].parse(e, n, r, i, s, o, a)) : (U("Error: " + t + " js file not loaded."), s)
                        }
                    })
                }
            };
        a = vt.prototype, a.parseComplex = function(e, t, n, r, i, s) {
            var o, u, a, f, l, c, h = this.keyword;
            if (this.multi && (M.test(n) || M.test(t) ? (u = t.replace(M, "|").split("|"), a = n.replace(M, "|").split("|")) : h && (u = [t], a = [n])), a) {
                for (f = a.length > u.length ? a.length : u.length, o = 0; f > o; o++) t = u[o] = u[o] || this.dflt, n = a[o] = a[o] || this.dflt, h && (l = t.indexOf(h), c = n.indexOf(h), l !== c && (n = -1 === c ? a : u, n[o] += " " + h));
                t = u.join(", "), n = a.join(", ")
            }
            return pt(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, s)
        }, a.parse = function(e, t, n, r, s, o) {
            return this.parseComplex(e.style, this.format($(e, this.p, i, !1, this.dflt)), this.format(t), s, o)
        }, o.registerSpecialProp = function(e, t, n) {
            mt(e, {
                parser: function(e, r, i, s, o, u) {
                    var a = new ht(e, i, 0, 0, o, 2, i, !1, n);
                    return a.plugin = u, a.setRatio = t(e, r, s._tween, i), a
                },
                priority: n
            })
        };
        var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            bt = X("transform"),
            wt = z + "transform",
            Et = X("transformOrigin"),
            St = null !== X("perspective"),
            xt = function(e, t, n, r) {
                if (e._gsTransform && n && !r) return e._gsTransform;
                var i, s, u, a, f, l, c, h, p, d, v, m, g, y = n ? e._gsTransform || {
                        skewY: 0
                    } : {
                        skewY: 0
                    }, b = 0 > y.scaleX,
                    w = 2e-5,
                    E = 1e5,
                    S = 179.99,
                    x = S * _,
                    T = St ? parseFloat($(e, Et, t, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0;
                for (bt ? i = $(e, wt, t, !0) : e.currentStyle && (i = e.currentStyle.filter.match(A), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), s = (i || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], u = s.length; --u > -1;) a = Number(s[u]), s[u] = (f = a - (a |= 0)) ? (0 | f * E + (0 > f ? -0.5 : .5)) / E + a : a;
                if (16 === s.length) {
                    var N = s[8],
                        C = s[9],
                        k = s[10],
                        L = s[12],
                        O = s[13],
                        M = s[14];
                    if (y.zOrigin && (M = -y.zOrigin, L = N * M - s[12], O = C * M - s[13], M = k * M + y.zOrigin - s[14]), !n || r || null == y.rotationX) {
                        var P, H, B, j, F, I, q, R = s[0],
                            U = s[1],
                            z = s[2],
                            W = s[3],
                            X = s[4],
                            V = s[5],
                            J = s[6],
                            K = s[7],
                            Q = s[11],
                            G = Math.atan2(J, k),
                            Y = -x > G || G > x;
                        y.rotationX = G * D, G && (j = Math.cos(-G), F = Math.sin(-G), P = X * j + N * F, H = V * j + C * F, B = J * j + k * F, N = X * -F + N * j, C = V * -F + C * j, k = J * -F + k * j, Q = K * -F + Q * j, X = P, V = H, J = B), G = Math.atan2(N, R), y.rotationY = G * D, G && (I = -x > G || G > x, j = Math.cos(-G), F = Math.sin(-G), P = R * j - N * F, H = U * j - C * F, B = z * j - k * F, C = U * F + C * j, k = z * F + k * j, Q = W * F + Q * j, R = P, U = H, z = B), G = Math.atan2(U, V), y.rotation = G * D, G && (q = -x > G || G > x, j = Math.cos(-G), F = Math.sin(-G), R = R * j + X * F, H = U * j + V * F, V = U * -F + V * j, J = z * -F + J * j, U = H), q && Y ? y.rotation = y.rotationX = 0 : q && I ? y.rotation = y.rotationY = 0 : I && Y && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(R * R + U * U) * E + .5) / E, y.scaleY = (0 | Math.sqrt(V * V + C * C) * E + .5) / E, y.scaleZ = (0 | Math.sqrt(J * J + k * k) * E + .5) / E, y.skewX = 0, y.perspective = Q ? 1 / (0 > Q ? -Q : Q) : 0, y.x = L, y.y = O, y.z = M
                    }
                } else if (!(St && !r && s.length && y.x === s[4] && y.y === s[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === $(e, "display", t))) {
                    var Z = s.length >= 6,
                        et = Z ? s[0] : 1,
                        tt = s[1] || 0,
                        nt = s[2] || 0,
                        rt = Z ? s[3] : 1;
                    y.x = s[4] || 0, y.y = s[5] || 0, l = Math.sqrt(et * et + tt * tt), c = Math.sqrt(rt * rt + nt * nt), h = et || tt ? Math.atan2(tt, et) * D : y.rotation || 0, p = nt || rt ? Math.atan2(nt, rt) * D + h : y.skewX || 0, d = l - Math.abs(y.scaleX || 0), v = c - Math.abs(y.scaleY || 0), Math.abs(p) > 90 && 270 > Math.abs(p) && (b ? (l *= -1, p += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (c *= -1, p += 0 >= p ? 180 : -180)), m = (h - y.rotation) % 180, g = (p - y.skewX) % 180, (void 0 === y.skewX || d > w || -w > d || v > w || -w > v || m > -S && S > m && !1 | m * E || g > -S && S > g && !1 | g * E) && (y.scaleX = l, y.scaleY = c, y.rotation = h, y.skewX = p), St && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(o.defaultTransformPerspective) || 0, y.scaleZ = 1)
                }
                y.zOrigin = T;
                for (u in y) w > y[u] && y[u] > -w && (y[u] = 0);
                return n && (e._gsTransform = y), y
            }, Tt = function(e) {
                var t, n, r = this.data,
                    i = -r.rotation * _,
                    s = i + r.skewX * _,
                    o = 1e5,
                    u = (0 | Math.cos(i) * r.scaleX * o) / o,
                    a = (0 | Math.sin(i) * r.scaleX * o) / o,
                    f = (0 | Math.sin(s) * -r.scaleY * o) / o,
                    l = (0 | Math.cos(s) * r.scaleY * o) / o,
                    c = this.t.style,
                    h = this.t.currentStyle;
                if (h) {
                    n = a, a = -f, f = -n, t = h.filter, c.filter = "";
                    var p, v, m = this.t.offsetWidth,
                        g = this.t.offsetHeight,
                        y = "absolute" !== h.position,
                        E = "progid:DXImageTransform.Microsoft.Matrix(M11=" + u + ", M12=" + a + ", M21=" + f + ", M22=" + l,
                        S = r.x,
                        x = r.y;
                    if (null != r.ox && (p = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, v = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, S += p - (p * u + v * a), x += v - (p * f + v * l)), y ? (p = m / 2, v = g / 2, E += ", Dx=" + (p - (p * u + v * a) + S) + ", Dy=" + (v - (p * f + v * l) + x) + ")") : E += ", sizingMethod='auto expand')", c.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(O, E) : E + " " + t, (0 === e || 1 === e) && 1 === u && 0 === a && 0 === f && 1 === l && (y && -1 === E.indexOf("Dx=0, Dy=0") || w.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                        var T, N, C, k = 8 > d ? 1 : -1;
                        for (p = r.ieOffsetX || 0, v = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > u ? -u : u) * m + (0 > a ? -a : a) * g)) / 2 + S), r.ieOffsetY = Math.round((g - ((0 > l ? -l : l) * g + (0 > f ? -f : f) * m)) / 2 + x), dt = 0; 4 > dt; dt++) N = Z[dt], T = h[N], n = -1 !== T.indexOf("px") ? parseFloat(T) : J(this.t, N, parseFloat(T), T.replace(b, "")) || 0, C = n !== r[N] ? 2 > dt ? -r.ieOffsetX : -r.ieOffsetY : 2 > dt ? p - r.ieOffsetX : v - r.ieOffsetY, c[N] = (r[N] = Math.round(n - C * (0 === dt || 2 === dt ? 1 : k))) + "px"
                    }
                }
            }, Nt = function() {
                var e, t, n, r, i, s, o, u, a, f, l, c, p, d, v, m, g, y, b, w, E, S, x, T = this.data,
                    N = this.t.style,
                    C = T.rotation * _,
                    k = T.scaleX,
                    L = T.scaleY,
                    A = T.scaleZ,
                    O = T.perspective;
                if (h) {
                    var M = 1e-4;
                    M > k && k > -M && (k = A = 2e-5), M > L && L > -M && (L = A = 2e-5), !O || T.z || T.rotationX || T.rotationY || (O = 0)
                }
                if (C || T.skewX) y = Math.cos(C), b = Math.sin(C), e = y, i = b, T.skewX && (C -= T.skewX * _, y = Math.cos(C), b = Math.sin(C)), t = -b, s = y;
                else {
                    if (!(T.rotationY || T.rotationX || 1 !== A || O)) return N[bt] = "translate3d(" + T.x + "px," + T.y + "px," + T.z + "px)" + (1 !== k || 1 !== L ? " scale(" + k + "," + L + ")" : ""), void 0;
                    e = s = 1, t = i = 0
                }
                l = 1, n = r = o = u = a = f = c = p = d = 0, v = O ? -1 / O : 0, m = T.zOrigin, g = 1e5, C = T.rotationY * _, C && (y = Math.cos(C), b = Math.sin(C), a = l * -b, p = v * -b, n = e * b, o = i * b, l *= y, v *= y, e *= y, i *= y), C = T.rotationX * _, C && (y = Math.cos(C), b = Math.sin(C), w = t * y + n * b, E = s * y + o * b, S = f * y + l * b, x = d * y + v * b, n = t * -b + n * y, o = s * -b + o * y, l = f * -b + l * y, v = d * -b + v * y, t = w, s = E, f = S, d = x), 1 !== A && (n *= A, o *= A, l *= A, v *= A), 1 !== L && (t *= L, s *= L, f *= L, d *= L), 1 !== k && (e *= k, i *= k, a *= k, p *= k), m && (c -= m, r = n * c, u = o * c, c = l * c + m), r = (w = (r += T.x) - (r |= 0)) ? (0 | w * g + (0 > w ? -0.5 : .5)) / g + r : r, u = (w = (u += T.y) - (u |= 0)) ? (0 | w * g + (0 > w ? -0.5 : .5)) / g + u : u, c = (w = (c += T.z) - (c |= 0)) ? (0 | w * g + (0 > w ? -0.5 : .5)) / g + c : c, N[bt] = "matrix3d(" + [(0 | e * g) / g, (0 | i * g) / g, (0 | a * g) / g, (0 | p * g) / g, (0 | t * g) / g, (0 | s * g) / g, (0 | f * g) / g, (0 | d * g) / g, (0 | n * g) / g, (0 | o * g) / g, (0 | l * g) / g, (0 | v * g) / g, r, u, c, O ? 1 + -c / O : 1].join(",") + ")"
            }, Ct = function() {
                var e, t, n, r, i, s, o, u, a, f = this.data,
                    l = this.t,
                    c = l.style;
                h && (e = c.top ? "top" : c.bottom ? "bottom" : parseFloat($(l, "top", null, !1)) ? "bottom" : "top", t = $(l, e, null, !1), n = parseFloat(t) || 0, r = t.substr((n + "").length) || "px", f._ffFix = !f._ffFix, c[e] = (f._ffFix ? n + .05 : n - .05) + r), f.rotation || f.skewX ? (i = f.rotation * _, s = i - f.skewX * _, o = 1e5, u = f.scaleX * o, a = f.scaleY * o, c[bt] = "matrix(" + (0 | Math.cos(i) * u) / o + "," + (0 | Math.sin(i) * u) / o + "," + (0 | Math.sin(s) * -a) / o + "," + (0 | Math.cos(s) * a) / o + "," + f.x + "," + f.y + ")") : c[bt] = "matrix(" + f.scaleX + ",0,0," + f.scaleY + "," + f.x + "," + f.y + ")"
            };
        mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(e, t, n, r, s, o, u) {
                if (r._transform) return s;
                var a, f, l, c, h, p, d, v = r._transform = xt(e, i, !0, u.parseTransform),
                    m = e.style,
                    g = 1e-6,
                    y = yt.length,
                    b = u,
                    w = {};
                if ("string" == typeof b.transform && bt) l = m.cssText, m[bt] = b.transform, m.display = "block", a = xt(e, null, !1), m.cssText = l;
                else if ("object" == typeof b) {
                    if (a = {
                        scaleX: rt(null != b.scaleX ? b.scaleX : b.scale, v.scaleX),
                        scaleY: rt(null != b.scaleY ? b.scaleY : b.scale, v.scaleY),
                        scaleZ: rt(null != b.scaleZ ? b.scaleZ : b.scale, v.scaleZ),
                        x: rt(b.x, v.x),
                        y: rt(b.y, v.y),
                        z: rt(b.z, v.z),
                        perspective: rt(b.transformPerspective, v.perspective)
                    }, d = b.directionalRotation, null != d)
                        if ("object" == typeof d)
                            for (l in d) b[l] = d[l];
                        else b.rotation = d;
                    a.rotation = it("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : v.rotation, v.rotation, "rotation", w), St && (a.rotationX = it("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : v.rotationX || 0, v.rotationX, "rotationX", w), a.rotationY = it("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : v.rotationY || 0, v.rotationY, "rotationY", w)), a.skewX = null == b.skewX ? v.skewX : it(b.skewX, v.skewX), a.skewY = null == b.skewY ? v.skewY : it(b.skewY, v.skewY), (f = a.skewY - v.skewY) && (a.skewX += f, a.rotation += f)
                }
                for (null != b.force3D && (v.force3D = b.force3D, p = !0), h = v.force3D || v.z || v.rotationX || v.rotationY || a.z || a.rotationX || a.rotationY || a.perspective, h || null == b.scale || (a.scaleZ = 1); --y > -1;) n = yt[y], c = a[n] - v[n], (c > g || -g > c || null != P[n]) && (p = !0, s = new ht(v, n, v[n], c, s), n in w && (s.e = w[n]), s.xs0 = 0, s.plugin = o, r._overwriteProps.push(s.n));
                return c = b.transformOrigin, (c || St && h && v.zOrigin) && (bt ? (p = !0, n = Et, c = (c || $(e, n, i, !1, "50% 50%")) + "", s = new ht(m, n, 0, 0, s, -1, "transformOrigin"), s.b = m[n], s.plugin = o, St ? (l = v.zOrigin, c = c.split(" "), v.zOrigin = (c.length > 2 && (0 === l || "0px" !== c[2]) ? parseFloat(c[2]) : l) || 0, s.xs0 = s.e = m[n] = c[0] + " " + (c[1] || "50%") + " 0px", s = new ht(v, "zOrigin", 0, 0, s, -1, s.n), s.b = l, s.xs0 = s.e = v.zOrigin) : s.xs0 = s.e = m[n] = c) : tt(c + "", v)), p && (r._transformType = h || 3 === this._transformType ? 3 : 2), s
            },
            prefix: !0
        }), mt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), mt("borderRadius", {
            defaultValue: "0px",
            parser: function(e, t, n, s, o) {
                t = this.format(t);
                var u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    T = e.style;
                for (v = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), u = t.split(" "), a = 0; x.length > a; a++) this.p.indexOf("border") && (x[a] = X(x[a])), c = l = $(e, x[a], i, !1, "0px"), -1 !== c.indexOf(" ") && (l = c.split(" "), c = l[0], l = l[1]), h = f = u[a], p = parseFloat(c), y = c.substr((p + "").length), b = "=" === h.charAt(1), b ? (d = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), d *= parseFloat(h), g = h.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(h), g = h.substr((d + "").length)), "" === g && (g = r[n] || y), g !== y && (w = J(e, "borderLeft", p, y), E = J(e, "borderTop", p, y), "%" === g ? (c = 100 * (w / v) + "%", l = 100 * (E / m) + "%") : "em" === g ? (S = J(e, "borderLeft", 1, "em"), c = w / S + "em", l = E / S + "em") : (c = w + "px", l = E + "px"), b && (h = parseFloat(c) + d + g, f = parseFloat(l) + d + g)), o = pt(T, x[a], c + " " + l, h + " " + f, !1, "0px", o);
                return o
            },
            prefix: !0,
            formatter: ft("0px 0px 0px 0px", !1, !0)
        }), mt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(e, t, n, r, s, o) {
                var u, a, f, l, c, h, p = "background-position",
                    v = i || V(e, null),
                    m = this.format((v ? d ? v.getPropertyValue(p + "-x") + " " + v.getPropertyValue(p + "-y") : v.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                    g = this.format(t);
                if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (h = $(e, "backgroundImage").replace(C, ""), h && "none" !== h)) {
                    for (u = m.split(" "), a = g.split(" "), j.setAttribute("src", h), f = 2; --f > -1;) m = u[f], l = -1 !== m.indexOf("%"), l !== (-1 !== a[f].indexOf("%")) && (c = 0 === f ? e.offsetWidth - j.width : e.offsetHeight - j.height, u[f] = l ? parseFloat(m) / 100 * c + "px" : 100 * (parseFloat(m) / c) + "%");
                    m = u.join(" ")
                }
                return this.parseComplex(e.style, m, g, s, o)
            },
            formatter: tt
        }), mt("backgroundSize", {
            defaultValue: "0 0",
            formatter: tt
        }), mt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), mt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), mt("transformStyle", {
            prefix: !0
        }), mt("backfaceVisibility", {
            prefix: !0
        }), mt("userSelect", {
            prefix: !0
        }), mt("margin", {
            parser: lt("marginTop,marginRight,marginBottom,marginLeft")
        }), mt("padding", {
            parser: lt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), mt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(e, t, n, r, s, o) {
                var u, a, f;
                return 9 > d ? (a = e.currentStyle, f = 8 > d ? " " : ",", u = "rect(" + a.clipTop + f + a.clipRight + f + a.clipBottom + f + a.clipLeft + ")", t = this.format(t).split(",").join(f)) : (u = this.format($(e, this.p, i, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, u, t, s, o)
            }
        }), mt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), mt("autoRound,strictUnits", {
            parser: function(e, t, n, r, i) {
                return i
            }
        }), mt("border", {
            defaultValue: "0px solid #000",
            parser: function(e, t, n, r, s, o) {
                return this.parseComplex(e.style, this.format($(e, "borderTopWidth", i, !1, "0px") + " " + $(e, "borderTopStyle", i, !1, "solid") + " " + $(e, "borderTopColor", i, !1, "#000")), this.format(t), s, o)
            },
            color: !0,
            formatter: function(e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(at) || ["#000"])[0]
            }
        }), mt("float,cssFloat,styleFloat", {
            parser: function(e, t, n, r, i) {
                var s = e.style,
                    o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new ht(s, o, 0, 0, i, -1, n, !1, 0, s[o], t)
            }
        });
        var kt = function(e) {
            var t, n = this.t,
                r = n.filter || $(this.data, "filter"),
                i = 0 | this.s + this.c * e;
            100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (n.removeAttribute("filter"), t = !$(this.data, "filter")) : (n.filter = r.replace(S, ""), t = !0)), t || (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"), -1 === r.indexOf("opacity") ? 0 === i && this.xn1 || (n.filter = r + " alpha(opacity=" + i + ")") : n.filter = r.replace(w, "opacity=" + i))
        };
        mt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(e, t, n, r, s, o) {
                var u = parseFloat($(e, "opacity", i, !1, "1")),
                    a = e.style,
                    f = "autoAlpha" === n;
                return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + u), f && 1 === u && "hidden" === $(e, "visibility", i) && 0 !== t && (u = 0), q ? s = new ht(a, "opacity", u, t - u, s) : (s = new ht(a, "opacity", 100 * u, 100 * (t - u), s), s.xn1 = f ? 1 : 0, a.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = o, s.setRatio = kt), f && (s = new ht(a, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== u ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), s.xs0 = "inherit", r._overwriteProps.push(s.n), r._overwriteProps.push(n)), s
            }
        });
        var Lt = function(e, t) {
            t && (e.removeProperty ? e.removeProperty(t.replace(T, "-$1").toLowerCase()) : e.removeAttribute(t))
        }, At = function(e) {
                if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                    this.t.className = 0 === e ? this.b : this.e;
                    for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : Lt(n, t.p), t = t._next;
                    1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        mt("className", {
            parser: function(e, t, r, s, o, u, a) {
                var f, l, c, h, p, d = e.className,
                    v = e.style.cssText;
                if (o = s._classNamePT = new ht(e, r, 0, 0, o, 2), o.setRatio = At, o.pr = -11, n = !0, o.b = d, l = Q(e, i), c = e._gsClassPT) {
                    for (h = {}, p = c.data; p;) h[p.p] = 1, p = p._next;
                    c.setRatio(1)
                }
                return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : d.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), s._tween._duration && (e.className = o.e, f = G(e, l, Q(e), a, h), e.className = d, o.data = f.firstMPT, e.style.cssText = v, o = o.xfirst = s.parse(e, f.difs, o, u)), o
            }
        });
        var Ot = function(e) {
            if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var t, n, r, i, s = this.t.style,
                    o = u.transform.parse;
                if ("all" === this.e) s.cssText = "", i = !0;
                else
                    for (t = this.e.split(","), r = t.length; --r > -1;) n = t[r], u[n] && (u[n].parse === o ? i = !0 : n = "transformOrigin" === n ? Et : u[n].p), Lt(s, n);
                i && (Lt(s, bt), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (mt("clearProps", {
            parser: function(e, t, r, i, s) {
                return s = new ht(e, r, 0, 0, s, 2), s.setRatio = Ot, s.e = t, s.pr = -10, s.data = i._tween, n = !0, s
            }
        }), a = "bezier,throwProps,physicsProps,physics2D".split(","), dt = a.length; dt--;) gt(a[dt]);
        a = o.prototype, a._firstPT = null, a._onInitTween = function(e, t, u) {
            if (!e.nodeType) return !1;
            this._target = e, this._tween = u, this._vars = t, f = t.autoRound, n = !1, r = t.suffixMap || o.suffixMap, i = V(e, ""), s = this._overwriteProps;
            var a, h, d, v, m, g, y, b, w, S = e.style;
            if (l && "" === S.zIndex && (a = $(e, "zIndex", i), ("auto" === a || "" === a) && (S.zIndex = 0)), "string" == typeof t && (v = S.cssText, a = Q(e, i), S.cssText = v + ";" + t, a = G(e, a, Q(e)).difs, !q && E.test(t) && (a.opacity = parseFloat(RegExp.$1)), t = a, S.cssText = v), this._firstPT = h = this.parse(e, t, null), this._transformType) {
                for (w = 3 === this._transformType, bt ? c && (l = !0, "" === S.zIndex && (y = $(e, "zIndex", i), ("auto" === y || "" === y) && (S.zIndex = 0)), p && (S.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : S.zoom = 1, d = h; d && d._next;) d = d._next;
                b = new ht(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, d), b.setRatio = w && St ? Nt : bt ? Ct : Tt, b.data = this._transform || xt(e, i, !0), s.pop()
            }
            if (n) {
                for (; h;) {
                    for (g = h._next, d = v; d && d.pr > h.pr;) d = d._next;
                    (h._prev = d ? d._prev : m) ? h._prev._next = h : v = h, (h._next = d) ? d._prev = h : m = h, h = g
                }
                this._firstPT = v
            }
            return !0
        }, a.parse = function(e, t, n, s) {
            var o, a, l, c, h, p, d, v, m, g, y = e.style;
            for (o in t) p = t[o], a = u[o], a ? n = a.parse(e, p, o, this, n, s, t) : (h = $(e, o, i) + "", m = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && x.test(p) ? (m || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = pt(y, o, h, p, !0, "transparent", n, 0, s)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (l = parseFloat(h), d = l || 0 === l ? h.substr((l + "").length) : "", ("" === h || "auto" === h) && ("width" === o || "height" === o ? (l = et(e, o, i), d = "px") : "left" === o || "top" === o ? (l = K(e, o, i), d = "px") : (l = "opacity" !== o ? 0 : 1, d = "")), g = m && "=" === p.charAt(1), g ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), v = p.replace(b, "")) : (c = parseFloat(p), v = m ? p.substr((c + "").length) || "" : ""), "" === v && (v = r[o] || d), p = c || 0 === c ? (g ? c + l : c) + v : t[o], d !== v && "" !== v && (c || 0 === c) && (l || 0 === l) && (l = J(e, o, l, d), "%" === v ? (l /= J(e, o, 100, "%") / 100, l > 100 && (l = 100), t.strictUnits !== !0 && (h = l + "%")) : "em" === v ? l /= J(e, o, 1, "em") : (c = J(e, o, c, v), v = "px"), g && (c || 0 === c) && (p = c + l + v)), g && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== y[o] && (p || "NaN" != p + "" && null != p) ? (n = new ht(y, o, c || l || 0, 0, n, -1, o, !1, 0, h, p), n.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : h) : U("invalid " + o + " tween value: " + t[o]) : (n = new ht(y, o, l, c - l, n, 0, o, f !== !1 && ("px" === v || "zIndex" === o), 0, h, p), n.xs0 = v)) : n = pt(y, o, h, p, !0, null, n, 0, s)), s && n && !n.plugin && (n.plugin = s);
            return n
        }, a.setRatio = function(e) {
            var t, n, r, i = this._firstPT,
                s = 1e-6;
            if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001)
                    for (; i;) {
                        if (t = i.c * e + i.s, i.r ? t = t > 0 ? 0 | t + .5 : 0 | t - .5 : s > t && t > -s && (t = 0), i.type)
                            if (1 === i.type)
                                if (r = i.l, 2 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
                                else
                        if (3 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                        else if (4 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
                        else if (5 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
                        else {
                            for (n = i.xs0 + t + i.xs1, r = 1; i.l > r; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                            i.t[i.p] = n
                        } else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e);
                        else i.t[i.p] = t + i.xs0;
                        i = i._next
                    } else
                        for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next;
                else
                    for (; i;) 2 !== i.type ? i.t[i.p] = i.e : i.setRatio(e), i = i._next
        }, a._enableTransforms = function(e) {
            this._transformType = e || 3 === this._transformType ? 3 : 2, this._transform = this._transform || xt(this._target, i, !0)
        }, a._linkCSSP = function(e, t, n, r) {
            return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), n ? n._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
        }, a._kill = function(t) {
            var n, r, i, s = t;
            if (t.autoAlpha || t.alpha) {
                s = {};
                for (r in t) s[r] = t[r];
                s.opacity = 1, s.autoAlpha && (s.visibility = 1)
            }
            return t.className && (n = this._classNamePT) && (i = n.xfirst, i && i._prev ? this._linkCSSP(i._prev, n._next, i._prev._prev) : i === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, i._prev), this._classNamePT = null), e.prototype._kill.call(this, s)
        };
        var Mt = function(e, t, n) {
            var r, i, s, o;
            if (e.slice)
                for (i = e.length; --i > -1;) Mt(e[i], t, n);
            else
                for (r = e.childNodes, i = r.length; --i > -1;) s = r[i], o = s.type, s.style && (t.push(Q(s)), n && n.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Mt(s, t, n)
        };
        return o.cascadeTo = function(e, n, r) {
            var i, s, o, u = t.to(e, n, r),
                a = [u],
                f = [],
                l = [],
                c = [],
                h = t._internals.reservedProps;
            for (e = u._targets || u.target, Mt(e, f, c), u.render(n, !0), Mt(e, l), u.render(0, !0), u._enabled(!0), i = c.length; --i > -1;)
                if (s = G(c[i], f[i], l[i]), s.firstMPT) {
                    s = s.difs;
                    for (o in r) h[o] && (s[o] = r[o]);
                    a.push(t.to(c[i], n, s))
                }
            return a
        }, e.activate([o]), o
    }, !0),
    function() {
        var e = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(e, t, n) {
                return this._tween = n, !0
            }
        }),
            t = e.prototype;
        t._onInitAllProps = function() {
            for (var e, t, n, r = this._tween, i = r.vars.roundProps instanceof Array ? r.vars.roundProps : r.vars.roundProps.split(","), s = i.length, o = {}, u = r._propLookup.roundProps; --s > -1;) o[i[s]] = 1;
            for (s = i.length; --s > -1;)
                for (e = i[s], t = r._firstPT; t;) n = t._next, t.pg ? t.t._roundProps(o, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), n && (n._prev = t._prev), t._prev ? t._prev._next = n : r._firstPT === t && (r._firstPT = n), t._next = t._prev = null, r._propLookup[e] = u), t = n;
            return !1
        }, t._add = function(e, t, n, r) {
            this._addTween(e, t, n, n + r, t, !0), this._overwriteProps.push(t)
        }
    }(), window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(e, t) {
            var n;
            if ("function" != typeof e.setAttribute) return !1;
            this._target = e, this._proxy = {};
            for (n in t) this._addTween(this._proxy, n, parseFloat(e.getAttribute(n)), t[n], n) && this._overwriteProps.push(n);
            return !0
        },
        set: function(e) {
            this._super.setRatio.call(this, e);
            for (var t, n = this._overwriteProps, r = n.length; --r > -1;) t = n[r], this._target.setAttribute(t, this._proxy[t] + "")
        }
    }), window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(e, t) {
            "object" != typeof t && (t = {
                rotation: t
            }), this.finals = {};
            var n, r, i, s, o, u, a = t.useRadians === !0 ? 2 * Math.PI : 360,
                f = 1e-6;
            for (n in t) "useRadians" !== n && (u = (t[n] + "").split("_"), r = u[0], i = parseFloat("function" != typeof e[n] ? e[n] : e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? i + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, o = s - i, u.length && (r = u.join("_"), -1 !== r.indexOf("short") && (o %= a, o !== o % (a / 2) && (o = 0 > o ? o + a : o - a)), -1 !== r.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * a) % a - (0 | o / a) * a : -1 !== r.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * a) % a - (0 | o / a) * a)), (o > f || -f > o) && (this._addTween(e, n, i, i + o, n), this._overwriteProps.push(n)));
            return !0
        },
        set: function(e) {
            var t;
            if (1 !== e) this._super.setRatio.call(this, e);
            else
                for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
        }
    })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(e) {
        var t, n, r, i = window.GreenSockGlobals || window,
            s = i.com.greensock,
            o = 2 * Math.PI,
            u = Math.PI / 2,
            a = s._class,
            f = function(t, n) {
                var r = a("easing." + t, function() {}, !0),
                    i = r.prototype = new e;
                return i.constructor = r, i.getRatio = n, r
            }, l = e.register || function() {}, c = function(e, t, n, r) {
                var i = a("easing." + e, {
                    easeOut: new t,
                    easeIn: new n,
                    easeInOut: new r
                }, !0);
                return l(i, e), i
            }, h = function(e, t, n) {
                this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
            }, p = function(t, n) {
                var r = a("easing." + t, function(e) {
                    this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                }, !0),
                    i = r.prototype = new e;
                return i.constructor = r, i.getRatio = n, i.config = function(e) {
                    return new r(e)
                }, r
            }, d = c("Back", p("BackOut", function(e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
            }), p("BackIn", function(e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }), p("BackInOut", function(e) {
                return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
            })),
            v = a("easing.SlowMo", function(e, t, n) {
                t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
            }, !0),
            m = v.prototype = new e;
        return m.constructor = v, m.getRatio = function(e) {
            var t = e + (.5 - e) * this._p;
            return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, v.ease = new v(.7, .7), m.config = v.config = function(e, t, n) {
            return new v(e, t, n)
        }, t = a("easing.SteppedEase", function(e) {
            e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
        }, !0), m = t.prototype = new e, m.constructor = t, m.getRatio = function(e) {
            return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
        }, m.config = t.config = function(e) {
            return new t(e)
        }, n = a("easing.RoughEase", function(t) {
            t = t || {};
            for (var n, r, i, s, o, u, a = t.taper || "none", f = [], l = 0, c = 0 | (t.points || 20), p = c, d = t.randomize !== !1, v = t.clamp === !0, m = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) n = d ? Math.random() : 1 / c * p, r = m ? m.getRatio(n) : n, "none" === a ? i = g : "out" === a ? (s = 1 - n, i = s * s * g) : "in" === a ? i = n * n * g : .5 > n ? (s = 2 * n, i = .5 * s * s * g) : (s = 2 * (1 - n), i = .5 * s * s * g), d ? r += Math.random() * i - .5 * i : p % 2 ? r += .5 * i : r -= .5 * i, v && (r > 1 ? r = 1 : 0 > r && (r = 0)), f[l++] = {
                x: n,
                y: r
            };
            for (f.sort(function(e, t) {
                return e.x - t.x
            }), u = new h(1, 1, null), p = c; --p > -1;) o = f[p], u = new h(o.x, o.y, u);
            this._prev = new h(0, 0, 0 !== u.t ? u : u.next)
        }, !0), m = n.prototype = new e, m.constructor = n, m.getRatio = function(e) {
            var t = this._prev;
            if (e > t.t) {
                for (; t.next && e >= t.t;) t = t.next;
                t = t.prev
            } else
                for (; t.prev && t.t >= e;) t = t.prev;
            return this._prev = t, t.v + (e - t.t) / t.gap * t.c
        }, m.config = function(e) {
            return new n(e)
        }, n.ease = new n, c("Bounce", f("BounceOut", function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), f("BounceIn", function(e) {
            return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), f("BounceInOut", function(e) {
            var t = .5 > e;
            return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
        })), c("Circ", f("CircOut", function(e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), f("CircIn", function(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), f("CircInOut", function(e) {
            return 1 > (e *= 2) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })), r = function(t, n, r) {
            var i = a("easing." + t, function(e, t) {
                this._p1 = e || 1, this._p2 = t || r, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
            }, !0),
                s = i.prototype = new e;
            return s.constructor = i, s.getRatio = n, s.config = function(e, t) {
                return new i(e, t)
            }, i
        }, c("Elastic", r("ElasticOut", function(e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * o / this._p2) + 1
        }, .3), r("ElasticIn", function(e) {
            return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2))
        }, .3), r("ElasticInOut", function(e) {
            return 1 > (e *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) + 1
        }, .45)), c("Expo", f("ExpoOut", function(e) {
            return 1 - Math.pow(2, -10 * e)
        }), f("ExpoIn", function(e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), f("ExpoInOut", function(e) {
            return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })), c("Sine", f("SineOut", function(e) {
            return Math.sin(e * u)
        }), f("SineIn", function(e) {
            return -Math.cos(e * u) + 1
        }), f("SineInOut", function(e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1)
        })), a("easing.EaseLookup", {
            find: function(t) {
                return e.map[t]
            }
        }, !0), l(i.SlowMo, "SlowMo", "ease,"), l(n, "RoughEase", "ease,"), l(t, "SteppedEase", "ease,"), d
    }, !0)
}),
function(e) {
    "use strict";
    var t = e.GreenSockGlobals || e;
    if (!t.TweenLite) {
        var n, r, i, s, o, u = function(e) {
                var n, r = e.split("."),
                    i = t;
                for (n = 0; r.length > n; n++) i[r[n]] = i = i[r[n]] || {};
                return i
            }, a = u("com.greensock"),
            f = 1e-10,
            l = [].slice,
            c = function() {}, h = function() {
                var e = Object.prototype.toString,
                    t = e.call([]);
                return function(n) {
                    return n instanceof Array || "object" == typeof n && !! n.push && e.call(n) === t
                }
            }(),
            p = {}, d = function(n, r, i, s) {
                this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = i;
                var o = [];
                this.check = function(a) {
                    for (var f, l, c, h, v = r.length, m = v; --v > -1;)(f = p[r[v]] || new d(r[v], [])).gsClass ? (o[v] = f.gsClass, m--) : a && f.sc.push(this);
                    if (0 === m && i)
                        for (l = ("com.greensock." + n).split("."), c = l.pop(), h = u(l.join("."))[c] = this.gsClass = i.apply(i, o), s && (t[c] = h, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").join("/"), [], function() {
                            return h
                        }) : "undefined" != typeof module && module.exports && (module.exports = h)), v = 0; this.sc.length > v; v++) this.sc[v].check()
                }, this.check(!0)
            }, v = e._gsDefine = function(e, t, n, r) {
                return new d(e, t, n, r)
            }, m = a._class = function(e, t, n) {
                return t = t || function() {}, v(e, [], function() {
                    return t
                }, n), t
            };
        v.globals = t;
        var g = [0, 0, 1, 1],
            y = [],
            b = m("easing.Ease", function(e, t, n, r) {
                this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? g.concat(t) : g
            }, !0),
            w = b.map = {}, E = b.register = function(e, t, n, r) {
                for (var i, s, o, u, f = t.split(","), l = f.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --l > -1;)
                    for (s = f[l], i = r ? m("easing." + s, null, !0) : a.easing[s] || {}, o = c.length; --o > -1;) u = c[o], w[s + "." + u] = w[u + s] = i[u] = e.getRatio ? e : e[u] || new e
            };
        for (i = b.prototype, i._calcEnd = !1, i.getRatio = function(e) {
            if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
            var t = this._type,
                n = this._power,
                r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
            return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) i = n[r] + ",Power" + r, E(new b(null, null, 1, r), i, "easeOut", !0), E(new b(null, null, 2, r), i, "easeIn" + (0 === r ? ",easeNone" : "")), E(new b(null, null, 3, r), i, "easeInOut");
        w.linear = a.easing.Linear.easeIn, w.swing = a.easing.Quad.easeInOut;
        var S = m("events.EventDispatcher", function(e) {
            this._listeners = {}, this._eventTarget = e || this
        });
        i = S.prototype, i.addEventListener = function(e, t, n, r, i) {
            i = i || 0;
            var u, a, f = this._listeners[e],
                l = 0;
            for (null == f && (this._listeners[e] = f = []), a = f.length; --a > -1;) u = f[a], u.c === t && u.s === n ? f.splice(a, 1) : 0 === l && i > u.pr && (l = a + 1);
            f.splice(l, 0, {
                c: t,
                s: n,
                up: r,
                pr: i
            }), this !== s || o || s.wake()
        }, i.removeEventListener = function(e, t) {
            var n, r = this._listeners[e];
            if (r)
                for (n = r.length; --n > -1;)
                    if (r[n].c === t) return r.splice(n, 1), void 0
        }, i.dispatchEvent = function(e) {
            var t, n, r, i = this._listeners[e];
            if (i)
                for (t = i.length, n = this._eventTarget; --t > -1;) r = i[t], r.up ? r.c.call(r.s || n, {
                    type: e,
                    target: n
                }) : r.c.call(r.s || n)
        };
        var x = e.requestAnimationFrame,
            T = e.cancelAnimationFrame,
            N = Date.now || function() {
                return (new Date).getTime()
            }, C = N();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !x;) x = e[n[r] + "RequestAnimationFrame"], T = e[n[r] + "CancelAnimationFrame"] || e[n[r] + "CancelRequestAnimationFrame"];
        m("Ticker", function(e, t) {
            var n, r, i, u, a, f = this,
                l = N(),
                h = t !== !1 && x,
                p = function(e) {
                    C = N(), f.time = (C - l) / 1e3;
                    var t, s = f.time - a;
                    (!n || s > 0 || e === !0) && (f.frame++, a += s + (s >= u ? .004 : u - s), t = !0), e !== !0 && (i = r(p)), t && f.dispatchEvent("tick")
                };
            S.call(f), f.time = f.frame = 0, f.tick = function() {
                p(!0)
            }, f.sleep = function() {
                null != i && (h && T ? T(i) : clearTimeout(i), r = c, i = null, f === s && (o = !1))
            }, f.wake = function() {
                null !== i && f.sleep(), r = 0 === n ? c : h && x ? x : function(e) {
                    return setTimeout(e, 0 | 1e3 * (a - f.time) + 1)
                }, f === s && (o = !0), p(2)
            }, f.fps = function(e) {
                return arguments.length ? (n = e, u = 1 / (n || 60), a = this.time + u, f.wake(), void 0) : n
            }, f.useRAF = function(e) {
                return arguments.length ? (f.sleep(), h = e, f.fps(n), void 0) : h
            }, f.fps(e), setTimeout(function() {
                h && (!i || 5 > f.frame) && f.useRAF(!1)
            }, 1500)
        }), i = a.Ticker.prototype = new a.events.EventDispatcher, i.constructor = a.Ticker;
        var k = m("core.Animation", function(e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, q) {
                o || s.wake();
                var n = this.vars.useFrames ? I : q;
                n.add(this, n._time), this.vars.paused && this.paused(!0)
            }
        });
        s = k.ticker = new a.Ticker, i = k.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
        var L = function() {
            o && N() - C > 2e3 && s.wake(), setTimeout(L, 2e3)
        };
        L(), i.play = function(e, t) {
            return arguments.length && this.seek(e, t), this.reversed(!1).paused(!1)
        }, i.pause = function(e, t) {
            return arguments.length && this.seek(e, t), this.paused(!0)
        }, i.resume = function(e, t) {
            return arguments.length && this.seek(e, t), this.paused(!1)
        }, i.seek = function(e, t) {
            return this.totalTime(Number(e), t !== !1)
        }, i.restart = function(e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
        }, i.reverse = function(e, t) {
            return arguments.length && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, i.render = function() {}, i.invalidate = function() {
            return this
        }, i.isActive = function() {
            var e, t = this._timeline,
                n = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && n + this.totalDuration() / this._timeScale > e
        }, i._enabled = function(e, t) {
            return o || s.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
        }, i._kill = function() {
            return this._enabled(!1, !1)
        }, i.kill = function(e, t) {
            return this._kill(e, t), this
        }, i._uncache = function(e) {
            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
        }, i._swapSelfInParams = function(e) {
            for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
            return n
        }, i.eventCallback = function(e, t, n, r) {
            if ("on" === (e || "").substr(0, 2)) {
                var i = this.vars;
                if (1 === arguments.length) return i[e];
                null == t ? delete i[e] : (i[e] = t, i[e + "Params"] = h(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, i[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, i.delay = function(e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
        }, i.duration = function(e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, i.totalDuration = function(e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
        }, i.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
        }, i.totalTime = function(e, t, n) {
            if (o || s.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration,
                        i = this._timeline;
                    if (e > r && !n && (e = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - e : e) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
                        for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && this.render(e, t, !1)
            }
            return this
        }, i.progress = i.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
        }, i.startTime = function(e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }, i.timeScale = function(e) {
            if (!arguments.length) return this._timeScale;
            if (e = e || f, this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime,
                    n = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = n - (n - this._startTime) * this._timeScale / e
            }
            return this._timeScale = e, this._uncache(!1)
        }, i.reversed = function(e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, i.paused = function(e) {
            if (!arguments.length) return this._paused;
            if (e != this._paused && this._timeline) {
                o || e || s.wake();
                var t = this._timeline,
                    n = t.rawTime(),
                    r = n - this._pauseTime;
                !e && t.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = e ? n : null, this._paused = e, this._active = this.isActive(), !e && 0 !== r && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !e && this._enabled(!0, !1), this
        };
        var A = m("core.SimpleTimeline", function(e) {
            k.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        i = A.prototype = new k, i.constructor = A, i.kill()._gc = !1, i._first = i._last = null, i._sortChildren = !1, i.add = i.insert = function(e, t) {
            var n, r;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)
                for (r = e._startTime; n && n._startTime > r;) n = n._prev;
            return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._timeline && this._uncache(!0), this
        }, i._remove = function(e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0)), this
        }, i.render = function(e, t, n) {
            var r, i = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; i;) r = i._next, (i._active || e >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = r
        }, i.rawTime = function() {
            return o || s.wake(), this._totalTime
        };
        var O = m("TweenLite", function(t, n, r) {
            if (k.call(this, n, r), this.render = O.prototype.render, null == t) throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : O.selector(t) || t;
            var i, s, o, u = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                a = this.vars.overwrite;
            if (this._overwrite = a = null == a ? F[O.defaultOverwrite] : "number" == typeof a ? a >> 0 : F[a], (u || t instanceof Array || t.push && h(t)) && "number" != typeof t[0])
                for (this._targets = o = l.call(t, 0), this._propLookup = [], this._siblings = [], i = 0; o.length > i; i++) s = o[i], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(i--, 1), this._targets = o = o.concat(l.call(s, 0))) : (this._siblings[i] = R(s, this, !1), 1 === a && this._siblings[i].length > 1 && U(s, this, null, 1, this._siblings[i])) : (s = o[i--] = O.selector(s), "string" == typeof s && o.splice(i + 1, 1)) : o.splice(i--, 1);
            else this._propLookup = {}, this._siblings = R(t, this, !1), 1 === a && this._siblings.length > 1 && U(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
        }, !0),
            M = function(t) {
                return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
            }, _ = function(e, t) {
                var n, r = {};
                for (n in e) j[n] || n in t && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!P[n] || P[n] && P[n]._autoCSS) || (r[n] = e[n], delete e[n]);
                e.css = r
            };
        i = O.prototype = new k, i.constructor = O, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = !1, O.version = "1.11.2", O.defaultEase = i._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = s, O.autoSleep = !0, O.selector = e.$ || e.jQuery || function(t) {
            return e.$ ? (O.selector = e.$, e.$(t)) : e.document ? e.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
        };
        var D = O._internals = {
            isArray: h,
            isSelector: M
        }, P = O._plugins = {}, H = O._tweenLookup = {}, B = 0,
            j = D.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            }, F = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            }, I = k._rootFramesTimeline = new A,
            q = k._rootTimeline = new A;
        q._startTime = s.time, I._startTime = s.frame, q._active = I._active = !0, k._updateRoot = function() {
            if (q.render((s.time - q._startTime) * q._timeScale, !1, !1), I.render((s.frame - I._startTime) * I._timeScale, !1, !1), !(s.frame % 120)) {
                var e, t, n;
                for (n in H) {
                    for (t = H[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete H[n]
                }
                if (n = q._first, (!n || n._paused) && O.autoSleep && !I._first && 1 === s._listeners.tick.length) {
                    for (; n && n._paused;) n = n._next;
                    n || s.sleep()
                }
            }
        }, s.addEventListener("tick", k._updateRoot);
        var R = function(e, t, n) {
            var r, i, s = e._gsTweenID;
            if (H[s || (e._gsTweenID = s = "t" + B++)] || (H[s] = {
                target: e,
                tweens: []
            }), t && (r = H[s].tweens, r[i = r.length] = t, n))
                for (; --i > -1;) r[i] === t && r.splice(i, 1);
            return H[s].tweens
        }, U = function(e, t, n, r, i) {
                var s, o, u, a;
                if (1 === r || r >= 4) {
                    for (a = i.length, s = 0; a > s; s++)
                        if ((u = i[s]) !== t) u._gc || u._enabled(!1, !1) && (o = !0);
                        else
                    if (5 === r) break;
                    return o
                }
                var l, c = t._startTime + f,
                    h = [],
                    p = 0,
                    d = 0 === t._duration;
                for (s = i.length; --s > -1;)(u = i[s]) === t || u._gc || u._paused || (u._timeline !== t._timeline ? (l = l || z(t, 0, d), 0 === z(u, l, d) && (h[p++] = u)) : c >= u._startTime && u._startTime + u.totalDuration() / u._timeScale + f > c && ((d || !u._initted) && 2e-10 >= c - u._startTime || (h[p++] = u)));
                for (s = p; --s > -1;) u = h[s], 2 === r && u._kill(n, e) && (o = !0), (2 !== r || !u._firstPT && u._initted) && u._enabled(!1, !1) && (o = !0);
                return o
            }, z = function(e, t, n) {
                for (var r = e._timeline, i = r._timeScale, s = e._startTime; r._timeline;) {
                    if (s += r._startTime, i *= r._timeScale, r._paused) return -100;
                    r = r._timeline
                }
                return s /= i, s > t ? s - t : n && s === t || !e._initted && 2 * f > s - t ? f : (s += e.totalDuration() / e._timeScale / i) > t + f ? 0 : s - t - f
            };
        i._init = function() {
            var e, t, n, r, i = this.vars,
                s = this._overwrittenProps,
                o = this._duration,
                u = i.immediateRender,
                a = i.ease;
            if (i.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), i.startAt.overwrite = 0, i.startAt.immediateRender = !0, this._startAt = O.to(this.target, 0, i.startAt), u)
                    if (this._time > 0) this._startAt = null;
                    else
                if (0 !== o) return
            } else if (i.runBackwards && 0 !== o)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else {
                    n = {};
                    for (r in i) j[r] && "autoCSS" !== r || (n[r] = i[r]);
                    if (n.overwrite = 0, n.data = "isFromStart", this._startAt = O.to(this.target, 0, n), i.immediateRender) {
                        if (0 === this._time) return
                    } else this._startAt.render(-1, !0)
                }
            if (this._ease = a ? a instanceof b ? i.easeParams instanceof Array ? a.config.apply(a, i.easeParams) : a : "function" == typeof a ? new b(a, i.easeParams) : w[a] || O.defaultEase : O.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, s); if (t && O._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), i.runBackwards)
                for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
            this._onUpdate = i.onUpdate, this._initted = !0
        }, i._initProps = function(t, n, r, i) {
            var s, o, u, a, f, l;
            if (null == t) return !1;
            this.vars.css || t.style && t !== e && t.nodeType && P.css && this.vars.autoCSS !== !1 && _(this.vars, t);
            for (s in this.vars) {
                if (l = this.vars[s], j[s]) l && (l instanceof Array || l.push && h(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[s] = l = this._swapSelfInParams(l, this));
                else if (P[s] && (a = new P[s])._onInitTween(t, this.vars[s], this)) {
                    for (this._firstPT = f = {
                        _next: this._firstPT,
                        t: a,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: s,
                        pg: !0,
                        pr: a._priority
                    }, o = a._overwriteProps.length; --o > -1;) n[a._overwriteProps[o]] = this._firstPT;
                    (a._priority || a._onInitAllProps) && (u = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = n[s] = f = {
                    _next: this._firstPT,
                    t: t,
                    p: s,
                    f: "function" == typeof t[s],
                    n: s,
                    pg: !1,
                    pr: 0
                }, f.s = f.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), f.c = "string" == typeof l && "=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) : Number(l) - f.s || 0;
                f && f._next && (f._next._prev = f)
            }
            return i && this._kill(i, t) ? this._initProps(t, n, r, i) : this._overwrite > 1 && this._firstPT && r.length > 1 && U(t, this, n, this._overwrite, r) ? (this._kill(n, t), this._initProps(t, n, r, i)) : u
        }, i.render = function(e, t, n) {
            var r, i, s, o, u = this._time,
                a = this._duration;
            if (e >= a) this._totalTime = this._time = a, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete"), 0 === a && (o = this._rawPrevTime, (0 === e || 0 > o || o === f) && o !== e && (n = !0, o > f && (i = "onReverseComplete")), this._rawPrevTime = o = !t || e ? e : f);
            else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== u || 0 === a && this._rawPrevTime > f) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === a && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = o = !t || e ? e : f)) : this._initted || (n = !0);
            else if (this._totalTime = this._time = e, this._easeType) {
                var l = e / a,
                    c = this._easeType,
                    h = this._easePower;
                (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === h ? l *= l : 2 === h ? l *= l * l : 3 === h ? l *= l * l * l : 4 === h && (l *= l * l * l * l), this.ratio = 1 === c ? 1 - l : 2 === c ? l : .5 > e / a ? l / 2 : 1 - l / 2
            } else this.ratio = this._ease.getRatio(e / a); if (this._time !== u || n) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / a) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== u && e >= 0 && (this._active = !0), 0 === u && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === a) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || n && 0 === this._time && 0 === u || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), i && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || y), 0 === a && this._rawPrevTime === f && o !== f && (this._rawPrevTime = 0)))
            }
        }, i._kill = function(e, t) {
            if ("all" === e && (e = null), null != e || null != t && t !== this.target) {
                t = "string" != typeof t ? t || this._targets || this.target : O.selector(t) || t;
                var n, r, i, s, o, u, a, f;
                if ((h(t) || M(t)) && "number" != typeof t[0])
                    for (n = t.length; --n > -1;) this._kill(e, t[n]) && (u = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (t === this._targets[n]) {
                                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    } if (o) {
                        a = e || o, f = e !== r && "all" !== r && e !== o && ("object" != typeof e || !e._tempKill);
                        for (i in a)(s = o[i]) && (s.pg && s.t._kill(a) && (u = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete o[i]), f && (r[i] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return u
            }
            return this._enabled(!1, !1)
        }, i.invalidate = function() {
            return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, i._enabled = function(e, t) {
            if (o || s.wake(), e && this._gc) {
                var n, r = this._targets;
                if (r)
                    for (n = r.length; --n > -1;) this._siblings[n] = R(r[n], this, !0);
                else this._siblings = R(this.target, this, !0)
            }
            return k.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
        }, O.to = function(e, t, n) {
            return new O(e, t, n)
        }, O.from = function(e, t, n) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new O(e, t, n)
        }, O.fromTo = function(e, t, n, r) {
            return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new O(e, t, r)
        }, O.delayedCall = function(e, t, n, r, i) {
            return new O(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                onCompleteScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                onReverseCompleteScope: r,
                immediateRender: !1,
                useFrames: i,
                overwrite: 0
            })
        }, O.set = function(e, t) {
            return new O(e, 0, t)
        }, O.getTweensOf = function(e, t) {
            if (null == e) return [];
            e = "string" != typeof e ? e : O.selector(e) || e;
            var n, r, i, s;
            if ((h(e) || M(e)) && "number" != typeof e[0]) {
                for (n = e.length, r = []; --n > -1;) r = r.concat(O.getTweensOf(e[n], t));
                for (n = r.length; --n > -1;)
                    for (s = r[n], i = n; --i > -1;) s === r[i] && r.splice(n, 1)
            } else
                for (r = R(e).concat(), n = r.length; --n > -1;)(r[n]._gc || t && !r[n].isActive()) && r.splice(n, 1);
            return r
        }, O.killTweensOf = O.killDelayedCallsTo = function(e, t, n) {
            "object" == typeof t && (n = t, t = !1);
            for (var r = O.getTweensOf(e, t), i = r.length; --i > -1;) r[i]._kill(n, e)
        };
        var W = m("plugins.TweenPlugin", function(e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = W.prototype
        }, !0);
        if (i = W.prototype, W.version = "1.10.1", W.API = 2, i._firstPT = null, i._addTween = function(e, t, n, r, i, s) {
            var o, u;
            return null != r && (o = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - n : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) ? (this._firstPT = u = {
                _next: this._firstPT,
                t: e,
                p: t,
                s: n,
                c: o,
                f: "function" == typeof e[t],
                n: i || t,
                r: s
            }, u._next && (u._next._prev = u), u) : void 0
        }, i.setRatio = function(e) {
            for (var t, n = this._firstPT, r = 1e-6; n;) t = n.c * e + n.s, n.r ? t = 0 | t + (t > 0 ? .5 : -0.5) : r > t && t > -r && (t = 0), n.f ? n.t[n.p](t) : n.t[n.p] = t, n = n._next
        }, i._kill = function(e) {
            var t, n = this._overwriteProps,
                r = this._firstPT;
            if (null != e[this._propName]) this._overwriteProps = [];
            else
                for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
            for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
            return !1
        }, i._roundProps = function(e, t) {
            for (var n = this._firstPT; n;)(e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t), n = n._next
        }, O._onPluginEvent = function(e, t) {
            var n, r, i, s, o, u = t._firstPT;
            if ("_onInitAllProps" === e) {
                for (; u;) {
                    for (o = u._next, r = i; r && r.pr > u.pr;) r = r._next;
                    (u._prev = r ? r._prev : s) ? u._prev._next = u : i = u, (u._next = r) ? r._prev = u : s = u, u = o
                }
                u = t._firstPT = i
            }
            for (; u;) u.pg && "function" == typeof u.t[e] && u.t[e]() && (n = !0), u = u._next;
            return n
        }, W.activate = function(e) {
            for (var t = e.length; --t > -1;) e[t].API === W.API && (P[(new e[t])._propName] = e[t]);
            return !0
        }, v.plugin = function(e) {
            if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
            var t, n = e.propName,
                r = e.priority || 0,
                i = e.overwriteProps,
                s = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, o = m("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                    W.call(this, n, r), this._overwriteProps = i || []
                }, e.global === !0),
                u = o.prototype = new W(n);
            u.constructor = o, o.API = e.API;
            for (t in s) "function" == typeof e[t] && (u[s[t]] = e[t]);
            return o.version = e.version, W.activate([o]), o
        }, n = e._gsQueue) {
            for (r = 0; n.length > r; r++) n[r]();
            for (i in p) p[i].func || e.console.log("GSAP encountered missing dependency: com.greensock." + i)
        }
        o = !1
    }
}(window);
$(document).ready(function() {
    whatdo();
});