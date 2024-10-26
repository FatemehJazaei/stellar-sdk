"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_oe0ay3dse() {
  var path = "/mnt/g/stellar-sdk/src/horizon/account_call_builder.ts";
  var hash = "16c773043eff34548d129d189e8ed8fbb9d4ba2d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/account_call_builder.ts",
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
          column: 33
        }
      },
      "2": {
        start: {
          line: 34,
          column: 20
        },
        end: {
          line: 34,
          column: 78
        }
      },
      "3": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 30
        }
      },
      "4": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 19
        }
      },
      "5": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 36
        }
      },
      "6": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 16
        }
      },
      "7": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 43
        }
      },
      "8": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 16
        }
      },
      "9": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 37
        }
      },
      "10": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 16
        }
      },
      "11": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 44
        }
      },
      "12": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
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
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        loc: {
          start: {
            line: 33,
            column: 69
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 33
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        loc: {
          start: {
            line: 45,
            column: 37
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 45
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
            column: 38
          },
          end: {
            line: 60,
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
            column: 35
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 68
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 79,
            column: 3
          }
        },
        loc: {
          start: {
            line: 79,
            column: 44
          },
          end: {
            line: 82,
            column: 3
          }
        },
        line: 79
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
      "11": 0,
      "12": 0
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
    hash: "16c773043eff34548d129d189e8ed8fbb9d4ba2d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_oe0ay3dse = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_oe0ay3dse();
/**
 * Creates a new {@link AccountCallBuilder} pointed to server defined by `serverUrl`.
 *
 * Do not create this object directly, use {@link Horizon.Server#accounts}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/list-all-accounts|All Accounts}
 *
 * @augments CallBuilder
 * @private
 * @class
 * @param {string} serverUrl Horizon server URL.
 */
class AccountCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_oe0ay3dse().f[0]++;
    cov_oe0ay3dse().s[0]++;
    super(serverUrl);
    cov_oe0ay3dse().s[1]++;
    this.url.segment("accounts");
  }

  /**
   * Returns information and links relating to a single account.
   * The balances section in the returned JSON will also list all the trust lines this account has set up.
   *
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-an-account|Account Details}
   * @param {string} id For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {CallBuilder} a new CallBuilder instance for the /accounts/:id endpoint
   */
  accountId(id) {
    cov_oe0ay3dse().f[1]++;
    const builder = (cov_oe0ay3dse().s[2]++, new _call_builder.CallBuilder(this.url.clone()));
    cov_oe0ay3dse().s[3]++;
    builder.filter.push([id]);
    cov_oe0ay3dse().s[4]++;
    return builder;
  }

  /**
   * This endpoint filters accounts by signer account.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/list-all-accounts|Accounts}
   * @param {string} id For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {AccountCallBuilder} current AccountCallBuilder instance
   */
  forSigner(id) {
    cov_oe0ay3dse().f[2]++;
    cov_oe0ay3dse().s[5]++;
    this.url.setQuery("signer", id);
    cov_oe0ay3dse().s[6]++;
    return this;
  }

  /**
   * This endpoint filters all accounts who are trustees to an asset.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/list-all-accounts|Accounts}
   * @see Asset
   * @param {Asset} asset For example: `new Asset('USD','GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD')`
   * @returns {AccountCallBuilder} current AccountCallBuilder instance
   */
  forAsset(asset) {
    cov_oe0ay3dse().f[3]++;
    cov_oe0ay3dse().s[7]++;
    this.url.setQuery("asset", `${asset}`);
    cov_oe0ay3dse().s[8]++;
    return this;
  }

  /**
   * This endpoint filters accounts where the given account is sponsoring the account or any of its sub-entries..
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/list-all-accounts|Accounts}
   * @param {string} id For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {AccountCallBuilder} current AccountCallBuilder instance
   */
  sponsor(id) {
    cov_oe0ay3dse().f[4]++;
    cov_oe0ay3dse().s[9]++;
    this.url.setQuery("sponsor", id);
    cov_oe0ay3dse().s[10]++;
    return this;
  }

  /**
   * This endpoint filters accounts holding a trustline to the given liquidity pool.
   *
   * @param {string} id The ID of the liquidity pool. For example: `dd7b1ab831c273310ddbec6f97870aa83c2fbd78ce22aded37ecbf4f3380fac7`.
   * @returns {AccountCallBuilder} current AccountCallBuilder instance
   */
  forLiquidityPool(id) {
    cov_oe0ay3dse().f[5]++;
    cov_oe0ay3dse().s[11]++;
    this.url.setQuery("liquidity_pool", id);
    cov_oe0ay3dse().s[12]++;
    return this;
  }
}
exports.AccountCallBuilder = AccountCallBuilder;