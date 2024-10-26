"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function cov_2fd3bajd7v() {
  var path = "/mnt/g/stellar-sdk/src/horizon/types/offer.ts";
  var hash = "24ffb5af1aa6d851b5738dd51294c545afd4ba84";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/types/offer.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "24ffb5af1aa6d851b5738dd51294c545afd4ba84"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2fd3bajd7v = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2fd3bajd7v();