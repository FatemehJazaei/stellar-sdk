"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.default = exports.AxiosClient = void 0;
var _httpClient = require("../http-client");
function cov_6c65rd9no() {
  var path = "/mnt/g/stellar-sdk/src/rpc/axios.ts";
  var hash = "b0a889ce6d4c93b2e305cbf9910e14bc0a2f9c02";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/rpc/axios.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 23
        },
        end: {
          line: 5,
          column: 42
        }
      },
      "1": {
        start: {
          line: 8,
          column: 39
        },
        end: {
          line: 13,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b0a889ce6d4c93b2e305cbf9910e14bc0a2f9c02"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6c65rd9no = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_6c65rd9no();
// eslint-disable-next-line prefer-import/prefer-import-over-require, global-require, @typescript-eslint/naming-convention

const version = exports.version = (cov_6c65rd9no().s[0]++, "13.0.0-beta.1");
const AxiosClient = exports.AxiosClient = (cov_6c65rd9no().s[1]++, (0, _httpClient.create)({
  headers: {
    'X-Client-Name': 'js-soroban-client',
    'X-Client-Version': version
  }
}));
var _default = exports.default = AxiosClient;