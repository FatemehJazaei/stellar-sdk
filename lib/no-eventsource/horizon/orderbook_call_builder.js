"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderbookCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_10wmx4m9l3() {
  var path = "/mnt/g/stellar-sdk/src/horizon/orderbook_call_builder.ts";
  var hash = "a172cae90133e42ce19c33378bcc951996e7872a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/orderbook_call_builder.ts",
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
          column: 35
        }
      },
      "2": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "3": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 70
        }
      },
      "4": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 65
        }
      },
      "5": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 69
        }
      },
      "6": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 56
        }
      },
      "7": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "8": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 68
        }
      },
      "9": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 63
        }
      },
      "10": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 33,
          column: 67
        }
      },
      "11": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 55
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
            column: 61
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        }, {
          start: {
            line: 27,
            column: 11
          },
          end: {
            line: 29,
            column: 5
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        }, {
          start: {
            line: 34,
            column: 11
          },
          end: {
            line: 36,
            column: 5
          }
        }],
        line: 30
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
      "11": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a172cae90133e42ce19c33378bcc951996e7872a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10wmx4m9l3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_10wmx4m9l3();
/**
 * Creates a new {@link OrderbookCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#orderbook}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/aggregations/order-books|Orderbook Details}
 *
 * @augments CallBuilder
 * @private
 * @class
 * @param {string} serverUrl serverUrl Horizon server URL.
 * @param {Asset} selling Asset being sold
 * @param {Asset} buying Asset being bought
 */
class OrderbookCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl, selling, buying) {
    cov_10wmx4m9l3().f[0]++;
    cov_10wmx4m9l3().s[0]++;
    super(serverUrl);
    cov_10wmx4m9l3().s[1]++;
    this.url.segment("order_book");
    cov_10wmx4m9l3().s[2]++;
    if (!selling.isNative()) {
      cov_10wmx4m9l3().b[0][0]++;
      cov_10wmx4m9l3().s[3]++;
      this.url.setQuery("selling_asset_type", selling.getAssetType());
      cov_10wmx4m9l3().s[4]++;
      this.url.setQuery("selling_asset_code", selling.getCode());
      cov_10wmx4m9l3().s[5]++;
      this.url.setQuery("selling_asset_issuer", selling.getIssuer());
    } else {
      cov_10wmx4m9l3().b[0][1]++;
      cov_10wmx4m9l3().s[6]++;
      this.url.setQuery("selling_asset_type", "native");
    }
    cov_10wmx4m9l3().s[7]++;
    if (!buying.isNative()) {
      cov_10wmx4m9l3().b[1][0]++;
      cov_10wmx4m9l3().s[8]++;
      this.url.setQuery("buying_asset_type", buying.getAssetType());
      cov_10wmx4m9l3().s[9]++;
      this.url.setQuery("buying_asset_code", buying.getCode());
      cov_10wmx4m9l3().s[10]++;
      this.url.setQuery("buying_asset_issuer", buying.getIssuer());
    } else {
      cov_10wmx4m9l3().b[1][1]++;
      cov_10wmx4m9l3().s[11]++;
      this.url.setQuery("buying_asset_type", "native");
    }
  }
}
exports.OrderbookCallBuilder = OrderbookCallBuilder;