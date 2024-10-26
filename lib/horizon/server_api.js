"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerApi = void 0;
var _horizon_api = require("./horizon_api");
function cov_a71v5r9i6() {
  var path = "/mnt/g/stellar-sdk/src/horizon/server_api.ts";
  var hash = "c8c76d4d8348c5c21db5decb0b4bbbe68498d0c9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/mnt/g/stellar-sdk/src/horizon/server_api.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c8c76d4d8348c5c21db5decb0b4bbbe68498d0c9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_a71v5r9i6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_a71v5r9i6();
// more types
/* tslint:disable-next-line: no-namespace */
let ServerApi = exports.ServerApi = void 0;
(function (_ServerApi) {
  let TradeType = /*#__PURE__*/function (TradeType) {
    TradeType["all"] = "all";
    TradeType["liquidityPools"] = "liquidity_pool";
    TradeType["orderbook"] = "orderbook";
    return TradeType;
  }({});
  _ServerApi.TradeType = TradeType;
  var OperationResponseType = _horizon_api.HorizonApi.OperationResponseType;
  var OperationResponseTypeI = _horizon_api.HorizonApi.OperationResponseTypeI;
})(ServerApi || (exports.ServerApi = ServerApi = {}));