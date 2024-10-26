"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildChallengeTx = buildChallengeTx;
exports.gatherTxSigners = gatherTxSigners;
exports.readChallengeTx = readChallengeTx;
exports.verifyChallengeTxSigners = verifyChallengeTxSigners;
exports.verifyChallengeTxThreshold = verifyChallengeTxThreshold;
exports.verifyTxSignedBy = verifyTxSignedBy;
var _randombytes = _interopRequireDefault(require("randombytes"));
var _stellarBase = require("@stellar/stellar-base");
var _utils = require("../utils");
var _errors = require("./errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_2eolajk6a0() {
  var path = "/mnt/g/stellar-sdk/src/webauth/utils.ts";
  var hash = "09570637b44eabdd68c590f78014a5fa6aa4651a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/webauth/utils.ts",
    statementMap: {
      "0": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "1": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 77
        }
      },
      "2": {
        start: {
          line: 84,
          column: 18
        },
        end: {
          line: 84,
          column: 62
        }
      },
      "3": {
        start: {
          line: 85,
          column: 14
        },
        end: {
          line: 85,
          column: 43
        }
      },
      "4": {
        start: {
          line: 92,
          column: 16
        },
        end: {
          line: 92,
          column: 50
        }
      },
      "5": {
        start: {
          line: 94,
          column: 18
        },
        end: {
          line: 115,
          column: 5
        }
      },
      "6": {
        start: {
          line: 117,
          column: 2
        },
        end: {
          line: 128,
          column: 3
        }
      },
      "7": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 120,
          column: 5
        }
      },
      "8": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 78
        }
      },
      "9": {
        start: {
          line: 121,
          column: 4
        },
        end: {
          line: 127,
          column: 6
        }
      },
      "10": {
        start: {
          line: 130,
          column: 2
        },
        end: {
          line: 132,
          column: 3
        }
      },
      "11": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 131,
          column: 35
        }
      },
      "12": {
        start: {
          line: 134,
          column: 22
        },
        end: {
          line: 134,
          column: 37
        }
      },
      "13": {
        start: {
          line: 135,
          column: 2
        },
        end: {
          line: 135,
          column: 34
        }
      },
      "14": {
        start: {
          line: 137,
          column: 2
        },
        end: {
          line: 140,
          column: 16
        }
      },
      "15": {
        start: {
          line: 200,
          column: 2
        },
        end: {
          line: 204,
          column: 3
        }
      },
      "16": {
        start: {
          line: 201,
          column: 4
        },
        end: {
          line: 203,
          column: 6
        }
      },
      "17": {
        start: {
          line: 207,
          column: 2
        },
        end: {
          line: 220,
          column: 3
        }
      },
      "18": {
        start: {
          line: 208,
          column: 4
        },
        end: {
          line: 208,
          column: 66
        }
      },
      "19": {
        start: {
          line: 210,
          column: 4
        },
        end: {
          line: 216,
          column: 5
        }
      },
      "20": {
        start: {
          line: 211,
          column: 6
        },
        end: {
          line: 211,
          column: 75
        }
      },
      "21": {
        start: {
          line: 213,
          column: 6
        },
        end: {
          line: 215,
          column: 8
        }
      },
      "22": {
        start: {
          line: 217,
          column: 4
        },
        end: {
          line: 219,
          column: 6
        }
      },
      "23": {
        start: {
          line: 223,
          column: 19
        },
        end: {
          line: 223,
          column: 60
        }
      },
      "24": {
        start: {
          line: 225,
          column: 2
        },
        end: {
          line: 229,
          column: 3
        }
      },
      "25": {
        start: {
          line: 226,
          column: 4
        },
        end: {
          line: 228,
          column: 6
        }
      },
      "26": {
        start: {
          line: 232,
          column: 2
        },
        end: {
          line: 236,
          column: 3
        }
      },
      "27": {
        start: {
          line: 233,
          column: 4
        },
        end: {
          line: 235,
          column: 6
        }
      },
      "28": {
        start: {
          line: 239,
          column: 2
        },
        end: {
          line: 243,
          column: 3
        }
      },
      "29": {
        start: {
          line: 240,
          column: 4
        },
        end: {
          line: 242,
          column: 6
        }
      },
      "30": {
        start: {
          line: 245,
          column: 47
        },
        end: {
          line: 245,
          column: 69
        }
      },
      "31": {
        start: {
          line: 247,
          column: 2
        },
        end: {
          line: 251,
          column: 3
        }
      },
      "32": {
        start: {
          line: 248,
          column: 4
        },
        end: {
          line: 250,
          column: 6
        }
      },
      "33": {
        start: {
          line: 252,
          column: 34
        },
        end: {
          line: 252,
          column: 51
        }
      },
      "34": {
        start: {
          line: 254,
          column: 28
        },
        end: {
          line: 254,
          column: 32
        }
      },
      "35": {
        start: {
          line: 255,
          column: 2
        },
        end: {
          line: 267,
          column: 3
        }
      },
      "36": {
        start: {
          line: 256,
          column: 4
        },
        end: {
          line: 260,
          column: 5
        }
      },
      "37": {
        start: {
          line: 257,
          column: 6
        },
        end: {
          line: 259,
          column: 8
        }
      },
      "38": {
        start: {
          line: 261,
          column: 4
        },
        end: {
          line: 265,
          column: 5
        }
      },
      "39": {
        start: {
          line: 262,
          column: 6
        },
        end: {
          line: 264,
          column: 8
        }
      },
      "40": {
        start: {
          line: 266,
          column: 4
        },
        end: {
          line: 266,
          column: 44
        }
      },
      "41": {
        start: {
          line: 269,
          column: 2
        },
        end: {
          line: 273,
          column: 3
        }
      },
      "42": {
        start: {
          line: 270,
          column: 4
        },
        end: {
          line: 272,
          column: 6
        }
      },
      "43": {
        start: {
          line: 276,
          column: 2
        },
        end: {
          line: 283,
          column: 3
        }
      },
      "44": {
        start: {
          line: 280,
          column: 4
        },
        end: {
          line: 282,
          column: 6
        }
      },
      "45": {
        start: {
          line: 286,
          column: 2
        },
        end: {
          line: 288,
          column: 3
        }
      },
      "46": {
        start: {
          line: 287,
          column: 4
        },
        end: {
          line: 287,
          column: 67
        }
      },
      "47": {
        start: {
          line: 290,
          column: 2
        },
        end: {
          line: 294,
          column: 3
        }
      },
      "48": {
        start: {
          line: 291,
          column: 4
        },
        end: {
          line: 293,
          column: 6
        }
      },
      "49": {
        start: {
          line: 297,
          column: 2
        },
        end: {
          line: 301,
          column: 3
        }
      },
      "50": {
        start: {
          line: 298,
          column: 4
        },
        end: {
          line: 300,
          column: 6
        }
      },
      "51": {
        start: {
          line: 303,
          column: 2
        },
        end: {
          line: 307,
          column: 3
        }
      },
      "52": {
        start: {
          line: 304,
          column: 4
        },
        end: {
          line: 306,
          column: 6
        }
      },
      "53": {
        start: {
          line: 310,
          column: 2
        },
        end: {
          line: 314,
          column: 3
        }
      },
      "54": {
        start: {
          line: 311,
          column: 4
        },
        end: {
          line: 313,
          column: 6
        }
      },
      "55": {
        start: {
          line: 318,
          column: 2
        },
        end: {
          line: 330,
          column: 3
        }
      },
      "56": {
        start: {
          line: 319,
          column: 4
        },
        end: {
          line: 321,
          column: 5
        }
      },
      "57": {
        start: {
          line: 320,
          column: 6
        },
        end: {
          line: 320,
          column: 38
        }
      },
      "58": {
        start: {
          line: 322,
          column: 9
        },
        end: {
          line: 330,
          column: 3
        }
      },
      "59": {
        start: {
          line: 323,
          column: 4
        },
        end: {
          line: 325,
          column: 6
        }
      },
      "60": {
        start: {
          line: 324,
          column: 18
        },
        end: {
          line: 324,
          column: 53
        }
      },
      "61": {
        start: {
          line: 327,
          column: 4
        },
        end: {
          line: 329,
          column: 6
        }
      },
      "62": {
        start: {
          line: 332,
          column: 2
        },
        end: {
          line: 336,
          column: 3
        }
      },
      "63": {
        start: {
          line: 333,
          column: 4
        },
        end: {
          line: 335,
          column: 6
        }
      },
      "64": {
        start: {
          line: 339,
          column: 2
        },
        end: {
          line: 362,
          column: 3
        }
      },
      "65": {
        start: {
          line: 340,
          column: 4
        },
        end: {
          line: 344,
          column: 5
        }
      },
      "66": {
        start: {
          line: 341,
          column: 6
        },
        end: {
          line: 343,
          column: 8
        }
      },
      "67": {
        start: {
          line: 345,
          column: 4
        },
        end: {
          line: 349,
          column: 5
        }
      },
      "68": {
        start: {
          line: 346,
          column: 6
        },
        end: {
          line: 348,
          column: 8
        }
      },
      "69": {
        start: {
          line: 350,
          column: 4
        },
        end: {
          line: 361,
          column: 5
        }
      },
      "70": {
        start: {
          line: 351,
          column: 6
        },
        end: {
          line: 355,
          column: 7
        }
      },
      "71": {
        start: {
          line: 352,
          column: 8
        },
        end: {
          line: 354,
          column: 10
        }
      },
      "72": {
        start: {
          line: 356,
          column: 6
        },
        end: {
          line: 360,
          column: 7
        }
      },
      "73": {
        start: {
          line: 357,
          column: 8
        },
        end: {
          line: 359,
          column: 10
        }
      },
      "74": {
        start: {
          line: 364,
          column: 2
        },
        end: {
          line: 368,
          column: 3
        }
      },
      "75": {
        start: {
          line: 365,
          column: 4
        },
        end: {
          line: 367,
          column: 6
        }
      },
      "76": {
        start: {
          line: 370,
          column: 2
        },
        end: {
          line: 370,
          column: 71
        }
      },
      "77": {
        start: {
          line: 472,
          column: 18
        },
        end: {
          line: 472,
          column: 59
        }
      },
      "78": {
        start: {
          line: 472,
          column: 48
        },
        end: {
          line: 472,
          column: 58
        }
      },
      "79": {
        start: {
          line: 474,
          column: 23
        },
        end: {
          line: 481,
          column: 3
        }
      },
      "80": {
        start: {
          line: 483,
          column: 15
        },
        end: {
          line: 483,
          column: 16
        }
      },
      "81": {
        start: {
          line: 484,
          column: 2
        },
        end: {
          line: 488,
          column: 3
        }
      },
      "82": {
        start: {
          line: 486,
          column: 6
        },
        end: {
          line: 486,
          column: 62
        }
      },
      "83": {
        start: {
          line: 486,
          column: 32
        },
        end: {
          line: 486,
          column: 48
        }
      },
      "84": {
        start: {
          line: 487,
          column: 4
        },
        end: {
          line: 487,
          column: 24
        }
      },
      "85": {
        start: {
          line: 490,
          column: 2
        },
        end: {
          line: 494,
          column: 3
        }
      },
      "86": {
        start: {
          line: 491,
          column: 4
        },
        end: {
          line: 493,
          column: 6
        }
      },
      "87": {
        start: {
          line: 496,
          column: 2
        },
        end: {
          line: 496,
          column: 22
        }
      },
      "88": {
        start: {
          line: 579,
          column: 17
        },
        end: {
          line: 585,
          column: 3
        }
      },
      "89": {
        start: {
          line: 589,
          column: 2
        },
        end: {
          line: 596,
          column: 3
        }
      },
      "90": {
        start: {
          line: 590,
          column: 4
        },
        end: {
          line: 590,
          column: 54
        }
      },
      "91": {
        start: {
          line: 592,
          column: 4
        },
        end: {
          line: 595,
          column: 6
        }
      },
      "92": {
        start: {
          line: 600,
          column: 24
        },
        end: {
          line: 600,
          column: 41
        }
      },
      "93": {
        start: {
          line: 601,
          column: 2
        },
        end: {
          line: 617,
          column: 3
        }
      },
      "94": {
        start: {
          line: 607,
          column: 4
        },
        end: {
          line: 609,
          column: 5
        }
      },
      "95": {
        start: {
          line: 608,
          column: 6
        },
        end: {
          line: 608,
          column: 15
        }
      },
      "96": {
        start: {
          line: 612,
          column: 4
        },
        end: {
          line: 614,
          column: 5
        }
      },
      "97": {
        start: {
          line: 613,
          column: 6
        },
        end: {
          line: 613,
          column: 15
        }
      },
      "98": {
        start: {
          line: 616,
          column: 4
        },
        end: {
          line: 616,
          column: 30
        }
      },
      "99": {
        start: {
          line: 620,
          column: 2
        },
        end: {
          line: 624,
          column: 3
        }
      },
      "100": {
        start: {
          line: 621,
          column: 4
        },
        end: {
          line: 623,
          column: 6
        }
      },
      "101": {
        start: {
          line: 627,
          column: 2
        },
        end: {
          line: 636,
          column: 3
        }
      },
      "102": {
        start: {
          line: 628,
          column: 4
        },
        end: {
          line: 635,
          column: 5
        }
      },
      "103": {
        start: {
          line: 629,
          column: 6
        },
        end: {
          line: 633,
          column: 7
        }
      },
      "104": {
        start: {
          line: 630,
          column: 8
        },
        end: {
          line: 632,
          column: 10
        }
      },
      "105": {
        start: {
          line: 634,
          column: 6
        },
        end: {
          line: 634,
          column: 35
        }
      },
      "106": {
        start: {
          line: 642,
          column: 31
        },
        end: {
          line: 645,
          column: 3
        }
      },
      "107": {
        start: {
          line: 646,
          column: 2
        },
        end: {
          line: 648,
          column: 3
        }
      },
      "108": {
        start: {
          line: 647,
          column: 4
        },
        end: {
          line: 647,
          column: 38
        }
      },
      "109": {
        start: {
          line: 650,
          column: 33
        },
        end: {
          line: 650,
          column: 64
        }
      },
      "110": {
        start: {
          line: 652,
          column: 29
        },
        end: {
          line: 652,
          column: 34
        }
      },
      "111": {
        start: {
          line: 653,
          column: 39
        },
        end: {
          line: 653,
          column: 44
        }
      },
      "112": {
        start: {
          line: 654,
          column: 2
        },
        end: {
          line: 661,
          column: 3
        }
      },
      "113": {
        start: {
          line: 655,
          column: 4
        },
        end: {
          line: 657,
          column: 5
        }
      },
      "114": {
        start: {
          line: 656,
          column: 6
        },
        end: {
          line: 656,
          column: 34
        }
      },
      "115": {
        start: {
          line: 658,
          column: 4
        },
        end: {
          line: 660,
          column: 5
        }
      },
      "116": {
        start: {
          line: 659,
          column: 6
        },
        end: {
          line: 659,
          column: 44
        }
      },
      "117": {
        start: {
          line: 664,
          column: 2
        },
        end: {
          line: 668,
          column: 3
        }
      },
      "118": {
        start: {
          line: 665,
          column: 4
        },
        end: {
          line: 667,
          column: 6
        }
      },
      "119": {
        start: {
          line: 671,
          column: 2
        },
        end: {
          line: 676,
          column: 3
        }
      },
      "120": {
        start: {
          line: 672,
          column: 4
        },
        end: {
          line: 675,
          column: 6
        }
      },
      "121": {
        start: {
          line: 679,
          column: 2
        },
        end: {
          line: 683,
          column: 3
        }
      },
      "122": {
        start: {
          line: 680,
          column: 4
        },
        end: {
          line: 682,
          column: 6
        }
      },
      "123": {
        start: {
          line: 686,
          column: 2
        },
        end: {
          line: 690,
          column: 3
        }
      },
      "124": {
        start: {
          line: 687,
          column: 4
        },
        end: {
          line: 689,
          column: 6
        }
      },
      "125": {
        start: {
          line: 693,
          column: 2
        },
        end: {
          line: 693,
          column: 69
        }
      },
      "126": {
        start: {
          line: 694,
          column: 2
        },
        end: {
          line: 697,
          column: 3
        }
      },
      "127": {
        start: {
          line: 696,
          column: 4
        },
        end: {
          line: 696,
          column: 67
        }
      },
      "128": {
        start: {
          line: 699,
          column: 2
        },
        end: {
          line: 699,
          column: 22
        }
      },
      "129": {
        start: {
          line: 725,
          column: 2
        },
        end: {
          line: 725,
          column: 64
        }
      },
      "130": {
        start: {
          line: 754,
          column: 30
        },
        end: {
          line: 754,
          column: 48
        }
      },
      "131": {
        start: {
          line: 756,
          column: 23
        },
        end: {
          line: 756,
          column: 50
        }
      },
      "132": {
        start: {
          line: 757,
          column: 23
        },
        end: {
          line: 757,
          column: 40
        }
      },
      "133": {
        start: {
          line: 759,
          column: 2
        },
        end: {
          line: 786,
          column: 3
        }
      },
      "134": {
        start: {
          line: 760,
          column: 4
        },
        end: {
          line: 762,
          column: 5
        }
      },
      "135": {
        start: {
          line: 761,
          column: 6
        },
        end: {
          line: 761,
          column: 12
        }
      },
      "136": {
        start: {
          line: 765,
          column: 4
        },
        end: {
          line: 771,
          column: 5
        }
      },
      "137": {
        start: {
          line: 766,
          column: 6
        },
        end: {
          line: 766,
          column: 46
        }
      },
      "138": {
        start: {
          line: 768,
          column: 6
        },
        end: {
          line: 770,
          column: 8
        }
      },
      "139": {
        start: {
          line: 773,
          column: 4
        },
        end: {
          line: 785,
          column: 5
        }
      },
      "140": {
        start: {
          line: 773,
          column: 17
        },
        end: {
          line: 773,
          column: 18
        }
      },
      "141": {
        start: {
          line: 774,
          column: 21
        },
        end: {
          line: 774,
          column: 36
        }
      },
      "142": {
        start: {
          line: 776,
          column: 6
        },
        end: {
          line: 778,
          column: 7
        }
      },
      "143": {
        start: {
          line: 777,
          column: 8
        },
        end: {
          line: 777,
          column: 17
        }
      },
      "144": {
        start: {
          line: 780,
          column: 6
        },
        end: {
          line: 784,
          column: 7
        }
      },
      "145": {
        start: {
          line: 781,
          column: 8
        },
        end: {
          line: 781,
          column: 33
        }
      },
      "146": {
        start: {
          line: 782,
          column: 8
        },
        end: {
          line: 782,
          column: 34
        }
      },
      "147": {
        start: {
          line: 783,
          column: 8
        },
        end: {
          line: 783,
          column: 14
        }
      },
      "148": {
        start: {
          line: 788,
          column: 2
        },
        end: {
          line: 788,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "buildChallengeTx",
        decl: {
          start: {
            line: 69,
            column: 16
          },
          end: {
            line: 69,
            column: 32
          }
        },
        loc: {
          start: {
            line: 79,
            column: 10
          },
          end: {
            line: 141,
            column: 1
          }
        },
        line: 79
      },
      "1": {
        name: "readChallengeTx",
        decl: {
          start: {
            line: 188,
            column: 16
          },
          end: {
            line: 188,
            column: 31
          }
        },
        loc: {
          start: {
            line: 199,
            column: 2
          },
          end: {
            line: 371,
            column: 1
          }
        },
        line: 199
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 324,
            column: 7
          }
        },
        loc: {
          start: {
            line: 324,
            column: 18
          },
          end: {
            line: 324,
            column: 53
          }
        },
        line: 324
      },
      "3": {
        name: "verifyChallengeTxThreshold",
        decl: {
          start: {
            line: 463,
            column: 16
          },
          end: {
            line: 463,
            column: 42
          }
        },
        loc: {
          start: {
            line: 471,
            column: 12
          },
          end: {
            line: 497,
            column: 1
          }
        },
        line: 471
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 472,
            column: 36
          },
          end: {
            line: 472,
            column: 37
          }
        },
        loc: {
          start: {
            line: 472,
            column: 48
          },
          end: {
            line: 472,
            column: 58
          }
        },
        line: 472
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 486,
            column: 25
          },
          end: {
            line: 486,
            column: 26
          }
        },
        loc: {
          start: {
            line: 486,
            column: 32
          },
          end: {
            line: 486,
            column: 48
          }
        },
        line: 486
      },
      "6": {
        name: "verifyChallengeTxSigners",
        decl: {
          start: {
            line: 570,
            column: 16
          },
          end: {
            line: 570,
            column: 40
          }
        },
        loc: {
          start: {
            line: 577,
            column: 12
          },
          end: {
            line: 700,
            column: 1
          }
        },
        line: 577
      },
      "7": {
        name: "verifyTxSignedBy",
        decl: {
          start: {
            line: 721,
            column: 16
          },
          end: {
            line: 721,
            column: 32
          }
        },
        loc: {
          start: {
            line: 724,
            column: 11
          },
          end: {
            line: 726,
            column: 1
          }
        },
        line: 724
      },
      "8": {
        name: "gatherTxSigners",
        decl: {
          start: {
            line: 750,
            column: 16
          },
          end: {
            line: 750,
            column: 31
          }
        },
        loc: {
          start: {
            line: 753,
            column: 12
          },
          end: {
            line: 789,
            column: 1
          }
        },
        line: 753
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 73,
            column: 23
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 73,
            column: 20
          },
          end: {
            line: 73,
            column: 23
          }
        }],
        line: 73
      },
      "1": {
        loc: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 76,
            column: 28
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 76,
            column: 24
          },
          end: {
            line: 76,
            column: 28
          }
        }],
        line: 76
      },
      "2": {
        loc: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 77,
            column: 32
          },
          end: {
            line: 77,
            column: 36
          }
        }],
        line: 77
      },
      "3": {
        loc: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 40
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 78,
            column: 36
          },
          end: {
            line: 78,
            column: 40
          }
        }],
        line: 78
      },
      "4": {
        loc: {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 82,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 82,
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
        line: 80
      },
      "5": {
        loc: {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 80,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 80,
            column: 37
          }
        }, {
          start: {
            line: 80,
            column: 41
          },
          end: {
            line: 80,
            column: 45
          }
        }],
        line: 80
      },
      "6": {
        loc: {
          start: {
            line: 117,
            column: 2
          },
          end: {
            line: 128,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 117,
            column: 2
          },
          end: {
            line: 128,
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
        line: 117
      },
      "7": {
        loc: {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
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
        line: 118
      },
      "8": {
        loc: {
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 132,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 132,
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
        line: 130
      },
      "9": {
        loc: {
          start: {
            line: 200,
            column: 2
          },
          end: {
            line: 204,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 200,
            column: 2
          },
          end: {
            line: 204,
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
        line: 200
      },
      "10": {
        loc: {
          start: {
            line: 225,
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
            line: 225,
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
        line: 225
      },
      "11": {
        loc: {
          start: {
            line: 232,
            column: 2
          },
          end: {
            line: 236,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 232,
            column: 2
          },
          end: {
            line: 236,
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
        line: 232
      },
      "12": {
        loc: {
          start: {
            line: 239,
            column: 2
          },
          end: {
            line: 243,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 239,
            column: 2
          },
          end: {
            line: 243,
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
        line: 239
      },
      "13": {
        loc: {
          start: {
            line: 247,
            column: 2
          },
          end: {
            line: 251,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 247,
            column: 2
          },
          end: {
            line: 251,
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
        line: 247
      },
      "14": {
        loc: {
          start: {
            line: 255,
            column: 2
          },
          end: {
            line: 267,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 255,
            column: 2
          },
          end: {
            line: 267,
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
        line: 255
      },
      "15": {
        loc: {
          start: {
            line: 256,
            column: 4
          },
          end: {
            line: 260,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 256,
            column: 4
          },
          end: {
            line: 260,
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
        line: 256
      },
      "16": {
        loc: {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 265,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 265,
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
        line: 261
      },
      "17": {
        loc: {
          start: {
            line: 269,
            column: 2
          },
          end: {
            line: 273,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 269,
            column: 2
          },
          end: {
            line: 273,
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
        line: 269
      },
      "18": {
        loc: {
          start: {
            line: 276,
            column: 2
          },
          end: {
            line: 283,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 276,
            column: 2
          },
          end: {
            line: 283,
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
        line: 276
      },
      "19": {
        loc: {
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 278,
            column: 76
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 277,
            column: 4
          },
          end: {
            line: 277,
            column: 26
          }
        }, {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 278,
            column: 76
          }
        }],
        line: 277
      },
      "20": {
        loc: {
          start: {
            line: 286,
            column: 2
          },
          end: {
            line: 288,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 286,
            column: 2
          },
          end: {
            line: 288,
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
        line: 286
      },
      "21": {
        loc: {
          start: {
            line: 290,
            column: 2
          },
          end: {
            line: 294,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 290,
            column: 2
          },
          end: {
            line: 294,
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
        line: 290
      },
      "22": {
        loc: {
          start: {
            line: 297,
            column: 2
          },
          end: {
            line: 301,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 297,
            column: 2
          },
          end: {
            line: 301,
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
        line: 297
      },
      "23": {
        loc: {
          start: {
            line: 303,
            column: 2
          },
          end: {
            line: 307,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 303,
            column: 2
          },
          end: {
            line: 307,
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
        line: 303
      },
      "24": {
        loc: {
          start: {
            line: 310,
            column: 2
          },
          end: {
            line: 314,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 310,
            column: 2
          },
          end: {
            line: 314,
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
        line: 310
      },
      "25": {
        loc: {
          start: {
            line: 318,
            column: 2
          },
          end: {
            line: 330,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 318,
            column: 2
          },
          end: {
            line: 330,
            column: 3
          }
        }, {
          start: {
            line: 322,
            column: 9
          },
          end: {
            line: 330,
            column: 3
          }
        }],
        line: 318
      },
      "26": {
        loc: {
          start: {
            line: 319,
            column: 4
          },
          end: {
            line: 321,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 319,
            column: 4
          },
          end: {
            line: 321,
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
        line: 319
      },
      "27": {
        loc: {
          start: {
            line: 322,
            column: 9
          },
          end: {
            line: 330,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 322,
            column: 9
          },
          end: {
            line: 330,
            column: 3
          }
        }, {
          start: {
            line: 326,
            column: 9
          },
          end: {
            line: 330,
            column: 3
          }
        }],
        line: 322
      },
      "28": {
        loc: {
          start: {
            line: 332,
            column: 2
          },
          end: {
            line: 336,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 332,
            column: 2
          },
          end: {
            line: 336,
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
        line: 332
      },
      "29": {
        loc: {
          start: {
            line: 340,
            column: 4
          },
          end: {
            line: 344,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 340,
            column: 4
          },
          end: {
            line: 344,
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
        line: 340
      },
      "30": {
        loc: {
          start: {
            line: 345,
            column: 4
          },
          end: {
            line: 349,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 345,
            column: 4
          },
          end: {
            line: 349,
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
        line: 345
      },
      "31": {
        loc: {
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 345,
            column: 68
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 345,
            column: 37
          }
        }, {
          start: {
            line: 345,
            column: 41
          },
          end: {
            line: 345,
            column: 68
          }
        }],
        line: 345
      },
      "32": {
        loc: {
          start: {
            line: 350,
            column: 4
          },
          end: {
            line: 361,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 350,
            column: 4
          },
          end: {
            line: 361,
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
        line: 350
      },
      "33": {
        loc: {
          start: {
            line: 351,
            column: 6
          },
          end: {
            line: 355,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 351,
            column: 6
          },
          end: {
            line: 355,
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
        line: 351
      },
      "34": {
        loc: {
          start: {
            line: 356,
            column: 6
          },
          end: {
            line: 360,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 356,
            column: 6
          },
          end: {
            line: 360,
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
        line: 356
      },
      "35": {
        loc: {
          start: {
            line: 364,
            column: 2
          },
          end: {
            line: 368,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 364,
            column: 2
          },
          end: {
            line: 368,
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
        line: 364
      },
      "36": {
        loc: {
          start: {
            line: 486,
            column: 6
          },
          end: {
            line: 486,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 486,
            column: 6
          },
          end: {
            line: 486,
            column: 57
          }
        }, {
          start: {
            line: 486,
            column: 61
          },
          end: {
            line: 486,
            column: 62
          }
        }],
        line: 486
      },
      "37": {
        loc: {
          start: {
            line: 490,
            column: 2
          },
          end: {
            line: 494,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 490,
            column: 2
          },
          end: {
            line: 494,
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
        line: 490
      },
      "38": {
        loc: {
          start: {
            line: 607,
            column: 4
          },
          end: {
            line: 609,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 607,
            column: 4
          },
          end: {
            line: 609,
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
        line: 607
      },
      "39": {
        loc: {
          start: {
            line: 612,
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
            line: 612,
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
        line: 612
      },
      "40": {
        loc: {
          start: {
            line: 620,
            column: 2
          },
          end: {
            line: 624,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 620,
            column: 2
          },
          end: {
            line: 624,
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
        line: 620
      },
      "41": {
        loc: {
          start: {
            line: 628,
            column: 4
          },
          end: {
            line: 635,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 628,
            column: 4
          },
          end: {
            line: 635,
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
        line: 628
      },
      "42": {
        loc: {
          start: {
            line: 628,
            column: 8
          },
          end: {
            line: 628,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 628,
            column: 8
          },
          end: {
            line: 628,
            column: 32
          }
        }, {
          start: {
            line: 628,
            column: 36
          },
          end: {
            line: 628,
            column: 63
          }
        }],
        line: 628
      },
      "43": {
        loc: {
          start: {
            line: 629,
            column: 6
          },
          end: {
            line: 633,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 629,
            column: 6
          },
          end: {
            line: 633,
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
        line: 629
      },
      "44": {
        loc: {
          start: {
            line: 646,
            column: 2
          },
          end: {
            line: 648,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 646,
            column: 2
          },
          end: {
            line: 648,
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
        line: 646
      },
      "45": {
        loc: {
          start: {
            line: 655,
            column: 4
          },
          end: {
            line: 657,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 655,
            column: 4
          },
          end: {
            line: 657,
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
        line: 655
      },
      "46": {
        loc: {
          start: {
            line: 658,
            column: 4
          },
          end: {
            line: 660,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 658,
            column: 4
          },
          end: {
            line: 660,
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
        line: 658
      },
      "47": {
        loc: {
          start: {
            line: 664,
            column: 2
          },
          end: {
            line: 668,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 664,
            column: 2
          },
          end: {
            line: 668,
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
        line: 664
      },
      "48": {
        loc: {
          start: {
            line: 671,
            column: 2
          },
          end: {
            line: 676,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 671,
            column: 2
          },
          end: {
            line: 676,
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
        line: 671
      },
      "49": {
        loc: {
          start: {
            line: 671,
            column: 6
          },
          end: {
            line: 671,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 671,
            column: 6
          },
          end: {
            line: 671,
            column: 22
          }
        }, {
          start: {
            line: 671,
            column: 26
          },
          end: {
            line: 671,
            column: 57
          }
        }],
        line: 671
      },
      "50": {
        loc: {
          start: {
            line: 679,
            column: 2
          },
          end: {
            line: 683,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 679,
            column: 2
          },
          end: {
            line: 683,
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
        line: 679
      },
      "51": {
        loc: {
          start: {
            line: 686,
            column: 2
          },
          end: {
            line: 690,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 686,
            column: 2
          },
          end: {
            line: 690,
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
        line: 686
      },
      "52": {
        loc: {
          start: {
            line: 694,
            column: 2
          },
          end: {
            line: 697,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 694,
            column: 2
          },
          end: {
            line: 697,
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
        line: 694
      },
      "53": {
        loc: {
          start: {
            line: 760,
            column: 4
          },
          end: {
            line: 762,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 760,
            column: 4
          },
          end: {
            line: 762,
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
        line: 760
      },
      "54": {
        loc: {
          start: {
            line: 776,
            column: 6
          },
          end: {
            line: 778,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 776,
            column: 6
          },
          end: {
            line: 778,
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
        line: 776
      },
      "55": {
        loc: {
          start: {
            line: 780,
            column: 6
          },
          end: {
            line: 784,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 780,
            column: 6
          },
          end: {
            line: 784,
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
        line: 780
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
      "148": 0
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
      "1": [0],
      "2": [0],
      "3": [0],
      "4": [0, 0],
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
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0],
      "55": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "09570637b44eabdd68c590f78014a5fa6aa4651a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2eolajk6a0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2eolajk6a0();
/**
 * Stellar Web Authentication
 * @module WebAuth
 * @see {@link https://stellar.org/protocol-10 | SEP-10 Specification}
 */
/**
 * Returns a valid {@link https://stellar.org/protocol/sep-10 | SEP-10}
 * challenge transaction which you can use for Stellar Web Authentication.
 *
 * @param {Keypair} serverKeypair Keypair for server's signing account.
 * @param {string} clientAccountID The stellar account (G...) or muxed account
 *    (M...) that the wallet wishes to authenticate with the server.
 * @param {string} homeDomain The fully qualified domain name of the service
 *    requiring authentication
 * @param {number} [timeout=300] Challenge duration (default to 5 minutes).
 * @param {string} networkPassphrase The network passphrase. If you pass this
 *    argument then timeout is required.
 * @param {string} webAuthDomain The fully qualified domain name of the service
 *    issuing the challenge.
 * @param {string} [memo] The memo to attach to the challenge transaction. The
 *    memo must be of type `id`. If the `clientaccountID` is a muxed account,
 *    memos cannot be used.
 * @param {string} [clientDomain] The fully qualified domain of the client
 *    requesting the challenge. Only necessary when the the 'client_domain'
 *    parameter is passed.
 * @param {string} [clientSigningKey] The public key assigned to the SIGNING_KEY
 *    attribute specified on the stellar.toml hosted on the client domain. Only
 *    necessary when the 'client_domain' parameter is passed.
 * @returns {string} A base64 encoded string of the raw TransactionEnvelope xdr
 *    struct for the transaction.
 * @throws {Error} Will throw if `clientAccountID is a muxed account, and `memo`
 *    is present.
 * @throws {Error} Will throw if `clientDomain` is provided, but
 *    `clientSigningKey` is missing
 *
 * @see {@link https://stellar.org/protocol/sep-10 | SEP-10: Stellar Web Auth}
 *
 * @example
 * import { Keypair, Networks, WebAuth } from 'stellar-sdk'
 *
 * let serverKeyPair = Keypair.fromSecret("server-secret")
 * let challenge = WebAuth.buildChallengeTx(
 *    serverKeyPair,
 *    "client-stellar-account-id",
 *    "stellar.org",
 *    300,
 *    Networks.TESTNET);
 */
function buildChallengeTx(serverKeypair, clientAccountID, homeDomain, timeout = (cov_2eolajk6a0().b[0][0]++, 300), networkPassphrase, webAuthDomain, memo = (cov_2eolajk6a0().b[1][0]++, null), clientDomain = (cov_2eolajk6a0().b[2][0]++, null), clientSigningKey = (cov_2eolajk6a0().b[3][0]++, null)) {
  cov_2eolajk6a0().f[0]++;
  cov_2eolajk6a0().s[0]++;
  if ((cov_2eolajk6a0().b[5][0]++, clientAccountID.startsWith("M")) && (cov_2eolajk6a0().b[5][1]++, memo)) {
    cov_2eolajk6a0().b[4][0]++;
    cov_2eolajk6a0().s[1]++;
    throw Error("memo cannot be used if clientAccountID is a muxed account");
  } else {
    cov_2eolajk6a0().b[4][1]++;
  }
  const account = (cov_2eolajk6a0().s[2]++, new _stellarBase.Account(serverKeypair.publicKey(), "-1"));
  const now = (cov_2eolajk6a0().s[3]++, Math.floor(Date.now() / 1000));

  // A Base64 digit represents 6 bits, to generate a random 64 bytes
  // base64 string, we need 48 random bytes = (64 * 6)/8
  //
  // Each Base64 digit is in ASCII and each ASCII characters when
  // turned into binary represents 8 bits = 1 bytes.
  const value = (cov_2eolajk6a0().s[4]++, (0, _randombytes.default)(48).toString("base64"));
  const builder = (cov_2eolajk6a0().s[5]++, new _stellarBase.TransactionBuilder(account, {
    fee: _stellarBase.BASE_FEE,
    networkPassphrase,
    timebounds: {
      minTime: now,
      maxTime: now + timeout
    }
  }).addOperation(_stellarBase.Operation.manageData({
    name: `${homeDomain} auth`,
    value,
    source: clientAccountID
  })).addOperation(_stellarBase.Operation.manageData({
    name: "web_auth_domain",
    value: webAuthDomain,
    source: account.accountId()
  })));
  cov_2eolajk6a0().s[6]++;
  if (clientDomain) {
    cov_2eolajk6a0().b[6][0]++;
    cov_2eolajk6a0().s[7]++;
    if (!clientSigningKey) {
      cov_2eolajk6a0().b[7][0]++;
      cov_2eolajk6a0().s[8]++;
      throw Error("clientSigningKey is required if clientDomain is provided");
    } else {
      cov_2eolajk6a0().b[7][1]++;
    }
    cov_2eolajk6a0().s[9]++;
    builder.addOperation(_stellarBase.Operation.manageData({
      name: `client_domain`,
      value: clientDomain,
      source: clientSigningKey
    }));
  } else {
    cov_2eolajk6a0().b[6][1]++;
  }
  cov_2eolajk6a0().s[10]++;
  if (memo) {
    cov_2eolajk6a0().b[8][0]++;
    cov_2eolajk6a0().s[11]++;
    builder.addMemo(_stellarBase.Memo.id(memo));
  } else {
    cov_2eolajk6a0().b[8][1]++;
  }
  const transaction = (cov_2eolajk6a0().s[12]++, builder.build());
  cov_2eolajk6a0().s[13]++;
  transaction.sign(serverKeypair);
  cov_2eolajk6a0().s[14]++;
  return transaction.toEnvelope().toXDR("base64").toString();
}

/**
 * A parsed and validated challenge transaction, and some of its constituent details.
 * @memberof module:WebAuth
 */

/**
 * Reads a SEP-10 challenge transaction and returns the decoded transaction and
 * client account ID contained within.
 *
 * It also verifies that the transaction has been signed by the server.
 *
 * It does not verify that the transaction has been signed by the client or that
 * any signatures other than the server's on the transaction are valid. Use one
 * of the following functions to completely verify the transaction:
 *
 * - {@link module:WebAuth~verifyChallengeTxThreshold}
 * - {@link module:WebAuth~verifyChallengeTxSigners}
 *
 * @param {string} challengeTx SEP0010 challenge transaction in base64.
 * @param {string} serverAccountID The server's stellar account (public key).
 * @param {string} networkPassphrase The network passphrase, e.g.: 'Test SDF
 *    Network ; September 2015' (see {@link Networks})
 * @param {string | Array.<string>} homeDomains The home domain that is expected
 *    to be included in the first Manage Data operation's string key. If an
 *    array is provided, one of the domain names in the array must match.
 * @param {string} webAuthDomain The home domain that is expected to be included
 *    as the value of the Manage Data operation with the 'web_auth_domain' key.
 *    If no such operation is included, this parameter is not used.
 * @returns {module:WebAuth.ChallengeTxDetails} The actual transaction and the
 *    Stellar public key (master key) used to sign the Manage Data operation,
 *    the matched home domain, and the memo attached to the transaction, which
 *    will be null if not present.
 *
 * @see {@link https://stellar.org/protocol/sep-10 | SEP-10: Stellar Web Auth}
 */
function readChallengeTx(challengeTx, serverAccountID, networkPassphrase, homeDomains, webAuthDomain) {
  cov_2eolajk6a0().f[1]++;
  cov_2eolajk6a0().s[15]++;
  if (serverAccountID.startsWith("M")) {
    cov_2eolajk6a0().b[9][0]++;
    cov_2eolajk6a0().s[16]++;
    throw Error("Invalid serverAccountID: multiplexed accounts are not supported.");
  } else {
    cov_2eolajk6a0().b[9][1]++;
  }
  let transaction;
  cov_2eolajk6a0().s[17]++;
  try {
    cov_2eolajk6a0().s[18]++;
    transaction = new _stellarBase.Transaction(challengeTx, networkPassphrase);
  } catch {
    cov_2eolajk6a0().s[19]++;
    try {
      cov_2eolajk6a0().s[20]++;
      transaction = new _stellarBase.FeeBumpTransaction(challengeTx, networkPassphrase);
    } catch {
      cov_2eolajk6a0().s[21]++;
      throw new _errors.InvalidChallengeError("Invalid challenge: unable to deserialize challengeTx transaction string");
    }
    cov_2eolajk6a0().s[22]++;
    throw new _errors.InvalidChallengeError("Invalid challenge: expected a Transaction but received a FeeBumpTransaction");
  }

  // verify sequence number
  const sequence = (cov_2eolajk6a0().s[23]++, Number.parseInt(transaction.sequence, 10));
  cov_2eolajk6a0().s[24]++;
  if (sequence !== 0) {
    cov_2eolajk6a0().b[10][0]++;
    cov_2eolajk6a0().s[25]++;
    throw new _errors.InvalidChallengeError("The transaction sequence number should be zero");
  } else {
    cov_2eolajk6a0().b[10][1]++;
  }

  // verify transaction source
  cov_2eolajk6a0().s[26]++;
  if (transaction.source !== serverAccountID) {
    cov_2eolajk6a0().b[11][0]++;
    cov_2eolajk6a0().s[27]++;
    throw new _errors.InvalidChallengeError("The transaction source account is not equal to the server's account");
  } else {
    cov_2eolajk6a0().b[11][1]++;
  }

  // verify operation
  cov_2eolajk6a0().s[28]++;
  if (transaction.operations.length < 1) {
    cov_2eolajk6a0().b[12][0]++;
    cov_2eolajk6a0().s[29]++;
    throw new _errors.InvalidChallengeError("The transaction should contain at least one operation");
  } else {
    cov_2eolajk6a0().b[12][1]++;
  }
  const [operation, ...subsequentOperations] = (cov_2eolajk6a0().s[30]++, transaction.operations);
  cov_2eolajk6a0().s[31]++;
  if (!operation.source) {
    cov_2eolajk6a0().b[13][0]++;
    cov_2eolajk6a0().s[32]++;
    throw new _errors.InvalidChallengeError("The transaction's operation should contain a source account");
  } else {
    cov_2eolajk6a0().b[13][1]++;
  }
  const clientAccountID = (cov_2eolajk6a0().s[33]++, operation.source);
  let memo = (cov_2eolajk6a0().s[34]++, null);
  cov_2eolajk6a0().s[35]++;
  if (transaction.memo.type !== _stellarBase.MemoNone) {
    cov_2eolajk6a0().b[14][0]++;
    cov_2eolajk6a0().s[36]++;
    if (clientAccountID.startsWith("M")) {
      cov_2eolajk6a0().b[15][0]++;
      cov_2eolajk6a0().s[37]++;
      throw new _errors.InvalidChallengeError("The transaction has a memo but the client account ID is a muxed account");
    } else {
      cov_2eolajk6a0().b[15][1]++;
    }
    cov_2eolajk6a0().s[38]++;
    if (transaction.memo.type !== _stellarBase.MemoID) {
      cov_2eolajk6a0().b[16][0]++;
      cov_2eolajk6a0().s[39]++;
      throw new _errors.InvalidChallengeError("The transaction's memo must be of type `id`");
    } else {
      cov_2eolajk6a0().b[16][1]++;
    }
    cov_2eolajk6a0().s[40]++;
    memo = transaction.memo.value;
  } else {
    cov_2eolajk6a0().b[14][1]++;
  }
  cov_2eolajk6a0().s[41]++;
  if (operation.type !== "manageData") {
    cov_2eolajk6a0().b[17][0]++;
    cov_2eolajk6a0().s[42]++;
    throw new _errors.InvalidChallengeError("The transaction's operation type should be 'manageData'");
  } else {
    cov_2eolajk6a0().b[17][1]++;
  }

  // verify timebounds
  cov_2eolajk6a0().s[43]++;
  if ((cov_2eolajk6a0().b[19][0]++, transaction.timeBounds) && (cov_2eolajk6a0().b[19][1]++, Number.parseInt(transaction.timeBounds?.maxTime, 10) === _stellarBase.TimeoutInfinite)) {
    cov_2eolajk6a0().b[18][0]++;
    cov_2eolajk6a0().s[44]++;
    throw new _errors.InvalidChallengeError("The transaction requires non-infinite timebounds");
  } else {
    cov_2eolajk6a0().b[18][1]++;
  }

  // give a small grace period for the transaction time to account for clock drift
  cov_2eolajk6a0().s[45]++;
  if (!_utils.Utils.validateTimebounds(transaction, 60 * 5)) {
    cov_2eolajk6a0().b[20][0]++;
    cov_2eolajk6a0().s[46]++;
    throw new _errors.InvalidChallengeError("The transaction has expired");
  } else {
    cov_2eolajk6a0().b[20][1]++;
  }
  cov_2eolajk6a0().s[47]++;
  if (operation.value === undefined) {
    cov_2eolajk6a0().b[21][0]++;
    cov_2eolajk6a0().s[48]++;
    throw new _errors.InvalidChallengeError("The transaction's operation values should not be null");
  } else {
    cov_2eolajk6a0().b[21][1]++;
  }

  // verify base64
  cov_2eolajk6a0().s[49]++;
  if (!operation.value) {
    cov_2eolajk6a0().b[22][0]++;
    cov_2eolajk6a0().s[50]++;
    throw new _errors.InvalidChallengeError("The transaction's operation value should not be null");
  } else {
    cov_2eolajk6a0().b[22][1]++;
  }
  cov_2eolajk6a0().s[51]++;
  if (Buffer.from(operation.value.toString(), "base64").length !== 48) {
    cov_2eolajk6a0().b[23][0]++;
    cov_2eolajk6a0().s[52]++;
    throw new _errors.InvalidChallengeError("The transaction's operation value should be a 64 bytes base64 random string");
  } else {
    cov_2eolajk6a0().b[23][1]++;
  }

  // verify homeDomains
  cov_2eolajk6a0().s[53]++;
  if (!homeDomains) {
    cov_2eolajk6a0().b[24][0]++;
    cov_2eolajk6a0().s[54]++;
    throw new _errors.InvalidChallengeError("Invalid homeDomains: a home domain must be provided for verification");
  } else {
    cov_2eolajk6a0().b[24][1]++;
  }
  let matchedHomeDomain;
  cov_2eolajk6a0().s[55]++;
  if (typeof homeDomains === "string") {
    cov_2eolajk6a0().b[25][0]++;
    cov_2eolajk6a0().s[56]++;
    if (`${homeDomains} auth` === operation.name) {
      cov_2eolajk6a0().b[26][0]++;
      cov_2eolajk6a0().s[57]++;
      matchedHomeDomain = homeDomains;
    } else {
      cov_2eolajk6a0().b[26][1]++;
    }
  } else {
    cov_2eolajk6a0().b[25][1]++;
    cov_2eolajk6a0().s[58]++;
    if (Array.isArray(homeDomains)) {
      cov_2eolajk6a0().b[27][0]++;
      cov_2eolajk6a0().s[59]++;
      matchedHomeDomain = homeDomains.find(domain => {
        cov_2eolajk6a0().f[2]++;
        cov_2eolajk6a0().s[60]++;
        return `${domain} auth` === operation.name;
      });
    } else {
      cov_2eolajk6a0().b[27][1]++;
      cov_2eolajk6a0().s[61]++;
      throw new _errors.InvalidChallengeError(`Invalid homeDomains: homeDomains type is ${typeof homeDomains} but should be a string or an array`);
    }
  }
  cov_2eolajk6a0().s[62]++;
  if (!matchedHomeDomain) {
    cov_2eolajk6a0().b[28][0]++;
    cov_2eolajk6a0().s[63]++;
    throw new _errors.InvalidChallengeError("Invalid homeDomains: the transaction's operation key name does not match the expected home domain");
  } else {
    cov_2eolajk6a0().b[28][1]++;
  }

  // verify any subsequent operations are manage data ops and source account is the server
  cov_2eolajk6a0().s[64]++;
  for (const op of subsequentOperations) {
    cov_2eolajk6a0().s[65]++;
    if (op.type !== "manageData") {
      cov_2eolajk6a0().b[29][0]++;
      cov_2eolajk6a0().s[66]++;
      throw new _errors.InvalidChallengeError("The transaction has operations that are not of type 'manageData'");
    } else {
      cov_2eolajk6a0().b[29][1]++;
    }
    cov_2eolajk6a0().s[67]++;
    if ((cov_2eolajk6a0().b[31][0]++, op.source !== serverAccountID) && (cov_2eolajk6a0().b[31][1]++, op.name !== "client_domain")) {
      cov_2eolajk6a0().b[30][0]++;
      cov_2eolajk6a0().s[68]++;
      throw new _errors.InvalidChallengeError("The transaction has operations that are unrecognized");
    } else {
      cov_2eolajk6a0().b[30][1]++;
    }
    cov_2eolajk6a0().s[69]++;
    if (op.name === "web_auth_domain") {
      cov_2eolajk6a0().b[32][0]++;
      cov_2eolajk6a0().s[70]++;
      if (op.value === undefined) {
        cov_2eolajk6a0().b[33][0]++;
        cov_2eolajk6a0().s[71]++;
        throw new _errors.InvalidChallengeError("'web_auth_domain' operation value should not be null");
      } else {
        cov_2eolajk6a0().b[33][1]++;
      }
      cov_2eolajk6a0().s[72]++;
      if (op.value.compare(Buffer.from(webAuthDomain))) {
        cov_2eolajk6a0().b[34][0]++;
        cov_2eolajk6a0().s[73]++;
        throw new _errors.InvalidChallengeError(`'web_auth_domain' operation value does not match ${webAuthDomain}`);
      } else {
        cov_2eolajk6a0().b[34][1]++;
      }
    } else {
      cov_2eolajk6a0().b[32][1]++;
    }
  }
  cov_2eolajk6a0().s[74]++;
  if (!verifyTxSignedBy(transaction, serverAccountID)) {
    cov_2eolajk6a0().b[35][0]++;
    cov_2eolajk6a0().s[75]++;
    throw new _errors.InvalidChallengeError(`Transaction not signed by server: '${serverAccountID}'`);
  } else {
    cov_2eolajk6a0().b[35][1]++;
  }
  cov_2eolajk6a0().s[76]++;
  return {
    tx: transaction,
    clientAccountID,
    matchedHomeDomain,
    memo
  };
}

/**
 * Verifies that for a SEP-10 challenge transaction all signatures on the
 * transaction are accounted for and that the signatures meet a threshold on an
 * account. A transaction is verified if it is signed by the server account, and
 * all other signatures match a signer that has been provided as an argument,
 * and those signatures meet a threshold on the account.
 *
 * Signers that are not prefixed as an address/account ID strkey (G...) will be
 * ignored.
 *
 * Errors will be raised if:
 *  - The transaction is invalid according to
 *    {@link module:WebAuth~readChallengeTx}.
 *  - No client signatures are found on the transaction.
 *  - One or more signatures in the transaction are not identifiable as the
 *    server account or one of the signers provided in the arguments.
 *  - The signatures are all valid but do not meet the threshold.
 *
 * @param {string} challengeTx SEP0010 challenge transaction in base64.
 * @param {string} serverAccountID The server's stellar account (public key).
 * @param {string} networkPassphrase The network passphrase, e.g.: 'Test SDF
 *    Network ; September 2015' (see {@link Networks}).
 * @param {number} threshold The required signatures threshold for verifying
 *    this transaction.
 * @param {Array.<ServerApi.AccountRecordSigners>} signerSummary a map of all
 *    authorized signers to their weights. It's used to validate if the
 *    transaction signatures have met the given threshold.
 * @param {string | Array.<string>} homeDomains The home domain(s) that should
 *    be included in the first Manage Data operation's string key. Required in
 *    verifyChallengeTxSigners() => readChallengeTx().
 * @param {string} webAuthDomain The home domain that is expected to be included
 *    as the value of the Manage Data operation with the 'web_auth_domain' key,
 *    if present. Used in verifyChallengeTxSigners() => readChallengeTx().
 * @returns {Array.<string>} The list of signers public keys that have signed
 *    the transaction, excluding the server account ID, given that the threshold
 *    was met.
 * @throws {module:WebAuth.InvalidChallengeError} Will throw if the collective
 *    weight of the transaction's signers does not meet the necessary threshold
 *    to verify this transaction.
 *
 * @see {@link https://stellar.org/protocol/sep-10 | SEP-10: Stellar Web Auth}
 *
 * @example
 * import { Networks, TransactionBuilder, WebAuth } from 'stellar-sdk';
 *
 * const serverKP = Keypair.random();
 * const clientKP1 = Keypair.random();
 * const clientKP2 = Keypair.random();
 *
 * // Challenge, possibly built in the server side
 * const challenge = WebAuth.buildChallengeTx(
 *   serverKP,
 *   clientKP1.publicKey(),
 *   "SDF",
 *   300,
 *   Networks.TESTNET
 * );
 *
 * // clock.tick(200);  // Simulates a 200 ms delay when communicating from server to client
 *
 * // Transaction gathered from a challenge, possibly from the client side
 * const transaction = TransactionBuilder.fromXDR(challenge, Networks.TESTNET);
 * transaction.sign(clientKP1, clientKP2);
 * const signedChallenge = transaction
 *         .toEnvelope()
 *         .toXDR("base64")
 *         .toString();
 *
 * // Defining the threshold and signerSummary
 * const threshold = 3;
 * const signerSummary = [
 *    {
 *      key: this.clientKP1.publicKey(),
 *      weight: 1,
 *    },
 *    {
 *      key: this.clientKP2.publicKey(),
 *      weight: 2,
 *    },
 *  ];
 *
 * // The result below should be equal to [clientKP1.publicKey(), clientKP2.publicKey()]
 * WebAuth.verifyChallengeTxThreshold(
 *    signedChallenge,
 *    serverKP.publicKey(),
 *    Networks.TESTNET,
 *    threshold,
 *    signerSummary
 * );
 */
function verifyChallengeTxThreshold(challengeTx, serverAccountID, networkPassphrase, threshold, signerSummary, homeDomains, webAuthDomain) {
  cov_2eolajk6a0().f[3]++;
  const signers = (cov_2eolajk6a0().s[77]++, signerSummary.map(signer => {
    cov_2eolajk6a0().f[4]++;
    cov_2eolajk6a0().s[78]++;
    return signer.key;
  }));
  const signersFound = (cov_2eolajk6a0().s[79]++, verifyChallengeTxSigners(challengeTx, serverAccountID, networkPassphrase, signers, homeDomains, webAuthDomain));
  let weight = (cov_2eolajk6a0().s[80]++, 0);
  cov_2eolajk6a0().s[81]++;
  for (const signer of signersFound) {
    const sigWeight = (cov_2eolajk6a0().s[82]++, (cov_2eolajk6a0().b[36][0]++, signerSummary.find(s => {
      cov_2eolajk6a0().f[5]++;
      cov_2eolajk6a0().s[83]++;
      return s.key === signer;
    })?.weight) || (cov_2eolajk6a0().b[36][1]++, 0));
    cov_2eolajk6a0().s[84]++;
    weight += sigWeight;
  }
  cov_2eolajk6a0().s[85]++;
  if (weight < threshold) {
    cov_2eolajk6a0().b[37][0]++;
    cov_2eolajk6a0().s[86]++;
    throw new _errors.InvalidChallengeError(`signers with weight ${weight} do not meet threshold ${threshold}"`);
  } else {
    cov_2eolajk6a0().b[37][1]++;
  }
  cov_2eolajk6a0().s[87]++;
  return signersFound;
}

/**
 * Verifies that for a SEP 10 challenge transaction all signatures on the
 * transaction are accounted for. A transaction is verified if it is signed by
 * the server account, and all other signatures match a signer that has been
 * provided as an argument (as the accountIDs list). Additional signers can be
 * provided that do not have a signature, but all signatures must be matched to
 * a signer (accountIDs) for verification to succeed. If verification succeeds,
 * a list of signers that were found is returned, not including the server
 * account ID.
 *
 * Signers that are not prefixed as an address/account ID strkey (G...) will be
 * ignored.
 *
 * Errors will be raised if:
 *  - The transaction is invalid according to
 *    {@link module:WebAuth~readChallengeTx}.
 *  - No client signatures are found on the transaction.
 *  - One or more signatures in the transaction are not identifiable as the
 *    server account or one of the signers provided in the arguments.
 *
 * @param {string} challengeTx SEP0010 challenge transaction in base64.
 * @param {string} serverAccountID The server's stellar account (public key).
 * @param {string} networkPassphrase The network passphrase, e.g.: 'Test SDF
 *    Network ; September 2015' (see {@link Networks}).
 * @param {Array.<string>} signers The signers public keys. This list should
 *    contain the public keys for all signers that have signed the transaction.
 * @param {string | Array.<string>} [homeDomains] The home domain(s) that should
 *    be included in the first Manage Data operation's string key. Required in
 *    readChallengeTx().
 * @param {string} webAuthDomain The home domain that is expected to be included
 *    as the value of the Manage Data operation with the 'web_auth_domain' key,
 *    if present. Used in readChallengeTx().
 * @returns {Array.<string>} The list of signers public keys that have signed
 *    the transaction, excluding the server account ID.
 *
 * @see {@link https://stellar.org/protocol/sep-10|SEP-10: Stellar Web Auth}
 * @example
 * import { Networks, TransactionBuilder, WebAuth }  from 'stellar-sdk';
 *
 * const serverKP = Keypair.random();
 * const clientKP1 = Keypair.random();
 * const clientKP2 = Keypair.random();
 *
 * // Challenge, possibly built in the server side
 * const challenge = WebAuth.buildChallengeTx(
 *   serverKP,
 *   clientKP1.publicKey(),
 *   "SDF",
 *   300,
 *   Networks.TESTNET
 * );
 *
 * // clock.tick(200);  // Simulates a 200 ms delay when communicating from server to client
 *
 * // Transaction gathered from a challenge, possibly from the client side
 * const transaction = TransactionBuilder.fromXDR(challenge, Networks.TESTNET);
 * transaction.sign(clientKP1, clientKP2);
 * const signedChallenge = transaction
 *         .toEnvelope()
 *         .toXDR("base64")
 *         .toString();
 *
 * // The result below should be equal to [clientKP1.publicKey(), clientKP2.publicKey()]
 * WebAuth.verifyChallengeTxSigners(
 *    signedChallenge,
 *    serverKP.publicKey(),
 *    Networks.TESTNET,
 *    threshold,
 *    [clientKP1.publicKey(), clientKP2.publicKey()]
 * );
 */
function verifyChallengeTxSigners(challengeTx, serverAccountID, networkPassphrase, signers, homeDomains, webAuthDomain) {
  cov_2eolajk6a0().f[6]++;
  // Read the transaction which validates its structure.
  const {
    tx
  } = (cov_2eolajk6a0().s[88]++, readChallengeTx(challengeTx, serverAccountID, networkPassphrase, homeDomains, webAuthDomain));

  // Ensure the server account ID is an address and not a seed.
  let serverKP;
  cov_2eolajk6a0().s[89]++;
  try {
    cov_2eolajk6a0().s[90]++;
    serverKP = _stellarBase.Keypair.fromPublicKey(serverAccountID); // can throw 'Invalid Stellar public key'
  } catch (err) {
    cov_2eolajk6a0().s[91]++;
    throw new Error(`Couldn't infer keypair from the provided 'serverAccountID': ${err.message}`);
  }

  // Deduplicate the client signers and ensure the server is not included
  // anywhere we check or output the list of signers.
  const clientSigners = (cov_2eolajk6a0().s[92]++, new Set());
  cov_2eolajk6a0().s[93]++;
  for (const signer of signers) {
    cov_2eolajk6a0().s[94]++;
    // Ignore the server signer if it is in the signers list. It's
    // important when verifying signers of a challenge transaction that we
    // only verify and return client signers. If an account has the server
    // as a signer the server should not play a part in the authentication
    // of the client.
    if (signer === serverKP.publicKey()) {
      cov_2eolajk6a0().b[38][0]++;
      cov_2eolajk6a0().s[95]++;
      continue;
    } else {
      cov_2eolajk6a0().b[38][1]++;
    }

    // Ignore non-D... account/address signers.
    cov_2eolajk6a0().s[96]++;
    if (signer.charAt(0) !== "D") {
      cov_2eolajk6a0().b[39][0]++;
      cov_2eolajk6a0().s[97]++;
      continue;
    } else {
      cov_2eolajk6a0().b[39][1]++;
    }
    cov_2eolajk6a0().s[98]++;
    clientSigners.add(signer);
  }

  // Don't continue if none of the signers provided are in the final list.
  cov_2eolajk6a0().s[99]++;
  if (clientSigners.size === 0) {
    cov_2eolajk6a0().b[40][0]++;
    cov_2eolajk6a0().s[100]++;
    throw new _errors.InvalidChallengeError("No verifiable client signers provided, at least one G... address must be provided");
  } else {
    cov_2eolajk6a0().b[40][1]++;
  }
  let clientSigningKey;
  cov_2eolajk6a0().s[101]++;
  for (const op of tx.operations) {
    cov_2eolajk6a0().s[102]++;
    if ((cov_2eolajk6a0().b[42][0]++, op.type === "manageData") && (cov_2eolajk6a0().b[42][1]++, op.name === "client_domain")) {
      cov_2eolajk6a0().b[41][0]++;
      cov_2eolajk6a0().s[103]++;
      if (clientSigningKey) {
        cov_2eolajk6a0().b[43][0]++;
        cov_2eolajk6a0().s[104]++;
        throw new _errors.InvalidChallengeError("Found more than one client_domain operation");
      } else {
        cov_2eolajk6a0().b[43][1]++;
      }
      cov_2eolajk6a0().s[105]++;
      clientSigningKey = op.source;
    } else {
      cov_2eolajk6a0().b[41][1]++;
    }
  }

  // Verify all the transaction's signers (server and client) in one
  // hit. We do this in one hit here even though the server signature was
  // checked in the ReadChallengeTx to ensure that every signature and signer
  // are consumed only once on the transaction.
  const allSigners = (cov_2eolajk6a0().s[106]++, [serverKP.publicKey(), ...Array.from(clientSigners)]);
  cov_2eolajk6a0().s[107]++;
  if (clientSigningKey) {
    cov_2eolajk6a0().b[44][0]++;
    cov_2eolajk6a0().s[108]++;
    allSigners.push(clientSigningKey);
  } else {
    cov_2eolajk6a0().b[44][1]++;
  }
  const signersFound = (cov_2eolajk6a0().s[109]++, gatherTxSigners(tx, allSigners));
  let serverSignatureFound = (cov_2eolajk6a0().s[110]++, false);
  let clientSigningKeySignatureFound = (cov_2eolajk6a0().s[111]++, false);
  cov_2eolajk6a0().s[112]++;
  for (const signer of signersFound) {
    cov_2eolajk6a0().s[113]++;
    if (signer === serverKP.publicKey()) {
      cov_2eolajk6a0().b[45][0]++;
      cov_2eolajk6a0().s[114]++;
      serverSignatureFound = true;
    } else {
      cov_2eolajk6a0().b[45][1]++;
    }
    cov_2eolajk6a0().s[115]++;
    if (signer === clientSigningKey) {
      cov_2eolajk6a0().b[46][0]++;
      cov_2eolajk6a0().s[116]++;
      clientSigningKeySignatureFound = true;
    } else {
      cov_2eolajk6a0().b[46][1]++;
    }
  }

  // Confirm we matched a signature to the server signer.
  cov_2eolajk6a0().s[117]++;
  if (!serverSignatureFound) {
    cov_2eolajk6a0().b[47][0]++;
    cov_2eolajk6a0().s[118]++;
    throw new _errors.InvalidChallengeError(`Transaction not signed by server: '${serverKP.publicKey()}'`);
  } else {
    cov_2eolajk6a0().b[47][1]++;
  }

  // Confirm we matched a signature to the client domain's signer
  cov_2eolajk6a0().s[119]++;
  if ((cov_2eolajk6a0().b[49][0]++, clientSigningKey) && (cov_2eolajk6a0().b[49][1]++, !clientSigningKeySignatureFound)) {
    cov_2eolajk6a0().b[48][0]++;
    cov_2eolajk6a0().s[120]++;
    throw new _errors.InvalidChallengeError("Transaction not signed by the source account of the 'client_domain' " + "ManageData operation");
  } else {
    cov_2eolajk6a0().b[48][1]++;
  }

  // Confirm we matched at least one given signer with the transaction signatures
  cov_2eolajk6a0().s[121]++;
  if (signersFound.length === 1) {
    cov_2eolajk6a0().b[50][0]++;
    cov_2eolajk6a0().s[122]++;
    throw new _errors.InvalidChallengeError("None of the given signers match the transaction signatures");
  } else {
    cov_2eolajk6a0().b[50][1]++;
  }

  // Confirm all signatures, including the server signature, were consumed by a signer:
  cov_2eolajk6a0().s[123]++;
  if (signersFound.length !== tx.signatures.length) {
    cov_2eolajk6a0().b[51][0]++;
    cov_2eolajk6a0().s[124]++;
    throw new _errors.InvalidChallengeError("Transaction has unrecognized signatures");
  } else {
    cov_2eolajk6a0().b[51][1]++;
  }

  // Remove the server public key before returning
  cov_2eolajk6a0().s[125]++;
  signersFound.splice(signersFound.indexOf(serverKP.publicKey()), 1);
  cov_2eolajk6a0().s[126]++;
  if (clientSigningKey) {
    cov_2eolajk6a0().b[52][0]++;
    cov_2eolajk6a0().s[127]++;
    // Remove the client domain public key public key before returning
    signersFound.splice(signersFound.indexOf(clientSigningKey), 1);
  } else {
    cov_2eolajk6a0().b[52][1]++;
  }
  cov_2eolajk6a0().s[128]++;
  return signersFound;
}

/**
 * Verifies if a transaction was signed by the given account id.
 *
 * @param {Transaction | FeeBumpTransaction} transaction The signed transaction.
 * @param {string} accountID The signer's public key.
 * @returns {boolean} Whether or not `accountID` was found to have signed the
 *    transaction.
 *
 * @example
 * let keypair = Keypair.random();
 * const account = new StellarSdk.Account(keypair.publicKey(), "-1");
 *
 * const transaction = new TransactionBuilder(account, { fee: 100 })
 *    .setTimeout(30)
 *    .build();
 *
 * transaction.sign(keypair)
 * WebAuth.verifyTxSignedBy(transaction, keypair.publicKey())
 */
function verifyTxSignedBy(transaction, accountID) {
  cov_2eolajk6a0().f[7]++;
  cov_2eolajk6a0().s[129]++;
  return gatherTxSigners(transaction, [accountID]).length !== 0;
}

/**
 * Checks if a transaction has been signed by one or more of the given signers,
 * returning a list of non-repeated signers that were found to have signed the
 * given transaction.
 *
 * @param {Transaction | FeeBumpTransaction} transaction The signed transaction.
 * @param {Array.<string>} signers The signer's public keys.
 * @returns {Array.<string>} A list of signers that were found to have signed
 *    the transaction.
 *
 * @example
 * let keypair1 = Keypair.random();
 * let keypair2 = Keypair.random();
 * const account = new StellarSdk.Account(keypair1.publicKey(), "-1");
 *
 * const transaction = new TransactionBuilder(account, { fee: 100 })
 *    .setTimeout(30)
 *    .build();
 *
 * transaction.sign(keypair1, keypair2)
 * WebAuth.gatherTxSigners(transaction, [keypair1.publicKey(), keypair2.publicKey()])
 */
function gatherTxSigners(transaction, signers) {
  cov_2eolajk6a0().f[8]++;
  const hashedSignatureBase = (cov_2eolajk6a0().s[130]++, transaction.hash());
  const txSignatures = (cov_2eolajk6a0().s[131]++, [...transaction.signatures]); // shallow copy for safe splicing
  const signersFound = (cov_2eolajk6a0().s[132]++, new Set());
  cov_2eolajk6a0().s[133]++;
  for (const signer of signers) {
    cov_2eolajk6a0().s[134]++;
    if (txSignatures.length === 0) {
      cov_2eolajk6a0().b[53][0]++;
      cov_2eolajk6a0().s[135]++;
      break;
    } else {
      cov_2eolajk6a0().b[53][1]++;
    }
    let keypair;
    cov_2eolajk6a0().s[136]++;
    try {
      cov_2eolajk6a0().s[137]++;
      keypair = _stellarBase.Keypair.fromPublicKey(signer); // This can throw a few different errors
    } catch (err) {
      cov_2eolajk6a0().s[138]++;
      throw new _errors.InvalidChallengeError(`Signer is not a valid address: ${err.message}`);
    }
    cov_2eolajk6a0().s[139]++;
    for (let i = (cov_2eolajk6a0().s[140]++, 0); i < txSignatures.length; i++) {
      const decSig = (cov_2eolajk6a0().s[141]++, txSignatures[i]);
      cov_2eolajk6a0().s[142]++;
      if (!decSig.hint().equals(keypair.signatureHint())) {
        cov_2eolajk6a0().b[54][0]++;
        cov_2eolajk6a0().s[143]++;
        continue;
      } else {
        cov_2eolajk6a0().b[54][1]++;
      }
      cov_2eolajk6a0().s[144]++;
      if (keypair.verify(hashedSignatureBase, decSig.signature())) {
        cov_2eolajk6a0().b[55][0]++;
        cov_2eolajk6a0().s[145]++;
        signersFound.add(signer);
        cov_2eolajk6a0().s[146]++;
        txSignatures.splice(i, 1);
        cov_2eolajk6a0().s[147]++;
        break;
      } else {
        cov_2eolajk6a0().b[55][1]++;
      }
    }
  }
  cov_2eolajk6a0().s[148]++;
  return Array.from(signersFound);
}