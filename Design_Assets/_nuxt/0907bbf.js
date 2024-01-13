(window.webpackJsonp = window.webpackJsonp || []).push([
    [4, 11, 12, 15, 19, 42, 43, 44, 46, 59], {
        427: function(t, e, n) {
            var content = n(431);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(29).default)("7451f126", content, !0, {
                sourceMap: !1
            })
        },
        428: function(t, e, n) {
            "use strict";
            n.r(e);
            n(143);
            var l = {
                    props: {
                        direction: {
                            type: String,
                            default: "left"
                        },
                        delay: {
                            type: Number,
                            default: 0
                        }
                    }
                },
                r = (n(430), n(2)),
                component = Object(r.a)(l, (function() {
                    var t = this;
                    return (0, t._self._c)("span", {
                        staticClass: "a-fade a-item",
                        attrs: {
                            "data-delay": t.delay,
                            "data-direction": t.direction
                        }
                    }, [t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        430: function(t, e, n) {
            "use strict";
            n(427)
        },
        431: function(t, e, n) {
            var l = n(28)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".a-fade{display:block;will-change:opacity,transform}", ""]), l.locals = {}, t.exports = l
        },
        432: function(t, e, n) {
            "use strict";
            n.r(e);
            n(143);
            var l = {
                    props: {
                        delay: {
                            type: Number,
                            default: 0
                        }
                    }
                },
                r = n(2),
                component = Object(r.a)(l, (function() {
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
        433: function(t, e, n) {
            "use strict";
            n.r(e);
            n(48), n(6), n(15);
            var l = {
                    props: {
                        start: {
                            type: String,
                            default: "top bottom"
                        }
                    },
                    destroyed: function() {
                        this.setupTimeout && (clearTimeout(this.setupTimeout), this.setupTimeout = void 0), this.tl && this.tl.kill()
                    },
                    mounted: function() {
                        var t = this;
                        this.setupTimeout = setTimeout((function() {
                            t.setupTl()
                        }), 600)
                    },
                    methods: {
                        setupTl: function() {
                            var t = this;
                            this.tl = this.$gsap.timeline({
                                scrollTrigger: {
                                    toggleActions: "play none none reset",
                                    trigger: this.$el,
                                    start: this.start
                                }
                            }), this.$el.querySelectorAll(".a-item").forEach((function(e, n) {
                                var l = e.dataset.delay || 0;
                                (e.classList.contains("a-image") && t.tl.fadeImage(e, {}, l), e.classList.contains("a-fade")) && ("right" === e.dataset.direction ? t.tl.fadeRight(e, {}, l) : t.tl.fadeLeft(e, {}, l));
                                e.classList.contains("a-line") && t.tl.slideLines(e, {}, l)
                            }))
                        }
                    }
                },
                r = n(2),
                component = Object(r.a)(l, (function() {
                    return (0, this._self._c)("div", [this._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        436: function(t, e, n) {
            var content = n(450);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(29).default)("915b2c30", content, !0, {
                sourceMap: !1
            })
        },
        440: function(t, e, n) {
            "use strict";
            n.r(e);
            var l = {
                    props: {
                        tag: {
                            type: String,
                            default: "div"
                        }
                    }
                },
                r = n(2),
                component = Object(r.a)(l, (function() {
                    var t = this;
                    return (0, t._self._c)(t.tag, {
                        tag: "component",
                        staticClass: "uppercase text-[1.11vw] leading-tight"
                    }, [t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        445: function(t, e, n) {
            "use strict";
            n.r(e);
            n(143);
            var l = {
                    props: {
                        delay: {
                            type: Number,
                            default: 0
                        }
                    }
                },
                r = (n(449), n(2)),
                component = Object(r.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("span", {
                        staticClass: "overflow-hidden"
                    }, [e("span", {
                        staticClass: "a-line a-item",
                        attrs: {
                            "data-delay": t.delay
                        }
                    }, [t._t("default")], 2)])
                }), [], !1, null, "829d7910", null);
            e.default = component.exports
        },
        449: function(t, e, n) {
            "use strict";
            n(436)
        },
        450: function(t, e, n) {
            var l = n(28)((function(i) {
                return i[1]
            }));
            l.push([t.i, "span[data-v-829d7910]{display:block}", ""]), l.locals = {}, t.exports = l
        },
        480: function(t, e, n) {
            var content = n(524);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(29).default)("23c77afe", content, !0, {
                sourceMap: !1
            })
        },
        481: function(t, e, n) {
            var content = n(526);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(29).default)("35d06182", content, !0, {
                sourceMap: !1
            })
        },
        519: function(t, e, n) {
            n(33), n(24), n(21), n(6), n(42), n(15), n(43);
            var l = n(520),
                r = n(521),
                o = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            n(52), t.exports = {
                functional: !0,
                render: function(t, e) {
                    var n = e._c,
                        data = (e._v, e.data),
                        d = e.children,
                        f = void 0 === d ? [] : d,
                        h = data.class,
                        v = data.staticClass,
                        style = data.style,
                        m = data.staticStyle,
                        x = data.attrs,
                        w = void 0 === x ? {} : x,
                        _ = r(data, o);
                    return n("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(e) {
                                l(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({
                        class: [h, v],
                        style: [style, m],
                        attrs: Object.assign({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 139.2 172.19"
                        }, w)
                    }, _), f.concat([n("path", {
                        attrs: {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1px",
                            "stroke-miterlimit": "10",
                            d: "M70.81.4a75.68,75.68,0,0,1,38.86,10.88c2.53,1.51,4.82,3.07,6.88,4.58l1.64,1.25a87,87,0,0,1,6.63,5.74,79.18,79.18,0,0,1,8.28,9.39A69.07,69.07,0,0,1,138,39.62l.28.5.31.54v90.68l-.59,1a75.69,75.69,0,0,1-13.24,16.79,81.59,81.59,0,0,1-6.58,5.7c-9.81,7.62-26,16.72-47.38,16.72H68.2a75.58,75.58,0,0,1-40-11.62,85.74,85.74,0,0,1-7.36-5.1c-.85-.66-1.67-1.37-2.51-2.07-1.39-1.16-2.75-2.36-4.07-3.63A78.57,78.57,0,0,1,6,139.89a68.09,68.09,0,0,1-5-7.5l-.19-.34-.4-.71V40.66L.81,40,1,39.62a66.25,66.25,0,0,1,5-7.51,79,79,0,0,1,8.19-9.26,86.15,86.15,0,0,1,6.62-5.73l1.65-1.25c2.05-1.51,4.34-3.07,6.88-4.58A75.44,75.44,0,0,1,68.18.4Z",
                            transform: "translate(0.09 0.1)"
                        }
                    }), n("path", {
                        attrs: {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1px",
                            "stroke-miterlimit": "10",
                            opacity: "0.5",
                            d: "M70.58,15a63.11,63.11,0,0,1,32.34,9c2.1,1.25,4,2.54,5.72,3.8.47.34.93.69,1.37,1a70.32,70.32,0,0,1,5.51,4.76,66.23,66.23,0,0,1,6.9,7.79,58.22,58.22,0,0,1,4.09,6.12l.24.41.25.45v75.22l-.49.87a62.76,62.76,0,0,1-11,13.92,68.93,68.93,0,0,1-5.48,4.73A64.33,64.33,0,0,1,70.6,157H68.41a63.08,63.08,0,0,1-33.3-9.64A71,71,0,0,1,29,143.13c-.71-.55-1.4-1.13-2.09-1.71-1.16-1-2.3-2-3.39-3a65.71,65.71,0,0,1-6.84-7.69,57,57,0,0,1-4.18-6.23l-.16-.28-.33-.59V48.39l.33-.59.16-.27a56.39,56.39,0,0,1,4.17-6.23,65.44,65.44,0,0,1,6.82-7.68A69.89,69.89,0,0,1,29,28.87l1.37-1c1.71-1.25,3.61-2.55,5.72-3.8A63,63,0,0,1,68.4,15Z",
                            transform: "translate(0.09 0.1)"
                        }
                    })]))
                }
            }
        },
        520: function(t, e) {
            t.exports = function(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        521: function(t, e, n) {
            var l = n(522);
            t.exports = function(source, t) {
                if (null == source) return {};
                var e, i, n = l(source, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < r.length; i++) e = r[i], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(source, e) && (n[e] = source[e])
                }
                return n
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        522: function(t, e) {
            t.exports = function(source, t) {
                if (null == source) return {};
                var e, i, n = {},
                    l = Object.keys(source);
                for (i = 0; i < l.length; i++) e = l[i], t.indexOf(e) >= 0 || (n[e] = source[e]);
                return n
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        523: function(t, e, n) {
            "use strict";
            n(480)
        },
        524: function(t, e, n) {
            var l = n(28)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".c-hp2p1-shape path{will-change:stroke-dasharray}.o-shape-line{--gap:min(2.7777777778vw,4vh) ;--radius:11.8055555556vw;--text-translate-step:1.1111111111vw;position:absolute;top:50%;left:50%;transform-origin:left;transform:translateY(0) rotate(var(--angle)) translateX(calc(var(--radius)/2 + var(--gap)));transform:translateY(var(--item-translate-y-fix,0)) rotate(var(--angle)) translateX(calc(var(--radius)/2 + var(--gap)))}.o-shape-line.-index-0{--angle:-90deg;--text-translate-x:-50%;--text-translate-y:calc(var(--text-translate-step)*-1.5)}.o-shape-line.-index-1{--angle:-45deg;--text-translate-x:calc(var(--text-translate-step)*1.5);--text-translate-y:-50%}.o-shape-line.-index-2{--angle:45deg}.o-shape-line.-index-3{--angle:90deg;--text-translate-x:-50%;--text-translate-y:calc(var(--text-translate-step)*1.5)}.o-shape-line.-index-4{--angle:135deg;--text-translate-x:calc(-100% - var(--text-translate-step));--text-translate-y:calc(var(--text-translate-step)*1)}.o-shape-line.-index-5{--angle:-135deg;--text-translate-x:calc(-100% - var(--text-translate-step)*1);--text-translate-y:-50%}.o-shape-line.-index-1,.o-shape-line.-index-2,.o-shape-line.-index-4,.o-shape-line.-index-5{--item-translate-y-fix:-0.4166666667vw}.o-shape-line_inner{width:min(20.625vw,20vh);height:1px;background-color:currentColor;transform-origin:left}.o-shape-line_text{position:absolute;text-transform:uppercase;left:100%;top:0;width:-webkit-max-content;width:-moz-max-content;width:max-content;transform:translateY(-50%) rotate(calc(var(--angle)*-1)) translate(0,0);transform:translateY(-50%) rotate(calc(var(--angle)*-1)) translate(var(--text-translate-x,0),var(--text-translate-y,0));transform-origin:left center;transform-origin:var(--text-origin-x,left) var(--text-origin-y,center)}@media (min-width: 1024px){.o-shape-line.-index-0 .o-shape-line_text{display:none}}@media (max-width: 1023px){.o-shape-line{--radius:46vw;--text-translate-step:3vw}.o-shape-line_text{font-size:3.2vw}.o-shape-line.-index-1 .o-shape-line_inner,.o-shape-line.-index-4 .o-shape-line_inner{width:15vw}.o-shape-line.-index-1{--text-translate-x:calc(var(--text-translate-step)*0.6)}.o-shape-line.-index-1 .o-shape-line_text{max-width:15vw}.o-shape-line.-index-4{--text-translate-x:calc(-75% - var(--text-translate-step));--text-translate-y:calc(var(--text-translate-step)*1.6)}.o-shape-line.-index-4 .o-shape-line_text{max-width:15vw}.o-shape-line.-index-5 .o-shape-line_text{display:none}}", ""]), l.locals = {}, t.exports = l
        },
        525: function(t, e, n) {
            "use strict";
            n(481)
        },
        526: function(t, e, n) {
            var l = n(28)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".c-hp2-sub{font-size:3.7vw}@media (min-width: 1024px){.c-hp2-sub{font-size:1.11vw}}", ""]), l.locals = {}, t.exports = l
        },
        552: function(t, e, n) {
            "use strict";
            n.r(e);
            var l = n(8),
                r = (n(52), n(519)),
                o = {
                    components: {
                        ShapeDoubled: n.n(r).a
                    },
                    data: function() {
                        return {
                            lines: ["", "", "", "", "", ""],
                            title1: "La montre",
                            title2: "objet d'art"
                        }
                    },
                    mounted: function() {
                        var t = this;
                        window.requestAnimationFrame((function() {
                            t.setupTl()
                        }))
                    },
                    methods: {
                        setupTl: function() {
                            var t = this.$gsap.timeline({
                                scrollTrigger: {
                                    trigger: this.$refs.scrollWrapper,
                                    start: "top center",
                                    end: "bottom bottom",
                                    scrub: !0
                                }
                            });
                            return t.from(this.$refs.shape.querySelectorAll("path"), {
                                drawSVG: 0,
                                duration: 1,
                                stagger: .04
                            }).from(this.$refs.title1.querySelectorAll(".char"), {
                                opacity: 0,
                                x: function(i) {
                                    return "0.5em"
                                },
                                ease: "power4.out",
                                duration: .6,
                                stagger: {
                                    each: .1,
                                    from: "end"
                                }
                            }, ">-0.3").from(this.$refs.title2.querySelectorAll(".char"), {
                                opacity: 0,
                                x: function(i) {
                                    return "-0.5em"
                                },
                                ease: "power4.out",
                                duration: .6,
                                stagger: {
                                    each: .1,
                                    from: "start"
                                }
                            }, "<"), window.innerWidth > 1024 ? t.from(this.$refs.lines.querySelectorAll(".o-shape-line_inner"), {
                                scaleX: 0,
                                force3D: !0,
                                transformOrigin: "left",
                                duration: .4,
                                stagger: .2
                            }, "<") : t.to([this.$refs.title1, this.$refs.title2], {
                                opacity: 0,
                                duration: .6
                            }).from(this.$refs.lines.querySelectorAll(".o-shape-line_inner"), {
                                scaleX: 0,
                                force3D: !0,
                                transformOrigin: "left",
                                duration: .4,
                                stagger: .2
                            }, ">-0.2"), t
                        }
                    }
                },
                c = (n(523), n(2)),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        ref: "scrollWrapper",
                        staticClass: "h-[300vh] lg:h-[200vh]"
                    }, [e("div", {
                        staticClass: "sticky top-0 left-0 w-screen h-screen flex items-center justify-center"
                    }, [e("h2", {
                        ref: "title",
                        staticClass: "text-[#372D25] text-[16vw] lg:text-[6vw] font-light tracking-basic leading-none mt-leading-none-fix uppercase relative z-10 lg:flex items-center justify-center lg:ml-[1.4vw]"
                    }, [e("div", {
                        ref: "title1",
                        staticClass: "lg-max:text-center"
                    }, t._l(t.title1, (function(n, l) {
                        return e("div", {
                            key: "".concat(n, "_").concat(l),
                            staticClass: "inline-block overflow-hidden"
                        }, [e("div", {
                            staticClass: "char"
                        }, [t._v("\n            " + t._s(n) + "\n          ")])])
                    })), 0), t._v(" "), e("div", {
                        ref: "title2",
                        staticClass: "lg-max:mt-[55vw] lg:ml-[17.3vw]"
                    }, t._l(t.title2, (function(n, l) {
                        return e("div", {
                            key: "".concat(n, "_").concat(l),
                            staticClass: "inline-block overflow-hidden"
                        }, [e("div", {
                            staticClass: "char"
                        }, [t._v("\n            " + t._s(n) + "\n          ")])])
                    })), 0)]), t._v(" "), e("div", {
                        ref: "lines",
                        staticClass: "absolute inset-0 overflow-hidden"
                    }, [e("div", {
                        staticClass: "w-[36.8vw] lg:w-[9.58vw] aspect-[139/172] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                    }, [e("ShapeDoubled", {
                        ref: "shape",
                        staticClass: "c-hp2p1-shape absolute inset-0 h-full w-full"
                    })], 1), t._v(" "), t._l(t.lines, (function(line, n) {
                        return e("div", {
                            key: n,
                            staticClass: "o-shape-line",
                            class: Object(l.a)({}, "-index-".concat(n), !0),
                            style: {
                                "--item-index": n
                            }
                        }, [e("div", {
                            staticClass: "o-shape-line_inner"
                        }), t._v(" "), e("div", {
                            staticClass: "o-shape-line_text"
                        }, [t._v("\n          " + t._s(line) + "\n        ")])])
                    }))], 2)])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        553: function(t, e, n) {
            "use strict";
            n.r(e);
            var l = n(109),
                r = l.a.TITLE_FADE_DURATION,
                o = l.a.TITLE_FADE_AMOUNT,
                c = l.a.TITLE_FADE_AMOUNT_REVERSE,
                d = l.a.LINE_TRANSLATE_DURATION,
                f = l.a.LINE_TRANSLATE_AMOUNT,
                h = l.a.LINE_TRANSLATE_STAGGER,
                v = {
                    methods: {
                        visibilityChanged: function(t, e) {
                            e.target.classList.toggle("in-view", t)
                        },
                        setupTl: function() {
                            var t = this.$gsap.timeline();
                            return t.from(this.$el, {
                                autoAlpha: 0,
                                duration: .2
                            }).from(this.$el.querySelectorAll(".a-title"), {
                                autoAlpha: 0,
                                x: function(t) {
                                    return t % 2 == 0 ? o : c
                                },
                                duration: r
                            }, "<").from([this.$refs.img1, this.$refs.img2], {
                                clipPath: "inset(100% 0 0 0)",
                                ease: "expo.out",
                                duration: .3,
                                stagger: .1
                            }, ">-" + .4 * r).from(this.$el.querySelectorAll(".a-line"), {
                                y: f,
                                stagger: h,
                                duration: d
                            }, "<").to({}, {
                                duration: .5
                            }), t.timeScale(.5), t
                        }
                    }
                },
                m = (n(525), n(2)),
                component = Object(m.a)(v, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "w-screen top-0 left-0 lg:px-[2.8vw] lg:pb-[2.8vw] lg:pt-header px-6 py-[20vw] overflow-hidden"
                    }, [e("div", {
                        staticClass: "relative"
                    }, [e("AnimationTrigger", {
                        staticClass: "uppercase font-display text-[12.8vw] lg:text-[6.9vw] leading-none-fix"
                    }, [e("h2", [e("AnimationFade", [t._v("\n          Hand-finished dial\n        ")]), t._v(" "), e("AnimationFade", {
                        staticClass: "lg:pl-[1.2em]",
                        attrs: {
                            delay: .4,
                            direction: "right"
                        }
                    }, [t._v("\n          crafted in "), e("span", {
                        staticClass: "lg-max:block"
                    }, [t._v("solid gold")])])], 1)]), t._v(" "), e("AnimationTrigger", {
                        staticClass: "lg-max:mt-[6.4vw] lg-max:mb-[28.5vw] lg:absolute left-0 bottom-0 lg:w-1/2 lg-max:max-w-[70vw]"
                    }, [e("TextSub", {
                        staticClass: "c-hp2-sub lg-max:u-no-br",
                        attrs: {
                            tag: "p"
                        }
                    }, [e("AnimationFade", [t._v("\n          Formed from a plate of solid yellow gold and manufactured in the workshop"), e("span", {
                        staticClass: "br-like"
                    }), t._v("of Kari Voutilainen, the dial is decorated with clous de Paris guilloche just"), e("span", {
                        staticClass: "br-like"
                    }), t._v("like the original was.\n        ")])], 1)], 1), t._v(" "), e("AnimationTrigger", {
                        staticClass: "relative flex justify-end space-x-5 mt-8"
                    }, [e("div", {
                        staticClass: "uppercase leading-tight text-[3.2vw] lg:text-[0.97vw] text-left lg:text-right mr-[6.4vw] lg:mr-4"
                    }, [e("p", {
                        staticClass: "sticky top-header"
                    }, [e("AnimationSlide", {
                        attrs: {
                            delay: .3
                        }
                    }, [t._v("\n            modernized typography\n          ")]), t._v(" "), e("AnimationSlide", {
                        attrs: {
                            delay: .5
                        }
                    }, [t._v("\n            individual watch number\n          ")])], 1)]), t._v(" "), e("div", {
                        staticClass: "lg-max:grow lg-max:space-y-[4.26vw] lg:flex lg:space-x-5"
                    }, [e("div", {
                        staticClass: "w-full lg:w-80"
                    }, [e("AnimationImage", {
                        staticClass: "aspect-w-[16] aspect-h-[21]"
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            fetchpriority: "high",
                            src: "/assets/home/DR_VIEW_PRESENTATION_01.png",
                            alt: "",
                            format: "webp",
                            quality: "80",
                            width: "650",
                            height: "832"
                        }
                    })], 1)], 1), t._v(" "), e("div", {
                        staticClass: "w-full lg:w-80"
                    }, [e("AnimationImage", {
                        staticClass: "aspect-w-[16] aspect-h-[21]",
                        attrs: {
                            delay: .15
                        }
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            fetchpriority: "high",
                            src: "/assets/home/DR_VIEW_PRESENTATION_02.png",
                            alt: "",
                            format: "webp",
                            quality: "80",
                            width: "650",
                            height: "832"
                        }
                    })], 1)], 1)])])], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AnimationFade: n(428).default,
                AnimationTrigger: n(433).default,
                TextSub: n(440).default,
                AnimationSlide: n(445).default,
                AnimationImage: n(432).default
            })
        },
        558: function(t, e, n) {
            "use strict";
            n.r(e);
            var l = n(2),
                component = Object(l.a)({}, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lg:u-screen relative lg:flex flex-col justify-between lg:px-[2.8vw] lg:pb-[2.8vw] lg:pt-0 px-6 pb-[10vw] overflow-hidden"
                    }, [e("AnimationTrigger", {
                        staticClass: "lg:flex flex-row justify-between"
                    }, [e("h2", {
                        staticClass: "mt-14 uppercase font-display text-[12.8vw] lg:text-[8vw] leading-none-fix"
                    }, [e("AnimationFade", [t._v("\n        The\n      ")]), t._v(" "), e("AnimationFade", {
                        attrs: {
                            delay: .2
                        }
                    }, [t._v("\n        original\n      ")]), t._v(" "), e("AnimationFade", {
                        staticClass: "pl-[1.8em]",
                        attrs: {
                            delay: .4
                        }
                    }, [t._v("\n        case design\n      ")]), t._v(" "), e("AnimationFade", {
                        staticClass: "pl-[1em]",
                        attrs: {
                            delay: .6
                        }
                    }, [t._v("\n        revisited\n      ")])], 1), t._v(" "), e("div", {
                        staticClass: "lg-max:my-[10vw]"
                    }, [e("div", {
                        staticClass: "w-[66vw] lg:w-80"
                    }, [e("AnimationImage", {
                        staticClass: "aspect-w-5 aspect-h-4"
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            fetchpriority: "high",
                            src: "/assets/home/DR_VIEW_PRESENTATION_03.png",
                            alt: "",
                            format: "webp",
                            quality: "80",
                            width: "648",
                            height: "538"
                        }
                    })], 1), t._v(" "), e("AnimationImage", {
                        staticClass: "mt-2 aspect-w-5 aspect-h-4",
                        attrs: {
                            delay: .2
                        }
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            fetchpriority: "high",
                            src: "/assets/home/DR_VIEW_PRESENTATION_04.png",
                            alt: "",
                            format: "webp",
                            quality: "80",
                            width: "648",
                            height: "538"
                        }
                    })], 1)], 1), t._v(" "), e("p", {
                        staticClass: "uppercase leading-none mt-[3.2vw] lg:mt-[1.8vw] text-[3.2vw] lg:text-[0.97vw]"
                    }, [e("AnimationSlide", {
                        attrs: {
                            delay: .4
                        }
                    }, [t._v("\n          Case dimensions identical\n        ")]), t._v(" "), e("AnimationSlide", {
                        attrs: {
                            delay: .6
                        }
                    }, [t._v("\n          to the original tourbillon\n        ")]), t._v(" "), e("AnimationSlide", {
                        staticClass: "mt-4",
                        attrs: {
                            delay: .8
                        }
                    }, [t._v("\n          Lugs gently reshaped for\n        ")]), t._v(" "), e("AnimationSlide", {
                        attrs: {
                            delay: 1
                        }
                    }, [t._v("\n          an improved wearability\n        ")])], 1)])]), t._v(" "), e("AnimationTrigger", {
                        staticClass: "flex justify-between"
                    }, [e("TextSub", {
                        staticClass: "c-hp2-sub lg-max:max-w-[70vw] lg:w-2/3",
                        attrs: {
                            tag: "p"
                        }
                    }, [e("AnimationFade", [t._v("\n        A cross between a circle and a square, the signature double-ellipse case was specifically designed by Mr. Roth to magnify the Tourbillon complication while leaving enough space to the dial.\n      ")])], 1)], 1)], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AnimationFade: n(428).default,
                AnimationImage: n(432).default,
                AnimationSlide: n(445).default,
                AnimationTrigger: n(433).default,
                TextSub: n(440).default
            })
        },
        596: function(t, e, n) {
            "use strict";
            n.r(e);
            var l = {
                    destroyed: function() {
                        this.tl && this.tl.kill()
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
                            this.$ScrollTrigger.create({
                                trigger: this.$el,
                                start: "top -55%",
                                end: "bottom 5%",
                                onEnter: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#372D25"
                                        }
                                    })
                                },
                                onEnterBack: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#372D25"
                                        }
                                    })
                                },
                                onLeave: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#927963"
                                        }
                                    })
                                },
                                onLeaveBack: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#5A5553"
                                        }
                                    })
                                }
                            })
                        },
                        setupTl: function() {
                            this.tl = this.$gsap.timeline({
                                scrollTrigger: {
                                    trigger: this.$refs.scrollWrapper,
                                    start: "top center",
                                    end: "bottom top",
                                    scrub: !0
                                }
                            }), this.tl.from(this.$refs.bg, {
                                scaleY: 0,
                                transformOrigin: "bottom",
                                duration: 1,
                                ease: "power2.inOut"
                            }, 0).to(document.body, {
                                color: "#252322",
                                duration: .05
                            }, ">-0.25")
                        }
                    }
                },
                r = n(2),
                component = Object(r.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "text-[#372D25] relative z-10 pointer-events-none"
                    }, [e("div", {
                        ref: "scrollWrapper",
                        staticClass: "absolute top-0 left-0 w-full h-[100vh]"
                    }), t._v(" "), e("div", {
                        ref: "bg",
                        staticClass: "bg-[#927963] sticky top-[-1px] left-0 w-full h-[101vh] z-0"
                    }), t._v(" "), e("HomePanel2P1", {
                        staticClass: "pointer-events-auto"
                    }), t._v(" "), e("HomePanel2P2", {
                        staticClass: "pointer-events-auto"
                    }), t._v(" "), e("HomePanel2P3", {
                        staticClass: "pointer-events-auto"
                    })], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                HomePanel2P1: n(552).default,
                HomePanel2P2: n(558).default,
                HomePanel2P3: n(553).default
            })
        }
    }
]);