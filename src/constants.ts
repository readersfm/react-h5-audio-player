export enum RHAP_UI {
  CURRENT_TIME = 'CURRENT_TIME',
  CURRENT_LEFT_TIME = 'CURRENT_LEFT_TIME',
  PROGRESS_BAR = 'PROGRESS_BAR',
  DURATION = 'DURATION',
  ADDITIONAL_CONTROLS = 'ADDITIONAL_CONTROLS',
  MAIN_CONTROLS = 'MAIN_CONTROLS',
  VOLUME_CONTROLS = 'VOLUME_CONTROLS',
  LOOP = 'LOOP',
  VOLUME = 'VOLUME',
  SPEED = 'SPEED',
  SLEEP = 'SLEEP',
}

export type AUDIO_PRELOAD_ATTRIBUTE = 'auto' | 'metadata' | 'none'

export type MAIN_LAYOUT = 'stacked' | 'stacked-reverse' | 'horizontal' | 'horizontal-reverse'

export type TIME_FORMAT = 'auto' | 'mm:ss' | 'hh:mm:ss'

export const PLAYBACK_SPEED = [0.8, 1, 1.2, 1.5, 1.8, 2, 3]

export const SLEEP_TIMER = [
  { label: '2h', value: 60 * 2 },
  { label: '1h', value: 60 },
  { label: '30m', value: 30 },
  { label: '15m', value: 15 },
  { label: '5m', value: 5 },
]
