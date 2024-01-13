(window.webpackJsonp = window.webpackJsonp || []).push([
    [7, 13, 14, 20, 41, 48], {
        429: function(t, e, n) {
            var content = n(438);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(29).default)("806ed6ae", content, !0, {
                sourceMap: !1
            })
        },
        437: function(t, e, n) {
            "use strict";
            n(429)
        },
        438: function(t, e, n) {
            var r = n(28)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".a-parallax-bg{height:100%;overflow:hidden}.a-parallax-bg_inner{height:120%}@media (max-width: 767px){.a-parallax-bg_inner{height:100%!important}}", ""]), r.locals = {}, t.exports = r
        },
        439: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
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
                l = (n(437), n(2)),
                component = Object(l.a)(r, (function() {
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
        455: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
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
                l = n(2),
                component = Object(l.a)(r, (function() {
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
        459: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(13),
                l = (n(70), n(143), n(265), n(6), n(33), n(52), n(266), n(53), n(15), n(180)),
                o = {
                    mixins: [{
                        props: {
                            path: {
                                type: String,
                                default: ""
                            },
                            filenameRoot: {
                                type: String,
                                default: ""
                            },
                            extension: {
                                type: String,
                                default: ".webp"
                            },
                            totalFrames: {
                                type: Number,
                                default: 0
                            },
                            cacheId: {
                                type: String,
                                default: "",
                                required: !0
                            },
                            useResponsive: {
                                type: Boolean,
                                default: !0
                            }
                        },
                        beforeDestroy: function() {
                            this.destroy()
                        },
                        mounted: function() {
                            this.setup()
                        },
                        data: function() {
                            return {
                                frame: {
                                    current: 0
                                }
                            }
                        },
                        methods: {
                            computeBounds: function() {},
                            onReady: function() {},
                            onDestroy: function() {},
                            setImagesCached: function() {
                                this.$cache.set(this.cacheId, {
                                    images: this.images
                                })
                            },
                            getImagesCached: function() {
                                var t = this.$cache.get(this.cacheId);
                                return !!t && (this.images = t.images, !0)
                            },
                            prepareImages: function() {
                                var t = this;
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    var n, r, o, c, h, i, f, image;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                for (n = "", t.useResponsive && (r = {
                                                        sm: 0,
                                                        md: 768,
                                                        lg: 1024
                                                    }, o = window.innerWidth, (c = Object.keys(r).reverse().find((function(t) {
                                                        return o >= r[t]
                                                    }))) && (n = l.a ? "".concat(c, "_").concat(l.a, "/") : "".concat(c, "/"))), h = [], i = 0; i < t.totalFrames; i++) f = i.toString().padStart(3, "0"), (image = new Image).src = "".concat(t.path, "output/").concat(n).concat(t.filenameRoot).concat(f).concat(t.extension), h.push(image);
                                                return t.images = h, e.next = 7, new Promise((function(e) {
                                                    var n = 0;
                                                    t.images.forEach((function(image, r) {
                                                        image.onload = function() {
                                                            0 === r && t.render(), ++n === h.length && e()
                                                        }
                                                    }))
                                                }));
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            setupCanvas: function() {
                                var canvas = this.$refs.canvas,
                                    t = canvas.getContext("2d"),
                                    e = window.devicePixelRatio || 1,
                                    n = canvas.clientWidth * e,
                                    r = canvas.clientHeight * e;
                                canvas.width = n, canvas.height = r, this.canvas = canvas, this.context = t
                            },
                            render: function() {
                                if (this.images && this.images[this.frame.current]) {
                                    var t = this.canvas.width,
                                        e = this.canvas.height,
                                        n = this.context,
                                        image = this.images[this.frame.current],
                                        r = image.width,
                                        l = image.height,
                                        o = t / r,
                                        c = e / l,
                                        h = Math.min(o, c),
                                        f = (t - r * h) / 2,
                                        m = (e - l * h) / 2;
                                    n.clearRect(0, 0, t, e), n.drawImage(image, 0, 0, r, l, f, m, r * h, l * h)
                                }
                            },
                            setup: function() {
                                var t = this;
                                return Object(r.a)(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t.setupCanvas(), e.next = 3, t.prepareImages();
                                            case 3:
                                                t.render(), t.onReady();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            destroy: function() {
                                this.images = null, this.onDestroy()
                            }
                        }
                    }],
                    props: {
                        triggerSelector: {
                            type: String,
                            required: !0
                        },
                        offset: {
                            type: String,
                            default: ""
                        },
                        start: {
                            type: String,
                            default: "top top"
                        },
                        end: {
                            type: String,
                            default: "bottom bottom"
                        }
                    },
                    methods: {
                        onReady: function() {
                            this.tl = this.$gsap.timeline({
                                defaults: {
                                    duration: .5
                                },
                                scrollTrigger: {
                                    scrub: 1
                                }
                            }), this.tl.to(this.frame, {
                                current: this.totalFrames - 1,
                                snap: "current",
                                ease: "linear",
                                onUpdate: this.render,
                                scrollTrigger: {
                                    trigger: this.triggerSelector,
                                    scrub: 1,
                                    start: this.start + this.offset,
                                    end: this.end
                                }
                            })
                        },
                        onDestroy: function() {
                            this.$gsap.killTweensOf(this.frame), this.tl && this.tl.kill()
                        }
                    }
                },
                c = n(2),
                component = Object(c.a)(o, (function() {
                    return (0, this._self._c)("canvas", {
                        ref: "canvas"
                    })
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        479: function(t, e, n) {
            var content = n(518);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(29).default)("60d52c6a", content, !0, {
                sourceMap: !1
            })
        },
        492: function(t, e, n) {
            "use strict";
            n.r(e);
            n(143);
            var r = {
                    props: {
                        speed: {
                            type: Number,
                            default: 1
                        },
                        scrub: {
                            type: [Number, Boolean],
                            default: !0
                        }
                    },
                    destroyed: function() {
                        this.destroy()
                    },
                    mounted: function() {
                        var t = this;
                        this.mm = this.$gsap.matchMedia(), this.mm.add("(min-width: 769px)", (function() {
                            return t.setup(),
                                function() {}
                        }))
                    },
                    methods: {
                        getAmount: function() {
                            var t = this.$el,
                                e = parseFloat(t.dataset.speed) / 10,
                                n = t.getBoundingClientRect().top,
                                r = (n + t.offsetHeight - n) / 2 + n;
                            return (n - window.innerHeight / 2 - r) * -e
                        },
                        getScrub: function() {
                            var t = this.$el,
                                e = !0;
                            return t.dataset.scrub && (e = parseFloat(t.dataset.scrub)), isNaN(e) && (e = !0), e
                        },
                        setup: function() {
                            var t = this.$el,
                                e = t.offsetHeight,
                                n = this.getAmount(),
                                r = this.getScrub();
                            this.tween = this.$gsap.fromTo(t, {
                                y: n
                            }, {
                                y: -n,
                                ease: "none",
                                force3D: !0,
                                scrollTrigger: {
                                    trigger: t,
                                    start: "center bottom+=".concat(e),
                                    end: "center top-=".concat(e),
                                    invalidateOnRefresh: !0,
                                    scrub: r
                                }
                            })
                        },
                        destroy: function() {
                            this.$gsap.killTweensOf(this.$el), this.tween && this.tween.kill(), this.mm && this.mm.revert()
                        }
                    }
                },
                l = n(2),
                component = Object(l.a)(r, (function() {
                    var t = this;
                    return (0, t._self._c)("div", {
                        staticClass: "a-parallax",
                        attrs: {
                            "data-speed": t.speed,
                            "data-scrub": t.scrub
                        }
                    }, [t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        517: function(t, e, n) {
            "use strict";
            n(479)
        },
        518: function(t, e, n) {
            var r = n(28)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".c-homep1-corner{left:6.4vw;width:8.5vw;bottom:2rem}@media (min-width: 1024px){.c-homep1-corner{bottom:2.8vw;left:2.8vw;width:3.47vw}}", ""]), r.locals = {}, t.exports = r
        },
        551: function(t, e, n) {
            "use strict";
            n.r(e);
            n(52);
            var r = n(109),
                l = r.a.TITLE_FADE_DURATION,
                o = r.a.TITLE_FADE_AMOUNT,
                c = r.a.TITLE_FADE_AMOUNT_REVERSE,
                h = r.a.LINE_TRANSLATE_DURATION,
                f = r.a.LINE_TRANSLATE_AMOUNT,
                m = r.a.LINE_TRANSLATE_STAGGER,
                d = {
                    data: function() {
                        return {
                            scrollEnd: "+=250%"
                        }
                    },
                    destroyed: function() {
                        this.tl && this.tl.kill()
                    },
                    beforeDestroy: function() {
                        this.removeEvents()
                    },
                    beforeMount: function() {},
                    mounted: function() {
                        var t = this;
                        this.$gsap.effects.updateColors(document.documentElement, {
                            colors: {
                                headerColor: "#5A5553"
                            }
                        }), window.requestAnimationFrame((function() {
                            t.setupTl(), t.addEvents()
                        }))
                    },
                    methods: {
                        getSequenceTransforms: function() {
                            var t = this.$refs.title,
                                e = this.$refs.sequenceWrapper;
                            this.$gsap.set(e, {
                                scale: 1,
                                y: 0,
                                transformOrigin: "center bottom"
                            });
                            var n = t.getBoundingClientRect(),
                                r = e.getBoundingClientRect(),
                                l = this.$el.getBoundingClientRect(),
                                o = window.innerWidth,
                                c = window.innerHeight,
                                h = this.$store.state.scroll.y,
                                f = .18 * n.height,
                                m = n.bottom;
                            h > l.height && (m = m - l.bottom + c);
                            var d = o / (.85 * r.width),
                                v = r.height * d,
                                w = (.91 * v - (c - m + f)) / v * 100,
                                _ = Math.max(0, w * d),
                                x = this.$device.isMobile,
                                C = x ? 1240 : 900,
                                y = (100 - C / 1440 * 100) / 2,
                                T = (o - 2 * y * o / 100) / (C / (x ? 640 : 380)),
                                A = (100 - T / c * 100) / 2,
                                S = "".concat(A, "% ").concat(y, "%"),
                                $ = A * c / 100 * -1,
                                E = x ? 1 : .546,
                                R = r.height * E;
                            return {
                                initSequencePercent: _,
                                initSequenceScale: d,
                                targetSequencePercent: 100 * ((R - T + (T - .788 * R) / 2) / r.height),
                                targetSequenceScale: E,
                                clipPathTargetY: A,
                                clipPathTarget: S,
                                clipPathSpaceYBottom: $
                            }
                        },
                        setupTl: function() {
                            var t = this,
                                e = this.getSequenceTransforms(),
                                n = e.initSequencePercent,
                                r = e.initSequenceScale,
                                d = e.targetSequencePercent,
                                v = e.targetSequenceScale,
                                w = e.clipPathTarget,
                                _ = e.clipPathTargetY,
                                x = e.clipPathSpaceYBottom,
                                C = this.$refs.sequenceWrapper;
                            return document.documentElement.style.setProperty("--home-intro-clip-path-y", "".concat(_)), document.documentElement.style.setProperty("--home-intro-clip-path-translate", "".concat(100 - _, "vh")), this.tl && (this.tl.kill(!0), this.tl = void 0), this.tl = this.$gsap.timeline({
                                scrollTrigger: {
                                    trigger: this.$refs.scrollWrapper,
                                    start: "top top",
                                    end: this.scrollEnd,
                                    scrub: !0
                                }
                            }), this.tl.addLabel("start").fromTo([this.$refs.title1, this.$refs.title2], {
                                autoAlpha: 1,
                                x: 0
                            }, {
                                autoAlpha: 0,
                                x: function(t) {
                                    return t % 2 == 0 ? o : c
                                },
                                duration: l
                            }).fromTo(this.$refs.imgClip, {
                                clipPath: 0
                            }, {
                                clipPath: "inset(".concat(w, ")"),
                                duration: 1
                            }, "<").fromTo(C, {
                                scale: r,
                                yPercent: n
                            }, {
                                y: x,
                                yPercent: d,
                                scale: v,
                                transformOrigin: "center bottom",
                                force3D: !0,
                                duration: 1
                            }, "<").fromTo([this.$refs.title4, this.$refs.title5], {
                                autoAlpha: 0,
                                x: function(t) {
                                    return t % 2 == 0 ? o : c
                                }
                            }, {
                                autoAlpha: 1,
                                x: 0,
                                duration: l,
                                onStart: function() {
                                    t.$refs.topLayer.classList.remove("pointer-events-none")
                                },
                                onReverseComplete: function() {
                                    t.$refs.topLayer.classList.add("pointer-events-none")
                                }
                            }, "-=" + l).fromTo([this.$refs.p2line1, this.$refs.p2line2], {
                                y: f
                            }, {
                                y: 0,
                                stagger: m,
                                duration: h
                            }, ">-" + h).fromTo([this.$refs.arrow.$refs.shape, this.$refs.arrow.$refs.arrow], {
                                autoAlpha: 0,
                                y: o
                            }, {
                                autoAlpha: 1,
                                y: 0,
                                duration: l,
                                stagger: .04
                            }, "<"), this.tl
                        },
                        addEvents: function() {
                            window.addEventListener("resize", this.setupTl)
                        },
                        removeEvents: function() {
                            window.removeEventListener("resize", this.setupTl)
                        }
                    }
                },
                v = (n(517), n(2)),
                component = Object(v.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "bg-[#252322] text-[#5A5553] mb-[-250vh]"
                    }, [e("div", {
                        ref: "scrollWrapper",
                        staticClass: "w-full h-[500vh]",
                        attrs: {
                            id: "sequence-scroller-intro"
                        }
                    }, [e("div", {
                        staticClass: "sticky top-0 left-0 w-screen h-screen overflow-hidden"
                    }, [e("div", {
                        ref: "imgClip",
                        staticClass: "absolute top-0 left-0 w-screen h-screen will-change-[clip-path] u-clip-path-fix bg-beige z-10"
                    }, [e("h1", {
                        ref: "title",
                        staticClass: "mt-[14vh] text-[13.8vw] lg:text-[8.33vw] leading-[1.1] lg:leading-none-fix font-display tracking-basic uppercase relative z-10"
                    }, [e("span", {
                        ref: "title1",
                        staticClass: "block lg:ml-4"
                    }, [t._v("\n            Tourbillon\n          ")]), t._v(" "), e("span", {
                        ref: "title2",
                        staticClass: "block text-right lg:mr-4"
                    }, [t._v("\n            souscription\n          ")])]), t._v(" "), e("div", {
                        ref: "sequenceWrapper",
                        staticClass: "absolute left-0 bottom-0 z-20 aspect-[2186/1125] w-full object-cover pointer-events-none"
                    }, [e("ImageSequenceScroll", {
                        ref: "sequence",
                        staticClass: "absolute inset-0 h-full w-full object-cover",
                        attrs: {
                            "trigger-selector": "#sequence-scroller-intro",
                            path: "/assets/home/INTRODUCTION/",
                            "filename-root": "DR_INTRO_",
                            extension: ".webp",
                            "total-frames": 180,
                            end: t.scrollEnd,
                            "cache-id": "intro"
                        }
                    })], 1)]), t._v(" "), e("div", {
                        ref: "topLayer",
                        staticClass: "absolute top-0 left-0 z-10 h-screen w-screen pointer-events-none"
                    }, [e("div", {
                        staticClass: "absolute inset-0 text-[12.8vw] lg:text-[7vw] font-display leading-tight uppercase tracking-basic"
                    }, [e("div", {
                        ref: "title4",
                        staticClass: "absolute bottom-[var(--home-intro-clip-path-translate)] left-[3vw] lg:left-[11.1vw] lg-max:mb-[2vw]"
                    }, [t._v("\n            Tourbillon\n          ")]), t._v(" "), e("div", {
                        ref: "title5",
                        staticClass: "absolute top-[var(--home-intro-clip-path-translate)] right-[8.125vw] lg:right-[11.1vw] lg-max:mt-[2vw] lg-max:text-right"
                    }, [t._v("\n            Souscription\n          ")])]), t._v(" "), e("p", {
                        staticClass: "absolute lg:top-[var(--home-intro-clip-path-translate)] lg:left-[18.6vw] lg-max:bottom-20 lg-max:right-[6.4vw] lg-max:text-right text-[3.73vw] lg:text-[1vw] mt-[1.2vw] leading-[1.3] font-body font-light uppercase tracking-basic"
                    }, [e("span", {
                        staticClass: "block overflow-hidden"
                    }, [e("span", {
                        ref: "p2line1",
                        staticClass: "block"
                    }, [t._v("\n              The foundational complication\n            ")])]), t._v(" "), e("span", {
                        staticClass: "block overflow-hidden"
                    }, [e("span", {
                        ref: "p2line2",
                        staticClass: "block"
                    }, [t._v("\n              for Daniel Roth\n            ")])])]), t._v(" "), e("ArrowCorner", {
                        ref: "arrow",
                        staticClass: "c-homep1-corner"
                    })], 1)])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                ImageSequenceScroll: n(459).default,
                ArrowCorner: n(455).default
            })
        },
        554: function(t, e, n) {
            "use strict";
            n.r(e);
            n(24), n(55), n(6), n(15);
            var r = n(180),
                l = {
                    data: function() {
                        return {
                            version: r.a,
                            lastSequenceImageSrc: r.a ? "/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/lg_".concat(r.a, "/DR_TECHNICAL_VIEW_TRANSPARENCY_240.webp") : "/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/lg/DR_TECHNICAL_VIEW_TRANSPARENCY_240.webp",
                            sections: [{
                                title: "Case",
                                items: [{
                                    title: "Material",
                                    value: "18K Yellow gold 3N"
                                }, {
                                    title: "Dimensions",
                                    value: "38,6 x 35,5mm"
                                }, {
                                    title: "Thickness",
                                    value: "9,2mm"
                                }, {
                                    title: "Water resistance",
                                    value: "30m"
                                }]
                            }, {
                                title: "Movement",
                                description: "DR001 Calibre: Manufacture manual winding movement developed and assembled by La Fabrique du Temps Louis Vuitton",
                                items: [{
                                    title: "Complication",
                                    value: "Tourbillon 1-minute"
                                }, {
                                    title: "Power reserve - Frequency",
                                    value: "80hrs - 3hZ",
                                    valueImportant: !0
                                }, {
                                    title: "Dimensions",
                                    value: "31 x 28mm"
                                }, {
                                    title: "Thickness",
                                    value: "4,6mm"
                                }, {
                                    title: "Components - Jewels",
                                    value: "206 - 19"
                                }]
                            }, {
                                title: "Strap",
                                items: [{
                                    title: "Lug width - material",
                                    value: "20mm - Calfskin leather"
                                }]
                            }, {
                                title: "",
                                items: [{
                                    title: "Price",
                                    value: "140,000 CHF (Excl. Taxes)",
                                    titleImportant: !0
                                }]
                            }]
                        }
                    },
                    destroyed: function() {
                        this.destroy()
                    },
                    mounted: function() {
                        var t = this;
                        this.mm = this.$gsap.matchMedia(), this.mm.add("(min-width: 1024px)", (function() {
                            return t.setup(),
                                function() {}
                        }))
                    },
                    methods: {
                        setup: function() {
                            this.tl = this.$gsap.timeline({
                                scrollTrigger: {
                                    trigger: this.$refs.scrollWrapper,
                                    start: "top bottom",
                                    end: "top top",
                                    scrub: !0
                                }
                            }), this.tl.from(this.$refs.sequenceWrapper, {
                                clipPath: "inset(0 7%)",
                                ease: "linear"
                            }), this.tweens = [], this.$refs.sequence && this.tweens.push(this.$gsap.fromTo(this.$refs.sequence.$el, {
                                filter: "blur(0px)"
                            }, {
                                filter: "blur(10px)",
                                ease: "linear",
                                scrollTrigger: {
                                    trigger: this.$refs.scrollWrapper,
                                    start: "top -50%",
                                    end: "bottom bottom",
                                    scrub: !0
                                }
                            }))
                        },
                        destroy: function() {
                            this.tl && this.tl.kill(), this.$refs.sequence && this.$gsap.killTweensOf(this.$refs.sequence.$el), this.mm && this.mm.revert(), this.tweens && this.tweens.length && this.tweens.forEach((function(t) {
                                t.kill()
                            }))
                        }
                    }
                },
                o = n(2),
                component = Object(o.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "bg-[#927963] text-[#927963] relative z-10 -mt-px"
                    }, [e("div", {
                        ref: "scrollWrapper",
                        staticClass: "w-full py-[20vw] lg:py-[50vh]",
                        attrs: {
                            id: "sequence-scroller"
                        }
                    }, [e("AnimationTrigger", {
                        staticClass: "mx-6 mb-8 lg:ml-40 w-[70vw] lg:w-80 relative z-10 u-clip-path-fix"
                    }, [e("h2", [e("AnimationFade", {
                        staticClass: "text-[4.8vw] lg:text-[1.375rem] font-semibold uppercase tracking-basic leading-none"
                    }, [t._v("\n          Specifications\n        ")])], 1)]), t._v(" "), t._l(t.sections, (function(section, n) {
                        return e("div", {
                            key: n,
                            staticClass: "mx-6 lg:ml-40 w-[70vw] lg:w-80 relative z-10 u-clip-path-fix",
                            class: {
                                "mt-6": n > 0
                            }
                        }, [e("AnimationTrigger", [e("h3", [section.title ? e("AnimationFade", {
                            staticClass: "text-[4.8vw] lg:text-base font-semibold uppercase tracking-basic leading-none",
                            attrs: {
                                delay: .2
                            }
                        }, [t._v("\n            " + t._s(section.title) + "\n          ")]) : t._e()], 1)]), t._v(" "), e("AnimationTrigger", [e("p", [section.description ? e("AnimationFade", {
                            staticClass: "uppercase lg-max:text-[3.73vw] mt-[4.26vw] lg:mt-4 leading-tight",
                            attrs: {
                                delay: .4
                            }
                        }, [t._v("\n            " + t._s(section.description) + "\n          ")]) : t._e()], 1)]), t._v(" "), e("AnimationTrigger", {
                            staticClass: "mt-[4vw] lg:mt-4"
                        }, [e("ul", t._l(section.items, (function(n, r) {
                            return e("li", {
                                key: r,
                                staticClass: "py-4 flex justify-between",
                                class: {
                                    "border-t border-b border-[#927963] border-opacity-30": !!section.title
                                }
                            }, [e("AnimationSlide", {
                                staticClass: "uppercase",
                                class: {
                                    "font-semibold tracking-basic": n.titleImportant
                                },
                                attrs: {
                                    delay: .4 + (section.description ? .4 : 0) + .2 * r
                                }
                            }, [t._v("\n              " + t._s(n.title) + "\n            ")]), t._v(" "), e("AnimationSlide", {
                                staticClass: "text-sm",
                                class: {
                                    "font-semibold tracking-basic": n.valueImportant
                                },
                                attrs: {
                                    delay: .4 + (section.description ? .4 : 0) + .2 * r
                                }
                            }, [t._v("\n              " + t._s(n.value) + "\n            ")])], 1)
                        })), 0)])], 1)
                    })), t._v(" "), e("div", {
                        staticClass: "mt-[10vw] lg:mt-[50vh] mx-6 lg:mx-40 lg:flex flex-row-reverse justify-between items-center lg:u-screen relative z-10 u-clip-path-fix"
                    }, [e("div", [e("div", {
                        staticClass: "flex space-x-5 relative z-10"
                    }, [e("AnimationParallax", {
                        staticClass: "w-[40vw] lg:w-80",
                        attrs: {
                            speed: -1.4,
                            scrub: 2
                        }
                    }, [e("AnimationImage", {
                        staticClass: "aspect-w-5 aspect-h-6"
                    }, [e("AnimationParallaxBg", {
                        attrs: {
                            "use-scale": !1
                        }
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            fetchpriority: "high",
                            src: "/assets/home/DR_VIEW_CLOSEUP_01.png",
                            format: "webp",
                            quality: "80",
                            alt: "",
                            width: "650",
                            height: "754"
                        }
                    })], 1)], 1)], 1), t._v(" "), e("AnimationParallax", {
                        staticClass: "w-[40vw] lg:w-80 mt-[35vw] lg:mt-[17.5rem]",
                        attrs: {
                            speed: 1.2,
                            scrub: 2
                        }
                    }, [e("AnimationImage", {
                        staticClass: "aspect-w-5 aspect-h-6"
                    }, [e("AnimationParallaxBg", {
                        attrs: {
                            "use-scale": !1
                        }
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            fetchpriority: "high",
                            src: "/assets/home/DR_VIEW_CLOSEUP_02.png",
                            format: "webp",
                            quality: "80",
                            alt: "",
                            width: "650",
                            height: "754"
                        }
                    })], 1)], 1)], 1)], 1)]), t._v(" "), e("AnimationTrigger", {
                        staticClass: "mt-[10vw] lg:mt-0 w-[74vw] lg:w-[20.5rem] relative z-10"
                    }, [e("h2", [e("AnimationFade", {
                        staticClass: "text-[4.8vw] lg:text-[1.375rem] font-semibold uppercase tracking-basic leading-none"
                    }, [t._v("\n            An in-house manufacture "), e("span", {
                        staticClass: "block indent-[4.8em]"
                    }, [t._v("tourbillon calibre")])])], 1), t._v(" "), e("p", [e("AnimationFade", {
                        staticClass: "lg-max:text-[3.73vw] mt-[4.26vw] lg:mt-4 leading-tight uppercase lg-max:u-no-br",
                        attrs: {
                            delay: .2
                        }
                    }, [t._v("\n            The Calibre DR001, entirely"), e("span", {
                        staticClass: "br-like"
                    }), t._v("\n            manufactured at La Fabrique du Temps"), e("span", {
                        staticClass: "br-like"
                    }), t._v("\n            for the Tourbillon Souscription, has"), e("span", {
                        staticClass: "br-like"
                    }), t._v("\n            been manually finished up to"), e("span", {
                        staticClass: "br-like"
                    }), t._v("\n            the highests standards.\n          ")])], 1)])], 1), t._v(" "), e("div", {
                        ref: "sequenceWrapper",
                        staticClass: "bg-[#4E4135] absolute top-0 left-0 w-full h-full z-0 u-clip-path-fix",
                        attrs: {
                            id: "technical-view-wrapper"
                        }
                    }, [e("div", {
                        staticClass: "sticky top-0 w-full h-screen flex flex-col justify-end overflow-hidden"
                    }, [e("div", {
                        staticClass: "relative aspect-[1694/1984] w-[78.3vw] translate-y-[19%] translate-x-[28vw] transform-gpu"
                    }, [t.$store.state.screen.width > 768 ? e("ImageSequenceScroll", {
                        ref: "sequence",
                        staticClass: "absolute inset-0 w-full h-full",
                        attrs: {
                            "trigger-selector": "#sequence-scroller",
                            path: "/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/",
                            "filename-root": "DR_TECHNICAL_VIEW_TRANSPARENCY_",
                            extension: ".webp",
                            offset: "+=100%",
                            "total-frames": 241,
                            "cache-id": "technical"
                        }
                    }) : e("img", {
                        staticClass: "absolute inset-0 w-full h-full blur-sm",
                        attrs: {
                            src: t.lastSequenceImageSrc,
                            alt: ""
                        }
                    })], 1)])])], 2)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AnimationFade: n(428).default,
                AnimationTrigger: n(433).default,
                AnimationSlide: n(445).default,
                AnimationParallaxBg: n(439).default,
                AnimationImage: n(432).default,
                AnimationParallax: n(492).default,
                ImageSequenceScroll: n(459).default
            })
        },
        598: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2),
                component = Object(r.a)({}, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("div", {
                        staticClass: "fixed inset-x-0 bottom-0 text-right p-6 lg:px-[2.8vw] lg:py-[2.8vw] z-30"
                    }, [e("ButtonCTASimple", {
                        staticClass: "fixed bottom-6 right-6 lg:bottom-[2.8vw] lg:right-[2.8vw] z-20",
                        nativeOn: {
                            click: function(e) {
                                return t.$store.commit("panelSignup/show")
                            }
                        }
                    }, [t._v("\n      Notify me for next launch\n    ")])], 1), t._v(" "), e("HomePanel1"), t._v(" "), e("HomePanel2"), t._v(" "), e("HomePanel3"), t._v(" "), e("HomePanel4")], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                ButtonCTASimple: n(268).default,
                HomePanel1: n(551).default,
                HomePanel2: n(596).default,
                HomePanel3: n(554).default,
                HomePanel4: n(597).default
            })
        }
    }
]);