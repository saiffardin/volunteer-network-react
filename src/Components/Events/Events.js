import React, {useContext, useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {UserContext} from '../../App';
import SingleEvent from '../SingleEvent/SingleEvent';


const Events = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [activities, setActivities] = useState([]);

    const email = loggedInUser.email;

    useEffect(() => {
        fetch(`https://volunteer-network-server.up.railway.app/find/:${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setActivities(data);
            })
    }, [activities])


    const cancelEvent = (activity) => {
        console.log("cancel event clicked");
        console.log(activity);
        // /delete/:id

        const id = activity._id;
        console.log('id:', id);



        fetch(`https://volunteer-network-server.up.railway.app/delete/${id}`, {method: 'DELETE'})
            .then((res) => res.json())
            .then((data) => {
                console.log('deleted successfully');
            })
    }


    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {
                activities.length > 0
                    ?
                    activities.map((activity) =>
                        <SingleEvent key={activity._id} activity={activity}>
                            <Button onClick={() => {cancelEvent(activity)}} variant="danger">Cancel</Button>
                        </SingleEvent>
                    )
                    :
                    <h1>You have not joined any campaign yet !!</h1>
            }
        </div>
    );
};

export default Events;