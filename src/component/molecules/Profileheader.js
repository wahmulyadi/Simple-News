import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

// import { NotVerifed, Verifed } from '../../assets';
import { Gap } from '../atoms';

const Profileheader = ({
    image,
    nama,
    alamat,
 
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wadah}>
                {image != '' ? (
                    <Image
                        source={require('../../assets/images/mul.jpg')}
                        style={styles.profil}
                        resizeMode="cover"
                    />
                ) : null}
            </View>
            <View style={styles.containerprofile}>
                <Text style={styles.nama}>{nama}</Text>
                <Gap marginTop={2} />
             

                <Gap marginTop={5} />
                <Text style={styles.reguler}>{alamat}</Text>
            </View>
        </View>
    );
};

export default Profileheader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
    },
    containerprofile: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: -60,
        backgroundColor: '#fff',
        elevation: 4,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    nama: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: 'Poppins-Bold',
        fontWeight:'bold'
    },
    textVerif: {
        fontFamily: 'Poppins-Regular',
        fontSize: responsiveFontSize(2),
        marginRight: 5,
    },
    provinsi: {
        fontSize: 12,
    },
    alamat: {
        fontSize: 12,
    },
    img: {
        minHeight: 300,
        height: 350,
        width: 100,
    },
    verif: {
        flexDirection: 'row',
    },
    img: {
        marginLeft: 5,
        marginTop: 3,
    },
    claim: {
        color: '#39B54A',
        marginLeft: 5,
        fontFamily: 'Poppins-Regular',
    },
    wadah: {
        width: responsiveWidth(100),
        height: 350,
        backgroundColor: '#F1F1F1',
    },
    profil: {
        height: 350,
        width: '100%',
    },
    reguler: {
        fontFamily: 'Poppins-Regular',
        fontSize: responsiveFontSize(2),
    },
});
