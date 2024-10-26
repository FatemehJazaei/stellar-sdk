"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetworkError = void 0;
function cov_4mooyecca() {
  var path = "/mnt/g/stellar-sdk/src/errors/network.ts";
  var hash = "86b927c78cae1775dff68654384c2b48536ae72a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/errors/network.ts",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 22
        },
        end: {
          line: 27,
          column: 42
        }
      },
      "1": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 19
        }
      },
      "2": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 31
        }
      },
      "3": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 36
        }
      },
      "4": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 29
        }
      },
      "5": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 46
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 46,
            column: 23
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 46
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
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "86b927c78cae1775dff68654384c2b48536ae72a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_4mooyecca = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_4mooyecca();
// For ES5 compatibility (https://stackoverflow.com/a/55066280).

/**
 * NetworkError is raised when an interaction with a Horizon server has caused
 * some kind of problem.
 * @category Errors
 *
 * @param {string} message Human-readable error message
 * @param {any} response Response details, received from the Horizon server.
 * @param {HorizonApi.ErrorResponseData} [response.data] The data returned by Horizon as part of the error: {@link https://developers.stellar.org/docs/data/horizon/api-reference/errors/response | Error Response}
 * @param {number} [response.status] HTTP status code describing the basic issue with a submitted transaction {@link https://developers.stellar.org/docs/data/horizon/api-reference/errors/http-status-codes/standard | Standard Status Codes}
 * @param {string} [response.statusText] A human-readable description of what the status code means: {@link https://developers.stellar.org/docs/data/horizon/api-reference/errors/http-status-codes/horizon-specific | Horizon-Specific Status Codes}
 * @param {string} [response.url] URL which can provide more information about the problem that occurred.
 */
class NetworkError extends Error {
  constructor(message, response) {
    cov_4mooyecca().f[0]++;
    const trueProto = (cov_4mooyecca().s[0]++, new.target.prototype);
    cov_4mooyecca().s[1]++;
    super(message);
    cov_4mooyecca().s[2]++;
    this.__proto__ = trueProto;
    cov_4mooyecca().s[3]++;
    this.constructor = NetworkError;
    /**
     * The response sent by the Horizon server.
     * @type {object} Response details, received from the Horizon server
     * @property {HorizonApi.ErrorResponseData} [response.data] The data returned by Horizon as part of the error: {@link https://developers.stellar.org/docs/data/horizon/api-reference/errors/response | Error Response}
     * @property {number} [response.status] HTTP status code describing the basic issue with a submitted transaction {@link https://developers.stellar.org/docs/data/horizon/api-reference/errors/http-status-codes/standard | Standard Status Codes}
     * @property {string} [response.statusText] A human-readable description of what the status code means: {@link https://developers.stellar.org/docs/data/horizon/api-reference/errors/http-status-codes/horizon-specific | Horizon-Specific Status Codes}
     * @property {string} [response.url] URL which can provide more information about the problem that occurred.
     */
    cov_4mooyecca().s[4]++;
    this.response = response;
  }

  /**
   * Returns the error response sent by the Horizon server.
   * @returns {any}
   */
  getResponse() {
    cov_4mooyecca().f[1]++;
    cov_4mooyecca().s[5]++;
    return this.response;
  }
}
exports.NetworkError = NetworkError;