"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClaimableBalanceCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_1d4qmxvglg() {
  var path = "/mnt/g/stellar-sdk/src/horizon/claimable_balances_call_builder.ts";
  var hash = "2a4c64b6874507d6c5537d936799e77757f58b32";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/claimable_balances_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 21
        }
      },
      "1": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 43
        }
      },
      "2": {
        start: {
          line: 35,
          column: 20
        },
        end: {
          line: 37,
          column: 5
        }
      },
      "3": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 46
        }
      },
      "4": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 19
        }
      },
      "5": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 42
        }
      },
      "6": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 16
        }
      },
      "7": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 44
        }
      },
      "8": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 16
        }
      },
      "9": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 49
        }
      },
      "10": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
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
            line: 32,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 51
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 34
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 40
          },
          end: {
            line: 52,
            column: 3
          }
        },
        line: 49
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 42
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 61
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 73,
            column: 3
          }
        },
        loc: {
          start: {
            line: 73,
            column: 35
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 73
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
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2a4c64b6874507d6c5537d936799e77757f58b32"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1d4qmxvglg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1d4qmxvglg();
/**
 * Creates a new {@link ClaimableBalanceCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#claimableBalances}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/claimablebalances|Claimable Balances}
 *
 * @augments CallBuilder
 * @private
 * @class
 * @param {string} serverUrl Horizon server URL.
 */
class ClaimableBalanceCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_1d4qmxvglg().f[0]++;
    cov_1d4qmxvglg().s[0]++;
    super(serverUrl);
    cov_1d4qmxvglg().s[1]++;
    this.url.segment("claimable_balances");
  }

  /**
   * The claimable balance details endpoint provides information on a single claimable balance.
   *
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-a-claimable-balance|Claimable Balance Details}
   * @param {string} claimableBalanceId Claimable balance ID
   * @returns {CallBuilder<ServerApi.ClaimableBalanceRecord>} CallBuilder<ServerApi.ClaimableBalanceRecord> OperationCallBuilder instance
   */
  claimableBalance(claimableBalanceId) {
    cov_1d4qmxvglg().f[1]++;
    const builder = (cov_1d4qmxvglg().s[2]++, new _call_builder.CallBuilder(this.url.clone()));
    cov_1d4qmxvglg().s[3]++;
    builder.filter.push([claimableBalanceId]);
    cov_1d4qmxvglg().s[4]++;
    return builder;
  }

  /**
   * Returns all claimable balances which are sponsored by the given account ID.
   *
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/list-all-claimable-balances|Claimable Balances}
   * @param {string} sponsor For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {ClaimableBalanceCallBuilder} current ClaimableBalanceCallBuilder instance
   */
  sponsor(sponsor) {
    cov_1d4qmxvglg().f[2]++;
    cov_1d4qmxvglg().s[5]++;
    this.url.setQuery("sponsor", sponsor);
    cov_1d4qmxvglg().s[6]++;
    return this;
  }

  /**
   * Returns all claimable balances which can be claimed by the given account ID.
   *
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/list-all-claimable-balances|Claimable Balances}
   * @param {string} claimant For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {ClaimableBalanceCallBuilder} current ClaimableBalanceCallBuilder instance
   */
  claimant(claimant) {
    cov_1d4qmxvglg().f[3]++;
    cov_1d4qmxvglg().s[7]++;
    this.url.setQuery("claimant", claimant);
    cov_1d4qmxvglg().s[8]++;
    return this;
  }

  /**
   * Returns all claimable balances which provide a balance for the given asset.
   *
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/list-all-claimable-balances|Claimable Balances}
   * @param {Asset} asset The Asset held by the claimable balance
   * @returns {ClaimableBalanceCallBuilder} current ClaimableBalanceCallBuilder instance
   */
  asset(asset) {
    cov_1d4qmxvglg().f[4]++;
    cov_1d4qmxvglg().s[9]++;
    this.url.setQuery("asset", asset.toString());
    cov_1d4qmxvglg().s[10]++;
    return this;
  }
}
exports.ClaimableBalanceCallBuilder = ClaimableBalanceCallBuilder;