export const ADD_CAMPAIGN = "ADD_CAMPAIGN";
export const EDIT_CAMPAIGN = "EDIT_CAMPAIGN";
export const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";

export function CampaignReducer(state, action) {
  switch (action.type) {
    case ADD_CAMPAIGN:
      console.log("State Campaign: ", state.campaign);
      console.log("Action Payload: ", action.payload);
      return {
        ...state,
        campaign: [...state.campaign, action.payload],
      };
    case DELETE_CAMPAIGN:
      console.log("State Campaign: ", state.campaign);
      console.log("Action Payload: ", action.payload);
      const deletedCampaign = state.campaign.filter(
        (cam) => cam.campaign_id !== action.payload
      );

      return {
        ...state,
        campaign: deletedCampaign,
      };
    case EDIT_CAMPAIGN:
        console.log("EDIT PAYLOAD :", action.payload);
      const updateCampaign = {
        ...state, currentCampaign:action.payload
      };
      console.log("UPDATE :", updateCampaign);

      const updatedCampaignIndex = state.campaign.findIndex(
        (cam) => cam.campaign_id === updateCampaign.currentCampaign.campaign_id
      );

      console.log("UPDATE INDEX :", updatedCampaignIndex);

      const updatedCam = [
        ...updateCampaign.campaign.slice(0, updatedCampaignIndex),
        updateCampaign.currentCampaign,
        ...updateCampaign.campaign.slice(updatedCampaignIndex + 1),
      ];

      console.log("updated Cam :", {
        currentCampaign: null,
        campaign: updatedCam,
      });

      return {
        currentCampaign: null,
        campaign: updatedCam,
      };
    default:
      return state;
  }
}

export default CampaignReducer;
