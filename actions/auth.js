import axios from 'axios';
import {AuthSession} from 'expo';
import {api} from '../api';
const FB_APP_ID = '363261451170574'; 

export const login = (info={}) => ({
  type: 'LOGIN',
  info
});

export const startLogin = (navigate) => {
  return async (dispatch) => { 
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v3.2/dialog/oauth?response_type=token` +
        `&client_id=${FB_APP_ID}` +
        `&scope=email%20user_birthday` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    
    if(result.type == "success"){
      let access_token = result.params.access_token;
      console.log(result)
      let data = await fetch(`https://graph.facebook.com/v3.2/me?fields=id,name,birthday,email,picture.type(large)&access_token=${access_token}`)
      newDat = await data.json()

      let userProfile = await api.post('/auth/newUser',{body:newDat})
      dispatch(login(userProfile.body))
    }
    return result.type
  };
      
  };


export const logout = () => ({
  type: 'LOGOUT'
});


export const startLogout = () => {
    return (dispatch) => {
      window.location= '/auth/logout';
    };
  };
  