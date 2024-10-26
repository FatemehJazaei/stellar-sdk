"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contractErrorPattern = void 0;
exports.getAccount = getAccount;
exports.implementsToString = implementsToString;
exports.processSpecEntryStream = processSpecEntryStream;
exports.withExponentialBackoff = withExponentialBackoff;
var _stellarBase = require("@stellar/stellar-base");
var _types = require("./types");
function cov_168q2eib0h() {
  var path = "/mnt/g/stellar-sdk/src/contract/utils.ts";
  var hash = "dc05fe0b61706f0bd8d3d8265f424362be16031c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/contract/utils.ts",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 24
        },
        end: {
          line: 23,
          column: 26
        }
      },
      "1": {
        start: {
          line: 25,
          column: 14
        },
        end: {
          line: 25,
          column: 15
        }
      },
      "2": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 28
        }
      },
      "3": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 69
        }
      },
      "4": {
        start: {
          line: 27,
          column: 53
        },
        end: {
          line: 27,
          column: 69
        }
      },
      "5": {
        start: {
          line: 29,
          column: 20
        },
        end: {
          line: 29,
          column: 76
        }
      },
      "6": {
        start: {
          line: 30,
          column: 17
        },
        end: {
          line: 30,
          column: 21
        }
      },
      "7": {
        start: {
          line: 31,
          column: 22
        },
        end: {
          line: 31,
          column: 30
        }
      },
      "8": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 72,
          column: 3
        }
      },
      "9": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 15
        }
      },
      "10": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 45,
          column: 5
        }
      },
      "11": {
        start: {
          line: 41,
          column: 6
        },
        end: {
          line: 44,
          column: 8
        }
      },
      "12": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 58
        }
      },
      "13": {
        start: {
          line: 47,
          column: 31
        },
        end: {
          line: 47,
          column: 56
        }
      },
      "14": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 34
        }
      },
      "15": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "16": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 40
        }
      },
      "17": {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 55,
          column: 7
        }
      },
      "18": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 77
        }
      },
      "19": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 45
        }
      },
      "20": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 59
        }
      },
      "21": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 71,
          column: 5
        }
      },
      "22": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 70,
          column: 8
        }
      },
      "23": {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 18
        }
      },
      "24": {
        start: {
          line: 88,
          column: 36
        },
        end: {
          line: 88,
          column: 63
        }
      },
      "25": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 98,
          column: 70
        }
      },
      "26": {
        start: {
          line: 106,
          column: 17
        },
        end: {
          line: 106,
          column: 45
        }
      },
      "27": {
        start: {
          line: 107,
          column: 33
        },
        end: {
          line: 107,
          column: 35
        }
      },
      "28": {
        start: {
          line: 108,
          column: 2
        },
        end: {
          line: 111,
          column: 3
        }
      },
      "29": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 43
        }
      },
      "30": {
        start: {
          line: 112,
          column: 2
        },
        end: {
          line: 112,
          column: 13
        }
      },
      "31": {
        start: {
          line: 120,
          column: 2
        },
        end: {
          line: 122,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "withExponentialBackoff",
        decl: {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 11,
            column: 44
          }
        },
        loc: {
          start: {
            line: 22,
            column: 16
          },
          end: {
            line: 75,
            column: 1
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 47,
            column: 22
          },
          end: {
            line: 47,
            column: 23
          }
        },
        loc: {
          start: {
            line: 47,
            column: 31
          },
          end: {
            line: 47,
            column: 56
          }
        },
        line: 47
      },
      "2": {
        name: "implementsToString",
        decl: {
          start: {
            line: 94,
            column: 16
          },
          end: {
            line: 94,
            column: 34
          }
        },
        loc: {
          start: {
            line: 97,
            column: 33
          },
          end: {
            line: 99,
            column: 1
          }
        },
        line: 97
      },
      "3": {
        name: "processSpecEntryStream",
        decl: {
          start: {
            line: 105,
            column: 16
          },
          end: {
            line: 105,
            column: 38
          }
        },
        loc: {
          start: {
            line: 105,
            column: 55
          },
          end: {
            line: 113,
            column: 1
          }
        },
        line: 105
      },
      "4": {
        name: "getAccount",
        decl: {
          start: {
            line: 116,
            column: 22
          },
          end: {
            line: 116,
            column: 32
          }
        },
        loc: {
          start: {
            line: 119,
            column: 20
          },
          end: {
            line: 123,
            column: 1
          }
        },
        line: 119
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 19,
            column: 25
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 19,
            column: 22
          },
          end: {
            line: 19,
            column: 25
          }
        }],
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 17
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 21,
            column: 12
          },
          end: {
            line: 21,
            column: 17
          }
        }],
        line: 21
      },
      "2": {
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 69
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 69
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
        line: 27
      },
      "3": {
        loc: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 35,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 34,
            column: 26
          }
        }, {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 48
          }
        }],
        line: 34
      },
      "4": {
        loc: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 45,
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
        line: 39
      },
      "5": {
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
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 50
      },
      "6": {
        loc: {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 55,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 55,
            column: 7
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
        line: 52
      },
      "7": {
        loc: {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 71,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 71,
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
        line: 61
      },
      "8": {
        loc: {
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 61,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 61,
            column: 8
          },
          end: {
            line: 61,
            column: 15
          }
        }, {
          start: {
            line: 61,
            column: 19
          },
          end: {
            line: 61,
            column: 63
          }
        }],
        line: 61
      },
      "9": {
        loc: {
          start: {
            line: 98,
            column: 9
          },
          end: {
            line: 98,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 98,
            column: 9
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
            column: 48
          }
        }, {
          start: {
            line: 98,
            column: 52
          },
          end: {
            line: 98,
            column: 69
          }
        }],
        line: 98
      },
      "10": {
        loc: {
          start: {
            line: 120,
            column: 9
          },
          end: {
            line: 122,
            column: 36
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 121,
            column: 42
          }
        }, {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 122,
            column: 36
          }
        }],
        line: 120
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
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
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
      "1": [0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0, 0],
      "10": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dc05fe0b61706f0bd8d3d8265f424362be16031c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_168q2eib0h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_168q2eib0h();
