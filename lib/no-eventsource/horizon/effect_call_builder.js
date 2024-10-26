"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EffectCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_kfvqf9yo1() {
  var path = "/mnt/g/stellar-sdk/src/horizon/effect_call_builder.ts";
  var hash = "619a495ccb8ef0319da8beac1c37c79f7d67d7ae";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/effect_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 32
        }
      },
      "1": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 32
        }
      },
      "2": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 51
        }
      },
      "3": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 60
        }
      },
      "4": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 59
        }
      },
      "5": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 55
        }
      },
      "6": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 30
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 45
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 29
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 52
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 41
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        loc: {
          start: {
            line: 51,
            column: 53
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 51
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 61,
            column: 3
          }
        },
        loc: {
          start: {
            line: 61,
            column: 49
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 61
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        loc: {
          start: {
            line: 71,
            column: 48
          },
          end: {
            line: 73,
            column: 3
          }
        },
        line: 71
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
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "619a495ccb8ef0319da8beac1c37c79f7d67d7ae"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kfvqf9yo1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_kfvqf9yo1();
/**
 * Creates a new {@link EffectCallBuilder} pointed to server defined by serverUrl.
 * Do not create this object directly, use {@link Horizon.Server#effects}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/effects|All Effects}
 *
 * @augments CallBuilder
 * @private
 * @class
 * @param {string} serverUrl Horizon server URL.
 */
class EffectCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_kfvqf9yo1().f[0]++;
    cov_kfvqf9yo1().s[0]++;
    super(serverUrl, "effects");
    cov_kfvqf9yo1().s[1]++;
    this.url.segment("effects");
  }

  /**
   * This endpoint represents all effects that changed a given account. It will return relevant effects from the creation of the account to the current ledger.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/get-effects-by-account-id|Effects for Account}
   * @param {string} accountId For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {EffectCallBuilder} this EffectCallBuilder instance
   */
  forAccount(accountId) {
    cov_kfvqf9yo1().f[1]++;
    cov_kfvqf9yo1().s[2]++;
    return this.forEndpoint("accounts", accountId);
  }

  /**
   * Effects are the specific ways that the ledger was changed by any operation.
   *
   * This endpoint represents all effects that occurred in the given ledger.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-a-ledgers-effects|Effects for Ledger}
   * @param {number|string} sequence Ledger sequence
   * @returns {EffectCallBuilder} this EffectCallBuilder instance
   */
  forLedger(sequence) {
    cov_kfvqf9yo1().f[2]++;
    cov_kfvqf9yo1().s[3]++;
    return this.forEndpoint("ledgers", sequence.toString());
  }

  /**
   * This endpoint represents all effects that occurred as a result of a given transaction.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-a-transactions-effects|Effects for Transaction}
   * @param {string} transactionId Transaction ID
   * @returns {EffectCallBuilder} this EffectCallBuilder instance
   */
  forTransaction(transactionId) {
    cov_kfvqf9yo1().f[3]++;
    cov_kfvqf9yo1().s[4]++;
    return this.forEndpoint("transactions", transactionId);
  }

  /**
   * This endpoint represents all effects that occurred as a result of a given operation.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-an-operations-effects|Effects for Operation}
   * @param {number} operationId Operation ID
   * @returns {EffectCallBuilder} this EffectCallBuilder instance
   */
  forOperation(operationId) {
    cov_kfvqf9yo1().f[4]++;
    cov_kfvqf9yo1().s[5]++;
    return this.forEndpoint("operations", operationId);
  }

  /**
   * This endpoint represents all effects involving a particular liquidity pool.
   *
   * @param {string} poolId   liquidity pool ID
   * @returns {EffectCallBuilder} this EffectCallBuilder instance
   */
  forLiquidityPool(poolId) {
    cov_kfvqf9yo1().f[5]++;
    cov_kfvqf9yo1().s[6]++;
    return this.forEndpoint("liquidity_pools", poolId);
  }
}
exports.EffectCallBuilder = EffectCallBuilder;