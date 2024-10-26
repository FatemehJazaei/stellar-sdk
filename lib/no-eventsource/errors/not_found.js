"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundError = void 0;
var _network = require("./network");
function cov_1oo2g13h6n() {
  var path = "/mnt/g/stellar-sdk/src/errors/not_found.ts";
  var hash = "f9eeac6968845349fe8b6a6db821e3a4bbbf4785";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/errors/not_found.ts",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 15,
          column: 42
        }
      },
      "1": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 29
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 31
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 37
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        loc: {
          start: {
            line: 14,
            column: 46
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f9eeac6968845349fe8b6a6db821e3a4bbbf4785"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1oo2g13h6n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1oo2g13h6n();
/**
 * NotFoundError is raised when the resource requested from Horizon is
 * unavailable.
 * @augments NetworkError
 * @inheritdoc
 * @category Errors
 *
 * @param {string} message Human-readable error message
 * @param {any} response Response details, received from the Horizon server
 */
class NotFoundError extends _network.NetworkError {
  constructor(message, response) {
    cov_1oo2g13h6n().f[0]++;
    const trueProto = (cov_1oo2g13h6n().s[0]++, new.target.prototype);
    cov_1oo2g13h6n().s[1]++;
    super(message, response);
    cov_1oo2g13h6n().s[2]++;
    this.__proto__ = trueProto;
    cov_1oo2g13h6n().s[3]++;
    this.constructor = NotFoundError;
    cov_1oo2g13h6n().s[4]++;
    this.name = "NotFoundError";
  }
}
exports.NotFoundError = NotFoundError;