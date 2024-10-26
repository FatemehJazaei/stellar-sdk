"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TradeAggregationCallBuilder = void 0;
var _call_builder = require("./call_builder");
var _errors = require("../errors");
function cov_1t58hf674v() {
  var path = "/mnt/g/stellar-sdk/src/horizon/trade_aggregation_call_builder.ts";
  var hash = "bff6c54b49eaa8b403ad632640e159e48d3bcde1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/trade_aggregation_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 27
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 21
        }
      },
      "2": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 43
        }
      },
      "3": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "4": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 64
        }
      },
      "5": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 59
        }
      },
      "6": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 63
        }
      },
      "7": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 54,
          column: 53
        }
      },
      "8": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "9": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 57,
          column: 70
        }
      },
      "10": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 65
        }
      },
      "11": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 69
        }
      },
      "12": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 56
        }
      },
      "13": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 68,
          column: 5
        }
      },
      "14": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 79
        }
      },
      "15": {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 66,
          column: 61
        }
      },
      "16": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 57
        }
      },
      "17": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 73,
          column: 5
        }
      },
      "18": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 66
        }
      },
      "19": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 72,
          column: 61
        }
      },
      "20": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 78,
          column: 5
        }
      },
      "21": {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 75,
          column: 58
        }
      },
      "22": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 77,
          column: 53
        }
      },
      "23": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 87,
          column: 72
        }
      },
      "24": {
        start: {
          line: 87,
          column: 48
        },
        end: {
          line: 87,
          column: 70
        }
      },
      "25": {
        start: {
          line: 97,
          column: 17
        },
        end: {
          line: 97,
          column: 24
        }
      },
      "26": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 80
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
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 87,
            column: 35
          },
          end: {
            line: 87,
            column: 36
          }
        },
        loc: {
          start: {
            line: 87,
            column: 48
          },
          end: {
            line: 87,
            column: 70
          }
        },
        line: 87
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 96,
            column: 3
          }
        },
        loc: {
          start: {
            line: 96,
            column: 69
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 96
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
            line: 55,
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
            line: 55,
            column: 5
          }
        }, {
          start: {
            line: 53,
            column: 11
          },
          end: {
            line: 55,
            column: 5
          }
        }],
        line: 49
      },
      "1": {
        loc: {
          start: {
            line: 56,
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
            line: 56,
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
        line: 56
      },
      "2": {
        loc: {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 68,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 68,
            column: 5
          }
        }, {
          start: {
            line: 65,
            column: 11
          },
          end: {
            line: 68,
            column: 5
          }
        }],
        line: 63
      },
      "3": {
        loc: {
          start: {
            line: 63,
            column: 8
          },
          end: {
            line: 63,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 63,
            column: 8
          },
          end: {
            line: 63,
            column: 38
          }
        }, {
          start: {
            line: 63,
            column: 42
          },
          end: {
            line: 63,
            column: 70
          }
        }],
        line: 63
      },
      "4": {
        loc: {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 73,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 73,
            column: 5
          }
        }, {
          start: {
            line: 71,
            column: 11
          },
          end: {
            line: 73,
            column: 5
          }
        }],
        line: 69
      },
      "5": {
        loc: {
          start: {
            line: 74,
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
            line: 74,
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
        line: 74
      },
      "6": {
        loc: {
          start: {
            line: 98,
            column: 13
          },
          end: {
            line: 98,
            column: 78
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 98,
            column: 13
          },
          end: {
            line: 98,
            column: 32
          }
        }, {
          start: {
            line: 98,
            column: 36
          },
          end: {
            line: 98,
            column: 55
          }
        }, {
          start: {
            line: 98,
            column: 59
          },
          end: {
            line: 98,
            column: 78
          }
        }],
        line: 98
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
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bff6c54b49eaa8b403ad632640e159e48d3bcde1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1t58hf674v = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1t58hf674v();
/* tslint:disable: variable-name */
const allowedResolutions = (cov_1t58hf674v().s[0]++, [60000, 300000, 900000, 3600000, 86400000, 604800000]);

/**
 * Trade Aggregations facilitate efficient gathering of historical trade data.
 *
 * Do not create this object directly, use {@link Horizon.Server#tradeAggregation}.
 *
 * @augments CallBuilder
 * @private
 * @class
 *
 * @param {string} serverUrl serverUrl Horizon server URL.
 * @param {Asset} base base asset
 * @param {Asset} counter counter asset
 * @param {number} start_time lower time boundary represented as millis since epoch
 * @param {number} end_time upper time boundary represented as millis since epoch
 * @param {number} resolution segment duration as millis since epoch. *Supported values are 1 minute (60000), 5 minutes (300000), 15 minutes (900000), 1 hour (3600000), 1 day (86400000) and 1 week (604800000).
 * @param {number} offset segments can be offset using this parameter. Expressed in milliseconds. *Can only be used if the resolution is greater than 1 hour. Value must be in whole hours, less than the provided resolution, and less than 24 hours.
 */
class TradeAggregationCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl, base, counter, start_time, end_time, resolution, offset) {
    cov_1t58hf674v().f[0]++;
    cov_1t58hf674v().s[1]++;
    super(serverUrl);
    cov_1t58hf674v().s[2]++;
    this.url.segment("trade_aggregations");
    cov_1t58hf674v().s[3]++;
    if (!base.isNative()) {
      cov_1t58hf674v().b[0][0]++;
      cov_1t58hf674v().s[4]++;
      this.url.setQuery("base_asset_type", base.getAssetType());
      cov_1t58hf674v().s[5]++;
      this.url.setQuery("base_asset_code", base.getCode());
      cov_1t58hf674v().s[6]++;
      this.url.setQuery("base_asset_issuer", base.getIssuer());
    } else {
      cov_1t58hf674v().b[0][1]++;
      cov_1t58hf674v().s[7]++;
      this.url.setQuery("base_asset_type", "native");
    }
    cov_1t58hf674v().s[8]++;
    if (!counter.isNative()) {
      cov_1t58hf674v().b[1][0]++;
      cov_1t58hf674v().s[9]++;
      this.url.setQuery("counter_asset_type", counter.getAssetType());
      cov_1t58hf674v().s[10]++;
      this.url.setQuery("counter_asset_code", counter.getCode());
      cov_1t58hf674v().s[11]++;
      this.url.setQuery("counter_asset_issuer", counter.getIssuer());
    } else {
      cov_1t58hf674v().b[1][1]++;
      cov_1t58hf674v().s[12]++;
      this.url.setQuery("counter_asset_type", "native");
    }
    cov_1t58hf674v().s[13]++;
    if ((cov_1t58hf674v().b[3][0]++, typeof start_time !== "number") || (cov_1t58hf674v().b[3][1]++, typeof end_time !== "number")) {
      cov_1t58hf674v().b[2][0]++;
      cov_1t58hf674v().s[14]++;
      throw new _errors.BadRequestError("Invalid time bounds", [start_time, end_time]);
    } else {
      cov_1t58hf674v().b[2][1]++;
      cov_1t58hf674v().s[15]++;
      this.url.setQuery("start_time", start_time.toString());
      cov_1t58hf674v().s[16]++;
      this.url.setQuery("end_time", end_time.toString());
    }
    cov_1t58hf674v().s[17]++;
    if (!this.isValidResolution(resolution)) {
      cov_1t58hf674v().b[4][0]++;
      cov_1t58hf674v().s[18]++;
      throw new _errors.BadRequestError("Invalid resolution", resolution);
    } else {
      cov_1t58hf674v().b[4][1]++;
      cov_1t58hf674v().s[19]++;
      this.url.setQuery("resolution", resolution.toString());
    }
    cov_1t58hf674v().s[20]++;
    if (!this.isValidOffset(offset, resolution)) {
      cov_1t58hf674v().b[5][0]++;
      cov_1t58hf674v().s[21]++;
      throw new _errors.BadRequestError("Invalid offset", offset);
    } else {
      cov_1t58hf674v().b[5][1]++;
      cov_1t58hf674v().s[22]++;
      this.url.setQuery("offset", offset.toString());
    }
  }

  /**
   * @private
   * @param {number} resolution Trade data resolution in milliseconds
   * @returns {boolean} true if the resolution is allowed
   */
  isValidResolution(resolution) {
    cov_1t58hf674v().f[1]++;
    cov_1t58hf674v().s[23]++;
    return allowedResolutions.some(allowed => {
      cov_1t58hf674v().f[2]++;
      cov_1t58hf674v().s[24]++;
      return allowed === resolution;
    });
  }

  /**
   * @private
   * @param {number} offset Time offset in milliseconds
   * @param {number} resolution Trade data resolution in milliseconds
   * @returns {boolean} true if the offset is valid
   */
  isValidOffset(offset, resolution) {
    cov_1t58hf674v().f[3]++;
    const hour = (cov_1t58hf674v().s[25]++, 3600000);
    cov_1t58hf674v().s[26]++;
    return !((cov_1t58hf674v().b[6][0]++, offset > resolution) || (cov_1t58hf674v().b[6][1]++, offset >= 24 * hour) || (cov_1t58hf674v().b[6][2]++, offset % hour !== 0));
  }
}
exports.TradeAggregationCallBuilder = TradeAggregationCallBuilder;