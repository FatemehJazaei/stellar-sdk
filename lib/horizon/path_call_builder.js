"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_1pc5iwemv9() {
  var path = "/mnt/g/stellar-sdk/src/horizon/path_call_builder.ts";
  var hash = "dfe7ab9842106f66838e115a4e8c05e0f058dce6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/path_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 21
        }
      },
      "1": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 30
        }
      },
      "2": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 58
        }
      },
      "3": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 48
        }
      },
      "4": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 63
        }
      },
      "5": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "6": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 54,
          column: 8
        }
      },
      "7": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 78
        }
      },
      "8": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 59,
          column: 8
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
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        loc: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 43
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
            line: 62,
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
            line: 62,
            column: 5
          }
        }, {
          start: {
            line: 60,
            column: 11
          },
          end: {
            line: 62,
            column: 5
          }
        }],
        line: 50
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
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dfe7ab9842106f66838e115a4e8c05e0f058dce6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1pc5iwemv9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1pc5iwemv9();
/**
 * The Stellar Network allows payments to be made across assets through path payments. A path payment specifies a
 * series of assets to route a payment through, from source asset (the asset debited from the payer) to destination
 * asset (the asset credited to the payee).
 *
 * A path search is specified using:
 *
 * * The destination address
 * * The source address
 * * The asset and amount that the destination account should receive
 *
 * As part of the search, horizon will load a list of assets available to the source address and will find any
 * payment paths from those source assets to the desired destination asset. The search's amount parameter will be
 * used to determine if there a given path can satisfy a payment of the desired amount.
 *
 * Do not create this object directly, use {@link Horizon.Server#paths}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/aggregations/paths|Find Payment Paths}
 *
 * @augments CallBuilder
 * @private
 * @class
 *
 * @param {string} serverUrl Horizon server URL.
 * @param {string} source The sender's account ID. Any returned path must use a source that the sender can hold.
 * @param {string} destination The destination account ID that any returned path should use.
 * @param {Asset} destinationAsset The destination asset.
 * @param {string} destinationAmount The amount, denominated in the destination asset, that any returned path should be able to satisfy.
 */
class PathCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl, source, destination, destinationAsset, destinationAmount) {
    cov_1pc5iwemv9().f[0]++;
    cov_1pc5iwemv9().s[0]++;
    super(serverUrl);
    cov_1pc5iwemv9().s[1]++;
    this.url.segment("paths");
    cov_1pc5iwemv9().s[2]++;
    this.url.setQuery("destination_account", destination);
    cov_1pc5iwemv9().s[3]++;
    this.url.setQuery("source_account", source);
    cov_1pc5iwemv9().s[4]++;
    this.url.setQuery("destination_amount", destinationAmount);
    cov_1pc5iwemv9().s[5]++;
    if (!destinationAsset.isNative()) {
      cov_1pc5iwemv9().b[0][0]++;
      cov_1pc5iwemv9().s[6]++;
      this.url.setQuery("destination_asset_type", destinationAsset.getAssetType());
      cov_1pc5iwemv9().s[7]++;
      this.url.setQuery("destination_asset_code", destinationAsset.getCode());
      cov_1pc5iwemv9().s[8]++;
      this.url.setQuery("destination_asset_issuer", destinationAsset.getIssuer());
    } else {
      cov_1pc5iwemv9().b[0][1]++;
      cov_1pc5iwemv9().s[9]++;
      this.url.setQuery("destination_asset_type", "native");
    }
  }
}
exports.PathCallBuilder = PathCallBuilder;