import React, {createContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { axiosWithAuth, getToken} from '../utils';




export const KickStartContext = createContext(); 

export const KickStartProvider = (props) => {


const {id} = useParams();

  
return <KickStartContext.Provider >{props.children}</KickStartContext.Provider>

}



export default KickStartProvider;
