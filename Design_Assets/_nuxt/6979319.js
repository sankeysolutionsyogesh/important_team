(window.webpackJsonp = window.webpackJsonp || []).push([
    [68, 51], {
        434: function(t, e, n) {
            "use strict";
            e.a = {
                name: "custom",
                css: !1,
                beforeEnter: function(t) {
                    this.$loader && this.$loader.clear()
                },
                afterEnter: function(t) {
                    this.$loader && this.$loader.load(), this.$nuxt.PageTransition && this.$nuxt.PageTransition.out()
                },
                leave: function(t, e) {
                    this.$store.commit("cursor/clearType"), this.$nuxt.PageTransition && this.$nuxt.PageTransition.in(t).then((function() {
                        e()
                    }))
                }
            }
        },
        461: function(t, e, n) {
            var content = n(496);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(29).default)("31ba1f8d", content, !0, {
                sourceMap: !1
            })
        },
        495: function(t, e, n) {
            "use strict";
            n(461)
        },
        496: function(t, e, n) {
            var o = n(28)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".c-hm-page-title{transition:opacity .6s ease,visibility .6s ease}.is-header-hidden .c-hm-page-title{opacity:0;visibility:hidden}", ""]), o.locals = {}, t.exports = o
        },
        541: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = {
                    transition: n(434).a,
                    mounted: function() {
                        this.$gsap.effects.updateColors(document.documentElement, {
                            colors: {
                                headerColor: "#252322"
                            }
                        }), this.$store.commit("background/set", "#DFDFDF")
                    }
                },
                l = (n(495), n(2)),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "bg-beige text-black h-svh flex flex-col pt-header px-6 lg:px-10 pb-8 relative z-10"
                    }, [t._m(0), t._v(" "), e("HistoricalModels")], 1)
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "relative z-0"
                    }, [e("h1", {
                        staticClass: "c-hm-page-title font-display text-[8vw] md:text-6xl tracking-basic leading-none uppercase md-max:u-no-br"
                    }, [t._v("\n      Historical"), e("span", {
                        staticClass: "br-like"
                    }), t._v("Models\n    ")])])
                }], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                HistoricalModels: n(538).default
            })
        },
        602: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = {
                    name: "HistoricalModelsPage",
                    transition: n(434).a,
                    head: function() {
                        return {
                            title: "Daniel Roth - Historical Models",
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "Established in 1988 by the talented watchmaker of the same name, Daniel Roth is a pioneer of independent watchmaking. It illuminated the path for future generations of watchmakers by promoting high complications and traditional craftsmanship."
                            }]
                        }
                    }
                },
                l = n(2),
                component = Object(l.a)(o, (function() {
                    return (0, this._self._c)("PageHistoricalModels")
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                PageHistoricalModels: n(541).default
            })
        }
    }
]);