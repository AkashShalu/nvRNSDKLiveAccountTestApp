import {version as nvPluginVersion} from 'react-native-notifyvisitors/package.json';
const ConstantsOLD = {
  HEADING_TEXT: 'headingText',
  SHOW_INAPPBANNERSURVEY: 'showInAppBannerSurvey',
  SHOW_INAPPBANNERSURVEY_WITH_CALLBACK: 'showInAppBannerSurveyWithCallback',
  INAPPBANNERSURVEY_INPUT_PARAMS_INFO: 'inAppBannerSurveyInputParamsInfo',
  SHOW_NATIVE_DISPLAY_VIEW_BUTTON: 'showNativeDisPlayButton',
  NATIVE_DISPLAY_CONTAINER_VIEW: 'nativeDisplayContainerView',
  TRACK_EVENT_INPUT_PARAMS_INFO: 'trackEventInputParamsInfo',
  TRACK_EVENT: 'trackEvent',
  TRACK_USER_INPUT_PARAMS_INFO: 'trackUserInputParamsInfo',
  TRACK_USER: 'trackUser',
  TRACK_USER_WITH_CALLBACK: 'trackUserWithCallback',
  NOTIFICATION_CENTER_STANDARD: 'standardNotificationCenter',
  NOTIFICATION_CENTER_ADVANCE: 'advanceNotificationCenter',
  NOTIFICATION_CENTER_ADVANCE_WITH_CALLBACK:
    'advanceNotificationCenterWithCallback',
  BELL_ICON_NOTIFICATION_CENTER: 'bellIconNotificationCenter',
  NOTIFICATION_CENTER_UNREAD_COUNT: 'unreadCountOfNotificationCenter',
  NOTIFICATION_CENTER_DATA_CALLBACK: 'callbackDataOfNotificationCenter',
  GET_NV_UID: 'getNVUID',
  APP_STORE_REVIEW: 'giveAppStoreRatingReview',
  SET_PUSH_PREFERENCE_INPUT_INFO: 'setPushPreferenceInputsInfo',
  SET_PUSH_PREFERENCE: 'setPushPreferences',
  UNSUBSCRIBE_ALL_PUSH_STATUS_INFO: 'unsubscribeAllPushStatusInfo',
  UNSUBSCRIBE_ALL_PUSH: 'unsubscribeAllPush',
  GET_PUSH_SUBSCRIPTION_ID: 'getPushSubscriptionID',
  CLEAR_BADGE_NUMBER_FROM_APP_ICON: 'clearAppIconPushBadge',
  GOTO_ABOUT_PAGE: 'gotoAboutPage',
  GET_SESSION_DATA: 'getSessionData',
  VIEW_TYPE_TEXT: 'viewTypeText',
  VIEW_TYPE_BUTTON: 'viewTypeButton',
  VIEW_TYPE_INPUT: 'viewTypeInput',
  VIEW_TYPE_TOGGLE_BUTTON: 'viewTypeToggleButton',
  VIEW_TYPE_NOTIFICATION_CENTER_ADVANCE_INPUTS:
    'viewTypeAdvanceNotificationCenterInputs',
  VIEW_TYPE_CONTAINER: 'viewTypeContainer',
};

