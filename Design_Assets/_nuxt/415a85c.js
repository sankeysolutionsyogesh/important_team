(window.webpackJsonp = window.webpackJsonp || []).push([
    [3, 11, 19, 57, 62, 63], {
        427: function(e, t, n) {
            var content = n(431);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(29).default)("7451f126", content, !0, {
                sourceMap: !1
            })
        },
        428: function(e, t, n) {
            "use strict";
            n.r(t);
            n(143);
            var r = {
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
                o = (n(430), n(2)),
                component = Object(o.a)(r, (function() {
                    var e = this;
                    return (0, e._self._c)("span", {
                        staticClass: "a-fade a-item",
                        attrs: {
                            "data-delay": e.delay,
                            "data-direction": e.direction
                        }
                    }, [e._t("default")], 2)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        430: function(e, t, n) {
            "use strict";
            n(427)
        },
        431: function(e, t, n) {
            var r = n(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".a-fade{display:block;will-change:opacity,transform}", ""]), r.locals = {}, e.exports = r
        },
        433: function(e, t, n) {
            "use strict";
            n.r(t);
            n(48), n(6), n(15);
            var r = {
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
                        var e = this;
                        this.setupTimeout = setTimeout((function() {
                            e.setupTl()
                        }), 600)
                    },
                    methods: {
                        setupTl: function() {
                            var e = this;
                            this.tl = this.$gsap.timeline({
                                scrollTrigger: {
                                    toggleActions: "play none none reset",
                                    trigger: this.$el,
                                    start: this.start
                                }
                            }), this.$el.querySelectorAll(".a-item").forEach((function(t, n) {
                                var r = t.dataset.delay || 0;
                                (t.classList.contains("a-image") && e.tl.fadeImage(t, {}, r), t.classList.contains("a-fade")) && ("right" === t.dataset.direction ? e.tl.fadeRight(t, {}, r) : e.tl.fadeLeft(t, {}, r));
                                t.classList.contains("a-line") && e.tl.slideLines(t, {}, r)
                            }))
                        }
                    }
                },
                o = n(2),
                component = Object(o.a)(r, (function() {
                    return (0, this._self._c)("div", [this._t("default")], 2)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        443: function(e, t, n) {
            var content = n(457);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(29).default)("d498793a", content, !0, {
                sourceMap: !1
            })
        },
        456: function(e, t, n) {
            "use strict";
            n(443)
        },
        457: function(e, t, n) {
            var r = n(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, "@-webkit-keyframes loaderSpinner{0%{transform:rotate(0deg)}50%{color:#fff}to{transform:rotate(1turn)}}@keyframes loaderSpinner{0%{transform:rotate(0deg)}50%{color:#fff}to{transform:rotate(1turn)}}.o-spinner{display:block;border-color:currentcolor currentcolor transparent transparent;border-style:solid;border-width:.125rem;border-radius:50%;pointer-events:none;transform:translateZ(0);transition:opacity .6s cubic-bezier(.38,.005,.215,1);-webkit-animation:loaderSpinner 1.2s linear infinite;animation:loaderSpinner 1.2s linear infinite;z-index:1}", ""]), r.locals = {}, e.exports = r
        },
        460: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {},
                o = (n(456), n(2)),
                component = Object(o.a)(r, (function() {
                    return (0, this._self._c)("div", {
                        staticClass: "o-spinner"
                    })
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        470: function(e, t, n) {
            "use strict";

            function r(e) {
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
            n.d(t, "a", (function() {
                return r
            }))
        },
        476: function(e, t, n) {
            var content = n(516);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(29).default)("4c86c68a", content, !0, {
                sourceMap: !1
            })
        },
        494: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(2),
                component = Object(r.a)({}, (function() {
                    var e = this._self._c;
                    return e("div", {
                        staticClass: "c-player_spinner"
                    }, [e("SiteSpinner", {
                        staticClass: "text-white w-12 h-12"
                    })], 1)
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                SiteSpinner: n(460).default
            })
        },
        515: function(e, t, n) {
            "use strict";
            n(476)
        },
        516: function(e, t, n) {
            var r = n(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".c-player{-webkit-tap-highlight-color:rgba(0,0,0,0)}.c-player:not(.is-fullscreen){position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w:16}.c-player:not(.is-fullscreen) > *{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0}.c-player:not(.is-fullscreen){--tw-aspect-h:9}.c-player.-fullscreen-only:not(.is-fullscreen){display:none}.c-player_cover{position:absolute;top:0px;right:0px;bottom:0px;left:0px;height:100%;width:100%;transition:opacity .6s linear;pointer-events:none;z-index:5}.c-player_cover-image{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.is-started .c-player_cover{opacity:0}.c-player_video iframe,.c-player_video video{background:#000}.c-player_video iframe, .c-player_video video{position:absolute;top:0px;right:0px;bottom:0px;left:0px;height:100%;width:100%}.c-player_ui{-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:10}.c-player_spinner{position:absolute;top:50%;left:50%;--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.c-player_backdrop{cursor:pointer;position:absolute;top:0px;right:0px;bottom:0px;left:0px;z-index:10}.-progress-hovered .c-player_backdrop{cursor:col-resize}.c-player_controls{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));display:flex;align-items:center;justify-content:space-between;padding-left:1rem;padding-right:1rem;padding-top:1.25rem;padding-bottom:1rem;position:absolute;left:0px;right:0px;bottom:0px;z-index:10}.c-player_time{font-size:1rem;letter-spacing:0.04em;line-height:1}.c-player_fullscreen{width:.625rem;height:.6875rem}.c-player_progress{background:hsla(0,0%,100%,.2);overflow:hidden;transform-origin:left bottom;position:absolute;top:0;left:0;right:0}.c-player_progress-inner{height:0.25rem;min-height:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));transform:scaleX(0);transform-origin:left center}.-progress-hovered .c-player_progress{cursor:col-resize}", ""]), r.locals = {}, e.exports = r
        },
        532: function(e, t, n) {
            var content = n(565);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(29).default)("e0581d6e", content, !0, {
                sourceMap: !1
            })
        },
        539: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(13);
            n(70), n(52);
            var o = n(470),
                l = {
                    props: {
                        type: {
                            type: String,
                            default: "file"
                        },
                        code: {
                            type: String,
                            default: ""
                        },
                        url: {
                            type: String,
                            default: ""
                        },
                        file: {
                            type: Object,
                            default: null
                        },
                        coverImage: {
                            type: String,
                            default: null
                        },
                        useInterface: {
                            type: Boolean,
                            default: !0
                        },
                        useControls: {
                            type: Boolean,
                            default: !0
                        },
                        fullscreenOnly: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            volume: 0,
                            duration: this.embed ? this.embed.duration : 0,
                            seconds: 0,
                            playing: !1,
                            isStarted: !1,
                            isPaused: !0,
                            isBuffering: !1,
                            isProgressHovered: !1,
                            isProgressDown: !1,
                            isInView: !1,
                            isMuted: !1,
                            isFullscreen: !1,
                            title: ""
                        }
                    },
                    computed: {
                        videoComponent: function() {
                            return "vimeo" === this.type ? "VideoVimeo" : "youtube" === this.type ? "VideoYouTube" : "VideoFile"
                        },
                        cursorType: function() {
                            return this.playing ? "pause" : "play"
                        },
                        percent: function() {
                            return this.duration ? this.seconds / this.duration : 0
                        },
                        currentTimeReadable: function() {
                            var e = Math.floor(this.seconds / 60),
                                t = Math.floor(this.seconds - 60 * e),
                                n = e < 10 ? "0".concat(e) : e,
                                r = t < 10 ? "0".concat(t) : t;
                            return "".concat(n, ":").concat(r)
                        },
                        durationReadable: function() {
                            var e = Math.floor(this.duration / 60),
                                t = Math.floor(this.duration - 60 * e),
                                n = e < 10 ? "0".concat(e) : e,
                                r = t < 10 ? "0".concat(t) : t;
                            return "".concat(n, ":").concat(r)
                        },
                        soundIcon: function() {
                            return this.isMuted ? "speaker-x" : "speaker-wave"
                        }
                    },
                    beforeDestroy: function() {
                        this.destroy()
                    },
                    mounted: function() {},
                    methods: {
                        enterFullscreen: function() {
                            this.$refs.viewer.requestFullscreen ? this.$refs.viewer.requestFullscreen() : this.$refs.viewer.webkitRequestFullScreen && this.$refs.viewer.webkitRequestFullScreen()
                        },
                        switchToLandscape: function() {
                            window.screen.orientation && window.screen.orientation.lock("landscape")
                        },
                        unlockOrientation: function() {
                            window.screen.orientation && window.screen.orientation.unlock()
                        },
                        visiblityChanged: function(e) {
                            this.isInView = e, e || this.pause()
                        },
                        onProgressMouseDown: function(e) {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!t.isProgressDown) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            return t.isProgressDown = !0, n.next = 5, t.pause();
                                        case 5:
                                            t.computePercent(e), document.addEventListener("mousemove", t.onProgressMouseMove), document.addEventListener("touchmove", t.onProgressMouseMove), document.addEventListener("mouseup", t.onProgressMouseUp), document.addEventListener("touchend", t.onProgressMouseUp);
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        onProgressMouseMove: function(e) {
                            this.isProgressDown && this.computePercent(e)
                        },
                        onProgressMouseUp: function(e) {
                            this.isProgressDown && (this.isProgressDown = !1, this.seek(this.seconds), document.removeEventListener("mousemove", this.onProgressMouseMove), document.removeEventListener("touchmove", this.onProgressMouseMove), document.removeEventListener("mouseup", this.onProgressMouseUp), document.removeEventListener("touchend", this.onProgressMouseUp))
                        },
                        computePercent: function(e) {
                            var t = this.$refs.progressBar.getBoundingClientRect(),
                                n = t.left,
                                r = t.width,
                                l = Object(o.a)(e),
                                c = Math.min(Math.max(0, (l.x - n) / r), .9999);
                            this.seconds = this.duration * c
                        },
                        destroy: function() {
                            this.removeEvents(), this.player = void 0
                        },
                        toggle: function() {
                            this.isPaused ? this.play() : this.pause()
                        },
                        updateCursor: function() {
                            this.hover && this.$store.commit("cursor/setType", {
                                type: this.cursorType
                            })
                        },
                        onMouseEnter: function() {
                            this.isProgressDown || (this.hover = !0, this.$store.commit("cursor/setType", {
                                type: this.cursorType
                            }))
                        },
                        onMouseLeave: function() {
                            this.hover = !1, this.$store.commit("cursor/clearType")
                        },
                        onFullscreenChange: function() {
                            document.fullscreenElement ? this.isFullscreen = !0 : (this.isFullscreen = !1, this.unlockOrientation(), this.pause())
                        },
                        onPlay: function(e) {
                            this.playing = !0, this.isPaused = !1, this.isStarted = !0, this.updateCursor()
                        },
                        onPause: function(e) {
                            this.playing = !1, this.isPaused = !0, this.updateCursor()
                        },
                        onMetadata: function(e) {
                            var title = e.title,
                                t = e.duration;
                            void 0 !== this.title && (this.title = title), void 0 !== this.duration && (this.duration = t)
                        },
                        seek: function(e) {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var r, o;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (null === (r = t.$refs) || void 0 === r || null === (o = r.video) || void 0 === o || !o.seek) {
                                                n.next = 3;
                                                break
                                            }
                                            return n.next = 3, t.$refs.video.seek(e);
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        play: function(e) {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var r, o;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if ("undefined" != typeof window && window.matchMedia && window.matchMedia("(pointer: fine)").matches || t.isFullscreen, null === (r = t.$refs) || void 0 === r || null === (o = r.video) || void 0 === o || !o.play) {
                                                n.next = 4;
                                                break
                                            }
                                            return n.next = 4, t.$refs.video.play(e);
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        pause: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (null === (n = e.$refs) || void 0 === n || null === (r = n.video) || void 0 === r || !r.pause) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.next = 3, e.$refs.video.pause();
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        toggleSound: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.isMuted = !e.isMuted, t.next = 3, e.setVolume(e.isMuted ? 0 : 1);
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        setVolume: function(e) {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var r, o;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (null === (r = t.$refs) || void 0 === r || null === (o = r.video) || void 0 === o || !o.setVolume) {
                                                n.next = 3;
                                                break
                                            }
                                            return n.next = 3, t.$refs.video.setVolume(e);
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        onPlayerReady: function() {
                            this.addEvents()
                        },
                        onTimeUpdate: function(e) {
                            this.isProgressDown || void 0 !== this.seconds && (this.seconds = e)
                        },
                        onBufferStart: function() {
                            this.isBuffering = !0
                        },
                        onBufferEnd: function() {
                            this.isBuffering = !1
                        },
                        addEvents: function() {
                            this.$refs.viewer.addEventListener("fullscreenchange", this.onFullscreenChange)
                        },
                        removeEvents: function() {
                            this.$refs.viewer.removeEventListener("fullscreenchange", this.onFullscreenChange), document.removeEventListener("mousemove", this.onProgressMouseMove), document.removeEventListener("touchmove", this.onProgressMouseMove), document.removeEventListener("mouseup", this.onProgressMouseUp), document.removeEventListener("touchend", this.onProgressMouseUp)
                        }
                    }
                },
                c = (n(515), n(2)),
                component = Object(c.a)(l, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        directives: [{
                            name: "observe-visibility",
                            rawName: "v-observe-visibility",
                            value: e.visiblityChanged,
                            expression: "visiblityChanged"
                        }],
                        ref: "viewer",
                        staticClass: "c-player",
                        class: {
                            "is-fullscreen": e.isFullscreen, "is-started": e.isStarted, "-fullscreen-only": e.fullscreenOnly
                        }
                    }, [e.coverImage ? t("div", {
                        staticClass: "c-player_cover"
                    }, [t("img", {
                        staticClass: "c-player_cover-image",
                        attrs: {
                            src: e.coverImage
                        }
                    })]) : e._e(), e._v(" "), e.useInterface ? t("div", {
                        staticClass: "c-player_ui",
                        class: {
                            "-buffering": e.isBuffering, "-progress-hovered": e.isProgressHovered || e.isProgressDown, "-progress-down": e.isProgressDown
                        }
                    }, [t("div", {
                        staticClass: "c-player_backdrop",
                        on: {
                            click: e.toggle,
                            mouseenter: e.onMouseEnter,
                            mouseleave: e.onMouseLeave
                        }
                    }), e._v(" "), t("VideoPlayerSpinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isBuffering,
                            expression: "isBuffering"
                        }]
                    }), e._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.useControls,
                            expression: "useControls"
                        }],
                        staticClass: "c-player_controls"
                    }, [t("div", {
                        ref: "progressBar",
                        staticClass: "c-player_progress",
                        on: {
                            touchstart: e.onProgressMouseDown,
                            mousedown: e.onProgressMouseDown,
                            mouseenter: function(t) {
                                e.isProgressHovered = !0
                            },
                            mouseleave: function(t) {
                                e.isProgressHovered = !1
                            }
                        }
                    }, [t("div", {
                        staticClass: "c-player_progress-inner",
                        style: {
                            transform: "scaleX(".concat(e.percent, ")")
                        }
                    })]), e._v(" "), t("div", {
                        staticClass: "flex space-x-4 items-center"
                    }, [t("button", {
                        staticClass: "c-player_play-button",
                        on: {
                            click: e.toggle
                        }
                    }, [t("svg-icon", {
                        staticClass: "w-4 h-4",
                        attrs: {
                            name: e.isPaused ? "play" : "pause"
                        }
                    })], 1)]), e._v(" "), t("div", {
                        staticClass: "flex space-x-4 items-start"
                    }, [t("div", {
                        staticClass: "c-player_time"
                    }, [e._v("\n          " + e._s(e.currentTimeReadable) + "\n        ")]), e._v(" "), t("div", {
                        staticClass: "c-player_sound"
                    }, [t("button", {
                        staticClass: "c-player_sound-button",
                        on: {
                            click: e.toggleSound
                        }
                    }, [t("svg-icon", {
                        staticClass: "w-4 h-4",
                        attrs: {
                            name: e.isMuted ? "speaker-x" : "speaker-wave"
                        }
                    })], 1)])])])], 1) : e._e(), e._v(" "), t("div", {
                        staticClass: "c-player_video"
                    }, [t(e.videoComponent, {
                        ref: "video",
                        tag: "component",
                        attrs: {
                            file: e.file,
                            code: e.code,
                            url: e.url
                        },
                        on: {
                            ready: e.onPlayerReady,
                            metadata: e.onMetadata,
                            timeupdate: e.onTimeUpdate,
                            play: e.onPlay,
                            pause: e.onPause,
                            bufferstart: e.onBufferStart,
                            bufferend: e.onBufferEnd
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                VideoPlayerSpinner: n(494).default
            })
        },
        564: function(e, t, n) {
            "use strict";
            n(532)
        },
        565: function(e, t, n) {
            var r = n(28)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".o-player-block{position:relative;margin-top:1.5rem;margin-bottom:1.5rem;margin-left:auto;margin-right:auto;width:62.5vw}.o-player-block_inner{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w:16}.o-player-block_inner > *{position:absolute;height:100%;width:100%;top:0;right:0;bottom:0;left:0}.o-player-block_inner{--tw-aspect-h:9}.o-player-container{z-index:30}.o-player-container.fs{position:fixed;top:50%;left:50%;width:90vw;height:50.625vw;transform:translate3d(-50%,-50%,0)}.c-hpvideo-text, .o-player-block{margin-left:auto;margin-right:auto;width:62.5vw}", ""]), r.locals = {}, e.exports = r
        },
        595: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(244),
                o = {
                    data: function() {
                        return {
                            isVideoActive: !1
                        }
                    },
                    watch: {
                        isVideoActive: function(e) {
                            var t, n, r;
                            e ? (this.$eventHub.$emit("scrollLock"), document.documentElement.classList.add("is-header-hidden"), null === (t = this.$refs.player) || void 0 === t || t.play(), null === (n = this.$refs.player) || void 0 === n || n.setVolume(1), this.positionPlayer()) : (this.$eventHub.$emit("scrollUnlock"), document.documentElement.classList.remove("is-header-hidden"), null === (r = this.$refs.player) || void 0 === r || r.setVolume(0), this.positionPlayer())
                        }
                    },
                    mounted: function() {
                        this.addEvents()
                    },
                    beforeDestroy: function() {
                        this.removeEvents()
                    },
                    methods: {
                        setVideoActive: function() {
                            this.isVideoActive = !0
                        },
                        setVideoUnactive: function() {
                            this.isVideoActive = !1
                        },
                        positionPlayer: function() {
                            var e = this.$refs.playerContainer;
                            r.a.killFlipsOf(e);
                            var t = r.a.getState(e);
                            e.classList.toggle("fs", this.isVideoActive), this.$gsap.set(e, {
                                clearProps: "transform"
                            }), r.a.from(t, {
                                scale: !0,
                                absolute: !0,
                                simple: !0,
                                ease: "power3.out",
                                duration: 1
                            })
                        },
                        handleKeydown: function(e) {
                            27 === e.keyCode && this.setVideoUnactive()
                        },
                        removeEvents: function() {
                            document.removeEventListener("keydown", this.handleKeydown)
                        },
                        addEvents: function() {
                            document.addEventListener("keydown", this.handleKeydown)
                        },
                        onVisibilityChanged: function(e) {
                            var t, n, r;
                            e ? (null === (t = this.$refs.player) || void 0 === t || t.play(), null === (n = this.$refs.player) || void 0 === n || n.setVolume(0)) : null === (r = this.$refs.player) || void 0 === r || r.pause()
                        }
                    }
                },
                l = (n(564), n(2)),
                component = Object(l.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("section", {
                        staticClass: "text-[#5A5553] my-48"
                    }, [t("AnimationTrigger", [t("AnimationFade", [t("h2", {
                        staticClass: "text-center text-[5vw] lg:text-5xl font-display leading-none uppercase tracking-basic"
                    }, [e._v("\n        DANIEL ROTH TOLD BY MR. ROTH\n      ")])])], 1), e._v(" "), t("div", {
                        directives: [{
                            name: "observe-visibility",
                            rawName: "v-observe-visibility",
                            value: {
                                callback: e.onVisibilityChanged
                            },
                            expression: "{\n      callback: onVisibilityChanged,\n    }"
                        }],
                        staticClass: "o-player-block"
                    }, [t("div", {
                        staticClass: "o-player-block_inner"
                    }, [t("div", {
                        ref: "playerContainer",
                        staticClass: "o-player-container",
                        attrs: {
                            "data-flip-id": "player"
                        }
                    }, [t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isVideoActive,
                            expression: "!isVideoActive"
                        }, {
                            name: "cursor",
                            rawName: "v-cursor",
                            value: "play",
                            expression: "'play'"
                        }],
                        staticClass: "cursor-pointer absolute inset-0 z-20",
                        on: {
                            click: e.setVideoActive
                        }
                    }), e._v(" "), t("VideoPlayer", {
                        ref: "player",
                        attrs: {
                            type: "vimeo",
                            url: "https://player.vimeo.com/video/809057829?h=6b47aaa04a",
                            "use-controls": e.isVideoActive
                        }
                    })], 1)])]), e._v(" "), t("div", {
                        directives: [{
                            name: "cursor",
                            rawName: "v-cursor",
                            value: "close",
                            expression: "'close'"
                        }],
                        staticClass: "fixed inset-0 z-20 bg-true-black bg-opacity-50 transition-all duration-500 ease-in-out",
                        class: {
                            "opacity-100 pointer-events-auto": e.isVideoActive, "opacity-0 pointer-events-none": !e.isVideoActive
                        },
                        on: {
                            click: e.setVideoUnactive
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                AnimationFade: n(428).default,
                AnimationTrigger: n(433).default,
                VideoPlayer: n(539).default
            })
        }
    }
]);