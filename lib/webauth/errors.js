"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidChallengeError = void 0;
function cov_226raiew3f() {
  var path = "/mnt/g/stellar-sdk/src/webauth/errors.ts";
  var hash = "1aebe73e8aa1081f0491687c0004de0ce0a76e03";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/webauth/errors.ts",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 22
        },
        end: {
          line: 14,
          column: 42
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 19
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 31
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 45
        }
      },
      "4": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        loc: {
          start: {
            line: 13,
            column: 31
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 13
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
    hash: "1aebe73e8aa1081f0491687c0004de0ce0a76e03"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_226raiew3f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_226raiew3f();
/* eslint-disable no-proto */
/**
 * InvalidChallengeError is raised when a challenge transaction does not meet
 * the requirements for a SEP-10 challenge transaction (for example, a non-zero
 * sequence number).
 * @memberof module:WebAuth
 * @category Errors
 *
 * @param {string} message Human-readable error message.
 */
class InvalidChallengeError extends Error {
  constructor(message) {
    cov_226raiew3f().f[0]++;
    const trueProto = (cov_226raiew3f().s[0]++, new.target.prototype);
    cov_226raiew3f().s[1]++;
    super(message);
    cov_226raiew3f().s[2]++;
    this.__proto__ = trueProto;
    cov_226raiew3f().s[3]++;
    this.constructor = InvalidChallengeError;
    cov_226raiew3f().s[4]++;
    this.name = "InvalidChallengeError";
  }
}
exports.InvalidChallengeError = InvalidChallengeError;