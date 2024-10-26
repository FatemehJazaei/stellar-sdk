"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Server: true,
  FEDERATION_RESPONSE_MAX_SIZE: true
};
Object.defineProperty(exports, "FEDERATION_RESPONSE_MAX_SIZE", {
  enumerable: true,
  get: function () {
    return _server.FEDERATION_RESPONSE_MAX_SIZE;
  }
});
Object.defineProperty(exports, "Server", {
  enumerable: true,
  get: function () {
    return _server.FederationServer;
  }
});
var _server = require("./server");
var _api = require("./api");
Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _api[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});
function cov_1c1jlnhay1() {
  var path = "/mnt/g/stellar-sdk/src/federation/index.ts";
  var hash = "78a9904544ffe2416584ea900221bf32c479e125";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/federation/index.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "78a9904544ffe2416584ea900221bf32c479e125"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1c1jlnhay1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1c1jlnhay1();