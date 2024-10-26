"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;
var _spec = require("./spec");
var _rpc = require("../rpc");
var _assembled_transaction = require("./assembled_transaction");
var _utils = require("./utils");
function cov_1g1aaetna8() {
  var path = "/mnt/g/stellar-sdk/src/contract/client.ts";
  var hash = "6a6db2cebc92f4ee12fb80b4b2348adf5f1eb515";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/contract/client.ts",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 54,
          column: 7
        }
      },
      "1": {
        start: {
          line: 28,
          column: 21
        },
        end: {
          line: 28,
          column: 44
        }
      },
      "2": {
        start: {
          line: 29,
          column: 34
        },
        end: {
          line: 47,
          column: 10
        }
      },
      "3": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 47,
          column: 10
        }
      },
      "4": {
        start: {
          line: 39,
          column: 28
        },
        end: {
          line: 42,
          column: 13
        }
      },
      "5": {
        start: {
          line: 46,
          column: 12
        },
        end: {
          line: 46,
          column: 48
        }
      },
      "6": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 53,
          column: 32
        }
      },
      "7": {
        start: {
          line: 52,
          column: 38
        },
        end: {
          line: 52,
          column: 74
        }
      },
      "8": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 73,
          column: 5
        }
      },
      "9": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 72,
          column: 57
        }
      },
      "10": {
        start: {
          line: 74,
          column: 34
        },
        end: {
          line: 74,
          column: 41
        }
      },
      "11": {
        start: {
          line: 75,
          column: 39
        },
        end: {
          line: 75,
          column: 52
        }
      },
      "12": {
        start: {
          line: 76,
          column: 19
        },
        end: {
          line: 76,
          column: 49
        }
      },
      "13": {
        start: {
          line: 77,
          column: 17
        },
        end: {
          line: 77,
          column: 69
        }
      },
      "14": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 42
        }
      },
      "15": {
        start: {
          line: 90,
          column: 23
        },
        end: {
          line: 90,
          column: 54
        }
      },
      "16": {
        start: {
          line: 91,
          column: 24
        },
        end: {
          line: 91,
          column: 87
        }
      },
      "17": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 94,
          column: 5
        }
      },
      "18": {
        start: {
          line: 93,
          column: 6
        },
        end: {
          line: 93,
          column: 66
        }
      },
      "19": {
        start: {
          line: 95,
          column: 26
        },
        end: {
          line: 95,
          column: 53
        }
      },
      "20": {
        start: {
          line: 96,
          column: 27
        },
        end: {
          line: 96,
          column: 64
        }
      },
      "21": {
        start: {
          line: 97,
          column: 17
        },
        end: {
          line: 97,
          column: 41
        }
      },
      "22": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 37
        }
      },
      "23": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 111,
          column: 5
        }
      },
      "24": {
        start: {
          line: 110,
          column: 6
        },
        end: {
          line: 110,
          column: 72
        }
      },
      "25": {
        start: {
          line: 112,
          column: 46
        },
        end: {
          line: 112,
          column: 53
        }
      },
      "26": {
        start: {
          line: 113,
          column: 39
        },
        end: {
          line: 113,
          column: 52
        }
      },
      "27": {
        start: {
          line: 114,
          column: 19
        },
        end: {
          line: 114,
          column: 49
        }
      },
      "28": {
        start: {
          line: 115,
          column: 17
        },
        end: {
          line: 115,
          column: 69
        }
      },
      "29": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 116,
          column: 42
        }
      },
      "30": {
        start: {
          line: 119,
          column: 15
        },
        end: {
          line: 130,
          column: 3
        }
      },
      "31": {
        start: {
          line: 120,
          column: 30
        },
        end: {
          line: 120,
          column: 46
        }
      },
      "32": {
        start: {
          line: 121,
          column: 4
        },
        end: {
          line: 129,
          column: 6
        }
      },
      "33": {
        start: {
          line: 126,
          column: 10
        },
        end: {
          line: 126,
          column: 51
        }
      },
      "34": {
        start: {
          line: 132,
          column: 14
        },
        end: {
          line: 132,
          column: 129
        }
      },
      "35": {
        start: {
          line: 132,
          column: 65
        },
        end: {
          line: 132,
          column: 129
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 30
          },
          end: {
            line: 27,
            column: 31
          }
        },
        loc: {
          start: {
            line: 27,
            column: 41
          },
          end: {
            line: 54,
            column: 5
          }
        },
        line: 27
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 34
          },
          end: {
            line: 29,
            column: 35
          }
        },
        loc: {
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 47,
            column: 10
          }
        },
        line: 33
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 39,
            column: 13
          }
        },
        loc: {
          start: {
            line: 39,
            column: 28
          },
          end: {
            line: 42,
            column: 13
          }
        },
        line: 39
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 45,
            column: 26
          },
          end: {
            line: 45,
            column: 27
          }
        },
        loc: {
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 46,
            column: 48
          }
        },
        line: 46
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 52,
            column: 12
          },
          end: {
            line: 52,
            column: 13
          }
        },
        loc: {
          start: {
            line: 52,
            column: 38
          },
          end: {
            line: 52,
            column: 74
          }
        },
        line: 52
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        loc: {
          start: {
            line: 70,
            column: 21
          },
          end: {
            line: 79,
            column: 3
          }
        },
        line: 70
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 89,
            column: 3
          }
        },
        loc: {
          start: {
            line: 89,
            column: 79
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 89
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 108,
            column: 2
          },
          end: {
            line: 108,
            column: 3
          }
        },
        loc: {
          start: {
            line: 108,
            column: 61
          },
          end: {
            line: 117,
            column: 3
          }
        },
        line: 108
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 119,
            column: 15
          },
          end: {
            line: 119,
            column: 16
          }
        },
        loc: {
          start: {
            line: 119,
            column: 61
          },
          end: {
            line: 130,
            column: 3
          }
        },
        line: 119
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 125,
            column: 24
          },
          end: {
            line: 125,
            column: 25
          }
        },
        loc: {
          start: {
            line: 126,
            column: 10
          },
          end: {
            line: 126,
            column: 51
          }
        },
        line: 126
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 132,
            column: 14
          },
          end: {
            line: 132,
            column: 15
          }
        },
        loc: {
          start: {
            line: 132,
            column: 65
          },
          end: {
            line: 132,
            column: 129
          }
        },
        line: 132
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 35,
            column: 16
          },
          end: {
            line: 35,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 35,
            column: 16
          },
          end: {
            line: 35,
            column: 20
          }
        }, {
          start: {
            line: 35,
            column: 24
          },
          end: {
            line: 35,
            column: 59
          }
        }],
        line: 35
      },
      "1": {
        loc: {
          start: {
            line: 51,
            column: 8
          },
          end: {
            line: 53,
            column: 31
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 52,
            column: 12
          },
          end: {
            line: 52,
            column: 74
          }
        }, {
          start: {
            line: 53,
            column: 12
          },
          end: {
            line: 53,
            column: 31
          }
        }],
        line: 51
      },
      "2": {
        loc: {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 69,
            column: 31
          },
          end: {
            line: 69,
            column: 36
          }
        }],
        line: 69
      },
      "3": {
        loc: {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 73,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 73,
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
        line: 71
      },
      "4": {
        loc: {
          start: {
            line: 71,
            column: 8
          },
          end: {
            line: 71,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 71,
            column: 8
          },
          end: {
            line: 71,
            column: 16
          }
        }, {
          start: {
            line: 71,
            column: 20
          },
          end: {
            line: 71,
            column: 35
          }
        }],
        line: 71
      },
      "5": {
        loc: {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 94,
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
        line: 92
      },
      "6": {
        loc: {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
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
        line: 109
      },
      "7": {
        loc: {
          start: {
            line: 109,
            column: 8
          },
          end: {
            line: 109,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 109,
            column: 8
          },
          end: {
            line: 109,
            column: 16
          }
        }, {
          start: {
            line: 109,
            column: 20
          },
          end: {
            line: 109,
            column: 35
          }
        }, {
          start: {
            line: 109,
            column: 39
          },
          end: {
            line: 109,
            column: 58
          }
        }],
        line: 109
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
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0
    },
    f: {
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
      "11": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6a6db2cebc92f4ee12fb80b4b2348adf5f1eb515"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1g1aaetna8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1g1aaetna8();
/**
 * Generate a class from the contract spec that where each contract method
 * gets included with an identical name.
 *
 * Each method returns an {@link module:contract.AssembledTransaction | AssembledTransaction} that can
 * be used to modify, simulate, decode results, and possibly sign, & submit the
 * transaction.
 *
 * @memberof module:contract
 *
 * @class
 * @param {module:contract.Spec} spec {@link Spec} to construct a Client for
 * @param {ClientOptions} options see {@link ClientOptions}
 */
class Client {
  constructor(spec, options) {
    this.spec = spec;
    this.options = options;
    cov_1g1aaetna8().f[0]++;
    cov_1g1aaetna8().s[0]++;
    this.spec.funcs().forEach(xdrFn => {
      cov_1g1aaetna8().f[1]++;
      const method = (cov_1g1aaetna8().s[1]++, xdrFn.name().toString());
      cov_1g1aaetna8().s[2]++;
      const assembleTransaction = (args, methodOptions) => {
        cov_1g1aaetna8().f[2]++;
        cov_1g1aaetna8().s[3]++;
        return _assembled_transaction.AssembledTransaction.build({
          method,
          args: (cov_1g1aaetna8().b[0][0]++, args) && (cov_1g1aaetna8().b[0][1]++, spec.funcArgsToScVals(method, args)),
          ...options,
          ...methodOptions,
          errorTypes: spec.errorCases().reduce((acc, curr) => {
            cov_1g1aaetna8().f[3]++;
            cov_1g1aaetna8().s[4]++;
            return {
              ...acc,
              [curr.value()]: {
                message: curr.doc().toString()
              }
            };
          }, {}),
          parseResultXdr: result => {
            cov_1g1aaetna8().f[4]++;
            cov_1g1aaetna8().s[5]++;
            return spec.funcResToNative(method, result);
          }
        });
      };

      // @ts-ignore error TS7053: Element implicitly has an 'any' type
      cov_1g1aaetna8().s[6]++;
      this[method] = spec.getFunc(method).inputs().length === 0 ? (cov_1g1aaetna8().b[1][0]++, opts => {
        cov_1g1aaetna8().f[5]++;
        cov_1g1aaetna8().s[7]++;
        return assembleTransaction(undefined, opts);
      }) : (cov_1g1aaetna8().b[1][1]++, assembleTransaction);
    });
  }

  /**
   * Generates a Client instance from the provided ClientOptions and the contract's wasm hash.
   * The wasmHash can be provided in either hex or base64 format.
   *
   * @param {Buffer | string} wasmHash The hash of the contract's wasm binary, in either hex or base64 format.
   * @param {ClientOptions} options The ClientOptions object containing the necessary configuration, including the rpcUrl.
   * @param {('hex' | 'base64')} [format='hex'] The format of the provided wasmHash, either "hex" or "base64". Defaults to "hex".
   * @returns {Promise<module:contract.Client>} A Promise that resolves to a Client instance.
   * @throws {TypeError} If the provided options object does not contain an rpcUrl.
   */
  static async fromWasmHash(wasmHash, options, format = (cov_1g1aaetna8().b[2][0]++, "hex")) {
    cov_1g1aaetna8().f[6]++;
    cov_1g1aaetna8().s[8]++;
    if ((cov_1g1aaetna8().b[4][0]++, !options) || (cov_1g1aaetna8().b[4][1]++, !options.rpcUrl)) {
      cov_1g1aaetna8().b[3][0]++;
      cov_1g1aaetna8().s[9]++;
      throw new TypeError('options must contain rpcUrl');
    } else {
      cov_1g1aaetna8().b[3][1]++;
    }
    const {
      rpcUrl,
      allowHttp
    } = (cov_1g1aaetna8().s[10]++, options);
    const serverOpts = (cov_1g1aaetna8().s[11]++, {
      allowHttp
    });
    const server = (cov_1g1aaetna8().s[12]++, new _rpc.Server(rpcUrl, serverOpts));
    const wasm = (cov_1g1aaetna8().s[13]++, await server.getContractWasmByHash(wasmHash, format));
    cov_1g1aaetna8().s[14]++;
    return Client.fromWasm(wasm, options);
  }

  /**
   * Generates a Client instance from the provided ClientOptions and the contract's wasm binary.
   *
   * @param {Buffer} wasm The contract's wasm binary as a Buffer.
   * @param {ClientOptions} options The ClientOptions object containing the necessary configuration.
   * @returns {Promise<module:contract.Client>} A Promise that resolves to a Client instance.
   * @throws {Error} If the contract spec cannot be obtained from the provided wasm binary.
   */
  static async fromWasm(wasm, options) {
    cov_1g1aaetna8().f[7]++;
    const wasmModule = (cov_1g1aaetna8().s[15]++, await WebAssembly.compile(wasm));
    const xdrSections = (cov_1g1aaetna8().s[16]++, WebAssembly.Module.customSections(wasmModule, "contractspecv0"));
    cov_1g1aaetna8().s[17]++;
    if (xdrSections.length === 0) {
      cov_1g1aaetna8().b[5][0]++;
      cov_1g1aaetna8().s[18]++;
      throw new Error('Could not obtain contract spec from wasm');
    } else {
      cov_1g1aaetna8().b[5][1]++;
    }
    const bufferSection = (cov_1g1aaetna8().s[19]++, Buffer.from(xdrSections[0]));
    const specEntryArray = (cov_1g1aaetna8().s[20]++, (0, _utils.processSpecEntryStream)(bufferSection));
    const spec = (cov_1g1aaetna8().s[21]++, new _spec.Spec(specEntryArray));
    cov_1g1aaetna8().s[22]++;
    return new Client(spec, options);
  }

  /**
   * Generates a Client instance from the provided ClientOptions, which must include the contractId and rpcUrl.
   *
   * @param {ClientOptions} options The ClientOptions object containing the necessary configuration, including the contractId and rpcUrl.
   * @returns {Promise<module:contract.Client>} A Promise that resolves to a Client instance.
   * @throws {TypeError} If the provided options object does not contain both rpcUrl and contractId.
   */
  static async from(options) {
    cov_1g1aaetna8().f[8]++;
    cov_1g1aaetna8().s[23]++;
    if ((cov_1g1aaetna8().b[7][0]++, !options) || (cov_1g1aaetna8().b[7][1]++, !options.rpcUrl) || (cov_1g1aaetna8().b[7][2]++, !options.contractId)) {
      cov_1g1aaetna8().b[6][0]++;
      cov_1g1aaetna8().s[24]++;
      throw new TypeError('options must contain rpcUrl and contractId');
    } else {
      cov_1g1aaetna8().b[6][1]++;
    }
    const {
      rpcUrl,
      contractId,
      allowHttp
    } = (cov_1g1aaetna8().s[25]++, options);
    const serverOpts = (cov_1g1aaetna8().s[26]++, {
      allowHttp
    });
    const server = (cov_1g1aaetna8().s[27]++, new _rpc.Server(rpcUrl, serverOpts));
    const wasm = (cov_1g1aaetna8().s[28]++, await server.getContractWasmByContractId(contractId));
    cov_1g1aaetna8().s[29]++;
    return Client.fromWasm(wasm, options);
  }
  txFromJSON = (cov_1g1aaetna8().s[30]++, json => {
    cov_1g1aaetna8().f[9]++;
    const {
      method,
      ...tx
    } = (cov_1g1aaetna8().s[31]++, JSON.parse(json));
    cov_1g1aaetna8().s[32]++;
    return _assembled_transaction.AssembledTransaction.fromJSON({
      ...this.options,
      method,
      parseResultXdr: result => {
        cov_1g1aaetna8().f[10]++;
        cov_1g1aaetna8().s[33]++;
        return this.spec.funcResToNative(method, result);
      }
    }, tx);
  });
  txFromXDR = (cov_1g1aaetna8().s[34]++, xdrBase64 => {
    cov_1g1aaetna8().f[11]++;
    cov_1g1aaetna8().s[35]++;
    return _assembled_transaction.AssembledTransaction.fromXDR(this.options, xdrBase64, this.spec);
  });
}
exports.Client = Client;