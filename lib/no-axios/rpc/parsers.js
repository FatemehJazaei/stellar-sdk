"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRawEvents = parseRawEvents;
exports.parseRawLedgerEntries = parseRawLedgerEntries;
exports.parseRawSendTransaction = parseRawSendTransaction;
exports.parseRawSimulation = parseRawSimulation;
exports.parseRawTransactions = parseRawTransactions;
exports.parseTransactionInfo = parseTransactionInfo;
var _stellarBase = require("@stellar/stellar-base");
var _api = require("./api");
function cov_1ttpxfvqbc() {
  var path = "/mnt/g/stellar-sdk/src/rpc/parsers.ts";
  var hash = "48da67147d7d90cef2a0e9af13dda90b89e429a1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/rpc/parsers.ts",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 50
        },
        end: {
          line: 15,
          column: 53
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 28
        }
      },
      "2": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 33
        }
      },
      "3": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "4": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 31,
          column: 6
        }
      },
      "5": {
        start: {
          line: 26,
          column: 19
        },
        end: {
          line: 26,
          column: 61
        }
      },
      "6": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 55
        }
      },
      "7": {
        start: {
          line: 38,
          column: 15
        },
        end: {
          line: 38,
          column: 72
        }
      },
      "8": {
        start: {
          line: 39,
          column: 52
        },
        end: {
          line: 47,
          column: 3
        }
      },
      "9": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "10": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 62
        }
      },
      "11": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 57,
          column: 3
        }
      },
      "12": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 56,
          column: 6
        }
      },
      "13": {
        start: {
          line: 55,
          column: 27
        },
        end: {
          line: 55,
          column: 81
        }
      },
      "14": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 59,
          column: 14
        }
      },
      "15": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 68,
          column: 4
        }
      },
      "16": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 95,
          column: 4
        }
      },
      "17": {
        start: {
          line: 84,
          column: 62
        },
        end: {
          line: 84,
          column: 72
        }
      },
      "18": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 39
        }
      },
      "19": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 93,
          column: 8
        }
      },
      "20": {
        start: {
          line: 91,
          column: 40
        },
        end: {
          line: 91,
          column: 74
        }
      },
      "21": {
        start: {
          line: 109,
          column: 2
        },
        end: {
          line: 127,
          column: 4
        }
      },
      "22": {
        start: {
          line: 112,
          column: 6
        },
        end: {
          line: 116,
          column: 7
        }
      },
      "23": {
        start: {
          line: 113,
          column: 8
        },
        end: {
          line: 115,
          column: 10
        }
      },
      "24": {
        start: {
          line: 118,
          column: 6
        },
        end: {
          line: 125,
          column: 8
        }
      },
      "25": {
        start: {
          line: 146,
          column: 58
        },
        end: {
          line: 176,
          column: 3
        }
      },
      "26": {
        start: {
          line: 155,
          column: 41
        },
        end: {
          line: 163,
          column: 9
        }
      },
      "27": {
        start: {
          line: 157,
          column: 12
        },
        end: {
          line: 157,
          column: 66
        }
      },
      "28": {
        start: {
          line: 168,
          column: 60
        },
        end: {
          line: 173,
          column: 9
        }
      },
      "29": {
        start: {
          line: 178,
          column: 2
        },
        end: {
          line: 180,
          column: 3
        }
      },
      "30": {
        start: {
          line: 179,
          column: 4
        },
        end: {
          line: 179,
          column: 19
        }
      },
      "31": {
        start: {
          line: 183,
          column: 2
        },
        end: {
          line: 191,
          column: 4
        }
      },
      "32": {
        start: {
          line: 208,
          column: 19
        },
        end: {
          line: 208,
          column: 43
        }
      },
      "33": {
        start: {
          line: 209,
          column: 2
        },
        end: {
          line: 212,
          column: 3
        }
      },
      "34": {
        start: {
          line: 211,
          column: 4
        },
        end: {
          line: 211,
          column: 15
        }
      },
      "35": {
        start: {
          line: 215,
          column: 52
        },
        end: {
          line: 221,
          column: 3
        }
      },
      "36": {
        start: {
          line: 220,
          column: 31
        },
        end: {
          line: 220,
          column: 73
        }
      },
      "37": {
        start: {
          line: 224,
          column: 2
        },
        end: {
          line: 229,
          column: 3
        }
      },
      "38": {
        start: {
          line: 225,
          column: 4
        },
        end: {
          line: 228,
          column: 6
        }
      },
      "39": {
        start: {
          line: 231,
          column: 2
        },
        end: {
          line: 231,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "parseRawSendTransaction",
        decl: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 12,
            column: 39
          }
        },
        loc: {
          start: {
            line: 14,
            column: 31
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 12
          },
          end: {
            line: 26,
            column: 13
          }
        },
        loc: {
          start: {
            line: 26,
            column: 19
          },
          end: {
            line: 26,
            column: 61
          }
        },
        line: 26
      },
      "2": {
        name: "parseTransactionInfo",
        decl: {
          start: {
            line: 37,
            column: 16
          },
          end: {
            line: 37,
            column: 36
          }
        },
        loc: {
          start: {
            line: 37,
            column: 135
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 37
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 55,
            column: 8
          },
          end: {
            line: 55,
            column: 9
          }
        },
        loc: {
          start: {
            line: 55,
            column: 27
          },
          end: {
            line: 55,
            column: 81
          }
        },
        line: 55
      },
      "4": {
        name: "parseRawTransactions",
        decl: {
          start: {
            line: 62,
            column: 16
          },
          end: {
            line: 62,
            column: 36
          }
        },
        loc: {
          start: {
            line: 64,
            column: 23
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 64
      },
      "5": {
        name: "parseRawEvents",
        decl: {
          start: {
            line: 78,
            column: 16
          },
          end: {
            line: 78,
            column: 30
          }
        },
        loc: {
          start: {
            line: 80,
            column: 25
          },
          end: {
            line: 96,
            column: 1
          }
        },
        line: 80
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 83,
            column: 35
          },
          end: {
            line: 83,
            column: 36
          }
        },
        loc: {
          start: {
            line: 83,
            column: 44
          },
          end: {
            line: 94,
            column: 5
          }
        },
        line: 83
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 91,
            column: 29
          },
          end: {
            line: 91,
            column: 30
          }
        },
        loc: {
          start: {
            line: 91,
            column: 40
          },
          end: {
            line: 91,
            column: 74
          }
        },
        line: 91
      },
      "8": {
        name: "parseRawLedgerEntries",
        decl: {
          start: {
            line: 106,
            column: 16
          },
          end: {
            line: 106,
            column: 37
          }
        },
        loc: {
          start: {
            line: 108,
            column: 32
          },
          end: {
            line: 128,
            column: 1
          }
        },
        line: 108
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 111,
            column: 37
          },
          end: {
            line: 111,
            column: 38
          }
        },
        loc: {
          start: {
            line: 111,
            column: 51
          },
          end: {
            line: 126,
            column: 5
          }
        },
        line: 111
      },
      "10": {
        name: "parseSuccessful",
        decl: {
          start: {
            line: 139,
            column: 9
          },
          end: {
            line: 139,
            column: 24
          }
        },
        loc: {
          start: {
            line: 144,
            column: 43
          },
          end: {
            line: 192,
            column: 1
          }
        },
        line: 144
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 155,
            column: 31
          },
          end: {
            line: 155,
            column: 32
          }
        },
        loc: {
          start: {
            line: 155,
            column: 41
          },
          end: {
            line: 163,
            column: 9
          }
        },
        line: 155
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 156,
            column: 37
          },
          end: {
            line: 156,
            column: 38
          }
        },
        loc: {
          start: {
            line: 157,
            column: 12
          },
          end: {
            line: 157,
            column: 66
          }
        },
        line: 157
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 168,
            column: 42
          },
          end: {
            line: 168,
            column: 43
          }
        },
        loc: {
          start: {
            line: 168,
            column: 60
          },
          end: {
            line: 173,
            column: 9
          }
        },
        line: 168
      },
      "14": {
        name: "parseRawSimulation",
        decl: {
          start: {
            line: 203,
            column: 16
          },
          end: {
            line: 203,
            column: 34
          }
        },
        loc: {
          start: {
            line: 207,
            column: 35
          },
          end: {
            line: 232,
            column: 1
          }
        },
        line: 207
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 220,
            column: 22
          },
          end: {
            line: 220,
            column: 23
          }
        },
        loc: {
          start: {
            line: 220,
            column: 31
          },
          end: {
            line: 220,
            column: 73
          }
        },
        line: 220
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 2
          },
          end: {
            line: 32,
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
        line: 19
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 28,
            column: 9
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 23,
            column: 41
          }
        }, {
          start: {
            line: 24,
            column: 8
          },
          end: {
            line: 24,
            column: 38
          }
        }, {
          start: {
            line: 24,
            column: 42
          },
          end: {
            line: 28,
            column: 9
          }
        }],
        line: 23
      },
      "2": {
        loc: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 51,
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
        line: 49
      },
      "3": {
        loc: {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 49,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 49,
            column: 25
          }
        }, {
          start: {
            line: 49,
            column: 29
          },
          end: {
            line: 49,
            column: 61
          }
        }],
        line: 49
      },
      "4": {
        loc: {
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 57,
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
        line: 53
      },
      "5": {
        loc: {
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 53,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 53,
            column: 34
          }
        }, {
          start: {
            line: 53,
            column: 38
          },
          end: {
            line: 53,
            column: 61
          }
        }],
        line: 53
      },
      "6": {
        loc: {
          start: {
            line: 83,
            column: 13
          },
          end: {
            line: 83,
            column: 29
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 83,
            column: 13
          },
          end: {
            line: 83,
            column: 23
          }
        }, {
          start: {
            line: 83,
            column: 27
          },
          end: {
            line: 83,
            column: 29
          }
        }],
        line: 83
      },
      "7": {
        loc: {
          start: {
            line: 90,
            column: 12
          },
          end: {
            line: 90,
            column: 81
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 90,
            column: 12
          },
          end: {
            line: 90,
            column: 33
          }
        }, {
          start: {
            line: 90,
            column: 37
          },
          end: {
            line: 90,
            column: 81
          }
        }],
        line: 90
      },
      "8": {
        loc: {
          start: {
            line: 111,
            column: 14
          },
          end: {
            line: 111,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 111,
            column: 14
          },
          end: {
            line: 111,
            column: 25
          }
        }, {
          start: {
            line: 111,
            column: 29
          },
          end: {
            line: 111,
            column: 31
          }
        }],
        line: 111
      },
      "9": {
        loc: {
          start: {
            line: 112,
            column: 6
          },
          end: {
            line: 116,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 112,
            column: 6
          },
          end: {
            line: 116,
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
        line: 112
      },
      "10": {
        loc: {
          start: {
            line: 112,
            column: 10
          },
          end: {
            line: 112,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 112,
            column: 10
          },
          end: {
            line: 112,
            column: 23
          }
        }, {
          start: {
            line: 112,
            column: 27
          },
          end: {
            line: 112,
            column: 40
          }
        }],
        line: 112
      },
      "11": {
        loc: {
          start: {
            line: 122,
            column: 12
          },
          end: {
            line: 124,
            column: 9
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 122,
            column: 12
          },
          end: {
            line: 122,
            column: 53
          }
        }, {
          start: {
            line: 122,
            column: 57
          },
          end: {
            line: 124,
            column: 9
          }
        }],
        line: 122
      },
      "12": {
        loc: {
          start: {
            line: 154,
            column: 5
          },
          end: {
            line: 164,
            column: 5
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 154,
            column: 25
          }
        }, {
          start: {
            line: 154,
            column: 29
          },
          end: {
            line: 154,
            column: 34
          }
        }, {
          start: {
            line: 154,
            column: 39
          },
          end: {
            line: 164,
            column: 5
          }
        }],
        line: 154
      },
      "13": {
        loc: {
          start: {
            line: 156,
            column: 17
          },
          end: {
            line: 156,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 156,
            column: 17
          },
          end: {
            line: 156,
            column: 25
          }
        }, {
          start: {
            line: 156,
            column: 29
          },
          end: {
            line: 156,
            column: 31
          }
        }],
        line: 156
      },
      "14": {
        loc: {
          start: {
            line: 160,
            column: 18
          },
          end: {
            line: 162,
            column: 33
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 161,
            column: 14
          },
          end: {
            line: 161,
            column: 50
          }
        }, {
          start: {
            line: 162,
            column: 14
          },
          end: {
            line: 162,
            column: 33
          }
        }],
        line: 160
      },
      "15": {
        loc: {
          start: {
            line: 167,
            column: 7
          },
          end: {
            line: 174,
            column: 5
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 167,
            column: 8
          },
          end: {
            line: 167,
            column: 32
          }
        }, {
          start: {
            line: 167,
            column: 36
          },
          end: {
            line: 167,
            column: 41
          }
        }, {
          start: {
            line: 167,
            column: 46
          },
          end: {
            line: 174,
            column: 5
          }
        }],
        line: 167
      },
      "16": {
        loc: {
          start: {
            line: 171,
            column: 18
          },
          end: {
            line: 171,
            column: 99
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 171,
            column: 39
          },
          end: {
            line: 171,
            column: 92
          }
        }, {
          start: {
            line: 171,
            column: 95
          },
          end: {
            line: 171,
            column: 99
          }
        }],
        line: 171
      },
      "17": {
        loc: {
          start: {
            line: 172,
            column: 17
          },
          end: {
            line: 172,
            column: 96
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 172,
            column: 37
          },
          end: {
            line: 172,
            column: 89
          }
        }, {
          start: {
            line: 172,
            column: 92
          },
          end: {
            line: 172,
            column: 96
          }
        }],
        line: 172
      },
      "18": {
        loc: {
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 180,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 180,
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
        line: 178
      },
      "19": {
        loc: {
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 178,
            column: 72
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 178,
            column: 26
          }
        }, {
          start: {
            line: 178,
            column: 30
          },
          end: {
            line: 178,
            column: 72
          }
        }],
        line: 178
      },
      "20": {
        loc: {
          start: {
            line: 209,
            column: 2
          },
          end: {
            line: 212,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 209,
            column: 2
          },
          end: {
            line: 212,
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
        line: 209
      },
      "21": {
        loc: {
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 220,
            column: 80
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 220,
            column: 74
          }
        }, {
          start: {
            line: 220,
            column: 78
          },
          end: {
            line: 220,
            column: 80
          }
        }],
        line: 220
      },
      "22": {
        loc: {
          start: {
            line: 224,
            column: 2
          },
          end: {
            line: 229,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 224,
            column: 2
          },
          end: {
            line: 229,
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
        line: 224
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
      "39": 0
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
      "15": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "48da67147d7d90cef2a0e9af13dda90b89e429a1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ttpxfvqbc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ttpxfvqbc();
/**
 * Parse the response from invoking the `submitTransaction` method of a Soroban RPC server.
 * @memberof module:rpc
 * @private
 *
 * @param {Api.RawSendTransactionResponse} raw the raw `submitTransaction` response from the Soroban RPC server to parse
 * @returns {Api.SendTransactionResponse} transaction response parsed from the Soroban RPC server's response
 */
function parseRawSendTransaction(raw) {
  cov_1ttpxfvqbc().f[0]++;
  const {
    errorResultXdr,
    diagnosticEventsXdr
  } = (cov_1ttpxfvqbc().s[0]++, raw);
  cov_1ttpxfvqbc().s[1]++;
  delete raw.errorResultXdr;
  cov_1ttpxfvqbc().s[2]++;
  delete raw.diagnosticEventsXdr;
  cov_1ttpxfvqbc().s[3]++;
  if (errorResultXdr) {
    cov_1ttpxfvqbc().b[0][0]++;
    cov_1ttpxfvqbc().s[4]++;
    return {
      ...raw,
      ...((cov_1ttpxfvqbc().b[1][0]++, diagnosticEventsXdr !== undefined) && (cov_1ttpxfvqbc().b[1][1]++, diagnosticEventsXdr.length > 0) && (cov_1ttpxfvqbc().b[1][2]++, {
        diagnosticEvents: diagnosticEventsXdr.map(evt => {
          cov_1ttpxfvqbc().f[1]++;
          cov_1ttpxfvqbc().s[5]++;
          return _stellarBase.xdr.DiagnosticEvent.fromXDR(evt, 'base64');
        })
      })),
      errorResult: _stellarBase.xdr.TransactionResult.fromXDR(errorResultXdr, 'base64')
    };
  } else {
    cov_1ttpxfvqbc().b[0][1]++;
  }
  cov_1ttpxfvqbc().s[6]++;
  return {
    ...raw
  };
}
function parseTransactionInfo(raw) {
  cov_1ttpxfvqbc().f[2]++;
  const meta = (cov_1ttpxfvqbc().s[7]++, _stellarBase.xdr.TransactionMeta.fromXDR(raw.resultMetaXdr, 'base64'));
  const info = (cov_1ttpxfvqbc().s[8]++, {
    ledger: raw.ledger,
    createdAt: raw.createdAt,
    applicationOrder: raw.applicationOrder,
    feeBump: raw.feeBump,
    envelopeXdr: _stellarBase.xdr.TransactionEnvelope.fromXDR(raw.envelopeXdr, 'base64'),
    resultXdr: _stellarBase.xdr.TransactionResult.fromXDR(raw.resultXdr, 'base64'),
    resultMetaXdr: meta
  });
  cov_1ttpxfvqbc().s[9]++;
  if ((cov_1ttpxfvqbc().b[3][0]++, meta.switch() === 3) && (cov_1ttpxfvqbc().b[3][1]++, meta.v3().sorobanMeta() !== null)) {
    cov_1ttpxfvqbc().b[2][0]++;
    cov_1ttpxfvqbc().s[10]++;
    info.returnValue = meta.v3().sorobanMeta()?.returnValue();
  } else {
    cov_1ttpxfvqbc().b[2][1]++;
  }
  cov_1ttpxfvqbc().s[11]++;
  if ((cov_1ttpxfvqbc().b[5][0]++, 'diagnosticEventsXdr' in raw) && (cov_1ttpxfvqbc().b[5][1]++, raw.diagnosticEventsXdr)) {
    cov_1ttpxfvqbc().b[4][0]++;
    cov_1ttpxfvqbc().s[12]++;
    info.diagnosticEventsXdr = raw.diagnosticEventsXdr.map(diagnosticEvent => {
      cov_1ttpxfvqbc().f[3]++;
      cov_1ttpxfvqbc().s[13]++;
      return _stellarBase.xdr.DiagnosticEvent.fromXDR(diagnosticEvent, 'base64');
    });
  } else {
    cov_1ttpxfvqbc().b[4][1]++;
  }
  cov_1ttpxfvqbc().s[14]++;
  return info;
}
function parseRawTransactions(r) {
  cov_1ttpxfvqbc().f[4]++;
  cov_1ttpxfvqbc().s[15]++;
  return {
    status: r.status,
    ...parseTransactionInfo(r)
  };
}

/**
 * Parse and return the retrieved events, if any, from a raw response from a Soroban RPC server.
 * @memberof module:rpc
 *
 * @param {Api.RawGetEventsResponse} raw the raw `getEvents` response from the Soroban RPC server to parse
 * @returns {Api.GetEventsResponse} events parsed from the Soroban RPC server's response
 */
function parseRawEvents(raw) {
  cov_1ttpxfvqbc().f[5]++;
  cov_1ttpxfvqbc().s[16]++;
  return {
    latestLedger: raw.latestLedger,
    events: ((cov_1ttpxfvqbc().b[6][0]++, raw.events) ?? (cov_1ttpxfvqbc().b[6][1]++, [])).map(evt => {
      cov_1ttpxfvqbc().f[6]++;
      const clone = (cov_1ttpxfvqbc().s[17]++, {
        ...evt
      });
      cov_1ttpxfvqbc().s[18]++;
      delete clone.contractId; // `as any` hack because contractId field isn't optional

      // the contractId may be empty so we omit the field in that case
      cov_1ttpxfvqbc().s[19]++;
      return {
        ...clone,
        ...((cov_1ttpxfvqbc().b[7][0]++, evt.contractId !== '') && (cov_1ttpxfvqbc().b[7][1]++, {
          contractId: new _stellarBase.Contract(evt.contractId)
        })),
        topic: evt.topic.map(topic => {
          cov_1ttpxfvqbc().f[7]++;
          cov_1ttpxfvqbc().s[20]++;
          return _stellarBase.xdr.ScVal.fromXDR(topic, 'base64');
        }),
        value: _stellarBase.xdr.ScVal.fromXDR(evt.value, 'base64')
      };
    })
  };
}

/**
 * Parse and return the retrieved ledger entries, if any, from a raw response from a Soroban RPC server.
 * @memberof module:rpc
 * @private
 *
 * @param {Api.RawGetLedgerEntriesResponse} raw he raw `getLedgerEntries` response from the Soroban RPC server to parse
 * @returns {Api.GetLedgerEntriesResponse} ledger entries parsed from the Soroban RPC server's response
 */
function parseRawLedgerEntries(raw) {
  cov_1ttpxfvqbc().f[8]++;
  cov_1ttpxfvqbc().s[21]++;
  return {
    latestLedger: raw.latestLedger,
    entries: ((cov_1ttpxfvqbc().b[8][0]++, raw.entries) ?? (cov_1ttpxfvqbc().b[8][1]++, [])).map(rawEntry => {
      cov_1ttpxfvqbc().f[9]++;
      cov_1ttpxfvqbc().s[22]++;
      if ((cov_1ttpxfvqbc().b[10][0]++, !rawEntry.key) || (cov_1ttpxfvqbc().b[10][1]++, !rawEntry.xdr)) {
        cov_1ttpxfvqbc().b[9][0]++;
        cov_1ttpxfvqbc().s[23]++;
        throw new TypeError(`invalid ledger entry: ${JSON.stringify(rawEntry)}`);
      } else {
        cov_1ttpxfvqbc().b[9][1]++;
      }
      cov_1ttpxfvqbc().s[24]++;
      return {
        lastModifiedLedgerSeq: rawEntry.lastModifiedLedgerSeq,
        key: _stellarBase.xdr.LedgerKey.fromXDR(rawEntry.key, 'base64'),
        val: _stellarBase.xdr.LedgerEntryData.fromXDR(rawEntry.xdr, 'base64'),
        ...((cov_1ttpxfvqbc().b[11][0]++, rawEntry.liveUntilLedgerSeq !== undefined) && (cov_1ttpxfvqbc().b[11][1]++, {
          liveUntilLedgerSeq: rawEntry.liveUntilLedgerSeq
        }))
      };
    })
  };
}

/**
 * Parse whether or not the transaction simulation was successful, returning the relevant response.
 * @memberof module:rpc
 * @private
 *
 * @param {Api.RawSimulateTransactionResponse} sim a raw response from the `simulateTransaction` method of the Soroban RPC server to parse
 * @param {Api.BaseSimulateTransactionResponse} partial a partially built simulate transaction response that will be used to build the return response
 * @returns {Api.SimulateTransactionRestoreResponse | Api.SimulateTransactionSuccessResponse} Either a simulation response indicating what ledger entries should be restored, or if the simulation was successful.
 */
function parseSuccessful(sim, partial) {
  cov_1ttpxfvqbc().f[10]++;
  // success type: might have a result (if invoking) and...
  const success = (cov_1ttpxfvqbc().s[25]++, {
    ...partial,
    transactionData: new _stellarBase.SorobanDataBuilder(sim.transactionData),
    minResourceFee: sim.minResourceFee,
    cost: sim.cost,
    ...(
    // coalesce 0-or-1-element results[] list into a single result struct
    // with decoded fields if present
    // eslint-disable-next-line no-self-compare
    ((cov_1ttpxfvqbc().b[12][0]++, sim.results?.length) ?? (cov_1ttpxfvqbc().b[12][1]++, 0 > 0)) && (cov_1ttpxfvqbc().b[12][2]++, {
      result: sim.results.map(row => {
        cov_1ttpxfvqbc().f[11]++;
        cov_1ttpxfvqbc().s[26]++;
        return {
          auth: ((cov_1ttpxfvqbc().b[13][0]++, row.auth) ?? (cov_1ttpxfvqbc().b[13][1]++, [])).map(entry => {
            cov_1ttpxfvqbc().f[12]++;
            cov_1ttpxfvqbc().s[27]++;
            return _stellarBase.xdr.SorobanAuthorizationEntry.fromXDR(entry, 'base64');
          }),
          // if return value is missing ("falsy") we coalesce to void
          retval: row.xdr ? (cov_1ttpxfvqbc().b[14][0]++, _stellarBase.xdr.ScVal.fromXDR(row.xdr, 'base64')) : (cov_1ttpxfvqbc().b[14][1]++, _stellarBase.xdr.ScVal.scvVoid())
        };
      })[0]
    })),
    // eslint-disable-next-line no-self-compare
    ...(((cov_1ttpxfvqbc().b[15][0]++, sim.stateChanges?.length) ?? (cov_1ttpxfvqbc().b[15][1]++, 0 > 0)) && (cov_1ttpxfvqbc().b[15][2]++, {
      stateChanges: sim.stateChanges?.map(entryChange => {
        cov_1ttpxfvqbc().f[13]++;
        cov_1ttpxfvqbc().s[28]++;
        return {
          type: entryChange.type,
          key: _stellarBase.xdr.LedgerKey.fromXDR(entryChange.key, 'base64'),
          before: entryChange.before ? (cov_1ttpxfvqbc().b[16][0]++, _stellarBase.xdr.LedgerEntry.fromXDR(entryChange.before, 'base64')) : (cov_1ttpxfvqbc().b[16][1]++, null),
          after: entryChange.after ? (cov_1ttpxfvqbc().b[17][0]++, _stellarBase.xdr.LedgerEntry.fromXDR(entryChange.after, 'base64')) : (cov_1ttpxfvqbc().b[17][1]++, null)
        };
      })
    }))
  });
  cov_1ttpxfvqbc().s[29]++;
  if ((cov_1ttpxfvqbc().b[19][0]++, !sim.restorePreamble) || (cov_1ttpxfvqbc().b[19][1]++, sim.restorePreamble.transactionData === '')) {
    cov_1ttpxfvqbc().b[18][0]++;
    cov_1ttpxfvqbc().s[30]++;
    return success;
  } else {
    cov_1ttpxfvqbc().b[18][1]++;
  }

  // ...might have a restoration hint (if some state is expired)
  cov_1ttpxfvqbc().s[31]++;
  return {
    ...success,
    restorePreamble: {
      minResourceFee: sim.restorePreamble.minResourceFee,
      transactionData: new _stellarBase.SorobanDataBuilder(sim.restorePreamble.transactionData)
    }
  };
}

/**
 * Converts a raw response schema into one with parsed XDR fields and a simplified interface.
 * @warning This API is only exported for testing purposes and should not be relied on or considered "stable".
 * @memberof module:rpc
 *
 * @param {Api.SimulateTransactionResponse | Api.RawSimulateTransactionResponse} sim the raw response schema (parsed ones are allowed, best-effort
 *    detected, and returned untouched)
 * @returns {Api.SimulateTransactionResponse} the original parameter (if already parsed), parsed otherwise
 */
function parseRawSimulation(sim) {
  cov_1ttpxfvqbc().f[14]++;
  const looksRaw = (cov_1ttpxfvqbc().s[32]++, _api.Api.isSimulationRaw(sim));
  cov_1ttpxfvqbc().s[33]++;
  if (!looksRaw) {
    cov_1ttpxfvqbc().b[20][0]++;
    cov_1ttpxfvqbc().s[34]++;
    // Gordon Ramsey in shambles
    return sim;
  } else {
    cov_1ttpxfvqbc().b[20][1]++;
  }

  // shared across all responses
  const base = (cov_1ttpxfvqbc().s[35]++, {
    _parsed: true,
    id: sim.id,
    latestLedger: sim.latestLedger,
    events: (cov_1ttpxfvqbc().b[21][0]++, sim.events?.map(evt => {
      cov_1ttpxfvqbc().f[15]++;
      cov_1ttpxfvqbc().s[36]++;
      return _stellarBase.xdr.DiagnosticEvent.fromXDR(evt, 'base64');
    })) ?? (cov_1ttpxfvqbc().b[21][1]++, [])
  });

  // error type: just has error string
  cov_1ttpxfvqbc().s[37]++;
  if (typeof sim.error === 'string') {
    cov_1ttpxfvqbc().b[22][0]++;
    cov_1ttpxfvqbc().s[38]++;
    return {
      ...base,
      error: sim.error
    };
  } else {
    cov_1ttpxfvqbc().b[22][1]++;
  }
  cov_1ttpxfvqbc().s[39]++;
  return parseSuccessful(sim, base);
}