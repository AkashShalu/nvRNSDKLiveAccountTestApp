import React, {Ref, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  TouchableOpacityComponent,
  View,
} from 'react-native';
import {Input} from '@rneui/themed';

type Props = {
  headingText?: string;
  placeholderOne?: string;
  placeholderTwo?: string;
  id: string;
  inputOneID: string;
  inputTwoID?: string;
  // inputOneValue?: string;
  // inputTwoValue?: string;
  onChangeInputValue: (
    inputID: string,
    inputValue: string,
    AppInputCardID: string,
    inputPplaceholderText?: string,
  ) => void;
};

const AppInputCard: React.FC<Props> = props => {
  const [inputOneValue, setInputOneValue] = useState('');
  const [inputTwoValue, setInputTwoValue] = useState('');

  function onChangeInputOne(text: string): void {
    setInputOneValue(() => text);
    props.onChangeInputValue(
      props.inputOneID!,
      inputOneValue,
      props.id,
      props.placeholderOne,
    );
  }

  function onChangeInputTwo(text: string): void {
    setInputTwoValue(() => text);
    props.onChangeInputValue(
      props.inputTwoID!,
      inputTwoValue,
      props.id,
      props.placeholderTwo,
    );
  }

  return (
    <View style={styles.column}>
      <Text style={styles.inputHeadingText}>{props.headingText}</Text>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Input
            id={props.inputOneID}
            style={styles.inputdate}
            placeholder={props.placeholderOne}
            value={inputOneValue}
            onChangeText={onChangeInputOne}
          />
        </View>

        {props.inputTwoID && (
          <View style={styles.inputWrap}>
            <Input
              id={props.inputTwoID}
              style={styles.inputdate}
              placeholder={props.placeholderTwo}
              value={inputTwoValue}
              onChangeText={onChangeInputTwo}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default AppInputCard;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#cccccc',
    borderBottomWidth: 1,
  },
  inputWrap: {
    flex: 1,
  },
  inputHeadingText: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: 14,
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputdate: {
    fontSize: 12,
    marginBottom: -12,
  },
  inputcvv: {
    fontSize: 14,
    marginBottom: -12,
  },
});

// const styles = StyleSheet.create({
//   row: {
//     flex: 1,
//     flexDirection: 'row',
//     padding: 8,
//   },

//   inputWrap: {
//     flex: 1,
//     marginBottom: 5,
//     marginTop: 5,
//   },

//   input: {
//     fontSize: 14,
//     marginBottom: -12,
//   },
// });

// const AppInputCard

// import React, {Component} from 'react';
// import {Text, View, StyleSheet, TextInput} from 'react-native';

// export default class AppInputCard extends Component {
//   render() {
//     return (
//       <View style={styles.row}>
//         <View style={styles.inputWrap}>
//           <Text style={styles.label}>Expiration date</Text>
//           <TextInput style={styles.inputdate} />
//         </View>

//         <View style={styles.inputWrap}>
//           <Text style={styles.label}>CVV</Text>
//           <TextInput style={styles.inputcvv} maxLength={17} />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   row: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   inputWrap: {
//     flex: 1,
//     borderColor: '#cccccc',
//     borderBottomWidth: 1,
//     marginBottom: 10,
//   },
//   inputdate: {
//     fontSize: 14,
//     marginBottom: -12,
//     color: '#6a4595',
//   },
//   inputcvv: {
//     fontSize: 14,
//     marginBottom: -12,
//     color: '#6a4595',
//   },
// });
