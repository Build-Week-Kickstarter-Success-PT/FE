import React, {useContext} from 'react';
import { KickStartContext } from '../context';
import UserContent from '../pages/userContent';
import {Link} from 'react-router-dom';



export default function CampaignList() {
    const {state} = useContext(KickStartContext);

    return (
        <div>
                <Link to="/prediction"> <button>Make Prediction</button> </Link>
            {state.campaign.map((cam, i) => {
                return <UserContent campaign={cam} key={i} />
            })}
        </div>
    )
}