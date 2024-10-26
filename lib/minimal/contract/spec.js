"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spec = void 0;
var _stellarBase = require("@stellar/stellar-base");
var _rust_result = require("./rust_result");
function cov_1a6lv2gk28() {
  var path = "/mnt/g/stellar-sdk/src/contract/spec.ts";
  var hash = "52faf3e6ffec1d56fcd3821ce0dcbca0fc719838";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/contract/spec.ts",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 22
        },
        end: {
          line: 18,
          column: 42
        }
      },
      "1": {
        start: {
          line: 19,
          column: 16
        },
        end: {
          line: 19,
          column: 27
        }
      },
      "2": {
        start: {
          line: 20,
          column: 23
        },
        end: {
          line: 20,
          column: 25
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "4": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 22,
          column: 41
        }
      },
      "5": {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 23,
          column: 39
        }
      },
      "6": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 29,
          column: 7
        }
      },
      "7": {
        start: {
          line: 31,
          column: 19
        },
        end: {
          line: 31,
          column: 28
        }
      },
      "8": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "9": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 34
        }
      },
      "10": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 35,
          column: 13
        }
      },
      "11": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
          column: 47
        }
      },
      "12": {
        start: {
          line: 43,
          column: 20
        },
        end: {
          line: 43,
          column: 43
        }
      },
      "13": {
        start: {
          line: 44,
          column: 16
        },
        end: {
          line: 44,
          column: 73
        }
      },
      "14": {
        start: {
          line: 44,
          column: 54
        },
        end: {
          line: 44,
          column: 72
        }
      },
      "15": {
        start: {
          line: 45,
          column: 2
        },
        end: {
          line: 47,
          column: 3
        }
      },
      "16": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 50
        }
      },
      "17": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 18
        }
      },
      "18": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 65,
          column: 4
        }
      },
      "19": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 64,
          column: 5
        }
      },
      "20": {
        start: {
          line: 55,
          column: 22
        },
        end: {
          line: 55,
          column: 39
        }
      },
      "21": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 56,
          column: 48
        }
      },
      "22": {
        start: {
          line: 59,
          column: 25
        },
        end: {
          line: 59,
          column: 41
        }
      },
      "23": {
        start: {
          line: 60,
          column: 8
        },
        end: {
          line: 60,
          column: 51
        }
      },
      "24": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 63,
          column: 21
        }
      },
      "25": {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 96,
          column: 3
        }
      },
      "26": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 38
        }
      },
      "27": {
        start: {
          line: 73,
          column: 6
        },
        end: {
          line: 73,
          column: 38
        }
      },
      "28": {
        start: {
          line: 75,
          column: 19
        },
        end: {
          line: 75,
          column: 52
        }
      },
      "29": {
        start: {
          line: 76,
          column: 6
        },
        end: {
          line: 76,
          column: 54
        }
      },
      "30": {
        start: {
          line: 79,
          column: 6
        },
        end: {
          line: 79,
          column: 51
        }
      },
      "31": {
        start: {
          line: 81,
          column: 6
        },
        end: {
          line: 81,
          column: 51
        }
      },
      "32": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 83,
          column: 52
        }
      },
      "33": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 85,
          column: 52
        }
      },
      "34": {
        start: {
          line: 87,
          column: 6
        },
        end: {
          line: 87,
          column: 52
        }
      },
      "35": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 89,
          column: 52
        }
      },
      "36": {
        start: {
          line: 92,
          column: 6
        },
        end: {
          line: 92,
          column: 60
        }
      },
      "37": {
        start: {
          line: 95,
          column: 6
        },
        end: {
          line: 95,
          column: 80
        }
      },
      "38": {
        start: {
          line: 99,
          column: 71
        },
        end: {
          line: 164,
          column: 1
        }
      },
      "39": {
        start: {
          line: 173,
          column: 12
        },
        end: {
          line: 173,
          column: 28
        }
      },
      "40": {
        start: {
          line: 174,
          column: 16
        },
        end: {
          line: 174,
          column: 23
        }
      },
      "41": {
        start: {
          line: 176,
          column: 2
        },
        end: {
          line: 297,
          column: 3
        }
      },
      "42": {
        start: {
          line: 178,
          column: 6
        },
        end: {
          line: 178,
          column: 18
        }
      },
      "43": {
        start: {
          line: 179,
          column: 6
        },
        end: {
          line: 179,
          column: 12
        }
      },
      "44": {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 182,
          column: 33
        }
      },
      "45": {
        start: {
          line: 185,
          column: 6
        },
        end: {
          line: 185,
          column: 30
        }
      },
      "46": {
        start: {
          line: 188,
          column: 6
        },
        end: {
          line: 188,
          column: 20
        }
      },
      "47": {
        start: {
          line: 189,
          column: 6
        },
        end: {
          line: 189,
          column: 12
        }
      },
      "48": {
        start: {
          line: 192,
          column: 6
        },
        end: {
          line: 192,
          column: 18
        }
      },
      "49": {
        start: {
          line: 193,
          column: 6
        },
        end: {
          line: 193,
          column: 12
        }
      },
      "50": {
        start: {
          line: 196,
          column: 6
        },
        end: {
          line: 196,
          column: 18
        }
      },
      "51": {
        start: {
          line: 197,
          column: 6
        },
        end: {
          line: 197,
          column: 12
        }
      },
      "52": {
        start: {
          line: 200,
          column: 6
        },
        end: {
          line: 200,
          column: 18
        }
      },
      "53": {
        start: {
          line: 201,
          column: 6
        },
        end: {
          line: 201,
          column: 12
        }
      },
      "54": {
        start: {
          line: 204,
          column: 6
        },
        end: {
          line: 204,
          column: 18
        }
      },
      "55": {
        start: {
          line: 205,
          column: 6
        },
        end: {
          line: 205,
          column: 12
        }
      },
      "56": {
        start: {
          line: 208,
          column: 6
        },
        end: {
          line: 208,
          column: 54
        }
      },
      "57": {
        start: {
          line: 209,
          column: 6
        },
        end: {
          line: 209,
          column: 24
        }
      },
      "58": {
        start: {
          line: 210,
          column: 6
        },
        end: {
          line: 210,
          column: 12
        }
      },
      "59": {
        start: {
          line: 213,
          column: 6
        },
        end: {
          line: 213,
          column: 48
        }
      },
      "60": {
        start: {
          line: 214,
          column: 6
        },
        end: {
          line: 214,
          column: 23
        }
      },
      "61": {
        start: {
          line: 215,
          column: 6
        },
        end: {
          line: 215,
          column: 12
        }
      },
      "62": {
        start: {
          line: 218,
          column: 6
        },
        end: {
          line: 218,
          column: 19
        }
      },
      "63": {
        start: {
          line: 219,
          column: 6
        },
        end: {
          line: 219,
          column: 12
        }
      },
      "64": {
        start: {
          line: 222,
          column: 6
        },
        end: {
          line: 222,
          column: 19
        }
      },
      "65": {
        start: {
          line: 223,
          column: 6
        },
        end: {
          line: 223,
          column: 12
        }
      },
      "66": {
        start: {
          line: 226,
          column: 6
        },
        end: {
          line: 226,
          column: 19
        }
      },
      "67": {
        start: {
          line: 227,
          column: 6
        },
        end: {
          line: 227,
          column: 12
        }
      },
      "68": {
        start: {
          line: 230,
          column: 6
        },
        end: {
          line: 230,
          column: 19
        }
      },
      "69": {
        start: {
          line: 231,
          column: 6
        },
        end: {
          line: 231,
          column: 12
        }
      },
      "70": {
        start: {
          line: 234,
          column: 6
        },
        end: {
          line: 234,
          column: 22
        }
      },
      "71": {
        start: {
          line: 235,
          column: 6
        },
        end: {
          line: 235,
          column: 12
        }
      },
      "72": {
        start: {
          line: 238,
          column: 6
        },
        end: {
          line: 238,
          column: 23
        }
      },
      "73": {
        start: {
          line: 239,
          column: 6
        },
        end: {
          line: 239,
          column: 12
        }
      },
      "74": {
        start: {
          line: 242,
          column: 6
        },
        end: {
          line: 242,
          column: 23
        }
      },
      "75": {
        start: {
          line: 243,
          column: 6
        },
        end: {
          line: 243,
          column: 12
        }
      },
      "76": {
        start: {
          line: 246,
          column: 6
        },
        end: {
          line: 246,
          column: 22
        }
      },
      "77": {
        start: {
          line: 247,
          column: 6
        },
        end: {
          line: 247,
          column: 12
        }
      },
      "78": {
        start: {
          line: 250,
          column: 18
        },
        end: {
          line: 250,
          column: 34
        }
      },
      "79": {
        start: {
          line: 251,
          column: 6
        },
        end: {
          line: 251,
          column: 38
        }
      },
      "80": {
        start: {
          line: 255,
          column: 6
        },
        end: {
          line: 255,
          column: 12
        }
      },
      "81": {
        start: {
          line: 258,
          column: 18
        },
        end: {
          line: 258,
          column: 31
        }
      },
      "82": {
        start: {
          line: 259,
          column: 24
        },
        end: {
          line: 259,
          column: 50
        }
      },
      "83": {
        start: {
          line: 260,
          column: 6
        },
        end: {
          line: 263,
          column: 8
        }
      },
      "84": {
        start: {
          line: 266,
          column: 18
        },
        end: {
          line: 266,
          column: 31
        }
      },
      "85": {
        start: {
          line: 267,
          column: 20
        },
        end: {
          line: 267,
          column: 70
        }
      },
      "86": {
        start: {
          line: 268,
          column: 6
        },
        end: {
          line: 276,
          column: 8
        }
      },
      "87": {
        start: {
          line: 279,
          column: 20
        },
        end: {
          line: 279,
          column: 35
        }
      },
      "88": {
        start: {
          line: 280,
          column: 23
        },
        end: {
          line: 280,
          column: 48
        }
      },
      "89": {
        start: {
          line: 281,
          column: 23
        },
        end: {
          line: 281,
          column: 31
        }
      },
      "90": {
        start: {
          line: 282,
          column: 20
        },
        end: {
          line: 282,
          column: 51
        }
      },
      "91": {
        start: {
          line: 283,
          column: 6
        },
        end: {
          line: 283,
          column: 58
        }
      },
      "92": {
        start: {
          line: 286,
          column: 18
        },
        end: {
          line: 286,
          column: 34
        }
      },
      "93": {
        start: {
          line: 287,
          column: 6
        },
        end: {
          line: 290,
          column: 8
        }
      },
      "94": {
        start: {
          line: 293,
          column: 18
        },
        end: {
          line: 293,
          column: 31
        }
      },
      "95": {
        start: {
          line: 294,
          column: 6
        },
        end: {
          line: 294,
          column: 34
        }
      },
      "96": {
        start: {
          line: 295,
          column: 6
        },
        end: {
          line: 295,
          column: 12
        }
      },
      "97": {
        start: {
          line: 298,
          column: 2
        },
        end: {
          line: 298,
          column: 42
        }
      },
      "98": {
        start: {
          line: 305,
          column: 2
        },
        end: {
          line: 305,
          column: 76
        }
      },
      "99": {
        start: {
          line: 311,
          column: 26
        },
        end: {
          line: 311,
          column: 28
        }
      },
      "100": {
        start: {
          line: 312,
          column: 29
        },
        end: {
          line: 312,
          column: 31
        }
      },
      "101": {
        start: {
          line: 313,
          column: 2
        },
        end: {
          line: 320,
          column: 5
        }
      },
      "102": {
        start: {
          line: 314,
          column: 18
        },
        end: {
          line: 314,
          column: 28
        }
      },
      "103": {
        start: {
          line: 315,
          column: 17
        },
        end: {
          line: 315,
          column: 38
        }
      },
      "104": {
        start: {
          line: 316,
          column: 4
        },
        end: {
          line: 316,
          column: 38
        }
      },
      "105": {
        start: {
          line: 317,
          column: 4
        },
        end: {
          line: 319,
          column: 5
        }
      },
      "106": {
        start: {
          line: 318,
          column: 6
        },
        end: {
          line: 318,
          column: 26
        }
      },
      "107": {
        start: {
          line: 321,
          column: 59
        },
        end: {
          line: 321,
          column: 73
        }
      },
      "108": {
        start: {
          line: 322,
          column: 2
        },
        end: {
          line: 324,
          column: 3
        }
      },
      "109": {
        start: {
          line: 323,
          column: 4
        },
        end: {
          line: 323,
          column: 28
        }
      },
      "110": {
        start: {
          line: 325,
          column: 2
        },
        end: {
          line: 325,
          column: 13
        }
      },
      "111": {
        start: {
          line: 329,
          column: 17
        },
        end: {
          line: 329,
          column: 29
        }
      },
      "112": {
        start: {
          line: 330,
          column: 2
        },
        end: {
          line: 343,
          column: 3
        }
      },
      "113": {
        start: {
          line: 331,
          column: 4
        },
        end: {
          line: 335,
          column: 5
        }
      },
      "114": {
        start: {
          line: 332,
          column: 6
        },
        end: {
          line: 334,
          column: 8
        }
      },
      "115": {
        start: {
          line: 336,
          column: 18
        },
        end: {
          line: 336,
          column: 65
        }
      },
      "116": {
        start: {
          line: 336,
          column: 39
        },
        end: {
          line: 336,
          column: 64
        }
      },
      "117": {
        start: {
          line: 337,
          column: 4
        },
        end: {
          line: 342,
          column: 6
        }
      },
      "118": {
        start: {
          line: 344,
          column: 22
        },
        end: {
          line: 344,
          column: 42
        }
      },
      "119": {
        start: {
          line: 345,
          column: 40
        },
        end: {
          line: 345,
          column: 63
        }
      },
      "120": {
        start: {
          line: 346,
          column: 2
        },
        end: {
          line: 346,
          column: 42
        }
      },
      "121": {
        start: {
          line: 347,
          column: 2
        },
        end: {
          line: 352,
          column: 4
        }
      },
      "122": {
        start: {
          line: 356,
          column: 40
        },
        end: {
          line: 356,
          column: 70
        }
      },
      "123": {
        start: {
          line: 357,
          column: 20
        },
        end: {
          line: 361,
          column: 3
        }
      },
      "124": {
        start: {
          line: 362,
          column: 2
        },
        end: {
          line: 364,
          column: 3
        }
      },
      "125": {
        start: {
          line: 363,
          column: 4
        },
        end: {
          line: 363,
          column: 29
        }
      },
      "126": {
        start: {
          line: 365,
          column: 38
        },
        end: {
          line: 369,
          column: 3
        }
      },
      "127": {
        start: {
          line: 370,
          column: 18
        },
        end: {
          line: 370,
          column: 32
        }
      },
      "128": {
        start: {
          line: 372,
          column: 4
        },
        end: {
          line: 374,
          column: 51
        }
      },
      "129": {
        start: {
          line: 375,
          column: 22
        },
        end: {
          line: 375,
          column: 43
        }
      },
      "130": {
        start: {
          line: 376,
          column: 2
        },
        end: {
          line: 378,
          column: 3
        }
      },
      "131": {
        start: {
          line: 377,
          column: 4
        },
        end: {
          line: 377,
          column: 36
        }
      },
      "132": {
        start: {
          line: 379,
          column: 2
        },
        end: {
          line: 379,
          column: 37
        }
      },
      "133": {
        start: {
          line: 380,
          column: 2
        },
        end: {
          line: 380,
          column: 38
        }
      },
      "134": {
        start: {
          line: 381,
          column: 2
        },
        end: {
          line: 384,
          column: 4
        }
      },
      "135": {
        start: {
          line: 389,
          column: 22
        },
        end: {
          line: 389,
          column: 42
        }
      },
      "136": {
        start: {
          line: 390,
          column: 16
        },
        end: {
          line: 390,
          column: 27
        }
      },
      "137": {
        start: {
          line: 391,
          column: 23
        },
        end: {
          line: 391,
          column: 25
        }
      },
      "138": {
        start: {
          line: 392,
          column: 2
        },
        end: {
          line: 426,
          column: 5
        }
      },
      "139": {
        start: {
          line: 393,
          column: 4
        },
        end: {
          line: 425,
          column: 5
        }
      },
      "140": {
        start: {
          line: 395,
          column: 18
        },
        end: {
          line: 395,
          column: 34
        }
      },
      "141": {
        start: {
          line: 396,
          column: 22
        },
        end: {
          line: 396,
          column: 41
        }
      },
      "142": {
        start: {
          line: 397,
          column: 8
        },
        end: {
          line: 405,
          column: 11
        }
      },
      "143": {
        start: {
          line: 406,
          column: 8
        },
        end: {
          line: 406,
          column: 14
        }
      },
      "144": {
        start: {
          line: 409,
          column: 18
        },
        end: {
          line: 409,
          column: 35
        }
      },
      "145": {
        start: {
          line: 410,
          column: 22
        },
        end: {
          line: 410,
          column: 41
        }
      },
      "146": {
        start: {
          line: 411,
          column: 8
        },
        end: {
          line: 423,
          column: 11
        }
      },
      "147": {
        start: {
          line: 428,
          column: 19
        },
        end: {
          line: 430,
          column: 3
        }
      },
      "148": {
        start: {
          line: 431,
          column: 2
        },
        end: {
          line: 433,
          column: 3
        }
      },
      "149": {
        start: {
          line: 432,
          column: 4
        },
        end: {
          line: 432,
          column: 34
        }
      },
      "150": {
        start: {
          line: 434,
          column: 2
        },
        end: {
          line: 434,
          column: 13
        }
      },
      "151": {
        start: {
          line: 472,
          column: 38
        },
        end: {
          line: 472,
          column: 40
        }
      },
      "152": {
        start: {
          line: 475,
          column: 4
        },
        end: {
          line: 477,
          column: 5
        }
      },
      "153": {
        start: {
          line: 476,
          column: 6
        },
        end: {
          line: 476,
          column: 68
        }
      },
      "154": {
        start: {
          line: 478,
          column: 18
        },
        end: {
          line: 478,
          column: 28
        }
      },
      "155": {
        start: {
          line: 479,
          column: 4
        },
        end: {
          line: 485,
          column: 5
        }
      },
      "156": {
        start: {
          line: 480,
          column: 6
        },
        end: {
          line: 482,
          column: 8
        }
      },
      "157": {
        start: {
          line: 481,
          column: 8
        },
        end: {
          line: 481,
          column: 44
        }
      },
      "158": {
        start: {
          line: 484,
          column: 6
        },
        end: {
          line: 484,
          column: 50
        }
      },
      "159": {
        start: {
          line: 493,
          column: 4
        },
        end: {
          line: 499,
          column: 42
        }
      },
      "160": {
        start: {
          line: 496,
          column: 10
        },
        end: {
          line: 497,
          column: 59
        }
      },
      "161": {
        start: {
          line: 499,
          column: 22
        },
        end: {
          line: 499,
          column: 40
        }
      },
      "162": {
        start: {
          line: 511,
          column: 18
        },
        end: {
          line: 511,
          column: 38
        }
      },
      "163": {
        start: {
          line: 512,
          column: 4
        },
        end: {
          line: 516,
          column: 5
        }
      },
      "164": {
        start: {
          line: 515,
          column: 6
        },
        end: {
          line: 515,
          column: 51
        }
      },
      "165": {
        start: {
          line: 517,
          column: 4
        },
        end: {
          line: 517,
          column: 30
        }
      },
      "166": {
        start: {
          line: 537,
          column: 15
        },
        end: {
          line: 537,
          column: 33
        }
      },
      "167": {
        start: {
          line: 538,
          column: 4
        },
        end: {
          line: 540,
          column: 78
        }
      },
      "168": {
        start: {
          line: 540,
          column: 22
        },
        end: {
          line: 540,
          column: 76
        }
      },
      "169": {
        start: {
          line: 558,
          column: 6
        },
        end: {
          line: 560,
          column: 23
        }
      },
      "170": {
        start: {
          line: 561,
          column: 17
        },
        end: {
          line: 561,
          column: 35
        }
      },
      "171": {
        start: {
          line: 562,
          column: 20
        },
        end: {
          line: 562,
          column: 34
        }
      },
      "172": {
        start: {
          line: 563,
          column: 4
        },
        end: {
          line: 569,
          column: 5
        }
      },
      "173": {
        start: {
          line: 564,
          column: 19
        },
        end: {
          line: 564,
          column: 31
        }
      },
      "174": {
        start: {
          line: 565,
          column: 6
        },
        end: {
          line: 567,
          column: 7
        }
      },
      "175": {
        start: {
          line: 566,
          column: 8
        },
        end: {
          line: 566,
          column: 59
        }
      },
      "176": {
        start: {
          line: 568,
          column: 6
        },
        end: {
          line: 568,
          column: 18
        }
      },
      "177": {
        start: {
          line: 570,
          column: 4
        },
        end: {
          line: 572,
          column: 5
        }
      },
      "178": {
        start: {
          line: 571,
          column: 6
        },
        end: {
          line: 571,
          column: 56
        }
      },
      "179": {
        start: {
          line: 573,
          column: 19
        },
        end: {
          line: 573,
          column: 29
        }
      },
      "180": {
        start: {
          line: 574,
          column: 4
        },
        end: {
          line: 576,
          column: 5
        }
      },
      "181": {
        start: {
          line: 575,
          column: 6
        },
        end: {
          line: 575,
          column: 71
        }
      },
      "182": {
        start: {
          line: 577,
          column: 4
        },
        end: {
          line: 577,
          column: 43
        }
      },
      "183": {
        start: {
          line: 589,
          column: 18
        },
        end: {
          line: 591,
          column: 5
        }
      },
      "184": {
        start: {
          line: 590,
          column: 13
        },
        end: {
          line: 590,
          column: 49
        }
      },
      "185": {
        start: {
          line: 592,
          column: 4
        },
        end: {
          line: 594,
          column: 5
        }
      },
      "186": {
        start: {
          line: 593,
          column: 6
        },
        end: {
          line: 593,
          column: 48
        }
      },
      "187": {
        start: {
          line: 595,
          column: 4
        },
        end: {
          line: 595,
          column: 17
        }
      },
      "188": {
        start: {
          line: 609,
          column: 30
        },
        end: {
          line: 609,
          column: 41
        }
      },
      "189": {
        start: {
          line: 610,
          column: 18
        },
        end: {
          line: 610,
          column: 25
        }
      },
      "190": {
        start: {
          line: 611,
          column: 4
        },
        end: {
          line: 614,
          column: 5
        }
      },
      "191": {
        start: {
          line: 612,
          column: 18
        },
        end: {
          line: 612,
          column: 26
        }
      },
      "192": {
        start: {
          line: 613,
          column: 6
        },
        end: {
          line: 613,
          column: 58
        }
      },
      "193": {
        start: {
          line: 615,
          column: 4
        },
        end: {
          line: 621,
          column: 5
        }
      },
      "194": {
        start: {
          line: 616,
          column: 18
        },
        end: {
          line: 616,
          column: 29
        }
      },
      "195": {
        start: {
          line: 617,
          column: 6
        },
        end: {
          line: 619,
          column: 7
        }
      },
      "196": {
        start: {
          line: 618,
          column: 8
        },
        end: {
          line: 618,
          column: 35
        }
      },
      "197": {
        start: {
          line: 620,
          column: 6
        },
        end: {
          line: 620,
          column: 54
        }
      },
      "198": {
        start: {
          line: 622,
          column: 4
        },
        end: {
          line: 799,
          column: 5
        }
      },
      "199": {
        start: {
          line: 624,
          column: 8
        },
        end: {
          line: 633,
          column: 9
        }
      },
      "200": {
        start: {
          line: 625,
          column: 10
        },
        end: {
          line: 632,
          column: 11
        }
      },
      "201": {
        start: {
          line: 627,
          column: 14
        },
        end: {
          line: 627,
          column: 41
        }
      },
      "202": {
        start: {
          line: 629,
          column: 14
        },
        end: {
          line: 631,
          column: 16
        }
      },
      "203": {
        start: {
          line: 635,
          column: 8
        },
        end: {
          line: 637,
          column: 9
        }
      },
      "204": {
        start: {
          line: 636,
          column: 10
        },
        end: {
          line: 636,
          column: 21
        }
      },
      "205": {
        start: {
          line: 639,
          column: 8
        },
        end: {
          line: 646,
          column: 9
        }
      },
      "206": {
        start: {
          line: 640,
          column: 10
        },
        end: {
          line: 644,
          column: 11
        }
      },
      "207": {
        start: {
          line: 641,
          column: 12
        },
        end: {
          line: 643,
          column: 14
        }
      },
      "208": {
        start: {
          line: 645,
          column: 10
        },
        end: {
          line: 645,
          column: 31
        }
      },
      "209": {
        start: {
          line: 648,
          column: 8
        },
        end: {
          line: 655,
          column: 9
        }
      },
      "210": {
        start: {
          line: 649,
          column: 10
        },
        end: {
          line: 653,
          column: 11
        }
      },
      "211": {
        start: {
          line: 650,
          column: 12
        },
        end: {
          line: 652,
          column: 14
        }
      },
      "212": {
        start: {
          line: 654,
          column: 10
        },
        end: {
          line: 654,
          column: 41
        }
      },
      "213": {
        start: {
          line: 657,
          column: 8
        },
        end: {
          line: 678,
          column: 9
        }
      },
      "214": {
        start: {
          line: 658,
          column: 23
        },
        end: {
          line: 658,
          column: 43
        }
      },
      "215": {
        start: {
          line: 659,
          column: 10
        },
        end: {
          line: 677,
          column: 11
        }
      },
      "216": {
        start: {
          line: 661,
          column: 29
        },
        end: {
          line: 661,
          column: 40
        }
      },
      "217": {
        start: {
          line: 662,
          column: 14
        },
        end: {
          line: 666,
          column: 15
        }
      },
      "218": {
        start: {
          line: 663,
          column: 16
        },
        end: {
          line: 665,
          column: 18
        }
      },
      "219": {
        start: {
          line: 668,
          column: 14
        },
        end: {
          line: 668,
          column: 46
        }
      },
      "220": {
        start: {
          line: 672,
          column: 14
        },
        end: {
          line: 672,
          column: 46
        }
      },
      "221": {
        start: {
          line: 674,
          column: 14
        },
        end: {
          line: 676,
          column: 16
        }
      },
      "222": {
        start: {
          line: 679,
          column: 8
        },
        end: {
          line: 718,
          column: 9
        }
      },
      "223": {
        start: {
          line: 680,
          column: 10
        },
        end: {
          line: 717,
          column: 11
        }
      },
      "224": {
        start: {
          line: 682,
          column: 26
        },
        end: {
          line: 682,
          column: 34
        }
      },
      "225": {
        start: {
          line: 683,
          column: 34
        },
        end: {
          line: 683,
          column: 51
        }
      },
      "226": {
        start: {
          line: 684,
          column: 14
        },
        end: {
          line: 686,
          column: 16
        }
      },
      "227": {
        start: {
          line: 685,
          column: 31
        },
        end: {
          line: 685,
          column: 65
        }
      },
      "228": {
        start: {
          line: 689,
          column: 26
        },
        end: {
          line: 689,
          column: 36
        }
      },
      "229": {
        start: {
          line: 690,
          column: 31
        },
        end: {
          line: 690,
          column: 47
        }
      },
      "230": {
        start: {
          line: 691,
          column: 14
        },
        end: {
          line: 695,
          column: 15
        }
      },
      "231": {
        start: {
          line: 692,
          column: 16
        },
        end: {
          line: 694,
          column: 18
        }
      },
      "232": {
        start: {
          line: 696,
          column: 14
        },
        end: {
          line: 698,
          column: 16
        }
      },
      "233": {
        start: {
          line: 697,
          column: 34
        },
        end: {
          line: 697,
          column: 68
        }
      },
      "234": {
        start: {
          line: 701,
          column: 26
        },
        end: {
          line: 701,
          column: 34
        }
      },
      "235": {
        start: {
          line: 702,
          column: 30
        },
        end: {
          line: 702,
          column: 43
        }
      },
      "236": {
        start: {
          line: 703,
          column: 32
        },
        end: {
          line: 703,
          column: 47
        }
      },
      "237": {
        start: {
          line: 704,
          column: 14
        },
        end: {
          line: 710,
          column: 16
        }
      },
      "238": {
        start: {
          line: 706,
          column: 30
        },
        end: {
          line: 706,
          column: 67
        }
      },
      "239": {
        start: {
          line: 707,
          column: 33
        },
        end: {
          line: 707,
          column: 72
        }
      },
      "240": {
        start: {
          line: 708,
          column: 18
        },
        end: {
          line: 708,
          column: 66
        }
      },
      "241": {
        start: {
          line: 714,
          column: 14
        },
        end: {
          line: 716,
          column: 16
        }
      },
      "242": {
        start: {
          line: 719,
          column: 8
        },
        end: {
          line: 736,
          column: 9
        }
      },
      "243": {
        start: {
          line: 720,
          column: 10
        },
        end: {
          line: 722,
          column: 11
        }
      },
      "244": {
        start: {
          line: 721,
          column: 12
        },
        end: {
          line: 721,
          column: 77
        }
      },
      "245": {
        start: {
          line: 723,
          column: 24
        },
        end: {
          line: 723,
          column: 32
        }
      },
      "246": {
        start: {
          line: 724,
          column: 22
        },
        end: {
          line: 724,
          column: 42
        }
      },
      "247": {
        start: {
          line: 725,
          column: 44
        },
        end: {
          line: 725,
          column: 46
        }
      },
      "248": {
        start: {
          line: 726,
          column: 25
        },
        end: {
          line: 726,
          column: 38
        }
      },
      "249": {
        start: {
          line: 727,
          column: 20
        },
        end: {
          line: 727,
          column: 33
        }
      },
      "250": {
        start: {
          line: 728,
          column: 10
        },
        end: {
          line: 734,
          column: 11
        }
      },
      "251": {
        start: {
          line: 729,
          column: 27
        },
        end: {
          line: 729,
          column: 36
        }
      },
      "252": {
        start: {
          line: 730,
          column: 24
        },
        end: {
          line: 730,
          column: 62
        }
      },
      "253": {
        start: {
          line: 731,
          column: 27
        },
        end: {
          line: 731,
          column: 67
        }
      },
      "254": {
        start: {
          line: 732,
          column: 12
        },
        end: {
          line: 732,
          column: 67
        }
      },
      "255": {
        start: {
          line: 733,
          column: 12
        },
        end: {
          line: 733,
          column: 32
        }
      },
      "256": {
        start: {
          line: 735,
          column: 10
        },
        end: {
          line: 735,
          column: 43
        }
      },
      "257": {
        start: {
          line: 738,
          column: 8
        },
        end: {
          line: 743,
          column: 9
        }
      },
      "258": {
        start: {
          line: 739,
          column: 10
        },
        end: {
          line: 742,
          column: 12
        }
      },
      "259": {
        start: {
          line: 745,
          column: 8
        },
        end: {
          line: 747,
          column: 10
        }
      },
      "260": {
        start: {
          line: 752,
          column: 8
        },
        end: {
          line: 768,
          column: 9
        }
      },
      "261": {
        start: {
          line: 754,
          column: 12
        },
        end: {
          line: 754,
          column: 51
        }
      },
      "262": {
        start: {
          line: 756,
          column: 12
        },
        end: {
          line: 756,
          column: 51
        }
      },
      "263": {
        start: {
          line: 763,
          column: 28
        },
        end: {
          line: 763,
          column: 75
        }
      },
      "264": {
        start: {
          line: 764,
          column: 12
        },
        end: {
          line: 764,
          column: 69
        }
      },
      "265": {
        start: {
          line: 767,
          column: 12
        },
        end: {
          line: 767,
          column: 78
        }
      },
      "266": {
        start: {
          line: 771,
          column: 8
        },
        end: {
          line: 771,
          column: 37
        }
      },
      "267": {
        start: {
          line: 774,
          column: 8
        },
        end: {
          line: 776,
          column: 9
        }
      },
      "268": {
        start: {
          line: 775,
          column: 10
        },
        end: {
          line: 775,
          column: 73
        }
      },
      "269": {
        start: {
          line: 777,
          column: 8
        },
        end: {
          line: 777,
          column: 38
        }
      },
      "270": {
        start: {
          line: 780,
          column: 8
        },
        end: {
          line: 782,
          column: 9
        }
      },
      "271": {
        start: {
          line: 781,
          column: 10
        },
        end: {
          line: 781,
          column: 37
        }
      },
      "272": {
        start: {
          line: 783,
          column: 8
        },
        end: {
          line: 791,
          column: 9
        }
      },
      "273": {
        start: {
          line: 786,
          column: 12
        },
        end: {
          line: 786,
          column: 39
        }
      },
      "274": {
        start: {
          line: 788,
          column: 12
        },
        end: {
          line: 790,
          column: 14
        }
      },
      "275": {
        start: {
          line: 795,
          column: 8
        },
        end: {
          line: 795,
          column: 45
        }
      },
      "276": {
        start: {
          line: 798,
          column: 8
        },
        end: {
          line: 798,
          column: 79
        }
      },
      "277": {
        start: {
          line: 803,
          column: 18
        },
        end: {
          line: 803,
          column: 38
        }
      },
      "278": {
        start: {
          line: 804,
          column: 4
        },
        end: {
          line: 818,
          column: 5
        }
      },
      "279": {
        start: {
          line: 806,
          column: 8
        },
        end: {
          line: 810,
          column: 9
        }
      },
      "280": {
        start: {
          line: 807,
          column: 10
        },
        end: {
          line: 809,
          column: 12
        }
      },
      "281": {
        start: {
          line: 811,
          column: 8
        },
        end: {
          line: 811,
          column: 67
        }
      },
      "282": {
        start: {
          line: 813,
          column: 8
        },
        end: {
          line: 813,
          column: 61
        }
      },
      "283": {
        start: {
          line: 815,
          column: 8
        },
        end: {
          line: 815,
          column: 59
        }
      },
      "284": {
        start: {
          line: 817,
          column: 8
        },
        end: {
          line: 817,
          column: 55
        }
      },
      "285": {
        start: {
          line: 825,
          column: 22
        },
        end: {
          line: 825,
          column: 29
        }
      },
      "286": {
        start: {
          line: 826,
          column: 22
        },
        end: {
          line: 829,
          column: 6
        }
      },
      "287": {
        start: {
          line: 827,
          column: 20
        },
        end: {
          line: 827,
          column: 51
        }
      },
      "288": {
        start: {
          line: 828,
          column: 6
        },
        end: {
          line: 828,
          column: 33
        }
      },
      "289": {
        start: {
          line: 830,
          column: 4
        },
        end: {
          line: 832,
          column: 5
        }
      },
      "290": {
        start: {
          line: 831,
          column: 6
        },
        end: {
          line: 831,
          column: 75
        }
      },
      "291": {
        start: {
          line: 833,
          column: 16
        },
        end: {
          line: 833,
          column: 46
        }
      },
      "292": {
        start: {
          line: 834,
          column: 4
        },
        end: {
          line: 856,
          column: 5
        }
      },
      "293": {
        start: {
          line: 836,
          column: 8
        },
        end: {
          line: 836,
          column: 39
        }
      },
      "294": {
        start: {
          line: 839,
          column: 22
        },
        end: {
          line: 839,
          column: 50
        }
      },
      "295": {
        start: {
          line: 840,
          column: 8
        },
        end: {
          line: 851,
          column: 9
        }
      },
      "296": {
        start: {
          line: 841,
          column: 10
        },
        end: {
          line: 845,
          column: 11
        }
      },
      "297": {
        start: {
          line: 842,
          column: 12
        },
        end: {
          line: 844,
          column: 14
        }
      },
      "298": {
        start: {
          line: 846,
          column: 25
        },
        end: {
          line: 848,
          column: 11
        }
      },
      "299": {
        start: {
          line: 847,
          column: 12
        },
        end: {
          line: 847,
          column: 43
        }
      },
      "300": {
        start: {
          line: 849,
          column: 10
        },
        end: {
          line: 849,
          column: 30
        }
      },
      "301": {
        start: {
          line: 850,
          column: 10
        },
        end: {
          line: 850,
          column: 42
        }
      },
      "302": {
        start: {
          line: 852,
          column: 8
        },
        end: {
          line: 852,
          column: 79
        }
      },
      "303": {
        start: {
          line: 855,
          column: 8
        },
        end: {
          line: 855,
          column: 71
        }
      },
      "304": {
        start: {
          line: 860,
          column: 19
        },
        end: {
          line: 860,
          column: 34
        }
      },
      "305": {
        start: {
          line: 861,
          column: 4
        },
        end: {
          line: 870,
          column: 5
        }
      },
      "306": {
        start: {
          line: 862,
          column: 6
        },
        end: {
          line: 866,
          column: 7
        }
      },
      "307": {
        start: {
          line: 863,
          column: 8
        },
        end: {
          line: 865,
          column: 10
        }
      },
      "308": {
        start: {
          line: 867,
          column: 6
        },
        end: {
          line: 869,
          column: 8
        }
      },
      "309": {
        start: {
          line: 868,
          column: 29
        },
        end: {
          line: 868,
          column: 73
        }
      },
      "310": {
        start: {
          line: 871,
          column: 4
        },
        end: {
          line: 879,
          column: 6
        }
      },
      "311": {
        start: {
          line: 873,
          column: 21
        },
        end: {
          line: 873,
          column: 44
        }
      },
      "312": {
        start: {
          line: 874,
          column: 8
        },
        end: {
          line: 877,
          column: 11
        }
      },
      "313": {
        start: {
          line: 883,
          column: 4
        },
        end: {
          line: 885,
          column: 5
        }
      },
      "314": {
        start: {
          line: 883,
          column: 38
        },
        end: {
          line: 883,
          column: 59
        }
      },
      "315": {
        start: {
          line: 884,
          column: 6
        },
        end: {
          line: 884,
          column: 35
        }
      },
      "316": {
        start: {
          line: 886,
          column: 4
        },
        end: {
          line: 886,
          column: 66
        }
      },
      "317": {
        start: {
          line: 899,
          column: 4
        },
        end: {
          line: 899,
          column: 76
        }
      },
      "318": {
        start: {
          line: 912,
          column: 14
        },
        end: {
          line: 912,
          column: 30
        }
      },
      "319": {
        start: {
          line: 913,
          column: 18
        },
        end: {
          line: 913,
          column: 25
        }
      },
      "320": {
        start: {
          line: 914,
          column: 4
        },
        end: {
          line: 916,
          column: 5
        }
      },
      "321": {
        start: {
          line: 915,
          column: 6
        },
        end: {
          line: 915,
          column: 55
        }
      },
      "322": {
        start: {
          line: 921,
          column: 4
        },
        end: {
          line: 1012,
          column: 5
        }
      },
      "323": {
        start: {
          line: 923,
          column: 8
        },
        end: {
          line: 923,
          column: 30
        }
      },
      "324": {
        start: {
          line: 935,
          column: 8
        },
        end: {
          line: 935,
          column: 39
        }
      },
      "325": {
        start: {
          line: 938,
          column: 8
        },
        end: {
          line: 943,
          column: 9
        }
      },
      "326": {
        start: {
          line: 939,
          column: 22
        },
        end: {
          line: 939,
          column: 35
        }
      },
      "327": {
        start: {
          line: 940,
          column: 10
        },
        end: {
          line: 942,
          column: 17
        }
      },
      "328": {
        start: {
          line: 941,
          column: 12
        },
        end: {
          line: 941,
          column: 54
        }
      },
      "329": {
        start: {
          line: 943,
          column: 10
        },
        end: {
          line: 949,
          column: 9
        }
      },
      "330": {
        start: {
          line: 944,
          column: 24
        },
        end: {
          line: 944,
          column: 39
        }
      },
      "331": {
        start: {
          line: 945,
          column: 27
        },
        end: {
          line: 945,
          column: 45
        }
      },
      "332": {
        start: {
          line: 946,
          column: 10
        },
        end: {
          line: 948,
          column: 17
        }
      },
      "333": {
        start: {
          line: 947,
          column: 12
        },
        end: {
          line: 947,
          column: 48
        }
      },
      "334": {
        start: {
          line: 950,
          column: 8
        },
        end: {
          line: 950,
          column: 74
        }
      },
      "335": {
        start: {
          line: 954,
          column: 8
        },
        end: {
          line: 954,
          column: 54
        }
      },
      "336": {
        start: {
          line: 957,
          column: 20
        },
        end: {
          line: 957,
          column: 35
        }
      },
      "337": {
        start: {
          line: 958,
          column: 8
        },
        end: {
          line: 967,
          column: 9
        }
      },
      "338": {
        start: {
          line: 959,
          column: 24
        },
        end: {
          line: 959,
          column: 37
        }
      },
      "339": {
        start: {
          line: 960,
          column: 26
        },
        end: {
          line: 960,
          column: 41
        }
      },
      "340": {
        start: {
          line: 961,
          column: 28
        },
        end: {
          line: 961,
          column: 45
        }
      },
      "341": {
        start: {
          line: 962,
          column: 22
        },
        end: {
          line: 965,
          column: 17
        }
      },
      "342": {
        start: {
          line: 962,
          column: 41
        },
        end: {
          line: 965,
          column: 11
        }
      },
      "343": {
        start: {
          line: 966,
          column: 10
        },
        end: {
          line: 966,
          column: 21
        }
      },
      "344": {
        start: {
          line: 968,
          column: 8
        },
        end: {
          line: 974,
          column: 10
        }
      },
      "345": {
        start: {
          line: 982,
          column: 8
        },
        end: {
          line: 982,
          column: 32
        }
      },
      "346": {
        start: {
          line: 986,
          column: 8
        },
        end: {
          line: 994,
          column: 9
        }
      },
      "347": {
        start: {
          line: 990,
          column: 10
        },
        end: {
          line: 993,
          column: 12
        }
      },
      "348": {
        start: {
          line: 995,
          column: 8
        },
        end: {
          line: 995,
          column: 44
        }
      },
      "349": {
        start: {
          line: 1001,
          column: 8
        },
        end: {
          line: 1001,
          column: 63
        }
      },
      "350": {
        start: {
          line: 1005,
          column: 8
        },
        end: {
          line: 1011,
          column: 10
        }
      },
      "351": {
        start: {
          line: 1017,
          column: 18
        },
        end: {
          line: 1017,
          column: 55
        }
      },
      "352": {
        start: {
          line: 1018,
          column: 4
        },
        end: {
          line: 1029,
          column: 5
        }
      },
      "353": {
        start: {
          line: 1020,
          column: 8
        },
        end: {
          line: 1020,
          column: 38
        }
      },
      "354": {
        start: {
          line: 1022,
          column: 8
        },
        end: {
          line: 1022,
          column: 61
        }
      },
      "355": {
        start: {
          line: 1024,
          column: 8
        },
        end: {
          line: 1024,
          column: 59
        }
      },
      "356": {
        start: {
          line: 1026,
          column: 8
        },
        end: {
          line: 1028,
          column: 10
        }
      },
      "357": {
        start: {
          line: 1033,
          column: 16
        },
        end: {
          line: 1033,
          column: 25
        }
      },
      "358": {
        start: {
          line: 1034,
          column: 4
        },
        end: {
          line: 1036,
          column: 5
        }
      },
      "359": {
        start: {
          line: 1035,
          column: 6
        },
        end: {
          line: 1035,
          column: 70
        }
      },
      "360": {
        start: {
          line: 1037,
          column: 4
        },
        end: {
          line: 1041,
          column: 5
        }
      },
      "361": {
        start: {
          line: 1038,
          column: 6
        },
        end: {
          line: 1040,
          column: 8
        }
      },
      "362": {
        start: {
          line: 1042,
          column: 17
        },
        end: {
          line: 1042,
          column: 40
        }
      },
      "363": {
        start: {
          line: 1043,
          column: 4
        },
        end: {
          line: 1045,
          column: 5
        }
      },
      "364": {
        start: {
          line: 1044,
          column: 6
        },
        end: {
          line: 1044,
          column: 50
        }
      },
      "365": {
        start: {
          line: 1046,
          column: 18
        },
        end: {
          line: 1046,
          column: 50
        }
      },
      "366": {
        start: {
          line: 1047,
          column: 4
        },
        end: {
          line: 1051,
          column: 5
        }
      },
      "367": {
        start: {
          line: 1048,
          column: 6
        },
        end: {
          line: 1050,
          column: 8
        }
      },
      "368": {
        start: {
          line: 1052,
          column: 28
        },
        end: {
          line: 1052,
          column: 41
        }
      },
      "369": {
        start: {
          line: 1053,
          column: 4
        },
        end: {
          line: 1061,
          column: 5
        }
      },
      "370": {
        start: {
          line: 1057,
          column: 20
        },
        end: {
          line: 1057,
          column: 37
        }
      },
      "371": {
        start: {
          line: 1058,
          column: 17
        },
        end: {
          line: 1058,
          column: 29
        }
      },
      "372": {
        start: {
          line: 1059,
          column: 21
        },
        end: {
          line: 1059,
          column: 73
        }
      },
      "373": {
        start: {
          line: 1059,
          column: 38
        },
        end: {
          line: 1059,
          column: 72
        }
      },
      "374": {
        start: {
          line: 1060,
          column: 6
        },
        end: {
          line: 1060,
          column: 26
        }
      },
      "375": {
        start: {
          line: 1062,
          column: 4
        },
        end: {
          line: 1062,
          column: 15
        }
      },
      "376": {
        start: {
          line: 1066,
          column: 21
        },
        end: {
          line: 1066,
          column: 23
        }
      },
      "377": {
        start: {
          line: 1067,
          column: 19
        },
        end: {
          line: 1067,
          column: 31
        }
      },
      "378": {
        start: {
          line: 1068,
          column: 4
        },
        end: {
          line: 1073,
          column: 5
        }
      },
      "379": {
        start: {
          line: 1069,
          column: 16
        },
        end: {
          line: 1071,
          column: 72
        }
      },
      "380": {
        start: {
          line: 1071,
          column: 28
        },
        end: {
          line: 1071,
          column: 71
        }
      },
      "381": {
        start: {
          line: 1072,
          column: 6
        },
        end: {
          line: 1072,
          column: 15
        }
      },
      "382": {
        start: {
          line: 1074,
          column: 4
        },
        end: {
          line: 1080,
          column: 7
        }
      },
      "383": {
        start: {
          line: 1075,
          column: 20
        },
        end: {
          line: 1075,
          column: 29
        }
      },
      "384": {
        start: {
          line: 1076,
          column: 6
        },
        end: {
          line: 1079,
          column: 8
        }
      },
      "385": {
        start: {
          line: 1081,
          column: 4
        },
        end: {
          line: 1081,
          column: 15
        }
      },
      "386": {
        start: {
          line: 1085,
          column: 4
        },
        end: {
          line: 1087,
          column: 5
        }
      },
      "387": {
        start: {
          line: 1086,
          column: 6
        },
        end: {
          line: 1086,
          column: 52
        }
      },
      "388": {
        start: {
          line: 1088,
          column: 16
        },
        end: {
          line: 1088,
          column: 25
        }
      },
      "389": {
        start: {
          line: 1089,
          column: 4
        },
        end: {
          line: 1089,
          column: 15
        }
      },
      "390": {
        start: {
          line: 1099,
          column: 4
        },
        end: {
          line: 1105,
          column: 79
        }
      },
      "391": {
        start: {
          line: 1102,
          column: 10
        },
        end: {
          line: 1103,
          column: 63
        }
      },
      "392": {
        start: {
          line: 1105,
          column: 26
        },
        end: {
          line: 1105,
          column: 77
        }
      },
      "393": {
        start: {
          line: 1119,
          column: 66
        },
        end: {
          line: 1119,
          column: 68
        }
      },
      "394": {
        start: {
          line: 1121,
          column: 4
        },
        end: {
          line: 1150,
          column: 7
        }
      },
      "395": {
        start: {
          line: 1122,
          column: 6
        },
        end: {
          line: 1149,
          column: 7
        }
      },
      "396": {
        start: {
          line: 1124,
          column: 22
        },
        end: {
          line: 1124,
          column: 39
        }
      },
      "397": {
        start: {
          line: 1125,
          column: 10
        },
        end: {
          line: 1125,
          column: 69
        }
      },
      "398": {
        start: {
          line: 1126,
          column: 10
        },
        end: {
          line: 1126,
          column: 16
        }
      },
      "399": {
        start: {
          line: 1129,
          column: 22
        },
        end: {
          line: 1129,
          column: 41
        }
      },
      "400": {
        start: {
          line: 1130,
          column: 10
        },
        end: {
          line: 1130,
          column: 71
        }
      },
      "401": {
        start: {
          line: 1131,
          column: 10
        },
        end: {
          line: 1131,
          column: 16
        }
      },
      "402": {
        start: {
          line: 1134,
          column: 22
        },
        end: {
          line: 1134,
          column: 40
        }
      },
      "403": {
        start: {
          line: 1135,
          column: 10
        },
        end: {
          line: 1135,
          column: 70
        }
      },
      "404": {
        start: {
          line: 1136,
          column: 10
        },
        end: {
          line: 1136,
          column: 16
        }
      },
      "405": {
        start: {
          line: 1139,
          column: 21
        },
        end: {
          line: 1139,
          column: 39
        }
      },
      "406": {
        start: {
          line: 1140,
          column: 25
        },
        end: {
          line: 1140,
          column: 45
        }
      },
      "407": {
        start: {
          line: 1141,
          column: 28
        },
        end: {
          line: 1141,
          column: 52
        }
      },
      "408": {
        start: {
          line: 1143,
          column: 10
        },
        end: {
          line: 1143,
          column: 38
        }
      },
      "409": {
        start: {
          line: 1144,
          column: 10
        },
        end: {
          line: 1144,
          column: 16
        }
      },
      "410": {
        start: {
          line: 1152,
          column: 29
        },
        end: {
          line: 1155,
          column: 5
        }
      },
      "411": {
        start: {
          line: 1156,
          column: 4
        },
        end: {
          line: 1158,
          column: 5
        }
      },
      "412": {
        start: {
          line: 1157,
          column: 6
        },
        end: {
          line: 1157,
          column: 45
        }
      },
      "413": {
        start: {
          line: 1159,
          column: 4
        },
        end: {
          line: 1159,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "enumToJsonSchema",
        decl: {
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 17,
            column: 25
          }
        },
        loc: {
          start: {
            line: 17,
            column: 57
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 16
          },
          end: {
            line: 21,
            column: 17
          }
        },
        loc: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 21
      },
      "2": {
        name: "isNumeric",
        decl: {
          start: {
            line: 38,
            column: 9
          },
          end: {
            line: 38,
            column: 18
          }
        },
        loc: {
          start: {
            line: 38,
            column: 54
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 38
      },
      "3": {
        name: "readObj",
        decl: {
          start: {
            line: 42,
            column: 9
          },
          end: {
            line: 42,
            column: 16
          }
        },
        loc: {
          start: {
            line: 42,
            column: 70
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 42
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 44,
            column: 42
          },
          end: {
            line: 44,
            column: 43
          }
        },
        loc: {
          start: {
            line: 44,
            column: 54
          },
          end: {
            line: 44,
            column: 72
          }
        },
        line: 44
      },
      "5": {
        name: "findCase",
        decl: {
          start: {
            line: 51,
            column: 9
          },
          end: {
            line: 51,
            column: 17
          }
        },
        loc: {
          start: {
            line: 51,
            column: 32
          },
          end: {
            line: 66,
            column: 1
          }
        },
        line: 51
      },
      "6": {
        name: "matches",
        decl: {
          start: {
            line: 52,
            column: 18
          },
          end: {
            line: 52,
            column: 25
          }
        },
        loc: {
          start: {
            line: 52,
            column: 59
          },
          end: {
            line: 65,
            column: 3
          }
        },
        line: 52
      },
      "7": {
        name: "stringToScVal",
        decl: {
          start: {
            line: 68,
            column: 9
          },
          end: {
            line: 68,
            column: 22
          }
        },
        loc: {
          start: {
            line: 68,
            column: 67
          },
          end: {
            line: 97,
            column: 1
          }
        },
        line: 68
      },
      "8": {
        name: "typeRef",
        decl: {
          start: {
            line: 172,
            column: 9
          },
          end: {
            line: 172,
            column: 16
          }
        },
        loc: {
          start: {
            line: 172,
            column: 58
          },
          end: {
            line: 299,
            column: 1
          }
        },
        line: 172
      },
      "9": {
        name: "isRequired",
        decl: {
          start: {
            line: 304,
            column: 9
          },
          end: {
            line: 304,
            column: 19
          }
        },
        loc: {
          start: {
            line: 304,
            column: 57
          },
          end: {
            line: 306,
            column: 1
          }
        },
        line: 304
      },
      "10": {
        name: "argsAndRequired",
        decl: {
          start: {
            line: 308,
            column: 9
          },
          end: {
            line: 308,
            column: 24
          }
        },
        loc: {
          start: {
            line: 310,
            column: 47
          },
          end: {
            line: 326,
            column: 1
          }
        },
        line: 310
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 313,
            column: 16
          },
          end: {
            line: 313,
            column: 17
          }
        },
        loc: {
          start: {
            line: 313,
            column: 25
          },
          end: {
            line: 320,
            column: 3
          }
        },
        line: 313
      },
      "12": {
        name: "structToJsonSchema",
        decl: {
          start: {
            line: 328,
            column: 9
          },
          end: {
            line: 328,
            column: 27
          }
        },
        loc: {
          start: {
            line: 328,
            column: 64
          },
          end: {
            line: 353,
            column: 1
          }
        },
        line: 328
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 336,
            column: 29
          },
          end: {
            line: 336,
            column: 30
          }
        },
        loc: {
          start: {
            line: 336,
            column: 39
          },
          end: {
            line: 336,
            column: 64
          }
        },
        line: 336
      },
      "14": {
        name: "functionToJsonSchema",
        decl: {
          start: {
            line: 355,
            column: 9
          },
          end: {
            line: 355,
            column: 29
          }
        },
        loc: {
          start: {
            line: 355,
            column: 64
          },
          end: {
            line: 385,
            column: 1
          }
        },
        line: 355
      },
      "15": {
        name: "unionToJsonSchema",
        decl: {
          start: {
            line: 388,
            column: 9
          },
          end: {
            line: 388,
            column: 26
          }
        },
        loc: {
          start: {
            line: 388,
            column: 59
          },
          end: {
            line: 435,
            column: 1
          }
        },
        line: 388
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 392,
            column: 16
          },
          end: {
            line: 392,
            column: 17
          }
        },
        loc: {
          start: {
            line: 392,
            column: 27
          },
          end: {
            line: 426,
            column: 3
          }
        },
        line: 392
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 474,
            column: 2
          },
          end: {
            line: 474,
            column: 3
          }
        },
        loc: {
          start: {
            line: 474,
            column: 53
          },
          end: {
            line: 486,
            column: 3
          }
        },
        line: 474
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 480,
            column: 47
          },
          end: {
            line: 480,
            column: 48
          }
        },
        loc: {
          start: {
            line: 481,
            column: 8
          },
          end: {
            line: 481,
            column: 44
          }
        },
        line: 481
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 492,
            column: 2
          },
          end: {
            line: 492,
            column: 3
          }
        },
        loc: {
          start: {
            line: 492,
            column: 34
          },
          end: {
            line: 500,
            column: 3
          }
        },
        line: 492
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 495,
            column: 8
          },
          end: {
            line: 495,
            column: 9
          }
        },
        loc: {
          start: {
            line: 496,
            column: 10
          },
          end: {
            line: 497,
            column: 59
          }
        },
        line: 496
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 499,
            column: 11
          },
          end: {
            line: 499,
            column: 12
          }
        },
        loc: {
          start: {
            line: 499,
            column: 22
          },
          end: {
            line: 499,
            column: 40
          }
        },
        line: 499
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 510,
            column: 2
          },
          end: {
            line: 510,
            column: 3
          }
        },
        loc: {
          start: {
            line: 510,
            column: 46
          },
          end: {
            line: 518,
            column: 3
          }
        },
        line: 510
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 536,
            column: 2
          },
          end: {
            line: 536,
            column: 3
          }
        },
        loc: {
          start: {
            line: 536,
            column: 60
          },
          end: {
            line: 541,
            column: 3
          }
        },
        line: 536
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 540,
            column: 11
          },
          end: {
            line: 540,
            column: 12
          }
        },
        loc: {
          start: {
            line: 540,
            column: 22
          },
          end: {
            line: 540,
            column: 76
          }
        },
        line: 540
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 556,
            column: 2
          },
          end: {
            line: 556,
            column: 3
          }
        },
        loc: {
          start: {
            line: 556,
            column: 72
          },
          end: {
            line: 578,
            column: 3
          }
        },
        line: 556
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 588,
            column: 2
          },
          end: {
            line: 588,
            column: 3
          }
        },
        loc: {
          start: {
            line: 588,
            column: 43
          },
          end: {
            line: 596,
            column: 3
          }
        },
        line: 588
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 590,
            column: 6
          },
          end: {
            line: 590,
            column: 7
          }
        },
        loc: {
          start: {
            line: 590,
            column: 13
          },
          end: {
            line: 590,
            column: 49
          }
        },
        line: 590
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 608,
            column: 2
          },
          end: {
            line: 608,
            column: 3
          }
        },
        loc: {
          start: {
            line: 608,
            column: 60
          },
          end: {
            line: 800,
            column: 3
          }
        },
        line: 608
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 685,
            column: 24
          },
          end: {
            line: 685,
            column: 25
          }
        },
        loc: {
          start: {
            line: 685,
            column: 31
          },
          end: {
            line: 685,
            column: 65
          }
        },
        line: 685
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 697,
            column: 24
          },
          end: {
            line: 697,
            column: 25
          }
        },
        loc: {
          start: {
            line: 697,
            column: 34
          },
          end: {
            line: 697,
            column: 68
          }
        },
        line: 697
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 705,
            column: 24
          },
          end: {
            line: 705,
            column: 25
          }
        },
        loc: {
          start: {
            line: 705,
            column: 35
          },
          end: {
            line: 709,
            column: 17
          }
        },
        line: 705
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 802,
            column: 2
          },
          end: {
            line: 802,
            column: 3
          }
        },
        loc: {
          start: {
            line: 802,
            column: 57
          },
          end: {
            line: 819,
            column: 3
          }
        },
        line: 802
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 821,
            column: 2
          },
          end: {
            line: 821,
            column: 3
          }
        },
        loc: {
          start: {
            line: 824,
            column: 15
          },
          end: {
            line: 857,
            column: 3
          }
        },
        line: 824
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 826,
            column: 42
          },
          end: {
            line: 826,
            column: 43
          }
        },
        loc: {
          start: {
            line: 826,
            column: 53
          },
          end: {
            line: 829,
            column: 5
          }
        },
        line: 826
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 846,
            column: 40
          },
          end: {
            line: 846,
            column: 41
          }
        },
        loc: {
          start: {
            line: 847,
            column: 12
          },
          end: {
            line: 847,
            column: 43
          }
        },
        line: 847
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 859,
            column: 2
          },
          end: {
            line: 859,
            column: 3
          }
        },
        loc: {
          start: {
            line: 859,
            column: 77
          },
          end: {
            line: 880,
            column: 3
          }
        },
        line: 859
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 868,
            column: 19
          },
          end: {
            line: 868,
            column: 20
          }
        },
        loc: {
          start: {
            line: 868,
            column: 29
          },
          end: {
            line: 868,
            column: 73
          }
        },
        line: 868
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 872,
            column: 17
          },
          end: {
            line: 872,
            column: 18
          }
        },
        loc: {
          start: {
            line: 872,
            column: 28
          },
          end: {
            line: 878,
            column: 7
          }
        },
        line: 872
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 882,
            column: 2
          },
          end: {
            line: 882,
            column: 3
          }
        },
        loc: {
          start: {
            line: 882,
            column: 75
          },
          end: {
            line: 887,
            column: 3
          }
        },
        line: 882
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 883,
            column: 27
          },
          end: {
            line: 883,
            column: 28
          }
        },
        loc: {
          start: {
            line: 883,
            column: 38
          },
          end: {
            line: 883,
            column: 59
          }
        },
        line: 883
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 898,
            column: 2
          },
          end: {
            line: 898,
            column: 3
          }
        },
        loc: {
          start: {
            line: 898,
            column: 66
          },
          end: {
            line: 900,
            column: 3
          }
        },
        line: 898
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 911,
            column: 2
          },
          end: {
            line: 911,
            column: 3
          }
        },
        loc: {
          start: {
            line: 911,
            column: 66
          },
          end: {
            line: 1014,
            column: 3
          }
        },
        line: 911
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 940,
            column: 39
          },
          end: {
            line: 940,
            column: 40
          }
        },
        loc: {
          start: {
            line: 941,
            column: 12
          },
          end: {
            line: 941,
            column: 54
          }
        },
        line: 941
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 946,
            column: 39
          },
          end: {
            line: 946,
            column: 40
          }
        },
        loc: {
          start: {
            line: 947,
            column: 12
          },
          end: {
            line: 947,
            column: 48
          }
        },
        line: 947
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 962,
            column: 30
          },
          end: {
            line: 962,
            column: 31
          }
        },
        loc: {
          start: {
            line: 962,
            column: 41
          },
          end: {
            line: 965,
            column: 11
          }
        },
        line: 962
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 1016,
            column: 2
          },
          end: {
            line: 1016,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1016,
            column: 72
          },
          end: {
            line: 1030,
            column: 3
          }
        },
        line: 1016
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 1032,
            column: 2
          },
          end: {
            line: 1032,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1032,
            column: 72
          },
          end: {
            line: 1063,
            column: 3
          }
        },
        line: 1032
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 1059,
            column: 28
          },
          end: {
            line: 1059,
            column: 29
          }
        },
        loc: {
          start: {
            line: 1059,
            column: 38
          },
          end: {
            line: 1059,
            column: 72
          }
        },
        line: 1059
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 1065,
            column: 2
          },
          end: {
            line: 1065,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1065,
            column: 74
          },
          end: {
            line: 1082,
            column: 3
          }
        },
        line: 1065
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 1071,
            column: 14
          },
          end: {
            line: 1071,
            column: 15
          }
        },
        loc: {
          start: {
            line: 1071,
            column: 28
          },
          end: {
            line: 1071,
            column: 71
          }
        },
        line: 1071
      },
      "51": {
        name: "(anonymous_51)",
        decl: {
          start: {
            line: 1074,
            column: 23
          },
          end: {
            line: 1074,
            column: 24
          }
        },
        loc: {
          start: {
            line: 1074,
            column: 37
          },
          end: {
            line: 1080,
            column: 5
          }
        },
        line: 1074
      },
      "52": {
        name: "(anonymous_52)",
        decl: {
          start: {
            line: 1084,
            column: 2
          },
          end: {
            line: 1084,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1084,
            column: 47
          },
          end: {
            line: 1090,
            column: 3
          }
        },
        line: 1084
      },
      "53": {
        name: "(anonymous_53)",
        decl: {
          start: {
            line: 1098,
            column: 2
          },
          end: {
            line: 1098,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1098,
            column: 47
          },
          end: {
            line: 1106,
            column: 3
          }
        },
        line: 1098
      },
      "54": {
        name: "(anonymous_54)",
        decl: {
          start: {
            line: 1101,
            column: 8
          },
          end: {
            line: 1101,
            column: 9
          }
        },
        loc: {
          start: {
            line: 1102,
            column: 10
          },
          end: {
            line: 1103,
            column: 63
          }
        },
        line: 1102
      },
      "55": {
        name: "(anonymous_55)",
        decl: {
          start: {
            line: 1105,
            column: 15
          },
          end: {
            line: 1105,
            column: 16
          }
        },
        loc: {
          start: {
            line: 1105,
            column: 26
          },
          end: {
            line: 1105,
            column: 77
          }
        },
        line: 1105
      },
      "56": {
        name: "(anonymous_56)",
        decl: {
          start: {
            line: 1118,
            column: 2
          },
          end: {
            line: 1118,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1118,
            column: 45
          },
          end: {
            line: 1160,
            column: 3
          }
        },
        line: 1118
      },
      "57": {
        name: "(anonymous_57)",
        decl: {
          start: {
            line: 1121,
            column: 25
          },
          end: {
            line: 1121,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1121,
            column: 34
          },
          end: {
            line: 1150,
            column: 5
          }
        },
        line: 1121
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 34,
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
        line: 32
      },
      "1": {
        loc: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 47,
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
        line: 45
      },
      "2": {
        loc: {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 54,
            column: 6
          },
          end: {
            line: 57,
            column: 7
          }
        }, {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 61,
            column: 7
          }
        }, {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 63,
            column: 21
          }
        }],
        line: 53
      },
      "3": {
        loc: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 96,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 71,
            column: 38
          }
        }, {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 73,
            column: 38
          }
        }, {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 77,
            column: 5
          }
        }, {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 79,
            column: 51
          }
        }, {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 81,
            column: 51
          }
        }, {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 83,
            column: 52
          }
        }, {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 85,
            column: 52
          }
        }, {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 87,
            column: 52
          }
        }, {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 89,
            column: 52
          }
        }, {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 48
          }
        }, {
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 92,
            column: 60
          }
        }, {
          start: {
            line: 94,
            column: 4
          },
          end: {
            line: 95,
            column: 80
          }
        }],
        line: 69
      },
      "4": {
        loc: {
          start: {
            line: 176,
            column: 2
          },
          end: {
            line: 297,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 180,
            column: 5
          }
        }, {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 183,
            column: 5
          }
        }, {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 186,
            column: 5
          }
        }, {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 190,
            column: 5
          }
        }, {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 194,
            column: 5
          }
        }, {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 198,
            column: 5
          }
        }, {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 202,
            column: 5
          }
        }, {
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 206,
            column: 5
          }
        }, {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 211,
            column: 5
          }
        }, {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 216,
            column: 5
          }
        }, {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 220,
            column: 5
          }
        }, {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 224,
            column: 5
          }
        }, {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 228,
            column: 5
          }
        }, {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 232,
            column: 5
          }
        }, {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 236,
            column: 5
          }
        }, {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 240,
            column: 5
          }
        }, {
          start: {
            line: 241,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        }, {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 248,
            column: 5
          }
        }, {
          start: {
            line: 249,
            column: 4
          },
          end: {
            line: 252,
            column: 5
          }
        }, {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 256,
            column: 5
          }
        }, {
          start: {
            line: 257,
            column: 4
          },
          end: {
            line: 264,
            column: 5
          }
        }, {
          start: {
            line: 265,
            column: 4
          },
          end: {
            line: 277,
            column: 5
          }
        }, {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 284,
            column: 5
          }
        }, {
          start: {
            line: 285,
            column: 4
          },
          end: {
            line: 291,
            column: 5
          }
        }, {
          start: {
            line: 292,
            column: 4
          },
          end: {
            line: 296,
            column: 5
          }
        }],
        line: 176
      },
      "5": {
        loc: {
          start: {
            line: 317,
            column: 4
          },
          end: {
            line: 319,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 317,
            column: 4
          },
          end: {
            line: 319,
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
        line: 317
      },
      "6": {
        loc: {
          start: {
            line: 322,
            column: 2
          },
          end: {
            line: 324,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 322,
            column: 2
          },
          end: {
            line: 324,
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
        line: 322
      },
      "7": {
        loc: {
          start: {
            line: 330,
            column: 2
          },
          end: {
            line: 343,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 330,
            column: 2
          },
          end: {
            line: 343,
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
        line: 330
      },
      "8": {
        loc: {
          start: {
            line: 331,
            column: 4
          },
          end: {
            line: 335,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 331,
            column: 4
          },
          end: {
            line: 335,
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
        line: 331
      },
      "9": {
        loc: {
          start: {
            line: 362,
            column: 2
          },
          end: {
            line: 364,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 362,
            column: 2
          },
          end: {
            line: 364,
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
        line: 362
      },
      "10": {
        loc: {
          start: {
            line: 372,
            column: 4
          },
          end: {
            line: 374,
            column: 51
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 373,
            column: 8
          },
          end: {
            line: 373,
            column: 27
          }
        }, {
          start: {
            line: 374,
            column: 8
          },
          end: {
            line: 374,
            column: 51
          }
        }],
        line: 372
      },
      "11": {
        loc: {
          start: {
            line: 376,
            column: 2
          },
          end: {
            line: 378,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 376,
            column: 2
          },
          end: {
            line: 378,
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
        line: 376
      },
      "12": {
        loc: {
          start: {
            line: 393,
            column: 4
          },
          end: {
            line: 425,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 394,
            column: 6
          },
          end: {
            line: 407,
            column: 7
          }
        }, {
          start: {
            line: 408,
            column: 6
          },
          end: {
            line: 424,
            column: 7
          }
        }],
        line: 393
      },
      "13": {
        loc: {
          start: {
            line: 431,
            column: 2
          },
          end: {
            line: 433,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 431,
            column: 2
          },
          end: {
            line: 433,
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
        line: 431
      },
      "14": {
        loc: {
          start: {
            line: 475,
            column: 4
          },
          end: {
            line: 477,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 475,
            column: 4
          },
          end: {
            line: 477,
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
        line: 475
      },
      "15": {
        loc: {
          start: {
            line: 479,
            column: 4
          },
          end: {
            line: 485,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 479,
            column: 4
          },
          end: {
            line: 485,
            column: 5
          }
        }, {
          start: {
            line: 483,
            column: 11
          },
          end: {
            line: 485,
            column: 5
          }
        }],
        line: 479
      },
      "16": {
        loc: {
          start: {
            line: 512,
            column: 4
          },
          end: {
            line: 516,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 512,
            column: 4
          },
          end: {
            line: 516,
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
        line: 512
      },
      "17": {
        loc: {
          start: {
            line: 558,
            column: 6
          },
          end: {
            line: 560,
            column: 23
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 559,
            column: 10
          },
          end: {
            line: 559,
            column: 52
          }
        }, {
          start: {
            line: 560,
            column: 10
          },
          end: {
            line: 560,
            column: 23
          }
        }],
        line: 558
      },
      "18": {
        loc: {
          start: {
            line: 563,
            column: 4
          },
          end: {
            line: 569,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 563,
            column: 4
          },
          end: {
            line: 569,
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
        line: 563
      },
      "19": {
        loc: {
          start: {
            line: 565,
            column: 6
          },
          end: {
            line: 567,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 565,
            column: 6
          },
          end: {
            line: 567,
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
        line: 565
      },
      "20": {
        loc: {
          start: {
            line: 570,
            column: 4
          },
          end: {
            line: 572,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 570,
            column: 4
          },
          end: {
            line: 572,
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
        line: 570
      },
      "21": {
        loc: {
          start: {
            line: 574,
            column: 4
          },
          end: {
            line: 576,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 574,
            column: 4
          },
          end: {
            line: 576,
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
        line: 574
      },
      "22": {
        loc: {
          start: {
            line: 592,
            column: 4
          },
          end: {
            line: 594,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 592,
            column: 4
          },
          end: {
            line: 594,
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
        line: 592
      },
      "23": {
        loc: {
          start: {
            line: 611,
            column: 4
          },
          end: {
            line: 614,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 611,
            column: 4
          },
          end: {
            line: 614,
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
        line: 611
      },
      "24": {
        loc: {
          start: {
            line: 615,
            column: 4
          },
          end: {
            line: 621,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 615,
            column: 4
          },
          end: {
            line: 621,
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
        line: 615
      },
      "25": {
        loc: {
          start: {
            line: 617,
            column: 6
          },
          end: {
            line: 619,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 617,
            column: 6
          },
          end: {
            line: 619,
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
        line: 617
      },
      "26": {
        loc: {
          start: {
            line: 622,
            column: 4
          },
          end: {
            line: 799,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 623,
            column: 6
          },
          end: {
            line: 748,
            column: 7
          }
        }, {
          start: {
            line: 750,
            column: 6
          },
          end: {
            line: 750,
            column: 20
          }
        }, {
          start: {
            line: 751,
            column: 6
          },
          end: {
            line: 769,
            column: 7
          }
        }, {
          start: {
            line: 770,
            column: 6
          },
          end: {
            line: 771,
            column: 37
          }
        }, {
          start: {
            line: 773,
            column: 6
          },
          end: {
            line: 778,
            column: 7
          }
        }, {
          start: {
            line: 779,
            column: 6
          },
          end: {
            line: 792,
            column: 7
          }
        }, {
          start: {
            line: 794,
            column: 6
          },
          end: {
            line: 795,
            column: 45
          }
        }, {
          start: {
            line: 797,
            column: 6
          },
          end: {
            line: 798,
            column: 79
          }
        }],
        line: 622
      },
      "27": {
        loc: {
          start: {
            line: 624,
            column: 8
          },
          end: {
            line: 633,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 624,
            column: 8
          },
          end: {
            line: 633,
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
        line: 624
      },
      "28": {
        loc: {
          start: {
            line: 625,
            column: 10
          },
          end: {
            line: 632,
            column: 11
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 626,
            column: 12
          },
          end: {
            line: 627,
            column: 41
          }
        }, {
          start: {
            line: 628,
            column: 12
          },
          end: {
            line: 631,
            column: 16
          }
        }],
        line: 625
      },
      "29": {
        loc: {
          start: {
            line: 635,
            column: 8
          },
          end: {
            line: 637,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 635,
            column: 8
          },
          end: {
            line: 637,
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
        line: 635
      },
      "30": {
        loc: {
          start: {
            line: 639,
            column: 8
          },
          end: {
            line: 646,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 639,
            column: 8
          },
          end: {
            line: 646,
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
        line: 639
      },
      "31": {
        loc: {
          start: {
            line: 640,
            column: 10
          },
          end: {
            line: 644,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 640,
            column: 10
          },
          end: {
            line: 644,
            column: 11
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
        line: 640
      },
      "32": {
        loc: {
          start: {
            line: 648,
            column: 8
          },
          end: {
            line: 655,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 648,
            column: 8
          },
          end: {
            line: 655,
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
        line: 648
      },
      "33": {
        loc: {
          start: {
            line: 649,
            column: 10
          },
          end: {
            line: 653,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 649,
            column: 10
          },
          end: {
            line: 653,
            column: 11
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
        line: 649
      },
      "34": {
        loc: {
          start: {
            line: 657,
            column: 8
          },
          end: {
            line: 678,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 657,
            column: 8
          },
          end: {
            line: 678,
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
        line: 657
      },
      "35": {
        loc: {
          start: {
            line: 657,
            column: 12
          },
          end: {
            line: 657,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 657,
            column: 12
          },
          end: {
            line: 657,
            column: 37
          }
        }, {
          start: {
            line: 657,
            column: 41
          },
          end: {
            line: 657,
            column: 61
          }
        }],
        line: 657
      },
      "36": {
        loc: {
          start: {
            line: 659,
            column: 10
          },
          end: {
            line: 677,
            column: 11
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 660,
            column: 12
          },
          end: {
            line: 669,
            column: 13
          }
        }, {
          start: {
            line: 670,
            column: 12
          },
          end: {
            line: 672,
            column: 46
          }
        }, {
          start: {
            line: 673,
            column: 12
          },
          end: {
            line: 676,
            column: 16
          }
        }],
        line: 659
      },
      "37": {
        loc: {
          start: {
            line: 662,
            column: 14
          },
          end: {
            line: 666,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 662,
            column: 14
          },
          end: {
            line: 666,
            column: 15
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
        line: 662
      },
      "38": {
        loc: {
          start: {
            line: 679,
            column: 8
          },
          end: {
            line: 718,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 679,
            column: 8
          },
          end: {
            line: 718,
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
        line: 679
      },
      "39": {
        loc: {
          start: {
            line: 680,
            column: 10
          },
          end: {
            line: 717,
            column: 11
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 681,
            column: 12
          },
          end: {
            line: 687,
            column: 13
          }
        }, {
          start: {
            line: 688,
            column: 12
          },
          end: {
            line: 699,
            column: 13
          }
        }, {
          start: {
            line: 700,
            column: 12
          },
          end: {
            line: 711,
            column: 13
          }
        }, {
          start: {
            line: 713,
            column: 12
          },
          end: {
            line: 716,
            column: 16
          }
        }],
        line: 680
      },
      "40": {
        loc: {
          start: {
            line: 691,
            column: 14
          },
          end: {
            line: 695,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 691,
            column: 14
          },
          end: {
            line: 695,
            column: 15
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
        line: 691
      },
      "41": {
        loc: {
          start: {
            line: 719,
            column: 8
          },
          end: {
            line: 736,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 719,
            column: 8
          },
          end: {
            line: 736,
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
        line: 719
      },
      "42": {
        loc: {
          start: {
            line: 720,
            column: 10
          },
          end: {
            line: 722,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 720,
            column: 10
          },
          end: {
            line: 722,
            column: 11
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
        line: 720
      },
      "43": {
        loc: {
          start: {
            line: 738,
            column: 8
          },
          end: {
            line: 743,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 738,
            column: 8
          },
          end: {
            line: 743,
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
        line: 738
      },
      "44": {
        loc: {
          start: {
            line: 738,
            column: 13
          },
          end: {
            line: 738,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 738,
            column: 13
          },
          end: {
            line: 738,
            column: 34
          }
        }, {
          start: {
            line: 738,
            column: 38
          },
          end: {
            line: 738,
            column: 40
          }
        }],
        line: 738
      },
      "45": {
        loc: {
          start: {
            line: 752,
            column: 8
          },
          end: {
            line: 768,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 753,
            column: 10
          },
          end: {
            line: 754,
            column: 51
          }
        }, {
          start: {
            line: 755,
            column: 10
          },
          end: {
            line: 756,
            column: 51
          }
        }, {
          start: {
            line: 757,
            column: 10
          },
          end: {
            line: 757,
            column: 52
          }
        }, {
          start: {
            line: 758,
            column: 10
          },
          end: {
            line: 758,
            column: 52
          }
        }, {
          start: {
            line: 759,
            column: 10
          },
          end: {
            line: 759,
            column: 53
          }
        }, {
          start: {
            line: 760,
            column: 10
          },
          end: {
            line: 760,
            column: 53
          }
        }, {
          start: {
            line: 761,
            column: 10
          },
          end: {
            line: 761,
            column: 53
          }
        }, {
          start: {
            line: 762,
            column: 10
          },
          end: {
            line: 765,
            column: 11
          }
        }, {
          start: {
            line: 766,
            column: 10
          },
          end: {
            line: 767,
            column: 78
          }
        }],
        line: 752
      },
      "46": {
        loc: {
          start: {
            line: 774,
            column: 8
          },
          end: {
            line: 776,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 774,
            column: 8
          },
          end: {
            line: 776,
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
        line: 774
      },
      "47": {
        loc: {
          start: {
            line: 780,
            column: 8
          },
          end: {
            line: 782,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 780,
            column: 8
          },
          end: {
            line: 782,
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
        line: 780
      },
      "48": {
        loc: {
          start: {
            line: 783,
            column: 8
          },
          end: {
            line: 791,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 784,
            column: 10
          },
          end: {
            line: 784,
            column: 53
          }
        }, {
          start: {
            line: 785,
            column: 10
          },
          end: {
            line: 786,
            column: 39
          }
        }, {
          start: {
            line: 787,
            column: 10
          },
          end: {
            line: 790,
            column: 14
          }
        }],
        line: 783
      },
      "49": {
        loc: {
          start: {
            line: 804,
            column: 4
          },
          end: {
            line: 818,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 805,
            column: 6
          },
          end: {
            line: 811,
            column: 67
          }
        }, {
          start: {
            line: 812,
            column: 6
          },
          end: {
            line: 813,
            column: 61
          }
        }, {
          start: {
            line: 814,
            column: 6
          },
          end: {
            line: 815,
            column: 59
          }
        }, {
          start: {
            line: 816,
            column: 6
          },
          end: {
            line: 817,
            column: 55
          }
        }],
        line: 804
      },
      "50": {
        loc: {
          start: {
            line: 806,
            column: 8
          },
          end: {
            line: 810,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 806,
            column: 8
          },
          end: {
            line: 810,
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
        line: 806
      },
      "51": {
        loc: {
          start: {
            line: 830,
            column: 4
          },
          end: {
            line: 832,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 830,
            column: 4
          },
          end: {
            line: 832,
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
        line: 830
      },
      "52": {
        loc: {
          start: {
            line: 834,
            column: 4
          },
          end: {
            line: 856,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 835,
            column: 6
          },
          end: {
            line: 837,
            column: 7
          }
        }, {
          start: {
            line: 838,
            column: 6
          },
          end: {
            line: 853,
            column: 7
          }
        }, {
          start: {
            line: 854,
            column: 6
          },
          end: {
            line: 855,
            column: 71
          }
        }],
        line: 834
      },
      "53": {
        loc: {
          start: {
            line: 840,
            column: 8
          },
          end: {
            line: 851,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 840,
            column: 8
          },
          end: {
            line: 851,
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
        line: 840
      },
      "54": {
        loc: {
          start: {
            line: 841,
            column: 10
          },
          end: {
            line: 845,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 841,
            column: 10
          },
          end: {
            line: 845,
            column: 11
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
        line: 841
      },
      "55": {
        loc: {
          start: {
            line: 861,
            column: 4
          },
          end: {
            line: 870,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 861,
            column: 4
          },
          end: {
            line: 870,
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
        line: 861
      },
      "56": {
        loc: {
          start: {
            line: 862,
            column: 6
          },
          end: {
            line: 866,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 862,
            column: 6
          },
          end: {
            line: 866,
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
        line: 862
      },
      "57": {
        loc: {
          start: {
            line: 883,
            column: 4
          },
          end: {
            line: 885,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 883,
            column: 4
          },
          end: {
            line: 885,
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
        line: 883
      },
      "58": {
        loc: {
          start: {
            line: 914,
            column: 4
          },
          end: {
            line: 916,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 914,
            column: 4
          },
          end: {
            line: 916,
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
        line: 914
      },
      "59": {
        loc: {
          start: {
            line: 921,
            column: 4
          },
          end: {
            line: 1012,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 922,
            column: 6
          },
          end: {
            line: 923,
            column: 30
          }
        }, {
          start: {
            line: 926,
            column: 6
          },
          end: {
            line: 926,
            column: 40
          }
        }, {
          start: {
            line: 927,
            column: 6
          },
          end: {
            line: 927,
            column: 40
          }
        }, {
          start: {
            line: 931,
            column: 6
          },
          end: {
            line: 931,
            column: 41
          }
        }, {
          start: {
            line: 932,
            column: 6
          },
          end: {
            line: 932,
            column: 41
          }
        }, {
          start: {
            line: 933,
            column: 6
          },
          end: {
            line: 933,
            column: 41
          }
        }, {
          start: {
            line: 934,
            column: 6
          },
          end: {
            line: 935,
            column: 39
          }
        }, {
          start: {
            line: 937,
            column: 6
          },
          end: {
            line: 951,
            column: 7
          }
        }, {
          start: {
            line: 953,
            column: 6
          },
          end: {
            line: 954,
            column: 54
          }
        }, {
          start: {
            line: 956,
            column: 6
          },
          end: {
            line: 975,
            column: 7
          }
        }, {
          start: {
            line: 978,
            column: 6
          },
          end: {
            line: 978,
            column: 41
          }
        }, {
          start: {
            line: 979,
            column: 6
          },
          end: {
            line: 979,
            column: 40
          }
        }, {
          start: {
            line: 980,
            column: 6
          },
          end: {
            line: 980,
            column: 40
          }
        }, {
          start: {
            line: 981,
            column: 6
          },
          end: {
            line: 982,
            column: 32
          }
        }, {
          start: {
            line: 984,
            column: 6
          },
          end: {
            line: 984,
            column: 43
          }
        }, {
          start: {
            line: 985,
            column: 6
          },
          end: {
            line: 996,
            column: 7
          }
        }, {
          start: {
            line: 999,
            column: 6
          },
          end: {
            line: 999,
            column: 46
          }
        }, {
          start: {
            line: 1000,
            column: 6
          },
          end: {
            line: 1001,
            column: 63
          }
        }, {
          start: {
            line: 1004,
            column: 6
          },
          end: {
            line: 1011,
            column: 10
          }
        }],
        line: 921
      },
      "60": {
        loc: {
          start: {
            line: 938,
            column: 8
          },
          end: {
            line: 943,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 938,
            column: 8
          },
          end: {
            line: 943,
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
        line: 938
      },
      "61": {
        loc: {
          start: {
            line: 940,
            column: 18
          },
          end: {
            line: 940,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 940,
            column: 18
          },
          end: {
            line: 940,
            column: 27
          }
        }, {
          start: {
            line: 940,
            column: 31
          },
          end: {
            line: 940,
            column: 33
          }
        }],
        line: 940
      },
      "62": {
        loc: {
          start: {
            line: 943,
            column: 10
          },
          end: {
            line: 949,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 943,
            column: 10
          },
          end: {
            line: 949,
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
        line: 943
      },
      "63": {
        loc: {
          start: {
            line: 946,
            column: 18
          },
          end: {
            line: 946,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 946,
            column: 18
          },
          end: {
            line: 946,
            column: 27
          }
        }, {
          start: {
            line: 946,
            column: 31
          },
          end: {
            line: 946,
            column: 33
          }
        }],
        line: 946
      },
      "64": {
        loc: {
          start: {
            line: 957,
            column: 20
          },
          end: {
            line: 957,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 957,
            column: 20
          },
          end: {
            line: 957,
            column: 29
          }
        }, {
          start: {
            line: 957,
            column: 33
          },
          end: {
            line: 957,
            column: 35
          }
        }],
        line: 957
      },
      "65": {
        loc: {
          start: {
            line: 958,
            column: 8
          },
          end: {
            line: 967,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 958,
            column: 8
          },
          end: {
            line: 967,
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
        line: 958
      },
      "66": {
        loc: {
          start: {
            line: 986,
            column: 8
          },
          end: {
            line: 994,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 986,
            column: 8
          },
          end: {
            line: 994,
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
        line: 986
      },
      "67": {
        loc: {
          start: {
            line: 987,
            column: 10
          },
          end: {
            line: 988,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 987,
            column: 10
          },
          end: {
            line: 987,
            column: 59
          }
        }, {
          start: {
            line: 988,
            column: 10
          },
          end: {
            line: 988,
            column: 59
          }
        }],
        line: 987
      },
      "68": {
        loc: {
          start: {
            line: 1018,
            column: 4
          },
          end: {
            line: 1029,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 1019,
            column: 6
          },
          end: {
            line: 1020,
            column: 38
          }
        }, {
          start: {
            line: 1021,
            column: 6
          },
          end: {
            line: 1022,
            column: 61
          }
        }, {
          start: {
            line: 1023,
            column: 6
          },
          end: {
            line: 1024,
            column: 59
          }
        }, {
          start: {
            line: 1025,
            column: 6
          },
          end: {
            line: 1028,
            column: 10
          }
        }],
        line: 1018
      },
      "69": {
        loc: {
          start: {
            line: 1034,
            column: 4
          },
          end: {
            line: 1036,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1034,
            column: 4
          },
          end: {
            line: 1036,
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
        line: 1034
      },
      "70": {
        loc: {
          start: {
            line: 1037,
            column: 4
          },
          end: {
            line: 1041,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1037,
            column: 4
          },
          end: {
            line: 1041,
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
        line: 1037
      },
      "71": {
        loc: {
          start: {
            line: 1037,
            column: 8
          },
          end: {
            line: 1037,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1037,
            column: 8
          },
          end: {
            line: 1037,
            column: 24
          }
        }, {
          start: {
            line: 1037,
            column: 28
          },
          end: {
            line: 1037,
            column: 50
          }
        }],
        line: 1037
      },
      "72": {
        loc: {
          start: {
            line: 1043,
            column: 4
          },
          end: {
            line: 1045,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1043,
            column: 4
          },
          end: {
            line: 1045,
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
        line: 1043
      },
      "73": {
        loc: {
          start: {
            line: 1047,
            column: 4
          },
          end: {
            line: 1051,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1047,
            column: 4
          },
          end: {
            line: 1051,
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
        line: 1047
      },
      "74": {
        loc: {
          start: {
            line: 1053,
            column: 4
          },
          end: {
            line: 1061,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1053,
            column: 4
          },
          end: {
            line: 1061,
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
        line: 1053
      },
      "75": {
        loc: {
          start: {
            line: 1068,
            column: 4
          },
          end: {
            line: 1073,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1068,
            column: 4
          },
          end: {
            line: 1073,
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
        line: 1068
      },
      "76": {
        loc: {
          start: {
            line: 1085,
            column: 4
          },
          end: {
            line: 1087,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1085,
            column: 4
          },
          end: {
            line: 1087,
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
        line: 1085
      },
      "77": {
        loc: {
          start: {
            line: 1122,
            column: 6
          },
          end: {
            line: 1149,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 1123,
            column: 8
          },
          end: {
            line: 1127,
            column: 9
          }
        }, {
          start: {
            line: 1128,
            column: 8
          },
          end: {
            line: 1132,
            column: 9
          }
        }, {
          start: {
            line: 1133,
            column: 8
          },
          end: {
            line: 1137,
            column: 9
          }
        }, {
          start: {
            line: 1138,
            column: 8
          },
          end: {
            line: 1145,
            column: 9
          }
        }, {
          start: {
            line: 1146,
            column: 8
          },
          end: {
            line: 1148,
            column: 9
          }
        }],
        line: 1122
      },
      "78": {
        loc: {
          start: {
            line: 1156,
            column: 4
          },
          end: {
            line: 1158,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1156,
            column: 4
          },
          end: {
            line: 1158,
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
        line: 1156
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
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0,
      "238": 0,
      "239": 0,
      "240": 0,
      "241": 0,
      "242": 0,
      "243": 0,
      "244": 0,
      "245": 0,
      "246": 0,
      "247": 0,
      "248": 0,
      "249": 0,
      "250": 0,
      "251": 0,
      "252": 0,
      "253": 0,
      "254": 0,
      "255": 0,
      "256": 0,
      "257": 0,
      "258": 0,
      "259": 0,
      "260": 0,
      "261": 0,
      "262": 0,
      "263": 0,
      "264": 0,
      "265": 0,
      "266": 0,
      "267": 0,
      "268": 0,
      "269": 0,
      "270": 0,
      "271": 0,
      "272": 0,
      "273": 0,
      "274": 0,
      "275": 0,
      "276": 0,
      "277": 0,
      "278": 0,
      "279": 0,
      "280": 0,
      "281": 0,
      "282": 0,
      "283": 0,
      "284": 0,
      "285": 0,
      "286": 0,
      "287": 0,
      "288": 0,
      "289": 0,
      "290": 0,
      "291": 0,
      "292": 0,
      "293": 0,
      "294": 0,
      "295": 0,
      "296": 0,
      "297": 0,
      "298": 0,
      "299": 0,
      "300": 0,
      "301": 0,
      "302": 0,
      "303": 0,
      "304": 0,
      "305": 0,
      "306": 0,
      "307": 0,
      "308": 0,
      "309": 0,
      "310": 0,
      "311": 0,
      "312": 0,
      "313": 0,
      "314": 0,
      "315": 0,
      "316": 0,
      "317": 0,
      "318": 0,
      "319": 0,
      "320": 0,
      "321": 0,
      "322": 0,
      "323": 0,
      "324": 0,
      "325": 0,
      "326": 0,
      "327": 0,
      "328": 0,
      "329": 0,
      "330": 0,
      "331": 0,
      "332": 0,
      "333": 0,
      "334": 0,
      "335": 0,
      "336": 0,
      "337": 0,
      "338": 0,
      "339": 0,
      "340": 0,
      "341": 0,
      "342": 0,
      "343": 0,
      "344": 0,
      "345": 0,
      "346": 0,
      "347": 0,
      "348": 0,
      "349": 0,
      "350": 0,
      "351": 0,
      "352": 0,
      "353": 0,
      "354": 0,
      "355": 0,
      "356": 0,
      "357": 0,
      "358": 0,
      "359": 0,
      "360": 0,
      "361": 0,
      "362": 0,
      "363": 0,
      "364": 0,
      "365": 0,
      "366": 0,
      "367": 0,
      "368": 0,
      "369": 0,
      "370": 0,
      "371": 0,
      "372": 0,
      "373": 0,
      "374": 0,
      "375": 0,
      "376": 0,
      "377": 0,
      "378": 0,
      "379": 0,
      "380": 0,
      "381": 0,
      "382": 0,
      "383": 0,
      "384": 0,
      "385": 0,
      "386": 0,
      "387": 0,
      "388": 0,
      "389": 0,
      "390": 0,
      "391": 0,
      "392": 0,
      "393": 0,
      "394": 0,
      "395": 0,
      "396": 0,
      "397": 0,
      "398": 0,
      "399": 0,
      "400": 0,
      "401": 0,
      "402": 0,
      "403": 0,
      "404": 0,
      "405": 0,
      "406": 0,
      "407": 0,
      "408": 0,
      "409": 0,
      "410": 0,
      "411": 0,
      "412": 0,
      "413": 0
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
      "57": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "4": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0, 0, 0, 0, 0, 0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0, 0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0, 0],
      "49": [0, 0, 0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0, 0],
      "53": [0, 0],
      "54": [0, 0],
      "55": [0, 0],
      "56": [0, 0],
      "57": [0, 0],
      "58": [0, 0],
      "59": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0],
      "66": [0, 0],
      "67": [0, 0],
      "68": [0, 0, 0, 0],
      "69": [0, 0],
      "70": [0, 0],
      "71": [0, 0],
      "72": [0, 0],
      "73": [0, 0],
      "74": [0, 0],
      "75": [0, 0],
      "76": [0, 0],
      "77": [0, 0, 0, 0, 0],
      "78": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "52faf3e6ffec1d56fcd3821ce0dcbca0fc719838"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1a6lv2gk28 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1a6lv2gk28();
function enumToJsonSchema(udt) {
  cov_1a6lv2gk28().f[0]++;
  const description = (cov_1a6lv2gk28().s[0]++, udt.doc().toString());
  const cases = (cov_1a6lv2gk28().s[1]++, udt.cases());
  const oneOf = (cov_1a6lv2gk28().s[2]++, []);
  cov_1a6lv2gk28().s[3]++;
  cases.forEach(aCase => {
    cov_1a6lv2gk28().f[1]++;
    const title = (cov_1a6lv2gk28().s[4]++, aCase.name().toString());
    const desc = (cov_1a6lv2gk28().s[5]++, aCase.doc().toString());
    cov_1a6lv2gk28().s[6]++;
    oneOf.push({
      description: desc,
      title,
      enum: [aCase.value()],
      type: "number"
    });
  });
  const res = (cov_1a6lv2gk28().s[7]++, {
    oneOf
  });
  cov_1a6lv2gk28().s[8]++;
  if (description.length > 0) {
    cov_1a6lv2gk28().b[0][0]++;
    cov_1a6lv2gk28().s[9]++;
    res.description = description;
  } else {
    cov_1a6lv2gk28().b[0][1]++;
  }
  cov_1a6lv2gk28().s[10]++;
  return res;
}
function isNumeric(field) {
  cov_1a6lv2gk28().f[2]++;
  cov_1a6lv2gk28().s[11]++;
  return /^\d+$/.test(field.name().toString());
}
function readObj(args, input) {
  cov_1a6lv2gk28().f[3]++;
  const inputName = (cov_1a6lv2gk28().s[12]++, input.name().toString());
  const entry = (cov_1a6lv2gk28().s[13]++, Object.entries(args).find(([name]) => {
    cov_1a6lv2gk28().f[4]++;
    cov_1a6lv2gk28().s[14]++;
    return name === inputName;
  }));
  cov_1a6lv2gk28().s[15]++;
  if (!entry) {
    cov_1a6lv2gk28().b[1][0]++;
    cov_1a6lv2gk28().s[16]++;
    throw new Error(`Missing field ${inputName}`);
  } else {
    cov_1a6lv2gk28().b[1][1]++;
  }
  cov_1a6lv2gk28().s[17]++;
  return entry[1];
}
function findCase(name) {
  cov_1a6lv2gk28().f[5]++;
  cov_1a6lv2gk28().s[18]++;
  return function matches(entry) {
    cov_1a6lv2gk28().f[6]++;
    cov_1a6lv2gk28().s[19]++;
    switch (entry.switch().value) {
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value:
        cov_1a6lv2gk28().b[2][0]++;
        {
          const tuple = (cov_1a6lv2gk28().s[20]++, entry.tupleCase());
          cov_1a6lv2gk28().s[21]++;
          return tuple.name().toString() === name;
        }
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0().value:
        cov_1a6lv2gk28().b[2][1]++;
        {
          const voidCase = (cov_1a6lv2gk28().s[22]++, entry.voidCase());
          cov_1a6lv2gk28().s[23]++;
          return voidCase.name().toString() === name;
        }
      default:
        cov_1a6lv2gk28().b[2][2]++;
        cov_1a6lv2gk28().s[24]++;
        return false;
    }
  };
}
function stringToScVal(str, ty) {
  cov_1a6lv2gk28().f[7]++;
  cov_1a6lv2gk28().s[25]++;
  switch (ty.value) {
    case _stellarBase.xdr.ScSpecType.scSpecTypeString().value:
      cov_1a6lv2gk28().b[3][0]++;
      cov_1a6lv2gk28().s[26]++;
      return _stellarBase.xdr.ScVal.scvString(str);
    case _stellarBase.xdr.ScSpecType.scSpecTypeSymbol().value:
      cov_1a6lv2gk28().b[3][1]++;
      cov_1a6lv2gk28().s[27]++;
      return _stellarBase.xdr.ScVal.scvSymbol(str);
    case _stellarBase.xdr.ScSpecType.scSpecTypeAddress().value:
      cov_1a6lv2gk28().b[3][2]++;
      {
        const addr = (cov_1a6lv2gk28().s[28]++, _stellarBase.Address.fromString(str));
        cov_1a6lv2gk28().s[29]++;
        return _stellarBase.xdr.ScVal.scvAddress(addr.toScAddress());
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeU64().value:
      cov_1a6lv2gk28().b[3][3]++;
      cov_1a6lv2gk28().s[30]++;
      return new _stellarBase.XdrLargeInt("u64", str).toScVal();
    case _stellarBase.xdr.ScSpecType.scSpecTypeI64().value:
      cov_1a6lv2gk28().b[3][4]++;
      cov_1a6lv2gk28().s[31]++;
      return new _stellarBase.XdrLargeInt("i64", str).toScVal();
    case _stellarBase.xdr.ScSpecType.scSpecTypeU128().value:
      cov_1a6lv2gk28().b[3][5]++;
      cov_1a6lv2gk28().s[32]++;
      return new _stellarBase.XdrLargeInt("u128", str).toScVal();
    case _stellarBase.xdr.ScSpecType.scSpecTypeI128().value:
      cov_1a6lv2gk28().b[3][6]++;
      cov_1a6lv2gk28().s[33]++;
      return new _stellarBase.XdrLargeInt("i128", str).toScVal();
    case _stellarBase.xdr.ScSpecType.scSpecTypeU256().value:
      cov_1a6lv2gk28().b[3][7]++;
      cov_1a6lv2gk28().s[34]++;
      return new _stellarBase.XdrLargeInt("u256", str).toScVal();
    case _stellarBase.xdr.ScSpecType.scSpecTypeI256().value:
      cov_1a6lv2gk28().b[3][8]++;
      cov_1a6lv2gk28().s[35]++;
      return new _stellarBase.XdrLargeInt("i256", str).toScVal();
    case _stellarBase.xdr.ScSpecType.scSpecTypeBytes().value:
      cov_1a6lv2gk28().b[3][9]++;
    case _stellarBase.xdr.ScSpecType.scSpecTypeBytesN().value:
      cov_1a6lv2gk28().b[3][10]++;
      cov_1a6lv2gk28().s[36]++;
      return _stellarBase.xdr.ScVal.scvBytes(Buffer.from(str, "base64"));
    default:
      cov_1a6lv2gk28().b[3][11]++;
      cov_1a6lv2gk28().s[37]++;
      throw new TypeError(`invalid type ${ty.name} specified for string value`);
  }
}
const PRIMITIVE_DEFINITONS = (cov_1a6lv2gk28().s[38]++, {
  U32: {
    type: "integer",
    minimum: 0,
    maximum: 4294967295
  },
  I32: {
    type: "integer",
    minimum: -2147483648,
    maximum: 2147483647
  },
  U64: {
    type: "string",
    pattern: "^([1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 20 // 64-bit max value has 20 digits
  },
  I64: {
    type: "string",
    pattern: "^(-?[1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 21 // Includes additional digit for the potential '-'
  },
  U128: {
    type: "string",
    pattern: "^([1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 39 // 128-bit max value has 39 digits
  },
  I128: {
    type: "string",
    pattern: "^(-?[1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 40 // Includes additional digit for the potential '-'
  },
  U256: {
    type: "string",
    pattern: "^([1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 78 // 256-bit max value has 78 digits
  },
  I256: {
    type: "string",
    pattern: "^(-?[1-9][0-9]*|0)$",
    minLength: 1,
    maxLength: 79 // Includes additional digit for the potential '-'
  },
  Address: {
    type: "string",
    format: "address",
    description: "Address can be a public key or contract id"
  },
  ScString: {
    type: "string",
    description: "ScString is a string"
  },
  ScSymbol: {
    type: "string",
    description: "ScString is a string"
  },
  DataUrl: {
    type: "string",
    pattern: "^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?$"
  }
});

/* eslint-disable default-case */
/**
 * @param typeDef type to convert to json schema reference
 * @returns {JSONSchema7} a schema describing the type
 * @private
 */
function typeRef(typeDef) {
  cov_1a6lv2gk28().f[8]++;
  const t = (cov_1a6lv2gk28().s[39]++, typeDef.switch());
  const value = (cov_1a6lv2gk28().s[40]++, t.value);
  let ref;
  cov_1a6lv2gk28().s[41]++;
  switch (value) {
    case _stellarBase.xdr.ScSpecType.scSpecTypeVal().value:
      cov_1a6lv2gk28().b[4][0]++;
      {
        cov_1a6lv2gk28().s[42]++;
        ref = "Val";
        cov_1a6lv2gk28().s[43]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeBool().value:
      cov_1a6lv2gk28().b[4][1]++;
      {
        cov_1a6lv2gk28().s[44]++;
        return {
          type: "boolean"
        };
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeVoid().value:
      cov_1a6lv2gk28().b[4][2]++;
      {
        cov_1a6lv2gk28().s[45]++;
        return {
          type: "null"
        };
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeError().value:
      cov_1a6lv2gk28().b[4][3]++;
      {
        cov_1a6lv2gk28().s[46]++;
        ref = "Error";
        cov_1a6lv2gk28().s[47]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeU32().value:
      cov_1a6lv2gk28().b[4][4]++;
      {
        cov_1a6lv2gk28().s[48]++;
        ref = "U32";
        cov_1a6lv2gk28().s[49]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeI32().value:
      cov_1a6lv2gk28().b[4][5]++;
      {
        cov_1a6lv2gk28().s[50]++;
        ref = "I32";
        cov_1a6lv2gk28().s[51]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeU64().value:
      cov_1a6lv2gk28().b[4][6]++;
      {
        cov_1a6lv2gk28().s[52]++;
        ref = "U64";
        cov_1a6lv2gk28().s[53]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeI64().value:
      cov_1a6lv2gk28().b[4][7]++;
      {
        cov_1a6lv2gk28().s[54]++;
        ref = "I64";
        cov_1a6lv2gk28().s[55]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeTimepoint().value:
      cov_1a6lv2gk28().b[4][8]++;
      {
        cov_1a6lv2gk28().s[56]++;
        throw new Error("Timepoint type not supported");
        cov_1a6lv2gk28().s[57]++;
        ref = "Timepoint";
        cov_1a6lv2gk28().s[58]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeDuration().value:
      cov_1a6lv2gk28().b[4][9]++;
      {
        cov_1a6lv2gk28().s[59]++;
        throw new Error("Duration not supported");
        cov_1a6lv2gk28().s[60]++;
        ref = "Duration";
        cov_1a6lv2gk28().s[61]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeU128().value:
      cov_1a6lv2gk28().b[4][10]++;
      {
        cov_1a6lv2gk28().s[62]++;
        ref = "U128";
        cov_1a6lv2gk28().s[63]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeI128().value:
      cov_1a6lv2gk28().b[4][11]++;
      {
        cov_1a6lv2gk28().s[64]++;
        ref = "I128";
        cov_1a6lv2gk28().s[65]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeU256().value:
      cov_1a6lv2gk28().b[4][12]++;
      {
        cov_1a6lv2gk28().s[66]++;
        ref = "U256";
        cov_1a6lv2gk28().s[67]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeI256().value:
      cov_1a6lv2gk28().b[4][13]++;
      {
        cov_1a6lv2gk28().s[68]++;
        ref = "I256";
        cov_1a6lv2gk28().s[69]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeBytes().value:
      cov_1a6lv2gk28().b[4][14]++;
      {
        cov_1a6lv2gk28().s[70]++;
        ref = "DataUrl";
        cov_1a6lv2gk28().s[71]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeString().value:
      cov_1a6lv2gk28().b[4][15]++;
      {
        cov_1a6lv2gk28().s[72]++;
        ref = "ScString";
        cov_1a6lv2gk28().s[73]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeSymbol().value:
      cov_1a6lv2gk28().b[4][16]++;
      {
        cov_1a6lv2gk28().s[74]++;
        ref = "ScSymbol";
        cov_1a6lv2gk28().s[75]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeAddress().value:
      cov_1a6lv2gk28().b[4][17]++;
      {
        cov_1a6lv2gk28().s[76]++;
        ref = "Address";
        cov_1a6lv2gk28().s[77]++;
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeOption().value:
      cov_1a6lv2gk28().b[4][18]++;
      {
        const opt = (cov_1a6lv2gk28().s[78]++, typeDef.option());
        cov_1a6lv2gk28().s[79]++;
        return typeRef(opt.valueType());
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeResult().value:
      cov_1a6lv2gk28().b[4][19]++;
      {
        cov_1a6lv2gk28().s[80]++;
        // throw new Error('Result type not supported');
        break;
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeVec().value:
      cov_1a6lv2gk28().b[4][20]++;
      {
        const arr = (cov_1a6lv2gk28().s[81]++, typeDef.vec());
        const reference = (cov_1a6lv2gk28().s[82]++, typeRef(arr.elementType()));
        cov_1a6lv2gk28().s[83]++;
        return {
          type: "array",
          items: reference
        };
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeMap().value:
      cov_1a6lv2gk28().b[4][21]++;
      {
        const map = (cov_1a6lv2gk28().s[84]++, typeDef.map());
        const items = (cov_1a6lv2gk28().s[85]++, [typeRef(map.keyType()), typeRef(map.valueType())]);
        cov_1a6lv2gk28().s[86]++;
        return {
          type: "array",
          items: {
            type: "array",
            items,
            minItems: 2,
            maxItems: 2
          }
        };
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeTuple().value:
      cov_1a6lv2gk28().b[4][22]++;
      {
        const tuple = (cov_1a6lv2gk28().s[87]++, typeDef.tuple());
        const minItems = (cov_1a6lv2gk28().s[88]++, tuple.valueTypes().length);
        const maxItems = (cov_1a6lv2gk28().s[89]++, minItems);
        const items = (cov_1a6lv2gk28().s[90]++, tuple.valueTypes().map(typeRef));
        cov_1a6lv2gk28().s[91]++;
        return {
          type: "array",
          items,
          minItems,
          maxItems
        };
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeBytesN().value:
      cov_1a6lv2gk28().b[4][23]++;
      {
        const arr = (cov_1a6lv2gk28().s[92]++, typeDef.bytesN());
        cov_1a6lv2gk28().s[93]++;
        return {
          $ref: "#/definitions/DataUrl",
          maxLength: arr.n()
        };
      }
    case _stellarBase.xdr.ScSpecType.scSpecTypeUdt().value:
      cov_1a6lv2gk28().b[4][24]++;
      {
        const udt = (cov_1a6lv2gk28().s[94]++, typeDef.udt());
        cov_1a6lv2gk28().s[95]++;
        ref = udt.name().toString();
        cov_1a6lv2gk28().s[96]++;
        break;
      }
  }
  cov_1a6lv2gk28().s[97]++;
  return {
    $ref: `#/definitions/${ref}`
  };
}
/* eslint-enable default-case */

function isRequired(typeDef) {
  cov_1a6lv2gk28().f[9]++;
  cov_1a6lv2gk28().s[98]++;
  return typeDef.switch().value !== _stellarBase.xdr.ScSpecType.scSpecTypeOption().value;
}
function argsAndRequired(input) {
  cov_1a6lv2gk28().f[10]++;
  const properties = (cov_1a6lv2gk28().s[99]++, {});
  const required = (cov_1a6lv2gk28().s[100]++, []);
  cov_1a6lv2gk28().s[101]++;
  input.forEach(arg => {
    cov_1a6lv2gk28().f[11]++;
    const aType = (cov_1a6lv2gk28().s[102]++, arg.type());
    const name = (cov_1a6lv2gk28().s[103]++, arg.name().toString());
    cov_1a6lv2gk28().s[104]++;
    properties[name] = typeRef(aType);
    cov_1a6lv2gk28().s[105]++;
    if (isRequired(aType)) {
      cov_1a6lv2gk28().b[5][0]++;
      cov_1a6lv2gk28().s[106]++;
      required.push(name);
    } else {
      cov_1a6lv2gk28().b[5][1]++;
    }
  });
  const res = (cov_1a6lv2gk28().s[107]++, {
    properties
  });
  cov_1a6lv2gk28().s[108]++;
  if (required.length > 0) {
    cov_1a6lv2gk28().b[6][0]++;
    cov_1a6lv2gk28().s[109]++;
    res.required = required;
  } else {
    cov_1a6lv2gk28().b[6][1]++;
  }
  cov_1a6lv2gk28().s[110]++;
  return res;
}
function structToJsonSchema(udt) {
  cov_1a6lv2gk28().f[12]++;
  const fields = (cov_1a6lv2gk28().s[111]++, udt.fields());
  cov_1a6lv2gk28().s[112]++;
  if (fields.some(isNumeric)) {
    cov_1a6lv2gk28().b[7][0]++;
    cov_1a6lv2gk28().s[113]++;
    if (!fields.every(isNumeric)) {
      cov_1a6lv2gk28().b[8][0]++;
      cov_1a6lv2gk28().s[114]++;
      throw new Error("mixed numeric and non-numeric field names are not allowed");
    } else {
      cov_1a6lv2gk28().b[8][1]++;
    }
    const items = (cov_1a6lv2gk28().s[115]++, fields.map((_, i) => {
      cov_1a6lv2gk28().f[13]++;
      cov_1a6lv2gk28().s[116]++;
      return typeRef(fields[i].type());
    }));
    cov_1a6lv2gk28().s[117]++;
    return {
      type: "array",
      items,
      minItems: fields.length,
      maxItems: fields.length
    };
  } else {
    cov_1a6lv2gk28().b[7][1]++;
  }
  const description = (cov_1a6lv2gk28().s[118]++, udt.doc().toString());
  const {
    properties,
    required
  } = (cov_1a6lv2gk28().s[119]++, argsAndRequired(fields));
  cov_1a6lv2gk28().s[120]++;
  properties.additionalProperties = false;
  cov_1a6lv2gk28().s[121]++;
  return {
    description,
    properties,
    required,
    type: "object"
  };
}
function functionToJsonSchema(func) {
  cov_1a6lv2gk28().f[14]++;
  const {
    properties,
    required
  } = (cov_1a6lv2gk28().s[122]++, argsAndRequired(func.inputs()));
  const args = (cov_1a6lv2gk28().s[123]++, {
    additionalProperties: false,
    properties,
    type: "object"
  });
  cov_1a6lv2gk28().s[124]++;
  if (required?.length > 0) {
    cov_1a6lv2gk28().b[9][0]++;
    cov_1a6lv2gk28().s[125]++;
    args.required = required;
  } else {
    cov_1a6lv2gk28().b[9][1]++;
  }
  const input = (cov_1a6lv2gk28().s[126]++, {
    properties: {
      args
    }
  });
  const outputs = (cov_1a6lv2gk28().s[127]++, func.outputs());
  const output = (cov_1a6lv2gk28().s[128]++, outputs.length > 0 ? (cov_1a6lv2gk28().b[10][0]++, typeRef(outputs[0])) : (cov_1a6lv2gk28().b[10][1]++, typeRef(_stellarBase.xdr.ScSpecTypeDef.scSpecTypeVoid())));
  const description = (cov_1a6lv2gk28().s[129]++, func.doc().toString());
  cov_1a6lv2gk28().s[130]++;
  if (description.length > 0) {
    cov_1a6lv2gk28().b[11][0]++;
    cov_1a6lv2gk28().s[131]++;
    input.description = description;
  } else {
    cov_1a6lv2gk28().b[11][1]++;
  }
  cov_1a6lv2gk28().s[132]++;
  input.additionalProperties = false;
  cov_1a6lv2gk28().s[133]++;
  output.additionalProperties = false;
  cov_1a6lv2gk28().s[134]++;
  return {
    input,
    output
  };
}

/* eslint-disable default-case */
function unionToJsonSchema(udt) {
  cov_1a6lv2gk28().f[15]++;
  const description = (cov_1a6lv2gk28().s[135]++, udt.doc().toString());
  const cases = (cov_1a6lv2gk28().s[136]++, udt.cases());
  const oneOf = (cov_1a6lv2gk28().s[137]++, []);
  cov_1a6lv2gk28().s[138]++;
  cases.forEach(aCase => {
    cov_1a6lv2gk28().f[16]++;
    cov_1a6lv2gk28().s[139]++;
    switch (aCase.switch().value) {
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0().value:
        cov_1a6lv2gk28().b[12][0]++;
        {
          const c = (cov_1a6lv2gk28().s[140]++, aCase.voidCase());
          const title = (cov_1a6lv2gk28().s[141]++, c.name().toString());
          cov_1a6lv2gk28().s[142]++;
          oneOf.push({
            type: "object",
            title,
            properties: {
              tag: title
            },
            additionalProperties: false,
            required: ["tag"]
          });
          cov_1a6lv2gk28().s[143]++;
          break;
        }
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value:
        cov_1a6lv2gk28().b[12][1]++;
        {
          const c = (cov_1a6lv2gk28().s[144]++, aCase.tupleCase());
          const title = (cov_1a6lv2gk28().s[145]++, c.name().toString());
          cov_1a6lv2gk28().s[146]++;
          oneOf.push({
            type: "object",
            title,
            properties: {
              tag: title,
              values: {
                type: "array",
                items: c.type().map(typeRef)
              }
            },
            required: ["tag", "values"],
            additionalProperties: false
          });
        }
    }
  });
  const res = (cov_1a6lv2gk28().s[147]++, {
    oneOf
  });
  cov_1a6lv2gk28().s[148]++;
  if (description.length > 0) {
    cov_1a6lv2gk28().b[13][0]++;
    cov_1a6lv2gk28().s[149]++;
    res.description = description;
  } else {
    cov_1a6lv2gk28().b[13][1]++;
  }
  cov_1a6lv2gk28().s[150]++;
  return res;
}
/* eslint-enable default-case */

/**
 * Provides a ContractSpec class which can contains the XDR types defined by the contract.
 * This allows the class to be used to convert between native and raw `xdr.ScVal`s.
 *
 * Constructs a new ContractSpec from an array of XDR spec entries.
 *
 * @memberof module:contract
 * @param {xdr.ScSpecEntry[] | string[]} entries the XDR spec entries
 * @throws {Error} if entries is invalid
 *
 * @example
 * const specEntries = [...]; // XDR spec entries of a smart contract
 * const contractSpec = new ContractSpec(specEntries);
 *
 * // Convert native value to ScVal
 * const args = {
 *   arg1: 'value1',
 *   arg2: 1234
 * };
 * const scArgs = contractSpec.funcArgsToScVals('funcName', args);
 *
 * // Call contract
 * const resultScv = await callContract(contractId, 'funcName', scArgs);
 *
 * // Convert result ScVal back to native value
 * const result = contractSpec.funcResToNative('funcName', resultScv);
 *
 * console.log(result); // {success: true}
 */
class Spec {
  /**
   * The XDR spec entries.
   */
  entries = (cov_1a6lv2gk28().s[151]++, []);
  constructor(entries) {
    cov_1a6lv2gk28().f[17]++;
    cov_1a6lv2gk28().s[152]++;
    if (entries.length === 0) {
      cov_1a6lv2gk28().b[14][0]++;
      cov_1a6lv2gk28().s[153]++;
      throw new Error("Contract spec must have at least one entry");
    } else {
      cov_1a6lv2gk28().b[14][1]++;
    }
    const entry = (cov_1a6lv2gk28().s[154]++, entries[0]);
    cov_1a6lv2gk28().s[155]++;
    if (typeof entry === "string") {
      cov_1a6lv2gk28().b[15][0]++;
      cov_1a6lv2gk28().s[156]++;
      this.entries = entries.map(s => {
        cov_1a6lv2gk28().f[18]++;
        cov_1a6lv2gk28().s[157]++;
        return _stellarBase.xdr.ScSpecEntry.fromXDR(s, "base64");
      });
    } else {
      cov_1a6lv2gk28().b[15][1]++;
      cov_1a6lv2gk28().s[158]++;
      this.entries = entries;
    }
  }

  /**
   * Gets the XDR functions from the spec.
   * @returns {xdr.ScSpecFunctionV0[]} all contract functions
   */
  funcs() {
    cov_1a6lv2gk28().f[19]++;
    cov_1a6lv2gk28().s[159]++;
    return this.entries.filter(entry => {
      cov_1a6lv2gk28().f[20]++;
      cov_1a6lv2gk28().s[160]++;
      return entry.switch().value === _stellarBase.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value;
    }).map(entry => {
      cov_1a6lv2gk28().f[21]++;
      cov_1a6lv2gk28().s[161]++;
      return entry.functionV0();
    });
  }

  /**
   * Gets the XDR function spec for the given function name.
   *
   * @param {string} name the name of the function
   * @returns {xdr.ScSpecFunctionV0} the function spec
   *
   * @throws {Error} if no function with the given name exists
   */
  getFunc(name) {
    cov_1a6lv2gk28().f[22]++;
    const entry = (cov_1a6lv2gk28().s[162]++, this.findEntry(name));
    cov_1a6lv2gk28().s[163]++;
    if (entry.switch().value !== _stellarBase.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value) {
      cov_1a6lv2gk28().b[16][0]++;
      cov_1a6lv2gk28().s[164]++;
      throw new Error(`${name} is not a function`);
    } else {
      cov_1a6lv2gk28().b[16][1]++;
    }
    cov_1a6lv2gk28().s[165]++;
    return entry.functionV0();
  }

  /**
   * Converts native JS arguments to ScVals for calling a contract function.
   *
   * @param {string} name the name of the function
   * @param {object} args the arguments object
   * @returns {xdr.ScVal[]} the converted arguments
   *
   * @throws {Error} if argument is missing or incorrect type
   *
   * @example
   * const args = {
   *   arg1: 'value1',
   *   arg2: 1234
   * };
   * const scArgs = contractSpec.funcArgsToScVals('funcName', args);
   */
  funcArgsToScVals(name, args) {
    cov_1a6lv2gk28().f[23]++;
    const fn = (cov_1a6lv2gk28().s[166]++, this.getFunc(name));
    cov_1a6lv2gk28().s[167]++;
    return fn.inputs().map(input => {
      cov_1a6lv2gk28().f[24]++;
      cov_1a6lv2gk28().s[168]++;
      return this.nativeToScVal(readObj(args, input), input.type());
    });
  }

  /**
   * Converts the result ScVal of a function call to a native JS value.
   *
   * @param {string} name the name of the function
   * @param {xdr.ScVal | string} val_or_base64 the result ScVal or base64 encoded string
   * @returns {any} the converted native value
   *
   * @throws {Error} if return type mismatch or invalid input
   *
   * @example
   * const resultScv = 'AAA=='; // Base64 encoded ScVal
   * const result = contractSpec.funcResToNative('funcName', resultScv);
   */
  funcResToNative(name, val_or_base64) {
    cov_1a6lv2gk28().f[25]++;
    const val = (cov_1a6lv2gk28().s[169]++, typeof val_or_base64 === "string" ? (cov_1a6lv2gk28().b[17][0]++, _stellarBase.xdr.ScVal.fromXDR(val_or_base64, "base64")) : (cov_1a6lv2gk28().b[17][1]++, val_or_base64));
    const func = (cov_1a6lv2gk28().s[170]++, this.getFunc(name));
    const outputs = (cov_1a6lv2gk28().s[171]++, func.outputs());
    cov_1a6lv2gk28().s[172]++;
    if (outputs.length === 0) {
      cov_1a6lv2gk28().b[18][0]++;
      const type = (cov_1a6lv2gk28().s[173]++, val.switch());
      cov_1a6lv2gk28().s[174]++;
      if (type.value !== _stellarBase.xdr.ScValType.scvVoid().value) {
        cov_1a6lv2gk28().b[19][0]++;
        cov_1a6lv2gk28().s[175]++;
        throw new Error(`Expected void, got ${type.name}`);
      } else {
        cov_1a6lv2gk28().b[19][1]++;
      }
      cov_1a6lv2gk28().s[176]++;
      return null;
    } else {
      cov_1a6lv2gk28().b[18][1]++;
    }
    cov_1a6lv2gk28().s[177]++;
    if (outputs.length > 1) {
      cov_1a6lv2gk28().b[20][0]++;
      cov_1a6lv2gk28().s[178]++;
      throw new Error(`Multiple outputs not supported`);
    } else {
      cov_1a6lv2gk28().b[20][1]++;
    }
    const output = (cov_1a6lv2gk28().s[179]++, outputs[0]);
    cov_1a6lv2gk28().s[180]++;
    if (output.switch().value === _stellarBase.xdr.ScSpecType.scSpecTypeResult().value) {
      cov_1a6lv2gk28().b[21][0]++;
      cov_1a6lv2gk28().s[181]++;
      return new _rust_result.Ok(this.scValToNative(val, output.result().okType()));
    } else {
      cov_1a6lv2gk28().b[21][1]++;
    }
    cov_1a6lv2gk28().s[182]++;
    return this.scValToNative(val, output);
  }

  /**
   * Finds the XDR spec entry for the given name.
   *
   * @param {string} name the name to find
   * @returns {xdr.ScSpecEntry} the entry
   *
   * @throws {Error} if no entry with the given name exists
   */
  findEntry(name) {
    cov_1a6lv2gk28().f[26]++;
    const entry = (cov_1a6lv2gk28().s[183]++, this.entries.find(e => {
      cov_1a6lv2gk28().f[27]++;
      cov_1a6lv2gk28().s[184]++;
      return e.value().name().toString() === name;
    }));
    cov_1a6lv2gk28().s[185]++;
    if (!entry) {
      cov_1a6lv2gk28().b[22][0]++;
      cov_1a6lv2gk28().s[186]++;
      throw new Error(`no such entry: ${name}`);
    } else {
      cov_1a6lv2gk28().b[22][1]++;
    }
    cov_1a6lv2gk28().s[187]++;
    return entry;
  }

  /**
   * Converts a native JS value to an ScVal based on the given type.
   *
   * @param {any} val the native JS value
   * @param {xdr.ScSpecTypeDef} [ty] the expected type
   * @returns {xdr.ScVal} the converted ScVal
   *
   * @throws {Error} if value cannot be converted to the given type
   */
  nativeToScVal(val, ty) {
    cov_1a6lv2gk28().f[28]++;
    const t = (cov_1a6lv2gk28().s[188]++, ty.switch());
    const value = (cov_1a6lv2gk28().s[189]++, t.value);
    cov_1a6lv2gk28().s[190]++;
    if (t.value === _stellarBase.xdr.ScSpecType.scSpecTypeUdt().value) {
      cov_1a6lv2gk28().b[23][0]++;
      const udt = (cov_1a6lv2gk28().s[191]++, ty.udt());
      cov_1a6lv2gk28().s[192]++;
      return this.nativeToUdt(val, udt.name().toString());
    } else {
      cov_1a6lv2gk28().b[23][1]++;
    }
    cov_1a6lv2gk28().s[193]++;
    if (value === _stellarBase.xdr.ScSpecType.scSpecTypeOption().value) {
      cov_1a6lv2gk28().b[24][0]++;
      const opt = (cov_1a6lv2gk28().s[194]++, ty.option());
      cov_1a6lv2gk28().s[195]++;
      if (val === undefined) {
        cov_1a6lv2gk28().b[25][0]++;
        cov_1a6lv2gk28().s[196]++;
        return _stellarBase.xdr.ScVal.scvVoid();
      } else {
        cov_1a6lv2gk28().b[25][1]++;
      }
      cov_1a6lv2gk28().s[197]++;
      return this.nativeToScVal(val, opt.valueType());
    } else {
      cov_1a6lv2gk28().b[24][1]++;
    }
    cov_1a6lv2gk28().s[198]++;
    switch (typeof val) {
      case "object":
        cov_1a6lv2gk28().b[26][0]++;
        {
          cov_1a6lv2gk28().s[199]++;
          if (val === null) {
            cov_1a6lv2gk28().b[27][0]++;
            cov_1a6lv2gk28().s[200]++;
            switch (value) {
              case _stellarBase.xdr.ScSpecType.scSpecTypeVoid().value:
                cov_1a6lv2gk28().b[28][0]++;
                cov_1a6lv2gk28().s[201]++;
                return _stellarBase.xdr.ScVal.scvVoid();
              default:
                cov_1a6lv2gk28().b[28][1]++;
                cov_1a6lv2gk28().s[202]++;
                throw new TypeError(`Type ${ty} was not void, but value was null`);
            }
          } else {
            cov_1a6lv2gk28().b[27][1]++;
          }
          cov_1a6lv2gk28().s[203]++;
          if (val instanceof _stellarBase.xdr.ScVal) {
            cov_1a6lv2gk28().b[29][0]++;
            cov_1a6lv2gk28().s[204]++;
            return val; // should we copy?
          } else {
            cov_1a6lv2gk28().b[29][1]++;
          }
          cov_1a6lv2gk28().s[205]++;
          if (val instanceof _stellarBase.Address) {
            cov_1a6lv2gk28().b[30][0]++;
            cov_1a6lv2gk28().s[206]++;
            if (ty.switch().value !== _stellarBase.xdr.ScSpecType.scSpecTypeAddress().value) {
              cov_1a6lv2gk28().b[31][0]++;
              cov_1a6lv2gk28().s[207]++;
              throw new TypeError(`Type ${ty} was not address, but value was Address`);
            } else {
              cov_1a6lv2gk28().b[31][1]++;
            }
            cov_1a6lv2gk28().s[208]++;
            return val.toScVal();
          } else {
            cov_1a6lv2gk28().b[30][1]++;
          }
          cov_1a6lv2gk28().s[209]++;
          if (val instanceof _stellarBase.Contract) {
            cov_1a6lv2gk28().b[32][0]++;
            cov_1a6lv2gk28().s[210]++;
            if (ty.switch().value !== _stellarBase.xdr.ScSpecType.scSpecTypeAddress().value) {
              cov_1a6lv2gk28().b[33][0]++;
              cov_1a6lv2gk28().s[211]++;
              throw new TypeError(`Type ${ty} was not address, but value was Address`);
            } else {
              cov_1a6lv2gk28().b[33][1]++;
            }
            cov_1a6lv2gk28().s[212]++;
            return val.address().toScVal();
          } else {
            cov_1a6lv2gk28().b[32][1]++;
          }
          cov_1a6lv2gk28().s[213]++;
          if ((cov_1a6lv2gk28().b[35][0]++, val instanceof Uint8Array) || (cov_1a6lv2gk28().b[35][1]++, Buffer.isBuffer(val))) {
            cov_1a6lv2gk28().b[34][0]++;
            const copy = (cov_1a6lv2gk28().s[214]++, Uint8Array.from(val));
            cov_1a6lv2gk28().s[215]++;
            switch (value) {
              case _stellarBase.xdr.ScSpecType.scSpecTypeBytesN().value:
                cov_1a6lv2gk28().b[36][0]++;
                {
                  const bytesN = (cov_1a6lv2gk28().s[216]++, ty.bytesN());
                  cov_1a6lv2gk28().s[217]++;
                  if (copy.length !== bytesN.n()) {
                    cov_1a6lv2gk28().b[37][0]++;
                    cov_1a6lv2gk28().s[218]++;
                    throw new TypeError(`expected ${bytesN.n()} bytes, but got ${copy.length}`);
                  } else {
                    cov_1a6lv2gk28().b[37][1]++;
                  }
                  //@ts-ignore
                  cov_1a6lv2gk28().s[219]++;
                  return _stellarBase.xdr.ScVal.scvBytes(copy);
                }
              case _stellarBase.xdr.ScSpecType.scSpecTypeBytes().value:
                cov_1a6lv2gk28().b[36][1]++;
                cov_1a6lv2gk28().s[220]++;
                //@ts-ignore
                return _stellarBase.xdr.ScVal.scvBytes(copy);
              default:
                cov_1a6lv2gk28().b[36][2]++;
                cov_1a6lv2gk28().s[221]++;
                throw new TypeError(`invalid type (${ty}) specified for Bytes and BytesN`);
            }
          } else {
            cov_1a6lv2gk28().b[34][1]++;
          }
          cov_1a6lv2gk28().s[222]++;
          if (Array.isArray(val)) {
            cov_1a6lv2gk28().b[38][0]++;
            cov_1a6lv2gk28().s[223]++;
            switch (value) {
              case _stellarBase.xdr.ScSpecType.scSpecTypeVec().value:
                cov_1a6lv2gk28().b[39][0]++;
                {
                  const vec = (cov_1a6lv2gk28().s[224]++, ty.vec());
                  const elementType = (cov_1a6lv2gk28().s[225]++, vec.elementType());
                  cov_1a6lv2gk28().s[226]++;
                  return _stellarBase.xdr.ScVal.scvVec(val.map(v => {
                    cov_1a6lv2gk28().f[29]++;
                    cov_1a6lv2gk28().s[227]++;
                    return this.nativeToScVal(v, elementType);
                  }));
                }
              case _stellarBase.xdr.ScSpecType.scSpecTypeTuple().value:
                cov_1a6lv2gk28().b[39][1]++;
                {
                  const tup = (cov_1a6lv2gk28().s[228]++, ty.tuple());
                  const valTypes = (cov_1a6lv2gk28().s[229]++, tup.valueTypes());
                  cov_1a6lv2gk28().s[230]++;
                  if (val.length !== valTypes.length) {
                    cov_1a6lv2gk28().b[40][0]++;
                    cov_1a6lv2gk28().s[231]++;
                    throw new TypeError(`Tuple expects ${valTypes.length} values, but ${val.length} were provided`);
                  } else {
                    cov_1a6lv2gk28().b[40][1]++;
                  }
                  cov_1a6lv2gk28().s[232]++;
                  return _stellarBase.xdr.ScVal.scvVec(val.map((v, i) => {
                    cov_1a6lv2gk28().f[30]++;
                    cov_1a6lv2gk28().s[233]++;
                    return this.nativeToScVal(v, valTypes[i]);
                  }));
                }
              case _stellarBase.xdr.ScSpecType.scSpecTypeMap().value:
                cov_1a6lv2gk28().b[39][2]++;
                {
                  const map = (cov_1a6lv2gk28().s[234]++, ty.map());
                  const keyType = (cov_1a6lv2gk28().s[235]++, map.keyType());
                  const valueType = (cov_1a6lv2gk28().s[236]++, map.valueType());
                  cov_1a6lv2gk28().s[237]++;
                  return _stellarBase.xdr.ScVal.scvMap(val.map(entry => {
                    cov_1a6lv2gk28().f[31]++;
                    const key = (cov_1a6lv2gk28().s[238]++, this.nativeToScVal(entry[0], keyType));
                    const mapVal = (cov_1a6lv2gk28().s[239]++, this.nativeToScVal(entry[1], valueType));
                    cov_1a6lv2gk28().s[240]++;
                    return new _stellarBase.xdr.ScMapEntry({
                      key,
                      val: mapVal
                    });
                  }));
                }
              default:
                cov_1a6lv2gk28().b[39][3]++;
                cov_1a6lv2gk28().s[241]++;
                throw new TypeError(`Type ${ty} was not vec, but value was Array`);
            }
          } else {
            cov_1a6lv2gk28().b[38][1]++;
          }
          cov_1a6lv2gk28().s[242]++;
          if (val.constructor === Map) {
            cov_1a6lv2gk28().b[41][0]++;
            cov_1a6lv2gk28().s[243]++;
            if (value !== _stellarBase.xdr.ScSpecType.scSpecTypeMap().value) {
              cov_1a6lv2gk28().b[42][0]++;
              cov_1a6lv2gk28().s[244]++;
              throw new TypeError(`Type ${ty} was not map, but value was Map`);
            } else {
              cov_1a6lv2gk28().b[42][1]++;
            }
            const scMap = (cov_1a6lv2gk28().s[245]++, ty.map());
            const map = (cov_1a6lv2gk28().s[246]++, val);
            const entries = (cov_1a6lv2gk28().s[247]++, []);
            const values = (cov_1a6lv2gk28().s[248]++, map.entries());
            let res = (cov_1a6lv2gk28().s[249]++, values.next());
            cov_1a6lv2gk28().s[250]++;
            while (!res.done) {
              const [k, v] = (cov_1a6lv2gk28().s[251]++, res.value);
              const key = (cov_1a6lv2gk28().s[252]++, this.nativeToScVal(k, scMap.keyType()));
              const mapval = (cov_1a6lv2gk28().s[253]++, this.nativeToScVal(v, scMap.valueType()));
              cov_1a6lv2gk28().s[254]++;
              entries.push(new _stellarBase.xdr.ScMapEntry({
                key,
                val: mapval
              }));
              cov_1a6lv2gk28().s[255]++;
              res = values.next();
            }
            cov_1a6lv2gk28().s[256]++;
            return _stellarBase.xdr.ScVal.scvMap(entries);
          } else {
            cov_1a6lv2gk28().b[41][1]++;
          }
          cov_1a6lv2gk28().s[257]++;
          if (((cov_1a6lv2gk28().b[44][0]++, val.constructor?.name) ?? (cov_1a6lv2gk28().b[44][1]++, "")) !== "Object") {
            cov_1a6lv2gk28().b[43][0]++;
            cov_1a6lv2gk28().s[258]++;
            throw new TypeError(`cannot interpret ${val.constructor?.name} value as ScVal (${JSON.stringify(val)})`);
          } else {
            cov_1a6lv2gk28().b[43][1]++;
          }
          cov_1a6lv2gk28().s[259]++;
          throw new TypeError(`Received object ${val}  did not match the provided type ${ty}`);
        }
      case "number":
        cov_1a6lv2gk28().b[26][1]++;
      case "bigint":
        cov_1a6lv2gk28().b[26][2]++;
        {
          cov_1a6lv2gk28().s[260]++;
          switch (value) {
            case _stellarBase.xdr.ScSpecType.scSpecTypeU32().value:
              cov_1a6lv2gk28().b[45][0]++;
              cov_1a6lv2gk28().s[261]++;
              return _stellarBase.xdr.ScVal.scvU32(val);
            case _stellarBase.xdr.ScSpecType.scSpecTypeI32().value:
              cov_1a6lv2gk28().b[45][1]++;
              cov_1a6lv2gk28().s[262]++;
              return _stellarBase.xdr.ScVal.scvI32(val);
            case _stellarBase.xdr.ScSpecType.scSpecTypeU64().value:
              cov_1a6lv2gk28().b[45][2]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeI64().value:
              cov_1a6lv2gk28().b[45][3]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeU128().value:
              cov_1a6lv2gk28().b[45][4]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeI128().value:
              cov_1a6lv2gk28().b[45][5]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeU256().value:
              cov_1a6lv2gk28().b[45][6]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeI256().value:
              cov_1a6lv2gk28().b[45][7]++;
              {
                const intType = (cov_1a6lv2gk28().s[263]++, t.name.substring(10).toLowerCase());
                cov_1a6lv2gk28().s[264]++;
                return new _stellarBase.XdrLargeInt(intType, val).toScVal();
              }
            default:
              cov_1a6lv2gk28().b[45][8]++;
              cov_1a6lv2gk28().s[265]++;
              throw new TypeError(`invalid type (${ty}) specified for integer`);
          }
        }
      case "string":
        cov_1a6lv2gk28().b[26][3]++;
        cov_1a6lv2gk28().s[266]++;
        return stringToScVal(val, t);
      case "boolean":
        cov_1a6lv2gk28().b[26][4]++;
        {
          cov_1a6lv2gk28().s[267]++;
          if (value !== _stellarBase.xdr.ScSpecType.scSpecTypeBool().value) {
            cov_1a6lv2gk28().b[46][0]++;
            cov_1a6lv2gk28().s[268]++;
            throw TypeError(`Type ${ty} was not bool, but value was bool`);
          } else {
            cov_1a6lv2gk28().b[46][1]++;
          }
          cov_1a6lv2gk28().s[269]++;
          return _stellarBase.xdr.ScVal.scvBool(val);
        }
      case "undefined":
        cov_1a6lv2gk28().b[26][5]++;
        {
          cov_1a6lv2gk28().s[270]++;
          if (!ty) {
            cov_1a6lv2gk28().b[47][0]++;
            cov_1a6lv2gk28().s[271]++;
            return _stellarBase.xdr.ScVal.scvVoid();
          } else {
            cov_1a6lv2gk28().b[47][1]++;
          }
          cov_1a6lv2gk28().s[272]++;
          switch (value) {
            case _stellarBase.xdr.ScSpecType.scSpecTypeVoid().value:
              cov_1a6lv2gk28().b[48][0]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeOption().value:
              cov_1a6lv2gk28().b[48][1]++;
              cov_1a6lv2gk28().s[273]++;
              return _stellarBase.xdr.ScVal.scvVoid();
            default:
              cov_1a6lv2gk28().b[48][2]++;
              cov_1a6lv2gk28().s[274]++;
              throw new TypeError(`Type ${ty} was not void, but value was undefined`);
          }
        }
      case "function":
        cov_1a6lv2gk28().b[26][6]++;
        cov_1a6lv2gk28().s[275]++;
        // FIXME: Is this too helpful?
        return this.nativeToScVal(val(), ty);
      default:
        cov_1a6lv2gk28().b[26][7]++;
        cov_1a6lv2gk28().s[276]++;
        throw new TypeError(`failed to convert typeof ${typeof val} (${val})`);
    }
  }
  nativeToUdt(val, name) {
    cov_1a6lv2gk28().f[32]++;
    const entry = (cov_1a6lv2gk28().s[277]++, this.findEntry(name));
    cov_1a6lv2gk28().s[278]++;
    switch (entry.switch()) {
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0():
        cov_1a6lv2gk28().b[49][0]++;
        cov_1a6lv2gk28().s[279]++;
        if (typeof val !== "number") {
          cov_1a6lv2gk28().b[50][0]++;
          cov_1a6lv2gk28().s[280]++;
          throw new TypeError(`expected number for enum ${name}, but got ${typeof val}`);
        } else {
          cov_1a6lv2gk28().b[50][1]++;
        }
        cov_1a6lv2gk28().s[281]++;
        return this.nativeToEnum(val, entry.udtEnumV0());
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0():
        cov_1a6lv2gk28().b[49][1]++;
        cov_1a6lv2gk28().s[282]++;
        return this.nativeToStruct(val, entry.udtStructV0());
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0():
        cov_1a6lv2gk28().b[49][2]++;
        cov_1a6lv2gk28().s[283]++;
        return this.nativeToUnion(val, entry.udtUnionV0());
      default:
        cov_1a6lv2gk28().b[49][3]++;
        cov_1a6lv2gk28().s[284]++;
        throw new Error(`failed to parse udt ${name}`);
    }
  }
  nativeToUnion(val, union_) {
    cov_1a6lv2gk28().f[33]++;
    const entryName = (cov_1a6lv2gk28().s[285]++, val.tag);
    const caseFound = (cov_1a6lv2gk28().s[286]++, union_.cases().find(entry => {
      cov_1a6lv2gk28().f[34]++;
      const caseN = (cov_1a6lv2gk28().s[287]++, entry.value().name().toString());
      cov_1a6lv2gk28().s[288]++;
      return caseN === entryName;
    }));
    cov_1a6lv2gk28().s[289]++;
    if (!caseFound) {
      cov_1a6lv2gk28().b[51][0]++;
      cov_1a6lv2gk28().s[290]++;
      throw new TypeError(`no such enum entry: ${entryName} in ${union_}`);
    } else {
      cov_1a6lv2gk28().b[51][1]++;
    }
    const key = (cov_1a6lv2gk28().s[291]++, _stellarBase.xdr.ScVal.scvSymbol(entryName));
    cov_1a6lv2gk28().s[292]++;
    switch (caseFound.switch()) {
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0():
        cov_1a6lv2gk28().b[52][0]++;
        {
          cov_1a6lv2gk28().s[293]++;
          return _stellarBase.xdr.ScVal.scvVec([key]);
        }
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0():
        cov_1a6lv2gk28().b[52][1]++;
        {
          const types = (cov_1a6lv2gk28().s[294]++, caseFound.tupleCase().type());
          cov_1a6lv2gk28().s[295]++;
          if (Array.isArray(val.values)) {
            cov_1a6lv2gk28().b[53][0]++;
            cov_1a6lv2gk28().s[296]++;
            if (val.values.length !== types.length) {
              cov_1a6lv2gk28().b[54][0]++;
              cov_1a6lv2gk28().s[297]++;
              throw new TypeError(`union ${union_} expects ${types.length} values, but got ${val.values.length}`);
            } else {
              cov_1a6lv2gk28().b[54][1]++;
            }
            const scvals = (cov_1a6lv2gk28().s[298]++, val.values.map((v, i) => {
              cov_1a6lv2gk28().f[35]++;
              cov_1a6lv2gk28().s[299]++;
              return this.nativeToScVal(v, types[i]);
            }));
            cov_1a6lv2gk28().s[300]++;
            scvals.unshift(key);
            cov_1a6lv2gk28().s[301]++;
            return _stellarBase.xdr.ScVal.scvVec(scvals);
          } else {
            cov_1a6lv2gk28().b[53][1]++;
          }
          cov_1a6lv2gk28().s[302]++;
          throw new Error(`failed to parse union case ${caseFound} with ${val}`);
        }
      default:
        cov_1a6lv2gk28().b[52][2]++;
        cov_1a6lv2gk28().s[303]++;
        throw new Error(`failed to parse union ${union_} with ${val}`);
    }
  }
  nativeToStruct(val, struct) {
    cov_1a6lv2gk28().f[36]++;
    const fields = (cov_1a6lv2gk28().s[304]++, struct.fields());
    cov_1a6lv2gk28().s[305]++;
    if (fields.some(isNumeric)) {
      cov_1a6lv2gk28().b[55][0]++;
      cov_1a6lv2gk28().s[306]++;
      if (!fields.every(isNumeric)) {
        cov_1a6lv2gk28().b[56][0]++;
        cov_1a6lv2gk28().s[307]++;
        throw new Error("mixed numeric and non-numeric field names are not allowed");
      } else {
        cov_1a6lv2gk28().b[56][1]++;
      }
      cov_1a6lv2gk28().s[308]++;
      return _stellarBase.xdr.ScVal.scvVec(fields.map((_, i) => {
        cov_1a6lv2gk28().f[37]++;
        cov_1a6lv2gk28().s[309]++;
        return this.nativeToScVal(val[i], fields[i].type());
      }));
    } else {
      cov_1a6lv2gk28().b[55][1]++;
    }
    cov_1a6lv2gk28().s[310]++;
    return _stellarBase.xdr.ScVal.scvMap(fields.map(field => {
      cov_1a6lv2gk28().f[38]++;
      const name = (cov_1a6lv2gk28().s[311]++, field.name().toString());
      cov_1a6lv2gk28().s[312]++;
      return new _stellarBase.xdr.ScMapEntry({
        key: this.nativeToScVal(name, _stellarBase.xdr.ScSpecTypeDef.scSpecTypeSymbol()),
        val: this.nativeToScVal(val[name], field.type())
      });
    }));
  }
  nativeToEnum(val, enum_) {
    cov_1a6lv2gk28().f[39]++;
    cov_1a6lv2gk28().s[313]++;
    if (enum_.cases().some(entry => {
      cov_1a6lv2gk28().f[40]++;
      cov_1a6lv2gk28().s[314]++;
      return entry.value() === val;
    })) {
      cov_1a6lv2gk28().b[57][0]++;
      cov_1a6lv2gk28().s[315]++;
      return _stellarBase.xdr.ScVal.scvU32(val);
    } else {
      cov_1a6lv2gk28().b[57][1]++;
    }
    cov_1a6lv2gk28().s[316]++;
    throw new TypeError(`no such enum entry: ${val} in ${enum_}`);
  }

  /**
   * Converts an base64 encoded ScVal back to a native JS value based on the given type.
   *
   * @param {string} scv the base64 encoded ScVal
   * @param {xdr.ScSpecTypeDef} typeDef the expected type
   * @returns {any} the converted native JS value
   *
   * @throws {Error} if ScVal cannot be converted to the given type
   */
  scValStrToNative(scv, typeDef) {
    cov_1a6lv2gk28().f[41]++;
    cov_1a6lv2gk28().s[317]++;
    return this.scValToNative(_stellarBase.xdr.ScVal.fromXDR(scv, "base64"), typeDef);
  }

  /**
   * Converts an ScVal back to a native JS value based on the given type.
   *
   * @param {xdr.ScVal} scv the ScVal
   * @param {xdr.ScSpecTypeDef} typeDef the expected type
   * @returns {any} the converted native JS value
   *
   * @throws {Error} if ScVal cannot be converted to the given type
   */
  scValToNative(scv, typeDef) {
    cov_1a6lv2gk28().f[42]++;
    const t = (cov_1a6lv2gk28().s[318]++, typeDef.switch());
    const value = (cov_1a6lv2gk28().s[319]++, t.value);
    cov_1a6lv2gk28().s[320]++;
    if (value === _stellarBase.xdr.ScSpecType.scSpecTypeUdt().value) {
      cov_1a6lv2gk28().b[58][0]++;
      cov_1a6lv2gk28().s[321]++;
      return this.scValUdtToNative(scv, typeDef.udt());
    } else {
      cov_1a6lv2gk28().b[58][1]++;
    }
    /* eslint-disable no-fallthrough*/
    // we use the verbose xdr.ScValType.<type>.value form here because it's faster
    // than string comparisons and the underlying constants never need to be
    // updated
    cov_1a6lv2gk28().s[322]++;
    switch (scv.switch().value) {
      case _stellarBase.xdr.ScValType.scvVoid().value:
        cov_1a6lv2gk28().b[59][0]++;
        cov_1a6lv2gk28().s[323]++;
        return undefined;

      // these can be converted to bigints directly
      case _stellarBase.xdr.ScValType.scvU64().value:
        cov_1a6lv2gk28().b[59][1]++;
      case _stellarBase.xdr.ScValType.scvI64().value:
        cov_1a6lv2gk28().b[59][2]++;
      // these can be parsed by internal abstractions note that this can also
      // handle the above two cases, but it's not as efficient (another
      // type-check, parsing, etc.)
      case _stellarBase.xdr.ScValType.scvU128().value:
        cov_1a6lv2gk28().b[59][3]++;
      case _stellarBase.xdr.ScValType.scvI128().value:
        cov_1a6lv2gk28().b[59][4]++;
      case _stellarBase.xdr.ScValType.scvU256().value:
        cov_1a6lv2gk28().b[59][5]++;
      case _stellarBase.xdr.ScValType.scvI256().value:
        cov_1a6lv2gk28().b[59][6]++;
        cov_1a6lv2gk28().s[324]++;
        return (0, _stellarBase.scValToBigInt)(scv);
      case _stellarBase.xdr.ScValType.scvVec().value:
        cov_1a6lv2gk28().b[59][7]++;
        {
          cov_1a6lv2gk28().s[325]++;
          if (value === _stellarBase.xdr.ScSpecType.scSpecTypeVec().value) {
            cov_1a6lv2gk28().b[60][0]++;
            const vec = (cov_1a6lv2gk28().s[326]++, typeDef.vec());
            cov_1a6lv2gk28().s[327]++;
            return ((cov_1a6lv2gk28().b[61][0]++, scv.vec()) ?? (cov_1a6lv2gk28().b[61][1]++, [])).map(elm => {
              cov_1a6lv2gk28().f[43]++;
              cov_1a6lv2gk28().s[328]++;
              return this.scValToNative(elm, vec.elementType());
            });
          } else {
            cov_1a6lv2gk28().b[60][1]++;
          }
          cov_1a6lv2gk28().s[329]++;
          if (value === _stellarBase.xdr.ScSpecType.scSpecTypeTuple().value) {
            cov_1a6lv2gk28().b[62][0]++;
            const tuple = (cov_1a6lv2gk28().s[330]++, typeDef.tuple());
            const valTypes = (cov_1a6lv2gk28().s[331]++, tuple.valueTypes());
            cov_1a6lv2gk28().s[332]++;
            return ((cov_1a6lv2gk28().b[63][0]++, scv.vec()) ?? (cov_1a6lv2gk28().b[63][1]++, [])).map((elm, i) => {
              cov_1a6lv2gk28().f[44]++;
              cov_1a6lv2gk28().s[333]++;
              return this.scValToNative(elm, valTypes[i]);
            });
          } else {
            cov_1a6lv2gk28().b[62][1]++;
          }
          cov_1a6lv2gk28().s[334]++;
          throw new TypeError(`Type ${typeDef} was not vec, but ${scv} is`);
        }
      case _stellarBase.xdr.ScValType.scvAddress().value:
        cov_1a6lv2gk28().b[59][8]++;
        cov_1a6lv2gk28().s[335]++;
        return _stellarBase.Address.fromScVal(scv).toString();
      case _stellarBase.xdr.ScValType.scvMap().value:
        cov_1a6lv2gk28().b[59][9]++;
        {
          const map = (cov_1a6lv2gk28().s[336]++, (cov_1a6lv2gk28().b[64][0]++, scv.map()) ?? (cov_1a6lv2gk28().b[64][1]++, []));
          cov_1a6lv2gk28().s[337]++;
          if (value === _stellarBase.xdr.ScSpecType.scSpecTypeMap().value) {
            cov_1a6lv2gk28().b[65][0]++;
            const typed = (cov_1a6lv2gk28().s[338]++, typeDef.map());
            const keyType = (cov_1a6lv2gk28().s[339]++, typed.keyType());
            const valueType = (cov_1a6lv2gk28().s[340]++, typed.valueType());
            const res = (cov_1a6lv2gk28().s[341]++, map.map(entry => {
              cov_1a6lv2gk28().f[45]++;
              cov_1a6lv2gk28().s[342]++;
              return [this.scValToNative(entry.key(), keyType), this.scValToNative(entry.val(), valueType)];
            }));
            cov_1a6lv2gk28().s[343]++;
            return res;
          } else {
            cov_1a6lv2gk28().b[65][1]++;
          }
          cov_1a6lv2gk28().s[344]++;
          throw new TypeError(`ScSpecType ${t.name} was not map, but ${JSON.stringify(scv, null, 2)} is`);
        }

      // these return the primitive type directly
      case _stellarBase.xdr.ScValType.scvBool().value:
        cov_1a6lv2gk28().b[59][10]++;
      case _stellarBase.xdr.ScValType.scvU32().value:
        cov_1a6lv2gk28().b[59][11]++;
      case _stellarBase.xdr.ScValType.scvI32().value:
        cov_1a6lv2gk28().b[59][12]++;
      case _stellarBase.xdr.ScValType.scvBytes().value:
        cov_1a6lv2gk28().b[59][13]++;
        cov_1a6lv2gk28().s[345]++;
        return scv.value();
      case _stellarBase.xdr.ScValType.scvString().value:
        cov_1a6lv2gk28().b[59][14]++;
      case _stellarBase.xdr.ScValType.scvSymbol().value:
        cov_1a6lv2gk28().b[59][15]++;
        {
          cov_1a6lv2gk28().s[346]++;
          if ((cov_1a6lv2gk28().b[67][0]++, value !== _stellarBase.xdr.ScSpecType.scSpecTypeString().value) && (cov_1a6lv2gk28().b[67][1]++, value !== _stellarBase.xdr.ScSpecType.scSpecTypeSymbol().value)) {
            cov_1a6lv2gk28().b[66][0]++;
            cov_1a6lv2gk28().s[347]++;
            throw new Error(`ScSpecType ${t.name} was not string or symbol, but ${JSON.stringify(scv, null, 2)} is`);
          } else {
            cov_1a6lv2gk28().b[66][1]++;
          }
          cov_1a6lv2gk28().s[348]++;
          return scv.value()?.toString();
        }

      // these can be converted to bigint
      case _stellarBase.xdr.ScValType.scvTimepoint().value:
        cov_1a6lv2gk28().b[59][16]++;
      case _stellarBase.xdr.ScValType.scvDuration().value:
        cov_1a6lv2gk28().b[59][17]++;
        cov_1a6lv2gk28().s[349]++;
        return (0, _stellarBase.scValToBigInt)(_stellarBase.xdr.ScVal.scvU64(scv.u64()));

      // in the fallthrough case, just return the underlying value directly
      default:
        cov_1a6lv2gk28().b[59][18]++;
        cov_1a6lv2gk28().s[350]++;
        throw new TypeError(`failed to convert ${JSON.stringify(scv, null, 2)} to native type from type ${t.name}`);
    }
    /* eslint-enable no-fallthrough*/
  }
  scValUdtToNative(scv, udt) {
    cov_1a6lv2gk28().f[46]++;
    const entry = (cov_1a6lv2gk28().s[351]++, this.findEntry(udt.name().toString()));
    cov_1a6lv2gk28().s[352]++;
    switch (entry.switch()) {
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0():
        cov_1a6lv2gk28().b[68][0]++;
        cov_1a6lv2gk28().s[353]++;
        return this.enumToNative(scv);
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0():
        cov_1a6lv2gk28().b[68][1]++;
        cov_1a6lv2gk28().s[354]++;
        return this.structToNative(scv, entry.udtStructV0());
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0():
        cov_1a6lv2gk28().b[68][2]++;
        cov_1a6lv2gk28().s[355]++;
        return this.unionToNative(scv, entry.udtUnionV0());
      default:
        cov_1a6lv2gk28().b[68][3]++;
        cov_1a6lv2gk28().s[356]++;
        throw new Error(`failed to parse udt ${udt.name().toString()}: ${entry}`);
    }
  }
  unionToNative(val, udt) {
    cov_1a6lv2gk28().f[47]++;
    const vec = (cov_1a6lv2gk28().s[357]++, val.vec());
    cov_1a6lv2gk28().s[358]++;
    if (!vec) {
      cov_1a6lv2gk28().b[69][0]++;
      cov_1a6lv2gk28().s[359]++;
      throw new Error(`${JSON.stringify(val, null, 2)} is not a vec`);
    } else {
      cov_1a6lv2gk28().b[69][1]++;
    }
    cov_1a6lv2gk28().s[360]++;
    if ((cov_1a6lv2gk28().b[71][0]++, vec.length === 0) && (cov_1a6lv2gk28().b[71][1]++, udt.cases.length !== 0)) {
      cov_1a6lv2gk28().b[70][0]++;
      cov_1a6lv2gk28().s[361]++;
      throw new Error(`${val} has length 0, but the there are at least one case in the union`);
    } else {
      cov_1a6lv2gk28().b[70][1]++;
    }
    const name = (cov_1a6lv2gk28().s[362]++, vec[0].sym().toString());
    cov_1a6lv2gk28().s[363]++;
    if (vec[0].switch().value !== _stellarBase.xdr.ScValType.scvSymbol().value) {
      cov_1a6lv2gk28().b[72][0]++;
      cov_1a6lv2gk28().s[364]++;
      throw new Error(`{vec[0]} is not a symbol`);
    } else {
      cov_1a6lv2gk28().b[72][1]++;
    }
    const entry = (cov_1a6lv2gk28().s[365]++, udt.cases().find(findCase(name)));
    cov_1a6lv2gk28().s[366]++;
    if (!entry) {
      cov_1a6lv2gk28().b[73][0]++;
      cov_1a6lv2gk28().s[367]++;
      throw new Error(`failed to find entry ${name} in union {udt.name().toString()}`);
    } else {
      cov_1a6lv2gk28().b[73][1]++;
    }
    const res = (cov_1a6lv2gk28().s[368]++, {
      tag: name
    });
    cov_1a6lv2gk28().s[369]++;
    if (entry.switch().value === _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value) {
      cov_1a6lv2gk28().b[74][0]++;
      const tuple = (cov_1a6lv2gk28().s[370]++, entry.tupleCase());
      const ty = (cov_1a6lv2gk28().s[371]++, tuple.type());
      const values = (cov_1a6lv2gk28().s[372]++, ty.map((e, i) => {
        cov_1a6lv2gk28().f[48]++;
        cov_1a6lv2gk28().s[373]++;
        return this.scValToNative(vec[i + 1], e);
      }));
      cov_1a6lv2gk28().s[374]++;
      res.values = values;
    } else {
      cov_1a6lv2gk28().b[74][1]++;
    }
    cov_1a6lv2gk28().s[375]++;
    return res;
  }
  structToNative(val, udt) {
    cov_1a6lv2gk28().f[49]++;
    const res = (cov_1a6lv2gk28().s[376]++, {});
    const fields = (cov_1a6lv2gk28().s[377]++, udt.fields());
    cov_1a6lv2gk28().s[378]++;
    if (fields.some(isNumeric)) {
      cov_1a6lv2gk28().b[75][0]++;
      const r = (cov_1a6lv2gk28().s[379]++, val.vec()?.map((entry, i) => {
        cov_1a6lv2gk28().f[50]++;
        cov_1a6lv2gk28().s[380]++;
        return this.scValToNative(entry, fields[i].type());
      }));
      cov_1a6lv2gk28().s[381]++;
      return r;
    } else {
      cov_1a6lv2gk28().b[75][1]++;
    }
    cov_1a6lv2gk28().s[382]++;
    val.map()?.forEach((entry, i) => {
      cov_1a6lv2gk28().f[51]++;
      const field = (cov_1a6lv2gk28().s[383]++, fields[i]);
      cov_1a6lv2gk28().s[384]++;
      res[field.name().toString()] = this.scValToNative(entry.val(), field.type());
    });
    cov_1a6lv2gk28().s[385]++;
    return res;
  }
  enumToNative(scv) {
    cov_1a6lv2gk28().f[52]++;
    cov_1a6lv2gk28().s[386]++;
    if (scv.switch().value !== _stellarBase.xdr.ScValType.scvU32().value) {
      cov_1a6lv2gk28().b[76][0]++;
      cov_1a6lv2gk28().s[387]++;
      throw new Error(`Enum must have a u32 value`);
    } else {
      cov_1a6lv2gk28().b[76][1]++;
    }
    const num = (cov_1a6lv2gk28().s[388]++, scv.u32());
    cov_1a6lv2gk28().s[389]++;
    return num;
  }

  /**
   * Gets the XDR error cases from the spec.
   *
   * @returns {xdr.ScSpecFunctionV0[]} all contract functions
   *
   */
  errorCases() {
    cov_1a6lv2gk28().f[53]++;
    cov_1a6lv2gk28().s[390]++;
    return this.entries.filter(entry => {
      cov_1a6lv2gk28().f[54]++;
      cov_1a6lv2gk28().s[391]++;
      return entry.switch().value === _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtErrorEnumV0().value;
    }).flatMap(entry => {
      cov_1a6lv2gk28().f[55]++;
      cov_1a6lv2gk28().s[392]++;
      return entry.value().cases();
    });
  }

  /**
   * Converts the contract spec to a JSON schema.
   *
   * If `funcName` is provided, the schema will be a reference to the function schema.
   *
   * @param {string} [funcName] the name of the function to convert
   * @returns {JSONSchema7} the converted JSON schema
   *
   * @throws {Error} if the contract spec is invalid
   */
  jsonSchema(funcName) {
    cov_1a6lv2gk28().f[56]++;
    const definitions = (cov_1a6lv2gk28().s[393]++, {});
    /* eslint-disable default-case */
    cov_1a6lv2gk28().s[394]++;
    this.entries.forEach(entry => {
      cov_1a6lv2gk28().f[57]++;
      cov_1a6lv2gk28().s[395]++;
      switch (entry.switch().value) {
        case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0().value:
          cov_1a6lv2gk28().b[77][0]++;
          {
            const udt = (cov_1a6lv2gk28().s[396]++, entry.udtEnumV0());
            cov_1a6lv2gk28().s[397]++;
            definitions[udt.name().toString()] = enumToJsonSchema(udt);
            cov_1a6lv2gk28().s[398]++;
            break;
          }
        case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0().value:
          cov_1a6lv2gk28().b[77][1]++;
          {
            const udt = (cov_1a6lv2gk28().s[399]++, entry.udtStructV0());
            cov_1a6lv2gk28().s[400]++;
            definitions[udt.name().toString()] = structToJsonSchema(udt);
            cov_1a6lv2gk28().s[401]++;
            break;
          }
        case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0().value:
          cov_1a6lv2gk28().b[77][2]++;
          {
            const udt = (cov_1a6lv2gk28().s[402]++, entry.udtUnionV0());
            cov_1a6lv2gk28().s[403]++;
            definitions[udt.name().toString()] = unionToJsonSchema(udt);
            cov_1a6lv2gk28().s[404]++;
            break;
          }
        case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value:
          cov_1a6lv2gk28().b[77][3]++;
          {
            const fn = (cov_1a6lv2gk28().s[405]++, entry.functionV0());
            const fnName = (cov_1a6lv2gk28().s[406]++, fn.name().toString());
            const {
              input
            } = (cov_1a6lv2gk28().s[407]++, functionToJsonSchema(fn));
            // @ts-ignore
            cov_1a6lv2gk28().s[408]++;
            definitions[fnName] = input;
            cov_1a6lv2gk28().s[409]++;
            break;
          }
        case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtErrorEnumV0().value:
          cov_1a6lv2gk28().b[77][4]++;
          {
            // console.debug("Error enums not supported yet");
          }
      }
    });
    /* eslint-enable default-case */
    const res = (cov_1a6lv2gk28().s[410]++, {
      $schema: "http://json-schema.org/draft-07/schema#",
      definitions: {
        ...PRIMITIVE_DEFINITONS,
        ...definitions
      }
    });
    cov_1a6lv2gk28().s[411]++;
    if (funcName) {
      cov_1a6lv2gk28().b[78][0]++;
      cov_1a6lv2gk28().s[412]++;
      res.$ref = `#/definitions/${funcName}`;
    } else {
      cov_1a6lv2gk28().b[78][1]++;
    }
    cov_1a6lv2gk28().s[413]++;
    return res;
  }
}
exports.Spec = Spec;