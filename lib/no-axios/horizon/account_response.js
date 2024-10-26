"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountResponse = void 0;
var _stellarBase = require("@stellar/stellar-base");
function cov_1dfwr0okp4() {
  var path = "/mnt/g/stellar-sdk/src/horizon/account_response.ts";
  var hash = "9a41a79ecf5ecdc1f30351a41256d38dd399c2cd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/account_response.ts",
    statementMap: {
      "0": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 80
        }
      },
      "1": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 65,
          column: 7
        }
      },
      "2": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 33
        }
      },
      "3": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 41
        }
      },
      "4": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 46
        }
      },
      "5": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 89,
          column: 48
        }
      },
      "6": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 59,
            column: 49
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 59
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 63,
            column: 37
          },
          end: {
            line: 63,
            column: 38
          }
        },
        loc: {
          start: {
            line: 63,
            column: 55
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 63
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        },
        loc: {
          start: {
            line: 72,
            column: 29
          },
          end: {
            line: 74,
            column: 3
          }
        },
        line: 72
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 80,
            column: 3
          }
        },
        loc: {
          start: {
            line: 80,
            column: 34
          },
          end: {
            line: 82,
            column: 3
          }
        },
        line: 80
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 88,
            column: 2
          },
          end: {
            line: 88,
            column: 3
          }
        },
        loc: {
          start: {
            line: 88,
            column: 41
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 88
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
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9a41a79ecf5ecdc1f30351a41256d38dd399c2cd"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1dfwr0okp4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1dfwr0okp4();
/* tslint:disable:variable-name */
/**
 * Do not create this object directly, use {@link module:Horizon.Server#loadAccount | Horizon.Server#loadAccount}.
 *
 * Returns information and links relating to a single account.
 * The balances section in the returned JSON will also list all the trust lines this account has set up.
 * It also contains {@link BaseAccount} object and exposes it's methods so can be used in {@link TransactionBuilder}.
 *
 * @memberof module:Horizon
 * @private
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/accounts/object|Account Details}
 * @param {string} response Response from horizon account endpoint.
 * @returns {AccountResponse} AccountResponse instance
 */
class AccountResponse {
  constructor(response) {
    cov_1dfwr0okp4().f[0]++;
    cov_1dfwr0okp4().s[0]++;
    this._baseAccount = new _stellarBase.Account(response.account_id, response.sequence);
    // Extract response fields
    // TODO: do it in type-safe manner.
    cov_1dfwr0okp4().s[1]++;
    Object.entries(response).forEach(([key, value]) => {
      cov_1dfwr0okp4().f[1]++;
      cov_1dfwr0okp4().s[2]++;
      this[key] = value;
    });
  }

  /**
   * Get Stellar account public key ex. `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`
   * @returns {string} accountId
   */
  accountId() {
    cov_1dfwr0okp4().f[2]++;
    cov_1dfwr0okp4().s[3]++;
    return this._baseAccount.accountId();
  }

  /**
   * Get the current sequence number
   * @returns {string} sequenceNumber
   */
  sequenceNumber() {
    cov_1dfwr0okp4().f[3]++;
    cov_1dfwr0okp4().s[4]++;
    return this._baseAccount.sequenceNumber();
  }

  /**
   * Increments sequence number in this object by one.
   * @returns {void}
   */
  incrementSequenceNumber() {
    cov_1dfwr0okp4().f[4]++;
    cov_1dfwr0okp4().s[5]++;
    this._baseAccount.incrementSequenceNumber();
    cov_1dfwr0okp4().s[6]++;
    this.sequence = this._baseAccount.sequenceNumber();
  }
}
exports.AccountResponse = AccountResponse;