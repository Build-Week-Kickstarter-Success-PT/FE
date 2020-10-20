import React, { useContext, useReducer } from "react";
import {
  CampaignReducer,
  KickStartContext,
  ADD_CAMPAIGN,
  DELETE_CAMPAIGN,
  EDIT_CAMPAIGN
} from "./index";
import { axiosWithAuth } from "../utils";
import { useHistory, useParams } from "react-router-dom";

export const GlobalProvider = ({ children }) => {

  const updateContext = useContext(KickStartContext);
  const [state, dispatch] = useReducer(CampaignReducer, updateContext);

  const history = useHistory();
  

  const id = useParams();
  const campaign = useParams();

  function createCampaign(campaign) {
    axiosWithAuth()
      .post(`/api/users/${campaign.user_id}`, campaign)
      .then((res) => {
        console.log(res);
        history.push(`/user/${res.data.user_id}/campaigns`);
      })
      .catch((err) => console.error("bk: Prediction: Error: ", err.message));
    dispatch({
      type: ADD_CAMPAIGN,
      payload: campaign,
    });
  }

  function deleteCampaign({id}) {
      axiosWithAuth().delete(` /api/users/${id.user_id}/campaigns/${id.campaign_id}`)
      .then((res) => {
            console.log(res) 
            history.push(`/user/${res.data.user_id}`);
      }).catch(err => console.error('Delete Request Error: ', err))
     dispatch({
      type: DELETE_CAMPAIGN,
      payload: id.campaign_id,
    });
  }

  function editCampaign({campaign}) {

    axiosWithAuth().put(`/api/users/${campaign.user_id}/campaigns/${campaign.campaign_id}`, campaign)
    .then((res) => {
        console.log(res)
        history.push(`/user/${res.data.user_id}/campaigns/${res.data.campaign_id}`);
        
    })
    .catch(err => console.error('Edit Error: ', err))
    dispatch({
            type: EDIT_CAMPAIGN,
            payload: campaign,
            });
  }

  return (
    <KickStartContext.Provider
      value={{
        campaign: state.campaign,
        createCampaign,
        editCampaign,
        deleteCampaign,
        dispatch,
        state
      }}
    >
      {children}
    </KickStartContext.Provider>
  );
};

export default GlobalProvider;
