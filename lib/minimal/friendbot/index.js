"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = void 0;
function cov_110wxfdec() {
  var path = "/mnt/g/stellar-sdk/src/friendbot/index.ts";
  var hash = "df1b4a15d6a418cf47ff3c9efafa20805f85b79a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/friendbot/index.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "df1b4a15d6a418cf47ff3c9efafa20805f85b79a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_110wxfdec = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_110wxfdec();
let Api = exports.Api = void 0;