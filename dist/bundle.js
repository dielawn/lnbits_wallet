/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _getPost_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPost.js */ "./src/getPost.js");
/* harmony import */ var _Wallet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wallet.js */ "./src/Wallet.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var User = /*#__PURE__*/_createClass(function User() {
  var _this = this;
  _classCallCheck(this, User);
  //add a new key set
  _defineProperty(this, "addWallet", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, admKey, invKey, walletName) {
      var wlt;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            wlt = new _Wallet_js__WEBPACK_IMPORTED_MODULE_1__.Wallet();
            wlt.wallet_id = id;
            wlt.admin_key = admKey;
            wlt.inv_rd_key = invKey;
            wlt.wallet_name = walletName;
            _this.wallets.push(wlt);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "setCurrentWallet", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(i) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _this.currentWallet = _this.wallets[i]);
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x5) {
      return _ref2.apply(this, arguments);
    };
  }());
  _defineProperty(this, "sumBalances", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var sum, i;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          sum = 0;
          for (i = 0; i < _this.wallets.length; i++) {
            sum += _this.wallets[i].balance;
          }
          _this.totalBalance = sum;
          return _context3.abrupt("return", sum);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  _defineProperty(this, "initialize", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _this.sumBalances().then(function (total) {
            _this.totalBalance = total;
          });
        case 2:
          _this.totalBalance = _context4.sent;
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  _defineProperty(this, "getBtcUsdPrice", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var data, json, price;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0,_getPost_js__WEBPACK_IMPORTED_MODULE_0__.getData)("https://api.coinbase.com/v2/prices/BTC-USD/spot");
        case 2:
          data = _context5.sent;
          json = JSON.parse(data);
          price = json.data.amount;
          return _context5.abrupt("return", price);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  this.wallets = [];
  this.currentWallet = null;
  this.totalBalance = null;
});

/***/ }),

/***/ "./src/Wallet.js":
/*!***********************!*\
  !*** ./src/Wallet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wallet: () => (/* binding */ Wallet)
