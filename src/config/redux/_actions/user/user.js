import AsyncStorage from '@react-native-async-storage/async-storage';

import { API, setAuthToken } from '../../../api/API';
import {
    GET_FAQ,
    GET_PROFILE,
    GET_TRIP_ACTIVE,
    SEND_EMAIL_VERIFICATION,
    UPDATE_PASSWORD,
    UPDATE_PROFILE,
} from '../../../constans/constans';

export const getProfile = () => {
    return {
        type: GET_PROFILE,
        payload: async () => {
            const token = await AsyncStorage.getItem('token');
            setAuthToken(token);
            const res = await API.get('user/profile');
            return res.data.data;
        },
    };
};

export const updateProfile = (data) => {
    return {
        type: UPDATE_PROFILE,
        payload: async () => {
            const token = await AsyncStorage.getItem('token');
            setAuthToken(token);
            const res = await API.post('user/profile/edit', data);
            return res.data.data;
        },
    };
};

export const updatePassword = (data) => {
    return {
        type: UPDATE_PASSWORD,
        payload: async () => {
            const token = await AsyncStorage.getItem('token');
            setAuthToken(token);
            const res = await API.post('user/profile/edit/password', data);
            return res.data.data;
        },
    };
};
export const formatRupiah = (angka, prefix, noPrefix) => {
    if (angka != undefined) {
        var number_string = angka.toString().replace(/[^,\d]/g, ''),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        if (ribuan) {
            var separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
        if (!noPrefix) {
            return prefix === undefined
                ? 'Rp' + rupiah
                : rupiah
                ? prefix + rupiah
                : '';
        } else {
            return rupiah;
        }
    }
};

export const sendEmailVerification = (data) => {
    return {
        type: SEND_EMAIL_VERIFICATION,
        payload: async () => {
            const res = await API.post('user/reverify', data);
            return res.data.data;
        },
    };
};
