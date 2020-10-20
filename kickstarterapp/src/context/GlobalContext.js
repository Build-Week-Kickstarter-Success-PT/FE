import React, { useReducer } from "react";
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
