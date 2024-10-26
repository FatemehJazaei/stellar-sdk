"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUBMIT_TRANSACTION_TIMEOUT = exports.HorizonServer = void 0;
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _stellarBase = require("@stellar/stellar-base");
var _urijs = _interopRequireDefault(require("urijs"));
var _call_builder = require("./call_builder");
var _config = require("../config");
var _errors = require("../errors");
var _account_call_builder = require("./account_call_builder");
var _account_response = require("./account_response");
var _assets_call_builder = require("./assets_call_builder");
var _claimable_balances_call_builder = require("./claimable_balances_call_builder");
var _effect_call_builder = require("./effect_call_builder");
var _friendbot_builder = require("./friendbot_builder");
var _ledger_call_builder = require("./ledger_call_builder");
var _liquidity_pool_call_builder = require("./liquidity_pool_call_builder");
var _offer_call_builder = require("./offer_call_builder");
var _operation_call_builder = require("./operation_call_builder");
var _orderbook_call_builder = require("./orderbook_call_builder");
var _payment_call_builder = require("./payment_call_builder");
var _strict_receive_path_call_builder = require("./strict_receive_path_call_builder");
var _strict_send_path_call_builder = require("./strict_send_path_call_builder");
var _trade_aggregation_call_builder = require("./trade_aggregation_call_builder");
var _trades_call_builder = require("./trades_call_builder");
var _transaction_call_builder = require("./transaction_call_builder");
var _horizon_axios_client = _interopRequireWildcard(require("./horizon_axios_client"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function cov_106kkaexzu() {
  var path = "/mnt/g/stellar-sdk/src/horizon/server.ts";
  var hash = "74743dcb9188f42ef481ccbf1679720434a4501e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/server.ts",
    statementMap: {
      "0": {
        start: {
          line: 52,
          column: 50
        },
        end: {
          line: 52,
          column: 59
        }
      },
      "1": {
        start: {
          line: 54,
          column: 25
        },
        end: {
          line: 54,
          column: 33
        }
      },
      "2": {
        start: {
          line: 58,
          column: 30
        },
        end: {
          line: 58,
          column: 36
        }
      },
      "3": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 61,
          column: 61
        }
      },
      "4": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 36
        }
      },
      "5": {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 88,
          column: 24
        }
      },
      "6": {
        start: {
          line: 90,
          column: 50
        },
        end: {
          line: 90,
          column: 52
        }
      },
      "7": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 94,
          column: 5
        }
      },
      "8": {
        start: {
          line: 93,
          column: 6
        },
        end: {
          line: 93,
          column: 49
        }
      },
      "9": {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 97,
          column: 5
        }
      },
      "10": {
        start: {
          line: 96,
          column: 6
        },
        end: {
          line: 96,
          column: 55
        }
      },
      "11": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 100,
          column: 5
        }
      },
      "12": {
        start: {
          line: 99,
          column: 6
        },
        end: {
          line: 99,
          column: 53
        }
      },
      "13": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 103,
          column: 5
        }
      },
      "14": {
        start: {
          line: 102,
          column: 6
        },
        end: {
          line: 102,
          column: 49
        }
      },
      "15": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 113,
          column: 5
        }
      },
      "16": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 112,
          column: 9
        }
      },
      "17": {
        start: {
          line: 108,
          column: 8
        },
        end: {
          line: 108,
          column: 46
        }
      },
      "18": {
        start: {
          line: 109,
          column: 8
        },
        end: {
          line: 109,
          column: 70
        }
      },
      "19": {
        start: {
          line: 111,
          column: 8
        },
        end: {
          line: 111,
          column: 22
        }
      },
      "20": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 117,
          column: 5
        }
      },
      "21": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 116,
          column: 67
        }
      },
      "22": {
        start: {
          line: 153,
          column: 24
        },
        end: {
          line: 153,
          column: 71
        }
      },
      "23": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 160,
          column: 5
        }
      },
      "24": {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 159,
          column: 8
        }
      },
      "25": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 168,
          column: 5
        }
      },
      "26": {
        start: {
          line: 164,
          column: 6
        },
        end: {
          line: 167,
          column: 8
        }
      },
      "27": {
        start: {
          line: 172,
          column: 4
        },
        end: {
          line: 172,
          column: 65
        }
      },
      "28": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 173,
          column: 47
        }
      },
      "29": {
        start: {
          line: 183,
          column: 21
        },
        end: {
          line: 183,
          column: 42
        }
      },
      "30": {
        start: {
          line: 185,
          column: 4
        },
        end: {
          line: 185,
          column: 62
        }
      },
      "31": {
        start: {
          line: 195,
          column: 15
        },
        end: {
          line: 197,
          column: 5
        }
      },
      "32": {
        start: {
          line: 198,
          column: 4
        },
        end: {
          line: 198,
          column: 34
        }
      },
      "33": {
        start: {
          line: 199,
          column: 4
        },
        end: {
          line: 199,
          column: 21
        }
      },
      "34": {
        start: {
          line: 308,
          column: 4
        },
        end: {
          line: 310,
          column: 5
        }
      },
      "35": {
        start: {
          line: 309,
          column: 6
        },
        end: {
          line: 309,
          column: 48
        }
      },
      "36": {
        start: {
          line: 312,
          column: 15
        },
        end: {
          line: 317,
          column: 5
        }
      },
      "37": {
        start: {
          line: 319,
          column: 4
        },
        end: {
          line: 509,
          column: 9
        }
      },
      "38": {
        start: {
          line: 327,
          column: 8
        },
        end: {
          line: 329,
          column: 9
        }
      },
      "39": {
        start: {
          line: 328,
          column: 10
        },
        end: {
          line: 328,
          column: 31
        }
      },
      "40": {
        start: {
          line: 331,
          column: 28
        },
        end: {
          line: 331,
          column: 93
        }
      },
      "41": {
        start: {
          line: 334,
          column: 24
        },
        end: {
          line: 334,
          column: 61
        }
      },
      "42": {
        start: {
          line: 339,
          column: 8
        },
        end: {
          line: 495,
          column: 9
        }
      },
      "43": {
        start: {
          line: 340,
          column: 10
        },
        end: {
          line: 494,
          column: 47
        }
      },
      "44": {
        start: {
          line: 343,
          column: 14
        },
        end: {
          line: 348,
          column: 15
        }
      },
      "45": {
        start: {
          line: 347,
          column: 16
        },
        end: {
          line: 347,
          column: 28
        }
      },
      "46": {
        start: {
          line: 350,
          column: 14
        },
        end: {
          line: 350,
          column: 36
        }
      },
      "47": {
        start: {
          line: 352,
          column: 33
        },
        end: {
          line: 352,
          column: 49
        }
      },
      "48": {
        start: {
          line: 353,
          column: 31
        },
        end: {
          line: 353,
          column: 47
        }
      },
      "49": {
        start: {
          line: 355,
          column: 35
        },
        end: {
          line: 358,
          column: 26
        }
      },
      "50": {
        start: {
          line: 360,
          column: 36
        },
        end: {
          line: 433,
          column: 18
        }
      },
      "51": {
        start: {
          line: 364,
          column: 39
        },
        end: {
          line: 364,
          column: 63
        }
      },
      "52": {
        start: {
          line: 366,
          column: 41
        },
        end: {
          line: 366,
          column: 43
        }
      },
      "53": {
        start: {
          line: 367,
          column: 18
        },
        end: {
          line: 389,
          column: 19
        }
      },
      "54": {
        start: {
          line: 369,
          column: 22
        },
        end: {
          line: 371,
          column: 24
        }
      },
      "55": {
        start: {
          line: 372,
          column: 22
        },
        end: {
          line: 372,
          column: 28
        }
      },
      "56": {
        start: {
          line: 374,
          column: 22
        },
        end: {
          line: 376,
          column: 24
        }
      },
      "57": {
        start: {
          line: 377,
          column: 22
        },
        end: {
          line: 377,
          column: 28
        }
      },
      "58": {
        start: {
          line: 385,
          column: 22
        },
        end: {
          line: 388,
          column: 24
        }
      },
      "59": {
        start: {
          line: 391,
          column: 51
        },
        end: {
          line: 394,
          column: 19
        }
      },
      "60": {
        start: {
          line: 395,
          column: 49
        },
        end: {
          line: 398,
          column: 19
        }
      },
      "61": {
        start: {
          line: 405,
          column: 18
        },
        end: {
          line: 405,
          column: 75
        }
      },
      "62": {
        start: {
          line: 406,
          column: 18
        },
        end: {
          line: 406,
          column: 73
        }
      },
      "63": {
        start: {
          line: 408,
          column: 31
        },
        end: {
          line: 408,
          column: 76
        }
      },
      "64": {
        start: {
          line: 409,
          column: 33
        },
        end: {
          line: 411,
          column: 19
        }
      },
      "65": {
        start: {
          line: 413,
          column: 36
        },
        end: {
          line: 417,
          column: 19
        }
      },
      "66": {
        start: {
          line: 419,
          column: 38
        },
        end: {
          line: 423,
          column: 19
        }
      },
      "67": {
        start: {
          line: 425,
          column: 18
        },
        end: {
          line: 432,
          column: 20
        }
      },
      "68": {
        start: {
          line: 435,
          column: 29
        },
        end: {
          line: 435,
          column: 63
        }
      },
      "69": {
        start: {
          line: 439,
          column: 14
        },
        end: {
          line: 471,
          column: 15
        }
      },
      "70": {
        start: {
          line: 443,
          column: 33
        },
        end: {
          line: 443,
          column: 61
        }
      },
      "71": {
        start: {
          line: 445,
          column: 16
        },
        end: {
          line: 454,
          column: 18
        }
      },
      "72": {
        start: {
          line: 456,
          column: 32
        },
        end: {
          line: 456,
          column: 71
        }
      },
      "73": {
        start: {
          line: 458,
          column: 16
        },
        end: {
          line: 462,
          column: 18
        }
      },
      "74": {
        start: {
          line: 464,
          column: 31
        },
        end: {
          line: 464,
          column: 69
        }
      },
      "75": {
        start: {
          line: 466,
          column: 16
        },
        end: {
          line: 470,
          column: 18
        }
      },
      "76": {
        start: {
          line: 473,
          column: 14
        },
        end: {
          line: 491,
          column: 16
        }
      },
      "77": {
        start: {
          line: 494,
          column: 37
        },
        end: {
          line: 494,
          column: 45
        }
      },
      "78": {
        start: {
          line: 497,
          column: 8
        },
        end: {
          line: 497,
          column: 93
        }
      },
      "79": {
        start: {
          line: 500,
          column: 8
        },
        end: {
          line: 502,
          column: 9
        }
      },
      "80": {
        start: {
          line: 501,
          column: 10
        },
        end: {
          line: 501,
          column: 42
        }
      },
      "81": {
        start: {
          line: 503,
          column: 8
        },
        end: {
          line: 508,
          column: 10
        }
      },
      "82": {
        start: {
          line: 534,
          column: 4
        },
        end: {
          line: 536,
          column: 5
        }
      },
      "83": {
        start: {
          line: 535,
          column: 6
        },
        end: {
          line: 535,
          column: 48
        }
      },
      "84": {
        start: {
          line: 538,
          column: 15
        },
        end: {
          line: 543,
          column: 5
        }
      },
      "85": {
        start: {
          line: 545,
          column: 4
        },
        end: {
          line: 561,
          column: 7
        }
      },
      "86": {
        start: {
          line: 550,
          column: 25
        },
        end: {
          line: 550,
          column: 38
        }
      },
      "87": {
        start: {
          line: 552,
          column: 6
        },
        end: {
          line: 554,
          column: 7
        }
      },
      "88": {
        start: {
          line: 553,
          column: 8
        },
        end: {
          line: 553,
          column: 40
        }
      },
      "89": {
        start: {
          line: 555,
          column: 6
        },
        end: {
          line: 560,
          column: 8
        }
      },
      "90": {
        start: {
          line: 568,
          column: 4
        },
        end: {
          line: 568,
          column: 62
        }
      },
      "91": {
        start: {
          line: 575,
          column: 4
        },
        end: {
          line: 575,
          column: 71
        }
      },
      "92": {
        start: {
          line: 582,
          column: 4
        },
        end: {
          line: 582,
          column: 61
        }
      },
      "93": {
        start: {
          line: 589,
          column: 4
        },
        end: {
          line: 589,
          column: 66
        }
      },
      "94": {
        start: {
          line: 607,
          column: 4
        },
        end: {
          line: 607,
          column: 60
        }
      },
      "95": {
        start: {
          line: 616,
          column: 4
        },
        end: {
          line: 620,
          column: 6
        }
      },
      "96": {
        start: {
          line: 628,
          column: 4
        },
        end: {
          line: 628,
          column: 61
        }
      },
      "97": {
        start: {
          line: 635,
          column: 4
        },
        end: {
          line: 635,
          column: 64
        }
      },
      "98": {
        start: {
          line: 643,
          column: 4
        },
        end: {
          line: 643,
          column: 61
        }
      },
      "99": {
        start: {
          line: 677,
          column: 4
        },
        end: {
          line: 682,
          column: 6
        }
      },
      "100": {
        start: {
          line: 705,
          column: 4
        },
        end: {
          line: 710,
          column: 6
        }
      },
      "101": {
        start: {
          line: 718,
          column: 4
        },
        end: {
          line: 718,
          column: 69
        }
      },
      "102": {
        start: {
          line: 726,
          column: 4
        },
        end: {
          line: 726,
          column: 68
        }
      },
      "103": {
        start: {
          line: 736,
          column: 4
        },
        end: {
          line: 736,
          column: 69
        }
      },
      "104": {
        start: {
          line: 745,
          column: 4
        },
        end: {
          line: 745,
          column: 61
        }
      },
      "105": {
        start: {
          line: 758,
          column: 16
        },
        end: {
          line: 760,
          column: 13
        }
      },
      "106": {
        start: {
          line: 762,
          column: 4
        },
        end: {
          line: 762,
          column: 36
        }
      },
      "107": {
        start: {
          line: 784,
          column: 4
        },
        end: {
          line: 792,
          column: 6
        }
      },
      "108": {
        start: {
          line: 815,
          column: 4
        },
        end: {
          line: 817,
          column: 5
        }
      },
      "109": {
        start: {
          line: 816,
          column: 6
        },
        end: {
          line: 816,
          column: 49
        }
      },
      "110": {
        start: {
          line: 819,
          column: 4
        },
        end: {
          line: 821,
          column: 5
        }
      },
      "111": {
        start: {
          line: 820,
          column: 6
        },
        end: {
          line: 820,
          column: 13
        }
      },
      "112": {
        start: {
          line: 823,
          column: 25
        },
        end: {
          line: 823,
          column: 42
        }
      },
      "113": {
        start: {
          line: 826,
          column: 4
        },
        end: {
          line: 873,
          column: 5
        }
      },
      "114": {
        start: {
          line: 826,
          column: 17
        },
        end: {
          line: 826,
          column: 18
        }
      },
      "115": {
        start: {
          line: 827,
          column: 24
        },
        end: {
          line: 827,
          column: 49
        }
      },
      "116": {
        start: {
          line: 829,
          column: 6
        },
        end: {
          line: 837,
          column: 7
        }
      },
      "117": {
        start: {
          line: 834,
          column: 10
        },
        end: {
          line: 834,
          column: 16
        }
      },
      "118": {
        start: {
          line: 836,
          column: 10
        },
        end: {
          line: 836,
          column: 19
        }
      },
      "119": {
        start: {
          line: 838,
          column: 26
        },
        end: {
          line: 838,
          column: 47
        }
      },
      "120": {
        start: {
          line: 839,
          column: 6
        },
        end: {
          line: 841,
          column: 7
        }
      },
      "121": {
        start: {
          line: 840,
          column: 8
        },
        end: {
          line: 840,
          column: 17
        }
      },
      "122": {
        start: {
          line: 842,
          column: 6
        },
        end: {
          line: 842,
          column: 36
        }
      },
      "123": {
        start: {
          line: 845,
          column: 6
        },
        end: {
          line: 847,
          column: 7
        }
      },
      "124": {
        start: {
          line: 846,
          column: 8
        },
        end: {
          line: 846,
          column: 17
        }
      },
      "125": {
        start: {
          line: 849,
          column: 6
        },
        end: {
          line: 872,
          column: 7
        }
      },
      "126": {
        start: {
          line: 851,
          column: 24
        },
        end: {
          line: 851,
          column: 59
        }
      },
      "127": {
        start: {
          line: 852,
          column: 8
        },
        end: {
          line: 860,
          column: 9
        }
      },
      "128": {
        start: {
          line: 855,
          column: 10
        },
        end: {
          line: 859,
          column: 12
        }
      },
      "129": {
        start: {
          line: 862,
          column: 8
        },
        end: {
          line: 864,
          column: 9
        }
      },
      "130": {
        start: {
          line: 863,
          column: 10
        },
        end: {
          line: 863,
          column: 18
        }
      },
      "131": {
        start: {
          line: 867,
          column: 8
        },
        end: {
          line: 869,
          column: 9
        }
      },
      "132": {
        start: {
          line: 868,
          column: 10
        },
        end: {
          line: 868,
          column: 18
        }
      },
      "133": {
        start: {
          line: 871,
          column: 8
        },
        end: {
          line: 871,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "getAmountInLumens",
        decl: {
          start: {
            line: 60,
            column: 9
          },
          end: {
            line: 60,
            column: 26
          }
        },
        loc: {
          start: {
            line: 60,
            column: 43
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 60
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 82,
            column: 2
          },
          end: {
            line: 82,
            column: 3
          }
        },
        loc: {
          start: {
            line: 82,
            column: 67
          },
          end: {
            line: 118,
            column: 3
          }
        },
        line: 82
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 105,
            column: 43
          },
          end: {
            line: 105,
            column: 44
          }
        },
        loc: {
          start: {
            line: 105,
            column: 55
          },
          end: {
            line: 112,
            column: 7
          }
        },
        line: 105
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 148,
            column: 2
          },
          end: {
            line: 148,
            column: 3
          }
        },
        loc: {
          start: {
            line: 151,
            column: 39
          },
          end: {
            line: 174,
            column: 3
          }
        },
        line: 151
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 182,
            column: 2
          },
          end: {
            line: 182,
            column: 3
          }
        },
        loc: {
          start: {
            line: 182,
            column: 47
          },
          end: {
            line: 186,
            column: 3
          }
        },
        line: 182
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 194,
            column: 2
          },
          end: {
            line: 194,
            column: 3
          }
        },
        loc: {
          start: {
            line: 194,
            column: 64
          },
          end: {
            line: 200,
            column: 3
          }
        },
        line: 194
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 303,
            column: 2
          },
          end: {
            line: 303,
            column: 3
          }
        },
        loc: {
          start: {
            line: 306,
            column: 51
          },
          end: {
            line: 510,
            column: 3
          }
        },
        line: 306
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 326,
            column: 12
          },
          end: {
            line: 326,
            column: 13
          }
        },
        loc: {
          start: {
            line: 326,
            column: 26
          },
          end: {
            line: 498,
            column: 7
          }
        },
        line: 326
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 342,
            column: 17
          },
          end: {
            line: 342,
            column: 18
          }
        },
        loc: {
          start: {
            line: 342,
            column: 45
          },
          end: {
            line: 492,
            column: 13
          }
        },
        line: 342
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 363,
            column: 21
          },
          end: {
            line: 363,
            column: 22
          }
        },
        loc: {
          start: {
            line: 363,
            column: 48
          },
          end: {
            line: 433,
            column: 17
          }
        },
        line: 363
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 494,
            column: 20
          },
          end: {
            line: 494,
            column: 21
          }
        },
        loc: {
          start: {
            line: 494,
            column: 37
          },
          end: {
            line: 494,
            column: 45
          }
        },
        line: 494
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 499,
            column: 13
          },
          end: {
            line: 499,
            column: 14
          }
        },
        loc: {
          start: {
            line: 499,
            column: 27
          },
          end: {
            line: 509,
            column: 7
          }
        },
        line: 499
      },
      "12": {
        name: "(anonymous_12)",
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
            line: 532,
            column: 56
          },
          end: {
            line: 562,
            column: 3
          }
        },
        line: 532
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 550,
            column: 11
          },
          end: {
            line: 550,
            column: 12
          }
        },
        loc: {
          start: {
            line: 550,
            column: 25
          },
          end: {
            line: 550,
            column: 38
          }
        },
        line: 550
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 551,
            column: 12
          },
          end: {
            line: 551,
            column: 13
          }
        },
        loc: {
          start: {
            line: 551,
            column: 26
          },
          end: {
            line: 561,
            column: 5
          }
        },
        line: 551
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 567,
            column: 2
          },
          end: {
            line: 567,
            column: 3
          }
        },
        loc: {
          start: {
            line: 567,
            column: 40
          },
          end: {
            line: 569,
            column: 3
          }
        },
        line: 567
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 574,
            column: 2
          },
          end: {
            line: 574,
            column: 3
          }
        },
        loc: {
          start: {
            line: 574,
            column: 58
          },
          end: {
            line: 576,
            column: 3
          }
        },
        line: 574
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 581,
            column: 2
          },
          end: {
            line: 581,
            column: 3
          }
        },
        loc: {
          start: {
            line: 581,
            column: 38
          },
          end: {
            line: 583,
            column: 3
          }
        },
        line: 581
      },
      "18": {
        name: "(anonymous_18)",
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
            column: 48
          },
          end: {
            line: 590,
            column: 3
          }
        },
        line: 588
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 606,
            column: 2
          },
          end: {
            line: 606,
            column: 3
          }
        },
        loc: {
          start: {
            line: 606,
            column: 36
          },
          end: {
            line: 608,
            column: 3
          }
        },
        line: 606
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 615,
            column: 2
          },
          end: {
            line: 615,
            column: 3
          }
        },
        loc: {
          start: {
            line: 615,
            column: 72
          },
          end: {
            line: 621,
            column: 3
          }
        },
        line: 615
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 627,
            column: 2
          },
          end: {
            line: 627,
            column: 3
          }
        },
        loc: {
          start: {
            line: 627,
            column: 37
          },
          end: {
            line: 629,
            column: 3
          }
        },
        line: 627
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 634,
            column: 2
          },
          end: {
            line: 634,
            column: 3
          }
        },
        loc: {
          start: {
            line: 634,
            column: 44
          },
          end: {
            line: 636,
            column: 3
          }
        },
        line: 634
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 642,
            column: 2
          },
          end: {
            line: 642,
            column: 3
          }
        },
        loc: {
          start: {
            line: 642,
            column: 52
          },
          end: {
            line: 644,
            column: 3
          }
        },
        line: 642
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 672,
            column: 2
          },
          end: {
            line: 672,
            column: 3
          }
        },
        loc: {
          start: {
            line: 676,
            column: 21
          },
          end: {
            line: 683,
            column: 3
          }
        },
        line: 676
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 700,
            column: 2
          },
          end: {
            line: 700,
            column: 3
          }
        },
        loc: {
          start: {
            line: 704,
            column: 21
          },
          end: {
            line: 711,
            column: 3
          }
        },
        line: 704
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 717,
            column: 2
          },
          end: {
            line: 717,
            column: 3
          }
        },
        loc: {
          start: {
            line: 717,
            column: 40
          },
          end: {
            line: 719,
            column: 3
          }
        },
        line: 717
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 725,
            column: 2
          },
          end: {
            line: 725,
            column: 3
          }
        },
        loc: {
          start: {
            line: 725,
            column: 38
          },
          end: {
            line: 727,
            column: 3
          }
        },
        line: 725
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 735,
            column: 2
          },
          end: {
            line: 735,
            column: 3
          }
        },
        loc: {
          start: {
            line: 735,
            column: 54
          },
          end: {
            line: 737,
            column: 3
          }
        },
        line: 735
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 744,
            column: 2
          },
          end: {
            line: 744,
            column: 3
          }
        },
        loc: {
          start: {
            line: 744,
            column: 37
          },
          end: {
            line: 746,
            column: 3
          }
        },
        line: 744
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 757,
            column: 2
          },
          end: {
            line: 757,
            column: 3
          }
        },
        loc: {
          start: {
            line: 757,
            column: 72
          },
          end: {
            line: 763,
            column: 3
          }
        },
        line: 757
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 776,
            column: 2
          },
          end: {
            line: 776,
            column: 3
          }
        },
        loc: {
          start: {
            line: 783,
            column: 33
          },
          end: {
            line: 793,
            column: 3
          }
        },
        line: 783
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 812,
            column: 2
          },
          end: {
            line: 812,
            column: 3
          }
        },
        loc: {
          start: {
            line: 814,
            column: 19
          },
          end: {
            line: 875,
            column: 3
          }
        },
        line: 814
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 82,
            column: 33
          },
          end: {
            line: 82,
            column: 65
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 82,
            column: 63
          },
          end: {
            line: 82,
            column: 65
          }
        }],
        line: 82
      },
      "1": {
        loc: {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 88,
            column: 24
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 87,
            column: 10
          },
          end: {
            line: 87,
            column: 30
          }
        }, {
          start: {
            line: 88,
            column: 10
          },
          end: {
            line: 88,
            column: 24
          }
        }],
        line: 86
      },
      "2": {
        loc: {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 94,
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
        line: 92
      },
      "3": {
        loc: {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 97,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 97,
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
        line: 95
      },
      "4": {
        loc: {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 100,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 100,
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
        line: 98
      },
      "5": {
        loc: {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 103,
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
        line: 101
      },
      "6": {
        loc: {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 113,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 113,
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
        line: 104
      },
      "7": {
        loc: {
          start: {
            line: 108,
            column: 25
          },
          end: {
            line: 108,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 108,
            column: 25
          },
          end: {
            line: 108,
            column: 39
          }
        }, {
          start: {
            line: 108,
            column: 43
          },
          end: {
            line: 108,
            column: 45
          }
        }],
        line: 108
      },
      "8": {
        loc: {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 117,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 117,
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
        line: 115
      },
      "9": {
        loc: {
          start: {
            line: 115,
            column: 8
          },
          end: {
            line: 115,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 115,
            column: 8
          },
          end: {
            line: 115,
            column: 45
          }
        }, {
          start: {
            line: 115,
            column: 49
          },
          end: {
            line: 115,
            column: 59
          }
        }],
        line: 115
      },
      "10": {
        loc: {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 150,
            column: 29
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 150,
            column: 24
          },
          end: {
            line: 150,
            column: 29
          }
        }],
        line: 150
      },
      "11": {
        loc: {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 160,
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
        line: 155
      },
      "12": {
        loc: {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 168,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 168,
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
        line: 163
      },
      "13": {
        loc: {
          start: {
            line: 185,
            column: 11
          },
          end: {
            line: 185,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 185,
            column: 11
          },
          end: {
            line: 185,
            column: 54
          }
        }, {
          start: {
            line: 185,
            column: 58
          },
          end: {
            line: 185,
            column: 61
          }
        }],
        line: 185
      },
      "14": {
        loc: {
          start: {
            line: 305,
            column: 4
          },
          end: {
            line: 305,
            column: 83
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 305,
            column: 51
          },
          end: {
            line: 305,
            column: 83
          }
        }],
        line: 305
      },
      "15": {
        loc: {
          start: {
            line: 308,
            column: 4
          },
          end: {
            line: 310,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 308,
            column: 4
          },
          end: {
            line: 310,
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
        line: 308
      },
      "16": {
        loc: {
          start: {
            line: 327,
            column: 8
          },
          end: {
            line: 329,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 327,
            column: 8
          },
          end: {
            line: 329,
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
        line: 327
      },
      "17": {
        loc: {
          start: {
            line: 339,
            column: 8
          },
          end: {
            line: 495,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 339,
            column: 8
          },
          end: {
            line: 495,
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
        line: 339
      },
      "18": {
        loc: {
          start: {
            line: 343,
            column: 14
          },
          end: {
            line: 348,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 343,
            column: 14
          },
          end: {
            line: 348,
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
        line: 343
      },
      "19": {
        loc: {
          start: {
            line: 344,
            column: 16
          },
          end: {
            line: 345,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 344,
            column: 16
          },
          end: {
            line: 344,
            column: 65
          }
        }, {
          start: {
            line: 345,
            column: 16
          },
          end: {
            line: 345,
            column: 66
          }
        }],
        line: 344
      },
      "20": {
        loc: {
          start: {
            line: 367,
            column: 18
          },
          end: {
            line: 389,
            column: 19
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 368,
            column: 20
          },
          end: {
            line: 372,
            column: 28
          }
        }, {
          start: {
            line: 373,
            column: 20
          },
          end: {
            line: 377,
            column: 28
          }
        }, {
          start: {
            line: 384,
            column: 20
          },
          end: {
            line: 388,
            column: 24
          }
        }],
        line: 367
      },
      "21": {
        loc: {
          start: {
            line: 439,
            column: 14
          },
          end: {
            line: 471,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 439,
            column: 14
          },
          end: {
            line: 471,
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
        line: 439
      },
      "22": {
        loc: {
          start: {
            line: 440,
            column: 16
          },
          end: {
            line: 441,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 440,
            column: 16
          },
          end: {
            line: 440,
            column: 64
          }
        }, {
          start: {
            line: 441,
            column: 16
          },
          end: {
            line: 441,
            column: 44
          }
        }],
        line: 440
      },
      "23": {
        loc: {
          start: {
            line: 484,
            column: 18
          },
          end: {
            line: 484,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 484,
            column: 18
          },
          end: {
            line: 484,
            column: 39
          }
        }, {
          start: {
            line: 484,
            column: 43
          },
          end: {
            line: 484,
            column: 74
          }
        }],
        line: 484
      },
      "24": {
        loc: {
          start: {
            line: 486,
            column: 18
          },
          end: {
            line: 486,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 486,
            column: 18
          },
          end: {
            line: 486,
            column: 40
          }
        }, {
          start: {
            line: 486,
            column: 44
          },
          end: {
            line: 486,
            column: 75
          }
        }],
        line: 486
      },
      "25": {
        loc: {
          start: {
            line: 488,
            column: 18
          },
          end: {
            line: 488,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 488,
            column: 18
          },
          end: {
            line: 488,
            column: 40
          }
        }, {
          start: {
            line: 488,
            column: 44
          },
          end: {
            line: 488,
            column: 75
          }
        }],
        line: 488
      },
      "26": {
        loc: {
          start: {
            line: 490,
            column: 18
          },
          end: {
            line: 490,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 490,
            column: 18
          },
          end: {
            line: 490,
            column: 39
          }
        }, {
          start: {
            line: 490,
            column: 43
          },
          end: {
            line: 490,
            column: 74
          }
        }],
        line: 490
      },
      "27": {
        loc: {
          start: {
            line: 497,
            column: 49
          },
          end: {
            line: 497,
            column: 90
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 497,
            column: 66
          },
          end: {
            line: 497,
            column: 78
          }
        }, {
          start: {
            line: 497,
            column: 81
          },
          end: {
            line: 497,
            column: 90
          }
        }],
        line: 497
      },
      "28": {
        loc: {
          start: {
            line: 500,
            column: 8
          },
          end: {
            line: 502,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 500,
            column: 8
          },
          end: {
            line: 502,
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
        line: 500
      },
      "29": {
        loc: {
          start: {
            line: 531,
            column: 6
          },
          end: {
            line: 531,
            column: 85
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 531,
            column: 53
          },
          end: {
            line: 531,
            column: 85
          }
        }],
        line: 531
      },
      "30": {
        loc: {
          start: {
            line: 534,
            column: 4
          },
          end: {
            line: 536,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 534,
            column: 4
          },
          end: {
            line: 536,
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
        line: 534
      },
      "31": {
        loc: {
          start: {
            line: 552,
            column: 6
          },
          end: {
            line: 554,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 552,
            column: 6
          },
          end: {
            line: 554,
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
        line: 552
      },
      "32": {
        loc: {
          start: {
            line: 815,
            column: 4
          },
          end: {
            line: 817,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 815,
            column: 4
          },
          end: {
            line: 817,
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
        line: 815
      },
      "33": {
        loc: {
          start: {
            line: 819,
            column: 4
          },
          end: {
            line: 821,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 819,
            column: 4
          },
          end: {
            line: 821,
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
        line: 819
      },
      "34": {
        loc: {
          start: {
            line: 829,
            column: 6
          },
          end: {
            line: 837,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 830,
            column: 8
          },
          end: {
            line: 830,
            column: 23
          }
        }, {
          start: {
            line: 831,
            column: 8
          },
          end: {
            line: 831,
            column: 40
          }
        }, {
          start: {
            line: 832,
            column: 8
          },
          end: {
            line: 832,
            column: 37
          }
        }, {
          start: {
            line: 833,
            column: 8
          },
          end: {
            line: 834,
            column: 16
          }
        }, {
          start: {
            line: 835,
            column: 8
          },
          end: {
            line: 836,
            column: 19
          }
        }],
        line: 829
      },
      "35": {
        loc: {
          start: {
            line: 839,
            column: 6
          },
          end: {
            line: 841,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 839,
            column: 6
          },
          end: {
            line: 841,
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
        line: 839
      },
      "36": {
        loc: {
          start: {
            line: 845,
            column: 6
          },
          end: {
            line: 847,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 845,
            column: 6
          },
          end: {
            line: 847,
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
        line: 845
      },
      "37": {
        loc: {
          start: {
            line: 852,
            column: 8
          },
          end: {
            line: 860,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 852,
            column: 8
          },
          end: {
            line: 860,
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
        line: 852
      },
      "38": {
        loc: {
          start: {
            line: 862,
            column: 8
          },
          end: {
            line: 864,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 862,
            column: 8
          },
          end: {
            line: 864,
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
        line: 862
      },
      "39": {
        loc: {
          start: {
            line: 867,
            column: 8
          },
          end: {
            line: 869,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 867,
            column: 8
          },
          end: {
            line: 869,
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
        line: 867
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
      "133": 0
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
      "32": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0, 0, 0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "74743dcb9188f42ef481ccbf1679720434a4501e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_106kkaexzu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_106kkaexzu();
/* tslint:disable:variable-name no-namespace */
// eslint-disable-next-line import/no-named-as-default
/**
 * Default transaction submission timeout for Horizon requests, in milliseconds
 * @constant {number}
 * @default 60000
 * @memberof module:Horizon.Server
 */
const SUBMIT_TRANSACTION_TIMEOUT = exports.SUBMIT_TRANSACTION_TIMEOUT = (cov_106kkaexzu().s[0]++, 60 * 1000);
const STROOPS_IN_LUMEN = (cov_106kkaexzu().s[1]++, 10000000);

// ACCOUNT_REQUIRES_MEMO is the base64 encoding of "1".
// SEP 29 uses this value to define transaction memo requirements for incoming payments.
const ACCOUNT_REQUIRES_MEMO = (cov_106kkaexzu().s[2]++, "MQ==");
function getAmountInLumens(amt) {
  cov_106kkaexzu().f[0]++;
  cov_106kkaexzu().s[3]++;
  return new _bignumber.default(amt).div(STROOPS_IN_LUMEN).toString();
}

/**
 * Server handles the network connection to a [Horizon](https://developers.stellar.org/docs/data/horizon)
 * instance and exposes an interface for requests to that instance.
 * @class
 * @alias module:Horizon.Server
 * @memberof module:Horizon
 *
 * @param {string} serverURL Horizon Server URL (ex. `https://horizon-testnet.stellar.org`).
 * @param {module:Horizon.Server.Options} [opts] Options object
 */
class HorizonServer {
  /**
   * Horizon Server URL (ex. `https://horizon-testnet.stellar.org`)
   *
   * @todo Solve `URI(this.serverURL as any)`.
   */

  constructor(serverURL, opts = (cov_106kkaexzu().b[0][0]++, {})) {
    cov_106kkaexzu().f[1]++;
    cov_106kkaexzu().s[4]++;
    this.serverURL = (0, _urijs.default)(serverURL);
    const allowHttp = (cov_106kkaexzu().s[5]++, typeof opts.allowHttp === "undefined" ? (cov_106kkaexzu().b[1][0]++, _config.Config.isAllowHttp()) : (cov_106kkaexzu().b[1][1]++, opts.allowHttp));
    const customHeaders = (cov_106kkaexzu().s[6]++, {});
    cov_106kkaexzu().s[7]++;
    if (opts.appName) {
      cov_106kkaexzu().b[2][0]++;
      cov_106kkaexzu().s[8]++;
      customHeaders["X-App-Name"] = opts.appName;
    } else {
      cov_106kkaexzu().b[2][1]++;
    }
    cov_106kkaexzu().s[9]++;
    if (opts.appVersion) {
      cov_106kkaexzu().b[3][0]++;
      cov_106kkaexzu().s[10]++;
      customHeaders["X-App-Version"] = opts.appVersion;
    } else {
      cov_106kkaexzu().b[3][1]++;
    }
    cov_106kkaexzu().s[11]++;
    if (opts.authToken) {
      cov_106kkaexzu().b[4][0]++;
      cov_106kkaexzu().s[12]++;
      customHeaders["X-Auth-Token"] = opts.authToken;
    } else {
      cov_106kkaexzu().b[4][1]++;
    }
    cov_106kkaexzu().s[13]++;
    if (opts.headers) {
      cov_106kkaexzu().b[5][0]++;
      cov_106kkaexzu().s[14]++;
      Object.assign(customHeaders, opts.headers);
    } else {
      cov_106kkaexzu().b[5][1]++;
    }
    cov_106kkaexzu().s[15]++;
    if (Object.keys(customHeaders).length > 0) {
      cov_106kkaexzu().b[6][0]++;
      cov_106kkaexzu().s[16]++;
      _horizon_axios_client.default.interceptors.request.use(config => {
        cov_106kkaexzu().f[2]++;
        cov_106kkaexzu().s[17]++;
        // merge the custom headers with an existing headers, where customs
        // override defaults
        config.headers = (cov_106kkaexzu().b[7][0]++, config.headers) || (cov_106kkaexzu().b[7][1]++, {});
        cov_106kkaexzu().s[18]++;
        config.headers = Object.assign(config.headers, customHeaders);
        cov_106kkaexzu().s[19]++;
        return config;
      });
    } else {
      cov_106kkaexzu().b[6][1]++;
    }
    cov_106kkaexzu().s[20]++;
    if ((cov_106kkaexzu().b[9][0]++, this.serverURL.protocol() !== "https") && (cov_106kkaexzu().b[9][1]++, !allowHttp)) {
      cov_106kkaexzu().b[8][0]++;
      cov_106kkaexzu().s[21]++;
      throw new Error("Cannot connect to insecure horizon server");
    } else {
      cov_106kkaexzu().b[8][1]++;
    }
  }

  /**
   * Get timebounds for N seconds from now, when you're creating a transaction
   * with {@link TransactionBuilder}.
   *
   * By default, {@link TransactionBuilder} uses the current local time, but
   * your machine's local time could be different from Horizon's. This gives you
   * more assurance that your timebounds will reflect what you want.
   *
   * Note that this will generate your timebounds when you **init the transaction**,
   * not when you build or submit the transaction! So give yourself enough time to get
   * the transaction built and signed before submitting.
   *
   * @example
   * const transaction = new StellarSdk.TransactionBuilder(accountId, {
   *   fee: await StellarSdk.Server.fetchBaseFee(),
   *   timebounds: await StellarSdk.Server.fetchTimebounds(100)
   * })
   *   .addOperation(operation)
   *   // normally we would need to call setTimeout here, but setting timebounds
   *   // earlier does the trick!
   *   .build();
   *
   * @param {number} seconds Number of seconds past the current time to wait.
   * @param {boolean} [_isRetry] True if this is a retry. Only set this internally!
   * This is to avoid a scenario where Horizon is horking up the wrong date.
   * @returns {Promise<Timebounds>} Promise that resolves a `timebounds` object
   * (with the shape `{ minTime: 0, maxTime: N }`) that you can set the `timebounds` option to.
   */
  async fetchTimebounds(seconds, _isRetry = (cov_106kkaexzu().b[10][0]++, false)) {
    cov_106kkaexzu().f[3]++;
    // AxiosClient instead of this.ledgers so we can get at them headers
    const currentTime = (cov_106kkaexzu().s[22]++, (0, _horizon_axios_client.getCurrentServerTime)(this.serverURL.hostname()));
    cov_106kkaexzu().s[23]++;
    if (currentTime) {
      cov_106kkaexzu().b[11][0]++;
      cov_106kkaexzu().s[24]++;
      return {
        minTime: 0,
        maxTime: currentTime + seconds
      };
    } else {
      cov_106kkaexzu().b[11][1]++;
    }

    // if this is a retry, then the retry has failed, so use local time
    cov_106kkaexzu().s[25]++;
    if (_isRetry) {
      cov_106kkaexzu().b[12][0]++;
      cov_106kkaexzu().s[26]++;
      return {
        minTime: 0,
        maxTime: Math.floor(new Date().getTime() / 1000) + seconds
      };
    } else {
      cov_106kkaexzu().b[12][1]++;
    }

    // otherwise, retry (by calling the root endpoint)
    // toString automatically adds the trailing slash
    cov_106kkaexzu().s[27]++;
    await _horizon_axios_client.default.get((0, _urijs.default)(this.serverURL).toString());
    cov_106kkaexzu().s[28]++;
    return this.fetchTimebounds(seconds, true);
  }

  /**
   * Fetch the base fee. Since this hits the server, if the server call fails,
   * you might get an error. You should be prepared to use a default value if
   * that happens!
   * @returns {Promise<number>} Promise that resolves to the base fee.
   */
  async fetchBaseFee() {
    cov_106kkaexzu().f[4]++;
    const response = (cov_106kkaexzu().s[29]++, await this.feeStats());
    cov_106kkaexzu().s[30]++;
    return (cov_106kkaexzu().b[13][0]++, parseInt(response.last_ledger_base_fee, 10)) || (cov_106kkaexzu().b[13][1]++, 100);
  }

  /**
   * Fetch the fee stats endpoint.
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/aggregations/fee-stats|Fee Stats}
   * @returns {Promise<HorizonApi.FeeStatsResponse>} Promise that resolves to the fee stats returned by Horizon.
   */
  // eslint-disable-next-line require-await
  async feeStats() {
    cov_106kkaexzu().f[5]++;
    const cb = (cov_106kkaexzu().s[31]++, new _call_builder.CallBuilder((0, _urijs.default)(this.serverURL)));
    cov_106kkaexzu().s[32]++;
    cb.filter.push(["fee_stats"]);
    cov_106kkaexzu().s[33]++;
    return cb.call();
  }

  /**
   * Submits a transaction to the network.
   *
   * By default this function calls {@link Horizon.Server#checkMemoRequired}, you can
   * skip this check by setting the option `skipMemoRequiredCheck` to `true`.
   *
   * If you submit any number of `manageOffer` operations, this will add an
   * attribute to the response that will help you analyze what happened with
   * your offers.
   *
   * For example, you'll want to examine `offerResults` to add affordances like
   * these to your app:
   * - If `wasImmediatelyFilled` is true, then no offer was created. So if you
   *   normally watch the `Server.offers` endpoint for offer updates, you
   *   instead need to check `Server.trades` to find the result of this filled
   *   offer.
   * - If `wasImmediatelyDeleted` is true, then the offer you submitted was
   *   deleted without reaching the orderbook or being matched (possibly because
   *   your amounts were rounded down to zero). So treat the just-submitted
   *   offer request as if it never happened.
   * - If `wasPartiallyFilled` is true, you can tell the user that
   *   `amountBought` or `amountSold` have already been transferred.
   *
   * @example
   * const res = {
   *   ...response,
   *   offerResults: [
   *     {
   *       // Exact ordered list of offers that executed, with the exception
   *       // that the last one may not have executed entirely.
   *       offersClaimed: [
   *         sellerId: String,
   *         offerId: String,
   *         assetSold: {
   *           type: 'native|credit_alphanum4|credit_alphanum12',
   *
   *           // these are only present if the asset is not native
   *           assetCode: String,
   *           issuer: String,
   *         },
   *
   *         // same shape as assetSold
   *         assetBought: {}
   *       ],
   *
   *       // What effect your manageOffer op had
   *       effect: "manageOfferCreated|manageOfferUpdated|manageOfferDeleted",
   *
   *       // Whether your offer immediately got matched and filled
   *       wasImmediatelyFilled: Boolean,
   *
   *       // Whether your offer immediately got deleted, if for example the order was too small
   *       wasImmediatelyDeleted: Boolean,
   *
   *       // Whether the offer was partially, but not completely, filled
   *       wasPartiallyFilled: Boolean,
   *
   *       // The full requested amount of the offer is open for matching
   *       isFullyOpen: Boolean,
   *
   *       // The total amount of tokens bought / sold during transaction execution
   *       amountBought: Number,
   *       amountSold: Number,
   *
   *       // if the offer was created, updated, or partially filled, this is
   *       // the outstanding offer
   *       currentOffer: {
   *         offerId: String,
   *         amount: String,
   *         price: {
   *           n: String,
   *           d: String,
   *         },
   *
   *         selling: {
   *           type: 'native|credit_alphanum4|credit_alphanum12',
   *
   *           // these are only present if the asset is not native
   *           assetCode: String,
   *           issuer: String,
   *         },
   *
   *         // same as `selling`
   *         buying: {},
   *       },
   *
   *       // the index of this particular operation in the op stack
   *       operationIndex: Number
   *     }
   *   ]
   * }
   *
   * @see {@link https://developers.stellar.org/docs/data/horizon/api-reference/resources/submit-a-transaction|Submit a Transaction}
   * @param {Transaction|FeeBumpTransaction} transaction - The transaction to submit.
   * @param {object} [opts] Options object
   * @param {boolean} [opts.skipMemoRequiredCheck] - Allow skipping memo
   * required check, default: `false`. See
   * [SEP0029](https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0029.md).
   * @returns {Promise} Promise that resolves or rejects with response from
   * horizon.
   */
  async submitTransaction(transaction, opts = (cov_106kkaexzu().b[14][0]++, {
    skipMemoRequiredCheck: false
  })) {
    cov_106kkaexzu().f[6]++;
    cov_106kkaexzu().s[34]++;
    // only check for memo required if skipMemoRequiredCheck is false and the transaction doesn't include a memo.
    if (!opts.skipMemoRequiredCheck) {
      cov_106kkaexzu().b[15][0]++;
      cov_106kkaexzu().s[35]++;
      await this.checkMemoRequired(transaction);
    } else {
      cov_106kkaexzu().b[15][1]++;
    }
    const tx = (cov_106kkaexzu().s[36]++, encodeURIComponent(transaction.toEnvelope().toXDR().toString("base64")));
    cov_106kkaexzu().s[37]++;
    return _horizon_axios_client.default.post((0, _urijs.default)(this.serverURL).segment("transactions").toString(), `tx=${tx}`, {
      timeout: SUBMIT_TRANSACTION_TIMEOUT
    }).then(response => {
      cov_106kkaexzu().f[7]++;
      cov_106kkaexzu().s[38]++;
      if (!response.data.result_xdr) {
        cov_106kkaexzu().b[16][0]++;
        cov_106kkaexzu().s[39]++;
        return response.data;
      } else {
        cov_106kkaexzu().b[16][1]++;
      }
      const responseXDR = (cov_106kkaexzu().s[40]++, _stellarBase.xdr.TransactionResult.fromXDR(response.data.result_xdr, "base64"));

      // TODO: fix stellar-base types.
      const results = (cov_106kkaexzu().s[41]++, responseXDR.result().value());
      let offerResults;
      let hasManageOffer;
      cov_106kkaexzu().s[42]++;
      if (results.length) {
        cov_106kkaexzu().b[17][0]++;
        cov_106kkaexzu().s[43]++;
        offerResults = results
        // TODO: fix stellar-base types.
        .map((result, i) => {
          cov_106kkaexzu().f[8]++;
          cov_106kkaexzu().s[44]++;
          if ((cov_106kkaexzu().b[19][0]++, result.value().switch().name !== "manageBuyOffer") && (cov_106kkaexzu().b[19][1]++, result.value().switch().name !== "manageSellOffer")) {
            cov_106kkaexzu().b[18][0]++;
            cov_106kkaexzu().s[45]++;
            return null;
          } else {
            cov_106kkaexzu().b[18][1]++;
          }
          cov_106kkaexzu().s[46]++;
          hasManageOffer = true;
          let amountBought = (cov_106kkaexzu().s[47]++, new _bignumber.default(0));
          let amountSold = (cov_106kkaexzu().s[48]++, new _bignumber.default(0));
          const offerSuccess = (cov_106kkaexzu().s[49]++, result.value().value().success());
          const offersClaimed = (cov_106kkaexzu().s[50]++, offerSuccess.offersClaimed()
          // TODO: fix stellar-base types.
          .map(offerClaimedAtom => {
            cov_106kkaexzu().f[9]++;
            const offerClaimed = (cov_106kkaexzu().s[51]++, offerClaimedAtom.value());
            let sellerId = (cov_106kkaexzu().s[52]++, "");
            cov_106kkaexzu().s[53]++;
            switch (offerClaimedAtom.switch()) {
              case _stellarBase.xdr.ClaimAtomType.claimAtomTypeV0():
                cov_106kkaexzu().b[20][0]++;
                cov_106kkaexzu().s[54]++;
                sellerId = _stellarBase.StrKey.encodeDilithium2PublicKey(offerClaimed.sellerDilithium2());
                cov_106kkaexzu().s[55]++;
                break;
              case _stellarBase.xdr.ClaimAtomType.claimAtomTypeOrderBook():
                cov_106kkaexzu().b[20][1]++;
                cov_106kkaexzu().s[56]++;
                sellerId = _stellarBase.StrKey.encodeDilithium2PublicKey(offerClaimed.sellerId().dilithium2());
                cov_106kkaexzu().s[57]++;
                break;
              // It shouldn't be possible for a claimed offer to have type
              // claimAtomTypeLiquidityPool:
              //
              // https://github.com/stellar/stellar-core/blob/c5f6349b240818f716617ca6e0f08d295a6fad9a/src/transactions/TransactionUtils.cpp#L1284
              //
              // However, you can never be too careful.
              default:
                cov_106kkaexzu().b[20][2]++;
                cov_106kkaexzu().s[58]++;
                throw new Error(`Invalid offer result type: ${offerClaimedAtom.switch()}`);
            }
            const claimedOfferAmountBought = (cov_106kkaexzu().s[59]++, new _bignumber.default(
            // amountBought is a js-xdr hyper
            offerClaimed.amountBought().toString()));
            const claimedOfferAmountSold = (cov_106kkaexzu().s[60]++, new _bignumber.default(
            // amountBought is a js-xdr hyper
            offerClaimed.amountSold().toString()));

            // This is an offer that was filled by the one just submitted.
            // So this offer has an _opposite_ bought/sold frame of ref
            // than from what we just submitted!
            // So add this claimed offer's bought to the SOLD count and vice v
            cov_106kkaexzu().s[61]++;
            amountBought = amountBought.plus(claimedOfferAmountSold);
            cov_106kkaexzu().s[62]++;
            amountSold = amountSold.plus(claimedOfferAmountBought);
            const sold = (cov_106kkaexzu().s[63]++, _stellarBase.Asset.fromOperation(offerClaimed.assetSold()));
            const bought = (cov_106kkaexzu().s[64]++, _stellarBase.Asset.fromOperation(offerClaimed.assetBought()));
            const assetSold = (cov_106kkaexzu().s[65]++, {
              type: sold.getAssetType(),
              assetCode: sold.getCode(),
              issuer: sold.getIssuer()
            });
            const assetBought = (cov_106kkaexzu().s[66]++, {
              type: bought.getAssetType(),
              assetCode: bought.getCode(),
              issuer: bought.getIssuer()
            });
            cov_106kkaexzu().s[67]++;
            return {
              sellerId,
              offerId: offerClaimed.offerId().toString(),
              assetSold,
              amountSold: getAmountInLumens(claimedOfferAmountSold),
              assetBought,
              amountBought: getAmountInLumens(claimedOfferAmountBought)
            };
          }));
          const effect = (cov_106kkaexzu().s[68]++, offerSuccess.offer().switch().name);
          let currentOffer;
          cov_106kkaexzu().s[69]++;
          if ((cov_106kkaexzu().b[22][0]++, typeof offerSuccess.offer().value === "function") && (cov_106kkaexzu().b[22][1]++, offerSuccess.offer().value())) {
            cov_106kkaexzu().b[21][0]++;
            const offerXDR = (cov_106kkaexzu().s[70]++, offerSuccess.offer().value());
            cov_106kkaexzu().s[71]++;
            currentOffer = {
              offerId: offerXDR.offerId().toString(),
              selling: {},
              buying: {},
              amount: getAmountInLumens(offerXDR.amount().toString()),
              price: {
                n: offerXDR.price().n(),
                d: offerXDR.price().d()
              }
            };
            const selling = (cov_106kkaexzu().s[72]++, _stellarBase.Asset.fromOperation(offerXDR.selling()));
            cov_106kkaexzu().s[73]++;
            currentOffer.selling = {
              type: selling.getAssetType(),
              assetCode: selling.getCode(),
              issuer: selling.getIssuer()
            };
            const buying = (cov_106kkaexzu().s[74]++, _stellarBase.Asset.fromOperation(offerXDR.buying()));
            cov_106kkaexzu().s[75]++;
            currentOffer.buying = {
              type: buying.getAssetType(),
              assetCode: buying.getCode(),
              issuer: buying.getIssuer()
            };
          } else {
            cov_106kkaexzu().b[21][1]++;
          }
          cov_106kkaexzu().s[76]++;
          return {
            offersClaimed,
            effect,
            operationIndex: i,
            currentOffer,
            // this value is in stroops so divide it out
            amountBought: getAmountInLumens(amountBought),
            amountSold: getAmountInLumens(amountSold),
            isFullyOpen: (cov_106kkaexzu().b[23][0]++, !offersClaimed.length) && (cov_106kkaexzu().b[23][1]++, effect !== "manageOfferDeleted"),
            wasPartiallyFilled: (cov_106kkaexzu().b[24][0]++, !!offersClaimed.length) && (cov_106kkaexzu().b[24][1]++, effect !== "manageOfferDeleted"),
            wasImmediatelyFilled: (cov_106kkaexzu().b[25][0]++, !!offersClaimed.length) && (cov_106kkaexzu().b[25][1]++, effect === "manageOfferDeleted"),
            wasImmediatelyDeleted: (cov_106kkaexzu().b[26][0]++, !offersClaimed.length) && (cov_106kkaexzu().b[26][1]++, effect === "manageOfferDeleted")
          };
        })
        // TODO: fix stellar-base types.
        .filter(result => {
          cov_106kkaexzu().f[10]++;
          cov_106kkaexzu().s[77]++;
          return !!result;
        });
      } else {
        cov_106kkaexzu().b[17][1]++;
      }
      cov_106kkaexzu().s[78]++;
      return {
        ...response.data,
        offerResults: hasManageOffer ? (cov_106kkaexzu().b[27][0]++, offerResults) : (cov_106kkaexzu().b[27][1]++, undefined)
      };
    }).catch(response => {
      cov_106kkaexzu().f[11]++;
      cov_106kkaexzu().s[79]++;
      if (response instanceof Error) {
        cov_106kkaexzu().b[28][0]++;
        cov_106kkaexzu().s[80]++;
        return Promise.reject(response);
      } else {
        cov_106kkaexzu().b[28][1]++;
      }
      cov_106kkaexzu().s[81]++;
      return Promise.reject(new _errors.BadResponseError(`Transaction submission failed. Server responded: ${response.status} ${response.statusText}`, response.data));
    });
  }

  /**
   * Submits an asynchronous transaction to the network. Unlike the synchronous version, which blocks
   * and waits for the transaction to be ingested in Horizon, this endpoint relays the response from
   * core directly back to the user.
   *
   * By default, this function calls {@link HorizonServer#checkMemoRequired}, you can
   * skip this check by setting the option `skipMemoRequiredCheck` to `true`.
   *
   * @see [Submit-Async-Transaction](https://developers.stellar.org/docs/data/horizon/api-reference/resources/submit-async-transaction)
   * @param {Transaction|FeeBumpTransaction} transaction - The transaction to submit.
   * @param {object} [opts] Options object
   * @param {boolean} [opts.skipMemoRequiredCheck] - Allow skipping memo
   * required check, default: `false`. See
   * [SEP0029](https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0029.md).
   * @returns {Promise} Promise that resolves or rejects with response from
   * horizon.
   */
  async submitAsyncTransaction(transaction, opts = (cov_106kkaexzu().b[29][0]++, {
    skipMemoRequiredCheck: false
  })) {
    cov_106kkaexzu().f[12]++;
    cov_106kkaexzu().s[82]++;
    // only check for memo required if skipMemoRequiredCheck is false and the transaction doesn't include a memo.
    if (!opts.skipMemoRequiredCheck) {
      cov_106kkaexzu().b[30][0]++;
      cov_106kkaexzu().s[83]++;
      await this.checkMemoRequired(transaction);
    } else {
      cov_106kkaexzu().b[30][1]++;
    }
    const tx = (cov_106kkaexzu().s[84]++, encodeURIComponent(transaction.toEnvelope().toXDR().toString("base64")));
    cov_106kkaexzu().s[85]++;
    return _horizon_axios_client.default.post((0, _urijs.default)(this.serverURL).segment("transactions_async").toString(), `tx=${tx}`).then(response => {
      cov_106kkaexzu().f[13]++;
      cov_106kkaexzu().s[86]++;
      return response.data;
    }).catch(response => {
      cov_106kkaexzu().f[14]++;
      cov_106kkaexzu().s[87]++;
      if (response instanceof Error) {
        cov_106kkaexzu().b[31][0]++;
        cov_106kkaexzu().s[88]++;
        return Promise.reject(response);
      } else {
        cov_106kkaexzu().b[31][1]++;
      }
      cov_106kkaexzu().s[89]++;
      return Promise.reject(new _errors.BadResponseError(`Transaction submission failed. Server responded: ${response.status} ${response.statusText}`, response.data));
    });
  }

  /**
   * @returns {AccountCallBuilder} New {@link AccountCallBuilder} object configured by a current Horizon server configuration.
   */
  accounts() {
    cov_106kkaexzu().f[15]++;
    cov_106kkaexzu().s[90]++;
    return new _account_call_builder.AccountCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * @returns {ClaimableBalanceCallBuilder} New {@link ClaimableBalanceCallBuilder} object configured by a current Horizon server configuration.
   */
  claimableBalances() {
    cov_106kkaexzu().f[16]++;
    cov_106kkaexzu().s[91]++;
    return new _claimable_balances_call_builder.ClaimableBalanceCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * @returns {LedgerCallBuilder} New {@link LedgerCallBuilder} object configured by a current Horizon server configuration.
   */
  ledgers() {
    cov_106kkaexzu().f[17]++;
    cov_106kkaexzu().s[92]++;
    return new _ledger_call_builder.LedgerCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * @returns {TransactionCallBuilder} New {@link TransactionCallBuilder} object configured by a current Horizon server configuration.
   */
  transactions() {
    cov_106kkaexzu().f[18]++;
    cov_106kkaexzu().s[93]++;
    return new _transaction_call_builder.TransactionCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * People on the Stellar network can make offers to buy or sell assets. This endpoint represents all the offers on the DEX.
   *
   * You can query all offers for account using the function `.accountId`.
   *
   * @example
   * server.offers()
   *   .forAccount(accountId).call()
   *   .then(function(offers) {
   *     console.log(offers);
   *   });
   *
   * @returns {OfferCallBuilder} New {@link OfferCallBuilder} object
   */
  offers() {
    cov_106kkaexzu().f[19]++;
    cov_106kkaexzu().s[94]++;
    return new _offer_call_builder.OfferCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * @param {Asset} selling Asset being sold
   * @param {Asset} buying Asset being bought
   * @returns {OrderbookCallBuilder} New {@link OrderbookCallBuilder} object configured by a current Horizon server configuration.
   */
  orderbook(selling, buying) {
    cov_106kkaexzu().f[20]++;
    cov_106kkaexzu().s[95]++;
    return new _orderbook_call_builder.OrderbookCallBuilder((0, _urijs.default)(this.serverURL), selling, buying);
  }

  /**
   * Returns
   * @returns {TradesCallBuilder} New {@link TradesCallBuilder} object configured by a current Horizon server configuration.
   */
  trades() {
    cov_106kkaexzu().f[21]++;
    cov_106kkaexzu().s[96]++;
    return new _trades_call_builder.TradesCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * @returns {OperationCallBuilder} New {@link OperationCallBuilder} object configured by a current Horizon server configuration.
   */
  operations() {
    cov_106kkaexzu().f[22]++;
    cov_106kkaexzu().s[97]++;
    return new _operation_call_builder.OperationCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * @returns {LiquidityPoolCallBuilder} New {@link LiquidityPoolCallBuilder}
   *     object configured to the current Horizon server settings.
   */
  liquidityPools() {
    cov_106kkaexzu().f[23]++;
    cov_106kkaexzu().s[98]++;
    return new _liquidity_pool_call_builder.LiquidityPoolCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * The Stellar Network allows payments to be made between assets through path
   * payments. A strict receive path payment specifies a series of assets to
   * route a payment through, from source asset (the asset debited from the
   * payer) to destination asset (the asset credited to the payee).
   *
   * A strict receive path search is specified using:
   *
   * * The destination address.
   * * The source address or source assets.
   * * The asset and amount that the destination account should receive.
   *
   * As part of the search, horizon will load a list of assets available to the
   * source address and will find any payment paths from those source assets to
   * the desired destination asset. The search's amount parameter will be used
   * to determine if there a given path can satisfy a payment of the desired
   * amount.
   *
   * If a list of assets is passed as the source, horizon will find any payment
   * paths from those source assets to the desired destination asset.
   *
   * @param {string|Asset[]} source The sender's account ID or a list of assets. Any returned path will use a source that the sender can hold.
   * @param {Asset} destinationAsset The destination asset.
   * @param {string} destinationAmount The amount, denominated in the destination asset, that any returned path should be able to satisfy.
   * @returns {StrictReceivePathCallBuilder} New {@link StrictReceivePathCallBuilder} object configured with the current Horizon server configuration.
   */
  strictReceivePaths(source, destinationAsset, destinationAmount) {
    cov_106kkaexzu().f[24]++;
    cov_106kkaexzu().s[99]++;
    return new _strict_receive_path_call_builder.StrictReceivePathCallBuilder((0, _urijs.default)(this.serverURL), source, destinationAsset, destinationAmount);
  }

  /**
   * The Stellar Network allows payments to be made between assets through path payments. A strict send path payment specifies a
   * series of assets to route a payment through, from source asset (the asset debited from the payer) to destination
   * asset (the asset credited to the payee).
   *
   * A strict send path search is specified using:
   *
   * The asset and amount that is being sent.
   * The destination account or the destination assets.
   *
   * @param {Asset} sourceAsset The asset to be sent.
   * @param {string} sourceAmount The amount, denominated in the source asset, that any returned path should be able to satisfy.
   * @param {string|Asset[]} destination The destination account or the destination assets.
   * @returns {StrictSendPathCallBuilder} New {@link StrictSendPathCallBuilder} object configured with the current Horizon server configuration.
   */
  strictSendPaths(sourceAsset, sourceAmount, destination) {
    cov_106kkaexzu().f[25]++;
    cov_106kkaexzu().s[100]++;
    return new _strict_send_path_call_builder.StrictSendPathCallBuilder((0, _urijs.default)(this.serverURL), sourceAsset, sourceAmount, destination);
  }

  /**
   * @returns {PaymentCallBuilder} New {@link PaymentCallBuilder} instance configured with the current
   * Horizon server configuration.
   */
  payments() {
    cov_106kkaexzu().f[26]++;
    cov_106kkaexzu().s[101]++;
    return new _payment_call_builder.PaymentCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * @returns {EffectCallBuilder} New {@link EffectCallBuilder} instance configured with the current
   * Horizon server configuration
   */
  effects() {
    cov_106kkaexzu().f[27]++;
    cov_106kkaexzu().s[102]++;
    return new _effect_call_builder.EffectCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * @param {string} address The Stellar ID that you want Friendbot to send lumens to
   * @returns {FriendbotBuilder} New {@link FriendbotBuilder} instance configured with the current
   * Horizon server configuration
   * @private
   */
  friendbot(address) {
    cov_106kkaexzu().f[28]++;
    cov_106kkaexzu().s[103]++;
    return new _friendbot_builder.FriendbotBuilder((0, _urijs.default)(this.serverURL), address);
  }

  /**
   * Get a new {@link AssetsCallBuilder} instance configured with the current
   * Horizon server configuration.
   * @returns {AssetsCallBuilder} New AssetsCallBuilder instance
   */
  assets() {
    cov_106kkaexzu().f[29]++;
    cov_106kkaexzu().s[104]++;
    return new _assets_call_builder.AssetsCallBuilder((0, _urijs.default)(this.serverURL));
  }

  /**
   * Fetches an account's most current state in the ledger, then creates and
   * returns an {@link AccountResponse} object.
   *
   * @param {string} accountId - The account to load.
   *
   * @returns {Promise} Returns a promise to the {@link AccountResponse} object
   * with populated sequence number.
   */
  async loadAccount(accountId) {
    cov_106kkaexzu().f[30]++;
    const res = (cov_106kkaexzu().s[105]++, await this.accounts().accountId(accountId).call());
    cov_106kkaexzu().s[106]++;
    return new _account_response.AccountResponse(res);
  }

  /**
   *
   * @param {Asset} base base asset
   * @param {Asset} counter counter asset
   * @param {number} start_time lower time boundary represented as millis since epoch
   * @param {number} end_time upper time boundary represented as millis since epoch
   * @param {number} resolution segment duration as millis since epoch. *Supported values are 5 minutes (300000), 15 minutes (900000), 1 hour (3600000), 1 day (86400000) and 1 week (604800000).
   * @param {number} offset segments can be offset using this parameter. Expressed in milliseconds. *Can only be used if the resolution is greater than 1 hour. Value must be in whole hours, less than the provided resolution, and less than 24 hours.
   * Returns new {@link TradeAggregationCallBuilder} object configured with the current Horizon server configuration.
   * @returns {TradeAggregationCallBuilder} New TradeAggregationCallBuilder instance
   */
  tradeAggregation(base, counter, start_time, end_time, resolution, offset) {
    cov_106kkaexzu().f[31]++;
    cov_106kkaexzu().s[107]++;
    return new _trade_aggregation_call_builder.TradeAggregationCallBuilder((0, _urijs.default)(this.serverURL), base, counter, start_time, end_time, resolution, offset);
  }

  /**
   * Check if any of the destination accounts requires a memo.
   *
   * This function implements a memo required check as defined in
   * [SEP-29](https://stellar.org/protocol/sep-29). It will load each account
   * which is the destination and check if it has the data field
   * `config.memo_required` set to `"MQ=="`.
   *
   * Each account is checked sequentially instead of loading multiple accounts
   * at the same time from Horizon.
   *
   * @see {@link https://stellar.org/protocol/sep-29|SEP-29: Account Memo Requirements}
   * @param {Transaction} transaction - The transaction to check.
   * @returns {Promise<void, Error>} - If any of the destination account
   * requires a memo, the promise will throw {@link AccountRequiresMemoError}.
   * @throws  {AccountRequiresMemoError}
   */
  async checkMemoRequired(transaction) {
    cov_106kkaexzu().f[32]++;
    cov_106kkaexzu().s[108]++;
    if (transaction instanceof _stellarBase.FeeBumpTransaction) {
      cov_106kkaexzu().b[32][0]++;
      cov_106kkaexzu().s[109]++;
      transaction = transaction.innerTransaction;
    } else {
      cov_106kkaexzu().b[32][1]++;
    }
    cov_106kkaexzu().s[110]++;
    if (transaction.memo.type !== "none") {
      cov_106kkaexzu().b[33][0]++;
      cov_106kkaexzu().s[111]++;
      return;
    } else {
      cov_106kkaexzu().b[33][1]++;
    }
    const destinations = (cov_106kkaexzu().s[112]++, new Set());

    /* eslint-disable no-continue */
    cov_106kkaexzu().s[113]++;
    for (let i = (cov_106kkaexzu().s[114]++, 0); i < transaction.operations.length; i += 1) {
      const operation = (cov_106kkaexzu().s[115]++, transaction.operations[i]);
      cov_106kkaexzu().s[116]++;
      switch (operation.type) {
        case "payment":
          cov_106kkaexzu().b[34][0]++;
        case "pathPaymentStrictReceive":
          cov_106kkaexzu().b[34][1]++;
        case "pathPaymentStrictSend":
          cov_106kkaexzu().b[34][2]++;
        case "accountMerge":
          cov_106kkaexzu().b[34][3]++;
          cov_106kkaexzu().s[117]++;
          break;
        default:
          cov_106kkaexzu().b[34][4]++;
          cov_106kkaexzu().s[118]++;
          continue;
      }
      const destination = (cov_106kkaexzu().s[119]++, operation.destination);
      cov_106kkaexzu().s[120]++;
      if (destinations.has(destination)) {
        cov_106kkaexzu().b[35][0]++;
        cov_106kkaexzu().s[121]++;
        continue;
      } else {
        cov_106kkaexzu().b[35][1]++;
      }
      cov_106kkaexzu().s[122]++;
      destinations.add(destination);

      // skip M account checks since it implies a memo
      cov_106kkaexzu().s[123]++;
      if (destination.startsWith("M")) {
        cov_106kkaexzu().b[36][0]++;
        cov_106kkaexzu().s[124]++;
        continue;
      } else {
        cov_106kkaexzu().b[36][1]++;
      }
      cov_106kkaexzu().s[125]++;
      try {
        // eslint-disable-next-line no-await-in-loop
        const account = (cov_106kkaexzu().s[126]++, await this.loadAccount(destination));
        cov_106kkaexzu().s[127]++;
        if (account.data_attr["config.memo_required"] === ACCOUNT_REQUIRES_MEMO) {
          cov_106kkaexzu().b[37][0]++;
          cov_106kkaexzu().s[128]++;
          throw new _errors.AccountRequiresMemoError("account requires memo", destination, i);
        } else {
          cov_106kkaexzu().b[37][1]++;
        }
      } catch (e) {
        cov_106kkaexzu().s[129]++;
        if (e instanceof _errors.AccountRequiresMemoError) {
          cov_106kkaexzu().b[38][0]++;
          cov_106kkaexzu().s[130]++;
          throw e;
        } else {
          cov_106kkaexzu().b[38][1]++;
        }

        // fail if the error is different to account not found
        cov_106kkaexzu().s[131]++;
        if (!(e instanceof _errors.NotFoundError)) {
          cov_106kkaexzu().b[39][0]++;
          cov_106kkaexzu().s[132]++;
          throw e;
        } else {
          cov_106kkaexzu().b[39][1]++;
        }
        cov_106kkaexzu().s[133]++;
        continue;
      }
    }
    /* eslint-enable no-continue */
  }
}

/**
 * Options for configuring connections to Horizon servers.
 * @typedef {object} Options
 * @memberof module:Horizon.Server
 * @property {boolean} [allowHttp] Allow connecting to http servers, default: `false`. This must be set to false in production deployments! You can also use {@link Config} class to set this globally.
 * @property {string} [appName] Allow set custom header `X-App-Name`, default: `undefined`.
 * @property {string} [appVersion] Allow set custom header `X-App-Version`, default: `undefined`.
 * @property {string} [authToken] Allow set custom header `X-Auth-Token`, default: `undefined`.
 */
exports.HorizonServer = HorizonServer;