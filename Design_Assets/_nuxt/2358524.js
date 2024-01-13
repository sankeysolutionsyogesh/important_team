(window.webpackJsonp = window.webpackJsonp || []).push([
    [5, 34, 40, 47], {
        441: function(t, e, n) {
            n(3)({
                target: "Math",
                stat: !0
            }, {
                sign: n(448)
            })
        },
        448: function(t, e) {
            t.exports = Math.sign || function(t) {
                var e = +t;
                return 0 == e || e != e ? e : e < 0 ? -1 : 1
            }
        },
        454: function(t, e, n) {
            var content = n(485);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(29).default)("4162b168", content, !0, {
                sourceMap: !1
            })
        },
        458: function(t, e, n) {
            "use strict";
            var o = n(3),
                r = n(482);
            o({
                target: "String",
                proto: !0,
                forced: n(483)("link")
            }, {
                link: function(t) {
                    return r(this, "a", "href", t)
                }
            })
        },
        482: function(t, e, n) {
            var o = n(5),
                r = n(44),
                c = n(22),
                l = /"/g,
                h = o("".replace);
            t.exports = function(t, e, n, o) {
                var v = c(r(t)),
                    d = "<" + e;
                return "" !== n && (d += " " + n + '="' + h(c(o), l, "&quot;") + '"'), d + ">" + v + "</" + e + ">"
            }
        },
        483: function(t, e, n) {
            var o = n(4);
            t.exports = function(t) {
                return o((function() {
                    var e = "" [t]('"');
                    return e !== e.toLowerCase() || e.split('"').length > 3
                }))
            }
        },
        484: function(t, e, n) {
            "use strict";
            n(454)
        },
        485: function(t, e, n) {
            var o = n(28)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".o-shape-hover{background:#dcc1b1;--shape-under-scale:1;--shape-over-scale:1;--shape-over-mask-scale:1.3;--shape-over-mask-width-scale:1;--shape-over-mask-translate-x:0;--shape-over-mask-translate-y:0;position:relative}.o-shape-hover_img{position:relative;overflow:hidden}.o-shape-hover_img path{transform:translate(0,0) scale(calc(var(--shape-over-mask-scale)*var(--shape-over-mask-width-scale)));transform:translate(var(--shape-over-mask-translate-x,0),var(--shape-over-mask-translate-y,0)) scale(calc(var(--shape-over-mask-scale)*var(--shape-over-mask-width-scale)));transform-origin:center;transition:transform .4s cubic-bezier(.165,.84,.44,1) 0s}.o-shape-hover_img-under{background:rgba(127,104,92,.2);mix-blend-mode:multiply;filter:blur(0);transform:scale(var(--shape-under-scale));transition:filter 0s cubic-bezier(.165,.84,.44,1),transform 0s cubic-bezier(.165,.84,.44,1);transition-delay:.28s}.o-shape-hover_img-over{position:absolute;top:0px;right:0px;bottom:0px;left:0px;z-index:10;opacity:0;transition:opacity .4s linear .28s}.o-shape-hover:hover{--shape-under-scale:1.2;--shape-over-mask-scale:0.8}.o-shape-hover:hover .o-shape-hover_img path{transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-duration:.8s;transition-delay:0s}.o-shape-hover:hover .o-shape-hover_img-under{filter:blur(1px);transition-duration:.8s,.85s;transition-timing-function:cubic-bezier(.215,.61,.355,1),cubic-bezier(.215,.61,.355,1);transition-delay:0s,.1s}.o-shape-hover:hover .o-shape-hover_img-over{opacity:1;transition:opacity .1s ease-in 0s}", ""]), o.locals = {}, t.exports = o
        },
        493: function(t, e, n) {
            "use strict";
            n.r(e);
            n(458), n(6), n(53), n(143);
            var o = {
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        img: {
                            type: String,
                            required: !0
                        },
                        imgOver: {
                            type: String,
                            required: !0
                        },
                        link: {
                            type: String,
                            required: !0
                        },
                        index: {
                            type: Number,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            uuid: ""
                        }
                    },
                    beforeDestroy: function() {
                        this.removeEvents()
                    },
                    mounted: function() {
                        this.uuid = Math.random().toString(36).substr(2, 9), this.setMaskScale(), this.addEvents()
                    },
                    methods: {
                        setMaskScale: function() {
                            var t = this.$refs.svg,
                                e = this.$refs.svgContainer,
                                n = t.viewBox.baseVal,
                                o = n.width,
                                r = n.height,
                                c = e.getBoundingClientRect(),
                                l = c.width,
                                h = l / o,
                                v = (l - o) / 2,
                                d = (c.height - r) / 2;
                            this.$el.style.setProperty("--shape-over-mask-width-scale", h), this.$el.style.setProperty("--shape-over-mask-translate-x", "".concat(v, "px")), this.$el.style.setProperty("--shape-over-mask-translate-y", "".concat(d, "px"))
                        },
                        onResize: function() {
                            this.setMaskScale()
                        },
                        addEvents: function() {
                            window.addEventListener("resize", this.onResize)
                        },
                        removeEvents: function() {
                            window.removeEventListener("resize", this.onResize)
                        }
                    }
                },
                r = (n(484), n(2)),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "o-shape-hover"
                    }, [e("div", {
                        staticClass: "uppercase leading-none text-[3.73vw] lg:text-2xl mb-[0.5em]"
                    }, [t._v("\n    " + t._s(t.title) + "\n  ")]), t._v(" "), e("div", {
                        ref: "svgContainer",
                        staticClass: "o-shape-hover_img"
                    }, [e("svg", {
                        ref: "svg",
                        attrs: {
                            width: "0",
                            height: "0",
                            viewBox: "0 0 300 376.45",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("defs", [e("clipPath", {
                        attrs: {
                            id: "clip_".concat(t.uuid)
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M152.8,376.43h-5.7c-34.8,0-63.26-11.26-84.31-23.95A175.53,175.53,0,0,1,47.87,342.4c-1.23-.9-2.44-1.83-3.56-2.72a178.37,178.37,0,0,1-14.37-12.63A174.12,174.12,0,0,1,12.16,306.7,149.53,149.53,0,0,1,1.27,290.19l-.4-.71L0,287.92V88.52L.87,87l.42-.74A153.42,153.42,0,0,1,12.18,69.71,173.36,173.36,0,0,1,30,49.3c2.86-2.79,5.83-5.44,8.83-8,1.81-1.54,3.6-3.08,5.46-4.54a179.19,179.19,0,0,1,16-11.21C81.57,12.21,110.91,0,147.16,0h5.7c46.41,0,81.54,20,102.86,36.77A185.79,185.79,0,0,1,270,49.3a165.73,165.73,0,0,1,28.73,36.92l1.27,2.3v199.4l-.67,1.2-.62,1.1A155.61,155.61,0,0,1,288,306.45a171.4,171.4,0,0,1-18,20.62,179.59,179.59,0,0,1-14.39,12.63c-1.14.91-2.35,1.82-3.56,2.72a176.53,176.53,0,0,1-14.93,10.08c-21.19,12.69-49.65,23.95-84.44,23.95Z"
                        }
                    })])])]), t._v(" "), e("div", {
                        staticClass: "o-shape-hover_img-under"
                    }, [e("div", {
                        staticClass: "max-w-[40vw] w-[24rem] aspect-[4/5] relative"
                    }, [e("nuxt-img", {
                        staticClass: "absolute inset-0 object-cover w-full h-full",
                        attrs: {
                            src: t.img,
                            format: "webp",
                            quality: "80",
                            alt: "",
                            width: "880",
                            height: "1092"
                        }
                    })], 1)]), t._v(" "), e("div", {
                        staticClass: "o-shape-hover_img-over",
                        style: "clip-path: url(#clip_".concat(t.uuid, ")")
                    }, [e("div", {
                        staticClass: "max-w-[40vw] w-[24rem] aspect-[4/5] relative"
                    }, [e("nuxt-img", {
                        ref: "img",
                        staticClass: "absolute inset-0 object-cover w-full h-full",
                        attrs: {
                            src: t.imgOver,
                            alt: "",
                            format: "webp",
                            quality: "80",
                            width: "880",
                            height: "1092"
                        }
                    })], 1)])]), t._v(" "), e("NuxtLink", {
                        staticClass: "absolute inset-0 z-10",
                        attrs: {
                            to: t.link
                        }
                    })], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        533: function(t, e, n) {
            var content = n(567);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(29).default)("11a2e6aa", content, !0, {
                sourceMap: !1
            })
        },
        555: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(13),
                r = (n(70), n(143), n(265), n(6), n(33), n(52), n(266), n(53), n(15), n(441), n(180)),
                c = {
                    props: {
                        path: {
                            type: String,
                            required: !0
                        },
                        filenameRoot: {
                            type: String,
                            required: !0
                        },
                        extension: {
                            type: String,
                            required: !0
                        },
                        totalFrames: {
                            type: Number,
                            required: !0
                        },
                        useResponsive: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            isDown: !1,
                            previousTouch: null,
                            frame: 0
                        }
                    },
                    computed: {
                        progress: function() {
                            return this.frame / this.totalFrames
                        }
                    },
                    watch: {
                        frame: function() {
                            this.render()
                        },
                        progress: function() {
                            this.$emit("progress", this.progress)
                        }
                    },
                    beforeDestroy: function() {
                        this.removeEvents()
                    },
                    mounted: function() {
                        this.setup()
                    },
                    methods: {
                        render: function() {
                            var image = this.images[this.frame];
                            if (image) {
                                var t = this.canvas.width / image.width,
                                    e = this.canvas.height / image.height,
                                    n = Math.min(t, e);
                                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                                var o = (this.canvas.width - image.width * n) / 2,
                                    r = (this.canvas.height - image.height * n) / 2;
                                this.context.drawImage(image, 0, 0, image.width, image.height, o, r, image.width * n, image.height * n)
                            }
                        },
                        setupCanvas: function() {
                            var canvas = this.$refs.canvas,
                                t = canvas.getContext("2d"),
                                e = window.devicePixelRatio || 1,
                                n = canvas.clientWidth * e,
                                o = canvas.clientHeight * e;
                            canvas.width = n, canvas.height = o, this.canvas = canvas, this.context = t
                        },
                        computeBounds: function() {
                            this.bounds = this.$refs.canvas.getBoundingClientRect()
                        },
                        prepareImages: function() {
                            var t = this,
                                e = "";
                            if (this.useResponsive) {
                                var n = {
                                        sm: 0,
                                        md: 768,
                                        lg: 1024
                                    },
                                    o = window.innerWidth,
                                    c = Object.keys(n).reverse().find((function(t) {
                                        return o >= n[t]
                                    }));
                                c && (e = r.a ? "".concat(c, "_").concat(r.a, "/") : "".concat(c, "/"))
                            }
                            for (var l = [], i = 0; i < this.totalFrames; i++) {
                                var h = i.toString().padStart(3, "0"),
                                    image = new Image;
                                image.src = "".concat(this.path, "output/").concat(e).concat(this.filenameRoot).concat(h).concat(this.extension), l.push(image)
                            }
                            return this.images = l, new Promise((function(e) {
                                var n = 0;
                                t.images.forEach((function(image) {
                                    image.onload = function() {
                                        ++n === l.length && e()
                                    }
                                }))
                            }))
                        },
                        setup: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.prepareImages();
                                        case 2:
                                            t.setupCanvas(), t.computeBounds(), t.render(), t.addEvents();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        onMouseDown: function(t) {
                            this.isDown = !0, this.previousTouch = t.touches ? t.touches[0] : null, document.addEventListener("mousemove", this.onDrag), document.addEventListener("touchmove", this.onDrag), document.addEventListener("mouseup", this.onMouseUp), document.addEventListener("touchend", this.onMouseUp)
                        },
                        onMouseUp: function(t) {
                            this.isDown = !1, document.removeEventListener("mousemove", this.onDrag), document.removeEventListener("touchmove", this.onDrag), document.addEventListener("mouseup", this.onMouseUp), document.addEventListener("touchend", this.onMouseUp)
                        },
                        onDrag: function(t) {
                            if (this.isDown) {
                                var e = t.touches ? t.touches[0].clientX - this.previousTouch.clientX : t.movementX;
                                this.frame = (this.frame + Math.sign(e)) % this.totalFrames, this.frame < 0 && (this.frame = this.totalFrames - 1), this.previousTouch = t.touches ? t.touches[0] : null
                            }
                        },
                        addEvents: function() {
                            window.addEventListener("resize", this.computeBounds), this.canvas.addEventListener("mousedown", this.onMouseDown), this.canvas.addEventListener("touchstart", this.onMouseDown)
                        },
                        removeEvents: function() {
                            window.removeEventListener("resize", this.computeBounds), this.canvas.removeEventListener("mousedown", this.onMouseDown), this.canvas.removeEventListener("touchstart", this.onMouseDown), document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("touchend", this.onMouseUp), document.removeEventListener("mousemove", this.onDrag), document.removeEventListener("touchmove", this.onDrag)
                        }
                    }
                },
                l = n(2),
                component = Object(l.a)(c, (function() {
                    var t = this;
                    return (0, t._self._c)("canvas", {
                        ref: "canvas",
                        class: {
                            "cursor-grab": !t.isDown, "cursor-grabbing": t.isDown
                        }
                    })
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        556: function(t, e, n) {
            "use strict";
            n.r(e);
            n(458);
            var o = {
                    data: function() {
                        return {
                            items: [{
                                title: "History",
                                img: "/assets/home/nav-history.png",
                                imgOver: "/assets/home/nav-history-color.png",
                                link: "/history"
                            }, {
                                title: "Care",
                                img: "/assets/home/nav-care.png",
                                imgOver: "/assets/home/nav-care-color.png",
                                link: "/care"
                            }]
                        }
                    }
                },
                r = n(2),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("nav", {
                        staticClass: "py-[20vw] lg:py-0 lg:h-screen flex flex-col justify-center items-center"
                    }, [e("AnimationTrigger", {
                        staticClass: "w-full"
                    }, [e("ul", {
                        staticClass: "flex w-full justify-around space-x-4"
                    }, t._l(t.items, (function(t, n) {
                        return e("li", {
                            key: t.title
                        }, [e("AnimationFade", {
                            ref: "item",
                            refInFor: !0,
                            staticClass: "relative",
                            attrs: {
                                delay: .2 * n,
                                direction: n % 2 == 0 ? "left" : "right"
                            }
                        }, [e("HomePanelNavItem", {
                            attrs: {
                                link: t.link,
                                title: t.title,
                                index: n,
                                img: t.img,
                                "img-over": t.imgOver
                            }
                        })], 1)], 1)
                    })), 0)])], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                HomePanelNavItem: n(493).default,
                AnimationFade: n(428).default,
                AnimationTrigger: n(433).default
            })
        },
        566: function(t, e, n) {
            "use strict";
            n(533)
        },
        567: function(t, e, n) {
            var o = n(28)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".c-hp4-sub{font-size:3.7vw}@media (min-width: 1024px){.c-hp4-sub{font-size:1.11vw}}@media (max-width: 1023px){.c-hp4-cta{margin-top:21.33vw}.c-hp4-cta .o-cta_text{font-size:8.53vw}.c-hp4-cta .o-cta_icon{margin-top:0;width:6.66vw}}", ""]), o.locals = {}, t.exports = o
        },
        597: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = {
                    data: function() {
                        return {
                            dragProgress: 0
                        }
                    },
                    mounted: function() {
                        this.setupColors()
                    },
                    methods: {
                        onDragProgress: function(progress) {
                            this.dragProgress = progress
                        },
                        setupColors: function() {
                            var t = this;
                            this.$ScrollTrigger.create({
                                trigger: this.$el,
                                start: "top 5%",
                                end: "bottom 5%",
                                onEnter: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#7F685C"
                                        }
                                    })
                                },
                                onEnterBack: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#7F685C"
                                        }
                                    })
                                },
                                onLeave: function() {},
                                onLeaveBack: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#927963"
                                        }
                                    })
                                }
                            }), this.$ScrollTrigger.create({
                                trigger: this.$refs.watch,
                                start: "top 5%",
                                end: "bottom 5%",
                                onEnter: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#DCC1B1"
                                        }
                                    })
                                },
                                onEnterBack: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#DCC1B1"
                                        }
                                    })
                                },
                                onLeave: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#7F685C"
                                        }
                                    })
                                },
                                onLeaveBack: function() {
                                    t.$gsap.effects.updateColors(document.documentElement, {
                                        colors: {
                                            headerColor: "#7F685C"
                                        }
                                    })
                                }
                            })
                        }
                    }
                },
                r = (n(566), n(2)),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "text-[#7F685C] bg-[#DCC1B1] relative z-10"
                    }, [e("div", {
                        staticClass: "px-6 pb-6 lg:px-[2.8vw] lg:pb-[2.8vw] pt-header overflow-hidden"
                    }, [e("AnimationTrigger", [e("h2", [e("AnimationFade", {
                        staticClass: "relative text-[11.5vw] lg:text-[5.7vw] font-display text-right leading-none lg:mr-[8.2vw]"
                    }, [t._v("\n          A REDESIGNED CROWN\n        ")])], 1)]), t._v(" "), e("div", {
                        staticClass: "my-14"
                    }, [e("AnimationTrigger", {
                        staticClass: "flex space-x-5"
                    }, [e("div", {
                        staticClass: "w-80"
                    }, [e("AnimationImage", {
                        staticClass: "aspect-w-1 aspect-h-1"
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            fetchpriority: "high",
                            src: "/assets/home/DR_VIEW_CROWN_02.png",
                            format: "webp",
                            quality: "80",
                            alt: "",
                            width: "650",
                            height: "591"
                        }
                    })], 1)], 1), t._v(" "), e("div", {
                        staticClass: "w-[27.5rem]"
                    }, [e("AnimationImage", {
                        staticClass: "aspect-w-11 aspect-h-8",
                        attrs: {
                            delay: .15
                        }
                    }, [e("nuxt-img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            fetchpriority: "high",
                            src: "/assets/home/DR_VIEW_CROWN_SKETCH.png",
                            format: "webp",
                            quality: "80",
                            alt: "",
                            width: "880",
                            height: "640"
                        }
                    })], 1)], 1)])], 1), t._v(" "), e("AnimationTrigger", [e("h3", [e("AnimationFade", {
                        staticClass: "uppercase text-[5.866vw] lg:text-xl font-semibold mb-[0.8em]"
                    }, [t._v("\n          DANIEL ROTH DNA encapsulated into the crown\n        ")])], 1), t._v(" "), e("TextSub", {
                        staticClass: "lg:w-2/3 lg-max:u-no-br c-hp4-sub",
                        attrs: {
                            tag: "p"
                        }
                    }, [e("AnimationFade", {
                        attrs: {
                            delay: .2
                        }
                    }, [t._v("\n          THE CROWN NOW FEATURES DANIEL ROTH EMBLEM. ITS REDESIGN ALSO ALLOWS FOR A SMOOTHER"), e("span", {
                        staticClass: "br-like"
                    }), t._v("MANUAL WINDING.\n        ")])], 1)], 1), t._v(" "), e("div", {
                        staticClass: "mt-[12.8vw] lg:mt-32"
                    }, [e("div", {
                        ref: "watch",
                        staticClass: "bg-[#7F685C] -mx-4 py-14 relative"
                    }, [e("client-only", [e("div", {
                        staticClass: "relative mx-auto max-w-full w-80 lg:w-[29vw]"
                    }, [e("div", {
                        directives: [{
                            name: "cursor",
                            rawName: "v-cursor",
                            value: "rotate",
                            expression: "'rotate'"
                        }],
                        staticClass: "aspect-w-9 aspect-h-10"
                    }, [e("ImageSequenceDrag", {
                        staticClass: "absolute inset-0 w-full h-full",
                        attrs: {
                            path: "/assets/home/360/",
                            "filename-root": "DR_360_v2_",
                            extension: ".webp",
                            "total-frames": 181
                        },
                        on: {
                            progress: t.onDragProgress
                        }
                    })], 1)])]), t._v(" "), e("div", {
                        staticClass: "lg:hidden aspect-[33/40] w-[8.8vw] absolute top-[11.46vw] right-[6.13vw]"
                    }, [e("svg-icon", {
                        staticClass: "text-[#CAB7A5] absolute inset-0 w-full h-full",
                        attrs: {
                            name: "shape-rotate"
                        }
                    })], 1), t._v(" "), e("div", {
                        staticClass: "max-w-full w-80 lg:w-52 h-[2px] mx-auto absolute left-0 right-0 bottom-[5%] lg:bottom-6"
                    }, [e("div", {
                        staticClass: "absolute inset-0 bg-[#CAB7A5] opacity-40"
                    }), t._v(" "), e("div", {
                        staticClass: "absolute inset-0 bg-[#CAB7A5] origin-left scale-x-[var(--progress)]",
                        style: {
                            "--progress": t.dragProgress
                        }
                    })])], 1)]), t._v(" "), e("div", {
                        staticClass: "mt-[6.4vw] lg:mt-6"
                    }, [e("AnimationTrigger", {
                        staticClass: "relative text-[11.5vw] lg:text-[5.7vw] font-display leading-none uppercase"
                    }, [e("h2", [e("AnimationFade", [t._v("Tourbillon Souscription")]), t._v(" "), e("AnimationFade", {
                        attrs: {
                            delay: .2
                        }
                    }, [t._v("\n            a limited series of 20 pieces\n          ")])], 1)])], 1), t._v(" "), e("HomePanelNav")], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AnimationFade: n(428).default,
                AnimationTrigger: n(433).default,
                AnimationImage: n(432).default,
                TextSub: n(440).default,
                ImageSequenceDrag: n(555).default,
                HomePanelNav: n(556).default
            })
        }
    }
]);