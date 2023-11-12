"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SleepTimerForwardRef = exports.SleepTimer = exports.OutsideClick = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _constants = require("./constants");
var _react2 = require("@iconify/react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class SleepTimer extends _react.Component {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "audio", void 0);
    (0, _defineProperty2.default)(this, "timeout", void 0);
    (0, _defineProperty2.default)(this, "state", {
      isDialogOpen: false,
      sleepTimer: null
    });
    (0, _defineProperty2.default)(this, "startTimer", v => {
      const {
        audio
      } = this.props;
      this.timeout = setTimeout(() => {
        if (audio) {
          audio.pause();
        }
      }, v.value);
      this.setState({
        sleepTimer: v,
        isDialogOpen: false
      });
    });
    (0, _defineProperty2.default)(this, "stopTimer", () => {
      this.timeout && clearTimeout(this.timeout);
      this.setState({
        sleepTimer: null,
        isDialogOpen: false
      });
    });
  }
  componentWillUnmount() {
    this.stopTimer();
  }
  render() {
    return _react.default.createElement("div", {
      ref: this.props.sleepTimer,
      className: "rhap_sleep-container"
    }, _react.default.createElement(OutsideClick, {
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
    }, _react.default.createElement(_react2.Icon, {
      width: 18,
      height: 18,
      icon: 'icon-park-outline:sleep-one'
    })), this.state.isDialogOpen && _react.default.createElement("div", {
      className: "rhap_dialog-container right-zero"
    }, _react.default.createElement("div", {
      className: "rhap_dialog-header"
    }, "Sleep Timer"), _react.default.createElement("div", {
      className: "rhap_dialog-content"
    }, _constants.SLEEP_TIMER.map((v, i) => _react.default.createElement("button", {
      onClick: () => this.startTimer(v),
      key: 'dialog_item_' + i.toString()
    }, _react.default.createElement("span", null, v.label), this.state.sleepTimer && this.state.sleepTimer.label === v.label && _react.default.createElement("span", null, _react.default.createElement(_react2.Icon, {
      icon: 'material-symbols:check'
    })))), this.state.sleepTimer && _react.default.createElement("button", {
      onClick: () => this.stopTimer()
    }, _react.default.createElement("span", null, "Stop Timer"))))));
  }
}
exports.SleepTimer = SleepTimer;
const SleepTimerForwardRef = (props, ref) => _react.default.createElement(SleepTimer, (0, _extends2.default)({}, props, {
  sleepTimer: ref
}));
exports.SleepTimerForwardRef = SleepTimerForwardRef;
class OutsideClick extends _react.Component {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, "ref", _react.default.createRef());
    (0, _defineProperty2.default)(this, "handleClickOutside", event => {
      const {
        onOutsideClick
      } = this.props;
      if (this.ref.current && this.ref.current.contains && !this.ref.current.contains(event.target)) {
        onOutsideClick && onOutsideClick(this.ref.current);
      }
    });
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  render() {
    const {
      children,
      ...others
    } = this.props;
    return _react.default.createElement("div", (0, _extends2.default)({}, others, {
      ref: this.ref
    }), children);
  }
}
exports.OutsideClick = OutsideClick;
var _default = exports.default = (0, _react.forwardRef)(SleepTimerForwardRef);