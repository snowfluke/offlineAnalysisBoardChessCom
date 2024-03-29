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
    }, __webpack_require__.p = "/bundles/app/js/", __webpack_require__(__webpack_require__.s = 1155)
}([function(e, t, n) {
    "use strict";
    var r = n(10);
    t.a = r.a
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }), n.d(t, "b", function() {
        return a
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
        a = {
            MAX_HISTORY_LIMIT: 200,
            getInitialHistory: function getInitialHistory() {
                return []
            },
            add: function add(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (e.length > a.MAX_HISTORY_LIMIT - 1) {
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
}, function(e, t, n) {
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
                    var a = r.getLine(e, Math.max(0, t));
                    return a ? a[n] : null
                }
                return null
            }
            if (!t) return null;
            var o = r.getLine(e, Math.max(0, t.line));
            return o ? o[t.move] : null
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
                var a = r.getNode(e, n.parentId, n.atMoveNode);
                return !(!a || !a.move) && a.move === n[0].move
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
            var a = n.lines.find(function(t) {
                return r.isContinuation(e, t)
            });
            return -1 !== a ? a : null
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
                var a = r.getNode(e, {
                    line: n.parentId,
                    move: n.atMoveNode
                });
                a.lines = a.lines.filter(function(e) {
                    return e !== t
                }), 0 === a.lines.length && delete a.lines
            }
            var o = e.filter(function(e) {
                return r.isMainLine(e.id) || e.id !== t
            });
            return r.rebuildIds(o)
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
            var a = r.getNode(e, t);
            return !!a && (a.from === n.from && a.to === n.to && (a.promotion || null) === (n.promotion || null))
        },
        shouldMatchMove: function shouldMatchMove(e, t, n) {
            return e && 1 === t && 0 === n
        },
        getNextMatchingNode: function getNextMatchingNode(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0,
                a = r.getNode(e, t),
                o = r.getNode(e, t.line, t.move + 1);
            return e.reduce(function(e, t) {
                return e.concat(t)
            }, []).filter(function(e) {
                return a && e.moveNumber === a.moveNumber + 1 || o && e.moveNumber === o.moveNumber
            }).filter(function(t) {
                return !!(a && t.ids.line === a.ids.line || o && t.ids.line === o.ids.line) || (!!(a && a.lines && -1 !== a.lines.indexOf(t.ids.line) && r.isContinuation(e, t.ids.line)) || !(!o || !o.lines || -1 === o.lines.indexOf(t.ids.line) || r.isContinuation(e, t.ids.line)))
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
                a = arguments.length > 2 ? arguments[2] : void 0,
                o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
            if (!e || void 0 === n.line) return null;
            if ("string" == typeof a) switch (n.move) {
                case "begin":
                    n.move = 0;
                    break;
                case "end":
                    n.move = e[0].length - 1
            } else if (void 0 === n.move) return e[n.line];
            return a && 0 !== Math.abs(a) && (n = new Array(Math.abs(a)).fill(a / Math.abs(a)).reduce(function(n, a) {
                if (null === n) return null;
                var i = r.isContinuation(e, n.line),
                    s = r.getNextNodeIds(n, a);
                if (r.getNode(e, s) && (-1 !== a || !i || 0 !== s.move)) return s;
                switch (a) {
                    case 1:
                        return o ? n : null !== (t = r.getNextContinuationLineId(e, n)) ? {
                            line: t,
                            move: 1
                        } : null;
                    case -1:
                        return s = i ? r.getParentNodeIds(e, n) : r.getNextNodeIds(r.getParentNodeIds(e, n), -1), r.getNode(e, s) ? s : n;
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
}, function(e, t, n) {
    e.exports = n(26)(5)
}, function(e, t, n) {
    "use strict";
    var r = n(21),
        a = n(2),
        o = n(50),
        i = n(22);
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
                    to: i.a.getSanFromFileRank({
                        file: r,
                        rank: n
                    })
                })
            })
        },
        addCastlingMoves960: function addCastlingMoves960(e, t) {
            for (var n = i.a.getFileRankFromSan(t.from).rank, r = 1, a = 0; a < 2;) {
                var o = i.a.getPieceAt(e, {
                    file: r,
                    rank: n
                });
                void 0 !== o && "r" === o.type && a++, (1 === a && 32 === t.flags || 2 === a && 16 === t.flags) && e.setup.legalMoves.push({
                    color: t.color,
                    flags: t.flags,
                    piece: "k",
                    from: t.from,
                    san: 16 === t.flags ? "O-O" : "O-O-O",
                    to: i.a.getSanFromFileRank({
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
                var a = t.from ? e.jce.get(t.from) : null,
                    o = t.to ? e.jce.get(t.to) : null;
                if (a && o && "k" === o.type) return null;
                e.jce.remove(t.to), e.jce.remove(t.from);
                var i = t.drop || t.put;
                r = e.jce.put(a || {
                    type: i.toLowerCase(),
                    color: i && i.toUpperCase() === i ? 1 : 2
                }, t.to), t.from && a && null === t.to && (r = !0)
            } else t.drop && (t.drop = t.drop.toLowerCase()), r = e.jce.move(t);
            return r && s.updateIdsFromJce(e), r
        },
        selectLine: function selectLine(e, t) {
            var n = a.a.getLine(e.tree.lines, t);
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
            var t = o.a.getTcn(e);
            return t.substr(t.length - 2)
        },
        getSanMoves: function getSanMoves(e, t) {
            var r = [];
            return (e.tree.lines || n(44).default.state.lines)[0].some(function(e, n) {
                return "number" == typeof t && n >= t || (r.push(e.san), !1)
            }), r
        }
    }
}, function(e, t, n) {
    "use strict";

    function normalizeComponent(e, t, n, r, a, o, i, s) {
        var c, l = "function" == typeof e ? e.options : e;
        if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), o && (l._scopeId = "data-v-" + o), i ? (c = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
            }, l._ssrRegister = c) : a && (c = s ? function() {
                a.call(this, this.$root.$options.shadowRoot)
            } : a), c)
            if (l.functional) {
                l._injectStyles = c;
                var u = l.render;
                l.render = function renderWithStyleInjection(e, t) {
                    return c.call(t), u(e, t)
                }
            } else {
                var d = l.beforeCreate;
                l.beforeCreate = d ? [].concat(d, c) : [c]
            }
        return {
            exports: e,
            options: l
        }
    }
    n.d(t, "a", function() {
        return normalizeComponent
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return l
    });
    var r = n(3),
        a = n.n(r),
        o = n(2),
        i = n(4);

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
    var s = {},
        c = {
            q: 9,
            r: 5,
            b: 3,
            n: 3,
            p: 1,
            k: 0
        },
        l = {
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
                return e.setup = l.getInitialSetup(), e
            },
            updateState: function updateState(e) {
                e.setup = Object.assign({}, e.setup, i.a.getPositionInfo(e), i.a.getPositionDetails(e)), i.a.addExtraCastlingMoves(e), e.tree.lines = o.a.getLinesFromJce(e), e.tree.selected = e.jce.ids(), e.tree.selectedNode = o.a.getSelectedNode(e), e.setup.capturedPieces = l.getCapturedPieces(e.setup), e.setup.capturedScores = l.getCapturedScores(e.setup), e.setup.result = l.getResult(e), e.premoves = i.a.getPremoves(e), e.variant = i.a.getHeaders(e).Variant || e.variant, e.startingMoveNumber = e.setup.moveNumber;
                var t = o.a.getNode(e.tree.lines, i.a.getSelectedIds(e)) || e.tree.initialMarkings;
                return t && (e.markings.squares = t.squares ? t.squares.map(function(e) {
                    return _objectSpread({}, e)
                }) : [], e.markings.arrows = t.arrows ? t.arrows.map(function(e) {
                    return _objectSpread({}, e)
                }) : [], e.setup.effects ? e.markings.effects = e.setup.effects : t.effects ? e.markings.effects = t.effects.map(function(e) {
                    return _objectSpread({}, e)
                }) : e.markings.effects = []), s[e.id] = !0, e.sibling && !s[e.sibling.id] && (e.sibling = l.updateState(e.sibling)), s = {}, e
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
                var t = i.a.getHeaders(e).Result;
                return "*" !== t ? t : e.setup.insufficient || e.setup.stalemate ? "1/2-1/2" : e.setup.gameOver && !e.setup.draw ? 1 === e.setup.sideToMove ? "0-1" : "1-0" : "*"
            }
        }
}, function(e, t, n) {
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
                a = this.baseUrl || r.baseUrl || null;
            return "string" == typeof r.username && (r.username = r.username.toLowerCase()), null != a ? (delete r.baseUrl, a + window.Routing.generate(e, r, !1)) : window.Routing.generate(e, r, n)
        }
        setBaseUrl(e) {
            this.baseUrl = e
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var r = n(7),
        a = function generateRoute(e, t, n) {
            var a = e,
                o = t;
            if (n) {
                var i = document.querySelector("[data-url-locale]"),
                    s = i && i.getAttribute("data-url-locale"),
                    c = s && "en" !== s.split("_")[0] && s.split("_")[0];
                c && o && (a = "i18n_".concat(a), o._locale = c)
            }
            return r.a.generate(a, o)
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }), n.d(t, "b", function() {
        return i
    }), n.d(t, "c", function() {
        return s
    }), n.d(t, "h", function() {
        return c
    }), n.d(t, "f", function() {
        return l
    }), n.d(t, "d", function() {
        return u
    }), n.d(t, "g", function() {
        return d
    }), n.d(t, "e", function() {
        return p
    });
    var r = n(7),
        a = n(0),
        o = {
            ARIA_CONTROLS: "aria-controls",
            AVATAR: "data-avatar",
            CUSTOM_BTN_CLASS: "data-custom-btn-class",
            CUSTOM_COLLAPSE_CLASS: "data-custom-collapse-class",
            DARK_MODE: "data-dark-mode",
            ICON_BUTTON: "data-icon-button",
            STATS: "data-stats",
            SURVEY_DATA: "data-survey",
            SURVEY_VOTED: "data-voted-survey",
            USERNAME: "data-username",
            VS_STATS: "data-vs-stats"
        },
        i = {
            getArticleAuthors: "web_article_callback_list_authors",
            getBlogAuthors: "web_blog_callback_authors",
            getContent: "web_content_callback_load_more",
            getNewsAuthors: "web_news_callback_list_authors"
        },
        s = {
            GRID_VIEW: "grid",
            LIST_VIEW: "list",
            LOCALE: window.context && window.context.locale || "en_US",
            LOGGED_IN: window.context && window.context.user,
            USERNAME: window.context && window.context.user ? window.context.user.username : null
        },
        c = {
            category: function category(e) {
                return a.a.trans(e, {}, "dynamic")
            },
            loading: a.a.trans("Loading..."),
            showMore: a.a.trans("More"),
            showLess: a.a.trans("Less")
        },
        l = {
            AMPLITUDE_LOGGER: "amplitude-logger",
            BASE_CONTAINER: ".base-container",
            BOARD_POPOVER: "v-board-popover",
            CAPTCHA: "captcha",
            COLLAPSE: "v-toggle-collapse",
            COLLAPSED: "toggle-collapsed",
            CONTENT_AD: "content-ad",
            CONTENT_CATEGORY_SELECT: "content-category-select",
            CONTENT_LANGUAGE_SELECT: "content-language-select",
            CONFIRM_OPEN: "confirm-open",
            CONFIRM_POPOVER: "v-confirm-popover",
            CONFIRM_POPOVER_INLINE: "confirm-popover-inline",
            FEATURE_SIDEBAR_LINK: "post-category-link-feature",
            FILTERS: "page-filters",
            FORM_DATEPICKER: "v-datepicker",
            FORM_DROPDOWN: "form-dropdown",
            GAME_PREVIEW: "game-preview",
            GIFT_MEMBERSHIP_MODAL: "gift-membership-modal",
            HEADLINE_SIDEBAR_LINK: "post-category-link-headline",
            HIDDEN: "toggle-hidden",
            LANGUAGE_DROPDOWN: "post-view-languages",
            MESSAGE_PARENT: "vue-message",
            NAVIGATION_FOOTER: "navigation-footer",
            NEW_GAME: "new-game",
            NEW_GAME_BUTTON: "new-game-button",
            PAGINATION_BOTTOM: "pagination-bottom",
            PAGINATION_TOP: "pagination-top",
            POST_AUTHOR_FOLLOW: "post-author-follow",
            POST_CAN_EDIT_URL: "post-can-edit-url",
            POST_EDIT_URL: "post-edit-url",
            POST_EDIT_URL_FIELD: "post-edit-url-field",
            POST_IMAGE_BUTTON: "image-upload-button",
            POST_IMAGE_THUMBNAIL: "image-upload-thumbnail",
            SCROLL_TOP_ANCHOR: "scroll-top-anchor",
            SHORT_SIDEBAR_AD_BOTTOM: "short-sidebar-ad-bottom",
            SHORT_SIDEBAR_AD_TOP: "short-sidebar-ad-top",
            SIDEBAR_STATS: "sidebar-stats",
            SIDEBAR_SURVEY: "sidebar-survey",
            SIDEBAR_TOGGLE_BUTTON_TEXT: "toggle-content-button-text",
            SIDEBAR_TOGGLE_ICON: "toggle-content-icon",
            SIDEBAR_USER_ITEMS: "sidebar-users-grid-toggle-item",
            SIDEBAR_USERS_TOGGLE_BUTTON: "toggle-content-button",
            STAT_CHART: "stat-chart",
            TOOLTIP: "v-tooltip",
            TOOLTIP_CLASS: "tooltip",
            TOOLTIP_TOP: "top",
            USER_POPOVER: "v-user-popover",
            USER_TAGLINE: "post-view-meta-user",
            VERSION_DROPDOWN: "version-dropdown"
        },
        u = {
            SHOW_MODAL: "show-confirm-popover",
            VOTE_COUNTED: "vote-counted",
            VIEW_CHANGE: "view-change",
            VIEW_GRID: "view-grid",
            VIEW_LIST: "view-list"
        },
        d = {
            changeContentLanguage: function changeContentLanguage() {
                return r.a.generate("web_user_callback_set_content_language")
            },
            enPassant: function enPassant() {
                return r.a.generate("web_article_view", {
                    url: "how-to-capture-en-passant"
                })
            },
            surveyVote: function surveyVote(e, t) {
                return r.a.generate("web_survey_callback_vote", {
                    id: e,
                    optionId: t
                })
            },
            redirectToLoginPage: function redirectToLoginPage(e) {
                return r.a.generate("web_security_login_and_go", {
                    redirectUrl: e
                })
            },
            teamMatch: function teamMatch(e) {
                return r.a.generate("web_team_match_view", {
                    match: e
                })
            },
            tournament: function tournament(e) {
                return r.a.generate("web_tournament_view", {
                    url: e
                })
            },
            userProfile: function userProfile(e) {
                return r.a.generate("web_member_view", {
                    username: e
                })
            }
        },
        p = JSON.parse(localStorage.getItem("json_settings"))
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return s
    }), n.d(t, "c", function() {
        return c
    }), n.d(t, "a", function() {
        return l
    });
    var r = n(51),
        a = n.n(r);
    a.a.placeHolderPrefix = "", a.a.placeHolderSuffix = "";
    var o = function escapeParameters(e) {
            var t = {};
            return null != e && Object.keys(e).forEach(function(n) {
                var r = function escapeRegExp(e) {
                    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                }(n);
                null != r && r.length > 0 && (t[r] = e[n])
            }), t
        },
        i = function getTranslatedPhrase(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "messages",
                n = arguments.length > 2 ? arguments[2] : void 0;
            return window.chesscom_translations && window.chesscom_translations[t] && window.chesscom_translations[t][e] ? window.chesscom_translations[t][e] : window.chesscom_live_translations && window.chesscom_live_translations[t] && window.chesscom_live_translations[t][e] ? window.chesscom_live_translations[t][e] : "live" === t && window.i18n_phrases && window.i18n_phrases[e] ? window.i18n_phrases : "countries" === t && window.Country && window.Country[e] ? window.Country : n ? void 0 : "javascript" !== t ? getTranslatedPhrase(e, "javascript") : e
        },
        s = function trans(e, t, n) {
            return a.a.trans(i(e, n), o(t), n)
        },
        c = function transChoice(e, t, n, r) {
            return void 0 === t ? "" : a.a.transChoice(i(e, r), t, o(n))
        },
        l = {
            trans: s,
            transChoice: c
        }
}, function(e, t, n) {
    e.exports = n(26)(2)
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
        return l
    }), n.d(t, "e", function() {
        return u
    }), n.d(t, "g", function() {
        return d
    }), n.d(t, "c", function() {
        return p
    }), n.d(t, "b", function() {
        return m
    }), n.d(t, "a", function() {
        return f
    }), n.d(t, "n", function() {
        return h
    }), n.d(t, "o", function() {
        return g
    }), n.d(t, "p", function() {
        return b
    }), n.d(t, "k", function() {
        return v
    }), n.d(t, "l", function() {
        return y
    }), n.d(t, "m", function() {
        return _
    }), n.d(t, "h", function() {
        return w
    }), n.d(t, "j", function() {
        return O
    }), n.d(t, "i", function() {
        return E
    }), n.d(t, "f", function() {
        return k
    });
    var r, a, o = n(3),
        i = n.n(o),
        s = n(7),
        c = n(0);

    function ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var l = {
            CAN_EDIT_FLAIR: "data-can-edit-flair",
            IS_ENABLED: "data-is-enabled",
            MEMBERSHIP_LEVEL: "data-membership-level",
            USERNAME: "data-username",
            USER_ID: "data-user-id"
        },
        u = {
            REPORT_USER: "web_user_callback_report_user",
            USER_POPUP: "web_user_callback_popup"
        },
        d = [{
            key: "membership_icons",
            title: c.a.trans("Membership Icons")
        }, {
            key: "emoji",
            title: c.a.trans("Emoji")
        }, {
            key: "chess",
            title: c.a.trans("Chess")
        }, {
            key: "holiday",
            title: c.a.trans("Holiday")
        }, {
            key: "hosts",
            title: c.a.trans("Hosts")
        }, {
            key: "computer_chess",
            title: c.a.trans("Computer Chess")
        }, {
            key: "pro_chess_league",
            title: c.a.trans("PRO Chess League")
        }],
        p = {
            category: "membership_icons",
            code: "nothing",
            description: c.a.trans("Nothing"),
            id: 206,
            imageCode: "nothing",
            membershipLevelCode: "staff",
            name: c.a.trans("Nothing"),
            status: ""
        },
        m = "diamond_traditional",
        f = ["blocked", "clear", "clear_light"],
        h = {
            USER_POPOVER_CONTAINER: "user-popover",
            USER_FLAIR: "user-flair"
        },
        g = {
            about: function about() {
                return s.a.generate("web_about")
            },
            membership: function membership() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "icon";
                return s.a.generate("web_membership", {
                    c: e
                })
            },
            usernameSearch: function usernameSearch(e) {
                return s.a.generate("web_user_callback_username_search", function _objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ownKeys(n, !0).forEach(function(t) {
                            i()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({
                    activeDays: 4e3
                }, e))
            }
        },
        b = {
            acceptFriendRequest: c.a.trans("Accept Friend Request"),
            addFriend: c.a.trans("Add Friend"),
            block: c.a.trans("Block"),
            blockConfirm: c.a.trans("Are you sure you want to block this user?"),
            cancel: c.a.trans("Cancel"),
            cancelFriendRequest: c.a.trans("Cancel Friend Request"),
            challenge: c.a.trans("Challenge"),
            follow: c.a.trans("Follow"),
            gameArchive: c.a.trans("Game Archive"),
            giftMembership: c.a.trans("Gift Membership"),
            giveTrophy: c.a.trans("Give Award"),
            joinedDate: function joinedDate(e) {
                return c.a.trans("Joined %1$s%", {
                    "%1$s%": e
                })
            },
            lastOnline: function lastOnline(e) {
                return c.a.trans("Online %1$s%", {
                    "%1$s%": e
                })
            },
            moderator: c.a.trans("Moderator"),
            onlineNow: c.a.trans("Online Now"),
            inLiveNow: c.a.trans("In Live"),
            removeFriend: c.a.trans("Remove Friend"),
            removeFriendConfirm: c.a.trans("Are you sure you want to remove this friend from your list?"),
            report: c.a.trans("Report"),
            reportUser: function reportUser(e) {
                return c.a.trans("Report %username%", {
                    "%username%": e
                })
            },
            sendMessage: c.a.trans("Send Message"),
            showYourFlair: c.a.trans("Show your flair!"),
            staff: c.a.trans("Staff"),
            unblock: c.a.trans("Unblock"),
            unfollow: c.a.trans("Unfollow"),
            userReportError: c.a.trans("Tell us more...")
        },
        v = {
            cheater: 5,
            abuser: 6,
            voluntarilyClosed: 7,
            unspecifiedClosed: 8,
            basic: 10,
            silver: 20,
            gold: 30,
            platinum: 40,
            diamond: 50,
            moderator: 80,
            staff: 90
        },
        y = (r = {}, i()(r, v.diamond, "diamond"), i()(r, v.abuser, "abuser"), i()(r, v.cheater, "cheater"), i()(r, v.voluntarilyClosed, "inactive"), i()(r, v.unspecifiedClosed, "cheater"), i()(r, v.gold, "gold"), i()(r, v.moderator, "pawn-blue"), i()(r, v.platinum, "platinum"), i()(r, v.staff, "pawn-green"), r),
        _ = (a = {}, i()(a, v.basic, c.a.trans("Basic Membership")), i()(a, v.diamond, c.a.trans("Diamond Membership")), i()(a, v.cheater, c.a.trans("Closed: Fair Play")), i()(a, v.abuser, c.a.trans("Closed: Abuse")), i()(a, v.voluntarilyClosed, c.a.trans("Closed: Inactive")), i()(a, v.unspecifiedClosed, c.a.trans("Account Closed")), i()(a, v.gold, c.a.trans("Gold Membership")), i()(a, v.moderator, c.a.trans("Moderator Account")), i()(a, v.platinum, c.a.trans("Platinum Membership")), i()(a, v.silver, c.a.trans("Silver Membership")), i()(a, v.staff, c.a.trans("Staff Account")), a),
        w = {
            GM: c.a.trans("Grandmaster"),
            WGM: c.a.trans("Woman Grandmaster"),
            IM: c.a.trans("International Master"),
            WIM: c.a.trans("Woman International Master"),
            FM: c.a.trans("FIDE Master"),
            WFM: c.a.trans("Woman FIDE Master"),
            NM: c.a.trans("National Master"),
            CM: c.a.trans("FIDE Candidate Master"),
            WCM: c.a.trans("FIDE Woman Candidate Master"),
            WNM: c.a.trans("Woman National Master")
        },
        O = function isOnline(e) {
            return !0 === e || "online" === e
        },
        E = function isLive(e) {
            return "onlive" === e
        },
        k = {
            AUTOCOMPLETE_CLEAR_SELECTED: "form-autocomplete-clear-selected"
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    }), n.d(t, "b", function() {
        return o
    }), n.d(t, "e", function() {
        return i
    }), n.d(t, "f", function() {
        return s
    }), n.d(t, "g", function() {
        return c
    }), n.d(t, "d", function() {
        return l
    }), n.d(t, "c", function() {
        return u
    });
    var r = n(0),
        a = 4e3,
        o = {
            badRequest: r.a.trans("There was an error processing the request. Please try again.")
        },
        i = {
            avatarUploaded: r.a.trans("Avatar uploaded"),
            commentCreated: r.a.trans("Thank you for your comment."),
            commentDeleted: r.a.trans("Comment deleted."),
            commentEmptyContent: r.a.trans("You cannot send an empty comment"),
            commentMarkedAsSpam: r.a.trans("Comment marked as spam."),
            commentUpdated: r.a.trans("Comment updated."),
            commentLinkCopied: r.a.trans("Comment link is copied to clipboard"),
            forumsMarkedAsRead: r.a.trans("All forum topics have been marked as read"),
            featureBlog: r.a.trans("Feature Set! It might take a minute or two to appear."),
            pgnCopied: r.a.trans("PGN copied to buffer")
        },
        s = {
            ALERT_FLASH_CONTAINER: "widget-alert-flash",
            DISMISSING: "alert-banner-dismissing"
        },
        c = {
            error: "error",
            info: "info",
            success: "success"
        },
        l = "create-header-alert",
        u = {
            type: c.error,
            message: o.badRequest
        }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    }), n.d(t, "c", function() {
        return o
    }), n.d(t, "b", function() {
        return i
    }), n.d(t, "d", function() {
        return s
    });
    var r = n(86),
        a = function defaultNodeLimit() {
            return {
                begin: {},
                focus: {},
                end: {}
            }
        },
        o = {
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
        i = Object(r.b)(o),
        s = {
            DIAGRAM_EDITOR: "diagram-editor-container"
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return l
    });
    var r = n(3),
        a = n.n(r),
        o = n(4),
        i = n(2),
        s = n(1),
        c = n(6);

    function ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var l = function selectNode(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            l = i.a.findNode(e.jce._lines(), t, n, r),
            u = function _objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ownKeys(n, !0).forEach(function(t) {
                        a()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, e.tree.selected),
            d = u.line,
            p = u.move;
        if (!l) return e;
        var m = {};
        return m = t.move + n < 0 && t.line === l.ids.line ? {
            line: 0,
            move: -1
        } : l.ids, o.a.selectNode(e, m), s.b.add(e.history, s.a.JUMP_TO_POSITION, {
            from: {
                line: d,
                move: p
            },
            to: m
        }), c.a.updateState(e)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "h", function() {
        return i
    }), n.d(t, "f", function() {
        return s
    }), n.d(t, "g", function() {
        return c
    }), n.d(t, "b", function() {
        return l
    }), n.d(t, "a", function() {
        return u
    }), n.d(t, "c", function() {
        return d
    }), n.d(t, "i", function() {
        return p
    }), n.d(t, "j", function() {
        return m
    }), n.d(t, "d", function() {
        return f
    }), n.d(t, "e", function() {
        return h
    });
    var r = n(303),
        a = (n(7), n(12)),
        o = window.context,
        i = function isLoggedIn() {
            return !(!o || !o.user || Object(r.a)())
        },
        s = function isEnabled() {
            return !(!i() || !o.user.isEnabled)
        },
        c = function isImpersonating() {
            return !(!i() || !o.user.isImpersonating)
        },
        l = function eligibleFirstTrial() {
            return !(!i() || !o.user.eligibleFirstTrial)
        },
        u = function checkUserStatus(e) {
            if (!i()) return !1;
            var t = !1;
            switch (e) {
                case "isActivated":
                    t = o.user.isActivated;
                    break;
                case "isStaff":
                    t = o.user.membershipLevel >= a.k.staff;
                    break;
                case "isStaffOnly":
                    t = o.user.membershipLevel === a.k.staff;
                    break;
                case "isModerator":
                    t = o.user.membershipLevel >= a.k.moderator;
                    break;
                case "isModeratorOnly":
                    t = o.user.membershipLevel === a.k.moderator;
                    break;
                case "isDiamond":
                    t = o.user.membershipLevel >= a.k.diamond;
                    break;
                case "isDiamondOnly":
                    t = o.user.membershipLevel === a.k.diamond;
                    break;
                case "isPlatinum":
                    t = o.user.membershipLevel >= a.k.platinum;
                    break;
                case "isPlatinumOnly":
                    t = o.user.membershipLevel === a.k.platinum;
                    break;
                case "isSilver":
                    t = o.user.membershipLevel >= a.k.silver;
                    break;
                case "isSilverOnly":
                    t = o.user.membershipLevel === a.k.silver;
                    break;
                case "isGold":
                    t = o.user.membershipLevel >= a.k.gold;
                    break;
                case "isGoldOnly":
                    t = o.user.membershipLevel === a.k.gold;
                    break;
                case "isPremium":
                    t = o.user.membershipLevel >= a.k.silver;
                    break;
                case "isBasic":
                    t = o.user.membershipLevel === a.k.basic;
                    break;
                case "chessTitle":
                    t = o.user.chessTitle;
                    break;
                default:
                    t = !1
            }
            return t
        },
        d = function getAdditionalUserInfo(e) {
            if (!i()) return "diagramSettings" === e ? {} : null;
            var t = !1;
            switch (e) {
                case "cohort":
                    t = o.user.cohort;
                    break;
                case "flairCode":
                    t = o.user.flairCode;
                    break;
                case "getUserId":
                    t = o.user.id;
                    break;
                case "getUsername":
                    t = o.user.username;
                    break;
                case "getAvatarUrl":
                    t = o.user.avatarUrl;
                    break;
                case "getAvatarLargeUrl":
                    t = o.user.avatarLargeUrl;
                    break;
                case "getSettingsAvatarUrl":
                    t = o.user.settingsAvatarUrl;
                    break;
                case "getLastLoginDate":
                    t = o.user.lastLoginDate;
                    break;
                case "registerDate":
                    t = o.user.registerDate;
                    break;
                case "getBrowserTimezone":
                    t = window.jstz.determine().name();
                    break;
                case "getTimezone":
                    t = o.user.timezone;
                    break;
                case "getDiagramSettings":
                    t = o.diagramSettings;
                    break;
                case "language":
                    t = o.i18n.locale;
                    break;
                case "contentLanguage":
                    t = o.i18n.contentLanguage;
                    break;
                case "speaksEnglish":
                    t = "en_US" === o.i18n.locale;
                    break;
                case "eligibleFirstTrial":
                    t = o.user.eligibleFirstTrial;
                    break;
                case "fairPlayAgree":
                    t = o.user.fairPlayAgree;
                    break;
                case "getArchiveView":
                    t = o.user.archiveView ? o.user.archiveView : "grid";
                    break;
                case "homeContentType":
                    t = "following";
                    break;
                case "showAlertsOnHome":
                    t = o.user.showAlertsOnHome;
                    break;
                case "getMembershipLevel":
                    t = o.user.membershipLevel;
                    break;
                case "isClassicTheme":
                    t = o.user.isClassicTheme;
                    break;
                case "isContentHidden":
                    t = o.user.isContentHidden;
                    break;
                case "isDarkMode":
                    t = o.user.isDarkMode;
                    break;
                case "isUserTwitchSub":
                    t = o.user.isUserTwitchSub;
                    break;
                case "safeMode":
                    t = o.user.safeMode;
                    break;
                case "uuid":
                    t = o.user.uuid;
                    break;
                default:
                    t = !1
            }
            return t
        },
        p = function isValidArchiveView(e) {
            return "grid" === e || "list" === e
        },
        m = function isValidHomeContentType(e) {
            return "following" === e || "my_activity" === e
        },
        f = function getFeatures() {
            return i() ? o.user.features : {}
        },
        h = function getMembershipNumber(e, t) {
            return !t && e >= a.k.basic ? a.k.unspecifiedClosed : e
        }
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "icon-font",
            mixins: [{
                props: {
                    family: {
                        type: String,
                        default: "chess"
                    },
                    isDarkMode: {
                        type: Boolean,
                        default: !1
                    },
                    name: {
                        type: String,
                        required: !0
                    },
                    theme: {
                        type: String,
                        default: ""
                    }
                }
            }]
        },
        a = n(93),
        o = n(5);
    var i = Object(o.a)(r, function() {
        var e, t = this,
            n = t.$createElement,
            r = t._self._c || n;
        return r("div", t._g({
            class: [t.$style.component, (e = {}, e[t.$style.darkMode] = t.isDarkMode, e)]
        }, t.$listeners), [r("span", {
            class: [t.$style[t.family], t.name, t.$style[t.theme]]
        })])
    }, [], !1, function injectStyles(e) {
        this.$style = a.default.locals || a.default
    }, null, null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }), n.d(t, "b", function() {
        return formatNumber
    });
    var r = n(0);

    function getLocale() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
        return (e || (Object.prototype.hasOwnProperty.call(window, "context") ? window.context.i18n.locale : "en-US")).replace("_", t)
    }
    var a = {
            year: {
                milliseconds: 31536e6,
                str: "{1} 1 year|]1,Inf] %1$s% years",
                strAgo: "{1} 1 year ago|]1,Inf] %1$s% years ago"
            },
            month: {
                milliseconds: function getMsInThisMonth() {
                    switch ((new Date).getMonth()) {
                        case 3:
                        case 5:
                        case 8:
                        case 10:
                            return 2592e6;
                        case 1:
                            return (new Date).getFullYear() % 4 == 0 ? 25056e5 : 24192e5;
                        default:
                            return 26784e5
                    }
                }(),
                str: "{1} 1 month|]1,Inf] %1$s% months",
                strAgo: "{1} 1 month ago|]1,Inf] %1$s% months ago"
            },
            day: {
                milliseconds: 864e5,
                str: "{1} 1 day|]1,Inf] %1$s% days",
                strAgo: "{1} 1 day ago|]1,Inf] %1$s% days ago"
            },
            hour: {
                milliseconds: 36e5,
                str: "{1} 1 hour|]1,Inf] %1$s% hours",
                strAgo: "{1} 1 hour ago|]1,Inf] %1$s% hours ago"
            },
            minute: {
                milliseconds: 6e4,
                str: "{1} 1 minute|]1,Inf] %1$s% minutes",
                strAgo: "{1} 1 minute ago|]1,Inf] %1$s% minutes ago"
            }
        },
        o = {
            hoursMinute: function hoursMinute(e) {
                var t, n, a = [],
                    o = 0,
                    i = e;
                return !0 === (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) && (i -= 86400 * (o = Math.floor(i / 86400))), i -= 3600 * (t = Math.floor(i / 3600)), n = Math.floor(i / 60), o > 0 && a.push(r.a.transChoice("{0} 0 days|{1} 1 day|]1,Inf] %1$s% days", o, {
                    "%1$s%": o
                })), t > 0 && a.push(r.a.transChoice("{0} 0 hours|{1} 1 hour|]1,Inf] %1$s% hours", t, {
                    "%1$s%": t
                })), (n > 0 || 0 === a.length) && a.push(r.a.transChoice("{0} 0 min|{1} 1 min|]1,Inf] %1$s% min", n, {
                    "%1$s%": n
                })), a.join(" ")
            },
            long: function long() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                    t = e instanceof Date ? e : new Date(e);
                return new Intl.DateTimeFormat(getLocale(), {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }).format(t)
            },
            full: function full() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                    t = e instanceof Date ? e : new Date(e);
                return new Intl.DateTimeFormat(getLocale(), {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }).format(t)
            },
            numeric: function numeric() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                    t = e instanceof Date ? e : new Date(e);
                if (window.Intl) {
                    var n = getLocale();
                    return new Intl.DateTimeFormat(n, {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                    }).format(t)
                }
                var r = "0".concat(t.getMonth() + 1).slice(-2),
                    a = "0".concat(t.getDate()).slice(-2);
                return "".concat(r, "/").concat(a, "/").concat(t.getFullYear())
            },
            relative: function relative(e) {
                var t, n, o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    s = Date.now(),
                    c = (e instanceof Date ? e : new Date(e)).getTime(),
                    l = s - c;
                if (Math.abs(l) > a.month.milliseconds && o) {
                    return new Intl.DateTimeFormat(getLocale(), {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    }).format(c)
                }
                if (l >= a.year.milliseconds) n = a.year, t = Math.abs(Math.floor(l / a.year.milliseconds));
                else if (l >= a.month.milliseconds) n = a.month, t = Math.abs(Math.floor(l / a.month.milliseconds));
                else if (l >= a.day.milliseconds) n = a.day, t = Math.abs(Math.floor(l / a.day.milliseconds));
                else if (l >= a.hour.milliseconds) n = a.hour, t = Math.abs(Math.floor(l / a.hour.milliseconds));
                else {
                    if (!(l >= a.minute.milliseconds)) return r.a.trans("Just now");
                    n = a.minute, t = Math.abs(Math.floor(l / a.minute.milliseconds))
                }
                var u = Math.abs(l) === l;
                return r.a.transChoice(u && i ? n.strAgo : n.str, t, {
                    "%1$s%": t
                })
            },
            customNumericDate: function customNumericDate() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "m/d/y",
                    r = e instanceof Date ? e : new Date(e),
                    a = {
                        d: "0".concat(r.getDate()).slice(-2),
                        m: "0".concat(r.getMonth() + 1).slice(-2),
                        y: "".concat(r.getFullYear())
                    };
                return ["m", "d", "y"].every(function(e) {
                    return n.split("/").includes(e)
                }) ? n.split("/").reduce(function(e, t) {
                    return e.push(a[t]), e
                }, []).join(t) : "".concat(a.m).concat(t).concat(a.d).concat(t).concat(a.y)
            }
        };

    function formatNumber(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return new Intl.NumberFormat([getLocale(t), "en-US"], n).format(e)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return s
    }), n.d(t, "c", function() {
        return c
    }), n.d(t, "i", function() {
        return l
    }), n.d(t, "e", function() {
        return u
    }), n.d(t, "g", function() {
        return d
    }), n.d(t, "j", function() {
        return p
    }), n.d(t, "d", function() {
        return m
    }), n.d(t, "l", function() {
        return f
    }), n.d(t, "f", function() {
        return h
    }), n.d(t, "h", function() {
        return g
    }), n.d(t, "b", function() {
        return b
    }), n.d(t, "k", function() {
        return v
    });
    var r = n(27),
        a = n(15),
        o = n(10),
        i = "//images.chesscomfiles.com",
        s = {
            ARCADE: "arcade",
            DEFAULT: "default",
            NATURAL: "natural",
            NONE: "none",
            SLOW: "slow"
        },
        c = {
            ALMOST_CORRECT: {
                color: "#8a8886",
                icon: r.undo
            },
            BEST_MOVE: {
                color: "#9EBA5A",
                icon: r.bestMove,
                key: "bestMove",
                label: Object(o.b)("Best Move"),
                phrase: Object(o.b)("is best")
            },
            BLUNDER: {
                annotation: a.c.$4,
                color: "#b33430",
                icon: r.blunder,
                key: "blunder",
                label: Object(o.b)("Blunder"),
                phrase: Object(o.b)("is a blunder")
            },
            BOOK: {
                icon: r.book,
                key: "book",
                label: Object(o.b)("Book"),
                phrase: Object(o.b)("is a book move")
            },
            BRILLIANT: {
                color: "#1baca6",
                icon: r.brilliant,
                key: "brilliant",
                label: Object(o.b)("Brilliant"),
                phrase: Object(o.b)("is brilliant")
            },
            CORRECT: {
                color: "#acce59",
                key: "correct",
                icon: r.correct,
                label: Object(o.b)("Correct")
            },
            CRITICAL: {
                key: "critical",
                label: Object(o.b)("Critical")
            },
            EXCELLENT: {
                color: "#5a9ac0",
                icon: r.excellent,
                key: "excellent",
                label: Object(o.b)("Excellent"),
                phrase: Object(o.b)("is excellent")
            },
            FORCED: {
                key: "forced",
                label: Object(o.b)("Forced"),
                phrase: Object(o.b)("is forced")
            },
            GOOD: {
                icon: r.good,
                key: "good",
                label: Object(o.b)("Good"),
                phrase: Object(o.b)("is good")
            },
            INACCURACY: {
                annotation: a.c.$6,
                color: "#f0c15c",
                icon: r.inaccuracy,
                key: "inaccuracy",
                label: Object(o.b)("Inaccuracy"),
                phrase: Object(o.b)("is an inaccuracy")
            },
            INCORRECT: {
                color: "#c93430",
                icon: r.incorrect,
                key: "incorrect",
                label: Object(o.b)("Incorrect")
            },
            MISSED_WIN: {
                color: "#dd5357",
                icon: r.missedWin,
                key: "missedWin",
                label: Object(o.b)("Missed Win"),
                phrase: Object(o.b)("is a missed win")
            },
            MISTAKE: {
                annotation: a.c.$2,
                color: "#e6912c",
                icon: r.mistake,
                key: "mistake",
                label: Object(o.b)("Mistake"),
                phrase: Object(o.b)("is a mistake")
            },
            STAR: {
                color: "#e6912c",
                icon: r.bestMove,
                key: "star"
            }
        },
        l = {
            COORDINATE_FILE: ".coordinates .letter"
        },
        u = {
            INSIDE: "inside",
            NONE: null,
            OUTSIDE: "outside"
        },
        d = ("".concat(i, "/chess-themes/boards"), "".concat(i, "/chess-themes/pieces"), "".concat(i, "/chess-themes/sounds"), {
            boardStyle: "green",
            pieceStyle: "neo",
            highlightColor: "#FFFF33",
            highlightOpacity: .5,
            arrowColor: "rgb(255, 168, 0)",
            flipped: !1,
            files: 8,
            ranks: 8
        }),
        p = {
            DARK_MODE_CHANGE: "darkModeChange"
        },
        m = [{
            key: 0,
            label: Object(o.b)("None"),
            value: u.NONE
        }, {
            key: 1,
            label: Object(o.b)("Inside"),
            value: u.INSIDE
        }, {
            key: 2,
            label: Object(o.b)("Outside"),
            value: u.OUTSIDE
        }],
        f = {
            pieces: ["real3d"],
            animations: ["arcade", "natural"]
        },
        h = [{
            key: "0",
            value: null
        }, {
            key: "1",
            value: "inside"
        }, {
            key: "2",
            value: "outside"
        }],
        g = {
            board: ".board-board",
            resize: ".board-controls",
            sidebar: ".board-sidebar"
        },
        b = {
            minSidebarWidth: 300,
            boardPaddingLeft: 30
        },
        v = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r, a, o, i = n(42),
        s = n.n(i),
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
                a = {
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
                o = [];
            o[5] = 1, o[6] = 0, o[9] = 3, o[10] = 2, o[17] = 5, o[18] = 4, o[33] = 7, o[34] = 6, o[65] = 9, o[66] = 8, o[129] = 11, o[130] = 10;
            var i, s = [2, 5, 10, 20, 40, 80, 160, 64],
                c = "nbrq",
                l = ["", "0000000", "000000", "00000", "0000", "000", "00", "0", ""],
                u = 16;

            function to32BitHex(e) {
                var t = e.toString(16);
                return l[t.length] + t
            }

            function to64BitHex(e) {
                return to32BitHex(e[0]) + to32BitHex(e[1])
            }

            function hash(o, i) {
                var c, l, u, d, p, m, f, h, g, b, v, y, _ = o.split(" "),
                    w = _[0].split("/"),
                    O = "w" === _[1],
                    E = 0,
                    k = Number(O),
                    C = k ? 3 : 4;
                for (u = 7; u >= 0; u -= 1)
                    for (d = 0, f = (p = w[u]).length, m = 0; m < f; m += 1) h = p[m], (v = a[h]) >= 0 && (c = (c ^ (g = e[64 * v + 8 * (7 - u) + d])[0]) >>> 0, l = (l ^ g[1]) >>> 0, v === k && u === C && (E |= 1 << d)), d += Number(h) || 1;
                return "-" !== _[2] && ((b = _[2]).indexOf("K") > -1 && (c = (c ^ (g = t[0])[0]) >>> 0, l = (l ^ g[1]) >>> 0), b.indexOf("Q") > -1 && (c = (c ^ (g = t[2])[0]) >>> 0, l = (l ^ g[1]) >>> 0), b.indexOf("k") > -1 && (c = (c ^ (g = t[1])[0]) >>> 0, l = (l ^ g[1]) >>> 0), b.indexOf("q") > -1 && (c = (c ^ (g = t[3])[0]) >>> 0, l = (l ^ g[1]) >>> 0)), _[3] && "-" !== _[3] && (y = _[3].charCodeAt(0) - 97, s[y] & E && (c = (c ^ (g = n[y])[0]) >>> 0, l = (l ^ g[1]) >>> 0)), O && (c = (c ^ r[0]) >>> 0, l = (l ^ r[1]) >>> 0), i && "hex" === i ? to64BitHex([c, l]) : [c, l]
            }

            function wrap(e) {
                var t, n, r, a, o = {};

                function parseBook(e, t) {
                    var r, a, o, i, s, l, u = n.getUint16(e + 8),
                        d = n.getUint16(e + 10);
                    return a = u >> 9 & 7, i = u >> 3 & 7, s = 7 & u, l = u >> 12 & 7, 4 === (o = u >> 6 & 7) && t && a === i && "-" !== t && (7 === s && (0 === a && t.indexOf("K") > -1 || 7 === a && t.indexOf("k") > -1) ? s -= 1 : 0 === s && (0 === a && t.indexOf("Q") > -1 || 7 === a && t.indexOf("q") > -1) && (s += 2)), r = String.fromCharCode(o + 97) + (a + 1) + String.fromCharCode(s + 97) + (i + 1), l && (r += c[l - 1]), {
                        move: r,
                        weight: d
                    }
                }

                function query(e) {
                    return "string" == typeof e && (e = {
                        fen: e
                    }), t(e)
                }
                if (o = {
                        query: query,
                        pick: function pick(e) {
                            var t, n, r, a, o, i = 0;
                            if (function sortMoves(e) {
                                    e.sort(function sorter(e, t) {
                                        return t.weight - e.weight
                                    })
                                }(t = (e = e || {}).moves || query(e)), r = t.length) {
                                if (e.type && 1 !== r && "best" !== e.type) {
                                    if ("random" === e.type) {
                                        for (a = Math.floor(Math.random() * t.sum) + 1, o = 0; o < r - 1 && !(a <= (i += t[o].weight)); o += 1);
                                        return t[o].move
                                    }
                                    return "randomDisregardWeight" === e.type ? t[Math.floor(Math.random() * r)].move : "worst" === e.type ? t[r - 1].move : ((n = parseInt(e.type) || 1) < 0 && (n = r + n + 1), n < 1 ? n = 1 : n > r && (n = r), t[n - 1].move)
                                }
                                return t[0].move
                            }
                        }
                    }, e.getUint32) t = function bufferBookFind(e) {
                    var t, r, a, o, i, s = n.length || n.byteLength || 0,
                        c = e.offset || 0,
                        l = e.fen,
                        d = e.chess960,
                        p = e.checkAll,
                        m = [],
                        f = 0;
                    for (e.hash ? "string" == typeof(t = e.hash) && (t = function hex64ToDec(e) {
                            return [parseInt(e.substr(0, 8), 16), parseInt(e.substr(8), 16)]
                        }(t)) : t = hash(l), !d && l && (i = l.split(" ")[2]), c = 0; c < s; c += u)
                        if (n.getUint32(c) === t[0] && n.getUint32(c + 4) === t[1]) a = parseBook(c, i), m[m.length] = a, f += a.weight, r = !0;
                        else if (r && !p) break;
                    if (m.sum = f, e.relative)
                        for (o = m.length - 1; o >= 0; o -= 1) m[o].relative = Math.round(m[o].weight / f * 1e4);
                    return m
                }, n = e, o.buffer = n;
                else
                    for (a in t = function jsonBookFind(e) {
                            var t, n, a, i, s, c, l = 0,
                                u = e.fen;
                            if (o.useFen) a = u.replace(/ \d+ \d+$/, ""), (t = r[a]) || (i = a.replace(/[a-h][1-8]$/, "-")) !== a && (t = r[i]);
                            else if (e.hash || (e.hash = hash(u, "hex")), t = r[e.hash]) {
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
                                else if (!e.chess960 && u)
                                    for (c = u.split(" ")[2], n = t.length - 1; n >= 0; n -= 1)(s = t[n].move.match(/e([18])([ah])\1/)) && ("h" === s[2] && ("1" === s[1] && c.indexOf("K") > -1 || "8" === s[1] && c.indexOf("k") > -1) ? t[n] = {
                                        move: "e" + s[1] + "g" + s[1],
                                        weight: t[n].weight
                                    } : "a" === s[2] && ("1" === s[1] && c.indexOf("Q") > -1 || "8" === s[1] && c.indexOf("q") > -1) && (t[n] = {
                                        move: "e" + s[1] + "c" + s[1],
                                        weight: t[n].weight
                                    }))
                            }
                            if (t)
                                for (n = t.length - 1; n >= 0; n -= 1) l += Number(t[n].weight);
                            else t = [];
                            return t.sum = l, t
                        }, r = e, o.json = r, r) {
                        o.useFen = a.indexOf(" ") > -1;
                        break
                    }
                return o
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
                loadBook: (i = {}, function loadBook(e, t) {
                    i[e] ? i[e].book ? setTimeout(function() {
                        t(null, i[e].book)
                    }, 0) : i[e].cbs.push(t) : (i[e] = {
                        cbs: [t]
                    }, getBook(e, function onload(t, n) {
                        var r = i[e].cbs;
                        t ? delete i[e] : (i[e].book = n, i[e].cbs = void 0), r.forEach(function(e) {
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
                zobristPieceValue: a,
                zobristPieceValueNumbers: o
            }
        }(), a = function init() {
            var e, t, n, a, o = {
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
                i = ["Chess", "Chess960", "Crazyhouse", "3-check", "King of the Hill", "Bughouse"],
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
                l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                d = 0,
                p = 0,
                m = 0,
                f = -1,
                h = 1,
                g = 2,
                b = 4,
                v = 8,
                y = 16,
                _ = 32,
                w = 64,
                O = 128,
                E = 3,
                k = 252,
                C = 255,
                S = 256,
                A = 512,
                T = 112,
                P = 1,
                x = 2,
                j = 4,
                M = 3,
                L = 7,
                N = 14,
                I = 21,
                R = 127,
                D = "pnbrqkPNBRQK",
                $ = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                B = [];
            B[5] = [-16, -17, -15], B[6] = [16, 17, 15], B[8] = [-18, -33, -31, -14, 18, 33, 31, 14], B[16] = [-17, -15, 17, 15], B[32] = [-16, 1, 16, -1], B[64] = [-17, -16, -15, 1, 17, 16, 15, -1], B[128] = [-17, -16, -15, 1, 17, 16, 15, -1];
            var F = {
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
                V = {
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
                K = [336, 80, 80, 0, 0, 96, 96, 352, 96, 0, 0, 0, 80, 80, 336, 0, 80, 336, 80, 80, 0, 96, 96, 352, 96, 0, 0, 80, 80, 336, 80, 0, 80, 80, 336, 80, 80, 96, 96, 352, 96, 0, 80, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 112, 96, 352, 96, 80, 80, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 120, 120, 360, 120, 88, 336, 80, 80, 0, 0, 0, 0, 0, 0, 80, 88, 508, 252, 508, 252, 476, 88, 80, 0, 0, 0, 0, 96, 96, 96, 104, 252, 252, 252, 252, 252, 252, 120, 96, 96, 96, 96, 0, 352, 352, 352, 352, 488, 508, 252, 0, 252, 508, 360, 352, 352, 352, 352, 0, 96, 96, 96, 104, 252, 252, 252, 252, 252, 252, 120, 96, 96, 96, 96, 0, 0, 0, 0, 80, 88, 508, 252, 508, 252, 476, 88, 80, 0, 0, 0, 0, 0, 0, 80, 80, 336, 120, 120, 360, 120, 88, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 80, 112, 96, 352, 96, 80, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 80, 96, 96, 352, 96, 0, 80, 80, 336, 80, 80, 0, 80, 336, 80, 80, 0, 96, 96, 352, 96, 0, 0, 80, 80, 336, 80, 0, 336, 80, 80, 0, 0, 96, 96, 352, 96, 0, 0, 0, 80, 80, 336],
                W = [336, 80, 80, 0, 0, 96, 96, 352, 96, 96, 0, 0, 80, 80, 336, 0, 80, 336, 80, 80, 0, 96, 96, 352, 96, 96, 0, 80, 80, 336, 80, 0, 80, 80, 336, 80, 80, 96, 96, 352, 96, 96, 80, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 112, 96, 352, 96, 112, 80, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 120, 120, 360, 120, 120, 336, 80, 80, 0, 0, 0, 0, 0, 0, 80, 88, 508, 252, 508, 252, 508, 88, 80, 0, 0, 0, 0, 96, 96, 96, 104, 252, 252, 252, 252, 252, 252, 252, 104, 96, 96, 96, 0, 352, 352, 352, 352, 488, 508, 252, 0, 252, 508, 488, 352, 352, 352, 352, 0, 96, 96, 96, 104, 252, 252, 252, 252, 252, 252, 252, 104, 96, 96, 96, 0, 0, 0, 0, 80, 88, 508, 252, 508, 252, 508, 88, 80, 0, 0, 0, 0, 0, 0, 80, 80, 336, 120, 120, 360, 120, 120, 336, 80, 80, 0, 0, 0, 0, 80, 80, 336, 80, 112, 96, 352, 96, 112, 80, 336, 80, 80, 0, 0, 80, 80, 336, 80, 80, 96, 96, 352, 96, 96, 80, 80, 336, 80, 80, 0, 80, 336, 80, 80, 0, 96, 96, 352, 96, 96, 0, 80, 80, 336, 80, 0, 336, 80, 80, 0, 0, 96, 96, 352, 96, 96, 0, 0, 80, 80, 336],
                Y = [336, 80, 80, 112, 112, 112, 96, 352, 96, 96, 112, 112, 112, 80, 336, 0, 80, 336, 80, 112, 112, 112, 112, 352, 96, 112, 112, 112, 112, 336, 80, 0, 80, 80, 336, 112, 112, 112, 112, 368, 112, 112, 112, 112, 368, 80, 80, 0, 80, 80, 80, 368, 112, 112, 112, 368, 112, 112, 112, 368, 112, 80, 80, 0, 80, 80, 80, 112, 368, 120, 120, 376, 120, 120, 368, 112, 112, 80, 80, 0, 0, 80, 88, 120, 120, 508, 252, 508, 252, 508, 120, 120, 120, 88, 80, 0, 96, 104, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 104, 0, 352, 352, 480, 480, 488, 508, 252, 0, 252, 508, 488, 480, 480, 480, 352, 0, 96, 104, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 104, 0, 0, 80, 88, 120, 120, 508, 252, 508, 252, 508, 120, 120, 120, 88, 80, 0, 80, 80, 80, 112, 368, 120, 120, 376, 120, 120, 368, 112, 112, 80, 80, 0, 80, 80, 80, 368, 112, 112, 112, 368, 112, 112, 112, 368, 112, 80, 80, 0, 80, 80, 336, 112, 112, 112, 112, 368, 112, 112, 112, 112, 368, 80, 80, 0, 80, 336, 80, 112, 112, 112, 112, 352, 96, 112, 112, 112, 112, 336, 80, 0, 336, 80, 80, 112, 112, 112, 96, 352, 96, 96, 112, 112, 112, 80, 336],
                Q = [17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0, 0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 33, 16, 31, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 17, 16, 15, 14, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -14, -15, -16, -17, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, -31, -16, -33, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0, 0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0, -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17],
                J = [0, 5, 8, 11, 14],
                Z = [31, 7, 7, 7, 63],
                X = {
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
                ee = [b, v, y, _, w],
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
                ae = {
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
                oe = ["Event", "Site", "Date", "Round", "White", "Black", "Result"],
                ie = ["Event", "Site", "Date", "Round", "White", "Black", "Result", "Variant", "SetUp", "FEN", "WhiteA", "WhiteB", "BlackA", "BlackB"];

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
                var n, r, a, i, s, c, l, u, d, p, m, f, h, g, b, v, y, _, w, O, E = /^(?:[A-H]{1,2}[a-h]{0,2}|[A-H]{0,2}[a-h]{1,2}|KQ?k?q?|Qk?q?|kq?|q|-)$/,
                    k = 1 * t === o.Crazyhouse || o[t] === o.Crazyhouse || 1 * t === o.Bughouse || o[t] === o.Bughouse,
                    C = 0,
                    S = 0,
                    A = !0,
                    T = "",
                    P = {
                        0: 0,
                        7: 0
                    },
                    x = {
                        0: 0,
                        7: 0
                    },
                    j = {
                        0: "k",
                        7: "K"
                    },
                    M = {
                        0: "r",
                        7: "R"
                    },
                    L = 1 * t === o.Chess960 || o[t] === o.Chess960;
                if (!e) return 1;
                if ((1 * t === o.Bughouse || o[t] === o.Bughouse) && 2 === (s = e.split(" | ")).length) return 0 === (c = validateFen(s[0], t)) && (c = validateFen(s[1], t)), c;
                if (s = e.split(/\s+/), (1 * t === o["3-check"] || o[t] === o["3-check"]) && 7 === s.length && (i = s.pop(), !/^\+[0-3]\+[0-3]$/.test(i) || "+3+3" === i)) return 14;
                if (6 !== s.length) return 1;
                if (/\D|.{7,}|^0|^$/.test(s[5])) return 2;
                if (/\D|.{7,}|^0.|^$/.test(s[4])) return 3;
                if (!/^(?:-|[abcdefgh][36])$/.test(s[3])) return 4;
                if (p = s[2], L) {
                    if (!E.test(p)) return 12
                } else if (!/^(?:KQ?k?q?|Qk?q?|kq?|q|-)$/.test(p)) {
                    if (void 0 !== t || !E.test(p)) return 5;
                    L = !0
                }
                if ("w" !== s[1] && "b" !== s[1]) return 6;
                if (k && (s[0] = s[0].replace(/~(?=.*\/)/g, "")), r = s[0].split("/"), k && 9 === r.length && (i = r.pop(), !/^[pnbrq]{0,63}$/i.test(i))) return 13;
                if (8 !== r.length) return 7;
                if ("3" === s[3][1] && "w" === s[1] || "6" === s[3][1] && "b" === s[1]) return 11;
                for ("-" !== s[3] && (l = 4 === (S = "3" === s[3][1] ? 4 : 3) ? 5 : 2, C = s[3].charCodeAt(0) - 97, A = !1, T = 4 === S ? "P" : "p"), n = 0; n < r.length; ++n) {
                    for (_ = 0, w = !1, O = 0; O < r[n].length; O++)
                        if (+(a = r[n][O]) == +a) {
                            if (w) return 8;
                            _ += 1 * a, w = !0
                        } else {
                            if (-1 === D.indexOf(a)) return 9;
                            if (A || S !== n || C !== _ || T !== a || (A = !0), l === n && C === _) return 11;
                            n % 7 == 0 && (a === j[n] ? x[n] = 1 << _ : a === M[n] && (P[n] |= 1 << _)), ++_, w = !1
                        }
                    if (8 !== _) return 10
                }
                if (!A) return 11;
                if ("-" !== p)
                    if (L)
                        for (f = {
                                0: 0,
                                1: 0,
                                2: 252,
                                4: 248,
                                8: 240,
                                16: 224,
                                32: 192,
                                64: 128,
                                128: 0
                            }, m = {
                                0: 0,
                                1: 0,
                                2: 1,
                                4: 3,
                                8: 7,
                                16: 15,
                                32: 31,
                                64: 63,
                                128: 0
                            }, y = {
                                0: [0, 0],
                                7: [0, 0]
                            }, n = p.length - 1; n >= 0; --n) {
                            if (b = p.charCodeAt(n), v && v > b && v - b < 8) return 15;
                            if (75 === b ? h = P[g = 7] & f[x[g]] : 81 === b ? h = P[g = 7] & m[x[g]] : 107 === b ? h = P[g = 0] & f[x[g]] : 113 === b ? h = P[g = 0] & m[x[g]] : (h = 1 << b - ((g = b >= 97 ? 0 : 7) ? 65 : 97), v = b), !h || 0 != (h & h - 1)) return 15;
                            if (x[g] < 2 || x[g] > 64 || (h & P[g]) !== h) return 15;
                            if (++y[g][1 * (x[g] < h)] > 1) return 15
                        } else {
                            if ((u = (p.indexOf("K") > -1 ? 128 : 0) | (p.indexOf("Q") > -1 ? 1 : 0)) && (16 !== x[7] || (u & P[7]) !== u)) return 15;
                            if ((d = (p.indexOf("k") > -1 ? 128 : 0) | (p.indexOf("q") > -1 ? 1 : 0)) && (16 !== x[0] || (d & P[0]) !== d)) return 15
                        }
                return 0
            }

            function handToString(e, t) {
                var n, r, a = "",
                    o = 0,
                    i = t ? 6 : 0;
                if (e)
                    for (; o < 5;) {
                        for (n = e >> J[o] & Z[o], r = 0; r < n; ++r) a += D[o + i];
                        ++o
                    }
                return a
            }

            function hashEP(e, t, n, a) {
                e[n + 1] !== a && e[n - 1] !== a || hashNum(t, r.zobristEnPassant[file(n)])
            }

            function addPawnMove(e, n, r) {
                var a;
                (0 === t || l[n] & x) && (rank(n) % 7 == 0 ? (a = r | ne.PROMOTION | e << L | n << N, u[p++] = a | 4 << I, u[p++] = a | 3 << I, u[p++] = a | 2 << I, u[p++] = a | 1 << I) : u[p++] = r | e << L | n << N)
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
                var a, o, i, s = t + (n - t % 8),
                    c = n > t % 8 ? 1 : -1;
                for (i = t + c; i !== s; i += c)
                    if (e[i]) return !1;
                if (o = (a = r === h ? 1 === c ? 118 : 114 : 1 === c ? 6 : 2) - c, l[a] || e[a] && a !== t && a !== s || e[o] && o !== t && o !== s) return !1;
                if (a !== t)
                    for (i = t + (c = a > t ? 1 : -1); i !== a; i += c)
                        if (i !== s && e[i] || l[i]) return !1;
                return !0
            }
            var se = function() {
                    function createHeader(e, t) {
                        return "[" + e + ' "' + String(t).replace(/(\"|\\)/g, "\\$1") + '"]'
                    }
                    return function generatePgn(e, t, n, r, a, i) {
                        var s, c, l = "string" == typeof e.newline ? e.newline : "\n",
                            u = void 0 === e.spaceAfterPeriods || e.spaceAfterPeriods,
                            d = "";
                        for (s in d += createHeader("Event", t.Event) + l, d += createHeader("Site", t.Site) + l, d += createHeader("Date", t.Date) + l, d += createHeader("Round", t.Round) + l, a === o.Bughouse ? (d += createHeader("WhiteA", t.WhiteA || "?") + l, d += createHeader("BlackA", t.BlackA || "?") + l, d += createHeader("WhiteB", t.WhiteB || "?") + l, d += createHeader("BlackB", t.BlackB || "?") + l) : (d += createHeader("White", t.White) + l, d += createHeader("Black", t.Black) + l), d += createHeader("Result", t.Result) + l, a && (d += createHeader("Variant", t.Variant) + l), t.FEN && t.FEN !== $ && (d += createHeader("SetUp", "1") + l, d += createHeader("FEN", t.FEN) + l), t) - 1 === ie.indexOf(s) && (d += createHeader(s, t[s]) + l);
                        if (d += l, c = function createLine(e, t, n, r, a, i) {
                                var s, c, l, u, d, p, m, f, b, v, y, _, w = [],
                                    O = "",
                                    E = !0,
                                    k = t[n],
                                    C = k.length,
                                    S = "";
                                if (k.commands && !i)
                                    for (d in k.commands) S += "[%" + d + " " + k.commands[d] + "]";
                                for (k.initComment && (S = (S + " " + k.initComment.replace(/(\"|\}|\%|\\)/g, "\\$1")).trim()), S && w.push("{" + S + "}"), l = 0; l < C; ++l) {
                                    if (m = (c = k[l]).color === h, O = "", S = "", s = c.commands, r !== o.Bughouse ? (E && !m ? O = e + "..." : m && (O = e + "."), a && (m || E) && (O += " ")) : (w.bughouseOrder || (w.bughouseOrder = []), w.bughouseOrder.push(c.bughouseOrder), l || (w.blackCountOffset = k[0].color === g ? 1 : 0)), O += c.san, c.annotation && (O += c.annotation), c.additionalAnnotation && (O += " " + c.additionalAnnotation.join(" ")), E = !1, void 0 === c.time || s || (s = {
                                            clk: (v = c.time, y = void 0, _ = void 0, y = Math.floor(v % 36e3 / 600), _ = Math.floor(v % 36e3 % 600) / 10, Math.floor(v / 36e3) + ":" + (y < 10 ? "0" : "") + y + ":" + (_ < 10 ? "0" : "") + _)
                                        }), s && !i)
                                        for (d in s) S += "[%" + d + " " + s[d] + "]";
                                    if (c.comment && (S = (S + " " + c.comment.replace(/(\"|\}|\%|\\)/g, "\\$1")).trim()), S && (O += " {" + S + "}", E = !0), w.push(O), c.lines)
                                        for (f = c.lines.length, u = 0; u < f; ++u) t[b = c.lines[u]].length && ((p = createLine(e, t, b, r, a, i))[0] = "(" + p[0], p[p.length - 1] += ")", w = w.concat(p), E = !0);
                                    m || e++
                                }
                                return w
                            }(r, n, 0, a, u, e.hideCommands), a === o.Bughouse) {
                            if (i.isDependent) return c;
                            c = function makeBugHousePgn(e, t, n) {
                                var r = t,
                                    a = e.siblingGame.pgn(),
                                    o = 0,
                                    i = 0,
                                    s = [];
                                for (t.bughouseOrder = t.bughouseOrder || [], a.bughouseOrder = a.bughouseOrder || []; t.bughouseOrder.length || a.bughouseOrder.length;) !t.bughouseOrder.length || a.bughouseOrder.length && t.bughouseOrder[0] > a.bughouseOrder[0] ? (a.bughouseOrder.shift(), s.push("B")) : (t.bughouseOrder.shift(), s.push("A"));
                                return t = [], s.forEach(function(s) {
                                    var c, l, u, d = "";
                                    "A" === s ? (c = r, l = ++o, u = e.startingMoveNumber()) : (c = a, l = ++i, u = e.siblingGame.startingMoveNumber()), d = String(Math.floor((l + 1) / 2) + u - 1), (c.blackCountOffset + l) % 2 ? d += s : d += s.toLowerCase(), d += "." + (n ? " " : "") + c.shift(), t.push(d)
                                }), t
                            }(i, c, u)
                        }
                        return c.push(t.Result), d + function wordWrap(e, t, n) {
                            return t < 1 ? e : (t = "number" == typeof t ? t : 80, e.replace(new RegExp("(.{1," + t + "})(?: |$|\r?\n)", "g"), "$1" + n).slice(0, -n.length))
                        }(c.join(" "), e.maxWidth, l)
                    }
                }(),
                ce = function() {
                    var e = "!?‼⁇⁉⁈□∇Δ∞⩲⩱±∓⨀⟳→↑⇆∆⌓⇔⇗⟫⟪✕⊥⊕○⇄↻⊙~",
                        t = /\[%(\S+)\s([^\]]+)\]/,
                        n = /^(?:[+=~\/\-\u2212]+|T?N|RR|D)$/;

                    function extractCommands(e) {
                        var n, r, a = {};
                        do {
                            (n = t.exec(e.value)) && (r = !0, e.value = e.value.replace(n[0], "").trim(), a[n[1]] = n[2])
                        } while (n);
                        r && (e.commands = a)
                    }

                    function isSplitGame(e, t, n) {
                        for (var r; ++t < n;)
                            if (r = e[t].match(/^\s*(\S+)/)) return /^(?:\[|1(?:\.|$))/.test(r[1])
                    }
                    return function tokenize(t, r) {
                        var a, o, i, s, c, l, u, d = "tags",
                            p = [],
                            m = {
                                type: d,
                                value: ""
                            },
                            f = 0,
                            h = [],
                            g = !0;
                        for (r = r || {}, s = (a = t.split(/\r?\n/)).length, o = 0; o < s; ++o)
                            if ("%" !== (i = a[o].trim())[0])
                                if (i) {
                                    if (l = (i = " " + i + " ").length, c = 0, g)
                                        for (; c < l; ++c)
                                            if (u = i[c], "tags" === d) {
                                                if ("[" === u) m = {
                                                    type: d = "tagName",
                                                    value: ""
                                                };
                                                else if (u.trim()) {
                                                    m = {
                                                        type: d = "san",
                                                        value: ""
                                                    }, g = !1;
                                                    break
                                                }
                                            } else if ("tagName" === d) m.value && "" === u.trim() ? (p.push(m), d = "tagValueStart") : " " !== u && (m.value += u);
                                    else if ("tagValueStart" === d) {
                                        if ('"' === u || "“" === u) m = {
                                            type: d = "tagValue",
                                            value: ""
                                        };
                                        else if (u.trim()) return !1
                                    } else if ("tagValue" === d) '"' === u || "”" === u ? (p.push(m), "]" === i[c + 1] ? (m = {
                                        type: d = "tags",
                                        value: ""
                                    }, ++c) : d = "tagEnd") : ("\\" === u && c + 2 < l && (u = i[++c]), c > 0 && (m.value += u));
                                    else if ("]" === u) m = {
                                        type: d = "tags",
                                        value: ""
                                    };
                                    else if (u.trim()) return !1;
                                    for (; c < l; ++c)
                                        if (u = i[c], "san" === d)
                                            if (e.indexOf(u) > -1) "!" === u || "?" === u || e.indexOf(u) < 6 && (u = ["!!", "??", "!?", "?!"][e.indexOf(u) - 2]) ? (m.value && p.push(m), m = {
                                                type: "a",
                                                value: u
                                            }, "!" !== i[c + 1] && "?" !== i[c + 1] || (m.value += i[++c]), p.push(m), m = {
                                                type: "san",
                                                value: ""
                                            }) : ("∞" === u && "=/" === m.value ? (m.type = "aa", m.value += u) : (m.value && (n.test(m.value) && ("--" !== m.value || r.rejectNullMoves) && (m.type = "aa"), p.push(m)), m = {
                                                type: "aa",
                                                value: u
                                            }, "↑" === u && "↑" === i[c + 1] && (m.value = "↻", ++c)), p.push(m), m = {
                                                type: "san",
                                                value: ""
                                            });
                                            else if (" " === u || "\t" === u || "\n" === u || "\r" === u || "{" === u || "(" === u || ")" === u) {
                                        if (m.value) {
                                            if ("$" === m.value[0]) m.type = "nag";
                                            else if ("*" === m.value || "1-0" === m.value || "0-1" === m.value || "1/2-1/2" === m.value || "½-½" === m.value) {
                                                if (c + 1 < l) return !1;
                                                m.type = "result", "½-½" === m.value && (m.value = "1/2-1/2")
                                            }
                                            n.test(m.value) && ("--" !== m.value || r.rejectNullMoves) && (m.type = "aa"), p.push(m), m = {
                                                type: d,
                                                value: ""
                                            }
                                        }
                                        if (" " === u || "\t" === u || "\n" === u || "\r" === u) d = "san";
                                        else if ("{" === u) d = "comment";
                                        else if ("(" === u) d = "san", p.push({
                                            type: "variationStart",
                                            value: ++f
                                        });
                                        else if (p.push({
                                                type: "variationEnd",
                                                value: f
                                            }), d = "san", !f--) return !1;
                                        m.type = d
                                    } else if ("." === u || !m.value && +u == +u && "-" !== i[c + 1] && "/" !== i[c + 1]) {
                                        if (+u == +u) switch (m.number || (m.number = ""), m.number += u, i[c + 1]) {
                                            case "A":
                                            case "a":
                                            case "B":
                                            case "b":
                                                m.number += i[++c], p.push({
                                                    type: "number",
                                                    value: m.number
                                                }), delete m.number
                                        }
                                    } else m.value += u;
                                    else 0 === c && (m.value = m.value.trim()), "}" !== u ? ("\\" === u && c + 2 < l && (u = i[++c]), m.value += u) : (m.value = m.value.trim(), m.value.indexOf("[") > -1 && extractCommands(m), p.push(m), m = {
                                        type: d = "san",
                                        value: ""
                                    })
                                } else "tags" === d ? (d = "san", g = !1) : "comment" !== d && "tagValueStart" !== d && !f && p.length && isSplitGame(a, o, s) && ("tagValue" !== p[p.length - 1].type && (h.push(p), p = []), d = "tags", g = !0);
                        return h.push(p), h
                    }
                }();

            function Chess(ie, le) {
                var ue, de, pe = 0,
                    me = !0,
                    fe = [],
                    he = h,
                    ge = [],
                    be = f,
                    ve = 0,
                    ye = 1,
                    _e = 1,
                    we = [],
                    Oe = [we],
                    Ee = 0;
                we.id = Ee;
                var ke = {},
                    Ce = [],
                    Se = !1,
                    Ae = !1,
                    Te = makeMoveChess;

                function hashPosition() {
                    var e, t, n, a = he === h ? [4174784170, 2938602761] : [0, 0];
                    for (n = 0; n < 120; ++n) 136 & n && (n += 8), (e = de[n]) && hashNum(a, r.zobristPiece[64 * r.zobristPieceValueNumbers[e & C] + 8 * (7 - rank(n)) + file(n)]);
                    if (Ae)
                        for (t = 1; t < 3; ++t) ge[t] && (0 != (ge[t] & ge[t] - 1) ? (hashNum(a, r.zobristCastle[t - 1]), hashNum(a, r.zobristCastle[t + 1])) : ge[t] > 1 << file(fe[t]) ? hashNum(a, r.zobristCastle[t - 1]) : hashNum(a, r.zobristCastle[t + 1]));
                    else {
                        for (t = 1; t < 3; ++t) ge[t] && (ge[t] & ne.KSIDE_CASTLE && hashNum(a, r.zobristCastle[t - 1]), ge[t] & ne.QSIDE_CASTLE && hashNum(a, r.zobristCastle[t + 1]));
                        Se ? function hashHand(e, t) {
                            var n, a, o, i, s, c, l, u = 0;
                            for (n = 1; n < 3; ++n) {
                                if (a = t[n])
                                    for (o = 0; o < 5;) {
                                        for (s = u + 63 * o, i = a >> J[o] & Z[o], c = 0; c < i; ++c) hashNum(e, [31 * (l = r.zobristPiece[s++])[0] >>> 0, 17 * l[1] >>> 0]);
                                        ++o
                                    }
                                u = 315
                            }
                        }(a, ue._hand) : pe === o["3-check"] && function hash3Check(e, t) {
                            t[h] && hashNum(e, r.zobristCheck[t[h] - 1]), t[g] && hashNum(e, r.zobristCheck[t[g] + 2])
                        }(a, Ce)
                    }
                    return be !== f && hashEP(de, a, be + (he === h ? 16 : -16), b | he), a
                }

                function getCurrentHash() {
                    var e;
                    return we.length ? e = we[we.length - 1].hash : (we.hash || (we.hash = hashPosition()), e = we.hash), [e[0], e[1]]
                }

                function setVariant(e, t) {
                    pe !== (pe = e ? o[e] || 1 * e || o[String(e).replace(/ /g, "").toLowerCase()] || o.Chess : 0) && (pe === o.Bughouse ? (Se = !0, ue.isDependent || (ue.siblingGame = Chess(), ue.siblingGame.hashing(me), ue.siblingGame.isDependent = !0, ue.siblingGame.siblingGame = ue, ue.siblingGame.header({
                        Variant: "Bughouse"
                    })), createVariantZobristNumbers(), Te = makeMoveVariant) : (delete ue.siblingGame, Se = pe === o.Crazyhouse, Ae = pe === o.Chess960, pe ? (createVariantZobristNumbers(), Te = makeMoveVariant) : Te = makeMoveChess), t || updateSetup(generateFen()))
                }

                function disambiguate960Rook(e, t) {
                    for (var n, r, a = e > 7 ? h : g; !(136 & e);) {
                        if ((n = de[e]) & a)
                            if (n & _) {
                                if (r) return;
                                r = e % 8 + (a === h ? 65 : 97)
                            } else if (n & O) return r;
                        e += t
                    }
                }

                function _clear(e, t, n) {
                    de = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], he = h, fe[h] = f, fe[g] = f, ge[h] = 0, ge[g] = 0, ue._hand[h] = 0, ue._hand[g] = 0, Ce[h] = 0, Ce[g] = 0, be = f, ve = 0, ye = 1, t || (Oe = [we = []], Ee = 0, we.id = Ee, ke = {
                        Event: "?",
                        Site: "?",
                        Date: "????.??.??",
                        Round: "?",
                        White: "?",
                        Black: "?",
                        Result: "*"
                    }, e ? setHeader(["Variant", e]) : setVariant(!1, n), n || updateSetup(generateFen()))
                }

                function reset() {
                    _clear(0, !1, !0), we.hash = [1178310168, 378666140], de = [34, 10, 18, 66, 130, 18, 10, 34, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 33, 9, 17, 65, 129, 17, 9, 33], _e = 1, fe[h] = 116, fe[g] = 4, ge[h] = 48, ge[g] = 48
                }

                function load(e, t, n, r) {
                    var a, s, l, u, d, p, m, v, y, w, k, C, S = 0;
                    if (r ? (C = (a = e.split(" "))[3], k = a[2]) : (C = (a = e.trim().split(/\s+/))[3] || "-", k = a[2] || "-"), void 0 === t ? (31 & k.charCodeAt(0)) < 9 && setVariant(o.Chess960, !0) : setVariant(t, !0), s = a[0], !r && !(s = function fixFenPieces(e, t) {
                            var n, r, a = e.length,
                                i = 0,
                                s = 0,
                                c = t && (t === o.Crazyhouse || t === o.Bughouse);
                            for (n = 0; n < a; ++n)
                                if (+(r = e[n]) != +r)
                                    if ("/" === r) {
                                        if (8 !== s && (e = e.substr(0, n) + (8 - s) + e.substr(n), ++n, ++a), s = 0, ++i > 7) {
                                            if (!c && n < a - 1 || !/^[pnbrq]{0,63}$/i.test(e.substr(n + 1))) return !1;
                                            break
                                        }
                                    } else if (F[r]) {
                                if (++s > 8) return !1
                            } else {
                                if ("~" !== r) return !1;
                                c && n && /[nbrq]/i.test(e[n - 1]) || (e = e.substr(0, n) + e.substr(n + 1), --n, --a)
                            } else(s += 1 * r) > 8 && (e = e.substr(0, n) + (r - (s - 8)) + e.substr(n + 1), s = 8);
                            return e
                        }(s, pe))) return !1;
                    if (u = s.length, _clear(i[pe], n, !0), Se) {
                        if (pe === o.Bughouse && !ue.isDependent && (p = e.split(" | "), !ue.siblingGame.load(1 === p.length ? e : p[1], t, n, r))) return reset(), !1;
                        for (d = 0; d < u; ++d)
                            if (+(m = s[d]) != +m)
                                if ("/" === m) {
                                    if (S > 111) {
                                        for (++d; d < u; ++d) m = s[d], ue._hand[m < "a" ? h : g] += 1 << X[m] >>> 0;
                                        break
                                    }
                                    S += 8
                                } else de[S] = F[m], "~" === s[d + 1] && (++d, de[S] |= A), de[S] & O && (fe[de[S] & E] = S), ++S;
                        else S += 1 * m
                    } else
                        for (d = 0; d < u; ++d) + (m = s[d]) != +m ? "/" === m ? S += 8 : (de[S] = F[m], de[S] & O && (fe[de[S] & E] = S), ++S) : S += 1 * m;
                    if (he = "b" === a[1] ? g : h, "-" !== k)
                        if (Ae) {
                            for (y = {
                                    1: [0, 0],
                                    2: [0, 0]
                                }, d = k.length - 1; d >= 0; --d) 75 === (l = k.charCodeAt(d)) ? l = disambiguate960Rook(119, -1) : 81 === l ? l = disambiguate960Rook(112, 1) : 107 === l ? l = disambiguate960Rook(7, -1) : 113 === l && (l = disambiguate960Rook(0, 1)), v = l < 97 ? h : g, w = ae[String.fromCharCode(l)], (m = de[w]) === (_ | v) && (l >= 97 ? fe[v] >= 1 && fe[v] <= 6 && (ge[v] |= 1 << l - 97) : fe[v] >= 113 && fe[v] <= 118 && (ge[v] |= 1 << l - 65), ++y[v][1 * (fe[v] < w)]);
                            (y[h][0] > 1 || y[h][1] > 1) && (ge[h] = 0), (y[g][0] > 1 || y[g][1] > 1) && (ge[g] = 0)
                        } else {
                            if (!r)
                                for (d = k.length - 1; d >= 0; --d) m = de[ae[k[d]]], v = k.charCodeAt(d) < 97 ? h : g, m === (_ | v) && fe[v] === (v === h ? 116 : 4) || (k = k.substr(0, d) + k.substr(d + 1) || "-");
                            for (d = k.length - 1; d >= 0; --d) switch (k[d]) {
                                case "K":
                                    ge[h] |= ne.KSIDE_CASTLE;
                                    break;
                                case "Q":
                                    ge[h] |= ne.QSIDE_CASTLE;
                                    break;
                                case "k":
                                    ge[g] |= ne.KSIDE_CASTLE;
                                    break;
                                case "q":
                                    ge[g] |= ne.QSIDE_CASTLE
                            }
                        }
                    return !r && (2 !== C.length || he === h && "6" !== C[1] || he === g && "3" !== C[1] || de[C.charCodeAt(0) - 97 + 16 * (8 - ("3" === C[1] ? 4 : 5))] !== (b | swapColor(he)) || de[c[C]]) && (C = "-"), be = "-" === C ? f : c[C], ve = 1 * a[4] || 0, ye = 1 * a[5] || 1, pe === o["3-check"] && (a[6] && "+3+3" !== a[6] && (p = a[6].match(/^\+([0-3])\+([0-3])$/)), p = p || [0, 0, 0], Ce[h] = 1 * p[1], Ce[g] = 1 * p[2]), n || (_e = ye, updateSetup(generateFen())), !0
                }

                function generateFen() {
                    return pe ? function generateVariantFen() {
                        var e, t, n, r = 0,
                            a = "",
                            i = "";
                        for (e = 0; e < 120; ++e) 136 & e && (r && (a += r), a += "/", r = 0, e += 8), (n = de[e]) ? (r && (a += r, r = 0), a += V[n & C], Se && n & A && (a += "~")) : ++r;
                        if (r && (a += r), Se && (a += "/" + handToString(ue._hand[h], !0) + handToString(ue._hand[g])), Ae) {
                            for (t = ge[g], e = 0; t;) 1 & t && (i = String.fromCharCode(e + 97) + i), t >>= 1, ++e;
                            for (t = ge[h], e = 0; t;) 1 & t && (i = String.fromCharCode(e + 65) + i), t >>= 1, ++e
                        } else ge[h] & ne.KSIDE_CASTLE && (i += "K"), ge[h] & ne.QSIDE_CASTLE && (i += "Q"), ge[g] & ne.KSIDE_CASTLE && (i += "k"), ge[g] & ne.QSIDE_CASTLE && (i += "q");
                        return a += " " + (he === h ? "w" : "b") + " " + (i || "-") + " " + (be === f ? "-" : algebraic(be)) + " " + ve + " " + ye, pe === o["3-check"] ? a += " +" + Ce[h] + "+" + Ce[g] : pe !== o.Bughouse || ue.isDependent || (a += " | " + ue.siblingGame.fen()), a
                    }() : function generateStandardFen() {
                        var e, t, n = 0,
                            r = "",
                            a = "";
                        for (e = 0; e < 120; ++e) 136 & e && (n && (r += n), r += "/", n = 0, e += 8), (t = de[e]) ? (n && (r += n, n = 0), r += V[t & C]) : ++n;
                        return n && (r += n), ge[h] & ne.KSIDE_CASTLE && (a += "K"), ge[h] & ne.QSIDE_CASTLE && (a += "Q"), ge[g] & ne.KSIDE_CASTLE && (a += "k"), ge[g] & ne.QSIDE_CASTLE && (a += "q"), r += " " + (he === h ? "w" : "b") + " " + (a || "-") + " " + (be === f ? "-" : algebraic(be)) + " " + ve + " " + ye
                    }()
                }

                function setHeader(e) {
                    var t, n, r;
                    for (t = 0; t < e.length; t += 2) n = e[t], r = e[t + 1], n && ("Variant" === n && (setVariant(r), r = pe ? i[pe] : void 0), "Result" === n && "*" !== r && "1-0" !== r && "0-1" !== r && "1/2-1/2" !== r && (r = "*"), void 0 !== r ? ke[n] = String(r) : oe.indexOf(n) > -1 ? ke[n] = "Date" === n ? "????.??.??" : "?" : delete ke[n]);
                    return ke
                }

                function updateSetup(e) {
                    we.length > 0 || Ee || (e !== $ ? (ke.SetUp = "1", ke.FEN = e, we.hash = null) : (delete ke.SetUp, delete ke.FEN, we.hash = [1178310168, 378666140]))
                }

                function get(e) {
                    var t = de[c[e]];
                    return t ? {
                        type: V[t & k | g],
                        color: t & E,
                        promoted: 0 != (t & A)
                    } : null
                }

                function calculateLegalMoveInfo(r, o) {
                    var i, s, c, u, d, p, m, h, g, v, y, _, w, E, C = he,
                        A = O | C,
                        L = l;
                    if (e = [], t = 0, n = 0, a = 0, L[0] = L[1] = L[2] = L[3] = L[4] = L[5] = L[6] = L[7] = L[16] = L[17] = L[18] = L[19] = L[20] = L[21] = L[22] = L[23] = L[32] = L[33] = L[34] = L[35] = L[36] = L[37] = L[38] = L[39] = L[48] = L[49] = L[50] = L[51] = L[52] = L[53] = L[54] = L[55] = L[64] = L[65] = L[66] = L[67] = L[68] = L[69] = L[70] = L[71] = L[80] = L[81] = L[82] = L[83] = L[84] = L[85] = L[86] = L[87] = L[96] = L[97] = L[98] = L[99] = L[100] = L[101] = L[102] = L[103] = L[112] = L[113] = L[114] = L[115] = L[116] = L[117] = L[118] = L[119] = 0, o !== f) {
                        for (w = function chooseKingThreats(e, t) {
                                return Ae && ge[e] ? Y : ge[e] & ne.KSIDE_CASTLE && !de[t + 1] && !de[t + 2] ? ge[e] & ne.QSIDE_CASTLE && !de[t - 1] && !de[t - 2] && !de[t - 3] ? (a = ne.KQSIDE_CASTLE, W) : (a = ne.KSIDE_CASTLE, z) : ge[e] & ne.QSIDE_CASTLE && !de[t - 1] && !de[t - 2] && !de[t - 3] ? (a = ne.QSIDE_CASTLE, K) : H
                            }(C, o), i = 0; i < 120; ++i)
                            if (136 & i && (i += 8), u = de[i])
                                if (u & C)(!r || (0 | u) & r) && e.push(i);
                                else if (0 != ((E = w[i - o + 119]) & u))
                            if (u & b)
                                for (v = B[u], s = 1; s < 3; ++s) 136 & (h = i + v[s]) || (L[h] |= P, h === o && (++t, L[i] |= x));
                            else
                                for (g = (v = B[u & k]).length, _ = u & T, s = 0; s < g; ++s)
                                    if (y = v[s], !(o > (h = i) && y < 0 && o - h > 16 || o < h && y > 0 && h - o > 16))
                                        for (; !(136 & (h += y));) {
                                            if (L[h] |= P, d = de[h]) {
                                                if (d & C)
                                                    if (h === o) {
                                                        for (c = h - y; c !== i; c -= y) L[c] |= x;
                                                        L[i] |= x, ++t, _ && 0 == (136 & (h += y)) && (L[h] |= P)
                                                    } else if (_ && E & S && t < 2)
                                                    for (m = h + y; 0 == (136 & m);) {
                                                        if (p = de[m]) {
                                                            p === A && (L[h] |= j + (Math.abs(y) << M), ++n);
                                                            break
                                                        }
                                                        m += y
                                                    }
                                                break
                                            }
                                            if (!_) break
                                        }
                        t > 1 && (e = [o])
                    } else e = function getPieces(e, t) {
                        var n, r, a = [];
                        for (n = 0; n < 120; ++n) 136 & n && (n += 8), (r = e[n]) && (r & t) === t && a.push(n);
                        return a
                    }(de, C | r)
                }

                function validateEnPassant(e, n) {
                    var r, a, o, i = n + 16 * (he === h ? 1 : -1);
                    return (1 !== t || 0 != (l[n] & x) || 0 != (l[i] & x)) && (r = de[e], de[n] = r, de[e] = 0, a = de[i], de[i] = 0, o = inCheck(), de[e] = r, de[n] = 0, de[i] = a, !o)
                }

                function addCastlingMoves(e) {
                    var t, n, r;
                    if (Ae) {
                        if (ge[e])
                            for (n = (t = fe[e]) % 8, r = 0; r < 8; ++r) ge[e] & 1 << r && canCastle960(de, t, r, e) && (u[p++] = (r > n ? ne.KSIDE_CASTLE : ne.QSIDE_CASTLE) + (t << L) + (t + (r - n) << N), ++r)
                    } else a & ne.KSIDE_CASTLE && (n = (t = fe[e]) + 2, 0 === l[t + 1] && 0 === l[t + 2] && (u[p++] = ne.KSIDE_CASTLE + (t << L) + (n << N))), a & ne.QSIDE_CASTLE && (n = (t = fe[e]) - 2, 0 === l[t - 1] && 0 === l[t - 2] && (u[p++] = ne.QSIDE_CASTLE + (t << L) + (n << N)))
                }

                function generateMoves(r, a) {
                    var o, i, s, c, f, h, g, y, _, w, O = he,
                        E = swapColor(O),
                        C = fe[O];
                    for (calculateLegalMoveInfo(r, C), m = e.length, p = d, _ = 0; _ < m; ++_)
                        if (o = e[_], c = de[o], !(t && n && l[o] & j))
                            if (c & b)
                                for (h = B[c], 0 !== n && 0 != (l[o] & j) && l[o] >> M != 16 || (f = o + h[0], 0 === de[f] && (addPawnMove(o, f, 0), re[O] === rank(o) && (f += h[0], de[f] || addPawnMove(o, f, ne.BIG_PAWN)))), i = 1; i < 3; ++i) 136 & (f = o + (g = h[i])) || n && l[o] & j && l[o] >> M !== Math.abs(g) || (de[f] & E ? addPawnMove(o, f, ne.CAPTURE) : f === be && validateEnPassant(o, f) && (u[p++] = ne.EP_CAPTURE | o << L | f << N));
                            else {
                                if (n && l[o] & j) {
                                    if (c & v) continue;
                                    if (!(G[o - fe[O] + 119] & c)) continue;
                                    h = [g = l[o] >> M, -g]
                                } else h = B[c & k];
                                if (w = o << L, o === C) {
                                    for (i = 0; i < 8; ++i) 0 == (136 & (f = o + (g = h[i]))) && (de[f] ? de[f] & E && 0 == (l[f] & P) && (u[p++] = ne.CAPTURE | w | f << N) : 0 == (l[f] & P) && (u[p++] = w | f << N));
                                    0 === t && addCastlingMoves(O)
                                } else
                                    for (s = h.length, y = c & T, i = 0; i < s; ++i)
                                        for (g = h[i], f = o; !(136 & (f += g));) {
                                            if (de[f]) {
                                                de[f] & E && (0 === t || l[f] & x) && (u[p++] = ne.CAPTURE | w | f << N);
                                                break
                                            }
                                            if ((0 === t || l[f] & x) && (u[p++] = w | f << N), !y) break
                                        }
                            }
                    return Se && function drop(e, n, r) {
                        var a, o, i, s, c;
                        if (!e)
                            for (n && (n >>= 26), s = 0; s < 5; ++s)
                                if ((!n || (0 | n) == 1 << s) && ue._hand[r] & Z[s] << J[s]) {
                                    for (0 === s ? (a = 16, o = 103, i = ne.DROP) : (a = 0, o = 119, i = ne.DROP | s << I), c = a; c <= o; ++c) 136 & c && (c += 8), de[c] || (0 === t || 1 === t && l[c] & x) && (u[p++] = i | c << N);
                                    if (n) return
                                }
                    }(a, r, O), p
                }

                function inCheckAfterMove(e, t, n, r) {
                    var a, i, s, c, l, u, d, p;
                    if (pe === o["King of the Hill"] && e & O && kingOfTheHillWin(n)) return !0;
                    if (r & ne.KQSIDE_CASTLE && (n = he === h ? r & ne.KSIDE_CASTLE ? 117 : 115 : r & ne.KSIDE_CASTLE ? 5 : 3, e = _, p = !0), (a = fe[swapColor(he)]) === f) return !1;
                    if (0 == (e & O) && G[n - a + 119] & e)
                        for (s = Q[n - a + 119], l = e & T, c = n + s; 0 == (136 & c);) {
                            if (c === a) {
                                if (e & b) {
                                    if ((e & E) === h ? a - n < 0 : a - n > 0) return !0;
                                    break
                                }
                                return !0
                            }
                            if (c !== t && de[c] || !l) break;
                            c += s
                        }
                    if (!p) {
                        if ((i = G[t - a + 119]) & T && (s = Q[t - a + 119]) !== Q[n - a + 119])
                            for (c = a - s; 0 == (136 & c);) {
                                if (c !== t && (u = de[c])) {
                                    if (u & he && i & u && u & T) return !0;
                                    break
                                }
                                c -= s
                            }
                        if (r & ne.EP_CAPTURE && (i = G[(d = n + 16 * (he === h ? 1 : -1)) - a + 119]) & T)
                            for (c = a - (s = Q[d - a + 119]); 0 == (136 & c);) {
                                if (c !== t && c !== d) {
                                    if (c === n) break;
                                    if (u = de[c]) {
                                        if (u & he && i & u && u & T) return !0;
                                        break
                                    }
                                }
                                c -= s
                            }
                    }
                    return !1
                }

                function moveToSan(e, t) {
                    var n, r, a, i, s, c, l = "";
                    return e & ne.KQSIDE_CASTLE ? l = e & ne.KSIDE_CASTLE ? "O-O" : "O-O-O" : e & ne.DROP ? (a = e >> N & R, (n = e >> I) && (l += te[n]), l += "@" + algebraic(a)) : (a = e >> N & R, (i = de[r = e >> L & R]) & b ? (e & ne.ANY_CAPTURE && (l += String.fromCharCode(file(r) + 97) + "x"), l += algebraic(a), e & ne.PROMOTION && (l += "=" + te[n = e >> I])) : (l += q[i & C], m > 1 && (l += function getDisambiguator(e, t, n) {
                        var r, a, o, i, s, c;
                        if (p < 2) return "";
                        for (e &= k, c = 0; c < p; ++c)
                            if (r = u[c], n === r >> N && (o = r >> L & R) !== t && de[o] & e) {
                                if (a = !0, rank(t) === rank(o)) {
                                    if (i) return algebraic(t);
                                    s = !0
                                }
                                if (file(t) === file(o)) {
                                    if (s) return algebraic(t);
                                    i = !0
                                }
                            }
                        if (a) return i ? String(8 - rank(t)) : String.fromCharCode(file(t) + 97);
                        return ""
                    }(i, r, a)), e & ne.ANY_CAPTURE && (l += "x"), l += algebraic(a))), t || (e & ne.KQSIDE_CASTLE ? (r = e >> L & R, a = e >> N & R) : e & ne.DROP_OR_PROMOTE && (i = ee[n] + he), inCheckAfterMove(i, r, a, e) && (Te(e, r, a, n), s = d, d = p, c = m, pe !== o.Chess && isVariantWin() ? l += "#" : generateMoves() - d ? l += "+" : l += "#", p = d, d = s, m = c, reverseMove(we.pop()))), l
                }

                function kingAttacked(e) {
                    return fe[e] !== f && function attacked(e, t) {
                        var n, r, a, o, i = B[v],
                            s = v | e;
                        for (n = 0; n < 8; ++n)
                            if (0 == (136 & (a = t + i[n])) && ((r = de[a]) & s) === s) return !0;
                        for (i = B[O], n = 0; n < 8; ++n)
                            for (a = t + (o = i[n]); 0 == (136 & a);) {
                                if (r = de[a]) {
                                    if (r & e && G[t - a + 119] & r) {
                                        if (!(r & b)) return !0;
                                        if (e === h ? t - a < 0 : t - a > 0) return !0
                                    }
                                    break
                                }
                                a += o
                            }
                        return !1
                    }(swapColor(e), fe[e])
                }

                function inCheck() {
                    return kingAttacked(he)
                }

                function inCheckmate() {
                    return inCheck() && 0 === generateMoves()
                }

                function inStalemate() {
                    var e = !inCheck() && 0 === generateMoves();
                    return e && pe === o.Bughouse && !ue.isDependent && (e = ue.siblingGame.inStalemate()), e
                }

                function insufficientMaterial(e) {
                    var t, n, r = 0,
                        a = 0,
                        o = 0;
                    for (n = 0; n < 120; ++n)
                        if (136 & n && (n += 8), t = de[n]) {
                            if (e && 0 == (t & e)) continue;
                            if (100 & t) return !1;
                            if (t & v) {
                                if (a || r++) return !1
                            } else if (t & y) {
                                if (r) return !1;
                                if (++a, (rank(n) + n) % 2 && ++o, o && a !== o) return !1
                            }
                        }
                    return !0
                }

                function inThreefoldRepetition() {
                    if (ve < 8) return !1;
                    for (var e, t = getCurrentHash(), n = !1, r = ve, a = !1, o = we, i = o.length - 1;;) {
                        if ((i -= 2) < 0) {
                            if (o.id) {
                                i = o.atMoveNode + i + 2, o = Oe[o.parentId];
                                continue
                            }
                            if (-2 === i) return !1;
                            e = o.hash, a = !0
                        } else e = o[i].hash, o[i].halfMoves > r || r < 2 ? a = !0 : r = o[i].halfMoves;
                        if (e[0] === t[0] && e[1] === t[1]) {
                            if (n) return !0;
                            n = !0
                        }
                        if (a) return !1
                    }
                }

                function modifyHand(e) {
                    var t, n, a, i, s, c, l, u, d, p = e.move;
                    if (pe === o.Crazyhouse || p & ne.DROP ? (n = ue._hand, s = e.hash, d = e.color) : (n = ue.siblingGame._hand, e.handSibling = !0, me && ((c = ue.siblingGame._history()).length ? s = c[c.length - 1].hash : (c.hash || (c.hash = ue.siblingGame._hashPosition()), s = c.hash)), d = swapColor(e.color)), e.captured) {
                        switch ((e.captured & A ? b : e.captured & k) & k) {
                            case b:
                                l = 0;
                                break;
                            case v:
                                l = 1;
                                break;
                            case y:
                                l = 2;
                                break;
                            case _:
                                l = 3;
                                break;
                            default:
                                l = 4
                        }
                        t = 1 << J[l], me && (i = n[d] >> J[l] & Z[l], u = r.zobristPiece[i + 63 * l + (d === h ? 0 : 315)])
                    } else t = -1 << J[a = p >> I], me && (i = n[d] >> J[a] & Z[a], u = r.zobristPiece[i - 1 + 63 * a + (d === h ? 0 : 315)]);
                    n[d] += t, e.handChange = t, me && hashNum(s, [31 * u[0] >>> 0, 17 * u[1] >>> 0])
                }

                function makeMoveChess(e, t, n, a) {
                    var o, i, s, c, l, u, d, p, m = he,
                        v = swapColor(m),
                        y = {
                            move: e,
                            epSquare: be,
                            halfMoves: ve,
                            castlingW: ge[h],
                            castlingB: ge[g],
                            color: m
                        },
                        w = m === h;
                    me && (c = getCurrentHash(), y.hash = c, hashNum(c, r.zobristTurn), be !== f && hashEP(de, c, be + (w ? 16 : -16), b | m)), 0 == (e & ne.KQSIDE_CASTLE) ? Se && e & ne.DROP ? (de[n] = ee[a] | m, me && hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[de[n]] + 8 * (7 - rank(n)) + file(n)]), modifyHand(y), d = 0) : (d = de[t], (p = de[n]) && (y.captured = p, me && hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[de[n] & C] + 8 * (7 - rank(n)) + file(n)]), p & _ && ge[v] && (Ae ? rank(n) === (w ? 0 : 7) && (s = 1 << file(n), ge[v] & s && (ge[v] ^= s, me && (s > 1 << file(fe[m]) ? hashNum(c, r.zobristCastle[v - 1]) : hashNum(c, r.zobristCastle[v + 1])))) : n === (w ? 7 : 119) ? ge[v] & ne.KSIDE_CASTLE && (ge[v] ^= ne.KSIDE_CASTLE, me && hashNum(c, r.zobristCastle[v - 1])) : n === (w ? 0 : 112) && ge[v] & ne.QSIDE_CASTLE && (ge[v] ^= ne.QSIDE_CASTLE, me && hashNum(c, r.zobristCastle[v + 1])))), e & ne.PROMOTION ? de[n] = ee[a] | m | A : de[n] = de[t], de[t] = 0, me && (hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[d & C] + 8 * (7 - rank(t)) + file(t)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[de[n] & C] + 8 * (7 - rank(n)) + file(n)]))) : d = O, e & ne.EP_CAPTURE ? (w ? (u = n + 16, l = 6) : (u = n - 16, l = 8), y.captured = b | v, de[u] = 0, me && hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[b | v] + 8 * (l - rank(n)) + file(n)])) : d & O ? (Ae ? (e & ne.KQSIDE_CASTLE && (de[n] = 0, de[t] = 0, e & ne.KSIDE_CASTLE ? w ? (o = 118, i = 117) : (o = 6, i = 5) : w ? (o = 114, i = 115) : (o = 2, i = 3), de[o] = m | O, de[i] = m | _, me && (hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[O | m] + 8 * (7 - rank(t)) + file(t)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[_ | m] + 8 * (7 - rank(n)) + file(n)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[O | m] + 8 * (7 - rank(o)) + file(o)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[_ | m] + 8 * (7 - rank(i)) + file(i)]))), me && (0 != (ge[m] & ge[m] - 1) ? (hashNum(c, r.zobristCastle[m - 1]), hashNum(c, r.zobristCastle[m + 1])) : ge[m] > 1 << file(fe[m]) ? hashNum(c, r.zobristCastle[m - 1]) : hashNum(c, r.zobristCastle[m + 1])), fe[m] = o || n) : (e & ne.KQSIDE_CASTLE && (de[n] = de[t], de[t] = 0, e & ne.KSIDE_CASTLE ? (o = n - 1, i = n + 1) : (o = n + 1, i = n - 2), de[o] = de[i], de[i] = 0, me && (hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[O | m] + 8 * (7 - rank(t)) + file(t)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[_ | m] + 8 * (7 - rank(i)) + file(i)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[O | m] + 8 * (7 - rank(n)) + file(n)]), hashNum(c, r.zobristPiece[64 * r.zobristPieceValueNumbers[_ | m] + 8 * (7 - rank(o)) + file(o)]))), me && (ge[m] & ne.KSIDE_CASTLE && hashNum(c, r.zobristCastle[m - 1]), ge[m] & ne.QSIDE_CASTLE && hashNum(c, r.zobristCastle[m + 1])), fe[m] = n), ge[m] = 0) : d & _ && ge[m] && (Ae ? rank(t) === (w ? 7 : 0) && (s = 1 << file(t), ge[m] & s && (ge[m] ^= s, me && (s > 1 << file(fe[m]) ? hashNum(c, r.zobristCastle[m - 1]) : hashNum(c, r.zobristCastle[m + 1])))) : t === (w ? 119 : 7) ? ge[m] & ne.KSIDE_CASTLE && (ge[m] ^= ne.KSIDE_CASTLE, me && hashNum(c, r.zobristCastle[m - 1])) : t === (w ? 112 : 0) && ge[m] & ne.QSIDE_CASTLE && (ge[m] ^= ne.QSIDE_CASTLE, me && hashNum(c, r.zobristCastle[m + 1]))), e & ne.BIG_PAWN ? (be = w ? n + 16 : n - 16, me && hashEP(de, c, n, b | v)) : be = f, d & b || e & ne.ANY_CAPTURE ? ve = 0 : ve++, he = v, we.push(y)
                }

                function makeMoveVariant(e, t, n, a) {
                    var i, s = he;
                    makeMoveChess(e, t, n, a), i = we[we.length - 1], Se ? (ve = i.halfMoves + 1, i.captured && modifyHand(i), pe === o.Bughouse && (i.bughouseOrder = ue.moveCount() - 1 + ue.siblingGame.moveCount())) : pe === o["3-check"] && kingAttacked(he) && (i.checked = !0, me && Ce[s] && hashNum(i.hash, r.zobristCheck[Ce[s] + (s === h ? -1 : 2)]), ++Ce[s], me && hashNum(i.hash, r.zobristCheck[Ce[s] + (s === h ? -1 : 2)]))
                }

                function reverseMove(e) {
                    var t, n, r = he,
                        a = swapColor(r),
                        i = e.move,
                        s = i >> N & R,
                        c = i >> L & R;
                    if (he = a, ge[g] = e.castlingB, ge[h] = e.castlingW, be = e.epSquare, ve = e.halfMoves, pe) {
                        if (Ae && i & ne.KQSIDE_CASTLE) return i & ne.KSIDE_CASTLE ? a === h ? (n = 118, t = 117) : (n = 6, t = 5) : a === h ? (n = 114, t = 115) : (n = 2, t = 3), de[n] = 0, de[t] = 0, de[c] = a | O, de[s] = a | _, void(fe[a] = c);
                        if (e.handChange && (pe !== o.Crazyhouse && e.handSibling ? ue.siblingGame._hand[swapColor(a)] -= e.handChange : ue._hand[a] -= e.handChange), i & ne.DROP) return void(de[s] = 0);
                        e.checked && --Ce[a]
                    }
                    i & ne.PROMOTION ? (de[c] = b | a, i & ne.CAPTURE ? de[s] = e.captured : de[s] = 0) : (de[c] = de[s], i & ne.KQSIDE_CASTLE ? (de[s] = 0, i & ne.KSIDE_CASTLE ? (t = s + 1, n = s - 1) : (t = s - 2, n = s + 1), de[t] = a | _, de[n] = 0, fe[a] = c) : (s === fe[a] && (fe[a] = c), i & ne.CAPTURE ? de[s] = e.captured : (de[s] = 0, i & ne.EP_CAPTURE && (de[s - (a === h ? -16 : 16)] = b | r))))
                }

                function beautifyMove(e, t, n) {
                    var r, a, o = e >> N & R,
                        i = {
                            color: he,
                            to: algebraic(o),
                            flags: e & R
                        };
                    return Se && 0 != (e & ne.DROP) ? (a = e >> I, i.drop = a, i.piece = ee[a] + he) : (r = e >> L & R, i.from = algebraic(r), i.piece = de[r], e & ne.PROMOTION && (a = e >> I, i.promotion = ee[a] + he), e & ne.CAPTURE ? i.captured = de[o] : e & ne.EP_CAPTURE && (i.captured = b | swapColor(he))), i.san = t || moveToSan(e, n), i
                }

                function isVariantWin() {
                    return pe === o["3-check"] ? 3 === Ce[swapColor(he)] : pe === o["King of the Hill"] ? kingOfTheHillWin(fe[swapColor(he)]) : void 0
                }

                function isBughouseWin() {
                    if (pe === o.Bughouse) return ue.siblingGame.inCheckmate()
                }

                function createVariation() {
                    var e = [],
                        t = generateFen(),
                        n = we.length - 1,
                        r = we[n];
                    return !!r && (e.parentId = Ee, e.id = Oe.length, we.curFen = t, r.lines || (r.lines = []), r.lines.push(e.id), r.move ? reverseMove(r) : (be = r.epSquare, --ve, he = swapColor(he)), he === g && --ye, e.atMoveNode = n, e.hash = n ? we[n - 1].hash : we.hash, Ee = e.id, Oe.push(e), we = e, !0)
                }

                function selectLine(e) {
                    var t = generateFen();
                    we.curFen = t, we = Oe[e], Ee = e, load(we.curFen, pe, !0, !0)
                }
                return ue = {
                    WHITE: h,
                    BLACK: g,
                    PAWN: b,
                    KNIGHT: v,
                    BISHOP: y,
                    ROOK: _,
                    QUEEN: w,
                    KING: O,
                    FLAGS: ne,
                    load: load,
                    reset: reset,
                    moves: function moves(e) {
                        var t, n, r, moves = [],
                            a = moveToSan;
                        for (e && (e.verbose && (a = beautifyMove), e.type && (n = e.type | e.type << 24), r = e.noDrop), generateMoves(n, r), t = 0; t < p; ++t) moves.push(a(u[t]));
                        return moves
                    },
                    inCheck: inCheck,
                    inCheckmate: inCheckmate,
                    inStalemate: inStalemate,
                    isBughouseWin: isBughouseWin,
                    in50MoveRule: function in50MoveRule() {
                        return ve >= 100
                    },
                    inDraw: function inDraw() {
                        return ve >= 100 || inStalemate() || insufficientMaterial() || inThreefoldRepetition() || Boolean(function isBughouseDraw() {
                            if (pe === o.Bughouse) return ue.siblingGame.in50MoveRule() || ue.siblingGame.inThreefoldRepetition()
                        }())
                    },
                    insufficientMaterial: insufficientMaterial,
                    inThreefoldRepetition: inThreefoldRepetition,
                    isVariantWin: isVariantWin,
                    gameOver: function gameOver() {
                        return ue.inDraw() || inCheckmate() || Boolean(isVariantWin()) || Boolean(isBughouseWin())
                    },
                    isPositionValid: function isPositionValid(e) {
                        var t, n, r, a = 0;
                        if (!1 !== (e = e || {}).pawns)
                            for (t = 0; t <= 119;) {
                                if ((r = de[t]) & b) return !1;
                                8 == ++t && (t = 112)
                            }
                        if (!1 !== e.kings) {
                            for (t = 0; t <= 119; ++t)
                                if (136 & t && (t += 8), (r = de[t]) & O) {
                                    if (++a > 2) return !1;
                                    if (n && n & r) return !1;
                                    n = r & E
                                }
                            if (2 !== a) return !1
                        }
                        return !1 === e.check || !1 === e.kings && fe[swapColor(he)] === f || !kingAttacked(swapColor(he))
                    },
                    validateFen: validateFen,
                    fen: generateFen,
                    pgn: function pgn(e) {
                        return (e = e || {}).useResultHeader || Ee || (isVariantWin() || inCheckmate() ? ke.Result = he === g ? "1-0" : "0-1" : ue.inStalemate() ? ke.Result = "1/2-1/2" : isBughouseWin() && (ke.Result = ue.siblingGame.turn() === h ? "1-0" : "0-1")), se(e, ke, Oe, _e, pe, ue)
                    },
                    loadPgn: function loadPgn(e, t, n) {
                        var r, a, i, s, c, l, u, d, p, m = {},
                            f = 0;
                        if ("number" != typeof t && (n = n || t, t = 0), n = n || {}, "string" == typeof e && (n.singleGame && (e = e.replace(/(?:\r?\n\s*){2,}/g, "\n")), e = ue.tokenizePgn(e, n)), t < 0 && (t = e.length + t), !(s = e[t])) return !1;
                        for (reset(), a = s.length, r = 0; r < a && "tagName" === (i = s[r]).type; ++r) {
                            if (!s[r + 1] || "tagValue" !== s[r + 1].type) return !1;
                            ++r, "FEN" === i.value ? u = completeFen(s[r].value) : m[i.value] = s[r].value
                        }
                        if (m.Variant && !u && (u = $), u || "1" === m.SetUp)
                            if ("0" === m.SetUp) m.FEN = u;
                            else if (!u || !load(u, m.Variant)) return !1;
                        for (ue.header(m), l = (c = ue)._history(); r < a; ++r)
                            if ("san" === (i = s[r]).type && 0 === f) {
                                if (!c.move(i.value)) {
                                    if (!n.skipBadLines || !(0 !== Ee || we.length && n.allowBadMainLine)) return reset(), !1;
                                    f = 1
                                }
                            } else if ("result" === i.type && "*" === ke.Result) setHeader(["Result", i.value]);
                        else if ("a" === i.type && 0 === f && l[l.length - 1]) l[l.length - 1].annotation = i.value;
                        else if ("nag" !== i.type && "aa" !== i.type || 0 !== f || !l[l.length - 1])
                            if ("comment" === i.type && 0 === f) l.length ? (i.value.trim() && (l[l.length - 1].comment = i.value), i.commands && (l[l.length - 1].commands = i.commands, i.commands.clk && (l[l.length - 1].time = (d = i.commands.clk, p = void 0, 10 * (3600 * (p = d.split(":"))[0] + 60 * p[1] + 1 * p[2]))))) : (l.initComment = String(i.value), i.commands && (l.commands = i.commands));
                            else if ("variationStart" === i.type) {
                            if (f > 0) ++f;
                            else if (!createVariation()) return reset(), !1;
                            l = c._history()
                        } else "variationEnd" === i.type ? (f > 0 && --f, 0 === f && (selectLine(l.parentId), l = c._history())) : "number" === i.type && pe === o.Bughouse && (l = (c = /b/i.test(i.value.slice(-1)) ? ue.siblingGame : ue)._history());
                        else l[l.length - 1].additionalAnnotation || (l[l.length - 1].additionalAnnotation = []), -1 === l[l.length - 1].additionalAnnotation.indexOf(i.value) && l[l.length - 1].additionalAnnotation.push(i.value);
                        return !0
                    },
                    header: function header(e) {
                        return Array.isArray(e) ? setHeader(e) : "object" === s()(e) ? (Object.keys(e).forEach(function(t) {
                            setHeader([t, e[t]])
                        }), ke) : ke
                    },
                    turn: function turn(e) {
                        return e !== h && e !== g || (he = e), he
                    },
                    move: function playMove(e) {
                        var t, n, a, i, s, l, d, m, g, v, y, _, w;
                        if ("string" == typeof e) {
                            switch (e[i = e.length - 1]) {
                                case "+":
                                case "#":
                                    e = e.substr(0, i)
                            }
                            for (g = D.indexOf(e[0]) > 6 ? U[e[0]] : "O" === e[0] ? O : b, Se && (-1 === e.indexOf("@") ? v = !0 : (v = !1, g <<= 24)), generateMoves(g, v), i = 0; i < p; ++i)
                                if (e === (l = moveToSan(u[i], !0))) {
                                    n = u[i];
                                    break
                                }
                            if (!n) return "--" === e ? function makeNullMove() {
                                var e, t = {
                                        color: he,
                                        san: "--",
                                        epSquare: be
                                    },
                                    n = {
                                        color: he,
                                        san: "--"
                                    };
                                return me && (e = getCurrentHash(), t.hash = e, hashNum(e, r.zobristTurn), be !== f && hashEP(de, e, be + (he === h ? 16 : -16), b | he)), be = f, ve++, (he = swapColor(he)) === h && ++ye, we.push(t), n
                            }() : (e = Chess.fixSanMove(e, de, he)) ? playMove(e) : null;
                            d = n >> L & R, m = n >> N & R, a = n >> I
                        } else {
                            if (e.drop) {
                                switch (e.drop) {
                                    case "p":
                                        a = 0;
                                        break;
                                    case "n":
                                        a = 1;
                                        break;
                                    case "b":
                                        a = 2;
                                        break;
                                    case "r":
                                        a = 3;
                                        break;
                                    case "q":
                                        a = 4;
                                        break;
                                    default:
                                        return null
                                }
                                g = 1 << 26 + a
                            } else {
                                if (e.promotion) switch (e.promotion) {
                                    case "q":
                                        a = 4;
                                        break;
                                    case "n":
                                        a = 1;
                                        break;
                                    case "r":
                                        a = 3;
                                        break;
                                    case "b":
                                        a = 2;
                                        break;
                                    default:
                                        return null
                                }
                                d = c[e.from], v = !0, g = de[d] & k
                            }
                            for (m = c[e.to], t = ((a ? a << I : 0) | m << N) >> L | d, generateMoves(g, v), i = 0; i < p; ++i)
                                if (u[i] >> L === t) {
                                    n = u[i];
                                    break
                                }
                            if (!n) return (e = Chess.fixObjMove(e, de, he)) ? playMove(e) : null
                        }
                        return w = n & ne.DROP_OR_PROMOTE ? ee[a] + he : de[d], s = beautifyMove(n, l, !0), y = inCheckAfterMove(w, d, m, n), Te(n, d, m, a), y && (pe !== o.Chess && isVariantWin() ? s.san += "#" : 0 === generateMoves() ? s.san += "#" : s.san += "+"), (_ = we[we.length - 1]).san = s.san, s.piece & A && (_.promoted = !0), he === h && ++ye, s
                    },
                    undo: function undo(e) {
                        var t = we.pop();
                        return t ? (he === h && --ye, t.move ? (reverseMove(t), !!e || beautifyMove(t.move, t.san)) : (be = t.epSquare, --ve, he = swapColor(he), !!e || {
                            san: "--",
                            color: t.color
                        })) : null
                    },
                    clear: function clear(e) {
                        _clear(e)
                    },
                    put: function put(e, t, n) {
                        var r, a = c[t],
                            o = !1,
                            i = de[a],
                            s = i & E,
                            l = e.color;
                        if (isNaN(a) || !e.type || !l || -1 === D.indexOf(e.type)) return !1;
                        if (de[a] = U[e.type] | l | (e.promoted ? A : 0), de[a] & O && (fe[l] = a), i && de[fe[s]] && de[fe[s]] !== (O | s)) {
                            for (r = 0; r < 120; ++r) 136 & r && (r += 8), de[r] === (O | s) && (fe[s] = r, o = !0);
                            o || (fe[s] = f)
                        }
                        return n || load(generateFen(), pe, !0, !1), !0
                    },
                    get: get,
                    remove: function remove(e, t) {
                        var n, r = de[c[e]],
                            a = get(e),
                            o = r & E;
                        if (de[c[e]] = 0, r & O)
                            for (fe[o] = f, ge[o] = 0, n = 0; n < 120; ++n)
                                if (136 & n && (n += 8), de[n] === (O | o)) {
                                    fe[r.color] = n;
                                    break
                                }
                        return t || load(generateFen(), pe, !0, !1), a
                    },
                    history: function history(e, t) {
                        for (var n, r = [], a = we, o = a.length;;) {
                            if (-1 == --o) {
                                if (a.id && !t) {
                                    o = a.atMoveNode, a = Oe[a.parentId];
                                    continue
                                }
                                break
                            }
                            e ? ((n = beautifyMove(a[o].move, a[o].san)).color = a[o].color, !o && a.initComment && (n.firstComment = a.initComment), void 0 !== a[o].comment && (n.comment = a[o].comment), void 0 !== a[o].time && (n.time = a[o].time), void 0 !== a[o].annotation && (n.annotation = a[o].annotation), void 0 !== a[o].additionalAnnotation && (n.additionalAnnotation = a[o].additionalAnnotation), void 0 !== a[o].commands && (n.commands = a[o].commands), void 0 !== a[o].captured && (n.captured = a[o].captured), void 0 !== a[o].promoted && (n.promoted = a[o].promoted), void 0 !== a[o].lines && (n.lines = a[o].lines), void 0 !== a[o].bughouseOrder && (n.bughouseOrder = a[o].bughouseOrder), D.indexOf(a[o].san[0]) > 6 ? n.piece = U[a[o].san[0]] : "O" === a[o].san[0] ? n.piece = O : n.piece = b, n.piece |= n.color, r.unshift(n)) : r.unshift(a[o].san)
                        }
                        return r
                    },
                    hashes: function hashes() {
                        for (var hashes = [], e = we, t = e.length;;) {
                            if (-1 == --t) {
                                if (e.id) {
                                    t = e.atMoveNode, e = Oe[e.parentId];
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
                        return we.length
                    },
                    startingMoveNumber: function startingMoveNumber() {
                        return _e
                    },
                    completeFen: completeFen,
                    createVariation: createVariation,
                    selectLine: selectLine,
                    hash: function hash() {
                        var hash = getCurrentHash();
                        return pe !== o.Bughouse || ue.isDependent ? hash : [hash, ue.siblingGame.hash()]
                    },
                    hashing: function hashing(e) {
                        me = e, pe !== o.Bughouse || ue.isDependent || ue.siblingGame.hashing(me)
                    },
                    hand: function hand() {
                        if (Se) return handToString(ue._hand[h], !0) + handToString(ue._hand[g])
                    },
                    checks: function checks() {
                        if (pe === o["3-check"]) return [Ce[h], Ce[g]]
                    },
                    tokenizePgn: ce,
                    _hand: [],
                    _history: function _history(e) {
                        return e && (Ee = (we = e).id), we
                    },
                    _lines: function _lines() {
                        return Oe
                    },
                    _hashPosition: hashPosition,
                    _board: function _board() {
                        return de
                    }
                }, ie && load(ie, le) || reset(), ue
            }
            return Chess.fixSanMove = function(e, t, n) {
                var r, a, o;
                if (/0|[?!+#]$|[18][QNRB]$|^P/.test(e)) return e.replace(/[?!+#]+$/, "").replace(/0/g, "O").replace(/([18])([QNRB])$/, "$1=$2").replace(/^P/, "");
                if (a = e.indexOf("=") > 0 ? -4 : -2, r = e.substr(a, 2), n = swapColor(n), t[c[r]] & n || /^[a-h]x?[a-h]/.test(e)) {
                    if (-1 === e.indexOf("x")) return e.slice(0, a) + "x" + e.substr(a)
                } else if (e.indexOf("x") > -1) return e.replace("x", "");
                return (o = e.match(/^([KQNRB]?)([a-h][1-8]?|[1-8])(x?[a-h][1-8])=?(.?)$/)) ? t[c[o[2]]] ? {
                    from: o[2],
                    to: r,
                    promotion: o[4].toLowerCase()
                } : o[1] + o[3] + o[4] : void 0
            }, Chess.fixObjMove = function(e, t, n) {
                if (t[c[e.from]] === (O | n) && e.to && e.from[1] === e.to[1]) {
                    if (e.from < e.to) return "O-O";
                    if (e.from > e.to) return "O-O-O"
                }
            }, Chess
        }(), o = function ENGINE_MANAGER(e) {
            var t = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                n = ["bench", "d", "eval", "flip", "isready", "perft", "ponderhit", "stop", "uci", "ucinewgame"],
                a = [{
                    cmd: "position",
                    args: ["fen", "startpos", "moves", "continuation"]
                }, {
                    cmd: "go",
                    args: ["binc", "btime", "confidence", "depth", "infinite", "mate", "mindepth", "mintime", "maxdepth", "maxtime", "movestogo", "movetime", "ponder", "searchmoves", "shallow", "winc", "wtime"]
                }],
                o = ["moves", "searchmoves"],
                i = ["ponder", "infinite", "startpos"],
                s = /Total Evaluation[\s\S]+\n$/i;

            function createWebWorker(e, t, n) {
                var r = new Worker(e || "stockfish.js"),
                    a = {
                        terminate: function terminate() {
                            r.terminate()
                        },
                        postMessage: postMessage,
                        addEventListener: function addEventListener(e, t) {
                            a["on" + e] = t
                        }
                    };

                function postMessage(e) {
                    r.postMessage(e)
                }
                return r.onmessage = function(e) {
                    a.onmessage(e)
                }, r.onerror = function(o) {
                    if (t.pathToNonWasmEngine && t.pathToNonWasmEngine !== e) {
                        o.preventDefault && o.preventDefault();
                        try {
                            r.terminate()
                        } catch (o) {}
                        return (r = createWebWorker(t.pathToNonWasmEngine, t, n)).onmessage = function(e) {
                                a.onmessage(e)
                            },
                            function requeue(e) {
                                e.length && e.forEach(function(e) {
                                    e.message = "", postMessage(e.cmd)
                                })
                            }(n._activeCommands()), !1
                    }
                    if (t.onError) return t.onError(o)
                }, a
            }

            function parseSearchLine(e) {
                var t, n, r, a, o, i = {},
                    s = ["lowerbound", "upperbound", "score"],
                    c = ["depth", "seldepth", "time", "nodes", "multipv", "cp", "mate", "currmovenumber", "hashfull", "nps", "tbhits", "sbhits", "cpuload"],
                    l = ["depth", "seldepth", "time", "nodes", "pv", "multipv", "score", "cp", "mate", "lowerbound", "upperbound", "currmove", "currmovenumber", "hashfull", "nps", "tbhits", "sbhits", "cpuload", "string", "refutation", "currline", "bestmove", "ponder", "baseTurn", "pvSan", "bestmoveSan", "ponderSan", "bmc"],
                    u = ["pv", "pvSan", "string", "refutation", "currline"];
                for (n = (t = e.split(" ")).length, r = "info" === t[0] ? 1 : 0, i.mtype = t[0]; r < n; r += 1) t[r] && (!o || a && l.indexOf(t[r]) > -1 ? (o = t[r], s.indexOf(o) > -1 ? (i[o] = !0, o = null) : a = u.indexOf(o) > -1 || -1 === l.indexOf(o)) : (c.indexOf(o) > -1 && (t[r] = Number(t[r])), a ? (void 0 === i[o] && (i[o] = []), i[o].push(t[r])) : (i[o] = t[r], o = null)));
                return "(none)" === i.bestmove && (i.bestmove = void 0, i.bestmoveSan = void 0), "(none)" === i.ponder && (i.ponder = void 0, i.ponderSan = void 0), i
            }

            function getFirstWord(e) {
                var t = e.indexOf(" ");
                return -1 === t ? e : e.substr(0, t)
            }
            return function loadEngine(c, l) {
                var u, d, p = {},
                    m = function createWorker(e, t) {
                        var n = e.pathToNonWasmEngine && "undefined" == typeof WebAssembly ? e.pathToNonWasmEngine : e.enginePath || e.pathToEngineWorker;
                        if (e.pathToWasmEngine && (n += "#" + e.pathToWasmEngine), "undefined" != typeof Worker) return createWebWorker(n, e, t)
                    }(c, p),
                    f = [],
                    h = [];

                function onmessage(t) {
                    var n, r, a, o, i, c = "string" == typeof t ? t : t.data;
                    if (p)
                        if (c.indexOf("\n") > -1)
                            for (o = c.split("\n"), i = 0; i < o.length; i += 1) onmessage(o[i]);
                        else if (e.log && console.log("debug (onmessage): " + c), p.stream && p.stream(c), f.length && 0 !== c.indexOf("No such option") && 0 !== c.indexOf("id ") && 0 !== c.indexOf("Stockfish") && 0 !== c.indexOf("info string variant") && (r = function determineQueueNum(e, t) {
                            var n, r, a, o, i = getFirstWord(e);
                            if ("bench" !== t[0].cmd && "perft" !== t[0].cmd)
                                for (n = "uciok" === i || "option" === i ? "uci" : "readyok" === i || "ready" === i ? "isready" : "json" === i ? "fetch" : "bestmove" === i || "info" === i ? "go" : "other", o = t.length, a = 0; a < o; a += 1)
                                    if ((r = getFirstWord(t[a].cmd)) === n || "other" === n && ("d" === r || "eval" === r)) return a;
                            return 0
                        }(c, f), a = f[r])) {
                        if (a.stream && !a.discard && a.stream(c), void 0 === a.message ? a.message = "" : "" !== a.message && (a.message += "\n"), a.message += c, "uciok" === getFirstWord(c)) n = !0;
                        else if ("readyok" === getFirstWord(c) || "ready" === getFirstWord(c)) n = !0, p.ready = !0;
                        else if (0 !== c.indexOf("bestmove") && "bestmove" !== getFirstWord(c) || "bench" === a.cmd)
                            if ("d" === a.cmd) 0 !== c.indexOf("Legal uci moves") && 0 !== c.indexOf("Key is") || (a.done = !0, n = !0);
                            else if ("fetch json" === a.cmd) try {
                            a.message = JSON.parse(a.message.replace(/^json /gm, "").replace(/\n/g, "")), n = !0
                        } catch (t) {} else "eval" === a.cmd ? s.test(a.message) && (n = !0) : 0 === c.indexOf("pawn key") ? n = !0 : 0 === c.indexOf("Nodes/second") ? n = !0 : 0 === c.indexOf("Unknown command") && (n = !0);
                        else n = !0, a.message = c;
                        n && (f.splice(r, 1), a.cb && !a.discard ? a.cb(a.message) : a.ondiscard && a.ondiscard())
                    }
                }

                function bestMoveSearch() {
                    var n, r, a, o, i, s = 1,
                        c = [],
                        l = [],
                        d = null,
                        m = h[0].args,
                        f = h[0].cb,
                        g = h[0].stream,
                        b = m.timeout,
                        v = 1,
                        y = 14;

                    function convertpv(e) {
                        var t = [],
                            n = l[e] || createSanPv(c[e]);
                        return c[e].forEach(function oneach(e, r) {
                            t.push({
                                moveSan: n[r],
                                moveLan: e
                            })
                        }), t
                    }

                    function getpv(e, t, n, r) {
                        var a;
                        for (a = c.length - 1; a >= 0; a -= 1)
                            if (c[a][0] === e) return convertpv(a);
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
                        0 === e.mate ? (e.mateIn = 0, e.cp = -31800 * v) : (e.mateIn = Number(e.mate * v) || null, "number" != typeof e.mateIn || isNaN(e.mateIn) || "number" == typeof e.cp ? (e.cp *= v, 9 === Math.abs(e.cp) && (e.cp = 0), m.normalize && e.depth <= y && "number" == typeof loadEngine._previousCP && 1 === e.multipv && function normalize(e) {
                            var t = .03 * Math.pow(32, e.depth / y);
                            e.cp = loadEngine._previousCP + (e.cp - loadEngine._previousCP) * t
                        }(e)) : e.cp = 31800 * v * (e.mate / Math.abs(e.mate))), e.score = e.cp / 100
                    }

                    function addBestMoveProps(t) {
                        var i;
                        if (t.baseTurn = a, t.cp = n, t.score = n / 100, t.mate = r, t.mateIn = d, t.depth = s, t.moveLan = t.bestmove, t.moveLan) {
                            if (t.move = e.uciToObj(t.moveLan)[0], !(i = o.move(t.move))) throw new Error("Bad moveLan in line: " + t.moveLan + " at " + o.fen() + "\ndata: " + JSON.stringify(t) + "\nargs: " + JSON.stringify(m));
                            if (t.moveSan = t.bestmoveSan = i.san, t.ponder && "(none)" !== t.ponder) {
                                if (!(i = o.move(e.uciToObj(t.ponder)[0]))) throw new Error("Bad ponder in line: " + t.ponder + " at " + o.fen() + "\ndata: " + JSON.stringify(t) + "\nargs: " + JSON.stringify(m));
                                t.ponderSan = i.san, o.undo(!0)
                            }
                            o.undo(!0)
                        }
                    }

                    function createSanPv(t) {
                        var n, r, a = t.length,
                            i = [];
                        for (n = 0; n < a; ++n) {
                            if (!(r = o.move(e.uciToObj(t[n])[0]))) throw new Error("Bad pv in line: " + t[n] + " (" + n + ") at " + o.fen() + "\npv: " + JSON.stringify(t) + "\nargs: " + JSON.stringify(m));
                            i.push(r.san)
                        }
                        for (n = 0; n < a; ++n) o.undo(!0);
                        return i
                    }

                    function createTimeout() {
                        b && (clearTimeout(u), u = setTimeout(function() {
                            p.stop(), f && (f(), f = void 0)
                        }, b))
                    }
                    m.timeout = void 0, h[0].started = !0, m.difficulty >= 0 && m.difficulty < 20 ? (p.setoption("Skill Level", m.difficulty), m.maximumError >= 0 && m.maximumError <= 4999 && p.setoption("Skill Level Maximum Error", m.maximumError), m.errorProbability >= 1 && m.errorProbability <= 128 && p.setoption("Skill Level Probability", m.errorProbability)) : p.setoption("Skill Level", 20), void 0 !== m.contempt ? p.setoption("Contempt", m.contempt) : p.setoption("Contempt", "0"), m.multiPv > 1 ? p.setoption("MultiPV", m.multiPv) : p.setoption("MultiPV", 1), m.movetime || m.wtime && m.btime || m.depth || (m.btime = m.btime || 72e3, m.wtime = m.wtime || 72e3), !m.startpos && m.fen || m.moves || m.variant ? (o = e.createGame({
                        fen: m.fen ? (i = m.fen, (i + "").replace(/\[([qrbnp]*)\]/i, "/$1").replace(/([0-3])\+([0-3]) (\d+ \d+)/, function(e, t, n, r) {
                            return r + " +" + (3 - t) + "+" + (3 - n)
                        })) : t,
                        moves: m.moves,
                        variant: m.variant,
                        disableHashing: !0
                    })).turn() === o.WHITE ? a = "w" : (a = "b", v = -1) : (a = "w", o = e.createGame({
                        disableHashing: !0
                    })), p.setVariant(m.variant), p.position(m), p.go(m, function returnBestMove(e) {
                        var t = parseSearchLine(e);
                        if (addBestMoveProps(t), s > y && n < 5e3 && n > -5e3 && (loadEngine._previousCP = n), t.pv = getpv(t.moveLan, t.moveSan), 1 === t.pv.length && t.ponder && (t.pv = getpv(t.moveLan, t.moveSan, t.ponder, t.ponderSan)), f) try {
                            f(t)
                        } catch (e) {
                            console.error(e)
                        }
                        h.shift(), h.length > 0 && bestMoveSearch(), clearTimeout(u)
                    }, function streamInfo(e) {
                        var t = parseSearchLine(e);
                        t.score && (t.baseTurn = a, convertScore(t), 1 !== t.multipv && 0 !== t.depth || (n = t.cp, r = t.mate, d = t.mateIn)), t.pv && g && (t.pvSan = createSanPv(t.pv)), !t.pv || t.lowerbound || t.upperbound || (c.push(t.pv), g && l.push(t.pvSan)), t.depth > s ? s = t.depth : "bestmove" === t.mtype && addBestMoveProps(t), !g || 0 === t.mateIn && t.pv || g(t), createTimeout()
                    }), createTimeout()
                }

                function startUp() {
                    p.isready(function onstart() {
                        c.settings ? p.uci(function onuci() {
                            Object.keys(c.settings).forEach(function oneach(e) {
                                p.setoption(e, c.settings[e])
                            }), l && l(p)
                        }) : l && l(p)
                    })
                }
                return p.send = function(t, n, r) {
                    var a;
                    t = String(t).trim(), e.log && console.log("debug (send): " + t), "ucinewgame" !== t && "flip" !== t && "stop" !== t && "ponderhit" !== t && 0 !== t.indexOf("position") && 0 !== t.indexOf("setoption") ? f[f.length] = {
                        cmd: t,
                        cb: n,
                        stream: r
                    } : a = !0, m && (m.postMessage(t), a && n && setTimeout(n, 0))
                }, p._activeCommands = function() {
                    return f
                }, p.quit = function() {
                    m && m.terminate && (m.terminate(), m = null, p.ready = void 0), clearTimeout(u)
                }, n.forEach(function oneach(e) {
                    p[e] = function makeSCmd(t, n) {
                        p.send(e, t, n)
                    }
                }), a.forEach(function oneach(e) {
                    p[e.cmd] = function makeCCmd(t, n, r) {
                        var a = [e.cmd];
                        d && t.fen && (t.fen = function convertStockfishVariantFen(e) {
                            return (e + "").replace(/^([^\/]+)((?:\/[^\/]+){7})\/([qrbnp]*)/i, "$1$2[$3]").replace(/( \d+ \d+) \+([0-3])\+([0-3])/, function(e, t, n, r) {
                                return " " + (3 - n) + "+" + (3 - r) + t
                            })
                        }(t.fen)), e.args.forEach(function oneach(e) {
                            if (t[e] || 0 === t[e]) {
                                if (o.indexOf(e) > -1) {
                                    if (!t[e] || !t[e].length) return;
                                    Array.isArray(t[e]) && (t[e] = t[e].join(" "))
                                }
                                a.push(e), -1 === i.indexOf(e) && a.push(t[e])
                            }
                        }), p.send(a.join(" "), n, r)
                    }
                }), p.setoption = function(e, t) {
                    p.send("setoption name " + e + " value " + t)
                }, p.setVariant = function(e) {
                    var t;
                    e !== d && (t = String(e).toLowerCase().replace(/ |-/g, ""), e && "chess" !== t ? "chess960" === t ? (p.setoption("UCI_Variant", "chess"), p.setoption("UCI_Chess960", "true")) : ("threecheck" === t && (t = "3check"), p.setoption("UCI_Variant", t), p.setoption("UCI_Chess960", "false")) : (t = void 0, p.setoption("UCI_Variant", "chess"), p.setoption("UCI_Chess960", "false")), d = t)
                }, p.loadBook = function(e, t) {
                    r.loadBook(e, function onload(n, r) {
                        p.book = r, p.pathToBook = e, p.bookLoaded = !0, n && (console.error("Error loading opening book."), console.error(n), p.pathToBook = null, p.bookLoaded = !1), t()
                    })
                }, p.getBestMove = function(t, n, r) {
                    var a;
                    if ((t = t || {}).fen = t.fen || t.baseFen, t.is960 && (t.variant = "Chess960"), p.bookLoaded && t.useBook && (a = function getBookMove(t) {
                            var n, r, a;
                            if (a = t.moves && t.moves.length ? e.getFenFromMoves(t.fen, t.moves, t.variant) : t.fen, (n = p.book.pick({
                                    fen: a,
                                    type: void 0 !== t.bookPick ? t.bookPick : "random",
                                    chess960: "Chess960" === t.variant
                                })) && (e.getLegalMoves(a, t.variant).some(function(e) {
                                    if (e.from + e.to + (e.promotion || "") === n) return r = e, !0
                                }), r)) return {
                                moveSan: r.san,
                                moveLan: n,
                                move: {
                                    from: r.from,
                                    to: r.to,
                                    promotion: r.promotion || null
                                },
                                baseTurn: a.split(" ")[1],
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
                        a.mtype = "bestmove", n(a)
                    }, 0);
                    ! function queueBestMoveSearch(e, t, n) {
                        h.push({
                            args: e,
                            cb: t,
                            stream: n
                        }), 1 === h.length && bestMoveSearch()
                    }(t, n, r)
                }, p.stopAll = function(t) {
                    var n, r = f.length,
                        a = 0;

                    function ondiscard() {
                        0 == (a -= 1) && t()
                    }
                    for (h = [], n = 0; n < r; n += 1) e.log && console.log("debug (stop_moves): " + n, getFirstWord(f[n].cmd)), "go" !== getFirstWord(f[n].cmd) || f[n].discard || (p.stop(), f[n].discard = !0, t && (a += 1, f[n].ondiscard = ondiscard));
                    t && !a && p.isready(t)
                }, p.restartEngine = function(e) {
                    return p.stopAll(), p.quit(), f = [], h = [], p.bookLoaded && !c.book && ((c = JSON.parse(JSON.stringify(c))).book = p.book), loadEngine(c, e)
                }, p.stopFast = function(e, t) {
                    var n;
                    p.stopAll(function() {
                        clearTimeout(n), e(p)
                    }), n = setTimeout(function() {
                        p.restartEngine(e)
                    }, t || 5e3)
                }, "undefined" != typeof Worker && (function addListener() {
                    m.addEventListener("message", onmessage, !1)
                }(), c.book && (p.book = c.book, p.bookLoaded = !0, p.pathToBook = c.pathToBook), !p.book && c.pathToBook ? p.loadBook(c.pathToBook, startUp) : setTimeout(startUp, 0), p.getFenFromMoves = e.getFenFromMoves, p.getLegalMoves = e.getLegalMoves, p.getPositionInfo = e.getPositionInfo, p.isFenValid = e.isFenValid, p.ready = !1, p)
            }
        }, function() {
            var e, t = a(),
                n = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                i = 252,
                c = 255,
                l = {
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
                u = "pnbrq",
                d = 512,
                p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?{~}(^)[_]@#$,./&-*++=",
                m = "qnrbkp";

            function decodeTCN(e) {
                var t, n, r, a, o = e.length,
                    i = [];
                for (t = 0; t < o; t += 2) a = {}, n = p.indexOf(e[t]), (r = p.indexOf(e[t + 1])) > 63 && (a.promotion = m[Math.floor((r - 64) / 3)], r = n + (n < 16 ? -8 : 8) + (r - 1) % 3 - 1), n > 75 ? a.drop = m[n - 79] : a.from = p[n % 8] + (Math.floor(n / 8) + 1), a.to = p[r % 8] + (Math.floor(r / 8) + 1), i.push(a);
                return i
            }

            function uciToObj(e) {
                var t, n, r = e.split(" "),
                    a = r.length,
                    o = [];
                if (e)
                    for (t = 0; t < a; ++t) 4 === (n = r[t]).length ? "@" === n[1] ? o.push({
                        drop: n[0].toLowerCase(),
                        to: n.substr(2, 2)
                    }) : o.push({
                        from: n.substr(0, 2),
                        to: n.substr(2, 2)
                    }) : o.push({
                        from: n.substr(0, 2),
                        to: n.substr(2, 2),
                        promotion: n[4]
                    });
                return o
            }

            function isSameMove(e, t) {
                return e.san === t.san || e.from == t.from && e.to == t.to && e.promotion == t.promotion && e.drop == t.drop
            }

            function makePremove(e, n, r) {
                var o, i, s, c, l, u = e.header().Variant,
                    d = getPremoves(e.fen(), n, u);
                if (d) {
                    for (o = d.length - 1; o >= 0; --o)
                        if (isSameMove(i = d[o], r)) {
                            s = !0;
                            break
                        }
                    if (s) return i.drop ? e.put({
                        type: i.drop,
                        color: n
                    }, i.to, !0) : (c = e.remove(i.from, !0), i.flags === t.FLAGS.KSIDE_CASTLE ? (l = e.remove("Chess960" === u ? i.to : "h" + i.from[1], !0), e.put(c, "g" + i.from[1], !0), e.put(l, "f" + i.from[1], !0)) : i.flags === t.FLAGS.QSIDE_CASTLE ? (l = e.remove("Chess960" === u ? i.to : "a" + i.from[1], !0), e.put(c, "c" + i.from[1], !0), e.put(l, "d" + i.from[1], !0)) : (i.promotion && (c.type = i.promotion, c.promoted = !0), e.put(c, i.to, !0))), i
                }
                if (r.from && (r = a.fixObjMove(r, e._board(), n))) return makePremove(e, n, {
                    san: r
                })
            }

            function getPieces(e, t) {
                var n, r, a, o = t ? {} : [],
                    s = e._board();
                if (t)
                    for (n = 112; n >= 0; ++n) 136 & n && (n -= 24), (r = s[n]) && (o[a = p[7 & n] + (8 - (n >> 4))] = {
                        type: l[r & i],
                        color: 3 & r,
                        promoted: 0 != (r & d),
                        square: a
                    });
                else
                    for (n = 112; n >= 0; ++n) 136 & n && (n -= 24), (r = s[n]) && o.push({
                        type: l[r & i],
                        color: 3 & r,
                        promoted: 0 != (r & d),
                        rank: 8 - (n >> 4),
                        file: 1 + (7 & n)
                    });
                return o
            }

            function makeMoves(e, t, n, r) {
                var a, o, i, s, c, l, u, d, p, m;
                for (n = n || {}, "string" == typeof t && (t = t.trim().split(" ")), i = t.length, a = 0; a < i; a += 1) {
                    if (c = "b" === t[a].board || "B" === t[a].board ? e.siblingGame : e, l = "string" == typeof t[a] ? uciToObj(t[a])[0] : t[a].san ? t[a].san : t[a], !c.move(l)) {
                        if (!n.autoPromote) {
                            if (n.skipBadLines) break;
                            return !1
                        }
                        if (!0 === n.autoPromote ? l.promotion = "q" : l.promotion = n.autoPromote, !c.move(l)) {
                            if (n.skipBadLines) break;
                            return !1
                        }
                    }
                    if (d = (u = c._history())[u.length - 1], r && (p = parseInt(r[a], 10)), ("number" != typeof p || isNaN(p)) && (p = parseInt(t[a].time, 10)), "number" != typeof p || isNaN(p) || (d.time = p, p = void 0), t[a].firstComment && (u.initComment = t[a].firstComment), t[a].comment && (d.comment = t[a].comment), t[a].annotation && (d.annotation = t[a].annotation), t[a].additionalAnnotation && (d.additionalAnnotation = t[a].additionalAnnotation), t[a].commands && (d.commands = t[a].commands), t[a].lines)
                        for (s = t[a].lines.length, o = 0; o < s; ++o) {
                            if (m = e._history().id, e.createVariation(), !makeMoves(e, t[a].lines[o], n) && !n.skipBadLines) return !1;
                            e.selectLine(m)
                        }
                }
                return !0
            }

            function createGame(e) {
                var t, r;
                if ((e = e || {}).game) return e.game;
                if (t = a(), e.analysis && function extendChess(e) {
                        var t, r, o = -1,
                            i = 0;

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
                            return e.deletePosition(o, i)
                        }, e.isLegalMove = function(n) {
                            return !!e._move(n) && t.undo(!0)
                        }, e.premove = function(t, n) {
                            var r, o = e.premoves.length,
                                i = a();
                            return o ? i.load(e.premoves[o - 1].fen, e.header().Variant) : i.load(e.fen(), e.header().Variant), (r = makePremove(i, n, t)) ? (e.premoves.push({
                                move: r,
                                pieces: getPieces(i),
                                fen: i.fen()
                            }), r) : null
                        }, e.getPieces = function(t) {
                            return getPieces(e, t)
                        }, e.origHistory = e.history, e.history = function(t, n) {
                            var r, a, o, i = [],
                                c = e._history(),
                                l = c.length,
                                u = e._lines();
                            for ("boolean" == typeof t && (t = {
                                    verbose: t
                                }), t = t || {}, n && (t.noParentLines = n), t.toCurrent && (l = e.ids().move + 1);;) {
                                if (-1 == --l) {
                                    if (c.id && !t.noParentLines) {
                                        l = c.atMoveNode, c = u[c.parentId];
                                        continue
                                    }
                                    break
                                }
                                if (t.verbose) {
                                    for (a in r = {}, c[l])
                                        if (c[l][a] && "object" === s()(c[l][a]))
                                            for (o in r[a] = c[l][a].constructor === Array ? [] : {}, c[l][a]) r[a][o] = c[l][a][o];
                                        else r[a] = c[l][a];
                                    i.unshift(r)
                                } else i.unshift(c[l].san)
                            }
                            return i
                        }, e._getPos = function(r, a) {
                            var s, c;
                            return "number" != typeof r && (r = o), "number" != typeof a && (a = i), s = (c = e._lines())[a], r >= 0 ? s[r] : s.id ? s.atMoveNode ? c[s.parentId][s.atMoveNode - 1] : e._getPos(s.atMoveNode - 1, s.parentId) : {
                                fen: t.header().FEN || n,
                                hash: s.hash,
                                initial: !0
                            }
                        }, e.move = function(t, n) {
                            var r, a, s, c, l = e._history();
                            if (t && ("string" == typeof t || t.to && (t.from || t.drop))) {
                                if (i === l.id && o < l.length - 1 || n) {
                                    if (e.moveForward(n, t)) return !0;
                                    o < l.length - 1 && (e.selectPosition(o + 1), e.createVariation(), l = e._history())
                                }
                                e.siblingGame && (s = e.isDependent ? e.siblingGame.fen() : e.fen()), (r = e._move(t)) && (normalizeMoveObj(r), i = l.id, a = l[o = l.length - 1], c = e._getPos(o - 1), e.siblingGame ? (e.isDependent ? a.fen = e.siblingGame.fen() : a.fen = e.fen(), a.beforeFen = s) : (a.fen = e.fen(), a.beforeFen = c.fen), c.initial ? (a.moveNumber = 0, a.previous = null) : (a.moveNumber = c.moveNumber + 1, a.previous = c.ids, c.isContinuation && fixContComment(c)), i && 0 === o && e._lines()[l.parentId][l.atMoveNode].move === a.move && (a.isContinuation = !0), a.flags = r.flags, a.to = r.to, a.from = r.from, a.drop = r.drop, a.capturedStr = r.captured, a.promotion = r.promotion, a.piece = r.piece, r.promoted && (a.promoted = !0), r.capturedPromotedPawn && (a.capturedPromotedPawn = !0), a.ids = {
                                    move: o,
                                    line: i
                                })
                            }
                            return r
                        }, e.header = e.headers = function(n) {
                            var r = t.header(n);
                            return e.siblingGame && extendChess(e.siblingGame), r
                        }, e.load = function(n, r, a, s) {
                            var c = t.load(n, r, a, s);
                            return e.siblingGame && extendChess(e.siblingGame), c && !a && (o = -1, i = 0), c
                        }, e.removeEmptyLines = function() {
                            var t, n, r = e._lines();
                            for (t = r.length - 1; t > 0; --t) r[t].length || (r[t] = void 0, n = !0);
                            n && e.reorderLines()
                        }, e.loadPgn = function(n, r, a) {
                            var s = t.loadPgn(n, r, a),
                                c = e._history();
                            return e.removeEmptyLines(), o = c.length - 1, i = c.id, s
                        }, e.ids = function() {
                            return {
                                move: o,
                                line: i
                            }
                        }, e.selectLine = function(t) {
                            e.selectPosition(null, t)
                        }, e.moveBackward = function() {
                            var t;
                            if (o <= 1)
                                if (0 === i) {
                                    if (-1 === o) return !1;
                                    e.selectPosition(o - 1)
                                } else(t = e._getPos(o - 1, i)).isContinuation ? e.selectPosition(e._history().atMoveNode, e._history().parentId) : t.initial ? e.selectPosition(-1, 0) : e.selectPosition(t.ids.move, t.ids.line);
                            else e.selectPosition(o - 1);
                            return !0
                        }, e.moveForward = function(t, n) {
                            var r, s, c, l, u, d, p = e._lines();
                            if ("string" == typeof n && (n = {
                                    san: n
                                }), !(r = p[i][o + 1]) || n && !isSameMove(n, r)) {
                                if (n && r && r.lines)
                                    for (u = r.lines.length, l = 0; l < u; ++l)
                                        if ((c = p[r.lines[l]][0]) && isSameMove(n, c)) {
                                            r = c, d = !0;
                                            break
                                        }
                                if (!d && t && (s = p[i][o]) && s.lines)
                                    for (u = s.lines.length, l = 0; l < u; ++l)
                                        if ((c = p[s.lines[l]][0]) && c.isContinuation && (c = p[s.lines[l]][1]) && (!n || isSameMove(n, c))) {
                                            r = c, d = !0;
                                            break
                                        }
                                if (!d) return !!(n && n.san && (n = a.fixSanMove(n.san, e._board(), e.turn())) || n && n.to && n.from && Math.abs(n.to.charCodeAt(0) - n.from.charCodeAt(0)) > 1 && (n = a.fixObjMove(n, e._board(), e.turn()))) && e.moveForward(t, n)
                            }
                            return e.selectPosition(r.ids.move, r.ids.line)
                        }, e.moveVariation = function(t, n) {
                            var r, a, o, i = e._lines(),
                                s = i[t];
                            if (s && s.id)
                                for (a = (r = i[s.parentId][s.atMoveNode].lines).length - 1; a >= 0; --a)
                                    if (r[a] === t && r[o = a - (n ? 1 : -1)]) return r[a] = r[o], r[o] = t, e.reorderLines(), !0;
                            return !1
                        }, e.promoteVariation = function(t, n) {
                            for (var r, a, s, c, l, u, d = e._lines(), p = d[t]; p && p[0] && p.id && (-1 !== n || p.parentId);) {
                                for (r = d[s = p.parentId], c = p.atMoveNode, p[0].lines = r[c].lines.concat(p[0].lines || []), r[c].lines = void 0, u = r.length - c, a = r.splice(c, u), l = 0; l < u; ++l) a[l].ids.line = t, a[l].ids.move = l;
                                for (a.id = t, a.parentId = s, a.atMoveNode = c, a.hash = p.hash, 0 === c ? (a.initComment = r.initComment, r.initComment = p.initComment) : p.initComment && (r[c - 1].comment = ((r[c - 1].comment || "") + " " + p.initComment).trim()), d[t] = a, u = p.length, l = 0; l < u; ++l) p[l].ids.line = s, p[l].ids.move = l + c, r.push(p[l]);
                                for (a[0].isContinuation = !!p[0].isContinuation && fixContComment(a[0]), r[c].isContinuation = !c && "number" == typeof r.parentId && d[r.parentId][r.atMoveNode].move === r[0].move && fixContComment(r[c]), u = r[c].lines.length, l = 0; l < u; ++l) d[r[c].lines[l]].atMoveNode = c, d[r[c].lines[l]][0] && (d[r[c].lines[l]][0].isContinuation = d[r[c].lines[l]][0].move === r[c].move && fixContComment(d[r[c].lines[l]][0]));
                                if (i === t ? (i = s, o += c) : i === s && o >= c && (i = t, o -= c), 1 === n) break;
                                p = d[t = s]
                            }
                            return void 0 !== r && (e._history(d[i]), e.reorderLines(), !o && d[i][0].isContinuation && e.selectPosition(d[i].atMoveNode, d[i].parentId), !0)
                        }, e.reorderLines = function(t, n) {
                            var a, o, s, c, l, u, d, p, m, f, h = e._lines();
                            for (t ? m = n.length - 1 : (t = 0, n = [h[0]], m = 0, r = !1), s = (a = h[t]).length, o = 0; o < s; ++o)
                                if ((c = a[o]).ids.line = m, c.lines)
                                    for (l = c.lines.length, u = 0; u < l; ++u)(p = h[d = c.lines[u]]) ? (p.atMoveNode = o, f = n.length, c.lines[u] = f, p.parentId = m, r || d !== i || (r = !0, i = f), n.push(p), e.reorderLines(d, n)) : (1 === c.lines.length ? delete c.lines : c.lines.splice(u, 1), --u, --l);
                            t || e.saveLines(n, !0)
                        }, e.createVariation = function() {
                            var n, r, a, s, c = e._history(),
                                l = e._lines();
                            return o === c.length - 1 ? (n = t.createVariation(), c = e._history(), o = c.length - 1, i = c.id, n) : -1 !== o && (r = [], a = c[o], r.parentId = c.id, r.id = l.length, a.lines || (a.lines = []), a.lines.push(r.id), s = e._getPos(o - 1), r.hash = s.hash, r.atMoveNode = o, l.push(r), e.selectPosition(-1, r.id))
                        }, e.selectLineEnd = function(t) {
                            return "number" != typeof t && (t = i), (t !== i || o < e._history().length - 1) && e.selectPosition(null, t, !0)
                        }, e.selectLineStart = function() {
                            var t, n;
                            return i ? (o > 1 || 1 === o && !e._getPos(0).isContinuation ? t = e._history() : (n = e._getPos(-1), t = e._lines()[n.ids ? n.ids.line : 0]), e.selectPosition(t.id ? t[1] && t[0].isContinuation ? 1 : 0 : -1, t.id)) : -1 !== o && e.selectPosition(-1, 0)
                        }, e.selectPosition = function(n, r, a) {
                            var s = e._lines(),
                                c = e._history();
                            if ("number" == typeof r && (r !== i || a)) {
                                if (r < 0 || r >= s.length) return !1;
                                if (c = s[r], "number" != typeof n) n = c.length - 1;
                                else if (n < -1 || n >= c.length) return !1;
                                i = r, e._history(c), a = !0
                            }
                            if ("number" == typeof n && (n !== o || a)) {
                                if (n < -1 || n >= c.length) return !1;
                                t.load(e._getPos(n).fen, t.header().Variant, !0, !0), o = n
                            }
                            return !0
                        }, e.resetToMainLine = function() {
                            var t = e._lines();
                            e.selectLineEnd(0), t.length > 1 && (t.length = 1, e.reorderLines())
                        }, e.saveLines = function(t, n) {
                            var r, a, o, i = e._lines(),
                                s = t.length;
                            for (t !== i && (i.length = 0), a = 0; a < s; ++a) {
                                if (r = t[a], a && "number" != typeof r.parentId) return !1;
                                t !== i && i.push(r), r.id = a
                            }
                            return n || (o = e.ids(), e.selectPosition(-1, 0, !0), e.selectPosition(o.move, o.line)), !0
                        }, e.deletePosition = function(t, n) {
                            var r, a, s = e._lines();
                            return !(!s[n] || !(s[n][t] || -1 === t && 0 !== n)) && (n && (0 === t ? t = -1 : 1 === t && s[n][0].isContinuation && (t = -1)), i > 0 && n !== i ? a = !1 !== (r = function descendsFromMove(e, t, n) {
                                for (var r, a = e[t];
                                    "number" == typeof(r = a.parentId);) {
                                    if (r === n) return a.atMoveNode;
                                    a = e[r]
                                }
                                return !1
                            }(s, i, n)) && r >= t : n === i && t <= o && (a = !0), a && (t > 1 ? e.selectPosition(t - 1, n) : (e.selectPosition(s[n][0].isContinuation || 1 === t ? 1 : 0, n), e.moveBackward())), t > 0 ? s[n].length = t : n ? s[n] = null : s[0].length = 0, e.reorderLines(), e.ids())
                        }, e.mark = function(t, n) {
                            var r = o < 0 ? e._lines()[i] : e._lines()[i][o],
                                a = t.type,
                                s = 1;
                            t.color && ("arrow" === a ? e.mark({
                                key: t.color + t.key,
                                type: "cal"
                            }, n) : "square" === a && e.mark({
                                key: t.color + t.key,
                                type: "csl"
                            }, n)), "cal" !== a && "csl" !== a && (a = "c_" + a, s = 0), r.commands && r.commands[a] && (r.commands[a] = r.commands[a].split(",").filter(function rm(e) {
                                return e.slice(s).split(";")[0] !== t.key.slice(s)
                            }).join(","), r.commands[a] || delete r.commands[a]), n || (r.commands || (r.commands = {}), r.commands[a] = (r.commands[a] ? r.commands[a] + "," : "") + t.key + (t.data ? ";" + t.data.join(";") : ""))
                        }, e.markings = function() {
                            var t, n, r, a, s, c, l, u, d = {},
                                p = o < 0 ? e._lines()[i] : e._lines()[i][o],
                                m = {
                                    cal: "arrow",
                                    csl: "square"
                                };
                            for (n in p.commands) {
                                if (r = p.commands[n], m[n]) n = m[n], a = 0;
                                else {
                                    if ("c_" !== n.substr(0, 2)) continue;
                                    n = n.slice(2), a = 1
                                }
                                for (d[n] = d[n] || {}, c = (s = r.split(",")).length, t = 0; t < c; ++t) a ? (u = (l = s[t].split(";")).shift(), d[n][u] = d[n][u] || {
                                    type: n,
                                    key: u
                                }, d[n][u].data = l) : (u = s[t].slice(1), d[n][u] = d[n][u] || {
                                    type: n,
                                    key: u
                                }, d[n][u].color = s[t][0])
                            }
                            return d
                        }, e.clearMarkings = function() {
                            var t, n = o < 0 ? e._lines()[i] : e._lines()[i][o];
                            for (t in n.commands) /^c[sa]l$|^c_/.test(t) && delete n.commands[t]
                        }, e.pgn = function(n) {
                            var r, a = e.ids();
                            return e.selectLineEnd(0), r = t.pgn(n), e.selectPosition(a.move, a.line), r
                        }, e.loadMoves = function(t, n) {
                            var r, a, s;
                            if (n = n || {}, "string" == typeof t && (t = decodeTCN(t)), t) {
                                for (n.atCurrent || e.selectPosition(-1, 0), s = i, a = t.length, r = 0; r < a; ++r) {
                                    if (!e.move(t[r], !0) && (t[r].promotion = !0 === n.autoPromote ? "q" : n.autoPromote, !e.move(t[r], !0))) return !1;
                                    i !== s && "merge" !== n.method && (e.promoteVariation(i, 1), "promote" !== n.method && (e._history()[o].lines = void 0, e.reorderLines()), s = i)
                                }
                                "merge" !== n.method && "promote" !== n.method && e.deletePosition(o + 1, i)
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
                                var r, a, o, i = [decodeTCN(t[0]), decodeTCN(t[1])],
                                    s = [0, 0],
                                    c = [0, 0],
                                    l = i[0].length + i[1].length,
                                    u = Math.max(0 | n[0][0], 0 | n[0][1], 0 | n[1][0], 0 | n[1][1]),
                                    d = [0, 0],
                                    p = [0, 0];
                                for (r = [
                                        [u += 600 - u % 600, u],
                                        [u, u]
                                    ]; l--;) {
                                    if (p[0] = d[0] + r[0][c[0]] - n[0][s[0]] || 0, p[1] = d[1] + r[1][c[1]] - n[1][s[1]] || 0, i[a = p[0] <= p[1] ? 0 : 1][s[a]] || (a ^= 1), (!(o = a ? e.siblingGame : e).move(i[a][s[a]]) || l && o.inCheckmate() && o.undo(!0)) && !(o = (a ^= 1) ? e.siblingGame : e).move(i[a][s[a]])) return !1;
                                    o._history()[s[a]].time = n[a][s[a]], r[a][c[a]] = n[a][s[a]], d[a] = p[a], c[a] ^= 1, ++s[a]
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
                return e && (e.piece & d && (e.promoted = !0), e.piece = l[e.piece & i], e.captured && (e.captured & d && (e.capturedPromotedPawn = !0), e.captured = l[e.captured & c]), e.promotion && (e.promotion = l[e.promotion & i]), void 0 !== e.drop && (e.drop = u[e.drop])), e
            }

            function getPremoves(e, n, r) {
                var o, i, s, c, l, d, p, m, f = [];

                function pawnCapture(e) {
                    var r, a = l[0] + "x" + e;
                    if (1 === n && 7 === o || 2 === n && 2 === o)
                        for (r = 4; r > 0; --r) f.push({
                            color: n,
                            to: e,
                            flags: t.FLAGS.CAPTURE | t.FLAGS.PROMOTION,
                            from: l,
                            promotion: 1 << r + 2,
                            piece: 4,
                            san: a + "=" + u[r].toUpperCase()
                        });
                    else 1 === o && 2 === n || 8 === o && 1 === n || f.push({
                        color: n,
                        to: e,
                        flags: t.FLAGS.CAPTURE,
                        from: l,
                        piece: 4,
                        san: a
                    })
                }
                if (1 !== n && 2 !== n || !t.load(e, r || "chess")) return null;
                for (e = t.fen(), (c = a()).clear(), r && c.header({
                        Variant: r
                    }), t.turn(n), c.turn(n), o = 1; o < 9; ++o)
                    for (i = 1; i < 9; ++i) l = String.fromCharCode(i + 96) + o, (s = t.get(l)) && (t.remove(l, !0), s.color === n && ("p" === s.type ? (i > 1 && pawnCapture(String.fromCharCode(i - 1 + 96) + (o + (1 === n ? 1 : -1))), i < 8 && pawnCapture(String.fromCharCode(i + 1 + 96) + (o + (1 === n ? 1 : -1)))) : "k" === s.type && (p = l[0], m = o), c.put(s, l, !0), f = f.concat(c.moves({
                        verbose: !0
                    })), c.remove(l, !0)));
                return "-" !== (d = e.split(" ")[2]) && d.split("").forEach(function(e) {
                    (1 === n && e < "a" || 2 === n && e >= "a") && ("k" === (e = e.toLowerCase()) ? f.push({
                        color: n,
                        to: "g" + m,
                        flags: t.FLAGS.KSIDE_CASTLE,
                        from: "e" + m,
                        piece: 128,
                        san: "O-O"
                    }) : "q" === e ? f.push({
                        color: n,
                        to: "c" + m,
                        flags: t.FLAGS.QSIDE_CASTLE,
                        from: "e" + m,
                        piece: 128,
                        san: "O-O-O"
                    }) : e > p ? f.push({
                        color: n,
                        to: e + m,
                        flags: t.FLAGS.KSIDE_CASTLE,
                        from: p + m,
                        piece: 128,
                        san: "O-O"
                    }) : f.push({
                        color: n,
                        to: e + m,
                        flags: t.FLAGS.QSIDE_CASTLE,
                        from: p + m,
                        piece: 128,
                        san: "O-O-O"
                    }))
                }), (f = f.concat(t.moves({
                    verbose: !0
                }))).forEach(function(e) {
                    normalizeMoveObj(e)
                }), f
            }

            function getLegalMoves(e, n) {
                var r, a, o, i;
                if ("string" == typeof e) {
                    if (!(a = t).load(e, n)) return null
                } else a = createGame(e);
                for (i = (r = a.moves({
                        verbose: !0
                    })).length, o = 0; o < i; ++o) normalizeMoveObj(r[o]);
                return r
            }

            function jce(t, n) {
                return (e = e || o(jce))(t, n)
            }
            return jce.gameFingerprints = function gameFingerprints(e) {
                var t, a, o, i, s, c, l, u, d, p = createGame(e),
                    m = [""],
                    f = [];
                if (!p) return !1;
                for (d = (u = p.header()).Variant || "", c = p.hashes(), t = "function" == typeof p.origHistory ? p.origHistory(!0) : p.history(!0), s = c.length, a = [c[0][0], c[0][1]], f.push(r.to64BitHex(a) + d), c[0] = r.to64BitHex(c[0]), o = 1; o < s; ++o) a[0] = (a[0] ^ c[o][0] * (o + 58465)) >>> 0, a[1] = (a[1] ^ c[o][1] * (o + 984)) >>> 0, c[o] = r.to64BitHex(c[o]), f.push(r.to64BitHex(a) + d), normalizeMoveObj(t[i = o - 1]), l = (t[i].from ? t[i].from : t[i].drop.toUpperCase() + "@") + t[i].to + (t[i].promotion || ""), i && (l = m[i] + " " + l), m.push(l);
                return {
                    startingFen: u.FEN || n,
                    hashes: c,
                    fingerprints: f,
                    moves: m,
                    variant: u.Variant
                }
            }, jce.getFenFromMoves = function getFenFromMoves(e, n, r) {
                return t.reset(), t.load(e, r), !(n && !makeMoves(t, n)) && t.fen()
            }, jce.getLegalMoves = getLegalMoves, jce.getPremoves = getPremoves, jce.getPositionInfo = function getPositionInfo(e, n, r) {
                var a, o, i, s = {
                    gameOver: !1,
                    check: !1,
                    checkmate: !1,
                    draw: !1,
                    stalemate: !1,
                    threefold: !1,
                    insufficient: !1
                };
                if (Array.isArray(n) || (r = n, n = null), "boolean" == typeof r ? (a = r, r = {}) : a = (r = r || {}).variant, "string" == typeof e) {
                    if (0 !== (i = t).validateFen(e, a) || !i.load(e, a)) return !1
                } else i = createGame(e);
                return !(n && !makeMoves(i, n)) && (r.getLegalMoves ? (o = getLegalMoves({
                    game: i
                }), s.legalMoves = o) : o = i.moves(), i.inCheck() ? (s.check = !0, s.checkmate = 0 === o.length) : s.stalemate = 0 === o.length, r.premove && (r.check = !1, r.kings = !1), s.threefold = i.inThreefoldRepetition(), s.insufficient = i.insufficientMaterial(r.color), s.fiftyMoveRule = i.in50MoveRule(), s.draw = s.stalemate || s.threefold || s.insufficient || s.fiftyMoveRule || i.inDraw(), r.skipValidation || (s.isValid = i.isPositionValid(r)), a && (s.variantWin = i.isVariantWin(), void 0 === s.variantWin && (s.variantWin = i.isBughouseWin())), s.gameOver = s.checkmate || s.draw || Boolean(s.variantWin), s)
            }, jce.isFenValid = function isFenValid(e, n) {
                return 0 === t.validateFen(e, n)
            }, jce.encodeTCN = function encodeTCN(e) {
                var t, n, r, a, o = "";
                for (Array.isArray(e) || (e = [e]), n = e.length, t = 0; t < n; t += 1) r = e[t].drop ? 79 + m.indexOf(e[t].drop) : p.indexOf(e[t].from[0]) + 8 * (e[t].from[1] - 1), a = p.indexOf(e[t].to[0]) + 8 * (e[t].to[1] - 1), e[t].promotion && (a = 3 * m.indexOf(e[t].promotion) + 64 + (a < r ? 9 + a - r : a - r - 7)), o += p[r] + p[a];
                return o
            }, jce.decodeTCN = decodeTCN, jce.uciToObj = uciToObj, jce.generatePgn = function generatePgn(e) {
                var t;
                return (e = e || {}).disableHashing = !0, !!(t = createGame(e)) && t.pgn(e)
            }, jce.pgnToFen = function pgnToFen(e, n) {
                var r, a, o = [];
                if (t.reset(), !t.loadPgn(e)) return !1;
                if (r = t.moveCount(), "number" == typeof n) {
                    for (n < 0 && (n = r + n + 1), a = r - 1; a >= n && a >= 0; a -= 1) t.undo();
                    return t.fen()
                }
                for (a = 0; a <= r; a += 1) o.unshift(t.fen()), t.undo();
                return o
            }, jce.pgnToJson = function pgnToJson(e, n, r) {
                var a, o = [],
                    i = t;
                return "number" != typeof n && (r = n, n = void 0), a = i.tokenizePgn(e, r), n < 0 && (n = a.length + n), !!a && (r && r.includeFen && (i = createGame({
                    analysis: !0
                })), a.forEach(function(e, t) {
                    var a, s;
                    t === n || void 0 === n ? i.loadPgn([e], 0, r) ? (s = function normalizeHistory(e) {
                        var t, n, r, a, o, i, s, c = e.history(!0, !0);
                        if (e.siblingGame) {
                            for (t = e.siblingGame.history(!0, !0), r = c.length + t.length, n = [], a = 0; a < r; ++a) !c.length || t.length && t[0].bughouseOrder < c[0].bughouseOrder ? (o = t.shift()).board = "b" : (o = c.shift()).board = "a", n.push(o);
                            c = n
                        }
                        for (r = c.length, a = 0; a < r; ++a)
                            if ((i = c[a]).fen || normalizeMoveObj(i), i.lines)
                                for (s = i.lines.length - 1; s >= 0; --s) e.selectLine(i.lines[s]), i.lines[s] = normalizeHistory(e).moves;
                        return {
                            moves: c
                        }
                    }(i), a = i.header(), o.push({
                        headers: a,
                        moves: s.moves
                    })) : o.push(!1) : o.push(void 0)
                }), "number" == typeof n ? o[n] : o)
            }, jce.sanToObj = function sanToObj(e, n, r) {
                return t.reset(), !!t.load(n, r) && normalizeMoveObj(t.move(e))
            }, jce.completeFen = t.completeFen, jce.shortenFen = function shortenFen(e, n) {
                return t.completeFen(e).split(" ").slice(0, n || 4).join(" ")
            }, jce.createGame = createGame, jce.getPositionDetails = function getPositionDetails(e, t) {
                var n, r, a, o;
                if ((e = e || {}).disableHashing = !0, !(n = createGame(e))) return null;
                if (t)
                    if (e.premove) {
                        if (!(a = makePremove(n, e.color, t))) return null
                    } else {
                        if (!(a = n.move(t))) return null;
                        n.extended || normalizeMoveObj(a)
                    }
                return o = n.fen(), e.premove && (e.check = !1, e.kings = !1), e.skipValidation || n.isPositionValid(e) ? (r = o.split(" "), {
                    fen: o,
                    pieces: getPieces(n),
                    sideToMove: n.turn(),
                    castling: r[2],
                    epSquare: "-" === r[3] ? null : r[3],
                    halfMoves: +r[4],
                    moveNumber: +r[5],
                    move: a,
                    hand: n.hand(),
                    checks: n.checks()
                }) : null
            }, jce.predict = function predict(e, t) {
                var n = Math.min(Math.max(.20773843 * Math.atan(2.49085889 * e / 100 - 2.47841945 * t / 100) + .02262979 * e / 100 - .02256839 * t / 100 + .52239679, 0), 1),
                    r = Math.min(Math.max(-.20720905 * Math.atan(2.49626837 * e / 100 - 2.48220286 * t / 100) + -.02352551 * e / 100 + .02172627 * t / 100 + .49443923, 0), 1),
                    a = Math.min(Math.max(Math.exp(.037043456 * e / 100 + .178106427 * t / 100 - 8.069742932) + .004823544 * Math.exp(-1.364136591 * Math.pow(e / 100 - t / 100, 2)) + -.001625539, 0), 1),
                    o = n + r + a;
                return {
                    w: n / o,
                    b: r / o,
                    d: a / o
                }
            }, jce.FLAGS = t.FLAGS, jce.loadECO = function loadECO(e, t) {
                r.loadBook(e, function onload(e, n) {
                    if (!n || !n.json) return t(e || new Error("Invalid book"));
                    t(e, function queryECO(e) {
                        var t, a, o, i, s, c, l, u, d;
                        if (e.hash) a = "string" == typeof e.hash ? [r.hex64ToDec(e.hash)] : [e.hash], i = 1;
                        else {
                            if (!(t = createGame(e))) return !1;
                            i = (a = t.hashes()).length
                        }
                        for (o = 0; o < i; ++o)
                            if (s = n.json[r.to64BitHex(a[o])]) {
                                if (s.constructor === Array)
                                    if (c && -1 === s[0].m.indexOf(c.m)) {
                                        for (u = s.length - 1; u >= 0; --u)
                                            if (!u || -1 !== s[u].m.indexOf(c.m)) {
                                                (d = s[u]).e = s[0].e, d.s = s[0].s, d.mate = s[0].mate, d.v = s[0].v, d.h = s[0].h, d.n = d.n || s[0].n, d.u = d.u || s[0].u, d.c = d.c || s[0].c;
                                                break
                                            }
                                    } else d = s[0];
                                else d = s;
                                (d.n || e.allowNameless) && (c = d)
                            } else e.mustEndInBook && (c = void 0);
                        if (c) return l = {
                            name: c.n
                        }, c.m && (l.moves = c.m), void 0 !== c.d && (l.sdiff = c.d / 100), c.u ? (l.url = c.u, l.code = l.url.substr(0, 3)) : c.n && c.c && (l.url = c.c + "-" + c.n.replace(/['+,]/g, "").replace(/[^a-z0-9.]+/gi, "-").replace(/(with-\d|St)\.+-?/, "$1-"), l.code = c.c), c.e ? (l.eval = c.e, l.depth = c.h, l.score = c.e[0].cp / 100, void 0 !== c.e[0].mate && (l.mate = c.e[0].mate)) : (l.score = c.s / 100, void 0 !== c.mate && (l.mate = c.mate)), c.v && (l.bad = !0), l
                    }, n.json)
                })
            }, jce
        }());
    t.default = c
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return s
    });
    var r = n(24),
        a = n.n(r),
        o = n(3),
        i = n.n(o);

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
                i()(e, t, n[t])
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
                history: a()(e.history),
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
                    hash: a()(e.selectedNode.hash),
                    lines: e.selectedNode.lines && a()(e.selectedNode.lines),
                    arrows: e.selectedNode.arrows && a()(e.selectedNode.arrows)
                }) : null
            })
        },
        getFirstFen: function getFirstFen(e) {
            return e.tree.lines[0].length ? e.tree.lines[0][0].beforeFen : e.setup.fen
        }
    }
}, function(e, t, n) {
    e.exports = n(26)(76)
}, function(e, t, n) {
    e.exports = n(26)(15)
}, function(e, t, n) {
    e.exports = n(26)(19)
}, function(e, t) {
    e.exports = vueDLL
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = "icon-background",
        a = "icon-component",
        o = "icon-component-shadow",
        i = "icon-shadow",
        s = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#95bb4a"/>\n  <path d="M9 3.72a.48.48 0 0 0-.44.3L7.24 7.46l-3.68.19a.48.48 0 0 0-.27.84l2.86 2.32-1 3.56a.47.47 0 0 0 .18.5.46.46 0 0 0 .27.09.5.5 0 0 0 .26-.08l3.09-2 3.09 2a.5.5 0 0 0 .26.08.46.46 0 0 0 .27-.09.47.47 0 0 0 .18-.5l-1-3.56 2.86-2.32a.48.48 0 0 0-.27-.84l-3.68-.19L9.44 4A.48.48 0 0 0 9 3.72z" opacity=".1"/>\n  <path d="M9 3.22a.48.48 0 0 0-.44.3L7.24 7l-3.68.19a.48.48 0 0 0-.27.81l2.86 2.32-1 3.56a.47.47 0 0 0 .18.5.46.46 0 0 0 .27.09.5.5 0 0 0 .26-.08l3.09-2 3.09 2a.5.5 0 0 0 .26.08.46.46 0 0 0 .27-.09.47.47 0 0 0 .18-.5l-1-3.56L14.71 8a.48.48 0 0 0-.27-.84L10.76 7 9.44 3.52a.48.48 0 0 0-.44-.3z" fill="#fff"/>\n'),
        c = '\n  <path class="'.concat(i, '" opacity=".3" d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"/>\n  <path class="').concat(r, '" fill="#a88865" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"/>\n  <path class="').concat(o, '" opacity=".3" d="M8.4,6c-1-.75-2.52-1.09-4.83-1.09H2.49v8.71H3.57A8.13,8.13,0,0,1,8.4,14.76Z"/>\n  <path class="').concat(o, '" opacity=".3" d="M9.49,14.76a8.14,8.14,0,0,1,4.84-1.17h1.08V4.88H14.33C12,4.88,10.52,5.22,9.49,6Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M8.4,5.47c-1-.75-2.52-1.09-4.83-1.09H3v8.71h.58A8.13,8.13,0,0,1,8.4,14.26Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M9.49,14.26a8.14,8.14,0,0,1,4.84-1.17h.58V4.38h-.58c-2.32,0-3.81.34-4.84,1.09Z"/>\n'),
        l = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#c93430"/>\n  <g class="').concat(o, '" opacity=".2">\n    <path d="M14.68 5.48a2.77 2.77 0 0 0-.77-.92 3.81 3.81 0 0 0-1.1-.56 3.86 3.86 0 0 0-1.2-.19 3.68 3.68 0 0 0-1.19.19 5.72 5.72 0 0 0-.9.37l-.33.2a3.5 3.5 0 0 1 .43.63A3.26 3.26 0 0 1 10 6.66a.45.45 0 0 0 .19 0l.11-.09a1.13 1.13 0 0 1 .28-.18 2.54 2.54 0 0 1 .42-.23 1.61 1.61 0 0 1 .49-.07 1.13 1.13 0 0 1 .73.24.74.74 0 0 1 .3.6 1 1 0 0 1-.25.68c-.17.19-.39.4-.65.64s-.33.27-.49.42a3.08 3.08 0 0 0-.45.55 2.55 2.55 0 0 0-.33.66 2.43 2.43 0 0 0-.13.84v.35a.34.34 0 0 0 .32.32h1.72a.27.27 0 0 0 .22-.1.29.29 0 0 0 .09-.22v-.21a.93.93 0 0 1 .27-.7 6.62 6.62 0 0 1 .65-.64A4.62 4.62 0 0 0 14 9a5.58 5.58 0 0 0 .49-.6 2.92 2.92 0 0 0 .36-.73 3.08 3.08 0 0 0 .14-1 2.76 2.76 0 0 0-.31-1.19zM12.3 12.72h-1.89a.29.29 0 0 0-.22.09.33.33 0 0 0-.09.22v1.84a.31.31 0 0 0 .09.22.26.26 0 0 0 .22.1h1.89a.33.33 0 0 0 .23-.09.34.34 0 0 0 .1-.23V13a.34.34 0 0 0-.1-.22.33.33 0 0 0-.23-.06zM6.68 12.72H4.79a.29.29 0 0 0-.22.09.33.33 0 0 0-.09.22v1.84a.35.35 0 0 0 .08.22.28.28 0 0 0 .23.1h1.89a.35.35 0 0 0 .23-.09.34.34 0 0 0 .1-.23V13a.34.34 0 0 0-.1-.22.35.35 0 0 0-.23-.06zM8.28 4.56A3.63 3.63 0 0 0 7.19 4 3.86 3.86 0 0 0 6 3.81 3.78 3.78 0 0 0 4.79 4a6.65 6.65 0 0 0-.9.37 2.84 2.84 0 0 0-.55.38l-.21.19a.31.31 0 0 0 0 .41l1 1.21a.31.31 0 0 0 .21.13.54.54 0 0 0 .25-.06l.1-.09a1.46 1.46 0 0 1 .29-.18 2.2 2.2 0 0 1 .41-.18 1.57 1.57 0 0 1 .49-.07 1.13 1.13 0 0 1 .73.24.74.74 0 0 1 .3.6 1 1 0 0 1-.26.68c-.17.19-.38.4-.64.64a6.4 6.4 0 0 0-.49.42 2.7 2.7 0 0 0-.52.53 2.94 2.94 0 0 0-.34.66 2.7 2.7 0 0 0-.12.84v.35a.29.29 0 0 0 .09.22.28.28 0 0 0 .22.1h1.76a.26.26 0 0 0 .21-.1.29.29 0 0 0 .09-.22v-.21a1 1 0 0 1 .27-.7 8.22 8.22 0 0 1 .66-.64A5.68 5.68 0 0 0 8.36 9a7 7 0 0 0 .48-.6 3 3 0 0 0 .37-.73 3.1 3.1 0 0 0 .13-1 2.67 2.67 0 0 0-1.06-2.11z"/>\n  </g>\n  <path class="').concat(a, '" fill="#fff" d="M14.68 5a2.77 2.77 0 0 0-.77-.92 3.81 3.81 0 0 0-1.1-.56 3.86 3.86 0 0 0-1.2-.19 3.68 3.68 0 0 0-1.19.17 5.72 5.72 0 0 0-.9.37l-.33.2a3.5 3.5 0 0 1 .43.63A3.26 3.26 0 0 1 10 6.16a.45.45 0 0 0 .19 0l.09-.16a1.13 1.13 0 0 1 .28-.18 2.54 2.54 0 0 1 .44-.16 1.61 1.61 0 0 1 .49-.07 1.13 1.13 0 0 1 .73.24.74.74 0 0 1 .3.6 1 1 0 0 1-.25.68c-.17.19-.39.4-.65.64s-.33.27-.49.42a3.08 3.08 0 0 0-.45.55 2.55 2.55 0 0 0-.33.66 2.43 2.43 0 0 0-.13.84v.35a.34.34 0 0 0 .32.32h1.72a.27.27 0 0 0 .22-.1.29.29 0 0 0 .09-.22v-.21a.93.93 0 0 1 .27-.7 6.62 6.62 0 0 1 .62-.66 4.62 4.62 0 0 0 .54-.46 5.58 5.58 0 0 0 .49-.6 2.92 2.92 0 0 0 .36-.73 3.08 3.08 0 0 0 .14-1A2.76 2.76 0 0 0 14.68 5zM12.3 12.22h-1.89a.29.29 0 0 0-.22.09.33.33 0 0 0-.09.22v1.84a.31.31 0 0 0 .09.22.26.26 0 0 0 .22.1h1.89a.33.33 0 0 0 .23-.09.34.34 0 0 0 .1-.23v-1.84a.34.34 0 0 0-.1-.22.33.33 0 0 0-.23-.09zM6.68 12.22H4.79a.29.29 0 0 0-.22.09.33.33 0 0 0-.09.22v1.84a.35.35 0 0 0 .08.22.28.28 0 0 0 .23.1h1.89a.35.35 0 0 0 .23-.09.34.34 0 0 0 .1-.23v-1.84a.34.34 0 0 0-.1-.22.35.35 0 0 0-.23-.09zM8.28 4.06a3.63 3.63 0 0 0-1.09-.56A3.86 3.86 0 0 0 6 3.31a3.78 3.78 0 0 0-1.2.17 6.65 6.65 0 0 0-.9.37 2.84 2.84 0 0 0-.55.38l-.21.19a.31.31 0 0 0 0 .41L4.09 6a.31.31 0 0 0 .21.13.54.54 0 0 0 .25-.06l.1-.07a1.46 1.46 0 0 1 .29-.18 2.2 2.2 0 0 1 .41-.18 1.57 1.57 0 0 1 .49-.07 1.13 1.13 0 0 1 .73.24.74.74 0 0 1 .3.6 1 1 0 0 1-.26.68c-.17.19-.38.4-.64.64a6.4 6.4 0 0 0-.49.42 2.7 2.7 0 0 0-.48.57 2.94 2.94 0 0 0-.34.66 2.7 2.7 0 0 0-.12.84v.35a.29.29 0 0 0 .09.22.28.28 0 0 0 .22.1h1.76a.26.26 0 0 0 .21-.1.29.29 0 0 0 .09-.22v-.21a1 1 0 0 1 .27-.7A8.22 8.22 0 0 1 7.84 9a5.68 5.68 0 0 0 .52-.48 7 7 0 0 0 .48-.6 3 3 0 0 0 .37-.73 3.1 3.1 0 0 0 .13-1 2.67 2.67 0 0 0-1.06-2.13z"/>\n'),
        u = '\n  <path class="'.concat(i, '" opacity=".3" d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"/>\n  <path class="').concat(r, '" fill="#1baca6" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"/>\n  <path class="').concat(o, '" opacity=".2" d="M12.57,14.85a.3.3,0,0,1-.1.24.32.32,0,0,1-.23.1h-2a.3.3,0,0,1-.24-.1.41.41,0,0,1-.08-.24V13a.32.32,0,0,1,.09-.23.29.29,0,0,1,.23-.1h2a.32.32,0,0,1,.23.1.29.29,0,0,1,.1.23Zm-.11-3.93a.33.33,0,0,1-.1.23.34.34,0,0,1-.23.08H10.35a.32.32,0,0,1-.34-.31L9.86,4.15A.42.42,0,0,1,10,3.91a.3.3,0,0,1,.24-.1H12.3a.36.36,0,0,1,.25.1.42.42,0,0,1,.09.24Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M12.57,14.35a.3.3,0,0,1-.1.24.32.32,0,0,1-.23.1h-2a.3.3,0,0,1-.24-.1.41.41,0,0,1-.08-.24v-1.9a.32.32,0,0,1,.09-.23.29.29,0,0,1,.23-.1h2a.32.32,0,0,1,.23.1.29.29,0,0,1,.1.23Zm-.11-3.93a.33.33,0,0,1-.1.23.34.34,0,0,1-.23.08H10.35a.32.32,0,0,1-.34-.31L9.86,3.65A.42.42,0,0,1,10,3.41a.3.3,0,0,1,.24-.1H12.3a.36.36,0,0,1,.25.1.42.42,0,0,1,.09.24Z"/>\n  <path class="').concat(o, '" opacity=".2" d="M8.07,14.85a.3.3,0,0,1-.1.24.32.32,0,0,1-.23.1h-2a.3.3,0,0,1-.24-.1.41.41,0,0,1-.08-.24V13a.32.32,0,0,1,.09-.23.29.29,0,0,1,.23-.1h2a.32.32,0,0,1,.23.1.29.29,0,0,1,.1.23ZM8,10.92a.33.33,0,0,1-.1.23.34.34,0,0,1-.23.08H5.85a.32.32,0,0,1-.34-.31L5.36,4.15a.42.42,0,0,1,.09-.24.3.3,0,0,1,.24-.1H7.8a.36.36,0,0,1,.25.1.42.42,0,0,1,.09.24Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M8.07,14.35a.3.3,0,0,1-.1.24.32.32,0,0,1-.23.1h-2a.3.3,0,0,1-.24-.1.41.41,0,0,1-.08-.24v-1.9a.32.32,0,0,1,.09-.23.29.29,0,0,1,.23-.1h2a.32.32,0,0,1,.23.1.29.29,0,0,1,.1.23ZM8,10.42a.33.33,0,0,1-.1.23.34.34,0,0,1-.23.08H5.85a.32.32,0,0,1-.34-.31L5.36,3.65a.42.42,0,0,1,.09-.24.3.3,0,0,1,.24-.1H7.8a.36.36,0,0,1,.25.1.42.42,0,0,1,.09.24Z"/>\n'),
        d = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#95bb4a"/>\n  <path class="').concat(o, '" d="M15.11 6.81l-5.66 5.66-1.66 1.65a.38.38 0 0 1-.55 0L2.89 9.78a.39.39 0 0 1 0-.55l1.39-1.39a.39.39 0 0 1 .55 0l2.69 2.69 5.65-5.65a.38.38 0 0 1 .55 0l1.39 1.38a.39.39 0 0 1 0 .55z" opacity=".2"/>\n  <path class="').concat(a, '" d="M15.11 6.31L9.45 12l-1.66 1.62a.38.38 0 0 1-.55 0L2.89 9.28a.39.39 0 0 1 0-.55l1.39-1.39a.39.39 0 0 1 .55 0L7.52 10l5.65-5.65a.38.38 0 0 1 .55 0l1.39 1.38a.39.39 0 0 1 0 .58z" fill="#fff"/>\n'),
        p = '\n  <path class="'.concat(i, '" opacity=".3" d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"/>\n  <path class="').concat(r, '" fill="#5a9ac0" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"/>\n  <path class="').concat(o, '" opacity=".2" d="M15,6.8,7.81,14a.38.38,0,0,1-.55,0L3,9.73a.41.41,0,0,1,0-.55L4.36,7.81a.4.4,0,0,1,.54,0l2.63,2.64L13.1,4.9a.38.38,0,0,1,.55,0L15,6.25A.38.38,0,0,1,15,6.8Z"/>\n  <path class="').concat(a, '" fill="#ffffff" d="M15,6.3,7.81,13.49a.38.38,0,0,1-.55,0L3,9.23a.41.41,0,0,1,0-.55L4.36,7.31a.4.4,0,0,1,.54,0L7.53,10,13.1,4.4a.38.38,0,0,1,.55,0L15,5.75A.38.38,0,0,1,15,6.3Z"/>\n'),
        m = '\n  <path class="'.concat(i, '" opacity=".3" d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"/>\n  <path class="').concat(r, '" fill="#a09f9e" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M9,2.5A6.5,6.5,0,1,0,15.5,9,6.5,6.5,0,0,0,9,2.5Z"/>\n  <path class="').concat(r, '" fill="#a09f9e" d="M9,5a4,4,0,1,0,4,4A4,4,0,0,0,9,5Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M9,7.5A1.5,1.5,0,1,0,10.5,9,1.5,1.5,0,0,0,9,7.5Z"/>\n'),
        f = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#f0c15c"/>\n  <path class="').concat(o, '" opacity=".3" d="M13.51 14.85a.3.3 0 0 1-.1.24.33.33 0 0 1-.24.1h-2a.29.29 0 0 1-.23-.1.36.36 0 0 1-.09-.24V13a.33.33 0 0 1 .1-.23.27.27 0 0 1 .22-.1h2a.33.33 0 0 1 .24.1.29.29 0 0 1 .1.23zm-.12-3.93a.29.29 0 0 1-.1.23.31.31 0 0 1-.23.08h-1.77a.31.31 0 0 1-.34-.31l-.15-6.77a.49.49 0 0 1 .08-.24.32.32 0 0 1 .25-.1h2.11a.38.38 0 0 1 .25.1.42.42 0 0 1 .09.24z"/>\n  <path class="').concat(a, '" fill="#fff" d="M13.51 14.35a.3.3 0 0 1-.1.24.33.33 0 0 1-.24.1h-2a.29.29 0 0 1-.23-.1.36.36 0 0 1-.09-.24v-1.9a.33.33 0 0 1 .1-.23.27.27 0 0 1 .22-.1h2a.33.33 0 0 1 .24.1.29.29 0 0 1 .1.23zm-.12-3.93a.29.29 0 0 1-.1.23.31.31 0 0 1-.23.08h-1.77a.31.31 0 0 1-.34-.31l-.15-6.77a.49.49 0 0 1 .08-.24.32.32 0 0 1 .25-.1h2.11a.38.38 0 0 1 .25.1.42.42 0 0 1 .09.24z"/>\n  <path class="').concat(o, '" opacity=".3" d="M7.5 14.87a.33.33 0 0 1-.09.23.35.35 0 0 1-.23.09H5.29a.28.28 0 0 1-.23-.1.35.35 0 0 1-.06-.22V13a.33.33 0 0 1 .09-.22.29.29 0 0 1 .22-.09h1.87a.35.35 0 0 1 .23.09.33.33 0 0 1 .09.22zm2.21-7.16a3 3 0 0 1-.37.73 7 7 0 0 1-.48.6 5.68 5.68 0 0 1-.52.48 8.22 8.22 0 0 0-.66.64 1 1 0 0 0-.27.7v.21a.29.29 0 0 1-.09.22.26.26 0 0 1-.21.1H5.38a.28.28 0 0 1-.22-.1.29.29 0 0 1-.09-.22v-.35a2.7 2.7 0 0 1 .12-.84 3.39 3.39 0 0 1 .33-.66A3.12 3.12 0 0 1 6 8.67a6.4 6.4 0 0 1 .49-.42c.25-.24.47-.45.64-.64a1 1 0 0 0 .26-.68.74.74 0 0 0-.3-.6 1.14 1.14 0 0 0-.73-.24 1.53 1.53 0 0 0-.49.07 2.2 2.2 0 0 0-.41.18 1.46 1.46 0 0 0-.29.18l-.1.09a.54.54 0 0 1-.25.06.31.31 0 0 1-.21-.13l-1-1.21a.31.31 0 0 1 0-.41l.21-.19a2.84 2.84 0 0 1 .55-.38A6.65 6.65 0 0 1 5.29 4a3.74 3.74 0 0 1 1.2-.17 3.86 3.86 0 0 1 1.2.17 3.75 3.75 0 0 1 1.09.56 2.67 2.67 0 0 1 1.06 2.19 3.1 3.1 0 0 1-.13.96z"/>\n  <path class="').concat(a, '" fill="#fff" d="M7.5 14.37a.33.33 0 0 1-.09.23.35.35 0 0 1-.23.09H5.29a.28.28 0 0 1-.23-.1.35.35 0 0 1-.06-.22v-1.84a.33.33 0 0 1 .09-.22.29.29 0 0 1 .22-.09h1.87a.35.35 0 0 1 .23.09.33.33 0 0 1 .09.22zm2.21-7.16a3 3 0 0 1-.37.73 7 7 0 0 1-.48.6 5.68 5.68 0 0 1-.52.46 8.22 8.22 0 0 0-.66.64 1 1 0 0 0-.27.7v.21a.29.29 0 0 1-.09.22.26.26 0 0 1-.21.1H5.38a.28.28 0 0 1-.22-.1.29.29 0 0 1-.09-.22v-.35a2.7 2.7 0 0 1 .12-.84 3.39 3.39 0 0 1 .33-.66A3.12 3.12 0 0 1 6 8.17a6.4 6.4 0 0 1 .49-.42c.25-.24.47-.45.64-.64a1 1 0 0 0 .26-.68.74.74 0 0 0-.3-.6 1.14 1.14 0 0 0-.73-.24 1.53 1.53 0 0 0-.49.07 2.2 2.2 0 0 0-.41.18 1.46 1.46 0 0 0-.31.16l-.1.09a.54.54 0 0 1-.25.06.31.31 0 0 1-.21-.15l-1-1.21a.31.31 0 0 1 0-.41l.21-.19a2.84 2.84 0 0 1 .55-.38 6.65 6.65 0 0 1 .9-.37 3.74 3.74 0 0 1 1.2-.17 3.86 3.86 0 0 1 1.2.19 3.75 3.75 0 0 1 1.09.56 2.67 2.67 0 0 1 1.1 2.23 3.1 3.1 0 0 1-.13.96z"/>\n'),
        h = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#c93430"/>\n  <path class="').concat(o, '" d="M14 12.58a.4.4 0 0 1 0 .56l-1.38 1.38a.4.4 0 0 1-.56 0L9 11.44l-3.08 3.08a.4.4 0 0 1-.56 0L4 13.14a.4.4 0 0 1 0-.56L7.06 9.5 4 6.42a.4.4 0 0 1 0-.56l1.36-1.38a.4.4 0 0 1 .56 0L9 7.56l3.08-3.08a.4.4 0 0 1 .56 0L14 5.86a.4.4 0 0 1 0 .56L10.94 9.5z" opacity=".2"/>\n  <path class="').concat(a, '" d="M14 12.08a.4.4 0 0 1 0 .56L12.64 14a.4.4 0 0 1-.56 0L9 10.94 5.92 14a.4.4 0 0 1-.56 0L4 12.64a.4.4 0 0 1 0-.56L7.06 9 4 5.92a.4.4 0 0 1 0-.56L5.36 4a.4.4 0 0 1 .56 0L9 7.06 12.08 4a.4.4 0 0 1 .56 0L14 5.36a.4.4 0 0 1 0 .56L10.94 9z" fill="#f1f2f2"/>\n'),
        g = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#dd5357"/>\n  <path class="').concat(o, '" d="M14 12.58a.4.4 0 0 1 0 .56l-1.38 1.38a.4.4 0 0 1-.56 0L9 11.44l-3.08 3.08a.4.4 0 0 1-.56 0L4 13.14a.4.4 0 0 1 0-.56L7.06 9.5 4 6.42a.4.4 0 0 1 0-.56l1.36-1.38a.4.4 0 0 1 .56 0L9 7.56l3.08-3.08a.4.4 0 0 1 .56 0L14 5.86a.4.4 0 0 1 0 .56L10.94 9.5z" opacity=".2"/>\n  <path class="').concat(a, '" d="M14 12.08a.4.4 0 0 1 0 .56L12.64 14a.4.4 0 0 1-.56 0L9 10.94 5.92 14a.4.4 0 0 1-.56 0L4 12.64a.4.4 0 0 1 0-.56L7.06 9 4 5.92a.4.4 0 0 1 0-.56L5.36 4a.4.4 0 0 1 .56 0L9 7.06 12.08 4a.4.4 0 0 1 .56 0L14 5.36a.4.4 0 0 1 0 .56L10.94 9z" fill="#f1f2f2"/>\n'),
        b = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#e6912c"/>\n  <path class="').concat(o, '" d="M9.82 14.87a.34.34 0 0 1-.1.23.33.33 0 0 1-.23.09H7.6a.26.26 0 0 1-.22-.1.31.31 0 0 1-.09-.22V13a.33.33 0 0 1 .09-.22.29.29 0 0 1 .22-.09h1.89a.33.33 0 0 1 .23.09.34.34 0 0 1 .1.22zM12 7.71a3.31 3.31 0 0 1-.36.73 7.11 7.11 0 0 1-.49.6 4.62 4.62 0 0 1-.52.48 6.62 6.62 0 0 0-.65.64.93.93 0 0 0-.27.7v.21a.29.29 0 0 1-.09.22.28.28 0 0 1-.22.1H7.69a.3.3 0 0 1-.22-.1.29.29 0 0 1-.09-.22v-.35a2.43 2.43 0 0 1 .13-.84 2.55 2.55 0 0 1 .33-.66 3.08 3.08 0 0 1 .45-.55c.16-.15.33-.29.49-.42s.47-.45.64-.64a1 1 0 0 0 .26-.68.74.74 0 0 0-.3-.6 1.13 1.13 0 0 0-.73-.24 1.57 1.57 0 0 0-.49.07 2.54 2.54 0 0 0-.41.18 1.46 1.46 0 0 0-.29.18l-.1.09a.53.53 0 0 1-.24.06c-.12 0-.19-.07-.21-.13l-1-1.21a.3.3 0 0 1 0-.41l.21-.19a2.67 2.67 0 0 1 .56-.38A5.72 5.72 0 0 1 7.61 4a3.68 3.68 0 0 1 1.19-.19A3.86 3.86 0 0 1 10 4a3.63 3.63 0 0 1 1.09.56 2.79 2.79 0 0 1 .78.92 2.76 2.76 0 0 1 .29 1.27 3.08 3.08 0 0 1-.16.96z" opacity=".2"/>\n  <path class="').concat(a, '" d="M9.82 14.37a.34.34 0 0 1-.1.23.33.33 0 0 1-.23.09H7.6a.26.26 0 0 1-.22-.1.31.31 0 0 1-.09-.22v-1.84a.33.33 0 0 1 .09-.22.29.29 0 0 1 .22-.09h1.89a.33.33 0 0 1 .23.09.34.34 0 0 1 .1.22zM12 7.21a3.31 3.31 0 0 1-.36.73 7.11 7.11 0 0 1-.49.6 4.62 4.62 0 0 1-.52.48 6.62 6.62 0 0 0-.65.64.93.93 0 0 0-.27.7v.21a.29.29 0 0 1-.09.22.28.28 0 0 1-.22.1H7.69a.3.3 0 0 1-.22-.1.29.29 0 0 1-.09-.22v-.35a2.43 2.43 0 0 1 .13-.84 2.55 2.55 0 0 1 .33-.66 3.08 3.08 0 0 1 .45-.55c.16-.15.33-.29.49-.42s.47-.45.64-.64a1 1 0 0 0 .26-.68.74.74 0 0 0-.3-.6 1.13 1.13 0 0 0-.73-.24 1.57 1.57 0 0 0-.49.07 2.54 2.54 0 0 0-.41.18 1.46 1.46 0 0 0-.29.16l-.1.09a.53.53 0 0 1-.24.06C7 6.14 6.93 6.1 6.91 6l-1-1.21a.3.3 0 0 1 0-.41l.21-.19a2.67 2.67 0 0 1 .56-.38 5.72 5.72 0 0 1 .9-.37 3.68 3.68 0 0 1 1.22-.13 3.86 3.86 0 0 1 1.2.19 3.63 3.63 0 0 1 1.09.56 2.79 2.79 0 0 1 .78.92 2.76 2.76 0 0 1 .29 1.27 3.08 3.08 0 0 1-.16.96z" fill="#fff"/>\n'),
        v = '\n  <path\n    class="'.concat(i, '"\n    d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"\n    opacity=".3"></path>\n\n  <path\n    class="').concat(r, '"\n    d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"\n    fill="#8a8886"></path>\n\n  <path\n    d="M3.59,10.23a.25.25,0,0,1,.24-.31l1.08-.15a.49.49,0,0,1,.2.06.25.25,0,0,1,.11.2,3.58,3.58,0,0,0,.42,1.28,3.68,3.68,0,0,0,.84,1.06,3.76,3.76,0,0,0,1.16.69A3.9,3.9,0,0,0,9,13.31,3.58,3.58,0,0,0,10.47,13a3.94,3.94,0,0,0,1.22-.81A4.09,4.09,0,0,0,12.5,11a3.74,3.74,0,0,0,0-3,4.09,4.09,0,0,0-.81-1.2A3.94,3.94,0,0,0,10.47,6,3.65,3.65,0,0,0,9,5.69a3.61,3.61,0,0,0-1.23.21,3.23,3.23,0,0,0-1.09.6L7.77,7.59c.16.15.21.29.16.38s-.18.17-.4.17H4.37a.36.36,0,0,1-.2,0A.76.76,0,0,1,4,8a.52.52,0,0,1-.17-.38V4.45c0-.2.06-.33.17-.38s.25,0,.41.16L5.51,5.34a5.83,5.83,0,0,1,1.64-1A5.19,5.19,0,0,1,9,4.05a5.3,5.3,0,0,1,2.12.44,5,5,0,0,1,1.73,1.16A5.59,5.59,0,0,1,14,7.38a5.23,5.23,0,0,1,.44,2.12A5.16,5.16,0,0,1,14,11.62a5.59,5.59,0,0,1-1.16,1.73,5.32,5.32,0,0,1-1.73,1.18A5.64,5.64,0,0,1,9,15a5.23,5.23,0,0,1-1.94-.37A5.27,5.27,0,0,1,4.21,12.1,5.1,5.1,0,0,1,3.59,10.23Z"\n    class="').concat(o, '"\n    opacity=".3"></path>\n\n  <path\n    d="M3.59,9.73a.25.25,0,0,1,.24-.31l1.08-.15a.49.49,0,0,1,.2.06.25.25,0,0,1,.11.2,3.58,3.58,0,0,0,.42,1.28,3.68,3.68,0,0,0,.84,1.06,3.76,3.76,0,0,0,1.16.69A3.9,3.9,0,0,0,9,12.81a3.58,3.58,0,0,0,1.47-.31,3.94,3.94,0,0,0,1.22-.81,4.09,4.09,0,0,0,.81-1.2,3.74,3.74,0,0,0,0-3,4.09,4.09,0,0,0-.81-1.2,3.94,3.94,0,0,0-1.22-.81A3.65,3.65,0,0,0,9,5.19a3.61,3.61,0,0,0-1.23.21A3.23,3.23,0,0,0,6.68,6L7.77,7.09c.16.15.21.29.16.38s-.18.17-.4.17H4.37a.36.36,0,0,1-.2,0A.76.76,0,0,1,4,7.49a.52.52,0,0,1-.17-.38V4c0-.2.06-.33.17-.38s.25,0,.41.16L5.51,4.84a5.83,5.83,0,0,1,1.64-1A5.19,5.19,0,0,1,9,3.55,5.3,5.3,0,0,1,11.12,4a5,5,0,0,1,1.73,1.16A5.59,5.59,0,0,1,14,6.88,5.23,5.23,0,0,1,14.45,9,5.16,5.16,0,0,1,14,11.12a5.59,5.59,0,0,1-1.16,1.73A5.32,5.32,0,0,1,11.12,14,5.64,5.64,0,0,1,9,14.45a5.23,5.23,0,0,1-1.94-.37A5.27,5.27,0,0,1,4.21,11.6,5.1,5.1,0,0,1,3.59,9.73Z"\n    class="').concat(a, '"\n    fill="#ffffff"></path>\n');
    n.d(t, "bestMove", function() {
        return s
    }), n.d(t, "book", function() {
        return c
    }), n.d(t, "blunder", function() {
        return l
    }), n.d(t, "brilliant", function() {
        return u
    }), n.d(t, "correct", function() {
        return d
    }), n.d(t, "excellent", function() {
        return p
    }), n.d(t, "good", function() {
        return m
    }), n.d(t, "inaccuracy", function() {
        return f
    }), n.d(t, "incorrect", function() {
        return h
    }), n.d(t, "missedWin", function() {
        return g
    }), n.d(t, "mistake", function() {
        return b
    }), n.d(t, "undo", function() {
        return v
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }), n.d(t, "b", function() {
        return i
    });
    var r = n(3),
        a = n.n(r),
        o = function createComponentConfig(e, t) {
            var n = document.querySelector(e),
                r = e.replace(/#|\./g, ""),
                o = a()({}, "".concat(r), {});
            return null != n && (o[r] = Object.assign({
                el: e
            }, t(n))), o
        },
        i = function mergePropsData(e, t) {
            return e.propsData = Object.assign({}, e.propsData, t), e
        }
}, , , function(e, t, n) {
    e.exports = n(26)(39)
}, function(e, t, n) {
    "use strict";
    n.d(t, "v", function() {
        return i
    }), n.d(t, "a", function() {
        return s
    }), n.d(t, "b", function() {
        return c
    }), n.d(t, "o", function() {
        return l
    }), n.d(t, "g", function() {
        return u
    }), n.d(t, "h", function() {
        return d
    }), n.d(t, "i", function() {
        return p
    }), n.d(t, "j", function() {
        return m
    }), n.d(t, "k", function() {
        return f
    }), n.d(t, "l", function() {
        return h
    }), n.d(t, "p", function() {
        return g
    }), n.d(t, "n", function() {
        return b
    }), n.d(t, "q", function() {
        return v
    }), n.d(t, "r", function() {
        return y
    }), n.d(t, "s", function() {
        return _
    }), n.d(t, "t", function() {
        return w
    }), n.d(t, "u", function() {
        return O
    }), n.d(t, "c", function() {
        return E
    }), n.d(t, "d", function() {
        return k
    }), n.d(t, "f", function() {
        return C
    }), n.d(t, "m", function() {
        return S
    }), n.d(t, "e", function() {
        return displayNumber
    });
    var r = n(2),
        a = n(15),
        o = n(38),
        i = function normalizeAnnotation(e) {
            return Object.prototype.hasOwnProperty.call(a.c, e) || Object.prototype.hasOwnProperty.call(a.b, e) ? l(e) ? a.c[e] : normalizeAnnotation(a.b[e]) : e || ""
        },
        s = function additionalAnnotationExists(e, t) {
            return e.additionalAnnotation && Array.isArray(e.additionalAnnotation) && i(e.additionalAnnotation[0]) === i(t)
        },
        c = function annotationExists(e, t) {
            return i(e.annotation) === i(t)
        },
        l = function isNagFormat(e) {
            return e && "$" === e.charAt(0)
        },
        u = function hasAdditionalAnnotation(e) {
            return e.additionalAnnotation && e.additionalAnnotation[0]
        },
        d = function hasAnnotation(e) {
            return Object.prototype.hasOwnProperty.call(e, "annotation")
        },
        p = function hasComment(e) {
            return Boolean(e && "string" == typeof e.comment)
        },
        m = function hasCommentBefore(e) {
            return Boolean(e && "string" == typeof e.commentBefore)
        },
        f = function hasLines(e) {
            return Boolean(e && e.lines && e.lines.length)
        },
        h = function isEnPassant(e) {
            return 4 === e.flags
        },
        g = function isOnFirstLineOfParent(e, t) {
            return e.ids.line === t.lines[0]
        },
        b = function isLastMoveOnLine(e, t) {
            return e.ids.move === t.lines[e.ids.line].length - 1
        },
        v = function isOnLastLineOfParent(e, t) {
            return e.ids.line === t.lines[t.lines.length - 1]
        },
        y = function isOnMainLine(e) {
            return r.a.isMainLine(e.ids.line)
        },
        _ = function nodeIsALimit(e, t, n) {
            return Object.prototype.hasOwnProperty.call(e, n) && Object.prototype.hasOwnProperty.call(e[n], "ids") && e[n].ids.move === t.ids.move && e[n].ids.line === t.ids.line
        },
        w = function nodeIsAfterNodeLimitEnd(e, t) {
            var n = e[o.g.END];
            return !(!n || !Object.prototype.hasOwnProperty.call(n, "ids")) && (t.ids.line > n.ids.line || t.ids.line === n.ids.line && t.ids.move > n.ids.move)
        },
        O = function nodeIsBeforeLimitBegin(e, t) {
            var n = e[o.g.BEGIN];
            return !(!n || !Object.prototype.hasOwnProperty.call(n, "ids")) && (t.ids.line < e.begin.ids.line || t.ids.line === e.begin.ids.line && t.ids.move < e.begin.ids.move)
        },
        E = function canBeDeleted(e, t) {
            return !(t && y(e))
        },
        k = function cleanCommentString(e) {
            var t;
            return " " === (t = (t = e.replace(/<\/?[^>]+(>|$)/g, "")).replace(/&nbsp;/g, " ")) && (t = ""), t
        },
        C = function generateAnnotationString(e) {
            var t = "";
            return e.annotation && (t = "".concat(t).concat(i(e.annotation))), e.additionalAnnotation && e.additionalAnnotation[0] && (t = "".concat(t, "&nbsp;").concat(i(e.additionalAnnotation[0]))), t
        },
        S = function isFirstNodeOnFormattedLine(e) {
            return 0 === e.ids.move
        },
        A = function shouldShowDisplayNumber(e) {
            return Boolean(e.isWhite || e.isFirstNodeOnLine || e.previousHasComment || e.previousHasLines)
        },
        T = function shouldShowEllipsisOnBlackMoveNumber(e) {
            return Boolean(!e.isWhite && (e.previousHasComment || e.previousHasLines || e.isFirstNodeOnLine))
        };

    function displayNumber(e, t) {
        var n = "";
        return A(e) && (n += "".concat(e.nodeMoveNumber + (t - 1), "."), T(e) && (n += ".."), n += "&nbsp;"), n
    }
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "form-button",
            mixins: [n(39).a],
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                },
                fullWidth: {
                    type: Boolean,
                    default: !1
                },
                href: {
                    type: String,
                    required: !1
                },
                size: {
                    type: String,
                    required: !1
                },
                theme: {
                    type: String,
                    required: !1
                },
                type: {
                    type: String,
                    default: "button"
                }
            },
            methods: {
                handleClick: function handleClick() {
                    this.href && (window.location = this.href)
                }
            }
        },
        a = n(102),
        o = n(5);
    var i = Object(o.a)(r, function() {
        var e, t = this,
            n = t.$createElement;
        return (t._self._c || n)("button", t._g({
            class: [t.componentClasses(), t.$style[t.size], t.$style[t.theme], (e = {}, e[t.$style["full-width"]] = t.fullWidth, e)],
            attrs: {
                disabled: t.disabled,
                type: t.type
            },
            on: {
                click: t.handleClick
            }
        }, t.$listeners), [t._t("default")], 2)
    }, [], !1, function injectStyles(e) {
        this.$style = a.default.locals || a.default
    }, null, null);
    t.a = i.exports
}, , function(e, t, n) {
    "use strict";
    var r, a = n(31),
        o = n(47),
        i = n(9),
        s = n(223),
        c = n(84),
        l = n(37),
        u = function getOptions(e) {
            return l.a.isString(e.value) ? {
                content: e.value
            } : e.value
        },
        d = {
            name: "tooltip",
            created: function created() {
                this.active = null, this.instances = []
            },
            beforeDestroy: function beforeDestroy() {
                this.instances = null, this.clearTooltip()
            },
            methods: {
                bind: function bind(e, t) {
                    this.instances.push({
                        element: e,
                        options: u(t)
                    }), e.addEventListener("mouseenter", this.showTooltip)
                },
                update: function update(e, t) {
                    var n = this.instances.find(function(t) {
                        return t.element === e
                    });
                    n && (n.options = u(t))
                },
                unbind: function unbind(e) {
                    var t = this.instances.find(function(t) {
                        return t.element === e
                    });
                    t && (this.active === t && this.hideTooltip({
                        target: t.element
                    }), s.a.remove(this.instances, t), e.removeEventListener("mouseenter", this.showTooltip), e.removeEventListener("mouseleave", this.hideTooltip))
                },
                showTooltip: function showTooltip(e) {
                    var t = this,
                        n = e.target,
                        r = this.instances.find(function(e) {
                            return e.element === n
                        });
                    if (r && r.options && r.options.content) {
                        var a = r.options.delay || 400,
                            s = r.options.position || "top",
                            l = r.options.padding || 0;
                        this.clearTooltip(), r.element.classList.contains(i.f.CONFIRM_OPEN) || (this.active = r, r.element.addEventListener("mouseleave", this.hideTooltip), this.showTimeout = c.a.setTimeout(function() {
                            t.showFrame = window.requestAnimationFrame(function() {
                                t.$refs && t.$refs.content && r.options && (t.$refs.content.innerHTML = r.options.content), t.$el.classList.add(s), Object(o.c)(r.element, t.$el, s, l)
                            })
                        }, a)), r.options.closeOnScroll && this.hideOnScroll(n)
                    }
                },
                hideOnScroll: function hideOnScroll(e) {
                    var t = this;
                    window.addEventListener("scroll", function() {
                        t.hideTooltip({
                            target: e
                        })
                    })
                },
                hideTooltip: function hideTooltip(e) {
                    var t = this,
                        n = e.target;
                    this.instances.find(function(e) {
                        return e.element === n
                    }) && (this.clearTooltip(), this.hideFrame = window.requestAnimationFrame(function() {
                        t.$refs && t.$refs.content && (t.$refs.content.innerHTML = null), Object(o.d)(t.$el)
                    }))
                },
                clearTooltip: function clearTooltip() {
                    this.active && (this.active.element.removeEventListener("mouseleave", this.hideTooltip), this.active = null), c.a.clearTimeout(this.showTimeout), window.cancelAnimationFrame(this.hideFrame), window.cancelAnimationFrame(this.showFrame), window.removeEventListener("scroll", this.hideOnScroll)
                }
            }
        },
        p = n(5),
        m = Object(p.a)(d, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "tooltip tip vue-tooltip"
            }, [t("div", {
                staticClass: "arrow"
            }), this._v(" "), t("div", {
                ref: "content",
                staticClass: "inner"
            })])
        }, [], !1, null, null, null).exports,
        f = a.default.extend(m),
        h = !1,
        g = function getTooltip() {
            if (r || (r = new f), !h) {
                var e = document.createElement("div");
                document.body.appendChild(e), r.$mount(e), h = !0
            }
            return r
        };
    t.a = {
        bind: function bind(e, t) {
            return g().bind(e, t)
        },
        componentUpdated: function componentUpdated(e, t) {
            return g().update(e, t)
        },
        unbind: function unbind(e, t) {
            return g().unbind(e, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(31);
    t.a = new r.default
}, function(e, t, n) {
    "use strict";
    var r = n(42),
        a = n.n(r);

    function isNull(e) {
        return null === e
    }

    function isUndefined(e) {
        return void 0 === e
    }

    function isObject(e) {
        return !isNull(e) && "object" === a()(e)
    }
    t.a = {
        isString: function isString(e) {
            return "string" == typeof e
        },
        isFunction: function isFunction(e) {
            return "function" == typeof e
        },
        isNumber: function isNumber(e) {
            return "number" == typeof e
        },
        isNil: function isNil(e) {
            return isNull(e) || isUndefined(e)
        },
        isObject: isObject,
        isPlainObject: function isPlainObject(e) {
            return !!isObject(e) && (e.constructor && "Object" === e.constructor.name)
        },
        isArray: function isArray(e) {
            return Array.isArray(e)
        },
        isError: function isError(e) {
            if (!isObject(e)) return !1;
            var t = Object.prototype.toString.call(e);
            return "[object Error]" === t || "[object DOMException]" === t
        },
        isUndefined: isUndefined
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return u
    }), n.d(t, "a", function() {
        return d
    }), n.d(t, "e", function() {
        return p
    }), n.d(t, "c", function() {
        return f
    }), n.d(t, "d", function() {
        return h
    }), n.d(t, "g", function() {
        return g
    }), n.d(t, "f", function() {
        return b
    }), n.d(t, "h", function() {
        return v
    });
    var r, a, o, i = n(3),
        s = n.n(i),
        c = n(15),
        l = n(0),
        u = {
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
        p = {
            CLEAR_ANALYSIS: "clear-analysis-on-confirm"
        },
        m = [{
            code: "$1",
            display: c.c.$1,
            meaning: l.a.trans("Good move"),
            action: d.ADD_ANNOTATION
        }, {
            code: "$2",
            display: c.c.$2,
            meaning: l.a.trans("Bad move"),
            action: d.ADD_ANNOTATION
        }, {
            code: "$3",
            display: c.c.$3,
            meaning: l.a.trans("Excellent move"),
            action: d.ADD_ANNOTATION
        }, {
            code: "$4",
            display: c.c.$4,
            meaning: l.a.trans("Blunder"),
            action: d.ADD_ANNOTATION
        }, {
            code: "$5",
            display: c.c.$5,
            meaning: l.a.trans("Speculative move"),
            action: d.ADD_ANNOTATION
        }, {
            code: "$6",
            display: c.c.$6,
            meaning: l.a.trans("Dubious move"),
            action: d.ADD_ANNOTATION
        }, {
            code: "$10",
            display: c.c.$10,
            meaning: l.a.trans("Drawish"),
            action: d.ADD_EVAL_NOTATION
        }, {
            code: "$13",
            display: c.c.$13,
            meaning: l.a.trans("Unclear"),
            action: d.ADD_EVAL_NOTATION
        }, {
            code: "$14",
            display: c.c.$14,
            meaning: l.a.trans("White has a slight advantage"),
            action: d.ADD_EVAL_NOTATION
        }, {
            code: "$15",
            display: c.c.$15,
            meaning: l.a.trans("Black has a slight advantage"),
            action: d.ADD_EVAL_NOTATION
        }, {
            code: "$16",
            display: c.c.$16,
            meaning: l.a.trans("White has a moderate advantage"),
            action: d.ADD_EVAL_NOTATION
        }, {
            code: "$17",
            display: c.c.$17,
            meaning: l.a.trans("Black has a moderate advantage"),
            action: d.ADD_EVAL_NOTATION
        }, {
            code: "$18",
            display: c.c.$18,
            meaning: l.a.trans("White has a decisive advantage"),
            action: d.ADD_EVAL_NOTATION
        }, {
            code: "$19",
            display: c.c.$19,
            meaning: l.a.trans("Black has a decisive advantage"),
            action: d.ADD_EVAL_NOTATION
        }, {
            code: "$22",
            display: c.c.$22,
            meaning: l.a.trans("The position is in zugzwang"),
            action: d.ADD_EVAL_NOTATION
        }, {
            code: "$146",
            display: c.c.$146,
            meaning: l.a.trans("Novelty"),
            action: d.ADD_EVAL_NOTATION
        }],
        f = {
            CLEAR_ALL_ANALYSIS: {
                name: l.a.trans("Clear All Analysis"),
                action: d.CLEAR_ANALYSIS
            },
            CREATE_CONTINUATION: {
                name: l.a.trans("Insert Continuation"),
                action: d.CREATE_CONTINUATION
            },
            CREATE_VARIATION: {
                name: l.a.trans("Insert Alternate Line"),
                action: d.CREATE_VARIATION
            },
            DELETE_COMMENT_AFTER: {
                name: l.a.trans("Delete Comment After"),
                action: d.DELETE_COMMENT,
                position: u.AFTER
            },
            DELETE_COMMENT_BEFORE: {
                name: l.a.trans("Delete Comment Before"),
                action: d.DELETE_COMMENT,
                position: u.BEFORE
            },
            DELETE_LINE: {
                name: l.a.trans("Delete Entire Variation"),
                action: d.DELETE_LINE
            },
            DELETE_MOVE: {
                name: l.a.trans("Delete Move"),
                action: d.DELETE_MOVE
            },
            INSERT_COMMENT_AFTER: {
                name: l.a.trans("Comment After"),
                action: d.INSERT_COMMENT,
                position: u.AFTER
            },
            INSERT_COMMENT_BEFORE: {
                name: l.a.trans("Comment Before"),
                action: d.INSERT_COMMENT,
                position: u.BEFORE
            },
            MOVE_VARIATION_DOWN: {
                name: l.a.trans("Move Variation Down"),
                action: d.MOVE_VARIATION_DOWN
            },
            MOVE_VARIATION_UP: {
                name: l.a.trans("Move Variation Up"),
                action: d.MOVE_VARIATION
            },
            PROMOTE_VARIATION: {
                name: l.a.trans("Promote"),
                action: d.PROMOTE_VARIATION
            },
            REMOVE_ANNOTATION: {
                name: l.a.trans("Remove Annotation"),
                action: d.REMOVE_ANNOTATION
            },
            REMOVE_BEGIN: {
                name: l.a.trans("Remove Begin"),
                action: d.REMOVE_BEGIN
            },
            REMOVE_END: {
                name: l.a.trans("Remove End"),
                action: d.REMOVE_END
            },
            REMOVE_EVAL_ANNOTATION: {
                name: l.a.trans("Remove Evaluation Annotation"),
                action: d.REMOVE_EVAL_ANNOTATION
            },
            REMOVE_FOCUS: {
                name: l.a.trans("Remove Focus"),
                action: d.REMOVE_FOCUS
            },
            SET_BEGIN: {
                name: l.a.trans("Set Begin"),
                action: d.SET_BEGIN
            },
            SET_END: {
                name: l.a.trans("Set End"),
                action: d.SET_END
            },
            SET_FOCUS: {
                name: l.a.trans("Set Focus"),
                action: d.SET_FOCUS
            }
        },
        h = [d.SET_BEGIN, d.SET_END, d.SET_FOCUS, d.REMOVE_BEGIN, d.REMOVE_END, d.REMOVE_FOCUS],
        g = {
            BEGIN: "begin",
            END: "end",
            FOCUS: "focus"
        },
        b = {
            SET: (r = {}, s()(r, d.SET_BEGIN, g.BEGIN), s()(r, d.SET_END, g.END), s()(r, d.SET_FOCUS, g.FOCUS), r),
            REMOVE: (a = {}, s()(a, d.REMOVE_BEGIN, g.BEGIN), s()(a, d.REMOVE_END, g.END), s()(a, d.REMOVE_FOCUS, g.FOCUS), a)
        },
        v = (o = [], m.forEach(function(e) {
            var t = o[o.length - 1] || null;
            t && 4 !== t.length ? t.push(e) : o.push([e])
        }), o)
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        a = n.n(r);
    t.a = {
        props: {
            isDarkMode: {
                type: Boolean,
                default: !1
            }
        },
        methods: {
            componentClasses: function componentClasses() {
                var e;
                return e = {}, a()(e, this.$style.component, !0), a()(e, this.$style.darkMode, this.isDarkMode), e
            }
        }
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
        return r
    }), n.d(t, "c", function() {
        return a
    }), n.d(t, "i", function() {
        return o
    }), n.d(t, "j", function() {
        return i
    }), n.d(t, "h", function() {
        return s
    }), n.d(t, "a", function() {
        return c
    }), n.d(t, "f", function() {
        return u
    }), n.d(t, "g", function() {
        return d
    }), n.d(t, "e", function() {
        return p
    }), n.d(t, "b", function() {
        return m
    });
    var r = function getWindowTitle() {
            return encodeURIComponent(window.document.title)
        },
        a = function getWindowLocation() {
            return encodeURIComponent(window.location.href)
        },
        o = window.location.pathname,
        i = r(),
        s = a();
    window.chessBrowserChecker = {};
    var c = function bookmarkPage() {
        if (window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(i, s, "");
        else if (window.external && "AddFavorite" in window.external) window.external.AddFavorite(s, i);
        else {
            var e = -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac") ? "Cmd" : "Ctrl";
            alert("Press ".concat(e, "+D to bookmark this page."))
        }
    };
    window.chessBrowserChecker.supportedBrowsers = ["Chrome", "edge", "Firefox", "IE", "Safari", "Waterfox"];
    var l = {
        chrome: 74,
        edge: 17,
        firefox: 60,
        safari: 11,
        waterfox: 56
    };
    window.chessBrowserChecker.supportedBrowserVersions = l;
    var u = function printWindow() {
            window.print()
        },
        d = function sendEmail(e, t) {
            window.location.href = "mailto:?".concat(e, "&").concat(t)
        },
        p = function isMobile() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        },
        m = function getBrowser() {
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
                var a = t.match(/(waterfox(?=\/))\/?\s*(\d+)/i) || [];
                if ("Waterfox" === a[1]) return {
                    name: a[1],
                    version: parseInt(a[2], 10)
                }
            }
            return "Safari" === (n = n[2] ? [n[1], n[2]] : [window.navigator.appName, window.navigator.appVersion, "-?"])[0] && null != (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), {
                name: n[0],
                version: parseInt(n[1], 10)
            }
        };
    window.chessBrowserChecker.getBrowserInformation = m;
    window.chessBrowserChecker.isOldBrowser = function isOldBrowser() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
            t = m(e);
        return "Chrome" === t.name ? t.version < l.chrome : "Safari" === t.name ? t.version < l.safari : "Firefox" === t.name ? t.version < l.firefox : "Edge" === t.name ? t.version < l.edge : "IE" === t.name
    }
}, function(e, t, n) {
    e.exports = n(26)(17)
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
        return h
    }), n.d(t, "g", function() {
        return g
    }), n.d(t, "f", function() {
        return b
    }), n.d(t, "e", function() {
        return v
    }), n.d(t, "h", function() {
        return y
    }), n.d(t, "a", function() {
        return _
    }), n.d(t, "b", function() {
        return w
    }), n.d(t, "c", function() {
        return O
    });
    var r = n(8),
        a = n(0),
        o = "web_member_callback_block_member",
        i = "web_user_callback_delete_comment",
        s = "web_user_callback_get_available_flair",
        c = "web_user_callback_load_notes",
        l = "web_member_callback_mute_account",
        u = "web_user_callback_post_note",
        d = "web_user_callback_set_flair",
        p = "web_user_callback_set_status",
        m = "web_user_settings_edit",
        f = "web_member_view",
        h = "#flair-modal",
        g = {
            blockUser: function blockUser(e) {
                return Object(r.a)(o, {
                    username: e
                })
            },
            communityGuidelines: function communityGuidelines() {
                return Object(r.a)("web_policies_community")
            },
            deleteNote: function deleteNote(e) {
                return Object(r.a)(i, {
                    id: e
                })
            },
            disableAccount: function disableAccount(e) {
                return Object(r.a)("web_member_disable", {
                    id: e
                })
            },
            enableAccount: function enableAccount(e) {
                return Object(r.a)("web_member_enable", {
                    id: e
                })
            },
            getFlair: function getFlair(e) {
                return Object(r.a)(s, {
                    username: e
                })
            },
            impersonateUser: function impersonateUser(e) {
                return Object(r.a)("web_user_home", {
                    _impersonate: e
                })
            },
            loadNotes: function loadNotes(e, t, n) {
                return Object(r.a)(c, {
                    userId: e,
                    itemsPerPage: t,
                    page: n
                })
            },
            muteUser: function muteUser(e) {
                return Object(r.a)("web_member_mute", {
                    username: e
                })
            },
            muteUserTemporary: function muteUserTemporary(e) {
                return Object(r.a)(l, {
                    user: e
                })
            },
            postNote: function postNote() {
                return Object(r.a)(u)
            },
            removeAvatar: function removeAvatar(e) {
                return Object(r.a)("web_member_remove_avatar", {
                    username: e
                })
            },
            removeBackground: function removeBackground(e) {
                return Object(r.a)("web_user_callback_remove_user_custom_background", {
                    user: e
                })
            },
            resetFlair: function resetFlair(e) {
                return Object(r.a)("web_member_reset_flair", {
                    username: e
                })
            },
            setCode: function setCode() {
                return Object(r.a)(d)
            },
            setFlairStatus: function setFlairStatus() {
                return Object(r.a)(p)
            },
            settings: function settings() {
                return Object(r.a)(m)
            },
            stopImpersonateUser: function stopImpersonateUser(e, t) {
                return Object(r.a)(e, t)
            },
            unmuteUser: function unmuteUser(e) {
                return Object(r.a)("web_member_unmute", {
                    username: e
                })
            },
            userUrl: function userUrl(e) {
                return Object(r.a)(f, {
                    username: e
                })
            }
        },
        b = {
            NOTES_GAMES_CONTAINER: "notes-games-container",
            PROFILE_ACTIONS: "profile-actions",
            PROFILE_NOTES_BTN: "profile-notes-btn",
            PROFILE_NOTES_BTN_OPENED: "profile-notes-btn-opened",
            PROFILE_NOTES_COLLAPSE: "profile-notes-collapse",
            PROFILE_NOTES_COLLAPSE_SHOW: "profile-notes-collapse-show",
            ROOT_PROFILE: "view-profile",
            STOP_IMPERSONATE: "stop-impersonate",
            USER_STATUS: "user-profile-status"
        },
        v = 50,
        y = {
            disableAccountConfirm: a.a.trans("Are you sure you want to disable this account?"),
            editStatus: a.a.trans("Edit status"),
            enableAccountConfirm: a.a.trans("Are you sure you want to enable this account?"),
            enterStatus: a.a.trans("Enter a status here"),
            impersonateConfirm: a.a.trans("Are you sure you want to impersonate this user?"),
            muteError: a.a.trans("Error occurred"),
            muteUserConfirm: a.a.trans("Are you sure you want to mute this user?"),
            removeAboutConfirm: a.a.trans("Are you sure you want to remove user About section?"),
            removeAvatarConfirm: a.a.trans("Are you sure you want to remove this user's avatar?"),
            removeBackgroundConfirm: a.a.trans("Are you sure you want to remove this user's background?"),
            removeFriendConfirm: function removeFriendConfirm(e) {
                return a.a.trans("Are you sure you want to remove %friend%?", {
                    "%friend%": e
                })
            },
            reportSpamConfirm: a.a.trans("Are you sure you want to report user for spamming?"),
            resetFlairConfirm: a.a.trans("Are you sure you want to reset this user's flair?"),
            saveStatus: a.a.trans("Save status"),
            statusTooLong: a.a.trans("Your status must be %len% characters or less", {
                "%len%": v
            }),
            stopImpersonateConfirm: a.a.trans("Are you sure you want to stop impersonating this user?"),
            unmuteUserConfirm: a.a.trans("Are you sure you want to unmute this user?"),
            vulgarityMessage: a.a.trans("Your post seems to not fit our <a href=%url%>Community Guidelines</a>. Repeated violations may result in your account being restricted. Thank you for helping Chess.com stay a fun and friendly place for all!", {
                "%url%": g.communityGuidelines
            })
        },
        _ = {
            ALLOW_GROUP_INVITES: "data-allow-group-invites",
            AVATAR: "data-avatar",
            CAN_EDIT_STATUS: "data-can-edit-status",
            CAN_RECEIVE_GIFT: "data-can-receive-gift",
            CAN_VIEW_NOTES: "data-can-view-notes",
            ENTITY_ID: "data-entity-id",
            FLAIR: "data-flair-profile",
            IS_FOLLOWING: "data-is-following",
            IS_FRIEND: "data-is-friend",
            HAS_CLUBS: "data-has-clubs",
            HAS_FRIEND_REQUEST_FROM_USER: "data-has-friend-request-from-user",
            HAS_FRIEND_REQUEST_TO_USER: "data-has-friend-request-to-user",
            IS_AUTH_USER_BANNER_BY_VIEWED: "data-is-auth-user-banned-by-viewed",
            IS_BLOCKED: "data-is-blocked",
            IS_MESSAGEABLE: "data-is-messageable",
            IS_OWN_PROFILE: "data-is-own-profile",
            IS_USER_ENABLED: "data-is-user-enabled",
            IS_VIEWER_BLOCKED: "data-is-viewer-blocked",
            MUTE_TIME: "data-mute-time",
            NOTE_DELETE: "data-note-delete",
            NOTE_POST: "data-note-post",
            STOP_IMPERSONATE_PARAMS: "data-stop-impersonate-params",
            STOP_IMPERSONATE_ROUTE: "data-stop-impersonate-route",
            USER: "data-user",
            USERNAME: "data-username",
            USER_ID: "data-user-id"
        },
        w = {
            STATUS_SUCCESS: 200
        },
        O = {
            displayState: "DISPLAY_STATE",
            editingState: "EDITING_STATE",
            savingState: "SAVING_STATE"
        }
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "nodeProps", function() {
        return i
    });
    var r = n(24),
        a = n.n(r),
        o = n(2),
        i = ["additionalAnnotation", "annotation", "arrows", "color", "comment", "commentBefore", "fen", "flags", "from", "ids", "lines", "moveNumber", "piece", "previous", "promotion", "san", "time", "to"];
    t.default = function moveList() {
        var e, t = {
            lines: []
        };
        return {
            state: t,
            updateLines: function updateLines(n) {
                t.lines = a()(n), (n || []).forEach(function(r, a) {
                    e = o.a.isContinuation(n, r.id), t.lines[a] = r.map(function(t) {
                        var n = {};
                        return i.forEach(function(e) {
                            void 0 !== t[e] && (n[e] = t[e])
                        }), e && 0 === t.ids.move && (n.commentBefore = r.initComment), n
                    }), t.lines[a].atMoveNode = r.atMoveNode, t.lines[a].id = r.id, t.lines[a].parentId = r.parentId
                })
            }
        }
    }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var r = n(4),
        a = {
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
                        for (var o = 0; o < n.length; o += 1) {
                            var i = n[o];
                            if (delete i.move.san, !a.premove(e, i.move)) break
                        }
                        return !0
                    }
                }
                return !1
            }
        }
}, function(e, t, n) {
    "use strict";
    var r = n(92),
        a = {
            name: "modal-container",
            props: {
                autoShow: {
                    type: Boolean,
                    default: !1
                },
                closeOnBackgroundClick: {
                    type: Boolean,
                    default: !0
                },
                closeOnEscPress: {
                    type: Boolean,
                    default: !1
                },
                centerOverParent: {
                    type: Boolean,
                    default: !1
                },
                centerOverContent: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function data() {
                return {
                    visible: !1
                }
            },
            mounted: function mounted() {
                this.closeOnEscPress && window.addEventListener("keyup", this.onKeyPress), this.autoShow && this.show()
            },
            beforeDestroy: function beforeDestroy() {
                this.closeOnEscPress && window.removeEventListener("keyup", this.onKeyPress)
            },
            methods: {
                hide: function hide() {
                    this.visible = !1, this.$emit(r.a.MODAL_DID_HIDE)
                },
                onBackgroundClick: function onBackgroundClick() {
                    this.closeOnBackgroundClick && this.hide()
                },
                onKeyPress: function onKeyPress(e) {
                    27 === e.keyCode && this.hide()
                },
                show: function show() {
                    this.visible = !0
                }
            }
        },
        o = n(96),
        i = n(5);
    var s = Object(i.a)(a, function() {
        var e, t, n = this,
            r = n.$createElement,
            a = n._self._c || r;
        return a("transition", {
            attrs: {
                "enter-active-class": n.$style.enter,
                "leave-active-class": n.$style.leave
            }
        }, [n.visible ? a("div", {
            class: [n.$style.component, (e = {}, e[n.$style["parent-centered"]] = n.centerOverParent, e), (t = {}, t[n.$style["content-centered"]] = n.centerOverContent, t)]
        }, [n.centerOverParent ? n._e() : a("div", {
            class: n.$style.bg,
            on: {
                click: n.onBackgroundClick
            }
        }), n._v(" "), [n._t("default")]], 2) : n._e()])
    }, [], !1, function injectStyles(e) {
        this.$style = o.default.locals || o.default
    }, null, null);
    t.a = s.exports
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return c
    }), n.d(t, "a", function() {
        return l
    }), n.d(t, "c", function() {
        return u
    }), n.d(t, "d", function() {
        return d
    });
    var r = n(53),
        a = "top",
        o = "right",
        i = "bottom",
        s = "left",
        c = function getUserPopoverPosition(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 172,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300,
                r = {
                    top: null,
                    left: null,
                    right: null,
                    x: null,
                    y: null
                },
                c = e.width / 2,
                l = window,
                u = e.bottom + t < l.innerHeight,
                d = n - 28 - 12,
                p = n - d,
                m = e.left + c + d < l.innerWidth;
            return u ? (r.top = e.bottom, r.y = i) : (r.top = e.top - t, r.y = a), m ? (r.left = e.left + c - p, r.right = window.innerWidth - e.right, r.x = o) : (r.left = e.left + c - d, r.right = window.innerWidth - e.right, r.x = s), r.top = Math.round(r.top), r.left = Math.round(r.left), r.right = Math.round(r.right), r
        },
        l = function getPosition(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            if (!e || !t) return null;
            var c = e.getBoundingClientRect(),
                l = {},
                u = window.innerWidth - c.x,
                d = function canFitTop() {
                    return c.top - (t.clientHeight + r) > 0
                },
                p = function canFitLeft() {
                    return c.left - (t.clientWidth + r) > 0
                };
            return n === a && d() || n === i && ! function canFitBottom() {
                return c.bottom + t.clientHeight + r < window.innerHeight
            }() ? (l.left = c.left - (t.clientWidth - c.width) / 2, l.rtlLeft = u - t.clientWidth / 2 - c.width / 2, l.top = c.top - t.clientHeight - r, l.placement = a) : n === i || n === a && !d() ? (l.left = c.left - (t.clientWidth - c.width) / 2, l.rtlLeft = u - t.clientWidth / 2 - c.width / 2, l.top = c.bottom + r, l.placement = i) : n === s && p() || n === o && ! function canFitRight() {
                return c.right + t.clientWidth + r < window.innerWidth
            }() ? (l.left = c.left - t.clientWidth - r, l.rtlLeft = c.rtlLeft - t.clientWidth - r, l.top = c.top - (t.clientHeight - c.height) / 2, l.placement = s) : (n === o || n === s && !p()) && (l.left = c.right + r, l.rtlLeft = c.rtlLeft + r, l.top = c.top - (t.clientHeight - c.height) / 2, l.placement = o), {
                left: Math.round(l.left),
                placement: l.placement,
                rtlLeft: Math.round(l.rtlLeft),
                top: Math.round(l.top)
            }
        },
        u = function positionTooltip(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            if (!e || !t) return null;
            var o = l(e, t, n, a);
            return Object(r.a)() ? t.style.transform = "translate(-".concat(o.rtlLeft, "px, ").concat(o.top, "px)") : t.style.transform = "translate(".concat(o.left, "px, ").concat(o.top, "px)"), t.classList.add(o.placement), t
        },
        d = function removePositionStyle(e) {
            return e ? (e.style.transform = "translate(-100%, -100%)", e.classList.remove(s, o, i, a), e) : null
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }), n.d(t, "e", function() {
        return i
    }), n.d(t, "f", function() {
        return s
    }), n.d(t, "h", function() {
        return c
    }), n.d(t, "g", function() {
        return l
    }), n.d(t, "i", function() {
        return u
    }), n.d(t, "j", function() {
        return p
    }), n.d(t, "b", function() {
        return m
    }), n.d(t, "c", function() {
        return copyInputValueToBuffer
    }), n.d(t, "k", function() {
        return showHideMore
    });
    var r = n(9),
        a = n(100),
        o = function browserWidth() {
            return window.parent.innerWidth
        },
        i = function getClickedChild(e, t, n) {
            var r = n,
                a = null;
            if (!e || !t || !n) return a;
            for (; r && r !== e && !a;) r.classList.contains(t) && (a = r), r = r.parentNode;
            return a
        },
        s = function getElement(e) {
            return document.querySelector(".".concat(e))
        },
        c = function getElements(e) {
            return document.getElementsByClassName(e)
        },
        l = function getElementContentDimensions(e) {
            var t = e.currentStyle || window.getComputedStyle(e),
                n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
                r = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
                a = parseFloat(t.marginBottom) + parseFloat(t.marginTop),
                o = parseFloat(t.paddingBottom) + parseFloat(t.paddingTop),
                i = parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth),
                s = parseFloat(t.borderBottomWidth) + parseFloat(t.borderTopWidth);
            return {
                height: e.offsetHeight + a - o + s,
                width: e.offsetWidth + n - r + i
            }
        },
        u = function getScrollElement() {
            return document.querySelector(".base-container") || document.body
        },
        d = function injectMounts(e, t) {
            t.forEach(function(t) {
                var n = document.createElement("div");
                n.id = t, e.appendChild(n)
            })
        },
        p = function injectModalMounts(e) {
            var t = Object(a.c)();
            d(t, e)
        },
        m = function copyCustomValueToClipoard(e) {
            var t = document.createElement("input");
            t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
        };

    function copyInputValueToBuffer(e) {
        e && (e.focus(), e.select(), document.execCommand("copy"))
    }

    function showHideMore(e, t, n, a) {
        var o = c(e);
        Array.from(o).forEach(function(e) {
            var o = e.getAttribute("data-key"),
                i = document.querySelectorAll(".".concat(t, "[data-key=").concat(o, "]")),
                s = e.querySelector(".".concat(n)),
                c = e.querySelector(".".concat(a));
            s.innerHTML = r.h.showMore, e.addEventListener("click", function() {
                var e = s.innerHTML === r.h.showMore;
                s.innerHTML = e ? r.h.showLess : r.h.showMore, c.classList.toggle("toggle-content-icon-up"), Array.from(i).forEach(function(e) {
                    e.style.display = "block" === e.style.display ? "none" : "block"
                })
            })
        })
    }
    t.d = {
        browserWidth: o,
        copyInputValueToBuffer: copyInputValueToBuffer,
        getClickedChild: i,
        getElement: s,
        getElementContentDimensions: l,
        getElements: c,
        hasParent: function hasParent(e, t) {
            return !!e && (!(!e.classList || !e.classList.contains(t)) || Boolean(e.parentNode) && hasParent(e.parentNode, t))
        },
        hide: function hide(e) {
            e.forEach(function(e) {
                var t = document.getElementsByClassName(e)[0];
                t && "none" !== t.style.display && (t.style.display = "none")
            })
        },
        injectMounts: d,
        scriptExist: function scriptExist(e) {
            return document.querySelectorAll('script[src="'.concat(e, '"]')).length > 0
        },
        show: function show(e) {
            document.getElementsByClassName(e)[0].style.display = ""
        },
        showHideMore: showHideMore,
        styleExist: function styleExist(e) {
            return document.querySelectorAll('link[href="'.concat(e, '"]')).length > 0
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = {
        modalStates: {
            select: "select",
            send: "send",
            sent: "sent"
        },
        types: {
            game: "game",
            social: "social"
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        a = n.n(r),
        o = n(22);

    function ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var i = n(4),
        s = n(16),
        c = n(1),
        l = n(6),
        u = n(21),
        d = n(2);

    function create_variation_ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var p = function createVariation(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = function create_variation_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? create_variation_ownKeys(n, !0).forEach(function(t) {
                            a()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : create_variation_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, e.tree.selected);
            if (!e.settings.variations) return null;
            void 0 !== n.line && void 0 !== n.move ? i.a.selectNode(e, n) : n = e.tree.selected;
            var o = d.a.getNode(e.jce._lines(), {
                line: n.line,
                move: n.move
            }).san;
            return i.a.createVariation(e), t && i.a.move(e, o), c.b.add(e.history, c.a.JUMP_TO_POSITION, {
                from: r,
                to: n
            }), l.a.updateState(e)
        },
        m = function shouldNotMutateLine(e) {
            return -1 !== e.tree.selected.move && e.settings.mainLineIsImmutable && d.a.isMainLine(e.tree.selected.line)
        },
        f = function isValidMove(e, t) {
            return null !== u.default.getPositionDetails({
                fen: i.a.getFen(e),
                variant: i.a.getHeaders(e).Variant || "Chess"
            }, t)
        },
        h = function makeMove(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = i.a.getJCEMove(e, t);
            if (null === r) return c.b.add(e.history, c.a.ILLEGAL_MOVE), e;
            var a = e.settings.analysis || n;
            if (!d.a.isHead(e.jce._lines(), e.tree.selected)) {
                if (!a) return Object(s.a)(e, d.a.getHeadIds(e.jce._lines(), e.tree.selected.line));
                var o = d.a.getNextMatchingNode(e.jce._lines(), e.tree.selected, r);
                if (o) return Object(s.a)(e, o.ids);
                if (f(e, r)) {
                    if (c.b.add(e.history, c.a.TREE_AMENDED), e.settings.variations) return i.a.selectNode(e, {
                        line: e.tree.selected.line,
                        move: e.tree.selected.move + 1
                    }), i.a.createVariation(e), l.a.updateState(e), makeMove(e, r);
                    if (!e.settings.mainLineIsImmutable) return d.a.prune(e.jce._lines(), e.tree.selected), makeMove(e, r)
                }
                return c.b.add(e.history, c.a.ILLEGAL_MOVE), e
            }
            if (!a && !i.a.isUserTurn(e)) return c.b.add(e.history, c.a.ILLEGAL_MOVE), e;
            if (a && e.settings.variations && m(e) && f(e, r)) {
                var u = d.a.getNextMatchingNode(e.jce._lines(), e.tree.selected, r);
                return u ? Object(s.a)(e, u.ids) : (p(e, !0), l.a.updateState(e), makeMove(e, r))
            }
            return !m(e) && i.a.move(e, r, e.settings.rules) ? (c.b.add(e.history, c.a.MAKE_MOVE, r), l.a.updateState(e)) : (c.b.add(e.history, c.a.ILLEGAL_MOVE), e)
        },
        g = function setPlayingAs(e, t) {
            return [1, 2].indexOf(t) >= 0 && (e.setup.playingAs = t), e
        },
        b = n(104),
        v = function changeSettings(e, t) {
            var n = Object.prototype.hasOwnProperty.call(t, "premoves") && e.settings.premoves !== t.premoves;
            return e.settings = Object.assign(e.settings, t), e.settings.premoves || Object(b.a)(e), c.b.add(e.history, c.a.SETTINGS_CHANGE), n && l.a.updateState(e), e
        },
        y = function loadFromFen(e, t) {
            return t ? (d.a.clearAllMarkings(e.jce._lines()), i.a.load(e, t), c.b.add(e.history, c.a.LOAD), l.a.updateState(e)) : null
        },
        _ = function clearMarkings(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                r = d.a.getNode(e.jce._lines(), t) || d.a.getNode(e.jce._lines(), i.a.getSelectedIds(e)) || e.tree.initialMarkings;
            return (r.arrows && r.arrows.length || r.squares && r.squares.length || r.effects && r.effects.length) && (r.arrows = [], r.squares = [], r.effects = [], n && (l.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE))), e
        },
        w = function convertFileToInteger() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").charCodeAt(0) - 97 + 1
        },
        O = function createGame() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = {
                    id: o.a.getId(),
                    variant: e.variant || "chess",
                    settings: Object.assign(l.a.getInitialSettings(), e.settings),
                    setup: Object.assign(l.a.getInitialSetup(), e.setup),
                    tree: Object.assign(l.a.getInitialTree(), e.tree),
                    history: c.b.getInitialHistory(),
                    markings: Object.assign(l.a.getInitialMarkings(), e.markings),
                    premoves: []
                };
            return g(t, e.player || 1), Object.defineProperty(t, "jce", {
                writable: !1,
                enumerable: !1,
                configurable: !1,
                value: i.a.createJce(e)
            }), i.a.updateIdsFromJce(t), c.b.add(t.history, c.a.INIT), t.jce.siblingGame && !t.sibling && (t.sibling = {
                id: o.a.getId(),
                variant: t.variant || "chess",
                sibling: t,
                settings: t.settings,
                setup: l.a.getInitialSetup(),
                tree: l.a.getInitialTree(),
                history: c.b.getInitialHistory(),
                markings: Object.assign(l.a.getInitialMarkings(), e.markings),
                premoves: []
            }, Object.defineProperty(t.sibling, "jce", {
                writable: !1,
                enumerable: !1,
                configurable: !1,
                value: i.a.createJce({
                    game: t.jce.siblingGame
                })
            }), i.a.updateIdsFromJce(t.sibling)), l.a.updateState(t), t
        },
        E = n(32);

    function select_line_start_ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var k = function selectLineStart(e) {
            var t = d.a.getSelectedLine(e),
                n = 0,
                r = function select_line_start_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? select_line_start_ownKeys(n, !0).forEach(function(t) {
                            a()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : select_line_start_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, e.tree.selected);
            0 === e.tree.selected.move && void 0 !== t.parentId ? (i.a.selectLine(e, t.parentId), t = d.a.getSelectedLine(e)) : d.a.isMainLine(t.id) && (n = -1);
            var o = {
                line: t.id,
                move: n
            };
            return i.a.selectNode(e, o), c.b.add(e.history, c.a.JUMP_TO_POSITION, {
                from: r,
                to: o
            }), l.a.updateState(e)
        },
        C = function deleteNode(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = (d.a.findNode(e.jce._lines(), e.tree.selected), Object.assign(e.tree.selected, t));
            return n.line > 0 && (n.move <= 0 || d.a.isFirstVisibleNode(e.jce._lines(), n)) && (n.move = -1), e.jce.deletePosition(n.move, n.line), c.b.add(e.history, c.a.TREE_CHANGE), l.a.updateState(e), e
        },
        S = function deleteRemainingNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = Object.assign(e.tree.selected, t);
            return C(e, {
                move: n.move + 1,
                line: n.line
            })
        },
        A = function getTcn(e, t) {
            var r = e.jce && e.jce._lines() || n(44).default.state.lines;
            return u.default.encodeTCN(d.a.getLine(r, t) || r[0])
        },
        T = n(106),
        P = n(57),
        x = function loadFromTcn(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.a.getInitialFen(),
                r = arguments.length > 3 ? arguments[3] : void 0;
            y(e, n);
            var a = u.default.decodeTCN(t);
            return a ? (a.forEach(function(t) {
                "Crazyhouse" !== e.variant && "Bughouse" !== e.variant || !t.drop || Object(P.a)(e, e.setup.sideToMove, t.drop), h(e, t, !0)
            }), l.a.updateState(e), r ? Object(s.a)(e, e.tree.selected, -1) : (c.b.add(e.history, c.a.LOAD), e)) : null
        },
        j = function markArrow(e, t, n) {
            var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                a = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), i.a.getSelectedIds(e)) || e.tree.initialMarkings;
            return a.arrows || (a.arrows = []), a.arrows.find(function(e) {
                return i.a.isFileRankEqual(e.fromFileRank, t.fromFileRank) && i.a.isFileRankEqual(e.toFileRank, t.toFileRank)
            }) || (a.arrows.push(t), r && (l.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE))), e
        },
        M = function markEffect(e) {
            var t = e.game,
                n = e.effect,
                r = e.ids,
                a = e.persist,
                o = e.updateState,
                s = void 0 === o || o;
            if (a) return t.setup.effects = n ? [n] : null, l.a.updateState(t), t;
            var u = d.a.getNode(t.jce._lines(), r) || d.a.getNode(t.jce._lines(), i.a.getSelectedIds(t)) || t.tree.initialMarkings;
            return u.effects || (u.effects = []), u.effects.find(function(e) {
                return i.a.isFileRankEqual(e.square, n.square)
            }) || (u.effects.push(n), s && (l.a.updateState(t), c.b.add(t.history, c.a.TREE_CHANGE))), t
        },
        L = function markSquare(e, t, n) {
            var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                a = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), i.a.getSelectedIds(e)) || e.tree.initialMarkings;
            return a.squares || (a.squares = []), a.squares.find(function(e) {
                return i.a.isFileRankEqual(e, t)
            }) || (a.squares.push(t), r && (l.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE))), e
        },
        N = function fixTcn(e, t) {
            var n = O({
                variant: e.variant,
                fen: o.a.getFirstFen(e)
            });
            return x(n, t, n.setup.fen), A(n)
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
    var I = function selectLineEnd(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.tree.selected.line,
            n = d.a.getLine(e.jce._lines(), t).length - 1,
            r = function select_line_end_objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? select_line_end_ownKeys(n, !0).forEach(function(t) {
                        a()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : select_line_end_ownKeys(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, e.tree.selected);
        if (e.tree.selected.move !== n || t !== e.tree.selected.line) {
            var o = {
                line: t,
                move: n
            };
            return i.a.selectNode(e, o), c.b.add(e.history, c.a.JUMP_TO_POSITION, {
                from: r,
                to: o
            }), l.a.updateState(e)
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
        return R
    });
    var R = {
        addBlinkingSquare: function addBlinkingSquare(e, t, n, r) {
            var i = o.a.getId(),
                s = function _objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ownKeys(n, !0).forEach(function(t) {
                            a()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({
                    id: i,
                    interval: t,
                    times: n
                }, r);
            return e.markings.blinkingSquares.push(s), setTimeout(function() {
                var t = e.markings.blinkingSquares.findIndex(function(e) {
                    return e.id === i
                });
                e.markings.blinkingSquares.splice(t, 1)
            }, 0), e
        },
        addVariant: function addVariant(e, t) {
            return t ? (Object(s.a)(e, {
                line: 0,
                move: 0
            }), t.match(/.{2}/g).forEach(function(t) {
                return h(e, {
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
        changeSettings: v,
        clearAnalysis: function clearAnalysis(e) {
            var t = R.resetToMainLine(e),
                n = d.a.clearAnalysis(t.jce._lines());
            return t.jce.saveLines(n), c.b.add(t.history, c.a.TREE_CHANGE), l.a.updateState(e)
        },
        clearArrow: function clearArrow(e, t, n) {
            var r = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), i.a.getSelectedIds(e)) || e.tree.initialMarkings;
            r.arrows || (r.arrows = []);
            var a = r.arrows.findIndex(function(e) {
                return i.a.isFileRankEqual(e.fromFileRank, t.fromFileRank) && i.a.isFileRankEqual(e.toFileRank, t.toFileRank)
            });
            return -1 !== a && (r.arrows.splice(a, 1), l.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE)), e
        },
        clearBlinkingSquare: function clearBlinkingSquare(e, t) {
            return e.markings.blinkingSquares[t] && delete e.markings.blinkingSquares[t], e
        },
        clearBoard: function clearBoard(e) {
            return v(e, {
                rules: !1
            }), y(e, "8/8/8/8/8/8/8/8 w - - 0 1"), c.b.add(e.history, c.a.LOAD), l.a.updateState(e)
        },
        clearEffect: function clearEffect(e, t, n) {
            var r = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), i.a.getSelectedIds(e)) || e.tree.initialMarkings;
            r.effects || (r.effects = []);
            var a = r.effects.findIndex(function(e) {
                return i.a.isFileRankEqual(e.square, t.square)
            });
            return -1 !== a && (r.effects.splice(a, 1), l.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE)), e
        },
        clearMarkedSquare: function clearMarkedSquare(e, t, n) {
            var r = d.a.getNode(e.jce._lines(), n) || d.a.getNode(e.jce._lines(), i.a.getSelectedIds(e)) || e.tree.initialMarkings;
            r.squares || (r.squares = []);
            var a = r.squares.findIndex(function(e) {
                return i.a.isFileRankEqual(e, t)
            });
            return -1 !== a && (r.squares.splice(a, 1), l.a.updateState(e), c.b.add(e.history, c.a.TREE_CHANGE)), e
        },
        clearMarkings: _,
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
                    file: w(e[0]),
                    rank: Number(e[1])
                },
                toFileRank: {
                    file: w(e[2]),
                    rank: Number(e[3])
                }
            }
        },
        createGame: O,
        createVariation: p,
        deleteLine: function deleteLine(e, t) {
            return e.jce.deletePosition(-1, t) ? (c.b.add(e.history, c.a.TREE_CHANGE), l.a.updateState(e), e) : null
        },
        deleteNode: C,
        deleteRemainingNodes: S,
        getCurrentFullLine: function getCurrentFullLine(e) {
            var t = e.jce._history().length - e.jce.ids().move - 1,
                n = e.jce.history(!0);
            return 0 === t ? n : n.slice(0, -t)
        },
        getPgn: function getPgn(e, t) {
            return i.a.getPgn(e, t)
        },
        getPgnHeaders: function getPgnHeaders(e) {
            return i.a.getHeaders(e)
        },
        getSelectedNode: function getSelectedNode(e) {
            return d.a.getSelectedNode(e)
        },
        getTcn: A,
        isMoveLegal: function isMoveLegal(e, t) {
            var n = !1;
            if (!e.settings.rules) return !0;
            for (var r = 0; r < e.setup.legalMoves.length; r++) {
                var a = e.setup.legalMoves[r];
                if (a.from === t.from && a.to === t.to) {
                    n = !0;
                    break
                }
            }
            return n
        },
        loadFromFen: y,
        loadFromLan: function loadFromLan(e, t, n, r) {
            var a = t.map(function(e) {
                return u.default.encodeTCN({
                    from: e.slice(0, 2),
                    to: e.slice(2, 4),
                    promotion: e.slice(4, 5) || void 0
                })
            }).join("");
            return R.loadFromTcn(e, a, n, r)
        },
        loadFromPgn: function loadFromPgn(e, t, n) {
            return t ? (i.a.loadPgn(e, Object(T.b)(t)), l.a.updateState(e), n ? Object(s.a)(e, e.tree.selected, n) : (c.b.add(e.history, c.a.LOAD), e)) : e
        },
        loadFromSanMoves: function loadFromSanMoves(e, t, n, r) {
            return t && t.length ? (n && i.a.load(e, n), t.forEach(function(t) {
                return h(e, {
                    san: t
                }, !0)
            }), l.a.updateState(e), r ? Object(s.a)(e, e.tree.selected, -1) : (c.b.add(e.history, c.a.LOAD), e)) : null
        },
        loadFromTcn: x,
        makeMove: h,
        makeOpponentMove: function makeOpponentMove(e, t) {
            return g(e, 3 - e.setup.playingAs), h(e, t), g(e, 3 - e.setup.playingAs), l.a.updateState(e)
        },
        markArrow: j,
        markEffect: M,
        markSquare: L,
        mergeTcn: function mergeTcn(e, t, n) {
            if ("string" != typeof t || e.settings.mainLineIsImmutable) return null;
            if ("" === t) return k(e), x(e, "", e.setup.fen);
            var r = function merge_tcn_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? merge_tcn_ownKeys(n, !0).forEach(function(t) {
                            a()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : merge_tcn_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, e.tree.selected),
                o = A(e),
                i = t,
                l = e.history.length - 1;
            if (!(o.includes(i) || i.includes(o) || (o = N(e, o), i = N(e, i), o.includes(i) || i.includes(o)))) return x(e, i);
            if (i.length < o.length) Object(s.a)(e, {
                line: 0,
                move: i.length / 2 - 1
            }), S(e);
            else {
                if (!(i.length > o.length)) return e;
                var p;
                if (Object(s.a)(e, {
                        line: 0,
                        move: o.length / 2 - 1
                    }), i.slice(o.length).match(/.{2}/g).forEach(function(t) {
                        p = u.default.decodeTCN(t)[0], "Crazyhouse" !== e.variant && "Bughouse" !== e.variant || !p.drop || Object(P.a)(e, e.setup.sideToMove, p.drop), h(e, p, !0)
                    }), e.history.slice(l + 1).some(function(e) {
                        return e && e.type === c.a.ILLEGAL_MOVE
                    })) return Object(s.a)(e, r), S(e), e.history = e.history.slice(0, l), mergeTcn(e, N(e, i))
            }
            if (n) return Object(s.a)(e, e.tree.selected, -1);
            if (r.line !== e.tree.selected.line || r.move !== e.tree.selected.move) {
                var m = d.a.getNode(e.jce._lines(), r) ? r : e.tree.selected;
                return Object(s.a)(e, m)
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
            return d.a.isMainLine(e.tree.selected.line) || i.a.selectLine(e, 0), I(e), l.a.updateState(e)
        },
        moveToStart: function moveToStart(e) {
            return d.a.isMainLine(e.tree.selected.line) || i.a.selectLine(e, 0), k(e), l.a.updateState(e)
        },
        moveVariation: function moveVariation(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                r = d.a.getLine(e.jce._lines(), t);
            if (r && void 0 !== r.parentId) {
                var a = d.a.getLine(e.jce._lines(), r.parentId)[r.atMoveNode],
                    o = -1;
                if (a.lines.forEach(function(e, n) {
                        t === e && (o = n)
                    }), o > -1) {
                    var i = null;
                    n && o > 0 ? (i = a.lines[o - 1], a.lines[o - 1] = t, a.lines[o] = i) : !n && o < a.lines.length - 1 && (i = a.lines[o + 1], a.lines[o + 1] = t, a.lines[o] = i)
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
                for (var a = n.move, o = function _loop() {
                        if (e.settings.mainLineIsImmutable && d.a.isMainLine(r.parentId)) return "break";
                        var t = d.a.getLine(e.jce._lines(), r.parentId),
                            n = d.a.isContinuation(e.jce._lines(), r.id) ? 1 : 0,
                            o = r[n] && r[n].commentBefore,
                            s = r.atMoveNode,
                            c = r.slice(0);
                        r.length = 0, o && t[s - 1] && (t[s - 1].comment ? (" " !== t[s - 1].comment.substr(-1) && (t[s - 1].comment += " "), t[s - 1].comment += o) : t[s - 1].comment = o, delete c[n].commentBefore, delete r.initComment);
                        var l = t.slice(s),
                            u = l[0].lines.map(function(e) {
                                return e
                            });
                        delete l[0].lines, l.forEach(function(t, n) {
                            t.lines && t.lines.length && t.lines.forEach(function(t) {
                                var a = d.a.getLine(e.jce._lines(), t);
                                a.parentId = r.id, a.atMoveNode = n
                            })
                        }), t.length = s, c.forEach(function(n) {
                            n.ids = {
                                line: t.id,
                                move: t.length
                            }, n.lines && n.lines.length && n.lines.forEach(function(n) {
                                var r = d.a.getLine(e.jce._lines(), n);
                                r.parentId = t.id, r.atMoveNode = t.length
                            }), t.push(n)
                        }), l.forEach(function(e, t) {
                            e.ids = {
                                line: r.id,
                                move: t
                            }, r.push(e)
                        }), t[s].lines = u, t[s].lines.forEach(function(n) {
                            d.a.getLine(e.jce._lines(), n).parentId = t.id
                        }), i.a.selectNode(e, {
                            line: t.id,
                            move: s + a
                        }), r = d.a.getLine(e.jce._lines(), r.parentId), a = s + a
                    }; void 0 !== r.parentId && "break" !== o(););
            return e.jce.saveLines(e.tree.lines), c.b.add(e.history, c.a.TREE_CHANGE), l.a.updateState(e)
        },
        resetToMainLine: function resetToMainLine(e) {
            var t = function reset_to_main_line_objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? reset_to_main_line_ownKeys(n, !0).forEach(function(t) {
                        a()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : reset_to_main_line_ownKeys(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, e.tree.selected);
            d.a.isMainLine(e.tree.selected.line) || i.a.selectLine(e, 0), I(e);
            var n = e.tree.selected;
            return e.tree.lines.length = 1, e.tree.lines = d.a.rebuildIds(e.tree.lines), e.jce.saveLines(e.tree.lines), c.b.add(e.history, c.a.JUMP_TO_POSITION, {
                from: t,
                to: n
            }), l.a.updateState(e)
        },
        selectLineEnd: I,
        selectLineStart: k,
        selectNode: s.a,
        setPlayingAs: g,
        updateMarkings: function updateMarkings(e) {
            var t = e.arrow,
                n = e.effect,
                r = e.game,
                a = e.ids,
                o = e.square;
            return _(r, a, !1), t && j(r, t, a, !1), n && M({
                game: r,
                effect: n,
                ids: a,
                updateState: !1
            }), o && L(r, o, a, !1), l.a.updateState(r), c.b.add(r.history, c.a.TREE_CHANGE), r
        },
        updateNode: function updateNode(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = e.jce._lines(),
                a = d.a.findNode(r, t);
            if (!a || !n || n.commentBefore && !d.a.isFirstVisibleNode(r, t)) return null;
            var o = d.a.getLine(r, t.line);
            if (void 0 === n.commentBefore && d.a.isFirstVisibleNode(r, t) ? delete o.initComment : n.commentBefore && (o.initComment = n.commentBefore), n.annotation && (n.annotation = Object(E.b)(a, n.annotation) ? "" : Object(E.v)(n.annotation)), n.additionalAnnotation) {
                if (!Object(E.o)(n.additionalAnnotation)) return null;
                Object(E.a)(a, n.additionalAnnotation) && (n.additionalAnnotation = []), n.additionalAnnotation = [].concat(Object(E.v)(n.additionalAnnotation))
            }
            return Object.assign(a, n), c.b.add(e.history, c.a.UPDATE_NODE, {
                line: t.line,
                move: t.move
            }), l.a.updateState(e)
        },
        updatePgnHeaders: function updatePgnHeaders(e, t) {
            if (!t) return null;
            var n = Object.keys(t).reduce(function(e, n) {
                return "Date" === n && "number" == typeof t[n] && (t[n] = o.a.formatJSTimestampForPgn(t[n])), e.push(n), e.push(t[n]), e
            }, []);
            return i.a.updateHeaders(e, n), c.b.add(e.history, c.a.PGN_HEADERS_UPDATED), e.setup.result = l.a.getResult(e), e
        }
    }
}, function(e, t, n) {
    var r, a;
    /**
     * @author William DURAND <william.durand1@gmail.com>
     * @license MIT Licensed
     */
    void 0 === (a = "function" == typeof(r = function() {
        "use strict";
        var e = {},
            t = "en",
            n = [],
            r = new RegExp(/^\w+\: +(.+)$/),
            a = new RegExp(/^\s*((\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]]))\s?(.+?)$/),
            o = new RegExp(/^\s*(\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]])/),
            i = {
                locale: get_current_locale(),
                fallback: t,
                placeHolderPrefix: "%",
                placeHolderSuffix: "%",
                defaultDomain: "messages",
                pluralSeparator: "|",
                add: function(t, r, a, o) {
                    var i = o || this.locale || this.fallback,
                        s = a || this.defaultDomain;
                    return e[i] || (e[i] = {}), e[i][s] || (e[i][s] = {}), e[i][s][t] = r, !1 === function exists(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (t === e[n]) return !0;
                        return !1
                    }(n, s) && n.push(s), this
                },
                trans: function(e, t, n, r) {
                    var a = get_message(e, n, r, this.locale, this.fallback);
                    return replace_placeholders(a, t || {})
                },
                transChoice: function(e, t, n, s, c) {
                    var l = get_message(e, s, c, this.locale, this.fallback),
                        u = parseInt(t, 10);
                    return void 0 === (n = n || {}).count && (n.count = t), void 0 === l || isNaN(u) || (l = function pluralize(e, t, n) {
                        var s, c, l = [],
                            u = [],
                            d = e.split(i.pluralSeparator),
                            p = [];
                        for (s = 0; s < d.length; s++) {
                            var m = d[s];
                            a.test(m) ? (p = m.match(a), l[p[0]] = p[p.length - 1]) : r.test(m) ? (p = m.match(r), u.push(p[1])) : u.push(m)
                        }
                        for (c in l)
                            if (o.test(c))
                                if ((p = c.match(o))[1]) {
                                    var f, h = p[2].split(",");
                                    for (f in h)
                                        if (t == h[f]) return l[c]
                                } else {
                                    var g = convert_number(p[4]),
                                        b = convert_number(p[5]);
                                    if (("[" === p[3] ? t >= g : t > g) && ("]" === p[6] ? t <= b : t < b)) return l[c]
                                }
                        return u[function plural_position(e, t) {
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
                        }(t, n)] || u[0] || void 0
                    }(l, u, c || this.locale || this.fallback)), replace_placeholders(l, n)
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
            var n, r = i.placeHolderPrefix,
                a = i.placeHolderSuffix;
            for (n in t) {
                var o = new RegExp(r + n + a, "g");
                if (o.test(e)) {
                    var s = String(t[n]).replace(new RegExp("\\$", "g"), "$$$$");
                    e = e.replace(o, s)
                }
            }
            return e
        }

        function get_message(t, r, a, o, i) {
            var s, c, l, u, d = a || o || i,
                p = r,
                m = d.split("_")[0];
            if (!(d in e))
                if (m in e) d = m;
                else {
                    if (!(i in e)) return t;
                    d = i
                }
            if (null == p)
                for (var f = 0; f < n.length; f++)
                    if (has_message(d, n[f], t) || has_message(m, n[f], t) || has_message(i, n[f], t)) {
                        p = n[f];
                        break
                    }
            if (has_message(d, p, t)) return e[d][p][t];
            for (; d.length > 2 && (s = d.length, c = d.split(/[\s_]+/), l = c[c.length - 1], u = l.length, 1 !== c.length);)
                if (has_message(d = d.substring(0, s - (u + 1)), p, t)) return e[d][p][t];
            return has_message(i, p, t) ? e[i][p][t] : t
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
        return i
    }) ? r.call(t, n, t, e) : r) || (e.exports = a)
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function isRtl() {
        return "rtl" === document.querySelector("html").getAttribute("dir")
    }
}, , function(e, t, n) {
    e.exports = n(26)(43)
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        a = n.n(r),
        o = n(31),
        i = n(121);

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
    o.default.mixin(i.a);
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {},
            n = function createInstance(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e[n] && Object.keys(e[n]).length ? (t[n] = t[n] || function instantiate(e) {
                    return new o.default(_objectSpread({}, e, {
                        el: e.el,
                        render: function render(t) {
                            return t(e.component, {
                                props: e.propsData
                            })
                        },
                        store: e.store
                    }))
                }(_objectSpread({}, e[n], {}, r)), t[n]) : null
            };
        return {
            createInstance: n,
            createInstances: function createInstances(e) {
                e.forEach(function(e) {
                    return n(e)
                })
            },
            instances: t
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    n(6);
    var r = {
            p: 1,
            n: 32,
            b: 256,
            r: 2048,
            q: 16384
        },
        a = function setHand(e, t, n) {
            return e.jce._hand[t] = n.split("").reduce(function(e, t) {
                return e + r[t]
            }, 0), e.setup.hand = e.jce.hand(), e
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }), n.d(t, "b", function() {
        return a
    });
    var r = {
            AUTHENTICATE: "navigation-sidebar-authenticate-component",
            AUTHENTICATE_COLLAPSED: "navigation-sidebar-authenticate-collapsed",
            BADGE_HOME: "navigation-sidebar-home-badge",
            BADGE_INDEX: "navigation-sidebar-index-badge",
            BADGE_MESSAGES: "navigation-sidebar-messages-badge",
            BADGE_PLAY: "navigation-sidebar-play-badge",
            BOTTOM_LINK_EXPAND_COLLAPSE: "navigation-sidebar-expand-collapse-feature",
            BOTTOM_LINK_HELP: "navigation-sidebar-help-feature",
            BOTTOM_LINK_SEARCH: "navigation-sidebar-search-feature",
            BOTTOM_LINK_SETTINGS: "navigation-settings-link",
            BOTTOM_LINK_TOP_MENU: "navigation-toggle",
            DAILY_TIME_CONTROLS_BUTTON: "navigation-sidebar-play-button",
            HELP_POPOVER: "navigation-popover-help-component navigation-sidebar-feature-popover-help",
            LINK: "navigation-sidebar-category-component",
            LINK_HOME: "navigation-sidebar-home-category",
            LINK_INDEX: "navigation-sidebar-index-category",
            LINK_LEARN: "navigation-sidebar-learn-category",
            LINK_PLAY: "navigation-sidebar-play-category",
            LINK_SHARE: "navigation-sidebar-share-category",
            LOGO: "navigation-sidebar-primary-logo",
            LOGO_COLLAPSED: "navigation-sidebar-logo-collapsed",
            NAV_CLOSE_ICON: "nav-close-icon",
            NAV_OPEN_ICON: "nav-open-icon",
            NOTIFICATIONS_PANEL_CATCHMENT: "navigation-sidebar-notifications-catchment",
            SEARCH_BUTTON: "navigation-search-link",
            SEARCH_POPOVER: "navigation-sidebar-feature-popover-search",
            SECONDARY: "navigation-sidebar-secondary-component",
            SECONDARY_ACTIVE: "navigation-sidebar-secondary-active",
            SECONDARY_COLLAPSED: "navigation-sidebar-secondary-collapsed",
            SECONDARY_CONTROLS_SHOW: "navigation-sidebar-play-show",
            SECONDARY_DAILY_TIME_CONTROLS: "navigation-sidebar-play-daily",
            SECONDARY_ELEMENT: "navigation-sidebar-secondary-element",
            SECONDARY_LINK_DAILY: "navigation-secondary-dailychess",
            SECONDARY_LINK_LIVE: "navigation-secondary-livechess",
            SECONDARY_LIVE_TIME_CONTROLS: "navigation-sidebar-play-live",
            SECONDARY_NAVIGATION: "navigation-sidebar-secondary-navigation",
            SECONDARY_PANEL_HOME: "navigation-sidebar-home-component",
            SECONDARY_PANEL_LEARN: "navigation-sidebar-learn-component",
            SECONDARY_PANEL_NOTIFICATIONS: "navigation-sidebar-notifications-component",
            SECONDARY_PANEL_PLAY: "navigation-sidebar-play-component",
            SECONDARY_PANEL_SHARE: "navigation-sidebar-share-component",
            SECONDARY_WIDE: "navigation-sidebar-secondary-wide",
            SIDEBAR: "#sb",
            SIDEBAR_CATEGORIES_COLLAPSED: "navigation-sidebar-categories-collapsed",
            SIDEBAR_CATEGORY: "navigation-sidebar-category-component",
            SIDEBAR_CATEGORY_COLLAPSED: "navigation-sidebar-category-collapsed",
            SIDEBAR_COLLAPSED: "collapsed",
            SIDEBAR_FEATURE: "navigation-sidebar-feature-component",
            SIDEBAR_FEATURE_COLLAPSED: "navigation-sidebar-feature-collapsed",
            SIDEBAR_FEATURES: "navigation-sidebar-features-component",
            SIDEBAR_FEATURES_COLLAPSED: "navigation-sidebar-features-collapsed",
            SIDEBAR_FORCED_OPEN: "navigation-sidebar-open",
            SIDEBAR_GAMES: "navigations-sidebar-games",
            SIDEBAR_INTERNATIONAL: "nav-sidebar-wide",
            SIDEBAR_LINKS: "navigation-sidebar-primary-top",
            TIME_CONTROLS: "navigation-sidebar-play-daily",
            TV_COMPONENT: "navigation-sidebar-category-component navigation-sidebar-categories-watch",
            TV_ELEMENT: "chesstv",
            TV_EXCLAM: "navigation-sidebar-categories-exclamation",
            TV_POPOVER: "navigation-popover-watch-component navigation-sidebar-categories-popover-watch"
        },
        a = {
            DAILY_TIME_CONTROLS_HEADER: "daily-time-controls-header",
            LIVE_TIME_CONTROLS_HEADER: "live-time-controls-header",
            DAILY_TIME_CONTROLS_SIDEBAR: "daily-time-controls-sidebar",
            LIVE_TIME_CONTROLS_SIDEBAR: "live-time-controls-sidebar",
            MOBILE_NAV_TOGGLE: "mobile-nav-toggle",
            LANGUAGE_PICKER_MODAL: "language-picker-modal",
            MODAL_VIDEO: "modal-video"
        }
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "modal-content",
            components: {
                SectionContainer: n(199).a
            }
        },
        a = n(142),
        o = n(5);
    var i = Object(o.a)(r, function() {
        var e = this.$createElement;
        return (this._self._c || e)("section-container", {
            class: this.$style.component,
            attrs: {
                "light-mode": ""
            }
        }, [this._t("default")], 2)
    }, [], !1, function injectStyles(e) {
        this.$style = a.default.locals || a.default
    }, null, null);
    t.a = i.exports
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return o
    }), n.d(t, "c", function() {
        return i
    }), n.d(t, "a", function() {
        return s
    });
    var r = n(0),
        a = n(8),
        o = {
            allBlogs: Object(a.a)("web_blog_all"),
            allBlogsByPage: function allBlogsByPage(e, t) {
                var n = {};
                return 1 !== e && (n.page = e), t && (n.orderBy = t), Object(a.a)("web_blog_all", n, !0)
            },
            becomeABlogger: Object(a.a)("web_blog_view", {
                url: "webmaster/how-to-become-a-top-blogger-for-chesscom"
            }),
            blogGoLive: function blogGoLive(e) {
                return Object(a.a)("web_blog_go_live", {
                    id: e
                })
            },
            blogVersion: function blogVersion(e, t) {
                return Object(a.a)("web_blog_post", {
                    id: e,
                    version: t
                })
            },
            blogs: Object(a.a)("web_blog_index"),
            blogsIndexByPage: function blogsIndexByPage(e) {
                var t = 1 !== e ? {
                    page: e
                } : null;
                return Object(a.a)("web_blog_index", t, !0)
            },
            blogIdeas: {
                playing: Object(a.a)("web_blog_post", {
                    title: r.a.trans("What got me playing chess")
                }),
                goals: Object(a.a)("web_blog_post", {
                    title: r.a.trans("My chess goals are...")
                }),
                best: Object(a.a)("web_blog_post", {
                    title: r.a.trans("My best chess win")
                })
            },
            blogsSearch: function blogsSearch(e) {
                return Object(a.a)("web_blog_search", {
                    keyword: e
                })
            },
            blogsSearchByPage: function blogsSearchByPage(e, t, n) {
                return Object(a.a)("web_blog_search", {
                    keyword: e,
                    page: t,
                    orderBy: n
                }, !0)
            },
            blogSettings: Object(a.a)("web_blog_settings_edit"),
            buryBlog: function buryBlog(e, t, n) {
                return Object(a.a)("web_content_set_buried", {
                    bury: e,
                    id: t,
                    class: n
                })
            },
            createBlog: Object(a.a)("web_blog_post"),
            deleteBlog: function deleteBlog(e, t) {
                return Object(a.a)("web_blog_delete", {
                    id: e,
                    _token: t
                })
            },
            editBlog: function editBlog(e) {
                return Object(a.a)("web_blog_post", {
                    id: e
                })
            },
            member: function member(e) {
                return Object(a.a)("web_member_view", {
                    username: e
                })
            },
            memberBlogs: function memberBlogs(e) {
                return Object(a.a)("web_blog_member", {
                    url: e
                })
            },
            memberBlogsByPage: function memberBlogsByPage(e, t, n) {
                return Object(a.a)("web_blog_member", {
                    url: e,
                    page: t,
                    orderBy: n
                }, !0)
            },
            reportSpam: function reportSpam(e) {
                return Object(a.a)("web_blog_report_spam", {
                    id: e
                })
            },
            topBloggers: Object(a.a)("web_blog_authors"),
            topBloggersByPage: function topBloggersByPage(e) {
                return Object(a.a)("web_blog_authors", {
                    page: e
                }, !0)
            }
        },
        i = {
            allBlogs: r.a.trans("All Blogs"),
            becomeABlogger: r.a.trans("Become a listed Chess.com top blogger!"),
            blogs: r.a.trans("Blogs"),
            blogStart: r.a.trans("Start Your Blog"),
            blogStartMsg: r.a.trans("This is your personal blog where you can share your chess thoughts. Some ideas to blog about:"),
            blogSettings: r.a.trans("Blog Settings"),
            blogIdeas: {
                playing: r.a.trans("What got me playing chess"),
                goals: r.a.trans("My chess goals are..."),
                best: r.a.trans("My best chess win")
            },
            buryBlog: r.a.trans("Bury Blog"),
            blogNotPublished: r.a.trans("<strong>NOTE:</strong> Your Blog has not yet been published. This is only a <strong>preview</strong>."),
            clickHere: r.a.trans("Click here"),
            createBlog: r.a.trans("Create Post"),
            delete: r.a.trans("Delete"),
            deleteBlog: r.a.trans("Delete Blog"),
            deleteConfirmation: r.a.trans("Are you sure you want to delete this blog?"),
            deleteSpamConfirmation: r.a.trans("Are you sure you want to delete post and report to akismet?"),
            edit: r.a.trans("Edit"),
            editBlog: r.a.trans("Edit Blog"),
            getListed: r.a.trans("Get Listed"),
            headline: r.a.trans("Headline"),
            mostRecent: r.a.trans("Most Recent"),
            mostViews: r.a.trans("Most Views"),
            myBlog: r.a.trans("My Blog"),
            moreInfo: r.a.trans("for more info."),
            no: r.a.trans("No"),
            noBlogPosts: r.a.trans("User doesn't have any blog posts"),
            publish: r.a.trans("Publish"),
            reportSpam: r.a.trans("Report Spam"),
            topBloggers: r.a.trans("Top Bloggers"),
            unburyBlog: r.a.trans("Unbury Blog"),
            yes: r.a.trans("Yes")
        },
        s = {
            BLOGS: "blogs",
            BLOGS_ID: "blog-id",
            CONFIRMATION_MODAL: "confirm-popover",
            CONFIRM_SUBMIT_MODAL: "confirm-submit-popover",
            INPUT_FOLLOW: "sidebar-input-follow",
            POST_HAS_IMAGE: "post-has-image",
            POST_IMAGE_INPUT: "blog_uploadedImages_main",
            POST_TINYMCE: "blog_body",
            PREVIEW_BUTTON: "blog_preview",
            ROOT_AUTHORS: "view-blogs-authors",
            ROOT_CATEGORY: "view-blogs-category",
            ROOT_INDEX: "view-blogs-index",
            ROOT_MEMBER: "view-blogs-member",
            ROOT_SINGLE: "view-blogs-single",
            SAVE_BUTTON: "blog_save"
        }
}, , function(e, t, n) {
    "use strict";
    var r = n(39),
        a = n(18),
        o = n(35),
        i = {
            name: "form-input",
            components: {
                IconFont: a.a
            },
            directives: {
                tooltip: o.a
            },
            mixins: [r.a],
            props: {
                ariaLabel: String,
                autocomplete: String,
                autofocus: Boolean,
                disabled: {
                    type: Boolean,
                    default: !1,
                    required: !1
                },
                iconLeft: {
                    type: String,
                    required: !1
                },
                iconLeftTooltip: {
                    type: String,
                    default: ""
                },
                iconRight: {
                    type: String,
                    required: !1
                },
                iconRightTooltip: {
                    type: String,
                    default: ""
                },
                id: String,
                maxlength: Number,
                name: String,
                placeholder: {
                    type: String,
                    required: !1
                },
                size: {
                    type: String,
                    required: !1
                },
                type: {
                    type: String,
                    default: "text"
                },
                value: {
                    type: [String, Number],
                    required: !1
                }
            },
            methods: {
                blurEvent: function blurEvent(e) {
                    this.$emit("blur", e)
                },
                focusEvent: function focusEvent(e) {
                    this.$emit("focus", e)
                },
                keyupEvent: function keyupEvent(e) {
                    this.$emit("keyup", e)
                },
                onIconClick: function onIconClick(e) {
                    this.$emit("icon-click-".concat(e))
                },
                updateValue: function updateValue(e) {
                    this.$emit("input", e)
                }
            }
        },
        s = n(201),
        c = n(5);
    var l = Object(c.a)(i, function() {
        var e, t, n = this,
            r = n.$createElement,
            a = n._self._c || r;
        return a("div", {
            class: n.componentClasses()
        }, [n.iconLeft ? a("icon-font", {
            directives: [{
                name: "tooltip",
                rawName: "v-tooltip",
                value: n.iconLeftTooltip,
                expression: "iconLeftTooltip"
            }],
            class: [n.$style.icon, n.$style.left],
            attrs: {
                "is-dark-mode": n.isDarkMode,
                name: n.iconLeft,
                theme: "primary"
            },
            on: {
                click: function(e) {
                    return n.onIconClick("left")
                }
            }
        }) : n._e(), n._v(" "), a("input", {
            class: [n.$style.input, (e = {}, e[n.$style.left] = n.iconLeft, e), (t = {}, t[n.$style.right] = n.iconRight, t), n.$style[n.size]],
            attrs: {
                "aria-label": n.ariaLabel,
                autocomplete: n.autocomplete,
                autofocus: n.autofocus,
                id: n.id,
                maxlength: n.maxlength,
                name: n.name,
                placeholder: n.placeholder,
                readonly: n.disabled,
                type: n.type
            },
            domProps: {
                value: n.value
            },
            on: {
                blur: function(e) {
                    return n.blurEvent(e)
                },
                focus: function(e) {
                    return n.focusEvent(e)
                },
                input: function(e) {
                    return n.updateValue(e.target.value)
                },
                keyup: function(e) {
                    return n.keyupEvent(e)
                }
            }
        }), n._v(" "), n.iconRight ? a("icon-font", {
            directives: [{
                name: "tooltip",
                rawName: "v-tooltip",
                value: n.iconRightTooltip,
                expression: "iconRightTooltip"
            }],
            class: [n.$style.icon, n.$style.right],
            attrs: {
                "is-dark-mode": n.isDarkMode,
                name: n.iconRight
            },
            on: {
                click: function(e) {
                    return n.onIconClick("right")
                }
            }
        }) : n._e()], 1)
    }, [], !1, function injectStyles(e) {
        this.$style = s.default.locals || s.default
    }, null, null);
    t.a = l.exports
}, function(e, t, n) {
    e.exports = {
        component: "icon-font-component",
        primary: "icon-font-primary",
        darkMode: "icon-font-darkMode",
        secondary: "icon-font-secondary",
        tertiary: "icon-font-tertiary",
        chess: "icon-font-chess",
        captured: "icon-font-captured"
    }
}, , function(e, t, n) {
    e.exports = n(26)(85)
}, function(e, t, n) {
    "use strict";
    var r = {
        "bundles/web/images/game-preview-loading.png": "bundles/web/images/game-preview-loading.8677fb94.png",
        "bundles/web/images/image-default.svg": "bundles/web/images/image-default.52fd5825.svg",
        "bundles/web/images/noavatar_l.gif": "bundles/web/images/noavatar_l.3e62aedf.gif",
        "bundles/web/images/user-image.svg": "bundles/web/images/user-image.152ee336.svg",
        "bundles/web/images/web/learn-to-play.png": "bundles/web/images/web/learn-to-play.51d38c0a.png",
        "bundles/web/images/web/tablet.jpg": "bundles/web/images/web/tablet.f8b6e8c5.jpg",
        "bundles/web/images/svg/tic.svg": "bundles/web/images/svg/tic.b039b4f5.svg",
        "bundles/web/images/svg/white-tic.svg": "bundles/web/images/svg/white-tic.18d3027b.svg",
        "bundles/web/images/webgl_data/2d/arcade/active-field-black-glow.png": "bundles/web/images/webgl_data/2d/arcade/active-field-black-glow.12c5cf39.png",
        "bundles/web/images/webgl_data/2d/arcade/active-field-white-glow.png": "bundles/web/images/webgl_data/2d/arcade/active-field-white-glow.7cb87681.png",
        "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.f0a77302.json",
        "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.5fbafd33.png",
        "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.3c3eb885.json",
        "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.07c65378.png",
        "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.json": "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.29ffee8a.json",
        "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.png": "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.4174885c.png",
        "bundles/web/images/webgl_data/2d/arcade/check-lightning.json": "bundles/web/images/webgl_data/2d/arcade/check-lightning.9818146c.json",
        "bundles/web/images/webgl_data/2d/arcade/check-lightning.png": "bundles/web/images/webgl_data/2d/arcade/check-lightning.13d87b75.png",
        "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.090095b9.json",
        "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.14a5e64e.png",
        "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.8e89a03e.json",
        "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.d00459f4.png",
        "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-black.png": "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-black.2943ecd4.png",
        "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-white.png": "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-white.6c485bae.png",
        "bundles/web/images/webgl_data/2d/arcade/lightning-horizontal.png": "bundles/web/images/webgl_data/2d/arcade/lightning-horizontal.c955fccb.png",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.d04ec1d5.json",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.f505cdbc.png",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.16dcf372.json",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.b8f9f703.png",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.2f52761e.json",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.e63372ad.png",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.e1f5d8cf.json",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.fcbd9ed9.png",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.8d776f5a.json",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.3a45986a.png",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.e4b8d4a8.json",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.a0fc79f2.png",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.46ff1e1e.json",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.c4332bdf.png",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.d2c18ae4.json",
        "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.ab25eede.png",
        "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.3407e009.json",
        "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.137b1116.png",
        "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.6c02602b.json",
        "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.2615abda.png",
        "bundles/web/images/webgl_data/2d/capture-dust.json": "bundles/web/images/webgl_data/2d/capture-dust.221e5b9d.json",
        "bundles/web/images/webgl_data/2d/capture-dust.png": "bundles/web/images/webgl_data/2d/capture-dust.eeec5f17.png",
        "bundles/web/images/webgl_data/2d/dust-big.json": "bundles/web/images/webgl_data/2d/dust-big.3978c9b2.json",
        "bundles/web/images/webgl_data/2d/dust-big.png": "bundles/web/images/webgl_data/2d/dust-big.df6ca2e5.png",
        "bundles/web/images/webgl_data/2d/dust-regular.json": "bundles/web/images/webgl_data/2d/dust-regular.c277df9e.json",
        "bundles/web/images/webgl_data/2d/dust-regular.png": "bundles/web/images/webgl_data/2d/dust-regular.f765f10c.png",
        "bundles/web/images/webgl_data/2d/dust-small.json": "bundles/web/images/webgl_data/2d/dust-small.e988c379.json",
        "bundles/web/images/webgl_data/2d/dust-small.png": "bundles/web/images/webgl_data/2d/dust-small.2fc95fc8.png",
        "bundles/web/images/webgl_data/2d/field-shadow.png": "bundles/web/images/webgl_data/2d/field-shadow.0819d939.png",
        "bundles/web/images/webgl_data/2d/hand.json": "bundles/web/images/webgl_data/2d/hand.a9ba7da1.json",
        "bundles/web/images/webgl_data/2d/hand.png": "bundles/web/images/webgl_data/2d/hand.70349a3a.png",
        "bundles/web/images/webgl_data/3d/board/board.json": "bundles/web/images/webgl_data/3d/board/board.f425db44.json",
        "bundles/web/images/webgl_data/3d/board/textures/board_8_bit_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_8_bit_notation.a3bf6bb5.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_8_bit.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_8_bit.c238987b.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_bases_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_bases_notation.4fa42cab.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_bases.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_bases.5966f51d.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite_notation.9d31ef9e.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite.f6436596.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_blue_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_blue_notation.a7ed2c2a.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_blue.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_blue.7d30c9fc.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_brown_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_brown_notation.66e656e5.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_brown.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_brown.f8e9e53d.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum_notation.75637678.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum.34d5bf78.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood_notation.f3f69a8a.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood.4ba59d4b.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood_notation.6fe2bbf7.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood.ac2798f7.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_dash_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_dash_notation.3913780e.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_dash.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_dash.fe973b28.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_glass_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_glass_notation.bfcc418d.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_glass.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_glass.462df59a.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_graffiti_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_graffiti_notation.ee28e65f.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_graffiti.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_graffiti.ddc5ac93.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_green_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_green_notation.af017c39.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_green.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_green.944bda20.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_grey_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_grey_notation.5f5188b1.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_grey.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_grey.26eeeb0d.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea_notation.8a2dbe83.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea.7e97a7c5.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_light_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_light_notation.ed019a76.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_light.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_light.fe79815a.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_lolz_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_lolz_notation.a00264f3.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_lolz.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_lolz.cf1f0e6b.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_marble_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marble_notation.85730a04.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_marble.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marble.fb694be3.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue_notation.733ec2a6.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue.c5708acd.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown_notation.b4deece6.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown.106671ff.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen_notation.5b6fd2c5.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen.a56f3a5d.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_metal_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_metal_notation.2644fa29.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_metal.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_metal.9e8343ff.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_neon_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_neon_notation.8aa5eb20.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_neon.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_neon.1c8ed3ca.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_newspaper_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_newspaper_notation.0d446457.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_newspaper.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_newspaper.940c4c9b.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_orange_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_orange_notation.ac13f29e.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_orange.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_orange.df689dfe.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_overlay_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_overlay_notation.a6b83a1e.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_overlay.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_overlay.b76a5834.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_parchment_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_parchment_notation.af97cabb.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_parchment.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_parchment.dac73d51.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_pink_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_pink_notation.811ee777.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_pink.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_pink.e3b56463.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_purple_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_purple_notation.f9f8349a.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_purple.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_purple.429e87cc.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_red_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_red_notation.51389339.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_red.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_red.4824adf7.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_sand_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_sand_notation.3712caa6.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_sand.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_sand.5eb8d889.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_shadow.png": "bundles/web/images/webgl_data/3d/board/textures/board_shadow.d490d6b4.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_sky_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_sky_notation.dfa5e504.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_sky.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_sky.f9014b7c.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_stone_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_stone_notation.81db0ebf.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_stone.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_stone.75e0be38.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_tan_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_tan_notation.606335e2.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_tan.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_tan.de0583bf.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_tournament_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_tournament_notation.243f8730.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_tournament.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_tournament.ca792689.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_translucent_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_translucent_notation.8def817e.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_translucent.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_translucent.05d18c94.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_walnut_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_walnut_notation.cfb242b2.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_walnut.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_walnut.ef9a07ec.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_winboard_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_winboard_notation.be4c9f8c.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_winboard.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_winboard.087df05e.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_wood_notation.b13541a6.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_wood.a1c1365b.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_wooddark_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_wooddark_notation.6fe2bbf7.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_wooddark.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_wooddark.ac2798f7.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_woodlight_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodlight_notation.39bc254f.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_woodlight.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodlight.cbd0cac3.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_woodmid_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodmid_notation.15e78f80.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_woodmid.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodmid.d30783ac.jpg",
        "bundles/web/images/webgl_data/3d/board/textures/board_woodolive_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodolive_notation.d62e0a2a.png",
        "bundles/web/images/webgl_data/3d/board/textures/board_woodolive.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodolive.33fafd16.jpg",
        "bundles/web/images/webgl_data/3d/marking_arrow_L.json": "bundles/web/images/webgl_data/3d/marking_arrow_L.be09e498.json",
        "bundles/web/images/webgl_data/3d/marking_arrow_straight.json": "bundles/web/images/webgl_data/3d/marking_arrow_straight.a6b956b9.json",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_black.64337a24.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_white.ec7eb316.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop.7395ab28.json",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/king.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/king.fc9672f5.json",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_black.cf1d93aa.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_white.0f8d79ee.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight.b9912c7a.json",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/pawn.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/pawn.32238b68.json",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_black.9b4d155e.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_white.7329522b.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen.8793f6ab.json",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_black.d0fd00a8.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_white.1bc4a10e.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook.76894e32.json",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/bishop_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/bishop_shadow.0b5ee42e.png",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negx.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negx.33eada3e.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negy.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negy.9b25971e.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negz.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negz.a12ca378.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posx.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posx.b40ae1ef.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posy.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posy.e2b2685d.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posz.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posz.e8613ffe.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/king_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/king_shadow.d6ee554e.png",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/knight_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/knight_shadow.ea452b95.png",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/pawn_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/pawn_shadow.fc807ae3.png",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_black.f1a263b7.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_black.cfb7a7d9.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_white.c0d26492.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_black.fc320163.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_white.26bd2db6.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_black.5b2b7dca.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_white.add6f6cb.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_white.02639edc.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_black.15255deb.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_white.40e5ede4.jpg",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/queen_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/queen_shadow.2381b0ed.png",
        "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/rook_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/rook_shadow.a85529f8.png"
    };
    n.d(t, "a", function() {
        return i
    });
    var a, o = window.Config ? window.Config["domain.static"] : "localhost:8081";
    a = window.Config && window.Config["domain.static"] ? "https" : "http";
    var i = function generateUrl(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
            i = t ? "".concat(n, "://").concat(o) : "",
            s = null != r[e] ? r[e] : e;
        return "".concat(i, "/").concat(s)
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    }), n.d(t, "b", function() {
        return o
    });
    var r = n(20),
        a = function getBoardContainerElement() {
            var e = r.h.board.substr(1),
                t = document.getElementsByClassName(e)[0];
            return t || null
        },
        o = function getBoardElement() {
            var e = a();
            if (!e) return null;
            var t = e.childNodes;
            return Array.from(t).find(function(e) {
                return 1 === e.nodeType
            })
        }
}, , function(e, t, n) {
    e.exports = {
        component: "modal-container-component",
        "parent-centered": "modal-container-parent-centered",
        bg: "modal-container-bg",
        enter: "modal-container-enter",
        leave: "modal-container-leave",
        "content-centered": "modal-container-content-centered"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(58),
        a = {
            expanded: null === document.querySelector("".concat(r.a.SIDEBAR, ".").concat(r.a.SIDEBAR_COLLAPSED)),
            forcedOpen: !1,
            isLive: "/live" === window.location.pathname.substr(0, 5),
            isLiveElement: document.querySelector("#live-app"),
            isVisible: !0,
            isWide: "en-US" !== document.documentElement.getAttribute("lang"),
            position: "horizontal",
            showingSecondary: null
        };
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = [];
        return {
            emit: function emit(n, r) {
                t.filter(function(e) {
                    return e.type === n
                }).forEach(function(t) {
                    return t.handler(e, r)
                })
            },
            off: function off(e) {
                return -1 !== t.findIndex(function(t) {
                    return t.type === e.type && t.handler === e.handler
                }) && t.splice(t, 1), t
            },
            on: function on(e, n) {
                return t.push({
                    type: e,
                    handler: n
                }), t
            },
            state: e,
            subscriptions: t
        }
    }(a)
}, function(e, t, n) {
    e.exports = {
        component: "form-button-component",
        dark: "form-button-dark",
        "x-small": "form-button-x-small",
        small: "form-button-small",
        large: "form-button-large",
        "x-large": "form-button-x-large",
        "full-width": "form-button-full-width",
        basic: "form-button-basic",
        darkMode: "form-button-darkMode",
        primary: "form-button-primary",
        info: "form-button-info",
        danger: "form-button-danger"
    }
}, function(e, t, n) {
    e.exports = n(26)(44)
}, function(e, t, n) {
    "use strict";
    t.a = new class ScriptLoader {
        constructor() {
            this.insert = this.loadScript(function(e, t) {
                var n = document.createElement("script");
                return n.type = "text/javascript", n.src = e, t && Object.keys(t).forEach(function(e) {
                    n.setAttribute(e, t[e])
                }), document.body.appendChild(n), n
            })
        }
        loadScript(e) {
            var t = {};
            return function(n, r) {
                if (void 0 === t[n]) {
                    var a = new Promise(function(t, a) {
                        var o = e(n, r);
                        o.onload = function(e) {
                            t(e)
                        }, o.onreadystatechange = o.onload, o.onerror = function(e) {
                            a(e)
                        }
                    });
                    t[n] = a
                }
                return t[n]
            }
        }
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(289),
        a = n(36),
        o = n(254),
        i = function setAttributes(e, t) {
            var n = t.value.src,
                a = t.value.srcset ? "".concat(Object(r.a)(n), " 2x") : void 0;
            n && e.setAttribute("src", n), a && e.setAttribute("srcset", a), o.a.unobserve(e)
        };
    t.a = {
        bind: function bind(e, t) {
            a.a.$on("visibility-observer-change", function(n) {
                n === e && (i(e, t), e.dataset.visible = !0)
            }), o.a.observe(e)
        },
        componentUpdated: function componentUpdated(e, t) {
            void 0 !== e.dataset.visible && i(e, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(9),
        a = n(28),
        o = n(0),
        i = n(138),
        s = [{
            value: "newest",
            label: o.a.trans("Most Recent")
        }, {
            value: "view_count",
            label: o.a.trans("Most Views")
        }],
        c = document.getElementById(r.f.FILTERS),
        l = c ? c.getAttribute(r.a.ICON_BUTTON) : null;
    t.a = Object(a.a)("#".concat(r.f.FILTERS), function() {
        return {
            component: i.a,
            propsData: {
                iconButton: l,
                onChange: function onChange() {},
                options: s,
                overlay: !0,
                value: s[0]
            }
        }
    })
}, function(e, t, n) {
    "use strict";
    t.a = {
        BOTTOM_LINK_MOUSE_ENTER: "BOTTOM_LINK_MOUSE_ENTER",
        EXPAND_COLLAPSE_CHANGE: "EXPAND_COLLAPSE_CHANGE",
        FEATURE_LINK_INIT: "FEATURE_LINK_INIT",
        FETCH_NOTIFICATIONS: "FETCH_NOTIFICATIONS",
        FETCH_NOTIFICATION_COUNT: "FETCH_NOTIFICATION_COUNT",
        HIDE_TIME_CONTROLS: "HIDE_TIME_CONTROLS",
        LINK_SECONDARY_HIDE: "LINK_SECONDARY_HIDE",
        LINK_SECONDARY_MOUNTS: "LINK_SECONDARY_MOUNTS",
        NAV_TOGGLED: "NAV_TOGGLED",
        NOTIFICATIONS_FETCHED: "NOTIFICATIONS_FETCHED",
        NOTIFICATIONS_PANEL_INIT: "NOTIFICATIONS_PANEL_INIT",
        OPEN_LANGUAGE_PICKER: "OPEN_LANGUAGE_PICKER",
        SECONDARY_CHANGE: "SECONDARY_CHANGE",
        SHOW_VIDEO_MODAL: "SHOW_VIDEO_MODAL",
        TOGGLE_DAILY_CONTROLS: "TOGGLE_DAILY_CONTROLS",
        TOGGLE_LIVE_CONTROLS: "TOGGLE_LIVE_CONTROLS",
        VIEW_MOUNTED: "VIEW_MOUNTED"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-dropdown-component",
        select: "form-dropdown-select",
        filter: "form-dropdown-filter",
        "desktop-button": "form-dropdown-desktop-button",
        "mobile-button": "form-dropdown-mobile-button",
        value: "form-dropdown-value",
        chevron: "form-dropdown-chevron",
        options: "form-dropdown-options",
        left: "form-dropdown-left",
        "advanced-options": "form-dropdown-advanced-options",
        option: "form-dropdown-option",
        icon: "form-dropdown-icon",
        live960: "form-dropdown-live960",
        bullet: "form-dropdown-bullet",
        blitz: "form-dropdown-blitz",
        rapid: "form-dropdown-rapid",
        threecheck: "form-dropdown-threecheck",
        kingofthehill: "form-dropdown-kingofthehill",
        crazyhouse: "form-dropdown-crazyhouse",
        bughouse: "form-dropdown-bughouse",
        selected: "form-dropdown-selected",
        "short-title": "form-dropdown-short-title",
        overlay: "form-dropdown-overlay",
        separator: "form-dropdown-separator",
        flag: "form-dropdown-flag"
    }
}, function(e, t, n) {
    e.exports = {
        box: "modal-video-box",
        video: "modal-video-video",
        close: "modal-video-close"
    }
}, function(e, t, n) {
    e.exports = n(226)(64)
}, function(e, t, n) {
    "use strict";
    var r = n(31);
    t.a = function(e, t, n, a, o) {
        var i = Array.from(document.querySelectorAll(e)),
            s = [],
            c = {};
        if (0 === i.length) return s;
        for (var l = 0, u = i; l < u.length; l++) {
            var d = u[l],
                p = !0;
            "function" == typeof n && (c = n(d)), a && (d.dataset[a] ? p = !1 : d.dataset[a] = !0);
            var m = {
                el: d
            };
            if (o && (m.store = o), p) {
                var f = Object.assign(m, t, {
                    propsData: c
                });
                s.push(new r.default(f))
            }
        }
        return s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(152),
        a = {};
    ["setTimeout", "setInterval", "clearTimeout", "clearInterval"].forEach(function(e) {
        a[e] = r.a[e].bind(r.a)
    }), t.a = a
}, function(e, t, n) {
    e.exports = n(26)(82)
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
        return o
    }), n.d(t, "c", function() {
        return i
    }), n.d(t, "d", function() {
        return s
    }), n.d(t, "f", function() {
        return c
    }), n.d(t, "b", function() {
        return l
    }), n.d(t, "a", function() {
        return u
    }), n.d(t, "g", function() {
        return d
    });
    var r = n(3),
        a = n.n(r);

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
    var o = function objectIsEmpty(e) {
        return e && !Object.keys(e).length
    };
    var i = function objectHasData() {
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
                return _objectSpread({}, t, a()({}, n, e[n]))
            }, {})
        },
        l = function invertObject(e) {
            return Object.keys(e).reduce(function(t, n) {
                return _objectSpread({}, t, a()({}, e[n], n))
            }, {})
        },
        u = function hasProperty(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        d = function transformObjectBooleansToBinaryString(e) {
            return Object.keys(e).reduce(function(t, n) {
                var r = e[n];
                return "boolean" == typeof r && (r = r ? "1" : "0"), t[n] = r, t
            }, {})
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function concatUrlParams(e) {
        var t = [];
        return e.forEach(function(e) {
            t.push(e.join("="))
        }), t
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }), n.d(t, "d", function() {
        return i
    }), n.d(t, "e", function() {
        return s
    }), n.d(t, "c", function() {
        return c
    }), n.d(t, "b", function() {
        return l
    });
    var r = n(0),
        a = n(8),
        o = {
            ARTICLE_ID: "data-article-id"
        },
        i = {
            articlesIndex: function articlesIndex(e, t) {
                var n = {};
                return 1 !== e && (n.page = e), t && (n.unpublished = t), Object(a.a)("web_article_index", n, !0)
            },
            articlesAuthors: Object(a.a)("web_articles_authors"),
            articlesSearch: function articlesSearch(e, t, n) {
                return Object(a.a)("web_article_search", {
                    keyword: e,
                    page: t,
                    orderBy: n
                }, !0)
            },
            category: function category(e) {
                return Object(a.a)("web_article_category", {
                    url: e
                })
            },
            categoryByPage: function categoryByPage(e, t, n) {
                var r = {
                    url: e
                };
                return 1 !== t && (r.page = t), n && (r.orderBy = n), Object(a.a)("web_article_category", r, !0)
            },
            createArticle: Object(a.a)("web_article_post"),
            curriculumForKids: Object(a.a)("web_article_view", {
                url: "free-chess-curriculum-for-parents-coaches"
            }),
            deleteArticle: function deleteArticle(e, t) {
                return Object(a.a)("web_article_delete", {
                    id: e,
                    _token: t
                })
            },
            editArticle: function editArticle(e) {
                return Object(a.a)("web_article_post", {
                    id: e
                })
            },
            articleVersion: function articleVersion(e, t) {
                return Object(a.a)("web_article_post", {
                    id: e,
                    version: t
                })
            },
            member: function member(e) {
                return Object(a.a)("web_member_view", {
                    username: e
                })
            },
            memberArticles: function memberArticles(e) {
                return Object(a.a)("web_article_member", {
                    username: e
                })
            },
            memberArticlesByPage: function memberArticlesByPage(e, t, n) {
                return Object(a.a)("web_article_member", {
                    username: e,
                    page: t,
                    orderBy: n
                }, !0)
            },
            studyPlans: Object(a.a)("web_article_view", {
                url: "study-plan-directory"
            }),
            toggleCommentsLock: function toggleCommentsLock(e) {
                return Object(a.a)("web_article_toggle_lock_comments", {
                    id: e
                })
            },
            translate: function translate(e) {
                return Object(a.a)("web_article_post", {
                    id: e
                })
            },
            unpublished: Object(a.a)("web_article_index", {
                unpublished: 1
            })
        },
        s = {
            articles: r.a.trans("Articles"),
            articleAuthors: r.a.trans("Article Authors"),
            authors: r.a.trans("Authors"),
            category: function category(e) {
                return r.a.trans(e, {}, "dynamic")
            },
            createArticle: r.a.trans("Create Article"),
            curriculumForKids: r.a.trans("Curriculum for Kids"),
            deleteArticle: r.a.trans("Delete Article"),
            deleteArticleConfirm: r.a.trans("Are you sure you want to delete this article?"),
            editArticle: r.a.trans("Edit Article"),
            headline: r.a.trans("Headline"),
            lockComments: r.a.trans("Lock Comments"),
            myArticles: r.a.trans("My Articles"),
            rss: r.a.trans("RSS"),
            studyPlans: r.a.trans("Study Plans"),
            translate: r.a.trans("Translate"),
            unlockComments: r.a.trans("Unlock Comments"),
            unpublished: r.a.trans("Unpublished")
        },
        c = {
            ARTICLES: "articles",
            ARTICLES_ID: "article-id",
            DATA_CATEGORY_URL: "data-category-url",
            DATA_CURRENT_PAGE: "data-current-page",
            DATA_KEYWORD: "data-keyword",
            DATA_ORDER_BY: "data-order-by",
            DATA_UNPUBLISHED: "data-unpublished",
            DATA_USERNAME: "data-username",
            PAGE_FILTERS: "page-filters",
            PAGINATION_BOTTOM: "pagination-bottom",
            PAGINATION_TOP: "pagination-top",
            POST_FORM_DATE: "form-date",
            POST_IMAGE_INPUT: "article_uploadedImages_main",
            POST_PREVIEW_BUTTON: "article_preview",
            POST_PUBLISH_BUTTON: "article_save",
            POST_TINYMCE: "article_body",
            PREVIEW_BUTTON: "article_preview",
            ROOT_AUTHORS: "view-articles-authors",
            ROOT_CATEGORY: "view-articles-category",
            ROOT_INDEX: "view-articles-index",
            ROOT_SINGLE: "view-articles-single",
            SAVE_BUTTON: "article_save"
        },
        l = {
            ARTICLES_SEARCH: "articlesSearch",
            CATEGORY_BY_PAGE: "categoryByPage",
            MEMBER_ARTICLES_BY_PAGE: "memberArticlesByPage"
        }
}, , function(e, t, n) {
    var r = n(132),
        a = n(151);
    e.exports = function isArrayLike(e) {
        return null != e && a(e.length) && !r(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "loader-three-bounce",
            props: {
                isCircle: {
                    type: Boolean,
                    default: !1
                },
                size: {
                    type: Number,
                    default: 80
                }
            },
            computed: {
                dotCss: function dotCss() {
                    var e = "".concat(Math.round(this.size / 4), "px");
                    return {
                        width: e,
                        height: e
                    }
                }
            }
        },
        a = n(237),
        o = n(5);
    var i = Object(o.a)(r, function() {
        var e, t = this,
            n = t.$createElement,
            r = t._self._c || n;
        return r("div", {
            class: [t.$style.component, (e = {}, e[t.$style.circle] = t.isCircle, e)],
            style: {
                width: t.size + "px"
            }
        }, [r("div", {
            class: [t.$style.dot, t.$style.bounce1],
            style: t.dotCss
        }), t._v(" "), r("div", {
            class: [t.$style.dot, t.$style.bounce2],
            style: t.dotCss
        }), t._v(" "), r("div", {
            class: t.$style.dot,
            style: t.dotCss
        })])
    }, [], !1, function injectStyles(e) {
        this.$style = a.default.locals || a.default
    }, null, null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = {
        HIDE_MODAL: "hide-modal",
        HIDE_MODAL_BACKGROUND_CLICK: "hide-background",
        HIDE_MODAL_SOCIAL_SHARE: "hide-modal-social-share",
        LOGIN_OR_REGISTER_MODAL: "LOGIN_OR_REGISTER_MODAL",
        MODAL_DID_HIDE: "modal-did-hide",
        SHOW_MODAL_SOCIAL_SHARE: "show-modal-social-share",
        SHOW_UPGRADE_MODAL: "show-upgrade-modal"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(64),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(79);

    function removeClassFromElement(e, t) {
        var n = document.getElementById(e);
        null === n && void 0 === n || n.classList.remove(t)
    }

    function addClassToElement(e, t) {
        var n = document.getElementById(e);
        null === n && void 0 === n || n.classList.add(t)
    }
    var a = n(9),
        o = n(48),
        i = n(53),
        s = n(105),
        c = n(103),
        l = n(7),
        u = n(19);

    function parseNewsResponse(e) {
        return e.map(function(e) {
            return Object.assign({}, e, {
                author: {
                    chessTitle: e.chess_title,
                    username: e.username,
                    url: l.a.generate("web_member_view", {
                        username: e.username
                    })
                },
                time: u.a.relative(1e3 * e.create_date),
                comments: Object(u.b)(e.comment_count),
                views: Object(u.b)(e.view_count),
                excerpt: e.body,
                image: e.image_url,
                isDraft: !e.is_live
            })
        })
    }

    function setNewsToHeadline(e) {
        return e && (e.isHeadline = !0), e
    }
    var d = n(72),
        p = (n(58), n(18)),
        m = n(46),
        f = {
            name: "modal-video",
            components: {
                IconFont: p.a,
                ModalContainer: m.a
            },
            props: {
                source: {
                    type: String,
                    required: !0
                }
            },
            mounted: function mounted() {
                var e = this;
                d.a.on(r.a.SHOW_VIDEO_MODAL, function() {
                    e.$refs.modal.show()
                })
            },
            methods: {
                hide: function hide() {
                    this.$refs.modal.hide()
                }
            }
        },
        h = n(108),
        g = n(5);
    Object(g.a)(f, function() {
        var e = this.$createElement,
            t = this._self._c || e;
        return t("modal-container", {
            ref: "modal"
        }, [t("div", {
            class: this.$style.box
        }, [t("div", {
            class: this.$style.video
        }, [t("iframe", {
            attrs: {
                allowfullscreen: "",
                frameborder: "0",
                height: "100%",
                width: "100%",
                src: this.source
            }
        }), this._v(" "), t("icon-font", {
            class: this.$style.close,
            attrs: {
                family: "chess",
                name: "x",
                theme: "primary"
            },
            on: {
                click: this.hide
            }
        })], 1)])])
    }, [], !1, function injectStyles(e) {
        this.$style = h.default.locals || h.default
    }, null, null).exports, n(31);

    function parseContentResponse(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = {
                articles: {
                    setHeadline: s.c,
                    parseContent: s.a
                },
                blogs: {
                    setHeadline: c.d,
                    parseContent: c.c
                },
                news: {
                    setHeadline: setNewsToHeadline,
                    parseContent: parseNewsResponse
                }
            };
        return Object.prototype.hasOwnProperty.call(r, e) ? (n && t[0] && (t[0] = r[e].setHeadline(t[0])), r[e].parseContent(t)) : t
    }

    function showFooterOnLoad() {
        window.addEventListener("load", function() {
            removeClassFromElement("".concat(a.f.NAVIGATION_FOOTER), "navigation-footer-hide"), Object(o.f)("layout-one-column-component") && addClassToElement("".concat(a.f.NAVIGATION_FOOTER), "navigation-footer-component-one-column"), Object(o.f)("layout-two-column-flipped-component") && addClassToElement("".concat(a.f.NAVIGATION_FOOTER), "navigation-footer-component-flipped-column")
        })
    }

    function stripTags(e) {
        return String(e).replace(/<[^>]+>/gm, "")
    }
    n.d(t, "b", function() {
        return parseContentResponse
    }), n.d(t, "d", function() {
        return showFooterOnLoad
    }), n.d(t, "e", function() {
        return stripTags
    }), n.d(t, "a", function() {
        return b
    }), n.d(t, "f", function() {
        return _
    }), n.d(t, "c", function() {
        return w
    });
    var b = function onEditBtnClick(e, t) {
            e.preventDefault(), t.classList.add(a.f.POST_CAN_EDIT_URL)
        },
        v = function ariaInBtn(e, t) {
            return e || t
        },
        y = function collapseBtn(e) {
            var t = e.currentTarget,
                n = t.getAttribute(a.a.ARIA_CONTROLS),
                r = t.getAttribute(a.a.CUSTOM_BTN_CLASS),
                o = t.getAttribute(a.a.CUSTOM_COLLAPSE_CLASS),
                i = a.f.COLLAPSED,
                s = a.f.HIDDEN;
            t.classList.toggle(v(r, i));
            var c = document.getElementById(n);
            c && c.classList.toggle(v(o, s))
        },
        _ = function toggleCollapse() {
            Array.from(document.querySelectorAll(".".concat(a.f.COLLAPSE))).forEach(function(e) {
                e.addEventListener("click", y)
            }), document.removeEventListener("DOMContentLoaded", toggleCollapse)
        },
        w = function rtlClass(e) {
            return Object(i.a)() ? e["right-to-left"] : ""
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function getAllUrlParams(e) {
        var t = [];
        return e.substring(1).split("&").forEach(function(e) {
            t.push(e.split("="))
        }), t
    }
}, function(e, t, n) {
    "use strict";
    var r = n(71),
        a = n.n(r);
    t.default = a.a
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function makeSvg(e) {
        var t = e.path,
            n = void 0 === t ? "" : t,
            r = e.size,
            a = void 0 === r ? 24 : r,
            o = e.viewBox,
            i = void 0 === o ? "0 0 18 19" : o;
        return '\n  <svg width="'.concat(a, '" height="').concat(a, '" viewBox="').concat(i, '">\n    ').concat(n, "\n  </svg>\n")
    }
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "form-checkbox",
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                },
                id: {
                    type: String
                },
                label: {
                    type: String,
                    required: !0
                },
                name: {
                    type: String,
                    required: !0
                },
                value: {
                    type: Boolean,
                    required: !0
                }
            },
            methods: {
                setCheckboxStatus: function setCheckboxStatus(e) {
                    this.$emit("input", e)
                }
            }
        },
        a = n(220),
        o = n(5);
    var i = Object(o.a)(r, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
            class: e.$style.component
        }, [n("input", {
            class: e.$style.checkbox,
            attrs: {
                type: "checkbox",
                disabled: e.disabled,
                id: e.id || e.name,
                name: e.name
            },
            domProps: {
                checked: e.value
            },
            on: {
                change: function(t) {
                    return e.setCheckboxStatus(t.target.checked)
                }
            }
        }), e._v(" "), n("label", {
            class: e.$style.label,
            attrs: {
                for: e.name
            }
        }, [e._v("\n    " + e._s(e.label) + "\n  ")])])
    }, [], !1, function injectStyles(e) {
        this.$style = a.default.locals || a.default
    }, null, null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    var r = n(20),
        a = function animationChangeRequiresRefresh(e, t) {
            return r.l.animations.indexOf(e) > -1 || r.l.animations.indexOf(t) > -1
        },
        o = n(50),
        i = n(98),
        s = function buildEffect(e) {
            var t = e.icon,
                n = e.node;
            return {
                position: {
                    x: "right",
                    y: "top"
                },
                square: e.square || o.a.convertLanToFileRanks("".concat(n.from).concat(n.to)).toFileRank,
                template: Object(i.a)({
                    path: t,
                    size: "100%"
                })
            }
        },
        c = n(11),
        l = n(7),
        u = function seekGifUntilReady(e, t) {
            c.default.get(e).then(function(n) {
                202 === n.status ? setTimeout(seekGifUntilReady.bind(null, e, t), 2e3) : 200 === n.status && t(e)
            }).catch(function() {
                t(e)
            })
        },
        d = function getCustomAnimatedGif(e) {
            var t = e.tcn,
                n = e.flip,
                r = e.isChess960,
                a = e.initialPosition,
                o = l.a.generate("web_game_callback_create_dyn_gif_url"),
                i = {
                    tcn: t,
                    flip: n,
                    isChess960: r,
                    initialSetup: a
                };
            return c.default.post(o, i).then(function(e) {
                return new Promise(function(t) {
                    u(e.data, t)
                })
            })
        },
        p = n(69),
        m = function getShareUrl() {
            var e = window.document.documentElement.lang,
                t = window.location,
                n = e.split("-")[0];
            return t.pathname.split("/")[1] === n || "en" === n ? t.href : "".concat(t.protocol, "//").concat(t.hostname, "/").concat(n).concat(t.pathname)
        },
        f = function normalizeFen(e) {
            var t = e; - 1 !== t.indexOf("|") && (t = t.split("|")[0].trim());
            var n = t.split(" "),
                r = n[0].split("/");
            return r.length > 8 && (r.pop(), n[0] = r.join("/"), t = n.join(" ")), t
        },
        h = function pieceChangeRequiresRefresh(e, t) {
            var n = e === t,
                a = r.l.pieces.indexOf(e) > -1 || r.l.pieces.indexOf(t) > -1;
            return !n && a
        },
        g = function setBoardSize(e) {
            var t = document.querySelector(r.h.board);
            t && "number" == typeof e && (t.style.width = "".concat(e, "px"))
        },
        b = function showBoardResize() {
            var e = document.querySelector(r.h.resize);
            e && (e.style.visibility = "visible")
        };
    n.d(t, "a", function() {
        return a
    }), n.d(t, "b", function() {
        return s
    }), n.d(t, "c", function() {
        return p.a
    }), n.d(t, "d", function() {
        return d
    }), n.d(t, "e", function() {
        return m
    }), n.d(t, "f", function() {
        return f
    }), n.d(t, "g", function() {
        return h
    }), n.d(t, "h", function() {
        return g
    }), n.d(t, "i", function() {
        return b
    })
}, , function(e, t, n) {
    "use strict";
    var r = n(73),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return parseAuthorsResponse
    }), n.d(t, "c", function() {
        return parseBlogsResponse
    }), n.d(t, "d", function() {
        return setBlogToHeadline
    }), n.d(t, "a", function() {
        return configureFilters
    });
    var r = n(87),
        a = n(95),
        o = n(19),
        i = n(28),
        s = n(9),
        c = n(61),
        l = n(78),
        u = n(7);

    function parseAuthorsResponse(e) {
        return e.map(function(e) {
            return Object.assign({}, e, {
                avatar: e.avatar_url,
                followers: Object(o.b)(e.follower_count),
                name: Object.prototype.hasOwnProperty.call(e, "first_name") ? "".concat(e.first_name, " ").concat(e.last_name ? e.last_name : "") : e.username
            })
        })
    }

    function parseBlogsResponse(e) {
        return e.map(function(e) {
            return Object.assign({}, e, {
                author: {
                    chessTitle: e.chess_title,
                    username: e.username,
                    url: u.a.generate("web_member_view", {
                        username: e.username
                    })
                },
                comments: Object(o.b)(e.comment_count),
                excerpt: e.body,
                isDraft: !e.is_live,
                image: e.image_url,
                time: o.a.relative(1e3 * e.create_date),
                views: Object(o.b)(e.view_count)
            })
        })
    }

    function setBlogToHeadline(e) {
        return e && (e.isHeadline = !0), e
    }

    function configureFilters() {
        var e = l.a[s.f.FILTERS],
            t = [{
                value: "create_date",
                label: c.c.mostRecent
            }, {
                value: "view_count",
                label: c.c.mostViews
            }],
            n = {
                onChange: function onChange(e) {
                    var t = e.value,
                        n = window.location.origin,
                        o = window.location.pathname,
                        i = Object(a.a)(window.location.search),
                        s = i.findIndex(function(e) {
                            return "orderBy" === e[0]
                        });
                    if (s >= 0) {
                        i[s] = ["orderBy", t];
                        var c = Object(r.a)(i).join("&");
                        window.location.href = "".concat(n).concat(o, "?").concat(c)
                    } else window.location.href = "".concat(n).concat(o, "?orderBy=").concat(t)
                },
                options: t,
                value: t[0]
            },
            o = document.getElementById(c.a.ROOT_MEMBER),
            u = o ? o.getAttribute("data-order-by") : "";
        if (u) {
            var d = t.find(function(e) {
                return e.value === u
            });
            d && (n.value = d)
        }
        l.a[s.f.FILTERS] = Object(i.b)(e, n)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1),
        a = n(4),
        o = n(45),
        i = n(6),
        s = n(16),
        c = n(2),
        l = function makePremove(e, t) {
            var n = a.a.getJCEMove(e, t);
            return null === n ? (r.b.add(e.history, r.a.ILLEGAL_MOVE), e) : c.a.isHead(e.jce._lines(), e.tree.selected) || e.settings.analysis ? e.settings.analysis ? void 0 : (o.a.premove(e, n) ? (r.b.add(e.history, r.a.PREMOVE), i.a.updateState(e)) : r.b.add(e.history, r.a.ILLEGAL_MOVE), e) : Object(s.a)(e, c.a.getHeadIds(e.jce._lines(), e.tree.selected.line))
        },
        u = function cancelPremoves(e) {
            return o.a.cancelPremoves(e) && (r.b.add(e.history, r.a.CANCEL_PREMOVES), i.a.updateState(e)), e
        },
        d = function consumePremove(e) {
            return e.premoves.length ? (o.a.consumePremove(e) ? (r.b.add(e.history, r.a.MAKE_MOVE), i.a.updateState(e)) : u(e), e) : e
        };
    n.d(t, "c", function() {
        return l
    }), n.d(t, "a", function() {
        return u
    }), n.d(t, "b", function() {
        return d
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return parseArticlesResponse
    }), n.d(t, "b", function() {
        return parseAuthorsResponse
    }), n.d(t, "c", function() {
        return setArticleToHeadline
    });
    var r = n(7),
        a = n(19);
    n(88);

    function parseArticlesResponse(e) {
        var t = window.location.pathname.indexOf("articles") > -1;
        return e.length ? e.map(function(e) {
            return Object.assign({}, e, {
                author: {
                    chessTitle: e.chess_title,
                    username: e.username,
                    url: r.a.generate(t ? "web_article_member" : "web_member_view", {
                        username: e.username
                    })
                },
                time: a.a.relative(1e3 * e.create_date),
                comments: Object(a.b)(e.comment_count),
                views: Object(a.b)(e.view_count),
                excerpt: e.body,
                image: e.image_url
            })
        }) : e
    }

    function parseAuthorsResponse(e) {
        return e.length ? e.map(function(e) {
            return Object.assign({}, e, {
                followers: Object(a.b)(e.followers)
            })
        }) : e
    }

    function setArticleToHeadline(e) {
        return e && (e.isHeadline = !0), e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }), n.d(t, "b", function() {
        return i
    }), n.d(t, "c", function() {
        return s
    });
    var r = n(15),
        a = n(32),
        o = function hasTreeLines(e) {
            return Boolean(e && e.tree && e.tree.lines)
        },
        i = function normalizePgnAnnotation(e) {
            return Object.keys(r.c).forEach(function(t) {
                e = e.replace(new RegExp("\\".concat(t, "\\b"), "gm"), Object(a.v)(t))
            }), e
        },
        s = function updateScrollPosition(e) {
            var t = e.moveIds,
                n = e.moveList,
                r = e.scrollEl;
            if (t && n && r) {
                var a = n.getComponentRefByLineMove(t.line, t.move);
                if (a) {
                    var o = r.getBoundingClientRect(),
                        i = a.$el ? a.$el.getBoundingClientRect() : a.getBoundingClientRect(),
                        s = r.scrollTop,
                        c = o.top + Math.floor(o.height / 2) - i.top;
                    r.scrollTop = s - c
                }
            }
        }
}, function(e, t, n) {
    "use strict";
    var r = n(80),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(81),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    e.exports = n(26)(3)
}, function(e, t, n) {
    e.exports = {
        component: "section-container-component",
        visible: "section-container-visible"
    }
}, function(e, t, n) {
    e.exports = {
        component: "modal-content-component"
    }
}, , function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, , , , function(e, t) {
    var n = Array.isArray;
    e.exports = n
}, , , function(e, t, n) {
    "use strict";
    var r = n(9),
        a = n(0),
        o = n(33),
        i = n(18),
        s = {
            name: "pagination-button",
            components: {
                FormButton: o.a,
                IconFont: i.a
            },
            props: {
                content: {
                    type: String,
                    required: !1
                },
                isActive: {
                    type: Boolean,
                    default: !1
                },
                icon: {
                    type: String,
                    required: !1
                },
                isDisabled: {
                    type: Boolean,
                    default: !1
                }
            }
        },
        c = n(204),
        l = n(5);
    var u = Object(l.a)(s, function() {
            var e, t, n = this,
                r = n.$createElement,
                a = n._self._c || r;
            return a("form-button", {
                class: [n.$style.component, (e = {}, e[n.$style.active] = n.isActive, e), (t = {}, t[n.$style.disabled] = n.isDisabled, t)],
                attrs: {
                    rel: "nofollow",
                    "aria-selected": n.isActive
                }
            }, [n.icon ? a("icon-font", {
                class: n.$style.icon,
                attrs: {
                    name: n.icon
                }
            }) : n._e(), n._v(" "), n.content ? a("span", {
                class: n.$style.content
            }, [n._v("\n    " + n._s(n.content) + "\n  ")]) : n._e()], 1)
        }, [], !1, function injectStyles(e) {
            this.$style = c.default.locals || c.default
        }, null, null).exports,
        d = {
            name: "pagination-spread"
        },
        p = n(205);
    var m = {
            name: "pagination",
            components: {
                PaginationButton: u,
                PaginationSpread: Object(l.a)(d, function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        class: this.$style.component
                    }, [t("span", {
                        class: this.$style.content
                    }, [this._v("...")])])
                }, [], !1, function pagination_spread_injectStyles(e) {
                    this.$style = p.default.locals || p.default
                }, null, null).exports
            },
            props: {
                changePage: {
                    type: Function,
                    required: !0
                },
                currentPage: {
                    type: Number,
                    required: !0
                },
                hasMoreProp: {
                    type: Boolean
                },
                morePages: {
                    type: Boolean,
                    default: !1
                },
                totalPages: {
                    type: Number,
                    default: 0
                },
                scrollTo: {
                    type: String
                },
                shouldHide: {
                    type: Boolean,
                    default: !1
                },
                showFirstLastButtons: {
                    type: Boolean,
                    default: !0
                },
                showTopButton: {
                    type: Boolean,
                    default: !1
                },
                updateURL: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function data() {
                return {
                    tabLimit: 4
                }
            },
            computed: {
                firstPage: function firstPage() {
                    return 1 === this.currentPage
                },
                lastPage: function lastPage() {
                    return this.hasMoreProp ? !1 === this.morePages : this.currentPage === this.totalPages
                },
                lastPageIsHidden: function lastPageIsHidden() {
                    return !this.pages.includes(this.totalPages)
                },
                pages: function pages() {
                    if (this.totalPages > 1) return this.generatePagesFromTotalPages();
                    if (this.hasMoreProp && this.morePages && 1 === this.currentPage) return [1, 2];
                    if (this.hasMoreProp && this.morePages && this.currentPage > 1) {
                        for (var pages = [], e = this.currentPage + 1; e > 0; e -= 1) pages.push(e);
                        return pages.reverse()
                    }
                    if (this.hasMoreProp && !this.morePages) {
                        for (var t = [], n = this.currentPage; n > 0; n -= 1) t.push(n);
                        return t.reverse()
                    }
                },
                showLowerEllipsis: function showLowerEllipsis() {
                    return this.currentPage > 1 && -1 === this.pages.indexOf(1) && !this.hasMoreProp
                },
                showPaginator: function showPaginator() {
                    return !this.shouldHide && (!(!this.hasMoreProp && this.totalPages <= 1) && !(this.hasMoreProp && !this.morePages && 1 === this.currentPage))
                },
                showUpperEllipsis: function showUpperEllipsis() {
                    return this.lastPageIsHidden && !this.hasMoreProp
                }
            },
            methods: {
                serialize: function serialize(e) {
                    return Object.keys(e).map(function(t) {
                        return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t]))
                    }).join("&")
                },
                isSamePage: function isSamePage(e) {
                    return this.currentPage === e
                },
                generatePagesFromTotalPages: function generatePagesFromTotalPages() {
                    var e = [];
                    if (this.totalPages <= this.tabLimit) {
                        for (var t = 1; t <= this.totalPages; t += 1) e.push(t);
                        return e
                    }
                    if (this.currentPage + this.tabLimit <= this.totalPages) {
                        for (var n = this.currentPage; n < this.currentPage + this.tabLimit; n += 1) e.push(n);
                        return e
                    }
                    for (var r = this.totalPages; r > this.totalPages - 4; r -= 1) e.push(r);
                    return e.reverse()
                },
                goToPageNumber: function goToPageNumber(e) {
                    return this.isSamePage(e) ? a.a.trans("Current Page, Page %pageNumber%", {
                        "%pageNumber%": e
                    }) : a.a.trans("Page %pageNumber%", {
                        "%pageNumber%": e
                    })
                },
                goToTop: function goToTop() {
                    var e = document.getElementById(this.scrollTo);
                    e || (e = document.getElementById(r.f.SCROLL_TOP_ANCHOR)), e.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }
            }
        },
        f = n(206);
    var h = Object(l.a)(m, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
            class: e.$style.component
        }, [e.showTopButton ? n("pagination-button", {
            class: e.$style.top,
            attrs: {
                icon: "chevron-up",
                "aria-label": e.$trans("Back to Top"),
                content: e.$trans("Top")
            },
            nativeOn: {
                click: function(t) {
                    return e.goToTop()
                }
            }
        }) : e._e(), e._v(" "), e.showPaginator ? n("nav", {
            class: e.$style.pagination
        }, [e.firstPage || e.hasMoreProp || !e.showFirstLastButtons ? e._e() : n("pagination-button", {
            class: e.$style.first,
            attrs: {
                "aria-label": e.$trans("First Page"),
                content: e.$trans("First")
            },
            nativeOn: {
                click: function(t) {
                    return e.changePage(1)
                }
            }
        }), e._v(" "), n("pagination-button", {
            class: e.$style.prev,
            attrs: {
                icon: "chevron-left",
                "aria-label": e.$trans("Previous Page"),
                "is-disabled": e.firstPage
            },
            nativeOn: {
                click: function(t) {
                    return e.changePage(e.currentPage - 1)
                }
            }
        }), e._v(" "), e.showLowerEllipsis ? n("pagination-spread") : e._e(), e._v(" "), e._l(e.pages, function(t, r) {
            return n("pagination-button", {
                key: r,
                attrs: {
                    "aria-label": e.goToPageNumber(t),
                    content: t.toString(),
                    "is-active": e.isSamePage(t),
                    "is-disabled": e.isSamePage(t)
                },
                nativeOn: {
                    click: function(n) {
                        return e.changePage(t)
                    }
                }
            })
        }), e._v(" "), e.showUpperEllipsis ? n("pagination-spread") : e._e(), e._v(" "), n("pagination-button", {
            class: e.$style.next,
            attrs: {
                icon: "chevron-right",
                "aria-label": e.$trans("Next Page"),
                "is-disabled": e.lastPage
            },
            nativeOn: {
                click: function(t) {
                    return e.changePage(e.currentPage + 1)
                }
            }
        }), e._v(" "), e.lastPage || e.hasMoreProp || !e.showFirstLastButtons ? e._e() : n("pagination-button", {
            class: e.$style.last,
            attrs: {
                "aria-label": e.$trans("Last Page"),
                content: e.$trans("Last")
            },
            nativeOn: {
                click: function(t) {
                    return e.changePage(-1)
                }
            }
        })], 2) : e._e()], 1)
    }, [], !1, function pagination_injectStyles(e) {
        this.$style = f.default.locals || f.default
    }, null, null);
    t.a = h.exports
}, function(e, t, n) {
    "use strict";
    var r = n(10);
    t.a = {
        methods: {
            $trans: r.b,
            $transChoice: r.c
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(18),
        a = n(35),
        o = {
            name: "icon-button",
            components: {
                IconFont: r.a
            },
            directives: {
                Tooltip: a.a
            },
            props: {
                action: Function,
                btnColor: String,
                iconName: {
                    type: String,
                    required: !0
                },
                label: {
                    type: String,
                    required: !0
                }
            },
            methods: {
                onClick: function onClick(e) {
                    this.action ? this.action(e) : this.$emit("click", e)
                }
            }
        },
        i = n(247),
        s = n(5);
    var c = Object(s.a)(o, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("button", {
            directives: [{
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                    content: e.label,
                    delay: 100
                },
                expression: "{\n    content: label,\n    delay: 100\n  }"
            }],
            class: [e.$style.link, e.$style[e.btnColor]],
            attrs: {
                type: "button",
                "aria-label": e.label
            },
            on: {
                click: e.onClick
            }
        }, [n("icon-font", {
            class: [e.$style.icon],
            attrs: {
                theme: "primary",
                name: e.iconName
            }
        })], 1)
    }, [], !1, function injectStyles(e) {
        this.$style = i.default.locals || i.default
    }, null, null);
    t.a = c.exports
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var r = n(23),
        a = function registerModules(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t];
                r.default.state && r.default.state[t] || r.default.registerModule(t, n)
            })
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
        return searchUsername
    }), n.d(t, "c", function() {
        return reportUser
    }), n.d(t, "b", function() {
        return fetchUserPopoverData
    }), n.d(t, "a", function() {
        return fetchReportReasonsData
    });
    var r = n(12),
        a = n(11),
        o = n(7);

    function searchUsername(e) {
        return a.default.get(r.o.usernameSearch({
            query: e
        }))
    }

    function reportUser(e) {
        return a.default.post(o.a.generate(r.e.REPORT_USER), {
            abuser_username: e.username,
            reason_id: e.picked,
            other_reason: e.otherReason,
            block_user: e.blockUser,
            reporter_url: window.location.href
        })
    }

    function fetchUserPopoverData(e) {
        return new Promise(function(t, n) {
            e && "null" !== e || n(new Error("Username was not given."));
            var i = o.a.generate(r.e.USER_POPUP, {
                username: e
            });
            t(a.default.get(i))
        })
    }

    function fetchReportReasonsData() {
        var e = o.a.generate("web_user_callback_report_reasons");
        return a.default.get(e)
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-input-component",
        darkMode: "form-input-darkMode",
        input: "form-input-input",
        textarea: "form-input-textarea",
        wrapper: "form-input-wrapper",
        icon: "form-input-icon",
        left: "form-input-left",
        right: "form-input-right",
        large: "form-input-large"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-select-component",
        darkMode: "form-select-darkMode",
        icon: "form-select-icon",
        large: "form-select-large"
    }
}, , function(e, t, n) {
    e.exports = {
        component: "pagination-button-component",
        icon: "pagination-button-icon",
        content: "pagination-button-content",
        disabled: "pagination-button-disabled",
        active: "pagination-button-active"
    }
}, function(e, t, n) {
    e.exports = {
        component: "pagination-spread-component",
        content: "pagination-spread-content"
    }
}, function(e, t, n) {
    e.exports = {
        component: "pagination-component",
        wrapper: "pagination-wrapper",
        pagination: "pagination-pagination",
        first: "pagination-first",
        prev: "pagination-prev",
        last: "pagination-last",
        next: "pagination-next",
        top: "pagination-top"
    }
}, function(e, t) {
    var n = Object.prototype;
    e.exports = function isPrototype(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || n)
    }
}, function(e, t, n) {
    var r = n(85),
        a = n(55),
        o = "[object AsyncFunction]",
        i = "[object Function]",
        s = "[object GeneratorFunction]",
        c = "[object Proxy]";
    e.exports = function isFunction(e) {
        if (!a(e)) return !1;
        var t = r(e);
        return t == i || t == s || t == o || t == c
    }
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "section-title",
            components: {
                IconFont: n(18).a
            },
            props: {
                icon: {
                    type: String,
                    required: !1
                }
            },
            methods: {
                close: function close(e) {
                    this.$emit("close", e)
                }
            }
        },
        a = n(239),
        o = n(5);
    var i = Object(o.a)(r, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
            class: e.$style.component
        }, [e.icon ? n("div", {
            staticClass: "icon-font-chess",
            class: [e.$style["main-icon"], e.icon]
        }) : e._e(), e._v(" "), n("span", {
            class: e.$style.name
        }, [e._t("default")], 2), e._v(" "), n("div", {
            staticClass: "icon-font-chess x",
            class: e.$style.icon,
            on: {
                click: e.close
            }
        })])
    }, [], !1, function injectStyles(e) {
        this.$style = a.default.locals || a.default
    }, null, null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }), n.d(t, "b", function() {
        return a
    }), n.d(t, "c", function() {
        return o
    }), n.d(t, "d", function() {
        return i
    }), n.d(t, "e", function() {
        return s
    }), n.d(t, "f", function() {
        return c
    });
    n(7);
    var r = {
            speedChessChampionshipUrl: "data-speed-chess-championship-url",
            challengeUser: "data-challenge-user",
            loginAndGoRoute: "data-route-login-and-go",
            registerRoute: "data-route-register",
            routes: "data-routes",
            showChallengeUser: "data-show-challenge-user"
        },
        a = {
            CLOSE: "close",
            COLLAPSED: "collapsed",
            HOVER: "hover",
            NO_REDIRECT: "noredirect",
            OPEN: "open",
            WIDE: "wide"
        },
        o = {
            CLOSE_SHAREABLE_URL_MODAL: "CLOSE_SHAREABLE_URL_MODAL",
            OPEN_SHAREABLE_URL_MODAL: "OPEN_SHAREABLE_URL_MODAL",
            SEND_NEW_GAME_SEEK: "SEND_NEW_GAME_SEEK",
            SEND_NEW_GAME_SEEK_SUCCESS: "SEND_NEW_GAME_SEEK_SUCCESS",
            SHOW_NEW_GAME_MODAL: "SHOW_NEW_GAME_MODAL",
            START_DIRECT_CHAT: "START_DIRECT_CHAT"
        },
        i = {
            MOBILE_WIDTH: 960,
            TOOLTIP_OFFSET: 8
        },
        s = {
            COLLAPSED: 50,
            DEFAULT: 145,
            MOBILE: 0,
            WIDE: 180
        },
        c = {
            FRIEND_RESULTS: ".svelte-friend-result",
            LESSONS_CONTAINER: ".lessons-container",
            LOGOUT_FORM: ".form.logout",
            LOGOUT_TRIGGER: "#sb .logout",
            MAIN_NAV: "#sb",
            MAIN_NAV_CONNECT_LINK: "#sb .link.connect",
            MAIN_NAV_HOME_LINK: "#sb .link.home",
            MAIN_NAV_LINKS: "#sb .menu > .link",
            MAIN_NAV_LOGIN_LINK: "#sb .login",
            MAIN_NAV_PLAY_LINK: "#sb .link.play",
            MAIN_NAV_REGISTER_LINK: ".signup.register",
            MAIN_TOP_NAV: "#sb .menu.top",
            MAIN_TOP_NAV_LINKS: "#sb .menu.top > .link",
            TOOLTIP: ".svelte-tooltip",
            TOOLTIP_TRIGGER: "[data-tooltip-content]"
        }
}, , function(e, t) {
    e.exports = function identity(e) {
        return e
    }
}, function(e, t, n) {
    var r = n(359),
        a = n(362);
    e.exports = function getNative(e, t) {
        var n = a(e, t);
        return r(n) ? n : void 0
    }
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "form-dropdown",
            components: {
                IconFont: n(18).a
            },
            props: {
                advancedOptionsClass: {
                    type: Boolean,
                    default: !1
                },
                alignDropdown: {
                    type: String,
                    default: "right"
                },
                colorIcons: {
                    type: Boolean,
                    default: !1
                },
                countryFlag: {
                    type: Number,
                    default: 2
                },
                iconButton: {
                    type: String,
                    default: ""
                },
                labelKey: {
                    type: String,
                    default: "label"
                },
                onChange: {
                    type: Function,
                    required: !1
                },
                options: {
                    type: Array,
                    required: !0
                },
                overlay: {
                    type: Boolean,
                    default: !1
                },
                shortTitle: {
                    type: Boolean,
                    default: !1
                },
                shortTitleKey: {
                    type: String,
                    default: "shortTitle"
                },
                value: {
                    type: Object,
                    required: !0
                },
                valueKey: {
                    type: String,
                    default: "value"
                }
            },
            data: function data() {
                return {
                    showOptions: !1
                }
            },
            methods: {
                setSelectedOption: function setSelectedOption(e) {
                    this.toggleOptions(), this.value !== e && (this.$emit("input", e), this.onChange && this.onChange(e))
                },
                toggleOptions: function toggleOptions() {
                    this.showOptions = !this.showOptions
                }
            }
        },
        a = n(107),
        o = n(5);
    var i = Object(o.a)(r, function() {
        var e, t, n, r = this,
            a = r.$createElement,
            o = r._self._c || a;
        return o("div", {
            class: r.$style.component
        }, [r.iconButton ? o("div", {
            class: (e = {}, e[r.$style["mobile-button"]] = r.iconButton, e),
            on: {
                click: function(e) {
                    return r.toggleOptions()
                }
            }
        }, [o("icon-font", {
            class: r.$style.filter,
            attrs: {
                name: r.iconButton
            }
        })], 1) : r._e(), r._v(" "), o("div", {
            class: [r.$style.select, (t = {}, t[r.$style["desktop-button"]] = r.iconButton, t)],
            on: {
                click: function(e) {
                    return r.toggleOptions()
                }
            }
        }, [r.value.icon ? o("icon-font", {
            class: r.$style.icon,
            attrs: {
                theme: "primary",
                name: r.value.icon
            }
        }) : r._e(), r._v(" "), r.value.countryId ? o("div", {
            class: [r.$style.flag, "country-flags-component country-flags-large country-" + r.value.countryId]
        }) : r._e(), r._v(" "), o("span", {
            class: r.$style.value
        }, [r._v(r._s(r.value[r.labelKey]) + "‎")]), r._v(" "), o("icon-font", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: r.showOptions,
                expression: "showOptions"
            }],
            class: r.$style.chevron,
            attrs: {
                name: "chevron-up"
            }
        }), r._v(" "), o("icon-font", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !r.showOptions,
                expression: "!showOptions"
            }],
            class: r.$style.chevron,
            attrs: {
                name: "chevron-bottom"
            }
        })], 1), r._v(" "), r.overlay ? o("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: r.showOptions,
                expression: "showOptions"
            }],
            class: r.$style.overlay,
            on: {
                click: function(e) {
                    return r.toggleOptions()
                }
            }
        }) : r._e(), r._v(" "), o("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: r.showOptions,
                expression: "showOptions"
            }],
            class: [r.$style.options, (n = {}, n[r.$style["advanced-options"]] = r.advancedOptionsClass, n), [r.$style[r.alignDropdown]]]
        }, r._l(r.options, function(e) {
            var t, n;
            return e.separator ? e.separator ? o("span", {
                class: r.$style.separator
            }) : r._e() : o("span", {
                key: e[r.valueKey],
                class: [r.$style.option, (t = {}, t[r.$style.selected] = e === r.value, t)],
                on: {
                    click: function(t) {
                        return r.setSelectedOption(e)
                    }
                }
            }, [e.icon && !e.noIconInsideDropdown ? o("icon-font", {
                class: [r.$style.icon, (n = {}, n[r.$style[e.icon]] = r.colorIcons, n)],
                attrs: {
                    theme: "primary",
                    name: e.icon
                }
            }) : r._e(), r._v(" "), e.countryId ? o("div", {
                class: [r.$style.flag, "country-flags-component country-" + e.countryId]
            }) : r._e(), r._v(" "), r.shortTitle ? o("span", {
                class: r.$style["short-title"]
            }, [r._v("\n        " + r._s(e[r.shortTitleKey]) + "\n      ")]) : r._e(), r._v(" "), o("span", {
                class: r.$style.label
            }, [r._v("\n        " + r._s(e[r.labelKey]) + "\n      ")])], 1)
        }), 0)])
    }, [], !1, function injectStyles(e) {
        this.$style = a.default.locals || a.default
    }, null, null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }), n.d(t, "b", function() {
        return a
    });
    var r = function isValidEmail(e) {
            return /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(e)
        },
        a = function isValidUsername(e) {
            return "string" == typeof e && e.length >= 3 && e.length <= 20 && /^[0-9A-Z\u017F\u212A]+([\x2D_][0-9A-Z\u017F\u212A]+)*$/i.test(e)
        }
}, , function(e, t, n) {
    "use strict";
    var r = n(110),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(111),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    var r = n(349),
        a = n(350),
        o = n(351),
        i = n(352),
        s = n(353);

    function ListCache(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    ListCache.prototype.clear = r, ListCache.prototype.delete = a, ListCache.prototype.get = o, ListCache.prototype.has = i, ListCache.prototype.set = s, e.exports = ListCache
}, function(e, t, n) {
    var r = n(145);
    e.exports = function assocIndexOf(e, t) {
        for (var n = e.length; n--;)
            if (r(e[n][0], t)) return n;
        return -1
    }
}, function(e, t) {
    e.exports = function eq(e, t) {
        return e === t || e != e && t != t
    }
}, function(e, t, n) {
    var r = n(137)(Object, "create");
    e.exports = r
}, function(e, t, n) {
    var r = n(372);
    e.exports = function getMapData(e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-textarea-component",
        darkMode: "form-textarea-darkMode",
        autosize: "form-textarea-autosize",
        vertical: "form-textarea-vertical",
        "full-width": "form-textarea-full-width"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-checkbox-component",
        checkbox: "form-checkbox-checkbox",
        label: "form-checkbox-label"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(82),
        a = n.n(r),
        o = n(309),
        i = n.n(o).a;
    t.a = new class logger_AmplitudeLogger {
        init() {
            if (this.initialized) return !0;
            var e = window.context || {};
            return a.a.getInstance().init(e.amplitudeKey, null, {
                includeUtm: !0,
                includeReferrer: !0,
                includeGclid: !0
            }), null != e && null != e.user && a.a.getInstance().setUserId(e.user.id), this.initialized = !0, !0
        }
        logEvent(e, t, n, r) {
            var o = this,
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            this.init() ? (this.setUserProperties(n), this.incrementUserProperties(r), a.a.getInstance().logEvent(e, t || {})) : i < 3 && setTimeout(function() {
                o.logEvent(e, t, n, r, i + 1)
            }, 1e3)
        }
        setUserProperties(e) {
            this.init() && null != e && a.a.getInstance().setUserProperties(e)
        }
        incrementUserProperties(e) {
            if (this.init() && null != e) {
                var t = new a.a.Identify;
                i(e, function(e, n) {
                    t.add(n, e)
                }), a.a.getInstance().identify(t)
            }
        }
        logSocialShare() {
            this.logEvent("Social - SocialShare", null, null, {
                numSocialShares: 1
            })
        }
        logOnboardChangeAvatar(e) {
            this.logEvent("Onboard - Avatar", null, {
                hasAvatar: e
            })
        }
        logOnboardChangeTheme(e) {
            this.logEvent("Onboard - Theme", null, {
                themeName: e
            })
        }
        logAccountClose(e) {
            this.logEvent("User - AccountClose", e)
        }
        logStartCheckout(e) {
            var t = e.plan,
                n = e.version,
                r = e.userProps;
            this.logEvent("Upgrade - Checkout", {
                plan: t,
                version: n
            }, r)
        }
        logSubmitPayment(e) {
            this.logEvent("Upgrade - SubmitPayment", {
                auth: e
            })
        }
        logAccountDowngrade(e, t) {
            this.logEvent("Upgrade - Cancel", e, t)
        }
        logAccountDowngradeTrial(e, t) {
            this.logEvent("Upgrade - CancelTrial", e, t)
        }
        logVideoComplete(e, t, n, r) {
            this.logEvent("Videos - Complete", {
                skillLevels: e,
                category: t,
                title: n,
                author: r
            })
        }
        logVideoStart(e, t, n, r) {
            this.logEvent("Videos - Start", {
                skillLevels: e,
                category: t,
                title: n,
                author: r
            }, null, {
                numVideos: 1
            })
        }
    }
}, function(e, t) {
    var n = 9007199254740991;
    e.exports = function isLength(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
        t.a = n
    }).call(this, n(304))
}, , , function(e, t, n) {
    e.exports = {
        component: "loader-three-bounce-component",
        circle: "loader-three-bounce-circle",
        dot: "loader-three-bounce-dot",
        animate: "loader-three-bounce-animate",
        bounce1: "loader-three-bounce-bounce1",
        bounce2: "loader-three-bounce-bounce2"
    }
}, , function(e, t, n) {
    e.exports = {
        component: "section-title-dismissible-component",
        icon: "section-title-dismissible-icon",
        "main-icon": "section-title-dismissible-main-icon",
        name: "section-title-dismissible-name"
    }
}, function(e, t, n) {
    e.exports = {
        component: "modal-chessboard-container-component",
        "chessboard-mirror": "modal-chessboard-container-chessboard-mirror",
        "no-pointer-events": "modal-chessboard-container-no-pointer-events",
        bg: "modal-chessboard-container-bg",
        transition: "modal-chessboard-container-transition",
        enter: "modal-chessboard-container-enter",
        leave: "modal-chessboard-container-leave",
        "right-to-left": "modal-chessboard-container-right-to-left"
    }
}, function(e, t, n) {
    e.exports = {
        component: "adyen-card-deprecated-component",
        "text-center": "adyen-card-deprecated-text-center",
        label: "adyen-card-deprecated-label",
        loader: "adyen-card-deprecated-loader",
        input: "adyen-card-deprecated-input",
        "input-error": "adyen-card-deprecated-input-error",
        "new-card": "adyen-card-deprecated-new-card",
        button: "adyen-card-deprecated-button",
        "card-detail-row": "adyen-card-deprecated-card-detail-row",
        "saved-card": "adyen-card-deprecated-saved-card",
        "saved-expiration": "adyen-card-deprecated-saved-expiration",
        "saved-change": "adyen-card-deprecated-saved-change"
    }
}, function(e, t, n) {
    e.exports = {
        component: "adyen-card-new-component",
        "text-center": "adyen-card-new-text-center",
        label: "adyen-card-new-label",
        loader: "adyen-card-new-loader",
        input: "adyen-card-new-input",
        "input-error": "adyen-card-new-input-error",
        "new-card": "adyen-card-new-new-card",
        button: "adyen-card-new-button",
        "card-detail-row": "adyen-card-new-card-detail-row",
        "saved-card": "adyen-card-new-saved-card",
        "saved-expiration": "adyen-card-new-saved-expiration",
        "saved-change": "adyen-card-new-saved-change"
    }
}, function(e, t, n) {
    e.exports = {
        component: "paypal-component",
        "text-center": "paypal-text-center",
        button: "paypal-button"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-membership-icon-component",
        "level-30": "user-membership-icon-level-30",
        gold: "user-membership-icon-gold",
        "level-40": "user-membership-icon-level-40",
        platinum: "user-membership-icon-platinum",
        "level-50": "user-membership-icon-level-50",
        diamond: "user-membership-icon-diamond",
        "level-90": "user-membership-icon-level-90",
        staff: "user-membership-icon-staff",
        "level-80": "user-membership-icon-level-80",
        mod: "user-membership-icon-mod",
        moderator: "user-membership-icon-moderator",
        "level-5": "user-membership-icon-level-5",
        "level-8": "user-membership-icon-level-8",
        cheater: "user-membership-icon-cheater",
        unspecifiedClosed: "user-membership-icon-unspecifiedClosed",
        "level-6": "user-membership-icon-level-6",
        abuser: "user-membership-icon-abuser",
        "level-7": "user-membership-icon-level-7",
        voluntarilyClosed: "user-membership-icon-voluntarilyClosed",
        "level-10": "user-membership-icon-level-10",
        basic: "user-membership-icon-basic",
        level: "user-membership-icon-level",
        middle: "user-membership-icon-middle",
        large: "user-membership-icon-large",
        responsive: "user-membership-icon-responsive",
        "x-large": "user-membership-icon-x-large"
    }
}, function(e, t, n) {
    e.exports = {
        modal: "modal-gift-membership-modal",
        header: "modal-gift-membership-header",
        title: "modal-gift-membership-title",
        close: "modal-gift-membership-close",
        icon: "modal-gift-membership-icon",
        plans: "modal-gift-membership-plans",
        plan: "modal-gift-membership-plan",
        paymentinfo: "modal-gift-membership-paymentinfo",
        methods: "modal-gift-membership-methods",
        paymentmethods: "modal-gift-membership-paymentmethods",
        methodicon: "modal-gift-membership-methodicon",
        paypal: "modal-gift-membership-paypal",
        card: "modal-gift-membership-card",
        anothercard: "modal-gift-membership-anothercard",
        info: "modal-gift-membership-info",
        terms: "modal-gift-membership-terms",
        submit: "modal-gift-membership-submit",
        order: "modal-gift-membership-order",
        promo: "modal-gift-membership-promo",
        message: "modal-gift-membership-message",
        benefits: "modal-gift-membership-benefits",
        benefit: "modal-gift-membership-benefit",
        pict: "modal-gift-membership-pict",
        puzzle: "modal-gift-membership-puzzle",
        lesson: "modal-gift-membership-lesson",
        video: "modal-gift-membership-video",
        analysis: "modal-gift-membership-analysis",
        explorer: "modal-gift-membership-explorer",
        noads: "modal-gift-membership-noads",
        "payment-processing": "modal-gift-membership-payment-processing",
        "receipt-button": "modal-gift-membership-receipt-button"
    }
}, function(e, t, n) {
    e.exports = {
        link: "icon-button-link",
        icon: "icon-button-icon",
        label: "icon-button-label",
        blue: "icon-button-blue",
        grey: "icon-button-grey",
        red: "icon-button-red"
    }
}, function(e, t, n) {
    e.exports = {
        link: "labeled-icon-button-link",
        icon: "labeled-icon-button-icon",
        label: "labeled-icon-button-label",
        blue: "labeled-icon-button-blue",
        grey: "labeled-icon-button-grey",
        red: "labeled-icon-button-red"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(39),
        a = {
            name: "form-select",
            components: {
                IconFont: n(18).a
            },
            mixins: [r.a],
            props: {
                ariaLabel: {
                    type: String,
                    required: !1
                },
                emptyOption: {
                    type: String
                },
                icon: {
                    type: String,
                    default: "caret-down"
                },
                id: {
                    type: String,
                    required: !1
                },
                labelKey: {
                    type: String,
                    default: "label"
                },
                name: {
                    type: String,
                    required: !1
                },
                onChange: {
                    type: Function,
                    required: !1
                },
                options: {
                    type: Array,
                    required: !0
                },
                placeholderText: {
                    type: String,
                    required: !1
                },
                size: {
                    type: String,
                    required: !1
                },
                value: {
                    type: [String, Number],
                    required: !1
                },
                valueKey: {
                    type: String,
                    default: "value"
                }
            },
            methods: {
                getLabel: function getLabel(e) {
                    return this.labelKey ? e[this.labelKey] : e
                },
                getValue: function getValue(e) {
                    return this.valueKey ? e[this.valueKey] : e
                },
                setSelectedOption: function setSelectedOption(e) {
                    this.$emit("input", e), this.onChange && this.onChange()
                }
            }
        },
        o = n(202),
        i = n(5);
    var s = Object(i.a)(a, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
            class: e.componentClasses()
        }, [n("select", {
            class: e.$style[e.size],
            attrs: {
                "aria-label": e.ariaLabel,
                id: e.id,
                name: e.name
            },
            on: {
                change: function(t) {
                    return e.setSelectedOption(t.target.value)
                }
            }
        }, [e.placeholderText ? n("option", {
            attrs: {
                disabled: "",
                hidden: "",
                selected: "",
                value: ""
            }
        }, [e._v("\n      " + e._s(e.placeholderText) + "\n    ")]) : e._e(), e._v(" "), e.emptyOption ? n("option", {
            attrs: {
                selected: "",
                value: ""
            }
        }, [e._v("\n      " + e._s(e.emptyOption) + "\n    ")]) : e._e(), e._v(" "), e._l(e.options, function(t, r) {
            return n("option", {
                key: r,
                attrs: {
                    disabled: t.disabled,
                    hidden: t.hidden
                },
                domProps: {
                    selected: e.getValue(t) === e.value,
                    value: e.getValue(t)
                }
            }, [e._v(e._s(e.getLabel(t)) + "\n    ")])
        })], 2), e._v(" "), n("icon-font", {
            class: e.$style.icon,
            attrs: {
                theme: "primary",
                name: e.icon
            }
        })], 1)
    }, [], !1, function injectStyles(e) {
        this.$style = o.default.locals || o.default
    }, null, null);
    t.a = s.exports
}, , function(e, t, n) {
    "use strict";
    var r = n(35),
        a = n(12),
        o = {
            name: "user-chess-title",
            directives: {
                Tooltip: r.a
            },
            props: {
                title: {
                    type: String,
                    required: !0
                },
                url: {
                    type: String,
                    required: !1
                }
            },
            data: function data() {
                return {
                    fullTitle: a.h[this.title]
                }
            },
            computed: {
                isLink: function isLink() {
                    return Boolean(this.url)
                }
            }
        },
        i = n(263),
        s = n(5);
    var c = Object(s.a)(o, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return e.isLink ? n("a", {
            directives: [{
                name: "tooltip",
                rawName: "v-tooltip",
                value: e.fullTitle,
                expression: "fullTitle"
            }],
            class: e.$style.component,
            attrs: {
                href: e.url
            },
            domProps: {
                textContent: e._s(e.title)
            }
        }) : n("span", {
            directives: [{
                name: "tooltip",
                rawName: "v-tooltip",
                value: e.fullTitle,
                expression: "fullTitle"
            }],
            class: e.$style.component,
            domProps: {
                textContent: e._s(e.title)
            }
        })
    }, [], !1, function injectStyles(e) {
        this.$style = i.default.locals || i.default
    }, null, null);
    t.a = c.exports
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "user-username",
            props: {
                theme: {
                    type: String,
                    required: !0
                },
                isClickable: {
                    type: Boolean,
                    default: !0
                },
                url: {
                    type: String,
                    required: !1
                },
                username: {
                    type: String,
                    required: !0
                },
                openNewTab: {
                    type: Boolean,
                    required: !1
                }
            },
            computed: {
                getTargetIfClickable: function getTargetIfClickable() {
                    return this.openNewTab ? "_blank" : null
                },
                isLink: function isLink() {
                    return Boolean(this.url)
                }
            }
        },
        a = n(264),
        o = n(5);
    var i = Object(o.a)(r, function() {
        var e, t = this,
            n = t.$createElement;
        return (t._self._c || n)(t.isClickable ? "a" : "span", {
            tag: "component",
            class: [t.$style.component, t.$style[t.theme], (e = {}, e[t.$style.link] = t.isClickable, e)],
            attrs: {
                href: t.isClickable ? t.url : null,
                target: t.getTargetIfClickable
            },
            domProps: {
                textContent: t._s(t.username)
            }
        })
    }, [], !1, function injectStyles(e) {
        this.$style = a.default.locals || a.default
    }, null, null);
    t.a = i.exports
}, , function(e, t, n) {
    "use strict";
    var r = n(12),
        a = {
            name: "user-membership-icon",
            props: {
                membership: {
                    type: Number,
                    required: !0
                },
                size: {
                    type: String
                }
            },
            data: function data() {
                return {
                    membershipIcon: r.l[this.membership]
                }
            },
            computed: {
                isBasic: function isBasic() {
                    return this.membership === r.k.basic
                }
            }
        },
        o = n(245),
        i = n(5);
    var s = Object(i.a)(a, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return e.membershipIcon && !e.isBasic ? n("span", {
            class: [e.$style["level-" + e.membership], e.$style["" + e.size], e.$style.component]
        }) : e._e()
    }, [], !1, function injectStyles(e) {
        this.$style = o.default.locals || o.default
    }, null, null);
    t.a = s.exports
}, , , function(e, t, n) {
    (function(e) {
        var r = n(74),
            a = n(294),
            o = t && !t.nodeType && t,
            i = o && "object" == typeof e && e && !e.nodeType && e,
            s = i && i.exports === o ? r.Buffer : void 0,
            c = (s ? s.isBuffer : void 0) || a;
        e.exports = c
    }).call(this, n(113)(e))
}, , function(e, t, n) {
    e.exports = {
        component: "user-avatar-component",
        link: "user-avatar-link",
        status: "user-avatar-status",
        online: "user-avatar-online",
        live: "user-avatar-live",
        image: "user-avatar-image"
    }
}, function(e, t, n) {
    e.exports = {
        component: "account-not-activated-component",
        first: "account-not-activated-first",
        alert: "account-not-activated-alert"
    }
}, function(e, t, n) {
    e.exports = {
        component: "select-trophy-component",
        pagination: "select-trophy-pagination",
        top: "select-trophy-top",
        bottom: "select-trophy-bottom",
        "trophies-grid": "select-trophy-trophies-grid",
        trophy: "select-trophy-trophy",
        "trophy-image": "select-trophy-trophy-image",
        search: "select-trophy-search",
        "pagination-wrapper": "select-trophy-pagination-wrapper"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-error-component"
    }
}, function(e, t, n) {
    e.exports = {
        component: "send-trophy-component",
        change: "send-trophy-change",
        textarea: "send-trophy-textarea",
        left: "send-trophy-left",
        right: "send-trophy-right",
        error: "send-trophy-error",
        description: "send-trophy-description"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-chess-title-component"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-username-component",
        link: "user-username-link",
        gray: "user-username-gray",
        blue: "user-username-blue",
        current: "user-username-current",
        dark: "user-username-dark",
        "blue-with-dark-mode": "user-username-blue-with-dark-mode"
    }
}, function(e, t, n) {
    e.exports = {
        component: "sent-trophy-component",
        left: "sent-trophy-left",
        from: "sent-trophy-from",
        message: "sent-trophy-message",
        success: "sent-trophy-success",
        icon: "sent-trophy-icon"
    }
}, function(e, t, n) {
    e.exports = {
        modal: "trophy-popover-modal",
        section: "trophy-popover-section"
    }
}, function(e, t, n) {
    e.exports = {
        component: "admin-actions-component",
        separator: "admin-actions-separator"
    }
}, function(e, t, n) {
    e.exports = {
        link: "icon-link-link",
        icon: "icon-link-icon",
        label: "icon-link-label",
        blue: "icon-link-blue",
        grey: "icon-link-grey",
        red: "icon-link-red"
    }
}, function(e, t, n) {
    e.exports = {
        link: "labeled-icon-link-link",
        icon: "labeled-icon-link-icon",
        label: "labeled-icon-link-label",
        blue: "labeled-icon-link-blue",
        grey: "labeled-icon-link-grey",
        red: "labeled-icon-link-red"
    }
}, function(e, t, n) {
    e.exports = {
        component: "chat-options-dropdown-component",
        close: "chat-options-dropdown-close",
        title: "chat-options-dropdown-title"
    }
}, function(e, t, n) {
    e.exports = {
        component: "analysis-options-dropdown-component",
        close: "analysis-options-dropdown-close",
        title: "analysis-options-dropdown-title"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-actions-component",
        "icons-list": "user-actions-icons-list",
        more: "user-actions-more",
        caret: "user-actions-caret",
        buttonsList: "user-actions-buttonsList"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-flair-status-component"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-rating-component",
        icon: "user-rating-icon",
        rating: "user-rating-rating"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-flair-icon-component"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-tagline-component",
        username: "user-tagline-username",
        rating: "user-tagline-rating",
        darkMode: "user-tagline-darkMode"
    }
}, function(e, t, n) {
    e.exports = {
        popover: "user-popover-popover",
        bottom: "user-popover-bottom",
        top: "user-popover-top",
        component: "user-popover-component",
        "avatar-placeholder": "user-popover-avatar-placeholder",
        profile: "user-popover-profile",
        meta: "user-popover-meta",
        info: "user-popover-info",
        onlive: "user-popover-onlive",
        online: "user-popover-online",
        status: "user-popover-status",
        details: "user-popover-details",
        secondary: "user-popover-secondary",
        loader: "user-popover-loader",
        actions: "user-popover-actions",
        ratings: "user-popover-ratings",
        confirm: "user-popover-confirm"
    }
}, function(e, t, n) {
    e.exports = {
        modal: "modal-with-footer-modal",
        newbie: "modal-with-footer-newbie",
        content: "modal-with-footer-content",
        header: "modal-with-footer-header",
        icon: "modal-with-footer-icon",
        footer: "modal-with-footer-footer"
    }
}, function(e, t, n) {
    e.exports = {
        component: "modal-user-report-component",
        title: "modal-user-report-title",
        status: "modal-user-report-status",
        close: "modal-user-report-close",
        radio: "modal-user-report-radio",
        subcategories: "modal-user-report-subcategories",
        error: "modal-user-report-error",
        label: "modal-user-report-label",
        "checkbox-row-label": "modal-user-report-checkbox-row-label",
        textarea: "modal-user-report-textarea",
        content: "modal-user-report-content",
        wrapper: "modal-user-report-wrapper",
        button: "modal-user-report-button"
    }
}, function(e, t, n) {
    e.exports = {
        "placeholder-popover": "user-popover-placeholder-popover",
        bottom: "user-popover-bottom",
        top: "user-popover-top",
        "placeholder-component": "user-popover-placeholder-component",
        "placeholder-profile": "user-popover-placeholder-profile",
        "placeholder-avatar": "user-popover-placeholder-avatar",
        "placeholder-info": "user-popover-placeholder-info"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        a = n.n(r),
        o = {
            name: "section-container",
            mixins: [n(222).a],
            props: {
                overflow: {
                    type: String,
                    required: !1
                }
            },
            computed: {
                componentClasses: function componentClasses() {
                    var e = this.overflow,
                        t = this.$style;
                    return [t.component, a()({}, t[e], e), this.themeClasses()]
                }
            }
        },
        i = n(141),
        s = n(5);
    var c = Object(s.a)(o, function() {
        var e = this.$createElement;
        return (this._self._c || e)("div", {
            class: this.componentClasses
        }, [this._t("default")], 2)
    }, [], !1, function injectStyles(e) {
        this.$style = i.default.locals || i.default
    }, null, null);
    t.a = c.exports
}, , function(e, t, n) {
    "use strict";
    var r = n(125),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(126),
        a = n.n(r);
    t.default = a.a
}, , function(e, t, n) {
    "use strict";
    var r = n(128),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(129),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(130),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    var r = n(292),
        a = n(208),
        o = n(117),
        i = n(174),
        s = n(209),
        c = n(210),
        l = Object.prototype.hasOwnProperty;
    e.exports = function arrayLikeKeys(e, t) {
        var n = o(e),
            u = !n && a(e),
            d = !n && !u && i(e),
            p = !n && !u && !d && c(e),
            m = n || u || d || p,
            f = m ? r(e.length, String) : [],
            h = f.length;
        for (var g in e) !t && !l.call(e, g) || m && ("length" == g || d && ("offset" == g || "parent" == g) || p && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, h)) || f.push(g);
        return f
    }
}, function(e, t, n) {
    var r = n(293),
        a = n(66),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.propertyIsEnumerable,
        c = r(function() {
            return arguments
        }()) ? r : function(e) {
            return a(e) && i.call(e, "callee") && !s.call(e, "callee")
        };
    e.exports = c
}, function(e, t) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    e.exports = function isIndex(e, t) {
        var a = typeof e;
        return !!(t = null == t ? n : t) && ("number" == a || "symbol" != a && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, function(e, t, n) {
    var r = n(295),
        a = n(234),
        o = n(235),
        i = o && o.isTypedArray,
        s = i ? a(i) : r;
    e.exports = s
}, function(e, t) {
    e.exports = function overArg(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
}, , function(e, t, n) {
    var r = n(291)();
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(249),
        a = n.n(r);
    t.a = a.a
}, , , function(e, t, n) {
    var r = n(307);
    e.exports = function baseAssignValue(e, t, n) {
        "__proto__" == t && r ? r(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
}, function(e, t, n) {
    var r, a, o;
    /*!
    	autosize 4.0.1
    	license: MIT
    	http://www.jacklmoore.com/autosize
    */
    a = [e, t], void 0 === (o = "function" == typeof(r = function(e, t) {
        "use strict";
        var n, r, a = "function" == typeof Map ? new Map : (n = [], r = [], {
                has: function has(e) {
                    return n.indexOf(e) > -1
                },
                get: function get(e) {
                    return r[n.indexOf(e)]
                },
                set: function set(e, t) {
                    -1 === n.indexOf(e) && (n.push(e), r.push(t))
                },
                delete: function _delete(e) {
                    var t = n.indexOf(e);
                    t > -1 && (n.splice(t, 1), r.splice(t, 1))
                }
            }),
            o = function createEvent(e) {
                return new Event(e, {
                    bubbles: !0
                })
            };
        try {
            new Event("test")
        } catch (e) {
            o = function createEvent(e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !1), t
            }
        }

        function assign(e) {
            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !a.has(e)) {
                var t = null,
                    n = null,
                    r = null,
                    i = function pageResize() {
                        e.clientWidth !== n && update()
                    },
                    s = function(t) {
                        window.removeEventListener("resize", i, !1), e.removeEventListener("input", update, !1), e.removeEventListener("keyup", update, !1), e.removeEventListener("autosize:destroy", s, !1), e.removeEventListener("autosize:update", update, !1), Object.keys(t).forEach(function(n) {
                            e.style[n] = t[n]
                        }), a.delete(e)
                    }.bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap
                    });
                e.addEventListener("autosize:destroy", s, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", update, !1), window.addEventListener("resize", i, !1), e.addEventListener("input", update, !1), e.addEventListener("autosize:update", update, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", a.set(e, {
                        destroy: s,
                        update: update
                    }),
                    function init() {
                        var n = window.getComputedStyle(e, null);
                        "vertical" === n.resize ? e.style.resize = "none" : "both" === n.resize && (e.style.resize = "horizontal"), t = "content-box" === n.boxSizing ? -(parseFloat(n.paddingTop) + parseFloat(n.paddingBottom)) : parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), isNaN(t) && (t = 0), update()
                    }()
            }

            function changeOverflow(t) {
                var n = e.style.width;
                e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
            }

            function resize() {
                if (0 !== e.scrollHeight) {
                    var r = function getParentOverflows(e) {
                            for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                                node: e.parentNode,
                                scrollTop: e.parentNode.scrollTop
                            }), e = e.parentNode;
                            return t
                        }(e),
                        a = document.documentElement && document.documentElement.scrollTop;
                    e.style.height = "", e.style.height = e.scrollHeight + t + "px", n = e.clientWidth, r.forEach(function(e) {
                        e.node.scrollTop = e.scrollTop
                    }), a && (document.documentElement.scrollTop = a)
                }
            }

            function update() {
                resize();
                var t = Math.round(parseFloat(e.style.height)),
                    n = window.getComputedStyle(e, null),
                    a = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
                if (a !== t ? "hidden" === n.overflowY && (changeOverflow("scroll"), resize(), a = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (changeOverflow("hidden"), resize(), a = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), r !== a) {
                    r = a;
                    var i = o("autosize:resized");
                    try {
                        e.dispatchEvent(i)
                    } catch (e) {}
                }
            }
        }

        function destroy(e) {
            var t = a.get(e);
            t && t.destroy()
        }

        function update(e) {
            var t = a.get(e);
            t && t.update()
        }
        var i = null;
        "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((i = function autosize(e) {
            return e
        }).destroy = function(e) {
            return e
        }, i.update = function(e) {
            return e
        }) : ((i = function autosize(e, t) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
                return assign(e)
            }), e
        }).destroy = function(e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], destroy), e
        }, i.update = function(e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], update), e
        }), t.default = i, e.exports = t.default
    }) ? r.apply(t, a) : r) || (e.exports = o)
}, function(e, t, n) {
    "use strict";
    var r = n(148),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(149),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    var r = n(207),
        a = n(297),
        o = n(90);
    e.exports = function keys(e) {
        return o(e) ? r(e) : a(e)
    }
}, function(e, t, n) {
    "use strict";
    t.a = {
        props: {
            darkMode: {
                type: Boolean,
                default: !1
            },
            lightMode: {
                type: Boolean,
                default: !1
            }
        },
        methods: {
            themeClasses: function themeClasses() {
                return {
                    "light-mode": this.lightMode,
                    "dark-mode": this.darkMode
                }
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(37),
        a = function getValue(e, t) {
            return r.a.isString(t) && r.a.isObject(e) ? e[t] : r.a.isFunction(t) ? t(e) : void 0
        },
        o = function compareValues(e, t, n, r) {
            var o = a(e, n),
                i = a(t, n);
            return null == o ? 1 : null == i ? -1 : o > i ? "desc" === r ? -1 : 1 : o < i ? "desc" === r ? 1 : -1 : 0
        };
    t.a = {
        remove: function remove(e, t) {
            var n = r.a.isFunction(t) ? e.findIndex(t) : e.indexOf(t); - 1 !== n && e.splice(n, 1)
        },
        range: function range(e, t) {
            for (var n = [], r = e; r < t; r++) n.push(r);
            return n
        },
        uniq: function uniq(e, t) {
            return r.a.isFunction(t) ? e.filter(function(n, r) {
                return e.findIndex(function(e) {
                    return t(e) === t(n)
                }) === r
            }) : t ? e.filter(function(n, r) {
                return e.findIndex(function(e) {
                    return e[t] === n[t]
                }) === r
            }) : e.filter(function(t, n) {
                return e.indexOf(t) === n
            })
        },
        sortBy: function sortBy(e, t, n) {
            var a = r.a.isArray(t) ? t : [t],
                i = r.a.isArray(n) ? n : [n],
                s = e.slice(0);
            return s.sort(function(e, t) {
                for (var n = 0, r = 0; r < a.length && 0 === n; r++) n = o(e, t, a[r], i[r]);
                return n
            }), s
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }), n.d(t, "b", function() {
        return i
    }), n.d(t, "e", function() {
        return s
    }), n.d(t, "f", function() {
        return c
    }), n.d(t, "c", function() {
        return l
    }), n.d(t, "d", function() {
        return u
    });
    var r = n(43),
        a = n(12),
        o = function getCharacterCountClasses(e, t) {
            var n = [t["char-count"]],
                a = r.e - e.length;
            if (a < 10) {
                var o = Math.floor(a / 2);
                n.push(t["warning-".concat(o)])
            }
            return n
        },
        i = function getFlairDomElement() {
            return document.querySelector("[".concat(r.a.FLAIR, "]"))
        },
        s = function getUsernameFromDom() {
            var e = document.querySelector("[".concat(r.a.USERNAME, "]"));
            return e ? e.getAttribute(r.a.USERNAME) : ""
        },
        c = function parseFlair(e) {
            if (!e) return a.c;
            var t = JSON.parse(e.dataset.flairProfile);
            return t && t.code || (t = a.c), t
        },
        l = function getFlairHref(e) {
            var t = e.code,
                n = e.flairMembership,
                o = e.selfIsPremium;
            return n >= a.k.moderator ? a.o.about() : n === a.k.cheater || n === a.k.abuser ? r.g.communityGuidelines() : a.a.includes(t) ? "" : o ? "".concat(r.g.settings()).concat(r.d) : a.o.membership("flair")
        },
        u = function getFlairTooltip(e) {
            var t = e.code,
                n = e.flairMembership;
            return n >= a.k.staff ? a.p.staff : n >= a.k.moderator ? a.p.moderator : n < a.k.basic ? a.m[n] : a.a.includes(t) ? a.m[a.k.unspecifiedClosed] : a.p.showYourFlair
        }
}, , function(e, t) {
    e.exports = amplitudeDLL
}, , , , function(e, t, n) {
    "use strict";
    var r = {
            name: "labeled-icon-button",
            components: {
                IconFont: n(18).a
            },
            props: {
                action: Function,
                btnColor: String,
                iconName: {
                    type: String,
                    required: !0
                },
                label: {
                    type: String,
                    required: !0
                }
            },
            methods: {
                onClick: function onClick(e) {
                    this.action ? this.action(e) : this.$emit("click", e)
                }
            }
        },
        a = n(248),
        o = n(5);
    var i = Object(o.a)(r, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("button", {
            class: [e.$style.link, e.$style[e.btnColor]],
            attrs: {
                type: "button"
            },
            on: {
                click: e.onClick
            }
        }, [n("icon-font", {
            class: [e.$style.icon],
            attrs: {
                theme: "primary",
                name: e.iconName
            }
        }), e._v(" "), n("span", {
            class: e.$style.label,
            domProps: {
                textContent: e._s(e.label)
            }
        })], 1)
    }, [], !1, function injectStyles(e) {
        this.$style = a.default.locals || a.default
    }, null, null);
    t.a = i.exports
}, , , function(e, t, n) {
    var r = n(213),
        a = n(221);
    e.exports = function baseForOwn(e, t) {
        return e && r(e, t, a)
    }
}, function(e, t) {
    e.exports = function baseUnary(e) {
        return function(t) {
            return e(t)
        }
    }
}, function(e, t, n) {
    (function(e) {
        var r = n(296),
            a = t && !t.nodeType && t,
            o = a && "object" == typeof e && e && !e.nodeType && e,
            i = o && o.exports === a && r.process,
            s = function() {
                try {
                    return i && i.binding && i.binding("util")
                } catch (e) {}
            }();
        e.exports = s
    }).call(this, n(113)(e))
}, function(e, t, n) {
    var r = n(136);
    e.exports = function castFunction(e) {
        return "function" == typeof e ? e : r
    }
}, function(e, t, n) {
    "use strict";
    var r = n(155),
        a = n.n(r);
    t.default = a.a
}, , function(e, t, n) {
    "use strict";
    var r = n(157),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(158),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r, a = {},
        o = {},
        i = ["visa", "master-card", "american-express", "diners-club", "discover", "jcb", "unionpay", "maestro", "mir"];

    function clone(e) {
        var t;
        return e ? (delete(t = JSON.parse(JSON.stringify(e))).prefixPattern, delete t.exactPattern, t) : null
    }

    function findType(e) {
        return o[e] || a[e]
    }

    function creditCardType(e) {
        var t, n, a = [],
            o = [];
        if (!("string" == typeof e || e instanceof String)) return [];
        for (n = 0; n < r.length; n++) t = findType(r[n]), 0 !== e.length ? t.exactPattern.test(e) ? o.push(clone(t)) : t.prefixPattern.test(e) && a.push(clone(t)) : a.push(clone(t));
        return o.length ? o : a
    }

    function getCardPosition(e, t) {
        var n = r.indexOf(e);
        if (!t && -1 === n) throw new Error('"' + e + '" is not a supported card type.');
        return n
    }
    r = clone(i), a.visa = {
        niceType: "Visa",
        type: "visa",
        prefixPattern: /^4$/,
        exactPattern: /^4\d*$/,
        gaps: [4, 8, 12],
        lengths: [16, 18, 19],
        code: {
            name: "CVV",
            size: 3
        }
    }, a["master-card"] = {
        niceType: "Mastercard",
        type: "master-card",
        prefixPattern: /^(5|5[1-5]|2|22|222|222[1-9]|2[3-6]|27|27[0-2]|2720)$/,
        exactPattern: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[0-1]|2720)\d*$/,
        gaps: [4, 8, 12],
        lengths: [16],
        code: {
            name: "CVC",
            size: 3
        }
    }, a["american-express"] = {
        niceType: "American Express",
        type: "american-express",
        prefixPattern: /^(3|34|37)$/,
        exactPattern: /^3[47]\d*$/,
        isAmex: !0,
        gaps: [4, 10],
        lengths: [15],
        code: {
            name: "CID",
            size: 4
        }
    }, a["diners-club"] = {
        niceType: "Diners Club",
        type: "diners-club",
        prefixPattern: /^(3|3[0689]|30[0-5])$/,
        exactPattern: /^3(0[0-5]|[689])\d*$/,
        gaps: [4, 10],
        lengths: [14, 16, 19],
        code: {
            name: "CVV",
            size: 3
        }
    }, a.discover = {
        niceType: "Discover",
        type: "discover",
        prefixPattern: /^(6|60|601|6011|65|64|64[4-9])$/,
        exactPattern: /^(6011|65|64[4-9])\d*$/,
        gaps: [4, 8, 12],
        lengths: [16, 19],
        code: {
            name: "CID",
            size: 3
        }
    }, a.jcb = {
        niceType: "JCB",
        type: "jcb",
        prefixPattern: /^(2|21|213|2131|1|18|180|1800|3|35)$/,
        exactPattern: /^(2131|1800|35)\d*$/,
        gaps: [4, 8, 12],
        lengths: [16, 17, 18, 19],
        code: {
            name: "CVV",
            size: 3
        }
    }, a.unionpay = {
        niceType: "UnionPay",
        type: "unionpay",
        prefixPattern: /^((6|62|62\d|(621(?!83|88|98|99))|622(?!06)|627[02,06,07]|628(?!0|1)|629[1,2])|622018)$/,
        exactPattern: /^(((620|(621(?!83|88|98|99))|622(?!06|018)|62[3-6]|627[02,06,07]|628(?!0|1)|629[1,2]))\d*|622018\d{12})$/,
        gaps: [4, 8, 12],
        lengths: [16, 17, 18, 19],
        code: {
            name: "CVN",
            size: 3
        }
    }, a.maestro = {
        niceType: "Maestro",
        type: "maestro",
        prefixPattern: /^(5|5[06-9]|6\d*)$/,
        exactPattern: /^(5[06-9]|6[37])\d*$/,
        gaps: [4, 8, 12],
        lengths: [12, 13, 14, 15, 16, 17, 18, 19],
        code: {
            name: "CVC",
            size: 3
        }
    }, a.mir = {
        niceType: "Mir",
        type: "mir",
        prefixPattern: /^(2|22|220|220[0-4])$/,
        exactPattern: /^(220[0-4])\d*$/,
        gaps: [4, 8, 12],
        lengths: [16, 17, 18, 19],
        code: {
            name: "CVP2",
            size: 3
        }
    }, creditCardType.getTypeInfo = function(e) {
        return clone(findType(e))
    }, creditCardType.removeCard = function(e) {
        var t = getCardPosition(e);
        r.splice(t, 1)
    }, creditCardType.addCard = function(e) {
        var t = getCardPosition(e.type, !0);
        o[e.type] = e, -1 === t && r.push(e.type)
    }, creditCardType.changeOrder = function(e, t) {
        var n = getCardPosition(e);
        r.splice(n, 1), r.splice(t, 0, e)
    }, creditCardType.resetModifications = function() {
        r = clone(i), o = {}
    }, creditCardType.types = {
        VISA: "visa",
        MASTERCARD: "master-card",
        AMERICAN_EXPRESS: "american-express",
        DINERS_CLUB: "diners-club",
        DISCOVER: "discover",
        JCB: "jcb",
        UNIONPAY: "unionpay",
        MAESTRO: "maestro",
        MIR: "mir"
    }, e.exports = creditCardType
}, function(e, t, n) {
    "use strict";
    var r = n(159),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(160),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(161),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(162),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(163),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(164),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(165),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    var r = n(330),
        a = n(55),
        o = "Expected a function";
    e.exports = function throttle(e, t, n) {
        var i = !0,
            s = !0;
        if ("function" != typeof e) throw new TypeError(o);
        return a(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), r(e, t, {
            leading: i,
            maxWait: t,
            trailing: s
        })
    }
}, , , , function(e, t, n) {
    "use strict";
    var r = n(67),
        a = {
            name: "user-avatar",
            directives: {
                ImageDefer: n(77).a
            },
            props: {
                image: {
                    type: String,
                    required: !0
                },
                isLive: {
                    type: Boolean,
                    default: !1
                },
                isOnline: {
                    type: Boolean,
                    default: !1
                },
                url: {
                    type: String,
                    required: !1
                }
            },
            computed: {
                isLink: function isLink() {
                    return Boolean(this.url)
                },
                blankImage: function blankImage() {
                    return Object(r.a)("bundles/web/images/user-image.svg")
                }
            }
        },
        o = n(258),
        i = n(5);
    var s = Object(i.a)(a, function() {
        var e, t, n, r = this,
            a = r.$createElement,
            o = r._self._c || a;
        return o("a", {
            class: [r.$style.component, (e = {}, e[r.$style.link] = r.isLink, e)],
            attrs: {
                href: r.url
            }
        }, [o("img", {
            directives: [{
                name: "image-defer",
                rawName: "v-image-defer",
                value: {
                    src: r.image,
                    srcset: !0
                },
                expression: "{src: image, srcset: true}"
            }],
            class: r.$style.image,
            attrs: {
                src: r.blankImage
            }
        }), r._v(" "), r.isOnline || r.isLive ? o("span", {
            class: [r.$style.status, (t = {}, t[r.$style.online] = r.isOnline, t), (n = {}, n[r.$style.live] = r.isLive, n)]
        }) : r._e()])
    }, [], !1, function injectStyles(e) {
        this.$style = o.default.locals || o.default
    }, null, null);
    t.a = s.exports
}, function(e, t, n) {
    "use strict";
    var r = n(36),
        a = null;
    t.a = new class VisibilityObserver {
        constructor() {
            var e = this;
            return null == a && (a = this, this.observer = new IntersectionObserver(function(t) {
                t.forEach(function(t) {
                    t.intersectionRatio > 0 && (r.a.$emit("visibility-observer-change", t.target), e.observer.unobserve(t.target))
                })
            }, {
                rootMargin: "200px 0px",
                threshold: .01
            })), a
        }
        observe(e) {
            this.observer.observe(e)
        }
        unobserve(e) {
            this.observer.unobserve(e)
        }
    }
}, , function(e, t, n) {
    var r = n(207),
        a = n(382),
        o = n(90);
    e.exports = function keysIn(e) {
        return o(e) ? r(e, !0) : a(e)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(218),
        a = n.n(r),
        o = {
            name: "form-textarea",
            mixins: [n(39).a],
            props: {
                ariaLabel: {
                    type: String,
                    required: !1
                },
                autosize: {
                    type: Boolean,
                    default: !1
                },
                onEnter: {
                    type: Function,
                    required: !1
                },
                name: {
                    type: String,
                    required: !1
                },
                placeholder: {
                    type: String,
                    required: !1
                },
                value: {
                    type: String,
                    required: !1
                }
            },
            mounted: function mounted() {
                this.autosize && (a()(this.$el), this.$el.addEventListener("autosize:resized", this.resizeEvent))
            },
            beforeDestroy: function beforeDestroy() {
                this.autosize && this.$el.removeEventListener("autosize:resized", this.resizeEvent)
            },
            methods: {
                blurEvent: function blurEvent(e) {
                    this.$emit("blur", e)
                },
                focusEvent: function focusEvent(e) {
                    this.$emit("focus", e)
                },
                handleEnter: function handleEnter(e) {
                    var t = this;
                    this.onEnter && !e.shiftKey && (e.preventDefault(), this.onEnter(), this.$nextTick(function() {
                        a.a.update(t.$el)
                    }))
                },
                resizeEvent: function resizeEvent() {
                    var e = this;
                    this.$nextTick(function() {
                        e.$emit("resize")
                    })
                },
                updateValue: function updateValue(e) {
                    this.$emit("input", e)
                }
            }
        },
        i = n(219),
        s = n(5);
    var c = Object(s.a)(o, function() {
        var e, t = this,
            n = t.$createElement;
        return (t._self._c || n)("textarea", {
            class: [t.componentClasses(), (e = {}, e[t.$style.autosize] = t.autosize, e)],
            attrs: {
                "aria-label": t.ariaLabel,
                name: t.name,
                placeholder: t.placeholder
            },
            domProps: {
                value: t.value
            },
            on: {
                blur: function(e) {
                    return t.blurEvent(e)
                },
                focus: function(e) {
                    return t.focusEvent(e)
                },
                input: function(e) {
                    return t.updateValue(e.target.value)
                },
                keydown: function(e) {
                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleEnter(e)
                }
            }
        })
    }, [], !1, function injectStyles(e) {
        this.$style = i.default.locals || i.default
    }, null, null);
    t.a = c.exports
}, function(e, t, n) {
    "use strict";
    var r = n(176),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(177),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(178),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(179),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(180),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(181),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(182),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(183),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(184),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(185),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(186),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(187),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(188),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(189),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(190),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(191),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(192),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(193),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(194),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(195),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(196),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(197),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(198),
        a = n.n(r);
    t.default = a.a
}, , function(e, t, n) {
    "use strict";
    var r = n(310),
        a = n.n(r);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(17),
        a = n(109),
        o = JSON.parse(a.default.get("chessComAppState")),
        i = o && o.user && o.user.isImpersonating || Object(r.g)();
    t.a = i ? {} : o || {}
}, function(e, t, n) {
    "use strict";
    var r = n(123),
        a = n(56),
        o = n(36),
        i = n(23),
        s = n(320),
        c = n(41),
        l = n(53);

    function setPopoverPosition(e) {
        var t, n = Object(c.e)() && window.innerWidth < 768;
        return Object(l.a)() ? t = "left: auto; right: ".concat(e.right, "px; top: ").concat(e.top, "px;") : (t = "transform: translate(".concat(e.left, "px, ").concat(e.top, "px);"), n && (t = "transform: translateY(".concat(e.top, "px);"))), t
    }
    var u = {
            hideUserPopover: function hideUserPopover(e) {
                e.isHovered = !1, e.show = !1
            },
            hover: function hover(e) {
                e.isHovered = !0
            },
            resetUser: function resetUser(e) {
                e.user = {
                    avatarUrl: "",
                    bestRating: 0,
                    bestRatingType: "",
                    chessTitle: "",
                    country: {},
                    joinDate: "",
                    lastLoginDate: "",
                    membership: {},
                    onlineStatus: "",
                    username: ""
                }
            },
            showUserPopover: function showUserPopover(e) {
                e.show = !0
            },
            setPosition: function setPosition(e, t) {
                e.position = t
            },
            setUser: function setUser(e, t) {
                e.user = t
            }
        },
        d = n(3),
        p = n.n(d),
        m = n(124);

    function ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var f = {
            namespaced: !0,
            mutations: u,
            actions: {
                fetchUserPopover: function fetchUserPopover(e, t) {
                    var n = e.commit;
                    Object(m.b)(t).then(function(e) {
                        n("setUser", function _objectSpread(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ownKeys(n, !0).forEach(function(t) {
                                    p()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, e.data, {
                            username: t
                        }))
                    }).catch(function() {
                        n("setUser", {
                            userNotExist: !0
                        })
                    })
                }
            },
            state: {
                isHovered: !1,
                show: !1,
                user: {
                    avatarUrl: "",
                    bestRating: 0,
                    bestRatingType: "",
                    chessTitle: "",
                    country: {},
                    joinDate: "",
                    lastLoginDate: "",
                    membership: {},
                    onlineStatus: "",
                    username: ""
                },
                position: {
                    x: "right",
                    y: "bottom",
                    top: 0,
                    left: 0
                }
            }
        },
        h = n(134),
        g = n(17),
        b = n(47),
        v = n(25),
        y = n(12),
        _ = n(300),
        w = {
            namespaced: !0,
            mutations: {
                newMessage: function newMessage(e, t) {
                    e.message = t
                }
            },
            state: {
                message: null
            }
        },
        O = n(7),
        E = n(317),
        k = n(313),
        C = n(122),
        S = {
            name: "admin-actions",
            components: {
                IconButton: C.a
            },
            props: {
                canModerate: {
                    type: Boolean,
                    default: !1
                },
                clientName: String,
                canWarnOnChat: Boolean,
                canModerateOnChat: Boolean
            }
        },
        A = n(267),
        T = n(5);
    var P = Object(T.a)(S, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [e.canModerate ? n("icon-button", {
                attrs: {
                    "icon-name": "flag",
                    "btn-color": "red",
                    label: e.$trans("Warn")
                },
                on: {
                    click: function(t) {
                        return e.$emit("warn-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerate ? n("icon-button", {
                attrs: {
                    "icon-name": "chat-x",
                    "btn-color": "red",
                    label: e.$trans("Mute")
                },
                on: {
                    click: function(t) {
                        return e.$emit("mute-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerate ? n("icon-button", {
                attrs: {
                    "icon-name": "exit",
                    "btn-color": "red",
                    label: e.$trans("Kick")
                },
                on: {
                    click: function(t) {
                        return e.$emit("kick-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerate ? n("icon-button", {
                attrs: {
                    "icon-name": "user-block",
                    "btn-color": "red",
                    label: e.$trans("Ban")
                },
                on: {
                    click: function(t) {
                        return e.$emit("ban-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerate && e.clientName ? n("icon-button", {
                attrs: {
                    "icon-name": "circle-info",
                    label: e.clientName
                }
            }) : e._e(), e._v(" "), e.canModerate && (e.canWarnOnChat || e.canModerateOnChat) ? n("div", {
                class: e.$style.separator
            }) : e._e(), e._v(" "), e.canWarnOnChat ? n("icon-button", {
                attrs: {
                    "icon-name": "flag",
                    "btn-color": "red",
                    label: e.$trans("Chat Warn")
                },
                on: {
                    click: function(t) {
                        return e.$emit("chat-warn-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerateOnChat ? n("icon-button", {
                attrs: {
                    "icon-name": "chat-x",
                    "btn-color": "red",
                    label: e.$trans("Chat Mute")
                },
                on: {
                    click: function(t) {
                        return e.$emit("chat-mute-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerateOnChat ? n("icon-button", {
                attrs: {
                    "icon-name": "exit",
                    "btn-color": "red",
                    label: e.$trans("Chat Kick")
                },
                on: {
                    click: function(t) {
                        return e.$emit("chat-kick-user")
                    }
                }
            }) : e._e()], 1)
        }, [], !1, function injectStyles(e) {
            this.$style = A.default.locals || A.default
        }, null, null).exports,
        x = n(322),
        j = n(33),
        M = n(91),
        L = n(35),
        N = n(24),
        I = n.n(N),
        R = n(18),
        D = {
            name: "icon-link",
            components: {
                IconFont: R.a
            },
            directives: {
                Tooltip: L.a
            },
            props: {
                url: String,
                iconColor: String,
                iconName: {
                    type: String,
                    required: !0
                },
                label: {
                    type: String,
                    required: !0
                }
            }
        },
        $ = n(268);
    var B = Object(T.a)(D, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {
                        content: e.label,
                        delay: 100
                    },
                    expression: "{\n    content: label,\n    delay: 100\n  }"
                }],
                class: [e.$style.link, e.$style[e.iconColor]],
                attrs: {
                    href: e.url
                },
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [n("icon-font", {
                class: [e.$style.icon],
                attrs: {
                    theme: "primary",
                    name: e.iconName
                }
            })], 1)
        }, [], !1, function icon_link_injectStyles(e) {
            this.$style = $.default.locals || $.default
        }, null, null).exports,
        F = n(230),
        U = {
            name: "labeled-icon-button",
            components: {
                IconFont: R.a
            },
            props: {
                url: String,
                iconColor: String,
                iconName: {
                    type: String,
                    required: !0
                },
                label: {
                    type: String,
                    required: !0
                }
            }
        },
        V = n(269);
    var q = Object(T.a)(U, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("a", {
                class: [e.$style.link, e.$style[e.iconColor]],
                attrs: {
                    href: e.url
                },
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [n("icon-font", {
                class: [e.$style.icon],
                attrs: {
                    theme: "primary",
                    name: e.iconName
                }
            }), e._v(" "), n("span", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.label)
                }
            })], 1)
        }, [], !1, function labeled_icon_link_injectStyles(e) {
            this.$style = V.default.locals || V.default
        }, null, null).exports,
        G = {
            methods: {
                hasVisibleDropdown: function hasVisibleDropdown() {
                    return Object.values(this.dropdown).some(function(e) {
                        return "block" === e.display
                    })
                },
                createDropdown: function createDropdown(e) {
                    var t = {
                        dropdown: {}
                    };
                    return e.forEach(function(e) {
                        t.dropdown[e] = {
                            display: "none",
                            transform: "translate(0, 0)"
                        }
                    }), t
                },
                hideDropdown: function hideDropdown() {
                    var e = this;
                    Object.keys(this.dropdown).forEach(function(t) {
                        e.dropdown[t].display = "none"
                    })
                },
                showDropdown: function showDropdown(e, t, n) {
                    var r = this,
                        a = document.querySelector('ul[data-dropdown="'.concat(t, '"]'));
                    a && ("block" === this.dropdown[t].display ? this.dropdown[t].display = "none" : (this.hideDropdown(), this.dropdown[t].display = "block", this.$nextTick(function() {
                        var o = e.target.getBoundingClientRect(),
                            i = a.getBoundingClientRect(),
                            s = i.width,
                            c = i.height,
                            l = Object(b.b)(o, c, s);
                        n && n(l);
                        var u = l.left,
                            d = l.top;
                        r.dropdown[t].transform = "translate(".concat(u, "px, ").concat(d, "px)")
                    })))
                }
            }
        };

    function chat_options_dropdownvue_type_script_lang_js_ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var H = {
            name: "chat-options-dropdown",
            directives: {
                Tooltip: L.a
            },
            mixins: [G],
            props: {
                target: {
                    type: HTMLElement,
                    required: !0
                },
                position: {
                    type: Object,
                    required: !0
                },
                chatOptions: {
                    type: Array,
                    default: function _default() {
                        return []
                    }
                }
            },
            data: function data() {
                return function chat_options_dropdownvue_type_script_lang_js_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? chat_options_dropdownvue_type_script_lang_js_ownKeys(n, !0).forEach(function(t) {
                            p()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : chat_options_dropdownvue_type_script_lang_js_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, this.createDropdown(["chat"]))
            },
            mounted: function mounted() {
                var e = this,
                    t = {
                        target: this.target
                    };
                this.showDropdown(t, "chat", function(t) {
                    t.left -= e.position.left, t.top -= e.position.top
                })
            },
            methods: {
                onClickOption: function onClickOption(e, t) {
                    e.roomId = t, this.$emit("option-selected", e)
                }
            }
        },
        z = n(270);
    var K = Object(T.a)(H, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("ul", {
            class: e.$style.component,
            style: e.dropdown.chat,
            attrs: {
                "data-dropdown": "chat"
            }
        }, [e._l(e.chatOptions, function(t) {
            return n("li", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: t.title,
                    expression: "chatOption.title"
                }],
                key: t.roomId,
                domProps: {
                    textContent: e._s(t.title)
                },
                on: {
                    click: function(n) {
                        return e.onClickOption(n, t.roomId)
                    }
                }
            })
        }), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), n("i", {
            directives: [{
                name: "tooltip",
                rawName: "v-tooltip",
                value: e.$trans("Close"),
                expression: "$trans('Close')"
            }],
            class: [e.$style.close, "icon-x"],
            on: {
                click: function(t) {
                    return e.$emit("hide")
                }
            }
        })], 2)
    }, [function() {
        var e = this,
            t = e.$createElement;
        return (e._self._c || t)("li", {
            domProps: {
                textContent: e._s(e.$trans("Private Chat"))
            },
            on: {
                click: function(t) {
                    return e.onClickOption(t)
                }
            }
        })
    }, function() {
        var e = this.$createElement;
        return (this._self._c || e)("span", {
            class: this.$style.title,
            domProps: {
                textContent: this._s(this.$trans("Chat"))
            }
        })
    }], !1, function chat_options_dropdown_injectStyles(e) {
        this.$style = z.default.locals || z.default
    }, null, null).exports;

    function analysis_options_dropdownvue_type_script_lang_js_ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var W = {
            name: "analysis-options-dropdown",
            directives: {
                Tooltip: L.a
            },
            mixins: [G],
            props: {
                target: {
                    type: HTMLElement,
                    required: !0
                },
                position: {
                    type: Object,
                    required: !0
                },
                analysisOptions: {
                    type: Array,
                    default: function _default() {
                        return []
                    }
                }
            },
            data: function data() {
                return function analysis_options_dropdownvue_type_script_lang_js_objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? analysis_options_dropdownvue_type_script_lang_js_ownKeys(n, !0).forEach(function(t) {
                            p()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : analysis_options_dropdownvue_type_script_lang_js_ownKeys(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, this.createDropdown(["analysis"]))
            },
            mounted: function mounted() {
                var e = this,
                    t = {
                        target: this.target
                    };
                this.showDropdown(t, "analysis", function(t) {
                    t.left -= e.position.left, t.top -= e.position.top
                })
            },
            methods: {
                onClickOption: function onClickOption(e, t) {
                    e.examineId = t, this.$emit("option-selected", e)
                }
            }
        },
        Y = n(271);
    var Q = Object(T.a)(W, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("ul", {
                class: e.$style.component,
                style: e.dropdown.analysis,
                attrs: {
                    "data-dropdown": "analysis"
                }
            }, [e._l(e.analysisOptions, function(t) {
                return n("li", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.title,
                        expression: "analysisOption.title"
                    }],
                    key: t.examineId,
                    domProps: {
                        textContent: e._s(t.title)
                    },
                    on: {
                        click: function(n) {
                            return e.onClickOption(n, t.examineId)
                        }
                    }
                })
            }), e._v(" "), e._m(0), e._v(" "), n("i", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.$trans("Close"),
                    expression: "$trans('Close')"
                }],
                class: [e.$style.close, "icon-x"],
                on: {
                    click: function(t) {
                        return e.$emit("hide")
                    }
                }
            })], 2)
        }, [function() {
            var e = this.$createElement;
            return (this._self._c || e)("span", {
                class: this.$style.title,
                domProps: {
                    textContent: this._s(this.$trans("Analysis Board"))
                }
            })
        }], !1, function analysis_options_dropdown_injectStyles(e) {
            this.$style = Y.default.locals || Y.default
        }, null, null).exports,
        J = {
            name: "user-actions",
            components: {
                IconFont: R.a,
                IconButton: C.a,
                IconLink: B,
                LabeledIconButton: F.a,
                LabeledIconLink: q,
                ChatOptionsDropdown: K,
                AnalysisOptionsDropdown: Q
            },
            props: {
                avatar: String,
                canAddFriend: Boolean,
                canBlockUser: Boolean,
                canReportUser: Boolean,
                canCreateChallenge: Boolean,
                canFollowUser: Boolean,
                canGiftMembership: Boolean,
                canRemoveFriend: Boolean,
                canSendMessage: Boolean,
                canInviteToChat: Boolean,
                canSendTrophy: Boolean,
                canUnblockUser: Boolean,
                canUnfollowUser: Boolean,
                canUseGlobalChat: Boolean,
                isEnabled: Boolean,
                hasInboundFriendRequest: Boolean,
                hasOutboundFriendRequest: Boolean,
                loggedAsAnother: Boolean,
                username: String,
                canObserveGame: {
                    type: Boolean,
                    default: !1
                },
                isBughousePartner: {
                    type: Boolean,
                    default: !1
                },
                challengeUrl: String,
                canCancelFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                canDeclineFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                canAcceptFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                archiveUrl: String,
                chatOptions: {
                    type: Array,
                    default: function _default() {
                        return []
                    }
                },
                position: {
                    type: Object,
                    default: function _default() {
                        return {}
                    }
                },
                canInviteToAnalysis: {
                    type: Boolean,
                    default: !1
                },
                analysisOptions: {
                    type: Array,
                    default: function _default() {
                        return []
                    }
                },
                isConfirmVisible: {
                    type: Boolean,
                    default: !1
                },
                showBughousePartner: {
                    type: Boolean,
                    default: !1
                },
                membershipUrl: String
            },
            data: function data() {
                return {
                    allActions: !1,
                    chatDropdownTarget: null,
                    analysisDropdownTarget: null,
                    buttonsListStyle: null
                }
            },
            computed: {
                showGlobalChatButton: function showGlobalChatButton() {
                    return this.canUseGlobalChat && !this.canInviteToChat
                }
            },
            methods: {
                getIconComponent: function getIconComponent(e) {
                    return e ? B : C.a
                },
                getIconLabeledComponent: function getIconLabeledComponent(e) {
                    return e ? q : F.a
                },
                hidePopover: function hidePopover() {
                    this.$emit("user-popover-hide")
                },
                onClickChallenge: function onClickChallenge(e) {
                    this.challengeUrl ? this.hidePopover() : (e.username = this.username, e.avatar = this.avatar, this.$emit("create-challenge", e))
                },
                onClickMessage: function onClickMessage(e) {
                    e.username = this.username, e.avatar = this.avatar, this.$emit("send-message", e)
                },
                onClickChat: function onClickChat(e) {
                    this.chatOptions.length ? this.chatDropdownTarget = e.target : this.onClickChatOption(e)
                },
                onClickChatOption: function onClickChatOption(e) {
                    this.hideChatDropdown(), this.$emit("request-chat", e)
                },
                onClickAnalysis: function onClickAnalysis(e) {
                    this.analysisDropdownTarget = e.target
                },
                onClickAnalysisOption: function onClickAnalysisOption(e) {
                    this.hideAnalysisDropdown(), this.$emit("invite-analysis", e)
                },
                onClickAddFriend: function onClickAddFriend() {
                    this.$emit("add-friend")
                },
                onClickCancelFriendRequest: function onClickCancelFriendRequest() {
                    this.$emit("cancel-friend-request")
                },
                onClickDeclineFriendRequest: function onClickDeclineFriendRequest() {
                    this.$emit("decline-friend-request")
                },
                onClickTrophy: function onClickTrophy(e) {
                    e.username = this.username, this.$emit("show-trophy", e)
                },
                onClickGift: function onClickGift() {
                    this.$emit("show-gift")
                },
                onClickArchive: function onClickArchive(e) {
                    this.archiveUrl ? this.hidePopover() : (e.username = this.username, this.$emit("show-archive", e))
                },
                onClickRemoveFriend: function onClickRemoveFriend() {
                    this.$emit("remove-friend")
                },
                onClickAcceptFriendRequest: function onClickAcceptFriendRequest() {
                    this.$emit("accept-friend-request")
                },
                onClickFollowUser: function onClickFollowUser() {
                    this.$emit("follow-user")
                },
                onClickUnfollowUser: function onClickUnfollowUser() {
                    this.$emit("unfollow-user")
                },
                onClickBlockUser: function onClickBlockUser() {
                    this.$emit("block-user")
                },
                onClickUnblockUser: function onClickUnblockUser() {
                    this.$emit("unblock-user")
                },
                onClickReport: function onClickReport() {
                    this.$emit("show-report")
                },
                onClickObserve: function onClickObserve() {
                    this.$emit("observe-user")
                },
                onClickPartner: function onClickPartner() {
                    this.$emit("bughouse-partner")
                },
                onClickUnpartner: function onClickUnpartner() {
                    this.$emit("bughouse-unpartner")
                },
                showAllActions: function showAllActions() {
                    var e = this;
                    this.allActions = !0, this.$nextTick(function() {
                        var t = document.getElementsByClassName(e.$style.buttonsList)[0];
                        if (t) {
                            var n = I()(t.children),
                                r = Math.max.apply(Math, I()(n.map(function(e) {
                                    return e.offsetHeight
                                })));
                            e.buttonsListStyle = {
                                height: "".concat(r * Math.round(n.length / 2), "px")
                            }
                        }
                        e.$nextTick(function() {
                            e.$emit("all-actions-shown")
                        })
                    })
                },
                startDirectChat: function startDirectChat() {
                    this.hidePopover(), this.$emit("start-direct-chat")
                },
                hideChatDropdown: function hideChatDropdown() {
                    this.chatDropdownTarget = null
                },
                hideAnalysisDropdown: function hideAnalysisDropdown() {
                    this.analysisDropdownTarget = null
                }
            }
        },
        Z = n(272);
    var X = Object(T.a)(J, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [e.allActions ? e._e() : n("div", {
                class: e.$style["icons-list"]
            }, [e.canCreateChallenge ? n(e.getIconComponent(e.challengeUrl), {
                tag: "component",
                attrs: {
                    "icon-name": "chess-board-plus",
                    label: e.$trans("Challenge"),
                    url: e.challengeUrl
                },
                on: {
                    click: e.onClickChallenge
                }
            }) : e._e(), e._v(" "), e.showGlobalChatButton ? n("icon-button", {
                attrs: {
                    "icon-name": "chat",
                    label: e.$trans("Chat")
                },
                on: {
                    click: e.startDirectChat
                }
            }) : e._e(), e._v(" "), e.canSendMessage ? n("icon-button", {
                attrs: {
                    "icon-name": "mail-plus",
                    label: e.$trans("Message")
                },
                on: {
                    click: e.onClickMessage
                }
            }) : e._e(), e._v(" "), e.canInviteToChat ? n("icon-button", {
                attrs: {
                    "icon-name": "chat",
                    label: e.$trans("Chat")
                },
                on: {
                    click: e.onClickChat
                }
            }) : e._e(), e._v(" "), e.canAddFriend ? n("icon-button", {
                attrs: {
                    "icon-name": "user-plus",
                    label: e.$trans("Add Friend")
                },
                on: {
                    click: e.onClickAddFriend
                }
            }) : e._e(), e._v(" "), e.canAcceptFriendRequest ? n("icon-button", {
                attrs: {
                    "icon-name": "user-plus",
                    label: e.$trans("Accept Request")
                },
                on: {
                    click: e.onClickAcceptFriendRequest
                }
            }) : e._e(), e._v(" "), e.canDeclineFriendRequest ? n("icon-button", {
                attrs: {
                    "btn-color": "grey",
                    "icon-name": "user-x",
                    label: e.$trans("Decline Request")
                },
                on: {
                    click: e.onClickDeclineFriendRequest
                }
            }) : e._e(), e._v(" "), e.canCancelFriendRequest ? n("icon-button", {
                attrs: {
                    "btn-color": "grey",
                    "icon-name": "user-x",
                    label: e.$trans("Cancel Request")
                },
                on: {
                    click: e.onClickCancelFriendRequest
                }
            }) : e._e(), e._v(" "), e.canRemoveFriend ? n("icon-button", {
                attrs: {
                    "icon-name": "user-x",
                    label: e.$trans("Remove Friend")
                },
                on: {
                    click: e.onClickRemoveFriend
                }
            }) : e._e(), e._v(" "), e.canGiftMembership ? n(e.getIconComponent(e.membershipUrl), {
                tag: "component",
                attrs: {
                    "btn-color": "blue",
                    "icon-color": "blue",
                    "icon-name": "display-slider",
                    label: e.$trans("Gift Membership"),
                    url: e.membershipUrl
                },
                on: {
                    click: e.onClickGift
                }
            }) : e._e(), e._v(" "), e.canObserveGame ? n("icon-button", {
                attrs: {
                    "icon-name": "binoculars",
                    label: e.$trans("Observe Game")
                },
                on: {
                    click: e.onClickObserve
                }
            }) : e._e(), e._v(" "), e.canReportUser ? n("icon-button", {
                attrs: {
                    "icon-name": "circle-danger",
                    label: e.$trans("Report")
                },
                on: {
                    click: e.onClickReport
                }
            }) : e._e(), e._v(" "), e.loggedAsAnother ? e._e() : n(e.getIconComponent(e.archiveUrl), {
                tag: "component",
                attrs: {
                    "icon-name": "chess-board-folder",
                    label: e.$trans("Archive"),
                    url: e.archiveUrl
                },
                on: {
                    click: e.onClickArchive
                }
            }), e._v(" "), e.loggedAsAnother && e.isEnabled ? n("button", {
                class: e.$style.more,
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.showAllActions
                }
            }, [e._v("\n      " + e._s(e.$trans("More")) + "\n      "), n("icon-font", {
                class: e.$style.caret,
                attrs: {
                    name: "caret-down",
                    theme: "primary"
                }
            })], 1) : e._e()], 1), e._v(" "), e.allActions && !e.isConfirmVisible ? n("div", {
                class: e.$style.buttonsList,
                style: e.buttonsListStyle
            }, [e.canCreateChallenge ? n(e.getIconLabeledComponent(e.challengeUrl), {
                tag: "component",
                attrs: {
                    "icon-name": "chess-board-plus",
                    label: e.$trans("Challenge"),
                    url: e.challengeUrl
                },
                on: {
                    click: e.onClickChallenge
                }
            }) : e._e(), e._v(" "), e.showGlobalChatButton ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "chat",
                    label: e.$trans("Chat")
                },
                on: {
                    click: e.startDirectChat
                }
            }) : e._e(), e._v(" "), e.canSendMessage ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "mail-plus",
                    label: e.$trans("Message")
                },
                on: {
                    click: e.onClickMessage
                }
            }) : e._e(), e._v(" "), e.canInviteToChat ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "chat",
                    label: e.$trans("Chat")
                },
                on: {
                    click: e.onClickChat
                }
            }) : e._e(), e._v(" "), e.canAddFriend ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "user-plus",
                    label: e.$trans("Add Friend")
                },
                on: {
                    click: e.onClickAddFriend
                }
            }) : e._e(), e._v(" "), e.canAcceptFriendRequest ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "user-plus",
                    label: e.$trans("Accept Request")
                },
                on: {
                    click: e.onClickAcceptFriendRequest
                }
            }) : e._e(), e._v(" "), e.canDeclineFriendRequest ? n("labeled-icon-button", {
                attrs: {
                    "btn-color": "grey",
                    "icon-name": "user-x",
                    label: e.$trans("Decline Request")
                },
                on: {
                    click: e.onClickDeclineFriendRequest
                }
            }) : e._e(), e._v(" "), e.canCancelFriendRequest ? n("labeled-icon-button", {
                attrs: {
                    "btn-color": "grey",
                    "icon-name": "user-x",
                    label: e.$trans("Cancel Request")
                },
                on: {
                    click: e.onClickCancelFriendRequest
                }
            }) : e._e(), e._v(" "), e.canRemoveFriend ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "user-x",
                    label: e.$trans("Remove Friend")
                },
                on: {
                    click: e.onClickRemoveFriend
                }
            }) : e._e(), e._v(" "), e.canObserveGame ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "binoculars",
                    label: e.$trans("Observe")
                },
                on: {
                    click: e.onClickObserve
                }
            }) : e._e(), e._v(" "), e.canFollowUser ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "follow",
                    label: e.$trans("Follow")
                },
                on: {
                    click: e.onClickFollowUser
                }
            }) : e._e(), e._v(" "), e.canUnfollowUser ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "unfollow",
                    label: e.$trans("Unfollow")
                },
                on: {
                    click: e.onClickUnfollowUser
                }
            }) : e._e(), e._v(" "), e.canGiftMembership ? n("labeled-icon-button", {
                attrs: {
                    "btn-color": "blue",
                    "icon-name": "display-slider",
                    label: e.$trans("Gift Membership")
                },
                on: {
                    click: e.onClickGift
                }
            }) : e._e(), e._v(" "), e.canSendTrophy ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "trophy-plus",
                    label: e.$trans("Give Award")
                },
                on: {
                    click: e.onClickTrophy
                }
            }) : e._e(), e._v(" "), e.showBughousePartner && !e.isBughousePartner ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "bughouse",
                    label: e.$trans("Partner")
                },
                on: {
                    click: e.onClickPartner
                }
            }) : e._e(), e._v(" "), e.showBughousePartner && e.isBughousePartner ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "bughouse",
                    label: e.$trans("Unpartner")
                },
                on: {
                    click: e.onClickUnpartner
                }
            }) : e._e(), e._v(" "), e.canInviteToAnalysis ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "chess-board-search",
                    label: e.$trans("Analysis Board")
                },
                on: {
                    click: e.onClickAnalysis
                }
            }) : e._e(), e._v(" "), n(e.getIconLabeledComponent(e.archiveUrl), {
                tag: "component",
                attrs: {
                    "icon-name": "chess-board-folder",
                    label: e.$trans("Archive"),
                    url: e.archiveUrl
                },
                on: {
                    click: e.onClickArchive
                }
            }), e._v(" "), e.canBlockUser ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "circle-block",
                    label: e.$trans("Block")
                },
                on: {
                    click: e.onClickBlockUser
                }
            }) : e._e(), e._v(" "), e.canUnblockUser ? n("labeled-icon-button", {
                attrs: {
                    "btn-color": "red",
                    "icon-name": "circle-block",
                    label: e.$trans("Unblock")
                },
                on: {
                    click: e.onClickUnblockUser
                }
            }) : e._e(), e._v(" "), e.canReportUser ? n("labeled-icon-button", {
                attrs: {
                    "icon-name": "circle-danger",
                    label: e.$trans("Report")
                },
                on: {
                    click: e.onClickReport
                }
            }) : e._e()], 1) : e._e(), e._v(" "), e.chatDropdownTarget ? n("chat-options-dropdown", {
                attrs: {
                    target: e.chatDropdownTarget,
                    position: e.position,
                    "chat-options": e.chatOptions
                },
                on: {
                    "option-selected": e.onClickChatOption,
                    hide: e.hideChatDropdown
                }
            }) : e._e(), e._v(" "), e.analysisDropdownTarget ? n("analysis-options-dropdown", {
                attrs: {
                    target: e.analysisDropdownTarget,
                    position: e.position,
                    "analysis-options": e.analysisOptions
                },
                on: {
                    "option-selected": e.onClickAnalysisOption,
                    hide: e.hideAnalysisDropdown
                }
            }) : e._e()], 1)
        }, [], !1, function user_actions_injectStyles(e) {
            this.$style = Z.default.locals || Z.default
        }, null, null).exports,
        ee = n(253),
        te = {
            name: "user-flair-status",
            props: {
                status: {
                    type: String,
                    required: !0
                }
            }
        },
        ne = n(273);
    var re = Object(T.a)(te, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return this.status.length ? t("div", {
                class: this.$style.component,
                domProps: {
                    textContent: this._s(this.status)
                }
            }) : this._e()
        }, [], !1, function user_flair_status_injectStyles(e) {
            this.$style = ne.default.locals || ne.default
        }, null, null).exports,
        ae = {
            name: "user-rating",
            components: {
                IconFont: R.a
            },
            props: {
                icon: {
                    type: String,
                    required: !0
                },
                rating: {
                    type: Number,
                    required: !0
                }
            }
        },
        oe = n(274);
    var ie = Object(T.a)(ae, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("span", {
                class: e.$style.component
            }, [n("icon-font", {
                class: e.$style.icon,
                attrs: {
                    theme: "primary",
                    name: e.icon
                }
            }), e._v(" "), n("span", {
                class: e.$style.rating
            }, [e._v("\n    " + e._s(e.rating) + "\n  ")])], 1)
        }, [], !1, function user_rating_injectStyles(e) {
            this.$style = oe.default.locals || oe.default
        }, null, null).exports,
        se = n(316),
        ce = {
            name: "user-popover",
            components: {
                LoaderThreeBounce: M.a,
                UserAvatar: ee.a,
                UserFlairStatus: re,
                UserRating: ie,
                UserTagline: se.a,
                UserActions: X,
                FormButton: j.a,
                AdminActions: P
            },
            directives: {
                Tooltip: L.a,
                ClickOutside: x.a
            },
            props: {
                avatar: {
                    type: String,
                    required: !0
                },
                ratings: {
                    type: Array,
                    required: !0
                },
                chessTitle: {
                    type: String,
                    required: !1
                },
                country: {
                    type: Object,
                    required: !1
                },
                flair: {
                    type: Object,
                    default: function _default() {
                        return {
                            code: "",
                            status: ""
                        }
                    }
                },
                isEnabled: {
                    type: Boolean
                },
                isLoading: {
                    type: Boolean,
                    default: !1
                },
                joinedDate: String,
                lastLoginDate: String,
                membership: {
                    type: Number,
                    required: !1
                },
                onlineStatus: {
                    type: [Boolean, String],
                    required: !1
                },
                usernameElementRef: {
                    type: HTMLElement,
                    required: !0
                },
                username: {
                    type: String,
                    required: !1
                },
                canAddFriend: Boolean,
                canBlockUser: Boolean,
                canUseGlobalChat: Boolean,
                canReportUser: Boolean,
                canCreateChallenge: Boolean,
                canFollowUser: Boolean,
                canGiftMembership: Boolean,
                canRemoveFriend: Boolean,
                canSendMessage: Boolean,
                canInviteToChat: Boolean,
                canSendTrophy: Boolean,
                canUnblockUser: Boolean,
                canUnfollowUser: Boolean,
                loggedAsAnother: Boolean,
                canMuteUser: {
                    type: Boolean,
                    default: !1
                },
                canObserveGame: {
                    type: Boolean,
                    default: !1
                },
                isBughousePartner: {
                    type: Boolean,
                    default: !1
                },
                shouldShowModeration: {
                    type: Boolean,
                    default: !1
                },
                challengeUrl: String,
                canCancelFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                canDeclineFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                canAcceptFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                archiveUrl: String,
                chatOptions: {
                    type: Array,
                    default: function _default() {
                        return []
                    }
                },
                canInviteToAnalysis: {
                    type: Boolean,
                    default: !1
                },
                analysisOptions: {
                    type: Array,
                    default: function _default() {
                        return []
                    }
                },
                canModerate: {
                    type: Boolean,
                    default: !1
                },
                clientName: String,
                canWarnOnChat: Boolean,
                canModerateOnChat: Boolean,
                showBughousePartner: {
                    type: Boolean,
                    default: !1
                },
                openProfileOnNewTab: {
                    type: Boolean,
                    required: !1
                },
                membershipUrl: String
            },
            data: function data() {
                return {
                    isLive: y.i,
                    isOnline: y.j,
                    offset: 12,
                    translations: y.p,
                    confirmMessage: null,
                    confirmCallback: null,
                    position: {
                        x: 0,
                        y: 0,
                        top: 0,
                        left: 0
                    }
                }
            },
            computed: {
                adminActionsIsVisible: function adminActionsIsVisible() {
                    return this.canModerate || this.canWarnOnChat || this.canModerateOnChat
                },
                memberUrl: function memberUrl() {
                    return O.a.generate("web_member_view", {
                        username: this.username
                    })
                },
                ratingsToShow: function ratingsToShow() {
                    return this.ratings.slice(0, 3)
                },
                isConfirmVisible: function isConfirmVisible() {
                    return !!this.confirmMessage && !!this.confirmCallback
                },
                inlineStyles: function inlineStyles() {
                    return setPopoverPosition(this.position)
                }
            },
            mounted: function mounted() {
                this.updatePopoverPosition()
            },
            methods: {
                onMouseEnter: function onMouseEnter() {
                    clearTimeout(this.hideTimeout)
                },
                onMouseLeave: function onMouseLeave() {
                    var e = this;
                    this.hideTimeout = setTimeout(function() {
                        e.hidePopover()
                    }, 500)
                },
                hidePopover: function hidePopover() {
                    this.$emit("user-popover-hide")
                },
                onConfirmYes: function onConfirmYes() {
                    this.confirmCallback && this.confirmCallback(), this.onConfirmNo()
                },
                onConfirmNo: function onConfirmNo() {
                    this.confirmMessage = null, this.confirmCallback = null
                },
                onClickRemoveFriend: function onClickRemoveFriend() {
                    var e = this;
                    this.confirmMessage = this.$trans("Are you sure you want to remove this friend from your list?"), this.confirmCallback = function() {
                        return e.$emit("remove-friend")
                    }
                },
                onClickBlockUser: function onClickBlockUser() {
                    var e = this;
                    this.confirmMessage = this.$trans("Are you sure you want to block this user?"), this.confirmCallback = function() {
                        return e.$emit("block-user")
                    }
                },
                onClickWarn: function onClickWarn() {
                    var e = this;
                    this.confirmMessage = this.$trans("Are you sure you want to warn this user?"), this.confirmCallback = function() {
                        return e.$emit("warn-user")
                    }
                },
                onClickMute: function onClickMute() {
                    var e = this;
                    this.confirmMessage = this.$trans("Are you sure you want to mute this user?"), this.confirmCallback = function() {
                        return e.$emit("mute-user")
                    }
                },
                onClickKick: function onClickKick() {
                    var e = this;
                    this.confirmMessage = this.$trans("Are you sure you want to kick this user?"), this.confirmCallback = function() {
                        return e.$emit("kick-user")
                    }
                },
                onClickBan: function onClickBan() {
                    var e = this;
                    this.confirmMessage = this.$trans("Are you sure you want to ban this user?"), this.confirmCallback = function() {
                        return e.$emit("ban-user")
                    }
                },
                onClickChatWarn: function onClickChatWarn() {
                    var e = this;
                    this.confirmMessage = this.$trans("Are you sure you want to warn this user?"), this.confirmCallback = function() {
                        return e.$emit("chat-warn-user")
                    }
                },
                onClickChatMute: function onClickChatMute() {
                    var e = this;
                    this.confirmMessage = this.$trans("Are you sure you want to mute this user?"), this.confirmCallback = function() {
                        return e.$emit("chat-mute-user")
                    }
                },
                onClickChatKick: function onClickChatKick() {
                    var e = this;
                    this.confirmMessage = this.$trans("Are you sure you want to kick this user?"), this.confirmCallback = function() {
                        return e.$emit("chat-kick-user")
                    }
                },
                updatePopoverPosition: function updatePopoverPosition() {
                    if (this.usernameElementRef && this.$refs.userPopover) {
                        var e = this.usernameElementRef.getBoundingClientRect(),
                            t = this.$refs.userPopover.offsetHeight;
                        this.position = Object(b.b)(e, t)
                    }
                }
            }
        },
        le = n(277);
    var ue = Object(T.a)(ce, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: e.onMouseLeave,
                    expression: "onMouseLeave"
                }],
                ref: "userPopover",
                class: [e.$style.popover, e.$style[e.position.x], e.$style[e.position.y]],
                style: e.inlineStyles,
                on: {
                    mouseenter: e.onMouseEnter,
                    mouseleave: e.onMouseLeave
                }
            }, [n("div", {
                class: e.$style.component
            }, [n("div", {
                class: e.$style.profile
            }, [n("div", {
                class: e.$style.meta
            }, [e.username ? n("user-avatar", {
                attrs: {
                    image: e.avatar,
                    "is-live": e.onlineStatus && e.isLive(e.onlineStatus),
                    "is-online": e.onlineStatus && e.isOnline(e.onlineStatus),
                    url: e.memberUrl
                }
            }) : e._e(), e._v(" "), e.username ? e._e() : n("div", {
                class: e.$style["avatar-placeholder"]
            }), e._v(" "), e.username ? n("div", {
                class: e.$style.info
            }, [n("user-tagline", {
                attrs: {
                    "username-theme": "blue",
                    country: e.country,
                    "flair-code": e.flair ? e.flair.code : "",
                    membership: e.membership,
                    "open-profile-on-new-tab": e.openProfileOnNewTab,
                    title: e.chessTitle,
                    url: e.memberUrl,
                    username: e.username
                }
            }), e._v(" "), n("user-flair-status", {
                attrs: {
                    status: e.flair ? e.flair.status : ""
                }
            }), e._v(" "), n("div", {
                class: e.$style.ratings
            }, e._l(e.ratingsToShow, function(e) {
                return n("user-rating", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: e.label,
                        expression: "rating.label"
                    }],
                    key: e.type,
                    attrs: {
                        icon: e.icon,
                        rating: e.value
                    }
                })
            }), 1)], 1) : e._e(), e._v(" "), e.username ? e._e() : n("div", {
                class: e.$style.info
            }, [n("loader-three-bounce", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isLoading,
                    expression: "isLoading"
                }],
                class: e.$style.loader,
                attrs: {
                    size: 40
                }
            })], 1)], 1), e._v(" "), e.joinedDate && e.username ? n("div", {
                class: e.$style.secondary
            }, [n("div", {
                domProps: {
                    textContent: e._s(e.translations.joinedDate(e.joinedDate))
                }
            }), e._v(" "), n("div", {
                class: e.$style.status
            }, [e.isLive(e.onlineStatus) ? n("div", {
                class: e.$style.onlive,
                domProps: {
                    textContent: e._s(e.translations.inLiveNow)
                }
            }) : e._e(), e._v(" "), e.isOnline(e.onlineStatus) ? n("div", {
                class: e.$style.online,
                domProps: {
                    textContent: e._s(e.translations.onlineNow)
                }
            }) : e._e(), e._v(" "), !e.lastLoginDate || e.isOnline(e.onlineStatus) || e.isLive(e.onlineStatus) ? e._e() : n("div", {
                domProps: {
                    textContent: e._s(e.translations.lastOnline(e.lastLoginDate))
                }
            })])]) : e._e(), e._v(" "), e.username ? e._e() : n("div", {
                class: e.$style.secondary
            })]), e._v(" "), e.adminActionsIsVisible ? n("admin-actions", {
                attrs: {
                    "can-moderate": e.canModerate,
                    "client-name": e.clientName,
                    "can-warn-on-chat": e.canWarnOnChat,
                    "can-moderate-on-chat": e.canModerateOnChat
                },
                on: {
                    "warn-user": e.onClickWarn,
                    "mute-user": e.onClickMute,
                    "kick-user": e.onClickKick,
                    "ban-user": e.onClickBan,
                    "chat-warn-user": e.onClickChatWarn,
                    "chat-mute-user": e.onClickChatMute,
                    "chat-kick-user": e.onClickChatKick
                }
            }) : e._e(), e._v(" "), n("div", {
                class: e.$style.actions
            }, [e.username ? n("user-actions", {
                attrs: {
                    avatar: e.avatar,
                    "can-add-friend": e.canAddFriend,
                    "can-block-user": e.canBlockUser,
                    "can-create-challenge": e.canCreateChallenge,
                    "can-follow-user": e.canFollowUser,
                    "can-gift-membership": e.canGiftMembership,
                    "can-remove-friend": e.canRemoveFriend,
                    "can-report-user": e.canReportUser,
                    "can-send-message": e.canSendMessage,
                    "can-invite-to-chat": e.canInviteToChat,
                    "can-send-trophy": e.canSendTrophy,
                    "can-unblock-user": e.canUnblockUser,
                    "can-unfollow-user": e.canUnfollowUser,
                    "can-use-global-chat": e.canUseGlobalChat,
                    "can-cancel-friend-request": e.canCancelFriendRequest,
                    "can-decline-friend-request": e.canDeclineFriendRequest,
                    "can-accept-friend-request": e.canAcceptFriendRequest,
                    "logged-as-another": e.loggedAsAnother,
                    username: e.username,
                    "can-observe-game": e.canObserveGame,
                    "is-bughouse-partner": e.isBughousePartner,
                    "challenge-url": e.challengeUrl,
                    "archive-url": e.archiveUrl,
                    "chat-options": e.chatOptions,
                    position: e.position,
                    "can-invite-to-analysis": e.canInviteToAnalysis,
                    "analysis-options": e.analysisOptions,
                    "is-enabled": e.isEnabled,
                    "is-confirm-visible": e.isConfirmVisible,
                    "show-bughouse-partner": e.showBughousePartner,
                    "membership-url": e.membershipUrl
                },
                on: {
                    "all-actions-shown": e.updatePopoverPosition,
                    "remove-friend": e.onClickRemoveFriend,
                    "block-user": e.onClickBlockUser,
                    "user-popover-hide": e.hidePopover,
                    "create-challenge": function(t) {
                        return e.$emit("create-challenge", t)
                    },
                    "send-message": function(t) {
                        return e.$emit("send-message", t)
                    },
                    "add-friend": function(t) {
                        return e.$emit("add-friend", t)
                    },
                    "cancel-friend-request": function(t) {
                        return e.$emit("cancel-friend-request", t)
                    },
                    "decline-friend-request": function(t) {
                        return e.$emit("decline-friend-request", t)
                    },
                    "show-gift": function(t) {
                        return e.$emit("show-gift", t)
                    },
                    "show-archive": function(t) {
                        return e.$emit("show-archive", t)
                    },
                    "start-direct-chat": function(t) {
                        return e.$emit("start-direct-chat")
                    },
                    "mute-user": function(t) {
                        return e.$emit("mute-user", t)
                    },
                    "accept-friend-request": function(t) {
                        return e.$emit("accept-friend-request", t)
                    },
                    "follow-user": function(t) {
                        return e.$emit("follow-user", t)
                    },
                    "unfollow-user": function(t) {
                        return e.$emit("unfollow-user", t)
                    },
                    "unblock-user": function(t) {
                        return e.$emit("unblock-user", t)
                    },
                    "show-report": function(t) {
                        return e.$emit("show-report", t)
                    },
                    "show-trophy": function(t) {
                        return e.$emit("show-trophy", t)
                    },
                    "observe-user": function(t) {
                        return e.$emit("observe-user", t)
                    },
                    "bughouse-partner": function(t) {
                        return e.$emit("bughouse-partner", t)
                    },
                    "bughouse-unpartner": function(t) {
                        return e.$emit("bughouse-unpartner", t)
                    },
                    "request-chat": function(t) {
                        return e.$emit("request-chat", t)
                    },
                    "invite-analysis": function(t) {
                        return e.$emit("invite-analysis", t)
                    }
                }
            }) : e._e()], 1)], 1), e._v(" "), e.isConfirmVisible ? n("div", {
                class: e.$style.confirm
            }, [n("p", {
                domProps: {
                    innerHTML: e._s(e.confirmMessage)
                }
            }), e._v(" "), n("div", [n("form-button", {
                attrs: {
                    size: "small",
                    theme: "basic"
                },
                on: {
                    click: e.onConfirmNo
                }
            }, [e._v("\n        " + e._s(e.$trans("No")) + "\n      ")]), e._v(" "), n("form-button", {
                attrs: {
                    size: "small",
                    theme: "primary"
                },
                on: {
                    click: e.onConfirmYes
                }
            }, [e._v("\n        " + e._s(e.$trans("Yes")) + "\n      ")])], 1)]) : e._e()])
        }, [], !1, function user_popover_injectStyles(e) {
            this.$style = le.default.locals || le.default
        }, null, null).exports,
        de = n(314);

    function user_popovervue_type_script_lang_js_ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }

    function user_popovervue_type_script_lang_js_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? user_popovervue_type_script_lang_js_ownKeys(n, !0).forEach(function(t) {
                p()(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : user_popovervue_type_script_lang_js_ownKeys(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var pe = {
            name: "user-popover-widget",
            components: {
                giftMembershipModal: _.a,
                UserReportModal: de.a,
                UserPopover: ue,
                TrophyPopover: k.a
            },
            data: function data() {
                return {
                    clickListener: null,
                    isLoading: !1,
                    showGiftMembershipModal: !1,
                    isUserReportModalVisible: !1,
                    isChallengePopoverVisible: !1,
                    isTrophyPopoverVisible: !1,
                    scrollContainer: null,
                    elementRef: null
                }
            },
            computed: user_popovervue_type_script_lang_js_objectSpread({}, Object(v.mapState)({
                show: function show(e) {
                    return e.userPopover.show
                },
                user: function user(e) {
                    return e.userPopover.user
                },
                username: function username(e) {
                    return e.user.username
                },
                position: function position(e) {
                    return e.userPopover.position
                }
            }), {
                ratings: function ratings() {
                    var e = this.user,
                        t = e.bestRating,
                        n = e.bestRatingType,
                        r = e.topPuzzleRushScore,
                        ratings = [{
                            type: n,
                            icon: n,
                            value: t
                        }];
                    return r && ratings.push({
                        type: "puzzle",
                        icon: "fire-puzzle",
                        value: r
                    }), ratings
                },
                canAddFriend: function canAddFriend() {
                    return this.loggedAsAnother && !this.user.areFriends && !this.user.isFriendRequestFromUserExists && !this.user.isFriendRequestExists && this.user.isEnabled
                },
                canBlockUser: function canBlockUser() {
                    return this.loggedAsAnother && !this.user.areFriends && !this.user.isBlocked && this.user.isEnabled && this.user.membership && this.user.membership.level < y.k.moderator
                },
                canUseGlobalChat: function canUseGlobalChat() {
                    return this.loggedAsAnother && this.user.isEnabled
                },
                canCreateChallenge: function canCreateChallenge() {
                    return this.loggedAsAnother && this.user.isEnabled
                },
                canFollowUser: function canFollowUser() {
                    return this.loggedAsAnother && !this.user.isTracked && this.user.isEnabled
                },
                canGiftMembership: function canGiftMembership() {
                    return this.user.canReceiveGiftMembership && this.user.isEnabled
                },
                canRemoveFriend: function canRemoveFriend() {
                    return this.loggedAsAnother && this.user.areFriends
                },
                canReportUser: function canReportUser() {
                    return this.loggedAsAnother && !this.user.isModerator && !this.user.isStaff
                },
                canSendMessage: function canSendMessage() {
                    return this.loggedAsAnother && this.user.isMessageable && this.user.isEnabled
                },
                canSendTrophy: function canSendTrophy() {
                    return this.canSendMessage && this.user.isEnabled
                },
                canUnblockUser: function canUnblockUser() {
                    return this.loggedAsAnother && this.user.isBlocked && this.user.isEnabled
                },
                canUnfollowUser: function canUnfollowUser() {
                    return this.loggedAsAnother && this.user.isTracked && this.user.isEnabled
                },
                hasInboundFriendRequest: function hasInboundFriendRequest() {
                    return this.loggedAsAnother && this.user.isFriendRequestFromUserExists
                },
                hasOutboundFriendRequest: function hasOutboundFriendRequest() {
                    return this.loggedAsAnother && this.user.isFriendRequestExists
                },
                canCancelFriendRequest: function canCancelFriendRequest() {
                    return this.hasOutboundFriendRequest && !this.hasInboundFriendRequest
                },
                canAcceptFriendRequest: function canAcceptFriendRequest() {
                    return this.hasInboundFriendRequest
                },
                loggedAsAnother: function loggedAsAnother() {
                    return this.username && this.username !== this.user.username
                },
                membershipNumber: function membershipNumber() {
                    return Object(g.e)(this.user.membership ? this.user.membership.level : null, this.user.isEnabled)
                },
                inlineStyles: function inlineStyles() {
                    return setPopoverPosition(this.position)
                },
                areFriends: function areFriends() {
                    return this.user.areFriends
                }
            }),
            created: function created() {
                Object(r.a)({
                    modalMessages: w,
                    trophies: E.a
                })
            },
            mounted: function mounted() {
                var e = this;
                this.scrollContainer = document.querySelector(".base-container") || document.body, o.a.$on("userPopover/show", function(t, n) {
                    if (e.$store.dispatch("userPopover/fetchUserPopover", t).then(function() {
                            e.isLoading = !1
                        }), e.$store.commit("userPopover/resetUser"), null != t) {
                        e.clickListener = document.addEventListener("click", function(t) {
                            (e.user.userNotExist || e.$refs.userPopover && t.target !== e.$refs.userPopover.$el && !e.$refs.userPopover.$el.contains(t.target) && !document.getElementById(y.n.USER_POPOVER_CONTAINER).contains(t.target)) && e.hideUserPopup()
                        }, !0), setTimeout(function() {
                            e.user.username || e.user.userNotExist || (e.isLoading = !0)
                        }, 500), e.scrollContainer.addEventListener("scroll", e.hideUserPopup), e.elementRef = n;
                        var r = Object(b.b)(n.getBoundingClientRect());
                        e.$store.commit("userPopover/setPosition", r), e.$store.commit("userPopover/showUserPopover")
                    }
                }), o.a.$on("userPopover/hide", this.hideUserPopup)
            },
            beforeDestroy: function beforeDestroy() {
                this.removeListeners()
            },
            methods: user_popovervue_type_script_lang_js_objectSpread({}, Object(v.mapMutations)({
                hideUserPopover: "userPopover/hideUserPopover",
                setRecipientIsFriend: "trophies/setRecipientIsFriend",
                setRecipientUsername: "trophies/setRecipientUsername"
            }), {
                onChallenge: function onChallenge(e) {
                    this.hideUserPopup(), window.postMessage({
                        key: h.c.SHOW_NEW_GAME_MODAL,
                        challengeUser: {
                            avatar_url: e.avatar,
                            username: e.username
                        }
                    }, window.location.origin)
                },
                onMessage: function onMessage(e) {
                    this.hideUserPopup(), window.postMessage({
                        event: "SHOW_MESSAGE_MODAL",
                        user: {
                            avatar_url: e.avatar,
                            username: e.username
                        }
                    }, window.location.origin)
                },
                onTrophy: function onTrophy(e) {
                    this.hideUserPopup(), this.setRecipientUsername(e.username), this.isTrophyPopoverVisible = !0
                },
                acceptFriendRequest: function acceptFriendRequest() {
                    this.$store.dispatch("user/approveFriendRequest", this.user.username).then(this.reload)
                },
                addFriend: function addFriend() {
                    this.$store.dispatch("user/addFriend", this.user.username).then(this.reload)
                },
                blockUser: function blockUser() {
                    this.$store.dispatch("user/blockUser", this.user.username).then(this.reload)
                },
                cancelFriendRequest: function cancelFriendRequest() {
                    this.$store.dispatch("user/cancelFriendRequest", this.user.username).then(this.reload)
                },
                deleteFriend: function deleteFriend() {
                    this.$store.dispatch("user/deleteFriend", this.user.username).then(this.reload)
                },
                hideUserPopup: function hideUserPopup() {
                    this.setRecipientIsFriend(this.areFriends), this.hideUserPopover(), this.removeListeners(), this.isLoading = !1
                },
                reload: function reload() {
                    return this.$store.dispatch("userPopover/fetchUserPopover", this.user.username)
                },
                removeListeners: function removeListeners() {
                    document.removeEventListener("click", this.clickListener, !0), this.scrollContainer.removeEventListener("scroll", this.hideUserPopup)
                },
                trackUser: function trackUser() {
                    this.$store.dispatch("user/trackUser", this.user.username).then(this.reload)
                },
                unblockUser: function unblockUser() {
                    this.$store.dispatch("user/unblockUser", this.user.username).then(this.reload)
                },
                untrackUser: function untrackUser() {
                    this.$store.dispatch("user/untrackUser", this.user.username).then(this.reload)
                },
                showGiftModal: function showGiftModal() {
                    this.hideUserPopup(), this.showGiftMembershipModal = !0
                },
                hideGiftMembershipModal: function hideGiftMembershipModal() {
                    this.showGiftMembershipModal = !1
                },
                showReportModal: function showReportModal() {
                    this.hideUserPopup(), this.isUserReportModalVisible = !0
                },
                hideUserReportModal: function hideUserReportModal() {
                    this.isUserReportModalVisible = !1
                },
                hideChallengePopover: function hideChallengePopover() {
                    this.isChallengePopoverVisible = !1
                },
                hideTrophyPopover: function hideTrophyPopover() {
                    this.isTrophyPopoverVisible = !1
                },
                showArchive: function showArchive(e) {
                    window.location.href = O.a.generate("web_archive_index", {
                        username: e.username
                    })
                },
                startDirectChat: function startDirectChat() {
                    var e = h.c.START_DIRECT_CHAT,
                        t = {
                            avatarUrl: this.user.avatarUrl,
                            id: this.user.uuid,
                            username: this.user.username
                        };
                    window.postMessage({
                        key: e,
                        payload: t
                    }, window.location.origin)
                }
            })
        },
        me = n(280);
    var fe = Object(T.a)(pe, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", [e.user.userNotExist ? e._e() : n("div", {
            attrs: {
                id: "user-popover"
            }
        }, [e.show ? n("user-popover", {
            ref: "userPopover",
            attrs: {
                avatar: e.user.avatarUrl,
                "can-add-friend": e.canAddFriend,
                "can-block-user": e.canBlockUser,
                "can-create-challenge": e.canCreateChallenge,
                "can-follow-user": e.canFollowUser,
                "can-gift-membership": e.canGiftMembership,
                "can-remove-friend": e.canRemoveFriend,
                "can-report-user": e.canReportUser,
                "can-send-message": e.canSendMessage,
                "can-send-trophy": e.canSendTrophy,
                "can-unblock-user": e.canUnblockUser,
                "can-unfollow-user": e.canUnfollowUser,
                "can-use-global-chat": e.canUseGlobalChat,
                "can-cancel-friend-request": e.canCancelFriendRequest,
                "can-accept-friend-request": e.canAcceptFriendRequest,
                "chess-title": e.user.chessTitle,
                country: {
                    name: e.user.countryName,
                    code: e.user.countryId
                },
                flair: e.user.flair,
                "is-enabled": e.user.isEnabled,
                "is-loading": e.isLoading,
                "joined-date": e.user.joinDate,
                "last-login-date": e.user.lastLoginDate,
                "logged-as-another": e.loggedAsAnother,
                membership: e.membershipNumber,
                "online-status": e.user.onlineStatus,
                ratings: e.ratings,
                username: e.user.username,
                "username-element-ref": e.elementRef
            },
            on: {
                "accept-friend-request": e.acceptFriendRequest,
                "add-friend": e.addFriend,
                "block-user": e.blockUser,
                "cancel-friend-request": e.cancelFriendRequest,
                "create-challenge": e.onChallenge,
                "follow-user": e.trackUser,
                "remove-friend": e.deleteFriend,
                "send-message": e.onMessage,
                "show-archive": e.showArchive,
                "show-gift": e.showGiftModal,
                "show-report": e.showReportModal,
                "show-trophy": e.onTrophy,
                "start-direct-chat": e.startDirectChat,
                "unblock-user": e.unblockUser,
                "unfollow-user": e.untrackUser,
                "user-popover-hide": e.hideUserPopup
            }
        }) : e._e(), e._v(" "), e.isUserReportModalVisible ? n("user-report-modal", {
            attrs: {
                username: e.user.username
            },
            on: {
                "modal-did-hide": e.hideUserReportModal
            }
        }) : e._e(), e._v(" "), e.showGiftMembershipModal ? n("gift-membership-modal", {
            attrs: {
                "receiver-username": e.user.username,
                "receiver-id": e.user.userId,
                "sender-username": e.username
            },
            on: {
                "hide-modal": e.hideGiftMembershipModal
            }
        }) : e._e(), e._v(" "), e.isTrophyPopoverVisible ? n("trophy-popover", {
            on: {
                hide: e.hideTrophyPopover
            }
        }) : e._e()], 1), e._v(" "), e.user.userNotExist && e.show ? n("div", {
            class: [e.$style["placeholder-popover"], e.$style[e.position.x], e.$style[e.position.y]],
            style: e.inlineStyles
        }, [n("div", {
            class: e.$style["placeholder-component"]
        }, [n("div", {
            class: e.$style["placeholder-profile"]
        }, [n("div", {
            class: e.$style["placeholder-avatar"]
        }), e._v(" "), n("div", {
            class: e.$style["placeholder-info"],
            domProps: {
                textContent: e._s(e.$trans("Member name does not exist"))
            }
        })])])]) : e._e()])
    }, [], !1, function user_user_popover_injectStyles(e) {
        this.$style = me.default.locals || me.default
    }, null, null).exports;
    n.d(t, "b", function() {
        return ge
    }), Object(r.a)({
        user: s.a,
        userPopover: f
    });
    var he, ge = Object(a.a)({
            userPopover: {
                component: fe,
                el: "#user-popover",
                store: i.default
            }
        }),
        be = document.querySelector(".base-container") || document.body,
        ve = 0,
        ye = function documentClickListener(e) {
            var t = document.getElementById("userPopover");
            if (!t || e.target !== t && !t.contains(e.target)) {
                document.removeEventListener("click", documentClickListener, !0);
                var n = !he || e.target !== he && !he.contains(e.target),
                    r = null === he.getAttribute("href");
                n ? ve = 0 : r && setTimeout(function() {
                    ve = 0
                }, 0)
            }
        },
        _e = function documentScrollListener() {
            be.removeEventListener("scroll", documentScrollListener), ve = 0
        },
        we = function directiveClickListener(e) {
            he = e.target, 0 === ve && (ve += 1, ge.createInstance("userPopover"), o.a.$emit("userPopover/show", e.currentTarget.dataset.username, e.target), e.preventDefault(), document.addEventListener("click", ye, !0), be.addEventListener("scroll", _e))
        };
    t.a = {
        bind: function bind(e, t) {
            if (!t.value) return !1;
            e.dataset.username = t.value, e.addEventListener("click", we)
        },
        unbind: function unbind(e) {
            e.removeEventListener("click", we)
        },
        update: function update(e, t) {
            e.dataset.username = t.value
        }
    }
}, , , function(e, t, n) {
    var r = n(137)(n(74), "Map");
    e.exports = r
}, function(e, t, n) {
    var r = n(211)(Object.getPrototypeOf, Object);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }), n.d(t, "b", function() {
        return a
    });
    var r = function pixelDensity(e, t) {
            if (e) {
                var n = "@2x";
                return /\.svg$/.test(e) ? e : ([1.5, 3, 4].indexOf(t) > -1 && (n = "@".concat(t, "x")), e.replace(/(\.\w+)$/, function(e) {
                    return n + e
                }))
            }
        },
        a = function retinaImageSrcset(e) {
            if (!e) return null;
            var t = e.substring(e.lastIndexOf("/") + 1),
                n = e.replace(t, "");
            return "".concat(e, ", ").concat(n).concat(r(t), " 2x")
        }
}, , function(e, t) {
    e.exports = function createBaseFor(e) {
        return function(t, n, r) {
            for (var a = -1, o = Object(t), i = r(t), s = i.length; s--;) {
                var c = i[e ? s : ++a];
                if (!1 === n(o[c], c, o)) break
            }
            return t
        }
    }
}, function(e, t) {
    e.exports = function baseTimes(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }
}, function(e, t, n) {
    var r = n(85),
        a = n(66),
        o = "[object Arguments]";
    e.exports = function baseIsArguments(e) {
        return a(e) && r(e) == o
    }
}, function(e, t) {
    e.exports = function stubFalse() {
        return !1
    }
}, function(e, t, n) {
    var r = n(85),
        a = n(151),
        o = n(66),
        i = {};
    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function baseIsTypedArray(e) {
        return o(e) && a(e.length) && !!i[r(e)]
    }
}, function(e, t, n) {
    e.exports = n(26)(79)
}, function(e, t, n) {
    var r = n(131),
        a = n(298),
        o = Object.prototype.hasOwnProperty;
    e.exports = function baseKeys(e) {
        if (!r(e)) return a(e);
        var t = [];
        for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
        return t
    }
}, function(e, t, n) {
    var r = n(211)(Object.keys, Object);
    e.exports = r
}, , function(e, t, n) {
    "use strict";
    var r, a = n(7),
        o = n(0),
        i = ["encryptedCardNumber", "encryptedExpiryMonth", "encryptedExpiryYear", "encryptedSecurityCode"],
        s = {
            blocked: o.a.trans("This card is blocked. Please try a different card."),
            cvvWrong: o.a.trans("Your CVV/CSV security code is wrong. Please check your card details and try again."),
            exceededLimit: o.a.trans("Your card has exceeded its limit. Please try a different card."),
            expired: o.a.trans("This card is expired. Please try a different card."),
            fraud: o.a.trans("Your transaction could not be processed at this time. Error 2777."),
            invalidNumber: o.a.trans("This card number is invalid. Please check your card details and try again."),
            invalidPin: o.a.trans("Your pin number is invalid. Please check your card details and try again."),
            transactionFailed: o.a.trans("Your transaction failed. Please check your card details and try again."),
            unacceptable: o.a.trans("This card is not accepted. Please try a different card.")
        },
        c = {
            "3d-secure: Authentication failed": s.transactionFailed,
            "Acquirer Fraud": s.fraud,
            "Authentication Required": s.transactionFailed,
            "Blocked Card": s.blocked,
            Cancelled: s.transactionFailed,
            "CVC Declined": s.cvvWrong,
            Refused: s.transactionFailed,
            "Declined Non Generic": s.transactionFailed,
            "Acquirer Error": s.transactionFailed,
            "Expired Card": s.expired,
            FRAUD: s.fraud,
            "FRAUD-CANCELLED": s.fraud,
            "Invalid Amount": s.transactionFailed,
            "Invalid Card Number": s.invalidNumber,
            "Invalid Pin": s.invalidPin,
            "Issuer Suspected Fraud": s.fraud,
            "Issuer Unavailable": s.transactionFailed,
            "Not enough balance": s.exceededLimit,
            "Not Submitted": s.transactionFailed,
            "Not supported": s.unacceptable,
            Pending: s.transactionFailed,
            "Pin tries exceeded": s.invalidPin,
            "Pin validation not possible": s.invalidPin,
            Referral: s.transactionFailed,
            "Restricted Card": s.unacceptable,
            "Revocation Of Auth": s.unacceptable,
            "Shopper Cancelled": s.transactionFailed,
            "Withdrawal count exceeded": s.exceededLimit,
            "Withdrawal amount exceeded": s.exceededLimit,
            "Transaction Not Permitted": s.fraud,
            Unknown: s.transactionFailed
        },
        l = "vue-data-seed",
        u = {
            CARD: "card",
            PAYPAL: "paypal",
            LOCAL: "local"
        },
        d = {
            adyenPayWithCredit: function adyenPayWithCredit() {
                return a.a.generate("web_payment_adyen_pay_credit_card")
            },
            adyenUpdatePaymentMethod: function adyenUpdatePaymentMethod() {
                return a.a.generate("web_payment_adyen_authorise_card")
            },
            adyenPayWithLocal: function adyenPayWithLocal(e) {
                return a.a.generate("web_payment_adyen_forward_local_payment", e)
            },
            giftMemberships: function giftMemberships() {
                return a.a.generate("web_gift_callback_memberships")
            },
            listStoredPaymentMethods: function listStoredPaymentMethods() {
                return a.a.generate("web_payment_adyen_list_stored_payment_methods")
            },
            localPaymentMethods: function localPaymentMethods(e) {
                return a.a.generate("web_payment_adyen_list_local_payments", e)
            },
            paypalMembershipPayment: function paypalMembershipPayment(e) {
                return a.a.generate("web_payment_paypal_prepare_recurring", e)
            },
            paypalGiftPayment: function paypalGiftPayment(e) {
                return a.a.generate("web_payment_paypal_gift", e)
            }
        },
        p = (o.a.trans("Diamond Membership (Yearly)"), o.a.trans("Diamond Membership (Monthly)"), o.a.trans("Platinum Membership (Yearly)"), o.a.trans("Platinum Membership (Monthly)"), o.a.trans("Gold Membership (Yearly)"), o.a.trans("Gold Membership (Monthly)"), o.a.trans("Diamond Membership (1 Year)"), o.a.trans("Diamond Membership (1 Month)"), o.a.trans("Platinum Membership (1 Year)"), o.a.trans("Platinum Membership (1 Month)"), o.a.trans("Gold Membership (1 Year)"), o.a.trans("Gold Membership (1 Month)"), function getErrorMessage(e) {
            return c[e] ? c[e] : c.Unknown
        }),
        m = n(311),
        f = n(3),
        h = n.n(f),
        g = "show-gift-membership-modal",
        b = {
            analysis: function analysis() {
                return a.a.generate("web_archive_index")
            },
            downgradeAction: a.a.generate("web_membership_cancel", {}, !0),
            explorer: function explorer() {
                return a.a.generate("explorer_index")
            },
            goHome: a.a.generate("web_user_home"),
            giftPayment: function giftPayment(e) {
                return a.a.generate("web_membership_gift", e)
            },
            lessons: function lessons() {
                return a.a.generate("web_cm_mentor")
            },
            live: function live() {
                return a.a.generate("web_live")
            },
            membershipPayment: function membershipPayment(e) {
                return a.a.generate("web_payment_index", e)
            },
            payment: function payment(e) {
                return a.a.generate("web_membership", e)
            },
            policiesAgreement: function policiesAgreement() {
                return a.a.generate("web_policies_agreement")
            },
            puzzles: function puzzles() {
                return a.a.generate("web_tactic_index")
            },
            videos: function videos() {
                return a.a.generate("web_video_index")
            }
        },
        v = {
            DIAMOND_YEARLY: "diamond_yearly",
            DIAMOND_MONTHLY: "diamond_monthly",
            PLATINUM_YEARLY: "platinum_yearly",
            PLATINUM_MONTHLY: "platinum_monthly",
            GOLD_YEARLY: "gold_yearly",
            GOLD_MONTHLY: "gold_monthly"
        },
        y = "diamond",
        _ = {
            YEARLY: "yearly",
            MONTHLY: "monthly"
        },
        w = [{
            sku: v.GOLD_MONTHLY,
            description: o.a.trans("1 Month Gold")
        }, {
            sku: v.DIAMOND_MONTHLY,
            description: o.a.trans("1 Month Diamond")
        }, {
            sku: v.DIAMOND_YEARLY,
            description: o.a.trans("1 Year Diamond")
        }],
        O = (r = {}, h()(r, v.GOLD_MONTHLY, "$5"), h()(r, v.DIAMOND_MONTHLY, "$14"), h()(r, v.DIAMOND_YEARLY, "$99"), r),
        E = {
            giftGive: function giftGive(e) {
                return o.a.trans("Give the gift of chess to %user%!", {
                    "%user%": e
                })
            },
            giftGiven: function giftGiven(e) {
                return o.a.trans("Gift Given to %user%!", {
                    "%user%": e
                })
            },
            paymentTerms: function paymentTerms() {
                return o.a.trans('I agree to <a href="%href%" target="_blank">payment terms</a>.', {
                    "%href%": b.policiesAgreement()
                })
            },
            thanksToYou: function thanksToYou(e) {
                return o.a.trans("Thanks to you, %user% can now enjoy unlimited chess!", {
                    "%user%": e
                })
            },
            membershipProduct: function membershipProduct(e, t, n) {
                return o.a.trans("1 %duration% %product% (%amount%)", {
                    "%duration%": e,
                    "%product%": t.charAt(0).toUpperCase() + t.slice(1),
                    "%amount%": n
                })
            }
        },
        k = [{
            id: 1,
            label: o.a.trans("Unlimited Puzzles"),
            icon: "puzzle",
            link: b.puzzles
        }, {
            id: 2,
            label: o.a.trans("Unlimited Lessons"),
            icon: "lesson",
            link: b.lessons
        }, {
            id: 3,
            label: o.a.trans("Deep Analysis"),
            icon: "analysis",
            link: b.analysis
        }, {
            id: 4,
            label: o.a.trans("Video Lessons"),
            icon: "video",
            link: b.videos
        }, {
            id: 5,
            label: o.a.trans("Full Explorer"),
            icon: "explorer",
            link: b.explorer
        }, {
            id: 6,
            label: o.a.trans("Play Ad Free!"),
            icon: "noads",
            link: b.live
        }],
        C = (o.a.trans("Not using Premium features"), o.a.trans("Too expensive"), o.a.trans("Technical issues"), o.a.trans("Using another site/app"), o.a.trans("Less interested in chess right now"), o.a.trans("Other"), n(319)),
        S = n.n(C),
        A = n(241),
        T = n.n(A),
        P = n(139),
        x = n(33),
        j = n(63),
        M = n(99),
        L = n(166),
        N = n(91),
        I = n(11);

    function submitAdyenPayment(e) {
        return I.default.post(d.adyenPayWithCredit(), e)
    }

    function updateAdyenPaymentMethod(e) {
        return I.default.post(d.adyenUpdatePaymentMethod(), e)
    }
    var R = {
            name: "adyen-card-payment",
            components: {
                FormButton: x.a,
                FormInput: j.a,
                FormCheckbox: M.a,
                FormSelect: L.a,
                LoaderThreeBounce: N.a
            },
            props: {
                adyenKey: {
                    type: String,
                    required: !0,
                    default: window.context.adyenKey
                },
                currencyCode: {
                    type: String,
                    required: !1,
                    default: "USD"
                },
                formMode: {
                    type: String,
                    default: "payment",
                    validator: function validator(e) {
                        return -1 !== ["update", "payment"].indexOf(e)
                    }
                },
                generationTime: {
                    type: String,
                    required: !0
                },
                giftData: Object,
                isFetchingSavedPaymentDetails: {
                    type: Boolean,
                    required: !0,
                    default: !1
                },
                isGift: {
                    type: Boolean,
                    default: !1
                },
                productSku: {
                    type: String,
                    validator: function validator(e) {
                        return Object.values(v).includes(e)
                    }
                },
                queryParams: Object,
                redirectOnSuccess: {
                    type: Boolean,
                    default: !0
                },
                savedPaymentDetails: Object,
                buttonText: {
                    type: String,
                    required: !0
                }
            },
            data: function data() {
                return {
                    adyenInstance: {},
                    adyenValidation: {},
                    adyenEncryptedField: {},
                    adyenErrorResponse: "",
                    cardData: {
                        number: "",
                        cvc: "",
                        holderName: "",
                        expiryMonth: "",
                        expiryYear: "",
                        generationtime: ""
                    },
                    expiryMonthOptions: this.fillIntegerRange(1, 12),
                    expiryYearOptions: this.getYearOptions(),
                    isSubmitting: !1,
                    newPaymentMethod: !1,
                    userEmail: ""
                }
            },
            computed: {
                cardPlaceholder: function cardPlaceholder() {
                    var e = "•".repeat(this.cardTypeDetails.lengths[0]);
                    return this.prettyCardNumberFormatter(e)
                },
                cvcPlaceholder: function cvcPlaceholder() {
                    return "•".repeat(this.cardTypeDetails.code.size)
                },
                cardTypeDetails: function cardTypeDetails() {
                    var e = T()(this.cardData.number);
                    return e.length ? e[0] : {
                        niceType: "Undefined",
                        type: "undefined",
                        gaps: [4, 8, 12],
                        lengths: [16, 19],
                        code: {
                            name: "CVV",
                            size: 3
                        }
                    }
                },
                checkNewPaymentFormValid: function checkNewPaymentFormValid() {
                    return !(!(!this.isSubmitting && this.userEmail && this.userEmail.length > 0) || this.isMaestro)
                },
                formCanSubmit: function formCanSubmit() {
                    return !this.isSubmitting && this.hasSavedCreditCard ? "update" !== this.formMode : this.checkNewPaymentFormValid
                },
                displaySavedCard: function displaySavedCard() {
                    var e = this.savedPaymentDetails.creditCard;
                    return e ? this.$trans("Use card on file - ending %lastfour%", {
                        "%lastfour%": e.number
                    }) : ""
                },
                emailFromContext: function emailFromContext() {
                    return window.context.user.email
                },
                generalValidationError: function generalValidationError() {
                    return Object.keys(this.adyenValidate).length > 0 && this.adyenValidate.unkown.length > 0
                },
                hasSavedCreditCard: function hasSavedCreditCard() {
                    return null != this.savedPaymentDetails.creditCard && !this.newPaymentMethod
                },
                isMaestro: function isMaestro() {
                    return this.cardTypeDetails.type === A.types.MAESTRO
                },
                maxCardNumberLength: function maxCardNumberLength() {
                    var e = this.cardTypeDetails,
                        t = e.lengths,
                        n = e.gaps;
                    return t[t.length - 1] + n.length
                },
                prettyCardNumber: function prettyCardNumber() {
                    var e = this.cardData.number;
                    return this.cardTypeDetails ? this.prettyCardNumberFormatter(e) : e
                },
                showCardNumberError: function showCardNumberError() {
                    return this.hasValidationError("number") || "undefined" === this.cardTypeDetails.type
                },
                isValidEmail: function isValidEmail() {
                    return Object(P.a)(this.userEmail)
                },
                showNewCardForm: function showNewCardForm() {
                    return !this.isFetchingSavedPaymentDetails && (!this.hasSavedCreditCard || this.newPaymentMethod)
                },
                showRenewsAutomaticallyMessage: function showRenewsAutomaticallyMessage() {
                    return !this.isGift && "payment" === this.formMode
                },
                showSubmitButton: function showSubmitButton() {
                    return "update" !== this.formMode || !this.hasSavedCreditCard
                }
            },
            mounted: function mounted() {
                this.adyenSetup(), this.userEmail = this.emailFromContext
            },
            methods: {
                adyenEncrypt: function adyenEncrypt() {
                    this.adyenEncryptedField = this.adyenInstance.encrypt(this.cardData), this.adyenValidation.encryption = this.adyenEncryptedField.length > 0
                },
                adyenSetup: function adyenSetup() {
                    this.adyenInstance = S.a.createEncryption(this.adyenKey, {})
                },
                adyenValidate: function adyenValidate() {
                    var e = this.adyenInstance.validate(this.cardData);
                    this.adyenValidation = e, e.valid || (this.isSubmitting = !1, this.$emit("paymentprocessing", !1))
                },
                fillIntegerRange: function fillIntegerRange(e, t) {
                    var n = [];
                    return Array(t - e + 1).fill().forEach(function(t, r) {
                        var a = (e + r).toString();
                        n.push({
                            value: a,
                            label: a
                        })
                    }), n
                },
                handleFormSubmit: function handleFormSubmit() {
                    this.$emit("paymentprocessing", !0), this.isSubmitting = !0, this.showNewCardForm ? this.handleValidationEncryption() : this.routeRequestFromFormMode()
                },
                handleValidationEncryption: function handleValidationEncryption() {
                    this.cardData.generationtime = this.generationTime, this.adyenValidate(), this.adyenValidation.valid && (this.adyenEncrypt(), this.adyenEncryptedField && this.routeRequestFromFormMode())
                },
                hasValidationError: function hasValidationError(e) {
                    return Object.keys(this.adyenValidation).length > 0 && Object.prototype.hasOwnProperty.call(this.adyenValidation, e) && !this.adyenValidation[e]
                },
                getYearOptions: function getYearOptions() {
                    var e = (new Date).getFullYear(),
                        t = e + 20;
                    return this.fillIntegerRange(e, t)
                },
                prettyCardNumberFormatter: function prettyCardNumberFormatter(e) {
                    for (var t = this.cardTypeDetails.gaps, n = [].concat(0, t, e.length), r = [], a = 0; n[a] < e.length;) {
                        var o = n[a],
                            i = Math.min(n[a + 1], e.length);
                        r.push(e.substring(o, i)), a++
                    }
                    return r.join(" ")
                },
                routeRequestFromFormMode: function routeRequestFromFormMode() {
                    switch (this.formMode) {
                        case "update":
                            this.submitUpdatePaymentMethod();
                            break;
                        default:
                            this.submitPayment()
                    }
                },
                submitPayment: function submitPayment() {
                    var e = this,
                        t = {
                            email: this.userEmail,
                            hasRecurrentContract: this.hasSavedCreditCard.toString(),
                            paymentMethod: "credit-card",
                            plan: this.productSku
                        };
                    (this.adyenEncryptedField.length && (t.adyenEncryptedField = this.adyenEncryptedField, t.hasRecurrentContract = "false"), this.giftData && Object.keys(this.giftData).length && (t.giftMessage = this.giftData.giftMessage, t.giftReceiverEmail = this.giftData.giftReceiverEmail, t.giftReceiverId = this.giftData.giftReceiverId, t.giftReceiverUsername = this.giftData.giftReceiverUsername), this.queryParams && Object.keys(this.queryParams).length) && Object.keys(this.queryParams).forEach(function(n) {
                        t[n] = e.queryParams[n]
                    });
                    submitAdyenPayment(t).then(function(t) {
                        e.$emit("paymentprocessing", !1), 201 === t.status && (e.redirectOnSuccess && window.location.assign(t.headers.location), e.$emit("paymentsuccessful", {
                            receiptLink: t.headers.location,
                            success: !0
                        })), "Refused" === t.data.resultCode && (e.$emit("paymenterror", "Refused"), e.isSubmitting = !1, e.adyenErrorResponse = p(t.data.refusalReason))
                    }).catch(function(t) {
                        e.$emit("paymentprocessing", !1), e.$emit("paymenterror", t), e.isSubmitting = !1, e.adyenErrorResponse = p(t.response.data.message)
                    })
                },
                submitUpdatePaymentMethod: function submitUpdatePaymentMethod() {
                    var e = this;
                    updateAdyenPaymentMethod({
                        paymentMethod: "credit-card",
                        hasRecurrentContract: "false",
                        email: this.userEmail,
                        action: "update",
                        adyenEncryptedField: this.adyenEncryptedField
                    }).then(function(t) {
                        e.$emit("paymentprocessing", !1), 201 === t.status && (e.redirectOnSuccess ? window.location.assign(t.headers.location) : e.$emit("paymentsuccessful", {
                            receiptLink: t.headers.location,
                            success: !0
                        })), "Refused" === t.data.resultCode && (e.$emit("paymenterror", "Refused"), e.isSubmitting = !1, e.adyenErrorResponse = t.data.refusalReason)
                    }).catch(function(t) {
                        e.$emit("paymentprocessing", !1), e.$emit("paymenterror", t), e.isSubmitting = !1, e.adyenErrorResponse = t.response.data.message
                    })
                },
                stripNumber: function stripNumber(e) {
                    return e.replace(/\D/g, "")
                },
                enableNewPaymentMethod: function enableNewPaymentMethod() {
                    this.newPaymentMethod = !0
                },
                updateCardNumber: function updateCardNumber(e) {
                    this.adyenValidation = {}, this.cardData.number = this.stripNumber(e)
                }
            }
        },
        D = n(242),
        $ = n(5);
    var B = Object($.a)(R, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: [e.$style.component]
            }, [e.isFetchingSavedPaymentDetails ? n("loader-three-bounce", {
                class: e.$style.loader,
                attrs: {
                    size: 60
                }
            }) : e.hasSavedCreditCard ? [n("form-checkbox", {
                class: e.$style["saved-card"],
                attrs: {
                    name: "saved-card",
                    label: e.displaySavedCard,
                    value: e.hasSavedCreditCard
                },
                on: {
                    input: e.enableNewPaymentMethod
                }
            }), e._v(" "), e.showRenewsAutomaticallyMessage ? n("p", {
                class: e.$style["text-center"],
                domProps: {
                    textContent: e._s(e.$trans("Subscription renews automatically. Cancel at any time."))
                }
            }) : e._e()] : e._e(), e._v(" "), e.showNewCardForm ? [e.emailFromContext ? e._e() : n("label", {
                class: e.$style.label
            }, [e._v(e._s(e.$trans("Email Address")) + "\n      "), n("form-input", {
                attrs: {
                    type: "email"
                },
                model: {
                    value: e.userEmail,
                    callback: function(t) {
                        e.userEmail = t
                    },
                    expression: "userEmail"
                }
            }), e._v(" "), e.isValidEmail ? e._e() : n("div", {
                class: e.$style["input-error"],
                domProps: {
                    textContent: e._s(e.$trans("Please add an email address"))
                }
            })], 1), e._v(" "), n("label", {
                class: e.$style.label
            }, [e._v(e._s(e.$trans("Card Number")) + "\n      "), n("form-input", {
                attrs: {
                    "data-test-name": "card-number",
                    type: "tel",
                    maxlength: e.maxCardNumberLength,
                    placeholder: e.cardPlaceholder,
                    value: e.prettyCardNumber
                },
                on: {
                    input: e.updateCardNumber
                }
            }), e._v(" "), e.showCardNumberError ? n("div", {
                class: e.$style["input-error"],
                domProps: {
                    textContent: e._s(e.$trans("The card number is incorrect"))
                }
            }) : e._e()], 1), e._v(" "), n("label", {
                class: e.$style.label
            }, [e._v(e._s(e.$trans("Holder Name")) + "\n      "), n("form-input", {
                attrs: {
                    "data-test-name": "card-holder-name",
                    type: "text"
                },
                model: {
                    value: e.cardData.holderName,
                    callback: function(t) {
                        e.$set(e.cardData, "holderName", t)
                    },
                    expression: "cardData.holderName"
                }
            }), e._v(" "), e.hasValidationError("holderName") ? n("div", {
                class: e.$style["input-error"],
                domProps: {
                    textContent: e._s(e.$trans("Please make sure you have entered your credit card information correctly"))
                }
            }) : e._e()], 1), e._v(" "), n("div", {
                class: e.$style["card-detail-row"]
            }, [n("label", {
                class: e.$style.label
            }, [e._v(e._s(e.$trans("Month")) + "\n        "), n("form-select", {
                attrs: {
                    "data-test-name": "card-expiry-month",
                    "placeholder-text": "MM",
                    options: e.expiryMonthOptions
                },
                model: {
                    value: e.cardData.expiryMonth,
                    callback: function(t) {
                        e.$set(e.cardData, "expiryMonth", t)
                    },
                    expression: "cardData.expiryMonth"
                }
            }), e._v(" "), e.hasValidationError("expiryMonth") ? n("div", {
                class: e.$style["input-error"],
                domProps: {
                    textContent: e._s(e.$trans("The card's expiration month is invalid"))
                }
            }) : e._e()], 1), e._v(" "), n("label", {
                class: e.$style.label
            }, [e._v(e._s(e.$trans("Year")) + "\n        "), n("form-select", {
                attrs: {
                    "data-test-name": "card-expiry-year",
                    "placeholder-text": "YYYY",
                    options: e.expiryYearOptions
                },
                model: {
                    value: e.cardData.expiryYear,
                    callback: function(t) {
                        e.$set(e.cardData, "expiryYear", t)
                    },
                    expression: "cardData.expiryYear"
                }
            }), e._v(" "), e.hasValidationError("expiryYear") ? n("div", {
                class: e.$style["input-error"],
                domProps: {
                    textContent: e._s(e.$trans("The card's expiration year is invalid"))
                }
            }) : e._e()], 1), e._v(" "), n("label", {
                class: e.$style.label
            }, [e._v(e._s(e.cardTypeDetails.code.name) + "\n        "), n("form-input", {
                attrs: {
                    "data-test-name": "card-cvc",
                    type: "tel",
                    maxlength: e.cardTypeDetails.code.size,
                    placeholder: e.cvcPlaceholder
                },
                model: {
                    value: e.cardData.cvc,
                    callback: function(t) {
                        e.$set(e.cardData, "cvc", t)
                    },
                    expression: "cardData.cvc"
                }
            }), e._v(" "), e.hasValidationError("cvc") ? n("div", {
                class: e.$style["input-error"],
                domProps: {
                    textContent: e._s(e.$trans("The card's security code is invalid"))
                }
            }) : e._e()], 1)]), e._v(" "), e.showRenewsAutomaticallyMessage ? n("p", {
                class: e.$style["text-center"],
                domProps: {
                    textContent: e._s(e.$trans("Subscription renews automatically. Cancel at any time."))
                }
            }) : e._e(), e._v(" "), e.hasValidationError("encryption") ? n("div", {
                class: e.$style["input-error"],
                domProps: {
                    textContent: e._s(e.$trans("There was an error processing the request."))
                }
            }) : e._e(), e._v(" "), e.isMaestro ? n("div", {
                class: e.$style["input-error"],
                domProps: {
                    textContent: e._s(e.$trans("Unfortunately Maestro Cards are not supported for recurring payments. Please use another credit card."))
                }
            }) : e._e()] : e._e(), e._v(" "), e.generalValidationError ? n("div", {
                class: e.$style["input-error"],
                domProps: {
                    textContent: e._s(e.$trans("There was an error processing the request. Please try again."))
                }
            }) : e._e(), e._v(" "), e.adyenErrorResponse ? n("div", {
                class: [e.$style["input-error"], e.$style["text-center"]],
                domProps: {
                    innerHTML: e._s(e.adyenErrorResponse)
                }
            }) : e._e(), e._v(" "), e.showSubmitButton ? e._e() : n("div", {
                class: e.$style["saved-change"],
                domProps: {
                    textContent: e._s(e.$trans("Change"))
                },
                on: {
                    click: function(t) {
                        return e.enableNewPaymentMethod()
                    }
                }
            }), e._v(" "), n("form-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showSubmitButton,
                    expression: "showSubmitButton"
                }],
                attrs: {
                    "data-test-name": "card-submit",
                    size: "large",
                    theme: "primary",
                    disabled: !e.formCanSubmit,
                    "full-width": !0
                },
                on: {
                    click: e.handleFormSubmit
                }
            }, [e._v("\n    " + e._s(e.buttonText) + "\n  ")])], 2)
        }, [], !1, function injectStyles(e) {
            this.$style = D.default.locals || D.default
        }, null, null).exports,
        F = n(75);

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
                h()(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var U = {
            name: "adyen-card-payment",
            components: {
                FormButton: x.a,
                FormInput: j.a,
                FormCheckbox: M.a,
                LoaderThreeBounce: N.a
            },
            props: {
                adyenKey: {
                    type: String,
                    required: !0,
                    default: window.context.adyenKey
                },
                currencyCode: {
                    type: String,
                    required: !1,
                    default: "USD"
                },
                formMode: {
                    type: String,
                    default: "payment",
                    validator: function validator(e) {
                        return -1 !== ["update", "payment"].indexOf(e)
                    }
                },
                giftData: Object,
                isFetchingSavedPaymentDetails: {
                    type: Boolean,
                    required: !0,
                    default: !1
                },
                isGift: {
                    type: Boolean,
                    default: !1
                },
                productSku: {
                    type: String,
                    validator: function validator(e) {
                        return Object.values(v).includes(e)
                    }
                },
                queryParams: Object,
                redirectOnSuccess: {
                    type: Boolean,
                    default: !0
                },
                savedPaymentDetails: Object,
                buttonText: {
                    type: String,
                    required: !0
                }
            },
            data: function data() {
                return {
                    adyenErrorResponse: "",
                    cardData: null,
                    errors: i.reduce(function(e, t) {
                        return e[t] = !1, e
                    }, {}),
                    isFormValid: !1,
                    isMaestro: !1,
                    isSubmitting: !1,
                    newPaymentMethod: !1,
                    securedFields: null,
                    userEmail: ""
                }
            },
            computed: {
                checkNewPaymentFormValid: function checkNewPaymentFormValid() {
                    return !this.isSubmitting && this.userEmail && this.userEmail.length > 0 && !this.isMaestro && this.isFormValid
                },
                formCanSubmit: function formCanSubmit() {
                    return !this.isSubmitting && this.hasSavedCreditCard ? "update" !== this.formMode : this.checkNewPaymentFormValid
                },
                displaySavedCard: function displaySavedCard() {
                    var e = this.savedPaymentDetails.creditCard;
                    return e ? this.$trans("Use card on file - ending %lastfour%", {
                        "%lastfour%": e.number
                    }) : ""
                },
                emailFromContext: function emailFromContext() {
                    return window.context.user.email
                },
                hasSavedCreditCard: function hasSavedCreditCard() {
                    return null != this.savedPaymentDetails.creditCard && !this.newPaymentMethod
                },
                isValidEmail: function isValidEmail() {
                    return Object(P.a)(this.userEmail)
                },
                showNewCardForm: function showNewCardForm() {
                    return !this.isFetchingSavedPaymentDetails && (!this.hasSavedCreditCard || this.newPaymentMethod)
                },
                showRenewsAutomaticallyMessage: function showRenewsAutomaticallyMessage() {
                    return !this.isGift && "payment" === this.formMode
                },
                showSubmitButton: function showSubmitButton() {
                    return "update" !== this.formMode || !this.hasSavedCreditCard
                }
            },
            watch: {
                showNewCardForm: function showNewCardForm(e) {
                    e && !this.securedFields && this.adyenSetup()
                }
            },
            mounted: function mounted() {
                this.userEmail = this.emailFromContext
            },
            methods: {
                adyenSetup: function adyenSetup() {
                    var e = this;
                    F.a.insert("".concat(window.context.adyenLoadingContext, "sdk/3.0.0/adyen.js")).then(function() {
                        window.checkout = new window.AdyenCheckout({
                            locale: "en-US",
                            originKey: window.context.adyenOriginKey,
                            loadingContext: window.context.adyenLoadingContext
                        }), window.securedFields = window.checkout.create("securedfields", {
                            type: "card",
                            groupTypes: ["maestro", "maestrouk"],
                            onBrand: function onBrand(t) {
                                var n = t.brand;
                                e.isMaestro = n.includes("maestro")
                            },
                            onChange: function onChange(t) {
                                var n = t.isValid,
                                    r = t.data;
                                e.isFormValid = n, n && (e.cardData = r.paymentMethod)
                            },
                            onFieldValid: function onFieldValid(t) {
                                var n = t.encryptedFieldName,
                                    r = t.valid;
                                e.errors[n] = !r
                            }
                        }).mount(".cards-div")
                    })
                },
                handleFormSubmit: function handleFormSubmit() {
                    this.$emit("paymentprocessing", !0), this.isSubmitting = !0, "update" === this.formMode ? this.submitUpdatePaymentMethod() : this.submitPayment()
                },
                submitPayment: function submitPayment() {
                    var e = this,
                        t = {
                            email: this.userEmail,
                            hasRecurrentContract: this.hasSavedCreditCard.toString(),
                            paymentMethod: "credit-card",
                            plan: this.productSku
                        };
                    (this.hasSavedCreditCard || (t = _objectSpread({}, t, {}, this.cardData)), this.giftData && Object.keys(this.giftData).length && (t.giftMessage = this.giftData.giftMessage, t.giftReceiverEmail = this.giftData.giftReceiverEmail, t.giftReceiverId = this.giftData.giftReceiverId, t.giftReceiverUsername = this.giftData.giftReceiverUsername), this.queryParams && Object.keys(this.queryParams).length) && Object.keys(this.queryParams).forEach(function(n) {
                        t[n] = e.queryParams[n]
                    });
                    submitAdyenPayment(t).then(function(t) {
                        e.$emit("paymentprocessing", !1), 201 === t.status && (e.redirectOnSuccess && window.location.assign(t.headers.location), e.$emit("paymentsuccessful", {
                            receiptLink: t.headers.location,
                            success: !0
                        })), "Refused" === t.data.resultCode && (e.$emit("paymenterror", "Refused"), e.isSubmitting = !1, e.adyenErrorResponse = p(t.data.refusalReason))
                    }).catch(function(t) {
                        e.$emit("paymentprocessing", !1), e.$emit("paymenterror", t), e.isSubmitting = !1, e.adyenErrorResponse = p(t.response.data.message)
                    })
                },
                submitUpdatePaymentMethod: function submitUpdatePaymentMethod() {
                    var e = this;
                    updateAdyenPaymentMethod(_objectSpread({}, this.cardData, {
                        email: this.userEmail,
                        paymentMethod: "credit-card",
                        hasRecurrentContract: "false",
                        action: "update"
                    })).then(function(t) {
                        e.$emit("paymentprocessing", !1), 201 === t.status && (e.redirectOnSuccess ? window.location.assign(t.headers.location) : e.$emit("paymentsuccessful", {
                            receiptLink: t.headers.location,
                            success: !0
                        })), "Refused" === t.data.resultCode && (e.$emit("paymenterror", "Refused"), e.isSubmitting = !1, e.adyenErrorResponse = p(t.data.refusalReason))
                    }).catch(function(t) {
                        e.$emit("paymentprocessing", !1), e.$emit("paymenterror", t), e.isSubmitting = !1, e.adyenErrorResponse = p(t.response.data.message)
                    })
                },
                enableNewPaymentMethod: function enableNewPaymentMethod() {
                    this.newPaymentMethod = !0
                }
            }
        },
        V = n(243);
    var q = {
            name: "user-settings-update-payment-method",
            components: {
                AdyenCardDeprecated: B,
                AdyenCardNew: Object($.a)(U, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "cards-div",
                        class: [e.$style.component]
                    }, [n("div", {
                        staticClass: "js-chckt-pm__pm-holder"
                    }, [e.isFetchingSavedPaymentDetails ? n("loader-three-bounce", {
                        class: e.$style.loader,
                        attrs: {
                            size: 60
                        }
                    }) : e.hasSavedCreditCard ? [n("form-checkbox", {
                        class: e.$style["saved-card"],
                        attrs: {
                            name: "saved-card",
                            label: e.displaySavedCard,
                            value: e.hasSavedCreditCard
                        },
                        on: {
                            input: e.enableNewPaymentMethod
                        }
                    }), e._v(" "), e.showRenewsAutomaticallyMessage ? n("p", {
                        class: e.$style["text-center"],
                        domProps: {
                            textContent: e._s(e.$trans("Subscription renews automatically. Cancel at any time."))
                        }
                    }) : e._e()] : e._e(), e._v(" "), e.showNewCardForm ? [e.emailFromContext ? e._e() : n("label", {
                        class: e.$style.label
                    }, [e._v(e._s(e.$trans("Email Address")) + "\n        "), n("form-input", {
                        attrs: {
                            type: "email"
                        },
                        model: {
                            value: e.userEmail,
                            callback: function(t) {
                                e.userEmail = t
                            },
                            expression: "userEmail"
                        }
                    }), e._v(" "), e.isValidEmail ? e._e() : n("div", {
                        class: e.$style["input-error"],
                        domProps: {
                            textContent: e._s(e.$trans("Please add an email address"))
                        }
                    })], 1), e._v(" "), n("label", {
                        class: e.$style.label
                    }, [e._v(e._s(e.$trans("Card Number")) + "\n        "), n("span", {
                        class: e.$style.input,
                        attrs: {
                            "data-cse": "encryptedCardNumber"
                        }
                    }), e._v(" "), e.errors.encryptedCardNumber ? n("div", {
                        class: e.$style["input-error"],
                        domProps: {
                            textContent: e._s(e.$trans("The card number is incorrect"))
                        }
                    }) : e._e()]), e._v(" "), n("div", {
                        class: e.$style["card-detail-row"]
                    }, [n("label", {
                        class: e.$style.label
                    }, [e._v(e._s(e.$trans("Month")) + "\n          "), n("span", {
                        class: e.$style.input,
                        attrs: {
                            "data-cse": "encryptedExpiryMonth"
                        }
                    }), e._v(" "), e.errors.encryptedExpiryMonth ? n("div", {
                        class: e.$style["input-error"],
                        domProps: {
                            textContent: e._s(e.$trans("The card's expiration month is invalid"))
                        }
                    }) : e._e()]), e._v(" "), n("label", {
                        class: e.$style.label
                    }, [e._v(e._s(e.$trans("Year")) + "\n          "), n("span", {
                        class: e.$style.input,
                        attrs: {
                            "data-cse": "encryptedExpiryYear"
                        }
                    }), e._v(" "), e.errors.encryptedExpiryYear ? n("div", {
                        class: e.$style["input-error"],
                        domProps: {
                            textContent: e._s(e.$trans("The card's expiration year is invalid"))
                        }
                    }) : e._e()]), e._v(" "), n("label", {
                        class: e.$style.label
                    }, [e._v(e._s(e.$trans("Code (CVC)")) + "\n          "), n("span", {
                        class: e.$style.input,
                        attrs: {
                            "data-cse": "encryptedSecurityCode"
                        }
                    }), e._v(" "), e.errors.encryptedSecurityCode ? n("div", {
                        class: e.$style["input-error"],
                        domProps: {
                            textContent: e._s(e.$trans("The card's security code is invalid"))
                        }
                    }) : e._e()])]), e._v(" "), e.showRenewsAutomaticallyMessage ? n("p", {
                        class: e.$style["text-center"],
                        domProps: {
                            textContent: e._s(e.$trans("Subscription renews automatically. Cancel at any time."))
                        }
                    }) : e._e(), e._v(" "), e.isMaestro ? n("div", {
                        class: e.$style["input-error"],
                        domProps: {
                            textContent: e._s(e.$trans("Unfortunately Maestro Cards are not supported for recurring payments. Please use another credit card."))
                        }
                    }) : e._e()] : e._e(), e._v(" "), e.adyenErrorResponse ? n("div", {
                        class: [e.$style["input-error"], e.$style["text-center"]],
                        domProps: {
                            innerHTML: e._s(e.adyenErrorResponse)
                        }
                    }) : e._e(), e._v(" "), e.showSubmitButton ? e._e() : n("div", {
                        class: e.$style["saved-change"],
                        domProps: {
                            textContent: e._s(e.$trans("Change"))
                        },
                        on: {
                            click: function(t) {
                                return e.enableNewPaymentMethod()
                            }
                        }
                    }), e._v(" "), n("form-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showSubmitButton,
                            expression: "showSubmitButton"
                        }],
                        attrs: {
                            "data-test-name": "card-submit",
                            size: "large",
                            theme: "primary",
                            disabled: !e.formCanSubmit,
                            "full-width": !0
                        },
                        on: {
                            click: e.handleFormSubmit
                        }
                    }, [e._v("\n      " + e._s(e.buttonText) + "\n    ")])], 2)])
                }, [], !1, function adyen_card_new_injectStyles(e) {
                    this.$style = V.default.locals || V.default
                }, null, null).exports
            },
            props: {
                adyenKey: {
                    type: String,
                    required: !0,
                    default: window.context.adyenKey
                },
                currencyCode: {
                    type: String,
                    required: !1,
                    default: "USD"
                },
                formMode: {
                    type: String,
                    default: "payment",
                    validator: function validator(e) {
                        return -1 !== ["update", "payment"].indexOf(e)
                    }
                },
                generationTime: {
                    type: String,
                    required: !0
                },
                giftData: Object,
                isFetchingSavedPaymentDetails: {
                    type: Boolean,
                    required: !0,
                    default: !1
                },
                isGift: {
                    type: Boolean,
                    default: !1
                },
                newAdyenEnabled: {
                    type: Boolean,
                    deafult: !1
                },
                productSku: {
                    type: String,
                    validator: function validator(e) {
                        return Object.values(v).includes(e)
                    }
                },
                queryParams: Object,
                redirectOnSuccess: {
                    type: Boolean,
                    default: !0
                },
                savedPaymentDetails: Object,
                buttonText: {
                    type: String,
                    required: !0
                }
            },
            computed: {
                useNewPaymentMethod: function useNewPaymentMethod() {
                    return this.newAdyenEnabled || function getNewAdyenEnabled() {
                        var e = document.querySelector("#".concat(l));
                        return e && Object(m.a)(e.dataset.newAdyen)
                    }()
                }
            }
        },
        G = Object($.a)(q, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.useNewPaymentMethod ? n("adyen-card-new", e._g(e._b({}, "adyen-card-new", e.$props, !1), e.$listeners)) : n("adyen-card-deprecated", e._g(e._b({}, "adyen-card-deprecated", e.$props, !1), e.$listeners))
        }, [], !1, null, null, null).exports,
        H = n(36),
        z = n(18),
        K = n(46),
        W = n(59);

    function paypalvue_type_script_lang_js_ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var Y = {
            name: "paypal",
            components: {
                FormButton: x.a
            },
            props: {
                currencyCode: {
                    type: String,
                    required: !1,
                    default: "USD"
                },
                isGift: {
                    type: Boolean,
                    required: !0
                },
                generationTime: {
                    type: String,
                    required: !1
                },
                giftData: {
                    type: Object,
                    required: !1
                },
                productSku: {
                    type: String,
                    required: !0,
                    validator: function validator(e) {
                        return Object.values(v).includes(e)
                    }
                },
                queryParams: {
                    type: Object,
                    required: !1
                }
            },
            data: function data() {
                return {
                    paymentsRoutes: d
                }
            },
            computed: {
                actionLink: function actionLink() {
                    return this.isGift ? this.paymentsRoutes.paypalGiftPayment({
                        sku: this.productSku
                    }) : this.paymentsRoutes.paypalMembershipPayment(function paypalvue_type_script_lang_js_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? paypalvue_type_script_lang_js_ownKeys(n, !0).forEach(function(t) {
                                h()(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : paypalvue_type_script_lang_js_ownKeys(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({
                        sku: this.productSku
                    }, this.queryParams))
                },
                buttonText: function buttonText() {
                    return this.isGift ? this.$trans("Buy a gift with PayPal") : this.$trans("Upgrade with PayPal")
                }
            }
        },
        Q = n(244);
    var J = Object($.a)(Y, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [e.isGift ? e._e() : n("p", {
                class: e.$style["text-center"]
            }, [e._v("\n    " + e._s(e.$trans("Subscription renews automatically. Cancel at any time.")) + "\n  ")]), e._v(" "), n("form", {
                attrs: {
                    method: "post",
                    action: e.actionLink
                }
            }, [n("input", {
                attrs: {
                    name: "cur",
                    type: "hidden"
                },
                domProps: {
                    value: e.currencyCode
                }
            }), e._v(" "), n("input", {
                attrs: {
                    name: "generationTime",
                    type: "hidden"
                },
                domProps: {
                    value: e.generationTime
                }
            }), e._v(" "), e.isGift ? [n("input", {
                attrs: {
                    name: "giftMessage",
                    type: "hidden"
                },
                domProps: {
                    value: e.giftData.giftMessage
                }
            }), e._v(" "), e.giftData.giftReceiverId ? n("input", {
                attrs: {
                    name: "giftReceiverId",
                    type: "hidden"
                },
                domProps: {
                    value: e.giftData.giftReceiverId
                }
            }) : e._e(), e._v(" "), e.giftData.giftReceiverEmail ? n("input", {
                attrs: {
                    name: "giftReceiverEmail",
                    type: "hidden"
                },
                domProps: {
                    value: e.giftData.giftReceiverEmail
                }
            }) : e._e()] : e._e(), e._v(" "), n("form-button", {
                class: e.$style.button,
                attrs: {
                    "full-width": !0,
                    size: "large",
                    theme: "primary",
                    type: "submit"
                }
            }, [e._v("\n      " + e._s(e.buttonText) + "\n    ")])], 2)])
        }, [], !1, function paypal_injectStyles(e) {
            this.$style = Q.default.locals || Q.default
        }, null, null).exports,
        Z = n(171),
        X = n(12),
        ee = {
            name: "modal-gift-membership",
            components: {
                AdyenCard: G,
                IconFont: z.a,
                ModalContainer: K.a,
                ModalContent: W.a,
                Paypal: J,
                UserMembershipIcon: Z.a
            },
            props: {
                hiddenByDefault: {
                    type: Boolean,
                    default: !1
                },
                receiverUsername: {
                    type: String
                },
                receiverId: {
                    type: Number
                },
                senderUsername: {
                    type: String,
                    required: !0
                },
                standAlone: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function data() {
                return {
                    benefits: k,
                    prices: O,
                    currentGateway: u.CARD,
                    defaultModalProducts: w,
                    gatewayStrings: u,
                    isFetchingSavedPaymentDetails: !0,
                    membershipRoute: X.o.membership(),
                    paymentProcessing: !1,
                    paymentReceiptLink: "",
                    paymentSuccess: !1,
                    planLengths: _,
                    savedPaymentDetails: {},
                    selectedLength: _.YEARLY,
                    selectedPlanLevel: y,
                    translations: E,
                    userId: 0,
                    username: ""
                }
            },
            computed: {
                adyenKey: function adyenKey() {
                    return window.context.adyenKey
                },
                generationTime: function generationTime() {
                    return this.savedPaymentDetails.generationTime || ""
                },
                giftData: function giftData() {
                    return {
                        giftReceiverUsername: this.username || this.receiverUsername,
                        giftReceiverId: this.userId || this.receiverId
                    }
                },
                planLengthOptions: function planLengthOptions() {
                    return Object.values(_)
                },
                selectedSku: function selectedSku() {
                    return "".concat(this.selectedPlanLevel, "_").concat(this.selectedLength)
                },
                titleString: function titleString() {
                    var e = this.giftData.giftReceiverUsername,
                        t = this.paymentSuccess ? "giftGiven" : "giftGive";
                    return E[t](e)
                }
            },
            mounted: function mounted() {
                var e = this;
                this.hiddenByDefault || (this.$refs.modalContainer.show(), this.fetchSavedPaymentDetails(), this.getGiftMemberships()), this.standAlone && H.a.$on(g, function(t) {
                    var n = t.username,
                        r = t.userId;
                    e.username = n, e.userId = r, e.$refs.modalContainer.show(), e.fetchSavedPaymentDetails(), e.getGiftMemberships()
                })
            },
            methods: {
                getGiftMemberships: function getGiftMemberships() {
                    var e = this;
                    return function service_getGiftMemberships() {
                        return I.default.get(d.giftMemberships())
                    }().then(function(t) {
                        var n = t.data;
                        return e.prices = n
                    })
                },
                hide: function hide() {
                    this.modalDidHide(), this.standAlone && this.$refs.modalContainer.hide()
                },
                modalDidHide: function modalDidHide() {
                    this.$emit("hide-modal")
                },
                displayRadioChecked: function displayRadioChecked(e) {
                    return "".concat(this.selectedPlanLevel, "_").concat(this.selectedLength) === e
                },
                fetchSavedPaymentDetails: function fetchSavedPaymentDetails() {
                    var e = this;
                    (function getSavedPaymentMethods() {
                        return I.default.get(d.listStoredPaymentMethods())
                    })().then(function(e) {
                        return e.data
                    }).then(function(t) {
                        return e.savedPaymentDetails = t
                    }).then(function() {
                        return e.isFetchingSavedPaymentDetails = !1
                    })
                },
                handlePaymentProcessing: function handlePaymentProcessing(e) {
                    this.paymentProcessing = e
                },
                handlePaymentSuccess: function handlePaymentSuccess(e) {
                    this.paymentProcessing = !1, this.paymentSuccess = e.success, this.paymentReceiptLink = e.receiptLink
                },
                setSelectedProduct: function setSelectedProduct(e) {
                    var t = e.split("_");
                    this.selectedPlanLevel = t[0], this.selectedLength = t[1]
                },
                visibleMethod: function visibleMethod(e) {
                    return this.currentGateway === e
                }
            }
        },
        te = n(246);
    var ne = Object($.a)(ee, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("modal-container", {
            ref: "modalContainer",
            on: {
                "modal-did-hide": e.modalDidHide,
                hide: e.hide
            }
        }, [n("modal-content", {
            class: e.$style.modal
        }, [n("button", {
            class: e.$style.close,
            attrs: {
                type: "button"
            },
            on: {
                click: e.hide
            }
        }, [n("icon-font", {
            class: e.$style.icon,
            attrs: {
                family: "chess",
                name: "x",
                theme: "primary"
            }
        })], 1), e._v(" "), n("div", {
            class: e.$style.header
        }, [n("a", {
            attrs: {
                href: e.membershipRoute
            }
        }, [n("user-membership-icon", {
            class: e.$style.icon,
            attrs: {
                membership: 50,
                size: "x-large"
            }
        })], 1), e._v(" "), n("h3", {
            class: e.$style.title,
            domProps: {
                textContent: e._s(e.titleString)
            }
        })]), e._v(" "), e.paymentSuccess ? [n("div", {
            class: e.$style.promo
        }, [n("p", {
            class: e.$style.message,
            domProps: {
                innerHTML: e._s(e.translations.thanksToYou(e.giftData.giftReceiverUsername))
            }
        }), e._v(" "), n("a", {
            class: e.$style["receipt-button"],
            attrs: {
                href: e.paymentReceiptLink
            }
        }, [e._v("\n          " + e._s(e.$trans("Order Receipt")) + "\n        ")]), e._v(" "), n("div", {
            class: e.$style.benefits
        }, e._l(e.benefits, function(t) {
            return n("a", {
                key: t.id,
                class: e.$style.benefit,
                attrs: {
                    href: t.link(),
                    title: t.label
                }
            }, [n("span", {
                class: [e.$style.pict, e.$style[t.icon]]
            }), e._v("\n\n            " + e._s(t.label) + "\n          ")])
        }), 0)])] : [n("div", {
            class: e.$style.plans
        }, e._l(e.defaultModalProducts, function(t) {
            return n("label", {
                key: t.sku,
                class: e.$style.plan,
                on: {
                    click: function(n) {
                        return e.setSelectedProduct(t.sku)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "radio"
                },
                domProps: {
                    checked: e.displayRadioChecked(t.sku)
                }
            }), e._v("\n\n          " + e._s(t.description) + " (" + e._s(e.prices[t.sku]) + ")\n        ")])
        }), 0), e._v(" "), n("div", {
            class: e.$style.paymentinfo
        }, [n("div", {
            class: e.$style.methods
        }, [n("label", {
            class: e.$style.paymentmethods
        }, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.currentGateway,
                expression: "currentGateway"
            }],
            attrs: {
                checked: "checked",
                name: "method",
                type: "radio"
            },
            domProps: {
                value: e.gatewayStrings.CARD,
                checked: e._q(e.currentGateway, e.gatewayStrings.CARD)
            },
            on: {
                change: function(t) {
                    e.currentGateway = e.gatewayStrings.CARD
                }
            }
        }), e._v(" "), n("icon-font", {
            class: e.$style.methodicon,
            attrs: {
                family: "chess",
                name: "card",
                theme: "primary"
            }
        })], 1), e._v(" "), n("label", {
            class: e.$style.paymentmethods
        }, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.currentGateway,
                expression: "currentGateway"
            }],
            attrs: {
                name: "method",
                type: "radio"
            },
            domProps: {
                value: e.gatewayStrings.PAYPAL,
                checked: e._q(e.currentGateway, e.gatewayStrings.PAYPAL)
            },
            on: {
                change: function(t) {
                    e.currentGateway = e.gatewayStrings.PAYPAL
                }
            }
        }), e._v(" "), n("icon-font", {
            class: [e.$style.methodicon, e.$style.paypal],
            attrs: {
                family: "chess",
                name: "paypal",
                theme: "primary"
            }
        })], 1)]), e._v(" "), n("adyen-card", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.visibleMethod(e.gatewayStrings.CARD),
                expression: "visibleMethod(gatewayStrings.CARD)"
            }],
            attrs: {
                "adyen-key": e.adyenKey,
                "gift-data": e.giftData,
                "generation-time": e.generationTime,
                "is-gift": !0,
                "is-fetching-saved-payment-details": e.isFetchingSavedPaymentDetails,
                "new-adyen-enabled": e.prices.enableNewAdyen,
                "product-sku": e.selectedSku,
                "saved-payment-details": e.savedPaymentDetails,
                "redirect-on-success": !1,
                "button-text": e.$trans("Give Gift"),
                "form-mode": "payment"
            },
            on: {
                paymentprocessing: e.handlePaymentProcessing,
                paymentsuccessful: e.handlePaymentSuccess
            }
        }), e._v(" "), n("paypal", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.visibleMethod(e.gatewayStrings.PAYPAL),
                expression: "visibleMethod(gatewayStrings.PAYPAL)"
            }],
            attrs: {
                "gift-data": e.giftData,
                "generation-time": e.generationTime,
                "is-gift": !0,
                "product-sku": e.selectedSku
            }
        }), e._v(" "), n("div", {
            class: e.$style.terms,
            domProps: {
                innerHTML: e._s(e.translations.paymentTerms())
            }
        }), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.paymentProcessing,
                expression: "paymentProcessing"
            }],
            class: e.$style["payment-processing"]
        }, [e._v("\n          " + e._s(e.$trans("Processing...")) + "\n        ")])], 1)]], 2)], 1)
    }, [], !1, function modal_gift_membership_injectStyles(e) {
        this.$style = te.default.locals || te.default
    }, null, null);
    t.a = ne.exports
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return a
    }), n.d(t, "c", function() {
        return o
    }), n.d(t, "a", function() {
        return i
    }), n.d(t, "d", function() {
        return s
    });
    var r = function replaceAll(e, t, n) {
            return e.split(t).join(n)
        },
        a = function htmlDecode(e) {
            return (new DOMParser).parseFromString("<!doctype html><body>".concat(e), "text/html").body.textContent
        },
        o = function htmlEncode(e) {
            for (var t = [60, 62], n = e.length, r = []; n--;) {
                var a = e[n].charCodeAt();
                t.indexOf(a) > -1 ? r[n] = "&#".concat(a, ";") : r[n] = e[n]
            }
            return r.join("")
        },
        i = function convertUrls(e, t) {
            var n = "\\b((?:https?://)?((?:[a-zA-Z0-9-]+\\.)+(?:chess|chesskid|chesspersonality|twitch|prochessleague|youtube)\\.com(?:/[\\w#!:.?+=&;%@!-/]*)?))\\b",
                a = function replacement(e, t, n, r, a) {
                    return r > 0 && ("@" === a.substr(r - 1, 1) || '"' === a.substr(r - 1, 1) || "=" === a.substr(r - 1, 1) || "</a>" === a.substr(r + e.length, 4)) ? e : '<a href="https://'.concat(n, '" class="auto-converted" target="_blank">').concat(t, "</a>")
                };
            Object.assign({
                allDomains: !1
            }, t).allDomains && (n += "|\\b((?:(https?://)|(www\\.))([-A-Z0-9+&@#/%=~_|$?!:,.]*[A-Z0-9+&@#/%=~_|$]))", a = function replacement(e, t, n, r, a, o, i, s, c) {
                return t && n && "@" === c.substr(s - 1, 1) ? e : t && n ? '<a href="https://'.concat(n, '" class="auto-converted" target="_blank">').concat(t, "</a>") : '<a href="'.concat(a || "http://").concat(o || "").concat(i || "", '" class="auto-converted" target="_blank">').concat(r, "</a>")
            });
            var o = r(String(e), "&nbsp;", " &nbsp;");
            return o = o.replace(new RegExp(n, "gi"), a), o = r(String(o), " &nbsp;", "&nbsp;")
        },
        s = function userMention(e) {
            return String(e).replace(/(^|[^a-zA-Z0-9_!#$%&*@＠])([@＠]([a-zA-Z0-9_-]{3,20}))/g, function(e, t, n, r) {
                return "".concat(t, '<span class="v-user-popover" v-user-popover="\'').concat(r, "'\" data-username=\"'").concat(r, "'\"> ").concat(n, "</span>")
            })
        }
}, , function(e, t, n) {
    "use strict";
    var r = n(7);
    t.a = function() {
        return -1 !== window.location.href.indexOf(r.a.generate("web_2fa_login"))
    }
}, function(e, t, n) {
    e.exports = n(226)(4)
}, function(e, t, n) {
    var r = n(342),
        a = n(217);
    e.exports = function copyObject(e, t, n, o) {
        var i = !n;
        n || (n = {});
        for (var s = -1, c = t.length; ++s < c;) {
            var l = t[s],
                u = o ? o(n[l], e[l], l, n, e) : void 0;
            void 0 === u && (u = e[l]), i ? a(n, l, u) : r(n, l, u)
        }
        return n
    }
}, function(e, t, n) {
    var r = n(217),
        a = n(145);
    e.exports = function assignMergeValue(e, t, n) {
        (void 0 === n || a(e[t], n)) && (void 0 !== n || t in e) || r(e, t, n)
    }
}, function(e, t, n) {
    var r = n(137),
        a = function() {
            try {
                var e = r(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    e.exports = a
}, function(e, t) {
    e.exports = function safeGet(e, t) {
        return "__proto__" == t ? void 0 : e[t]
    }
}, function(e, t, n) {
    var r = n(233),
        a = n(236);
    e.exports = function forOwn(e, t) {
        return e && r(e, a(t))
    }
}, function(e, t, n) {
    var r = n(348),
        a = n(384)(function(e, t, n) {
            r(e, t, n)
        });
    e.exports = a
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return "1" === e
    }
}, function(e, t, n) {
    "use strict";
    var r, a = n(69),
        o = n(94),
        i = n(214),
        s = {
            name: "modal-container",
            props: {
                boardClass: {
                    type: String,
                    default: ""
                },
                closeOnBackgroundClick: {
                    type: Boolean,
                    default: !0
                },
                easeTransition: {
                    type: Boolean,
                    default: !0
                },
                transition: {
                    type: Object
                }
            },
            data: function data() {
                return {
                    componentStyleTop: "calc(50% + 0px)",
                    rtlClass: o.c,
                    visible: !1
                }
            },
            computed: {
                componentClasses: function componentClasses() {
                    var e = [this.$style["chessboard-mirror"]];
                    return this.visible || e.push(this.$style["no-pointer-events"]), this.easeTransition && e.push(this.$style.transition), e
                }
            },
            created: function created() {
                r = Object(i.a)(this.onResize, 100), window.addEventListener("resize", r)
            },
            beforeDestroy: function beforeDestroy() {
                window.removeEventListener("resize", r)
            },
            methods: {
                hide: function hide() {
                    this.visible = !1
                },
                onBackgroundClick: function onBackgroundClick() {
                    this.closeOnBackgroundClick && this.hide()
                },
                onResize: function onResize() {
                    var e = this.$refs["chessboard-mirror"],
                        t = document.getElementsByClassName(this.boardClass)[0] || Object(a.b)(),
                        n = {
                            height: t.clientHeight,
                            width: t.clientWidth
                        };
                    if (e && (e.style.height = "".concat(n.height, "px"), e.style.width = "".concat(n.width, "px")), this.$refs.content) {
                        var r = this.$refs.content.children[0] || this.$refs.content;
                        this.componentStyleTop = function calculateChessboardStyleTop(e) {
                            var t = e.boardHeight,
                                n = e.modalHeight,
                                r = Math.max(n - t, 0) / 2;
                            return "calc(50% + ".concat(r, "px)")
                        }({
                            boardHeight: n.height,
                            modalHeight: r.getBoundingClientRect().height
                        })
                    }
                },
                show: function show(e) {
                    this.onResize(e), this.visible = !0
                }
            }
        },
        c = n(240),
        l = n(5);
    var u = Object(l.a)(s, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
            ref: "chessboard-mirror",
            class: e.componentClasses
        }, [n("transition", {
            attrs: {
                "enter-active-class": e.transition ? e.transition.enter : e.$style.enter,
                "leave-active-class": e.transition ? e.transition.leave : e.$style.leave
            }
        }, [e.visible ? n("div", {
            class: [e.$style.component, e.transition && e.transition.modal || "", e.rtlClass(e.$style)],
            style: {
                top: e.componentStyleTop
            }
        }, [n("div", {
            class: e.$style.bg,
            on: {
                click: e.onBackgroundClick
            }
        }), e._v(" "), n("div", {
            ref: "content"
        }, [e._t("default")], 2)]) : e._e()])], 1)
    }, [], !1, function injectStyles(e) {
        this.$style = c.default.locals || c.default
    }, null, null);
    t.a = u.exports
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        a = n.n(r),
        o = n(25),
        i = n(7),
        s = n(0),
        c = {
            name: "account-not-activated",
            props: {
                alert: {
                    type: String,
                    required: !0
                }
            },
            data: function data() {
                return {
                    labels: {
                        helpPath: s.a.trans('If you need help, please contact our <a href="%href%">Help and Support Team</a>', {
                            "%href%": i.a.generate("web_help")
                        }),
                        changeEmail: s.a.trans('Please click on the link in your email to verify your account. <a href="%href%">Resend Verification Email</a>', {
                            "%href%": i.a.generate("web_user_settings_change_email")
                        })
                    }
                }
            }
        },
        l = n(259),
        u = n(5);
    var d = Object(u.a)(c, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [n("p", {
                class: e.$style.alert
            }, [e._v("\n    " + e._s(e.alert) + "\n  ")]), e._v(" "), n("p", {
                class: e.$style.first,
                domProps: {
                    innerHTML: e._s(e.labels.changeEmail)
                }
            }), e._v(" "), n("p", {
                domProps: {
                    innerHTML: e._s(e.labels.helpPath)
                }
            })])
        }, [], !1, function injectStyles(e) {
            this.$style = l.default.locals || l.default
        }, null, null).exports,
        p = n(49),
        m = n(46),
        f = n(59),
        h = n(133),
        g = n(63),
        b = n(77),
        v = n(120);

    function ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var y = {
            name: "select-trophy",
            components: {
                FormInput: g.a,
                Pagination: v.a
            },
            directives: {
                ImageDefer: b.a
            },
            data: function data() {
                return {
                    funTrophiesLimit: 110,
                    trophySearch: ""
                }
            },
            computed: function _objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ownKeys(n, !0).forEach(function(t) {
                        a()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, Object(o.mapState)("trophies", ["allTrophiesToGive", "finishedLoadingTrophies", "meta", "trophyType"]), {
                filteredTrophies: function filteredTrophies() {
                    var e = this.trophySearch.toLowerCase();
                    return this.allTrophiesToGive.filter(function(t) {
                        return t.name.toLowerCase().includes(e)
                    })
                }
            }),
            methods: {
                getMoreTrophies: function getMoreTrophies(e) {
                    this.$store.dispatch("trophies/getAllTrophies", {
                        page: e
                    })
                },
                getAllAvailableTrophies: function getAllAvailableTrophies() {
                    if (this.trophySearch.length > 1) return !1;
                    this.$store.dispatch("trophies/getAllTrophies", {
                        limit: this.funTrophiesLimit
                    })
                },
                handleSearch: function handleSearch() {
                    this.trophySearch.length < 1 ? this.getMoreTrophies(1) : this.getAllAvailableTrophies()
                },
                selectTrophyToGive: function selectTrophyToGive(e) {
                    this.$store.commit("trophies/setSelectedTrophy", e), this.$store.commit("trophies/setModalState", p.a.modalStates.send)
                }
            }
        },
        _ = n(260);
    var w = Object(u.a)(y, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [n("div", {
                class: e.$style["pagination-wrapper"]
            }, [e.meta.page > 1 || e.meta.more ? n("pagination", {
                class: [e.$style.pagination],
                attrs: {
                    "change-page": e.getMoreTrophies,
                    "current-page": e.meta.page,
                    "has-more-prop": !0,
                    "more-pages": e.meta.more
                },
                on: {
                    changePage: e.getMoreTrophies
                }
            }) : e._e(), e._v(" "), n("form-input", {
                class: e.$style.search,
                attrs: {
                    placeholder: e.$trans("Search")
                },
                on: {
                    input: e.handleSearch
                },
                model: {
                    value: e.trophySearch,
                    callback: function(t) {
                        e.trophySearch = t
                    },
                    expression: "trophySearch"
                }
            })], 1), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.finishedLoadingTrophies,
                    expression: "finishedLoadingTrophies"
                }],
                class: e.$style["trophies-grid"]
            }, e._l(e.filteredTrophies, function(t) {
                return n("div", {
                    key: t.id,
                    class: e.$style.trophy
                }, [n("a", {
                    on: {
                        click: function(n) {
                            return n.preventDefault(), e.selectTrophyToGive(t)
                        }
                    }
                }, [n("img", {
                    directives: [{
                        name: "image-defer",
                        rawName: "v-image-defer",
                        value: {
                            src: t.image_url,
                            srcset: !0
                        },
                        expression: "{\n            src: trophy.image_url,\n            srcset: true\n          }"
                    }],
                    class: e.$style["trophy-image"],
                    attrs: {
                        height: "97",
                        width: "97",
                        alt: t.name
                    }
                })]), e._v(" "), n("div", {
                    domProps: {
                        textContent: e._s(t.name)
                    }
                })])
            }), 0), e._v(" "), e.meta.page > 1 || e.meta.more ? n("pagination", {
                class: [e.$style.pagination, e.$style.bottom],
                attrs: {
                    "change-page": e.getMoreTrophies,
                    "current-page": e.meta.page,
                    "has-more-prop": !0,
                    "more-pages": e.meta.more
                },
                on: {
                    changePage: e.getMoreTrophies
                }
            }) : e._e()], 1)
        }, [], !1, function select_trophy_injectStyles(e) {
            this.$style = _.default.locals || _.default
        }, null, null).exports,
        O = n(33),
        E = {
            name: "form-error"
        },
        k = n(261);
    var C = Object(u.a)(E, function() {
            var e = this.$createElement;
            return (this._self._c || e)("div", {
                class: this.$style.component
            }, [this._t("default")], 2)
        }, [], !1, function form_error_injectStyles(e) {
            this.$style = k.default.locals || k.default
        }, null, null).exports,
        S = n(257);

    function send_trophyvue_type_script_lang_js_ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var A = {
            name: "send-trophy",
            components: {
                FormButton: O.a,
                FormError: C,
                FormTextarea: S.a
            },
            directives: {
                ImageDefer: b.a
            },
            data: function data() {
                return {
                    labels: {
                        changeLink: s.a.trans("change"),
                        sendTrophy: s.a.trans("Send Award")
                    }
                }
            },
            computed: function send_trophyvue_type_script_lang_js_objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? send_trophyvue_type_script_lang_js_ownKeys(n, !0).forEach(function(t) {
                        a()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : send_trophyvue_type_script_lang_js_ownKeys(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, Object(o.mapState)({
                disableSendButton: function disableSendButton(e) {
                    return e.trophies.disableSendButton
                },
                errorMessage: function errorMessage(e) {
                    return e.trophies.errorMessage
                },
                isFriend: function isFriend(e) {
                    return e.trophies.recipientIsFriend
                },
                selectedTrophy: function selectedTrophy(e) {
                    return e.trophies.selectedTrophy
                },
                user: function user(e) {
                    return e.user
                }
            }), {
                message: {
                    get: function get() {
                        return this.$store.state.trophies.message
                    },
                    set: function set(e) {
                        this.$store.commit("trophies/setMessage", e)
                    }
                }
            }),
            methods: {
                changeSelectedTrophy: function changeSelectedTrophy() {
                    this.$store.commit("trophies/setErrorMessage", ""), this.$store.commit("trophies/setModalState", p.a.modalStates.select)
                },
                sendSelectedTrophy: function sendSelectedTrophy() {
                    var e = this;
                    this.$store.commit("trophies/setErrorMessage", ""), this.$store.dispatch("trophies/sendTrophyToUser").then(function() {
                        e.$store.commit("trophies/setModalState", p.a.modalStates.sent)
                    })
                }
            }
        },
        T = n(262);
    var P = Object(u.a)(A, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [n("div", {
                class: e.$style.left
            }, [n("img", {
                directives: [{
                    name: "image-defer",
                    rawName: "v-image-defer",
                    value: {
                        src: e.selectedTrophy.image_url,
                        srcset: !0
                    },
                    expression: "{\n        src: selectedTrophy.image_url,\n        srcset: true\n      }"
                }],
                attrs: {
                    height: "135",
                    width: "135",
                    alt: e.selectedTrophy.name
                }
            }), e._v(" "), n("p", [e._v("\n      " + e._s(e.selectedTrophy.name) + "\n    ")]), e._v(" "), n("a", {
                class: e.$style.change,
                on: {
                    click: function(t) {
                        return t.preventDefault(), e.changeSelectedTrophy()
                    }
                }
            }, [e._v("\n      " + e._s(e.labels.changeLink) + "\n    ")])]), e._v(" "), n("div", {
                class: e.$style.right
            }, [n("p", {
                class: e.$style.description
            }, [e._v("\n      " + e._s(e.selectedTrophy.description) + "\n    ")]), e._v(" "), e.isFriend ? n("form-textarea", {
                class: e.$style.textarea,
                attrs: {
                    autosize: !0
                },
                model: {
                    value: e.message,
                    callback: function(t) {
                        e.message = t
                    },
                    expression: "message"
                }
            }) : e._e(), e._v(" "), n("form-button", {
                attrs: {
                    size: "large",
                    theme: "basic",
                    disabled: e.disableSendButton
                },
                on: {
                    click: e.sendSelectedTrophy
                }
            }, [e._v("\n      " + e._s(e.labels.sendTrophy) + "\n    ")]), e._v(" "), e.errorMessage ? n("form-error", {
                class: e.$style.error
            }, [e._v("\n      " + e._s(e.errorMessage) + "\n    ")]) : e._e()], 1)])
        }, [], !1, function send_trophy_injectStyles(e) {
            this.$style = T.default.locals || T.default
        }, null, null).exports,
        x = n(19),
        j = n(18),
        M = n(168),
        L = n(169);

    function sent_trophyvue_type_script_lang_js_ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var N = {
            name: "sent-trophy",
            components: {
                IconFont: j.a,
                UserChessTitle: M.a,
                UserUsername: L.a
            },
            directives: {
                ImageDefer: b.a
            },
            data: function data() {
                return {
                    labels: {
                        from: s.a.trans("from"),
                        sent: s.a.trans("Sent")
                    },
                    createDate: x.a.numeric()
                }
            },
            computed: function sent_trophyvue_type_script_lang_js_objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? sent_trophyvue_type_script_lang_js_ownKeys(n, !0).forEach(function(t) {
                        a()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sent_trophyvue_type_script_lang_js_ownKeys(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, Object(o.mapState)({
                message: function message(e) {
                    return e.trophies.message
                },
                selectedTrophy: function selectedTrophy(e) {
                    return e.trophies.selectedTrophy
                },
                user: function user(e) {
                    return e.user
                }
            }), {
                memberViewOfSender: function memberViewOfSender() {
                    return i.a.generate("web_member_view", {
                        username: this.user.username
                    })
                }
            }),
            mounted: function mounted() {
                setTimeout(function() {}, 5e3)
            }
        },
        I = n(265);
    var R = Object(u.a)(N, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
            class: e.$style.component
        }, [n("div", {
            class: e.$style.left
        }, [n("img", {
            directives: [{
                name: "image-defer",
                rawName: "v-image-defer",
                value: {
                    src: e.selectedTrophy.image_url,
                    srcset: !0
                },
                expression: "{\n        src: selectedTrophy.image_url,\n        srcset: true\n    }"
            }],
            attrs: {
                width: "135",
                height: "135",
                src: e.selectedTrophy.image_url,
                alt: e.selectedTrophy.name
            }
        })]), e._v(" "), n("div", {
            class: e.$style.right
        }, [n("h1", [e._v(e._s(e.selectedTrophy.name))]), e._v(" "), n("div", {
            class: e.$style.from
        }, [e._v("\n      " + e._s(e.labels.from) + ":\n      "), e.user.chessTitle ? n("user-chess-title", {
            attrs: {
                title: e.user.chessTitle
            }
        }) : e._e(), e._v(" "), n("user-username", {
            attrs: {
                theme: "gray",
                username: e.user.username
            }
        }), e._v("\n\n      " + e._s(e.createDate) + "\n    ")], 1), e._v(" "), n("p", {
            class: e.$style.message
        }, [e._v("\n      " + e._s(e.message) + "\n    ")]), e._v(" "), n("p", {
            class: e.$style.success
        }, [n("icon-font", {
            class: e.$style.icon,
            attrs: {
                name: "checkmark"
            }
        }), e._v("\n      " + e._s(e.labels.sent) + "\n    ")], 1)])])
    }, [], !1, function sent_trophy_injectStyles(e) {
        this.$style = I.default.locals || I.default
    }, null, null).exports;

    function trophy_popovervue_type_script_lang_js_ownKeys(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n
    }
    var D = {
            name: "give-trophy-modal",
            components: {
                AccountNotActivated: d,
                ModalContainer: m.a,
                ModalContent: f.a,
                SectionTitleDismissible: h.a,
                SelectTrophy: w,
                SendTrophy: P,
                SentTrophy: R
            },
            data: function data() {
                return {
                    labels: {
                        activateAccount: s.a.trans("You must activate your account before you can send trophies.")
                    },
                    modalStates: p.a.modalStates
                }
            },
            computed: function trophy_popovervue_type_script_lang_js_objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? trophy_popovervue_type_script_lang_js_ownKeys(n, !0).forEach(function(t) {
                        a()(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : trophy_popovervue_type_script_lang_js_ownKeys(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, Object(o.mapState)({
                isFriend: function isFriend(e) {
                    return e.trophies.recipientIsFriend
                },
                modalState: function modalState(e) {
                    return e.trophies.modalState
                },
                user: function user(e) {
                    return e.user
                }
            }), {
                title: function title() {
                    return this.modalState === p.a.modalStates.select ? s.a.trans("Select a Trophy") : this.modalState === p.a.modalStates.send ? this.isFriend ? s.a.trans("Add a Message") : s.a.trans("Send Award") : this.modalState === p.a.modalStates.sent ? s.a.trans("Trophy Sent!") : void 0
                }
            }),
            mounted: function mounted() {
                this.user.isActivated && this.$store.dispatch("trophies/getAllTrophies", {
                    page: 1
                }), this.show()
            },
            methods: {
                hide: function hide() {
                    this.$store.commit("trophies/setModalState", p.a.modalStates.select), this.$store.commit("trophies/setMessage", ""), this.$store.commit("trophies/setErrorMessage", ""), this.$refs.modalContainer.hide(), this.$emit("hide")
                },
                show: function show() {
                    this.$refs.modalContainer.show()
                }
            }
        },
        $ = n(266);
    var B = Object(u.a)(D, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("modal-container", {
            ref: "modalContainer",
            on: {
                hide: e.hide
            }
        }, [n("modal-content", {
            ref: "modal",
            class: e.$style.modal
        }, [n("section-title-dismissible", {
            on: {
                close: e.hide
            }
        }, [e._v("\n      " + e._s(e.title) + "\n    ")]), e._v(" "), n("div", {
            class: e.$style.section
        }, [e.user.isActivated ? e.modalState === e.modalStates.select ? n("select-trophy") : e.modalState === e.modalStates.send ? n("send-trophy") : e.modalState === e.modalStates.sent ? n("sent-trophy", {
            on: {
                close: e.hide
            }
        }) : e._e() : n("account-not-activated", {
            attrs: {
                alert: e.labels.activateAccount
            }
        })], 1)], 1)], 1)
    }, [], !1, function trophy_popover_injectStyles(e) {
        this.$style = $.default.locals || $.default
    }, null, null);
    t.a = B.exports
}, function(e, t, n) {
    "use strict";
    var r = n(124),
        a = n(12),
        o = n(33),
        i = n(99),
        s = n(92),
        c = n(18),
        l = n(312),
        u = n(46),
        d = n(59),
        p = {
            name: "game-over-modal",
            components: {
                IconFont: c.a,
                ModalChessboardContainer: l.a,
                ModalContainer: u.a,
                ModalContent: d.a
            },
            props: {
                centerOverParent: {
                    type: Boolean,
                    default: !1
                },
                newbie: {
                    type: Boolean,
                    default: !1
                },
                component: {
                    type: String,
                    default: "modal-container"
                }
            },
            methods: {
                modalDidHide: function modalDidHide() {
                    this.$emit(s.a.MODAL_DID_HIDE)
                },
                showModal: function showModal() {
                    this.$refs.modalContainer.show()
                },
                hideModal: function hideModal() {
                    this.$refs.modalContainer && this.$refs.modalContainer.hide(), this.$emit("hide-modal")
                }
            }
        },
        m = n(278),
        f = n(5);
    var h = Object(f.a)(p, function() {
            var e, t = this,
                n = t.$createElement,
                r = t._self._c || n;
            return r(t.component, {
                ref: "modalContainer",
                tag: "component",
                attrs: {
                    "center-over-parent": t.centerOverParent
                },
                on: {
                    "modal-did-hide": t.modalDidHide
                }
            }, [r("modal-content", {
                class: [t.$style.modal, (e = {}, e[t.$style.newbie] = t.newbie, e)]
            }, [t.newbie ? t._e() : r("div", {
                class: t.$style.header
            }, [r("icon-font", {
                class: t.$style.icon,
                attrs: {
                    family: "chess",
                    theme: "primary",
                    name: "x"
                },
                on: {
                    click: t.hideModal
                }
            })], 1), t._v(" "), r("div", {
                class: t.$style.content
            }, [t._t("content")], 2), t._v(" "), r("div", {
                class: t.$style.footer
            }, [t._t("footer")], 2)])], 1)
        }, [], !1, function injectStyles(e) {
            this.$style = m.default.locals || m.default
        }, null, null).exports,
        g = n(133),
        b = {
            name: "modal-user-report",
            components: {
                FormButton: o.a,
                FormCheckbox: i.a,
                ModalWithFooter: h,
                SectionTitleDismissible: g.a
            },
            props: {
                username: {
                    required: !0,
                    type: String
                }
            },
            data: function data() {
                return {
                    translations: a.p,
                    reportReasons: {},
                    picked: 0,
                    selectedCategory: 0,
                    otherReason: "",
                    blockUser: !1,
                    status: ""
                }
            },
            computed: {
                blockUserLabel: function blockUserLabel() {
                    return "".concat(this.translations.block, " ").concat(this.username, "?")
                },
                showError: function showError() {
                    return 0 === this.otherReason.length && 6 === this.picked
                },
                isDisabled: function isDisabled() {
                    return 0 === this.picked || this.showError
                },
                statusText: function statusText() {
                    return "success" === this.status ? this.$trans("user.report_abuse_success", {
                        "%1$s%": this.username
                    }) : "failed" === this.status ? this.$trans("user.report_abuse_failure") : void 0
                },
                footerButtonText: function footerButtonText() {
                    return this.status ? this.$trans("Close") : this.$trans("Cancel")
                }
            },
            created: function created() {
                var e = this;
                Object(r.a)().then(function(t) {
                    var n = t.data;
                    e.reportReasons = n.filter(function(e) {
                        return !e.parent_reason
                    }).map(function(e) {
                        return e.subcategories = n.filter(function(t) {
                            return t.parent_reason && t.parent_reason === e.id
                        }), e
                    })
                })
            },
            mounted: function mounted() {
                this.$refs.modal.showModal()
            },
            methods: {
                report: function report(e, t, n, a) {
                    var o = this,
                        i = {
                            username: e,
                            picked: t,
                            otherReason: n,
                            blockUser: a
                        };
                    Object(r.c)(i).then(function() {
                        a && o.$emit("block-user", {
                            username: o.username
                        }), o.status = "success"
                    }).catch(function() {
                        return o.status = "failed"
                    })
                },
                restoreDefaults: function restoreDefaults() {
                    this.picked = 0, this.otherReason = "", this.blockUser = !1, this.status = ""
                },
                hide: function hide() {
                    this.$refs.modal && this.$refs.modal.hideModal()
                },
                modalDidHide: function modalDidHide() {
                    this.$emit("modal-did-hide"), this.restoreDefaults()
                },
                selectCategory: function selectCategory(e) {
                    this.selectedCategory = e
                }
            }
        },
        v = n(279);
    var y = Object(f.a)(b, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("modal-with-footer", {
            ref: "modal",
            class: e.$style.component,
            on: {
                "modal-did-hide": e.modalDidHide
            }
        }, [n("template", {
            slot: "content"
        }, [n("h3", {
            class: e.$style.title
        }, [e._v(e._s(e.translations.reportUser(e.username)))]), e._v(" "), e.status ? n("p", {
            class: e.$style.status,
            domProps: {
                textContent: e._s(e.statusText)
            }
        }) : n("div", {
            class: e.$style.content
        }, [e._l(e.reportReasons, function(t) {
            return n("div", {
                key: t.id,
                class: e.$style.radio
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.picked,
                    expression: "picked"
                }],
                attrs: {
                    id: t.id,
                    type: "radio"
                },
                domProps: {
                    value: t.id,
                    checked: e._q(e.picked, t.id)
                },
                on: {
                    click: function(n) {
                        return e.selectCategory(t.id)
                    },
                    change: function(n) {
                        e.picked = t.id
                    }
                }
            }), e._v(" "), n("label", {
                class: e.$style.label,
                attrs: {
                    for: t.id
                }
            }, [e._v(e._s(t.name))]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.id === e.selectedCategory && t.subcategories.length,
                    expression: "reason.id === selectedCategory && reason.subcategories.length"
                }],
                class: e.$style.subcategories
            }, e._l(t.subcategories, function(t) {
                return n("div", {
                    key: t.id,
                    class: e.$style.radio
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.picked,
                        expression: "picked"
                    }],
                    attrs: {
                        id: t.id,
                        type: "radio"
                    },
                    domProps: {
                        value: t.id,
                        checked: e._q(e.picked, t.id)
                    },
                    on: {
                        change: function(n) {
                            e.picked = t.id
                        }
                    }
                }), e._v(" "), n("label", {
                    class: e.$style.label,
                    attrs: {
                        for: t.id
                    }
                }, [e._v(e._s(t.name))])])
            }), 0)])
        }), e._v(" "), n("textarea", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.otherReason,
                expression: "otherReason"
            }],
            class: e.$style.textarea,
            domProps: {
                value: e.otherReason
            },
            on: {
                input: function(t) {
                    t.target.composing || (e.otherReason = t.target.value)
                }
            }
        }), e._v(" "), n("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showError,
                expression: "showError"
            }],
            class: e.$style.error
        }, [e._v(e._s(e.translations.userReportError))])], 2)]), e._v(" "), n("div", {
            attrs: {
                slot: "footer"
            },
            slot: "footer"
        }, [e.status ? e._e() : n("div", {
            class: e.$style.wrapper
        }, [n("form-checkbox", {
            attrs: {
                name: "block",
                label: e.blockUserLabel
            },
            model: {
                value: e.blockUser,
                callback: function(t) {
                    e.blockUser = t
                },
                expression: "blockUser"
            }
        })], 1), e._v(" "), n("div", {
            class: e.$style.wrapper
        }, [n("form-button", {
            class: e.$style.button,
            attrs: {
                size: "large",
                theme: "basic"
            },
            on: {
                click: e.hide
            }
        }, [e._v(e._s(e.footerButtonText) + "\n      ")]), e._v(" "), e.status ? e._e() : n("form-button", {
            class: e.$style.button,
            attrs: {
                theme: "primary",
                size: "large",
                disabled: e.isDisabled
            },
            on: {
                click: function(t) {
                    return t.preventDefault(), e.report(e.username, e.picked, e.otherReason, e.blockUser)
                }
            }
        }, [e._v("\n        " + e._s(e.translations.report) + "\n      ")])], 1)])], 2)
    }, [], !1, function modal_user_report_injectStyles(e) {
        this.$style = v.default.locals || v.default
    }, null, null);
    t.a = y.exports
}, function(e, t, n) {
    "use strict";
    var r = n(12),
        a = {
            name: "flair",
            components: {
                IconFont: n(18).a
            },
            props: {
                available: {
                    type: Boolean,
                    default: !0
                },
                showTheNothingFlair: {
                    type: Boolean,
                    default: !1
                },
                code: {
                    type: String,
                    default: r.c.code
                },
                size: {
                    type: String
                }
            },
            computed: {
                isNothing: function isNothing() {
                    return this.code === r.c.code
                }
            }
        },
        o = n(5),
        i = Object(o.a)(a, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return this.showTheNothingFlair || !this.isNothing ? t("span", {
                class: ["flair-component", "flair-" + this.code, "flair-" + this.size]
            }) : this._e()
        }, [], !1, null, null, null);
    t.a = i.exports
}, function(e, t, n) {
    "use strict";
    var r = n(12),
        a = n(324),
        o = n(168),
        i = n(325),
        s = n(169),
        c = {
            name: "user-tagline",
            components: {
                CountryFlag: a.a,
                UserChessTitle: o.a,
                UserFlairIcon: i.a,
                UserUsername: s.a
            },
            props: {
                country: {
                    type: Object,
                    required: !1
                },
                flairCode: {
                    type: String
                },
                isUsernameClickable: {
                    type: Boolean,
                    default: !0
                },
                isDarkMode: Boolean,
                iconAnchorIsEnabled: {
                    type: Boolean,
                    default: !0
                },
                membership: {
                    type: Number,
                    default: r.k.basic
                },
                rating: {
                    type: Number,
                    required: !1
                },
                title: {
                    type: String,
                    required: !1
                },
                url: {
                    type: String,
                    required: !1
                },
                usernameTheme: {
                    type: String,
                    default: "blue"
                },
                titleUrl: {
                    type: String,
                    required: !1
                },
                username: {
                    type: String,
                    required: !0
                },
                openProfileOnNewTab: {
                    type: Boolean,
                    required: !1
                }
            }
        },
        l = n(276),
        u = n(5);
    var d = Object(u.a)(c, function() {
        var e, t = this,
            n = t.$createElement,
            r = t._self._c || n;
        return r("div", {
            class: [t.$style.component, (e = {}, e[t.$style.darkMode] = t.isDarkMode, e)]
        }, [t.title ? r("user-chess-title", {
            attrs: {
                url: t.titleUrl,
                title: t.title
            }
        }) : t._e(), t._v(" "), r("user-username", {
            class: t.$style.username,
            attrs: {
                "is-clickable": t.isUsernameClickable,
                "open-new-tab": t.openProfileOnNewTab,
                theme: t.isDarkMode ? "dark" : t.usernameTheme,
                url: t.url,
                username: t.username
            }
        }), t._v(" "), t.rating ? r("span", {
            class: t.$style.rating
        }, [t._v("\n    (" + t._s(t.rating) + ")\n  ")]) : t._e(), t._v(" "), t.country ? r("country-flag", {
            attrs: {
                code: t.country.code,
                name: t.country.name
            }
        }) : t._e(), t._v(" "), t.flairCode || t.membership ? r("user-flair-icon", {
            attrs: {
                code: t.flairCode,
                membership: t.membership
            }
        }) : t._e()], 1)
    }, [], !1, function injectStyles(e) {
        this.$style = l.default.locals || l.default
    }, null, null);
    t.a = d.exports
}, function(e, t, n) {
    "use strict";
    var r = n(301),
        a = n(13),
        o = n(11),
        i = n(7),
        s = n(0),
        c = {
            getUserTrophies: function getUserTrophies(e, t) {
                var n = e.commit,
                    r = e.dispatch,
                    s = {
                        username: t.username,
                        trophyType: t.trophyType
                    };
                return o.default.get(i.a.generate("web_member_callback_trophy_list", s)).then(function(e) {
                    if (e.data) return n("setUserTrophies", e.data), localStorage.set("user_trophies", e.data, 60), e.data
                }).catch(function() {
                    var e = a.g.error;
                    r("alerts/create", {
                        type: e,
                        message: a.b.DEFAULT
                    }, {
                        root: !0
                    })
                })
            },
            getAllTrophies: function getAllTrophies(e, t) {
                var n = e.commit,
                    r = e.dispatch,
                    s = e.state;
                n("setFinishedLoading", !1);
                var c = Object.assign({}, {
                    type: s.trophyType
                }, t);
                return o.default.get(i.a.generate("web_callback_get_trophies", c)).then(function(e) {
                    e.data && n("setAllTrophies", e.data)
                }).catch(function() {
                    var e = a.g.error;
                    r("alerts/create", {
                        type: e,
                        message: a.b.DEFAULT
                    }, {
                        root: !0
                    })
                })
            },
            getTrophyShowcase: function getTrophyShowcase(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                return o.default.get(i.a.generate("web_user_trophy_showcase_callback", {
                    username: t
                })).then(function(e) {
                    e.data && n("setUserShowcaseTrophies", e.data)
                }).catch(function() {
                    var e = a.g.error;
                    r("alerts/create", {
                        type: e,
                        message: a.b.DEFAULT
                    }, {
                        root: !0
                    })
                })
            },
            getUserTrophyCount: function getUserTrophyCount(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                return o.default.get(i.a.generate("web_callback_count_user_trophies", {
                    username: t
                })).then(function(e) {
                    e.data && n("setUserTrophiesCount", e.data.count)
                }).catch(function() {
                    var e = a.g.error;
                    r("alerts/create", {
                        type: e,
                        message: a.b.DEFAULT
                    }, {
                        root: !0
                    })
                })
            },
            featureTrophy: function featureTrophy(e, t) {
                var n = e.dispatch,
                    r = t.trophyId,
                    c = t.featured,
                    l = t.username,
                    u = {
                        id: r,
                        featured: c
                    };
                return o.default.post(i.a.generate("web_feature_trophy_callback", u)).then(function(e) {
                    var t = a.g.success,
                        r = function prepAlertMessage(e) {
                            return e.data && e.data.message || a.b.DEFAULT
                        }(e);
                    n("alerts/create", {
                        type: t,
                        message: r
                    }, {
                        root: !0
                    }), n("getTrophyShowcase", l)
                }).catch(function() {
                    var e = a.g.error,
                        t = s.a.trans("Error featuring trophies. Please try again later.");
                    n("alerts/create", {
                        type: e,
                        message: t
                    }, {
                        root: !0
                    })
                })
            },
            sendTrophyToUser: function sendTrophyToUser(e) {
                var t = e.commit,
                    n = e.state,
                    a = {
                        username: n.recipientUsername,
                        trophyId: n.selectedTrophy.id,
                        message: Object(r.c)(n.message)
                    };
                return "number" == typeof n.gameId && (a[n.isLiveGame ? "gameLiveId" : "gameId"] = n.gameId), t("disableSendButton", !0), o.default.post(i.a.generate("web_award_trophy_callback", a)).then(function() {
                    t("disableSendButton", !1)
                }).catch(function(e) {
                    return t("setErrorMessage", e.response.data.message), t("disableSendButton", !1), Promise.reject(e)
                })
            }
        },
        l = {
            allTrophiesToGive: [],
            disableSendButton: !1,
            errorMessage: "",
            finishedLoadingTrophies: !1,
            gameId: null,
            hideShowcase: !1,
            isLiveGame: !1,
            message: "",
            meta: {
                currentPage: 1,
                morePages: !1
            },
            recipientIsFriend: !1,
            modalState: n(49).a.modalStates.select,
            recipientUsername: null,
            selectedTrophy: null,
            trophies: [],
            trophyType: "social",
            userShowcaseTrophies: [],
            userTrophies: [],
            userTrophyCount: 0
        };
    t.a = {
        namespaced: !0,
        actions: c,
        mutations: {
            disableSendButton: function disableSendButton(e, t) {
                e.disableSendButton = t
            },
            setUserTrophies: function setUserTrophies(e, t) {
                e.userTrophies = t
            },
            setAllTrophies: function setAllTrophies(e, t) {
                e.trophies = t.data, e.meta = t.meta, e.allTrophiesToGive = t.data, e.finishedLoadingTrophies = !0
            },
            setErrorMessage: function setErrorMessage(e, t) {
                e.errorMessage = t
            },
            setFinishedLoading: function setFinishedLoading(e, t) {
                e.finishedLoadingTrophies = t
            },
            setGameId: function setGameId(e, t) {
                e.gameId = t
            },
            setIsLiveGame: function setIsLiveGame(e, t) {
                e.isLiveGame = t
            },
            setMessage: function setMessage(e, t) {
                e.message = t
            },
            setModalState: function setModalState(e, t) {
                e.modalState = t
            },
            setRecipientIsFriend: function setRecipientIsFriend(e, t) {
                e.recipientIsFriend = t
            },
            setRecipientUsername: function setRecipientUsername(e, t) {
                e.recipientUsername = t
            },
            setSelectedTrophy: function setSelectedTrophy(e, t) {
                e.selectedTrophy = t
            },
            setTrophyType: function setTrophyType(e, t) {
                e.trophyType = t
            },
            setUserShowcaseTrophies: function setUserShowcaseTrophies(e, t) {
                e.hideShowcase = 0 === t.length, e.userShowcaseTrophies = t
            },
            setUserTrophiesCount: function setUserTrophiesCount(e, t) {
                e.userTrophyCount = t
            }
        },
        state: l
    }
}, , function(e, t) {
    ! function(t, n) {
        ! function() {
            try {
                new Uint8Array(1), new Uint32Array(1), new Int32Array(1);
                return
            } catch (e) {}

            function f(e, t) {
                return this.slice(e, t)
            }

            function c(e, t) {
                arguments.length < 2 && (t = 0);
                for (var n = 0, r = e.length; n < r; ++n, ++t) this[t] = 255 & e[n]
            }

            function d(e) {
                var t;
                if ("number" == typeof e) {
                    t = new Array(e);
                    for (var n = 0; n < e; ++n) t[n] = 0
                } else t = e.slice(0);
                return t.subarray = f, t.buffer = t, t.byteLength = t.length, t.set = c, "object" == typeof e && e.buffer && (t.buffer = e.buffer), t
            }
            try {
                window.Uint8Array = d
            } catch (e) {}
            try {
                window.Uint32Array = d
            } catch (e) {}
            try {
                window.Int32Array = d
            } catch (e) {}
        }(),
        function() {
            try {
                if ("undefined" == typeof window) return;
                if ("btoa" in window) return;
                var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                window.btoa = function(t) {
                    var n, r, a = "";
                    for (n = 0, r = t.length; n < r; n += 3) {
                        var o = 255 & t.charCodeAt(n),
                            i = 255 & t.charCodeAt(n + 1),
                            s = 255 & t.charCodeAt(n + 2),
                            c = (3 & o) << 4 | i >> 4,
                            l = n + 1 < r ? (15 & i) << 2 | s >> 6 : 64,
                            u = n + 2 < r ? 63 & s : 64;
                        a += e.charAt(o >> 2) + e.charAt(c) + e.charAt(l) + e.charAt(u)
                    }
                    return a
                }
            } catch (e) {}
        }();
        var r, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            o = "=";

        function BigInteger(e, t, n) {
            null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
        }

        function nbi() {
            return new BigInteger(null)
        }
        "Microsoft Internet Explorer" == navigator.appName ? (BigInteger.prototype.am = function am2(e, t, n, r, a, o) {
            for (var i = 32767 & t, s = t >> 15; --o >= 0;) {
                var c = 32767 & this[e],
                    l = this[e++] >> 15,
                    u = s * c + l * i;
                a = ((c = i * c + ((32767 & u) << 15) + n[r] + (1073741823 & a)) >>> 30) + (u >>> 15) + s * l + (a >>> 30), n[r++] = 1073741823 & c
            }
            return a
        }, r = 30) : "Netscape" != navigator.appName ? (BigInteger.prototype.am = function am1(e, t, n, r, a, o) {
            for (; --o >= 0;) {
                var i = t * this[e++] + n[r] + a;
                a = Math.floor(i / 67108864), n[r++] = 67108863 & i
            }
            return a
        }, r = 26) : (BigInteger.prototype.am = function am3(e, t, n, r, a, o) {
            for (var i = 16383 & t, s = t >> 14; --o >= 0;) {
                var c = 16383 & this[e],
                    l = this[e++] >> 14,
                    u = s * c + l * i;
                a = ((c = i * c + ((16383 & u) << 14) + n[r] + a) >> 28) + (u >> 14) + s * l, n[r++] = 268435455 & c
            }
            return a
        }, r = 28), BigInteger.prototype.DB = r, BigInteger.prototype.DM = (1 << r) - 1, BigInteger.prototype.DV = 1 << r;
        BigInteger.prototype.FV = Math.pow(2, 52), BigInteger.prototype.F1 = 52 - r, BigInteger.prototype.F2 = 2 * r - 52;
        var i, s, l = "0123456789abcdefghijklmnopqrstuvwxyz",
            u = new Array;
        for (i = "0".charCodeAt(0), s = 0; s <= 9; ++s) u[i++] = s;
        for (i = "a".charCodeAt(0), s = 10; s < 36; ++s) u[i++] = s;
        for (i = "A".charCodeAt(0), s = 10; s < 36; ++s) u[i++] = s;

        function int2char(e) {
            return l.charAt(e)
        }

        function intAt(e, t) {
            var n = u[e.charCodeAt(t)];
            return null == n ? -1 : n
        }

        function nbv(e) {
            var t = nbi();
            return t.fromInt(e), t
        }

        function nbits(e) {
            var t, n = 1;
            return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n
        }

        function Classic(e) {
            this.m = e
        }

        function Montgomery(e) {
            this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
        }

        function Arcfour() {
            this.i = 0, this.j = 0, this.S = new Array
        }
        Classic.prototype.convert = function cConvert(e) {
            return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
        }, Classic.prototype.revert = function cRevert(e) {
            return e
        }, Classic.prototype.reduce = function cReduce(e) {
            e.divRemTo(this.m, null, e)
        }, Classic.prototype.mulTo = function cMulTo(e, t, n) {
            e.multiplyTo(t, n), this.reduce(n)
        }, Classic.prototype.sqrTo = function cSqrTo(e, t) {
            e.squareTo(t), this.reduce(t)
        }, Montgomery.prototype.convert = function montConvert(e) {
            var t = nbi();
            return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(t, t), t
        }, Montgomery.prototype.revert = function montRevert(e) {
            var t = nbi();
            return e.copyTo(t), this.reduce(t), t
        }, Montgomery.prototype.reduce = function montReduce(e) {
            for (; e.t <= this.mt2;) e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var n = 32767 & e[t],
                    r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (e[n = t + this.m.t] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV;) e[n] -= e.DV, e[++n]++
            }
            e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
        }, Montgomery.prototype.mulTo = function montMulTo(e, t, n) {
            e.multiplyTo(t, n), this.reduce(n)
        }, Montgomery.prototype.sqrTo = function montSqrTo(e, t) {
            e.squareTo(t), this.reduce(t)
        }, BigInteger.prototype.copyTo = function bnpCopyTo(e) {
            for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
            e.t = this.t, e.s = this.s
        }, BigInteger.prototype.fromInt = function bnpFromInt(e) {
            this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
        }, BigInteger.prototype.fromString = function bnpFromString(e, t) {
            var n;
            if (16 == t) n = 4;
            else if (8 == t) n = 3;
            else if (256 == t) n = 8;
            else if (2 == t) n = 1;
            else if (32 == t) n = 5;
            else {
                if (4 != t) return void this.fromRadix(e, t);
                n = 2
            }
            this.t = 0, this.s = 0;
            for (var r = e.length, a = !1, o = 0; --r >= 0;) {
                var i = 8 == n ? 255 & e[r] : intAt(e, r);
                i < 0 ? "-" == e.charAt(r) && (a = !0) : (a = !1, 0 == o ? this[this.t++] = i : o + n > this.DB ? (this[this.t - 1] |= (i & (1 << this.DB - o) - 1) << o, this[this.t++] = i >> this.DB - o) : this[this.t - 1] |= i << o, (o += n) >= this.DB && (o -= this.DB))
            }
            8 == n && 0 != (128 & e[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), this.clamp(), a && BigInteger.ZERO.subTo(this, this)
        }, BigInteger.prototype.clamp = function bnpClamp() {
            for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t
        }, BigInteger.prototype.dlShiftTo = function bnpDLShiftTo(e, t) {
            var n;
            for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
            for (n = e - 1; n >= 0; --n) t[n] = 0;
            t.t = this.t + e, t.s = this.s
        }, BigInteger.prototype.drShiftTo = function bnpDRShiftTo(e, t) {
            for (var n = e; n < this.t; ++n) t[n - e] = this[n];
            t.t = Math.max(this.t - e, 0), t.s = this.s
        }, BigInteger.prototype.lShiftTo = function bnpLShiftTo(e, t) {
            var n, r = e % this.DB,
                a = this.DB - r,
                o = (1 << a) - 1,
                i = Math.floor(e / this.DB),
                s = this.s << r & this.DM;
            for (n = this.t - 1; n >= 0; --n) t[n + i + 1] = this[n] >> a | s, s = (this[n] & o) << r;
            for (n = i - 1; n >= 0; --n) t[n] = 0;
            t[i] = s, t.t = this.t + i + 1, t.s = this.s, t.clamp()
        }, BigInteger.prototype.rShiftTo = function bnpRShiftTo(e, t) {
            t.s = this.s;
            var n = Math.floor(e / this.DB);
            if (n >= this.t) t.t = 0;
            else {
                var r = e % this.DB,
                    a = this.DB - r,
                    o = (1 << r) - 1;
                t[0] = this[n] >> r;
                for (var i = n + 1; i < this.t; ++i) t[i - n - 1] |= (this[i] & o) << a, t[i - n] = this[i] >> r;
                r > 0 && (t[this.t - n - 1] |= (this.s & o) << a), t.t = this.t - n, t.clamp()
            }
        }, BigInteger.prototype.subTo = function bnpSubTo(e, t) {
            for (var n = 0, r = 0, a = Math.min(e.t, this.t); n < a;) r += this[n] - e[n], t[n++] = r & this.DM, r >>= this.DB;
            if (e.t < this.t) {
                for (r -= e.s; n < this.t;) r += this[n], t[n++] = r & this.DM, r >>= this.DB;
                r += this.s
            } else {
                for (r += this.s; n < e.t;) r -= e[n], t[n++] = r & this.DM, r >>= this.DB;
                r -= e.s
            }
            t.s = r < 0 ? -1 : 0, r < -1 ? t[n++] = this.DV + r : r > 0 && (t[n++] = r), t.t = n, t.clamp()
        }, BigInteger.prototype.multiplyTo = function bnpMultiplyTo(e, t) {
            var n = this.abs(),
                r = e.abs(),
                a = n.t;
            for (t.t = a + r.t; --a >= 0;) t[a] = 0;
            for (a = 0; a < r.t; ++a) t[a + n.t] = n.am(0, r[a], t, a, 0, n.t);
            t.s = 0, t.clamp(), this.s != e.s && BigInteger.ZERO.subTo(t, t)
        }, BigInteger.prototype.squareTo = function bnpSquareTo(e) {
            for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0;) e[n] = 0;
            for (n = 0; n < t.t - 1; ++n) {
                var r = t.am(n, t[n], e, 2 * n, 0, 1);
                (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1)
            }
            e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp()
        }, BigInteger.prototype.divRemTo = function bnpDivRemTo(e, t, n) {
            var r = e.abs();
            if (!(r.t <= 0)) {
                var a = this.abs();
                if (a.t < r.t) return null != t && t.fromInt(0), void(null != n && this.copyTo(n));
                null == n && (n = nbi());
                var o = nbi(),
                    i = this.s,
                    s = e.s,
                    c = this.DB - nbits(r[r.t - 1]);
                c > 0 ? (r.lShiftTo(c, o), a.lShiftTo(c, n)) : (r.copyTo(o), a.copyTo(n));
                var l = o.t,
                    u = o[l - 1];
                if (0 != u) {
                    var d = u * (1 << this.F1) + (l > 1 ? o[l - 2] >> this.F2 : 0),
                        p = this.FV / d,
                        m = (1 << this.F1) / d,
                        f = 1 << this.F2,
                        h = n.t,
                        g = h - l,
                        b = null == t ? nbi() : t;
                    for (o.dlShiftTo(g, b), n.compareTo(b) >= 0 && (n[n.t++] = 1, n.subTo(b, n)), BigInteger.ONE.dlShiftTo(l, b), b.subTo(o, o); o.t < l;) o[o.t++] = 0;
                    for (; --g >= 0;) {
                        var v = n[--h] == u ? this.DM : Math.floor(n[h] * p + (n[h - 1] + f) * m);
                        if ((n[h] += o.am(0, v, n, g, 0, l)) < v)
                            for (o.dlShiftTo(g, b), n.subTo(b, n); n[h] < --v;) n.subTo(b, n)
                    }
                    null != t && (n.drShiftTo(l, t), i != s && BigInteger.ZERO.subTo(t, t)), n.t = l, n.clamp(), c > 0 && n.rShiftTo(c, n), i < 0 && BigInteger.ZERO.subTo(n, n)
                }
            }
        }, BigInteger.prototype.invDigit = function bnpInvDigit() {
            if (this.t < 1) return 0;
            var e = this[0];
            if (0 == (1 & e)) return 0;
            var t = 3 & e;
            return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
        }, BigInteger.prototype.isEven = function bnpIsEven() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }, BigInteger.prototype.exp = function bnpExp(e, t) {
            if (e > 4294967295 || e < 1) return BigInteger.ONE;
            var n = nbi(),
                r = nbi(),
                a = t.convert(this),
                o = nbits(e) - 1;
            for (a.copyTo(n); --o >= 0;)
                if (t.sqrTo(n, r), (e & 1 << o) > 0) t.mulTo(r, a, n);
                else {
                    var i = n;
                    n = r, r = i
                }
            return t.revert(n)
        }, BigInteger.prototype.toString = function bnToString(e) {
            if (this.s < 0) return "-" + this.negate().toString(e);
            var t;
            if (16 == e) t = 4;
            else if (8 == e) t = 3;
            else if (2 == e) t = 1;
            else if (32 == e) t = 5;
            else {
                if (4 != e) return this.toRadix(e);
                t = 2
            }
            var n, r = (1 << t) - 1,
                a = !1,
                o = "",
                i = this.t,
                s = this.DB - i * this.DB % t;
            if (i-- > 0)
                for (s < this.DB && (n = this[i] >> s) > 0 && (a = !0, o = int2char(n)); i >= 0;) s < t ? (n = (this[i] & (1 << s) - 1) << t - s, n |= this[--i] >> (s += this.DB - t)) : (n = this[i] >> (s -= t) & r, s <= 0 && (s += this.DB, --i)), n > 0 && (a = !0), a && (o += int2char(n));
            return a ? o : "0"
        }, BigInteger.prototype.negate = function bnNegate() {
            var e = nbi();
            return BigInteger.ZERO.subTo(this, e), e
        }, BigInteger.prototype.abs = function bnAbs() {
            return this.s < 0 ? this.negate() : this
        }, BigInteger.prototype.compareTo = function bnCompareTo(e) {
            var t = this.s - e.s;
            if (0 != t) return t;
            var n = this.t;
            if (0 != (t = n - e.t)) return this.s < 0 ? -t : t;
            for (; --n >= 0;)
                if (0 != (t = this[n] - e[n])) return t;
            return 0
        }, BigInteger.prototype.bitLength = function bnBitLength() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
        }, BigInteger.prototype.mod = function bnMod(e) {
            var t = nbi();
            return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(BigInteger.ZERO) > 0 && e.subTo(t, t), t
        }, BigInteger.prototype.modPowInt = function bnModPowInt(e, t) {
            var n;
            return n = e < 256 || t.isEven() ? new Classic(t) : new Montgomery(t), this.exp(e, n)
        }, BigInteger.ZERO = nbv(0), BigInteger.ONE = nbv(1), Arcfour.prototype.init = function ARC4init(e) {
            var t, n, r;
            for (t = 0; t < 256; ++t) this.S[t] = t;
            for (n = 0, t = 0; t < 256; ++t) n = n + this.S[t] + e[t % e.length] & 255, r = this.S[t], this.S[t] = this.S[n], this.S[n] = r;
            this.i = 0, this.j = 0
        }, Arcfour.prototype.next = function ARC4next() {
            var e;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255]
        };
        var d, p, m, f = 256;

        function rng_seed_time() {
            ! function rng_seed_int(e) {
                p[m++] ^= 255 & e, p[m++] ^= e >> 8 & 255, p[m++] ^= e >> 16 & 255, p[m++] ^= e >> 24 & 255, m >= f && (m -= f)
            }((new Date).getTime())
        }
        if (null == p) {
            p = [], m = 0;
            try {
                if (window.crypto && window.crypto.getRandomValues) {
                    var h = new Uint8Array(32);
                    for (window.crypto.getRandomValues(h), O = 0; O < 32; ++O) p[m++] = h[O]
                } else if (window.msCrypto && window.msCrypto.getRandomValues) {
                    h = new Uint8Array(32);
                    for (window.msCrypto.getRandomValues(h), O = 0; O < 32; ++O) p[m++] = h[O]
                } else if (window.crypto && window.crypto.random) {
                    var g = window.crypto.random(32);
                    for (O = 0; O < g.length; ++O) p[m++] = 255 & g.charCodeAt(O)
                }
            } catch (e) {}
            for (; m < f;) O = Math.floor(65536 * Math.random()), p[m++] = O >>> 8, p[m++] = 255 & O;
            m = 0, rng_seed_time()
        }

        function rng_get_byte() {
            if (null == d) {
                for (rng_seed_time(), (d = function prng_newstate() {
                        return new Arcfour
                    }()).init(p), m = 0; m < p.length; ++m) p[m] = 0;
                m = 0
            }
            return d.next()
        }

        function SecureRandom() {}

        function RSAKey() {
            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
        }

        function q(e) {
            throw e
        }
        SecureRandom.prototype.nextBytes = function rng_get_bytes(e) {
            var t;
            for (t = 0; t < e.length; ++t) e[t] = rng_get_byte()
        }, RSAKey.prototype.doPublic = function RSADoPublic(e) {
            return e.modPowInt(this.e, this.n)
        }, RSAKey.prototype.setPublic = function RSASetPublic(e, t) {
            null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = function parseBigInt(e, t) {
                return new BigInteger(e, t)
            }(e, 16), this.e = parseInt(t, 16)) : alert("Invalid RSA public key")
        }, RSAKey.prototype.encrypt = function RSAEncrypt(e) {
            var t = function pkcs1pad2(e, t) {
                if (t < e.length + 11) return alert("Message too long for RSA"), null;
                for (var n = new Array, r = e.length - 1; r >= 0 && t > 0;) n[--t] = e[r--];
                n[--t] = 0;
                for (var a = new SecureRandom, o = new Array; t > 2;) {
                    for (o[0] = 0; 0 == o[0];) a.nextBytes(o);
                    n[--t] = o[0]
                }
                return n[--t] = 2, n[--t] = 0, new BigInteger(n)
            }(e, this.n.bitLength() + 7 >> 3);
            if (null == t) return null;
            var n = this.doPublic(t);
            if (null == n) return null;
            var r = n.toString(16);
            return 0 == (1 & r.length) ? r : "0" + r
        }, RSAKey.prototype.encrypt_b64 = function RSAEncryptB64(e) {
            var t = this.encrypt(e);
            return t ? function hex2b64(e) {
                var t, n, r = "";
                for (t = 0; t + 3 <= e.length; t += 3) n = parseInt(e.substring(t, t + 3), 16), r += a.charAt(n >> 6) + a.charAt(63 & n);
                for (t + 1 == e.length ? (n = parseInt(e.substring(t, t + 1), 16), r += a.charAt(n << 2)) : t + 2 == e.length && (n = parseInt(e.substring(t, t + 2), 16), r += a.charAt(n >> 2) + a.charAt((3 & n) << 4));
                    (3 & r.length) > 0;) r += o;
                return r
            }(t) : null
        };
        var v, _, w, O = void 0,
            k = !1,
            S = {
                cipher: {},
                hash: {},
                keyexchange: {},
                mode: {},
                misc: {},
                codec: {},
                exception: {
                    corrupt: function(e) {
                        this.toString = function() {
                            return "CORRUPT: " + this.message
                        }, this.message = e
                    },
                    invalid: function(e) {
                        this.toString = function() {
                            return "INVALID: " + this.message
                        }, this.message = e
                    },
                    bug: function(e) {
                        this.toString = function() {
                            return "BUG: " + this.message
                        }, this.message = e
                    },
                    notReady: function(e) {
                        this.toString = function() {
                            return "NOT READY: " + this.message
                        }, this.message = e
                    }
                }
            };

        function y(e, t, n) {
            4 !== t.length && q(new S.exception.invalid("invalid aes block size"));
            var r = e.b[n],
                a = t[0] ^ r[0],
                o = t[n ? 3 : 1] ^ r[1],
                i = t[2] ^ r[2];
            t = t[n ? 1 : 3] ^ r[3];
            var s, c, l, u, d = r.length / 4 - 2,
                p = 4,
                m = [0, 0, 0, 0];
            e = (s = e.k[n])[0];
            var f = s[1],
                h = s[2],
                g = s[3],
                b = s[4];
            for (u = 0; u < d; u++) s = e[a >>> 24] ^ f[o >> 16 & 255] ^ h[i >> 8 & 255] ^ g[255 & t] ^ r[p], c = e[o >>> 24] ^ f[i >> 16 & 255] ^ h[t >> 8 & 255] ^ g[255 & a] ^ r[p + 1], l = e[i >>> 24] ^ f[t >> 16 & 255] ^ h[a >> 8 & 255] ^ g[255 & o] ^ r[p + 2], t = e[t >>> 24] ^ f[a >> 16 & 255] ^ h[o >> 8 & 255] ^ g[255 & i] ^ r[p + 3], p += 4, a = s, o = c, i = l;
            for (u = 0; 4 > u; u++) m[n ? 3 & -u : u] = b[a >>> 24] << 24 ^ b[o >> 16 & 255] << 16 ^ b[i >> 8 & 255] << 8 ^ b[255 & t] ^ r[p++], s = a, a = o, o = i, i = t, t = s;
            return m
        }

        function g(e, t) {
            var n, r, a, o = t.slice(0),
                i = e.r,
                s = e.b,
                c = i[0],
                l = i[1],
                u = i[2],
                d = i[3],
                p = i[4],
                m = i[5],
                f = i[6],
                h = i[7];
            for (n = 0; 64 > n; n++) 16 > n ? r = o[n] : (r = o[n + 1 & 15], a = o[n + 14 & 15], r = o[15 & n] = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (a >>> 17 ^ a >>> 19 ^ a >>> 10 ^ a << 15 ^ a << 13) + o[15 & n] + o[n + 9 & 15] | 0), r = r + h + (p >>> 6 ^ p >>> 11 ^ p >>> 25 ^ p << 26 ^ p << 21 ^ p << 7) + (f ^ p & (m ^ f)) + s[n], h = f, f = m, m = p, p = d + r | 0, d = u, u = l, c = r + ((l = c) & u ^ d & (l ^ u)) + (l >>> 2 ^ l >>> 13 ^ l >>> 22 ^ l << 30 ^ l << 19 ^ l << 10) | 0;
            i[0] = i[0] + c | 0, i[1] = i[1] + l | 0, i[2] = i[2] + u | 0, i[3] = i[3] + d | 0, i[4] = i[4] + p | 0, i[5] = i[5] + m | 0, i[6] = i[6] + f | 0, i[7] = i[7] + h | 0
        }

        function C(e, t) {
            var n, r = S.random.w[e],
                a = [];
            for (n in r) r.hasOwnProperty(n) && a.push(r[n]);
            for (n = 0; n < a.length; n++) a[n](t)
        }

        function E(e) {
            "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? S.random.addEntropy(window.performance.now(), e, "loadtime") : S.random.addEntropy((new Date).valueOf(), e, "loadtime")
        }

        function A(e) {
            e.b = B(e).concat(B(e)), e.A = new S.cipher.aes(e.b)
        }

        function B(e) {
            for (var t = 0; 4 > t && (e.f[t] = e.f[t] + 1 | 0, !e.f[t]); t++);
            return e.A.encrypt(e.f)
        }

        function D(e, t) {
            return function() {
                t.apply(e, arguments)
            }
        }
        void 0 !== e && e.exports && (e.exports = S), S.cipher.aes = function(e) {
            this.k[0][0][0] || this.D();
            var t, n, r, a, o = this.k[0][4],
                i = this.k[1],
                s = 1;
            for (4 !== (t = e.length) && 6 !== t && 8 !== t && q(new S.exception.invalid("invalid aes key size")), this.b = [r = e.slice(0), a = []], e = t; e < 4 * t + 28; e++) n = r[e - 1], (0 == e % t || 8 === t && 4 == e % t) && (n = o[n >>> 24] << 24 ^ o[n >> 16 & 255] << 16 ^ o[n >> 8 & 255] << 8 ^ o[255 & n], 0 == e % t && (n = n << 8 ^ n >>> 24 ^ s << 24, s = s << 1 ^ 283 * (s >> 7))), r[e] = r[e - t] ^ n;
            for (t = 0; e; t++, e--) n = r[3 & t ? e : e - 4], a[t] = 4 >= e || 4 > t ? n : i[0][o[n >>> 24]] ^ i[1][o[n >> 16 & 255]] ^ i[2][o[n >> 8 & 255]] ^ i[3][o[255 & n]]
        }, S.cipher.aes.prototype = {
            encrypt: function(e) {
                return y(this, e, 0)
            },
            decrypt: function(e) {
                return y(this, e, 1)
            },
            k: [
                [
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            ],
            D: function() {
                var e, t, n, r, a, o, i, s = this.k[0],
                    c = this.k[1],
                    l = s[4],
                    u = c[4],
                    d = [],
                    p = [];
                for (e = 0; 256 > e; e++) p[(d[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
                for (t = n = 0; !l[t]; t ^= r || 1, n = p[n] || 1)
                    for (o = (o = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4) >> 8 ^ 255 & o ^ 99, l[t] = o, u[o] = t, i = 16843009 * (a = d[e = d[r = d[t]]]) ^ 65537 * e ^ 257 * r ^ 16843008 * t, a = 257 * d[o] ^ 16843008 * o, e = 0; 4 > e; e++) s[e][t] = a = a << 24 ^ a >>> 8, c[e][o] = i = i << 24 ^ i >>> 8;
                for (e = 0; 5 > e; e++) s[e] = s[e].slice(0), c[e] = c[e].slice(0)
            }
        }, S.bitArray = {
            bitSlice: function(e, t, n) {
                return e = S.bitArray.P(e.slice(t / 32), 32 - (31 & t)).slice(1), n === O ? e : S.bitArray.clamp(e, n - t)
            },
            extract: function(e, t, n) {
                var r = Math.floor(-t - n & 31);
                return (-32 & (t + n - 1 ^ t) ? e[t / 32 | 0] << 32 - r ^ e[t / 32 + 1 | 0] >>> r : e[t / 32 | 0] >>> r) & (1 << n) - 1
            },
            concat: function(e, t) {
                if (0 === e.length || 0 === t.length) return e.concat(t);
                var n = e[e.length - 1],
                    r = S.bitArray.getPartial(n);
                return 32 === r ? e.concat(t) : S.bitArray.P(t, r, 0 | n, e.slice(0, e.length - 1))
            },
            bitLength: function(e) {
                var t = e.length;
                return 0 === t ? 0 : 32 * (t - 1) + S.bitArray.getPartial(e[t - 1])
            },
            clamp: function(e, t) {
                if (32 * e.length < t) return e;
                var n = (e = e.slice(0, Math.ceil(t / 32))).length;
                return t &= 31, 0 < n && t && (e[n - 1] = S.bitArray.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e
            },
            partial: function(e, t, n) {
                return 32 === e ? t : (n ? 0 | t : t << 32 - e) + 1099511627776 * e
            },
            getPartial: function(e) {
                return Math.round(e / 1099511627776) || 32
            },
            equal: function(e, t) {
                if (S.bitArray.bitLength(e) !== S.bitArray.bitLength(t)) return k;
                var n, r = 0;
                for (n = 0; n < e.length; n++) r |= e[n] ^ t[n];
                return 0 === r
            },
            P: function(e, t, n, r) {
                var a;
                for (a = 0, r === O && (r = []); 32 <= t; t -= 32) r.push(n), n = 0;
                if (0 === t) return r.concat(e);
                for (a = 0; a < e.length; a++) r.push(n | e[a] >>> t), n = e[a] << 32 - t;
                return a = e.length ? e[e.length - 1] : 0, e = S.bitArray.getPartial(a), r.push(S.bitArray.partial(t + e & 31, 32 < t + e ? n : r.pop(), 1)), r
            },
            l: function(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]]
            },
            byteswapM: function(e) {
                var t, n;
                for (t = 0; t < e.length; ++t) n = e[t], e[t] = n >>> 24 | n >>> 8 & 65280 | (65280 & n) << 8 | n << 24;
                return e
            }
        }, S.codec.utf8String = {
            fromBits: function(e) {
                var t, n, r = "",
                    a = S.bitArray.bitLength(e);
                for (t = 0; t < a / 8; t++) 0 == (3 & t) && (n = e[t / 4]), r += String.fromCharCode(n >>> 24), n <<= 8;
                return decodeURIComponent(escape(r))
            },
            toBits: function(e) {
                e = unescape(encodeURIComponent(e));
                var t, n = [],
                    r = 0;
                for (t = 0; t < e.length; t++) r = r << 8 | e.charCodeAt(t), 3 == (3 & t) && (n.push(r), r = 0);
                return 3 & t && n.push(S.bitArray.partial(8 * (3 & t), r)), n
            }
        }, S.codec.hex = {
            fromBits: function(e) {
                var t, n = "";
                for (t = 0; t < e.length; t++) n += (0xf00000000000 + (0 | e[t])).toString(16).substr(4);
                return n.substr(0, S.bitArray.bitLength(e) / 4)
            },
            toBits: function(e) {
                var t, n, r = [];
                for (n = (e = e.replace(/\s|0x/g, "")).length, e += "00000000", t = 0; t < e.length; t += 8) r.push(0 ^ parseInt(e.substr(t, 8), 16));
                return S.bitArray.clamp(r, 4 * n)
            }
        }, S.codec.base64 = {
            J: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            fromBits: function(e, t, n) {
                var r = "",
                    a = 0,
                    o = S.codec.base64.J,
                    i = 0,
                    s = S.bitArray.bitLength(e);
                for (n && (o = o.substr(0, 62) + "-_"), n = 0; 6 * r.length < s;) r += o.charAt((i ^ e[n] >>> a) >>> 26), 6 > a ? (i = e[n] << 6 - a, a += 26, n++) : (i <<= 6, a -= 6);
                for (; 3 & r.length && !t;) r += "=";
                return r
            },
            toBits: function(e, t) {
                e = e.replace(/\s|=/g, "");
                var n, r, a = [],
                    o = 0,
                    i = S.codec.base64.J,
                    s = 0;
                for (t && (i = i.substr(0, 62) + "-_"), n = 0; n < e.length; n++) 0 > (r = i.indexOf(e.charAt(n))) && q(new S.exception.invalid("this isn't base64!")), 26 < o ? (o -= 26, a.push(s ^ r >>> o), s = r << 32 - o) : s ^= r << 32 - (o += 6);
                return 56 & o && a.push(S.bitArray.partial(56 & o, s, 1)), a
            }
        }, S.codec.base64url = {
            fromBits: function(e) {
                return S.codec.base64.fromBits(e, 1, 1)
            },
            toBits: function(e) {
                return S.codec.base64.toBits(e, 1)
            }
        }, S.hash.sha256 = function(e) {
            this.b[0] || this.D(), e ? (this.r = e.r.slice(0), this.o = e.o.slice(0), this.h = e.h) : this.reset()
        }, S.hash.sha256.hash = function(e) {
            return (new S.hash.sha256).update(e).finalize()
        }, S.hash.sha256.prototype = {
            blockSize: 512,
            reset: function() {
                return this.r = this.N.slice(0), this.o = [], this.h = 0, this
            },
            update: function(e) {
                "string" == typeof e && (e = S.codec.utf8String.toBits(e));
                var t, n = this.o = S.bitArray.concat(this.o, e);
                for (t = this.h, e = this.h = t + S.bitArray.bitLength(e), t = 512 + t & -512; t <= e; t += 512) g(this, n.splice(0, 16));
                return this
            },
            finalize: function() {
                var e, t = this.o,
                    n = this.r;
                for (e = (t = S.bitArray.concat(t, [S.bitArray.partial(1, 1)])).length + 2; 15 & e; e++) t.push(0);
                for (t.push(Math.floor(this.h / 4294967296)), t.push(0 | this.h); t.length;) g(this, t.splice(0, 16));
                return this.reset(), n
            },
            N: [],
            b: [],
            D: function() {
                function f(e) {
                    return 4294967296 * (e - Math.floor(e)) | 0
                }
                var e, t = 0,
                    n = 2;
                e: for (; 64 > t; n++) {
                    for (e = 2; e * e <= n; e++)
                        if (0 == n % e) continue e;
                    8 > t && (this.N[t] = f(Math.pow(n, .5))), this.b[t] = f(Math.pow(n, 1 / 3)), t++
                }
            }
        }, S.mode.ccm = {
            name: "ccm",
            encrypt: function(e, t, n, r, a) {
                var o, i = t.slice(0),
                    s = S.bitArray,
                    c = s.bitLength(n) / 8,
                    l = s.bitLength(i) / 8;
                for (a = a || 64, r = r || [], 7 > c && q(new S.exception.invalid("ccm: iv must be at least 7 bytes")), o = 2; 4 > o && l >>> 8 * o; o++);
                return o < 15 - c && (o = 15 - c), n = s.clamp(n, 8 * (15 - o)), t = S.mode.ccm.L(e, t, n, r, a, o), i = S.mode.ccm.p(e, i, n, t, a, o), s.concat(i.data, i.tag)
            },
            decrypt: function(e, t, n, r, a) {
                a = a || 64, r = r || [];
                var o = S.bitArray,
                    i = o.bitLength(n) / 8,
                    s = o.bitLength(t),
                    c = o.clamp(t, s - a),
                    l = o.bitSlice(t, s - a);
                s = (s - a) / 8;
                for (7 > i && q(new S.exception.invalid("ccm: iv must be at least 7 bytes")), t = 2; 4 > t && s >>> 8 * t; t++);
                return t < 15 - i && (t = 15 - i), n = o.clamp(n, 8 * (15 - t)), c = S.mode.ccm.p(e, c, n, l, a, t), e = S.mode.ccm.L(e, c.data, n, r, a, t), o.equal(c.tag, e) || q(new S.exception.corrupt("ccm: tag doesn't match")), c.data
            },
            L: function(e, t, n, r, a, o) {
                var i = [],
                    s = S.bitArray,
                    c = s.l;
                if (((a /= 8) % 2 || 4 > a || 16 < a) && q(new S.exception.invalid("ccm: invalid tag length")), (4294967295 < r.length || 4294967295 < t.length) && q(new S.exception.bug("ccm: can't deal with 4GiB or more data")), o = [s.partial(8, (r.length ? 64 : 0) | a - 2 << 2 | o - 1)], (o = s.concat(o, n))[3] |= s.bitLength(t) / 8, o = e.encrypt(o), r.length)
                    for (65279 >= (n = s.bitLength(r) / 8) ? i = [s.partial(16, n)] : 4294967295 >= n && (i = s.concat([s.partial(16, 65534)], [n])), i = s.concat(i, r), r = 0; r < i.length; r += 4) o = e.encrypt(c(o, i.slice(r, r + 4).concat([0, 0, 0])));
                for (r = 0; r < t.length; r += 4) o = e.encrypt(c(o, t.slice(r, r + 4).concat([0, 0, 0])));
                return s.clamp(o, 8 * a)
            },
            p: function(e, t, n, r, a, o) {
                var i, s = S.bitArray;
                i = s.l;
                var c = t.length,
                    l = s.bitLength(t);
                if (n = s.concat([s.partial(8, o - 1)], n).concat([0, 0, 0]).slice(0, 4), r = s.bitSlice(i(r, e.encrypt(n)), 0, a), !c) return {
                    tag: r,
                    data: []
                };
                for (i = 0; i < c; i += 4) n[3]++, a = e.encrypt(n), t[i] ^= a[0], t[i + 1] ^= a[1], t[i + 2] ^= a[2], t[i + 3] ^= a[3];
                return {
                    tag: r,
                    data: s.clamp(t, l)
                }
            }
        }, S.mode.ocb2 = {
            name: "ocb2",
            encrypt: function(e, t, n, r, a, o) {
                128 !== S.bitArray.bitLength(n) && q(new S.exception.invalid("ocb iv must be 128 bits"));
                var i, s = S.mode.ocb2.H,
                    c = S.bitArray,
                    l = c.l,
                    u = [0, 0, 0, 0];
                n = s(e.encrypt(n));
                var d, p = [];
                for (r = r || [], a = a || 64, i = 0; i + 4 < t.length; i += 4) u = l(u, d = t.slice(i, i + 4)), p = p.concat(l(n, e.encrypt(l(n, d)))), n = s(n);
                return d = t.slice(i), t = c.bitLength(d), i = e.encrypt(l(n, [0, 0, 0, t])), d = c.clamp(l(d.concat([0, 0, 0]), i), t), u = l(u, l(d.concat([0, 0, 0]), i)), u = e.encrypt(l(u, l(n, s(n)))), r.length && (u = l(u, o ? r : S.mode.ocb2.pmac(e, r))), p.concat(c.concat(d, c.clamp(u, a)))
            },
            decrypt: function(e, t, n, r, a, o) {
                128 !== S.bitArray.bitLength(n) && q(new S.exception.invalid("ocb iv must be 128 bits")), a = a || 64;
                var i, s, c = S.mode.ocb2.H,
                    l = S.bitArray,
                    u = l.l,
                    d = [0, 0, 0, 0],
                    p = c(e.encrypt(n)),
                    m = S.bitArray.bitLength(t) - a,
                    f = [];
                for (r = r || [], n = 0; n + 4 < m / 32; n += 4) i = u(p, e.decrypt(u(p, t.slice(n, n + 4)))), d = u(d, i), f = f.concat(i), p = c(p);
                return s = m - 32 * n, i = e.encrypt(u(p, [0, 0, 0, s])), i = u(i, l.clamp(t.slice(n), s).concat([0, 0, 0])), d = u(d, i), d = e.encrypt(u(d, u(p, c(p)))), r.length && (d = u(d, o ? r : S.mode.ocb2.pmac(e, r))), l.equal(l.clamp(d, a), l.bitSlice(t, m)) || q(new S.exception.corrupt("ocb: tag doesn't match")), f.concat(l.clamp(i, s))
            },
            pmac: function(e, t) {
                var n, r = S.mode.ocb2.H,
                    a = S.bitArray,
                    o = a.l,
                    i = [0, 0, 0, 0],
                    s = o(s = e.encrypt([0, 0, 0, 0]), r(r(s)));
                for (n = 0; n + 4 < t.length; n += 4) s = r(s), i = o(i, e.encrypt(o(s, t.slice(n, n + 4))));
                return n = t.slice(n), 128 > a.bitLength(n) && (s = o(s, r(s)), n = a.concat(n, [-2147483648, 0, 0, 0])), i = o(i, n), e.encrypt(o(r(o(s, r(s))), i))
            },
            H: function(e) {
                return [e[0] << 1 ^ e[1] >>> 31, e[1] << 1 ^ e[2] >>> 31, e[2] << 1 ^ e[3] >>> 31, e[3] << 1 ^ 135 * (e[0] >>> 31)]
            }
        }, S.mode.gcm = {
            name: "gcm",
            encrypt: function(e, t, n, r, a) {
                var o = t.slice(0);
                return t = S.bitArray, r = r || [], e = S.mode.gcm.p(!0, e, o, r, n, a || 128), t.concat(e.data, e.tag)
            },
            decrypt: function(e, t, n, r, a) {
                var o = t.slice(0),
                    i = S.bitArray,
                    s = i.bitLength(o);
                return r = r || [], (a = a || 128) <= s ? (t = i.bitSlice(o, s - a), o = i.bitSlice(o, 0, s - a)) : (t = o, o = []), e = S.mode.gcm.p(k, e, o, r, n, a), i.equal(e.tag, t) || q(new S.exception.corrupt("gcm: tag doesn't match")), e.data
            },
            Z: function(e, t) {
                var n, r, a, o, i, s = S.bitArray.l;
                for (a = [0, 0, 0, 0], o = t.slice(0), n = 0; 128 > n; n++) {
                    for ((r = 0 != (e[Math.floor(n / 32)] & 1 << 31 - n % 32)) && (a = s(a, o)), i = 0 != (1 & o[3]), r = 3; 0 < r; r--) o[r] = o[r] >>> 1 | (1 & o[r - 1]) << 31;
                    o[0] >>>= 1, i && (o[0] ^= -520093696)
                }
                return a
            },
            g: function(e, t, n) {
                var r, a = n.length;
                for (t = t.slice(0), r = 0; r < a; r += 4) t[0] ^= 4294967295 & n[r], t[1] ^= 4294967295 & n[r + 1], t[2] ^= 4294967295 & n[r + 2], t[3] ^= 4294967295 & n[r + 3], t = S.mode.gcm.Z(t, e);
                return t
            },
            p: function(e, t, n, r, a, o) {
                var i, s, c, l, u, d, p, m, f = S.bitArray;
                for (d = n.length, p = f.bitLength(n), m = f.bitLength(r), s = f.bitLength(a), i = t.encrypt([0, 0, 0, 0]), 96 === s ? (a = a.slice(0), a = f.concat(a, [1])) : (a = S.mode.gcm.g(i, [0, 0, 0, 0], a), a = S.mode.gcm.g(i, a, [0, 0, Math.floor(s / 4294967296), 4294967295 & s])), s = S.mode.gcm.g(i, [0, 0, 0, 0], r), u = a.slice(0), r = s.slice(0), e || (r = S.mode.gcm.g(i, s, n)), l = 0; l < d; l += 4) u[3]++, c = t.encrypt(u), n[l] ^= c[0], n[l + 1] ^= c[1], n[l + 2] ^= c[2], n[l + 3] ^= c[3];
                return n = f.clamp(n, p), e && (r = S.mode.gcm.g(i, s, n)), e = [Math.floor(m / 4294967296), 4294967295 & m, Math.floor(p / 4294967296), 4294967295 & p], r = S.mode.gcm.g(i, r, e), c = t.encrypt(a), r[0] ^= c[0], r[1] ^= c[1], r[2] ^= c[2], r[3] ^= c[3], {
                    tag: f.bitSlice(r, 0, o),
                    data: n
                }
            }
        }, S.misc.hmac = function(e, t) {
            this.M = t = t || S.hash.sha256;
            var n, r = [
                    [],
                    []
                ],
                a = t.prototype.blockSize / 32;
            for (this.n = [new t, new t], e.length > a && (e = t.hash(e)), n = 0; n < a; n++) r[0][n] = 909522486 ^ e[n], r[1][n] = 1549556828 ^ e[n];
            this.n[0].update(r[0]), this.n[1].update(r[1]), this.G = new t(this.n[0])
        }, S.misc.hmac.prototype.encrypt = S.misc.hmac.prototype.mac = function(e) {
            return this.Q && q(new S.exception.invalid("encrypt on already updated hmac called!")), this.update(e), this.digest(e)
        }, S.misc.hmac.prototype.reset = function() {
            this.G = new this.M(this.n[0]), this.Q = k
        }, S.misc.hmac.prototype.update = function(e) {
            this.Q = !0, this.G.update(e)
        }, S.misc.hmac.prototype.digest = function() {
            var e = this.G.finalize();
            e = new this.M(this.n[1]).update(e).finalize();
            return this.reset(), e
        }, S.misc.pbkdf2 = function(e, t, n, r, a) {
            n = n || 1e3, (0 > r || 0 > n) && q(S.exception.invalid("invalid params to pbkdf2")), "string" == typeof e && (e = S.codec.utf8String.toBits(e)), "string" == typeof t && (t = S.codec.utf8String.toBits(t)), e = new(a = a || S.misc.hmac)(e);
            var o, i, s, c, l = [],
                u = S.bitArray;
            for (c = 1; 32 * l.length < (r || 1); c++) {
                for (a = o = e.encrypt(u.concat(t, [c])), i = 1; i < n; i++)
                    for (o = e.encrypt(o), s = 0; s < o.length; s++) a[s] ^= o[s];
                l = l.concat(a)
            }
            return r && (l = u.clamp(l, r)), l
        }, S.prng = function(e) {
            this.c = [new S.hash.sha256], this.i = [0], this.F = 0, this.s = {}, this.C = 0, this.K = {}, this.O = this.d = this.j = this.W = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.f = [0, 0, 0, 0], this.A = O, this.B = e, this.q = k, this.w = {
                progress: {},
                seeded: {}
            }, this.m = this.V = 0, this.t = 1, this.u = 2, this.S = 65536, this.I = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.T = 3e4, this.R = 80
        }, S.prng.prototype = {
            randomWords: function(e, t) {
                var n, r, a = [];
                if ((n = this.isReady(t)) === this.m && q(new S.exception.notReady("generator isn't seeded")), n & this.u) {
                    n = !(n & this.t), r = [];
                    var o, i = 0;
                    for (this.O = r[0] = (new Date).valueOf() + this.T, o = 0; 16 > o; o++) r.push(4294967296 * Math.random() | 0);
                    for (o = 0; o < this.c.length && (r = r.concat(this.c[o].finalize()), i += this.i[o], this.i[o] = 0, n || !(this.F & 1 << o)); o++);
                    for (this.F >= 1 << this.c.length && (this.c.push(new S.hash.sha256), this.i.push(0)), this.d -= i, i > this.j && (this.j = i), this.F++, this.b = S.hash.sha256.hash(this.b.concat(r)), this.A = new S.cipher.aes(this.b), n = 0; 4 > n && (this.f[n] = this.f[n] + 1 | 0, !this.f[n]); n++);
                }
                for (n = 0; n < e; n += 4) 0 == (n + 1) % this.S && A(this), r = B(this), a.push(r[0], r[1], r[2], r[3]);
                return A(this), a.slice(0, e)
            },
            setDefaultParanoia: function(e, t) {
                0 === e && "Setting paranoia=0 will ruin your security; use it only for testing" !== t && q("Setting paranoia=0 will ruin your security; use it only for testing"), this.B = e
            },
            addEntropy: function(e, t, n) {
                n = n || "user";
                var r, a, o = (new Date).valueOf(),
                    i = this.s[n],
                    s = this.isReady(),
                    c = 0;
                switch ((r = this.K[n]) === O && (r = this.K[n] = this.W++), i === O && (i = this.s[n] = 0), this.s[n] = (this.s[n] + 1) % this.c.length, typeof e) {
                    case "number":
                        t === O && (t = 1), this.c[i].update([r, this.C++, 1, t, o, 1, 0 | e]);
                        break;
                    case "object":
                        if ("[object Uint32Array]" === (n = Object.prototype.toString.call(e))) {
                            for (a = [], n = 0; n < e.length; n++) a.push(e[n]);
                            e = a
                        } else
                            for ("[object Array]" !== n && (c = 1), n = 0; n < e.length && !c; n++) "number" != typeof e[n] && (c = 1);
                        if (!c) {
                            if (t === O)
                                for (n = t = 0; n < e.length; n++)
                                    for (a = e[n]; 0 < a;) t++, a >>>= 1;
                            this.c[i].update([r, this.C++, 2, t, o, e.length].concat(e))
                        }
                        break;
                    case "string":
                        t === O && (t = e.length), this.c[i].update([r, this.C++, 3, t, o, e.length]), this.c[i].update(e);
                        break;
                    default:
                        c = 1
                }
                c && q(new S.exception.bug("random: addEntropy only supports number, array of numbers or string")), this.i[i] += t, this.d += t, s === this.m && (this.isReady() !== this.m && C("seeded", Math.max(this.j, this.d)), C("progress", this.getProgress()))
            },
            isReady: function(e) {
                return e = this.I[e !== O ? e : this.B], this.j && this.j >= e ? this.i[0] > this.R && (new Date).valueOf() > this.O ? this.u | this.t : this.t : this.d >= e ? this.u | this.m : this.m
            },
            getProgress: function(e) {
                return e = this.I[e || this.B], this.j >= e ? 1 : this.d > e ? 1 : this.d / e
            },
            startCollectors: function() {
                this.q || (this.a = {
                    loadTimeCollector: D(this, this.aa),
                    mouseCollector: D(this, this.ba),
                    keyboardCollector: D(this, this.$),
                    accelerometerCollector: D(this, this.U)
                }, window.addEventListener ? (window.addEventListener("load", this.a.loadTimeCollector, k), window.addEventListener("mousemove", this.a.mouseCollector, k), window.addEventListener("keypress", this.a.keyboardCollector, k), window.addEventListener("devicemotion", this.a.accelerometerCollector, k)) : document.attachEvent ? (document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector)) : q(new S.exception.bug("can't attach event")), this.q = !0)
            },
            stopCollectors: function() {
                this.q && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, k), window.removeEventListener("mousemove", this.a.mouseCollector, k), window.removeEventListener("keypress", this.a.keyboardCollector, k), window.removeEventListener("devicemotion", this.a.accelerometerCollector, k)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.q = k)
            },
            addEventListener: function(e, t) {
                this.w[e][this.V++] = t
            },
            removeEventListener: function(e, t) {
                var n, r, a = this.w[e],
                    o = [];
                for (r in a) a.hasOwnProperty(r) && a[r] === t && o.push(r);
                for (n = 0; n < o.length; n++) delete a[r = o[n]]
            },
            $: function() {
                E(1)
            },
            ba: function(e) {
                var t, n;
                try {
                    t = e.x || e.clientX || e.offsetX || 0, n = e.y || e.clientY || e.offsetY || 0
                } catch (e) {
                    n = t = 0
                }
                0 != t && 0 != n && S.random.addEntropy([t, n], 2, "mouse"), E(0)
            },
            aa: function() {
                E(2)
            },
            U: function(e) {
                if (e = (e.accelerationIncludingGravity || {}).x || (e.accelerationIncludingGravity || {}).y || (e.accelerationIncludingGravity || {}).z, window.orientation) {
                    var t = window.orientation;
                    "number" == typeof t && S.random.addEntropy(t, 1, "accelerometer")
                }
                e && S.random.addEntropy(e, 2, "accelerometer"), E(0)
            }
        }, S.random = new S.prng(6);
        e: try {
            var T, P, x, j;
            if (j = void 0 !== e) {
                var M;
                if (M = e.exports) {
                    var L;
                    try {
                        L = require("crypto")
                    } catch (e) {
                        L = null
                    }
                    M = (P = L) && P.randomBytes
                }
                j = M
            }
            if (j) T = P.randomBytes(128), T = new Uint32Array(new Uint8Array(T).buffer), S.random.addEntropy(T, 1024, "crypto['randomBytes']");
            else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
                if (x = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(x);
                else {
                    if (!window.msCrypto || !window.msCrypto.getRandomValues) break e;
                    window.msCrypto.getRandomValues(x)
                }
                S.random.addEntropy(x, 1024, "crypto['getRandomValues']")
            }
        } catch (e) {
            "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(e))
        }
        S.json = {
                defaults: {
                    v: 1,
                    iter: 1e3,
                    ks: 128,
                    ts: 64,
                    mode: "ccm",
                    adata: "",
                    cipher: "aes"
                },
                Y: function(e, t, n, r) {
                    n = n || {}, r = r || {};
                    var a, o = S.json,
                        i = o.e({
                            iv: S.random.randomWords(4, 0)
                        }, o.defaults);
                    return o.e(i, n), n = i.adata, "string" == typeof i.salt && (i.salt = S.codec.base64.toBits(i.salt)), "string" == typeof i.iv && (i.iv = S.codec.base64.toBits(i.iv)), (!S.mode[i.mode] || !S.cipher[i.cipher] || "string" == typeof e && 100 >= i.iter || 64 !== i.ts && 96 !== i.ts && 128 !== i.ts || 128 !== i.ks && 192 !== i.ks && 256 !== i.ks || 2 > i.iv.length || 4 < i.iv.length) && q(new S.exception.invalid("json encrypt: invalid parameters")), "string" == typeof e ? (e = (a = S.misc.cachedPbkdf2(e, i)).key.slice(0, i.ks / 32), i.salt = a.salt) : S.ecc && e instanceof S.ecc.elGamal.publicKey && (a = e.kem(), i.kemtag = a.tag, e = a.key.slice(0, i.ks / 32)), "string" == typeof t && (t = S.codec.utf8String.toBits(t)), "string" == typeof n && (n = S.codec.utf8String.toBits(n)), a = new S.cipher[i.cipher](e), o.e(r, i), r.key = e, i.ct = S.mode[i.mode].encrypt(a, t, i.iv, n, i.ts), i
                },
                encrypt: function(e, t, n, r) {
                    var a = S.json,
                        o = a.Y.apply(a, arguments);
                    return a.encode(o)
                },
                X: function(e, t, n, r) {
                    n = n || {}, r = r || {};
                    var a, o, i = S.json;
                    return a = (t = i.e(i.e(i.e({}, i.defaults), t), n, !0)).adata, "string" == typeof t.salt && (t.salt = S.codec.base64.toBits(t.salt)), "string" == typeof t.iv && (t.iv = S.codec.base64.toBits(t.iv)), (!S.mode[t.mode] || !S.cipher[t.cipher] || "string" == typeof e && 100 >= t.iter || 64 !== t.ts && 96 !== t.ts && 128 !== t.ts || 128 !== t.ks && 192 !== t.ks && 256 !== t.ks || !t.iv || 2 > t.iv.length || 4 < t.iv.length) && q(new S.exception.invalid("json decrypt: invalid parameters")), "string" == typeof e ? (e = (o = S.misc.cachedPbkdf2(e, t)).key.slice(0, t.ks / 32), t.salt = o.salt) : S.ecc && e instanceof S.ecc.elGamal.secretKey && (e = e.unkem(S.codec.base64.toBits(t.kemtag)).slice(0, t.ks / 32)), "string" == typeof a && (a = S.codec.utf8String.toBits(a)), o = new S.cipher[t.cipher](e), a = S.mode[t.mode].decrypt(o, t.ct, t.iv, a, t.ts), i.e(r, t), r.key = e, 1 === n.raw ? a : S.codec.utf8String.fromBits(a)
                },
                decrypt: function(e, t, n, r) {
                    var a = S.json;
                    return a.X(e, a.decode(t), n, r)
                },
                encode: function(e) {
                    var t, n = "{",
                        r = "";
                    for (t in e)
                        if (e.hasOwnProperty(t)) switch (t.match(/^[a-z0-9]+$/i) || q(new S.exception.invalid("json encode: invalid property name")), n += r + '"' + t + '":', r = ",", typeof e[t]) {
                            case "number":
                            case "boolean":
                                n += e[t];
                                break;
                            case "string":
                                n += '"' + escape(e[t]) + '"';
                                break;
                            case "object":
                                n += '"' + S.codec.base64.fromBits(e[t], 0) + '"';
                                break;
                            default:
                                q(new S.exception.bug("json encode: unsupported type"))
                        }
                    return n + "}"
                },
                decode: function(e) {
                    (e = e.replace(/\s/g, "")).match(/^\{.*\}$/) || q(new S.exception.invalid("json decode: this isn't json!")), e = e.replace(/^\{|\}$/g, "").split(/,/);
                    var t, n, r = {};
                    for (t = 0; t < e.length; t++)(n = e[t].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i)) || q(new S.exception.invalid("json decode: this isn't json!")), r[n[2]] = n[3] ? parseInt(n[3], 10) : n[2].match(/^(ct|salt|iv)$/) ? S.codec.base64.toBits(n[4]) : unescape(n[4]);
                    return r
                },
                e: function(e, t, n) {
                    if (e === O && (e = {}), t === O) return e;
                    for (var r in t) t.hasOwnProperty(r) && (n && e[r] !== O && e[r] !== t[r] && q(new S.exception.invalid("required parameter overridden")), e[r] = t[r]);
                    return e
                },
                ea: function(e, t) {
                    var n, r = {};
                    for (n in e) e.hasOwnProperty(n) && e[n] !== t[n] && (r[n] = e[n]);
                    return r
                },
                da: function(e, t) {
                    var n, r = {};
                    for (n = 0; n < t.length; n++) e[t[n]] !== O && (r[t[n]] = e[t[n]]);
                    return r
                }
            }, S.encrypt = S.json.encrypt, S.decrypt = S.json.decrypt, S.misc.ca = {}, S.misc.cachedPbkdf2 = function(e, t) {
                var n, r = S.misc.ca;
                return n = (t = t || {}).iter || 1e3, (n = (r = r[e] = r[e] || {})[n] = r[n] || {
                    firstSalt: t.salt && t.salt.length ? t.salt.slice(0) : S.random.randomWords(2, 0)
                })[r = t.salt === O ? n.firstSalt : t.salt] = n[r] || S.misc.pbkdf2(e, r, t.iter), {
                    key: n[r].slice(0),
                    salt: r.slice(0)
                }
            }, (_ = (v = S).codec.bytes = v.codec.bytes || {}).fromBits = _.fromBits || function(e) {
                var t, n, r = [],
                    a = v.bitArray.bitLength(e);
                for (t = 0; t < a / 8; t++) 0 == (3 & t) && (n = e[t / 4]), r.push(n >>> 24), n <<= 8;
                return r
            }, _.toBits = _.toBits || function(e) {
                var t, n = [],
                    r = 0;
                for (t = 0; t < e.length; t++) r = r << 8 | e[t], 3 == (3 & t) && (n.push(r), r = 0);
                return 3 & t && n.push(v.bitArray.partial(8 * (3 & t), r)), n
            },
            function() {
                var e, t = (new Date).getTime();

                function c(e, t, n, r) {
                    if ("function" == typeof e.addEventListener) e.addEventListener(t, n, r);
                    else {
                        if (!e.attachEvent) throw new Error(I.errors.UNABLETOBIND + ": Unable to bind " + t + "-event");
                        e.attachEvent("on" + t, n)
                    }
                }
                w = w || (e = {}, function(n, r, a) {
                    if ("bind" === n) return w(a + "Bind"), c(r, "change", function(e) {
                        w(a + "FieldChangeCount"), w("log", a, "ch");
                        try {
                            w("set", a + "FieldEvHa", function b(e) {
                                var t = function() {
                                    return {}
                                };
                                window.jQuery && "function" == typeof window.jQuery._data && (t = function(e) {
                                    return window.jQuery._data(e, "events")
                                });
                                for (var n = e, r = 0, a = [], o = ["onmousedown", "onmouseup", "onmouseover", "onmouseout", "onclick", "onmousemove", "ondblclick", "onerror", "onresize", "onscroll", "onkeydown", "onkeyup", "onkeypress", "onchange", "onsubmit"], i = o.length; n && n !== n.documentElement;) {
                                    for (var s, c = i, l = (n.nodeName || n.tagName || "").toUpperCase().substring(0, 3); c--;) d = o[c], n[name] && (r++, a[d = d + (n === e ? "Own" : "Par") + l] = a[d] || 0, a[d]++);
                                    var u = t(n);
                                    if ("object" == typeof u)
                                        for (var d in u) u.hasOwnProperty(d) && (s = u[d].length, a[d = d + (n === e ? "Own" : "Par") + l] = a[d] || 0, a[d] += s, r += s);
                                    if (!n.parentNode) break;
                                    n = n.parentNode
                                }
                                var p = ["total=" + r];
                                for (var m in a) a.hasOwnProperty(m) && a[m] > 0 && p.push(m + "=" + a[m]);
                                return p.join("&")
                            }(r))
                        } catch (e) {
                            w("set", a + "FieldEvHa", "Err")
                        }
                    }, !0), c(r, "click", function() {
                        w(a + "FieldClickCount"), w("log", a, "cl")
                    }, !0), c(r, "focus", function() {
                        w(a + "FieldFocusCount"), w("log", a, "fo")
                    }, !0), c(r, "blur", function() {
                        w(a + "FieldBlurCount"), w("log", a, "bl")
                    }, !0), c(r, "touchstart", function() {
                        w(a + "FieldTouchStartCount"), w("log", a, "Ts")
                    }, !0), c(r, "touchend", function() {
                        w(a + "FieldTouchEndCount"), w("log", a, "Te")
                    }, !0), c(r, "touchcancel", function() {
                        w(a + "FieldTouchCancelCount"), w("log", a, "Tc")
                    }, !0), c(r, "keyup", function(e) {
                        16 == e.keyCode ? w("log", a, "Su") : 17 == e.keyCode ? w("log", a, "Cu") : 18 == e.keyCode && w("log", a, "Au")
                    }), void c(r, "keydown", function(e) {
                        switch (w(a + "FieldKeyCount"), e && e.keyCode) {
                            case 8:
                                w("log", a, "Kb");
                                break;
                            case 16:
                                w("log", a, "Sd");
                                break;
                            case 17:
                                w("log", a, "Cd");
                                break;
                            case 18:
                                w("log", a, "Ad");
                                break;
                            case 37:
                                w("log", a, "Kl");
                                break;
                            case 39:
                                w("log", a, "Kr");
                                break;
                            case 46:
                                w("log", a, "Kd");
                                break;
                            case 32:
                                w("log", a, "Ks");
                                break;
                            default:
                                e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 ? w("log", a, "KN") : e.keyCode >= 65 && e.keyCode <= 90 ? w("log", a, "KL") : (w("log", a, "KU"), w("log", a + "UnkKeys", e.keyCode))
                        }
                    }, !0);
                    if ("set" !== n) {
                        if ("log" === n) {
                            var o = r + "FieldLog",
                                i = (new Date).getTime() - t;
                            return i = Math.round(i / 100), e.hasOwnProperty(o) ? e[o] += "," + a + "@" + i : e[o] = a + "@" + i, void(e[o].length > 1500 && (e[o] = e[o].substring(e[o].length - 1500), e[o] = e[o].substring(e[o].indexOf(",") + 1)))
                        }
                        if ("extend" !== n) e.hasOwnProperty(n) ? e[n]++ : e[n] = 1;
                        else
                            for (var s in e) "number" !== s && "expiryMonth" !== s && "expiryYear" !== s && "generationtime" !== s && "holderName" !== s && "cvc" !== s && e.hasOwnProperty(s) && (r[s] = "" + e[s])
                    } else e[r] = a
                }), window && (window.attachEvent || window.addEventListener) && (c(window, "focus", function() {
                    w("activate"), window.location && "string" == typeof window.location.href && w("set", "referrer", window.location.href)
                }), c(window, "blur", function() {
                    w("deactivate")
                }))
            }();
        var N = t.adyen = t.adyen || {},
            I = N.encrypt = N.encrypt || {
                createEncryption: function(e, t) {
                    return new F(e, t)
                }
            };
        "function" == typeof n && n.amd ? n("adyen/encrypt", [], function() {
            return I
        }) : void 0 !== e && e.exports && (e.exports = I), I.errors = I.errors || {}, I.version = "0_1_20_1";
        var R, $ = {};
        $.luhnCheck = (R = {}, function() {
            var e = arguments,
                t = arguments.length > 0 ? e[0] : this.cardnumber;
            if (isNaN(parseInt(t, 10))) return !1;
            var n = t.length,
                r = 1 & n,
                a = 0;
            if (void 0 === R[t]) {
                n >= 14 && w("luhnCount");
                for (var o = 0; o < n; o++) {
                    var i = parseInt(t.charAt(o), 10);
                    1 & o ^ r || (i *= 2) > 9 && (i -= 9), a += i
                }
                a % 10 == 0 ? (w("luhnOkCount"), R[t] = !0) : (w("luhnFailCount"), R[t] = !1)
            }
            var s = 0;
            for (var c in R) R.hasOwnProperty(c) && c.length === n && s++;
            return w("set", "luhnSameLengthCount", s), R[t]
        }), $.numberCheck = function(e) {
            return !(!(e || "").replace(/[^\d]/g, "").match(/^\d{10,20}$/) || !$.luhnCheck(e))
        }, $.cvcCheck = function(e) {
            return !!(e && e.match && e.match(/^\d{3,4}$/))
        }, $.yearCheck = function(e) {
            if (!e || !e.match || !e.match(/^2\d{3}$/)) return !1;
            var t = parseInt(e, 10),
                n = (new Date).getFullYear();
            return t >= n - 2 && t <= n + 15
        }, $.monthCheck = function(e) {
            var t = (e || "").replace(/^0(\d)$/, "$1");
            return !!(t.match(/^([1-9]|10|11|12)$/) && parseInt(t, 10) >= 1 && parseInt(t, 10) <= 12)
        }, $.holderNameCheck = function(e) {
            return !!(e && e.match && e.match(/\S/))
        }, $.generationTimeValidDate = function(e) {
            if ("string" != typeof e) return !1;
            var t = e.match(/^(\d{4})-?(\d{2})-?(\d{2})$/);
            return !!(t && ("" + t[1]).match(/^20[1-9][0-9]$/) && ("" + t[2]).match(/^(12|11|10|0[1-9])$/) && ("" + t[3]).match(/^(31|30|20|10|[012][1-9])$/))
        }, $.generationTimeValidTime = function(e) {
            if ("string" != typeof e) return !1;
            var t = /(Z|[\+\-][012345][0-9]:?[012345][0-9])$/;
            return !!e.match(t) && e.replace(t, "").replace(/\.\d{3}$/, "").match(/^[012345][0-9]:?[012345][0-9]:?[012345][0-9]$/)
        }, $.generationTimeCheck = function(e) {
            if ("string" != typeof e) return !1;
            var t = e.split("T");
            return !(2 !== t.length || !$.generationTimeValidDate(t[0]) || !$.generationTimeValidTime(t[1]))
        };
        var F = function(e, t) {
            try {
                S.random.startCollectors()
            } catch (e) {}
            if (this.key = e, this.options = t || {}, void 0 === this.options.numberIgnoreNonNumeric && (this.options.numberIgnoreNonNumeric = !0), void 0 !== this.options.cvcIgnoreFornumber && delete this.options.cvcIgnoreFornumber, void 0 === this.options.fourDigitCvcForBins && (this.options.fourDigitCvcForBins = "34,37"), void 0 !== this.options.cvcLengthFornumber && delete this.options.cvcLengthFornumber, "string" == typeof this.options.cvcIgnoreBins) {
                var n = [];
                this.options.cvcIgnoreBins.replace(/\d+/g, function(e) {
                    return e.length > 0 && !isNaN(parseInt(e, 10)) && n.push(e), e
                }), n.length > 0 && (this.options.cvcIgnoreFornumber = new RegExp("^\\s*(" + n.join("|") + ")"))
            } else void 0 !== this.options.cvcIgnoreBins && delete this.options.cvcIgnoreBins;
            if ("string" == typeof this.options.fourDigitCvcForBins) {
                var r = [];
                this.options.fourDigitCvcForBins.replace(/\d+/g, function(e) {
                    return e.length > 0 && !isNaN(parseInt(e, 10)) && r.push(e), e
                }), r.length > 0 && (this.options.cvcLengthFornumber = {
                    matcher: new RegExp("^\\s*(" + r.join("|") + ")"),
                    requiredLength: 4
                })
            }
            delete this.options.fourDigitCvcForBins, w("initializeCount")
        };
        F.prototype.createRSAKey = function() {
            var e = this.key.split("|");
            if (2 !== e.length) throw "Malformed public key";
            var t = e[0],
                n = e[1],
                r = new RSAKey;
            return r.setPublic(n, t), r
        }, F.prototype.createAESKey = function() {
            return new U
        }, F.prototype.encrypt = function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            var r, a, o, i, s, c = {};
            if (void 0 !== t.number && (c.number = t.number), void 0 !== t.cvc && (c.cvc = t.cvc), void 0 !== t.expiryMonth && (c.month = t.expiryMonth), void 0 !== t.expiryYear && (c.year = t.expiryYear), void 0 !== t.holderName && (c.holderName = t.holderName), void 0 !== t.generationtime && (c.generationtime = t.generationtime), !1 !== this.options.enableValidations && !1 === this.validate(c).valid) return !1;
            for (var l = 0; l < 11 && (S.random && S.random.isReady(l)); l++) w("set", "sjclStrength", l);
            w("extend", t);
            try {
                t.dfValue = ""
            } catch (e) {}
            return r = this.createRSAKey(), o = (a = this.createAESKey()).encrypt(JSON.stringify(t)), i = S.codec.bytes.fromBits(a.key()), s = r.encrypt_b64(i), ["adyenjs_" + I.version + "$", s, "$", o].join("")
        }, F.prototype.validate = function(e) {
            var t = {
                valid: !0
            };
            if ("object" != typeof e) return t.valid = !1, t;
            for (var n in e)
                if (e.hasOwnProperty(n) && void 0 !== e[n]) {
                    var r = e[n];
                    if (this.options[n + "IgnoreNonNumeric"] && (r = r.replace(/\D/g, "")), !this.options[n + "SkipValidation"]) {
                        for (var a in e)
                            if (e.hasOwnProperty(a)) {
                                var o = this.options[n + "IgnoreFor" + a],
                                    i = this.options[n + "LengthFor" + a];
                                if (o && e[a].match(o)) {
                                    t[n] = !0;
                                    continue
                                }
                                if (i && i.matcher && i.requiredLength && e[a].match(i.matcher) && r.length !== i.requiredLength) {
                                    t[n] = !1;
                                    continue
                                }
                            }
                        if (t.hasOwnProperty(n)) t.valid = t.valid && t[n];
                        else switch (n) {
                            case "number":
                                t.number = $.numberCheck(r), t.luhn = t.number, t.valid = t.valid && t.number;
                                break;
                            case "expiryYear":
                            case "year":
                                t.year = $.yearCheck(r), t.expiryYear = t.year, t.valid = t.valid && t.year;
                                break;
                            case "cvc":
                                t.cvc = $.cvcCheck(r), t.valid = t.valid && t.cvc;
                                break;
                            case "expiryMonth":
                            case "month":
                                t.month = $.monthCheck(r), t.expiryMonth = t.month, t.valid = t.valid && t.month;
                                break;
                            case "holderName":
                                t.holderName = $.holderNameCheck(r), t.valid = t.valid && t.holderName;
                                break;
                            case "generationtime":
                                t.generationtime = $.generationTimeCheck(r), t.valid = t.valid && t.generationtime;
                                break;
                            default:
                                t.unknown = t.unknown || [], t.unknown.push(n), t.valid = !1
                        }
                    }
                }
            return t
        }, F.prototype.monitor = function(e, t) {
            if ("string" != typeof e || "number" !== e && "cvc" !== e && "holderName" !== e) throw new Error("invalid fieldname. Expected 'number', 'cvc' or 'holderName', but received '" + e + "'");
            w("bind", t, e)
        };
        var U = function() {};
        U.prototype = {
            constructor: U,
            key: function() {
                return this._key = this._key || S.random.randomWords(8, 6), this._key
            },
            encrypt: function(e) {
                return this.encryptWithIv(e, S.random.randomWords(3, 6))
            },
            encryptWithIv: function(e, t) {
                var n, r, a, o;
                return n = new S.cipher.aes(this.key()), r = S.codec.utf8String.toBits(e), a = S.mode.ccm.encrypt(n, r, t), o = S.bitArray.concat(t, a), S.codec.base64.fromBits(o)
            }
        }
    }(this, "function" == typeof define ? define : null)
}, function(e, t, n) {
    "use strict";
    var r = n(17),
        a = n(13),
        o = n(150),
        i = n(11),
        s = n(7),
        c = n(0),
        l = function prepAlertMessage(e) {
            return e.data && e.data.message || a.b.badRequest
        },
        u = {
            init: function init(e) {
                var t = e.dispatch;
                e.state.isLoggedIn && (t("getFriends"), t("getOpponents"), t("getAdditionaUserInfoFromDb"))
            },
            getFriends: function getFriends(e) {
                var t = e.commit,
                    n = e.dispatch,
                    r = e.state;
                return t("setLoading", !0), i.default.get(s.a.generate("web_friend_callback_friends_search", {
                    user: r.id,
                    avatarSize: 50
                })).then(function(e) {
                    t("setLoading", !1), t("setFriends", e.data.friends)
                }).catch(function() {
                    t("setLoading", !1), n("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            getOpponents: function getOpponents(e) {
                var t = e.commit,
                    n = e.dispatch;
                return t("setLoading", !0), i.default.get(s.a.generate("web_user_callback_recent_opponents")).then(function(e) {
                    t("setLoading", !1), t("setOpponents", e.data)
                }).catch(function() {
                    t("setLoading", !1), n("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            getFollowSuggestions: function getFollowSuggestions(e) {
                var t = e.commit,
                    n = e.dispatch;
                return i.default.get(s.a.generate("web_user_callback_follow_suggestions")).then(function(e) {
                    if (e.data.users && e.data.users.length > 0) {
                        t("setFollowSuggestions", e.data.users);
                        var n = c.a.trans("Consider following...");
                        e.data.notYetFollowing && (n = c.a.trans("You are not currently following anyone. Here are a few suggestions...")), t("setFollowMessage", n)
                    } else t("setFollowMessage", null)
                }).catch(function() {
                    return n("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            acceptFollowSuggestion: function acceptFollowSuggestion(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                n("removeFollowSuggestedUser", t), r("trackUser", t)
            },
            dismissFollowSuggestion: function dismissFollowSuggestion(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                if (!e.state.loadingUser[t]) return n("setLoadingUser", {
                    username: t,
                    loading: !0
                }), n("removeFollowSuggestedUser", t), i.default.post(s.a.generate("web_user_callback_dismiss_follow_suggestion", {
                    username: t
                })).then(function() {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    })
                }).catch(function() {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            getAvatar: function getAvatar(e, t) {
                var n = e.commit;
                if (!e.state.avatarUrl) return i.default.get(s.a.generate("pubapi_player_profile", {
                    username: t
                })).then(function(e) {
                    n("setAvatarUrl", e.data.avatar)
                })
            },
            addFriend: function addFriend(e, t) {
                var n = e.commit,
                    r = e.dispatch,
                    c = e.state,
                    u = t.username ? t.username : t,
                    d = t.dispatchCallback ? t.dispatchCallback : "getFriends";
                if (!c.loadingUser[u]) return n("setLoadingUser", {
                    username: u,
                    loading: !0
                }), n("setLoading", !0), o.a.logEvent("Social - AddFriend"), i.default.post(s.a.generate("web_friend_request_callback", {
                    friend: u
                })).then(function(e) {
                    n("setLoadingUser", {
                        username: u,
                        loading: !1
                    }), n("setLoading", !1), r("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).then(function() {
                    d.includes("/") ? r(d, null, {
                        root: !0
                    }) : r(d)
                }).catch(function(e) {
                    n("setLoadingUser", {
                        username: u,
                        loading: !1
                    }), n("setLoading", !1), r("alerts/create", {
                        type: a.g.error,
                        message: e.response.data.message
                    }, {
                        root: !0
                    })
                })
            },
            deleteFriend: function deleteFriend(e, t) {
                var n = e.commit,
                    r = e.dispatch,
                    o = e.state,
                    c = t.username ? t.username : t,
                    u = t.dispatchCallback ? t.dispatchCallback : "getFriends";
                if (!o.loadingUser[c]) return n("setLoadingUser", {
                    username: c,
                    loading: !0
                }), n("setLoading", !0), i.default.delete(s.a.generate("web_friend_delete_callback", {
                    friend: c
                })).then(function(e) {
                    n("setLoadingUser", {
                        username: c,
                        loading: !1
                    }), n("setLoading", !1), r("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).then(function() {
                    u.includes("/") ? r(u, null, {
                        root: !0
                    }) : r(u)
                }).catch(function() {
                    n("setLoadingUser", {
                        username: c,
                        loading: !1
                    }), n("setLoading", !1), r("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            approveFriendRequest: function approveFriendRequest(e, t) {
                var n = e.commit,
                    r = e.dispatch,
                    o = e.state,
                    c = t.username ? t.username : t,
                    u = t.dispatchCallback ? t.dispatchCallback : "getFriends";
                if (!o.loadingUser[c]) return n("setLoadingUser", {
                    username: c,
                    loading: !0
                }), i.default.put(s.a.generate("web_friend_accept_request_callback", {
                    requestor: c
                })).then(function(e) {
                    n("setLoadingUser", {
                        username: c,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).then(function() {
                    u.includes("/") ? r(u, null, {
                        root: !0
                    }) : r(u)
                }).catch(function() {
                    n("setLoadingUser", {
                        username: c,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            blockUser: function blockUser(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                if (!e.state.loadingUser[t]) return n("setLoadingUser", {
                    username: t,
                    loading: !0
                }), i.default.post(s.a.generate("web_member_callback_block_member", {
                    username: t
                }), {
                    _token: window.context.csrf.token
                }).then(function(e) {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).catch(function() {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            unblockUser: function unblockUser(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                if (!e.state.loadingUser[t]) return n("setLoadingUser", {
                    username: t,
                    loading: !0
                }), i.default.post(s.a.generate("web_member_callback_unblock_member", {
                    username: t
                }), {
                    _token: window.context.csrf.token
                }).then(function(e) {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).catch(function() {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            trackUser: function trackUser(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                if (!e.state.loadingUser[t]) return n("setLoadingUser", {
                    username: t,
                    loading: !0
                }), i.default.post(s.a.generate("web_member_callback_track_member", {
                    username: t
                }), {
                    _token: window.context.csrf.token
                }).then(function(e) {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).catch(function() {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            untrackUser: function untrackUser(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                if (!e.state.loadingUser[t]) return n("setLoadingUser", {
                    username: t,
                    loading: !0
                }), i.default.post(s.a.generate("web_member_callback_untrack_member", {
                    username: t
                }), {
                    _token: window.context.csrf.token
                }).then(function(e) {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).catch(function() {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            saveBoardSettings: function saveBoardSettings(e, t) {
                var n = e.dispatch,
                    r = {
                        pieceCode: t.pieceStyle,
                        boardCode: t.boardStyle,
                        animationCode: window.animationType,
                        _token: window.context.csrf.token
                    };
                return i.default.put(s.a.generate("web_user_callback_board_settings", r)).then(function(e) {
                    n("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).catch(function() {
                    return n("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            setArchiveView: function setArchiveView(e, t) {
                var n = e.commit,
                    a = e.state;
                if (Object(r.i)(t)) return a.archiveView !== t ? (n("setArchiveView", t), i.default.post(s.a.generate("web_user_callback_set_archive_view"), {
                    archiveView: t
                })) : void 0
            },
            setFairPlayAgree: function setFairPlayAgree(e) {
                return (0, e.commit)("setFairPlayAgree", !0), i.default.post(s.a.generate("web_user_callback_set_fair_play_agree", {
                    fairPlayAgree: 1
                }))
            },
            setHomeContentType: function setHomeContentType(e, t) {
                var n = e.commit;
                if (Object(r.j)(t)) return n("setHomeContentType", t), i.default.post(s.a.generate("web_user_callback_set_home_recent_content_type"), {
                    recentContentType: t
                })
            },
            setShowAlertsOnHome: function setShowAlertsOnHome(e, t) {
                return (0, e.commit)("setShowAlertsOnHome", t), i.default.post(s.a.generate("web_user_callback_set_show_alerts_on_home"), {
                    showAlertsOnHome: t
                })
            },
            setIsThreeD: function setIsThreeD(e, t) {
                (0, e.commit)("setIsThreeD", t)
            },
            setOnboarding: function setOnboarding(e, t) {
                var n = e.dispatch;
                return i.default.post(s.a.generate("web_user_callback_set_onboarding"), t).catch(function() {
                    return n("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            cancelFriendRequest: function cancelFriendRequest(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                if (!e.state.loadingUser[t]) return n("setLoadingUser", {
                    username: t,
                    loading: !0
                }), i.default.post(s.a.generate("web_friend_cancel_request_callback", {
                    receiver: t
                })).then(function(e) {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).catch(function() {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            declineFriendRequest: function declineFriendRequest(e, t) {
                var n = e.commit,
                    r = e.dispatch;
                if (!e.state.loadingUser[t]) return n("setLoadingUser", {
                    username: t,
                    loading: !0
                }), i.default.delete(s.a.generate("web_friend_decline_request_callback", {
                    requestor: t
                })).then(function(e) {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.success,
                        message: l(e)
                    }, {
                        root: !0
                    })
                }).catch(function() {
                    n("setLoadingUser", {
                        username: t,
                        loading: !1
                    }), r("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            refreshUserRoles: function refreshUserRoles(e) {
                var t = e.commit;
                if (e.state.isLoggedIn) return i.default.get(s.a.generate("web_security_callback_user_roles")).then(function(e) {
                    t("setRoles", e.data)
                })
            },
            checkValidUsername: function checkValidUsername(e, t) {
                var n = e.dispatch;
                return i.default.get(s.a.generate("web_user_callback_valid_username", {
                    username: t
                })).then(function(e) {
                    return e.data
                }).catch(function() {
                    return n("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            },
            getAdditionaUserInfoFromDb: function getAdditionaUserInfoFromDb(e) {
                var t = e.commit,
                    n = e.dispatch,
                    r = e.state;
                if ("" !== r.username && null !== r.username && null === r.flag) return i.default.get(s.a.generate("web_user_callback_popup", {
                    username: r.username
                })).then(function(e) {
                    t("setAdditionalInfo", {
                        flag: e.data.countryId,
                        country: e.data.countryName,
                        membership: e.data.membership.code,
                        rating: e.data.bestRating
                    })
                }).catch(function() {
                    return n("alerts/create", {
                        type: a.g.error,
                        message: a.b.badRequest
                    }, {
                        root: !0
                    })
                })
            }
        },
        d = n(283),
        p = n(282),
        m = Object(p.a)({
            friends: [],
            opponents: [],
            loading: {
                friends: !1,
                opponents: !1
            },
            boardSettings: {},
            roles: [],
            isLoggedIn: !1,
            username: "",
            country: null,
            flag: null,
            rating: null,
            membership: null
        }, d.a.user),
        f = {
            chessTitle: r.a("chessTitle") || "",
            cohort: r.c("cohort"),
            flairCode: r.c("flairCode"),
            friends: m.friends,
            roles: m.roles,
            findFriendByUserId: function findFriendByUserId(e) {
                return m.friends.find(function(t) {
                    return t.user_id === e
                })
            },
            opponents: m.opponents,
            boardSettings: m.boardSettings,
            loading: !1,
            loadingUser: {},
            eligibleFirstTrial: r.b(),
            isActivated: r.a("isActivated"),
            isLoggedIn: r.h(),
            isEnabled: r.f("isEnabled"),
            isImpersonating: r.g(),
            isStaff: r.a("isStaff"),
            isStaffOnly: r.a("isStaffOnly"),
            isModerator: r.a("isModerator"),
            isModeratorOnly: r.a("isModeratorOnly"),
            isDiamond: r.a("isDiamond"),
            isDiamondOnly: r.a("isDiamondOnly"),
            isPlatinum: r.a("isPlatinum"),
            isPlatinumOnly: r.a("isPlatinumOnly"),
            isSilver: r.a("isSilver"),
            isSilverOnly: r.a("isSilverOnly"),
            isGold: r.a("isGold"),
            isGoldOnly: r.a("isGoldOnly"),
            isPremium: r.a("isPremium"),
            isUserTwitchSub: r.c("isUserTwitchSub"),
            isPartOfCohort: function isPartOfCohort(e) {
                return r.c("cohort") === e
            },
            isBasic: r.a("isBasic"),
            id: r.c("getUserId"),
            language: r.c("language"),
            contentLanguage: r.c("contentLanguage"),
            username: r.c("getUsername"),
            avatarUrl: r.c("getAvatarUrl"),
            settingsAvatarUrl: r.c("getSettingsAvatarUrl"),
            avatarLargeUrl: r.c("getAvatarLargeUrl"),
            lastLoginDate: r.c("getLastLoginDate"),
            registerDate: r.c("registerDate"),
            timezone: r.c("getTimezone"),
            diagramSettings: r.c("getDiagramSettings"),
            speaksEnglish: r.c("speaksEnglish"),
            isThreeD: !1,
            showAlertsOnHome: r.c("showAlertsOnHome"),
            archiveView: r.c("getArchiveView"),
            homeContentType: r.c("homeContentType"),
            membershipLevel: r.c("getMembershipLevel"),
            isContentHidden: r.c("isContentHidden"),
            fairPlayAgree: r.c("fairPlayAgree"),
            features: r.d(),
            followSuggestions: [],
            followMessage: "",
            country: m.country,
            flag: m.flag,
            rating: m.rating,
            membership: m.membership,
            safeMode: r.c("safeMode"),
            uuid: r.c("uuid")
        };
    t.a = {
        namespaced: !0,
        mutations: {
            setLoading: function setLoading(e, t) {
                e.loading = t
            },
            setLoadingUser: function setLoadingUser(e, t) {
                e.loadingUser[t.username] = t.loading
            },
            setLoadingFriends: function setLoadingFriends(e, t) {
                e.loading.friends = t
            },
            setFriends: function setFriends(e, t) {
                e.friends = t
            },
            setLoadingOpponents: function setLoadingOpponents(e, t) {
                e.loading.opponents = t
            },
            setOpponents: function setOpponents(e, t) {
                e.opponents = t
            },
            setAvatarUrl: function setAvatarUrl(e, t) {
                e.avatarUrl = t
            },
            setSettingsAvatarUrl: function setSettingsAvatarUrl(e, t) {
                e.settingsAvatarUrl = t
            },
            setArchiveView: function setArchiveView(e, t) {
                e.archiveView = t
            },
            setFairPlayAgree: function setFairPlayAgree(e, t) {
                e.fairPlayAgree = t
            },
            setHomeContentType: function setHomeContentType(e, t) {
                e.homeContentType = t
            },
            setShowAlertsOnHome: function setShowAlertsOnHome(e, t) {
                e.showAlertsOnHome = t
            },
            setIsThreeD: function setIsThreeD(e, t) {
                e.isThreeD = t
            },
            setFollowSuggestions: function setFollowSuggestions(e, t) {
                e.followSuggestions = t
            },
            removeFollowSuggestedUser: function removeFollowSuggestedUser(e, t) {
                var n = e.followSuggestions,
                    r = n.findIndex(function(e) {
                        return e.username === t
                    }); - 1 !== r && (n.splice(r, 1), e.followSuggestions = n)
            },
            setFollowMessage: function setFollowMessage(e, t) {
                e.followMessage = t
            },
            setRoles: function setRoles(e, t) {
                e.roles = t
            },
            setAdditionalInfo: function setAdditionalInfo(e, t) {
                e.flag = t.flag, e.country = t.country, e.membership = t.membership, e.rating = t.rating
            },
            setLoggedIn: function setLoggedIn(e, t) {
                e.isLoggedIn = t
            },
            setUsername: function setUsername(e, t) {
                e.username = t
            },
            setMembershipLevel: function setMembershipLevel(e, t) {
                e.membershipLevel = t
            }
        },
        actions: u,
        state: f,
        getters: {
            chessTitle: function chessTitle(e) {
                return e.chessTitle
            },
            isActivated: function isActivated(e) {
                return e.isActivated
            },
            id: function id(e) {
                return e.id
            },
            isImpersonating: function isImpersonating(e) {
                return e.isImpersonating
            },
            isLoggedIn: function isLoggedIn(e) {
                return e.isLoggedIn
            },
            username: function username(e) {
                return e.username
            },
            roles: function roles(e) {
                return e.roles
            },
            isPremium: function isPremium(e) {
                return e.isPremium
            },
            isUserTwitchSub: function isUserTwitchSub(e) {
                return e.isUserTwitchSub
            },
            hyphenatedLanguage: function hyphenatedLanguage(e) {
                return (e.language || "").replace("_", "-")
            }
        }
    }
}, , function(e, t, n) {
    "use strict";
    var r = n(37),
        a = n(84);
    t.a = {
        name: "click-outside",
        bind: function bind(e, t) {
            var n, o, i = 1;
            if (r.a.isFunction(t.value) ? n = t.value : r.a.isObject(t.value) && (n = t.value.handler, i = t.value.delay), !r.a.isFunction(n)) throw new Error("must pass function to click-outside");
            var s = function onClickElement(e) {
                    return e.stopPropagation()
                },
                c = function onClickDocument(t) {
                    return e !== t.target && n(e, t)
                };
            e.$unbindClickOutside && e.$unbindClickOutside(), e.$unbindClickOutside = function() {
                a.a.clearTimeout(o), e.removeEventListener("click", s), document.removeEventListener("click", c), delete e.$unbindClickOutside
            }, o = a.a.setTimeout(function() {
                e.addEventListener("click", s), document.addEventListener("click", c)
            }, i)
        },
        unbind: function unbind(e) {
            e.$unbindClickOutside && e.$unbindClickOutside()
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(17),
        a = n(224),
        o = n(12);
    t.a = {
        props: {
            membership: {
                type: Number
            }
        },
        computed: {
            flairHref: function flairHref() {
                return Object(a.c)({
                    code: this.standardizedFlairCodeFromMixin,
                    flairMembership: this.membership,
                    selfIsPremium: Object(r.a)("isPremium"),
                    selfIsModerator: Object(r.a)("isModerator")
                })
            },
            flairTooltip: function flairTooltip() {
                return Object(a.d)({
                    code: this.standardizedFlairCodeFromMixin,
                    flairMembership: this.membership
                })
            },
            standardizedFlairCodeFromMixin: function standardizedFlairCodeFromMixin() {
                return this.code || this.userFlair && this.userFlair.code || o.c.code
            }
        },
        methods: {
            handleFlairClick: function handleFlairClick() {
                this.flairHref.length && (window.location = this.flairHref)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = {
            name: "country-flag",
            directives: {
                tooltip: n(35).a
            },
            props: {
                code: {
                    type: [Number, String],
                    required: !1
                },
                name: {
                    type: [String, Object],
                    required: !1
                },
                size: {
                    type: String,
                    required: !1
                }
            }
        },
        a = n(5),
        o = Object(a.a)(r, function() {
            var e, t = this.$createElement;
            return (this._self._c || t)("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: this.name,
                    expression: "name"
                }],
                class: ["country-flags-component", ("country-" + this.code).toLowerCase(), (e = {}, e["country-flags-" + this.size] = this.size, e)]
            })
        }, [], !1, null, null, null);
    t.a = o.exports
}, function(e, t, n) {
    "use strict";
    var r = n(12),
        a = n(315),
        o = n(323),
        i = n(35),
        s = n(171),
        c = {
            name: "user-flair-icon",
            components: {
                Flair: a.a,
                UserMembershipIcon: s.a
            },
            directives: {
                Tooltip: i.a
            },
            mixins: [o.a],
            props: {
                code: {
                    type: String
                },
                membership: {
                    type: Number,
                    default: r.k.basic
                },
                size: {
                    type: String,
                    default: "small"
                }
            }
        },
        l = n(275),
        u = n(5);
    var d = Object(u.a)(c, function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return e.code ? n("a", {
            class: e.$style.component,
            attrs: {
                href: e.flairHref
            },
            on: {
                click: function(t) {
                    return t.stopPropagation(), t.preventDefault(), e.handleFlairClick(t)
                }
            }
        }, [n("flair", {
            directives: [{
                name: "tooltip",
                rawName: "v-tooltip",
                value: e.flairTooltip,
                expression: "flairTooltip"
            }],
            attrs: {
                code: e.code,
                membership: e.membership,
                size: e.size
            }
        })], 1) : n("user-membership-icon", {
            attrs: {
                membership: e.membership,
                size: e.size
            }
        })
    }, [], !1, function injectStyles(e) {
        this.$style = l.default.locals || l.default
    }, null, null);
    t.a = d.exports
}, , , function(e, t, n) {
    var r = n(377);
    e.exports = function cloneArrayBuffer(e) {
        var t = new e.constructor(e.byteLength);
        return new r(t).set(new r(e)), t
    }
}, , function(e, t, n) {
    e.exports = n(26)(60)
}, , , , , , function(e, t, n) {
    var r = n(143),
        a = n(354),
        o = n(355),
        i = n(356),
        s = n(357),
        c = n(358);

    function Stack(e) {
        var t = this.__data__ = new r(e);
        this.size = t.size
    }
    Stack.prototype.clear = a, Stack.prototype.delete = o, Stack.prototype.get = i, Stack.prototype.has = s, Stack.prototype.set = c, e.exports = Stack
}, function(e, t) {
    var n = Function.prototype.toString;
    e.exports = function toSource(e) {
        if (null != e) {
            try {
                return n.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, function(e, t, n) {
    (function(e) {
        var r = n(74),
            a = t && !t.nodeType && t,
            o = a && "object" == typeof e && e && !e.nodeType && e,
            i = o && o.exports === a ? r.Buffer : void 0,
            s = i ? i.allocUnsafe : void 0;
        e.exports = function cloneBuffer(e, t) {
            if (t) return e.slice();
            var n = e.length,
                r = s ? s(n) : new e.constructor(n);
            return e.copy(r), r
        }
    }).call(this, n(113)(e))
}, function(e, t, n) {
    var r = n(328);
    e.exports = function cloneTypedArray(e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }
}, function(e, t) {
    e.exports = function copyArray(e, t) {
        var n = -1,
            r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    }
}, function(e, t, n) {
    var r = n(378),
        a = n(288),
        o = n(131);
    e.exports = function initCloneObject(e) {
        return "function" != typeof e.constructor || o(e) ? {} : r(a(e))
    }
}, function(e, t, n) {
    var r = n(217),
        a = n(145),
        o = Object.prototype.hasOwnProperty;
    e.exports = function assignValue(e, t, n) {
        var i = e[t];
        o.call(e, t) && a(i, n) && (void 0 !== n || t in e) || r(e, t, n)
    }
}, , , , , , function(e, t, n) {
    var r = n(336),
        a = n(306),
        o = n(213),
        i = n(376),
        s = n(55),
        c = n(256),
        l = n(308);
    e.exports = function baseMerge(e, t, n, u, d) {
        e !== t && o(t, function(o, c) {
            if (s(o)) d || (d = new r), i(e, t, c, n, baseMerge, u, d);
            else {
                var p = u ? u(l(e, c), o, c + "", e, t, d) : void 0;
                void 0 === p && (p = o), a(e, c, p)
            }
        }, c)
    }
}, function(e, t) {
    e.exports = function listCacheClear() {
        this.__data__ = [], this.size = 0
    }
}, function(e, t, n) {
    var r = n(144),
        a = Array.prototype.splice;
    e.exports = function listCacheDelete(e) {
        var t = this.__data__,
            n = r(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : a.call(t, n, 1), --this.size, 0))
    }
}, function(e, t, n) {
    var r = n(144);
    e.exports = function listCacheGet(e) {
        var t = this.__data__,
            n = r(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
}, function(e, t, n) {
    var r = n(144);
    e.exports = function listCacheHas(e) {
        return r(this.__data__, e) > -1
    }
}, function(e, t, n) {
    var r = n(144);
    e.exports = function listCacheSet(e, t) {
        var n = this.__data__,
            a = r(n, e);
        return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this
    }
}, function(e, t, n) {
    var r = n(143);
    e.exports = function stackClear() {
        this.__data__ = new r, this.size = 0
    }
}, function(e, t) {
    e.exports = function stackDelete(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }
}, function(e, t) {
    e.exports = function stackGet(e) {
        return this.__data__.get(e)
    }
}, function(e, t) {
    e.exports = function stackHas(e) {
        return this.__data__.has(e)
    }
}, function(e, t, n) {
    var r = n(143),
        a = n(287),
        o = n(363),
        i = 200;
    e.exports = function stackSet(e, t) {
        var n = this.__data__;
        if (n instanceof r) {
            var s = n.__data__;
            if (!a || s.length < i - 1) return s.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new o(s)
        }
        return n.set(e, t), this.size = n.size, this
    }
}, function(e, t, n) {
    var r = n(132),
        a = n(360),
        o = n(55),
        i = n(337),
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        l = Object.prototype,
        u = c.toString,
        d = l.hasOwnProperty,
        p = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function baseIsNative(e) {
        return !(!o(e) || a(e)) && (r(e) ? p : s).test(i(e))
    }
}, function(e, t, n) {
    var r, a = n(361),
        o = (r = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    e.exports = function isMasked(e) {
        return !!o && o in e
    }
}, function(e, t, n) {
    var r = n(74)["__core-js_shared__"];
    e.exports = r
}, function(e, t) {
    e.exports = function getValue(e, t) {
        return null == e ? void 0 : e[t]
    }
}, function(e, t, n) {
    var r = n(364),
        a = n(371),
        o = n(373),
        i = n(374),
        s = n(375);

    function MapCache(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    MapCache.prototype.clear = r, MapCache.prototype.delete = a, MapCache.prototype.get = o, MapCache.prototype.has = i, MapCache.prototype.set = s, e.exports = MapCache
}, function(e, t, n) {
    var r = n(365),
        a = n(143),
        o = n(287);
    e.exports = function mapCacheClear() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(o || a),
            string: new r
        }
    }
}, function(e, t, n) {
    var r = n(366),
        a = n(367),
        o = n(368),
        i = n(369),
        s = n(370);

    function Hash(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    Hash.prototype.clear = r, Hash.prototype.delete = a, Hash.prototype.get = o, Hash.prototype.has = i, Hash.prototype.set = s, e.exports = Hash
}, function(e, t, n) {
    var r = n(146);
    e.exports = function hashClear() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(e, t) {
    e.exports = function hashDelete(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
}, function(e, t, n) {
    var r = n(146),
        a = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;
    e.exports = function hashGet(e) {
        var t = this.__data__;
        if (r) {
            var n = t[e];
            return n === a ? void 0 : n
        }
        return o.call(t, e) ? t[e] : void 0
    }
}, function(e, t, n) {
    var r = n(146),
        a = Object.prototype.hasOwnProperty;
    e.exports = function hashHas(e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : a.call(t, e)
    }
}, function(e, t, n) {
    var r = n(146),
        a = "__lodash_hash_undefined__";
    e.exports = function hashSet(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? a : t, this
    }
}, function(e, t, n) {
    var r = n(147);
    e.exports = function mapCacheDelete(e) {
        var t = r(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
}, function(e, t) {
    e.exports = function isKeyable(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, function(e, t, n) {
    var r = n(147);
    e.exports = function mapCacheGet(e) {
        return r(this, e).get(e)
    }
}, function(e, t, n) {
    var r = n(147);
    e.exports = function mapCacheHas(e) {
        return r(this, e).has(e)
    }
}, function(e, t, n) {
    var r = n(147);
    e.exports = function mapCacheSet(e, t) {
        var n = r(this, e),
            a = n.size;
        return n.set(e, t), this.size += n.size == a ? 0 : 1, this
    }
}, function(e, t, n) {
    var r = n(306),
        a = n(338),
        o = n(339),
        i = n(340),
        s = n(341),
        c = n(208),
        l = n(117),
        u = n(379),
        d = n(174),
        p = n(132),
        m = n(55),
        f = n(380),
        h = n(210),
        g = n(308),
        b = n(381);
    e.exports = function baseMergeDeep(e, t, n, v, y, _, w) {
        var O = g(e, n),
            E = g(t, n),
            k = w.get(E);
        if (k) r(e, n, k);
        else {
            var C = _ ? _(O, E, n + "", e, t, w) : void 0,
                S = void 0 === C;
            if (S) {
                var A = l(E),
                    T = !A && d(E),
                    P = !A && !T && h(E);
                C = E, A || T || P ? l(O) ? C = O : u(O) ? C = i(O) : T ? (S = !1, C = a(E, !0)) : P ? (S = !1, C = o(E, !0)) : C = [] : f(E) || c(E) ? (C = O, c(O) ? C = b(O) : (!m(O) || v && p(O)) && (C = s(E))) : S = !1
            }
            S && (w.set(E, C), y(C, E, v, _, w), w.delete(E)), r(e, n, C)
        }
    }
}, function(e, t, n) {
    var r = n(74).Uint8Array;
    e.exports = r
}, function(e, t, n) {
    var r = n(55),
        a = Object.create,
        o = function() {
            function object() {}
            return function(e) {
                if (!r(e)) return {};
                if (a) return a(e);
                object.prototype = e;
                var t = new object;
                return object.prototype = void 0, t
            }
        }();
    e.exports = o
}, function(e, t, n) {
    var r = n(90),
        a = n(66);
    e.exports = function isArrayLikeObject(e) {
        return a(e) && r(e)
    }
}, function(e, t, n) {
    var r = n(85),
        a = n(288),
        o = n(66),
        i = "[object Object]",
        s = Function.prototype,
        c = Object.prototype,
        l = s.toString,
        u = c.hasOwnProperty,
        d = l.call(Object);
    e.exports = function isPlainObject(e) {
        if (!o(e) || r(e) != i) return !1;
        var t = a(e);
        if (null === t) return !0;
        var n = u.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && l.call(n) == d
    }
}, function(e, t, n) {
    var r = n(305),
        a = n(256);
    e.exports = function toPlainObject(e) {
        return r(e, a(e))
    }
}, function(e, t, n) {
    var r = n(55),
        a = n(131),
        o = n(383),
        i = Object.prototype.hasOwnProperty;
    e.exports = function baseKeysIn(e) {
        if (!r(e)) return o(e);
        var t = a(e),
            n = [];
        for (var s in e)("constructor" != s || !t && i.call(e, s)) && n.push(s);
        return n
    }
}, function(e, t) {
    e.exports = function nativeKeysIn(e) {
        var t = [];
        if (null != e)
            for (var n in Object(e)) t.push(n);
        return t
    }
}, function(e, t, n) {
    var r = n(385),
        a = n(392);
    e.exports = function createAssigner(e) {
        return r(function(t, n) {
            var r = -1,
                o = n.length,
                i = o > 1 ? n[o - 1] : void 0,
                s = o > 2 ? n[2] : void 0;
            for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, s && a(n[0], n[1], s) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o;) {
                var c = n[r];
                c && e(t, c, r, i)
            }
            return t
        })
    }
}, function(e, t, n) {
    var r = n(136),
        a = n(386),
        o = n(388);
    e.exports = function baseRest(e, t) {
        return o(a(e, t, r), e + "")
    }
}, function(e, t, n) {
    var r = n(387),
        a = Math.max;
    e.exports = function overRest(e, t, n) {
        return t = a(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var o = arguments, i = -1, s = a(o.length - t, 0), c = Array(s); ++i < s;) c[i] = o[t + i];
                i = -1;
                for (var l = Array(t + 1); ++i < t;) l[i] = o[i];
                return l[t] = n(c), r(e, this, l)
            }
    }
}, function(e, t) {
    e.exports = function apply(e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
}, function(e, t, n) {
    var r = n(389),
        a = n(391)(r);
    e.exports = a
}, function(e, t, n) {
    var r = n(390),
        a = n(307),
        o = n(136),
        i = a ? function(e, t) {
            return a(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(t),
                writable: !0
            })
        } : o;
    e.exports = i
}, function(e, t) {
    e.exports = function constant(e) {
        return function() {
            return e
        }
    }
}, function(e, t) {
    var n = 800,
        r = 16,
        a = Date.now;
    e.exports = function shortOut(e) {
        var t = 0,
            o = 0;
        return function() {
            var i = a(),
                s = r - (i - o);
            if (o = i, s > 0) {
                if (++t >= n) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, function(e, t, n) {
    var r = n(145),
        a = n(90),
        o = n(209),
        i = n(55);
    e.exports = function isIterateeCall(e, t, n) {
        if (!i(n)) return !1;
        var s = typeof t;
        return !!("number" == s ? a(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e)
    }
}, , , , , , , , function(e, t, n) {
    var r = n(454),
        a = n(455),
        o = n(456);
    e.exports = function _slicedToArray(e, t) {
        return r(e) || a(e, t) || o()
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = n(488);
    e.exports = function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var n, a, o = r(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }
}, function(e, t) {
    e.exports = function _iterableToArrayLimit(e, t) {
        var n = [],
            r = !0,
            a = !1,
            o = void 0;
        try {
            for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
        } catch (e) {
            a = !0, o = e
        } finally {
            try {
                r || null == s.return || s.return()
            } finally {
                if (a) throw o
            }
        }
        return n
    }
}, function(e, t) {
    e.exports = function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, , , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return getAuthorsByContentType
    }), n.d(t, "b", function() {
        return getContent
    }), n.d(t, "c", function() {
        return getNonTranslatedString
    }), n.d(t, "d", function() {
        return headlineContent
    });
    var r = n(400),
        a = n.n(r),
        o = n(11),
        i = n(7),
        s = n(9);

    function getAuthorsByContentType(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
                article: "getArticleAuthors",
                blog: "getBlogAuthors",
                news: "getNewsAuthors"
            };
        return Object.prototype.hasOwnProperty.call(n, e) ? o.default.get(i.a.generate(s.b[n[e]], t)).then(function(e) {
            return e.data
        }) : Promise.reject(new Error("Invalid content type"))
    }

    function getContent(e) {
        var t = Object.assign({}, e.routeParams, {
            contentType: e.contentType,
            page: e.page,
            itemsPerPage: e.itemsPerPage
        });
        return ["cat_id", "keyword", "username", "orderBy", "unpublished"].forEach(function(n) {
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }), o.default.get(i.a.generate(s.b.getContent, t)).then(function(e) {
            return e.data
        })
    }

    function getNonTranslatedString(e) {
        var t = Object.entries(window.chesscom_translations.messages).find(function(t) {
            var n = a()(t, 2),
                r = n[0];
            return n[1] === e || r === e
        });
        return t ? t[0] : e
    }

    function headlineContent(e) {
        var t = e.contentType,
            n = e.contentId;
        return o.default.get(i.a.generate("web_content_callback_headline", {
            contentType: t,
            contentId: n
        }))
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {};
        var n, r, a = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = {
        component: "alert-banner-component",
        showAlert: "alert-banner-showAlert",
        message: "alert-banner-message",
        error: "alert-banner-error",
        info: "alert-banner-info",
        topical: "alert-banner-topical",
        success: "alert-banner-success",
        close: "alert-banner-close",
        dismissing: "alert-banner-dismissing",
        hideAlert: "alert-banner-hideAlert",
        "log-image": "alert-banner-log-image"
    }
}, function(e, t, n) {
    e.exports = {
        component: "alert-flash-component",
        alert: "alert-flash-alert"
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    e.exports = {
        component: "form-select-component",
        wrapper: "form-select-wrapper",
        "with-help-wrapper": "form-select-with-help-wrapper",
        select: "form-select-select",
        icon: "form-select-icon",
        multiple: "form-select-multiple"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-author-component",
        avatar: "post-author-avatar",
        thumbnail: "post-author-thumbnail",
        right: "post-author-right",
        author: "post-author-author",
        title: "post-author-title",
        name: "post-author-name",
        rating: "post-author-rating",
        meta: "post-author-meta",
        separator: "post-author-separator",
        link: "post-author-link",
        about: "post-author-about"
    }
}, function(e, t, n) {
    e.exports = {
        "content-ad": "authors-content-ad",
        "content-ad-wrapper": "authors-content-ad-wrapper",
        header: "authors-header",
        pagination: "authors-pagination",
        bottom: "authors-bottom",
        top: "authors-top",
        post: "authors-post",
        list: "authors-list"
    }
}, function(e, t, n) {
    e.exports = {
        "content-ad": "category-content-ad",
        "content-ad-wrapper": "category-content-ad-wrapper",
        header: "category-header",
        pagination: "category-pagination",
        post: "category-post",
        component: "category-component",
        filters: "category-filters",
        dropdown: "category-dropdown"
    }
}, function(e, t, n) {}, function(e, t, n) {
    e.exports = {
        "content-ad": "index-content-ad",
        "content-ad-wrapper": "index-content-ad-wrapper",
        "content-ad-wrapper-top": "index-content-ad-wrapper-top",
        pagination: "index-pagination",
        "top-pagination": "index-top-pagination"
    }
}, function(e, t, n) {
    e.exports = {
        "button-group": "single-button-group",
        icon: "single-icon",
        "content-ad": "single-content-ad",
        comments: "single-comments",
        more: "single-more",
        space: "single-space",
        share: "single-share"
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(800),
        a = n.n(r);
    t.default = a.a
}, function(e, t, n) {
    "use strict";
    var r = n(801),
        a = n.n(r);
    t.default = a.a
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    n(1156), n(1265), n(1158), n(1159), n(1160), n(1161), n(1162), n(1163), n(1164), n(1165), n(1166), n(1167), n(1168), n(1169), n(1170), n(1171), n(1172), n(1173), n(1174), n(1175), n(1176), n(1177), n(1178), n(1179), n(1180), n(1181), n(1182), n(838), n(1183), n(839), n(836), n(1184), n(840), n(841), n(1185), n(1186), n(842), n(1187), n(1188), n(1189), n(837), n(1190), n(1191), n(1192), n(1193), n(1194), n(1195), n(1196), n(1197), n(1198), n(1199), n(1200), e.exports = n(1201)
}, function(e, t, n) {}, function(e, t, n) {
    e.exports = n(26)(77)
}, function(e, t, n) {
    e.exports = {
        sidebar: "base-sidebar",
        layout: "base-layout",
        slidetop: "base-slidetop",
        slidebottom: "base-slidebottom",
        slideleft: "base-slideleft",
        slideright: "base-slideright"
    }
}, function(e, t, n) {}, function(e, t, n) {
    e.exports = {
        component: "form-component",
        "help-block": "form-help-block"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-button-component",
        dark: "form-button-dark",
        "x-small": "form-button-x-small",
        small: "form-button-small",
        large: "form-button-large",
        "x-large": "form-button-x-large",
        "full-width": "form-button-full-width",
        basic: "form-button-basic",
        darkMode: "form-button-darkMode",
        primary: "form-button-primary",
        info: "form-button-info",
        danger: "form-button-danger"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-checkbox-component",
        checkbox: "form-checkbox-checkbox",
        label: "form-checkbox-label"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-dropdown-component",
        select: "form-dropdown-select",
        value: "form-dropdown-value",
        chevron: "form-dropdown-chevron",
        options: "form-dropdown-options",
        option: "form-dropdown-option",
        icon: "form-dropdown-icon",
        selected: "form-dropdown-selected",
        overlay: "form-dropdown-overlay"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-error-component",
        wrapper: "form-error-wrapper",
        text: "form-error-text",
        label: "form-error-label"
    }
}, function(e, t, n) {
    e.exports = {
        label: "form-label-label"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-input-component",
        darkMode: "form-input-darkMode",
        input: "form-input-input",
        textarea: "form-input-textarea",
        wrapper: "form-input-wrapper",
        icon: "form-input-icon",
        left: "form-input-left",
        right: "form-input-right",
        large: "form-input-large"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-select-component",
        darkMode: "form-select-darkMode",
        icon: "form-select-icon",
        large: "form-select-large"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-switch-component",
        checkbox: "form-switch-checkbox",
        readonly: "form-switch-readonly",
        label: "form-switch-label",
        button: "form-switch-button",
        group: "form-switch-group"
    }
}, function(e, t, n) {
    e.exports = {
        component: "form-textarea-component",
        darkMode: "form-textarea-darkMode",
        autosize: "form-textarea-autosize",
        vertical: "form-textarea-vertical",
        "full-width": "form-textarea-full-width"
    }
}, function(e, t, n) {
    e.exports = {
        component: "section-container-component",
        darkMode: "section-container-darkMode",
        visible: "section-container-visible"
    }
}, function(e, t, n) {
    e.exports = {
        component: "section-content-component"
    }
}, function(e, t, n) {
    e.exports = {
        component: "section-highlight-component",
        darkMode: "section-highlight-darkMode"
    }
}, function(e, t, n) {
    e.exports = {
        component: "section-link-component",
        name: "section-link-name",
        icon: "section-link-icon",
        chevron: "section-link-chevron",
        darkMode: "section-link-darkMode",
        "header-count": "section-link-header-count",
        "with-avatar": "section-link-with-avatar",
        avatar: "section-link-avatar",
        counter: "section-link-counter"
    }
}, function(e, t, n) {
    e.exports = {
        component: "section-row-component",
        border: "section-row-border",
        left: "section-row-left"
    }
}, function(e, t, n) {
    e.exports = {
        component: "section-title-dismissible-component",
        icon: "section-title-dismissible-icon",
        name: "section-title-dismissible-name"
    }
}, function(e, t, n) {
    e.exports = {
        component: "section-title-component",
        icon: "section-title-icon",
        name: "section-title-name"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-tagline-component",
        username: "user-tagline-username",
        rating: "user-tagline-rating",
        darkMode: "user-tagline-darkMode"
    }
}, function(e, t, n) {
    e.exports = {
        component: "user-status-component",
        online: "user-status-online",
        onlive: "user-status-onlive",
        darkMode: "user-status-darkMode",
        big: "user-status-big"
    }
}, function(e, t, n) {
    e.exports = {
        component: "membership-component",
        "level-30": "membership-level-30",
        gold: "membership-gold",
        "level-40": "membership-level-40",
        platinum: "membership-platinum",
        "level-50": "membership-level-50",
        diamond: "membership-diamond",
        "level-90": "membership-level-90",
        staff: "membership-staff",
        "level-80": "membership-level-80",
        mod: "membership-mod",
        moderator: "membership-moderator",
        "level-5": "membership-level-5",
        "level-8": "membership-level-8",
        cheater: "membership-cheater",
        unspecifiedClosed: "membership-unspecifiedClosed",
        "level-6": "membership-level-6",
        abuser: "membership-abuser",
        "level-7": "membership-level-7",
        voluntarilyClosed: "membership-voluntarilyClosed",
        "level-10": "membership-level-10",
        basic: "membership-basic",
        level: "membership-level",
        middle: "membership-middle",
        large: "membership-large",
        responsive: "membership-responsive",
        "x-large": "membership-x-large"
    }
}, function(e, t) {
    var n = document.getElementsByClassName("img-defer");
    if (n.length > 0) {
        window.addEventListener("load", function setupImageDefer() {
            window.removeEventListener("load", setupImageDefer);
            for (var e = new IntersectionObserver(function(t) {
                    t.forEach(function(t) {
                        if (t.intersectionRatio > 0) {
                            var n = t.target;
                            n.classList.contains("img-defer") && function handleImageDefer(e) {
                                var t = e.getAttribute("data-src"),
                                    n = e.getAttribute("data-srcset");
                                t && e.setAttribute("src", t), n && e.setAttribute("srcset", n), (t || n) && (e.classList.remove("img-defer"), e.classList.remove("img-defer-placeholder"))
                            }(n), e.unobserve(n)
                        }
                    })
                }, {
                    rootMargin: "50px 0px",
                    threshold: .01
                }), t = n.length - 1; t >= 0; t -= 1) e.observe(n[t])
        })
    }
}, function(e, t) {
    var n = document.getElementsByClassName("video-defer");
    if (n.length > 0) {
        window.addEventListener("load", function setupVideoDefer() {
            var e = function handleVideoDefer(e) {
                var t = e.getAttribute("data-src");
                t && (e.setAttribute("src", t), e.classList.remove("video-defer", "video-defer-placeholder"))
            };
            if (window.IntersectionObserver)
                for (var t = new IntersectionObserver(function(n) {
                        n.forEach(function(n) {
                            if (n.intersectionRatio > 0) {
                                var r = n.target;
                                r.classList.contains("video-defer") && e(r), t.unobserve(r)
                            }
                        })
                    }, {
                        rootMargin: "100px 0px",
                        threshold: .01
                    }), r = n.length - 1; r >= 0; r -= 1) t.observe(n[r]);
            else Array.from(n).forEach(e)
        }, {
            once: !0
        })
    }
}, function(e, t) {
    window.addEventListener("load", function loadLazyScripts() {
        Array.from(document.querySelectorAll("script[data-src]")).forEach(function(e) {
            ! function loadSingleScript(e) {
                var t = document.createElement("script");
                t.setAttribute("src", e), t.defer = !0, document.body.appendChild(t)
            }(e.getAttribute("data-src")), e.parentNode.removeChild(e)
        })
    }, {
        once: !0
    })
}, function(e, t, n) {
    e.exports = {
        component: "breadcrumbs-component",
        item: "breadcrumbs-item",
        link: "breadcrumbs-link"
    }
}, function(e, t, n) {}, function(e, t, n) {
    e.exports = {
        content: "membership-players-content",
        player: "membership-players-player",
        "player-details": "membership-players-player-details",
        fullname: "membership-players-fullname",
        "user-rating": "membership-players-user-rating"
    }
}, function(e, t, n) {
    e.exports = {
        "content-ad-wrapper": "post-content-ad-wrapper",
        "btn-upload-input": "post-btn-upload-input",
        header: "post-header",
        form: "post-form",
        "time-wrapper": "post-time-wrapper",
        "time-wrapper-minute": "post-time-wrapper-minute",
        "upload-preview": "post-upload-preview",
        "upload-input": "post-upload-input",
        "upload-small": "post-upload-small",
        "tinymce-editor": "post-tinymce-editor",
        buttons: "post-buttons",
        "form-button-large": "post-form-button-large",
        "datepicker-icon": "post-datepicker-icon",
        "url-wrapper": "post-url-wrapper",
        "url-label": "post-url-label",
        "url-link": "post-url-link",
        "url-link-disabled": "post-url-link-disabled",
        "url-field": "post-url-field",
        "url-edit": "post-url-edit",
        "can-edit-url": "post-can-edit-url",
        "url-permalink": "post-url-permalink",
        "datepicker-component": "post-datepicker-component",
        "caption-wrapper": "post-caption-wrapper",
        caption: "post-caption",
        "upload-small-caption": "post-upload-small-caption",
        row: "post-row",
        "create-form": "post-create-form",
        "form-upload": "post-form-upload",
        "caption-blog-wrapper": "post-caption-blog-wrapper",
        "row-label": "post-row-label",
        "row-field": "post-row-field",
        "caption-input": "post-caption-input",
        "help-text": "post-help-text",
        checkbox: "post-checkbox"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-author-custom-component",
        edit: "post-author-custom-edit",
        icon: "post-author-custom-icon"
    }
}, function(e, t, n) {
    e.exports = {
        icon: "post-author-follow-icon"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-author-small-component",
        header: "post-author-small-header",
        avatar: "post-author-small-avatar",
        thumbnail: "post-author-small-thumbnail",
        author: "post-author-small-author",
        details: "post-author-small-details",
        user: "post-author-small-user",
        title: "post-author-small-title",
        username: "post-author-small-username",
        membership: "post-author-small-membership",
        name: "post-author-small-name",
        location: "post-author-small-location",
        follow: "post-author-small-follow"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-category-header-component",
        title: "post-category-header-title",
        subtitle: "post-category-header-subtitle",
        "subtitle-small": "post-category-header-subtitle-small"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-category-link-component",
        category: "post-category-link-category",
        darkMode: "post-category-link-darkMode",
        badge: "post-category-link-badge",
        tip: "post-category-link-tip"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-category-preview-component",
        image: "post-category-preview-image",
        thumbnail: "post-category-preview-thumbnail",
        right: "post-category-preview-right",
        header: "post-category-preview-header",
        title: "post-category-preview-title",
        static: "post-category-preview-static",
        draft: "post-category-preview-draft",
        scheduled: "post-category-preview-scheduled",
        meta: "post-category-preview-meta",
        excerpt: "post-category-preview-excerpt",
        "move-list": "post-category-preview-move-list",
        "game-preview": "post-category-preview-game-preview",
        "image-icon": "post-category-preview-image-icon",
        "image-small": "post-category-preview-image-small"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-load-more-component",
        title: "post-load-more-title",
        icon: "post-load-more-icon"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-preview-list-component"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-preview-meta-component",
        title: "post-preview-meta-title",
        username: "post-preview-meta-username",
        time: "post-preview-meta-time",
        views: "post-preview-meta-views",
        comments: "post-preview-meta-comments",
        separator: "post-preview-meta-separator",
        icon: "post-preview-meta-icon",
        content: "post-preview-meta-content",
        category: "post-preview-meta-category"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-preview-component",
        image: "post-preview-image",
        thumbnail: "post-preview-thumbnail",
        draft: "post-preview-draft",
        scheduled: "post-preview-scheduled",
        titlecontainer: "post-preview-titlecontainer",
        title: "post-preview-title",
        static: "post-preview-static",
        meta: "post-preview-meta",
        excerpt: "post-preview-excerpt",
        "whole-text": "post-preview-whole-text",
        "image-icon": "post-preview-image-icon",
        "video-time": "post-preview-video-time",
        "video-time-icon": "post-preview-video-time-icon",
        headline: "post-preview-headline",
        watched: "post-preview-watched"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-view-meta-component",
        avatar: "post-view-meta-avatar",
        image: "post-view-meta-image",
        details: "post-view-meta-details",
        user: "post-view-meta-user",
        title: "post-view-meta-title",
        username: "post-view-meta-username",
        membership: "post-view-meta-membership",
        category: "post-view-meta-category",
        "club-admin": "post-view-meta-club-admin",
        rating: "post-view-meta-rating",
        stats: "post-view-meta-stats",
        separator: "post-view-meta-separator",
        icon: "post-view-meta-icon",
        dropdown: "post-view-meta-dropdown"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-view-more-component",
        author: "post-view-more-author",
        title: "post-view-more-title",
        username: "post-view-more-username",
        posts: "post-view-more-posts",
        post: "post-view-more-post",
        image: "post-view-more-image",
        thumbnail: "post-view-more-thumbnail"
    }
}, function(e, t, n) {
    e.exports = {
        component: "post-view-translation-helper-component"
    }
}, function(e, t, n) {
    e.exports = {
        image: "post-view-image",
        caption: "post-view-caption",
        thumbnail: "post-view-thumbnail",
        title: "post-view-title",
        about: "post-view-about",
        languages: "post-view-languages",
        content: "post-view-content",
        "premium-box": "post-view-premium-box",
        "premium-login": "post-view-premium-login",
        "video-defer-placeholder": "post-view-video-defer-placeholder",
        component: "post-view-component"
    }
}, function(e, t, n) {
    e.exports = {
        wrapper: "toggle-content-wrapper",
        button: "toggle-content-button",
        icon: "toggle-content-icon",
        "icon-up": "toggle-content-icon-up"
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(1157);
    var r = {
            productionTip: !1
        },
        a = n(31),
        o = n(121);
    Object.keys(r).forEach(function(e) {
        a.default.config[e] = r[e]
    }), a.default.mixin(o.a);
    var i = n(13),
        s = function animateAlert(e, t) {
            var n = document.getElementById("alert-".concat(e));
            n && n.classList.add(i.f.DISMISSING), setTimeout(function() {
                t()
            }, 200)
        },
        c = function createAlert(e, t) {
            return {
                id: Math.floor(Math.random() * Math.floor(512)),
                message: t,
                type: e
            }
        },
        l = function autoDismissAlert(e, t) {
            var n = e.type,
                r = e.id,
                a = e.timeout,
                o = void 0 === a ? i.a : a;
            [i.g.success, i.g.info].includes(n) && setTimeout(function() {
                s(r, function() {
                    t("dismiss", r)
                })
            }, o)
        },
        u = {
            namespaced: !0,
            actions: {
                create: function create(e, t) {
                    var n = e.commit,
                        r = t.message,
                        a = t.type,
                        o = c(a, r);
                    n("create", o), l(o, n)
                },
                createAll: function createAll(e, t) {
                    var n = e.commit,
                        r = t.map(function(e) {
                            var t = c(e.type, e.message);
                            return l(t, n), t
                        });
                    n("createAll", r)
                }
            },
            mutations: {
                create: function create(e, t) {
                    e.alerts.push(t)
                },
                createAll: function createAll(e, t) {
                    e.alerts = e.alerts.concat(t)
                },
                dismiss: function dismiss(e, t) {
                    e.alerts = e.alerts.filter(function(e) {
                        return e.id !== t
                    })
                },
                dismissAll: function dismissAll(e) {
                    e.alerts.length = 0
                }
            },
            state: {
                alerts: []
            }
        },
        d = n(11),
        p = n(7),
        m = function setOnboarding(e) {
            var t = p.a.generate("web_user_callback_set_onboarding");
            return d.default.post(t, e)
        },
        f = function getTvAnnouncement(e) {
            var t = p.a.generate("web_tv_callback_get_announcement", {
                locale: e
            });
            return d.default.get(t)
        },
        h = {
            init: function init(e, t) {
                var n = e.commit,
                    r = e.rootState,
                    a = t.completed,
                    o = t.paymentLate;
                n("setCompletedGoals", a), n("setBanners", {
                    user: r.user,
                    paymentLate: o
                })
            },
            completeGoal: function completeGoal(e, t) {
                var n = e.commit,
                    r = e.dispatch,
                    a = e.getters,
                    o = {
                        name: t
                    }; - 1 === e.state.completedGoals.names.indexOf(t) && (a.nextGoal.name === t && (o.lastLoginDate = 1), r("setOnboarding", o)), n("setGoalName", t)
            },
            updateLastLoginDate: function updateLastLoginDate(e) {
                var t = e.commit,
                    n = e.dispatch;
                t("setCompletedGoalLastLogin", e.rootState.user.lastLoginDate), n("setOnboarding", {
                    lastLoginDate: 1
                })
            },
            setOnboarding: function setOnboarding(e, t) {
                return m(t)
            },
            fetchTVAnnouncement: function fetchTVAnnouncement(e) {
                var t = e.commit,
                    n = e.rootState;
                n.user.isLoggedIn && f(n.user.language).then(function(e) {
                    var r = n.user.language === e.data.language || "default_and_user" === n.user.contentLanguage && e.data.language === e.data.defaultLanguage || "any" === n.user.contentLanguage;
                    t("setTVAnnouncement", r ? e.data : {})
                })
            }
        },
        g = 1,
        b = 2,
        v = 3,
        y = n(0),
        _ = {
            byline: y.a.trans("Start playing in leagues and matches."),
            cta: y.a.trans("Find"),
            headline: y.a.trans("Join a club"),
            link: p.a.generate("web_club"),
            name: "clubs",
            priority: g
        },
        w = {
            byline: y.a.trans("Improve by starting games in key positions."),
            cta: y.a.trans("Drills"),
            headline: y.a.trans("Practice Makes Perfect"),
            link: p.a.generate("web_drills_home"),
            name: "drills",
            priority: g
        },
        O = {
            byline: y.a.trans("Learn from our database of millions of games."),
            cta: y.a.trans("Explore"),
            headline: y.a.trans("Explore Chess Openings"),
            link: p.a.generate("web_openings_index"),
            name: "explorer",
            priority: g
        },
        E = {
            byline: y.a.trans("Discuss everything about chess in the forums."),
            cta: y.a.trans("Forums"),
            headline: y.a.trans("Talk About Chess"),
            link: p.a.generate("web_forum_index"),
            name: "forums",
            priority: g
        },
        k = {
            byline: y.a.trans("Improve quickly with free lessons from masters."),
            cta: y.a.trans("Study"),
            headline: y.a.trans("Online Lessons"),
            link: p.a.generate("web_lesson_index"),
            name: "lessons",
            priority: v
        },
        C = {
            byline: y.a.trans("Stay up to date on the latest events and news."),
            cta: y.a.trans("News"),
            headline: y.a.trans("Latest Chess News"),
            link: p.a.generate("web_news_index"),
            name: "news",
            priority: g
        },
        S = {
            name: "newuser",
            priority: v
        },
        A = {
            byline: y.a.trans("Add personality to your profile with an avatar."),
            cta: y.a.trans("Profile"),
            headline: y.a.trans("Be Yourself"),
            link: p.a.generate("web_user_settings_edit"),
            name: "profile",
            priority: v
        },
        T = n(17),
        P = {
            byline: y.a.trans("View your stats and see how you compare."),
            cta: y.a.trans("View"),
            headline: y.a.trans("Track Your Progress"),
            link: p.a.generate("web_stats", {
                username: Object(T.c)("getUsername")
            }),
            name: "stats",
            priority: v
        },
        x = {
            byline: y.a.trans("Improve your game with tactics training."),
            cta: y.a.trans("Tactics"),
            headline: y.a.trans("Find the Winning Move"),
            link: p.a.generate("web_tactic_index"),
            name: "tactics1",
            priority: v
        },
        j = {
            byline: y.a.trans("The best way to improve is daily tactics training."),
            cta: y.a.trans("Tactics"),
            headline: y.a.trans("Solve Chess Puzzles"),
            link: p.a.generate("web_tactic_index"),
            name: "tactics2",
            priority: g
        },
        M = {
            byline: y.a.trans("“I stay sharp with tactics training on Chess.com” %user%", {
                "%user%": "<br/>GM Hikaru Nakamura"
            }),
            cta: y.a.trans("Tactics"),
            headline: y.a.trans("Train Like a Pro"),
            link: p.a.generate("web_tactic_index"),
            name: "tactics3",
            priority: g
        },
        L = {
            byline: y.a.trans("Choose from dozens of themes or create your own."),
            cta: y.a.trans("Preview"),
            headline: y.a.trans("Custom Themes"),
            link: p.a.generate("web_user_settings_themes"),
            name: "themes",
            priority: g
        },
        N = {
            byline: y.a.trans("Play your best and bring home the gold."),
            cta: y.a.trans("Find"),
            headline: y.a.trans("Join a Tournament"),
            link: p.a.generate("web_tournaments_list"),
            name: "tournaments",
            priority: g
        },
        I = {
            byline: "",
            cta: y.a.trans("Watch"),
            headline: 'ChessTV <span class="live-now">'.concat(y.a.trans("Live Now!"), "</span>"),
            link: p.a.generate("web_tv"),
            name: "tv",
            priority: b
        },
        R = {
            byline: y.a.trans("Learn from hundreds of video lessons."),
            cta: y.a.trans("Watch"),
            headline: y.a.trans("Watch Chess Videos"),
            link: p.a.generate("web_video_index"),
            name: "videos",
            priority: g
        },
        D = {
            byline: y.a.trans("Increase awareness to quickly see and follow moves."),
            cta: y.a.trans("Try It"),
            headline: y.a.trans("Improve Your Vision"),
            link: p.a.generate("web_board_training"),
            name: "vision",
            priority: g
        },
        $ = [S, {
            byline: y.a.trans("Faster, more flexible, and much more powerful."),
            forumAnchor: y.a.trans("Get Help in the Forums"),
            forumLink: p.a.generate("web_forum_category", {
                url: "suggestions"
            }),
            headline: y.a.trans("Welcome to the New Chess.com!"),
            link: p.a.generate("web_article_view", {
                url: "introducing-chess-com-version-3"
            }),
            name: "welcomev3",
            priority: v,
            tourAnchor: y.a.trans("Tour and FAQs")
        }, x, k, P, A, I, L, N, _, R, j, C, E, O, D, w, M],
        B = {
            byline: "".concat(y.a.transChoice("{1} Try Premium free for 1 day.|]1,Inf] Try Premium free for %days% days.", 7, {
                "%days%": 7
            }), "\n  <br/>").concat(y.a.trans("As little as %monies% after.", {
                "%monies%": "$5mo"
            })),
            cta: y.a.trans("Free Trial"),
            headline: y.a.trans("Go Premium. Get Better."),
            icon: "stats-arrow-up",
            link: p.a.generate("web_membership", {
                c: "trial-onboard"
            }),
            name: "free-trial",
            priority: g
        },
        F = {
            byline: y.a.trans("Update your payment info to keep your premium membership."),
            cta: y.a.trans("Update"),
            headline: y.a.trans("Update Your Payment Info"),
            icon: "card",
            link: p.a.generate("web_user_settings_update_payment"),
            name: "payment-late",
            priority: v
        },
        U = n(109),
        V = {
            actions: h,
            getters: {
                nextGoal: function nextGoal(e) {
                    var nextGoal;
                    return nextGoal = 0 === e.completedGoals.names.length ? e.banners[0] : e.banners.find(function(t) {
                        return -1 === e.completedGoals.names.indexOf(t.name) && "tv" !== t.name
                    }), nextGoal
                }
            },
            namespaced: !0,
            mutations: {
                setBanners: function setBanners(e, t) {
                    e.banners = function getBanners(e) {
                        return e.user.eligibleFirstTrial && $.push(B), e.paymentLate && $.unshift(F), $
                    }(t)
                },
                setBanner: function setBanner(e, t) {
                    e.banner = t
                },
                setCompletedGoals: function setCompletedGoals(e, t) {
                    e.completedGoals = t
                },
                setCompletedGoalLastLogin: function setCompletedGoalLastLogin(e, t) {
                    e.completedGoals.lastLoginDate = t
                },
                setGoalName: function setGoalName(e, t) {
                    e.completedGoals.names.push(t)
                },
                setTvBanner: function setTvBanner(e, t) {
                    var n = e.banners.find(function(e) {
                        return "tv" === e.name
                    });
                    n.bannerImage = t.bannerImage, n.byline = t.title
                },
                setTVAnnouncement: function setTVAnnouncement(e, t) {
                    e.tvAnnouncement.bannerImage = t.bannerImage, e.tvAnnouncement.title = t.title, e.tvAnnouncement.isHeadline = t.isHeadline, e.tvAnnouncement.hash = t.hash, e.tvAnnouncement.fetched = !0
                },
                dismissTVAnnouncement: function dismissTVAnnouncement(e) {
                    e.tvAnnouncement.dismissedHash = e.tvAnnouncement.hash, U.default.set("dismissedTvHash", e.tvAnnouncement.hash)
                }
            },
            state: {
                banners: [],
                banner: null,
                completedGoals: {
                    lastLoginDate: !1,
                    names: []
                },
                tvAnnouncement: {
                    bannerImage: "",
                    title: "",
                    hash: "",
                    isHeadline: !0,
                    fetched: !1,
                    dismissedHash: U.default.get("dismissedTvHash")
                }
            }
        },
        q = n(23),
        G = n(320);
    q.default.registerModule("user", G.a), G.a.state.isLoggedIn && q.default.dispatch("user/getAdditionaUserInfoFromDb"), q.default.registerModule("alerts", u), q.default.registerModule("onboard", V);
    var H = n(429),
        z = n.n(H),
        K = n(42),
        W = n.n(K),
        Y = n(3),
        Q = n.n(Y),
        J = n(134),
        Z = n(53),
        X = n(25),
        ee = n(462),
        te = n(67),
        ne = n(18),
        re = n(33),
        ae = {
            name: "template-alert-banner",
            components: {
                IconFont: ne.a,
                formButton: re.a
            },
            inheritAttrs: !1,
            props: {
                alert: {
                    type: Object,
                    required: !0,
                    validator: function validator(e) {
                        return !!e.id && (!("string" != typeof e.message || e.message.length < 1) && Object.keys(i.g).some(function(t) {
                            return i.g[t] === e.type
                        }))
                    }
                },
                dismiss: {
                    type: Function,
                    required: !0
                },
                action: {
                    type: Object,
                    validator: function validator(e) {
                        return !("string" != typeof e.text || e.text.length < 1) && (!("string" != typeof e.theme || e.theme.length < 1) && "function" == typeof e.handler)
                    }
                }
            },
            computed: {
                cache: function cache() {
                    return Math.floor(100 * Math.random() * 1e3 * 1e3 * 1e3)
                },
                convertMessageToPath: function convertMessageToPath() {
                    return encodeURI(this.untranslatedMessage)
                },
                path: function path() {
                    var e = Object(te.a)("bundles/web/images/clear.gif");
                    return "".concat(e, "?msg=").concat(this.convertMessageToPath, "&flashCount=").concat(this.alert.flashCount, "&cachebust=").concat(this.cache)
                },
                untranslatedMessage: function untranslatedMessage() {
                    return Object(ee.c)(this.alert.message)
                }
            },
            methods: {
                removeAlert: function removeAlert() {
                    var e = this;
                    s(this.alert.id, function() {
                        e.dismiss(e.alert.id)
                    })
                }
            }
        },
        oe = n(1078),
        ie = n(5);

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
                Q()(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var se = {
            name: "alert-flash",
            components: {
                AlertBanner: Object(ie.a)(ae, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: [e.$style.component, e.$style[e.alert.type]],
                        attrs: {
                            id: "alert-" + e.alert.id
                        }
                    }, [n("span", {
                        class: e.$style.message,
                        domProps: {
                            innerHTML: e._s(e.alert.message)
                        }
                    }), e._v(" "), e.action ? n("form-button", {
                        attrs: {
                            size: "small",
                            type: "button",
                            theme: e.action.theme
                        },
                        on: {
                            click: e.action.handler
                        }
                    }, [e._v("\n    " + e._s(e.action.text) + "\n  ")]) : e._e(), e._v(" "), n("button", {
                        class: e.$style.close,
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: e.removeAlert
                        }
                    }, [n("icon-font", {
                        attrs: {
                            name: "x"
                        }
                    })], 1), e._v(" "), e.alert.flashCount ? n("img", {
                        class: e.$style["log-image"],
                        attrs: {
                            src: e.path
                        }
                    }) : e._e()], 1)
                }, [], !1, function injectStyles(e) {
                    this.$style = oe.default.locals || oe.default
                }, null, null).exports
            },
            inheritAttrs: !1,
            data: function data() {
                return {
                    errors: {},
                    indent: 0,
                    sidebar: document.querySelector(J.f.MAIN_NAV)
                }
            },
            computed: _objectSpread({}, Object(X.mapState)("alerts", ["alerts"]), {
                alertStyle: function alertStyle() {
                    return Object(Z.a)() ? {
                        right: this.indent
                    } : {
                        left: this.indent
                    }
                }
            }),
            watch: {
                alerts: function alerts(e) {
                    var t = this;
                    e.forEach(function(e, n) {
                        if (e && e.message) {
                            var r = e.id + e.message,
                                a = e.type === i.g.error && !t.errors[r];
                            if (e.flashCount = null, a) {
                                var o = t.alerts[n + 1],
                                    s = !o || o.message !== e.message;
                                t.errors[r] = !0, s && (e.flashCount = Object.keys(t.errors).length)
                            }
                        }
                    })
                }
            },
            created: function created() {
                var e = this;
                window.addEventListener("message", function(t) {
                    var n = t.data;
                    if ("object" === W()(n) && n.key === i.d) {
                        n.key;
                        var r = z()(n, ["key"]);
                        e.$store.dispatch("alerts/create", r)
                    }
                })
            },
            mounted: function mounted() {
                var e = this;
                this.sidebar && (window.addEventListener("resize", function() {
                    e.changeIndent()
                }), this.changeIndent(), this.observer = new MutationObserver(function(t) {
                    t.forEach(function() {
                        e.$nextTick(function() {
                            e.changeIndent()
                        })
                    })
                }), this.observer.observe(this.sidebar, {
                    attributeFilter: ["class"],
                    attributeOldValue: !0,
                    attributes: !0
                }))
            },
            beforeDestroy: function beforeDestroy() {
                this.observer.disconnect()
            },
            methods: _objectSpread({}, Object(X.mapMutations)("alerts", ["dismiss"]), {
                changeIndent: function changeIndent() {
                    var e = this.sidebar.classList;
                    this.indent = "".concat(J.e.MOBILE, "px"), window.innerWidth >= J.d.MOBILE_WIDTH && (this.indent = "".concat(J.e.DEFAULT, "px"), e.contains(J.b.WIDE) && !e.contains(J.b.COLLAPSED) && (this.indent = "".concat(J.e.WIDE, "px")), e.contains(J.b.COLLAPSED) && (this.indent = "".concat(J.e.COLLAPSED, "px")))
                }
            })
        },
        ce = n(1079);
    var le = Object(ie.a)(se, function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: e.$style.component,
                style: e.alertStyle
            }, e._l(e.alerts, function(t) {
                return n("alert-banner", e._b({
                    key: t.id,
                    class: e.$style.alert,
                    attrs: {
                        alert: t,
                        dismiss: e.dismiss
                    }
                }, "alert-banner", e.$attrs, !1))
            }), 1)
        }, [], !1, function alert_flash_injectStyles(e) {
            this.$style = ce.default.locals || ce.default
        }, null, null).exports,
        ue = document.getElementById(i.f.ALERT_FLASH_CONTAINER);
    null != ue && null != ue.getAttribute("twig-alerts") && q.default.dispatch("alerts/createAll", JSON.parse(ue.getAttribute("twig-alerts")));
    new a.default({
        el: "#".concat(i.f.ALERT_FLASH_CONTAINER),
        store: q.default,
        render: function render(e) {
            return e(le)
        }
    });
    var de = "SHOW_USER_POPOVER",
        pe = n(150),
        me = n(36),
        fe = n(10),
        he = (Object(fe.b)("Accept"), Object(fe.b)("Achievements"), Object(fe.b)("Alerts"), Object(fe.b)("analysis", {}, "mobile"), Object(fe.b)("Archive"), Object(fe.b)("articles", {}, "mobile"), Object(fe.b)("Awards"), Object(fe.b)("Blogs"), Object(fe.b)("Cancel"), Object(fe.b)("Enter text to continue"), Object(fe.b)("Coaches"), Object(fe.b)("Chat"), Object(fe.b)("ChessKid"), Object(fe.b)("ChessTV", {}, "mobile"), Object(fe.b)("Chess Today"), Object(fe.b)("Clear Alerts"), Object(fe.b)("Clubs"), Object(fe.b)("computer", {}, "mobile"), Object(fe.b)("Computer Championship"), Object(fe.b)("lag.connection_excellent", null, "live"), Object(fe.b)("lag.connection_good", null, "live"), Object(fe.b)("lag.connection_offline", null, "live"), Object(fe.b)("lag.connection_ok", null, "live"), Object(fe.b)("lag.connection_poor", null, "live"), Object(fe.b)("Copy"), Object(fe.b)("daily_chess", {}, "mobile"), Object(fe.b)("Daily Puzzle"), Object(fe.b)("Decline"), Object(fe.b)("drills", {}, "mobile"), Object(fe.b)("Events"), Object(fe.b)("Explorer"), Object(fe.b)("forums", {}, "mobile"), Object(fe.b)("4 Player Chess"), Object(fe.b)("Free Trial"), Object(fe.b)("friends", {}, "mobile"), Object(fe.b)("Help"), Object(fe.b)("Home"), Object(fe.b)("Join"), Object(fe.b)("Leaderboard"), Object(fe.b)("Leagues", {}, "mobile"), Object(fe.b)("lessons", {}, "mobile"), Object(fe.b)("Link expires in"), Object(fe.b)("Live"), Object(fe.b)("live_chess", {}, "mobile"), Object(fe.b)("Live Rankings"), Object(fe.b)("Loading"), Object(fe.b)("Login"), Object(fe.b)("Login or join to play"), Object(fe.b)("Log Out"), Object(fe.b)("Master Games"), Object(fe.b)("Members"), Object(fe.b)("Membership"), Object(fe.b)("Merch"), Object(fe.b)("Message"), Object(fe.b)("messages", {}, "mobile"), Object(fe.b)("Mobile Apps"), Object(fe.b)("My Turn"), Object(fe.b)("New Game"), Object(fe.b)("New"), Object(fe.b)("news", {}, "mobile"), Object(fe.b)("No Alerts"), Object(fe.b)("Openings"), Object(fe.b)("or"), Object(fe.b)("Other Games"), Object(fe.b)("Playing Now"), Object(fe.b)("Please enter %number% or more characters", {
            "%number%": 3
        }), Object(fe.b)("PRO Chess League"), Object(fe.b)("Profile"), Object(fe.b)("Puzzle Battle"), Object(fe.b)("Puzzle Rush"), Object(fe.b)("Puzzles"), Object(fe.b)("Resources"), Object(fe.b)("Rules"), Object(fe.b)("Search username..."), Object(fe.b)("Send"), Object(fe.b)("settings", {}, "mobile"), Object(fe.b)("Share this link with anyone to play."), Object(fe.b)("Shop"), Object(fe.b)("Solo Chess"), Object(fe.b)("Speed Chess Championship"), Object(fe.b)("stats", {}, "mobile"), Object(fe.b)("Streamers"), Object(fe.b)("tactics", {}, "mobile"), Object(fe.b)("Theme"), Object(fe.b)("Themes"), Object(fe.b)("Top Players"), Object(fe.b)("tournaments", {}, "mobile"), Object(fe.b)("Type club name..."), Object(fe.b)("Type friend name..."), Object(fe.b)("videos", {}, "mobile"), Object(fe.b)("vision", {}, "mobile"), Object(fe.b)("Vote Chess"), Object(fe.b)("Wait here for your opponent."), Object(fe.b)("World Chess Championship"), "amplitudeLog"),
        ge = n(284);
    window.addEventListener("message", function(e) {
        var t = e.data;
        if ("object" === W()(t)) {
            var n = t.key,
                r = z()(t, ["key"]);
            if (n === he) {
                var a = r.event,
                    o = r.eventProperties,
                    i = r.userProperties,
                    s = r.incUserProperties;
                pe.a.logEvent(a, o, i, s)
            } else if (n === de) {
                var c = r.target,
                    l = r.username;
                ge.b.createInstance("userPopover"), me.a.$emit("userPopover/show", l, document.getElementById(c))
            }
        }
    });
    var be = n(48),
        ve = n(9),
        ye = n(83),
        _e = n(35),
        we = Object(be.f)(ve.f.TOOLTIP),
        Oe = Object(be.h)(ve.f.BOARD_POPOVER);
    document.addEventListener("DOMContentLoaded", function() {
        var e;
        null != we && 0 === Oe.length && (e = ve.f.TOOLTIP, Object(ye.a)(".".concat(e), {
            directives: {
                Tooltip: _e.a
            }
        }))
    })
}]);