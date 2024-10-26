"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function cov_2emxbgnbwk() {
  var path = "/mnt/g/stellar-sdk/src/horizon/types/assets.ts";
  var hash = "c6d0432ad09a94143d410670aacf08269e94c9c4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/types/assets.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c6d0432ad09a94143d410670aacf08269e94c9c4"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2emxbgnbwk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2emxbgnbwk();