// type Props = {
//   placeholder: string;
//   id: string;
// };
// const AppInput: React.FC<Props> = props => {
//   const inputRef = React.createRef();

//   // const input = React.createRef();
//   return (
//     <View>
//       <Input
//         ref={inputRef}
//         placeholder={props.placeholder}
//         key={props.id}
//         inputStyle={styles.inputStyle}></Input>
//     </View>
//   );
// };

// export default AppInput;

// const styles = StyleSheet.create({
//   inputStyle: {
//     borderStyle: 'solid',
//     borderWidth: 2,
//     borderColor: '#000000',
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input} from '@rneui/themed';

type Props = {
  placeholder: string;
  id: string;
};
const AppInput: React.FC<Props> = props => {
  const inputRef = React.createRef();

  return (
    <>
      <Input
        placeholder={props.placeholder}
        key={props.id}
        id={props.id}
        ref={inputRef}
        inputContainerStyle={styles.inputStyle}></Input>
    </>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
  },
});
