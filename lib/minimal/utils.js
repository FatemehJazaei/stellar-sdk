"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;
function cov_2f3m844pm6() {
  var path = "/mnt/g/stellar-sdk/src/utils.ts";
  var hash = "4c0bd772f4628014d24040c677296cf3206cdaff";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/utils.ts",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "1": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 19
        }
      },
      "2": {
        start: {
          line: 27,
          column: 16
        },
        end: {
          line: 27,
          column: 45
        }
      },
      "3": {
        start: {
          line: 28,
          column: 33
        },
        end: {
          line: 28,
          column: 55
        }
      },
      "4": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 33,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 13
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 27
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 21,
            column: 26
          },
          end: {
            line: 21,
            column: 27
          }
        }],
        line: 21
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 25,
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
            line: 25,
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
        line: 23
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 32,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 55
          }
        }, {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 32,
            column: 55
          }
        }],
        line: 31
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
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4c0bd772f4628014d24040c677296cf3206cdaff"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2f3m844pm6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2f3m844pm6();
/**
 * Miscellaneous utilities.
 *
 * @hideconstructor
 */
class Utils {
  /**
   * Verifies if the current date is within the transaction's timebounds
   *
   * @param {Transaction} transaction The transaction whose timebounds will be validated.
   * @param {number} [gracePeriod=0] An additional window of time that should be considered valid on either end of the transaction's time range.
   *
   * @returns {boolean} Returns true if the current time is within the transaction's [minTime, maxTime] range.
   *
   * @static
   */
  static validateTimebounds(transaction, gracePeriod = (cov_2f3m844pm6().b[0][0]++, 0)) {
    cov_2f3m844pm6().f[0]++;
    cov_2f3m844pm6().s[0]++;
    if (!transaction.timeBounds) {
      cov_2f3m844pm6().b[1][0]++;
      cov_2f3m844pm6().s[1]++;
      return false;
    } else {
      cov_2f3m844pm6().b[1][1]++;
    }
    const now = (cov_2f3m844pm6().s[2]++, Math.floor(Date.now() / 1000));
    const {
      minTime,
      maxTime
    } = (cov_2f3m844pm6().s[3]++, transaction.timeBounds);
    cov_2f3m844pm6().s[4]++;
    return (cov_2f3m844pm6().b[2][0]++, now >= Number.parseInt(minTime, 10) - gracePeriod) && (cov_2f3m844pm6().b[2][1]++, now <= Number.parseInt(maxTime, 10) + gracePeriod);
  }
}
exports.Utils = Utils;