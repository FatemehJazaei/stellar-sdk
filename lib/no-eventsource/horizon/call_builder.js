"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallBuilder = void 0;
var _urijs = _interopRequireDefault(require("urijs"));
var _URITemplate = _interopRequireDefault(require("urijs/src/URITemplate"));
var _errors = require("../errors");
var _horizon_axios_client = require("./horizon_axios_client");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_18i6z4695g() {
  var path = "/mnt/g/stellar-sdk/src/horizon/call_builder.ts";
  var hash = "2e7a8c952a447def1618ba6e0f89a797636adb8a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/call_builder.ts",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 17
        },
        end: {
          line: 13,
          column: 32
        }
      },
      "1": {
        start: {
          line: 24,
          column: 18
        },
        end: {
          line: 24,
          column: 31
        }
      },
      "2": {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "3": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 36,
          column: 27
        }
      },
      "4": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 33
        }
      },
      "5": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 21
        }
      },
      "6": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 53
        }
      },
      "7": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 37
        }
      },
      "8": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 23
        }
      },
      "9": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 75,
          column: 6
        }
      },
      "10": {
        start: {
          line: 74,
          column: 6
        },
        end: {
          line: 74,
          column: 28
        }
      },
      "11": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 109,
          column: 5
        }
      },
      "12": {
        start: {
          line: 108,
          column: 6
        },
        end: {
          line: 108,
          column: 138
        }
      },
      "13": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 23
        }
      },
      "14": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 113,
          column: 57
        }
      },
      "15": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 51
        }
      },
      "16": {
        start: {
          line: 124,
          column: 26
        },
        end: {
          line: 130,
          column: 5
        }
      },
      "17": {
        start: {
          line: 125,
          column: 6
        },
        end: {
          line: 129,
          column: 48
        }
      },
      "18": {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 126,
          column: 20
        }
      },
      "19": {
        start: {
          line: 128,
          column: 8
        },
        end: {
          line: 128,
          column: 33
        }
      },
      "20": {
        start: {
          line: 132,
          column: 30
        },
        end: {
          line: 196,
          column: 5
        }
      },
      "21": {
        start: {
          line: 133,
          column: 6
        },
        end: {
          line: 139,
          column: 7
        }
      },
      "22": {
        start: {
          line: 134,
          column: 8
        },
        end: {
          line: 134,
          column: 50
        }
      },
      "23": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 138,
          column: 9
        }
      },
      "24": {
        start: {
          line: 137,
          column: 10
        },
        end: {
          line: 137,
          column: 47
        }
      },
      "25": {
        start: {
          line: 141,
          column: 6
        },
        end: {
          line: 141,
          column: 22
        }
      },
      "26": {
        start: {
          line: 142,
          column: 6
        },
        end: {
          line: 144,
          column: 7
        }
      },
      "27": {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 143,
          column: 18
        }
      },
      "28": {
        start: {
          line: 148,
          column: 19
        },
        end: {
          line: 148,
          column: 24
        }
      },
      "29": {
        start: {
          line: 149,
          column: 22
        },
        end: {
          line: 159,
          column: 7
        }
      },
      "30": {
        start: {
          line: 150,
          column: 8
        },
        end: {
          line: 152,
          column: 9
        }
      },
      "31": {
        start: {
          line: 151,
          column: 10
        },
        end: {
          line: 151,
          column: 17
        }
      },
      "32": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 154,
          column: 30
        }
      },
      "33": {
        start: {
          line: 156,
          column: 8
        },
        end: {
          line: 156,
          column: 19
        }
      },
      "34": {
        start: {
          line: 157,
          column: 8
        },
        end: {
          line: 157,
          column: 28
        }
      },
      "35": {
        start: {
          line: 158,
          column: 8
        },
        end: {
          line: 158,
          column: 22
        }
      },
      "36": {
        start: {
          line: 161,
          column: 24
        },
        end: {
          line: 178,
          column: 7
        }
      },
      "37": {
        start: {
          line: 162,
          column: 8
        },
        end: {
          line: 165,
          column: 9
        }
      },
      "38": {
        start: {
          line: 163,
          column: 10
        },
        end: {
          line: 163,
          column: 20
        }
      },
      "39": {
        start: {
          line: 164,
          column: 10
        },
        end: {
          line: 164,
          column: 17
        }
      },
      "40": {
        start: {
          line: 167,
          column: 23
        },
        end: {
          line: 169,
          column: 19
        }
      },
      "41": {
        start: {
          line: 170,
          column: 8
        },
        end: {
          line: 172,
          column: 9
        }
      },
      "42": {
        start: {
          line: 171,
          column: 10
        },
        end: {
          line: 171,
          column: 59
        }
      },
      "43": {
        start: {
          line: 173,
          column: 8
        },
        end: {
          line: 173,
          column: 30
        }
      },
      "44": {
        start: {
          line: 174,
          column: 8
        },
        end: {
          line: 174,
          column: 24
        }
      },
      "45": {
        start: {
          line: 175,
          column: 8
        },
        end: {
          line: 177,
          column: 9
        }
      },
      "46": {
        start: {
          line: 176,
          column: 10
        },
        end: {
          line: 176,
          column: 36
        }
      },
      "47": {
        start: {
          line: 180,
          column: 22
        },
        end: {
          line: 184,
          column: 7
        }
      },
      "48": {
        start: {
          line: 181,
          column: 8
        },
        end: {
          line: 183,
          column: 9
        }
      },
      "49": {
        start: {
          line: 182,
          column: 10
        },
        end: {
          line: 182,
          column: 49
        }
      },
      "50": {
        start: {
          line: 186,
          column: 6
        },
        end: {
          line: 193,
          column: 7
        }
      },
      "51": {
        start: {
          line: 187,
          column: 8
        },
        end: {
          line: 187,
          column: 61
        }
      },
      "52": {
        start: {
          line: 188,
          column: 8
        },
        end: {
          line: 188,
          column: 57
        }
      },
      "53": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 57
        }
      },
      "54": {
        start: {
          line: 191,
          column: 8
        },
        end: {
          line: 191,
          column: 44
        }
      },
      "55": {
        start: {
          line: 192,
          column: 8
        },
        end: {
          line: 192,
          column: 40
        }
      },
      "56": {
        start: {
          line: 195,
          column: 6
        },
        end: {
          line: 195,
          column: 16
        }
      },
      "57": {
        start: {
          line: 200,
          column: 4
        },
        end: {
          line: 200,
          column: 24
        }
      },
      "58": {
        start: {
          line: 201,
          column: 4
        },
        end: {
          line: 204,
          column: 6
        }
      },
      "59": {
        start: {
          line: 202,
          column: 6
        },
        end: {
          line: 202,
          column: 28
        }
      },
      "60": {
        start: {
          line: 203,
          column: 6
        },
        end: {
          line: 203,
          column: 18
        }
      },
      "61": {
        start: {
          line: 214,
          column: 4
        },
        end: {
          line: 214,
          column: 40
        }
      },
      "62": {
        start: {
          line: 215,
          column: 4
        },
        end: {
          line: 215,
          column: 16
        }
      },
      "63": {
        start: {
          line: 225,
          column: 4
        },
        end: {
          line: 225,
          column: 57
        }
      },
      "64": {
        start: {
          line: 226,
          column: 4
        },
        end: {
          line: 226,
          column: 16
        }
      },
      "65": {
        start: {
          line: 235,
          column: 4
        },
        end: {
          line: 235,
          column: 42
        }
      },
      "66": {
        start: {
          line: 236,
          column: 4
        },
        end: {
          line: 236,
          column: 16
        }
      },
      "67": {
        start: {
          line: 251,
          column: 4
        },
        end: {
          line: 251,
          column: 39
        }
      },
      "68": {
        start: {
          line: 252,
          column: 4
        },
        end: {
          line: 252,
          column: 16
        }
      },
      "69": {
        start: {
          line: 271,
          column: 4
        },
        end: {
          line: 273,
          column: 5
        }
      },
      "70": {
        start: {
          line: 272,
          column: 6
        },
        end: {
          line: 272,
          column: 76
        }
      },
      "71": {
        start: {
          line: 274,
          column: 4
        },
        end: {
          line: 274,
          column: 59
        }
      },
      "72": {
        start: {
          line: 275,
          column: 4
        },
        end: {
          line: 275,
          column: 16
        }
      },
      "73": {
        start: {
          line: 283,
          column: 4
        },
        end: {
          line: 285,
          column: 5
        }
      },
      "74": {
        start: {
          line: 284,
          column: 6
        },
        end: {
          line: 284,
          column: 75
        }
      },
      "75": {
        start: {
          line: 287,
          column: 4
        },
        end: {
          line: 291,
          column: 5
        }
      },
      "76": {
        start: {
          line: 289,
          column: 25
        },
        end: {
          line: 289,
          column: 69
        }
      },
      "77": {
        start: {
          line: 290,
          column: 6
        },
        end: {
          line: 290,
          column: 35
        }
      },
      "78": {
        start: {
          line: 303,
          column: 4
        },
        end: {
          line: 315,
          column: 6
        }
      },
      "79": {
        start: {
          line: 306,
          column: 6
        },
        end: {
          line: 311,
          column: 7
        }
      },
      "80": {
        start: {
          line: 307,
          column: 25
        },
        end: {
          line: 307,
          column: 47
        }
      },
      "81": {
        start: {
          line: 308,
          column: 8
        },
        end: {
          line: 308,
          column: 48
        }
      },
      "82": {
        start: {
          line: 310,
          column: 8
        },
        end: {
          line: 310,
          column: 29
        }
      },
      "83": {
        start: {
          line: 313,
          column: 16
        },
        end: {
          line: 313,
          column: 50
        }
      },
      "84": {
        start: {
          line: 314,
          column: 6
        },
        end: {
          line: 314,
          column: 36
        }
      },
      "85": {
        start: {
          line: 326,
          column: 4
        },
        end: {
          line: 328,
          column: 5
        }
      },
      "86": {
        start: {
          line: 327,
          column: 6
        },
        end: {
          line: 327,
          column: 18
        }
      },
      "87": {
        start: {
          line: 329,
          column: 4
        },
        end: {
          line: 354,
          column: 7
        }
      },
      "88": {
        start: {
          line: 330,
          column: 16
        },
        end: {
          line: 330,
          column: 32
        }
      },
      "89": {
        start: {
          line: 331,
          column: 21
        },
        end: {
          line: 331,
          column: 26
        }
      },
      "90": {
        start: {
          line: 333,
          column: 6
        },
        end: {
          line: 336,
          column: 7
        }
      },
      "91": {
        start: {
          line: 334,
          column: 8
        },
        end: {
          line: 334,
          column: 40
        }
      },
      "92": {
        start: {
          line: 335,
          column: 8
        },
        end: {
          line: 335,
          column: 24
        }
      },
      "93": {
        start: {
          line: 345,
          column: 6
        },
        end: {
          line: 353,
          column: 7
        }
      },
      "94": {
        start: {
          line: 346,
          column: 23
        },
        end: {
          line: 346,
          column: 51
        }
      },
      "95": {
        start: {
          line: 350,
          column: 8
        },
        end: {
          line: 350,
          column: 39
        }
      },
      "96": {
        start: {
          line: 350,
          column: 32
        },
        end: {
          line: 350,
          column: 38
        }
      },
      "97": {
        start: {
          line: 352,
          column: 8
        },
        end: {
          line: 352,
          column: 73
        }
      },
      "98": {
        start: {
          line: 355,
          column: 4
        },
        end: {
          line: 355,
          column: 16
        }
      },
      "99": {
        start: {
          line: 360,
          column: 14
        },
        end: {
          line: 360,
          column: 24
        }
      },
      "100": {
        start: {
          line: 362,
          column: 4
        },
        end: {
          line: 364,
          column: 5
        }
      },
      "101": {
        start: {
          line: 363,
          column: 6
        },
        end: {
          line: 363,
          column: 48
        }
      },
      "102": {
        start: {
          line: 366,
          column: 4
        },
        end: {
          line: 368,
          column: 5
        }
      },
      "103": {
        start: {
          line: 367,
          column: 6
        },
        end: {
          line: 367,
          column: 46
        }
      },
      "104": {
        start: {
          line: 370,
          column: 4
        },
        end: {
          line: 372,
          column: 39
        }
      },
      "105": {
        start: {
          line: 371,
          column: 26
        },
        end: {
          line: 371,
          column: 39
        }
      },
      "106": {
        start: {
          line: 381,
          column: 4
        },
        end: {
          line: 383,
          column: 5
        }
      },
      "107": {
        start: {
          line: 382,
          column: 6
        },
        end: {
          line: 382,
          column: 42
        }
      },
      "108": {
        start: {
          line: 384,
          column: 4
        },
        end: {
          line: 384,
          column: 35
        }
      },
      "109": {
        start: {
          line: 393,
          column: 4
        },
        end: {
          line: 395,
          column: 5
        }
      },
      "110": {
        start: {
          line: 393,
          column: 17
        },
        end: {
          line: 393,
          column: 18
        }
      },
      "111": {
        start: {
          line: 394,
          column: 6
        },
        end: {
          line: 394,
          column: 79
        }
      },
      "112": {
        start: {
          line: 396,
          column: 4
        },
        end: {
          line: 406,
          column: 6
        }
      },
      "113": {
        start: {
          line: 399,
          column: 18
        },
        end: {
          line: 399,
          column: 75
        }
      },
      "114": {
        start: {
          line: 400,
          column: 8
        },
        end: {
          line: 400,
          column: 41
        }
      },
      "115": {
        start: {
          line: 403,
          column: 18
        },
        end: {
          line: 403,
          column: 75
        }
      },
      "116": {
        start: {
          line: 404,
          column: 8
        },
        end: {
          line: 404,
          column: 41
        }
      },
      "117": {
        start: {
          line: 416,
          column: 4
        },
        end: {
          line: 429,
          column: 5
        }
      },
      "118": {
        start: {
          line: 417,
          column: 6
        },
        end: {
          line: 426,
          column: 7
        }
      },
      "119": {
        start: {
          line: 419,
          column: 10
        },
        end: {
          line: 421,
          column: 12
        }
      },
      "120": {
        start: {
          line: 423,
          column: 10
        },
        end: {
          line: 425,
          column: 12
        }
      },
      "121": {
        start: {
          line: 428,
          column: 6
        },
        end: {
          line: 428,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 60,
            column: 2
          },
          end: {
            line: 60,
            column: 3
          }
        },
        loc: {
          start: {
            line: 60,
            column: 57
          },
          end: {
            line: 65,
            column: 3
          }
        },
        line: 60
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 71,
            column: 3
          }
        },
        loc: {
          start: {
            line: 71,
            column: 28
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 71
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 73,
            column: 50
          },
          end: {
            line: 73,
            column: 51
          }
        },
        loc: {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 74,
            column: 28
          }
        },
        line: 74
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 105,
            column: 3
          }
        },
        loc: {
          start: {
            line: 105,
            column: 65
          },
          end: {
            line: 205,
            column: 3
          }
        },
        line: 105
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 124,
            column: 26
          },
          end: {
            line: 124,
            column: 27
          }
        },
        loc: {
          start: {
            line: 124,
            column: 32
          },
          end: {
            line: 130,
            column: 5
          }
        },
        line: 124
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 125,
            column: 27
          },
          end: {
            line: 125,
            column: 28
          }
        },
        loc: {
          start: {
            line: 125,
            column: 33
          },
          end: {
            line: 129,
            column: 7
          }
        },
        line: 125
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 132,
            column: 30
          },
          end: {
            line: 132,
            column: 31
          }
        },
        loc: {
          start: {
            line: 132,
            column: 49
          },
          end: {
            line: 196,
            column: 5
          }
        },
        line: 132
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 149,
            column: 22
          },
          end: {
            line: 149,
            column: 23
          }
        },
        loc: {
          start: {
            line: 149,
            column: 28
          },
          end: {
            line: 159,
            column: 7
          }
        },
        line: 149
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 161,
            column: 24
          },
          end: {
            line: 161,
            column: 25
          }
        },
        loc: {
          start: {
            line: 161,
            column: 42
          },
          end: {
            line: 178,
            column: 7
          }
        },
        line: 161
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 180,
            column: 22
          },
          end: {
            line: 180,
            column: 23
          }
        },
        loc: {
          start: {
            line: 180,
            column: 38
          },
          end: {
            line: 184,
            column: 7
          }
        },
        line: 180
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 201,
            column: 11
          },
          end: {
            line: 201,
            column: 12
          }
        },
        loc: {
          start: {
            line: 201,
            column: 17
          },
          end: {
            line: 204,
            column: 5
          }
        },
        line: 201
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 213,
            column: 2
          },
          end: {
            line: 213,
            column: 3
          }
        },
        loc: {
          start: {
            line: 213,
            column: 38
          },
          end: {
            line: 216,
            column: 3
          }
        },
        line: 213
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 224,
            column: 2
          },
          end: {
            line: 224,
            column: 3
          }
        },
        loc: {
          start: {
            line: 224,
            column: 44
          },
          end: {
            line: 227,
            column: 3
          }
        },
        line: 224
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 234,
            column: 2
          },
          end: {
            line: 234,
            column: 3
          }
        },
        loc: {
          start: {
            line: 234,
            column: 48
          },
          end: {
            line: 237,
            column: 3
          }
        },
        line: 234
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 250,
            column: 2
          },
          end: {
            line: 250,
            column: 3
          }
        },
        loc: {
          start: {
            line: 250,
            column: 45
          },
          end: {
            line: 253,
            column: 3
          }
        },
        line: 250
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 270,
            column: 2
          },
          end: {
            line: 270,
            column: 3
          }
        },
        loc: {
          start: {
            line: 270,
            column: 63
          },
          end: {
            line: 276,
            column: 3
          }
        },
        line: 270
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 282,
            column: 2
          },
          end: {
            line: 282,
            column: 3
          }
        },
        loc: {
          start: {
            line: 282,
            column: 30
          },
          end: {
            line: 292,
            column: 3
          }
        },
        line: 282
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 302,
            column: 2
          },
          end: {
            line: 302,
            column: 3
          }
        },
        loc: {
          start: {
            line: 302,
            column: 80
          },
          end: {
            line: 316,
            column: 3
          }
        },
        line: 302
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 303,
            column: 11
          },
          end: {
            line: 303,
            column: 12
          }
        },
        loc: {
          start: {
            line: 303,
            column: 37
          },
          end: {
            line: 315,
            column: 5
          }
        },
        line: 303
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 325,
            column: 2
          },
          end: {
            line: 325,
            column: 3
          }
        },
        loc: {
          start: {
            line: 325,
            column: 39
          },
          end: {
            line: 356,
            column: 3
          }
        },
        line: 325
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 329,
            column: 37
          },
          end: {
            line: 329,
            column: 38
          }
        },
        loc: {
          start: {
            line: 329,
            column: 46
          },
          end: {
            line: 354,
            column: 5
          }
        },
        line: 329
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 350,
            column: 20
          },
          end: {
            line: 350,
            column: 21
          }
        },
        loc: {
          start: {
            line: 350,
            column: 32
          },
          end: {
            line: 350,
            column: 38
          }
        },
        line: 350
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 359,
            column: 2
          },
          end: {
            line: 359,
            column: 3
          }
        },
        loc: {
          start: {
            line: 359,
            column: 52
          },
          end: {
            line: 373,
            column: 3
          }
        },
        line: 359
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 371,
            column: 12
          },
          end: {
            line: 371,
            column: 13
          }
        },
        loc: {
          start: {
            line: 371,
            column: 26
          },
          end: {
            line: 371,
            column: 39
          }
        },
        line: 371
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 380,
            column: 2
          },
          end: {
            line: 380,
            column: 3
          }
        },
        loc: {
          start: {
            line: 380,
            column: 36
          },
          end: {
            line: 385,
            column: 3
          }
        },
        line: 380
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 392,
            column: 2
          },
          end: {
            line: 392,
            column: 3
          }
        },
        loc: {
          start: {
            line: 392,
            column: 44
          },
          end: {
            line: 407,
            column: 3
          }
        },
        line: 392
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 398,
            column: 12
          },
          end: {
            line: 398,
            column: 13
          }
        },
        loc: {
          start: {
            line: 398,
            column: 24
          },
          end: {
            line: 401,
            column: 7
          }
        },
        line: 398
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 402,
            column: 12
          },
          end: {
            line: 402,
            column: 13
          }
        },
        loc: {
          start: {
            line: 402,
            column: 24
          },
          end: {
            line: 405,
            column: 7
          }
        },
        line: 402
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 415,
            column: 2
          },
          end: {
            line: 415,
            column: 3
          }
        },
        loc: {
          start: {
            line: 415,
            column: 72
          },
          end: {
            line: 430,
            column: 3
          }
        },
        line: 415
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 0
          },
          end: {
            line: 37,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 0
          },
          end: {
            line: 37,
            column: 1
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
        line: 31
      },
      "1": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 46
          }
        }, {
          start: {
            line: 31,
            column: 50
          },
          end: {
            line: 31,
            column: 69
          }
        }],
        line: 31
      },
      "2": {
        loc: {
          start: {
            line: 34,
            column: 16
          },
          end: {
            line: 36,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 34,
            column: 16
          },
          end: {
            line: 34,
            column: 37
          }
        }, {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 33
          }
        }, {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 26
          }
        }],
        line: 34
      },
      "3": {
        loc: {
          start: {
            line: 60,
            column: 30
          },
          end: {
            line: 60,
            column: 55
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 60,
            column: 53
          },
          end: {
            line: 60,
            column: 55
          }
        }],
        line: 60
      },
      "4": {
        loc: {
          start: {
            line: 63,
            column: 28
          },
          end: {
            line: 63,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 63,
            column: 28
          },
          end: {
            line: 63,
            column: 46
          }
        }, {
          start: {
            line: 63,
            column: 50
          },
          end: {
            line: 63,
            column: 52
          }
        }],
        line: 63
      },
      "5": {
        loc: {
          start: {
            line: 105,
            column: 16
          },
          end: {
            line: 105,
            column: 51
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 105,
            column: 49
          },
          end: {
            line: 105,
            column: 51
          }
        }],
        line: 105
      },
      "6": {
        loc: {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
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
        line: 107
      },
      "7": {
        loc: {
          start: {
            line: 129,
            column: 9
          },
          end: {
            line: 129,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 129,
            column: 9
          },
          end: {
            line: 129,
            column: 33
          }
        }, {
          start: {
            line: 129,
            column: 37
          },
          end: {
            line: 129,
            column: 46
          }
        }],
        line: 129
      },
      "8": {
        loc: {
          start: {
            line: 136,
            column: 8
          },
          end: {
            line: 138,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 136,
            column: 8
          },
          end: {
            line: 138,
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
        line: 136
      },
      "9": {
        loc: {
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 144,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 144,
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
        line: 142
      },
      "10": {
        loc: {
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 152,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 152,
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
        line: 150
      },
      "11": {
        loc: {
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 165,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 165,
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
        line: 162
      },
      "12": {
        loc: {
          start: {
            line: 167,
            column: 23
          },
          end: {
            line: 169,
            column: 19
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 168,
            column: 12
          },
          end: {
            line: 168,
            column: 55
          }
        }, {
          start: {
            line: 169,
            column: 12
          },
          end: {
            line: 169,
            column: 19
          }
        }],
        line: 167
      },
      "13": {
        loc: {
          start: {
            line: 170,
            column: 8
          },
          end: {
            line: 172,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 170,
            column: 8
          },
          end: {
            line: 172,
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
        line: 170
      },
      "14": {
        loc: {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 177,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 177,
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
        line: 175
      },
      "15": {
        loc: {
          start: {
            line: 181,
            column: 8
          },
          end: {
            line: 183,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 181,
            column: 8
          },
          end: {
            line: 183,
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
        line: 181
      },
      "16": {
        loc: {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 193,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 193,
            column: 7
          }
        }, {
          start: {
            line: 190,
            column: 13
          },
          end: {
            line: 193,
            column: 7
          }
        }],
        line: 186
      },
      "17": {
        loc: {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 273,
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
            line: 273,
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
        line: 271
      },
      "18": {
        loc: {
          start: {
            line: 283,
            column: 4
          },
          end: {
            line: 285,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 283,
            column: 4
          },
          end: {
            line: 285,
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
        line: 283
      },
      "19": {
        loc: {
          start: {
            line: 287,
            column: 4
          },
          end: {
            line: 291,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 287,
            column: 4
          },
          end: {
            line: 291,
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
        line: 287
      },
      "20": {
        loc: {
          start: {
            line: 303,
            column: 18
          },
          end: {
            line: 303,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 303,
            column: 30
          },
          end: {
            line: 303,
            column: 32
          }
        }],
        line: 303
      },
      "21": {
        loc: {
          start: {
            line: 306,
            column: 6
          },
          end: {
            line: 311,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 306,
            column: 6
          },
          end: {
            line: 311,
            column: 7
          }
        }, {
          start: {
            line: 309,
            column: 13
          },
          end: {
            line: 311,
            column: 7
          }
        }],
        line: 306
      },
      "22": {
        loc: {
          start: {
            line: 326,
            column: 4
          },
          end: {
            line: 328,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 326,
            column: 4
          },
          end: {
            line: 328,
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
        line: 326
      },
      "23": {
        loc: {
          start: {
            line: 333,
            column: 6
          },
          end: {
            line: 336,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 333,
            column: 6
          },
          end: {
            line: 336,
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
        line: 333
      },
      "24": {
        loc: {
          start: {
            line: 345,
            column: 6
          },
          end: {
            line: 353,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 345,
            column: 6
          },
          end: {
            line: 353,
            column: 7
          }
        }, {
          start: {
            line: 351,
            column: 13
          },
          end: {
            line: 353,
            column: 7
          }
        }],
        line: 345
      },
      "25": {
        loc: {
          start: {
            line: 345,
            column: 10
          },
          end: {
            line: 345,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 345,
            column: 10
          },
          end: {
            line: 345,
            column: 18
          }
        }, {
          start: {
            line: 345,
            column: 22
          },
          end: {
            line: 345,
            column: 48
          }
        }],
        line: 345
      },
      "26": {
        loc: {
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 364,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 364,
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
        line: 362
      },
      "27": {
        loc: {
          start: {
            line: 366,
            column: 4
          },
          end: {
            line: 368,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 366,
            column: 4
          },
          end: {
            line: 368,
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
        line: 366
      },
      "28": {
        loc: {
          start: {
            line: 381,
            column: 4
          },
          end: {
            line: 383,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 381,
            column: 4
          },
          end: {
            line: 383,
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
        line: 381
      },
      "29": {
        loc: {
          start: {
            line: 381,
            column: 8
          },
          end: {
            line: 381,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 381,
            column: 8
          },
          end: {
            line: 381,
            column: 22
          }
        }, {
          start: {
            line: 381,
            column: 26
          },
          end: {
            line: 381,
            column: 48
          }
        }],
        line: 381
      },
      "30": {
        loc: {
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 429,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 429,
            column: 5
          }
        }, {
          start: {
            line: 427,
            column: 11
          },
          end: {
            line: 429,
            column: 5
          }
        }],
        line: 416
      },
      "31": {
        loc: {
          start: {
            line: 416,
            column: 8
          },
          end: {
            line: 416,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 416,
            column: 8
          },
          end: {
            line: 416,
            column: 22
          }
        }, {
          start: {
            line: 416,
            column: 26
          },
          end: {
            line: 416,
            column: 47
          }
        }],
        line: 416
      },
      "32": {
        loc: {
          start: {
            line: 417,
            column: 6
          },
          end: {
            line: 426,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 418,
            column: 8
          },
          end: {
            line: 421,
            column: 12
          }
        }, {
          start: {
            line: 422,
            column: 8
          },
          end: {
            line: 425,
            column: 12
          }
        }],
        line: 417
      },
      "33": {
        loc: {
          start: {
            line: 420,
            column: 30
          },
          end: {
            line: 420,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 420,
            column: 30
          },
          end: {
            line: 420,
            column: 55
          }
        }, {
          start: {
            line: 420,
            column: 59
          },
          end: {
            line: 420,
            column: 70
          }
        }],
        line: 420
      },
      "34": {
        loc: {
          start: {
            line: 424,
            column: 29
          },
          end: {
            line: 424,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 424,
            column: 29
          },
          end: {
            line: 424,
            column: 54
          }
        }, {
          start: {
            line: 424,
            column: 58
          },
          end: {
            line: 424,
            column: 67
          }
        }],
        line: 424
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
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0
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
      "28": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0],
      "4": [0, 0],
      "5": [0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0],
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
      "34": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2e7a8c952a447def1618ba6e0f89a797636adb8a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_18i6z4695g = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_18i6z4695g();
// Resources which can be included in the Horizon response via the `join`
// query-param.
const JOINABLE = (cov_18i6z4695g().s[0]++, ["transaction"]);

// eslint-disable-next-line @typescript-eslint/naming-convention

const anyGlobal = (cov_18i6z4695g().s[1]++, global);
// Declare EventSource as a potentially undefined variable
let EventSource;

// Only define EventSource if __USE_EVENTSOURCE__ is true
cov_18i6z4695g().s[2]++;
if ((cov_18i6z4695g().b[1][0]++, typeof false !== 'undefined') && (cov_18i6z4695g().b[1][1]++, false)) {
  cov_18i6z4695g().b[0][0]++;
  cov_18i6z4695g().s[3]++;
  /* eslint-disable global-require */
  /* eslint-disable prefer-import/prefer-import-over-require */
  EventSource = (cov_18i6z4695g().b[2][0]++, anyGlobal.EventSource) ?? (cov_18i6z4695g().b[2][1]++, anyGlobal.window?.EventSource) ?? (cov_18i6z4695g().b[2][2]++, require("eventsource"));
} else {
  cov_18i6z4695g().b[0][1]++;
}

/**
 * Creates a new {@link CallBuilder} pointed to server defined by serverUrl.
 *
 * This is an **abstract** class. Do not create this object directly, use {@link Server} class.
 * @param {string} serverUrl URL of Horizon server
 * @class CallBuilder
 */
class CallBuilder {
  constructor(serverUrl, neighborRoot = (cov_18i6z4695g().b[3][0]++, "")) {
    cov_18i6z4695g().f[0]++;
    cov_18i6z4695g().s[4]++;
    this.url = serverUrl.clone();
    cov_18i6z4695g().s[5]++;
    this.filter = [];
    cov_18i6z4695g().s[6]++;
    this.originalSegments = (cov_18i6z4695g().b[4][0]++, this.url.segment()) || (cov_18i6z4695g().b[4][1]++, []);
    cov_18i6z4695g().s[7]++;
    this.neighborRoot = neighborRoot;
  }

  /**
   * Triggers a HTTP request using this builder's current configuration.
   * @returns {Promise} a Promise that resolves to the server's response.
   */
  call() {
    cov_18i6z4695g().f[1]++;
    cov_18i6z4695g().s[8]++;
    this.checkFilter();
    cov_18i6z4695g().s[9]++;
    return this._sendNormalRequest(this.url).then(r => {
      cov_18i6z4695g().f[2]++;
      cov_18i6z4695g().s[10]++;
      return this._parseResponse(r);
    });
  }
  //// TODO: Migrate to async, BUT that's a change in behavior and tests "rejects two filters" will fail.
  //// It's because async will check within promise, which makes more sense when using awaits instead of Promises.
  // public async call(): Promise<T> {
  //   this.checkFilter();
  //   const r = await this._sendNormalRequest(this.url);
  //   return this._parseResponse(r);
  // }
  //// /* actually equals */
  //// public call(): Promise<T> {
  ////   return Promise.resolve().then(() => {
  ////     this.checkFilter();
  ////     return this._sendNormalRequest(this.url)
  ////   }).then((r) => {
  ////     this._parseResponse(r)
  ////   });
  //// }

  /**
   * Creates an EventSource that listens for incoming messages from the server. To stop listening for new
   * events call the function returned by this method.
   * @see [Horizon Response Format](https://developers.stellar.org/api/introduction/response-format/)
   * @see [MDN EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)
   * @param {object} [options] EventSource options.
   * @param {Function} [options.onmessage] Callback function to handle incoming messages.
   * @param {Function} [options.onerror] Callback function to handle errors.
   * @param {number} [options.reconnectTimeout] Custom stream connection timeout in ms, default is 15 seconds.
   * @returns {Function} Close function. Run to close the connection and stop listening for new events.
   */
  stream(options = (cov_18i6z4695g().b[5][0]++, {})) {
    cov_18i6z4695g().f[3]++;
    cov_18i6z4695g().s[11]++;
    // Check if EventSource use is enabled
    if (EventSource === undefined) {
      cov_18i6z4695g().b[6][0]++;
      cov_18i6z4695g().s[12]++;
      throw new Error("Streaming requires eventsource to be enabled. If you need this functionality, compile with USE_EVENTSOURCE=true.");
    } else {
      cov_18i6z4695g().b[6][1]++;
    }
    cov_18i6z4695g().s[13]++;
    this.checkFilter();
    cov_18i6z4695g().s[14]++;
    this.url.setQuery("X-Client-Name", "js-stellar-sdk");
    cov_18i6z4695g().s[15]++;
    this.url.setQuery("X-Client-Version", _horizon_axios_client.version);

    // EventSource object
    let es;
    // timeout is the id of the timeout to be triggered if there were no new messages
    // in the last 15 seconds. The timeout is reset when a new message arrive.
    // It prevents closing EventSource object in case of 504 errors as `readyState`
    // property is not reliable.
    let timeout;
    cov_18i6z4695g().s[16]++;
    const createTimeout = () => {
      cov_18i6z4695g().f[4]++;
      cov_18i6z4695g().s[17]++;
      timeout = setTimeout(() => {
        cov_18i6z4695g().f[5]++;
        cov_18i6z4695g().s[18]++;
        es?.close();
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        cov_18i6z4695g().s[19]++;
        es = createEventSource();
      }, (cov_18i6z4695g().b[7][0]++, options.reconnectTimeout) || (cov_18i6z4695g().b[7][1]++, 15 * 1000));
    };
    cov_18i6z4695g().s[20]++;
    const createEventSource = () => {
      cov_18i6z4695g().f[6]++;
      cov_18i6z4695g().s[21]++;
      try {
        cov_18i6z4695g().s[22]++;
        es = new EventSource(this.url.toString());
      } catch (err) {
        cov_18i6z4695g().s[23]++;
        if (options.onerror) {
          cov_18i6z4695g().b[8][0]++;
          cov_18i6z4695g().s[24]++;
          options.onerror(err);
        } else {
          cov_18i6z4695g().b[8][1]++;
        }
      }
      cov_18i6z4695g().s[25]++;
      createTimeout();
      cov_18i6z4695g().s[26]++;
      if (!es) {
        cov_18i6z4695g().b[9][0]++;
        cov_18i6z4695g().s[27]++;
        return es;
      } else {
        cov_18i6z4695g().b[9][1]++;
      }

      // when receiving the close message from Horizon we should close the
      // connection and recreate the event source (basically retrying forever)
      let closed = (cov_18i6z4695g().s[28]++, false);
      cov_18i6z4695g().s[29]++;
      const onClose = () => {
        cov_18i6z4695g().f[7]++;
        cov_18i6z4695g().s[30]++;
        if (closed) {
          cov_18i6z4695g().b[10][0]++;
          cov_18i6z4695g().s[31]++;
          return;
        } else {
          cov_18i6z4695g().b[10][1]++;
        }
        cov_18i6z4695g().s[32]++;
        clearTimeout(timeout);
        cov_18i6z4695g().s[33]++;
        es.close();
        cov_18i6z4695g().s[34]++;
        createEventSource();
        cov_18i6z4695g().s[35]++;
        closed = true;
      };
      cov_18i6z4695g().s[36]++;
      const onMessage = message => {
        cov_18i6z4695g().f[8]++;
        cov_18i6z4695g().s[37]++;
        if (message.type === "close") {
          cov_18i6z4695g().b[11][0]++;
          cov_18i6z4695g().s[38]++;
          onClose();
          cov_18i6z4695g().s[39]++;
          return;
        } else {
          cov_18i6z4695g().b[11][1]++;
        }
        const result = (cov_18i6z4695g().s[40]++, message.data ? (cov_18i6z4695g().b[12][0]++, this._parseRecord(JSON.parse(message.data))) : (cov_18i6z4695g().b[12][1]++, message));
        cov_18i6z4695g().s[41]++;
        if (result.paging_token) {
          cov_18i6z4695g().b[13][0]++;
          cov_18i6z4695g().s[42]++;
          this.url.setQuery("cursor", result.paging_token);
        } else {
          cov_18i6z4695g().b[13][1]++;
        }
        cov_18i6z4695g().s[43]++;
        clearTimeout(timeout);
        cov_18i6z4695g().s[44]++;
        createTimeout();
        cov_18i6z4695g().s[45]++;
        if (typeof options.onmessage !== "undefined") {
          cov_18i6z4695g().b[14][0]++;
          cov_18i6z4695g().s[46]++;
          options.onmessage(result);
        } else {
          cov_18i6z4695g().b[14][1]++;
        }
      };
      cov_18i6z4695g().s[47]++;
      const onError = error => {
        cov_18i6z4695g().f[9]++;
        cov_18i6z4695g().s[48]++;
        if (options.onerror) {
          cov_18i6z4695g().b[15][0]++;
          cov_18i6z4695g().s[49]++;
          options.onerror(error);
        } else {
          cov_18i6z4695g().b[15][1]++;
        }
      };
      cov_18i6z4695g().s[50]++;
      if (es.addEventListener) {
        cov_18i6z4695g().b[16][0]++;
        cov_18i6z4695g().s[51]++;
        es.addEventListener("message", onMessage.bind(this));
        cov_18i6z4695g().s[52]++;
        es.addEventListener("error", onError.bind(this));
        cov_18i6z4695g().s[53]++;
        es.addEventListener("close", onClose.bind(this));
      } else {
        cov_18i6z4695g().b[16][1]++;
        cov_18i6z4695g().s[54]++;
        es.onmessage = onMessage.bind(this);
        cov_18i6z4695g().s[55]++;
        es.onerror = onError.bind(this);
      }
      cov_18i6z4695g().s[56]++;
      return es;
    };
    cov_18i6z4695g().s[57]++;
    createEventSource();
    cov_18i6z4695g().s[58]++;
    return () => {
      cov_18i6z4695g().f[10]++;
      cov_18i6z4695g().s[59]++;
      clearTimeout(timeout);
      cov_18i6z4695g().s[60]++;
      es?.close();
    };
  }

  /**
   * Sets `cursor` parameter for the current call. Returns the CallBuilder object on which this method has been called.
   * @see [Paging](https://developers.stellar.org/api/introduction/pagination/)
   * @param {string} cursor A cursor is a value that points to a specific location in a collection of resources.
   * @returns {object} current CallBuilder instance
   */
  cursor(cursor) {
    cov_18i6z4695g().f[11]++;
    cov_18i6z4695g().s[61]++;
    this.url.setQuery("cursor", cursor);
    cov_18i6z4695g().s[62]++;
    return this;
  }

  /**
   * Sets `limit` parameter for the current call. Returns the CallBuilder object on which this method has been called.
   * @see [Paging](https://developers.stellar.org/api/introduction/pagination/)
   * @param {number} recordsNumber Number of records the server should return.
   * @returns {object} current CallBuilder instance
   */
  limit(recordsNumber) {
    cov_18i6z4695g().f[12]++;
    cov_18i6z4695g().s[63]++;
    this.url.setQuery("limit", recordsNumber.toString());
    cov_18i6z4695g().s[64]++;
    return this;
  }

  /**
   * Sets `order` parameter for the current call. Returns the CallBuilder object on which this method has been called.
   * @param {"asc"|"desc"} direction Sort direction
   * @returns {object} current CallBuilder instance
   */
  order(direction) {
    cov_18i6z4695g().f[13]++;
    cov_18i6z4695g().s[65]++;
    this.url.setQuery("order", direction);
    cov_18i6z4695g().s[66]++;
    return this;
  }

  /**
   * Sets `join` parameter for the current call. The `join` parameter
   * includes the requested resource in the response. Currently, the
   * only valid value for the parameter is `transactions` and is only
   * supported on the operations and payments endpoints. The response
   * will include a `transaction` field for each operation in the
   * response.
   *
   * @param "include" join Records to be included in the response.
   * @returns {object} current CallBuilder instance.
   */
  join(include) {
    cov_18i6z4695g().f[14]++;
    cov_18i6z4695g().s[67]++;
    this.url.setQuery("join", include);
    cov_18i6z4695g().s[68]++;
    return this;
  }

  /**
   * A helper method to craft queries to "neighbor" endpoints.
   *
   *  For example, we have an `/effects` suffix endpoint on many different
   *  "root" endpoints, such as `/transactions/:id` and `/accounts/:id`. So,
   *  it's helpful to be able to conveniently create queries to the
   *  `/accounts/:id/effects` endpoint:
   *
   *    this.forEndpoint("accounts", accountId)`.
   *
   * @param  {string} endpoint neighbor endpoint in question, like /operations
   * @param  {string} param    filter parameter, like an operation ID
   *
   * @returns {CallBuilder} this CallBuilder instance
   */
  forEndpoint(endpoint, param) {
    cov_18i6z4695g().f[15]++;
    cov_18i6z4695g().s[69]++;
    if (this.neighborRoot === "") {
      cov_18i6z4695g().b[17][0]++;
      cov_18i6z4695g().s[70]++;
      throw new Error("Invalid usage: neighborRoot not set in constructor");
    } else {
      cov_18i6z4695g().b[17][1]++;
    }
    cov_18i6z4695g().s[71]++;
    this.filter.push([endpoint, param, this.neighborRoot]);
    cov_18i6z4695g().s[72]++;
    return this;
  }

  /**
   * @private
   * @returns {void}
   */
  checkFilter() {
    cov_18i6z4695g().f[16]++;
    cov_18i6z4695g().s[73]++;
    if (this.filter.length >= 2) {
      cov_18i6z4695g().b[18][0]++;
      cov_18i6z4695g().s[74]++;
      throw new _errors.BadRequestError("Too many filters specified", this.filter);
    } else {
      cov_18i6z4695g().b[18][1]++;
    }
    cov_18i6z4695g().s[75]++;
    if (this.filter.length === 1) {
      cov_18i6z4695g().b[19][0]++;
      // append filters to original segments
      const newSegment = (cov_18i6z4695g().s[76]++, this.originalSegments.concat(this.filter[0]));
      cov_18i6z4695g().s[77]++;
      this.url.segment(newSegment);
    } else {
      cov_18i6z4695g().b[19][1]++;
    }
  }

  /**
   * Convert a link object to a function that fetches that link.
   * @private
   * @param {object} link A link object
   * @param {boolean} link.href the URI of the link
   * @param {boolean} [link.templated] Whether the link is templated
   * @returns {Function} A function that requests the link
   */
  _requestFnForLink(link) {
    cov_18i6z4695g().f[17]++;
    cov_18i6z4695g().s[78]++;
    return async (opts = (cov_18i6z4695g().b[20][0]++, {})) => {
      cov_18i6z4695g().f[18]++;
      let uri;
      cov_18i6z4695g().s[79]++;
      if (link.templated) {
        cov_18i6z4695g().b[21][0]++;
        const template = (cov_18i6z4695g().s[80]++, (0, _URITemplate.default)(link.href));
        cov_18i6z4695g().s[81]++;
        uri = (0, _urijs.default)(template.expand(opts)); // TODO: fix upstream types.
      } else {
        cov_18i6z4695g().b[21][1]++;
        cov_18i6z4695g().s[82]++;
        uri = (0, _urijs.default)(link.href);
      }
      const r = (cov_18i6z4695g().s[83]++, await this._sendNormalRequest(uri));
      cov_18i6z4695g().s[84]++;
      return this._parseResponse(r);
    };
  }

  /**
   * Given the json response, find and convert each link into a function that
   * calls that link.
   * @private
   * @param {object} json JSON response
   * @returns {object} JSON response with string links replaced with functions
   */
  _parseRecord(json) {
    cov_18i6z4695g().f[19]++;
    cov_18i6z4695g().s[85]++;
    if (!json._links) {
      cov_18i6z4695g().b[22][0]++;
      cov_18i6z4695g().s[86]++;
      return json;
    } else {
      cov_18i6z4695g().b[22][1]++;
    }
    cov_18i6z4695g().s[87]++;
    Object.keys(json._links).forEach(key => {
      cov_18i6z4695g().f[20]++;
      const n = (cov_18i6z4695g().s[88]++, json._links[key]);
      let included = (cov_18i6z4695g().s[89]++, false);
      // If the key with the link name already exists, create a copy
      cov_18i6z4695g().s[90]++;
      if (typeof json[key] !== "undefined") {
        cov_18i6z4695g().b[23][0]++;
        cov_18i6z4695g().s[91]++;
        json[`${key}_attr`] = json[key];
        cov_18i6z4695g().s[92]++;
        included = true;
      } else {
        cov_18i6z4695g().b[23][1]++;
      }

      /*
       If the resource can be side-loaded using `join` query-param then don't
       try to load from the server. We need to whitelist the keys which are
       joinable, since there are other keys like `ledger` which is included in
       some payloads, but doesn't represent the ledger resource, in that
       scenario we want to make the call to the server using the URL from links.
      */
      cov_18i6z4695g().s[93]++;
      if ((cov_18i6z4695g().b[25][0]++, included) && (cov_18i6z4695g().b[25][1]++, JOINABLE.indexOf(key) >= 0)) {
        cov_18i6z4695g().b[24][0]++;
        const record = (cov_18i6z4695g().s[94]++, this._parseRecord(json[key]));
        // Maintain a promise based API so the behavior is the same whether you
        // are loading from the server or in-memory (via join).
        // eslint-disable-next-line require-await
        cov_18i6z4695g().s[95]++;
        json[key] = async () => {
          cov_18i6z4695g().f[21]++;
          cov_18i6z4695g().s[96]++;
          return record;
        };
      } else {
        cov_18i6z4695g().b[24][1]++;
        cov_18i6z4695g().s[97]++;
        json[key] = this._requestFnForLink(n);
      }
    });
    cov_18i6z4695g().s[98]++;
    return json;
  }

  // eslint-disable-next-line require-await
  async _sendNormalRequest(initialUrl) {
    cov_18i6z4695g().f[22]++;
    let url = (cov_18i6z4695g().s[99]++, initialUrl);
    cov_18i6z4695g().s[100]++;
    if (url.authority() === "") {
      cov_18i6z4695g().b[26][0]++;
      cov_18i6z4695g().s[101]++;
      url = url.authority(this.url.authority());
    } else {
      cov_18i6z4695g().b[26][1]++;
    }
    cov_18i6z4695g().s[102]++;
    if (url.protocol() === "") {
      cov_18i6z4695g().b[27][0]++;
      cov_18i6z4695g().s[103]++;
      url = url.protocol(this.url.protocol());
    } else {
      cov_18i6z4695g().b[27][1]++;
    }
    cov_18i6z4695g().s[104]++;
    return _horizon_axios_client.AxiosClient.get(url.toString()).then(response => {
      cov_18i6z4695g().f[23]++;
      cov_18i6z4695g().s[105]++;
      return response.data;
    }).catch(this._handleNetworkError);
  }

  /**
   * @private
   * @param {object} json Response object
   * @returns {object} Extended response
   */
  _parseResponse(json) {
    cov_18i6z4695g().f[24]++;
    cov_18i6z4695g().s[106]++;
    if ((cov_18i6z4695g().b[29][0]++, json._embedded) && (cov_18i6z4695g().b[29][1]++, json._embedded.records)) {
      cov_18i6z4695g().b[28][0]++;
      cov_18i6z4695g().s[107]++;
      return this._toCollectionPage(json);
    } else {
      cov_18i6z4695g().b[28][1]++;
    }
    cov_18i6z4695g().s[108]++;
    return this._parseRecord(json);
  }

  /**
   * @private
   * @param {object} json Response object
   * @returns {object} Extended response object
   */
  _toCollectionPage(json) {
    cov_18i6z4695g().f[25]++;
    cov_18i6z4695g().s[109]++;
    for (let i = (cov_18i6z4695g().s[110]++, 0); i < json._embedded.records.length; i += 1) {
      cov_18i6z4695g().s[111]++;
      json._embedded.records[i] = this._parseRecord(json._embedded.records[i]);
    }
    cov_18i6z4695g().s[112]++;
    return {
      records: json._embedded.records,
      next: async () => {
        cov_18i6z4695g().f[26]++;
        const r = (cov_18i6z4695g().s[113]++, await this._sendNormalRequest((0, _urijs.default)(json._links.next.href)));
        cov_18i6z4695g().s[114]++;
        return this._toCollectionPage(r);
      },
      prev: async () => {
        cov_18i6z4695g().f[27]++;
        const r = (cov_18i6z4695g().s[115]++, await this._sendNormalRequest((0, _urijs.default)(json._links.prev.href)));
        cov_18i6z4695g().s[116]++;
        return this._toCollectionPage(r);
      }
    };
  }

  /**
   * @private
   * @param {object} error Network error object
   * @returns {Promise<Error>} Promise that rejects with a human-readable error
   */
  // eslint-disable-next-line require-await
  async _handleNetworkError(error) {
    cov_18i6z4695g().f[28]++;
    cov_18i6z4695g().s[117]++;
    if ((cov_18i6z4695g().b[31][0]++, error.response) && (cov_18i6z4695g().b[31][1]++, error.response.status)) {
      cov_18i6z4695g().b[30][0]++;
      cov_18i6z4695g().s[118]++;
      switch (error.response.status) {
        case 404:
          cov_18i6z4695g().b[32][0]++;
          cov_18i6z4695g().s[119]++;
          return Promise.reject(new _errors.NotFoundError((cov_18i6z4695g().b[33][0]++, error.response.statusText) ?? (cov_18i6z4695g().b[33][1]++, "Not Found"), error.response.data));
        default:
          cov_18i6z4695g().b[32][1]++;
          cov_18i6z4695g().s[120]++;
          return Promise.reject(new _errors.NetworkError((cov_18i6z4695g().b[34][0]++, error.response.statusText) ?? (cov_18i6z4695g().b[34][1]++, "Unknown"), error.response.data));
      }
    } else {
      cov_18i6z4695g().b[30][1]++;
      cov_18i6z4695g().s[121]++;
      return Promise.reject(new Error(error.message));
    }
  }
}
exports.CallBuilder = CallBuilder;