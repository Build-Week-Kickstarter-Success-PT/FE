import React, {useEffect, useState, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { KickStartContext } from '../context';
import {axiosWithAuth} from '../utils';



function UserContent() {


    
    const [campaign, setCampaign] = useState([]);

    const {state, dispatch} = useContext(KickStartContext);

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
           <Link to="/prediction"> <button>Make Prediction</button> </Link>
        </div>
    )
}

export default UserContent;
