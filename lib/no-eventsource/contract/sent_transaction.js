"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SentTransaction = void 0;
var _rpc = require("../rpc");
var _api = require("../rpc/api");
var _utils = require("./utils");
var _types = require("./types");
function cov_18ndad8g33() {
  var path = "/mnt/g/stellar-sdk/src/contract/sent_transaction.ts";
  var hash = "af3fb3f7a0f3c297660203cea747e40edcf1682b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/contract/sent_transaction.ts",
    statementMap: {
      "0": {
        start: {
          line: 53,
          column: 18
        },
        end: {
          line: 57,
          column: 3
        }
      },
      "1": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 65,
          column: 7
        }
      },
      "2": {
        start: {
          line: 72,
          column: 16
        },
        end: {
          line: 81,
          column: 3
        }
      },
      "3": {
        start: {
          line: 78,
          column: 15
        },
        end: {
          line: 78,
          column: 56
        }
      },
      "4": {
        start: {
          line: 79,
          column: 17
        },
        end: {
          line: 79,
          column: 32
        }
      },
      "5": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 16
        }
      },
      "6": {
        start: {
          line: 83,
          column: 17
        },
        end: {
          line: 131,
          column: 3
        }
      },
      "7": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 86,
          column: 6
        }
      },
      "8": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 96,
          column: 5
        }
      },
      "9": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 95,
          column: 8
        }
      },
      "10": {
        start: {
          line: 98,
          column: 21
        },
        end: {
          line: 98,
          column: 49
        }
      },
      "11": {
        start: {
          line: 101,
          column: 6
        },
        end: {
          line: 101,
          column: 64
        }
      },
      "12": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 106,
          column: 6
        }
      },
      "13": {
        start: {
          line: 103,
          column: 12
        },
        end: {
          line: 103,
          column: 44
        }
      },
      "14": {
        start: {
          line: 104,
          column: 16
        },
        end: {
          line: 104,
          column: 66
        }
      },
      "15": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 109,
          column: 80
        }
      },
      "16": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 128,
          column: 5
        }
      },
      "17": {
        start: {
          line: 114,
          column: 6
        },
        end: {
          line: 127,
          column: 8
        }
      },
      "18": {
        start: {
          line: 130,
          column: 4
        },
        end: {
          line: 130,
          column: 16
        }
      },
      "19": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 146,
          column: 5
        }
      },
      "20": {
        start: {
          line: 137,
          column: 6
        },
        end: {
          line: 141,
          column: 7
        }
      },
      "21": {
        start: {
          line: 138,
          column: 8
        },
        end: {
          line: 140,
          column: 10
        }
      },
      "22": {
        start: {
          line: 145,
          column: 6
        },
        end: {
          line: 145,
          column: 66
        }
      },
      "23": {
        start: {
          line: 149,
          column: 4
        },
        end: {
          line: 159,
          column: 5
        }
      },
      "24": {
        start: {
          line: 150,
          column: 26
        },
        end: {
          line: 150,
          column: 76
        }
      },
      "25": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 155,
          column: 7
        }
      },
      "26": {
        start: {
          line: 152,
          column: 8
        },
        end: {
          line: 154,
          column: 10
        }
      },
      "27": {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 158,
          column: 8
        }
      },
      "28": {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 164,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 3
          }
        },
        loc: {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 62
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 72,
            column: 16
          },
          end: {
            line: 72,
            column: 17
          }
        },
        loc: {
          start: {
            line: 77,
            column: 36
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 77
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 83,
            column: 17
          },
          end: {
            line: 83,
            column: 18
          }
        },
        loc: {
          start: {
            line: 83,
            column: 44
          },
          end: {
            line: 131,
            column: 3
          }
        },
        line: 83
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 103,
            column: 7
          }
        },
        loc: {
          start: {
            line: 103,
            column: 12
          },
          end: {
            line: 103,
            column: 44
          }
        },
        line: 103
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 104,
            column: 6
          },
          end: {
            line: 104,
            column: 7
          }
        },
        loc: {
          start: {
            line: 104,
            column: 16
          },
          end: {
            line: 104,
            column: 66
          }
        },
        line: 104
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 133,
            column: 2
          },
          end: {
            line: 133,
            column: 3
          }
        },
        loc: {
          start: {
            line: 133,
            column: 18
          },
          end: {
            line: 165,
            column: 3
          }
        },
        line: 133
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 64,
            column: 17
          },
          end: {
            line: 64,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 64,
            column: 17
          },
          end: {
            line: 64,
            column: 49
          }
        }, {
          start: {
            line: 64,
            column: 53
          },
          end: {
            line: 64,
            column: 58
          }
        }],
        line: 64
      },
      "1": {
        loc: {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 96,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 96,
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
        line: 88
      },
      "2": {
        loc: {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 45
          }
        }, {
          start: {
            line: 101,
            column: 49
          },
          end: {
            line: 101,
            column: 64
          }
        }],
        line: 101
      },
      "3": {
        loc: {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 128,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 128,
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
        line: 110
      },
      "4": {
        loc: {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 146,
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
        line: 135
      },
      "5": {
        loc: {
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 135,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 135,
            column: 40
          }
        }, {
          start: {
            line: 135,
            column: 44
          },
          end: {
            line: 135,
            column: 71
          }
        }],
        line: 135
      },
      "6": {
        loc: {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 141,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 141,
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
        line: 137
      },
      "7": {
        loc: {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 159,
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
        line: 149
      },
      "8": {
        loc: {
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 155,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 155,
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
        line: 151
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
      "28": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "af3fb3f7a0f3c297660203cea747e40edcf1682b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_18ndad8g33 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_18ndad8g33();
/* disable max-classes rule, because extending error shouldn't count! */
/* eslint max-classes-per-file: 0 */
/**
 * A transaction that has been sent to the Soroban network. This happens in two steps:
 *
 * 1. `sendTransaction`: initial submission of the transaction to the network.
 *    If this step runs into problems, the attempt to sign and send will be
 *    aborted. You can see the result of this call in the
 *    `sendTransactionResponse` getter.
 * 2. `getTransaction`: once the transaction has been submitted to the network
 *    successfully, you need to wait for it to finalize to get the result of the
 *    transaction. This will be retried with exponential backoff for
 *    {@link MethodOptions.timeoutInSeconds} seconds. See all attempts in
 *    `getTransactionResponseAll` and the most recent attempt in
 *    `getTransactionResponse`.
 *
 * @memberof module:contract
 * @class
 *
 * @param {Function} signTransaction More info in {@link MethodOptions}
 * @param {module:contract.AssembledTransaction<T>} assembled {@link AssembledTransaction} from which this SentTransaction was initialized
 */
class SentTransaction {
  /**
   * The result of calling `sendTransaction` to broadcast the transaction to the
   * network.
   */

  /**
   * If `sendTransaction` completes successfully (which means it has `status: 'PENDING'`),
   * then `getTransaction` will be called in a loop for
   * {@link MethodOptions.timeoutInSeconds} seconds. This array contains all
   * the results of those calls.
   */

  /**
   * The most recent result of calling `getTransaction`, from the
   * `getTransactionResponseAll` array.
   */

  static Errors = (cov_18ndad8g33().s[0]++, {
    SendFailed: class SendFailedError extends Error {},
    SendResultOnly: class SendResultOnlyError extends Error {},
    TransactionStillPending: class TransactionStillPendingError extends Error {}
  });
  constructor(_,
  // deprecated: used to take sentTransaction, need to wait for major release for breaking change
  assembled) {
    this.assembled = assembled;
    cov_18ndad8g33().f[0]++;
    cov_18ndad8g33().s[1]++;
    this.server = new _rpc.Server(this.assembled.options.rpcUrl, {
      allowHttp: (cov_18ndad8g33().b[0][0]++, this.assembled.options.allowHttp) ?? (cov_18ndad8g33().b[0][1]++, false)
    });
  }

  /**
   * Initialize a `SentTransaction` from `options` and a `signed`
   * AssembledTransaction. This will also send the transaction to the network.
   */
  static init = (cov_18ndad8g33().s[2]++, async (/** @deprecated variable is ignored. Now handled by AssembledTransaction. */
  _,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  /** {@link AssembledTransaction} from which this SentTransaction was initialized */
  assembled) => {
    cov_18ndad8g33().f[1]++;
    const tx = (cov_18ndad8g33().s[3]++, new SentTransaction(undefined, assembled));
    const sent = (cov_18ndad8g33().s[4]++, await tx.send());
    cov_18ndad8g33().s[5]++;
    return sent;
  });
  send = (cov_18ndad8g33().s[6]++, async () => {
    cov_18ndad8g33().f[2]++;
    cov_18ndad8g33().s[7]++;
    this.sendTransactionResponse = await this.server.sendTransaction(this.assembled.signed);
    cov_18ndad8g33().s[8]++;
    if (this.sendTransactionResponse.status !== "PENDING") {
      cov_18ndad8g33().b[1][0]++;
      cov_18ndad8g33().s[9]++;
      throw new SentTransaction.Errors.SendFailed(`Sending the transaction to the network failed!\n${JSON.stringify(this.sendTransactionResponse, null, 2)}`);
    } else {
      cov_18ndad8g33().b[1][1]++;
    }
    const {
      hash
    } = (cov_18ndad8g33().s[10]++, this.sendTransactionResponse);
    const timeoutInSeconds = (cov_18ndad8g33().s[11]++, (cov_18ndad8g33().b[2][0]++, this.assembled.options.timeoutInSeconds) ?? (cov_18ndad8g33().b[2][1]++, _types.DEFAULT_TIMEOUT));
    cov_18ndad8g33().s[12]++;
    this.getTransactionResponseAll = await (0, _utils.withExponentialBackoff)(() => {
      cov_18ndad8g33().f[3]++;
      cov_18ndad8g33().s[13]++;
      return this.server.getTransaction(hash);
    }, resp => {
      cov_18ndad8g33().f[4]++;
      cov_18ndad8g33().s[14]++;
      return resp.status === _api.Api.GetTransactionStatus.NOT_FOUND;
    }, timeoutInSeconds);
    cov_18ndad8g33().s[15]++;
    this.getTransactionResponse = this.getTransactionResponseAll[this.getTransactionResponseAll.length - 1];
    cov_18ndad8g33().s[16]++;
    if (this.getTransactionResponse.status === _api.Api.GetTransactionStatus.NOT_FOUND) {
      cov_18ndad8g33().b[3][0]++;
      cov_18ndad8g33().s[17]++;
      throw new SentTransaction.Errors.TransactionStillPending(`Waited ${timeoutInSeconds} seconds for transaction to complete, but it did not. ` + `Returning anyway. Check the transaction status manually. ` + `Sent transaction: ${JSON.stringify(this.sendTransactionResponse, null, 2)}\n` + `All attempts to get the result: ${JSON.stringify(this.getTransactionResponseAll, null, 2)}`);
    } else {
      cov_18ndad8g33().b[3][1]++;
    }
    cov_18ndad8g33().s[18]++;
    return this;
  });
  get result() {
    cov_18ndad8g33().f[5]++;
    cov_18ndad8g33().s[19]++;
    // 1. check if transaction was submitted and awaited with `getTransaction`
    if ((cov_18ndad8g33().b[5][0]++, "getTransactionResponse" in this) && (cov_18ndad8g33().b[5][1]++, this.getTransactionResponse)) {
      cov_18ndad8g33().b[4][0]++;
      cov_18ndad8g33().s[20]++;
      // getTransactionResponse has a `returnValue` field unless it failed
      if ("returnValue" in this.getTransactionResponse) {
        cov_18ndad8g33().b[6][0]++;
        cov_18ndad8g33().s[21]++;
        return this.assembled.options.parseResultXdr(this.getTransactionResponse.returnValue);
      } else {
        cov_18ndad8g33().b[6][1]++;
      }

      // if "returnValue" not present, the transaction failed; return without
      // parsing the result
      cov_18ndad8g33().s[22]++;
      throw new Error("Transaction failed! Cannot parse result.");
    } else {
      cov_18ndad8g33().b[4][1]++;
    }

    // 2. otherwise, maybe it was merely sent with `sendTransaction`
    cov_18ndad8g33().s[23]++;
    if (this.sendTransactionResponse) {
      cov_18ndad8g33().b[7][0]++;
      const errorResult = (cov_18ndad8g33().s[24]++, this.sendTransactionResponse.errorResult?.result());
      cov_18ndad8g33().s[25]++;
      if (errorResult) {
        cov_18ndad8g33().b[8][0]++;
        cov_18ndad8g33().s[26]++;
        throw new SentTransaction.Errors.SendFailed(`Transaction simulation looked correct, but attempting to send the transaction failed. Check \`simulation\` and \`sendTransactionResponseAll\` to troubleshoot. Decoded \`sendTransactionResponse.errorResultXdr\`: ${errorResult}`);
      } else {
        cov_18ndad8g33().b[8][1]++;
      }
      cov_18ndad8g33().s[27]++;
      throw new SentTransaction.Errors.SendResultOnly(`Transaction was sent to the network, but not yet awaited. No result to show. Await transaction completion with \`getTransaction(sendTransactionResponse.hash)\``);
    } else {
      cov_18ndad8g33().b[7][1]++;
    }

    // 3. finally, if neither of those are present, throw an error
    cov_18ndad8g33().s[28]++;
    throw new Error(`Sending transaction failed: ${JSON.stringify(this.assembled.signed)}`);
  }
}
exports.SentTransaction = SentTransaction;