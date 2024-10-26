"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_2eyys2b1hy() {
  var path = "/mnt/g/stellar-sdk/src/horizon/payment_call_builder.ts";
  var hash = "7fdae947ed0a737e4de8d56041bb2f0d5c7068e1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/payment_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 33
        }
      },
      "1": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 33
        }
      },
      "2": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 51
        }
      },
      "3": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 60
        }
      },
      "4": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        loc: {
          start: {
            line: 27,
            column: 30
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 27
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        loc: {
          start: {
            line: 38,
            column: 45
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 38
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        loc: {
          start: {
            line: 48,
            column: 52
          },
          end: {
            line: 50,
            column: 3
          }
        },
        line: 48
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 53
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 58
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
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7fdae947ed0a737e4de8d56041bb2f0d5c7068e1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2eyys2b1hy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2eyys2b1hy();
/**
 * Creates a new {@link PaymentCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#payments}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/horizon/resources/list-all-payments/|All Payments}
 *
 * @augments CallBuilder
 * @private
 * @class
 *
 * @param {string} serverUrl Horizon server URL.
 */
class PaymentCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_2eyys2b1hy().f[0]++;
    cov_2eyys2b1hy().s[0]++;
    super(serverUrl, "payments");
    cov_2eyys2b1hy().s[1]++;
    this.url.segment("payments");
  }

  /**
   * This endpoint responds with a collection of Payment operations where the given account was either the sender or receiver.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/horizon/resources/get-payments-by-account-id|Payments for Account}
   * @param {string} accountId For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {PaymentCallBuilder} this PaymentCallBuilder instance
   */
  forAccount(accountId) {
    cov_2eyys2b1hy().f[1]++;
    cov_2eyys2b1hy().s[2]++;
    return this.forEndpoint("accounts", accountId);
  }

  /**
   * This endpoint represents all payment operations that are part of a valid transactions in a given ledger.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/horizon/resources/retrieve-a-ledgers-payments|Payments for Ledger}
   * @param {number|string} sequence Ledger sequence
   * @returns {PaymentCallBuilder} this PaymentCallBuilder instance
   */
  forLedger(sequence) {
    cov_2eyys2b1hy().f[2]++;
    cov_2eyys2b1hy().s[3]++;
    return this.forEndpoint("ledgers", sequence.toString());
  }

  /**
   * This endpoint represents all payment operations that are part of a given transaction.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/transactions/payments/|Payments for Transaction}
   * @param {string} transactionId Transaction ID
   * @returns {PaymentCallBuilder} this PaymentCallBuilder instance
   */
  forTransaction(transactionId) {
    cov_2eyys2b1hy().f[3]++;
    cov_2eyys2b1hy().s[4]++;
    return this.forEndpoint("transactions", transactionId);
  }
}
exports.PaymentCallBuilder = PaymentCallBuilder;