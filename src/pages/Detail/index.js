import React, { Component } from 'react'
import { ActivityIndicator, Text, View,StyleSheet } from 'react-native'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { ButtonBack, Gap } from '../../component'
import { connect } from 'react-redux';
import { getDetail } from '../../config/redux/_actions/post/post';
import { ScrollView } from 'react-native-gesture-handler';



class Detail extends Component {
    constructor() {
        super();
        this.state = {
          loading: false,
          judul: '',
          komentar: '',
          tanggal: '',
        };
      }
    
      goBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
      };
      componentDidMount() {
        this.setState(
          {
            loading: true,
          },
          this.getData,
        );
      }
      getData = () => {
        const {id_posting} = this.props.route.params;
        const {getDetail} = this.props;
        getDetail(id_posting)
          .then(res => {
            console.log('result', res);
            let value = res.value;
            this.setState({
              loading: false,
              judul: value.judul,
              komentar: value.komentar,
              tanggal: value.tanggal,
            });
          })
          .catch(err => {
            console.log('err', err);
            this.setState({
              loading: false,
            });
          });
      };
    render() {
        const {
          loading,
          judul,
          komentar,
          tanggal
          } = this.state;
        return (
            <View style={styles.container}>
            <View style={styles.topcontainer}>
            
              <ButtonBack
                button="Kembali"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
            {loading ? (
              <View style={styles.containerLoading}>
                <ActivityIndicator size="large" color="#39B54A" />
              </View>
            ) : (
             <View style={{flelx:1, paddingHorizontal:20,  }}>
                 <ScrollView showsVerticalScrollIndicator={false}>
                 <View style={{paddingTop:10}}>
                     <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',marginBottom:5}}>{judul}</Text>
                     <Text style={{fontSize:12, color:'#c9c9c9',alignSelf:'center'}}>Di Publikasikan tanggal {tanggal} </Text>
                    </View>
                    <Gap marginBottom={15}/>
                    <View>
                        <Text style={{fontSize:responsiveFontSize(1.5),textAlign:'justify' }}>{komentar}</Text>
                    </View>
                    <Gap marginTop={100}/>
                    </ScrollView>
            </View>
            )}
          </View>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
      getDetail: id_posting => dispatch(getDetail(id_posting)),
    };
  };

  
export default connect(null, mapDispatchToProps)(Detail);

const styles =StyleSheet.create({

        container: {
          backgroundColor: '#fff',
          flex: 1,
        },
        topcontainer: {
          flexDirection: 'row',
          alignItems: 'center',
          height: responsiveHeight(8),
          backgroundColor: '#FFFFFF',
          paddingLeft: 15,
          paddingRight: 20,
          
          elevation: 4,
        },
})
  
