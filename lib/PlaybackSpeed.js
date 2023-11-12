"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PlaybackSpeedForwardRef = exports.PlaybackSpeed = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _SleepTimer = require("./SleepTimer");
var _constants = require("./constants");
var _react2 = require("@iconify/react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class PlaybackSpeed extends _react.Component {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "audio", void 0);
    (0, _defineProperty2.default)(this, "state", {
      isDialogOpen: false,
      playbackRate: 1
    });
    (0, _defineProperty2.default)(this, "changePlaybackSpeed", v => {
      this.audio = this.props.audio;
      if (this.audio) {
        this.audio.playbackRate = v;
        this.setState({
          playbackRate: v,
          isDialogOpen: false
        });
      }
    });
  }
  render() {
    return _react.default.createElement("div", {
      ref: this.props.playbackSpeed,
      className: "rhap_speed-container"
    }, _react.default.createElement(_SleepTimer.OutsideClick, {
      onOutsideClick: () => {
        this.setState({
          isDialogOpen: false
        });
      }
    }, _react.default.createElement("button", {
      onClick: () => {
        this.setState({
          isDialogOpen: true
        });
      },
      className: "rhap_speed-button"
    }, this.state.playbackRate, "x"), this.state.isDialogOpen && _react.default.createElement("div", {
      className: "rhap_dialog-container left-0"
    }, _react.default.createElement("div", {
      className: "rhap_dialog-header"
    }, "PLAYBACK SPEED"), _react.default.createElement("div", {
      className: "rhap_dialog-content"
    }, _constants.PLAYBACK_SPEED.map((v, i) => _react.default.createElement("button", {
      onClick: () => this.changePlaybackSpeed(v),
      key: 'dialog_item_' + i.toString()
    }, _react.default.createElement("span", null, v, "x"), this.state.playbackRate === v && _react.default.createElement("span", null, _react.default.createElement(_react2.Icon, {
      icon: 'material-symbols:check'
    }))))))));
  }
}
exports.PlaybackSpeed = PlaybackSpeed;
const PlaybackSpeedForwardRef = (props, ref) => _react.default.createElement(PlaybackSpeed, (0, _extends2.default)({}, props, {
  playbackSpeed: ref
}));
exports.PlaybackSpeedForwardRef = PlaybackSpeedForwardRef;
var _default = exports.default = (0, _react.forwardRef)(PlaybackSpeedForwardRef);