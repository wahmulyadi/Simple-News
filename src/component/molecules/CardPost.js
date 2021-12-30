import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

class CardPost extends Component{
  

  handlePress = () => {
    const {id_posting, navigation} = this.props;
    navigation.navigate('Detail', {id_posting: id_posting});
  };
  render(){
  return (
    <View style={styles.fake_card}>
    <TouchableOpacity onPress={this.handlePress}>  
     <View style={{justifyContent:'space-between',flexDirection:'row'}}>
         <View style={{width:responsiveWidth(65)}}>
            <Text style={{fontSize:18,padding:10, fontWeight:"bold", flexWrap:"wrap"}}>{this.props.judul}</Text>

         </View>
     <Text style={{fontSize:12,padding:10, fontWeight:"bold"}}>{this.props.tanggal}</Text>
     </View>
     <View style={{padding:10,}} >
         <Text numberOfLines={6} style={{fontSize:12 ,textAlign:'justify',flexWrap:'wrap'}}>
         {this.props.komentar}
         </Text>
         </View>
         </TouchableOpacity>
 </View>
  );
};
}
export default CardPost;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  containerBackground: {
    height: 150,
    position: 'relative',
  },
  filterImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 20,
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
  image: {
    width: '100%',
    height: '100%',
  },
  containerContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    flex: 1,
    marginRight: 5,
  },
  containerKriteria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemKriteria: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  kriteriaName: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#929292',
    textAlign: 'center',
  },
  kriteriaNilai: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  containerHasil: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#00AD6B',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  textHasil: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
  },
  textTanggal: {
    textAlign: 'right',
    fontSize: 10,
    color: '#929292',
    fontFamily: 'Poppins-Regular',
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: 5,
    marginTop: 5,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
