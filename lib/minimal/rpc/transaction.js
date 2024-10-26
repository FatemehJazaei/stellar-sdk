"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assembleTransaction = assembleTransaction;
var _stellarBase = require("@stellar/stellar-base");
var _api = require("./api");
var _parsers = require("./parsers");
function cov_1xfaveokye() {
  var path = "/mnt/g/stellar-sdk/src/rpc/transaction.ts";
  var hash = "2eb5e4c80026ca5b72580626444e42a564ffdc4c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/rpc/transaction.ts",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "1": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "3": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 18
        }
      },
      "4": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 19
        }
      },
      "5": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "6": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 57,
          column: 6
        }
      },
      "7": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 66,
          column: 3
        }
      },
      "8": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 65,
          column: 6
        }
      },
      "9": {
        start: {
          line: 68,
          column: 18
        },
        end: {
          line: 68,
          column: 48
        }
      },
      "10": {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 71,
          column: 3
        }
      },
      "11": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 72
        }
      },
      "12": {
        start: {
          line: 74,
          column: 24
        },
        end: {
          line: 74,
          column: 46
        }
      },
      "13": {
        start: {
          line: 75,
          column: 28
        },
        end: {
          line: 75,
          column: 65
        }
      },
      "14": {
        start: {
          line: 76,
          column: 21
        },
        end: {
          line: 89,
          column: 4
        }
      },
      "15": {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 109,
          column: 3
        }
      },
      "16": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 33
        }
      },
      "17": {
        start: {
          line: 95,
          column: 51
        },
        end: {
          line: 95,
          column: 68
        }
      },
      "18": {
        start: {
          line: 96,
          column: 25
        },
        end: {
          line: 96,
          column: 44
        }
      },
      "19": {
        start: {
          line: 97,
          column: 4
        },
        end: {
          line: 108,
          column: 6
        }
      },
      "20": {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 111,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "isSorobanTransaction",
        decl: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 29
          }
        },
        loc: {
          start: {
            line: 11,
            column: 56
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "assembleTransaction",
        decl: {
          start: {
            line: 46,
            column: 16
          },
          end: {
            line: 46,
            column: 35
          }
        },
        loc: {
          start: {
            line: 51,
            column: 22
          },
          end: {
            line: 112,
            column: 1
          }
        },
        line: 51
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 14,
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
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 30
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 30
          }
        }, {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 20,
            column: 18
          }
        }, {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 23,
            column: 19
          }
        }],
        line: 16
      },
      "2": {
        loc: {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 58,
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
        line: 52
      },
      "3": {
        loc: {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 66,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 66,
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
        line: 60
      },
      "4": {
        loc: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 71,
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
        line: 69
      },
      "5": {
        loc: {
          start: {
            line: 74,
            column: 24
          },
          end: {
            line: 74,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 74,
            column: 24
          },
          end: {
            line: 74,
            column: 41
          }
        }, {
          start: {
            line: 74,
            column: 45
          },
          end: {
            line: 74,
            column: 46
          }
        }],
        line: 74
      },
      "6": {
        loc: {
          start: {
            line: 75,
            column: 28
          },
          end: {
            line: 75,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 75,
            column: 28
          },
          end: {
            line: 75,
            column: 60
          }
        }, {
          start: {
            line: 75,
            column: 64
          },
          end: {
            line: 75,
            column: 65
          }
        }],
        line: 75
      },
      "7": {
        loc: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 109,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 109,
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
        line: 91
      },
      "8": {
        loc: {
          start: {
            line: 96,
            column: 25
          },
          end: {
            line: 96,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 96,
            column: 25
          },
          end: {
            line: 96,
            column: 38
          }
        }, {
          start: {
            line: 96,
            column: 42
          },
          end: {
            line: 96,
            column: 44
          }
        }],
        line: 96
      },
      "9": {
        loc: {
          start: {
            line: 106,
            column: 14
          },
          end: {
            line: 106,
            column: 75
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 106,
            column: 40
          },
          end: {
            line: 106,
            column: 52
          }
        }, {
          start: {
            line: 106,
            column: 55
          },
          end: {
            line: 106,
            column: 75
          }
        }],
        line: 106
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
      "20": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2eb5e4c80026ca5b72580626444e42a564ffdc4c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1xfaveokye = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1xfaveokye();
function isSorobanTransaction(tx) {
  cov_1xfaveokye().f[0]++;
  cov_1xfaveokye().s[0]++;
  if (tx.operations.length !== 1) {
    cov_1xfaveokye().b[0][0]++;
    cov_1xfaveokye().s[1]++;
    return false;
  } else {
    cov_1xfaveokye().b[0][1]++;
  }
  cov_1xfaveokye().s[2]++;
  switch (tx.operations[0].type) {
    case 'invokeHostFunction':
      cov_1xfaveokye().b[1][0]++;
    case 'extendFootprintTtl':
      cov_1xfaveokye().b[1][1]++;
    case 'restoreFootprint':
      cov_1xfaveokye().b[1][2]++;
      cov_1xfaveokye().s[3]++;
      return true;
    default:
      cov_1xfaveokye().b[1][3]++;
      cov_1xfaveokye().s[4]++;
      return false;
  }
}

