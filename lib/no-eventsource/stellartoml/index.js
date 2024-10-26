"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STELLAR_TOML_MAX_SIZE = exports.Resolver = exports.Api = void 0;
var _toml = _interopRequireDefault(require("toml"));
var _httpClient = require("../http-client");
var _config = require("../config");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_1oew6qzjbf() {
  var path = "/mnt/g/stellar-sdk/src/stellartoml/index.ts";
  var hash = "92d692364f67d7b34318e13144790292d3d3e665";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/stellartoml/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 37
        },
        end: {
          line: 14,
          column: 47
        }
      },
      "1": {
        start: {
          line: 18,
          column: 20
        },
        end: {
          line: 18,
          column: 42
        }
      },
      "2": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 53,
          column: 24
        }
      },
      "3": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 56,
          column: 78
        }
      },
      "4": {
        start: {
          line: 58,
          column: 21
        },
        end: {
          line: 58,
          column: 49
        }
      },
      "5": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 93,
          column: 9
        }
      },
      "6": {
        start: {
          line: 65,
          column: 14
        },
        end: {
          line: 68,
          column: 15
        }
      },
      "7": {
        start: {
          line: 66,
          column: 22
        },
        end: {
          line: 66,
          column: 64
        }
      },
      "8": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 83,
          column: 9
        }
      },
      "9": {
        start: {
          line: 75,
          column: 29
        },
        end: {
          line: 75,
          column: 54
        }
      },
      "10": {
        start: {
          line: 76,
          column: 10
        },
        end: {
          line: 76,
          column: 45
        }
      },
      "11": {
        start: {
          line: 78,
          column: 10
        },
        end: {
          line: 82,
          column: 12
        }
      },
      "12": {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 92,
          column: 9
        }
      },
      "13": {
        start: {
          line: 87,
          column: 10
        },
        end: {
          line: 89,
          column: 12
        }
      },
      "14": {
        start: {
          line: 91,
          column: 10
        },
        end: {
          line: 91,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 30
          },
          end: {
            line: 94,
            column: 3
          }
        },
        line: 49
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 64,
            column: 28
          },
          end: {
            line: 64,
            column: 29
          }
        },
        loc: {
          start: {
            line: 65,
            column: 14
          },
          end: {
            line: 68,
            column: 15
          }
        },
        line: 65
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 66,
            column: 16
          },
          end: {
            line: 66,
            column: 17
          }
        },
        loc: {
          start: {
            line: 66,
            column: 22
          },
          end: {
            line: 66,
            column: 64
          }
        },
        line: 66
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 73,
            column: 12
          },
          end: {
            line: 73,
            column: 13
          }
        },
        loc: {
          start: {
            line: 73,
            column: 26
          },
          end: {
            line: 84,
            column: 7
          }
        },
        line: 73
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 85,
            column: 13
          },
          end: {
            line: 85,
            column: 14
          }
        },
        loc: {
          start: {
            line: 85,
            column: 29
          },
          end: {
            line: 93,
            column: 7
          }
        },
        line: 85
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 48,
            column: 44
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 48,
            column: 42
          },
          end: {
            line: 48,
            column: 44
          }
        }],
        line: 48
      },
      "1": {
        loc: {
          start: {
            line: 51,
            column: 6
          },
          end: {
            line: 53,
            column: 24
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 52,
            column: 10
          },
          end: {
            line: 52,
            column: 30
          }
        }, {
          start: {
            line: 53,
            column: 10
          },
          end: {
            line: 53,
            column: 24
          }
        }],
        line: 51
      },
      "2": {
        loc: {
          start: {
            line: 56,
            column: 6
          },
          end: {
            line: 56,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 56,
            column: 44
          },
          end: {
            line: 56,
            column: 63
          }
        }, {
          start: {
            line: 56,
            column: 66
          },
          end: {
            line: 56,
            column: 78
          }
        }],
        line: 56
      },
      "3": {
        loc: {
          start: {
            line: 58,
            column: 21
          },
          end: {
            line: 58,
            column: 49
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 58,
            column: 33
          },
          end: {
            line: 58,
            column: 39
          }
        }, {
          start: {
            line: 58,
            column: 42
          },
          end: {
            line: 58,
            column: 49
          }
        }],
        line: 58
      },
      "4": {
        loc: {
          start: {
            line: 63,
            column: 21
          },
          end: {
            line: 70,
            column: 21
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 64,
            column: 12
          },
          end: {
            line: 69,
            column: 13
          }
        }, {
          start: {
            line: 70,
            column: 12
          },
          end: {
            line: 70,
            column: 21
          }
        }],
        line: 63
      },
      "5": {
        loc: {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 92,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 92,
            column: 9
          }
        }, {
          start: {
            line: 90,
            column: 15
          },
          end: {
            line: 92,
            column: 9
          }
        }],
        line: 86
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
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "92d692364f67d7b34318e13144790292d3d3e665"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1oew6qzjbf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1oew6qzjbf();
/** @module StellarToml */