/* harmony export */ });
/* harmony import */ var getPost_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! getPost.js */ "./src/getPost.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PAYMENTS_URL = "https://legend.lnbits.com/api/v1/payments";
var WALLET_URL = "https://legend.lnbits.com/api/v1/wallet";
var QR_CODE_URL = "https://legend.lnbits.com/api/v1/qrcode/";
var Wallet = /*#__PURE__*/_createClass(function Wallet(id, admKey, invKey, walletName) {
  var _this = this;
  _classCallCheck(this, Wallet);
  _defineProperty(this, "initialize", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _this.getBalance();
        case 2:
          _this.balance = _context.sent;
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  _defineProperty(this, "getBalance", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var data, json, balance;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0,getPost_js__WEBPACK_IMPORTED_MODULE_0__.getData)(WALLET_URL, _this.admin_key);
        case 3:
          data = _context2.sent;
          json = JSON.parse(data); //convert mili sats to sats 
          balance = Number(json.balance) / 1000;
          return _context2.abrupt("return", balance);
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error("'Error ".concat(_this.wallet_name, ">getBalance: ").concat(_context2.t0));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  })));
  _defineProperty(this, "getTxHistory", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0,getPost_js__WEBPACK_IMPORTED_MODULE_0__.getData)(PAYMENTS_URL, _this.admin_key, "application/json");
        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", JSON.parse(data));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error("'Error ".concat(_this.wallet_name, ">getTxHistory: ").concat(_context3.t0));
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  })));
  //returns payable invoice
  _defineProperty(this, "postNewInvoice", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(amount, memo) {
      var json, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            json = {
              unit: 'sat',
              amount: Number(amount),
              memo: memo,
              out: false,
              description_hash: ''
            };
            _context4.prev = 1;
            _context4.next = 4;
            return (0,getPost_js__WEBPACK_IMPORTED_MODULE_0__.postJson)(PAYMENTS_URL, _this.admin_key, "application/json", JSON.stringify(json));
          case 4:
            response = _context4.sent;
            return _context4.abrupt("return", response);
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.error("Error ".concat(_this.wallet_name, ">postNewInvoice: ").concat(_context4.t0));
            throw _context4.t0;
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 8]]);
    }));
    return function (_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }());
  //pays invoice
  _defineProperty(this, "postPayment", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(invoice) {
      var json, amount, response, paymentHash;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            json = {
              out: true,
              bolt11: invoice
            };
            _context5.prev = 1;
            _context5.next = 4;
            return _this.returnInvoiceAmount(invoice);
          case 4:
            amount = _context5.sent;
            if (confirm("Pay ".concat(amount, " sats?\n            ").concat(invoice))) {
              _context5.next = 7;
              break;
            }
            return _context5.abrupt("return");
          case 7:
            _context5.next = 9;
            return (0,getPost_js__WEBPACK_IMPORTED_MODULE_0__.postJson)(PAYMENTS_URL, _this.admin_key, "application/json", JSON.stringify(json));
          case 9:
            response = _context5.sent;
            paymentHash = response.payment_hash;
            console.log("Payment successful: ".concat(paymentHash));
            return _context5.abrupt("return", paymentHash);
          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](1);
            console.error("Error  ".concat(_this.wallet_name, ">postPayment: ").concat(_context5.t0));
          case 18:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 15]]);
    }));
    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }());
  _defineProperty(this, "customAlert", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(invoice) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x4) {
      return _ref6.apply(this, arguments);
    };
  }());
  _defineProperty(this, "decodeInvoice", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(invoice) {
      var json, data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            json = {
              data: invoice
            };
            _context7.prev = 1;
            _context7.next = 4;
            return (0,getPost_js__WEBPACK_IMPORTED_MODULE_0__.postJson)("".concat(PAYMENTS_URL, "/decode"), _this.inv_rd_key, 'application/json', JSON.stringify(json));
          case 4:
            data = _context7.sent;
            return _context7.abrupt("return", data);
          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            console.error("Error  ".concat(_this.wallet_name, ">decodeInvoice: ").concat(_context7.t0));
          case 11:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 8]]);
    }));
    return function (_x5) {
      return _ref7.apply(this, arguments);
    };
  }());
  _defineProperty(this, "returnInvoiceAmount", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(invoice) {
      var data, amount;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _this.decodeInvoice(invoice);
          case 3:
            data = _context8.sent;
            amount = data.amount_msat / 1000;
            return _context8.abrupt("return", amount);
          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            console.error("Error  ".concat(_this.wallet_name, ">returnInvoiceAmount: ").concat(_context8.t0));
          case 11:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 8]]);
    }));
    return function (_x6) {
      return _ref8.apply(this, arguments);
    };
  }());
  //returns svg file
  _defineProperty(this, "getQrCode", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(invoice) {
      var data;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return (0,getPost_js__WEBPACK_IMPORTED_MODULE_0__.getData)("".concat(QR_CODE_URL).concat(invoice));
          case 3:
            data = _context9.sent;
            return _context9.abrupt("return", data);
          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            console.error("Error  ".concat(_this.wallet_name, ">getQrCode: ").concat(_context9.t0));
          case 10:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 7]]);
    }));
    return function (_x7) {
      return _ref9.apply(this, arguments);
    };
  }());
  //under construction
  _defineProperty(this, "getWalletList", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0,getPost_js__WEBPACK_IMPORTED_MODULE_0__.getData)(WALLET_URL, _this.admin_key);
        case 2:
          data = _context10.sent;
          console.log(data);
        case 4:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  })));
  this.wallet_id = id;
  this.admin_key = admKey;
  this.inv_rd_key = invKey;
  this.wallet_name = walletName;
  this.balance = null;
});

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.js */ "./src/User.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var user = new _User_js__WEBPACK_IMPORTED_MODULE_0__.User();
//INITIALIZATION
var initializeUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var loadWallets;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          user.wallets.length = 0;
          //wallets keys saved in config.js include config.js in .gitignore
          loadWallets = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var i;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    i = 0;
                  case 1:
                    if (!(i < _config_js__WEBPACK_IMPORTED_MODULE_1__.WALLETS.length)) {
                      _context.next = 9;
                      break;
                    }
                    _context.next = 4;
                    return user.addWallet(_config_js__WEBPACK_IMPORTED_MODULE_1__.WALLETS[i].ID, _config_js__WEBPACK_IMPORTED_MODULE_1__.WALLETS[i].ADMIN_KEY, _config_js__WEBPACK_IMPORTED_MODULE_1__.WALLETS[i].INV_KEY, _config_js__WEBPACK_IMPORTED_MODULE_1__.WALLETS[i].WALLET_NAME);
                  case 4:
                    _context.next = 6;
                    return user.wallets[i].initialize();
                  case 6:
                    i++;
                    _context.next = 1;
                    break;
                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function loadWallets() {
              return _ref2.apply(this, arguments);
            };
          }();
          _context2.next = 4;
          return loadWallets();
        case 4:
          //wallet object to user.wallets

          console.log('user:', user);
          console.log(user.wallets.length);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function initializeUser() {
    return _ref.apply(this, arguments);
  };
}();
await initializeUser();
var displayHeader = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var header;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          header = document.getElementById('header');
          header.setAttribute('aria-label', 'Total balance');
          _context3.t0 = "";
          _context3.next = 5;
          return user.sumBalances();
        case 5:
          _context3.t1 = _context3.sent;
          header.innerHTML = _context3.t0.concat.call(_context3.t0, _context3.t1, " \n    <span class=\"icon-Bitcoin-Lightning-Gray icon-lg\"></span><button class=\"material-symbols-outlined menuBtn menuIcon\">menu</button>");
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function displayHeader() {
    return _ref3.apply(this, arguments);
  };
}();
await displayHeader();
var openClsMenu = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var menuDiv, menuList, i, menuItem;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          menuDiv = document.createElement('div');
          menuDiv.classList.add('menuDiv');
          menuList = ['Decode', 'New Wallet', 'Cashu'];
          for (i = 0; i < menuList.length; i++) {
            menuItem = document.createElement('button');
            menuItem.innerText = menuList[i];
            menuItem.classList.add('menuItem');
            menuItem.id = "menuItem".concat(i);
            menuDiv.appendChild(menuItem);
          }
          document.getElementById('header').appendChild(menuDiv);
          menuDiv.classList.toggle('hide');
          document.querySelector('.menuBtn').addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  menuDiv.classList.toggle('hide');
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          })));
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function openClsMenu() {
    return _ref4.apply(this, arguments);
  };
}();
await openClsMenu();
var handleDecode = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var decodeBtn;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          decodeBtn = document.getElementById('menuItem0'); //initialize the invoice as hidden
          decodeBtn.setAttribute('aria-label', 'Decode Invoice');
          document.getElementById('invoiceDiv').classList.add('hide');
          decodeBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  //hide the menu
                  document.querySelector('.menuDiv').classList.add('hide');
                  document.getElementById('container').classList.toggle('blur');
                  _context6.next = 4;
                  return displayInvoice();
                case 4:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          })));
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function handleDecode() {
    return _ref6.apply(this, arguments);
  };
}();
var displayInvoice = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var containerDiv, invoiceDiv, containerEls;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          containerDiv = document.querySelector('.container');
          invoiceDiv = document.getElementById('invoiceDiv');
          containerDiv.classList.add('blur');
          invoiceDiv.classList.replace('hide', 'flex');
          _context8.t0 = "";
          _context8.next = 7;
          return returnInvoiceTxt();
        case 7:
          _context8.t1 = _context8.sent;
          invoiceDiv.innerHTML = _context8.t0.concat.call(_context8.t0, _context8.t1);
          _context8.next = 11;
          return setCopyListener();
        case 11:
          //disable inputs and buttons on the blured page
          containerEls = document.querySelectorAll('.container button, .container input');
          containerEls.forEach(function (element) {
            element.disabled = containerDiv.classList.contains('blur');
          });
          //display invoice div with decoded invoice txt and a close btn
          _context8.next = 15;
          return appendClsBtn('invoiceDiv');
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function displayInvoice() {
    return _ref8.apply(this, arguments);
  };
}();
await handleDecode();
var returnInvoiceTxt = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var invoice, invoiceData, amount, dateTimeTxt, qrCode;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return navigator.clipboard.readText();
        case 2:
          invoice = _context9.sent;
          console.log(invoice);
          _context9.next = 6;
          return user.wallets[0].decodeInvoice(invoice);
        case 6:
          invoiceData = _context9.sent;
          console.log(invoiceData);
          amount = invoiceData.amount_msat / 1000;
          _context9.next = 11;
          return handleDateCodes(invoiceData.date);
        case 11:
          dateTimeTxt = _context9.sent;
          _context9.next = 14;
          return user.wallets[0].getQrCode(invoice);
        case 14:
          qrCode = _context9.sent;
          return _context9.abrupt("return", "<span class=\"icon-Bitcoin-Lightning-Gray-White-Rounded icon-5x\"></span>\n    <p>".concat(amount, " sats</p> \n    <p>Memo: ").concat(invoiceData.description, "</p> \n    <p>").concat(dateTimeTxt[1], "</p>\n    <p>").concat(dateTimeTxt[0], "</p>\n    <button class=\"cpyBtn\">Copy: ").concat(abrvHash(invoice, 8), "</button>    \n    <div class=\"qrDiv\"> ").concat(qrCode, "</div>\n    <input id=\"invoiceInput\" class=\"hide\" value=\"").concat(invoice, "\">"));
        case 16:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function returnInvoiceTxt() {
    return _ref9.apply(this, arguments);
  };
}();
var setCopyListener = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          document.querySelector('.cpyBtn').addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.t0 = displaySuccessMsg;
                  _context10.next = 3;
                  return copyToClipBrd(document.getElementById('invoiceInput').value);
                case 3:
                  _context10.t1 = _context10.sent;
                  _context10.next = 6;
                  return (0, _context10.t0)(_context10.t1);
                case 6:
                case "end":
                  return _context10.stop();
              }
            }, _callee10);
          })));
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function setCopyListener() {
    return _ref10.apply(this, arguments);
  };
}();
var displayWallets = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Promise.all(user.wallets.map( /*#__PURE__*/function () {
            var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(wallet) {
              var walletDiv;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    walletDiv = document.createElement('div');
                    walletDiv.classList.add('walletDiv');
                    walletDiv.id = "wallet".concat(wallet.wallet_name.substring(0, 3));
                    walletDiv.innerHTML = "<p aria-label=\"Wallet name and balance\">".concat(wallet.wallet_name, ":<br>\n            ").concat(wallet.balance, " sats</p>");
                    document.getElementById('walletsDiv').appendChild(walletDiv);
                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12);
            }));
            return function (_x) {
              return _ref13.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function displayWallets() {
    return _ref12.apply(this, arguments);
  };
}();
await displayWallets();

