import React, { Component } from 'react'

import { ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import { login } from '../../config/redux/_actions/auth/auth';
import {   ButtonKanan, ButtonLogin, Gap, InputText } from '../../component';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            disabled: true,
            submit: false,
            isShowingPassword: true,
        };
    }


    handleVisibility = () => {
        this.setState({
            isShowingPassword: !this.state.isShowingPassword,
        });
    };
    handleChange = (state, val) => {
        this.setState(
            {
                [state]: val,
            },
            () => this.verification(),
        );
    };
    handleSubmit = () => {
        const state = this.state;
        this.setState({
            submit: true,
        });
        const params = {
            email: state.email,
            password: state.password,
        };
        setTimeout(() => {
            try {
                this.props
                    .login(params)
                    .then((res) => {
                        console.log('RESULT', res.value);
                    })
                    .catch((err) => {
                        if (err.response.data.code == 2) {
                            ToastAndroid.show(
                                err.response.data.message,
                                ToastAndroid.BOTTOM,
                            );
                        } else {
                            ToastAndroid.show(
                                'Wrong email or password',
                                ToastAndroid.BOTTOM,
                            );
                        }
                        this.setState({
                            submit: false,
                        });
                    });
            } catch (error) {
                ToastAndroid.show(
                    'Wrong email or password',
                    ToastAndroid.BOTTOM,
                );
                this.setState({
                    submit: false,
                });
            }
        }, 1000);
    };
    verification = () => {
        const state = this.state;
        if (state.email == '' || !this.validateEmail(state.email)) {
            this.setState({
                disabled: true,
            });
            return false;
        } else if (state.password == '') {
            this.setState({
                disabled: true,
            });
            return false;
        } else {
            this.setState({
                disabled: false,
            });
            return true;
        }
    };
    validateEmail = (email) => {
        const re = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        return re.test(String(email).toLowerCase());
    };
    render() {
        const state = this.state;
        const {isShowingPassword} = this.state;
        return (
            <View style={{flex: 1}}>
            <StatusBar translucent={false} />
            <View style={styles.topcontainer}>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Sign In</Text>
                </View>
                <View>
                    <ButtonKanan
                        button="Sign Up"
                        onPress={() =>
                            this.props.navigation.replace('Register')
                        }
                    />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <View style={styles.content}>
                    <InputText
                        title="Email"
                        secure={false}
                        state="email"
                        keyboardType="email-address"
                        onChangeText={this.handleChange}
                        value={state.email}
                    />
                    <View style={styles.inputPassword}>
                        <InputText
                            title="Password"
                            onChangeText={this.handleChange}
                            state="password"
                            secure={this.state.isShowingPassword}
                        />
                        <TouchableOpacity
                            style={styles.eye}
                            onPress={this.handleVisibility}>
                            <Icon
                                name={isShowingPassword ? 'eye' : 'eye-off'}
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                  
                    <Gap marginTop={30} />
                    <ButtonLogin
                        disabled={state.disabled}
                        submit={state.submit}
                        button="Sign In"
                        onPress={this.handleSubmit}
                        />
                </View>
            </ScrollView>   
        </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
    };
};

export default connect(null, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        flex: 1,
        paddingTop: 40,
    },
    topcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: responsiveHeight(8),
        backgroundColor: '#FFFFFF',
        paddingLeft: 15,
        paddingRight: 20,
    },
    inputPassword: {
        width: '100%',
    },
    eye: {
        position: 'absolute',
        right: 10,
        bottom: 20,
    },
    logo: {
        width: '40%',
        height: 50,
        alignSelf: 'center',
        marginTop: -169,
        marginBottom: 20,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        flex: 1,
    },
});
