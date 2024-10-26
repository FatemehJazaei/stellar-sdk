"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = void 0;
function cov_5l8jjrmrr() {
  var path = "/mnt/g/stellar-sdk/src/rpc/api.ts";
  var hash = "3d0c47b743df307b033fbcac0d0f611ae8866359";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/rpc/api.ts",
    statementMap: {
      "0": {
        start: {
          line: 357,
          column: 4
        },
        end: {
          line: 357,
          column: 26
        }
      },
      "1": {
        start: {
          line: 363,
          column: 4
        },
        end: {
          line: 363,
          column: 36
        }
      },
      "2": {
        start: {
          line: 369,
          column: 4
        },
        end: {
          line: 373,
          column: 6
        }
      },
      "3": {
        start: {
          line: 381,
          column: 4
        },
        end: {
          line: 381,
          column: 61
        }
      }
    },
    fnMap: {
      "0": {
        name: "isSimulationError",
        decl: {
          start: {
            line: 354,
            column: 18
          },
          end: {
            line: 354,
            column: 35
          }
        },
        loc: {
          start: {
            line: 356,
            column: 45
          },
          end: {
            line: 358,
            column: 3
          }
        },
        line: 356
      },
      "1": {
        name: "isSimulationSuccess",
        decl: {
          start: {
            line: 360,
            column: 18
          },
          end: {
            line: 360,
            column: 37
          }
        },
        loc: {
          start: {
            line: 362,
            column: 47
          },
          end: {
            line: 364,
            column: 3
          }
        },
        line: 362
      },
      "2": {
        name: "isSimulationRestore",
        decl: {
          start: {
            line: 366,
            column: 18
          },
          end: {
            line: 366,
            column: 37
          }
        },
        loc: {
          start: {
            line: 368,
            column: 47
          },
          end: {
            line: 374,
            column: 3
          }
        },
        line: 368
      },
      "3": {
        name: "isSimulationRaw",
        decl: {
          start: {
            line: 376,
            column: 18
          },
          end: {
            line: 376,
            column: 33
          }
        },
        loc: {
          start: {
            line: 380,
            column: 47
          },
          end: {
            line: 382,
            column: 3
          }
        },
        line: 380
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 370,
            column: 6
          },
          end: {
            line: 372,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 370,
            column: 6
          },
          end: {
            line: 370,
            column: 30
          }
        }, {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 371,
            column: 30
          }
        }, {
          start: {
            line: 372,
            column: 6
          },
          end: {
            line: 372,
            column: 43
          }
        }],
        line: 370
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3d0c47b743df307b033fbcac0d0f611ae8866359"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_5l8jjrmrr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_5l8jjrmrr();
/* tslint:disable-next-line:no-namespace */
let Api = exports.Api = void 0;
(function (_Api) {
  /** An XDR-parsed version of {@link this.RawLedgerEntryResult} */
  /** @see https://developers.stellar.org/docs/data/rpc/api-reference/methods/getLedgerEntries */
  /** @see https://developers.stellar.org/docs/data/rpc/api-reference/methods/getNetwork */
  /** @see https://developers.stellar.org/docs/data/rpc/api-reference/methods/getLatestLedger */
  let GetTransactionStatus = /*#__PURE__*/function (GetTransactionStatus) {
    GetTransactionStatus["SUCCESS"] = "SUCCESS";
    GetTransactionStatus["NOT_FOUND"] = "NOT_FOUND";
    GetTransactionStatus["FAILED"] = "FAILED";
    return GetTransactionStatus;
  }({});
  _Api.GetTransactionStatus = GetTransactionStatus;
  /** @see https://developers.stellar.org/docs/data/rpc/api-reference/methods/getTransaction */
  /**
   * Simplifies {@link Api.RawSimulateTransactionResponse} into separate interfaces
   * based on status:
   *   - on success, this includes all fields, though `result` is only present
   *     if an invocation was simulated (since otherwise there's nothing to
   *     "resultify")
   *   - if there was an expiration error, this includes error and restoration
   *     fields
   *   - for all other errors, this only includes error fields
   *
   * @see https://developers.stellar.org/docs/data/rpc/api-reference/methods/simulateTransaction
   */
  /** Includes simplified fields only present on success. */
  /** Includes details about why the simulation failed */
  function isSimulationError(sim) {
    cov_5l8jjrmrr().f[0]++;
    cov_5l8jjrmrr().s[0]++;
    return 'error' in sim;
  }
  _Api.isSimulationError = isSimulationError;
  function isSimulationSuccess(sim) {
    cov_5l8jjrmrr().f[1]++;
    cov_5l8jjrmrr().s[1]++;
    return 'transactionData' in sim;
  }
  _Api.isSimulationSuccess = isSimulationSuccess;
  function isSimulationRestore(sim) {
    cov_5l8jjrmrr().f[2]++;
    cov_5l8jjrmrr().s[2]++;
    return (cov_5l8jjrmrr().b[0][0]++, isSimulationSuccess(sim)) && (cov_5l8jjrmrr().b[0][1]++, 'restorePreamble' in sim) && (cov_5l8jjrmrr().b[0][2]++, !!sim.restorePreamble.transactionData);
  }
  _Api.isSimulationRestore = isSimulationRestore;
  function isSimulationRaw(sim) {
    cov_5l8jjrmrr().f[3]++;
    cov_5l8jjrmrr().s[3]++;
    return !sim._parsed;
  }
  _Api.isSimulationRaw = isSimulationRaw;
  /** @see https://developers.stellar.org/docs/data/rpc/api-reference/methods/simulateTransaction */
})(Api || (exports.Api = Api = {}));