//maybe useful for cashu tokens to check status?
var invoicesTLS = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(invoice) {
    var invoicesArray, i;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          invoicesArray = JSON.parse(localStorage.getItem('invoices'));
          invoicesArray.push(invoice);
          for (i = 0; i < invoicesArray.length; i++) {
            localStorage.setItem("invoice".concat(i), JSON.stringify(invoicesArray[i]));
          }
          localStorage.setItem('invoices', JSON.stringify(invoicesArray));
          return _context14.abrupt("return", invoicesArray);
        case 5:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function invoicesTLS(_x2) {
    return _ref14.apply(this, arguments);
  };
}();

// new invoice btn 
var dispCreateInvBtn = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Promise.all(user.wallets.map( /*#__PURE__*/function () {
            var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(wallet) {
              var newInvBtn;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    newInvBtn = document.createElement('button');
                    newInvBtn.classList.add('newInvBtn');
                    newInvBtn.innerHTML = " <span class=\"material-symbols-outlined\">arrow_downward</span>";
                    newInvBtn.setAttribute('aria-label', 'Create New Invoice');
                    newInvBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                      var amount, memoInput, invoice, msg;
                      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                        while (1) switch (_context15.prev = _context15.next) {
                          case 0:
                            console.log('clicked it');
                            _context15.next = 3;
                            return amountIsValid();
                          case 3:
                            amount = _context15.sent;
                            if (!(amount === null)) {
                              _context15.next = 6;
                              break;
                            }
                            return _context15.abrupt("return");
                          case 6:
                            memoInput = document.getElementById('memoInput');
                            _context15.next = 9;
                            return wallet.postNewInvoice(amountInput.value, memoInput.value);
                          case 9:
                            invoice = _context15.sent;
                            console.log(invoice.payment_request);
                            _context15.next = 13;
                            return handleDecode();
                          case 13:
                            _context15.next = 15;
                            return copyToClipBrd(invoice.payment_request);
                          case 15:
                            msg = _context15.sent;
                            _context15.next = 18;
                            return displaySuccessMsg(msg);
                          case 18:
                            _context15.next = 20;
                            return displayInvoice();
                          case 20:
                            _context15.next = 22;
                            return clearInputs();
                          case 22:
                          case "end":
                            return _context15.stop();
                        }
                      }, _callee15);
                    })));
                    document.getElementById("wallet".concat(wallet.wallet_name.substring(0, 3))).appendChild(newInvBtn);
                  case 6:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16);
            }));
            return function (_x3) {
              return _ref16.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function dispCreateInvBtn() {
    return _ref15.apply(this, arguments);
  };
}();
await dispCreateInvBtn();
var amountIsValid = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
    var amountInput, amount;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          amountInput = document.getElementById('amountInput');
          amount = amountInput.value;
          if (!(amount === '' || isNaN(amount) || amount <= 0)) {
            _context18.next = 7;
            break;
          }
          amountInput.classList.add('error');
          return _context18.abrupt("return", null);
        case 7:
          if (amountInput.classList.contains('error')) {
            amountInput.classList.remove('error');
          }
        case 8:
          return _context18.abrupt("return", amount);
        case 9:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function amountIsValid() {
    return _ref18.apply(this, arguments);
  };
}();
var clearInputs = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
    var amountInput, memoInput;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          amountInput = document.getElementById('amountInput');
          memoInput = document.getElementById('memoInput');
          amountInput.value = '';
          memoInput.value = '';
        case 4:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function clearInputs() {
    return _ref19.apply(this, arguments);
  };
}();
var displaySuccessMsg = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(msg) {
    var invoiceBtnsDiv, msgTxtEl;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          invoiceBtnsDiv = document.getElementById('invoiceDiv');
          msgTxtEl = document.createElement('p');
          msgTxtEl.classList.add('msgTxtEl');
          msgTxtEl.innerHTML = msg;
          invoiceBtnsDiv.appendChild(msgTxtEl);
          setTimeout(function () {
            msgTxtEl.remove();
          }, 3000);
        case 6:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function displaySuccessMsg(_x4) {
    return _ref20.apply(this, arguments);
  };
}();
var dispPayInvBtn = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Promise.all(user.wallets.map( /*#__PURE__*/function () {
            var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(wallet) {
              var payInvBtn;
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    payInvBtn = document.createElement('button');
                    payInvBtn.innerHTML = "<span class=\"material-symbols-outlined\">arrow_upward</span>";
                    payInvBtn.classList.add('payInvBtn');
                    payInvBtn.setAttribute('aria-label', 'Pay Invoice');
                    payInvBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
                      var invoice, amount;
                      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                        while (1) switch (_context21.prev = _context21.next) {
                          case 0:
                            _context21.next = 2;
                            return navigator.clipboard.readText();
                          case 2:
                            invoice = _context21.sent;
                            _context21.next = 5;
                            return wallet.returnInvoiceAmount(invoice);
                          case 5:
                            amount = _context21.sent;
                            _context21.next = 8;
                            return wallet.postPayment(invoice);
                          case 8:
                          case "end":
                            return _context21.stop();
                        }
                      }, _callee21);
                    })));
                    document.getElementById("wallet".concat(wallet.wallet_name.substring(0, 3))).appendChild(payInvBtn);
                  case 6:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22);
            }));
            return function (_x5) {
              return _ref22.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function dispPayInvBtn() {
    return _ref21.apply(this, arguments);
  };
}();
await dispPayInvBtn();
var handleDateCodes = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(time) {
    var fmtdTime, fmtdDate;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          time = time * 1000;
          fmtdTime = new Date(time).toLocaleTimeString();
          fmtdDate = new Date(time).toLocaleDateString();
          return _context24.abrupt("return", [fmtdDate, fmtdTime]);
        case 4:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function handleDateCodes(_x6) {
    return _ref24.apply(this, arguments);
  };
}();

