import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {axiosWithAuth} from '../utils';



function UserContent() {


    
    const [campaign, setCampaign] = useState([]);

        const user_id = useParams()

    useEffect(() => {
        
        axiosWithAuth().get(`/api/users/${user_id.id}/campaigns`)
        .then(res => {
            console.log(res.data);
                setCampaign(res.data);
        })
        .catch(error => console.log("Unable to fetch data: ", error))
    
    }, [])
  
    return (
        <div>
           
        </div>
    )
}

export default UserContent;
