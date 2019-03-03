import React from 'react';
import {Expo,AuthSession} from 'expo';
import { StyleSheet, View, Image,Dimensions,ImageBackground,Button} from 'react-native';
import {Badge,Text,Icon} from 'react-native-elements';
import jwtDecoder from 'jwt-decode';
import {LinearGradient} from 'react-native-linear-gradient';
import axios from 'axios';
import {startLogin} from '../actions/auth';
import { connect } from 'react-redux';
import { FAB } from 'react-native-paper';


const FB_APP_ID = '363261451170574'; 




function toQueryString(params) {

    return '?' + Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }
  
export  class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };
    render() {
      
        let width = Dimensions.get('window').width;
        let height = Dimensions.get('window').height;
        
      return (

        <View style={{flex:1, backgroundColor:'#55efc4'}} >
          
            <View style={{alignItems:'center', marginTop:'40%'}}>
                <Text h1 style={{fontSize:70, color:'#3498db'}}>€hange</Text>
            </View>
            <View style ={{flex:1,flexDirection:'row',justifyContent:'center'}}> 
                  <Image style = {{marginTop:10, aspectRatio: 2/2, width:width/2}} source={require('../assets/piggy-bank.png')} ></Image>
                  <Icon
                  containerStyle={{position:'absolute',bottom:0}}
                  onPress={async()=>{
                    resultType = await this.props.startLogin();
                    if(resultType == "success"){
                      this.props.navigation.navigate('BankLogin');
                    }
                    
                  }}
                  reverse
                  raised
                  size={32}
                  name='facebook'
                  type='font-awesome'
                  color='#3498db'
                />
        
            </View>
       
        </View>

        
      );
      
    }
    // loginFB = async () => {
    //   let redirectUrl = AuthSession.getRedirectUrl();
    //   let result = await AuthSession.startAsync({
    //     authUrl:
    //       `https://www.facebook.com/v3.2/dialog/oauth?response_type=token` +
    //       `&client_id=${FB_APP_ID}` +
    //       `&scope=email%20user_birthday` +
    //       `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    //   });
    //   let access_token = result.params.access_token;
      
    //   let data = await fetch(`https://graph.facebook.com/v3.2/me?fields=id,name,birthday,email,picture.type(large)&access_token=${access_token}`)
    //   console.log((await data.json()))
     
    // };
  }

const mapDispatchToProps = (dispatch) => ({
  startLogin: ()=> dispatch(startLogin()),

});

const mapStateToProps = (state,props) => {
    return {
      auth : state.auth,
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps)(Login);