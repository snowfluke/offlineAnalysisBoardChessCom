! function(e) {
    var t = {};

    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
    }
    __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
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
        var n = Object.create(null);
        if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) __webpack_require__.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function getDefault() {
            return e.default
        } : function getModuleExports() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "/bundles/app/js/", __webpack_require__(__webpack_require__.s = 1209)
}({
    0: function(e, t, n) {
        "use strict";
        var r = n(10);
        t.a = r.a
    },
    1: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        });
        var r = {
                ADD_BLINKING_SQUARE: "ADD_BLINKING_SQUARE",
                CLEAR_ARROW: "CLEAR_ARROW",
                CLEAR_BLINKING_SQUARE: "CLEAR_BLINKING_SQUARE",
                CLEAR_EFFECT: "CLEAR_EFFECT",
                CLEAR_MARKED_SQUARE: "CLEAR_MARKED_SQUARE",
                INIT: "INIT",
                LOAD: "LOAD",
                MAKE_MOVE: "MAKE_MOVE",
                ILLEGAL_MOVE: "ILLEGAL_MOVE",
                JUMP_TO_POSITION: "JUMP_TO_POSITION",
                TREE_CHANGE: "TREE_CHANGE",
                TREE_AMENDED: "TREE_AMENDED",
                SETTINGS_CHANGE: "SETTINGS_CHANGE",
                PGN_HEADERS_UPDATED: "PGN_HEADERS_UPDATED",
                CANCEL_PREMOVES: "CANCEL_PREMOVES",
                PREMOVE: "PREMOVE",
                GUESS_THE_MOVE: "GUESS_THE_MOVE",
                CANCEL_GUESS_THE_MOVE: "CANCEL_GUESS_THE_MOVE",
                UPDATE_NODE: "UPDATE_NODE"
            },
            o = {
                MAX_HISTORY_LIMIT: 200,
                getInitialHistory: function getInitialHistory() {
                    return []
                },
                add: function add(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (e.length > o.MAX_HISTORY_LIMIT - 1) {
                        var r = e.findIndex(function(e) {
                            return null !== e
                        });
                        e[r] = null
                    }
                    e.push({
                        type: t,
                        payload: n
                    })
                },
                getLastItem: function getLastItem(e) {
                    return e[e.length - 1]
                }
            }
    },
    10: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "a", function() {
            return u
        });
        var r = n(51),
            o = n.n(r);
        o.a.placeHolderPrefix = "", o.a.placeHolderSuffix = "";
        var i = function escapeParameters(e) {
                var t = {};
                return null != e && Object.keys(e).forEach(function(n) {
                    var r = function escapeRegExp(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    }(n);
                    null != r && r.length > 0 && (t[r] = e[n])
                }), t
            },
            a = function getTranslatedPhrase(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "messages",
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return window.chesscom_translations && window.chesscom_translations[t] && window.chesscom_translations[t][e] ? window.chesscom_translations[t][e] : window.chesscom_live_translations && window.chesscom_live_translations[t] && window.chesscom_live_translations[t][e] ? window.chesscom_live_translations[t][e] : "live" === t && window.i18n_phrases && window.i18n_phrases[e] ? window.i18n_phrases : "countries" === t && window.Country && window.Country[e] ? window.Country : n ? void 0 : "javascript" !== t ? getTranslatedPhrase(e, "javascript") : e
            },
            s = function trans(e, t, n) {
                return o.a.trans(a(e, n), i(t), n)
            },
            c = function transChoice(e, t, n, r) {
                return void 0 === t ? "" : o.a.transChoice(a(e, r), t, i(n))
            },
            u = {
                trans: s,
                transChoice: c
            }
    },
    104: function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n(4),
            i = n(45),
            a = n(6),
            s = n(16),
            c = n(2),
            u = function makePremove(e, t) {
                var n = o.a.getJCEMove(e, t);
                return null === n ? (r.b.add(e.history, r.a.ILLEGAL_MOVE), e) : c.a.isHead(e.jce._lines(), e.tree.selected) || e.settings.analysis ? e.settings.analysis ? void 0 : (i.a.premove(e, n) ? (r.b.add(e.history, r.a.PREMOVE), a.a.updateState(e)) : r.b.add(e.history, r.a.ILLEGAL_MOVE), e) : Object(s.a)(e, c.a.getHeadIds(e.jce._lines(), e.tree.selected.line))
            },
            l = function cancelPremoves(e) {
                return i.a.cancelPremoves(e) && (r.b.add(e.history, r.a.CANCEL_PREMOVES), a.a.updateState(e)), e
            },
            d = function consumePremove(e) {
                return e.premoves.length ? (i.a.consumePremove(e) ? (r.b.add(e.history, r.a.MAKE_MOVE), a.a.updateState(e)) : l(e), e) : e
            };
        n.d(t, "c", function() {
            return u
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return d
        })
    },
    106: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return s
        });
        var r = n(15),
            o = n(32),
            i = function hasTreeLines(e) {
                return Boolean(e && e.tree && e.tree.lines)
            },
            a = function normalizePgnAnnotation(e) {
                return Object.keys(r.c).forEach(function(t) {
                    e = e.replace(new RegExp("\\".concat(t, "\\b"), "gm"), Object(o.v)(t))
                }), e
            },
            s = function updateScrollPosition(e) {
                var t = e.moveIds,
                    n = e.moveList,
                    r = e.scrollEl;
                if (t && n && r) {
                    var o = n.getComponentRefByLineMove(t.line, t.move);
                    if (o) {
                        var i = r.getBoundingClientRect(),
                            a = o.$el ? o.$el.getBoundingClientRect() : o.getBoundingClientRect(),
                            s = r.scrollTop,
                            c = i.top + Math.floor(i.height / 2) - a.top;
                        r.scrollTop = s - c
                    }
                }
            }
    },
    1209: function(e, t, n) {
        e.exports = n(1210)
    },
    1210: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(523);
        window.chesscom = window.chesscom || {}, window.chesscom.chessBoard || (window.chesscom.chessBoard = r.a), window.chesscom.defaultChessBoard = r.a
    },
    14: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "f", function() {
            return a
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "d", function() {
            return c
        });
        var r = {
                HISTORY_CHANGE: "HISTORY_CHANGE"
            },
            o = {
                ADD_LEGAL_MOVES: "ADD_LEGAL_MOVES",
                ADD_PIECES: "ADD_PIECES",
                ADD_SQUARES: "ADD_SQUARES",
                BLINK_SQUARE: "BLINK_SQUARE",
                CLOSE_PROMOTION_MENU: "CLOSE_PROMOTION_MENU",
                DRAG_PIECE: "DRAG_PIECE",
                DROP_PIECE: "DROP_PIECE",
                DISABLE_FAKE_CURSOR: "DISABLE_FAKE_CURSOR",
                ENABLE_FAKE_CURSOR: "ENABLE_FAKE_CURSOR",
                FADE_PIECES: "FADE_PIECES",
                FLIP_BOARD: "FLIP_BOARD",
                HIDE_HOVER_SQUARE: "HIDE_HOVER_SQUARE",
                MOVE_PIECES: "MOVE_PIECES",
                OPEN_PROMOTION_MENU: "OPEN_PROMOTION_MENU",
                PICK_UP_PIECE: "PICK_UP_PIECE",
                PLAY_SOUND: "PLAY_SOUND",
                REMOVE_LEGAL_MOVES: "REMOVE_LEGAL_MOVES",
                REMOVE_PIECES: "REMOVE_PIECES",
                REMOVE_SQUARES: "REMOVE_SQUARES",
                SET_ARROWS: "SET_ARROWS",
                SET_CUSTOM_ITEMS: "SET_CUSTOM_ITEMS",
                SET_EFFECTS: "SET_EFFECTS",
                SET_SQUARES: "SET_SQUARES",
                SET_PIECE: "SET_PIECE",
                SET_PIECES: "SET_PIECES",
                SHOW_HOVER_SQUARE: "SHOW_HOVER_SQUARE",
                UPDATE_BOARD_CLASSES: "UPDATE_BOARD_CLASSES",
                UPDATE_BOARD_IMAGE: "UPDATE_BOARD_IMAGE",
                UPDATE_BOARD_SIZE: "UPDATE_BOARD_SIZE",
                UPDATE_PIECE_IMAGES: "UPDATE_PIECE_IMAGES",
                UPDATE_PIECE_SIZES: "UPDATE_PIECE_SIZES",
                UPDATE_PROMOTION_MENU_SIZE: "UPDATE_PROMOTION_MENU_SIZE"
            },
            i = {
                ANOTHER_CHESSBOARD_ONBLUR: "DIAGRAM_VIEWER_BLUR",
                ANOTHER_CHESSBOARD_ONFOCUS: "DIAGRAM_VIEWER_FOCUS",
                ARROW_CLEARED: "ARROW_CLEARED",
                ARROW_MARKED: "ARROW_MARKED",
                BUSY_FLAG: "BUSY_FLAG",
                BOARD_DIMENSIONS_SET: "BOARD_DIMENSIONS_SET",
                CANCEL_GTM: "CANCEL_GTM",
                CANCEL_PREMOVES: "CANCEL_PREMOVES",
                CHANGED_POSITION: "CHANGED_POSITION",
                CLICKED: "CLICKED",
                EFFECT_MARKED: "EFFECT_MARKED",
                EFFECT_CLEARED: "EFFECT_CLEARED",
                KEY_PRESS: "KEY_PRESS",
                LEGAL_MOVES_UPDATED: "LEGAL_MOVES_UPDATED",
                LOADED: "LOADED",
                MARKINGS_CLEARED: "MARKINGS_CLEARED",
                MOVE_BACKWARD: "MOVE_BACKWARD",
                MOVE_FORWARD: "MOVE_FORWARD",
                MOVE_MADE: "MOVE_MADE",
                MOVE_SQUARES_SET: "MOVE_SQUARES_SET",
                MOVE_TO_END: "MOVE_TO_END",
                MOVE_TO_START: "MOVE_TO_START",
                OPTIONS_CHANGED: "OPTIONS_CHANGED",
                PIECE_DROPPED: "PIECE_DROPPED",
                PIECE_PICKED_UP: "PIECE_PICKED_UP",
                PIECE_SELECTED: "PIECE_SELECTED",
                PIECE_UNSELECTED: "PIECE_UNSELECTED",
                POSITION_CHANGED: "POSITION_CHANGED",
                PROMOTION_ATTEMPTED: "PROMOTION_ATTEMPTED",
                PROMOTION_PIECE_SET: "PROMOTION_PIECE_SET",
                PROMOTION_PIECE_UNSET: "PROMOTION_PIECE_UNSET",
                SOUND_THEME_UPDATED: "SOUND_THEME_UPDATED",
                SQUARE_CLEARED: "SQUARE_CLEARED",
                SQUARE_MARKED: "SQUARE_MARKED",
                SQUARE_UNSELECTED: "SQUARE_UNSELECTED"
            },
            a = {
                MARKED: "marked",
                MOVE: "move",
                SELECTION: "selection"
            },
            s = {
                CAPTURE: "capture",
                CASTLE: "castle",
                CHECK: "move-check",
                MOVE_OPPONENT: "move-opponent",
                MOVE_SELF: "move-self",
                PREMOVE: "premove",
                PROMOTION: "promote",
                ILLEGAL: "illegal"
            },
            c = {
                CAPTURE: "CAPTURE",
                CASTLE: "CASTLE",
                CHECK: "CHECK",
                CHECKMATE: "CHECKMATE",
                NORMAL: "NORMAL",
                PREMOVE: "PREMOVE",
                PROMOTION: "PROMOTION"
            }
    },
    15: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return s
        });
        var r = n(86),
            o = function defaultNodeLimit() {
                return {
                    begin: {},
                    focus: {},
                    end: {}
                }
            },
            i = {
                $1: "!",
                $2: "?",
                $3: "!!",
                $4: "??",
                $5: "!?",
                $6: "?!",
                $10: "=",
                $11: "=",
                $12: "=",
                $13: "∞",
                $14: "⩲",
                $15: "⩱",
                $16: "±",
                $17: "∓",
                $18: "+-",
                $19: "-+",
                $22: "⨀",
                $146: "N"
            },
            a = Object(r.b)(i),
            s = {
                DIAGRAM_EDITOR: "diagram-editor-container"
            }
    },
    16: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u
        });
        var r = n(3),
            o = n.n(r),
            i = n(4),
            a = n(2),
            s = n(1),
            c = n(6);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var u = function selectNode(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                u = a.a.findNode(e.jce._lines(), t, n, r),
                l = function _objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ownKeys(n, !0).forEach(function(t) {
                            o()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, e.tree.selected),
                d = l.line,
                f = l.move;
            if (!u) return e;
            var p = {};
            return p = t.move + n < 0 && t.line === u.ids.line ? {
                line: 0,
                move: -1
            } : u.ids, i.a.selectNode(e, p), s.b.add(e.history, s.a.JUMP_TO_POSITION, {
                from: {
                    line: d,
                    move: f
                },
                to: p
            }), c.a.updateState(e)
        }
    },
    173: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        });
        var r = {
                default: ["#B58863", "#F0D9B5", null, ".png", "#ffff33"],
                "8_bit": ["#6a9b41", "#f3f3f4", "8_bit", ".png", "#ffff33"],
                bases: ["#c26b38", "#efcca1", "bases", ".jpg", "#f5cc2a"],
                blue: ["#4D6D92", "#ECECD7", "blue", ".png", "#00a5ff"],
                brown: ["#B58863", "#F0D9B5", "brown", ".png", "#ffff33"],
                bubblegum: ["#f9cdd3", "#fff3f3", "bubblegum", ".png", "#de5d6f"],
                burled_wood: ["#895132", "#d9b088", "burled_wood", ".jpg", "#ee9016"],
                dark_wood: ["#8d675e", "#e7cdb2", "dark_wood", ".jpg", "#cc9122"],
                dash: ["#6b3a27", "#bd9257", "dash", ".jpg", "#eca722"],
                glass: ["#282f3f", "#667188", "glass", ".png", "#5b91b3"],
                graffiti: ["#b96f18", "#aeaeae", "graffiti", ".jpg", "#f39011"],
                green: ["#779952", "#edeed1", "green", ".png", "#ffff33"],
                icy_sea: ["#7a9db2", "#c5d5dc", "icy_sea", ".jpg", "#5ed7f1"],
                light: ["#aaaaaa", "#dcdcdc", "light", ".png", "#a4b8c4"],
                lolz: ["#909898", "#e0e9e9", "lolz", ".jpg", "#a3becd"],
                marble: ["#706b66", "#c7bdaa", "marble", ".jpg", "#f0db86"],
                metal: ["#6e6e6e", "#c9c9c9", "metal", ".jpg", "#a3becd"],
                nature: ["#8c976e", "#c3d1a4", "translucent", ".png", "#eef396"],
                neon: ["#636363", "#b9b9b9", "neon", ".png", "#6d90a6"],
                newspaper: ["#5a5956", "#5a5956", "newspaper", ".jpg", "#99976e"],
                orange: ["#D08B18", "#FCE4B2", "orange", ".png", "#ffff33"],
                overlay: ["#789ebd", "#4878a0", "overlay", ".png", "#0d9acf"],
                parchment: ["#B58863", "#F0D9B5", "parchment", ".jpg", "#d8cc66"],
                purple: ["#8877B7", "#EFEFEF", "purple", ".png", "#7dacc9"],
                red: ["#BA5546", "#F0D8BF", "red", ".png", "#f8f893"],
                sand: ["#b8a590", "#e5d3c4", "sand", ".jpg", "#e2bc87"],
                sky: ["#c2d7e2", "#efefef", "sky", ".png", "#65daf7"],
                stone: ["#666463", "#c8c3bd", "stone", ".jpg", "#36525f"],
                tan: ["#D08B18", "#FCE4B2", "tan", ".png", "#f7d84a"],
                tournament: ["#316549", "#ebece8", "tournament", ".jpg", "#a4c25b"],
                translucent: ["#667188", "#282f3f", "translucent", ".png", "#5b91b3"],
                walnut: ["#835f42", "#c0a684", "walnut", ".jpg", "#d1a52d"],
                wood: ["#8d675e", "#e7cdb2", "dark_wood", ".jpg", "#cc9122"],
                grey: ["#aaaaaa", "#dcdcdc", "light", ".png", "#a4b8c4"],
                pink: ["#f9cdd3", "#fff3f3", "bubblegum", ".png", "#de5d6f"],
                natural: ["#D08B18", "#FCE4B2", "tan", ".png", "#f0e464"],
                winboard: ["#316549", "#ebece8", "tournament", ".jpg", "#a4c25b"],
                blackwhite: ["#667188", "#282f3f", "translucent", ".png", "#5b91b3"],
                marbleblue: ["#c2d7e2", "#efefef", "marbleblue", ".jpg", "#65daf7"],
                marblebrown: ["#b96f18", "#aeaeae", "graffiti", ".jpg", "#f39011"],
                marblegreen: ["#706b66", "#c7bdaa", "marblegreen", ".jpg", "#f0db86"],
                wooddark: ["#895132", "#d9b088", "burled_wood", ".jpg", "#ee9016"],
                woodlight: ["#B58863", "#F0D9B5", "parchment", ".jpg", "#d8cc66"],
                woodmid: ["#8d675e", "#e7cdb2", "dark_wood", ".jpg", "#cc9122"],
                woodolive: ["#6e6e6e", "#c9c9c9", "woodolive", ".jpg", "#a3becd"]
            },
            o = {
                modern2: {
                    imgPath: "modern",
                    imgFormat: ".png"
                },
                lines: {
                    imgPath: "alpha",
                    imgFormat: ".png"
                },
                "3dwood": {
                    imgPath: "3d_wood",
                    imgFormat: ".png"
                },
                "3dplastic": {
                    imgPath: "3d_plastic",
                    imgFormat: ".png"
                },
                "3dchesskid": {
                    imgPath: "3d_chesskid",
                    imgFormat: ".png"
                }
            }
    },
    175: function(e, t, n) {
        "use strict";
        var r = n(24),
            o = n.n(r),
            i = n(68),
            a = n(41);
        t.a = class BoardHelper {
            static getAnimationType(e) {
                return "battle" === e ? "default" : e
            }
            static getAnimationTypes(e, t) {
                if (!Array.isArray(e)) return e;
                var n = o()(e),
                    r = ["battle"];
                return i.c.pieces.indexOf(t) >= 0 && (r = r.concat(i.c.animations)), r.forEach(function(e) {
                    var t = n.findIndex(function(t) {
                        return t.code === e
                    });
                    t > -1 && n.splice(t, 1)
                }), n
            }
            static getPieceStyles(e) {
                if (!Array.isArray(e) || "IE" !== Object(a.b)().name) return e;
                var t = e.findIndex(function(e) {
                    return "real3d" === e.code
                });
                return t > -1 && e.splice(t, 1), e
            }
            static getCoordinatePositioning(e) {
                var t = i.b.find(function(t) {
                    return [t.key, t.value].includes(e)
                });
                return t ? t.value : null
            }
            static pieceChangeRequiresRefresh(e, t) {
                var n = e === t,
                    r = i.c.pieces.indexOf(e) > -1 || i.c.pieces.indexOf(t) > -1;
                return !n && r
            }
            static animationChangeRequiresRefresh(e, t) {
                return i.c.animations.indexOf(e) > -1 || i.c.animations.indexOf(t) > -1
            }
            static validateSize(e, t, n, r) {
                var o = Math.min(e, t);
                return o = Math.max(o, n), o = (o = Math.floor(o / r) * r) >= n ? o : o + r
            }
        }
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = {
            getLine: function getLine(e, t) {
                return e[t] || null
            },
            getNode: function getNode(e, t, n) {
                if ("number" == typeof t) {
                    if (void 0 !== n) {
                        var o = r.getLine(e, Math.max(0, t));
                        return o ? o[n] : null
                    }
                    return null
                }
                if (!t) return null;
                var i = r.getLine(e, Math.max(0, t.line));
                return i ? i[t.move] : null
            },
            getSelectedLine: function getSelectedLine(e) {
                return r.getLine(e.jce._lines(), e.tree.selected.line)
            },
            getSelectedNode: function getSelectedNode(e) {
                return r.getNode(e.jce._lines(), e.tree.selected)
            },
            nodeIsSelected: function nodeIsSelected(e, t) {
                return !!(t || t.line || t.move) && (e.selected.line === t.line && e.selected.move === t.move)
            },
            getLinesFromJce: function getLinesFromJce(e) {
                return r.formatLinesFromJce(e.jce._lines())
            },
            getJceSelectedLine: function getJceSelectedLine(e) {
                return e._lines()[e._history().id]
            },
            formatLinesFromJce: function formatLinesFromJce(e) {
                return r.consolidateComments(e)
            },
            consolidateComments: function consolidateComments(e) {
                return e.map(function(t) {
                    var n = r.isContinuation(e, t.id) ? r.getNode(e, t.id, 1) : r.getNode(e, t.id, 0);
                    return n ? (t.initComment && (n.commentBefore = t.initComment), t) : t
                })
            },
            isContinuation: function isContinuation(e, t) {
                var n = r.getLine(e, t);
                if (!n) return !1;
                if (void 0 !== n.parentId && void 0 !== n[0]) {
                    var o = r.getNode(e, n.parentId, n.atMoveNode);
                    return !(!o || !o.move) && o.move === n[0].move
                }
                return !1
            },
            isMainLine: function isMainLine(e) {
                return 0 === e
            },
            getNextNodeIds: function getNextNodeIds(e, t) {
                return !e || e.move + t < 0 ? null : {
                    line: e.line,
                    move: e.move + t
                }
            },
            getNextContinuationLineId: function getNextContinuationLineId(e, t) {
                var n = r.getNode(e, t);
                if (!n || !n.lines) return null;
                var o = n.lines.find(function(t) {
                    return r.isContinuation(e, t)
                });
                return -1 !== o ? o : null
            },
            getParentNode: function getParentNode(e, t) {
                var n = {
                    line: e[t.line].parentId,
                    move: e[t.line].atMoveNode
                };
                return r.findNode(e, n)
            },
            getParentNodeIds: function getParentNodeIds(e, t) {
                var n = r.getLine(e, t.line);
                return n && void 0 !== n.parentId ? {
                    line: n.parentId,
                    move: n.atMoveNode
                } : null
            },
            deleteRemainingNodes: function deleteRemainingNodes(e, t) {
                return e ? (e.length = t + 1, e) : null
            },
            deleteNode: function deleteNode(e, t) {
                return r.prune(e, {
                    line: t.line,
                    move: t.move - 1
                })
            },
            deleteLine: function deleteLine(e, t) {
                var n = r.getLine(e, t);
                if (void 0 !== n.parentId) {
                    var o = r.getNode(e, {
                        line: n.parentId,
                        move: n.atMoveNode
                    });
                    o.lines = o.lines.filter(function(e) {
                        return e !== t
                    }), 0 === o.lines.length && delete o.lines
                }
                var i = e.filter(function(e) {
                    return r.isMainLine(e.id) || e.id !== t
                });
                return r.rebuildIds(i)
            },
            rebuildIds: function rebuildIds(e) {
                var t = [];
                return e.forEach(function(e, n) {
                    e.id !== n && (t[e.id] = n)
                }), e.map(function(n) {
                    return n.id = void 0 !== t[n.id] ? t[n.id] : n.id, void 0 !== t[n.parentId] && (n.parentId = t[n.parentId]), n.forEach(function(n) {
                        n.ids.line = void 0 !== t[n.ids.line] ? t[n.ids.line] : n.ids.line, n.lines && n.lines.length > 0 && (n.lines = n.lines.map(function(e) {
                            return void 0 !== t[e] ? t[e] : e
                        }).filter(function(t) {
                            return void 0 !== e[t]
                        }), 0 === n.lines.length && delete n.lines)
                    }), n
                })
            },
            prune: function prune(e, t) {
                return r.getNode(e, {
                    line: t.line,
                    move: t.move + 1
                }) ? (e[t.line] = r.deleteRemainingNodes(e[t.line], t.move), !r.isMainLine(t.line) && r.isFirstVisibleNode(e, t) && e.splice(e.findIndex(function(e) {
                    return e.id === t.line
                }), 1), e.sort(function(e, t) {
                    return e.id - t.id
                }).reduce(function(e, t) {
                    var n = r.getNode(e, {
                        line: t.parentId,
                        move: t.atMoveNode
                    });
                    return (r.isMainLine(t.id) || n) && e.push(t), e
                }, [])) : e
            },
            isFirstNodeInTree: function isFirstNodeInTree(e) {
                return 0 === e.line && -1 === e.move
            },
            isFirstVisibleNode: function isFirstVisibleNode(e, t) {
                return r.isContinuation(e, t.line) ? 1 === t.move : 0 === t.move
            },
            isFirstNodeInLine: function isFirstNodeInLine(e, t) {
                return t && e && e[t.line] && e[t.line][0] && e[t.line][0].ids && e[t.line][0].ids.line === t.line && e[t.line][0].ids.move === t.move
            },
            isHead: function isHead(e, t) {
                return t && e[t.line].length - 1 === t.move || !1
            },
            getHeadIds: function getHeadIds(e, t) {
                return {
                    line: t,
                    move: e[t].length - 1
                }
            },
            nodeMatchesMove: function nodeMatchesMove(e, t, n) {
                var o = r.getNode(e, t);
                return !!o && (o.from === n.from && o.to === n.to && (o.promotion || null) === (n.promotion || null))
            },
            shouldMatchMove: function shouldMatchMove(e, t, n) {
                return e && 1 === t && 0 === n
            },
            getNextMatchingNode: function getNextMatchingNode(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    o = r.getNode(e, t),
                    i = r.getNode(e, t.line, t.move + 1);
                return e.reduce(function(e, t) {
                    return e.concat(t)
                }, []).filter(function(e) {
                    return o && e.moveNumber === o.moveNumber + 1 || i && e.moveNumber === i.moveNumber
                }).filter(function(t) {
                    return !!(o && t.ids.line === o.ids.line || i && t.ids.line === i.ids.line) || (!!(o && o.lines && -1 !== o.lines.indexOf(t.ids.line) && r.isContinuation(e, t.ids.line)) || !(!i || !i.lines || -1 === i.lines.indexOf(t.ids.line) || r.isContinuation(e, t.ids.line)))
                }).filter(function(t) {
                    return r.nodeMatchesMove(e, t.ids, n)
                }).sort(function(e, t) {
                    return e.ids.line - t.ids.line
                })[0] || null
            },
            clearNode: function clearNode(e, t) {
                var n = r.getNode(e, t);
                return n ? (delete n.comment, delete n.annotation, n) : null
            },
            findNode: function findNode(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = arguments.length > 2 ? arguments[2] : void 0,
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (!e || void 0 === n.line) return null;
                if ("string" == typeof o) switch (n.move) {
                    case "begin":
                        n.move = 0;
                        break;
                    case "end":
                        n.move = e[0].length - 1
                } else if (void 0 === n.move) return e[n.line];
                return o && 0 !== Math.abs(o) && (n = new Array(Math.abs(o)).fill(o / Math.abs(o)).reduce(function(n, o) {
                    if (null === n) return null;
                    var a = r.isContinuation(e, n.line),
                        s = r.getNextNodeIds(n, o);
                    if (r.getNode(e, s) && (-1 !== o || !a || 0 !== s.move)) return s;
                    switch (o) {
                        case 1:
                            return i ? n : null !== (t = r.getNextContinuationLineId(e, n)) ? {
                                line: t,
                                move: 1
                            } : null;
                        case -1:
                            return s = a ? r.getParentNodeIds(e, n) : r.getNextNodeIds(r.getParentNodeIds(e, n), -1), r.getNode(e, s) ? s : n;
                        default:
                            return null
                    }
                }, n)), r.getNode(e, n) || null
            },
            clearNodeMarkings: function clearNodeMarkings(e, t) {
                var n = r.getNode(e, t);
                return n ? (delete n.squares, delete n.arrows, delete n.effects, n) : null
            },
            clearNodeAnalysis: function clearNodeAnalysis(e, t) {
                var n = r.getNode(e, t);
                return n ? (delete n.comment, delete n.annotation, delete n.additionalAnnotation, n) : null
            },
            clearAllMarkings: function clearAllMarkings(e) {
                return e ? (e.forEach(function(t) {
                    t.length > 0 && t.forEach(function(t) {
                        return r.clearNodeMarkings(e, {
                            line: t.ids.line,
                            move: t.ids.move
                        })
                    })
                }), e) : null
            },
            clearAnalysis: function clearAnalysis(e) {
                return e ? (e.forEach(function(t) {
                    t.length > 0 && t.forEach(function(t) {
                        return r.clearNodeAnalysis(e, {
                            line: t.ids.line,
                            move: t.ids.move
                        })
                    })
                }), e) : null
            }
        }
    },
    21: function(e, t, n) {
        "use strict";
        n.r(t);
        var r, o, i, a = n(42),
            s = n.n(a),
            c = (r = function() {
                var e = [
                        [2637767806, 863464769],
                        [720845184, 95069639],
                        [1155203408, 610415943],
                        [2618685246, 1655139042],
                        [1971536997, 1218186377],
                        [848342074, 540017087],
                        [263957791, 1627660921],
                        [3896152207, 4076560586],
                        [226391645, 1484086288],
                        [436746274, 3467632685],
                        [2516964848, 3797861296],
                        [3491888988, 3510251221],
                        [1086189917, 1248276018],
                        [18044180, 1876255637],
                        [1572111136, 1190386149],
                        [597658413, 2146900428],
                        [97624494, 2243205793],
                        [1738507407, 1854916977],
                        [1950989311, 2149575947],
                        [2098318769, 3283594736],
                        [2194108574, 2015279052],
                        [4079062812, 2500884588],
                        [856979699, 2941369318],
                        [1270058469, 3877737539],
                        [2858720366, 3170717948],
                        [2378012835, 1387254795],
                        [2278688587, 2178388503],
                        [435406673, 3555273441],
                        [3031118064, 1655806655],
                        [2063925420, 1107589828],
                        [3376753832, 436852829],
                        [615148625, 1302492416],
                        [1285502018, 1963045959],
                        [346460119, 1016137793],
                        [2803604355, 1176288659],
                        [55085973, 2968618255],
                        [1669016372, 4287873088],
                        [164740250, 1037634196],
                        [896886403, 883023163],
                        [1935551383, 2764331555],
                        [410153072, 4055711755],
                        [533441746, 1505690343],
                        [3541084098, 3466290517],
                        [3214426080, 4267541060],
                        [2675233103, 1951705124],
                        [1374411850, 3115986997],
                        [1552073989, 3684348154],
                        [4244110986, 875606593],
                        [844343081, 3115990494],
                        [2356462440, 135999605],
                        [3116133511, 377238503],
                        [2129956651, 2197966368],
                        [299173332, 3276914047],
                        [1701379241, 745972291],
                        [1306570996, 254977976],
                        [2530644806, 214138461],
                        [1122123979, 1667800879],
                        [1831591130, 3801192033],
                        [1116211970, 920967505],
                        [1594837592, 2551651254],
                        [972591349, 2046373768],
                        [2479207924, 1935030411],
                        [1675376029, 2367888248],
                        [3960916618, 3935874422],
                        [1398143232, 3265801671],
                        [133930885, 1520005442],
                        [1351827834, 2829577566],
                        [2076951437, 2723839804],
                        [435980918, 2364847828],
                        [1668970368, 3738157273],
                        [2185864314, 3993911799],
                        [2041407829, 31969768],
                        [346864372, 2004703094],
                        [4047877822, 3437142421],
                        [3669961416, 538399484],
                        [616810829, 4190688246],
                        [3144558884, 4030272234],
                        [216165387, 2513010905],
                        [2761740594, 3216997572],
                        [3919406634, 4096014649],
                        [669429112, 2434161727],
                        [2234904640, 3111407601],
                        [1421079802, 1598085235],
                        [1924213810, 310373675],
                        [4002762044, 2067865415],
                        [2592451728, 2586110625],
                        [1890340057, 4031717877],
                        [4189625662, 2577429954],
                        [2276713138, 3049850801],
                        [2741429688, 3310307512],
                        [2924122950, 3426712818],
                        [421576781, 1193704381],
                        [2277442246, 3030264553],
                        [153237420, 595540057],
                        [4278711886, 4176286928],
                        [2380848297, 4030514510],
                        [2618700582, 1303682185],
                        [3018992701, 185284845],
                        [957243316, 1291916363],
                        [1543415220, 1898408169],
                        [504378001, 531073412],
                        [2591337657, 1692896435],
                        [1333852064, 903543556],
                        [1661259930, 188168388],
                        [561112646, 2197961224],
                        [1536910315, 2632972300],
                        [1349168372, 2307429186],
                        [411152329, 2745631190],
                        [1694697476, 1081411140],
                        [3755185459, 2631660711],
                        [4019355068, 4027326706],
                        [2066937809, 3761668332],
                        [3120395808, 3878773315],
                        [94890149, 2109283191],
                        [3045629038, 358812277],
                        [1249184265, 3465901047],
                        [3477490924, 2308583306],
                        [4114113436, 3875911716],
                        [1014604031, 1434513279],
                        [3991324799, 2222416029],
                        [2040431088, 1539915569],
                        [2253613964, 4081224332],
                        [2547464012, 1611168627],
                        [2722521980, 4281500978],
                        [71289574, 213969824],
                        [2450408597, 903689630],
                        [1894451515, 364024012],
                        [1939968537, 374938813],
                        [1447259295, 3785468557],
                        [4021046128, 1664847745],
                        [3139524504, 3562928047],
                        [1173487682, 4065269608],
                        [2467266804, 3907744866],
                        [4284945151, 3486998177],
                        [2925674454, 1953016432],
                        [3710671816, 1271453948],
                        [2129465869, 1422863833],
                        [587093076, 18243356],
                        [3373793513, 2411305257],
                        [2156648078, 1791034213],
                        [3737413652, 1534461430],
                        [468575139, 2935304962],
                        [1129551363, 3603256834],
                        [2861996892, 1763494778],
                        [2826449619, 2465197654],
                        [1704209531, 1014895022],
                        [3738359347, 3402630390],
                        [569410928, 4095796581],
                        [3021312909, 2108247612],
                        [2444777957, 2664129360],
                        [282063667, 3773661258],
                        [682545472, 3188439005],
                        [3318488457, 1917822038],
                        [1447622272, 4045023041],
                        [757420137, 4038580915],
                        [2613420942, 4146703316],
                        [4012836163, 150381244],
                        [2938127093, 3428591704],
                        [1208226490, 3086335530],
                        [2935205706, 1446903363],
                        [430957978, 3830532479],
                        [1381578755, 3757172800],
                        [4109399782, 1596778224],
                        [288855589, 1954372339],
                        [3169178148, 2256716053],
                        [2644780093, 3895892303],
                        [107966643, 1071681559],
                        [1304747544, 2607225372],
                        [1359190711, 1898207171],
                        [3229237120, 3273634996],
                        [3027167685, 3863637628],
                        [3011615298, 2883984519],
                        [564135827, 978463264],
                        [770797430, 362326607],
                        [1983662611, 1907583229],
                        [4153656423, 48268960],
                        [3609759233, 720080177],
                        [3727911466, 1270989899],
                        [200708787, 2366086947],
                        [744508026, 393422515],
                        [1213261630, 65757284],
                        [3485747185, 3845951003],
                        [2958861301, 1680248217],
                        [2598470344, 3163845864],
                        [2767997908, 4233451722],
                        [3881113485, 1492930166],
                        [1773764017, 2764062206],
                        [4189435844, 2898689174],
                        [4234838742, 1267095035],
                        [2624081078, 3302114327],
                        [2395569449, 390426320],
                        [1728307101, 690284926],
                        [3309827454, 1118258254],
                        [2028172868, 3888829086],
                        [4271523049, 909051386],
                        [146617804, 942892565],
                        [2467685867, 974297806],
                        [2483428231, 503635829],
                        [3743260573, 2018222096],
                        [1002067894, 2289153437],
                        [3535252974, 3738302271],
                        [4154611160, 1002664952],
                        [3623154244, 2349656961],
                        [3646679180, 3524329383],
                        [862933752, 4282853607],
                        [2806008282, 3272780913],
                        [2734037942, 3828874677],
                        [1328176304, 2137666995],
                        [2278785213, 2780788825],
                        [381286368, 1816476193],
                        [2074232908, 2316293454],
                        [4087773386, 3651330956],
                        [967884669, 3728964514],
                        [4239349185, 3213509668],
                        [419231360, 1463788948],
                        [1275421624, 2672384707],
                        [1088456595, 436245261],
                        [2365565249, 783696577],
                        [1758083333, 845223583],
                        [2048846183, 3530914274],
                        [2635948261, 124738415],
                        [940630937, 3069598626],
                        [839474029, 1253439921],
                        [902477345, 165479306],
                        [2836079689, 2681188273],
                        [2007115168, 2093139645],
                        [1363041891, 1282466609],
                        [1130479818, 1063857938],
                        [3644959908, 1260430427],
                        [1385135238, 46497915],
                        [1386975934, 3110156681],
                        [2635987502, 4233461619],
                        [1915744629, 4117939016],
                        [487743653, 285736599],
                        [2049219159, 3960249250],
                        [69242857, 3908563670],
                        [1511066720, 1488527520],
                        [215590039, 1703564952],
                        [1459430344, 4184955468],
                        [676103291, 2642967214],
                        [83799035, 3182827979],
                        [1949179493, 476101251],
                        [2593534694, 1493478716],
                        [2283504289, 995211746],
                        [1349412676, 3449243940],
                        [2954378677, 1878813305],
                        [249149717, 3329151870],
                        [1578231917, 1483986052],
                        [4135085182, 890874990],
                        [461755528, 3505523909],
                        [3669622373, 634949665],
                        [219487622, 2914465301],
                        [2825233742, 3703631897],
                        [2479105382, 2935590907],
                        [2582097898, 3187672881],
                        [1221328648, 1843341402],
                        [2140891889, 3958868911],
                        [1482849818, 345750049],
                        [751922730, 3178831411],
                        [3546542069, 4036458902],
                        [216179596, 877293293],
                        [444615341, 3117393729],
                        [2424254530, 494454238],
                        [1344234989, 3003337991],
                        [929188581, 2760877801],
                        [2507911009, 1879899982],
                        [980166547, 1311840394],
                        [3566535507, 1790747461],
                        [143525013, 2311336672],
                        [4181962471, 4273938872],
                        [1815842366, 862009811],
                        [911175674, 1179575598],
                        [3591335374, 3694215714],
                        [1452686093, 3393294272],
                        [385158879, 2447709103],
                        [4011414929, 1264623507],
                        [1448477120, 911094312],
                        [3971299641, 2289992053],
                        [3133647265, 2234591563],
                        [3007628400, 964409938],
                        [1708345684, 3673411261],
                        [3031964479, 2843021794],
                        [3022128657, 2480338599],
                        [118850112, 473449293],
                        [2048127371, 3202109429],
                        [3158349745, 382018770],
                        [1505327237, 3807570472],
                        [2568424029, 3272693060],
                        [1866609495, 3888556537],
                        [844703982, 1852802964],
                        [3504617058, 682636099],
                        [1448882679, 3733580327],
                        [821387540, 2215744532],
                        [3631471417, 311618895],
                        [2077838877, 2383929020],
                        [3352949096, 1688694420],
                        [2491080787, 3998672444],
                        [3368630402, 4182204255],
                        [983299419, 2837414346],
                        [3651215291, 1033373924],
                        [265429091, 3988955082],
                        [3019003608, 2896212153],
                        [2955948456, 3025235588],
                        [903690197, 2266253487],
                        [3925215275, 89402958],
                        [3959093811, 3609545561],
                        [2455088053, 223552128],
                        [3115011301, 2133669107],
                        [1765081558, 673805649],
                        [3324795129, 2111392191],
                        [3443871631, 432345706],
                        [3152559950, 3425427147],
                        [3699649406, 672784944],
                        [3129545774, 7668664],
                        [2747044893, 173040075],
                        [3925243406, 852328481],
                        [164095314, 3161868591],
                        [2234471571, 1302682825],
                        [2164784335, 105893718],
                        [159995093, 536831360],
                        [599199451, 425051327],
                        [3274759746, 1680930461],
                        [1192619331, 3903085578],
                        [2832721114, 3078660237],
                        [91404660, 4030521531],
                        [3044880024, 1578375623],
                        [3906596030, 754177855],
                        [803516785, 1894094672],
                        [288455592, 2030430096],
                        [2143232492, 2317305324],
                        [388352703, 3406060288],
                        [2521731420, 3588403719],
                        [1043041227, 4028028525],
                        [3195290851, 2468913324],
                        [4166724431, 3168683191],
                        [1228226538, 968516529],
                        [500177583, 3444787306],
                        [533367442, 4252082053],
                        [4236023256, 657816314],
                        [413575568, 3367198397],
                        [3435884549, 3334062733],
                        [1004255532, 1135705894],
                        [2859513268, 4170618274],
                        [3914086821, 1251487871],
                        [3080761716, 3489067886],
                        [3571165255, 699353261],
                        [773372954, 3648014952],
                        [769693293, 2939128604],
                        [3116440923, 507748478],
                        [1687629160, 3739431776],
                        [2489486648, 3502376324],
                        [3686847158, 2878383449],
                        [3530767427, 902211375],
                        [2121652637, 2493976397],
                        [1827477891, 930064171],
                        [2549918411, 4029725732],
                        [2071415163, 844118802],
                        [2236083679, 3088894868],
                        [2040110303, 4144562891],
                        [3489536313, 1133419300],
                        [2190878435, 2301466071],
                        [2465915458, 2448602097],
                        [1675766804, 2073834499],
                        [3329799896, 1613253148],
                        [1483966600, 1348836071],
                        [159505618, 2527621997],
                        [2674227354, 1695130688],
                        [2683539437, 1927873839],
                        [3833196123, 2570082188],
                        [3891433165, 759819981],
                        [1455453349, 2179602430],
                        [1430583255, 1957776111],
                        [2067726741, 4235143439],
                        [303380021, 2998980439],
                        [2136024795, 3126725799],
                        [2054591852, 1051702291],
                        [1029141665, 489794361],
                        [2317027384, 569642164],
                        [2068461795, 624418658],
                        [2499875684, 1830645251],
                        [1302894490, 4319401],
                        [1002663431, 2406815191],
                        [1560941298, 2060652753],
                        [2141002286, 515773223],
                        [3661248027, 475092913],
                        [3705503008, 2419919909],
                        [914567990, 3496539911],
                        [3462935583, 2039034761],
                        [2878378006, 2379243316],
                        [1133857586, 1390159333],
                        [3023618742, 2140726761],
                        [282908558, 944874642],
                        [3686955701, 1148723903],
                        [2604456805, 4163675010],
                        [3061545110, 377179268],
                        [3218002352, 76459088],
                        [2836503392, 916455101],
                        [536836808, 151306053],
                        [2886925079, 404221671],
                        [2936593041, 2011015485],
                        [453815187, 1852163908],
                        [3042568989, 82176306],
                        [3279635891, 4174836410],
                        [3282689058, 2360003049],
                        [4088968807, 1516570623],
                        [2680453086, 1322680794],
                        [1731693966, 3438253771],
                        [1842894553, 1294307894],
                        [2736377365, 2964642609],
                        [121205621, 521330014],
                        [2324595870, 3005710757],
                        [3784465521, 676493813],
                        [1958759409, 2030833406],
                        [1306150933, 1016370058],
                        [2636541290, 482366508],
                        [1950415745, 1695073534],
                        [322077955, 3746046623],
                        [3602873262, 3829181504],
                        [1211684447, 1861645455],
                        [504701736, 4080111082],
                        [2407799203, 1223857855],
                        [1925743434, 1498920209],
                        [3617596327, 845198428],
                        [2498480299, 3484773806],
                        [2680229135, 2560201696],
                        [3731399221, 1536412390],
                        [2756509305, 2924710846],
                        [2635957500, 3459716133],
                        [1372762539, 769635894],
                        [802677945, 3878474636],
                        [1707760534, 3075809808],
                        [3714687192, 2872792173],
                        [1615679922, 1606381794],
                        [1940556374, 1337437342],
                        [445390489, 731124040],
                        [2864974375, 64601760],
                        [1984806574, 2141516710],
                        [513390958, 1890172555],
                        [744398315, 1475299139],
                        [982749166, 852662657],
                        [652663695, 4260736510],
                        [1184061125, 82616221],
                        [3363191899, 147951756],
                        [1064069880, 1507328085],
                        [2138882964, 547595589],
                        [2616926846, 3186935246],
                        [2298715513, 3606862940],
                        [2414381911, 811477686],
                        [2694745228, 900437726],
                        [4202576185, 2201114451],
                        [3602305260, 3323446937],
                        [3756663274, 2658490339],
                        [3061587876, 2171079416],
                        [3390977925, 2850497765],
                        [486312941, 224925241],
                        [3515712841, 3510684394],
                        [1322319486, 2647200565],
                        [3839619171, 1148450258],
                        [392296762, 1154854654],
                        [1401523788, 957405781],
                        [1934485528, 527352730],
                        [645968162, 3131215255],
                        [696971825, 3361451947],
                        [2038689491, 1946699733],
                        [1723966113, 2785859721],
                        [2652365974, 1118037185],
                        [3988018407, 3134982149],
                        [1354171594, 3053634345],
                        [1287854075, 2631782435],
                        [1723106141, 2662328866],
                        [563845090, 1878819261],
                        [639520332, 171129501],
                        [534957223, 1696062352],
                        [3612364282, 2283204027],
                        [3109494688, 1304463816],
                        [500957989, 630925278],
                        [3477030536, 2149497258],
                        [4109750364, 281719363],
                        [951472732, 564407054],
                        [922095147, 2767874048],
                        [3946156928, 829677774],
                        [2622281253, 2086286851],
                        [2936811901, 850242186],
                        [630086272, 3340782667],
                        [2340986210, 1296336989],
                        [4107355543, 3865114709],
                        [3560210278, 3968418243],
                        [3868847493, 2967450637],
                        [611513888, 2083325060],
                        [3265390517, 3025776309],
                        [2874106961, 3424470508],
                        [1668707698, 2923258228],
                        [2778598353, 24320552],
                        [292356118, 3415510793],
                        [754567370, 86994591],
                        [185141877, 1621715171],
                        [2884558258, 3722473457],
                        [1492107531, 111281805],
                        [3336927864, 4225337056],
                        [782994598, 1021838039],
                        [346133860, 18281270],
                        [2080909533, 1649329040],
                        [3612065399, 3859901127],
                        [2151962287, 284556115],
                        [3957975594, 3745718727],
                        [52533817, 3998775856],
                        [1232633839, 397383972],
                        [2716413964, 3629253960],
                        [1531307298, 3836851439],
                        [3030137657, 2500401718],
                        [3561556693, 653345841],
                        [313061910, 2945718466],
                        [2065276, 3342140708],
                        [410498334, 1470588117],
                        [2726640512, 4051654894],
                        [2570984935, 758567696],
                        [3008987264, 3462702678],
                        [623860175, 228525243],
                        [3527183895, 1829844480],
                        [467272850, 3890501742],
                        [568376656, 650516927],
                        [990477018, 4035508558],
                        [2366955227, 817792110],
                        [4183621538, 989198068],
                        [946958343, 1639184195],
                        [3395758993, 3924097558],
                        [1690887473, 3220519765],
                        [605184237, 1255270525],
                        [275515833, 1926424610],
                        [2142902612, 283494960],
                        [2021972412, 1823828440],
                        [105373677, 3448326697],
                        [1666662384, 1042433908],
                        [1338566998, 261206307],
                        [498685668, 1344755577],
                        [3101233780, 3119109371],
                        [2733370951, 3808165089],
                        [3656512268, 3449289481],
                        [4025308119, 1607880299],
                        [778896067, 1612183167],
                        [2846510368, 3674754715],
                        [3058428120, 2991822529],
                        [1892379383, 3268787440],
                        [2565895844, 4154602030],
                        [3213117192, 98999135],
                        [2495816991, 116985075],
                        [1040203361, 1785041385],
                        [3106252493, 69316595],
                        [1639829808, 2087117568],
                        [3213709576, 3799911752],
                        [604681594, 2340981536],
                        [4236730699, 2938666503],
                        [4009938384, 1878897714],
                        [2701667332, 1725918218],
                        [2182473079, 1258184],
                        [3550198211, 2760750799],
                        [657991062, 875584532],
                        [1640976276, 3380476221],
                        [460041378, 2924352091],
                        [1972323596, 2287414795],
                        [2510248061, 1350206297],
                        [2959337826, 3762681165],
                        [1625877874, 3235902929],
                        [2070189957, 1429368735],
                        [4245163299, 1839731898],
                        [2358312347, 138364248],
                        [275739390, 2179122576],
                        [2037777210, 972544338],
                        [2766930226, 1984733259],
                        [1933485829, 4209310327],
                        [3034118011, 3286589799],
                        [2653025529, 62078937],
                        [2641780289, 2679545709],
                        [3540781195, 2787026415],
                        [1569993599, 3215949659],
                        [441337890, 3947723353],
                        [1878946792, 459505587],
                        [3724105660, 920173002],
                        [1691411102, 3934795955],
                        [148741087, 3647709027],
                        [142506469, 2776440083],
                        [3811107376, 3823285243],
                        [472209891, 252266174],
                        [1913386482, 1867329194],
                        [2960608550, 482740699],
                        [1145005292, 1513558421],
                        [1091751784, 1687823886],
                        [3625186042, 3086337482],
                        [1712140887, 940065262],
                        [1504455800, 1945702563],
                        [3896940088, 2003245591],
                        [2478191531, 4197739e3],
                        [3233871270, 250924495],
                        [3404865229, 1131917964],
                        [1462204167, 429621621],
                        [1349259705, 3641608989],
                        [3627860584, 2048468319],
                        [1244251718, 1513180369],
                        [3979211282, 371413143],
                        [3043187861, 4285699810],
                        [581894202, 3060983825],
                        [1390895705, 1811317301],
                        [2599134010, 3337406128],
                        [2488233440, 2436161462],
                        [1816641224, 2208816697],
                        [1792034756, 815866116],
                        [2779893723, 2695577703],
                        [2084952115, 2951772258],
                        [1351806869, 169269771],
                        [2469979804, 86740603],
                        [1163545420, 4264616949],
                        [1795352113, 2511146232],
                        [1796715044, 3134635815],
                        [3521170642, 1538900329],
                        [3725363621, 1455009392],
                        [1342594643, 1512127734],
                        [2618386938, 662157428],
                        [2028859350, 2494504685],
                        [1841905045, 648351336],
                        [4002935891, 4033319405],
                        [850071259, 1768358867],
                        [979915719, 3876018087],
                        [830889197, 1629549437],
                        [1744763229, 2455795856],
                        [522919199, 368499868],
                        [3063822504, 2522639205],
                        [2861636095, 407686388],
                        [4097602344, 1945259027],
                        [4215946617, 1251639506],
                        [894485042, 534122652],
                        [924809191, 1807237502],
                        [1811585710, 1589663609],
                        [3439653887, 1722232],
                        [3810997538, 105152714],
                        [2677100683, 4291805514],
                        [77233985, 102407776],
                        [4239834691, 2851274395],
                        [148802076, 2006440603],
                        [2409138150, 126301601],
                        [3048474397, 3217504870],
                        [588133437, 4221603123],
                        [1139638106, 263087485],
                        [982032635, 3165674595],
                        [562514827, 1294842959],
                        [467575086, 905357513],
                        [1405117894, 3370530088],
                        [3813285157, 242912619],
                        [3601878331, 1985076606],
                        [1586505598, 2092146221],
                        [738488098, 103663229],
                        [2970334297, 321718822],
                        [1068097019, 1742926233],
                        [235518094, 420804527],
                        [283685722, 4092504887],
                        [2666392744, 3799169331],
                        [3569817788, 1256762975],
                        [2169728352, 292617248],
                        [2444571896, 2239859206],
                        [3967907832, 1066404216],
                        [420376911, 2913277294],
                        [3046293305, 2956347747],
                        [2311278792, 2477686209],
                        [2885955184, 4172514290],
                        [3030078181, 2275536480],
                        [4212469731, 4280736393],
                        [1046900335, 1773022229],
                        [995380926, 1414273529],
                        [3892683234, 2429494358],
                        [615726237, 2127712535],
                        [3880203074, 2071130305],
                        [176180504, 3070850165],
                        [1474506861, 2283723599],
                        [1256707747, 1857412043],
                        [764236850, 359687368],
                        [3521530334, 511649419],
                        [2318567964, 3992868140],
                        [128167623, 2518992858],
                        [2220129756, 1042300052],
                        [2567608573, 1349636707],
                        [441446694, 384760969],
                        [4143447316, 829506048],
                        [817912603, 2738025500],
                        [2368091832, 357934982],
                        [1187643061, 1561463042],
                        [3438021235, 3030161697],
                        [1318922279, 895468690],
                        [434876457, 1130220303],
                        [1180291767, 1132759596],
                        [2520707785, 1798553137],
                        [1962430872, 2958700157],
                        [1510954061, 3534879512],
                        [57831539, 3269538993],
                        [3354831405, 3852135009],
                        [891783098, 2698494511],
                        [2555636406, 996018997],
                        [2881342935, 3982231648],
                        [3473267445, 2894952368],
                        [1238029452, 3958679326],
                        [2051805420, 559465638],
                        [3655936674, 1186951582],
                        [330209165, 167662935],
                        [1929681327, 2450868735],
                        [1313566811, 2458925988],
                        [4283920930, 3243182650],
                        [1438004300, 4185567150],
                        [3093439067, 89876832],
                        [3401620219, 3721579956],
                        [3673745794, 2682874719],
                        [3053321309, 825410712],
                        [822915968, 3681514755],
                        [3900685126, 561657358],
                        [553823814, 1857753416],
                        [4166295066, 983949325],
                        [128359165, 3426887194],
                        [3300989119, 3884968622],
                        [4193552686, 3647722552],
                        [452189154, 1569670618],
                        [4122259632, 3537825460],
                        [2519387887, 2821594244],
                        [74333898, 2940550377],
                        [4032631446, 2173999692],
                        [2521268686, 1934310532],
                        [2620314688, 2177785789],
                        [1378755571, 2455646622],
                        [394133753, 4231198609],
                        [734399075, 2800989170],
                        [573292462, 1634883078],
                        [1214417373, 3426576256],
                        [2110224475, 2399009920],
                        [2331215665, 3224086912],
                        [531326186, 698539511],
                        [3839443603, 583861850],
                        [2644531398, 2017784332],
                        [616620850, 3070237104],
                        [590349237, 2798642861],
                        [3582377217, 3317831670],
                        [1582708616, 1596570667],
                        [2126148205, 2358511947],
                        [173450736, 3219362418],
                        [3616831144, 1323437318],
                        [2655785577, 3131359031],
                        [401600069, 2967397952],
                        [496349349, 4244179910],
                        [2479612086, 2579650653],
                        [1710903074, 2049666425],
                        [3589924952, 690291925],
                        [3266682943, 1900485231],
                        [1496318498, 3025542656],
                        [3459221058, 3389461212],
                        [2091479615, 3140389256],
                        [663040899, 1207089672],
                        [3323704225, 1105530508],
                        [353318429, 2879253542],
                        [2674540957, 941987316],
                        [1688550857, 620657353],
                        [338551967, 4286217277],
                        [204689992, 2239736295],
                        [178008789, 3940832005],
                        [3871613304, 3300636974],
                        [1911672356, 2429684487],
                        [4055679954, 1974461722],
                        [3878217928, 1009991796],
                        [2533095482, 310920740],
                        [2174833823, 3596041637],
                        [1604814460, 2939543881],
                        [1452830254, 4092397851],
                        [2441027029, 4169690209],
                        [3524103304, 3372213855]
                    ],
                    t = [
                        [836181454, 1689436944],
                        [2776523577, 3710710688],
                        [4049974663, 3750330768],
                        [519497435, 2979405513]
                    ],
                    n = [
                        [1892447193, 197291556],
                        [3793382197, 3742120663],
                        [3838936, 2994760034],
                        [479846099, 1018728609],
                        [3476112862, 182272649],
                        [3504620154, 1427438450],
                        [2009473484, 2679350403],
                        [1738755500, 1129731339]
                    ],
                    r = [4174784170, 2938602761],
                    o = {
                        p: 0,
                        P: 1,
                        n: 2,
                        N: 3,
                        b: 4,
                        B: 5,
                        r: 6,
                        R: 7,
                        q: 8,
                        Q: 9,
                        k: 10,
                        K: 11
                    },
                    i = [];
                i[5] = 1, i[6] = 0, i[9] = 3, i[10] = 2, i[17] = 5, i[18] = 4, i[33] = 7, i[34] = 6, i[65] = 9, i[66] = 8, i[129] = 11, i[130] = 10;
                var a, s = [2, 5, 10, 20, 40, 80, 160, 64],
                    c = "nbrq",
                    u = ["", "0000000", "000000", "00000", "0000", "000", "00", "0", ""],
                    l = 16;

                function to32BitHex(e) {
                    var t = e.toString(16);
                    return u[t.length] + t
                }

                function to64BitHex(e) {
                    return to32BitHex(e[0]) + to32BitHex(e[1])
                }

                function hash(i, a) {
                    var c, u, l, d, f, p, m, g, h, v, b, E, O = i.split(" "),
                        _ = O[0].split("/"),
                        y = "w" === O[1],
                        S = 0,
                        P = Number(y),
                        k = P ? 3 : 4;
                    for (l = 7; l >= 0; l -= 1)
                        for (d = 0, m = (f = _[l]).length, p = 0; p < m; p += 1) g = f[p], (b = o[g]) >= 0 && (c = (c ^ (h = e[64 * b + 8 * (7 - l) + d])[0]) >>> 0, u = (u ^ h[1]) >>> 0, b === P && l === k && (S |= 1 << d)), d += Number(g) || 1;
                    return "-" !== O[2] && ((v = O[2]).indexOf("K") > -1 && (c = (c ^ (h = t[0])[0]) >>> 0, u = (u ^ h[1]) >>> 0), v.indexOf("Q") > -1 && (c = (c ^ (h = t[2])[0]) >>> 0, u = (u ^ h[1]) >>> 0), v.indexOf("k") > -1 && (c = (c ^ (h = t[1])[0]) >>> 0, u = (u ^ h[1]) >>> 0), v.indexOf("q") > -1 && (c = (c ^ (h = t[3])[0]) >>> 0, u = (u ^ h[1]) >>> 0)), O[3] && "-" !== O[3] && (E = O[3].charCodeAt(0) - 97, s[E] & S && (c = (c ^ (h = n[E])[0]) >>> 0, u = (u ^ h[1]) >>> 0)), y && (c = (c ^ r[0]) >>> 0, u = (u ^ r[1]) >>> 0), a && "hex" === a ? to64BitHex([c, u]) : [c, u]
                }

                function wrap(e) {
                    var t, n, r, o, i = {};

                    function parseBook(e, t) {
                        var r, o, i, a, s, u, l = n.getUint16(e + 8),
                            d = n.getUint16(e + 10);
                        return o = l >> 9 & 7, a = l >> 3 & 7, s = 7 & l, u = l >> 12 & 7, 4 === (i = l >> 6 & 7) && t && o === a && "-" !== t && (7 === s && (0 === o && t.indexOf("K") > -1 || 7 === o && t.indexOf("k") > -1) ? s -= 1 : 0 === s && (0 === o && t.indexOf("Q") > -1 || 7 === o && t.indexOf("q") > -1) && (s += 2)), r = String.fromCharCode(i + 97) + (o + 1) + String.fromCharCode(s + 97) + (a + 1), u && (r += c[u - 1]), {
                            move: r,
                            weight: d
                        }
                    }

                    function query(e) {
                        return "string" == typeof e && (e = {
                            fen: e
                        }), t(e)
                    }
                    if (i = {
                            query: query,
                            pick: function pick(e) {
                                var t, n, r, o, i, a = 0;
                                if (function sortMoves(e) {
                                        e.sort(function sorter(e, t) {
                                            return t.weight - e.weight
                                        })
                                    }(t = (e = e || {}).moves || query(e)), r = t.length) {
                                    if (e.type && 1 !== r && "best" !== e.type) {
                                        if ("random" === e.type) {
                                            for (o = Math.floor(Math.random() * t.sum) + 1, i = 0; i < r - 1 && !(o <= (a += t[i].weight)); i += 1);
                                            return t[i].move
                                        }
                                        return "randomDisregardWeight" === e.type ? t[Math.floor(Math.random() * r)].move : "worst" === e.type ? t[r - 1].move : ((n = parseInt(e.type) || 1) < 0 && (n = r + n + 1), n < 1 ? n = 1 : n > r && (n = r), t[n - 1].move)
                                    }
                                    return t[0].move
                                }
                            }
                        }, e.getUint32) t = function bufferBookFind(e) {
                        var t, r, o, i, a, s = n.length || n.byteLength || 0,
                            c = e.offset || 0,
                            u = e.fen,
                            d = e.chess960,
                            f = e.checkAll,
                            p = [],
                            m = 0;
                        for (e.hash ? "string" == typeof(t = e.hash) && (t = function hex64ToDec(e) {
                                return [parseInt(e.substr(0, 8), 16), parseInt(e.substr(8), 16)]
                            }(t)) : t = hash(u), !d && u && (a = u.split(" ")[2]), c = 0; c < s; c += l)
                            if (n.getUint32(c) === t[0] && n.getUint32(c + 4) === t[1]) o = parseBook(c, a), p[p.length] = o, m += o.weight, r = !0;
                            else if (r && !f) break;
                        if (p.sum = m, e.relative)
                            for (i = p.length - 1; i >= 0; i -= 1) p[i].relative = Math.round(p[i].weight / m * 1e4);
                        return p
                    }, n = e, i.buffer = n;
                    else
                        for (o in t = function jsonBookFind(e) {
                                var t, n, o, a, s, c, u = 0,
                                    l = e.fen;
                                if (i.useFen) o = l.replace(/ \d+ \d+$/, ""), (t = r[o]) || (a = o.replace(/[a-h][1-8]$/, "-")) !== o && (t = r[a]);
                                else if (e.hash || (e.hash = hash(l, "hex")), t = r[e.hash]) {
                                    if (t[0] && t[0].n && (t = t[0]), t.n && !t.b) return [];
                                    if (t.b) t = function decompressMoves(e) {
                                        var t, n = [],
                                            r = e.b.length;
                                        for (t = 0; t < r; ++t) n.push({
                                            move: e.b[t],
                                            weight: e.w[t]
                                        });
                                        return n
                                    }(t);
                                    else if (!e.chess960 && l)
                                        for (c = l.split(" ")[2], n = t.length - 1; n >= 0; n -= 1)(s = t[n].move.match(/e([18])([ah])\1/)) && ("h" === s[2] && ("1" === s[1] && c.indexOf("K") > -1 || "8" === s[1] && c.indexOf("k") > -1) ? t[n] = {
                                            move: "e" + s[1] + "g" + s[1],
                                            weight: t[n].weight
                                        } : "a" === s[2] && ("1" === s[1] && c.indexOf("Q") > -1 || "8" === s[1] && c.indexOf("q") > -1) && (t[n] = {
                                            move: "e" + s[1] + "c" + s[1],
                                            weight: t[n].weight
                                        }))
                                }
                                if (t)
                                    for (n = t.length - 1; n >= 0; n -= 1) u += Number(t[n].weight);
                                else t = [];
                                return t.sum = u, t
                            }, r = e, i.json = r, r) {
                            i.useFen = o.indexOf(" ") > -1;
                            break
                        }
                    return i
                }

                function getBook(e, t) {
                    ! function ajaxLoad(e, t) {
                        var n = new XMLHttpRequest,
                            r = e.toLowerCase().indexOf(".json") > -1;

                        function onload() {
                            var e;
                            if (n.status >= 200 && n.status < 300 || 304 === n.status || 0 === n.status || 1223 === n.status)
                                if (r) try {
                                    t(null, JSON.parse(n.response))
                                } catch (e) {
                                    t(e)
                                } else e = new DataView(n.response), t(null, e);
                                else t(new Error("Error code: " + n.status))
                        }
                        n.open("GET", e, !0), r || (n.responseType = "arraybuffer"), n.onload = onload, n.onerror = onload, n.send()
                    }(e, function onload(e, n) {
                        var r;
                        if (n && (r = wrap(n)), t) return t(e, r);
                        if (e) throw e;
                        return r
                    })
                }
                return {
                    hash: hash,
                    loadBook: (a = {}, function loadBook(e, t) {
                        a[e] ? a[e].book ? setTimeout(function() {
                            t(null, a[e].book)
                        }, 0) : a[e].cbs.push(t) : (a[e] = {
                            cbs: [t]
                        }, getBook(e, function onload(t, n) {
                            var r = a[e].cbs;
                            t ? delete a[e] : (a[e].book = n, a[e].cbs = void 0), r.forEach(function(e) {
                                setTimeout(function() {
                                    e(t, n)
                                }, 0)
                            })
                        }))
                    }),
                    to64BitHex: to64BitHex,
                    zobristPiece: e,
                    zobristCastle: t,
                    zobristEnPassant: n,
                    zobristTurn: r,
                    zobristPieceValue: o,
                    zobristPieceValueNumbers: i
                }
            }(), o = function init() {
                var e, t, n, o, i = {
                        Chess: 0,
                        Chess960: 1,
                        Crazyhouse: 2,
                        "3-check": 3,
                        "King of the Hill": 4,
                        Bughouse: 5,
                        chess960: 1,
                        Fischerandom: 1,
                        fischerandom: 1,
                        crazyhouse: 2,
                        "three-check": 3,
                        kingofthehill: 4,
                        koth: 4,
                        bughouse: 5
                    },
                    a = ["Chess", "Chess960", "Crazyhouse", "3-check", "King of the Hill", "Bughouse"],
                    c = {
                        a8: 0,
                        b8: 1,
                        c8: 2,
                        d8: 3,
                        e8: 4,
                        f8: 5,
                        g8: 6,
                        h8: 7,
                        a7: 16,
                        b7: 17,
                        c7: 18,
                        d7: 19,
                        e7: 20,
                        f7: 21,
                        g7: 22,
                        h7: 23,
                        a6: 32,
                        b6: 33,
                        c6: 34,
                        d6: 35,
                        e6: 36,
                        f6: 37,
                        g6: 38,
                        h6: 39,
                        a5: 48,
                        b5: 49,
                        c5: 50,
                        d5: 51,
                        e5: 52,
                        f5: 53,
                        g5: 54,
                        h5: 55,
                        a4: 64,
                        b4: 65,
                        c4: 66,
                        d4: 67,
                        e4: 68,
                        f4: 69,
                        g4: 70,
                        h4: 71,
                        a3: 80,
                        b3: 81,
                        c3: 82,
                        d3: 83,
                        e3: 84,
                        f3: 85,
                        g3: 86,
                        h3: 87,
                        a2: 96,
                        b2: 97,
                        c2: 98,
                        d2: 99,
                        e2: 100,
                        f2: 101,
                        g2: 102,
                        h2: 103,
                        a1: 112,
                        b1: 113,
                        c1: 114,
                        d1: 115,
                        e1: 116,
                        f1: 117,
                        g1: 118,
                        h1: 119
                    },
                    u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    d = 0,
                    f = 0,
                    p = 0,
                    m = -1,
                    g = 1,
                    h = 2,
                    v = 4,
                    b = 8,
                    E = 16,
                    O = 32,
                    _ = 64,
                    y = 128,
                    S = 3,
                    P = 252,
                    k = 255,
                    C = 256,
                    A = 512,
                    w = 112,
                    T = 1,
                    M = 2,
                    N = 4,
                    D = 3,
                    j = 7,
                    I = 14,
                    R = 21,
                    L = 127,
                    F = "pnbrqkPNBRQK",
                    B = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                    x = [];
                x[5] = [-16, -17, -15], x[6] = [16, 17, 15], x[8] = [-18, -33, -31, -14, 18, 33, 31, 14], x[16] = [-17, -15, 17, 15], x[32] = [-16, 1, 16, -1], x[64] = [-17, -16, -15, 1, 17, 16, 15, -1], x[128] = [-17, -16, -15, 1, 17, 16, 15, -1];
                var V = {
                        P: 5,
                        p: 6,
                        N: 9,
                        n: 10,
                        B: 17,
                        b: 18,
                        R: 33,
                        r: 34,
                        Q: 65,
                        q: 66,
                        K: 129,
                        k: 130
                    },
                    U = {
                        P: 4,
                        p: 4,
                        N: 8,
                        n: 8,
                        B: 16,
                        b: 16,
                        R: 32,
                        r: 32,
                        Q: 64,
                        q: 64,
                        K: 128,
                        k: 128
                    },
                    K = {
                        5: "P",
                        6: "p",
                        9: "N",
                        10: "n",
                        17: "B",
                        18: "b",
                        33: "R",
                        34: "r",
                        65: "Q",
                        66: "q",
                        129: "K",
                        130: "k"
                    },
                    q = {
                        9: "N",
                        10: "N",
                        17: "B",
                        18: "B",
                        33: "R",
                        34: "R",
                        65: "Q",
                        66: "Q",
                        129: "K",
                        130: "K"
                    },
                    G = [80, 0, 0, 0, 0, 0, 0, 96, 0, 0, 0, 0, 0, 0, 80, 0, 0, 80, 0, 0, 0, 0, 0, 96, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 80, 0, 0, 0, 0, 96, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 96, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 96, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 8, 96, 8, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 212, 224, 212, 8, 0, 0, 0, 0, 0, 0, 96, 96, 96, 96, 96, 96, 224, 0, 224, 96, 96, 96, 96, 96, 96, 0, 0, 0, 0, 0, 0, 8, 212, 224, 212, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 8, 96, 8, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 96, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 96, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 96, 0, 0, 0, 0, 80, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 96, 0, 0, 0, 0, 0, 80, 0, 0, 80, 0, 0, 0, 0, 0, 0, 96, 0, 0, 0, 0, 0, 0, 80],
                    H = [336, 80, 80, 0, 0, 0, 96, 352, 96, 0, 0, 0, 80, 80, 336, 0, 80, 336, 80, 80, 0, 0, 96, 352, 96, 0, 0, 80, 80, 336, 80, 0, 80, 80, 336, 80, 80, 0, 96, 352, 96, 0, 80, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 80, 96, 352, 96, 80, 80, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 88, 120, 360, 120, 88, 336, 80, 80, 0, 0, 0, 0, 0, 0, 80, 88, 476, 252, 508, 252, 476, 88, 80, 0, 0, 0, 0, 96, 96, 96, 96, 120, 252, 252, 252, 252, 252, 120, 96, 96, 96, 96, 0, 352, 352, 352, 352, 360, 508, 252, 0, 252, 508, 360, 352, 352, 352, 352, 0, 96, 96, 96, 96, 120, 252, 252, 252, 252, 252, 120, 96, 96, 96, 96, 0, 0, 0, 0, 80, 88, 476, 252, 508, 252, 476, 88, 80, 0, 0, 0, 0, 0, 0, 80, 80, 336, 88, 120, 360, 120, 88, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 80, 80, 96, 352, 96, 80, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 80, 0, 96, 352, 96, 0, 80, 80, 336, 80, 80, 0, 80, 336, 80, 80, 0, 0, 96, 352, 96, 0, 0, 80, 80, 336, 80, 0, 336, 80, 80, 0, 0, 0, 96, 352, 96, 0, 0, 0, 80, 80, 336],
                    z = [336, 80, 80, 0, 0, 0, 96, 352, 96, 96, 0, 0, 80, 80, 336, 0, 80, 336, 80, 80, 0, 0, 96, 352, 96, 96, 0, 80, 80, 336, 80, 0, 80, 80, 336, 80, 80, 0, 96, 352, 96, 96, 80, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 80, 96, 352, 96, 112, 80, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 88, 120, 360, 120, 120, 336, 80, 80, 0, 0, 0, 0, 0, 0, 80, 88, 476, 252, 508, 252, 508, 88, 80, 0, 0, 0, 0, 96, 96, 96, 96, 120, 252, 252, 252, 252, 252, 252, 104, 96, 96, 96, 0, 352, 352, 352, 352, 360, 508, 252, 0, 252, 508, 488, 352, 352, 352, 352, 0, 96, 96, 96, 96, 120, 252, 252, 252, 252, 252, 252, 104, 96, 96, 96, 0, 0, 0, 0, 80, 88, 476, 252, 508, 252, 508, 88, 80, 0, 0, 0, 0, 0, 0, 80, 80, 336, 88, 120, 360, 120, 120, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 80, 80, 96, 352, 96, 112, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 80, 0, 96, 352, 96, 96, 80, 80, 336, 80, 80, 0, 80, 336, 80, 80, 0, 0, 96, 352, 96, 96, 0, 80, 80, 336, 80, 0, 336, 80, 80, 0, 0, 0, 96, 352, 96, 96, 0, 0, 80, 80, 336],
                    $ = [336, 80, 80, 0, 0, 96, 96, 352, 96, 0, 0, 0, 80, 80, 336, 0, 80, 336, 80, 80, 0, 96, 96, 352, 96, 0, 0, 80, 80, 336, 80, 0, 80, 80, 336, 80, 80, 96, 96, 352, 96, 0, 80, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 112, 96, 352, 96, 80, 80, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 120, 120, 360, 120, 88, 336, 80, 80, 0, 0, 0, 0, 0, 0, 80, 88, 508, 252, 508, 252, 476, 88, 80, 0, 0, 0, 0, 96, 96, 96, 104, 252, 252, 252, 252, 252, 252, 120, 96, 96, 96, 96, 0, 352, 352, 352, 352, 488, 508, 252, 0, 252, 508, 360, 352, 352, 352, 352, 0, 96, 96, 96, 104, 252, 252, 252, 252, 252, 252, 120, 96, 96, 96, 96, 0, 0, 0, 0, 80, 88, 508, 252, 508, 252, 476, 88, 80, 0, 0, 0, 0, 0, 0, 80, 80, 336, 120, 120, 360, 120, 88, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 80, 112, 96, 352, 96, 80, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 80, 96, 96, 352, 96, 0, 80, 80, 336, 80, 80, 0, 80, 336, 80, 80, 0, 96, 96, 352, 96, 0, 0, 80, 80, 336, 80, 0, 336, 80, 80, 0, 0, 96, 96, 352, 96, 0, 0, 0, 80, 80, 336],
                    W = [336, 80, 80, 0, 0, 96, 96, 352, 96, 96, 0, 0, 80, 80, 336, 0, 80, 336, 80, 80, 0, 96, 96, 352, 96, 96, 0, 80, 80, 336, 80, 0, 80, 80, 336, 80, 80, 96, 96, 352, 96, 96, 80, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 112, 96, 352, 96, 112, 80, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 120, 120, 360, 120, 120, 336, 80, 80, 0, 0, 0, 0, 0, 0, 80, 88, 508, 252, 508, 252, 508, 88, 80, 0, 0, 0, 0, 96, 96, 96, 104, 252, 252, 252, 252, 252, 252, 252, 104, 96, 96, 96, 0, 352, 352, 352, 352, 488, 508, 252, 0, 252, 508, 488, 352, 352, 352, 352, 0, 96, 96, 96, 104, 252, 252, 252, 252, 252, 252, 252, 104, 96, 96, 96, 0, 0, 0, 0, 80, 88, 508, 252, 508, 252, 508, 88, 80, 0, 0, 0, 0, 0, 0, 80, 80, 336, 120, 120, 360, 120, 120, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 80, 112, 96, 352, 96, 112, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 80, 96, 96, 352, 96, 96, 80, 80, 336, 80, 80, 0, 80, 336, 80, 80, 0, 96, 96, 352, 96, 96, 0, 80, 80, 336, 80, 0, 336, 80, 80, 0, 0, 96, 96, 352, 96, 96, 0, 0, 80, 80, 336],
                    Q = [336, 80, 80, 112, 112, 112, 96, 352, 96, 96, 112, 112, 112, 80, 336, 0, 80, 336, 80, 112, 112, 112, 112, 352, 96, 112, 112, 112, 112, 336, 80, 0, 80, 80, 336, 112, 112, 112, 112, 368, 112, 112, 112, 112, 368, 80, 80, 0, 80, 80, 80, 368, 112, 112, 112, 368, 112, 112, 112, 368, 112, 80, 80, 0, 80, 80, 80, 112, 368, 120, 120, 376, 120, 120, 368, 112, 112, 80, 80, 0, 0, 80, 88, 120, 120, 508, 252, 508, 252, 508, 120, 120, 120, 88, 80, 0, 96, 104, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 104, 0, 352, 352, 480, 480, 488, 508, 252, 0, 252, 508, 488, 480, 480, 480, 352, 0, 96, 104, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 104, 0, 0, 80, 88, 120, 120, 508, 252, 508, 252, 508, 120, 120, 120, 88, 80, 0, 80, 80, 80, 112, 368, 120, 120, 376, 120, 120, 368, 112, 112, 80, 80, 0, 80, 80, 80, 368, 112, 112, 112, 368, 112, 112, 112, 368, 112, 80, 80, 0, 80, 80, 336, 112, 112, 112, 112, 368, 112, 112, 112, 112, 368, 80, 80, 0, 80, 336, 80, 112, 112, 112, 112, 352, 96, 112, 112, 112, 112, 336, 80, 0, 336, 80, 80, 112, 112, 112, 96, 352, 96, 96, 112, 112, 112, 80, 336],
                    Y = [17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0, 0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 33, 16, 31, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 17, 16, 15, 14, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -14, -15, -16, -17, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, -31, -16, -33, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0, 0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0, -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17],
                    J = [0, 5, 8, 11, 14],
                    X = [31, 7, 7, 7, 63],
                    Z = {
                        P: 0,
                        p: 0,
                        N: 5,
                        n: 5,
                        B: 8,
                        b: 8,
                        R: 11,
                        r: 11,
                        Q: 14,
                        q: 14
                    },
                    ee = [v, b, E, O, _],
                    te = ["", "N", "B", "R", "Q"],
                    ne = {
                        CAPTURE: 1,
                        BIG_PAWN: 2,
                        EP_CAPTURE: 4,
                        ANY_CAPTURE: 5,
                        PROMOTION: 8,
                        KSIDE_CASTLE: 16,
                        QSIDE_CASTLE: 32,
                        KQSIDE_CASTLE: 48,
                        DROP: 64,
                        DROP_OR_PROMOTE: 72
                    },
                    re = [0, 6, 1],
                    oe = {
                        K: 119,
                        Q: 112,
                        k: 7,
                        q: 0,
                        A: 112,
                        B: 113,
                        C: 114,
                        D: 115,
                        E: 116,
                        F: 117,
                        G: 118,
                        H: 119,
                        a: 0,
                        b: 1,
                        c: 2,
                        d: 3,
                        e: 4,
                        f: 5,
                        g: 6,
                        h: 7
                    },
                    ie = ["Event", "Site", "Date", "Round", "White", "Black", "Result"],
                    ae = ["Event", "Site", "Date", "Round", "White", "Black", "Result", "Variant", "SetUp", "FEN", "WhiteA", "WhiteB", "BlackA", "BlackB"];

                function rank(e) {
                    return e >> 4
                }

                function file(e) {
                    return 7 & e
                }

                function algebraic(e) {
                    return String.fromCharCode(file(e) + 97) + (8 - rank(e))
                }

                function swapColor(e) {
                    return 3 - e
                }

                function hashNum(e, t) {
                    e[0] = (e[0] ^ t[0]) >>> 0, e[1] = (e[1] ^ t[1]) >>> 0
                }

                function completeFen(e) {
                    var t, n;
                    return (t = ["", " w - - 0 1", " - - 0 1", " - 0 1", " 0 1", " 1"][(n = (e = e.trim()).split(" ")).length]) && e ? e += t : "0" === n[5] && (n[5] = 1, e = n.join(" ")), e
                }

                function createVariantZobristNumbers() {
                    r.zobristCheck = [
                        [441249556, 340005552],
                        [1040760204, 311043682],
                        [1621584863, 1749286446],
                        [1006868636, 1625552915],
                        [1953853171, 24921145],
                        [161251506, 1935545265]
                    ]
                }

                function validateFen(e, t) {
                    var n, r, o, a, s, c, u, l, d, f, p, m, g, h, v, b, E, O, _, y, S = /^(?:[A-H]{1,2}[a-h]{0,2}|[A-H]{0,2}[a-h]{1,2}|KQ?k?q?|Qk?q?|kq?|q|-)$/,
                        P = 1 * t === i.Crazyhouse || i[t] === i.Crazyhouse || 1 * t === i.Bughouse || i[t] === i.Bughouse,
                        k = 0,
                        C = 0,
                        A = !0,
                        w = "",
                        T = {
                            0: 0,
                            7: 0
                        },
                        M = {
                            0: 0,
                            7: 0
                        },
                        N = {
                            0: "k",
                            7: "K"
                        },
                        D = {
                            0: "r",
                            7: "R"
                        },
                        j = 1 * t === i.Chess960 || i[t] === i.Chess960;
                    if (!e) return 1;
                    if ((1 * t === i.Bughouse || i[t] === i.Bughouse) && 2 === (s = e.split(" | ")).length) return 0 === (c = validateFen(s[0], t)) && (c = validateFen(s[1], t)), c;
                    if (s = e.split(/\s+/), (1 * t === i["3-check"] || i[t] === i["3-check"]) && 7 === s.length && (a = s.pop(), !/^\+[0-3]\+[0-3]$/.test(a) || "+3+3" === a)) return 14;
                    if (6 !== s.length) return 1;
                    if (/\D|.{7,}|^0|^$/.test(s[5])) return 2;
                    if (/\D|.{7,}|^0.|^$/.test(s[4])) return 3;
                    if (!/^(?:-|[abcdefgh][36])$/.test(s[3])) return 4;
                    if (f = s[2], j) {
                        if (!S.test(f)) return 12
                    } else if (!/^(?:KQ?k?q?|Qk?q?|kq?|q|-)$/.test(f)) {
                        if (void 0 !== t || !S.test(f)) return 5;
                        j = !0
                    }
                    if ("w" !== s[1] && "b" !== s[1]) return 6;
                    if (P && (s[0] = s[0].replace(/~(?=.*\/)/g, "")), r = s[0].split("/"), P && 9 === r.length && (a = r.pop(), !/^[pnbrq]{0,63}$/i.test(a))) return 13;
                    if (8 !== r.length) return 7;
                    if ("3" === s[3][1] && "w" === s[1] || "6" === s[3][1] && "b" === s[1]) return 11;
                    for ("-" !== s[3] && (u = 4 === (C = "3" === s[3][1] ? 4 : 3) ? 5 : 2, k = s[3].charCodeAt(0) - 97, A = !1, w = 4 === C ? "P" : "p"), n = 0; n < r.length; ++n) {
                        for (O = 0, _ = !1, y = 0; y < r[n].length; y++)
                            if (+(o = r[n][y]) == +o) {
                                if (_) return 8;
                                O += 1 * o, _ = !0
                            } else {
                                if (-1 === F.indexOf(o)) return 9;
                                if (A || C !== n || k !== O || w !== o || (A = !0), u === n && k === O) return 11;
                                n % 7 == 0 && (o === N[n] ? M[n] = 1 << O : o === D[n] && (T[n] |= 1 << O)), ++O, _ = !1
                            }
                        if (8 !== O) return 10
                    }
                    if (!A) return 11;
                    if ("-" !== f)
                        if (j)
                            for (m = {
                                    0: 0,
                                    1: 0,
                                    2: 252,
                                    4: 248,
                                    8: 240,
                                    16: 224,
                                    32: 192,
                                    64: 128,
                                    128: 0
                                }, p = {
                                    0: 0,
                                    1: 0,
                                    2: 1,
                                    4: 3,
                                    8: 7,
                                    16: 15,
                                    32: 31,
                                    64: 63,
                                    128: 0
                                }, E = {
                                    0: [0, 0],
                                    7: [0, 0]
                                }, n = f.length - 1; n >= 0; --n) {
                                if (v = f.charCodeAt(n), b && b > v && b - v < 8) return 15;
                                if (75 === v ? g = T[h = 7] & m[M[h]] : 81 === v ? g = T[h = 7] & p[M[h]] : 107 === v ? g = T[h = 0] & m[M[h]] : 113 === v ? g = T[h = 0] & p[M[h]] : (g = 1 << v - ((h = v >= 97 ? 0 : 7) ? 65 : 97), b = v), !g || 0 != (g & g - 1)) return 15;
                                if (M[h] < 2 || M[h] > 64 || (g & T[h]) !== g) return 15;
                                if (++E[h][1 * (M[h] < g)] > 1) return 15
                            } else {
                                if ((l = (f.indexOf("K") > -1 ? 128 : 0) | (f.indexOf("Q") > -1 ? 1 : 0)) && (16 !== M[7] || (l & T[7]) !== l)) return 15;
                                if ((d = (f.indexOf("k") > -1 ? 128 : 0) | (f.indexOf("q") > -1 ? 1 : 0)) && (16 !== M[0] || (d & T[0]) !== d)) return 15
                            }
                    return 0
                }

                function handToString(e, t) {
                    var n, r, o = "",
                        i = 0,
                        a = t ? 6 : 0;
                    if (e)
                        for (; i < 5;) {
                            for (n = e >> J[i] & X[i], r = 0; r < n; ++r) o += F[i + a];
                            ++i
                        }
                    return o
                }

                function hashEP(e, t, n, o) {
                    e[n + 1] !== o && e[n - 1] !== o || hashNum(t, r.zobristEnPassant[file(n)])
                }

                function addPawnMove(e, n, r) {
                    var o;
                    (0 === t || u[n] & M) && (rank(n) % 7 == 0 ? (o = r | ne.PROMOTION | e << j | n << I, l[f++] = o | 4 << R, l[f++] = o | 3 << R, l[f++] = o | 2 << R, l[f++] = o | 1 << R) : l[f++] = r | e << j | n << I)
                }

                function kingOfTheHillWin(e) {
                    switch (e) {
                        case 67:
                        case 68:
                        case 51:
                        case 52:
                            return !0
                    }
                    return !1
                }

                function canCastle960(e, t, n, r) {
                    var o, i, a, s = t + (n - t % 8),
                        c = n > t % 8 ? 1 : -1;
                    for (a = t + c; a !== s; a += c)
                        if (e[a]) return !1;
                    if (i = (o = r === g ? 1 === c ? 118 : 114 : 1 === c ? 6 : 2) - c, u[o] || e[o] && o !== t && o !== s || e[i] && i !== t && i !== s) return !1;
                    if (o !== t)
                        for (a = t + (c = o > t ? 1 : -1); a !== o; a += c)
                            if (a !== s && e[a] || u[a]) return !1;
                    return !0
                }
                var se = function() {
                        function createHeader(e, t) {
                            return "[" + e + ' "' + String(t).replace(/(\"|\\)/g, "\\$1") + '"]'
                        }
                        return function generatePgn(e, t, n, r, o, a) {
                            var s, c, u = "string" == typeof e.newline ? e.newline : "\n",
                                l = void 0 === e.spaceAfterPeriods || e.spaceAfterPeriods,
                                d = "";
                            for (s in d += createHeader("Event", t.Event) + u, d += createHeader("Site", t.Site) + u, d += createHeader("Date", t.Date) + u, d += createHeader("Round", t.Round) + u, o === i.Bughouse ? (d += createHeader("WhiteA", t.WhiteA || "?") + u, d += createHeader("BlackA", t.BlackA || "?") + u, d += createHeader("WhiteB", t.WhiteB || "?") + u, d += createHeader("BlackB", t.BlackB || "?") + u) : (d += createHeader("White", t.White) + u, d += createHeader("Black", t.Black) + u), d += createHeader("Result", t.Result) + u, o && (d += createHeader("Variant", t.Variant) + u), t.FEN && t.FEN !== B && (d += createHeader("SetUp", "1") + u, d += createHeader("FEN", t.FEN) + u), t) - 1 === ae.indexOf(s) && (d += createHeader(s, t[s]) + u);
                            if (d += u, c = function createLine(e, t, n, r, o, a) {
                                    var s, c, u, l, d, f, p, m, v, b, E, O, _ = [],
                                        y = "",
                                        S = !0,
                                        P = t[n],
                                        k = P.length,
                                        C = "";
                                    if (P.commands && !a)
                                        for (d in P.commands) C += "[%" + d + " " + P.commands[d] + "]";
                                    for (P.initComment && (C = (C + " " + P.initComment.replace(/(\"|\}|\%|\\)/g, "\\$1")).trim()), C && _.push("{" + C + "}"), u = 0; u < k; ++u) {
                                        if (p = (c = P[u]).color === g, y = "", C = "", s = c.commands, r !== i.Bughouse ? (S && !p ? y = e + "..." : p && (y = e + "."), o && (p || S) && (y += " ")) : (_.bughouseOrder || (_.bughouseOrder = []), _.bughouseOrder.push(c.bughouseOrder), u || (_.blackCountOffset = P[0].color === h ? 1 : 0)), y += c.san, c.annotation && (y += c.annotation), c.additionalAnnotation && (y += " " + c.additionalAnnotation.join(" ")), S = !1, void 0 === c.time || s || (s = {
                                                clk: (b = c.time, E = void 0, O = void 0, E = Math.floor(b % 36e3 / 600), O = Math.floor(b % 36e3 % 600) / 10, Math.floor(b / 36e3) + ":" + (E < 10 ? "0" : "") + E + ":" + (O < 10 ? "0" : "") + O)
                                            }), s && !a)
                                            for (d in s) C += "[%" + d + " " + s[d] + "]";
                                        if (c.comment && (C = (C + " " + c.comment.replace(/(\"|\}|\%|\\)/g, "\\$1")).trim()), C && (y += " {" + C + "}", S = !0), _.push(y), c.lines)
                                            for (m = c.lines.length, l = 0; l < m; ++l) t[v = c.lines[l]].length && ((f = createLine(e, t, v, r, o, a))[0] = "(" + f[0], f[f.length - 1] += ")", _ = _.concat(f), S = !0);
                                        p || e++
                                    }
                                    return _
                                }(r, n, 0, o, l, e.hideCommands), o === i.Bughouse) {
                                if (a.isDependent) return c;
                                c = function makeBugHousePgn(e, t, n) {
                                    var r = t,
                                        o = e.siblingGame.pgn(),
                                        i = 0,
                                        a = 0,
                                        s = [];
                                    for (t.bughouseOrder = t.bughouseOrder || [], o.bughouseOrder = o.bughouseOrder || []; t.bughouseOrder.length || o.bughouseOrder.length;) !t.bughouseOrder.length || o.bughouseOrder.length && t.bughouseOrder[0] > o.bughouseOrder[0] ? (o.bughouseOrder.shift(), s.push("B")) : (t.bughouseOrder.shift(), s.push("A"));
                                    return t = [], s.forEach(function(s) {
                                        var c, u, l, d = "";
                                        "A" === s ? (c = r, u = ++i, l = e.startingMoveNumber()) : (c = o, u = ++a, l = e.siblingGame.startingMoveNumber()), d = String(Math.floor((u + 1) / 2) + l - 1), (c.blackCountOffset + u) % 2 ? d += s : d += s.toLowerCase(), d += "." + (n ? " " : "") + c.shift(), t.push(d)
                                    }), t
                                }(a, c, l)
                            }
                            return c.push(t.Result), d + function wordWrap(e, t, n) {
                                return t < 1 ? e : (t = "number" == typeof t ? t : 80, e.replace(new RegExp("(.{1," + t + "})(?: |$|\r?\n)", "g"), "$1" + n).slice(0, -n.length))
                            }(c.join(" "), e.maxWidth, u)
                        }
                    }(),
                    ce = function() {
                        var e = "!?‼⁇⁉⁈□∇Δ∞⩲⩱±∓⨀⟳→↑⇆∆⌓⇔⇗⟫⟪✕⊥⊕○⇄↻⊙~",
                            t = /\[%(\S+)\s([^\]]+)\]/,
                            n = /^(?:[+=~\/\-\u2212]+|T?N|RR|D)$/;

                        function extractCommands(e) {
                            var n, r, o = {};
                            do {
                                (n = t.exec(e.value)) && (r = !0, e.value = e.value.replace(n[0], "").trim(), o[n[1]] = n[2])
                            } while (n);
                            r && (e.commands = o)
                        }

                        function isSplitGame(e, t, n) {
                            for (var r; ++t < n;)
                                if (r = e[t].match(/^\s*(\S+)/)) return /^(?:\[|1(?:\.|$))/.test(r[1])
                        }
                        return function tokenize(t, r) {
                            var o, i, a, s, c, u, l, d = "tags",
                                f = [],
                                p = {
                                    type: d,
                                    value: ""
                                },
                                m = 0,
                                g = [],
                                h = !0;
                            for (r = r || {}, s = (o = t.split(/\r?\n/)).length, i = 0; i < s; ++i)
                                if ("%" !== (a = o[i].trim())[0])
                                    if (a) {
                                        if (u = (a = " " + a + " ").length, c = 0, h)
                                            for (; c < u; ++c)
                                                if (l = a[c], "tags" === d) {
                                                    if ("[" === l) p = {
                                                        type: d = "tagName",
                                                        value: ""
                                                    };
                                                    else if (l.trim()) {
                                                        p = {
                                                            type: d = "san",
                                                            value: ""
                                                        }, h = !1;
                                                        break
                                                    }
                                                } else if ("tagName" === d) p.value && "" === l.trim() ? (f.push(p), d = "tagValueStart") : " " !== l && (p.value += l);
                                        else if ("tagValueStart" === d) {
                                            if ('"' === l || "“" === l) p = {
                                                type: d = "tagValue",
                                                value: ""
                                            };
                                            else if (l.trim()) return !1
                                        } else if ("tagValue" === d) '"' === l || "”" === l ? (f.push(p), "]" === a[c + 1] ? (p = {
                                            type: d = "tags",
                                            value: ""
                                        }, ++c) : d = "tagEnd") : ("\\" === l && c + 2 < u && (l = a[++c]), c > 0 && (p.value += l));
                                        else if ("]" === l) p = {
                                            type: d = "tags",
                                            value: ""
                                        };
                                        else if (l.trim()) return !1;
                                        for (; c < u; ++c)
                                            if (l = a[c], "san" === d)
                                                if (e.indexOf(l) > -1) "!" === l || "?" === l || e.indexOf(l) < 6 && (l = ["!!", "??", "!?", "?!"][e.indexOf(l) - 2]) ? (p.value && f.push(p), p = {
                                                    type: "a",
                                                    value: l
                                                }, "!" !== a[c + 1] && "?" !== a[c + 1] || (p.value += a[++c]), f.push(p), p = {
                                                    type: "san",
                                                    value: ""
                                                }) : ("∞" === l && "=/" === p.value ? (p.type = "aa", p.value += l) : (p.value && (n.test(p.value) && ("--" !== p.value || r.rejectNullMoves) && (p.type = "aa"), f.push(p)), p = {
                                                    type: "aa",
                                                    value: l
                                                }, "↑" === l && "↑" === a[c + 1] && (p.value = "↻", ++c)), f.push(p), p = {
                                                    type: "san",
                                                    value: ""
                                                });
                                                else if (" " === l || "\t" === l || "\n" === l || "\r" === l || "{" === l || "(" === l || ")" === l) {
                                            if (p.value) {
                                                if ("$" === p.value[0]) p.type = "nag";
                                                else if ("*" === p.value || "1-0" === p.value || "0-1" === p.value || "1/2-1/2" === p.value || "½-½" === p.value) {
                                                    if (c + 1 < u) return !1;
                                                    p.type = "result", "½-½" === p.value && (p.value = "1/2-1/2")
                                                }
                                                n.test(p.value) && ("--" !== p.value || r.rejectNullMoves) && (p.type = "aa"), f.push(p), p = {
                                                    type: d,
                                                    value: ""
                                                }
                                            }
                                            if (" " === l || "\t" === l || "\n" === l || "\r" === l) d = "san";
                                            else if ("{" === l) d = "comment";
                                            else if ("(" === l) d = "san", f.push({
                                                type: "variationStart",
                                                value: ++m
                                            });
                                            else if (f.push({
                                                    type: "variationEnd",
                                                    value: m
                                                }), d = "san", !m--) return !1;
                                            p.type = d
                                        } else if ("." === l || !p.value && +l == +l && "-" !== a[c + 1] && "/" !== a[c + 1]) {
                                            if (+l == +l) switch (p.number || (p.number = ""), p.number += l, a[c + 1]) {
                                                case "A":
                                                case "a":
                                                case "B":
                                                case "b":
                                                    p.number += a[++c], f.push({
                                                        type: "number",
                                                        value: p.number
                                                    }), delete p.number
                                            }
                                        } else p.value += l;
                                        else 0 === c && (p.value = p.value.trim()), "}" !== l ? ("\\" === l && c + 2 < u && (l = a[++c]), p.value += l) : (p.value = p.value.trim(), p.value.indexOf("[") > -1 && extractCommands(p), f.push(p), p = {
                                            type: d = "san",
                                            value: ""
                                        })
                                    } else "tags" === d ? (d = "san", h = !1) : "comment" !== d && "tagValueStart" !== d && !m && f.length && isSplitGame(o, i, s) && ("tagValue" !== f[f.length - 1].type && (g.push(f), f = []), d = "tags", h = !0);
                            return g.push(f), g
                        }
                    }();

                function Chess(ae, ue) {
                    var le, de, fe = 0,
                        pe = !0,
                        me = [],
                        ge = g,
                        he = [],
                        ve = m,
                        be = 0,
                        Ee = 1,
                        Oe = 1,
                        _e = [],
                        ye = [_e],
                        Se = 0;
                    _e.id = Se;
                    var Pe = {},
                        ke = [],
                        Ce = !1,
                        Ae = !1,
                        we = makeMoveChess;

                    function hashPosition() {
                        var e, t, n, o = ge === g ? [4174784170, 2938602761] : [0, 0];
                        for (n = 0; n < 120; ++n) 136 & n && (n += 8), (e = de[n]) && hashNum(o, r.zobristPiece[64 * r.zobristPieceValueNumbers[e & k] + 8 * (7 - rank(n)) + file(n)]);
                        if (Ae)
                            for (t = 1; t < 3; ++t) he[t] && (0 != (he[t] & he[t] - 1) ? (hashNum(o, r.zobristCastle[t - 1]), hashNum(o, r.zobristCastle[t + 1])) : he[t] > 1 << file(me[t]) ? hashNum(o, r.zobristCastle[t - 1]) : hashNum(o, r.zobristCastle[t + 1]));
                        else {
                            for (t = 1; t < 3; ++t) he[t] && (he[t] & ne.KSIDE_CASTLE && hashNum(o, r.zobristCastle[t - 1]), he[t] & ne.QSIDE_CASTLE && hashNum(o, r.zobristCastle[t + 1]));
                            Ce ? function hashHand(e, t) {
                                var n, o, i, a, s, c, u, l = 0;
                                for (n = 1; n < 3; ++n) {
                                    if (o = t[n])
                                        for (i = 0; i < 5;) {
                                            for (s = l + 63 * i, a = o >> J[i] & X[i], c = 0; c < a; ++c) hashNum(e, [31 * (u = r.zobristPiece[s++])[0] >>> 0, 17 * u[1] >>> 0]);
                                            ++i
                                        }
                                    l = 315
                                }
                            }(o, le._hand) : fe === i["3-check"] && function hash3Check(e, t) {
                                t[g] && hashNum(e, r.zobristCheck[t[g] - 1]), t[h] && hashNum(e, r.zobristCheck[t[h] + 2])
                            }(o, ke)
                        }
                        return ve !== m && hashEP(de, o, ve + (ge === g ? 16 : -16), v | ge), o
                    }

                    function getCurrentHash() {
                        var e;
                        return _e.length ? e = _e[_e.length - 1].hash : (_e.hash || (_e.hash = hashPosition()), e = _e.hash), [e[0], e[1]]
                    }

                    function setVariant(e, t) {
                        fe !== (fe = e ? i[e] || 1 * e || i[String(e).replace(/ /g, "").toLowerCase()] || i.Chess : 0) && (fe === i.Bughouse ? (Ce = !0, le.isDependent || (le.siblingGame = Chess(), le.siblingGame.hashing(pe), le.siblingGame.isDependent = !0, le.siblingGame.siblingGame = le, le.siblingGame.header({
                            Variant: "Bughouse"
                        })), createVariantZobristNumbers(), we = makeMoveVariant) : (delete le.siblingGame, Ce = fe === i.Crazyhouse, Ae = fe === i.Chess960, fe ? (createVariantZobristNumbers(), we = makeMoveVariant) : we = makeMoveChess), t || updateSetup(generateFen()))
                    }

                    function disambiguate960Rook(e, t) {
                        for (var n, r, o = e > 7 ? g : h; !(136 & e);) {
                            if ((n = de[e]) & o)
                                if (n & O) {
                                    if (r) return;
                                    r = e % 8 + (o === g ? 65 : 97)
                                } else if (n & y) return r;
                            e += t
                        }
                    }

                    function _clear(e, t, n) {
                        de = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ge = g, me[g] = m, me[h] = m, he[g] = 0, he[h] = 0, le._hand[g] = 0, le._hand[h] = 0, ke[g] = 0, ke[h] = 0, ve = m, be = 0, Ee = 1, t || (ye = [_e = []], Se = 0, _e.id = Se, Pe = {
                            Event: "?",
                            Site: "?",
                            Date: "????.??.??",
                            Round: "?",
                            White: "?",
                            Black: "?",
                            Result: "*"
                        }, e ? setHeader(["Variant", e]) : setVariant(!1, n), n || updateSetup(generateFen()))
                    }

                    function reset(e) {
                        _clear(0, !1, !0), _e.hash = [1178310168, 378666140], de = [34, 10, 18, 66, 130, 18, 10, 34, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 33, 9, 17, 65, 129, 17, 9, 33], Oe = 1, me[g] = 116, me[h] = 4, he[g] = 48, he[h] = 48
                    }

                    function load(e, t, n, r) {
                        var o, s, u, l, d, f, p, b, E, _, P, k, C = 0;
                        if (r ? (k = (o = e.split(" "))[3], P = o[2]) : (k = (o = e.trim().split(/\s+/))[3] || "-", P = o[2] || "-"), void 0 === t ? (31 & P.charCodeAt(0)) < 9 && setVariant(i.Chess960, !0) : setVariant(t, !0), s = o[0], !r && !(s = function fixFenPieces(e, t) {
                                var n, r, o = e.length,
                                    a = 0,
                                    s = 0,
                                    c = t && (t === i.Crazyhouse || t === i.Bughouse);
                                for (n = 0; n < o; ++n)
                                    if (+(r = e[n]) != +r)
                                        if ("/" === r) {
                                            if (8 !== s && (e = e.substr(0, n) + (8 - s) + e.substr(n), ++n, ++o), s = 0, ++a > 7) {
                                                if (!c && n < o - 1 || !/^[pnbrq]{0,63}$/i.test(e.substr(n + 1))) return !1;
                                                break
                                            }
                                        } else if (V[r]) {
                                    if (++s > 8) return !1
                                } else {
                                    if ("~" !== r) return !1;
                                    c && n && /[nbrq]/i.test(e[n - 1]) || (e = e.substr(0, n) + e.substr(n + 1), --n, --o)
                                } else(s += 1 * r) > 8 && (e = e.substr(0, n) + (r - (s - 8)) + e.substr(n + 1), s = 8);
                                return e
                            }(s, fe))) return !1;
                        if (l = s.length, _clear(a[fe], n, !0), Ce) {
                            if (fe === i.Bughouse && !le.isDependent && (f = e.split(" | "), !le.siblingGame.load(1 === f.length ? e : f[1], t, n, r))) return reset(), !1;
                            for (d = 0; d < l; ++d)
                                if (+(p = s[d]) != +p)
                                    if ("/" === p) {
                                        if (C > 111) {
                                            for (++d; d < l; ++d) p = s[d], le._hand[p < "a" ? g : h] += 1 << Z[p] >>> 0;
                                            break
                                        }
                                        C += 8
                                    } else de[C] = V[p], "~" === s[d + 1] && (++d, de[C] |= A), de[C] & y && (me[de[C] & S] = C), ++C;
                            else C += 1 * p
                        } else
                            for (d = 0; d < l; ++d) + (p = s[d]) != +p ? "/" === p ? C += 8 : (de[C] = V[p], de[C] & y && (me[de[C] & S] = C), ++C) : C += 1 * p;
                        if (ge = "b" === o[1] ? h : g, "-" !== P)
                            if (Ae) {
                                for (E = {
                                        1: [0, 0],
                                        2: [0, 0]
                                    }, d = P.length - 1; d >= 0; --d) 75 === (u = P.charCodeAt(d)) ? u = disambiguate960Rook(119, -1) : 81 === u ? u = disambiguate960Rook(112, 1) : 107 === u ? u = disambiguate960Rook(7, -1) : 113 === u && (u = disambiguate960Rook(0, 1)), b = u < 97 ? g : h, _ = oe[String.fromCharCode(u)], (p = de[_]) === (O | b) && (u >= 97 ? me[b] >= 1 && me[b] <= 6 && (he[b] |= 1 << u - 97) : me[b] >= 113 && me[b] <= 118 && (he[b] |= 1 << u - 65), ++E[b][1 * (me[b] < _)]);
                                (E[g][0] > 1 || E[g][1] > 1) && (he[g] = 0), (E[h][0] > 1 || E[h][1] > 1) && (he[h] = 0)
                            } else {
                                if (!r)
                                    for (d = P.length - 1; d >= 0; --d) p = de[oe[P[d]]], b = P.charCodeAt(d) < 97 ? g : h, p === (O | b) && me[b] === (b === g ? 116 : 4) || (P = P.substr(0, d) + P.substr(d + 1) || "-");
                                for (d = P.length - 1; d >= 0; --d) switch (P[d]) {
                                    case "K":
                                        he[g] |= ne.KSIDE_CASTLE;
                                        break;
                                    case "Q":
                                        he[g] |= ne.QSIDE_CASTLE;
                                        break;
                                    case "k":
                                        he[h] |= ne.KSIDE_CASTLE;
                                        break;
                                    case "q":
                                        he[h] |= ne.QSIDE_CASTLE
                                }
                            }
                        return !r && (2 !== k.length || ge === g && "6" !== k[1] || ge === h && "3" !== k[1] || de[k.charCodeAt(0) - 97 + 16 * (8 - ("3" === k[1] ? 4 : 5))] !== (v | swapColor(ge)) || de[c[k]]) && (k = "-"), ve = "-" === k ? m : c[k], be = 1 * o[4] || 0, Ee = 1 * o[5] || 1, fe === i["3-check"] && (o[6] && "+3+3" !== o[6] && (f = o[6].match(/^\+([0-3])\+([0-3])$/)), f = f || [0, 0, 0], ke[g] = 1 * f[1], ke[h] = 1 * f[2]), n || (Oe = Ee, updateSetup(generateFen())), !0
                    }

                    function generateFen() {
                        return fe ? function generateVariantFen() {
                            var e, t, n, r = 0,
                                o = "",
                                a = "";
                            for (e = 0; e < 120; ++e) 136 & e && (r && (o += r), o += "/", r = 0, e += 8), (n = de[e]) ? (r && (o += r, r = 0), o += K[n & k], Ce && n & A && (o += "~")) : ++r;
                            if (r && (o += r), Ce && (o += "/" + handToString(le._hand[g], !0) + handToString(le._hand[h])), Ae) {
                                for (t = he[h], e = 0; t;) 1 & t && (a = String.fromCharCode(e + 97) + a), t >>= 1, ++e;
                                for (t = he[g], e = 0; t;) 1 & t && (a = String.fromCharCode(e + 65) + a), t >>= 1, ++e
                            } else he[g] & ne.KSIDE_CASTLE && (a += "K"), he[g] & ne.QSIDE_CASTLE && (a += "Q"), he[h] & ne.KSIDE_CASTLE && (a += "k"), he[h] & ne.QSIDE_CASTLE && (a += "q");
                            return o += " " + (ge === g ? "w" : "b") + " " + (a || "-") + " " + (ve === m ? "-" : algebraic(ve)) + " " + be + " " + Ee, fe === i["3-check"] ? o += " +" + ke[g] + "+" + ke[h] : fe !== i.Bughouse || le.isDependent || (o += " | " + le.siblingGame.fen()), o
                        }() : function generateStandardFen() {
                            var e, t, n = 0,
                                r = "",
                                o = "";
                            for (e = 0; e < 120; ++e) 136 & e && (n && (r += n), r += "/", n = 0, e += 8), (t = de[e]) ? (n && (r += n, n = 0), r += K[t & k]) : ++n;
                            return n && (r += n), he[g] & ne.KSIDE_CASTLE && (o += "K"), he[g] & ne.QSIDE_CASTLE && (o += "Q"), he[h] & ne.KSIDE_CASTLE && (o += "k"), he[h] & ne.QSIDE_CASTLE && (o += "q"), r += " " + (ge === g ? "w" : "b") + " " + (o || "-") + " " + (ve === m ? "-" : algebraic(ve)) + " " + be + " " + Ee
                        }()
                    }

                    function setHeader(e) {
                        var t, n, r;
                        for (t = 0; t < e.length; t += 2) n = e[t], r = e[t + 1], n && ("Variant" === n && (setVariant(r), r = fe ? a[fe] : void 0), "Result" === n && "*" !== r && "1-0" !== r && "0-1" !== r && "1/2-1/2" !== r && (r = "*"), void 0 !== r ? Pe[n] = String(r) : ie.indexOf(n) > -1 ? Pe[n] = "Date" === n ? "????.??.??" : "?" : delete Pe[n]);
                        return Pe
                    }

                    function updateSetup(e) {
                        _e.length > 0 || Se || (e !== B ? (Pe.SetUp = "1", Pe.FEN = e, _e.hash = null) : (delete Pe.SetUp, delete Pe.FEN, _e.hash = [1178310168, 378666140]))
                    }

                    function get(e) {
                        var t = de[c[e]];
                        return t ? {
                            type: K[t & P | h],
                            color: t & S,
                            promoted: 0 != (t & A)
                        } : null
                    }

                    function calculateLegalMoveInfo(r, i) {
                        var a, s, c, l, d, f, p, g, h, b, E, O, _, S, k = ge,
                            A = y | k,
                            j = u;
                        if (e = [], t = 0, n = 0, o = 0, j[0] = j[1] = j[2] = j[3] = j[4] = j[5] = j[6] = j[7] = j[16] = j[17] = j[18] = j[19] = j[20] = j[21] = j[22] = j[23] = j[32] = j[33] = j[34] = j[35] = j[36] = j[37] = j[38] = j[39] = j[48] = j[49] = j[50] = j[51] = j[52] = j[53] = j[54] = j[55] = j[64] = j[65] = j[66] = j[67] = j[68] = j[69] = j[70] = j[71] = j[80] = j[81] = j[82] = j[83] = j[84] = j[85] = j[86] = j[87] = j[96] = j[97] = j[98] = j[99] = j[100] = j[101] = j[102] = j[103] = j[112] = j[113] = j[114] = j[115] = j[116] = j[117] = j[118] = j[119] = 0, i !== m) {
                            for (_ = function chooseKingThreats(e, t) {
                                    return Ae && he[e] ? Q : he[e] & ne.KSIDE_CASTLE && !de[t + 1] && !de[t + 2] ? he[e] & ne.QSIDE_CASTLE && !de[t - 1] && !de[t - 2] && !de[t - 3] ? (o = ne.KQSIDE_CASTLE, W) : (o = ne.KSIDE_CASTLE, z) : he[e] & ne.QSIDE_CASTLE && !de[t - 1] && !de[t - 2] && !de[t - 3] ? (o = ne.QSIDE_CASTLE, $) : H
                                }(k, i), a = 0; a < 120; ++a)
                                if (136 & a && (a += 8), l = de[a])
                                    if (l & k)(!r || (0 | l) & r) && e.push(a);
                                    else if (0 != ((S = _[a - i + 119]) & l))
                                if (l & v)
                                    for (b = x[l], s = 1; s < 3; ++s) 136 & (g = a + b[s]) || (j[g] |= T, g === i && (++t, j[a] |= M));
                                else
                                    for (h = (b = x[l & P]).length, O = l & w, s = 0; s < h; ++s)
                                        if (E = b[s], !(i > (g = a) && E < 0 && i - g > 16 || i < g && E > 0 && g - i > 16))
                                            for (; !(136 & (g += E));) {
                                                if (j[g] |= T, d = de[g]) {
                                                    if (d & k)
                                                        if (g === i) {
                                                            for (c = g - E; c !== a; c -= E) j[c] |= M;
                                                            j[a] |= M, ++t, O && 0 == (136 & (g += E)) && (j[g] |= T)
                                                        } else if (O && S & C && t < 2)
                                                        for (p = g + E; 0 == (136 & p);) {
                                                            if (f = de[p]) {
                                                                f === A && (j[g] |= N + (Math.abs(E) << D), ++n);
                                                                break
                                                            }
                                                            p += E
                                                        }
                                                    break
                                                }
                                                if (!O) break
                                            }
                            t > 1 && (e = [i])
                        } else e = function getPieces(e, t) {
                            var n, r, o = [];
                            for (n = 0; n < 120; ++n) 136 & n && (n += 8), (r = e[n]) && (r & t) === t && o.push(n);
                            return o
                        }(de, k | r)
                    }

                    function validateEnPassant(e, n) {
                        var r, o, i, a = n + 16 * (ge === g ? 1 : -1);
                        return (1 !== t || 0 != (u[n] & M) || 0 != (u[a] & M)) && (r = de[e], de[n] = r, de[e] = 0, o = de[a], de[a] = 0, i = inCheck(), de[e] = r, de[n] = 0, de[a] = o, !i)
                    }

                    function addCastlingMoves(e) {
                        var t, n, r;
                        if (Ae) {
                            if (he[e])
                                for (n = (t = me[e]) % 8, r = 0; r < 8; ++r) he[e] & 1 << r && canCastle960(de, t, r, e) && (l[f++] = (r > n ? ne.KSIDE_CASTLE : ne.QSIDE_CASTLE) + (t << j) + (t + (r - n) << I), ++r)
                        } else o & ne.KSIDE_CASTLE && (n = (t = me[e]) + 2, 0 === u[t + 1] && 0 === u[t + 2] && (l[f++] = ne.KSIDE_CASTLE + (t << j) + (n << I))), o & ne.QSIDE_CASTLE && (n = (t = me[e]) - 2, 0 === u[t - 1] && 0 === u[t - 2] && (l[f++] = ne.QSIDE_CASTLE + (t << j) + (n << I)))
                    }

                    function generateMoves(r, o) {
                        var i, a, s, c, m, g, h, E, O, _, y = ge,
                            S = swapColor(y),
                            k = me[y];
                        for (calculateLegalMoveInfo(r, k), p = e.length, f = d, O = 0; O < p; ++O)
                            if (i = e[O], c = de[i], !(t && n && u[i] & N))
                                if (c & v)
                                    for (g = x[c], 0 !== n && 0 != (u[i] & N) && u[i] >> D != 16 || (m = i + g[0], 0 === de[m] && (addPawnMove(i, m, 0), re[y] === rank(i) && (m += g[0], de[m] || addPawnMove(i, m, ne.BIG_PAWN)))), a = 1; a < 3; ++a) 136 & (m = i + (h = g[a])) || n && u[i] & N && u[i] >> D !== Math.abs(h) || (de[m] & S ? addPawnMove(i, m, ne.CAPTURE) : m === ve && validateEnPassant(i, m) && (l[f++] = ne.EP_CAPTURE | i << j | m << I));
                                else {
                                    if (n && u[i] & N) {
                                        if (c & b) continue;
                                        if (!(G[i - me[y] + 119] & c)) continue;
                                        g = [h = u[i] >> D, -h]
                                    } else g = x[c & P];
                                    if (_ = i << j, i === k) {
                                        for (a = 0; a < 8; ++a) 0 == (136 & (m = i + (h = g[a]))) && (de[m] ? de[m] & S && 0 == (u[m] & T) && (l[f++] = ne.CAPTURE | _ | m << I) : 0 == (u[m] & T) && (l[f++] = _ | m << I));
                                        0 === t && addCastlingMoves(y)
                                    } else
                                        for (s = g.length, E = c & w, a = 0; a < s; ++a)
                                            for (h = g[a], m = i; !(136 & (m += h));) {
                                                if (de[m]) {
                                                    de[m] & S && (0 === t || u[m] & M) && (l[f++] = ne.CAPTURE | _ | m << I);
                                                    break
                                                }
                                                if ((0 === t || u[m] & M) && (l[f++] = _ | m << I), !E) break
                                            }
                                }
                        return Ce && function drop(e, n, r) {
                            var o, i, a, s, c;
                            if (!e)
                                for (n && (n >>= 26), s = 0; s < 5; ++s)
                                    if ((!n || (0 | n) == 1 << s) && le._hand[r] & X[s] << J[s]) {
                                        for (0 === s ? (o = 16, i = 103, a = ne.DROP) : (o = 0, i = 119, a = ne.DROP | s << R), c = o; c <= i; ++c) 136 & c && (c += 8), de[c] || (0 === t || 1 === t && u[c] & M) && (l[f++] = a | c << I);
                                        if (n) return
                                    }
                        }(o, r, y), f
                    }

                    function inCheckAfterMove(e, t, n, r) {
                        var o, a, s, c, u, l, d, f;
                        if (fe === i["King of the Hill"] && e & y && kingOfTheHillWin(n)) return !0;
                        if (r & ne.KQSIDE_CASTLE && (n = ge === g ? r & ne.KSIDE_CASTLE ? 117 : 115 : r & ne.KSIDE_CASTLE ? 5 : 3, e = O, f = !0), (o = me[swapColor(ge)]) === m) return !1;
                        if (0 == (e & y) && G[n - o + 119] & e)
                            for (s = Y[n - o + 119], u = e & w, c = n + s; 0 == (136 & c);) {
                                if (c === o) {
                                    if (e & v) {
                                        if ((e & S) === g ? o - n < 0 : o - n > 0) return !0;
                                        break
                                    }
                                    return !0
                                }
                                if (c !== t && de[c] || !u) break;
                                c += s
                            }
                        if (!f) {
                            if ((a = G[t - o + 119]) & w && (s = Y[t - o + 119]) !== Y[n - o + 119])
                                for (c = o - s; 0 == (136 & c);) {
                                    if (c !== t && (l = de[c])) {
                                        if (l & ge && a & l && l & w) return !0;
                                        break
                                    }
                                    c -= s
                                }
                            if (r & ne.EP_CAPTURE && (a = G[(d = n + 16 * (ge === g ? 1 : -1)) - o + 119]) & w)
                                for (c = o - (s = Y[d - o + 119]); 0 == (136 & c);) {
                                    if (c !== t && c !== d) {
                                        if (c === n) break;
                                        if (l = de[c]) {
                                            if (l & ge && a & l && l & w) return !0;
                                            break
                                        }
                                    }
                                    c -= s
                                }
                        }
                        return !1
                    }

                    function moveToSan(e, t) {
                        var n, r, o, a, s, c, u = "";
                        return e & ne.KQSIDE_CASTLE ? u = e & ne.KSIDE_CASTLE ? "O-O" : "O-O-O" : e & ne.DROP ? (o = e >> I & L, (n = e >> R) && (u += te[n]), u += "@" + algebraic(o)) : (o = e >> I & L, (a = de[r = e >> j & L]) & v ? (e & ne.ANY_CAPTURE && (u += String.fromCharCode(file(r) + 97) + "x"), u += algebraic(o), e & ne.PROMOTION && (u += "=" + te[n = e >> R])) : (u += q[a & k], p > 1 && (u += function getDisambiguator(e, t, n) {
                            var r, o, i, a, s, c;
                            if (f < 2) return "";
                            for (e &= P, c = 0; c < f; ++c)
                                if (r = l[c], n === r >> I && (i = r >> j & L) !== t && de[i] & e) {
                                    if (o = !0, rank(t) === rank(i)) {
                                        if (a) return algebraic(t);
                                        s = !0
                                    }
                                    if (file(t) === file(i)) {
                                        if (s) return algebraic(t);
                                        a = !0
                                    }
                                }
                            if (o) return a ? String(8 - rank(t)) : String.fromCharCode(file(t) + 97);
                            return ""
                        }(a, r, o)), e & ne.ANY_CAPTURE && (u += "x"), u += algebraic(o))), t || (e & ne.KQSIDE_CASTLE ? (r = e >> j & L, o = e >> I & L) : e & ne.DROP_OR_PROMOTE && (a = ee[n] + ge), inCheckAfterMove(a, r, o, e) && (we(e, r, o, n), s = d, d = f, c = p, fe !== i.Chess && isVariantWin() ? u += "#" : generateMoves() - d ? u += "+" : u += "#", f = d, d = s, p = c, reverseMove(_e.pop()))), u
                    }

                    function kingAttacked(e) {
                        return me[e] !== m && function attacked(e, t) {
                            var n, r, o, i, a = x[b],
                                s = b | e;
                            for (n = 0; n < 8; ++n)
                                if (0 == (136 & (o = t + a[n])) && ((r = de[o]) & s) === s) return !0;
                            for (a = x[y], n = 0; n < 8; ++n)
                                for (o = t + (i = a[n]); 0 == (136 & o);) {
                                    if (r = de[o]) {
                                        if (r & e && G[t - o + 119] & r) {
                                            if (!(r & v)) return !0;
                                            if (e === g ? t - o < 0 : t - o > 0) return !0
                                        }
                                        break
                                    }
                                    o += i
                                }
                            return !1
                        }(swapColor(e), me[e])
                    }

                    function inCheck() {
                        return kingAttacked(ge)
                    }

                    function inCheckmate() {
                        return inCheck() && 0 === generateMoves()
                    }

                    function inStalemate() {
                        var e = !inCheck() && 0 === generateMoves();
                        return e && fe === i.Bughouse && !le.isDependent && (e = le.siblingGame.inStalemate()), e
                    }

                    function insufficientMaterial(e) {
                        var t, n, r = 0,
                            o = 0,
                            i = 0;
                        for (n = 0; n < 120; ++n)
                            if (136 & n && (n += 8), t = de[n]) {
                                if (e && 0 == (t & e)) continue;
                                if (100 & t) return !1;
                                if (t & b) {
                                    if (o || r++) return !1
                                } else if (t & E) {
                                    if (r) return !1;
                                    if (++o, (rank(n) + n) % 2 && ++i, i && o !== i) return !1
                                }
                            }
                        return !0
                    }

                    function inThreefoldRepetition() {
                        if (be < 8) return !1;
                        for (var e, t = getCurrentHash(), n = !1, r = be, o = !1, i = _e, a = i.length - 1;;) {
                            if ((a -= 2) < 0) {
                                if (i.id) {
                                    a = i.atMoveNode + a + 2, i = ye[i.parentId];
                                    continue
                                }
                                if (-2 === a) return !1;
                                e = i.hash, o = !0
                            } else e = i[a].hash, i[a].halfMoves > r || r < 2 ? o = !0 : r = i[a].halfMoves;
                            if (e[0] === t[0] && e[1] === t[1]) {
                                if (n) return !0;
                                n = !0
                            }
                            if (o) return !1
                        }
                    }

                    function modifyHand(e) {
                        var t, n, o, a, s, c, u, l, d, f = e.move;
                        if (fe === i.Crazyhouse || f & ne.DROP ? (n = le._hand, s = e.hash, d = e.color) : (n = le.siblingGame._hand, e.handSibling = !0, pe && ((c = le.siblingGame._history()).length ? s = c[c.length - 1].hash : (c.hash || (c.hash = le.siblingGame._hashPosition()), s = c.hash)), d = swapColor(e.color)), e.captured) {
                            switch ((e.captured & A ? v : e.captured & P) & P) {
                                case v:
                                    u = 0;
                                    break;
                                case b:
                                    u = 1;
                                    break;
                                case E:
                                    u = 2;
                                    break;
                                case O:
                                    u = 3;
                                    break;
                                default:
                                    u = 4
                            }
                            t = 1 << J[u], pe && (a = n[d] >> J[u] & X[u], l = r.zobristPiece[a + 63 * u + (d === g ? 0 : 315)])
                        } else t = -1 << J[o = f >> R], pe && (a = n[d] >> J[o] & X[o], l = r.zobristPiece[a - 1 + 63 * o + (d === g ? 0 : 315)]);
                        n[d] += t, e.handChange = t, pe && hashNum(s, [31 * l[0] >>> 0, 17 * l[1] >>> 0])
                    }

                    function makeMoveChess(e, t, n, o) {
                        var i, a, s, c, u, l, d, f, p = ge,
                            b = swapColor(p),
                            E = {
                                move: e,
                                epSquare: ve,
                                halfMoves: be,
                                castlingW: he[g],
                                castlingB: he[h],
                                color: p
                            },
                            _ = p === g;
                        pe && (c = getCurrentHash(), E.hash = c, hashNum(c, r.zobristTurn), ve !== m && hashEP(de, c, ve + (_ ? 16 : -16), v | p)), 0 == (e & ne.KQSIDE_CASTLE) ? Ce && e & ne.DROP ? (de[n] = ee[o] | p, pe && hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[de[n]] + 8 * (7 - rank(n)) + file(n)]), modifyHand(E), d = 0) : (d = de[t], (f = de[n]) && (E.captured = f, pe && hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[de[n] & k] + 8 * (7 - rank(n)) + file(n)]), f & O && he[b] && (Ae ? rank(n) === (_ ? 0 : 7) && (s = 1 << file(n), he[b] & s && (he[b] ^= s, pe && (s > 1 << file(me[p]) ? hashNum(c, r.zobristCastle[b - 1]) : hashNum(c, r.zobristCastle[b + 1])))) : n === (_ ? 7 : 119) ? he[b] & ne.KSIDE_CASTLE && (he[b] ^= ne.KSIDE_CASTLE, pe && hashNum(c, r.zobristCastle[b - 1])) : n === (_ ? 0 : 112) && he[b] & ne.QSIDE_CASTLE && (he[b] ^= ne.QSIDE_CASTLE, pe && hashNum(c, r.zobristCastle[b + 1])))), e & ne.PROMOTION ? de[n] = ee[o] | p | A : de[n] = de[t], de[t] = 0, pe && (hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[d & k] + 8 * (7 - rank(t)) + file(t)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[de[n] & k] + 8 * (7 - rank(n)) + file(n)]))) : d = y, e & ne.EP_CAPTURE ? (_ ? (l = n + 16, u = 6) : (l = n - 16, u = 8), E.captured = v | b, de[l] = 0, pe && hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[v | b] + 8 * (u - rank(n)) + file(n)])) : d & y ? (Ae ? (e & ne.KQSIDE_CASTLE && (de[n] = 0, de[t] = 0, e & ne.KSIDE_CASTLE ? _ ? (i = 118, a = 117) : (i = 6, a = 5) : _ ? (i = 114, a = 115) : (i = 2, a = 3), de[i] = p | y, de[a] = p | O, pe && (hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[y | p] + 8 * (7 - rank(t)) + file(t)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[O | p] + 8 * (7 - rank(n)) + file(n)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[y | p] + 8 * (7 - rank(i)) + file(i)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[O | p] + 8 * (7 - rank(a)) + file(a)]))), pe && (0 != (he[p] & he[p] - 1) ? (hashNum(c, r.zobristCastle[p - 1]), hashNum(c, r.zobristCastle[p + 1])) : he[p] > 1 << file(me[p]) ? hashNum(c, r.zobristCastle[p - 1]) : hashNum(c, r.zobristCastle[p + 1])), me[p] = i || n) : (e & ne.KQSIDE_CASTLE && (de[n] = de[t], de[t] = 0, e & ne.KSIDE_CASTLE ? (i = n - 1, a = n + 1) : (i = n + 1, a = n - 2), de[i] = de[a], de[a] = 0, pe && (hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[y | p] + 8 * (7 - rank(t)) + file(t)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[O | p] + 8 * (7 - rank(a)) + file(a)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[y | p] + 8 * (7 - rank(n)) + file(n)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[O | p] + 8 * (7 - rank(i)) + file(i)]))), pe && (he[p] & ne.KSIDE_CASTLE && hashNum(c, r.zobristCastle[p - 1]), he[p] & ne.QSIDE_CASTLE && hashNum(c, r.zobristCastle[p + 1])), me[p] = n), he[p] = 0) : d & O && he[p] && (Ae ? rank(t) === (_ ? 7 : 0) && (s = 1 << file(t), he[p] & s && (he[p] ^= s, pe && (s > 1 << file(me[p]) ? hashNum(c, r.zobristCastle[p - 1]) : hashNum(c, r.zobristCastle[p + 1])))) : t === (_ ? 119 : 7) ? he[p] & ne.KSIDE_CASTLE && (he[p] ^= ne.KSIDE_CASTLE, pe && hashNum(c, r.zobristCastle[p - 1])) : t === (_ ? 112 : 0) && he[p] & ne.QSIDE_CASTLE && (he[p] ^= ne.QSIDE_CASTLE, pe && hashNum(c, r.zobristCastle[p + 1]))), e & ne.BIG_PAWN ? (ve = _ ? n + 16 : n - 16, pe && hashEP(de, c, n, v | b)) : ve = m, d & v || e & ne.ANY_CAPTURE ? be = 0 : be++, ge = b, _e.push(E)
                    }

                    function makeMoveVariant(e, t, n, o) {
                        var a, s = ge;
                        makeMoveChess(e, t, n, o), a = _e[_e.length - 1], Ce ? (be = a.halfMoves + 1, a.captured && modifyHand(a), fe === i.Bughouse && (a.bughouseOrder = le.moveCount() - 1 + le.siblingGame.moveCount())) : fe === i["3-check"] && kingAttacked(ge) && (a.checked = !0, pe && ke[s] && hashNum(a.hash, r.zobristCheck[ke[s] + (s === g ? -1 : 2)]), ++ke[s], pe && hashNum(a.hash, r.zobristCheck[ke[s] + (s === g ? -1 : 2)]))
                    }

                    function reverseMove(e) {
                        var t, n, r = ge,
                            o = swapColor(r),
                            a = e.move,
                            s = a >> I & L,
                            c = a >> j & L;
                        if (ge = o, he[h] = e.castlingB, he[g] = e.castlingW, ve = e.epSquare, be = e.halfMoves, fe) {
                            if (Ae && a & ne.KQSIDE_CASTLE) return a & ne.KSIDE_CASTLE ? o === g ? (n = 118, t = 117) : (n = 6, t = 5) : o === g ? (n = 114, t = 115) : (n = 2, t = 3), de[n] = 0, de[t] = 0, de[c] = o | y, de[s] = o | O, void(me[o] = c);
                            if (e.handChange && (fe !== i.Crazyhouse && e.handSibling ? le.siblingGame._hand[swapColor(o)] -= e.handChange : le._hand[o] -= e.handChange), a & ne.DROP) return void(de[s] = 0);
                            e.checked && --ke[o]
                        }
                        a & ne.PROMOTION ? (de[c] = v | o, a & ne.CAPTURE ? de[s] = e.captured : de[s] = 0) : (de[c] = de[s], a & ne.KQSIDE_CASTLE ? (de[s] = 0, a & ne.KSIDE_CASTLE ? (t = s + 1, n = s - 1) : (t = s - 2, n = s + 1), de[t] = o | O, de[n] = 0, me[o] = c) : (s === me[o] && (me[o] = c), a & ne.CAPTURE ? de[s] = e.captured : (de[s] = 0, a & ne.EP_CAPTURE && (de[s - (o === g ? -16 : 16)] = v | r))))
                    }

                    function beautifyMove(e, t, n) {
                        var r, o, i = e >> I & L,
                            a = {
                                color: ge,
                                to: algebraic(i),
                                flags: e & L
                            };
                        return Ce && 0 != (e & ne.DROP) ? (o = e >> R, a.drop = o, a.piece = ee[o] + ge) : (r = e >> j & L, a.from = algebraic(r), a.piece = de[r], e & ne.PROMOTION && (o = e >> R, a.promotion = ee[o] + ge), e & ne.CAPTURE ? a.captured = de[i] : e & ne.EP_CAPTURE && (a.captured = v | swapColor(ge))), a.san = t || moveToSan(e, n), a
                    }

                    function isVariantWin() {
                        return fe === i["3-check"] ? 3 === ke[swapColor(ge)] : fe === i["King of the Hill"] ? kingOfTheHillWin(me[swapColor(ge)]) : void 0
                    }

                    function isBughouseWin() {
                        if (fe === i.Bughouse) return le.siblingGame.inCheckmate()
                    }

                    function createVariation() {
                        var e = [],
                            t = generateFen(),
                            n = _e.length - 1,
                            r = _e[n];
                        return !!r && (e.parentId = Se, e.id = ye.length, _e.curFen = t, r.lines || (r.lines = []), r.lines.push(e.id), r.move ? reverseMove(r) : (ve = r.epSquare, --be, ge = swapColor(ge)), ge === h && --Ee, e.atMoveNode = n, e.hash = n ? _e[n - 1].hash : _e.hash, Se = e.id, ye.push(e), _e = e, !0)
                    }

                    function selectLine(e) {
                        var t = generateFen();
                        _e.curFen = t, _e = ye[e], Se = e, load(_e.curFen, fe, !0, !0)
                    }
                    return le = {
                        WHITE: g,
                        BLACK: h,
                        PAWN: v,
                        KNIGHT: b,
                        BISHOP: E,
                        ROOK: O,
                        QUEEN: _,
                        KING: y,
                        FLAGS: ne,
                        load: load,
                        reset: reset,
                        moves: function moves(e) {
                            var t, n, r, moves = [],
                                o = moveToSan;
                            for (e && (e.verbose && (o = beautifyMove), e.type && (n = e.type | e.type << 24), r = e.noDrop), generateMoves(n, r), t = 0; t < f; ++t) moves.push(o(l[t]));
                            return moves
                        },
                        inCheck: inCheck,
                        inCheckmate: inCheckmate,
                        inStalemate: inStalemate,
                        isBughouseWin: isBughouseWin,
                        in50MoveRule: function in50MoveRule() {
                            return be >= 100
                        },
                        inDraw: function inDraw() {
                            return be >= 100 || inStalemate() || insufficientMaterial() || inThreefoldRepetition() || Boolean(function isBughouseDraw() {
                                if (fe === i.Bughouse) return le.siblingGame.in50MoveRule() || le.siblingGame.inThreefoldRepetition()
                            }())
                        },
                        insufficientMaterial: insufficientMaterial,
                        inThreefoldRepetition: inThreefoldRepetition,
                        isVariantWin: isVariantWin,
                        gameOver: function gameOver() {
                            return le.inDraw() || inCheckmate() || Boolean(isVariantWin()) || Boolean(isBughouseWin())
                        },
                        isPositionValid: function isPositionValid(e) {
                            var t, n, r, o = 0;
                            if (!1 !== (e = e || {}).pawns)
                                for (t = 0; t <= 119;) {
                                    if ((r = de[t]) & v) return !1;
                                    8 == ++t && (t = 112)
                                }
                            if (!1 !== e.kings) {
                                for (t = 0; t <= 119; ++t)
                                    if (136 & t && (t += 8), (r = de[t]) & y) {
                                        if (++o > 2) return !1;
                                        if (n && n & r) return !1;
                                        n = r & S
                                    }
                                if (2 !== o) return !1
                            }
                            return !1 === e.check || !1 === e.kings && me[swapColor(ge)] === m || !kingAttacked(swapColor(ge))
                        },
                        validateFen: validateFen,
                        fen: generateFen,
                        pgn: function pgn(e) {
                            return (e = e || {}).useResultHeader || Se || (isVariantWin() || inCheckmate() ? Pe.Result = ge === h ? "1-0" : "0-1" : le.inStalemate() ? Pe.Result = "1/2-1/2" : isBughouseWin() && (Pe.Result = le.siblingGame.turn() === g ? "1-0" : "0-1")), se(e, Pe, ye, Oe, fe, le)
                        },
                        loadPgn: function loadPgn(e, t, n) {
                            var r, o, a, s, c, u, l, d, f, p = {},
                                m = 0;
                            if ("number" != typeof t && (n = n || t, t = 0), n = n || {}, "string" == typeof e && (n.singleGame && (e = e.replace(/(?:\r?\n\s*){2,}/g, "\n")), e = le.tokenizePgn(e, n)), t < 0 && (t = e.length + t), !(s = e[t])) return !1;
                            for (reset(), o = s.length, r = 0; r < o && "tagName" === (a = s[r]).type; ++r) {
                                if (!s[r + 1] || "tagValue" !== s[r + 1].type) return !1;
                                ++r, "FEN" === a.value ? l = completeFen(s[r].value) : p[a.value] = s[r].value
                            }
                            if (p.Variant && !l && (l = B), l || "1" === p.SetUp)
                                if ("0" === p.SetUp) p.FEN = l;
                                else if (!l || !load(l, p.Variant)) return !1;
                            for (le.header(p), u = (c = le)._history(); r < o; ++r)
                                if ("san" === (a = s[r]).type && 0 === m) {
                                    if (!c.move(a.value)) {
                                        if (!n.skipBadLines || !(0 !== Se || _e.length && n.allowBadMainLine)) return reset(), !1;
                                        m = 1
                                    }
                                } else if ("result" === a.type && "*" === Pe.Result) setHeader(["Result", a.value]);
                            else if ("a" === a.type && 0 === m && u[u.length - 1]) u[u.length - 1].annotation = a.value;
                            else if ("nag" !== a.type && "aa" !== a.type || 0 !== m || !u[u.length - 1])
                                if ("comment" === a.type && 0 === m) u.length ? (a.value.trim() && (u[u.length - 1].comment = a.value), a.commands && (u[u.length - 1].commands = a.commands, a.commands.clk && (u[u.length - 1].time = (d = a.commands.clk, f = void 0, 10 * (3600 * (f = d.split(":"))[0] + 60 * f[1] + 1 * f[2]))))) : (u.initComment = String(a.value), a.commands && (u.commands = a.commands));
                                else if ("variationStart" === a.type) {
                                if (m > 0) ++m;
                                else if (!createVariation()) return reset(), !1;
                                u = c._history()
                            } else "variationEnd" === a.type ? (m > 0 && --m, 0 === m && (selectLine(u.parentId), u = c._history())) : "number" === a.type && fe === i.Bughouse && (u = (c = /b/i.test(a.value.slice(-1)) ? le.siblingGame : le)._history());
                            else u[u.length - 1].additionalAnnotation || (u[u.length - 1].additionalAnnotation = []), -1 === u[u.length - 1].additionalAnnotation.indexOf(a.value) && u[u.length - 1].additionalAnnotation.push(a.value);
                            return !0
                        },
                        header: function header(e) {
                            return Array.isArray(e) ? setHeader(e) : "object" === s()(e) ? (Object.keys(e).forEach(function(t) {
                                setHeader([t, e[t]])
                            }), Pe) : Pe
                        },
                        turn: function turn(e) {
                            return e !== g && e !== h || (ge = e), ge
                        },
                        move: function playMove(e) {
                            var t, n, o, a, s, u, d, p, h, b, E, O, _;
                            if ("string" == typeof e) {
                                switch (e[a = e.length - 1]) {
                                    case "+":
                                    case "#":
                                        e = e.substr(0, a)
                                }
                                for (h = F.indexOf(e[0]) > 6 ? U[e[0]] : "O" === e[0] ? y : v, Ce && (-1 === e.indexOf("@") ? b = !0 : (b = !1, h <<= 24)), generateMoves(h, b), a = 0; a < f; ++a)
                                    if (e === (u = moveToSan(l[a], !0))) {
                                        n = l[a];
                                        break
                                    }
                                if (!n) return "--" === e ? function makeNullMove() {
                                    var e, t = {
                                            color: ge,
                                            san: "--",
                                            epSquare: ve
                                        },
                                        n = {
                                            color: ge,
                                            san: "--"
                                        };
                                    return pe && (e = getCurrentHash(), t.hash = e, hashNum(e, r.zobristTurn), ve !== m && hashEP(de, e, ve + (ge === g ? 16 : -16), v | ge)), ve = m, be++, (ge = swapColor(ge)) === g && ++Ee, _e.push(t), n
                                }() : (e = Chess.fixSanMove(e, de, ge)) ? playMove(e) : null;
                                d = n >> j & L, p = n >> I & L, o = n >> R
                            } else {
                                if (e.drop) {
                                    switch (e.drop) {
                                        case "p":
                                            o = 0;
                                            break;
                                        case "n":
                                            o = 1;
                                            break;
                                        case "b":
                                            o = 2;
                                            break;
                                        case "r":
                                            o = 3;
                                            break;
                                        case "q":
                                            o = 4;
                                            break;
                                        default:
                                            return null
                                    }
                                    h = 1 << 26 + o
                                } else {
                                    if (e.promotion) switch (e.promotion) {
                                        case "q":
                                            o = 4;
                                            break;
                                        case "n":
                                            o = 1;
                                            break;
                                        case "r":
                                            o = 3;
                                            break;
                                        case "b":
                                            o = 2;
                                            break;
                                        default:
                                            return null
                                    }
                                    d = c[e.from], b = !0, h = de[d] & P
                                }
                                for (p = c[e.to], t = ((o ? o << R : 0) | p << I) >> j | d, generateMoves(h, b), a = 0; a < f; ++a)
                                    if (l[a] >> j === t) {
                                        n = l[a];
                                        break
                                    }
                                if (!n) return (e = Chess.fixObjMove(e, de, ge)) ? playMove(e) : null
                            }
                            return _ = n & ne.DROP_OR_PROMOTE ? ee[o] + ge : de[d], s = beautifyMove(n, u, !0), E = inCheckAfterMove(_, d, p, n), we(n, d, p, o), E && (fe !== i.Chess && isVariantWin() ? s.san += "#" : 0 === generateMoves() ? s.san += "#" : s.san += "+"), (O = _e[_e.length - 1]).san = s.san, s.piece & A && (O.promoted = !0), ge === g && ++Ee, s
                        },
                        undo: function undo(e) {
                            var t = _e.pop();
                            return t ? (ge === g && --Ee, t.move ? (reverseMove(t), !!e || beautifyMove(t.move, t.san)) : (ve = t.epSquare, --be, ge = swapColor(ge), !!e || {
                                san: "--",
                                color: t.color
                            })) : null
                        },
                        clear: function clear(e) {
                            _clear(e)
                        },
                        put: function put(e, t, n) {
                            var r, o = c[t],
                                i = !1,
                                a = de[o],
                                s = a & S,
                                u = e.color;
                            if (isNaN(o) || !e.type || !u || -1 === F.indexOf(e.type)) return !1;
                            if (de[o] = U[e.type] | u | (e.promoted ? A : 0), de[o] & y && (me[u] = o), a && de[me[s]] && de[me[s]] !== (y | s)) {
                                for (r = 0; r < 120; ++r) 136 & r && (r += 8), de[r] === (y | s) && (me[s] = r, i = !0);
                                i || (me[s] = m)
                            }
                            return n || load(generateFen(), fe, !0, !1), !0
                        },
                        get: get,
                        remove: function remove(e, t) {
                            var n, r = de[c[e]],
                                o = get(e),
                                i = r & S;
                            if (de[c[e]] = 0, r & y)
                                for (me[i] = m, he[i] = 0, n = 0; n < 120; ++n)
                                    if (136 & n && (n += 8), de[n] === (y | i)) {
                                        me[r.color] = n;
                                        break
                                    }
                            return t || load(generateFen(), fe, !0, !1), o
                        },
                        history: function history(e, t) {
                            for (var n, r = [], o = _e, i = o.length;;) {
                                if (-1 == --i) {
                                    if (o.id && !t) {
                                        i = o.atMoveNode, o = ye[o.parentId];
                                        continue
                                    }
                                    break
                                }
                                e ? ((n = beautifyMove(o[i].move, o[i].san)).color = o[i].color, !i && o.initComment && (n.firstComment = o.initComment), void 0 !== o[i].comment && (n.comment = o[i].comment), void 0 !== o[i].time && (n.time = o[i].time), void 0 !== o[i].annotation && (n.annotation = o[i].annotation), void 0 !== o[i].additionalAnnotation && (n.additionalAnnotation = o[i].additionalAnnotation), void 0 !== o[i].commands && (n.commands = o[i].commands), void 0 !== o[i].captured && (n.captured = o[i].captured), void 0 !== o[i].promoted && (n.promoted = o[i].promoted), void 0 !== o[i].lines && (n.lines = o[i].lines), void 0 !== o[i].bughouseOrder && (n.bughouseOrder = o[i].bughouseOrder), F.indexOf(o[i].san[0]) > 6 ? n.piece = U[o[i].san[0]] : "O" === o[i].san[0] ? n.piece = y : n.piece = v, n.piece |= n.color, r.unshift(n)) : r.unshift(o[i].san)
                            }
                            return r
                        },
                        hashes: function hashes() {
                            for (var hashes = [], e = _e, t = e.length;;) {
                                if (-1 == --t) {
                                    if (e.id) {
                                        t = e.atMoveNode, e = ye[e.parentId];
                                        continue
                                    }
                                    e.hash || getCurrentHash(), hashes.unshift(e.hash);
                                    break
                                }
                                hashes.unshift(e[t].hash)
                            }
                            return hashes
                        },
                        moveCount: function moveCount() {
                            return _e.length
                        },
                        startingMoveNumber: function startingMoveNumber() {
                            return Oe
                        },
                        completeFen: completeFen,
                        createVariation: createVariation,
                        selectLine: selectLine,
                        hash: function hash() {
                            var hash = getCurrentHash();
                            return fe !== i.Bughouse || le.isDependent ? hash : [hash, le.siblingGame.hash()]
                        },
                        hashing: function hashing(e) {
                            pe = e, fe !== i.Bughouse || le.isDependent || le.siblingGame.hashing(pe)
                        },
                        hand: function hand() {
                            if (Ce) return handToString(le._hand[g], !0) + handToString(le._hand[h])
                        },
                        checks: function checks() {
                            if (fe === i["3-check"]) return [ke[g], ke[h]]
                        },
                        tokenizePgn: ce,
                        _hand: [],
                        _history: function _history(e) {
                            return e && (Se = (_e = e).id), _e
                        },
                        _lines: function _lines() {
                            return ye
                        },
                        _hashPosition: hashPosition,
                        _board: function _board() {
                            return de
                        }
                    }, ae && load(ae, ue) || reset(), le
                }
                return Chess.fixSanMove = function(e, t, n) {
                    var r, o, i;
                    if (/0|[?!+#]$|[18][QNRB]$|^P/.test(e)) return e.replace(/[?!+#]+$/, "").replace(/0/g, "O").replace(/([18])([QNRB])$/, "$1=$2").replace(/^P/, "");
                    if (o = e.indexOf("=") > 0 ? -4 : -2, r = e.substr(o, 2), n = swapColor(n), t[c[r]] & n || /^[a-h]x?[a-h]/.test(e)) {
                        if (-1 === e.indexOf("x")) return e.slice(0, o) + "x" + e.substr(o)
                    } else if (e.indexOf("x") > -1) return e.replace("x", "");
                    return (i = e.match(/^([KQNRB]?)([a-h][1-8]?|[1-8])(x?[a-h][1-8])=?(.?)$/)) ? t[c[i[2]]] ? {
                        from: i[2],
                        to: r,
                        promotion: i[4].toLowerCase()
                    } : i[1] + i[3] + i[4] : void 0
                }, Chess.fixObjMove = function(e, t, n) {
                    if (t[c[e.from]] === (y | n) && e.to && e.from[1] === e.to[1]) {
                        if (e.from < e.to) return "O-O";
                        if (e.from > e.to) return "O-O-O"
                    }
                }, Chess
            }(), i = function ENGINE_MANAGER(e) {
                var t = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                    n = ["bench", "d", "eval", "flip", "isready", "perft", "ponderhit", "stop", "uci", "ucinewgame"],
                    o = [{
                        cmd: "position",
                        args: ["fen", "startpos", "moves", "continuation"]
                    }, {
                        cmd: "go",
                        args: ["binc", "btime", "confidence", "depth", "infinite", "mate", "mindepth", "mintime", "maxdepth", "maxtime", "movestogo", "movetime", "ponder", "searchmoves", "shallow", "winc", "wtime"]
                    }],
                    i = ["moves", "searchmoves"],
                    a = ["ponder", "infinite", "startpos"],
                    s = /Total Evaluation[\s\S]+\n$/i;

                function createWebWorker(e, t, n) {
                    var r = new Worker(e || "stockfish.js"),
                        o = {
                            terminate: function terminate() {
                                r.terminate()
                            },
                            postMessage: postMessage,
                            addEventListener: function addEventListener(e, t) {
                                o["on" + e] = t
                            }
                        };

                    function postMessage(e) {
                        r.postMessage(e)
                    }
                    return r.onmessage = function(e) {
                        o.onmessage(e)
                    }, r.onerror = function(i) {
                        if (t.pathToNonWasmEngine && t.pathToNonWasmEngine !== e) {
                            i.preventDefault && i.preventDefault();
                            try {
                                r.terminate()
                            } catch (i) {}
                            return (r = createWebWorker(t.pathToNonWasmEngine, t, n)).onmessage = function(e) {
                                    o.onmessage(e)
                                },
                                function requeue(e) {
                                    e.length && e.forEach(function(e) {
                                        e.message = "", postMessage(e.cmd)
                                    })
                                }(n._activeCommands()), !1
                        }
                        if (t.onError) return t.onError(i)
                    }, o
                }

                function parseSearchLine(e) {
                    var t, n, r, o, i, a = {},
                        s = ["lowerbound", "upperbound", "score"],
                        c = ["depth", "seldepth", "time", "nodes", "multipv", "cp", "mate", "currmovenumber", "hashfull", "nps", "tbhits", "sbhits", "cpuload"],
                        u = ["depth", "seldepth", "time", "nodes", "pv", "multipv", "score", "cp", "mate", "lowerbound", "upperbound", "currmove", "currmovenumber", "hashfull", "nps", "tbhits", "sbhits", "cpuload", "string", "refutation", "currline", "bestmove", "ponder", "baseTurn", "pvSan", "bestmoveSan", "ponderSan", "bmc"],
                        l = ["pv", "pvSan", "string", "refutation", "currline"];
                    for (n = (t = e.split(" ")).length, r = "info" === t[0] ? 1 : 0, a.mtype = t[0]; r < n; r += 1) t[r] && (!i || o && u.indexOf(t[r]) > -1 ? (i = t[r], s.indexOf(i) > -1 ? (a[i] = !0, i = null) : o = l.indexOf(i) > -1 || -1 === u.indexOf(i)) : (c.indexOf(i) > -1 && (t[r] = Number(t[r])), o ? (void 0 === a[i] && (a[i] = []), a[i].push(t[r])) : (a[i] = t[r], i = null)));
                    return "(none)" === a.bestmove && (a.bestmove = void 0, a.bestmoveSan = void 0), "(none)" === a.ponder && (a.ponder = void 0, a.ponderSan = void 0), a
                }

                function getFirstWord(e) {
                    var t = e.indexOf(" ");
                    return -1 === t ? e : e.substr(0, t)
                }
                return function loadEngine(c, u) {
                    var l, d, f = {},
                        p = function createWorker(e, t) {
                            var n = e.pathToNonWasmEngine && "undefined" == typeof WebAssembly ? e.pathToNonWasmEngine : e.enginePath || e.pathToEngineWorker;
                            if (e.pathToWasmEngine && (n += "#" + e.pathToWasmEngine), "undefined" != typeof Worker) return createWebWorker(n, e, t)
                        }(c, f),
                        m = [],
                        g = [];

                    function onmessage(t) {
                        var n, r, o, i, a, c = "string" == typeof t ? t : t.data;
                        if (f)
                            if (c.indexOf("\n") > -1)
                                for (i = c.split("\n"), a = 0; a < i.length; a += 1) onmessage(i[a]);
                            else if (e.log && console.log("debug (onmessage): " + c), f.stream && f.stream(c), m.length && 0 !== c.indexOf("No such option") && 0 !== c.indexOf("id ") && 0 !== c.indexOf("Stockfish") && 0 !== c.indexOf("info string variant") && (r = function determineQueueNum(e, t) {
                                var n, r, o, i, a = getFirstWord(e);
                                if ("bench" !== t[0].cmd && "perft" !== t[0].cmd)
                                    for (n = "uciok" === a || "option" === a ? "uci" : "readyok" === a || "ready" === a ? "isready" : "json" === a ? "fetch" : "bestmove" === a || "info" === a ? "go" : "other", i = t.length, o = 0; o < i; o += 1)
                                        if ((r = getFirstWord(t[o].cmd)) === n || "other" === n && ("d" === r || "eval" === r)) return o;
                                return 0
                            }(c, m), o = m[r])) {
                            if (o.stream && !o.discard && o.stream(c), void 0 === o.message ? o.message = "" : "" !== o.message && (o.message += "\n"), o.message += c, "uciok" === getFirstWord(c)) n = !0;
                            else if ("readyok" === getFirstWord(c) || "ready" === getFirstWord(c)) n = !0, f.ready = !0;
                            else if (0 !== c.indexOf("bestmove") && "bestmove" !== getFirstWord(c) || "bench" === o.cmd)
                                if ("d" === o.cmd) 0 !== c.indexOf("Legal uci moves") && 0 !== c.indexOf("Key is") || (o.done = !0, n = !0);
                                else if ("fetch json" === o.cmd) try {
                                o.message = JSON.parse(o.message.replace(/^json /gm, "").replace(/\n/g, "")), n = !0
                            } catch (t) {} else "eval" === o.cmd ? s.test(o.message) && (n = !0) : 0 === c.indexOf("pawn key") ? n = !0 : 0 === c.indexOf("Nodes/second") ? n = !0 : 0 === c.indexOf("Unknown command") && (n = !0);
                            else n = !0, o.message = c;
                            n && (m.splice(r, 1), o.cb && !o.discard ? o.cb(o.message) : o.ondiscard && o.ondiscard())
                        }
                    }

                    function bestMoveSearch() {
                        var n, r, o, i, a, s = 1,
                            c = [],
                            u = [],
                            d = null,
                            p = g[0].args,
                            m = g[0].cb,
                            h = g[0].stream,
                            v = p.timeout,
                            b = 1,
                            E = 14;

                        function convertpv(e) {
                            var t = [],
                                n = u[e] || createSanPv(c[e]);
                            return c[e].forEach(function oneach(e, r) {
                                t.push({
                                    moveSan: n[r],
                                    moveLan: e
                                })
                            }), t
                        }

                        function getpv(e, t, n, r) {
                            var o;
                            for (o = c.length - 1; o >= 0; o -= 1)
                                if (c[o][0] === e) return convertpv(o);
                            return n ? [{
                                moveSan: t,
                                moveLan: e
                            }, {
                                moveSan: r,
                                moveLan: n
                            }] : t ? [{
                                moveSan: t,
                                moveLan: e
                            }] : []
                        }

                        function convertScore(e) {
                            0 === e.mate ? (e.mateIn = 0, e.cp = -31800 * b) : (e.mateIn = Number(e.mate * b) || null, "number" != typeof e.mateIn || isNaN(e.mateIn) || "number" == typeof e.cp ? (e.cp *= b, 9 === Math.abs(e.cp) && (e.cp = 0), p.normalize && e.depth <= E && "number" == typeof loadEngine._previousCP && 1 === e.multipv && function normalize(e) {
                                var t = .03 * Math.pow(32, e.depth / E);
                                e.cp = loadEngine._previousCP + (e.cp - loadEngine._previousCP) * t
                            }(e)) : e.cp = 31800 * b * (e.mate / Math.abs(e.mate))), e.score = e.cp / 100
                        }

                        function addBestMoveProps(t) {
                            var a;
                            if (t.baseTurn = o, t.cp = n, t.score = n / 100, t.mate = r, t.mateIn = d, t.depth = s, t.moveLan = t.bestmove, t.moveLan) {
                                if (t.move = e.uciToObj(t.moveLan)[0], !(a = i.move(t.move))) throw new Error("Bad moveLan in line: " + t.moveLan + " at " + i.fen() + "\ndata: " + JSON.stringify(t) + "\nargs: " + JSON.stringify(p));
                                if (t.moveSan = t.bestmoveSan = a.san, t.ponder && "(none)" !== t.ponder) {
                                    if (!(a = i.move(e.uciToObj(t.ponder)[0]))) throw new Error("Bad ponder in line: " + t.ponder + " at " + i.fen() + "\ndata: " + JSON.stringify(t) + "\nargs: " + JSON.stringify(p));
                                    t.ponderSan = a.san, i.undo(!0)
                                }
                                i.undo(!0)
                            }
                        }

                        function createSanPv(t) {
                            var n, r, o = t.length,
                                a = [];
                            for (n = 0; n < o; ++n) {
                                if (!(r = i.move(e.uciToObj(t[n])[0]))) throw new Error("Bad pv in line: " + t[n] + " (" + n + ") at " + i.fen() + "\npv: " + JSON.stringify(t) + "\nargs: " + JSON.stringify(p));
                                a.push(r.san)
                            }
                            for (n = 0; n < o; ++n) i.undo(!0);
                            return a
                        }

                        function createTimeout() {
                            v && (clearTimeout(l), l = setTimeout(function() {
                                f.stop(), m && (m(), m = void 0)
                            }, v))
                        }
                        p.timeout = void 0, g[0].started = !0, p.difficulty >= 0 && p.difficulty < 20 ? (f.setoption("Skill Level", p.difficulty), p.maximumError >= 0 && p.maximumError <= 4999 && f.setoption("Skill Level Maximum Error", p.maximumError), p.errorProbability >= 1 && p.errorProbability <= 128 && f.setoption("Skill Level Probability", p.errorProbability)) : f.setoption("Skill Level", 20), void 0 !== p.contempt ? f.setoption("Contempt", p.contempt) : f.setoption("Contempt", "0"), p.multiPv > 1 ? f.setoption("MultiPV", p.multiPv) : f.setoption("MultiPV", 1), p.movetime || p.wtime && p.btime || p.depth || (p.btime = p.btime || 72e3, p.wtime = p.wtime || 72e3), !p.startpos && p.fen || p.moves || p.variant ? (i = e.createGame({
                            fen: p.fen ? (a = p.fen, (a + "").replace(/\[([qrbnp]*)\]/i, "/$1").replace(/([0-3])\+([0-3]) (\d+ \d+)/, function(e, t, n, r) {
                                return r + " +" + (3 - t) + "+" + (3 - n)
                            })) : t,
                            moves: p.moves,
                            variant: p.variant,
                            disableHashing: !0
                        })).turn() === i.WHITE ? o = "w" : (o = "b", b = -1) : (o = "w", i = e.createGame({
                            disableHashing: !0
                        })), f.setVariant(p.variant), f.position(p), f.go(p, function returnBestMove(e) {
                            var t = parseSearchLine(e);
                            if (addBestMoveProps(t), s > E && n < 5e3 && n > -5e3 && (loadEngine._previousCP = n), t.pv = getpv(t.moveLan, t.moveSan), 1 === t.pv.length && t.ponder && (t.pv = getpv(t.moveLan, t.moveSan, t.ponder, t.ponderSan)), m) try {
                                m(t)
                            } catch (e) {
                                console.error(e)
                            }
                            g.shift(), g.length > 0 && bestMoveSearch(), clearTimeout(l)
                        }, function streamInfo(e) {
                            var t = parseSearchLine(e);
                            t.score && (t.baseTurn = o, convertScore(t), 1 !== t.multipv && 0 !== t.depth || (n = t.cp, r = t.mate, d = t.mateIn)), t.pv && h && (t.pvSan = createSanPv(t.pv)), !t.pv || t.lowerbound || t.upperbound || (c.push(t.pv), h && u.push(t.pvSan)), t.depth > s ? s = t.depth : "bestmove" === t.mtype && addBestMoveProps(t), !h || 0 === t.mateIn && t.pv || h(t), createTimeout()
                        }), createTimeout()
                    }

                    function startUp() {
                        f.isready(function onstart() {
                            c.settings ? f.uci(function onuci() {
                                Object.keys(c.settings).forEach(function oneach(e) {
                                    f.setoption(e, c.settings[e])
                                }), u && u(f)
                            }) : u && u(f)
                        })
                    }
                    return f.send = function(t, n, r) {
                        var o;
                        t = String(t).trim(), e.log && console.log("debug (send): " + t), "ucinewgame" !== t && "flip" !== t && "stop" !== t && "ponderhit" !== t && 0 !== t.indexOf("position") && 0 !== t.indexOf("setoption") ? m[m.length] = {
                            cmd: t,
                            cb: n,
                            stream: r
                        } : o = !0, p && (p.postMessage(t), o && n && setTimeout(n, 0))
                    }, f._activeCommands = function() {
                        return m
                    }, f.quit = function() {
                        p && p.terminate && (p.terminate(), p = null, f.ready = void 0), clearTimeout(l)
                    }, n.forEach(function oneach(e) {
                        f[e] = function makeSCmd(t, n) {
                            f.send(e, t, n)
                        }
                    }), o.forEach(function oneach(e) {
                        f[e.cmd] = function makeCCmd(t, n, r) {
                            var o = [e.cmd];
                            d && t.fen && (t.fen = function convertStockfishVariantFen(e) {
                                return (e + "").replace(/^([^\/]+)((?:\/[^\/]+){7})\/([qrbnp]*)/i, "$1$2[$3]").replace(/( \d+ \d+) \+([0-3])\+([0-3])/, function(e, t, n, r) {
                                    return " " + (3 - n) + "+" + (3 - r) + t
                                })
                            }(t.fen)), e.args.forEach(function oneach(e) {
                                if (t[e] || 0 === t[e]) {
                                    if (i.indexOf(e) > -1) {
                                        if (!t[e] || !t[e].length) return;
                                        Array.isArray(t[e]) && (t[e] = t[e].join(" "))
                                    }
                                    o.push(e), -1 === a.indexOf(e) && o.push(t[e])
                                }
                            }), f.send(o.join(" "), n, r)
                        }
                    }), f.setoption = function(e, t) {
                        f.send("setoption name " + e + " value " + t)
                    }, f.setVariant = function(e) {
                        var t;
                        e !== d && (t = String(e).toLowerCase().replace(/ |-/g, ""), e && "chess" !== t ? "chess960" === t ? (f.setoption("UCI_Variant", "chess"), f.setoption("UCI_Chess960", "true")) : ("threecheck" === t && (t = "3check"), f.setoption("UCI_Variant", t), f.setoption("UCI_Chess960", "false")) : (t = void 0, f.setoption("UCI_Variant", "chess"), f.setoption("UCI_Chess960", "false")), d = t)
                    }, f.loadBook = function(e, t) {
                        r.loadBook(e, function onload(n, r) {
                            f.book = r, f.pathToBook = e, f.bookLoaded = !0, n && (console.error("Error loading opening book."), console.error(n), f.pathToBook = null, f.bookLoaded = !1), t()
                        })
                    }, f.getBestMove = function(t, n, r) {
                        var o;
                        if ((t = t || {}).fen = t.fen || t.baseFen, t.is960 && (t.variant = "Chess960"), f.bookLoaded && t.useBook && (o = function getBookMove(t) {
                                var n, r, o;
                                if (o = t.moves && t.moves.length ? e.getFenFromMoves(t.fen, t.moves, t.variant) : t.fen, (n = f.book.pick({
                                        fen: o,
                                        type: void 0 !== t.bookPick ? t.bookPick : "random",
                                        chess960: "Chess960" === t.variant
                                    })) && (e.getLegalMoves(o, t.variant).some(function(e) {
                                        if (e.from + e.to + (e.promotion || "") === n) return r = e, !0
                                    }), r)) return {
                                    moveSan: r.san,
                                    moveLan: n,
                                    move: {
                                        from: r.from,
                                        to: r.to,
                                        promotion: r.promotion || null
                                    },
                                    baseTurn: o.split(" ")[1],
                                    pv: [{
                                        moveSan: r.san,
                                        moveLan: n
                                    }],
                                    depth: null,
                                    score: null,
                                    mateIn: null,
                                    isBookMove: !0
                                }
                            }(t))) return setTimeout(function() {
                            o.mtype = "bestmove", n(o)
                        }, 0);
                        ! function queueBestMoveSearch(e, t, n) {
                            g.push({
                                args: e,
                                cb: t,
                                stream: n
                            }), 1 === g.length && bestMoveSearch()
                        }(t, n, r)
                    }, f.stopAll = function(t) {
                        var n, r = m.length,
                            o = 0;

                        function ondiscard() {
                            0 == (o -= 1) && t()
                        }
                        for (g = [], n = 0; n < r; n += 1) e.log && console.log("debug (stop_moves): " + n, getFirstWord(m[n].cmd)), "go" !== getFirstWord(m[n].cmd) || m[n].discard || (f.stop(), m[n].discard = !0, t && (o += 1, m[n].ondiscard = ondiscard));
                        t && !o && f.isready(t)
                    }, f.restartEngine = function(e) {
                        return f.stopAll(), f.quit(), m = [], g = [], f.bookLoaded && !c.book && ((c = JSON.parse(JSON.stringify(c))).book = f.book), loadEngine(c, e)
                    }, f.stopFast = function(e, t) {
                        var n;
                        f.stopAll(function() {
                            clearTimeout(n), e(f)
                        }), n = setTimeout(function() {
                            f.restartEngine(e)
                        }, t || 5e3)
                    }, "undefined" != typeof Worker && (function addListener() {
                        p.addEventListener("message", onmessage, !1)
                    }(), c.book && (f.book = c.book, f.bookLoaded = !0, f.pathToBook = c.pathToBook), !f.book && c.pathToBook ? f.loadBook(c.pathToBook, startUp) : setTimeout(startUp, 0), f.getFenFromMoves = e.getFenFromMoves, f.getLegalMoves = e.getLegalMoves, f.getPositionInfo = e.getPositionInfo, f.isFenValid = e.isFenValid, f.ready = !1, f)
                }
            }, function() {
                var e, t = o(),
                    n = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                    a = 252,
                    c = 255,
                    u = {
                        4: "p",
                        5: "P",
                        6: "p",
                        8: "n",
                        9: "N",
                        10: "n",
                        16: "b",
                        17: "B",
                        18: "b",
                        32: "r",
                        33: "R",
                        34: "r",
                        64: "q",
                        65: "Q",
                        66: "q",
                        128: "k",
                        129: "K",
                        130: "k"
                    },
                    l = "pnbrq",
                    d = 512,
                    f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?{~}(^)[_]@#$,./&-*++=",
                    p = "qnrbkp";

                function decodeTCN(e) {
                    var t, n, r, o, i = e.length,
                        a = [];
                    for (t = 0; t < i; t += 2) o = {}, n = f.indexOf(e[t]), (r = f.indexOf(e[t + 1])) > 63 && (o.promotion = p[Math.floor((r - 64) / 3)], r = n + (n < 16 ? -8 : 8) + (r - 1) % 3 - 1), n > 75 ? o.drop = p[n - 79] : o.from = f[n % 8] + (Math.floor(n / 8) + 1), o.to = f[r % 8] + (Math.floor(r / 8) + 1), a.push(o);
                    return a
                }

                function uciToObj(e) {
                    var t, n, r = e.split(" "),
                        o = r.length,
                        i = [];
                    if (e)
                        for (t = 0; t < o; ++t) 4 === (n = r[t]).length ? "@" === n[1] ? i.push({
                            drop: n[0].toLowerCase(),
                            to: n.substr(2, 2)
                        }) : i.push({
                            from: n.substr(0, 2),
                            to: n.substr(2, 2)
                        }) : i.push({
                            from: n.substr(0, 2),
                            to: n.substr(2, 2),
                            promotion: n[4]
                        });
                    return i
                }

                function isSameMove(e, t) {
                    return e.san === t.san || e.from == t.from && e.to == t.to && e.promotion == t.promotion && e.drop == t.drop
                }

                function makePremove(e, n, r) {
                    var i, a, s, c, u, l = e.header().Variant,
                        d = getPremoves(e.fen(), n, l);
                    if (d) {
                        for (i = d.length - 1; i >= 0; --i)
                            if (isSameMove(a = d[i], r)) {
                                s = !0;
                                break
                            }
                        if (s) return a.drop ? e.put({
                            type: a.drop,
                            color: n
                        }, a.to, !0) : (c = e.remove(a.from, !0), a.flags === t.FLAGS.KSIDE_CASTLE ? (u = e.remove("Chess960" === l ? a.to : "h" + a.from[1], !0), e.put(c, "g" + a.from[1], !0), e.put(u, "f" + a.from[1], !0)) : a.flags === t.FLAGS.QSIDE_CASTLE ? (u = e.remove("Chess960" === l ? a.to : "a" + a.from[1], !0), e.put(c, "c" + a.from[1], !0), e.put(u, "d" + a.from[1], !0)) : (a.promotion && (c.type = a.promotion, c.promoted = !0), e.put(c, a.to, !0))), a
                    }
                    if (r.from && (r = o.fixObjMove(r, e._board(), n))) return makePremove(e, n, {
                        san: r
                    })
                }

                function getPieces(e, t) {
                    var n, r, o, i = t ? {} : [],
                        s = e._board();
                    if (t)
                        for (n = 112; n >= 0; ++n) 136 & n && (n -= 24), (r = s[n]) && (i[o = f[7 & n] + (8 - (n >> 4))] = {
                            type: u[r & a],
                            color: 3 & r,
                            promoted: 0 != (r & d),
                            square: o
                        });
                    else
                        for (n = 112; n >= 0; ++n) 136 & n && (n -= 24), (r = s[n]) && i.push({
                            type: u[r & a],
                            color: 3 & r,
                            promoted: 0 != (r & d),
                            rank: 8 - (n >> 4),
                            file: 1 + (7 & n)
                        });
                    return i
                }

                function makeMoves(e, t, n, r) {
                    var o, i, a, s, c, u, l, d, f, p;
                    for (n = n || {}, "string" == typeof t && (t = t.trim().split(" ")), a = t.length, o = 0; o < a; o += 1) {
                        if (c = "b" === t[o].board || "B" === t[o].board ? e.siblingGame : e, u = "string" == typeof t[o] ? uciToObj(t[o])[0] : t[o].san ? t[o].san : t[o], !c.move(u)) {
                            if (!n.autoPromote) {
                                if (n.skipBadLines) break;
                                return !1
                            }
                            if (!0 === n.autoPromote ? u.promotion = "q" : u.promotion = n.autoPromote, !c.move(u)) {
                                if (n.skipBadLines) break;
                                return !1
                            }
                        }
                        if (d = (l = c._history())[l.length - 1], r && (f = parseInt(r[o], 10)), ("number" != typeof f || isNaN(f)) && (f = parseInt(t[o].time, 10)), "number" != typeof f || isNaN(f) || (d.time = f, f = void 0), t[o].firstComment && (l.initComment = t[o].firstComment), t[o].comment && (d.comment = t[o].comment), t[o].annotation && (d.annotation = t[o].annotation), t[o].additionalAnnotation && (d.additionalAnnotation = t[o].additionalAnnotation), t[o].commands && (d.commands = t[o].commands), t[o].lines)
                            for (s = t[o].lines.length, i = 0; i < s; ++i) {
                                if (p = e._history().id, e.createVariation(), !makeMoves(e, t[o].lines[i], n) && !n.skipBadLines) return !1;
                                e.selectLine(p)
                            }
                    }
                    return !0
                }

                function createGame(e) {
                    var t, r;
                    if ((e = e || {}).game) return e.game;
                    if (t = o(), e.analysis && function extendChess(e) {
                            var t, r, i = -1,
                                a = 0;

                            function fixContComment(t) {
                                var n = e._lines()[t.ids.line];
                                return n.initComment && (t.comment = (n.initComment + " " + (t.comment || "")).trim(), n.initComment = ""), !0
                            }
                            e.extended || (e.extended = !0, t = {
                                header: e.header,
                                load: e.load,
                                loadPgn: e.loadPgn,
                                createVariation: e.createVariation,
                                undo: e.undo,
                                pgn: e.pgn
                            }, e._move = e.move, e.premoves = [], e.undo = function() {
                                return e.deletePosition(i, a)
                            }, e.isLegalMove = function(n) {
                                return !!e._move(n) && t.undo(!0)
                            }, e.premove = function(t, n) {
                                var r, i = e.premoves.length,
                                    a = o();
                                return i ? a.load(e.premoves[i - 1].fen, e.header().Variant) : a.load(e.fen(), e.header().Variant), (r = makePremove(a, n, t)) ? (e.premoves.push({
                                    move: r,
                                    pieces: getPieces(a),
                                    fen: a.fen()
                                }), r) : null
                            }, e.getPieces = function(t) {
                                return getPieces(e, t)
                            }, e.origHistory = e.history, e.history = function(t, n) {
                                var r, o, i, a = [],
                                    c = e._history(),
                                    u = c.length,
                                    l = e._lines();
                                for ("boolean" == typeof t && (t = {
                                        verbose: t
                                    }), t = t || {}, n && (t.noParentLines = n), t.toCurrent && (u = e.ids().move + 1);;) {
                                    if (-1 == --u) {
                                        if (c.id && !t.noParentLines) {
                                            u = c.atMoveNode, c = l[c.parentId];
                                            continue
                                        }
                                        break
                                    }
                                    if (t.verbose) {
                                        for (o in r = {}, c[u])
                                            if (c[u][o] && "object" === s()(c[u][o]))
                                                for (i in r[o] = c[u][o].constructor === Array ? [] : {}, c[u][o]) r[o][i] = c[u][o][i];
                                            else r[o] = c[u][o];
                                        a.unshift(r)
                                    } else a.unshift(c[u].san)
                                }
                                return a
                            }, e._getPos = function(r, o) {
                                var s, c;
                                return "number" != typeof r && (r = i), "number" != typeof o && (o = a), s = (c = e._lines())[o], r >= 0 ? s[r] : s.id ? s.atMoveNode ? c[s.parentId][s.atMoveNode - 1] : e._getPos(s.atMoveNode - 1, s.parentId) : {
                                    fen: t.header().FEN || n,
                                    hash: s.hash,
                                    initial: !0
                                }
                            }, e.move = function(t, n) {
                                var r, o, s, c, u = e._history();
                                if (t && ("string" == typeof t || t.to && (t.from || t.drop))) {
                                    if (a === u.id && i < u.length - 1 || n) {
                                        if (e.moveForward(n, t)) return !0;
                                        i < u.length - 1 && (e.selectPosition(i + 1), e.createVariation(), u = e._history())
                                    }
                                    e.siblingGame && (s = e.isDependent ? e.siblingGame.fen() : e.fen()), (r = e._move(t)) && (normalizeMoveObj(r), a = u.id, o = u[i = u.length - 1], c = e._getPos(i - 1), e.siblingGame ? (e.isDependent ? o.fen = e.siblingGame.fen() : o.fen = e.fen(), o.beforeFen = s) : (o.fen = e.fen(), o.beforeFen = c.fen), c.initial ? (o.moveNumber = 0, o.previous = null) : (o.moveNumber = c.moveNumber + 1, o.previous = c.ids, c.isContinuation && fixContComment(c)), a && 0 === i && e._lines()[u.parentId][u.atMoveNode].move === o.move && (o.isContinuation = !0), o.flags = r.flags, o.to = r.to, o.from = r.from, o.drop = r.drop, o.capturedStr = r.captured, o.promotion = r.promotion, o.piece = r.piece, r.promoted && (o.promoted = !0), r.capturedPromotedPawn && (o.capturedPromotedPawn = !0), o.ids = {
                                        move: i,
                                        line: a
                                    })
                                }
                                return r
                            }, e.header = e.headers = function(n) {
                                var r = t.header(n);
                                return e.siblingGame && extendChess(e.siblingGame), r
                            }, e.load = function(n, r, o, s) {
                                var c = t.load(n, r, o, s);
                                return e.siblingGame && extendChess(e.siblingGame), c && !o && (i = -1, a = 0), c
                            }, e.removeEmptyLines = function() {
                                var t, n, r = e._lines();
                                for (t = r.length - 1; t > 0; --t) r[t].length || (r[t] = void 0, n = !0);
                                n && e.reorderLines()
                            }, e.loadPgn = function(n, r, o) {
                                var s = t.loadPgn(n, r, o),
                                    c = e._history();
                                return e.removeEmptyLines(), i = c.length - 1, a = c.id, s
                            }, e.ids = function() {
                                return {
                                    move: i,
                                    line: a
                                }
                            }, e.selectLine = function(t) {
                                e.selectPosition(null, t)
                            }, e.moveBackward = function() {
                                var t;
                                if (i <= 1)
                                    if (0 === a) {
                                        if (-1 === i) return !1;
                                        e.selectPosition(i - 1)
                                    } else(t = e._getPos(i - 1, a)).isContinuation ? e.selectPosition(e._history().atMoveNode, e._history().parentId) : t.initial ? e.selectPosition(-1, 0) : e.selectPosition(t.ids.move, t.ids.line);
                                else e.selectPosition(i - 1);
                                return !0
                            }, e.moveForward = function(t, n) {
                                var r, s, c, u, l, d, f = e._lines();
                                if ("string" == typeof n && (n = {
                                        san: n
                                    }), !(r = f[a][i + 1]) || n && !isSameMove(n, r)) {
                                    if (n && r && r.lines)
                                        for (l = r.lines.length, u = 0; u < l; ++u)
                                            if ((c = f[r.lines[u]][0]) && isSameMove(n, c)) {
                                                r = c, d = !0;
                                                break
                                            }
                                    if (!d && t && (s = f[a][i]) && s.lines)
                                        for (l = s.lines.length, u = 0; u < l; ++u)
                                            if ((c = f[s.lines[u]][0]) && c.isContinuation && (c = f[s.lines[u]][1]) && (!n || isSameMove(n, c))) {
                                                r = c, d = !0;
                                                break
                                            }
                                    if (!d) return !!(n && n.san && (n = o.fixSanMove(n.san, e._board(), e.turn())) || n && n.to && n.from && Math.abs(n.to.charCodeAt(0) - n.from.charCodeAt(0)) > 1 && (n = o.fixObjMove(n, e._board(), e.turn()))) && e.moveForward(t, n)
                                }
                                return e.selectPosition(r.ids.move, r.ids.line)
                            }, e.moveVariation = function(t, n) {
                                var r, o, i, a = e._lines(),
                                    s = a[t];
                                if (s && s.id)
                                    for (o = (r = a[s.parentId][s.atMoveNode].lines).length - 1; o >= 0; --o)
                                        if (r[o] === t && r[i = o - (n ? 1 : -1)]) return r[o] = r[i], r[i] = t, e.reorderLines(), !0;
                                return !1
                            }, e.promoteVariation = function(t, n) {
                                for (var r, o, s, c, u, l, d = e._lines(), f = d[t]; f && f[0] && f.id && (-1 !== n || f.parentId);) {
                                    for (r = d[s = f.parentId], c = f.atMoveNode, f[0].lines = r[c].lines.concat(f[0].lines || []), r[c].lines = void 0, l = r.length - c, o = r.splice(c, l), u = 0; u < l; ++u) o[u].ids.line = t, o[u].ids.move = u;
                                    for (o.id = t, o.parentId = s, o.atMoveNode = c, o.hash = f.hash, 0 === c ? (o.initComment = r.initComment, r.initComment = f.initComment) : f.initComment && (r[c - 1].comment = ((r[c - 1].comment || "") + " " + f.initComment).trim()), d[t] = o, l = f.length, u = 0; u < l; ++u) f[u].ids.line = s, f[u].ids.move = u + c, r.push(f[u]);
                                    for (o[0].isContinuation = !!f[0].isContinuation && fixContComment(o[0]), r[c].isContinuation = !c && "number" == typeof r.parentId && d[r.parentId][r.atMoveNode].move === r[0].move && fixContComment(r[c]), l = r[c].lines.length, u = 0; u < l; ++u) d[r[c].lines[u]].atMoveNode = c, d[r[c].lines[u]][0] && (d[r[c].lines[u]][0].isContinuation = d[r[c].lines[u]][0].move === r[c].move && fixContComment(d[r[c].lines[u]][0]));
                                    if (a === t ? (a = s, i += c) : a === s && i >= c && (a = t, i -= c), 1 === n) break;
                                    f = d[t = s]
                                }
                                return void 0 !== r && (e._history(d[a]), e.reorderLines(), !i && d[a][0].isContinuation && e.selectPosition(d[a].atMoveNode, d[a].parentId), !0)
                            }, e.reorderLines = function(t, n) {
                                var o, i, s, c, u, l, d, f, p, m, g = e._lines();
                                for (t ? p = n.length - 1 : (t = 0, n = [g[0]], p = 0, r = !1), s = (o = g[t]).length, i = 0; i < s; ++i)
                                    if ((c = o[i]).ids.line = p, c.lines)
                                        for (u = c.lines.length, l = 0; l < u; ++l)(f = g[d = c.lines[l]]) ? (f.atMoveNode = i, m = n.length, c.lines[l] = m, f.parentId = p, r || d !== a || (r = !0, a = m), n.push(f), e.reorderLines(d, n)) : (1 === c.lines.length ? delete c.lines : c.lines.splice(l, 1), --l, --u);
                                t || e.saveLines(n, !0)
                            }, e.createVariation = function() {
                                var n, r, o, s, c = e._history(),
                                    u = e._lines();
                                return i === c.length - 1 ? (n = t.createVariation(), c = e._history(), i = c.length - 1, a = c.id, n) : -1 !== i && (r = [], o = c[i], r.parentId = c.id, r.id = u.length, o.lines || (o.lines = []), o.lines.push(r.id), s = e._getPos(i - 1), r.hash = s.hash, r.atMoveNode = i, u.push(r), e.selectPosition(-1, r.id))
                            }, e.selectLineEnd = function(t) {
                                return "number" != typeof t && (t = a), (t !== a || i < e._history().length - 1) && e.selectPosition(null, t, !0)
                            }, e.selectLineStart = function() {
                                var t, n;
                                return a ? (i > 1 || 1 === i && !e._getPos(0).isContinuation ? t = e._history() : (n = e._getPos(-1), t = e._lines()[n.ids ? n.ids.line : 0]), e.selectPosition(t.id ? t[1] && t[0].isContinuation ? 1 : 0 : -1, t.id)) : -1 !== i && e.selectPosition(-1, 0)
                            }, e.selectPosition = function(n, r, o) {
                                var s = e._lines(),
                                    c = e._history();
                                if ("number" == typeof r && (r !== a || o)) {
                                    if (r < 0 || r >= s.length) return !1;
                                    if (c = s[r], "number" != typeof n) n = c.length - 1;
                                    else if (n < -1 || n >= c.length) return !1;
                                    a = r, e._history(c), o = !0
                                }
                                if ("number" == typeof n && (n !== i || o)) {
                                    if (n < -1 || n >= c.length) return !1;
                                    t.load(e._getPos(n).fen, t.header().Variant, !0, !0), i = n
                                }
                                return !0
                            }, e.resetToMainLine = function() {
                                var t = e._lines();
                                e.selectLineEnd(0), t.length > 1 && (t.length = 1, e.reorderLines())
                            }, e.saveLines = function(t, n) {
                                var r, o, i, a = e._lines(),
                                    s = t.length;
                                for (t !== a && (a.length = 0), o = 0; o < s; ++o) {
                                    if (r = t[o], o && "number" != typeof r.parentId) return !1;
                                    t !== a && a.push(r), r.id = o
                                }
                                return n || (i = e.ids(), e.selectPosition(-1, 0, !0), e.selectPosition(i.move, i.line)), !0
                            }, e.deletePosition = function(t, n) {
                                var r, o, s = e._lines();
                                return !(!s[n] || !(s[n][t] || -1 === t && 0 !== n)) && (n && (0 === t ? t = -1 : 1 === t && s[n][0].isContinuation && (t = -1)), a > 0 && n !== a ? o = !1 !== (r = function descendsFromMove(e, t, n) {
                                    for (var r, o = e[t];
                                        "number" == typeof(r = o.parentId);) {
                                        if (r === n) return o.atMoveNode;
                                        o = e[r]
                                    }
                                    return !1
                                }(s, a, n)) && r >= t : n === a && t <= i && (o = !0), o && (t > 1 ? e.selectPosition(t - 1, n) : (e.selectPosition(s[n][0].isContinuation || 1 === t ? 1 : 0, n), e.moveBackward())), t > 0 ? s[n].length = t : n ? s[n] = null : s[0].length = 0, e.reorderLines(), e.ids())
                            }, e.mark = function(t, n) {
                                var r = i < 0 ? e._lines()[a] : e._lines()[a][i],
                                    o = t.type,
                                    s = 1;
                                t.color && ("arrow" === o ? e.mark({
                                    key: t.color + t.key,
                                    type: "cal"
                                }, n) : "square" === o && e.mark({
                                    key: t.color + t.key,
                                    type: "csl"
                                }, n)), "cal" !== o && "csl" !== o && (o = "c_" + o, s = 0), r.commands && r.commands[o] && (r.commands[o] = r.commands[o].split(",").filter(function rm(e) {
                                    return e.slice(s).split(";")[0] !== t.key.slice(s)
                                }).join(","), r.commands[o] || delete r.commands[o]), n || (r.commands || (r.commands = {}), r.commands[o] = (r.commands[o] ? r.commands[o] + "," : "") + t.key + (t.data ? ";" + t.data.join(";") : ""))
                            }, e.markings = function() {
                                var t, n, r, o, s, c, u, l, d = {},
                                    f = i < 0 ? e._lines()[a] : e._lines()[a][i],
                                    p = {
                                        cal: "arrow",
                                        csl: "square"
                                    };
                                for (n in f.commands) {
                                    if (r = f.commands[n], p[n]) n = p[n], o = 0;
                                    else {
                                        if ("c_" !== n.substr(0, 2)) continue;
                                        n = n.slice(2), o = 1
                                    }
                                    for (d[n] = d[n] || {}, c = (s = r.split(",")).length, t = 0; t < c; ++t) o ? (l = (u = s[t].split(";")).shift(), d[n][l] = d[n][l] || {
                                        type: n,
                                        key: l
                                    }, d[n][l].data = u) : (l = s[t].slice(1), d[n][l] = d[n][l] || {
                                        type: n,
                                        key: l
                                    }, d[n][l].color = s[t][0])
                                }
                                return d
                            }, e.clearMarkings = function() {
                                var t, n = i < 0 ? e._lines()[a] : e._lines()[a][i];
                                for (t in n.commands) /^c[sa]l$|^c_/.test(t) && delete n.commands[t]
                            }, e.pgn = function(n) {
                                var r, o = e.ids();
                                return e.selectLineEnd(0), r = t.pgn(n), e.selectPosition(o.move, o.line), r
                            }, e.loadMoves = function(t, n) {
                                var r, o, s;
                                if (n = n || {}, "string" == typeof t && (t = decodeTCN(t)), t) {
                                    for (n.atCurrent || e.selectPosition(-1, 0), s = a, o = t.length, r = 0; r < o; ++r) {
                                        if (!e.move(t[r], !0) && (t[r].promotion = !0 === n.autoPromote ? "q" : n.autoPromote, !e.move(t[r], !0))) return !1;
                                        a !== s && "merge" !== n.method && (e.promoteVariation(a, 1), "promote" !== n.method && (e._history()[i].lines = void 0, e.reorderLines()), s = a)
                                    }
                                    "merge" !== n.method && "promote" !== n.method && e.deletePosition(i + 1, a)
                                }
                                return !0
                            })
                        }(t), e.disableHashing && t.hashing(!1), e.pgn) {
                        if (!t.loadPgn(e.pgn, e.index, e.options)) return !1
                    } else {
                        if (e.headers && (e.variant = e.headers.Variant || e.variant, e.fen || (e.fen = e.headers.FEN)), (e.fen || e.variant) && !t.load(e.fen || n, e.variant)) return !1;
                        e.headers && "object" === s()(e.headers) && !Array.isArray(e.headers) && t.header(e.headers)
                    }
                    if (e.tcn)
                        if ("object" === s()(e.tcn)) {
                            if (! function playBughouseTCN(e, t, n) {
                                    var r, o, i, a = [decodeTCN(t[0]), decodeTCN(t[1])],
                                        s = [0, 0],
                                        c = [0, 0],
                                        u = a[0].length + a[1].length,
                                        l = Math.max(0 | n[0][0], 0 | n[0][1], 0 | n[1][0], 0 | n[1][1]),
                                        d = [0, 0],
                                        f = [0, 0];
                                    for (r = [
                                            [l += 600 - l % 600, l],
                                            [l, l]
                                        ]; u--;) {
                                        if (f[0] = d[0] + r[0][c[0]] - n[0][s[0]] || 0, f[1] = d[1] + r[1][c[1]] - n[1][s[1]] || 0, a[o = f[0] <= f[1] ? 0 : 1][s[o]] || (o ^= 1), (!(i = o ? e.siblingGame : e).move(a[o][s[o]]) || u && i.inCheckmate() && i.undo(!0)) && !(i = (o ^= 1) ? e.siblingGame : e).move(a[o][s[o]])) return !1;
                                        i._history()[s[o]].time = n[o][s[o]], r[o][c[o]] = n[o][s[o]], d[o] = f[o], c[o] ^= 1, ++s[o]
                                    }
                                    return !0
                                }(t, e.tcn, e.timestamps || [
                                    [],
                                    []
                                ])) return !1
                        } else r = decodeTCN(e.tcn);
                    else r = e.moves;
                    return !(r && !makeMoves(t, r, e, e.timestamps)) && t
                }

                function normalizeMoveObj(e) {
                    return e && (e.piece & d && (e.promoted = !0), e.piece = u[e.piece & a], e.captured && (e.captured & d && (e.capturedPromotedPawn = !0), e.captured = u[e.captured & c]), e.promotion && (e.promotion = u[e.promotion & a]), void 0 !== e.drop && (e.drop = l[e.drop])), e
                }

                function getPremoves(e, n, r) {
                    var i, a, s, c, u, d, f, p, m = [];

                    function pawnCapture(e) {
                        var r, o = u[0] + "x" + e;
                        if (1 === n && 7 === i || 2 === n && 2 === i)
                            for (r = 4; r > 0; --r) m.push({
                                color: n,
                                to: e,
                                flags: t.FLAGS.CAPTURE | t.FLAGS.PROMOTION,
                                from: u,
                                promotion: 1 << r + 2,
                                piece: 4,
                                san: o + "=" + l[r].toUpperCase()
                            });
                        else 1 === i && 2 === n || 8 === i && 1 === n || m.push({
                            color: n,
                            to: e,
                            flags: t.FLAGS.CAPTURE,
                            from: u,
                            piece: 4,
                            san: o
                        })
                    }
                    if (1 !== n && 2 !== n || !t.load(e, r || "chess")) return null;
                    for (e = t.fen(), (c = o()).clear(), r && c.header({
                            Variant: r
                        }), t.turn(n), c.turn(n), i = 1; i < 9; ++i)
                        for (a = 1; a < 9; ++a) u = String.fromCharCode(a + 96) + i, (s = t.get(u)) && (t.remove(u, !0), s.color === n && ("p" === s.type ? (a > 1 && pawnCapture(String.fromCharCode(a - 1 + 96) + (i + (1 === n ? 1 : -1))), a < 8 && pawnCapture(String.fromCharCode(a + 1 + 96) + (i + (1 === n ? 1 : -1)))) : "k" === s.type && (f = u[0], p = i), c.put(s, u, !0), m = m.concat(c.moves({
                            verbose: !0
                        })), c.remove(u, !0)));
                    return "-" !== (d = e.split(" ")[2]) && d.split("").forEach(function(e) {
                        (1 === n && e < "a" || 2 === n && e >= "a") && ("k" === (e = e.toLowerCase()) ? m.push({
                            color: n,
                            to: "g" + p,
                            flags: t.FLAGS.KSIDE_CASTLE,
                            from: "e" + p,
                            piece: 128,
                            san: "O-O"
                        }) : "q" === e ? m.push({
                            color: n,
                            to: "c" + p,
                            flags: t.FLAGS.QSIDE_CASTLE,
                            from: "e" + p,
                            piece: 128,
                            san: "O-O-O"
                        }) : e > f ? m.push({
                            color: n,
                            to: e + p,
                            flags: t.FLAGS.KSIDE_CASTLE,
                            from: f + p,
                            piece: 128,
                            san: "O-O"
                        }) : m.push({
                            color: n,
                            to: e + p,
                            flags: t.FLAGS.QSIDE_CASTLE,
                            from: f + p,
                            piece: 128,
                            san: "O-O-O"
                        }))
                    }), (m = m.concat(t.moves({
                        verbose: !0
                    }))).forEach(function(e) {
                        normalizeMoveObj(e)
                    }), m
                }

                function getLegalMoves(e, n) {
                    var r, o, i, a;
                    if ("string" == typeof e) {
                        if (!(o = t).load(e, n)) return null
                    } else o = createGame(e);
                    for (a = (r = o.moves({
                            verbose: !0
                        })).length, i = 0; i < a; ++i) normalizeMoveObj(r[i]);
                    return r
                }

                function jce(t, n) {
                    return (e = e || i(jce))(t, n)
                }
                return jce.gameFingerprints = function gameFingerprints(e) {
                    var t, o, i, a, s, c, u, l, d, f = createGame(e),
                        p = [""],
                        m = [];
                    if (!f) return !1;
                    for (d = (l = f.header()).Variant || "", c = f.hashes(), t = "function" == typeof f.origHistory ? f.origHistory(!0) : f.history(!0), s = c.length, o = [c[0][0], c[0][1]], m.push(r.to64BitHex(o) + d), c[0] = r.to64BitHex(c[0]), i = 1; i < s; ++i) o[0] = (o[0] ^ c[i][0] * (i + 58465)) >>> 0, o[1] = (o[1] ^ c[i][1] * (i + 984)) >>> 0, c[i] = r.to64BitHex(c[i]), m.push(r.to64BitHex(o) + d), normalizeMoveObj(t[a = i - 1]), u = (t[a].from ? t[a].from : t[a].drop.toUpperCase() + "@") + t[a].to + (t[a].promotion || ""), a && (u = p[a] + " " + u), p.push(u);
                    return {
                        startingFen: l.FEN || n,
                        hashes: c,
                        fingerprints: m,
                        moves: p,
                        variant: l.Variant
                    }
                }, jce.getFenFromMoves = function getFenFromMoves(e, n, r) {
                    return t.reset(), t.load(e, r), !(n && !makeMoves(t, n)) && t.fen()
                }, jce.getLegalMoves = getLegalMoves, jce.getPremoves = getPremoves, jce.getPositionInfo = function getPositionInfo(e, n, r) {
                    var o, i, a, s = {
                        gameOver: !1,
                        check: !1,
                        checkmate: !1,
                        draw: !1,
                        stalemate: !1,
                        threefold: !1,
                        insufficient: !1
                    };
                    if (Array.isArray(n) || (r = n, n = null), "boolean" == typeof r ? (o = r, r = {}) : o = (r = r || {}).variant, "string" == typeof e) {
                        if (0 !== (a = t).validateFen(e, o) || !a.load(e, o)) return !1
                    } else a = createGame(e);
                    return !(n && !makeMoves(a, n)) && (r.getLegalMoves ? (i = getLegalMoves({
                        game: a
                    }), s.legalMoves = i) : i = a.moves(), a.inCheck() ? (s.check = !0, s.checkmate = 0 === i.length) : s.stalemate = 0 === i.length, r.premove && (r.check = !1, r.kings = !1), s.threefold = a.inThreefoldRepetition(), s.insufficient = a.insufficientMaterial(r.color), s.fiftyMoveRule = a.in50MoveRule(), s.draw = s.stalemate || s.threefold || s.insufficient || s.fiftyMoveRule || a.inDraw(), r.skipValidation || (s.isValid = a.isPositionValid(r)), o && (s.variantWin = a.isVariantWin(), void 0 === s.variantWin && (s.variantWin = a.isBughouseWin())), s.gameOver = s.checkmate || s.draw || Boolean(s.variantWin), s)
                }, jce.isFenValid = function isFenValid(e, n) {
                    return 0 === t.validateFen(e, n)
                }, jce.encodeTCN = function encodeTCN(e) {
                    var t, n, r, o, i = "";
                    for (Array.isArray(e) || (e = [e]), n = e.length, t = 0; t < n; t += 1) r = e[t].drop ? 79 + p.indexOf(e[t].drop) : f.indexOf(e[t].from[0]) + 8 * (e[t].from[1] - 1), o = f.indexOf(e[t].to[0]) + 8 * (e[t].to[1] - 1), e[t].promotion && (o = 3 * p.indexOf(e[t].promotion) + 64 + (o < r ? 9 + o - r : o - r - 7)), i += f[r] + f[o];
                    return i
                }, jce.decodeTCN = decodeTCN, jce.uciToObj = uciToObj, jce.generatePgn = function generatePgn(e) {
                    var t;
                    return (e = e || {}).disableHashing = !0, !!(t = createGame(e)) && t.pgn(e)
                }, jce.pgnToFen = function pgnToFen(e, n) {
                    var r, o, i = [];
                    if (t.reset(), !t.loadPgn(e)) return !1;
                    if (r = t.moveCount(), "number" == typeof n) {
                        for (n < 0 && (n = r + n + 1), o = r - 1; o >= n && o >= 0; o -= 1) t.undo();
                        return t.fen()
                    }
                    for (o = 0; o <= r; o += 1) i.unshift(t.fen()), t.undo();
                    return i
                }, jce.pgnToJson = function pgnToJson(e, n, r) {
                    var o, i = [],
                        a = t;
                    return "number" != typeof n && (r = n, n = void 0), o = a.tokenizePgn(e, r), n < 0 && (n = o.length + n), !!o && (r && r.includeFen && (a = createGame({
                        analysis: !0
                    })), o.forEach(function(e, t) {
                        var o, s;
                        t === n || void 0 === n ? a.loadPgn([e], 0, r) ? (s = function normalizeHistory(e) {
                            var t, n, r, o, i, a, s, c = e.history(!0, !0);
                            if (e.siblingGame) {
                                for (t = e.siblingGame.history(!0, !0), r = c.length + t.length, n = [], o = 0; o < r; ++o) !c.length || t.length && t[0].bughouseOrder < c[0].bughouseOrder ? (i = t.shift()).board = "b" : (i = c.shift()).board = "a", n.push(i);
                                c = n
                            }
                            for (r = c.length, o = 0; o < r; ++o)
                                if ((a = c[o]).fen || normalizeMoveObj(a), a.lines)
                                    for (s = a.lines.length - 1; s >= 0; --s) e.selectLine(a.lines[s]), a.lines[s] = normalizeHistory(e).moves;
                            return {
                                moves: c
                            }
                        }(a), o = a.header(), i.push({
                            headers: o,
                            moves: s.moves
                        })) : i.push(!1) : i.push(void 0)
                    }), "number" == typeof n ? i[n] : i)
                }, jce.sanToObj = function sanToObj(e, n, r) {
                    return t.reset(), !!t.load(n, r) && normalizeMoveObj(t.move(e))
                }, jce.completeFen = t.completeFen, jce.shortenFen = function shortenFen(e, n) {
                    return t.completeFen(e).split(" ").slice(0, n || 4).join(" ")
                }, jce.createGame = createGame, jce.getPositionDetails = function getPositionDetails(e, t) {
                    var n, r, o, i;
                    if ((e = e || {}).disableHashing = !0, !(n = createGame(e))) return null;
                    if (t)
                        if (e.premove) {
                            if (!(o = makePremove(n, e.color, t))) return null
                        } else {
                            if (!(o = n.move(t))) return null;
                            n.extended || normalizeMoveObj(o)
                        }
                    return i = n.fen(), e.premove && (e.check = !1, e.kings = !1), e.skipValidation || n.isPositionValid(e) ? (r = i.split(" "), {
                        fen: i,
                        pieces: getPieces(n),
                        sideToMove: n.turn(),
                        castling: r[2],
                        epSquare: "-" === r[3] ? null : r[3],
                        halfMoves: +r[4],
                        moveNumber: +r[5],
                        move: o,
                        hand: n.hand(),
                        checks: n.checks()
                    }) : null
                }, jce.predict = function predict(e, t) {
                    var n = Math.min(Math.max(.20773843 * Math.atan(2.49085889 * e / 100 - 2.47841945 * t / 100) + .02262979 * e / 100 - .02256839 * t / 100 + .52239679, 0), 1),
                        r = Math.min(Math.max(-.20720905 * Math.atan(2.49626837 * e / 100 - 2.48220286 * t / 100) + -.02352551 * e / 100 + .02172627 * t / 100 + .49443923, 0), 1),
                        o = Math.min(Math.max(Math.exp(.037043456 * e / 100 + .178106427 * t / 100 - 8.069742932) + .004823544 * Math.exp(-1.364136591 * Math.pow(e / 100 - t / 100, 2)) + -.001625539, 0), 1),
                        i = n + r + o;
                    return {
                        w: n / i,
                        b: r / i,
                        d: o / i
                    }
                }, jce.FLAGS = t.FLAGS, jce.loadECO = function loadECO(e, t) {
                    r.loadBook(e, function onload(e, n) {
                        if (!n || !n.json) return t(e || new Error("Invalid book"));
                        t(e, function queryECO(e) {
                            var t, o, i, a, s, c, u, l, d;
                            if (e.hash) o = "string" == typeof e.hash ? [r.hex64ToDec(e.hash)] : [e.hash], a = 1;
                            else {
                                if (!(t = createGame(e))) return !1;
                                a = (o = t.hashes()).length
                            }
                            for (i = 0; i < a; ++i)
                                if (s = n.json[r.to64BitHex(o[i])]) {
                                    if (s.constructor === Array)
                                        if (c && -1 === s[0].m.indexOf(c.m)) {
                                            for (l = s.length - 1; l >= 0; --l)
                                                if (!l || -1 !== s[l].m.indexOf(c.m)) {
                                                    (d = s[l]).e = s[0].e, d.s = s[0].s, d.mate = s[0].mate, d.v = s[0].v, d.h = s[0].h, d.n = d.n || s[0].n, d.u = d.u || s[0].u, d.c = d.c || s[0].c;
                                                    break
                                                }
                                        } else d = s[0];
                                    else d = s;
                                    (d.n || e.allowNameless) && (c = d)
                                } else e.mustEndInBook && (c = void 0);
                            if (c) return u = {
                                name: c.n
                            }, c.m && (u.moves = c.m), void 0 !== c.d && (u.sdiff = c.d / 100), c.u ? (u.url = c.u, u.code = u.url.substr(0, 3)) : c.n && c.c && (u.url = c.c + "-" + c.n.replace(/['+,]/g, "").replace(/[^a-z0-9.]+/gi, "-").replace(/(with-\d|St)\.+-?/, "$1-"), u.code = c.c), c.e ? (u.eval = c.e, u.depth = c.h, u.score = c.e[0].cp / 100, void 0 !== c.e[0].mate && (u.mate = c.e[0].mate)) : (u.score = c.s / 100, void 0 !== c.mate && (u.mate = c.mate)), c.v && (u.bad = !0), u
                        }, n.json)
                    })
                }, jce
            }());
        t.default = c
    },
    212: function(e, t, n) {
        "use strict";
        var r = n(255),
            o = n.n(r),
            i = n(7),
            a = n(68),
            s = n(175);
        t.a = {
            getDefaultOptions: function getDefaultOptions() {
                return {
                    allowMarkings: !0,
                    animationType: "default",
                    autoPromote: !1,
                    boardStyle: "green",
                    captureKeyStrokes: !0,
                    coordinates: "inside",
                    darkMode: !1,
                    diagramStyle: !0,
                    enabled: !0,
                    highlightColor: "#f8f893",
                    highlightLegalMoves: !1,
                    highlightMoves: !0,
                    highlightOpacity: .5,
                    isWhiteOnBottom: !1,
                    legalPositionCheck: "full",
                    moveMethod: "drag",
                    overlayInAnalysisMode: !0,
                    pieceStyle: "neo",
                    playSounds: !0,
                    premoveHighlightColor: "#f42a32",
                    premoveHighlightOpacity: .5,
                    real3D: !1,
                    rounded: !0,
                    soundTheme: "default"
                }
            },
            getOptions: function getOptions() {
                return o.a.get(i.a.generate(a.a.getOptions)).then(function(e) {
                    return e.data
                }).then(function(e) {
                    return {
                        animationType: s.a.getAnimationType(e.animationType),
                        boardSize: e.boardSize,
                        boardStyle: e.colorScheme,
                        darkMode: e.darkMode,
                        highlightLegalMoves: Boolean(e.highlightLegalMoves),
                        highlightMoves: "1" === e.highlightMoves,
                        isWhiteOnBottom: Boolean(e.isWhiteOnBottom),
                        moveListDisplayType: e.moveListDisplayType,
                        moveMethod: e.moveMethod,
                        pieceStyle: e.pieceStyle,
                        playSounds: "1" === e.playSounds,
                        soundTheme: e.soundTheme,
                        coordinates: s.a.getCoordinatePositioning(e.boardCoords)
                    }
                })
            },
            getStyles: function getStyles() {
                return o.a.get(i.a.generate(a.a.getStyles)).then(function(e) {
                    return e.data
                })
            },
            updateOption: function updateOption(e, t) {
                var n = i.a.generate(a.a.updateOption[e]);
                return o.a.post(n, {
                    action: t
                }).then(function(e) {
                    return e.data
                })
            }
        }
    },
    214: function(e, t, n) {
        "use strict";
        var r = n(249),
            o = n.n(r);
        t.a = o.a
    },
    215: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "e", function() {
            return d
        });
        var r = n(97),
            o = n(173),
            i = function getPieceScheme(e) {
                return o.b[e] ? o.b[e] : {
                    imgPath: e,
                    imgFormat: ".png"
                }
            },
            a = new Array(76).join().split(",").map(function(e, t) {
                return 2 * t
            }).slice(22),
            s = function getAdjustedSize(e) {
                var t = function isHighRes() {
                    return window.devicePixelRatio > 1
                }() ? 2 * e : e;
                return a.reduceRight(function(e, n) {
                    return n === t || n > t ? n : e
                })
            },
            c = function getBoardBackground(e, t) {
                var n = function getBoardScheme(e) {
                        return o.a[e]
                    }(e),
                    i = s(t);
                return "".concat(r.a.paths.boards, "/").concat(n[2], "/").concat(i).concat(n[3])
            },
            u = function getPieceBaseUrl(e, t) {
                var n = i("real3d" !== e ? e : "neo"),
                    o = s(t);
                return "".concat(r.a.paths.pieces, "/").concat(n.imgPath, "/").concat(o, "/")
            },
            l = function getWebglDataBaseUrl(e) {
                return "".concat(r.a.paths.webglData, "/").concat(e, "/")
            },
            d = "webkitTransform" in document.body.style ? "webkitTransform" : "transform"
    },
    216: function(e, t, n) {
        "use strict";
        var r = n(417),
            o = function getPieceImg(e, t) {
                return "\n  url('".concat(t).concat(Object(r.b)(e.color)).concat(e.type, ".png')\n")
            },
            i = function getSquareClass(e) {
                if (!e) return null;
                var t = "0".concat(e.file).slice(-2),
                    n = "0".concat(e.rank).slice(-2);
                return "square-".concat(t).concat(n)
            },
            a = function getTransformPercent(e, t, n) {
                var r = {
                        x: 100 * (e.file - 1),
                        y: 100 * -(e.rank - 1)
                    },
                    o = n.indexOf("3d") >= 0;
                if (t && (r.x *= -1, r.y *= -1), o) {
                    r.y = t ? 100 * (e.rank - 1) - 23.90808096180187 * e.rank : -(e.rank - 1) * (100 / 1.3142)
                }
                return r
            },
            s = function addLegalMoves(e, t, n) {
                var r = n.map(function(e) {
                        return {
                            id: "legal-move-hint-".concat(e.file).concat(e.rank),
                            fileRank: e
                        }
                    }),
                    o = Array.from(e.getElementsByClassName("legal-move-hint"));
                o.forEach(function(e) {
                    e.style.display = ""
                }), o.filter(function(e) {
                    return -1 === r.findIndex(function(t) {
                        return t.id === e.id
                    })
                }).forEach(function(e) {
                    return e.parentNode.removeChild(e)
                });
                var a = r.filter(function(e) {
                    return -1 === o.findIndex(function(t) {
                        return t.id === e.id
                    })
                }).map(function(e) {
                    return function createLegalMove(e, t) {
                        var n = document.createElement("div"),
                            r = document.createElement("div");
                        return n.id = e, n.className = "legal-move-hint ".concat(t), r.classList.add("legal-move-hint-inner"), n.appendChild(r), n
                    }(e.id, i(e.fileRank))
                });
                if (a.length > 0) {
                    var s = document.createDocumentFragment();
                    a.forEach(function(e) {
                        return s.appendChild(e)
                    }), e.appendChild(s)
                }
            },
            c = n(215),
            u = n(321),
            l = function addPieces(e, t, n, r) {
                var a = Array.from(e.getElementsByClassName("piece")),
                    s = r.pieces.filter(function(e) {
                        return -1 === a.findIndex(function(t) {
                            return t.id === e.id
                        })
                    }).map(function(e) {
                        var t, r, a, s = n.test ? (r = (t = e).color, a = t.type, "chessboard-piece-".concat(1 === r ? a.toUpperCase() : a.toLowerCase())) : void 0;
                        return h(e.type, e.key, i(e), o(e, Object(c.c)(n.options.pieceStyle, 150)), s)
                    });
                if (s.length > 0) {
                    var l = document.createDocumentFragment(),
                        d = n.options.pieceStyle.indexOf("3d") >= 0;
                    s.forEach(function(e) {
                        d && e.setAttribute("piece-style", "pseudo3d"), r.fadeTime ? (e.style.opacity = "0", e.style.transition = "opacity ".concat(r.fadeTime, "s"), l.appendChild(e), requestAnimationFrame(function() {
                            e.style.opacity = "1"
                        })) : l.appendChild(e), t(u.a.PIECE_ADDED, {
                            id: e.id
                        })
                    }), e.querySelector(".pieces").appendChild(l)
                }
            },
            d = function createSquare(e, t, n, r, o) {
                var i = document.createElement("div");
                return i.id = e, i.className = "square ".concat(t), void 0 !== n && (i.style.backgroundColor = n), void 0 !== r && (i.style.opacity = r), o && i.setAttribute("data-test", o), i
            },
            f = function addSquares(e, t, n, r) {
                var o = r.map(function(e) {
                    var r = t.test ? function(e) {
                        return "chessboard-square-".concat(e)
                    }(n) : void 0;
                    return d(e.id, "".concat(i({
                        file: e.file,
                        rank: e.rank
                    }), " ").concat(n, "-square"), e.color, e.opacity, r)
                });
                if (o.length > 0) {
                    var a = document.createDocumentFragment();
                    o.forEach(function(e) {
                        return a.appendChild(e)
                    }), e.insertBefore(a, e.firstChild)
                }
            },
            p = function blinkSquare(e, t) {
                var n, r = d(t.id, "".concat(i({
                    file: t.file,
                    rank: t.rank
                })), t.color, .5);
                e.insertBefore(r, e.querySelector(".pieces"));
                var o = 0;
                n = setInterval(function() {
                    o + 1 === 2 * t.times ? (clearInterval(n), e.removeChild(r)) : (r.style.opacity = o % 2 ? .5 : 0, o += 1)
                }, t.interval)
            },
            m = function closePromotionMenu(e) {
                var t = document.getElementById("promotion-menu");
                t && e.removeChild(t)
            },
            g = function createBoard(e) {
                if (!e.getElementsByClassName("pieces")[0]) {
                    var t = document.createElement("div");
                    t.classList.add("pieces"), e.appendChild(t)
                }
            },
            h = function createPiece(e, t, n, r, o) {
                var i = document.createElement("div");
                return i.id = t, i.className = "piece ".concat(n), i.style.backgroundImage = r, o && i.setAttribute("data-test", o), i
            },
            v = "mousedown",
            b = "mousemove",
            E = "mouseup",
            O = "pointerdown",
            _ = "pointermove",
            y = "pointerup",
            S = "touchstart",
            P = "touchmove",
            k = "touchend",
            C = function getPointerEvents() {
                var e, t, n, r = "onpointerdown" in window,
                    o = "ontouchstart" in window;
                return r ? (e = O, t = _, n = y) : o ? (e = S, t = P, n = k) : (e = v, t = b, n = E), {
                    pointerdown: e,
                    pointermove: t,
                    pointerup: n
                }
            }(),
            A = C.pointerdown,
            w = (C.pointermove, C.pointerup, function dragPiece(e) {
                var t = e.state,
                    n = e.draggingPiece,
                    r = e.coords;
                if (n) {
                    var o = document.getElementById(n.key);
                    if (o) {
                        var i = t.options.flipBoard ? r.x + t.board.squareSize / 2 - t.board.size : r.x - t.board.squareSize / 2,
                            a = t.options.flipBoard ? r.y - t.board.squareSize / 2 : r.y + t.board.squareSize / 2 - t.board.size;
                        o.style[c.e] = "translate3d(".concat(i, "px, ").concat(a, "px, 0)")
                    }
                }
            }),
            T = function setPiece(e, t) {
                if (e) {
                    var n = e instanceof Node ? e : document.getElementById(e.key);
                    if (n instanceof Node) {
                        var r = Array.from(n.classList).filter(function(e) {
                            return e.includes("square")
                        })[0];
                        n.classList.remove(r), n.classList.add(i(t)), n.style.transform = "", n.style.zIndex = ""
                    }
                }
            },
            M = function dropPiece(e, t) {
                if (t.draggingPiece) {
                    var n = document.getElementById(t.draggingPiece.key);
                    n && (T(n, t.fileRank), e(u.a.PIECE_DROPPED, {
                        id: n.id,
                        to: t.fileRank
                    }), n.classList.remove("dragging"))
                }
            },
            N = function fadePieces(e, t) {
                var n = e.getElementsByClassName("pieces")[0],
                    r = t.options.fadeSetup;
                requestAnimationFrame(function() {
                    n.style.transition = "opacity 0s", n.style.opacity = "0", requestAnimationFrame(function() {
                        n.style.transition = "opacity ".concat(r, "s"), n.style.opacity = "1"
                    })
                })
            },
            D = function flipPromotionMenu(e, t) {
                var n = e.querySelector("#promotion-menu");
                n && (Q(e, t), n.classList.contains("top") ? (n.classList.remove("top"), e.querySelector("#promotion-close").style.order = 0) : (n.classList.add("top"), e.querySelector("#promotion-close").style.order = 5))
            },
            j = function removeSquares(e, t, n) {
                (void 0 === n ? Array.from(e.getElementsByClassName("".concat(t, "-square"))) : Array.from(e.getElementsByClassName("".concat(t, "-square"))).filter(function(e) {
                    return -1 !== [].concat(n).findIndex(function(t) {
                        return e.id === t.id
                    })
                })).forEach(function(e) {
                    return e.parentNode.removeChild(e)
                })
            },
            I = function hideHoverSquare(e, t) {
                t.state.options.highlightLegalMoves && j(e, "hover")
            },
            R = function hideLegalMoves(e) {
                Array.from(e.getElementsByClassName("legal-move-hint")).forEach(function(e) {
                    e.style.display = "none"
                })
            },
            L = n(62),
            F = [];

        function animUpdate(e, t) {
            Object.keys(e.fromValues).forEach(function(n) {
                var r = e.fromValues[n],
                    o = e.toValues[n];
                e.updatedValues[n] = (o - r) * t + r
            }), e.onUpdate && e.onUpdate(e.updatedValues)
        }

        function animLoop(e) {
            F.forEach(function(t, n) {
                var r = 0;
                t.startTime < 0 ? (t.startTime = e, t.onStart && t.onStart()) : (r = (e - t.startTime) * t.durationRatio) > 1 && (r = 1), animUpdate(t, r), 1 === r && (t.onEnd && t.onEnd(), F.splice(n, 1))
            }), F.length && requestAnimationFrame(animLoop)
        }
        class Animation {
            constructor(e) {
                this.fromValues = e.from || null, this.toValues = e.to || null, this.updatedValues = {}, this.startTime = -1, this.durationRatio = e.duration ? 1 / (1e3 * e.duration) : 0, this.onStart = e.onStart || null, this.onUpdate = e.onUpdate || null, this.onEnd = e.onEnd || null
            }
            start() {
                F.push(this), 1 === F.length && requestAnimationFrame(animLoop)
            }
            static endAll() {
                F.forEach(function(e) {
                    animUpdate(e, 1), e.onEnd && e.onEnd()
                }), F.length = 0
            }
        }
        var B = function movePieces(e, t, n, r) {
                Array.from(e.getElementsByClassName("piece")).map(function(e) {
                    var t = r.pieces.findIndex(function(t) {
                        return t.key === e.id
                    });
                    return {
                        domPiece: e,
                        fromFileRank: Object(L.b)(e.className),
                        toFileRank: -1 !== t ? {
                            file: r.pieces[t].file,
                            rank: r.pieces[t].rank
                        } : null
                    }
                }).filter(function(e) {
                    return null !== e.toFileRank
                }).forEach(function(e) {
                    var o = a(e.fromFileRank, n.options.flipBoard, n.options.pieceStyle),
                        i = a(e.toFileRank, n.options.flipBoard, n.options.pieceStyle);
                    r.animationSpeed > 0 ? new Animation({
                        duration: r.animationSpeed,
                        from: {
                            x: o.x,
                            y: o.y
                        },
                        to: {
                            x: i.x,
                            y: i.y
                        },
                        onStart: function onStart() {
                            e.domPiece.style.zIndex = 3
                        },
                        onUpdate: function onUpdate(t) {
                            e.domPiece.style.transform = "translate3d(".concat(t.x, "%, ").concat(t.y, "%, 0)")
                        },
                        onEnd: function onEnd() {
                            T(e.domPiece, e.toFileRank)
                        }
                    }).start() : T(e.domPiece, e.toFileRank);
                    t(u.a.PIECE_MOVED, {
                        to: e.toFileRank,
                        id: e.domPiece.id
                    })
                })
            },
            x = function openPromotionMenu(e, t, n, r) {
                var i = document.getElementById("promotion-menu");
                i || (! function createPromotionMenu(e, t, n) {
                    var r = document.createDocumentFragment(),
                        i = document.createElement("div");
                    i.classList.add("promotion-menu"), i.id = "promotion-menu", i.style.height = "".concat(Math.round(4.3 * t.board.squareSize), "px"), i.style.width = "".concat(t.board.squareSize, "px"), i.addEventListener(A, function clickHandler(e) {
                        e.preventDefault(), e.stopPropagation();
                        var t = e.toElement || e.relatedTarget || e.target;
                        return "promotion-close" === t.id ? n.close() : n.select(t.getAttribute("data-type"))
                    });
                    var a = document.createElement("i");
                    a.className = "icon-x close-button icon-font-chess x", a.id = "promotion-close", a.style.order = 4, i.appendChild(a), ["q", "n", "r", "b"].map(function(e, n) {
                        var r = document.createElement("div");
                        return r.classList.add("promotion-piece"), r.setAttribute("data-type", e), r.style.backgroundImage = o({
                            color: 1,
                            type: e
                        }, Object(c.c)(t.options.pieceStyle, 150)), r.style.order = n, r.style.width = "".concat(t.board.squareSize, "px"), r.style.height = "".concat(t.board.squareSize, "px"), r
                    }).forEach(function(e) {
                        return i.appendChild(e)
                    }), r.appendChild(i), e.appendChild(r)
                }(e, t, n), i = document.getElementById("promotion-menu"));
                var a = t.options.flipBoard ? (t.board.files - r.toFileRank.file) * t.board.squareSize : (r.toFileRank.file - 1) * t.board.squareSize;
                t.options.pieceStyle.indexOf("3d") >= 0 ? i.classList.add("pseudo3d") : i.classList.remove("pseudo3d"), i.style.left = "".concat(a, "px"), i.setAttribute("data-file", r.toFileRank.file), r.top ? i.classList.add("top") : i.classList.remove("top");
                var s = r.top ? ["q", "n", "r", "b"] : ["b", "r", "n", "q"];
                Array.from(i.getElementsByClassName("promotion-piece")).forEach(function(e) {
                    var n = e.getAttribute("data-type"),
                        i = t.test ? "chessboard-promotion-piece-".concat(n) : void 0;
                    i && e.setAttribute("data-test", i), e.style.order = s.indexOf(n), e.style.backgroundImage = o({
                        color: r.piece.color,
                        type: n
                    }, Object(c.c)(t.options.pieceStyle, 150))
                }), document.getElementById("promotion-close").style.order = r.top ? 5 : 0
            },
            V = function pickUpPiece(e, t) {
                if (t) {
                    var n = document.getElementById(t.key);
                    n && (n.classList.add("dragging"), e(u.a.PIECE_PICKED_UP, {
                        id: n.id
                    }))
                }
            },
            U = function removePieces(e, t, n) {
                Array.from(e.getElementsByClassName("piece")).filter(function(e) {
                    return -1 !== n.pieces.findIndex(function(t) {
                        return t.key === e.id
                    })
                }).forEach(function(e) {
                    var r = e.id;
                    n.fadeTime ? (e.style.opacity = 1, e.style.transition = "opacity ".concat(n.fadeTime, "s"), requestAnimationFrame(function() {
                        e.style.opacity = 0, setTimeout(function() {
                            e && e.parentNode && e.parentNode.removeChild(e)
                        }, 1e3 * n.fadeTime)
                    })) : e.parentNode.removeChild(e), t(u.a.PIECE_REMOVED, {
                        id: r
                    })
                })
            },
            K = function setPieces(e, t, n, r) {
                Animation.endAll();
                var o = Array.from(e.getElementsByClassName("piece")),
                    i = r.filter(function(e) {
                        return -1 === o.findIndex(function(t) {
                            return t.id === e.key
                        })
                    });
                l(e, t, n, {
                    pieces: i,
                    fadeTime: .3
                }), Array.from(e.getElementsByClassName("piece")).map(function(e) {
                    var t = r.findIndex(function(t) {
                        return t.key === e.id
                    });
                    return -1 === t && e.parentNode.removeChild(e), {
                        domPiece: e,
                        to: -1 !== t ? r[t] : null
                    }
                }).filter(function(e) {
                    return null !== e.to
                }).filter(function(e) {
                    return !(n.draggingPiece && n.draggingPiece.key === e.domPiece.id)
                }).forEach(function(e) {
                    return T(e.domPiece, {
                        file: e.to.file,
                        rank: e.to.rank
                    })
                })
            },
            q = n(14),
            G = function setSquares(e, t, n) {
                var r = Array.from(e.getElementsByClassName("".concat(q.f.MARKED, "-square"))),
                    o = n.filter(function(e) {
                        return -1 === r.findIndex(function(t) {
                            return t.id === e.id
                        })
                    });
                r.filter(function(e) {
                    return -1 === n.findIndex(function(t) {
                        return t.id === e.id
                    })
                }).forEach(function(e) {
                    return e.parentNode.removeChild(e)
                }), f(e, t, q.f.MARKED, o)
            },
            H = function showHoverSquare(e, t) {
                var n = t.state,
                    r = t.coords;
                if (n.options.highlightLegalMoves) {
                    var o = Object(L.a)(Object(L.c)(r, e, n.board.files, n.board.ranks, n.options.flipBoard)),
                        i = {
                            id: "hover-square",
                            file: o.file,
                            rank: o.rank
                        };
                    j(e, "hover"), f(e, n, "hover", [i])
                }
            },
            z = function updateBoardImage(e, t) {
                var n = "url('".concat(Object(c.b)(t.options.boardStyle, 75), "') 0% 0% / 100% 100% no-repeat");
                t.options.overlayInAnalysisMode && t.gameSettings.analysis && (n = "\n      linear-gradient(rgba(255, 255, 255, 0.2),\n      rgba(255, 255, 255, 0.2)) 0% 0% / 100% 100%,\n      ".concat(n, "\n    ")), e.style.background = n
            },
            $ = function updateBoardSize(e, t) {
                e.style.width = "".concat(t.board.size, "px"), e.style.height = "".concat(t.board.size, "px"), e.style.backgroundSize = "".concat(t.board.size, "px ").concat(t.board.size, "px")
            },
            W = function updatePieceImages(e, t) {
                var n = Object(c.c)(t.options.pieceStyle, 150),
                    o = t.options.pieceStyle.indexOf("3d") >= 0;
                Array.from(e.querySelectorAll(".piece")).forEach(function(e) {
                    var t = Object(r.c)(e.style.backgroundImage);
                    o && e.setAttribute("piece-style", "pseudo3d"), e.style.backgroundImage = "url('".concat(n).concat(t, ".png')")
                })
            },
            Q = function updatePromotionMenuSize(e, t) {
                var n = e.querySelector("#promotion-menu");
                if (n) {
                    n.style.height = "".concat(Math.round(4.3 * t.board.squareSize), "px"), n.style.width = "".concat(t.board.squareSize, "px");
                    var r = parseInt(n.getAttribute("data-file"), 10),
                        o = t.options.flipBoard ? (t.board.files - r) * t.board.squareSize : (r - 1) * t.board.squareSize,
                        i = t.options.pieceStyle.indexOf("3d") >= 0;
                    n.style.left = "".concat(o, "px"), Array.from(e.getElementsByClassName("promotion-piece")).forEach(function(e) {
                        e.style.width = "".concat(t.board.squareSize, "px"), e.style.height = "".concat(t.board.squareSize, "px"), i && (e.style.backgroundSize = "".concat(t.board.squareSize, "px ").concat(t.board.squareSize, "px"))
                    })
                }
            };
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return f
        }), n.d(t, "d", function() {
            return p
        }), n.d(t, "e", function() {
            return m
        }), n.d(t, "f", function() {
            return g
        }), n.d(t, "g", function() {
            return h
        }), n.d(t, "h", function() {
            return w
        }), n.d(t, "i", function() {
            return M
        }), n.d(t, "j", function() {
            return N
        }), n.d(t, "k", function() {
            return D
        }), n.d(t, "l", function() {
            return I
        }), n.d(t, "m", function() {
            return R
        }), n.d(t, "n", function() {
            return B
        }), n.d(t, "o", function() {
            return x
        }), n.d(t, "p", function() {
            return V
        }), n.d(t, "q", function() {
            return U
        }), n.d(t, "r", function() {
            return j
        }), n.d(t, "s", function() {
            return T
        }), n.d(t, "t", function() {
            return K
        }), n.d(t, "u", function() {
            return G
        }), n.d(t, "v", function() {
            return H
        }), n.d(t, "w", function() {
            return z
        }), n.d(t, "x", function() {
            return $
        }), n.d(t, "y", function() {
            return W
        }), n.d(t, "z", function() {
            return Q
        })
    },
    22: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n(24),
            o = n.n(r),
            i = n(3),
            a = n.n(i);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                    a()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var s = {
            getId: function getId(e) {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                return Array(e || 20).fill().reduce(function(e) {
                    return e + t.charAt(Math.floor(Math.random() * t.length))
                }, "")
            },
            getInitialFen: function getInitialFen() {
                return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
            },
            formatJSTimestampForPgn: function formatJSTimestampForPgn(e) {
                var t = new Date(e),
                    n = "0".concat(t.getUTCDate()).slice(-2),
                    r = "0".concat(t.getUTCMonth() + 1).slice(-2);
                return "".concat(t.getFullYear(), "-").concat(r, "-").concat(n)
            },
            getSanFromFileRank: function getSanFromFileRank(e) {
                return e && e.file && e.rank ? String.fromCharCode(96 + e.file) + e.rank.toString() : null
            },
            getFileRankFromSan: function getFileRankFromSan(e) {
                return e ? {
                    file: e.toLowerCase().charCodeAt(0) - 96,
                    rank: Number(e.charAt(1))
                } : null
            },
            getPieceAt: function getPieceAt(e, t) {
                return e.setup.pieces.find(function(e) {
                    return e.file === t.file && e.rank === t.rank
                })
            },
            cloneGame: function cloneGame(e) {
                return {
                    id: e.id,
                    variant: e.variant,
                    jce: e.jce,
                    tree: s.cloneTree(e.tree),
                    setup: JSON.parse(JSON.stringify(e.setup)),
                    markings: _objectSpread({}, e.markings),
                    settings: _objectSpread({}, e.settings),
                    history: o()(e.history),
                    premoves: e.premoves.map(function(e) {
                        return JSON.parse(JSON.stringify(e))
                    })
                }
            },
            cloneTree: function cloneTree(e) {
                return _objectSpread({}, e, {
                    initialMarkings: JSON.parse(JSON.stringify(e.initialMarkings)),
                    selected: _objectSpread({}, e.selected),
                    selectedNode: e.selectedNode ? _objectSpread({}, e.selectedNode, {
                        ids: _objectSpread({}, e.selectedNode.ids),
                        hash: o()(e.selectedNode.hash),
                        lines: e.selectedNode.lines && o()(e.selectedNode.lines),
                        arrows: e.selectedNode.arrows && o()(e.selectedNode.arrows)
                    }) : null
                })
            },
            getFirstFen: function getFirstFen(e) {
                return e.tree.lines[0].length ? e.tree.lines[0][0].beforeFen : e.setup.fen
            }
        }
    },
    228: function(e, t, n) {
        "use strict";
        var r = function boardDimensions(e, t) {
                return Object.assign(e.parentNode.getBoundingClientRect(), {
                    aspectRatio: t
                })
            },
            o = (n(50), n(1)),
            i = n(2),
            a = function changePosition(e, t) {
                var n = e.setup.legalMoves;
                e.settings.analysis || e.setup.sideToMove === e.setup.playingAs || (n = e.settings.premoves && e.premoves && e.premoves.length < 8 && e.setup.legalPremoves && e.setup.legalPremoves.length > 0 ? e.setup.legalPremoves : []);
                var r = -1 !== [o.a.INIT, o.a.LOAD].indexOf(e.history ? e.history[e.history.length - 1].type : null);
                return {
                    animate: !r,
                    isCheck: e.setup.check,
                    isCheckmate: e.setup.checkmate,
                    loaded: r,
                    legalMoves: n,
                    markings: e.markings,
                    pieces: e.premoves && e.premoves.length && i.a.isHead(e.tree.lines || t, e.tree.selected) ? e.premoves.slice(-1)[0].pieces : e.setup.pieces,
                    premoves: e.premoves.map(function(e) {
                        return e.move
                    }),
                    previousPieces: [],
                    playingAs: e.setup.playingAs,
                    playSound: !r,
                    selectedNode: e.tree.selectedNode,
                    sideToMove: e.setup.sideToMove
                }
            },
            s = n(3),
            c = n.n(s);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var u = function updateMarkings(e, t) {
                return function _objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ownKeys(n, !0).forEach(function(t) {
                            c()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, t, {
                    premoves: e.settings.premoves ? e.premoves : null
                })
            },
            l = n(62);

        function click_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var d = function getClickFormatter(e) {
            return function(t, n, r) {
                var o = e(t, n, r),
                    i = Object(l.f)(t, n),
                    a = Object(l.e)(i, o.file, o.rank, r.board.files, r.board.ranks, r.board.isFlipped);
                return function click_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? click_ownKeys(n, !0).forEach(function(t) {
                            c()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : click_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({
                    altKey: t.altKey
                }, o, {}, i, {}, a)
            }
        };

        function right_click_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var f = function getKey(e) {
                return e.altKey ? "alt" : e.shiftKey ? "shift" : e.ctrlKey ? "ctrl" : "default"
            },
            p = function getRightClickFormatter(e) {
                return function(t, n, r) {
                    return function right_click_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? right_click_ownKeys(n, !0).forEach(function(t) {
                                c()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : right_click_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, e(t, n, r), {
                        key: f(t)
                    })
                }
            },
            m = function dragMove(e, t, n) {
                var r = Object(l.f)(e, t);
                return Object(l.a)(r, n.board.files, n.board.ranks)
            };

        function drag_start_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var g = function getDragStartFormatter(e) {
            return function(t, n, r) {
                var o = e(t, n, r),
                    i = Object(l.f)(t, n);
                return Object(l.g)(o, r.board.files, r.board.ranks) ? function drag_start_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? drag_start_ownKeys(n, !0).forEach(function(t) {
                            c()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : drag_start_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, o, {}, i, {}, Object(l.e)(i, o.file, o.rank, r.board.files, r.board.ranks, r.board.isFlipped), {
                    isRightClick: t.isRightClick
                }) : null
            }
        };

        function drag_stop_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var h = function getDragStopFormatter(e) {
                return function(t, n, r) {
                    return function drag_stop_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? drag_stop_ownKeys(n, !0).forEach(function(t) {
                                c()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : drag_stop_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, e(t, n, r), {
                        altKey: t.altKey,
                        isRightClick: t.isRightClick
                    })
                }
            },
            v = function keydown(e, t) {
                var n = e.keyCode;
                return 38 !== n && 40 !== n || !t || e.preventDefault(), n
            };

        function pointerdown_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var b = function getPointerdownFormatter(e) {
            return function(t, n, r) {
                var o = e(t, n, r);
                return Object(l.g)(o, r.board.files, r.board.ranks) ? function pointerdown_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? pointerdown_ownKeys(n, !0).forEach(function(t) {
                            c()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pointerdown_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, o, {}, Object(l.f)(t, n), {
                    isRightClick: t.isRightClick,
                    altKey: t.altKey
                }) : null
            }
        };

        function pointerup_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var E = function getPointerupFormatter(e) {
            return function(t, n, r) {
                return function pointerup_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? pointerup_ownKeys(n, !0).forEach(function(t) {
                            c()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pointerup_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, e(t, n, r), {}, Object(l.f)(t, n), {
                    isRightClick: t.isRightClick
                })
            }
        };
        n.d(t, "c", function() {
            return O
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return u
        });
        var O = function getDomFormatters(e) {
            return {
                click: d(e),
                rightClick: p(e),
                dragMove: m,
                dragStart: g(e),
                dragStop: h(e),
                keydown: v,
                pointerdown: b(e),
                pointerup: E(e)
            }
        }
    },
    232: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        });
        var r = {
                default: ["#B58863", "#F0D9B5", null, ".png", "#ffff33"],
                "8_bit": ["#6a9b41", "#f3f3f4", "8_bit", ".png", "#ffff33"],
                bases: ["#c26b38", "#efcca1", "bases", ".jpg", "#f5cc2a"],
                blue: ["#4D6D92", "#ECECD7", "blue", ".png", "#00a5ff"],
                brown: ["#B58863", "#F0D9B5", "brown", ".png", "#ffff33"],
                bubblegum: ["#f9cdd3", "#fff3f3", "bubblegum", ".png", "#de5d6f"],
                burled_wood: ["#895132", "#d9b088", "burled_wood", ".jpg", "#ee9016"],
                dark_wood: ["#8d675e", "#e7cdb2", "dark_wood", ".jpg", "#cc9122"],
                dash: ["#6b3a27", "#bd9257", "dash", ".jpg", "#eca722"],
                glass: ["#282f3f", "#667188", "glass", ".png", "#5b91b3"],
                graffiti: ["#b96f18", "#aeaeae", "graffiti", ".jpg", "#f39011"],
                green: ["#779952", "#edeed1", "green", ".png", "#ffff33"],
                icy_sea: ["#7a9db2", "#c5d5dc", "icy_sea", ".jpg", "#5ed7f1"],
                light: ["#aaaaaa", "#dcdcdc", "light", ".png", "#a4b8c4"],
                lolz: ["#909898", "#e0e9e9", "lolz", ".jpg", "#a3becd"],
                marble: ["#706b66", "#c7bdaa", "marble", ".jpg", "#f0db86"],
                metal: ["#6e6e6e", "#c9c9c9", "metal", ".jpg", "#a3becd"],
                nature: ["#8c976e", "#c3d1a4", "translucent", ".png", "#eef396"],
                neon: ["#636363", "#b9b9b9", "neon", ".png", "#6d90a6"],
                newspaper: ["#5a5956", "#5a5956", "newspaper", ".jpg", "#99976e"],
                orange: ["#D08B18", "#FCE4B2", "orange", ".png", "#ffff33"],
                overlay: ["#789ebd", "#4878a0", "overlay", ".png", "#0d9acf"],
                parchment: ["#B58863", "#F0D9B5", "parchment", ".jpg", "#d8cc66"],
                purple: ["#8877B7", "#EFEFEF", "purple", ".png", "#7dacc9"],
                red: ["#BA5546", "#F0D8BF", "red", ".png", "#f8f893"],
                sand: ["#b8a590", "#e5d3c4", "sand", ".jpg", "#e2bc87"],
                sky: ["#c2d7e2", "#efefef", "sky", ".png", "#65daf7"],
                stone: ["#666463", "#c8c3bd", "stone", ".jpg", "#36525f"],
                tan: ["#D08B18", "#FCE4B2", "tan", ".png", "#f7d84a"],
                tournament: ["#316549", "#ebece8", "tournament", ".jpg", "#a4c25b"],
                translucent: ["#667188", "#282f3f", "translucent", ".png", "#5b91b3"],
                walnut: ["#835f42", "#c0a684", "walnut", ".jpg", "#d1a52d"],
                wood: ["#8d675e", "#e7cdb2", "dark_wood", ".jpg", "#cc9122"],
                grey: ["#aaaaaa", "#dcdcdc", "light", ".png", "#a4b8c4"],
                pink: ["#f9cdd3", "#fff3f3", "bubblegum", ".png", "#de5d6f"],
                natural: ["#D08B18", "#FCE4B2", "tan", ".png", "#f0e464"],
                winboard: ["#316549", "#ebece8", "tournament", ".jpg", "#a4c25b"],
                blackwhite: ["#667188", "#282f3f", "translucent", ".png", "#5b91b3"],
                marbleblue: ["#c2d7e2", "#efefef", "marbleblue", ".jpg", "#65daf7"],
                marblebrown: ["#b96f18", "#aeaeae", "graffiti", ".jpg", "#f39011"],
                marblegreen: ["#706b66", "#c7bdaa", "marblegreen", ".jpg", "#f0db86"],
                wooddark: ["#895132", "#d9b088", "burled_wood", ".jpg", "#ee9016"],
                woodlight: ["#B58863", "#F0D9B5", "parchment", ".jpg", "#d8cc66"],
                woodmid: ["#8d675e", "#e7cdb2", "dark_wood", ".jpg", "#cc9122"],
                woodolive: ["#6e6e6e", "#c9c9c9", "woodolive", ".jpg", "#a3becd"]
            },
            o = {
                modern2: {
                    imgPath: "modern",
                    imgFormat: ".png"
                },
                lines: {
                    imgPath: "alpha",
                    imgFormat: ".png"
                },
                "3dwood": {
                    imgPath: "3d_wood",
                    imgFormat: ".png"
                },
                "3dplastic": {
                    imgPath: "3d_plastic",
                    imgFormat: ".png"
                },
                "3dchesskid": {
                    imgPath: "3d_chesskid",
                    imgFormat: ".png"
                }
            }
    },
    24: function(e, t, n) {
        e.exports = n(26)(15)
    },
    249: function(e, t, n) {
        var r = n(330),
            o = n(55),
            i = "Expected a function";
        e.exports = function throttle(e, t, n) {
            var a = !0,
                s = !0;
            if ("function" != typeof e) throw new TypeError(i);
            return o(n) && (a = "leading" in n ? !!n.leading : a, s = "trailing" in n ? !!n.trailing : s), r(e, t, {
                leading: a,
                maxWait: t,
                trailing: s
            })
        }
    },
    255: function(e, t, n) {
        e.exports = n(26)(16)
    },
    26: function(e, t) {
        e.exports = vueDLL
    },
    3: function(e, t, n) {
        e.exports = n(26)(5)
    },
    32: function(e, t, n) {
        "use strict";
        n.d(t, "v", function() {
            return a
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "o", function() {
            return u
        }), n.d(t, "g", function() {
            return l
        }), n.d(t, "h", function() {
            return d
        }), n.d(t, "i", function() {
            return f
        }), n.d(t, "j", function() {
            return p
        }), n.d(t, "k", function() {
            return m
        }), n.d(t, "l", function() {
            return g
        }), n.d(t, "p", function() {
            return h
        }), n.d(t, "n", function() {
            return v
        }), n.d(t, "q", function() {
            return b
        }), n.d(t, "r", function() {
            return E
        }), n.d(t, "s", function() {
            return O
        }), n.d(t, "t", function() {
            return _
        }), n.d(t, "u", function() {
            return y
        }), n.d(t, "c", function() {
            return S
        }), n.d(t, "d", function() {
            return P
        }), n.d(t, "f", function() {
            return k
        }), n.d(t, "m", function() {
            return C
        }), n.d(t, "e", function() {
            return displayNumber
        });
        var r = n(2),
            o = n(15),
            i = n(38),
            a = function normalizeAnnotation(e) {
                return Object.prototype.hasOwnProperty.call(o.c, e) || Object.prototype.hasOwnProperty.call(o.b, e) ? u(e) ? o.c[e] : normalizeAnnotation(o.b[e]) : e || ""
            },
            s = function additionalAnnotationExists(e, t) {
                return e.additionalAnnotation && Array.isArray(e.additionalAnnotation) && a(e.additionalAnnotation[0]) === a(t)
            },
            c = function annotationExists(e, t) {
                return a(e.annotation) === a(t)
            },
            u = function isNagFormat(e) {
                return e && "$" === e.charAt(0)
            },
            l = function hasAdditionalAnnotation(e) {
                return e.additionalAnnotation && e.additionalAnnotation[0]
            },
            d = function hasAnnotation(e) {
                return Object.prototype.hasOwnProperty.call(e, "annotation")
            },
            f = function hasComment(e) {
                return Boolean(e && "string" == typeof e.comment)
            },
            p = function hasCommentBefore(e) {
                return Boolean(e && "string" == typeof e.commentBefore)
            },
            m = function hasLines(e) {
                return Boolean(e && e.lines && e.lines.length)
            },
            g = function isEnPassant(e) {
                return 4 === e.flags
            },
            h = function isOnFirstLineOfParent(e, t) {
                return e.ids.line === t.lines[0]
            },
            v = function isLastMoveOnLine(e, t) {
                return e.ids.move === t.lines[e.ids.line].length - 1
            },
            b = function isOnLastLineOfParent(e, t) {
                return e.ids.line === t.lines[t.lines.length - 1]
            },
            E = function isOnMainLine(e) {
                return r.a.isMainLine(e.ids.line)
            },
            O = function nodeIsALimit(e, t, n) {
                return Object.prototype.hasOwnProperty.call(e, n) && Object.prototype.hasOwnProperty.call(e[n], "ids") && e[n].ids.move === t.ids.move && e[n].ids.line === t.ids.line
            },
            _ = function nodeIsAfterNodeLimitEnd(e, t) {
                var n = e[i.g.END];
                return !(!n || !Object.prototype.hasOwnProperty.call(n, "ids")) && (t.ids.line > n.ids.line || t.ids.line === n.ids.line && t.ids.move > n.ids.move)
            },
            y = function nodeIsBeforeLimitBegin(e, t) {
                var n = e[i.g.BEGIN];
                return !(!n || !Object.prototype.hasOwnProperty.call(n, "ids")) && (t.ids.line < e.begin.ids.line || t.ids.line === e.begin.ids.line && t.ids.move < e.begin.ids.move)
            },
            S = function canBeDeleted(e, t) {
                return !(t && E(e))
            },
            P = function cleanCommentString(e) {
                var t;
                return " " === (t = (t = e.replace(/<\/?[^>]+(>|$)/g, "")).replace(/&nbsp;/g, " ")) && (t = ""), t
            },
            k = function generateAnnotationString(e) {
                var t = "";
                return e.annotation && (t = "".concat(t).concat(a(e.annotation))), e.additionalAnnotation && e.additionalAnnotation[0] && (t = "".concat(t, "&nbsp;").concat(a(e.additionalAnnotation[0]))), t
            },
            C = function isFirstNodeOnFormattedLine(e) {
                return 0 === e.ids.move
            },
            A = function shouldShowDisplayNumber(e) {
                return Boolean(e.isWhite || e.isFirstNodeOnLine || e.previousHasComment || e.previousHasLines)
            },
            w = function shouldShowEllipsisOnBlackMoveNumber(e) {
                return Boolean(!e.isWhite && (e.previousHasComment || e.previousHasLines || e.isFirstNodeOnLine))
            };

        function displayNumber(e, t) {
            var n = "";
            return A(e) && (n += "".concat(e.nodeMoveNumber + (t - 1), "."), w(e) && (n += ".."), n += "&nbsp;"), n
        }
    },
    321: function(e, t, n) {
        "use strict";
        t.a = {
            PIECE_ADDED: "DOM_PIECE_ADDED",
            PIECE_DROPPED: "DOM_PIECE_DROPPED",
            PIECE_MOVED: "DOM_PIECE_MOVED",
            PIECE_PICKED_UP: "DOM_PIECE_PICKED_UP",
            PIECE_REMOVED: "DOM_PIECE_REMOVED"
        }
    },
    330: function(e, t, n) {
        e.exports = n(26)(60)
    },
    346: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = {
            arrows: [],
            squares: [],
            customItems: [],
            board: {
                files: 8,
                ranks: 8,
                size: 0,
                squareSize: 0,
                boardBg: null,
                pieceBaseBg: null,
                highlightColor: null
            },
            busy: !1,
            busyFlagTimeout: null,
            draggingPiece: null,
            drawingArrow: !1,
            drawingArrowFrom: null,
            movedPiece: null,
            gameSettings: {},
            legalMoves: [],
            isCheck: !1,
            isCheckmate: !1,
            markedSquareColors: {
                alt: "#0098c8",
                default: "#f42a32",
                shift: "#75bb37",
                ctrl: "#75bb37"
            },
            markedSquareOpacity: .9,
            options: n(212).a.getDefaultOptions(),
            pieces: [],
            previousPieces: [],
            premoves: [],
            preselectedPiece: null,
            promotion: {
                from: null,
                piece: null,
                to: null
            },
            selectedNode: void 0,
            selectedPiece: null,
            analysisMode: !1,
            sideToMove: 1,
            playingAs: null,
            preventNextSelect: !1
        }
    },
    38: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return d
        }), n.d(t, "e", function() {
            return f
        }), n.d(t, "c", function() {
            return m
        }), n.d(t, "d", function() {
            return g
        }), n.d(t, "g", function() {
            return h
        }), n.d(t, "f", function() {
            return v
        }), n.d(t, "h", function() {
            return b
        });
        var r, o, i, a = n(3),
            s = n.n(a),
            c = n(15),
            u = n(0),
            l = {
                AFTER: "after",
                BEFORE: "before"
            },
            d = {
                ADD_ANNOTATION: "addAnnotation",
                ADD_EVAL_NOTATION: "addEvalNotation",
                CLEAR_ANALYSIS: "clearAnalysis",
                CREATE_CONTINUATION: "createContinuation",
                CREATE_VARIATION: "createVariation",
                DELETE_COMMENT: "deleteComment",
                DELETE_LINE: "deleteLine",
                DELETE_MOVE: "deleteMove",
                INSERT_COMMENT: "insertComment",
                MOVE_VARIATION_DOWN: "moveVariationDown",
                MOVE_VARIATION: "moveVariation",
                PROMOTE_VARIATION: "promoteVariation",
                REMOVE_ANNOTATION: "removeAnnotation",
                REMOVE_BEGIN: "removeBegin",
                REMOVE_END: "removeEnd",
                REMOVE_EVAL_ANNOTATION: "removeEvalAnnotation",
                REMOVE_FOCUS: "removeFocus",
                SET_BEGIN: "setBegin",
                SET_END: "setEnd",
                SET_FOCUS: "setFocus",
                UPDATE_COMMENT: "updateComment"
            },
            f = {
                CLEAR_ANALYSIS: "clear-analysis-on-confirm"
            },
            p = [{
                code: "$1",
                display: c.c.$1,
                meaning: u.a.trans("Good move"),
                action: d.ADD_ANNOTATION
            }, {
                code: "$2",
                display: c.c.$2,
                meaning: u.a.trans("Bad move"),
                action: d.ADD_ANNOTATION
            }, {
                code: "$3",
                display: c.c.$3,
                meaning: u.a.trans("Excellent move"),
                action: d.ADD_ANNOTATION
            }, {
                code: "$4",
                display: c.c.$4,
                meaning: u.a.trans("Blunder"),
                action: d.ADD_ANNOTATION
            }, {
                code: "$5",
                display: c.c.$5,
                meaning: u.a.trans("Speculative move"),
                action: d.ADD_ANNOTATION
            }, {
                code: "$6",
                display: c.c.$6,
                meaning: u.a.trans("Dubious move"),
                action: d.ADD_ANNOTATION
            }, {
                code: "$10",
                display: c.c.$10,
                meaning: u.a.trans("Drawish"),
                action: d.ADD_EVAL_NOTATION
            }, {
                code: "$13",
                display: c.c.$13,
                meaning: u.a.trans("Unclear"),
                action: d.ADD_EVAL_NOTATION
            }, {
                code: "$14",
                display: c.c.$14,
                meaning: u.a.trans("White has a slight advantage"),
                action: d.ADD_EVAL_NOTATION
            }, {
                code: "$15",
                display: c.c.$15,
                meaning: u.a.trans("Black has a slight advantage"),
                action: d.ADD_EVAL_NOTATION
            }, {
                code: "$16",
                display: c.c.$16,
                meaning: u.a.trans("White has a moderate advantage"),
                action: d.ADD_EVAL_NOTATION
            }, {
                code: "$17",
                display: c.c.$17,
                meaning: u.a.trans("Black has a moderate advantage"),
                action: d.ADD_EVAL_NOTATION
            }, {
                code: "$18",
                display: c.c.$18,
                meaning: u.a.trans("White has a decisive advantage"),
                action: d.ADD_EVAL_NOTATION
            }, {
                code: "$19",
                display: c.c.$19,
                meaning: u.a.trans("Black has a decisive advantage"),
                action: d.ADD_EVAL_NOTATION
            }, {
                code: "$22",
                display: c.c.$22,
                meaning: u.a.trans("The position is in zugzwang"),
                action: d.ADD_EVAL_NOTATION
            }, {
                code: "$146",
                display: c.c.$146,
                meaning: u.a.trans("Novelty"),
                action: d.ADD_EVAL_NOTATION
            }],
            m = {
                CLEAR_ALL_ANALYSIS: {
                    name: u.a.trans("Clear All Analysis"),
                    action: d.CLEAR_ANALYSIS
                },
                CREATE_CONTINUATION: {
                    name: u.a.trans("Insert Continuation"),
                    action: d.CREATE_CONTINUATION
                },
                CREATE_VARIATION: {
                    name: u.a.trans("Insert Alternate Line"),
                    action: d.CREATE_VARIATION
                },
                DELETE_COMMENT_AFTER: {
                    name: u.a.trans("Delete Comment After"),
                    action: d.DELETE_COMMENT,
                    position: l.AFTER
                },
                DELETE_COMMENT_BEFORE: {
                    name: u.a.trans("Delete Comment Before"),
                    action: d.DELETE_COMMENT,
                    position: l.BEFORE
                },
                DELETE_LINE: {
                    name: u.a.trans("Delete Entire Variation"),
                    action: d.DELETE_LINE
                },
                DELETE_MOVE: {
                    name: u.a.trans("Delete Move"),
                    action: d.DELETE_MOVE
                },
                INSERT_COMMENT_AFTER: {
                    name: u.a.trans("Comment After"),
                    action: d.INSERT_COMMENT,
                    position: l.AFTER
                },
                INSERT_COMMENT_BEFORE: {
                    name: u.a.trans("Comment Before"),
                    action: d.INSERT_COMMENT,
                    position: l.BEFORE
                },
                MOVE_VARIATION_DOWN: {
                    name: u.a.trans("Move Variation Down"),
                    action: d.MOVE_VARIATION_DOWN
                },
                MOVE_VARIATION_UP: {
                    name: u.a.trans("Move Variation Up"),
                    action: d.MOVE_VARIATION
                },
                PROMOTE_VARIATION: {
                    name: u.a.trans("Promote"),
                    action: d.PROMOTE_VARIATION
                },
                REMOVE_ANNOTATION: {
                    name: u.a.trans("Remove Annotation"),
                    action: d.REMOVE_ANNOTATION
                },
                REMOVE_BEGIN: {
                    name: u.a.trans("Remove Begin"),
                    action: d.REMOVE_BEGIN
                },
                REMOVE_END: {
                    name: u.a.trans("Remove End"),
                    action: d.REMOVE_END
                },
                REMOVE_EVAL_ANNOTATION: {
                    name: u.a.trans("Remove Evaluation Annotation"),
                    action: d.REMOVE_EVAL_ANNOTATION
                },
                REMOVE_FOCUS: {
                    name: u.a.trans("Remove Focus"),
                    action: d.REMOVE_FOCUS
                },
                SET_BEGIN: {
                    name: u.a.trans("Set Begin"),
                    action: d.SET_BEGIN
                },
                SET_END: {
                    name: u.a.trans("Set End"),
                    action: d.SET_END
                },
                SET_FOCUS: {
                    name: u.a.trans("Set Focus"),
                    action: d.SET_FOCUS
                }
            },
            g = [d.SET_BEGIN, d.SET_END, d.SET_FOCUS, d.REMOVE_BEGIN, d.REMOVE_END, d.REMOVE_FOCUS],
            h = {
                BEGIN: "begin",
                END: "end",
                FOCUS: "focus"
            },
            v = {
                SET: (r = {}, s()(r, d.SET_BEGIN, h.BEGIN), s()(r, d.SET_END, h.END), s()(r, d.SET_FOCUS, h.FOCUS), r),
                REMOVE: (o = {}, s()(o, d.REMOVE_BEGIN, h.BEGIN), s()(o, d.REMOVE_END, h.END), s()(o, d.REMOVE_FOCUS, h.FOCUS), o)
            },
            b = (i = [], p.forEach(function(e) {
                var t = i[i.length - 1] || null;
                t && 4 !== t.length ? t.push(e) : i.push([e])
            }), i)
    },
    394: function(e, t, n) {
        e.exports = n(26)(57)
    },
    396: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return u
        }), n.d(t, "c", function() {
            return l
        });
        var r = n(97),
            o = n(232),
            i = function getPieceScheme(e) {
                return o.b[e] ? o.b[e] : {
                    imgPath: e,
                    imgFormat: ".png"
                }
            },
            a = new Array(76).join().split(",").map(function(e, t) {
                return 2 * t
            }).slice(22),
            s = function getAdjustedSize(e) {
                var t = function isHighRes() {
                    return window.devicePixelRatio > 1
                }() ? 2 * e : e;
                return a.reduceRight(function(e, n) {
                    return n === t || n > t ? n : e
                })
            },
            c = function getBoardBackground(e, t) {
                var n = function getBoardScheme(e) {
                        return o.a[e]
                    }(e),
                    i = s(t);
                return "".concat(r.a.paths.boards, "/").concat(n[2], "/").concat(i).concat(n[3])
            },
            u = function getPieceBaseUrl(e, t) {
                var n = i("real3d" !== e ? e : "neo"),
                    o = s(t);
                return "".concat(r.a.paths.pieces, "/").concat(n.imgPath, "/").concat(o, "/")
            },
            l = function getThreeCheckPieceUrl(e) {
                return "".concat(r.a.paths.variants, "/").concat("/threecheck/").concat([null, "check_wht", "check_blk"][e], ".png")
            }
    },
    4: function(e, t, n) {
        "use strict";
        var r = n(21),
            o = n(2),
            i = n(50),
            a = n(22);
        n.d(t, "a", function() {
            return s
        });
        var s = {
            createJce: function createJce(e) {
                var t = Object.assign({}, e, {
                    analysis: !0
                });
                return r.default.createGame(t) || null
            },
            updateIdsFromJce: function updateIdsFromJce(e) {
                return e && e.jce ? (e.tree.selected = e.jce.ids(), e) : null
            },
            getSelectedIds: function getSelectedIds(e) {
                return e.jce.ids()
            },
            getPositionInfo: function getPositionInfo(e) {
                var t = r.default.getPositionInfo({
                    game: e.jce
                }, {
                    skipValidation: !0,
                    getLegalMoves: !0
                });
                return e.settings.premoves ? t.legalPremoves = s.getLegalPremoves(e) : t.legalPremoves = [], t
            },
            getPositionDetails: function getPositionDetails(e) {
                return Object.assign(r.default.getPositionDetails({
                    game: e.jce,
                    kings: !1,
                    skipValidation: !0
                }), {
                    hand: s.getHand(e)
                })
            },
            addExtraCastlingMoves: function addExtraCastlingMoves(e) {
                e.setup.legalMoves.forEach(function(t) {
                    16 !== t.flags && 32 !== t.flags || ("chess960" === e.variant ? s.addCastlingMoves960(e, t) : s.addCastlingMoves(e, t))
                })
            },
            addCastlingMoves: function addCastlingMoves(e, t) {
                var n = 1 === t.color ? 1 : 8;
                (16 === t.flags ? [8] : [1, 2]).forEach(function(r) {
                    e.setup.legalMoves.push({
                        color: t.color,
                        flags: t.flags,
                        piece: "k",
                        from: t.from,
                        san: 16 === t.flags ? "O-O" : "O-O-O",
                        to: a.a.getSanFromFileRank({
                            file: r,
                            rank: n
                        })
                    })
                })
            },
            addCastlingMoves960: function addCastlingMoves960(e, t) {
                for (var n = a.a.getFileRankFromSan(t.from).rank, r = 1, o = 0; o < 2;) {
                    var i = a.a.getPieceAt(e, {
                        file: r,
                        rank: n
                    });
                    void 0 !== i && "r" === i.type && o++, (1 === o && 32 === t.flags || 2 === o && 16 === t.flags) && e.setup.legalMoves.push({
                        color: t.color,
                        flags: t.flags,
                        piece: "k",
                        from: t.from,
                        san: 16 === t.flags ? "O-O" : "O-O-O",
                        to: a.a.getSanFromFileRank({
                            file: r,
                            rank: n
                        })
                    })
                }
                r++
            },
            getHeaders: function getHeaders(e) {
                return e.jce.header()
            },
            getFen: function getFen(e) {
                return e.jce.fen()
            },
            getPgn: function getPgn(e, t) {
                return e.jce.pgn(t)
            },
            getPremoves: function getPremoves(e) {
                return e.jce.premoves
            },
            getHand: function getHand(e) {
                return e.jce.hand()
            },
            getChecks: function getChecks(e) {
                return e.jce.checks()
            },
            getLegalPremoves: function getLegalPremoves(e) {
                return r.default.getPremoves(e.jce.premoves && e.jce.premoves.length > 0 ? e.jce.premoves[e.jce.premoves.length - 1].fen : e.jce.fen(), e.setup.playingAs, e.variant)
            },
            load: function load(e, t) {
                return e.jce.load(t) && s.updateIdsFromJce(e), e
            },
            loadPgn: function loadPgn(e, t) {
                return e.jce.loadPgn(t) && s.updateIdsFromJce(e), e
            },
            createVariation: function createVariation(e) {
                return e.jce.createVariation() && (e.jce.reorderLines(), s.updateIdsFromJce(e)), e
            },
            getJCEMove: function getJCEMove(e, t) {
                var n = t;
                return s.isValidMoveObject(t) ? (n.san ? n = r.default.sanToObj(n.san, s.getFen(e), e.variant) : n.tcn && (n = r.default.decodeTCN(n.tcn)[0]), n) : null
            },
            move: function move(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (!t) return null;
                var r = !1;
                if (!1 === n) {
                    var o = t.from ? e.jce.get(t.from) : null,
                        i = t.to ? e.jce.get(t.to) : null;
                    if (o && i && "k" === i.type) return null;
                    e.jce.remove(t.to), e.jce.remove(t.from);
                    var a = t.drop || t.put;
                    r = e.jce.put(o || {
                        type: a.toLowerCase(),
                        color: a && a.toUpperCase() === a ? 1 : 2
                    }, t.to), t.from && o && null === t.to && (r = !0)
                } else t.drop && (t.drop = t.drop.toLowerCase()), r = e.jce.move(t);
                return r && s.updateIdsFromJce(e), r
            },
            selectLine: function selectLine(e, t) {
                var n = o.a.getLine(e.tree.lines, t);
                return n && (e.jce.selectLine(t), e.tree.selected = {
                    line: t,
                    move: n.length - 1
                }), e
            },
            selectNode: function selectNode(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    line: 0,
                    move: 0
                };
                return e.jce.selectPosition(t.move, t.line), e
            },
            updateHeaders: function updateHeaders(e, t) {
                return e.jce.header(t)
            },
            clear: function clear(e) {
                return e.jce.clear(e.variant)
            },
            isFileRankEqual: function isFileRankEqual(e, t) {
                return e.file && t.file && e.rank && t.rank && e.file === t.file && e.rank === t.rank
            },
            isValidMoveObject: function isValidMoveObject(e) {
                return "string" == typeof e.from && "string" == typeof e.to || "string" == typeof e.san || "string" == typeof e.tcn || !e.from && "string" == typeof e.to && "string" == typeof e.drop || null === e.to && "string" == typeof e.from || !e.from && "string" == typeof e.to && "string" == typeof e.put
            },
            movesMatch: function movesMatch(e, t) {
                return !(e.from !== t.from || e.to !== t.to || e.promotion && e.promotion !== t.promotion || e.drop && e.drop !== t.drop)
            },
            getMoveNumber: function getMoveNumber(e, t) {
                return 1 === e ? Math.ceil(t / 2 + 1) : Math.floor(t / 2 + 1)
            },
            isUserTurn: function isUserTurn(e) {
                return e.setup.playingAs === e.setup.sideToMove
            },
            getFens: function getFens(e) {
                var t = [e.setup.fen];
                return (e.tree.lines || n(44).default.state.lines)[0].forEach(function(e) {
                    t.push(e.fen)
                }), t
            },
            getLastTcn: function getLastTcn(e) {
                var t = i.a.getTcn(e);
                return t.substr(t.length - 2)
            },
            getSanMoves: function getSanMoves(e, t) {
                var r = [];
                return (e.tree.lines || n(44).default.state.lines)[0].some(function(e, n) {
                    return "number" == typeof t && n >= t || (r.push(e.san), !1)
                }), r
            }
        }
    },
    40: function(e, t, n) {
        "use strict";
        n.d(t, "g", function() {
            return s
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "b", function() {
            return u
        }), n.d(t, "e", function() {
            return l
        }), n.d(t, "a", function() {
            return d
        }), n.d(t, "c", function() {
            return f
        }), n.d(t, "f", function() {
            return m
        }), n.d(t, "h", function() {
            return g
        }), n.d(t, "i", function() {
            return h
        }), n.d(t, "k", function() {
            return v
        }), n.d(t, "j", function() {
            return b
        });
        var r = n(3),
            o = n.n(r),
            i = n(24),
            a = n.n(i);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                    o()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var s = function isFileRank(e) {
                return null != e && void 0 !== e.file && void 0 !== e.rank
            },
            c = function getPiece(e, t) {
                return e.filter(function(e) {
                    return e.file === t.file && e.rank === t.rank
                })[0]
            },
            u = function getFileRankInsideBoard(e, t, n) {
                return s(e) ? {
                    file: Math.min(Math.max(e.file, 1), t),
                    rank: Math.min(Math.max(e.rank, 1), n)
                } : null
            },
            l = function getSanFromFileRank(e) {
                return e && e.file && e.rank ? String.fromCharCode(96 + e.file) + e.rank.toString() : null
            },
            d = function getFileRankFromSan(e) {
                return e ? {
                    file: e.toLowerCase().charCodeAt(0) - 96,
                    rank: Number(e.charAt(1))
                } : null
            },
            f = function getMoveSquares() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if (null === t && (t = []), null === n && (n = []), 0 === Object.keys(e).length && 0 === t.length) return [];
                var r = t.reduce(function(e, t) {
                    return t.from && e.push(t.from), t.to && e.push(t.to), e
                }, []).concat(n.map(function(e) {
                    return l(e)
                }));
                return [e.from && !r.includes(e.from) ? d(e.from) : null, e.to && !r.includes(e.to) ? d(e.to) : null].concat(a()(t.reduce(function(e, t) {
                    return e.push(t.from ? _objectSpread({}, d(t.from), {
                        isPremove: !0
                    }) : null), e.push(t.to ? _objectSpread({}, d(t.to), {
                        isPremove: !0
                    }) : null), e
                }, [])))
            },
            p = 0,
            m = function getSquareId() {
                return "square-".concat(p += 1)
            },
            g = function isFileRankEqual(e, t) {
                return e.file === t.file && e.rank === t.rank
            },
            h = function isInvalidArrow(e, t) {
                return !!g(e, t) || e.file !== t.file && e.rank !== t.rank && (Math.abs(e.file - t.file) !== Math.abs(e.rank - t.rank) && !(2 === Math.abs(e.file - t.file) && 1 === Math.abs(e.rank - t.rank) || 2 === Math.abs(e.rank - t.rank) && 1 === Math.abs(e.file - t.file)))
            },
            v = function isValidPromotion(e, t, n) {
                if (!e || !t || !n) return !1;
                var r = c(e, t);
                if (!r || !r.color || !r.type) return !1;
                var o = 1 === r.color ? 7 : 2,
                    i = 1 === r.color ? 8 : 1;
                return t.rank === o && n.rank === i && "p" === r.type
            },
            b = function isShortString(e) {
                return -1 !== "pnbrqkPNBRQK".indexOf(e)
            }
    },
    41: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "i", function() {
            return i
        }), n.d(t, "j", function() {
            return a
        }), n.d(t, "h", function() {
            return s
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "f", function() {
            return l
        }), n.d(t, "g", function() {
            return d
        }), n.d(t, "e", function() {
            return f
        }), n.d(t, "b", function() {
            return p
        });
        var r = function getWindowTitle() {
                return encodeURIComponent(window.document.title)
            },
            o = function getWindowLocation() {
                return encodeURIComponent(window.location.href)
            },
            i = window.location.pathname,
            a = r(),
            s = o();
        window.chessBrowserChecker = {};
        var c = function bookmarkPage() {
            if (window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(a, s, "");
            else if (window.external && "AddFavorite" in window.external) window.external.AddFavorite(s, a);
            else {
                var e = -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac") ? "Cmd" : "Ctrl";
                alert("Press ".concat(e, "+D to bookmark this page."))
            }
        };
        window.chessBrowserChecker.supportedBrowsers = ["Chrome", "edge", "Firefox", "IE", "Safari", "Waterfox"];
        var u = {
            chrome: 74,
            edge: 17,
            firefox: 60,
            safari: 11,
            waterfox: 56
        };
        window.chessBrowserChecker.supportedBrowserVersions = u;
        var l = function printWindow() {
                window.print()
            },
            d = function sendEmail(e, t) {
                window.location.href = "mailto:?".concat(e, "&").concat(t)
            },
            f = function isMobile() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            },
            p = function getBrowser() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
                    n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (function isEdge() {
                        return null !== (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent).match(/Edge/)
                    }(t)) {
                    var r = t.indexOf("Edge/");
                    return {
                        name: "Edge",
                        version: parseInt(t.substring(r + 5, t.indexOf(".", r)), 10)
                    }
                }
                if (/trident/i.test(n[1])) return {
                    name: "IE",
                    version: (e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || ""
                };
                if ("Chrome" === n[1] && null != (e = t.match(/\bOPR\/(\d+)/))) return {
                    name: "Opera",
                    version: e[1]
                };
                if ("Firefox" === n[1]) {
                    var o = t.match(/(waterfox(?=\/))\/?\s*(\d+)/i) || [];
                    if ("Waterfox" === o[1]) return {
                        name: o[1],
                        version: parseInt(o[2], 10)
                    }
                }
                return "Safari" === (n = n[2] ? [n[1], n[2]] : [window.navigator.appName, window.navigator.appVersion, "-?"])[0] && null != (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), {
                    name: n[0],
                    version: parseInt(n[1], 10)
                }
            };
        window.chessBrowserChecker.getBrowserInformation = p;
        window.chessBrowserChecker.isOldBrowser = function isOldBrowser() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
                t = p(e);
            return "Chrome" === t.name ? t.version < u.chrome : "Safari" === t.name ? t.version < u.safari : "Firefox" === t.name ? t.version < u.firefox : "Edge" === t.name ? t.version < u.edge : "IE" === t.name
        }
    },
    417: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "a", function() {
            return i
        });
        var r = function getColorFromNumeric(e) {
                return 1 === e ? "w" : "b"
            },
            o = function getShortStringFromUrl(e) {
                return e.replace("url(", "").replace(")", "").replace(/"/g, "").slice(-6, -4)
            },
            i = function cssHexToNumber(e) {
                var t = e.replace("#", "");
                return 3 === e.length && (t = "".concat(t[0]).concat(t[0]).concat(t[1]).concat(t[1]).concat(t[2]).concat(t[2])), parseInt(t, 16)
            }
    },
    42: function(e, t, n) {
        e.exports = n(26)(17)
    },
    422: function(e, t, n) {
        "use strict";
        var r = "ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0 || /firefox/i.test(window.navigator.userAgent) && "TouchEvent" in window;
        n.d(t, "a", function() {
            return ChessEvents_ChessEvents
        });
        var o = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            i = document.documentElement,
            a = "mouseup",
            s = "mousedown",
            c = "mousemove",
            u = "dragstart",
            l = "contextmenu",
            d = "touchend",
            f = "touchstart",
            p = "touchmove",
            m = "touchcancel",
            g = 1,
            h = 1,
            v = 3,
            b = 2,
            E = 1;
        class ChessEvents_ChessEvents {
            constructor(e) {
                this.chessboard = e
            }
            setFixed(e) {
                this.inFixedElement = !!e
            }
            destroy() {
                this.destroyTouch && (this.destroyTouch(), delete this.destroyTouch), this.destroyMouse && (this.destroyMouse(), delete this.destroyMouse)
            }
            observe(e) {
                this.destroy(), r && this.observeTouch(e), this.observeMouse(e)
            }
            observeTouch(e) {
                var t, n, r, o, a, s = this.chessboard,
                    c = !1,
                    u = function handleMove(i) {
                        if (e.keepDefault || (i.returnValue = !1, "function" == typeof i.preventDefault && i.preventDefault()), i.cancelBubble = !0, "function" == typeof i.stopPropagation && i.stopPropagation(), i.touches && i.touches[0] ? (o = i.touches[0].pageX, a = i.touches[0].pageY) : i.changedTouches && i.changedTouches[0] && (o = i.changedTouches[0].pageX, a = i.changedTouches[0].pageY), c) "function" == typeof e.dragmove && (i.pointer = {
                            x: o,
                            y: a,
                            type: "touch",
                            target: r
                        }, e.dragmove.call(s, i));
                        else {
                            var u = Math.abs(o - t) > E,
                                l = Math.abs(a - n) > E;
                            (c = u || l) && "function" == typeof e.dragstart && (i.pointer = {
                                x: t,
                                y: n,
                                type: "touch",
                                target: r
                            }, e.dragstart.call(s, i))
                        }
                    },
                    l = function handleEnd(l) {
                        e.keepDefault || (l.returnValue = !1, "function" == typeof l.preventDefault && l.preventDefault()), c ? "function" == typeof e.dragstop && (l.pointer = {
                            x: o,
                            y: a,
                            type: "touch",
                            target: r
                        }, e.dragstop.call(s, l)) : "function" == typeof e.click && (l.pointer = {
                            x: o,
                            y: a,
                            type: "touch",
                            target: r
                        }, e.click.call(s, l)), t = void 0, n = void 0, r = void 0, o = void 0, a = void 0, c = !1, i.removeEventListener(p, u), i.removeEventListener(d, handleEnd)
                    },
                    g = function handleStart(c) {
                        e.keepDefault || (c.returnValue = !1, "function" == typeof c.preventDefault && c.preventDefault()), r = c.target, c.touches && c.touches[0] ? (o = c.touches[0].pageX, t = c.touches[0].pageX, a = c.touches[0].pageY, n = c.touches[0].pageY) : c.changedTouches && c.changedTouches[0] && (o = c.changedTouches[0].pageX, t = c.changedTouches[0].pageX, a = c.changedTouches[0].pageY, n = c.changedTouches[0].pageY), "function" == typeof e.pointerdown && (c.pointer = {
                            x: t,
                            y: n,
                            type: "touch",
                            target: r
                        }, e.pointerdown.call(s, c)), i.addEventListener(p, u, !1), i.addEventListener(d, l, !1)
                    },
                    h = function handleCancel() {
                        t = void 0, n = void 0, r = void 0, o = void 0, a = void 0, c = !1, i.removeEventListener(p, u), i.removeEventListener(d, l)
                    };
                s.addEventListener(f, g, !1), s.addEventListener(m, h, !1), this.destroyTouch = function() {
                    s.removeEventListener(f, g), s.removeEventListener(f, h)
                }
            }
            observeMouse(e) {
                var t, n, r, d = this.chessboard;
                o && (d.style.touchAction = "none", d.style.msTouchAction = "none");
                var f = !1,
                    p = !1,
                    m = !1,
                    O = !1,
                    _ = this.inFixedElement,
                    y = function hasButtonChanged(e) {
                        if (e.buttons) {
                            if (m && e.buttons === h) return !0;
                            if (p && e.buttons === b) return !0
                        } else if (e.button) {
                            if (m && e.button === h) return !0;
                            if (p && e.button === b) return !0
                        } else if (e.which) {
                            if (m && e.which === g) return !0;
                            if (p && e.which === v) return !0
                        }
                        return !1
                    },
                    S = function handleDrag(t) {
                        e.keepDefault || (t.returnValue = !1, "function" == typeof t.preventDefault && t.preventDefault()), t.cancelBubble = !0, "function" == typeof t.stopPropagation && t.stopPropagation()
                    },
                    P = function handleMenu(t) {
                        e.keepDefault || (t.returnValue = !1, "function" == typeof t.preventDefault && t.preventDefault()), t.cancelBubble = !0, "function" == typeof t.stopPropagation && t.stopPropagation(), "function" == typeof e.contextmenu && e.contextmenu.call(d, t)
                    },
                    k = function handleMove(o) {
                        var i, a;
                        if (e.keepDefault || (o.returnValue = !1, "function" == typeof o.preventDefault && o.preventDefault()), !O)
                            if (_ ? (i = o.clientX, a = o.clientY) : (i = o.pageX, a = o.pageY), r.parentNode || (r = o.target || o.srcElement), y(o)) f && ("function" == typeof e.dragcancel && (o.pointer = {
                                x: i,
                                y: a,
                                type: "mouse",
                                target: r
                            }, o.isRightClick = m, e.dragcancel.call(d, o)), f = !1);
                            else if (f) "function" == typeof e.dragmove && (o.pointer = {
                            x: i,
                            y: a,
                            type: "mouse",
                            target: r
                        }, o.isRightClick = m, e.dragmove.call(d, o));
                        else if (p || m) {
                            var s = Math.abs(i - t) > E,
                                c = Math.abs(a - n) > E;
                            if (f = s || c)
                                if ("function" == typeof e.dragstart) o.pointer = {
                                    x: t,
                                    y: n,
                                    type: "mouse",
                                    target: r
                                }, o.isRightClick = m, !1 === e.dragstart.call(d, o) && (O = !0)
                        }
                    },
                    C = function handleUp(o) {
                        var s, u;
                        e.keepDefault || (o.returnValue = !1, "function" == typeof o.preventDefault && o.preventDefault()), _ ? (s = o.clientX, u = o.clientY) : (s = o.pageX, u = o.pageY), r.parentNode || (r = o.target || o.srcElement), y(o) ? f && ("function" == typeof e.dragcancel && (o.pointer = {
                            x: s,
                            y: u,
                            type: "mouse",
                            target: r
                        }, o.isRightClick = m, e.dragcancel.call(d, o)), f = !1) : f ? O || "function" == typeof e.dragstop && (o.pointer = {
                            x: s,
                            y: u,
                            type: "mouse",
                            target: r
                        }, o.isRightClick = m, e.dragstop.call(d, o)) : p ? "function" == typeof e.click && (o.pointer = {
                            x: s,
                            y: u,
                            type: "mouse",
                            target: r
                        }, o.isRightClick = m, e.click.call(d, o)) : m && "function" == typeof e.rightclick && (o.pointer = {
                            x: s,
                            y: u,
                            type: "mouse",
                            target: r
                        }, o.isRightClick = m, e.rightclick.call(d, o)), "function" == typeof e.pointerup && (o.pointer = {
                            x: t,
                            y: n,
                            type: "mouse",
                            target: r
                        }, o.isRightClick = m, e.pointerup.call(d, o)), t = void 0, n = void 0, r = void 0, f = !1, p = !1, m = !1, O = !1, i.removeEventListener(c, k), i.removeEventListener(a, handleUp)
                    },
                    A = function handleDown(o) {
                        e.keepDefault || (o.returnValue = !1, "function" == typeof o.preventDefault && o.preventDefault()), o.which ? (p = o.which === g, m = o.which === v) : o.button ? (p = o.button === h, m = o.button === b) : o.buttons && (p = o.buttons === h, m = o.buttons === b), (p || m) && (f && ("function" == typeof e.dragcancel && (o.pointer = {
                            x: t,
                            y: n,
                            type: "mouse",
                            target: r
                        }, o.isRightClick = m, e.dragcancel.call(d, o)), f = !1), r = o.target || o.srcElement, _ ? (t = o.clientX, n = o.clientY) : (t = o.pageX, n = o.pageY), "function" == typeof e.pointerdown && (o.pointer = {
                            x: t,
                            y: n,
                            type: "mouse",
                            target: r
                        }, o.isRightClick = m, e.pointerdown.call(d, o)), i.addEventListener(c, k, !1), i.addEventListener(a, C, !1))
                    };
                d.addEventListener(s, A, !1), d.addEventListener(u, S, !1), d.addEventListener(l, P, !1), this.destroyMouse = function() {
                    d.removeEventListener(s, A), d.removeEventListener(u, S), d.removeEventListener(l, P)
                }
            }
        }
    },
    423: function(e, t, n) {
        "use strict";
        var r = window.AudioContext || window.webkitAudioContext,
            o = Boolean(r);

        function isSuspended() {
            return o
        }

        function resumeAudio(e) {
            if (r) {
                if (window.chessComAudioContext || (window.chessComAudioContext = function newAudioContext() {
                        try {
                            return new r
                        } catch (e) {
                            return null
                        }
                    }()), !window.chessComAudioContext || !window.chessComAudioContext.resume) return o = !1, void e();
                window.chessComAudioContext.resume().then(function() {
                    o = !1, e()
                })
            }
        }
        var i = 3,
            a = {
                SOUND_SUSPENDED: "sound-suspended",
                SOUND_ENABLED: "sound-enabled"
            },
            s = ["webm", "ogg", "mp3", "wav"],
            c = "default",
            u = "bundles/app/sounds",
            l = ["capture", "castle", "click", "correct", "drawoffer", "game-end", "game-start", "illegal", "incorrect", "move-check", "move-opponent", "move-self", "notify", "premove", "promote", "tenseconds"];

        function postMessage(e) {
            window.postMessage(e, window.location.origin)
        }
        class wrapper_Sound {
            constructor(e, t) {
                this.code = e, this.theme = t, this.tags = []
            }
            load() {
                this.unload(), this.addTag()
            }
            addTag() {
                var e = document.createElement("audio");
                e.setAttribute("preload", "auto"),
                    function getUrls(e, t) {
                        var n = 0 !== e.indexOf("bughouse/") && t ? t : c,
                            r = [];
                        return n === c ? l.includes(e) ? s.forEach(function(t) {
                            r.push("a/b/sounds/".concat(t, "/").concat(e, ".").concat(t))
                        }) : r.push("a/b/sounds/".concat(e, ".mp3")) : r.push("".concat(u, "/_MP3_/").concat(n, "/").concat(e, ".mp3")), r
                    }(this.code, this.theme).forEach(function(t) {
                        var n = t.split(".").pop(),
                            r = "mp3" === n ? "audio/mpeg" : "audio/".concat(n),
                            o = document.createElement("source");
                        o.setAttribute("src", t), o.setAttribute("type", r), e.appendChild(o)
                    }), document.body.appendChild(e), e.pause(), this.tags.push(e)
            }
            unload() {
                for (; this.tags.length;) {
                    var e = this.tags.shift();
                    e.parentNode && e.parentNode.removeChild(e)
                }
            }
            play() {
                var e = this.tags.find(function(e) {
                    return e.paused || e.ended
                });
                if (!e) {
                    if (this.tags.length >= 5) return;
                    return this.addTag(), void this.play()
                }
                var t = e.play();
                t && t.catch(function() {})
            }
        }
        var d = 0,
            f = !1;

        function enableSound() {
            isSuspended() && resumeAudio(function() {
                d = 0, f = !1, postMessage({
                    key: a.SOUND_ENABLED
                }), window.$unbindSound && window.$unbindSound()
            })
        }

        function whenEnabled(e) {
            window.addEventListener("message", function listener(t) {
                t && t.data && t.data.key === a.SOUND_ENABLED && (e(), window.removeEventListener("message", listener))
            })
        }

        function waitUserInteraction() {
            window.$unbindSound || function addDirectiveEventListeners(e, t, n) {
                var r = "$unbind".concat(e);
                t[r] && t[r](), Object.keys(n).forEach(function(e) {
                    t.addEventListener(e, n[e])
                }), t[r] = function() {
                    Object.keys(n).forEach(function(e) {
                        t.removeEventListener(e, n[e]), delete n[e]
                    }), delete t[r]
                }
            }("Sound", window, {
                mousedown: enableSound,
                keydown: enableSound,
                touchstart: enableSound,
                touchend: enableSound
            })
        }

        function unloadSound(e) {
            e.unload()
        }
        n.d(t, "a", function() {
            return ChessSounds_ChessSounds
        });
        var p = ["game-start", "game-end", "capture", "castle", "premove", "move-self", "move-check", "move-opponent", "promote", "notify", "tenseconds", "illegal"];
        class ChessSounds_ChessSounds {
            constructor(e, t) {
                this.sounds = {}, this.load(e, t)
            }
            load(e, t) {
                var n = this,
                    r = t;
                t || (r = p), r.forEach(function(t) {
                    n.sounds[t] = function loadSound(e, t) {
                        var n = new wrapper_Sound(e, t);
                        return isSuspended() ? (waitUserInteraction(), whenEnabled(function() {
                            return n.load()
                        })) : n.load(), n
                    }(t, e)
                })
            }
            play(e) {
                ! function playSound(e) {
                    isSuspended() ? !f && d > i ? (d = 0, f = !0, postMessage({
                        key: a.SOUND_SUSPENDED
                    })) : f || (d++, enableSound(), whenEnabled(function() {
                        return e.play()
                    })) : e.play()
                }(this.sounds[e])
            }
            removeAll() {
                Object.values(this.sounds).forEach(unloadSound), this.sounds = {}
            }
        }
    },
    426: function(e, t, n) {
        "use strict";
        var r = n(394),
            o = n(14),
            i = n(60),
            a = n(321);
        t.a = function(e) {
            var t = e.on,
                n = e.state;
            if (window.Raven) {
                var s = Date.now(),
                    c = [],
                    u = 0;
                Object.keys(o.c).forEach(function(e) {
                    t(e, function(t) {
                        return addChessboardEvent("Emit: ".concat(e), t)
                    })
                }), Object.values(a.a).forEach(function(e) {
                    t(e, function(t) {
                        return addChessboardEvent("DOM Event: ".concat(e), t)
                    })
                }), Object.keys(o.b).forEach(function(e) {
                    t(e, function(t) {
                        return addChessboardEvent("Command: ".concat(e), t)
                    })
                }), Object.values(i.b).forEach(function(e) {
                    t("action-".concat(e), function(t) {
                        return addChessboardEvent("Action: ".concat(e), t)
                    })
                }), t(o.a.HISTORY_CHANGE, function(e) {
                    e.slice(u).forEach(function(e) {
                        return addChessboardEvent("API History Event", e)
                    }), u = e.length - 1
                }), t(o.c.OPTIONS_CHANGED, function() {
                    Object(r.setSentryContext)({
                        chessboardOptions: void 0
                    })
                })
            }

            function addChessboardEvent(e, t) {
                c.unshift({
                    timestamp: Date.now() - s,
                    type: e,
                    data: t
                }), c.length > 50 && c.pop(), Object(r.setSentryContext)({
                    chessboardEvents: c,
                    chessboardState: n
                })
            }
        }
    },
    437: function(e, t, n) {
        "use strict";
        var r = n(24),
            o = n.n(r),
            i = n(22),
            a = n(1),
            s = n(422),
            c = n(423),
            u = n(44),
            l = n(14),
            d = n(60),
            f = n(228);
        t.a = {
            props: {
                boardId: {
                    type: String,
                    default: i.a.getId()
                },
                extensions: {
                    type: Object,
                    default: function _default() {
                        return {}
                    }
                },
                game: {
                    type: Object,
                    required: !0
                },
                options: {
                    type: Object,
                    default: function _default() {
                        return {}
                    }
                },
                resizeModifier: {
                    type: Object,
                    default: function _default() {
                        return {
                            x: 0,
                            y: 0
                        }
                    }
                },
                handleWindowResize: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function data() {
                return {
                    arrows: [],
                    customItems: [],
                    effects: [],
                    initialized: !1,
                    squareSize: 0,
                    moveList: u.default.state,
                    actionsQueue: []
                }
            },
            mounted: function mounted() {
                var e = this;
                this.createChessboard().then(function(t) {
                    var n;
                    e.initialized = !0, Object.defineProperty(e, "chessboard", {
                        value: t,
                        writable: !0,
                        enumerable: !0,
                        configurable: !1
                    }), e.actionsQueue.forEach(function(t) {
                        var n = t.action,
                            r = t.params;
                        e.chessboard.dispatch(n, r)
                    }), e.actionsQueue.length = 0, e.chessboard.dispatch(d.b.UPDATE_GAME_SETTINGS, e.game.settings), e.chessboard.dispatch(d.b.UPDATE_OPTIONS, e.options), e.chessboard.dispatch(d.b.RESIZE_BOARD, e.getBoardParentBoundingRect()), e.chessboard.dispatch(d.b.CHANGE_POSITION, f.b(e.game, e.moveList.lines)), e.squareSize = e.chessboard.state.board.squareSize, e.$emit("chessboard-boardInitialized", !0), e.$emit("chessboard-mounted"), e.chessboard.on(l.c.CLICKED, function(t) {
                        e.$emit("chessboard-clickOnFileRank", {
                            file: t.file,
                            rank: t.rank
                        })
                    }), e.chessboard.on(l.c.ARROW_CLEARED, function(t) {
                        e.$emit("chessboard-clearArrow", t)
                    }), e.chessboard.on(l.c.ARROW_MARKED, function(t) {
                        e.$emit("chessboard-markArrow", t)
                    }), e.chessboard.on(l.c.BOARD_DIMENSIONS_SET, function() {
                        e.squareSize = e.chessboard.state.board.squareSize, e.$emit("chessboard-resized", e.squareSize)
                    }), e.chessboard.on(l.c.BUSY_FLAG, function(t) {
                        e.$emit("chessboard-busyFlag", t)
                    }), e.chessboard.on(l.c.CANCEL_PREMOVES, function() {
                        e.$emit("chessboard-cancelPremoves")
                    }), e.chessboard.on(l.c.CANCEL_GTM, function() {
                        e.$emit("chessboard-cancelGuessTheMove")
                    }), e.chessboard.on(l.c.EFFECT_CLEARED, function(t) {
                        e.$emit("chessboard-clearEffect", t)
                    }), e.chessboard.on(l.c.EFFECT_MARKED, function(t) {
                        e.$emit("chessboard-markEffect", t)
                    }), e.chessboard.on(l.c.MARKINGS_CLEARED, function() {
                        e.$emit("chessboard-clearMarkings")
                    }), e.chessboard.on(l.c.MOVE_MADE, function(t) {
                        e.$emit("chessboard-makeMove", t)
                    }), e.chessboard.on(l.b.SET_ARROWS, function(t) {
                        e.arrows = o()(t)
                    }), e.chessboard.on(l.b.SET_EFFECTS, function(t) {
                        e.effects = o()(t)
                    }), e.chessboard.on(l.b.SET_CUSTOM_ITEMS, function(t) {
                        e.customItems = o()(t)
                    }), e.chessboard.on(l.c.SQUARE_CLEARED, function(t) {
                        e.$emit("chessboard-clearSquare", t)
                    }), e.chessboard.on(l.c.SQUARE_MARKED, function(t) {
                        e.$emit("chessboard-markSquare", t)
                    }), e.chessboard.on(l.c.MOVE_BACKWARD, function() {
                        e.$emit("chessboard-moveBackward")
                    }), e.chessboard.on(l.c.MOVE_FORWARD, function() {
                        e.$emit("chessboard-moveForward")
                    }), e.chessboard.on(l.c.MOVE_TO_END, function() {
                        e.$emit("chessboard-moveToEnd")
                    }), e.chessboard.on(l.c.MOVE_TO_START, function() {
                        e.$emit("chessboard-moveToStart")
                    }), e.chessboard.on(l.c.KEY_PRESS, function(t) {
                        88 === t && e.$emit("chessboard-flipBoard")
                    }), e.options.playSounds && (n = new c.a(e.options.soundTheme)), e.chessboard.on(l.c.OPTIONS_CHANGED, function(e) {
                        void 0 !== e.soundTheme && (n && n.removeAll(), n = new c.a(e.soundTheme))
                    }), e.chessboard.on(l.b.PLAY_SOUND, function(e) {
                        null !== e && n && n.play(e)
                    });
                    var r = e.getDomFormatters();
                    new s.a(e.$el).observe({
                        click: function onClick(t) {
                            return document.activeElement !== e.$el && e.$el.focus(), e.chessboard.dispatch(d.b.CLICK, r.click(t, e.$el, e.chessboard.state))
                        },
                        dragcancel: function onDragCancel() {
                            return e.chessboard.dispatch(d.b.DRAG_CANCEL)
                        },
                        dragmove: function onDragMove(t) {
                            return e.chessboard.dispatch(d.b.DRAG_MOVE, r.dragMove(t, e.$el, e.chessboard.state))
                        },
                        dragstart: function onDragStart(t) {
                            return e.chessboard.dispatch(d.b.DRAG_START, r.dragStart(t, e.$el, e.chessboard.state))
                        },
                        dragstop: function onDragStop(t) {
                            return e.chessboard.dispatch(d.b.DRAG_STOP, r.dragStop(t, e.$el, e.chessboard.state))
                        },
                        pointerdown: function onPointerDown(t) {
                            return e.chessboard.dispatch(d.b.POINTERDOWN, r.pointerdown(t, e.$el, e.chessboard.state))
                        },
                        pointerup: function onPointerUp(t) {
                            return e.chessboard.dispatch(d.b.POINTERUP, r.pointerup(t, e.$el, e.chessboard.state))
                        },
                        rightclick: function onRightClick(t) {
                            return e.chessboard.dispatch(d.b.RIGHT_CLICK, r.rightClick(t, e.$el, e.chessboard.state))
                        }
                    });
                    var i = function disableMovesOnArrowKeys() {
                            return document.removeEventListener("keydown", e.onKeydown)
                        },
                        a = function enableMovesOnArrowKeys() {
                            return document.addEventListener("keydown", e.onKeydown)
                        };
                    window.addEventListener("message", function(e) {
                        var t = e.data;
                        t === l.c.ANOTHER_CHESSBOARD_ONBLUR ? a() : t === l.c.ANOTHER_CHESSBOARD_ONFOCUS && i()
                    }), a(), e.chessboard.on("destroy", i), e.handleWindowResize && (window.addEventListener("resize", e.resizeBoard), e.chessboard.on("destroy", function() {
                        window.removeEventListener("resize", e.resizeBoard)
                    }))
                })
            },
            destroy: function destroy() {
                this.chessboard && this.chessboard.emit("destroy")
            },
            computed: {
                historyLength: function historyLength() {
                    return this.game.history.length
                },
                positionChanged: function positionChanged() {
                    return {
                        fen: this.game.setup.fen,
                        isPremove: this.game.premoves.length,
                        check: this.game.setup.check,
                        checkmate: this.game.setup.checkmate,
                        sideToMove: this.game.setup.sideToMove,
                        playingAs: this.game.setup.playingAs
                    }
                },
                legalMovesChanged: function legalMovesChanged() {
                    return {
                        legalMoves: this.game.setup.legalMoves,
                        legalPremoves: this.game.setup.legalPremoves
                    }
                }
            },
            watch: {
                "game.id": function watchGameId() {
                    this.dispatch(d.b.CHANGE_POSITION, f.b(this.game, this.moveList.lines))
                },
                historyLength: function watchHistoryLength() {
                    this.chessboard && this.chessboard.emit(l.a.HISTORY_CHANGE, this.game.history)
                },
                positionChanged: function watchPositionChanged(e, t) {
                    a.b.getLastItem(this.game.history).type === a.a.LOAD && this.dispatch(d.b.RESET_BOARD_STATE), e.fen === t.fen && e.isPremove === t.isPremove && e.check === t.check && e.checkmate === t.checkmate && e.markingSquares === t.markingSquares && e.markingArrows === t.markingArrows && e.sideToMove === t.sideToMove && e.playingAs === t.playingAs || this.dispatch(d.b.CHANGE_POSITION, f.b(this.game, this.moveList.lines))
                },
                legalMovesChanged: function watchLegalMoves() {
                    this.dispatch(d.b.UPDATE_LEGAL_MOVES, f.b(this.game, this.moveList.lines))
                },
                "game.markings.arrows": function watchGameMarkingsArrows() {
                    this.dispatch(d.b.UPDATE_MARKINGS, f.d(this.game, this.game.markings))
                },
                "game.markings.effects": function watchGameMarkingsEffects() {
                    this.dispatch(d.b.UPDATE_MARKINGS, f.d(this.game, this.game.markings))
                },
                "game.markings.squares": function watchGameMarkingsSquares() {
                    this.dispatch(d.b.UPDATE_MARKINGS, f.d(this.game, this.game.markings))
                },
                "game.markings.blinkingSquares": function watchGameMarkingsBSquares() {
                    this.dispatch(d.b.UPDATE_MARKINGS, f.d(this.game, this.game.markings))
                },
                "options.maxWidth": function watchMaxWidth() {
                    this.dispatch(d.b.SET_BOARD_DIMENSIONS, f.a(this.$el, this.aspectRatio))
                },
                "game.settings": {
                    handler: function watchSettings() {
                        this.dispatch(d.b.UPDATE_GAME_SETTINGS, this.game.settings)
                    },
                    deep: !0
                },
                options: {
                    handler: function watchBoardOptions(e) {
                        this.dispatch(d.b.UPDATE_OPTIONS, e)
                    },
                    deep: !0
                }
            },
            methods: {
                createChessboard: function createChessboard() {
                    throw new Error('You must override the "createChessboard" method in child component!')
                },
                dispatch: function dispatch(e, t) {
                    this.initialized ? this.chessboard.dispatch(e, t) : this.actionsQueue.push({
                        action: e,
                        params: t
                    })
                },
                getDomFormatters: function getDomFormatters() {
                    throw new Error('You must override the "getDomFormatters" method in child component!')
                },
                getBoardParentBoundingRect: function getBoardParentBoundingRect() {
                    var e = this.$el.parentNode.getBoundingClientRect(),
                        t = e.height,
                        n = e.width;
                    return {
                        aspectRatio: this.aspectRatio,
                        width: n - (this.resizeModifier.x || 0),
                        height: t - (this.resizeModifier.y || 0)
                    }
                },
                onKeydown: function onKeydown(e) {
                    var t = this.getDomFormatters();
                    return this.chessboard.dispatch(d.b.KEY_DOWN, t.keydown(e, this.options.enabled))
                },
                resizeBoard: function resizeBoard() {
                    this.$el && this.$el.parentNode && this.chessboard.dispatch(d.b.RESIZE_BOARD, this.getBoardParentBoundingRect())
                }
            }
        }
    },
    438: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function updateBoardClasses(e, t) {
            var n = {
                disabled: !t.enabled,
                flipped: t.flipBoard,
                rounded: t.rounded
            };
            Object.keys(n).forEach(function(t) {
                return n[t] ? e.classList.add(t) : e.classList.remove(t)
            })
        }
    },
    439: function(e, t, n) {
        "use strict";
        var r = n(3),
            o = n.n(r),
            i = n(394),
            a = n(346),
            s = n(60);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        n.d(t, "a", function() {
            return c
        });
        var c = function createCore(e) {
            var t = function eventEmitter() {
                    var e = {};
                    return {
                        emit: function emit(t, n) {
                            (e[t] || []).forEach(function(e) {
                                return e.handler(n)
                            })
                        },
                        fire: function fire(t, n) {
                            return e[t] && e[t].length ? [].concat(e[t]).reduce(function(e, t) {
                                return e.then(function() {
                                    return t.handler(n)
                                })
                            }, Promise.resolve()) : []
                        },
                        on: function on(t, n) {
                            var r = {
                                type: t,
                                handler: n
                            };
                            return e[t] = e[t] || [], e[t].push(r), r
                        },
                        off: function off(t) {
                            var n = e[t.type].findIndex(function(e) {
                                return t.type === e.type && t.handler === e.handler
                            }); - 1 !== n && e[t.type].splice(n, 1)
                        },
                        subscriptions: e
                    }
                }(),
                n = t.emit,
                r = t.off,
                c = t.on,
                u = t.subscriptions,
                l = function _objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ownKeys(n, !0).forEach(function(t) {
                            o()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, a.a),
                d = function dispatch(e, t) {
                    try {
                        return n("action-".concat(e), t), s.a[e]({
                            dispatch: dispatch,
                            emit: n,
                            state: l
                        }, t)
                    } catch (n) {
                        throw Object(i.setSentryContext)({
                            chessboardState: l,
                            chessboardDispatchErrorOn: {
                                data: t,
                                type: e
                            }
                        }), n
                    }
                };
            return Object.keys(e || {}).forEach(function(t) {
                if ("function" == typeof e[t]) return e[t]({
                    dispatch: d,
                    emit: n,
                    off: r,
                    on: c,
                    state: l
                });
                Object.entries(e[t]).forEach(function(e) {
                    return c(e[0], e[1])
                })
            }), {
                dispatch: d,
                emit: n,
                extensions: e,
                off: r,
                on: c,
                state: l,
                subscriptions: u
            }
        }
    },
    44: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "nodeProps", function() {
            return a
        });
        var r = n(24),
            o = n.n(r),
            i = n(2),
            a = ["additionalAnnotation", "annotation", "arrows", "color", "comment", "commentBefore", "fen", "flags", "from", "ids", "lines", "moveNumber", "piece", "previous", "promotion", "san", "time", "to"];
        t.default = function moveList() {
            var e, t = {
                lines: []
            };
            return {
                state: t,
                updateLines: function updateLines(n) {
                    t.lines = o()(n), (n || []).forEach(function(r, o) {
                        e = i.a.isContinuation(n, r.id), t.lines[o] = r.map(function(t) {
                            var n = {};
                            return a.forEach(function(e) {
                                void 0 !== t[e] && (n[e] = t[e])
                            }), e && 0 === t.ids.move && (n.commentBefore = r.initComment), n
                        }), t.lines[o].atMoveNode = r.atMoveNode, t.lines[o].id = r.id, t.lines[o].parentId = r.parentId
                    })
                }
            }
        }()
    },
    45: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n(4),
            o = {
                premove: function premove(e, t) {
                    var n = !1;
                    return e.settings.premoves && !e.settings.analysis && e.jce.premoves.length < 8 && (n = e.jce.premove(t, e.setup.playingAs)), n
                },
                cancelPremoves: function cancelPremoves(e) {
                    return !!e.jce.premoves.length && (e.jce.premoves.length = 0, !0)
                },
                consumePremove: function consumePremove(e) {
                    if (e.jce.premoves.length) {
                        var t = e.jce.premoves.shift();
                        if (r.a.move(e, t.move)) {
                            var n = e.jce.premoves.map(function(e) {
                                return e
                            });
                            e.jce.premoves.length = 0;
                            for (var i = 0; i < n.length; i += 1) {
                                var a = n[i];
                                if (delete a.move.san, !o.premove(e, a.move)) break
                            }
                            return !0
                        }
                    }
                    return !1
                }
            }
    },
    451: function(e, t, n) {},
    452: function(e, t, n) {},
    453: function(e, t, n) {
        e.exports = {
            effect: "marked-effect-effect"
        }
    },
    482: function(e, t, n) {
        "use strict";
        var r = n(453),
            o = n.n(r);
        t.default = o.a
    },
    485: function(e, t, n) {
        "use strict";
        var r = n(3),
            o = n.n(r),
            i = n(97);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var a = "top",
            s = "left",
            c = {
                props: {
                    additionalStyles: {
                        type: Object,
                        default: function _default() {
                            return {}
                        }
                    },
                    files: {
                        type: Number,
                        default: i.a.defaultBoardOptions.files
                    },
                    flipped: {
                        type: Boolean,
                        default: !1
                    },
                    square: {
                        type: Object,
                        required: !0
                    },
                    ranks: {
                        type: Number,
                        default: i.a.defaultBoardOptions.ranks
                    },
                    position: {
                        type: Object,
                        default: function _default() {
                            return {
                                y: a,
                                x: s
                            }
                        }
                    },
                    squareSize: {
                        type: Number,
                        required: !0
                    },
                    template: {
                        type: String,
                        required: !0
                    }
                },
                computed: {
                    effectStyles: function effectStyles() {
                        return function _objectSpread(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                                    o()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, {
                            transform: "translate3d(".concat(this.transform.x, "px, ").concat(this.transform.y, "px, 0)"),
                            width: "".concat(this.size, "px"),
                            height: "".concat(this.size, "px")
                        }, {}, this.additionalStyles)
                    },
                    size: function size() {
                        return .4 * this.squareSize
                    },
                    shift: function shift() {
                        var e = this.position,
                            t = e.x,
                            n = e.y;
                        return {
                            x: t === s ? -this.size / 2.5 : this.squareSize - this.size / 1.5,
                            y: n === a ? -this.size / 2.5 : this.squareSize - this.size / 1.5
                        }
                    },
                    transform: function transform() {
                        var e = this.files,
                            t = this.ranks,
                            n = this.squareSize,
                            r = this.square;
                        return this.flipped && (r = {
                            file: e + 1 - r.file,
                            rank: t + 1 - r.rank
                        }), {
                            x: (r.file - 1) * n + this.shift.x,
                            y: (t - r.rank) * n + this.shift.y
                        }
                    }
                }
            },
            u = n(482),
            l = n(5);
        var d = Object(l.a)(c, function() {
            var e = this.$createElement;
            return (this._self._c || e)("div", {
                class: this.$style.effect,
                style: this.effectStyles,
                domProps: {
                    innerHTML: this._s(this.template)
                }
            })
        }, [], !1, function injectStyles(e) {
            this.$style = u.default.locals || u.default
        }, null, null);
        t.a = d.exports
    },
    486: function(e, t, n) {
        "use strict";
        var r = n(97),
            o = {
                props: {
                    boardStyle: {
                        type: String,
                        default: r.a.defaultBoardOptions.boardStyle
                    },
                    colors: {
                        type: Object,
                        required: !0
                    },
                    flipped: {
                        type: Boolean,
                        default: !1
                    },
                    position: {
                        type: String,
                        default: null
                    },
                    size: {
                        type: Number,
                        required: !0
                    }
                },
                methods: {
                    colorForLetter: function colorForLetter(e) {
                        return e % 2 == 0 ? this.colors.white : this.colors.black
                    },
                    colorForNumber: function colorForNumber(e) {
                        return e % 2 == 0 ? this.colors.black : this.colors.white
                    }
                },
                computed: {
                    className: function className() {
                        return "inside" === this.position ? "inside-coords chess-color-scheme-".concat(this.boardStyle) : ""
                    },
                    fontSize: function fontSize() {
                        return "outside" === this.position ? "".concat(Math.min(this.size / 4.1, 20), "px") : "".concat(this.size / 4.5, "px")
                    },
                    letters: function letters() {
                        var e = ["a", "b", "c", "d", "e", "f", "g", "h"];
                        return this.flipped ? e.reverse() : e
                    },
                    numbers: function numbers() {
                        var e = ["1", "2", "3", "4", "5", "6", "7", "8"];
                        return this.flipped ? e : e.reverse()
                    },
                    outsideNumbersFontWidth: function outsideNumbersFontWidth() {
                        return "".concat(Math.min(this.size / 6.15, 20), "px")
                    }
                }
            },
            i = (n(606), n(5)),
            a = Object(i.a)(o, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.position ? n("div", {
                    staticClass: "coordinates",
                    class: [e.position, e.className]
                }, [e._l(e.numbers, function(t, r) {
                    return n("div", {
                        staticClass: "number",
                        class: [r % 2 == 0 ? "coords-light" : "coords-dark"],
                        style: {
                            color: e.colorForNumber(r),
                            fontSize: e.fontSize,
                            transform: "inside" === e.position ? "translate(0, " + 100 * r + "%)" : "translate(-145%, " + 100 * r + "%)",
                            width: "inside" === e.position ? "" : e.outsideNumbersFontWidth
                        }
                    }, [e._v(e._s(t))])
                }), e._v(" "), e._l(e.letters, function(t, r) {
                    return n("div", {
                        staticClass: "letter",
                        class: [r % 2 == 0 ? "coords-dark" : "coords-light"],
                        style: {
                            color: e.colorForLetter(r),
                            fontSize: e.fontSize,
                            transform: "inside" === e.position ? "translate(" + 100 * r + "%, 0)" : "translate(" + 100 * r + "%, 110%)"
                        }
                    }, [e._v("\n    " + e._s(t) + "\n  ")])
                })], 2) : e._e()
            }, [], !1, null, null, null);
        t.a = a.exports
    },
    487: function(e, t, n) {
        "use strict";
        var r = n(3),
            o = n.n(r),
            i = n(97);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var a = {
                props: {
                    additionalStyles: {
                        type: Object,
                        default: function _default() {
                            return {}
                        }
                    },
                    color: {
                        type: String,
                        default: i.a.defaultBoardOptions.arrowColor
                    },
                    files: {
                        type: Number,
                        default: i.a.defaultBoardOptions.files
                    },
                    flipped: {
                        type: Boolean,
                        default: !1
                    },
                    fromFileRank: {
                        type: Object,
                        required: !0
                    },
                    ranks: {
                        type: Number,
                        default: i.a.defaultBoardOptions.ranks
                    },
                    squareSize: {
                        type: Number,
                        required: !0
                    },
                    toFileRank: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    arrowStyles: function arrowStyles() {
                        var e = this.transform,
                            t = e.origin,
                            n = e.position,
                            r = e.rotation,
                            i = e.scale;
                        return function _objectSpread(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                                    o()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, {
                            transform: "translate(".concat(n.x, "px, ").concat(n.y, "px)\n                    rotate(").concat(r, "deg)\n                    scale(").concat(i.x, ", ").concat(i.y, ")"),
                            transformOrigin: "".concat(t.x, "% ").concat(t.y, "%")
                        }, {}, this.additionalStyles)
                    },
                    isStraight: function isStraight() {
                        var e = this.fromFileRank,
                            t = this.toFileRank;
                        return e.file === t.file || e.rank === t.rank || Math.abs(e.file - t.file) === Math.abs(e.rank - t.rank)
                    },
                    arrowPoints: function arrowPoints() {
                        return this.isStraight ? "\n            ".concat(39, " ").concat(87, ",\n            ").concat(61, " ").concat(87, ",\n            ").concat(61, " ").concat(113 + this.transform.length, ",\n            ").concat(76, " ").concat(113 + this.transform.length, ",\n            50 ").concat(150 + this.transform.length, ",\n            ").concat(24, " ").concat(113 + this.transform.length, ",\n            ").concat(39, " ").concat(113 + this.transform.length, "\n          ") : "\n          ".concat(87, " ").concat(39, ",\n          ").concat(261, " ").concat(39, ",\n          ").concat(261, " ").concat(113, ",\n          ").concat(276, " ").concat(113, ",\n          ", 250, " ").concat(150, ",\n          ").concat(224, " ").concat(113, ",\n          ").concat(239, " ").concat(113, ",\n          ").concat(239, " ").concat(61, ",\n          ").concat(87, " ").concat(61, "\n        ")
                    },
                    transform: function transform() {
                        var e = this.files,
                            t = this.ranks,
                            n = this.squareSize,
                            r = this.fromFileRank,
                            o = this.toFileRank;
                        this.flipped && (r = {
                            file: e + 1 - r.file,
                            rank: t + 1 - r.rank
                        }, o = {
                            file: e + 1 - o.file,
                            rank: t + 1 - o.rank
                        });
                        var transform = {
                            length: 0,
                            baseOffset: 0,
                            width: this.isStraight ? n : 3 * n,
                            height: 2 * n,
                            viewBox: {
                                width: this.isStraight ? 100 : 300,
                                height: 200
                            },
                            origin: {
                                x: 0,
                                y: 0
                            },
                            position: {
                                x: 0,
                                y: 0
                            },
                            rotation: 0,
                            scale: {
                                x: 1,
                                y: 1
                            }
                        };
                        if (this.isStraight) {
                            var i = Math.abs(r.file - o.file),
                                a = Math.abs(r.rank - o.rank);
                            if (r.file === o.file) {
                                var s = a + 1;
                                transform.length = 100 * (a - 1), transform.height = n * s, transform.viewBox.height = 100 * s, transform.origin.x = 50, transform.position.x = (r.file - 1) * n, r.rank < o.rank ? (transform.rotation = 180, transform.position.y = (t + 1 - r.rank) * n) : transform.position.y = (t - r.rank) * n
                            }
                            if (r.rank === o.rank) {
                                var c = i + 1;
                                transform.length = 100 * (i - 1), transform.height = n * c, transform.viewBox.height = 100 * c, transform.position.x = (r.file - 1) * n, transform.position.y = (t + 1 - r.rank) * n, r.file < o.file ? transform.rotation = -90 : (transform.rotation = 90, transform.origin.x = 100)
                            }
                            if (Math.abs(r.file - o.file) === Math.abs(r.rank - o.rank)) {
                                var u = a + 1,
                                    l = Math.sqrt(2 * Math.pow(n, 2));
                                transform.length = 141.42 * a - 100, transform.baseOffset = 20.71, transform.height = l * u, transform.viewBox.height = 141.42 * u, transform.origin = {
                                    x: 50,
                                    y: 50
                                }, r.file < o.file ? (transform.position.x = (r.file - 1 + a / 2) * n, r.rank < o.rank ? (transform.rotation = -135, transform.position.y = (t - o.rank + u / 2) * n - transform.height / 2) : (transform.rotation = -45, transform.position.y = (t - r.rank + u / 2) * n - transform.height / 2)) : (transform.position.x = (o.file - 1 + a / 2) * n, r.rank < o.rank ? (transform.rotation = 135, transform.position.y = (t - o.rank + u / 2) * n - transform.height / 2) : (transform.rotation = 45, transform.position.y = (t - r.rank + u / 2) * n - transform.height / 2))
                            }
                        } else transform.origin.y = 50, 2 === Math.abs(r.rank - o.rank) ? (r.rank < o.rank ? (transform.rotation = -90, transform.position.y = (t - r.rank) * n) : (transform.rotation = 90, transform.position.y = (t - 1 - r.rank) * n), r.file < o.file ? (transform.position.x = r.file * n, r.rank > o.rank && (transform.scale.y = -1)) : (transform.position.x = (r.file - 1) * n, r.rank < o.rank && (transform.scale.y = -1))) : r.file < o.file ? (transform.position.x = (r.file - 1) * n, r.rank < o.rank ? (transform.position.y = (t - o.rank) * n, transform.scale.y = -1) : transform.position.y = (t - r.rank) * n) : (transform.position.x = r.file * n, transform.scale.x = -1, r.rank < o.rank ? (transform.position.y = (t - 1 - r.rank) * n, transform.scale.y = -1) : transform.position.y = (t - r.rank) * n);
                        return transform
                    }
                }
            },
            s = (n(607), n(5)),
            c = Object(s.a)(a, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("svg", {
                    staticClass: "arrow-container",
                    style: e.arrowStyles,
                    attrs: {
                        version: "1.1",
                        baseProfile: "full",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: e.transform.width + "px",
                        height: e.transform.height + "px",
                        viewBox: "0 0 " + e.transform.viewBox.width + " " + e.transform.viewBox.height
                    }
                }, [n("polygon", {
                    staticClass: "arrow",
                    style: {
                        fill: e.color
                    },
                    attrs: {
                        points: e.arrowPoints,
                        transform: "translate(0, " + e.transform.baseOffset + ")"
                    }
                })])
            }, [], !1, null, null, null);
        t.a = c.exports
    },
    5: function(e, t, n) {
        "use strict";

        function normalizeComponent(e, t, n, r, o, i, a, s) {
            var c, u = "function" == typeof e ? e.options : e;
            if (t && (u.render = t, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), i && (u._scopeId = "data-v-" + i), a ? (c = function(e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
                }, u._ssrRegister = c) : o && (c = s ? function() {
                    o.call(this, this.$root.$options.shadowRoot)
                } : o), c)
                if (u.functional) {
                    u._injectStyles = c;
                    var l = u.render;
                    u.render = function renderWithStyleInjection(e, t) {
                        return c.call(t), l(e, t)
                    }
                } else {
                    var d = u.beforeCreate;
                    u.beforeCreate = d ? [].concat(d, c) : [c]
                }
            return {
                exports: e,
                options: u
            }
        }
        n.d(t, "a", function() {
            return normalizeComponent
        })
    },
    50: function(e, t, n) {
        "use strict";
        var r = n(3),
            o = n.n(r),
            i = n(22);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var a = n(4),
            s = n(16),
            c = n(1),
            u = n(6),
            l = n(21),
            d = n(2);

        function create_variation_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var f = function createVariation(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = function create_variation_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? create_variation_ownKeys(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : create_variation_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, e.tree.selected);
                if (!e.settings.variations) return null;
                void 0 !== n.line && void 0 !== n.move ? a.a.selectNode(e, n) : n = e.tree.selected;
                var i = d.a.getNode(e.jce._lines(), {
                    line: n.line,
                    move: n.move
                }).san;
                return a.a.createVariation(e), t && a.a.move(e, i), c.b.add(e.history, c.a.JUMP_TO_POSITION, {
                    from: r,
                    to: n
                }), u.a.updateState(e)
            },
            p = function shouldNotMutateLine(e) {
                return -1 !== e.tree.selected.move && e.settings.mainLineIsImmutable && d.a.isMainLine(e.tree.selected.line)
            },
            m = function isValidMove(e, t) {
                return null !== l.default.getPositionDetails({
                    fen: a.a.getFen(e),
                    variant: a.a.getHeaders(e).Variant || "Chess"
                }, t)
            },
            g = function makeMove(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = a.a.getJCEMove(e, t);
                if (null === r) return c.b.add(e.history, c.a.ILLEGAL_MOVE), e;
                var o = e.settings.analysis || n;
                if (!d.a.isHead(e.jce._lines(), e.tree.selected)) {
                    if (!o) return Object(s.a)(e, d.a.getHeadIds(e.jce._lines(), e.tree.selected.line));
                    var i = d.a.getNextMatchingNode(e.jce._lines(), e.tree.selected, r);
                    if (i) return Object(s.a)(e, i.ids);
                    if (m(e, r)) {
                        if (c.b.add(e.history, c.a.TREE_AMENDED), e.settings.variations) return a.a.selectNode(e, {
                            line: e.tree.selected.line,
                            move: e.tree.selected.move + 1
                        }), a.a.createVariation(e), u.a.updateState(e), makeMove(e, r);
                        if (!e.settings.mainLineIsImmutable) return d.a.prune(e.jce._lines(), e.tree.selected), makeMove(e, r)
                    }
                    return c.b.add(e.history, c.a.ILLEGAL_MOVE), e
                }
                if (!o && !a.a.isUserTurn(e)) return c.b.add(e.history, c.a.ILLEGAL_MOVE), e;
                if (o && e.settings.variations && p(e) && m(e, r)) {
                    var l = d.a.getNextMatchingNode(e.jce._lines(), e.tree.selected, r);
                    return l ? Object(s.a)(e, l.ids) : (f(e, !0), u.a.updateState(e), makeMove(e, r))
                }
                return !p(e) && a.a.move(e, r, e.settings.rules) ? (c.b.add(e.history, c.a.MAKE_MOVE, r), u.a.updateState(e)) : (c.b.add(e.history, c.a.ILLEGAL_MOVE), e)
            },
            h = function setPlayingAs(e, t) {
                return [1, 2].indexOf(t) >= 0 && (e.setup.playingAs = t), e
            },
            v = n(104),
            b = function changeSettings(e, t) {
                var n = Object.prototype.hasOwnProperty.call(t, "premoves") && e.settings.premoves !== t.premoves;
                return e.settings = Object.assign(e.settings, t), e.settings.premoves || Object(v.a)(e), c.b.add(e.history, c.a.SETTINGS_CHANGE), n && u.a.updateState(e), e
            },
            E = function loadFromFen(e, t) {
                return t ? (d.a.clearAllMarkings(e.jce._lines()), a.a.load(e, t), c.b.add(e.history, c.a.LOAD), u.a.updateState(e)) : null
            },
            O = function clearMarkings(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = d.a.getNode(e.jce._lines(), t) || d.a.getNode(e.jce._lines(), a.a.getSelectedIds(e)) || e.tree.initialMarkings;
                return (r.arrows && r.arrows.length || r.squares && r.squares.length || r.effects && r.effects.length) && (r.arrows = [], r.squares = [], r.effects = [], n && (u.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE))), e
            },
            _ = function convertFileToInteger() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").charCodeAt(0) - 97 + 1
            },
            y = function createGame() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {
                        id: i.a.getId(),
                        variant: e.variant || "chess",
                        settings: Object.assign(u.a.getInitialSettings(), e.settings),
                        setup: Object.assign(u.a.getInitialSetup(), e.setup),
                        tree: Object.assign(u.a.getInitialTree(), e.tree),
                        history: c.b.getInitialHistory(),
                        markings: Object.assign(u.a.getInitialMarkings(), e.markings),
                        premoves: []
                    };
                return h(t, e.player || 1), Object.defineProperty(t, "jce", {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1,
                    value: a.a.createJce(e)
                }), a.a.updateIdsFromJce(t), c.b.add(t.history, c.a.INIT), t.jce.siblingGame && !t.sibling && (t.sibling = {
                    id: i.a.getId(),
                    variant: t.variant || "chess",
                    sibling: t,
                    settings: t.settings,
                    setup: u.a.getInitialSetup(),
                    tree: u.a.getInitialTree(),
                    history: c.b.getInitialHistory(),
                    markings: Object.assign(u.a.getInitialMarkings(), e.markings),
                    premoves: []
                }, Object.defineProperty(t.sibling, "jce", {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1,
                    value: a.a.createJce({
                        game: t.jce.siblingGame
                    })
                }), a.a.updateIdsFromJce(t.sibling)), u.a.updateState(t), t
            },
            S = n(32);

        function select_line_start_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var P = function selectLineStart(e) {
                var t = d.a.getSelectedLine(e),
                    n = 0,
                    r = function select_line_start_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? select_line_start_ownKeys(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : select_line_start_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, e.tree.selected);
                0 === e.tree.selected.move && void 0 !== t.parentId ? (a.a.selectLine(e, t.parentId), t = d.a.getSelectedLine(e)) : d.a.isMainLine(t.id) && (n = -1);
                var i = {
                    line: t.id,
                    move: n
                };
                return a.a.selectNode(e, i), c.b.add(e.history, c.a.JUMP_TO_POSITION, {
                    from: r,
                    to: i
                }), u.a.updateState(e)
            },
            k = function deleteNode(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (d.a.findNode(e.jce._lines(), e.tree.selected), Object.assign(e.tree.selected, t));
                return n.line > 0 && (n.move <= 0 || d.a.isFirstVisibleNode(e.jce._lines(), n)) && (n.move = -1), e.jce.deletePosition(n.move, n.line), c.b.add(e.history, c.a.TREE_CHANGE), u.a.updateState(e), e
            },
            C = function deleteRemainingNodes(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = Object.assign(e.tree.selected, t);
                return k(e, {
                    move: n.move + 1,
                    line: n.line
                })
            },
            A = function getTcn(e, t) {
                var r = e.jce && e.jce._lines() || n(44).default.state.lines;
                return l.default.encodeTCN(d.a.getLine(r, t) || r[0])
            },
            w = n(106),
            T = n(57),
            M = function loadFromTcn(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a.getInitialFen(),
                    r = arguments.length > 3 ? arguments[3] : void 0;
                E(e, n);
                var o = l.default.decodeTCN(t);
                return o ? (o.forEach(function(t) {
                    "Crazyhouse" !== e.variant && "Bughouse" !== e.variant || !t.drop || Object(T.a)(e, e.setup.sideToMove, t.drop), g(e, t, !0)
                }), u.a.updateState(e), r ? Object(s.a)(e, e.tree.selected, -1) : (c.b.add(e.history, c.a.LOAD), e)) : null
            },
            N = function markArrow(e, t, n) {
                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    o = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), a.a.getSelectedIds(e)) || e.tree.initialMarkings;
                return o.arrows || (o.arrows = []), o.arrows.find(function(e) {
                    return a.a.isFileRankEqual(e.fromFileRank, t.fromFileRank) && a.a.isFileRankEqual(e.toFileRank, t.toFileRank)
                }) || (o.arrows.push(t), r && (u.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE))), e
            },
            D = function markEffect(e) {
                var t = e.game,
                    n = e.effect,
                    r = e.ids,
                    o = e.persist,
                    i = e.updateState,
                    s = void 0 === i || i;
                if (o) return t.setup.effects = n ? [n] : null, u.a.updateState(t), t;
                var l = d.a.getNode(t.jce._lines(), r) || d.a.getNode(t.jce._lines(), a.a.getSelectedIds(t)) || t.tree.initialMarkings;
                return l.effects || (l.effects = []), l.effects.find(function(e) {
                    return a.a.isFileRankEqual(e.square, n.square)
                }) || (l.effects.push(n), s && (u.a.updateState(t), c.b.add(t.history, c.a.TREE_CHANGE))), t
            },
            j = function markSquare(e, t, n) {
                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    o = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), a.a.getSelectedIds(e)) || e.tree.initialMarkings;
                return o.squares || (o.squares = []), o.squares.find(function(e) {
                    return a.a.isFileRankEqual(e, t)
                }) || (o.squares.push(t), r && (u.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE))), e
            },
            I = function fixTcn(e, t) {
                var n = y({
                    variant: e.variant,
                    fen: i.a.getFirstFen(e)
                });
                return M(n, t, n.setup.fen), A(n)
            };

        function merge_tcn_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function select_line_end_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var R = function selectLineEnd(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.tree.selected.line,
                n = d.a.getLine(e.jce._lines(), t).length - 1,
                r = function select_line_end_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? select_line_end_ownKeys(n, !0).forEach(function(t) {
                            o()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : select_line_end_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, e.tree.selected);
            if (e.tree.selected.move !== n || t !== e.tree.selected.line) {
                var i = {
                    line: t,
                    move: n
                };
                return a.a.selectNode(e, i), c.b.add(e.history, c.a.JUMP_TO_POSITION, {
                    from: r,
                    to: i
                }), u.a.updateState(e)
            }
            return e
        };

        function reset_to_main_line_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        n.d(t, "a", function() {
            return L
        });
        var L = {
            addBlinkingSquare: function addBlinkingSquare(e, t, n, r) {
                var a = i.a.getId(),
                    s = function _objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ownKeys(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        id: a,
                        interval: t,
                        times: n
                    }, r);
                return e.markings.blinkingSquares.push(s), setTimeout(function() {
                    var t = e.markings.blinkingSquares.findIndex(function(e) {
                        return e.id === a
                    });
                    e.markings.blinkingSquares.splice(t, 1)
                }, 0), e
            },
            addVariant: function addVariant(e, t) {
                return t ? (Object(s.a)(e, {
                    line: 0,
                    move: 0
                }), t.match(/.{2}/g).forEach(function(t) {
                    return g(e, {
                        tcn: t
                    }, !0)
                }), e) : e
            },
            canMoveBackward: function canMoveBackward(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                if (0 === e.tree.selected.line && e.tree.selected.move - t < -1) return !1;
                var r = e.tree.lines || n(44).default.state.lines;
                return null !== d.a.findNode(r, e.tree.selected, -1 * t, !1)
            },
            canMoveForward: function canMoveForward(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    r = e.tree.lines || n(44).default.state.lines;
                return null !== d.a.findNode(r, e.tree.selected, t, !1)
            },
            changeSettings: b,
            clearAnalysis: function clearAnalysis(e) {
                var t = L.resetToMainLine(e),
                    n = d.a.clearAnalysis(t.jce._lines());
                return t.jce.saveLines(n), c.b.add(t.history, c.a.TREE_CHANGE), u.a.updateState(e)
            },
            clearArrow: function clearArrow(e, t, n) {
                var r = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), a.a.getSelectedIds(e)) || e.tree.initialMarkings;
                r.arrows || (r.arrows = []);
                var o = r.arrows.findIndex(function(e) {
                    return a.a.isFileRankEqual(e.fromFileRank, t.fromFileRank) && a.a.isFileRankEqual(e.toFileRank, t.toFileRank)
                });
                return -1 !== o && (r.arrows.splice(o, 1), u.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE)), e
            },
            clearBlinkingSquare: function clearBlinkingSquare(e, t) {
                return e.markings.blinkingSquares[t] && delete e.markings.blinkingSquares[t], e
            },
            clearBoard: function clearBoard(e) {
                return b(e, {
                    rules: !1
                }), E(e, "8/8/8/8/8/8/8/8 w - - 0 1"), c.b.add(e.history, c.a.LOAD), u.a.updateState(e)
            },
            clearEffect: function clearEffect(e, t, n) {
                var r = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), a.a.getSelectedIds(e)) || e.tree.initialMarkings;
                r.effects || (r.effects = []);
                var o = r.effects.findIndex(function(e) {
                    return a.a.isFileRankEqual(e.square, t.square)
                });
                return -1 !== o && (r.effects.splice(o, 1), u.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE)), e
            },
            clearMarkedSquare: function clearMarkedSquare(e, t, n) {
                var r = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), a.a.getSelectedIds(e)) || e.tree.initialMarkings;
                r.squares || (r.squares = []);
                var o = r.squares.findIndex(function(e) {
                    return a.a.isFileRankEqual(e, t)
                });
                return -1 !== o && (r.squares.splice(o, 1), u.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE)), e
            },
            clearMarkings: O,
            clearNodes: function clearNodes(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.jce._lines();
                if (!n) return e;
                if (void 0 === t.line && void 0 === t.move) return n.forEach(function(e) {
                    e.forEach(function(e, t) {
                        return d.a.clearNode(n, {
                            line: e.ids.line,
                            move: t
                        })
                    })
                }), c.b.add(e.history, c.a.TREE_CHANGE), e;
                if (void 0 === t.move) {
                    var r = d.a.getLine(e.jce._lines(), t.line);
                    return r ? (r.forEach(function(e, t) {
                        return d.a.clearNode(n, {
                            line: r.id,
                            move: t
                        })
                    }), c.b.add(e.history, c.a.TREE_CHANGE), e) : e
                }
                return d.a.getNode(n, t) ? (d.a.clearNode(n, t), c.b.add(e.history, c.a.TREE_CHANGE), e) : e
            },
            convertLanToFileRanks: function convertLanToFileRanks() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return {
                    fromFileRank: {
                        file: _(e[0]),
                        rank: Number(e[1])
                    },
                    toFileRank: {
                        file: _(e[2]),
                        rank: Number(e[3])
                    }
                }
            },
            createGame: y,
            createVariation: f,
            deleteLine: function deleteLine(e, t) {
                return e.jce.deletePosition(-1, t) ? (c.b.add(e.history, c.a.TREE_CHANGE), u.a.updateState(e), e) : null
            },
            deleteNode: k,
            deleteRemainingNodes: C,
            getCurrentFullLine: function getCurrentFullLine(e) {
                var t = e.jce._history().length - e.jce.ids().move - 1,
                    n = e.jce.history(!0);
                return 0 === t ? n : n.slice(0, -t)
            },
            getPgn: function getPgn(e, t) {
                return a.a.getPgn(e, t)
            },
            getPgnHeaders: function getPgnHeaders(e) {
                return a.a.getHeaders(e)
            },
            getSelectedNode: function getSelectedNode(e) {
                return d.a.getSelectedNode(e)
            },
            getTcn: A,
            isMoveLegal: function isMoveLegal(e, t) {
                var n = !1;
                if (!e.settings.rules) return !0;
                for (var r = 0; r < e.setup.legalMoves.length; r++) {
                    var o = e.setup.legalMoves[r];
                    if (o.from === t.from && o.to === t.to) {
                        n = !0;
                        break
                    }
                }
                return n
            },
            loadFromFen: E,
            loadFromLan: function loadFromLan(e, t, n, r) {
                var o = t.map(function(e) {
                    return l.default.encodeTCN({
                        from: e.slice(0, 2),
                        to: e.slice(2, 4),
                        promotion: e.slice(4, 5) || void 0
                    })
                }).join("");
                return L.loadFromTcn(e, o, n, r)
            },
            loadFromPgn: function loadFromPgn(e, t, n) {
                return t ? (a.a.loadPgn(e, Object(w.b)(t)), u.a.updateState(e), n ? Object(s.a)(e, e.tree.selected, n) : (c.b.add(e.history, c.a.LOAD), e)) : e
            },
            loadFromSanMoves: function loadFromSanMoves(e, t, n, r) {
                return t && t.length ? (n && a.a.load(e, n), t.forEach(function(t) {
                    return g(e, {
                        san: t
                    }, !0)
                }), u.a.updateState(e), r ? Object(s.a)(e, e.tree.selected, -1) : (c.b.add(e.history, c.a.LOAD), e)) : null
            },
            loadFromTcn: M,
            makeMove: g,
            makeOpponentMove: function makeOpponentMove(e, t) {
                return h(e, 3 - e.setup.playingAs), g(e, t), h(e, 3 - e.setup.playingAs), u.a.updateState(e)
            },
            markArrow: N,
            markEffect: D,
            markSquare: j,
            mergeTcn: function mergeTcn(e, t, n) {
                if ("string" != typeof t || e.settings.mainLineIsImmutable) return null;
                if ("" === t) return P(e), M(e, "", e.setup.fen);
                var r = function merge_tcn_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? merge_tcn_ownKeys(n, !0).forEach(function(t) {
                                o()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : merge_tcn_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, e.tree.selected),
                    i = A(e),
                    a = t,
                    u = e.history.length - 1;
                if (!(i.includes(a) || a.includes(i) || (i = I(e, i), a = I(e, a), i.includes(a) || a.includes(i)))) return M(e, a);
                if (a.length < i.length) Object(s.a)(e, {
                    line: 0,
                    move: a.length / 2 - 1
                }), C(e);
                else {
                    if (!(a.length > i.length)) return e;
                    var f;
                    if (Object(s.a)(e, {
                            line: 0,
                            move: i.length / 2 - 1
                        }), a.slice(i.length).match(/.{2}/g).forEach(function(t) {
                            f = l.default.decodeTCN(t)[0], "Crazyhouse" !== e.variant && "Bughouse" !== e.variant || !f.drop || Object(T.a)(e, e.setup.sideToMove, f.drop), g(e, f, !0)
                        }), e.history.slice(u + 1).some(function(e) {
                            return e && e.type === c.a.ILLEGAL_MOVE
                        })) return Object(s.a)(e, r), C(e), e.history = e.history.slice(0, u), mergeTcn(e, I(e, a))
                }
                if (n) return Object(s.a)(e, e.tree.selected, -1);
                if (r.line !== e.tree.selected.line || r.move !== e.tree.selected.move) {
                    var p = d.a.getNode(e.jce._lines(), r) ? r : e.tree.selected;
                    return Object(s.a)(e, p)
                }
                return e
            },
            moveBackward: function moveBackward(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return Object(s.a)(e, e.tree.selected, -1 * t, !1)
            },
            moveForward: function moveForward(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return Object(s.a)(e, e.tree.selected, t, !1)
            },
            moveToEnd: function moveToEnd(e) {
                return d.a.isMainLine(e.tree.selected.line) || a.a.selectLine(e, 0), R(e), u.a.updateState(e)
            },
            moveToStart: function moveToStart(e) {
                return d.a.isMainLine(e.tree.selected.line) || a.a.selectLine(e, 0), P(e), u.a.updateState(e)
            },
            moveVariation: function moveVariation(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = d.a.getLine(e.jce._lines(), t);
                if (r && void 0 !== r.parentId) {
                    var o = d.a.getLine(e.jce._lines(), r.parentId)[r.atMoveNode],
                        i = -1;
                    if (o.lines.forEach(function(e, n) {
                            t === e && (i = n)
                        }), i > -1) {
                        var a = null;
                        n && i > 0 ? (a = o.lines[i - 1], o.lines[i - 1] = t, o.lines[i] = a) : !n && i < o.lines.length - 1 && (a = o.lines[i + 1], o.lines[i + 1] = t, o.lines[i] = a)
                    }
                    c.b.add(e.history, c.a.TREE_CHANGE)
                }
                return e
            },
            promoteVariation: function promoteVariation(e, t) {
                var n = t;
                void 0 === n && (n = e.tree.selected);
                var r = d.a.getLine(e.jce._lines(), n.line);
                if (r && void 0 !== r.parentId)
                    for (var o = n.move, i = function _loop() {
                            if (e.settings.mainLineIsImmutable && d.a.isMainLine(r.parentId)) return "break";
                            var t = d.a.getLine(e.jce._lines(), r.parentId),
                                n = d.a.isContinuation(e.jce._lines(), r.id) ? 1 : 0,
                                i = r[n] && r[n].commentBefore,
                                s = r.atMoveNode,
                                c = r.slice(0);
                            r.length = 0, i && t[s - 1] && (t[s - 1].comment ? (" " !== t[s - 1].comment.substr(-1) && (t[s - 1].comment += " "), t[s - 1].comment += i) : t[s - 1].comment = i, delete c[n].commentBefore, delete r.initComment);
                            var u = t.slice(s),
                                l = u[0].lines.map(function(e) {
                                    return e
                                });
                            delete u[0].lines, u.forEach(function(t, n) {
                                t.lines && t.lines.length && t.lines.forEach(function(t) {
                                    var o = d.a.getLine(e.jce._lines(), t);
                                    o.parentId = r.id, o.atMoveNode = n
                                })
                            }), t.length = s, c.forEach(function(n) {
                                n.ids = {
                                    line: t.id,
                                    move: t.length
                                }, n.lines && n.lines.length && n.lines.forEach(function(n) {
                                    var r = d.a.getLine(e.jce._lines(), n);
                                    r.parentId = t.id, r.atMoveNode = t.length
                                }), t.push(n)
                            }), u.forEach(function(e, t) {
                                e.ids = {
                                    line: r.id,
                                    move: t
                                }, r.push(e)
                            }), t[s].lines = l, t[s].lines.forEach(function(n) {
                                d.a.getLine(e.jce._lines(), n).parentId = t.id
                            }), a.a.selectNode(e, {
                                line: t.id,
                                move: s + o
                            }), r = d.a.getLine(e.jce._lines(), r.parentId), o = s + o
                        }; void 0 !== r.parentId && "break" !== i(););
                return e.jce.saveLines(e.tree.lines), c.b.add(e.history, c.a.TREE_CHANGE), u.a.updateState(e)
            },
            resetToMainLine: function resetToMainLine(e) {
                var t = function reset_to_main_line_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? reset_to_main_line_ownKeys(n, !0).forEach(function(t) {
                            o()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : reset_to_main_line_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, e.tree.selected);
                d.a.isMainLine(e.tree.selected.line) || a.a.selectLine(e, 0), R(e);
                var n = e.tree.selected;
                return e.tree.lines.length = 1, e.tree.lines = d.a.rebuildIds(e.tree.lines), e.jce.saveLines(e.tree.lines), c.b.add(e.history, c.a.JUMP_TO_POSITION, {
                    from: t,
                    to: n
                }), u.a.updateState(e)
            },
            selectLineEnd: R,
            selectLineStart: P,
            selectNode: s.a,
            setPlayingAs: h,
            updateMarkings: function updateMarkings(e) {
                var t = e.arrow,
                    n = e.effect,
                    r = e.game,
                    o = e.ids,
                    i = e.square;
                return O(r, o, !1), t && N(r, t, o, !1), n && D({
                    game: r,
                    effect: n,
                    ids: o,
                    updateState: !1
                }), i && j(r, i, o, !1), u.a.updateState(r), c.b.add(r.history, c.a.TREE_CHANGE), r
            },
            updateNode: function updateNode(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = e.jce._lines(),
                    o = d.a.findNode(r, t);
                if (!o || !n || n.commentBefore && !d.a.isFirstVisibleNode(r, t)) return null;
                var i = d.a.getLine(r, t.line);
                if (void 0 === n.commentBefore && d.a.isFirstVisibleNode(r, t) ? delete i.initComment : n.commentBefore && (i.initComment = n.commentBefore), n.annotation && (n.annotation = Object(S.b)(o, n.annotation) ? "" : Object(S.v)(n.annotation)), n.additionalAnnotation) {
                    if (!Object(S.o)(n.additionalAnnotation)) return null;
                    Object(S.a)(o, n.additionalAnnotation) && (n.additionalAnnotation = []), n.additionalAnnotation = [].concat(Object(S.v)(n.additionalAnnotation))
                }
                return Object.assign(o, n), c.b.add(e.history, c.a.UPDATE_NODE, {
                    line: t.line,
                    move: t.move
                }), u.a.updateState(e)
            },
            updatePgnHeaders: function updatePgnHeaders(e, t) {
                if (!t) return null;
                var n = Object.keys(t).reduce(function(e, n) {
                    return "Date" === n && "number" == typeof t[n] && (t[n] = i.a.formatJSTimestampForPgn(t[n])), e.push(n), e.push(t[n]), e
                }, []);
                return a.a.updateHeaders(e, n), c.b.add(e.history, c.a.PGN_HEADERS_UPDATED), e.setup.result = u.a.getResult(e), e
            }
        }
    },
    51: function(e, t, n) {
        var r, o;
        /**
         * @author William DURAND <william.durand1@gmail.com>
         * @license MIT Licensed
         */
        void 0 === (o = "function" == typeof(r = function() {
            "use strict";
            var e = {},
                t = "en",
                n = [],
                r = new RegExp(/^\w+\: +(.+)$/),
                o = new RegExp(/^\s*((\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]]))\s?(.+?)$/),
                i = new RegExp(/^\s*(\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]])/),
                a = {
                    locale: get_current_locale(),
                    fallback: t,
                    placeHolderPrefix: "%",
                    placeHolderSuffix: "%",
                    defaultDomain: "messages",
                    pluralSeparator: "|",
                    add: function(t, r, o, i) {
                        var a = i || this.locale || this.fallback,
                            s = o || this.defaultDomain;
                        return e[a] || (e[a] = {}), e[a][s] || (e[a][s] = {}), e[a][s][t] = r, !1 === function exists(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (t === e[n]) return !0;
                            return !1
                        }(n, s) && n.push(s), this
                    },
                    trans: function(e, t, n, r) {
                        var o = get_message(e, n, r, this.locale, this.fallback);
                        return replace_placeholders(o, t || {})
                    },
                    transChoice: function(e, t, n, s, c) {
                        var u = get_message(e, s, c, this.locale, this.fallback),
                            l = parseInt(t, 10);
                        return void 0 === (n = n || {}).count && (n.count = t), void 0 === u || isNaN(l) || (u = function pluralize(e, t, n) {
                            var s, c, u = [],
                                l = [],
                                d = e.split(a.pluralSeparator),
                                f = [];
                            for (s = 0; s < d.length; s++) {
                                var p = d[s];
                                o.test(p) ? (f = p.match(o), u[f[0]] = f[f.length - 1]) : r.test(p) ? (f = p.match(r), l.push(f[1])) : l.push(p)
                            }
                            for (c in u)
                                if (i.test(c))
                                    if ((f = c.match(i))[1]) {
                                        var m, g = f[2].split(",");
                                        for (m in g)
                                            if (t == g[m]) return u[c]
                                    } else {
                                        var h = convert_number(f[4]),
                                            v = convert_number(f[5]);
                                        if (("[" === f[3] ? t >= h : t > h) && ("]" === f[6] ? t <= v : t < v)) return u[c]
                                    }
                            return l[function plural_position(e, t) {
                                var n = t;
                                switch ("pt_BR" === n && (n = "xbr"), n.length > 3 && (n = n.split("_")[0]), n) {
                                    case "bo":
                                    case "dz":
                                    case "id":
                                    case "ja":
                                    case "jv":
                                    case "ka":
                                    case "km":
                                    case "kn":
                                    case "ko":
                                    case "ms":
                                    case "th":
                                    case "tr":
                                    case "vi":
                                    case "zh":
                                        return 0;
                                    case "af":
                                    case "az":
                                    case "bn":
                                    case "bg":
                                    case "ca":
                                    case "da":
                                    case "de":
                                    case "el":
                                    case "en":
                                    case "eo":
                                    case "es":
                                    case "et":
                                    case "eu":
                                    case "fa":
                                    case "fi":
                                    case "fo":
                                    case "fur":
                                    case "fy":
                                    case "gl":
                                    case "gu":
                                    case "ha":
                                    case "he":
                                    case "hu":
                                    case "is":
                                    case "it":
                                    case "ku":
                                    case "lb":
                                    case "ml":
                                    case "mn":
                                    case "mr":
                                    case "nah":
                                    case "nb":
                                    case "ne":
                                    case "nl":
                                    case "nn":
                                    case "no":
                                    case "om":
                                    case "or":
                                    case "pa":
                                    case "pap":
                                    case "ps":
                                    case "pt":
                                    case "so":
                                    case "sq":
                                    case "sv":
                                    case "sw":
                                    case "ta":
                                    case "te":
                                    case "tk":
                                    case "ur":
                                    case "zu":
                                        return 1 == e ? 0 : 1;
                                    case "am":
                                    case "bh":
                                    case "fil":
                                    case "fr":
                                    case "gun":
                                    case "hi":
                                    case "ln":
                                    case "mg":
                                    case "nso":
                                    case "xbr":
                                    case "ti":
                                    case "wa":
                                        return 0 === e || 1 == e ? 0 : 1;
                                    case "be":
                                    case "bs":
                                    case "hr":
                                    case "ru":
                                    case "sr":
                                    case "uk":
                                        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
                                    case "cs":
                                    case "sk":
                                        return 1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
                                    case "ga":
                                        return 1 == e ? 0 : 2 == e ? 1 : 2;
                                    case "lt":
                                        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
                                    case "sl":
                                        return e % 100 == 1 ? 0 : e % 100 == 2 ? 1 : e % 100 == 3 || e % 100 == 4 ? 2 : 3;
                                    case "mk":
                                        return e % 10 == 1 ? 0 : 1;
                                    case "mt":
                                        return 1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
                                    case "lv":
                                        return 0 === e ? 0 : e % 10 == 1 && e % 100 != 11 ? 1 : 2;
                                    case "pl":
                                        return 1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14) ? 1 : 2;
                                    case "cy":
                                        return 1 == e ? 0 : 2 == e ? 1 : 8 == e || 11 == e ? 2 : 3;
                                    case "ro":
                                        return 1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
                                    case "ar":
                                        return 0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e >= 3 && e <= 10 ? 3 : e >= 11 && e <= 99 ? 4 : 5;
                                    default:
                                        return 0
                                }
                            }(t, n)] || l[0] || void 0
                        }(u, l, c || this.locale || this.fallback)), replace_placeholders(u, n)
                    },
                    fromJSON: function(e) {
                        if ("string" == typeof e && (e = JSON.parse(e)), e.locale && (this.locale = e.locale), e.fallback && (this.fallback = e.fallback), e.defaultDomain && (this.defaultDomain = e.defaultDomain), e.translations)
                            for (var t in e.translations)
                                for (var n in e.translations[t])
                                    for (var r in e.translations[t][n]) this.add(r, e.translations[t][n][r], n, t);
                        return this
                    },
                    reset: function() {
                        e = {}, n = [], this.locale = get_current_locale()
                    }
                };

            function replace_placeholders(e, t) {
                var n, r = a.placeHolderPrefix,
                    o = a.placeHolderSuffix;
                for (n in t) {
                    var i = new RegExp(r + n + o, "g");
                    if (i.test(e)) {
                        var s = String(t[n]).replace(new RegExp("\\$", "g"), "$$$$");
                        e = e.replace(i, s)
                    }
                }
                return e
            }

            function get_message(t, r, o, i, a) {
                var s, c, u, l, d = o || i || a,
                    f = r,
                    p = d.split("_")[0];
                if (!(d in e))
                    if (p in e) d = p;
                    else {
                        if (!(a in e)) return t;
                        d = a
                    }
                if (null == f)
                    for (var m = 0; m < n.length; m++)
                        if (has_message(d, n[m], t) || has_message(p, n[m], t) || has_message(a, n[m], t)) {
                            f = n[m];
                            break
                        }
                if (has_message(d, f, t)) return e[d][f][t];
                for (; d.length > 2 && (s = d.length, c = d.split(/[\s_]+/), u = c[c.length - 1], l = u.length, 1 !== c.length);)
                    if (has_message(d = d.substring(0, s - (l + 1)), f, t)) return e[d][f][t];
                return has_message(a, f, t) ? e[a][f][t] : t
            }

            function has_message(t, n, r) {
                return t in e && n in e[t] && r in e[t][n]
            }

            function convert_number(e) {
                return "-Inf" === e ? Number.NEGATIVE_INFINITY : "+Inf" === e || "Inf" === e ? Number.POSITIVE_INFINITY : parseInt(e, 10)
            }

            function get_current_locale() {
                return "undefined" != typeof document ? document.documentElement.lang.replace("-", "_") : t
            }
            return a
        }) ? r.call(t, n, t, e) : r) || (e.exports = o)
    },
    512: function(e, t, n) {},
    513: function(e, t, n) {},
    523: function(e, t, n) {
        "use strict";
        var r = n(232),
            o = n(486),
            i = n(487),
            a = n(485),
            s = n(97),
            c = {
                props: {
                    color: {
                        type: String,
                        default: "#ffa704"
                    },
                    files: {
                        type: Number,
                        default: s.a.defaultBoardOptions.files
                    },
                    flipped: {
                        type: Boolean,
                        default: !1
                    },
                    fileRank: {
                        type: Object,
                        required: !0
                    },
                    ranks: {
                        type: Number,
                        default: s.a.defaultBoardOptions.ranks
                    },
                    squareSize: {
                        type: Number,
                        required: !0
                    }
                },
                computed: {
                    transform: function transform() {
                        var e = this.fileRank;
                        return this.flipped && (e = {
                            file: this.files + 1 - this.fileRank.file,
                            rank: this.ranks + 1 - this.fileRank.rank
                        }), {
                            width: this.squareSize,
                            height: this.squareSize,
                            position: {
                                x: (e.file - 1) * this.squareSize,
                                y: (this.ranks - e.rank) * this.squareSize
                            }
                        }
                    }
                }
            },
            u = (n(945), n(5)),
            l = Object(u.a)(c, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "transition"
                    }
                }, [n("svg", {
                    staticClass: "item-container",
                    style: {
                        left: e.transform.position.x + "px",
                        top: e.transform.position.y + "px"
                    },
                    attrs: {
                        version: "1.1",
                        baseProfile: "full",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: e.transform.width + "px",
                        height: e.transform.height + "px",
                        viewBox: "0 0 40 40"
                    }
                }, [n("path", {
                    style: {
                        fill: e.color
                    },
                    attrs: {
                        d: "M23.12,17.84H16.4a1.11,1.11,0,0,1-1.06-1.43L18.7,5.21a1.11,1.11,0,0,1,2.13,0l3.36,11.2A1.11,1.11,0,0,1,23.12,17.84Z"
                    }
                }), e._v(" "), n("path", {
                    style: {
                        fill: e.color
                    },
                    attrs: {
                        d: "M27.21,34.11,4.35,16.88a1.11,1.11,0,0,1,.67-2l17.89,0a1.11,1.11,0,0,1,1.06.8l5,17.19A1.11,1.11,0,0,1,27.21,34.11Z"
                    }
                }), e._v(" "), n("path", {
                    style: {
                        fill: e.color
                    },
                    attrs: {
                        d: "M35.17,16.88,12.31,34.11a1.11,1.11,0,0,1-1.74-1.2l5-17.19a1.11,1.11,0,0,1,1.06-.8l17.89,0A1.11,1.11,0,0,1,35.17,16.88Z"
                    }
                })])])
            }, [], !1, null, null, null).exports,
            d = n(437),
            f = n(228),
            p = n(62),
            m = n(3),
            g = n.n(m),
            h = n(60),
            v = n(439),
            b = n(14),
            E = n(216),
            O = n(438),
            _ = n(426);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var y = function createChessboard(e, t) {
                return new Promise(function(n) {
                    var r = Object(v.a)(function _objectSpread(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                                    g()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, t, {
                            usersnapLogger: _.a
                        })),
                        o = {
                            close: function close() {
                                return r.dispatch(h.b.CANCEL_PROMOTION)
                            },
                            select: function select(e) {
                                return r.dispatch(h.b.SELECT_PROMOTION_PIECE, e)
                            }
                        };
                    r.on(b.b.ADD_LEGAL_MOVES, function(t) {
                        return E.a(e, r.state, t)
                    }), r.on(b.b.ADD_PIECES, function(t) {
                        return E.b(e, r.emit, r.state, t)
                    }), r.on(b.b.ADD_SQUARES, function(t) {
                        return E.c(e, r.state, t.type, t.moveSquares)
                    }), r.on(b.b.BLINK_SQUARE, function(t) {
                        return E.d(e, t)
                    }), r.on(b.b.CLOSE_PROMOTION_MENU, function() {
                        return E.e(e)
                    }), r.on(b.b.DRAG_PIECE, function(e) {
                        return E.h(e)
                    }), r.on(b.b.DROP_PIECE, function(e) {
                        return E.i(r.emit, e)
                    }), r.on(b.b.FADE_PIECES, function() {
                        return E.j(e, r.state)
                    }), r.on(b.b.FLIP_BOARD, function() {
                        return E.k(e, r.state)
                    }), r.on(b.b.MOVE_PIECES, function(t) {
                        return E.n(e, r.emit, r.state, t)
                    }), r.on(b.b.OPEN_PROMOTION_MENU, function(t) {
                        return E.o(e, r.state, o, t)
                    }), r.on(b.b.PICK_UP_PIECE, function(e) {
                        return E.p(r.emit, e)
                    }), r.on(b.b.REMOVE_LEGAL_MOVES, function() {
                        return E.m(e)
                    }), r.on(b.b.REMOVE_SQUARES, function(t) {
                        return E.r(e, t.type, t.squares)
                    }), r.on(b.b.REMOVE_PIECES, function(t) {
                        return E.q(e, r.emit, t)
                    }), r.on(b.b.SET_PIECE, function(e) {
                        return E.s(e.piece, e.fileRank)
                    }), r.on(b.b.SET_PIECES, function(t) {
                        return E.t(e, r.emit, r.state, t)
                    }), r.on(b.b.SET_SQUARES, function(t) {
                        return E.u(e, r.state, t)
                    }), r.on(b.b.SHOW_HOVER_SQUARE, function(t) {
                        return E.v(e, t)
                    }), r.on(b.b.HIDE_HOVER_SQUARE, function(t) {
                        return E.l(e, t)
                    }), r.on(b.b.UPDATE_BOARD_CLASSES, function(t) {
                        return Object(O.a)(e, t)
                    }), r.on(b.b.UPDATE_BOARD_IMAGE, function() {
                        return E.w(e, r.state)
                    }), r.on(b.b.UPDATE_BOARD_SIZE, function() {
                        return E.x(e, r.state)
                    }), r.on(b.b.UPDATE_PIECE_IMAGES, function() {
                        return E.y(e, r.state)
                    }), r.on(b.b.UPDATE_PROMOTION_MENU_SIZE, function() {
                        return E.z(e, r.state)
                    }), E.f(e), n(r)
                })
            },
            S = {
                name: "chess-board",
                mixins: [d.a],
                components: {
                    CustomItem: l,
                    Coordinates: o.a,
                    MarkedArrow: i.a,
                    MarkedEffect: a.a
                },
                computed: {
                    coordColors: function coordColors() {
                        return {
                            white: r.a[this.options.boardStyle][1],
                            black: r.a[this.options.boardStyle][0]
                        }
                    }
                },
                methods: {
                    createChessboard: function createChessboard() {
                        return y(this.$el, this.extensions)
                    },
                    getDomFormatters: function getDomFormatters() {
                        return f.c(p.d)
                    }
                }
            },
            P = (n(946), Object(u.a)(S, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "board",
                    attrs: {
                        tabindex: "-1",
                        id: e.boardId
                    }
                }, [e.initialized && e.options.coordinates ? n("coordinates", {
                    attrs: {
                        colors: e.coordColors,
                        position: e.options.coordinates,
                        "board-style": e.options.boardStyle,
                        flipped: e.options.flipBoard,
                        size: e.squareSize
                    }
                }) : e._e(), e._v(" "), n("div", {
                    staticClass: "arrows-container"
                }, e._l(e.arrows, function(t) {
                    return n("marked-arrow", {
                        key: "" + t.fromFileRank.file + t.fromFileRank.rank + t.toFileRank.file + t.toFileRank.rank,
                        attrs: {
                            "additional-styles": t.additionalStyles,
                            "square-size": e.squareSize,
                            files: e.game.setup.files,
                            ranks: e.game.setup.ranks,
                            flipped: e.options.flipBoard,
                            "from-file-rank": t.fromFileRank,
                            "to-file-rank": t.toFileRank,
                            color: t.color,
                            opacity: t.opacity
                        }
                    })
                }), 1), e._v(" "), e._l(e.effects, function(t) {
                    return n("marked-effect", {
                        key: "" + t.square.file + t.square.rank,
                        attrs: {
                            "additional-styles": t.additionalStyles,
                            files: e.game.setup.files,
                            flipped: e.options.flipBoard,
                            position: t.position,
                            ranks: e.game.setup.ranks,
                            square: t.square,
                            "square-size": e.squareSize,
                            template: t.template
                        }
                    })
                }), e._v(" "), e._l(e.customItems, function(t) {
                    return n("custom-item", {
                        key: "" + t.fileRank.file + t.fileRank.rank,
                        attrs: {
                            "square-size": e.squareSize,
                            files: e.game.setup.files,
                            ranks: e.game.setup.ranks,
                            flipped: e.options.flipBoard,
                            "file-rank": t.fileRank
                        }
                    })
                })], 2)
            }, [], !1, null, null, null));
        t.a = P.exports
    },
    55: function(e, t, n) {
        e.exports = n(26)(43)
    },
    57: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        n(6);
        var r = {
                p: 1,
                n: 32,
                b: 256,
                r: 2048,
                q: 16384
            },
            o = function setHand(e, t, n) {
                return e.jce._hand[t] = n.split("").reduce(function(e, t) {
                    return e + r[t]
                }, 0), e.setup.hand = e.jce.hand(), e
            }
    },
    6: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u
        });
        var r = n(3),
            o = n.n(r),
            i = n(2),
            a = n(4);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                    o()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var s = {},
            c = {
                q: 9,
                r: 5,
                b: 3,
                n: 3,
                p: 1,
                k: 0
            },
            u = {
                getInitialSettings: function getInitialSettings() {
                    return {
                        variations: !1,
                        analysis: !1,
                        mainLineIsImmutable: !1,
                        rules: !0,
                        premoves: !1,
                        GTM: !1
                    }
                },
                getInitialSetup: function getInitialSetup() {
                    return {
                        ranks: 8,
                        files: 8
                    }
                },
                getInitialTree: function getInitialTree() {
                    return {
                        initialMarkings: {
                            arrows: [],
                            effects: [],
                            squares: []
                        }
                    }
                },
                getInitialMarkings: function getInitialMarkings() {
                    return {
                        arrows: [],
                        blinkingSquares: [],
                        effects: [],
                        squares: []
                    }
                },
                clearState: function clearState(e) {
                    return e.setup = u.getInitialSetup(), e
                },
                updateState: function updateState(e) {
                    e.setup = Object.assign({}, e.setup, a.a.getPositionInfo(e), a.a.getPositionDetails(e)), a.a.addExtraCastlingMoves(e), e.tree.lines = i.a.getLinesFromJce(e), e.tree.selected = e.jce.ids(), e.tree.selectedNode = i.a.getSelectedNode(e), e.setup.capturedPieces = u.getCapturedPieces(e.setup), e.setup.capturedScores = u.getCapturedScores(e.setup), e.setup.result = u.getResult(e), e.premoves = a.a.getPremoves(e), e.variant = a.a.getHeaders(e).Variant || e.variant, e.startingMoveNumber = e.setup.moveNumber;
                    var t = i.a.getNode(e.tree.lines, a.a.getSelectedIds(e)) || e.tree.initialMarkings;
                    return t && (e.markings.squares = t.squares ? t.squares.map(function(e) {
                        return _objectSpread({}, e)
                    }) : [], e.markings.arrows = t.arrows ? t.arrows.map(function(e) {
                        return _objectSpread({}, e)
                    }) : [], e.setup.effects ? e.markings.effects = e.setup.effects : t.effects ? e.markings.effects = t.effects.map(function(e) {
                        return _objectSpread({}, e)
                    }) : e.markings.effects = []), s[e.id] = !0, e.sibling && !s[e.sibling.id] && (e.sibling = u.updateState(e.sibling)), s = {}, e
                },
                getCapturedPieces: function getCapturedPieces(e) {
                    return e.pieces.reduce(function(e, t) {
                        if ("k" === t.type) return e;
                        var n = t.promoted ? "p" : t.type;
                        return e[t.color - 1][n] -= 1, e
                    }, [{
                        p: 8,
                        n: 2,
                        b: 2,
                        r: 2,
                        q: 1
                    }, {
                        p: 8,
                        n: 2,
                        b: 2,
                        r: 2,
                        q: 1
                    }])
                },
                getCapturedScores: function getCapturedScores(e) {
                    return e.pieces.reduce(function(e, t) {
                        return e[t.color - 1] += c[t.type], e
                    }, [0, 0])
                },
                getResult: function getResult(e) {
                    var t = a.a.getHeaders(e).Result;
                    return "*" !== t ? t : e.setup.insufficient || e.setup.stalemate ? "1/2-1/2" : e.setup.gameOver && !e.setup.draw ? 1 === e.setup.sideToMove ? "0-1" : "1-0" : "*"
                }
            }
    },
    60: function(e, t, n) {
        "use strict";
        var r = n(14),
            o = n(40),
            i = function cancelPromotion(e) {
                var t = e.emit,
                    n = e.state;
                t(r.b.SET_PIECE, {
                    piece: n.promotion.from,
                    fileRank: n.promotion.from
                }), n.promotion = {
                    from: null,
                    piece: null,
                    to: null
                }, t(r.b.CLOSE_PROMOTION_MENU), t(r.b.REMOVE_SQUARES, {
                    type: r.f.SELECTION
                })
            },
            a = n(24),
            s = n.n(a),
            c = n(3),
            u = n.n(c);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                    u()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var l = 0,
            d = function getKey() {
                return "piece-".concat(l += 1)
            },
            f = function mapArrayToObjectById(e) {
                var t = {};
                return e.forEach(function(e) {
                    return t[e.id] = _objectSpread({}, e)
                }), t
            },
            p = function mapObjtoArray(e) {
                return Object.keys(e).map(function(t) {
                    return e[t]
                })
            },
            m = function getDiff(e, t) {
                var n = f(e),
                    r = f(function addIds(e) {
                        return e.map(function(e) {
                            return _objectSpread({}, e, {
                                id: "".concat(1 === e.color ? "w" : "b").concat(e.type).concat(e.file).concat(e.rank)
                            })
                        })
                    }(t)),
                    o = [],
                    i = [],
                    a = [];
                Object.keys(r).forEach(function(e) {
                    n[e] && (o.push(_objectSpread({}, r[e], {
                        key: n[e].key
                    })), delete n[e], delete r[e])
                });
                var s = p(n);
                return o = p(r).map(function(e) {
                    var t, n = s.findIndex(function(t) {
                        return t && t.type === e.type && t.color === e.color
                    });
                    return -1 !== n ? (t = s[n].key, i.push(_objectSpread({}, e, {
                        key: t
                    })), s[n] = null) : (t = d(), a.push(_objectSpread({}, e, {
                        key: t
                    }))), _objectSpread({}, e, {
                        key: t || d()
                    })
                }).concat(o), {
                    added: a,
                    final: o,
                    moved: i,
                    previous: e,
                    removed: s.filter(function(e) {
                        return null !== e
                    })
                }
            };

        function change_position_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function change_position_objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? change_position_ownKeys(n, !0).forEach(function(t) {
                    u()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : change_position_ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var g = function getMoveType(e) {
                if (!e) return null;
                var t = e.san.slice(-1);
                return "+" === t ? r.d.CHECK : "#" === t ? r.d.CHECKMATE : 1 === e.flags || 4 === e.flags ? r.d.CAPTURE : 16 === e.flags || 32 === e.flags ? r.d.CASTLE : 8 === e.flags || 9 === e.flags ? r.d.PROMOTION : r.d.NORMAL
            },
            h = function getSound(e, t) {
                var n;
                switch (e) {
                    case r.d.CHECK:
                    case r.d.CHECKMATE:
                        n = r.e.CHECK;
                        break;
                    case r.d.CAPTURE:
                        n = r.e.CAPTURE;
                        break;
                    case r.d.CASTLE:
                        n = r.e.CASTLE;
                        break;
                    case r.d.PREMOVE:
                        n = r.e.PREMOVE;
                        break;
                    case r.d.PROMOTION:
                        n = r.e.PROMOTION;
                        break;
                    default:
                        n = t ? r.e.MOVE_OPPONENT : r.e.MOVE_SELF
                }
                return n
            },
            v = n(62);

        function drag_start_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function drag_start_objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? drag_start_ownKeys(n, !0).forEach(function(t) {
                    u()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : drag_start_ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var b = n(214);
        var E = Object(b.a)(function handler(e, t) {
            var n = e.emit;
            if (!e.state.options.captureKeyStrokes) return null;
            switch (n(r.c.KEY_PRESS, t), t) {
                case 37:
                    n(r.c.MOVE_BACKWARD, 1);
                    break;
                case 38:
                    n(r.c.MOVE_TO_START);
                    break;
                case 39:
                    n(r.c.MOVE_FORWARD, 1);
                    break;
                case 40:
                    n(r.c.MOVE_TO_END)
            }
        }, 120);

        function mark_arrow_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function mark_arrow_objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? mark_arrow_ownKeys(n, !0).forEach(function(t) {
                    u()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mark_arrow_ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var O = 0,
            _ = function getId() {
                return "arrow-".concat(O += 1)
            };

        function mark_effect_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var y = 0,
            S = function getId() {
                return "effect-".concat(y += 1)
            };

        function make_move_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function make_move_objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? make_move_ownKeys(n, !0).forEach(function(t) {
                    u()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : make_move_ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var P = n(346);

        function reset_board_state_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function reset_board_state_objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? reset_board_state_ownKeys(n, !0).forEach(function(t) {
                    u()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : reset_board_state_ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var k;

        function select_piece_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function set_board_dimensions_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var C = n(396);

        function update_board_image_state_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function update_game_settings_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        var A = n(232);

        function update_options_ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }
        n.d(t, "a", function() {
            return w
        }), n.d(t, "b", function() {
            return T
        });
        var w = {
                addCustomItem: function addCustomItem(e, t) {
                    var n = e.emit,
                        o = e.state;
                    o.customItems.push(t), n(r.b.SET_CUSTOM_ITEMS, o.customItems)
                },
                cancelPromotion: i,
                changePosition: function changePosition(e, t) {
                    var n = e.dispatch,
                        i = e.emit,
                        a = e.state,
                        c = !1,
                        u = null,
                        l = t.animate ? function getAnimationSpeed(e) {
                            switch (e) {
                                case "none":
                                    return 0;
                                case "slow":
                                    return .5;
                                default:
                                    return .2
                            }
                        }(a.options.animationType) : 0,
                        d = m(a.pieces, t.pieces),
                        f = t.sideToMove === t.playingAs,
                        p = t.premoves.length > a.premoves.length ? r.d.PREMOVE : g(t.selectedNode),
                        v = change_position_objectSpread({}, a.selectedNode);
                    a.isCheck = t.isCheck, a.isCheckmate = t.isCheckmate, a.pieces = s()(d.final), a.premoves = s()(t.premoves), a.previousPieces = s()(d.previous), a.selectedNode = change_position_objectSpread({}, t.selectedNode), a.sideToMove = t.sideToMove, a.playingAs = t.playingAs, a.promotion.to && (a.promotion = {
                        from: null,
                        piece: null,
                        to: null
                    }, i(r.b.CLOSE_PROMOTION_MENU)), n(T.UPDATE_LEGAL_MOVES, t), v && (t.selectedNode || (t.selectedNode = {
                        moveNumber: -1
                    }), c = 1 === Math.abs(v.moveNumber - t.selectedNode.moveNumber)), t.playSound ? c && v.moveNumber > t.selectedNode.moveNumber ? u = h(g(v), !f) : t.selectedNode && (u = h(p, f)) : u = null;
                    var b = {
                            fadeTime: c ? l : 0,
                            pieces: d.added,
                            moveType: p
                        },
                        E = {
                            animationSpeed: a.options.fadeSetup > 0 ? 0 : l,
                            pieces: d.moved,
                            moveType: p
                        },
                        O = {
                            fadeTime: !c || a.movedPiece || a.draggingPiece ? 0 : l,
                            pieces: d.removed,
                            moveType: p
                        };
                    n(T.SET_BUSY_FLAG, !0);
                    var _ = a.options.highlightMoves ? Object(o.c)(a.selectedNode, t.premoves, t.squares) : Object(o.c)({}, t.premoves, t.squares);
                    n(T.SET_MOVE_SQUARES, _), a.options.fadeSetup > 0 && i(r.b.FADE_PIECES), t.loaded && (n(T.DESELECT_PIECE), i(r.c.LOADED)), a.draggingPiece && O.pieces && O.pieces.length > 0 && O.pieces.findIndex(function(e) {
                        return e.key === a.draggingPiece.key
                    }) >= 0 && (n(T.DESELECT_PIECE), n(T.DRAG_CANCEL));
                    if (i(r.c.POSITION_CHANGED, d), i(r.b.SET_PIECES, d.previous), i(r.b.REMOVE_PIECES, O), i(r.b.ADD_PIECES, b), a.options.playSounds && i(r.b.PLAY_SOUND, u), a.selectedPiece && E.pieces && E.pieces.length && E.pieces.findIndex(function(e) {
                            return e.key === a.selectedPiece.key
                        }) >= 0 && n(T.DESELECT_PIECE), (a.movedPiece || a.draggingPiece) && E.pieces && E.pieces.length > 0) {
                        var y = null,
                            S = -1;
                        a.draggingPiece && ((S = E.pieces.findIndex(function(e) {
                            return e.key === a.draggingPiece.key
                        })) >= 0 && (y = {
                            file: E.pieces[S].file,
                            rank: E.pieces[S].rank
                        }, E.pieces.splice(S, 1)), null !== y && (i(r.b.DROP_PIECE, {
                            state: a,
                            draggingPiece: a.draggingPiece,
                            fileRank: y
                        }), a.draggingPiece = null)), a.movedPiece && (y = null, (S = E.pieces.findIndex(function(e) {
                            return e.key === a.movedPiece.key
                        })) >= 0 && (y = {
                            file: E.pieces[S].file,
                            rank: E.pieces[S].rank
                        }, E.pieces.splice(S, 1)), null !== y && (i(r.b.DROP_PIECE, {
                            state: a,
                            draggingPiece: a.movedPiece,
                            fileRank: y
                        }), a.movedPiece = null))
                    }
                    i(r.b.MOVE_PIECES, E);
                    var P = 100;
                    l > 0 && (E.pieces && E.pieces.length || a.options.fadeSetup > 0) && (P += 1e3 * l), null !== a.busyFlagTimeout && clearTimeout(a.busyFlagTimeout), a.busyFlagTimeout = setTimeout(function() {
                        a.busyFlagTimeout = null, n(T.SET_BUSY_FLAG, !1)
                    }, P)
                },
                clearArrow: function clearArrow(e, t) {
                    var n = e.emit,
                        i = e.state;
                    i.arrows = i.arrows.filter(function(e) {
                        return !Object(o.h)(e, t)
                    }), n(r.c.ARROW_CLEARED, t)
                },
                clearMarkings: function clearMarkings(e) {
                    var t = e.emit,
                        n = e.state;
                    n.squares = [], n.arrows = [], t(r.c.MARKINGS_CLEARED)
                },
                clearSquare: function clearSquare(e, t) {
                    var n = e.emit,
                        i = e.state;
                    i.squares = i.squares.filter(function(e) {
                        return !Object(o.h)(e, t)
                    }), n(r.c.SQUARE_CLEARED, t)
                },
                click: function click(e, t) {
                    var n = e.dispatch,
                        a = e.emit,
                        s = e.state;
                    if (!s.options.enabled || !Object(v.g)(t, s.board.files, s.board.ranks)) return null;
                    (s.squares && s.squares.length || s.arrows && s.arrows.length) && n(T.CLEAR_MARKINGS), t.piece = Object(o.d)(s.pieces, t), "drag" === s.options.moveMethod && s.draggingPiece && Object(o.h)(s.draggingPiece, t) ? (n(T.DROP_PIECE, s.draggingPiece), s.preselectedPiece && s.selectedPiece && s.preselectedPiece.key === s.selectedPiece.key ? (n(T.DESELECT_PIECE), s.preselectedPiece = null) : n(T.SELECT_PIECE, t)) : s.selectedPiece && "drag" === s.options.moveMethod ? (null !== s.promotion.from && i({
                        emit: a,
                        state: s
                    }), n(T.MAKE_MOVE, t)) : !s.selectedPiece && t.piece ? s.preventNextSelect ? s.preventNextSelect = !1 : n(T.SELECT_PIECE, t) : n(T.DESELECT_PIECE), s.busyFlagTimeout = setTimeout(function() {
                        s.busyFlagTimeout = null, n(T.SET_BUSY_FLAG, !1)
                    }, 100), a(r.c.CLICKED, {
                        state: s,
                        file: t.file,
                        rank: t.rank
                    })
                },
                deselectPiece: function deselectPiece(e) {
                    var t = e.emit,
                        n = e.dispatch,
                        o = e.state;
                    t(r.b.REMOVE_LEGAL_MOVES), t(r.c.PIECE_UNSELECTED, o.selectedPiece), o.selectedPiece = null, n(T.UPDATE_SELECTED_PIECE_SQUARE)
                },
                droppableDragStart: function droppableDragStart(e) {
                    var t = e.emit;
                    (0, e.dispatch)(T.SET_BUSY_FLAG, !0), t(r.b.DISABLE_FAKE_CURSOR)
                },
                droppableDragEnd: function droppableDragEnd(e) {
                    var t = e.emit;
                    (0, e.dispatch)(T.SET_BUSY_FLAG, !1), t(r.b.ENABLE_FAKE_CURSOR)
                },
                dragCancel: function dragCancel(e) {
                    var t = e.emit,
                        n = e.dispatch,
                        o = e.state;
                    null !== o.busyFlagTimeout && (clearTimeout(o.busyFlagTimeout), o.busyFlagTimeout = null, n(T.SET_BUSY_FLAG, !1)), o.draggingPiece && (n(T.DROP_PIECE, {
                        file: o.draggingPiece.file,
                        rank: o.draggingPiece.rank
                    }), t(r.c.PIECE_DROPPED, {
                        state: o,
                        draggingPiece: o.draggingPiece
                    })), o.drawingArrow = !1
                },
                dragMove: function dragMove(e, t) {
                    var n = e.emit,
                        o = e.state;
                    if (!o.draggingPiece) return null;
                    n(r.b.DRAG_PIECE, {
                        state: o,
                        draggingPiece: o.draggingPiece,
                        coords: t
                    }), n(r.b.SHOW_HOVER_SQUARE, {
                        state: o,
                        coords: t
                    })
                },
                dragStart: function dragStart(e, t) {
                    var n = e.dispatch,
                        a = e.emit,
                        s = e.state;
                    if (!s.options.enabled || !Object(v.g)(t, s.board.files, s.board.ranks) || s.draggingPiece || s.preventNextSelect) return null;
                    s.selectedPiece && null !== s.promotion.from ? i({
                        emit: a,
                        state: s
                    }) : (t.piece = Object(o.d)(s.pieces, t), !t.piece || s.selectedPiece && s.selectedPiece.color !== t.piece.color || (s.selectedPiece = t.piece), s.selectedPiece && (t.piece = drag_start_objectSpread({}, s.selectedPiece)), !t.isRightClick && s.selectedPiece ? (s.draggingPiece = drag_start_objectSpread({}, s.selectedPiece), n(T.SET_BUSY_FLAG, !0), n(T.SELECT_PIECE, t), a(r.b.PICK_UP_PIECE, s.selectedPiece), a(r.c.PIECE_PICKED_UP, s.selectedPiece)) : t.isRightClick && s.options.allowMarkings && (s.drawingArrowFrom = t))
                },
                dragStop: function dragStop(e, t) {
                    var n = e.emit,
                        i = e.dispatch,
                        a = e.state;
                    if (!a.draggingPiece && !a.drawingArrowFrom || !t) return null;
                    var s = t.file,
                        c = t.rank,
                        u = t.isRightClick,
                        l = {
                            file: s,
                            rank: c
                        };
                    if (a.drawingArrowFrom && u) {
                        if (Object(o.h)(a.drawingArrowFrom, l)) return a.drawingArrowFrom = null, null;
                        var d = {
                            fromFileRank: a.drawingArrowFrom,
                            toFileRank: Object(o.b)(l, a.board.files, a.board.ranks)
                        };
                        if (Object(o.i)(d.fromFileRank, d.toFileRank)) return a.drawingArrowFrom = null, null;
                        a.arrows.find(function(e) {
                            return Object(o.h)(e.fromFileRank, d.fromFileRank) && Object(o.h)(e.toFileRank, d.toFileRank)
                        }) ? i(T.CLEAR_ARROW, d) : i(T.MARK_ARROW, d), a.drawingArrowFrom = null, a.selectedPiece = null
                    } else Object(v.g)(l, a.board.files, a.board.ranks) ? (null !== a.busyFlagTimeout && clearTimeout(a.busyFlagTimeout), a.busyFlagTimeout = setTimeout(function() {
                        a.busyFlagTimeout = null, i(T.SET_BUSY_FLAG, !1)
                    }, 100), u ? a.draggingPiece && (i(T.DROP_PIECE, {
                        file: a.draggingPiece.file,
                        rank: a.draggingPiece.rank
                    }), n(r.c.PIECE_DROPPED, {
                        state: a,
                        draggingPiece: a.draggingPiece
                    })) : a.selectedPiece && !Object(o.h)(a.selectedPiece, l) ? i(T.MAKE_MOVE, t) : i(T.DROP_PIECE, l)) : (null !== a.busyFlagTimeout && clearTimeout(a.busyFlagTimeout), a.busyFlagTimeout = setTimeout(function() {
                        a.busyFlagTimeout = null, i(T.SET_BUSY_FLAG, !1)
                    }, 100), i(T.MAKE_MOVE, null))
                },
                dropPiece: function dropPiece(e, t) {
                    var n = e.emit,
                        o = e.state;
                    o.draggingPiece && (n(r.b.DROP_PIECE, {
                        state: o,
                        draggingPiece: o.draggingPiece,
                        fileRank: t
                    }), n(r.b.HIDE_HOVER_SQUARE, {
                        state: o
                    }), o.draggingPiece = null)
                },
                keyDown: E,
                makeMove: function makeMove(e, t) {
                    var n = e.dispatch,
                        i = e.emit,
                        a = e.state;
                    if (!(a.selectedPiece || a.promotion && a.promotion.piece && a.promotion.from)) return a.draggingPiece = null, null;
                    var s, c = a.selectedPiece ? make_move_objectSpread({}, Object(o.d)(a.pieces, a.selectedPiece)) : null;
                    if (!c || !c.file && !c.rank || c && a.selectedPiece && (c.type !== a.selectedPiece.type || c.color !== a.selectedPiece.color)) {
                        if (a.draggingPiece = null, n(T.DESELECT_PIECE), !a.promotion.from) return null;
                        c = a.promotion.from
                    }
                    i(r.c.SQUARE_UNSELECTED, {
                        state: a,
                        square: a.selectedPiece
                    });
                    var u = {
                            file: c.file,
                            rank: c.rank
                        },
                        l = a.promotion.piece,
                        d = a.promotion.to || t,
                        f = a.options.autoPromote && !(t && t.altKey),
                        p = Object(o.k)(a.pieces, c, d),
                        m = 0 === a.legalMoves.filter(function(e) {
                            return e.from === Object(o.e)(u) && e.to === Object(o.e)(d) && "k" !== e.captured
                        }).length,
                        g = p && !m && !a.promotion.piece && !f,
                        h = !m && p && (f || a.promotion.piece);
                    if (g) return a.promotion = {
                        from: make_move_objectSpread({}, c),
                        piece: null,
                        to: t
                    }, n(T.DROP_PIECE, t), i(r.b.OPEN_PROMOTION_MENU, {
                        piece: c,
                        toFileRank: t,
                        top: a.options.flipBoard && 2 === c.color || !a.options.flipBoard && 1 === c.color
                    });
                    if (h && (u = a.promotion.from || u, d = a.promotion.to || t, l = f ? "q" : a.promotion.piece, n(T.DROP_PIECE, t)), a.movedPiece = a.draggingPiece, null === t && a.gameSettings.rules && (s = {
                            file: c.file,
                            rank: c.rank
                        }), m && (s = {
                            file: c.file,
                            rank: c.rank
                        }), s && n(T.DROP_PIECE, s), m || n(T.DROP_PIECE, t), i(r.c.MOVE_MADE, {
                            from: u,
                            to: d,
                            isIllegal: m,
                            promotion: l
                        }), n(T.DESELECT_PIECE), a.isCheck && m && c && c.color === a.sideToMove && !a.pieces.find(function(e) {
                            return e && d && e.file === d.file && e.rank === d.rank && e.color === a.sideToMove
                        })) {
                        var v = a.pieces.find(function(e) {
                            return "k" === e.type && e.color === a.sideToMove
                        });
                        i(r.b.BLINK_SQUARE, {
                            file: v.file,
                            rank: v.rank,
                            times: 3,
                            color: "#ff0000",
                            interval: 200
                        }), a.options.playSounds && i(r.b.PLAY_SOUND, r.e.ILLEGAL)
                    }
                    a.promotion = {
                        from: null,
                        piece: null,
                        to: null
                    }
                },
                markArrow: function markArrow(e, t) {
                    var n = e.emit;
                    if (!t || !t.fromFileRank || !t.toFileRank) return null;
                    var o = {
                        id: _(),
                        fromFileRank: mark_arrow_objectSpread({}, t.fromFileRank),
                        toFileRank: mark_arrow_objectSpread({}, t.toFileRank)
                    };
                    return n(r.c.ARROW_MARKED, o)
                },
                markEffect: function markEffect(e, t) {
                    var n = e.emit;
                    if (!t || !t.square) return null;
                    var o = function mark_effect_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? mark_effect_ownKeys(n, !0).forEach(function(t) {
                                u()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mark_effect_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        id: S()
                    }, t);
                    return n(r.c.EFFECT_MARKED, o)
                },
                markSquare: function markSquare(e, t) {
                    var n = e.emit,
                        i = e.state;
                    if (!t || !t.file || !t.rank) return null;
                    var a = {
                        id: Object(o.f)(),
                        file: t.file,
                        rank: t.rank,
                        color: t.color || i.options.highlightColor,
                        opacity: t.opacity || i.options.highlightOpacity
                    };
                    return n(r.c.SQUARE_MARKED, a)
                },
                pointerdown: function pointerdown(e, t) {
                    var n = e.dispatch,
                        i = e.emit,
                        a = e.state;
                    if (t) {
                        var s = t.file,
                            c = t.rank,
                            u = t.x,
                            l = t.y,
                            d = t.boardRect;
                        if (t.isRightClick) return n(T.DRAG_CANCEL);
                        if (!a.options.enabled || !Object(v.g)({
                                file: s,
                                rank: c
                            }, a.board.files, a.board.ranks) || a.selectedPiece && null !== a.promotion.from) return null;
                        if ("drag" === a.options.moveMethod) {
                            if (!a.gameSettings.rules) return;
                            if (a.selectedPiece && a.legalMoves.findIndex(function(e) {
                                    return e.from === Object(o.e)(a.selectedPiece) && e.to === Object(o.e)({
                                        file: s,
                                        rank: c
                                    })
                                }) > -1) return;
                            if (!Object(o.d)(a.pieces, {
                                    file: s,
                                    rank: c
                                })) return;
                            a.selectedPiece = null, n(T.DRAG_START, {
                                file: s,
                                rank: c,
                                x: u,
                                y: l
                            }), i(r.b.DRAG_PIECE, {
                                state: a,
                                draggingPiece: a.selectedPiece,
                                coords: {
                                    x: u,
                                    y: l,
                                    boardRect: d
                                }
                            })
                        } else a.selectedPiece && !Object(o.h)(a.selectedPiece, {
                            file: s,
                            rank: c
                        }) ? (a.preventNextSelect = !0, n(T.MAKE_MOVE, t), null !== a.busyFlagTimeout && (clearTimeout(a.busyFlagTimeout), a.busyFlagTimeout = null, n(T.SET_BUSY_FLAG, !1))) : a.preventNextSelect = !1
                    }
                },
                pointerup: function pointerup(e, t) {
                    var n = e.dispatch,
                        o = e.emit,
                        i = e.state,
                        a = (t.file, t.rank, t.x, t.y, t.isRightClick);
                    if (i.draggingPiece && !a) n(T.DROP_PIECE, {
                        file: i.draggingPiece.file,
                        rank: i.draggingPiece.rank
                    }), o(r.c.PIECE_DROPPED, {
                        state: i,
                        draggingPiece: i.draggingPiece
                    });
                    else if (a) {
                        if (i.gameSettings.premoves && i.premoves.length) return o(r.c.CANCEL_PREMOVES), null;
                        if (i.gameSettings.GTM && i.premoves.length) return o(r.c.CANCEL_GTM), null
                    }
                },
                removeCustomItem: function removeCustomItem(e, t) {
                    var n = e.emit,
                        i = e.state;
                    i.customItems = i.customItems.filter(function(e) {
                        return !Object(o.h)(e.fileRank, t.fileRank)
                    }), n(r.b.SET_CUSTOM_ITEMS, i.customItems)
                },
                resetBoardState: function resetBoardState(e) {
                    var t = e.dispatch,
                        n = e.state,
                        r = P.a.busy,
                        o = P.a.busyFlagTimeout,
                        i = P.a.movedPiece,
                        a = P.a.promotion;
                    n = Object.assign(n, {
                        busy: r,
                        busyFlagTimeout: o,
                        movedPiece: i,
                        promotion: reset_board_state_objectSpread({}, a)
                    }), t(T.DESELECT_PIECE), t(T.DROP_PIECE)
                },
                resizeBoard: function resizeBoard(e, t) {
                    var n = e.dispatch,
                        o = e.emit;
                    clearTimeout(k), n(T.SET_BOARD_DIMENSIONS, t), k = setTimeout(function() {
                        o(r.b.UPDATE_BOARD_IMAGE), o(r.b.UPDATE_PIECE_IMAGES)
                    }, 300)
                },
                rightClick: function rightClick(e, t) {
                    var n = e.dispatch,
                        a = e.emit,
                        s = e.state;
                    if (!s.options.enabled) return null;
                    if (s.draggingPiece) return s.busyFlagTimeout = setTimeout(function() {
                        s.busyFlagTimeout = null, n(T.SET_BUSY_FLAG, !1)
                    }, 100), a(r.c.PIECE_DROPPED, {
                        state: s,
                        draggingPiece: s.draggingPiece,
                        fileRank: {
                            file: s.draggingPiece.file,
                            rank: s.draggingPiece.rank
                        }
                    }), void(s.draggingPiece = null);
                    if (s.selectedPiece && null !== s.promotion.from) return i({
                        emit: a,
                        state: s
                    }), null;
                    if (s.gameSettings.premoves && s.premoves.length) return a(r.c.CANCEL_PREMOVES), null;
                    if (s.gameSettings.GTM && s.premoves.length) return a(r.c.CANCEL_GTM), null;
                    if (!Object(v.g)(t, s.board.files, s.board.ranks)) return null;
                    if (s.options.allowMarkings) {
                        var c = {
                            file: t.file,
                            rank: t.rank,
                            color: s.markedSquareColors[t.key],
                            opacity: s.markedSquareOpacity,
                            userGenerated: !0
                        };
                        s.squares && s.squares.find(function(e) {
                            return Object(o.h)(e, c)
                        }) ? n(T.CLEAR_SQUARE, c) : n(T.MARK_SQUARE, c)
                    }
                    return !0
                },
                selectPiece: function selectPiece(e, t) {
                    var n = e.emit,
                        i = e.state,
                        a = e.dispatch,
                        s = t.piece;
                    if (!Object(v.g)(s, i.board.files, i.board.ranks)) return null;
                    i.selectedPiece = function select_piece_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? select_piece_ownKeys(n, !0).forEach(function(t) {
                                u()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : select_piece_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, s), a(T.UPDATE_SELECTED_PIECE_SQUARE), i.options.highlightLegalMoves && n(r.b.ADD_LEGAL_MOVES, i.legalMoves.filter(function(e) {
                        return e.from === Object(o.e)(s)
                    }).map(function(e) {
                        return Object(o.a)(e.to)
                    })), n(r.c.PIECE_SELECTED, t)
                },
                selectPromotionPiece: function selectPromotionPiece(e, t) {
                    var n = e.dispatch,
                        i = e.emit,
                        a = e.state;
                    if (!Object(o.j)(t)) return null;
                    if (a.promotion.piece = t, a.promotion.from) {
                        var s = a.pieces.findIndex(function(e) {
                            return e.key === a.promotion.from.key
                        });
                        a.pieces.splice(s, 1)
                    }
                    i(r.b.CLOSE_PROMOTION_MENU), i(r.b.REMOVE_LEGAL_MOVES), n(T.MAKE_MOVE, a.promotion.to)
                },
                setBoardDimensions: function setBoardDimensions(e, t) {
                    var n = e.dispatch,
                        o = e.emit,
                        i = e.state,
                        a = t.height,
                        s = t.width,
                        c = t.aspectRatio,
                        l = void 0 === c ? 1 : c,
                        d = s / l < a,
                        f = d ? s : a * l,
                        p = d ? s / l : a,
                        m = Math.min(f, p),
                        g = Math.floor(m / i.board.files),
                        h = l > 1 ? s : g * i.board.files;
                    i.board = function set_board_dimensions_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? set_board_dimensions_ownKeys(n, !0).forEach(function(t) {
                                u()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : set_board_dimensions_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, i.board, {
                        size: h,
                        squareSize: g
                    }), n(T.UPDATE_BOARD_IMAGE_STATE), o(r.b.UPDATE_BOARD_SIZE), o(r.b.UPDATE_PIECE_SIZES), o(r.b.UPDATE_PROMOTION_MENU_SIZE), o(r.c.BOARD_DIMENSIONS_SET)
                },
                setBusyFlag: function setBusyFlag(e, t) {
                    var n = e.emit,
                        o = e.state;
                    t !== o.busy && (o.busy = t, n(r.c.BUSY_FLAG, o.busy))
                },
                setMoveSquares: function setMoveSquares(e, t) {
                    var n = e.emit,
                        i = e.state,
                        a = (t || []).filter(function(e) {
                            return e
                        }).map(function(e) {
                            return {
                                id: Object(o.f)(),
                                file: e.file,
                                rank: e.rank,
                                color: e.isPremove ? i.options.premoveHighlightColor : e.color || i.options.highlightColor,
                                opacity: e.isPremove ? i.options.premoveHighlightOpacity : i.options.highlightOpacity,
                                playerColor: 1 === i.sideToMove ? 2 : 1
                            }
                        });
                    n(r.b.REMOVE_SQUARES, {
                        type: r.f.MOVE
                    }), n(r.b.ADD_SQUARES, {
                        moveSquares: a,
                        type: r.f.MOVE
                    })
                },
                updateBoardImageState: function updateBoardImageState(e) {
                    var t = e.state;
                    t.board = function update_board_image_state_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? update_board_image_state_ownKeys(n, !0).forEach(function(t) {
                                u()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : update_board_image_state_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, t.board, {
                        boardBg: Object(C.a)(t.options.boardStyle, t.board.squareSize),
                        pieceBaseBg: Object(C.b)(t.options.pieceStyle, t.board.squareSize)
                    })
                },
                updateGameSettings: function updateGameSettings(e, t) {
                    var n = e.dispatch,
                        o = e.emit,
                        i = e.state;
                    i.gameSettings = function update_game_settings_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? update_game_settings_ownKeys(n, !0).forEach(function(t) {
                                u()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : update_game_settings_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, i.gameSettings, {}, t), n(T.UPDATE_BOARD_IMAGE_STATE), o(r.b.UPDATE_BOARD_IMAGE)
                },
                updateLegalMoves: function updateLegalMoves(e, t) {
                    var n = e.emit,
                        o = e.state,
                        i = t.legalMoves;
                    if (!Array.isArray(i)) return null;
                    o.legalMoves = s()(i), n(r.c.LEGAL_MOVES_UPDATED, o.legalMoves)
                },
                updateMarkings: function updateMarkings(e, t) {
                    var n = e.emit,
                        i = e.dispatch,
                        a = e.state;
                    a.arrows = t.arrows ? s()(t.arrows) : [], a.squares = t.squares ? s()(t.squares) : [], a.effects = t.effects ? s()(t.effects) : [], (t.blinkingSquares || []).forEach(function(e) {
                        return n(r.b.BLINK_SQUARE, e)
                    });
                    var c = a.options.highlightMoves ? Object(o.c)(a.selectedNode, a.premoves, a.squares) : Object(o.c)({}, a.premoves, a.squares);
                    i(T.SET_MOVE_SQUARES, c), i(T.UPDATE_SELECTED_PIECE_SQUARE), n(r.b.SET_ARROWS, a.arrows), n(r.b.SET_EFFECTS, a.effects), n(r.b.SET_SQUARES, a.squares)
                },
                updateOptions: function updateOptions(e, t) {
                    var n = e.dispatch,
                        i = e.emit,
                        a = e.state,
                        s = function getUpdates(e, t) {
                            var n = {};
                            return Object.keys(e).filter(function(n) {
                                return e[n] !== t[n]
                            }).forEach(function(t) {
                                n[t] = e[t]
                            }), n
                        }(t, a.options);
                    if (a.options = function update_options_objectSpread(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? update_options_ownKeys(n, !0).forEach(function(t) {
                                    u()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : update_options_ownKeys(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, a.options, {}, t), Boolean(s.highlightColor) ? a.options.highlightColor = s.highlightColor : A.a[a.options.boardStyle] && A.a[a.options.boardStyle].length >= 5 && (a.options.highlightColor = A.a[a.options.boardStyle][4]), void 0 !== s.highlightMoves || void 0 !== s.boardStyle || void 0 !== s.highlightColor) {
                        var c = a.options.highlightMoves ? Object(o.c)(a.selectedNode, a.premoves, a.squares) : Object(o.c)({}, a.premoves, a.squares);
                        n(T.SET_MOVE_SQUARES, c), n(T.UPDATE_SELECTED_PIECE_SQUARE)
                    }
                    void 0 !== s.overlayInAnalysisMode && i(r.b.UPDATE_BOARD_IMAGE), void 0 !== s.boardStyle && (n(T.UPDATE_BOARD_IMAGE_STATE), i(r.b.UPDATE_BOARD_IMAGE)), void 0 !== s.pieceStyle && (n(T.UPDATE_BOARD_IMAGE_STATE), i(r.b.UPDATE_PIECE_IMAGES)), void 0 === s.enabled && void 0 === s.flipBoard && void 0 === s.rounded || i(r.b.UPDATE_BOARD_CLASSES, t), void 0 !== s.flipBoard && i(r.b.FLIP_BOARD), !0 === a.options.autoPromote && null !== a.promotion.piece && "q" !== a.promotion.piece && n(T.SELECT_PROMOTION_PIECE, "q"), i(r.c.OPTIONS_CHANGED, s)
                },
                updateSelectedPieceSquare: function updateSelectedPieceSquare(e) {
                    var t = e.state,
                        n = e.emit,
                        i = t.selectedPiece;
                    if (n(r.b.REMOVE_SQUARES, {
                            type: r.f.SELECTION
                        }), t.options.highlightMoves && i) {
                        var a = !0;
                        if (t.premoves.forEach(function(e) {
                                (e.from && Object(o.h)(e.from, i) || e.to && Object(o.h)(e.to, i)) && (a = !1)
                            }), t.squares.forEach(function(e) {
                                Object(o.h)(e, i) && (a = !1)
                            }), a) {
                            var s = {
                                id: Object(o.f)(),
                                file: i.file,
                                rank: i.rank,
                                color: t.options.highlightColor,
                                opacity: t.options.highlightOpacity
                            };
                            n(r.b.ADD_SQUARES, {
                                moveSquares: [s],
                                type: r.f.SELECTION
                            })
                        }
                    }
                }
            },
            T = {
                ADD_CUSTOM_ITEM: "addCustomItem",
                CANCEL_PROMOTION: "cancelPromotion",
                CHANGE_POSITION: "changePosition",
                CLEAR_ARROW: "clearArrow",
                CLEAR_MARKINGS: "clearMarkings",
                CLEAR_SQUARE: "clearSquare",
                CLICK: "click",
                DESELECT_PIECE: "deselectPiece",
                DROPPABLE_DRAG_START: "droppableDragStart",
                DROPPABLE_DRAG_END: "droppableDragEnd",
                DRAG_CANCEL: "dragCancel",
                DRAG_MOVE: "dragMove",
                DRAG_START: "dragStart",
                DRAG_STOP: "dragStop",
                DROP_PIECE: "dropPiece",
                JUMP_TO_POSITION: "jumpToPosition",
                KEY_DOWN: "keyDown",
                MAKE_MOVE: "makeMove",
                MARK_ARROW: "markArrow",
                MARK_EFFECT: "markEffect",
                MARK_SQUARE: "markSquare",
                POINTERDOWN: "pointerdown",
                POINTERUP: "pointerup",
                REMOVE_CUSTOM_ITEM: "removeCustomItem",
                RESET_BOARD_STATE: "resetBoardState",
                RESIZE_BOARD: "resizeBoard",
                RIGHT_CLICK: "rightClick",
                SELECT_PIECE: "selectPiece",
                SELECT_PROMOTION_PIECE: "selectPromotionPiece",
                SET_BOARD_DIMENSIONS: "setBoardDimensions",
                SET_BUSY_FLAG: "setBusyFlag",
                SET_FROM_FILE_RANK: "setFromFileRank",
                SET_MOVE_SQUARES: "setMoveSquares",
                UPDATE_BOARD_IMAGE_STATE: "updateBoardImageState",
                UPDATE_LEGAL_MOVES: "updateLegalMoves",
                UPDATE_MARKINGS: "updateMarkings",
                UPDATE_OPTIONS: "updateOptions",
                UPDATE_GAME_SETTINGS: "updateGameSettings",
                UPDATE_SELECTED_PIECE_SQUARE: "updateSelectedPieceSquare"
            }
    },
    606: function(e, t, n) {
        "use strict";
        var r = n(451);
        n.n(r).a
    },
    607: function(e, t, n) {
        "use strict";
        var r = n(452);
        n.n(r).a
    },
    62: function(e, t, n) {
        "use strict";
        n.d(t, "g", function() {
            return o
        }), n.d(t, "a", function() {
            return i
        }), n.d(t, "f", function() {
            return a
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "d", function() {
            return u
        }), n.d(t, "b", function() {
            return l
        });
        var r = n(40),
            o = function isInsideBoard(e, t, n) {
                return Object(r.g)(e) ? e.file > 0 && e.file < t + 1 && e.rank > 0 && e.rank < n + 1 : null
            },
            i = function getCoordsInsideBoard(e, t, n) {
                var r = {};
                return void 0 !== e.file ? (r.file = Math.max(e.file, 1), r.file = Math.min(r.file, t || 8), r.rank = Math.max(e.rank, 1), r.rank = Math.min(r.rank, n || 8)) : void 0 !== e.x && (r.x = Math.max(e.x, 0), r.x = Math.min(r.x, e.boardRect.width), r.y = Math.max(e.y, 0), r.y = Math.min(r.y, e.boardRect.height), r.boardRect = e.boardRect), r
            },
            a = function getXYFromEvent(e, t) {
                var n, r, o = t.getBoundingClientRect(),
                    i = 0;
                return e.touches && e.pointer ? (n = e.pointer.x, r = e.pointer.y, i = Number(window.scrollY || 0)) : e.touches && e.touches[0] ? (n = e.touches[0].clientX, r = e.touches[0].clientY) : (n = e.clientX, r = e.clientY), {
                    x: n - o.left,
                    y: r - (o.top + i),
                    boardRect: o
                }
            },
            s = function getSquareOffset(e, t, n, r, o, i) {
                var a = e.boardRect.width / o,
                    s = i ? (8 - t) * a : (t - 1) * a,
                    c = i ? (n - 1) * a : (8 - n) * a;
                return {
                    offsetX: e.x - s,
                    offsetY: e.y - c
                }
            },
            c = function getFileRankFromCoords(e, t, n, r, o) {
                var i = e.boardRect.width / r,
                    a = Math.floor(e.x / i),
                    s = Math.floor(e.y / i);
                return {
                    file: o ? n - a : a + 1,
                    rank: o ? s + 1 : r - s
                }
            },
            u = function getFileRankFromMouseEvent(e, t, n) {
                return function getFileRankFromEvent(e, t, n, r, o) {
                    return c(a(e, t), t, n, r, o)
                }(e, t, n.board.files, n.board.ranks, n.options.flipBoard)
            },
            l = function getFileRankFromClassName(e) {
                var t = e.match(/square-(\d+)/);
                if (!t) return null;
                var n = t[1].match(/.{1,2}/g).map(function(e) {
                    return parseInt(e, 10)
                });
                return {
                    file: n[0],
                    rank: n[1]
                }
            }
    },
    68: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return i
        });
        var r = {
                getOptions: "web_user_callback_get_board_settings",
                getStyles: "web_themes_data_callback",
                updateOption: {
                    animationType: "web_user_game_settings_email_callback_animation_type",
                    boardStyle: "web_user_game_settings_email_callback_board_color",
                    coordinates: "web_user_game_settings_email_callback_coordinates",
                    darkMode: "web_user_game_settings_callback_dark_mode_toggle",
                    highlightLegalMoves: "web_user_game_settings_email_callback_show_legal_moves_toggle",
                    highlightMoves: "web_user_game_settings_email_callback_highlight_last_move_toggle",
                    moveListDisplayType: "web_user_game_settings_email_callback_move_list_display_type",
                    pieceStyle: "web_user_game_settings_email_callback_piece",
                    playSounds: "web_user_game_settings_email_callback_sound_toggle",
                    soundTheme: "web_user_game_settings_email_callback_sound_theme"
                }
            },
            o = [{
                key: "0",
                value: null
            }, {
                key: "1",
                value: "inside"
            }, {
                key: "2",
                value: "outside"
            }],
            i = {
                pieces: ["real3d"],
                animations: ["arcade", "natural"]
            }
    },
    7: function(e, t, n) {
        "use strict";
        t.a = new class Router {
            constructor() {
                this.baseUrl = null, null == window.Routing && (window.Routing = {
                    generate: function generate(e) {
                        return e
                    }
                })
            }
            generate(e, t, n) {
                var r = t || {},
                    o = this.baseUrl || r.baseUrl || null;
                return "string" == typeof r.username && (r.username = r.username.toLowerCase()), null != o ? (delete r.baseUrl, o + window.Routing.generate(e, r, !1)) : window.Routing.generate(e, r, n)
            }
            setBaseUrl(e) {
                this.baseUrl = e
            }
        }
    },
    86: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "d", function() {
            return s
        }), n.d(t, "f", function() {
            return c
        }), n.d(t, "b", function() {
            return u
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "g", function() {
            return d
        });
        var r = n(3),
            o = n.n(r);

        function ownKeys(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n
        }

        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                    o()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var i = function objectIsEmpty(e) {
            return e && !Object.keys(e).length
        };
        var a = function objectHasData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e && Object.keys(e).length > 0
        };
        var s = function objectHasProp() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            c = function objectWithExcludedProps(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return Object.keys(e).filter(function(e) {
                    return !t.includes(e)
                }).reduce(function(t, n) {
                    return _objectSpread({}, t, o()({}, n, e[n]))
                }, {})
            },
            u = function invertObject(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return _objectSpread({}, t, o()({}, e[n], n))
                }, {})
            },
            l = function hasProperty(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            d = function transformObjectBooleansToBinaryString(e) {
                return Object.keys(e).reduce(function(t, n) {
                    var r = e[n];
                    return "boolean" == typeof r && (r = r ? "1" : "0"), t[n] = r, t
                }, {})
            }
    },
    945: function(e, t, n) {
        "use strict";
        var r = n(512);
        n.n(r).a
    },
    946: function(e, t, n) {
        "use strict";
        var r = n(513);
        n.n(r).a
    },
    97: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = "a/",
            o = {
                paths: {
                    boards: "".concat(r, "b"),
                    pieces: "".concat(r, "b"),
                    sounds: "".concat(r, "b"),
                    variants: "//betacssjs.chesscomfiles.com/bundles/web/images/variants",
                    webglData: "/bundles/web/images/webgl_data"
                },
                defaultBoardOptions: {
                    boardStyle: "green",
                    pieceStyle: "neo",
                    highlightColor: "#FFFF33",
                    highlightOpacity: .5,
                    arrowColor: "rgb(255, 168, 0)",
                    flipped: !1,
                    files: 8,
                    ranks: 8
                }
            }
    }
});