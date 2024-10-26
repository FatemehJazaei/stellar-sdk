"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrictReceivePathCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_mj1ehgp9w() {
  var path = "/mnt/g/stellar-sdk/src/horizon/strict_receive_path_call_builder.ts";
  var hash = "5a07af01dc45e652dbb28d99a43da2a9cecc9a39";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/strict_receive_path_call_builder.ts",
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
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 45
        }
      },
      "2": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "3": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 50
        }
      },
      "4": {
        start: {
          line: 52,
          column: 21
        },
        end: {
          line: 60,
          column: 18
        }
      },
      "5": {
        start: {
          line: 54,
          column: 10
        },
        end: {
          line: 56,
          column: 11
        }
      },
      "6": {
        start: {
          line: 55,
          column: 12
        },
        end: {
          line: 55,
          column: 28
        }
      },
      "7": {
        start: {
          line: 58,
          column: 10
        },
        end: {
          line: 58,
          column: 59
        }
      },
      "8": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 49
        }
      },
      "9": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 63
        }
      },
      "10": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 78,
          column: 5
        }
      },
      "11": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 70,
          column: 8
        }
      },
      "12": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 78
        }
      },
      "13": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 75,
          column: 8
        }
      },
      "14": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 77,
          column: 60
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
            line: 79,
            column: 3
          }
        },
        line: 45
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 53,
            column: 13
          },
          end: {
            line: 53,
            column: 14
          }
        },
        loc: {
          start: {
            line: 53,
            column: 24
          },
          end: {
            line: 59,
            column: 9
          }
        },
        line: 53
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        }, {
          start: {
            line: 51,
            column: 11
          },
          end: {
            line: 62,
            column: 5
          }
        }],
        line: 49
      },
      "1": {
        loc: {
          start: {
            line: 54,
            column: 10
          },
          end: {
            line: 56,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 10
          },
          end: {
            line: 56,
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
        line: 54
      },
      "2": {
        loc: {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 78,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 78,
            column: 5
          }
        }, {
          start: {
            line: 76,
            column: 11
          },
          end: {
            line: 78,
            column: 5
          }
        }],
        line: 66
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
    hash: "5a07af01dc45e652dbb28d99a43da2a9cecc9a39"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_mj1ehgp9w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_mj1ehgp9w();
/**
 * The Stellar Network allows payments to be made across assets through path
 * payments. A strict receive path payment specifies a series of assets to route
 * a payment through, from source asset (the asset debited from the payer) to
 * destination asset (the asset credited to the payee).
 *
 * A path search is specified using:
 *
 * * The source address or source assets.
 * * The asset and amount that the destination account should receive
 *
 * As part of the search, horizon will load a list of assets available to the
 * source address and will find any payment paths from those source assets to
 * the desired destination asset. The search's amount parameter will be used to
 * determine if there a given path can satisfy a payment of the desired amount.
 *
 * If a list of assets is passed as the source, horizon will find any payment
 * paths from those source assets to the desired destination asset.
 *
 * Do not create this object directly, use {@link Horizon.Server#strictReceivePaths}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/aggregations/paths|Find Payment Paths}
 *
 * @augments CallBuilder
 * @private
 * @class
 *
 * @param {string} serverUrl Horizon server URL.
 * @param {string|Asset[]} source The sender's account ID or a list of Assets. Any returned path must use a source that the sender can hold.
 * @param {Asset} destinationAsset The destination asset.
 * @param {string} destinationAmount The amount, denominated in the destination asset, that any returned path should be able to satisfy.
 */
class StrictReceivePathCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl, source, destinationAsset, destinationAmount) {
    cov_mj1ehgp9w().f[0]++;
    cov_mj1ehgp9w().s[0]++;
    super(serverUrl);
    cov_mj1ehgp9w().s[1]++;
    this.url.segment("paths/strict-receive");
    cov_mj1ehgp9w().s[2]++;
    if (typeof source === "string") {
      cov_mj1ehgp9w().b[0][0]++;
      cov_mj1ehgp9w().s[3]++;
      this.url.setQuery("source_account", source);
    } else {
      cov_mj1ehgp9w().b[0][1]++;
      const assets = (cov_mj1ehgp9w().s[4]++, source.map(asset => {
        cov_mj1ehgp9w().f[1]++;
        cov_mj1ehgp9w().s[5]++;
        if (asset.isNative()) {
          cov_mj1ehgp9w().b[1][0]++;
          cov_mj1ehgp9w().s[6]++;
          return "native";
        } else {
          cov_mj1ehgp9w().b[1][1]++;
        }
        cov_mj1ehgp9w().s[7]++;
        return `${asset.getCode()}:${asset.getIssuer()}`;
      }).join(","));
      cov_mj1ehgp9w().s[8]++;
      this.url.setQuery("source_assets", assets);
    }
    cov_mj1ehgp9w().s[9]++;
    this.url.setQuery("destination_amount", destinationAmount);
    cov_mj1ehgp9w().s[10]++;
    if (!destinationAsset.isNative()) {
      cov_mj1ehgp9w().b[2][0]++;
      cov_mj1ehgp9w().s[11]++;
      this.url.setQuery("destination_asset_type", destinationAsset.getAssetType());
      cov_mj1ehgp9w().s[12]++;
      this.url.setQuery("destination_asset_code", destinationAsset.getCode());
      cov_mj1ehgp9w().s[13]++;
      this.url.setQuery("destination_asset_issuer", destinationAsset.getIssuer());
    } else {
      cov_mj1ehgp9w().b[2][1]++;
      cov_mj1ehgp9w().s[14]++;
      this.url.setQuery("destination_asset_type", "native");
    }
  }
}
exports.StrictReceivePathCallBuilder = StrictReceivePathCallBuilder;