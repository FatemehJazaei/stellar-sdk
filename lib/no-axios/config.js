"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = void 0;
function cov_9k0o34p9h() {
  var path = "/mnt/g/stellar-sdk/src/config.ts";
  var hash = "c3acafca244ac73056a074f1fcec23fb6fd0787e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/config.ts",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 37
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 13
        },
        end: {
          line: 22,
          column: 32
        }
      },
      "2": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 29
        }
      },
      "3": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 27
        }
      },
      "4": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 28
        }
      },
      "5": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 26
        }
      },
      "6": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 33
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
            line: 46,
            column: 51
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 46
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 48
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 56
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        loc: {
          start: {
            line: 65,
            column: 39
          },
          end: {
            line: 67,
            column: 3
          }
        },
        line: 65
      },
      "3": {
        name: "(anonymous_3)",
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
            line: 76,
            column: 3
          }
        },
        line: 74
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 35
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 82
      }
    },
    branchMap: {},
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
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c3acafca244ac73056a074f1fcec23fb6fd0787e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9k0o34p9h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_9k0o34p9h();
/**
 * Global config parameters.
 */

const defaultConfig = (cov_9k0o34p9h().s[0]++, {
  allowHttp: false,
  timeout: 0
});
let config = (cov_9k0o34p9h().s[1]++, {
  ...defaultConfig
});

/**
 * Global config class.
 *
 * @hideconstructor
 *
 * @example <caption>Usage in node</caption>
 * import { Config } from '@stellar/stellar-sdk';
 * Config.setAllowHttp(true);
 * Config.setTimeout(5000);
 *
 * @example <caption>Usage in the browser</caption>
 * StellarSdk.Config.setAllowHttp(true);
 * StellarSdk.Config.setTimeout(5000);
 */
class Config {
  /**
   * Sets `allowHttp` flag globally. When set to `true`, connections to insecure
   * http protocol servers will be allowed. Must be set to `false` in
   * production.
   * @default false
   * @static
   */
  static setAllowHttp(value) {
    cov_9k0o34p9h().f[0]++;
    cov_9k0o34p9h().s[2]++;
    config.allowHttp = value;
  }

  /**
   * Sets `timeout` flag globally. When set to anything besides 0, the request
   * will timeout after specified time (ms).
   * @default 0
   * @static
   */
  static setTimeout(value) {
    cov_9k0o34p9h().f[1]++;
    cov_9k0o34p9h().s[3]++;
    config.timeout = value;
  }

  /**
   * Returns the configured `allowHttp` flag.
   * @static
   * @returns {boolean}
   */
  static isAllowHttp() {
    cov_9k0o34p9h().f[2]++;
    cov_9k0o34p9h().s[4]++;
    return config.allowHttp;
  }

  /**
   * Returns the configured `timeout` flag.
   * @static
   * @returns {number}
   */
  static getTimeout() {
    cov_9k0o34p9h().f[3]++;
    cov_9k0o34p9h().s[5]++;
    return config.timeout;
  }

  /**
   * Sets all global config flags to default values.
   * @static
   */
  static setDefault() {
    cov_9k0o34p9h().f[4]++;
    cov_9k0o34p9h().s[6]++;
    config = {
      ...defaultConfig
    };
  }
}
exports.Config = Config;