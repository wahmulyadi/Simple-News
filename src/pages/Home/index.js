import React, { Component } from 'react'
import { Text, ActivityIndicator,View ,FlatList,StyleSheet,Image, ScrollView,RefreshControl} from 'react-native'
import Animated ,{Easing} from 'react-native-reanimated';
import { responsiveHeight ,responsiveWidth} from 'react-native-responsive-dimensions';
import { connect } from 'react-redux';
import {getList} from '../../config/redux/_actions/post/post';
import { getProfile } from '../../config/redux/_actions/user/user';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CardPost, Gap } from '../../component';
import { G } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {Value,timing}=Animated

class Home extends Component {
    constructor(){
        super()
        this.state={
            scroll_y: new Value(0),
            data: [],
            nama:'',
            email:'',
            profile:[],
            loading: false,
            first: true,
            offset: 0,
            limit: 5,
            stopRequest: false,
        }
    }
    
      componentDidMount() {
        this.setState({
          loading: true,
        });
        this.props.navigation.addListener('focus', () => this.getData());
        this.getData();
      }
      handlePress=()=>{
          this.props.navigation.navigate('Detail',{id_posting:id_posting})
      }

      getData = async () => {
        const {offset, limit, data} = this.state;
        this.props
          .getList(limit, offset)
          .then(res => {
            let value = res?.value;
            if (value.length > 0) {
              this.setState({
                data: data.concat(value),
                loading: false,
              });
            } else {
              this.setState({
                stopRequest: true,
                loading: false,
              });
            }
          })
          .catch(err => {
            console.log('error', err);
          });
          const user = await this.props.getProfile();
              this.setState({
                // foto: user.value.foto,
                name: user.value.name,
                email: user.value.email,
                // id_user: user.value.id,
              });
      };

 

    handleLoadMore = () => {
        const {stopRequest, limit, offset} = this.state;
        if (!stopRequest) {
          this.setState(
            {
              offset: offset + limit,
              loading: true,
            },
            this.getData,
          );
        }
      };
      loadMoreIndicator = () => {
        const {loading, stopRequest} = this.state;
        return loading && !stopRequest ? (
          <View style={styles.loadMore}>
            <ActivityIndicator size="large" color="#39B54A" />
          </View>
        ) : (
          <View style={styles.loadMore}>
            <Text style={styles.dataHabis}>Tidak ada data lagi.</Text>
          </View>
        );
      };


  






    _onScroll=(e)=>{
        const new_y_scroll_value = e.nativeEvent.contentOffset.y
        this.setState({ scroll_y: new Value(new_y_scroll_value)})
    }
    render() {

        const {
         profile,
            data,
            loading,
            name,
            email
           
          } = this.state;

console.log(this.state.data);


        const _card_height = this.state.scroll_y.interpolate({
            inputRange:[0,100],
            outputRange:[100,50],
            extrapolate:'clamp'
        })

        const _image_container_height = this.state.scroll_y.interpolate({
            inputRange:[0,100],
            outputRange:[100,40],
            extrapolate:'clamp'
        })
        const _image_container_margin = this.state.scroll_y.interpolate({
            inputRange:[0,100],
            outputRange:[0,4],
            extrapolate:'clamp'
        })
        const _image_container_border_radius = this.state.scroll_y.interpolate({
            inputRange:[0,100],
            outputRange:[0,16],
            extrapolate:'clamp'
        })
      
     
        return (
<>
        <View style={styles.container}> 
              <Animated.View style={[styles.personal_card_container,
                    {
                        height:_card_height,
                       
                    }
            ]}>
                  <Animated.View style={[styles.image_container,
                  {
                    // height:_image_container_height,
                    // margin:_image_container_margin,
                    // borderRadius:_image_container_border_radius,
                  }
                  ]}>
                  <Image source={require('../../assets/images/mul.jpg')} style={styles.image
                }/>
                  </Animated.View>
                        
                  <Animated.View style={styles.cta_container
                }>
                    <Text style={[styles.text, {
                       
                    }]}>Hello {name}</Text>
                    <Text style={[styles.textmail, {
                        // paddingTop:_cta_container_padding_top,
                        // opacity:_cta_container_opacity,
                       
                    }]}> {email}</Text>
                  </Animated.View>
              </Animated.View>


        <FlatList
        style={{paddingTop:120,}}
          data={data}
          onScroll={this._onScroll}
          scrollEventThrottle={16}
          keyExtractor={item => item.id_posting}
          renderItem={({item}) => (
            <CardPost
            key={item.id_posting}
            judul={item.judul}
            komentar={item.komentar}
            tanggal={item.tanggal}
            id_posting={item.id_posting}
              navigation={this.props.navigation}
            />
             
                    
                       )}
                       contentContainerStyle={styles.containerList}
                       ListEmptyComponent={
                         !loading && (
                           <Text style={styles.textNotFound}>Data tidak ditemukan</Text>
                         )
                       }
                       showsVerticalScrollIndicator={false}
                       onEndReached={this.handleLoadMore}
                       onEndReachedThreshold={0.5}
                       ListFooterComponent={this.loadMoreIndicator}
                     />

        </View>
  </>          
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getList: (limit, offset) => dispatch(getList(limit, offset)),
      getProfile: () => dispatch(getProfile()),
    };
  };
  
  export default connect(null, mapDispatchToProps)(Home);


const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'white'
},
personal_card_container:{
    zIndex:10,
    width:responsiveWidth(100),
    // backgroundColor:'red',
    backgroundColor:'#2478B7', 
    flexDirection:'row',
    padding:10,
    // paddingBottom:15,
    borderBottomWidth:1,
    borderColor:'#c9c9c9',
    position:'absolute'
},
image_container:{
    position:'relative',
    overflow:'hidden', 
    borderRadius:15
  
},
image:{
    flex:1 ,
    height:50,
    width:50
},
cta_container:{
    flex:1, 
    position:'relative',
    // backgroundColor:'white',
    // overflow:'hidden',
    justifyContent:'center',
    alignContent:'center', 
    marginLeft:10
},
fake_card:{
    width:responsiveWidth(95),
    height:responsiveHeight(30),
    backgroundColor:"#dddddd",
    // marginLeft:5,
    borderWidth:1,
    alignSelf:'center',
    borderColor:"#cccccc",
    borderRadius:16,
    marginBottom:10
},
fake_card_ghost:{
    // backgroundColor:'white',
    marginLeft:10,
    borderWidth:0,
    width:responsiveWidth(80),
    height:100,
    marginBottom:10
},
text:{
    fontSize:18,
    fontWeight:"bold",
    color:"white"
},
textmail:{
    fontSize:12,
    color:"white"
},
loadMore: {
    marginTop:responsiveHeight(15),
    marginVertical: 10,
    alignItems: 'center',
  },
  dataHabis: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#ddd',
  },
})
