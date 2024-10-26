"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicNodeSigner = void 0;
var _stellarBase = require("@stellar/stellar-base");
function cov_2nukasbz15() {
  var path = "/mnt/g/stellar-sdk/src/contract/basic_node_signer.ts";
  var hash = "41f6708c5e186c19e1b4418f6157b0bd21943938";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/contract/basic_node_signer.ts",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 31
        },
        end: {
          line: 29,
          column: 2
        }
      },
      "1": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "2": {
        start: {
          line: 22,
          column: 14
        },
        end: {
          line: 22,
          column: 63
        }
      },
      "3": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 20
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 21
        }
      },
      "5": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 74
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 31
          },
          end: {
            line: 16,
            column: 32
          }
        },
        loc: {
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 19
          },
          end: {
            line: 21,
            column: 20
          }
        },
        loc: {
          start: {
            line: 21,
            column: 41
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 17
          },
          end: {
            line: 27,
            column: 18
          }
        },
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 74
          }
        },
        line: 28
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "41f6708c5e186c19e1b4418f6157b0bd21943938"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2nukasbz15 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2nukasbz15();
/**
 * For use with {@link Client} and {@link module:contract.AssembledTransaction}.
 * Implements `signTransaction` and `signAuthEntry` with signatures expected by
 * those classes. This is useful for testing and maybe some simple Node
 * applications. Feel free to use this as a starting point for your own
 * Wallet/TransactionSigner implementation.
 *
 * @memberof module:contract
 *
 * @param {Keypair} keypair {@link Keypair} to use to sign the transaction or auth entry
 * @param {string} networkPassphrase passphrase of network to sign for
 */
cov_2nukasbz15().s[0]++;
const basicNodeSigner = (keypair, networkPassphrase) => {
  cov_2nukasbz15().f[0]++;
  cov_2nukasbz15().s[1]++;
  return {
    // eslint-disable-next-line require-await
    signTransaction: async tx => {
      cov_2nukasbz15().f[1]++;
      const t = (cov_2nukasbz15().s[2]++, _stellarBase.TransactionBuilder.fromXDR(tx, networkPassphrase));
      cov_2nukasbz15().s[3]++;
      t.sign(keypair);
      cov_2nukasbz15().s[4]++;
      return t.toXDR();
    },
    // eslint-disable-next-line require-await
    signAuthEntry: async entryXdr => {
      cov_2nukasbz15().f[2]++;
      cov_2nukasbz15().s[5]++;
      return keypair.sign((0, _stellarBase.hash)(Buffer.from(entryXdr, "base64"))).toString("base64");
    }
  };
};
exports.basicNodeSigner = basicNodeSigner;