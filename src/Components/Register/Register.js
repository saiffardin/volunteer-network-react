import React, { useContext, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [validated, setValidated] = useState(false);

    let { activityName } = useParams();
    let history = useHistory();

    let email = loggedInUser.email;
    let name = loggedInUser.displayName;

    console.log('activityName : ', activityName);
    console.log('Name : ', name);
    console.log('Email : ', email);

    // let destination = props.destination;




    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        setValidated(form.checkValidity());

        console.log('validate form: ', form.checkValidity());
        console.log('validate: ', validated);

        if (form.checkValidity()) {
            // history.push('/afterLogin');
            console.log("Goto next page : After Reg");

        }
        else {
            event.stopPropagation();
            alert('Fill Up the from properly.');
        }
    };


    const bookingFormStyle = {
        border: '1px solid black',
        width: '500px',
        padding: '20px',
    }


    return (
        <div className="d-flex flex-column justify-content-center align-items-center my-5">

            <Form noValidate validated={validated} onSubmit={handleSubmit} style={bookingFormStyle}>

                {/* Full Name */}
                <Form.Row >
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            readOnly
                            required
                            type="text"
                            defaultValue={name}
                            style={{ fontWeight: "bold" }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {/* Email */}
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            readOnly
                            required
                            type="email"
                            defaultValue={email}
                            style={{ fontWeight: "bold" }}

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {/* Date */}
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom03">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                        // onBlur={}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                {/* Description */}
                <Form.Row >
                    <Form.Group as={Col} controlId="validationCustom04">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>


                {/* Volunteering For */}
                <Form.Row >
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>Volunteering For</Form.Label>
                        <Form.Control
                            readOnly
                            required
                            type="text"
                            defaultValue={activityName}
                            style={{ fontWeight: "bold" }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>


                <Button style={{ width: '100%' }} type="submit">Registration</Button>

            </Form>
        </div>
    );
};

export default Register;