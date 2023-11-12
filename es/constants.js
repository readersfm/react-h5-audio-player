export let RHAP_UI = function (RHAP_UI) {
  RHAP_UI["CURRENT_TIME"] = "CURRENT_TIME";
  RHAP_UI["CURRENT_LEFT_TIME"] = "CURRENT_LEFT_TIME";
  RHAP_UI["PROGRESS_BAR"] = "PROGRESS_BAR";
  RHAP_UI["DURATION"] = "DURATION";
  RHAP_UI["ADDITIONAL_CONTROLS"] = "ADDITIONAL_CONTROLS";
  RHAP_UI["MAIN_CONTROLS"] = "MAIN_CONTROLS";
  RHAP_UI["VOLUME_CONTROLS"] = "VOLUME_CONTROLS";
  RHAP_UI["LOOP"] = "LOOP";
  RHAP_UI["VOLUME"] = "VOLUME";
  RHAP_UI["SPEED"] = "SPEED";
  RHAP_UI["SLEEP"] = "SLEEP";
  return RHAP_UI;
}({});
export const PLAYBACK_SPEED = [0.8, 1, 1.2, 1.5, 1.8, 2, 3];
export const SLEEP_TIMER = [{
  label: '2h',
  value: 60 * 2 * 60 * 1000
}, {
  label: '1h',
  value: 60 * 60 * 1000
}, {
  label: '30m',
  value: 30 * 60 * 1000
}, {
  label: '15m',
  value: 15 * 60 * 1000
}, {
  label: '5m',
  value: 5 * 60 * 1000
}];