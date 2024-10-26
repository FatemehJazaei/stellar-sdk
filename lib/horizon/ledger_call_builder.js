"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LedgerCallBuilder = void 0;
var _call_builder = require("./call_builder");
function cov_n6jq74era() {
  var path = "/mnt/g/stellar-sdk/src/horizon/ledger_call_builder.ts";
  var hash = "d1b9c8db742e4471de3ba6c618797cdb138ae513";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/ledger_call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 21
        }
      },
      "1": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 32
        }
      },
      "2": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 55
        }
      },
      "3": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 16
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
            line: 19,
            column: 30
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 49
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 29
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d1b9c8db742e4471de3ba6c618797cdb138ae513"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_n6jq74era = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_n6jq74era();
/**
 * Creates a new {@link LedgerCallBuilder} pointed to server defined by serverUrl.
 *
 * Do not create this object directly, use {@link Horizon.Server#ledgers}.
 *
 * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/list-all-ledgers|All Ledgers}
 *
 * @augments CallBuilder
 * @private
 * @class
 * @param {string} serverUrl Horizon server URL.
 */
class LedgerCallBuilder extends _call_builder.CallBuilder {
  constructor(serverUrl) {
    cov_n6jq74era().f[0]++;
    cov_n6jq74era().s[0]++;
    super(serverUrl);
    cov_n6jq74era().s[1]++;
    this.url.segment("ledgers");
  }

  /**
   * Provides information on a single ledger.
   * @param {number|string} sequence Ledger sequence
   * @returns {LedgerCallBuilder} current LedgerCallBuilder instance
   */
  ledger(sequence) {
    cov_n6jq74era().f[1]++;
    cov_n6jq74era().s[2]++;
    this.filter.push(["ledgers", sequence.toString()]);
    cov_n6jq74era().s[3]++;
    return this;
  }
}
exports.LedgerCallBuilder = LedgerCallBuilder;