// const displayTxHistory = async () => {
//     await Promise.all(
//         user.wallets.map(async (wallet) => {
//             const txEl = document.createElement('div')
//             txEl.classList.add('txEl')
//             const transactions = await wallet.getTxHistory()    
//             await Promise.all(
//                 transactions.map(async (tx) => {                       
//                     const dateTime = await handleDateCodes(tx.time)          
//                     //transaction data to txt   
//                     const txTable = document.createElement('div')
//                     txTable.classList.add('txTable')
//                     txTable.innerHTML = `<p>${wallet.wallet_name}:<br>
//                     ${tx.amount / 1000} sats<br>
//                     Fee: ${tx.fee} mSats<br>
//                     Memo: ${tx.memo}<br>
//                     ${dateTime}</p>`        
//                     txEl.appendChild(txTable)
//                 })
//             ) 
//             document.getElementById(`wallet${wallet.wallet_name.substring(0, 3)}`).appendChild(txEl)
//         })
//     )
// }
// await displayTxHistory()

var displayTxHistory = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return Promise.all(user.wallets.map( /*#__PURE__*/function () {
            var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(wallet) {
              var txEl, transactions;
              return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                while (1) switch (_context26.prev = _context26.next) {
                  case 0:
                    txEl = document.createElement('div');
                    txEl.classList.add('txEl');
                    _context26.next = 4;
                    return wallet.getTxHistory();
                  case 4:
                    transactions = _context26.sent;
                    _context26.next = 7;
                    return Promise.all(transactions.map( /*#__PURE__*/function () {
                      var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(tx) {
                        var dateTime, txTable;
                        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                          while (1) switch (_context25.prev = _context25.next) {
                            case 0:
                              _context25.next = 2;
                              return handleDateCodes(tx.time);
                            case 2:
                              dateTime = _context25.sent;
                              //transaction data to txt   
                              txTable = document.createElement('table');
                              txTable.setAttribute('aria-label', 'Transaction');
                              txTable.classList.add('txTxt');
                              txTable.innerHTML = "<thead>\n                        <tr> <th aria-label=\"Wallet name\">".concat(wallet.wallet_name, ":</th> </tr>\n                    </thead>\n                    <tbody>\n                        <tr> <td aria-label=\"Amount\">").concat(tx.amount / 1000, " sats</td> </tr>\n                        <tr> <td aria-label=\"Fee\">").concat(tx.fee, " mSats</td> </tr>\n                        <tr> <td aria-label=\"Memo\">").concat(tx.memo, "</td> </tr>\n                        <tr> <td aria-label=\"Date\">").concat(dateTime[1], "</td> </tr>\n                        <tr> <td aria-label=\"Time\">").concat(dateTime[0], "</td> </tr>\n                    </tbody>");
                              txEl.appendChild(txTable);
                            case 8:
                            case "end":
                              return _context25.stop();
                          }
                        }, _callee25);
                      }));
                      return function (_x8) {
                        return _ref27.apply(this, arguments);
                      };
                    }()));
                  case 7:
                    document.getElementById("wallet".concat(wallet.wallet_name.substring(0, 3))).appendChild(txEl);
                  case 8:
                  case "end":
                    return _context26.stop();
                }
              }, _callee26);
            }));
            return function (_x7) {
              return _ref26.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function displayTxHistory() {
    return _ref25.apply(this, arguments);
  };
}();
await displayTxHistory();

