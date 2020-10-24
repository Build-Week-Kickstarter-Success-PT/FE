import React, { useReducer } from "react";
import {
  CampaignReducer,
  KickStartContext,
  initialState,
  ADD_CAMPAIGN,
  DELETE_CAMPAIGN,
  EDIT_CAMPAIGN,
} from "./index";
import { axiosWithAuth } from "../utils";
import { useHistory } from "react-router-dom";

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CampaignReducer, initialState);

  const history = useHistory();

  function createCampaign(campaign) {
    let newCampaign = {};

    axiosWithAuth()
      .post(`/api/users/${campaign.user_id}/campaigns`, campaign)
      .then((res) => {
        console.log(res);
        history.push(`/user/${res.data.user_id}`);
        newCampaign = { ...campaign, campaign_id: res.data.id };
        console.log("New Campaign: ", newCampaign);
        dispatch({
          type: ADD_CAMPAIGN,
          payload: newCampaign,
        });
      })
      .catch((err) => console.error("bk: Prediction: Error: ", err.message));
  }

  function deleteCampaign(campaign) {
    axiosWithAuth()
      .delete(
        `/api/users/${campaign.user_id}/campaigns/${campaign.campaign_id}`
      )
      .then((res) => {
        console.log(res);
        //history.push(`/user/${campaign.user_id}`)
      })
      .catch((err) => console.error("bk: Can't update post: ", err.message));
    dispatch({
      type: DELETE_CAMPAIGN,
      payload: campaign.campaign_id,
    });
  }

  function editCampaign(campaign) {
    console.log("Edit Campaign: ", campaign);
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
      }}
    >
      {children}
    </KickStartContext.Provider>
  );
};

export default GlobalProvider;
