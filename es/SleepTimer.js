import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component, forwardRef } from 'react';
import { SLEEP_TIMER } from './constants';
import { Icon } from '@iconify/react';
class SleepTimer extends Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "audio", void 0);
    _defineProperty(this, "timeout", void 0);
    _defineProperty(this, "state", {
      isDialogOpen: false,
      sleepTimer: null
    });
    _defineProperty(this, "startTimer", v => {
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
    _defineProperty(this, "stopTimer", () => {
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
    return React.createElement("div", {
      ref: this.props.sleepTimer,
      className: "rhap_sleep-container"
    }, React.createElement(OutsideClick, {
      onOutsideClick: () => {
        this.setState({
          isDialogOpen: false
        });
      }
    }, React.createElement("button", {
      onClick: () => {
        this.setState({
          isDialogOpen: true
        });
      },
      className: "rhap_speed-button"
    }, React.createElement(Icon, {
      width: 18,
      height: 18,
      icon: 'icon-park-outline:sleep-one'
    })), this.state.isDialogOpen && React.createElement("div", {
      className: "rhap_dialog-container right-zero"
    }, React.createElement("div", {
      className: "rhap_dialog-header"
    }, "Sleep Timer"), React.createElement("div", {
      className: "rhap_dialog-content"
    }, SLEEP_TIMER.map((v, i) => React.createElement("button", {
      onClick: () => this.startTimer(v),
      key: 'dialog_item_' + i.toString()
    }, React.createElement("span", null, v.label), this.state.sleepTimer && this.state.sleepTimer.label === v.label && React.createElement("span", null, React.createElement(Icon, {
      icon: 'material-symbols:check'
    })))), this.state.sleepTimer && React.createElement("button", {
      onClick: () => this.stopTimer()
    }, React.createElement("span", null, "Stop Timer"))))));
  }
}
const SleepTimerForwardRef = (props, ref) => React.createElement(SleepTimer, _extends({}, props, {
  sleepTimer: ref
}));
class OutsideClick extends Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "ref", React.createRef());
    _defineProperty(this, "handleClickOutside", event => {
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
    return React.createElement("div", _extends({}, others, {
      ref: this.ref
    }), children);
  }
}
export default forwardRef(SleepTimerForwardRef);
export { SleepTimer, SleepTimerForwardRef, OutsideClick };