import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component, forwardRef } from 'react';
import { OutsideClick } from './SleepTimer';
import { PLAYBACK_SPEED } from './constants';
import { Icon } from '@iconify/react';
class PlaybackSpeed extends Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "audio", void 0);
    _defineProperty(this, "state", {
      isDialogOpen: false,
      playbackRate: 1
    });
    _defineProperty(this, "changePlaybackSpeed", v => {
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
    return React.createElement("div", {
      ref: this.props.playbackSpeed,
      className: "rhap_speed-container"
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
    }, this.state.playbackRate, "x"), this.state.isDialogOpen && React.createElement("div", {
      className: "rhap_dialog-container left-0"
    }, React.createElement("div", {
      className: "rhap_dialog-header"
    }, "PLAYBACK SPEED"), React.createElement("div", {
      className: "rhap_dialog-content"
    }, PLAYBACK_SPEED.map((v, i) => React.createElement("button", {
      onClick: () => this.changePlaybackSpeed(v),
      key: 'dialog_item_' + i.toString()
    }, React.createElement("span", null, v, "x"), this.state.playbackRate === v && React.createElement("span", null, React.createElement(Icon, {
      icon: 'material-symbols:check'
    }))))))));
  }
}
const PlaybackSpeedForwardRef = (props, ref) => React.createElement(PlaybackSpeed, _extends({}, props, {
  playbackSpeed: ref
}));
export default forwardRef(PlaybackSpeedForwardRef);
export { PlaybackSpeed, PlaybackSpeedForwardRef };