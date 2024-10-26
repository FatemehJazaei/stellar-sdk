"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FriendbotBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_2oulnshw7u() {
  var path = "/mnt/g/stellar-sdk/src/horizon/friendbot_builder.ts";
  var hash = "e5e3884a79ea245007ac2e187082e3e1b41a47bd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/friendbot_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 21
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 34
        }
      },
      "2": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        loc: {
          start: {
            line: 4,
            column: 47
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e5e3884a79ea245007ac2e187082e3e1b41a47bd"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2oulnshw7u = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2oulnshw7u();
class FriendbotBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl, address) {
    cov_2oulnshw7u().f[0]++;
    cov_2oulnshw7u().s[0]++;
    super(serverUrl);
    cov_2oulnshw7u().s[1]++;
    this.url.segment("friendbot");
    cov_2oulnshw7u().s[2]++;
    this.url.setQuery("addr", address);
  }
}
exports.FriendbotBuilder = FriendbotBuilder;