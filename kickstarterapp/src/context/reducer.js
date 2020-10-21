export const ADD_CAMPAIGN = "ADD_CAMPAIGN";
export const EDIT_CAMPAIGN = "EDIT_CAMPAIGN";
export const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";
export const SET_CURRENT_CAMPAIGN = "SET_CURRENT_CAMPAIGN";


export function CampaignReducer(state, action){
    switch(action.type){
        case ADD_CAMPAIGN:
            return {
                ...state,
              campaign: [state.campaign, action.payload]
            }
        case DELETE_CAMPAIGN:
            const deletedCampaign = state.campaign.filter(
                cam => cam.campaign_id !== action.payload
            );

            return {
                ...state,
                campaign: deletedCampaign
            }
        case EDIT_CAMPAIGN:
                const updateCampaign = {
                    ...state.currentCampaign,
                    campaign: action.payload
                }

                const updatedCampaignIndex = state.campaign.findIndex(
                    cam => cam.campaign_id === state.currentCampaign.campaign_id
                )

                const updatedCam = [
                    ...state.campaign.slice(0, updatedCampaignIndex),
                    updateCampaign,
                    ...state.campaign.slice(updatedCampaignIndex + 1)
                ];

                return {
                    currentCampaign: null,
                    campaign: updatedCam
                };
        case SET_CURRENT_CAMPAIGN:
                return {
                    ...state,
                    currentCampaign: action.payload
                };
        default:
            return state;
    }
}

export default CampaignReducer;