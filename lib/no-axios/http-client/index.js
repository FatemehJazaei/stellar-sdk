"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  httpClient: true,
  create: true
};
exports.httpClient = exports.create = void 0;
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
function cov_fmhtrp2db() {
  var path = "/mnt/g/stellar-sdk/src/http-client/index.ts";
  var hash = "7457d74269cc33b2115769a9d9a9e90048b582e3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/http-client/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 16,
          column: 22
        },
        end: {
          line: 16,
          column: 47
        }
      },
      "2": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 39
        }
      },
      "3": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 30
        }
      },
      "4": {
        start: {
          line: 21,
          column: 22
        },
        end: {
          line: 21,
          column: 47
        }
      },
      "5": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 39
        }
      },
      "6": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 30
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 0
          },
          end: {
            line: 24,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 0
          },
          end: {
            line: 24,
            column: 1
          }
        }, {
          start: {
            line: 19,
            column: 7
          },
          end: {
            line: 24,
            column: 1
          }
        }],
        line: 14
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
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7457d74269cc33b2115769a9d9a9e90048b582e3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_fmhtrp2db = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_fmhtrp2db();
// eslint-disable-next-line import/no-mutable-exports
let httpClient = exports.httpClient = void 0;
// eslint-disable-next-line import/no-mutable-exports
let create = exports.create = void 0;

// Declare a variable that will be set by the entrypoint
// eslint-disable-next-line @typescript-eslint/naming-convention
// Use the variable for the runtime check
// eslint-disable-next-line no-lonely-if
cov_fmhtrp2db().s[0]++;
if (false) {
  cov_fmhtrp2db().b[0][0]++;
  // eslint-disable-next-line global-require, prefer-import/prefer-import-over-require
  const axiosModule = (cov_fmhtrp2db().s[1]++, require('./axios-client'));
  cov_fmhtrp2db().s[2]++;
  exports.httpClient = httpClient = axiosModule.axiosClient;
  cov_fmhtrp2db().s[3]++;
  exports.create = create = axiosModule.create;
} else {
  cov_fmhtrp2db().b[0][1]++;
  // eslint-disable-next-line global-require, prefer-import/prefer-import-over-require
  const fetchModule = (cov_fmhtrp2db().s[4]++, require('./fetch-client'));
  cov_fmhtrp2db().s[5]++;
  exports.httpClient = httpClient = fetchModule.fetchClient;
  cov_fmhtrp2db().s[6]++;
  exports.create = create = fetchModule.create;
}