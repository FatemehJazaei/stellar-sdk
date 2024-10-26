"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  InvalidChallengeError: true
};
Object.defineProperty(exports, "InvalidChallengeError", {
  enumerable: true,
  get: function () {
    return _errors.InvalidChallengeError;
  }
});
var _utils = require("./utils");
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});
var _errors = require("./errors");
function cov_ip8qz32dz() {
  var path = "/mnt/g/stellar-sdk/src/webauth/index.ts";
  var hash = "c2d6cb259b4a731204087e3757eb5feded86ef40";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/webauth/index.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c2d6cb259b4a731204087e3757eb5feded86ef40"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ip8qz32dz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ip8qz32dz();