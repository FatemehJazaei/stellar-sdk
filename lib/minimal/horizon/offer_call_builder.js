"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_1yokszbcmt() {
  var path = "/mnt/g/stellar-sdk/src/horizon/offer_call_builder.ts";
  var hash = "319d2deb8bbb718034f587a6124f92be0cda9fb8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/offer_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 31
        }
      },
      "1": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 31
        }
      },
      "2": {
        start: {
          line: 33,
          column: 20
        },
        end: {
          line: 33,
          column: 76
        }
      },
      "3": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 35
        }
      },
      "4": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
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
          column: 44
        }
      },
      "6": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 63,
          column: 5
        }
      },
      "7": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 67
        }
      },
      "8": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 62
        }
      },
      "9": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 60,
          column: 66
        }
      },
      "10": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 55
        }
      },
      "11": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 16
        }
      },
      "12": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 81,
          column: 5
        }
      },
      "13": {
        start: {
          line: 76,
          column: 6
        },
        end: {
          line: 76,
          column: 68
        }
      },
      "14": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 77,
          column: 63
        }
      },
      "15": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 67
        }
      },
      "16": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 56
        }
      },
      "17": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 16
        }
      },
      "18": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 37
        }
      },
      "19": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 16
        }
      },
      "20": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 104,
          column: 40
        }
      },
      "21": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
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
            line: 32,
            column: 68
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 32
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
            column: 38
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 45
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        },
        loc: {
          start: {
            line: 56,
            column: 36
          },
          end: {
            line: 65,
            column: 3
          }
        },
        line: 56
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        },
        loc: {
          start: {
            line: 74,
            column: 37
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 74
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        loc: {
          start: {
            line: 91,
            column: 35
          },
          end: {
            line: 94,
            column: 3
          }
        },
        line: 91
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 103,
            column: 2
          },
          end: {
            line: 103,
            column: 3
          }
        },
        loc: {
          start: {
            line: 103,
            column: 38
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 103
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 63,
            column: 5
          }
        }, {
          start: {
            line: 61,
            column: 11
          },
          end: {
            line: 63,
            column: 5
          }
        }],
        line: 57
      },
      "1": {
        loc: {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        }, {
          start: {
            line: 79,
            column: 11
          },
          end: {
            line: 81,
            column: 5
          }
        }],
        line: 75
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
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "319d2deb8bbb718034f587a6124f92be0cda9fb8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1yokszbcmt = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1yokszbcmt();
/**
 * Creates a new {@link OfferCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#offers}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/offers/|Offers}
 *
 * @augments CallBuilder
 * @private
 * @class
 * @param {string} serverUrl Horizon server URL.
 */
class OfferCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_1yokszbcmt().f[0]++;
    cov_1yokszbcmt().s[0]++;
    super(serverUrl, "offers");
    cov_1yokszbcmt().s[1]++;
    this.url.segment("offers");
  }

  /**
   * The offer details endpoint provides information on a single offer. The offer ID provided in the id
   * argument specifies which offer to load.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/offers/single/|Offer Details}
   * @param {string} offerId Offer ID
   * @returns {CallBuilder<ServerApi.OfferRecord>} CallBuilder<ServerApi.OfferRecord> OperationCallBuilder instance
   */
  offer(offerId) {
    cov_1yokszbcmt().f[1]++;
    const builder = (cov_1yokszbcmt().s[2]++, new _call_builder.CallBuilder(this.url.clone()));
    cov_1yokszbcmt().s[3]++;
    builder.filter.push([offerId]);
    cov_1yokszbcmt().s[4]++;
    return builder;
  }

  /**
   * Returns all offers where the given account is involved.
   *
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/accounts/offers/|Offers}
   * @param {string} id For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {OfferCallBuilder} current OfferCallBuilder instance
   */
  forAccount(id) {
    cov_1yokszbcmt().f[2]++;
    cov_1yokszbcmt().s[5]++;
    return this.forEndpoint("accounts", id);
  }

  /**
   * Returns all offers buying an asset.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/offers/list/|Offers}
   * @see Asset
   * @param {Asset} asset For example: `new Asset('USD','GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD')`
   * @returns {OfferCallBuilder} current OfferCallBuilder instance
   */
  buying(asset) {
    cov_1yokszbcmt().f[3]++;
    cov_1yokszbcmt().s[6]++;
    if (!asset.isNative()) {
      cov_1yokszbcmt().b[0][0]++;
      cov_1yokszbcmt().s[7]++;
      this.url.setQuery("buying_asset_type", asset.getAssetType());
      cov_1yokszbcmt().s[8]++;
      this.url.setQuery("buying_asset_code", asset.getCode());
      cov_1yokszbcmt().s[9]++;
      this.url.setQuery("buying_asset_issuer", asset.getIssuer());
    } else {
      cov_1yokszbcmt().b[0][1]++;
      cov_1yokszbcmt().s[10]++;
      this.url.setQuery("buying_asset_type", "native");
    }
    cov_1yokszbcmt().s[11]++;
    return this;
  }

  /**
   * Returns all offers selling an asset.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/offers/list/|Offers}
   * @see Asset
   * @param {Asset} asset For example: `new Asset('EUR','GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD')`
   * @returns {OfferCallBuilder} current OfferCallBuilder instance
   */
  selling(asset) {
    cov_1yokszbcmt().f[4]++;
    cov_1yokszbcmt().s[12]++;
    if (!asset.isNative()) {
      cov_1yokszbcmt().b[1][0]++;
      cov_1yokszbcmt().s[13]++;
      this.url.setQuery("selling_asset_type", asset.getAssetType());
      cov_1yokszbcmt().s[14]++;
      this.url.setQuery("selling_asset_code", asset.getCode());
      cov_1yokszbcmt().s[15]++;
      this.url.setQuery("selling_asset_issuer", asset.getIssuer());
    } else {
      cov_1yokszbcmt().b[1][1]++;
      cov_1yokszbcmt().s[16]++;
      this.url.setQuery("selling_asset_type", "native");
    }
    cov_1yokszbcmt().s[17]++;
    return this;
  }

  /**
   * This endpoint filters offers where the given account is sponsoring the offer entry.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/get-all-offers|Offers}
   * @param {string} id For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {OfferCallBuilder} current OfferCallBuilder instance
   */
  sponsor(id) {
    cov_1yokszbcmt().f[5]++;
    cov_1yokszbcmt().s[18]++;
    this.url.setQuery("sponsor", id);
    cov_1yokszbcmt().s[19]++;
    return this;
  }

  /**
   * This endpoint filters offers where the given account is the seller.
   *
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/get-all-offers|Offers}
   * @param {string} seller For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {OfferCallBuilder} current OfferCallBuilder instance
   */
  seller(seller) {
    cov_1yokszbcmt().f[6]++;
    cov_1yokszbcmt().s[20]++;
    this.url.setQuery("seller", seller);
    cov_1yokszbcmt().s[21]++;
    return this;
  }
}
exports.OfferCallBuilder = OfferCallBuilder;