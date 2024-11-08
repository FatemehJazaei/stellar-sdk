"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SERVER_TIME_MAP = exports.AxiosClient = void 0;
exports.getCurrentServerTime = getCurrentServerTime;
exports.version = void 0;
var _urijs = _interopRequireDefault(require("urijs"));
var _httpClient = require("../http-client");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var version = exports.version = "13.0.0-beta.1";
var SERVER_TIME_MAP = exports.SERVER_TIME_MAP = {};
var AxiosClient = exports.AxiosClient = (0, _httpClient.create)({
  headers: {
    "X-Client-Name": "js-stellar-sdk",
    "X-Client-Version": version
  }
});
function toSeconds(ms) {
  return Math.floor(ms / 1000);
}
AxiosClient.interceptors.response.use(function (response) {
  var hostname = (0, _urijs.default)(response.config.url).hostname();
  var serverTime = 0;
  if (response.headers instanceof Headers) {
    var dateHeader = response.headers.get('date');
    if (dateHeader) {
      serverTime = toSeconds(Date.parse(dateHeader));
    }
  } else if (_typeof(response.headers) === 'object' && 'date' in response.headers) {
    var headers = response.headers;
    if (typeof headers.date === 'string') {
      serverTime = toSeconds(Date.parse(headers.date));
    }
  }
  var localTimeRecorded = toSeconds(new Date().getTime());
  if (!Number.isNaN(serverTime)) {
    SERVER_TIME_MAP[hostname] = {
      serverTime: serverTime,
      localTimeRecorded: localTimeRecorded
    };
  }
  return response;
});
var _default = exports.default = AxiosClient;
function getCurrentServerTime(hostname) {
  var entry = SERVER_TIME_MAP[hostname];
  if (!entry || !entry.localTimeRecorded || !entry.serverTime) {
    return null;
  }
  var serverTime = entry.serverTime,
    localTimeRecorded = entry.localTimeRecorded;
  var currentTime = toSeconds(new Date().getTime());
  if (currentTime - localTimeRecorded > 60 * 5) {
    return null;
  }
  return currentTime - localTimeRecorded + serverTime;
}