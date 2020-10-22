import React, { useReducer, useState, useEffect } from "react";
import {
  CampaignReducer,
  KickStartContext,
  initialState,
  ADD_CAMPAIGN,
  DELETE_CAMPAIGN,
  EDIT_CAMPAIGN,
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

  function deleteCampaign(id) {
    dispatch({
      type: DELETE_CAMPAIGN,
      payload: id,
    });
  }

  function editCampaign(campaign) {
      console.log(campaign)
        axiosWithAuth()
        .put(`/api/users/${campaign.user_id}/campaigns/${campaign.campaign_id}`, campaign)
        .then(res => {
                console.log(res.data)
        })
        .catch(e => {
            console.log(e);
        })
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