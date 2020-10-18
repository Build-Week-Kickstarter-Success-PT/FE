import {createContext} from 'react';


export const initialState = {

    currentCampaign: null,
campaign: [
 {   campaign_id: 1,
    campaign_name: "Sample Campaign Name",
    goal: 10000,
    description: "Sample description",
    campaign_length: 20,
    category: "Sample Category",
    user_id: 1
 }]

}


export const KickStartContext = createContext(initialState); 





export default KickStartContext;
