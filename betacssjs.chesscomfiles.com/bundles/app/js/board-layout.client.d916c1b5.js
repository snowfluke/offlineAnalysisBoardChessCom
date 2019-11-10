! function(e) {
    var t = {};

    function __webpack_require__(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, __webpack_require__), n.l = !0, n.exports
    }
    __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, o) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, __webpack_require__.t = function(e, t) {
        if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (__webpack_require__.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) __webpack_require__.d(o, n, function(t) {
                return e[t]
            }.bind(null, n));
        return o
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function getDefault() {
            return e.default
        } : function getModuleExports() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "/bundles/app/js/", __webpack_require__(__webpack_require__.s = 241)
}({
    16: function(e, t, o) {
        e.exports = o(21)(15)
    },
    21: function(e, t) {
        e.exports = coreDLL
    },
    241: function(e, t, o) {
        o(372), e.exports = o(242)
    },
    242: function(e, t, o) {},
    372: function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o(16),
            r = o.n(n),
            i = null;

        function getSavedSize() {
            if (null === i || isNaN(i)) try {
                i = Number(window.localStorage.getItem("boardLayoutSize"))
            } catch (e) {
                i = null
            }
            return i
        }

        function removeSize() {
            i = null;
            try {
                window.localStorage.removeItem("boardLayoutSize")
            } catch (e) {}
        }
        var a, s, u = o(56);

        function dispatchResize() {
            window.dispatchEvent(Object(u.a)())
        }

        function resetCustomResize(e) {
            var t = e.boardElement,
                o = e.doubleBoard,
                n = t.parentNode;
            if (o) return a = null, void(n.style.maxWidth = "");
            (s = getSavedSize()) && (a = Number(n.offsetWidth), s = Math.min(a, s), n.style.maxWidth = "".concat(s, "px"))
        }

        function handleCustomResize(e) {
            var t, o, n, r = e.controlsElement,
                u = e.boardElement.parentNode;

            function setWidth(e) {
                u.style.maxWidth = e
            }

            function onResize(e) {
                s = Math.min(a, e), setWidth("".concat(s, "px")), dispatchResize()
            }

            function onMouseMove(e) {
                e.preventDefault(), e.stopPropagation(), onResize(o + (e.pageX - t))
            }

            function onMouseUp(e) {
                e.preventDefault(), e.stopPropagation(), n.classList.remove("resizing"), document.removeEventListener("mousemove", onMouseMove), document.removeEventListener("mouseup", onMouseUp), s < a ? function saveSize(e) {
                    i = e;
                    try {
                        window.localStorage.setItem("boardLayoutSize", e)
                    } catch (e) {}
                }(s) : (removeSize(), setWidth(""))
            }
            resetCustomResize(e), dispatchResize(), r && r.addEventListener("mousedown", function onMouseDown(e) {
                /resize/.test(e.target.className) && (e.preventDefault(), e.stopPropagation(), n = e.target, t = e.pageX, o = Number(u.offsetWidth), setWidth(""), a = Number(u.offsetWidth), onResize(s || a), n.classList.add("resizing"), document.addEventListener("mousemove", onMouseMove), document.addEventListener("mouseup", onMouseUp))
            })
        }
        var d = "The aspect ratio must be >= 1. E.g. square => 1, 16:9 => 1.78";

        function getRoundedBoardSize(e) {
            var t = e.aspectRatio,
                o = e.height,
                n = e.width;
            if (t < 1) throw d;
            var r = Math.max(o, 200),
                i = Math.max(n, 200),
                a = i / r < t,
                s = a ? i : r * t,
                u = a ? i / t : r;
            if (t > 1) return s;
            var c = Math.min(s, u);
            return 8 * Math.floor(c / 8)
        }

        function resetLayoutFocus(e) {
            var t = e.playerElements;
            t[1] && (t[1].style.top = "")
        }

        function resetLayoutAnalysis(e) {
            var t = e.boardElement,
                o = e.playerElements;
            t.parentNode.style.flex = "", o.forEach(function(e) {
                e.style.width = "", e.style.transform = ""
            })
        }

        function handleLayoutResize(e) {
            var t = e.aspectRatio,
                o = e.boardElement,
                n = e.withAnalysis,
                r = e.playerElements,
                i = e.outsideCoords,
                a = e.focusMode,
                s = e.doubleBoard,
                u = o.parentNode;
            o.style.width = "", o.style.height = "", o.style.minWidth = "", o.style.minHeight = "", o.style.paddingBottom = "", u.style.paddingLeft = "", n && resetLayoutAnalysis(e);
            var d = o.getBoundingClientRect(),
                c = u.getBoundingClientRect(),
                l = parseInt(window.getComputedStyle(u).paddingLeft, 10),
                f = getRoundedBoardSize({
                    aspectRatio: t,
                    height: Math.min(d.height, c.height),
                    width: Math.min(d.width, c.width - l)
                }),
                p = getSavedSize();
            p && !s && (getRoundedBoardSize({
                aspectRatio: t,
                height: p - l,
                width: p - l
            }) > f && (removeSize(), u.style.width = ""));
            n || (u.style.paddingLeft = "".concat(c.width - f, "px"));
            var _ = f / t;
            if (o.style.width = "".concat(f, "px"), o.style.height = "".concat(_, "px"), o.style.paddingBottom = "0", a && r[1] && (r[1].style.top = "".concat(_, "px")), n) {
                u.style.flex = "1 1 auto";
                var m = f + l,
                    h = u.getBoundingClientRect().width,
                    y = Math.min(l / 2, (h - m) / 2);
                r.forEach(function(e) {
                    e.style.width = "".concat(m, "px"), e.style.transform = "translateX(".concat(y - (i ? 15 : 0), "px)")
                })
            }
        }
        var c = [];

        function onSwitchMode() {
            var e = c.find(function(e) {
                    return e.doubleBoard
                }),
                t = c.find(function(e) {
                    return e.focusMode
                }),
                o = c.find(function(e) {
                    return e.withAnalysis
                });
            c.length = 0;
            var n = document.body.classList,
                i = n.contains("real-3d") ? 4 / 3 : 1,
                a = n.contains("focus-mode"),
                s = n.contains("double-board"),
                u = n.contains("with-analysis"),
                d = n.contains("outside-coords");
            c.push({
                focusMode: a,
                aspectRatio: i,
                withAnalysis: u,
                outsideCoords: d,
                doubleBoard: s,
                boardElement: document.getElementById("board-layout-chessboard"),
                controlsElement: document.getElementById("board-layout-controls"),
                playerElements: r()(document.querySelectorAll(".board-layout-player"))
            }), s && c.push({
                focusMode: a,
                aspectRatio: i,
                withAnalysis: u,
                outsideCoords: d,
                doubleBoard: s,
                boardElement: document.getElementById("board-layout-chessboard-2")
            }), t && !a && c.forEach(resetLayoutFocus), o && !u && c.forEach(resetLayoutAnalysis), e !== s && c.forEach(resetCustomResize), dispatchResize()
        }! function observeBodyClass(e) {
            window.MutationObserver && new MutationObserver(function(t) {
                t.some(function(e) {
                    return "attributes" === e.type && "class" === e.attributeName
                }) && e()
            }).observe(document.body, {
                attributes: !0,
                attributeFilter: ["class"]
            })
        }(onSwitchMode), window.addEventListener("resize", function onWindowResize() {
            c.forEach(handleLayoutResize)
        }), document.addEventListener("DOMContentLoaded", function onContentLoaded() {
            onSwitchMode(), c.forEach(handleCustomResize), setTimeout(dispatchResize)
        })
    },
    56: function(e, t, o) {
        "use strict";
        o.d(t, "a", function() {
            return n
        });
        var n = function makeResizeEvent() {
            var e;
            return "function" == typeof Event ? e = new Event("resize") : (e = document.createEvent("Event")).initEvent("resize", !1, !0), e
        }
    }
});