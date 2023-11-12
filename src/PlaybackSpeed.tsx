import React, { Component, forwardRef } from 'react'
import { OutsideClick } from './SleepTimer'
import { PLAYBACK_SPEED } from './constants'
import { Icon } from '@iconify/react'

interface SleepTimerForwardRefProps {
  audio: HTMLAudioElement
}

interface PlaybackSpeedProps extends SleepTimerForwardRefProps {
  playbackSpeed: React.RefObject<HTMLDivElement>
}

interface PlaybackSpeedState {
  isDialogOpen: boolean
  playbackRate: number
}

class PlaybackSpeed extends Component<PlaybackSpeedProps, PlaybackSpeedState> {
  audio?: HTMLAudioElement

  state: PlaybackSpeedState = {
    isDialogOpen: false,
    playbackRate: 1,
  }

  changePlaybackSpeed = (v: number): void => {
    this.audio = this.props.audio
    if (this.audio) {
      this.audio.playbackRate = v
      this.setState({ playbackRate: v, isDialogOpen: false })
    }
  }

  render(): React.ReactNode {
    return (
      <div ref={this.props.playbackSpeed} className="rhap_speed-container">
        <OutsideClick
          onOutsideClick={() => {
            this.setState({ isDialogOpen: false })
          }}
        >
          <button
            onClick={() => {
              this.setState({ isDialogOpen: true })
            }}
            className="rhap_speed-button"
          >
            {this.state.playbackRate}x
          </button>
          {this.state.isDialogOpen && (
            <div className="rhap_dialog-container left-0">
              <div className="rhap_dialog-header">PLAYBACK SPEED</div>
              <div className="rhap_dialog-content">
                {PLAYBACK_SPEED.map((v, i) => (
                  <button onClick={() => this.changePlaybackSpeed(v)} key={'dialog_item_' + i.toString()}>
                    <span>{v}x</span>
                    {this.state.playbackRate === v && (
                      <span>
                        <Icon icon={'material-symbols:check'} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </OutsideClick>
      </div>
    )
  }
}

const PlaybackSpeedForwardRef = (
  props: SleepTimerForwardRefProps,
  ref: React.Ref<HTMLDivElement>
): React.ReactElement => <PlaybackSpeed {...props} playbackSpeed={ref as React.RefObject<HTMLDivElement>} />

export default forwardRef(PlaybackSpeedForwardRef)
export { PlaybackSpeed, PlaybackSpeedForwardRef }