/**
 * The maximum size of stellar.toml file, in bytes
 * @constant {number}
 * @default 102400
 */
const STELLAR_TOML_MAX_SIZE = exports.STELLAR_TOML_MAX_SIZE = (cov_1oew6qzjbf().s[0]++, 100 * 1024);

// axios timeout doesn't catch missing urls, e.g. those with no response
// so we use the axios cancel token to ensure the timeout
const CancelToken = (cov_1oew6qzjbf().s[1]++, _httpClient.httpClient.CancelToken);

/**
 * Resolver allows resolving `stellar.toml` files.
 * @memberof module:StellarToml
 * @hideconstructor
 */
class Resolver {
  /**
   * Returns a parsed `stellar.toml` file for a given domain.
   * @see {@link https://developers.stellar.org/docs/tokens/publishing-asset-info | Stellar.toml doc}
   *
   * @param {string} domain Domain to get stellar.toml file for
   * @param {object} [opts] Options object
   * @param {boolean} [opts.allowHttp=false] - Allow connecting to http servers. This must be set to false in production deployments!
   * @param {number} [opts.timeout=0] - Allow a timeout. Allows user to avoid nasty lag due to TOML resolve issue.
   * @returns {Promise} A `Promise` that resolves to the parsed stellar.toml object
   *
   * @example
   * StellarSdk.StellarToml.Resolver.resolve('acme.com')
   *   .then(stellarToml => {
   *     // stellarToml in an object representing domain stellar.toml file.
   *   })
   *   .catch(error => {
   *     // stellar.toml does not exist or is invalid
   *   });
   */
  // eslint-disable-next-line require-await
  static async resolve(domain, opts = (cov_1oew6qzjbf().b[0][0]++, {})) {
    cov_1oew6qzjbf().f[0]++;
    const allowHttp = (cov_1oew6qzjbf().s[2]++, typeof opts.allowHttp === "undefined" ? (cov_1oew6qzjbf().b[1][0]++, _config.Config.isAllowHttp()) : (cov_1oew6qzjbf().b[1][1]++, opts.allowHttp));
    const timeout = (cov_1oew6qzjbf().s[3]++, typeof opts.timeout === "undefined" ? (cov_1oew6qzjbf().b[2][0]++, _config.Config.getTimeout()) : (cov_1oew6qzjbf().b[2][1]++, opts.timeout));
    const protocol = (cov_1oew6qzjbf().s[4]++, allowHttp ? (cov_1oew6qzjbf().b[3][0]++, "http") : (cov_1oew6qzjbf().b[3][1]++, "https"));
    cov_1oew6qzjbf().s[5]++;
    return _httpClient.httpClient.get(`${protocol}://${domain}/.well-known/stellar.toml`, {
      maxContentLength: STELLAR_TOML_MAX_SIZE,
      cancelToken: timeout ? (cov_1oew6qzjbf().b[4][0]++, new CancelToken(cancel => {
        cov_1oew6qzjbf().f[1]++;
        cov_1oew6qzjbf().s[6]++;
        return setTimeout(() => {
          cov_1oew6qzjbf().f[2]++;
          cov_1oew6qzjbf().s[7]++;
          return cancel(`timeout of ${timeout}ms exceeded`);
        }, timeout);
      })) : (cov_1oew6qzjbf().b[4][1]++, undefined),
      timeout
    }).then(response => {
      cov_1oew6qzjbf().f[3]++;
      cov_1oew6qzjbf().s[8]++;
      try {
        const tomlObject = (cov_1oew6qzjbf().s[9]++, _toml.default.parse(response.data));
        cov_1oew6qzjbf().s[10]++;
        return Promise.resolve(tomlObject);
      } catch (e) {
        cov_1oew6qzjbf().s[11]++;
        return Promise.reject(new Error(`stellar.toml is invalid - Parsing error on line ${e.line}, column ${e.column}: ${e.message}`));
      }
    }).catch(err => {
      cov_1oew6qzjbf().f[4]++;
      cov_1oew6qzjbf().s[12]++;
      if (err.message.match(/^maxContentLength size/)) {
        cov_1oew6qzjbf().b[5][0]++;
        cov_1oew6qzjbf().s[13]++;
        throw new Error(`stellar.toml file exceeds allowed size of ${STELLAR_TOML_MAX_SIZE}`);
      } else {
        cov_1oew6qzjbf().b[5][1]++;
        cov_1oew6qzjbf().s[14]++;
        throw err;
      }
    });
  }
}

/* tslint:disable-next-line: no-namespace */
exports.Resolver = Resolver;
let Api = exports.Api = void 0;