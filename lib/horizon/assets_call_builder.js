"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetsCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_2e89e6iua6() {
  var path = "/mnt/g/stellar-sdk/src/horizon/assets_call_builder.ts";
  var hash = "4482ea6e15c9e110689bf3d540088febd96b6d2c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/assets_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 21
        }
      },
      "1": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 31
        }
      },
      "2": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 43
        }
      },
      "3": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 16
        }
      },
      "4": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 45
        }
      },
      "5": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 51
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
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
            line: 37,
            column: 53
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 37
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4482ea6e15c9e110689bf3d540088febd96b6d2c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2e89e6iua6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2e89e6iua6();
/**
 * Creates a new {@link AssetsCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#assets}.
 *
 * @class
 * @augments CallBuilder
 * @private
 * @param {string} serverUrl Horizon server URL.
 */
class AssetsCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_2e89e6iua6().f[0]++;
    cov_2e89e6iua6().s[0]++;
    super(serverUrl);
    cov_2e89e6iua6().s[1]++;
    this.url.segment("assets");
  }

  /**
   * This endpoint filters all assets by the asset code.
   * @param {string} value For example: `USD`
   * @returns {AssetsCallBuilder} current AssetCallBuilder instance
   */
  forCode(value) {
    cov_2e89e6iua6().f[1]++;
    cov_2e89e6iua6().s[2]++;
    this.url.setQuery("asset_code", value);
    cov_2e89e6iua6().s[3]++;
    return this;
  }

  /**
   * This endpoint filters all assets by the asset issuer.
   * @param {string} value For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
   * @returns {AssetsCallBuilder} current AssetCallBuilder instance
   */
  forIssuer(value) {
    cov_2e89e6iua6().f[2]++;
    cov_2e89e6iua6().s[4]++;
    this.url.setQuery("asset_issuer", value);
    cov_2e89e6iua6().s[5]++;
    return this;
  }
}
exports.AssetsCallBuilder = AssetsCallBuilder;