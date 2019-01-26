
import axios from 'axios';
import request from 'superagent';
import * as Expo from "expo";
import {api} from '../api';
// const { manifest } = Expo.Constants;
// const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
//   ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
//   : `api.example.com`;

export const setCampaign = (data={})=>({
    type: 'SET_CAMPAIGN',
    data
})
export const addCampaign = (data={})=>({
    type: 'ADD_CAMPAIGN',
    data
})
export const startAddCampaign = (data) => {
    return async (dispatch,getState) => {
        auth = getState().auth
        console.log(api)

    object = {"cat":"dog"}
    console.log(object)
    let val = await api.post(`/campaign`,{body:{auth,data}})
    dispatch(addCampaign(val.body))
    };
        
    };
export const startSetCampaign = ()=>{
    return async(dispatch,getState) =>{
        let val = await api.get('/campaign')
        dispatch(setCampaign(val.body))
        console.log("=========================fdffsfklsfksdf==========================");
    }
}