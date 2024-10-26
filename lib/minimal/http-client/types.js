"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancelToken = void 0;
function cov_jwa0u8t1s() {
  var path = "/mnt/g/stellar-sdk/src/http-client/types.ts";
  var hash = "787a6c8e44d627bd3d4298843776f0639ea442f9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/http-client/types.ts",
    statementMap: {
      "0": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 80,
          column: 5
        }
      },
      "1": {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 79,
          column: 35
        }
      },
      "2": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 86,
          column: 7
        }
      },
      "3": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 31
        }
      },
      "4": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 90,
          column: 7
        }
      },
      "5": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 88,
          column: 27
        }
      },
      "6": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 89,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 27
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 77
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 82,
            column: 2
          },
          end: {
            line: 82,
            column: 3
          }
        },
        loc: {
          start: {
            line: 82,
            column: 69
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 82
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 84,
            column: 37
          },
          end: {
            line: 84,
            column: 38
          }
        },
        loc: {
          start: {
            line: 84,
            column: 50
          },
          end: {
            line: 86,
            column: 5
          }
        },
        line: 84
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 87,
            column: 13
          },
          end: {
            line: 87,
            column: 14
          }
        },
        loc: {
          start: {
            line: 87,
            column: 34
          },
          end: {
            line: 90,
            column: 5
          }
        },
        line: 87
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 80,
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
        line: 78
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "787a6c8e44d627bd3d4298843776f0639ea442f9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jwa0u8t1s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_jwa0u8t1s();
class CancelToken {
  throwIfRequested() {
    cov_jwa0u8t1s().f[0]++;
    cov_jwa0u8t1s().s[0]++;
    if (this.reason) {
      cov_jwa0u8t1s().b[0][0]++;
      cov_jwa0u8t1s().s[1]++;
      throw new Error(this.reason);
    } else {
      cov_jwa0u8t1s().b[0][1]++;
    }
  }
  constructor(executor) {
    cov_jwa0u8t1s().f[1]++;
    let resolvePromise;
    cov_jwa0u8t1s().s[2]++;
    this.promise = new Promise(resolve => {
      cov_jwa0u8t1s().f[2]++;
      cov_jwa0u8t1s().s[3]++;
      resolvePromise = resolve;
    });
    cov_jwa0u8t1s().s[4]++;
    executor(reason => {
      cov_jwa0u8t1s().f[3]++;
      cov_jwa0u8t1s().s[5]++;
      this.reason = reason;
      cov_jwa0u8t1s().s[6]++;
      resolvePromise();
    });
  }
}
exports.CancelToken = CancelToken;