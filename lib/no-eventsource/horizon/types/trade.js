"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function cov_1vkqu4afpw() {
  var path = "/mnt/g/stellar-sdk/src/horizon/types/trade.ts";
  var hash = "c105682e09f501a79d89ee1d7ac3b30447edefee";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/types/trade.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c105682e09f501a79d89ee1d7ac3b30447edefee"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1vkqu4afpw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1vkqu4afpw();