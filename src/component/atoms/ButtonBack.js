import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
// import { IconBack, Verifed } from '../../assets';

const ButtonBack = ({button, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <View style={styles.content}>
                {/* <Verifed></Verifed> */}
                {/* <IconBack style={{width:24,height:24}}/> */}
                <Icon name="chevron-back" size={25} />
                <Text style={styles.title}>{button}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonBack;

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    button: {
        width: '100%',
    },
    title: {
        fontSize: 12,
        color: '#000',
        marginLeft: 10,
        fontFamily: 'Poppins-Bold',
        marginTop: 3,
    },
});
