"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountRequiresMemoError = void 0;
function cov_869j1sjg5() {
  var path = "/mnt/g/stellar-sdk/src/errors/account_requires_memo.ts";
  var hash = "373255273cd41a104afaf1a35b7a97cade117f8e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/errors/account_requires_memo.ts",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 22
        },
        end: {
          line: 25,
          column: 42
        }
      },
      "1": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 19
        }
      },
      "2": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 31
        }
      },
      "3": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 48
        }
      },
      "4": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 43
        }
      },
      "5": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 31
        }
      },
      "6": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        loc: {
          start: {
            line: 24,
            column: 74
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 24
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "373255273cd41a104afaf1a35b7a97cade117f8e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_869j1sjg5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_869j1sjg5();
/**
 * AccountRequiresMemoError is raised when a transaction is trying to submit an
 * operation to an account which requires a memo. See
 * [SEP0029](https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0029.md)
 * for more information.
 *
 * This error contains two attributes to help you identify the account requiring
 * the memo and the operation where the account is the destination
 * @category Errors
 *
 * @param {string} message Human-readable error message
 * @param {string} accountId The account which requires a memo
 * @param {number} operationIndex The index of the operation where `accountId` is the destination
 *
 * @example
 * console.log('The following account requires a memo ', err.accountId)
 * console.log('The account is used in operation: ', err.operationIndex)
 */
class AccountRequiresMemoError extends Error {
  constructor(message, accountId, operationIndex) {
    cov_869j1sjg5().f[0]++;
    const trueProto = (cov_869j1sjg5().s[0]++, new.target.prototype);
    cov_869j1sjg5().s[1]++;
    super(message);
    cov_869j1sjg5().s[2]++;
    this.__proto__ = trueProto;
    cov_869j1sjg5().s[3]++;
    this.constructor = AccountRequiresMemoError;
    cov_869j1sjg5().s[4]++;
    this.name = "AccountRequiresMemoError";

    /**
     * The account which requires a memo.
     * @type {string}
     */
    cov_869j1sjg5().s[5]++;
    this.accountId = accountId;
    /**
     * Operation where accountId is the destination.
     * @type {number}
     */
    cov_869j1sjg5().s[6]++;
    this.operationIndex = operationIndex;
  }
}
exports.AccountRequiresMemoError = AccountRequiresMemoError;