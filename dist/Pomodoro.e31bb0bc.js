// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function(modules, cache, entry, globalName) {
    // Save the require from previous bundle to this closure if any
    const previousRequire =
        typeof parcelRequire === "function" && parcelRequire;
    const nodeRequire = typeof require === "function" && require;

    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                const currentRequire =
                    typeof parcelRequire === "function" && parcelRequire;
                if (!jumped && currentRequire) {
                    return currentRequire(name, true);
                }

                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) {
                    return previousRequire(name, true);
                }

                // Try the node require function if it exists.
                if (nodeRequire && typeof name === "string") {
                    return nodeRequire(name);
                }

                const err = new Error(`Cannot find module '${name}'`);
                err.code = "MODULE_NOT_FOUND";
                throw err;
            }

            localRequire.resolve = resolve;
            localRequire.cache = {};

            const module = cache[name] = new newRequire.Module(name);

            modules[name][0].call(
                module.exports,
                localRequire,
                module,
                module.exports,
                this,
            );
        }

        return cache[name].exports;

        function localRequire(x) {
            return newRequire(localRequire.resolve(x));
        }

        function resolve(x) {
            return modules[name][1][x] || x;
        }
    }

    function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
    }

    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function(id, exports) {
        modules[id] = [
            function(require, module) {
                module.exports = exports;
            },
            {},
        ];
    };

    let error;
    for (const element of entry) {
        try {
            newRequire(element);
        } catch (e) {
            // Save first error but execute all entries
            if (!error) {
                error = e;
            }
        }
    }

    if (entry.length) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        const mainExports = newRequire(entry[entry.length - 1]);

        // CommonJS
        if (typeof exports === "object" && typeof module !== "undefined") {
            module.exports = mainExports;

            // RequireJS
        } else if (typeof define === "function" && define.amd) {
            define(() => mainExports);

            // <script>
        } else if (globalName) {
            this[globalName] = mainExports;
        }
    }

    // Override the current require with this new one
    parcelRequire = newRequire;

    if (error) {
        // throw error from earlier, _after updating parcelRequire_
        throw error;
    }

    return newRequire;
})(
    {
        "index.js": [
            function(require, module, exports) {
                "use strict";

                function _typeof(obj) {
                    if (
                        typeof Symbol === "function" &&
                        typeof Symbol.iterator === "symbol"
                    ) {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj &&
                                typeof Symbol === "function" &&
                                obj.constructor === Symbol &&
                                obj !== Symbol.prototype
                                ? "symbol"
                                : typeof obj;
                        };
                    }
                    return _typeof(obj);
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError(
                            "Cannot call a class as a function",
                        );
                    }
                }

                function _defineProperties(target, props) {
                    for (const descriptor of props) {
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) {
                            descriptor.writable = true;
                        }
                        Object.defineProperty(
                            target,
                            descriptor.key,
                            descriptor,
                        );
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) {
                        _defineProperties(Constructor.prototype, protoProps);
                    }
                    if (staticProps) {
                        _defineProperties(Constructor, staticProps);
                    }
                    return Constructor;
                }

                function _possibleConstructorReturn(self, call) {
                    if (
                        call &&
                        (_typeof(call) === "object" ||
                            typeof call === "function")
                    ) {
                        return call;
                    }
                    return _assertThisInitialized(self);
                }

                function _assertThisInitialized(self) {
                    if (self === void 0) {
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                        );
                    }
                    return self;
                }

                function _getPrototypeOf(o) {
                    _getPrototypeOf = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function _getPrototypeOf(o) {
                              return o.__proto__ || Object.getPrototypeOf(o);
                          };
                    return _getPrototypeOf(o);
                }

                function _inherits(subClass, superClass) {
                    if (
                        typeof superClass !== "function" &&
                        superClass !== null
                    ) {
                        throw new TypeError(
                            "Super expression must either be null or a function",
                        );
                    }
                    subClass.prototype = Object.create(
                        superClass && superClass.prototype,
                        {
                            constructor: {
                                value: subClass,
                                writable: true,
                                configurable: true,
                            },
                        },
                    );
                    if (superClass) {
                        _setPrototypeOf(subClass, superClass);
                    }
                }

                function _setPrototypeOf(o, p) {
                    _setPrototypeOf =
                        Object.setPrototypeOf ||
                        function _setPrototypeOf(o, p) {
                            o.__proto__ = p;
                            return o;
                        };
                    return _setPrototypeOf(o, p);
                }

                const e = React.createElement;

                const LikeButton =
                    /*#__PURE__*/
                    (function(_React$Component) {
                        _inherits(LikeButton, _React$Component);

                        function LikeButton(props) {
                            let _this;

                            _classCallCheck(this, LikeButton);

                            _this = _possibleConstructorReturn(
                                this,
                                _getPrototypeOf(LikeButton).call(this, props),
                            );
                            _this.state = {
                                liked: false,
                            };
                            return _this;
                        }

                        _createClass(LikeButton, [
                            {
                                key: "render",
                                value: function render() {
                                    const _this2 = this;

                                    if (this.state.liked) {
                                        return "You liked this.";
                                    }

                                    return e(
                                        "button",
                                        {
                                            onClick: function onClick() {
                                                return _this2.setState({
                                                    liked: true,
                                                });
                                            },
                                        },
                                        "Like",
                                    );
                                },
                            },
                        ]);

                        return LikeButton;
                    })(React.Component);

                const domContainer = document.querySelector("#root");
                ReactDOM.render(e(LikeButton), domContainer);
            },
            {},
        ],
        "../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [
            function(require, module, exports) {
                const global = arguments[3];
                const OVERLAY_ID = "__parcel__error__overlay__";
                const OldModule = module.bundle.Module;

                function Module(moduleName) {
                    OldModule.call(this, moduleName);
                    this.hot = {
                        data: module.bundle.hotData,
                        _acceptCallbacks: [],
                        _disposeCallbacks: [],
                        accept(fn) {
                            this._acceptCallbacks.push(fn || (() => {}));
                        },
                        dispose(fn) {
                            this._disposeCallbacks.push(fn);
                        },
                    };
                    module.bundle.hotData = null;
                }

                module.bundle.Module = Module;
                let checkedAssets, assetsToAccept;
                const parent = module.bundle.parent;

                if (
                    (!parent || !parent.isParcelRequire) &&
                    typeof WebSocket !== "undefined"
                ) {
                    const hostname = "" || location.hostname;
                    const protocol =
                        location.protocol === "https:" ? "wss" : "ws";
                    const ws = new WebSocket(
                        `${protocol}://${hostname}:` + `49363` + `/`,
                    );

                    ws.onmessage = function(event) {
                        checkedAssets = {};
                        assetsToAccept = [];
                        const data = JSON.parse(event.data);

                        if (data.type === "update") {
                            let handled = false;
                            data.assets.forEach(asset => {
                                if (!asset.isNew) {
                                    const didAccept = hmrAcceptCheck(
                                        global.parcelRequire,
                                        asset.id,
                                    );

                                    if (didAccept) {
                                        handled = true;
                                    }
                                }
                            }); // Enable HMR for CSS by default.

                            handled =
                                handled ||
                                data.assets.every(
                                    asset =>
                                        asset.type === "css" &&
                                        asset.generated.js,
                                );

                            if (handled) {
                                console.clear();
                                data.assets.forEach(asset => {
                                    hmrApply(global.parcelRequire, asset);
                                });
                                assetsToAccept.forEach(v => {
                                    hmrAcceptRun(v[0], v[1]);
                                });
                            } else {
                                window.location.reload();
                            }
                        }

                        if (data.type === "reload") {
                            ws.close();

                            ws.onclose = function() {
                                location.reload();
                            };
                        }

                        if (data.type === "error-resolved") {
                            console.log("[parcel] ✨ Error resolved");
                            removeErrorOverlay();
                        }

                        if (data.type === "error") {
                            console.error(
                                `[parcel] 🚨  ${data.error.message}\n${data.error.stack}`,
                            );
                            removeErrorOverlay();
                            const overlay = createErrorOverlay(data);
                            document.body.appendChild(overlay);
                        }
                    };
                }

                function removeErrorOverlay() {
                    const overlay = document.getElementById(OVERLAY_ID);

                    if (overlay) {
                        overlay.remove();
                    }
                }

                function createErrorOverlay(data) {
                    const overlay = document.createElement("div");
                    overlay.id = OVERLAY_ID; // html encode message and stack trace

                    const message = document.createElement("div");
                    const stackTrace = document.createElement("pre");
                    message.innerText = data.error.message;
                    stackTrace.innerText = data.error.stack;
                    overlay.innerHTML =
                        `${'<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
                            '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
                            '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' +
                            '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">'}${
                            message.innerHTML
                        }</div>` +
                        `<pre>${stackTrace.innerHTML}</pre>` +
                        `</div>`;
                    return overlay;
                }

                function getParents(bundle, id) {
                    const modules = bundle.modules;

                    if (!modules) {
                        return [];
                    }

                    let parents = [];
                    let k, d, dep;

                    for (k in modules) {
                        for (d in modules[k][1]) {
                            dep = modules[k][1][d];

                            if (
                                dep === id ||
                                (Array.isArray(dep) &&
                                    dep[dep.length - 1] === id)
                            ) {
                                parents.push(k);
                            }
                        }
                    }

                    if (bundle.parent) {
                        parents = parents.concat(getParents(bundle.parent, id));
                    }

                    return parents;
                }

                function hmrApply(bundle, asset) {
                    const modules = bundle.modules;

                    if (!modules) {
                        return;
                    }

                    if (modules[asset.id] || !bundle.parent) {
                        const fn = new Function(
                            "require",
                            "module",
                            "exports",
                            asset.generated.js,
                        );
                        asset.isNew = !modules[asset.id];
                        modules[asset.id] = [fn, asset.deps];
                    } else if (bundle.parent) {
                        hmrApply(bundle.parent, asset);
                    }
                }

                function hmrAcceptCheck(bundle, id) {
                    const modules = bundle.modules;

                    if (!modules) {
                        return;
                    }

                    if (!modules[id] && bundle.parent) {
                        return hmrAcceptCheck(bundle.parent, id);
                    }

                    if (checkedAssets[id]) {
                        return;
                    }

                    checkedAssets[id] = true;
                    const cached = bundle.cache[id];
                    assetsToAccept.push([bundle, id]);

                    if (
                        cached &&
                        cached.hot &&
                        cached.hot._acceptCallbacks.length
                    ) {
                        return true;
                    }

                    return getParents(global.parcelRequire, id).some(id =>
                        hmrAcceptCheck(global.parcelRequire, id),
                    );
                }

                function hmrAcceptRun(bundle, id) {
                    let cached = bundle.cache[id];
                    bundle.hotData = {};

                    if (cached) {
                        cached.hot.data = bundle.hotData;
                    }

                    if (
                        cached &&
                        cached.hot &&
                        cached.hot._disposeCallbacks.length
                    ) {
                        cached.hot._disposeCallbacks.forEach(cb => {
                            cb(bundle.hotData);
                        });
                    }

                    delete bundle.cache[id];
                    bundle(id);
                    cached = bundle.cache[id];

                    if (
                        cached &&
                        cached.hot &&
                        cached.hot._acceptCallbacks.length
                    ) {
                        cached.hot._acceptCallbacks.forEach(cb => {
                            cb();
                        });

                        return true;
                    }
                }
            },
            {},
        ],
    },
    {},
    [
        "../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",
        "index.js",
    ],
    null,
);
//# sourceMappingURL=/Pomodoro.e31bb0bc.js.map
