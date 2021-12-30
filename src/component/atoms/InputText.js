import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const InputText = ({
  title,
  onChangeText,
  state,
  keyboardType,
  secure,
  value,
  editable,
}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        marginBottom: 15,
      }}>
      <TextInput
        style={styles.inputText}
        placeholder={title}
        keyboardType={keyboardType}
        value={value}
        onChangeText={val => onChangeText(state, val)}
        secureTextEntry={secure}
        editable={editable}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputText: {
    borderBottomWidth: 1,
    borderRadius: 6,
    fontFamily: 'Poppins-Regular',
    width: '100%',
    fontSize: 14,
  },
});
