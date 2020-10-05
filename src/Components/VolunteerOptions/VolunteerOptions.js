import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import SingleCard from '../SingleCard/SingleCard';

const VolunteerOptions = () => {

    let history = useHistory();
    const [allOptions, setAllOptions] = useState([]);

    const joinCampaignHandler = (activity) => {

        const activityName = activity.title;
        
        console.log('join campaign clicked');
        console.log(activityName);

        history.push(`/Register/${activityName}`);
    }


    useEffect(() => {
        fetch('http://localhost:5000/loadAll')
            .then(response => response.json())
            .then(data => {
                const arr = [...data];
                setAllOptions(arr);
                // console.log('load complete.\n');
                // console.log(arr);

            })
            .catch(err => {
                console.log(err);
                console.log('Jhamela hoise react')
            })
    }, [])





    return (
        <div className='d-flex flex-wrap justify-content-center'>

            {
                allOptions.map((singleOption) =>
                    <SingleCard key ={singleOption._id} item={singleOption}>
                        <Button onClick={() => { joinCampaignHandler(singleOption) }} variant="primary">Join Campaign</Button>
                    </SingleCard>
                )
            }

        </div>
    );
};

export default VolunteerOptions;