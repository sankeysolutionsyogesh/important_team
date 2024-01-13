(window.webpackJsonp = window.webpackJsonp || []).push([
    [67, 50, 53], {
        434: function(e, t, n) {
            "use strict";
            t.a = {
                name: "custom",
                css: !1,
                beforeEnter: function(e) {
                    this.$loader && this.$loader.clear()
                },
                afterEnter: function(e) {
                    this.$loader && this.$loader.load(), this.$nuxt.PageTransition && this.$nuxt.PageTransition.out()
                },
                leave: function(e, t) {
                    this.$store.commit("cursor/clearType"), this.$nuxt.PageTransition && this.$nuxt.PageTransition.in(e).then((function() {
                        t()
                    }))
                }
            }
        },
        487: function(e, t, n) {
            "use strict";
            n.r(t);
            n(6), n(53), n(38), n(37), n(111);
            var r = {
                    mounted: function() {
                        var e = this;
                        this.$loader.onPreloaderDone((function() {
                            e.$refs.panel.setInview(!0)
                        }))
                    },
                    methods: {
                        onSubmit: function(e) {
                            var t = e.formData;
                            return fetch("/.netlify/functions/care", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: new URLSearchParams(t).toString()
                            })
                        }
                    }
                },
                o = n(2),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("PanelWrapper", {
                        ref: "panel",
                        attrs: {
                            name: "care",
                            active: !0,
                            interactive: !1,
                            "use-backdrop": !1,
                            "use-private-details-acceptance": !1,
                            "message-placeholder": "Please specify your watch reference, serial number and the reason of the repair.",
                            "on-submit": e.onSubmit,
                            theme: "dark"
                        },
                        scopedSlots: e._u([{
                            key: "submitted",
                            fn: function() {
                                return [t("p", [t("span", {
                                    staticClass: "font-semibold uppercase text-xl leading-none"
                                }, [e._v("\n        Thank you very much for having"), t("br"), e._v("contacted us for the repair of"), t("br"), e._v("your DANIEL ROTH watch.\n      ")]), e._v(" "), t("small", {
                                    staticClass: "block mt-6 uppercase text-base leading-tight"
                                }, [e._v("Our Team will get back to you shortly.")])])]
                            },
                            proxy: !0
                        }, {
                            key: "title",
                            fn: function() {
                                return [t("h1", [e._v("Care")])]
                            },
                            proxy: !0
                        }, {
                            key: "description",
                            fn: function() {
                                return [t("span", {
                                    staticClass: "opacity-70"
                                }, [e._v("Please contact us by submitting the form below to request a service for your DANIEL ROTH watch.")])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                PanelWrapper: n(267).default
            })
        },
        540: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                    mounted: function() {
                        var e = window.innerWidth > 820 ? "#ffffff" : "#DCC1B1";
                        this.$gsap.effects.updateColors(document.documentElement, {
                            colors: {
                                logoColor: e,
                                navColor: "#DCC1B1"
                            }
                        }), this.$store.commit("background/set", "#7F685C")
                    }
                },
                o = n(2),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {}, [t("div", {
                        staticClass: "h-screen relative lg:mr-[40vw]"
                    }, [t("div", {
                        staticClass: "absolute inset-0 z-10 bg-[#7F685C] mix-blend-multiply"
                    }), e._v(" "), t("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            src: "/assets/care/bg.jpeg",
                            format: "webp",
                            quality: "70",
                            alt: "",
                            role: "presentation",
                            width: "2000",
                            height: "2712"
                        }
                    })], 1), e._v(" "), t("PanelCare")], 1)
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                PanelCare: n(487).default
            })
        },
        601: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                    name: "CarePage",
                    transition: n(434).a,
                    meta: {
                        showFooter: !1
                    },
                    head: function() {
                        return {
                            title: "Daniel Roth - Care",
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: "Please contact us to request a service for your DANIEL ROTH watch."
                            }]
                        }
                    }
                },
                o = n(2),
                component = Object(o.a)(r, (function() {
                    return (0, this._self._c)("PageCare")
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                PageCare: n(540).default
            })
        }
    }
]);