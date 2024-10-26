"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadRequestError = void 0;
var _network = require("./network");
function cov_18658dsvlf() {
  var path = "/mnt/g/stellar-sdk/src/errors/bad_request.ts";
  var hash = "641d94e3689d0499dd7c6e1c4c0f22c14c1d21de";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/errors/bad_request.ts",
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
          column: 39
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 34
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
    hash: "641d94e3689d0499dd7c6e1c4c0f22c14c1d21de"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_18658dsvlf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_18658dsvlf();
/**
 * BadRequestError is raised when a request made to Horizon is invalid in some
 * way (incorrect timebounds for trade call builders, for example.)
 * @augments NetworkError
 * @inheritdoc
 * @category Errors
 *
 * @param {string} message Human-readable error message
 * @param {any} response Response details, received from the Horizon server
 */
class BadRequestError extends _network.NetworkError {
  constructor(message, response) {
    cov_18658dsvlf().f[0]++;
    const trueProto = (cov_18658dsvlf().s[0]++, new.target.prototype);
    cov_18658dsvlf().s[1]++;
    super(message, response);
    cov_18658dsvlf().s[2]++;
    this.__proto__ = trueProto;
    cov_18658dsvlf().s[3]++;
    this.constructor = BadRequestError;
    cov_18658dsvlf().s[4]++;
    this.name = "BadRequestError";
  }
}
exports.BadRequestError = BadRequestError;