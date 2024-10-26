"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasOwnProperty = hasOwnProperty;
function cov_b9iprlqqs() {
  var path = "/mnt/g/stellar-sdk/src/rpc/utils.ts";
  var hash = "52611b7d305848217c851a41632222b55d1ec0d2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/rpc/utils.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "hasOwnProperty",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 30
          }
        },
        loc: {
          start: {
            line: 6,
            column: 33
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "52611b7d305848217c851a41632222b55d1ec0d2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_b9iprlqqs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_b9iprlqqs();
// Check if the given object X has a field Y, and make that available to
// typescript typing.
function hasOwnProperty(obj, prop) {
  cov_b9iprlqqs().f[0]++;
  cov_b9iprlqqs().s[0]++;
  // eslint-disable-next-line no-prototype-builtins
  return obj.hasOwnProperty(prop);
}