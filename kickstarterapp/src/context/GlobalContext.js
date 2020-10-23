import React, { useReducer, useState, useEffect } from "react";
import {
  CampaignReducer,
  KickStartContext,
  initialState,
  ADD_CAMPAIGN,
  DELETE_CAMPAIGN,
  SET_CURRENT_CAMPAIGN
} from "./index";
import { axiosWithAuth, setToken } from "../utils";
import { useHistory, useParams } from "react-router-dom";

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CampaignReducer, initialState);



  const user_id = useParams();
  const campaign_id = useParams();
  const history = useHistory();

 

  function createCampaign(campaign) {
    axiosWithAuth()
      .post(`/api/users/${campaign.user_id}/campaigns`, campaign)
      .then((res) => {
        console.log(res);
        history.push(`/user/${res.data.user_id}`);
      })
      .catch((err) => console.error("bk: Prediction: Error: ", err.message));
    dispatch({
      type: ADD_CAMPAIGN,
      payload: campaign,
    });
  }

  function deleteCampaign(campaign) {
      console.log(campaign)
      axiosWithAuth()
      .delete(`/api/users/${campaign.user_id}/campaigns/${campaign.campaign_id}`)
      .then(res => {
          console.log(res.data)
      })
      .catch(err => {
          console.log(err)
      })
    dispatch({
      type: DELETE_CAMPAIGN,
      payload: campaign.campaign_id,
    });
  }

  function editCampaign(campaign) {
      console.log(campaign)
        axiosWithAuth()
        .put(`/api/users/${campaign.user_id}/campaigns/${campaign.campaign_id}`, {
            campaign_name: campaign.campaign_name,
            goal: campaign.goal,
            description: campaign.description,
            campaign_length: campaign.campaign_length,
            category: campaign.category,
            sub_category: campaign.sub_category,
            country: campaign.sub_category
        })
        .then(res => {
                console.log(res.data)
                history.push(`/user/${res.data.updatedCampaign.user_id}/edit`);        })
        .catch(e => {
            console.log(e);
        })
        dispatch({
      type: SET_CURRENT_CAMPAIGN,
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
        user_id,
        campaign_id,
        state,
        dispatch
      }}
    >
      {children}
    </KickStartContext.Provider>
  );
};

export default GlobalProvider;