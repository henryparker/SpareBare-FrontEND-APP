
import {api,url} from '../api';
// const { manifest } = Expo.Constants;
// const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
//   ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
//   : `api.example.com`;

export const setSubscribe = (data={})=>({
    type: 'SET_SUBSCRIBE',
    data
})
export const addSubscribe = (data={})=>({
    type: 'ADD_SUBSCRIBE',
    data
})

export const removeSubscribe = (data={})=>({
    type: 'REMOVE_SUBSCRIBE',
    data
})

export const startAddSubscribe = (data) => {
    return async (dispatch,getState) => {
        let auth = getState().auth;
        let response = await api.post('/subscription',{body:{auth,data}});
        console.log(response.body)
        dispatch(addSubscribe(data))
    };
        
    };


export const startRemoveSubscribe = (data) =>{
    return async (dispatch,getState) => {
        let auth = getState().auth;
        // let response = await api.del('/subscription',{body:{auth,data}});
        const formData = new FormData();
        await formData.append('auth',auth);
        await formData.append('data',data);
        let response = await fetch(`http://${url}/subscription`,{
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({auth,data})
        })
        console.log(response.body)
        dispatch(removeSubscribe(data))
}
}
export const startSetSubscribe = ()=>{
    return async(dispatch,getState) =>{
        let _id = getState().auth.info._id;
        let subscriptionList = await api.get('/subscription',{
            headers:{
                'auth':_id
            }
        });
        dispatch(setSubscribe(subscriptionList.body.map(val=>val.subscribeToCampaign)))
        console.log("=========================fdffsfklsfksdf==========================");
    }
}
