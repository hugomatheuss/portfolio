function zv(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
        for (const o of i) if (o.type === "childList") for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const o = {};
        return (
            i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? (o.credentials = "include") : i.crossOrigin === "anonymous" ? (o.credentials = "omit") : (o.credentials = "same-origin"),
            o
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o);
    }
})();
var Bi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bv(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wp = { exports: {} },
    cs = {},
    xp = { exports: {} },
    D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xi = Symbol.for("react.element"),
    bv = Symbol.for("react.portal"),
    Uv = Symbol.for("react.fragment"),
    Hv = Symbol.for("react.strict_mode"),
    Wv = Symbol.for("react.profiler"),
    Qv = Symbol.for("react.provider"),
    Gv = Symbol.for("react.context"),
    $v = Symbol.for("react.forward_ref"),
    Yv = Symbol.for("react.suspense"),
    Kv = Symbol.for("react.memo"),
    qv = Symbol.for("react.lazy"),
    Pc = Symbol.iterator;
function Zv(e) {
    return e === null || typeof e != "object" ? null : ((e = (Pc && e[Pc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Sp = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Ap = Object.assign,
    Ep = {};
function hr(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Ep), (this.updater = n || Sp);
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
};
hr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pp() {}
Pp.prototype = hr.prototype;
function ql(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Ep), (this.updater = n || Sp);
}
var Zl = (ql.prototype = new Pp());
Zl.constructor = ql;
Ap(Zl, hr.prototype);
Zl.isPureReactComponent = !0;
var kc = Array.isArray,
    kp = Object.prototype.hasOwnProperty,
    Xl = { current: null },
    Cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tp(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    if (t != null) for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)) kp.call(t, r) && !Cp.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l;
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return { $$typeof: xi, type: e, key: o, ref: s, props: i, _owner: Xl.current };
}
function Xv(e, t) {
    return { $$typeof: xi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Jl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function Jv(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Cc = /\/+/g;
function Ws(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Jv("" + e.key) : t.toString(36);
}
function ho(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (o) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case xi:
                    case bv:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (i = i(s)),
            (e = r === "" ? "." + Ws(s, 0) : r),
            kc(i)
                ? ((n = ""),
                  e != null && (n = e.replace(Cc, "$&/") + "/"),
                  ho(i, t, n, "", function (u) {
                      return u;
                  }))
                : i != null && (Jl(i) && (i = Xv(i, n + (!i.key || (s && s.key === i.key) ? "" : ("" + i.key).replace(Cc, "$&/") + "/") + e)), t.push(i)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), kc(e)))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + Ws(o, a);
            s += ho(o, t, n, l, i);
        }
    else if (((l = Zv(e)), typeof l == "function")) for (e = l.call(e), a = 0; !(o = e.next()).done; ) (o = o.value), (l = r + Ws(o, a++)), (s += ho(o, t, n, l, i));
    else if (o === "object")
        throw (
            ((t = String(e)),
            Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."))
        );
    return s;
}
function bi(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        ho(e, r, "", "", function (o) {
            return t.call(n, o, i++);
        }),
        r
    );
}
function ey(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Ce = { current: null },
    mo = { transition: null },
    ty = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: mo, ReactCurrentOwner: Xl };
D.Children = {
    map: bi,
    forEach: function (e, t, n) {
        bi(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            bi(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            bi(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Jl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
D.Component = hr;
D.Fragment = Uv;
D.Profiler = Wv;
D.PureComponent = ql;
D.StrictMode = Hv;
D.Suspense = Yv;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ty;
D.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ap({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if ((t.ref !== void 0 && ((o = t.ref), (s = Xl.current)), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
        for (l in t) kp.call(t, l) && !Cp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: xi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
D.createContext = function (e) {
    return (e = { $$typeof: Gv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: Qv, _context: e }), (e.Consumer = e);
};
D.createElement = Tp;
D.createFactory = function (e) {
    var t = Tp.bind(null, e);
    return (t.type = e), t;
};
D.createRef = function () {
    return { current: null };
};
D.forwardRef = function (e) {
    return { $$typeof: $v, render: e };
};
D.isValidElement = Jl;
D.lazy = function (e) {
    return { $$typeof: qv, _payload: { _status: -1, _result: e }, _init: ey };
};
D.memo = function (e, t) {
    return { $$typeof: Kv, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
    var t = mo.transition;
    mo.transition = {};
    try {
        e();
    } finally {
        mo.transition = t;
    }
};
D.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
    return Ce.current.useCallback(e, t);
};
D.useContext = function (e) {
    return Ce.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
    return Ce.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
    return Ce.current.useEffect(e, t);
};
D.useId = function () {
    return Ce.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
    return Ce.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
    return Ce.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
    return Ce.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
    return Ce.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
    return Ce.current.useReducer(e, t, n);
};
D.useRef = function (e) {
    return Ce.current.useRef(e);
};
D.useState = function (e) {
    return Ce.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
    return Ce.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
    return Ce.current.useTransition();
};
D.version = "18.2.0";
xp.exports = D;
var S = xp.exports;
const $e = Bv(S),
    ny = zv({ __proto__: null, default: $e }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ry = S,
    iy = Symbol.for("react.element"),
    oy = Symbol.for("react.fragment"),
    sy = Object.prototype.hasOwnProperty,
    ay = ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    ly = { key: !0, ref: !0, __self: !0, __source: !0 };
function jp(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) sy.call(t, r) && !ly.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: iy, type: e, key: o, ref: s, props: i, _owner: ay.current };
}
cs.Fragment = oy;
cs.jsx = jp;
cs.jsxs = jp;
wp.exports = cs;
var x = wp.exports,
    _a = {},
    Mp = { exports: {} },
    Be = {},
    Rp = { exports: {} },
    Lp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(j, _) {
        var N = j.length;
        j.push(_);
        e: for (; 0 < N; ) {
            var I = (N - 1) >>> 1,
                Q = j[I];
            if (0 < i(Q, _)) (j[I] = _), (j[N] = Q), (N = I);
            else break e;
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0];
    }
    function r(j) {
        if (j.length === 0) return null;
        var _ = j[0],
            N = j.pop();
        if (N !== _) {
            j[0] = N;
            e: for (var I = 0, Q = j.length, ln = Q >>> 1; I < ln; ) {
                var ot = 2 * (I + 1) - 1,
                    Nn = j[ot],
                    _e = ot + 1,
                    un = j[_e];
                if (0 > i(Nn, N)) _e < Q && 0 > i(un, Nn) ? ((j[I] = un), (j[_e] = N), (I = _e)) : ((j[I] = Nn), (j[ot] = N), (I = ot));
                else if (_e < Q && 0 > i(un, N)) (j[I] = un), (j[_e] = N), (I = _e);
                else break e;
            }
        }
        return _;
    }
    function i(j, _) {
        var N = j.sortIndex - _.sortIndex;
        return N !== 0 ? N : j.id - _.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var l = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        g = !1,
        v = !1,
        y = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(j) {
        for (var _ = n(u); _ !== null; ) {
            if (_.callback === null) r(u);
            else if (_.startTime <= j) r(u), (_.sortIndex = _.expirationTime), t(l, _);
            else break;
            _ = n(u);
        }
    }
    function w(j) {
        if (((y = !1), m(j), !v))
            if (n(l) !== null) (v = !0), Ue(A);
            else {
                var _ = n(u);
                _ !== null && it(w, _.startTime - j);
            }
    }
    function A(j, _) {
        (v = !1), y && ((y = !1), h(k), (k = -1)), (g = !0);
        var N = d;
        try {
            for (m(_), f = n(l); f !== null && (!(f.expirationTime > _) || (j && !H())); ) {
                var I = f.callback;
                if (typeof I == "function") {
                    (f.callback = null), (d = f.priorityLevel);
                    var Q = I(f.expirationTime <= _);
                    (_ = e.unstable_now()), typeof Q == "function" ? (f.callback = Q) : f === n(l) && r(l), m(_);
                } else r(l);
                f = n(l);
            }
            if (f !== null) var ln = !0;
            else {
                var ot = n(u);
                ot !== null && it(w, ot.startTime - _), (ln = !1);
            }
            return ln;
        } finally {
            (f = null), (d = N), (g = !1);
        }
    }
    var P = !1,
        T = null,
        k = -1,
        R = 5,
        L = -1;
    function H() {
        return !(e.unstable_now() - L < R);
    }
    function he() {
        if (T !== null) {
            var j = e.unstable_now();
            L = j;
            var _ = !0;
            try {
                _ = T(!0, j);
            } finally {
                _ ? ye() : ((P = !1), (T = null));
            }
        } else P = !1;
    }
    var ye;
    if (typeof p == "function")
        ye = function () {
            p(he);
        };
    else if (typeof MessageChannel < "u") {
        var W = new MessageChannel(),
            Y = W.port2;
        (W.port1.onmessage = he),
            (ye = function () {
                Y.postMessage(null);
            });
    } else
        ye = function () {
            E(he, 0);
        };
    function Ue(j) {
        (T = j), P || ((P = !0), ye());
    }
    function it(j, _) {
        k = E(function () {
            j(e.unstable_now());
        }, _);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (j) {
            j.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            v || g || ((v = !0), Ue(A));
        }),
        (e.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (R = 0 < j ? Math.floor(1e3 / j) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (j) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var _ = 3;
                    break;
                default:
                    _ = d;
            }
            var N = d;
            d = _;
            try {
                return j();
            } finally {
                d = N;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (j, _) {
            switch (j) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    j = 3;
            }
            var N = d;
            d = j;
            try {
                return _();
            } finally {
                d = N;
            }
        }),
        (e.unstable_scheduleCallback = function (j, _, N) {
            var I = e.unstable_now();
            switch ((typeof N == "object" && N !== null ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? I + N : I)) : (N = I), j)) {
                case 1:
                    var Q = -1;
                    break;
                case 2:
                    Q = 250;
                    break;
                case 5:
                    Q = 1073741823;
                    break;
                case 4:
                    Q = 1e4;
                    break;
                default:
                    Q = 5e3;
            }
            return (
                (Q = N + Q),
                (j = { id: c++, callback: _, priorityLevel: j, startTime: N, expirationTime: Q, sortIndex: -1 }),
                N > I ? ((j.sortIndex = N), t(u, j), n(l) === null && j === n(u) && (y ? (h(k), (k = -1)) : (y = !0), it(w, N - I))) : ((j.sortIndex = Q), t(l, j), v || g || ((v = !0), Ue(A))),
                j
            );
        }),
        (e.unstable_shouldYield = H),
        (e.unstable_wrapCallback = function (j) {
            var _ = d;
            return function () {
                var N = d;
                d = _;
                try {
                    return j.apply(this, arguments);
                } finally {
                    d = N;
                }
            };
        });
})(Lp);
Rp.exports = Lp;
var uy = Rp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Op = S,
    Fe = uy;
function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ip = new Set(),
    qr = {};
function Mn(e, t) {
    sr(e, t), sr(e + "Capture", t);
}
function sr(e, t) {
    for (qr[e] = t, e = 0; e < t.length; e++) Ip.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Na = Object.prototype.hasOwnProperty,
    cy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Tc = {},
    jc = {};
function fy(e) {
    return Na.call(jc, e) ? !0 : Na.call(Tc, e) ? !1 : cy.test(e) ? (jc[e] = !0) : ((Tc[e] = !0), !1);
}
function dy(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function py(e, t, n, r) {
    if (t === null || typeof t > "u" || dy(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Te(e, t, n, r, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = i), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = o), (this.removeEmptyString = s);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    ve[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    ve[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ve[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    ve[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ve[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ve[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ve[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ve[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ve[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var eu = /[\-:]([a-z])/g;
function tu(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(eu, tu);
        ve[t] = new Te(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(eu, tu);
    ve[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(eu, tu);
    ve[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ve[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    ve[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nu(e, t, n, r) {
    var i = ve.hasOwnProperty(t) ? ve[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (py(t, n, i, r) && (n = null),
        r || i === null
            ? fy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName), (r = i.attributeNamespace), n === null ? e.removeAttribute(t) : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ui = Symbol.for("react.element"),
    Vn = Symbol.for("react.portal"),
    Fn = Symbol.for("react.fragment"),
    ru = Symbol.for("react.strict_mode"),
    Da = Symbol.for("react.profiler"),
    _p = Symbol.for("react.provider"),
    Np = Symbol.for("react.context"),
    iu = Symbol.for("react.forward_ref"),
    Va = Symbol.for("react.suspense"),
    Fa = Symbol.for("react.suspense_list"),
    ou = Symbol.for("react.memo"),
    It = Symbol.for("react.lazy"),
    Dp = Symbol.for("react.offscreen"),
    Mc = Symbol.iterator;
function xr(e) {
    return e === null || typeof e != "object" ? null : ((e = (Mc && e[Mc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ne = Object.assign,
    Qs;
function Or(e) {
    if (Qs === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Qs = (t && t[1]) || "";
        }
    return (
        `
` +
        Qs +
        e
    );
}
var Gs = !1;
function $s(e, t) {
    if (!e || Gs) return "";
    Gs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var i = u.stack.split(`
`),
                    o = r.stack.split(`
`),
                    s = i.length - 1,
                    a = o.length - 1;
                1 <= s && 0 <= a && i[s] !== o[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || i[s] !== o[a])) {
                                var l =
                                    `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (Gs = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Or(e) : "";
}
function hy(e) {
    switch (e.tag) {
        case 5:
            return Or(e.type);
        case 16:
            return Or("Lazy");
        case 13:
            return Or("Suspense");
        case 19:
            return Or("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = $s(e.type, !1)), e;
        case 11:
            return (e = $s(e.type.render, !1)), e;
        case 1:
            return (e = $s(e.type, !0)), e;
        default:
            return "";
    }
}
function za(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Fn:
            return "Fragment";
        case Vn:
            return "Portal";
        case Da:
            return "Profiler";
        case ru:
            return "StrictMode";
        case Va:
            return "Suspense";
        case Fa:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Np:
                return (e.displayName || "Context") + ".Consumer";
            case _p:
                return (e._context.displayName || "Context") + ".Provider";
            case iu:
                var t = e.render;
                return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
            case ou:
                return (t = e.displayName || null), t !== null ? t : za(e.type) || "Memo";
            case It:
                (t = e._payload), (e = e._init);
                try {
                    return za(e(t));
                } catch {}
        }
    return null;
}
function my(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return za(t);
        case 8:
            return t === ru ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Jt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Vp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function gy(e) {
    var t = Vp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (s) {
                    (r = "" + s), o.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Hi(e) {
    e._valueTracker || (e._valueTracker = gy(e));
}
function Fp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Vp(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Mo(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Ba(e, t) {
    var n = t.checked;
    return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Rc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Jt(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function zp(e, t) {
    (t = t.checked), t != null && nu(e, "checked", t, !1);
}
function ba(e, t) {
    zp(e, t);
    var n = Jt(t.value),
        r = t.type;
    if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value") ? Ua(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ua(e, t.type, Jt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Lc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function Ua(e, t, n) {
    (t !== "number" || Mo(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ir = Array.isArray;
function Jn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Jt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function Ha(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
    return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Oc(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(C(92));
            if (Ir(n)) {
                if (1 < n.length) throw Error(C(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Jt(n) };
}
function Bp(e, t) {
    var n = Jt(t.value),
        r = Jt(t.defaultValue);
    n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ic(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Wa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? bp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Wi,
    Up = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Wi = Wi || document.createElement("div"), Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Wi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Zr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Vr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    vy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vr).forEach(function (e) {
    vy.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vr[t] = Vr[e]);
    });
});
function Hp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (Vr.hasOwnProperty(e) && Vr[e]) ? ("" + t).trim() : t + "px";
}
function Wp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Hp(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var yy = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Qa(e, t) {
    if (t) {
        if (yy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(C(62));
    }
}
function Ga(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var $a = null;
function su(e) {
    return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ya = null,
    er = null,
    tr = null;
function _c(e) {
    if ((e = Ei(e))) {
        if (typeof Ya != "function") throw Error(C(280));
        var t = e.stateNode;
        t && ((t = ms(t)), Ya(e.stateNode, e.type, t));
    }
}
function Qp(e) {
    er ? (tr ? tr.push(e) : (tr = [e])) : (er = e);
}
function Gp() {
    if (er) {
        var e = er,
            t = tr;
        if (((tr = er = null), _c(e), t)) for (e = 0; e < t.length; e++) _c(t[e]);
    }
}
function $p(e, t) {
    return e(t);
}
function Yp() {}
var Ys = !1;
function Kp(e, t, n) {
    if (Ys) return e(t, n);
    Ys = !0;
    try {
        return $p(e, t, n);
    } finally {
        (Ys = !1), (er !== null || tr !== null) && (Yp(), Gp());
    }
}
function Xr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ms(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(C(231, t, typeof n));
    return n;
}
var Ka = !1;
if (Et)
    try {
        var Sr = {};
        Object.defineProperty(Sr, "passive", {
            get: function () {
                Ka = !0;
            },
        }),
            window.addEventListener("test", Sr, Sr),
            window.removeEventListener("test", Sr, Sr);
    } catch {
        Ka = !1;
    }
function wy(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var Fr = !1,
    Ro = null,
    Lo = !1,
    qa = null,
    xy = {
        onError: function (e) {
            (Fr = !0), (Ro = e);
        },
    };
function Sy(e, t, n, r, i, o, s, a, l) {
    (Fr = !1), (Ro = null), wy.apply(xy, arguments);
}
function Ay(e, t, n, r, i, o, s, a, l) {
    if ((Sy.apply(this, arguments), Fr)) {
        if (Fr) {
            var u = Ro;
            (Fr = !1), (Ro = null);
        } else throw Error(C(198));
        Lo || ((Lo = !0), (qa = u));
    }
}
function Rn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function qp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Nc(e) {
    if (Rn(e) !== e) throw Error(C(188));
}
function Ey(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Rn(e)), t === null)) throw Error(C(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n) return Nc(i), e;
                if (o === r) return Nc(i), t;
                o = o.sibling;
            }
            throw Error(C(188));
        }
        if (n.return !== r.return) (n = i), (r = o);
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    (s = !0), (n = i), (r = o);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = i), (n = o);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(C(189));
            }
        }
        if (n.alternate !== r) throw Error(C(190));
    }
    if (n.tag !== 3) throw Error(C(188));
    return n.stateNode.current === n ? e : t;
}
function Zp(e) {
    return (e = Ey(e)), e !== null ? Xp(e) : null;
}
function Xp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Xp(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Jp = Fe.unstable_scheduleCallback,
    Dc = Fe.unstable_cancelCallback,
    Py = Fe.unstable_shouldYield,
    ky = Fe.unstable_requestPaint,
    oe = Fe.unstable_now,
    Cy = Fe.unstable_getCurrentPriorityLevel,
    au = Fe.unstable_ImmediatePriority,
    eh = Fe.unstable_UserBlockingPriority,
    Oo = Fe.unstable_NormalPriority,
    Ty = Fe.unstable_LowPriority,
    th = Fe.unstable_IdlePriority,
    fs = null,
    ft = null;
function jy(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function")
        try {
            ft.onCommitFiberRoot(fs, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var tt = Math.clz32 ? Math.clz32 : Ly,
    My = Math.log,
    Ry = Math.LN2;
function Ly(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((My(e) / Ry) | 0)) | 0;
}
var Qi = 64,
    Gi = 4194304;
function _r(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Io(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? (r = _r(a)) : ((o &= s), o !== 0 && (r = _r(o)));
    } else (s = n & ~i), s !== 0 ? (r = _r(s)) : o !== 0 && (r = _r(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))) return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - tt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function Oy(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Iy(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - tt(o),
            a = 1 << s,
            l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = Oy(a, t)) : l <= t && (e.expiredLanes |= a), (o &= ~a);
    }
}
function Za(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function nh() {
    var e = Qi;
    return (Qi <<= 1), !(Qi & 4194240) && (Qi = 64), e;
}
function Ks(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Si(e, t, n) {
    (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - tt(t)), (e[t] = n);
}
function _y(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - tt(n),
            o = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
}
function lu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - tt(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var z = 0;
function rh(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ih,
    uu,
    oh,
    sh,
    ah,
    Xa = !1,
    $i = [],
    bt = null,
    Ut = null,
    Ht = null,
    Jr = new Map(),
    ei = new Map(),
    Dt = [],
    Ny = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
    );
function Vc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            bt = null;
            break;
        case "dragenter":
        case "dragleave":
            Ut = null;
            break;
        case "mouseover":
        case "mouseout":
            Ht = null;
            break;
        case "pointerover":
        case "pointerout":
            Jr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ei.delete(t.pointerId);
    }
}
function Ar(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }), t !== null && ((t = Ei(t)), t !== null && uu(t)), e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Dy(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (bt = Ar(bt, e, t, n, r, i)), !0;
        case "dragenter":
            return (Ut = Ar(Ut, e, t, n, r, i)), !0;
        case "mouseover":
            return (Ht = Ar(Ht, e, t, n, r, i)), !0;
        case "pointerover":
            var o = i.pointerId;
            return Jr.set(o, Ar(Jr.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (o = i.pointerId), ei.set(o, Ar(ei.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
}
function lh(e) {
    var t = vn(e.target);
    if (t !== null) {
        var n = Rn(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = qp(n)), t !== null)) {
                    (e.blockedOn = t),
                        ah(e.priority, function () {
                            oh(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function go(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ja(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ($a = r), n.target.dispatchEvent(r), ($a = null);
        } else return (t = Ei(n)), t !== null && uu(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Fc(e, t, n) {
    go(e) && n.delete(t);
}
function Vy() {
    (Xa = !1), bt !== null && go(bt) && (bt = null), Ut !== null && go(Ut) && (Ut = null), Ht !== null && go(Ht) && (Ht = null), Jr.forEach(Fc), ei.forEach(Fc);
}
function Er(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), Xa || ((Xa = !0), Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Vy)));
}
function ti(e) {
    function t(i) {
        return Er(i, e);
    }
    if (0 < $i.length) {
        Er($i[0], e);
        for (var n = 1; n < $i.length; n++) {
            var r = $i[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (bt !== null && Er(bt, e), Ut !== null && Er(Ut, e), Ht !== null && Er(Ht, e), Jr.forEach(t), ei.forEach(t), n = 0; n < Dt.length; n++) (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); ) lh(n), n.blockedOn === null && Dt.shift();
}
var nr = jt.ReactCurrentBatchConfig,
    _o = !0;
function Fy(e, t, n, r) {
    var i = z,
        o = nr.transition;
    nr.transition = null;
    try {
        (z = 1), cu(e, t, n, r);
    } finally {
        (z = i), (nr.transition = o);
    }
}
function zy(e, t, n, r) {
    var i = z,
        o = nr.transition;
    nr.transition = null;
    try {
        (z = 4), cu(e, t, n, r);
    } finally {
        (z = i), (nr.transition = o);
    }
}
function cu(e, t, n, r) {
    if (_o) {
        var i = Ja(e, t, n, r);
        if (i === null) oa(e, t, r, No, n), Vc(e, r);
        else if (Dy(i, e, t, n, r)) r.stopPropagation();
        else if ((Vc(e, r), t & 4 && -1 < Ny.indexOf(e))) {
            for (; i !== null; ) {
                var o = Ei(i);
                if ((o !== null && ih(o), (o = Ja(e, t, n, r)), o === null && oa(e, t, r, No, n), o === i)) break;
                i = o;
            }
            i !== null && r.stopPropagation();
        } else oa(e, t, r, null, n);
    }
}
var No = null;
function Ja(e, t, n, r) {
    if (((No = null), (e = su(r)), (e = vn(e)), e !== null))
        if (((t = Rn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = qp(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (No = e), null;
}
function uh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Cy()) {
                case au:
                    return 1;
                case eh:
                    return 4;
                case Oo:
                case Ty:
                    return 16;
                case th:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Ft = null,
    fu = null,
    vo = null;
function ch() {
    if (vo) return vo;
    var e,
        t = fu,
        n = t.length,
        r,
        i = "value" in Ft ? Ft.value : Ft.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return (vo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function yo(e) {
    var t = e.keyCode;
    return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Yi() {
    return !0;
}
function zc() {
    return !1;
}
function be(e) {
    function t(n, r, i, o, s) {
        (this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = o), (this.target = s), (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
        return (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Yi : zc), (this.isPropagationStopped = zc), this;
    }
    return (
        ne(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = Yi));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = Yi));
            },
            persist: function () {},
            isPersistent: Yi,
        }),
        t
    );
}
var mr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    du = be(mr),
    Ai = ne({}, mr, { view: 0, detail: 0 }),
    By = be(Ai),
    qs,
    Zs,
    Pr,
    ds = ne({}, Ai, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: pu,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Pr && (Pr && e.type === "mousemove" ? ((qs = e.screenX - Pr.screenX), (Zs = e.screenY - Pr.screenY)) : (Zs = qs = 0), (Pr = e)), qs);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Zs;
        },
    }),
    Bc = be(ds),
    by = ne({}, ds, { dataTransfer: 0 }),
    Uy = be(by),
    Hy = ne({}, Ai, { relatedTarget: 0 }),
    Xs = be(Hy),
    Wy = ne({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qy = be(Wy),
    Gy = ne({}, mr, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    $y = be(Gy),
    Yy = ne({}, mr, { data: 0 }),
    bc = be(Yy),
    Ky = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    qy = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Zy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Xy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zy[e]) ? !!t[e] : !1;
}
function pu() {
    return Xy;
}
var Jy = ne({}, Ai, {
        key: function (e) {
            if (e.key) {
                var t = Ky[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? ((e = yo(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qy[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: pu,
        charCode: function (e) {
            return e.type === "keypress" ? yo(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    e0 = be(Jy),
    t0 = ne({}, ds, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Uc = be(t0),
    n0 = ne({}, Ai, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pu }),
    r0 = be(n0),
    i0 = ne({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    o0 = be(i0),
    s0 = ne({}, ds, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    a0 = be(s0),
    l0 = [9, 13, 27, 32],
    hu = Et && "CompositionEvent" in window,
    zr = null;
Et && "documentMode" in document && (zr = document.documentMode);
var u0 = Et && "TextEvent" in window && !zr,
    fh = Et && (!hu || (zr && 8 < zr && 11 >= zr)),
    Hc = String.fromCharCode(32),
    Wc = !1;
function dh(e, t) {
    switch (e) {
        case "keyup":
            return l0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function ph(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function c0(e, t) {
    switch (e) {
        case "compositionend":
            return ph(t);
        case "keypress":
            return t.which !== 32 ? null : ((Wc = !0), Hc);
        case "textInput":
            return (e = t.data), e === Hc && Wc ? null : e;
        default:
            return null;
    }
}
function f0(e, t) {
    if (zn) return e === "compositionend" || (!hu && dh(e, t)) ? ((e = ch()), (vo = fu = Ft = null), (zn = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return fh && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var d0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Qc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!d0[e.type] : t === "textarea";
}
function hh(e, t, n, r) {
    Qp(r), (t = Do(t, "onChange")), 0 < t.length && ((n = new du("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Br = null,
    ni = null;
function p0(e) {
    kh(e, 0);
}
function ps(e) {
    var t = Un(e);
    if (Fp(t)) return e;
}
function h0(e, t) {
    if (e === "change") return t;
}
var mh = !1;
if (Et) {
    var Js;
    if (Et) {
        var ea = "oninput" in document;
        if (!ea) {
            var Gc = document.createElement("div");
            Gc.setAttribute("oninput", "return;"), (ea = typeof Gc.oninput == "function");
        }
        Js = ea;
    } else Js = !1;
    mh = Js && (!document.documentMode || 9 < document.documentMode);
}
function $c() {
    Br && (Br.detachEvent("onpropertychange", gh), (ni = Br = null));
}
function gh(e) {
    if (e.propertyName === "value" && ps(ni)) {
        var t = [];
        hh(t, ni, e, su(e)), Kp(p0, t);
    }
}
function m0(e, t, n) {
    e === "focusin" ? ($c(), (Br = t), (ni = n), Br.attachEvent("onpropertychange", gh)) : e === "focusout" && $c();
}
function g0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ps(ni);
}
function v0(e, t) {
    if (e === "click") return ps(t);
}
function y0(e, t) {
    if (e === "input" || e === "change") return ps(t);
}
function w0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == "function" ? Object.is : w0;
function ri(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Na.call(t, i) || !rt(e[i], t[i])) return !1;
    }
    return !0;
}
function Yc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Kc(e, t) {
    var n = Yc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Yc(n);
    }
}
function vh(e, t) {
    return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function yh() {
    for (var e = window, t = Mo(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Mo(e.document);
    }
    return t;
}
function mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function x0(e) {
    var t = yh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && vh(n.ownerDocument.documentElement, n)) {
        if (r !== null && mu(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                (r = r.end === void 0 ? o : Math.min(r.end, i)), !e.extend && o > r && ((i = r), (r = o), (o = i)), (i = Kc(n, o));
                var s = Kc(n, r);
                i &&
                    s &&
                    (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) &&
                    ((t = t.createRange()), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var S0 = Et && "documentMode" in document && 11 >= document.documentMode,
    Bn = null,
    el = null,
    br = null,
    tl = !1;
function qc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tl ||
        Bn == null ||
        Bn !== Mo(r) ||
        ((r = Bn),
        "selectionStart" in r && mu(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
        (br && ri(br, r)) || ((br = r), (r = Do(el, "onSelect")), 0 < r.length && ((t = new du("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Bn))));
}
function Ki(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var bn = { animationend: Ki("Animation", "AnimationEnd"), animationiteration: Ki("Animation", "AnimationIteration"), animationstart: Ki("Animation", "AnimationStart"), transitionend: Ki("Transition", "TransitionEnd") },
    ta = {},
    wh = {};
Et &&
    ((wh = document.createElement("div").style),
    "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation),
    "TransitionEvent" in window || delete bn.transitionend.transition);
function hs(e) {
    if (ta[e]) return ta[e];
    if (!bn[e]) return e;
    var t = bn[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in wh) return (ta[e] = t[n]);
    return e;
}
var xh = hs("animationend"),
    Sh = hs("animationiteration"),
    Ah = hs("animationstart"),
    Eh = hs("transitionend"),
    Ph = new Map(),
    Zc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
    );
function rn(e, t) {
    Ph.set(e, t), Mn(t, [e]);
}
for (var na = 0; na < Zc.length; na++) {
    var ra = Zc[na],
        A0 = ra.toLowerCase(),
        E0 = ra[0].toUpperCase() + ra.slice(1);
    rn(A0, "on" + E0);
}
rn(xh, "onAnimationEnd");
rn(Sh, "onAnimationIteration");
rn(Ah, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(Eh, "onTransitionEnd");
sr("onMouseEnter", ["mouseout", "mouseover"]);
sr("onMouseLeave", ["mouseout", "mouseover"]);
sr("onPointerEnter", ["pointerout", "pointerover"]);
sr("onPointerLeave", ["pointerout", "pointerover"]);
Mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
    ),
    P0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
function Xc(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Ay(r, t, void 0, e), (e.currentTarget = null);
}
function kh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
                    Xc(i, a, u), (o = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (((a = r[s]), (l = a.instance), (u = a.currentTarget), (a = a.listener), l !== o && i.isPropagationStopped())) break e;
                    Xc(i, a, u), (o = l);
                }
        }
    }
    if (Lo) throw ((e = qa), (Lo = !1), (qa = null), e);
}
function b(e, t) {
    var n = t[sl];
    n === void 0 && (n = t[sl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ch(t, e, 2, !1), n.add(r));
}
function ia(e, t, n) {
    var r = 0;
    t && (r |= 4), Ch(n, e, r, t);
}
var qi = "_reactListening" + Math.random().toString(36).slice(2);
function ii(e) {
    if (!e[qi]) {
        (e[qi] = !0),
            Ip.forEach(function (n) {
                n !== "selectionchange" && (P0.has(n) || ia(n, !1, e), ia(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[qi] || ((t[qi] = !0), ia("selectionchange", !1, t));
    }
}
function Ch(e, t, n, r) {
    switch (uh(t)) {
        case 1:
            var i = Fy;
            break;
        case 4:
            i = zy;
            break;
        default:
            i = cu;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !Ka || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
        r ? (i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0)) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function oa(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && ((l = s.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))) return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = vn(a)), s === null)) return;
                    if (((l = s.tag), l === 5 || l === 6)) {
                        r = o = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Kp(function () {
        var u = o,
            c = su(n),
            f = [];
        e: {
            var d = Ph.get(e);
            if (d !== void 0) {
                var g = du,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (yo(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = e0;
                        break;
                    case "focusin":
                        (v = "focus"), (g = Xs);
                        break;
                    case "focusout":
                        (v = "blur"), (g = Xs);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = Xs;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Bc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Uy;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = r0;
                        break;
                    case xh:
                    case Sh:
                    case Ah:
                        g = Qy;
                        break;
                    case Eh:
                        g = o0;
                        break;
                    case "scroll":
                        g = By;
                        break;
                    case "wheel":
                        g = a0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = $y;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = Uc;
                }
                var y = (t & 4) !== 0,
                    E = !y && e === "scroll",
                    h = y ? (d !== null ? d + "Capture" : null) : d;
                y = [];
                for (var p = u, m; p !== null; ) {
                    m = p;
                    var w = m.stateNode;
                    if ((m.tag === 5 && w !== null && ((m = w), h !== null && ((w = Xr(p, h)), w != null && y.push(oi(p, w, m)))), E)) break;
                    p = p.return;
                }
                0 < y.length && ((d = new g(d, v, null, n, c)), f.push({ event: d, listeners: y }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (((d = e === "mouseover" || e === "pointerover"), (g = e === "mouseout" || e === "pointerout"), d && n !== $a && (v = n.relatedTarget || n.fromElement) && (vn(v) || v[Pt]))) break e;
                if (
                    (g || d) &&
                    ((d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
                    g ? ((v = n.relatedTarget || n.toElement), (g = u), (v = v ? vn(v) : null), v !== null && ((E = Rn(v)), v !== E || (v.tag !== 5 && v.tag !== 6)) && (v = null)) : ((g = null), (v = u)),
                    g !== v)
                ) {
                    if (
                        ((y = Bc),
                        (w = "onMouseLeave"),
                        (h = "onMouseEnter"),
                        (p = "mouse"),
                        (e === "pointerout" || e === "pointerover") && ((y = Uc), (w = "onPointerLeave"), (h = "onPointerEnter"), (p = "pointer")),
                        (E = g == null ? d : Un(g)),
                        (m = v == null ? d : Un(v)),
                        (d = new y(w, p + "leave", g, n, c)),
                        (d.target = E),
                        (d.relatedTarget = m),
                        (w = null),
                        vn(c) === u && ((y = new y(h, p + "enter", v, n, c)), (y.target = m), (y.relatedTarget = E), (w = y)),
                        (E = w),
                        g && v)
                    )
                        t: {
                            for (y = g, h = v, p = 0, m = y; m; m = Dn(m)) p++;
                            for (m = 0, w = h; w; w = Dn(w)) m++;
                            for (; 0 < p - m; ) (y = Dn(y)), p--;
                            for (; 0 < m - p; ) (h = Dn(h)), m--;
                            for (; p--; ) {
                                if (y === h || (h !== null && y === h.alternate)) break t;
                                (y = Dn(y)), (h = Dn(h));
                            }
                            y = null;
                        }
                    else y = null;
                    g !== null && Jc(f, d, g, y, !1), v !== null && E !== null && Jc(f, E, v, y, !0);
                }
            }
            e: {
                if (((d = u ? Un(u) : window), (g = d.nodeName && d.nodeName.toLowerCase()), g === "select" || (g === "input" && d.type === "file"))) var A = h0;
                else if (Qc(d))
                    if (mh) A = y0;
                    else {
                        A = g0;
                        var P = m0;
                    }
                else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (A = v0);
                if (A && (A = A(e, u))) {
                    hh(f, A, n, c);
                    break e;
                }
                P && P(e, d, u), e === "focusout" && (P = d._wrapperState) && P.controlled && d.type === "number" && Ua(d, "number", d.value);
            }
            switch (((P = u ? Un(u) : window), e)) {
                case "focusin":
                    (Qc(P) || P.contentEditable === "true") && ((Bn = P), (el = u), (br = null));
                    break;
                case "focusout":
                    br = el = Bn = null;
                    break;
                case "mousedown":
                    tl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (tl = !1), qc(f, n, c);
                    break;
                case "selectionchange":
                    if (S0) break;
                case "keydown":
                case "keyup":
                    qc(f, n, c);
            }
            var T;
            if (hu)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var k = "onCompositionStart";
                            break e;
                        case "compositionend":
                            k = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            k = "onCompositionUpdate";
                            break e;
                    }
                    k = void 0;
                }
            else zn ? dh(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k &&
                (fh && n.locale !== "ko" && (zn || k !== "onCompositionStart" ? k === "onCompositionEnd" && zn && (T = ch()) : ((Ft = c), (fu = "value" in Ft ? Ft.value : Ft.textContent), (zn = !0))),
                (P = Do(u, k)),
                0 < P.length && ((k = new bc(k, e, null, n, c)), f.push({ event: k, listeners: P }), T ? (k.data = T) : ((T = ph(n)), T !== null && (k.data = T)))),
                (T = u0 ? c0(e, n) : f0(e, n)) && ((u = Do(u, "onBeforeInput")), 0 < u.length && ((c = new bc("onBeforeInput", "beforeinput", null, n, c)), f.push({ event: c, listeners: u }), (c.data = T)));
        }
        kh(f, t);
    });
}
function oi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Do(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && ((i = o), (o = Xr(e, n)), o != null && r.unshift(oi(e, o, i)), (o = Xr(e, t)), o != null && r.push(oi(e, o, i))), (e = e.return);
    }
    return r;
}
function Dn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Jc(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && ((a = u), i ? ((l = Xr(n, o)), l != null && s.unshift(oi(n, l, a))) : i || ((l = Xr(n, o)), l != null && s.push(oi(n, l, a)))), (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var k0 = /\r\n?/g,
    C0 = /\u0000|\uFFFD/g;
function ef(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            k0,
            `
`
        )
        .replace(C0, "");
}
function Zi(e, t, n) {
    if (((t = ef(t)), ef(e) !== t && n)) throw Error(C(425));
}
function Vo() {}
var nl = null,
    rl = null;
function il(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
}
var ol = typeof setTimeout == "function" ? setTimeout : void 0,
    T0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    tf = typeof Promise == "function" ? Promise : void 0,
    j0 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof tf < "u"
            ? function (e) {
                  return tf.resolve(null).then(e).catch(M0);
              }
            : ol;
function M0(e) {
    setTimeout(function () {
        throw e;
    });
}
function sa(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), ti(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    ti(t);
}
function Wt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function nf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var gr = Math.random().toString(36).slice(2),
    ct = "__reactFiber$" + gr,
    si = "__reactProps$" + gr,
    Pt = "__reactContainer$" + gr,
    sl = "__reactEvents$" + gr,
    R0 = "__reactListeners$" + gr,
    L0 = "__reactHandles$" + gr;
function vn(e) {
    var t = e[ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Pt] || n[ct])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = nf(e); e !== null; ) {
                    if ((n = e[ct])) return n;
                    e = nf(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Ei(e) {
    return (e = e[ct] || e[Pt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(C(33));
}
function ms(e) {
    return e[si] || null;
}
var al = [],
    Hn = -1;
function on(e) {
    return { current: e };
}
function U(e) {
    0 > Hn || ((e.current = al[Hn]), (al[Hn] = null), Hn--);
}
function B(e, t) {
    Hn++, (al[Hn] = e.current), (e.current = t);
}
var en = {},
    Ae = on(en),
    Re = on(!1),
    En = en;
function ar(e, t) {
    var n = e.type.contextTypes;
    if (!n) return en;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i;
}
function Le(e) {
    return (e = e.childContextTypes), e != null;
}
function Fo() {
    U(Re), U(Ae);
}
function rf(e, t, n) {
    if (Ae.current !== en) throw Error(C(168));
    B(Ae, t), B(Re, n);
}
function Th(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(C(108, my(e) || "Unknown", i));
    return ne({}, n, r);
}
function zo(e) {
    return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en), (En = Ae.current), B(Ae, e), B(Re, Re.current), !0;
}
function of(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(C(169));
    n ? ((e = Th(e, t, En)), (r.__reactInternalMemoizedMergedChildContext = e), U(Re), U(Ae), B(Ae, e)) : U(Re), B(Re, n);
}
var gt = null,
    gs = !1,
    aa = !1;
function jh(e) {
    gt === null ? (gt = [e]) : gt.push(e);
}
function O0(e) {
    (gs = !0), jh(e);
}
function sn() {
    if (!aa && gt !== null) {
        aa = !0;
        var e = 0,
            t = z;
        try {
            var n = gt;
            for (z = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (gt = null), (gs = !1);
        } catch (i) {
            throw (gt !== null && (gt = gt.slice(e + 1)), Jp(au, sn), i);
        } finally {
            (z = t), (aa = !1);
        }
    }
    return null;
}
var Wn = [],
    Qn = 0,
    Bo = null,
    bo = 0,
    We = [],
    Qe = 0,
    Pn = null,
    vt = 1,
    yt = "";
function pn(e, t) {
    (Wn[Qn++] = bo), (Wn[Qn++] = Bo), (Bo = e), (bo = t);
}
function Mh(e, t, n) {
    (We[Qe++] = vt), (We[Qe++] = yt), (We[Qe++] = Pn), (Pn = e);
    var r = vt;
    e = yt;
    var i = 32 - tt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - tt(t) + i;
    if (30 < o) {
        var s = i - (i % 5);
        (o = (r & ((1 << s) - 1)).toString(32)), (r >>= s), (i -= s), (vt = (1 << (32 - tt(t) + i)) | (n << i) | r), (yt = o + e);
    } else (vt = (1 << o) | (n << i) | r), (yt = e);
}
function gu(e) {
    e.return !== null && (pn(e, 1), Mh(e, 1, 0));
}
function vu(e) {
    for (; e === Bo; ) (Bo = Wn[--Qn]), (Wn[Qn] = null), (bo = Wn[--Qn]), (Wn[Qn] = null);
    for (; e === Pn; ) (Pn = We[--Qe]), (We[Qe] = null), (yt = We[--Qe]), (We[Qe] = null), (vt = We[--Qe]), (We[Qe] = null);
}
var Ve = null,
    De = null,
    $ = !1,
    et = null;
function Rh(e, t) {
    var n = Ge(5, null, null, 0);
    (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sf(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (Ve = e), (De = Wt(t.firstChild)), !0) : !1;
        case 6:
            return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Ve = e), (De = null), !0) : !1;
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Pn !== null ? { id: vt, overflow: yt } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = Ge(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Ve = e),
                      (De = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function ll(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ul(e) {
    if ($) {
        var t = De;
        if (t) {
            var n = t;
            if (!sf(e, t)) {
                if (ll(e)) throw Error(C(418));
                t = Wt(n.nextSibling);
                var r = Ve;
                t && sf(e, t) ? Rh(r, n) : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ve = e));
            }
        } else {
            if (ll(e)) throw Error(C(418));
            (e.flags = (e.flags & -4097) | 2), ($ = !1), (Ve = e);
        }
    }
}
function af(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ve = e;
}
function Xi(e) {
    if (e !== Ve) return !1;
    if (!$) return af(e), ($ = !0), !1;
    var t;
    if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !il(e.type, e.memoizedProps))), t && (t = De))) {
        if (ll(e)) throw (Lh(), Error(C(418)));
        for (; t; ) Rh(e, t), (t = Wt(t.nextSibling));
    }
    if ((af(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(C(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            De = Wt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            De = null;
        }
    } else De = Ve ? Wt(e.stateNode.nextSibling) : null;
    return !0;
}
function Lh() {
    for (var e = De; e; ) e = Wt(e.nextSibling);
}
function lr() {
    (De = Ve = null), ($ = !1);
}
function yu(e) {
    et === null ? (et = [e]) : et.push(e);
}
var I0 = jt.ReactCurrentBatchConfig;
function Xe(e, t) {
    if (e && e.defaultProps) {
        (t = ne({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var Uo = on(null),
    Ho = null,
    Gn = null,
    wu = null;
function xu() {
    wu = Gn = Ho = null;
}
function Su(e) {
    var t = Uo.current;
    U(Uo), (e._currentValue = t);
}
function cl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
        e = e.return;
    }
}
function rr(e, t) {
    (Ho = e), (wu = Gn = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function Ke(e) {
    var t = e._currentValue;
    if (wu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
            if (Ho === null) throw Error(C(308));
            (Gn = e), (Ho.dependencies = { lanes: 0, firstContext: e });
        } else Gn = Gn.next = e;
    return t;
}
var yn = null;
function Au(e) {
    yn === null ? (yn = [e]) : yn.push(e);
}
function Oh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? ((n.next = n), Au(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), kt(e, r);
}
function kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var _t = !1;
function Eu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ih(e, t) {
    (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function xt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), V & 2)) {
        var i = r.pending;
        return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), kt(e, n);
    }
    return (i = r.interleaved), i === null ? ((t.next = t), Au(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), kt(e, n);
}
function wo(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
    }
}
function lf(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
            } while (n !== null);
            o === null ? (i = o = t) : (o = o.next = t);
        } else i = o = t;
        (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Wo(e, t, n, r) {
    var i = e.updateQueue;
    _t = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
        var c = e.alternate;
        c !== null && ((c = c.updateQueue), (a = c.lastBaseUpdate), a !== s && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
    }
    if (o !== null) {
        var f = i.baseState;
        (s = 0), (c = u = l = null), (a = o);
        do {
            var d = a.lane,
                g = a.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = { eventTime: g, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var v = e,
                        y = a;
                    switch (((d = t), (g = n), y.tag)) {
                        case 1:
                            if (((v = y.payload), typeof v == "function")) {
                                f = v.call(g, f, d);
                                break e;
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = (v.flags & -65537) | 128;
                        case 0:
                            if (((v = y.payload), (d = typeof v == "function" ? v.call(g, f, d) : v), d == null)) break e;
                            f = ne({}, f, d);
                            break e;
                        case 2:
                            _t = !0;
                    }
                }
                a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [a]) : d.push(a));
            } else (g = { eventTime: g, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), c === null ? ((u = c = g), (l = f)) : (c = c.next = g), (s |= d);
            if (((a = a.next), a === null)) {
                if (((a = i.shared.pending), a === null)) break;
                (d = a), (a = d.next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null);
            }
        } while (1);
        if ((c === null && (l = f), (i.baseState = l), (i.firstBaseUpdate = u), (i.lastBaseUpdate = c), (t = i.shared.interleaved), t !== null)) {
            i = t;
            do (s |= i.lane), (i = i.next);
            while (i !== t);
        } else o === null && (i.shared.lanes = 0);
        (Cn |= s), (e.lanes = s), (e.memoizedState = f);
    }
}
function uf(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function")) throw Error(C(191, i));
                i.call(r);
            }
        }
}
var _h = new Op.Component().refs;
function fl(e, t, n, r) {
    (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : ne({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vs = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Rn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ke(),
            i = $t(e),
            o = xt(r, i);
        (o.payload = t), n != null && (o.callback = n), (t = Qt(e, o, i)), t !== null && (nt(t, e, i, r), wo(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ke(),
            i = $t(e),
            o = xt(r, i);
        (o.tag = 1), (o.payload = t), n != null && (o.callback = n), (t = Qt(e, o, i)), t !== null && (nt(t, e, i, r), wo(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ke(),
            r = $t(e),
            i = xt(n, r);
        (i.tag = 2), t != null && (i.callback = t), (t = Qt(e, i, r)), t !== null && (nt(t, e, r, n), wo(t, e, r));
    },
};
function cf(e, t, n, r, i, o, s) {
    return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !ri(n, r) || !ri(i, o) : !0;
}
function Nh(e, t, n) {
    var r = !1,
        i = en,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null ? (o = Ke(o)) : ((i = Le(t) ? En : Ae.current), (r = t.contextTypes), (o = (r = r != null) ? ar(e, i) : en)),
        (t = new t(n, o)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = vs),
        (e.stateNode = t),
        (t._reactInternals = e),
        r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function ff(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && vs.enqueueReplaceState(t, t.state, null);
}
function dl(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = _h), Eu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? (i.context = Ke(o)) : ((o = Le(t) ? En : Ae.current), (i.context = ar(e, o))),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (fl(e, t, o, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && vs.enqueueReplaceState(i, i.state, null),
            Wo(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(C(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(C(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
                ? t.ref
                : ((t = function (s) {
                      var a = i.refs;
                      a === _h && (a = i.refs = {}), s === null ? delete a[o] : (a[o] = s);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != "string") throw Error(C(284));
        if (!n._owner) throw Error(C(290, e));
    }
    return e;
}
function Ji(e, t) {
    throw ((e = Object.prototype.toString.call(t)), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function df(e) {
    var t = e._init;
    return t(e._payload);
}
function Dh(e) {
    function t(h, p) {
        if (e) {
            var m = h.deletions;
            m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
        }
    }
    function n(h, p) {
        if (!e) return null;
        for (; p !== null; ) t(h, p), (p = p.sibling);
        return null;
    }
    function r(h, p) {
        for (h = new Map(); p !== null; ) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
        return h;
    }
    function i(h, p) {
        return (h = Yt(h, p)), (h.index = 0), (h.sibling = null), h;
    }
    function o(h, p, m) {
        return (h.index = m), e ? ((m = h.alternate), m !== null ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m) : ((h.flags |= 2), p)) : ((h.flags |= 1048576), p);
    }
    function s(h) {
        return e && h.alternate === null && (h.flags |= 2), h;
    }
    function a(h, p, m, w) {
        return p === null || p.tag !== 6 ? ((p = ha(m, h.mode, w)), (p.return = h), p) : ((p = i(p, m)), (p.return = h), p);
    }
    function l(h, p, m, w) {
        var A = m.type;
        return A === Fn
            ? c(h, p, m.props.children, w, m.key)
            : p !== null && (p.elementType === A || (typeof A == "object" && A !== null && A.$$typeof === It && df(A) === p.type))
            ? ((w = i(p, m.props)), (w.ref = kr(h, p, m)), (w.return = h), w)
            : ((w = ko(m.type, m.key, m.props, null, h.mode, w)), (w.ref = kr(h, p, m)), (w.return = h), w);
    }
    function u(h, p, m, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? ((p = ma(m, h.mode, w)), (p.return = h), p) : ((p = i(p, m.children || [])), (p.return = h), p);
    }
    function c(h, p, m, w, A) {
        return p === null || p.tag !== 7 ? ((p = An(m, h.mode, w, A)), (p.return = h), p) : ((p = i(p, m)), (p.return = h), p);
    }
    function f(h, p, m) {
        if ((typeof p == "string" && p !== "") || typeof p == "number") return (p = ha("" + p, h.mode, m)), (p.return = h), p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Ui:
                    return (m = ko(p.type, p.key, p.props, null, h.mode, m)), (m.ref = kr(h, null, p)), (m.return = h), m;
                case Vn:
                    return (p = ma(p, h.mode, m)), (p.return = h), p;
                case It:
                    var w = p._init;
                    return f(h, w(p._payload), m);
            }
            if (Ir(p) || xr(p)) return (p = An(p, h.mode, m, null)), (p.return = h), p;
            Ji(h, p);
        }
        return null;
    }
    function d(h, p, m, w) {
        var A = p !== null ? p.key : null;
        if ((typeof m == "string" && m !== "") || typeof m == "number") return A !== null ? null : a(h, p, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ui:
                    return m.key === A ? l(h, p, m, w) : null;
                case Vn:
                    return m.key === A ? u(h, p, m, w) : null;
                case It:
                    return (A = m._init), d(h, p, A(m._payload), w);
            }
            if (Ir(m) || xr(m)) return A !== null ? null : c(h, p, m, w, null);
            Ji(h, m);
        }
        return null;
    }
    function g(h, p, m, w, A) {
        if ((typeof w == "string" && w !== "") || typeof w == "number") return (h = h.get(m) || null), a(p, h, "" + w, A);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Ui:
                    return (h = h.get(w.key === null ? m : w.key) || null), l(p, h, w, A);
                case Vn:
                    return (h = h.get(w.key === null ? m : w.key) || null), u(p, h, w, A);
                case It:
                    var P = w._init;
                    return g(h, p, m, P(w._payload), A);
            }
            if (Ir(w) || xr(w)) return (h = h.get(m) || null), c(p, h, w, A, null);
            Ji(p, w);
        }
        return null;
    }
    function v(h, p, m, w) {
        for (var A = null, P = null, T = p, k = (p = 0), R = null; T !== null && k < m.length; k++) {
            T.index > k ? ((R = T), (T = null)) : (R = T.sibling);
            var L = d(h, T, m[k], w);
            if (L === null) {
                T === null && (T = R);
                break;
            }
            e && T && L.alternate === null && t(h, T), (p = o(L, p, k)), P === null ? (A = L) : (P.sibling = L), (P = L), (T = R);
        }
        if (k === m.length) return n(h, T), $ && pn(h, k), A;
        if (T === null) {
            for (; k < m.length; k++) (T = f(h, m[k], w)), T !== null && ((p = o(T, p, k)), P === null ? (A = T) : (P.sibling = T), (P = T));
            return $ && pn(h, k), A;
        }
        for (T = r(h, T); k < m.length; k++) (R = g(T, h, k, m[k], w)), R !== null && (e && R.alternate !== null && T.delete(R.key === null ? k : R.key), (p = o(R, p, k)), P === null ? (A = R) : (P.sibling = R), (P = R));
        return (
            e &&
                T.forEach(function (H) {
                    return t(h, H);
                }),
            $ && pn(h, k),
            A
        );
    }
    function y(h, p, m, w) {
        var A = xr(m);
        if (typeof A != "function") throw Error(C(150));
        if (((m = A.call(m)), m == null)) throw Error(C(151));
        for (var P = (A = null), T = p, k = (p = 0), R = null, L = m.next(); T !== null && !L.done; k++, L = m.next()) {
            T.index > k ? ((R = T), (T = null)) : (R = T.sibling);
            var H = d(h, T, L.value, w);
            if (H === null) {
                T === null && (T = R);
                break;
            }
            e && T && H.alternate === null && t(h, T), (p = o(H, p, k)), P === null ? (A = H) : (P.sibling = H), (P = H), (T = R);
        }
        if (L.done) return n(h, T), $ && pn(h, k), A;
        if (T === null) {
            for (; !L.done; k++, L = m.next()) (L = f(h, L.value, w)), L !== null && ((p = o(L, p, k)), P === null ? (A = L) : (P.sibling = L), (P = L));
            return $ && pn(h, k), A;
        }
        for (T = r(h, T); !L.done; k++, L = m.next()) (L = g(T, h, k, L.value, w)), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? k : L.key), (p = o(L, p, k)), P === null ? (A = L) : (P.sibling = L), (P = L));
        return (
            e &&
                T.forEach(function (he) {
                    return t(h, he);
                }),
            $ && pn(h, k),
            A
        );
    }
    function E(h, p, m, w) {
        if ((typeof m == "object" && m !== null && m.type === Fn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null)) {
            switch (m.$$typeof) {
                case Ui:
                    e: {
                        for (var A = m.key, P = p; P !== null; ) {
                            if (P.key === A) {
                                if (((A = m.type), A === Fn)) {
                                    if (P.tag === 7) {
                                        n(h, P.sibling), (p = i(P, m.props.children)), (p.return = h), (h = p);
                                        break e;
                                    }
                                } else if (P.elementType === A || (typeof A == "object" && A !== null && A.$$typeof === It && df(A) === P.type)) {
                                    n(h, P.sibling), (p = i(P, m.props)), (p.ref = kr(h, P, m)), (p.return = h), (h = p);
                                    break e;
                                }
                                n(h, P);
                                break;
                            } else t(h, P);
                            P = P.sibling;
                        }
                        m.type === Fn ? ((p = An(m.props.children, h.mode, w, m.key)), (p.return = h), (h = p)) : ((w = ko(m.type, m.key, m.props, null, h.mode, w)), (w.ref = kr(h, p, m)), (w.return = h), (h = w));
                    }
                    return s(h);
                case Vn:
                    e: {
                        for (P = m.key; p !== null; ) {
                            if (p.key === P)
                                if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                    n(h, p.sibling), (p = i(p, m.children || [])), (p.return = h), (h = p);
                                    break e;
                                } else {
                                    n(h, p);
                                    break;
                                }
                            else t(h, p);
                            p = p.sibling;
                        }
                        (p = ma(m, h.mode, w)), (p.return = h), (h = p);
                    }
                    return s(h);
                case It:
                    return (P = m._init), E(h, p, P(m._payload), w);
            }
            if (Ir(m)) return v(h, p, m, w);
            if (xr(m)) return y(h, p, m, w);
            Ji(h, m);
        }
        return (typeof m == "string" && m !== "") || typeof m == "number"
            ? ((m = "" + m), p !== null && p.tag === 6 ? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p)) : (n(h, p), (p = ha(m, h.mode, w)), (p.return = h), (h = p)), s(h))
            : n(h, p);
    }
    return E;
}
var ur = Dh(!0),
    Vh = Dh(!1),
    Pi = {},
    dt = on(Pi),
    ai = on(Pi),
    li = on(Pi);
function wn(e) {
    if (e === Pi) throw Error(C(174));
    return e;
}
function Pu(e, t) {
    switch ((B(li, t), B(ai, e), B(dt, Pi), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Wa(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Wa(t, e));
    }
    U(dt), B(dt, t);
}
function cr() {
    U(dt), U(ai), U(li);
}
function Fh(e) {
    wn(li.current);
    var t = wn(dt.current),
        n = Wa(t, e.type);
    t !== n && (B(ai, e), B(dt, n));
}
function ku(e) {
    ai.current === e && (U(dt), U(ai));
}
var X = on(0);
function Qo(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var la = [];
function Cu() {
    for (var e = 0; e < la.length; e++) la[e]._workInProgressVersionPrimary = null;
    la.length = 0;
}
var xo = jt.ReactCurrentDispatcher,
    ua = jt.ReactCurrentBatchConfig,
    kn = 0,
    te = null,
    ue = null,
    de = null,
    Go = !1,
    Ur = !1,
    ui = 0,
    _0 = 0;
function we() {
    throw Error(C(321));
}
function Tu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
}
function ju(e, t, n, r, i, o) {
    if (((kn = o), (te = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (xo.current = e === null || e.memoizedState === null ? F0 : z0), (e = n(r, i)), Ur)) {
        o = 0;
        do {
            if (((Ur = !1), (ui = 0), 25 <= o)) throw Error(C(301));
            (o += 1), (de = ue = null), (t.updateQueue = null), (xo.current = B0), (e = n(r, i));
        } while (Ur);
    }
    if (((xo.current = $o), (t = ue !== null && ue.next !== null), (kn = 0), (de = ue = te = null), (Go = !1), t)) throw Error(C(300));
    return e;
}
function Mu() {
    var e = ui !== 0;
    return (ui = 0), e;
}
function at() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return de === null ? (te.memoizedState = de = e) : (de = de.next = e), de;
}
function qe() {
    if (ue === null) {
        var e = te.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = ue.next;
    var t = de === null ? te.memoizedState : de.next;
    if (t !== null) (de = t), (ue = e);
    else {
        if (e === null) throw Error(C(310));
        (ue = e), (e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }), de === null ? (te.memoizedState = de = e) : (de = de.next = e);
    }
    return de;
}
function ci(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function ca(e) {
    var t = qe(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = ue,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            (i.next = o.next), (o.next = s);
        }
        (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
        (o = i.next), (r = r.baseState);
        var a = (s = null),
            l = null,
            u = o;
        do {
            var c = u.lane;
            if ((kn & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                l === null ? ((a = l = f), (s = r)) : (l = l.next = f), (te.lanes |= c), (Cn |= c);
            }
            u = u.next;
        } while (u !== null && u !== o);
        l === null ? (s = r) : (l.next = a), rt(r, t.memoizedState) || (Me = !0), (t.memoizedState = r), (t.baseState = s), (t.baseQueue = l), (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (o = i.lane), (te.lanes |= o), (Cn |= o), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function fa(e) {
    var t = qe(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== i);
        rt(o, t.memoizedState) || (Me = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (n.lastRenderedState = o);
    }
    return [o, r];
}
function zh() {}
function Bh(e, t) {
    var n = te,
        r = qe(),
        i = t(),
        o = !rt(r.memoizedState, i);
    if ((o && ((r.memoizedState = i), (Me = !0)), (r = r.queue), Ru(Hh.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || (de !== null && de.memoizedState.tag & 1))) {
        if (((n.flags |= 2048), fi(9, Uh.bind(null, n, r, i, t), void 0, null), pe === null)) throw Error(C(349));
        kn & 30 || bh(n, t, i);
    }
    return i;
}
function bh(e, t, n) {
    (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = te.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (te.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Uh(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Wh(t) && Qh(e);
}
function Hh(e, t, n) {
    return n(function () {
        Wh(t) && Qh(e);
    });
}
function Wh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !rt(e, n);
    } catch {
        return !0;
    }
}
function Qh(e) {
    var t = kt(e, 1);
    t !== null && nt(t, e, 1, -1);
}
function pf(e) {
    var t = at();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ci, lastRenderedState: e }),
        (t.queue = e),
        (e = e.dispatch = V0.bind(null, te, e)),
        [t.memoizedState, e]
    );
}
function fi(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = te.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (te.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function Gh() {
    return qe().memoizedState;
}
function So(e, t, n, r) {
    var i = at();
    (te.flags |= e), (i.memoizedState = fi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ys(e, t, n, r) {
    var i = qe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ue !== null) {
        var s = ue.memoizedState;
        if (((o = s.destroy), r !== null && Tu(r, s.deps))) {
            i.memoizedState = fi(t, n, o, r);
            return;
        }
    }
    (te.flags |= e), (i.memoizedState = fi(1 | t, n, o, r));
}
function hf(e, t) {
    return So(8390656, 8, e, t);
}
function Ru(e, t) {
    return ys(2048, 8, e, t);
}
function $h(e, t) {
    return ys(4, 2, e, t);
}
function Yh(e, t) {
    return ys(4, 4, e, t);
}
function Kh(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function qh(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), ys(4, 4, Kh.bind(null, t, e), n);
}
function Lu() {}
function Zh(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Xh(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jh(e, t, n) {
    return kn & 21 ? (rt(n, t) || ((n = nh()), (te.lanes |= n), (Cn |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function N0(e, t) {
    var n = z;
    (z = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ua.transition;
    ua.transition = {};
    try {
        e(!1), t();
    } finally {
        (z = n), (ua.transition = r);
    }
}
function em() {
    return qe().memoizedState;
}
function D0(e, t, n) {
    var r = $t(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), tm(e))) nm(t, n);
    else if (((n = Oh(e, t, n, r)), n !== null)) {
        var i = ke();
        nt(n, e, r, i), rm(n, t, r);
    }
}
function V0(e, t, n) {
    var r = $t(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (tm(e)) nm(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
            try {
                var s = t.lastRenderedState,
                    a = o(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = a), rt(a, s))) {
                    var l = t.interleaved;
                    l === null ? ((i.next = i), Au(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Oh(e, t, i, r)), n !== null && ((i = ke()), nt(n, e, r, i), rm(n, t, r));
    }
}
function tm(e) {
    var t = e.alternate;
    return e === te || (t !== null && t === te);
}
function nm(e, t) {
    Ur = Go = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function rm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
    }
}
var $o = {
        readContext: Ke,
        useCallback: we,
        useContext: we,
        useEffect: we,
        useImperativeHandle: we,
        useInsertionEffect: we,
        useLayoutEffect: we,
        useMemo: we,
        useReducer: we,
        useRef: we,
        useState: we,
        useDebugValue: we,
        useDeferredValue: we,
        useTransition: we,
        useMutableSource: we,
        useSyncExternalStore: we,
        useId: we,
        unstable_isNewReconciler: !1,
    },
    F0 = {
        readContext: Ke,
        useCallback: function (e, t) {
            return (at().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ke,
        useEffect: hf,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), So(4194308, 4, Kh.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return So(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return So(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = at();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = at();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
                (r.queue = e),
                (e = e.dispatch = D0.bind(null, te, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = at();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: pf,
        useDebugValue: Lu,
        useDeferredValue: function (e) {
            return (at().memoizedState = e);
        },
        useTransition: function () {
            var e = pf(!1),
                t = e[0];
            return (e = N0.bind(null, e[1])), (at().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = te,
                i = at();
            if ($) {
                if (n === void 0) throw Error(C(407));
                n = n();
            } else {
                if (((n = t()), pe === null)) throw Error(C(349));
                kn & 30 || bh(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (i.queue = o), hf(Hh.bind(null, r, o, e), [e]), (r.flags |= 2048), fi(9, Uh.bind(null, r, o, n, t), void 0, null), n;
        },
        useId: function () {
            var e = at(),
                t = pe.identifierPrefix;
            if ($) {
                var n = yt,
                    r = vt;
                (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = ui++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
            } else (n = _0++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    z0 = {
        readContext: Ke,
        useCallback: Zh,
        useContext: Ke,
        useEffect: Ru,
        useImperativeHandle: qh,
        useInsertionEffect: $h,
        useLayoutEffect: Yh,
        useMemo: Xh,
        useReducer: ca,
        useRef: Gh,
        useState: function () {
            return ca(ci);
        },
        useDebugValue: Lu,
        useDeferredValue: function (e) {
            var t = qe();
            return Jh(t, ue.memoizedState, e);
        },
        useTransition: function () {
            var e = ca(ci)[0],
                t = qe().memoizedState;
            return [e, t];
        },
        useMutableSource: zh,
        useSyncExternalStore: Bh,
        useId: em,
        unstable_isNewReconciler: !1,
    },
    B0 = {
        readContext: Ke,
        useCallback: Zh,
        useContext: Ke,
        useEffect: Ru,
        useImperativeHandle: qh,
        useInsertionEffect: $h,
        useLayoutEffect: Yh,
        useMemo: Xh,
        useReducer: fa,
        useRef: Gh,
        useState: function () {
            return fa(ci);
        },
        useDebugValue: Lu,
        useDeferredValue: function (e) {
            var t = qe();
            return ue === null ? (t.memoizedState = e) : Jh(t, ue.memoizedState, e);
        },
        useTransition: function () {
            var e = fa(ci)[0],
                t = qe().memoizedState;
            return [e, t];
        },
        useMutableSource: zh,
        useSyncExternalStore: Bh,
        useId: em,
        unstable_isNewReconciler: !1,
    };
function fr(e, t) {
    try {
        var n = "",
            r = t;
        do (n += hy(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (o) {
        i =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function da(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pl(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var b0 = typeof WeakMap == "function" ? WeakMap : Map;
function im(e, t, n) {
    (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Ko || ((Ko = !0), (El = r)), pl(e, t);
        }),
        n
    );
}
function om(e, t, n) {
    (n = xt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                pl(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (n.callback = function () {
                pl(e, t), typeof r != "function" && (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
            }),
        n
    );
}
function mf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new b0();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = t1.bind(null, e, t, n)), t.then(e, e));
}
function gf(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function vf(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = xt(-1, 1)), (t.tag = 2), Qt(n, t, 1))), (n.lanes |= 1)), e);
}
var U0 = jt.ReactCurrentOwner,
    Me = !1;
function Pe(e, t, n, r) {
    t.child = e === null ? Vh(t, null, n, r) : ur(t, e.child, n, r);
}
function yf(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return rr(t, i), (r = ju(e, t, n, r, o, i)), (n = Mu()), e !== null && !Me ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ct(e, t, i)) : ($ && n && gu(t), (t.flags |= 1), Pe(e, t, r, i), t.child);
}
function wf(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !zu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), sm(e, t, o, r, i))
            : ((e = ko(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
        var s = o.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : ri), n(s, r) && e.ref === t.ref)) return Ct(e, t, i);
    }
    return (t.flags |= 1), (e = Yt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function sm(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (ri(o, r) && e.ref === t.ref)
            if (((Me = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (Me = !0);
            else return (t.lanes = e.lanes), Ct(e, t, i);
    }
    return hl(e, t, n, r, i);
}
function am(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), B(Yn, Ne), (Ne |= n);
        else {
            if (!(n & 1073741824))
                return (e = o !== null ? o.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), B(Yn, Ne), (Ne |= e), null;
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = o !== null ? o.baseLanes : n), B(Yn, Ne), (Ne |= r);
        }
    else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), B(Yn, Ne), (Ne |= r);
    return Pe(e, t, i, n), t.child;
}
function lm(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function hl(e, t, n, r, i) {
    var o = Le(n) ? En : Ae.current;
    return (
        (o = ar(t, o)), rr(t, i), (n = ju(e, t, n, r, o, i)), (r = Mu()), e !== null && !Me ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ct(e, t, i)) : ($ && r && gu(t), (t.flags |= 1), Pe(e, t, n, i), t.child)
    );
}
function xf(e, t, n, r, i) {
    if (Le(n)) {
        var o = !0;
        zo(t);
    } else o = !1;
    if ((rr(t, i), t.stateNode === null)) Ao(e, t), Nh(t, n, r), dl(t, n, r, i), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? (u = Ke(u)) : ((u = Le(n) ? En : Ae.current), (u = ar(t, u)));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") || ((a !== r || l !== u) && ff(t, s, r, u)), (_t = !1);
        var d = t.memoizedState;
        (s.state = d),
            Wo(t, r, s, i),
            (l = t.memoizedState),
            a !== r || d !== l || Re.current || _t
                ? (typeof c == "function" && (fl(t, n, c, r), (l = t.memoizedState)),
                  (a = _t || cf(t, n, a, r, d, l, u))
                      ? (f ||
                            (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = u),
                  (r = a))
                : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (s = t.stateNode),
            Ih(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : Xe(t.type, a)),
            (s.props = u),
            (f = t.pendingProps),
            (d = s.context),
            (l = n.contextType),
            typeof l == "object" && l !== null ? (l = Ke(l)) : ((l = Le(n) ? En : Ae.current), (l = ar(t, l)));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
            ((a !== f || d !== l) && ff(t, s, r, l)),
            (_t = !1),
            (d = t.memoizedState),
            (s.state = d),
            Wo(t, r, s, i);
        var v = t.memoizedState;
        a !== f || d !== v || Re.current || _t
            ? (typeof g == "function" && (fl(t, n, g, r), (v = t.memoizedState)),
              (u = _t || cf(t, n, u, r, d, v, l) || !1)
                  ? (c ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = v)),
              (s.props = r),
              (s.state = v),
              (s.context = l),
              (r = u))
            : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
              (r = !1));
    }
    return ml(e, t, n, r, o, i);
}
function ml(e, t, n, r, i, o) {
    lm(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && of(t, n, !1), Ct(e, t, o);
    (r = t.stateNode), (U0.current = t);
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (t.flags |= 1), e !== null && s ? ((t.child = ur(t, e.child, null, o)), (t.child = ur(t, null, a, o))) : Pe(e, t, a, o), (t.memoizedState = r.state), i && of(t, n, !0), t.child;
}
function um(e) {
    var t = e.stateNode;
    t.pendingContext ? rf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rf(e, t.context, !1), Pu(e, t.containerInfo);
}
function Sf(e, t, n, r, i) {
    return lr(), yu(i), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var gl = { dehydrated: null, treeContext: null, retryLane: 0 };
function vl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function cm(e, t, n) {
    var r = t.pendingProps,
        i = X.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1), B(X, i & 1), e === null))
        return (
            ul(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((s = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = s)) : (o = Ss(s, r, 0, null)),
                        (e = An(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = vl(n)),
                        (t.memoizedState = gl),
                        e)
                      : Ou(t, s))
        );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return H0(e, t, s, r, a, i, n);
    if (o) {
        (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== i ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null)) : ((r = Yt(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
            a !== null ? (o = Yt(a, o)) : ((o = An(o, s, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (s = e.child.memoizedState),
            (s = s === null ? vl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
            (o.memoizedState = s),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = gl),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = Yt(o, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Ou(e, t) {
    return (t = Ss({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function eo(e, t, n, r) {
    return r !== null && yu(r), ur(t, e.child, null, n), (e = Ou(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function H0(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = da(Error(C(422)))), eo(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (i = t.mode),
              (r = Ss({ mode: "visible", children: r.children }, i, 0, null)),
              (o = An(o, i, s, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && ur(t, e.child, null, s),
              (t.child.memoizedState = vl(s)),
              (t.memoizedState = gl),
              o);
    if (!(t.mode & 1)) return eo(e, t, s, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (o = Error(C(419))), (r = da(o, r, void 0)), eo(e, t, s, r);
    }
    if (((a = (s & e.childLanes) !== 0), Me || a)) {
        if (((r = pe), r !== null)) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | s) ? 0 : i), i !== 0 && i !== o.retryLane && ((o.retryLane = i), kt(e, i), nt(r, e, i, -1));
        }
        return Fu(), (r = da(Error(C(421)))), eo(e, t, s, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = n1.bind(null, e)), (i._reactRetry = t), null)
        : ((e = o.treeContext),
          (De = Wt(i.nextSibling)),
          (Ve = t),
          ($ = !0),
          (et = null),
          e !== null && ((We[Qe++] = vt), (We[Qe++] = yt), (We[Qe++] = Pn), (vt = e.id), (yt = e.overflow), (Pn = t)),
          (t = Ou(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Af(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), cl(e.return, t, n);
}
function pa(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = i));
}
function fm(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((Pe(e, t, r.children, n), (r = X.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Af(e, n, t);
                else if (e.tag === 19) Af(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((B(X, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && Qo(e) === null && (i = n), (n = n.sibling);
                (n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), pa(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Qo(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                pa(t, !0, n, null, o);
                break;
            case "together":
                pa(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Ao(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ct(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Cn |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = Yt(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function W0(e, t, n) {
    switch (t.tag) {
        case 3:
            um(t), lr();
            break;
        case 5:
            Fh(t);
            break;
        case 1:
            Le(t.type) && zo(t);
            break;
        case 4:
            Pu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            B(Uo, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null ? (B(X, X.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? cm(e, t, n) : (B(X, X.current & 1), (e = Ct(e, t, n)), e !== null ? e.sibling : null);
            B(X, X.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return fm(e, t, n);
                t.flags |= 128;
            }
            if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), B(X, X.current), r)) break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), am(e, t, n);
    }
    return Ct(e, t, n);
}
var dm, yl, pm, hm;
dm = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
yl = function () {};
pm = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), wn(dt.current);
        var o = null;
        switch (n) {
            case "input":
                (i = Ba(e, i)), (r = Ba(e, r)), (o = []);
                break;
            case "select":
                (i = ne({}, i, { value: void 0 })), (r = ne({}, r, { value: void 0 })), (o = []);
                break;
            case "textarea":
                (i = Ha(e, i)), (r = Ha(e, r)), (o = []);
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vo);
        }
        Qa(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (qr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
                    } else n || (o || (o = []), o.push(u, n)), (n = l);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0), (a = a ? a.__html : void 0), l != null && a !== l && (o = o || []).push(u, l))
                        : u === "children"
                        ? (typeof l != "string" && typeof l != "number") || (o = o || []).push(u, "" + l)
                        : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (qr.hasOwnProperty(u) ? (l != null && u === "onScroll" && b("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
hm = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Cr(e, t) {
    if (!$)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t) for (var i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling);
    else for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Q0(e, t, n) {
    var r = t.pendingProps;
    switch ((vu(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return xe(t), null;
        case 1:
            return Le(t.type) && Fo(), xe(t), null;
        case 3:
            return (
                (r = t.stateNode),
                cr(),
                U(Re),
                U(Ae),
                Cu(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) && (Xi(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), et !== null && (Cl(et), (et = null)))),
                yl(e, t),
                xe(t),
                null
            );
        case 5:
            ku(t);
            var i = wn(li.current);
            if (((n = t.type), e !== null && t.stateNode != null)) pm(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(C(166));
                    return xe(t), null;
                }
                if (((e = wn(dt.current)), Xi(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (((r[ct] = t), (r[si] = o), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            b("cancel", r), b("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            b("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Nr.length; i++) b(Nr[i], r);
                            break;
                        case "source":
                            b("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            b("error", r), b("load", r);
                            break;
                        case "details":
                            b("toggle", r);
                            break;
                        case "input":
                            Rc(r, o), b("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }), b("invalid", r);
                            break;
                        case "textarea":
                            Oc(r, o), b("invalid", r);
                    }
                    Qa(n, o), (i = null);
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Zi(r.textContent, a, e), (i = ["children", a]))
                                    : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Zi(r.textContent, a, e), (i = ["children", "" + a]))
                                : qr.hasOwnProperty(s) && a != null && s === "onScroll" && b("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Hi(r), Lc(r, o, !0);
                            break;
                        case "textarea":
                            Hi(r), Ic(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Vo);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = bp(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)), n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[ct] = t),
                        (e[si] = r),
                        dm(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = Ga(n, r)), n)) {
                            case "dialog":
                                b("cancel", e), b("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                b("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Nr.length; i++) b(Nr[i], e);
                                i = r;
                                break;
                            case "source":
                                b("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                b("error", e), b("load", e), (i = r);
                                break;
                            case "details":
                                b("toggle", e), (i = r);
                                break;
                            case "input":
                                Rc(e, r), (i = Ba(e, r)), b("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = ne({}, r, { value: void 0 })), b("invalid", e);
                                break;
                            case "textarea":
                                Oc(e, r), (i = Ha(e, r)), b("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        Qa(n, i), (a = i);
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style"
                                    ? Wp(e, l)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((l = l ? l.__html : void 0), l != null && Up(e, l))
                                    : o === "children"
                                    ? typeof l == "string"
                                        ? (n !== "textarea" || l !== "") && Zr(e, l)
                                        : typeof l == "number" && Zr(e, "" + l)
                                    : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (qr.hasOwnProperty(o) ? l != null && o === "onScroll" && b("scroll", e) : l != null && nu(e, o, l, s));
                            }
                        switch (n) {
                            case "input":
                                Hi(e), Lc(e, r, !1);
                                break;
                            case "textarea":
                                Hi(e), Ic(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple), (o = r.value), o != null ? Jn(e, !!r.multiple, o, !1) : r.defaultValue != null && Jn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Vo);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return xe(t), null;
        case 6:
            if (e && t.stateNode != null) hm(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
                if (((n = wn(li.current)), wn(dt.current), Xi(t))) {
                    if (((r = t.stateNode), (n = t.memoizedProps), (r[ct] = t), (o = r.nodeValue !== n) && ((e = Ve), e !== null)))
                        switch (e.tag) {
                            case 3:
                                Zi(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Zi(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[ct] = t), (t.stateNode = r);
            }
            return xe(t), null;
        case 13:
            if ((U(X), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                if ($ && De !== null && t.mode & 1 && !(t.flags & 128)) Lh(), lr(), (t.flags |= 98560), (o = !1);
                else if (((o = Xi(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(C(318));
                        if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(C(317));
                        o[ct] = t;
                    } else lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    xe(t), (o = !1);
                } else et !== null && (Cl(et), (et = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || X.current & 1 ? fe === 0 && (fe = 3) : Fu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  xe(t),
                  null);
        case 4:
            return cr(), yl(e, t), e === null && ii(t.stateNode.containerInfo), xe(t), null;
        case 10:
            return Su(t.type._context), xe(t), null;
        case 17:
            return Le(t.type) && Fo(), xe(t), null;
        case 19:
            if ((U(X), (o = t.memoizedState), o === null)) return xe(t), null;
            if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
                if (r) Cr(o, !1);
                else {
                    if (fe !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Qo(e)), s !== null)) {
                                for (t.flags |= 128, Cr(o, !1), r = s.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (s = o.alternate),
                                        s === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = s.childLanes),
                                              (o.lanes = s.lanes),
                                              (o.child = s.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps = s.memoizedProps),
                                              (o.memoizedState = s.memoizedState),
                                              (o.updateQueue = s.updateQueue),
                                              (o.type = s.type),
                                              (e = s.dependencies),
                                              (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return B(X, (X.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null && oe() > dr && ((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Qo(s)), e !== null)) {
                        if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), Cr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !$)) return xe(t), null;
                    } else 2 * oe() - o.renderingStartTime > dr && n !== 1073741824 && ((t.flags |= 128), (r = !0), Cr(o, !1), (t.lanes = 4194304));
                o.isBackwards ? ((s.sibling = t.child), (t.child = s)) : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
            }
            return o.tail !== null ? ((t = o.tail), (o.rendering = t), (o.tail = t.sibling), (o.renderingStartTime = oe()), (t.sibling = null), (n = X.current), B(X, r ? (n & 1) | 2 : n & 1), t) : (xe(t), null);
        case 22:
        case 23:
            return Vu(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(C(156, t.tag));
}
function G0(e, t) {
    switch ((vu(t), t.tag)) {
        case 1:
            return Le(t.type) && Fo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return cr(), U(Re), U(Ae), Cu(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
        case 5:
            return ku(t), null;
        case 13:
            if ((U(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(C(340));
                lr();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return U(X), null;
        case 4:
            return cr(), null;
        case 10:
            return Su(t.type._context), null;
        case 22:
        case 23:
            return Vu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var to = !1,
    Se = !1,
    $0 = typeof WeakSet == "function" ? WeakSet : Set,
    M = null;
function $n(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                ie(e, t, r);
            }
        else n.current = null;
}
function wl(e, t, n) {
    try {
        n();
    } catch (r) {
        ie(e, t, r);
    }
}
var Ef = !1;
function Y0(e, t) {
    if (((nl = _o), (e = yh()), mu(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        c = 0,
                        f = e,
                        d = null;
                    t: for (;;) {
                        for (var g; f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i), f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (g = f.firstChild) !== null; )
                            (d = f), (f = g);
                        for (;;) {
                            if (f === e) break t;
                            if ((d === n && ++u === i && (a = s), d === o && ++c === r && (l = s), (g = f.nextSibling) !== null)) break;
                            (f = d), (d = f.parentNode);
                        }
                        f = g;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (rl = { focusedElem: e, selectionRange: n }, _o = !1, M = t; M !== null; )
        if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (M = e);
        else
            for (; M !== null; ) {
                t = M;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (v !== null) {
                                    var y = v.memoizedProps,
                                        E = v.memoizedState,
                                        h = t.stateNode,
                                        p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Xe(t.type, y), E);
                                    h.__reactInternalSnapshotBeforeUpdate = p;
                                }
                                break;
                            case 3:
                                var m = t.stateNode.containerInfo;
                                m.nodeType === 1 ? (m.textContent = "") : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(C(163));
                        }
                } catch (w) {
                    ie(t, t.return, w);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (M = e);
                    break;
                }
                M = t.return;
            }
    return (v = Ef), (Ef = !1), v;
}
function Hr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), o !== void 0 && wl(t, n, o);
            }
            i = i.next;
        } while (i !== r);
    }
}
function ws(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function xl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function mm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), mm(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[ct], delete t[si], delete t[sl], delete t[R0], delete t[L0])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function gm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pf(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || gm(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Sl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = Vo));
    else if (r !== 4 && ((e = e.child), e !== null)) for (Sl(e, t, n), e = e.sibling; e !== null; ) Sl(e, t, n), (e = e.sibling);
}
function Al(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null)) for (Al(e, t, n), e = e.sibling; e !== null; ) Al(e, t, n), (e = e.sibling);
}
var me = null,
    Je = !1;
function Mt(e, t, n) {
    for (n = n.child; n !== null; ) vm(e, t, n), (n = n.sibling);
}
function vm(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
        try {
            ft.onCommitFiberUnmount(fs, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Se || $n(n, t);
        case 6:
            var r = me,
                i = Je;
            (me = null), Mt(e, t, n), (me = r), (Je = i), me !== null && (Je ? ((e = me), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : me.removeChild(n.stateNode));
            break;
        case 18:
            me !== null && (Je ? ((e = me), (n = n.stateNode), e.nodeType === 8 ? sa(e.parentNode, n) : e.nodeType === 1 && sa(e, n), ti(e)) : sa(me, n.stateNode));
            break;
        case 4:
            (r = me), (i = Je), (me = n.stateNode.containerInfo), (Je = !0), Mt(e, t, n), (me = r), (Je = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Se && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    (o = o.tag), s !== void 0 && (o & 2 || o & 4) && wl(n, t, s), (i = i.next);
                } while (i !== r);
            }
            Mt(e, t, n);
            break;
        case 1:
            if (!Se && ($n(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    ie(n, t, a);
                }
            Mt(e, t, n);
            break;
        case 21:
            Mt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((Se = (r = Se) || n.memoizedState !== null), Mt(e, t, n), (Se = r)) : Mt(e, t, n);
            break;
        default:
            Mt(e, t, n);
    }
}
function kf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new $0()),
            t.forEach(function (r) {
                var i = r1.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function Ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (me = a.stateNode), (Je = !1);
                            break e;
                        case 3:
                            (me = a.stateNode.containerInfo), (Je = !0);
                            break e;
                        case 4:
                            (me = a.stateNode.containerInfo), (Je = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (me === null) throw Error(C(160));
                vm(o, s, i), (me = null), (Je = !1);
                var l = i.alternate;
                l !== null && (l.return = null), (i.return = null);
            } catch (u) {
                ie(i, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ym(t, e), (t = t.sibling);
}
function ym(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Ze(t, e), st(e), r & 4)) {
                try {
                    Hr(3, e, e.return), ws(3, e);
                } catch (y) {
                    ie(e, e.return, y);
                }
                try {
                    Hr(5, e, e.return);
                } catch (y) {
                    ie(e, e.return, y);
                }
            }
            break;
        case 1:
            Ze(t, e), st(e), r & 512 && n !== null && $n(n, n.return);
            break;
        case 5:
            if ((Ze(t, e), st(e), r & 512 && n !== null && $n(n, n.return), e.flags & 32)) {
                var i = e.stateNode;
                try {
                    Zr(i, "");
                } catch (y) {
                    ie(e, e.return, y);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === "input" && o.type === "radio" && o.name != null && zp(i, o), Ga(a, s);
                        var u = Ga(a, o);
                        for (s = 0; s < l.length; s += 2) {
                            var c = l[s],
                                f = l[s + 1];
                            c === "style" ? Wp(i, f) : c === "dangerouslySetInnerHTML" ? Up(i, f) : c === "children" ? Zr(i, f) : nu(i, c, f, u);
                        }
                        switch (a) {
                            case "input":
                                ba(i, o);
                                break;
                            case "textarea":
                                Bp(i, o);
                                break;
                            case "select":
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var g = o.value;
                                g != null ? Jn(i, !!o.multiple, g, !1) : d !== !!o.multiple && (o.defaultValue != null ? Jn(i, !!o.multiple, o.defaultValue, !0) : Jn(i, !!o.multiple, o.multiple ? [] : "", !1));
                        }
                        i[si] = o;
                    } catch (y) {
                        ie(e, e.return, y);
                    }
            }
            break;
        case 6:
            if ((Ze(t, e), st(e), r & 4)) {
                if (e.stateNode === null) throw Error(C(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                    i.nodeValue = o;
                } catch (y) {
                    ie(e, e.return, y);
                }
            }
            break;
        case 3:
            if ((Ze(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    ti(t.containerInfo);
                } catch (y) {
                    ie(e, e.return, y);
                }
            break;
        case 4:
            Ze(t, e), st(e);
            break;
        case 13:
            Ze(t, e), st(e), (i = e.child), i.flags & 8192 && ((o = i.memoizedState !== null), (i.stateNode.isHidden = o), !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (Nu = oe())), r & 4 && kf(e);
            break;
        case 22:
            if (((c = n !== null && n.memoizedState !== null), e.mode & 1 ? ((Se = (u = Se) || c), Ze(t, e), (Se = u)) : Ze(t, e), st(e), r & 8192)) {
                if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
                    for (M = e, c = e.child; c !== null; ) {
                        for (f = M = c; M !== null; ) {
                            switch (((d = M), (g = d.child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Hr(4, d, d.return);
                                    break;
                                case 1:
                                    $n(d, d.return);
                                    var v = d.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        (r = d), (n = d.return);
                                        try {
                                            (t = r), (v.props = t.memoizedProps), (v.state = t.memoizedState), v.componentWillUnmount();
                                        } catch (y) {
                                            ie(r, n, y);
                                        }
                                    }
                                    break;
                                case 5:
                                    $n(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Tf(f);
                                        continue;
                                    }
                            }
                            g !== null ? ((g.return = d), (M = g)) : Tf(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                (i = f.stateNode),
                                    u
                                        ? ((o = i.style), typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : (o.display = "none"))
                                        : ((a = f.stateNode), (l = f.memoizedProps.style), (s = l != null && l.hasOwnProperty("display") ? l.display : null), (a.style.display = Hp("display", s)));
                            } catch (y) {
                                ie(e, e.return, y);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                            } catch (y) {
                                ie(e, e.return, y);
                            }
                    } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            Ze(t, e), st(e), r & 4 && kf(e);
            break;
        case 21:
            break;
        default:
            Ze(t, e), st(e);
    }
}
function st(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (gm(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(C(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Zr(i, ""), (r.flags &= -33));
                    var o = Pf(e);
                    Al(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Pf(e);
                    Sl(e, a, s);
                    break;
                default:
                    throw Error(C(161));
            }
        } catch (l) {
            ie(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function K0(e, t, n) {
    (M = e), wm(e);
}
function wm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
        var i = M,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || to;
            if (!s) {
                var a = i.alternate,
                    l = (a !== null && a.memoizedState !== null) || Se;
                a = to;
                var u = Se;
                if (((to = s), (Se = l) && !u)) for (M = i; M !== null; ) (s = M), (l = s.child), s.tag === 22 && s.memoizedState !== null ? jf(i) : l !== null ? ((l.return = s), (M = l)) : jf(i);
                for (; o !== null; ) (M = o), wm(o), (o = o.sibling);
                (M = i), (to = a), (Se = u);
            }
            Cf(e);
        } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (M = o)) : Cf(e);
    }
}
function Cf(e) {
    for (; M !== null; ) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Se || ws(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Se)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var o = t.updateQueue;
                            o !== null && uf(t, o, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                uf(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && ti(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(C(163));
                    }
                Se || (t.flags & 512 && xl(t));
            } catch (d) {
                ie(t, t.return, d);
            }
        }
        if (t === e) {
            M = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function Tf(e) {
    for (; M !== null; ) {
        var t = M;
        if (t === e) {
            M = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function jf(e) {
    for (; M !== null; ) {
        var t = M;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ws(4, t);
                    } catch (l) {
                        ie(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            ie(t, i, l);
                        }
                    }
                    var o = t.return;
                    try {
                        xl(t);
                    } catch (l) {
                        ie(t, o, l);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        xl(t);
                    } catch (l) {
                        ie(t, s, l);
                    }
            }
        } catch (l) {
            ie(t, t.return, l);
        }
        if (t === e) {
            M = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (M = a);
            break;
        }
        M = t.return;
    }
}
var q0 = Math.ceil,
    Yo = jt.ReactCurrentDispatcher,
    Iu = jt.ReactCurrentOwner,
    Ye = jt.ReactCurrentBatchConfig,
    V = 0,
    pe = null,
    ae = null,
    ge = 0,
    Ne = 0,
    Yn = on(0),
    fe = 0,
    di = null,
    Cn = 0,
    xs = 0,
    _u = 0,
    Wr = null,
    je = null,
    Nu = 0,
    dr = 1 / 0,
    mt = null,
    Ko = !1,
    El = null,
    Gt = null,
    no = !1,
    zt = null,
    qo = 0,
    Qr = 0,
    Pl = null,
    Eo = -1,
    Po = 0;
function ke() {
    return V & 6 ? oe() : Eo !== -1 ? Eo : (Eo = oe());
}
function $t(e) {
    return e.mode & 1 ? (V & 2 && ge !== 0 ? ge & -ge : I0.transition !== null ? (Po === 0 && (Po = nh()), Po) : ((e = z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uh(e.type))), e)) : 1;
}
function nt(e, t, n, r) {
    if (50 < Qr) throw ((Qr = 0), (Pl = null), Error(C(185)));
    Si(e, n, r), (!(V & 2) || e !== pe) && (e === pe && (!(V & 2) && (xs |= n), fe === 4 && Vt(e, ge)), Oe(e, r), n === 1 && V === 0 && !(t.mode & 1) && ((dr = oe() + 500), gs && sn()));
}
function Oe(e, t) {
    var n = e.callbackNode;
    Iy(e, t);
    var r = Io(e, e === pe ? ge : 0);
    if (r === 0) n !== null && Dc(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Dc(n), t === 1))
            e.tag === 0 ? O0(Mf.bind(null, e)) : jh(Mf.bind(null, e)),
                j0(function () {
                    !(V & 6) && sn();
                }),
                (n = null);
        else {
            switch (rh(r)) {
                case 1:
                    n = au;
                    break;
                case 4:
                    n = eh;
                    break;
                case 16:
                    n = Oo;
                    break;
                case 536870912:
                    n = th;
                    break;
                default:
                    n = Oo;
            }
            n = Tm(n, xm.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function xm(e, t) {
    if (((Eo = -1), (Po = 0), V & 6)) throw Error(C(327));
    var n = e.callbackNode;
    if (ir() && e.callbackNode !== n) return null;
    var r = Io(e, e === pe ? ge : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Zo(e, r);
    else {
        t = r;
        var i = V;
        V |= 2;
        var o = Am();
        (pe !== e || ge !== t) && ((mt = null), (dr = oe() + 500), Sn(e, t));
        do
            try {
                J0();
                break;
            } catch (a) {
                Sm(e, a);
            }
        while (1);
        xu(), (Yo.current = o), (V = i), ae !== null ? (t = 0) : ((pe = null), (ge = 0), (t = fe));
    }
    if (t !== 0) {
        if ((t === 2 && ((i = Za(e)), i !== 0 && ((r = i), (t = kl(e, i)))), t === 1)) throw ((n = di), Sn(e, 0), Vt(e, r), Oe(e, oe()), n);
        if (t === 6) Vt(e, r);
        else {
            if (((i = e.current.alternate), !(r & 30) && !Z0(i) && ((t = Zo(e, r)), t === 2 && ((o = Za(e)), o !== 0 && ((r = o), (t = kl(e, o)))), t === 1))) throw ((n = di), Sn(e, 0), Vt(e, r), Oe(e, oe()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(C(345));
                case 2:
                    hn(e, je, mt);
                    break;
                case 3:
                    if ((Vt(e, r), (r & 130023424) === r && ((t = Nu + 500 - oe()), 10 < t))) {
                        if (Io(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            ke(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = ol(hn.bind(null, e, je, mt), t);
                        break;
                    }
                    hn(e, je, mt);
                    break;
                case 4:
                    if ((Vt(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var s = 31 - tt(r);
                        (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
                    }
                    if (((r = i), (r = oe() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * q0(r / 1960)) - r), 10 < r)) {
                        e.timeoutHandle = ol(hn.bind(null, e, je, mt), r);
                        break;
                    }
                    hn(e, je, mt);
                    break;
                case 5:
                    hn(e, je, mt);
                    break;
                default:
                    throw Error(C(329));
            }
        }
    }
    return Oe(e, oe()), e.callbackNode === n ? xm.bind(null, e) : null;
}
function kl(e, t) {
    var n = Wr;
    return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), (e = Zo(e, t)), e !== 2 && ((t = je), (je = n), t !== null && Cl(t)), e;
}
function Cl(e) {
    je === null ? (je = e) : je.push.apply(je, e);
}
function Z0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!rt(o(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Vt(e, t) {
    for (t &= ~_u, t &= ~xs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - tt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Mf(e) {
    if (V & 6) throw Error(C(327));
    ir();
    var t = Io(e, 0);
    if (!(t & 1)) return Oe(e, oe()), null;
    var n = Zo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Za(e);
        r !== 0 && ((t = r), (n = kl(e, r)));
    }
    if (n === 1) throw ((n = di), Sn(e, 0), Vt(e, t), Oe(e, oe()), n);
    if (n === 6) throw Error(C(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), hn(e, je, mt), Oe(e, oe()), null;
}
function Du(e, t) {
    var n = V;
    V |= 1;
    try {
        return e(t);
    } finally {
        (V = n), V === 0 && ((dr = oe() + 500), gs && sn());
    }
}
function Tn(e) {
    zt !== null && zt.tag === 0 && !(V & 6) && ir();
    var t = V;
    V |= 1;
    var n = Ye.transition,
        r = z;
    try {
        if (((Ye.transition = null), (z = 1), e)) return e();
    } finally {
        (z = r), (Ye.transition = n), (V = t), !(V & 6) && sn();
    }
}
function Vu() {
    (Ne = Yn.current), U(Yn);
}
function Sn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), T0(n)), ae !== null))
        for (n = ae.return; n !== null; ) {
            var r = n;
            switch ((vu(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Fo();
                    break;
                case 3:
                    cr(), U(Re), U(Ae), Cu();
                    break;
                case 5:
                    ku(r);
                    break;
                case 4:
                    cr();
                    break;
                case 13:
                    U(X);
                    break;
                case 19:
                    U(X);
                    break;
                case 10:
                    Su(r.type._context);
                    break;
                case 22:
                case 23:
                    Vu();
            }
            n = n.return;
        }
    if (((pe = e), (ae = e = Yt(e.current, null)), (ge = Ne = t), (fe = 0), (di = null), (_u = xs = Cn = 0), (je = Wr = null), yn !== null)) {
        for (t = 0; t < yn.length; t++)
            if (((n = yn[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    (o.next = i), (r.next = s);
                }
                n.pending = r;
            }
        yn = null;
    }
    return e;
}
function Sm(e, t) {
    do {
        var n = ae;
        try {
            if ((xu(), (xo.current = $o), Go)) {
                for (var r = te.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                Go = !1;
            }
            if (((kn = 0), (de = ue = te = null), (Ur = !1), (ui = 0), (Iu.current = null), n === null || n.return === null)) {
                (fe = 1), (di = t), (ae = null);
                break;
            }
            e: {
                var o = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (((t = ge), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
                    var u = l,
                        c = a,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? ((c.updateQueue = d.updateQueue), (c.memoizedState = d.memoizedState), (c.lanes = d.lanes)) : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var g = gf(s);
                    if (g !== null) {
                        (g.flags &= -257), vf(g, s, a, o, t), g.mode & 1 && mf(o, u, t), (t = g), (l = u);
                        var v = t.updateQueue;
                        if (v === null) {
                            var y = new Set();
                            y.add(l), (t.updateQueue = y);
                        } else v.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            mf(o, u, t), Fu();
                            break e;
                        }
                        l = Error(C(426));
                    }
                } else if ($ && a.mode & 1) {
                    var E = gf(s);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), vf(E, s, a, o, t), yu(fr(l, a));
                        break e;
                    }
                }
                (o = l = fr(l, a)), fe !== 4 && (fe = 2), Wr === null ? (Wr = [o]) : Wr.push(o), (o = s);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var h = im(o, l, t);
                            lf(o, h);
                            break e;
                        case 1:
                            a = l;
                            var p = o.type,
                                m = o.stateNode;
                            if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || (m !== null && typeof m.componentDidCatch == "function" && (Gt === null || !Gt.has(m))))) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var w = om(o, a, t);
                                lf(o, w);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Pm(n);
        } catch (A) {
            (t = A), ae === n && n !== null && (ae = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Am() {
    var e = Yo.current;
    return (Yo.current = $o), e === null ? $o : e;
}
function Fu() {
    (fe === 0 || fe === 3 || fe === 2) && (fe = 4), pe === null || (!(Cn & 268435455) && !(xs & 268435455)) || Vt(pe, ge);
}
function Zo(e, t) {
    var n = V;
    V |= 2;
    var r = Am();
    (pe !== e || ge !== t) && ((mt = null), Sn(e, t));
    do
        try {
            X0();
            break;
        } catch (i) {
            Sm(e, i);
        }
    while (1);
    if ((xu(), (V = n), (Yo.current = r), ae !== null)) throw Error(C(261));
    return (pe = null), (ge = 0), fe;
}
function X0() {
    for (; ae !== null; ) Em(ae);
}
function J0() {
    for (; ae !== null && !Py(); ) Em(ae);
}
function Em(e) {
    var t = Cm(e.alternate, e, Ne);
    (e.memoizedProps = e.pendingProps), t === null ? Pm(e) : (ae = t), (Iu.current = null);
}
function Pm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = G0(n, t)), n !== null)) {
                (n.flags &= 32767), (ae = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (fe = 6), (ae = null);
                return;
            }
        } else if (((n = Q0(n, t, Ne)), n !== null)) {
            ae = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            ae = t;
            return;
        }
        ae = t = e;
    } while (t !== null);
    fe === 0 && (fe = 5);
}
function hn(e, t, n) {
    var r = z,
        i = Ye.transition;
    try {
        (Ye.transition = null), (z = 1), e1(e, t, n, r);
    } finally {
        (Ye.transition = i), (z = r);
    }
    return null;
}
function e1(e, t, n, r) {
    do ir();
    while (zt !== null);
    if (V & 6) throw Error(C(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(C(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (_y(e, o),
        e === pe && ((ae = pe = null), (ge = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            no ||
            ((no = !0),
            Tm(Oo, function () {
                return ir(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = Ye.transition), (Ye.transition = null);
        var s = z;
        z = 1;
        var a = V;
        (V |= 4), (Iu.current = null), Y0(e, n), ym(n, e), x0(rl), (_o = !!nl), (rl = nl = null), (e.current = n), K0(n), ky(), (V = a), (z = s), (Ye.transition = o);
    } else e.current = n;
    if ((no && ((no = !1), (zt = e), (qo = i)), (o = e.pendingLanes), o === 0 && (Gt = null), jy(n.stateNode), Oe(e, oe()), t !== null))
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Ko) throw ((Ko = !1), (e = El), (El = null), e);
    return qo & 1 && e.tag !== 0 && ir(), (o = e.pendingLanes), o & 1 ? (e === Pl ? Qr++ : ((Qr = 0), (Pl = e))) : (Qr = 0), sn(), null;
}
function ir() {
    if (zt !== null) {
        var e = rh(qo),
            t = Ye.transition,
            n = z;
        try {
            if (((Ye.transition = null), (z = 16 > e ? 16 : e), zt === null)) var r = !1;
            else {
                if (((e = zt), (zt = null), (qo = 0), V & 6)) throw Error(C(331));
                var i = V;
                for (V |= 4, M = e.current; M !== null; ) {
                    var o = M,
                        s = o.child;
                    if (M.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (M = u; M !== null; ) {
                                    var c = M;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hr(8, c, o);
                                    }
                                    var f = c.child;
                                    if (f !== null) (f.return = c), (M = f);
                                    else
                                        for (; M !== null; ) {
                                            c = M;
                                            var d = c.sibling,
                                                g = c.return;
                                            if ((mm(c), c === u)) {
                                                M = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                (d.return = g), (M = d);
                                                break;
                                            }
                                            M = g;
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var y = v.child;
                                if (y !== null) {
                                    v.child = null;
                                    do {
                                        var E = y.sibling;
                                        (y.sibling = null), (y = E);
                                    } while (y !== null);
                                }
                            }
                            M = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (M = s);
                    else
                        e: for (; M !== null; ) {
                            if (((o = M), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hr(9, o, o.return);
                                }
                            var h = o.sibling;
                            if (h !== null) {
                                (h.return = o.return), (M = h);
                                break e;
                            }
                            M = o.return;
                        }
                }
                var p = e.current;
                for (M = p; M !== null; ) {
                    s = M;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (M = m);
                    else
                        e: for (s = p; M !== null; ) {
                            if (((a = M), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ws(9, a);
                                    }
                                } catch (A) {
                                    ie(a, a.return, A);
                                }
                            if (a === s) {
                                M = null;
                                break e;
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                (w.return = a.return), (M = w);
                                break e;
                            }
                            M = a.return;
                        }
                }
                if (((V = i), sn(), ft && typeof ft.onPostCommitFiberRoot == "function"))
                    try {
                        ft.onPostCommitFiberRoot(fs, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (z = n), (Ye.transition = t);
        }
    }
    return !1;
}
function Rf(e, t, n) {
    (t = fr(n, t)), (t = im(e, t, 1)), (e = Qt(e, t, 1)), (t = ke()), e !== null && (Si(e, 1, t), Oe(e, t));
}
function ie(e, t, n) {
    if (e.tag === 3) Rf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Rf(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (Gt === null || !Gt.has(r)))) {
                    (e = fr(n, e)), (e = om(t, e, 1)), (t = Qt(t, e, 1)), (e = ke()), t !== null && (Si(t, 1, e), Oe(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function t1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), (t = ke()), (e.pingedLanes |= e.suspendedLanes & n), pe === e && (ge & n) === n && (fe === 4 || (fe === 3 && (ge & 130023424) === ge && 500 > oe() - Nu) ? Sn(e, 0) : (_u |= n)), Oe(e, t);
}
function km(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Gi), (Gi <<= 1), !(Gi & 130023424) && (Gi = 4194304)) : (t = 1));
    var n = ke();
    (e = kt(e, t)), e !== null && (Si(e, t, n), Oe(e, n));
}
function n1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), km(e, n);
}
function r1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(C(314));
    }
    r !== null && r.delete(t), km(e, n);
}
var Cm;
Cm = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Re.current) Me = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), W0(e, t, n);
            Me = !!(e.flags & 131072);
        }
    else (Me = !1), $ && t.flags & 1048576 && Mh(t, bo, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Ao(e, t), (e = t.pendingProps);
            var i = ar(t, Ae.current);
            rr(t, n), (i = ju(null, t, r, e, i, n));
            var o = Mu();
            return (
                (t.flags |= 1),
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Le(r) ? ((o = !0), zo(t)) : (o = !1),
                      (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                      Eu(t),
                      (i.updater = vs),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      dl(t, r, e, n),
                      (t = ml(null, t, r, !0, o, n)))
                    : ((t.tag = 0), $ && o && gu(t), Pe(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch ((Ao(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = o1(r)), (e = Xe(r, e)), i)) {
                    case 0:
                        t = hl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = xf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = yf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = wf(null, t, r, Xe(r.type, e), n);
                        break e;
                }
                throw Error(C(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Xe(r, i)), hl(e, t, r, i, n);
        case 1:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Xe(r, i)), xf(e, t, r, i, n);
        case 3:
            e: {
                if ((um(t), e === null)) throw Error(C(387));
                (r = t.pendingProps), (o = t.memoizedState), (i = o.element), Ih(e, t), Wo(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated))
                    if (((o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }), (t.updateQueue.baseState = o), (t.memoizedState = o), t.flags & 256)) {
                        (i = fr(Error(C(423)), t)), (t = Sf(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = fr(Error(C(424)), t)), (t = Sf(e, t, r, n, i));
                        break e;
                    } else for (De = Wt(t.stateNode.containerInfo.firstChild), Ve = t, $ = !0, et = null, n = Vh(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((lr(), r === i)) {
                        t = Ct(e, t, n);
                        break e;
                    }
                    Pe(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Fh(t),
                e === null && ul(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (s = i.children),
                il(r, i) ? (s = null) : o !== null && il(r, o) && (t.flags |= 32),
                lm(e, t),
                Pe(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && ul(t), null;
        case 13:
            return cm(e, t, n);
        case 4:
            return Pu(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = ur(t, null, r, n)) : Pe(e, t, r, n), t.child;
        case 11:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Xe(r, i)), yf(e, t, r, i, n);
        case 7:
            return Pe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Pe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Pe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (((r = t.type._context), (i = t.pendingProps), (o = t.memoizedProps), (s = i.value), B(Uo, r._currentValue), (r._currentValue = s), o !== null))
                    if (rt(o.value, s)) {
                        if (o.children === i.children && !Re.current) {
                            t = Ct(e, t, n);
                            break e;
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            (l = xt(-1, n & -n)), (l.tag = 2);
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l);
                                            }
                                        }
                                        (o.lanes |= n), (l = o.alternate), l !== null && (l.lanes |= n), cl(o.return, n, t), (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((s = o.return), s === null)) throw Error(C(341));
                                (s.lanes |= n), (a = s.alternate), a !== null && (a.lanes |= n), cl(s, n, t), (s = o.sibling);
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((o = s.sibling), o !== null)) {
                                        (o.return = s.return), (s = o);
                                        break;
                                    }
                                    s = s.return;
                                }
                            o = s;
                        }
                Pe(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (i = t.type), (r = t.pendingProps.children), rr(t, n), (i = Ke(i)), (r = r(i)), (t.flags |= 1), Pe(e, t, r, n), t.child;
        case 14:
            return (r = t.type), (i = Xe(r, t.pendingProps)), (i = Xe(r.type, i)), wf(e, t, r, i, n);
        case 15:
            return sm(e, t, t.type, t.pendingProps, n);
        case 17:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Xe(r, i)), Ao(e, t), (t.tag = 1), Le(r) ? ((e = !0), zo(t)) : (e = !1), rr(t, n), Nh(t, r, i), dl(t, r, i, n), ml(null, t, r, !0, e, n);
        case 19:
            return fm(e, t, n);
        case 22:
            return am(e, t, n);
    }
    throw Error(C(156, t.tag));
};
function Tm(e, t) {
    return Jp(e, t);
}
function i1(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ge(e, t, n, r) {
    return new i1(e, t, n, r);
}
function zu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function o1(e) {
    if (typeof e == "function") return zu(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === iu)) return 11;
        if (e === ou) return 14;
    }
    return 2;
}
function Yt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Ge(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function ko(e, t, n, r, i, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) zu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case Fn:
                return An(n.children, i, o, t);
            case ru:
                (s = 8), (i |= 8);
                break;
            case Da:
                return (e = Ge(12, n, t, i | 2)), (e.elementType = Da), (e.lanes = o), e;
            case Va:
                return (e = Ge(13, n, t, i)), (e.elementType = Va), (e.lanes = o), e;
            case Fa:
                return (e = Ge(19, n, t, i)), (e.elementType = Fa), (e.lanes = o), e;
            case Dp:
                return Ss(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case _p:
                            s = 10;
                            break e;
                        case Np:
                            s = 9;
                            break e;
                        case iu:
                            s = 11;
                            break e;
                        case ou:
                            s = 14;
                            break e;
                        case It:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(C(130, e == null ? e : typeof e, ""));
        }
    return (t = Ge(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function An(e, t, n, r) {
    return (e = Ge(7, e, r, t)), (e.lanes = n), e;
}
function Ss(e, t, n, r) {
    return (e = Ge(22, e, r, t)), (e.elementType = Dp), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function ha(e, t, n) {
    return (e = Ge(6, e, null, t)), (e.lanes = n), e;
}
function ma(e, t, n) {
    return (t = Ge(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function s1(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Ks(0)),
        (this.expirationTimes = Ks(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = Ks(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function Bu(e, t, n, r, i, o, s, a, l) {
    return (
        (e = new s1(e, t, n, a, l)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Ge(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
        Eu(o),
        e
    );
}
function a1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function jm(e) {
    if (!e) return en;
    e = e._reactInternals;
    e: {
        if (Rn(e) !== e || e.tag !== 1) throw Error(C(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Le(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(C(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Le(n)) return Th(e, n, t);
    }
    return t;
}
function Mm(e, t, n, r, i, o, s, a, l) {
    return (e = Bu(n, r, !0, e, i, o, s, a, l)), (e.context = jm(null)), (n = e.current), (r = ke()), (i = $t(n)), (o = xt(r, i)), (o.callback = t ?? null), Qt(n, o, i), (e.current.lanes = i), Si(e, i, r), Oe(e, r), e;
}
function As(e, t, n, r) {
    var i = t.current,
        o = ke(),
        s = $t(i);
    return (
        (n = jm(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = xt(o, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Qt(i, t, s)),
        e !== null && (nt(e, i, s, o), wo(e, i, s)),
        s
    );
}
function Xo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Lf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function bu(e, t) {
    Lf(e, t), (e = e.alternate) && Lf(e, t);
}
function l1() {
    return null;
}
var Rm =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Uu(e) {
    this._internalRoot = e;
}
Es.prototype.render = Uu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(C(409));
    As(e, t, null, null);
};
Es.prototype.unmount = Uu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tn(function () {
            As(null, e, null, null);
        }),
            (t[Pt] = null);
    }
};
function Es(e) {
    this._internalRoot = e;
}
Es.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = sh();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
        Dt.splice(n, 0, e), n === 0 && lh(e);
    }
};
function Hu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ps(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Of() {}
function u1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = Xo(s);
                o.call(u);
            };
        }
        var s = Mm(t, r, e, 0, null, !1, !1, "", Of);
        return (e._reactRootContainer = s), (e[Pt] = s.current), ii(e.nodeType === 8 ? e.parentNode : e), Tn(), s;
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = Xo(l);
            a.call(u);
        };
    }
    var l = Bu(e, 0, !1, null, null, !1, !1, "", Of);
    return (
        (e._reactRootContainer = l),
        (e[Pt] = l.current),
        ii(e.nodeType === 8 ? e.parentNode : e),
        Tn(function () {
            As(t, l, n, r);
        }),
        l
    );
}
function ks(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var l = Xo(s);
                a.call(l);
            };
        }
        As(t, s, e, i);
    } else s = u1(n, t, e, i, r);
    return Xo(s);
}
ih = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = _r(t.pendingLanes);
                n !== 0 && (lu(t, n | 1), Oe(t, oe()), !(V & 6) && ((dr = oe() + 500), sn()));
            }
            break;
        case 13:
            Tn(function () {
                var r = kt(e, 1);
                if (r !== null) {
                    var i = ke();
                    nt(r, e, 1, i);
                }
            }),
                bu(e, 1);
    }
};
uu = function (e) {
    if (e.tag === 13) {
        var t = kt(e, 134217728);
        if (t !== null) {
            var n = ke();
            nt(t, e, 134217728, n);
        }
        bu(e, 134217728);
    }
};
oh = function (e) {
    if (e.tag === 13) {
        var t = $t(e),
            n = kt(e, t);
        if (n !== null) {
            var r = ke();
            nt(n, e, t, r);
        }
        bu(e, t);
    }
};
sh = function () {
    return z;
};
ah = function (e, t) {
    var n = z;
    try {
        return (z = e), t();
    } finally {
        z = n;
    }
};
Ya = function (e, t, n) {
    switch (t) {
        case "input":
            if ((ba(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = ms(r);
                        if (!i) throw Error(C(90));
                        Fp(r), ba(r, i);
                    }
                }
            }
            break;
        case "textarea":
            Bp(e, n);
            break;
        case "select":
            (t = n.value), t != null && Jn(e, !!n.multiple, t, !1);
    }
};
$p = Du;
Yp = Tn;
var c1 = { usingClientEntryPoint: !1, Events: [Ei, Un, ms, Qp, Gp, Du] },
    Tr = { findFiberByHostInstance: vn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
    f1 = {
        bundleType: Tr.bundleType,
        version: Tr.version,
        rendererPackageName: Tr.rendererPackageName,
        rendererConfig: Tr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: jt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Zp(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Tr.findFiberByHostInstance || l1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ro.isDisabled && ro.supportsFiber)
        try {
            (fs = ro.inject(f1)), (ft = ro);
        } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c1;
Be.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Hu(t)) throw Error(C(200));
    return a1(e, t, null, n);
};
Be.createRoot = function (e, t) {
    if (!Hu(e)) throw Error(C(299));
    var n = !1,
        r = "",
        i = Rm;
    return (
        t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Bu(e, 1, !1, null, null, n, !1, r, i)),
        (e[Pt] = t.current),
        ii(e.nodeType === 8 ? e.parentNode : e),
        new Uu(t)
    );
};
Be.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(C(188)) : ((e = Object.keys(e).join(",")), Error(C(268, e)));
    return (e = Zp(t)), (e = e === null ? null : e.stateNode), e;
};
Be.flushSync = function (e) {
    return Tn(e);
};
Be.hydrate = function (e, t, n) {
    if (!Ps(t)) throw Error(C(200));
    return ks(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
    if (!Hu(e)) throw Error(C(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = "",
        s = Rm;
    if (
        (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Mm(t, null, e, 1, n ?? null, i, !1, o, s)),
        (e[Pt] = t.current),
        ii(e),
        r)
    )
        for (e = 0; e < r.length; e++) (n = r[e]), (i = n._getVersion), (i = i(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, i]) : t.mutableSourceEagerHydrationData.push(n, i);
    return new Es(t);
};
Be.render = function (e, t, n) {
    if (!Ps(t)) throw Error(C(200));
    return ks(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
    if (!Ps(e)) throw Error(C(40));
    return e._reactRootContainer
        ? (Tn(function () {
              ks(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Pt] = null);
              });
          }),
          !0)
        : !1;
};
Be.unstable_batchedUpdates = Du;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ps(n)) throw Error(C(200));
    if (e == null || e._reactInternals === void 0) throw Error(C(38));
    return ks(e, t, n, !1, r);
};
Be.version = "18.2.0-next-9e3b772b8-20220608";
function Lm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lm);
        } catch (e) {
            console.error(e);
        }
}
Lm(), (Mp.exports = Be);
var Om = Mp.exports,
    If = Om;
(_a.createRoot = If.createRoot), (_a.hydrateRoot = If.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
    return (
        (pi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        pi.apply(this, arguments)
    );
}
var Bt;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Bt || (Bt = {}));
const _f = "popstate";
function d1(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let { pathname: o, search: s, hash: a } = r.location;
        return Tl("", { pathname: o, search: s, hash: a }, (i.state && i.state.usr) || null, (i.state && i.state.key) || "default");
    }
    function n(r, i) {
        return typeof i == "string" ? i : Jo(i);
    }
    return h1(t, n, null, e);
}
function le(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Wu(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function p1() {
    return Math.random().toString(36).substr(2, 8);
}
function Nf(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function Tl(e, t, n, r) {
    return n === void 0 && (n = null), pi({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? vr(t) : t, { state: n, key: (t && t.key) || r || p1() });
}
function Jo(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function vr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function h1(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: o = !1 } = r,
        s = i.history,
        a = Bt.Pop,
        l = null,
        u = c();
    u == null && ((u = 0), s.replaceState(pi({}, s.state, { idx: u }), ""));
    function c() {
        return (s.state || { idx: null }).idx;
    }
    function f() {
        a = Bt.Pop;
        let E = c(),
            h = E == null ? null : E - u;
        (u = E), l && l({ action: a, location: y.location, delta: h });
    }
    function d(E, h) {
        a = Bt.Push;
        let p = Tl(y.location, E, h);
        n && n(p, E), (u = c() + 1);
        let m = Nf(p, u),
            w = y.createHref(p);
        try {
            s.pushState(m, "", w);
        } catch (A) {
            if (A instanceof DOMException && A.name === "DataCloneError") throw A;
            i.location.assign(w);
        }
        o && l && l({ action: a, location: y.location, delta: 1 });
    }
    function g(E, h) {
        a = Bt.Replace;
        let p = Tl(y.location, E, h);
        n && n(p, E), (u = c());
        let m = Nf(p, u),
            w = y.createHref(p);
        s.replaceState(m, "", w), o && l && l({ action: a, location: y.location, delta: 0 });
    }
    function v(E) {
        let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
            p = typeof E == "string" ? E : Jo(E);
        return le(h, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, h);
    }
    let y = {
        get action() {
            return a;
        },
        get location() {
            return e(i, s);
        },
        listen(E) {
            if (l) throw new Error("A history only accepts one active listener");
            return (
                i.addEventListener(_f, f),
                (l = E),
                () => {
                    i.removeEventListener(_f, f), (l = null);
                }
            );
        },
        createHref(E) {
            return t(i, E);
        },
        createURL: v,
        encodeLocation(E) {
            let h = v(E);
            return { pathname: h.pathname, search: h.search, hash: h.hash };
        },
        push: d,
        replace: g,
        go(E) {
            return s.go(E);
        },
    };
    return y;
}
var Df;
(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(Df || (Df = {}));
function m1(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? vr(t) : t,
        i = Qu(r.pathname || "/", n);
    if (i == null) return null;
    let o = Im(e);
    g1(o);
    let s = null;
    for (let a = 0; s == null && a < o.length; ++a) s = k1(o[a], j1(i));
    return s;
}
function Im(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (o, s, a) => {
        let l = { relativePath: a === void 0 ? o.path || "" : a, caseSensitive: o.caseSensitive === !0, childrenIndex: s, route: o };
        l.relativePath.startsWith("/") &&
            (le(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
            (l.relativePath = l.relativePath.slice(r.length)));
        let u = Kt([r, l.relativePath]),
            c = n.concat(l);
        o.children && o.children.length > 0 && (le(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Im(o.children, t, c, u)),
            !(o.path == null && !o.index) && t.push({ path: u, score: E1(u, o.index), routesMeta: c });
    };
    return (
        e.forEach((o, s) => {
            var a;
            if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
            else for (let l of _m(o.path)) i(o, s, l);
        }),
        t
    );
}
function _m(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        i = n.endsWith("?"),
        o = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let s = _m(r.join("/")),
        a = [];
    return a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))), i && a.push(...s), a.map((l) => (e.startsWith("/") && l === "" ? "/" : l));
}
function g1(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : P1(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const v1 = /^:\w+$/,
    y1 = 3,
    w1 = 2,
    x1 = 1,
    S1 = 10,
    A1 = -2,
    Vf = (e) => e === "*";
function E1(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Vf) && (r += A1), t && (r += w1), n.filter((i) => !Vf(i)).reduce((i, o) => i + (v1.test(o) ? y1 : o === "" ? x1 : S1), r);
}
function P1(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function k1(e, t) {
    let { routesMeta: n } = e,
        r = {},
        i = "/",
        o = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s],
            l = s === n.length - 1,
            u = i === "/" ? t : t.slice(i.length) || "/",
            c = C1({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
        if (!c) return null;
        Object.assign(r, c.params);
        let f = a.route;
        o.push({ params: r, pathname: Kt([i, c.pathname]), pathnameBase: O1(Kt([i, c.pathnameBase])), route: f }), c.pathnameBase !== "/" && (i = Kt([i, c.pathnameBase]));
    }
    return o;
}
function C1(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = T1(e.path, e.caseSensitive, e.end),
        i = t.match(n);
    if (!i) return null;
    let o = i[0],
        s = o.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((u, c, f) => {
            if (c === "*") {
                let d = a[f] || "";
                s = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1");
            }
            return (u[c] = M1(a[f] || "", c)), u;
        }, {}),
        pathname: o,
        pathnameBase: s,
        pattern: e,
    };
}
function T1(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Wu(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        i =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                .replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : n ? (i += "\\/*$") : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function j1(e) {
    try {
        return decodeURI(e);
    } catch (t) {
        return Wu(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
    }
}
function M1(e, t) {
    try {
        return decodeURIComponent(e);
    } catch (n) {
        return Wu(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
    }
}
function Qu(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function R1(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? vr(e) : e;
    return { pathname: n ? (n.startsWith("/") ? n : L1(n, t)) : t, search: I1(r), hash: _1(i) };
}
function L1(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((i) => {
            i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function ga(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
        ("`to." + n + "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function Nm(e) {
    return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Dm(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string"
        ? (i = vr(e))
        : ((i = pi({}, e)),
          le(!i.pathname || !i.pathname.includes("?"), ga("?", "pathname", "search", i)),
          le(!i.pathname || !i.pathname.includes("#"), ga("#", "pathname", "hash", i)),
          le(!i.search || !i.search.includes("#"), ga("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "",
        s = o ? "/" : i.pathname,
        a;
    if (r || s == null) a = n;
    else {
        let f = t.length - 1;
        if (s.startsWith("..")) {
            let d = s.split("/");
            for (; d[0] === ".."; ) d.shift(), (f -= 1);
            i.pathname = d.join("/");
        }
        a = f >= 0 ? t[f] : "/";
    }
    let l = R1(i, a),
        u = s && s !== "/" && s.endsWith("/"),
        c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Kt = (e) => e.join("/").replace(/\/\/+/g, "/"),
    O1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    I1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    _1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function N1(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Vm = ["post", "put", "patch", "delete"];
new Set(Vm);
const D1 = ["get", ...Vm];
new Set(D1);
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function es() {
    return (
        (es = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        es.apply(this, arguments)
    );
}
const Gu = S.createContext(null),
    V1 = S.createContext(null),
    yr = S.createContext(null),
    Cs = S.createContext(null),
    Ln = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Fm = S.createContext(null);
function F1(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    ki() || le(!1);
    let { basename: r, navigator: i } = S.useContext(yr),
        { hash: o, pathname: s, search: a } = bm(e, { relative: n }),
        l = s;
    return r !== "/" && (l = s === "/" ? r : Kt([r, s])), i.createHref({ pathname: l, search: a, hash: o });
}
function ki() {
    return S.useContext(Cs) != null;
}
function Ts() {
    return ki() || le(!1), S.useContext(Cs).location;
}
function zm(e) {
    S.useContext(yr).static || S.useLayoutEffect(e);
}
function Bm() {
    let { isDataRoute: e } = S.useContext(Ln);
    return e ? Z1() : z1();
}
function z1() {
    ki() || le(!1);
    let e = S.useContext(Gu),
        { basename: t, navigator: n } = S.useContext(yr),
        { matches: r } = S.useContext(Ln),
        { pathname: i } = Ts(),
        o = JSON.stringify(Nm(r).map((l) => l.pathnameBase)),
        s = S.useRef(!1);
    return (
        zm(() => {
            s.current = !0;
        }),
        S.useCallback(
            function (l, u) {
                if ((u === void 0 && (u = {}), !s.current)) return;
                if (typeof l == "number") {
                    n.go(l);
                    return;
                }
                let c = Dm(l, JSON.parse(o), i, u.relative === "path");
                e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Kt([t, c.pathname])), (u.replace ? n.replace : n.push)(c, u.state, u);
            },
            [t, n, o, i, e]
        )
    );
}
function bm(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { matches: r } = S.useContext(Ln),
        { pathname: i } = Ts(),
        o = JSON.stringify(Nm(r).map((s) => s.pathnameBase));
    return S.useMemo(() => Dm(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function B1(e, t) {
    return b1(e, t);
}
function b1(e, t, n) {
    ki() || le(!1);
    let { navigator: r } = S.useContext(yr),
        { matches: i } = S.useContext(Ln),
        o = i[i.length - 1],
        s = o ? o.params : {};
    o && o.pathname;
    let a = o ? o.pathnameBase : "/";
    o && o.route;
    let l = Ts(),
        u;
    if (t) {
        var c;
        let y = typeof t == "string" ? vr(t) : t;
        a === "/" || ((c = y.pathname) != null && c.startsWith(a)) || le(!1), (u = y);
    } else u = l;
    let f = u.pathname || "/",
        d = a === "/" ? f : f.slice(a.length) || "/",
        g = m1(e, { pathname: d }),
        v = G1(
            g &&
                g.map((y) =>
                    Object.assign({}, y, {
                        params: Object.assign({}, s, y.params),
                        pathname: Kt([a, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
                        pathnameBase: y.pathnameBase === "/" ? a : Kt([a, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase]),
                    })
                ),
            i,
            n
        );
    return t && v ? S.createElement(Cs.Provider, { value: { location: es({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u), navigationType: Bt.Pop } }, v) : v;
}
function U1() {
    let e = q1(),
        t = N1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
        o = null;
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? S.createElement("pre", { style: i }, n) : null, o);
}
const H1 = S.createElement(U1, null);
class W1 extends S.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : { error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n);
    }
    render() {
        return this.state.error ? S.createElement(Ln.Provider, { value: this.props.routeContext }, S.createElement(Fm.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
    }
}
function Q1(e) {
    let { routeContext: t, match: n, children: r } = e,
        i = S.useContext(Gu);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), S.createElement(Ln.Provider, { value: t }, r);
}
function G1(e, t, n) {
    var r;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
        var i;
        if ((i = n) != null && i.errors) e = n.matches;
        else return null;
    }
    let o = e,
        s = (r = n) == null ? void 0 : r.errors;
    if (s != null) {
        let a = o.findIndex((l) => l.route.id && (s == null ? void 0 : s[l.route.id]));
        a >= 0 || le(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
    }
    return o.reduceRight((a, l, u) => {
        let c = l.route.id ? (s == null ? void 0 : s[l.route.id]) : null,
            f = null;
        n && (f = l.route.errorElement || H1);
        let d = t.concat(o.slice(0, u + 1)),
            g = () => {
                let v;
                return (
                    c ? (v = f) : l.route.Component ? (v = S.createElement(l.route.Component, null)) : l.route.element ? (v = l.route.element) : (v = a),
                    S.createElement(Q1, { match: l, routeContext: { outlet: a, matches: d, isDataRoute: n != null }, children: v })
                );
            };
        return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
            ? S.createElement(W1, { location: n.location, revalidation: n.revalidation, component: f, error: c, children: g(), routeContext: { outlet: null, matches: d, isDataRoute: !0 } })
            : g();
    }, null);
}
var jl;
(function (e) {
    (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate");
})(jl || (jl = {}));
var hi;
(function (e) {
    (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId");
})(hi || (hi = {}));
function $1(e) {
    let t = S.useContext(Gu);
    return t || le(!1), t;
}
function Y1(e) {
    let t = S.useContext(V1);
    return t || le(!1), t;
}
function K1(e) {
    let t = S.useContext(Ln);
    return t || le(!1), t;
}
function Um(e) {
    let t = K1(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || le(!1), n.route.id;
}
function q1() {
    var e;
    let t = S.useContext(Fm),
        n = Y1(hi.UseRouteError),
        r = Um(hi.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Z1() {
    let { router: e } = $1(jl.UseNavigateStable),
        t = Um(hi.UseNavigateStable),
        n = S.useRef(!1);
    return (
        zm(() => {
            n.current = !0;
        }),
        S.useCallback(
            function (i, o) {
                o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, es({ fromRouteId: t }, o)));
            },
            [e, t]
        )
    );
}
function Ml(e) {
    le(!1);
}
function X1(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: i = Bt.Pop, navigator: o, static: s = !1 } = e;
    ki() && le(!1);
    let a = t.replace(/^\/*/, "/"),
        l = S.useMemo(() => ({ basename: a, navigator: o, static: s }), [a, o, s]);
    typeof r == "string" && (r = vr(r));
    let { pathname: u = "/", search: c = "", hash: f = "", state: d = null, key: g = "default" } = r,
        v = S.useMemo(() => {
            let y = Qu(u, a);
            return y == null ? null : { location: { pathname: y, search: c, hash: f, state: d, key: g }, navigationType: i };
        }, [a, u, c, f, d, g, i]);
    return v == null ? null : S.createElement(yr.Provider, { value: l }, S.createElement(Cs.Provider, { children: n, value: v }));
}
function J1(e) {
    let { children: t, location: n } = e;
    return B1(Rl(t), n);
}
var Ff;
(function (e) {
    (e[(e.pending = 0)] = "pending"), (e[(e.success = 1)] = "success"), (e[(e.error = 2)] = "error");
})(Ff || (Ff = {}));
new Promise(() => {});
function Rl(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        S.Children.forEach(e, (r, i) => {
            if (!S.isValidElement(r)) return;
            let o = [...t, i];
            if (r.type === S.Fragment) {
                n.push.apply(n, Rl(r.props.children, o));
                return;
            }
            r.type !== Ml && le(!1), !r.props.index || !r.props.children || le(!1);
            let s = {
                id: r.props.id || o.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (s.children = Rl(r.props.children, o)), n.push(s);
        }),
        n
    );
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ll() {
    return (
        (Ll = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Ll.apply(this, arguments)
    );
}
function ew(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i,
        o;
    for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
}
function tw(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function nw(e, t) {
    return e.button === 0 && (!t || t === "_self") && !tw(e);
}
const rw = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
    iw = "startTransition",
    zf = ny[iw];
function ow(e) {
    let { basename: t, children: n, future: r, window: i } = e,
        o = S.useRef();
    o.current == null && (o.current = d1({ window: i, v5Compat: !0 }));
    let s = o.current,
        [a, l] = S.useState({ action: s.action, location: s.location }),
        { v7_startTransition: u } = r || {},
        c = S.useCallback(
            (f) => {
                u && zf ? zf(() => l(f)) : l(f);
            },
            [l, u]
        );
    return S.useLayoutEffect(() => s.listen(c), [s, c]), S.createElement(X1, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: s });
}
const sw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    aw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    lw = S.forwardRef(function (t, n) {
        let { onClick: r, relative: i, reloadDocument: o, replace: s, state: a, target: l, to: u, preventScrollReset: c } = t,
            f = ew(t, rw),
            { basename: d } = S.useContext(yr),
            g,
            v = !1;
        if (typeof u == "string" && aw.test(u) && ((g = u), sw))
            try {
                let p = new URL(window.location.href),
                    m = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
                    w = Qu(m.pathname, d);
                m.origin === p.origin && w != null ? (u = w + m.search + m.hash) : (v = !0);
            } catch {}
        let y = F1(u, { relative: i }),
            E = uw(u, { replace: s, state: a, target: l, preventScrollReset: c, relative: i });
        function h(p) {
            r && r(p), p.defaultPrevented || E(p);
        }
        return S.createElement("a", Ll({}, f, { href: g || y, onClick: v || o ? r : h, ref: n, target: l }));
    });
var Bf;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"), (e.UseSubmit = "useSubmit"), (e.UseSubmitFetcher = "useSubmitFetcher"), (e.UseFetcher = "useFetcher");
})(Bf || (Bf = {}));
var bf;
(function (e) {
    (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(bf || (bf = {}));
function uw(e, t) {
    let { target: n, replace: r, state: i, preventScrollReset: o, relative: s } = t === void 0 ? {} : t,
        a = Bm(),
        l = Ts(),
        u = bm(e, { relative: s });
    return S.useCallback(
        (c) => {
            if (nw(c, n)) {
                c.preventDefault();
                let f = r !== void 0 ? r : Jo(l) === Jo(u);
                a(e, { replace: f, state: i, preventScrollReset: o, relative: s });
            }
        },
        [l, a, u, r, i, n, e, o, s]
    );
}
const Hm = S.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" }),
    js = S.createContext({}),
    $u = S.createContext(null),
    Ms = typeof document < "u",
    Uf = Ms ? S.useLayoutEffect : S.useEffect,
    Wm = S.createContext({ strict: !1 });
function cw(e, t, n, r) {
    const { visualElement: i } = S.useContext(js),
        o = S.useContext(Wm),
        s = S.useContext($u),
        a = S.useContext(Hm).reducedMotion,
        l = S.useRef();
    (r = r || o.renderer), !l.current && r && (l.current = r(e, { visualState: t, parent: i, props: n, presenceContext: s, blockInitialAnimation: s ? s.initial === !1 : !1, reducedMotionConfig: a }));
    const u = l.current;
    return (
        S.useInsertionEffect(() => {
            u && u.update(n, s);
        }),
        Uf(() => {
            u && u.render();
        }),
        S.useEffect(() => {
            u && u.updateFeatures();
        }),
        (window.HandoffAppearAnimations ? Uf : S.useEffect)(() => {
            u && u.animationState && u.animationState.animateChanges();
        }),
        u
    );
}
function Kn(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function fw(e, t, n) {
    return S.useCallback(
        (r) => {
            r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Kn(n) && (n.current = r));
        },
        [t]
    );
}
function mi(e) {
    return typeof e == "string" || Array.isArray(e);
}
function Rs(e) {
    return typeof e == "object" && typeof e.start == "function";
}
const Yu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Ku = ["initial", ...Yu];
function Ls(e) {
    return Rs(e.animate) || Ku.some((t) => mi(e[t]));
}
function Qm(e) {
    return !!(Ls(e) || e.variants);
}
function dw(e, t) {
    if (Ls(e)) {
        const { initial: n, animate: r } = e;
        return { initial: n === !1 || mi(n) ? n : void 0, animate: mi(r) ? r : void 0 };
    }
    return e.inherit !== !1 ? t : {};
}
function pw(e) {
    const { initial: t, animate: n } = dw(e, S.useContext(js));
    return S.useMemo(() => ({ initial: t, animate: n }), [Hf(t), Hf(n)]);
}
function Hf(e) {
    return Array.isArray(e) ? e.join(" ") : e;
}
const Wf = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
    },
    gi = {};
for (const e in Wf) gi[e] = { isEnabled: (t) => Wf[e].some((n) => !!t[n]) };
function hw(e) {
    for (const t in e) gi[t] = { ...gi[t], ...e[t] };
}
const Gm = S.createContext({}),
    $m = S.createContext({}),
    mw = Symbol.for("motionComponentSymbol");
function gw({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    e && hw(e);
    function o(a, l) {
        let u;
        const c = { ...S.useContext(Hm), ...a, layoutId: vw(a) },
            { isStatic: f } = c,
            d = pw(a),
            g = r(a, f);
        if (!f && Ms) {
            d.visualElement = cw(i, g, c, t);
            const v = S.useContext($m),
                y = S.useContext(Wm).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, y, e, v));
        }
        return S.createElement(js.Provider, { value: d }, u && d.visualElement ? S.createElement(u, { visualElement: d.visualElement, ...c }) : null, n(i, a, fw(g, d.visualElement, l), g, f, d.visualElement));
    }
    const s = S.forwardRef(o);
    return (s[mw] = i), s;
}
function vw({ layoutId: e }) {
    const t = S.useContext(Gm).id;
    return t && e !== void 0 ? t + "-" + e : e;
}
function yw(e) {
    function t(r, i = {}) {
        return gw(e(r, i));
    }
    if (typeof Proxy > "u") return t;
    const n = new Map();
    return new Proxy(t, { get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)) });
}
const ww = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function qu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(ww.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const ts = {};
function xw(e) {
    Object.assign(ts, e);
}
const Ci = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    On = new Set(Ci);
function Ym(e, { layout: t, layoutId: n }) {
    return On.has(e) || e.startsWith("origin") || ((t || n !== void 0) && (!!ts[e] || e === "opacity"));
}
const Ie = (e) => !!(e && e.getVelocity),
    Sw = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
    Aw = Ci.length;
function Ew(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
    let o = "";
    for (let s = 0; s < Aw; s++) {
        const a = Ci[s];
        if (e[a] !== void 0) {
            const l = Sw[a] || a;
            o += `${l}(${e[a]}) `;
        }
    }
    return t && !e.z && (o += "translateZ(0)"), (o = o.trim()), i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"), o;
}
const Km = (e) => (t) => typeof t == "string" && t.startsWith(e),
    qm = Km("--"),
    Ol = Km("var(--"),
    Pw = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    kw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
    tn = (e, t, n) => Math.min(Math.max(n, e), t),
    In = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e },
    Gr = { ...In, transform: (e) => tn(0, 1, e) },
    io = { ...In, default: 1 },
    $r = (e) => Math.round(e * 1e5) / 1e5,
    Os = /(-)?([\d]*\.?[\d])+/g,
    Zm = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    Cw = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ti(e) {
    return typeof e == "string";
}
const ji = (e) => ({ test: (t) => Ti(t) && t.endsWith(e) && t.split(" ").length === 1, parse: parseFloat, transform: (t) => `${t}${e}` }),
    Ot = ji("deg"),
    pt = ji("%"),
    O = ji("px"),
    Tw = ji("vh"),
    jw = ji("vw"),
    Qf = { ...pt, parse: (e) => pt.parse(e) / 100, transform: (e) => pt.transform(e * 100) },
    Gf = { ...In, transform: Math.round },
    Xm = {
        borderWidth: O,
        borderTopWidth: O,
        borderRightWidth: O,
        borderBottomWidth: O,
        borderLeftWidth: O,
        borderRadius: O,
        radius: O,
        borderTopLeftRadius: O,
        borderTopRightRadius: O,
        borderBottomRightRadius: O,
        borderBottomLeftRadius: O,
        width: O,
        maxWidth: O,
        height: O,
        maxHeight: O,
        size: O,
        top: O,
        right: O,
        bottom: O,
        left: O,
        padding: O,
        paddingTop: O,
        paddingRight: O,
        paddingBottom: O,
        paddingLeft: O,
        margin: O,
        marginTop: O,
        marginRight: O,
        marginBottom: O,
        marginLeft: O,
        rotate: Ot,
        rotateX: Ot,
        rotateY: Ot,
        rotateZ: Ot,
        scale: io,
        scaleX: io,
        scaleY: io,
        scaleZ: io,
        skew: Ot,
        skewX: Ot,
        skewY: Ot,
        distance: O,
        translateX: O,
        translateY: O,
        translateZ: O,
        x: O,
        y: O,
        z: O,
        perspective: O,
        transformPerspective: O,
        opacity: Gr,
        originX: Qf,
        originY: Qf,
        originZ: O,
        zIndex: Gf,
        fillOpacity: Gr,
        strokeOpacity: Gr,
        numOctaves: Gf,
    };
function Zu(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: a } = e;
    let l = !1,
        u = !1,
        c = !0;
    for (const f in t) {
        const d = t[f];
        if (qm(f)) {
            o[f] = d;
            continue;
        }
        const g = Xm[f],
            v = kw(d, g);
        if (On.has(f)) {
            if (((l = !0), (s[f] = v), !c)) continue;
            d !== (g.default || 0) && (c = !1);
        } else f.startsWith("origin") ? ((u = !0), (a[f] = v)) : (i[f] = v);
    }
    if ((t.transform || (l || r ? (i.transform = Ew(e.transform, n, c, r)) : i.transform && (i.transform = "none")), u)) {
        const { originX: f = "50%", originY: d = "50%", originZ: g = 0 } = a;
        i.transformOrigin = `${f} ${d} ${g}`;
    }
}
const Xu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Jm(e, t, n) {
    for (const r in t) !Ie(t[r]) && !Ym(r, n) && (e[r] = t[r]);
}
function Mw({ transformTemplate: e }, t, n) {
    return S.useMemo(() => {
        const r = Xu();
        return Zu(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
    }, [t]);
}
function Rw(e, t, n) {
    const r = e.style || {},
        i = {};
    return Jm(i, r, e), Object.assign(i, Mw(e, t, n)), e.transformValues ? e.transformValues(i) : i;
}
function Lw(e, t, n) {
    const r = {},
        i = Rw(e, t, n);
    return (
        e.drag && e.dragListener !== !1 && ((r.draggable = !1), (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"), (i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
        (r.style = i),
        r
    );
}
const Ow = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "ignoreStrict",
    "viewport",
]);
function ns(e) {
    return e.startsWith("while") || (e.startsWith("drag") && e !== "draggable") || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Ow.has(e);
}
let eg = (e) => !ns(e);
function Iw(e) {
    e && (eg = (t) => (t.startsWith("on") ? !ns(t) : e(t)));
}
try {
    Iw(require("@emotion/is-prop-valid").default);
} catch {}
function _w(e, t, n) {
    const r = {};
    for (const i in e) (i === "values" && typeof e.values == "object") || ((eg(i) || (n === !0 && ns(i)) || (!t && !ns(i)) || (e.draggable && i.startsWith("onDrag"))) && (r[i] = e[i]));
    return r;
}
function $f(e, t, n) {
    return typeof e == "string" ? e : O.transform(t + n * e);
}
function Nw(e, t, n) {
    const r = $f(t, e.x, e.width),
        i = $f(n, e.y, e.height);
    return `${r} ${i}`;
}
const Dw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    Vw = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Fw(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? Dw : Vw;
    e[o.offset] = O.transform(-r);
    const s = O.transform(t),
        a = O.transform(n);
    e[o.array] = `${s} ${a}`;
}
function Ju(e, { attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: a = 1, pathOffset: l = 0, ...u }, c, f, d) {
    if ((Zu(e, u, c, d), f)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
    }
    (e.attrs = e.style), (e.style = {});
    const { attrs: g, style: v, dimensions: y } = e;
    g.transform && (y && (v.transform = g.transform), delete g.transform),
        y && (i !== void 0 || o !== void 0 || v.transform) && (v.transformOrigin = Nw(y, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)),
        t !== void 0 && (g.x = t),
        n !== void 0 && (g.y = n),
        r !== void 0 && (g.scale = r),
        s !== void 0 && Fw(g, s, a, l, !1);
}
const tg = () => ({ ...Xu(), attrs: {} }),
    ec = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function zw(e, t, n, r) {
    const i = S.useMemo(() => {
        const o = tg();
        return Ju(o, t, { enableHardwareAcceleration: !1 }, ec(r), e.transformTemplate), { ...o.attrs, style: { ...o.style } };
    }, [t]);
    if (e.style) {
        const o = {};
        Jm(o, e.style, e), (i.style = { ...o, ...i.style });
    }
    return i;
}
function Bw(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
        const l = (qu(n) ? zw : Lw)(r, o, s, n),
            c = { ..._w(r, typeof n == "string", e), ...l, ref: i },
            { children: f } = r,
            d = S.useMemo(() => (Ie(f) ? f.get() : f), [f]);
        return S.createElement(n, { ...c, children: d });
    };
}
const tc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function ng(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o]);
}
const rg = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);
function ig(e, t, n, r) {
    ng(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(rg.has(i) ? i : tc(i), t.attrs[i]);
}
function nc(e, t) {
    const { style: n } = e,
        r = {};
    for (const i in n) (Ie(n[i]) || (t.style && Ie(t.style[i])) || Ym(i, e)) && (r[i] = n[i]);
    return r;
}
function og(e, t) {
    const n = nc(e, t);
    for (const r in e)
        if (Ie(e[r]) || Ie(t[r])) {
            const i = Ci.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = e[r];
        }
    return n;
}
function rc(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t;
}
function bw(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()), t.current;
}
const rs = (e) => Array.isArray(e),
    Uw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
    Hw = (e) => (rs(e) ? e[e.length - 1] || 0 : e);
function Co(e) {
    const t = Ie(e) ? e.get() : e;
    return Uw(t) ? t.toValue() : t;
}
function Ww({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
    const s = { latestValues: Qw(r, i, o, e), renderState: t() };
    return n && (s.mount = (a) => n(r, a, s)), s;
}
const sg = (e) => (t, n) => {
    const r = S.useContext(js),
        i = S.useContext($u),
        o = () => Ww(e, t, r, i);
    return n ? o() : bw(o);
};
function Qw(e, t, n, r) {
    const i = {},
        o = r(e, {});
    for (const d in o) i[d] = Co(o[d]);
    let { initial: s, animate: a } = e;
    const l = Ls(e),
        u = Qm(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    return (
        f &&
            typeof f != "boolean" &&
            !Rs(f) &&
            (Array.isArray(f) ? f : [f]).forEach((g) => {
                const v = rc(e, g);
                if (!v) return;
                const { transitionEnd: y, transition: E, ...h } = v;
                for (const p in h) {
                    let m = h[p];
                    if (Array.isArray(m)) {
                        const w = c ? m.length - 1 : 0;
                        m = m[w];
                    }
                    m !== null && (i[p] = m);
                }
                for (const p in y) i[p] = y[p];
            }),
        i
    );
}
const Gw = {
        useVisualState: sg({
            scrapeMotionValuesFromProps: og,
            createRenderState: tg,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
                } catch {
                    n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
                Ju(n, r, { enableHardwareAcceleration: !1 }, ec(t.tagName), e.transformTemplate), ig(t, n);
            },
        }),
    },
    $w = { useVisualState: sg({ scrapeMotionValuesFromProps: nc, createRenderState: Xu }) };
function Yw(e, { forwardMotionProps: t = !1 }, n, r) {
    return { ...(qu(e) ? Gw : $w), preloadedFeatures: n, useRender: Bw(t), createVisualElement: r, Component: e };
}
function wt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const ag = (e) => (e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1);
function Is(e, t = "page") {
    return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const Kw = (e) => (t) => ag(t) && e(t, Is(t));
function St(e, t, n, r) {
    return wt(e, t, Kw(n), r);
}
const qw = (e, t) => (n) => t(e(n)),
    qt = (...e) => e.reduce(qw);
function lg(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null;
        };
        return t === null ? ((t = e), n) : !1;
    };
}
const Yf = lg("dragHorizontal"),
    Kf = lg("dragVertical");
function ug(e) {
    let t = !1;
    if (e === "y") t = Kf();
    else if (e === "x") t = Yf();
    else {
        const n = Yf(),
            r = Kf();
        n && r
            ? (t = () => {
                  n(), r();
              })
            : (n && n(), r && r());
    }
    return t;
}
function cg() {
    const e = ug(!0);
    return e ? (e(), !1) : !0;
}
class an {
    constructor(t) {
        (this.isMounted = !1), (this.node = t);
    }
    update() {}
}
function Zw(e) {
    let t = [],
        n = [],
        r = 0,
        i = !1,
        o = !1;
    const s = new WeakSet(),
        a = {
            schedule: (l, u = !1, c = !1) => {
                const f = c && i,
                    d = f ? t : n;
                return u && s.add(l), d.indexOf(l) === -1 && (d.push(l), f && i && (r = t.length)), l;
            },
            cancel: (l) => {
                const u = n.indexOf(l);
                u !== -1 && n.splice(u, 1), s.delete(l);
            },
            process: (l) => {
                if (i) {
                    o = !0;
                    return;
                }
                if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
                    for (let u = 0; u < r; u++) {
                        const c = t[u];
                        c(l), s.has(c) && (a.schedule(c), e());
                    }
                (i = !1), o && ((o = !1), a.process(l));
            },
        };
    return a;
}
const Z = { delta: 0, timestamp: 0, isProcessing: !1 },
    Xw = 40;
let Il = !0,
    vi = !1;
const _s = ["read", "update", "preRender", "render", "postRender"],
    or = _s.reduce((e, t) => ((e[t] = Zw(() => (vi = !0))), e), {}),
    Jw = (e) => or[e].process(Z),
    fg = (e) => {
        (vi = !1), (Z.delta = Il ? 1e3 / 60 : Math.max(Math.min(e - Z.timestamp, Xw), 1)), (Z.timestamp = e), (Z.isProcessing = !0), _s.forEach(Jw), (Z.isProcessing = !1), vi && ((Il = !1), requestAnimationFrame(fg));
    },
    ex = () => {
        (vi = !0), (Il = !0), Z.isProcessing || requestAnimationFrame(fg);
    },
    ee = _s.reduce((e, t) => {
        const n = or[t];
        return (e[t] = (r, i = !1, o = !1) => (vi || ex(), n.schedule(r, i, o))), e;
    }, {});
function Tt(e) {
    _s.forEach((t) => or[t].cancel(e));
}
function qf(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
        r = "onHover" + (t ? "Start" : "End"),
        i = (o, s) => {
            if (o.type === "touch" || cg()) return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && ee.update(() => a[r](o, s));
        };
    return St(e.current, n, i, { passive: !e.getProps()[r] });
}
class tx extends an {
    mount() {
        this.unmount = qt(qf(this.node, !0), qf(this.node, !1));
    }
    unmount() {}
}
class nx extends an {
    constructor() {
        super(...arguments), (this.isActive = !1);
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible");
        } catch {
            t = !0;
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
    }
    mount() {
        this.unmount = qt(
            wt(this.node.current, "focus", () => this.onFocus()),
            wt(this.node.current, "blur", () => this.onBlur())
        );
    }
    unmount() {}
}
const dg = (e, t) => (t ? (e === t ? !0 : dg(e, t.parentElement)) : !1),
    ce = (e) => e;
function va(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, Is(n));
}
class rx extends an {
    constructor() {
        super(...arguments),
            (this.removeStartListeners = ce),
            (this.removeEndListeners = ce),
            (this.removeAccessibleListeners = ce),
            (this.startPointerPress = (t, n) => {
                if ((this.removeEndListeners(), this.isPressing)) return;
                const r = this.node.getProps(),
                    o = St(
                        window,
                        "pointerup",
                        (a, l) => {
                            if (!this.checkPressEnd()) return;
                            const { onTap: u, onTapCancel: c } = this.node.getProps();
                            ee.update(() => {
                                dg(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
                            });
                        },
                        { passive: !(r.onTap || r.onPointerUp) }
                    ),
                    s = St(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
                (this.removeEndListeners = qt(o, s)), this.startPress(t, n);
            }),
            (this.startAccessiblePress = () => {
                const t = (o) => {
                        if (o.key !== "Enter" || this.isPressing) return;
                        const s = (a) => {
                            a.key !== "Enter" ||
                                !this.checkPressEnd() ||
                                va("up", (l, u) => {
                                    const { onTap: c } = this.node.getProps();
                                    c && ee.update(() => c(l, u));
                                });
                        };
                        this.removeEndListeners(),
                            (this.removeEndListeners = wt(this.node.current, "keyup", s)),
                            va("down", (a, l) => {
                                this.startPress(a, l);
                            });
                    },
                    n = wt(this.node.current, "keydown", t),
                    r = () => {
                        this.isPressing && va("cancel", (o, s) => this.cancelPress(o, s));
                    },
                    i = wt(this.node.current, "blur", r);
                this.removeAccessibleListeners = qt(n, i);
            });
    }
    startPress(t, n) {
        this.isPressing = !0;
        const { onTapStart: r, whileTap: i } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && ee.update(() => r(t, n));
    }
    checkPressEnd() {
        return this.removeEndListeners(), (this.isPressing = !1), this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !cg();
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const { onTapCancel: r } = this.node.getProps();
        r && ee.update(() => r(t, n));
    }
    mount() {
        const t = this.node.getProps(),
            n = St(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }),
            r = wt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = qt(n, r);
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
    }
}
const _l = new WeakMap(),
    ya = new WeakMap(),
    ix = (e) => {
        const t = _l.get(e.target);
        t && t(e);
    },
    ox = (e) => {
        e.forEach(ix);
    };
function sx({ root: e, ...t }) {
    const n = e || document;
    ya.has(n) || ya.set(n, {});
    const r = ya.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(ox, { root: e, ...t })), r[i];
}
function ax(e, t, n) {
    const r = sx(t);
    return (
        _l.set(e, n),
        r.observe(e),
        () => {
            _l.delete(e), r.unobserve(e);
        }
    );
}
const lx = { some: 0, all: 1 };
class ux extends an {
    constructor() {
        super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps(),
            { root: n, margin: r, amount: i = "some", once: o } = t,
            s = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof i == "number" ? i : lx[i] },
            a = (l) => {
                const { isIntersecting: u } = l;
                if (this.isInView === u || ((this.isInView = u), o && !u && this.hasEnteredView)) return;
                u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
                const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
                    d = u ? c : f;
                d && d(l);
            };
        return ax(this.node.current, s, a);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(cx(t, n)) && this.startObserver();
    }
    unmount() {}
}
function cx({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
}
const fx = { inView: { Feature: ux }, tap: { Feature: rx }, focus: { Feature: nx }, hover: { Feature: tx } };
function pg(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
}
function dx(e) {
    const t = {};
    return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function px(e) {
    const t = {};
    return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Ns(e, t, n) {
    const r = e.getProps();
    return rc(r, t, n !== void 0 ? n : r.custom, dx(e), px(e));
}
const hx = "framerAppearId",
    mx = "data-" + tc(hx);
let gx = ce,
    ic = ce;
const Zt = (e) => e * 1e3,
    At = (e) => e / 1e3,
    vx = { current: !1 },
    hg = (e) => Array.isArray(e) && typeof e[0] == "number";
function mg(e) {
    return !!(!e || (typeof e == "string" && gg[e]) || hg(e) || (Array.isArray(e) && e.every(mg)));
}
const Dr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    gg = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Dr([0, 0.65, 0.55, 1]),
        circOut: Dr([0.55, 0, 1, 0.45]),
        backIn: Dr([0.31, 0.01, 0.66, -0.59]),
        backOut: Dr([0.33, 1.53, 0.69, 0.99]),
    };
function vg(e) {
    if (e) return hg(e) ? Dr(e) : Array.isArray(e) ? e.map(vg) : gg[e];
}
function yx(e, t, n, { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = { [t]: n };
    l && (u.offset = l);
    const c = vg(a);
    return Array.isArray(c) && (u.easing = c), e.animate(u, { delay: r, duration: i, easing: Array.isArray(c) ? "linear" : c, fill: "both", iterations: o + 1, direction: s === "reverse" ? "alternate" : "normal" });
}
const Zf = { waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate") },
    wa = {},
    yg = {};
for (const e in Zf) yg[e] = () => (wa[e] === void 0 && (wa[e] = Zf[e]()), wa[e]);
function wx(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r];
}
const wg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    xx = 1e-7,
    Sx = 12;
function Ax(e, t, n, r, i) {
    let o,
        s,
        a = 0;
    do (s = t + (n - t) / 2), (o = wg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
    while (Math.abs(o) > xx && ++a < Sx);
    return s;
}
function Mi(e, t, n, r) {
    if (e === t && n === r) return ce;
    const i = (o) => Ax(o, 0, 1, e, n);
    return (o) => (o === 0 || o === 1 ? o : wg(i(o), t, r));
}
const Ex = Mi(0.42, 0, 1, 1),
    Px = Mi(0, 0, 0.58, 1),
    xg = Mi(0.42, 0, 0.58, 1),
    kx = (e) => Array.isArray(e) && typeof e[0] != "number",
    Sg = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
    Ag = (e) => (t) => 1 - e(1 - t),
    Eg = (e) => 1 - Math.sin(Math.acos(e)),
    oc = Ag(Eg),
    Cx = Sg(oc),
    Pg = Mi(0.33, 1.53, 0.69, 0.99),
    sc = Ag(Pg),
    Tx = Sg(sc),
    jx = (e) => ((e *= 2) < 1 ? 0.5 * sc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
    Mx = { linear: ce, easeIn: Ex, easeInOut: xg, easeOut: Px, circIn: Eg, circInOut: Cx, circOut: oc, backIn: sc, backInOut: Tx, backOut: Pg, anticipate: jx },
    Xf = (e) => {
        if (Array.isArray(e)) {
            ic(e.length === 4);
            const [t, n, r, i] = e;
            return Mi(t, n, r, i);
        } else if (typeof e == "string") return Mx[e];
        return e;
    },
    ac = (e, t) => (n) => !!((Ti(n) && Cw.test(n) && n.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(n, t))),
    kg = (e, t, n) => (r) => {
        if (!Ti(r)) return r;
        const [i, o, s, a] = r.match(Os);
        return { [e]: parseFloat(i), [t]: parseFloat(o), [n]: parseFloat(s), alpha: a !== void 0 ? parseFloat(a) : 1 };
    },
    Rx = (e) => tn(0, 255, e),
    xa = { ...In, transform: (e) => Math.round(Rx(e)) },
    xn = {
        test: ac("rgb", "red"),
        parse: kg("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + xa.transform(e) + ", " + xa.transform(t) + ", " + xa.transform(n) + ", " + $r(Gr.transform(r)) + ")",
    };
function Lx(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return (
        e.length > 5
            ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (i = e.substring(7, 9)))
            : ((t = e.substring(1, 2)), (n = e.substring(2, 3)), (r = e.substring(3, 4)), (i = e.substring(4, 5)), (t += t), (n += n), (r += r), (i += i)),
        { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: i ? parseInt(i, 16) / 255 : 1 }
    );
}
const Nl = { test: ac("#"), parse: Lx, transform: xn.transform },
    qn = {
        test: ac("hsl", "hue"),
        parse: kg("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + pt.transform($r(t)) + ", " + pt.transform($r(n)) + ", " + $r(Gr.transform(r)) + ")",
    },
    Ee = {
        test: (e) => xn.test(e) || Nl.test(e) || qn.test(e),
        parse: (e) => (xn.test(e) ? xn.parse(e) : qn.test(e) ? qn.parse(e) : Nl.parse(e)),
        transform: (e) => (Ti(e) ? e : e.hasOwnProperty("red") ? xn.transform(e) : qn.transform(e)),
    },
    J = (e, t, n) => -n * e + n * t + e;
function Sa(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ox({ hue: e, saturation: t, lightness: n, alpha: r }) {
    (e /= 360), (t /= 100), (n /= 100);
    let i = 0,
        o = 0,
        s = 0;
    if (!t) i = o = s = n;
    else {
        const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        (i = Sa(l, a, e + 1 / 3)), (o = Sa(l, a, e)), (s = Sa(l, a, e - 1 / 3));
    }
    return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(s * 255), alpha: r };
}
const Aa = (e, t, n) => {
        const r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r));
    },
    Ix = [Nl, xn, qn],
    _x = (e) => Ix.find((t) => t.test(e));
function Jf(e) {
    const t = _x(e);
    let n = t.parse(e);
    return t === qn && (n = Ox(n)), n;
}
const Cg = (e, t) => {
    const n = Jf(e),
        r = Jf(t),
        i = { ...n };
    return (o) => ((i.red = Aa(n.red, r.red, o)), (i.green = Aa(n.green, r.green, o)), (i.blue = Aa(n.blue, r.blue, o)), (i.alpha = J(n.alpha, r.alpha, o)), xn.transform(i));
};
function Nx(e) {
    var t, n;
    return isNaN(e) && Ti(e) && (((t = e.match(Os)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Zm)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Tg = { regex: Pw, countKey: "Vars", token: "${v}", parse: ce },
    jg = { regex: Zm, countKey: "Colors", token: "${c}", parse: Ee.parse },
    Mg = { regex: Os, countKey: "Numbers", token: "${n}", parse: In.parse };
function Ea(e, { regex: t, countKey: n, token: r, parse: i }) {
    const o = e.tokenised.match(t);
    o && ((e["num" + n] = o.length), (e.tokenised = e.tokenised.replace(t, r)), e.values.push(...o.map(i)));
}
function is(e) {
    const t = e.toString(),
        n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
    return n.value.includes("var(--") && Ea(n, Tg), Ea(n, jg), Ea(n, Mg), n;
}
function Rg(e) {
    return is(e).values;
}
function Lg(e) {
    const { values: t, numColors: n, numVars: r, tokenised: i } = is(e),
        o = t.length;
    return (s) => {
        let a = i;
        for (let l = 0; l < o; l++) l < r ? (a = a.replace(Tg.token, s[l])) : l < r + n ? (a = a.replace(jg.token, Ee.transform(s[l]))) : (a = a.replace(Mg.token, $r(s[l])));
        return a;
    };
}
const Dx = (e) => (typeof e == "number" ? 0 : e);
function Vx(e) {
    const t = Rg(e);
    return Lg(e)(t.map(Dx));
}
const nn = { test: Nx, parse: Rg, createTransformer: Lg, getAnimatableNone: Vx },
    Og = (e, t) => (n) => `${n > 0 ? t : e}`;
function Ig(e, t) {
    return typeof e == "number" ? (n) => J(e, t, n) : Ee.test(e) ? Cg(e, t) : e.startsWith("var(") ? Og(e, t) : Ng(e, t);
}
const _g = (e, t) => {
        const n = [...e],
            r = n.length,
            i = e.map((o, s) => Ig(o, t[s]));
        return (o) => {
            for (let s = 0; s < r; s++) n[s] = i[s](o);
            return n;
        };
    },
    Fx = (e, t) => {
        const n = { ...e, ...t },
            r = {};
        for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ig(e[i], t[i]));
        return (i) => {
            for (const o in r) n[o] = r[o](i);
            return n;
        };
    },
    Ng = (e, t) => {
        const n = nn.createTransformer(t),
            r = is(e),
            i = is(t);
        return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? qt(_g(r.values, i.values), n) : Og(e, t);
    },
    yi = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r;
    },
    ed = (e, t) => (n) => J(e, t, n);
function zx(e) {
    return typeof e == "number" ? ed : typeof e == "string" ? (Ee.test(e) ? Cg : Ng) : Array.isArray(e) ? _g : typeof e == "object" ? Fx : ed;
}
function Bx(e, t, n) {
    const r = [],
        i = n || zx(e[0]),
        o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || ce : t;
            a = qt(l, a);
        }
        r.push(a);
    }
    return r;
}
function Dg(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if ((ic(o === t.length), o === 1)) return () => t[0];
    e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const s = Bx(t, r, i),
        a = s.length,
        l = (u) => {
            let c = 0;
            if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const f = yi(e[c], e[c + 1], u);
            return s[c](f);
        };
    return n ? (u) => l(tn(e[0], e[o - 1], u)) : l;
}
function bx(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = yi(0, t, r);
        e.push(J(n, 1, i));
    }
}
function Ux(e) {
    const t = [0];
    return bx(t, e.length - 1), t;
}
function Hx(e, t) {
    return e.map((n) => n * t);
}
function Wx(e, t) {
    return e.map(() => t || xg).splice(0, e.length - 1);
}
function os({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = kx(r) ? r.map(Xf) : Xf(r),
        o = { done: !1, value: t[0] },
        s = Hx(n && n.length === t.length ? n : Ux(t), e),
        a = Dg(s, t, { ease: Array.isArray(i) ? i : Wx(t, i) });
    return { calculatedDuration: e, next: (l) => ((o.value = a(l)), (o.done = l >= e), o) };
}
function Vg(e, t) {
    return t ? e * (1e3 / t) : 0;
}
const Qx = 5;
function Fg(e, t, n) {
    const r = Math.max(t - Qx, 0);
    return Vg(n - e(r), t - r);
}
const Pa = 0.001,
    Gx = 0.01,
    td = 10,
    $x = 0.05,
    Yx = 1;
function Kx({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
    let i, o;
    gx(e <= Zt(td));
    let s = 1 - t;
    (s = tn($x, Yx, s)),
        (e = tn(Gx, td, At(e))),
        s < 1
            ? ((i = (u) => {
                  const c = u * s,
                      f = c * e,
                      d = c - n,
                      g = Dl(u, s),
                      v = Math.exp(-f);
                  return Pa - (d / g) * v;
              }),
              (o = (u) => {
                  const f = u * s * e,
                      d = f * n + n,
                      g = Math.pow(s, 2) * Math.pow(u, 2) * e,
                      v = Math.exp(-f),
                      y = Dl(Math.pow(u, 2), s);
                  return ((-i(u) + Pa > 0 ? -1 : 1) * ((d - g) * v)) / y;
              }))
            : ((i = (u) => {
                  const c = Math.exp(-u * e),
                      f = (u - n) * e + 1;
                  return -Pa + c * f;
              }),
              (o = (u) => {
                  const c = Math.exp(-u * e),
                      f = (n - u) * (e * e);
                  return c * f;
              }));
    const a = 5 / e,
        l = Zx(i, o, a);
    if (((e = Zt(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
    {
        const u = Math.pow(l, 2) * r;
        return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
    }
}
const qx = 12;
function Zx(e, t, n) {
    let r = n;
    for (let i = 1; i < qx; i++) r = r - e(r) / t(r);
    return r;
}
function Dl(e, t) {
    return e * Math.sqrt(1 - t * t);
}
const Xx = ["duration", "bounce"],
    Jx = ["stiffness", "damping", "mass"];
function nd(e, t) {
    return t.some((n) => e[n] !== void 0);
}
function eS(e) {
    let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
    if (!nd(e, Jx) && nd(e, Xx)) {
        const n = Kx(e);
        (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
    }
    return t;
}
function zg({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0],
        o = e[e.length - 1],
        s = { done: !1, value: i },
        { stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d } = eS(r),
        g = c ? -At(c) : 0,
        v = l / (2 * Math.sqrt(a * u)),
        y = o - i,
        E = At(Math.sqrt(a / u)),
        h = Math.abs(y) < 5;
    n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
    let p;
    if (v < 1) {
        const m = Dl(E, v);
        p = (w) => {
            const A = Math.exp(-v * E * w);
            return o - A * (((g + v * E * y) / m) * Math.sin(m * w) + y * Math.cos(m * w));
        };
    } else if (v === 1) p = (m) => o - Math.exp(-E * m) * (y + (g + E * y) * m);
    else {
        const m = E * Math.sqrt(v * v - 1);
        p = (w) => {
            const A = Math.exp(-v * E * w),
                P = Math.min(m * w, 300);
            return o - (A * ((g + v * E * y) * Math.sinh(P) + m * y * Math.cosh(P))) / m;
        };
    }
    return {
        calculatedDuration: (d && f) || null,
        next: (m) => {
            const w = p(m);
            if (d) s.done = m >= f;
            else {
                let A = g;
                m !== 0 && (v < 1 ? (A = Fg(p, m, w)) : (A = 0));
                const P = Math.abs(A) <= n,
                    T = Math.abs(o - w) <= t;
                s.done = P && T;
            }
            return (s.value = s.done ? o : w), s;
        },
    };
}
function rd({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = e[0],
        d = { done: !1, value: f },
        g = (k) => (a !== void 0 && k < a) || (l !== void 0 && k > l),
        v = (k) => (a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l);
    let y = n * t;
    const E = f + y,
        h = s === void 0 ? E : s(E);
    h !== E && (y = h - f);
    const p = (k) => -y * Math.exp(-k / r),
        m = (k) => h + p(k),
        w = (k) => {
            const R = p(k),
                L = m(k);
            (d.done = Math.abs(R) <= u), (d.value = d.done ? h : L);
        };
    let A, P;
    const T = (k) => {
        g(d.value) && ((A = k), (P = zg({ keyframes: [d.value, v(d.value)], velocity: Fg(m, k, d.value), damping: i, stiffness: o, restDelta: u, restSpeed: c })));
    };
    return (
        T(0),
        {
            calculatedDuration: null,
            next: (k) => {
                let R = !1;
                return !P && A === void 0 && ((R = !0), w(k), T(k)), A !== void 0 && k > A ? P.next(k - A) : (!R && w(k), d);
            },
        }
    );
}
const tS = (e) => {
        const t = ({ timestamp: n }) => e(n);
        return { start: () => ee.update(t, !0), stop: () => Tt(t), now: () => (Z.isProcessing ? Z.timestamp : performance.now()) };
    },
    id = 2e4;
function od(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < id; ) (t += n), (r = e.next(t));
    return t >= id ? 1 / 0 : t;
}
const nS = { decay: rd, inertia: rd, tween: os, keyframes: os, spring: zg };
function ss({ autoplay: e = !0, delay: t = 0, driver: n = tS, keyframes: r, type: i = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: f, ...d }) {
    let g = 1,
        v = !1,
        y,
        E;
    const h = () => {
        y && y(),
            (E = new Promise((I) => {
                y = I;
            }));
    };
    h();
    let p;
    const m = nS[i] || os;
    let w;
    m !== os && typeof r[0] != "number" && ((w = Dg([0, 100], r, { clamp: !1 })), (r = [0, 100]));
    const A = m({ ...d, keyframes: r });
    let P;
    a === "mirror" && (P = m({ ...d, keyframes: [...r].reverse(), velocity: -(d.velocity || 0) }));
    let T = "idle",
        k = null,
        R = null,
        L = null;
    A.calculatedDuration === null && o && (A.calculatedDuration = od(A));
    const { calculatedDuration: H } = A;
    let he = 1 / 0,
        ye = 1 / 0;
    H !== null && ((he = H + s), (ye = he * (o + 1) - s));
    let W = 0;
    const Y = (I) => {
            if (R === null) return;
            g > 0 && (R = Math.min(R, I)), g < 0 && (R = Math.min(I - ye / g, R)), k !== null ? (W = k) : (W = Math.round(I - R) * g);
            const Q = W - t * (g >= 0 ? 1 : -1),
                ln = g >= 0 ? Q < 0 : Q > ye;
            (W = Math.max(Q, 0)), T === "finished" && k === null && (W = ye);
            let ot = W,
                Nn = A;
            if (o) {
                const Hs = W / he;
                let zi = Math.floor(Hs),
                    cn = Hs % 1;
                !cn && Hs >= 1 && (cn = 1), cn === 1 && zi--, (zi = Math.min(zi, o + 1));
                const Ac = !!(zi % 2);
                Ac && (a === "reverse" ? ((cn = 1 - cn), s && (cn -= s / he)) : a === "mirror" && (Nn = P));
                let Ec = tn(0, 1, cn);
                W > ye && (Ec = a === "reverse" && Ac ? 1 : 0), (ot = Ec * he);
            }
            const _e = ln ? { done: !1, value: r[0] } : Nn.next(ot);
            w && (_e.value = w(_e.value));
            let { done: un } = _e;
            !ln && H !== null && (un = g >= 0 ? W >= ye : W <= 0);
            const Fv = k === null && (T === "finished" || (T === "running" && un));
            return f && f(_e.value), Fv && j(), _e;
        },
        Ue = () => {
            p && p.stop(), (p = void 0);
        },
        it = () => {
            (T = "idle"), Ue(), h(), (R = L = null);
        },
        j = () => {
            (T = "finished"), c && c(), Ue(), h();
        },
        _ = () => {
            if (v) return;
            p || (p = n(Y));
            const I = p.now();
            l && l(), k !== null ? (R = I - k) : (!R || T === "finished") && (R = I), (L = R), (k = null), (T = "running"), p.start();
        };
    e && _();
    const N = {
        then(I, Q) {
            return E.then(I, Q);
        },
        get time() {
            return At(W);
        },
        set time(I) {
            (I = Zt(I)), (W = I), k !== null || !p || g === 0 ? (k = I) : (R = p.now() - I / g);
        },
        get duration() {
            const I = A.calculatedDuration === null ? od(A) : A.calculatedDuration;
            return At(I);
        },
        get speed() {
            return g;
        },
        set speed(I) {
            I === g || !p || ((g = I), (N.time = At(W)));
        },
        get state() {
            return T;
        },
        play: _,
        pause: () => {
            (T = "paused"), (k = W);
        },
        stop: () => {
            (v = !0), T !== "idle" && ((T = "idle"), u && u(), it());
        },
        cancel: () => {
            L !== null && Y(L), it();
        },
        complete: () => {
            T = "finished";
        },
        sample: (I) => ((R = 0), Y(I)),
    };
    return N;
}
const rS = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
    oo = 10,
    iS = 2e4,
    oS = (e, t) => t.type === "spring" || e === "backgroundColor" || !mg(t.ease);
function sS(e, t, { onUpdate: n, onComplete: r, ...i }) {
    if (!(yg.waapi() && rS.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")) return !1;
    let s = !1,
        a,
        l;
    const u = () => {
        l = new Promise((h) => {
            a = h;
        });
    };
    u();
    let { keyframes: c, duration: f = 300, ease: d, times: g } = i;
    if (oS(t, i)) {
        const h = ss({ ...i, repeat: 0, delay: 0 });
        let p = { done: !1, value: c[0] };
        const m = [];
        let w = 0;
        for (; !p.done && w < iS; ) (p = h.sample(w)), m.push(p.value), (w += oo);
        (g = void 0), (c = m), (f = w - oo), (d = "linear");
    }
    const v = yx(e.owner.current, t, c, { ...i, duration: f, ease: d, times: g }),
        y = () => v.cancel(),
        E = () => {
            ee.update(y), a(), u();
        };
    return (
        (v.onfinish = () => {
            e.set(wx(c, i)), r && r(), E();
        }),
        {
            then(h, p) {
                return l.then(h, p);
            },
            get time() {
                return At(v.currentTime || 0);
            },
            set time(h) {
                v.currentTime = Zt(h);
            },
            get speed() {
                return v.playbackRate;
            },
            set speed(h) {
                v.playbackRate = h;
            },
            get duration() {
                return At(f);
            },
            play: () => {
                s || (v.play(), Tt(y));
            },
            pause: () => v.pause(),
            stop: () => {
                if (((s = !0), v.playState === "idle")) return;
                const { currentTime: h } = v;
                if (h) {
                    const p = ss({ ...i, autoplay: !1 });
                    e.setWithVelocity(p.sample(h - oo).value, p.sample(h).value, oo);
                }
                E();
            },
            complete: () => v.finish(),
            cancel: E,
        }
    );
}
function aS({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
    const i = () => (n && n(e[e.length - 1]), r && r(), { time: 0, speed: 1, duration: 0, play: ce, pause: ce, stop: ce, then: (o) => (o(), Promise.resolve()), cancel: ce, complete: ce });
    return t ? ss({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i }) : i();
}
const lS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    uS = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
    cS = { type: "keyframes", duration: 0.8 },
    fS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    dS = (e, { keyframes: t }) => (t.length > 2 ? cS : On.has(e) ? (e.startsWith("scale") ? uS(t[1]) : lS) : fS),
    Vl = (e, t) => (e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || (typeof t == "string" && (nn.test(t) || t === "0") && !t.startsWith("url(")))),
    pS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function hS(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Os) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = pS.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const mS = /([a-z-]*)\(.*?\)/g,
    Fl = {
        ...nn,
        getAnimatableNone: (e) => {
            const t = e.match(mS);
            return t ? t.map(hS).join(" ") : e;
        },
    },
    gS = { ...Xm, color: Ee, backgroundColor: Ee, outlineColor: Ee, fill: Ee, stroke: Ee, borderColor: Ee, borderTopColor: Ee, borderRightColor: Ee, borderBottomColor: Ee, borderLeftColor: Ee, filter: Fl, WebkitFilter: Fl },
    lc = (e) => gS[e];
function Bg(e, t) {
    let n = lc(e);
    return n !== Fl && (n = nn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const bg = (e) => /^0[^.\s]+$/.test(e);
function vS(e) {
    if (typeof e == "number") return e === 0;
    if (e !== null) return e === "none" || e === "0" || bg(e);
}
function yS(e, t, n, r) {
    const i = Vl(t, n);
    let o;
    Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < o.length; u++) o[u] === null && (o[u] = u === 0 ? s : o[u - 1]), vS(o[u]) && l.push(u), typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
    if (i && l.length && a)
        for (let u = 0; u < l.length; u++) {
            const c = l[u];
            o[c] = Bg(t, a);
        }
    return o;
}
function wS({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
}
function Ug(e, t) {
    return e[t] || e.default || e;
}
const uc = (e, t, n, r = {}) => (i) => {
    const o = Ug(r, e) || {},
        s = o.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - Zt(s);
    const l = yS(t, e, n, o),
        u = l[0],
        c = l[l.length - 1],
        f = Vl(e, u),
        d = Vl(e, c);
    let g = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -a,
        onUpdate: (v) => {
            t.set(v), o.onUpdate && o.onUpdate(v);
        },
        onComplete: () => {
            i(), o.onComplete && o.onComplete();
        },
    };
    if ((wS(o) || (g = { ...g, ...dS(e, g) }), g.duration && (g.duration = Zt(g.duration)), g.repeatDelay && (g.repeatDelay = Zt(g.repeatDelay)), !f || !d || vx.current || o.type === !1)) return aS(g);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const v = sS(t, e, g);
        if (v) return v;
    }
    return ss(g);
};
function as(e) {
    return !!(Ie(e) && e.add);
}
const xS = (e) => /^\-?\d*\.?\d+$/.test(e);
function cc(e, t) {
    e.indexOf(t) === -1 && e.push(t);
}
function fc(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
}
class dc {
    constructor() {
        this.subscriptions = [];
    }
    add(t) {
        return cc(this.subscriptions, t), () => fc(this.subscriptions, t);
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r);
                }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
const SS = (e) => !isNaN(parseFloat(e));
class AS {
    constructor(t, n = {}) {
        (this.version = "10.12.18"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (r, i = !0) => {
                (this.prev = this.current), (this.current = r);
                const { delta: o, timestamp: s } = Z;
                this.lastUpdated !== s && ((this.timeDelta = o), (this.lastUpdated = s), ee.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () => ee.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: r }) => {
                r !== this.lastUpdated && ((this.prev = this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = SS(this.current)),
            (this.owner = n.owner);
    }
    onChange(t) {
        return this.on("change", t);
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new dc());
        const r = this.events[t].add(n);
        return t === "change"
            ? () => {
                  r(),
                      ee.read(() => {
                          this.events.change.getSize() || this.stop();
                      });
              }
            : r;
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear();
    }
    attach(t, n) {
        (this.passiveEffect = t), (this.stopPassiveEffect = n);
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, r) {
        this.set(n), (this.prev = t), (this.timeDelta = r);
    }
    jump(t) {
        this.updateAndNotify(t), (this.prev = t), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
        return this.current;
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        return this.canTrackVelocity ? Vg(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
    }
    start(t) {
        return (
            this.stop(),
            new Promise((n) => {
                (this.hasAnimated = !0), (this.animation = t(n)), this.events.animationStart && this.events.animationStart.notify();
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
            })
        );
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
}
function pr(e, t) {
    return new AS(e, t);
}
const Hg = (e) => (t) => t.test(e),
    ES = { test: (e) => e === "auto", parse: (e) => e },
    Wg = [In, O, pt, Ot, jw, Tw, ES],
    jr = (e) => Wg.find(Hg(e)),
    PS = [...Wg, Ee, nn],
    kS = (e) => PS.find(Hg(e));
function CS(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pr(n));
}
function TS(e, t) {
    const n = Ns(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
    o = { ...o, ...r };
    for (const s in o) {
        const a = Hw(o[s]);
        CS(e, s, a);
    }
}
function jS(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter((a) => !e.hasValue(a)),
        s = o.length;
    if (s)
        for (let a = 0; a < s; a++) {
            const l = o[a],
                u = t[l];
            let c = null;
            Array.isArray(u) && (c = u[0]),
                c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]),
                c != null && (typeof c == "string" && (xS(c) || bg(c)) ? (c = parseFloat(c)) : !kS(c) && nn.test(u) && (c = Bg(l, u)), e.addValue(l, pr(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
        }
}
function MS(e, t) {
    return t ? (t[e] || t.default || t).from : void 0;
}
function RS(e, t, n) {
    const r = {};
    for (const i in e) {
        const o = MS(i, t);
        if (o !== void 0) r[i] = o;
        else {
            const s = n.getValue(i);
            s && (r[i] = s.get());
        }
    }
    return r;
}
function LS({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return (t[n] = !1), r;
}
function Qg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (o = r);
    const u = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const d = e.getValue(f),
            g = a[f];
        if (!d || g === void 0 || (c && LS(c, f))) continue;
        const v = { delay: n, elapsed: 0, ...o };
        if (window.HandoffAppearAnimations && !d.hasAnimated) {
            const E = e.getProps()[mx];
            E && (v.elapsed = window.HandoffAppearAnimations(E, f, d, ee));
        }
        d.start(uc(f, d, g, e.shouldReduceMotion && On.has(f) ? { type: !1 } : v));
        const y = d.animation;
        as(l) && (l.add(f), y.then(() => l.remove(f))), u.push(y);
    }
    return (
        s &&
            Promise.all(u).then(() => {
                s && TS(e, s);
            }),
        u
    );
}
function zl(e, t, n = {}) {
    const r = Ns(e, t, n.custom);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(Qg(e, r, n)) : () => Promise.resolve(),
        s =
            e.variantChildren && e.variantChildren.size
                ? (l = 0) => {
                      const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
                      return OS(e, t, u + l, c, f, n);
                  }
                : () => Promise.resolve(),
        { when: a } = i;
    if (a) {
        const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
        return l().then(() => u());
    } else return Promise.all([o(), s(n.delay)]);
}
function OS(e, t, n = 0, r = 0, i = 1, o) {
    const s = [],
        a = (e.variantChildren.size - 1) * r,
        l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return (
        Array.from(e.variantChildren)
            .sort(IS)
            .forEach((u, c) => {
                u.notify("AnimationStart", t), s.push(zl(u, t, { ...o, delay: n + l(c) }).then(() => u.notify("AnimationComplete", t)));
            }),
        Promise.all(s)
    );
}
function IS(e, t) {
    return e.sortNodePosition(t);
}
function _S(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map((o) => zl(e, o, n));
        r = Promise.all(i);
    } else if (typeof t == "string") r = zl(e, t, n);
    else {
        const i = typeof t == "function" ? Ns(e, t, n.custom) : t;
        r = Promise.all(Qg(e, i, n));
    }
    return r.then(() => e.notify("AnimationComplete", t));
}
const NS = [...Yu].reverse(),
    DS = Yu.length;
function VS(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => _S(e, n, r)));
}
function FS(e) {
    let t = VS(e);
    const n = BS();
    let r = !0;
    const i = (l, u) => {
        const c = Ns(e, u);
        if (c) {
            const { transition: f, transitionEnd: d, ...g } = c;
            l = { ...l, ...g, ...d };
        }
        return l;
    };
    function o(l) {
        t = l(e);
    }
    function s(l, u) {
        const c = e.getProps(),
            f = e.getVariantContext(!0) || {},
            d = [],
            g = new Set();
        let v = {},
            y = 1 / 0;
        for (let h = 0; h < DS; h++) {
            const p = NS[h],
                m = n[p],
                w = c[p] !== void 0 ? c[p] : f[p],
                A = mi(w),
                P = p === u ? m.isActive : null;
            P === !1 && (y = h);
            let T = w === f[p] && w !== c[p] && A;
            if ((T && r && e.manuallyAnimateOnMount && (T = !1), (m.protectedKeys = { ...v }), (!m.isActive && P === null) || (!w && !m.prevProp) || Rs(w) || typeof w == "boolean")) continue;
            const k = zS(m.prevProp, w);
            let R = k || (p === u && m.isActive && !T && A) || (h > y && A);
            const L = Array.isArray(w) ? w : [w];
            let H = L.reduce(i, {});
            P === !1 && (H = {});
            const { prevResolvedValues: he = {} } = m,
                ye = { ...he, ...H },
                W = (Y) => {
                    (R = !0), g.delete(Y), (m.needsAnimating[Y] = !0);
                };
            for (const Y in ye) {
                const Ue = H[Y],
                    it = he[Y];
                v.hasOwnProperty(Y) || (Ue !== it ? (rs(Ue) && rs(it) ? (!pg(Ue, it) || k ? W(Y) : (m.protectedKeys[Y] = !0)) : Ue !== void 0 ? W(Y) : g.add(Y)) : Ue !== void 0 && g.has(Y) ? W(Y) : (m.protectedKeys[Y] = !0));
            }
            (m.prevProp = w), (m.prevResolvedValues = H), m.isActive && (v = { ...v, ...H }), r && e.blockInitialAnimation && (R = !1), R && !T && d.push(...L.map((Y) => ({ animation: Y, options: { type: p, ...l } })));
        }
        if (g.size) {
            const h = {};
            g.forEach((p) => {
                const m = e.getBaseTarget(p);
                m !== void 0 && (h[p] = m);
            }),
                d.push({ animation: h });
        }
        let E = !!d.length;
        return r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1), (r = !1), E ? t(d) : Promise.resolve();
    }
    function a(l, u, c) {
        var f;
        if (n[l].isActive === u) return Promise.resolve();
        (f = e.variantChildren) === null ||
            f === void 0 ||
            f.forEach((g) => {
                var v;
                return (v = g.animationState) === null || v === void 0 ? void 0 : v.setActive(l, u);
            }),
            (n[l].isActive = u);
        const d = s(c, l);
        for (const g in n) n[g].protectedKeys = {};
        return d;
    }
    return { animateChanges: s, setActive: a, setAnimateFunction: o, getState: () => n };
}
function zS(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !pg(t, e) : !1;
}
function fn(e = !1) {
    return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function BS() {
    return { animate: fn(!0), whileInView: fn(), whileHover: fn(), whileTap: fn(), whileDrag: fn(), whileFocus: fn(), exit: fn() };
}
class bS extends an {
    constructor(t) {
        super(t), t.animationState || (t.animationState = FS(t));
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        this.unmount(), Rs(t) && (this.unmount = t.subscribe(this.node));
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate: t } = this.node.getProps(),
            { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {}
}
let US = 0;
class HS extends an {
    constructor() {
        super(...arguments), (this.id = US++);
    }
    update() {
        if (!this.node.presenceContext) return;
        const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i) return;
        const o = this.node.animationState.setActive("exit", !t, { custom: r ?? this.node.getProps().custom });
        n && !t && o.then(() => n(this.id));
    }
    mount() {
        const { register: t } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id));
    }
    unmount() {}
}
const WS = { animation: { Feature: bS }, exit: { Feature: HS } },
    sd = (e, t) => Math.abs(e - t);
function QS(e, t) {
    const n = sd(e.x, t.x),
        r = sd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
}
class Gg {
    constructor(t, n, { transformPagePoint: r } = {}) {
        if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const u = Ca(this.lastMoveEventInfo, this.history),
                    c = this.startEvent !== null,
                    f = QS(u.offset, { x: 0, y: 0 }) >= 3;
                if (!c && !f) return;
                const { point: d } = u,
                    { timestamp: g } = Z;
                this.history.push({ ...d, timestamp: g });
                const { onStart: v, onMove: y } = this.handlers;
                c || (v && v(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)), y && y(this.lastMoveEvent, u);
            }),
            (this.handlePointerMove = (u, c) => {
                (this.lastMoveEvent = u), (this.lastMoveEventInfo = ka(c, this.transformPagePoint)), ee.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (u, c) => {
                if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
                const { onEnd: f, onSessionEnd: d } = this.handlers,
                    g = Ca(u.type === "pointercancel" ? this.lastMoveEventInfo : ka(c, this.transformPagePoint), this.history);
                this.startEvent && f && f(u, g), d && d(u, g);
            }),
            !ag(t))
        )
            return;
        (this.handlers = n), (this.transformPagePoint = r);
        const i = Is(t),
            o = ka(i, this.transformPagePoint),
            { point: s } = o,
            { timestamp: a } = Z;
        this.history = [{ ...s, timestamp: a }];
        const { onSessionStart: l } = n;
        l && l(t, Ca(o, this.history)), (this.removeListeners = qt(St(window, "pointermove", this.handlePointerMove), St(window, "pointerup", this.handlePointerUp), St(window, "pointercancel", this.handlePointerUp)));
    }
    updateHandlers(t) {
        this.handlers = t;
    }
    end() {
        this.removeListeners && this.removeListeners(), Tt(this.updatePoint);
    }
}
function ka(e, t) {
    return t ? { point: t(e.point) } : e;
}
function ad(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
function Ca({ point: e }, t) {
    return { point: e, delta: ad(e, $g(t)), offset: ad(e, GS(t)), velocity: $S(t, 0.1) };
}
function GS(e) {
    return e[0];
}
function $g(e) {
    return e[e.length - 1];
}
function $S(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
        r = null;
    const i = $g(e);
    for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Zt(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const o = At(i.timestamp - r.timestamp);
    if (o === 0) return { x: 0, y: 0 };
    const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function ze(e) {
    return e.max - e.min;
}
function Bl(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
}
function ld(e, t, n, r = 0.5) {
    (e.origin = r),
        (e.originPoint = J(t.min, t.max, e.origin)),
        (e.scale = ze(n) / ze(t)),
        (Bl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        (e.translate = J(n.min, n.max, e.origin) - e.originPoint),
        (Bl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Yr(e, t, n, r) {
    ld(e.x, t.x, n.x, r ? r.originX : void 0), ld(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ud(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + ze(t));
}
function YS(e, t, n) {
    ud(e.x, t.x, n.x), ud(e.y, t.y, n.y);
}
function cd(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + ze(t));
}
function Kr(e, t, n) {
    cd(e.x, t.x, n.x), cd(e.y, t.y, n.y);
}
function KS(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? (e = r ? J(t, e, r.min) : Math.max(e, t)) : n !== void 0 && e > n && (e = r ? J(n, e, r.max) : Math.min(e, n)), e;
}
function fd(e, t, n) {
    return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
}
function qS(e, { top: t, left: n, bottom: r, right: i }) {
    return { x: fd(e.x, n, i), y: fd(e.y, t, r) };
}
function dd(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function ZS(e, t) {
    return { x: dd(e.x, t.x), y: dd(e.y, t.y) };
}
function XS(e, t) {
    let n = 0.5;
    const r = ze(e),
        i = ze(t);
    return i > r ? (n = yi(t.min, t.max - r, e.min)) : r > i && (n = yi(e.min, e.max - i, t.min)), tn(0, 1, n);
}
function JS(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const bl = 0.35;
function eA(e = bl) {
    return e === !1 ? (e = 0) : e === !0 && (e = bl), { x: pd(e, "left", "right"), y: pd(e, "top", "bottom") };
}
function pd(e, t, n) {
    return { min: hd(e, t), max: hd(e, n) };
}
function hd(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
}
const md = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    Zn = () => ({ x: md(), y: md() }),
    gd = () => ({ min: 0, max: 0 }),
    se = () => ({ x: gd(), y: gd() });
function lt(e) {
    return [e("x"), e("y")];
}
function Yg({ top: e, left: t, right: n, bottom: r }) {
    return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function tA({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function nA(e, t) {
    if (!t) return e;
    const n = t({ x: e.left, y: e.top }),
        r = t({ x: e.right, y: e.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ta(e) {
    return e === void 0 || e === 1;
}
function Ul({ scale: e, scaleX: t, scaleY: n }) {
    return !Ta(e) || !Ta(t) || !Ta(n);
}
function mn(e) {
    return Ul(e) || Kg(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Kg(e) {
    return vd(e.x) || vd(e.y);
}
function vd(e) {
    return e && e !== "0%";
}
function ls(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i;
}
function yd(e, t, n, r, i) {
    return i !== void 0 && (e = ls(e, i, r)), ls(e, n, r) + t;
}
function Hl(e, t = 0, n = 1, r, i) {
    (e.min = yd(e.min, t, n, r, i)), (e.max = yd(e.max, t, n, r, i));
}
function qg(e, { x: t, y: n }) {
    Hl(e.x, t.translate, t.scale, t.originPoint), Hl(e.y, n.translate, n.scale, n.originPoint);
}
function rA(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        (o = n[a]), (s = o.projectionDelta);
        const l = o.instance;
        (l && l.style && l.style.display === "contents") ||
            (r && o.options.layoutScroll && o.scroll && o !== o.root && Xn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }), s && ((t.x *= s.x.scale), (t.y *= s.y.scale), qg(e, s)), r && mn(o.latestValues) && Xn(e, o.latestValues));
    }
    (t.x = wd(t.x)), (t.y = wd(t.y));
}
function wd(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Nt(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
}
function xd(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : 0.5,
        s = J(e.min, e.max, o);
    Hl(e, t[n], t[r], s, t.scale);
}
const iA = ["x", "scaleX", "originX"],
    oA = ["y", "scaleY", "originY"];
function Xn(e, t) {
    xd(e.x, t, iA), xd(e.y, t, oA);
}
function Zg(e, t) {
    return Yg(nA(e.getBoundingClientRect(), t));
}
function sA(e, t, n) {
    const r = Zg(e, n),
        { scroll: i } = t;
    return i && (Nt(r.x, i.offset.x), Nt(r.y, i.offset.y)), r;
}
const aA = new WeakMap();
class lA {
    constructor(t) {
        (this.openGlobalLock = null), (this.isDragging = !1), (this.currentDirection = null), (this.originPoint = { x: 0, y: 0 }), (this.constraints = !1), (this.hasMutatedConstraints = !1), (this.elastic = se()), (this.visualElement = t);
    }
    start(t, { snapToCursor: n = !1 } = {}) {
        const { presenceContext: r } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = (l) => {
                this.stopAnimation(), n && this.snapToCursor(Is(l, "page").point);
            },
            o = (l, u) => {
                const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
                if (c && !f && (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = ug(c)), !this.openGlobalLock)) return;
                (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection && ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
                    lt((v) => {
                        let y = this.getAxisMotionValue(v).get() || 0;
                        if (pt.test(y)) {
                            const { projection: E } = this.visualElement;
                            if (E && E.layout) {
                                const h = E.layout.layoutBox[v];
                                h && (y = ze(h) * (parseFloat(y) / 100));
                            }
                        }
                        this.originPoint[v] = y;
                    }),
                    d && ee.update(() => d(l, u), !1, !0);
                const { animationState: g } = this.visualElement;
                g && g.setActive("whileDrag", !0);
            },
            s = (l, u) => {
                const { dragPropagation: c, dragDirectionLock: f, onDirectionLock: d, onDrag: g } = this.getProps();
                if (!c && !this.openGlobalLock) return;
                const { offset: v } = u;
                if (f && this.currentDirection === null) {
                    (this.currentDirection = uA(v)), this.currentDirection !== null && d && d(this.currentDirection);
                    return;
                }
                this.updateAxis("x", u.point, v), this.updateAxis("y", u.point, v), this.visualElement.render(), g && g(l, u);
            },
            a = (l, u) => this.stop(l, u);
        this.panSession = new Gg(t, { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: a }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    }
    stop(t, n) {
        const r = this.isDragging;
        if ((this.cancel(), !r)) return;
        const { velocity: i } = n;
        this.startAnimation(i);
        const { onDragEnd: o } = this.getProps();
        o && ee.update(() => o(t, n));
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
        const { dragPropagation: r } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)), n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, r) {
        const { drag: i } = this.getProps();
        if (!r || !so(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = KS(s, this.constraints[t], this.elastic[t])), o.set(s);
    }
    resolveConstraints() {
        const { dragConstraints: t, dragElastic: n } = this.getProps(),
            { layout: r } = this.visualElement.projection || {},
            i = this.constraints;
        t && Kn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? (this.constraints = qS(r.layoutBox, t)) : (this.constraints = !1),
            (this.elastic = eA(n)),
            i !== this.constraints &&
                r &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                lt((o) => {
                    this.getAxisMotionValue(o) && (this.constraints[o] = JS(r.layoutBox[o], this.constraints[o]));
                });
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
        if (!t || !Kn(t)) return !1;
        const r = t.current,
            { projection: i } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = sA(r, i.root, this.visualElement.getTransformPagePoint());
        let s = ZS(i.layout.layoutBox, o);
        if (n) {
            const a = n(tA(s));
            (this.hasMutatedConstraints = !!a), a && (s = Yg(a));
        }
        return s;
    }
    startAnimation(t) {
        const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(),
            l = this.constraints || {},
            u = lt((c) => {
                if (!so(c, n, this.currentDirection)) return;
                let f = (l && l[c]) || {};
                s && (f = { min: 0, max: 0 });
                const d = i ? 200 : 1e6,
                    g = i ? 40 : 1e7,
                    v = { type: "inertia", velocity: r ? t[c] : 0, bounceStiffness: d, bounceDamping: g, timeConstant: 750, restDelta: 1, restSpeed: 10, ...o, ...f };
                return this.startAxisValueAnimation(c, v);
            });
        return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(uc(t, r, 0, n));
    }
    stopAnimation() {
        lt((t) => this.getAxisMotionValue(t).stop());
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
    }
    snapToCursor(t) {
        lt((n) => {
            const { drag: r } = this.getProps();
            if (!so(n, r, this.currentDirection)) return;
            const { projection: i } = this.visualElement,
                o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const { min: s, max: a } = i.layout.layoutBox[n];
                o.set(t[n] - J(s, a, 0.5));
            }
        });
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: t, dragConstraints: n } = this.getProps(),
            { projection: r } = this.visualElement;
        if (!Kn(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = { x: 0, y: 0 };
        lt((s) => {
            const a = this.getAxisMotionValue(s);
            if (a) {
                const l = a.get();
                i[s] = XS({ min: l, max: l }, this.constraints[s]);
            }
        });
        const { transformTemplate: o } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            lt((s) => {
                if (!so(s, t, null)) return;
                const a = this.getAxisMotionValue(s),
                    { min: l, max: u } = this.constraints[s];
                a.set(J(l, u, i[s]));
            });
    }
    addListeners() {
        if (!this.visualElement.current) return;
        aA.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = St(t, "pointerdown", (l) => {
                const { drag: u, dragListener: c = !0 } = this.getProps();
                u && c && this.start(l);
            }),
            r = () => {
                const { dragConstraints: l } = this.getProps();
                Kn(l) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
        const s = wt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
                this.isDragging &&
                    u &&
                    (lt((c) => {
                        const f = this.getAxisMotionValue(c);
                        f && ((this.originPoint[c] += l[c].translate), f.set(f.get() + l[c].translate));
                    }),
                    this.visualElement.render());
            });
        return () => {
            s(), n(), o(), a && a();
        };
    }
    getProps() {
        const t = this.visualElement.getProps(),
            { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = bl, dragMomentum: a = !0 } = t;
        return { ...t, drag: n, dragDirectionLock: r, dragPropagation: i, dragConstraints: o, dragElastic: s, dragMomentum: a };
    }
}
function so(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
}
function uA(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class cA extends an {
    constructor(t) {
        super(t), (this.removeGroupControls = ce), (this.removeListeners = ce), (this.controls = new lA(t));
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || ce);
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners();
    }
}
const Sd = (e) => (t, n) => {
    e && ee.update(() => e(t, n));
};
class fA extends an {
    constructor() {
        super(...arguments), (this.removePointerDownListener = ce);
    }
    onPointerDown(t) {
        this.session = new Gg(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
    }
    createPanHandlers() {
        const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
        return {
            onSessionStart: Sd(t),
            onStart: Sd(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session, i && ee.update(() => i(o, s));
            },
        };
    }
    mount() {
        this.removePointerDownListener = St(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end();
    }
}
function dA() {
    const e = S.useContext($u);
    if (e === null) return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e,
        i = S.useId();
    return S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const To = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ad(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Mr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (O.test(e)) e = parseFloat(e);
                else return e;
            const n = Ad(e, t.target.x),
                r = Ad(e, t.target.y);
            return `${n}% ${r}%`;
        },
    },
    pA = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e,
                i = nn.parse(e);
            if (i.length > 5) return r;
            const o = nn.createTransformer(e),
                s = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            (i[0 + s] /= a), (i[1 + s] /= l);
            const u = J(a, l, 0.5);
            return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
        },
    };
class hA extends $e.Component {
    componentDidMount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
            { projection: o } = t;
        xw(mA),
            o &&
                (n.group && n.group.add(o),
                r && r.register && i && r.register(o),
                o.root.didUpdate(),
                o.addEventListener("animationComplete", () => {
                    this.safeToRemove();
                }),
                o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
            (To.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(t) {
        const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props,
            s = r.projection;
        return (
            s &&
                ((s.isPresent = o),
                i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
                t.isPresent !== o &&
                    (o
                        ? s.promote()
                        : s.relegate() ||
                          ee.postRender(() => {
                              const a = s.getStack();
                              (!a || !a.members.length) && this.safeToRemove();
                          }))),
            null
        );
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
    }
    componentWillUnmount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
            { projection: i } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t();
    }
    render() {
        return null;
    }
}
function Xg(e) {
    const [t, n] = dA(),
        r = S.useContext(Gm);
    return $e.createElement(hA, { ...e, layoutGroup: r, switchLayoutGroup: S.useContext($m), isPresent: t, safeToRemove: n });
}
const mA = {
        borderRadius: { ...Mr, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] },
        borderTopLeftRadius: Mr,
        borderTopRightRadius: Mr,
        borderBottomLeftRadius: Mr,
        borderBottomRightRadius: Mr,
        boxShadow: pA,
    },
    Jg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    gA = Jg.length,
    Ed = (e) => (typeof e == "string" ? parseFloat(e) : e),
    Pd = (e) => typeof e == "number" || O.test(e);
function vA(e, t, n, r, i, o) {
    i
        ? ((e.opacity = J(0, n.opacity !== void 0 ? n.opacity : 1, yA(r))), (e.opacityExit = J(t.opacity !== void 0 ? t.opacity : 1, 0, wA(r))))
        : o && (e.opacity = J(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < gA; s++) {
        const a = `border${Jg[s]}Radius`;
        let l = kd(t, a),
            u = kd(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || Pd(l) === Pd(u) ? ((e[a] = Math.max(J(Ed(l), Ed(u), r), 0)), (pt.test(u) || pt.test(l)) && (e[a] += "%")) : (e[a] = u);
    }
    (t.rotate || n.rotate) && (e.rotate = J(t.rotate || 0, n.rotate || 0, r));
}
function kd(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const yA = ev(0, 0.5, oc),
    wA = ev(0.5, 0.95, ce);
function ev(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(yi(e, t, r)));
}
function Cd(e, t) {
    (e.min = t.min), (e.max = t.max);
}
function He(e, t) {
    Cd(e.x, t.x), Cd(e.y, t.y);
}
function Td(e, t, n, r, i) {
    return (e -= t), (e = ls(e, 1 / n, r)), i !== void 0 && (e = ls(e, 1 / i, r)), e;
}
function xA(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
    if ((pt.test(t) && ((t = parseFloat(t)), (t = J(s.min, s.max, t / 100) - s.min)), typeof t != "number")) return;
    let a = J(o.min, o.max, r);
    e === o && (a -= t), (e.min = Td(e.min, t, n, a, i)), (e.max = Td(e.max, t, n, a, i));
}
function jd(e, t, [n, r, i], o, s) {
    xA(e, t[n], t[r], t[i], t.scale, o, s);
}
const SA = ["x", "scaleX", "originX"],
    AA = ["y", "scaleY", "originY"];
function Md(e, t, n, r) {
    jd(e.x, t, SA, n ? n.x : void 0, r ? r.x : void 0), jd(e.y, t, AA, n ? n.y : void 0, r ? r.y : void 0);
}
function Rd(e) {
    return e.translate === 0 && e.scale === 1;
}
function tv(e) {
    return Rd(e.x) && Rd(e.y);
}
function Wl(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Ld(e) {
    return ze(e.x) / ze(e.y);
}
class EA {
    constructor() {
        this.members = [];
    }
    add(t) {
        cc(this.members, t), t.scheduleRender();
    }
    remove(t) {
        if ((fc(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n);
        }
    }
    relegate(t) {
        const n = this.members.findIndex((i) => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break;
            }
        }
        return r ? (this.promote(r), !0) : !1;
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = r),
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const { crossfade: i } = t.options;
            i === !1 && r.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((t) => {
            const { options: n, resumingFrom: r } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
        });
    }
    scheduleRender() {
        this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
        });
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
}
function Od(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        o = e.y.translate / t.y;
    if (((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n)) {
        const { rotate: l, rotateX: u, rotateY: c } = n;
        l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
    }
    const s = e.x.scale * t.x,
        a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const PA = (e, t) => e.depth - t.depth;
class kA {
    constructor() {
        (this.children = []), (this.isDirty = !1);
    }
    add(t) {
        cc(this.children, t), (this.isDirty = !0);
    }
    remove(t) {
        fc(this.children, t), (this.isDirty = !0);
    }
    forEach(t) {
        this.isDirty && this.children.sort(PA), (this.isDirty = !1), this.children.forEach(t);
    }
}
function CA(e, t) {
    const n = performance.now(),
        r = ({ timestamp: i }) => {
            const o = i - n;
            o >= t && (Tt(r), e(o - t));
        };
    return ee.read(r, !0), () => Tt(r);
}
function TA(e) {
    window.MotionDebug && window.MotionDebug.record(e);
}
function jA(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
}
function MA(e, t, n) {
    const r = Ie(e) ? e : pr(e);
    return r.start(uc("", r, t, n)), r.animation;
}
const Id = ["", "X", "Y", "Z"],
    _d = 1e3;
let RA = 0;
const gn = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
function nv({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            (this.id = RA++),
                (this.animationId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.checkUpdateFailed = () => {
                    this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                    (gn.totalNodes = gn.resolvedTargetDeltas = gn.recalculatedProjection = 0), this.nodes.forEach(IA), this.nodes.forEach(FA), this.nodes.forEach(zA), this.nodes.forEach(_A), TA(gn);
                }),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = s),
                (this.root = a ? a.root || a : this),
                (this.path = a ? [...a.path, a] : []),
                (this.parent = a),
                (this.depth = a ? a.depth + 1 : 0);
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new kA());
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new dc()), this.eventHandlers.get(s).add(a);
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a);
        }
        hasListeners(s) {
            return this.eventHandlers.has(s);
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = jA(s)), (this.instance = s);
            const { layoutId: l, layout: u, visualElement: c } = this.options;
            if ((c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e)) {
                let f;
                const d = () => (this.root.updateBlockedByResize = !1);
                e(s, () => {
                    (this.root.updateBlockedByResize = !0), f && f(), (f = CA(d, 250)), To.hasAnimatedSinceResize && ((To.hasAnimatedSinceResize = !1), this.nodes.forEach(Dd));
                });
            }
            l && this.root.registerSharedNode(l, this),
                this.options.animate !== !1 &&
                    c &&
                    (l || u) &&
                    this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: v }) => {
                        if (this.isTreeAnimationBlocked()) {
                            (this.target = void 0), (this.relativeTarget = void 0);
                            return;
                        }
                        const y = this.options.transition || c.getDefaultTransition() || WA,
                            { onLayoutAnimationStart: E, onLayoutAnimationComplete: h } = c.getProps(),
                            p = !this.targetLayout || !Wl(this.targetLayout, v) || g,
                            m = !d && g;
                        if (this.options.layoutRoot || (this.resumeFrom && this.resumeFrom.instance) || m || (d && (p || !this.currentAnimation))) {
                            this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)), this.setAnimationOrigin(f, m);
                            const w = { ...Ug(y, "layout"), onPlay: E, onComplete: h };
                            (c.shouldReduceMotion || this.options.layoutRoot) && ((w.delay = 0), (w.type = !1)), this.startAnimation(w);
                        } else d || Dd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = v;
                    });
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), Tt(this.updateProjection);
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
        }
        startUpdate() {
            this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(BA), this.animationId++);
        }
        getTransformTemplate() {
            const { visualElement: s } = this.options;
            return s && s.getProps().transformTemplate;
        }
        willUpdate(s = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                (f.shouldResetTransform = !0), f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
            }
            const { layoutId: a, layout: l } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0), this.updateSnapshot(), s && this.notifyListeners("willUpdate");
        }
        update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Nd);
                return;
            }
            this.isUpdating || this.nodes.forEach(DA), (this.isUpdating = !1), this.nodes.forEach(VA), this.nodes.forEach(LA), this.nodes.forEach(OA), this.clearAllSnapshots();
            const a = performance.now();
            (Z.delta = tn(0, 1e3 / 60, a - Z.timestamp)), (Z.timestamp = a), (Z.isProcessing = !0), or.update.process(Z), or.preRender.process(Z), or.render.process(Z), (Z.isProcessing = !1);
        }
        didUpdate() {
            this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
        }
        clearAllSnapshots() {
            this.nodes.forEach(NA), this.sharedNodes.forEach(bA);
        }
        scheduleUpdateProjection() {
            ee.preRender(this.updateProjection, !1, !0);
        }
        scheduleCheckAfterUnmount() {
            ee.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure());
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const s = this.layout;
            (this.layout = this.measure(!1)), (this.layoutCorrected = se()), (this.isLayoutDirty = !1), (this.projectionDelta = void 0), this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: a } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && (this.scroll = { animationId: this.root.animationId, phase: s, isRoot: r(this.instance), offset: n(this.instance) });
        }
        resetTransform() {
            if (!i) return;
            const s = this.isLayoutDirty || this.shouldResetTransform,
                a = this.projectionDelta && !tv(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s && (a || mn(this.latestValues) || c) && (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)), QA(l), { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id };
        }
        measurePageBox() {
            const { visualElement: s } = this.options;
            if (!s) return se();
            const a = s.measureViewportBox(),
                { scroll: l } = this.root;
            return l && (Nt(a.x, l.offset.x), Nt(a.y, l.offset.y)), a;
        }
        removeElementScroll(s) {
            const a = se();
            He(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l],
                    { scroll: c, options: f } = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        He(a, s);
                        const { scroll: d } = this.root;
                        d && (Nt(a.x, -d.offset.x), Nt(a.y, -d.offset.y));
                    }
                    Nt(a.x, c.offset.x), Nt(a.y, c.offset.y);
                }
            }
            return a;
        }
        applyTransform(s, a = !1) {
            const l = se();
            He(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && Xn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }), mn(c.latestValues) && Xn(l, c.latestValues);
            }
            return mn(this.latestValues) && Xn(l, this.latestValues), l;
        }
        removeTransform(s) {
            const a = se();
            He(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !mn(u.latestValues)) continue;
                Ul(u.latestValues) && u.updateSnapshot();
                const c = se(),
                    f = u.measurePageBox();
                He(c, f), Md(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
            }
            return mn(this.latestValues) && Md(a, this.latestValues), a;
        }
        setTargetDelta(s) {
            (this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
        }
        setOptions(s) {
            this.options = { ...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0 };
        }
        clearMeasurements() {
            (this.scroll = void 0), (this.layout = void 0), (this.snapshot = void 0), (this.prevTransformTemplateValue = void 0), (this.targetDelta = void 0), (this.target = void 0), (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Z.timestamp && this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || (u && this.isSharedProjectionDirty) || this.isProjectionDirty || (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
            const { layout: f, layoutId: d } = this.options;
            if (!(!this.layout || !(f || d))) {
                if (((this.resolvedRelativeTargetAt = Z.timestamp), !this.targetDelta && !this.relativeTarget)) {
                    const g = this.getClosestProjectingParent();
                    g && g.layout && this.animationProgress !== 1
                        ? ((this.relativeParent = g),
                          this.forceRelativeParentToResolveTarget(),
                          (this.relativeTarget = se()),
                          (this.relativeTargetOrigin = se()),
                          Kr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
                          He(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0);
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (
                        (this.target || ((this.target = se()), (this.targetWithTransforms = se())),
                        this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(), YS(this.target, this.relativeTarget, this.relativeParent.target))
                            : this.targetDelta
                            ? (this.resumingFrom ? (this.target = this.applyTransform(this.layout.layoutBox)) : He(this.target, this.layout.layoutBox), qg(this.target, this.targetDelta))
                            : He(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget)
                    ) {
                        this.attemptToResolveRelativeTarget = !1;
                        const g = this.getClosestProjectingParent();
                        g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1
                            ? ((this.relativeParent = g),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = se()),
                              (this.relativeTargetOrigin = se()),
                              Kr(this.relativeTargetOrigin, this.target, g.target),
                              He(this.relativeTarget, this.relativeTargetOrigin))
                            : (this.relativeParent = this.relativeTarget = void 0);
                    }
                    gn.resolvedTargetDeltas++;
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ul(this.parent.latestValues) || Kg(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        calcProjection() {
            var s;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if (
                ((this.isProjectionDirty || (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty)) && (u = !1),
                l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
                this.resolvedRelativeTargetAt === Z.timestamp && (u = !1),
                u)
            )
                return;
            const { layout: c, layoutId: f } = this.options;
            if (
                ((this.isTreeAnimating = !!((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(c || f))
            )
                return;
            He(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x,
                g = this.treeScale.y;
            rA(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const { target: v } = a;
            if (!v) {
                this.projectionTransform && ((this.projectionDelta = Zn()), (this.projectionTransform = "none"), this.scheduleRender());
                return;
            }
            this.projectionDelta || ((this.projectionDelta = Zn()), (this.projectionDeltaWithTransform = Zn()));
            const y = this.projectionTransform;
            Yr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
                (this.projectionTransform = Od(this.projectionDelta, this.treeScale)),
                (this.projectionTransform !== y || this.treeScale.x !== d || this.treeScale.y !== g) && ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", v)),
                gn.recalculatedProjection++;
        }
        hide() {
            this.isVisible = !1;
        }
        show() {
            this.isVisible = !0;
        }
        scheduleRender(s = !0) {
            if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
                const a = this.getStack();
                a && a.scheduleRender();
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = { ...this.latestValues },
                f = Zn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !a);
            const d = se(),
                g = l ? l.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                y = g !== v,
                E = this.getStack(),
                h = !E || E.members.length <= 1,
                p = !!(y && !h && this.options.crossfade === !0 && !this.path.some(HA));
            this.animationProgress = 0;
            let m;
            (this.mixTargetDelta = (w) => {
                const A = w / 1e3;
                Vd(f.x, s.x, A),
                    Vd(f.y, s.y, A),
                    this.setTargetDelta(f),
                    this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.layout &&
                        this.relativeParent &&
                        this.relativeParent.layout &&
                        (Kr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        UA(this.relativeTarget, this.relativeTargetOrigin, d, A),
                        m && Wl(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                        m || (m = se()),
                        He(m, this.relativeTarget)),
                    y && ((this.animationValues = c), vA(c, u, this.latestValues, A, p, h)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = A);
            }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation && (Tt(this.pendingAnimation), (this.pendingAnimation = void 0)),
                (this.pendingAnimation = ee.update(() => {
                    (To.hasAnimatedSinceResize = !0),
                        (this.currentAnimation = MA(0, _d, {
                            ...s,
                            onUpdate: (a) => {
                                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
                            },
                            onComplete: () => {
                                s.onComplete && s.onComplete(), this.completeAnimation();
                            },
                        })),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        (this.pendingAnimation = void 0);
                }));
        }
        completeAnimation() {
            this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
            const s = this.getStack();
            s && s.exitAnimationComplete(), (this.resumingFrom = this.currentAnimation = this.animationValues = void 0), this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(_d), this.currentAnimation.stop()), this.completeAnimation();
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && rv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || se();
                    const f = ze(this.layout.layoutBox.x);
                    (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
                    const d = ze(this.layout.layoutBox.y);
                    (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
                }
                He(a, l), Xn(a, c), Yr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new EA()), this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({ transition: u ? u.transition : void 0, preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0 });
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0;
        }
        getLead() {
            var s;
            const { layoutId: a } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
        }
        getPrevLead() {
            var s;
            const { layoutId: a } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead) : void 0;
        }
        getStack() {
            const { layoutId: s } = this.options;
            if (s) return this.root.sharedNodes.get(s);
        }
        promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), s && ((this.projectionDelta = void 0), (this.needsReset = !0)), a && this.setOptions({ transition: a });
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1;
        }
        resetRotation() {
            const { visualElement: s } = this.options;
            if (!s) return;
            let a = !1;
            const { latestValues: l } = s;
            if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)) return;
            const u = {};
            for (let c = 0; c < Id.length; c++) {
                const f = "rotate" + Id[c];
                l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
            }
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]);
            s.scheduleRender();
        }
        getProjectionStyles(s = {}) {
            var a, l;
            const u = {};
            if (!this.instance || this.isSVG) return u;
            if (this.isVisible) u.visibility = "";
            else return { visibility: "hidden" };
            const c = this.getTransformTemplate();
            if (this.needsReset) return (this.needsReset = !1), (u.opacity = ""), (u.pointerEvents = Co(s.pointerEvents) || ""), (u.transform = c ? c(this.latestValues, "") : "none"), u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const y = {};
                return (
                    this.options.layoutId && ((y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1), (y.pointerEvents = Co(s.pointerEvents) || "")),
                    this.hasProjected && !mn(this.latestValues) && ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
                    y
                );
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), (u.transform = Od(this.projectionDeltaWithTransform, this.treeScale, d)), c && (u.transform = c(d, u.transform));
            const { x: g, y: v } = this.projectionDelta;
            (u.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`),
                f.animationValues
                    ? (u.opacity = f === this ? ((l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1) : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit)
                    : (u.opacity = f === this ? (d.opacity !== void 0 ? d.opacity : "") : d.opacityExit !== void 0 ? d.opacityExit : 0);
            for (const y in ts) {
                if (d[y] === void 0) continue;
                const { correct: E, applyTo: h } = ts[y],
                    p = u.transform === "none" ? d[y] : E(d[y], f);
                if (h) {
                    const m = h.length;
                    for (let w = 0; w < m; w++) u[h[w]] = p;
                } else u[y] = p;
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? Co(s.pointerEvents) || "" : "none"), u;
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
            this.root.nodes.forEach((s) => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
            }),
                this.root.nodes.forEach(Nd),
                this.root.sharedNodes.clear();
        }
    };
}
function LA(e) {
    e.updateLayout();
}
function OA(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: i } = e.layout,
            { animationType: o } = e.options,
            s = n.source !== e.layout.source;
        o === "size"
            ? lt((f) => {
                  const d = s ? n.measuredBox[f] : n.layoutBox[f],
                      g = ze(d);
                  (d.min = r[f].min), (d.max = d.min + g);
              })
            : rv(o, n.layoutBox, r) &&
              lt((f) => {
                  const d = s ? n.measuredBox[f] : n.layoutBox[f],
                      g = ze(r[f]);
                  (d.max = d.min + g), e.relativeTarget && !e.currentAnimation && ((e.isProjectionDirty = !0), (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
              });
        const a = Zn();
        Yr(a, r, n.layoutBox);
        const l = Zn();
        s ? Yr(l, e.applyTransform(i, !0), n.measuredBox) : Yr(l, r, n.layoutBox);
        const u = !tv(a);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const { snapshot: d, layout: g } = f;
                if (d && g) {
                    const v = se();
                    Kr(v, n.layoutBox, d.layoutBox);
                    const y = se();
                    Kr(y, r, g.layoutBox), Wl(v, y) || (c = !0), f.options.layoutRoot && ((e.relativeTarget = y), (e.relativeTargetOrigin = v), (e.relativeParent = f));
                }
            }
        }
        e.notifyListeners("didUpdate", { layout: r, snapshot: n, delta: l, layoutDelta: a, hasLayoutChanged: u, hasRelativeTargetChanged: c });
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r();
    }
    e.options.transition = void 0;
}
function IA(e) {
    gn.totalNodes++,
        e.parent &&
            (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function _A(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function NA(e) {
    e.clearSnapshot();
}
function Nd(e) {
    e.clearMeasurements();
}
function DA(e) {
    e.isLayoutDirty = !1;
}
function VA(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Dd(e) {
    e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
}
function FA(e) {
    e.resolveTargetDelta();
}
function zA(e) {
    e.calcProjection();
}
function BA(e) {
    e.resetRotation();
}
function bA(e) {
    e.removeLeadSnapshot();
}
function Vd(e, t, n) {
    (e.translate = J(t.translate, 0, n)), (e.scale = J(t.scale, 1, n)), (e.origin = t.origin), (e.originPoint = t.originPoint);
}
function Fd(e, t, n, r) {
    (e.min = J(t.min, n.min, r)), (e.max = J(t.max, n.max, r));
}
function UA(e, t, n, r) {
    Fd(e.x, t.x, n.x, r), Fd(e.y, t.y, n.y, r);
}
function HA(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const WA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function zd(e) {
    (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function QA(e) {
    zd(e.x), zd(e.y);
}
function rv(e, t, n) {
    return e === "position" || (e === "preserve-aspect" && !Bl(Ld(t), Ld(n), 0.2));
}
const GA = nv({
        attachResizeListener: (e, t) => wt(e, "resize", t),
        measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }),
        checkIsScrollRoot: () => !0,
    }),
    ja = { current: void 0 },
    iv = nv({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
            if (!ja.current) {
                const e = new GA({});
                e.mount(window), e.setOptions({ layoutScroll: !0 }), (ja.current = e);
            }
            return ja.current;
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none";
        },
        checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
    }),
    $A = { pan: { Feature: fA }, drag: { Feature: cA, ProjectionNode: iv, MeasureLayout: Xg } },
    YA = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function KA(e) {
    const t = YA.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
}
function Ql(e, t, n = 1) {
    const [r, i] = KA(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    return o ? o.trim() : Ol(i) ? Ql(i, t, n + 1) : i;
}
function qA(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element)) return { target: t, transitionEnd: n };
    n && (n = { ...n }),
        e.values.forEach((i) => {
            const o = i.get();
            if (!Ol(o)) return;
            const s = Ql(o, r);
            s && i.set(s);
        });
    for (const i in t) {
        const o = t[i];
        if (!Ol(o)) continue;
        const s = Ql(o, r);
        s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
    }
    return { target: t, transitionEnd: n };
}
const ZA = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    ov = (e) => ZA.has(e),
    XA = (e) => Object.keys(e).some(ov),
    Bd = (e) => e === In || e === O,
    bd = (e, t) => parseFloat(e.split(", ")[t]),
    Ud = (e, t) => (n, { transform: r }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/);
        if (i) return bd(i[1], t);
        {
            const o = r.match(/^matrix\((.+)\)$/);
            return o ? bd(o[1], e) : 0;
        }
    },
    JA = new Set(["x", "y", "z"]),
    eE = Ci.filter((e) => !JA.has(e));
function tE(e) {
    const t = [];
    return (
        eE.forEach((n) => {
            const r = e.getValue(n);
            r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
        }),
        t.length && e.render(),
        t
    );
}
const Hd = {
        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: Ud(4, 13),
        y: Ud(5, 14),
    },
    nE = (e, t, n) => {
        const r = t.measureViewportBox(),
            i = t.current,
            o = getComputedStyle(i),
            { display: s } = o,
            a = {};
        s === "none" && t.setStaticValue("display", e.display || "block"),
            n.forEach((u) => {
                a[u] = Hd[u](r, o);
            }),
            t.render();
        const l = t.measureViewportBox();
        return (
            n.forEach((u) => {
                const c = t.getValue(u);
                c && c.jump(a[u]), (e[u] = Hd[u](l, o));
            }),
            e
        );
    },
    rE = (e, t, n = {}, r = {}) => {
        (t = { ...t }), (r = { ...r });
        const i = Object.keys(t).filter(ov);
        let o = [],
            s = !1;
        const a = [];
        if (
            (i.forEach((l) => {
                const u = e.getValue(l);
                if (!e.hasValue(l)) return;
                let c = n[l],
                    f = jr(c);
                const d = t[l];
                let g;
                if (rs(d)) {
                    const v = d.length,
                        y = d[0] === null ? 1 : 0;
                    (c = d[y]), (f = jr(c));
                    for (let E = y; E < v && d[E] !== null; E++) g ? ic(jr(d[E]) === g) : (g = jr(d[E]));
                } else g = jr(d);
                if (f !== g)
                    if (Bd(f) && Bd(g)) {
                        const v = u.get();
                        typeof v == "string" && u.set(parseFloat(v)), typeof d == "string" ? (t[l] = parseFloat(d)) : Array.isArray(d) && g === O && (t[l] = d.map(parseFloat));
                    } else
                        f != null && f.transform && g != null && g.transform && (c === 0 || d === 0)
                            ? c === 0
                                ? u.set(g.transform(c))
                                : (t[l] = f.transform(d))
                            : (s || ((o = tE(e)), (s = !0)), a.push(l), (r[l] = r[l] !== void 0 ? r[l] : t[l]), u.jump(d));
            }),
            a.length)
        ) {
            const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                u = nE(t, e, a);
            return (
                o.length &&
                    o.forEach(([c, f]) => {
                        e.getValue(c).set(f);
                    }),
                e.render(),
                Ms && l !== null && window.scrollTo({ top: l }),
                { target: u, transitionEnd: r }
            );
        } else return { target: t, transitionEnd: r };
    };
function iE(e, t, n, r) {
    return XA(t) ? rE(e, t, n, r) : { target: t, transitionEnd: r };
}
const oE = (e, t, n, r) => {
        const i = qA(e, t, r);
        return (t = i.target), (r = i.transitionEnd), iE(e, t, n, r);
    },
    Gl = { current: null },
    sv = { current: !1 };
function sE() {
    if (((sv.current = !0), !!Ms))
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => (Gl.current = e.matches);
            e.addListener(t), t();
        } else Gl.current = !1;
}
function aE(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
        const o = t[i],
            s = n[i];
        if (Ie(o)) e.addValue(i, o), as(r) && r.add(i);
        else if (Ie(s)) e.addValue(i, pr(o, { owner: e })), as(r) && r.remove(i);
        else if (s !== o)
            if (e.hasValue(i)) {
                const a = e.getValue(i);
                !a.hasAnimated && a.set(o);
            } else {
                const a = e.getStaticValue(i);
                e.addValue(i, pr(a !== void 0 ? a : o, { owner: e }));
            }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t;
}
const Wd = new WeakMap(),
    av = Object.keys(gi),
    lE = av.length,
    Qd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    uE = Ku.length;
class cE {
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o }, s = {}) {
        (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
            (this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
            }),
            (this.scheduleRender = () => ee.render(this.render, !1, !0));
        const { latestValues: a, renderState: l } = o;
        (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = n.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = n),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = s),
            (this.isControllingVariants = Ls(n)),
            (this.isVariantNode = Qm(n)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
        const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
        for (const f in c) {
            const d = c[f];
            a[f] !== void 0 && Ie(d) && (d.set(a[f], !1), as(u) && u.add(f));
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {};
    }
    mount(t) {
        (this.current = t),
            Wd.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
            sv.current || sE(),
            (this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Gl.current),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
    }
    unmount() {
        Wd.delete(this.current),
            this.projection && this.projection.unmount(),
            Tt(this.notifyUpdate),
            Tt(this.render),
            this.valueSubscriptions.forEach((t) => t()),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) this.features[t].unmount();
        this.current = null;
    }
    bindToMotionValue(t, n) {
        const r = On.has(t),
            i = n.on("change", (s) => {
                (this.latestValues[t] = s), this.props.onUpdate && ee.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(), o();
        });
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
    }
    loadFeatures({ children: t, ...n }, r, i, o) {
        let s, a;
        for (let l = 0; l < lE; l++) {
            const u = av[l],
                { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: g } = gi[u];
            d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), g && (a = g));
        }
        if (!this.projection && s) {
            this.projection = new s(this.latestValues, this.parent && this.parent.projection);
            const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: g } = n;
            this.projection.setOptions({
                layoutId: l,
                layout: u,
                alwaysMeasureLayout: !!c || (f && Kn(f)),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: o,
                layoutScroll: d,
                layoutRoot: g,
            });
        }
        return a;
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : se();
    }
    getStaticValue(t) {
        return this.latestValues[t];
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n;
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n);
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), (this.prevProps = this.props), (this.props = t), (this.prevPresenceContext = this.presenceContext), (this.presenceContext = n);
        for (let r = 0; r < Qd.length; r++) {
            const i = Qd[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = t["on" + i];
            o && (this.propEventSubscriptions[i] = this.on(i, o));
        }
        (this.prevMotionValues = aE(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues)), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
        return this.props;
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
        }
        const n = {};
        for (let r = 0; r < uE; r++) {
            const i = Ku[r],
                o = this.props[i];
            (mi(o) || o === !1) && (n[i] = o);
        }
        return n;
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), (this.latestValues[t] = n.get());
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
        return this.values.has(t);
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && ((r = pr(n, { owner: this })), this.addValue(t, r)), r;
    }
    readValue(t) {
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options);
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
        var n;
        const { initial: r } = this.props,
            i = typeof r == "string" || typeof r == "object" ? ((n = rc(this.props, r)) === null || n === void 0 ? void 0 : n[t]) : void 0;
        if (r && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Ie(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new dc()), this.events[t].add(n);
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n);
    }
}
class lv extends cE {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t], delete r[t];
    }
    makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: i }, o) {
        let s = RS(r, t || {}, this);
        if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
            jS(this, r, s);
            const a = oE(this, r, s, n);
            (n = a.transitionEnd), (r = a.target);
        }
        return { transition: t, transitionEnd: n, ...r };
    }
}
function fE(e) {
    return window.getComputedStyle(e);
}
class dE extends lv {
    readValueFromInstance(t, n) {
        if (On.has(n)) {
            const r = lc(n);
            return (r && r.default) || 0;
        } else {
            const r = fE(t),
                i = (qm(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i;
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return Zg(t, n);
    }
    build(t, n, r, i) {
        Zu(t, n, r, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n) {
        return nc(t, n);
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const { children: t } = this.props;
        Ie(t) &&
            (this.childSubscription = t.on("change", (n) => {
                this.current && (this.current.textContent = `${n}`);
            }));
    }
    renderInstance(t, n, r, i) {
        ng(t, n, r, i);
    }
}
class pE extends lv {
    constructor() {
        super(...arguments), (this.isSVGTag = !1);
    }
    getBaseTargetFromProps(t, n) {
        return t[n];
    }
    readValueFromInstance(t, n) {
        if (On.has(n)) {
            const r = lc(n);
            return (r && r.default) || 0;
        }
        return (n = rg.has(n) ? n : tc(n)), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
        return se();
    }
    scrapeMotionValuesFromProps(t, n) {
        return og(t, n);
    }
    build(t, n, r, i) {
        Ju(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
        ig(t, n, r, i);
    }
    mount(t) {
        (this.isSVGTag = ec(t.tagName)), super.mount(t);
    }
}
const hE = (e, t) => (qu(e) ? new pE(t, { enableHardwareAcceleration: !1 }) : new dE(t, { enableHardwareAcceleration: !0 })),
    mE = { layout: { ProjectionNode: iv, MeasureLayout: Xg } },
    gE = { ...WS, ...fx, ...$A, ...mE },
    F = yw((e, t) => Yw(e, t, gE, hE)),
    vE = "/assets/logo-7ad1c0ba.png",
    yE = "/imgs/css-79a7f026.png",
    wE =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAAsTAAALEwEAmpwYAAANG0lEQVR4nO2dX6xcRR2AD9QYgpYElEDv3fltqdUSHtSISNWIiIE09vbuzMKa+GBq4p/4hoIGEx/qSxOiL1T62Adj4kN90gegSXnQxAdCIiYkloQKSKKQpo3c7szeikrXzPZCW3r39uzdc2bOzPm+5Jc0t7t7dn4z386cc+bMFAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFs415cdVqtHrJZjzqgTToudhFEn/N/8//nXxP6eAHAJIy13Oi3HnZFxqdBy3L+HJAJEZLy/e5016og1cr60vGvh3+Pf6z+DSgQIzGhZLVgjz80q7hUia/XC6mCHUIEAgfDCWS2vzCvvJRK/zrkxQILyIjFA4vIiMUDi8iIxQOLyIjFA4vIiMUDi8iIxQOLyIjFA4vIiMUDi8iIxQOLyIjFA4vIiMUDi8iIxQOLyIjFA4vIiMbSe1OVFYmgtuciLxNBKnJE/xJaucomNeu1cr7s9dm4Baie3HpieGFoHEgMkDhIDJA4SAyQOEgMkDhIDNASn5YDV8vis70NigMg4LT++eFsFibnFBMngjPzoynujSIzE0Hhsv/vo9AkOSIzE0Fj8vrtXn6WExEgMjcMa9cPyUw2RGImhMVijfjD7fGEkRmKIjtXq4c1P+kdiJIZojLR8z+9wP9+TO0iMxBAcp+W788qLxDyKCBFwRr5TlbxIjMQQENeTb1st71QpLxIjMSQ2bJ4qsVE/m/V7+SVs/FI2l/8YqDeslmecVof9ebYPp9Uhq9VTTqtTdZahwlywPA80v+etSmJn5EVn5Aln5DPjorhm2mvHB4prR8uLd1stB61Wb8YWFYmhVlxPfSuUvPNcnd4M46Vt1zsjjzmj3oot6/RcqNfP9WVHiHxAZjit9oeWN7TEntGgs2i1PB9bViSGynB9+WYseecZTs/ZGx+NLesGueCcGMphtfq6NfLfRjTcgD3xeFBssUY9HbvM03PBcBqugjUyaIq8MSRe2Ss3Oi0vxy4zEsPMDI081DR5Y0g87KkvxS4vEkOyw+ZpMdTdfqhqndxHbkCZp/6gcU4MKfS8lzTYf9t9t90SqtZGpnNX7DIjMVwV36tZrf7T/MYqvwtdnc7IycbnRXNhq7WMTNekIK+PkVbfD50fp9UvY5e73I+b4hZT2xhp1bNavR278ZUWeHnx7tA5clqWYpcbieEKRj21LyV5fQwHt94cuipX9nV2xi43EsNlONPZY7U6F7uxzRrjwR0fDF2Vp5d3bY1d7pkl1pwTZ4vrd7/mr+bGbmSbEnhp2/Wh8+VnZsUu96YkNpwTZ4fT6oEUe953Y7W3oELn7MyenTfELvemJdb0xNmQurwTgXX386Hz5h/ji13uuSQ29MTJY42632pZjd2Y5m6MWj0S42Jf7HIjcYuxPflqDvJeEFh+Hzx/Wv0idrmRuKXYfvcr1sgoduOpTmD1dsiplH5ZnhRmYrmy+WM4nQ621703J3nfC61+GvJ2W/TyInH7GPbli06Ljd1Y6gl11hnZFiKPq4MdYrW8Er/M1Ybl6nRzmTzHmq28a6HVb0Llc70la3MIy3C6eZztyRecUcPYjSNIA9Tq4VB5pSeG2mmTvBcElv9Z3flGqKZFTwy1MTLd3WvnhtHFCiqx3yVCq59stIh7lSAxVI7fhcAZ+VdsmaKGlj8Ol+WOEM2L4TRUvORLc3cUCH6PWKtfj3Tnc3U3MXpimJvRg+qzyLu+zGVz6Iz81hn1Vy/krPlHYtg0rtf9tDNyJnav19Qoncc59x5iOA0zg7zVC4zEst4pCRuqVY0z2z9Fz1uPwEgsSFwn9sHFTzojp2MPT3MWGIkFietg2O/e3vSNqHMRGIkFiZE3bYGRWJC4Cs4ub99ltXojdo/WRoGRWJAYedMWGIkFiTfV8+qFT1gj/4zdk6UaVQqMxILEM8nbX/w48jZLYCQWJEbedHvgeR+CX2/apb+2Mdl/WKvDfuNyH06rQ1arp5xWp2KPYlyN+cgSvweP1fKP2JWSQ5TNechG69/jjLzojDzhnyDb6BHI8YHiWr+Rm9VysOm3Dy0SF8Vqf3s3x2VbchQ49DRDv52MM/JYkx9csW2edom86Qkco9GOBp1Fq+X52LK6huSjEZzbJ7f5gsdOfm5RNv+pDR/XeuOjsfPrGpKPqIyW1QLD5rQFjiLxl4sPOC3HY8vqNsiHb9tFzoz3d6+zRp6Lnexco2w9pDp8XNkrNzotL8fOs5uejz/H2Ao2GNaoI7GTnHOUrYdKG23gntjvvBE7z27jfBwpcn0g32p5J3aCc47SdVF1ow3cE0/uIzcg3269XBg5P9JyZ5EbTT5/ySVK10Utx+/sKYIuahg/31NDy/EiJ1LfLDqVKFsfNRz7ZKg1qt/FGvVq7HxvFFndWrL97qOxE9qGKFsfVR/XGvXzelvQOmXQ6lDsfDdtU/basFqOxU5oG6JsfVR93FFP7au3Ba1TBi1LsfO9Ufg2X+SC0+ql2AltQ5SujwyGi34OvWtAzqeGVi8VudCmzcdiRvn6qPa4p5d3bS0C44/pGpDz6aGGRS4gcN4CjwfFliIw/pguuqRtEZghdN4C33/Lh4rAJNADnyhygYtYeQvMObDkfRHLX1KP/4uYf5StjxqOvbfeFpTiVWiVz22ktVUZoic19yhbH5UfW6tD9bag9cqgnoyd79ZM5PAwlTJfgf2sqCIwjZ6JpTObSunxE7z9RO/oyc04ytZFHcf285OLQDR5LrTN9WEGD48T5iuwf0KoCESzn0ZSeT5O6OGB/nwFXut97qt/w7vOPbEldW19oN/Dkjr5CuyfSloZdG6qq+34z3ZG/hZbVNfWJXXeZXWwQ6yWV2InPbcom/96v4d61q9fVcfMK2vU07Fz7NaJdq5Muc6q/UQOAk/iaJVDySavSmnbtCLl+6EnrrYxlc17oIb9F7/2d87rQts29rzvB4nzFHgSWqzf++jMnp03zNou/PzqJu/MYJH3IgynMxX4YmN/0+93NDLd3X7/ow33RjLd3U3fG8m2edg8DSTOV+DLQqtTk4tRl+9OeHjtb43fndAi73QYTrdA4ITDMmy+OkiMwLFFdcg7H0hMDxxbWEfPi8ShG1rZjMcWIqWwDJvpiRE4vogOeePAcJoeGHkTB4kZQtPzJg4Scw7MsDlxkJiLWJzzJg4ScxWaC1aJw7TL99/qkHesVk+VzZ9/LZuty8X8MT0yPEh8YQE1a+RXK1p9bNb8+ff497Z9oUGLvPFos8RWq7/bXvfeeXPoP8N/VuzyIG9LaeM58eQB90H31qpyOFza9lGn1Z/alUPFw/hNoU09sV/p4tTg5g9XnUP/mf6zW5LD13iet2G0QWL/kPtqb0HVlUP/2U1+kB55Myf34fTQyEN159AaGWQrr2bY3Hiy7YkD7reT4z5WlmFzOuTYE1uj7g+VP6fVA1nlTtPzJkdmPfHJcVFcEyp3/lj+mFnIa7hglSwZ9cRPhM6d3/M3eXk1PW/y5CDxsCcPhs6bv2AWu9zIC1kMp4f97u2hq9IfM3a5NxuWYXN+pNwTn9ULHwmdr8nsrBTl1QybsyXVnriO3f6uhj9mcvIaLlhlT4o9sd8nKHSeTi/v2pqUvJqetzWk1hPH2AFvZV9nZzLyGnre1pGYxHtD58dpWWpAuZEXMhhOa3UodD06o56MXu6rhGXYDClI7B+4D11T1qhXY5cbeSGb4fTIdO4KVZ3+WI2Wl3NeSK0ntlqeCVVrVsux5uaBq82QqsRG7qu78ob9zj2xy4m8kKXE/rzUz5Cqq3pXBp2bmvoUEj0vZCGxM+rZOmZmjQfFFmvU0/HLh7yQ/4Wto+OlbddXVdH+s/xnNqBcVwQXrCDLntivILna396dt3pHg87iZJnaJpaRC1aQs8ROi7VaHj+zZ+cNs5bLz692Rh5zRr0VvRzICy0eTk+Wm7VaDo5Md/f4QHHttHL4//Ov8a9t8vKxDJuhdRK/F1qdmlyM0uqw7519TP594W+non8/5IVYNHo4nUFwzgu1g8TIC4mDxPS8kDhIzLAZEgeJOeeFxEFiLlhB4iAxV5shcZCYW0WQOEjMfV5IHCRmkgYkDhIzwwoSB4mZHgmJ03aJmdsMydNWiZEXsqFtEiMvZEdbJEZeyJbcJUZeyJ5cJUZeaA25SYy80DpykRh5obWkLjHyQutJVWLkBUhUYuQFSFRi5AVIVGLkBUhUYuQFSFRi5AVIVGLkBUhUYuQFSFRi5AVIVGLkBUhUYuQFSFRi5AVIVGLkBUhUYuQFCMxoWS1YI89VIO8L/geBCgQIzHh/9zpr1BFr5PzM4ho579/rP4OKA4jISMudTsvx0gJrOe7fQ6UBNIhzfdlhtXrEajnmjDrhtNhJGHXC/83/n39N7O8JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCE4v/t8177cNMPugAAAABJRU5ErkJggg==",
    xE = "/imgs/html-92b76a73.png",
    SE =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOgElEQVR4nO2dCdCVZRXHz8Pnwi4groElmijuK6m4YCqJpZmJqJla40qGWjgYZZQL5p4GJZlboKKTGzoouWSAiQsuqONY42Q1LVrZYlpZnebcy51B6uO7977LeZ/7/H4z/wGGmfve5zznf577vu+ziAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtIW+JIqIQafkgKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyBKQQUAmUEJgkoBHHngKSGd8ARMVAMjIEpBBQCZQQmCSgEceeApIZ3wBExUAyMgSkEFAJlBCYJKARx54CkhnfAETFQDIyB/Sp+yKQJHwmlft+3l4kumiN62dmixx8WdJ9dg246LOjggUH79A4aQv3v79sg6Oab1P//pAlBL50iev9s0b8tq3bBkdTwDnjsisHA7zwj+v1viB62f9C+vbN9395rBx03JuhV00TfXFrF/kgM74DHriob+A8/EZ16YtChg7N9x+40oF/QyccGfXVhlfojMbwDHruqaOB3l4teMkV00IBijLuq1loz6PRJov94rgr9kRjeAY9dVTPwy/eJ7rZtOcZdVVtvHvSp2737IzG8DRC7qmTghdeWN+p2p769g94zEwNj4AqYMyYDz7tcdI0uX/PKCtn3mP01r/5IDG8DxK4qGPjumdUxr6yQvY6aezEGxsAVMGmVDWz3vAP7+xtWunnltGRu2f2RGN4GiF2eBranvttu4W9UWY3WHxL0tYcwMAaugFmrZuDzJ2e/fhkaN6a82WaSGt4GiF1eBv79Y6L9+/qbs1ndcCEGxsAVMGxVDDztZH9TtqIh64Ra0Sm+PxLD2wCxy8PANtNqw6H+pmxWgwcGvWZ6Wf2RGN4GiF0eBr732/nd+24/MugVU0WfuUP09cX11Ub259J5oldPE917l/oroXY//9hDgr6xpMz+SAxvA8QuDwNPOjq7cfv1qd+X/ufFnq9nr4J22LK1z990WKgtPyy/PxLD2wCxy8PANuc46/vZR29qfR3xxPE9f3ZXV9Azjwv61tNe/ZEY3gaIXWUb+O/PSs0kWa553ufba+u/losefuDqf44/eZt3fySGtwFiV9kGfnF+tmvarht/far99trIOmqz//3MGWeK/vP5KvRHYngHPHaVbeAHr8t2zQP2yD6pwh54NeZejx0d9JUFVeqPxPAOeOwq28C2cCHL9T57eD6zor46SfTa85p7CKal9kdieAc8dpVt4NuvzHZN28ius/sjMbwDHrvKNnDWd8AH7omBOwpvA8Susg38yA2S+f2v7VLZuf2RGN4Bj11lG9geGGW95qxzO7k/EsM74LGrbAPb6NmrV7Zrrjso6E/v79T+SAzvgMeusg1s2nJEtmuaRgwPtd08Oq8/EsM74LHLw8C2QCDrdU22Fc+NM6r3Kkgz9UdieAc8dnkY+KaL8t2Jw1YcPXZzp/RHYngHPHZ5GNiOTFlzjfwM3JAdZLZgduz9kRjeAY9dHgY2fXI1iwqyasetgt5yaTXmNmvL/ZEY3gGPXV4GtuWARRm4ITti1FYu/XZRTP2RGN4Bj11eBjbZrKqiTWxae62gnz406LN3xtAfieEd8NjlaeDn75LayYBlmHjl1UwPfLe6T64lNbwDHrs8DWz6+uk+e0NvNzLozZeI/vsF/z54b38khnfAY5e3gc1AB+9TvoEbsu19bruiSv2RGN4Bj13eBja9uVRqI6KXiUWCfvhD/mcDY+AKGCI2VcHApt8tzr7ZXVZ1dQX94gm+q50kNbwNELuqYmDTHx+X2mQMTxOLBN1qRNAnnDa3k9TwNkDsqpKBGycW2iiYdcVSVq3RFfSCM8p/Wi2p4W2A2FU1Azf0w+9JbSKG92h81MGhthUuBsbA7maNycAmO0zshMP8R+OD9irvvlhSw9sAsavKBl55G9j9Rvua+JCxobYxPAbGwO6mjc3ADc2fJbrLNn4mPuv44tsqqeFtgNgVk4EbWjRH9KP7Zjt1sB2FEGq7ahbbH4nhbYDYFaOBG3ruzvo9sh12VpaJN14/29EuPfdHYngbIHbFbOCVZ3JdeY7o+zcux8TnnlZcmyU1vJMndnWCgRt6d7norZeJ7jSqWAMP7B/0z08U1R+J4Z00sauTDLyyFl4rtfnNRZn4m18qqj8SwztRYlenGrghO+93/93zN/Do7Yppt6SGd4LErk43cEN3Xi26wbr5GbhXr6C/frSI/kgM78SIXakY2GR7Y+21c34mnnd5Ef2RGN5JEbtSMrDpradF99gxHwN/4YT82y6p4Z0QMcvm96ZmYNNrD0ntlMOsbT94HwyMgR0T+fXF1TSwLWIouu02LTJr27f5IAbGwE0m3M8flNrWqLboPa8kthP+sibxkQeFXN/jXnhGfXRcOq9YAy+Zm73t6w3BwBi4h0Sz0wVmnCnat3c9aU6ekF/S3Ped7El83Mfz+T7L737vQoVRmxW7DtemQ2Zte78+GBgD93CavW3vsuqE+rtn5pPENtplTeJTJ4bMo+75k6W2+fqqn33OScXeX2e9D+7qwsAYuJvXHXYEZ3erbQYPDPri/OwJvOdO2e8Dp3wm28buq5v2aNva2ESMIsxra3vt87O0vX9fDIyBV9kjeda5UjNoT8lj281kOaX+hXvy2VDdFhG0c1tgG7o3cyrDpsOCvrEkfwO/ujB7+zdaDwNj4BUJZXsS79riYvWhg4P+6Mb2Rp8xOYy+pjuuau3adj6RnR7YyjXGjs7/fvjqadkNvN1IDJy8gf+0VPRzx9Tvp9qd0jfp6FA7c7eZxH17mdQ2asvDvCZbk9vsqDt9UvvnAo/fO799qexzNt8ke9uPGIeBkzbw3ItFNxyaj5HsKfVJE0LtyfJfnnzvdWxr1JfvE71iqtR+kuZlXrumPYTqqZ3LfiC6fQ4nL9i+WLYBfNa4n35MddcFS2p4m7Bd/eyB7A9RVie7jx4xPOjwDetGK+Ia9hCsmbbuvkN+17T7zgWz24u5/QyffGx+3+XB6/LPC0kNbyNmkY2YRRm4DH3l1OYMvHiO5L5/1d671I8JbWanSNss/pZLpfZuOa/r9+1dzHtqSQ1vE2aRLUfLY06ul1o5DGzi+OJ+adi9qE12ue4CqW06d89M0RtnSO1khUP3C7ruoPyvO3E864GTN7Al9mVn+5yPm1X287yVY0dsAYFtReP9vfPSw9cXU9QlNbxH0awyE4wb45+QrcoKT6tttZ+x3t87D+00qrXihYE72MCm3/xYdP0h/onZrGwktddf7bT1xCP8v38VH17pCklqeJsvz3nPZe5vnEUXndV+O+09dB6vlLw0oeD1z5Ia3sbLU3d9q9hXS3nIJkBkffpqvzi2+IB/W1rVsA3yXc6JgTvMwCZ7elr2kSHNymZR5bVO95cP5zuppGj171vOod+SGt6GK0L2sKdPQZMvsuiqafkvKLCn2d7tkh5kSx3vb3PyCAZO0MAmq/Z2Do938jY07eRi7v1spZFNyvBun3SjQQPaWzCCgRMegRv61SP5rNnNIvs5bxMiimynzaf+8intL+goStuPDPrSveX2uaSGt8nKWCN8zfTm1gjnLZvBZBuil9XWx28t/lyjZrTWmkGnnljslj4YOBEDr7xLx6c+Vl8+WMaoa69L7Jplt9PmNl9/gc+9ca9eQT9xQNBXFvj1s6SGt7HKlu2kYdvt/L89pLLKfsIeMra1Oc5FydYP28O8Mu6P1xkQ9JQjQ23JpXe7JTW8A+4l2zvZTsjbd7f63lFZRh3bCcS2uPnFw/7t6u5p9SVT6mbOa7KLvdO1bXptR5F3ctooIA9JangHvAqyA65tIf9XJ4kefmDQnbcOtamZNrJYstpobffQm2xUX8NrezmbYefPqm/u7v39W5GZbdGc+t5hpx1VPx1hhy1DbWMEa2OjmA3oV//3ZsNDbfsgWz1kC/Bvv7K+Ftu7HdqNJDW8A46IgWJgDEwhoBAoIzBJQCGIOwckNbwDjoiBYmAMTCGgECgjMElAIYg7ByQ1vAOOiIFiYAxMIaAQKCMwSUAhiDsHJDW8A46IgWJgDEwhoBAoIzBJQCGIOwckNbwDjoiBYmAMTCGgECgjMElAIYg7ByQ1vAOOiIFiYAxMIaAQKCMwSUAhiDsHJDW8A46IgWJgDEwhoBBoiiMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEg+/BceiofdqS/+vQAAAABJRU5ErkJggg==",
    AE =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACeCAYAAACxStHNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAz7SURBVHhe7Z0JbBTnFcefT3wbqMHlsA3mDFe4kiYqkgM9pARThaiNklBKExDBVC2qCiVHAwFCIW2KUqQUkoYqhdIDCKmKAVVtoKhETcp9nwYbc4RgDtsYsI1N3/tmNgVig3eO3bfL/ycP7Mwu62XnN++738TQS1tvEADhpP4GxdoPAQgrEBGoACICFUBEoAKICFQAEYEKICJQAUQEKoCIQAUQEagAIgIVQESgAogIVAARgQogIlABRAQqgIhABRARqAAiAhVARKACiAhUABGBCiAiUAFEBCqAiEAFEBGoACICFUBEoAKICFQAEYEKICJQAUQEKoCIQAUQEagAIgIVQESgAogIVAARgQogIlABRAQqgIhABRARqAAiAhVARKACiAhUABGBCiAiUAFEBCqAiEAFEBGoACICFUBEoAKICFQAEYEKICJQAUQEKoCIQAUQEagAIgIVQESgAogIVAARgQogIlABRAQqgIhABRARqAAiAhVAxGik8QZRA2/19na14dattvH/z8nrZJN/E0Zi6KWt4f0EAeSLkC8oGIJ8eVi4/VJP5ANxMfaOh4hM161Tmd8+iYZ3SKLcrCRK4d/XrW0rczzAuZrrVFXbQOer6unc5Xo6y/u7ztdR+flaonj5fPyiWB8+Y3PwBaFDRJawMC+VXn0sh67Vt8yurLQEypCTqpyqukaq4JMtJCXE0qJNZ2jJvkrvZJSodr2RCnum09NDsmh49wxqnZ5IyfHBvX8VB4Ezl2ppzd4L9KedF2h7+VX+wD5dNLejRkS+msf3zaR3x/awD0Qvyz4+S99bdYKolcuLSCLgtUZ6oaA9TXqkA+W1uTXquWXbicv06rpyKt5fRZTKIdLPCMki6g8p4FbsKoxcuBVzB9O80V08l1AYkptGaybdR1un9qXBWfz+wVabggQiRhISBbl43zCxpyk9vpQabz/hHyLktp/0p9kceU1Dx6dGDUSMFLj4GtyuFVVMH0DDe2baB0PHK6PyaPXYfKtO6oOMakTMSpKmGmgSkTC7FW2e0i8kUbA5Rg/Kos1FvYjEQ49l1CEiVz/apUDEJuHiOCBhsC1hP/hqtwxa+13vIyOKZs3IiU6MpeLneqqQMMBj/drS0m/nWjJ6BETUDJ/otU92oQ4+tIrdMvahbCoa2tYzGSGiVrhILuyeZqKPVn7zVDfKyUzwpIiGiFq50kCvfSvP3tHLmmd78EVj77gAImpEomGfDLq/Y4p9QC+dMxMpXzq8XUZFiKiRukYqGpZt77jHjCNfrP18O19z3X7GHRsPV1LW67vp2IVaNsldY0rNWPP0IW2p6Oud6BqfBC/plZ1sPwqeQ2ev2o+8IYlbwCu3V9C0v58hSmjmxElk4Z8rrw1x3VKWz//rjaepuOQylVfWG8FN6EmLpwKOYoV9W9Oz3OgItm/y6vUbNHtNGc3/92fWmLnbcWhu8OiZBibDV17C37lUpPdO7U8ZDicYtJm3my5drPO+3LjTjBb+Hibcl0G/HdfTPuCMxR+eoiIRXrhd+kAxKi1e/m6WP55LzzzQzjp2F2QyxOhlJZbYzV1MwcKfQ0/RLCfH081+Xxe0DbzPF97b5XYn+ALq1TnV3nHGH7eco6I1p/h38U5TskgEk00uUJZyzPLj9AaLezde/KCUhr65n8plWptXEtroEdFr/Jy25CcsRh8X1QkpNsf8pZQomU9tS74DeU1qHE1be8oI3BQflVRR7txdNP8jfj6Z7fbhu41eESMVFjEz2fl48saDF62iN1hZODqOeb/slnqxNHJ+/P5xGvbWQSsKOqzitASIGGUcKKu2pvsHiy3uM384agRct/cCZc7dSW9+ct63KHgzEFEh+betMQmGijoXjT6uv24/V0uZs3fQyKXHuBHBFVaP64LNAREVYvrlHJKXkWA/cog0pqRoFwF9joI3AxGjjAd6ZFr9hW4IoYABIKI2WII6F32qMrU/vyO3ur3ul/UZiKiQkxeu2Y+cseKprlZUlCI2QoCI2uCIKAve3SBRccOkXhwVeSdCIiNE1AafkUMna+wd58gCq9IX+1OBFNM+rr7zCoioDW4nvHu42oyQuEXWO//rR33N6rucNG5NKxYSImpDWqwszMfHquwD7pHVd4emD6C1z3W3FsvXsJDKimyIqJHEWFqw4bS94w0ypUyWHchi+c0/7E2FXVItIWUGjoIoCRE1Ehdjcs7sOn3FPuAtsiRU0omUzryfXng4y4rCklIkjFESImolJY5+9rcye8cfpA4puXMqZwyiXz7akXLSw1ePhIhakah49LKZfOA3MnF46tc6mUnES5/Mo3xZvhpiISGiZhJiaOSKUs/WmNwNEVLWK5f8tL+V50aQIjsEQkJEzUjd7VojfX/ZEftA6JCW9o15Q+ntx3OsXDceLaRvDoioHY6KUkRPCIOMwsRhX6bKWYOpaHAbX6MjRIwEuMhcsuMiTf5ziX0gtEiRLVkdJBOY6Rj3ITpCxEghOY4Wbb1A31lyyMygDgfS7SMNmvH9M63GjIdAxEiCI9OqQ9WUt2Cv52uuW4pER8lW+/YTuVaHuEdAxEiD64yXquqo97w9NHt9uX0w9EjdcfU4bll71M0DESMRaU2nxtHMf5wxyzwl9Uc4kJa1V+mMIWIkw/VGWeY5YvEhGrX4gFl/HGpERhmVcduAgYiRjkRHFrK4tIaGLbKElLQgoURGZSSXo5uxaogYLcjqO25IiJBDFx6gIb/aE5LhwQDvBW7W5LCIhojRhi3k9opaGvm7oxQzYzu9s/lT37t8JKPYrIJsa3mCAyBitGIX2bJI/vnVJ8yieUmiVHbR+ZrpuzHtG53NfQGdABGjnYCQXGTO/08FdZm3xwwX+jHXUSbfjh/UxlFdESLeK4iQkr2BnZS7ow5csM+M0njdMT7mK+0dLfCHiPcaIqRdj1x1pJp6z91tIqRXU80eys+wfkeQjRaIeC8jQqbH05I9lZQ1Zyd9sKPCfsI5UjybrpwgS2eICKwim3+eWHbMtLDd8mCnFI6I9k4LgYjAQopTLq6lhe22Q7xLuyQUzVGPnGCHncZ3RWRMjKWJK4/bB5zRuS1EjF7kxF5toIIOydQ6I9E/GbneuL3siqv+xo6Z/PmCBCJqR4STUZGEWFr+dFeTQuSfY/KtEQy/ZOQGx0kXyUIzOKqijhhNSMdw/Q2aXdCeKl8e+Pm9UCTb16zh2b5M2Q8XEFEjEulqGkxakNKXB9Aro/K+cNOiGY/mUEEut079kJGjWZqLOxvUyR9BmgURNWEXw7LAfcPkXiYtiGRjaA4ppuXu9p7KKJ+Bi2Y3N6R0UqxDRC2ITFwPlHXEssBd8hu2hM1T+lFB52SrHukF/D5moqsLyhzcJBIihhuJQNwalmRIFdMHmLUgwSAjGesn96EJgZV1bhowLGFhz3T6QYE7EUs+vQIRIwqWRvIVHpze3yRDCvYuoQFERrmJpFlZJ5FRomswQspruU4qMq+Y0Nu8nxv+e0pEtHdaCEQMM+lcHLu5le/NSDStmDPYalHz+xopZZPWt2winGyBfXmOo2igTioyu5VQMt0WH6sxQ4bBoOc2uT6QkxLv6ja53X6xh45Jx26QxUxQsAiSgUuSH3mNzDncfaKaNh2poqMX66ha7iTFiPx92ifRw13S6MGuGZ5dCIIsTxj5XokZLmwxHMEh4h0IiYgmQhFVzBzouGjWhCzeknUzZmZPS2ERUTSHG5Gcz0I4Mn55jQwLFh+sDk5CG4ioAT5xkvHLiylY4WTq6lKiJGdKQUQt2FOwwpW1wS3yuVcdqHIUDQWIqAmWccTvj/qWxN0vZJnBuJUcDWWCrUMgoiakvsiNl4FvHYgoGaV+W15Zb31+h0BEbQRkXLg/IoppWQlo+g1dREMBImpEZOSfEe8cpjc+PGUf1IV0XEtXjeRrdCuhABG1IjJynXHa+tP0yMJ9YUvM2RSypqXX67s9iYQBIKJ2WMZNp69S79f3mJQhobrVRVNI/pw5a8pMkidJh+eVhAJEjASkSyQ5zqQMyfr5Lt9z2NyOFMPSx5k5dyfN2PSZNXznomHSFFEvYoLDfi2VSATihozJYcMRUupoMrbrxS11m0Ja7iJ9yuwd9Pxfy0kSOhkJfSB6x5plDFcmmn6zI6W1irMPthyZhTJl3SmrCPL46vcE+f/JmRMJeSvsnU6j+rUx61n6dEx1NItGiv1PjlfRtuPVNGPLeS6LuRogC6Hk6/PzO4j2SQ/mZLlZ7SYRSKOETWGmefHfkhaOP3N++yTqkxFP2anx1DnFuhDjEuMoOcWaWHH5klW0n7zSQGdZwGKuhxrxRGD5P/st381EvYj3MoGIaR7bfzdFoKQV58J10WH2TRRjopq9SWRvbgu8JlwS2kBEoAKICFQAEYEKICJQAUQEKoCIQAUQEagAIgIVQESgghiatgVDfCC8XG+k/wGCRHRkCfmGIQAAAABJRU5ErkJggg==",
    EE = "/imgs/download (3).png",
    PE = "/imgs/download (4).png",
    kE = "/imgs/download (5).png",
    CE = "/imgs/linux.png",
    TE = "/assets/santa1-553db8f0.png",
    jE = "/assets/santa2-01274478.png",
    ME = "/assets/santa3-e608165d.png",
    RE = "/assets/santa4-012aba9d.png",
    LE = "/assets/booking-54116a3d.png",
    OE = "/assets/ecom-59c9359b.png",
    IE = "/assets/logistic-30587fff.png",
    _E = "/assets/music-9c06445d.png",
    NE = "/assets/movie-8107ce04.png",
    DE = "/assets/anime-ab8397d9.png",
    VE = "/assets/quiz-dd43de7d.png",
    FE = "/assets/rps-f481a4cf.png",
    zE = "/assets/ip-ab8937b6.png",
    Gd = [
        { id: "about", title: "About" },
        { id: "skills", title: "Skills" },
        { id: "project", title: "Project" },
    ],
    BE = [
        { name: "HTML 5", icon: xE },
        { name: "CSS 3", icon: yE },
        { name: "JavaScript", icon: SE },
        { name: "TypeScript", icon: AE },
        { name: "VS CODE", icon: EE },
        { name: "PHP", icon: PE },
        { name: "git", icon: wE },
        { name: "Docker", icon: kE },
        { name: "Linux", icon: CE },
    ],
    bE = [
        { title: "Fullstack Developer", description: "If you have a unique web application idea, I can turn it into reality.", icon: ME },
        { title: "Angular Developer", description: "I can build powerful single-page applications (SPAs) and dynamic user interfaces.", icon: jE },
        { title: "PHP Developer", description: "With my keen eye for design and understanding of user experience principles, I can create captivating and user-friendly interfaces.", icon: RE },
        { title: "Responsive Web development", description: "I specialize in creating visually appealing and responsive web applications.", icon: TE },
    ],
    jo = [
        {
            id: 1,
            name: "SYSCOMMERCE",
            description: "E-commerce Store offering features like shopping cart management, filter products, search products, order placement, persisted state, smooth animations, beautiful icons, and responsive design.",
            image: OE,
            source_code_link: "https://github.com/PrtHub/Euphoria-EcommerceApplication",
            project_live_link: "https://euphoria-fashion.netlify.app/",
        },
        {
            id: 2,
            name: "SYSFIN",
            description: "",
            image: NE,
            source_code_link: "",
            project_live_link: "https://tmdb-pr.netlify.app/",
        },
        {
            id: 3,
            name: "Web Music",
            description:
                "Music web page built with React, Tailwind CSS, React Redux, Redux Toolkit, Shazam API, and Vite. Features include listening to songs, searching songs, viewing song lyrics, and accessing trending songs and artists.",
            image: _E,
            source_code_link: "https://github.com/PrtHub/Musix",
            project_live_link: "https://musix-pr.netlify.app",
        },
        {
            id: 4,
            name: "Logistic and Transport",
            description: "Sleek and user-friendly Logistics and Transportation UI built with React and Tailwind CSS. Features responsive design, easy customization, and well-structured codebase.",
            image: IE,
            source_code_link: "https://github.com/PrtHub/TransitFlow",
            project_live_link: "https://github.com/PrtHub/TransitFlow",
        },
        {
            id: 5,
            name: "Booking UI",
            description: "Sleek Flight Booking UI template built with React and Tailwind CSS. Features user-friendly interface, responsive design, easy customization, well-structured codebase, and warning/success messages.",
            image: LE,
            source_code_link: "https://github.com/PrtHub/Tripma",
            project_live_link: "https://tripma-pr.netlify.app/",
        },
        {
            id: 6,
            name: "MyAnimeList",
            description: "MyAnimeList built with React and Tailwind CSS.It allows users to discover and keep track of their favorite anime shows, View details about each anime show, such as its description, rating, and number of episodes",
            image: DE,
            source_code_link: "https://github.com/PrtHub/MyAnimeList",
            project_live_link: "https://myanimelist-pr.netlify.app/",
        },
        {
            id: 7,
            name: "Quiz Application",
            description:
                "Quiz Application built with React using the Trivia-API by API Ninja. The application allows users to test their knowledge by answering questions from various categories. Users must solve each question before accessing the next one.",
            image: VE,
            source_code_link: "https://github.com/PrtHub/Quiz-app",
            project_live_link: "https://quiz-ok.netlify.app/",
        },
        {
            id: 8,
            name: "Rock Paper Scissors ",
            description:
                "Play Rock, Paper, Scissors against the computer. If the player wins, they gain 1 point. If the computer wins, the player loses one point.View the optimal layout for the game depending on their device's screen size.",
            image: FE,
            source_code_link: "https://github.com/PrtHub/Rock-Paper-Scissors",
            project_live_link: "https://rock-paper-scissors-pri.netlify.app/",
        },
        {
            id: 9,
            name: "IP Address Tracker",
            description:
                "IP Address Tracker allows to search for any IP addresses or domains and see the key information and location. See hover states for all interactive elements on the page, See their own IP address on the map on the initial page load.",
            image: zE,
            source_code_link: "https://github.com/PrtHub/IP-Address-Tracker",
            project_live_link: "https://address-track.netlify.app/",
        },
    ];
var uv = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    $d = $e.createContext && $e.createContext(uv),
    Xt =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Xt =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            t = arguments[n];
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        }
                        return e;
                    }),
                Xt.apply(this, arguments)
            );
        },
    UE =
        (globalThis && globalThis.__rest) ||
        function (e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
                for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
            return n;
        };
function cv(e) {
    return (
        e &&
        e.map(function (t, n) {
            return $e.createElement(t.tag, Xt({ key: n }, t.attr), cv(t.child));
        })
    );
}
function _n(e) {
    return function (t) {
        return $e.createElement(HE, Xt({ attr: Xt({}, e.attr) }, t), cv(e.child));
    };
}
function HE(e) {
    var t = function (n) {
        var r = e.attr,
            i = e.size,
            o = e.title,
            s = UE(e, ["attr", "size", "title"]),
            a = i || n.size || "1em",
            l;
        return (
            n.className && (l = n.className),
            e.className && (l = (l ? l + " " : "") + e.className),
            $e.createElement(
                "svg",
                Xt({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, r, s, {
                    className: l,
                    style: Xt(Xt({ color: e.color || n.color }, n.style), e.style),
                    height: a,
                    width: a,
                    xmlns: "http://www.w3.org/2000/svg",
                }),
                o && $e.createElement("title", null, o),
                e.children
            )
        );
    };
    return $d !== void 0
        ? $e.createElement($d.Consumer, null, function (n) {
              return t(n);
          })
        : t(uv);
}
function WE(e) {
    return _n({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d:
                        "M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z",
                },
            },
        ],
    })(e);
}
function fv(e) {
    return _n({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d:
                        "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z",
                },
            },
        ],
    })(e);
}
function QE(e) {
    return _n({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d:
                        "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z",
                },
            },
        ],
    })(e);
}
function GE(e) {
    return _n({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d:
                        "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
                },
            },
        ],
    })(e);
}
function $E(e) {
    return _n({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d:
                        "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
                },
            },
        ],
    })(e);
}
function YE(e) {
    return _n({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
            {
                tag: "path",
                attr: {
                    d:
                        "M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z",
                },
            },
        ],
    })(e);
}
const KE = (e, t) => ({ hidden: {}, show: { transition: { staggerChildren: e, delayChildren: t || 0 } } }),
    dv = (e, t, n, r) => ({
        hidden: { x: e === "left" ? 100 : e === "right" ? -100 : 0, y: e === "up" ? 100 : e === "down" ? -100 : 0, opacity: 0 },
        show: { x: 0, y: 0, opacity: 1, transition: { type: t, delay: n, duration: r, ease: "easeOut" } },
    }),
    jn = () => ({ hidden: { y: -50, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay: 0.3 } } }),
    qE = (e, t, n, r) => ({ hidden: { x: e === "left" ? "-100%" : e === "right" ? "100%" : 0, y: e === "up" || e === "down" ? "100%" : 0 }, show: { x: 0, y: 0, transition: { type: t, delay: n, duration: r, ease: "easeOut" } } }),
    ZE = (e) => ({ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: e } } }),
    Ri = () => ({ hover: { scale: 1.1 }, tap: { scale: 0.9 } }),
    Yd = (e) => ({ initial: { opacity: 0 }, show: { opacity: 1, transition: { delay: e, duration: 1, ease: "easeOut" } } }),
    XE = () => {
        const [e, t] = S.useState(""),
            [n, r] = S.useState(!1);
        return x.jsx(x.Fragment, {
            children: x.jsx("nav", {
                className: "w-full px-6 sm:px-16 py-5 bg-white bg-opacity-20 backdrop-blur-md backdrop-filter shadow-lg fixed top-0 z-50",
                children: x.jsxs("div", {
                    className: "w-full max-w-7xl mx-auto flex justify-between items-center",
                    children: [
                        x.jsx(lw, { to: "/", className: "flex items-center gap-2", children: x.jsx("img", { src: vE, alt: "logo", className: "w-11 h-11 object-contain" }) }),
                        x.jsxs(F.section, {
                            className: "hidden sm:flex items-center gap-16",
                            children: [
                                x.jsx(F.ul, {
                                    className: "list-none hidden sm:flex items-center flex-row gap-10",
                                    children: Gd.map((i) =>
                                        x.jsx(
                                            F.li,
                                            {
                                                whileHover: { scale: 1.1 },
                                                whileTap: { scale: 1 },
                                                className: `text-base ${e === i.title ? "text-yellow-1" : "text-text-blue"} hover:text-yellow-1 transition-all duration-150 font-medium cursor-pointer`,
                                                onClick: () => t(i.title),
                                                children: x.jsx("a", { href: `#${i.id}`, children: i.title }),
                                            },
                                            i.id
                                        )
                                    ),
                                }),
                                x.jsx(F.button, {
                                    variants: Ri(),
                                    whileHover: "hover",
                                    whileTap: "tap",
                                    className: "yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button",
                                    children: x.jsx("a", { href: "#contact", children: "Contact" }),
                                }),
                            ],
                        }),
                        x.jsxs("section", {
                            className: "sm:hidden flex flex-1 justify-end items-center ",
                            children: [
                                n
                                    ? x.jsx(F.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, children: x.jsx(GE, { className: "w-[28px] h-[28px] object-contain cursor-pointer", onClick: () => r(!1) }) })
                                    : x.jsx(F.div, {
                                          initial: { opacity: 0 },
                                          animate: { opacity: 1 },
                                          children: x.jsx($E, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "w-[28px] h-[28px] object-contain cursor-pointer", onClick: () => r(!0) }),
                                      }),
                                x.jsx("div", {
                                    className: `${n ? "flex" : "hidden"} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-white`,
                                    children: x.jsxs(F.ul, {
                                        initial: { opacity: 0, y: -20 },
                                        animate: n ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
                                        className: "list-none flex justify-end items-start flex-1 flex-col gap-4",
                                        children: [
                                            Gd.map((i) =>
                                                x.jsx(
                                                    "li",
                                                    {
                                                        className: `text-base hover:text-yellow-1 transition-all duration-150 font-medium cursor-pointer ${e === i.title ? "text-yellow-1" : "text-black"}`,
                                                        onClick: () => {
                                                            r(!n), t(i.title);
                                                        },
                                                        children: x.jsx("a", { href: `#${i.id}`, children: i.title }),
                                                    },
                                                    i.id
                                                )
                                            ),
                                            x.jsx("button", { className: "yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button", children: x.jsx("a", { href: "#contact", children: "Contact" }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    };
function JE(e) {
    return _n({
        tag: "svg",
        attr: { viewBox: "0 0 576 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d:
                        "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
                },
            },
        ],
    })(e);
}
const eP = () =>
        x.jsxs("section", {
            className: "w-full h-full absolute top-0 left-0 z-30 ",
            children: [
                x.jsx(F.div, {
                    className: "floating-icon star",
                    initial: { x: 100, y: 100 },
                    animate: { x: -100, y: -100 },
                    transition: { duration: 6, repeat: 1 / 0, repeatType: "reverse", ease: "linear" },
                    children: x.jsx(JE, { className: "text-2xl  md:text-4xl " }),
                }),
                x.jsx(F.div, {
                    className: "floating-icon linkedin",
                    initial: { x: -100, y: 100 },
                    animate: { x: -50, y: -100 },
                    transition: { duration: 7, repeat: 1 / 0, repeatType: "reverse", ease: "linear" },
                    children: x.jsx(QE, { className: "text-2xl  md:text-4xl ", onClick: () => window.open("https://www.linkedin.com/in/pritam-ghosh-dev/", "_blank") }),
                }),
                x.jsx(F.div, {
                    className: "floating-icon twitter",
                    initial: { x: 100, y: 100 },
                    animate: { x: -100, y: -100 },
                    transition: { duration: 7, repeat: 1 / 0, repeatType: "reverse", ease: "linear" },
                    children: x.jsx(YE, { className: "text-2xl  md:text-4xl ", onClick: () => window.open("https://twitter.com/PritamGhosh010", "_blank") }),
                }),
                x.jsx(F.div, {
                    className: "floating-icon github",
                    initial: { x: 100, y: 100 },
                    animate: { x: -100, y: -100 },
                    transition: { duration: 5, repeat: 1 / 0, repeatType: "reverse", ease: "linear" },
                    children: x.jsx(fv, { className: "text-2xl  md:text-4xl ", onClick: () => window.open(" https://github.com/PrtHub", "_blank") }),
                }),
            ],
        }),
    tP = () =>
        x.jsx(x.Fragment, {
            children: x.jsxs("header", {
                className: "w-full relative h-[500px] md:h-[600px] max-w-7xl mx-auto",
                children: [
                    x.jsx("div", { className: "absolute top-40 left-0 lg:-left-14 z-[0] w-20 h-40 lg:w-36 lg:h-80 rounded-full blue__gradient" }),
                    x.jsxs("section", {
                        className: "max-w-xl md:max-w-2xl flex flex-col items-start justify-start px-5 sm:px-16 absolute top-40 xs:top-48 inset-0 gap-5 sm:gap-8 z-40",
                        children: [
                            x.jsxs(F.h1, {
                                className: "text-text-blue lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] font-semibold",
                                initial: { opacity: 0, y: -50 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 0.3, duration: 1, ease: "easeOut" },
                                children: ["Hi! I'm ", x.jsx("br", {}), " ", x.jsx("span", { className: "text-yellow-1", children: "Hugo Matheus" })],
                            }),
                            x.jsx(F.p, {
                                className: "w-full max-w-lg text-text-gray font-medium text-base sm:text-lg",
                                initial: "initial",
                                animate: "show",
                                variants: Yd(0.7),
                                children: "Frontend Developer passionate about creating visually stunning and user-friendly web applications. Eager to collaborate, expand my skills, and make a meaningful impact in the industry.",
                            }),
                            x.jsx(F.div, {
                                initial: "initial",
                                animate: "show",
                                variants: Yd(1),
                                children: x.jsx("a", {
                                    href: "#contact",
                                    children: x.jsx(F.button, { variants: Ri(), whileHover: "hover", whileTap: "tap", className: "yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button", children: "Hire me" }),
                                }),
                            }),
                        ],
                    }),
                    x.jsx("div", { className: "absolute top-40 right-0 md:right-10 z-[0] w-24 h-24 sm:w-32 sm:h-32 lg:w-52 lg:h-52 rounded-full light__gradient" }),
                    x.jsx(eP, {}),
                ],
            }),
        });
var nP = Object.defineProperty,
    rP = Object.defineProperties,
    iP = Object.getOwnPropertyDescriptors,
    Kd = Object.getOwnPropertySymbols,
    oP = Object.prototype.hasOwnProperty,
    sP = Object.prototype.propertyIsEnumerable,
    qd = (e, t, n) => (t in e ? nP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
    Rr = (e, t) => {
        for (var n in t || (t = {})) oP.call(t, n) && qd(e, n, t[n]);
        if (Kd) for (var n of Kd(t)) sP.call(t, n) && qd(e, n, t[n]);
        return e;
    },
    Lr = (e, t) => rP(e, iP(t)),
    pc = class extends S.Component {
        constructor(e) {
            super(e), (this.ref = $e.createRef()), (this.state = { style: {} });
            const t = { reverse: !1, max: 35, perspective: 1e3, easing: "cubic-bezier(.03,.98,.52,.99)", scale: "1.1", speed: "1000", transition: !0, axis: null, reset: !0 };
            (this.width = null),
                (this.height = null),
                (this.left = null),
                (this.top = null),
                (this.transitionTimeout = null),
                (this.updateCall = null),
                (this.element = null),
                (this.settings = Object.assign({}, t, this.props.options)),
                (this.reverse = this.settings.reverse ? -1 : 1),
                (this.onMouseEnter = this.onMouseEnter.bind(this, this.props.onMouseEnter)),
                (this.onMouseMove = this.onMouseMove.bind(this, this.props.onMouseMove)),
                (this.onMouseLeave = this.onMouseLeave.bind(this, this.props.onMouseLeave));
        }
        componentDidMount() {
            (this.element = this.ref.current),
                setTimeout(() => {
                    this.element.parentElement.querySelector(":hover") === this.element && this.onMouseEnter();
                }, 0);
        }
        componentWillUnmount() {
            clearTimeout(this.transitionTimeout), cancelAnimationFrame(this.updateCall);
        }
        onMouseEnter(e = () => {}, t) {
            return this.updateElementPosition(), this.setState(Object.assign({}, this.state, { style: Lr(Rr({}, this.state.style), { willChange: "transform" }) })), this.setTransition(), e(t);
        }
        reset() {
            window.requestAnimationFrame(() => {
                this.setState(Object.assign({}, this.state, { style: Lr(Rr({}, this.state.style), { transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)` }) }));
            });
        }
        onMouseMove(e = () => {}, t) {
            return t.persist(), this.updateCall !== null && window.cancelAnimationFrame(this.updateCall), (this.event = t), (this.updateCall = requestAnimationFrame(this.update.bind(this, t))), e(t);
        }
        setTransition() {
            clearTimeout(this.transitionTimeout),
                this.setState(Object.assign({}, this.state, { style: Lr(Rr({}, this.state.style), { transition: `${this.settings.speed}ms ${this.settings.easing}` }) })),
                (this.transitionTimeout = setTimeout(() => {
                    this.setState(Object.assign({}, this.state, { style: Lr(Rr({}, this.state.style), { transition: "" }) }));
                }, this.settings.speed));
        }
        onMouseLeave(e = () => {}, t) {
            return this.setTransition(), this.settings.reset && this.reset(), e(t);
        }
        getValues(e) {
            const t = (e.nativeEvent.clientX - this.left) / this.width,
                n = (e.nativeEvent.clientY - this.top) / this.height,
                r = Math.min(Math.max(t, 0), 1),
                i = Math.min(Math.max(n, 0), 1),
                o = (this.reverse * (this.settings.max / 2 - r * this.settings.max)).toFixed(2),
                s = (this.reverse * (i * this.settings.max - this.settings.max / 2)).toFixed(2),
                a = r * 100,
                l = i * 100;
            return { tiltX: o, tiltY: s, percentageX: a, percentageY: l };
        }
        updateElementPosition() {
            const e = this.element.getBoundingClientRect();
            (this.width = this.element.offsetWidth), (this.height = this.element.offsetHeight), (this.left = e.left), (this.top = e.top);
        }
        update(e) {
            const t = this.getValues(e);
            this.setState(
                Object.assign({}, this.state, {
                    style: Lr(Rr({}, this.state.style), {
                        transform: `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === "x" ? 0 : t.tiltY}deg) rotateY(${this.settings.axis === "y" ? 0 : t.tiltX}deg) scale3d(${this.settings.scale}, ${
                            this.settings.scale
                        }, ${this.settings.scale})`,
                    }),
                })
            ),
                (this.updateCall = null);
        }
        render() {
            const e = Object.assign({}, this.props.style, this.state.style);
            return x.jsx("div", { style: e, ref: this.ref, className: this.props.className, onMouseEnter: this.onMouseEnter, onMouseMove: this.onMouseMove, onMouseLeave: this.onMouseLeave, children: this.props.children });
        }
    };
const Li = (e, t) =>
        function () {
            return x.jsxs(F.section, {
                variants: KE(),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: !0, amount: 0.25 },
                className: "max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10",
                children: [x.jsx("span", { className: "hash-span", id: t, children: " " }), x.jsx(e, {})],
            });
        },
    aP = ({ title: e, description: t, icon: n, index: r }) => {
        const [i, o] = S.useState(!1),
            s = i ? t : `${t.slice(0, 30)}...`;
        return x.jsx(x.Fragment, {
            children: x.jsx(pc, {
                className: "w-[250px]",
                options: { max: 45, scale: 1, speed: 450 },
                children: x.jsx(F.div, {
                    className: "w-full p-[1px] rounded-[20px] shadow-card",
                    variants: dv("right", "spring", r * 0.5, 0.75),
                    children: x.jsxs("section", {
                        className: "bg-white rounded-[20px] p-5 min-h-[280px] flex justify-evenly items-center flex-col",
                        children: [
                            x.jsx("img", { src: n, alt: "Icons", className: "w-20 h-20 object-contain" }),
                            x.jsx("h1", { className: "text-xl font-bold text-center text-text-blue", children: e }),
                            x.jsxs("p", {
                                className: "text-center text-[#9ca5ba] font-medium text-sm sm:text-base",
                                children: [s, !i && x.jsx("button", { className: "text-[#80aefd] text-sm font-medium hover:text-text-blue focus:outline-none transition-all duration-200 ", onClick: () => o(!i), children: "Show More" })],
                            }),
                        ],
                    }),
                }),
            }),
        });
    },
    lP = () =>
        x.jsx(x.Fragment, {
            children: x.jsxs("div", {
                className: "w-full flex flex-col items-start justify-start gap-10 sm:gap-20 relative z-0 sm:mt-10 md:mt-0",
                children: [
                    x.jsx("div", { className: "absolute top-[22px] -right-10 z-0 w-24 md:w-80 h-24 lg:w-[600px] lg:h-24 rounded-full gray__gradient" }),
                    x.jsxs("section", {
                        className: "flex flex-col items-start justify-start gap-5",
                        children: [
                            x.jsxs(F.h1, { variants: jn(), className: "text-header", children: ["My awesome", x.jsx("br", {}), x.jsx("span", { className: "text-yellow-1", children: "services" })] }),
                            x.jsx(F.p, {
                                variants: jn(),
                                className: "paragraph",
                                children:
                                    "I am a passionate front-end developer specializing in responsive web development and user interface design. With expertise in React.js, HTML5, CSS3, and JavaScript, I bring ideas to life through clean code and seamless interactions, ensuring visually appealing and highly functional web applications. Contact me at pritamattwork@gmail.com to discuss collaborations, job opportunities, or any web development queries. Let's create amazing digital experiences together!",
                            }),
                        ],
                    }),
                    x.jsx("section", { className: "flex flex-wrap justify-center xs:justify-start  gap-10", children: bE.map((e, t) => x.jsx(aP, { index: t, ...e }, e.title)) }),
                ],
            }),
        }),
    uP = Li(lP, "about");
var $l = new Map(),
    ao = new WeakMap(),
    Zd = 0,
    cP = void 0;
function fP(e) {
    return e ? (ao.has(e) || ((Zd += 1), ao.set(e, Zd.toString())), ao.get(e)) : "0";
}
function dP(e) {
    return Object.keys(e)
        .sort()
        .filter((t) => e[t] !== void 0)
        .map((t) => `${t}_${t === "root" ? fP(e.root) : e[t]}`)
        .toString();
}
function pP(e) {
    let t = dP(e),
        n = $l.get(t);
    if (!n) {
        const r = new Map();
        let i;
        const o = new IntersectionObserver((s) => {
            s.forEach((a) => {
                var l;
                const u = a.isIntersecting && i.some((c) => a.intersectionRatio >= c);
                e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u),
                    (l = r.get(a.target)) == null ||
                        l.forEach((c) => {
                            c(u, a);
                        });
            });
        }, e);
        (i = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])), (n = { id: t, observer: o, elements: r }), $l.set(t, n);
    }
    return n;
}
function hP(e, t, n = {}, r = cP) {
    if (typeof window.IntersectionObserver > "u" && r !== void 0) {
        const l = e.getBoundingClientRect();
        return t(r, { isIntersecting: r, target: e, intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0, time: 0, boundingClientRect: l, intersectionRect: l, rootBounds: l }), () => {};
    }
    const { id: i, observer: o, elements: s } = pP(n);
    let a = s.get(e) || [];
    return (
        s.has(e) || s.set(e, a),
        a.push(t),
        o.observe(e),
        function () {
            a.splice(a.indexOf(t), 1), a.length === 0 && (s.delete(e), o.unobserve(e)), s.size === 0 && (o.disconnect(), $l.delete(i));
        }
    );
}
function mP({ threshold: e, delay: t, trackVisibility: n, rootMargin: r, root: i, triggerOnce: o, skip: s, initialInView: a, fallbackInView: l, onChange: u } = {}) {
    var c;
    const [f, d] = S.useState(null),
        g = S.useRef(),
        [v, y] = S.useState({ inView: !!a, entry: void 0 });
    (g.current = u),
        S.useEffect(() => {
            if (s || !f) return;
            let m;
            return (
                (m = hP(
                    f,
                    (w, A) => {
                        y({ inView: w, entry: A }), g.current && g.current(w, A), A.isIntersecting && o && m && (m(), (m = void 0));
                    },
                    { root: i, rootMargin: r, threshold: e, trackVisibility: n, delay: t },
                    l
                )),
                () => {
                    m && m();
                }
            );
        }, [Array.isArray(e) ? e.toString() : e, f, i, r, o, s, n, l, t]);
    const E = (c = v.entry) == null ? void 0 : c.target,
        h = S.useRef();
    !f && E && !o && !s && h.current !== E && ((h.current = E), y({ inView: !!a, entry: void 0 }));
    const p = [d, v.inView, v.entry];
    return (p.ref = p[0]), (p.inView = p[1]), (p.entry = p[2]), p;
}
const gP = () => {
        const [e, t] = mP({ triggerOnce: !0 });
        return x.jsx(x.Fragment, {
            children: x.jsx("div", {
                ref: e,
                className: "flex flex-row flex-wrap justify-center gap-10",
                children: BE.map((n, r) =>
                    x.jsx(
                        pc,
                        {
                            options: { max: 45, scale: 1, speed: 450 },
                            children: x.jsx(F.section, {
                                variants: ZE(r * 0.1),
                                initial: "hidden",
                                animate: t ? "show" : "hidden",
                                className: "w-28 h-28 p-4  bg-white shadow-card rounded hover:drop-shadow-lg",
                                children: x.jsx("img", { src: n.icon, alt: n.name, className: "w-full h-full text-center" }),
                            }),
                        },
                        n.name
                    )
                ),
            }),
        });
    },
    vP = Li(gP, "skills");
var re = {},
    hc = {},
    Oi = {},
    Ii = {},
    pv = "Expected a function",
    Xd = 0 / 0,
    yP = "[object Symbol]",
    wP = /^\s+|\s+$/g,
    xP = /^[-+]0x[0-9a-f]+$/i,
    SP = /^0b[01]+$/i,
    AP = /^0o[0-7]+$/i,
    EP = parseInt,
    PP = typeof Bi == "object" && Bi && Bi.Object === Object && Bi,
    kP = typeof self == "object" && self && self.Object === Object && self,
    CP = PP || kP || Function("return this")(),
    TP = Object.prototype,
    jP = TP.toString,
    MP = Math.max,
    RP = Math.min,
    Ma = function () {
        return CP.Date.now();
    };
function LP(e, t, n) {
    var r,
        i,
        o,
        s,
        a,
        l,
        u = 0,
        c = !1,
        f = !1,
        d = !0;
    if (typeof e != "function") throw new TypeError(pv);
    (t = Jd(t) || 0), us(n) && ((c = !!n.leading), (f = "maxWait" in n), (o = f ? MP(Jd(n.maxWait) || 0, t) : o), (d = "trailing" in n ? !!n.trailing : d));
    function g(P) {
        var T = r,
            k = i;
        return (r = i = void 0), (u = P), (s = e.apply(k, T)), s;
    }
    function v(P) {
        return (u = P), (a = setTimeout(h, t)), c ? g(P) : s;
    }
    function y(P) {
        var T = P - l,
            k = P - u,
            R = t - T;
        return f ? RP(R, o - k) : R;
    }
    function E(P) {
        var T = P - l,
            k = P - u;
        return l === void 0 || T >= t || T < 0 || (f && k >= o);
    }
    function h() {
        var P = Ma();
        if (E(P)) return p(P);
        a = setTimeout(h, y(P));
    }
    function p(P) {
        return (a = void 0), d && r ? g(P) : ((r = i = void 0), s);
    }
    function m() {
        a !== void 0 && clearTimeout(a), (u = 0), (r = l = i = a = void 0);
    }
    function w() {
        return a === void 0 ? s : p(Ma());
    }
    function A() {
        var P = Ma(),
            T = E(P);
        if (((r = arguments), (i = this), (l = P), T)) {
            if (a === void 0) return v(l);
            if (f) return (a = setTimeout(h, t)), g(l);
        }
        return a === void 0 && (a = setTimeout(h, t)), s;
    }
    return (A.cancel = m), (A.flush = w), A;
}
function OP(e, t, n) {
    var r = !0,
        i = !0;
    if (typeof e != "function") throw new TypeError(pv);
    return us(n) && ((r = "leading" in n ? !!n.leading : r), (i = "trailing" in n ? !!n.trailing : i)), LP(e, t, { leading: r, maxWait: t, trailing: i });
}
function us(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
}
function IP(e) {
    return !!e && typeof e == "object";
}
function _P(e) {
    return typeof e == "symbol" || (IP(e) && jP.call(e) == yP);
}
function Jd(e) {
    if (typeof e == "number") return e;
    if (_P(e)) return Xd;
    if (us(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = us(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(wP, "");
    var n = SP.test(e);
    return n || AP.test(e) ? EP(e.slice(2), n ? 2 : 8) : xP.test(e) ? Xd : +e;
}
var NP = OP,
    _i = {};
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.addPassiveEventListener = function (t, n, r) {
    var i = (function () {
        var o = !1;
        try {
            var s = Object.defineProperty({}, "passive", {
                get: function () {
                    o = !0;
                },
            });
            window.addEventListener("test", null, s);
        } catch {}
        return o;
    })();
    t.addEventListener(n, r, i ? { passive: !0 } : !1);
};
_i.removePassiveEventListener = function (t, n, r) {
    t.removeEventListener(n, r);
};
Object.defineProperty(Ii, "__esModule", { value: !0 });
var DP = NP,
    VP = zP(DP),
    FP = _i;
function zP(e) {
    return e && e.__esModule ? e : { default: e };
}
var BP = function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
        return (0, VP.default)(t, n);
    },
    K = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function (t, n) {
            if (t) {
                var r = BP(function (i) {
                    K.scrollHandler(t);
                }, n);
                K.scrollSpyContainers.push(t), (0, FP.addPassiveEventListener)(t, "scroll", r);
            }
        },
        isMounted: function (t) {
            return K.scrollSpyContainers.indexOf(t) !== -1;
        },
        currentPositionX: function (t) {
            if (t === document) {
                var n = window.pageYOffset !== void 0,
                    r = (document.compatMode || "") === "CSS1Compat";
                return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft;
            } else return t.scrollLeft;
        },
        currentPositionY: function (t) {
            if (t === document) {
                var n = window.pageXOffset !== void 0,
                    r = (document.compatMode || "") === "CSS1Compat";
                return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop;
            } else return t.scrollTop;
        },
        scrollHandler: function (t) {
            var n = K.scrollSpyContainers[K.scrollSpyContainers.indexOf(t)].spyCallbacks || [];
            n.forEach(function (r) {
                return r(K.currentPositionX(t), K.currentPositionY(t));
            });
        },
        addStateHandler: function (t) {
            K.spySetState.push(t);
        },
        addSpyHandler: function (t, n) {
            var r = K.scrollSpyContainers[K.scrollSpyContainers.indexOf(n)];
            r.spyCallbacks || (r.spyCallbacks = []), r.spyCallbacks.push(t), t(K.currentPositionX(n), K.currentPositionY(n));
        },
        updateStates: function () {
            K.spySetState.forEach(function (t) {
                return t();
            });
        },
        unmount: function (t, n) {
            K.scrollSpyContainers.forEach(function (r) {
                return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1);
            }),
                K.spySetState && K.spySetState.length && K.spySetState.indexOf(t) > -1 && K.spySetState.splice(K.spySetState.indexOf(t), 1),
                document.removeEventListener("scroll", K.scrollHandler);
        },
        update: function () {
            return K.scrollSpyContainers.forEach(function (t) {
                return K.scrollHandler(t);
            });
        },
    };
Ii.default = K;
var wr = {},
    Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
var bP = function (t, n) {
        var r = t.indexOf("#") === 0 ? t.substring(1) : t,
            i = r ? "#" + r : "",
            o = window && window.location,
            s = i ? o.pathname + o.search + i : o.pathname + o.search;
        n ? history.pushState(history.state, "", s) : history.replaceState(history.state, "", s);
    },
    UP = function () {
        return window.location.hash.replace(/^#/, "");
    },
    HP = function (t) {
        return function (n) {
            return t.contains ? t != n && t.contains(n) : !!(t.compareDocumentPosition(n) & 16);
        };
    },
    WP = function (t) {
        return getComputedStyle(t).position !== "static";
    },
    Ra = function (t, n) {
        for (var r = t.offsetTop, i = t.offsetParent; i && !n(i); ) (r += i.offsetTop), (i = i.offsetParent);
        return { offsetTop: r, offsetParent: i };
    },
    QP = function (t, n, r) {
        if (r) return t === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(t).position !== "static" ? n.offsetLeft : n.offsetLeft - t.offsetLeft;
        if (t === document) return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        if (WP(t)) {
            if (n.offsetParent !== t) {
                var i = function (c) {
                        return c === t || c === document;
                    },
                    o = Ra(n, i),
                    s = o.offsetTop,
                    a = o.offsetParent;
                if (a !== t) throw new Error("Seems containerElement is not an ancestor of the Element");
                return s;
            }
            return n.offsetTop;
        }
        if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
        var l = function (c) {
            return c === document;
        };
        return Ra(n, l).offsetTop - Ra(t, l).offsetTop;
    };
Ni.default = { updateHash: bP, getHash: UP, filterElementInContainer: HP, scrollOffset: QP };
var Ds = {},
    mc = {};
Object.defineProperty(mc, "__esModule", { value: !0 });
mc.default = {
    defaultEasing: function (t) {
        return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2;
    },
    linear: function (t) {
        return t;
    },
    easeInQuad: function (t) {
        return t * t;
    },
    easeOutQuad: function (t) {
        return t * (2 - t);
    },
    easeInOutQuad: function (t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function (t) {
        return t * t * t;
    },
    easeOutCubic: function (t) {
        return --t * t * t + 1;
    },
    easeInOutCubic: function (t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function (t) {
        return t * t * t * t;
    },
    easeOutQuart: function (t) {
        return 1 - --t * t * t * t;
    },
    easeInOutQuart: function (t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function (t) {
        return t * t * t * t * t;
    },
    easeOutQuint: function (t) {
        return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function (t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    },
};
var gc = {};
Object.defineProperty(gc, "__esModule", { value: !0 });
var GP = _i,
    $P = ["mousedown", "mousewheel", "touchmove", "keydown"];
gc.default = {
    subscribe: function (t) {
        return (
            typeof document < "u" &&
            $P.forEach(function (n) {
                return (0, GP.addPassiveEventListener)(document, n, t);
            })
        );
    },
};
var Di = {};
Object.defineProperty(Di, "__esModule", { value: !0 });
var Yl = {
    registered: {},
    scrollEvent: {
        register: function (t, n) {
            Yl.registered[t] = n;
        },
        remove: function (t) {
            Yl.registered[t] = null;
        },
    },
};
Di.default = Yl;
Object.defineProperty(Ds, "__esModule", { value: !0 });
var YP =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    KP = Ni;
Vs(KP);
var qP = mc,
    ep = Vs(qP),
    ZP = gc,
    XP = Vs(ZP),
    JP = Di,
    ut = Vs(JP);
function Vs(e) {
    return e && e.__esModule ? e : { default: e };
}
var hv = function (t) {
        return ep.default[t.smooth] || ep.default.defaultEasing;
    },
    e2 = function (t) {
        return typeof t == "function"
            ? t
            : function () {
                  return t;
              };
    },
    t2 = function () {
        if (typeof window < "u") return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    },
    Kl = (function () {
        return (
            t2() ||
            function (e, t, n) {
                window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
            }
        );
    })(),
    mv = function () {
        return { currentPosition: 0, startPosition: 0, targetPosition: 0, progress: 0, duration: 0, cancel: !1, target: null, containerElement: null, to: null, start: null, delta: null, percent: null, delayTimeout: null };
    },
    gv = function (t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollLeft;
        var r = window.pageXOffset !== void 0,
            i = (document.compatMode || "") === "CSS1Compat";
        return r ? window.pageXOffset : i ? document.documentElement.scrollLeft : document.body.scrollLeft;
    },
    vv = function (t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollTop;
        var r = window.pageXOffset !== void 0,
            i = (document.compatMode || "") === "CSS1Compat";
        return r ? window.pageYOffset : i ? document.documentElement.scrollTop : document.body.scrollTop;
    },
    n2 = function (t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollWidth - n.offsetWidth;
        var r = document.body,
            i = document.documentElement;
        return Math.max(r.scrollWidth, r.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth);
    },
    r2 = function (t) {
        var n = t.data.containerElement;
        if (n && n !== document && n !== document.body) return n.scrollHeight - n.offsetHeight;
        var r = document.body,
            i = document.documentElement;
        return Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
    },
    i2 = function e(t, n, r) {
        var i = n.data;
        if (!n.ignoreCancelEvents && i.cancel) {
            ut.default.registered.end && ut.default.registered.end(i.to, i.target, i.currentPositionY);
            return;
        }
        if (
            ((i.delta = Math.round(i.targetPosition - i.startPosition)),
            i.start === null && (i.start = r),
            (i.progress = r - i.start),
            (i.percent = i.progress >= i.duration ? 1 : t(i.progress / i.duration)),
            (i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent)),
            i.containerElement && i.containerElement !== document && i.containerElement !== document.body
                ? n.horizontal
                    ? (i.containerElement.scrollLeft = i.currentPosition)
                    : (i.containerElement.scrollTop = i.currentPosition)
                : n.horizontal
                ? window.scrollTo(i.currentPosition, 0)
                : window.scrollTo(0, i.currentPosition),
            i.percent < 1)
        ) {
            var o = e.bind(null, t, n);
            Kl.call(window, o);
            return;
        }
        ut.default.registered.end && ut.default.registered.end(i.to, i.target, i.currentPosition);
    },
    vc = function (t) {
        t.data.containerElement = t ? (t.containerId ? document.getElementById(t.containerId) : t.container && t.container.nodeType ? t.container : document) : null;
    },
    Vi = function (t, n, r, i) {
        if (
            ((n.data = n.data || mv()),
            window.clearTimeout(n.data.delayTimeout),
            XP.default.subscribe(function () {
                n.data.cancel = !0;
            }),
            vc(n),
            (n.data.start = null),
            (n.data.cancel = !1),
            (n.data.startPosition = n.horizontal ? gv(n) : vv(n)),
            (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
            n.data.startPosition === n.data.targetPosition)
        ) {
            ut.default.registered.end && ut.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
            return;
        }
        (n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition)),
            (n.data.duration = e2(n.duration)(n.data.delta)),
            (n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration)),
            (n.data.to = r),
            (n.data.target = i);
        var o = hv(n),
            s = i2.bind(null, o, n);
        if (n && n.delay > 0) {
            n.data.delayTimeout = window.setTimeout(function () {
                ut.default.registered.begin && ut.default.registered.begin(n.data.to, n.data.target), Kl.call(window, s);
            }, n.delay);
            return;
        }
        ut.default.registered.begin && ut.default.registered.begin(n.data.to, n.data.target), Kl.call(window, s);
    },
    Fs = function (t) {
        return (t = YP({}, t)), (t.data = t.data || mv()), (t.absolute = !0), t;
    },
    o2 = function (t) {
        Vi(0, Fs(t));
    },
    s2 = function (t, n) {
        Vi(t, Fs(n));
    },
    a2 = function (t) {
        (t = Fs(t)), vc(t), Vi(t.horizontal ? n2(t) : r2(t), t);
    },
    l2 = function (t, n) {
        (n = Fs(n)), vc(n);
        var r = n.horizontal ? gv(n) : vv(n);
        Vi(t + r, n);
    };
Ds.default = { animateTopScroll: Vi, getAnimationType: hv, scrollToTop: o2, scrollToBottom: a2, scrollTo: s2, scrollMore: l2 };
Object.defineProperty(wr, "__esModule", { value: !0 });
var u2 =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    c2 = Ni,
    f2 = yc(c2),
    d2 = Ds,
    p2 = yc(d2),
    h2 = Di,
    lo = yc(h2);
function yc(e) {
    return e && e.__esModule ? e : { default: e };
}
var uo = {},
    tp = void 0;
wr.default = {
    unmount: function () {
        uo = {};
    },
    register: function (t, n) {
        uo[t] = n;
    },
    unregister: function (t) {
        delete uo[t];
    },
    get: function (t) {
        return uo[t] || document.getElementById(t) || document.getElementsByName(t)[0] || document.getElementsByClassName(t)[0];
    },
    setActiveLink: function (t) {
        return (tp = t);
    },
    getActiveLink: function () {
        return tp;
    },
    scrollTo: function (t, n) {
        var r = this.get(t);
        if (!r) {
            console.warn("target Element not found");
            return;
        }
        n = u2({}, n, { absolute: !1 });
        var i = n.containerId,
            o = n.container,
            s = void 0;
        i ? (s = document.getElementById(i)) : o && o.nodeType ? (s = o) : (s = document), (n.absolute = !0);
        var a = n.horizontal,
            l = f2.default.scrollOffset(s, r, a) + (n.offset || 0);
        if (!n.smooth) {
            lo.default.registered.begin && lo.default.registered.begin(t, r), s === document ? (n.horizontal ? window.scrollTo(l, 0) : window.scrollTo(0, l)) : (s.scrollTop = l), lo.default.registered.end && lo.default.registered.end(t, r);
            return;
        }
        p2.default.animateTopScroll(l, n, t, r);
    },
};
var yv = { exports: {} },
    m2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    g2 = m2,
    v2 = g2;
function wv() {}
function xv() {}
xv.resetWarningCache = wv;
var y2 = function () {
    function e(r, i, o, s, a, l) {
        if (l !== v2) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw ((u.name = "Invariant Violation"), u);
        }
    }
    e.isRequired = e;
    function t() {
        return e;
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: xv,
        resetWarningCache: wv,
    };
    return (n.PropTypes = n), n;
};
yv.exports = y2();
var zs = yv.exports,
    Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
var w2 = Ni,
    La = x2(w2);
function x2(e) {
    return e && e.__esModule ? e : { default: e };
}
var S2 = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function (t) {
        (this.scroller = t), (this.handleHashChange = this.handleHashChange.bind(this)), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), (this.mountFlag = !0);
    },
    mapContainer: function (t, n) {
        this.containers[t] = n;
    },
    isMounted: function () {
        return this.mountFlag;
    },
    isInitialized: function () {
        return this.initialized;
    },
    initStateFromHash: function () {
        var t = this,
            n = this.getHash();
        n
            ? window.setTimeout(function () {
                  t.scrollTo(n, !0), (t.initialized = !0);
              }, 10)
            : (this.initialized = !0);
    },
    scrollTo: function (t, n) {
        var r = this.scroller,
            i = r.get(t);
        if (i && (n || t !== r.getActiveLink())) {
            var o = this.containers[t] || document;
            r.scrollTo(t, { container: o });
        }
    },
    getHash: function () {
        return La.default.getHash();
    },
    changeHash: function (t, n) {
        this.isInitialized() && La.default.getHash() !== t && La.default.updateHash(t, n);
    },
    handleHashChange: function () {
        this.scrollTo(this.getHash());
    },
    unmount: function () {
        (this.scroller = null), (this.containers = null), window.removeEventListener("hashchange", this.handleHashChange);
    },
};
Bs.default = S2;
Object.defineProperty(Oi, "__esModule", { value: !0 });
var co =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    A2 = (function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    E2 = S,
    np = Fi(E2),
    P2 = Ii,
    fo = Fi(P2),
    k2 = wr,
    C2 = Fi(k2),
    T2 = zs,
    G = Fi(T2),
    j2 = Bs,
    Rt = Fi(j2);
function Fi(e) {
    return e && e.__esModule ? e : { default: e };
}
function M2(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function R2(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function L2(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var rp = {
    to: G.default.string.isRequired,
    containerId: G.default.string,
    container: G.default.object,
    activeClass: G.default.string,
    activeStyle: G.default.object,
    spy: G.default.bool,
    horizontal: G.default.bool,
    smooth: G.default.oneOfType([G.default.bool, G.default.string]),
    offset: G.default.number,
    delay: G.default.number,
    isDynamic: G.default.bool,
    onClick: G.default.func,
    duration: G.default.oneOfType([G.default.number, G.default.func]),
    absolute: G.default.bool,
    onSetActive: G.default.func,
    onSetInactive: G.default.func,
    ignoreCancelEvents: G.default.bool,
    hashSpy: G.default.bool,
    saveHashHistory: G.default.bool,
    spyThrottle: G.default.number,
};
Oi.default = function (e, t) {
    var n = t || C2.default,
        r = (function (o) {
            L2(s, o);
            function s(a) {
                M2(this, s);
                var l = R2(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, a));
                return i.call(l), (l.state = { active: !1 }), l;
            }
            return (
                A2(s, [
                    {
                        key: "getScrollSpyContainer",
                        value: function () {
                            var l = this.props.containerId,
                                u = this.props.container;
                            return l && !u ? document.getElementById(l) : u && u.nodeType ? u : document;
                        },
                    },
                    {
                        key: "componentDidMount",
                        value: function () {
                            if (this.props.spy || this.props.hashSpy) {
                                var l = this.getScrollSpyContainer();
                                fo.default.isMounted(l) || fo.default.mount(l, this.props.spyThrottle),
                                    this.props.hashSpy && (Rt.default.isMounted() || Rt.default.mount(n), Rt.default.mapContainer(this.props.to, l)),
                                    fo.default.addSpyHandler(this.spyHandler, l),
                                    this.setState({ container: l });
                            }
                        },
                    },
                    {
                        key: "componentWillUnmount",
                        value: function () {
                            fo.default.unmount(this.stateHandler, this.spyHandler);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var l = "";
                            this.state && this.state.active ? (l = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim()) : (l = this.props.className);
                            var u = {};
                            this.state && this.state.active ? (u = co({}, this.props.style, this.props.activeStyle)) : (u = co({}, this.props.style));
                            var c = co({}, this.props);
                            for (var f in rp) c.hasOwnProperty(f) && delete c[f];
                            return (c.className = l), (c.style = u), (c.onClick = this.handleClick), np.default.createElement(e, c);
                        },
                    },
                ]),
                s
            );
        })(np.default.PureComponent),
        i = function () {
            var s = this;
            (this.scrollTo = function (a, l) {
                n.scrollTo(a, co({}, s.state, l));
            }),
                (this.handleClick = function (a) {
                    s.props.onClick && s.props.onClick(a), a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), s.scrollTo(s.props.to, s.props);
                }),
                (this.spyHandler = function (a, l) {
                    var u = s.getScrollSpyContainer();
                    if (!(Rt.default.isMounted() && !Rt.default.isInitialized())) {
                        var c = s.props.horizontal,
                            f = s.props.to,
                            d = null,
                            g = void 0,
                            v = void 0;
                        if (c) {
                            var y = 0,
                                E = 0,
                                h = 0;
                            if (u.getBoundingClientRect) {
                                var p = u.getBoundingClientRect();
                                h = p.left;
                            }
                            if (!d || s.props.isDynamic) {
                                if (((d = n.get(f)), !d)) return;
                                var m = d.getBoundingClientRect();
                                (y = m.left - h + a), (E = y + m.width);
                            }
                            var w = a - s.props.offset;
                            (g = w >= Math.floor(y) && w < Math.floor(E)), (v = w < Math.floor(y) || w >= Math.floor(E));
                        } else {
                            var A = 0,
                                P = 0,
                                T = 0;
                            if (u.getBoundingClientRect) {
                                var k = u.getBoundingClientRect();
                                T = k.top;
                            }
                            if (!d || s.props.isDynamic) {
                                if (((d = n.get(f)), !d)) return;
                                var R = d.getBoundingClientRect();
                                (A = R.top - T + l), (P = A + R.height);
                            }
                            var L = l - s.props.offset;
                            (g = L >= Math.floor(A) && L < Math.floor(P)), (v = L < Math.floor(A) || L >= Math.floor(P));
                        }
                        var H = n.getActiveLink();
                        if (v) {
                            if ((f === H && n.setActiveLink(void 0), s.props.hashSpy && Rt.default.getHash() === f)) {
                                var he = s.props.saveHashHistory,
                                    ye = he === void 0 ? !1 : he;
                                Rt.default.changeHash("", ye);
                            }
                            s.props.spy && s.state.active && (s.setState({ active: !1 }), s.props.onSetInactive && s.props.onSetInactive(f, d));
                        }
                        if (g && (H !== f || s.state.active === !1)) {
                            n.setActiveLink(f);
                            var W = s.props.saveHashHistory,
                                Y = W === void 0 ? !1 : W;
                            s.props.hashSpy && Rt.default.changeHash(f, Y), s.props.spy && (s.setState({ active: !0 }), s.props.onSetActive && s.props.onSetActive(f, d));
                        }
                    }
                });
        };
    return (r.propTypes = rp), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(hc, "__esModule", { value: !0 });
var O2 = S,
    ip = Sv(O2),
    I2 = Oi,
    _2 = Sv(I2);
function Sv(e) {
    return e && e.__esModule ? e : { default: e };
}
function N2(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function op(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function D2(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var V2 = (function (e) {
    D2(t, e);
    function t() {
        var n, r, i, o;
        N2(this, t);
        for (var s = arguments.length, a = Array(s), l = 0; l < s; l++) a[l] = arguments[l];
        return (
            (o =
                ((r = ((i = op(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(a)))), i)),
                (i.render = function () {
                    return ip.default.createElement("a", i.props, i.props.children);
                }),
                r)),
            op(i, o)
        );
    }
    return t;
})(ip.default.Component);
hc.default = (0, _2.default)(V2);
var wc = {};
Object.defineProperty(wc, "__esModule", { value: !0 });
var F2 = (function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    z2 = S,
    sp = Av(z2),
    B2 = Oi,
    b2 = Av(B2);
function Av(e) {
    return e && e.__esModule ? e : { default: e };
}
function U2(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function H2(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function W2(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Q2 = (function (e) {
    W2(t, e);
    function t() {
        return U2(this, t), H2(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
    }
    return (
        F2(t, [
            {
                key: "render",
                value: function () {
                    return sp.default.createElement("input", this.props, this.props.children);
                },
            },
        ]),
        t
    );
})(sp.default.Component);
wc.default = (0, b2.default)(Q2);
var xc = {},
    bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
var G2 =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    $2 = (function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    Y2 = S,
    ap = Us(Y2),
    K2 = Om;
Us(K2);
var q2 = wr,
    lp = Us(q2),
    Z2 = zs,
    up = Us(Z2);
function Us(e) {
    return e && e.__esModule ? e : { default: e };
}
function X2(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function J2(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function ek(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
bs.default = function (e) {
    var t = (function (n) {
        ek(r, n);
        function r(i) {
            X2(this, r);
            var o = J2(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
            return (o.childBindings = { domNode: null }), o;
        }
        return (
            $2(r, [
                {
                    key: "componentDidMount",
                    value: function () {
                        if (typeof window > "u") return !1;
                        this.registerElems(this.props.name);
                    },
                },
                {
                    key: "componentDidUpdate",
                    value: function (o) {
                        this.props.name !== o.name && this.registerElems(this.props.name);
                    },
                },
                {
                    key: "componentWillUnmount",
                    value: function () {
                        if (typeof window > "u") return !1;
                        lp.default.unregister(this.props.name);
                    },
                },
                {
                    key: "registerElems",
                    value: function (o) {
                        lp.default.register(o, this.childBindings.domNode);
                    },
                },
                {
                    key: "render",
                    value: function () {
                        return ap.default.createElement(e, G2({}, this.props, { parentBindings: this.childBindings }));
                    },
                },
            ]),
            r
        );
    })(ap.default.Component);
    return (t.propTypes = { name: up.default.string, id: up.default.string }), t;
};
Object.defineProperty(xc, "__esModule", { value: !0 });
var cp =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    tk = (function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    nk = S,
    fp = Sc(nk),
    rk = bs,
    ik = Sc(rk),
    ok = zs,
    dp = Sc(ok);
function Sc(e) {
    return e && e.__esModule ? e : { default: e };
}
function sk(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ak(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function lk(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ev = (function (e) {
    lk(t, e);
    function t() {
        return sk(this, t), ak(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
    }
    return (
        tk(t, [
            {
                key: "render",
                value: function () {
                    var r = this,
                        i = cp({}, this.props);
                    return (
                        i.parentBindings && delete i.parentBindings,
                        fp.default.createElement(
                            "div",
                            cp({}, i, {
                                ref: function (s) {
                                    r.props.parentBindings.domNode = s;
                                },
                            }),
                            this.props.children
                        )
                    );
                },
            },
        ]),
        t
    );
})(fp.default.Component);
Ev.propTypes = { name: dp.default.string, id: dp.default.string };
xc.default = (0, ik.default)(Ev);
var Oa =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    pp = (function () {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })();
function hp(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function mp(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function gp(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var po = S,
    dn = Ii,
    Ia = wr,
    q = zs,
    Lt = Bs,
    vp = {
        to: q.string.isRequired,
        containerId: q.string,
        container: q.object,
        activeClass: q.string,
        spy: q.bool,
        smooth: q.oneOfType([q.bool, q.string]),
        offset: q.number,
        delay: q.number,
        isDynamic: q.bool,
        onClick: q.func,
        duration: q.oneOfType([q.number, q.func]),
        absolute: q.bool,
        onSetActive: q.func,
        onSetInactive: q.func,
        ignoreCancelEvents: q.bool,
        hashSpy: q.bool,
        spyThrottle: q.number,
    },
    uk = {
        Scroll: function (t, n) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var r = n || Ia,
                i = (function (s) {
                    gp(a, s);
                    function a(l) {
                        hp(this, a);
                        var u = mp(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
                        return o.call(u), (u.state = { active: !1 }), u;
                    }
                    return (
                        pp(a, [
                            {
                                key: "getScrollSpyContainer",
                                value: function () {
                                    var u = this.props.containerId,
                                        c = this.props.container;
                                    return u ? document.getElementById(u) : c && c.nodeType ? c : document;
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    if (this.props.spy || this.props.hashSpy) {
                                        var u = this.getScrollSpyContainer();
                                        dn.isMounted(u) || dn.mount(u, this.props.spyThrottle),
                                            this.props.hashSpy && (Lt.isMounted() || Lt.mount(r), Lt.mapContainer(this.props.to, u)),
                                            this.props.spy && dn.addStateHandler(this.stateHandler),
                                            dn.addSpyHandler(this.spyHandler, u),
                                            this.setState({ container: u });
                                    }
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    dn.unmount(this.stateHandler, this.spyHandler);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var u = "";
                                    this.state && this.state.active ? (u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim()) : (u = this.props.className);
                                    var c = Oa({}, this.props);
                                    for (var f in vp) c.hasOwnProperty(f) && delete c[f];
                                    return (c.className = u), (c.onClick = this.handleClick), po.createElement(t, c);
                                },
                            },
                        ]),
                        a
                    );
                })(po.Component),
                o = function () {
                    var a = this;
                    (this.scrollTo = function (l, u) {
                        r.scrollTo(l, Oa({}, a.state, u));
                    }),
                        (this.handleClick = function (l) {
                            a.props.onClick && a.props.onClick(l), l.stopPropagation && l.stopPropagation(), l.preventDefault && l.preventDefault(), a.scrollTo(a.props.to, a.props);
                        }),
                        (this.stateHandler = function () {
                            r.getActiveLink() !== a.props.to && (a.state !== null && a.state.active && a.props.onSetInactive && a.props.onSetInactive(), a.setState({ active: !1 }));
                        }),
                        (this.spyHandler = function (l) {
                            var u = a.getScrollSpyContainer();
                            if (!(Lt.isMounted() && !Lt.isInitialized())) {
                                var c = a.props.to,
                                    f = null,
                                    d = 0,
                                    g = 0,
                                    v = 0;
                                if (u.getBoundingClientRect) {
                                    var y = u.getBoundingClientRect();
                                    v = y.top;
                                }
                                if (!f || a.props.isDynamic) {
                                    if (((f = r.get(c)), !f)) return;
                                    var E = f.getBoundingClientRect();
                                    (d = E.top - v + l), (g = d + E.height);
                                }
                                var h = l - a.props.offset,
                                    p = h >= Math.floor(d) && h < Math.floor(g),
                                    m = h < Math.floor(d) || h >= Math.floor(g),
                                    w = r.getActiveLink();
                                if (m)
                                    return (
                                        c === w && r.setActiveLink(void 0),
                                        a.props.hashSpy && Lt.getHash() === c && Lt.changeHash(),
                                        a.props.spy && a.state.active && (a.setState({ active: !1 }), a.props.onSetInactive && a.props.onSetInactive()),
                                        dn.updateStates()
                                    );
                                if (p && w !== c) return r.setActiveLink(c), a.props.hashSpy && Lt.changeHash(c), a.props.spy && (a.setState({ active: !0 }), a.props.onSetActive && a.props.onSetActive(c)), dn.updateStates();
                            }
                        });
                };
            return (i.propTypes = vp), (i.defaultProps = { offset: 0 }), i;
        },
        Element: function (t) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var n = (function (r) {
                gp(i, r);
                function i(o) {
                    hp(this, i);
                    var s = mp(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, o));
                    return (s.childBindings = { domNode: null }), s;
                }
                return (
                    pp(i, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                if (typeof window > "u") return !1;
                                this.registerElems(this.props.name);
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (s) {
                                this.props.name !== s.name && this.registerElems(this.props.name);
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                if (typeof window > "u") return !1;
                                Ia.unregister(this.props.name);
                            },
                        },
                        {
                            key: "registerElems",
                            value: function (s) {
                                Ia.register(s, this.childBindings.domNode);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return po.createElement(t, Oa({}, this.props, { parentBindings: this.childBindings }));
                            },
                        },
                    ]),
                    i
                );
            })(po.Component);
            return (n.propTypes = { name: q.string, id: q.string }), n;
        },
    },
    ck = uk;
Object.defineProperty(re, "__esModule", { value: !0 });
re.Helpers = re.ScrollElement = re.ScrollLink = _v = re.animateScroll = re.scrollSpy = re.Events = re.scroller = re.Element = re.Button = re.Link = void 0;
var fk = hc,
    Pv = ht(fk),
    dk = wc,
    kv = ht(dk),
    pk = xc,
    Cv = ht(pk),
    hk = wr,
    Tv = ht(hk),
    mk = Di,
    jv = ht(mk),
    gk = Ii,
    Mv = ht(gk),
    vk = Ds,
    Rv = ht(vk),
    yk = Oi,
    Lv = ht(yk),
    wk = bs,
    Ov = ht(wk),
    xk = ck,
    Iv = ht(xk);
function ht(e) {
    return e && e.__esModule ? e : { default: e };
}
re.Link = Pv.default;
re.Button = kv.default;
re.Element = Cv.default;
re.scroller = Tv.default;
re.Events = jv.default;
re.scrollSpy = Mv.default;
var _v = (re.animateScroll = Rv.default);
re.ScrollLink = Lv.default;
re.ScrollElement = Ov.default;
re.Helpers = Iv.default;
re.default = { Link: Pv.default, Button: kv.default, Element: Cv.default, scroller: Tv.default, Events: jv.default, scrollSpy: Mv.default, animateScroll: Rv.default, ScrollLink: Lv.default, ScrollElement: Ov.default, Helpers: Iv.default };
const Nv = ({ name: e, description: t, project_live_link: n, source_code_link: r, image: i, index: o }) =>
        x.jsx(x.Fragment, {
            children: x.jsx(pc, {
                className: " w-full xs:w-[360px] h-full ",
                options: { max: 45, scale: 1, speed: 450 },
                children: x.jsxs(F.div, {
                    variants: dv("right", "spring", o * 0.5, 0.75),
                    className: "w-full p-[1px] bg-white rounded-2xl shadow-card ",
                    children: [
                        x.jsxs("section", {
                            className: "relative w-full h-[230px]",
                            children: [
                                x.jsx("img", { src: i, alt: "project_image", className: "w-full h-full object-cover rounded-t-2xl" }),
                                x.jsx("div", {
                                    className: "absolute top-0 right-0 flex justify-end m-3",
                                    children: x.jsx("section", {
                                        onClick: () => window.open(r, "_blank"),
                                        className: "bg-black bg-opacity-70 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",
                                        children: x.jsx(fv, { className: "w-1/2 h-1/2 object-contain text-white opacity-100" }),
                                    }),
                                }),
                                x.jsx("div", {
                                    className: "absolute top-12 right-0 flex justify-end m-3",
                                    children: x.jsx("section", {
                                        onClick: () => window.open(n, "_blank"),
                                        className: "bg-black bg-opacity-70 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",
                                        children: x.jsx(WE, { className: "w-1/2 h-1/2 object-contain text-white" }),
                                    }),
                                }),
                            ],
                        }),
                        x.jsxs("section", {
                            className: "mt-2 p-2",
                            children: [x.jsx("h3", { className: "text-text-blue font-semibold text-[24px]", children: e }), x.jsx("p", { className: "mt-2 text-[#9ca5ba] text-[14px]", children: t })],
                        }),
                    ],
                }),
            }),
        }),
    Sk = () => {
        const e = Bm(),
            t = jo.slice(0, 3),
            n = () => {
                _v.scrollToTop({ duration: 500, smooth: !0 }), e("/project");
            };
        return (
            console.log(t),
            x.jsx(x.Fragment, {
                children: x.jsxs("div", {
                    className: "w-full flex flex-col items-start justify-start gap-10 sm:gap-20 relative z-0 sm:mt-10 md:mt-0",
                    children: [
                        x.jsx("div", { className: "absolute top-[22px] -right-10 z-0 w-24 md:w-80 h-24 lg:w-[600px] lg:h-24 rounded-full gray__gradient" }),
                        x.jsxs("section", {
                            className: "flex flex-col items-start justify-start gap-5",
                            children: [
                                x.jsxs(F.h1, { variants: jn(), className: "text-header", children: ["My recent", x.jsx("br", {}), x.jsx("span", { className: "text-yellow-1", children: "Projects" })] }),
                                x.jsx(F.p, {
                                    variants: jn(),
                                    className: "paragraph",
                                    children:
                                        "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
                                }),
                            ],
                        }),
                        x.jsx("section", { className: "flex flex-wrap justify-center xs:justify-start  gap-7", children: t == null ? void 0 : t.map((r, i) => x.jsx(Nv, { index: i, ...r }, r.id)) }),
                        x.jsx(F.button, {
                            variants: Ri(),
                            whileHover: "hover",
                            whileTap: "tap",
                            className: "w-fit yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button text-sm sm:text-base",
                            onClick: n,
                            children: "show more",
                        }),
                    ],
                }),
            })
        );
    },
    Ak = Li(Sk, "project"),
    wi = { _origin: "https://api.emailjs.com" },
    Ek = (e, t = "https://api.emailjs.com") => {
        (wi._userID = e), (wi._origin = t);
    },
    Dv = (e, t, n) => {
        if (!e) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
        if (!t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!n) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        return !0;
    };
class yp {
    constructor(t) {
        (this.status = t ? t.status : 0), (this.text = t ? t.responseText : "Network Error");
    }
}
const Vv = (e, t, n = {}) =>
        new Promise((r, i) => {
            const o = new XMLHttpRequest();
            o.addEventListener("load", ({ target: s }) => {
                const a = new yp(s);
                a.status === 200 || a.text === "OK" ? r(a) : i(a);
            }),
                o.addEventListener("error", ({ target: s }) => {
                    i(new yp(s));
                }),
                o.open("POST", wi._origin + e, !0),
                Object.keys(n).forEach((s) => {
                    o.setRequestHeader(s, n[s]);
                }),
                o.send(t);
        }),
    Pk = (e, t, n, r) => {
        const i = r || wi._userID;
        return Dv(i, e, t), Vv("/api/v1.0/email/send", JSON.stringify({ lib_version: "3.11.0", user_id: i, service_id: e, template_id: t, template_params: n }), { "Content-type": "application/json" });
    },
    kk = (e) => {
        let t;
        if ((typeof e == "string" ? (t = document.querySelector(e)) : (t = e), !t || t.nodeName !== "FORM")) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
        return t;
    },
    Ck = (e, t, n, r) => {
        const i = r || wi._userID,
            o = kk(n);
        Dv(i, e, t);
        const s = new FormData(o);
        return s.append("lib_version", "3.11.0"), s.append("service_id", e), s.append("template_id", t), s.append("user_id", i), Vv("/api/v1.0/email/send-form", s);
    },
    Tk = { init: Ek, send: Pk, sendForm: Ck },
    jk = () => {
        const e = S.useRef(),
            [t, n] = S.useState({ name: "", email: "", message: "" }),
            [r, i] = S.useState(!1),
            o = (a) => {
                const { name: l, value: u } = a.target;
                n({ ...t, [l]: u });
            },
            s = (a) => {
                if ((a.preventDefault(), !t.name || !t.email || !t.message)) {
                    alert("Please fill out all fields before sending the message.");
                    return;
                }
                i(!0),
                    Tk.sendForm("service_exm4ifr", "template_gmgueml", e.current, "HnOt3sGhWabbLUnWe").then(
                        () => {
                            i(!1), alert("Thank you. I will get back to you as soon as possible"), n({ name: "", email: "", message: "" });
                        },
                        (l) => {
                            i(!1), console.log(l), alert("Something went wrong");
                        }
                    );
            };
        return x.jsx(x.Fragment, {
            children: x.jsxs("div", {
                className: "w-full flex flex-col items-start justify-start gap-5",
                children: [
                    x.jsxs(F.h1, { variants: jn(), className: "text-header", children: ["Get in touch", x.jsx("br", {}), x.jsx("span", { className: "text-yellow-1", children: "contact" })] }),
                    x.jsx(F.div, {
                        variants: qE("left", "tween", 0.2, 1),
                        className: "w-full sm:w-[70%] bg-white shadow-card p-8 rounded-2xl",
                        children: x.jsxs("form", {
                            ref: e,
                            onSubmit: s,
                            className: "mt-12 flex flex-col gap-8",
                            children: [
                                x.jsxs("label", {
                                    className: "flex flex-col",
                                    children: [
                                        x.jsx("span", { className: "text-text-blue font-medium mb-4", children: "Your Name" }),
                                        x.jsx("input", {
                                            type: "text",
                                            name: "name",
                                            value: t.name,
                                            onChange: o,
                                            placeholder: "What's your good name?",
                                            className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-text-gray rounded-lg outline-none border-yellow-1 border-[1px] font-medium",
                                        }),
                                    ],
                                }),
                                x.jsxs("label", {
                                    className: "flex flex-col",
                                    children: [
                                        x.jsx("span", { className: "text-text-blue font-medium mb-4", children: "Your email" }),
                                        x.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            value: t.email,
                                            onChange: o,
                                            placeholder: "What's your web address?",
                                            className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-text-gray rounded-lg outline-none  border-yellow-1 border-[1px] font-medium",
                                        }),
                                    ],
                                }),
                                x.jsxs("label", {
                                    className: "flex flex-col",
                                    children: [
                                        x.jsx("span", { className: "text-text-blue font-medium mb-4", children: "Your Message" }),
                                        x.jsx("textarea", {
                                            rows: 7,
                                            name: "message",
                                            value: t.message,
                                            onChange: o,
                                            placeholder: "What you want to say?",
                                            className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-text-gray rounded-lg outline-none  border-yellow-1 border-[1px] font-medium",
                                        }),
                                        x.jsx("p", { className: "text-xs text-red-500", children: "**Important: When reaching out, please ensure to include your email address within the message." }),
                                    ],
                                }),
                                x.jsx(F.button, {
                                    variants: Ri(),
                                    whileHover: "hover",
                                    whileTap: "tap",
                                    className: "w-fit yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button text-sm sm:text-base",
                                    children: r ? "Sending..." : "Send",
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        });
    },
    Mk = Li(jk, "contact"),
    Rk = () => {
        const e = () => {
            window.scrollTo(0, 0), window.history.back();
        };
        return x.jsx(x.Fragment, {
            children: x.jsxs("div", {
                className: "w-full flex flex-col items-start justify-start gap-10 sm:gap-20 relative z-0 sm:mt-10 md:mt-0",
                children: [
                    x.jsx("div", { className: "absolute top-[22px] -right-10 z-0 w-24 md:w-80 h-24 lg:w-[600px] lg:h-24 rounded-full gray__gradient" }),
                    x.jsxs("section", {
                        className: "flex flex-col items-start justify-start gap-5",
                        children: [
                            x.jsxs(F.h1, { variants: jn(), className: "text-header", children: ["My recent", x.jsx("br", {}), x.jsx("span", { className: "text-yellow-1", children: "Projects" })] }),
                            x.jsx(F.p, {
                                variants: jn(),
                                className: "paragraph",
                                children:
                                    "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
                            }),
                        ],
                    }),
                    x.jsx("section", { className: "flex flex-wrap justify-center xs:justify-start  gap-7", children: jo == null ? void 0 : jo.map((t, n) => x.jsx(Nv, { index: n, ...t }, t.title)) }),
                    x.jsx(F.button, { variants: Ri(), whileHover: "hover", whileTap: "tap", className: "w-fit yellowBg text-white font-medium px-6 py-1 rounded-3xl shadow-button text-sm sm:text-base", onClick: e, children: "← Go Back" }),
                ],
            }),
        });
    },
    Lk = Li(Rk),
    Ok = () => x.jsx(x.Fragment, { children: x.jsxs("div", { className: "w-full h-full bg-white font-open", children: [x.jsx(XE, {}), x.jsx(tP, {}), x.jsx(uP, {}), x.jsx(vP, {}), x.jsx(Ak, {}), x.jsx(Mk, {})] }) }),
    Ik = () =>
        x.jsx(x.Fragment, {
            children: x.jsx("div", {
                className: "w-full h-full bg-white font-open overflow-hidden",
                children: x.jsxs(J1, { children: [x.jsx(Ml, { path: "/", element: x.jsx(Ok, {}) }), x.jsx(Ml, { path: "/project", element: x.jsx(Lk, {}) })] }),
            }),
        });
_a.createRoot(document.getElementById("root")).render(x.jsx($e.StrictMode, { children: x.jsx(ow, { children: x.jsx(Ik, {}) }) }));
