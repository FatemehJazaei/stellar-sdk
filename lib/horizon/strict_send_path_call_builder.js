"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrictSendPathCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_dg9yilg7() {
  var path = "/mnt/g/stellar-sdk/src/horizon/strict_send_path_call_builder.ts";
  var hash = "38d1c2fd337d6ccf48d90e4b039b57f7a7e42a73";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/strict_send_path_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 21
        }
      },
      "1": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 42
        }
      },
      "2": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "3": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 55
        }
      },
      "4": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 53,
          column: 73
        }
      },
      "5": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 54,
          column: 68
        }
      },
      "6": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 72
        }
      },
      "7": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 53
        }
      },
      "8": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 74,
          column: 5
        }
      },
      "9": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 60
        }
      },
      "10": {
        start: {
          line: 63,
          column: 21
        },
        end: {
          line: 71,
          column: 18
        }
      },
      "11": {
        start: {
          line: 65,
          column: 10
        },
        end: {
          line: 67,
          column: 11
        }
      },
      "12": {
        start: {
          line: 66,
          column: 12
        },
        end: {
          line: 66,
          column: 28
        }
      },
      "13": {
        start: {
          line: 69,
          column: 10
        },
        end: {
          line: 69,
          column: 59
        }
      },
      "14": {
        start: {
          line: 73,
          column: 6
        },
        end: {
          line: 73,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        loc: {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 75,
            column: 3
          }
        },
        line: 45
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 64,
            column: 13
          },
          end: {
            line: 64,
            column: 14
          }
        },
        loc: {
          start: {
            line: 64,
            column: 24
          },
          end: {
            line: 70,
            column: 9
          }
        },
        line: 64
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        }, {
          start: {
            line: 52,
            column: 11
          },
          end: {
            line: 56,
            column: 5
          }
        }],
        line: 50
      },
      "1": {
        loc: {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        }, {
          start: {
            line: 62,
            column: 11
          },
          end: {
            line: 74,
            column: 5
          }
        }],
        line: 60
      },
      "2": {
        loc: {
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 67,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 67,
            column: 11
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
        line: 65
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
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "38d1c2fd337d6ccf48d90e4b039b57f7a7e42a73"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_dg9yilg7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_dg9yilg7();
/**
 * The Stellar Network allows payments to be made across assets through path
 * payments. A strict send path payment specifies a series of assets to route a
 * payment through, from source asset (the asset debited from the payer) to
 * destination asset (the asset credited to the payee).
 *
 * A strict send path search is specified using:
 *
 * The source asset
 * The source amount
 * The destination assets or destination account.
 *
 * As part of the search, horizon will load a list of assets available to the
 * source address and will find any payment paths from those source assets to
 * the desired destination asset. The search's source_amount parameter will be
 * used to determine if there a given path can satisfy a payment of the desired
 * amount.
 *
 * Do not create this object directly, use {@link Horizon.Server#strictSendPaths}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/aggregations/paths|Find Payment Paths}
 *
 * @augments CallBuilder
 * @private
 * @class
 *
 * @param {string} serverUrl Horizon server URL.
 * @param {Asset} sourceAsset The asset to be sent.
 * @param {string} sourceAmount The amount, denominated in the source asset, that any returned path should be able to satisfy.
 * @param {string|Asset[]} destination The destination account or the destination assets.
 *
 */
class StrictSendPathCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl, sourceAsset, sourceAmount, destination) {
    cov_dg9yilg7().f[0]++;
    cov_dg9yilg7().s[0]++;
    super(serverUrl);
    cov_dg9yilg7().s[1]++;
    this.url.segment("paths/strict-send");
    cov_dg9yilg7().s[2]++;
    if (sourceAsset.isNative()) {
      cov_dg9yilg7().b[0][0]++;
      cov_dg9yilg7().s[3]++;
      this.url.setQuery("source_asset_type", "native");
    } else {
      cov_dg9yilg7().b[0][1]++;
      cov_dg9yilg7().s[4]++;
      this.url.setQuery("source_asset_type", sourceAsset.getAssetType());
      cov_dg9yilg7().s[5]++;
      this.url.setQuery("source_asset_code", sourceAsset.getCode());
      cov_dg9yilg7().s[6]++;
      this.url.setQuery("source_asset_issuer", sourceAsset.getIssuer());
    }
    cov_dg9yilg7().s[7]++;
    this.url.setQuery("source_amount", sourceAmount);
    cov_dg9yilg7().s[8]++;
    if (typeof destination === "string") {
      cov_dg9yilg7().b[1][0]++;
      cov_dg9yilg7().s[9]++;
      this.url.setQuery("destination_account", destination);
    } else {
      cov_dg9yilg7().b[1][1]++;
      const assets = (cov_dg9yilg7().s[10]++, destination.map(asset => {
        cov_dg9yilg7().f[1]++;
        cov_dg9yilg7().s[11]++;
        if (asset.isNative()) {
          cov_dg9yilg7().b[2][0]++;
          cov_dg9yilg7().s[12]++;
          return "native";
        } else {
          cov_dg9yilg7().b[2][1]++;
        }
        cov_dg9yilg7().s[13]++;
        return `${asset.getCode()}:${asset.getIssuer()}`;
      }).join(","));
      cov_dg9yilg7().s[14]++;
      this.url.setQuery("destination_assets", assets);
    }
  }
}
exports.StrictSendPathCallBuilder = StrictSendPathCallBuilder;