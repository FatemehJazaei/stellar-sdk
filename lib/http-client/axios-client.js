"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.axiosClient = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_2bsqbf0n7j() {
  var path = "/mnt/g/stellar-sdk/src/http-client/axios-client.ts";
  var hash = "11656c28be3349a29fc5cb2337ccaa0fb8ed0c51";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/http-client/axios-client.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 3,
          column: 32
        }
      },
      "1": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 34
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
    hash: "11656c28be3349a29fc5cb2337ccaa0fb8ed0c51"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2bsqbf0n7j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2bsqbf0n7j();
const axiosClient = exports.axiosClient = (cov_2bsqbf0n7j().s[0]++, _axios.default);
const create = exports.create = (cov_2bsqbf0n7j().s[1]++, _axios.default.create);