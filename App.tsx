import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Toast, ToastProvider} from 'react-native-toast-notifications';
import {Icon} from '@rneui/themed';
import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import Routs from './src/navigation/Routs';

const App = () => {
  return (
    <ToastProvider
      successColor="green"
      dangerColor="red"
      warningColor="orange"
      normalColor="gray"
      offset={40}
      swipeEnabled={true}
      renderType={{
        nvCallbackToast: toast => (
          <Pressable onPress={toast.onHide}>
            <View
              style={{
                maxWidth: '90%',
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: '#000000',
                opacity: 0.85,
                marginVertical: 4,
                borderRadius: 10,
                justifyContent: 'center',
                alignSelf: 'center',
                alignContent: 'center',
                paddingLeft: 12,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#ffffff',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                {toast.data.title}
              </Text>
              <Text style={{color: '#ffffff', marginTop: 2, marginRight: 16}}>
                {toast.message}
              </Text>
              <Pressable
                onPress={() => toast.onHide()}
                style={{
                  marginLeft: 'auto',
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="copy"
                  size={18}
                  type="font-awesome"
                  color="#ffffff"
                  onPress={() => {
                    Clipboard.setString(`${toast.message}`);
                    toast.onHide();
                  }}
                />
              </Pressable>
            </View>
          </Pressable>
        ),
      }}>
      <View style={{flex: 1}}>
        <Routs />
      </View>
    </ToastProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
