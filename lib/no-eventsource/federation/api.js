"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = void 0;
function cov_up4ljfk9r() {
  var path = "/mnt/g/stellar-sdk/src/federation/api.ts";
  var hash = "f2e6791efdd4912dafc98f6d42f0571e70e6d545";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/federation/api.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f2e6791efdd4912dafc98f6d42f0571e70e6d545"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_up4ljfk9r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_up4ljfk9r();
let Api = exports.Api = void 0;