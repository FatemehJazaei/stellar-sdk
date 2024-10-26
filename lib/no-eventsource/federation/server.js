"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FederationServer = exports.FEDERATION_RESPONSE_MAX_SIZE = void 0;
var _stellarBase = require("@stellar/stellar-base");
var _urijs = _interopRequireDefault(require("urijs"));
var _config = require("../config");
var _errors = require("../errors");
var _stellartoml = require("../stellartoml");
var _httpClient = require("../http-client");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_2ibq9usqf1() {
  var path = "/mnt/g/stellar-sdk/src/federation/server.ts";
  var hash = "540daff31251f4d677aa32c0c10023846b7c29ee";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/federation/server.ts",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 52
        },
        end: {
          line: 18,
          column: 62
        }
      },
      "1": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 86,
          column: 5
        }
      },
      "2": {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 84,
          column: 7
        }
      },
      "3": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 63
        }
      },
      "4": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 52
        }
      },
      "5": {
        start: {
          line: 88,
          column: 25
        },
        end: {
          line: 88,
          column: 41
        }
      },
      "6": {
        start: {
          line: 89,
          column: 23
        },
        end: {
          line: 89,
          column: 35
        }
      },
      "7": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 93,
          column: 5
        }
      },
      "8": {
        start: {
          line: 92,
          column: 6
        },
        end: {
          line: 92,
          column: 66
        }
      },
      "9": {
        start: {
          line: 94,
          column: 29
        },
        end: {
          line: 97,
          column: 5
        }
      },
      "10": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 50
        }
      },
      "11": {
        start: {
          line: 128,
          column: 23
        },
        end: {
          line: 128,
          column: 59
        }
      },
      "12": {
        start: {
          line: 129,
          column: 4
        },
        end: {
          line: 133,
          column: 5
        }
      },
      "13": {
        start: {
          line: 130,
          column: 6
        },
        end: {
          line: 132,
          column: 8
        }
      },
      "14": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 134,
          column: 76
        }
      },
      "15": {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 143,
          column: 36
        }
      },
      "16": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 144,
          column: 25
        }
      },
      "17": {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 149,
          column: 24
        }
      },
      "18": {
        start: {
          line: 151,
          column: 4
        },
        end: {
          line: 152,
          column: 79
        }
      },
      "19": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 156,
          column: 5
        }
      },
      "20": {
        start: {
          line: 155,
          column: 6
        },
        end: {
          line: 155,
          column: 70
        }
      },
      "21": {
        start: {
          line: 169,
          column: 25
        },
        end: {
          line: 169,
          column: 32
        }
      },
      "22": {
        start: {
          line: 170,
          column: 4
        },
        end: {
          line: 179,
          column: 5
        }
      },
      "23": {
        start: {
          line: 171,
          column: 6
        },
        end: {
          line: 177,
          column: 7
        }
      },
      "24": {
        start: {
          line: 172,
          column: 8
        },
        end: {
          line: 176,
          column: 10
        }
      },
      "25": {
        start: {
          line: 178,
          column: 6
        },
        end: {
          line: 178,
          column: 51
        }
      },
      "26": {
        start: {
          line: 180,
          column: 16
        },
        end: {
          line: 180,
          column: 73
        }
      },
      "27": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 181,
          column: 34
        }
      },
      "28": {
        start: {
          line: 196,
          column: 16
        },
        end: {
          line: 196,
          column: 66
        }
      },
      "29": {
        start: {
          line: 197,
          column: 4
        },
        end: {
          line: 197,
          column: 34
        }
      },
      "30": {
        start: {
          line: 212,
          column: 16
        },
        end: {
          line: 212,
          column: 72
        }
      },
      "31": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 213,
          column: 34
        }
      },
      "32": {
        start: {
          line: 217,
          column: 20
        },
        end: {
          line: 217,
          column: 32
        }
      },
      "33": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 250,
          column: 9
        }
      },
      "34": {
        start: {
          line: 225,
          column: 8
        },
        end: {
          line: 230,
          column: 9
        }
      },
      "35": {
        start: {
          line: 229,
          column: 10
        },
        end: {
          line: 229,
          column: 65
        }
      },
      "36": {
        start: {
          line: 231,
          column: 8
        },
        end: {
          line: 231,
          column: 29
        }
      },
      "37": {
        start: {
          line: 234,
          column: 8
        },
        end: {
          line: 249,
          column: 9
        }
      },
      "38": {
        start: {
          line: 235,
          column: 10
        },
        end: {
          line: 241,
          column: 11
        }
      },
      "39": {
        start: {
          line: 236,
          column: 12
        },
        end: {
          line: 238,
          column: 14
        }
      },
      "40": {
        start: {
          line: 240,
          column: 12
        },
        end: {
          line: 240,
          column: 44
        }
      },
      "41": {
        start: {
          line: 243,
          column: 10
        },
        end: {
          line: 248,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 3
          }
        },
        loc: {
          start: {
            line: 79,
            column: 25
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 79
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 124,
            column: 2
          },
          end: {
            line: 124,
            column: 3
          }
        },
        loc: {
          start: {
            line: 127,
            column: 31
          },
          end: {
            line: 135,
            column: 3
          }
        },
        line: 127
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 137,
            column: 2
          },
          end: {
            line: 137,
            column: 3
          }
        },
        loc: {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 157,
            column: 3
          }
        },
        line: 141
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 166,
            column: 2
          },
          end: {
            line: 166,
            column: 3
          }
        },
        loc: {
          start: {
            line: 168,
            column: 25
          },
          end: {
            line: 182,
            column: 3
          }
        },
        line: 168
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 193,
            column: 2
          },
          end: {
            line: 193,
            column: 3
          }
        },
        loc: {
          start: {
            line: 195,
            column: 25
          },
          end: {
            line: 198,
            column: 3
          }
        },
        line: 195
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 209,
            column: 2
          },
          end: {
            line: 209,
            column: 3
          }
        },
        loc: {
          start: {
            line: 211,
            column: 25
          },
          end: {
            line: 214,
            column: 3
          }
        },
        line: 211
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 216,
            column: 3
          }
        },
        loc: {
          start: {
            line: 216,
            column: 39
          },
          end: {
            line: 251,
            column: 3
          }
        },
        line: 216
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 224,
            column: 12
          },
          end: {
            line: 224,
            column: 13
          }
        },
        loc: {
          start: {
            line: 224,
            column: 26
          },
          end: {
            line: 232,
            column: 7
          }
        },
        line: 224
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 233,
            column: 13
          },
          end: {
            line: 233,
            column: 14
          }
        },
        loc: {
          start: {
            line: 233,
            column: 27
          },
          end: {
            line: 250,
            column: 7
          }
        },
        line: 233
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 78,
            column: 24
          },
          end: {
            line: 78,
            column: 26
          }
        }],
        line: 78
      },
      "1": {
        loc: {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 86,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 86,
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
        line: 81
      },
      "2": {
        loc: {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 84,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 84,
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
        line: 82
      },
      "3": {
        loc: {
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 93,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 93,
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
        line: 91
      },
      "4": {
        loc: {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 91,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 91,
            column: 33
          }
        }, {
          start: {
            line: 91,
            column: 37
          },
          end: {
            line: 91,
            column: 44
          }
        }],
        line: 91
      },
      "5": {
        loc: {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 126,
            column: 24
          },
          end: {
            line: 126,
            column: 26
          }
        }],
        line: 126
      },
      "6": {
        loc: {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 133,
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
        line: 129
      },
      "7": {
        loc: {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 140,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 140,
            column: 24
          },
          end: {
            line: 140,
            column: 26
          }
        }],
        line: 140
      },
      "8": {
        loc: {
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 149,
            column: 24
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 148,
            column: 10
          },
          end: {
            line: 148,
            column: 30
          }
        }, {
          start: {
            line: 149,
            column: 10
          },
          end: {
            line: 149,
            column: 24
          }
        }],
        line: 147
      },
      "9": {
        loc: {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 152,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 152,
            column: 44
          },
          end: {
            line: 152,
            column: 63
          }
        }, {
          start: {
            line: 152,
            column: 66
          },
          end: {
            line: 152,
            column: 78
          }
        }],
        line: 152
      },
      "10": {
        loc: {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 156,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 156,
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
        line: 154
      },
      "11": {
        loc: {
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 154,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 154,
            column: 45
          }
        }, {
          start: {
            line: 154,
            column: 49
          },
          end: {
            line: 154,
            column: 59
          }
        }],
        line: 154
      },
      "12": {
        loc: {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 179,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 179,
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
        line: 170
      },
      "13": {
        loc: {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 177,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 177,
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
        line: 171
      },
      "14": {
        loc: {
          start: {
            line: 225,
            column: 8
          },
          end: {
            line: 230,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 225,
            column: 8
          },
          end: {
            line: 230,
            column: 9
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
        line: 225
      },
      "15": {
        loc: {
          start: {
            line: 226,
            column: 10
          },
          end: {
            line: 227,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 226,
            column: 10
          },
          end: {
            line: 226,
            column: 51
          }
        }, {
          start: {
            line: 227,
            column: 10
          },
          end: {
            line: 227,
            column: 48
          }
        }],
        line: 226
      },
      "16": {
        loc: {
          start: {
            line: 234,
            column: 8
          },
          end: {
            line: 249,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 234,
            column: 8
          },
          end: {
            line: 249,
            column: 9
          }
        }, {
          start: {
            line: 242,
            column: 15
          },
          end: {
            line: 249,
            column: 9
          }
        }],
        line: 234
      },
      "17": {
        loc: {
          start: {
            line: 235,
            column: 10
          },
          end: {
            line: 241,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 235,
            column: 10
          },
          end: {
            line: 241,
            column: 11
          }
        }, {
          start: {
            line: 239,
            column: 17
          },
          end: {
            line: 241,
            column: 11
          }
        }],
        line: 235
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
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0
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
      "8": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0],
      "6": [0, 0],
      "7": [0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "540daff31251f4d677aa32c0c10023846b7c29ee"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ibq9usqf1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ibq9usqf1();
/* eslint-disable require-await */
/** @module Federation */

/**
 * The maximum size of response from a federation server
 * @default 102400
 */
const FEDERATION_RESPONSE_MAX_SIZE = exports.FEDERATION_RESPONSE_MAX_SIZE = (cov_2ibq9usqf1().s[0]++, 100 * 1024);

/**
 * Federation.Server handles a network connection to a
 * [federation server](https://developers.stellar.org/docs/learn/encyclopedia/federation)
 * instance and exposes an interface for requests to that instance.
 *
 * @alias module:Federation.Server
 * @memberof module:Federation
 * @param {string} serverURL The federation server URL (ex. `https://acme.com/federation`).
 * @param {string} domain Domain this server represents
 * @param {Api.Options} [opts] Options object
 * @returns {void}
 */
class FederationServer {
  /**
   * The federation server URL (ex. `https://acme.com/federation`).
   */
  // TODO: public or private? readonly?

  /**
   * Domain this server represents.
   */
  // TODO: public or private? readonly?

  /**
   * Allow a timeout, default: 0. Allows user to avoid nasty lag due to TOML resolve issue.
   */
  // TODO: public or private? readonly?

  /**
   * A helper method for handling user inputs that contain `destination` value.
   * It accepts two types of values:
   *
   * * For Stellar address (ex. `bob*stellar.org`) it splits Stellar address and then tries to find information about
   * federation server in `stellar.toml` file for a given domain. It returns a `Promise` which resolves if federation
   * server exists and user has been found and rejects in all other cases.
   * * For Account ID (ex. `GB5XVAABEQMY63WTHDQ5RXADGYF345VWMNPTN2GFUDZT57D57ZQTJ7PS`) it returns a `Promise` which
   * resolves if Account ID is valid and rejects in all other cases. Please note that this method does not check
   * if the account actually exists in a ledger.
   *
   * @example
   * StellarSdk.FederationServer.resolve('bob*stellar.org')
   *  .then(federationRecord => {
   *    // {
   *    //   account_id: 'GB5XVAABEQMY63WTHDQ5RXADGYF345VWMNPTN2GFUDZT57D57ZQTJ7PS',
   *    //   memo_type: 'id',
   *    //   memo: 100
   *    // }
   *  });
   *
   * @see <a href="https://developers.stellar.org/docs/learn/encyclopedia/federation" target="_blank">Federation doc</a>
   * @see <a href="https://developers.stellar.org/docs/issuing-assets/publishing-asset-info" target="_blank">Stellar.toml doc</a>
   * @param {string} value Stellar Address (ex. `bob*stellar.org`)
   * @param {object} [opts] Options object
   * @returns {Promise<module:Federation.Api.Record>} A promise that resolves to the federation record
   * @throws Will throw an error if the provided account ID is not a valid Dilithium2 public key.
   */
  static async resolve(value, opts = (cov_2ibq9usqf1().b[0][0]++, {})) {
    cov_2ibq9usqf1().f[0]++;
    cov_2ibq9usqf1().s[1]++;
    // Check if `value` is in account ID format
    if (value.indexOf("*") < 0) {
      cov_2ibq9usqf1().b[1][0]++;
      cov_2ibq9usqf1().s[2]++;
      if (!_stellarBase.StrKey.isValidDilithium2PublicKey(value)) {
        cov_2ibq9usqf1().b[2][0]++;
        cov_2ibq9usqf1().s[3]++;
        return Promise.reject(new Error("Invalid Account ID"));
      } else {
        cov_2ibq9usqf1().b[2][1]++;
      }
      cov_2ibq9usqf1().s[4]++;
      return Promise.resolve({
        account_id: value
      });
    } else {
      cov_2ibq9usqf1().b[1][1]++;
    }
    const addressParts = (cov_2ibq9usqf1().s[5]++, value.split("*"));
    const [, domain] = (cov_2ibq9usqf1().s[6]++, addressParts);
    cov_2ibq9usqf1().s[7]++;
    if ((cov_2ibq9usqf1().b[4][0]++, addressParts.length !== 2) || (cov_2ibq9usqf1().b[4][1]++, !domain)) {
      cov_2ibq9usqf1().b[3][0]++;
      cov_2ibq9usqf1().s[8]++;
      return Promise.reject(new Error("Invalid Stellar address"));
    } else {
      cov_2ibq9usqf1().b[3][1]++;
    }
    const federationServer = (cov_2ibq9usqf1().s[9]++, await FederationServer.createForDomain(domain, opts));
    cov_2ibq9usqf1().s[10]++;
    return federationServer.resolveAddress(value);
  }

  /**
   * Creates a `FederationServer` instance based on information from
   * [stellar.toml](https://developers.stellar.org/docs/issuing-assets/publishing-asset-info)
   * file for a given domain.
   *
   * If `stellar.toml` file does not exist for a given domain or it does not
   * contain information about a federation server Promise will reject.
   *
   * @example
   * StellarSdk.FederationServer.createForDomain('acme.com')
   *   .then(federationServer => {
   *     // federationServer.resolveAddress('bob').then(...)
   *   })
   *   .catch(error => {
   *     // stellar.toml does not exist or it does not contain information about federation server.
   *   });
   *
   * @see <a href="https://developers.stellar.org/docs/issuing-assets/publishing-asset-info" target="_blank">Stellar.toml doc</a>
   * @param {string} domain Domain to get federation server for
   * @param {module:Federation.Api.Options} [opts] Options object
   * @returns {Promise<module:Federation.Api.Record>} A promise that resolves to the federation record
   * @throws Will throw an error if the domain's stellar.toml file does not contain a federation server field.
   */
  static async createForDomain(domain, opts = (cov_2ibq9usqf1().b[5][0]++, {})) {
    cov_2ibq9usqf1().f[1]++;
    const tomlObject = (cov_2ibq9usqf1().s[11]++, await _stellartoml.Resolver.resolve(domain, opts));
    cov_2ibq9usqf1().s[12]++;
    if (!tomlObject.FEDERATION_SERVER) {
      cov_2ibq9usqf1().b[6][0]++;
      cov_2ibq9usqf1().s[13]++;
      return Promise.reject(new Error("stellar.toml does not contain FEDERATION_SERVER field"));
    } else {
      cov_2ibq9usqf1().b[6][1]++;
    }
    cov_2ibq9usqf1().s[14]++;
    return new FederationServer(tomlObject.FEDERATION_SERVER, domain, opts);
  }
  constructor(serverURL, domain, opts = (cov_2ibq9usqf1().b[7][0]++, {})) {
    cov_2ibq9usqf1().f[2]++;
    cov_2ibq9usqf1().s[15]++;
    // TODO `domain` regexp
    this.serverURL = (0, _urijs.default)(serverURL);
    cov_2ibq9usqf1().s[16]++;
    this.domain = domain;
    const allowHttp = (cov_2ibq9usqf1().s[17]++, typeof opts.allowHttp === "undefined" ? (cov_2ibq9usqf1().b[8][0]++, _config.Config.isAllowHttp()) : (cov_2ibq9usqf1().b[8][1]++, opts.allowHttp));
    cov_2ibq9usqf1().s[18]++;
    this.timeout = typeof opts.timeout === "undefined" ? (cov_2ibq9usqf1().b[9][0]++, _config.Config.getTimeout()) : (cov_2ibq9usqf1().b[9][1]++, opts.timeout);
    cov_2ibq9usqf1().s[19]++;
    if ((cov_2ibq9usqf1().b[11][0]++, this.serverURL.protocol() !== "https") && (cov_2ibq9usqf1().b[11][1]++, !allowHttp)) {
      cov_2ibq9usqf1().b[10][0]++;
      cov_2ibq9usqf1().s[20]++;
      throw new Error("Cannot connect to insecure federation server");
    } else {
      cov_2ibq9usqf1().b[10][1]++;
    }
  }

  /**
   * Get the federation record if the user was found for a given Stellar address
   * @see <a href="https://developers.stellar.org/docs/encyclopedia/federation" target="_blank">Federation doc</a>
   * @param {string} address Stellar address (ex. `bob*stellar.org`). If `FederationServer` was instantiated with `domain` param only username (ex. `bob`) can be passed.
   * @returns {Promise<module:Federation.Api.Record>} A promise that resolves to the federation record
   * @throws Will throw an error if the federated address does not contain a domain, or if the server object was not instantiated with a `domain` parameter
   */
  async resolveAddress(address) {
    cov_2ibq9usqf1().f[3]++;
    let stellarAddress = (cov_2ibq9usqf1().s[21]++, address);
    cov_2ibq9usqf1().s[22]++;
    if (address.indexOf("*") < 0) {
      cov_2ibq9usqf1().b[12][0]++;
      cov_2ibq9usqf1().s[23]++;
      if (!this.domain) {
        cov_2ibq9usqf1().b[13][0]++;
        cov_2ibq9usqf1().s[24]++;
        return Promise.reject(new Error("Unknown domain. Make sure `address` contains a domain (ex. `bob*stellar.org`) or pass `domain` parameter when instantiating the server object."));
      } else {
        cov_2ibq9usqf1().b[13][1]++;
      }
      cov_2ibq9usqf1().s[25]++;
      stellarAddress = `${address}*${this.domain}`;
    } else {
      cov_2ibq9usqf1().b[12][1]++;
    }
    const url = (cov_2ibq9usqf1().s[26]++, this.serverURL.query({
      type: "name",
      q: stellarAddress
    }));
    cov_2ibq9usqf1().s[27]++;
    return this._sendRequest(url);
  }

  /**
   * Given an account ID, get their federation record if the user was found
   * @see <a href="https://developers.stellar.org/docs/encyclopedia/federation" target="_blank">Federation doc</a>
   * @param {string} accountId Account ID (ex. `GBYNR2QJXLBCBTRN44MRORCMI4YO7FZPFBCNOKTOBCAAFC7KC3LNPRYS`)
   * @returns {Promise<module:Federation.Api.Record>} A promise that resolves to the federation record
   * @throws Will throw an error if the federation server returns an invalid memo value.
   * @throws Will throw an error if the federation server's response exceeds the allowed maximum size.
   * @throws {BadResponseError} Will throw an error if the server query fails with an improper response.
   */
  async resolveAccountId(accountId) {
    cov_2ibq9usqf1().f[4]++;
    const url = (cov_2ibq9usqf1().s[28]++, this.serverURL.query({
      type: "id",
      q: accountId
    }));
    cov_2ibq9usqf1().s[29]++;
    return this._sendRequest(url);
  }

  /**
   * Given a transactionId, get the federation record if the sender of the transaction was found
   * @see <a href="https://developers.stellar.org/docs/glossary/federation/" target="_blank">Federation doc</a>
   * @param {string} transactionId Transaction ID (ex. `3389e9f0f1a65f19736cacf544c2e825313e8447f569233bb8db39aa607c8889`)
   * @returns {Promise<module:Federation.Api.Record>} A promise that resolves to the federation record
   * @throws Will throw an error if the federation server returns an invalid memo value.
   * @throws Will throw an error if the federation server's response exceeds the allowed maximum size.
   * @throws {BadResponseError} Will throw an error if the server query fails with an improper response.
   */
  async resolveTransactionId(transactionId) {
    cov_2ibq9usqf1().f[5]++;
    const url = (cov_2ibq9usqf1().s[30]++, this.serverURL.query({
      type: "txid",
      q: transactionId
    }));
    cov_2ibq9usqf1().s[31]++;
    return this._sendRequest(url);
  }
  async _sendRequest(url) {
    cov_2ibq9usqf1().f[6]++;
    const timeout = (cov_2ibq9usqf1().s[32]++, this.timeout);
    cov_2ibq9usqf1().s[33]++;
    return _httpClient.httpClient.get(url.toString(), {
      maxContentLength: FEDERATION_RESPONSE_MAX_SIZE,
      timeout
    }).then(response => {
      cov_2ibq9usqf1().f[7]++;
      cov_2ibq9usqf1().s[34]++;
      if ((cov_2ibq9usqf1().b[15][0]++, typeof response.data.memo !== "undefined") && (cov_2ibq9usqf1().b[15][1]++, typeof response.data.memo !== "string")) {
        cov_2ibq9usqf1().b[14][0]++;
        cov_2ibq9usqf1().s[35]++;
        throw new Error("memo value should be of type string");
      } else {
        cov_2ibq9usqf1().b[14][1]++;
      }
      cov_2ibq9usqf1().s[36]++;
      return response.data;
    }).catch(response => {
      cov_2ibq9usqf1().f[8]++;
      cov_2ibq9usqf1().s[37]++;
      if (response instanceof Error) {
        cov_2ibq9usqf1().b[16][0]++;
        cov_2ibq9usqf1().s[38]++;
        if (response.message.match(/^maxContentLength size/)) {
          cov_2ibq9usqf1().b[17][0]++;
          cov_2ibq9usqf1().s[39]++;
          throw new Error(`federation response exceeds allowed size of ${FEDERATION_RESPONSE_MAX_SIZE}`);
        } else {
          cov_2ibq9usqf1().b[17][1]++;
          cov_2ibq9usqf1().s[40]++;
          return Promise.reject(response);
        }
      } else {
        cov_2ibq9usqf1().b[16][1]++;
        cov_2ibq9usqf1().s[41]++;
        return Promise.reject(new _errors.BadResponseError(`Server query failed. Server responded: ${response.status} ${response.statusText}`, response.data));
      }
    });
  }
}
exports.FederationServer = FederationServer;