let finalnvVerssion = nvPluginVersion.toString();
console.log('nvPluginVersion = ', finalnvVerssion);
export const NotifyvisitorsAppUIData = [
  {
    contentTitle:
      'nv-react-native SDK ~ ' +
      finalnvVerssion +
      ' (Live A/c Brand ID : 8115)',
    actionType: Constants.HEADING_TEXT,
    viewType: Constants.VIEW_TYPE_TEXT,
  },
  {
    contentTitle: 'Get Session Data',
    actionType: Constants.GET_SESSION_DATA,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Parent Container View for Native Display',
    actionType: Constants.NATIVE_DISPLAY_CONTAINER_VIEW,
    viewType: Constants.VIEW_TYPE_CONTAINER,
  },
  {
    contentTitle: 'Notification Center (Standard)',
    actionType: Constants.NOTIFICATION_CENTER_STANDARD,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Advance Notification Center Inputs View',
    actionType: Constants.VIEW_TYPE_NOTIFICATION_CENTER_ADVANCE_INPUTS,
    viewType: Constants.VIEW_TYPE_NOTIFICATION_CENTER_ADVANCE_INPUTS,
  },
  {
    contentTitle: 'Notification Center (Advance)',
    actionType: Constants.NOTIFICATION_CENTER_ADVANCE,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Notification Center (Advance) With Callback',
    actionType: Constants.NOTIFICATION_CENTER_ADVANCE_WITH_CALLBACK,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Get Unread Count of Notification Center',
    actionType: Constants.NOTIFICATION_CENTER_UNREAD_COUNT,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Get Notification Center Data in Callback',
    actionType: Constants.NOTIFICATION_CENTER_DATA_CALLBACK,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'InApp Banner and Survey User Token & Custom Rule Info',
    actionType: Constants.INAPPBANNERSURVEY_INPUT_PARAMS_INFO,
    viewType: Constants.VIEW_TYPE_TEXT,
  },
  {
    contentTitle: 'Show InApp Banner and Survey',
    actionType: Constants.SHOW_INAPPBANNERSURVEY,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Show InApp Banner and Survey with Callback',
    actionType: Constants.SHOW_INAPPBANNERSURVEY_WITH_CALLBACK,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Load Native Display Button\n{propertyName: "home"}',
    actionType: Constants.SHOW_NATIVE_DISPLAY_VIEW_BUTTON,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Parent Container View for Native Display',
    actionType: Constants.NATIVE_DISPLAY_CONTAINER_VIEW,
    viewType: Constants.VIEW_TYPE_CONTAINER,
  },
  {
    contentTitle: 'Event name & attributes Info',
    actionType: Constants.TRACK_EVENT_INPUT_PARAMS_INFO,
    viewType: Constants.VIEW_TYPE_TEXT,
  },
  {
    contentTitle: 'Track Event',
    actionType: Constants.TRACK_EVENT,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'UserID & User Params Info',
    actionType: Constants.TRACK_USER_INPUT_PARAMS_INFO,
    viewType: Constants.VIEW_TYPE_TEXT,
  },
  {
    contentTitle: 'Track User',
    actionType: Constants.TRACK_USER,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Track User with Callback',
    actionType: Constants.TRACK_USER_WITH_CALLBACK,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'get NVUID',
    actionType: Constants.GET_NV_UID,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: "Request Appl's AppStore Review",
    actionType: Constants.APP_STORE_REVIEW,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Set Push Preference (Category) Info',
    actionType: Constants.SET_PUSH_PREFERENCE_INPUT_INFO,
    viewType: Constants.VIEW_TYPE_TEXT,
  },
  {
    contentTitle: 'Set Push Preferences',
    actionType: Constants.SET_PUSH_PREFERENCE,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Unsubscribe All Notifyvisitors Push Status Info',
    actionType: Constants.UNSUBSCRIBE_ALL_PUSH_STATUS_INFO,
    viewType: Constants.VIEW_TYPE_TEXT,
  },
  {
    contentTitle: 'Unsubscribe All Notifyvisitors Push',
    actionType: Constants.UNSUBSCRIBE_ALL_PUSH,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Get Notifyvisitors Push SubscriptionID',
    actionType: Constants.GET_PUSH_SUBSCRIPTION_ID,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
  {
    contentTitle: 'Goto About Us Page',
    actionType: Constants.GOTO_ABOUT_PAGE,
    viewType: Constants.VIEW_TYPE_BUTTON,
  },
];

// static String osName = Platform.isAndroid
//       ? 'android'
//       : Platform.isIOS
//           ? 'ios'
//           : '';

export default ConstantsOLD;
