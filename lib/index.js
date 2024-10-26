"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Config: true,
  Utils: true,
  StellarToml: true,
  Federation: true,
  WebAuth: true,
  Friendbot: true,
  Horizon: true,
  rpc: true,
  SorobanRpc: true,
  contract: true
};
Object.defineProperty(exports, "Config", {
  enumerable: true,
  get: function () {
    return _config.Config;
  }
});
exports.StellarToml = exports.SorobanRpc = exports.Horizon = exports.Friendbot = exports.Federation = void 0;
Object.defineProperty(exports, "Utils", {
  enumerable: true,
  get: function () {
    return _utils.Utils;
  }
});
exports.rpc = exports.default = exports.contract = exports.WebAuth = void 0;
var _errors = require("./errors");
Object.keys(_errors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _errors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _errors[key];
    }
  });
});
var _config = require("./config");
var _utils = require("./utils");
var _StellarToml = _interopRequireWildcard(require("./stellartoml"));
exports.StellarToml = _StellarToml;
var _Federation = _interopRequireWildcard(require("./federation"));
exports.Federation = _Federation;
var _WebAuth = _interopRequireWildcard(require("./webauth"));
exports.WebAuth = _WebAuth;
var _Friendbot = _interopRequireWildcard(require("./friendbot"));
exports.Friendbot = _Friendbot;
var _Horizon = _interopRequireWildcard(require("./horizon"));
exports.Horizon = _Horizon;
var _rpc = _interopRequireWildcard(require("./rpc"));
var _SorobanRpc = _rpc;
exports.rpc = _rpc;
exports.SorobanRpc = _rpc;
var _contract = _interopRequireWildcard(require("./contract"));
exports.contract = _contract;
var _stellarBase = require("@stellar/stellar-base");
Object.keys(_stellarBase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _stellarBase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _stellarBase[key];
    }
  });
});
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function cov_21oum2murw() {
  var path = "/mnt/g/stellar-sdk/src/index.ts";
  var hash = "cede4982cdf75826089b7212f801930be0e7626d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 52,
          column: 0
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "1": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 41
        }
      },
      "2": {
        start: {
          line: 56,
          column: 0
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "3": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 48
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 52,
            column: 0
          },
          end: {
            line: 54,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 0
          },
          end: {
            line: 54,
            column: 1
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
      "1": {
        loc: {
          start: {
            line: 56,
            column: 0
          },
          end: {
            line: 58,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 0
          },
          end: {
            line: 58,
            column: 1
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
        line: 56
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cede4982cdf75826089b7212f801930be0e7626d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_21oum2murw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_21oum2murw(); // tslint:disable-next-line: no-reference
/// <reference path="../types/dom-monkeypatch.d.ts" />
// Expose all types
// TOML (SEP-1), Federation (SEP-2), and WebAuth (SEP-10) helpers to expose
// Horizon-related classes to expose
/**
 * Tools for interacting with the Soroban RPC server, such as `Server`,
 * `assembleTransaction`, and the `Api` types. You can import these from the
 * `/rpc` entrypoint, if your version of Node and your TypeScript configuration
 * allow it:
 *
 * @example
 * import { Server } from '@stellar/stellar-sdk/rpc';
 */
/**
 * @deprecated Use `rpc` instead
 */
/**
 * Tools for interacting with smart contracts, such as `Client`, `Spec`, and
 * `AssembledTransaction`. You can import these from the `/contract`
 * entrypoint, if your version of Node and your TypeScript configuration allow
 * it:
 *
 * @example
 * import { Client } from '@stellar/stellar-sdk/contract';
 * @private
 */
// expose classes and functions from stellar-base
var _default = exports.default = module.exports;
cov_21oum2murw().s[0]++;
if (typeof global.__USE_AXIOS__ === 'undefined') {
  cov_21oum2murw().b[0][0]++;
  cov_21oum2murw().s[1]++;
  global.__USE_AXIOS__ = true;
} else {
  cov_21oum2murw().b[0][1]++;
}
cov_21oum2murw().s[2]++;
if (typeof global.__USE_EVENTSOURCE__ === 'undefined') {
  cov_21oum2murw().b[1][0]++;
  cov_21oum2murw().s[3]++;
  global.__USE_EVENTSOURCE__ = false;
} else {
  cov_21oum2murw().b[1][1]++;
}