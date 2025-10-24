import {version as nvPluginVersion} from 'react-native-notifyvisitors/package.json';
import moment from 'moment';
import {Platform} from 'react-native'; // Assuming a React Native environment
// import { format } from 'date-fns'; // You may need to install date-fns
let finalnvVerssion = nvPluginVersion.toString();
console.log('nvPluginVersion = ', finalnvVerssion);

class Constants {
  static headingText: string = 'headingText';
  static showInAppBannerSurvey: string = 'showInAppBannerSurvey';
  static showInAppBannerSurveyWithCallback: string =
    'showInAppBannerSurveyWithCallback';
  static inAppBannerSurveyInputParamsInfo: string =
    'inAppBannerSurveyInputParamsInfo';
  static showNativeDisplayViewButton: string = 'showNativeDisplayViewButton';
  static nativeDisplayContainerView: string = 'nativeDisplayContainerView';
  static trackEventInputParamsInfo: string = 'trackEventInputParamsInfo';
  static trackFirstEvent: string = 'trackFirstEvent';
  static trackSecondEvent: string = 'trackSecondEvent';
  static trackThirdEvent: string = 'trackThirdEvent';
  static trackFourthEvent: string = 'trackFourthEvent';
  static trackFifthEvent: string = 'trackFifthEvent';
  static trackUserInputParamsInfo: string = 'trackUserInputParamsInfo';
  static trackUserWithCallback: string = 'trackUserWithCallback';
  static trackUser: string = 'trackUser';
  static trackScreenInputParamsInfo: string = 'trackScreenInputParamsInfo';
  static trackScreen: string = 'trackScreen';
  static notificationCenterStandard: string = 'standardNotificationCenter';
  static notificationCenterAdvance: string = 'advanceNotificationCenter';
  static notificationCenterAdvanceWithCallback: string =
    'advanceNotificationCenterWithCallback';
  static bellIconNotificationCenter: string = 'bellIconNotificationCenter';
  static notificationCenterUnreadCount: string =
    'unreadCountOfNotificationCenter';
  static notificationCenterDataCallback: string =
    'callbackDataOfNotificationCenter';
  static getNotificationCenterDetails: string = 'getNotificationCenterDetails';
  static getNVUID: string = 'getNVUID';
  static appStoreReview: string = 'giveAppStoreRatingReview';
  static setPushPreferenceInputsInfo: string = 'setPushPreferenceInputsInfo';
  static setPushPreference: string = 'setPushPreferences';
  static unsubscribeAllPushStatusInfo: string = 'unsubscribeAllPushStatusInfo';
  static unsubscribeAllPush: string = 'unsubscribeAllPush';
  static getPushSubscriptionID: string = 'getPushSubscriptionID';
  static clearBadgeNumberFromAppIcon: string = 'clearAppIconPushBadge';
  static gotoAboutPage: string = 'gotoAboutPage';
  static getSessionData = 'getSessionData';
  static viewTypeText: string = 'viewTypeText';
  static viewTypeButton: string = 'viewTypeButton';
  static viewTypeInput: string = 'viewTypeInput';
  static viewTypeToggleButton: string = 'viewTypeToggleButton';
  static viewTypeNotificationCenterAdvanceInputs: string =
    'viewTypeAdvanceNotificationCenterInputs';
  static viewTypeContainer = 'viewTypeContainer';

  static get osName(): string {
    let finalOSname =
      Platform.OS === 'android'
        ? 'android'
        : Platform.OS === 'ios'
        ? 'ios'
        : '';
    return finalOSname;
  }

  static trackonHomePageLoadEventName: string = `test_rn_onHomePageLoad_event_${this.osName}`;
  static trackOnAboutPageLoadEventName: string = `test_rn_onAboutPageLoad_event_${this.osName}`;
  static trackAboutScreenFirstEventName: string = `test_rn_aboutPageFirst_event_${this.osName}`;
  static trackFirstEventName: string = `test_rn_first_event_${this.osName}`;
  static trackSecondEventName: string = `test_rn_second_event_${this.osName}`;
  static trackThirdEventName: string = `test_rn_third_event_${this.osName}`;
  static trackFourthEventName: string = `test_rn_fourth_event_${this.osName}`;
  static trackFifthEventName: string = `test_rn_fifth_event_${this.osName}`;

