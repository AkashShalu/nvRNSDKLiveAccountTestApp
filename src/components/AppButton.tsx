import {
  GestureResponderEvent,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {MouseEventHandler} from 'react';
type Props = {
  title: string;
  id: string;
  onPress: (event: GestureResponderEvent) => void;
};

const AppButton: React.FC<Props> = props => {
  return (
    <TouchableOpacity
      key={props.id}
      onPress={props.onPress}
      style={styles.appButtonContainer}>
      <Text id={props.id} style={styles.appButtonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
// const AppButton = ({ onPress, title }) => (

export default AppButton;

const styles = StyleSheet.create({
  btnConatiner: {
    flex: 1,
    // alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    height: 40,
  },
  appButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});
