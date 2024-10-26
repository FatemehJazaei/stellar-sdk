"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Server: true,
  AxiosClient: true,
  SERVER_TIME_MAP: true,
  getCurrentServerTime: true
};
Object.defineProperty(exports, "AxiosClient", {
  enumerable: true,
  get: function () {
    return _horizon_axios_client.default;
  }
});
Object.defineProperty(exports, "SERVER_TIME_MAP", {
  enumerable: true,
  get: function () {
    return _horizon_axios_client.SERVER_TIME_MAP;
  }
});
Object.defineProperty(exports, "Server", {
  enumerable: true,
  get: function () {
    return _server.HorizonServer;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "getCurrentServerTime", {
  enumerable: true,
  get: function () {
    return _horizon_axios_client.getCurrentServerTime;
  }
});
var _horizon_api = require("./horizon_api");
Object.keys(_horizon_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _horizon_api[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _horizon_api[key];
    }
  });
});
var _server_api = require("./server_api");
Object.keys(_server_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _server_api[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _server_api[key];
    }
  });
});
var _account_response = require("./account_response");
Object.keys(_account_response).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _account_response[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _account_response[key];
    }
  });
});
var _server = require("./server");
var _horizon_axios_client = _interopRequireWildcard(require("./horizon_axios_client"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function cov_hfjvdioi8() {
  var path = "/mnt/g/stellar-sdk/src/horizon/index.ts";
  var hash = "614b3f6058bd2b1331f3f97a6645a7ce87fa17bf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/index.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "614b3f6058bd2b1331f3f97a6645a7ce87fa17bf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_hfjvdioi8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_hfjvdioi8();
/** @module Horizon */
// Expose all types
// stellar-sdk classes to expose
var _default = exports.default = module.exports;