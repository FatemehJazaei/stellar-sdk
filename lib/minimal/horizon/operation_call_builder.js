"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_1pyudbpu3l() {
  var path = "/mnt/g/stellar-sdk/src/horizon/operation_call_builder.ts";
  var hash = "9fa28aa9b8a5746cf633e6c1b74ab4bfc0879a91";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/operation_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 35
        }
      },
      "1": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 35
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
          column: 39
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
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 60
        }
      },
      "8": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 79,
          column: 59
        }
      },
      "9": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 89,
          column: 55
        }
      },
      "10": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 58
        }
      },
      "11": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 19
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
            column: 44
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
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 52
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 68
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        loc: {
          start: {
            line: 78,
            column: 53
          },
          end: {
            line: 80,
            column: 3
          }
        },
        line: 78
      },
      "6": {
        name: "(anonymous_6)",
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
            column: 48
          },
          end: {
            line: 90,
            column: 3
          }
        },
        line: 88
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 99,
            column: 2
          },
          end: {
            line: 99,
            column: 3
          }
        },
        loc: {
          start: {
            line: 99,
            column: 45
          },
          end: {
            line: 102,
            column: 3
          }
        },
        line: 99
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
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9fa28aa9b8a5746cf633e6c1b74ab4bfc0879a91"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1pyudbpu3l = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1pyudbpu3l();
/**
 * Creates a new {@link OperationCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#operations}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/operations|All Operations}
 *
 * @augments CallBuilder
 * @private
 * @class
 * @param {string} serverUrl Horizon server URL.
 */
class OperationCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_1pyudbpu3l().f[0]++;
    cov_1pyudbpu3l().s[0]++;
    super(serverUrl, "operations");
    cov_1pyudbpu3l().s[1]++;
    this.url.segment("operations");
  }

  /**
   * The operation details endpoint provides information on a single operation. The operation ID provided in the id
   * argument specifies which operation to load.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-an-operation|Operation Details}
   * @param {number} operationId Operation ID
   * @returns {CallBuilder} this OperationCallBuilder instance
   */
  operation(operationId) {
    cov_1pyudbpu3l().f[1]++;
    const builder = (cov_1pyudbpu3l().s[2]++, new _call_builder.CallBuilder(this.url.clone()));
    cov_1pyudbpu3l().s[3]++;
    builder.filter.push([operationId]);
    cov_1pyudbpu3l().s[4]++;
    return builder;
  }

  /**
   * This endpoint represents all operations that were included in valid transactions that affected a particular account.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/get-operations-by-account-id|Operations for Account}
   * @param {string} accountId For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {OperationCallBuilder} this OperationCallBuilder instance
   */
  forAccount(accountId) {
    cov_1pyudbpu3l().f[2]++;
    cov_1pyudbpu3l().s[5]++;
    return this.forEndpoint("accounts", accountId);
  }

  /**
   * This endpoint represents all operations that reference a given claimable_balance.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/cb-retrieve-related-operations|Operations for Claimable Balance}
   * @param {string} claimableBalanceId Claimable Balance ID
   * @returns {OperationCallBuilder} this OperationCallBuilder instance
   */
  forClaimableBalance(claimableBalanceId) {
    cov_1pyudbpu3l().f[3]++;
    cov_1pyudbpu3l().s[6]++;
    return this.forEndpoint("claimable_balances", claimableBalanceId);
  }

  /**
   * This endpoint returns all operations that occurred in a given ledger.
   *
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-a-ledgers-operations|Operations for Ledger}
   * @param {number|string} sequence Ledger sequence
   * @returns {OperationCallBuilder} this OperationCallBuilder instance
   */
  forLedger(sequence) {
    cov_1pyudbpu3l().f[4]++;
    cov_1pyudbpu3l().s[7]++;
    return this.forEndpoint("ledgers", sequence.toString());
  }

  /**
   * This endpoint represents all operations that are part of a given transaction.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-a-transactions-operations|Operations for Transaction}
   * @param {string} transactionId Transaction ID
   * @returns {OperationCallBuilder} this OperationCallBuilder instance
   */
  forTransaction(transactionId) {
    cov_1pyudbpu3l().f[5]++;
    cov_1pyudbpu3l().s[8]++;
    return this.forEndpoint("transactions", transactionId);
  }

  /**
   * This endpoint represents all operations involving a particular liquidity pool.
   *
   * @param {string} poolId   liquidity pool ID
   * @returns {OperationCallBuilder} this OperationCallBuilder instance
   */
  forLiquidityPool(poolId) {
    cov_1pyudbpu3l().f[6]++;
    cov_1pyudbpu3l().s[9]++;
    return this.forEndpoint("liquidity_pools", poolId);
  }

  /**
   * Adds a parameter defining whether to include failed transactions.
   *   By default, only operations of successful transactions are returned.
   *
   * @param {boolean} value Set to `true` to include operations of failed transactions.
   * @returns {OperationCallBuilder} this OperationCallBuilder instance
   */
  includeFailed(value) {
    cov_1pyudbpu3l().f[7]++;
    cov_1pyudbpu3l().s[10]++;
    this.url.setQuery("include_failed", value.toString());
    cov_1pyudbpu3l().s[11]++;
    return this;
  }
}
exports.OperationCallBuilder = OperationCallBuilder;