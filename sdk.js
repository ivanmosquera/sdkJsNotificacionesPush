(()=>{
    var r = {
        6981: (t,e,r)=>{
            "use strict";
            r(1983);
            r = (r = r(115)) && r.__esModule ? r : {
                default: r
            };
            r.default._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),
            r.default._babelPolyfill = !0
        }
        ,
        1983: (t,e,r)=>{
            "use strict";
            r(6266),
            r(990),
            r(911),
            r(4160),
            r(6197),
            r(6728),
            r(4039),
            r(3568),
            r(8051),
            r(8250),
            r(5434),
            r(4952),
            r(6337),
            r(5666)
        }
        ,
        8521: ()=>{
            var t = Object.freeze({
                PUSH: "push",
                INAPP: "inapp",
                CHAT: "chat"
            });
            window.Channel = t
        }
        ,
        6266: (t,e,r)=>{
            r(5767),
            r(8132),
            r(8388),
            r(7470),
            r(4882),
            r(1520),
            r(7476),
            r(9622),
            r(9375),
            r(3533),
            r(4672),
            r(4157),
            r(5095),
            r(9892),
            r(5115),
            r(9176),
            r(8838),
            r(6253),
            r(9730),
            r(6059),
            r(8377),
            r(1084),
            r(4299),
            r(1246),
            r(726),
            r(1901),
            r(5972),
            r(3403),
            r(2516),
            r(9371),
            r(6479),
            r(1736),
            r(1889),
            r(5177),
            r(6943),
            r(6503),
            r(6786),
            r(932),
            r(7526),
            r(1591),
            r(9073),
            r(347),
            r(579),
            r(4669),
            r(7710),
            r(5789),
            r(3514),
            r(9978),
            r(8472),
            r(6946),
            r(5068),
            r(413),
            r(191),
            r(8306),
            r(4564),
            r(9115),
            r(9539),
            r(6620),
            r(2850),
            r(823),
            r(7732),
            r(856),
            r(703),
            r(1539),
            r(5292),
            r(6629),
            r(3694),
            r(7648),
            r(7795),
            r(4531),
            r(3605),
            r(6780),
            r(9937),
            r(511),
            r(1822),
            r(9977),
            r(1031),
            r(6331),
            r(1560),
            r(774),
            r(522),
            r(8295),
            r(7842),
            r(110),
            r(75),
            r(4336),
            r(1802),
            r(8837),
            r(6773),
            r(5745),
            r(3057),
            r(3750),
            r(3369),
            r(9564),
            r(2e3),
            r(8977),
            r(2310),
            r(4899),
            r(1842),
            r(6997),
            r(3946),
            r(8269),
            r(6108),
            r(6774),
            r(1466),
            r(9357),
            r(6142),
            r(1876),
            r(851),
            r(8416),
            r(8184),
            r(147),
            r(9192),
            r(142),
            r(1786),
            r(5368),
            r(6964),
            r(2152),
            r(4821),
            r(9103),
            r(1303),
            r(3318),
            r(162),
            r(3834),
            r(1572),
            r(2139),
            r(685),
            r(5535),
            r(7347),
            r(3049),
            r(6633),
            r(8989),
            r(8270),
            r(4510),
            r(3984),
            r(5769),
            r(55),
            r(6014),
            t.exports = r(5645)
        }
        ,
        911: (t,e,r)=>{
            r(1268),
            t.exports = r(5645).Array.flatMap
        }
        ,
        990: (t,e,r)=>{
            r(2773),
            t.exports = r(5645).Array.includes
        }
        ,
        5434: (t,e,r)=>{
            r(3276),
            t.exports = r(5645).Object.entries
        }
        ,
        8051: (t,e,r)=>{
            r(8351),
            t.exports = r(5645).Object.getOwnPropertyDescriptors
        }
        ,
        8250: (t,e,r)=>{
            r(6409),
            t.exports = r(5645).Object.values
        }
        ,
        4952: (t,e,r)=>{
            "use strict";
            r(851),
            r(9865),
            t.exports = r(5645).Promise.finally
        }
        ,
        6197: (t,e,r)=>{
            r(2770),
            t.exports = r(5645).String.padEnd
        }
        ,
        4160: (t,e,r)=>{
            r(1784),
            t.exports = r(5645).String.padStart
        }
        ,
        4039: (t,e,r)=>{
            r(4325),
            t.exports = r(5645).String.trimRight
        }
        ,
        6728: (t,e,r)=>{
            r(5869),
            t.exports = r(5645).String.trimLeft
        }
        ,
        3568: (t,e,r)=>{
            r(9665),
            t.exports = r(8787).f("asyncIterator")
        }
        ,
        115: (t,e,r)=>{
            r(4579),
            t.exports = r(1327).global
        }
        ,
        5663: t=>{
            t.exports = function(t) {
                if ("function" != typeof t)
                    throw TypeError(t + " is not a function!");
                return t
            }
        }
        ,
        2159: (t,e,r)=>{
            var n = r(6727);
            t.exports = function(t) {
                if (n(t))
                    return t;
                throw TypeError(t + " is not an object!")
            }
        }
        ,
        1327: t=>{
            t = t.exports = {
                version: "2.6.12"
            };
            "number" == typeof __e && (__e = t)
        }
        ,
        9216: (t,e,r)=>{
            var i = r(5663);
            t.exports = function(n, o, t) {
                if (i(n),
                void 0 === o)
                    return n;
                switch (t) {
                case 1:
                    return function(t) {
                        return n.call(o, t)
                    }
                    ;
                case 2:
                    return function(t, e) {
                        return n.call(o, t, e)
                    }
                    ;
                case 3:
                    return function(t, e, r) {
                        return n.call(o, t, e, r)
                    }
                }
                return function() {
                    return n.apply(o, arguments)
                }
            }
        }
        ,
        9666: (t,e,r)=>{
            t.exports = !r(7929)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        ,
        7467: (t,e,r)=>{
            var n = r(6727)
              , o = r(3938).document
              , i = n(o) && n(o.createElement);
            t.exports = function(t) {
                return i ? o.createElement(t) : {}
            }
        }
        ,
        3856: (t,e,r)=>{
            function d(t, e, r) {
                var n, o, i, a = t & d.F, u = t & d.G, s = t & d.S, c = t & d.P, f = t & d.B, l = t & d.W, h = u ? g : g[e] || (g[e] = {}), p = h[b], y = u ? v : s ? v[e] : (v[e] || {})[b];
                for (n in r = u ? e : r)
                    (o = !a && y && void 0 !== y[n]) && w(h, n) || (i = (o ? y : r)[n],
                    h[n] = u && "function" != typeof y[n] ? r[n] : f && o ? m(i, v) : l && y[n] == i ? function(n) {
                        function t(t, e, r) {
                            if (this instanceof n) {
                                switch (arguments.length) {
                                case 0:
                                    return new n;
                                case 1:
                                    return new n(t);
                                case 2:
                                    return new n(t,e)
                                }
                                return new n(t,e,r)
                            }
                            return n.apply(this, arguments)
                        }
                        return t[b] = n[b],
                        t
                    }(i) : c && "function" == typeof i ? m(Function.call, i) : i,
                    c && ((h.virtual || (h.virtual = {}))[n] = i,
                    t & d.R && p && !p[n] && E(p, n, i)))
            }
            var v = r(3938)
              , g = r(1327)
              , m = r(9216)
              , E = r(1818)
              , w = r(7069)
              , b = "prototype";
            d.F = 1,
            d.G = 2,
            d.S = 4,
            d.P = 8,
            d.B = 16,
            d.W = 32,
            d.U = 64,
            d.R = 128,
            t.exports = d
        }
        ,
        7929: t=>{
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }
        ,
        3938: t=>{
            t = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = t)
        }
        ,
        7069: t=>{
            var r = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return r.call(t, e)
            }
        }
        ,
        1818: (t,e,r)=>{
            var n = r(4743)
              , o = r(3101);
            t.exports = r(9666) ? function(t, e, r) {
                return n.f(t, e, o(1, r))
            }
            : function(t, e, r) {
                return t[e] = r,
                t
            }
        }
        ,
        3758: (t,e,r)=>{
            t.exports = !r(9666) && !r(7929)(function() {
                return 7 != Object.defineProperty(r(7467)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        ,
        6727: t=>{
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }
        ,
        4743: (t,e,r)=>{
            var n = r(2159)
              , o = r(3758)
              , i = r(3206)
              , a = Object.defineProperty;
            e.f = r(9666) ? Object.defineProperty : function(t, e, r) {
                if (n(t),
                e = i(e, !0),
                n(r),
                o)
                    try {
                        return a(t, e, r)
                    } catch (t) {}
                if ("get"in r || "set"in r)
                    throw TypeError("Accessors not supported!");
                return "value"in r && (t[e] = r.value),
                t
            }
        }
        ,
        3101: t=>{
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }
        ,
        3206: (t,e,r)=>{
            var o = r(6727);
            t.exports = function(t, e) {
                if (!o(t))
                    return t;
                var r, n;
                if (e && "function" == typeof (r = t.toString) && !o(n = r.call(t)) || "function" == typeof (r = t.valueOf) && !o(n = r.call(t)) || !e && "function" == typeof (r = t.toString) && !o(n = r.call(t)))
                    return n;
                throw TypeError("Can't convert object to primitive value")
            }
        }
        ,
        4579: (t,e,r)=>{
            var n = r(3856);
            n(n.G, {
                global: r(3938)
            })
        }
        ,
        4963: t=>{
            t.exports = function(t) {
                if ("function" != typeof t)
                    throw TypeError(t + " is not a function!");
                return t
            }
        }
        ,
        3365: (t,e,r)=>{
            var n = r(2032);
            t.exports = function(t, e) {
                if ("number" != typeof t && "Number" != n(t))
                    throw TypeError(e);
                return +t
            }
        }
        ,
        7722: (t,e,r)=>{
            var n = r(6314)("unscopables")
              , o = Array.prototype;
            null == o[n] && r(7728)(o, n, {}),
            t.exports = function(t) {
                o[n][t] = !0
            }
        }
        ,
        6793: (t,e,r)=>{
            "use strict";
            var n = r(4496)(!0);
            t.exports = function(t, e, r) {
                return e + (r ? n(t, e).length : 1)
            }
        }
        ,
        3328: t=>{
            t.exports = function(t, e, r, n) {
                if (!(t instanceof e) || void 0 !== n && n in t)
                    throw TypeError(r + ": incorrect invocation!");
                return t
            }
        }
        ,
        7007: (t,e,r)=>{
            var n = r(5286);
            t.exports = function(t) {
                if (n(t))
                    return t;
                throw TypeError(t + " is not an object!")
            }
        }
        ,
        5216: (t,e,r)=>{
            "use strict";
            var s = r(508)
              , c = r(2337)
              , f = r(875);
            t.exports = [].copyWithin || function(t, e) {
                var r = s(this)
                  , n = f(r.length)
                  , o = c(t, n)
                  , i = c(e, n)
                  , t = 2 < arguments.length ? arguments[2] : void 0
                  , a = Math.min((void 0 === t ? n : c(t, n)) - i, n - o)
                  , u = 1;
                for (i < o && o < i + a && (u = -1,
                i += a - 1,
                o += a - 1); 0 < a--; )
                    i in r ? r[o] = r[i] : delete r[o],
                    o += u,
                    i += u;
                return r
            }
        }
        ,
        6852: (t,e,r)=>{
            "use strict";
            var a = r(508)
              , u = r(2337)
              , s = r(875);
            t.exports = function(t) {
                for (var e = a(this), r = s(e.length), n = arguments.length, o = u(1 < n ? arguments[1] : void 0, r), n = 2 < n ? arguments[2] : void 0, i = void 0 === n ? r : u(n, r); o < i; )
                    e[o++] = t;
                return e
            }
        }
        ,
        9315: (t,e,r)=>{
            var s = r(2110)
              , c = r(875)
              , f = r(2337);
            t.exports = function(u) {
                return function(t, e, r) {
                    var n, o = s(t), i = c(o.length), a = f(r, i);
                    if (u && e != e) {
                        for (; a < i; )
                            if ((n = o[a++]) != n)
                                return !0
                    } else
                        for (; a < i; a++)
                            if ((u || a in o) && o[a] === e)
                                return u || a || 0;
                    return !u && -1
                }
            }
        }
        ,
        50: (t,e,r)=>{
            var E = r(741)
              , w = r(9797)
              , b = r(508)
              , _ = r(875)
              , n = r(6886);
            t.exports = function(l, t) {
                var h = 1 == l
                  , p = 2 == l
                  , y = 3 == l
                  , d = 4 == l
                  , v = 6 == l
                  , g = 5 == l || v
                  , m = t || n;
                return function(t, e, r) {
                    for (var n, o, i = b(t), a = w(i), u = E(e, r, 3), s = _(a.length), c = 0, f = h ? m(t, s) : p ? m(t, 0) : void 0; c < s; c++)
                        if ((g || c in a) && (o = u(n = a[c], c, i),
                        l))
                            if (h)
                                f[c] = o;
                            else if (o)
                                switch (l) {
                                case 3:
                                    return !0;
                                case 5:
                                    return n;
                                case 6:
                                    return c;
                                case 2:
                                    f.push(n)
                                }
                            else if (d)
                                return !1;
                    return v ? -1 : y || d ? d : f
                }
            }
        }
        ,
        7628: (t,e,r)=>{
            var f = r(4963)
              , l = r(508)
              , h = r(9797)
              , p = r(875);
            t.exports = function(t, e, r, n, o) {
                f(e);
                var i = l(t)
                  , a = h(i)
                  , u = p(i.length)
                  , s = o ? u - 1 : 0
                  , c = o ? -1 : 1;
                if (r < 2)
                    for (; ; ) {
                        if (s in a) {
                            n = a[s],
                            s += c;
                            break
                        }
                        if (s += c,
                        o ? s < 0 : u <= s)
                            throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; o ? 0 <= s : s < u; s += c)
                    s in a && (n = e(n, a[s], s, i));
                return n
            }
        }
        ,
        2736: (t,e,r)=>{
            var n = r(5286)
              , o = r(4302)
              , i = r(6314)("species");
            t.exports = function(t) {
                var e;
                return o(t) && ("function" != typeof (e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0),
                n(e) && null === (e = e[i]) && (e = void 0)),
                void 0 === e ? Array : e
            }
        }
        ,
        6886: (t,e,r)=>{
            var n = r(2736);
            t.exports = function(t, e) {
                return new (n(t))(e)
            }
        }
        ,
        4398: (t,e,r)=>{
            "use strict";
            var n = r(4963)
              , o = r(5286)
              , f = r(7242)
              , l = [].slice
              , h = {};
            t.exports = Function.bind || function(a) {
                var u = n(this)
                  , s = l.call(arguments, 1)
                  , c = function() {
                    var t = s.concat(l.call(arguments));
                    if (this instanceof c) {
                        var e = u
                          , r = t.length
                          , n = t;
                        if (!(r in h)) {
                            for (var o = [], i = 0; i < r; i++)
                                o[i] = "a[" + i + "]";
                            h[r] = Function("F,a", "return new F(" + o.join(",") + ")")
                        }
                        return h[r](e, n)
                    }
                    return f(u, t, a)
                };
                return o(u.prototype) && (c.prototype = u.prototype),
                c
            }
        }
        ,
        1488: (t,e,r)=>{
            var n = r(2032)
              , o = r(6314)("toStringTag")
              , i = "Arguments" == n(function() {
                return arguments
            }());
            t.exports = function(t) {
                var e;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function(t, e) {
                    try {
                        return t[e]
                    } catch (t) {}
                }(t = Object(t), o)) ? e : i ? n(t) : "Object" == (e = n(t)) && "function" == typeof t.callee ? "Arguments" : e
            }
        }
        ,
        2032: t=>{
            var e = {}.toString;
            t.exports = function(t) {
                return e.call(t).slice(8, -1)
            }
        }
        ,
        9824: (t,e,r)=>{
            "use strict";
            function a(t, e) {
                var r, n = y(e);
                if ("F" !== n)
                    return t._i[n];
                for (r = t._f; r; r = r.n)
                    if (r.k == e)
                        return r
            }
            var u = r(9275).f
              , s = r(2503)
              , c = r(4408)
              , f = r(741)
              , l = r(3328)
              , h = r(3531)
              , n = r(2923)
              , o = r(5436)
              , i = r(2974)
              , p = r(7057)
              , y = r(4728).fastKey
              , d = r(1616)
              , v = p ? "_s" : "size";
            t.exports = {
                getConstructor: function(t, o, r, n) {
                    var i = t(function(t, e) {
                        l(t, i, o, "_i"),
                        t._t = o,
                        t._i = s(null),
                        t._f = void 0,
                        t._l = void 0,
                        t[v] = 0,
                        null != e && h(e, r, t[n], t)
                    });
                    return c(i.prototype, {
                        clear: function() {
                            for (var t = d(this, o), e = t._i, r = t._f; r; r = r.n)
                                r.r = !0,
                                r.p && (r.p = r.p.n = void 0),
                                delete e[r.i];
                            t._f = t._l = void 0,
                            t[v] = 0
                        },
                        delete: function(t) {
                            var e, r, n = d(this, o), t = a(n, t);
                            return t && (e = t.n,
                            r = t.p,
                            delete n._i[t.i],
                            t.r = !0,
                            r && (r.n = e),
                            e && (e.p = r),
                            n._f == t && (n._f = e),
                            n._l == t && (n._l = r),
                            n[v]--),
                            !!t
                        },
                        forEach: function(t) {
                            d(this, o);
                            for (var e, r = f(t, 1 < arguments.length ? arguments[1] : void 0, 3); e = e ? e.n : this._f; )
                                for (r(e.v, e.k, this); e && e.r; )
                                    e = e.p
                        },
                        has: function(t) {
                            return !!a(d(this, o), t)
                        }
                    }),
                    p && u(i.prototype, "size", {
                        get: function() {
                            return d(this, o)[v]
                        }
                    }),
                    i
                },
                def: function(t, e, r) {
                    var n, o = a(t, e);
                    return o ? o.v = r : (t._l = o = {
                        i: n = y(e, !0),
                        k: e,
                        v: r,
                        p: e = t._l,
                        n: void 0,
                        r: !1
                    },
                    t._f || (t._f = o),
                    e && (e.n = o),
                    t[v]++,
                    "F" !== n && (t._i[n] = o)),
                    t
                },
                getEntry: a,
                setStrong: function(t, r, e) {
                    n(t, r, function(t, e) {
                        this._t = d(t, r),
                        this._k = e,
                        this._l = void 0
                    }, function() {
                        for (var t = this, e = t._k, r = t._l; r && r.r; )
                            r = r.p;
                        return t._t && (t._l = r = r ? r.n : t._t._f) ? o(0, "keys" == e ? r.k : "values" == e ? r.v : [r.k, r.v]) : (t._t = void 0,
                        o(1))
                    }, e ? "entries" : "values", !e, !0),
                    i(r)
                }
            }
        }
        ,
        3657: (t,e,r)=>{
            "use strict";
            function a(t) {
                return t._l || (t._l = new n)
            }
            function n() {
                this.a = []
            }
            function o(t, e) {
                return d(t.a, function(t) {
                    return t[0] === e
                })
            }
            var u = r(4408)
              , s = r(4728).getWeak
              , i = r(7007)
              , c = r(5286)
              , f = r(3328)
              , l = r(3531)
              , h = r(50)
              , p = r(9181)
              , y = r(1616)
              , d = h(5)
              , v = h(6)
              , g = 0;
            n.prototype = {
                get: function(t) {
                    t = o(this, t);
                    if (t)
                        return t[1]
                },
                has: function(t) {
                    return !!o(this, t)
                },
                set: function(t, e) {
                    var r = o(this, t);
                    r ? r[1] = e : this.a.push([t, e])
                },
                delete: function(e) {
                    var t = v(this.a, function(t) {
                        return t[0] === e
                    });
                    return ~t && this.a.splice(t, 1),
                    !!~t
                }
            },
            t.exports = {
                getConstructor: function(t, r, n, o) {
                    var i = t(function(t, e) {
                        f(t, i, r, "_i"),
                        t._t = r,
                        t._i = g++,
                        t._l = void 0,
                        null != e && l(e, n, t[o], t)
                    });
                    return u(i.prototype, {
                        delete: function(t) {
                            if (!c(t))
                                return !1;
                            var e = s(t);
                            return !0 === e ? a(y(this, r)).delete(t) : e && p(e, this._i) && delete e[this._i]
                        },
                        has: function(t) {
                            if (!c(t))
                                return !1;
                            var e = s(t);
                            return !0 === e ? a(y(this, r)).has(t) : e && p(e, this._i)
                        }
                    }),
                    i
                },
                def: function(t, e, r) {
                    var n = s(i(e), !0);
                    return !0 === n ? a(t).set(e, r) : n[t._i] = r,
                    t
                },
                ufstore: a
            }
        }
        ,
        5795: (t,e,r)=>{
            "use strict";
            var g = r(3816)
              , m = r(2985)
              , E = r(7234)
              , w = r(4408)
              , b = r(4728)
              , _ = r(3531)
              , O = r(3328)
              , I = r(5286)
              , R = r(4253)
              , S = r(7462)
              , P = r(2943)
              , x = r(266);
            t.exports = function(r, t, e, n, o, i) {
                function a(t) {
                    var r = d[t];
                    E(d, t, "delete" == t ? function(t) {
                        return !(i && !I(t)) && r.call(this, 0 === t ? 0 : t)
                    }
                    : "has" == t ? function(t) {
                        return !(i && !I(t)) && r.call(this, 0 === t ? 0 : t)
                    }
                    : "get" == t ? function(t) {
                        return i && !I(t) ? void 0 : r.call(this, 0 === t ? 0 : t)
                    }
                    : "add" == t ? function(t) {
                        return r.call(this, 0 === t ? 0 : t),
                        this
                    }
                    : function(t, e) {
                        return r.call(this, 0 === t ? 0 : t, e),
                        this
                    }
                    )
                }
                var u, s, c, f, l, h = g[r], p = h, y = o ? "set" : "add", d = p && p.prototype, v = {};
                return "function" == typeof p && (i || d.forEach && !R(function() {
                    (new p).entries().next()
                })) ? (s = (u = new p)[y](i ? {} : -0, 1) != u,
                c = R(function() {
                    u.has(1)
                }),
                f = S(function(t) {
                    new p(t)
                }),
                l = !i && R(function() {
                    for (var t = new p, e = 5; e--; )
                        t[y](e, e);
                    return !t.has(-0)
                }),
                f || (((p = t(function(t, e) {
                    O(t, p, r);
                    t = x(new h, t, p);
                    return null != e && _(e, o, t[y], t),
                    t
                })).prototype = d).constructor = p),
                (c || l) && (a("delete"),
                a("has"),
                o && a("get")),
                (l || s) && a(y),
                i && d.clear && delete d.clear) : (p = n.getConstructor(t, r, o, y),
                w(p.prototype, e),
                b.NEED = !0),
                P(p, r),
                v[r] = p,
                m(m.G + m.W + m.F * (p != h), v),
                i || n.setStrong(p, r, o),
                p
            }
        }
        ,
        5645: t=>{
            t = t.exports = {
                version: "2.6.12"
            };
            "number" == typeof __e && (__e = t)
        }
        ,
        2811: (t,e,r)=>{
            "use strict";
            var n = r(9275)
              , o = r(681);
            t.exports = function(t, e, r) {
                e in t ? n.f(t, e, o(0, r)) : t[e] = r
            }
        }
        ,
        741: (t,e,r)=>{
            var i = r(4963);
            t.exports = function(n, o, t) {
                if (i(n),
                void 0 === o)
                    return n;
                switch (t) {
                case 1:
                    return function(t) {
                        return n.call(o, t)
                    }
                    ;
                case 2:
                    return function(t, e) {
                        return n.call(o, t, e)
                    }
                    ;
                case 3:
                    return function(t, e, r) {
                        return n.call(o, t, e, r)
                    }
                }
                return function() {
                    return n.apply(o, arguments)
                }
            }
        }
        ,
        3537: (t,e,r)=>{
            "use strict";
            function o(t) {
                return 9 < t ? t : "0" + t
            }
            var r = r(4253)
              , i = Date.prototype.getTime
              , n = Date.prototype.toISOString;
            t.exports = r(function() {
                return "0385-07-25T07:06:39.999Z" != n.call(new Date(-5e13 - 1))
            }) || !r(function() {
                n.call(new Date(NaN))
            }) ? function() {
                if (!isFinite(i.call(this)))
                    throw RangeError("Invalid time value");
                var t = this
                  , e = t.getUTCFullYear()
                  , r = t.getUTCMilliseconds()
                  , n = e < 0 ? "-" : 9999 < e ? "+" : "";
                return n + ("00000" + Math.abs(e)).slice(n ? -6 : -4) + "-" + o(t.getUTCMonth() + 1) + "-" + o(t.getUTCDate()) + "T" + o(t.getUTCHours()) + ":" + o(t.getUTCMinutes()) + ":" + o(t.getUTCSeconds()) + "." + (99 < r ? r : "0" + o(r)) + "Z"
            }
            : n
        }
        ,
        870: (t,e,r)=>{
            "use strict";
            var n = r(7007)
              , o = r(1689);
            t.exports = function(t) {
                if ("string" !== t && "number" !== t && "default" !== t)
                    throw TypeError("Incorrect hint");
                return o(n(this), "number" != t)
            }
        }
        ,
        1355: t=>{
            t.exports = function(t) {
                if (null == t)
                    throw TypeError("Can't call method on  " + t);
                return t
            }
        }
        ,
        7057: (t,e,r)=>{
            t.exports = !r(4253)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        ,
        2457: (t,e,r)=>{
            var n = r(5286)
              , o = r(3816).document
              , i = n(o) && n(o.createElement);
            t.exports = function(t) {
                return i ? o.createElement(t) : {}
            }
        }
        ,
        4430: t=>{
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }
        ,
        5541: (t,e,r)=>{
            var u = r(7184)
              , s = r(4548)
              , c = r(4682);
            t.exports = function(t) {
                var e = u(t)
                  , r = s.f;
                if (r)
                    for (var n, o = r(t), i = c.f, a = 0; o.length > a; )
                        i.call(t, n = o[a++]) && e.push(n);
                return e
            }
        }
        ,
        2985: (t,e,r)=>{
            function p(t, e, r) {
                var n, o, i, a = t & p.F, u = t & p.G, s = t & p.P, c = t & p.B, f = u ? y : t & p.S ? y[e] || (y[e] = {}) : (y[e] || {})[E], l = u ? d : d[e] || (d[e] = {}), h = l[E] || (l[E] = {});
                for (n in r = u ? e : r)
                    o = ((i = !a && f && void 0 !== f[n]) ? f : r)[n],
                    i = c && i ? m(o, y) : s && "function" == typeof o ? m(Function.call, o) : o,
                    f && g(f, n, o, t & p.U),
                    l[n] != o && v(l, n, i),
                    s && h[n] != o && (h[n] = o)
            }
            var y = r(3816)
              , d = r(5645)
              , v = r(7728)
              , g = r(7234)
              , m = r(741)
              , E = "prototype";
            y.core = d,
            p.F = 1,
            p.G = 2,
            p.S = 4,
            p.P = 8,
            p.B = 16,
            p.W = 32,
            p.U = 64,
            p.R = 128,
            t.exports = p
        }
        ,
        8852: (t,e,r)=>{
            var n = r(6314)("match");
            t.exports = function(e) {
                var r = /./;
                try {
                    "/./"[e](r)
                } catch (t) {
                    try {
                        return r[n] = !1,
                        !"/./"[e](r)
                    } catch (t) {}
                }
                return !0
            }
        }
        ,
        4253: t=>{
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }
        ,
        8082: (t,e,r)=>{
            "use strict";
            r(8269);
            var n, s = r(7234), c = r(7728), f = r(4253), l = r(1355), h = r(6314), p = r(1165), y = h("species"), d = !f(function() {
                var t = /./;
                return t.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    },
                    t
                }
                ,
                "7" !== "".replace(t, "$<a>")
            }), v = (n = (r = /(?:)/).exec,
            r.exec = function() {
                return n.apply(this, arguments)
            }
            ,
            2 === (r = "ab".split(r)).length && "a" === r[0] && "b" === r[1]);
            t.exports = function(r, t, e) {
                var i, n, o = h(r), a = !f(function() {
                    var t = {};
                    return t[o] = function() {
                        return 7
                    }
                    ,
                    7 != ""[r](t)
                }), u = a ? !f(function() {
                    var t = !1
                      , e = /a/;
                    return e.exec = function() {
                        return t = !0,
                        null
                    }
                    ,
                    "split" === r && (e.constructor = {},
                    e.constructor[y] = function() {
                        return e
                    }
                    ),
                    e[o](""),
                    !t
                }) : void 0;
                a && u && ("replace" !== r || d) && ("split" !== r || v) || (i = /./[o],
                e = (u = e(l, o, ""[r], function(t, e, r, n, o) {
                    return e.exec === p ? a && !o ? {
                        done: !0,
                        value: i.call(e, r, n)
                    } : {
                        done: !0,
                        value: t.call(r, e, n)
                    } : {
                        done: !1
                    }
                }))[0],
                n = u[1],
                s(String.prototype, r, e),
                c(RegExp.prototype, o, 2 == t ? function(t, e) {
                    return n.call(t, this, e)
                }
                : function(t) {
                    return n.call(t, this)
                }
                ))
            }
        }
        ,
        3218: (t,e,r)=>{
            "use strict";
            var n = r(7007);
            t.exports = function() {
                var t = n(this)
                  , e = "";
                return t.global && (e += "g"),
                t.ignoreCase && (e += "i"),
                t.multiline && (e += "m"),
                t.unicode && (e += "u"),
                t.sticky && (e += "y"),
                e
            }
        }
        ,
        3325: (t,e,r)=>{
            "use strict";
            var y = r(4302)
              , d = r(5286)
              , v = r(875)
              , g = r(741)
              , m = r(6314)("isConcatSpreadable");
            t.exports = function t(e, r, n, o, i, a, u, s) {
                for (var c, f, l = i, h = 0, p = !!u && g(u, s, 3); h < o; ) {
                    if (h in n) {
                        if (c = p ? p(n[h], h, r) : n[h],
                        f = !1,
                        (f = d(c) ? void 0 !== (f = c[m]) ? !!f : y(c) : f) && 0 < a)
                            l = t(e, r, c, v(c.length), l, a - 1) - 1;
                        else {
                            if (9007199254740991 <= l)
                                throw TypeError();
                            e[l] = c
                        }
                        l++
                    }
                    h++
                }
                return l
            }
        }
        ,
        3531: (t,e,r)=>{
            var l = r(741)
              , h = r(8851)
              , p = r(6555)
              , y = r(7007)
              , d = r(875)
              , v = r(9002)
              , g = {}
              , m = {}
              , r = t.exports = function(t, e, r, n, o) {
                var i, a, u, s, o = o ? function() {
                    return t
                }
                : v(t), c = l(r, n, e ? 2 : 1), f = 0;
                if ("function" != typeof o)
                    throw TypeError(t + " is not iterable!");
                if (p(o)) {
                    for (i = d(t.length); f < i; f++)
                        if ((s = e ? c(y(a = t[f])[0], a[1]) : c(t[f])) === g || s === m)
                            return s
                } else
                    for (u = o.call(t); !(a = u.next()).done; )
                        if ((s = h(u, c, a.value, e)) === g || s === m)
                            return s
            }
            ;
            r.BREAK = g,
            r.RETURN = m
        }
        ,
        18: (t,e,r)=>{
            t.exports = r(3825)("native-function-to-string", Function.toString)
        }
        ,
        3816: t=>{
            t = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = t)
        }
        ,
        9181: t=>{
            var r = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return r.call(t, e)
            }
        }
        ,
        7728: (t,e,r)=>{
            var n = r(9275)
              , o = r(681);
            t.exports = r(7057) ? function(t, e, r) {
                return n.f(t, e, o(1, r))
            }
            : function(t, e, r) {
                return t[e] = r,
                t
            }
        }
        ,
        639: (t,e,r)=>{
            r = r(3816).document;
            t.exports = r && r.documentElement
        }
        ,
        1734: (t,e,r)=>{
            t.exports = !r(7057) && !r(4253)(function() {
                return 7 != Object.defineProperty(r(2457)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        ,
        266: (t,e,r)=>{
            var n = r(5286)
              , o = r(7375).set;
            t.exports = function(t, e, r) {
                var e = e.constructor;
                return e !== r && "function" == typeof e && (e = e.prototype) !== r.prototype && n(e) && o && o(t, e),
                t
            }
        }
        ,
        7242: t=>{
            t.exports = function(t, e, r) {
                var n = void 0 === r;
                switch (e.length) {
                case 0:
                    return n ? t() : t.call(r);
                case 1:
                    return n ? t(e[0]) : t.call(r, e[0]);
                case 2:
                    return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
                case 3:
                    return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
                case 4:
                    return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
                }
                return t.apply(r, e)
            }
        }
        ,
        9797: (t,e,r)=>{
            var n = r(2032);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == n(t) ? t.split("") : Object(t)
            }
        }
        ,
        6555: (t,e,r)=>{
            var n = r(2803)
              , o = r(6314)("iterator")
              , i = Array.prototype;
            t.exports = function(t) {
                return void 0 !== t && (n.Array === t || i[o] === t)
            }
        }
        ,
        4302: (t,e,r)=>{
            var n = r(2032);
            t.exports = Array.isArray || function(t) {
                return "Array" == n(t)
            }
        }
        ,
        8367: (t,e,r)=>{
            var n = r(5286)
              , o = Math.floor;
            t.exports = function(t) {
                return !n(t) && isFinite(t) && o(t) === t
            }
        }
        ,
        5286: t=>{
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }
        ,
        5364: (t,e,r)=>{
            var n = r(5286)
              , o = r(2032)
              , i = r(6314)("match");
            t.exports = function(t) {
                var e;
                return n(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
            }
        }
        ,
        8851: (t,e,r)=>{
            var o = r(7007);
            t.exports = function(e, t, r, n) {
                try {
                    return n ? t(o(r)[0], r[1]) : t(r)
                } catch (t) {
                    n = e.return;
                    throw void 0 !== n && o(n.call(e)),
                    t
                }
            }
        }
        ,
        9988: (t,e,r)=>{
            "use strict";
            var n = r(2503)
              , o = r(681)
              , i = r(2943)
              , a = {};
            r(7728)(a, r(6314)("iterator"), function() {
                return this
            }),
            t.exports = function(t, e, r) {
                t.prototype = n(a, {
                    next: o(1, r)
                }),
                i(t, e + " Iterator")
            }
        }
        ,
        2923: (t,e,r)=>{
            "use strict";
            function g() {
                return this
            }
            var m = r(4461)
              , E = r(2985)
              , w = r(7234)
              , b = r(7728)
              , _ = r(2803)
              , O = r(9988)
              , I = r(2943)
              , R = r(468)
              , S = r(6314)("iterator")
              , P = !([].keys && "next"in [].keys())
              , x = "values";
            t.exports = function(t, e, r, n, o, i, a) {
                O(r, e, n);
                function u(t) {
                    if (!P && t in h)
                        return h[t];
                    switch (t) {
                    case "keys":
                    case x:
                        return function() {
                            return new r(this,t)
                        }
                    }
                    return function() {
                        return new r(this,t)
                    }
                }
                var s, c, n = e + " Iterator", f = o == x, l = !1, h = t.prototype, p = h[S] || h["@@iterator"] || o && h[o], y = p || u(o), d = o ? f ? u("entries") : y : void 0, v = "Array" == e && h.entries || p;
                if (v && (v = R(v.call(new t))) !== Object.prototype && v.next && (I(v, n, !0),
                m || "function" == typeof v[S] || b(v, S, g)),
                f && p && p.name !== x && (l = !0,
                y = function() {
                    return p.call(this)
                }
                ),
                m && !a || !P && !l && h[S] || b(h, S, y),
                _[e] = y,
                _[n] = g,
                o)
                    if (s = {
                        values: f ? y : u(x),
                        keys: i ? y : u("keys"),
                        entries: d
                    },
                    a)
                        for (c in s)
                            c in h || w(h, c, s[c]);
                    else
                        E(E.P + E.F * (P || l), e, s);
                return s
            }
        }
        ,
        7462: (t,e,r)=>{
            var i = r(6314)("iterator")
              , a = !1;
            try {
                var n = [7][i]();
                n.return = function() {
                    a = !0
                }
                ,
                Array.from(n, function() {
                    throw 2
                })
            } catch (t) {}
            t.exports = function(t, e) {
                if (!e && !a)
                    return !1;
                var r = !1;
                try {
                    var n = [7]
                      , o = n[i]();
                    o.next = function() {
                        return {
                            done: r = !0
                        }
                    }
                    ,
                    n[i] = function() {
                        return o
                    }
                    ,
                    t(n)
                } catch (t) {}
                return r
            }
        }
        ,
        5436: t=>{
            t.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        }
        ,
        2803: t=>{
            t.exports = {}
        }
        ,
        4461: t=>{
            t.exports = !1
        }
        ,
        3086: t=>{
            var e = Math.expm1;
            t.exports = !e || 22025.465794806718 < e(10) || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17) ? function(t) {
                return 0 == (t = +t) ? t : -1e-6 < t && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
            }
            : e
        }
        ,
        4934: (t,e,r)=>{
            var n = r(1801)
              , r = Math.pow
              , o = r(2, -52)
              , i = r(2, -23)
              , a = r(2, 127) * (2 - i)
              , u = r(2, -126);
            t.exports = Math.fround || function(t) {
                var e, r = Math.abs(t), t = n(t);
                return r < u ? t * (r / u / i + 1 / o - 1 / o) * u * i : a < (e = (e = (1 + i / o) * r) - (e - r)) || e != e ? t * (1 / 0) : t * e
            }
        }
        ,
        6206: t=>{
            t.exports = Math.log1p || function(t) {
                return -1e-8 < (t = +t) && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
            }
        }
        ,
        1801: t=>{
            t.exports = Math.sign || function(t) {
                return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
            }
        }
        ,
        4728: (t,e,r)=>{
            function n(t) {
                u(t, o, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                })
            }
            var o = r(3953)("meta")
              , i = r(5286)
              , a = r(9181)
              , u = r(9275).f
              , s = 0
              , c = Object.isExtensible || function() {
                return !0
            }
              , f = !r(4253)(function() {
                return c(Object.preventExtensions({}))
            })
              , l = t.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!i(t))
                        return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!a(t, o)) {
                        if (!c(t))
                            return "F";
                        if (!e)
                            return "E";
                        n(t)
                    }
                    return t[o].i
                },
                getWeak: function(t, e) {
                    if (!a(t, o)) {
                        if (!c(t))
                            return !0;
                        if (!e)
                            return !1;
                        n(t)
                    }
                    return t[o].w
                },
                onFreeze: function(t) {
                    return f && l.NEED && c(t) && !a(t, o) && n(t),
                    t
                }
            }
        }
        ,
        4351: (t,e,r)=>{
            var u = r(3816)
              , s = r(4193).set
              , c = u.MutationObserver || u.WebKitMutationObserver
              , f = u.process
              , l = u.Promise
              , h = "process" == r(2032)(f);
            t.exports = function() {
                function t() {
                    var t, e;
                    for (h && (t = f.domain) && t.exit(); r; ) {
                        e = r.fn,
                        r = r.next;
                        try {
                            e()
                        } catch (t) {
                            throw r ? o() : n = void 0,
                            t
                        }
                    }
                    n = void 0,
                    t && t.enter()
                }
                var r, n, e, o, i, a;
                return o = h ? function() {
                    f.nextTick(t)
                }
                : !c || u.navigator && u.navigator.standalone ? l && l.resolve ? (e = l.resolve(void 0),
                function() {
                    e.then(t)
                }
                ) : function() {
                    s.call(u, t)
                }
                : (i = !0,
                a = document.createTextNode(""),
                new c(t).observe(a, {
                    characterData: !0
                }),
                function() {
                    a.data = i = !i
                }
                ),
                function(t) {
                    t = {
                        fn: t,
                        next: void 0
                    };
                    n && (n.next = t),
                    r || (r = t,
                    o()),
                    n = t
                }
            }
        }
        ,
        3499: (t,e,r)=>{
            "use strict";
            var o = r(4963);
            function n(t) {
                var r, n;
                this.promise = new t(function(t, e) {
                    if (void 0 !== r || void 0 !== n)
                        throw TypeError("Bad Promise constructor");
                    r = t,
                    n = e
                }
                ),
                this.resolve = o(r),
                this.reject = o(n)
            }
            t.exports.f = function(t) {
                return new n(t)
            }
        }
        ,
        5345: (t,e,r)=>{
            "use strict";
            var h = r(7057)
              , p = r(7184)
              , y = r(4548)
              , d = r(4682)
              , v = r(508)
              , g = r(9797)
              , o = Object.assign;
            t.exports = !o || r(4253)(function() {
                var t = {}
                  , e = {}
                  , r = Symbol()
                  , n = "abcdefghijklmnopqrst";
                return t[r] = 7,
                n.split("").forEach(function(t) {
                    e[t] = t
                }),
                7 != o({}, t)[r] || Object.keys(o({}, e)).join("") != n
            }) ? function(t, e) {
                for (var r = v(t), n = arguments.length, o = 1, i = y.f, a = d.f; o < n; )
                    for (var u, s = g(arguments[o++]), c = i ? p(s).concat(i(s)) : p(s), f = c.length, l = 0; l < f; )
                        u = c[l++],
                        h && !a.call(s, u) || (r[u] = s[u]);
                return r
            }
            : o
        }
        ,
        2503: (t,e,r)=>{
            function n() {}
            var o = r(7007)
              , i = r(5588)
              , a = r(4430)
              , u = r(9335)("IE_PROTO")
              , s = "prototype"
              , c = function() {
                var t = r(2457)("iframe")
                  , e = a.length;
                for (t.style.display = "none",
                r(639).appendChild(t),
                t.src = "javascript:",
                (t = t.contentWindow.document).open(),
                t.write("<script>document.F=Object<\/script>"),
                t.close(),
                c = t.F; e--; )
                    delete c[s][a[e]];
                return c()
            };
            t.exports = Object.create || function(t, e) {
                var r;
                return null !== t ? (n[s] = o(t),
                r = new n,
                n[s] = null,
                r[u] = t) : r = c(),
                void 0 === e ? r : i(r, e)
            }
        }
        ,
        9275: (t,e,r)=>{
            var n = r(7007)
              , o = r(1734)
              , i = r(1689)
              , a = Object.defineProperty;
            e.f = r(7057) ? Object.defineProperty : function(t, e, r) {
                if (n(t),
                e = i(e, !0),
                n(r),
                o)
                    try {
                        return a(t, e, r)
                    } catch (t) {}
                if ("get"in r || "set"in r)
                    throw TypeError("Accessors not supported!");
                return "value"in r && (t[e] = r.value),
                t
            }
        }
        ,
        5588: (t,e,r)=>{
            var a = r(9275)
              , u = r(7007)
              , s = r(7184);
            t.exports = r(7057) ? Object.defineProperties : function(t, e) {
                u(t);
                for (var r, n = s(e), o = n.length, i = 0; i < o; )
                    a.f(t, r = n[i++], e[r]);
                return t
            }
        }
        ,
        8693: (t,e,r)=>{
            var n = r(4682)
              , o = r(681)
              , i = r(2110)
              , a = r(1689)
              , u = r(9181)
              , s = r(1734)
              , c = Object.getOwnPropertyDescriptor;
            e.f = r(7057) ? c : function(t, e) {
                if (t = i(t),
                e = a(e, !0),
                s)
                    try {
                        return c(t, e)
                    } catch (t) {}
                if (u(t, e))
                    return o(!n.f.call(t, e), t[e])
            }
        }
        ,
        9327: (t,e,r)=>{
            var n = r(2110)
              , o = r(616).f
              , i = {}.toString
              , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function(t) {
                if (!a || "[object Window]" != i.call(t))
                    return o(n(t));
                try {
                    return o(t)
                } catch (t) {
                    return a.slice()
                }
            }
        }
        ,
        616: (t,e,r)=>{
            var n = r(189)
              , o = r(4430).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return n(t, o)
            }
        }
        ,
        4548: (t,e)=>{
            e.f = Object.getOwnPropertySymbols
        }
        ,
        468: (t,e,r)=>{
            var n = r(9181)
              , o = r(508)
              , i = r(9335)("IE_PROTO")
              , a = Object.prototype;
            t.exports = Object.getPrototypeOf || function(t) {
                return t = o(t),
                n(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
            }
        }
        ,
        189: (t,e,r)=>{
            var a = r(9181)
              , u = r(2110)
              , s = r(9315)(!1)
              , c = r(9335)("IE_PROTO");
            t.exports = function(t, e) {
                var r, n = u(t), o = 0, i = [];
                for (r in n)
                    r != c && a(n, r) && i.push(r);
                for (; e.length > o; )
                    !a(n, r = e[o++]) || ~s(i, r) || i.push(r);
                return i
            }
        }
        ,
        7184: (t,e,r)=>{
            var n = r(189)
              , o = r(4430);
            t.exports = Object.keys || function(t) {
                return n(t, o)
            }
        }
        ,
        4682: (t,e)=>{
            e.f = {}.propertyIsEnumerable
        }
        ,
        3160: (t,e,r)=>{
            var o = r(2985)
              , i = r(5645)
              , a = r(4253);
            t.exports = function(t, e) {
                var r = (i.Object || {})[t] || Object[t]
                  , n = {};
                n[t] = e(r),
                o(o.S + o.F * a(function() {
                    r(1)
                }), "Object", n)
            }
        }
        ,
        1131: (t,e,r)=>{
            var s = r(7057)
              , c = r(7184)
              , f = r(2110)
              , l = r(4682).f;
            t.exports = function(u) {
                return function(t) {
                    for (var e, r = f(t), n = c(r), o = n.length, i = 0, a = []; i < o; )
                        e = n[i++],
                        s && !l.call(r, e) || a.push(u ? [e, r[e]] : r[e]);
                    return a
                }
            }
        }
        ,
        7643: (t,e,r)=>{
            var n = r(616)
              , o = r(4548)
              , i = r(7007)
              , r = r(3816).Reflect;
            t.exports = r && r.ownKeys || function(t) {
                var e = n.f(i(t))
                  , r = o.f;
                return r ? e.concat(r(t)) : e
            }
        }
        ,
        7743: (t,e,r)=>{
            var n = r(3816).parseFloat
              , o = r(9599).trim;
            t.exports = 1 / n(r(4644) + "-0") != -1 / 0 ? function(t) {
                var t = o(String(t), 3)
                  , e = n(t);
                return 0 === e && "-" == t.charAt(0) ? -0 : e
            }
            : n
        }
        ,
        5960: (t,e,r)=>{
            var n = r(3816).parseInt
              , o = r(9599).trim
              , r = r(4644)
              , i = /^[-+]?0[xX]/;
            t.exports = 8 !== n(r + "08") || 22 !== n(r + "0x16") ? function(t, e) {
                t = o(String(t), 3);
                return n(t, e >>> 0 || (i.test(t) ? 16 : 10))
            }
            : n
        }
        ,
        188: t=>{
            t.exports = function(t) {
                try {
                    return {
                        e: !1,
                        v: t()
                    }
                } catch (t) {
                    return {
                        e: !0,
                        v: t
                    }
                }
            }
        }
        ,
        94: (t,e,r)=>{
            var n = r(7007)
              , o = r(5286)
              , i = r(3499);
            t.exports = function(t, e) {
                if (n(t),
                o(e) && e.constructor === t)
                    return e;
                t = i.f(t);
                return (0,
                t.resolve)(e),
                t.promise
            }
        }
        ,
        681: t=>{
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }
        ,
        4408: (t,e,r)=>{
            var o = r(7234);
            t.exports = function(t, e, r) {
                for (var n in e)
                    o(t, n, e[n], r);
                return t
            }
        }
        ,
        7234: (t,e,r)=>{
            var i = r(3816)
              , a = r(7728)
              , u = r(9181)
              , s = r(3953)("src")
              , n = r(18)
              , o = "toString"
              , c = ("" + n).split(o);
            r(5645).inspectSource = function(t) {
                return n.call(t)
            }
            ,
            (t.exports = function(t, e, r, n) {
                var o = "function" == typeof r;
                o && !u(r, "name") && a(r, "name", e),
                t[e] !== r && (o && !u(r, s) && a(r, s, t[e] ? "" + t[e] : c.join(String(e))),
                t === i ? t[e] = r : n ? t[e] ? t[e] = r : a(t, e, r) : (delete t[e],
                a(t, e, r)))
            }
            )(Function.prototype, o, function() {
                return "function" == typeof this && this[s] || n.call(this)
            })
        }
        ,
        7787: (t,e,r)=>{
            "use strict";
            var n = r(1488)
              , o = RegExp.prototype.exec;
            t.exports = function(t, e) {
                var r = t.exec;
                if ("function" == typeof r) {
                    r = r.call(t, e);
                    if ("object" != typeof r)
                        throw new TypeError("RegExp exec method returned something other than an Object or null");
                    return r
                }
                if ("RegExp" !== n(t))
                    throw new TypeError("RegExp#exec called on incompatible receiver");
                return o.call(t, e)
            }
        }
        ,
        1165: (t,e,r)=>{
            "use strict";
            var n, o, a = r(3218), u = RegExp.prototype.exec, s = String.prototype.replace, r = u, c = "lastIndex", f = (n = /a/,
            o = /b*/g,
            u.call(n, "a"),
            u.call(o, "a"),
            0 !== n[c] || 0 !== o[c]), l = void 0 !== /()??/.exec("")[1];
            t.exports = r = f || l ? function(t) {
                var e, r, n, o, i = this;
                return l && (r = new RegExp("^" + i.source + "$(?!\\s)",a.call(i))),
                f && (e = i[c]),
                n = u.call(i, t),
                f && n && (i[c] = i.global ? n.index + n[0].length : e),
                l && n && 1 < n.length && s.call(n[0], r, function() {
                    for (o = 1; o < arguments.length - 2; o++)
                        void 0 === arguments[o] && (n[o] = void 0)
                }),
                n
            }
            : r
        }
        ,
        7195: t=>{
            t.exports = Object.is || function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }
        }
        ,
        7375: (t,e,o)=>{
            function i(t, e) {
                if (n(t),
                !r(e) && null !== e)
                    throw TypeError(e + ": can't set as prototype!")
            }
            var r = o(5286)
              , n = o(7007);
            t.exports = {
                set: Object.setPrototypeOf || ("__proto__"in {} ? function(t, r, n) {
                    try {
                        (n = o(741)(Function.call, o(8693).f(Object.prototype, "__proto__").set, 2))(t, []),
                        r = !(t instanceof Array)
                    } catch (t) {
                        r = !0
                    }
                    return function(t, e) {
                        return i(t, e),
                        r ? t.__proto__ = e : n(t, e),
                        t
                    }
                }({}, !1) : void 0),
                check: i
            }
        }
        ,
        2974: (t,e,r)=>{
            "use strict";
            var n = r(3816)
              , o = r(9275)
              , i = r(7057)
              , a = r(6314)("species");
            t.exports = function(t) {
                t = n[t];
                i && t && !t[a] && o.f(t, a, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }
        ,
        2943: (t,e,r)=>{
            var n = r(9275).f
              , o = r(9181)
              , i = r(6314)("toStringTag");
            t.exports = function(t, e, r) {
                t && !o(t = r ? t : t.prototype, i) && n(t, i, {
                    configurable: !0,
                    value: e
                })
            }
        }
        ,
        9335: (t,e,r)=>{
            var n = r(3825)("keys")
              , o = r(3953);
            t.exports = function(t) {
                return n[t] || (n[t] = o(t))
            }
        }
        ,
        3825: (t,e,r)=>{
            var n = r(5645)
              , o = r(3816)
              , i = "__core-js_shared__"
              , a = o[i] || (o[i] = {});
            (t.exports = function(t, e) {
                return a[t] || (a[t] = void 0 !== e ? e : {})
            }
            )("versions", []).push({
                version: n.version,
                mode: r(4461) ? "pure" : "global",
                copyright: "?? 2020 Denis Pushkarev (zloirock.ru)"
            })
        }
        ,
        8364: (t,e,r)=>{
            var n = r(7007)
              , o = r(4963)
              , i = r(6314)("species");
            t.exports = function(t, e) {
                var t = n(t).constructor;
                return void 0 === t || null == (t = n(t)[i]) ? e : o(t)
            }
        }
        ,
        7717: (t,e,r)=>{
            "use strict";
            var n = r(4253);
            t.exports = function(t, e) {
                return !!t && n(function() {
                    e ? t.call(null, function() {}, 1) : t.call(null)
                })
            }
        }
        ,
        4496: (t,e,r)=>{
            var i = r(1467)
              , a = r(1355);
            t.exports = function(o) {
                return function(t, e) {
                    var r, t = String(a(t)), e = i(e), n = t.length;
                    return e < 0 || n <= e ? o ? "" : void 0 : (r = t.charCodeAt(e)) < 55296 || 56319 < r || e + 1 === n || (n = t.charCodeAt(e + 1)) < 56320 || 57343 < n ? o ? t.charAt(e) : r : o ? t.slice(e, e + 2) : n - 56320 + (r - 55296 << 10) + 65536
                }
            }
        }
        ,
        2094: (t,e,r)=>{
            var n = r(5364)
              , o = r(1355);
            t.exports = function(t, e, r) {
                if (n(e))
                    throw TypeError("String#" + r + " doesn't accept regex!");
                return String(o(t))
            }
        }
        ,
        9395: (t,e,r)=>{
            function n(t, e, r, n) {
                var t = String(a(t))
                  , o = "<" + e;
                return "" !== r && (o += " " + r + '="' + String(n).replace(u, "&quot;") + '"'),
                o + ">" + t + "</" + e + ">"
            }
            var o = r(2985)
              , i = r(4253)
              , a = r(1355)
              , u = /"/g;
            t.exports = function(e, t) {
                var r = {};
                r[e] = t(n),
                o(o.P + o.F * i(function() {
                    var t = ""[e]('"');
                    return t !== t.toLowerCase() || 3 < t.split('"').length
                }), "String", r)
            }
        }
        ,
        5442: (t,e,r)=>{
            var i = r(875)
              , a = r(8595)
              , u = r(1355);
            t.exports = function(t, e, r, n) {
                var t = String(u(t))
                  , o = t.length
                  , r = void 0 === r ? " " : String(r)
                  , e = i(e);
                if (e <= o || "" == r)
                    return t;
                e -= o,
                o = a.call(r, Math.ceil(e / r.length));
                return o.length > e && (o = o.slice(0, e)),
                n ? o + t : t + o
            }
        }
        ,
        8595: (t,e,r)=>{
            "use strict";
            var o = r(1467)
              , i = r(1355);
            t.exports = function(t) {
                var e = String(i(this))
                  , r = ""
                  , n = o(t);
                if (n < 0 || n == 1 / 0)
                    throw RangeError("Count can't be negative");
                for (; 0 < n; (n >>>= 1) && (e += e))
                    1 & n && (r += e);
                return r
            }
        }
        ,
        9599: (t,e,r)=>{
            function n(t, e, r) {
                var n = {}
                  , o = a(function() {
                    return !!u[t]() || "?????" != "?????"[t]()
                })
                  , e = n[t] = o ? e(f) : u[t];
                r && (n[r] = e),
                i(i.P + i.F * o, "String", n)
            }
            var i = r(2985)
              , o = r(1355)
              , a = r(4253)
              , u = r(4644)
              , r = "[" + u + "]"
              , s = RegExp("^" + r + r + "*")
              , c = RegExp(r + r + "*$")
              , f = n.trim = function(t, e) {
                return t = String(o(t)),
                1 & e && (t = t.replace(s, "")),
                t = 2 & e ? t.replace(c, "") : t
            }
            ;
            t.exports = n
        }
        ,
        4644: t=>{
            t.exports = "\t\n\v\f\r ??????????????????????????????????????????????????\u2028\u2029\ufeff"
        }
        ,
        4193: (t,e,r)=>{
            function n() {
                var t, e = +this;
                g.hasOwnProperty(e) && (t = g[e],
                delete g[e],
                t())
            }
            function o(t) {
                n.call(t.data)
            }
            var i, a = r(741), u = r(7242), s = r(639), c = r(2457), f = r(3816), l = f.process, h = f.setImmediate, p = f.clearImmediate, y = f.MessageChannel, d = f.Dispatch, v = 0, g = {}, m = "onreadystatechange";
            h && p || (h = function(t) {
                for (var e = [], r = 1; r < arguments.length; )
                    e.push(arguments[r++]);
                return g[++v] = function() {
                    u("function" == typeof t ? t : Function(t), e)
                }
                ,
                i(v),
                v
            }
            ,
            p = function(t) {
                delete g[t]
            }
            ,
            "process" == r(2032)(l) ? i = function(t) {
                l.nextTick(a(n, t, 1))
            }
            : d && d.now ? i = function(t) {
                d.now(a(n, t, 1))
            }
            : y ? (y = (r = new y).port2,
            r.port1.onmessage = o,
            i = a(y.postMessage, y, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (i = function(t) {
                f.postMessage(t + "", "*")
            }
            ,
            f.addEventListener("message", o, !1)) : i = m in c("script") ? function(t) {
                s.appendChild(c("script"))[m] = function() {
                    s.removeChild(this),
                    n.call(t)
                }
            }
            : function(t) {
                setTimeout(a(n, t, 1), 0)
            }
            ),
            t.exports = {
                set: h,
                clear: p
            }
        }
        ,
        2337: (t,e,r)=>{
            var n = r(1467)
              , o = Math.max
              , i = Math.min;
            t.exports = function(t, e) {
                return (t = n(t)) < 0 ? o(t + e, 0) : i(t, e)
            }
        }
        ,
        4843: (t,e,r)=>{
            var n = r(1467)
              , o = r(875);
            t.exports = function(t) {
                if (void 0 === t)
                    return 0;
                var t = n(t)
                  , e = o(t);
                if (t !== e)
                    throw RangeError("Wrong length!");
                return e
            }
        }
        ,
        1467: t=>{
            var e = Math.ceil
              , r = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (0 < t ? r : e)(t)
            }
        }
        ,
        2110: (t,e,r)=>{
            var n = r(9797)
              , o = r(1355);
            t.exports = function(t) {
                return n(o(t))
            }
        }
        ,
        875: (t,e,r)=>{
            var n = r(1467)
              , o = Math.min;
            t.exports = function(t) {
                return 0 < t ? o(n(t), 9007199254740991) : 0
            }
        }
        ,
        508: (t,e,r)=>{
            var n = r(1355);
            t.exports = function(t) {
                return Object(n(t))
            }
        }
        ,
        1689: (t,e,r)=>{
            var o = r(5286);
            t.exports = function(t, e) {
                if (!o(t))
                    return t;
                var r, n;
                if (e && "function" == typeof (r = t.toString) && !o(n = r.call(t)) || "function" == typeof (r = t.valueOf) && !o(n = r.call(t)) || !e && "function" == typeof (r = t.toString) && !o(n = r.call(t)))
                    return n;
                throw TypeError("Can't convert object to primitive value")
            }
        }
        ,
        8440: (C,j,t)=>{
            "use strict";
            var p, y, d, v, g, B, M, U, m, e, V, E, G, Y, q, n, K, w, W, J, H, X, b, Q, z, Z, r, o, $, tt, et, rt, nt, ot, _, it, O, at, i, ut, st, ct, I, R, ft, lt, ht, pt, yt, dt, vt, gt, mt, Et, wt, bt, _t, Ot, It, Rt, St, Pt, S, a, P, x, xt, T, u, N, Tt, k, Nt, kt, At, A, s, l, Lt, L, c, Dt, Ft, Ct, jt, Bt, Mt, Ut, D, Vt, f, h, F;
            t(7057) ? (p = t(4461),
            y = t(3816),
            d = t(4253),
            v = t(2985),
            g = t(9383),
            u = t(1125),
            B = t(741),
            M = t(3328),
            U = t(681),
            m = t(7728),
            e = t(4408),
            V = t(1467),
            E = t(875),
            G = t(4843),
            Y = t(2337),
            q = t(1689),
            n = t(9181),
            K = t(1488),
            w = t(5286),
            W = t(508),
            J = t(6555),
            H = t(2503),
            X = t(468),
            b = t(616).f,
            Q = t(9002),
            z = t(3953),
            Z = t(6314),
            r = t(50),
            c = t(9315),
            o = t(8364),
            f = t(6997),
            $ = t(2803),
            tt = t(7462),
            et = t(2974),
            rt = t(6852),
            nt = t(5216),
            ot = t(9275),
            t = t(8693),
            _ = ot.f,
            it = t.f,
            O = y.RangeError,
            at = y.TypeError,
            i = y.Uint8Array,
            st = "Shared" + (ut = "ArrayBuffer"),
            ct = "BYTES_PER_ELEMENT",
            I = "prototype",
            h = Array[I],
            R = u.ArrayBuffer,
            ft = u.DataView,
            lt = r(0),
            ht = r(2),
            pt = r(3),
            yt = r(4),
            dt = r(5),
            vt = r(6),
            gt = c(!0),
            mt = c(!1),
            Et = f.values,
            wt = f.keys,
            bt = f.entries,
            _t = h.lastIndexOf,
            Ot = h.reduce,
            It = h.reduceRight,
            Rt = h.join,
            St = h.sort,
            Pt = h.slice,
            S = h.toString,
            a = h.toLocaleString,
            P = Z("iterator"),
            x = Z("toStringTag"),
            xt = z("typed_constructor"),
            T = z("def_constructor"),
            u = g.CONSTR,
            N = g.TYPED,
            Tt = g.VIEW,
            k = "Wrong length!",
            Nt = r(1, function(t, e) {
                return l(o(t, t[T]), e)
            }),
            kt = d(function() {
                return 1 === new i(new Uint16Array([1]).buffer)[0]
            }),
            At = !!i && !!i[I].set && d(function() {
                new i(1).set({})
            }),
            A = function(t, e) {
                t = V(t);
                if (t < 0 || t % e)
                    throw O("Wrong offset!");
                return t
            }
            ,
            s = function(t) {
                if (w(t) && N in t)
                    return t;
                throw at(t + " is not a typed array!")
            }
            ,
            l = function(t, e) {
                if (w(t) && xt in t)
                    return new t(e);
                throw at("It is not a typed array constructor!")
            }
            ,
            Lt = function(t, e) {
                return L(o(t, t[T]), e)
            }
            ,
            L = function(t, e) {
                for (var r = 0, n = e.length, o = l(t, n); r < n; )
                    o[r] = e[r++];
                return o
            }
            ,
            c = function(t, e, r) {
                _(t, e, {
                    get: function() {
                        return this._d[r]
                    }
                })
            }
            ,
            Dt = function(t) {
                var e, r, n, o, i, a, u = W(t), t = arguments.length, s = 1 < t ? arguments[1] : void 0, c = void 0 !== s, f = Q(u);
                if (null != f && !J(f)) {
                    for (a = f.call(u),
                    n = [],
                    e = 0; !(i = a.next()).done; e++)
                        n.push(i.value);
                    u = n
                }
                for (c && 2 < t && (s = B(s, arguments[2], 2)),
                e = 0,
                r = E(u.length),
                o = l(this, r); e < r; e++)
                    o[e] = c ? s(u[e], e) : u[e];
                return o
            }
            ,
            Ft = function() {
                for (var t = 0, e = arguments.length, r = l(this, e); t < e; )
                    r[t] = arguments[t++];
                return r
            }
            ,
            Ct = !!i && d(function() {
                a.call(new i(1))
            }),
            jt = function() {
                return a.apply(Ct ? Pt.call(s(this)) : s(this), arguments)
            }
            ,
            Bt = {
                copyWithin: function(t, e) {
                    return nt.call(s(this), t, e, 2 < arguments.length ? arguments[2] : void 0)
                },
                every: function(t) {
                    return yt(s(this), t, 1 < arguments.length ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return rt.apply(s(this), arguments)
                },
                filter: function(t) {
                    return Lt(this, ht(s(this), t, 1 < arguments.length ? arguments[1] : void 0))
                },
                find: function(t) {
                    return dt(s(this), t, 1 < arguments.length ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return vt(s(this), t, 1 < arguments.length ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    lt(s(this), t, 1 < arguments.length ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return mt(s(this), t, 1 < arguments.length ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return gt(s(this), t, 1 < arguments.length ? arguments[1] : void 0)
                },
                join: function(t) {
                    return Rt.apply(s(this), arguments)
                },
                lastIndexOf: function(t) {
                    return _t.apply(s(this), arguments)
                },
                map: function(t) {
                    return Nt(s(this), t, 1 < arguments.length ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return Ot.apply(s(this), arguments)
                },
                reduceRight: function(t) {
                    return It.apply(s(this), arguments)
                },
                reverse: function() {
                    for (var t, e = this, r = s(e).length, n = Math.floor(r / 2), o = 0; o < n; )
                        t = e[o],
                        e[o++] = e[--r],
                        e[r] = t;
                    return e
                },
                some: function(t) {
                    return pt(s(this), t, 1 < arguments.length ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return St.call(s(this), t)
                },
                subarray: function(t, e) {
                    var r = s(this)
                      , n = r.length
                      , t = Y(t, n);
                    return new (o(r, r[T]))(r.buffer,r.byteOffset + t * r.BYTES_PER_ELEMENT,E((void 0 === e ? n : Y(e, n)) - t))
                }
            },
            Mt = function(t, e) {
                return Lt(this, Pt.call(s(this), t, e))
            }
            ,
            Ut = function(t) {
                s(this);
                var e = A(arguments[1], 1)
                  , r = this.length
                  , n = W(t)
                  , o = E(n.length)
                  , i = 0;
                if (r < o + e)
                    throw O(k);
                for (; i < o; )
                    this[e + i] = n[i++]
            }
            ,
            D = {
                entries: function() {
                    return bt.call(s(this))
                },
                keys: function() {
                    return wt.call(s(this))
                },
                values: function() {
                    return Et.call(s(this))
                }
            },
            Vt = function(t, e) {
                return w(t) && t[N] && "symbol" != typeof e && e in t && String(+e) == String(e)
            }
            ,
            f = function(t, e) {
                return Vt(t, e = q(e, !0)) ? U(2, t[e]) : it(t, e)
            }
            ,
            h = function(t, e, r) {
                return !(Vt(t, e = q(e, !0)) && w(r) && n(r, "value")) || n(r, "get") || n(r, "set") || r.configurable || n(r, "writable") && !r.writable || n(r, "enumerable") && !r.enumerable ? _(t, e, r) : (t[e] = r.value,
                t)
            }
            ,
            u || (t.f = f,
            ot.f = h),
            v(v.S + v.F * !u, "Object", {
                getOwnPropertyDescriptor: f,
                defineProperty: h
            }),
            d(function() {
                S.call({})
            }) && (S = a = function() {
                return Rt.call(this)
            }
            ),
            F = e({}, Bt),
            e(F, D),
            m(F, P, D.values),
            e(F, {
                slice: Mt,
                set: Ut,
                constructor: function() {},
                toString: S,
                toLocaleString: jt
            }),
            c(F, "buffer", "b"),
            c(F, "byteOffset", "o"),
            c(F, "byteLength", "l"),
            c(F, "length", "e"),
            _(F, x, {
                get: function() {
                    return this[N]
                }
            }),
            C.exports = function(t, c, e, o) {
                function f(t, n) {
                    _(t, n, {
                        get: function() {
                            var t = this
                              , e = n;
                            return (t = t._d).v[r](e * c + t.o, kt)
                        },
                        set: function(t) {
                            var e = this
                              , r = n;
                            e = e._d,
                            o && (t = (t = Math.round(t)) < 0 ? 0 : 255 < t ? 255 : 255 & t),
                            e.v[i](r * c + e.o, t, kt)
                        },
                        enumerable: !0
                    })
                }
                var l = t + ((o = !!o) ? "Clamped" : "") + "Array"
                  , r = "get" + t
                  , i = "set" + t
                  , h = y[l]
                  , a = h || {}
                  , t = h && X(h)
                  , n = !h || !g.ABV
                  , u = {}
                  , s = h && h[I]
                  , n = (n ? (h = e(function(t, e, r, n) {
                    M(t, h, l, "_d");
                    var o, i, a = 0, u = 0;
                    if (w(e)) {
                        if (!(e instanceof R || (s = K(e)) == ut || s == st))
                            return N in e ? L(h, e) : Dt.call(h, e);
                        var s = e
                          , u = A(r, c)
                          , r = e.byteLength;
                        if (void 0 === n) {
                            if (r % c)
                                throw O(k);
                            if ((o = r - u) < 0)
                                throw O(k)
                        } else if (r < (o = E(n) * c) + u)
                            throw O(k);
                        i = o / c
                    } else
                        i = G(e),
                        s = new R(o = i * c);
                    for (m(t, "_d", {
                        b: s,
                        o: u,
                        l: o,
                        e: i,
                        v: new ft(s)
                    }); a < i; )
                        f(t, a++)
                }),
                s = h[I] = H(F),
                m(s, "constructor", h)) : d(function() {
                    h(1)
                }) && d(function() {
                    new h(-1)
                }) && tt(function(t) {
                    new h,
                    new h(null),
                    new h(1.5),
                    new h(t)
                }, !0) || (h = e(function(t, e, r, n) {
                    return M(t, h, l),
                    w(e) ? e instanceof R || (t = K(e)) == ut || t == st ? void 0 !== n ? new a(e,A(r, c),n) : void 0 !== r ? new a(e,A(r, c)) : new a(e) : N in e ? L(h, e) : Dt.call(h, e) : new a(G(e))
                }),
                lt(t !== Function.prototype ? b(a).concat(b(t)) : b(a), function(t) {
                    t in h || m(h, t, a[t])
                }),
                h[I] = s,
                p || (s.constructor = h)),
                s[P])
                  , e = !!n && ("values" == n.name || null == n.name)
                  , t = D.values;
                m(h, xt, !0),
                m(s, N, l),
                m(s, Tt, !0),
                m(s, T, h),
                (o ? new h(1)[x] == l : x in s) || _(s, x, {
                    get: function() {
                        return l
                    }
                }),
                u[l] = h,
                v(v.G + v.W + v.F * (h != a), u),
                v(v.S, l, {
                    BYTES_PER_ELEMENT: c
                }),
                v(v.S + v.F * d(function() {
                    a.of.call(h, 1)
                }), l, {
                    from: Dt,
                    of: Ft
                }),
                ct in s || m(s, ct, c),
                v(v.P, l, Bt),
                et(l),
                v(v.P + v.F * At, l, {
                    set: Ut
                }),
                v(v.P + v.F * !e, l, D),
                p || s.toString == S || (s.toString = S),
                v(v.P + v.F * d(function() {
                    new h(1).slice()
                }), l, {
                    slice: Mt
                }),
                v(v.P + v.F * (d(function() {
                    return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString()
                }) || !d(function() {
                    s.toLocaleString.call([1, 2])
                })), l, {
                    toLocaleString: jt
                }),
                $[l] = e ? n : t,
                p || e || m(s, P, t)
            }
            ) : C.exports = function() {}
        }
        ,
        1125: (C,t,e)=>{
            "use strict";
            var r = e(3816)
              , n = e(7057)
              , j = e(4461)
              , o = e(9383)
              , i = e(7728)
              , a = e(4408)
              , u = e(4253)
              , s = e(3328)
              , B = e(1467)
              , M = e(875)
              , f = e(4843)
              , c = e(616).f
              , U = e(9275).f
              , V = e(6852)
              , e = e(2943)
              , l = "ArrayBuffer"
              , h = "DataView"
              , p = "prototype"
              , y = "Wrong index!"
              , d = r[l]
              , v = r[h]
              , g = r.Math
              , m = r.RangeError
              , E = r.Infinity
              , w = d
              , G = g.abs
              , b = g.pow
              , Y = g.floor
              , q = g.log
              , K = g.LN2
              , r = "byteLength"
              , g = "byteOffset"
              , _ = n ? "_b" : "buffer"
              , O = n ? "_l" : r
              , I = n ? "_o" : g;
            function R(t, e, r) {
                var n, o, i, a = new Array(r), u = 8 * r - e - 1, r = (1 << u) - 1, s = r >> 1, c = 23 === e ? b(2, -24) - b(2, -77) : 0, f = 0, l = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for ((t = G(t)) != t || t === E ? (o = t != t ? 1 : 0,
                n = r) : (n = Y(q(t) / K),
                t * (i = b(2, -n)) < 1 && (n--,
                i *= 2),
                2 <= (t += 1 <= n + s ? c / i : c * b(2, 1 - s)) * i && (n++,
                i /= 2),
                r <= n + s ? (o = 0,
                n = r) : 1 <= n + s ? (o = (t * i - 1) * b(2, e),
                n += s) : (o = t * b(2, s - 1) * b(2, e),
                n = 0)); 8 <= e; a[f++] = 255 & o,
                o /= 256,
                e -= 8)
                    ;
                for (n = n << e | o,
                u += e; 0 < u; a[f++] = 255 & n,
                n /= 256,
                u -= 8)
                    ;
                return a[--f] |= 128 * l,
                a
            }
            function S(t, e, r) {
                var n, o = 8 * r - e - 1, i = (1 << o) - 1, a = i >> 1, u = o - 7, s = r - 1, o = t[s--], c = 127 & o;
                for (o >>= 7; 0 < u; c = 256 * c + t[s],
                s--,
                u -= 8)
                    ;
                for (n = c & (1 << -u) - 1,
                c >>= -u,
                u += e; 0 < u; n = 256 * n + t[s],
                s--,
                u -= 8)
                    ;
                if (0 === c)
                    c = 1 - a;
                else {
                    if (c === i)
                        return n ? NaN : o ? -E : E;
                    n += b(2, e),
                    c -= a
                }
                return (o ? -1 : 1) * n * b(2, c - e)
            }
            function P(t) {
                return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
            }
            function x(t) {
                return [255 & t]
            }
            function T(t) {
                return [255 & t, t >> 8 & 255]
            }
            function N(t) {
                return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
            }
            function W(t) {
                return R(t, 52, 8)
            }
            function J(t) {
                return R(t, 23, 4)
            }
            function k(t, e, r) {
                U(t[p], e, {
                    get: function() {
                        return this[r]
                    }
                })
            }
            function A(t, e, r, n) {
                r = f(+r);
                if (r + e > t[O])
                    throw m(y);
                var o = t[_]._b
                  , r = r + t[I]
                  , t = o.slice(r, r + e);
                return n ? t : t.reverse()
            }
            function L(t, e, r, n, o, i) {
                r = f(+r);
                if (r + e > t[O])
                    throw m(y);
                for (var a = t[_]._b, u = r + t[I], s = n(+o), c = 0; c < e; c++)
                    a[u + c] = s[i ? c : e - c - 1]
            }
            if (o.ABV) {
                if (!u(function() {
                    d(1)
                }) || !u(function() {
                    new d(-1)
                }) || u(function() {
                    return new d,
                    new d(1.5),
                    new d(NaN),
                    d.name != l
                })) {
                    for (var D, u = (d = function(t) {
                        return s(this, d),
                        new w(f(t))
                    }
                    )[p] = w[p], F = c(w), H = 0; F.length > H; )
                        (D = F[H++])in d || i(d, D, w[D]);
                    j || (u.constructor = d)
                }
                var c = new v(new d(2))
                  , X = v[p].setInt8;
                c.setInt8(0, 2147483648),
                c.setInt8(1, 2147483649),
                !c.getInt8(0) && c.getInt8(1) || a(v[p], {
                    setInt8: function(t, e) {
                        X.call(this, t, e << 24 >> 24)
                    },
                    setUint8: function(t, e) {
                        X.call(this, t, e << 24 >> 24)
                    }
                }, !0)
            } else
                d = function(t) {
                    s(this, d, l);
                    t = f(t);
                    this._b = V.call(new Array(t), 0),
                    this[O] = t
                }
                ,
                v = function(t, e, r) {
                    s(this, v, h),
                    s(t, d, h);
                    var n = t[O]
                      , e = B(e);
                    if (e < 0 || n < e)
                        throw m("Wrong offset!");
                    if (n < e + (r = void 0 === r ? n - e : M(r)))
                        throw m("Wrong length!");
                    this[_] = t,
                    this[I] = e,
                    this[O] = r
                }
                ,
                n && (k(d, r, "_l"),
                k(v, "buffer", "_b"),
                k(v, r, "_l"),
                k(v, g, "_o")),
                a(v[p], {
                    getInt8: function(t) {
                        return A(this, 1, t)[0] << 24 >> 24
                    },
                    getUint8: function(t) {
                        return A(this, 1, t)[0]
                    },
                    getInt16: function(t) {
                        t = A(this, 2, t, arguments[1]);
                        return (t[1] << 8 | t[0]) << 16 >> 16
                    },
                    getUint16: function(t) {
                        t = A(this, 2, t, arguments[1]);
                        return t[1] << 8 | t[0]
                    },
                    getInt32: function(t) {
                        return P(A(this, 4, t, arguments[1]))
                    },
                    getUint32: function(t) {
                        return P(A(this, 4, t, arguments[1])) >>> 0
                    },
                    getFloat32: function(t) {
                        return S(A(this, 4, t, arguments[1]), 23, 4)
                    },
                    getFloat64: function(t) {
                        return S(A(this, 8, t, arguments[1]), 52, 8)
                    },
                    setInt8: function(t, e) {
                        L(this, 1, t, x, e)
                    },
                    setUint8: function(t, e) {
                        L(this, 1, t, x, e)
                    },
                    setInt16: function(t, e) {
                        L(this, 2, t, T, e, arguments[2])
                    },
                    setUint16: function(t, e) {
                        L(this, 2, t, T, e, arguments[2])
                    },
                    setInt32: function(t, e) {
                        L(this, 4, t, N, e, arguments[2])
                    },
                    setUint32: function(t, e) {
                        L(this, 4, t, N, e, arguments[2])
                    },
                    setFloat32: function(t, e) {
                        L(this, 4, t, J, e, arguments[2])
                    },
                    setFloat64: function(t, e) {
                        L(this, 8, t, W, e, arguments[2])
                    }
                });
            e(d, l),
            e(v, h),
            i(v[p], o.VIEW, !0),
            t[l] = d,
            t[h] = v
        }
        ,
        9383: (t,e,r)=>{
            for (var n, o = r(3816), i = r(7728), r = r(3953), a = r("typed_array"), u = r("view"), r = !(!o.ArrayBuffer || !o.DataView), s = r, c = 0, f = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); c < 9; )
                (n = o[f[c++]]) ? (i(n.prototype, a, !0),
                i(n.prototype, u, !0)) : s = !1;
            t.exports = {
                ABV: r,
                CONSTR: s,
                TYPED: a,
                VIEW: u
            }
        }
        ,
        3953: t=>{
            var e = 0
              , r = Math.random();
            t.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
            }
        }
        ,
        575: (t,e,r)=>{
            r = r(3816).navigator;
            t.exports = r && r.userAgent || ""
        }
        ,
        1616: (t,e,r)=>{
            var n = r(5286);
            t.exports = function(t, e) {
                if (n(t) && t._t === e)
                    return t;
                throw TypeError("Incompatible receiver, " + e + " required!")
            }
        }
        ,
        6074: (t,e,r)=>{
            var n = r(3816)
              , o = r(5645)
              , i = r(4461)
              , a = r(8787)
              , u = r(9275).f;
            t.exports = function(t) {
                var e = o.Symbol || (o.Symbol = !i && n.Symbol || {});
                "_" == t.charAt(0) || t in e || u(e, t, {
                    value: a.f(t)
                })
            }
        }
        ,
        8787: (t,e,r)=>{
            e.f = r(6314)
        }
        ,
        6314: (t,e,r)=>{
            var n = r(3825)("wks")
              , o = r(3953)
              , i = r(3816).Symbol
              , a = "function" == typeof i;
            (t.exports = function(t) {
                return n[t] || (n[t] = a && i[t] || (a ? i : o)("Symbol." + t))
            }
            ).store = n
        }
        ,
        9002: (t,e,r)=>{
            var n = r(1488)
              , o = r(6314)("iterator")
              , i = r(2803);
            t.exports = r(5645).getIteratorMethod = function(t) {
                if (null != t)
                    return t[o] || t["@@iterator"] || i[n(t)]
            }
        }
        ,
        2e3: (t,e,r)=>{
            var n = r(2985);
            n(n.P, "Array", {
                copyWithin: r(5216)
            }),
            r(7722)("copyWithin")
        }
        ,
        5745: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(50)(4);
            n(n.P + n.F * !r(7717)([].every, !0), "Array", {
                every: function(t) {
                    return o(this, t, arguments[1])
                }
            })
        }
        ,
        8977: (t,e,r)=>{
            var n = r(2985);
            n(n.P, "Array", {
                fill: r(6852)
            }),
            r(7722)("fill")
        }
        ,
        8837: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(50)(2);
            n(n.P + n.F * !r(7717)([].filter, !0), "Array", {
                filter: function(t) {
                    return o(this, t, arguments[1])
                }
            })
        }
        ,
        4899: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(50)(6)
              , i = "findIndex"
              , a = !0;
            i in [] && Array(1)[i](function() {
                a = !1
            }),
            n(n.P + n.F * a, "Array", {
                findIndex: function(t) {
                    return o(this, t, 1 < arguments.length ? arguments[1] : void 0)
                }
            }),
            r(7722)(i)
        }
        ,
        2310: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(50)(5)
              , i = "find"
              , a = !0;
            i in [] && Array(1)[i](function() {
                a = !1
            }),
            n(n.P + n.F * a, "Array", {
                find: function(t) {
                    return o(this, t, 1 < arguments.length ? arguments[1] : void 0)
                }
            }),
            r(7722)(i)
        }
        ,
        4336: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(50)(0)
              , r = r(7717)([].forEach, !0);
            n(n.P + n.F * !r, "Array", {
                forEach: function(t) {
                    return o(this, t, arguments[1])
                }
            })
        }
        ,
        522: (t,e,r)=>{
            "use strict";
            var l = r(741)
              , n = r(2985)
              , h = r(508)
              , p = r(8851)
              , y = r(6555)
              , d = r(875)
              , v = r(2811)
              , g = r(9002);
            n(n.S + n.F * !r(7462)(function(t) {
                Array.from(t)
            }), "Array", {
                from: function(t) {
                    var e, r, n, o, i = h(t), t = "function" == typeof this ? this : Array, a = arguments.length, u = 1 < a ? arguments[1] : void 0, s = void 0 !== u, c = 0, f = g(i);
                    if (s && (u = l(u, 2 < a ? arguments[2] : void 0, 2)),
                    null == f || t == Array && y(f))
                        for (r = new t(e = d(i.length)); c < e; c++)
                            v(r, c, s ? u(i[c], c) : i[c]);
                    else
                        for (o = f.call(i),
                        r = new t; !(n = o.next()).done; c++)
                            v(r, c, s ? p(o, u, [n.value, c], !0) : n.value);
                    return r.length = c,
                    r
                }
            })
        }
        ,
        3369: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(9315)(!1)
              , i = [].indexOf
              , a = !!i && 1 / [1].indexOf(1, -0) < 0;
            n(n.P + n.F * (a || !r(7717)(i)), "Array", {
                indexOf: function(t) {
                    return a ? i.apply(this, arguments) || 0 : o(this, t, arguments[1])
                }
            })
        }
        ,
        774: (t,e,r)=>{
            var n = r(2985);
            n(n.S, "Array", {
                isArray: r(4302)
            })
        }
        ,
        6997: (t,e,r)=>{
            "use strict";
            var n = r(7722)
              , o = r(5436)
              , i = r(2803)
              , a = r(2110);
            t.exports = r(2923)(Array, "Array", function(t, e) {
                this._t = a(t),
                this._i = 0,
                this._k = e
            }, function() {
                var t = this._t
                  , e = this._k
                  , r = this._i++;
                return !t || r >= t.length ? (this._t = void 0,
                o(1)) : o(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
            }, "values"),
            i.Arguments = i.Array,
            n("keys"),
            n("values"),
            n("entries")
        }
        ,
        7842: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(2110)
              , i = [].join;
            n(n.P + n.F * (r(9797) != Object || !r(7717)(i)), "Array", {
                join: function(t) {
                    return i.call(o(this), void 0 === t ? "," : t)
                }
            })
        }
        ,
        9564: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(2110)
              , i = r(1467)
              , a = r(875)
              , u = [].lastIndexOf
              , s = !!u && 1 / [1].lastIndexOf(1, -0) < 0;
            n(n.P + n.F * (s || !r(7717)(u)), "Array", {
                lastIndexOf: function(t) {
                    if (s)
                        return u.apply(this, arguments) || 0;
                    var e = o(this)
                      , r = a(e.length)
                      , n = r - 1;
                    for ((n = 1 < arguments.length ? Math.min(n, i(arguments[1])) : n) < 0 && (n = r + n); 0 <= n; n--)
                        if (n in e && e[n] === t)
                            return n || 0;
                    return -1
                }
            })
        }
        ,
        1802: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(50)(1);
            n(n.P + n.F * !r(7717)([].map, !0), "Array", {
                map: function(t) {
                    return o(this, t, arguments[1])
                }
            })
        }
        ,
        8295: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(2811);
            n(n.S + n.F * r(4253)(function() {
                function t() {}
                return !(Array.of.call(t)instanceof t)
            }), "Array", {
                of: function() {
                    for (var t = 0, e = arguments.length, r = new ("function" == typeof this ? this : Array)(e); t < e; )
                        o(r, t, arguments[t++]);
                    return r.length = e,
                    r
                }
            })
        }
        ,
        3750: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(7628);
            n(n.P + n.F * !r(7717)([].reduceRight, !0), "Array", {
                reduceRight: function(t) {
                    return o(this, t, arguments.length, arguments[1], !0)
                }
            })
        }
        ,
        3057: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(7628);
            n(n.P + n.F * !r(7717)([].reduce, !0), "Array", {
                reduce: function(t) {
                    return o(this, t, arguments.length, arguments[1], !1)
                }
            })
        }
        ,
        110: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(639)
              , s = r(2032)
              , c = r(2337)
              , f = r(875)
              , l = [].slice;
            n(n.P + n.F * r(4253)(function() {
                o && l.call(o)
            }), "Array", {
                slice: function(t, e) {
                    var r = f(this.length)
                      , n = s(this);
                    if (e = void 0 === e ? r : e,
                    "Array" == n)
                        return l.call(this, t, e);
                    for (var o = c(t, r), t = c(e, r), i = f(t - o), a = new Array(i), u = 0; u < i; u++)
                        a[u] = "String" == n ? this.charAt(o + u) : this[o + u];
                    return a
                }
            })
        }
        ,
        6773: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(50)(3);
            n(n.P + n.F * !r(7717)([].some, !0), "Array", {
                some: function(t) {
                    return o(this, t, arguments[1])
                }
            })
        }
        ,
        75: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(4963)
              , i = r(508)
              , a = r(4253)
              , u = [].sort
              , s = [1, 2, 3];
            n(n.P + n.F * (a(function() {
                s.sort(void 0)
            }) || !a(function() {
                s.sort(null)
            }) || !r(7717)(u)), "Array", {
                sort: function(t) {
                    return void 0 === t ? u.call(i(this)) : u.call(i(this), o(t))
                }
            })
        }
        ,
        1842: (t,e,r)=>{
            r(2974)("Array")
        }
        ,
        1822: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Date", {
                now: function() {
                    return (new Date).getTime()
                }
            })
        }
        ,
        1031: (t,e,r)=>{
            var n = r(2985)
              , r = r(3537);
            n(n.P + n.F * (Date.prototype.toISOString !== r), "Date", {
                toISOString: r
            })
        }
        ,
        9977: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(508)
              , i = r(1689);
            n(n.P + n.F * r(4253)(function() {
                return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                    toISOString: function() {
                        return 1
                    }
                })
            }), "Date", {
                toJSON: function(t) {
                    var e = o(this)
                      , r = i(e);
                    return "number" != typeof r || isFinite(r) ? e.toISOString() : null
                }
            })
        }
        ,
        1560: (t,e,r)=>{
            var n = r(6314)("toPrimitive")
              , o = Date.prototype;
            n in o || r(7728)(o, n, r(870))
        }
        ,
        6331: (t,e,r)=>{
            var n = Date.prototype
              , o = "Invalid Date"
              , i = "toString"
              , a = n[i]
              , u = n.getTime;
            new Date(NaN) + "" != o && r(7234)(n, i, function() {
                var t = u.call(this);
                return t == t ? a.call(this) : o
            })
        }
        ,
        9730: (t,e,r)=>{
            var n = r(2985);
            n(n.P, "Function", {
                bind: r(4398)
            })
        }
        ,
        8377: (t,e,r)=>{
            "use strict";
            var n = r(5286)
              , o = r(468)
              , i = r(6314)("hasInstance")
              , a = Function.prototype;
            i in a || r(9275).f(a, i, {
                value: function(t) {
                    if ("function" == typeof this && n(t)) {
                        if (!n(this.prototype))
                            return t instanceof this;
                        for (; t = o(t); )
                            if (this.prototype === t)
                                return !0
                    }
                    return !1
                }
            })
        }
        ,
        6059: (t,e,r)=>{
            var n = r(9275).f
              , o = Function.prototype
              , i = /^\s*function ([^ (]*)/;
            "name"in o || r(7057) && n(o, "name", {
                configurable: !0,
                get: function() {
                    try {
                        return ("" + this).match(i)[1]
                    } catch (t) {
                        return ""
                    }
                }
            })
        }
        ,
        8416: (t,e,r)=>{
            "use strict";
            var n = r(9824)
              , o = r(1616);
            t.exports = r(5795)("Map", function(t) {
                return function() {
                    return t(this, 0 < arguments.length ? arguments[0] : void 0)
                }
            }, {
                get: function(t) {
                    t = n.getEntry(o(this, "Map"), t);
                    return t && t.v
                },
                set: function(t, e) {
                    return n.def(o(this, "Map"), 0 === t ? 0 : t, e)
                }
            }, n, !0)
        }
        ,
        6503: (t,e,r)=>{
            var n = r(2985)
              , o = r(6206)
              , i = Math.sqrt
              , r = Math.acosh;
            n(n.S + n.F * !(r && 710 == Math.floor(r(Number.MAX_VALUE)) && r(1 / 0) == 1 / 0), "Math", {
                acosh: function(t) {
                    return (t = +t) < 1 ? NaN : 94906265.62425156 < t ? Math.log(t) + Math.LN2 : o(t - 1 + i(t - 1) * i(t + 1))
                }
            })
        }
        ,
        6786: (t,e,r)=>{
            var r = r(2985)
              , n = Math.asinh;
            r(r.S + r.F * !(n && 0 < 1 / n(0)), "Math", {
                asinh: function t(e) {
                    return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
                }
            })
        }
        ,
        932: (t,e,r)=>{
            var r = r(2985)
              , n = Math.atanh;
            r(r.S + r.F * !(n && 1 / n(-0) < 0), "Math", {
                atanh: function(t) {
                    return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
                }
            })
        }
        ,
        7526: (t,e,r)=>{
            var n = r(2985)
              , o = r(1801);
            n(n.S, "Math", {
                cbrt: function(t) {
                    return o(t = +t) * Math.pow(Math.abs(t), 1 / 3)
                }
            })
        }
        ,
        1591: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Math", {
                clz32: function(t) {
                    return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
                }
            })
        }
        ,
        9073: (t,e,r)=>{
            var r = r(2985)
              , n = Math.exp;
            r(r.S, "Math", {
                cosh: function(t) {
                    return (n(t = +t) + n(-t)) / 2
                }
            })
        }
        ,
        347: (t,e,r)=>{
            var n = r(2985)
              , r = r(3086);
            n(n.S + n.F * (r != Math.expm1), "Math", {
                expm1: r
            })
        }
        ,
        579: (t,e,r)=>{
            var n = r(2985);
            n(n.S, "Math", {
                fround: r(4934)
            })
        }
        ,
        4669: (t,e,r)=>{
            var r = r(2985)
              , s = Math.abs;
            r(r.S, "Math", {
                hypot: function(t, e) {
                    for (var r, n, o = 0, i = 0, a = arguments.length, u = 0; i < a; )
                        u < (r = s(arguments[i++])) ? (o = o * (n = u / r) * n + 1,
                        u = r) : o += 0 < r ? (n = r / u) * n : r;
                    return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o)
                }
            })
        }
        ,
        7710: (t,e,r)=>{
            var n = r(2985)
              , o = Math.imul;
            n(n.S + n.F * r(4253)(function() {
                return -5 != o(4294967295, 5) || 2 != o.length
            }), "Math", {
                imul: function(t, e) {
                    var r = 65535
                      , t = +t
                      , e = +e
                      , n = r & t
                      , o = r & e;
                    return 0 | n * o + ((r & t >>> 16) * o + n * (r & e >>> 16) << 16 >>> 0)
                }
            })
        }
        ,
        5789: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Math", {
                log10: function(t) {
                    return Math.log(t) * Math.LOG10E
                }
            })
        }
        ,
        3514: (t,e,r)=>{
            var n = r(2985);
            n(n.S, "Math", {
                log1p: r(6206)
            })
        }
        ,
        9978: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Math", {
                log2: function(t) {
                    return Math.log(t) / Math.LN2
                }
            })
        }
        ,
        8472: (t,e,r)=>{
            var n = r(2985);
            n(n.S, "Math", {
                sign: r(1801)
            })
        }
        ,
        6946: (t,e,r)=>{
            var n = r(2985)
              , o = r(3086)
              , i = Math.exp;
            n(n.S + n.F * r(4253)(function() {
                return -2e-17 != !Math.sinh(-2e-17)
            }), "Math", {
                sinh: function(t) {
                    return Math.abs(t = +t) < 1 ? (o(t) - o(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2)
                }
            })
        }
        ,
        5068: (t,e,r)=>{
            var n = r(2985)
              , o = r(3086)
              , i = Math.exp;
            n(n.S, "Math", {
                tanh: function(t) {
                    var e = o(t = +t)
                      , r = o(-t);
                    return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (i(t) + i(-t))
                }
            })
        }
        ,
        413: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Math", {
                trunc: function(t) {
                    return (0 < t ? Math.floor : Math.ceil)(t)
                }
            })
        }
        ,
        1246: (t,e,r)=>{
            "use strict";
            function n(t) {
                if ("string" == typeof (e = c(t, !1)) && 2 < e.length) {
                    var e, r, n, o, t = (e = m ? e.trim() : p(e, 3)).charCodeAt(0);
                    if (43 === t || 45 === t) {
                        if (88 === (r = e.charCodeAt(2)) || 120 === r)
                            return NaN
                    } else if (48 === t) {
                        switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            n = 2,
                            o = 49;
                            break;
                        case 79:
                        case 111:
                            n = 8,
                            o = 55;
                            break;
                        default:
                            return +e
                        }
                        for (var i, a = e.slice(2), u = 0, s = a.length; u < s; u++)
                            if ((i = a.charCodeAt(u)) < 48 || o < i)
                                return NaN;
                        return parseInt(a, n)
                    }
                }
                return +e
            }
            var o = r(3816)
              , i = r(9181)
              , a = r(2032)
              , u = r(266)
              , c = r(1689)
              , s = r(4253)
              , f = r(616).f
              , l = r(8693).f
              , h = r(9275).f
              , p = r(9599).trim
              , y = "Number"
              , d = w = o[y]
              , v = w.prototype
              , g = a(r(2503)(v)) == y
              , m = "trim"in String.prototype;
            if (!w(" 0o1") || !w("0b1") || w("+0x1")) {
                for (var E, w = function(t) {
                    var t = arguments.length < 1 ? 0 : t
                      , e = this;
                    return e instanceof w && (g ? s(function() {
                        v.valueOf.call(e)
                    }) : a(e) != y) ? u(new d(n(t)), e, w) : n(t)
                }, b = r(7057) ? f(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), _ = 0; b.length > _; _++)
                    i(d, E = b[_]) && !i(w, E) && h(w, E, l(d, E));
                (w.prototype = v).constructor = w,
                r(7234)(o, y, w)
            }
        }
        ,
        5972: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Number", {
                EPSILON: Math.pow(2, -52)
            })
        }
        ,
        3403: (t,e,r)=>{
            var n = r(2985)
              , o = r(3816).isFinite;
            n(n.S, "Number", {
                isFinite: function(t) {
                    return "number" == typeof t && o(t)
                }
            })
        }
        ,
        2516: (t,e,r)=>{
            var n = r(2985);
            n(n.S, "Number", {
                isInteger: r(8367)
            })
        }
        ,
        9371: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Number", {
                isNaN: function(t) {
                    return t != t
                }
            })
        }
        ,
        6479: (t,e,r)=>{
            var n = r(2985)
              , o = r(8367)
              , i = Math.abs;
            n(n.S, "Number", {
                isSafeInteger: function(t) {
                    return o(t) && i(t) <= 9007199254740991
                }
            })
        }
        ,
        1736: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            })
        }
        ,
        1889: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Number", {
                MIN_SAFE_INTEGER: -9007199254740991
            })
        }
        ,
        5177: (t,e,r)=>{
            var n = r(2985)
              , r = r(7743);
            n(n.S + n.F * (Number.parseFloat != r), "Number", {
                parseFloat: r
            })
        }
        ,
        6943: (t,e,r)=>{
            var n = r(2985)
              , r = r(5960);
            n(n.S + n.F * (Number.parseInt != r), "Number", {
                parseInt: r
            })
        }
        ,
        726: (t,e,r)=>{
            "use strict";
            function a(t, e) {
                for (var r = -1, n = e; ++r < 6; )
                    n += t * p[r],
                    p[r] = n % 1e7,
                    n = i(n / 1e7)
            }
            function u(t) {
                for (var e = 6, r = 0; 0 <= --e; )
                    r += p[e],
                    p[e] = i(r / t),
                    r = r % t * 1e7
            }
            function s() {
                for (var t, e = 6, r = ""; 0 <= --e; )
                    "" === r && 0 !== e && 0 === p[e] || (t = String(p[e]),
                    r = "" === r ? t : r + h.call("0", 7 - t.length) + t);
                return r
            }
            function c(t, e, r) {
                return 0 === e ? r : e % 2 == 1 ? c(t, e - 1, r * t) : c(t * t, e / 2, r)
            }
            var n = r(2985)
              , f = r(1467)
              , l = r(3365)
              , h = r(8595)
              , o = 1..toFixed
              , i = Math.floor
              , p = [0, 0, 0, 0, 0, 0]
              , y = "Number.toFixed: incorrect invocation!";
            n(n.P + n.F * (!!o && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !r(4253)(function() {
                o.call({})
            })), "Number", {
                toFixed: function(t) {
                    var e, r, n = l(this, y), t = f(t), o = "", i = "0";
                    if (t < 0 || 20 < t)
                        throw RangeError(y);
                    if (n != n)
                        return "NaN";
                    if (n <= -1e21 || 1e21 <= n)
                        return String(n);
                    if (n < 0 && (o = "-",
                    n = -n),
                    1e-21 < n)
                        if (n = (e = function(t) {
                            for (var e = 0, r = t; 4096 <= r; )
                                e += 12,
                                r /= 4096;
                            for (; 2 <= r; )
                                e += 1,
                                r /= 2;
                            return e
                        }(n * c(2, 69, 1)) - 69) < 0 ? n * c(2, -e, 1) : n / c(2, e, 1),
                        n *= 4503599627370496,
                        0 < (e = 52 - e)) {
                            for (a(0, n),
                            r = t; 7 <= r; )
                                a(1e7, 0),
                                r -= 7;
                            for (a(c(10, r, 1), 0),
                            r = e - 1; 23 <= r; )
                                u(1 << 23),
                                r -= 23;
                            u(1 << r),
                            a(1, 1),
                            u(2),
                            i = s()
                        } else
                            a(0, n),
                            a(1 << -e, 0),
                            i = s() + h.call("0", t);
                    return i = 0 < t ? o + ((n = i.length) <= t ? "0." + h.call("0", t - n) + i : i.slice(0, n - t) + "." + i.slice(n - t)) : o + i
                }
            })
        }
        ,
        1901: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(4253)
              , i = r(3365)
              , a = 1..toPrecision;
            n(n.P + n.F * (o(function() {
                return "1" !== a.call(1, void 0)
            }) || !o(function() {
                a.call({})
            })), "Number", {
                toPrecision: function(t) {
                    var e = i(this, "Number#toPrecision: incorrect invocation!");
                    return void 0 === t ? a.call(e) : a.call(e, t)
                }
            })
        }
        ,
        5115: (t,e,r)=>{
            var n = r(2985);
            n(n.S + n.F, "Object", {
                assign: r(5345)
            })
        }
        ,
        8132: (t,e,r)=>{
            var n = r(2985);
            n(n.S, "Object", {
                create: r(2503)
            })
        }
        ,
        7470: (t,e,r)=>{
            var n = r(2985);
            n(n.S + n.F * !r(7057), "Object", {
                defineProperties: r(5588)
            })
        }
        ,
        8388: (t,e,r)=>{
            var n = r(2985);
            n(n.S + n.F * !r(7057), "Object", {
                defineProperty: r(9275).f
            })
        }
        ,
        9375: (t,e,r)=>{
            var n = r(5286)
              , o = r(4728).onFreeze;
            r(3160)("freeze", function(e) {
                return function(t) {
                    return e && n(t) ? e(o(t)) : t
                }
            })
        }
        ,
        4882: (t,e,r)=>{
            var n = r(2110)
              , o = r(8693).f;
            r(3160)("getOwnPropertyDescriptor", function() {
                return function(t, e) {
                    return o(n(t), e)
                }
            })
        }
        ,
        9622: (t,e,r)=>{
            r(3160)("getOwnPropertyNames", function() {
                return r(9327).f
            })
        }
        ,
        1520: (t,e,r)=>{
            var n = r(508)
              , o = r(468);
            r(3160)("getPrototypeOf", function() {
                return function(t) {
                    return o(n(t))
                }
            })
        }
        ,
        9892: (t,e,r)=>{
            var n = r(5286);
            r(3160)("isExtensible", function(e) {
                return function(t) {
                    return !!n(t) && (!e || e(t))
                }
            })
        }
        ,
        4157: (t,e,r)=>{
            var n = r(5286);
            r(3160)("isFrozen", function(e) {
                return function(t) {
                    return !n(t) || !!e && e(t)
                }
            })
        }
        ,
        5095: (t,e,r)=>{
            var n = r(5286);
            r(3160)("isSealed", function(e) {
                return function(t) {
                    return !n(t) || !!e && e(t)
                }
            })
        }
        ,
        9176: (t,e,r)=>{
            var n = r(2985);
            n(n.S, "Object", {
                is: r(7195)
            })
        }
        ,
        7476: (t,e,r)=>{
            var n = r(508)
              , o = r(7184);
            r(3160)("keys", function() {
                return function(t) {
                    return o(n(t))
                }
            })
        }
        ,
        4672: (t,e,r)=>{
            var n = r(5286)
              , o = r(4728).onFreeze;
            r(3160)("preventExtensions", function(e) {
                return function(t) {
                    return e && n(t) ? e(o(t)) : t
                }
            })
        }
        ,
        3533: (t,e,r)=>{
            var n = r(5286)
              , o = r(4728).onFreeze;
            r(3160)("seal", function(e) {
                return function(t) {
                    return e && n(t) ? e(o(t)) : t
                }
            })
        }
        ,
        8838: (t,e,r)=>{
            var n = r(2985);
            n(n.S, "Object", {
                setPrototypeOf: r(7375).set
            })
        }
        ,
        6253: (t,e,r)=>{
            "use strict";
            var n = r(1488)
              , o = {};
            o[r(6314)("toStringTag")] = "z",
            o + "" != "[object z]" && r(7234)(Object.prototype, "toString", function() {
                return "[object " + n(this) + "]"
            }, !0)
        }
        ,
        4299: (t,e,r)=>{
            var n = r(2985)
              , r = r(7743);
            n(n.G + n.F * (parseFloat != r), {
                parseFloat: r
            })
        }
        ,
        1084: (t,e,r)=>{
            var n = r(2985)
              , r = r(5960);
            n(n.G + n.F * (parseInt != r), {
                parseInt: r
            })
        }
        ,
        851: (t,C,r)=>{
            "use strict";
            function n() {}
            var e, o, i, a, u = r(4461), h = r(3816), s = r(741), c = r(1488), f = r(2985), l = r(5286), p = r(4963), y = r(3328), d = r(3531), v = r(8364), g = r(4193).set, m = r(4351)(), E = r(3499), w = r(188), b = r(575), _ = r(94), O = "Promise", I = h.TypeError, R = h.process, S = R && R.versions, P = S && S.v8 || "", x = h[O], T = "process" == c(R), N = o = E.f, S = !!function() {
                try {
                    var t = x.resolve(1)
                      , e = (t.constructor = {})[r(6314)("species")] = function(t) {
                        t(n, n)
                    }
                    ;
                    return (T || "function" == typeof PromiseRejectionEvent) && t.then(n)instanceof e && 0 !== P.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
                } catch (t) {}
            }(), k = function(t) {
                var e;
                return !(!l(t) || "function" != typeof (e = t.then)) && e
            }, A = function(l, r) {
                var n;
                l._n || (l._n = !0,
                n = l._c,
                m(function() {
                    for (var o, c = l._v, f = 1 == l._s, t = 0, e = function(t) {
                        var e, r, n, o, i = f ? t.ok : t.fail, a = t.resolve, u = t.reject, s = t.domain;
                        try {
                            i ? (f || (2 == l._h && (o = l,
                            g.call(h, function() {
                                var t;
                                T ? R.emit("rejectionHandled", o) : (t = h.onrejectionhandled) && t({
                                    promise: o,
                                    reason: o._v
                                })
                            })),
                            l._h = 1),
                            !0 === i ? e = c : (s && s.enter(),
                            e = i(c),
                            s && (s.exit(),
                            n = !0)),
                            e === t.promise ? u(I("Promise-chain cycle")) : (r = k(e)) ? r.call(e, a, u) : a(e)) : u(c)
                        } catch (t) {
                            s && !n && s.exit(),
                            u(t)
                        }
                    }; n.length > t; )
                        e(n[t++]);
                    l._c = [],
                    l._n = !1,
                    r && !l._h && (o = l,
                    g.call(h, function() {
                        var t, e, r = o._v, n = L(o);
                        if (n && (t = w(function() {
                            T ? R.emit("unhandledRejection", r, o) : (e = h.onunhandledrejection) ? e({
                                promise: o,
                                reason: r
                            }) : (e = h.console) && e.error && e.error("Unhandled promise rejection", r)
                        }),
                        o._h = T || L(o) ? 2 : 1),
                        o._a = void 0,
                        n && t.e)
                            throw t.v
                    }))
                }))
            }, L = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            }, D = function(t) {
                var e = this;
                e._d || (e._d = !0,
                (e = e._w || e)._v = t,
                e._s = 2,
                e._a || (e._a = e._c.slice()),
                A(e, !0))
            }, F = function(t) {
                var r, n = this;
                if (!n._d) {
                    n._d = !0,
                    n = n._w || n;
                    try {
                        if (n === t)
                            throw I("Promise can't be resolved itself");
                        (r = k(t)) ? m(function() {
                            var e = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                r.call(t, s(F, e, 1), s(D, e, 1))
                            } catch (t) {
                                D.call(e, t)
                            }
                        }) : (n._v = t,
                        n._s = 1,
                        A(n, !1))
                    } catch (t) {
                        D.call({
                            _w: n,
                            _d: !1
                        }, t)
                    }
                }
            };
            S || (x = function(t) {
                y(this, x, O, "_h"),
                p(t),
                e.call(this);
                try {
                    t(s(F, this, 1), s(D, this, 1))
                } catch (t) {
                    D.call(this, t)
                }
            }
            ,
            (e = function(t) {
                this._c = [],
                this._a = void 0,
                this._s = 0,
                this._d = !1,
                this._v = void 0,
                this._h = 0,
                this._n = !1
            }
            ).prototype = r(4408)(x.prototype, {
                then: function(t, e) {
                    var r = N(v(this, x));
                    return r.ok = "function" != typeof t || t,
                    r.fail = "function" == typeof e && e,
                    r.domain = T ? R.domain : void 0,
                    this._c.push(r),
                    this._a && this._a.push(r),
                    this._s && A(this, !1),
                    r.promise
                },
                catch: function(t) {
                    return this.then(void 0, t)
                }
            }),
            i = function() {
                var t = new e;
                this.promise = t,
                this.resolve = s(F, t, 1),
                this.reject = s(D, t, 1)
            }
            ,
            E.f = N = function(t) {
                return t === x || t === a ? new i : o(t)
            }
            ),
            f(f.G + f.W + f.F * !S, {
                Promise: x
            }),
            r(2943)(x, O),
            r(2974)(O),
            a = r(5645)[O],
            f(f.S + f.F * !S, O, {
                reject: function(t) {
                    var e = N(this);
                    return (0,
                    e.reject)(t),
                    e.promise
                }
            }),
            f(f.S + f.F * (u || !S), O, {
                resolve: function(t) {
                    return _(u && this === a ? x : this, t)
                }
            }),
            f(f.S + f.F * !(S && r(7462)(function(t) {
                x.all(t).catch(n)
            })), O, {
                all: function(t) {
                    var a = this
                      , e = N(a)
                      , u = e.resolve
                      , s = e.reject
                      , r = w(function() {
                        var n = []
                          , o = 0
                          , i = 1;
                        d(t, !1, function(t) {
                            var e = o++
                              , r = !1;
                            n.push(void 0),
                            i++,
                            a.resolve(t).then(function(t) {
                                r || (r = !0,
                                n[e] = t,
                                --i || u(n))
                            }, s)
                        }),
                        --i || u(n)
                    });
                    return r.e && s(r.v),
                    e.promise
                },
                race: function(t) {
                    var e = this
                      , r = N(e)
                      , n = r.reject
                      , o = w(function() {
                        d(t, !1, function(t) {
                            e.resolve(t).then(r.resolve, n)
                        })
                    });
                    return o.e && n(o.v),
                    r.promise
                }
            })
        }
        ,
        1572: (t,e,r)=>{
            var n = r(2985)
              , o = r(4963)
              , i = r(7007)
              , a = (r(3816).Reflect || {}).apply
              , u = Function.apply;
            n(n.S + n.F * !r(4253)(function() {
                a(function() {})
            }), "Reflect", {
                apply: function(t, e, r) {
                    t = o(t),
                    r = i(r);
                    return a ? a(t, e, r) : u.call(t, e, r)
                }
            })
        }
        ,
        2139: (t,e,r)=>{
            var n = r(2985)
              , o = r(2503)
              , i = r(4963)
              , a = r(7007)
              , u = r(5286)
              , s = r(4253)
              , c = r(4398)
              , f = (r(3816).Reflect || {}).construct
              , l = s(function() {
                function t() {}
                return !(f(function() {}, [], t)instanceof t)
            })
              , h = !s(function() {
                f(function() {})
            });
            n(n.S + n.F * (l || h), "Reflect", {
                construct: function(t, e) {
                    i(t),
                    a(e);
                    var r = arguments.length < 3 ? t : i(arguments[2]);
                    if (h && !l)
                        return f(t, e, r);
                    if (t == r) {
                        switch (e.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e[0]);
                        case 2:
                            return new t(e[0],e[1]);
                        case 3:
                            return new t(e[0],e[1],e[2]);
                        case 4:
                            return new t(e[0],e[1],e[2],e[3])
                        }
                        var n = [null];
                        return n.push.apply(n, e),
                        new (c.apply(t, n))
                    }
                    n = r.prototype,
                    r = o(u(n) ? n : Object.prototype),
                    n = Function.apply.call(t, r, e);
                    return u(n) ? n : r
                }
            })
        }
        ,
        685: (t,e,r)=>{
            var n = r(9275)
              , o = r(2985)
              , i = r(7007)
              , a = r(1689);
            o(o.S + o.F * r(4253)(function() {
                Reflect.defineProperty(n.f({}, 1, {
                    value: 1
                }), 1, {
                    value: 2
                })
            }), "Reflect", {
                defineProperty: function(t, e, r) {
                    i(t),
                    e = a(e, !0),
                    i(r);
                    try {
                        return n.f(t, e, r),
                        !0
                    } catch (t) {
                        return !1
                    }
                }
            })
        }
        ,
        5535: (t,e,r)=>{
            var n = r(2985)
              , o = r(8693).f
              , i = r(7007);
            n(n.S, "Reflect", {
                deleteProperty: function(t, e) {
                    var r = o(i(t), e);
                    return !(r && !r.configurable) && delete t[e]
                }
            })
        }
        ,
        7347: (t,e,r)=>{
            "use strict";
            function n(t) {
                this._t = i(t),
                this._i = 0;
                var e, r = this._k = [];
                for (e in t)
                    r.push(e)
            }
            var o = r(2985)
              , i = r(7007);
            r(9988)(n, "Object", function() {
                var t, e = this._k;
                do {
                    if (this._i >= e.length)
                        return {
                            value: void 0,
                            done: !0
                        }
                } while (!((t = e[this._i++])in this._t));
                return {
                    value: t,
                    done: !1
                }
            }),
            o(o.S, "Reflect", {
                enumerate: function(t) {
                    return new n(t)
                }
            })
        }
        ,
        6633: (t,e,r)=>{
            var n = r(8693)
              , o = r(2985)
              , i = r(7007);
            o(o.S, "Reflect", {
                getOwnPropertyDescriptor: function(t, e) {
                    return n.f(i(t), e)
                }
            })
        }
        ,
        8989: (t,e,r)=>{
            var n = r(2985)
              , o = r(468)
              , i = r(7007);
            n(n.S, "Reflect", {
                getPrototypeOf: function(t) {
                    return o(i(t))
                }
            })
        }
        ,
        3049: (t,e,r)=>{
            var i = r(8693)
              , a = r(468)
              , u = r(9181)
              , n = r(2985)
              , s = r(5286)
              , c = r(7007);
            n(n.S, "Reflect", {
                get: function t(e, r) {
                    var n, o = arguments.length < 3 ? e : arguments[2];
                    return c(e) === o ? e[r] : (n = i.f(e, r)) ? u(n, "value") ? n.value : void 0 !== n.get ? n.get.call(o) : void 0 : s(n = a(e)) ? t(n, r, o) : void 0
                }
            })
        }
        ,
        8270: (t,e,r)=>{
            r = r(2985);
            r(r.S, "Reflect", {
                has: function(t, e) {
                    return e in t
                }
            })
        }
        ,
        4510: (t,e,r)=>{
            var n = r(2985)
              , o = r(7007)
              , i = Object.isExtensible;
            n(n.S, "Reflect", {
                isExtensible: function(t) {
                    return o(t),
                    !i || i(t)
                }
            })
        }
        ,
        3984: (t,e,r)=>{
            var n = r(2985);
            n(n.S, "Reflect", {
                ownKeys: r(7643)
            })
        }
        ,
        5769: (t,e,r)=>{
            var n = r(2985)
              , o = r(7007)
              , i = Object.preventExtensions;
            n(n.S, "Reflect", {
                preventExtensions: function(t) {
                    o(t);
                    try {
                        return i && i(t),
                        !0
                    } catch (t) {
                        return !1
                    }
                }
            })
        }
        ,
        6014: (t,e,r)=>{
            var n = r(2985)
              , o = r(7375);
            o && n(n.S, "Reflect", {
                setPrototypeOf: function(t, e) {
                    o.check(t, e);
                    try {
                        return o.set(t, e),
                        !0
                    } catch (t) {
                        return !1
                    }
                }
            })
        }
        ,
        55: (t,e,r)=>{
            var u = r(9275)
              , s = r(8693)
              , c = r(468)
              , f = r(9181)
              , n = r(2985)
              , l = r(681)
              , h = r(7007)
              , p = r(5286);
            n(n.S, "Reflect", {
                set: function t(e, r, n) {
                    var o, i = arguments.length < 4 ? e : arguments[3], a = s.f(h(e), r);
                    if (!a) {
                        if (p(o = c(e)))
                            return t(o, r, n, i);
                        a = l(0)
                    }
                    if (f(a, "value")) {
                        if (!1 === a.writable || !p(i))
                            return !1;
                        if (o = s.f(i, r)) {
                            if (o.get || o.set || !1 === o.writable)
                                return !1;
                            o.value = n,
                            u.f(i, r, o)
                        } else
                            u.f(i, r, l(0, n));
                        return !0
                    }
                    return void 0 !== a.set && (a.set.call(i, n),
                    !0)
                }
            })
        }
        ,
        3946: (t,e,r)=>{
            var n = r(3816)
              , i = r(266)
              , o = r(9275).f
              , a = r(616).f
              , u = r(5364)
              , s = r(3218)
              , c = y = n.RegExp
              , f = y.prototype
              , l = /a/g
              , h = /a/g
              , p = new y(l) !== l;
            if (r(7057) && (!p || r(4253)(function() {
                return h[r(6314)("match")] = !1,
                y(l) != l || y(h) == h || "/a/i" != y(l, "i")
            }))) {
                for (var y = function(t, e) {
                    var r = this instanceof y
                      , n = u(t)
                      , o = void 0 === e;
                    return !r && n && t.constructor === y && o ? t : i(p ? new c(n && !o ? t.source : t,e) : c((n = t instanceof y) ? t.source : t, n && o ? s.call(t) : e), r ? this : f, y)
                }, d = a(c), v = 0; d.length > v; )
                    !function(e) {
                        e in y || o(y, e, {
                            configurable: !0,
                            get: function() {
                                return c[e]
                            },
                            set: function(t) {
                                c[e] = t
                            }
                        })
                    }(d[v++]);
                (f.constructor = y).prototype = f,
                r(7234)(n, "RegExp", y)
            }
            r(2974)("RegExp")
        }
        ,
        8269: (t,e,r)=>{
            "use strict";
            var n = r(1165);
            r(2985)({
                target: "RegExp",
                proto: !0,
                forced: n !== /./.exec
            }, {
                exec: n
            })
        }
        ,
        6774: (t,e,r)=>{
            r(7057) && "g" != /./g.flags && r(9275).f(RegExp.prototype, "flags", {
                configurable: !0,
                get: r(3218)
            })
        }
        ,
        1466: (t,e,r)=>{
            "use strict";
            var f = r(7007)
              , l = r(875)
              , h = r(6793)
              , p = r(7787);
            r(8082)("match", 1, function(n, o, s, c) {
                return [function(t) {
                    var e = n(this)
                      , r = null == t ? void 0 : t[o];
                    return void 0 !== r ? r.call(t, e) : new RegExp(t)[o](String(e))
                }
                , function(t) {
                    var e = c(s, t, this);
                    if (e.done)
                        return e.value;
                    var r = f(t)
                      , n = String(this);
                    if (!r.global)
                        return p(r, n);
                    for (var o = r.unicode, i = [], a = r.lastIndex = 0; null !== (u = p(r, n)); ) {
                        var u = String(u[0]);
                        "" === (i[a] = u) && (r.lastIndex = h(n, l(r.lastIndex), o)),
                        a++
                    }
                    return 0 === a ? null : i
                }
                ]
            })
        }
        ,
        9357: (t,e,r)=>{
            "use strict";
            var _ = r(7007)
              , O = r(508)
              , I = r(875)
              , R = r(1467)
              , S = r(6793)
              , P = r(7787)
              , x = Math.max
              , T = Math.min
              , N = Math.floor
              , k = /\$([$&`']|\d\d?|<[^>]*>)/g
              , A = /\$([$&`']|\d\d?)/g;
            r(8082)("replace", 2, function(o, i, w, b) {
                return [function(t, e) {
                    var r = o(this)
                      , n = null == t ? void 0 : t[i];
                    return void 0 !== n ? n.call(t, r, e) : w.call(String(r), t, e)
                }
                , function(t, e) {
                    var r = b(w, t, this, e);
                    if (r.done)
                        return r.value;
                    for (var n, o = _(t), i = String(this), a = "function" == typeof e, u = (a || (e = String(e)),
                    o.global), s = (u && (n = o.unicode,
                    o.lastIndex = 0),
                    []); null !== (p = P(o, i)) && (s.push(p),
                    u); )
                        "" === String(p[0]) && (o.lastIndex = S(i, I(o.lastIndex), n));
                    for (var c, f = "", l = 0, h = 0; h < s.length; h++) {
                        for (var p = s[h], y = String(p[0]), d = x(T(R(p.index), i.length), 0), v = [], g = 1; g < p.length; g++)
                            v.push(void 0 === (c = p[g]) ? c : String(c));
                        var m = p.groups
                          , E = a ? (E = [y].concat(v, d, i),
                        void 0 !== m && E.push(m),
                        String(e.apply(void 0, E))) : function(i, a, u, s, c, t) {
                            var f = u + i.length
                              , l = s.length
                              , e = A;
                            void 0 !== c && (c = O(c),
                            e = k);
                            return w.call(t, e, function(t, e) {
                                var r;
                                switch (e.charAt(0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return i;
                                case "`":
                                    return a.slice(0, u);
                                case "'":
                                    return a.slice(f);
                                case "<":
                                    r = c[e.slice(1, -1)];
                                    break;
                                default:
                                    var n, o = +e;
                                    if (0 == o)
                                        return t;
                                    if (l < o)
                                        return 0 !== (n = N(o / 10)) && n <= l ? void 0 === s[n - 1] ? e.charAt(1) : s[n - 1] + e.charAt(1) : t;
                                    r = s[o - 1]
                                }
                                return void 0 === r ? "" : r
                            })
                        }(y, i, d, v, m, e);
                        l <= d && (f += i.slice(l, d) + E,
                        l = d + y.length)
                    }
                    return f + i.slice(l)
                }
                ]
            })
        }
        ,
        6142: (t,e,r)=>{
            "use strict";
            var u = r(7007)
              , s = r(7195)
              , c = r(7787);
            r(8082)("search", 1, function(n, o, i, a) {
                return [function(t) {
                    var e = n(this)
                      , r = null == t ? void 0 : t[o];
                    return void 0 !== r ? r.call(t, e) : new RegExp(t)[o](String(e))
                }
                , function(t) {
                    var e = a(i, t, this);
                    if (e.done)
                        return e.value;
                    var e = u(t)
                      , t = String(this)
                      , r = e.lastIndex
                      , t = (s(r, 0) || (e.lastIndex = 0),
                    c(e, t));
                    return s(e.lastIndex, r) || (e.lastIndex = r),
                    null === t ? -1 : t.index
                }
                ]
            })
        }
        ,
        1876: (t,e,r)=>{
            "use strict";
            var l = r(5364)
              , g = r(7007)
              , m = r(8364)
              , E = r(6793)
              , w = r(875)
              , b = r(7787)
              , h = r(1165)
              , n = r(4253)
              , _ = Math.min
              , p = [].push
              , a = "split"
              , O = "length"
              , I = "lastIndex"
              , R = 4294967295
              , S = !n(function() {
                RegExp(R, "y")
            });
            r(8082)("split", 2, function(o, i, y, d) {
                var v = "c" == "abbc"[a](/(b)*/)[1] || 4 != "test"[a](/(?:)/, -1)[O] || 2 != "ab"[a](/(?:ab)*/)[O] || 4 != "."[a](/(.?)(.?)/)[O] || 1 < "."[a](/()()/)[O] || ""[a](/.?/)[O] ? function(t, e) {
                    var r = String(this);
                    if (void 0 === t && 0 === e)
                        return [];
                    if (!l(t))
                        return y.call(r, t, e);
                    for (var n, o, i, a = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), s = 0, c = void 0 === e ? R : e >>> 0, f = new RegExp(t.source,u + "g"); (n = h.call(f, r)) && !(s < (o = f[I]) && (a.push(r.slice(s, n.index)),
                    1 < n[O] && n.index < r[O] && p.apply(a, n.slice(1)),
                    i = n[0][O],
                    s = o,
                    a[O] >= c)); )
                        f[I] === n.index && f[I]++;
                    return s === r[O] ? !i && f.test("") || a.push("") : a.push(r.slice(s)),
                    a[O] > c ? a.slice(0, c) : a
                }
                : "0"[a](void 0, 0)[O] ? function(t, e) {
                    return void 0 === t && 0 === e ? [] : y.call(this, t, e)
                }
                : y;
                return [function(t, e) {
                    var r = o(this)
                      , n = null == t ? void 0 : t[i];
                    return void 0 !== n ? n.call(t, r, e) : v.call(String(r), t, e)
                }
                , function(t, e) {
                    var r = d(v, t, this, e, v !== y);
                    if (r.done)
                        return r.value;
                    var r = g(t)
                      , n = String(this)
                      , t = m(r, RegExp)
                      , o = r.unicode
                      , i = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (S ? "y" : "g")
                      , a = new t(S ? r : "^(?:" + r.source + ")",i)
                      , u = void 0 === e ? R : e >>> 0;
                    if (0 == u)
                        return [];
                    if (0 === n.length)
                        return null === b(a, n) ? [n] : [];
                    for (var s = 0, c = 0, f = []; c < n.length; ) {
                        a.lastIndex = S ? c : 0;
                        var l, h = b(a, S ? n : n.slice(c));
                        if (null === h || (l = _(w(a.lastIndex + (S ? 0 : c)), n.length)) === s)
                            c = E(n, c, o);
                        else {
                            if (f.push(n.slice(s, c)),
                            f.length === u)
                                return f;
                            for (var p = 1; p <= h.length - 1; p++)
                                if (f.push(h[p]),
                                f.length === u)
                                    return f;
                            c = s = l
                        }
                    }
                    return f.push(n.slice(s)),
                    f
                }
                ]
            })
        }
        ,
        6108: (t,e,r)=>{
            "use strict";
            r(6774);
            function n(t) {
                r(7234)(RegExp.prototype, u, t, !0)
            }
            var o = r(7007)
              , i = r(3218)
              , a = r(7057)
              , u = "toString"
              , s = /./[u];
            r(4253)(function() {
                return "/a/b" != s.call({
                    source: "a",
                    flags: "b"
                })
            }) ? n(function() {
                var t = o(this);
                return "/".concat(t.source, "/", "flags"in t ? t.flags : !a && t instanceof RegExp ? i.call(t) : void 0)
            }) : s.name != u && n(function() {
                return s.call(this)
            })
        }
        ,
        8184: (t,e,r)=>{
            "use strict";
            var n = r(9824)
              , o = r(1616);
            t.exports = r(5795)("Set", function(t) {
                return function() {
                    return t(this, 0 < arguments.length ? arguments[0] : void 0)
                }
            }, {
                add: function(t) {
                    return n.def(o(this, "Set"), t = 0 === t ? 0 : t, t)
                }
            }, n)
        }
        ,
        856: (t,e,r)=>{
            "use strict";
            r(9395)("anchor", function(e) {
                return function(t) {
                    return e(this, "a", "name", t)
                }
            })
        }
        ,
        703: (t,e,r)=>{
            "use strict";
            r(9395)("big", function(t) {
                return function() {
                    return t(this, "big", "", "")
                }
            })
        }
        ,
        1539: (t,e,r)=>{
            "use strict";
            r(9395)("blink", function(t) {
                return function() {
                    return t(this, "blink", "", "")
                }
            })
        }
        ,
        5292: (t,e,r)=>{
            "use strict";
            r(9395)("bold", function(t) {
                return function() {
                    return t(this, "b", "", "")
                }
            })
        }
        ,
        9539: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(4496)(!1);
            n(n.P, "String", {
                codePointAt: function(t) {
                    return o(this, t)
                }
            })
        }
        ,
        6620: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(875)
              , i = r(2094)
              , a = "endsWith"
              , u = ""[a];
            n(n.P + n.F * r(8852)(a), "String", {
                endsWith: function(t) {
                    var e = i(this, t, a)
                      , r = 1 < arguments.length ? arguments[1] : void 0
                      , n = o(e.length)
                      , r = void 0 === r ? n : Math.min(o(r), n)
                      , n = String(t);
                    return u ? u.call(e, n, r) : e.slice(r - n.length, r) === n
                }
            })
        }
        ,
        6629: (t,e,r)=>{
            "use strict";
            r(9395)("fixed", function(t) {
                return function() {
                    return t(this, "tt", "", "")
                }
            })
        }
        ,
        3694: (t,e,r)=>{
            "use strict";
            r(9395)("fontcolor", function(e) {
                return function(t) {
                    return e(this, "font", "color", t)
                }
            })
        }
        ,
        7648: (t,e,r)=>{
            "use strict";
            r(9395)("fontsize", function(e) {
                return function(t) {
                    return e(this, "font", "size", t)
                }
            })
        }
        ,
        191: (t,e,r)=>{
            var n = r(2985)
              , i = r(2337)
              , a = String.fromCharCode
              , r = String.fromCodePoint;
            n(n.S + n.F * (!!r && 1 != r.length), "String", {
                fromCodePoint: function(t) {
                    for (var e, r = [], n = arguments.length, o = 0; o < n; ) {
                        if (e = +arguments[o++],
                        i(e, 1114111) !== e)
                            throw RangeError(e + " is not a valid code point");
                        r.push(e < 65536 ? a(e) : a(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
                    }
                    return r.join("")
                }
            })
        }
        ,
        2850: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(2094)
              , i = "includes";
            n(n.P + n.F * r(8852)(i), "String", {
                includes: function(t) {
                    return !!~o(this, t, i).indexOf(t, 1 < arguments.length ? arguments[1] : void 0)
                }
            })
        }
        ,
        7795: (t,e,r)=>{
            "use strict";
            r(9395)("italics", function(t) {
                return function() {
                    return t(this, "i", "", "")
                }
            })
        }
        ,
        9115: (t,e,r)=>{
            "use strict";
            var n = r(4496)(!0);
            r(2923)(String, "String", function(t) {
                this._t = String(t),
                this._i = 0
            }, function() {
                var t = this._t
                  , e = this._i;
                return e >= t.length ? {
                    value: void 0,
                    done: !0
                } : (t = n(t, e),
                this._i += t.length,
                {
                    value: t,
                    done: !1
                })
            })
        }
        ,
        4531: (t,e,r)=>{
            "use strict";
            r(9395)("link", function(e) {
                return function(t) {
                    return e(this, "a", "href", t)
                }
            })
        }
        ,
        8306: (t,e,r)=>{
            var n = r(2985)
              , a = r(2110)
              , u = r(875);
            n(n.S, "String", {
                raw: function(t) {
                    for (var e = a(t.raw), r = u(e.length), n = arguments.length, o = [], i = 0; i < r; )
                        o.push(String(e[i++])),
                        i < n && o.push(String(arguments[i]));
                    return o.join("")
                }
            })
        }
        ,
        823: (t,e,r)=>{
            var n = r(2985);
            n(n.P, "String", {
                repeat: r(8595)
            })
        }
        ,
        3605: (t,e,r)=>{
            "use strict";
            r(9395)("small", function(t) {
                return function() {
                    return t(this, "small", "", "")
                }
            })
        }
        ,
        7732: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(875)
              , i = r(2094)
              , a = "startsWith"
              , u = ""[a];
            n(n.P + n.F * r(8852)(a), "String", {
                startsWith: function(t) {
                    var e = i(this, t, a)
                      , r = o(Math.min(1 < arguments.length ? arguments[1] : void 0, e.length))
                      , t = String(t);
                    return u ? u.call(e, t, r) : e.slice(r, r + t.length) === t
                }
            })
        }
        ,
        6780: (t,e,r)=>{
            "use strict";
            r(9395)("strike", function(t) {
                return function() {
                    return t(this, "strike", "", "")
                }
            })
        }
        ,
        9937: (t,e,r)=>{
            "use strict";
            r(9395)("sub", function(t) {
                return function() {
                    return t(this, "sub", "", "")
                }
            })
        }
        ,
        511: (t,e,r)=>{
            "use strict";
            r(9395)("sup", function(t) {
                return function() {
                    return t(this, "sup", "", "")
                }
            })
        }
        ,
        4564: (t,e,r)=>{
            "use strict";
            r(9599)("trim", function(t) {
                return function() {
                    return t(this, 3)
                }
            })
        }
        ,
        5767: (C,j,t)=>{
            "use strict";
            function n(t) {
                var e = x[t] = E(_[R]);
                return e._k = t,
                e
            }
            function r(t, e) {
                d(t);
                for (var r, n = Y(e = v(e)), o = 0, i = n.length; o < i; )
                    F(t, r = n[o++], e[r]);
                return t
            }
            function e(t) {
                var e = tt.call(this, t = g(t, !0));
                return !(this === N && s(x, t) && !s(T, t)) && (!(e || !s(this, t) || !s(x, t) || s(this, S) && this[S][t]) || e)
            }
            function o(t, e) {
                var r;
                if (t = v(t),
                e = g(e, !0),
                t !== N || !s(x, e) || s(T, e))
                    return !(r = z(t, e)) || !s(x, e) || s(t, S) && t[S][e] || (r.enumerable = !0),
                    r
            }
            function i(t) {
                for (var e, r = Z(v(t)), n = [], o = 0; r.length > o; )
                    s(x, e = r[o++]) || e == S || e == M || n.push(e);
                return n
            }
            function a(t) {
                for (var e, r = t === N, n = Z(r ? T : v(t)), o = [], i = 0; n.length > i; )
                    !s(x, e = n[i++]) || r && !s(N, e) || o.push(x[e]);
                return o
            }
            var u = t(3816)
              , s = t(9181)
              , c = t(7057)
              , f = t(2985)
              , B = t(7234)
              , M = t(4728).KEY
              , l = t(4253)
              , h = t(3825)
              , p = t(2943)
              , U = t(3953)
              , y = t(6314)
              , V = t(8787)
              , G = t(6074)
              , Y = t(5541)
              , q = t(4302)
              , d = t(7007)
              , K = t(5286)
              , W = t(508)
              , v = t(2110)
              , g = t(1689)
              , m = t(681)
              , E = t(2503)
              , J = t(9327)
              , H = t(8693)
              , w = t(4548)
              , X = t(9275)
              , Q = t(7184)
              , z = H.f
              , b = X.f
              , Z = J.f
              , _ = u.Symbol
              , O = u.JSON
              , I = O && O.stringify
              , R = "prototype"
              , S = y("_hidden")
              , $ = y("toPrimitive")
              , tt = {}.propertyIsEnumerable
              , P = h("symbol-registry")
              , x = h("symbols")
              , T = h("op-symbols")
              , N = Object[R]
              , h = "function" == typeof _ && !!w.f
              , k = u.QObject
              , A = !k || !k[R] || !k[R].findChild
              , L = c && l(function() {
                return 7 != E(b({}, "a", {
                    get: function() {
                        return b(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, r) {
                var n = z(N, e);
                n && delete N[e],
                b(t, e, r),
                n && t !== N && b(N, e, n)
            }
            : b
              , D = h && "symbol" == typeof _.iterator ? function(t) {
                return "symbol" == typeof t
            }
            : function(t) {
                return t instanceof _
            }
              , F = function(t, e, r) {
                return t === N && F(T, e, r),
                d(t),
                e = g(e, !0),
                d(r),
                s(x, e) ? (r.enumerable ? (s(t, S) && t[S][e] && (t[S][e] = !1),
                r = E(r, {
                    enumerable: m(0, !1)
                })) : (s(t, S) || b(t, S, m(1, {})),
                t[S][e] = !0),
                L(t, e, r)) : b(t, e, r)
            };
            h || (B((_ = function() {
                if (this instanceof _)
                    throw TypeError("Symbol is not a constructor!");
                var e = U(0 < arguments.length ? arguments[0] : void 0)
                  , r = function(t) {
                    this === N && r.call(T, t),
                    s(this, S) && s(this[S], e) && (this[S][e] = !1),
                    L(this, e, m(1, t))
                };
                return c && A && L(N, e, {
                    configurable: !0,
                    set: r
                }),
                n(e)
            }
            )[R], "toString", function() {
                return this._k
            }),
            H.f = o,
            X.f = F,
            t(616).f = J.f = i,
            t(4682).f = e,
            w.f = a,
            c && !t(4461) && B(N, "propertyIsEnumerable", e, !0),
            V.f = function(t) {
                return n(y(t))
            }
            ),
            f(f.G + f.W + f.F * !h, {
                Symbol: _
            });
            for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; et.length > rt; )
                y(et[rt++]);
            for (var nt = Q(y.store), ot = 0; nt.length > ot; )
                G(nt[ot++]);
            f(f.S + f.F * !h, "Symbol", {
                for: function(t) {
                    return s(P, t += "") ? P[t] : P[t] = _(t)
                },
                keyFor: function(t) {
                    if (!D(t))
                        throw TypeError(t + " is not a symbol!");
                    for (var e in P)
                        if (P[e] === t)
                            return e
                },
                useSetter: function() {
                    A = !0
                },
                useSimple: function() {
                    A = !1
                }
            }),
            f(f.S + f.F * !h, "Object", {
                create: function(t, e) {
                    return void 0 === e ? E(t) : r(E(t), e)
                },
                defineProperty: F,
                defineProperties: r,
                getOwnPropertyDescriptor: o,
                getOwnPropertyNames: i,
                getOwnPropertySymbols: a
            });
            k = l(function() {
                w.f(1)
            });
            f(f.S + f.F * k, "Object", {
                getOwnPropertySymbols: function(t) {
                    return w.f(W(t))
                }
            }),
            O && f(f.S + f.F * (!h || l(function() {
                var t = _();
                return "[null]" != I([t]) || "{}" != I({
                    a: t
                }) || "{}" != I(Object(t))
            })), "JSON", {
                stringify: function(t) {
                    for (var e, r, n = [t], o = 1; o < arguments.length; )
                        n.push(arguments[o++]);
                    if (r = e = n[1],
                    (K(e) || void 0 !== t) && !D(t))
                        return q(e) || (e = function(t, e) {
                            if ("function" == typeof r && (e = r.call(this, t, e)),
                            !D(e))
                                return e
                        }
                        ),
                        n[1] = e,
                        I.apply(O, n)
                }
            }),
            _[R][$] || t(7728)(_[R], $, _[R].valueOf),
            p(_, "Symbol"),
            p(Math, "Math", !0),
            p(u.JSON, "JSON", !0)
        }
        ,
        142: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(9383)
              , i = r(1125)
              , s = r(7007)
              , c = r(2337)
              , f = r(875)
              , a = r(5286)
              , u = r(3816).ArrayBuffer
              , l = r(8364)
              , h = i.ArrayBuffer
              , p = i.DataView
              , y = o.ABV && u.isView
              , d = h.prototype.slice
              , v = o.VIEW
              , i = "ArrayBuffer";
            n(n.G + n.W + n.F * (u !== h), {
                ArrayBuffer: h
            }),
            n(n.S + n.F * !o.CONSTR, i, {
                isView: function(t) {
                    return y && y(t) || a(t) && v in t
                }
            }),
            n(n.P + n.U + n.F * r(4253)(function() {
                return !new h(2).slice(1, void 0).byteLength
            }), i, {
                slice: function(t, e) {
                    if (void 0 !== d && void 0 === e)
                        return d.call(s(this), t);
                    for (var r = s(this).byteLength, n = c(t, r), o = c(void 0 === e ? r : e, r), t = new (l(this, h))(f(o - n)), i = new p(this), a = new p(t), u = 0; n < o; )
                        a.setUint8(u++, i.getUint8(n++));
                    return t
                }
            }),
            r(2974)(i)
        }
        ,
        1786: (t,e,r)=>{
            var n = r(2985);
            n(n.G + n.W + n.F * !r(9383).ABV, {
                DataView: r(1125).DataView
            })
        }
        ,
        162: (t,e,r)=>{
            r(8440)("Float32", 4, function(n) {
                return function(t, e, r) {
                    return n(this, t, e, r)
                }
            })
        }
        ,
        3834: (t,e,r)=>{
            r(8440)("Float64", 8, function(n) {
                return function(t, e, r) {
                    return n(this, t, e, r)
                }
            })
        }
        ,
        4821: (t,e,r)=>{
            r(8440)("Int16", 2, function(n) {
                return function(t, e, r) {
                    return n(this, t, e, r)
                }
            })
        }
        ,
        1303: (t,e,r)=>{
            r(8440)("Int32", 4, function(n) {
                return function(t, e, r) {
                    return n(this, t, e, r)
                }
            })
        }
        ,
        5368: (t,e,r)=>{
            r(8440)("Int8", 1, function(n) {
                return function(t, e, r) {
                    return n(this, t, e, r)
                }
            })
        }
        ,
        9103: (t,e,r)=>{
            r(8440)("Uint16", 2, function(n) {
                return function(t, e, r) {
                    return n(this, t, e, r)
                }
            })
        }
        ,
        3318: (t,e,r)=>{
            r(8440)("Uint32", 4, function(n) {
                return function(t, e, r) {
                    return n(this, t, e, r)
                }
            })
        }
        ,
        6964: (t,e,r)=>{
            r(8440)("Uint8", 1, function(n) {
                return function(t, e, r) {
                    return n(this, t, e, r)
                }
            })
        }
        ,
        2152: (t,e,r)=>{
            r(8440)("Uint8", 1, function(n) {
                return function(t, e, r) {
                    return n(this, t, e, r)
                }
            }, !0)
        }
        ,
        147: (t,e,r)=>{
            "use strict";
            function n(t) {
                return function() {
                    return t(this, 0 < arguments.length ? arguments[0] : void 0)
                }
            }
            var i, o = r(3816), a = r(50)(0), u = r(7234), s = r(4728), c = r(5345), f = r(3657), l = r(5286), h = r(1616), p = r(1616), o = !o.ActiveXObject && "ActiveXObject"in o, y = "WeakMap", d = s.getWeak, v = Object.isExtensible, g = f.ufstore, m = {
                get: function(t) {
                    var e;
                    if (l(t))
                        return !0 === (e = d(t)) ? g(h(this, y)).get(t) : e ? e[this._i] : void 0
                },
                set: function(t, e) {
                    return f.def(h(this, y), t, e)
                }
            }, E = t.exports = r(5795)(y, n, m, f, !0, !0);
            p && o && (c((i = f.getConstructor(n, y)).prototype, m),
            s.NEED = !0,
            a(["delete", "has", "get", "set"], function(n) {
                var t = E.prototype
                  , o = t[n];
                u(t, n, function(t, e) {
                    var r;
                    return l(t) && !v(t) ? (this._f || (this._f = new i),
                    r = this._f[n](t, e),
                    "set" == n ? this : r) : o.call(this, t, e)
                })
            }))
        }
        ,
        9192: (t,e,r)=>{
            "use strict";
            var n = r(3657)
              , o = r(1616)
              , i = "WeakSet";
            r(5795)(i, function(t) {
                return function() {
                    return t(this, 0 < arguments.length ? arguments[0] : void 0)
                }
            }, {
                add: function(t) {
                    return n.def(o(this, i), t, !0)
                }
            }, n, !1, !0)
        }
        ,
        1268: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(3325)
              , i = r(508)
              , a = r(875)
              , u = r(4963)
              , s = r(6886);
            n(n.P, "Array", {
                flatMap: function(t) {
                    var e, r, n = i(this);
                    return u(t),
                    e = a(n.length),
                    r = s(n, 0),
                    o(r, n, n, e, 0, 1, t, arguments[1]),
                    r
                }
            }),
            r(7722)("flatMap")
        }
        ,
        2773: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(9315)(!0);
            n(n.P, "Array", {
                includes: function(t) {
                    return o(this, t, 1 < arguments.length ? arguments[1] : void 0)
                }
            }),
            r(7722)("includes")
        }
        ,
        3276: (t,e,r)=>{
            var n = r(2985)
              , o = r(1131)(!0);
            n(n.S, "Object", {
                entries: function(t) {
                    return o(t)
                }
            })
        }
        ,
        8351: (t,e,r)=>{
            var n = r(2985)
              , s = r(7643)
              , c = r(2110)
              , f = r(8693)
              , l = r(2811);
            n(n.S, "Object", {
                getOwnPropertyDescriptors: function(t) {
                    for (var e, r, n = c(t), o = f.f, i = s(n), a = {}, u = 0; i.length > u; )
                        void 0 !== (r = o(n, e = i[u++])) && l(a, e, r);
                    return a
                }
            })
        }
        ,
        6409: (t,e,r)=>{
            var n = r(2985)
              , o = r(1131)(!1);
            n(n.S, "Object", {
                values: function(t) {
                    return o(t)
                }
            })
        }
        ,
        9865: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(5645)
              , i = r(3816)
              , a = r(8364)
              , u = r(94);
            n(n.P + n.R, "Promise", {
                finally: function(e) {
                    var r = a(this, o.Promise || i.Promise)
                      , t = "function" == typeof e;
                    return this.then(t ? function(t) {
                        return u(r, e()).then(function() {
                            return t
                        })
                    }
                    : e, t ? function(t) {
                        return u(r, e()).then(function() {
                            throw t
                        })
                    }
                    : e)
                }
            })
        }
        ,
        2770: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(5442)
              , r = r(575)
              , r = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
            n(n.P + n.F * r, "String", {
                padEnd: function(t) {
                    return o(this, t, 1 < arguments.length ? arguments[1] : void 0, !1)
                }
            })
        }
        ,
        1784: (t,e,r)=>{
            "use strict";
            var n = r(2985)
              , o = r(5442)
              , r = r(575)
              , r = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
            n(n.P + n.F * r, "String", {
                padStart: function(t) {
                    return o(this, t, 1 < arguments.length ? arguments[1] : void 0, !0)
                }
            })
        }
        ,
        5869: (t,e,r)=>{
            "use strict";
            r(9599)("trimLeft", function(t) {
                return function() {
                    return t(this, 1)
                }
            }, "trimStart")
        }
        ,
        4325: (t,e,r)=>{
            "use strict";
            r(9599)("trimRight", function(t) {
                return function() {
                    return t(this, 2)
                }
            }, "trimEnd")
        }
        ,
        9665: (t,e,r)=>{
            r(6074)("asyncIterator")
        }
        ,
        1181: (t,e,r)=>{
            for (var n = r(6997), o = r(7184), i = r(7234), a = r(3816), u = r(7728), s = r(2803), r = r(6314), c = r("iterator"), f = r("toStringTag"), l = s.Array, h = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, p = o(h), y = 0; y < p.length; y++) {
                var d, v = p[y], g = h[v], m = a[v], E = m && m.prototype;
                if (E && (E[c] || u(E, c, l),
                E[f] || u(E, f, v),
                s[v] = l,
                g))
                    for (d in n)
                        E[d] || i(E, d, n[d], !0)
            }
        }
        ,
        4633: (t,e,r)=>{
            var n = r(2985)
              , r = r(4193);
            n(n.G + n.B, {
                setImmediate: r.set,
                clearImmediate: r.clear
            })
        }
        ,
        2564: (t,e,r)=>{
            function n(o) {
                return function(t, e) {
                    var r = 2 < arguments.length
                      , n = r && a.call(arguments, 2);
                    return o(r ? function() {
                        ("function" == typeof t ? t : Function(t)).apply(this, n)
                    }
                    : t, e)
                }
            }
            var o = r(3816)
              , i = r(2985)
              , r = r(575)
              , a = [].slice
              , r = /MSIE .\./.test(r);
            i(i.G + i.B + i.F * r, {
                setTimeout: n(o.setTimeout),
                setInterval: n(o.setInterval)
            })
        }
        ,
        6337: (t,e,r)=>{
            r(2564),
            r(4633),
            r(1181),
            t.exports = r(5645)
        }
        ,
        5666: e=>{
            e = function(a) {
                "use strict";
                var s, t = Object.prototype, c = t.hasOwnProperty, e = "function" == typeof Symbol ? Symbol : {}, n = e.iterator || "@@iterator", r = e.asyncIterator || "@@asyncIterator", o = e.toStringTag || "@@toStringTag";
                function i(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    i({}, "")
                } catch (t) {
                    i = function(t, e, r) {
                        return t[e] = r
                    }
                }
                function u(t, e, r, n) {
                    var o, i, a, u, e = e && e.prototype instanceof v ? e : v, e = Object.create(e.prototype), n = new R(n || []);
                    return e._invoke = (o = t,
                    i = r,
                    a = n,
                    u = l,
                    function(t, e) {
                        if (u === p)
                            throw new Error("Generator is already running");
                        if (u === y) {
                            if ("throw" === t)
                                throw e;
                            return P()
                        }
                        for (a.method = t,
                        a.arg = e; ; ) {
                            var r = a.delegate;
                            if (r) {
                                r = function t(e, r) {
                                    var n = e.iterator[r.method];
                                    if (n === s) {
                                        if (r.delegate = null,
                                        "throw" === r.method) {
                                            if (e.iterator.return && (r.method = "return",
                                            r.arg = s,
                                            t(e, r),
                                            "throw" === r.method))
                                                return d;
                                            r.method = "throw",
                                            r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                        }
                                        return d
                                    }
                                    n = f(n, e.iterator, r.arg);
                                    if ("throw" === n.type)
                                        return r.method = "throw",
                                        r.arg = n.arg,
                                        r.delegate = null,
                                        d;
                                    n = n.arg;
                                    if (!n)
                                        return r.method = "throw",
                                        r.arg = new TypeError("iterator result is not an object"),
                                        r.delegate = null,
                                        d;
                                    {
                                        if (!n.done)
                                            return n;
                                        r[e.resultName] = n.value,
                                        r.next = e.nextLoc,
                                        "return" !== r.method && (r.method = "next",
                                        r.arg = s)
                                    }
                                    r.delegate = null;
                                    return d
                                }(r, a);
                                if (r) {
                                    if (r === d)
                                        continue;
                                    return r
                                }
                            }
                            if ("next" === a.method)
                                a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if (u === l)
                                    throw u = y,
                                    a.arg;
                                a.dispatchException(a.arg)
                            } else
                                "return" === a.method && a.abrupt("return", a.arg);
                            u = p;
                            r = f(o, i, a);
                            if ("normal" === r.type) {
                                if (u = a.done ? y : h,
                                r.arg !== d)
                                    return {
                                        value: r.arg,
                                        done: a.done
                                    }
                            } else
                                "throw" === r.type && (u = y,
                                a.method = "throw",
                                a.arg = r.arg)
                        }
                    }
                    ),
                    e
                }
                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                a.wrap = u;
                var l = "suspendedStart"
                  , h = "suspendedYield"
                  , p = "executing"
                  , y = "completed"
                  , d = {};
                function v() {}
                function g() {}
                function m() {}
                var e = {}
                  , E = (i(e, n, function() {
                    return this
                }),
                Object.getPrototypeOf)
                  , E = E && E(E(S([])))
                  , w = (E && E !== t && c.call(E, n) && (e = E),
                m.prototype = v.prototype = Object.create(e));
                function b(t) {
                    ["next", "throw", "return"].forEach(function(e) {
                        i(t, e, function(t) {
                            return this._invoke(e, t)
                        })
                    })
                }
                function _(a, u) {
                    var e;
                    this._invoke = function(r, n) {
                        function t() {
                            return new u(function(t, e) {
                                !function e(t, r, n, o) {
                                    var i, t = f(a[t], a, r);
                                    if ("throw" !== t.type)
                                        return (r = (i = t.arg).value) && "object" == typeof r && c.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                            e("next", t, n, o)
                                        }, function(t) {
                                            e("throw", t, n, o)
                                        }) : u.resolve(r).then(function(t) {
                                            i.value = t,
                                            n(i)
                                        }, function(t) {
                                            return e("throw", t, n, o)
                                        });
                                    o(t.arg)
                                }(r, n, t, e)
                            }
                            )
                        }
                        return e = e ? e.then(t, t) : t()
                    }
                }
                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function I(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function R(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(O, this),
                    this.reset(!0)
                }
                function S(e) {
                    if (e) {
                        var r, t = e[n];
                        if (t)
                            return t.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length))
                            return r = -1,
                            (t = function t() {
                                for (; ++r < e.length; )
                                    if (c.call(e, r))
                                        return t.value = e[r],
                                        t.done = !1,
                                        t;
                                return t.value = s,
                                t.done = !0,
                                t
                            }
                            ).next = t
                    }
                    return {
                        next: P
                    }
                }
                function P() {
                    return {
                        value: s,
                        done: !0
                    }
                }
                return i(w, "constructor", g.prototype = m),
                i(m, "constructor", g),
                g.displayName = i(m, o, "GeneratorFunction"),
                a.isGeneratorFunction = function(t) {
                    t = "function" == typeof t && t.constructor;
                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                a.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                    i(t, o, "GeneratorFunction")),
                    t.prototype = Object.create(w),
                    t
                }
                ,
                a.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                b(_.prototype),
                i(_.prototype, r, function() {
                    return this
                }),
                a.AsyncIterator = _,
                a.async = function(t, e, r, n, o) {
                    void 0 === o && (o = Promise);
                    var i = new _(u(t, e, r, n),o);
                    return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                        return t.done ? t.value : i.next()
                    })
                }
                ,
                b(w),
                i(w, o, "Generator"),
                i(w, n, function() {
                    return this
                }),
                i(w, "toString", function() {
                    return "[object Generator]"
                }),
                a.keys = function(r) {
                    var t, n = [];
                    for (t in r)
                        n.push(t);
                    return n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var e = n.pop();
                            if (e in r)
                                return t.value = e,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                a.values = S,
                R.prototype = {
                    constructor: R,
                    reset: function(t) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = s,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = s,
                        this.tryEntries.forEach(I),
                        !t)
                            for (var e in this)
                                "t" === e.charAt(0) && c.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = s)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(r) {
                        if (this.done)
                            throw r;
                        var n = this;
                        function t(t, e) {
                            return i.type = "throw",
                            i.arg = r,
                            n.next = t,
                            e && (n.method = "next",
                            n.arg = s),
                            !!e
                        }
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var o = this.tryEntries[e]
                              , i = o.completion;
                            if ("root" === o.tryLoc)
                                return t("end");
                            if (o.tryLoc <= this.prev) {
                                var a = c.call(o, "catchLoc")
                                  , u = c.call(o, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < o.catchLoc)
                                        return t(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc)
                                        return t(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc)
                                        return t(o.catchLoc, !0)
                                } else {
                                    if (!u)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc)
                                        return t(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && c.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                        return i.type = t,
                        i.arg = e,
                        o ? (this.method = "next",
                        this.next = o.finallyLoc,
                        d) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        d
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t)
                                return this.complete(r.completion, r.afterLoc),
                                I(r),
                                d
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r, n, o = this.tryEntries[e];
                            if (o.tryLoc === t)
                                return "throw" === (r = o.completion).type && (n = r.arg,
                                I(o)),
                                n
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        },
                        "next" === this.method && (this.arg = s),
                        d
                    }
                },
                a
            }(e.exports);
            try {
                regeneratorRuntime = e
            } catch (t) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
            }
        }
        ,
        3709: t=>{
            "use strict";
            t.exports = JSON.parse('{"name":"indigitall-webpush","description":"indigitall webpush SDK","version":"3.12.1","main":"index.js","author":"Smart2me S.L.","homepage":"https://indigitall.com"}')
        }
    }
      , n = {};
    function Vr(t) {
        var e = n[t];
        if (void 0 !== e)
            return e.exports;
        e = n[t] = {
            exports: {}
        };
        return r[t](e, e.exports, Vr),
        e.exports
    }
    Vr.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }();
    (()=>{
        "use strict";
        function t() {
            return Vr.g._babelPolyfill || "undefined" != typeof window && window._babelPolyfill ? null : Vr(6981)
        }
        t()
    }
    )(),
    (()=>{
        "use strict";
        var t = {
            platform: "webpush",
            version: "0.0.1"
        }
          , e = Vr(3709);
        t.version = e.version;
        const x = t = Object.assign(t, {
            client: {
                URL_BASE: "https://".concat("", "device-api.indigitall.com/v1"),
                INAPP_URL_BASE: "https://".concat("", "inapp-api.indigitall.com/v1"),
                INBOX_URL_BASE: "https://".concat("", "inbox-api.indigitall.com/v1"),
                CUSTOMER_URL_BASE: "https://".concat("", "device-api.indigitall.com/v2")
            }
        });
        function o(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        var u = new (function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                this.storage = this.isLocalStorageAvailable() ? window.localStorage : null
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "isLocalStorageAvailable",
                value: function() {
                    try {
                        var t = window.localStorage
                          , e = "__storage_test__";
                        if (t)
                            return t.setItem(e, e),
                            t.removeItem(e),
                            !0
                    } catch (t) {
                        return t instanceof DOMException && (22 === t.code || 1014 === t.code || "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && 0 !== u.length
                    }
                    return !1
                }
            }, {
                key: "setItem",
                value: function(t, e) {
                    return null != this.storage && (this.storage.setItem(t, e),
                    !0)
                }
            }, {
                key: "getItem",
                value: function(t) {
                    return null != this.storage ? this.storage.getItem(t) : null
                }
            }, {
                key: "deleteItem",
                value: function(t) {
                    return !!this.storage && (this.storage.setItem(t, value),
                    !0)
                }
            }, {
                key: "clear",
                value: function() {
                    this.storage && this.storage.clear()
                }
            }]) && o(e.prototype, r),
            n && o(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }());
        const T = u;
        function n(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function r(t, e, r) {
            return e && n(t.prototype, e),
            r && n(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        new (r(function t() {
            if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }));
        function s(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function f(t, e, r) {
            return e && s(t.prototype, e),
            r && s(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        new (f(function t() {
            if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }));
        function K(t) {
            return (K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function O() {
            O = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == K(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function W(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function J(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        W(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        W(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function H(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const N = new (function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                this.TAG = "[IND]IndexedDB: ",
                this.DB_NAME = "indigitall.indexedDB",
                this.DB_VERSION = 1,
                this.DB_STORE_NAME = "indigitallStore",
                this.DB_STORE_MODE = "readwrite",
                this.DB_KEY_PATH = "id",
                this.DB_STORE_INDEX = "storeIndex",
                this.IDB = indexedDB || mozzIndexedDB || webkitIndexedDB || msIndexedDB
            }
            var e, r, n, o, i, a, u, s;
            return e = t,
            (r = [{
                key: "getDB",
                value: (s = J(O().mark(function t() {
                    var r = this;
                    return O().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise(function(o, e) {
                                    var i, t = r.IDB;
                                    t ? ((i = t.open("indigitall.indexedDB", 1)).onupgradeneeded = function() {
                                        i.result.createObjectStore("indigitallStore").createIndex("storeIndex", "store.key")
                                    }
                                    ,
                                    i.onsuccess = function() {
                                        var t = i.result
                                          , e = t.transaction("indigitallStore", "readwrite")
                                          , r = e.objectStore("indigitallStore")
                                          , n = r.index("storeIndex");
                                        o({
                                            db: t,
                                            tx: e,
                                            store: r,
                                            index: n
                                        })
                                    }
                                    ,
                                    i.onerror = function(t) {
                                        e(t)
                                    }
                                    ) : e(!1)
                                }
                                ));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function() {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "get",
                value: (u = J(O().mark(function t(n, o) {
                    var i = this;
                    return O().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise(function(e, r) {
                                    n || r(!1),
                                    n.index.get(o).onsuccess = function(t) {
                                        t.target.result && (i.close(n),
                                        e(t.target.result.store.value)),
                                        r(!1)
                                    }
                                }
                                ));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "put",
                value: (a = J(O().mark(function t(r, n, o) {
                    var i = this;
                    return O().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise(function(e, t) {
                                    r || t(!1),
                                    r.store.put({
                                        store: {
                                            key: n,
                                            value: o
                                        }
                                    }, n).onsuccess = function(t) {
                                        i.close(r),
                                        e(o)
                                    }
                                }
                                ));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "close",
                value: function(t) {
                    if (t.tx)
                        try {
                            t.tx.oncomplete = function() {
                                t.db.close()
                            }
                        } catch (t) {
                            console.error(this.TAG, t)
                        }
                }
            }, {
                key: "setItem",
                value: (i = J(O().mark(function t(e, r) {
                    var n;
                    return O().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                this.getDB();
                            case 3:
                                return n = t.sent,
                                t.abrupt("return", this.put(n, e, r));
                            case 7:
                                return t.prev = 7,
                                t.t0 = t.catch(0),
                                t.abrupt("return", t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[0, 7]])
                })),
                function(t, e) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "getItem",
                value: (o = J(O().mark(function t(e) {
                    var r;
                    return O().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                this.getDB();
                            case 3:
                                return r = t.sent,
                                t.abrupt("return", this.get(r, e));
                            case 7:
                                return t.prev = 7,
                                t.t0 = t.catch(0),
                                t.abrupt("return", t.t0);
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[0, 7]])
                })),
                function(t) {
                    return o.apply(this, arguments)
                }
                )
            }]) && H(e.prototype, r),
            n && H(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }());
        function X(t) {
            return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function k() {
            k = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == X(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function Q(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function A(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        Q(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        Q(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function z(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const E = new (function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                this.BASE_TIME = 60,
                this.REPOSITORY = "indigitall.repository",
                this.APP_KEY = this.REPOSITORY + ".APP_KEY",
                this.VAPID_PUBLIC = this.REPOSITORY + ".VAPID_PUBLIC",
                this.SAFARI_WEBSITE_PUSH_ID = this.REPOSITORY + ".SAFARI_WEBSITE_PUSH_ID",
                this.ENABLED = this.REPOSITORY + ".ENABLED",
                this.SERVICE_SYNC_TIME = this.REPOSITORY + ".SERVICE_SYNC_TIME",
                this.LOCATION_ENABLED = this.REPOSITORY + ".LOCATION_ENABLED",
                this.LOCATION_UPDATE_MINUTES = this.REPOSITORY + ".LOCATION_UPDATE_MINUTES",
                this.REQUEST_LOCATION = this.REPOSITORY + ".REQUEST_LOCATION",
                this.DEVICE_ID = this.REPOSITORY + ".DEVICE_ID",
                this.PUSH_TOKEN = this.REPOSITORY + ".PUSH_TOKEN",
                this.BROWSER_PUBLIC_KEY = this.REPOSITORY + ".BROWSER_PUBLIC_KEY",
                this.BROWSER_PRIVATE_KEY = this.REPOSITORY + ".BROWSER_PRIVATE_KEY",
                this.PLATFORM = this.REPOSITORY + ".PLATFORM",
                this.BROWSER_NAME = this.REPOSITORY + ".BROWSER_NAME",
                this.BROWSER_VERSION = this.REPOSITORY + ".BROWSER_VERSION",
                this.OS_NAME = this.REPOSITORY + ".OS_NAME",
                this.OS_VERSION = this.REPOSITORY + ".OS_VERSION",
                this.DEVICE_TYPE = this.REPOSITORY + ".DEVICE_TYPE",
                this.SUPPORTED = this.REPOSITORY + ".SUPPORTED",
                this.SERVICE_TIMESTAMP = this.REPOSITORY + ".SERVICE_TIMESTAMP",
                this.LOCATION_TIMESTAMP = this.REPOSITORY + ".LOCATION_TIMESTAMP",
                this.PERMISSION_PUSH = this.REPOSITORY + ".PERMISSION_PUSH",
                this.PERMISSION_LOCATION = this.REPOSITORY + ".PERMISSION_LOCATION",
                this.SET_LOG_DEBUG = this.REPOSITORY + ".SET_LOG_DEBUG",
                this.NEW_USER_TIMESTAMP = this.REPOSITORY + ".NEW_USER_TIMESTAMP",
                this.EXTERNAL_ID = this.REPOSITORY + ".EXTERNAL_ID",
                this.AUTH_TOKEN = this.REPOSITORY + ".AUTH_TOKEN",
                this.JSON_INBOX_AUTH = this.REPOSITORY + ".JSON_INBOX_AUTH",
                this.PAGE_INBOX = this.REPOSITORY + ".PAGE_INBOX",
                this.PAGESIZE_INBOX = this.REPOSITORY + ".PAGESIZE_INBOX",
                this.TOTALPAGES_INBOX = this.REPOSITORY + ".TOTALPAGES_INBOX",
                this.INBOX_DATE_FROM = this.REPOSITORY + ".INBOX_DATE_FROM",
                this.INBOX_DATE_TO = this.REPOSITORY + ".INBOX_DATE_TO",
                this.INBOX_STATUS_LIST = this.REPOSITORY + ".INBOX_STATUS_LIST",
                this.INBOX_AUTH_MODE = this.REPOSITORY + ".INBOX_AUTH_MODE",
                this.INAPP_ENABLED = this.REPOSITORY + ".INAPP_ENABLED",
                this.URL_DEVICE_API = this.REPOSITORY + ".URL_DEVICE_API",
                this.URL_INAPP_API = this.REPOSITORY + ".URL_INAPP_API",
                this.URL_INBOX_API = this.REPOSITORY + ".URL_INBOX_API",
                this.INAPP_SHOW_ONCE = this.REPOSITORY + ".INAPP_SHOW_ONCE",
                this.EXTERNAL_ID_REQUEST = this.REPOSITORY + ".EXTERNAL_ID_REQUEST",
                this.INAPP_TIMES_CLICKED = this.REPOSITORY + ".INAPP_TIMES_CLICKED",
                this.INAPP_DISMISS_FOREVER = this.REPOSITORY + ".INAPP_DISMISS_FOREVER",
                this.DEVICE_JSON = this.REPOSITORY + ".DEVICE_JSON",
                this.REGISTERED_BY_COOKIE = this.REPOSITORY + ".REGISTERED_BY_COOKIE",
                this.LOG_LEVEL = this.REPOSITORY + ".LOG_LEVEL"
            }
            var e, r, n, o, i, a, u, s, c, f, l, h, p, y, d, v, g, m, E, w, b, _, O, I, R, S, P;
            return e = t,
            (r = [{
                key: "clearStorage",
                value: function() {
                    T.clear()
                }
            }, {
                key: "setDeviceId",
                value: (P = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.DEVICE_ID, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return P.apply(this, arguments)
                }
                )
            }, {
                key: "getDeviceId",
                value: function() {
                    return T.getItem(this.DEVICE_ID)
                }
            }, {
                key: "setPushToken",
                value: function(t) {
                    T.setItem(this.PUSH_TOKEN, t)
                }
            }, {
                key: "getPushToken",
                value: function() {
                    return T.getItem(this.PUSH_TOKEN)
                }
            }, {
                key: "setBrowserPublicKey",
                value: function(t) {
                    T.setItem(this.BROWSER_PUBLIC_KEY, t)
                }
            }, {
                key: "getBrowserPublicKey",
                value: function() {
                    return T.getItem(this.BROWSER_PUBLIC_KEY)
                }
            }, {
                key: "setBrowserPrivateKey",
                value: function(t) {
                    T.setItem(this.BROWSER_PRIVATE_KEY, t)
                }
            }, {
                key: "getBrowserPrivateKey",
                value: function() {
                    return T.getItem(this.BROWSER_PRIVATE_KEY)
                }
            }, {
                key: "setAppKey",
                value: (S = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.APP_KEY, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return S.apply(this, arguments)
                }
                )
            }, {
                key: "getAppKey",
                value: function() {
                    return T.getItem(this.APP_KEY)
                }
            }, {
                key: "setVAPID",
                value: function(t) {
                    T.setItem(this.VAPID_PUBLIC, t)
                }
            }, {
                key: "getVAPID",
                value: function() {
                    return T.getItem(this.VAPID_PUBLIC)
                }
            }, {
                key: "setSafariWebsitePushId",
                value: function(t) {
                    T.setItem(this.SAFARI_WEBSITE_PUSH_ID, t)
                }
            }, {
                key: "getSafariWebsitePushId",
                value: function() {
                    return T.getItem(this.SAFARI_WEBSITE_PUSH_ID)
                }
            }, {
                key: "setEnabled",
                value: function(t) {
                    T.setItem(this.ENABLED, t)
                }
            }, {
                key: "getEnabled",
                value: function() {
                    return T.getItem(this.ENABLED)
                }
            }, {
                key: "setServiceSyncTime",
                value: function(t) {
                    T.setItem(this.SERVICE_SYNC_TIME, t * this.BASE_TIME)
                }
            }, {
                key: "getServiceSyncTime",
                value: function() {
                    var t = T.getItem(this.SERVICE_SYNC_TIME);
                    return t || +this.BASE_TIME
                }
            }, {
                key: "setLocationEnabled",
                value: function(t) {
                    T.setItem(this.LOCATION_ENABLED, t)
                }
            }, {
                key: "getLocationEnabled",
                value: function() {
                    return T.getItem(this.LOCATION_ENABLED)
                }
            }, {
                key: "setLocationUpdateMinutes",
                value: function(t) {
                    T.setItem(this.LOCATION_UPDATE_MINUTES, t)
                }
            }, {
                key: "getLocationUpdateMinutes",
                value: function() {
                    var t = T.getItem(this.LOCATION_UPDATE_MINUTES);
                    return t || 30
                }
            }, {
                key: "setRequestLocation",
                value: (R = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.REQUEST_LOCATION, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return R.apply(this, arguments)
                }
                )
            }, {
                key: "getRequestLocation",
                value: function() {
                    return !!T && T.getItem(this.REQUEST_LOCATION)
                }
            }, {
                key: "setPlatform",
                value: (I = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.PLATFORM, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return I.apply(this, arguments)
                }
                )
            }, {
                key: "getPlatform",
                value: function() {
                    return T && T.getItem(this.PLATFORM) || x.platform
                }
            }, {
                key: "getVersion",
                value: function() {
                    return x.version
                }
            }, {
                key: "setBrowserName",
                value: (O = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.BROWSER_NAME, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return O.apply(this, arguments)
                }
                )
            }, {
                key: "getBrowserName",
                value: function() {
                    return T.getItem(this.BROWSER_NAME)
                }
            }, {
                key: "setBrowserVersion",
                value: function(t) {
                    T.setItem(this.BROWSER_VERSION, t)
                }
            }, {
                key: "getBrowserVersion",
                value: function() {
                    return T.getItem(this.BROWSER_VERSION)
                }
            }, {
                key: "setOsName",
                value: (_ = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.OS_NAME, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return _.apply(this, arguments)
                }
                )
            }, {
                key: "getOsName",
                value: function() {
                    return T.getItem(this.OS_NAME)
                }
            }, {
                key: "setOsVersion",
                value: function(t) {
                    T.setItem(this.OS_VERSION, t)
                }
            }, {
                key: "getOsVersion",
                value: function() {
                    return T.getItem(this.OS_VERSION)
                }
            }, {
                key: "setDeviceType",
                value: function(t) {
                    T.setItem(this.DEVICE_TYPE, t)
                }
            }, {
                key: "getDeviceType",
                value: function() {
                    return T.getItem(this.DEVICE_TYPE)
                }
            }, {
                key: "setSupported",
                value: function(t) {
                    T.setItem(this.SUPPORTED, t)
                }
            }, {
                key: "getSupported",
                value: function() {
                    return T.getItem(this.SUPPORTED)
                }
            }, {
                key: "setServiceTimestamp",
                value: function(t) {
                    T.setItem(this.SERVICE_TIMESTAMP, t)
                }
            }, {
                key: "getServiceTimestamp",
                value: function() {
                    return T.getItem(this.SERVICE_TIMESTAMP)
                }
            }, {
                key: "setLocationTimestamp",
                value: function(t) {
                    T.setItem(this.LOCATION_TIMESTAMP, t)
                }
            }, {
                key: "getLocationTimestamp",
                value: function() {
                    return T.getItem(this.LOCATION_TIMESTAMP)
                }
            }, {
                key: "setPermissionPush",
                value: function(t) {
                    T.setItem(this.PERMISSION_PUSH, t)
                }
            }, {
                key: "getPermissionPush",
                value: function() {
                    return T.getItem(this.PERMISSION_PUSH)
                }
            }, {
                key: "setPermissionLocation",
                value: function(t) {
                    T.setItem(this.PERMISSION_LOCATION, t)
                }
            }, {
                key: "getPermissionLocation",
                value: function() {
                    return T.getItem(this.PERMISSION_LOCATION)
                }
            }, {
                key: "setDebugLog",
                value: function(t) {
                    T.setItem(this.SET_LOG_DEBUG, t)
                }
            }, {
                key: "getDebugLog",
                value: function() {
                    return "false" !== T.getItem(this.SET_LOG_DEBUG)
                }
            }, {
                key: "setLogLevel",
                value: function(t) {
                    T.setItem(this.LOG_LEVEL, t)
                }
            }, {
                key: "getLogLevel",
                value: function() {
                    return T.getItem(this.LOG_LEVEL)
                }
            }, {
                key: "setNewUserTimestamp",
                value: function(t) {
                    T.setItem(this.NEW_USER_TIMESTAMP, t)
                }
            }, {
                key: "getNewUserTimestamp",
                value: function() {
                    return T.getItem(this.NEW_USER_TIMESTAMP)
                }
            }, {
                key: "setExternalIdRequest",
                value: (b = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (T && T.isLocalStorageAvailable() && T.setItem(this.EXTERNAL_ID, e),
                                N && N.IDB)
                                    return t.next = 4,
                                    N.setItem(this.EXTERNAL_ID, e);
                                t.next = 4;
                                break;
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return b.apply(this, arguments)
                }
                )
            }, {
                key: "getExternalIdRequest",
                value: (w = A(k().mark(function t() {
                    var e;
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (t.prev = 0,
                                !T || !T.isLocalStorageAvailable()) {
                                    t.next = 5;
                                    break
                                }
                                e = T.getItem(this.EXTERNAL_ID),
                                t.next = 9;
                                break;
                            case 5:
                                if (N && N.IDB)
                                    return t.next = 8,
                                    N.getItem(this.EXTERNAL_ID);
                                t.next = 9;
                                break;
                            case 8:
                                e = t.sent;
                            case 9:
                                t.next = 13;
                                break;
                            case 11:
                                t.prev = 11,
                                t.t0 = t.catch(0);
                            case 13:
                                return t.abrupt("return", e);
                            case 14:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[0, 11]])
                })),
                function() {
                    return w.apply(this, arguments)
                }
                )
            }, {
                key: "setExternalId",
                value: function(t) {
                    T.setItem(this.EXTERNAL_ID, t)
                }
            }, {
                key: "getExternalId",
                value: function() {
                    return T.getItem(this.EXTERNAL_ID)
                }
            }, {
                key: "setAuthToken",
                value: function(t) {
                    T.setItem(this.AUTH_TOKEN, t)
                }
            }, {
                key: "getAuthToken",
                value: function() {
                    return T.getItem(this.AUTH_TOKEN)
                }
            }, {
                key: "setInboxAuthMode",
                value: function(t) {
                    T.setItem(this.INBOX_AUTH_MODE, t)
                }
            }, {
                key: "getInboxAuthMode",
                value: function() {
                    return T.getItem(this.INBOX_AUTH_MODE)
                }
            }, {
                key: "setInAppEnabled",
                value: function(t) {
                    T.setItem(this.INAPP_ENABLED, t)
                }
            }, {
                key: "getInAppEnabled",
                value: function() {
                    return T.getItem(this.INAPP_ENABLED)
                }
            }, {
                key: "getUrlDeviceApi",
                value: (E = A(k().mark(function t() {
                    var e;
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (t.prev = 0,
                                !T || !T.isLocalStorageAvailable()) {
                                    t.next = 5;
                                    break
                                }
                                e = T.getItem(this.URL_DEVICE_API),
                                t.next = 9;
                                break;
                            case 5:
                                if (N && N.IDB)
                                    return t.next = 8,
                                    N.getItem(this.URL_DEVICE_API);
                                t.next = 9;
                                break;
                            case 8:
                                e = t.sent;
                            case 9:
                                t.next = 13;
                                break;
                            case 11:
                                t.prev = 11,
                                t.t0 = t.catch(0);
                            case 13:
                                return t.abrupt("return", e);
                            case 14:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[0, 11]])
                })),
                function() {
                    return E.apply(this, arguments)
                }
                )
            }, {
                key: "setUrlDeviceApi",
                value: (m = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (T && T.isLocalStorageAvailable() && T.setItem(this.URL_DEVICE_API, e),
                                N && N.IDB)
                                    return t.next = 4,
                                    N.setItem(this.URL_DEVICE_API, e);
                                t.next = 4;
                                break;
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return m.apply(this, arguments)
                }
                )
            }, {
                key: "getUrlInappApi",
                value: (g = A(k().mark(function t() {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", T.getItem(this.URL_INAPP_API));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return g.apply(this, arguments)
                }
                )
            }, {
                key: "setUrlInappApi",
                value: (v = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.URL_INAPP_API, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return v.apply(this, arguments)
                }
                )
            }, {
                key: "getUrlInboxApi",
                value: (d = A(k().mark(function t() {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", T.getItem(this.URL_INBOX_API));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return d.apply(this, arguments)
                }
                )
            }, {
                key: "setUrlInboxApi",
                value: (y = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.URL_INBOX_API, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return y.apply(this, arguments)
                }
                )
            }, {
                key: "getInAppShowOnce",
                value: (p = A(k().mark(function t() {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", T.getItem(this.INAPP_SHOW_ONCE));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return p.apply(this, arguments)
                }
                )
            }, {
                key: "setInAppShowOnce",
                value: (h = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.INAPP_SHOW_ONCE, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return h.apply(this, arguments)
                }
                )
            }, {
                key: "getInAppTimesClicked",
                value: (l = A(k().mark(function t() {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", T.getItem(this.INAPP_TIMES_CLICKED));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return l.apply(this, arguments)
                }
                )
            }, {
                key: "setInAppTimesClicked",
                value: (f = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.INAPP_TIMES_CLICKED, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return f.apply(this, arguments)
                }
                )
            }, {
                key: "getInAppDismissForever",
                value: (c = A(k().mark(function t() {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", T.getItem(this.INAPP_DISMISS_FOREVER));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "setInAppDismissForever",
                value: (s = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.INAPP_DISMISS_FOREVER, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "getDeviceJson",
                value: (u = A(k().mark(function t() {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", T.getItem(this.DEVICE_JSON));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "setDeviceJson",
                value: (a = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.DEVICE_JSON, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "getRegisteredByCookie",
                value: (i = A(k().mark(function t() {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", T.getItem(this.REGISTERED_BY_COOKIE));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "setRegisteredByCookie",
                value: (o = A(k().mark(function t(e) {
                    return k().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                T.setItem(this.REGISTERED_BY_COOKIE, e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return o.apply(this, arguments)
                }
                )
            }]) && z(e.prototype, r),
            n && z(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }())
          , l = Object.freeze({
            DEBUG: 1,
            INFO: 2,
            WARNING: 3,
            ERROR: 4
        });
        function Z(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const w = function() {
            function e(t) {
                if (!(this instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                this.tag = "[IND]",
                t && (this.tag = t),
                this.level = l.INFO,
                this.setLogLevel(E.getLogLevel()),
                this.log = []
            }
            var t, r, n;
            return t = e,
            n = [{
                key: "addedAsString",
                value: function(t) {
                    return "string" == typeof t ? t : JSON.stringify(t, null, 2)
                }
            }],
            (r = [{
                key: "setLogLevel",
                value: function(t) {
                    t && t >= l.DEBUG && t <= l.ERROR && (this.level = t)
                }
            }, {
                key: "d",
                value: function() {
                    if (this.level <= l.DEBUG)
                        for (var t = 0; t < arguments.length; t++)
                            this.log += e.addedAsString(arguments[t]);
                    return this
                }
            }, {
                key: "i",
                value: function() {
                    if (this.level <= l.INFO)
                        for (var t = 0; t < arguments.length; t++)
                            this.log += e.addedAsString(arguments[t]);
                    return this
                }
            }, {
                key: "w",
                value: function() {
                    if (this.level <= l.WARNING)
                        for (var t = 0; t < arguments.length; t++)
                            this.log += e.addedAsString(arguments[t]);
                    return this
                }
            }, {
                key: "e",
                value: function(t) {
                    return this.level <= l.ERROR && (this.log += "".concat(t.errorCode, ": ").concat(t.errorMessage)),
                    this
                }
            }, {
                key: "writeLog",
                value: function() {
                    0 < this.log.length && console.log(this.tag, this.log),
                    this.log = []
                }
            }]) && Z(t.prototype, r),
            n && Z(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        function $(t) {
            return ($ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function tt() {
            tt = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == $(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function et(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function rt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        var nt = new w("[IND]Crypto")
          , ot = window.crypto.subtle
          , it = new TextEncoder("utf-8");
        const at = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var e, r, n, u, o;
            return e = t,
            r = null,
            n = [{
                key: "createHmac",
                value: (u = tt().mark(function t(e, r) {
                    var n, o;
                    return tt().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (t.prev = 0,
                                ot) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return t.next = 5,
                                ot.importKey("raw", it.encode(e), {
                                    name: "HMAC",
                                    hash: {
                                        name: "SHA-256"
                                    }
                                }, !1, ["sign", "verify"]);
                            case 5:
                                return n = t.sent,
                                t.next = 8,
                                ot.sign("HMAC", n, it.encode(r));
                            case 8:
                                return n = t.sent,
                                o = new Uint8Array(n),
                                o = Array.prototype.map.call(o, function(t) {
                                    return ("00" + t.toString(16)).slice(-2)
                                }).join(""),
                                nt.d("hmac: ", o).writeLog(),
                                t.abrupt("return", o);
                            case 15:
                                return t.prev = 15,
                                t.t0 = t.catch(0),
                                nt.e("error:", t.t0).writeLog(),
                                t.abrupt("return");
                            case 19:
                            case "end":
                                return t.stop()
                            }
                    }, t, null, [[0, 15]])
                }),
                o = function() {
                    var t = this
                      , a = arguments;
                    return new Promise(function(e, r) {
                        var n = u.apply(t, a);
                        function o(t) {
                            et(n, e, r, o, i, "next", t)
                        }
                        function i(t) {
                            et(n, e, r, o, i, "throw", t)
                        }
                        o(void 0)
                    }
                    )
                }
                ,
                function(t, e) {
                    return o.apply(this, arguments)
                }
                )
            }],
            r && rt(e.prototype, r),
            n && rt(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function ut(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const b = function() {
            function o() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                  , e = 1 < arguments.length ? arguments[1] : void 0
                  , r = this
                  , n = o;
                if (!(r instanceof n))
                    throw new TypeError("Cannot call a class as a function");
                null == t ? (this.deviceId = E.getDeviceId(),
                this.pushToken = E.getPushToken(),
                this.browserPublicKey = E.getBrowserPublicKey(),
                this.browserPrivateKey = E.getBrowserPrivateKey(),
                this.platform = E.getPlatform(),
                this.version = E.getVersion(),
                this.browserName = E.getBrowserName(),
                this.browserVersion = E.getBrowserVersion(),
                this.osName = E.getOsName(),
                this.osVersion = E.getOsVersion(),
                this.deviceType = E.getDeviceType(),
                E.getEnabled() && (this.enabled = "true" === E.getEnabled()),
                E.getExternalId() && (this.externalCode = E.getExternalId())) : e ? (t.enabled && (this.enabled = t.enabled,
                E.setEnabled(this.enabled)),
                t.deviceId && (this.deviceId = t.deviceId,
                E.setDeviceId(this.deviceId)),
                t.registeredByCookie && (this.registeredByCookie = t.registeredByCookie,
                E.setRegisteredByCookie(this.registeredByCookie))) : (t.deviceId && (this.deviceId = t.deviceId),
                t.pushToken && (this.pushToken = t.pushToken),
                t.browserPublicKey && (this.browserPublicKey = t.browserPublicKey),
                t.browserPrivateKey && (this.browserPrivateKey = t.browserPrivateKey),
                t.platform && (this.platform = t.platform),
                t.version && (this.version = t.version),
                t.osVersion && (this.osVersion = t.osVersion),
                t.browserName && (this.browserName = t.browserName),
                t.browserVersion && (this.browserVersion = t.browserVersion),
                t.osName && (this.osName = t.osName),
                t.deviceType && (this.deviceType = t.deviceType),
                t.enabled && (this.enabled = t.enabled),
                t.externalCode && (this.externalCode = t.externalCode)),
                this.platform && (this.productName = this.platform),
                this.version && (this.productVersion = this.version),
                navigator && "language"in navigator && (this.locale = navigator.language),
                Intl && "DateTimeFormat"in Intl && (this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone),
                this.timeOffset = -(new Date).getTimezoneOffset()
            }
            var t, e, r;
            return t = o,
            r = [{
                key: "setDeviceJson",
                value: function(t) {
                    E.setDeviceJson(JSON.stringify(t.toJSON()))
                }
            }, {
                key: "compareDevices",
                value: function(t) {
                    var e, r = new o, n = new o({});
                    return (e = null != t ? new o(t) : e) ? (r.pushToken && r.pushToken != e.pushToken && (n.pushToken = r.pushToken),
                    r.externalCode && r.externalCode != e.externalCode && (n.externalCode = r.externalCode),
                    r.deviceType && r.deviceType != e.deviceType && (n.deviceType = r.deviceType),
                    r.osName && r.osName != e.osName && (n.osName = r.osName),
                    r.version && r.version != e.version && (n.version = r.version,
                    n.productVersion = r.version),
                    n.platform = r.platform,
                    n.productName = r.platform,
                    r.osVersion && r.osVersion != e.osVersion && (n.osVersion = r.osVersion),
                    r.browserName && r.browserName != e.browserName && (n.browserName = r.browserName),
                    r.browserVersion && r.browserVersion != e.browserVersion && (n.browserVersion = r.browserVersion),
                    r.browserPublicKey && r.browserPublicKey != e.browserPublicKey && (n.browserPublicKey = r.browserPublicKey),
                    r.browserPrivateKey && r.browserPrivateKey != e.browserPrivateKey && (n.browserPrivateKey = r.browserPrivateKey),
                    r.deviceId && r.deviceId != e.deviceId && (n.deviceId = r.deviceId),
                    r.enabled && r.enabled != e.enabled && (n.enabled = r.enabled),
                    r.externalCode && r.externalCode != e.externalCode && (n.externalCode = r.externalCode),
                    navigator && "language"in navigator && navigator.language == e.locale && (n.locale = null),
                    Intl && "DateTimeFormat"in Intl && Intl.DateTimeFormat().resolvedOptions().timeZone == e.timeZone && (n.timeZone = null),
                    -(new Date).getTimezoneOffset() == e.timeOffset && (n.timeOffset = null),
                    E.setDeviceJson(JSON.stringify(r.toJSON()))) : (n = new o,
                    E.setDeviceJson(JSON.stringify(n.toJSON()))),
                    n
                }
            }],
            (e = [{
                key: "getDeviceId",
                value: function() {
                    return this.deviceId
                }
            }, {
                key: "getPushToken",
                value: function() {
                    return this.pushToken
                }
            }, {
                key: "setExternalCode",
                value: function(t) {
                    this.externalCode = t
                }
            }, {
                key: "toJSON",
                value: function() {
                    var t = {};
                    return this.platform && (t.platform = this.platform),
                    this.version && (t.version = this.version),
                    this.productName && (t.productName = this.productName),
                    this.productVersion && (t.productVersion = this.productVersion),
                    this.browserName && (t.browserName = this.browserName),
                    this.browserVersion && (t.browserVersion = this.browserVersion),
                    this.osName && (t.osName = this.osName),
                    this.osVersion && (t.osVersion = this.osVersion),
                    this.deviceType && (t.deviceType = this.deviceType),
                    this.locale && (t.locale = this.locale),
                    this.timeZone && (t.timeZome = this.timeZone),
                    this.timeOffset && (t.timeOffset = this.timeOffset),
                    this.deviceId && (t.deviceId = this.deviceId),
                    this.enabled && (t.enabled = this.enabled),
                    this.pushToken && (t.pushToken = this.pushToken),
                    this.browserPublicKey && (t.browserPublicKey = this.browserPublicKey),
                    this.browserPrivateKey && (t.browserPrivateKey = this.browserPrivateKey),
                    this.externalCode && (t.externalCode = this.externalCode),
                    t
                }
            }]) && ut(t.prototype, e),
            r && ut(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }()
          , st = Object.freeze({
            DEFAULT: -1,
            ENABLE: 1,
            DISABLE: 0
        })
          , h = Object.freeze({
            EVENT_TYPE_CLICK: "click",
            EVENT_TYPE_RECEIVE: "receive",
            EVENT_TYPE_UPDATE: "update",
            EVENT_TYPE_ACCEPT: "accept",
            EVENT_TYPE_REJECT: "reject",
            EVENT_TYPE_ASK: "ask"
        });
        function ct(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const ft = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var e, r, n;
            return e = t,
            n = [{
                key: "isServiceTimestampExceed",
                value: function() {
                    return !E.getServiceTimestamp() || E.getServiceSyncTime() <= (Date.now() - E.getServiceTimestamp()) / 6e4
                }
            }],
            (r = null) && ct(e.prototype, r),
            n && ct(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function lt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function ht(t, e, r) {
            return e && lt(t.prototype, e),
            r && lt(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        const _ = ht(function t(e, r) {
            if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function");
            this.errorCode = e,
            this.errorMessage = r
        });
        e = Object.freeze({
            GENERAL_ERROR: 600,
            API_SERVER_ERROR: 500,
            API_PARAMETER_MISSING: 400,
            API_APPKEY_NOT_VALID: 401,
            API_FORBIDDEN_REQUEST: 403,
            API_DEVICE_NOT_FOUND: 404,
            API_TOPICS_ARE_INSERTED: 409,
            PUSH_INITIALIZATION_ERROR: 1e3,
            PUSH_RECEPTION_ERROR: 1200,
            PUSH_TOPICS_ERROR: 1400,
            PUSH_DEVICE_ERROR: 1500,
            PUSH_EVENT_ERROR: 1600,
            INAPP_ERROR: 2e3,
            INAPP_SHOW_INAPP_ERROR: 2100,
            INAPP_POPUP_ERROR: 2300,
            INAPP_GENERAL_ERROR: 2600,
            INBOX_GET_ERROR: 3001,
            INBOX_GET_PAGE_ERROR: 3011,
            INBOX_GENERAL_ERROR: 3600,
            CUSTOMER_GET_ERROR: 4001,
            CUSTOMER_PARAMS_ERROR: 4011,
            CUSTOMER_GENERAL_ERROR: 4600,
            CUSTOMER_NO_EXTERNAL_CODE: 4601,
            BAD_REQUEST_SERVER_ERROR: 4800
        });
        const I = e;
        function pt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const R = new (function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                this.INBOX_NO_MESSAGES = "There are no more messages on Inbox",
                this.INBOX_EXTERNAL_ID_NO_REGISTERED = "External Id not registered",
                this.INBOX_IS_REQUESTING_PAGE = "Wait. Is Requesting new page",
                this.INAPP_ERROR_CONTENT_MESSAGE = "InApp error with content",
                this.INBOX_EMPTY = "There are no messages on Inbox",
                this.CUSTOMER_ERROR_PARAMS = "Params is not correct",
                this.GENERAL_ERROR_BAD_REQUEST = "AppKey or DeviceId are null or empty",
                this.GENERAL_ERROR_APPKEY_BAD_REQUEST = "AppKey is null or empty"
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "requestError",
                value: function(t, e) {
                    new _(t,e);
                    return 4800 === t ? new _(I.BAD_REQUEST_SERVER_ERROR,e) : new _(I.GENERAL_ERROR,e)
                }
            }, {
                key: "apiError",
                value: function(t, e) {
                    var r = new _(t,e);
                    switch (t) {
                    case 500 <= t && t < 600:
                        r = new _(I.SERVER_ERROR,e);
                        break;
                    case 400:
                        r = new _(I.API_PARAMETER_MISSING,e);
                        break;
                    case 401:
                        r = new _(I.API_APPKEY_NOT_VALID,e);
                        break;
                    case 403:
                        r = new _(I.API_FORBIDDEN_REQUEST,e);
                        break;
                    case 404:
                        r = new _(I.API_DEVICE_NOT_FOUND,e);
                        break;
                    case 409:
                        r = new _(I.API_TOPICS_ARE_INSERTED,e);
                        break;
                    default:
                        r = new _(I.GENERAL_ERROR,e)
                    }
                    return r
                }
            }, {
                key: "pushError",
                value: function(t, e) {
                    var r = new _(t,e);
                    switch (t) {
                    case 1e3 <= t && t < 1200:
                        r = new _(I.PUSH_INITIALIZATION_ERROR,e);
                        break;
                    case 1200 <= t && t < 1400:
                        r = new _(I.PUSH_RECEPTION_ERROR,e);
                        break;
                    case 1400 <= t && t < 1500:
                        r = new _(I.PUSH_TOPICS_ERROR,e);
                        break;
                    case 1500 <= t && t < 1600:
                        r = new _(I.PUSH_DEVICE_ERROR,e);
                        break;
                    case 1600 <= t && t < 1700:
                        r = new _(I.PUSH_EVENT_ERROR,e);
                        break;
                    default:
                        r = new _(I.GENERAL_ERROR,e)
                    }
                    return r
                }
            }, {
                key: "inAppError",
                value: function(t, e) {
                    var r = new _(t,e);
                    switch (t) {
                    case 2e3 <= t && t < 2099:
                        r = new _(I.INAPP_ERROR,e);
                        break;
                    case 2100 <= t && t < 2299:
                        r = new _(I.INAPP_SHOW_INAPP_ERROR,e);
                        break;
                    case 2300 <= t && t < 2399:
                        r = new _(I.INAPP_POPUP_ERROR,e);
                        break;
                    default:
                        r = new _(I.GENERAL_ERROR,e)
                    }
                    return r
                }
            }, {
                key: "inboxError",
                value: function(t, e) {
                    var r = new _(t,e);
                    switch (t) {
                    case 3001:
                        r = new _(I.INBOX_GET_ERROR,e);
                        break;
                    case 3011:
                        r = new _(I.INBOX_GET_PAGE_ERROR,e);
                        break;
                    default:
                        r = new _(I.INBOX_GENERAL_ERROR,e)
                    }
                    return r
                }
            }, {
                key: "customerError",
                value: function(t, e) {
                    var r = new _(t,e);
                    switch (t) {
                    case 4001:
                        r = new _(I.CUSTOMER_GET_ERROR,e);
                        break;
                    case 4011:
                        r = new _(I.CUSTOMER_PARAMS_ERROR,e);
                        break;
                    default:
                        r = new _(I.CUSTOMER_GENERAL_ERROR,e)
                    }
                    return r
                }
            }]) && pt(e.prototype, r),
            n && pt(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }());
        function yt(t) {
            return (yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function S() {
            S = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == yt(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function dt(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function vt(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        dt(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        dt(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function gt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        var mt = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                this.URL_BASE = "",
                this.GET = "GET",
                this.POST = "POST",
                this.PUT = "PUT",
                this.DELETE = "DELETE"
            }
            var e, r, n, o, i, a, u, s, c;
            return e = t,
            (r = [{
                key: "getURL",
                value: (c = vt(S().mark(function t() {
                    return S().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", this.URL_BASE);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "call",
                value: (s = vt(S().mark(function t(e, r, n, o) {
                    var i, a, u, s;
                    return S().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return i = new w,
                                t.next = 3,
                                this.getURL();
                            case 3:
                                return t.t0 = t.sent,
                                t.t1 = n.getPath(r),
                                t.t2 = t.t0 + t.t1,
                                t.t3 = n.getParams(),
                                a = t.t2 + t.t3,
                                n.isJourneyRequest() && (a = a.replace("v1", "v2")),
                                s = {
                                    method: e,
                                    headers: n.addHeaders()
                                },
                                e !== this.GET && (s.body = JSON.stringify(n.getBody())),
                                o && (s.credentials = o),
                                t.prev = 12,
                                t.next = 15,
                                fetch(a, s);
                            case 15:
                                return u = t.sent,
                                t.next = 18,
                                u.json();
                            case 18:
                                if (s = t.sent,
                                u.ok)
                                    return i.d("Method: " + e + "\nURL: " + a + "\n" + "".concat(e !== this.GET ? "Request Body: " + JSON.stringify(n.getBody(), null, "\t") + "\n" : "") + "Response Code: " + s.statusCode + "\nResponse Message: " + s.message + "\nResponse Body:", JSON.stringify(s.data, null, "\t")).writeLog(),
                                    t.abrupt("return", s);
                                t.next = 22;
                                break;
                            case 22:
                                return i.d("Method: " + e + "\nURL: " + a + "\n" + "".concat(e !== this.GET ? "Request Body: " + JSON.stringify(n.getBody(), null, "\t") + "\n" : "") + "Response Code: " + u.status + "\nResponse Message: " + u.statusText + "\n").writeLog(),
                                t.abrupt("return", new _(u.status,u.statusText));
                            case 26:
                                return t.prev = 26,
                                t.t4 = t.catch(12),
                                i.d("Method: " + e + "\nURL: " + a + "\n" + "".concat(e !== this.GET ? "Request Body: " + JSON.stringify(n.getBody(), null, "\t") + "\n" : "") + "Error: " + t.t4).writeLog(),
                                t.abrupt("return", R.apiError(I.API_SERVER_ERROR, t.t4));
                            case 30:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[12, 26]])
                })),
                function(t, e, r, n) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "get",
                value: (u = vt(S().mark(function t(e, r) {
                    return S().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.call(this.GET, e, r);
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "post",
                value: (a = vt(S().mark(function t(e, r, n) {
                    return S().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.call(this.POST, e, r, n);
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "put",
                value: (i = vt(S().mark(function t(e, r, n) {
                    return S().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.call(this.PUT, e, r, n);
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "delete",
                value: (o = vt(S().mark(function t(e, r) {
                    return S().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.call(this.DELETE, e, r);
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e) {
                    return o.apply(this, arguments)
                }
                )
            }]) && gt(e.prototype, r),
            n && gt(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function Et(t) {
            return (Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function wt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const bt = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var e, r, n;
            return e = t,
            n = [{
                key: "compareJSON",
                value: function(t, e) {
                    var r = Object.keys(t)
                      , n = Object.keys(e);
                    if (r.length !== n.length)
                        return !1;
                    for (var o = 0, i = r; o < i.length; o++) {
                        var a = i[o];
                        if (t[a] !== e[a]) {
                            if ("object" != Et(t[a]) || "object" != Et(e[a]))
                                return !1;
                            if (!isEqual(t[a], e[a]))
                                return !1
                        }
                    }
                    return !0
                }
            }],
            (r = null) && wt(e.prototype, r),
            n && wt(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function _t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const P = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var e, r, n;
            return e = t,
            n = [{
                key: "isDeviceIdFormat",
                value: function(t) {
                    return null != t && "" != t && "null" != t && 8 < t.length
                }
            }, {
                key: "isAppKeyFormat",
                value: function() {
                    var t = E.getAppKey();
                    return null != t && "" != t && "null" != t && 3 < t.length
                }
            }, {
                key: "isExternalIdFormat",
                value: function() {
                    var t = E.getExternalId();
                    return null != t && "" != t && "null" != t && 8 < t.length
                }
            }, {
                key: "isValidFormatRequest",
                value: function() {
                    var t = new w("[IND]Validations: ")
                      , e = E.getDeviceId()
                      , r = !0;
                    return this.isAppKeyFormat() || (r = !1,
                    t.w("appKey is null or empty").writeLog()),
                    this.isDeviceIdFormat(e) || (r = !1,
                    t.w("deviceId is null or empty").writeLog()),
                    r
                }
            }],
            (r = null) && _t(e.prototype, r),
            n && _t(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function Ot(t) {
            return (Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function L() {
            L = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == Ot(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function It(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function D(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        It(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        It(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function Rt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function St(t, e) {
            return (St = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Pt(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = xt(r), e = (t = n ? (t = xt(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === Ot(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function xt(t) {
            return (xt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const p = new (function() {
            var t = m
              , e = mt;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && St(t, e);
            var r, n, o, i, a, u, s, c, f, l, h, p, y, d, v, g = Pt(m);
            function m() {
                var t;
                if (this instanceof m)
                    return (t = g.call(this)).URL_BASE = x.client.URL_BASE,
                    t.ENDPOINT_APPLICATION = "/application",
                    t.ENDPOINT_APPLICATION_ALL = t.ENDPOINT_APPLICATION + "/all",
                    t.ENDPOINT_DEVICE = "/device",
                    t.ENDPOINT_DEVICE_TOPICS = t.ENDPOINT_DEVICE + "/topics",
                    t.ENDPOINT_PUSH = "/push",
                    t.ENDPOINT_EVENT = "/event",
                    t.ENDPOINT_EVENT_PUSH = t.ENDPOINT_EVENT + "/push",
                    t.ENDPOINT_EVENT_VISIT = t.ENDPOINT_EVENT + "/visit",
                    t.ENDPOINT_EVENT_PERMISSION = t.ENDPOINT_EVENT + "/permission",
                    t.ENDPOINT_EVENT_LOCATION = t.ENDPOINT_EVENT + "/location",
                    t.ENDPOINT_EVENT_CUSTOM = t.ENDPOINT_EVENT + "/custom",
                    t.ENDPOINT_EVENT_CUSTOM_BEACON = t.ENDPOINT_EVENT_CUSTOM + "/beacon",
                    t.ENDPOINT_BROWSER = "/browser",
                    t.log = new w("[IND]Client: "),
                    t;
                throw new TypeError("Cannot call a class as a function")
            }
            return t = m,
            (e = [{
                key: "getURL",
                value: (v = D(L().mark(function t() {
                    var e;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                E.getUrlDeviceApi();
                            case 2:
                                return e = t.sent,
                                t.abrupt("return", e || this.URL_BASE);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return v.apply(this, arguments)
                }
                )
            }, {
                key: "getApplicationAll",
                value: (d = D(L().mark(function t(e, r, n) {
                    var o;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isAppKeyFormat())
                                    return t.next = 3,
                                    this.get(this.ENDPOINT_APPLICATION_ALL, e.getApplicationRequest());
                                t.next = 7;
                                break;
                            case 3:
                                !(o = t.sent) || o instanceof _ ? o ? F.isFunction(n) && n(o) : F.isFunction(n) && n() : F.isFunction(r) && r(o),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_APPKEY_BAD_REQUEST));
                            case 8:
                                return t.abrupt("return", !0);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return d.apply(this, arguments)
                }
                )
            }, {
                key: "postDevice",
                value: (y = D(L().mark(function t(e, r, n) {
                    var o, i;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isAppKeyFormat())
                                    return t.next = 3,
                                    this.post(this.ENDPOINT_DEVICE, e.postDeviceRequest(), "include");
                                t.next = 14;
                                break;
                            case 3:
                                if (!(o = t.sent) || o instanceof _) {
                                    t.next = 11;
                                    break
                                }
                                return i = {
                                    enabled: o.data.enabled,
                                    deviceId: o.data.deviceId,
                                    registeredByCookie: o.data.registeredByCookie
                                },
                                t.next = 8,
                                E.setDeviceId(i.deviceId);
                            case 8:
                                F.isFunction(r) && r(new b(i,!0)),
                                t.next = 12;
                                break;
                            case 11:
                                o ? F.isFunction(n) && n(o) : F.isFunction(n) && n();
                            case 12:
                                t.next = 15;
                                break;
                            case 14:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_APPKEY_BAD_REQUEST));
                            case 15:
                                return t.abrupt("return", !0);
                            case 16:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return y.apply(this, arguments)
                }
                )
            }, {
                key: "putDevice",
                value: (p = D(L().mark(function t(e, r, n) {
                    var o, i, a;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Promise.resolve(E.getDeviceJson()).then(function(t) {
                                    return JSON.parse(t)
                                });
                            case 2:
                                if (i = t.sent,
                                o = new b,
                                !i || !bt.compareJSON(i, o.toJSON())) {
                                    t.next = 8;
                                    break
                                }
                                F.isFunction(r) && r(o),
                                t.next = 16;
                                break;
                            case 8:
                                if (P.isValidFormatRequest())
                                    return t.next = 11,
                                    this.put(this.ENDPOINT_DEVICE, e.putDeviceRequest(o), "include");
                                t.next = 15;
                                break;
                            case 11:
                                !(i = t.sent) || i instanceof _ ? i ? F.isFunction(n) && n(i) : F.isFunction(n) && n() : (a = {
                                    enabled: i.data.enabled,
                                    deviceId: i.data.deviceId,
                                    registeredByCookie: i.data.registeredByCookie
                                },
                                F.isFunction(r) && r(new b(a,!0))),
                                t.next = 16;
                                break;
                            case 15:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 16:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return p.apply(this, arguments)
                }
                )
            }, {
                key: "getDevice",
                value: (h = D(L().mark(function t(e, r, n) {
                    var o;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest())
                                    return t.next = 3,
                                    this.get(this.ENDPOINT_DEVICE, e.getDeviceRequest());
                                t.next = 7;
                                break;
                            case 3:
                                !(o = t.sent) || o instanceof _ ? o ? F.isFunction(n) && n(o) : F.isFunction(n) && n() : (o = {
                                    enabled: o.data.enabled,
                                    deviceId: o.data.deviceId
                                },
                                F.isFunction(r) && r(new b(o,!0))),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                                return t.abrupt("return", !0);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return h.apply(this, arguments)
                }
                )
            }, {
                key: "getDeviceTopics",
                value: (l = D(L().mark(function t(e, r, n) {
                    var o;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest())
                                    return t.next = 3,
                                    this.get(this.ENDPOINT_DEVICE_TOPICS, e.getDeviceTopicsRequest());
                                t.next = 7;
                                break;
                            case 3:
                                !(o = t.sent) || o instanceof _ ? o ? F.isFunction(n) && n(o) : F.isFunction(n) && n() : (o = o.data.topics,
                                F.isFunction(r) && r(o)),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                                return t.abrupt("return", !0);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return l.apply(this, arguments)
                }
                )
            }, {
                key: "postDeviceTopics",
                value: (f = D(L().mark(function t(e, r, n) {
                    var o;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest())
                                    return t.next = 3,
                                    this.post(this.ENDPOINT_DEVICE_TOPICS, e.postDeviceTopicsRequest());
                                t.next = 7;
                                break;
                            case 3:
                                !(o = t.sent) || o instanceof _ ? o ? F.isFunction(n) && n(o) : F.isFunction(n) && n() : (o = o.data.topics,
                                F.isFunction(r) && r(o)),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                                return t.abrupt("return", !0);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return f.apply(this, arguments)
                }
                )
            }, {
                key: "deleteDeviceTopics",
                value: (c = D(L().mark(function t(e, r, n) {
                    var o;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest())
                                    return t.next = 3,
                                    this.delete(this.ENDPOINT_DEVICE_TOPICS, e.deleteDeviceTopicsRequest());
                                t.next = 7;
                                break;
                            case 3:
                                !(o = t.sent) || o instanceof _ ? o ? F.isFunction(n) && n(o) : F.isFunction(n) && n() : (o = o.data.topics,
                                F.isFunction(r) && r(o)),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                                return t.abrupt("return", !0);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "postEventPush",
                value: (s = D(L().mark(function t(e) {
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest())
                                    return t.next = 3,
                                    this.post(this.ENDPOINT_EVENT_PUSH, e.postEventPushRequest());
                                t.next = 3;
                                break;
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "postEventVisit",
                value: function(t) {
                    P.isValidFormatRequest() && this.post(this.ENDPOINT_EVENT_VISIT, t.postEventVisitRequest())
                }
            }, {
                key: "postEventPermission",
                value: function(t) {
                    P.isValidFormatRequest() && this.post(this.ENDPOINT_EVENT_PERMISSION, t.postEventPermissionRequest())
                }
            }, {
                key: "postEventLocation",
                value: function(t) {
                    P.isValidFormatRequest() && this.post(this.ENDPOINT_EVENT_LOCATION, t.postEventLocationRequest())
                }
            }, {
                key: "getBrowser",
                value: (u = D(L().mark(function t(e, r, n) {
                    var o, i;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isAppKeyFormat())
                                    return t.next = 3,
                                    this.get(this.ENDPOINT_BROWSER, e);
                                t.next = 22;
                                break;
                            case 3:
                                if (!(o = t.sent) || o instanceof _) {
                                    t.next = 19;
                                    break
                                }
                                return i = {
                                    browserName: o.data.browserName,
                                    browserVersion: o.data.browserVersion,
                                    deviceType: o.data.deviceType,
                                    osName: o.data.osName,
                                    osVersion: o.data.osVersion,
                                    supported: o.data.supported,
                                    platform: o.data.platform
                                },
                                t.next = 8,
                                E.setBrowserName(i.browserName);
                            case 8:
                                return E.setBrowserVersion(i.browserVersion),
                                t.next = 11,
                                E.setOsName(i.osName);
                            case 11:
                                return E.setOsVersion(i.osVersion),
                                E.setDeviceType(i.deviceType),
                                E.setSupported(i.supported),
                                t.next = 16,
                                E.setPlatform(i.platform);
                            case 16:
                                F.isFunction(r) && r(i),
                                t.next = 20;
                                break;
                            case 19:
                                o ? F.isFunction(n) && n(o) : F.isFunction(n) && n();
                            case 20:
                                t.next = 23;
                                break;
                            case 22:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 23:
                                return t.abrupt("return", !0);
                            case 24:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "postEventCustom",
                value: (a = D(L().mark(function t(e, r, n) {
                    var o;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest())
                                    return t.next = 3,
                                    this.post(this.ENDPOINT_EVENT_CUSTOM, e.postEventCustomRequest());
                                t.next = 7;
                                break;
                            case 3:
                                !(o = t.sent) || o instanceof _ ? o ? F.isFunction(n) && n(o) : F.isFunction(n) && n() : F.isFunction(r) && r(o),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                                return t.abrupt("return", !0);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "postEventCustomSync",
                value: (i = D(L().mark(function t(e, r, n) {
                    var o, i;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!P.isValidFormatRequest()) {
                                    t.next = 34;
                                    break
                                }
                                if (e = e.postEventCustomRequest(),
                                t.prev = 2,
                                navigator && "sendBeacon"in navigator)
                                    return t.next = 6,
                                    this.getURL();
                                t.next = 15;
                                break;
                            case 6:
                                t.t0 = t.sent,
                                t.t1 = this.ENDPOINT_EVENT_CUSTOM_BEACON,
                                t.t2 = t.t0 + t.t1,
                                t.t3 = e.getParams(),
                                o = t.t2 + t.t3,
                                navigator.sendBeacon(o, JSON.stringify(e.getBody())),
                                F.isFunction(r) && r(),
                                t.next = 27;
                                break;
                            case 15:
                                return t.next = 17,
                                this.getURL();
                            case 17:
                                t.t4 = t.sent,
                                t.t5 = this.ENDPOINT_EVENT_CUSTOM,
                                t.t6 = t.t4 + t.t5,
                                t.t7 = e.getParams(),
                                o = t.t6 + t.t7,
                                (i = new XMLHttpRequest).open("POST", o, !1),
                                i.setRequestHeader("Content-Type", "application/json"),
                                i.onreadystatechange = function() {
                                    i.readyState === XMLHttpRequest.DONE && (200 <= i.status || i.status < 300) ? F.isFunction(r) && r() : F.isFunction(n) && n()
                                }
                                ,
                                i.send(JSON.stringify(e.getBody()));
                            case 27:
                                t.next = 32;
                                break;
                            case 29:
                                t.prev = 29,
                                t.t8 = t.catch(2),
                                F.isFunction(n) && n(new _(I.PUSH_EVENT_ERROR,t.t8));
                            case 32:
                                t.next = 35;
                                break;
                            case 34:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 35:
                                return t.abrupt("return", !0);
                            case 36:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[2, 29]])
                })),
                function(t, e, r) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "postEventJourney",
                value: (o = D(L().mark(function t(e, r, n) {
                    var o;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest())
                                    return t.next = 3,
                                    this.post(this.ENDPOINT_PUSH + this.ENDPOINT_EVENT_CUSTOM, e.postEventCustomRequest());
                                t.next = 7;
                                break;
                            case 3:
                                !(o = t.sent) || o instanceof _ ? o ? F.isFunction(n) && n(o) : F.isFunction(n) && n() : F.isFunction(r) && r(o),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                                return t.abrupt("return", !0);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "postEventJourneySync",
                value: (n = D(L().mark(function t(e, r, n) {
                    var o, i;
                    return L().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest())
                                    return e = e.postEventCustomRequest(),
                                    t.prev = 2,
                                    t.next = 5,
                                    this.getURL();
                                t.next = 34;
                                break;
                            case 5:
                                if (o = (o = t.sent).replace("v1", "v2"),
                                !(navigator && "sendBeacon"in navigator)) {
                                    t.next = 13;
                                    break
                                }
                                o = o + this.ENDPOINT_PUSH + this.ENDPOINT_EVENT_CUSTOM + e.getParams(),
                                navigator.sendBeacon(o, JSON.stringify(e.getBody())),
                                F.isFunction(r) && r(),
                                t.next = 27;
                                break;
                            case 13:
                                return t.next = 15,
                                this.getURL().replace("v1", "v2");
                            case 15:
                                t.t0 = t.sent,
                                t.t1 = this.ENDPOINT_PUSH,
                                t.t2 = t.t0 + t.t1,
                                t.t3 = this.ENDPOINT_EVENT_CUSTOM,
                                t.t4 = t.t2 + t.t3,
                                t.t5 = e.getParams(),
                                o = t.t4 + t.t5,
                                (i = new XMLHttpRequest).open("POST", o, !1),
                                i.setRequestHeader("Content-Type", "application/json"),
                                i.onreadystatechange = function() {
                                    i.readyState === XMLHttpRequest.DONE && (200 <= i.status || i.status < 300) ? F.isFunction(r) && r() : F.isFunction(n) && n()
                                }
                                ,
                                i.send(JSON.stringify(e.getBody()));
                            case 27:
                                t.next = 32;
                                break;
                            case 29:
                                t.prev = 29,
                                t.t6 = t.catch(2),
                                F.isFunction(n) && n(new _(I.PUSH_EVENT_ERROR,t.t6));
                            case 32:
                                t.next = 35;
                                break;
                            case 34:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 35:
                                return t.abrupt("return", !0);
                            case 36:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[2, 29]])
                })),
                function(t, e, r) {
                    return n.apply(this, arguments)
                }
                )
            }]) && Rt(t.prototype, e),
            r && Rt(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            m
        }());
        function Tt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        var a = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                this.PARAM_APP_KEY = "appKey",
                this.PARAM_DEVICE_ID = "deviceId",
                this.PARAM_PUSH_TOKEN = "pushToken",
                this.PARAM_ENABLED = "enabled",
                this.PARAM_PLATFORM = "platform",
                this.PARAM_VERSION = "version",
                this.PARAM_TOPICS = "topics",
                this.PARAM_EVENT_TYPE = "eventType",
                this.PARAM_PUSH_ID = "pushId",
                this.PARAM_CLICKED_BUTTON = "clickedButton",
                this.PARAM_PERMISSION_TYPE = "permissionType",
                this.PARAM_LATITUDE = "latitude",
                this.PARAM_LONGITUDE = "longitude",
                this.PARAM_INAPP_ID = "inAppId",
                this.PARAM_INAPP_EVENT_TYPE = "eventType",
                this.PARAM_INAPP_CLICKED_BUTTON = "clickedButton",
                this.PARAM_INAPP_LAST_VERSION_ID = "lastVersionId",
                this.PARAM_INBOX_EXTERNALID = "externalId",
                this.PARAM_INBOX_PAGE = "page",
                this.PARAM_INBOX_PAGE_SIZE = "pageSize",
                this.PARAM_INBOX_DATE_FROM = "dateFrom",
                this.PARAM_INBOX_DATE_TO = "dateTo",
                this.PARAM_INBOX_STATUS = "status",
                this.PARAM_INBOX_SENDER_IDS = "sendingIds",
                this.PARAM_CUSTOMER_ID = "customerId",
                this.PARAM_CUSTOMER_FIELD_NAMES = "fieldNames",
                this.PARAM_CUSTOMER_FIELDS = "fields",
                this.PARAM_CUSTOMER_LINK = "link",
                this.PARAM_CUSTOMER_CHANNEL = "channel",
                this.appKey = E.getAppKey(),
                this.params = null,
                this.pathParams = {},
                this.headers = {}
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "getParams",
                value: function() {
                    return "?" + this.PARAM_APP_KEY + "=" + this.appKey + (this.params ? "&" + this.params : "")
                }
            }, {
                key: "getBody",
                value: function() {
                    return this.body || ""
                }
            }, {
                key: "getPath",
                value: function(t) {
                    var e = this
                      , r = t;
                    return Object.keys(this.pathParams).forEach(function(t) {
                        r = r.replace(t, e.pathParams[t])
                    }),
                    r
                }
            }, {
                key: "addHeaders",
                value: function() {
                    var e = this
                      , r = new Headers({
                        "Content-Type": "application/json"
                    });
                    return Object.keys(this.headers).forEach(function(t) {
                        r.append(t, e.headers[t])
                    }),
                    r
                }
            }, {
                key: "isJourneyRequest",
                value: function() {
                    return this.journeyRequest
                }
            }, {
                key: "setJourneyRequest",
                value: function(t) {
                    this.journeyRequest = t
                }
            }]) && Tt(e.prototype, r),
            n && Tt(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function Nt(t) {
            return (Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function kt() {
            kt = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == Nt(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function At(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function Lt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function Dt(t, e) {
            return (Dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Ft(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = Ct(r), e = (t = n ? (t = Ct(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === Nt(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function Ct(t) {
            return (Ct = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const jt = function() {
            var t = i
              , e = a;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Dt(t, e);
            var r, u, n, o = Ft(i);
            function i() {
                if (this instanceof i)
                    return o.call(this);
                throw new TypeError("Cannot call a class as a function")
            }
            return t = i,
            (e = [{
                key: "setEventType",
                value: function(t) {
                    this.eventType = t
                }
            }, {
                key: "setPushId",
                value: function(t) {
                    this.pushId = t
                }
            }, {
                key: "setClickedButton",
                value: function(t) {
                    this.clickedButton = t
                }
            }, {
                key: "setSendingId",
                value: function(t) {
                    this.sendingId = t
                }
            }, {
                key: "setPermissionType",
                value: function(t) {
                    this.permissionType = t
                }
            }, {
                key: "setLocation",
                value: function(t, e) {
                    this.latitude = t,
                    this.longitude = e
                }
            }, {
                key: "setDeviceId",
                value: function(t) {
                    this.deviceId = t
                }
            }, {
                key: "setPlatform",
                value: function(t) {
                    this.platform = t
                }
            }, {
                key: "setAppKey",
                value: function(t) {
                    this.appKey = t
                }
            }, {
                key: "setCustomData",
                value: function(t) {
                    this.customData = t
                }
            }, {
                key: "setExternalCodeRequest",
                value: (u = kt().mark(function t() {
                    return kt().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                E.getExternalIdRequest();
                            case 2:
                                this.externalCode = t.sent;
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }),
                n = function() {
                    var t = this
                      , a = arguments;
                    return new Promise(function(e, r) {
                        var n = u.apply(t, a);
                        function o(t) {
                            At(n, e, r, o, i, "next", t)
                        }
                        function i(t) {
                            At(n, e, r, o, i, "throw", t)
                        }
                        o(void 0)
                    }
                    )
                }
                ,
                function() {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "setExternalCode",
                value: function(t) {
                    this.externalCode = t
                }
            }, {
                key: "setCampaingId",
                value: function(t) {
                    this.campaignId = t
                }
            }, {
                key: "setJourneyStateId",
                value: function(t) {
                    this.journeyStateId = t
                }
            }, {
                key: "postEventPushRequest",
                value: function() {
                    var t = {};
                    return t.deviceId = this.deviceId,
                    t.platform = this.platform,
                    this.eventType && (t.eventType = this.eventType),
                    this.pushId && (t.pushId = this.pushId),
                    t.clickedButton = this.clickedButton,
                    null != this.externalCode && (t.externalCode = this.externalCode),
                    this.sendingId && "undefined" != this.sendingId && (t.sendingId = this.sendingId),
                    this.journeyStateId && (t.journeyStateId = this.journeyStateId),
                    this.campaignId && (t.campaignId = this.campaignId),
                    this.body = t,
                    this
                }
            }, {
                key: "postEventVisitRequest",
                value: function() {
                    var t = {};
                    return t.deviceId = E.getDeviceId(),
                    t.eventType = h.EVENT_TYPE_UPDATE,
                    this.body = t,
                    this
                }
            }, {
                key: "postEventPermissionRequest",
                value: function() {
                    var t = {};
                    return t.deviceId = E.getDeviceId(),
                    this.eventType && (t.eventType = this.eventType),
                    this.permissionType && (t.permissionType = this.permissionType),
                    this.body = t,
                    this
                }
            }, {
                key: "postEventLocationRequest",
                value: function() {
                    var t = {};
                    return t.deviceId = E.getDeviceId(),
                    t.eventType = h.EVENT_TYPE_UPDATE,
                    this.latitude && (t.latitude = this.latitude),
                    this.longitude && (t.longitude = this.longitude),
                    this.body = t,
                    this
                }
            }, {
                key: "postEventCustomRequest",
                value: function() {
                    var t = {};
                    return this.deviceId && (t.deviceId = this.deviceId),
                    this.eventType && (t.eventType = this.eventType),
                    this.customData && (t.customData = this.customData),
                    this.externalCode && (t.externalCode = this.externalCode),
                    this.body = t,
                    this
                }
            }]) && Lt(t.prototype, e),
            r && Lt(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            i
        }();
        function Bt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const F = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var e, r, n;
            return e = t,
            n = [{
                key: "urlBase64ToUint8Array",
                value: function(t) {
                    for (var t = (t + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), e = window.atob(t), r = new Uint8Array(e.length), n = 0; n < e.length; ++n)
                        r[n] = e.charCodeAt(n);
                    return r
                }
            }, {
                key: "callEventPermission",
                value: function(t, e) {
                    var r = new jt;
                    r.setAppKey(E.getAppKey()),
                    r.setDeviceId(E.getDeviceId()),
                    r.setPermissionType(t),
                    r.setEventType(e),
                    p.postEventPermission(r)
                }
            }, {
                key: "isFunction",
                value: function(t) {
                    return !(!t || "function" != typeof t)
                }
            }],
            (r = null) && Bt(e.prototype, r),
            n && Bt(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function Mt(t) {
            return (Mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function Ut() {
            Ut = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == Mt(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function Vt(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function Gt(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        Vt(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        Vt(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function Yt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function qt(t, e) {
            return (qt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Kt(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = Wt(r), e = (t = n ? (t = Wt(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === Mt(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function Wt(t) {
            return (Wt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const Jt = new (function() {
            var t = a
              , e = mt;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && qt(t, e);
            var r, n, o, i = Kt(a);
            function a() {
                var t;
                if (this instanceof a)
                    return (t = i.call(this)).URL_BASE = x.client.INAPP_URL_BASE,
                    t.ENDPOINT_CAMPAIGN = "/campaign",
                    t.ENDPOINT_CAMPAIGN_TAG = t.ENDPOINT_CAMPAIGN + "/{tag}",
                    t.ENDPOINT_EVENT = "/event",
                    t.ENDPOINT_EVENT_INAPP = t.ENDPOINT_EVENT + "/inApp",
                    t;
                throw new TypeError("Cannot call a class as a function")
            }
            return t = a,
            (e = [{
                key: "getURL",
                value: (o = Gt(Ut().mark(function t() {
                    var e;
                    return Ut().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                E.getUrlInappApi();
                            case 2:
                                return e = t.sent,
                                t.abrupt("return", e || this.URL_BASE);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "getCampaignTag",
                value: (n = Gt(Ut().mark(function t(e, r, n) {
                    var o;
                    return Ut().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.get(this.ENDPOINT_CAMPAIGN_TAG, e.getCampaignTagRequest());
                            case 2:
                                return !(o = t.sent) || o instanceof _ && o.data != {} ? o ? F.isFunction(n) && n(o) : F.isFunction(n) && n(new _(I.INAPP_GENERAL_ERROR,R.INAPP_ERROR_CONTENT_MESSAGE)) : F.isFunction(r) && r({
                                    inAppId: o.data.inAppId,
                                    lastVersionId: o.data.lastVersionId,
                                    showOnce: o.data.showOnce,
                                    creationDate: o.data.creationDate,
                                    expiredDate: o.data.expiredDate,
                                    properties: o.data.properties,
                                    renewalTime: o.data.renewalTime,
                                    schema: o.data.schema
                                }),
                                t.abrupt("return", null);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "postEventInApp",
                value: function(t) {
                    P.isValidFormatRequest() && this.post(this.ENDPOINT_EVENT_INAPP, t.postEventInAppRequest())
                }
            }]) && Yt(t.prototype, e),
            r && Yt(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            a
        }());
        function Ht(t) {
            return (Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function Xt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function Qt(t, e) {
            return (Qt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function zt(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = Zt(r), e = (t = n ? (t = Zt(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === Ht(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function Zt(t) {
            return (Zt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const $t = function() {
            var t = o
              , e = a;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Qt(t, e);
            var r, n = zt(o);
            function o() {
                var t;
                if (this instanceof o)
                    return (t = n.call(this)).device = new b,
                    t;
                throw new TypeError("Cannot call a class as a function")
            }
            return t = o,
            (e = [{
                key: "setTag",
                value: function(t) {
                    this.tag = t
                }
            }, {
                key: "getCampaignTagRequest",
                value: function() {
                    return this.params = this.createQueryString(),
                    this.pathParams["{tag}"] = this.tag,
                    this
                }
            }, {
                key: "createQueryString",
                value: function() {
                    return this.PARAM_DEVICE_ID + "=" + this.device.getDeviceId()
                }
            }]) && Xt(t.prototype, e),
            r && Xt(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }();
        function te(t) {
            return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function ee(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function re(t, e) {
            return (re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function ne(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = oe(r), e = (t = n ? (t = oe(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === te(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function oe(t) {
            return (oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const ie = function() {
            var t = o
              , e = a;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && re(t, e);
            var r, n = ne(o);
            function o() {
                if (this instanceof o)
                    return n.call(this);
                throw new TypeError("Cannot call a class as a function")
            }
            return t = o,
            (e = [{
                key: "setEventType",
                value: function(t) {
                    this.eventType = t
                }
            }, {
                key: "setInAppId",
                value: function(t) {
                    this.inAppId = t
                }
            }, {
                key: "setClickedButton",
                value: function(t) {
                    this.clickedButton = t
                }
            }, {
                key: "setLastVersionId",
                value: function(t) {
                    this.lastVersionId = t
                }
            }, {
                key: "setDeviceId",
                value: function(t) {
                    this.deviceId = t
                }
            }, {
                key: "setPlatform",
                value: function(t) {
                    this.platform = t
                }
            }, {
                key: "postEventInAppRequest",
                value: function() {
                    var t = {};
                    return t.inAppId = this.inAppId,
                    t.lastVersionId = this.lastVersionId,
                    t.deviceId = this.deviceId,
                    this.eventType && (t.eventType = this.eventType),
                    t.platform = this.platform,
                    t.clickedButton = this.clickedButton,
                    this.body = t,
                    this
                }
            }]) && ee(t.prototype, e),
            r && ee(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }();
        function ae(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const v = function() {
            function u(t) {
                if (!(this instanceof u))
                    throw new TypeError("Cannot call a class as a function");
                t.inAppId && (this.inAppId = t.inAppId),
                t.scheme && (this.scheme = t.scheme),
                t.creationDate && (this.creationDate = t.creationDate),
                t.expiredDate && (this.expiredDate = t.expiredDate),
                t.timesShowed && (this.timesShowed = t.timesShowed),
                t.timesClicked && (this.timesClicked = t.timesClicked),
                t.lastVersionId && (this.lastVersionId = t.lastVersionId)
            }
            var t, e, r;
            return t = u,
            r = [{
                key: "inAppShowOnceInstace",
                value: function(t, e, r, n, o, i, a) {
                    return new u({
                        inAppId: t,
                        scheme: e,
                        creationDate: r,
                        expiredDate: n,
                        timesShowed: o,
                        timesClicked: i,
                        lastVersionId: a
                    })
                }
            }],
            (e = [{
                key: "toJSON",
                value: function() {
                    return {
                        inAppId: this.inAppId,
                        scheme: this.scheme,
                        creationDate: this.creationDate,
                        expiredDate: this.expiredDate,
                        timesShowed: this.timesShowed,
                        timesClicked: this.timesClicked,
                        lastVersionId: this.lastVersionId
                    }
                }
            }, {
                key: "toString",
                value: function() {
                    return JSON.stringify(this.toJSON())
                }
            }]) && ae(t.prototype, e),
            r && ae(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            u
        }();
        function ue(t) {
            return (ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function C() {
            C = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == ue(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function se(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function ce(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        se(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        se(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function fe(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const y = function() {
            function d() {
                if (!(this instanceof d))
                    throw new TypeError("Cannot call a class as a function");
                this.MONTH = 24192e5
            }
            var t, e, r, n, o, i, a, u, s;
            return t = d,
            e = null,
            r = [{
                key: "inAppWasShown",
                value: (s = ce(C().mark(function t(r, e, n, o, i) {
                    var a = this;
                    return C().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                this.isShowOnce(r, e, n, ce(C().mark(function t() {
                                    var e;
                                    return C().wrap(function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                a.isShouldBeShown(r);
                                            case 2:
                                                e = t.sent,
                                                r.properties && 0 < r.properties.numberOfClicks && !e ? F.isFunction(o) && o() : F.isFunction(i) && i(r);
                                            case 4:
                                            case "end":
                                                return t.stop()
                                            }
                                    }, t)
                                })));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r, n, o) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "isShowOnce",
                value: function(t, e, r, n) {
                    t.showOnce && (t.properties.numberOfShows = 1),
                    t.properties && 0 < t.properties.numberOfShows ? this.isWasShown(t, e, r, n) : F.isFunction(n) && n()
                }
            }, {
                key: "isWasShown",
                value: (u = ce(C().mark(function t(e, r, n, o) {
                    var i, a, u, s, c, f, l, h, p, y;
                    return C().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return h = E.getInAppShowOnce(),
                                i = [],
                                t.next = 4,
                                this.convertToJSONArray(h);
                            case 4:
                                if (a = t.sent,
                                c = s = !1,
                                f = 1,
                                0 < e.properties.numberOfShows && (f = e.properties.numberOfShows),
                                !a) {
                                    t.next = 38;
                                    break
                                }
                                l = 0;
                            case 11:
                                if (!(l < a.length)) {
                                    t.next = 31;
                                    break
                                }
                                if (u = a[l],
                                h = new v(u),
                                e.inAppId != h.inAppId) {
                                    t.next = 27;
                                    break
                                }
                                if (s = !0,
                                !((new Date).getTime() < new Date(h.expiredDate).getTime())) {
                                    t.next = 26;
                                    break
                                }
                                if (!(h.timesShowed < f)) {
                                    t.next = 22;
                                    break
                                }
                                h.timesShowed += 1,
                                u = h,
                                t.next = 24;
                                break;
                            case 22:
                                return F.isFunction(n) && n(),
                                t.abrupt("return");
                            case 24:
                                t.next = 27;
                                break;
                            case 26:
                                c = !0;
                            case 27:
                                u && !c && i.push(u);
                            case 28:
                                l++,
                                t.next = 11;
                                break;
                            case 31:
                                if (!s) {
                                    t.next = 38;
                                    break
                                }
                                if (E.setInAppShowOnce(JSON.stringify(i)),
                                c)
                                    return F.isFunction(r) && r(),
                                    t.abrupt("return");
                                t.next = 36;
                                break;
                            case 36:
                                return F.isFunction(o) && o(),
                                t.abrupt("return");
                            case 38:
                                p = this.getDate((new Date).getTime()),
                                e.creationDate && (p = e.creationDate),
                                y = this.getDate((new Date).getTime() + (new d).MONTH),
                                e.expiredDate && (y = e.expiredDate),
                                u = v.inAppShowOnceInstace(e.inAppId, e.schema.code, p, y, 1, 0, 0),
                                i.push(u),
                                E.setInAppShowOnce(JSON.stringify(i)),
                                F.isFunction(o) && o();
                            case 46:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r, n) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "updateInAppExpired",
                value: (a = ce(C().mark(function t() {
                    var e, r, n, o, i, a, u;
                    return C().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return e = E.getInAppShowOnce(),
                                r = [],
                                t.next = 4,
                                this.convertToJSONArray(e);
                            case 4:
                                if (n = t.sent,
                                i = !1,
                                n) {
                                    for (a = 0; a < n.length; a++)
                                        o = n[a],
                                        (u = new v(o)) && ((new Date).getTime() < new Date(u.expiredDate).getTime() ? r.push(o) : i = !0);
                                    i && E.setInAppShowOnce(JSON.stringify(r))
                                }
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "convertToJSONArray",
                value: (i = ce(C().mark(function t(e) {
                    return C().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e && "" != e)
                                    return t.next = 3,
                                    Promise.resolve(e).then(function(t) {
                                        return JSON.parse(t)
                                    });
                                t.next = 4;
                                break;
                            case 3:
                                return t.abrupt("return", t.sent);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "getDate",
                value: function(t) {
                    var t = new Date(t)
                      , e = "" + (t.getMonth() + 1)
                      , r = "" + t.getDate()
                      , n = t.getFullYear()
                      , o = t.getHours()
                      , i = t.getMinutes()
                      , t = t.getSeconds();
                    return e.length < 2 && (e = "0" + e),
                    r.length < 2 && (r = "0" + r),
                    o.length < 2 && (o = "0" + o),
                    i.length < 2 && (i = "0" + i),
                    t.length < 2 && (t = "0" + t),
                    "".concat(n, "-").concat(e, "-").concat(r, " ").concat(o, ":").concat(i, ":").concat(t)
                }
            }, {
                key: "isShouldBeShown",
                value: (o = ce(C().mark(function t(e) {
                    var r, n, o, i, a, u, s;
                    return C().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                E.getInAppTimesClicked();
                            case 2:
                                return s = t.sent,
                                r = [],
                                t.next = 6,
                                this.convertToJSONArray(s);
                            case 6:
                                if (n = t.sent,
                                i = !1,
                                a = 0,
                                e.properties && e.properties.numberOfClicks && 0 < e.properties.numberOfClicks && (a = e.properties.numberOfClicks),
                                !n) {
                                    t.next = 29;
                                    break
                                }
                                u = 0;
                            case 12:
                                if (!(u < n.length)) {
                                    t.next = 26;
                                    break
                                }
                                if (o = n[u],
                                s = new v(o),
                                e.inAppId != s.inAppId) {
                                    t.next = 22;
                                    break
                                }
                                if (i = !0,
                                !(s.timesClicked >= a)) {
                                    t.next = 21;
                                    break
                                }
                                o = s,
                                t.next = 22;
                                break;
                            case 21:
                                return t.abrupt("return", !0);
                            case 22:
                                o && r.push(o);
                            case 23:
                                u++,
                                t.next = 12;
                                break;
                            case 26:
                                if (i)
                                    return E.setInAppTimesClicked(JSON.stringify(r)),
                                    t.abrupt("return", !1);
                                t.next = 29;
                                break;
                            case 29:
                                return o = v.inAppShowOnceInstace(e.inAppId, e.schema.code, "", "", 0, 0, 0),
                                r.push(o),
                                E.setInAppTimesClicked(JSON.stringify(r)),
                                t.abrupt("return", !0);
                            case 33:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "addInAppNewClick",
                value: (n = ce(C().mark(function t(e) {
                    var r, n, o, i, a, u, s;
                    return C().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                E.getInAppTimesClicked();
                            case 2:
                                return r = t.sent,
                                n = [],
                                t.next = 6,
                                this.convertToJSONArray(r);
                            case 6:
                                if (o = t.sent,
                                a = !1,
                                o) {
                                    for (u = 0; u < o.length; u++)
                                        i = o[u],
                                        s = new v(i),
                                        e.inAppId == s.inAppId && (a = !0,
                                        s.timesClicked ? s.timesClicked += 1 : s.timesClicked = 1,
                                        i = s),
                                        i && n.push(i);
                                    a && E.setInAppTimesClicked(JSON.stringify(n))
                                }
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t) {
                    return n.apply(this, arguments)
                }
                )
            }],
            e && fe(t.prototype, e),
            r && fe(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            d
        }();
        function le(t) {
            return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function he() {
            he = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == le(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function pe(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function ye(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        pe(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        pe(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function de(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const ve = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var e, r, n, o, i;
            return e = t,
            r = null,
            n = [{
                key: "isInAppDismissForever",
                value: (i = ye(he().mark(function t(e) {
                    var r, n, o;
                    return he().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return o = E.getInAppDismissForever(),
                                t.next = 3,
                                y.convertToJSONArray(o);
                            case 3:
                                if (!(r = t.sent)) {
                                    t.next = 14;
                                    break
                                }
                                n = 0;
                            case 6:
                                if (!(n < r.length)) {
                                    t.next = 14;
                                    break
                                }
                                if (newValue = r[n],
                                (o = new v(newValue)).inAppId && o.lastVersionId && o.inAppId == e.inAppId && o.lastVersionId == e.lastVersionId)
                                    return t.abrupt("return", !0);
                                t.next = 11;
                                break;
                            case 11:
                                n++,
                                t.next = 6;
                                break;
                            case 14:
                                return t.abrupt("return", !1);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "addNewInAppToDismissForever",
                value: (o = ye(he().mark(function t(e) {
                    var r, n, o, i, a, u, s;
                    return he().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return r = E.getInAppDismissForever(),
                                n = [],
                                t.next = 4,
                                y.convertToJSONArray(r);
                            case 4:
                                if (o = t.sent,
                                a = !1,
                                o)
                                    for (u = 0; u < o.length; u++)
                                        i = o[u],
                                        (s = new v(i)).inAppId && s.lastVersionId && s.inAppId == e.inAppId && s.lastVersionId == e.lastVersionId && (a = !0,
                                        (new Date).getTime() < new Date(s.expiredDate).getTime() && (s.creationDate = y.getDate((new Date).getTime()),
                                        s.expiredDate = y.getDate((new Date).getTime() + (new y).MONTH),
                                        i = s)),
                                        i && n.push(i);
                                a || (i = v.inAppShowOnceInstace(e.inAppId, e.schema.code, y.getDate((new Date).getTime()), y.getDate((new Date).getTime() + (new y).MONTH), 0, 0, e.lastVersionId),
                                n.push(i)),
                                E.setInAppDismissForever(JSON.stringify(n));
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t) {
                    return o.apply(this, arguments)
                }
                )
            }],
            r && de(e.prototype, r),
            n && de(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function ge(t) {
            return (ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function j() {
            j = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == ge(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function me(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function Ee(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        me(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        me(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function we(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const be = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var e, r, n, o, i, a, u, c;
            return e = t,
            r = null,
            n = [{
                key: "showInApp",
                value: function(t, e, r, n, o, i, a, u, s) {
                    this.drawInApp(t, e, r, n, o, i, a, u, s)
                }
            }, {
                key: "showMultipleInApp",
                value: function(t, e, r, n, o, i, a, u, s) {
                    if (t.length == e.length && 0 < t.length)
                        for (var c = 0; c < t.length; c++)
                            this.drawInApp(t[c], e[c], r, n, o, i, a, u, s)
                }
            }, {
                key: "drawInApp",
                value: (c = Ee(j().mark(function t(r, n, o, i, a, u, s, c, f) {
                    var l = this;
                    return j().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                this.inAppGet(r, function() {
                                    var e = Ee(j().mark(function t(e) {
                                        return j().wrap(function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if (!e || !e.properties) {
                                                        t.next = 11;
                                                        break
                                                    }
                                                    if (t.t0 = e.properties.dismissForever,
                                                    t.t0)
                                                        return t.next = 5,
                                                        ve.isInAppDismissForever(e);
                                                    t.next = 6;
                                                    break;
                                                case 5:
                                                    t.t0 = t.sent;
                                                case 6:
                                                    if (!t.t0) {
                                                        t.next = 10;
                                                        break
                                                    }
                                                    F.isFunction(s) && s(e, new R.inAppError(2304,"InApp was dismissed forever")),
                                                    t.next = 11;
                                                    break;
                                                case 10:
                                                    y.inAppWasShown(e, function() {
                                                        F.isFunction(i) && i(e, new R.inAppError(2101,"InApp was expired"))
                                                    }, function() {
                                                        F.isFunction(a) && a(e, new R.inAppError(2102,"InApp was shown more than" + e.properties.numberOfShows + " times"))
                                                    }, function() {
                                                        F.isFunction(u) && u(e, new R.inAppError(2103,"InApp was clicked more than " + e.properties.numberOfClicks + " times"))
                                                    }, function(t) {
                                                        l.createInApp(t, r, n, c, f, o)
                                                    });
                                                case 11:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }, t)
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(), f);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r, n, o, i, a, u, s) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "createInApp",
                value: (u = Ee(j().mark(function t(e, r, n, o, i, a) {
                    var u, s, c, f, l;
                    return j().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e && e.properties && e.properties.contentUrl) {
                                    try {
                                        u = document.getElementById(n),
                                        u.innerHTML = '<div id="dummyDiv' + r + '" style="width:' + e.schema.width + "px;height:" + e.schema.height + 'px;position:absolute;top:0;bottom:0;background:transparent;cursor:pointer;"> </div><iframe id="inAppIFrame' + r + '" style="width:100%; height:100%; border:0px;" src="' + e.properties.contentUrl + '" scrolling="no"  ></iframe>',
                                        u.style.position = "relative",
                                        u.style.overflow = "hidden",
                                        e.properties.showTime && (s = 0,
                                        c = setInterval(function() {
                                            ++s == parseInt(e.properties.showTime) && (u.style.display = "none",
                                            clearInterval(c),
                                            F.isFunction(a) && a(e, u, 1e3 * e.properties.showTime))
                                        }, 1e3)),
                                        e.properties.layout && e.properties.layout.borderRadius && (f = "".concat(parseInt(e.properties.layout.borderRadius), "px"),
                                        document.getElementById("dummyDiv" + r).style.borderRadius = f,
                                        u.style.borderRadius = f),
                                        F.isFunction(o) && o(e, u)
                                    } catch (t) {
                                        F.isFunction(i) && i(t)
                                    }
                                    (l = document.getElementById("dummyDiv" + r)).addEventListener("indigitall_on_click_inapp", function(t) {
                                        t.stopImmediatePropagation();
                                        try {
                                            this.addNewClick(e),
                                            window.open(e.properties.action.url)
                                        } catch (t) {
                                            F.isFunction(i) && i(t)
                                        }
                                    }, !0),
                                    l.addEventListener("click", function(t) {
                                        l.dispatchEvent(new CustomEvent("indigitall_on_click_inapp",{}))
                                    })
                                }
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r, n, o, i) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "addNewClick",
                value: (a = Ee(j().mark(function t(e) {
                    var r;
                    return j().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                (r = new ie).setInAppId(e.inAppId),
                                r.setLastVersionId(e.lastVersionId),
                                r.setDeviceId(E.getDeviceId()),
                                r.setEventType(h.EVENT_TYPE_CLICK),
                                r.setPlatform(x.platform),
                                e.buttonClicked ? r.setClickedButton(e.clickedButton) : r.setClickedButton("content"),
                                e.properties.numberOfClicks && 0 < e.properties.numberOfClicks && y.addInAppNewClick(e),
                                Jt.postEventInApp(r);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "inAppGet",
                value: (i = Ee(j().mark(function t(e, r, n) {
                    var o;
                    return j().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                (o = new $t).setTag(e),
                                Jt.getCampaignTag(o, r, n);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "downloadHTML",
                value: (o = Ee(j().mark(function t(e) {
                    var r;
                    return j().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                fetch(e, {
                                    method: "GET"
                                });
                            case 2:
                                r = t.sent,
                                console.log(r);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t) {
                    return o.apply(this, arguments)
                }
                )
            }],
            r && we(e.prototype, r),
            n && we(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function _e(t) {
            return (_e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function B() {
            B = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == _e(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function Oe(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function g(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        Oe(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        Oe(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function Ie(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function Re(t, e) {
            return (Re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Se(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = Pe(r), e = (t = n ? (t = Pe(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === _e(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function Pe(t) {
            return (Pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const c = new (function() {
            var t = v
              , e = mt;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Re(t, e);
            var r, n, o, a, u, s, c, f, l, h, p, y, d = Se(v);
            function v() {
                var t;
                if (this instanceof v)
                    return (t = d.call(this)).URL_BASE = x.client.INBOX_URL_BASE,
                    t.ENDPOINT_INBOX_NOTIFICATIONS = "/notification",
                    t.ENDPOINT_INBOX_NOTIFICATIONS_WITH_SENDINGID = t.ENDPOINT_INBOX_NOTIFICATIONS + "/{sendingId}",
                    t.ENDPOINT_INBOX_COUNTER = "/counters",
                    t.ENDPOINT_INBOX_AUTH = "/auth/webhook",
                    t;
                throw new TypeError("Cannot call a class as a function")
            }
            return t = v,
            (e = [{
                key: "getURL",
                value: (y = g(B().mark(function t() {
                    var e;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                E.getUrlInboxApi();
                            case 2:
                                return e = t.sent,
                                t.abrupt("return", e || this.URL_BASE);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function() {
                    return y.apply(this, arguments)
                }
                )
            }, {
                key: "postInboxAuth",
                value: (p = g(B().mark(function t(e, r, n) {
                    var o, i;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.post(this.ENDPOINT_INBOX_AUTH, e.postInboxAuth());
                            case 2:
                                return !(o = t.sent) || o instanceof _ || !o.data ? o ? F.isFunction(n) && n(o) : F.isFunction(n) && n() : (i = o.data.token,
                                E.setAuthToken(i),
                                F.isFunction(r) && r(o)),
                                t.abrupt("return", !0);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return p.apply(this, arguments)
                }
                )
            }, {
                key: "getInbox",
                value: (h = g(B().mark(function t(e, r, n) {
                    var o;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.get(this.ENDPOINT_INBOX_NOTIFICATIONS, e.getInboxPushRequest());
                            case 2:
                                return o = t.sent,
                                this.getInboxResponseStatus(o, r, n),
                                t.abrupt("return", !0);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return h.apply(this, arguments)
                }
                )
            }, {
                key: "putInboxPush",
                value: (l = g(B().mark(function t(e, r, n) {
                    var o;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.put(this.ENDPOINT_INBOX_NOTIFICATIONS, e.putInboxPushRequest());
                            case 2:
                                return o = t.sent,
                                this.getInboxResponseEdit(o, r, n),
                                t.abrupt("return", !0);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return l.apply(this, arguments)
                }
                )
            }, {
                key: "getInboxPushWithSendingId",
                value: (f = g(B().mark(function t(e, r, n, o) {
                    var i;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.get(this.ENDPOINT_INBOX_NOTIFICATIONS_WITH_SENDINGID, e.getInboxPushRequestWithSendingId());
                            case 2:
                                return i = t.sent,
                                this.getNotificationResponseStatus(i, r, n, o),
                                t.abrupt("return", !0);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r, n) {
                    return f.apply(this, arguments)
                }
                )
            }, {
                key: "putInboxPushWithSendingId",
                value: (c = g(B().mark(function t(e, r, n, o) {
                    var i;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.put(this.ENDPOINT_INBOX_NOTIFICATIONS_WITH_SENDINGID, e.putInboxWithSendingId());
                            case 2:
                                return i = t.sent,
                                this.getNotificationResponseStatus(i, r, n, o),
                                t.abrupt("return", !0);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r, n) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "getInboxCounter",
                value: (s = g(B().mark(function t(e, r, n) {
                    var o;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.get(this.ENDPOINT_INBOX_COUNTER, e.getCounter());
                            case 2:
                                o = t.sent,
                                this.getCounterStatus(o, r, n);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "getInboxResponseStatus",
                value: (u = g(B().mark(function t(e, r, n) {
                    var o;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e && !(e instanceof _) && 200 <= e.statusCode && e.statusCode < 300 ? (o = new Ze(e.data),
                                F.isFunction(r) && r(o)) : e ? F.isFunction(n) && n(e) : F.isFunction(n) && n();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "getInboxResponseEdit",
                value: (a = g(B().mark(function t(e, r, n) {
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e && !(e instanceof _) && 200 <= e.statusCode && e.statusCode < 300 ? F.isFunction(r) && r() : e ? F.isFunction(n) && n(e) : F.isFunction(n) && n();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "getNotifications",
                value: function(t, e) {
                    for (var r = [], n = 0; n < t.length; n++) {
                        null != t[n].sentAt && null != e && t[n].sentAt < e && (read = !0);
                        var o = new InboxNotification(t[n],e);
                        r.push(o)
                    }
                    return r
                }
            }, {
                key: "getNotificationResponseStatus",
                value: (o = g(B().mark(function t(e, r, n, o) {
                    var a;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e && !(e instanceof _) && 200 <= e.statusCode && e.statusCode < 300 ? (a = new InboxNotification(notifications[i],r),
                                F.isFunction(n) && n(a)) : e ? F.isFunction(o) && o(e) : F.isFunction(o) && o();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r, n) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "getCounterStatus",
                value: (n = g(B().mark(function t(e, r, n) {
                    var o;
                    return B().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e && !(e instanceof _) && 200 <= e.statusCode && e.statusCode < 300 ? (o = {
                                    click: e.data.click,
                                    sent: e.data.sent,
                                    deleted: e.data.deleted,
                                    unread: this.getUnreadCounters(e.data.unread)
                                },
                                F.isFunction(r) && r(o)) : e ? F.isFunction(n) && n(e) : F.isFunction(n) && n();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "getUnreadCounters",
                value: function(t) {
                    return {
                        count: t.count,
                        lastAccess: t.lastAccess
                    }
                }
            }]) && Ie(t.prototype, e),
            r && Ie(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            v
        }());
        function xe(t) {
            return (xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function Te(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function Ne(t, e) {
            return (Ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function ke(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = Ae(r), e = (t = n ? (t = Ae(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === xe(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function Ae(t) {
            return (Ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const Le = function() {
            var t = o
              , e = a;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Ne(t, e);
            var r, n = ke(o);
            function o() {
                if (this instanceof o)
                    return n.call(this);
                throw new TypeError("Cannot call a class as a function")
            }
            return t = o,
            (e = [{
                key: "postInboxAuth",
                value: function() {
                    return this.body = this.json,
                    this
                }
            }, {
                key: "setJson",
                value: function(t) {
                    this.json = t
                }
            }, {
                key: "addHeaders",
                value: function() {
                    var e = this
                      , r = new Headers({
                        "Content-Type": "application/json"
                    });
                    return Object.keys(this.headers).forEach(function(t) {
                        r.append(t, e.headers[t])
                    }),
                    r
                }
            }]) && Te(t.prototype, e),
            r && Te(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }();
        t = Object.freeze({
            SENT: "sent",
            CLICK: "click",
            DELETED: "deleted"
        });
        const De = window.inboxStatus = t
          , Fe = Object.freeze({
            NONE: "none",
            DEFAULT: "default",
            WEBHOOK: "webhook"
        });
        function Ce(t) {
            return (Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function je(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function Be(t, e) {
            return (Be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Me(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = Ue(r), e = (t = n ? (t = Ue(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === Ce(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function Ue(t) {
            return (Ue = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const Ve = function() {
            var t = o
              , e = a;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Be(t, e);
            var r, n = Me(o);
            function o() {
                var t;
                if (this instanceof o)
                    return t = n.call(this),
                    null != E.getExternalId() && (t.externalId = E.getExternalId()),
                    null != E.getAuthToken() && E.getInboxAuthMode() == Fe.WEBHOOK && (t.headers.Authorization = "Bearer " + E.getAuthToken()),
                    t.sendingId = "",
                    t.sendingIds = null,
                    t.page = 0,
                    t.pageSize = 0,
                    t.dateFrom = "",
                    t.dateTo = "",
                    t.status = De.INBOXSTATUS_SENT,
                    t.statusList = null,
                    t;
                throw new TypeError("Cannot call a class as a function")
            }
            return t = o,
            (e = [{
                key: "getInboxPushRequest",
                value: function() {
                    return this.params = this.createQueryString(),
                    this
                }
            }, {
                key: "putInboxPushRequest",
                value: function() {
                    return this.params = this.createQueryStringExternalId(),
                    this.body = this.createBodyJson(),
                    this
                }
            }, {
                key: "getInboxPushRequestWithSendingId",
                value: function() {
                    return this.pathParams["{sendingId}"] = this.sendingId,
                    this.params = this.createQueryStringExternalId(),
                    this
                }
            }, {
                key: "putInboxWithSendingId",
                value: function() {
                    return this.pathParams["{sendingId}"] = this.sendingId,
                    this.params = this.createQueryStringExternalId(),
                    this.body = this.createBodyStatusJson(),
                    this
                }
            }, {
                key: "addHeaders",
                value: function() {
                    var e = this
                      , r = new Headers({
                        "Content-Type": "application/json"
                    });
                    return Object.keys(this.headers).forEach(function(t) {
                        r.append(t, e.headers[t])
                    }),
                    r
                }
            }, {
                key: "createQueryString",
                value: function() {
                    var t = "";
                    if (t += this.PARAM_PLATFORM + "=" + E.getPlatform() + "&",
                    this.page && (t += this.PARAM_INBOX_PAGE + "=" + this.page + "&"),
                    this.pageSize && (t += this.PARAM_INBOX_PAGE_SIZE + "=" + this.pageSize + "&"),
                    this.dateFrom && (t += this.PARAM_INBOX_DATE_FROM + "=" + this.dateFrom + "&"),
                    this.dateTo && (t += this.PARAM_INBOX_DATE_TO + "=" + this.dateTo + "&"),
                    this.statusList) {
                        for (var e = "", r = 0; r < this.statusList.length; r++)
                            e += this.statusList[r],
                            r != this.statusList.length - 1 && (e += ",");
                        t += this.PARAM_INBOX_STATUS + "=" + e + "&"
                    }
                    return t + this.createQueryStringExternalId()
                }
            }, {
                key: "createQueryStringExternalId",
                value: function() {
                    return this.PARAM_INBOX_EXTERNALID + "=" + this.externalId
                }
            }, {
                key: "createBodyJson",
                value: function() {
                    var t = {}
                      , e = [];
                    try {
                        if (t = this.createBodyStatusJson(),
                        this.sendingIds)
                            for (var r = 0; r < this.sendingIds.length; r++)
                                e.push(this.sendingIds[r]);
                        t.sendingIds = e
                    } catch (t) {
                        console.log("Error Inbox request :" + t)
                    }
                    return t
                }
            }, {
                key: "createBodyStatusJson",
                value: function() {
                    var t = {};
                    return this.status && (t.status = this.status),
                    t
                }
            }, {
                key: "setSendingId",
                value: function(t) {
                    this.sendingId = t
                }
            }, {
                key: "setSendingIds",
                value: function(t) {
                    this.sendingIds = t
                }
            }, {
                key: "setPage",
                value: function(t) {
                    this.page = t
                }
            }, {
                key: "setPageSize",
                value: function(t) {
                    this.pageSize = t
                }
            }, {
                key: "setDateFrom",
                value: function(t) {
                    this.dateFrom = t
                }
            }, {
                key: "setDateTo",
                value: function(t) {
                    this.dateTo = t
                }
            }, {
                key: "setStatus",
                value: function(t) {
                    this.status = t
                }
            }, {
                key: "setStatusList",
                value: function(t) {
                    this.statusList = t
                }
            }]) && je(t.prototype, e),
            r && je(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }();
        function Ge(t) {
            return (Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function Ye(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function qe(t, e) {
            return (qe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Ke(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = We(r), e = (t = n ? (t = We(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === Ge(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function We(t) {
            return (We = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const Je = function() {
            var t = o
              , e = a;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && qe(t, e);
            var r, n = Ke(o);
            function o() {
                var t;
                if (this instanceof o)
                    return t = n.call(this),
                    null != E.getExternalId() && (t.externalId = E.getExternalId()),
                    null != E.getAuthToken() && E.getInboxAuthMode() == Fe.WEBHOOK && (t.headers.Authorization = "Bearer " + E.getAuthToken()),
                    t;
                throw new TypeError("Cannot call a class as a function")
            }
            return t = o,
            (e = [{
                key: "getCounter",
                value: function() {
                    return this.params = this.createQueryStringExternalId(),
                    this
                }
            }, {
                key: "addHeaders",
                value: function() {
                    var e = this
                      , r = new Headers({
                        "Content-Type": "application/json"
                    });
                    return Object.keys(this.headers).forEach(function(t) {
                        r.append(t, e.headers[t])
                    }),
                    r
                }
            }, {
                key: "createQueryStringExternalId",
                value: function() {
                    return this.PARAM_INBOX_EXTERNALID + "=" + this.externalId
                }
            }]) && Ye(t.prototype, e),
            r && Ye(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }();
        function He(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function Xe(t, e, r) {
            return e && He(t.prototype, e),
            r && He(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        e = Xe(function t(e, r) {
            if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function");
            e && (e.id && (this.id = e.id),
            e.externalId && (this.externalId = e.externalId),
            e.sentAt && (this.sentAt = e.sentAt),
            e.status && (this.status = e.status),
            e.sendingId && (this.sendingId = e.sendingId),
            e.message && (this.message = e.message),
            e.campaignId && (this.campaignId = e.campaignId),
            this.read = !1,
            this.sentAt && r && this.sentAt < r && (this.read = !0))
        });
        const Qe = window.inboxNotification = e;
        function ze(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const Ze = function() {
            function o(t) {
                if (!(this instanceof o))
                    throw new TypeError("Cannot call a class as a function");
                if (t) {
                    if (t.lastAccess && (this.lastAccess = t.lastAccess),
                    t.numPage ? this.page = t.numPage : this.page = 0,
                    t.pageSize && (this.pageSize = t.pageSize),
                    t.count && (this.count = t.count),
                    t.notifications) {
                        this.notifications = [];
                        for (var e = t.notifications, r = 0; r < e.length; r++) {
                            var n = new Qe(e[r],this.lastAccess);
                            this.notifications.push(n)
                        }
                    }
                    this.totalPages = Math.trunc(this.count / this.pageSize)
                }
                this.dateFrom = null,
                this.dateTo = null,
                this.statusList = null,
                this.newNotifications = [Qe],
                this.isRequestingPage = !1
            }
            var t, e, r;
            return t = o,
            r = [{
                key: "generateAuthToken",
                value: function(t, e) {
                    var r = {}
                      , n = (navigator.indigitallGetAuthConfig && F.isFunction(navigator.indigitallGetAuthConfig) && (r = navigator.indigitallGetAuthConfig()),
                    new Le);
                    n.setJson(r),
                    c.postInboxAuth(n, t, e)
                }
            }, {
                key: "getMessagesCount",
                value: function(e, t) {
                    var r, n = this;
                    P.isValidFormatRequest() ? P.isExternalIdFormat() ? (r = new Je,
                    c.getInboxCounter(r, e, function(t) {
                        401 === t.errorCode ? n.generateAuthToken(function() {
                            c.getInboxCounter(r, e, t)
                        }, t) : F.isFunction(t) && t(t)
                    })) : F.isFunction(t) && t(new _(I.INBOX_GET_ERROR,R.INBOX_EXTERNAL_ID_NO_REGISTERED)) : F.isFunction(t) && t(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST))
                }
            }, {
                key: "getInbox",
                value: function(t, e) {
                    o.getInboxWithPage(null, null, null, null, null, t, e)
                }
            }, {
                key: "getInboxWithPage",
                value: function(t, e, r, n, o, i, a) {
                    var u, s = this;
                    P.isValidFormatRequest() ? P.isExternalIdFormat() ? (u = new Ve,
                    t && u.setPage(t),
                    e && u.setPageSize(e),
                    r && (u.setDateFrom(r),
                    this.dateFrom = r),
                    n && (u.setDateTo(n),
                    this.dateTo = n),
                    o && (u.setStatusList(o),
                    this.statusList = o),
                    c.getInbox(u, function(t) {
                        s.totalPages = t.totalPages,
                        0 != t.count ? F.isFunction(i) && i(t) : F.isFunction(a) && a(new _(I.INBOX_GET_PAGE_ERROR,R.INBOX_EMPTY))
                    }, function(t) {
                        401 == t.errorCode ? s.generateAuthToken(function() {
                            c.getInbox(u, function(t) {
                                s.totalPages = t.totalPages,
                                F.isFunction(i) && i(t)
                            }, t)
                        }, t) : F.isFunction(t) && t(t)
                    })) : F.isFunction(a) && a(new _(I.INBOX_GET_ERROR,R.INBOX_EXTERNAL_ID_NO_REGISTERED)) : F.isFunction(a) && a(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST))
                }
            }],
            (e = [{
                key: "getNextPage",
                value: function(e, t) {
                    var r, n = this, o = new w("[IND]Inbox: ");
                    this.isRequestingPage ? o.w(R.INBOX_IS_REQUESTING_PAGE).writeLog() : (this.isRequestingPage = !0,
                    this.page + 1 < this.totalPages ? P.isValidFormatRequest() ? P.isExternalIdFormat() ? (r = new Ve,
                    !this.page && 0 != this.page || r.setPage(this.page + 1),
                    this.pageSize && r.setPageSize(this.pageSize),
                    this.dateFrom && r.setDateFrom(this.dateFrom),
                    this.dateTo && r.setDateTo(this.dateTo),
                    this.statusList && r.setStatusList(this.statusList),
                    c.getInbox(r, function(t) {
                        n.notifications = n.notifications.concat(t.notifications),
                        n.newNotifications = t.notifications,
                        n.lastAccess = t.lastAccess,
                        n.count = t.count,
                        n.page = t.page,
                        n.pageSize = t.pageSize,
                        n.totalPages = t.totalPages,
                        n.isRequestingPage = !1,
                        F.isFunction(e) && e(n, n.newNotifications)
                    }, function(t) {
                        401 === t.errorCode ? n.generateAuthToken(function() {
                            c.getInbox(r, function(t) {
                                n.notifications = n.notifications.concat(t.notifications),
                                n.newNotifications = t.notifications,
                                n.lastAccess = t.lastAccess,
                                n.count = t.count,
                                n.page = t.page,
                                n.pageSize = t.pageSize,
                                n.totalPages = t.totalPages,
                                n.isRequestingPage = !1,
                                F.isFunction(e) && e(n, n.newNotifications)
                            }, t)
                        }, t) : (n.isRequestingPage = !1,
                        F.isFunction(t) && t())
                    })) : (this.isRequestingPage = !1,
                    F.isFunction(t) && t(new _(I.INBOX_GET_ERROR,R.INBOX_EXTERNAL_ID_NO_REGISTERED))) : F.isFunction(t) && t(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST)) : (this.isRequestingPage = !1,
                    F.isFunction(t) && t(new _(I.INBOX_GET_PAGE_ERROR,R.INBOX_NO_MESSAGES))))
                }
            }, {
                key: "massiveEditNotifications",
                value: function(t, e, r, n) {
                    var o, i = this;
                    P.isValidFormatRequest() ? P.isExternalIdFormat() ? t && e && ((o = new Ve).setSendingIds(t),
                    o.setStatus(e),
                    c.putInboxPush(o, r, function(t) {
                        401 === t.errorCode ? i.generateAuthToken(function() {
                            c.putInboxPush(o, r, t)
                        }, t) : F.isFunction(t) && t(t)
                    })) : F.isFunction(n) && n(new _(I.INBOX_GET_ERROR,R.INBOX_EXTERNAL_ID_NO_REGISTERED)) : F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST))
                }
            }, {
                key: "getInfoFromNotification",
                value: function(t, e, r) {
                    var n, o = this;
                    P.isValidFormatRequest() ? P.isExternalIdFormat() ? t && ((n = new Ve).setSendingId(t),
                    c.getInboxPushWithSendingId(n, this.lastAccess, e, function(t) {
                        401 === t.errorCode ? o.generateAuthToken(function() {
                            c.getInboxPushWithSendingId(n, o.lastAccess, e, t)
                        }, t) : F.isFunction(t) && t(t)
                    })) : F.isFunction(r) && r(new _(I.INBOX_GET_ERROR,R.INBOX_EXTERNAL_ID_NO_REGISTERED)) : F.isFunction(r) && r(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST))
                }
            }, {
                key: "modifyStatusFromNotification",
                value: function(t, e, r, n) {
                    var o, i = this;
                    P.isValidFormatRequest() ? P.isExternalIdFormat() ? t && e && ((o = new Ve).setSendingId(t),
                    o.setStatus(e),
                    c.putInboxPushWithSendingId(o, this.lastAccess, r, function(t) {
                        401 === t.errorCode ? i.generateAuthToken(function() {
                            c.putInboxPushWithSendingId(o, i.lastAccess, r, t)
                        }, t) : F.isFunction(t) && t(t)
                    })) : F.isFunction(n) && n(new _(I.INBOX_GET_ERROR,R.INBOX_EXTERNAL_ID_NO_REGISTERED)) : F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST))
                }
            }]) && ze(t.prototype, e),
            r && ze(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }();
        Vr(8521);
        function $e(t) {
            return ($e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function tr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function er(t, e) {
            return (er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function rr(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = nr(r), e = (t = n ? (t = nr(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === $e(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function nr(t) {
            return (nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const or = function() {
            var t = o
              , e = a;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && er(t, e);
            var r, n = rr(o);
            function o() {
                var t = this
                  , e = o;
                if (t instanceof e)
                    return n.apply(this, arguments);
                throw new TypeError("Cannot call a class as a function")
            }
            return t = o,
            (e = [{
                key: "getApplicationRequest",
                value: function() {
                    return this.params = this.PARAM_PLATFORM + "=" + x.platform,
                    this
                }
            }]) && tr(t.prototype, e),
            r && tr(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }();
        function ir(t) {
            return (ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function ar(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function ur(t, e) {
            return (ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function sr(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = cr(r), e = (t = n ? (t = cr(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === ir(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function cr(t) {
            return (cr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const d = function() {
            var t = o
              , e = a;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && ur(t, e);
            var r, n = sr(o);
            function o() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : st.DEFAULT
                  , e = this
                  , r = o;
                if (e instanceof r)
                    return (e = n.call(this)).device = new b,
                    e.status = t,
                    e.notToUpdate = !1,
                    e;
                throw new TypeError("Cannot call a class as a function")
            }
            return t = o,
            (e = [{
                key: "setDeviceId",
                value: function(t) {
                    this.device && (this.device.deviceId = t)
                }
            }, {
                key: "setAppKey",
                value: function(t) {
                    this.appKey = t
                }
            }, {
                key: "getDeviceRequest",
                value: function() {
                    return this.params = this.createQueryString(),
                    this
                }
            }, {
                key: "postDeviceRequest",
                value: function() {
                    return this.body = this.createDeviceJson(),
                    this.status !== st.DEFAULT && (this.body.enabled = 1 === this.status),
                    this
                }
            }, {
                key: "putDeviceRequest",
                value: function(t) {
                    return this.params = this.createQueryString(),
                    this.body = this.createPUTDeviceJson(t),
                    this.status !== st.DEFAULT && (this.body.enabled = 1 === this.status),
                    this
                }
            }, {
                key: "getDeviceTopicsRequest",
                value: function() {
                    return this.params = this.createQueryString(),
                    this
                }
            }, {
                key: "postDeviceTopicsRequest",
                value: function() {
                    return this.params = this.createQueryString(),
                    this.body = this.createTopicsJson(),
                    this
                }
            }, {
                key: "deleteDeviceTopicsRequest",
                value: function() {
                    return this.params = this.createQueryString(),
                    this.body = this.createTopicsJson(),
                    this
                }
            }, {
                key: "createQueryString",
                value: function() {
                    return this.PARAM_DEVICE_ID + "=" + this.device.getDeviceId()
                }
            }, {
                key: "createDeviceJson",
                value: function() {
                    var t = {};
                    try {
                        t = this.device.toJSON()
                    } catch (t) {}
                    return t
                }
            }, {
                key: "createPUTDeviceJson",
                value: function(t) {
                    var e = {};
                    try {
                        b.setDeviceJson(t),
                        e = t.toJSON()
                    } catch (t) {}
                    return e
                }
            }, {
                key: "createTopicsJson",
                value: function() {
                    var t = {};
                    return this.topics && (t.topics = this.topics),
                    t
                }
            }, {
                key: "getDeviceId",
                value: function() {
                    return this.device.getDeviceId()
                }
            }, {
                key: "setTopics",
                value: function(t) {
                    this.topics = t
                }
            }, {
                key: "setExternalCode",
                value: function(t) {
                    this.device.setExternalCode(t)
                }
            }]) && ar(t.prototype, e),
            r && ar(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }()
          , m = Object.freeze({
            PERMISSION_TYPE_PUSH: "push",
            PERMISSION_TYPE_LOCATION: "location"
        });
        function fr(t) {
            return (fr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function M() {
            M = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == fr(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function lr(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function hr(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        lr(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        lr(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function pr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const U = function() {
            function i() {
                if (!(this instanceof i))
                    throw new TypeError("Cannot call a class as a function")
            }
            var t, e, r, n, o, a, u;
            return t = i,
            e = null,
            r = [{
                key: "getPermissions",
                value: (u = hr(M().mark(function t() {
                    var e, r, n;
                    return M().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                i.getPermission("push");
                            case 2:
                                return e = t.sent,
                                t.next = 5,
                                i.getPermission("geolocation");
                            case 5:
                                return r = t.sent,
                                n = {},
                                e && (n.push = e.state),
                                null === e && window.Notification && window.Notification.permission && (n.push = window.Notification.permission),
                                r && (n.location = r.state),
                                t.abrupt("return", n);
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function() {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "getPermission",
                value: (a = hr(M().mark(function t(e) {
                    return M().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (navigator && navigator.permissions && navigator.permissions.query && e)
                                    return t.next = 3,
                                    navigator.permissions.query({
                                        name: e,
                                        userVisibleOnly: !0
                                    });
                                t.next = 4;
                                break;
                            case 3:
                                return t.abrupt("return", t.sent);
                            case 4:
                                return t.abrupt("return", null);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "setPermissionsCallback",
                value: (o = hr(M().mark(function t() {
                    return M().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                i.setCallback("push", navigator.indigitallRequestPushPermission);
                            case 2:
                                return t.next = 4,
                                i.setCallback("geolocation", navigator.indigitallRequestLocationPermission);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function() {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "setCallback",
                value: (n = hr(M().mark(function t(e, r) {
                    var n, o;
                    return M().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                i.getPermission(e);
                            case 2:
                                (n = t.sent) && (o = n.state,
                                "onchange"in n && (n.onchange = function() {
                                    new w("[IND]Permissions: ").d(e + " permission state has changed from " + o + " to " + n.state).writeLog(),
                                    o = n.state,
                                    r && r({
                                        name: e,
                                        state: n.state
                                    })
                                }
                                ));
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e) {
                    return n.apply(this, arguments)
                }
                )
            }],
            e && pr(t.prototype, e),
            r && pr(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            i
        }();
        function yr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const dr = function() {
            function e(t) {
                if (!(this instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                t.id && (this.id = t.id),
                t.customerId && (this.customerId = t.customerId),
                t.applicationId && (this.applicationId = t.applicationId),
                t.createdAt && (this.createdAt = t.createdAt),
                t.updatedAt && (this.updatedAt = t.updatedAt)
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "getCustomerId",
                value: function() {
                    return this.customerId
                }
            }, {
                key: "getApplicationId",
                value: function() {
                    return this.applicationId
                }
            }, {
                key: "getId",
                value: function() {
                    return this.id
                }
            }, {
                key: "getCreatedAt",
                value: function() {
                    return this.createdAt
                }
            }, {
                key: "getUpdatedAt",
                value: function() {
                    return this.updatedAt
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        id: this.id,
                        customerId: this.customerId,
                        applicationId: this.applicationId,
                        createdAt: this.createdAt,
                        updatedAt: this.updatedAt
                    }
                }
            }]) && yr(t.prototype, r),
            n && yr(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        function vr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const gr = function() {
            function r(t, e) {
                if (!(this instanceof r))
                    throw new TypeError("Cannot call a class as a function");
                this.customerFieldKey = t,
                this.customerFieldValue = e
            }
            var t, e, n;
            return t = r,
            (e = [{
                key: "getCustomerFieldKey",
                value: function() {
                    return this.customerFieldKey
                }
            }, {
                key: "getCutomerFieldValue",
                value: function() {
                    return this.customerFieldValue
                }
            }, {
                key: "toJSON",
                value: function() {
                    return JSON.parse('"'.concat(this.customerFieldKey, '":"').concat(this.customerFieldValue, '"'))
                }
            }]) && vr(t.prototype, e),
            n && vr(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            r
        }();
        function mr(t) {
            return (mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function V() {
            V = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == mr(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function Er(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function wr(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        Er(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        Er(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function br(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function _r(t, e) {
            return (_r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Or(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = Ir(r), e = (t = n ? (t = Ir(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === mr(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function Ir(t) {
            return (Ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const Rr = new (function() {
            var t = l
              , e = mt;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && _r(t, e);
            var r, n, o, i, a, u, s, c, f = Or(l);
            function l() {
                var t;
                if (this instanceof l)
                    return (t = f.call(this)).URL_BASE = x.client.CUSTOMER_URL_BASE,
                    t.ENDPOINT_CUSTOMER = "/customer",
                    t.ENDPOINT_CUSTOMER_FIELD = t.ENDPOINT_CUSTOMER + "/field",
                    t.ENDPOINT_CUSTOMER_LINK = t.ENDPOINT_CUSTOMER + "/link",
                    t.ENDPOINT_EVENT = "/event",
                    t.ENDPOINT_EVENT_JOURNEY = t.ENDPOINT_EVENT + "/custom",
                    t.ENDPOINT_EVENT_JOURNEY_BEACON = t.ENDPOINT_EVENT_JOURNEY + "/beacon",
                    t;
                throw new TypeError("Cannot call a class as a function")
            }
            return t = l,
            (e = [{
                key: "getCustomer",
                value: (c = wr(V().mark(function t(e, r, n) {
                    var o;
                    return V().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isAppKeyFormat() && P.isExternalIdFormat())
                                    return t.next = 3,
                                    this.get(this.ENDPOINT_CUSTOMER, e.getCustomerRequest());
                                t.next = 7;
                                break;
                            case 3:
                                (o = t.sent) && !(o instanceof _) && 200 <= o.statusCode && o.statusCode < 300 ? F.isFunction(r) && r(new dr(o.data)) : o ? F.isFunction(n) && n(o) : F.isFunction(n) && n(),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "getCustomerField",
                value: (s = wr(V().mark(function t(e, r, n) {
                    var o, i, a;
                    return V().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isAppKeyFormat() && P.isExternalIdFormat())
                                    return t.next = 3,
                                    this.get(this.ENDPOINT_CUSTOMER_FIELD, e.getCustomerFieldRequest());
                                t.next = 9;
                                break;
                            case 3:
                                for (a in o = t.sent,
                                i = [],
                                o.data)
                                    o.data.hasOwnProperty(a) && i.push(new gr(a,o.data[a]));
                                o && 0 < i.length && !(o instanceof _) && 200 <= o.statusCode && o.statusCode < 300 ? F.isFunction(r) && r(i) : o ? F.isFunction(n) && n(o) : F.isFunction(n) && n(),
                                t.next = 10;
                                break;
                            case 9:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "putCustomerField",
                value: (u = wr(V().mark(function t(e, r, n) {
                    var o;
                    return V().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isAppKeyFormat() && P.isExternalIdFormat())
                                    return t.next = 3,
                                    this.put(this.ENDPOINT_CUSTOMER_FIELD, e.putCustomerFieldRequest());
                                t.next = 7;
                                break;
                            case 3:
                                o = t.sent,
                                this.getCustomerResponse(o, r, n),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "deleteCustomerField",
                value: (a = wr(V().mark(function t(e, r, n) {
                    var o;
                    return V().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isAppKeyFormat() && P.isExternalIdFormat())
                                    return t.next = 3,
                                    this.delete(this.ENDPOINT_CUSTOMER_FIELD, e.deleteCustomerFieldRequest());
                                t.next = 7;
                                break;
                            case 3:
                                o = t.sent,
                                this.getCustomerResponse(o, r, n),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "postCustomerLink",
                value: (i = wr(V().mark(function t(e, r, n) {
                    var o;
                    return V().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest() && P.isExternalIdFormat())
                                    return t.next = 3,
                                    this.post(this.ENDPOINT_CUSTOMER_LINK, e.postAndDeleteCustomerLinkRequest());
                                t.next = 7;
                                break;
                            case 3:
                                o = t.sent,
                                this.getCustomerResponse(o, r, n),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "deleteCustomerLink",
                value: (o = wr(V().mark(function t(e, r, n) {
                    var o;
                    return V().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (P.isValidFormatRequest() && P.isExternalIdFormat())
                                    return t.next = 3,
                                    this.delete(this.ENDPOINT_CUSTOMER_LINK, e.postAndDeleteCustomerLinkRequest());
                                t.next = 7;
                                break;
                            case 3:
                                o = t.sent,
                                this.getCustomerResponse(o, r, n),
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST));
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                })),
                function(t, e, r) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "getCustomerResponse",
                value: (n = wr(V().mark(function t(e, r, n) {
                    return V().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e && !(e instanceof _) && 200 <= e.statusCode && e.statusCode < 300 ? F.isFunction(r) && ("" != e.data ? r(e.data) : r()) : e ? F.isFunction(n) && n(e) : F.isFunction(n) && n();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return n.apply(this, arguments)
                }
                )
            }]) && br(t.prototype, e),
            r && br(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            l
        }());
        function Sr(t) {
            return (Sr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function Pr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function xr(t, e) {
            return (xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function Tr(r) {
            var n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var t, e = Nr(r), e = (t = n ? (t = Nr(this).constructor,
                Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                this);
                if (t && ("object" === Sr(t) || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                if (void 0 !== e)
                    return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
        }
        function Nr(t) {
            return (Nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        const kr = function() {
            var t = o
              , e = a;
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && xr(t, e);
            var r, n = Tr(o);
            function o() {
                var t;
                if (this instanceof o)
                    return (t = n.call(this)).device = new b,
                    null != E.getExternalId() && (t.customerId = E.getExternalId()),
                    t.fieldNames,
                    t.link,
                    t.fields,
                    t;
                throw new TypeError("Cannot call a class as a function")
            }
            return t = o,
            (e = [{
                key: "getCustomerRequest",
                value: function() {
                    return this.params = this.createQueryStringCustomerId(),
                    this
                }
            }, {
                key: "getCustomerFieldRequest",
                value: function() {
                    return this.params = this.createQueryString(),
                    this
                }
            }, {
                key: "putCustomerFieldRequest",
                value: function() {
                    return this.params = this.createQueryStringCustomerId(),
                    this.body = this.createBodyJson(),
                    this
                }
            }, {
                key: "deleteCustomerFieldRequest",
                value: function() {
                    return this.params = this.createQueryStringCustomerId(),
                    this.body = this.createDeleteBodyJson(),
                    this
                }
            }, {
                key: "postAndDeleteCustomerLinkRequest",
                value: function() {
                    return this.params = "",
                    this.body = this.createBodyJson(),
                    this
                }
            }, {
                key: "createQueryString",
                value: function() {
                    var t = "";
                    return t += this.createQueryStringCustomerId(),
                    this.fieldNames && (t += "&".concat(this.PARAM_CUSTOMER_FIELD_NAMES, "=").concat(this.fieldNames)),
                    this.fields && (t += "&".concat(this.PARAM_CUSTOMER_FIELDS, "=").concat(this.fields)),
                    this.link && (t += "&".concat(this.PARAM_CUSTOMER_LINK, "=").concat(this.link)),
                    t
                }
            }, {
                key: "createQueryStringCustomerId",
                value: function() {
                    return this.PARAM_CUSTOMER_ID + "=" + this.customerId
                }
            }, {
                key: "createBodyJson",
                value: function() {
                    var t = {};
                    try {
                        this.channel && (t.channel = this.channel,
                        this.device && (t.deviceId = this.device.deviceId),
                        this.customerId && (t.customerId = this.customerId)),
                        this.link && (t.link = this.link),
                        this.fields && (t = this.fields)
                    } catch (t) {
                        console.log("Error fieldNames request :" + t)
                    }
                    return t
                }
            }, {
                key: "createDeleteBodyJson",
                value: function() {
                    var t = {}
                      , e = [];
                    try {
                        if (this.fieldNames) {
                            for (var r = 0; r < this.fieldNames.length; r++)
                                e.push(this.fieldNames[r]);
                            t.fields = e
                        }
                    } catch (t) {
                        console.log("Error fieldNames request :" + t)
                    }
                    return t
                }
            }, {
                key: "setFields",
                value: function(t) {
                    this.fields = t
                }
            }, {
                key: "setFieldNames",
                value: function(t) {
                    this.fieldNames = t
                }
            }, {
                key: "setLink",
                value: function(t) {
                    this.link = t
                }
            }, {
                key: "setChannel",
                value: function(t) {
                    this.channel = t
                }
            }]) && Pr(t.prototype, e),
            r && Pr(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            o
        }();
        function Ar(t) {
            return (Ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function G() {
            G = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == Ar(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function Lr(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function Dr(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        Lr(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        Lr(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function Fr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        const Cr = function() {
            function t() {
                if (!(this instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var e, r, n, o, i, a, u, s, c;
            return e = t,
            r = null,
            n = [{
                key: "getCustomer",
                value: (c = Dr(G().mark(function t(e, r) {
                    var n;
                    return G().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return n = new kr,
                                t.next = 3,
                                Rr.getCustomer(n, e, r);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "getCustomerInformation",
                value: (s = Dr(G().mark(function t(e, r, n) {
                    var o;
                    return G().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return o = new kr,
                                null != e && (Array.isArray(e) ? o.setFieldNames(e) : F.isFunction(n) && n(R.customerError(4011, R.CUSTOMER_ERROR_PARAMS))),
                                t.next = 4,
                                Rr.getCustomerField(o, r, n);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "updateValueToCustomerFields",
                value: (u = Dr(G().mark(function t(e, r, n) {
                    var o, i;
                    return G().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                try {
                                    "string" == typeof e ? o = JSON.parse(o) : "object" == Ar(e) && (o = e)
                                } catch (t) {
                                    F.isFunction(n) && n(R.customerError(4011, R.CUSTOMER_ERROR_PARAMS))
                                }
                                if (o)
                                    return (i = new kr).setFields(o),
                                    t.next = 6,
                                    Rr.putCustomerField(i, r, n);
                                t.next = 8;
                                break;
                            case 6:
                                t.next = 9;
                                break;
                            case 8:
                                F.isFunction(n) && n(R.customerError(4900, R.CUSTOMER_ERROR_PARAMS));
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "deleteValuesFromCustomerFields",
                value: (a = Dr(G().mark(function t(e, r, n) {
                    var o;
                    return G().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (Array.isArray(e))
                                    return (o = new kr).setFieldNames(e),
                                    t.next = 5,
                                    Rr.deleteCustomerField(o, r, n);
                                t.next = 7;
                                break;
                            case 5:
                                t.next = 8;
                                break;
                            case 7:
                                F.isFunction(n) && n(R.customerError(4011, R.CUSTOMER_ERROR_PARAMS));
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "linkCustomer",
                value: (i = Dr(G().mark(function t(e, r, n) {
                    var o;
                    return G().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return (o = new kr).setChannel(e),
                                t.next = 4,
                                Rr.postCustomerLink(o, r, n);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "unlinkCustomer",
                value: (o = Dr(G().mark(function t(e, r, n) {
                    var o;
                    return G().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return (o = new kr).setChannel(e),
                                t.next = 4,
                                Rr.deleteCustomerLink(o, r, n);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return o.apply(this, arguments)
                }
                )
            }],
            r && Fr(e.prototype, r),
            n && Fr(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function jr(t) {
            return (jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function Y() {
            Y = function() {
                return a
            }
            ;
            var a = {}
              , t = Object.prototype
              , s = t.hasOwnProperty
              , e = "function" == typeof Symbol ? Symbol : {}
              , n = e.iterator || "@@iterator"
              , r = e.asyncIterator || "@@asyncIterator"
              , o = e.toStringTag || "@@toStringTag";
            function i(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, r) {
                    return t[e] = r
                }
            }
            function u(t, e, r, n) {
                var o, i, a, u, e = e && e.prototype instanceof l ? e : l, e = Object.create(e.prototype), n = new w(n || []);
                return e._invoke = (o = t,
                i = r,
                a = n,
                u = "suspendedStart",
                function(t, e) {
                    if ("executing" === u)
                        throw new Error("Generator is already running");
                    if ("completed" === u) {
                        if ("throw" === t)
                            throw e;
                        return _()
                    }
                    for (a.method = t,
                    a.arg = e; ; ) {
                        var r = a.delegate;
                        if (r) {
                            r = function t(e, r) {
                                var n = e.iterator[r.method];
                                if (void 0 === n) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (e.iterator.return && (r.method = "return",
                                        r.arg = void 0,
                                        t(e, r),
                                        "throw" === r.method))
                                            return f;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return f
                                }
                                n = c(n, e.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    f;
                                n = n.arg;
                                return n ? n.done ? (r[e.resultName] = n.value,
                                r.next = e.nextLoc,
                                "return" !== r.method && (r.method = "next",
                                r.arg = void 0),
                                r.delegate = null,
                                f) : n : (r.method = "throw",
                                r.arg = new TypeError("iterator result is not an object"),
                                r.delegate = null,
                                f)
                            }(r, a);
                            if (r) {
                                if (r === f)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === u)
                                throw u = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        u = "executing";
                        r = c(o, i, a);
                        if ("normal" === r.type) {
                            if (u = a.done ? "completed" : "suspendedYield",
                            r.arg === f)
                                continue;
                            return {
                                value: r.arg,
                                done: a.done
                            }
                        }
                        "throw" === r.type && (u = "completed",
                        a.method = "throw",
                        a.arg = r.arg)
                    }
                }
                ),
                e
            }
            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            a.wrap = u;
            var f = {};
            function l() {}
            function h() {}
            function p() {}
            var e = {}
              , y = (i(e, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , y = y && y(y(b([])))
              , d = (y && y !== t && s.call(y, n) && (e = y),
            p.prototype = l.prototype = Object.create(e));
            function v(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    i(t, e, function(t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function g(a, u) {
                var e;
                this._invoke = function(r, n) {
                    function t() {
                        return new u(function(t, e) {
                            !function e(t, r, n, o) {
                                var i, t = c(a[t], a, r);
                                if ("throw" !== t.type)
                                    return (r = (i = t.arg).value) && "object" == jr(r) && s.call(r, "__await") ? u.resolve(r.__await).then(function(t) {
                                        e("next", t, n, o)
                                    }, function(t) {
                                        e("throw", t, n, o)
                                    }) : u.resolve(r).then(function(t) {
                                        i.value = t,
                                        n(i)
                                    }, function(t) {
                                        return e("throw", t, n, o)
                                    });
                                o(t.arg)
                            }(r, n, t, e)
                        }
                        )
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }
            function m(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function E(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function w(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(m, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var r, t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length))
                        return r = -1,
                        (t = function t() {
                            for (; ++r < e.length; )
                                if (s.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        }
                        ).next = t
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return i(d, "constructor", h.prototype = p),
            i(p, "constructor", h),
            h.displayName = i(p, o, "GeneratorFunction"),
            a.isGeneratorFunction = function(t) {
                t = "function" == typeof t && t.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            a.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                i(t, o, "GeneratorFunction")),
                t.prototype = Object.create(d),
                t
            }
            ,
            a.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(g.prototype),
            i(g.prototype, r, function() {
                return this
            }),
            a.AsyncIterator = g,
            a.async = function(t, e, r, n, o) {
                void 0 === o && (o = Promise);
                var i = new g(u(t, e, r, n),o);
                return a.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }
            ,
            v(d),
            i(d, o, "Generator"),
            i(d, n, function() {
                return this
            }),
            i(d, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(r) {
                var t, n = [];
                for (t in r)
                    n.push(t);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var e = n.pop();
                        if (e in r)
                            return t.value = e,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            a.values = b,
            w.prototype = {
                constructor: w,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && s.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function t(t, e) {
                        return i.type = "throw",
                        i.arg = r,
                        n.next = t,
                        e && (n.method = "next",
                        n.arg = void 0),
                        !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = s.call(o, "catchLoc")
                              , u = s.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)
                                    return t(o.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var i = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    f) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            E(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r, n, o = this.tryEntries[e];
                        if (o.tryLoc === t)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            E(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: b(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            a
        }
        function Br(t, e, r, n, o, i, a) {
            try {
                var u = t[i](a)
                  , s = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(s) : Promise.resolve(s).then(n, o)
        }
        function Mr(u) {
            return function() {
                var t = this
                  , a = arguments;
                return new Promise(function(e, r) {
                    var n = u.apply(t, a);
                    function o(t) {
                        Br(n, e, r, o, i, "next", t)
                    }
                    function i(t) {
                        Br(n, e, r, o, i, "throw", t)
                    }
                    o(void 0)
                }
                )
            }
        }
        function Ur(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        var q = "[IND]Indigitall: "
          , t = function() {
            function f() {
                if (!(this instanceof f))
                    throw new TypeError("Cannot call a class as a function");
                this.config = null
            }
            var t, e, r, i, n, o, a, u, s;
            return t = f,
            e = null,
            r = [{
                key: "init",
                value: (s = Mr(Y().mark(function t(e) {
                    var r, n, o, i, a, u, s, c = this;
                    return Y().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (t.prev = 0,
                                r = new w(q),
                                !e) {
                                    t.next = 7;
                                    break
                                }
                                e.onPushPermissionChanged && (e.requestPushPermission = e.onPushPermissionChanged),
                                e.onLocationPermissionChanged && (e.requestLocationPermission = e.onLocationPermissionChanged),
                                t.next = 9;
                                break;
                            case 7:
                                return r.w("config is not defined").writeLog(),
                                t.abrupt("return");
                            case 9:
                                return this.config = e,
                                this.config.logLevel ? (E.setLogLevel(this.config.logLevel),
                                r = new w(q)) : this.config.setDebugLog && (E.setLogLevel(l.WARNING),
                                r = new w(q)),
                                i = "https://device-api.indigitall.com/v1",
                                n = "https://inapp-api.indigitall.com/v1",
                                o = "https://inbox-api.indigitall.com/v1",
                                this.config.urlDeviceApi && (i = this.config.urlDeviceApi),
                                this.config.urlInappApi && (n = this.config.urlInappApi),
                                this.config.urlInboxApi && (o = this.config.urlInboxApi),
                                t.next = 19,
                                E.setUrlDeviceApi(i);
                            case 19:
                                return t.next = 21,
                                E.setUrlInappApi(n);
                            case 21:
                                return t.next = 23,
                                E.setUrlInboxApi(o);
                            case 23:
                                return F.isFunction(this.config.requestPushPermission) && (navigator.indigitallRequestPushPermission = this.config.requestPushPermission),
                                F.isFunction(this.config.requestLocationPermission) && (navigator.indigitallRequestLocationPermission = this.config.requestLocationPermission),
                                F.isFunction(this.config.onNewUserRegistered) && (navigator.indigitallOnNewUserRegistered = this.config.onNewUserRegistered),
                                F.isFunction(this.config.onInitialized) && (navigator.indigitallOnInitialized = this.config.onInitialized),
                                F.isFunction(this.config.onError) && (navigator.indigitallOnError = this.config.onError),
                                F.isFunction(this.config.onLocationUpdated) && (navigator.indigitallOnLocationUpdated = this.config.onLocationUpdated),
                                t.next = 31,
                                U.getPermissions();
                            case 31:
                                if (i = t.sent,
                                U.setPermissionsCallback(),
                                i && "denied" === i.push)
                                    return r.i("Push permission denied").writeLog(),
                                    F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError("Push permission denied"),
                                    t.abrupt("return", !1);
                                t.next = 37;
                                break;
                            case 37:
                                if (!ft.isServiceTimestampExceed()) {
                                    t.next = 65;
                                    break
                                }
                                if (a = "",
                                u = null,
                                !this.config || !this.config.appKey) {
                                    t.next = 48;
                                    break
                                }
                                if (a = this.config.appKey,
                                this.config.requestLocation)
                                    return t.next = 45,
                                    E.setRequestLocation(this.config.requestLocation);
                                t.next = 45;
                                break;
                            case 45:
                                this.config.workerPath && (u = this.config.workerPath),
                                t.next = 50;
                                break;
                            case 48:
                                return r.w("config.appKey is not defined").writeLog(),
                                t.abrupt("return", !1);
                            case 50:
                                if (a)
                                    return t.next = 53,
                                    E.setAppKey(a);
                                t.next = 62;
                                break;
                            case 53:
                                if (f.isServiceWorkerSupported() || f.isSafariPushNotificationSupported())
                                    return s = new or,
                                    p.getBrowser(s, function(t) {
                                        t.supported ? (r.d("browser supported for webpush").writeLog(),
                                        t = new or,
                                        p.getApplicationAll(t, function(t) {
                                            r.d("application ", t).writeLog(),
                                            t && t.data && t.data.configuration && (t = t.data.configuration,
                                            r.d("configuration ", t).writeLog(),
                                            t.vapidPublic && E.setVAPID(t.vapidPublic),
                                            t.safariWebsitePushId && E.setSafariWebsitePushId(t.safariWebsitePushId),
                                            t.enabled && E.setEnabled(t.enabled),
                                            t.serviceSyncTime && E.setServiceSyncTime(t.serviceSyncTime),
                                            t.locationEnabled && E.setLocationEnabled(t.locationEnabled),
                                            t.locationUpdateMinutes && E.setLocationUpdateMinutes(t.locationUpdateMinutes),
                                            t.inboxAuthMode && E.setInboxAuthMode(t.inboxAuthMode),
                                            t.inAppEnabled && (E.setInAppEnabled(t.inAppEnabled),
                                            y.updateInAppExpired()));
                                            t = new d;
                                            E.getDeviceId() && E.getPushToken() ? p.putDevice(t, function(t) {
                                                try {
                                                    var e;
                                                    ft.isServiceTimestampExceed() && ((e = new jt).setAppKey(E.getAppKey()),
                                                    e.setDeviceId(E.getDeviceId()),
                                                    p.postEventVisit(e)),
                                                    t.registeredByCookie ? (E.setServiceTimestamp(Date.now()),
                                                    U.getPermissions().then(function(t) {
                                                        var e = new b;
                                                        e.deviceId && r.i("deviceId:", e.deviceId).writeLog(),
                                                        e.pushToken && r.i("pushToken:", e.pushToken).writeLog(),
                                                        c.config && F.isFunction(navigator.indigitallOnInitialized) && navigator.indigitallOnInitialized(t, e)
                                                    })) : f.registerForPush(u)
                                                } catch (t) {
                                                    F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(new _(I.PUSH_INITIALIZATION_ERROR,t))
                                                }
                                            }, navigator.indigitallOnError) : p.postDevice(t, function(t) {
                                                try {
                                                    var e = new jt;
                                                    e.setAppKey(E.getAppKey()),
                                                    e.setDeviceId(E.getDeviceId()),
                                                    p.postEventVisit(e),
                                                    t.registeredByCookie ? E.setServiceTimestamp(Date.now()) : f.registerForPush(u)
                                                } catch (t) {
                                                    F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(new _(I.PUSH_INITIALIZATION_ERROR,t))
                                                }
                                            }, function(t) {
                                                404 === t.errorCode && E.clearStorage(),
                                                F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(t)
                                            })
                                        }, navigator.indigitallOnError)) : r.w("Browser not Supported").writeLog()
                                    }, navigator.indigitallOnError),
                                    t.abrupt("return", !0);
                                t.next = 59;
                                break;
                            case 59:
                                r.w("ServiceWorker and SafariPushNotification not supported").writeLog();
                            case 60:
                                t.next = 63;
                                break;
                            case 62:
                                r.w("appKey is not found").writeLog();
                            case 63:
                                t.next = 69;
                                break;
                            case 65:
                                return this.device = new b,
                                U.getPermissions().then(function(t) {
                                    F.isFunction(navigator.indigitallOnInitialized) && navigator.indigitallOnInitialized(t, new b)
                                }),
                                r.d("Device enabled").writeLog(),
                                t.abrupt("return", !0);
                            case 69:
                                t.next = 74;
                                break;
                            case 71:
                                t.prev = 71,
                                t.t0 = t.catch(0),
                                F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(new _(I.PUSH_INITIALIZATION_ERROR,t.t0));
                            case 74:
                                return t.abrupt("return", !1);
                            case 75:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[0, 71]])
                })),
                function(t) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "deviceGet",
                value: function(t, e) {
                    return p.getDevice(new d, t, e),
                    !0
                }
            }, {
                key: "deviceEnable",
                value: function(t, e) {
                    return E.setEnabled(!0),
                    p.putDevice(new d(st.ENABLE), t, e),
                    !0
                }
            }, {
                key: "deviceDisable",
                value: function(t, e) {
                    return E.setEnabled(!1),
                    p.putDevice(new d(st.DISABLE), t, e),
                    !0
                }
            }, {
                key: "topicsList",
                value: function(t, e) {
                    return p.getDeviceTopics(new d, t, e),
                    !0
                }
            }, {
                key: "topicsSubscribe",
                value: function(t, e, r) {
                    var n = new d;
                    return n.setTopics(t),
                    p.postDeviceTopics(n, e, r),
                    !0
                }
            }, {
                key: "topicsUnsubscribe",
                value: function(t, e, r) {
                    var n = new d;
                    return n.setTopics(t),
                    p.deleteDeviceTopics(n, e, r),
                    !0
                }
            }, {
                key: "registerForPush",
                value: function(t) {
                    f.isSafariPushNotificationSupported() ? f.launchNotificationPermissionForSafari() : f.isServiceWorkerSupported() && f.launchNotificationPermission(t)
                }
            }, {
                key: "isServiceWorkerSupported",
                value: function() {
                    return "serviceWorker"in navigator
                }
            }, {
                key: "isSafariPushNotificationSupported",
                value: function() {
                    return "safari"in window && "pushNotification"in window.safari
                }
            }, {
                key: "registerServiceWorker",
                value: function(t) {
                    var e = new w(q)
                      , t = t ? t : "/service-worker.js";
                    return navigator.serviceWorker.register(t).then(function(t) {
                        return e.d("ServiceWorker registration successful with scope: " + t.scope).writeLog(),
                        t
                    }).catch(function(t) {
                        return e.e("ServiceWorker registration failed: ", t).writeLog(),
                        t
                    })
                }
            }, {
                key: "launchNotificationPermission",
                value: function(t) {
                    var r = new w(q);
                    this.registerServiceWorker(t).then(function(e) {
                        try {
                            var t;
                            e.installing ? t = e.installing : e.waiting ? t = e.waiting : e.active && (t = e.active),
                            t && (r.d("sw current state " + t.state).writeLog(),
                            "activated" == t.state ? f.subscribeForPushNotification(e) : ("installed" == t.state && E.getPushToken() && e.update(),
                            t.addEventListener("statechange", function(t) {
                                r.d("sw statechange : " + t.target.state).writeLog(),
                                "activated" == t.target.state && f.subscribeForPushNotification(e)
                            })))
                        } catch (t) {
                            F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(new _(I.PUSH_INITIALIZATION_ERROR,t))
                        }
                    })
                }
            }, {
                key: "subscribeForPushNotification",
                value: function(n) {
                    var o = new w(q);
                    return new Promise(function(t, e) {
                        var r = {
                            userVisibleOnly: !0,
                            applicationServerKey: F.urlBase64ToUint8Array(E.getVAPID())
                        };
                        return o.d("Registration: ", n).writeLog(),
                        E.getPermissionPush() || F.callEventPermission(m.PERMISSION_TYPE_PUSH, h.EVENT_TYPE_ASK),
                        t(n.pushManager.subscribe(r))
                    }
                    ).then(function(t) {
                        o.d("Received PushSubscription: ", t).writeLog(),
                        E.getPermissionPush() && E.getPermissionPush() === h.EVENT_TYPE_ACCEPT || (F.callEventPermission(m.PERMISSION_TYPE_PUSH, h.EVENT_TYPE_ACCEPT),
                        E.setPermissionPush(h.EVENT_TYPE_ACCEPT));
                        t = t.toJSON();
                        E.setBrowserPublicKey(t.keys.p256dh),
                        E.setBrowserPrivateKey(t.keys.auth),
                        E.setPushToken(t.endpoint),
                        p.putDevice(new d, function(t) {
                            U.getPermissions().then(function(t) {
                                F.isFunction(navigator.indigitallOnInitialized) && navigator.indigitallOnInitialized(t, new b)
                            }),
                            F.isFunction(navigator.indigitallOnNewUserRegistered) && !E.getNewUserTimestamp() && (E.setNewUserTimestamp(Date.now()),
                            navigator.indigitallOnNewUserRegistered(t)),
                            f.registerLocation()
                        }, navigator.indigitallOnError),
                        E.setServiceTimestamp(Date.now())
                    }).catch(function(t) {
                        o.e("No Registration: " + t).writeLog(),
                        E.getPermissionPush() && E.getPermissionPush() === h.EVENT_TYPE_REJECT || (F.callEventPermission(m.PERMISSION_TYPE_PUSH, h.EVENT_TYPE_REJECT),
                        E.setPermissionPush(h.EVENT_TYPE_REJECT)),
                        F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(t)
                    })
                }
            }, {
                key: "launchNotificationPermissionForSafari",
                value: function() {
                    var t, e = new w(q);
                    E.getSafariWebsitePushId() && E.getDeviceId() ? (t = window.safari.pushNotification.permission(E.getSafariWebsitePushId()),
                    f.checkRemotePermission(t)) : (E.getSafariWebsitePushId() ? e.w("error Device Id is not found") : e.w("error Safari Website Push Id is not found")).writeLog()
                }
            }, {
                key: "checkRemotePermission",
                value: (u = Mr(Y().mark(function t(e) {
                    var r, n;
                    return Y().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (r = new w(q),
                                t.prev = 1,
                                "default" === e.permission)
                                    return n = {
                                        deviceCode: E.getDeviceId()
                                    },
                                    r.d("permission default: ", n).writeLog(),
                                    E.getPermissionPush() || F.callEventPermission(m.PERMISSION_TYPE_PUSH, h.EVENT_TYPE_ASK),
                                    t.t0 = window.safari.pushNotification,
                                    t.next = 9,
                                    p.getURL();
                                t.next = 17;
                                break;
                            case 9:
                                t.t1 = t.sent,
                                t.t2 = t.t1 + "/safari",
                                t.t3 = E.getSafariWebsitePushId(),
                                t.t4 = n,
                                t.t5 = window.indigitall.checkRemotePermission,
                                t.t0.requestPermission.call(t.t0, t.t2, t.t3, t.t4, t.t5),
                                t.next = 18;
                                break;
                            case 17:
                                "denied" === e.permission ? (r.w("permission denied: ", e).writeLog(),
                                E.getPermissionPush() && E.getPermissionPush() != h.EVENT_TYPE_REJECT && (F.callEventPermission(m.PERMISSION_TYPE_PUSH, h.EVENT_TYPE_REJECT),
                                E.setPermissionPush(h.EVENT_TYPE_REJECT))) : "granted" === e.permission && (r.d("permission granted: ", e).writeLog(),
                                E.getPermissionPush() && E.getPermissionPush() != h.EVENT_TYPE_ACCEPT && (F.callEventPermission(m.PERMISSION_TYPE_PUSH, h.EVENT_TYPE_ACCEPT),
                                E.setPermissionPush(h.EVENT_TYPE_ACCEPT)),
                                e.deviceToken && e.deviceToken !== E.getPushToken() && (E.setPushToken(e.deviceToken),
                                p.putDevice(new d, function(t) {
                                    var e;
                                    F.isFunction(navigator.indigitallOnInitialized) && ((e = {}).push = E.getPermissionPush(),
                                    e.location = E.getPermissionLocation(),
                                    navigator.indigitallOnInitialized(e, new b)),
                                    F.isFunction(navigator.indigitallOnNewUserRegistered) && !E.getNewUserTimestamp() && (E.setNewUserTimestamp(Date.now()),
                                    navigator.indigitallOnNewUserRegistered(t)),
                                    f.registerLocation()
                                }, navigator.indigitallOnError),
                                E.setServiceTimestamp(Date.now()),
                                E.setServiceTimestamp(Date.now())));
                            case 18:
                                t.next = 23;
                                break;
                            case 20:
                                t.prev = 20,
                                t.t6 = t.catch(1),
                                F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(new _(I.PUSH_INITIALIZATION_ERROR,t.t6));
                            case 23:
                            case "end":
                                return t.stop()
                            }
                    }, t, null, [[1, 20]])
                })),
                function(t) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "registerLocation",
                value: function() {
                    var e = new w(q);
                    try {
                        navigator.geolocation && E.getRequestLocation() && E.getLocationEnabled() && (!E.getLocationTimestamp() || E.getLocationUpdateMinutes() <= (Date.now() - E.getLocationTimestamp()) / 6e4) && (E.getPermissionLocation() || F.callEventPermission(m.PERMISSION_TYPE_LOCATION, h.EVENT_TYPE_ASK),
                        navigator.geolocation.getCurrentPosition(function(t) {
                            E.getPermissionLocation() || E.getPermissionLocation() == h.EVENT_TYPE_ACCEPT || (F.callEventPermission(m.PERMISSION_TYPE_LOCATION, h.EVENT_TYPE_ACCEPT),
                            E.setPermissionLocation(h.EVENT_TYPE_ACCEPT));
                            var e = new jt;
                            e.setLocation(t.coords.latitude, t.coords.longitude),
                            p.postEventLocation(e),
                            F.isFunction(navigator.indigitallOnLocationUpdated) && navigator.indigitallOnLocationUpdated(t),
                            E.setLocationTimestamp(Date.now())
                        }, function(t) {
                            e.e("error " + t).writeLog(),
                            E.getPermissionLocation() || E.getPermissionLocation() == h.EVENT_TYPE_REJECT || (F.callEventPermission(m.PERMISSION_TYPE_LOCATION, h.EVENT_TYPE_REJECT),
                            E.setPermissionLocation(h.EVENT_TYPE_REJECT))
                        }))
                    } catch (t) {
                        F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(new _(I.PUSH_EVENT_ERROR,t))
                    }
                }
            }, {
                key: "requestPushPermission",
                value: function(e) {
                    U.getPushPermission().then(function(t) {
                        F.isFunction(e) && e(t)
                    })
                }
            }, {
                key: "onPermissionChange",
                value: function() {
                    U.setPermissionCallback()
                }
            }, {
                key: "requestLocationPermission",
                value: function(e) {
                    U.getLocationPermission().then(function(t) {
                        F.isFunction(e) && e(t)
                    })
                }
            }, {
                key: "logIn",
                value: function(t, e, r) {
                    f.setExternalId(t, e, r)
                }
            }, {
                key: "logout",
                value: function(t, e) {
                    f.setExternalId(null, t, e)
                }
            }, {
                key: "setExternalCode",
                value: function(t, e, r) {
                    f.setExternalId(t, e, r)
                }
            }, {
                key: "setExternalId",
                value: (a = Mr(Y().mark(function t(e, r, n) {
                    var o, i;
                    return Y().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (t.prev = 0,
                                o = E.getAppKey()) {
                                    t.next = 5;
                                    break
                                }
                                return F.isFunction(n) && n(new _(I.API_APPKEY_NOT_VALID,"appKey is missing")),
                                t.abrupt("return");
                            case 5:
                                if (null != e)
                                    return t.next = 8,
                                    at.createHmac(o, e);
                                t.next = 12;
                                break;
                            case 8:
                                (i = t.sent) && this.setExternalIdRequest(i, r, n),
                                t.next = 13;
                                break;
                            case 12:
                                this.setExternalIdRequest(null, r, n);
                            case 13:
                                t.next = 18;
                                break;
                            case 15:
                                t.prev = 15,
                                t.t0 = t.catch(0),
                                F.isFunction(n) && n(new _(I.PUSH_DEVICE_ERROR,t.t0));
                            case 18:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[0, 15]])
                })),
                function(t, e, r) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "setExternalIdRequest",
                value: (o = Mr(Y().mark(function t(e, r, n) {
                    var o;
                    return Y().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return o = new d,
                                E.setExternalId(e),
                                t.next = 4,
                                E.setExternalIdRequest(e);
                            case 4:
                                o.setExternalCode(e),
                                p.putDevice(o, function(t) {
                                    F.isFunction(r) && r(t)
                                }, n);
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "showInApp",
                value: function(t, e, r, n, o, i, a, u, s) {
                    P.isValidFormatRequest() ? be.showInApp(t, e, r, n, o, i, a, u, s) : F.isFunction(s) && s(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST))
                }
            }, {
                key: "showMultipleInApp",
                value: function(t, e, r, n, o, i, a, u, s) {
                    P.isValidFormatRequest() ? be.showMultipleInAppshowMultipleInApp(t, e, r, n, o, i, a, u, s) : F.isFunction(s) && s(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST))
                }
            }, {
                key: "getInApp",
                value: function(t, e, r) {
                    P.isValidFormatRequest() ? be.inAppGet(t, e, r) : F.isFunction(r) && r(R.requestError(I.BAD_REQUEST_SERVER_ERROR, R.GENERAL_ERROR_BAD_REQUEST))
                }
            }, {
                key: "isInAppDismissForever",
                value: (n = Mr(Y().mark(function t(e) {
                    return Y().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                ve.isInAppDismissForever(e);
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t) {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "inAppWasShown",
                value: (i = Mr(Y().mark(function t(e, r, n, o, i) {
                    return Y().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                y.inAppWasShown(e, r, n, o, i);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                function(t, e, r, n, o) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "addNewInAppClick",
                value: function(t) {
                    be.addNewClick(t)
                }
            }, {
                key: "addNewInAppToDismissForever",
                value: function(t) {
                    ve.addNewInAppToDismissForever(t)
                }
            }, {
                key: "sendCustomEvent",
                value: function(t, e, r) {
                    try {
                        var n = ""
                          , o = {}
                          , i = !0
                          , a = ("string" == typeof t ? n = t : "object" === jr(t) && (n = t.eventType,
                        t.customData && (o = t.customData),
                        !1 === t.async && (i = t.async)),
                        new jt);
                        a.setDeviceId(E.getDeviceId()),
                        a.setEventType(n),
                        a.setCustomData(o),
                        null != E.getExternalId() && "null" != E.getExternalId() ? (a.setExternalCode(E.getExternalId()),
                        a.setJourneyRequest(!0),
                        !1 === i ? p.postEventJourneySync(a, e, r) : p.postEventJourney(a, e, r)) : !1 === i ? p.postEventCustomSync(a, e, r) : p.postEventCustom(a, e, r)
                    } catch (t) {
                        F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(new _(I.PUSH_EVENT_ERROR,t))
                    }
                }
            }, {
                key: "sendJourneyEvent",
                value: function(t, e, r) {
                    try {
                        var n = ""
                          , o = {}
                          , i = !0
                          , a = ("string" == typeof t ? n = t : "object" === jr(t) && (n = t.eventType,
                        t.customData && (o = t.customData),
                        !1 === t.async && (i = t.async)),
                        new jt);
                        a.setDeviceId(E.getDeviceId()),
                        a.setExternalCodeRequest(),
                        a.setEventType(n),
                        a.setCustomData(o),
                        a.setJourneyRequest(!0),
                        !1 === i ? p.postEventJourneySync(a, e, r) : p.postEventJourney(a, e, r)
                    } catch (t) {
                        F.isFunction(navigator.indigitallOnError) && navigator.indigitallOnError(new _(I.PUSH_EVENT_ERROR,t))
                    }
                }
            }, {
                key: "getInboxMessagesCount",
                value: function(t, e, r) {
                    F.isFunction(t.getAuthConfig) && (navigator.indigitallGetAuthConfig = getAuthConfig),
                    Ze.getMessagesCount(e, r)
                }
            }, {
                key: "getInbox",
                value: function(t, e, r) {
                    F.isFunction(t.getAuthConfig) && (navigator.indigitallGetAuthConfig = getAuthConfig),
                    Ze.getInbox(e, r)
                }
            }, {
                key: "getInboxWithPage",
                value: function(t, e, r, n, o, i, a, u) {
                    F.isFunction(t.getAuthConfig) && (navigator.indigitallGetAuthConfig = getAuthConfig),
                    Ze.getInboxWithPage(e, r, n, o, i, a, u)
                }
            }, {
                key: "getCustomer",
                value: function(t, e) {
                    Cr.getCustomer(t, e)
                }
            }, {
                key: "getCustomerInformation",
                value: function(t, e) {
                    this.getCustomerInformationWithFields(null, t, e)
                }
            }, {
                key: "getCustomerInformationWithFields",
                value: function(t, e, r) {
                    Cr.getCustomerInformation(t, e, r)
                }
            }, {
                key: "assignOrUpdateValueToCustomerFields",
                value: function(t, e, r) {
                    Cr.updateValueToCustomerFields(t, e, r)
                }
            }, {
                key: "deleteValuesFromCustomerFields",
                value: function(t, e, r) {
                    Cr.deleteValuesFromCustomerFields(t, e, r)
                }
            }, {
                key: "link",
                value: function(t, e, r, n) {
                    f.logIn(t, function(t) {
                        Cr.linkCustomer(e, r, n)
                    }, function(t) {
                        F.isFunction(n) && n(t)
                    })
                }
            }, {
                key: "unlink",
                value: function(e, r, n) {
                    f.logout(function(t) {
                        Cr.unlinkCustomer(e, r, n)
                    }, function(t) {
                        F.isFunction(n) && n(t)
                    })
                }
            }],
            e && Ur(t.prototype, e),
            r && Ur(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            f
        }();
        window.indigitall = t,
        window.indigitall.Channel = Channel,
        window.indigitall.LogLevel = l,
        window.indigitall.version = E.getVersion()
    }
    )()
}
)();
