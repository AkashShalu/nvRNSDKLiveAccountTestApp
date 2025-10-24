import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Notifyvisitors from 'react-native-notifyvisitors';
import AppButton from '../../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import Constants from '../../constants/constants';
import {Toast} from 'react-native-toast-notifications';

const About = () => {
  const navigation = useNavigation();

  useEffect(() => {
    Notifyvisitors.event(
      Constants.trackOnAboutPageLoadEventName,
      Constants.eventAttributes,
      '10',
      '1',
      (result: any) => {
        // console.log(result);
        console.log(` event callback response = ${result}`);
        Toast.show(result.toString(), {
          type: 'nvCallbackToast',
          placement: 'bottom',
          animationDuration: 100,
          duration: 3.0 * 1000,
          data: {
            title: '!! Track Event Response !!',
          },
        });
      },
    );
  }, []);

  async function onPresAppButtonHandler(_actionName: string) {
    console.log(`handle on Press Button Action With btnName = ${_actionName}`);
    switch (_actionName) {
      case Constants.trackScreen: {
        console.log(
          `trackScreen() called with screen name = ${Constants.trackAboutScreenName}`,
        );
        Notifyvisitors.trackScreen(Constants.trackAboutScreenName);
        break;
      }
      case 'trackAboutScreenFirstEventName': {
        Notifyvisitors.event(
          Constants.trackAboutScreenFirstEventName,
          Constants.eventAttributes,
          '10',
          '1',
          (result: any) => {
            // console.log(result);
            console.log(` event callback response = ${result}`);
            Toast.show(result.toString(), {
              type: 'nvCallbackToast',
              placement: 'bottom',
              animationDuration: 100,
              duration: 3.0 * 1000,
              data: {
                title: '!! Track Event Response !!',
              },
            });
          },
        );
        break;
      }
      case 'dismiss': {
        navigation.goBack();
        break;
      }
      default: {
        break;
      }
    }

    // const userParams = {
    //   name: 'John',
    //   age: '21',
    //   address: 'New Delhi',
    //   userID: '78-ASD-56',
    // };
    // Notifyvisitors.setUserIdentifier(userParams, (callback: any) => {
    //   //do your work here
    // });

    // const userToken = {name: 'ravi', age: 49};
    // const customRule = {category: 'flowers'};
    // Notifyvisitors.showInAppMessage(
    //   userToken,
    //   customRule,
    //   null,
    //   (callback: any) => {
    //     //do your work here
    //   },
    // );

    // const tabConfig = {
    //   label_one: 'offer',
    //   name_one: 'Offers',
    //   label_two: 'promotion',
    //   name_two: 'Promotions',
    //   label_three: 'other',
    //   name_three: 'Others',
    // };
    // Notifyvisitors.openNotificationCenter(tabConfig, 0, (callback: any) => {
    //   //do your work here
    // });
    // const pushPayload = {};
    // Notifyvisitors.isPayloadFromNvPlatform(pushPayload, (response: any) => {
    //   if (response == 'true') {
    //     Notifyvisitors.getNV_FCMPayload(pushPayload);
    //   }
    // });

    // Notifyvisitors.getEventSurveyInfo((callback: any) => {
    //   //do your work here
    // });
  }

  let eventBtnTitle: string = `eventName = ${Constants.trackAboutScreenFirstEventName}`;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>About</Text>
      <View
        style={{
          marginTop: 20,
          flex: 2,
          width: '100%',
          height: 200,
          backgroundColor: '#ff0000',
        }}>
        {/* <Text style={{color: '#fff', fontSize: 16, padding: 10}}>
          This is the About screen. You can track screen events and navigate
          back using the buttons below.
        </Text> */}
        {/* <NotifyvisitorsNativeDisplay
          style={{flex: 1, width: '100%', height: 200}}
          propertyName="home"
        /> */}
        <Text>About Page</Text>
      </View>

      <AppButton
        key="btn1"
        title="Track Screen Event for About Page"
        id="btn1"
        onPress={() => onPresAppButtonHandler(Constants.trackScreen)}
      />
      <AppButton
        key="btn2"
        title={eventBtnTitle}
        id="btn2"
        onPress={() => onPresAppButtonHandler('trackAboutScreenFirstEventName')}
      />
      <AppButton
        key="btn3"
        title="Go Back"
        id="btn2"
        onPress={() => onPresAppButtonHandler('dismiss')}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
