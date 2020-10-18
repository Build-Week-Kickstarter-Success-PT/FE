import React, {useReducer} from 'react';
import {CampaignReducer, KickStartContext, initialState, ADD_CAMPAIGN, DELETE_CAMPAIGN, EDIT_CAMPAIGN } from './index';
import {axiosWithAuth, setToken} from '../utils';
import { useHistory, useParams } from 'react-router-dom';



export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(CampaignReducer , initialState);
  const id = useParams();
        const history = useHistory();

    function createCampaign(campaign){
        axiosWithAuth().post(`/api/users/${id.user_id}/campaigns`, campaign)
     .then(res => {
       setToken(res.data.token);
       history.push("/user/:id");
         console.log(res);
     })  
     .catch(err =>
       console.error("bk: Prediction: Error: ", err.message)
     );
        dispatch({
            type: ADD_CAMPAIGN,
            payload: campaign
        })
    }

    function deleteCampaign(id) {
        dispatch({
            type: DELETE_CAMPAIGN,
            payload: id
        });
    };
 

    function editCampaign(campaign){
        dispatch({
            type: EDIT_CAMPAIGN,
            payload: campaign
        })
    }

    return (<KickStartContext.Provider value={{
        campaign: state.campaign,
        createCampaign,
        editCampaign,
        deleteCampaign
    }}>
        {children}
    </KickStartContext.Provider>);
}


export default GlobalProvider;