import React from 'react';
import { Card } from 'react-bootstrap';

const SingleEvent = (props) => {

    const { activity } = props;
    // console.log(activity);

    const { activityName, description, date } = activity

    return (
        <div>
            <Card className='m-5' style={{ width: '15rem', backgroundColor: 'whitesmoke'}}>
                <Card.Body>
                    <Card.Title>{activityName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>

                {props.children}
            </Card>

        </div>
    );
};

export default SingleEvent;