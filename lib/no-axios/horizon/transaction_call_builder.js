"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_11f6y5sjn2() {
  var path = "/mnt/g/stellar-sdk/src/horizon/transaction_call_builder.ts";
  var hash = "bb3916df875064994dcf87dc7a40050308910ad8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/transaction_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 37
        }
      },
      "1": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 37
        }
      },
      "2": {
        start: {
          line: 34,
          column: 20
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "3": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 41
        }
      },
      "4": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 19
        }
      },
      "5": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 51
        }
      },
      "6": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 70
        }
      },
      "7": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 60
        }
      },
      "8": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 55
        }
      },
      "9": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 58
        }
      },
      "10": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 89,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 30
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 33,
            column: 46
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 33
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        loc: {
          start: {
            line: 47,
            column: 45
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 47
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        loc: {
          start: {
            line: 57,
            column: 63
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 57
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        loc: {
          start: {
            line: 67,
            column: 52
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 67
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 48
          },
          end: {
            line: 79,
            column: 3
          }
        },
        line: 77
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 87,
            column: 2
          },
          end: {
            line: 87,
            column: 3
          }
        },
        loc: {
          start: {
            line: 87,
            column: 45
          },
          end: {
            line: 90,
            column: 3
          }
        },
        line: 87
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
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bb3916df875064994dcf87dc7a40050308910ad8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_11f6y5sjn2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_11f6y5sjn2();
/**
 * Creates a new {@link TransactionCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#transactions}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/list-all-transactions|All Transactions}
 *
 * @augments CallBuilder
 * @private
 * @class
 *
 * @param {string} serverUrl Horizon server URL.
 */
class TransactionCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_11f6y5sjn2().f[0]++;
    cov_11f6y5sjn2().s[0]++;
    super(serverUrl, "transactions");
    cov_11f6y5sjn2().s[1]++;
    this.url.segment("transactions");
  }

  /**
   * The transaction details endpoint provides information on a single transaction. The transaction hash provided in the hash argument specifies which transaction to load.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-a-transaction|Transaction Details}
   * @param {string} transactionId Transaction ID
   * @returns {CallBuilder} a CallBuilder instance
   */
  transaction(transactionId) {
    cov_11f6y5sjn2().f[1]++;
    const builder = (cov_11f6y5sjn2().s[2]++, new _call_builder.CallBuilder(this.url.clone()));
    cov_11f6y5sjn2().s[3]++;
    builder.filter.push([transactionId]);
    cov_11f6y5sjn2().s[4]++;
    return builder;
  }

  /**
   * This endpoint represents all transactions that affected a given account.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/get-transactions-by-account-id|Transactions for Account}
   * @param {string} accountId For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {TransactionCallBuilder} current TransactionCallBuilder instance
   */
  forAccount(accountId) {
    cov_11f6y5sjn2().f[2]++;
    cov_11f6y5sjn2().s[5]++;
    return this.forEndpoint("accounts", accountId);
  }

  /**
   * This endpoint represents all transactions that reference a given claimable_balance.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/cb-retrieve-related-transactions|Transactions for Claimable Balance}
   * @param {string} claimableBalanceId Claimable Balance ID
   * @returns {TransactionCallBuilder} this TransactionCallBuilder instance
   */
  forClaimableBalance(claimableBalanceId) {
    cov_11f6y5sjn2().f[3]++;
    cov_11f6y5sjn2().s[6]++;
    return this.forEndpoint("claimable_balances", claimableBalanceId);
  }

  /**
   * This endpoint represents all transactions in a given ledger.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-a-ledgers-transactions|Transactions for Ledger}
   * @param {number|string} sequence Ledger sequence
   * @returns {TransactionCallBuilder} current TransactionCallBuilder instance
   */
  forLedger(sequence) {
    cov_11f6y5sjn2().f[4]++;
    cov_11f6y5sjn2().s[7]++;
    return this.forEndpoint("ledgers", sequence.toString());
  }

  /**
   * This endpoint represents all transactions involving a particular liquidity pool.
   *
   * @param {string} poolId   liquidity pool ID
   * @returns {TransactionCallBuilder} this TransactionCallBuilder instance
   */
  forLiquidityPool(poolId) {
    cov_11f6y5sjn2().f[5]++;
    cov_11f6y5sjn2().s[8]++;
    return this.forEndpoint("liquidity_pools", poolId);
  }

  /**
   * Adds a parameter defining whether to include failed transactions. By default only successful transactions are
   * returned.
   * @param {boolean} value Set to `true` to include failed transactions.
   * @returns {TransactionCallBuilder} current TransactionCallBuilder instance
   */
  includeFailed(value) {
    cov_11f6y5sjn2().f[6]++;
    cov_11f6y5sjn2().s[9]++;
    this.url.setQuery("include_failed", value.toString());
    cov_11f6y5sjn2().s[10]++;
    return this;
  }
}
exports.TransactionCallBuilder = TransactionCallBuilder;