import React, {useContext} from 'react';
import { KickStartContext } from '../context';
import UserContent from '../pages/userContent';




export default function CampaignList() {
    const {state} = useContext(KickStartContext);

    return (
        <div>
            {state.map((cam, i) => {
                return <UserContent campaign={cam} key={i} />
            })}
        </div>
    )
}