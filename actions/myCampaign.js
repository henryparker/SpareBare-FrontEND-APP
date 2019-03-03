
import {api} from '../api';
// const { manifest } = Expo.Constants;
// const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
//   ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
//   : `api.example.com`;

export const setMyCampaign = (data={})=>({
    type: 'SET_MY_CAMPAIGN',
    data
})

export const startSetCampaign = ()=>{
    return async(dispatch,getState) =>{
        let val = await api.get('/campaign')
        dispatch(setCampaign(val.body))
        console.log("=========================fdffsfklsfksdf==========================");
    }
}