import React, { Component } from 'react';
interface SleepTimerForwardRefProps {
    audio: HTMLAudioElement;
}
interface PlaybackSpeedProps extends SleepTimerForwardRefProps {
    playbackSpeed: React.RefObject<HTMLDivElement>;
}
interface PlaybackSpeedState {
    isDialogOpen: boolean;
    playbackRate: number;
}
declare class PlaybackSpeed extends Component<PlaybackSpeedProps, PlaybackSpeedState> {
    audio?: HTMLAudioElement;
    state: PlaybackSpeedState;
    changePlaybackSpeed: (v: number) => void;
    render(): React.ReactNode;
}
declare const PlaybackSpeedForwardRef: (props: SleepTimerForwardRefProps, ref: React.Ref<HTMLDivElement>) => React.ReactElement;
declare const _default: React.ForwardRefExoticComponent<SleepTimerForwardRefProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
export { PlaybackSpeed, PlaybackSpeedForwardRef };
