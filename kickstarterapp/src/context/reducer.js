const ADD_CAMPAIGN = "ADD_CAMPAIGN";
const EDIT_CAMPAIGN = "EDIT_CAMPAIGN";
const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";


export function CampaignReducer(state, action){
    switch(action.type){
        case ADD_CAMPAIGN:
            return {
                ...state,
                campaign_id: action.payload
            }
        case DELETE_CAMPAIGN:
            const deletedCampaign = state.campaigns.filter(
                cam => cam.campaign_id != action.payload
            );

            return {
                ...state,
                campaigns: deletedCampaign
            }
        case EDIT_CAMPAIGN:
                const updateCampaign = {
                    ...state.updatedCampaign,
                    campaign_id: action.payload
                }

                const updatedCampaignIndex = state.updatedCampaign.findIndex(
                    cam => cam.campaign_id === state.campaign_id
                )

                const updatedCam = [
                    ...state.updatedCampaign.slice(0, updatedCampaignIndex),
                    updateCampaign,
                    ...state.campaign_id.slice(updatedCampaignIndex + 1)
                ];

                return {
                    campaign_id: null,
                    updatedCampaign: updatedCam
                }
        default:
            return state;
    }
}

export default CampaignReducer;