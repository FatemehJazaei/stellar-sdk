"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiquidityPoolCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_1d2941bos4() {
  var path = "/mnt/g/stellar-sdk/src/horizon/liquidity_pool_call_builder.ts";
  var hash = "49f56ffc0b8c9dc7872c915c965b55edc824db7d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/liquidity_pool_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 21
        }
      },
      "1": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 40
        }
      },
      "2": {
        start: {
          line: 31,
          column: 30
        },
        end: {
          line: 33,
          column: 16
        }
      },
      "3": {
        start: {
          line: 32,
          column: 29
        },
        end: {
          line: 32,
          column: 45
        }
      },
      "4": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 45
        }
      },
      "5": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 16
        }
      },
      "6": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 37
        }
      },
      "7": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 16
        }
      },
      "8": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 60,
          column: 5
        }
      },
      "9": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 74
        }
      },
      "10": {
        start: {
          line: 62,
          column: 20
        },
        end: {
          line: 64,
          column: 5
        }
      },
      "11": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 44
        }
      },
      "12": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 19
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
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        loc: {
          start: {
            line: 30,
            column: 45
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 30
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 32,
            column: 12
          }
        },
        loc: {
          start: {
            line: 32,
            column: 29
          },
          end: {
            line: 32,
            column: 45
          }
        },
        line: 32
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 44,
            column: 2
          },
          end: {
            line: 44,
            column: 3
          }
        },
        loc: {
          start: {
            line: 44,
            column: 38
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 44
      },
      "4": {
        name: "(anonymous_4)",
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
            line: 57,
            column: 48
          },
          end: {
            line: 67,
            column: 3
          }
        },
        line: 57
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 58
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
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "49f56ffc0b8c9dc7872c915c965b55edc824db7d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1d2941bos4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1d2941bos4();
/**
 * Creates a new {@link LiquidityPoolCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#liquidityPools}.
 *
 * @augments CallBuilder
 * @private
 * @class
 * @param {string} serverUrl Horizon server URL.
 */
class LiquidityPoolCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_1d2941bos4().f[0]++;
    cov_1d2941bos4().s[0]++;
    super(serverUrl);
    cov_1d2941bos4().s[1]++;
    this.url.segment("liquidity_pools");
  }

  /**
   * Filters out pools whose reserves don't exactly match these assets.
   *
   * @see Asset
   * @returns {LiquidityPoolCallBuilder} current LiquidityPoolCallBuilder instance
   */
  forAssets(...assets) {
    cov_1d2941bos4().f[1]++;
    const assetList = (cov_1d2941bos4().s[2]++, assets.map(asset => {
      cov_1d2941bos4().f[2]++;
      cov_1d2941bos4().s[3]++;
      return asset.toString();
    }).join(","));
    cov_1d2941bos4().s[4]++;
    this.url.setQuery("reserves", assetList);
    cov_1d2941bos4().s[5]++;
    return this;
  }

  /**
   * Retrieves all pools an account is participating in.
   *
   * @param {string} id   the participant account to filter by
   * @returns {LiquidityPoolCallBuilder} current LiquidityPoolCallBuilder instance
   */
  forAccount(id) {
    cov_1d2941bos4().f[3]++;
    cov_1d2941bos4().s[6]++;
    this.url.setQuery("account", id);
    cov_1d2941bos4().s[7]++;
    return this;
  }

  /**
   * Retrieves a specific liquidity pool by ID.
   *
   * @param {string} id   the hash/ID of the liquidity pool
   * @returns {CallBuilder} a new CallBuilder instance for the /liquidity_pools/:id endpoint
   */
  liquidityPoolId(id) {
    cov_1d2941bos4().f[4]++;
    cov_1d2941bos4().s[8]++;
    if (!id.match(/[a-fA-F0-9]{64}/)) {
      cov_1d2941bos4().b[0][0]++;
      cov_1d2941bos4().s[9]++;
      throw new TypeError(`${id} does not look like a liquidity pool ID`);
    } else {
      cov_1d2941bos4().b[0][1]++;
    }
    const builder = (cov_1d2941bos4().s[10]++, new _call_builder.CallBuilder(this.url.clone()));
    cov_1d2941bos4().s[11]++;
    builder.filter.push([id.toLowerCase()]);
    cov_1d2941bos4().s[12]++;
    return builder;
  }
}
exports.LiquidityPoolCallBuilder = LiquidityPoolCallBuilder;