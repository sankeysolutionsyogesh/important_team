(window.webpackJsonp = window.webpackJsonp || []).push([
    [69], {
        434: function(t, n, e) {
            "use strict";
            n.a = {
                name: "custom",
                css: !1,
                beforeEnter: function(t) {
                    this.$loader && this.$loader.clear()
                },
                afterEnter: function(t) {
                    this.$loader && this.$loader.load(), this.$nuxt.PageTransition && this.$nuxt.PageTransition.out()
                },
                leave: function(t, n) {
                    this.$store.commit("cursor/clearType"), this.$nuxt.PageTransition && this.$nuxt.PageTransition.in(t).then((function() {
                        n()
                    }))
                }
            }
        },
        603: function(t, n, e) {
            "use strict";
            e.r(n);
            var o = {
                    name: "HistoryPage",
                    transition: e(434).a,
                    head: function() {
                        return {
                            title: "Daniel Roth - History",
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "Established in 1988 by the talented watchmaker of the same name, Daniel Roth is a pioneer of independent watchmaking. It illuminated the path for future generations of watchmakers by promoting high complications and traditional craftsmanship."
                            }]
                        }
                    }
                },
                r = e(2),
                component = Object(r.a)(o, (function() {
                    return (0, this._self._c)("PageHistory")
                }), [], !1, null, null, null);
            n.default = component.exports;
            installComponents(component, {
                PageHistory: e(594).default
            })
        }
    }
]);