//closetBtn for pop ups
var appendClsBtn = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(elIdToRemove) {
    var toBeRemoved, clsBtn;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          toBeRemoved = document.getElementById(elIdToRemove);
          clsBtn = document.createElement('button');
          clsBtn.classList.add('clsBtn');
          clsBtn.innerHTML = "<span class=\"material-symbols-outlined\" >close</span>";
          clsBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
            var containerEls;
            return _regeneratorRuntime().wrap(function _callee28$(_context28) {
              while (1) switch (_context28.prev = _context28.next) {
                case 0:
                  toBeRemoved.innerHTML = '';
                  toBeRemoved.classList.replace('flex', 'hide');
                  document.getElementById('container').classList.toggle('blur');
                  containerEls = document.querySelectorAll('.container button, .container input');
                  containerEls.forEach(function (element) {
                    element.disabled = document.querySelector('.container').classList.contains('blur');
                  });
                case 5:
                case "end":
                  return _context28.stop();
              }
            }, _callee28);
          })));
          toBeRemoved.appendChild(clsBtn);
        case 6:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return function appendClsBtn(_x9) {
    return _ref28.apply(this, arguments);
  };
}();
//paste invoice btn
var handlePasteInvoice = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(wallet) {
    var containerDiv, pasteInvoiceBtn, invoice;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          containerDiv = document.getElementById('container');
          pasteInvoiceBtn = document.createElement('button');
          pasteInvoiceBtn.textContent = 'Paste Invoice';

          //onclick auto paste from clipboard
          _context31.next = 5;
          return navigator.clipboard.readText();
        case 5:
          invoice = _context31.sent;
          pasteInvoiceBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
            return _regeneratorRuntime().wrap(function _callee30$(_context30) {
              while (1) switch (_context30.prev = _context30.next) {
                case 0:
                  _context30.next = 2;
                  return wallet.postPayment(invoice);
                case 2:
                  _context30.t0 = console;
                  _context30.next = 5;
                  return wallet.returnInvoiceAmount(invoice);
                case 5:
                  _context30.t1 = _context30.sent;
                  _context30.t0.log.call(_context30.t0, _context30.t1);
                case 7:
                case "end":
                  return _context30.stop();
              }
            }, _callee30);
          })));
          containerDiv.appendChild(pasteInvoiceBtn);
        case 8:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }));
  return function handlePasteInvoice(_x10) {
    return _ref30.apply(this, arguments);
  };
}();

