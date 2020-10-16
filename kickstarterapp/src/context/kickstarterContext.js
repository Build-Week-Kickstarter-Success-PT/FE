import React, {createContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axiosWithAuth from '../utils';

const {id} = useParams();
const [campaign, setCampaign] = useState();

const KickStartContext = createContext(

    
    useEffect(() => {
        
        axiosWithAuth().get(`/api/users/${id}/campaigns`)
        .then(res => {
                setCampaign(res.data);
        })
        .catch(error => {"Unable to fetch data: ", error})

    }, [])
    
    ); 



export default KickStartContext;
