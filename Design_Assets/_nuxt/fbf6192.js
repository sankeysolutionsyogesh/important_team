(window.webpackJsonp = window.webpackJsonp || []).push([
    [70], {
        434: function(n, t, e) {
            "use strict";
            t.a = {
                name: "custom",
                css: !1,
                beforeEnter: function(n) {
                    this.$loader && this.$loader.clear()
                },
                afterEnter: function(n) {
                    this.$loader && this.$loader.load(), this.$nuxt.PageTransition && this.$nuxt.PageTransition.out()
                },
                leave: function(n, t) {
                    this.$store.commit("cursor/clearType"), this.$nuxt.PageTransition && this.$nuxt.PageTransition.in(n).then((function() {
                        t()
                    }))
                }
            }
        },
        606: function(n, t, e) {
            "use strict";
            e.r(t);
            var o = {
                    name: "IndexPage",
                    transition: e(434).a
                },
                r = e(2),
                component = Object(r.a)(o, (function() {
                    return (0, this._self._c)("PageHome")
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                PageHome: e(598).default
            })
        }
    }
]);