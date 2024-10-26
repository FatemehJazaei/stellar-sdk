"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function cov_1nphckznk6() {
  var path = "/mnt/g/stellar-sdk/src/horizon/types/account.ts";
  var hash = "5619689d39e1ad68e98a7bf282ff2fea97649949";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/types/account.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5619689d39e1ad68e98a7bf282ff2fea97649949"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1nphckznk6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1nphckznk6();