//footer
var displayFooter = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.t0 = "Interface by dielawn, Powered by LNBits <span class=\"icon-Bitcoin-Lightning-White icon-lg\"></span>";
          _context32.next = 3;
          return user.getBtcUsdPrice();
        case 3:
          _context32.t1 = _context32.sent;
          document.getElementById('footer').innerHTML = _context32.t0.concat.call(_context32.t0, _context32.t1);
        case 5:
        case "end":
          return _context32.stop();
      }
    }, _callee32);
  }));
  return function displayFooter() {
    return _ref32.apply(this, arguments);
  };
}();

//tools 

var copyToClipBrd = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(text) {
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          if (!navigator.clipboard) {
            _context33.next = 12;
            break;
          }
          _context33.prev = 1;
          _context33.next = 4;
          return navigator.clipboard.writeText(text);
        case 4:
          return _context33.abrupt("return", 'Copied to clipboard!');
        case 7:
          _context33.prev = 7;
          _context33.t0 = _context33["catch"](1);
          return _context33.abrupt("return", 'Unable to copy to clipboard');
        case 10:
          _context33.next = 13;
          break;
        case 12:
          return _context33.abrupt("return", 'Clipboard API not supported');
        case 13:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[1, 7]]);
  }));
  return function copyToClipBrd(_x11) {
    return _ref33.apply(this, arguments);
  };
}();

