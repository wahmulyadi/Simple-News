import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonLogin = ({button, onPress, disabled, submit}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                {
                    backgroundColor: disabled || submit ? '#9db5d2' : '#2890dd',
                },
            ]}
            disabled={disabled || submit}>
            <Text style={styles.title}>
                {submit ? <ActivityIndicator color="#fff" /> : button}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonLogin;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        maxWidth: 350,
        borderRadius: 30,
        justifyContent: 'center',
        elevation: 3,
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        height: 45,
        marginTop: 15,
    },
    title: {
        fontSize: 17,
        fontFamily: 'Poppins-Bold',
        color: '#FFFFFF',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