  static notifyvisitorsAppUIData = [
    {
      contentTitle: `nv-react-native test SDK ~ ${finalnvVerssion} (Live A/c Brand ID : 8115)`,
      actionType: Constants.headingText,
      viewType: Constants.viewTypeText,
    },
    {
      contentTitle: 'Get Session Data',
      actionType: Constants.getSessionData,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Parent Container View for Native Display',
      actionType: Constants.nativeDisplayContainerView,
      viewType: Constants.viewTypeContainer,
    },
    {
      contentTitle: 'Notification Center (Standard)',
      actionType: Constants.notificationCenterStandard,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Advance Notification Center Inputs View',
      actionType: Constants.viewTypeNotificationCenterAdvanceInputs,
      viewType: Constants.viewTypeText,
    },
    {
      contentTitle: 'Notification Center (Advance)',
      actionType: Constants.notificationCenterAdvance,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Notification Center (Advance) With Callback',
      actionType: Constants.notificationCenterAdvanceWithCallback,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Get Unread Count of Notification Center',
      actionType: Constants.notificationCenterUnreadCount,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Get Notification Center Data in Callback',
      actionType: Constants.notificationCenterDataCallback,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Get Center Data in Callback Type 2',
      actionType: Constants.getNotificationCenterDetails,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'InApp Banner and Survey User Token & Custom Rule Info',
      actionType: Constants.inAppBannerSurveyInputParamsInfo,
      viewType: Constants.viewTypeText,
    },
    {
      contentTitle: 'Show InApp Banner and Survey',
      actionType: Constants.showInAppBannerSurvey,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Show InApp Banner and Survey with Callback',
      actionType: Constants.showInAppBannerSurveyWithCallback,
      viewType: Constants.viewTypeButton,
    },
    // {
    //   contentTitle: 'Native Display Btn {propertyName: "home"}',
    //   actionType: Constants.showNativeDisplayViewButton,
    //   viewType: Constants.viewTypeButton,
    // },
    {
      contentTitle: 'Parent Container View for Native Display',
      actionType: Constants.nativeDisplayContainerView,
      viewType: Constants.viewTypeContainer,
    },
    {
      contentTitle: 'Event name & attributes Info',
      actionType: Constants.trackEventInputParamsInfo,
      viewType: Constants.viewTypeText,
    },
    {
      contentTitle: `eventName = ${this.trackFirstEventName}`,
      actionType: Constants.trackFirstEvent,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: `eventName = ${this.trackSecondEventName}`,
      actionType: Constants.trackSecondEvent,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: `eventName = ${this.trackThirdEventName}`,
      actionType: Constants.trackThirdEvent,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: `eventName = ${this.trackFourthEventName}`,
      actionType: Constants.trackFourthEvent,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: `eventName = ${this.trackFifthEventName}`,
      actionType: Constants.trackFifthEvent,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'UserID & User Params Info',
      actionType: Constants.trackUserInputParamsInfo,
      viewType: Constants.viewTypeText,
    },
    {
      contentTitle: 'Track User',
      actionType: Constants.trackUser,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Track User with Callback',
      actionType: Constants.trackUserWithCallback,
      viewType: Constants.viewTypeButton,
    },

    {
      contentTitle: 'Track Screen Param Info',
      actionType: Constants.trackScreenInputParamsInfo,
      viewType: Constants.viewTypeText,
    },
    {
      contentTitle: 'Track Screen Name Event',
      actionType: Constants.trackScreen,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'get NVUID',
      actionType: Constants.getNVUID,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: "Request Appl's AppStore Review",
      actionType: Constants.appStoreReview,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Set Push Preference (Category) Info',
      actionType: Constants.setPushPreferenceInputsInfo,
      viewType: Constants.viewTypeText,
    },
    {
      contentTitle: 'Set Push Preferences',
      actionType: Constants.setPushPreference,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Unsubscribe All Notifyvisitors Push Status Info',
      actionType: Constants.unsubscribeAllPushStatusInfo,
      viewType: Constants.viewTypeText,
    },
    {
      contentTitle: 'Unsubscribe All Notifyvisitors Push',
      actionType: Constants.unsubscribeAllPush,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Get Notifyvisitors Push SubscriptionID',
      actionType: Constants.getPushSubscriptionID,
      viewType: Constants.viewTypeButton,
    },
    {
      contentTitle: 'Goto About Page',
      actionType: Constants.gotoAboutPage,
      viewType: Constants.viewTypeButton,
    },
  ];

  static get currentDateTime(): string {
    var currentFormattedTime = moment().format('DD_MM_YYYY_HH_mm_ss');
    return `_${currentFormattedTime}`;
  }

  static tmpUserEmail: string =
    Platform.OS === 'android'
      ? `divya.g_rn_android${this.currentDateTime}@notifyvisitors.com`
      : Platform.OS === 'ios'
      ? `divya.g_rn_ios${this.currentDateTime}@notifyvisitors.com`
      : 'divya.g@notifyvisitors.com';

  static tmpUserName: string =
    Platform.OS === 'android'
      ? 'Divya Gupta RN Android'
      : Platform.OS === 'ios'
      ? 'Divya Gupta RN iOS'
      : 'Divya Gupta';

  static tabDisplayNameOne: string = 'Tab 1 (tg1)';
  static tabLabelOne = 'tg1';
  static tabDisplayNameTwo = 'Tab 2 (tg2)';
  static tabLabelTwo = 'tg2';
  static tabDisplayNameThree = 'Others';
  static tabLabelthree = 'others';

  static notificationCenterTabsInfo = {
    label_one: this.tabLabelOne,
    name_one: this.tabDisplayNameOne,
    label_two: this.tabLabelTwo,
    name_two: this.tabDisplayNameTwo,
    label_three: this.tabLabelthree,
    name_three: this.tabDisplayNameThree,
  };

  static bannerSurveyUserToken = {
    name: this.tmpUserName,
    email: this.tmpUserEmail,
    city: 'New Delhi',
    pinCode: 110058,
    eID: 53,
  };

  static bannerSurveyCustomRule = {
    screenName: 'dashboard',
    productType: 'appearal',
    category: 'fashion',
    price: 499,
    balance: 350,
    coupon: 'testReactNativeCoupon',
  };

  static eventAttributes = {
    name: this.bannerSurveyUserToken.name,
    email: this.bannerSurveyUserToken.email,
    user_score: '348',
    plan_type: 2,
    mobileNo: '1234567890',
  };
  static trackUserID: string = `test_react_native_user_from_${this.osName}`;
  static trackUserParams = this.bannerSurveyUserToken;
  static pushCatInfo = ['sales', 'service', 'develop', 'marketting'];

  static trackHomeScreenName = 'nv_react_native_home_screen';
  static trackAboutScreenName = 'nv_react_native_about_screen';
}

export default Constants;
