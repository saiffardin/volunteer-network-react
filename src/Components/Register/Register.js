import React, {useContext, useState} from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import {useHistory, useParams} from 'react-router-dom';
import {UserContext} from '../../App';

const Register = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [validated, setValidated] = useState(false);

    let {activityName} = useParams();
    let history = useHistory();

    let email = loggedInUser.email;
    let name = loggedInUser.displayName;
    let date = '';
    let description = '';


    const handleBlur = (e) => {
        if (e.target.name === 'date') {
            date = e.target.value
        }

        else if (e.target.name === 'description') {
            description = e.target.value
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        setValidated(form.checkValidity());

        if (form.checkValidity()) {

            // console.log("Goto next page : After Reg");
            const newReg = {name, email, date, description, activityName};

            // console.log(newReg);

            //call add to reg API
            fetch('https://volunteer-network-server.up.railway.app/addNewReg', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newReg)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Registration Clicked. And got stuff from API.");
                    // console.log(data)
                })

            history.push(`/Events`);

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
                            style={{fontWeight: "bold"}}
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
                            style={{fontWeight: "bold"}}

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
                            onBlur={handleBlur}
                            name="date"
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
                            onBlur={handleBlur}
                            name="description"
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
                            style={{fontWeight: "bold"}}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>


                <Button style={{width: '100%'}} type="submit">Registration</Button>

            </Form>
        </div>
    );
};

export default Register;