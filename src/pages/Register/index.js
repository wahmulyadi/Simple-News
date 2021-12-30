import React, { Component } from 'react';
import { ScrollView,Text, StatusBar, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';

import { ButtonBack, ButtonKanan, ButtonLogin, InputText } from '../../component';
import { register } from '../../config/redux/_actions/auth/auth';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: true,
      nama: '',
      email: '',
      password: '',
      disabled: true,
      submit: false,
    };
  }
  handleChange = (state, val) => {
    this.setState(
      {
        [state]: val,
      },
      () => this.validation(),
    );
  };
  validation = () => {
    const state = this.state;
    if (state.nama == '') {
      this.setState({
        disabled: true,
      });
      return false;
    } else if (state.email == '' || !this.validateEmail(state.email)) {
      this.setState({
        disabled: true,
      });
      return false;
    } else if (state.password == '' || state.password.length < 8) {
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
  validateEmail = email => {
    const re = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return re.test(String(email).toLowerCase());
  };
  handleVisibility = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  handleSubmit = () => {
    this.setState(
      {
        submit: true,
      },
      this.sendSubmit,
    );
  };
  sendSubmit = async () => {
    const state = this.state;
    const param = {
      name: state.nama,
      email: state.email,
      password: state.password,
    };

    try {
      await this.props.register(param);
    } catch (err) {
      console.log(err.response.data);
      if (err.email != undefined) {
        ToastAndroid.show('Email Telah digunakan.', ToastAndroid.BOTTOM);
      } else {
        ToastAndroid.show('Register Gagal', ToastAndroid.BOTTOM);
        
      }
      this.setState({
        submit: false,
      });
    }
  };
  GoBack = () => {
    this.props.navigation.goBack();
  };
  GoLogin = () => {
    this.props.navigation.replace('Login');
    console.log('Login')
  };
  render() {
    const {showPassword, email, nama, password, submit, disabled} = this.state;
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent={false} />
        <View style={styles.topcontainer}>
          <View>
            
          <Text style={{fontWeight:'bold',fontSize:20}}>Sign Up</Text>
          </View>
          <View>
            <ButtonKanan button="Sign In" onPress={this.GoLogin} />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.content}>
            <InputText
              title="Nama"
              state="nama"
              value={nama}
              onChangeText={this.handleChange}
            />
            <InputText
              keyboardType="email-address"
              title="Email"
              state="email"
              value={email}
              onChangeText={this.handleChange}
            />
            <View style={styles.inputPassword}>
              <InputText
                title="Password"
                onChangeText={this.handleChange}
                state="password"
                value={password}
                secure={showPassword}
              />
              <TouchableOpacity
                style={styles.eye}
                onPress={this.handleVisibility}>
                <Icon name={showPassword ? 'eye' : 'eye-off'} size={25} />
              </TouchableOpacity>
            </View>
            <ButtonLogin
              disabled={disabled}
              submit={submit}
              button="Sign Up"
              onPress={this.handleSubmit}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: data => dispatch(register(data)),
  };
};
export default connect(null, mapDispatchToProps)(Register);
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
