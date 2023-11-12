import React, { Component } from 'react';
interface SleepTimerForwardRefProps {
    audio: HTMLAudioElement;
}
interface SleepTimerProps extends SleepTimerForwardRefProps {
    sleepTimer: React.RefObject<HTMLDivElement>;
}
interface SleepTimerState {
    isDialogOpen: boolean;
    sleepTimer: SleepTimerItem | null;
}
interface SleepTimerItem {
    label: string;
    value: number;
}
declare class SleepTimer extends Component<SleepTimerProps, SleepTimerState> {
    audio?: HTMLAudioElement;
    timeout?: number;
    state: SleepTimerState;
    componentWillUnmount(): void;
    startTimer: (v: SleepTimerItem) => void;
    stopTimer: () => void;
    render(): React.ReactNode;
}
declare const SleepTimerForwardRef: (props: SleepTimerForwardRefProps, ref: React.Ref<HTMLDivElement>) => React.ReactElement;
interface OutsideClickProps {
    onOutsideClick: (ref: HTMLDivElement) => void;
    children?: React.ReactNode;
}
declare class OutsideClick extends Component<OutsideClickProps> {
    private ref;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: MouseEvent) => void;
    render(): React.JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<SleepTimerForwardRefProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
export { SleepTimer, SleepTimerForwardRef, OutsideClick };
