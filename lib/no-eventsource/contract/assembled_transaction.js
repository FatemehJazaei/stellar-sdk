"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssembledTransaction = void 0;
var _stellarBase = require("@stellar/stellar-base");
var _rpc = require("../rpc");
var _api = require("../rpc/api");
var _transaction = require("../rpc/transaction");
var _rust_result = require("./rust_result");
var _utils = require("./utils");
var _types = require("./types");
var _sent_transaction = require("./sent_transaction");
function cov_1sqdj42y8p() {
  var path = "/mnt/g/stellar-sdk/src/contract/assembled_transaction.ts";
  var hash = "802c20d9877042b483080d5b969650da6b1339bb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/contract/assembled_transaction.ts",
    statementMap: {
      "0": {
        start: {
          line: 317,
          column: 18
        },
        end: {
          line: 326,
          column: 3
        }
      },
      "1": {
        start: {
          line: 335,
          column: 4
        },
        end: {
          line: 344,
          column: 7
        }
      },
      "2": {
        start: {
          line: 339,
          column: 57
        },
        end: {
          line: 339,
          column: 74
        }
      },
      "3": {
        start: {
          line: 362,
          column: 16
        },
        end: {
          line: 362,
          column: 49
        }
      },
      "4": {
        start: {
          line: 363,
          column: 4
        },
        end: {
          line: 363,
          column: 80
        }
      },
      "5": {
        start: {
          line: 364,
          column: 4
        },
        end: {
          line: 369,
          column: 6
        }
      },
      "6": {
        start: {
          line: 366,
          column: 8
        },
        end: {
          line: 366,
          column: 58
        }
      },
      "7": {
        start: {
          line: 370,
          column: 4
        },
        end: {
          line: 373,
          column: 6
        }
      },
      "8": {
        start: {
          line: 374,
          column: 4
        },
        end: {
          line: 374,
          column: 15
        }
      },
      "9": {
        start: {
          line: 381,
          column: 4
        },
        end: {
          line: 384,
          column: 8
        }
      },
      "10": {
        start: {
          line: 381,
          column: 20
        },
        end: {
          line: 384,
          column: 8
        }
      },
      "11": {
        start: {
          line: 385,
          column: 4
        },
        end: {
          line: 385,
          column: 52
        }
      },
      "12": {
        start: {
          line: 396,
          column: 21
        },
        end: {
          line: 396,
          column: 74
        }
      },
      "13": {
        start: {
          line: 397,
          column: 18
        },
        end: {
          line: 397,
          column: 87
        }
      },
      "14": {
        start: {
          line: 398,
          column: 22
        },
        end: {
          line: 398,
          column: 73
        }
      },
      "15": {
        start: {
          line: 399,
          column: 4
        },
        end: {
          line: 401,
          column: 5
        }
      },
      "16": {
        start: {
          line: 400,
          column: 6
        },
        end: {
          line: 400,
          column: 85
        }
      },
      "17": {
        start: {
          line: 402,
          column: 31
        },
        end: {
          line: 402,
          column: 79
        }
      },
      "18": {
        start: {
          line: 403,
          column: 4
        },
        end: {
          line: 405,
          column: 5
        }
      },
      "19": {
        start: {
          line: 404,
          column: 6
        },
        end: {
          line: 404,
          column: 90
        }
      },
      "20": {
        start: {
          line: 406,
          column: 19
        },
        end: {
          line: 406,
          column: 70
        }
      },
      "21": {
        start: {
          line: 407,
          column: 16
        },
        end: {
          line: 413,
          column: 6
        }
      },
      "22": {
        start: {
          line: 411,
          column: 10
        },
        end: {
          line: 411,
          column: 46
        }
      },
      "23": {
        start: {
          line: 414,
          column: 4
        },
        end: {
          line: 414,
          column: 22
        }
      },
      "24": {
        start: {
          line: 415,
          column: 4
        },
        end: {
          line: 415,
          column: 15
        }
      },
      "25": {
        start: {
          line: 419,
          column: 4
        },
        end: {
          line: 419,
          column: 58
        }
      },
      "26": {
        start: {
          line: 420,
          column: 4
        },
        end: {
          line: 422,
          column: 7
        }
      },
      "27": {
        start: {
          line: 447,
          column: 15
        },
        end: {
          line: 447,
          column: 48
        }
      },
      "28": {
        start: {
          line: 448,
          column: 21
        },
        end: {
          line: 448,
          column: 53
        }
      },
      "29": {
        start: {
          line: 450,
          column: 20
        },
        end: {
          line: 453,
          column: 5
        }
      },
      "30": {
        start: {
          line: 455,
          column: 4
        },
        end: {
          line: 460,
          column: 63
        }
      },
      "31": {
        start: {
          line: 462,
          column: 4
        },
        end: {
          line: 462,
          column: 46
        }
      },
      "32": {
        start: {
          line: 462,
          column: 26
        },
        end: {
          line: 462,
          column: 46
        }
      },
      "33": {
        start: {
          line: 464,
          column: 4
        },
        end: {
          line: 464,
          column: 14
        }
      },
      "34": {
        start: {
          line: 473,
          column: 15
        },
        end: {
          line: 473,
          column: 48
        }
      },
      "35": {
        start: {
          line: 474,
          column: 4
        },
        end: {
          line: 480,
          column: 63
        }
      },
      "36": {
        start: {
          line: 481,
          column: 4
        },
        end: {
          line: 481,
          column: 42
        }
      },
      "37": {
        start: {
          line: 482,
          column: 4
        },
        end: {
          line: 482,
          column: 14
        }
      },
      "38": {
        start: {
          line: 485,
          column: 13
        },
        end: {
          line: 540,
          column: 3
        }
      },
      "39": {
        start: {
          line: 486,
          column: 4
        },
        end: {
          line: 494,
          column: 5
        }
      },
      "40": {
        start: {
          line: 487,
          column: 6
        },
        end: {
          line: 492,
          column: 7
        }
      },
      "41": {
        start: {
          line: 488,
          column: 8
        },
        end: {
          line: 491,
          column: 10
        }
      },
      "42": {
        start: {
          line: 493,
          column: 6
        },
        end: {
          line: 493,
          column: 36
        }
      },
      "43": {
        start: {
          line: 495,
          column: 4
        },
        end: {
          line: 495,
          column: 46
        }
      },
      "44": {
        start: {
          line: 498,
          column: 4
        },
        end: {
          line: 498,
          column: 33
        }
      },
      "45": {
        start: {
          line: 499,
          column: 4
        },
        end: {
          line: 499,
          column: 42
        }
      },
      "46": {
        start: {
          line: 500,
          column: 4
        },
        end: {
          line: 500,
          column: 72
        }
      },
      "47": {
        start: {
          line: 502,
          column: 4
        },
        end: {
          line: 530,
          column: 5
        }
      },
      "48": {
        start: {
          line: 503,
          column: 22
        },
        end: {
          line: 503,
          column: 65
        }
      },
      "49": {
        start: {
          line: 504,
          column: 21
        },
        end: {
          line: 507,
          column: 7
        }
      },
      "50": {
        start: {
          line: 508,
          column: 6
        },
        end: {
          line: 526,
          column: 7
        }
      },
      "51": {
        start: {
          line: 510,
          column: 25
        },
        end: {
          line: 510,
          column: 62
        }
      },
      "52": {
        start: {
          line: 511,
          column: 8
        },
        end: {
          line: 523,
          column: 12
        }
      },
      "53": {
        start: {
          line: 524,
          column: 8
        },
        end: {
          line: 524,
          column: 30
        }
      },
      "54": {
        start: {
          line: 525,
          column: 8
        },
        end: {
          line: 525,
          column: 20
        }
      },
      "55": {
        start: {
          line: 527,
          column: 6
        },
        end: {
          line: 529,
          column: 8
        }
      },
      "56": {
        start: {
          line: 532,
          column: 4
        },
        end: {
          line: 537,
          column: 5
        }
      },
      "57": {
        start: {
          line: 533,
          column: 6
        },
        end: {
          line: 536,
          column: 16
        }
      },
      "58": {
        start: {
          line: 539,
          column: 4
        },
        end: {
          line: 539,
          column: 16
        }
      },
      "59": {
        start: {
          line: 546,
          column: 4
        },
        end: {
          line: 551,
          column: 5
        }
      },
      "60": {
        start: {
          line: 547,
          column: 6
        },
        end: {
          line: 550,
          column: 8
        }
      },
      "61": {
        start: {
          line: 552,
          column: 23
        },
        end: {
          line: 552,
          column: 39
        }
      },
      "62": {
        start: {
          line: 553,
          column: 4
        },
        end: {
          line: 557,
          column: 5
        }
      },
      "63": {
        start: {
          line: 554,
          column: 6
        },
        end: {
          line: 556,
          column: 8
        }
      },
      "64": {
        start: {
          line: 558,
          column: 4
        },
        end: {
          line: 560,
          column: 5
        }
      },
      "65": {
        start: {
          line: 559,
          column: 6
        },
        end: {
          line: 559,
          column: 78
        }
      },
      "66": {
        start: {
          line: 562,
          column: 4
        },
        end: {
          line: 568,
          column: 5
        }
      },
      "67": {
        start: {
          line: 563,
          column: 6
        },
        end: {
          line: 567,
          column: 8
        }
      },
      "68": {
        start: {
          line: 571,
          column: 4
        },
        end: {
          line: 571,
          column: 91
        }
      },
      "69": {
        start: {
          line: 572,
          column: 4
        },
        end: {
          line: 572,
          column: 72
        }
      },
      "70": {
        start: {
          line: 574,
          column: 4
        },
        end: {
          line: 577,
          column: 6
        }
      },
      "71": {
        start: {
          line: 581,
          column: 4
        },
        end: {
          line: 591,
          column: 5
        }
      },
      "72": {
        start: {
          line: 582,
          column: 6
        },
        end: {
          line: 584,
          column: 7
        }
      },
      "73": {
        start: {
          line: 583,
          column: 8
        },
        end: {
          line: 583,
          column: 49
        }
      },
      "74": {
        start: {
          line: 585,
          column: 6
        },
        end: {
          line: 585,
          column: 76
        }
      },
      "75": {
        start: {
          line: 587,
          column: 6
        },
        end: {
          line: 587,
          column: 42
        }
      },
      "76": {
        start: {
          line: 587,
          column: 34
        },
        end: {
          line: 587,
          column: 42
        }
      },
      "77": {
        start: {
          line: 588,
          column: 18
        },
        end: {
          line: 588,
          column: 47
        }
      },
      "78": {
        start: {
          line: 589,
          column: 6
        },
        end: {
          line: 589,
          column: 31
        }
      },
      "79": {
        start: {
          line: 589,
          column: 15
        },
        end: {
          line: 589,
          column: 31
        }
      },
      "80": {
        start: {
          line: 590,
          column: 6
        },
        end: {
          line: 590,
          column: 14
        }
      },
      "81": {
        start: {
          line: 595,
          column: 4
        },
        end: {
          line: 595,
          column: 51
        }
      },
      "82": {
        start: {
          line: 595,
          column: 34
        },
        end: {
          line: 595,
          column: 51
        }
      },
      "83": {
        start: {
          line: 596,
          column: 18
        },
        end: {
          line: 596,
          column: 58
        }
      },
      "84": {
        start: {
          line: 597,
          column: 4
        },
        end: {
          line: 597,
          column: 33
        }
      },
      "85": {
        start: {
          line: 597,
          column: 16
        },
        end: {
          line: 597,
          column: 33
        }
      },
      "86": {
        start: {
          line: 598,
          column: 14
        },
        end: {
          line: 598,
          column: 36
        }
      },
      "87": {
        start: {
          line: 599,
          column: 16
        },
        end: {
          line: 599,
          column: 42
        }
      },
      "88": {
        start: {
          line: 600,
          column: 4
        },
        end: {
          line: 600,
          column: 31
        }
      },
      "89": {
        start: {
          line: 600,
          column: 14
        },
        end: {
          line: 600,
          column: 31
        }
      },
      "90": {
        start: {
          line: 601,
          column: 4
        },
        end: {
          line: 601,
          column: 24
        }
      },
      "91": {
        start: {
          line: 608,
          column: 9
        },
        end: {
          line: 669,
          column: 3
        }
      },
      "92": {
        start: {
          line: 621,
          column: 4
        },
        end: {
          line: 623,
          column: 5
        }
      },
      "93": {
        start: {
          line: 622,
          column: 6
        },
        end: {
          line: 622,
          column: 64
        }
      },
      "94": {
        start: {
          line: 625,
          column: 4
        },
        end: {
          line: 630,
          column: 5
        }
      },
      "95": {
        start: {
          line: 626,
          column: 6
        },
        end: {
          line: 629,
          column: 8
        }
      },
      "96": {
        start: {
          line: 632,
          column: 4
        },
        end: {
          line: 637,
          column: 5
        }
      },
      "97": {
        start: {
          line: 633,
          column: 6
        },
        end: {
          line: 636,
          column: 8
        }
      },
      "98": {
        start: {
          line: 640,
          column: 23
        },
        end: {
          line: 640,
          column: 88
        }
      },
      "99": {
        start: {
          line: 640,
          column: 68
        },
        end: {
          line: 640,
          column: 87
        }
      },
      "100": {
        start: {
          line: 641,
          column: 4
        },
        end: {
          line: 646,
          column: 5
        }
      },
      "101": {
        start: {
          line: 642,
          column: 6
        },
        end: {
          line: 645,
          column: 8
        }
      },
      "102": {
        start: {
          line: 649,
          column: 6
        },
        end: {
          line: 649,
          column: 54
        }
      },
      "103": {
        start: {
          line: 650,
          column: 4
        },
        end: {
          line: 656,
          column: 15
        }
      },
      "104": {
        start: {
          line: 658,
          column: 22
        },
        end: {
          line: 663,
          column: 5
        }
      },
      "105": {
        start: {
          line: 665,
          column: 4
        },
        end: {
          line: 668,
          column: 12
        }
      },
      "106": {
        start: {
          line: 676,
          column: 4
        },
        end: {
          line: 678,
          column: 5
        }
      },
      "107": {
        start: {
          line: 677,
          column: 6
        },
        end: {
          line: 677,
          column: 114
        }
      },
      "108": {
        start: {
          line: 679,
          column: 17
        },
        end: {
          line: 679,
          column: 60
        }
      },
      "109": {
        start: {
          line: 680,
          column: 4
        },
        end: {
          line: 680,
          column: 16
        }
      },
      "110": {
        start: {
          line: 689,
          column: 16
        },
        end: {
          line: 706,
          column: 3
        }
      },
      "111": {
        start: {
          line: 702,
          column: 4
        },
        end: {
          line: 704,
          column: 5
        }
      },
      "112": {
        start: {
          line: 703,
          column: 6
        },
        end: {
          line: 703,
          column: 50
        }
      },
      "113": {
        start: {
          line: 705,
          column: 4
        },
        end: {
          line: 705,
          column: 23
        }
      },
      "114": {
        start: {
          line: 727,
          column: 29
        },
        end: {
          line: 771,
          column: 3
        }
      },
      "115": {
        start: {
          line: 736,
          column: 4
        },
        end: {
          line: 738,
          column: 5
        }
      },
      "116": {
        start: {
          line: 737,
          column: 6
        },
        end: {
          line: 737,
          column: 64
        }
      },
      "117": {
        start: {
          line: 743,
          column: 4
        },
        end: {
          line: 749,
          column: 5
        }
      },
      "118": {
        start: {
          line: 744,
          column: 6
        },
        end: {
          line: 748,
          column: 8
        }
      },
      "119": {
        start: {
          line: 750,
          column: 36
        },
        end: {
          line: 751,
          column: 52
        }
      },
      "120": {
        start: {
          line: 753,
          column: 4
        },
        end: {
          line: 770,
          column: 6
        }
      },
      "121": {
        start: {
          line: 758,
          column: 14
        },
        end: {
          line: 762,
          column: 26
        }
      },
      "122": {
        start: {
          line: 765,
          column: 12
        },
        end: {
          line: 767,
          column: 24
        }
      },
      "123": {
        start: {
          line: 789,
          column: 20
        },
        end: {
          line: 884,
          column: 3
        }
      },
      "124": {
        start: {
          line: 791,
          column: 6
        },
        end: {
          line: 791,
          column: 58
        }
      },
      "125": {
        start: {
          line: 819,
          column: 4
        },
        end: {
          line: 820,
          column: 77
        }
      },
      "126": {
        start: {
          line: 820,
          column: 6
        },
        end: {
          line: 820,
          column: 77
        }
      },
      "127": {
        start: {
          line: 823,
          column: 4
        },
        end: {
          line: 840,
          column: 5
        }
      },
      "128": {
        start: {
          line: 824,
          column: 39
        },
        end: {
          line: 824,
          column: 70
        }
      },
      "129": {
        start: {
          line: 825,
          column: 6
        },
        end: {
          line: 829,
          column: 7
        }
      },
      "130": {
        start: {
          line: 826,
          column: 8
        },
        end: {
          line: 828,
          column: 10
        }
      },
      "131": {
        start: {
          line: 830,
          column: 6
        },
        end: {
          line: 834,
          column: 7
        }
      },
      "132": {
        start: {
          line: 831,
          column: 8
        },
        end: {
          line: 833,
          column: 10
        }
      },
      "133": {
        start: {
          line: 835,
          column: 6
        },
        end: {
          line: 839,
          column: 7
        }
      },
      "134": {
        start: {
          line: 836,
          column: 8
        },
        end: {
          line: 838,
          column: 10
        }
      },
      "135": {
        start: {
          line: 842,
          column: 36
        },
        end: {
          line: 843,
          column: 52
        }
      },
      "136": {
        start: {
          line: 845,
          column: 24
        },
        end: {
          line: 845,
          column: 58
        }
      },
      "137": {
        start: {
          line: 848,
          column: 4
        },
        end: {
          line: 883,
          column: 5
        }
      },
      "138": {
        start: {
          line: 850,
          column: 26
        },
        end: {
          line: 850,
          column: 85
        }
      },
      "139": {
        start: {
          line: 851,
          column: 6
        },
        end: {
          line: 859,
          column: 7
        }
      },
      "140": {
        start: {
          line: 858,
          column: 8
        },
        end: {
          line: 858,
          column: 17
        }
      },
      "141": {
        start: {
          line: 860,
          column: 31
        },
        end: {
          line: 862,
          column: 18
        }
      },
      "142": {
        start: {
          line: 866,
          column: 6
        },
        end: {
          line: 866,
          column: 49
        }
      },
      "143": {
        start: {
          line: 866,
          column: 40
        },
        end: {
          line: 866,
          column: 49
        }
      },
      "144": {
        start: {
          line: 868,
          column: 41
        },
        end: {
          line: 868,
          column: 73
        }
      },
      "145": {
        start: {
          line: 871,
          column: 6
        },
        end: {
          line: 882,
          column: 8
        }
      },
      "146": {
        start: {
          line: 874,
          column: 10
        },
        end: {
          line: 879,
          column: 11
        }
      },
      "147": {
        start: {
          line: 893,
          column: 23
        },
        end: {
          line: 893,
          column: 61
        }
      },
      "148": {
        start: {
          line: 894,
          column: 24
        },
        end: {
          line: 897,
          column: 25
        }
      },
      "149": {
        start: {
          line: 898,
          column: 4
        },
        end: {
          line: 898,
          column: 49
        }
      },
      "150": {
        start: {
          line: 933,
          column: 4
        },
        end: {
          line: 935,
          column: 5
        }
      },
      "151": {
        start: {
          line: 934,
          column: 6
        },
        end: {
          line: 934,
          column: 129
        }
      },
      "152": {
        start: {
          line: 936,
          column: 4
        },
        end: {
          line: 936,
          column: 69
        }
      },
      "153": {
        start: {
          line: 938,
          column: 22
        },
        end: {
          line: 943,
          column: 5
        }
      },
      "154": {
        start: {
          line: 944,
          column: 28
        },
        end: {
          line: 944,
          column: 57
        }
      },
      "155": {
        start: {
          line: 945,
          column: 4
        },
        end: {
          line: 949,
          column: 5
        }
      },
      "156": {
        start: {
          line: 946,
          column: 6
        },
        end: {
          line: 948,
          column: 8
        }
      },
      "157": {
        start: {
          line: 950,
          column: 4
        },
        end: {
          line: 950,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 334,
            column: 2
          },
          end: {
            line: 334,
            column: 3
          }
        },
        loc: {
          start: {
            line: 334,
            column: 11
          },
          end: {
            line: 345,
            column: 3
          }
        },
        line: 334
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 339,
            column: 50
          },
          end: {
            line: 339,
            column: 51
          }
        },
        loc: {
          start: {
            line: 339,
            column: 57
          },
          end: {
            line: 339,
            column: 74
          }
        },
        line: 339
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 347,
            column: 2
          },
          end: {
            line: 347,
            column: 3
          }
        },
        loc: {
          start: {
            line: 361,
            column: 29
          },
          end: {
            line: 375,
            column: 3
          }
        },
        line: 361
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 365,
            column: 38
          },
          end: {
            line: 365,
            column: 39
          }
        },
        loc: {
          start: {
            line: 366,
            column: 8
          },
          end: {
            line: 366,
            column: 58
          }
        },
        line: 366
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 18
          },
          end: {
            line: 386,
            column: 3
          }
        },
        line: 380
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 391,
            column: 2
          },
          end: {
            line: 391,
            column: 3
          }
        },
        loc: {
          start: {
            line: 395,
            column: 29
          },
          end: {
            line: 416,
            column: 3
          }
        },
        line: 395
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 410,
            column: 24
          },
          end: {
            line: 410,
            column: 25
          }
        },
        loc: {
          start: {
            line: 411,
            column: 10
          },
          end: {
            line: 411,
            column: 46
          }
        },
        line: 411
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 418,
            column: 2
          },
          end: {
            line: 418,
            column: 3
          }
        },
        loc: {
          start: {
            line: 418,
            column: 70
          },
          end: {
            line: 423,
            column: 3
          }
        },
        line: 418
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 444,
            column: 2
          },
          end: {
            line: 444,
            column: 3
          }
        },
        loc: {
          start: {
            line: 446,
            column: 38
          },
          end: {
            line: 465,
            column: 3
          }
        },
        line: 446
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 467,
            column: 2
          },
          end: {
            line: 467,
            column: 3
          }
        },
        loc: {
          start: {
            line: 472,
            column: 38
          },
          end: {
            line: 483,
            column: 3
          }
        },
        line: 472
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 485,
            column: 13
          },
          end: {
            line: 485,
            column: 14
          }
        },
        loc: {
          start: {
            line: 485,
            column: 77
          },
          end: {
            line: 540,
            column: 3
          }
        },
        line: 485
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 542,
            column: 2
          },
          end: {
            line: 542,
            column: 3
          }
        },
        loc: {
          start: {
            line: 545,
            column: 4
          },
          end: {
            line: 578,
            column: 3
          }
        },
        line: 545
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 580,
            column: 2
          },
          end: {
            line: 580,
            column: 3
          }
        },
        loc: {
          start: {
            line: 580,
            column: 18
          },
          end: {
            line: 592,
            column: 3
          }
        },
        line: 580
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 594,
            column: 2
          },
          end: {
            line: 594,
            column: 3
          }
        },
        loc: {
          start: {
            line: 594,
            column: 43
          },
          end: {
            line: 602,
            column: 3
          }
        },
        line: 594
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 608,
            column: 9
          },
          end: {
            line: 608,
            column: 10
          }
        },
        loc: {
          start: {
            line: 620,
            column: 28
          },
          end: {
            line: 669,
            column: 3
          }
        },
        line: 620
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 640,
            column: 62
          },
          end: {
            line: 640,
            column: 63
          }
        },
        loc: {
          start: {
            line: 640,
            column: 68
          },
          end: {
            line: 640,
            column: 87
          }
        },
        line: 640
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 675,
            column: 2
          },
          end: {
            line: 675,
            column: 3
          }
        },
        loc: {
          start: {
            line: 675,
            column: 14
          },
          end: {
            line: 681,
            column: 3
          }
        },
        line: 675
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 689,
            column: 16
          },
          end: {
            line: 689,
            column: 17
          }
        },
        loc: {
          start: {
            line: 701,
            column: 42
          },
          end: {
            line: 706,
            column: 3
          }
        },
        line: 701
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 727,
            column: 29
          },
          end: {
            line: 727,
            column: 30
          }
        },
        loc: {
          start: {
            line: 735,
            column: 23
          },
          end: {
            line: 771,
            column: 3
          }
        },
        line: 735
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 757,
            column: 12
          },
          end: {
            line: 757,
            column: 13
          }
        },
        loc: {
          start: {
            line: 758,
            column: 14
          },
          end: {
            line: 762,
            column: 26
          }
        },
        line: 758
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 764,
            column: 15
          },
          end: {
            line: 764,
            column: 16
          }
        },
        loc: {
          start: {
            line: 765,
            column: 12
          },
          end: {
            line: 767,
            column: 24
          }
        },
        line: 765
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 789,
            column: 20
          },
          end: {
            line: 789,
            column: 21
          }
        },
        loc: {
          start: {
            line: 818,
            column: 28
          },
          end: {
            line: 884,
            column: 3
          }
        },
        line: 818
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 790,
            column: 18
          },
          end: {
            line: 790,
            column: 19
          }
        },
        loc: {
          start: {
            line: 791,
            column: 6
          },
          end: {
            line: 791,
            column: 58
          }
        },
        line: 791
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 873,
            column: 8
          },
          end: {
            line: 873,
            column: 9
          }
        },
        loc: {
          start: {
            line: 874,
            column: 10
          },
          end: {
            line: 879,
            column: 11
          }
        },
        line: 874
      },
      "24": {
        name: "(anonymous_24)",
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
            line: 892,
            column: 28
          },
          end: {
            line: 899,
            column: 3
          }
        },
        line: 892
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 921,
            column: 2
          },
          end: {
            line: 921,
            column: 3
          }
        },
        loc: {
          start: {
            line: 932,
            column: 41
          },
          end: {
            line: 951,
            column: 3
          }
        },
        line: 932
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 381,
            column: 4
          },
          end: {
            line: 384,
            column: 8
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 381,
            column: 4
          },
          end: {
            line: 384,
            column: 8
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
      "1": {
        loc: {
          start: {
            line: 399,
            column: 4
          },
          end: {
            line: 401,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 399,
            column: 4
          },
          end: {
            line: 401,
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
        line: 399
      },
      "2": {
        loc: {
          start: {
            line: 399,
            column: 8
          },
          end: {
            line: 399,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 399,
            column: 8
          },
          end: {
            line: 399,
            column: 31
          }
        }, {
          start: {
            line: 399,
            column: 35
          },
          end: {
            line: 399,
            column: 77
          }
        }],
        line: 399
      },
      "3": {
        loc: {
          start: {
            line: 403,
            column: 4
          },
          end: {
            line: 405,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 403,
            column: 4
          },
          end: {
            line: 405,
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
        line: 403
      },
      "4": {
        loc: {
          start: {
            line: 419,
            column: 28
          },
          end: {
            line: 419,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 419,
            column: 28
          },
          end: {
            line: 419,
            column: 49
          }
        }, {
          start: {
            line: 419,
            column: 53
          },
          end: {
            line: 419,
            column: 57
          }
        }],
        line: 419
      },
      "5": {
        loc: {
          start: {
            line: 421,
            column: 17
          },
          end: {
            line: 421,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 421,
            column: 17
          },
          end: {
            line: 421,
            column: 39
          }
        }, {
          start: {
            line: 421,
            column: 43
          },
          end: {
            line: 421,
            column: 48
          }
        }],
        line: 421
      },
      "6": {
        loc: {
          start: {
            line: 456,
            column: 11
          },
          end: {
            line: 456,
            column: 34
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 456,
            column: 11
          },
          end: {
            line: 456,
            column: 22
          }
        }, {
          start: {
            line: 456,
            column: 26
          },
          end: {
            line: 456,
            column: 34
          }
        }],
        line: 456
      },
      "7": {
        loc: {
          start: {
            line: 459,
            column: 54
          },
          end: {
            line: 459,
            column: 72
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 459,
            column: 54
          },
          end: {
            line: 459,
            column: 66
          }
        }, {
          start: {
            line: 459,
            column: 70
          },
          end: {
            line: 459,
            column: 72
          }
        }],
        line: 459
      },
      "8": {
        loc: {
          start: {
            line: 460,
            column: 18
          },
          end: {
            line: 460,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 460,
            column: 18
          },
          end: {
            line: 460,
            column: 42
          }
        }, {
          start: {
            line: 460,
            column: 46
          },
          end: {
            line: 460,
            column: 61
          }
        }],
        line: 460
      },
      "9": {
        loc: {
          start: {
            line: 462,
            column: 4
          },
          end: {
            line: 462,
            column: 46
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 462,
            column: 4
          },
          end: {
            line: 462,
            column: 46
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
        line: 462
      },
      "10": {
        loc: {
          start: {
            line: 478,
            column: 22
          },
          end: {
            line: 478,
            column: 99
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 478,
            column: 66
          },
          end: {
            line: 478,
            column: 85
          }
        }, {
          start: {
            line: 478,
            column: 88
          },
          end: {
            line: 478,
            column: 99
          }
        }],
        line: 478
      },
      "11": {
        loc: {
          start: {
            line: 480,
            column: 18
          },
          end: {
            line: 480,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 480,
            column: 18
          },
          end: {
            line: 480,
            column: 42
          }
        }, {
          start: {
            line: 480,
            column: 46
          },
          end: {
            line: 480,
            column: 61
          }
        }],
        line: 480
      },
      "12": {
        loc: {
          start: {
            line: 485,
            column: 20
          },
          end: {
            line: 485,
            column: 57
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 485,
            column: 55
          },
          end: {
            line: 485,
            column: 57
          }
        }],
        line: 485
      },
      "13": {
        loc: {
          start: {
            line: 486,
            column: 4
          },
          end: {
            line: 494,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 486,
            column: 4
          },
          end: {
            line: 494,
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
        line: 486
      },
      "14": {
        loc: {
          start: {
            line: 487,
            column: 6
          },
          end: {
            line: 492,
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
            line: 492,
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
      "15": {
        loc: {
          start: {
            line: 495,
            column: 14
          },
          end: {
            line: 495,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 495,
            column: 14
          },
          end: {
            line: 495,
            column: 21
          }
        }, {
          start: {
            line: 495,
            column: 25
          },
          end: {
            line: 495,
            column: 45
          }
        }],
        line: 495
      },
      "16": {
        loc: {
          start: {
            line: 502,
            column: 4
          },
          end: {
            line: 530,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 502,
            column: 4
          },
          end: {
            line: 530,
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
        line: 502
      },
      "17": {
        loc: {
          start: {
            line: 502,
            column: 8
          },
          end: {
            line: 502,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 502,
            column: 8
          },
          end: {
            line: 502,
            column: 15
          }
        }, {
          start: {
            line: 502,
            column: 19
          },
          end: {
            line: 502,
            column: 59
          }
        }],
        line: 502
      },
      "18": {
        loc: {
          start: {
            line: 508,
            column: 6
          },
          end: {
            line: 526,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 508,
            column: 6
          },
          end: {
            line: 526,
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
        line: 508
      },
      "19": {
        loc: {
          start: {
            line: 512,
            column: 15
          },
          end: {
            line: 512,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 512,
            column: 15
          },
          end: {
            line: 512,
            column: 31
          }
        }, {
          start: {
            line: 512,
            column: 35
          },
          end: {
            line: 512,
            column: 43
          }
        }],
        line: 512
      },
      "20": {
        loc: {
          start: {
            line: 518,
            column: 18
          },
          end: {
            line: 518,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 518,
            column: 18
          },
          end: {
            line: 518,
            column: 35
          }
        }, {
          start: {
            line: 518,
            column: 39
          },
          end: {
            line: 518,
            column: 41
          }
        }],
        line: 518
      },
      "21": {
        loc: {
          start: {
            line: 522,
            column: 12
          },
          end: {
            line: 522,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 522,
            column: 12
          },
          end: {
            line: 522,
            column: 41
          }
        }, {
          start: {
            line: 522,
            column: 45
          },
          end: {
            line: 522,
            column: 60
          }
        }],
        line: 522
      },
      "22": {
        loc: {
          start: {
            line: 532,
            column: 4
          },
          end: {
            line: 537,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 532,
            column: 4
          },
          end: {
            line: 537,
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
        line: 532
      },
      "23": {
        loc: {
          start: {
            line: 546,
            column: 4
          },
          end: {
            line: 551,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 546,
            column: 4
          },
          end: {
            line: 551,
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
        line: 546
      },
      "24": {
        loc: {
          start: {
            line: 546,
            column: 8
          },
          end: {
            line: 546,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 546,
            column: 8
          },
          end: {
            line: 546,
            column: 29
          }
        }, {
          start: {
            line: 546,
            column: 33
          },
          end: {
            line: 546,
            column: 63
          }
        }],
        line: 546
      },
      "25": {
        loc: {
          start: {
            line: 553,
            column: 4
          },
          end: {
            line: 557,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 553,
            column: 4
          },
          end: {
            line: 557,
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
        line: 553
      },
      "26": {
        loc: {
          start: {
            line: 558,
            column: 4
          },
          end: {
            line: 560,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 558,
            column: 4
          },
          end: {
            line: 560,
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
        line: 558
      },
      "27": {
        loc: {
          start: {
            line: 562,
            column: 4
          },
          end: {
            line: 568,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 562,
            column: 4
          },
          end: {
            line: 568,
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
        line: 562
      },
      "28": {
        loc: {
          start: {
            line: 571,
            column: 28
          },
          end: {
            line: 571,
            column: 90
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 571,
            column: 28
          },
          end: {
            line: 571,
            column: 45
          }
        }, {
          start: {
            line: 571,
            column: 49
          },
          end: {
            line: 571,
            column: 90
          }
        }],
        line: 571
      },
      "29": {
        loc: {
          start: {
            line: 582,
            column: 6
          },
          end: {
            line: 584,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 582,
            column: 6
          },
          end: {
            line: 584,
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
        line: 582
      },
      "30": {
        loc: {
          start: {
            line: 587,
            column: 6
          },
          end: {
            line: 587,
            column: 42
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 587,
            column: 6
          },
          end: {
            line: 587,
            column: 42
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
        line: 587
      },
      "31": {
        loc: {
          start: {
            line: 589,
            column: 6
          },
          end: {
            line: 589,
            column: 31
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 589,
            column: 6
          },
          end: {
            line: 589,
            column: 31
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
        line: 589
      },
      "32": {
        loc: {
          start: {
            line: 595,
            column: 4
          },
          end: {
            line: 595,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 595,
            column: 4
          },
          end: {
            line: 595,
            column: 51
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
        line: 595
      },
      "33": {
        loc: {
          start: {
            line: 597,
            column: 4
          },
          end: {
            line: 597,
            column: 33
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 597,
            column: 4
          },
          end: {
            line: 597,
            column: 33
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
        line: 597
      },
      "34": {
        loc: {
          start: {
            line: 600,
            column: 4
          },
          end: {
            line: 600,
            column: 31
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 600,
            column: 4
          },
          end: {
            line: 600,
            column: 31
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
        line: 600
      },
      "35": {
        loc: {
          start: {
            line: 608,
            column: 16
          },
          end: {
            line: 620,
            column: 8
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 620,
            column: 6
          },
          end: {
            line: 620,
            column: 8
          }
        }],
        line: 608
      },
      "36": {
        loc: {
          start: {
            line: 609,
            column: 4
          },
          end: {
            line: 609,
            column: 17
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 609,
            column: 12
          },
          end: {
            line: 609,
            column: 17
          }
        }],
        line: 609
      },
      "37": {
        loc: {
          start: {
            line: 610,
            column: 4
          },
          end: {
            line: 610,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 610,
            column: 22
          },
          end: {
            line: 610,
            column: 50
          }
        }],
        line: 610
      },
      "38": {
        loc: {
          start: {
            line: 621,
            column: 4
          },
          end: {
            line: 623,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 621,
            column: 4
          },
          end: {
            line: 623,
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
        line: 621
      },
      "39": {
        loc: {
          start: {
            line: 625,
            column: 4
          },
          end: {
            line: 630,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 625,
            column: 4
          },
          end: {
            line: 630,
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
        line: 625
      },
      "40": {
        loc: {
          start: {
            line: 625,
            column: 8
          },
          end: {
            line: 625,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 625,
            column: 8
          },
          end: {
            line: 625,
            column: 14
          }
        }, {
          start: {
            line: 625,
            column: 18
          },
          end: {
            line: 625,
            column: 33
          }
        }],
        line: 625
      },
      "41": {
        loc: {
          start: {
            line: 632,
            column: 4
          },
          end: {
            line: 637,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 632,
            column: 4
          },
          end: {
            line: 637,
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
        line: 632
      },
      "42": {
        loc: {
          start: {
            line: 641,
            column: 4
          },
          end: {
            line: 646,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 641,
            column: 4
          },
          end: {
            line: 646,
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
        line: 641
      },
      "43": {
        loc: {
          start: {
            line: 649,
            column: 6
          },
          end: {
            line: 649,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 649,
            column: 6
          },
          end: {
            line: 649,
            column: 35
          }
        }, {
          start: {
            line: 649,
            column: 39
          },
          end: {
            line: 649,
            column: 54
          }
        }],
        line: 649
      },
      "44": {
        loc: {
          start: {
            line: 676,
            column: 4
          },
          end: {
            line: 678,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 676,
            column: 4
          },
          end: {
            line: 678,
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
        line: 676
      },
      "45": {
        loc: {
          start: {
            line: 689,
            column: 23
          },
          end: {
            line: 701,
            column: 8
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 701,
            column: 6
          },
          end: {
            line: 701,
            column: 8
          }
        }],
        line: 689
      },
      "46": {
        loc: {
          start: {
            line: 690,
            column: 4
          },
          end: {
            line: 690,
            column: 17
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 690,
            column: 12
          },
          end: {
            line: 690,
            column: 17
          }
        }],
        line: 690
      },
      "47": {
        loc: {
          start: {
            line: 691,
            column: 4
          },
          end: {
            line: 691,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 691,
            column: 22
          },
          end: {
            line: 691,
            column: 50
          }
        }],
        line: 691
      },
      "48": {
        loc: {
          start: {
            line: 702,
            column: 4
          },
          end: {
            line: 704,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 702,
            column: 4
          },
          end: {
            line: 704,
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
        line: 702
      },
      "49": {
        loc: {
          start: {
            line: 727,
            column: 30
          },
          end: {
            line: 735,
            column: 8
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 735,
            column: 6
          },
          end: {
            line: 735,
            column: 8
          }
        }],
        line: 727
      },
      "50": {
        loc: {
          start: {
            line: 728,
            column: 4
          },
          end: {
            line: 728,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 728,
            column: 27
          },
          end: {
            line: 728,
            column: 32
          }
        }],
        line: 728
      },
      "51": {
        loc: {
          start: {
            line: 736,
            column: 4
          },
          end: {
            line: 738,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 736,
            column: 4
          },
          end: {
            line: 738,
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
        line: 736
      },
      "52": {
        loc: {
          start: {
            line: 743,
            column: 4
          },
          end: {
            line: 749,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 743,
            column: 4
          },
          end: {
            line: 749,
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
        line: 743
      },
      "53": {
        loc: {
          start: {
            line: 755,
            column: 9
          },
          end: {
            line: 755,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 755,
            column: 9
          },
          end: {
            line: 755,
            column: 37
          }
        }, {
          start: {
            line: 755,
            column: 41
          },
          end: {
            line: 755,
            column: 43
          }
        }],
        line: 755
      },
      "54": {
        loc: {
          start: {
            line: 758,
            column: 14
          },
          end: {
            line: 762,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 758,
            column: 14
          },
          end: {
            line: 759,
            column: 68
          }
        }, {
          start: {
            line: 760,
            column: 15
          },
          end: {
            line: 760,
            column: 35
          }
        }, {
          start: {
            line: 761,
            column: 16
          },
          end: {
            line: 762,
            column: 25
          }
        }],
        line: 758
      },
      "55": {
        loc: {
          start: {
            line: 789,
            column: 27
          },
          end: {
            line: 818,
            column: 8
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 818,
            column: 6
          },
          end: {
            line: 818,
            column: 8
          }
        }],
        line: 789
      },
      "56": {
        loc: {
          start: {
            line: 790,
            column: 4
          },
          end: {
            line: 791,
            column: 61
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 790,
            column: 17
          },
          end: {
            line: 791,
            column: 61
          }
        }],
        line: 790
      },
      "57": {
        loc: {
          start: {
            line: 792,
            column: 4
          },
          end: {
            line: 792,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 792,
            column: 20
          },
          end: {
            line: 792,
            column: 46
          }
        }],
        line: 792
      },
      "58": {
        loc: {
          start: {
            line: 793,
            column: 4
          },
          end: {
            line: 793,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 793,
            column: 14
          },
          end: {
            line: 793,
            column: 36
          }
        }],
        line: 793
      },
      "59": {
        loc: {
          start: {
            line: 794,
            column: 4
          },
          end: {
            line: 794,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 794,
            column: 21
          },
          end: {
            line: 794,
            column: 46
          }
        }],
        line: 794
      },
      "60": {
        loc: {
          start: {
            line: 819,
            column: 4
          },
          end: {
            line: 820,
            column: 77
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 819,
            column: 4
          },
          end: {
            line: 820,
            column: 77
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
        line: 819
      },
      "61": {
        loc: {
          start: {
            line: 823,
            column: 4
          },
          end: {
            line: 840,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 823,
            column: 4
          },
          end: {
            line: 840,
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
        line: 823
      },
      "62": {
        loc: {
          start: {
            line: 825,
            column: 6
          },
          end: {
            line: 829,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 825,
            column: 6
          },
          end: {
            line: 829,
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
        line: 825
      },
      "63": {
        loc: {
          start: {
            line: 830,
            column: 6
          },
          end: {
            line: 834,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 830,
            column: 6
          },
          end: {
            line: 834,
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
        line: 830
      },
      "64": {
        loc: {
          start: {
            line: 830,
            column: 43
          },
          end: {
            line: 830,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 830,
            column: 43
          },
          end: {
            line: 830,
            column: 50
          }
        }, {
          start: {
            line: 830,
            column: 54
          },
          end: {
            line: 830,
            column: 56
          }
        }],
        line: 830
      },
      "65": {
        loc: {
          start: {
            line: 835,
            column: 6
          },
          end: {
            line: 839,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 835,
            column: 6
          },
          end: {
            line: 839,
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
        line: 835
      },
      "66": {
        loc: {
          start: {
            line: 845,
            column: 24
          },
          end: {
            line: 845,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 845,
            column: 24
          },
          end: {
            line: 845,
            column: 52
          }
        }, {
          start: {
            line: 845,
            column: 56
          },
          end: {
            line: 845,
            column: 58
          }
        }],
        line: 845
      },
      "67": {
        loc: {
          start: {
            line: 851,
            column: 6
          },
          end: {
            line: 859,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 851,
            column: 6
          },
          end: {
            line: 859,
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
        line: 851
      },
      "68": {
        loc: {
          start: {
            line: 866,
            column: 6
          },
          end: {
            line: 866,
            column: 49
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 866,
            column: 6
          },
          end: {
            line: 866,
            column: 49
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
        line: 866
      },
      "69": {
        loc: {
          start: {
            line: 868,
            column: 41
          },
          end: {
            line: 868,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 868,
            column: 41
          },
          end: {
            line: 868,
            column: 54
          }
        }, {
          start: {
            line: 868,
            column: 58
          },
          end: {
            line: 868,
            column: 73
          }
        }],
        line: 868
      },
      "70": {
        loc: {
          start: {
            line: 898,
            column: 11
          },
          end: {
            line: 898,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 898,
            column: 11
          },
          end: {
            line: 898,
            column: 27
          }
        }, {
          start: {
            line: 898,
            column: 31
          },
          end: {
            line: 898,
            column: 48
          }
        }],
        line: 898
      },
      "71": {
        loc: {
          start: {
            line: 933,
            column: 4
          },
          end: {
            line: 935,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 933,
            column: 4
          },
          end: {
            line: 935,
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
        line: 933
      },
      "72": {
        loc: {
          start: {
            line: 936,
            column: 14
          },
          end: {
            line: 936,
            column: 68
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 936,
            column: 14
          },
          end: {
            line: 936,
            column: 21
          }
        }, {
          start: {
            line: 936,
            column: 25
          },
          end: {
            line: 936,
            column: 68
          }
        }],
        line: 936
      },
      "73": {
        loc: {
          start: {
            line: 945,
            column: 4
          },
          end: {
            line: 949,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 945,
            column: 4
          },
          end: {
            line: 949,
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
        line: 945
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
      "157": 0
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
      "25": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
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
      "12": [0],
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
      "35": [0],
      "36": [0],
      "37": [0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0],
      "46": [0],
      "47": [0],
      "48": [0, 0],
      "49": [0],
      "50": [0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0, 0],
      "55": [0],
      "56": [0],
      "57": [0],
      "58": [0],
      "59": [0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0],
      "66": [0, 0],
      "67": [0, 0],
      "68": [0, 0],
      "69": [0, 0],
      "70": [0, 0],
      "71": [0, 0],
      "72": [0, 0],
      "73": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "802c20d9877042b483080d5b969650da6b1339bb"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1sqdj42y8p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1sqdj42y8p();
/* disable max-classes rule, because extending error shouldn't count! */
/* eslint max-classes-per-file: 0 */
/** @module contract */

/**
 * The main workhorse of {@link Client}. This class is used to wrap a
 * transaction-under-construction and provide high-level interfaces to the most
 * common workflows, while still providing access to low-level stellar-sdk
 * transaction manipulation.
 *
 * Most of the time, you will not construct an `AssembledTransaction` directly,
 * but instead receive one as the return value of a `Client` method. If
 * you're familiar with the libraries generated by soroban-cli's `contract
 * bindings typescript` command, these also wraps `Client` and return
 * `AssembledTransaction` instances.
 *
 * Let's look at examples of how to use `AssembledTransaction` for a variety of
 * use-cases:
 *
 * #### 1. Simple read call
 *
 * Since these only require simulation, you can get the `result` of the call
 * right after constructing your `AssembledTransaction`:
 *
 * ```ts
 * const { result } = await AssembledTransaction.build({
 *   method: 'myReadMethod',
 *   args: spec.funcArgsToScVals('myReadMethod', {
 *     args: 'for',
 *     my: 'method',
 *     ...
 *   }),
 *   contractId: 'C123…',
 *   networkPassphrase: '…',
 *   rpcUrl: 'https://…',
 *   publicKey: undefined, // irrelevant, for simulation-only read calls
 *   parseResultXdr: (result: xdr.ScVal) =>
 *     spec.funcResToNative('myReadMethod', result),
 * })
 * ```
 *
 * While that looks pretty complicated, most of the time you will use this in
 * conjunction with {@link Client}, which simplifies it to:
 *
 * ```ts
 * const { result }  = await client.myReadMethod({
 *   args: 'for',
 *   my: 'method',
 *   ...
 * })
 * ```
 *
 * #### 2. Simple write call
 *
 * For write calls that will be simulated and then sent to the network without
 * further manipulation, only one more step is needed:
 *
 * ```ts
 * const assembledTx = await client.myWriteMethod({
 *   args: 'for',
 *   my: 'method',
 *   ...
 * })
 * const sentTx = await assembledTx.signAndSend()
 * ```
 *
 * Here we're assuming that you're using a {@link Client}, rather than
 * constructing `AssembledTransaction`'s directly.
 *
 * Note that `sentTx`, the return value of `signAndSend`, is a
 * {@link SentTransaction}. `SentTransaction` is similar to
 * `AssembledTransaction`, but is missing many of the methods and fields that
 * are only relevant while assembling a transaction. It also has a few extra
 * methods and fields that are only relevant after the transaction has been
 * sent to the network.
 *
 * Like `AssembledTransaction`, `SentTransaction` also has a `result` getter,
 * which contains the parsed final return value of the contract call. Most of
 * the time, you may only be interested in this, so rather than getting the
 * whole `sentTx` you may just want to:
 *
 * ```ts
 * const tx = await client.myWriteMethod({ args: 'for', my: 'method', ... })
 * const { result } = await tx.signAndSend()
 * ```
 *
 * #### 3. More fine-grained control over transaction construction
 *
 * If you need more control over the transaction before simulating it, you can
 * set various {@link MethodOptions} when constructing your
 * `AssembledTransaction`. With a {@link Client}, this is passed as a
 * second object after the arguments (or the only object, if the method takes
 * no arguments):
 *
 * ```ts
 * const tx = await client.myWriteMethod(
 *   {
 *     args: 'for',
 *     my: 'method',
 *     ...
 *   }, {
 *     fee: '10000', // default: {@link BASE_FEE}
 *     simulate: false,
 *     timeoutInSeconds: 20, // default: {@link DEFAULT_TIMEOUT}
 *   }
 * )
 * ```
 *
 * Since we've skipped simulation, we can now edit the `raw` transaction and
 * then manually call `simulate`:
 *
 * ```ts
 * tx.raw.addMemo(Memo.text('Nice memo, friend!'))
 * await tx.simulate()
 * ```
 *
 * If you need to inspect the simulation later, you can access it with
 * `tx.simulation`.
 *
 * #### 4. Multi-auth workflows
 *
 * Soroban, and Stellar in general, allows multiple parties to sign a
 * transaction.
 *
 * Let's consider an Atomic Swap contract. Alice wants to give 10 of her Token
 * A tokens to Bob for 5 of his Token B tokens.
 *
 * ```ts
 * const ALICE = 'G123...'
 * const BOB = 'G456...'
 * const TOKEN_A = 'C123…'
 * const TOKEN_B = 'C456…'
 * const AMOUNT_A = 10n
 * const AMOUNT_B = 5n
 * ```
 *
 * Let's say Alice is also going to be the one signing the final transaction
 * envelope, meaning she is the invoker. So your app, from Alice's browser,
 * simulates the `swap` call:
 *
 * ```ts
 * const tx = await swapClient.swap({
 *   a: ALICE,
 *   b: BOB,
 *   token_a: TOKEN_A,
 *   token_b: TOKEN_B,
 *   amount_a: AMOUNT_A,
 *   amount_b: AMOUNT_B,
 * })
 * ```
 *
 * But your app can't `signAndSend` this right away, because Bob needs to sign
 * it first. You can check this:
 *
 * ```ts
 * const whoElseNeedsToSign = tx.needsNonInvokerSigningBy()
 * ```
 *
 * You can verify that `whoElseNeedsToSign` is an array of length `1`,
 * containing only Bob's public key.
 *
 * Then, still on Alice's machine, you can serialize the
 * transaction-under-assembly:
 *
 * ```ts
 * const json = tx.toJSON()
 * ```
 *
 * And now you need to send it to Bob's browser. How you do this depends on
 * your app. Maybe you send it to a server first, maybe you use WebSockets, or
 * maybe you have Alice text the JSON blob to Bob and have him paste it into
 * your app in his browser (note: this option might be error-prone 😄).
 *
 * Once you get the JSON blob into your app on Bob's machine, you can
 * deserialize it:
 *
 * ```ts
 * const tx = swapClient.txFromJSON(json)
 * ```
 *
 * Or, if you're using a client generated with `soroban contract bindings
 * typescript`, this deserialization will look like:
 *
 * ```ts
 * const tx = swapClient.fromJSON.swap(json)
 * ```
 *
 * Then you can have Bob sign it. What Bob will actually need to sign is some
 * _auth entries_ within the transaction, not the transaction itself or the
 * transaction envelope. Your app can verify that Bob has the correct wallet
 * selected, then:
 *
 * ```ts
 * await tx.signAuthEntries()
 * ```
 *
 * Under the hood, this uses `signAuthEntry`, which you either need to inject
 * during initial construction of the `Client`/`AssembledTransaction`,
 * or which you can pass directly to `signAuthEntries`.
 *
 * Now Bob can again serialize the transaction and send back to Alice, where
 * she can finally call `signAndSend()`.
 *
 * To see an even more complicated example, where Alice swaps with Bob but the
 * transaction is invoked by yet another party, check out
 * [test-swap.js](../../test/e2e/src/test-swap.js).
 *
 * @memberof module:contract
 */
class AssembledTransaction {
  /**
   * The TransactionBuilder as constructed in `{@link
   * AssembledTransaction}.build`. Feel free set `simulate: false` to modify
   * this object before calling `tx.simulate()` manually. Example:
   *
   * ```ts
   * const tx = await myContract.myMethod(
   *   { args: 'for', my: 'method', ... },
   *   { simulate: false }
   * );
   * tx.raw.addMemo(Memo.text('Nice memo, friend!'))
   * await tx.simulate();
   * ```
   */

  /**
   * The Transaction as it was built with `raw.build()` right before
   * simulation. Once this is set, modifying `raw` will have no effect unless
   * you call `tx.simulate()` again.
   */

  /**
   * The result of the transaction simulation. This is set after the first call
   * to `simulate`. It is difficult to serialize and deserialize, so it is not
   * included in the `toJSON` and `fromJSON` methods. See `simulationData`
   * cached, serializable access to the data needed by AssembledTransaction
   * logic.
   */

  /**
   * Cached simulation result. This is set after the first call to
   * {@link AssembledTransaction#simulationData}, and is used to facilitate
   * serialization and deserialization of the AssembledTransaction.
   *
   * Most of the time, if you need this data, you can call
   * `tx.simulation.result`.
   *
   * If you need access to this data after a transaction has been serialized
   * and then deserialized, you can call `simulationData.result`.
   */

  /**
   * Cached simulation transaction data. This is set after the first call to
   * {@link AssembledTransaction#simulationData}, and is used to facilitate
   * serialization and deserialization of the AssembledTransaction.
   *
   * Most of the time, if you need this data, you can call
   * `simulation.transactionData`.
   *
   * If you need access to this data after a transaction has been serialized
   * and then deserialized, you can call `simulationData.transactionData`.
   */

  /**
   * The Soroban server to use for all RPC calls. This is constructed from the
   * `rpcUrl` in the options.
   */

  /**
   * The signed transaction.
   */

  /**
   * A list of the most important errors that various AssembledTransaction
   * methods can throw. Feel free to catch specific errors in your application
   * logic.
   */
  static Errors = (cov_1sqdj42y8p().s[0]++, {
    ExpiredState: class ExpiredStateError extends Error {},
    RestorationFailure: class RestoreFailureError extends Error {},
    NeedsMoreSignatures: class NeedsMoreSignaturesError extends Error {},
    NoSignatureNeeded: class NoSignatureNeededError extends Error {},
    NoUnsignedNonInvokerAuthEntries: class NoUnsignedNonInvokerAuthEntriesError extends Error {},
    NoSigner: class NoSignerError extends Error {},
    NotYetSimulated: class NotYetSimulatedError extends Error {},
    FakeAccount: class FakeAccountError extends Error {}
  });

  /**
   * Serialize the AssembledTransaction to a JSON string. This is useful for
   * saving the transaction to a database or sending it over the wire for
   * multi-auth workflows. `fromJSON` can be used to deserialize the
   * transaction. This only works with transactions that have been simulated.
   */
  toJSON() {
    cov_1sqdj42y8p().f[0]++;
    cov_1sqdj42y8p().s[1]++;
    return JSON.stringify({
      method: this.options.method,
      tx: this.built?.toXDR(),
      simulationResult: {
        auth: this.simulationData.result.auth.map(a => {
          cov_1sqdj42y8p().f[1]++;
          cov_1sqdj42y8p().s[2]++;
          return a.toXDR("base64");
        }),
        retval: this.simulationData.result.retval.toXDR("base64")
      },
      simulationTransactionData: this.simulationData.transactionData.toXDR("base64")
    });
  }
  static fromJSON(options, {
    tx,
    simulationResult,
    simulationTransactionData
  }) {
    cov_1sqdj42y8p().f[2]++;
    const txn = (cov_1sqdj42y8p().s[3]++, new AssembledTransaction(options));
    cov_1sqdj42y8p().s[4]++;
    txn.built = _stellarBase.TransactionBuilder.fromXDR(tx, options.networkPassphrase);
    cov_1sqdj42y8p().s[5]++;
    txn.simulationResult = {
      auth: simulationResult.auth.map(a => {
        cov_1sqdj42y8p().f[3]++;
        cov_1sqdj42y8p().s[6]++;
        return _stellarBase.xdr.SorobanAuthorizationEntry.fromXDR(a, "base64");
      }),
      retval: _stellarBase.xdr.ScVal.fromXDR(simulationResult.retval, "base64")
    };
    cov_1sqdj42y8p().s[7]++;
    txn.simulationTransactionData = _stellarBase.xdr.SorobanTransactionData.fromXDR(simulationTransactionData, "base64");
    cov_1sqdj42y8p().s[8]++;
    return txn;
  }

  /**
   * Serialize the AssembledTransaction to a base64-encoded XDR string.
   */
  toXDR() {
    cov_1sqdj42y8p().f[4]++;
    cov_1sqdj42y8p().s[9]++;
    if (!this.built) {
      cov_1sqdj42y8p().b[0][0]++;
      cov_1sqdj42y8p().s[10]++;
      throw new Error("Transaction has not yet been simulated; " + "call `AssembledTransaction.simulate` first.");
    } else {
      cov_1sqdj42y8p().b[0][1]++;
    }
    cov_1sqdj42y8p().s[11]++;
    return this.built?.toEnvelope().toXDR('base64');
  }

  /**
   * Deserialize the AssembledTransaction from a base64-encoded XDR string.
   */
  static fromXDR(options, encodedXDR, spec) {
    cov_1sqdj42y8p().f[5]++;
    const envelope = (cov_1sqdj42y8p().s[12]++, _stellarBase.xdr.TransactionEnvelope.fromXDR(encodedXDR, "base64"));
    const built = (cov_1sqdj42y8p().s[13]++, _stellarBase.TransactionBuilder.fromXDR(envelope, options.networkPassphrase));
    const operation = (cov_1sqdj42y8p().s[14]++, built.operations[0]);
    cov_1sqdj42y8p().s[15]++;
    if ((cov_1sqdj42y8p().b[2][0]++, !operation?.func?.value) || (cov_1sqdj42y8p().b[2][1]++, typeof operation.func.value !== 'function')) {
      cov_1sqdj42y8p().b[1][0]++;
      cov_1sqdj42y8p().s[16]++;
      throw new Error("Could not extract the method from the transaction envelope.");
    } else {
      cov_1sqdj42y8p().b[1][1]++;
    }
    const invokeContractArgs = (cov_1sqdj42y8p().s[17]++, operation.func.value());
    cov_1sqdj42y8p().s[18]++;
    if (!invokeContractArgs?.functionName) {
      cov_1sqdj42y8p().b[3][0]++;
      cov_1sqdj42y8p().s[19]++;
      throw new Error("Could not extract the method name from the transaction envelope.");
    } else {
      cov_1sqdj42y8p().b[3][1]++;
    }
    const method = (cov_1sqdj42y8p().s[20]++, invokeContractArgs.functionName().toString('utf-8'));
    const txn = (cov_1sqdj42y8p().s[21]++, new AssembledTransaction({
      ...options,
      method,
      parseResultXdr: result => {
        cov_1sqdj42y8p().f[6]++;
        cov_1sqdj42y8p().s[22]++;
        return spec.funcResToNative(method, result);
      }
    }));
    cov_1sqdj42y8p().s[23]++;
    txn.built = built;
    cov_1sqdj42y8p().s[24]++;
    return txn;
  }
  constructor(options) {
    this.options = options;
    cov_1sqdj42y8p().f[7]++;
    cov_1sqdj42y8p().s[25]++;
    this.options.simulate = (cov_1sqdj42y8p().b[4][0]++, this.options.simulate) ?? (cov_1sqdj42y8p().b[4][1]++, true);
    cov_1sqdj42y8p().s[26]++;
    this.server = new _rpc.Server(this.options.rpcUrl, {
      allowHttp: (cov_1sqdj42y8p().b[5][0]++, this.options.allowHttp) ?? (cov_1sqdj42y8p().b[5][1]++, false)
    });
  }

  /**
   * Construct a new AssembledTransaction. This is the only way to create a new
   * AssembledTransaction; the main constructor is private.
   *
   * This is an asynchronous constructor for two reasons:
   *
   * 1. It needs to fetch the account from the network to get the current
   *   sequence number.
   * 2. It needs to simulate the transaction to get the expected fee.
   *
   * If you don't want to simulate the transaction, you can set `simulate` to
   * `false` in the options.
   *
   * @example
   * const tx = await AssembledTransaction.build({
   *   ...,
   *   simulate: false,
   * })
   */
  static async build(options) {
    cov_1sqdj42y8p().f[8]++;
    const tx = (cov_1sqdj42y8p().s[27]++, new AssembledTransaction(options));
    const contract = (cov_1sqdj42y8p().s[28]++, new _stellarBase.Contract(options.contractId));
    const account = (cov_1sqdj42y8p().s[29]++, await (0, _utils.getAccount)(options, tx.server));
    cov_1sqdj42y8p().s[30]++;
    tx.raw = new _stellarBase.TransactionBuilder(account, {
      fee: (cov_1sqdj42y8p().b[6][0]++, options.fee) ?? (cov_1sqdj42y8p().b[6][1]++, _stellarBase.BASE_FEE),
      networkPassphrase: options.networkPassphrase
    }).addOperation(contract.call(options.method, ...((cov_1sqdj42y8p().b[7][0]++, options.args) ?? (cov_1sqdj42y8p().b[7][1]++, [])))).setTimeout((cov_1sqdj42y8p().b[8][0]++, options.timeoutInSeconds) ?? (cov_1sqdj42y8p().b[8][1]++, _types.DEFAULT_TIMEOUT));
    cov_1sqdj42y8p().s[31]++;
    if (options.simulate) {
      cov_1sqdj42y8p().b[9][0]++;
      cov_1sqdj42y8p().s[32]++;
      await tx.simulate();
    } else {
      cov_1sqdj42y8p().b[9][1]++;
    }
    cov_1sqdj42y8p().s[33]++;
    return tx;
  }
  static async buildFootprintRestoreTransaction(options, sorobanData, account, fee) {
    cov_1sqdj42y8p().f[9]++;
    const tx = (cov_1sqdj42y8p().s[34]++, new AssembledTransaction(options));
    cov_1sqdj42y8p().s[35]++;
    tx.raw = new _stellarBase.TransactionBuilder(account, {
      fee,
      networkPassphrase: options.networkPassphrase
    }).setSorobanData(sorobanData instanceof _stellarBase.SorobanDataBuilder ? (cov_1sqdj42y8p().b[10][0]++, sorobanData.build()) : (cov_1sqdj42y8p().b[10][1]++, sorobanData)).addOperation(_stellarBase.Operation.restoreFootprint({})).setTimeout((cov_1sqdj42y8p().b[11][0]++, options.timeoutInSeconds) ?? (cov_1sqdj42y8p().b[11][1]++, _types.DEFAULT_TIMEOUT));
    cov_1sqdj42y8p().s[36]++;
    await tx.simulate({
      restore: false
    });
    cov_1sqdj42y8p().s[37]++;
    return tx;
  }
  simulate = (cov_1sqdj42y8p().s[38]++, async ({
    restore
  } = (cov_1sqdj42y8p().b[12][0]++, {})) => {
    cov_1sqdj42y8p().f[10]++;
    cov_1sqdj42y8p().s[39]++;
    if (!this.built) {
      cov_1sqdj42y8p().b[13][0]++;
      cov_1sqdj42y8p().s[40]++;
      if (!this.raw) {
        cov_1sqdj42y8p().b[14][0]++;
        cov_1sqdj42y8p().s[41]++;
        throw new Error("Transaction has not yet been assembled; " + "call `AssembledTransaction.build` first.");
      } else {
        cov_1sqdj42y8p().b[14][1]++;
      }
      cov_1sqdj42y8p().s[42]++;
      this.built = this.raw.build();
    } else {
      cov_1sqdj42y8p().b[13][1]++;
    }
    cov_1sqdj42y8p().s[43]++;
    restore = (cov_1sqdj42y8p().b[15][0]++, restore) ?? (cov_1sqdj42y8p().b[15][1]++, this.options.restore);

    // need to force re-calculation of simulationData for new simulation
    cov_1sqdj42y8p().s[44]++;
    delete this.simulationResult;
    cov_1sqdj42y8p().s[45]++;
    delete this.simulationTransactionData;
    cov_1sqdj42y8p().s[46]++;
    this.simulation = await this.server.simulateTransaction(this.built);
    cov_1sqdj42y8p().s[47]++;
    if ((cov_1sqdj42y8p().b[17][0]++, restore) && (cov_1sqdj42y8p().b[17][1]++, _api.Api.isSimulationRestore(this.simulation))) {
      cov_1sqdj42y8p().b[16][0]++;
      const account = (cov_1sqdj42y8p().s[48]++, await (0, _utils.getAccount)(this.options, this.server));
      const result = (cov_1sqdj42y8p().s[49]++, await this.restoreFootprint(this.simulation.restorePreamble, account));
      cov_1sqdj42y8p().s[50]++;
      if (result.status === _api.Api.GetTransactionStatus.SUCCESS) {
        cov_1sqdj42y8p().b[18][0]++;
        // need to rebuild the transaction with bumped account sequence number
        const contract = (cov_1sqdj42y8p().s[51]++, new _stellarBase.Contract(this.options.contractId));
        cov_1sqdj42y8p().s[52]++;
        this.raw = new _stellarBase.TransactionBuilder(account, {
          fee: (cov_1sqdj42y8p().b[19][0]++, this.options.fee) ?? (cov_1sqdj42y8p().b[19][1]++, _stellarBase.BASE_FEE),
          networkPassphrase: this.options.networkPassphrase
        }).addOperation(contract.call(this.options.method, ...((cov_1sqdj42y8p().b[20][0]++, this.options.args) ?? (cov_1sqdj42y8p().b[20][1]++, [])))).setTimeout((cov_1sqdj42y8p().b[21][0]++, this.options.timeoutInSeconds) ?? (cov_1sqdj42y8p().b[21][1]++, _types.DEFAULT_TIMEOUT));
        cov_1sqdj42y8p().s[53]++;
        await this.simulate();
        cov_1sqdj42y8p().s[54]++;
        return this;
      } else {
        cov_1sqdj42y8p().b[18][1]++;
      }
      cov_1sqdj42y8p().s[55]++;
      throw new AssembledTransaction.Errors.RestorationFailure(`Automatic restore failed! You set 'restore: true' but the attempted restore did not work. Result:\n${JSON.stringify(result)}`);
    } else {
      cov_1sqdj42y8p().b[16][1]++;
    }
    cov_1sqdj42y8p().s[56]++;
    if (_api.Api.isSimulationSuccess(this.simulation)) {
      cov_1sqdj42y8p().b[22][0]++;
      cov_1sqdj42y8p().s[57]++;
      this.built = (0, _transaction.assembleTransaction)(this.built, this.simulation).build();
    } else {
      cov_1sqdj42y8p().b[22][1]++;
    }
    cov_1sqdj42y8p().s[58]++;
    return this;
  });
  get simulationData() {
    cov_1sqdj42y8p().f[11]++;
    cov_1sqdj42y8p().s[59]++;
    if ((cov_1sqdj42y8p().b[24][0]++, this.simulationResult) && (cov_1sqdj42y8p().b[24][1]++, this.simulationTransactionData)) {
      cov_1sqdj42y8p().b[23][0]++;
      cov_1sqdj42y8p().s[60]++;
      return {
        result: this.simulationResult,
        transactionData: this.simulationTransactionData
      };
    } else {
      cov_1sqdj42y8p().b[23][1]++;
    }
    const simulation = (cov_1sqdj42y8p().s[61]++, this.simulation);
    cov_1sqdj42y8p().s[62]++;
    if (!simulation) {
      cov_1sqdj42y8p().b[25][0]++;
      cov_1sqdj42y8p().s[63]++;
      throw new AssembledTransaction.Errors.NotYetSimulated("Transaction has not yet been simulated");
    } else {
      cov_1sqdj42y8p().b[25][1]++;
    }
    cov_1sqdj42y8p().s[64]++;
    if (_api.Api.isSimulationError(simulation)) {
      cov_1sqdj42y8p().b[26][0]++;
      cov_1sqdj42y8p().s[65]++;
      throw new Error(`Transaction simulation failed: "${simulation.error}"`);
    } else {
      cov_1sqdj42y8p().b[26][1]++;
    }
    cov_1sqdj42y8p().s[66]++;
    if (_api.Api.isSimulationRestore(simulation)) {
      cov_1sqdj42y8p().b[27][0]++;
      cov_1sqdj42y8p().s[67]++;
      throw new AssembledTransaction.Errors.ExpiredState(`You need to restore some contract state before you can invoke this method.\n` + 'You can set `restore` to true in the method options in order to ' + 'automatically restore the contract state when needed.');
    } else {
      cov_1sqdj42y8p().b[27][1]++;
    }

    // add to object for serialization & deserialization
    cov_1sqdj42y8p().s[68]++;
    this.simulationResult = (cov_1sqdj42y8p().b[28][0]++, simulation.result) ?? (cov_1sqdj42y8p().b[28][1]++, {
      auth: [],
      retval: _stellarBase.xdr.ScVal.scvVoid()
    });
    cov_1sqdj42y8p().s[69]++;
    this.simulationTransactionData = simulation.transactionData.build();
    cov_1sqdj42y8p().s[70]++;
    return {
      result: this.simulationResult,
      transactionData: this.simulationTransactionData
    };
  }
  get result() {
    cov_1sqdj42y8p().f[12]++;
    cov_1sqdj42y8p().s[71]++;
    try {
      cov_1sqdj42y8p().s[72]++;
      if (!this.simulationData.result) {
        cov_1sqdj42y8p().b[29][0]++;
        cov_1sqdj42y8p().s[73]++;
        throw new Error("No simulation result!");
      } else {
        cov_1sqdj42y8p().b[29][1]++;
      }
      cov_1sqdj42y8p().s[74]++;
      return this.options.parseResultXdr(this.simulationData.result.retval);
    } catch (e) {
      cov_1sqdj42y8p().s[75]++;
      if (!(0, _utils.implementsToString)(e)) {
        cov_1sqdj42y8p().b[30][0]++;
        cov_1sqdj42y8p().s[76]++;
        throw e;
      } else {
        cov_1sqdj42y8p().b[30][1]++;
      }
      const err = (cov_1sqdj42y8p().s[77]++, this.parseError(e.toString()));
      cov_1sqdj42y8p().s[78]++;
      if (err) {
        cov_1sqdj42y8p().b[31][0]++;
        cov_1sqdj42y8p().s[79]++;
        return err;
      } else {
        cov_1sqdj42y8p().b[31][1]++;
      }
      cov_1sqdj42y8p().s[80]++;
      throw e; // eslint-disable-line
    }
  }
  parseError(errorMessage) {
    cov_1sqdj42y8p().f[13]++;
    cov_1sqdj42y8p().s[81]++;
    if (!this.options.errorTypes) {
      cov_1sqdj42y8p().b[32][0]++;
      cov_1sqdj42y8p().s[82]++;
      return undefined;
    } else {
      cov_1sqdj42y8p().b[32][1]++;
    }
    const match = (cov_1sqdj42y8p().s[83]++, errorMessage.match(_utils.contractErrorPattern));
    cov_1sqdj42y8p().s[84]++;
    if (!match) {
      cov_1sqdj42y8p().b[33][0]++;
      cov_1sqdj42y8p().s[85]++;
      return undefined;
    } else {
      cov_1sqdj42y8p().b[33][1]++;
    }
    const i = (cov_1sqdj42y8p().s[86]++, parseInt(match[1], 10));
    const err = (cov_1sqdj42y8p().s[87]++, this.options.errorTypes[i]);
    cov_1sqdj42y8p().s[88]++;
    if (!err) {
      cov_1sqdj42y8p().b[34][0]++;
      cov_1sqdj42y8p().s[89]++;
      return undefined;
    } else {
      cov_1sqdj42y8p().b[34][1]++;
    }
    cov_1sqdj42y8p().s[90]++;
    return new _rust_result.Err(err);
  }

  /**
   * Sign the transaction with the signTransaction function included previously.
   * If you did not previously include one, you need to include one now.
   */
  sign = (cov_1sqdj42y8p().s[91]++, async ({
    force = (cov_1sqdj42y8p().b[36][0]++, false),
    signTransaction = (cov_1sqdj42y8p().b[37][0]++, this.options.signTransaction)
  } = (cov_1sqdj42y8p().b[35][0]++, {})) => {
    cov_1sqdj42y8p().f[14]++;
    cov_1sqdj42y8p().s[92]++;
    if (!this.built) {
      cov_1sqdj42y8p().b[38][0]++;
      cov_1sqdj42y8p().s[93]++;
      throw new Error("Transaction has not yet been simulated");
    } else {
      cov_1sqdj42y8p().b[38][1]++;
    }
    cov_1sqdj42y8p().s[94]++;
    if ((cov_1sqdj42y8p().b[40][0]++, !force) && (cov_1sqdj42y8p().b[40][1]++, this.isReadCall)) {
      cov_1sqdj42y8p().b[39][0]++;
      cov_1sqdj42y8p().s[95]++;
      throw new AssembledTransaction.Errors.NoSignatureNeeded("This is a read call. It requires no signature or sending. " + "Use `force: true` to sign and send anyway.");
    } else {
      cov_1sqdj42y8p().b[39][1]++;
    }
    cov_1sqdj42y8p().s[96]++;
    if (!signTransaction) {
      cov_1sqdj42y8p().b[41][0]++;
      cov_1sqdj42y8p().s[97]++;
      throw new AssembledTransaction.Errors.NoSigner("You must provide a signTransaction function, either when calling " + "`signAndSend` or when initializing your Client");
    } else {
      cov_1sqdj42y8p().b[41][1]++;
    }

    // filter out contracts, as these are dealt with via cross contract calls
    const sigsNeeded = (cov_1sqdj42y8p().s[98]++, this.needsNonInvokerSigningBy().filter(id => {
      cov_1sqdj42y8p().f[15]++;
      cov_1sqdj42y8p().s[99]++;
      return !id.startsWith('C');
    }));
    cov_1sqdj42y8p().s[100]++;
    if (sigsNeeded.length) {
      cov_1sqdj42y8p().b[42][0]++;
      cov_1sqdj42y8p().s[101]++;
      throw new AssembledTransaction.Errors.NeedsMoreSignatures(`Transaction requires signatures from ${sigsNeeded}. ` + "See `needsNonInvokerSigningBy` for details.");
    } else {
      cov_1sqdj42y8p().b[42][1]++;
    }
    const timeoutInSeconds = (cov_1sqdj42y8p().s[102]++, (cov_1sqdj42y8p().b[43][0]++, this.options.timeoutInSeconds) ?? (cov_1sqdj42y8p().b[43][1]++, _types.DEFAULT_TIMEOUT));
    cov_1sqdj42y8p().s[103]++;
    this.built = _stellarBase.TransactionBuilder.cloneFrom(this.built, {
      fee: this.built.fee,
      timebounds: undefined,
      sorobanData: this.simulationData.transactionData
    }).setTimeout(timeoutInSeconds).build();
    const signature = (cov_1sqdj42y8p().s[104]++, await signTransaction(this.built.toXDR(), {
      networkPassphrase: this.options.networkPassphrase
    }));
    cov_1sqdj42y8p().s[105]++;
    this.signed = _stellarBase.TransactionBuilder.fromXDR(signature, this.options.networkPassphrase);
  });

  /**
   * Sends the transaction to the network to return a `SentTransaction` that
   * keeps track of all the attempts to fetch the transaction.
   */
  async send() {
    cov_1sqdj42y8p().f[16]++;
    cov_1sqdj42y8p().s[106]++;
    if (!this.signed) {
      cov_1sqdj42y8p().b[44][0]++;
      cov_1sqdj42y8p().s[107]++;
      throw new Error("The transaction has not yet been signed. Run `sign` first, or use `signAndSend` instead.");
    } else {
      cov_1sqdj42y8p().b[44][1]++;
    }
    const sent = (cov_1sqdj42y8p().s[108]++, await _sent_transaction.SentTransaction.init(undefined, this));
    cov_1sqdj42y8p().s[109]++;
    return sent;
  }

  /**
   * Sign the transaction with the `signTransaction` function included previously.
   * If you did not previously include one, you need to include one now.
   * After signing, this method will send the transaction to the network and
   * return a `SentTransaction` that keeps track * of all the attempts to fetch the transaction.
   */
  signAndSend = (cov_1sqdj42y8p().s[110]++, async ({
    force = (cov_1sqdj42y8p().b[46][0]++, false),
    signTransaction = (cov_1sqdj42y8p().b[47][0]++, this.options.signTransaction)
  } = (cov_1sqdj42y8p().b[45][0]++, {})) => {
    cov_1sqdj42y8p().f[17]++;
    cov_1sqdj42y8p().s[111]++;
    if (!this.signed) {
      cov_1sqdj42y8p().b[48][0]++;
      cov_1sqdj42y8p().s[112]++;
      await this.sign({
        force,
        signTransaction
      });
    } else {
      cov_1sqdj42y8p().b[48][1]++;
    }
    cov_1sqdj42y8p().s[113]++;
    return this.send();
  });

  /**
   * Get a list of accounts, other than the invoker of the simulation, that
   * need to sign auth entries in this transaction.
   *
   * Soroban allows multiple people to sign a transaction. Someone needs to
   * sign the final transaction envelope; this person/account is called the
   * _invoker_, or _source_. Other accounts might need to sign individual auth
   * entries in the transaction, if they're not also the invoker.
   *
   * This function returns a list of accounts that need to sign auth entries,
   * assuming that the same invoker/source account will sign the final
   * transaction envelope as signed the initial simulation.
   *
   * One at a time, for each public key in this array, you will need to
   * serialize this transaction with `toJSON`, send to the owner of that key,
   * deserialize the transaction with `txFromJson`, and call
   * {@link AssembledTransaction#signAuthEntries}. Then re-serialize and send to
   * the next account in this list.
   */
  needsNonInvokerSigningBy = (cov_1sqdj42y8p().s[114]++, ({
    includeAlreadySigned = (cov_1sqdj42y8p().b[50][0]++, false)
  } = (cov_1sqdj42y8p().b[49][0]++, {})) => {
    cov_1sqdj42y8p().f[18]++;
    cov_1sqdj42y8p().s[115]++;
    if (!this.built) {
      cov_1sqdj42y8p().b[51][0]++;
      cov_1sqdj42y8p().s[116]++;
      throw new Error("Transaction has not yet been simulated");
    } else {
      cov_1sqdj42y8p().b[51][1]++;
    }

    // We expect that any transaction constructed by these libraries has a
    // single operation, which is an InvokeHostFunction operation. The host
    // function being invoked is the contract method call.
    cov_1sqdj42y8p().s[117]++;
    if (!("operations" in this.built)) {
      cov_1sqdj42y8p().b[52][0]++;
      cov_1sqdj42y8p().s[118]++;
      throw new Error(`Unexpected Transaction type; no operations: ${JSON.stringify(this.built)}`);
    } else {
      cov_1sqdj42y8p().b[52][1]++;
    }
    const rawInvokeHostFunctionOp = (cov_1sqdj42y8p().s[119]++, this.built.operations[0]);
    cov_1sqdj42y8p().s[120]++;
    return [...new Set(((cov_1sqdj42y8p().b[53][0]++, rawInvokeHostFunctionOp.auth) ?? (cov_1sqdj42y8p().b[53][1]++, [])).filter(entry => {
      cov_1sqdj42y8p().f[19]++;
      cov_1sqdj42y8p().s[121]++;
      return (cov_1sqdj42y8p().b[54][0]++, entry.credentials().switch() === _stellarBase.xdr.SorobanCredentialsType.sorobanCredentialsAddress()) && ((cov_1sqdj42y8p().b[54][1]++, includeAlreadySigned) || (cov_1sqdj42y8p().b[54][2]++, entry.credentials().address().signature().switch().name === "scvVoid"));
    }).map(entry => {
      cov_1sqdj42y8p().f[20]++;
      cov_1sqdj42y8p().s[122]++;
      return _stellarBase.Address.fromScAddress(entry.credentials().address().address()).toString();
    }))];
  });

  /**
   * If {@link AssembledTransaction#needsNonInvokerSigningBy} returns a
   * non-empty list, you can serialize the transaction with `toJSON`, send it to
   * the owner of one of the public keys in the map, deserialize with
   * `txFromJSON`, and call this method on their machine. Internally, this will
   * use `signAuthEntry` function from connected `wallet` for each.
   *
   * Then, re-serialize the transaction and either send to the next
   * `needsNonInvokerSigningBy` owner, or send it back to the original account
   * who simulated the transaction so they can {@link AssembledTransaction#sign}
   * the transaction envelope and {@link AssembledTransaction#send} it to the
   * network.
   *
   * Sending to all `needsNonInvokerSigningBy` owners in parallel is not
   * currently supported!
   */
  signAuthEntries = (cov_1sqdj42y8p().s[123]++, async ({
    expiration = (cov_1sqdj42y8p().b[56][0]++, (async () => {
      cov_1sqdj42y8p().f[22]++;
      cov_1sqdj42y8p().s[124]++;
      return (await this.server.getLatestLedger()).sequence + 100;
    })()),
    signAuthEntry = (cov_1sqdj42y8p().b[57][0]++, this.options.signAuthEntry),
    address = (cov_1sqdj42y8p().b[58][0]++, this.options.publicKey),
    authorizeEntry = (cov_1sqdj42y8p().b[59][0]++, _stellarBase.authorizeEntry)
  } = (cov_1sqdj42y8p().b[55][0]++, {})) => {
    cov_1sqdj42y8p().f[21]++;
    cov_1sqdj42y8p().s[125]++;
    if (!this.built) {
      cov_1sqdj42y8p().b[60][0]++;
      cov_1sqdj42y8p().s[126]++;
      throw new Error("Transaction has not yet been assembled or simulated");
    } else {
      cov_1sqdj42y8p().b[60][1]++;
    }

    // Likely if we're using a custom authorizeEntry then we know better than the `needsNonInvokerSigningBy` logic.
    cov_1sqdj42y8p().s[127]++;
    if (authorizeEntry === _stellarBase.authorizeEntry) {
      cov_1sqdj42y8p().b[61][0]++;
      const needsNonInvokerSigningBy = (cov_1sqdj42y8p().s[128]++, this.needsNonInvokerSigningBy());
      cov_1sqdj42y8p().s[129]++;
      if (needsNonInvokerSigningBy.length === 0) {
        cov_1sqdj42y8p().b[62][0]++;
        cov_1sqdj42y8p().s[130]++;
        throw new AssembledTransaction.Errors.NoUnsignedNonInvokerAuthEntries("No unsigned non-invoker auth entries; maybe you already signed?");
      } else {
        cov_1sqdj42y8p().b[62][1]++;
      }
      cov_1sqdj42y8p().s[131]++;
      if (needsNonInvokerSigningBy.indexOf((cov_1sqdj42y8p().b[64][0]++, address) ?? (cov_1sqdj42y8p().b[64][1]++, "")) === -1) {
        cov_1sqdj42y8p().b[63][0]++;
        cov_1sqdj42y8p().s[132]++;
        throw new AssembledTransaction.Errors.NoSignatureNeeded(`No auth entries for public key "${address}"`);
      } else {
        cov_1sqdj42y8p().b[63][1]++;
      }
      cov_1sqdj42y8p().s[133]++;
      if (!signAuthEntry) {
        cov_1sqdj42y8p().b[65][0]++;
        cov_1sqdj42y8p().s[134]++;
        throw new AssembledTransaction.Errors.NoSigner("You must provide `signAuthEntry` or a custom `authorizeEntry`");
      } else {
        cov_1sqdj42y8p().b[65][1]++;
      }
    } else {
      cov_1sqdj42y8p().b[61][1]++;
    }
    const rawInvokeHostFunctionOp = (cov_1sqdj42y8p().s[135]++, this.built.operations[0]);
    const authEntries = (cov_1sqdj42y8p().s[136]++, (cov_1sqdj42y8p().b[66][0]++, rawInvokeHostFunctionOp.auth) ?? (cov_1sqdj42y8p().b[66][1]++, []));

    // eslint-disable-next-line no-restricted-syntax
    cov_1sqdj42y8p().s[137]++;
    for (const [i, entry] of authEntries.entries()) {
      // workaround for https://github.com/stellar/js-stellar-sdk/issues/1070
      const credentials = (cov_1sqdj42y8p().s[138]++, _stellarBase.xdr.SorobanCredentials.fromXDR(entry.credentials().toXDR()));
      cov_1sqdj42y8p().s[139]++;
      if (credentials.switch() !== _stellarBase.xdr.SorobanCredentialsType.sorobanCredentialsAddress()) {
        cov_1sqdj42y8p().b[67][0]++;
        cov_1sqdj42y8p().s[140]++;
        // if the invoker/source account, then the entry doesn't need explicit
        // signature, since the tx envelope is already signed by the source
        // account, so only check for sorobanCredentialsAddress
        continue; // eslint-disable-line no-continue
      } else {
        cov_1sqdj42y8p().b[67][1]++;
      }
      const authEntryAddress = (cov_1sqdj42y8p().s[141]++, _stellarBase.Address.fromScAddress(credentials.address().address()).toString());

      // this auth entry needs to be signed by a different account
      // (or maybe already was!)
      cov_1sqdj42y8p().s[142]++;
      if (authEntryAddress !== address) {
        cov_1sqdj42y8p().b[68][0]++;
        cov_1sqdj42y8p().s[143]++;
        continue;
      } else {
        cov_1sqdj42y8p().b[68][1]++;
      } // eslint-disable-line no-continue

      const sign = (cov_1sqdj42y8p().s[144]++, (cov_1sqdj42y8p().b[69][0]++, signAuthEntry) ?? (cov_1sqdj42y8p().b[69][1]++, Promise.resolve));

      // eslint-disable-next-line no-await-in-loop
      cov_1sqdj42y8p().s[145]++;
      authEntries[i] = await authorizeEntry(entry, async preimage => {
        cov_1sqdj42y8p().f[23]++;
        cov_1sqdj42y8p().s[146]++;
        return Buffer.from(await sign(preimage.toXDR("base64"), {
          accountToSign: address
        }), "base64");
      }, await expiration,
      // eslint-disable-line no-await-in-loop
      this.options.networkPassphrase);
    }
  });

  /**
   * Whether this transaction is a read call. This is determined by the
   * simulation result and the transaction data. If the transaction is a read
   * call, it will not need to be signed and sent to the network. If this
   * returns `false`, then you need to call `signAndSend` on this transaction.
   */
  get isReadCall() {
    cov_1sqdj42y8p().f[24]++;
    const authsCount = (cov_1sqdj42y8p().s[147]++, this.simulationData.result.auth.length);
    const writeLength = (cov_1sqdj42y8p().s[148]++, this.simulationData.transactionData.resources().footprint().readWrite().length);
    cov_1sqdj42y8p().s[149]++;
    return (cov_1sqdj42y8p().b[70][0]++, authsCount === 0) && (cov_1sqdj42y8p().b[70][1]++, writeLength === 0);
  }

  /**
   * Restores the footprint (resource ledger entries that can be read or written)
   * of an expired transaction.
   *
   * The method will:
   * 1. Build a new transaction aimed at restoring the necessary resources.
   * 2. Sign this new transaction if a `signTransaction` handler is provided.
   * 3. Send the signed transaction to the network.
   * 4. Await and return the response from the network.
   *
   * Preconditions:
   * - A `signTransaction` function must be provided during the Client initialization.
   * - The provided `restorePreamble` should include a minimum resource fee and valid
   *   transaction data.
   *
   * @throws {Error} - Throws an error if no `signTransaction` function is provided during
   * Client initialization.
   * @throws {AssembledTransaction.Errors.RestoreFailure} - Throws a custom error if the
   * restore transaction fails, providing the details of the failure.
   */
  async restoreFootprint(
  /**
   * The preamble object containing data required to
   * build the restore transaction.
   */
  restorePreamble, /** The account that is executing the footprint restore operation. If omitted, will use the account from the AssembledTransaction. */
  account) {
    cov_1sqdj42y8p().f[25]++;
    cov_1sqdj42y8p().s[150]++;
    if (!this.options.signTransaction) {
      cov_1sqdj42y8p().b[71][0]++;
      cov_1sqdj42y8p().s[151]++;
      throw new Error("For automatic restore to work you must provide a signTransaction function when initializing your Client");
    } else {
      cov_1sqdj42y8p().b[71][1]++;
    }
    cov_1sqdj42y8p().s[152]++;
    account = (cov_1sqdj42y8p().b[72][0]++, account) ?? (cov_1sqdj42y8p().b[72][1]++, await (0, _utils.getAccount)(this.options, this.server));
    // first try restoring the contract
    const restoreTx = (cov_1sqdj42y8p().s[153]++, await AssembledTransaction.buildFootprintRestoreTransaction({
      ...this.options
    }, restorePreamble.transactionData, account, restorePreamble.minResourceFee));
    const sentTransaction = (cov_1sqdj42y8p().s[154]++, await restoreTx.signAndSend());
    cov_1sqdj42y8p().s[155]++;
    if (!sentTransaction.getTransactionResponse) {
      cov_1sqdj42y8p().b[73][0]++;
      cov_1sqdj42y8p().s[156]++;
      throw new AssembledTransaction.Errors.RestorationFailure(`The attempt at automatic restore failed. \n${JSON.stringify(sentTransaction)}`);
    } else {
      cov_1sqdj42y8p().b[73][1]++;
    }
    cov_1sqdj42y8p().s[157]++;
    return sentTransaction.getTransactionResponse;
  }
}
exports.AssembledTransaction = AssembledTransaction;