/**
 * Keep calling a `fn` for `timeoutInSeconds` seconds, if `keepWaitingIf` is
 * true. Returns an array of all attempts to call the function.
 * @private
 */
async function withExponentialBackoff(/** Function to call repeatedly */
fn, /** Condition to check when deciding whether or not to call `fn` again */
keepWaitingIf, /** How long to wait between the first and second call */
timeoutInSeconds, /** What to multiply `timeoutInSeconds` by, each subsequent attempt */
exponentialFactor = (cov_168q2eib0h().b[0][0]++, 1.5), /** Whether to log extra info */
verbose = (cov_168q2eib0h().b[1][0]++, false)) {
  cov_168q2eib0h().f[0]++;
  const attempts = (cov_168q2eib0h().s[0]++, []);
  let count = (cov_168q2eib0h().s[1]++, 0);
  cov_168q2eib0h().s[2]++;
  attempts.push(await fn());
  cov_168q2eib0h().s[3]++;
  if (!keepWaitingIf(attempts[attempts.length - 1])) {
    cov_168q2eib0h().b[2][0]++;
    cov_168q2eib0h().s[4]++;
    return attempts;
  } else {
    cov_168q2eib0h().b[2][1]++;
  }
  const waitUntil = (cov_168q2eib0h().s[5]++, new Date(Date.now() + timeoutInSeconds * 1000).valueOf());
  let waitTime = (cov_168q2eib0h().s[6]++, 1000);
  let totalWaitTime = (cov_168q2eib0h().s[7]++, waitTime);
  cov_168q2eib0h().s[8]++;
  while ((cov_168q2eib0h().b[3][0]++, Date.now() < waitUntil) && (cov_168q2eib0h().b[3][1]++, keepWaitingIf(attempts[attempts.length - 1]))) {
    cov_168q2eib0h().s[9]++;
    count += 1;
    // Wait a beat
    cov_168q2eib0h().s[10]++;
    if (verbose) {
      cov_168q2eib0h().b[4][0]++;
      cov_168q2eib0h().s[11]++;
      // eslint-disable-next-line no-console
      console.info(`Waiting ${waitTime}ms before trying again (bringing the total wait time to ${totalWaitTime}ms so far, of total ${timeoutInSeconds * 1000}ms)`);
    } else {
      cov_168q2eib0h().b[4][1]++;
    }
    // eslint-disable-next-line
    cov_168q2eib0h().s[12]++;
    await new Promise(res => {
      cov_168q2eib0h().f[1]++;
      cov_168q2eib0h().s[13]++;
      return setTimeout(res, waitTime);
    });
    // Exponential backoff
    cov_168q2eib0h().s[14]++;
    waitTime *= exponentialFactor;
    cov_168q2eib0h().s[15]++;
    if (new Date(Date.now() + waitTime).valueOf() > waitUntil) {
      cov_168q2eib0h().b[5][0]++;
      cov_168q2eib0h().s[16]++;
      waitTime = waitUntil - Date.now();
      cov_168q2eib0h().s[17]++;
      if (verbose) {
        cov_168q2eib0h().b[6][0]++;
        cov_168q2eib0h().s[18]++;
        // eslint-disable-next-line no-console
        console.info(`was gonna wait too long; new waitTime: ${waitTime}ms`);
      } else {
        cov_168q2eib0h().b[6][1]++;
      }
    } else {
      cov_168q2eib0h().b[5][1]++;
    }
    cov_168q2eib0h().s[19]++;
    totalWaitTime = waitTime + totalWaitTime;
    // Try again
    // eslint-disable-next-line no-await-in-loop
    cov_168q2eib0h().s[20]++;
    attempts.push(await fn(attempts[attempts.length - 1]));
    cov_168q2eib0h().s[21]++;
    if ((cov_168q2eib0h().b[8][0]++, verbose) && (cov_168q2eib0h().b[8][1]++, keepWaitingIf(attempts[attempts.length - 1]))) {
      cov_168q2eib0h().b[7][0]++;
      cov_168q2eib0h().s[22]++;
      // eslint-disable-next-line no-console
      console.info(`${count}. Called ${fn}; ${attempts.length} prev attempts. Most recent: ${JSON.stringify(attempts[attempts.length - 1], null, 2)}`);
    } else {
      cov_168q2eib0h().b[7][1]++;
    }
  }
  cov_168q2eib0h().s[23]++;
  return attempts;
}

