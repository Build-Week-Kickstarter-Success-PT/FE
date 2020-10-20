import React, {useEffect, useContext, useState} from 'react';
import { KickStartContext } from '../context';
import {axiosWithAuth} from '../utils';
import {useParams} from 'react-router-dom';



function UserContent() {


    

    const {campaign} = useContext(KickStartContext);
    const [campaignData, setCampaignData] = useState([])
    const {uid} = useParams();

  

    console.log(campaign)
   

    useEffect(() => {
        
        axiosWithAuth().get(`/api/users/${uid}/campaigns`)
        .then(res => {
            console.log(res.data);
            setCampaignData(res.data)
        })
        .catch(error => console.log("Unable to fetch data: ", error))
    
    }, [])

  
  
    return (
        <div>
     {campaignData.map((cam) => (
         <div>
             {cam.campaign_name}
         </div>
     ))}
        </div>
    )
}

export default UserContent;
