"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TradesCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_x1pujzwgt() {
  var path = "/mnt/g/stellar-sdk/src/horizon/trades_call_builder.ts";
  var hash = "2565990d8c61fbbf6754a7d0b5853b626e4185ff";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/trades_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 31
        }
      },
      "1": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 31
        }
      },
      "2": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "3": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 64
        }
      },
      "4": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 59
        }
      },
      "5": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 63
        }
      },
      "6": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 53
        }
      },
      "7": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 46,
          column: 5
        }
      },
      "8": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 41,
          column: 70
        }
      },
      "9": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 65
        }
      },
      "10": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 69
        }
      },
      "11": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 56
        }
      },
      "12": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 16
        }
      },
      "13": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 43
        }
      },
      "14": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 16
        }
      },
      "15": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 47
        }
      },
      "16": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 67,
          column: 16
        }
      },
      "17": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 51
        }
      },
      "18": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 87,
          column: 64
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 21
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
            line: 32,
            column: 57
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 41
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 55
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        loc: {
          start: {
            line: 65,
            column: 55
          },
          end: {
            line: 68,
            column: 3
          }
        },
        line: 65
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 76,
            column: 45
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 76
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 86,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        },
        loc: {
          start: {
            line: 86,
            column: 57
          },
          end: {
            line: 88,
            column: 3
          }
        },
        line: 86
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 39,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 39,
            column: 5
          }
        }, {
          start: {
            line: 37,
            column: 11
          },
          end: {
            line: 39,
            column: 5
          }
        }],
        line: 33
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        }, {
          start: {
            line: 44,
            column: 11
          },
          end: {
            line: 46,
            column: 5
          }
        }],
        line: 40
      }
    },
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
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2565990d8c61fbbf6754a7d0b5853b626e4185ff"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_x1pujzwgt = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_x1pujzwgt();
/**
 * Creates a new {@link TradesCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#trades}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/trades|Trades}
 *
 * @augments CallBuilder
 * @private
 * @class
 *
 * @param {string} serverUrl serverUrl Horizon server URL.
 */
class TradesCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_x1pujzwgt().f[0]++;
    cov_x1pujzwgt().s[0]++;
    super(serverUrl, "trades");
    cov_x1pujzwgt().s[1]++;
    this.url.segment("trades");
  }

  /**
   * Filter trades for a specific asset pair (orderbook)
   * @param {Asset} base asset
   * @param {Asset} counter asset
   * @returns {TradesCallBuilder} current TradesCallBuilder instance
   */
  forAssetPair(base, counter) {
    cov_x1pujzwgt().f[1]++;
    cov_x1pujzwgt().s[2]++;
    if (!base.isNative()) {
      cov_x1pujzwgt().b[0][0]++;
      cov_x1pujzwgt().s[3]++;
      this.url.setQuery("base_asset_type", base.getAssetType());
      cov_x1pujzwgt().s[4]++;
      this.url.setQuery("base_asset_code", base.getCode());
      cov_x1pujzwgt().s[5]++;
      this.url.setQuery("base_asset_issuer", base.getIssuer());
    } else {
      cov_x1pujzwgt().b[0][1]++;
      cov_x1pujzwgt().s[6]++;
      this.url.setQuery("base_asset_type", "native");
    }
    cov_x1pujzwgt().s[7]++;
    if (!counter.isNative()) {
      cov_x1pujzwgt().b[1][0]++;
      cov_x1pujzwgt().s[8]++;
      this.url.setQuery("counter_asset_type", counter.getAssetType());
      cov_x1pujzwgt().s[9]++;
      this.url.setQuery("counter_asset_code", counter.getCode());
      cov_x1pujzwgt().s[10]++;
      this.url.setQuery("counter_asset_issuer", counter.getIssuer());
    } else {
      cov_x1pujzwgt().b[1][1]++;
      cov_x1pujzwgt().s[11]++;
      this.url.setQuery("counter_asset_type", "native");
    }
    cov_x1pujzwgt().s[12]++;
    return this;
  }

  /**
   * Filter trades for a specific offer
   * @param {string} offerId ID of the offer
   * @returns {TradesCallBuilder} current TradesCallBuilder instance
   */
  forOffer(offerId) {
    cov_x1pujzwgt().f[2]++;
    cov_x1pujzwgt().s[13]++;
    this.url.setQuery("offer_id", offerId);
    cov_x1pujzwgt().s[14]++;
    return this;
  }

  /**
   * Filter trades by a specific type.
   * @param {ServerApi.TradeType} tradeType the trade type to filter by.
   * @returns {TradesCallBuilder} current TradesCallBuilder instance.
   */
  forType(tradeType) {
    cov_x1pujzwgt().f[3]++;
    cov_x1pujzwgt().s[15]++;
    this.url.setQuery("trade_type", tradeType);
    cov_x1pujzwgt().s[16]++;
    return this;
  }

  /**
   * Filter trades for a specific account
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/get-trades-by-account-id|Trades for Account}
   * @param {string} accountId For example: `GBYTR4MC5JAX4ALGUBJD7EIKZVM7CUGWKXIUJMRSMK573XH2O7VAK3SR`
   * @returns {TradesCallBuilder} current TradesCallBuilder instance
   */
  forAccount(accountId) {
    cov_x1pujzwgt().f[4]++;
    cov_x1pujzwgt().s[17]++;
    return this.forEndpoint("accounts", accountId);
  }

  /**
   * Filter trades for a specific liquidity pool
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/retrieve-related-trades|Trades for Liquidity Pool}
   * @param {string} liquidityPoolId For example: `3b476aff8a406a6ec3b61d5c038009cef85f2ddfaf616822dc4fec92845149b4`
   * @returns {TradesCallBuilder} current TradesCallBuilder instance
   */
  forLiquidityPool(liquidityPoolId) {
    cov_x1pujzwgt().f[5]++;
    cov_x1pujzwgt().s[18]++;
    return this.forEndpoint("liquidity_pools", liquidityPoolId);
  }
}
exports.TradesCallBuilder = TradesCallBuilder;