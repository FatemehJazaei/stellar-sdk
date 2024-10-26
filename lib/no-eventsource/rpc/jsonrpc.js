"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postObject = postObject;
var _axios = _interopRequireDefault(require("./axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_1cluaxbe9p() {
  var path = "/mnt/g/stellar-sdk/src/rpc/jsonrpc.ts";
  var hash = "e927afca108097c9e8879f651a1de7ee227f17d7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/rpc/jsonrpc.ts",
    statementMap: {
      "0": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 34
        }
      },
      "1": {
        start: {
          line: 53,
          column: 19
        },
        end: {
          line: 59,
          column: 4
        }
      },
      "2": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 64,
          column: 3
        }
      },
      "3": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 30
        }
      },
      "4": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "hasOwnProperty",
        decl: {
          start: {
            line: 31,
            column: 9
          },
          end: {
            line: 31,
            column: 23
          }
        },
        loc: {
          start: {
            line: 34,
            column: 33
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 34
      },
      "1": {
        name: "postObject",
        decl: {
          start: {
            line: 48,
            column: 22
          },
          end: {
            line: 48,
            column: 32
          }
        },
        loc: {
          start: {
            line: 52,
            column: 14
          },
          end: {
            line: 65,
            column: 1
          }
        },
        line: 52
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 19
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 51,
            column: 15
          },
          end: {
            line: 51,
            column: 19
          }
        }],
        line: 51
      },
      "1": {
        loc: {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        }, {
          start: {
            line: 62,
            column: 9
          },
          end: {
            line: 64,
            column: 3
          }
        }],
        line: 60
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e927afca108097c9e8879f651a1de7ee227f17d7"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1cluaxbe9p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1cluaxbe9p();
// Check if the given object X has a field Y, and make that available to
// typescript typing.
function hasOwnProperty(obj, prop) {
  cov_1cluaxbe9p().f[0]++;
  cov_1cluaxbe9p().s[0]++;
  // eslint-disable-next-line no-prototype-builtins
  return obj.hasOwnProperty(prop);
}

/**
 * Sends the jsonrpc 'params' as a single 'param' object (no array support).
 *
 * @param {string} url URL to the RPC instance
 * @param {string} method RPC method name that should be called
 * @param {(any | null)} [param=null] params that should be supplied to the method
 * @returns {Promise<T>}
 * @private
 */
async function postObject(url, method, param = (cov_1cluaxbe9p().b[0][0]++, null)) {
  cov_1cluaxbe9p().f[1]++;
  const response = (cov_1cluaxbe9p().s[1]++, await _axios.default.post(url, {
    jsonrpc: "2.0",
    // TODO: Generate a unique request id
    id: 1,
    method,
    params: param
  }));
  cov_1cluaxbe9p().s[2]++;
  if (hasOwnProperty(response.data, "error")) {
    cov_1cluaxbe9p().b[1][0]++;
    cov_1cluaxbe9p().s[3]++;
    throw response.data.error;
  } else {
    cov_1cluaxbe9p().b[1][1]++;
    cov_1cluaxbe9p().s[4]++;
    return response.data?.result;
  }
}