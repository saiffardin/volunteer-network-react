import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleCard = props => {

    const { img, title } = props.item;

    console.log(img);
    console.log(title);


    return (
        <Card className='m-5' style={{ width: '15rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {props.children}
            </Card.Body>
        </Card>
    );
};

export default SingleCard;