//display shorter hash
var abrvHash = function abrvHash(hash, startEnd) {
  return "".concat(hash.substring(0, startEnd), "...").concat(hash.substring(hash.length - startEnd, hash.length));
};
await displayFooter();
var app = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          setTimeout(function () {
            app();
          }, 10000);
        case 1:
        case "end":
          return _context34.stop();
      }
    }, _callee34);
  }));
  return function app() {
    return _ref34.apply(this, arguments);
  };
}();
document.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
  return _regeneratorRuntime().wrap(function _callee35$(_context35) {
    while (1) switch (_context35.prev = _context35.next) {
      case 0:
      case "end":
        return _context35.stop();
    }
  }, _callee35);
})));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WALLETS: () => (/* binding */ WALLETS)
/* harmony export */ });
var WALLETS = [{
  ID: 'd03030f5398a410fbe8a1343daca0f0e',
  ADMIN_KEY: 'd5805522bd52408cac2153f0ec5176d7',
  INV_KEY: '4788e7d2d7aa483495692127dccdd6f3',
  WALLET_NAME: 'Pleb wallet'
}, {
  ID: '2278486a2cf04aae9d8ff1fb0ac3da20',
  ADMIN_KEY: '8b94a55696f445cb846f06c73f88e858',
  INV_KEY: 'cf836d58fb5a46ae8ac861f061f5c7a9',
  WALLET_NAME: 'Wallnut'
}];


