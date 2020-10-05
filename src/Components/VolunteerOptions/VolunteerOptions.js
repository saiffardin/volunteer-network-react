import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';

const VolunteerOptions = () => {

    let history = useHistory();

    const joinCampaignHandler = (activityName) => {
        console.log('join campaign clicked');
        console.log(activityName);

        history.push(`/Register/${activityName}`);
    }

    const allOptions = [
        { img: 'https://i.ibb.co/hKHhwcb/1-child-Support.png', title: 'Child Support' },
        { img: 'https://i.ibb.co/N7XM405/2-clean-Water.png', title: 'Clean Water' },
        { img: 'https://i.ibb.co/LrmdtLD/3-refuse-Shelter.png', title: 'Refuse Shelter' },
        { img: 'https://i.ibb.co/jDVL0cp/4-food-Charity.png', title: 'Food Charity' },

        { img: 'https://i.ibb.co/MPRPNBk/5-stuffed-Animals.png', title: 'Stuffed Animal' },
        { img: 'https://i.ibb.co/z7KJkJF/6-good-Education.png', title: 'Good Education' },
        { img: 'https://i.ibb.co/PQKdYXD/7-ITHelp.png', title: 'IT Help' },
        { img: 'https://i.ibb.co/KjgVfy0/8-library-Books.png', title: 'Library Books' },

        { img: 'https://i.ibb.co/Bsvj6Lk/9-school-Suffiles.png', title: 'School Supplies' },
        { img: 'https://i.ibb.co/LnSpV9S/10-clearn-Park.png', title: 'Clean Park' },
        { img: 'https://i.ibb.co/3BXZNDy/11-cloth-Swap.png', title: 'Cloth Swap' },
        { img: 'https://i.ibb.co/KywMDMh/12-vote-Register.png', title: 'Vote Register' }
    ]

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {
                allOptions.map((singleOption) =>
                    <SingleCard item={singleOption}>
                        <Button onClick={()=>{joinCampaignHandler(singleOption.title)}} variant="primary">Join Campaign</Button>
                    </SingleCard>
                )
            }

        </div>
    );
};

export default VolunteerOptions;