import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonKanan = ({button, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.title}>{button}</Text>
        </TouchableOpacity>
    );
};

export default ButtonKanan;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'space-between',
        height: 20,
    },
    title: {
        fontSize: 12,
        color: '#2890dd',
        fontFamily: 'Poppins-Bold',
    },
});
