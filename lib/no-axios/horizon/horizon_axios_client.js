"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SERVER_TIME_MAP = exports.AxiosClient = void 0;
exports.getCurrentServerTime = getCurrentServerTime;
exports.version = void 0;
var _urijs = _interopRequireDefault(require("urijs"));
var _httpClient = require("../http-client");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_19a0q4dxrs() {
  var path = "/mnt/g/stellar-sdk/src/horizon/horizon_axios_client.ts";
  var hash = "d6cd670cbcd1176004239df14d43f9aa9be8021f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/horizon_axios_client.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 23
        },
        end: {
          line: 7,
          column: 42
        }
      },
      "1": {
        start: {
          line: 31,
          column: 59
        },
        end: {
          line: 31,
          column: 61
        }
      },
      "2": {
        start: {
          line: 33,
          column: 27
        },
        end: {
          line: 38,
          column: 2
        }
      },
      "3": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 31
        }
      },
      "4": {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 69,
          column: 2
        }
      },
      "5": {
        start: {
          line: 46,
          column: 21
        },
        end: {
          line: 46,
          column: 57
        }
      },
      "6": {
        start: {
          line: 47,
          column: 21
        },
        end: {
          line: 47,
          column: 22
        }
      },
      "7": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 58,
          column: 5
        }
      },
      "8": {
        start: {
          line: 49,
          column: 25
        },
        end: {
          line: 49,
          column: 53
        }
      },
      "9": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 52,
          column: 7
        }
      },
      "10": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 55
        }
      },
      "11": {
        start: {
          line: 53,
          column: 11
        },
        end: {
          line: 58,
          column: 5
        }
      },
      "12": {
        start: {
          line: 54,
          column: 22
        },
        end: {
          line: 54,
          column: 61
        }
      },
      "13": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 57,
          column: 7
        }
      },
      "14": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 56,
          column: 57
        }
      },
      "15": {
        start: {
          line: 59,
          column: 30
        },
        end: {
          line: 59,
          column: 61
        }
      },
      "16": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 66,
          column: 5
        }
      },
      "17": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 65,
          column: 8
        }
      },
      "18": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 67,
          column: 20
        }
      },
      "19": {
        start: {
          line: 85,
          column: 16
        },
        end: {
          line: 85,
          column: 41
        }
      },
      "20": {
        start: {
          line: 87,
          column: 2
        },
        end: {
          line: 89,
          column: 3
        }
      },
      "21": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 16
        }
      },
      "22": {
        start: {
          line: 91,
          column: 44
        },
        end: {
          line: 91,
          column: 49
        }
      },
      "23": {
        start: {
          line: 92,
          column: 22
        },
        end: {
          line: 92,
          column: 53
        }
      },
      "24": {
        start: {
          line: 95,
          column: 2
        },
        end: {
          line: 97,
          column: 3
        }
      },
      "25": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 96,
          column: 16
        }
      },
      "26": {
        start: {
          line: 99,
          column: 2
        },
        end: {
          line: 99,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "toSeconds",
        decl: {
          start: {
            line: 40,
            column: 9
          },
          end: {
            line: 40,
            column: 18
          }
        },
        loc: {
          start: {
            line: 40,
            column: 39
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 40
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 16
          },
          end: {
            line: 68,
            column: 3
          }
        },
        line: 45
      },
      "2": {
        name: "getCurrentServerTime",
        decl: {
          start: {
            line: 84,
            column: 16
          },
          end: {
            line: 84,
            column: 36
          }
        },
        loc: {
          start: {
            line: 84,
            column: 70
          },
          end: {
            line: 100,
            column: 1
          }
        },
        line: 84
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
            line: 58,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 58,
            column: 5
          }
        }, {
          start: {
            line: 53,
            column: 11
          },
          end: {
            line: 58,
            column: 5
          }
        }],
        line: 48
      },
      "1": {
        loc: {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 52,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 52,
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
        line: 50
      },
      "2": {
        loc: {
          start: {
            line: 53,
            column: 11
          },
          end: {
            line: 58,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 11
          },
          end: {
            line: 58,
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
        line: 53
      },
      "3": {
        loc: {
          start: {
            line: 53,
            column: 15
          },
          end: {
            line: 53,
            column: 81
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 53,
            column: 15
          },
          end: {
            line: 53,
            column: 51
          }
        }, {
          start: {
            line: 53,
            column: 55
          },
          end: {
            line: 53,
            column: 81
          }
        }],
        line: 53
      },
      "4": {
        loc: {
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 57,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 57,
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
        line: 55
      },
      "5": {
        loc: {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 66,
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
            line: 66,
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
      "6": {
        loc: {
          start: {
            line: 87,
            column: 2
          },
          end: {
            line: 89,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 87,
            column: 2
          },
          end: {
            line: 89,
            column: 3
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
        line: 87
      },
      "7": {
        loc: {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 12
          }
        }, {
          start: {
            line: 87,
            column: 16
          },
          end: {
            line: 87,
            column: 40
          }
        }, {
          start: {
            line: 87,
            column: 44
          },
          end: {
            line: 87,
            column: 61
          }
        }],
        line: 87
      },
      "8": {
        loc: {
          start: {
            line: 95,
            column: 2
          },
          end: {
            line: 97,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 95,
            column: 2
          },
          end: {
            line: 97,
            column: 3
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
        line: 95
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
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d6cd670cbcd1176004239df14d43f9aa9be8021f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19a0q4dxrs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_19a0q4dxrs();
/* eslint-disable global-require */
// eslint-disable-next-line prefer-import/prefer-import-over-require , @typescript-eslint/naming-convention

const version = exports.version = (cov_19a0q4dxrs().s[0]++, "13.0.0-beta.1");
/**
 * keep a local map of server times
 * (export this purely for testing purposes)
 *
 * each entry will map the server domain to the last-known time and the local
 * time it was recorded, ex:
 *
 * @example
 * "horizon-testnet.stellar.org": {
 *   serverTime: 1552513039,
 *   localTimeRecorded: 1552513052
 * }
 *
 * @constant {Record.<string, ServerTime>}
 * @default {}
 * @memberof module:Horizon
 */
const SERVER_TIME_MAP = exports.SERVER_TIME_MAP = (cov_19a0q4dxrs().s[1]++, {});
const AxiosClient = exports.AxiosClient = (cov_19a0q4dxrs().s[2]++, (0, _httpClient.create)({
  headers: {
    "X-Client-Name": "js-stellar-sdk",
    "X-Client-Version": version
  }
}));
function toSeconds(ms) {
  cov_19a0q4dxrs().f[0]++;
  cov_19a0q4dxrs().s[3]++;
  return Math.floor(ms / 1000);
}
cov_19a0q4dxrs().s[4]++;
AxiosClient.interceptors.response.use(response => {
  cov_19a0q4dxrs().f[1]++;
  const hostname = (cov_19a0q4dxrs().s[5]++, (0, _urijs.default)(response.config.url).hostname());
  let serverTime = (cov_19a0q4dxrs().s[6]++, 0);
  cov_19a0q4dxrs().s[7]++;
  if (response.headers instanceof Headers) {
    cov_19a0q4dxrs().b[0][0]++;
    const dateHeader = (cov_19a0q4dxrs().s[8]++, response.headers.get('date'));
    cov_19a0q4dxrs().s[9]++;
    if (dateHeader) {
      cov_19a0q4dxrs().b[1][0]++;
      cov_19a0q4dxrs().s[10]++;
      serverTime = toSeconds(Date.parse(dateHeader));
    } else {
      cov_19a0q4dxrs().b[1][1]++;
    }
  } else {
    cov_19a0q4dxrs().b[0][1]++;
    cov_19a0q4dxrs().s[11]++;
    if ((cov_19a0q4dxrs().b[3][0]++, typeof response.headers === 'object') && (cov_19a0q4dxrs().b[3][1]++, 'date' in response.headers)) {
      cov_19a0q4dxrs().b[2][0]++;
      const headers = (cov_19a0q4dxrs().s[12]++, response.headers); // Cast response.headers to the correct type
      cov_19a0q4dxrs().s[13]++;
      if (typeof headers.date === 'string') {
        cov_19a0q4dxrs().b[4][0]++;
        cov_19a0q4dxrs().s[14]++;
        serverTime = toSeconds(Date.parse(headers.date));
      } else {
        cov_19a0q4dxrs().b[4][1]++;
      }
    } else {
      cov_19a0q4dxrs().b[2][1]++;
    }
  }
  const localTimeRecorded = (cov_19a0q4dxrs().s[15]++, toSeconds(new Date().getTime()));
  cov_19a0q4dxrs().s[16]++;
  if (!Number.isNaN(serverTime)) {
    cov_19a0q4dxrs().b[5][0]++;
    cov_19a0q4dxrs().s[17]++;
    SERVER_TIME_MAP[hostname] = {
      serverTime,
      localTimeRecorded
    };
  } else {
    cov_19a0q4dxrs().b[5][1]++;
  }
  cov_19a0q4dxrs().s[18]++;
  return response;
});
var _default = exports.default = AxiosClient;
/**
 * Given a hostname, get the current time of that server (i.e., use the last-
 * recorded server time and offset it by the time since then.) If there IS no
 * recorded server time, or it's been 5 minutes since the last, return null.
 * @memberof module:Horizon
 *
 * @param {string} hostname Hostname of a Horizon server.
 * @returns {number} The UNIX timestamp (in seconds, not milliseconds)
 * representing the current time on that server, or `null` if we don't have
 * a record of that time.
 */
function getCurrentServerTime(hostname) {
  cov_19a0q4dxrs().f[2]++;
  const entry = (cov_19a0q4dxrs().s[19]++, SERVER_TIME_MAP[hostname]);
  cov_19a0q4dxrs().s[20]++;
  if ((cov_19a0q4dxrs().b[7][0]++, !entry) || (cov_19a0q4dxrs().b[7][1]++, !entry.localTimeRecorded) || (cov_19a0q4dxrs().b[7][2]++, !entry.serverTime)) {
    cov_19a0q4dxrs().b[6][0]++;
    cov_19a0q4dxrs().s[21]++;
    return null;
  } else {
    cov_19a0q4dxrs().b[6][1]++;
  }
  const {
    serverTime,
    localTimeRecorded
  } = (cov_19a0q4dxrs().s[22]++, entry);
  const currentTime = (cov_19a0q4dxrs().s[23]++, toSeconds(new Date().getTime()));

  // if it's been more than 5 minutes from the last time, then null it out
  cov_19a0q4dxrs().s[24]++;
  if (currentTime - localTimeRecorded > 60 * 5) {
    cov_19a0q4dxrs().b[8][0]++;
    cov_19a0q4dxrs().s[25]++;
    return null;
  } else {
    cov_19a0q4dxrs().b[8][1]++;
  }
  cov_19a0q4dxrs().s[26]++;
  return currentTime - localTimeRecorded + serverTime;
}