/**
 * If contracts are implemented using the `#[contracterror]` macro, then the
 * errors get included in the on-chain XDR that also describes your contract's
 * methods. Each error will have a specific number. This Regular Expression
 * matches these "expected error types" that a contract may throw, and helps
 * {@link AssembledTransaction} parse these errors.
 *
 * @constant {RegExp}
 * @default "/Error\(Contract, #(\d+)\)/"
 * @memberof module:contract.Client
 */
const contractErrorPattern = exports.contractErrorPattern = (cov_168q2eib0h().s[24]++, /Error\(Contract, #(\d+)\)/);

/**
 * A TypeScript type guard that checks if an object has a `toString` method.
 * @private
 */
function implementsToString(/** some object that may or may not have a `toString` method */
obj) {
  cov_168q2eib0h().f[2]++;
  cov_168q2eib0h().s[25]++;
  return (cov_168q2eib0h().b[9][0]++, typeof obj === "object") && (cov_168q2eib0h().b[9][1]++, obj !== null) && (cov_168q2eib0h().b[9][2]++, "toString" in obj);
}

/**
 * Reads a binary stream of ScSpecEntries into an array for processing by ContractSpec
 * @private
 */
function processSpecEntryStream(buffer) {
  cov_168q2eib0h().f[3]++;
  const reader = (cov_168q2eib0h().s[26]++, new _stellarBase.cereal.XdrReader(buffer));
  const res = (cov_168q2eib0h().s[27]++, []);
  cov_168q2eib0h().s[28]++;
  while (!reader.eof) {
    cov_168q2eib0h().s[29]++;
    // @ts-ignore
    res.push(_stellarBase.xdr.ScSpecEntry.read(reader));
  }
  cov_168q2eib0h().s[30]++;
  return res;
}

//eslint-disable-next-line require-await
async function getAccount(options, server) {
  cov_168q2eib0h().f[4]++;
  cov_168q2eib0h().s[31]++;
  return options.publicKey ? (cov_168q2eib0h().b[10][0]++, server.getAccount(options.publicKey)) : (cov_168q2eib0h().b[10][1]++, new _stellarBase.Account(_types.NULL_ACCOUNT, "0"));
}