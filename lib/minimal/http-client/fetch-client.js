"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = createFetchClient;
exports.fetchClient = void 0;
var _feaxios = _interopRequireDefault(require("feaxios"));
var _types = require("./types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_23bkmukuo4() {
  var path = "/mnt/g/stellar-sdk/src/http-client/fetch-client.ts";
  var hash = "f2fe5f35da3830595f4ccba85e49d85112653e72";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/http-client/fetch-client.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 43
        },
        end: {
          line: 19,
          column: 45
        }
      },
      "1": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 25,
          column: 7
        }
      },
      "2": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 36
        }
      },
      "3": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 32,
          column: 5
        }
      },
      "4": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 31
        }
      },
      "5": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 40,
          column: 7
        }
      },
      "6": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 39,
          column: 7
        }
      },
      "7": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 14
        }
      },
      "8": {
        start: {
          line: 44,
          column: 21
        },
        end: {
          line: 44,
          column: 33
        }
      },
      "9": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 45,
          column: 61
        }
      },
      "10": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 78
        }
      },
      "11": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 20
        }
      },
      "12": {
        start: {
          line: 51,
          column: 40
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "13": {
        start: {
          line: 56,
          column: 34
        },
        end: {
          line: 56,
          column: 56
        }
      },
      "14": {
        start: {
          line: 57,
          column: 30
        },
        end: {
          line: 57,
          column: 79
        }
      },
      "15": {
        start: {
          line: 58,
          column: 31
        },
        end: {
          line: 58,
          column: 75
        }
      },
      "16": {
        start: {
          line: 60,
          column: 33
        },
        end: {
          line: 204,
          column: 3
        }
      },
      "17": {
        start: {
          line: 68,
          column: 52
        },
        end: {
          line: 68,
          column: 76
        }
      },
      "18": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 72,
          column: 64
        }
      },
      "19": {
        start: {
          line: 76,
          column: 6
        },
        end: {
          line: 155,
          column: 9
        }
      },
      "20": {
        start: {
          line: 77,
          column: 32
        },
        end: {
          line: 77,
          column: 53
        }
      },
      "21": {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 47
        }
      },
      "22": {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 85,
          column: 9
        }
      },
      "23": {
        start: {
          line: 81,
          column: 10
        },
        end: {
          line: 84,
          column: 13
        }
      },
      "24": {
        start: {
          line: 82,
          column: 12
        },
        end: {
          line: 82,
          column: 36
        }
      },
      "25": {
        start: {
          line: 83,
          column: 12
        },
        end: {
          line: 83,
          column: 50
        }
      },
      "26": {
        start: {
          line: 88,
          column: 29
        },
        end: {
          line: 88,
          column: 35
        }
      },
      "27": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 107,
          column: 9
        }
      },
      "28": {
        start: {
          line: 90,
          column: 24
        },
        end: {
          line: 95,
          column: 14
        }
      },
      "29": {
        start: {
          line: 91,
          column: 85
        },
        end: {
          line: 91,
          column: 105
        }
      },
      "30": {
        start: {
          line: 92,
          column: 38
        },
        end: {
          line: 95,
          column: 13
        }
      },
      "31": {
        start: {
          line: 96,
          column: 10
        },
        end: {
          line: 106,
          column: 11
        }
      },
      "32": {
        start: {
          line: 96,
          column: 23
        },
        end: {
          line: 96,
          column: 24
        }
      },
      "33": {
        start: {
          line: 96,
          column: 32
        },
        end: {
          line: 96,
          column: 44
        }
      },
      "34": {
        start: {
          line: 97,
          column: 32
        },
        end: {
          line: 97,
          column: 40
        }
      },
      "35": {
        start: {
          line: 98,
          column: 31
        },
        end: {
          line: 98,
          column: 43
        }
      },
      "36": {
        start: {
          line: 99,
          column: 12
        },
        end: {
          line: 105,
          column: 13
        }
      },
      "37": {
        start: {
          line: 100,
          column: 14
        },
        end: {
          line: 100,
          column: 76
        }
      },
      "38": {
        start: {
          line: 100,
          column: 31
        },
        end: {
          line: 100,
          column: 76
        }
      },
      "39": {
        start: {
          line: 102,
          column: 14
        },
        end: {
          line: 102,
          column: 75
        }
      },
      "40": {
        start: {
          line: 102,
          column: 30
        },
        end: {
          line: 102,
          column: 75
        }
      },
      "41": {
        start: {
          line: 103,
          column: 14
        },
        end: {
          line: 103,
          column: 28
        }
      },
      "42": {
        start: {
          line: 104,
          column: 14
        },
        end: {
          line: 104,
          column: 21
        }
      },
      "43": {
        start: {
          line: 109,
          column: 24
        },
        end: {
          line: 109,
          column: 71
        }
      },
      "44": {
        start: {
          line: 110,
          column: 8
        },
        end: {
          line: 112,
          column: 9
        }
      },
      "45": {
        start: {
          line: 111,
          column: 10
        },
        end: {
          line: 111,
          column: 50
        }
      },
      "46": {
        start: {
          line: 113,
          column: 30
        },
        end: {
          line: 123,
          column: 10
        }
      },
      "47": {
        start: {
          line: 115,
          column: 60
        },
        end: {
          line: 121,
          column: 11
        }
      },
      "48": {
        start: {
          line: 122,
          column: 10
        },
        end: {
          line: 122,
          column: 36
        }
      },
      "49": {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 149,
          column: 9
        }
      },
      "50": {
        start: {
          line: 127,
          column: 24
        },
        end: {
          line: 129,
          column: 84
        }
      },
      "51": {
        start: {
          line: 128,
          column: 85
        },
        end: {
          line: 128,
          column: 105
        }
      },
      "52": {
        start: {
          line: 129,
          column: 38
        },
        end: {
          line: 129,
          column: 83
        }
      },
      "53": {
        start: {
          line: 131,
          column: 10
        },
        end: {
          line: 148,
          column: 11
        }
      },
      "54": {
        start: {
          line: 131,
          column: 23
        },
        end: {
          line: 131,
          column: 24
        }
      },
      "55": {
        start: {
          line: 131,
          column: 32
        },
        end: {
          line: 131,
          column: 44
        }
      },
      "56": {
        start: {
          line: 132,
          column: 12
        },
        end: {
          line: 147,
          column: 65
        }
      },
      "57": {
        start: {
          line: 134,
          column: 45
        },
        end: {
          line: 134,
          column: 53
        }
      },
      "58": {
        start: {
          line: 135,
          column: 16
        },
        end: {
          line: 137,
          column: 17
        }
      },
      "59": {
        start: {
          line: 136,
          column: 18
        },
        end: {
          line: 136,
          column: 56
        }
      },
      "60": {
        start: {
          line: 138,
          column: 16
        },
        end: {
          line: 138,
          column: 32
        }
      },
      "61": {
        start: {
          line: 141,
          column: 44
        },
        end: {
          line: 141,
          column: 56
        }
      },
      "62": {
        start: {
          line: 142,
          column: 16
        },
        end: {
          line: 144,
          column: 17
        }
      },
      "63": {
        start: {
          line: 143,
          column: 18
        },
        end: {
          line: 143,
          column: 52
        }
      },
      "64": {
        start: {
          line: 145,
          column: 16
        },
        end: {
          line: 145,
          column: 28
        }
      },
      "65": {
        start: {
          line: 147,
          column: 44
        },
        end: {
          line: 147,
          column: 63
        }
      },
      "66": {
        start: {
          line: 152,
          column: 8
        },
        end: {
          line: 154,
          column: 23
        }
      },
      "67": {
        start: {
          line: 160,
          column: 6
        },
        end: {
          line: 160,
          column: 83
        }
      },
      "68": {
        start: {
          line: 164,
          column: 6
        },
        end: {
          line: 164,
          column: 86
        }
      },
      "69": {
        start: {
          line: 168,
          column: 6
        },
        end: {
          line: 168,
          column: 84
        }
      },
      "70": {
        start: {
          line: 172,
          column: 6
        },
        end: {
          line: 172,
          column: 87
        }
      },
      "71": {
        start: {
          line: 176,
          column: 6
        },
        end: {
          line: 176,
          column: 90
        }
      },
      "72": {
        start: {
          line: 180,
          column: 6
        },
        end: {
          line: 180,
          column: 89
        }
      },
      "73": {
        start: {
          line: 184,
          column: 6
        },
        end: {
          line: 184,
          column: 91
        }
      },
      "74": {
        start: {
          line: 188,
          column: 25
        },
        end: {
          line: 188,
          column: 46
        }
      },
      "75": {
        start: {
          line: 189,
          column: 6
        },
        end: {
          line: 189,
          column: 94
        }
      },
      "76": {
        start: {
          line: 193,
          column: 25
        },
        end: {
          line: 193,
          column: 46
        }
      },
      "77": {
        start: {
          line: 194,
          column: 6
        },
        end: {
          line: 194,
          column: 93
        }
      },
      "78": {
        start: {
          line: 198,
          column: 25
        },
        end: {
          line: 198,
          column: 46
        }
      },
      "79": {
        start: {
          line: 199,
          column: 6
        },
        end: {
          line: 199,
          column: 95
        }
      },
      "80": {
        start: {
          line: 203,
          column: 39
        },
        end: {
          line: 203,
          column: 101
        }
      },
      "81": {
        start: {
          line: 207,
          column: 2
        },
        end: {
          line: 207,
          column: 20
        }
      },
      "82": {
        start: {
          line: 210,
          column: 27
        },
        end: {
          line: 210,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 82
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 26
          },
          end: {
            line: 33,
            column: 3
          }
        },
        line: 29
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 59
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 35
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 36,
            column: 26
          },
          end: {
            line: 36,
            column: 27
          }
        },
        loc: {
          start: {
            line: 36,
            column: 33
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 36
      },
      "4": {
        name: "getFormConfig",
        decl: {
          start: {
            line: 43,
            column: 9
          },
          end: {
            line: 43,
            column: 22
          }
        },
        loc: {
          start: {
            line: 43,
            column: 82
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 43
      },
      "5": {
        name: "createFetchClient",
        decl: {
          start: {
            line: 50,
            column: 9
          },
          end: {
            line: 50,
            column: 26
          }
        },
        loc: {
          start: {
            line: 50,
            column: 82
          },
          end: {
            line: 208,
            column: 1
          }
        },
        line: 50
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 68,
            column: 15
          },
          end: {
            line: 68,
            column: 16
          }
        },
        loc: {
          start: {
            line: 68,
            column: 52
          },
          end: {
            line: 68,
            column: 76
          }
        },
        line: 68
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 71,
            column: 5
          }
        },
        loc: {
          start: {
            line: 71,
            column: 57
          },
          end: {
            line: 73,
            column: 5
          }
        },
        line: 71
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        loc: {
          start: {
            line: 75,
            column: 78
          },
          end: {
            line: 156,
            column: 5
          }
        },
        line: 75
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 76,
            column: 25
          },
          end: {
            line: 76,
            column: 26
          }
        },
        loc: {
          start: {
            line: 76,
            column: 46
          },
          end: {
            line: 155,
            column: 7
          }
        },
        line: 76
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 81,
            column: 42
          },
          end: {
            line: 81,
            column: 43
          }
        },
        loc: {
          start: {
            line: 81,
            column: 48
          },
          end: {
            line: 84,
            column: 11
          }
        },
        line: 81
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 91,
            column: 20
          },
          end: {
            line: 91,
            column: 21
          }
        },
        loc: {
          start: {
            line: 91,
            column: 85
          },
          end: {
            line: 91,
            column: 105
          }
        },
        line: 91
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 92,
            column: 21
          },
          end: {
            line: 92,
            column: 22
          }
        },
        loc: {
          start: {
            line: 92,
            column: 38
          },
          end: {
            line: 95,
            column: 13
          }
        },
        line: 92
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 113,
            column: 59
          },
          end: {
            line: 113,
            column: 60
          }
        },
        loc: {
          start: {
            line: 113,
            column: 78
          },
          end: {
            line: 123,
            column: 9
          }
        },
        line: 113
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 128,
            column: 20
          },
          end: {
            line: 128,
            column: 21
          }
        },
        loc: {
          start: {
            line: 128,
            column: 85
          },
          end: {
            line: 128,
            column: 105
          }
        },
        line: 128
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 129,
            column: 21
          },
          end: {
            line: 129,
            column: 22
          }
        },
        loc: {
          start: {
            line: 129,
            column: 38
          },
          end: {
            line: 129,
            column: 83
          }
        },
        line: 129
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 133,
            column: 14
          },
          end: {
            line: 133,
            column: 15
          }
        },
        loc: {
          start: {
            line: 133,
            column: 28
          },
          end: {
            line: 139,
            column: 15
          }
        },
        line: 133
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 140,
            column: 14
          },
          end: {
            line: 140,
            column: 15
          }
        },
        loc: {
          start: {
            line: 140,
            column: 25
          },
          end: {
            line: 146,
            column: 15
          }
        },
        line: 140
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 147,
            column: 19
          },
          end: {
            line: 147,
            column: 20
          }
        },
        loc: {
          start: {
            line: 147,
            column: 44
          },
          end: {
            line: 147,
            column: 63
          }
        },
        line: 147
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 159,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        loc: {
          start: {
            line: 159,
            column: 96
          },
          end: {
            line: 161,
            column: 5
          }
        },
        line: 159
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        loc: {
          start: {
            line: 163,
            column: 99
          },
          end: {
            line: 165,
            column: 5
          }
        },
        line: 163
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 167,
            column: 5
          }
        },
        loc: {
          start: {
            line: 167,
            column: 97
          },
          end: {
            line: 169,
            column: 5
          }
        },
        line: 167
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 171,
            column: 5
          }
        },
        loc: {
          start: {
            line: 171,
            column: 100
          },
          end: {
            line: 173,
            column: 5
          }
        },
        line: 171
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 175,
            column: 5
          }
        },
        loc: {
          start: {
            line: 175,
            column: 109
          },
          end: {
            line: 177,
            column: 5
          }
        },
        line: 175
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 5
          }
        },
        loc: {
          start: {
            line: 179,
            column: 108
          },
          end: {
            line: 181,
            column: 5
          }
        },
        line: 179
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 183,
            column: 5
          }
        },
        loc: {
          start: {
            line: 183,
            column: 110
          },
          end: {
            line: 185,
            column: 5
          }
        },
        line: 183
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 187,
            column: 5
          }
        },
        loc: {
          start: {
            line: 187,
            column: 113
          },
          end: {
            line: 190,
            column: 5
          }
        },
        line: 187
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        },
        loc: {
          start: {
            line: 192,
            column: 112
          },
          end: {
            line: 195,
            column: 5
          }
        },
        line: 192
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 197,
            column: 4
          },
          end: {
            line: 197,
            column: 5
          }
        },
        loc: {
          start: {
            line: 197,
            column: 114
          },
          end: {
            line: 200,
            column: 5
          }
        },
        line: 197
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 203,
            column: 14
          },
          end: {
            line: 203,
            column: 15
          }
        },
        loc: {
          start: {
            line: 203,
            column: 39
          },
          end: {
            line: 203,
            column: 101
          }
        },
        line: 203
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 32,
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
        line: 30
      },
      "1": {
        loc: {
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 39,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 39,
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
        line: 37
      },
      "2": {
        loc: {
          start: {
            line: 44,
            column: 21
          },
          end: {
            line: 44,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 21
          },
          end: {
            line: 44,
            column: 27
          }
        }, {
          start: {
            line: 44,
            column: 31
          },
          end: {
            line: 44,
            column: 33
          }
        }],
        line: 44
      },
      "3": {
        loc: {
          start: {
            line: 45,
            column: 35
          },
          end: {
            line: 45,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 45,
            column: 35
          },
          end: {
            line: 45,
            column: 53
          }
        }, {
          start: {
            line: 45,
            column: 57
          },
          end: {
            line: 45,
            column: 59
          }
        }],
        line: 45
      },
      "4": {
        loc: {
          start: {
            line: 50,
            column: 27
          },
          end: {
            line: 50,
            column: 68
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 50,
            column: 66
          },
          end: {
            line: 50,
            column: 68
          }
        }],
        line: 50
      },
      "5": {
        loc: {
          start: {
            line: 53,
            column: 13
          },
          end: {
            line: 53,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 53,
            column: 13
          },
          end: {
            line: 53,
            column: 32
          }
        }, {
          start: {
            line: 53,
            column: 36
          },
          end: {
            line: 53,
            column: 38
          }
        }],
        line: 53
      },
      "6": {
        loc: {
          start: {
            line: 80,
            column: 8
          },
          end: {
            line: 85,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 8
          },
          end: {
            line: 85,
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
        line: 80
      },
      "7": {
        loc: {
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 107,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 107,
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
        line: 89
      },
      "8": {
        loc: {
          start: {
            line: 100,
            column: 14
          },
          end: {
            line: 100,
            column: 76
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 100,
            column: 14
          },
          end: {
            line: 100,
            column: 76
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
        line: 100
      },
      "9": {
        loc: {
          start: {
            line: 102,
            column: 14
          },
          end: {
            line: 102,
            column: 75
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 102,
            column: 14
          },
          end: {
            line: 102,
            column: 75
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
        line: 102
      },
      "10": {
        loc: {
          start: {
            line: 109,
            column: 24
          },
          end: {
            line: 109,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 109,
            column: 24
          },
          end: {
            line: 109,
            column: 46
          }
        }, {
          start: {
            line: 109,
            column: 50
          },
          end: {
            line: 109,
            column: 71
          }
        }],
        line: 109
      },
      "11": {
        loc: {
          start: {
            line: 110,
            column: 8
          },
          end: {
            line: 112,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 110,
            column: 8
          },
          end: {
            line: 112,
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
        line: 110
      },
      "12": {
        loc: {
          start: {
            line: 126,
            column: 8
          },
          end: {
            line: 149,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 126,
            column: 8
          },
          end: {
            line: 149,
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
        line: 126
      },
      "13": {
        loc: {
          start: {
            line: 135,
            column: 16
          },
          end: {
            line: 137,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 135,
            column: 16
          },
          end: {
            line: 137,
            column: 17
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
      "14": {
        loc: {
          start: {
            line: 142,
            column: 16
          },
          end: {
            line: 144,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 16
          },
          end: {
            line: 144,
            column: 17
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
      "15": {
        loc: {
          start: {
            line: 203,
            column: 39
          },
          end: {
            line: 203,
            column: 101
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 203,
            column: 39
          },
          end: {
            line: 203,
            column: 61
          }
        }, {
          start: {
            line: 203,
            column: 65
          },
          end: {
            line: 203,
            column: 101
          }
        }],
        line: 203
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
      "82": 0
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
      "29": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f2fe5f35da3830595f4ccba85e49d85112653e72"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23bkmukuo4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_23bkmukuo4();
class InterceptorManager {
  handlers = (cov_23bkmukuo4().s[0]++, []);
  use(fulfilled, rejected) {
    cov_23bkmukuo4().f[0]++;
    cov_23bkmukuo4().s[1]++;
    this.handlers.push({
      fulfilled,
      rejected
    });
    cov_23bkmukuo4().s[2]++;
    return this.handlers.length - 1;
  }
  eject(id) {
    cov_23bkmukuo4().f[1]++;
    cov_23bkmukuo4().s[3]++;
    if (this.handlers[id]) {
      cov_23bkmukuo4().b[0][0]++;
      cov_23bkmukuo4().s[4]++;
      this.handlers[id] = null;
    } else {
      cov_23bkmukuo4().b[0][1]++;
    }
  }
  forEach(fn) {
    cov_23bkmukuo4().f[2]++;
    cov_23bkmukuo4().s[5]++;
    this.handlers.forEach(h => {
      cov_23bkmukuo4().f[3]++;
      cov_23bkmukuo4().s[6]++;
      if (h !== null) {
        cov_23bkmukuo4().b[1][0]++;
        cov_23bkmukuo4().s[7]++;
        fn(h);
      } else {
        cov_23bkmukuo4().b[1][1]++;
      }
    });
  }
}
function getFormConfig(config) {
  cov_23bkmukuo4().f[4]++;
  const formConfig = (cov_23bkmukuo4().s[8]++, (cov_23bkmukuo4().b[2][0]++, config) || (cov_23bkmukuo4().b[2][1]++, {}));
  cov_23bkmukuo4().s[9]++;
  formConfig.headers = new Headers((cov_23bkmukuo4().b[3][0]++, formConfig.headers) || (cov_23bkmukuo4().b[3][1]++, {}));
  cov_23bkmukuo4().s[10]++;
  formConfig.headers.set('Content-Type', 'application/x-www-form-urlencoded');
  cov_23bkmukuo4().s[11]++;
  return formConfig;
}
function createFetchClient(fetchConfig = (cov_23bkmukuo4().b[4][0]++, {})) {
  cov_23bkmukuo4().f[5]++;
  const defaults = (cov_23bkmukuo4().s[12]++, {
    ...fetchConfig,
    headers: (cov_23bkmukuo4().b[5][0]++, fetchConfig.headers) || (cov_23bkmukuo4().b[5][1]++, {})
  });
  const instance = (cov_23bkmukuo4().s[13]++, _feaxios.default.create(defaults));
  const requestInterceptors = (cov_23bkmukuo4().s[14]++, new InterceptorManager());
  const responseInterceptors = (cov_23bkmukuo4().s[15]++, new InterceptorManager());
  const httpClient = (cov_23bkmukuo4().s[16]++, {
    interceptors: {
      request: requestInterceptors,
      response: responseInterceptors
    },
    defaults: {
      ...defaults,
      adapter: config => {
        cov_23bkmukuo4().f[6]++;
        cov_23bkmukuo4().s[17]++;
        return instance.request(config);
      }
    },
    create(config) {
      cov_23bkmukuo4().f[7]++;
      cov_23bkmukuo4().s[18]++;
      return createFetchClient({
        ...this.defaults,
        ...config
      });
    },
    makeRequest(config) {
      cov_23bkmukuo4().f[8]++;
      cov_23bkmukuo4().s[19]++;
      return new Promise((resolve, reject) => {
        cov_23bkmukuo4().f[9]++;
        const abortController = (cov_23bkmukuo4().s[20]++, new AbortController());
        cov_23bkmukuo4().s[21]++;
        config.signal = abortController.signal;
        cov_23bkmukuo4().s[22]++;
        if (config.cancelToken) {
          cov_23bkmukuo4().b[6][0]++;
          cov_23bkmukuo4().s[23]++;
          config.cancelToken.promise.then(() => {
            cov_23bkmukuo4().f[10]++;
            cov_23bkmukuo4().s[24]++;
            abortController.abort();
            cov_23bkmukuo4().s[25]++;
            reject(new Error('Request canceled'));
          });
        } else {
          cov_23bkmukuo4().b[6][1]++;
        }

        // Apply request interceptors
        let modifiedConfig = (cov_23bkmukuo4().s[26]++, config);
        cov_23bkmukuo4().s[27]++;
        if (requestInterceptors.handlers.length > 0) {
          cov_23bkmukuo4().b[7][0]++;
          const chain = (cov_23bkmukuo4().s[28]++, requestInterceptors.handlers.filter(interceptor => {
            cov_23bkmukuo4().f[11]++;
            cov_23bkmukuo4().s[29]++;
            return interceptor !== null;
          }).flatMap(interceptor => {
            cov_23bkmukuo4().f[12]++;
            cov_23bkmukuo4().s[30]++;
            return [interceptor.fulfilled, interceptor.rejected];
          }));
          cov_23bkmukuo4().s[31]++;
          for (let i = (cov_23bkmukuo4().s[32]++, 0), len = (cov_23bkmukuo4().s[33]++, chain.length); i < len; i += 2) {
            const onFulfilled = (cov_23bkmukuo4().s[34]++, chain[i]);
            const onRejected = (cov_23bkmukuo4().s[35]++, chain[i + 1]);
            cov_23bkmukuo4().s[36]++;
            try {
              cov_23bkmukuo4().s[37]++;
              if (onFulfilled) {
                cov_23bkmukuo4().b[8][0]++;
                cov_23bkmukuo4().s[38]++;
                modifiedConfig = onFulfilled(modifiedConfig);
              } else {
                cov_23bkmukuo4().b[8][1]++;
              }
            } catch (error) {
              cov_23bkmukuo4().s[39]++;
              if (onRejected) {
                cov_23bkmukuo4().b[9][0]++;
                cov_23bkmukuo4().s[40]++;
                onRejected?.(error);
              } else {
                cov_23bkmukuo4().b[9][1]++;
              }
              cov_23bkmukuo4().s[41]++;
              reject(error);
              cov_23bkmukuo4().s[42]++;
              return;
            }
          }
        } else {
          cov_23bkmukuo4().b[7][1]++;
        }
        const adapter = (cov_23bkmukuo4().s[43]++, (cov_23bkmukuo4().b[10][0]++, modifiedConfig.adapter) || (cov_23bkmukuo4().b[10][1]++, this.defaults.adapter));
        cov_23bkmukuo4().s[44]++;
        if (!adapter) {
          cov_23bkmukuo4().b[11][0]++;
          cov_23bkmukuo4().s[45]++;
          throw new Error('No adapter available');
        } else {
          cov_23bkmukuo4().b[11][1]++;
        }
        let responsePromise = (cov_23bkmukuo4().s[46]++, adapter(modifiedConfig).then(axiosResponse => {
          cov_23bkmukuo4().f[13]++;
          // Transform AxiosResponse to HttpClientResponse
          const httpClientResponse = (cov_23bkmukuo4().s[47]++, {
            data: axiosResponse.data,
            headers: axiosResponse.headers,
            // You might want to transform headers more carefully
            config: axiosResponse.config,
            status: axiosResponse.status,
            statusText: axiosResponse.statusText
          });
          cov_23bkmukuo4().s[48]++;
          return httpClientResponse;
        }));

        // Apply response interceptors
        cov_23bkmukuo4().s[49]++;
        if (responseInterceptors.handlers.length > 0) {
          cov_23bkmukuo4().b[12][0]++;
          const chain = (cov_23bkmukuo4().s[50]++, responseInterceptors.handlers.filter(interceptor => {
            cov_23bkmukuo4().f[14]++;
            cov_23bkmukuo4().s[51]++;
            return interceptor !== null;
          }).flatMap(interceptor => {
            cov_23bkmukuo4().f[15]++;
            cov_23bkmukuo4().s[52]++;
            return [interceptor.fulfilled, interceptor.rejected];
          }));
          cov_23bkmukuo4().s[53]++;
          for (let i = (cov_23bkmukuo4().s[54]++, 0), len = (cov_23bkmukuo4().s[55]++, chain.length); i < len; i += 2) {
            cov_23bkmukuo4().s[56]++;
            responsePromise = responsePromise.then(response => {
              cov_23bkmukuo4().f[16]++;
              const fulfilledInterceptor = (cov_23bkmukuo4().s[57]++, chain[i]);
              cov_23bkmukuo4().s[58]++;
              if (typeof fulfilledInterceptor === 'function') {
                cov_23bkmukuo4().b[13][0]++;
                cov_23bkmukuo4().s[59]++;
                return fulfilledInterceptor(response);
              } else {
                cov_23bkmukuo4().b[13][1]++;
              }
              cov_23bkmukuo4().s[60]++;
              return response;
            }, error => {
              cov_23bkmukuo4().f[17]++;
              const rejectedInterceptor = (cov_23bkmukuo4().s[61]++, chain[i + 1]);
              cov_23bkmukuo4().s[62]++;
              if (typeof rejectedInterceptor === 'function') {
                cov_23bkmukuo4().b[14][0]++;
                cov_23bkmukuo4().s[63]++;
                return rejectedInterceptor(error);
              } else {
                cov_23bkmukuo4().b[14][1]++;
              }
              cov_23bkmukuo4().s[64]++;
              throw error;
            }).then(interceptedResponse => {
              cov_23bkmukuo4().f[18]++;
              cov_23bkmukuo4().s[65]++;
              return interceptedResponse;
            });
          }
        } else {
          cov_23bkmukuo4().b[12][1]++;
        }

        // Resolve or reject the final promise
        cov_23bkmukuo4().s[66]++;
        responsePromise.then(resolve).catch(reject);
      });
    },
    get(url, config) {
      cov_23bkmukuo4().f[19]++;
      cov_23bkmukuo4().s[67]++;
      return this.makeRequest({
        ...this.defaults,
        ...config,
        url,
        method: 'get'
      });
    },
    delete(url, config) {
      cov_23bkmukuo4().f[20]++;
      cov_23bkmukuo4().s[68]++;
      return this.makeRequest({
        ...this.defaults,
        ...config,
        url,
        method: 'delete'
      });
    },
    head(url, config) {
      cov_23bkmukuo4().f[21]++;
      cov_23bkmukuo4().s[69]++;
      return this.makeRequest({
        ...this.defaults,
        ...config,
        url,
        method: 'head'
      });
    },
    options(url, config) {
      cov_23bkmukuo4().f[22]++;
      cov_23bkmukuo4().s[70]++;
      return this.makeRequest({
        ...this.defaults,
        ...config,
        url,
        method: 'options'
      });
    },
    post(url, data, config) {
      cov_23bkmukuo4().f[23]++;
      cov_23bkmukuo4().s[71]++;
      return this.makeRequest({
        ...this.defaults,
        ...config,
        url,
        method: 'post',
        data
      });
    },
    put(url, data, config) {
      cov_23bkmukuo4().f[24]++;
      cov_23bkmukuo4().s[72]++;
      return this.makeRequest({
        ...this.defaults,
        ...config,
        url,
        method: 'put',
        data
      });
    },
    patch(url, data, config) {
      cov_23bkmukuo4().f[25]++;
      cov_23bkmukuo4().s[73]++;
      return this.makeRequest({
        ...this.defaults,
        ...config,
        url,
        method: 'patch',
        data
      });
    },
    postForm(url, data, config) {
      cov_23bkmukuo4().f[26]++;
      const formConfig = (cov_23bkmukuo4().s[74]++, getFormConfig(config));
      cov_23bkmukuo4().s[75]++;
      return this.makeRequest({
        ...this.defaults,
        ...formConfig,
        url,
        method: 'post',
        data
      });
    },
    putForm(url, data, config) {
      cov_23bkmukuo4().f[27]++;
      const formConfig = (cov_23bkmukuo4().s[76]++, getFormConfig(config));
      cov_23bkmukuo4().s[77]++;
      return this.makeRequest({
        ...this.defaults,
        ...formConfig,
        url,
        method: 'put',
        data
      });
    },
    patchForm(url, data, config) {
      cov_23bkmukuo4().f[28]++;
      const formConfig = (cov_23bkmukuo4().s[78]++, getFormConfig(config));
      cov_23bkmukuo4().s[79]++;
      return this.makeRequest({
        ...this.defaults,
        ...formConfig,
        url,
        method: 'patch',
        data
      });
    },
    CancelToken: _types.CancelToken,
    isCancel: value => {
      cov_23bkmukuo4().f[29]++;
      cov_23bkmukuo4().s[80]++;
      return (cov_23bkmukuo4().b[15][0]++, value instanceof Error) && (cov_23bkmukuo4().b[15][1]++, value.message === 'Request canceled');
    }
  });
  cov_23bkmukuo4().s[81]++;
  return httpClient;
}
const fetchClient = exports.fetchClient = (cov_23bkmukuo4().s[82]++, createFetchClient());