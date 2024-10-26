"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadResponseError = void 0;
var _network = require("./network");
function cov_1oyhtu3z3j() {
  var path = "/mnt/g/stellar-sdk/src/errors/bad_response.ts";
  var hash = "6d29500e7d399f9cc30ce899d3389f70336468a7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/errors/bad_response.ts",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 22
        },
        end: {
          line: 18,
          column: 42
        }
      },
      "1": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 29
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 31
        }
      },
      "3": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 40
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 46
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 17
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
    hash: "6d29500e7d399f9cc30ce899d3389f70336468a7"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1oyhtu3z3j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1oyhtu3z3j();
/**
 * BadResponseError is raised when a response from a
 * {@link module:Horizon | Horizon} or {@link module:Federation | Federation}
 * server is invalid in some way. For example, a federation response may exceed
 * the maximum allowed size, or a transaction submission may have failed with
 * Horizon.
 * @augments NetworkError
 * @inheritdoc
 * @category Errors
 *
 * @param {string} message Human-readable error message.
 * @param {any} response Response details, received from the server.
 */
class BadResponseError extends _network.NetworkError {
  constructor(message, response) {
    cov_1oyhtu3z3j().f[0]++;
    const trueProto = (cov_1oyhtu3z3j().s[0]++, new.target.prototype);
    cov_1oyhtu3z3j().s[1]++;
    super(message, response);
    cov_1oyhtu3z3j().s[2]++;
    this.__proto__ = trueProto;
    cov_1oyhtu3z3j().s[3]++;
    this.constructor = BadResponseError;
    cov_1oyhtu3z3j().s[4]++;
    this.name = "BadResponseError";
  }
}
exports.BadResponseError = BadResponseError;