/**
 * Combines the given raw transaction alongside the simulation results.
 * If the given transaction already has authorization entries in a host
 * function invocation (see {@link Operation.invokeHostFunction}), **the
 * simulation entries are ignored**.
 *
 * If the given transaction already has authorization entries in a host function
 * invocation (see {@link Operation.invokeHostFunction}), **the simulation
 * entries are ignored**.
 *
 * @param {Transaction|FeeBumpTransaction} raw the initial transaction, w/o simulation applied
 * @param {Api.SimulateTransactionResponse|Api.RawSimulateTransactionResponse} simulation the Soroban RPC simulation result (see {@link module:rpc.Server#simulateTransaction})
 * @returns {TransactionBuilder} a new, cloned transaction with the proper auth and resource (fee, footprint) simulation data applied
 *
 * @memberof module:rpc
 * @see {@link module:rpc.Server#simulateTransaction}
 * @see {@link module:rpc.Server#prepareTransaction}
 */
function assembleTransaction(raw, simulation) {
  cov_1xfaveokye().f[1]++;
  cov_1xfaveokye().s[5]++;
  if ('innerTransaction' in raw) {
    cov_1xfaveokye().b[2][0]++;
    cov_1xfaveokye().s[6]++;
    // TODO: Handle feebump transactions
    return assembleTransaction(raw.innerTransaction, simulation);
  } else {
    cov_1xfaveokye().b[2][1]++;
  }
  cov_1xfaveokye().s[7]++;
  if (!isSorobanTransaction(raw)) {
    cov_1xfaveokye().b[3][0]++;
    cov_1xfaveokye().s[8]++;
    throw new TypeError('unsupported transaction: must contain exactly one ' + 'invokeHostFunction, extendFootprintTtl, or restoreFootprint ' + 'operation');
  } else {
    cov_1xfaveokye().b[3][1]++;
  }
  const success = (cov_1xfaveokye().s[9]++, (0, _parsers.parseRawSimulation)(simulation));
  cov_1xfaveokye().s[10]++;
  if (!_api.Api.isSimulationSuccess(success)) {
    cov_1xfaveokye().b[4][0]++;
    cov_1xfaveokye().s[11]++;
    throw new Error(`simulation incorrect: ${JSON.stringify(success)}`);
  } else {
    cov_1xfaveokye().b[4][1]++;
  }

  /* eslint-disable radix */
  const classicFeeNum = (cov_1xfaveokye().s[12]++, (cov_1xfaveokye().b[5][0]++, parseInt(raw.fee)) || (cov_1xfaveokye().b[5][1]++, 0));
  const minResourceFeeNum = (cov_1xfaveokye().s[13]++, (cov_1xfaveokye().b[6][0]++, parseInt(success.minResourceFee)) || (cov_1xfaveokye().b[6][1]++, 0));
  const txnBuilder = (cov_1xfaveokye().s[14]++, _stellarBase.TransactionBuilder.cloneFrom(raw, {
    // automatically update the tx fee that will be set on the resulting tx to
    // the sum of 'classic' fee provided from incoming tx.fee and minResourceFee
    // provided by simulation.
    //
    // 'classic' tx fees are measured as the product of tx.fee * 'number of
    // operations', In soroban contract tx, there can only be single operation
    // in the tx, so can make simplification of total classic fees for the
    // soroban transaction will be equal to incoming tx.fee + minResourceFee.
    fee: (classicFeeNum + minResourceFeeNum).toString(),
    // apply the pre-built Soroban Tx Data from simulation onto the Tx
    sorobanData: success.transactionData.build(),
    networkPassphrase: raw.networkPassphrase
  }));
  cov_1xfaveokye().s[15]++;
  if (raw.operations[0].type === 'invokeHostFunction') {
    cov_1xfaveokye().b[7][0]++;
    cov_1xfaveokye().s[16]++;
    // In this case, we don't want to clone the operation, so we drop it.
    txnBuilder.clearOperations();
    const invokeOp = (cov_1xfaveokye().s[17]++, raw.operations[0]);
    const existingAuth = (cov_1xfaveokye().s[18]++, (cov_1xfaveokye().b[8][0]++, invokeOp.auth) ?? (cov_1xfaveokye().b[8][1]++, []));
    cov_1xfaveokye().s[19]++;
    txnBuilder.addOperation(_stellarBase.Operation.invokeHostFunction({
      source: invokeOp.source,
      func: invokeOp.func,
      // if auth entries are already present, we consider this "advanced
      // usage" and disregard ALL auth entries from the simulation
      //
      // the intuition is "if auth exists, this tx has probably been
      // simulated before"
      auth: existingAuth.length > 0 ? (cov_1xfaveokye().b[9][0]++, existingAuth) : (cov_1xfaveokye().b[9][1]++, success.result.auth)
    }));
  } else {
    cov_1xfaveokye().b[7][1]++;
  }
  cov_1xfaveokye().s[20]++;
  return txnBuilder;
}