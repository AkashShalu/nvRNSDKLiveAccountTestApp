import {Pressable, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import {Home, About} from '../screens/screens';
import withBadge from '../components/withBadge';
import Notifyvisitors from 'react-native-notifyvisitors';

type Props = {
  nvCenterBadgeFromHomePage?: number;
};

const Routs = ({nvCenterBadgeFromHomePage}: Props) => {
  const [nvCenterBadge, setNVCenterBadge] = useState(nvCenterBadgeFromHomePage);

  const Stack = createNativeStackNavigator();
  const BadgedIcon = withBadge(nvCenterBadge)(Icon);

  function onBtnPress() {
    Notifyvisitors.showNotifications(null, 0);
    setNVCenterBadge(() => 0);
  }

  useEffect(() => {
    var tabCountInfo = {
      label_one: 'tg1',
      name_one: 'Promotional',
      label_two: 'tg2',
      name_two: 'Transactional',
      label_three: 'others',
      name_three: 'Others',
    };
    Notifyvisitors.getNotificationCenterCount(
      tabCountInfo,
      function (callback: any) {
        let callbackData = JSON.parse(callback);
        console.log(callbackData);
        let allCount: number = callbackData.totalCount;
        setNVCenterBadge(() => allCount);
      },
    );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationStrings.HOME}>
        <Stack.Screen
          name={navigationStrings.HOME}
          component={Home}
          options={{
            title: 'Notifyvisitors (React Native)',
            headerStyle: {
              backgroundColor: '#FB9A4E',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <React.Fragment>
                <Pressable onPress={onBtnPress}>
                  <BadgedIcon
                    name="notifications-sharp"
                    type="ionicon"
                    color="white"
                    containerStyle={styles.padRight}
                  />
                </Pressable>
              </React.Fragment>
            ),
          }}
        />
        <Stack.Screen
          name={navigationStrings.ABOUT}
          component={About}
          options={{
            title: 'About Page',
            headerStyle: {
              backgroundColor: '#FB9A4E',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routs;

const styles = StyleSheet.create({
  padRight: {
    paddingRight: 16,
  },
});
