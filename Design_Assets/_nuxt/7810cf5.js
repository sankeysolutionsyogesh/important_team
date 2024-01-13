(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        109: function(e, t, o) {
            "use strict";
            t.a = {
                TITLE_FADE_DURATION: .3,
                TITLE_FADE_AMOUNT: "4vw",
                TITLE_FADE_AMOUNT_REVERSE: "-4vw",
                LINE_TRANSLATE_DURATION: .2,
                LINE_TRANSLATE_AMOUNT: "105%",
                LINE_TRANSLATE_STAGGER: .04
            }
        },
        171: function(e, t, o) {
            "use strict";
            var r = o(0);
            t.a = function(e, t) {
                t("eventHub", new r.default)
            }
        },
        172: function(e, t, o) {
            "use strict";
            o(33), o(24), o(21), o(42), o(15), o(43);
            var r = o(8),
                n = (o(14), o(27), o(161), o(53), o(6), o(23)),
                l = o(179),
                c = o(253),
                d = o(244),
                h = o(181),
                m = o(109);

            function f(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function v(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(t) {
                        Object(r.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var w = m.a.TITLE_FADE_DURATION,
                y = m.a.TITLE_FADE_AMOUNT,
                x = m.a.TITLE_FADE_AMOUNT_REVERSE,
                _ = m.a.LINE_TRANSLATE_AMOUNT;
            t.a = function(e, t) {
                e.app, e.store, e.$eventHub;
                n.a.registerPlugin(l.a, c.a, h.a, d.a), n.a.registerPlugin({
                    name: "className",
                    init: !0,
                    register: function(e, t) {
                        var o = e.plugins.css,
                            r = o.core || console.warn("Requires GSAP 3.2.1 or later") || {},
                            n = e.core._removeLinkedListItem,
                            l = r._removeProperty,
                            c = e.core.PropTween,
                            d = function(t, o) {
                                var p, r = {},
                                    n = getComputedStyle(t),
                                    l = t._gsap;
                                for (p in n) isNaN(p) && "cssText" !== p && "length" !== p && (r[p] = n[p]);
                                for (p in o && l && (l.uncache = !0), e.getProperty(t, "x"), l = t._gsap) r[p] = l[p];
                                return r
                            };
                        t.prototype.init = function(t, r, h) {
                            var p, m = t.getAttribute("class"),
                                style = t.style,
                                f = style.cssText,
                                v = t._gsap,
                                w = v.classPT,
                                y = {},
                                x = "=" !== r.charAt(1) ? r : m.replace(new RegExp("(?:\\s|^)" + r.substr(2) + "(?![\\w-])"), "") + ("+" === r.charAt(0) ? " " + r.substr(2) : ""),
                                _ = this,
                                k = {},
                                C = d(t),
                                $ = /(transform|perspective)/i,
                                S = new o;
                            w && (w.r(1, w.d), n(w.d, w, "_pt")), t.setAttribute("class", x);
                            var z = d(t, !0);
                            for (p in t.setAttribute("class", m), z) z[p] === C[p] || $.test(p) || (k[p] = z[p], style[p] || "0" === style[p] || (y[p] = 1));
                            return v.classPT = _._pt = new c(null, t, "className", 0, 0, (function(e) {
                                if (S.render(e, S), !e || 1 === e)
                                    for (var o in t.setAttribute("class", e ? x : m), y) l(t, o)
                            }), _, 0, -11), style.cssText !== f && (style.cssText = f), v.uncache = !0, e.getProperty(t, "x"), S.init(t, k, h), _._props.push.apply(_._props, S._props), 1
                        }
                    }
                }), n.a.registerEffect({
                    name: "slideLines",
                    effect: function(e, t) {
                        var o = t.direction,
                            r = t.reversed,
                            l = t.paragraph,
                            c = "to" === o ? "to" : "from",
                            d = r ? -1 * _ : _;
                        return n.a[c](e, v({
                            y: d,
                            stagger: l ? {
                                amount: 1
                            } : .2,
                            duration: 1
                        }, t))
                    },
                    extendTimeline: !0
                }), n.a.registerEffect({
                    name: "fadeTitles",
                    effect: function(e, t) {
                        var o = "to" === t.direction ? "to" : "from";
                        return n.a[o](e, v({
                            opacity: 0,
                            x: function(e) {
                                return e % 2 == 0 ? y : x
                            },
                            duration: w
                        }, t))
                    },
                    extendTimeline: !0
                }), n.a.registerEffect({
                    name: "fadeLeft",
                    effect: function(e, t) {
                        var o, r = null !== (o = t.method) && void 0 !== o ? o : "from";
                        return n.a[r](e, v({
                            opacity: 0,
                            x: "-3.125rem",
                            duration: 2.4,
                            ease: "power3.out",
                            force3D: !0
                        }, t))
                    },
                    extendTimeline: !0
                }), n.a.registerEffect({
                    name: "fadeRight",
                    effect: function(e, t) {
                        var o, r = null !== (o = t.method) && void 0 !== o ? o : "from";
                        return n.a[r](e, v({
                            opacity: 0,
                            x: "3.125rem",
                            duration: 2.4,
                            ease: "power3.out",
                            force3D: !0
                        }, t))
                    },
                    extendTimeline: !0
                }), n.a.registerEffect({
                    name: "scaleIn",
                    effect: function(e, t) {
                        var o, r = null !== (o = t.method) && void 0 !== o ? o : "from";
                        return n.a[r](e, v({
                            scale: 1.1,
                            duration: 5,
                            ease: "power3.out",
                            force3D: !0
                        }, t))
                    },
                    extendTimeline: !0
                }), n.a.registerEffect({
                    name: "fadeImage",
                    effect: function(e, t) {
                        var o, r = null !== (o = t.method) && void 0 !== o ? o : "from";
                        return n.a[r](e, v({
                            opacity: 0,
                            y: "3.125rem",
                            duration: 2.4,
                            ease: "power3.out",
                            force3D: !0,
                            delay: function(e, t) {
                                return t.dataset.delay ? parseFloat(t.dataset.delay) : 0
                            }
                        }, t))
                    },
                    extendTimeline: !0
                }), n.a.registerEffect({
                    name: "slideImages",
                    effect: function(e, t) {
                        var o = "to" === t.direction ? "to" : "from";
                        return n.a[o](e, v({
                            clipPath: "inset(100% 0 0 0)",
                            ease: "circ.inOut",
                            duration: 1.2
                        }, t))
                    },
                    extendTimeline: !0
                }), n.a.registerEffect({
                    name: "updateColors",
                    effect: function(e, t) {
                        var o = t.colors,
                            r = {},
                            l = v({}, t);
                        delete l.colors, ["headerColor", "infosColor", "logoColor", "navColor"].forEach((function(e) {
                            var t = o[e] || o.headerColor,
                                n = e.replace("Color", "");
                            t && (r["--".concat(n, "-color")] = t)
                        }));
                        var c = document.getElementById("header");
                        return n.a.to(c, v(v({}, r), {}, {
                            duration: .6
                        }, l))
                    },
                    extendTimeline: !0
                }), t("gsap", n.a), t("ScrollTrigger", l.a)
            }
        },
        173: function(e, t, o) {
            "use strict";
            var r = o(0),
                n = o(254);
            r.default.use(n.a)
        },
        174: function(e, t, o) {
            "use strict";
            o(0).default.directive("watch-width", {
                onResize: function(e, t) {
                    var o = t.getBoundingClientRect().width;
                    document.documentElement.style.setProperty("--" + e + "-width", o + "px")
                },
                inserted: function(e, t, o) {
                    e.onResize = t.def.onResize.bind(t.def, t.value, e), e.onResize(), window.addEventListener("resize", e.onResize)
                },
                beforeUnmount: function(e, t, o) {
                    window.removeEventListener("resize", e.onResize)
                }
            })
        },
        175: function(e, t, o) {
            "use strict";
            o(0).default.directive("watch-height", {
                onResize: function(e, t) {
                    var o = t.getBoundingClientRect().height;
                    document.documentElement.style.setProperty("--" + e + "-height", o + "px")
                },
                inserted: function(e, t, o) {
                    e.onResize = t.def.onResize.bind(t.def, t.value, e), e.onResize(), window.addEventListener("resize", e.onResize)
                },
                beforeUnmount: function(e, t, o) {
                    window.removeEventListener("resize", e.onResize)
                }
            })
        },
        176: function(e, t, o) {
            "use strict";
            o(6), o(15), o(61), o(48);
            t.a = function(e, t) {
                e.app;
                var o = e.store,
                    r = e.$eventHub;
                t("loader", {
                    isLoaded: !1,
                    callbacksQueue: [],
                    setup: function() {
                        this.onLoad = this.onLoad.bind(this), "complete" === document.readyState || "interactive" === document.readyState ? this.onLoad() : document.addEventListener("DOMContentLoaded", this.onLoad)
                    },
                    add: function(e) {
                        this.isLoaded ? e() : this.callbacksQueue.push(e)
                    },
                    onLoad: function() {
                        var e = this;
                        this.isLoaded = !0, this.callbacksQueue.forEach((function(t, o) {
                            "function" == typeof t && t(), e.callbacksQueue.splice(o, 1)
                        }))
                    },
                    load: function() {
                        this.onLoad()
                    },
                    onPreloaderDone: function(e) {
                        o.state.preloader.done ? setTimeout((function() {
                            e()
                        }), 400) : r.$on("preloader:done", (function() {
                            e()
                        }))
                    },
                    clear: function() {
                        this.isLoaded = !1, this.callbacksQueue = []
                    }
                })
            }
        },
        177: function(e, t, o) {
            "use strict";
            o(0).default.directive("cursor", {
                onMouseLeave: function(e) {
                    this.context.$store.commit("cursor/clearType")
                },
                onMouseEnter: function(e) {
                    this.context.$store.commit("cursor/setType", {
                        type: e
                    })
                },
                inserted: function(e, t, o) {
                    e.onMouseEnter = t.def.onMouseEnter.bind(o, t.value), e.onMouseLeave = t.def.onMouseLeave.bind(o, t.value), e.addEventListener("mouseenter", e.onMouseEnter), e.addEventListener("mouseleave", e.onMouseLeave)
                },
                beforeUnmount: function(e, t, o) {
                    e.removeEventListener("mouseenter", e.onMouseEnter), e.removeEventListener("mouseleave", e.onMouseLeave)
                }
            })
        },
        180: function(e) {
            e.exports = JSON.parse('{"a":"1-0-0"}')
        },
        229: function(e, t, o) {
            var content = o(371);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("10799900", content, !0, {
                sourceMap: !1
            })
        },
        230: function(e, t, o) {
            var content = o(373);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("21bb5c94", content, !0, {
                sourceMap: !1
            })
        },
        231: function(e, t, o) {
            var content = o(375);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("c32a2422", content, !0, {
                sourceMap: !1
            })
        },
        232: function(e, t, o) {
            var content = o(377);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("3ad1fb8e", content, !0, {
                sourceMap: !1
            })
        },
        233: function(e, t, o) {
            var content = o(379);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("69f6d558", content, !0, {
                sourceMap: !1
            })
        },
        234: function(e, t, o) {
            var content = o(381);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("1d3271de", content, !0, {
                sourceMap: !1
            })
        },
        235: function(e, t, o) {
            var content = o(384);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("7c26e99c", content, !0, {
                sourceMap: !1
            })
        },
        236: function(e, t, o) {
            var content = o(387);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("2854f5e6", content, !0, {
                sourceMap: !1
            })
        },
        237: function(e, t, o) {
            var content = o(389);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("4312016a", content, !0, {
                sourceMap: !1
            })
        },
        238: function(e, t, o) {
            var content = o(391);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("2e88d25d", content, !0, {
                sourceMap: !1
            })
        },
        239: function(e, t, o) {
            var content = o(393);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("69a87d7b", content, !0, {
                sourceMap: !1
            })
        },
        240: function(e, t, o) {
            var content = o(395);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("1374e71a", content, !0, {
                sourceMap: !1
            })
        },
        257: function(e, t, o) {
            "use strict";
            o(6), o(15);
            var r = o(248),
                n = o(62);

            function l(e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            }
            var c = o(180),
                d = {
                    data: function() {
                        return {
                            version: c.a
                        }
                    },
                    computed: {
                        hasError: function() {
                            return this.$nuxt._hadError
                        },
                        showPreloader: function() {
                            var e, t, o, r, n, l, c, d;
                            return !this.hasError && (null !== (e = this.$store.state.route) && void 0 !== e && e.active ? null === (t = null === (o = this.$store.state.route) || void 0 === o || null === (r = o.active) || void 0 === r || null === (n = r.meta) || void 0 === n ? void 0 : n.showPreloader) || void 0 === t || t : null === (l = null === (c = this.$route) || void 0 === c || null === (d = c.meta) || void 0 === d ? void 0 : d.showPreloader) || void 0 === l || l)
                        },
                        showHeader: function() {
                            var e, t, o, r, n, l, c, d;
                            return !this.hasError && (null !== (e = this.$store.state.route) && void 0 !== e && e.active ? null === (t = null === (o = this.$store.state.route) || void 0 === o || null === (r = o.active) || void 0 === r || null === (n = r.meta) || void 0 === n ? void 0 : n.showHeader) || void 0 === t || t : null === (l = null === (c = this.$route) || void 0 === c || null === (d = c.meta) || void 0 === d ? void 0 : d.showHeader) || void 0 === l || l)
                        },
                        showFooter: function() {
                            var e, t, o, r, n, l, c, d;
                            return !this.hasError && (null !== (e = this.$store.state.route) && void 0 !== e && e.active ? null === (t = null === (o = this.$store.state.route) || void 0 === o || null === (r = o.active) || void 0 === r || null === (n = r.meta) || void 0 === n ? void 0 : n.showFooter) || void 0 === t || t : null === (l = null === (c = this.$route) || void 0 === c || null === (d = c.meta) || void 0 === d ? void 0 : d.showFooter) || void 0 === l || l)
                        }
                    },
                    beforeMount: function() {
                        this.setRoute(), window.scrollTo(0, 0)
                    },
                    mounted: function() {
                        this.$loader.setup(), this.setVH(), this.setTheme(), this.setDeviceClasses(), this.setupSmoothScroll(), this.setupGsapTicker(), this.setupDocumentClassChangeObserver(), this.setupScreenObserver(), window.addEventListener("resize", this.setVH), this.$eventHub.$on("scroll:setup", this.setupSmoothScroll), this.$eventHub.$on("transition:in:complete", this.clearScrollTriggers), this.$eventHub.$on("transition:in:complete", this.clearColorsProperties), this.$eventHub.$on("transition:out:before", this.scrollTop), this.$eventHub.$on("transition:out:before", this.setRoute), this.$eventHub.$on("transition:out:before", this.setTheme), this.$eventHub.$on("transition:out:before", this.scrollTriggersRefresh)
                    },
                    methods: {
                        setupGsapTicker: function() {
                            var e = this;
                            this.$gsap.ticker.remove(this.$gsap.updateRoot), n.a.add((function(t) {
                                return e.$gsap.updateRoot(t / 1e3)
                            }), 0)
                        },
                        setupDocumentClassChangeObserver: function() {
                            var e = this;
                            new MutationObserver((function(t) {
                                t.forEach((function(t) {
                                    if ("class" === t.attributeName) {
                                        var o = t.target.getAttribute("class");
                                        e.$eventHub.$emit("document:classChange", o)
                                    }
                                }))
                            })).observe(document.documentElement, {
                                attributes: !0
                            })
                        },
                        setupScreenObserver: function() {
                            var e = this,
                                t = function() {
                                    var t = window.innerWidth,
                                        o = window.innerHeight,
                                        r = t > o ? "landscape" : "portrait";
                                    e.$store.commit("screen/update", {
                                        width: t,
                                        height: o,
                                        orientation: r
                                    })
                                };
                            window.addEventListener("resize", t), t()
                        },
                        clearColorsProperties: function() {
                            ["--header-color", "--infos-color", "--logo-color", "--nav-color"].forEach((function(e) {
                                document.documentElement.style.removeProperty(e)
                            })), document.body.style.backgroundColor = "", document.body.style.color = ""
                        },
                        setTheme: function() {
                            var e, t, o, r = null === (e = this.$store.state.route) || void 0 === e || null === (t = e.active) || void 0 === t || null === (o = t.meta) || void 0 === o ? void 0 : o.theme;
                            document.documentElement.removeAttribute("data-theme"), r && document.documentElement.setAttribute("data-theme", r)
                        },
                        setRoute: function() {
                            this.$store.commit("route/setActive", {
                                active: this.$nuxt.$route
                            })
                        },
                        setVH: function() {
                            document.documentElement.style.setProperty("--vh", "".concat(window.innerHeight / 100, "px"))
                        },
                        setDeviceClasses: function() {
                            this.$device.isWindows && document.documentElement.classList.add("is-windows"), this.$device.isFirefox && document.documentElement.classList.add("is-firefox")
                        },
                        setupSmoothScroll: function() {
                            var e = this,
                                t = new r.a({
                                    duration: 1.1,
                                    easing: l,
                                    smooth: !0,
                                    direction: "vertical"
                                });
                            t.stop(), t.on("scroll", (function(t) {
                                var o = t.scroll,
                                    r = t.limit,
                                    n = t.velocity,
                                    progress = t.progress;
                                void 0 !== e.$store._mutations["scroll/setScroll"] && e.$store.commit("scroll/setScroll", {
                                    y: o,
                                    limit: r,
                                    progress: progress,
                                    direction: n > 0 ? 1 : -1,
                                    velocity: n
                                })
                            })), this.showPreloader ? this.$loader.onPreloaderDone((function() {
                                t.start()
                            })) : t.start();
                            var o = n.a.add((function(e) {
                                return t.raf(e)
                            }), 0);
                            this.$eventHub.$on("scrollTo", (function() {
                                t.scrollTo.apply(t, arguments)
                            })), this.$eventHub.$on("scrollToTop", (function(e) {
                                t.scrollTo(0, e)
                            })), this.$eventHub.$on("scrollToBottom", (function() {
                                t.scrollTo(t.limit)
                            })), this.$eventHub.$on("scrollLock", (function() {
                                t.stop()
                            })), this.$eventHub.$on("scrollUnlock", (function() {
                                t.start()
                            })), this.$eventHub.$on("scrollDestroy", (function() {
                                t.destroy(), n.a.remove(o), e.$eventHub.$off("scrollTo"), e.$eventHub.$off("scrollToTop"), e.$eventHub.$off("scrollToBottom"), e.$eventHub.$off("scrollLock"), e.$eventHub.$off("scrollUnlock"), e.$eventHub.$off("scrollDestroy")
                            }))
                        },
                        scrollTop: function() {
                            this.$eventHub.$emit("scrollToTop", {
                                immediate: !0
                            })
                        },
                        clearScrollTriggers: function() {
                            this.$ScrollTrigger.getAll().forEach((function(e) {
                                e && (!1 !== e.vars.clearOnPageChange && e.kill && e.kill(!1))
                            }))
                        },
                        scrollTriggersRefresh: function() {
                            this.$ScrollTrigger.refresh(), this.$ScrollTrigger.getAll().forEach((function(e) {
                                e && (!1 === e.vars.clearOnPageChange && e.refresh())
                            }))
                        }
                    }
                },
                h = d,
                m = o(2),
                component = Object(m.a)(h, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", [t("script", {
                        attrs: {
                            type: "text/plain",
                            "data-cookiecategory": "analytics",
                            src: "https://www.googletagmanager.com/gtag/js?id=".concat(e.$config.GTM_ID),
                            defer: ""
                        }
                    }), e._v(" "), t("script", {
                        attrs: {
                            type: "text/plain",
                            "data-cookiecategory": "analytics"
                        }
                    }, [e._v("\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', '" + e._s(e.$config.GTM_ID) + "');\n  ")]), e._v(" "), t("link", {
                        attrs: {
                            rel: "prefetch",
                            href: "/assets/home/INTRODUCTION/output/sm_".concat(e.version, "/DR_INTRO_000.webp"),
                            as: "image"
                        }
                    }), e._v(" "), t("link", {
                        attrs: {
                            rel: "prefetch",
                            href: "/assets/home/INTRODUCTION/output/md_".concat(e.version, "/DR_INTRO_000.webp"),
                            as: "image"
                        }
                    }), e._v(" "), t("link", {
                        attrs: {
                            rel: "prefetch",
                            href: "/assets/home/INTRODUCTION/output/lg_".concat(e.version, "/DR_INTRO_000.webp"),
                            as: "image"
                        }
                    }), e._v(" "), e.showPreloader ? t("SitePreloader") : e._e(), e._v(" "), t("PanelSignup"), e._v(" "), t("client-only", [t("BackgroundShifter"), e._v(" "), t("PageTransition"), e._v(" "), t("CookieBanner"), e._v(" "), t("CustomCursor"), e._v(" "), t("svg", {
                        staticStyle: {
                            width: "0",
                            height: "0"
                        }
                    }, [t("clipPath", {
                        attrs: {
                            id: "shape-clip-path",
                            clipPathUnits: "objectBoundingBox"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M0.509,1 H0.49 C0.374,1,0.279,0.97,0.209,0.936 C0.191,0.928,0.174,0.918,0.16,0.91 C0.155,0.907,0.151,0.905,0.148,0.902 C0.131,0.892,0.115,0.881,0.1,0.869 C0.078,0.852,0.058,0.834,0.041,0.815 C0.027,0.8,0.015,0.786,0.004,0.771 L0.003,0.769 L0,0.765 V0.235 L0.003,0.231 L0.004,0.229 C0.015,0.214,0.027,0.2,0.041,0.185 C0.058,0.166,0.078,0.148,0.1,0.131 C0.11,0.124,0.12,0.117,0.13,0.11 C0.136,0.106,0.142,0.102,0.148,0.098 C0.163,0.088,0.181,0.078,0.201,0.068 C0.272,0.032,0.37,0,0.491,0 H0.51 C0.664,0,0.781,0.053,0.852,0.098 C0.869,0.108,0.885,0.119,0.9,0.131 C0.939,0.161,0.972,0.195,0.996,0.229 L1,0.235 V0.765 L0.998,0.768 L0.996,0.771 C0.985,0.785,0.973,0.8,0.96,0.814 C0.942,0.833,0.922,0.852,0.9,0.869 C0.885,0.881,0.869,0.892,0.852,0.902 C0.848,0.905,0.844,0.907,0.84,0.91 C0.825,0.919,0.809,0.928,0.791,0.936 C0.72,0.97,0.625,1,0.509,1 L0.509,1"
                        }
                    })])])], 1), e._v(" "), e.showHeader ? t("SiteHeader") : e._e(), e._v(" "), t("main", {
                        staticClass: "relative z-10"
                    }, [t("Nuxt")], 1), e._v(" "), e.showFooter ? t("SiteFooter") : e._e()], 1)
                }), [], !1, null, null, null);
            t.a = component.exports;
            installComponents(component, {
                SitePreloader: o(413).default,
                PanelSignup: o(414).default,
                BackgroundShifter: o(417).default,
                PageTransition: o(418).default,
                CookieBanner: o(419).default,
                CustomCursor: o(420).default,
                SiteHeader: o(424).default,
                SiteFooter: o(423).default
            })
        },
        258: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    name: "CursorRotate",
                    mixins: [o(41).default],
                    methods: {
                        beforeEnter: function() {},
                        enter: function(e, t) {
                            this.getEnterTL(e, t).restart()
                        },
                        leave: function(e, t) {
                            this.getLeaveTL(e, t).restart()
                        }
                    }
                },
                n = o(2),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("transition", {
                        attrs: {
                            css: !1,
                            appear: "",
                            mode: "out-in"
                        },
                        on: {
                            beforeEnter: e.beforeEnter,
                            enter: e.enter,
                            leave: e.leave
                        }
                    }, [t("span", {
                        staticClass: "cursor-type cursor-type--rotate"
                    }, [t("span", {
                        ref: "inner",
                        staticClass: "cursor-type__inner"
                    }, [t("div", {
                        staticClass: "text-[#CAB7A5] aspect-[33/40] w-[3.47vw] relative"
                    }, [t("svg-icon", {
                        staticClass: "absolute inset-0 w-full h-full",
                        attrs: {
                            name: "shape-rotate"
                        }
                    })], 1)])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        259: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    name: "CursorPlay",
                    mixins: [o(41).default],
                    methods: {
                        beforeEnter: function() {},
                        enter: function(e, t) {
                            this.getEnterTL(e, t).restart()
                        },
                        leave: function(e, t) {
                            this.getLeaveTL(e, t).restart()
                        }
                    }
                },
                n = o(2),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("transition", {
                        attrs: {
                            css: !1,
                            appear: "",
                            mode: "out-in"
                        },
                        on: {
                            beforeEnter: e.beforeEnter,
                            enter: e.enter,
                            leave: e.leave
                        }
                    }, [t("span", {
                        staticClass: "cursor-type cursor-type--play",
                        class: [e.themeClass]
                    }, [t("span", {
                        ref: "backdrop",
                        class: ["cursor-type__backdrop"]
                    }), e._v(" "), t("span", {
                        ref: "inner",
                        staticClass: "cursor-type__inner"
                    }, [t("div", {
                        staticClass: "cursor-type__text oh"
                    }, [t("div", {
                        ref: "text",
                        staticClass: "cursor-type__inner"
                    }, [e._v("PLAY")])])])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        260: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    name: "CursorPause",
                    mixins: [o(41).default],
                    methods: {
                        beforeEnter: function() {},
                        enter: function(e, t) {
                            this.getEnterTL(e, t).restart()
                        },
                        leave: function(e, t) {
                            this.getLeaveTL(e, t).restart()
                        }
                    }
                },
                n = o(2),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("transition", {
                        attrs: {
                            css: !1,
                            appear: "",
                            mode: "out-in"
                        },
                        on: {
                            beforeEnter: e.beforeEnter,
                            enter: e.enter,
                            leave: e.leave
                        }
                    }, [t("span", {
                        staticClass: "cursor-type cursor-type--pause",
                        class: [e.themeClass]
                    }, [t("span", {
                        ref: "backdrop",
                        class: ["cursor-type__backdrop"]
                    }), e._v(" "), t("span", {
                        ref: "inner",
                        staticClass: "cursor-type__inner"
                    }, [t("div", {
                        staticClass: "cursor-type__text oh"
                    }, [t("div", {
                        ref: "text",
                        staticClass: "cursor-type__inner"
                    }, [e._v("PAUSE")])])])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        261: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    name: "CursorClose",
                    mixins: [o(41).default],
                    methods: {
                        beforeEnter: function() {},
                        enter: function(e, t) {
                            this.getEnterTL(e, t).restart()
                        },
                        leave: function(e, t) {
                            this.getLeaveTL(e, t).restart()
                        }
                    }
                },
                n = o(2),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("transition", {
                        attrs: {
                            css: !1,
                            appear: "",
                            mode: "out-in"
                        },
                        on: {
                            beforEnter: e.beforeEnter,
                            enter: e.enter,
                            leave: e.leave
                        }
                    }, [t("span", {
                        staticClass: "cursor-type cursor-type--close",
                        class: [e.themeClass]
                    }, [t("span", {
                        ref: "backdrop",
                        class: ["cursor-type__backdrop"]
                    }), e._v(" "), t("span", {
                        ref: "inner",
                        staticClass: "cursor-type__inner"
                    }, [t("div", {
                        staticClass: "cursor-type__text oh"
                    }, [t("div", {
                        ref: "text",
                        staticClass: "cursor-type__inner"
                    }, [e._v("CLOSE")])])])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        262: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    name: "CursorMore",
                    mixins: [o(41).default],
                    methods: {
                        beforeEnter: function() {},
                        enter: function(e, t) {
                            this.getEnterTL(e, t).restart()
                        },
                        leave: function(e, t) {
                            this.getLeaveTL(e, t).restart()
                        }
                    }
                },
                n = o(2),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("transition", {
                        attrs: {
                            css: !1,
                            appear: "",
                            mode: "out-in"
                        },
                        on: {
                            beforEnter: e.beforeEnter,
                            enter: e.enter,
                            leave: e.leave
                        }
                    }, [t("span", {
                        staticClass: "cursor-type cursor-type--more",
                        class: [e.themeClass]
                    }, [t("span", {
                        ref: "backdrop",
                        class: ["cursor-type__backdrop"]
                    }), e._v(" "), t("span", {
                        ref: "inner",
                        staticClass: "cursor-type__inner"
                    }, [t("div", {
                        staticClass: "cursor-type__text oh"
                    }, [t("div", {
                        ref: "text",
                        staticClass: "cursor-type__inner"
                    }, [e._v("VIEW MORE")])])])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        263: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    name: "CursorNext",
                    mixins: [o(41).default],
                    methods: {
                        beforeEnter: function() {},
                        enter: function(e, t) {
                            this.getEnterTL(e, t).restart()
                        },
                        leave: function(e, t) {
                            this.getLeaveTL(e, t).restart()
                        }
                    }
                },
                n = o(2),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("transition", {
                        attrs: {
                            css: !1,
                            appear: "",
                            mode: "out-in"
                        },
                        on: {
                            beforEnter: e.beforeEnter,
                            enter: e.enter,
                            leave: e.leave
                        }
                    }, [t("span", {
                        staticClass: "cursor-type cursor-type--next",
                        class: [e.themeClass]
                    }, [t("span", {
                        ref: "backdrop",
                        class: ["cursor-type__backdrop"]
                    }), e._v(" "), t("span", {
                        ref: "inner",
                        staticClass: "cursor-type__inner"
                    }, [t("div", {
                        staticClass: "cursor-type__text oh"
                    }, [t("div", {
                        ref: "text",
                        staticClass: "cursor-type__inner"
                    }, [e._v("NEXT")])])])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        264: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    name: "CursorPrev",
                    mixins: [o(41).default],
                    methods: {
                        beforeEnter: function() {},
                        enter: function(e, t) {
                            this.getEnterTL(e, t).restart()
                        },
                        leave: function(e, t) {
                            this.getLeaveTL(e, t).restart()
                        }
                    }
                },
                n = o(2),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("transition", {
                        attrs: {
                            css: !1,
                            appear: "",
                            mode: "out-in"
                        },
                        on: {
                            beforEnter: e.beforeEnter,
                            enter: e.enter,
                            leave: e.leave
                        }
                    }, [t("span", {
                        staticClass: "cursor-type cursor-type--prev",
                        class: [e.themeClass]
                    }, [t("span", {
                        ref: "backdrop",
                        class: ["cursor-type__backdrop"]
                    }), e._v(" "), t("span", {
                        ref: "inner",
                        staticClass: "cursor-type__inner"
                    }, [t("div", {
                        staticClass: "cursor-type__text oh"
                    }, [t("div", {
                        ref: "text",
                        staticClass: "cursor-type__inner"
                    }, [e._v("PREVIOUS")])])])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        267: function(e, t, o) {
            "use strict";
            o.r(t);
            o(26), o(24), o(55), o(48), o(6), o(38), o(37), o(53), o(111);
            var r = ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of the Congo", "Cook Islands", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and Mcdonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, the Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.s.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
                n = {
                    props: {
                        active: {
                            type: Boolean,
                            default: !1
                        },
                        name: {
                            type: String,
                            default: ""
                        },
                        storeMutationIn: {
                            type: String,
                            default: ""
                        },
                        storeMutationOut: {
                            type: String,
                            default: ""
                        },
                        interactive: {
                            type: Boolean,
                            default: !0
                        },
                        isPhoneRequired: {
                            type: Boolean,
                            default: !1
                        },
                        messagePlaceholder: {
                            type: String,
                            default: "Type your message here"
                        },
                        useMessage: {
                            type: Boolean,
                            default: !0
                        },
                        usePrivateDetailsAcceptance: {
                            type: Boolean,
                            default: !0
                        },
                        useBackdrop: {
                            type: Boolean,
                            default: !0
                        },
                        onHide: {
                            type: Function,
                            default: function() {}
                        },
                        onSubmit: {
                            type: Function,
                            default: function() {}
                        },
                        theme: {
                            type: String,
                            default: "dark"
                        }
                    },
                    data: function() {
                        return {
                            isSubmitted: !1,
                            isActive: this.active,
                            tel: "",
                            countries: r
                        }
                    },
                    computed: {
                        isDark: function() {
                            return "dark" === this.theme
                        },
                        isLight: function() {
                            return "light" === this.theme
                        },
                        formName: function() {
                            return "".concat(this.name, "-form")
                        },
                        fieldCountDecrement: function() {
                            return this.useMessage ? 0 : 1
                        },
                        hasSlotDescription: function() {
                            return !!this.$slots.description
                        },
                        hasSlotDisclaimer: function() {
                            return !!this.$slots.disclaimer
                        },
                        phoneLabel: function() {
                            return this.$store.state.screen.width > 768 ? "Phone number" : "Phone"
                        }
                    },
                    watch: {
                        $route: function() {
                            this.onHide && this.onHide()
                        },
                        isActive: function(e) {
                            var t = this;
                            this.setInview(e), e ? (this.disableSiteScroll(), document.documentElement.classList.add("is-panel-".concat(this.name, "-active")), this.$refs.panelOuter && (this.$refs.panelOuter.scrollTop = 0)) : (document.documentElement.classList.remove("is-panel-".concat(this.name, "-active")), document.documentElement.classList.add("is-panel-".concat(this.name, "-leaving")), setTimeout((function() {
                                document.documentElement.classList.remove("is-panel-".concat(t.name, "-leaving")), t.enableSiteScroll(), t.isSubmitted && (t.isSubmitted = !1)
                            }), 400))
                        }
                    },
                    destroyed: function() {
                        this.interactive || this.enableSiteScroll(), this.removeEvents()
                    },
                    mounted: function() {
                        var e = this;
                        this.interactive || this.$nextTick((function() {
                            e.disableSiteScroll()
                        })), this.addEvents()
                    },
                    methods: {
                        hide: function() {
                            null == this || this.onHide()
                        },
                        setActive: function(e) {
                            this.isActive = e
                        },
                        setInview: function(e) {
                            this.$refs.panel.classList.toggle("is-inview", e)
                        },
                        addEvents: function() {
                            document.addEventListener("keydown", this.handleKeydown), this.onStoreUpdate()
                        },
                        removeEvents: function() {
                            document.removeEventListener("keydown", this.handleKeydown), this.unsubscribe && this.unsubscribe()
                        },
                        disableSiteScroll: function() {
                            document.documentElement.classList.add("is-scroll-disabled"), this.$eventHub.$emit("scrollDestroy")
                        },
                        enableSiteScroll: function() {
                            document.documentElement.classList.remove("is-scroll-disabled"), this.$eventHub.$emit("scroll:setup")
                        },
                        onStoreUpdate: function() {
                            var e = this;
                            this.storeMutationIn && this.storeMutationOut && (this.unsubscribe = this.$store.subscribe((function(t, o) {
                                t.type === e.storeMutationIn && (e.isActive = !0), t.type === e.storeMutationOut && (e.isActive = !1)
                            })))
                        },
                        onPhoneUpdate: function(e) {
                            var t = e.isValid,
                                o = (e.countryCode, e.phoneNumber, e.formatInternational);
                            this.tel = t ? o : ""
                        },
                        onSubmitted: function() {
                            this.isSubmitted = !0, console.log("Form successfully submitted")
                        },
                        clear: function() {
                            this.$refs.form && this.$refs.form.reset()
                        },
                        handleKeydown: function(e) {
                            27 === e.keyCode && (null == this || this.hide())
                        },
                        handleSubmit: function(e) {
                            var t = this;
                            e.preventDefault();
                            var o = e.target,
                                r = new FormData(o);
                            r.get("bot-field") || Promise.all([fetch("/", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: new URLSearchParams(r).toString()
                            }), null == this ? void 0 : this.onSubmit({
                                formData: r
                            })]).then((function() {
                                return t.onSubmitted()
                            })).catch((function(e) {
                                return console.error(e)
                            }))
                        }
                    }
                },
                l = (o(372), o(2)),
                component = Object(l.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        ref: "panelOuter",
                        staticClass: "c-panel",
                        class: {
                            "-dark": e.isDark, "-light": e.isLight, "is-active": e.isActive
                        }
                    }, [e.useBackdrop ? t("div", {
                        staticClass: "c-panel_backdrop",
                        on: {
                            click: e.hide
                        }
                    }) : e._e(), e._v(" "), t("div", {
                        ref: "panel",
                        staticClass: "c-panel_content u-screen u-anim -fast u-clip-path-fix",
                        style: {
                            "--transition-delay": e.isSubmitted ? ".4s" : ".6s"
                        }
                    }, [e.isSubmitted ? t("div", {
                        staticClass: "px-6 lg:px-10 pb-10 u-screen flex flex-col justify-between",
                        class: {
                            "pt-header": !e.interactive, "pt-10 md:pt-header": e.interactive
                        }
                    }, [t("div", {
                        staticClass: "flex flex-col justify-center grow text-center || u-anim_item",
                        style: {
                            "--item-index": 0
                        }
                    }, [e._t("submitted"), e._v(" "), t("p", {
                        staticClass: "mt-16 text-xl uppercase font-semibold"
                    }, [e._v("\n          The Daniel Roth Team\n        ")])], 2), e._v(" "), e.interactive ? t("div", {
                        staticClass: "u-anim_item text-center",
                        style: {
                            "--item-index": 1
                        }
                    }, [t("button", {
                        staticClass: "uppercase hover:opacity-50 transition-opacity duration-500",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: e.hide
                        }
                    }, [e._v("\n          Close\n        ")])]) : e._e()]) : t("div", [t("form", {
                        ref: "form",
                        staticClass: "px-6 lg:px-10 pb-10 u-screen flex flex-col justify-between",
                        class: {
                            "pt-header": !e.interactive, "pt-10 md:pt-header": e.interactive
                        },
                        attrs: {
                            autocomplete: "off",
                            name: e.formName,
                            method: "post",
                            netlify: "",
                            "netlify-honeypot": "bot-field"
                        },
                        on: {
                            submit: e.handleSubmit
                        }
                    }, [t("input", {
                        attrs: {
                            type: "hidden",
                            name: "form-name"
                        },
                        domProps: {
                            value: e.formName
                        }
                    }), e._v(" "), e._m(0), e._v(" "), t("div", {
                        staticClass: "mb-8 || u-anim_item",
                        staticStyle: {
                            "--item-index": "0"
                        }
                    }, [t("div", {
                        staticClass: "text-[10vw] md:text-[3.5rem] leading-none-fix uppercase font-display"
                    }, [e._t("title")], 2), e._v(" "), e.hasSlotDescription ? t("div", {
                        staticClass: "uppercase mt-2 max-w-md"
                    }, [e._t("description")], 2) : e._e()]), e._v(" "), t("div", {
                        staticClass: "grid sm:grid-cols-2 gap-x-4 gap-y-6"
                    }, [e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), t("div", {
                        staticClass: "o-field || u-anim_item col-span-full",
                        staticStyle: {
                            "--item-index": "3",
                            "z-index": "20"
                        }
                    }, [t("label", {
                        staticClass: "o-field_label",
                        attrs: {
                            for: "phone"
                        }
                    }, [e._v(e._s(e.phoneLabel))]), e._v(" "), t("FormInputTel", {
                        staticClass: "grow",
                        attrs: {
                            required: e.isPhoneRequired
                        },
                        on: {
                            update: e.onPhoneUpdate
                        }
                    }), e._v(" "), t("input", {
                        attrs: {
                            type: "hidden",
                            required: "",
                            name: "phone"
                        },
                        domProps: {
                            value: e.tel
                        }
                    }), e._v(" "), e.isPhoneRequired ? e._e() : t("span", {
                        staticClass: "o-field_optional || ml-2"
                    }, [e._v("(optional)")])], 1), e._v(" "), t("div", {
                        staticClass: "o-field || u-anim_item col-span-full",
                        staticStyle: {
                            "--item-index": "4"
                        }
                    }, [t("label", {
                        staticClass: "o-field_label",
                        attrs: {
                            for: "country"
                        }
                    }, [e._v("Country of residence")]), e._v(" "), t("select", {
                        staticClass: "o-field_select",
                        attrs: {
                            id: "country",
                            name: "country",
                            required: ""
                        }
                    }, [t("option", {
                        attrs: {
                            value: ""
                        }
                    }, [e._v("\n                SELECT A COUNTRY\n              ")]), e._v(" "), e._l(e.countries, (function(o) {
                        return t("option", {
                            key: o,
                            domProps: {
                                value: o
                            }
                        }, [e._v("\n                " + e._s(o) + "\n              ")])
                    }))], 2)]), e._v(" "), e.useMessage ? t("div", {
                        staticClass: "o-field -textarea || u-anim_item col-span-full",
                        staticStyle: {
                            "--item-index": "5"
                        }
                    }, [t("label", {
                        staticClass: "o-field_label",
                        attrs: {
                            for: "message"
                        }
                    }, [e._v("Message")]), e._v(" "), t("textarea", {
                        staticClass: "o-field_input",
                        attrs: {
                            id: "message",
                            name: "message",
                            rows: "5",
                            placeholder: e.messagePlaceholder
                        }
                    })]) : e._e(), e._v(" "), e.usePrivateDetailsAcceptance ? t("div", {
                        staticClass: "o-field -checkbox || u-anim_item col-span-full",
                        style: "--item-index:".concat(6 - e.fieldCountDecrement)
                    }, [t("input", {
                        attrs: {
                            id: "accept-share-private-details-".concat(e.name),
                            name: "accept-share-private-details",
                            type: "checkbox",
                            required: ""
                        }
                    }), e._v(" "), t("label", {
                        staticClass: "o-field_label",
                        attrs: {
                            for: "accept-share-private-details-".concat(e.name)
                        }
                    }, [t("div", {
                        staticClass: "o-field_checkbox"
                    }, [t("svg-icon", {
                        staticClass: "o-field_checkbox-base",
                        attrs: {
                            name: "shape-outline"
                        }
                    }), e._v(" "), t("svg-icon", {
                        staticClass: "o-field_checkbox-active",
                        attrs: {
                            name: "shape-filled"
                        }
                    })], 1), e._v("\n              I understand and agree that DANIEL ROTH shares my private details above to its distribution partners for them to handle my request.\n              You can see the list of our distribution partners in our\n              "), t("a", {
                        staticClass: "underline",
                        attrs: {
                            href: "/privacy-policy",
                            target: "_blank",
                            rel: "noopener noreferer"
                        }
                    }, [e._v("privacy policy")]), e._v(".\n            ")])]) : e._e(), e._v(" "), t("div", {
                        staticClass: "o-field -checkbox || u-anim_item col-span-full",
                        style: "--item-index:".concat(6 - e.fieldCountDecrement)
                    }, [t("input", {
                        attrs: {
                            id: "accept-communications-".concat(e.name),
                            name: "accept-communications",
                            type: "checkbox"
                        }
                    }), e._v(" "), t("label", {
                        staticClass: "o-field_label",
                        attrs: {
                            for: "accept-communications-".concat(e.name)
                        }
                    }, [t("div", {
                        staticClass: "o-field_checkbox"
                    }, [t("svg-icon", {
                        staticClass: "o-field_checkbox-base",
                        attrs: {
                            name: "shape-outline"
                        }
                    }), e._v(" "), t("svg-icon", {
                        staticClass: "o-field_checkbox-active",
                        attrs: {
                            name: "shape-filled"
                        }
                    })], 1), e._v("\n              I agree to receive communications by email or phone from DANIEL ROTH to stay updated about the brand news and events.\n            ")]), e._v(" "), e._m(4)]), e._v(" "), e.hasSlotDisclaimer ? t("div", {
                        staticClass: "mt-8 col-span-full || u-anim_item",
                        style: "--item-index:".concat(6 - e.fieldCountDecrement)
                    }, [e._t("disclaimer")], 2) : e._e()]), e._v(" "), t("div", {
                        staticClass: "mt-8 flex justify-end || u-anim_item",
                        style: "--item-index:".concat(7 - e.fieldCountDecrement)
                    }, [t("ButtonCTA", {
                        attrs: {
                            type: "submit"
                        }
                    }, [e._v("\n            Submit\n          ")])], 1), e._v(" "), e.interactive ? t("div", {
                        staticClass: "mt-8 text-center || u-anim_item",
                        style: "--item-index:".concat(8 - e.fieldCountDecrement)
                    }, [t("button", {
                        staticClass: "uppercase hover:opacity-50 transition-opacity duration-500",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: e.hide
                        }
                    }, [e._v("\n            Close\n          ")])]) : e._e()])])])])
                }), [function() {
                    var e = this._self._c;
                    return e("p", {
                        staticClass: "hidden"
                    }, [e("label", [this._v("\n            Don’t fill this out if you’re human: "), e("input", {
                        attrs: {
                            name: "bot-field"
                        }
                    })])])
                }, function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "o-field || u-anim_item",
                        staticStyle: {
                            "--item-index": "1"
                        }
                    }, [t("label", {
                        staticClass: "o-field_label",
                        attrs: {
                            for: "name"
                        }
                    }, [e._v("Name")]), e._v(" "), t("input", {
                        staticClass: "o-field_input",
                        attrs: {
                            id: "name",
                            type: "text",
                            name: "name",
                            required: ""
                        }
                    })])
                }, function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "o-field || u-anim_item",
                        staticStyle: {
                            "--item-index": "2"
                        }
                    }, [t("label", {
                        staticClass: "o-field_label",
                        attrs: {
                            for: "surname"
                        }
                    }, [e._v("Surname")]), e._v(" "), t("input", {
                        staticClass: "o-field_input",
                        attrs: {
                            id: "surname",
                            type: "text",
                            name: "surname",
                            required: ""
                        }
                    })])
                }, function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "o-field || u-anim_item col-span-full",
                        staticStyle: {
                            "--item-index": "3"
                        }
                    }, [t("label", {
                        staticClass: "o-field_label",
                        attrs: {
                            for: "email"
                        }
                    }, [e._v("E-mail")]), e._v(" "), t("input", {
                        staticClass: "o-field_input",
                        attrs: {
                            id: "email",
                            type: "email",
                            name: "email",
                            required: ""
                        }
                    })])
                }, function() {
                    var e = this,
                        t = e._self._c;
                    return t("p", {
                        staticClass: "mt-4 uppercase text-sm opacity-50"
                    }, [e._v("\n              By clicking the submit button, you confirm you have read and agree to the\n              "), t("a", {
                        staticClass: "underline",
                        attrs: {
                            href: "/privacy-policy",
                            target: "_blank",
                            rel: "noopener noreferer"
                        }
                    }, [e._v("privacy policy")]), e._v(".\n            ")])
                }], !1, null, "3ee6a2ee", null);
            t.default = component.exports;
            installComponents(component, {
                FormInputTel: o(415).default,
                ButtonCTA: o(416).default
            })
        },
        268: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    props: {
                        tag: {
                            type: String,
                            default: "button"
                        }
                    }
                },
                n = o(2),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t(e.tag, {
                        tag: "component",
                        staticClass: "group inline-flex items-center justify-center bg-white text-black rounded-full px-6 py-3 uppercase"
                    }, [t("span", {
                        staticClass: "mt-leading-none-fix"
                    }, [e._t("default")], 2), e._v(" "), t("svg-icon", {
                        staticClass: "ml-2 w-4 h-2 duration-500 transition-transform ease-in-out group-hover:translate-x-2",
                        attrs: {
                            name: "arrow-right"
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        272: function(e, t, o) {
            o(273), e.exports = o(274)
        },
        322: function(e, t, o) {
            var content = o(323);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("18ce0508", content, !0, {
                sourceMap: !1
            })
        },
        323: function(e, t, o) {
            var r = o(28),
                n = o(219),
                l = o(324),
                c = o(325),
                d = o(326),
                h = r((function(i) {
                    return i[1]
                })),
                m = n(l),
                f = n(c),
                v = n(d);
            h.push([e.i, '/*! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.container{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem;}@media (min-width: 460px){.container{max-width:460px;}}@media (min-width: 640px){.container{max-width:640px;}}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1024px){.container{max-width:1024px;}}@media (min-width: 1352px){.container{max-width:1352px;}}.aspect-w-5{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w:5;}.aspect-w-5 > *{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0;}.aspect-h-6{--tw-aspect-h:6;}.aspect-w-8{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w:8;}.aspect-w-8 > *{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0;}.aspect-h-9{--tw-aspect-h:9;}.aspect-w-16{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w:16;}.aspect-w-16 > *{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0;}.aspect-h-4{--tw-aspect-h:4;}.aspect-w-\\[16\\]{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w:16;}.aspect-w-\\[16\\] > *{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0;}.aspect-h-\\[21\\]{--tw-aspect-h:21;}.aspect-w-1{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w:1;}.aspect-w-1 > *{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0;}.aspect-h-1{--tw-aspect-h:1;}.aspect-w-11{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w:11;}.aspect-w-11 > *{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0;}.aspect-h-8{--tw-aspect-h:8;}.aspect-w-9{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w:9;}.aspect-w-9 > *{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0;}.aspect-h-10{--tw-aspect-h:10;}.prose{color:currentColor;max-width:65ch;}.prose :where([class~="lead"]):not(:where([class~="not-prose"] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em;}.prose :where(a):not(:where([class~="not-prose"] *)){color:var(--tw-prose-links);text-decoration:underline;font-weight:500;}.prose :where(strong):not(:where([class~="not-prose"] *)){color:var(--tw-prose-bold);font-weight:600;}.prose :where(a strong):not(:where([class~="not-prose"] *)){color:inherit;}.prose :where(blockquote strong):not(:where([class~="not-prose"] *)){color:inherit;}.prose :where(thead th strong):not(:where([class~="not-prose"] *)){color:inherit;}.prose :where(ol):not(:where([class~="not-prose"] *)){list-style-type:decimal;margin-top:1.25em;margin-bottom:1.25em;padding-left:1.625em;}.prose :where(ol[type="A"]):not(:where([class~="not-prose"] *)){list-style-type:upper-alpha;}.prose :where(ol[type="a"]):not(:where([class~="not-prose"] *)){list-style-type:lower-alpha;}.prose :where(ol[type="A" s]):not(:where([class~="not-prose"] *)){list-style-type:upper-alpha;}.prose :where(ol[type="a" s]):not(:where([class~="not-prose"] *)){list-style-type:lower-alpha;}.prose :where(ol[type="I"]):not(:where([class~="not-prose"] *)){list-style-type:upper-roman;}.prose :where(ol[type="i"]):not(:where([class~="not-prose"] *)){list-style-type:lower-roman;}.prose :where(ol[type="I" s]):not(:where([class~="not-prose"] *)){list-style-type:upper-roman;}.prose :where(ol[type="i" s]):not(:where([class~="not-prose"] *)){list-style-type:lower-roman;}.prose :where(ol[type="1"]):not(:where([class~="not-prose"] *)){list-style-type:decimal;}.prose :where(ul):not(:where([class~="not-prose"] *)){list-style-type:disc;margin-top:1.25em;margin-bottom:1.25em;padding-left:1.625em;}.prose :where(ol > li):not(:where([class~="not-prose"] *))::marker{font-weight:400;color:var(--tw-prose-counters);}.prose :where(ul > li):not(:where([class~="not-prose"] *))::marker{color:var(--tw-prose-bullets);}.prose :where(hr):not(:where([class~="not-prose"] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em;}.prose :where(blockquote):not(:where([class~="not-prose"] *)){font-weight:500;font-style:italic;color:var(--tw-prose-quotes);border-left-width:0.25rem;border-left-color:var(--tw-prose-quote-borders);quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em;}.prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))::before{content:open-quote;}.prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"] *))::after{content:close-quote;}.prose :where(h1):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111;}.prose :where(h1 strong):not(:where([class~="not-prose"] *)){font-weight:900;color:inherit;}.prose :where(h2):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333;}.prose :where(h2 strong):not(:where([class~="not-prose"] *)){font-weight:800;color:inherit;}.prose :where(h3):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6;}.prose :where(h3 strong):not(:where([class~="not-prose"] *)){font-weight:700;color:inherit;}.prose :where(h4):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5;}.prose :where(h4 strong):not(:where([class~="not-prose"] *)){font-weight:700;color:inherit;}.prose :where(img):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.prose :where(figure > *):not(:where([class~="not-prose"] *)){margin-top:0;margin-bottom:0;}.prose :where(figcaption):not(:where([class~="not-prose"] *)){color:var(--tw-prose-captions);font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em;}.prose :where(code):not(:where([class~="not-prose"] *)){color:var(--tw-prose-code);font-weight:600;font-size:0.875em;}.prose :where(code):not(:where([class~="not-prose"] *))::before{content:"`";}.prose :where(code):not(:where([class~="not-prose"] *))::after{content:"`";}.prose :where(a code):not(:where([class~="not-prose"] *)){color:inherit;}.prose :where(h1 code):not(:where([class~="not-prose"] *)){color:inherit;}.prose :where(h2 code):not(:where([class~="not-prose"] *)){color:inherit;font-size:0.875em;}.prose :where(h3 code):not(:where([class~="not-prose"] *)){color:inherit;font-size:0.9em;}.prose :where(h4 code):not(:where([class~="not-prose"] *)){color:inherit;}.prose :where(blockquote code):not(:where([class~="not-prose"] *)){color:inherit;}.prose :where(thead th code):not(:where([class~="not-prose"] *)){color:inherit;}.prose :where(pre):not(:where([class~="not-prose"] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);overflow-x:auto;font-weight:400;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em;}.prose :where(pre code):not(:where([class~="not-prose"] *)){background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;}.prose :where(pre code):not(:where([class~="not-prose"] *))::before{content:none;}.prose :where(pre code):not(:where([class~="not-prose"] *))::after{content:none;}.prose :where(table):not(:where([class~="not-prose"] *)){width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857;}.prose :where(thead):not(:where([class~="not-prose"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders);}.prose :where(thead th):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.prose :where(tbody tr):not(:where([class~="not-prose"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders);}.prose :where(tbody tr:last-child):not(:where([class~="not-prose"] *)){border-bottom-width:0;}.prose :where(tbody td):not(:where([class~="not-prose"] *)){vertical-align:baseline;}.prose :where(tfoot):not(:where([class~="not-prose"] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders);}.prose :where(tfoot td):not(:where([class~="not-prose"] *)){vertical-align:top;}.prose{--tw-prose-body:#374151;--tw-prose-headings:currentColor;--tw-prose-lead:#4b5563;--tw-prose-links:currentColor;--tw-prose-bold:currentColor;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgb(0 0 0 / 50%);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75;}.prose :where(p):not(:where([class~="not-prose"] *)){margin-top:1.25em;margin-bottom:1.25em;}.prose :where(video):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.prose :where(figure):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em;}.prose :where(li):not(:where([class~="not-prose"] *)){margin-top:0.5em;margin-bottom:0.5em;}.prose :where(ol > li):not(:where([class~="not-prose"] *)){padding-left:0.375em;}.prose :where(ul > li):not(:where([class~="not-prose"] *)){padding-left:0.375em;}.prose :where(.prose > ul > li p):not(:where([class~="not-prose"] *)){margin-top:0.75em;margin-bottom:0.75em;}.prose :where(.prose > ul > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.25em;}.prose :where(.prose > ul > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.25em;}.prose :where(.prose > ol > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.25em;}.prose :where(.prose > ol > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.25em;}.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"] *)){margin-top:0.75em;margin-bottom:0.75em;}.prose :where(hr + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(h2 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(h3 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(h4 + *):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(thead th:first-child):not(:where([class~="not-prose"] *)){padding-left:0;}.prose :where(thead th:last-child):not(:where([class~="not-prose"] *)){padding-right:0;}.prose :where(tbody td, tfoot td):not(:where([class~="not-prose"] *)){padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"] *)){padding-left:0;}.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"] *)){padding-right:0;}.prose :where(.prose > :first-child):not(:where([class~="not-prose"] *)){margin-top:0;}.prose :where(.prose > :last-child):not(:where([class~="not-prose"] *)){margin-bottom:0;}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;}.pointer-events-none{pointer-events:none;}.pointer-events-auto{pointer-events:auto;}.visible{visibility:visible;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.sticky{position:-webkit-sticky;position:sticky;}.inset-0{top:0px;right:0px;bottom:0px;left:0px;}.inset-x-0{left:0px;right:0px;}.top-0{top:0px;}.left-0{left:0px;}.top-1\\/2{top:50%;}.left-1\\/2{left:50%;}.bottom-0{bottom:0px;}.right-0{right:0px;}.bottom-10{bottom:2.5rem;}.bottom-2{bottom:0.5rem;}.top-4{top:1rem;}.bottom-6{bottom:1.5rem;}.bottom-\\[2\\.8vw\\]{bottom:2.8vw;}.left-\\[2\\.8vw\\]{left:2.8vw;}.bottom-\\[var\\(--home-intro-clip-path-translate\\)\\]{bottom:var(--home-intro-clip-path-translate);}.left-\\[3vw\\]{left:3vw;}.top-\\[var\\(--home-intro-clip-path-translate\\)\\]{top:var(--home-intro-clip-path-translate);}.right-\\[8\\.125vw\\]{right:8.125vw;}.top-\\[-1px\\]{top:-1px;}.top-header{top:var(--header-height);}.top-\\[11\\.46vw\\]{top:11.46vw;}.right-\\[6\\.13vw\\]{right:6.13vw;}.bottom-\\[5\\%\\]{bottom:5%;}.right-6{right:1.5rem;}.z-10{z-index:10;}.z-40{z-index:40;}.z-50{z-index:50;}.z-20{z-index:20;}.z-0{z-index:0;}.z-30{z-index:30;}.col-span-full{grid-column:1 / -1;}.my-48{margin-top:12rem;margin-bottom:12rem;}.my-6{margin-top:1.5rem;margin-bottom:1.5rem;}.mx-auto{margin-left:auto;margin-right:auto;}.mx-6{margin-left:1.5rem;margin-right:1.5rem;}.my-14{margin-top:3.5rem;margin-bottom:3.5rem;}.-mx-4{margin-left:-1rem;margin-right:-1rem;}.mt-leading-none-fix{margin-top:-0.125em;}.ml-2{margin-left:0.5rem;}.mb-4{margin-bottom:1rem;}.ml-\\[32vw\\]{margin-left:32vw;}.mr-\\[8vw\\]{margin-right:8vw;}.mb-3{margin-bottom:0.75rem;}.mb-8{margin-bottom:2rem;}.mt-3{margin-top:0.75rem;}.mb-\\[-250vh\\]{margin-bottom:-250vh;}.mt-\\[14vh\\]{margin-top:14vh;}.mt-\\[1\\.2vw\\]{margin-top:1.2vw;}.mt-14{margin-top:3.5rem;}.mt-2{margin-top:0.5rem;}.mt-\\[3\\.2vw\\]{margin-top:3.2vw;}.mt-4{margin-top:1rem;}.mt-8{margin-top:2rem;}.mr-\\[6\\.4vw\\]{margin-right:6.4vw;}.-mt-px{margin-top:-1px;}.mt-6{margin-top:1.5rem;}.mt-\\[4\\.26vw\\]{margin-top:4.26vw;}.mt-\\[4vw\\]{margin-top:4vw;}.mt-\\[10vw\\]{margin-top:10vw;}.mt-\\[35vw\\]{margin-top:35vw;}.mb-\\[0\\.8em\\]{margin-bottom:0.8em;}.mt-\\[12\\.8vw\\]{margin-top:12.8vw;}.mt-\\[6\\.4vw\\]{margin-top:6.4vw;}.mb-\\[0\\.5em\\]{margin-bottom:0.5em;}.mt-16{margin-top:4rem;}.ml-4{margin-left:1rem;}.block{display:block;}.inline-block{display:inline-block;}.inline{display:inline;}.flex{display:flex;}.inline-flex{display:inline-flex;}.grid{display:grid;}.contents{display:contents;}.hidden{display:none;}.aspect-\\[33\\/40\\]::before{float:left;padding-top:121.21212121212122%;content:\'\';}.aspect-\\[33\\/40\\]::after{display:block;content:\'\';clear:both;}.aspect-\\[440\\/520\\]::before{float:left;padding-top:118.1818181818182%;content:\'\';}.aspect-\\[440\\/520\\]::after{display:block;content:\'\';clear:both;}.aspect-\\[210\\/283\\]::before{float:left;padding-top:134.76190476190476%;content:\'\';}.aspect-\\[210\\/283\\]::after{display:block;content:\'\';clear:both;}.aspect-\\[2186\\/1125\\]::before{float:left;padding-top:51.46386093321135%;content:\'\';}.aspect-\\[2186\\/1125\\]::after{display:block;content:\'\';clear:both;}.aspect-\\[139\\/172\\]::before{float:left;padding-top:123.7410071942446%;content:\'\';}.aspect-\\[139\\/172\\]::after{display:block;content:\'\';clear:both;}.aspect-\\[1694\\/1984\\]::before{float:left;padding-top:117.11924439197166%;content:\'\';}.aspect-\\[1694\\/1984\\]::after{display:block;content:\'\';clear:both;}.aspect-\\[4\\/5\\]::before{float:left;padding-top:125%;content:\'\';}.aspect-\\[4\\/5\\]::after{display:block;content:\'\';clear:both;}.h-full{height:100%;}.h-\\[38\\.7\\%\\]{height:38.7%;}.h-screen{height:100vh;}.h-\\[1em\\]{height:1em;}.h-2{height:0.5rem;}.h-\\[10px\\]{height:10px;}.h-\\[500vh\\]{height:500vh;}.h-\\[100vh\\]{height:100vh;}.h-\\[101vh\\]{height:101vh;}.h-\\[300vh\\]{height:300vh;}.h-\\[2px\\]{height:2px;}.h-4{height:1rem;}.h-12{height:3rem;}.w-full{width:100%;}.w-\\[24\\%\\]{width:24%;}.w-\\[2\\.1875rem\\]{width:2.1875rem;}.w-4{width:1rem;}.w-\\[3\\.47vw\\]{width:3.47vw;}.w-6{width:1.5rem;}.w-\\[32vh\\]{width:32vh;}.w-screen{width:100vw;}.w-80{width:20rem;}.w-\\[62\\.5vw\\]{width:62.5vw;}.w-\\[36\\.8vw\\]{width:36.8vw;}.w-\\[66vw\\]{width:66vw;}.w-\\[70vw\\]{width:70vw;}.w-\\[40vw\\]{width:40vw;}.w-\\[74vw\\]{width:74vw;}.w-\\[78\\.3vw\\]{width:78.3vw;}.w-\\[27\\.5rem\\]{width:27.5rem;}.w-\\[8\\.8vw\\]{width:8.8vw;}.w-\\[24rem\\]{width:24rem;}.w-12{width:3rem;}.max-w-full{max-width:100%;}.max-w-\\[40vw\\]{max-width:40vw;}.max-w-md{max-width:28rem;}.max-w-\\[40rem\\]{max-width:40rem;}.flex-shrink{flex-shrink:1;}.shrink-0{flex-shrink:0;}.flex-grow{flex-grow:1;}.grow{flex-grow:1;}.origin-left{transform-origin:left;}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.translate-y-\\[19\\%\\]{--tw-translate-y:19%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.translate-x-\\[28vw\\]{--tw-translate-x:28vw;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.scale-x-0{--tw-scale-x:0;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.scale-x-100{--tw-scale-x:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.-scale-x-100{--tw-scale-x:-1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.scale-x-\\[var\\(--progress\\)\\]{--tw-scale-x:var(--progress);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.transform-gpu{transform:translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.cursor-pointer{cursor:pointer;}.cursor-grab{cursor:-webkit-grab;cursor:grab;}.cursor-grabbing{cursor:-webkit-grabbing;cursor:grabbing;}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none;}.resize{resize:both;}.flex-row{flex-direction:row;}.flex-row-reverse{flex-direction:row-reverse;}.flex-col{flex-direction:column;}.flex-col-reverse{flex-direction:column-reverse;}.items-start{align-items:flex-start;}.items-center{align-items:center;}.justify-end{justify-content:flex-end;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.justify-around{justify-content:space-around;}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem;}.gap-y-6{row-gap:1.5rem;}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse));}.space-x-\\[1\\.1vw\\] > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.1vw * var(--tw-space-x-reverse));margin-left:calc(1.1vw * calc(1 - var(--tw-space-x-reverse)));}.space-x-5 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));}.space-x-4 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));}.space-x-2 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));}.overflow-hidden{overflow:hidden;}.whitespace-nowrap{white-space:nowrap;}.rounded-full{border-radius:9999px;}.border{border-width:1px;}.border-y{border-top-width:1px;border-bottom-width:1px;}.border-b{border-bottom-width:1px;}.border-t{border-top-width:1px;}.border-black{--tw-border-opacity:1;border-color:rgb(37 35 34 / var(--tw-border-opacity));}.border-\\[\\#927963\\]{--tw-border-opacity:1;border-color:rgb(146 121 99 / var(--tw-border-opacity));}.border-opacity-30{--tw-border-opacity:0.3;}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-true-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));}.bg-beige{--tw-bg-opacity:1;background-color:rgb(223 223 223 / var(--tw-bg-opacity));}.bg-\\[\\#252322\\]{--tw-bg-opacity:1;background-color:rgb(37 35 34 / var(--tw-bg-opacity));}.bg-\\[\\#927963\\]{--tw-bg-opacity:1;background-color:rgb(146 121 99 / var(--tw-bg-opacity));}.bg-\\[\\#4E4135\\]{--tw-bg-opacity:1;background-color:rgb(78 65 53 / var(--tw-bg-opacity));}.bg-\\[\\#DCC1B1\\]{--tw-bg-opacity:1;background-color:rgb(220 193 177 / var(--tw-bg-opacity));}.bg-\\[\\#7F685C\\]{--tw-bg-opacity:1;background-color:rgb(127 104 92 / var(--tw-bg-opacity));}.bg-\\[\\#CAB7A5\\]{--tw-bg-opacity:1;background-color:rgb(202 183 165 / var(--tw-bg-opacity));}.bg-black{--tw-bg-opacity:1;background-color:rgb(37 35 34 / var(--tw-bg-opacity));}.bg-opacity-50{--tw-bg-opacity:0.5;}.object-cover{-o-object-fit:cover;object-fit:cover;}.p-6{padding:1.5rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.py-8{padding-top:2rem;padding-bottom:2rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem;}.px-10{padding-left:2.5rem;padding-right:2.5rem;}.py-\\[2\\.13vw\\]{padding-top:2.13vw;padding-bottom:2.13vw;}.px-4{padding-left:1rem;padding-right:1rem;}.py-32{padding-top:8rem;padding-bottom:8rem;}.py-\\[20vw\\]{padding-top:20vw;padding-bottom:20vw;}.py-4{padding-top:1rem;padding-bottom:1rem;}.py-14{padding-top:3.5rem;padding-bottom:3.5rem;}.py-12{padding-top:3rem;padding-bottom:3rem;}.pb-14{padding-bottom:3.5rem;}.pt-6{padding-top:1.5rem;}.pr-10{padding-right:2.5rem;}.pb-\\[10vw\\]{padding-bottom:10vw;}.pl-\\[1\\.8em\\]{padding-left:1.8em;}.pl-\\[1em\\]{padding-left:1em;}.pb-6{padding-bottom:1.5rem;}.pt-header{padding-top:var(--header-height);}.pb-8{padding-bottom:2rem;}.pb-10{padding-bottom:2.5rem;}.pt-10{padding-top:2.5rem;}.pt-5{padding-top:1.25rem;}.pb-4{padding-bottom:1rem;}.text-left{text-align:left;}.text-center{text-align:center;}.text-right{text-align:right;}.indent-\\[4\\.8em\\]{text-indent:4.8em;}.font-display{font-family:Krylon, serif;}.font-body{font-family:degular, sans-serif;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-9xl{font-size:8rem;line-height:1;}.text-\\[1\\.375rem\\]{font-size:1.375rem;}.text-\\[3\\.5rem\\]{font-size:3.5rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-\\[4\\.26vw\\]{font-size:4.26vw;}.text-xs{font-size:0.75rem;line-height:1rem;}.text-\\[3\\.2vw\\]{font-size:3.2vw;}.text-\\[5vw\\]{font-size:5vw;}.text-\\[13\\.8vw\\]{font-size:13.8vw;}.text-\\[12\\.8vw\\]{font-size:12.8vw;}.text-\\[3\\.73vw\\]{font-size:3.73vw;}.text-\\[16vw\\]{font-size:16vw;}.text-\\[4\\.8vw\\]{font-size:4.8vw;}.text-\\[11\\.5vw\\]{font-size:11.5vw;}.text-\\[5\\.866vw\\]{font-size:5.866vw;}.text-\\[8vw\\]{font-size:8vw;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-base{font-size:1rem;line-height:1.5rem;}.text-\\[10vw\\]{font-size:10vw;}.text-\\[1vw\\]{font-size:1vw;}.text-\\[1\\.11vw\\]{font-size:1.11vw;}.text-6xl{font-size:3.75rem;line-height:1;}.text-\\[13vw\\]{font-size:13vw;}.font-medium{font-weight:500;}.font-light{font-weight:300;}.font-semibold{font-weight:600;}.uppercase{text-transform:uppercase;}.leading-tight{line-height:1.25;}.leading-none-fix{line-height:0.9;}.leading-none{line-height:1;}.leading-\\[1\\.1\\]{line-height:1.1;}.leading-\\[1\\.3\\]{line-height:1.3;}.tracking-basic{letter-spacing:0.04em;}.text-black{--tw-text-opacity:1;color:rgb(37 35 34 / var(--tw-text-opacity));}.text-\\[\\#CAB7A5\\]{--tw-text-opacity:1;color:rgb(202 183 165 / var(--tw-text-opacity));}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.text-\\[\\#5A5553\\]{--tw-text-opacity:1;color:rgb(90 85 83 / var(--tw-text-opacity));}.text-\\[\\#372D25\\]{--tw-text-opacity:1;color:rgb(55 45 37 / var(--tw-text-opacity));}.text-\\[\\#927963\\]{--tw-text-opacity:1;color:rgb(146 121 99 / var(--tw-text-opacity));}.text-\\[\\#7F685C\\]{--tw-text-opacity:1;color:rgb(127 104 92 / var(--tw-text-opacity));}.text-\\[\\#DCC1B1\\]{--tw-text-opacity:1;color:rgb(220 193 177 / var(--tw-text-opacity));}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline;}.opacity-100{opacity:1;}.opacity-0{opacity:0;}.opacity-40{opacity:0.4;}.opacity-70{opacity:0.7;}.opacity-50{opacity:0.5;}.mix-blend-multiply{mix-blend-mode:multiply;}.outline{outline-style:solid;}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.blur-sm{--tw-blur:blur(4px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-500{transition-duration:500ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}.ease-in{transition-timing-function:cubic-bezier(0.4, 0, 1, 1);}.will-change-\\[clip-path\\]{will-change:clip-path;}.will-change-transform{will-change:transform;}.u-screen{min-height:calc(1vh*100);min-height:calc(var(--vh)*100)}.h-svh{height:100vh;height:100svh}.u-no-br .br-like{display:inline}.u-no-br .br-like:after{content:" "}@font-face{font-family:"Krylon";src:url(' + m + ') format("woff2"),url(' + f + ') format("woff");font-weight:400;font-style:normal}:root{--vh:1vh}::-webkit-scrollbar{display:none}*{-webkit-backface-visibility:hidden;backface-visibility:hidden;outline:none}html{line-height:1;scroll-behavior:auto;height:auto}@media(min-width:1024px){html{font-size:1.1111111111vw}}html.is-menu-open,html.is-scroll-disabled{overflow:hidden}body,html{width:100%;min-height:100%}body{font-family:degular, sans-serif;font-weight:400;--tw-bg-opacity:1;background-color:rgb(223 223 223 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(37 35 34 / var(--tw-text-opacity));}[data-lenis-prevent]{overscroll-behavior:contain}@media(prefers-reduced-motion:no-preference){:root{--transition-easing:cubic-bezier(0.38,0.005,0.215,1);--transition-translate:2rem;--transition-duration:1s;--transition-delay:0s;--transition-stagger-delay:0.3s}.-a-no-translate{--transition-translate:0}.u-anim.-fast{--transition-duration:.6s;--transition-stagger-delay:0.075s}.u-anim_item{opacity:0;transform:translateY(var(--transition-translate));transition:transform var(--transition-duration) var(--transition-easing),opacity var(--transition-duration) var(--transition-easing)}.u-anim.is-inview .u-anim_item{opacity:1;transform:translateY(0);transition-delay:calc(var(--transition-delay) + var(--item-index)*var(--transition-stagger-delay))}.u-anim-stagger-lines{--transition-stagger-delay:0.075s}.u-anim-stagger-lines .word{display:inline-block;vertical-align:top;opacity:0;transform:translate3d(0,120%,0);transition:transform 1s cubic-bezier(.38,.005,.215,1),opacity 1s cubic-bezier(.38,.005,.215,1);transition-delay:calc(var(--line-index)*var(--transition-stagger-delay))}.u-anim-stagger-lines.is-inview .word{opacity:1;transform:translateZ(0)}.u-anim-stagger-words{--transition-global-delay:0s;--transition-stagger-delay:0.05s}.u-anim-stagger-words .word{display:inline-block;vertical-align:top;opacity:0;transform:translate3d(0,50%,0);transition:transform 1s cubic-bezier(.38,.005,.215,1),opacity 1s cubic-bezier(.38,.005,.215,1);transition-delay:calc(var(--transition-global-delay) + var(--word-index)*var(--transition-stagger-delay))}.u-anim-stagger-words.is-inview .word{opacity:1;transform:translateZ(0)}}.u-clip-x-1\\/2{-webkit-clip-path:polygon(50% 0,100% 0,100% 100%,50% 100%);clip-path:polygon(50% 0,100% 0,100% 100%,50% 100%)}.u-clip-path-fix{transform:translateZ(10px)}.br-like{display:block}.u-grayscale{filter:grayscale(100%)}.o-link-underline{position:relative;text-decoration:none;--underline-gap:0em}.o-link-underline:after{content:"";background:currentColor;position:absolute;bottom:0;bottom:var(--underline-gap,0);left:0;right:0;height:1px;background-color:currentColor;transform-origin:right center;transition:transform 1s cubic-bezier(.23,1,.32,1);transform:scaleX(0)}.o-link-underline.-is-active:after,.o-link-underline:hover:after{transform-origin:left center;transform:scaleX(1)}.o-field{display:flex;align-items:baseline;position:relative;padding-bottom:0.25rem;line-height:1.5;}.o-field:before{position:absolute;content:"";width:100%;height:1px;background:currentColor;bottom:0;left:0;opacity:.5;transition:opacity .6s ease;}.o-field:focus-within:before{opacity:1}.o-field_label{opacity:.5;text-transform:uppercase;font-size:0.875rem;line-height:1.25rem}@media (min-width: 640px){.o-field_label{font-size:1rem;line-height:1.5rem;}}.o-field_label{margin-right:0.5rem;}@media (min-width: 640px){.o-field_label{margin-right:1rem;}}.o-field_label{flex-shrink:0;}.o-field_input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-style:none;flex-grow:1;width:100%;}.o-field_input::-moz-placeholder{color:currentColor;text-transform:uppercase;}.o-field_input::placeholder{color:currentColor;text-transform:uppercase;}.o-field_input:-moz-placeholder-shown{opacity:0.5;}.o-field_input:placeholder-shown{opacity:0.5;}.o-field_input:before{position:absolute;bottom:0px;left:0px;height:1px;width:100%;}.o-field_select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-style:none;flex-grow:1;width:100%;background:transparent url(' + v + ') no-repeat 100%;background-size:.5rem .5rem;}.o-field_select:before{position:absolute;bottom:0px;left:0px;height:1px;width:100%;}.o-field_optional{align-self:center;opacity:.5;font-size:.75em;text-transform:uppercase}.o-field.-textarea{flex-direction:column;align-items:flex-start;}.o-field.-textarea .o-field_label{margin-right:0px;margin-bottom:0.5rem;}.o-field.-textarea .o-field_input{line-height:1.2;width:100%;resize:none}.o-field.-checkbox{flex-direction:column;align-items:flex-start;}.o-field.-checkbox:before{display:none}.o-field.-checkbox input[type=checkbox],.o-field.-checkbox input[type=radio]{position:absolute;top:.25em;opacity:0}.o-field.-checkbox input[type=checkbox]+label,.o-field.-checkbox input[type=radio]+label{cursor:pointer;position:relative;padding-left:2em;opacity:.5}.o-field.-checkbox input[type=checkbox]+label .o-field_checkbox,.o-field.-checkbox input[type=radio]+label .o-field_checkbox{--stroke-width:2px;--checkbox-size:1.2em;width:var(--checkbox-size);height:var(--checkbox-size);position:absolute;left:0;top:.25em;margin:auto;z-index:1}.o-field.-checkbox input[type=checkbox]+label .o-field_checkbox-active, .o-field.-checkbox input[type=checkbox]+label .o-field_checkbox-base, .o-field.-checkbox input[type=radio]+label .o-field_checkbox-active, .o-field.-checkbox input[type=radio]+label .o-field_checkbox-base{position:absolute;top:0px;left:0px;height:100%;width:100%;}.o-field.-checkbox input[type=checkbox]+label .o-field_checkbox-active,.o-field.-checkbox input[type=radio]+label .o-field_checkbox-active{opacity:0;transform:translateY(5px) scale(.3);transition:all .4s ease}.o-field.-checkbox input[type=checkbox]:checked+label,.o-field.-checkbox input[type=radio]:checked+label{opacity:1}.o-field.-checkbox input[type=checkbox]:checked+label .o-field_checkbox-active,.o-field.-checkbox input[type=radio]:checked+label .o-field_checkbox-active{opacity:1;transform:scale(.5)}.o-field.-checkbox input[type=checkbox]:not(:checked)+label:hover .o-field_checkbox-active,.o-field.-checkbox input[type=radio]:not(:checked)+label:hover .o-field_checkbox-active{opacity:.5;transform:translateY(0) scale(.3)}.o-field.-checkbox .o-field_label{opacity:1;font-size:0.875rem;line-height:1.25rem;margin-right:0px}.placeholder\\:uppercase::-moz-placeholder{text-transform:uppercase;}.placeholder\\:uppercase::placeholder{text-transform:uppercase;}.hover\\:opacity-50:hover{opacity:0.5;}.group:hover .group-hover\\:translate-x-2{--tw-translate-x:0.5rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}@media (min-width: 640px){.sm\\:w-\\[38vh\\]{width:38vh;}.sm\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}}@media (min-width: 768px){.md\\:bottom-4{bottom:1rem;}.md\\:hidden{display:none;}.md\\:h-screen{height:100vh;}.md\\:h-full{height:100%;}.md\\:w-\\[38vh\\]{width:38vh;}.md\\:w-\\[40\\%\\]{width:40%;}.md\\:flex-row{flex-direction:row;}.md\\:flex-row-reverse{flex-direction:row-reverse;}.md\\:justify-end{justify-content:flex-end;}.md\\:space-x-8 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(2rem * var(--tw-space-x-reverse));margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)));}.md\\:space-x-1 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));}.md\\:py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.md\\:px-28{padding-left:7rem;padding-right:7rem;}.md\\:py-0{padding-top:0px;padding-bottom:0px;}.md\\:pr-10{padding-right:2.5rem;}.md\\:pt-header{padding-top:var(--header-height);}.md\\:text-base{font-size:1rem;line-height:1.5rem;}.md\\:text-sm{font-size:0.875rem;line-height:1.25rem;}.md\\:text-6xl{font-size:3.75rem;line-height:1;}.md\\:text-\\[3\\.5rem\\]{font-size:3.5rem;}.md\\:leading-none{line-height:1;}}@media (max-width: 767px){.md-max\\:h-full{height:100%;}.md-max\\:space-y-12 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(3rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(3rem * var(--tw-space-y-reverse));}.md-max\\:u-no-br br{content:""}.md-max\\:u-no-br br:after{content:" "}.md-max\\:u-no-br .br-like{display:inline}.md-max\\:u-no-br .br-like:after{content:" "}}@media (min-width: 1024px){.lg\\:absolute{position:absolute;}.lg\\:left-\\[11\\.1vw\\]{left:11.1vw;}.lg\\:right-\\[11\\.1vw\\]{right:11.1vw;}.lg\\:top-\\[var\\(--home-intro-clip-path-translate\\)\\]{top:var(--home-intro-clip-path-translate);}.lg\\:left-\\[18\\.6vw\\]{left:18.6vw;}.lg\\:bottom-6{bottom:1.5rem;}.lg\\:bottom-\\[2\\.8vw\\]{bottom:2.8vw;}.lg\\:right-\\[2\\.8vw\\]{right:2.8vw;}.lg\\:mx-40{margin-left:10rem;margin-right:10rem;}.lg\\:mt-60{margin-top:15rem;}.lg\\:ml-4{margin-left:1rem;}.lg\\:mr-4{margin-right:1rem;}.lg\\:ml-\\[1\\.4vw\\]{margin-left:1.4vw;}.lg\\:ml-\\[17\\.3vw\\]{margin-left:17.3vw;}.lg\\:mt-\\[1\\.8vw\\]{margin-top:1.8vw;}.lg\\:ml-40{margin-left:10rem;}.lg\\:mt-4{margin-top:1rem;}.lg\\:mt-\\[50vh\\]{margin-top:50vh;}.lg\\:mt-\\[17\\.5rem\\]{margin-top:17.5rem;}.lg\\:mt-0{margin-top:0px;}.lg\\:mr-\\[8\\.2vw\\]{margin-right:8.2vw;}.lg\\:mt-32{margin-top:8rem;}.lg\\:mt-6{margin-top:1.5rem;}.lg\\:mr-\\[40vw\\]{margin-right:40vw;}.lg\\:flex{display:flex;}.lg\\:hidden{display:none;}.lg\\:h-screen{height:100vh;}.lg\\:h-\\[150vh\\]{height:150vh;}.lg\\:h-\\[200vh\\]{height:200vh;}.lg\\:w-\\[38vh\\]{width:38vh;}.lg\\:w-\\[58\\%\\]{width:58%;}.lg\\:w-\\[9\\.58vw\\]{width:9.58vw;}.lg\\:w-80{width:20rem;}.lg\\:w-2\\/3{width:66.666667%;}.lg\\:w-1\\/2{width:50%;}.lg\\:w-\\[20\\.5rem\\]{width:20.5rem;}.lg\\:w-\\[29vw\\]{width:29vw;}.lg\\:w-52{width:13rem;}.lg\\:space-x-5 > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem;}.lg\\:py-8{padding-top:2rem;padding-bottom:2rem;}.lg\\:px-\\[2\\.8vw\\]{padding-left:2.8vw;padding-right:2.8vw;}.lg\\:py-\\[50vh\\]{padding-top:50vh;padding-bottom:50vh;}.lg\\:py-0{padding-top:0px;padding-bottom:0px;}.lg\\:py-\\[2\\.8vw\\]{padding-top:2.8vw;padding-bottom:2.8vw;}.lg\\:pt-header{padding-top:var(--header-height);}.lg\\:pb-10{padding-bottom:2.5rem;}.lg\\:pt-0{padding-top:0px;}.lg\\:pb-\\[2\\.8vw\\]{padding-bottom:2.8vw;}.lg\\:pl-\\[1\\.2em\\]{padding-left:1.2em;}.lg\\:text-right{text-align:right;}.lg\\:text-base{font-size:1rem;line-height:1.5rem;}.lg\\:text-xs{font-size:0.75rem;line-height:1rem;}.lg\\:text-sm{font-size:0.875rem;line-height:1.25rem;}.lg\\:text-5xl{font-size:3rem;line-height:1;}.lg\\:text-\\[8\\.33vw\\]{font-size:8.33vw;}.lg\\:text-\\[7vw\\]{font-size:7vw;}.lg\\:text-\\[1vw\\]{font-size:1vw;}.lg\\:text-\\[6vw\\]{font-size:6vw;}.lg\\:text-\\[8vw\\]{font-size:8vw;}.lg\\:text-\\[0\\.97vw\\]{font-size:0.97vw;}.lg\\:text-\\[6\\.9vw\\]{font-size:6.9vw;}.lg\\:text-\\[1\\.375rem\\]{font-size:1.375rem;}.lg\\:text-\\[5\\.7vw\\]{font-size:5.7vw;}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem;}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem;}.lg\\:text-7xl{font-size:4.5rem;line-height:1;}.lg\\:leading-none{line-height:1;}.lg\\:leading-none-fix{line-height:0.9;}.lg\\:u-screen{min-height:calc(1vh*100);min-height:calc(var(--vh)*100)}}@media (max-width: 1023px){.lg-max\\:relative{position:relative;}.lg-max\\:bottom-20{bottom:5rem;}.lg-max\\:right-\\[6\\.4vw\\]{right:6.4vw;}.lg-max\\:my-\\[10vw\\]{margin-top:10vw;margin-bottom:10vw;}.lg-max\\:mb-\\[2vw\\]{margin-bottom:2vw;}.lg-max\\:mt-\\[2vw\\]{margin-top:2vw;}.lg-max\\:mt-\\[55vw\\]{margin-top:55vw;}.lg-max\\:mt-\\[6\\.4vw\\]{margin-top:6.4vw;}.lg-max\\:mb-\\[28\\.5vw\\]{margin-bottom:28.5vw;}.lg-max\\:block{display:block;}.lg-max\\:flex{display:flex;}.lg-max\\:max-w-\\[70vw\\]{max-width:70vw;}.lg-max\\:grow{flex-grow:1;}.lg-max\\:space-y-\\[4\\.26vw\\] > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(4.26vw * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(4.26vw * var(--tw-space-y-reverse));}.lg-max\\:pt-header{padding-top:var(--header-height);}.lg-max\\:pb-8{padding-bottom:2rem;}.lg-max\\:text-center{text-align:center;}.lg-max\\:text-right{text-align:right;}.lg-max\\:text-\\[3\\.73vw\\]{font-size:3.73vw;}.lg-max\\:u-screen-safe{min-height:100svh}.lg-max\\:u-no-br br{content:""}.lg-max\\:u-no-br br:after{content:" "}.lg-max\\:u-no-br .br-like{display:inline}.lg-max\\:u-no-br .br-like:after{content:" "}}', ""]), h.locals = {}, e.exports = h
        },
        324: function(e, t, o) {
            e.exports = o.p + "fonts/krylon-regular-webfont.6b01c7d.woff2"
        },
        325: function(e, t, o) {
            e.exports = o.p + "fonts/krylon-regular-webfont.45af4d5.woff"
        },
        326: function(e, t, o) {
            e.exports = o.p + "img/arrow-down.aca7057.svg"
        },
        370: function(e, t, o) {
            "use strict";
            o(229)
        },
        371: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".c-preloader_percent-wrapper svg{width:5rem;height:6.25rem}.c-preloader-logo-part{position:absolute;overflow:hidden}.c-preloader-logo-part svg{width:100%;height:100%;transform:translateY(100%)}.c-preloader-logo-part.-daniel{width:12.375rem;height:2.5rem;top:2.625rem;left:2.625rem}.c-preloader-logo-part.-roth{width:8.8125rem;height:2.5rem;bottom:2.625rem;right:2.625rem}", ""]), r.locals = {}, e.exports = r
        },
        372: function(e, t, o) {
            "use strict";
            o(230)
        },
        373: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".c-panel[data-v-3ee6a2ee]{position:fixed;top:0px;left:0px;z-index:50;height:100%;width:100%}@media (min-width: 768px){.c-panel[data-v-3ee6a2ee]{z-index:30}}.c-panel[data-v-3ee6a2ee]{overflow-y:scroll;pointer-events:none;overscroll-behavior:contain}.c-panel.-dark[data-v-3ee6a2ee]{--bg-color:#7f685c;--text-color:#dcc1b1}.c-panel.-light[data-v-3ee6a2ee]{--bg-color:#927963;--text-color:#372d25}.c-panel_backdrop[data-v-3ee6a2ee]{position:fixed;top:0px;right:0px;bottom:0px;left:0px;z-index:0;--tw-bg-opacity:1;background-color:rgb(127 104 92 / var(--tw-bg-opacity));opacity:0;visibility:hidden;transition:all .6s ease;transition-delay:.3s}.c-panel_content[data-v-3ee6a2ee]{background:var(--bg-color);color:var(--text-color);width:100%;max-width:40rem;margin-left:auto;position:relative;--easing:cubic-bezier(0.55,0.055,0.675,0.19);--duration:.4s;--delay:0s;-webkit-clip-path:inset(0 0 0 100%);clip-path:inset(0 0 0 100%);transition:-webkit-clip-path var(--duration) var(--easing) var(--delay);transition:clip-path var(--duration) var(--easing) var(--delay);transition:clip-path var(--duration) var(--easing) var(--delay), -webkit-clip-path var(--duration) var(--easing) var(--delay)}.c-panel.is-active[data-v-3ee6a2ee]{pointer-events:auto;opacity:1}.c-panel.is-active .c-panel_backdrop[data-v-3ee6a2ee]{opacity:.6;visibility:visible;transition-delay:0s}.c-panel.is-active .c-panel_content[data-v-3ee6a2ee]{--easing:cubic-bezier(0.165,0.84,0.44,1);--duration:1s;--delay:.3s;-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}", ""]), r.locals = {}, e.exports = r
        },
        374: function(e, t, o) {
            "use strict";
            o(231)
        },
        375: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".o-field .input-tel,.o-field .input-tel__input{height:auto;min-height:unset}.o-field .input-tel__input{outline:none;box-shadow:none!important;caret-color:currentColor!important;padding:0;background:transparent;border:0;font-size:1em;font-family:degular, sans-serif;margin-left:.5em}.o-field .input-tel__input::-moz-placeholder{color:currentColor}.o-field .input-tel__input::placeholder{color:currentColor}.o-field .input-tel.has-value .input-tel__input{padding-top:0}.o-field .input-tel.has-hint .input-tel__label,.o-field .input-tel.has-value .input-tel__label{font-size:.75em;opacity:.5;transform:translateY(-120%)}.o-field .input-tel__label{color:currentColor!important;left:.6665em;top:.5em;font-family:degular, sans-serif}.o-field .vue-phone-number-input .select-country-container{width:2.6em;flex:0 0 2.6em;min-width:2.6em;max-width:2.6em}.o-field .country-selector{height:auto;min-height:auto}.o-field .country-selector__input{background-color:transparent;border-radius:0!important;color:currentColor;border:0!important;padding:0!important;height:auto;font-family:degular, sans-serif;font-size:1em;min-height:auto;text-align:right;border-color:transparent!important;transition:border-color .3s ease}.o-field .country-selector__input::-moz-placeholder{color:currentColor;font-size:0.75rem;line-height:1rem;text-transform:uppercase}.o-field .country-selector__input::placeholder{color:currentColor;font-size:0.75rem;line-height:1rem;text-transform:uppercase}.o-field .country-selector__input:focus,.o-field .country-selector__input:hover{border-color:currentColor!important}.o-field .country-selector__label,.o-field .country-selector__toggle__arrow{display:none}.o-field .country-selector__list__item{color:var(--bg-color)}.o-field .country-selector__list__item.selected,.o-field .country-selector__list__item:hover{background-color:var(--text-color)!important;color:var(--bg-color)!important}", ""]), r.locals = {}, e.exports = r
        },
        376: function(e, t, o) {
            "use strict";
            o(232)
        },
        377: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, '.o-cta{display:flex;justify-content:flex-end}.o-cta > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))}.o-cta_text{margin-top:-0.125em;font-size:3.5rem;font-weight:300;text-transform:uppercase;line-height:0.9;position:relative;padding-bottom:0.5rem}.o-cta_text:before{position:absolute;bottom:0px;left:0px;height:0.25rem;width:100%;content:"";background-color:currentColor;transform:scaleX(1);transform-origin:left;transition:transform .6s ease}.o-cta_text.-small{font-size:1.5rem;line-height:2rem;line-height:0.9;padding-bottom:0.25rem;margin-top:.5rem}.o-cta_text.-small:before{height:1px}.o-cta_text.-small+.o-cta_icon{margin-top:0px}.o-cta_icon{margin-top:0.25rem;position:relative;width:2.1875rem}.o-cta_icon-arrow{width:47%;height:19.7%}.o-cta:focus-within .o-cta_text:before,.o-cta:hover .o-cta_text:before{opacity:1;transform:scaleX(0);transform-origin:right}', ""]), r.locals = {}, e.exports = r
        },
        378: function(e, t, o) {
            "use strict";
            o(233)
        },
        379: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".c-background{position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:-1}.c-background canvas{position:absolute;top:0;left:0;width:100%;height:100%}", ""]), r.locals = {}, e.exports = r
        },
        380: function(e, t, o) {
            "use strict";
            o(234)
        },
        381: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".c-page-transition{position:fixed;top:0px;right:0px;bottom:0px;left:0px;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;z-index:90}.c-page-transition_logo-wrapper{position:relative}.c-page-transition_logo-wrapper svg{width:9.18rem;height:3.5rem}.c-page-transition_logo.-over{position:absolute;top:0px;left:0px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));z-index:10}", ""]), r.locals = {}, e.exports = r
        },
        383: function(e, t, o) {
            "use strict";
            o(235)
        },
        384: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ":root{--cc-bg:#fff;--cc-text:#5a5553;--cc-border-radius:1rem;--cc-btn-primary-bg:#5a5553;--cc-btn-primary-text:var(--cc-bg);--cc-btn-primary-hover-bg:#3f3c3b;--cc-btn-secondary-bg:var(--cc-bg);--cc-btn-secondary-text:var(--cc-text);--cc-btn-secondary-hover-bg:var(--cc-bg);--cc-btn-border-radius:1rem;--cc-toggle-bg-off:#919ea6;--cc-toggle-bg-on:var(--cc-btn-primary-bg);--cc-toggle-bg-readonly:#d5dee2;--cc-toggle-knob-bg:#fff;--cc-toggle-knob-icon-color:#ecf2fa;--cc-block-text:var(--cc-text);--cc-cookie-category-block-bg:#f0f4f7;--cc-cookie-category-block-bg-hover:#e9eff4;--cc-section-border:#f1f3f5;--cc-cookie-table-border:#e9edf2;--cc-overlay-bg:rgba(4,6,8,0.85);--cc-webkit-scrollbar-bg:#cfd5db;--cc-webkit-scrollbar-bg-hover:#9199a0}:root.is-reveal-page{--cc-bg:#252322;--cc-text:#5a5553;--cc-btn-primary-bg:#5a5553;--cc-btn-primary-text:#fff;--cc-btn-primary-hover-bg:#3f3c3b;--cc-btn-secondary-bg:var(--cc-bg);--cc-btn-secondary-text:var(--cc-text);--cc-btn-secondary-hover-bg:var(--cc-bg)}html.show--settings{overflow:hidden}#cc--main{z-index:40!important}#cm{box-shadow:none;padding-left:1.5rem;padding-right:1.5rem;padding-top:2rem;padding-bottom:2rem;right:inherit;left:2.5rem;bottom:2.5rem;max-width:28.75rem}@media (max-width: 639px){#cm{left:1.5rem;right:1.5rem;max-width:none}}.cc_div *{text-transform:uppercase!important}.cc_div .c-bn{border-radius:9999px;padding-left:1.5rem;padding-right:1.5rem;padding-top:0.625rem;padding-bottom:0.625rem;flex:inherit;font-weight:400;font-size:0.75rem;line-height:1rem;text-underline-offset:.2em}.cc_div #c-bns{flex-direction:row-reverse}.cc_div #c-bns button+button{float:none;margin-left:0;margin-right:1rem}#c-ttl{font-size:1rem}#c-txt{font-size:.75rem;line-height:1.3}#s-bl{overscroll-behavior:contain}#c-s-bn{border-radius:0;padding:0;text-decoration:underline}", ""]), r.locals = {}, e.exports = r
        },
        386: function(e, t, o) {
            "use strict";
            o(236)
        },
        387: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".c-cursor{width:0;height:0;pointer-events:none;position:fixed;top:0;left:0;z-index:999}@media(pointer:coarse){.c-cursor{display:none!important}}.c-cursor .cursor-type{display:flex;align-items:center;justify-content:center;position:absolute;width:6.4rem;height:6.4rem;margin-top:-3.2rem;margin-left:-3.2rem}.c-cursor .cursor-type__inner{display:block}.c-cursor .cursor-type__backdrop{display:block;border-radius:9999px;border:1px solid;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);position:absolute;width:100%;height:100%}.c-cursor .cursor-type__circ-text{--gap:0.625rem;position:absolute;top:0px;left:0px;margin-top:var(--gap);margin-left:var(--gap);width:calc(100% - var(--gap)*2);height:calc(100% - var(--gap)*2);-webkit-animation:rotate 12s linear infinite;animation:rotate 12s linear infinite}@-webkit-keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.c-cursor .cursor-type__text{overflow:hidden;font-size:0.875rem;line-height:1.25rem;text-transform:uppercase;letter-spacing:.14em}", ""]), r.locals = {}, e.exports = r
        },
        388: function(e, t, o) {
            "use strict";
            o(237)
        },
        389: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".c-header{color:currentColor;color:var(--header-color,currentColor);position:fixed;top:0;left:0;right:0;z-index:40;transition:opacity .6s ease,visibility .6s ease}.is-header-hidden .c-header{opacity:0;visibility:hidden}", ""]), r.locals = {}, e.exports = r
        },
        390: function(e, t, o) {
            "use strict";
            o(238)
        },
        391: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".c-header-logo{color:currentColor;color:var(--logo-color,var(--header-color,currentColor));width:9.0625rem;height:1rem}@media (max-width: 1023px){.c-header-logo{width:18vw;height:1.998vw}}@media (max-width: 767px){.c-header-logo{width:34.1vw;height:3.73vw}}.c-header-logo svg{width:100%;height:100%}", ""]), r.locals = {}, e.exports = r
        },
        392: function(e, t, o) {
            "use strict";
            o(239)
        },
        393: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, '@media (max-width: 767px){.c-nav-wrapper{position:fixed;top:0px;right:0px;bottom:0px;left:0px;z-index:40;display:flex;flex-direction:column;justify-content:space-between;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));padding-top:calc(0 - 2rem);padding-top:calc(var(--header-height, 0) - 2rem);padding-left:2.5rem;padding-right:2.5rem;padding-bottom:2.5rem;pointer-events:none}.is-menu-open .c-nav-wrapper{pointer-events:auto}}.c-nav-toggler{color:currentColor;color:var(--logo-color,var(--header-color,currentColor));position:relative;display:flex;flex-direction:column;justify-content:space-between}@media (min-width: 768px){.c-nav-toggler{display:none}}.c-nav-toggler{height:10px;width:1.5rem;cursor:pointer;z-index:50}.c-nav-toggler span{display:block;width:100%;height:1px;background-color:currentColor;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms;transform-origin:center;transform:translateZ(0)}.is-menu-open .c-nav-toggler{--line-translate:4.5px}.is-menu-open .c-nav-toggler span:first-child{transform:translate3d(0,var(--line-translate),0) rotate(45deg)}.is-menu-open .c-nav-toggler span:nth-child(2){transform:translate3d(0,calc(var(--line-translate)*-1),0) rotate(-45deg)}.c-nav-toggler:before{content:"";position:absolute;top:-1rem;right:-1rem;bottom:-1rem;left:-1rem}.c-nav-backdrop{--tw-bg-opacity:1;background-color:rgb(37 35 34 / var(--tw-bg-opacity));position:fixed;top:0px;right:0px;bottom:0px;left:0px;z-index:30;opacity:0;visibility:hidden}.c-nav{color:currentColor;color:var(--nav-color,var(--header-color,currentColor))}.is-panel-signup-active .c-nav,.is-panel-signup-leaving .c-nav{transition:color .6s ease}.is-panel-signup-active .c-nav{--nav-color:#dcc1b1}@media (max-width: 767px){.c-nav{flex-grow:1}}.c-menu{counter-reset:menu-item}@media (max-width: 767px){.c-menu{color:#fff}}.c-menu_item{font-family:"Degular";font-style:normal;font-weight:400;letter-spacing:0.04em;text-transform:uppercase;font-size:4.26vw;line-height:1.5}@media (min-width: 768px){.c-menu_item{font-size:1.4vw;line-height:1.5}}@media (min-width: 1024px){.c-menu_item{font-size:0.75rem;line-height:1rem}}.c-menu_item a{display:inline-block;counter-increment:menu-item;position:relative;vertical-align:top}@media (max-width: 767px){.c-menu_item a{padding-top:2em}.c-menu_item a:before{content:"0" counter(menu-item);font-family:Krylon, serif;font-size:2em;line-height:1;color:hsla(0,0%,85.1%,.2);position:absolute;left:50%;top:0;transform:translateX(-50%)}.a-mobile-menu_item{opacity:0;transform:translateY(30px)}}', ""]), r.locals = {}, e.exports = r
        },
        394: function(e, t, o) {
            "use strict";
            o(240)
        },
        395: function(e, t, o) {
            var r = o(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".c-footer{background:#7f685c;color:#57463e;overflow:hidden;padding:1.5rem;height:20.3125rem;position:relative;z-index:10}@media (min-width: 640px){.c-footer{height:62.5vh;padding:2rem}}.c-footer_inner{height:100%;display:flex;flex-direction:column;justify-content:space-between}.is-footer-hidden .c-footer{display:none}.c-footer-logo{color:#927769}.c-footer-logo::before{float:left;padding-top:11.627906976744187%;content:''}.c-footer-logo::after{display:block;content:'';clear:both}.c-footer-links{display:flex;justify-content:space-between;text-transform:uppercase}.c-footer-links_item{font-size:min(2rem,3vw);line-height:1;letter-spacing:0.02em}", ""]), r.locals = {}, e.exports = r
        },
        396: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            var r = function() {
                    return {
                        active: null,
                        prev: null
                    }
                },
                n = {
                    set: function(e, t) {
                        e.prev = e.active, e.active = t
                    }
                }
        },
        397: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            var r = function() {
                    return {
                        x: 0,
                        y: 0,
                        delta: 0,
                        speed: 0,
                        direction: {
                            x: 0,
                            y: 0
                        },
                        angle: 0,
                        type: "none",
                        options: {
                            theme: "light"
                        }
                    }
                },
                n = {
                    setPosition: function(e, t) {
                        e.x = t.position.x, e.y = t.position.y
                    },
                    setDirection: function(e, t) {
                        e.direction.x = t.direction.x, e.direction.y = t.direction.y
                    },
                    setSpeed: function(e, t) {
                        e.speed = t.speed
                    },
                    setAngle: function(e, t) {
                        e.angle = t.angle
                    },
                    setDelta: function(e, t) {
                        e.delta = t.delta
                    },
                    setType: function(e, t) {
                        e.type = t.type
                    },
                    setTheme: function(e, t) {
                        e.options.theme = t.theme
                    },
                    clearType: function(e, t) {
                        e.type = "none"
                    },
                    clearTheme: function(e, t) {
                        e.options.theme = "light"
                    }
                }
        },
        398: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            var r = function() {
                    return {
                        enabled: !1
                    }
                },
                n = {
                    enable: function(e) {
                        e.enabled = !0
                    },
                    disable: function(e) {
                        e.enabled = !1
                    },
                    toggle: function(e) {
                        e.enabled = !e.enabled
                    }
                }
        },
        399: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            var r = function() {
                    return {
                        active: !1
                    }
                },
                n = {
                    show: function(e) {
                        e.active = !0
                    },
                    hide: function(e) {
                        e.active = !1
                    }
                }
        },
        400: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            var r = function() {
                    return {
                        done: !1
                    }
                },
                n = {
                    setPreloaded: function(e) {
                        e.done = !0
                    }
                }
        },
        401: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            var r = function() {
                    return {
                        active: !1
                    }
                },
                n = {
                    setActive: function(e, t) {
                        e.active = t.active
                    }
                }
        },
        402: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            var r = function() {
                    return {
                        width: null,
                        height: null,
                        orientation: null
                    }
                },
                n = {
                    update: function(e, t) {
                        var o = t.width,
                            r = t.height,
                            n = t.orientation;
                        e.width = o, e.height = r, e.orientation = n
                    }
                }
        },
        403: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            var r = function() {
                    return {
                        y: 0,
                        direction: 1,
                        limit: 0,
                        progress: 0,
                        velocity: 0
                    }
                },
                n = {
                    setScroll: function(e, t) {
                        e.y = t.y, e.direction = t.direction, e.limit = t.limit, e.velocity = t.velocity, e.progress = t.progress
                    }
                }
        },
        404: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            o(14), o(27);
            var r = function() {
                    return {
                        text: ""
                    }
                },
                n = {
                    setText: function(e, t) {
                        t.text && (e.text = t.text.replace(/\s/g, " "))
                    },
                    clearText: function(e) {
                        e.text = ""
                    }
                }
        },
        405: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "state", (function() {
                return r
            })), o.d(t, "mutations", (function() {
                return n
            }));
            var r = function() {
                    return {
                        embed: null
                    }
                },
                n = {
                    setEmbed: function(e, t) {
                        e.embed = t.embed
                    },
                    clearEmbed: function(e) {
                        e.embed = null
                    }
                }
        },
        406: function(e, t, o) {
            var map = {
                "./icons.svg": 407
            };

            function r(e) {
                var t = n(e);
                return o(t)
            }

            function n(e) {
                if (!o.o(map, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return map[e]
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.resolve = n, e.exports = r, r.id = 406
        },
        407: function(e, t, o) {
            "use strict";
            o.r(t), t.default = o.p + "1e67032a04c87b6b85110804a13b29d3.svg"
        },
        41: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = .4;
            t.default = {
                computed: {
                    themeClass: function() {
                        return {
                            "text-white": "light" === this.$store.state.cursor.options.theme,
                            "text-black": "dark" === this.$store.state.cursor.options.theme
                        }
                    },
                    theme: function() {
                        return this.$store.state.cursor.options.theme
                    },
                    directionX: function() {
                        return this.$store.state.cursor.direction.x
                    },
                    directionY: function() {
                        return this.$store.state.cursor.direction.y
                    },
                    direction: function() {
                        return 1 === this.directionX && 1 === this.directionY || 1 === this.directionX && -1 === this.directionY ? 1 : -1 === this.directionX && 1 === this.directionY || -1 === this.directionX && -1 === this.directionY ? -1 : 0 === this.directionX && 0 !== this.directionY ? 1 : 0 === this.directionY && 0 !== this.directionX ? this.directionX : 0
                    }
                },
                methods: {
                    getEnterTL: function(e, t) {
                        var o = this.$store.state.cursor.angle,
                            n = !1;
                        this.$store.state.cursor.speed;
                        var l = this.$gsap.timeline({
                            paused: !0,
                            onComplete: t
                        });
                        return l.set(e, {
                            rotation: o
                        }), l.set(this.$refs.inner, {
                            rotation: -1 * o
                        }), l.addLabel("start"), l.fromTo(this.$refs.backdrop, {
                            scaleX: n ? .8 : 0,
                            scaleY: 0
                        }, {
                            scaleX: 1,
                            scaleY: n ? 1.15 : 1,
                            duration: r,
                            ease: "quart.out"
                        }, "start"), this.$refs.inner && l.from(this.$refs.inner, {
                            opacity: 0,
                            duration: .4
                        }, "start"), this.$refs.text && l.from(this.$refs.text, {
                            yPercent: 100,
                            duration: .4,
                            force3D: !0,
                            ease: "power4.out"
                        }, "start+=.2"), l.addLabel("back").to(this.$refs.backdrop, {
                            scaleX: 1,
                            scaleY: 1,
                            duration: .4,
                            ease: "cubic.inOut"
                        }, "back").to(this.$refs.backdrop, {
                            x: 0,
                            y: 0,
                            duration: .4,
                            ease: "cubic.inOut"
                        }, "back"), l.timeScale(1), l
                    },
                    getLeaveTL: function(e, t) {
                        var o = this.$gsap.timeline({
                            paused: !0,
                            onComplete: t
                        });
                        return o.addLabel("start"), o.to(this.$refs.backdrop, {
                            scale: 0,
                            opacity: 0,
                            duration: r,
                            ease: "quart.inOut"
                        }, "start"), this.$refs.inner && o.to(this.$refs.inner, {
                            opacity: 0,
                            duration: .4
                        }, "start"), o
                    },
                    down: function() {
                        if (this.$refs.backdrop) {
                            this.$gsap.killTweensOf(this.$refs.backdrop);
                            var e = this.$gsap.timeline();
                            return e.to(this.$refs.backdrop, {
                                scale: .6875,
                                x: 0,
                                duration: r,
                                ease: "cubic.inOut"
                            }), e
                        }
                    },
                    up: function() {
                        if (this.$refs.backdrop) {
                            this.$gsap.killTweensOf(this.$refs.backdrop);
                            var e = this.$gsap.timeline();
                            return e.to(this.$refs.backdrop, {
                                scale: 1,
                                x: 0,
                                duration: r,
                                ease: "quint.out"
                            }), e
                        }
                    }
                },
                mounted: function() {
                    this.$eventHub.$on("cursor:down", this.down), this.$eventHub.$on("cursor:up", this.up)
                },
                beforeDestroy: function() {
                    this.$nuxt.$off("cursor:down", this.down), this.$nuxt.$off("cursor:up", this.up)
                }
            }
        },
        413: function(e, t, o) {
            "use strict";
            o.r(t);
            o(52), o(266), o(6), o(53), o(36), o(48);
            var r = {
                    data: function() {
                        return {
                            isReady: !1,
                            isPreloaded: !1,
                            animationDone: !1,
                            resourcesReady: !0,
                            percent: 8
                        }
                    },
                    computed: {
                        percentStr: function() {
                            return this.percent.toString().padStart(2, "0")
                        }
                    },
                    watch: {
                        resourcesReady: function() {
                            this.checkReady()
                        },
                        animationDone: function() {
                            this.checkReady()
                        },
                        isReady: function() {
                            var e = this;
                            this.$gsap.to(this.logoParts, {
                                duration: 1,
                                yPercent: -100,
                                ease: "power4.in"
                            }), this.$gsap.to(this.$refs.shape, {
                                scale: 0,
                                duration: 1,
                                ease: "power4.in"
                            }), this.$gsap.timeline({
                                onComplete: function() {
                                    document.documentElement.classList.add("is-ready"), e.isPreloaded = !0
                                }
                            }).fromTo(this.$el, {
                                clipPath: "inset(0% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 100%)",
                                duration: 1,
                                delay: .5,
                                ease: "circ.inOut"
                            }).fromTo(document.querySelector("main"), {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 1,
                                ease: "linear"
                            }, "-=0.5").add((function() {
                                e.$eventHub.$emit("preloader:done")
                            }), ">-0.5")
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.logoParts = [this.$refs["logo-part-daniel"], this.$refs["logo-part-roth"]], this.logoPartsParents = this.logoParts.map((function(e) {
                            return e.parentNode
                        }));
                        var t = this.$gsap.timeline({
                                onComplete: function() {
                                    setTimeout((function() {
                                        e.animationDone = !0, e.$gsap.to(e.$refs.numbers.querySelectorAll("span"), {
                                            opacity: 0,
                                            duration: 1
                                        })
                                    }), 500)
                                }
                            }),
                            o = this.$gsap.timeline();
                        o.to(this.logoParts, {
                            delay: .5,
                            duration: 1,
                            y: 0,
                            stagger: .2,
                            ease: "power4.out"
                        }), o.to(this.logoParts, {
                            duration: 1,
                            yPercent: -100,
                            ease: "power4.in"
                        }), o.set(this.logoParts, {
                            yPercent: 100
                        }), window.innerWidth < 768 ? o.set(this.logoPartsParents, {
                            css: {
                                translateX: "-50%",
                                left: "50%",
                                top: function(e) {
                                    return 1 === e ? "calc(50% + (6.25rem / 2) + 2rem)" : "auto"
                                },
                                bottom: function(e) {
                                    return 0 === e ? "calc(50% + (6.25rem / 2) + 2rem)" : "auto"
                                },
                                right: "inherit"
                            }
                        }) : o.set(this.logoPartsParents, {
                            css: {
                                translateY: "-50%",
                                top: "50%",
                                left: function(e) {
                                    return 1 === e ? "calc(50% + (6.25rem / 2) + 2rem)" : "auto"
                                },
                                right: function(e) {
                                    return 0 === e ? "calc(50% + (6.25rem / 2) + 2rem)" : "auto"
                                },
                                bottom: "inherit"
                            }
                        }), o.to(this.logoParts, {
                            delay: .5,
                            duration: 1,
                            yPercent: 0,
                            ease: "power4.out"
                        });
                        for (var r = 0; r < 3; r++) {
                            var n = (r + 1) * (100 / 3) + Math.round(5 * Math.random());
                            n = Math.min(Math.floor(n), 100), t.set(this, {
                                percent: n,
                                duration: .5,
                                delay: 1.3333333333333333 * (r + 1)
                            }, "start")
                        }
                    },
                    methods: {
                        beforeEnter: function(e) {},
                        enter: function(e, t) {
                            var o = e.querySelectorAll("span");
                            this.$gsap.fromTo(o, {
                                yPercent: 100
                            }, {
                                yPercent: 0,
                                duration: 1,
                                stagger: .1,
                                ease: "circ.inOut",
                                onComplete: t
                            })
                        },
                        leave: function(e, t) {
                            var o = e.querySelectorAll("span");
                            this.$gsap.fromTo(o, {
                                yPercent: 0
                            }, {
                                yPercent: -100,
                                duration: 1,
                                stagger: .1,
                                ease: "circ.inOut",
                                onComplete: t
                            })
                        },
                        checkReady: function() {
                            this.animationDone && this.resourcesReady && this.onReady()
                        },
                        onResourcesReady: function() {
                            this.resourcesReady = !0
                        },
                        onReady: function() {
                            var e = this,
                                t = 0;
                            100 !== this.percent && (this.percent = 100, t = 1300), setTimeout((function() {
                                e.isReady = !0, e.$store.commit("preloader/setPreloaded")
                            }), t), this.$emit("ready")
                        }
                    }
                },
                n = (o(370), o(2)),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return e.isPreloaded ? e._e() : t("div", {
                        staticClass: "fixed inset-0 bg-beige text-black z-50 will-change-[clip-path] u-clip-path-fix"
                    }, [t("div", {
                        staticClass: "c-preloader-logo-part -daniel"
                    }, [t("svg-icon", {
                        ref: "logo-part-daniel",
                        attrs: {
                            name: "logo-daniel"
                        }
                    })], 1), e._v(" "), t("div", {
                        staticClass: "c-preloader-logo-part -roth"
                    }, [t("svg-icon", {
                        ref: "logo-part-roth",
                        attrs: {
                            name: "logo-roth"
                        }
                    })], 1), e._v(" "), t("div", {
                        staticClass: "c-preloader_percent-wrapper || absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    }, [t("svg-icon", {
                        ref: "shape",
                        attrs: {
                            name: "shape"
                        }
                    }), e._v(" "), t("div", {
                        ref: "numbers",
                        staticClass: "absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1em] overflow-hidden font-medium leading-tight text-[1.375rem] text-center"
                    }, [t("transition", {
                        attrs: {
                            css: !1
                        },
                        on: {
                            beforeEnter: e.beforeEnter,
                            enter: e.enter,
                            leave: e.leave
                        }
                    }, [t("div", {
                        key: e.percent,
                        staticClass: "absolute bottom-0 right-0 w-full"
                    }, e._l(e.percentStr, (function(o, r) {
                        return t("span", {
                            key: "".concat(r, "_").concat(o),
                            staticClass: "inline-block"
                        }, [e._v(e._s(o))])
                    })), 0)])], 1)], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        414: function(e, t, o) {
            "use strict";
            o.r(t);
            o(6), o(53), o(38), o(37), o(111);
            var r = {
                    methods: {
                        onHide: function() {
                            this.$store.commit("panelSignup/hide")
                        },
                        onSubmit: function(e) {
                            var t = e.formData;
                            return fetch("/.netlify/functions/signup", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: new URLSearchParams(t).toString()
                            })
                        }
                    }
                },
                n = o(2),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("PanelWrapper", {
                        attrs: {
                            name: "notify-me-next-launch",
                            "on-submit": e.onSubmit,
                            "on-hide": e.onHide,
                            "use-message": !1,
                            "store-mutation-in": "panelSignup/show",
                            "store-mutation-out": "panelSignup/hide",
                            theme: "dark"
                        },
                        scopedSlots: e._u([{
                            key: "submitted",
                            fn: function() {
                                return [t("p", [t("span", {
                                    staticClass: "font-semibold uppercase text-xl leading-none"
                                }, [e._v("\n        Thank you very much for having"), t("br"), e._v("submitted your interest about"), t("br"), e._v("the Tourbillon Souscription"), t("br"), e._v("DANIEL ROTH.\n      ")]), e._v(" "), t("small", {
                                    staticClass: "block mt-6 uppercase text-base leading-tight"
                                }, [e._v("Our distribution partners will get back"), t("br"), e._v("to you if you are selected to purchase"), t("br"), e._v("the DANIEL ROTH Tourbillon Souscription.")])])]
                            },
                            proxy: !0
                        }, {
                            key: "title",
                            fn: function() {
                                return [t("div", [e._v("Notify me"), t("br"), e._v("for next launch")])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                PanelWrapper: o(267).default
            })
        },
        415: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = o(251),
                n = {
                    components: {
                        VuePhoneNumberInput: o.n(r).a
                    },
                    props: {
                        required: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            value: "",
                            isValid: !1
                        }
                    },
                    computed: {
                        showErrorMark: function() {
                            return this.value && !this.isValid
                        },
                        showCheckMark: function() {
                            return this.value && this.isValid
                        }
                    },
                    methods: {
                        onUpdate: function(e) {
                            var t = e.isValid;
                            this.isValid = t, console.log("event", e), this.$emit("update", e)
                        }
                    }
                },
                l = (o(374), o(2)),
                component = Object(l.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "flex space-x-2"
                    }, [t("VuePhoneNumberInput", {
                        staticClass: "flex-grow",
                        attrs: {
                            required: e.required,
                            "no-flags": !0,
                            translations: {
                                countrySelectorLabel: "Code",
                                phoneNumberLabel: "",
                                example: "e.g."
                            }
                        },
                        on: {
                            update: e.onUpdate
                        },
                        model: {
                            value: e.value,
                            callback: function(t) {
                                e.value = t
                            },
                            expression: "value"
                        }
                    }), e._v(" "), e.showErrorMark ? t("svg-icon", {
                        staticClass: "w-4 h-4",
                        attrs: {
                            name: "exclamation-circle"
                        }
                    }) : e._e(), e._v(" "), e.showCheckMark ? t("svg-icon", {
                        staticClass: "w-4 h-4",
                        attrs: {
                            name: "check-circle"
                        }
                    }) : e._e()], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        416: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    props: {
                        textSize: {
                            type: String,
                            default: "base"
                        }
                    },
                    data: function() {
                        return {
                            isFocused: !1,
                            isHovered: !1
                        }
                    },
                    beforeDestroy: function() {
                        this.removeEvents()
                    },
                    mounted: function() {
                        this.addEvents()
                    },
                    methods: {
                        addEvents: function() {
                            this.$el.addEventListener("mouseenter", this.onMouseEnter), this.$el.addEventListener("mouseleave", this.onMouseLeave)
                        },
                        removeEvents: function() {
                            this.$el.removeEventListener("mouseenter", this.onMouseEnter), this.$el.removeEventListener("mouseleave", this.onMouseLeave)
                        },
                        onMouseEnter: function() {
                            this.isHovered = !0, this.animate()
                        },
                        onMouseLeave: function() {
                            this.isHovered = !1
                        },
                        onFocus: function() {
                            this.isHovered || this.animate()
                        },
                        animate: function() {
                            this.$gsap.timeline().to(this.$refs.arrow, {
                                xPercent: 70,
                                opacity: 0,
                                duration: .4,
                                ease: "power1.in"
                            }).set(this.$refs.arrow, {
                                xPercent: -70
                            }).to(this.$refs.arrow, {
                                xPercent: 0,
                                opacity: 1,
                                duration: 1,
                                ease: "power4.out"
                            })
                        }
                    }
                },
                n = (o(376), o(2)),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("button", {
                        staticClass: "o-cta",
                        on: {
                            focus: e.onFocus
                        }
                    }, [t("span", {
                        staticClass: "o-cta_text",
                        class: {
                            "-small": "small" === e.textSize
                        }
                    }, [e._t("default")], 2), e._v(" "), t("div", {
                        staticClass: "o-cta_icon"
                    }, [t("div", {
                        staticClass: "aspect-w-5 aspect-h-6"
                    }, [t("svg-icon", {
                        ref: "shape",
                        staticClass: "absolute top-0 left-0 w-full h-full",
                        attrs: {
                            name: "shape"
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "flex items-center justify-center"
                    }, [t("svg-icon", {
                        ref: "arrow",
                        staticClass: "o-cta_icon-arrow",
                        attrs: {
                            name: "arrow-right"
                        }
                    })], 1)], 1)])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        417: function(e, t, o) {
            "use strict";
            o.r(t);
            o(33), o(24), o(21), o(6), o(42), o(15), o(43);
            var r = o(8),
                n = o(62),
                l = o(81);

            function c(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }
            var d = {
                    data: function() {
                        return {
                            current: null,
                            progress: 0,
                            shouldRun: !1
                        }
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(t) {
                                Object(r.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, Object(l.b)({
                        active: function(e) {
                            return e.background.active
                        }
                    })),
                    watch: {
                        active: function(e) {
                            this.changeColor(e)
                        }
                    },
                    destroyed: function() {
                        n.a.remove(this.rafId)
                    },
                    mounted: function() {
                        this.setup(), this.changeColor(this.active)
                    },
                    methods: {
                        setup: function() {
                            this.ctx = this.$refs.canvas.getContext("2d", {
                                alpha: !1
                            }), this.ctx.imageSmoothingEnabled = !0, this.ctx.imageSmoothingQuality = "high", this.rafId = n.a.add(this.draw, 0)
                        },
                        changeColor: function(e) {
                            var t = this;
                            if (e && this.current !== e)
                                if (this.current) {
                                    var o = this.$gsap.utils.interpolate(this.current, e);
                                    this.activeTween && this.activeTween.kill(), this.activeTween = this.$gsap.fromTo(this, {
                                        progress: 0
                                    }, {
                                        progress: 1,
                                        duration: 1.2,
                                        ease: "power2.inOut",
                                        onUpdate: function() {
                                            t.current = o(t.progress), t.shouldRun = !0
                                        }
                                    })
                                } else this.current = e, this.shouldRun = !0
                        },
                        draw: function() {
                            this.shouldRun && (this.ctx.fillStyle = this.current, this.ctx.fillRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height), this.shouldRun = !1)
                        }
                    }
                },
                h = d,
                m = (o(378), o(2)),
                component = Object(m.a)(h, (function() {
                    var e = this._self._c;
                    return e("div", {
                        staticClass: "c-background"
                    }, [e("canvas", {
                        ref: "canvas",
                        attrs: {
                            width: "1",
                            height: "1"
                        }
                    })])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        418: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    name: "PageTransition",
                    beforeDestroy: function() {
                        this.$nuxt.PageTransition = void 0
                    },
                    mounted: function() {
                        this.$nuxt.PageTransition = this, window.pt = this
                    },
                    methods: { in: function(e) {
                            var t = this;
                            this.$gsap.killTweensOf(this.$el), this.$eventHub.$emit("transition:in:before");
                            var o = this.$gsap.timeline({
                                onComplete: function() {
                                    t.$eventHub.$emit("transition:in:complete")
                                }
                            });
                            return o.fromTo(this.$el, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                duration: 1.2,
                                ease: "power2.inOut"
                            }), o
                        },
                        out: function() {
                            var e = this;
                            this.$gsap.killTweensOf(this.$el), this.$eventHub.$emit("transition:out:before");
                            var t = this.$gsap.timeline({
                                onComplete: function() {
                                    e.$eventHub.$emit("transition:out:complete")
                                }
                            });
                            return t.to(this.$el, {
                                autoAlpha: 0,
                                duration: 2,
                                ease: "power2.inOut"
                            }), t
                        }
                    }
                },
                n = (o(380), o(2)),
                component = Object(n.a)(r, (function() {
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this._self._c;
                    return e("div", {
                        staticClass: "c-page-transition"
                    }, [e("div", {
                        staticClass: "c-page-transition_logo-wrapper"
                    })])
                }], !1, null, null, null);
            t.default = component.exports
        },
        419: function(e, t, o) {
            "use strict";
            o.r(t);
            o(67), o(92);
            var r = {
                    data: function() {
                        return {
                            settingsShown: !1
                        }
                    },
                    watch: {
                        settingsShown: function(e) {
                            e ? this.$eventHub.$emit("scrollDestroy") : this.$eventHub.$emit("scroll:setup")
                        }
                    },
                    mounted: function() {
                        var e = this;
                        o(382);
                        var t = window.initCookieConsent();
                        t.run({
                            current_lang: "en",
                            autoclear_cookies: !0,
                            page_scripts: !0,
                            revision: 1,
                            onFirstAction: function(e, t) {},
                            onAccept: function(o) {
                                t.allowedCategory("analytics") && e.$gtm && e.$gtm.init("G-5WHJS8GH2D")
                            },
                            onChange: function(e, t) {},
                            languages: {
                                en: {
                                    consent_modal: {
                                        title: "Cookie Policy",
                                        description: "We use our own cookies, as well as those of third parties, for individual as well as repeated sessions, in order to make the navigation of our website easy and safe for our users.<br><br>In turn, we use cookies to measure and obtain statistical data about the navigation of the users. You can configure and accept the use of the cookies, and modify your consent options, at any time. You can read more information about our Cookie Policy.",
                                        primary_btn: {
                                            text: "Accept cookie",
                                            role: "accept_all"
                                        },
                                        secondary_btn: {
                                            text: "Reject all",
                                            role: "accept_necessary"
                                        }
                                    },
                                    settings_modal: {
                                        title: "Cookie preferences",
                                        save_settings_btn: "Save settings",
                                        accept_all_btn: "Accept all",
                                        reject_all_btn: "Reject all",
                                        close_btn_label: "Close",
                                        cookie_table_headers: [{
                                            col1: "Name"
                                        }, {
                                            col2: "Domain"
                                        }, {
                                            col3: "Expiration"
                                        }, {
                                            col4: "Description"
                                        }],
                                        blocks: [{
                                            title: "Cookie usage 📢",
                                            description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                                        }, {
                                            title: "Strictly necessary cookies",
                                            description: "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
                                            toggle: {
                                                value: "necessary",
                                                enabled: !0,
                                                readonly: !0
                                            }
                                        }, {
                                            title: "Performance and Analytics cookies",
                                            description: "These cookies allow the website to remember the choices you have made in the past",
                                            toggle: {
                                                value: "analytics",
                                                enabled: !1,
                                                readonly: !1
                                            },
                                            cookie_table: [{
                                                col1: "^_ga",
                                                col2: "google.com",
                                                col3: "2 years",
                                                col4: "description ...",
                                                is_regex: !0
                                            }, {
                                                col1: "_gid",
                                                col2: "google.com",
                                                col3: "1 day",
                                                col4: "description ..."
                                            }]
                                        }, {
                                            title: "Advertisement and Targeting cookies",
                                            description: "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
                                            toggle: {
                                                value: "targeting",
                                                enabled: !1,
                                                readonly: !1
                                            }
                                        }, {
                                            title: "More information",
                                            description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.'
                                        }]
                                    }
                                }
                            }
                        }), this.$eventHub.$on("document:classChange", (function(t) {
                            t.includes("show--settings") ? e.settingsShown = !0 : e.settingsShown = !1
                        }))
                    }
                },
                n = (o(383), o(2)),
                component = Object(n.a)(r, (function() {
                    return (0, this._self._c)("div")
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        420: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = o(8),
                n = (o(385), o(62)),
                l = o(258),
                c = o(259),
                d = o(260),
                h = o(261),
                m = o(262),
                f = o(263),
                v = o(264),
                w = function(e, t, o) {
                    return (1 - o) * e + o * t
                },
                y = {
                    name: "CustomCursor",
                    components: {
                        CursorRotate: l.default,
                        CursorPlay: c.default,
                        CursorPause: d.default,
                        CursorClose: h.default,
                        CursorMore: m.default,
                        CursorNext: f.default,
                        CursorPrev: v.default
                    },
                    data: function() {
                        return {
                            x: 0,
                            y: 0,
                            lastPosition: {
                                x: 0,
                                y: 0
                            },
                            time: 0,
                            show: !1,
                            inertia: .15
                        }
                    },
                    computed: {
                        theme: function() {
                            return this.$store.state.cursor.options.theme
                        },
                        mouseX: function() {
                            return this.$store.state.cursor.x
                        },
                        mouseY: function() {
                            return this.$store.state.cursor.y
                        },
                        isRotate: function() {
                            return "rotate" === this.$store.state.cursor.type
                        },
                        isPlay: function() {
                            return "play" === this.$store.state.cursor.type
                        },
                        isPause: function() {
                            return "pause" === this.$store.state.cursor.type
                        },
                        isClose: function() {
                            return "close" === this.$store.state.cursor.type
                        },
                        isMore: function() {
                            return "more" === this.$store.state.cursor.type
                        },
                        isNext: function() {
                            return "next" === this.$store.state.cursor.type
                        },
                        isPrev: function() {
                            return "prev" === this.$store.state.cursor.type
                        }
                    },
                    watch: {
                        x: function(e) {
                            this.translateX(e)
                        },
                        y: function(e) {
                            this.translateY(e)
                        }
                    },
                    beforeDestroy: function() {
                        this.removeEvents()
                    },
                    mounted: function() {
                        var e = this;
                        this.translateX = this.$gsap.utils.pipe(this.$gsap.utils.snap(1), this.$gsap.quickSetter(this.$refs.cursor, "x", "px")), this.translateY = this.$gsap.utils.pipe(this.$gsap.utils.snap(1), this.$gsap.quickSetter(this.$refs.cursor, "y", "px")), this.$nextTick((function() {
                            e.time = performance.now(), e.addEvents()
                        }))
                    },
                    methods: {
                        onEnter: function() {
                            this.show = !0
                        },
                        onLeave: function() {
                            this.show = !1
                        },
                        onDown: function() {
                            this.$eventHub.$emit("cursor:down")
                        },
                        onUp: function() {
                            this.$eventHub.$emit("cursor:up")
                        },
                        onMove: function(e) {
                            var t = {
                                x: e.clientX,
                                y: e.clientY
                            };
                            this.$store.commit("cursor/setPosition", {
                                position: t
                            })
                        },
                        update: function() {
                            var e = performance.now() - this.time,
                                t = {
                                    x: 0,
                                    y: 0
                                };
                            this.mouseX > this.lastPosition.x ? t.x = 1 : this.mouseX < this.lastPosition.x && (t.x = -1), this.mouseY > this.lastPosition.y ? t.y = 1 : this.mouseY < this.lastPosition.y && (t.y = -1), this.$store.commit("cursor/setDirection", {
                                direction: t
                            });
                            var o = this.mouseX - this.lastPosition.x,
                                r = this.mouseY - this.lastPosition.y,
                                n = Math.atan(r / o),
                                l = n && 180 * n / Math.PI || 0;
                            this.$store.commit("cursor/setAngle", {
                                angle: l
                            });
                            var c, d, h, m, f = (c = this.mouseX, d = this.mouseY, h = this.lastPosition.x, m = this.lastPosition.y, Math.hypot(h - c, m - d));
                            this.$store.commit("cursor/setDelta", {
                                delta: f
                            });
                            var v = f / e;
                            this.$store.commit("cursor/setSpeed", {
                                speed: v
                            }), this.x = w(this.x, this.mouseX, this.inertia), this.y = w(this.y, this.mouseY, this.inertia), this.lastPosition = {
                                x: this.mouseX,
                                y: this.mouseY
                            }, this.time = performance.now()
                        },
                        addEvents: function() {
                            this.rafId = n.a.add(this.update, 0), this.$root.$el.addEventListener("mousedown", this.onDown), this.$root.$el.addEventListener("mouseup", this.onUp), this.$root.$el.addEventListener("mousemove", this.onMove)
                        },
                        removeEvents: function() {
                            n.a.remove(this.rafId), this.$nuxt.$off("app:resize", this.resize), this.$root.$el.removeEventListener("mousedown", this.onDown), this.$root.$el.removeEventListener("mousemove", this.onMove), this.$root.$el.removeEventListener("mouseup", this.onUp), this.$root.$el.removeEventListener("mouseenter", this.onEnter), this.$root.$el.removeEventListener("mouseleave", this.onLeave)
                        }
                    }
                },
                x = (o(386), o(2)),
                component = Object(x.a)(y, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        ref: "cursor",
                        class: Object(r.a)({
                            "c-cursor": !0
                        }, "-theme-".concat(e.theme), e.theme)
                    }, [t("div", {
                        staticClass: "c-cursor_inner"
                    }, [e.isPlay ? t("CursorPlay") : e._e(), e._v(" "), e.isPause ? t("CursorPause") : e._e(), e._v(" "), e.isRotate ? t("CursorRotate") : e._e(), e._v(" "), e.isClose ? t("CursorClose") : e._e(), e._v(" "), e.isMore ? t("CursorMore") : e._e(), e._v(" "), e.isNext ? t("CursorNext") : e._e(), e._v(" "), e.isPrev ? t("CursorPrev") : e._e()], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        421: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    computed: {
                        isHome: function() {
                            return "/" === this.$route.path
                        }
                    }
                },
                n = (o(390), o(2)),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "c-header-logo"
                    }, [e.isHome ? t("h1", {
                        staticClass: "sr-only"
                    }, [e._v("\n    Daniel Roth\n  ")]) : e._e(), e._v(" "), t("NuxtLink", {
                        attrs: {
                            to: "/"
                        }
                    }, [t("svg-icon", {
                        attrs: {
                            name: "logo",
                            alt: "Daniel Roth - Logo"
                        }
                    })], 1)], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        422: function(e, t, o) {
            "use strict";
            o.r(t);
            o(26), o(6), o(14), o(27);
            var r = {
                    data: function() {
                        return {
                            isOpen: !1,
                            colorKeys: ["headerColor", "infosColor", "logoColor", "navColor"],
                            headerColorCache: null,
                            links: [{
                                name: "Tourbillon Souscription",
                                url: "/"
                            }, {
                                name: "History",
                                url: "/history"
                            }, {
                                name: "Historical Models",
                                url: "/historical-models"
                            }, {
                                name: "Care",
                                url: "/care"
                            }]
                        }
                    },
                    computed: {
                        isHome: function() {
                            return "/" === this.$route.path
                        }
                    },
                    mounted: function() {
                        this.$eventHub.$on("transition:in:complete", this.reset)
                    },
                    methods: {
                        toggle: function() {
                            var e = this;
                            this.isOpen = !this.isOpen, this.$nextTick((function() {
                                document.documentElement.classList.toggle("is-menu-open"), e.isOpen ? e.show() : e.hide()
                            }))
                        },
                        reset: function() {
                            this.isOpen = !1, document.documentElement.classList.remove("is-menu-open"), this.$eventHub.$emit("scrollUnlock");
                            var e = document.querySelectorAll(".a-mobile-menu_item, .c-nav-backdrop");
                            this.$gsap.set(e, {
                                clearProps: "all"
                            }), this.$gsap.killTweensOf(e)
                        },
                        show: function() {
                            var e = this;
                            this.$gsap.timeline({
                                onStart: function() {
                                    e.$eventHub.$emit("scrollLock"), e.saveHeaderColors(), e.$gsap.effects.updateColors(document.getElementById("header"), {
                                        colors: {
                                            headerColor: "#5A5553"
                                        }
                                    })
                                }
                            }).set(".a-mobile-menu_item", {
                                y: 30,
                                autoAlpha: 0
                            }).to(".a-mobile-menu_item", {
                                y: 0,
                                autoAlpha: 1,
                                stagger: .1,
                                duration: .8,
                                ease: "power3.out"
                            }).to(".c-nav-backdrop", {
                                autoAlpha: 1,
                                duration: .8,
                                ease: "power3.out"
                            }, 0)
                        },
                        saveHeaderColors: function() {
                            var e = document.getElementById("header"),
                                t = getComputedStyle(e);
                            this.headerColorCache = this.colorKeys.reduce((function(e, o) {
                                var r = o.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
                                return e[o] = t.getPropertyValue("--".concat(r)), e
                            }), {})
                        },
                        resetHeaderColors: function() {
                            this.$gsap.effects.updateColors(document.documentElement, {
                                colors: this.headerColorCache
                            })
                        },
                        hide: function() {
                            var e = this;
                            this.$gsap.timeline({
                                onStart: function() {
                                    e.resetHeaderColors(), e.$eventHub.$emit("scrollUnlock")
                                },
                                onComplete: function() {
                                    e.reset()
                                }
                            }).to(".a-mobile-menu_item", {
                                autoAlpha: 0,
                                duration: .4,
                                ease: "power2.linear"
                            }).to(".c-nav-backdrop", {
                                autoAlpha: 0,
                                duration: .4,
                                ease: "power2.linear"
                            })
                        }
                    }
                },
                n = (o(392), o(2)),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", [t("div", {
                        staticClass: "c-nav-toggler",
                        on: {
                            click: e.toggle
                        }
                    }, [t("span", {
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }), e._v(" "), t("span", {
                        attrs: {
                            "aria-hidden": "true"
                        }
                    })]), e._v(" "), t("div", {
                        staticClass: "c-nav-wrapper"
                    }, [t("nav", {
                        staticClass: "c-nav"
                    }, [t("ul", {
                        staticClass: "c-menu || flex flex-col justify-center md-max:h-full md:flex-row md:justify-end md-max:space-y-12 md:space-x-8"
                    }, e._l(e.links, (function(link, o) {
                        return t("li", {
                            key: link.url,
                            staticClass: "c-menu_item || a-mobile-menu_item",
                            style: {
                                "--item-index": o
                            }
                        }, [t("NuxtLink", {
                            attrs: {
                                to: link.url,
                                custom: ""
                            },
                            scopedSlots: e._u([{
                                key: "default",
                                fn: function(o) {
                                    var r = o.href,
                                        n = o.navigate,
                                        l = o.isActive,
                                        c = o.isExactActive;
                                    return [t("a", {
                                        class: {
                                            "o-link-underline": !0, "-is-active": l && "/" !== r || c
                                        },
                                        attrs: {
                                            href: r
                                        },
                                        on: {
                                            click: n
                                        }
                                    }, [e._v("\n              " + e._s(link.name) + "\n            ")])]
                                }
                            }], null, !0)
                        })], 1)
                    })), 0)]), e._v(" "), t("div", {
                        staticClass: "md:hidden"
                    }, [t("ButtonCTASimple", {
                        staticClass: "a-mobile-menu_item z-20",
                        nativeOn: {
                            click: function(t) {
                                return e.$store.commit("panelSignup/show")
                            }
                        }
                    }, [e._v("\n        Register to order\n      ")])], 1)]), e._v(" "), t("div", {
                        staticClass: "c-nav-backdrop"
                    })])
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                ButtonCTASimple: o(268).default
            })
        },
        423: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = o(8),
                n = {
                    computed: {
                        theme: function() {
                            var e, t, o;
                            return null === (e = this.$store.state.route) || void 0 === e || null === (t = e.active) || void 0 === t || null === (o = t.meta) || void 0 === o ? void 0 : o.themeFooter
                        }
                    },
                    beforeDestroy: function() {
                        this.destroy()
                    },
                    mounted: function() {
                        var e = this;
                        this.$gsap.matchMedia().add("(min-width: 769px)", (function() {
                            return e.setupScrollTrigger(), e.destroy
                        }))
                    },
                    methods: {
                        setupScrollTrigger: function() {
                            this.tl = this.$gsap.timeline({
                                scrollTrigger: {
                                    clearOnPageChange: !1,
                                    trigger: this.$el,
                                    start: "top bottom",
                                    end: "bottom bottom",
                                    scrub: !0
                                }
                            }), this.tl.from(this.$refs.inner, {
                                y: "-100%",
                                ease: "linear"
                            })
                        },
                        destroy: function() {
                            this.tl && this.tl.kill()
                        }
                    }
                },
                l = (o(394), o(2)),
                component = Object(l.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("footer", {
                        directives: [{
                            name: "watch-height",
                            rawName: "v-watch-height",
                            value: "footer",
                            expression: "'footer'"
                        }],
                        staticClass: "c-footer",
                        class: Object(r.a)({}, "-theme-".concat(e.theme), e.theme)
                    }, [t("div", {
                        ref: "inner",
                        staticClass: "c-footer_inner"
                    }, [t("div", {
                        staticClass: "c-footer-logo || relative"
                    }, [t("svg-icon", {
                        staticClass: "absolute inset-0 object-cover w-full h-full",
                        attrs: {
                            name: "logo-footer"
                        }
                    })], 1), e._v(" "), t("ul", {
                        staticClass: "c-footer-links"
                    }, [t("li", {
                        staticClass: "c-footer-links_item"
                    }, [t("NuxtLink", {
                        staticClass: "o-link-underline",
                        attrs: {
                            to: "/privacy-policy"
                        }
                    }, [e._v("\n          Privacy Policy\n        ")])], 1), e._v(" "), e._m(0), e._v(" "), t("li", {
                        staticClass: "c-footer-links_item"
                    }, [t("NuxtLink", {
                        staticClass: "o-link-underline",
                        attrs: {
                            to: "/terms-of-use"
                        }
                    }, [e._v("\n          Terms Of Use\n        ")])], 1)])])])
                }), [function() {
                    var e = this._self._c;
                    return e("li", {
                        staticClass: "c-footer-links_item"
                    }, [e("a", {
                        staticClass: "o-link-underline",
                        attrs: {
                            href: "https://www.instagram.com/danielrothofficial/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [this._v("\n          Instagram\n        ")])])
                }], !1, null, null, null);
            t.default = component.exports
        },
        424: function(e, t, o) {
            "use strict";
            o.r(t);
            o(388);
            var r = o(2),
                component = Object(r.a)({}, (function() {
                    var e = this._self._c;
                    return e("header", {
                        directives: [{
                            name: "watch-height",
                            rawName: "v-watch-height",
                            value: "header",
                            expression: "'header'"
                        }],
                        staticClass: "c-header || flex items-center justify-between px-6 py-8 lg:px-10 lg:py-8",
                        attrs: {
                            id: "header"
                        }
                    }, [e("div", {
                        staticClass: "relative z-40"
                    }, [e("HeaderLogo")], 1), this._v(" "), e("div", {
                        staticClass: "text-center lg:text-right"
                    }, [e("HeaderNav")], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                HeaderLogo: o(421).default,
                HeaderNav: o(422).default
            })
        }
    },
    [
        [272, 73, 9, 74]
    ]
]);