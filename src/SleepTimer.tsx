import React, { Component, forwardRef } from 'react'

import { SLEEP_TIMER } from './constants'
import { Icon } from '@iconify/react'

interface SleepTimerForwardRefProps {
  audio: HTMLAudioElement
}

interface SleepTimerProps extends SleepTimerForwardRefProps {
  sleepTimer: React.RefObject<HTMLDivElement>
}

interface SleepTimerState {
  isDialogOpen: boolean
  sleepTimer: SleepTimerItem | null
}

interface SleepTimerItem {
  label: string
  value: number
}

class SleepTimer extends Component<SleepTimerProps, SleepTimerState> {
  audio?: HTMLAudioElement

  timeout?: number

  state: SleepTimerState = {
    isDialogOpen: false,
    sleepTimer: null,
  }

  componentWillUnmount(): void {
    this.stopTimer()
  }

  startTimer = (v: SleepTimerItem): void => {
    const { audio } = this.props
    this.timeout = setTimeout(() => {
      // stop the audio
      if (audio) {
        audio.pause()
      }
    }, v.value)
    this.setState({ sleepTimer: v, isDialogOpen: false })
  }

  stopTimer = (): void => {
    this.timeout && clearTimeout(this.timeout)
    this.setState({ sleepTimer: null, isDialogOpen: false })
  }

  render(): React.ReactNode {
    return (
      <div ref={this.props.sleepTimer} className="rhap_sleep-container">
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
            <Icon width={18} height={18} icon={'icon-park-outline:sleep-one'} />
          </button>
          {this.state.isDialogOpen && (
            <div className="rhap_dialog-container right-zero">
              <div className="rhap_dialog-header">Sleep Timer</div>
              <div className="rhap_dialog-content">
                {SLEEP_TIMER.map((v, i) => (
                  <button onClick={() => this.startTimer(v)} key={'dialog_item_' + i.toString()}>
                    <span>{v.label}</span>
                    {this.state.sleepTimer && this.state.sleepTimer.label === v.label && (
                      <span>
                        <Icon icon={'material-symbols:check'} />
                      </span>
                    )}
                  </button>
                ))}
                {this.state.sleepTimer && (
                  <button onClick={() => this.stopTimer()}>
                    <span>Stop Timer</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </OutsideClick>
      </div>
    )
  }
}

const SleepTimerForwardRef = (props: SleepTimerForwardRefProps, ref: React.Ref<HTMLDivElement>): React.ReactElement => (
  <SleepTimer {...props} sleepTimer={ref as React.RefObject<HTMLDivElement>} />
)

interface OutsideClickProps {
  onOutsideClick: (ref: HTMLDivElement) => void
  children?: React.ReactNode
}

class OutsideClick extends Component<OutsideClickProps> {
  private ref: React.RefObject<HTMLDivElement> = React.createRef()

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (event: MouseEvent): void => {
    const { onOutsideClick } = this.props
    if (this.ref.current && this.ref.current.contains && !this.ref.current.contains(event.target as Node)) {
      onOutsideClick && onOutsideClick(this.ref.current)
    }
  }

  render() {
    const { children, ...others } = this.props
    return (
      <div {...others} ref={this.ref}>
        {children}
      </div>
    )
  }
}

export default forwardRef(SleepTimerForwardRef)
export { SleepTimer, SleepTimerForwardRef, OutsideClick }
