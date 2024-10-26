"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUBMIT_TRANSACTION_TIMEOUT = exports.RpcServer = exports.Durability = void 0;
var _urijs = _interopRequireDefault(require("urijs"));
var _stellarBase = require("@stellar/stellar-base");
var _axios = _interopRequireDefault(require("./axios"));
var jsonrpc = _interopRequireWildcard(require("./jsonrpc"));
var _api = require("./api");
var _transaction = require("./transaction");
var _parsers = require("./parsers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_1rry66sjzw() {
  var path = "/mnt/g/stellar-sdk/src/rpc/server.ts";
  var hash = "d62cbc289e89d2c91d1b2cdd657154514d20a4af";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/rpc/server.ts",
    statementMap: {
      "0": {
        start: {
          line: 40,
          column: 42
        },
        end: {
          line: 40,
          column: 51
        }
      },
      "1": {
        start: {
          line: 101,
          column: 40
        },
        end: {
          line: 101,
          column: 42
        }
      },
      "2": {
        start: {
          line: 102,
          column: 2
        },
        end: {
          line: 113,
          column: 3
        }
      },
      "3": {
        start: {
          line: 104,
          column: 6
        },
        end: {
          line: 104,
          column: 37
        }
      },
      "4": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 105,
          column: 12
        }
      },
      "5": {
        start: {
          line: 109,
          column: 6
        },
        end: {
          line: 109,
          column: 72
        }
      },
      "6": {
        start: {
          line: 110,
          column: 6
        },
        end: {
          line: 110,
          column: 12
        }
      },
      "7": {
        start: {
          line: 112,
          column: 6
        },
        end: {
          line: 112,
          column: 66
        }
      },
      "8": {
        start: {
          line: 114,
          column: 25
        },
        end: {
          line: 122,
          column: 16
        }
      },
      "9": {
        start: {
          line: 115,
          column: 19
        },
        end: {
          line: 115,
          column: 31
        }
      },
      "10": {
        start: {
          line: 116,
          column: 15
        },
        end: {
          line: 117,
          column: 75
        }
      },
      "11": {
        start: {
          line: 124,
          column: 2
        },
        end: {
          line: 126,
          column: 3
        }
      },
      "12": {
        start: {
          line: 125,
          column: 4
        },
        end: {
          line: 125,
          column: 26
        }
      },
      "13": {
        start: {
          line: 127,
          column: 2
        },
        end: {
          line: 127,
          column: 55
        }
      },
      "14": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 155,
          column: 36
        }
      },
      "15": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 163,
          column: 5
        }
      },
      "16": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 162,
          column: 9
        }
      },
      "17": {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 160,
          column: 69
        }
      },
      "18": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 161,
          column: 22
        }
      },
      "19": {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 169,
          column: 5
        }
      },
      "20": {
        start: {
          line: 166,
          column: 6
        },
        end: {
          line: 168,
          column: 8
        }
      },
      "21": {
        start: {
          line: 191,
          column: 22
        },
        end: {
          line: 195,
          column: 5
        }
      },
      "22": {
        start: {
          line: 197,
          column: 17
        },
        end: {
          line: 197,
          column: 55
        }
      },
      "23": {
        start: {
          line: 198,
          column: 4
        },
        end: {
          line: 204,
          column: 5
        }
      },
      "24": {
        start: {
          line: 200,
          column: 6
        },
        end: {
          line: 203,
          column: 9
        }
      },
      "25": {
        start: {
          line: 206,
          column: 25
        },
        end: {
          line: 206,
          column: 54
        }
      },
      "26": {
        start: {
          line: 207,
          column: 4
        },
        end: {
          line: 207,
          column: 66
        }
      },
      "27": {
        start: {
          line: 226,
          column: 4
        },
        end: {
          line: 229,
          column: 6
        }
      },
      "28": {
        start: {
          line: 271,
          column: 4
        },
        end: {
          line: 279,
          column: 5
        }
      },
      "29": {
        start: {
          line: 272,
          column: 6
        },
        end: {
          line: 272,
          column: 65
        }
      },
      "30": {
        start: {
          line: 273,
          column: 11
        },
        end: {
          line: 279,
          column: 5
        }
      },
      "31": {
        start: {
          line: 274,
          column: 6
        },
        end: {
          line: 274,
          column: 41
        }
      },
      "32": {
        start: {
          line: 275,
          column: 11
        },
        end: {
          line: 279,
          column: 5
        }
      },
      "33": {
        start: {
          line: 276,
          column: 6
        },
        end: {
          line: 276,
          column: 51
        }
      },
      "34": {
        start: {
          line: 278,
          column: 6
        },
        end: {
          line: 278,
          column: 64
        }
      },
      "35": {
        start: {
          line: 282,
          column: 4
        },
        end: {
          line: 293,
          column: 5
        }
      },
      "36": {
        start: {
          line: 284,
          column: 8
        },
        end: {
          line: 284,
          column: 63
        }
      },
      "37": {
        start: {
          line: 285,
          column: 8
        },
        end: {
          line: 285,
          column: 14
        }
      },
      "38": {
        start: {
          line: 288,
          column: 8
        },
        end: {
          line: 288,
          column: 64
        }
      },
      "39": {
        start: {
          line: 289,
          column: 8
        },
        end: {
          line: 289,
          column: 14
        }
      },
      "40": {
        start: {
          line: 292,
          column: 8
        },
        end: {
          line: 292,
          column: 65
        }
      },
      "41": {
        start: {
          line: 295,
          column: 24
        },
        end: {
          line: 301,
          column: 5
        }
      },
      "42": {
        start: {
          line: 303,
          column: 4
        },
        end: {
          line: 319,
          column: 6
        }
      },
      "43": {
        start: {
          line: 305,
          column: 8
        },
        end: {
          line: 315,
          column: 9
        }
      },
      "44": {
        start: {
          line: 307,
          column: 10
        },
        end: {
          line: 314,
          column: 13
        }
      },
      "45": {
        start: {
          line: 317,
          column: 8
        },
        end: {
          line: 317,
          column: 28
        }
      },
      "46": {
        start: {
          line: 346,
          column: 30
        },
        end: {
          line: 346,
          column: 69
        }
      },
      "47": {
        start: {
          line: 347,
          column: 21
        },
        end: {
          line: 347,
          column: 67
        }
      },
      "48": {
        start: {
          line: 348,
          column: 4
        },
        end: {
          line: 351,
          column: 5
        }
      },
      "49": {
        start: {
          line: 350,
          column: 6
        },
        end: {
          line: 350,
          column: 96
        }
      },
      "50": {
        start: {
          line: 353,
          column: 21
        },
        end: {
          line: 358,
          column: 17
        }
      },
      "51": {
        start: {
          line: 360,
          column: 4
        },
        end: {
          line: 360,
          column: 48
        }
      },
      "52": {
        start: {
          line: 388,
          column: 27
        },
        end: {
          line: 388,
          column: 108
        }
      },
      "53": {
        start: {
          line: 390,
          column: 30
        },
        end: {
          line: 394,
          column: 5
        }
      },
      "54": {
        start: {
          line: 396,
          column: 25
        },
        end: {
          line: 396,
          column: 71
        }
      },
      "55": {
        start: {
          line: 397,
          column: 4
        },
        end: {
          line: 400,
          column: 5
        }
      },
      "56": {
        start: {
          line: 399,
          column: 6
        },
        end: {
          line: 399,
          column: 98
        }
      },
      "57": {
        start: {
          line: 401,
          column: 23
        },
        end: {
          line: 401,
          column: 72
        }
      },
      "58": {
        start: {
          line: 403,
          column: 4
        },
        end: {
          line: 403,
          column: 22
        }
      },
      "59": {
        start: {
          line: 442,
          column: 4
        },
        end: {
          line: 442,
          column: 71
        }
      },
      "60": {
        start: {
          line: 447,
          column: 4
        },
        end: {
          line: 453,
          column: 8
        }
      },
      "61": {
        start: {
          line: 451,
          column: 32
        },
        end: {
          line: 451,
          column: 49
        }
      },
      "62": {
        start: {
          line: 481,
          column: 4
        },
        end: {
          line: 501,
          column: 7
        }
      },
      "63": {
        start: {
          line: 485,
          column: 10
        },
        end: {
          line: 485,
          column: 19
        }
      },
      "64": {
        start: {
          line: 487,
          column: 6
        },
        end: {
          line: 489,
          column: 7
        }
      },
      "65": {
        start: {
          line: 488,
          column: 8
        },
        end: {
          line: 488,
          column: 60
        }
      },
      "66": {
        start: {
          line: 491,
          column: 49
        },
        end: {
          line: 498,
          column: 7
        }
      },
      "67": {
        start: {
          line: 500,
          column: 6
        },
        end: {
          line: 500,
          column: 20
        }
      },
      "68": {
        start: {
          line: 508,
          column: 4
        },
        end: {
          line: 508,
          column: 83
        }
      },
      "69": {
        start: {
          line: 530,
          column: 4
        },
        end: {
          line: 540,
          column: 7
        }
      },
      "70": {
        start: {
          line: 531,
          column: 50
        },
        end: {
          line: 538,
          column: 7
        }
      },
      "71": {
        start: {
          line: 539,
          column: 6
        },
        end: {
          line: 539,
          column: 19
        }
      },
      "72": {
        start: {
          line: 545,
          column: 4
        },
        end: {
          line: 545,
          column: 85
        }
      },
      "73": {
        start: {
          line: 592,
          column: 4
        },
        end: {
          line: 592,
          column: 57
        }
      },
      "74": {
        start: {
          line: 599,
          column: 4
        },
        end: {
          line: 611,
          column: 7
        }
      },
      "75": {
        start: {
          line: 631,
          column: 4
        },
        end: {
          line: 631,
          column: 71
        }
      },
      "76": {
        start: {
          line: 652,
          column: 4
        },
        end: {
          line: 652,
          column: 76
        }
      },
      "77": {
        start: {
          line: 701,
          column: 4
        },
        end: {
          line: 702,
          column: 32
        }
      },
      "78": {
        start: {
          line: 710,
          column: 4
        },
        end: {
          line: 721,
          column: 6
        }
      },
      "79": {
        start: {
          line: 795,
          column: 24
        },
        end: {
          line: 795,
          column: 58
        }
      },
      "80": {
        start: {
          line: 796,
          column: 4
        },
        end: {
          line: 798,
          column: 5
        }
      },
      "81": {
        start: {
          line: 797,
          column: 6
        },
        end: {
          line: 797,
          column: 41
        }
      },
      "82": {
        start: {
          line: 800,
          column: 4
        },
        end: {
          line: 800,
          column: 56
        }
      },
      "83": {
        start: {
          line: 851,
          column: 4
        },
        end: {
          line: 851,
          column: 76
        }
      },
      "84": {
        start: {
          line: 858,
          column: 4
        },
        end: {
          line: 862,
          column: 6
        }
      },
      "85": {
        start: {
          line: 896,
          column: 20
        },
        end: {
          line: 896,
          column: 79
        }
      },
      "86": {
        start: {
          line: 897,
          column: 4
        },
        end: {
          line: 897,
          column: 74
        }
      },
      "87": {
        start: {
          line: 898,
          column: 4
        },
        end: {
          line: 900,
          column: 5
        }
      },
      "88": {
        start: {
          line: 899,
          column: 6
        },
        end: {
          line: 899,
          column: 73
        }
      },
      "89": {
        start: {
          line: 902,
          column: 4
        },
        end: {
          line: 921,
          column: 5
        }
      },
      "90": {
        start: {
          line: 903,
          column: 23
        },
        end: {
          line: 905,
          column: 7
        }
      },
      "91": {
        start: {
          line: 907,
          column: 19
        },
        end: {
          line: 910,
          column: 7
        }
      },
      "92": {
        start: {
          line: 911,
          column: 23
        },
        end: {
          line: 911,
          column: 72
        }
      },
      "93": {
        start: {
          line: 912,
          column: 6
        },
        end: {
          line: 912,
          column: 44
        }
      },
      "94": {
        start: {
          line: 914,
          column: 6
        },
        end: {
          line: 919,
          column: 7
        }
      },
      "95": {
        start: {
          line: 915,
          column: 8
        },
        end: {
          line: 918,
          column: 9
        }
      },
      "96": {
        start: {
          line: 917,
          column: 10
        },
        end: {
          line: 917,
          column: 42
        }
      },
      "97": {
        start: {
          line: 920,
          column: 6
        },
        end: {
          line: 920,
          column: 18
        }
      },
      "98": {
        start: {
          line: 933,
          column: 4
        },
        end: {
          line: 933,
          column: 72
        }
      },
      "99": {
        start: {
          line: 944,
          column: 4
        },
        end: {
          line: 944,
          column: 75
        }
      },
      "100": {
        start: {
          line: 991,
          column: 6
        },
        end: {
          line: 993,
          column: 7
        }
      },
      "101": {
        start: {
          line: 992,
          column: 8
        },
        end: {
          line: 992,
          column: 71
        }
      },
      "102": {
        start: {
          line: 996,
          column: 33
        },
        end: {
          line: 997,
          column: 58
        }
      },
      "103": {
        start: {
          line: 997,
          column: 45
        },
        end: {
          line: 997,
          column: 57
        }
      },
      "104": {
        start: {
          line: 1000,
          column: 20
        },
        end: {
          line: 1000,
          column: 46
        }
      },
      "105": {
        start: {
          line: 1003,
          column: 18
        },
        end: {
          line: 1006,
          column: 8
        }
      },
      "106": {
        start: {
          line: 1013,
          column: 24
        },
        end: {
          line: 1019,
          column: 7
        }
      },
      "107": {
        start: {
          line: 1021,
          column: 23
        },
        end: {
          line: 1021,
          column: 61
        }
      },
      "108": {
        start: {
          line: 1022,
          column: 6
        },
        end: {
          line: 1024,
          column: 7
        }
      },
      "109": {
        start: {
          line: 1023,
          column: 8
        },
        end: {
          line: 1023,
          column: 55
        }
      },
      "110": {
        start: {
          line: 1030,
          column: 10
        },
        end: {
          line: 1030,
          column: 29
        }
      },
      "111": {
        start: {
          line: 1032,
          column: 6
        },
        end: {
          line: 1034,
          column: 7
        }
      },
      "112": {
        start: {
          line: 1033,
          column: 8
        },
        end: {
          line: 1033,
          column: 55
        }
      },
      "113": {
        start: {
          line: 1036,
          column: 20
        },
        end: {
          line: 1036,
          column: 59
        }
      },
      "114": {
        start: {
          line: 1041,
          column: 6
        },
        end: {
          line: 1050,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "findCreatedAccountSequenceInTransactionMeta",
        decl: {
          start: {
            line: 98,
            column: 9
          },
          end: {
            line: 98,
            column: 52
          }
        },
        loc: {
          start: {
            line: 100,
            column: 10
          },
          end: {
            line: 128,
            column: 1
          }
        },
        line: 100
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 115,
            column: 13
          },
          end: {
            line: 115,
            column: 14
          }
        },
        loc: {
          start: {
            line: 115,
            column: 19
          },
          end: {
            line: 115,
            column: 31
          }
        },
        line: 115
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 116,
            column: 10
          },
          end: {
            line: 116,
            column: 11
          }
        },
        loc: {
          start: {
            line: 116,
            column: 15
          },
          end: {
            line: 117,
            column: 75
          }
        },
        line: 116
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 150,
            column: 2
          },
          end: {
            line: 150,
            column: 3
          }
        },
        loc: {
          start: {
            line: 150,
            column: 63
          },
          end: {
            line: 170,
            column: 3
          }
        },
        line: 150
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 158,
            column: 43
          },
          end: {
            line: 158,
            column: 44
          }
        },
        loc: {
          start: {
            line: 158,
            column: 60
          },
          end: {
            line: 162,
            column: 7
          }
        },
        line: 158
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 190,
            column: 2
          },
          end: {
            line: 190,
            column: 3
          }
        },
        loc: {
          start: {
            line: 190,
            column: 61
          },
          end: {
            line: 208,
            column: 3
          }
        },
        line: 190
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 225,
            column: 2
          },
          end: {
            line: 225,
            column: 3
          }
        },
        loc: {
          start: {
            line: 225,
            column: 59
          },
          end: {
            line: 230,
            column: 3
          }
        },
        line: 225
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 264,
            column: 2
          },
          end: {
            line: 264,
            column: 3
          }
        },
        loc: {
          start: {
            line: 268,
            column: 36
          },
          end: {
            line: 320,
            column: 3
          }
        },
        line: 268
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 304,
            column: 7
          }
        },
        loc: {
          start: {
            line: 304,
            column: 43
          },
          end: {
            line: 318,
            column: 7
          }
        },
        line: 304
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 343,
            column: 2
          },
          end: {
            line: 343,
            column: 3
          }
        },
        loc: {
          start: {
            line: 345,
            column: 21
          },
          end: {
            line: 361,
            column: 3
          }
        },
        line: 345
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 384,
            column: 2
          },
          end: {
            line: 384,
            column: 3
          }
        },
        loc: {
          start: {
            line: 387,
            column: 21
          },
          end: {
            line: 404,
            column: 3
          }
        },
        line: 387
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 439,
            column: 2
          },
          end: {
            line: 439,
            column: 3
          }
        },
        loc: {
          start: {
            line: 441,
            column: 43
          },
          end: {
            line: 443,
            column: 3
          }
        },
        line: 441
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 446,
            column: 2
          },
          end: {
            line: 446,
            column: 3
          }
        },
        loc: {
          start: {
            line: 446,
            column: 59
          },
          end: {
            line: 454,
            column: 3
          }
        },
        line: 446
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 451,
            column: 25
          },
          end: {
            line: 451,
            column: 26
          }
        },
        loc: {
          start: {
            line: 451,
            column: 32
          },
          end: {
            line: 451,
            column: 49
          }
        },
        line: 451
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 478,
            column: 2
          },
          end: {
            line: 478,
            column: 3
          }
        },
        loc: {
          start: {
            line: 480,
            column: 41
          },
          end: {
            line: 502,
            column: 3
          }
        },
        line: 480
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 481,
            column: 43
          },
          end: {
            line: 481,
            column: 44
          }
        },
        loc: {
          start: {
            line: 481,
            column: 52
          },
          end: {
            line: 501,
            column: 5
          }
        },
        line: 481
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 505,
            column: 2
          },
          end: {
            line: 505,
            column: 3
          }
        },
        loc: {
          start: {
            line: 507,
            column: 44
          },
          end: {
            line: 509,
            column: 3
          }
        },
        line: 507
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 529,
            column: 2
          },
          end: {
            line: 529,
            column: 3
          }
        },
        loc: {
          start: {
            line: 529,
            column: 106
          },
          end: {
            line: 541,
            column: 3
          }
        },
        line: 529
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 530,
            column: 47
          },
          end: {
            line: 530,
            column: 48
          }
        },
        loc: {
          start: {
            line: 530,
            column: 88
          },
          end: {
            line: 540,
            column: 5
          }
        },
        line: 530
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 544,
            column: 2
          },
          end: {
            line: 544,
            column: 3
          }
        },
        loc: {
          start: {
            line: 544,
            column: 111
          },
          end: {
            line: 546,
            column: 3
          }
        },
        line: 544
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 589,
            column: 2
          },
          end: {
            line: 589,
            column: 3
          }
        },
        loc: {
          start: {
            line: 591,
            column: 36
          },
          end: {
            line: 593,
            column: 3
          }
        },
        line: 591
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 596,
            column: 2
          },
          end: {
            line: 596,
            column: 3
          }
        },
        loc: {
          start: {
            line: 598,
            column: 39
          },
          end: {
            line: 612,
            column: 3
          }
        },
        line: 598
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 630,
            column: 2
          },
          end: {
            line: 630,
            column: 3
          }
        },
        loc: {
          start: {
            line: 630,
            column: 61
          },
          end: {
            line: 632,
            column: 3
          }
        },
        line: 630
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 651,
            column: 2
          },
          end: {
            line: 651,
            column: 3
          }
        },
        loc: {
          start: {
            line: 651,
            column: 71
          },
          end: {
            line: 653,
            column: 3
          }
        },
        line: 651
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 697,
            column: 2
          },
          end: {
            line: 697,
            column: 3
          }
        },
        loc: {
          start: {
            line: 700,
            column: 46
          },
          end: {
            line: 703,
            column: 3
          }
        },
        line: 700
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 706,
            column: 2
          },
          end: {
            line: 706,
            column: 3
          }
        },
        loc: {
          start: {
            line: 709,
            column: 49
          },
          end: {
            line: 722,
            column: 3
          }
        },
        line: 709
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 794,
            column: 2
          },
          end: {
            line: 794,
            column: 3
          }
        },
        loc: {
          start: {
            line: 794,
            column: 72
          },
          end: {
            line: 801,
            column: 3
          }
        },
        line: 794
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 848,
            column: 2
          },
          end: {
            line: 848,
            column: 3
          }
        },
        loc: {
          start: {
            line: 850,
            column: 42
          },
          end: {
            line: 852,
            column: 3
          }
        },
        line: 850
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 855,
            column: 2
          },
          end: {
            line: 855,
            column: 3
          }
        },
        loc: {
          start: {
            line: 857,
            column: 45
          },
          end: {
            line: 863,
            column: 3
          }
        },
        line: 857
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 892,
            column: 2
          },
          end: {
            line: 892,
            column: 3
          }
        },
        loc: {
          start: {
            line: 895,
            column: 22
          },
          end: {
            line: 922,
            column: 3
          }
        },
        line: 895
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 932,
            column: 2
          },
          end: {
            line: 932,
            column: 3
          }
        },
        loc: {
          start: {
            line: 932,
            column: 63
          },
          end: {
            line: 934,
            column: 3
          }
        },
        line: 932
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 943,
            column: 2
          },
          end: {
            line: 943,
            column: 3
          }
        },
        loc: {
          start: {
            line: 943,
            column: 69
          },
          end: {
            line: 945,
            column: 3
          }
        },
        line: 943
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 986,
            column: 2
          },
          end: {
            line: 986,
            column: 3
          }
        },
        loc: {
          start: {
            line: 990,
            column: 34
          },
          end: {
            line: 1051,
            column: 3
          }
        },
        line: 990
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 997,
            column: 40
          },
          end: {
            line: 997,
            column: 41
          }
        },
        loc: {
          start: {
            line: 997,
            column: 45
          },
          end: {
            line: 997,
            column: 57
          }
        },
        line: 997
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 102,
            column: 2
          },
          end: {
            line: 113,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 105,
            column: 12
          }
        }, {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 11
          }
        }, {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 11
          }
        }, {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 110,
            column: 12
          }
        }, {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 112,
            column: 66
          }
        }],
        line: 102
      },
      "1": {
        loc: {
          start: {
            line: 116,
            column: 15
          },
          end: {
            line: 117,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 116,
            column: 15
          },
          end: {
            line: 116,
            column: 76
          }
        }, {
          start: {
            line: 117,
            column: 14
          },
          end: {
            line: 117,
            column: 75
          }
        }],
        line: 116
      },
      "2": {
        loc: {
          start: {
            line: 124,
            column: 2
          },
          end: {
            line: 126,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 124,
            column: 2
          },
          end: {
            line: 126,
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
        line: 124
      },
      "3": {
        loc: {
          start: {
            line: 150,
            column: 33
          },
          end: {
            line: 150,
            column: 61
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 150,
            column: 59
          },
          end: {
            line: 150,
            column: 61
          }
        }],
        line: 150
      },
      "4": {
        loc: {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 163,
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
        line: 157
      },
      "5": {
        loc: {
          start: {
            line: 157,
            column: 8
          },
          end: {
            line: 157,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 157,
            column: 8
          },
          end: {
            line: 157,
            column: 20
          }
        }, {
          start: {
            line: 157,
            column: 24
          },
          end: {
            line: 157,
            column: 62
          }
        }],
        line: 157
      },
      "6": {
        loc: {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 169,
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
        line: 165
      },
      "7": {
        loc: {
          start: {
            line: 165,
            column: 8
          },
          end: {
            line: 165,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 165,
            column: 8
          },
          end: {
            line: 165,
            column: 45
          }
        }, {
          start: {
            line: 165,
            column: 49
          },
          end: {
            line: 165,
            column: 64
          }
        }],
        line: 165
      },
      "8": {
        loc: {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 204,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 204,
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
        line: 198
      },
      "9": {
        loc: {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 267,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 267,
            column: 29
          },
          end: {
            line: 267,
            column: 50
          }
        }],
        line: 267
      },
      "10": {
        loc: {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 279,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 279,
            column: 5
          }
        }, {
          start: {
            line: 273,
            column: 11
          },
          end: {
            line: 279,
            column: 5
          }
        }],
        line: 271
      },
      "11": {
        loc: {
          start: {
            line: 273,
            column: 11
          },
          end: {
            line: 279,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 273,
            column: 11
          },
          end: {
            line: 279,
            column: 5
          }
        }, {
          start: {
            line: 275,
            column: 11
          },
          end: {
            line: 279,
            column: 5
          }
        }],
        line: 273
      },
      "12": {
        loc: {
          start: {
            line: 275,
            column: 11
          },
          end: {
            line: 279,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 275,
            column: 11
          },
          end: {
            line: 279,
            column: 5
          }
        }, {
          start: {
            line: 277,
            column: 11
          },
          end: {
            line: 279,
            column: 5
          }
        }],
        line: 275
      },
      "13": {
        loc: {
          start: {
            line: 282,
            column: 4
          },
          end: {
            line: 293,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 283,
            column: 6
          },
          end: {
            line: 285,
            column: 14
          }
        }, {
          start: {
            line: 287,
            column: 6
          },
          end: {
            line: 289,
            column: 14
          }
        }, {
          start: {
            line: 291,
            column: 6
          },
          end: {
            line: 292,
            column: 65
          }
        }],
        line: 282
      },
      "14": {
        loc: {
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 315,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 315,
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
        line: 305
      },
      "15": {
        loc: {
          start: {
            line: 348,
            column: 4
          },
          end: {
            line: 351,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 348,
            column: 4
          },
          end: {
            line: 351,
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
        line: 348
      },
      "16": {
        loc: {
          start: {
            line: 348,
            column: 8
          },
          end: {
            line: 348,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 348,
            column: 8
          },
          end: {
            line: 348,
            column: 32
          }
        }, {
          start: {
            line: 348,
            column: 36
          },
          end: {
            line: 348,
            column: 61
          }
        }],
        line: 348
      },
      "17": {
        loc: {
          start: {
            line: 386,
            column: 4
          },
          end: {
            line: 386,
            column: 52
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 386,
            column: 43
          },
          end: {
            line: 386,
            column: 52
          }
        }],
        line: 386
      },
      "18": {
        loc: {
          start: {
            line: 388,
            column: 27
          },
          end: {
            line: 388,
            column: 108
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 388,
            column: 58
          },
          end: {
            line: 388,
            column: 87
          }
        }, {
          start: {
            line: 388,
            column: 90
          },
          end: {
            line: 388,
            column: 108
          }
        }],
        line: 388
      },
      "19": {
        loc: {
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 400,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 400,
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
        line: 397
      },
      "20": {
        loc: {
          start: {
            line: 397,
            column: 8
          },
          end: {
            line: 397,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 397,
            column: 8
          },
          end: {
            line: 397,
            column: 36
          }
        }, {
          start: {
            line: 397,
            column: 40
          },
          end: {
            line: 397,
            column: 69
          }
        }],
        line: 397
      },
      "21": {
        loc: {
          start: {
            line: 487,
            column: 6
          },
          end: {
            line: 489,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 487,
            column: 6
          },
          end: {
            line: 489,
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
        line: 487
      },
      "22": {
        loc: {
          start: {
            line: 600,
            column: 15
          },
          end: {
            line: 600,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 600,
            column: 15
          },
          end: {
            line: 600,
            column: 30
          }
        }, {
          start: {
            line: 600,
            column: 34
          },
          end: {
            line: 600,
            column: 36
          }
        }],
        line: 600
      },
      "23": {
        loc: {
          start: {
            line: 602,
            column: 12
          },
          end: {
            line: 602,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 602,
            column: 12
          },
          end: {
            line: 602,
            column: 26
          }
        }, {
          start: {
            line: 602,
            column: 30
          },
          end: {
            line: 602,
            column: 56
          }
        }],
        line: 602
      },
      "24": {
        loc: {
          start: {
            line: 603,
            column: 12
          },
          end: {
            line: 603,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 603,
            column: 12
          },
          end: {
            line: 603,
            column: 25
          }
        }, {
          start: {
            line: 603,
            column: 29
          },
          end: {
            line: 603,
            column: 53
          }
        }],
        line: 603
      },
      "25": {
        loc: {
          start: {
            line: 605,
            column: 10
          },
          end: {
            line: 607,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 605,
            column: 10
          },
          end: {
            line: 605,
            column: 29
          }
        }, {
          start: {
            line: 605,
            column: 33
          },
          end: {
            line: 607,
            column: 7
          }
        }],
        line: 605
      },
      "26": {
        loc: {
          start: {
            line: 608,
            column: 10
          },
          end: {
            line: 610,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 608,
            column: 10
          },
          end: {
            line: 608,
            column: 27
          }
        }, {
          start: {
            line: 608,
            column: 31
          },
          end: {
            line: 610,
            column: 7
          }
        }],
        line: 608
      },
      "27": {
        loc: {
          start: {
            line: 715,
            column: 12
          },
          end: {
            line: 719,
            column: 9
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 715,
            column: 12
          },
          end: {
            line: 715,
            column: 39
          }
        }, {
          start: {
            line: 715,
            column: 43
          },
          end: {
            line: 719,
            column: 9
          }
        }],
        line: 715
      },
      "28": {
        loc: {
          start: {
            line: 796,
            column: 4
          },
          end: {
            line: 798,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 796,
            column: 4
          },
          end: {
            line: 798,
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
        line: 796
      },
      "29": {
        loc: {
          start: {
            line: 896,
            column: 20
          },
          end: {
            line: 896,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 896,
            column: 50
          },
          end: {
            line: 896,
            column: 57
          }
        }, {
          start: {
            line: 896,
            column: 60
          },
          end: {
            line: 896,
            column: 79
          }
        }],
        line: 896
      },
      "30": {
        loc: {
          start: {
            line: 897,
            column: 19
          },
          end: {
            line: 897,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 897,
            column: 19
          },
          end: {
            line: 897,
            column: 31
          }
        }, {
          start: {
            line: 897,
            column: 35
          },
          end: {
            line: 897,
            column: 73
          }
        }],
        line: 897
      },
      "31": {
        loc: {
          start: {
            line: 898,
            column: 4
          },
          end: {
            line: 900,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 898,
            column: 4
          },
          end: {
            line: 900,
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
        line: 898
      },
      "32": {
        loc: {
          start: {
            line: 914,
            column: 6
          },
          end: {
            line: 919,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 914,
            column: 6
          },
          end: {
            line: 919,
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
        line: 914
      },
      "33": {
        loc: {
          start: {
            line: 915,
            column: 8
          },
          end: {
            line: 918,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 915,
            column: 8
          },
          end: {
            line: 918,
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
        line: 915
      },
      "34": {
        loc: {
          start: {
            line: 991,
            column: 6
          },
          end: {
            line: 993,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 991,
            column: 6
          },
          end: {
            line: 993,
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
        line: 991
      },
      "35": {
        loc: {
          start: {
            line: 996,
            column: 33
          },
          end: {
            line: 997,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 996,
            column: 33
          },
          end: {
            line: 996,
            column: 50
          }
        }, {
          start: {
            line: 997,
            column: 11
          },
          end: {
            line: 997,
            column: 58
          }
        }],
        line: 996
      },
      "36": {
        loc: {
          start: {
            line: 1022,
            column: 6
          },
          end: {
            line: 1024,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1022,
            column: 6
          },
          end: {
            line: 1024,
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
        line: 1022
      },
      "37": {
        loc: {
          start: {
            line: 1032,
            column: 6
          },
          end: {
            line: 1034,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1032,
            column: 6
          },
          end: {
            line: 1034,
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
        line: 1032
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
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0
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
      "33": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d62cbc289e89d2c91d1b2cdd657154514d20a4af"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rry66sjzw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1rry66sjzw();
/* tslint:disable:variable-name no-namespace */
// eslint-disable-next-line import/no-named-as-default
/**
 * Default transaction submission timeout for RPC requests, in milliseconds
 * @constant {number}
 * @default 60000
 * @memberof module:rpc.Server
 */
const SUBMIT_TRANSACTION_TIMEOUT = exports.SUBMIT_TRANSACTION_TIMEOUT = (cov_1rry66sjzw().s[0]++, 60 * 1000);

/**
 * Specifies the durability namespace of contract-related ledger entries.
 * @enum {('temporary' | 'persistent')}
 * @memberof module:rpc
 *
 * @see {@link https://developers.stellar.org/docs/learn/smart-contract-internals/state-archival | State Archival docs}
 * @see {@link https://docs.rs/soroban-sdk/latest/soroban_sdk/storage/struct.Storage.html | Rust SDK Storage docs}
 */
let Durability = exports.Durability = /*#__PURE__*/function (Durability) {
  Durability["Temporary"] = "temporary";
  Durability["Persistent"] = "persistent";
  return Durability;
}({});
/**
 * @typedef {object} GetEventsRequest Describes the complex filter combinations available for event queries.
 * @property {Array.<module:rpc.Api.EventFilter>} filters Filters to use when querying events from the RPC server.
 * @property {number} [startLedger] Ledger number (inclusive) to begin querying events.
 * @property {string} [cursor] Page cursor (exclusive) to begin querying events.
 * @property {number} [limit=100] The maximum number of events that should be returned in the RPC response.
 * @memberof module:rpc.Server
 */
/**
 * @typedef {object} ResourceLeeway Describes additional resource leeways for transaction simulation.
 * @property {number} cpuInstructions Simulate the transaction with more CPU instructions available.
 * @memberof module:rpc.Server
 */
/**
 * @typedef {object} Options Options for configuring connections to RPC servers.
 * @property {boolean} [allowHttp=false] Allow connecting to http servers, default: `false`. This must be set to false in production deployments!
 * @property {number} [timeout=0] Allow a timeout, default: 0. Allows user to avoid nasty lag. You can also use {@link Config} class to set this globally.
 * @property {Record<string, string>} [headers] Additional headers that should be added to any requests to the RPC server.
 * @memberof module:rpc.Server
 */
function findCreatedAccountSequenceInTransactionMeta(meta) {
  cov_1rry66sjzw().f[0]++;
  let operations = (cov_1rry66sjzw().s[1]++, []);
  cov_1rry66sjzw().s[2]++;
  switch (meta.switch()) {
    case 0:
      cov_1rry66sjzw().b[0][0]++;
      cov_1rry66sjzw().s[3]++;
      operations = meta.operations();
      cov_1rry66sjzw().s[4]++;
      break;
    case 1:
      cov_1rry66sjzw().b[0][1]++;
    case 2:
      cov_1rry66sjzw().b[0][2]++;
    case 3:
      cov_1rry66sjzw().b[0][3]++;
      cov_1rry66sjzw().s[5]++;
      // all three have the same interface
      operations = meta.value().operations();
      cov_1rry66sjzw().s[6]++;
      break;
    default:
      cov_1rry66sjzw().b[0][4]++;
      cov_1rry66sjzw().s[7]++;
      throw new Error('Unexpected transaction meta switch value');
  }
  const sequenceNumber = (cov_1rry66sjzw().s[8]++, operations.flatMap(op => {
    cov_1rry66sjzw().f[1]++;
    cov_1rry66sjzw().s[9]++;
    return op.changes();
  }).find(c => {
    cov_1rry66sjzw().f[2]++;
    cov_1rry66sjzw().s[10]++;
    return (cov_1rry66sjzw().b[1][0]++, c.switch() === _stellarBase.xdr.LedgerEntryChangeType.ledgerEntryCreated()) && (cov_1rry66sjzw().b[1][1]++, c.created().data().switch() === _stellarBase.xdr.LedgerEntryType.account());
  })?.created()?.data()?.account()?.seqNum()?.toString());
  cov_1rry66sjzw().s[11]++;
  if (sequenceNumber) {
    cov_1rry66sjzw().b[2][0]++;
    cov_1rry66sjzw().s[12]++;
    return sequenceNumber;
  } else {
    cov_1rry66sjzw().b[2][1]++;
  }
  cov_1rry66sjzw().s[13]++;
  throw new Error('No account created in transaction');
}

/* eslint-disable jsdoc/no-undefined-types */
/**
 * Handles the network connection to a Soroban RPC instance, exposing an
 * interface for requests to that instance.
 *
 * @alias module:rpc.Server
 * @memberof module:rpc
 *
 * @param {string} serverURL Soroban-RPC Server URL (ex. `http://localhost:8000/soroban/rpc`).
 * @param {module:rpc.Server.Options} [opts] Options object
 * @param {boolean} [opts.allowHttp] Allows connecting to insecure http servers
 *    (default: `false`). This must be set to false in production deployments!
 *    You can also use {@link Config} class to set this globally.
 * @param {Record<string, string>} [opts.headers] Allows setting custom headers
 *
 * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods | API reference docs}
 */
class RpcServer {
  constructor(serverURL, opts = (cov_1rry66sjzw().b[3][0]++, {})) {
    cov_1rry66sjzw().f[3]++;
    cov_1rry66sjzw().s[14]++;
    /**
     * RPC Server URL (ex. `http://localhost:8000/soroban/rpc`).
     * @member {URI}
     */
    this.serverURL = (0, _urijs.default)(serverURL);
    cov_1rry66sjzw().s[15]++;
    if ((cov_1rry66sjzw().b[5][0]++, opts.headers) && (cov_1rry66sjzw().b[5][1]++, Object.keys(opts.headers).length !== 0)) {
      cov_1rry66sjzw().b[4][0]++;
      cov_1rry66sjzw().s[16]++;
      _axios.default.interceptors.request.use(config => {
        cov_1rry66sjzw().f[4]++;
        cov_1rry66sjzw().s[17]++;
        // merge the custom headers into any existing headers
        config.headers = Object.assign(config.headers, opts.headers);
        cov_1rry66sjzw().s[18]++;
        return config;
      });
    } else {
      cov_1rry66sjzw().b[4][1]++;
    }
    cov_1rry66sjzw().s[19]++;
    if ((cov_1rry66sjzw().b[7][0]++, this.serverURL.protocol() !== 'https') && (cov_1rry66sjzw().b[7][1]++, !opts.allowHttp)) {
      cov_1rry66sjzw().b[6][0]++;
      cov_1rry66sjzw().s[20]++;
      throw new Error("Cannot connect to insecure Soroban RPC server if `allowHttp` isn't set");
    } else {
      cov_1rry66sjzw().b[6][1]++;
    }
  }

  /**
   * Fetch a minimal set of current info about a Stellar account.
   *
   * Needed to get the current sequence number for the account so you can build
   * a successful transaction with {@link TransactionBuilder}.
   *
   * @param {string} address The public address of the account to load.
   * @returns {Promise<Account>} A promise which resolves to the {@link Account}
   * object with a populated sequence number
   *
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/getLedgerEntries | getLedgerEntries docs}
   *
   * @example
   * const accountId = "GBZC6Y2Y7Q3ZQ2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4";
   * server.getAccount(accountId).then((account) => {
   *   console.log("sequence:", account.sequence);
   * });
   */
  async getAccount(address) {
    cov_1rry66sjzw().f[5]++;
    const ledgerKey = (cov_1rry66sjzw().s[21]++, _stellarBase.xdr.LedgerKey.account(new _stellarBase.xdr.LedgerKeyAccount({
      accountId: _stellarBase.Keypair.fromPublicKey(address).xdrPublicKey()
    })));
    const resp = (cov_1rry66sjzw().s[22]++, await this.getLedgerEntries(ledgerKey));
    cov_1rry66sjzw().s[23]++;
    if (resp.entries.length === 0) {
      cov_1rry66sjzw().b[8][0]++;
      cov_1rry66sjzw().s[24]++;
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        code: 404,
        message: `Account not found: ${address}`
      });
    } else {
      cov_1rry66sjzw().b[8][1]++;
    }
    const accountEntry = (cov_1rry66sjzw().s[25]++, resp.entries[0].val.account());
    cov_1rry66sjzw().s[26]++;
    return new _stellarBase.Account(address, accountEntry.seqNum().toString());
  }

  /**
   * General node health check.
   *
   * @returns {Promise<Api.GetHealthResponse>} A promise which resolves to the
   * {@link Api.GetHealthResponse} object with the status of the
   * server (e.g. "healthy").
   *
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/getHealth | getLedgerEntries docs}
   *
   * @example
   * server.getHealth().then((health) => {
   *   console.log("status:", health.status);
   * });
   */
  // eslint-disable-next-line require-await
  async getHealth() {
    cov_1rry66sjzw().f[6]++;
    cov_1rry66sjzw().s[27]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'getHealth');
  }

  /**
   * Reads the current value of contract data ledger entries directly.
   *
   * Allows you to directly inspect the current state of a contract. This is a
   * backup way to access your contract data which may not be available via
   * events or {@link module:rpc.Server#simulateTransaction}.
   *
   * @param {string|Address|Contract} contract The contract ID containing the
   *    data to load as a strkey (`C...` form), a {@link Contract}, or an
   *    {@link Address} instance
   * @param {xdr.ScVal} key The key of the contract data to load
   * @param {module:rpc.Durability} [durability=Durability.Persistent] The "durability
   *    keyspace" that this ledger key belongs to, which is either 'temporary'
   *    or 'persistent' (the default), see {@link module:rpc.Durability}.
   * @returns {Promise<Api.LedgerEntryResult>} The current data value
   *
   * @warning If the data entry in question is a 'temporary' entry, it's
   *    entirely possible that it has expired out of existence.
   *
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/getLedgerEntries | getLedgerEntries docs}
   *
   * @example
   * const contractId = "CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5";
   * const key = xdr.ScVal.scvSymbol("counter");
   * server.getContractData(contractId, key, Durability.Temporary).then(data => {
   *   console.log("value:", data.val);
   *   console.log("liveUntilLedgerSeq:", data.liveUntilLedgerSeq);
   *   console.log("lastModified:", data.lastModifiedLedgerSeq);
   *   console.log("latestLedger:", data.latestLedger);
   * });
   */
  // eslint-disable-next-line require-await
  async getContractData(contract, key, durability = (cov_1rry66sjzw().b[9][0]++, Durability.Persistent)) {
    cov_1rry66sjzw().f[7]++;
    // coalesce `contract` param variants to an ScAddress
    let scAddress;
    cov_1rry66sjzw().s[28]++;
    if (typeof contract === 'string') {
      cov_1rry66sjzw().b[10][0]++;
      cov_1rry66sjzw().s[29]++;
      scAddress = new _stellarBase.Contract(contract).address().toScAddress();
    } else {
      cov_1rry66sjzw().b[10][1]++;
      cov_1rry66sjzw().s[30]++;
      if (contract instanceof _stellarBase.Address) {
        cov_1rry66sjzw().b[11][0]++;
        cov_1rry66sjzw().s[31]++;
        scAddress = contract.toScAddress();
      } else {
        cov_1rry66sjzw().b[11][1]++;
        cov_1rry66sjzw().s[32]++;
        if (contract instanceof _stellarBase.Contract) {
          cov_1rry66sjzw().b[12][0]++;
          cov_1rry66sjzw().s[33]++;
          scAddress = contract.address().toScAddress();
        } else {
          cov_1rry66sjzw().b[12][1]++;
          cov_1rry66sjzw().s[34]++;
          throw new TypeError(`unknown contract type: ${contract}`);
        }
      }
    }
    let xdrDurability;
    cov_1rry66sjzw().s[35]++;
    switch (durability) {
      case Durability.Temporary:
        cov_1rry66sjzw().b[13][0]++;
        cov_1rry66sjzw().s[36]++;
        xdrDurability = _stellarBase.xdr.ContractDataDurability.temporary();
        cov_1rry66sjzw().s[37]++;
        break;
      case Durability.Persistent:
        cov_1rry66sjzw().b[13][1]++;
        cov_1rry66sjzw().s[38]++;
        xdrDurability = _stellarBase.xdr.ContractDataDurability.persistent();
        cov_1rry66sjzw().s[39]++;
        break;
      default:
        cov_1rry66sjzw().b[13][2]++;
        cov_1rry66sjzw().s[40]++;
        throw new TypeError(`invalid durability: ${durability}`);
    }
    const contractKey = (cov_1rry66sjzw().s[41]++, _stellarBase.xdr.LedgerKey.contractData(new _stellarBase.xdr.LedgerKeyContractData({
      key,
      contract: scAddress,
      durability: xdrDurability
    })));
    cov_1rry66sjzw().s[42]++;
    return this.getLedgerEntries(contractKey).then(r => {
      cov_1rry66sjzw().f[8]++;
      cov_1rry66sjzw().s[43]++;
      if (r.entries.length === 0) {
        cov_1rry66sjzw().b[14][0]++;
        cov_1rry66sjzw().s[44]++;
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          code: 404,
          message: `Contract data not found. Contract: ${_stellarBase.Address.fromScAddress(scAddress).toString()}, Key: ${key.toXDR('base64')}, Durability: ${durability}`
        });
      } else {
        cov_1rry66sjzw().b[14][1]++;
      }
      cov_1rry66sjzw().s[45]++;
      return r.entries[0];
    });
  }

  /**
   * Retrieves the WASM bytecode for a given contract.
   *
   * This method allows you to fetch the WASM bytecode associated with a contract
   * deployed on the Soroban network. The WASM bytecode represents the executable
   * code of the contract.
   *
   * @param {string} contractId The contract ID containing the WASM bytecode to retrieve
   * @returns {Promise<Buffer>} A Buffer containing the WASM bytecode
   * @throws {Error} If the contract or its associated WASM bytecode cannot be
   * found on the network.
   *
   * @example
   * const contractId = "CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5";
   * server.getContractWasmByContractId(contractId).then(wasmBuffer => {
   *   console.log("WASM bytecode length:", wasmBuffer.length);
   *   // ... do something with the WASM bytecode ...
   * }).catch(err => {
   *   console.error("Error fetching WASM bytecode:", err);
   * });
   */
  async getContractWasmByContractId(contractId) {
    cov_1rry66sjzw().f[9]++;
    const contractLedgerKey = (cov_1rry66sjzw().s[46]++, new _stellarBase.Contract(contractId).getFootprint());
    const response = (cov_1rry66sjzw().s[47]++, await this.getLedgerEntries(contractLedgerKey));
    cov_1rry66sjzw().s[48]++;
    if ((cov_1rry66sjzw().b[16][0]++, !response.entries.length) || (cov_1rry66sjzw().b[16][1]++, !response.entries[0]?.val)) {
      cov_1rry66sjzw().b[15][0]++;
      cov_1rry66sjzw().s[49]++;
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        code: 404,
        message: `Could not obtain contract hash from server`
      });
    } else {
      cov_1rry66sjzw().b[15][1]++;
    }
    const wasmHash = (cov_1rry66sjzw().s[50]++, response.entries[0].val.contractData().val().instance().executable().wasmHash());
    cov_1rry66sjzw().s[51]++;
    return this.getContractWasmByHash(wasmHash);
  }

  /**
   * Retrieves the WASM bytecode for a given contract hash.
   *
   * This method allows you to fetch the WASM bytecode associated with a contract
   * deployed on the Soroban network using the contract's WASM hash. The WASM bytecode
   * represents the executable code of the contract.
   *
   * @param {Buffer} wasmHash The WASM hash of the contract
   * @returns {Promise<Buffer>} A Buffer containing the WASM bytecode
   * @throws {Error} If the contract or its associated WASM bytecode cannot be
   * found on the network.
   *
   * @example
   * const wasmHash = Buffer.from("...");
   * server.getContractWasmByHash(wasmHash).then(wasmBuffer => {
   *   console.log("WASM bytecode length:", wasmBuffer.length);
   *   // ... do something with the WASM bytecode ...
   * }).catch(err => {
   *   console.error("Error fetching WASM bytecode:", err);
   * });
   */
  async getContractWasmByHash(wasmHash, format = (cov_1rry66sjzw().b[17][0]++, undefined)) {
    cov_1rry66sjzw().f[10]++;
    const wasmHashBuffer = (cov_1rry66sjzw().s[52]++, typeof wasmHash === "string" ? (cov_1rry66sjzw().b[18][0]++, Buffer.from(wasmHash, format)) : (cov_1rry66sjzw().b[18][1]++, wasmHash));
    const ledgerKeyWasmHash = (cov_1rry66sjzw().s[53]++, _stellarBase.xdr.LedgerKey.contractCode(new _stellarBase.xdr.LedgerKeyContractCode({
      hash: wasmHashBuffer
    })));
    const responseWasm = (cov_1rry66sjzw().s[54]++, await this.getLedgerEntries(ledgerKeyWasmHash));
    cov_1rry66sjzw().s[55]++;
    if ((cov_1rry66sjzw().b[20][0]++, !responseWasm.entries.length) || (cov_1rry66sjzw().b[20][1]++, !responseWasm.entries[0]?.val)) {
      cov_1rry66sjzw().b[19][0]++;
      cov_1rry66sjzw().s[56]++;
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        code: 404,
        message: "Could not obtain contract wasm from server"
      });
    } else {
      cov_1rry66sjzw().b[19][1]++;
    }
    const wasmBuffer = (cov_1rry66sjzw().s[57]++, responseWasm.entries[0].val.contractCode().code());
    cov_1rry66sjzw().s[58]++;
    return wasmBuffer;
  }

  /**
   * Reads the current value of arbitrary ledger entries directly.
   *
   * Allows you to directly inspect the current state of contracts, contract's
   * code, accounts, or any other ledger entries.
   *
   * To fetch a contract's WASM byte-code, built the appropriate
   * {@link xdr.LedgerKeyContractCode} ledger entry key (or see
   * {@link Contract.getFootprint}).
   *
   * @param {xdr.ScVal[]} keys One or more ledger entry keys to load
   * @returns {Promise<Api.GetLedgerEntriesResponse>} The current on-chain
   * values for the given ledger keys
   *
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/getLedgerEntries | getLedgerEntries docs}
   * @see RpcServer._getLedgerEntries
   * @example
   * const contractId = "CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2KM";
   * const key = xdr.LedgerKey.contractData(new xdr.LedgerKeyContractData({
   *   contractId: StrKey.decodeContract(contractId),
   *   key: xdr.ScVal.scvSymbol("counter"),
   * }));
   *
   * server.getLedgerEntries([key]).then(response => {
   *   const ledgerData = response.entries[0];
   *   console.log("key:", ledgerData.key);
   *   console.log("value:", ledgerData.val);
   *   console.log("liveUntilLedgerSeq:", ledgerData.liveUntilLedgerSeq);
   *   console.log("lastModified:", ledgerData.lastModifiedLedgerSeq);
   *   console.log("latestLedger:", response.latestLedger);
   * });
   */
  // eslint-disable-next-line require-await
  async getLedgerEntries(...keys) {
    cov_1rry66sjzw().f[11]++;
    cov_1rry66sjzw().s[59]++;
    return this._getLedgerEntries(...keys).then(_parsers.parseRawLedgerEntries);
  }

  // eslint-disable-next-line require-await
  async _getLedgerEntries(...keys) {
    cov_1rry66sjzw().f[12]++;
    cov_1rry66sjzw().s[60]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'getLedgerEntries', {
      keys: keys.map(k => {
        cov_1rry66sjzw().f[13]++;
        cov_1rry66sjzw().s[61]++;
        return k.toXDR('base64');
      })
    });
  }

  /**
   * Fetch the details of a submitted transaction.
   *
   * After submitting a transaction, clients should poll this to tell when the
   * transaction has completed.
   *
   * @param {string} hash Hex-encoded hash of the transaction to check
   * @returns {Promise<Api.GetTransactionResponse>} The status,
   *    result, and other details about the transaction
   *
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/getTransaction | getTransaction docs}
   *
   * @example
   * const transactionHash = "c4515e3bdc0897f21cc5dbec8c82cf0a936d4741cb74a8e158eb51b9fb00411a";
   * server.getTransaction(transactionHash).then((tx) => {
   *   console.log("status:", tx.status);
   *   console.log("envelopeXdr:", tx.envelopeXdr);
   *   console.log("resultMetaXdr:", tx.resultMetaXdr);
   *   console.log("resultXdr:", tx.resultXdr);
   * });
   */
  // eslint-disable-next-line require-await
  async getTransaction(hash) {
    cov_1rry66sjzw().f[14]++;
    cov_1rry66sjzw().s[62]++;
    return this._getTransaction(hash).then(raw => {
      cov_1rry66sjzw().f[15]++;
      const foundInfo = (cov_1rry66sjzw().s[63]++, {});
      cov_1rry66sjzw().s[64]++;
      if (raw.status !== _api.Api.GetTransactionStatus.NOT_FOUND) {
        cov_1rry66sjzw().b[21][0]++;
        cov_1rry66sjzw().s[65]++;
        Object.assign(foundInfo, (0, _parsers.parseTransactionInfo)(raw));
      } else {
        cov_1rry66sjzw().b[21][1]++;
      }
      const result = (cov_1rry66sjzw().s[66]++, {
        status: raw.status,
        latestLedger: raw.latestLedger,
        latestLedgerCloseTime: raw.latestLedgerCloseTime,
        oldestLedger: raw.oldestLedger,
        oldestLedgerCloseTime: raw.oldestLedgerCloseTime,
        ...foundInfo
      });
      cov_1rry66sjzw().s[67]++;
      return result;
    });
  }

  // eslint-disable-next-line require-await
  async _getTransaction(hash) {
    cov_1rry66sjzw().f[16]++;
    cov_1rry66sjzw().s[68]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'getTransaction', {
      hash
    });
  }

  /**
   * Fetch transactions starting from a given start ledger or a cursor. The end ledger is the latest ledger
   * in that RPC instance.
   *
   * @param {Api.GetTransactionsRequest} request - The request parameters.
   * @returns {Promise<Api.GetTransactionsResponse>} - A promise that resolves to the transactions response.
   *
   * @see https://developers.stellar.org/docs/data/rpc/api-reference/methods/getTransactions
   * @example
   * server.getTransactions({
   *   startLedger: 10000,
   *   limit: 10,
   * }).then((response) => {
   *   console.log("Transactions:", response.transactions);
   *   console.log("Latest Ledger:", response.latestLedger);
   *   console.log("Cursor:", response.cursor);
   * });
   */
  async getTransactions(request) {
    cov_1rry66sjzw().f[17]++;
    cov_1rry66sjzw().s[69]++;
    return this._getTransactions(request).then(raw => {
      cov_1rry66sjzw().f[18]++;
      const result = (cov_1rry66sjzw().s[70]++, {
        transactions: raw.transactions.map(_parsers.parseRawTransactions),
        latestLedger: raw.latestLedger,
        latestLedgerCloseTimestamp: raw.latestLedgerCloseTimestamp,
        oldestLedger: raw.oldestLedger,
        oldestLedgerCloseTimestamp: raw.oldestLedgerCloseTimestamp,
        cursor: raw.cursor
      });
      cov_1rry66sjzw().s[71]++;
      return result;
    });
  }

  // Add this private method to the Server class
  async _getTransactions(request) {
    cov_1rry66sjzw().f[19]++;
    cov_1rry66sjzw().s[72]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'getTransactions', request);
  }

  /**
   * Fetch all events that match a given set of filters.
   *
   * The given filters (see {@link module:rpc.Api.EventFilter | Api.EventFilter}
   * for detailed fields) are combined only in a logical OR fashion, and all of
   * the fields in each filter are optional.
   *
   * To page through events, use the `pagingToken` field on the relevant
   * {@link Api.EventResponse} object to set the `cursor` parameter.
   *
   * @param {module:rpc.Server.GetEventsRequest} request Event filters
   * @returns {Promise<Api.GetEventsResponse>} A paginatable set of the events
   * matching the given event filters
   *
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/getEvents | getEvents docs}
   *
   * @example
   * server.getEvents({
   *    startLedger: 1000,
   *    endLedger: 2000,
   *    filters: [
   *     {
   *      type: "contract",
   *      contractIds: [ "deadb33f..." ],
   *      topics: [[ "AAAABQAAAAh0cmFuc2Zlcg==", "AAAAAQB6Mcc=", "*" ]]
   *     }, {
   *      type: "system",
   *      contractIds: [ "...c4f3b4b3..." ],
   *      topics: [[ "*" ], [ "*", "AAAAAQB6Mcc=" ]]
   *     }, {
   *      contractIds: [ "...c4f3b4b3..." ],
   *      topics: [[ "AAAABQAAAAh0cmFuc2Zlcg==" ]]
   *     }, {
   *      type: "diagnostic",
   *      topics: [[ "AAAAAQB6Mcc=" ]]
   *     }
   *    ],
   *    limit: 10,
   * });
   */
  // eslint-disable-next-line require-await
  async getEvents(request) {
    cov_1rry66sjzw().f[20]++;
    cov_1rry66sjzw().s[73]++;
    return this._getEvents(request).then(_parsers.parseRawEvents);
  }

  // eslint-disable-next-line require-await
  async _getEvents(request) {
    cov_1rry66sjzw().f[21]++;
    cov_1rry66sjzw().s[74]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'getEvents', {
      filters: (cov_1rry66sjzw().b[22][0]++, request.filters) ?? (cov_1rry66sjzw().b[22][1]++, []),
      pagination: {
        ...((cov_1rry66sjzw().b[23][0]++, request.cursor) && (cov_1rry66sjzw().b[23][1]++, {
          cursor: request.cursor
        })),
        // add if defined
        ...((cov_1rry66sjzw().b[24][0]++, request.limit) && (cov_1rry66sjzw().b[24][1]++, {
          limit: request.limit
        }))
      },
      ...((cov_1rry66sjzw().b[25][0]++, request.startLedger) && (cov_1rry66sjzw().b[25][1]++, {
        startLedger: request.startLedger
      })),
      ...((cov_1rry66sjzw().b[26][0]++, request.endLedger) && (cov_1rry66sjzw().b[26][1]++, {
        endLedger: request.endLedger
      }))
    });
  }

  /**
   * Fetch metadata about the network this Soroban RPC server is connected to.
   *
   * @returns {Promise<Api.GetNetworkResponse>} Metadata about the current
   * network this RPC server is connected to
   *
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/getNetwork | getNetwork docs}
   *
   * @example
   * server.getNetwork().then((network) => {
   *   console.log("friendbotUrl:", network.friendbotUrl);
   *   console.log("passphrase:", network.passphrase);
   *   console.log("protocolVersion:", network.protocolVersion);
   * });
   */
  // eslint-disable-next-line require-await
  async getNetwork() {
    cov_1rry66sjzw().f[22]++;
    cov_1rry66sjzw().s[75]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'getNetwork');
  }

  /**
   * Fetch the latest ledger meta info from network which this Soroban RPC
   * server is connected to.
   *
   * @returns {Promise<Api.GetLatestLedgerResponse>}   metadata about the
   *    latest ledger on the network that this RPC server is connected to
   *
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/getLatestLedger | getLatestLedger docs}
   *
   * @example
   * server.getLatestLedger().then((response) => {
   *   console.log("hash:", response.id);
   *   console.log("sequence:", response.sequence);
   *   console.log("protocolVersion:", response.protocolVersion);
   * });
   */
  // eslint-disable-next-line require-await
  async getLatestLedger() {
    cov_1rry66sjzw().f[23]++;
    cov_1rry66sjzw().s[76]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'getLatestLedger');
  }

  /**
   * Submit a trial contract invocation to get back return values, expected
   * ledger footprint, expected authorizations, and expected costs.
   *
   * @param {Transaction | FeeBumpTransaction} tx the transaction to
   *    simulate, which should include exactly one operation (one of
   *    {@link xdr.InvokeHostFunctionOp}, {@link xdr.ExtendFootprintTTLOp}, or
   *    {@link xdr.RestoreFootprintOp}). Any provided footprint or auth
   *    information will be ignored.
   * @returns {Promise<Api.SimulateTransactionResponse>} An object with the
   *    cost, footprint, result/auth requirements (if applicable), and error of
   *    the transaction
   *
   * @see {@link https://developers.stellar.org/docs/learn/fundamentals/stellar-data-structures/operations-and-transactions | transaction docs}
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/simulateTransaction | simulateTransaction docs}
   * @see module:rpc.Server#prepareTransaction
   * @see module:rpc.assembleTransaction
   *
   * @example
   * const contractId = 'CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE';
   * const contract = new StellarSdk.Contract(contractId);
   *
   * // Right now, this is just the default fee for this example.
   * const fee = StellarSdk.BASE_FEE;
   * const transaction = new StellarSdk.TransactionBuilder(account, { fee })
   *   // Uncomment the following line to build transactions for the live network. Be
   *   // sure to also change the horizon hostname.
   *   //.setNetworkPassphrase(StellarSdk.Networks.PUBLIC)
   *   .setNetworkPassphrase(StellarSdk.Networks.FUTURENET)
   *   .setTimeout(30) // valid for the next 30s
   *   // Add an operation to call increment() on the contract
   *   .addOperation(contract.call("increment"))
   *   .build();
   *
   * server.simulateTransaction(transaction).then((sim) => {
   *   console.log("cost:", sim.cost);
   *   console.log("result:", sim.result);
   *   console.log("error:", sim.error);
   *   console.log("latestLedger:", sim.latestLedger);
   * });
   */
  // eslint-disable-next-line require-await
  async simulateTransaction(tx, addlResources) {
    cov_1rry66sjzw().f[24]++;
    cov_1rry66sjzw().s[77]++;
    return this._simulateTransaction(tx, addlResources).then(_parsers.parseRawSimulation);
  }

  // eslint-disable-next-line require-await
  async _simulateTransaction(transaction, addlResources) {
    cov_1rry66sjzw().f[25]++;
    cov_1rry66sjzw().s[78]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'simulateTransaction', {
      transaction: transaction.toXDR(),
      ...((cov_1rry66sjzw().b[27][0]++, addlResources !== undefined) && (cov_1rry66sjzw().b[27][1]++, {
        resourceConfig: {
          instructionLeeway: addlResources.cpuInstructions
        }
      }))
    });
  }

  /**
   * Submit a trial contract invocation, first run a simulation of the contract
   * invocation as defined on the incoming transaction, and apply the results to
   * a new copy of the transaction which is then returned. Setting the ledger
   * footprint and authorization, so the resulting transaction is ready for
   * signing & sending.
   *
   * The returned transaction will also have an updated fee that is the sum of
   * fee set on incoming transaction with the contract resource fees estimated
   * from simulation. It is advisable to check the fee on returned transaction
   * and validate or take appropriate measures for interaction with user to
   * confirm it is acceptable.
   *
   * You can call the {@link module:rpc.Server#simulateTransaction} method
   * directly first if you want to inspect estimated fees for a given
   * transaction in detail first, then re-assemble it manually or via
   * {@link module:rpc.assembleTransaction}.
   *
   * @param {Transaction | FeeBumpTransaction} tx  the transaction to
   *    prepare. It should include exactly one operation, which must be one of
   *    {@link xdr.InvokeHostFunctionOp}, {@link xdr.ExtendFootprintTTLOp},
   *    or {@link xdr.RestoreFootprintOp}.
   *
   *    Any provided footprint will be overwritten. However, if your operation
   *    has existing auth entries, they will be preferred over ALL auth entries
   *    from the simulation. In other words, if you include auth entries, you
   *    don't care about the auth returned from the simulation. Other fields
   *    (footprint, etc.) will be filled as normal.
   * @returns {Promise<Transaction | FeeBumpTransaction>} A copy of the
   *    transaction with the expected authorizations (in the case of
   *    invocation), resources, and ledger footprints added. The transaction fee
   *    will also automatically be padded with the contract's minimum resource
   *    fees discovered from the simulation.
   * @throws {jsonrpc.Error<any>|Error|Api.SimulateTransactionErrorResponse}
   *    If simulation fails
   *
   * @see module:rpc.assembleTransaction
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/simulateTransaction | simulateTransaction docs}
   *
   * @example
   * const contractId = 'CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE';
   * const contract = new StellarSdk.Contract(contractId);
   *
   * // Right now, this is just the default fee for this example.
   * const fee = StellarSdk.BASE_FEE;
   * const transaction = new StellarSdk.TransactionBuilder(account, { fee })
   *   // Uncomment the following line to build transactions for the live network. Be
   *   // sure to also change the horizon hostname.
   *   //.setNetworkPassphrase(StellarSdk.Networks.PUBLIC)
   *   .setNetworkPassphrase(StellarSdk.Networks.FUTURENET)
   *   .setTimeout(30) // valid for the next 30s
   *   // Add an operation to call increment() on the contract
   *   .addOperation(contract.call("increment"))
   *   .build();
   *
   * const preparedTransaction = await server.prepareTransaction(transaction);
   *
   * // Sign this transaction with the secret key
   * // NOTE: signing is transaction is network specific. Test network transactions
   * // won't work in the public network. To switch networks, use the Network object
   * // as explained above (look for StellarSdk.Network).
   * const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecretKey);
   * preparedTransaction.sign(sourceKeypair);
   *
   * server.sendTransaction(transaction).then(result => {
   *   console.log("hash:", result.hash);
   *   console.log("status:", result.status);
   *   console.log("errorResultXdr:", result.errorResultXdr);
   * });
   */
  async prepareTransaction(tx) {
    cov_1rry66sjzw().f[26]++;
    const simResponse = (cov_1rry66sjzw().s[79]++, await this.simulateTransaction(tx));
    cov_1rry66sjzw().s[80]++;
    if (_api.Api.isSimulationError(simResponse)) {
      cov_1rry66sjzw().b[28][0]++;
      cov_1rry66sjzw().s[81]++;
      throw new Error(simResponse.error);
    } else {
      cov_1rry66sjzw().b[28][1]++;
    }
    cov_1rry66sjzw().s[82]++;
    return (0, _transaction.assembleTransaction)(tx, simResponse).build();
  }

  /**
   * Submit a real transaction to the Stellar network.
   *
   * Unlike Horizon, Soroban RPC does not wait for transaction completion. It
   * simply validates the transaction and enqueues it. Clients should call
   * {@link module:rpc.Server#getTransaction} to learn about transaction
   * success/failure.
   *
   * @param {Transaction | FeeBumpTransaction} transaction  to submit
   * @returns {Promise<Api.SendTransactionResponse>}   the
   *    transaction id, status, and any error if available
   *
   * @see {@link https://developers.stellar.org/docs/learn/fundamentals/stellar-data-structures/operations-and-transactions | transaction docs}
   * @see {@link https://developers.stellar.org/docs/data/rpc/api-reference/methods/sendTransaction | sendTransaction docs}
   *
   * @example
   * const contractId = 'CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE';
   * const contract = new StellarSdk.Contract(contractId);
   *
   * // Right now, this is just the default fee for this example.
   * const fee = StellarSdk.BASE_FEE;
   * const transaction = new StellarSdk.TransactionBuilder(account, { fee })
   *   // Uncomment the following line to build transactions for the live network. Be
   *   // sure to also change the horizon hostname.
   *   //.setNetworkPassphrase(StellarSdk.Networks.PUBLIC)
   *   .setNetworkPassphrase(StellarSdk.Networks.FUTURENET)
   *   .setTimeout(30) // valid for the next 30s
   *   // Add an operation to call increment() on the contract
   *   .addOperation(contract.call("increment"))
   *   .build();
   *
   * // Sign this transaction with the secret key
   * // NOTE: signing is transaction is network specific. Test network transactions
   * // won't work in the public network. To switch networks, use the Network object
   * // as explained above (look for StellarSdk.Network).
   * const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecretKey);
   * transaction.sign(sourceKeypair);
   *
   * server.sendTransaction(transaction).then((result) => {
   *   console.log("hash:", result.hash);
   *   console.log("status:", result.status);
   *   console.log("errorResultXdr:", result.errorResultXdr);
   * });
   */
  // eslint-disable-next-line require-await
  async sendTransaction(transaction) {
    cov_1rry66sjzw().f[27]++;
    cov_1rry66sjzw().s[83]++;
    return this._sendTransaction(transaction).then(_parsers.parseRawSendTransaction);
  }

  // eslint-disable-next-line require-await
  async _sendTransaction(transaction) {
    cov_1rry66sjzw().f[28]++;
    cov_1rry66sjzw().s[84]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'sendTransaction', {
      transaction: transaction.toXDR()
    });
  }

  /**
   * Fund a new account using the network's Friendbot faucet, if any.
   *
   * @param {string | Account} address The address or account instance that we
   *    want to create and fund with Friendbot
   * @param {string} [friendbotUrl] Optionally, an explicit address for
   *    friendbot (by default: this calls the Soroban RPC
   *    {@link module:rpc.Server#getNetwork | getNetwork} method to try to
   *    discover this network's Friendbot url).
   * @returns {Promise<Account>} An {@link Account} object for the created
   *    account, or the existing account if it's already funded with the
   *    populated sequence number (note that the account will not be "topped
   *    off" if it already exists)
   * @throws If Friendbot is not configured on this network or request failure
   *
   * @see {@link https://developers.stellar.org/docs/learn/networks#friendbot | Friendbot docs}
   * @see {@link module:Friendbot.Api.Response}
   *
   * @example
   * server
   *    .requestAirdrop("GBZC6Y2Y7Q3ZQ2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4")
   *    .then((accountCreated) => {
   *      console.log("accountCreated:", accountCreated);
   *    }).catch((error) => {
   *      console.error("error:", error);
   *    });
   */
  async requestAirdrop(address, friendbotUrl) {
    cov_1rry66sjzw().f[29]++;
    const account = (cov_1rry66sjzw().s[85]++, typeof address === 'string' ? (cov_1rry66sjzw().b[29][0]++, address) : (cov_1rry66sjzw().b[29][1]++, address.accountId()));
    cov_1rry66sjzw().s[86]++;
    friendbotUrl = (cov_1rry66sjzw().b[30][0]++, friendbotUrl) || (cov_1rry66sjzw().b[30][1]++, (await this.getNetwork()).friendbotUrl);
    cov_1rry66sjzw().s[87]++;
    if (!friendbotUrl) {
      cov_1rry66sjzw().b[31][0]++;
      cov_1rry66sjzw().s[88]++;
      throw new Error('No friendbot URL configured for current network');
    } else {
      cov_1rry66sjzw().b[31][1]++;
    }
    cov_1rry66sjzw().s[89]++;
    try {
      const response = (cov_1rry66sjzw().s[90]++, await _axios.default.post(`${friendbotUrl}?addr=${encodeURIComponent(account)}`));
      const meta = (cov_1rry66sjzw().s[91]++, _stellarBase.xdr.TransactionMeta.fromXDR(response.data.result_meta_xdr, 'base64'));
      const sequence = (cov_1rry66sjzw().s[92]++, findCreatedAccountSequenceInTransactionMeta(meta));
      cov_1rry66sjzw().s[93]++;
      return new _stellarBase.Account(account, sequence);
    } catch (error) {
      cov_1rry66sjzw().s[94]++;
      if (error.response?.status === 400) {
        cov_1rry66sjzw().b[32][0]++;
        cov_1rry66sjzw().s[95]++;
        if (error.response.detail?.includes('createAccountAlreadyExist')) {
          cov_1rry66sjzw().b[33][0]++;
          cov_1rry66sjzw().s[96]++;
          // Account already exists, load the sequence number
          return this.getAccount(account);
        } else {
          cov_1rry66sjzw().b[33][1]++;
        }
      } else {
        cov_1rry66sjzw().b[32][1]++;
      }
      cov_1rry66sjzw().s[97]++;
      throw error;
    }
  }

  /**
   * Provides an analysis of the recent fee stats for regular and smart
   * contract operations.
   *
   * @returns {Promise<Api.GetFeeStatsResponse>}  the fee stats
   * @see https://developers.stellar.org/docs/data/rpc/api-reference/methods/getFeeStats
   */
  // eslint-disable-next-line require-await
  async getFeeStats() {
    cov_1rry66sjzw().f[30]++;
    cov_1rry66sjzw().s[98]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'getFeeStats');
  }

  /**
   * Provides information about the current version details of the Soroban RPC and captive-core
   *
   * @returns {Promise<Api.GetVersionInfoResponse>} the version info
   * @see https://developers.stellar.org/docs/data/rpc/api-reference/methods/getVersionInfo
   */
  // eslint-disable-next-line require-await
  async getVersionInfo() {
    cov_1rry66sjzw().f[31]++;
    cov_1rry66sjzw().s[99]++;
    return jsonrpc.postObject(this.serverURL.toString(), 'getVersionInfo');
  }

  /**
   * Returns a contract's balance of a particular SAC asset, if any.
   *
   * This is a convenience wrapper around {@link Server.getLedgerEntries}.
   *
   * @param {string}  contractId    the contract ID (string `C...`) whose
   *    balance of `sac` you want to know
   * @param {Asset}   sac     the built-in SAC token (e.g. `USDC:GABC...`) that
   *    you are querying from the given `contract`.
   * @param {string}  [networkPassphrase] optionally, the network passphrase to
   *    which this token applies. If omitted, a request about network
   *    information will be made (see {@link getNetwork}), since contract IDs
   *    for assets are specific to a network. You can refer to {@link Networks}
   *    for a list of built-in passphrases, e.g., `Networks.TESTNET`.
   *
   * @returns {Promise<Api.BalanceResponse>}, which will contain the balance
   *    entry details if and only if the request returned a valid balance ledger
   *    entry. If it doesn't, the `balanceEntry` field will not exist.
   *
   * @throws {TypeError} If `contractId` is not a valid contract strkey (C...).
   *
   * @see getLedgerEntries
   * @see https://developers.stellar.org/docs/tokens/stellar-asset-contract
   *
   * @example
   * // assume `contractId` is some contract with an XLM balance
   * // assume server is an instantiated `Server` instance.
   * const entry = (await server.getSACBalance(
   *   new Address(contractId),
   *   Asset.native(),
   *   Networks.PUBLIC
   * ));
   *
   * // assumes BigInt support:
   * console.log(
   *   entry.balanceEntry ?
   *   BigInt(entry.balanceEntry.amount) :
   *   "Contract has no XLM");
   */
  async getSACBalance(contractId, sac, networkPassphrase) {
    cov_1rry66sjzw().f[32]++;
    cov_1rry66sjzw().s[100]++;
    if (!_stellarBase.StrKey.isValidContract(contractId)) {
      cov_1rry66sjzw().b[34][0]++;
      cov_1rry66sjzw().s[101]++;
      throw new TypeError(`expected contract ID, got ${contractId}`);
    } else {
      cov_1rry66sjzw().b[34][1]++;
    }

    // Call out to RPC if passphrase isn't provided.
    const passphrase = (cov_1rry66sjzw().s[102]++, (cov_1rry66sjzw().b[35][0]++, networkPassphrase) ?? (cov_1rry66sjzw().b[35][1]++, await this.getNetwork().then(n => {
      cov_1rry66sjzw().f[33]++;
      cov_1rry66sjzw().s[103]++;
      return n.passphrase;
    })));

    // Turn SAC into predictable contract ID
    const sacId = (cov_1rry66sjzw().s[104]++, sac.contractId(passphrase));

    // Rust union enum type with "Balance(ScAddress)" structure
    const key = (cov_1rry66sjzw().s[105]++, _stellarBase.xdr.ScVal.scvVec([(0, _stellarBase.nativeToScVal)("Balance", {
      type: "symbol"
    }), (0, _stellarBase.nativeToScVal)(contractId, {
      type: "address"
    })]));

    // Note a quirk here: the contract address in the key is the *token*
    // rather than the *holding contract*. This is because each token stores a
    // balance entry for each contract, not the other way around (i.e. XLM
    // holds a reserve for contract X, rather that contract X having a balance
    // of N XLM).
    const ledgerKey = (cov_1rry66sjzw().s[106]++, _stellarBase.xdr.LedgerKey.contractData(new _stellarBase.xdr.LedgerKeyContractData({
      contract: new _stellarBase.Address(sacId).toScAddress(),
      durability: _stellarBase.xdr.ContractDataDurability.persistent(),
      key
    })));
    const response = (cov_1rry66sjzw().s[107]++, await this.getLedgerEntries(ledgerKey));
    cov_1rry66sjzw().s[108]++;
    if (response.entries.length === 0) {
      cov_1rry66sjzw().b[36][0]++;
      cov_1rry66sjzw().s[109]++;
      return {
        latestLedger: response.latestLedger
      };
    } else {
      cov_1rry66sjzw().b[36][1]++;
    }
    const {
      lastModifiedLedgerSeq,
      liveUntilLedgerSeq,
      val
    } = (cov_1rry66sjzw().s[110]++, response.entries[0]);
    cov_1rry66sjzw().s[111]++;
    if (val.switch().value !== _stellarBase.xdr.LedgerEntryType.contractData().value) {
      cov_1rry66sjzw().b[37][0]++;
      cov_1rry66sjzw().s[112]++;
      return {
        latestLedger: response.latestLedger
      };
    } else {
      cov_1rry66sjzw().b[37][1]++;
    }
    const entry = (cov_1rry66sjzw().s[113]++, (0, _stellarBase.scValToNative)(val.contractData().val()));

    // Since we are requesting a SAC's contract data, we know for a fact that
    // it should follow the expected structure format. Thus, we can presume
    // these fields exist:
    cov_1rry66sjzw().s[114]++;
    return {
      latestLedger: response.latestLedger,
      balanceEntry: {
        liveUntilLedgerSeq,
        lastModifiedLedgerSeq,
        amount: entry.amount.toString(),
        authorized: entry.authorized,
        clawback: entry.clawback
      }
    };
  }
}
exports.RpcServer = RpcServer;