import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';

import React, {useCallback, useEffect, useState} from 'react';
import AppButton from '../../components/AppButton';
import Constants from '../../constants/constants';
import Notifyvisitors, {
  NotifyvisitorsNativeDisplay,
  PushPromptInfo,
} from 'react-native-notifyvisitors';
import {Toast} from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import {
  requestTrackingPermission,
  getTrackingStatus,
  getAdvertisingId,
} from 'react-native-tracking-transparency';

const Home = () => {
  const navigation = useNavigation<any>();
  const [nvCenterBadge, setNVCenterBadge] = useState(0);
  const [isActivePushSubscriber, setISActivePushSubscriber] = useState(true);
  const [unsubscribePushBtnTitle, setUnsubscribePushBtnTitle] = useState(
    'Unsubscribe for All Notifyvisitors Push',
  );

  async function requestIDFA() {
    const status = await requestTrackingPermission();

    if (status === 'authorized' || status === 'unavailable') {
      const idfa = await getAdvertisingId();
      console.log("User's IDFA:", idfa);
      _showToast('IDFA Retrieved', `Your IDFA is: ${idfa}`, 3.0, 'bottom');
      // You can now use the IDFA as needed
      // For example, you might want to store it or send it to your server
      return idfa;
    } else {
      console.log('Tracking permission denied');
      return null;
    }
  }

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      console.log('focus effect');
      const showPopup = async () => {
        console.log('showInAppMessage inside focus effect with async');
        // Notifyvisitors.showInAppMessage(
        //   null,
        //   {screenName: 'Login'},
        //   null,
        //   function (callback) {},
        // );
        // Notifyvisitors.showInAppMessage(
        //   Constants.bannerSurveyUserToken,
        //   Constants.bannerSurveyCustomRule,
        //   null,
        //   (callback: any) => {
        //     // console.log(`show inAppMessage method callback = ${JSON.stringify(callback)}`,);
        //     console.log(
        //       `show method inline callback : \n${callback.toString()}`,
        //     );
        //   },
        // );
      };

      showPopup();

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('ProfileScreen focus effect cleanup');
      };
    }, []),
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('ProfileScreen focused');
      const showPopup = async () => {
        console.log('showInAppMessage inside focus effect with async');
        Notifyvisitors.showInAppMessage(
          Constants.bannerSurveyUserToken,
          Constants.bannerSurveyCustomRule,
          null,
          (callback: any) => {
            // console.log(`show inAppMessage method callback = ${JSON.stringify(callback)}`,);
            console.log(
              `show method inline callback : \n${callback.toString()}`,
            );
          },
        );
      };

      showPopup();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('ProfileScreen blurred');
    });
  }, [navigation]);

  useEffect(() => {
    console.log('pushPermissionPrompt requested from react-native app');
    let design = new PushPromptInfo();
    design.backgroundColor = '#19bdce';
    Notifyvisitors.pushPermissionPrompt(design, (response: any) => {
      console.log(`pushPermissionPrompt response = ${response}`);
      _showToast(
        '!! Android Push Permission Prompt !!',
        response.toString(),
        3.0,
        'bottom',
      );
    });
    Notifyvisitors.getLinkInfo((callback: any) => {
      Alert.alert('getLinkInfo callback', callback.toString());
      let response = JSON.parse(callback);
      console.log(`test 7 react native end get link info = ${callback}`);
      _showToast(
        '!! Notifyvisitors GetLinkInfo() data callback !!',
        callback.toString(),
        5.0,
        'bottom',
      );
      let params = response.parameters;

      let ctaVal = response.callToAction;
      let vcToLoad = response.ViewControllerToLoad;
      let typeVal = response.type;
      let typeOfCtaVal = typeof ctaVal;
      console.log(
        'cta = ' +
          ctaVal +
          ' typeOfCtaVal = ' +
          typeOfCtaVal +
          ' vcToLoad = ' +
          vcToLoad +
          ' type = ' +
          typeVal +
          ' parameters = ' +
          params,
      );
      console.log('json str parameters = ' + JSON.stringify(params));

      // var parameters: any = JSON.stringify(callback.parameters);
      let pid_Int_val = params.pID;
      var testBool = params.test_bool_key_1;
      console.log('test_Int_key = ' + pid_Int_val + ' testBool = ' + testBool);
      console.log('type of int key val = ' + typeof pid_Int_val);
    });
    setInitialPrefs().then(() => {
      updateUnSubscribePushBtnTitle();
    });

    Notifyvisitors.knownUserIdentified((callback: any) => {
      console.log(`knownUserIdentified() data callback = ${callback}`);
      _showToast(
        '!! Notifyvisitors knownUserIdentified() data callback !!',
        callback.toString(),
        3.0,
        'bottom',
      );
    });

    Notifyvisitors.getEventSurveyInfo((callback: any) => {
      console.log(`getEventSurveyInfo() data callback = ${callback}`);
      _showToast(
        '!! Notifyvisitors getEventSurveyInfo() data callback !!',
        callback.toString(),
        5.0,
        'bottom',
      );
    });

    Notifyvisitors.notificationClickCallback(function (data: any) {
      console.log('new notificationClickCallback =====> ', data);
      _showToast(
        '!! new notificationClickCallback data callback !!',
        data.toString(),
        10.0,
        'center',
      );
    });
    _trackNVEvent(Constants.trackonHomePageLoadEventName, true, '10', '1');
    requestIDFA();
  }, []);

  const setInitialPrefs = async () => {
    try {
      const statusValue = await AsyncStorage.getItem(
        'nvIsActivePushSubscriber',
      );
      if (statusValue === null) {
        await AsyncStorage.setItem('nvIsActivePushSubscriber', 'true');
      } else {
        if (statusValue === 'false') {
          await AsyncStorage.setItem('nvIsActivePushSubscriber', 'false');
        } else {
          await AsyncStorage.setItem('nvIsActivePushSubscriber', 'true');
        }
      }
    } catch (error) {
      console.log(`setInitialPrefs error = ${error}`);
    }

    const updatedStatusValue = await AsyncStorage.getItem(
      'nvIsActivePushSubscriber',
    );
    if (updatedStatusValue === 'false') {
      setISActivePushSubscriber(() => false);
    } else {
      setISActivePushSubscriber(() => true);
    }
  };

  async function updateUnSubscribePushBtnTitle() {
    try {
      const statusValue = await AsyncStorage.getItem(
        'nvIsActivePushSubscriber',
      );
      if (statusValue !== null && statusValue === 'true') {
        setUnsubscribePushBtnTitle(
          () => 'Unsubscribe for All Notifyvisitors Push',
        );
      } else {
        setUnsubscribePushBtnTitle(
          () => 'Subscribe Again for All Notifyvisitors Push',
        );
      }
    } catch (error) {
      console.log(`updateUnSubscribePushBtnTitle error = ${error}`);
    }
  }

  async function onPresAppButtonHandler(_actionName: string) {
    console.log(`handle on Press Button Action With btnName = ${_actionName}`);
    switch (_actionName) {
      case Constants.getSessionData: {
        Notifyvisitors.getSessionData(function (callback: JSON) {
          console.log('session response : ' + callback);
          _showToast(
            '!! Get Session Data !!',
            callback.toString(),
            4.0,
            'bottom',
          );
        });
        break;
      }
      case Constants.notificationCenterStandard: {
        Notifyvisitors.showNotifications(null, 0);
        setNVCenterBadge(() => 0);
        break;
      }
      case Constants.notificationCenterAdvance: {
        showAdvanceNotificationCenter();
        break;
      }
      case Constants.notificationCenterAdvanceWithCallback: {
        console.log('notificationCenterAdvanceWithCallback() called');
        Notifyvisitors.openNotificationCenter(
          Constants.notificationCenterTabsInfo,
          0,
          (callback: any) => {
            setNVCenterBadge(() => 0);
            console.log(`Open Notification Center with Callback = ${callback}`);
            _showToast(
              '!! Open Notification Center with Callback !!',
              callback.toString(),
              10.0,
              'bottom',
            );
          },
        );
        // setState(() {
        //   nvCenterBadgeCounter = 0;
        // });
        break;
      }
      case Constants.notificationCenterUnreadCount: {
        Notifyvisitors.getNotificationCenterCount(
          Constants.notificationCenterTabsInfo,
          function (callback: any) {
            console.log(
              `unread notification count = ${JSON.stringify(callback)}`,
            );
            _showToast(
              '!! Notification Center Unread Count !!',
              callback.toString(),
              3.0,
              'bottom',
            );
          },
        );
        break;
      }
      case Constants.notificationCenterDataCallback: {
        Notifyvisitors.getNotificationCenterData((callback: any) => {
          console.log(`notification center data in callback = ${callback}`);
          _showToast(
            '!! Notification Center Data callback !!',
            callback.toString(),
            5.0,
            'center',
          );
        });
        break;
      }
      case Constants.getNotificationCenterDetails: {
        // Notifyvisitors.getNotificationCenterDetails(
        //   Constants.notificationCenterTabsInfo,
        //   0,
        //   (callback: any) => {
        //     console.log(`notification center details = ${callback}`);
        //     _showToast(
        //       '!! Notification Center Details !!',
        //       callback.toString(),
        //       5.0,
        //       'bottom',
        //     );
        //   },
        // );
        break;
      }
      case Constants.showInAppBannerSurvey: {
        Notifyvisitors.show(
          Constants.bannerSurveyUserToken,
          Constants.bannerSurveyCustomRule,
          null,
          (callback: any) => {
            // console.log(`show method callback = ${JSON.stringify(callback)}`);
            console.log(
              `show method inline callback : \n${callback.toString()}`,
            );
            _showToast(
              '!! InApp Banner/Survey Events Response !!',
              callback.toString(),
              3.0,
              'bottom',
            );
          },
        );
        break;
      }
      case Constants.showInAppBannerSurveyWithCallback: {
        console.log('showInAppMessage() called');
        Notifyvisitors.showInAppMessage(
          Constants.bannerSurveyUserToken,
          Constants.bannerSurveyCustomRule,
          null,
          (callback: any) => {
            // console.log(`show inAppMessage method callback = ${JSON.stringify(callback)}`,);
            console.log(
              `show method inline callback : \n${callback.toString()}`,
            );
            _showToast(
              '!! InApp Banner/Survey Events Response !!',
              callback.toString(),
              3.0,
              'bottom',
            );
          },
        );
        break;
      }
      case Constants.showNativeDisplayViewButton: {
        console.log('showNativeDisplayViewButton() called');
        break;
      }
      case Constants.trackFirstEvent: {
        _trackNVEvent(Constants.trackFirstEventName, true, '100', '1');
        // Notifyvisitors.event(
        //   Constants.trackFirstEventName,
        //   Constants.eventAttributes,
        //   '100',
        //   '1',
        //   (result: any) => {
        //     // console.log(result);
        //     console.log(` event callback response = ${result}`);
        //     _showToast(
        //       '!! Track Event Response !!',
        //       result.toString(),
        //       3.0,
        //       'bottom',
        //     );
        //   },
        // );
        break;
      }
      case Constants.trackSecondEvent: {
        _trackNVEvent(Constants.trackSecondEventName, true, '10', '1');
        break;
      }
      case Constants.trackThirdEvent: {
        _trackNVEvent(Constants.trackThirdEventName, true, '10', '1');
        break;
      }
      case Constants.trackFourthEvent: {
        _trackNVEvent(Constants.trackFourthEventName, true, '10', '1');
        break;
      }
      case Constants.trackFifthEvent: {
        _trackNVEvent(Constants.trackFifthEventName, true, '10', '1');
        break;
      }
      case Constants.trackUser: {
        Notifyvisitors.userIdentifier(
          Constants.trackUserID,
          Constants.trackUserParams,
        );
        break;
      }
      case Constants.trackUserWithCallback: {
        console.log('trackUserWithCallback() called !!');
        Notifyvisitors.setUserIdentifier(
          Constants.trackUserParams,
          (callback: any) => {
            // console.log(`setUserIdentifier method callback = ${JSON.stringify(callback)}`);
            console.log(
              `set user Identifier Response = ${callback.toString()}`,
            );
            _showToast(
              '!! set user Identifier Response !!',
              callback.toString(),
              3.0,
              'bottom',
            );
          },
        );

        // var dateAndTime = moment().format('DD_MM_YYYY-HH:mm:ss');
        // let newUserID: string = `new_user_react_native_${dateAndTime}`;
        // var newUserParams = {
        //   name: 'Mohammad Ashraf Ali',
        //   email: `ashraf+${dateAndTime}@notifyvisitors.com`,
        //   age: '32',
        //   city: 'New Delhi',
        //   department: 'development',
        //   mobile: '9026878408',
        //   isMarried: true,
        //   isEmailVerified: true,
        // };
        break;
      }
      case Constants.trackScreen: {
        console.log(
          `trackScreen() called with screen name = ${Constants.trackHomeScreenName}`,
        );
        Notifyvisitors.trackScreen(Constants.trackHomeScreenName);
        break;
      }
      case Constants.getNVUID: {
        Notifyvisitors.getNvUID((callback: any) => {
          console.log(`getNvUID = ${callback}`);
          _showToast('!! Get NVUID !!', callback.toString(), 5.0, 'bottom');
        });
        break;
      }
      case Constants.appStoreReview: {
        Notifyvisitors.requestInAppReview((callback: any) => {
          console.log(`requestInAppReview = ${JSON.stringify(callback)}`);
          _showToast(
            '!! App Store / PlayStore Review Result !!',
            callback.toString(),
            3.0,
            'bottom',
          );
          // Toast.show(`requestInAppReview = ${callback}`, {
          //   placement: 'bottom',
          //   type: 'info',
          //   duration: 3000,
          // });
        });
        break;
      }
      case Constants.setPushPreference: {
        await AsyncStorage.setItem('nvIsActivePushSubscriber', 'true');
        setISActivePushSubscriber(() => true);
        Notifyvisitors.subscribePushCategory(
          Constants.pushCatInfo,
          !setISActivePushSubscriber,
        );
        updateUnSubscribePushBtnTitle();
        break;
      }

      case Constants.unsubscribeAllPush: {
        try {
          const statusValue = await AsyncStorage.getItem(
            'nvIsActivePushSubscriber',
          );
          if (statusValue !== null) {
            if (statusValue === 'true') {
              await AsyncStorage.setItem('nvIsActivePushSubscriber', 'false');
              setISActivePushSubscriber(() => false);
            } else {
              await AsyncStorage.setItem('nvIsActivePushSubscriber', 'true');
              setISActivePushSubscriber(() => true);
            }
          } else {
            await AsyncStorage.setItem('nvIsActivePushSubscriber', 'true');
            setISActivePushSubscriber(() => true);
          }
        } catch (error) {
          console.log(`error = ${error}`);
        }
        Notifyvisitors.subscribePushCategory(null, !isActivePushSubscriber);
        updateUnSubscribePushBtnTitle();
        break;
      }
      case Constants.getPushSubscriptionID: {
        Notifyvisitors.getRegistrationToken((callback: any) => {
          // console.log(`push token = ${JSON.stringify(callback)}`);
          console.log(`Notifyvisitors Push SubscriptionID = ${callback}`);
          _showToast(
            '!! Notifyvisitors Push SubscriptionID !!',
            callback.toString(),
            3.0,
            'bottom',
          );
        });
        break;
      }
      case Constants.gotoAboutPage: {
        Notifyvisitors.stopNotifications();
        navigation.navigate(navigationStrings.ABOUT);
        break;
      }
      default: {
        break;
      }
    }
  }

  function showAdvanceNotificationCenter() {
    Notifyvisitors.showNotifications(Constants.notificationCenterTabsInfo, 0);
    setNVCenterBadge(() => 0);
  }

  function _trackNVEvent(
    eventName: string,
    shouldAddDefaultAttributes: boolean,
    lifetimeValue: string = '10',
    scopeValue: string = '2',
  ) {
    if (eventName.length == 0 || eventName == null) {
      console.log('error: event name can not be empty');
      Alert.alert('Event name can not be empoty. Please try again.');
    } else {
      var finalAttributes = {};
      if (shouldAddDefaultAttributes === true) {
        finalAttributes = Constants.eventAttributes;
      }

      if (finalAttributes != null) {
        Notifyvisitors.event(
          eventName,
          finalAttributes,
          lifetimeValue,
          scopeValue,
          (result: any) => {
            // console.log(result);
            console.log(` event callback response = ${result}`);
            _showToast(
              '!! Track Event Response !!',
              result.toString(),
              3.0,
              'bottom',
            );
          },
        );
      } else {
        Notifyvisitors.event(
          eventName,
          null,
          lifetimeValue,
          scopeValue,
          (result: any) => {
            // console.log(result);
            console.log(` event callback response = ${result}`);
            _showToast(
              '!! Track Event Response !!',
              result.toString(),
              3.0,
              'bottom',
            );
          },
        );
      }
    }
  }

  function _showToast(
    title: string = 'Invalid toast title',
    message: string = 'Invalid toast message',
    durationInSecond: number = 3.0,
    placement?: 'top' | 'bottom' | 'center',
  ) {
    Toast.show(message, {
      type: 'nvCallbackToast',
      placement: placement,
      animationDuration: 100,
      duration: durationInSecond * 1000,
      data: {
        title: `${title}`,
      },
    });
  }

  return (
    <ScrollView
      contentContainerStyle={styles.ScrollViewContainer}
      alwaysBounceVertical={false}>
      {Constants.notifyvisitorsAppUIData.map(item => {
        return (
          <>
            {item.viewType == Constants.viewTypeText &&
            item.actionType == Constants.headingText ? (
              <Text style={styles.headingText} key={item.actionType}>
                {item.contentTitle}
                {`\n`}
              </Text>
            ) : item.viewType == Constants.viewTypeContainer ? (
              <View
                style={{
                  width: '100%',
                  height: 180,
                  backgroundColor: 'lightgrey',
                }}
                key={item.actionType}>
                <NotifyvisitorsNativeDisplay
                  propertyName="offers"
                  style={styles.nativeView}
                  onNudgeUiFinalized={(data: any) => {
                    try {
                      const payload = data.response; // 👈 already a JS object
                      console.log('onNudgeUiFinalized payload:', payload);
                      const parsedData = JSON.parse(payload.data); // ✅ parse the JSON string
                      _showToast(
                        '!! Nudge UI finalized !!',
                        payload.data.toString(),
                        5.0,
                        'bottom',
                      );
                      const height = parseInt(
                        parsedData?.size?.height ?? '0',
                        10,
                      );
                      const width = parseInt(
                        parsedData?.size?.width ?? '0',
                        10,
                      );

                      console.log(
                        'onNudgeUiFinalized ====>>>> Height:',
                        height,
                        'Width:',
                        width,
                      );
                    } catch (e) {
                      console.log('onNudgeUiFinalized Parse error:', e);
                    }
                  }}
                />
                {/* <NotifyvisitorsNativeDisplay
                  style={{
                    flex: 1,
                    width: '100%',
                    height: 150,
                    backgroundColor: 'lightgrey',
                  }}
                  propertyName="offers"
                  onNudgeUiFinalized={(data: any) => {
                    console.log('from js onNudgeUiFinalized with data:', data);
                    // Handle the finalized data as needed
                    _showToast(
                      '!! Nudge UI finalized !!',
                      data,
                      10.0,
                      'bottom',
                    );
                  }}
                /> */}
              </View>
            ) : //  <NotifyvisitorsNativeDisplay
            //   style={{
            //     flex: 1,
            //     width: '100%',
            //     height: 200,
            //     backgroundColor: 'lightgrey',
            //   }}
            //   propertyName="home"
            // />
            // <View
            //   style={{
            //     width: '100%',
            //     height: 200,
            //     backgroundColor: 'lightgrey',
            //   }}
            //   key={item.actionType}>
            //   <NotifyvisitorsNativeDisplay
            //     style={{
            //       flex: 1,
            //       width: '100%',
            //       height: 200,
            //       backgroundColor: 'lightgrey',
            //     }}
            //     propertyName="home"
            //   />
            // </View>
            // <View
            //   style={{
            //     flex: 1,
            //     height: 200,
            //     width: '100%',
            //     backgroundColor: '#ff0000',
            //   }}
            //   key={item.actionType}>

            // </View>
            item.viewType == Constants.viewTypeText &&
              item.actionType ==
                Constants.viewTypeNotificationCenterAdvanceInputs ? (
              <>
                <Text style={styles.boldText} key={item.actionType}>
                  Notification Center tabs Label Values{`\n`}
                </Text>
                {/* Tab1 details */}
                <Text style={styles.normalText}>
                  Tab1 : {`{Displaname:`}
                  <Text style={styles.boldText}>
                    {Constants.tabDisplayNameOne}
                  </Text>
                  {', Label: '}
                  <Text style={styles.boldText}>{Constants.tabLabelOne}</Text>
                </Text>
                {/* Tab2 details */}
                <Text style={styles.normalText}>
                  Tab1 : {`{Displaname:`}
                  <Text style={styles.boldText}>
                    {Constants.tabDisplayNameTwo}
                  </Text>
                  {', Label: '}
                  <Text style={styles.boldText}>{Constants.tabLabelTwo}</Text>
                </Text>
                {/* Tab3 details */}
                <Text style={styles.normalText}>
                  Tab1 : {`{Displaname:`}
                  <Text style={styles.boldText}>
                    {Constants.tabDisplayNameThree}
                  </Text>
                  {', Label: '}
                  <Text style={styles.boldText}>{Constants.tabLabelthree}</Text>
                  {`}`}
                </Text>
              </>
            ) : item.viewType == Constants.viewTypeText &&
              item.actionType == Constants.inAppBannerSurveyInputParamsInfo ? (
              <>
                <Text style={styles.boldText} key={item.actionType}>
                  inAppBanner / Survey Params Data{`\n`}
                </Text>
                {/* userToken details */}
                <Text style={styles.normalText}>
                  User Token ={`\n`}
                  <Text style={styles.boldText}>
                    {JSON.stringify(Constants.bannerSurveyUserToken, null, 0)}
                  </Text>
                </Text>
                {/* CustomRule details */}
                <Text style={styles.normalText}>
                  {`\n`}Custom Rule ={`\n`}
                  <Text style={styles.boldText}>
                    {JSON.stringify(Constants.bannerSurveyCustomRule, null, 0)}
                  </Text>
                </Text>
              </>
            ) : item.viewType == Constants.viewTypeText &&
              item.actionType == Constants.trackEventInputParamsInfo ? (
              <>
                <Text style={styles.boldText} key={item.actionType}>
                  Event tracking Params Data
                </Text>
                {/* eventName */}
                <Text style={styles.normalText}>
                  Event Name ={` `}
                  <Text style={styles.boldText}>
                    {Constants.trackEventName}
                  </Text>
                </Text>
                {/* event Attributes */}
                <Text style={styles.normalText}>
                  {`\n`}Event Attributes ={`\n`}
                  <Text style={styles.boldText}>
                    {JSON.stringify(Constants.eventAttributes, null, 0)}
                  </Text>
                </Text>
              </>
            ) : item.viewType == Constants.viewTypeText &&
              item.actionType == Constants.trackUserInputParamsInfo ? (
              <>
                <Text style={styles.boldText} key={item.actionType}>
                  User tracking Params Data
                </Text>
                {/* userID */}
                <Text style={styles.normalText}>
                  userID ={` `}
                  <Text style={styles.boldText}>{Constants.trackUserID}</Text>
                </Text>
                {/* User Params */}
                <Text style={styles.normalText}>
                  {`\n`}User Params ={`\n`}
                  <Text style={styles.boldText}>
                    {JSON.stringify(Constants.trackUserParams, null, 0)}
                  </Text>
                </Text>
              </>
            ) : item.viewType == Constants.viewTypeText &&
              item.actionType == Constants.trackScreenInputParamsInfo ? (
              <>
                <Text style={styles.normalText} key={item.actionType}>
                  Track custome Screen name ={` `}
                  <Text style={styles.boldText}>
                    {Constants.trackHomeScreenName}
                  </Text>
                </Text>
              </>
            ) : item.viewType == Constants.viewTypeText &&
              item.actionType == Constants.setPushPreferenceInputsInfo ? (
              <>
                <Text style={styles.normalText} key={item.actionType}>
                  Subscribe to Push Categories =
                </Text>
                {/* pushCatInfo */}
                <Text style={styles.boldText}>
                  {JSON.stringify(Constants.pushCatInfo, null, 0)}
                </Text>
              </>
            ) : item.viewType == Constants.viewTypeText &&
              item.actionType == Constants.unsubscribeAllPushStatusInfo ? (
              <>
                <Text style={styles.normalText} key={item.actionType}>
                  Is a Notifyvisitors Push Active Subscriber ={` `}
                  <Text style={styles.boldText}>
                    {isActivePushSubscriber.toString()}
                  </Text>
                </Text>
              </>
            ) : item.viewType == Constants.viewTypeButton ? (
              <AppButton
                key={item.actionType}
                title={item.contentTitle!}
                id={item.actionType}
                onPress={() => onPresAppButtonHandler(item.actionType)}
              />
            ) : null}
          </>
        );
      })}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  ScrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F0FEF9',
    alignItems: 'center',
    padding: 24,
  },
  headingText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#045C49',
  },
  boldText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  normalText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'normal',
  },
  nativeWrapper: {
    width: '100%',
  },
  nativeView: {
    flex: 1,
    width: '100%',
  },
});
