import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image, TouchableOpacity, ScrollView} from 'react-native'
import Animated ,{Easing} from 'react-native-reanimated';
import { connect } from 'react-redux';
import { logout } from '../../config/redux/_actions/auth/auth';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Profileheader } from '../../component';

import { getProfile } from '../../config/redux/_actions/user/user';
const {Value,timing}=Animated

 class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
          status: false,
          // foto: `require('../../assets/images/mul.jpg')`,
          name: '',
          alamat: '',
          email: '',
          id_user: '',
          foto_ori: '',
        }
    }

    componentDidMount() {
      this.props.navigation.addListener('focus', () => this.getData());
      this.getData();
    }
    getData = async () => {
      const user = await this.props.getProfile();
      this.setState({
        foto: user.value.foto,      
        name: user.value.name,
        alamat: user.value.alamat,
        email: user.value.email,
        id_user: user.value.id,
        foto_ori: user.value.foto_ori,
      });
    };




    handleLogout = () => {
        this.props.logout();
      };

    render() {

      const {
      
        // foto,
        name,
        alamat,
       
      } = this.state;
        return (
          <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        
        <Profileheader
        
          // image={foto}
          nama={name}
          alamat={alamat}
        
        />
        <View style={styles.containerContent}>
          {/* <View style={styles.containerinfo}> */}
            {/* <TouchableOpacity
              style={styles.itemMenu}
              onPress={() => this.props.navigation.navigate('UpdateProfile')}>
              <Text style={styles.infotext}>Change Profile</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              style={styles.itemMenu}
              onPress={() => this.props.navigation.navigate('ChangePassword')}>
              <Text style={styles.infotext}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemMenu}
              onPress={() => this.props.navigation.navigate('RiwayatSPK')}>
              <Text style={styles.infotext}>About Me</Text>
            </TouchableOpacity> */}
          
          {/* </View> */}
          <View style={styles.logout}>
            <TouchableOpacity onPress={this.handleLogout}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
        //     <View style={styles.containerContent}>
              
        //   <Profileheader
        
        //   image={picture}
        //   nama={name}
        //   alamat={alamat}
        // />
        //     <View style={styles.containerinfo}>
           
        //     <TouchableOpacity
        //       style={styles.itemMenu}
        //       onPress={() => this.props.navigation.navigate('ChangePassword')}>
        //       <Text style={styles.infotext}>Change Password</Text>
        //     </TouchableOpacity>
            
            
        //     </View>
        //     <View style={styles.logout}>
        //       <TouchableOpacity onPress={this.handleLogout}>
        //         <Text style={styles.logoutText}>Logout</Text>
        //       </TouchableOpacity>
        //     </View>
        //   </View>
            
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user,
    };
  };
const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout()),
      getProfile: () => dispatch(getProfile()),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);


const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#fff',
    },
    containerContent: {
      paddingHorizontal: 20,
      paddingTop:20
    },
    containerinfo: {
      width: '100%',
      borderRadius: 10,
      alignSelf: 'center',
      backgroundColor: '#fff',
      elevation: 4,
      paddingHorizontal: 20,
      paddingVertical: 20,
      marginBottom: 20,
    },
    infotext: {
      fontSize: 15,
      fontFamily: 'Poppins-Medium',
    },
    logout: {
      width: '100%',
      borderRadius: 10,
      alignSelf: 'center',
      backgroundColor: '#fff',
      elevation: 2,
      marginBottom: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    logoutText: {
      fontSize: 15,
      fontFamily: 'Poppins-SemiBold',
    },
    itemMenu: {
      paddingVertical: 8,
    },
  });