/***/ }),

/***/ "./src/getPost.js":
/*!************************!*\
  !*** ./src/getPost.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData),
/* harmony export */   postJson: () => (/* binding */ postJson)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getData(_x, _x2, _x3) {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, apikey, content_type) {
    var headers, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          headers = new Headers();
          if (apikey) {
            headers.append('X-Api-Key', apikey);
          }
          if (content_type) {
            headers.append('Content-type', content_type);
          }
          _context.prev = 3;
          _context.next = 6;
          return fetch(url, {
            method: 'GET',
            headers: headers
          });
        case 6:
          response = _context.sent;
          if (response.ok) {
            _context.next = 9;
            break;
          }
          throw new Error("Failed to fetch data. Status: ".concat(response.status));
        case 9:
          _context.next = 11;
          return response.text();
        case 11:
          return _context.abrupt("return", _context.sent);
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          throw new Error("Eroor fetching data. Status: ".concat(_context.t0.message));
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 14]]);
  }));
  return _getData.apply(this, arguments);
}
function postJson(_x4, _x5, _x6, _x7) {
  return _postJson.apply(this, arguments);
}
function _postJson() {
  _postJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, apikey, content_type, json) {
    var response, jsonResponse;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': content_type,
              'X-Api-Key': apikey
            },
            body: json
          });
        case 3:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 6;
            break;
          }
          throw new Error("Failed to post data. Status: ".concat(response.status));
        case 6:
          _context2.next = 8;
          return response.json();
        case 8:
          jsonResponse = _context2.sent;
          return _context2.abrupt("return", jsonResponse);
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error("Error posting data: ".concat(_context2.t0.message));
          throw _context2.t0;
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _postJson.apply(this, arguments);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map