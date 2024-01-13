(window.webpackJsonp = window.webpackJsonp || []).push([
    [0, 27], {
        470: function(e, t, o) {
            "use strict";

            function n(e) {
                if ("touchmove" === e.type || "touchstart" === e.type || "touchend" === e.type) {
                    var t = e.targetTouches[0] || e.changedTouches[0];
                    return {
                        x: t.clientX,
                        y: t.clientY,
                        id: t.identifier
                    }
                }
                return {
                    x: e.clientX,
                    y: e.clientY,
                    id: null
                }
            }
            o.d(t, "a", (function() {
                return n
            }))
        },
        471: function(e, t, o) {
            var content = o(506);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("449fe6f0", content, !0, {
                sourceMap: !1
            })
        },
        472: function(e, t, o) {
            var content = o(508);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("53b2ccf6", content, !0, {
                sourceMap: !1
            })
        },
        505: function(e, t, o) {
            "use strict";
            o(471)
        },
        506: function(e, t, o) {
            var n = o(28)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".c-hm-images-container{background:#fff;position:absolute;top:0px;right:0px;bottom:0px;left:0px;overflow:hidden}.c-hm-image{position:absolute;top:0px;left:0px;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;pointer-events:none;will-change:clip-path,transform;z-index:9}.c-hm-image.-active{z-index:10}", ""]), n.locals = {}, e.exports = n
        },
        507: function(e, t, o) {
            "use strict";
            o(472)
        },
        508: function(e, t, o) {
            var n = o(28)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".c-hm-thumbnails{--item-w:3.5rem;--item-h:3.875rem;--item-gap:0.5rem;position:absolute;width:var(--item-w);opacity:0;pointer-events:none}.is-desktop .c-hm-thumbnails{top:calc(50% - var(--item-h)*var(--thumbnails-count)/2 - var(--item-gap)*(var(--thumbnails-count) - 1)/2);left:calc(var(--item-w)*-2*1);left:calc(var(--item-w)*-2*var(--scale, 1))}.is-mobile .c-hm-thumbnails{--item-gap:0.75rem;transform-origin:top;bottom:calc(var(--item-h)*-1 + var(--item-gap)*-1);left:calc(50% - var(--item-w)*var(--thumbnails-count)/2 - var(--item-gap)*(var(--thumbnails-count) - 1)/2);width:auto}.is-mobile .c-hm-thumbnails_inner{display:flex;align-items:center;justify-content:center}.c-hm-thumbnails.-active{transition:opacity .1s linear}.is-zoomed .c-hm-thumbnails.-active{pointer-events:auto;opacity:1;transition-delay:.8s;transition-duration:.4s;transition-timing-function:cubic-bezier(.215,.61,.355,1)}.c-hm-thumbnail{background:#dfdfdf;cursor:pointer;width:var(--item-w);height:var(--item-h);overflow:hidden;position:relative}.is-desktop .c-hm-thumbnail+.c-hm-thumbnail{margin-top:var(--item-gap)}.is-mobile .c-hm-thumbnail+.c-hm-thumbnail{margin-left:var(--item-gap)}.c-hm-thumbnail_image{mix-blend-mode:multiply;-webkit-clip-path:ellipse(44% 49.5% at 50% 50%);clip-path:ellipse(44% 49.5% at 50% 50%);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;vertical-align:bottom}.c-hm-thumbnail_shape{color:rgb(37 35 34 / var(--tw-text-opacity));--tw-text-opacity:0.25;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity .3s ease}.c-hm-thumbnail.-active .c-hm-thumbnail_shape{opacity:1}", ""]), n.locals = {}, e.exports = n
        },
        527: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(8),
                r = (o(143), o(441), o(33), o(24), o(21), o(6), o(42), o(15), o(43), o(470));

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

            function l(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? c(Object(source), !0).forEach((function(t) {
                        Object(n.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var m = {
                    props: {
                        index: {
                            type: Number,
                            required: !0
                        },
                        active: {
                            type: Boolean,
                            default: !1
                        },
                        interactive: {
                            type: Boolean,
                            default: !1
                        },
                        focus: {
                            type: Boolean,
                            default: !1
                        },
                        variation: {
                            type: Object,
                            required: !0,
                            default: function() {
                                return {}
                            }
                        },
                        activeVariation: {
                            type: Object,
                            required: !0,
                            default: function() {
                                return {}
                            }
                        },
                        variationsCount: {
                            type: Number,
                            required: !0
                        },
                        distance: {
                            type: Number,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            slide: {
                                isDown: !1,
                                timestamp: null,
                                timeElapsed: 0,
                                delta: 0,
                                deltaTotal: 0,
                                startX: 0,
                                prevX: 0,
                                progress: 0,
                                direction: 0,
                                prevTl: null,
                                nextTl: null,
                                activeTl: null
                            },
                            isZoomed: !1,
                            isMouseOver: !1,
                            activeImage: 0
                        }
                    },
                    computed: {
                        isMobile: function() {
                            return this.$store.state.screen.width < 1024
                        }
                    },
                    watch: {
                        interactive: function() {
                            this.handleInteractivity()
                        },
                        "slide.direction": function(e) {
                            switch (e) {
                                case -1:
                                    this.slide.activeTl = this.slide.prevTl;
                                    break;
                                case 1:
                                    this.slide.activeTl = this.slide.nextTl;
                                    break;
                                default:
                                    this.slide.activeTl = null
                            }
                        },
                        activeImage: function(e) {
                            this.$emit("update:activeImage", e), this.setupSlideTimelines()
                        },
                        isZoomed: function(e) {
                            this.$eventHub.$emit("zoom:change", e), this.isMouseOver && this.$store.commit("cursor/setType", {
                                type: e ? "close" : "more"
                            }), e || 0 === this.activeImage || this.setActiveImage(0, !0), this.handleZoom()
                        }
                    },
                    mounted: function() {
                        this.handleInteractivity(), this.$eventHub.$on("zoom:set", this.onZoomSet)
                    },
                    methods: {
                        handleInteractivity: function() {
                            this.interactive ? this.setupImageEvents() : this.removeAllEvents()
                        },
                        handleZoom: function() {
                            this.isZoomed ? (this.setupSlideEvents(), this.setupSlideTimelines()) : (this.removeSlideEvents(), this.isMouseOver || this.$store.commit("cursor/clearType"))
                        },
                        setActiveImage: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            e !== this.activeImage && (t && this.$refs.images.switchImage(this.activeImage, e), this.activeImage = e)
                        },
                        onImageSet: function(e) {
                            this.setActiveImage(e, !0)
                        },
                        removeAllEvents: function() {
                            this.removeSlideEvents(), this.removeImageEvents(), window.removeEventListener("keydown", this.onEscapeKeydown)
                        },
                        setupSlideEvents: function() {
                            var e = this.$refs.imagesContainer;
                            e.addEventListener("touchstart", this.onSlideMouseDown), e.addEventListener("mousedown", this.onSlideMouseDown)
                        },
                        setupImageEvents: function() {
                            var e = this.$refs.imagesContainer;
                            e.addEventListener("mouseenter", this.onImagesMouseEnter), e.addEventListener("mouseleave", this.onImagesMouseLeave)
                        },
                        removeSlideEvents: function() {
                            var e = this.$refs.imagesContainer;
                            e.removeEventListener("touchstart", this.onSlideMouseDown), e.removeEventListener("mousedown", this.onSlideMouseDown), e.removeEventListener("mousemove", this.onSlideMouseMove), e.removeEventListener("touchmove", this.onSlideMouseMove), e.removeEventListener("mouseleave", this.onSlideMouseUp), e.removeEventListener("mouseup", this.onSlideMouseUp), e.removeEventListener("touchend", this.onSlideMouseUp)
                        },
                        removeImageEvents: function() {
                            var e = this.$refs.imagesContainer;
                            e.removeEventListener("mouseenter", this.onImagesMouseEnter), e.removeEventListener("mouseleave", this.onImagesMouseLeave)
                        },
                        setupSlideTimelines: function() {
                            var e = this.activeImage - 1 < 0 ? this.variation.images.length - 1 : this.activeImage - 1,
                                t = (this.activeImage + 1) % this.variation.images.length;
                            this.slide.prevTl = null, this.slide.nextTl = null, this.slide.prevTl = this.$refs.images.getAnimation(this.activeImage, e, !0), this.slide.nextTl = this.$refs.images.getAnimation(this.activeImage, t, !0)
                        },
                        onSlideMouseDown: function(e) {
                            if (!this.isMobile || this.isZoomed) {
                                this.slide.isDown = !0, this.slide.direction = null, this.slide.timestamp = performance.now(), this.slide.timeElapsed = 0;
                                var t = Object(r.a)(e).x;
                                this.slide.startX = t, this.slide.prevX = t, this.slide.deltaTotal = 0, this.$refs.imagesContainer.addEventListener("mousemove", this.onSlideMouseMove), this.$refs.imagesContainer.addEventListener("touchmove", this.onSlideMouseMove), this.$refs.imagesContainer.addEventListener("mouseleave", this.onSlideMouseUp), this.$refs.imagesContainer.addEventListener("mouseup", this.onSlideMouseUp), this.$refs.imagesContainer.addEventListener("touchend", this.onSlideMouseUp), this.slide.prevTl && this.slide.prevTl.pause(), this.slide.nextTl && this.slide.nextTl.pause()
                            }
                        },
                        onSlideMouseMove: function(e) {
                            if (this.slide.isDown) {
                                e.preventDefault(), e.stopPropagation();
                                var t = Object(r.a)(e).x;
                                this.slide.delta = t - this.slide.startX, this.slide.deltaTotal += Math.abs(t - this.slide.prevX), this.slide.prevX = t;
                                var o = this.$el,
                                    n = Math.round(1e3 * Math.abs(this.slide.delta / o.clientWidth)) / 1e3;
                                this.slide.progress = n, this.slide.direction = Math.sign(-this.slide.delta), this.updateSlide(this.slide.progress)
                            }
                        },
                        onSlideMouseUp: function() {
                            if (this.slide.isDown && (this.slide.isDown = !1, this.slide.timeElapsed = performance.now() - this.slide.timestamp, this.slide.timestamp = null, this.$refs.imagesContainer.removeEventListener("mousemove", this.onSlideMouseMove), this.$refs.imagesContainer.removeEventListener("touchmove", this.onSlideMouseMove), this.$refs.imagesContainer.removeEventListener("mouseup", this.onSlideMouseUp), this.$refs.imagesContainer.removeEventListener("mouseleave", this.onSlideMouseUp), this.$refs.imagesContainer.removeEventListener("touchend", this.onSlideMouseUp), this.slide.activeTl)) {
                                if (this.slide.activeTl.progress() < .3) this.slide.activeTl.reverse();
                                else {
                                    this.slide.activeTl.play();
                                    var e = this.activeImage - 1 < 0 ? this.variation.images.length - 1 : this.activeImage - 1,
                                        t = (this.activeImage + 1) % this.variation.images.length,
                                        o = 1 === this.slide.direction ? t : e;
                                    this.setActiveImage(o, !1)
                                }
                                this.slide.activeTl = null
                            }
                        },
                        onSlideMouseLeave: function(e) {},
                        updateSlide: function(progress) {
                            this.slide.activeTl && this.slide.activeTl.progress(progress)
                        },
                        onImagesMouseEnter: function() {
                            this.isMouseOver = !0, this.$store.commit("cursor/setType", {
                                type: this.isZoomed ? "close" : "more"
                            }), this.$store.commit("cursor/setTheme", {
                                theme: "dark"
                            })
                        },
                        onImagesMouseLeave: function() {
                            this.isMouseOver = !1, this.$store.commit("cursor/clearType"), this.$store.commit("cursor/clearTheme")
                        },
                        onZoomTriggerClick: function() {
                            this.interactive && (this.slide.timeElapsed > 200 || this.slide.deltaTotal > 30 || this.isZoomAnimating || this.toggleZoom())
                        },
                        onZoomSet: function(e) {
                            this.interactive && (this.isZoomed = !e, this.toggleZoom())
                        },
                        onEscapeKeydown: function(e) {
                            this.isZoomed && e.key && "escape" === e.key.toLowerCase() && this.toggleZoom()
                        },
                        toggleZoom: function() {
                            this.isZoomed = !this.isZoomed, this.isZoomed ? this.zoom() : this.unzoom()
                        },
                        zoom: function() {
                            var e = this,
                                t = 1,
                                o = 0,
                                n = {},
                                r = window.innerWidth,
                                c = window.innerHeight,
                                m = this.$el.clientWidth,
                                h = this.$el.clientHeight,
                                d = h / m;
                            if (this.isMobile) {
                                var v = document.getElementById("hm-body"),
                                    f = .65 * c,
                                    y = 0;
                                r * d > f ? y = (r - m * (t = f / h)) / 2 : t = r / m;
                                var w = this.$el.getBoundingClientRect().top - (h * t - h) / 2 + 1;
                                n.y = y / 2 - w + "px", document.documentElement.classList.add("is-header-hidden"), v.style.setProperty("--image-offset", y + "px"), v.style.setProperty("--image-scale", t)
                            } else {
                                var x = getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
                                    $ = parseInt(x, 10),
                                    I = .02 * r,
                                    M = Math.min(c - 2 * ($ + I), 1e3),
                                    E = (r - 2 * (document.querySelector(".c-hm-spec").clientWidth + .027 * r + 24)) / m,
                                    S = M / h;
                                t = Math.min(E, S), o = (h * t - h) / 2 * .85
                            }
                            this.isZoomAnimating = !0, this.$gsap.killTweensOf(this.activeStackItemEl), this.$eventHub.$emit("zoom:start"), this.disableSiteScroll(), this.$nextTick((function() {
                                e.$gsap.timeline({
                                    onComplete: function() {
                                        e.$eventHub.$emit("zoom:end"), window.addEventListener("keydown", e.onEscapeKeydown), e.isZoomAnimating = !1, e.isZoomed = !0
                                    }
                                }).to(document.getElementById("hm-titles"), {
                                    y: -o + "px",
                                    force3D: !0,
                                    duration: 1,
                                    ease: "power3.inOut"
                                }, 0).to(e.$el, l(l({
                                    x: 0,
                                    scale: t
                                }, n), {}, {
                                    duration: 1,
                                    ease: "power3.inOut"
                                }), 0).to(e.$el.querySelectorAll(".c-hm-image"), {
                                    scale: 1.4,
                                    duration: 1,
                                    ease: "power3.inOut"
                                }, 0).to([e.$refs.thumbnails.$el, e.$refs.back], {
                                    css: {
                                        "--scale": 1 / t,
                                        scale: 1 / t
                                    },
                                    duration: 1,
                                    ease: "power3.inOut",
                                    transformOrigin: "bottom center"
                                }, 0)
                            }))
                        },
                        unzoom: function() {
                            var e = this;
                            this.isZoomAnimating = !0, this.$gsap.killTweensOf(this.activeStackItemEl), this.$eventHub.$emit("zoom:start"), this.$nextTick((function() {
                                document.getElementById("hm-main").scrollTop = 0, e.$gsap.timeline({
                                    onComplete: function() {
                                        e.$eventHub.$emit("zoom:end"), window.removeEventListener("keydown", e.onEscapeKeydown), e.isZoomAnimating = !1, e.isZoomed = !1, document.documentElement.classList.remove("is-header-hidden"), e.enableSiteScroll()
                                    }
                                }).to(document.getElementById("hm-titles"), {
                                    y: 0,
                                    force3D: !0,
                                    duration: .6,
                                    ease: "power2.inOut"
                                }, 0).to(e.$el, {
                                    scale: 1,
                                    x: 0,
                                    y: 0,
                                    force3D: !0,
                                    duration: .6,
                                    ease: "power2.inOut"
                                }, 0).to(e.$el.querySelectorAll("img"), {
                                    scale: 1,
                                    duration: 1,
                                    ease: "power3.inOut"
                                }, 0).set(document.getElementById("hm-body"), {
                                    css: {
                                        "--image-scale": 1,
                                        "--image-offset": 0
                                    }
                                }, 0).to([e.$refs.thumbnails.$el, e.$refs.back], {
                                    css: {
                                        "--scale": 1,
                                        scale: 1
                                    },
                                    duration: .6,
                                    ease: "power2.inOut",
                                    transformOrigin: "bottom center"
                                }, 0)
                            }))
                        },
                        disableSiteScroll: function() {
                            document.documentElement.classList.add("is-scroll-disabled"), this.$eventHub.$emit("scrollDestroy")
                        },
                        enableSiteScroll: function() {
                            document.documentElement.classList.remove("is-scroll-disabled"), this.$eventHub.$emit("scroll:setup")
                        }
                    }
                },
                h = m,
                d = (o(562), o(2)),
                component = Object(d.a)(h, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "c-hm-variation absolute inset-0",
                        class: {
                            "is-active": e.active, "is-zoomed": e.isZoomed, "-focus": e.focus, "-out": Math.abs(e.distance) > 2
                        },
                        style: {
                            "--distance": e.distance,
                            "--distance-abs": Math.abs(e.distance)
                        },
                        attrs: {
                            "data-name": e.variation.model.nameShort + "-" + e.variation.id
                        }
                    }, [t("div", {
                        ref: "imagesContainer",
                        staticClass: "c-hm-variation_images-container",
                        class: {
                            "cursor-pointer": !e.slide.isDown && !e.isZoomed, "cursor-grab": !e.slide.isDown && e.isZoomed, "cursor-grabbing": e.slide.isDown
                        }
                    }, [t("HistoricalModelsImages", {
                        ref: "images",
                        attrs: {
                            images: e.variation.images,
                            "active-image": e.activeImage
                        }
                    }), e._v(" "), e.focus ? t("button", {
                        staticClass: "c-hm-variation_zoom-cta",
                        on: {
                            click: e.onZoomTriggerClick
                        }
                    }, [t("span", [e._v("View more")])]) : e._e()], 1), e._v(" "), t("HistoricalModelsImagesThumbnails", {
                        ref: "thumbnails",
                        attrs: {
                            active: e.interactive,
                            images: e.variation.images,
                            "active-image": e.activeImage
                        },
                        on: {
                            "image:set": e.onImageSet
                        }
                    }), e._v(" "), t("div", {
                        ref: "back",
                        staticClass: "c-hm-variation_back",
                        on: {
                            click: e.toggleZoom
                        }
                    }, [t("svg-icon", {
                        staticClass: "-scale-x-100",
                        attrs: {
                            name: "arrow-right"
                        }
                    })], 1)], 1)
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                HistoricalModelsImages: o(546).default,
                HistoricalModelsImagesThumbnails: o(547).default
            })
        },
        531: function(e, t, o) {
            var content = o(563);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(29).default)("43e1ab0d", content, !0, {
                sourceMap: !1
            })
        },
        546: function(e, t, o) {
            "use strict";
            o.r(t);
            o(143), o(441), o(36), o(21), o(6);
            var n = {
                    props: {
                        images: {
                            type: Array,
                            required: !0,
                            default: function() {
                                return []
                            }
                        },
                        activeImage: {
                            type: Number,
                            default: 0
                        }
                    },
                    mounted: function() {
                        this.layersZIndex = 11
                    },
                    methods: {
                        getAnimation: function(e, t, o) {
                            var n = this,
                                r = 1 === Math.abs(e - t),
                                c = Math.sign(t - e);
                            r || (c = -c);
                            var l = this.$refs.images[e].$el,
                                m = this.$refs.images[t].$el;
                            if (l && m) {
                                var h = this.$refs.images.filter((function(image, o) {
                                        return o !== e && o !== t
                                    })).map((function(image) {
                                        return image.$el
                                    })),
                                    d = this.$gsap.timeline({
                                        paused: !0,
                                        onComplete: function() {
                                            n.$gsap.set(l, {
                                                xPercent: 0
                                            })
                                        }
                                    });
                                return h && h.length && d.set(h, {
                                    opacity: 0
                                }), d.set([l, m], {
                                    opacity: 1
                                }), d.set(l, {
                                    xPercent: 0,
                                    zIndex: this.layersZIndex + 1
                                }), d.set(m, {
                                    clipPath: "inset(0% 100% 0% 0%)",
                                    xPercent: 10 * c,
                                    zIndex: this.layersZIndex + 2
                                }, 0), d.to(l, {
                                    xPercent: 10 * -c,
                                    immediateRender: !1,
                                    duration: 1,
                                    force3D: !0,
                                    ease: o ? "none" : "power2.in"
                                }, 0), d.to(m, {
                                    clipPath: "inset(0% 0% 0% 0%)",
                                    xPercent: 0,
                                    duration: 1,
                                    force3D: !0,
                                    immediateRender: !1,
                                    ease: o ? "none" : "power4.inOut"
                                }, 0), this.layersZIndex += 2, d
                            }
                        },
                        getAnimationOpacity: function(e, t, o) {
                            var n = this,
                                r = this.$refs.images[e].$el,
                                c = this.$refs.images[t].$el;
                            if (r && c) {
                                var l = this.$refs.images.filter((function(image, o) {
                                        return o !== e && o !== t
                                    })).map((function(image) {
                                        return image.$el
                                    })),
                                    m = this.$gsap.timeline({
                                        paused: !0,
                                        onComplete: function() {
                                            n.$gsap.set(r, {
                                                xPercent: 0
                                            })
                                        }
                                    });
                                return l && l.length && m.set(l, {
                                    opacity: 0
                                }), m.set(r, {
                                    opacity: 1,
                                    zIndex: this.layersZIndex + 1
                                }), m.set(c, {
                                    opacity: 0,
                                    zIndex: this.layersZIndex + 2
                                }, 0), m.to(c, {
                                    opacity: 1,
                                    duration: 1,
                                    ease: "linear"
                                }, 0), this.layersZIndex += 2, m
                            }
                        },
                        switchImage: function(e, t, o) {
                            var n = o ? this.getAnimationOpacity(e, t) : this.getAnimation(e, t);
                            n && n.play()
                        }
                    }
                },
                r = (o(505), o(2)),
                component = Object(r.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "c-hm-images-container"
                    }, e._l(e.images, (function(image, o) {
                        return t("nuxt-img", {
                            key: image,
                            ref: "images",
                            refInFor: !0,
                            staticClass: "c-hm-image u-clip-path-fix",
                            class: {
                                "-active": e.activeImage === o
                            },
                            attrs: {
                                fetchpriority: "high",
                                src: image,
                                format: "webp",
                                fit: "outside",
                                quality: "80",
                                width: 1200,
                                height: 1800
                            }
                        })
                    })), 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        547: function(e, t, o) {
            "use strict";
            o.r(t);
            o(143);
            var n = {
                    props: {
                        active: {
                            type: Boolean,
                            required: !0
                        },
                        images: {
                            type: Array,
                            required: !0
                        },
                        activeImage: {
                            type: Number,
                            default: 0
                        }
                    },
                    methods: {}
                },
                r = (o(507), o(2)),
                component = Object(r.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "c-hm-thumbnails",
                        class: {
                            "-active": e.active
                        },
                        style: {
                            "--thumbnails-count": e.images.length
                        }
                    }, [t("div", {
                        staticClass: "c-hm-thumbnails_inner"
                    }, e._l(e.images, (function(image, o) {
                        return t("div", {
                            key: image,
                            staticClass: "c-hm-thumbnail",
                            class: {
                                "-active": e.activeImage === o
                            },
                            on: {
                                click: function(t) {
                                    return e.$emit("image:set", o)
                                }
                            }
                        }, [t("nuxt-img", {
                            staticClass: "c-hm-thumbnail_image u-clip-path-fix",
                            attrs: {
                                src: image,
                                format: "webp",
                                fit: "outside",
                                quality: "80",
                                width: 400,
                                height: 600
                            }
                        }), e._v(" "), t("svg-icon", {
                            ref: "mark",
                            refInFor: !0,
                            staticClass: "c-hm-thumbnail_shape",
                            attrs: {
                                name: "shape-outline"
                            }
                        })], 1)
                    })), 0)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        562: function(e, t, o) {
            "use strict";
            o(531)
        },
        563: function(e, t, o) {
            var n = o(28)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".c-hm-variation{--scale:1;--zoom-scale:1;--offset-x:0;--offset-y:0;filter:grayscale(100%);transform:translate3d(0,0,0) scale(calc(1*1));transform:translate3d(var(--offset-x,0),var(--offset-y,0),0) scale(calc(var(--scale, 1)*var(--zoom-scale, 1)));will-change:transform;z-index:calc(50 - 0);z-index:calc(50 - var(--distance-abs, 0))}.c-hm-variation.-out{opacity:0;visibility:hidden}.c-hm-variation:not(.is-active){display:none}.c-hm-variation.-focus{filter:grayscale(0)}.is-mobile .c-hm-variation:not(.-focus){transition:opacity 1s linear .6s}.is-mobile.is-zoomed .c-hm-variation:not(.-focus){opacity:0!important;pointer-events:none;transition-duration:0s;transition-delay:0s}.c-hm-variation_images-container{position:absolute;top:0px;right:0px;bottom:0px;left:0px;z-index:10}.c-hm-variation_image{position:absolute;top:0px;left:0px;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;z-index:9}.c-hm-variation_image.-interactive{z-index:10}.c-hm-variation-nav{position:absolute;bottom:0.5rem;left:0px}@media (min-width: 768px){.c-hm-variation-nav{bottom:1rem}}.c-hm-variation-nav{display:flex;width:100%;justify-content:center}.c-hm-variation-nav > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.1vw * var(--tw-space-x-reverse));margin-left:calc(1.1vw * calc(1 - var(--tw-space-x-reverse)))}@media (min-width: 768px){.c-hm-variation-nav > :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}}.c-hm-variation-nav{z-index:20;transform-origin:bottom center;transform:scale(calc(1/1));transform:scale(calc(1/var(--zoom-scale, 1)))}.c-hm-variation-nav_btn{--stroke-width:3px}.is-mobile .c-hm-variation-nav{transition:opacity .2s linear}.is-mobile:not(.is-zoomed) .c-hm-variation-nav{opacity:0}.is-mobile.is-zoomed .c-hm-variation-nav{opacity:1;transition-duration:.6s;transition-delay:1s}.c-hm-variation_back{position:absolute;top:1rem;left:1rem;width:1.5rem;z-index:20;opacity:0;pointer-events:none;transition:opacity .2s linear}.c-hm-variation_back::before{float:left;padding-top:50%;content:''}.c-hm-variation_back::after{display:block;content:'';clear:both}.c-hm-variation_back:after{content:\"\";position:absolute;top:-0.5rem;right:-0.5rem;bottom:-0.5rem;left:-0.5rem}.c-hm-variation_back svg{position:absolute;top:0px;right:0px;bottom:0px;left:0px;height:100%;width:100%}.c-hm-variation_back .c-hm-variation:not(.-interactive){display:none}.is-mobile.is-zoomed .c-hm-variation_back{opacity:1;pointer-events:auto;transition-duration:.6s;transition-delay:1s}@media(pointer:coarse){.c-hm-variation_zoom-cta{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(37 35 34 / var(--tw-text-opacity));border-width:1px;--tw-border-opacity:1;border-color:rgb(37 35 34 / var(--tw-border-opacity));border-radius:1rem;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:.75rem;text-transform:uppercase;width:-webkit-max-content;width:-moz-max-content;width:max-content;opacity:1;transition:opacity .2s linear,transform .4s cubic-bezier(.165,.84,.44,1);position:absolute;bottom:1.5rem;left:50%;transform:translate3d(-50%,0,0);z-index:51}.is-zoomed .c-hm-variation_zoom-cta{opacity:0;visibility:hidden;transform:translate3d(-50%,1rem,0);transition-duration:.6s;transition-delay:1s}}@media(pointer:fine){.c-hm-variation_zoom-cta{position:absolute;top:0px;right:0px;bottom:0px;left:0px}.c-hm-variation_zoom-cta span{display:none}}", ""]), n.locals = {}, e.exports = n
        }
    }
]);