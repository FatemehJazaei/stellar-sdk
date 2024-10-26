"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  StellarBase: true
};
exports.default = exports.StellarBase = void 0;
var _index = require("./index");
Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});
var _StellarBase = _interopRequireWildcard(require("@stellar/stellar-base"));
exports.StellarBase = _StellarBase;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function cov_xb7ujizlb() {
  var path = "/mnt/g/stellar-sdk/src/rpc/browser.ts";
  var hash = "070a01ab0cebf66f5fb1752de38d3d6ec77197d2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/rpc/browser.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "070a01ab0cebf66f5fb1752de38d3d6ec77197d2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_xb7ujizlb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_xb7ujizlb();
/* tslint:disable:no-var-requires */
/* eslint-disable import/no-import-module-exports */
var _default = exports.default = module.exports;