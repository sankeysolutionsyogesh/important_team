(window.webpackJsonp = window.webpackJsonp || []).push([
    [6, 12, 14, 20, 36, 59, 60], {
        429: function(t, e, r) {
            var content = r(438);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(29).default)("806ed6ae", content, !0, {
                sourceMap: !1
            })
        },
        432: function(t, e, r) {
            "use strict";
            r.r(e);
            r(143);
            var o = {
                    props: {
                        delay: {
                            type: Number,
                            default: 0
                        }
                    }
                },
                n = r(2),
                component = Object(n.a)(o, (function() {
                    var t = this;
                    return (0, t._self._c)("div", {
                        staticClass: "a-image a-item",
                        attrs: {
                            "data-delay": t.delay
                        }
                    }, [t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        437: function(t, e, r) {
            "use strict";
            r(429)
        },
        438: function(t, e, r) {
            var o = r(28)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".a-parallax-bg{height:100%;overflow:hidden}.a-parallax-bg_inner{height:120%}@media (max-width: 767px){.a-parallax-bg_inner{height:100%!important}}", ""]), o.locals = {}, t.exports = o
        },
        439: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    props: {
                        height: {
                            type: String,
                            default: "120%"
                        },
                        useScale: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    destroyed: function() {
                        this.destroy()
                    },
                    mounted: function() {
                        var t = this;
                        this.mm = this.$gsap.matchMedia(), this.mm.add("(min-width: 769px)", (function() {
                            return t.init(),
                                function() {}
                        }))
                    },
                    methods: {
                        init: function() {
                            var t = this.$refs.inner.offsetHeight - this.$el.offsetHeight;
                            this.$gsap.fromTo(this.$refs.inner, {
                                y: -t,
                                scale: 1
                            }, {
                                scrollTrigger: {
                                    trigger: this.$el,
                                    scrub: !0
                                },
                                y: 0,
                                scale: this.useScale ? 1.1 : 1,
                                force3D: !0,
                                ease: "none"
                            }), this.st = this.$ScrollTrigger.create({
                                trigger: this.$el,
                                start: "top-=".concat(t, "px bottom"),
                                end: "bottom+=".concat(t, "px top"),
                                toggleClass: "u-in-view"
                            })
                        },
                        destroy: function() {
                            this.st && this.st.kill(), this.mm
                        }
                    }
                },
                n = (r(437), r(2)),
                component = Object(n.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "a-parallax-bg"
                    }, [e("div", {
                        ref: "inner",
                        staticClass: "a-parallax-bg_inner",
                        style: {
                            height: "".concat(t.height)
                        }
                    }, [t._t("default")], 2)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        440: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    props: {
                        tag: {
                            type: String,
                            default: "div"
                        }
                    }
                },
                n = r(2),
                component = Object(n.a)(o, (function() {
                    var t = this;
                    return (0, t._self._c)(t.tag, {
                        tag: "component",
                        staticClass: "uppercase text-[1.11vw] leading-tight"
                    }, [t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        453: function(t, e, r) {
            var content = r(478);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(29).default)("15b7ca51", content, !0, {
                sourceMap: !1
            })
        },
        455: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    beforeDestroy: function() {
                        this.removeEvents()
                    },
                    mounted: function() {
                        this.addEvents()
                    },
                    methods: {
                        animate: function() {
                            this.$gsap.killTweensOf(this.$refs.icon), this.$gsap.timeline().to(this.$refs.arrow, {
                                yPercent: 100,
                                opacity: 0,
                                duration: .4,
                                ease: "power1.in"
                            }).set(this.$refs.arrow, {
                                yPercent: -100
                            }).to(this.$refs.arrow, {
                                yPercent: 0,
                                opacity: 1,
                                duration: 1,
                                ease: "power4.out"
                            })
                        },
                        addEvents: function() {
                            this.$el.addEventListener("mouseenter", this.animate)
                        },
                        removeEvents: function() {
                            this.$el.removeEventListener("mouseenter", this.animate)
                        },
                        getAnimation: function() {
                            var t = this.$gsap.timeline(),
                                e = [this.$refs.shape, this.$refs.arrow];
                            return this.$gsap.set(e, {
                                autoAlpha: 0,
                                y: 100
                            }), t.to(e, {
                                autoAlpha: 1,
                                y: 0,
                                duration: 2,
                                stagger: .12,
                                ease: "expo.out"
                            })
                        }
                    }
                },
                n = r(2),
                component = Object(n.a)(o, (function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "absolute"
                    }, [t("div", {
                        staticClass: "aspect-w-5 aspect-h-6"
                    }, [t("svg-icon", {
                        ref: "shape",
                        staticClass: "absolute top-0 left-0 w-full h-full",
                        attrs: {
                            name: "shape"
                        }
                    }), this._v(" "), t("div", {
                        staticClass: "flex items-center justify-center"
                    }, [t("svg-icon", {
                        ref: "arrow",
                        staticClass: "w-[24%] h-[38.7%]",
                        attrs: {
                            name: "arrow-down"
                        }
                    })], 1)], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        475: function(t, e, r) {
            var content = r(514);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(29).default)("bc754b4e", content, !0, {
                sourceMap: !1
            })
        },
        477: function(t, e, r) {
            "use strict";
            r(453)
        },
        478: function(t, e, r) {
            var o = r(28)((function(i) {
                return i[1]
            }));
            o.push([t.i, "@media (max-width: 767px){.o-panel-split_main{overflow:hidden;background:var(--bg-color)}}", ""]), o.locals = {}, t.exports = o
        },
        490: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    props: {
                        tag: {
                            type: String,
                            default: "div"
                        }
                    }
                },
                n = r(2),
                component = Object(n.a)(o, (function() {
                    var t = this;
                    return (0, t._self._c)(t.tag, {
                        tag: "component",
                        staticClass: "font-display leading-tight uppercase tracking-basic"
                    }, [t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        491: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = r(8);
            r(6), r(15), r(33), r(24), r(21), r(42), r(43);

            function n(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function l(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? n(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : n(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var c = {
                    props: {
                        colorClass: {
                            type: String,
                            default: "text-black"
                        },
                        bgColor: {
                            type: String,
                            default: "#DBDBDB"
                        },
                        bgColorBefore: {
                            type: String,
                            default: "#DBDBDB"
                        },
                        reversed: {
                            type: Boolean,
                            default: !1
                        },
                        headerColors: {
                            type: Object,
                            default: function() {
                                return {
                                    before: {
                                        headerColor: "#5A5553"
                                    },
                                    after: {
                                        headerColor: "#252322"
                                    },
                                    active: {
                                        headerColor: "#ffffff",
                                        navColor: "#5A5553"
                                    }
                                }
                            }
                        },
                        image: {
                            type: String,
                            default: ""
                        }
                    },
                    destroyed: function() {
                        this.ST && this.ST.kill(), this.tl && this.tl.kill(), this.colorTween && this.colorTween.kill(), this.tweens && this.tweens.forEach((function(t) {
                            return t.kill()
                        }))
                    },
                    mounted: function() {
                        var t = this;
                        this.setupColors(), window.requestAnimationFrame((function() {
                            t.setupTl()
                        }))
                    },
                    methods: {
                        setupColors: function() {
                            var t = this;
                            this.colorTween = this.$ScrollTrigger.create({
                                trigger: this.$refs.contentWrapper,
                                start: "top-=50 bottom",
                                toggleActions: "restart none none reverse",
                                onEnter: function() {
                                    t.$store.commit("background/set", t.bgColor), t.$emit("color-change")
                                },
                                onEnterBack: function() {},
                                onLeave: function() {},
                                onLeaveBack: function() {
                                    t.$store.commit("background/set", t.bgColorBefore)
                                }
                            }), this.ST = this.$ScrollTrigger.create({
                                trigger: this.$refs.imgWrapper,
                                start: "top 5%",
                                end: "bottom 5%",
                                onEnter: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: l({}, t.headerColors.active)
                                    })
                                },
                                onEnterBack: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: l({}, t.headerColors.active)
                                    })
                                },
                                onLeave: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: t.headerColors.after.headerColor
                                        }
                                    })
                                },
                                onLeaveBack: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: t.headerColors.before.headerColor
                                        }
                                    })
                                }
                            })
                        },
                        setupTl: function() {
                            this.tl = this.$gsap.timeline({
                                scrollTrigger: {
                                    toggleActions: "play none none reset",
                                    trigger: this.$refs.contentWrapper,
                                    start: "top bottom"
                                }
                            }), this.tl.fadeRight(this.$el.querySelectorAll(".a-fade"), {
                                stagger: .1
                            }).fadeImage(this.$el.querySelectorAll(".a-image"), "<"), this.tweens = [];
                            var t = this.$refs.image;
                            t && this.tweens.push(this.$gsap.effects.scaleIn(t, {
                                scrollTrigger: {
                                    toggleActions: "play none none reset",
                                    trigger: this.$refs.imgWrapper,
                                    start: "top bottom"
                                }
                            }))
                        }
                    }
                },
                f = (r(477), r(2)),
                component = Object(f.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", [e("div", {
                        ref: "wrapper",
                        staticClass: "relative z-10 md:h-screen lg:h-[150vh]"
                    }, [e("div", {
                        ref: "container",
                        staticClass: "flex md:h-full",
                        class: {
                            "flex-col-reverse md:flex-row-reverse": t.reversed, "flex-col md:flex-row": !t.reversed
                        }
                    }, [e("div", {
                        ref: "imgWrapper",
                        staticClass: "shrink-0 w-full md:w-[40%] lg:w-[58%] h-screen md:h-full z-0"
                    }, [e("AnimationParallaxBg", {
                        attrs: {
                            height: "110%"
                        }
                    }, [e("nuxt-img", {
                        ref: "image",
                        staticClass: "w-full h-full object-cover will-change-transform",
                        attrs: {
                            src: t.image,
                            format: "webp",
                            quality: "80",
                            alt: "",
                            role: "presentation"
                        }
                    })], 1)], 1), t._v(" "), e("div", {
                        staticClass: "o-panel-split_main h-full grow",
                        class: Object(o.a)({
                            "md:pr-10": !t.reversed
                        }, t.colorClass, t.colorClass),
                        style: {
                            "--bg-color": t.bgColor
                        }
                    }, [e("div", {
                        staticClass: "flex flex-col justify-center h-full px-6 py-32 md:px-28 md:py-0"
                    }, [e("div", {
                        ref: "contentWrapper"
                    }, [t._t("default")], 2)])])])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AnimationParallaxBg: r(439).default
            })
        },
        513: function(t, e, r) {
            "use strict";
            r(475)
        },
        514: function(t, e, r) {
            var o = r(28)((function(i) {
                return i[1]
            }));
            o.push([t.i, "body{background-color:#252322}.c-hp1-title{font-size:13.5vw;line-height:1;margin-bottom:4rem}.c-hp1-title_2{text-align:right;padding:.2em 0}.c-hp1-title_3 span{display:block;text-indent:3em}@media (min-width: 1024px){.c-hp1-title{font-size:10.5vw;margin-bottom:0}.c-hp1-title_1{text-indent:.7em}.c-hp1-title_2{text-indent:2.7em;text-align:left;padding:0}.c-hp1-title_3{margin-top:0}.c-hp1-title_3 span{display:inline;text-indent:0}}.c-hp1-middle{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:10vw}.c-hp1-middle_1{font-size:3.2vw}@media (min-width: 1024px){.c-hp1-middle{display:block}.c-hp1-middle_1{margin-left:56vw;font-size:1vw}}.c-hp1-image{width:13.125rem}.c-hp1-image::before{float:left;padding-top:134.76190476190476%;content:''}.c-hp1-image::after{display:block;content:'';clear:both}.c-hp1-image>*{position:absolute;top:0px;right:0px;bottom:0px;left:0px;height:100%;width:100%}@media (min-width: 1024px){.c-hp1-image{position:absolute;right:0px;top:-6.1vw}.c-hp1-bottom{margin-left:32vw;margin-right:8vw}}@media(min-aspect-ratio:16/11){.c-hp1-bottom{padding-right:8em}}.c-hp1-sub{font-size:4.2vw}@media (min-width: 1024px){.c-hp1-sub{font-size:1.11vw}}.c-hp1-corner{left:0;width:8.5vw;bottom:2rem}@media (min-width: 1024px){.c-hp1-corner{bottom:2.8vw;left:2.8vw;width:3.47vw}}", ""]), o.locals = {}, t.exports = o
        },
        550: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    mounted: function() {
                        var t = this;
                        this.setupTl(), this.$loader.onPreloaderDone((function() {
                            t.tl.play()
                        }))
                    },
                    methods: {
                        setupTl: function() {
                            this.tl = this.$gsap.timeline({
                                paused: !0
                            }), this.tl.fadeLeft(this.$refs.t1.$el.querySelectorAll(".a-fade:not(.-right)"), {
                                stagger: .2
                            }).fadeRight(this.$refs.t1.$el.querySelectorAll(".a-fade.-right"), "<+0.1").fadeRight(this.$refs.bottom.querySelectorAll(".a-fade"), "<+0.5").fadeImage(this.$el.querySelectorAll(".a-image"), "<").add(this.$refs.arrow.getAnimation(), "<"), this.tl.pause(0), this.$store.commit("background/set", "#252322"), this.$gsap.effects.updateColors(document.getElementById("header"), {
                                colors: {
                                    headerColor: "#5A5553"
                                },
                                duration: 0
                            })
                        },
                        animateArrow: function() {
                            this.$refs.arrow.animate()
                        }
                    }
                },
                n = (r(513), r(2)),
                component = Object(n.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "text-[#5A5553]"
                    }, [e("div", {
                        staticClass: "relative z-10 lg:h-screen w-screen lg:flex flex-col justify-between px-6 pb-14 lg:pt-header lg:px-10 lg:pb-10"
                    }, [e("div", {
                        staticClass: "lg-max:u-screen-safe lg-max:flex flex-col justify-between lg-max:relative lg-max:pt-header lg-max:pb-8"
                    }, [e("TextTitle", {
                        ref: "t1",
                        staticClass: "c-hp1-title",
                        attrs: {
                            tag: "h1"
                        }
                    }, [e("AnimationFade", {
                        staticClass: "c-hp1-title_1"
                    }, [t._v("\n          Daniel Roth\n        ")]), t._v(" "), e("AnimationFade", {
                        staticClass: "c-hp1-title_2 || -right"
                    }, [t._v("\n          La montre\n        ")]), t._v(" "), e("AnimationFade", {
                        staticClass: "c-hp1-title_3"
                    }, [t._v("\n          Objet d'Art\n        ")])], 1), t._v(" "), e("div", {
                        staticClass: "c-hp1-middle relative"
                    }, [e("AnimationImage", {
                        staticClass: "c-hp1-middle_2 || c-hp1-image"
                    }, [e("AnimationParallaxBg", {
                        attrs: {
                            "use-scale": !1
                        }
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            fetchpriority: "high",
                            src: "/assets/history/intro-portrait.png",
                            format: "webp",
                            quality: "80",
                            width: "420",
                            height: "566",
                            alt: "Daniel Roth - Portrait"
                        }
                    })], 1)], 1)], 1), t._v(" "), e("ArrowCorner", {
                        ref: "arrow",
                        staticClass: "c-hp1-corner"
                    })], 1), t._v(" "), e("div", {
                        ref: "bottom",
                        staticClass: "c-hp1-bottom pt-6 lg:pt-0"
                    }, [e("TextSub", {
                        staticClass: "c-hp1-sub",
                        attrs: {
                            tag: "p"
                        }
                    }, [e("AnimationFade", [t._v("\n          Established in 1988 by the talented watchmaker of the same name, DANIEL ROTH is a pioneer of independent watchmaking. It illuminated the path for future generations of watchmakers by promoting high complications and traditional craftsmanship.\n        ")])], 1)], 1)])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AnimationFade: r(428).default,
                TextTitle: r(490).default,
                AnimationParallaxBg: r(439).default,
                AnimationImage: r(432).default,
                ArrowCorner: r(455).default,
                TextSub: r(440).default
            })
        },
        557: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = r(2),
                component = Object(o.a)({}, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("HistoryPanelSplit", {
                        staticClass: "lg:mt-60",
                        attrs: {
                            "color-class": "text-black",
                            "bg-color": "#DBDBDB",
                            "bg-color-before": "#252322",
                            "header-colors": {
                                before: {
                                    headerColor: "#5A5553"
                                },
                                after: {
                                    headerColor: "#252322"
                                },
                                active: {
                                    headerColor: "#ffffff",
                                    navColor: "#5A5553"
                                }
                            },
                            image: "/assets/history/manufacturer-bg.png",
                            reversed: !1
                        },
                        on: {
                            "color-change": function(e) {
                                return t.$emit("color-change")
                            }
                        }
                    }, [e("div", {
                        staticClass: "w-80"
                    }, [e("div", {
                        staticClass: "mb-3"
                    }, [e("AnimationFade", [t._v("1988")])], 1), t._v(" "), e("h2", {
                        staticClass: "mb-3 uppercase text-2xl leading-none font-semibold tracking-basic"
                    }, [e("span", {
                        staticClass: "sr-only"
                    }, [t._v("1988 - ")]), t._v(" "), e("AnimationFade", [t._v("A personal vision culminating in the making of a tourbillon")])], 1), t._v(" "), e("p", {
                        staticClass: "mb-8 uppercase text-sm tracking-basic"
                    }, [e("AnimationFade", [t._v("\n        It all started in 1988, when Mr. Roth began his journey as an independant watchmaker and founded DANIEL ROTH."), e("br"), t._v("At first, he focused on his ever-favorite complication the Tourbillon that he chose to house in a unique double-ellipse case. This case shape would quickly become the design signature of the brand."), e("br"), t._v('\n        The same year Mr. Roth benefited from a 25-piece "souscription" order from Asprey of London, which allowed him to immediately put DANIEL ROTH on the front scene of independant watchmaking.\n      ')])], 1), t._v(" "), e("figure", [e("div", {
                        staticClass: "aspect-w-8 aspect-h-9"
                    }, [e("AnimationImage", {
                        staticClass: "h-full",
                        attrs: {
                            delay: .3
                        }
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            src: "/assets/history/manufacturer-watch.png",
                            format: "webp",
                            quality: "80",
                            width: "646",
                            height: "720",
                            alt: "1988 TOURBILLON REFERENCE 2187/C187"
                        }
                    })], 1)], 1), t._v(" "), e("figcaption", {
                        staticClass: "mt-3 text-right uppercase text-xs tracking-basic font-semibold"
                    }, [e("AnimationFade", [t._v("\n          1988 Tourbillon reference 2187/C187\n        ")])], 1)])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AnimationFade: r(428).default,
                AnimationImage: r(432).default,
                HistoryPanelSplit: r(491).default
            })
        },
        594: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    methods: {
                        animateP1Arrow: function() {
                            var t, e;
                            null === (t = this.$refs) || void 0 === t || null === (e = t.hp1) || void 0 === e || e.animateArrow()
                        }
                    }
                },
                n = r(2),
                component = Object(n.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("HistoryPanel1", {
                        ref: "hp1"
                    }), t._v(" "), e("HistoryPanelVideo"), t._v(" "), e("HistoryPanel2", {
                        on: {
                            "color-change": t.animateP1Arrow
                        }
                    })], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                HistoryPanel1: r(550).default,
                HistoryPanelVideo: r(595).default,
                HistoryPanel2: r(557).default
            })
        }
    }
]);