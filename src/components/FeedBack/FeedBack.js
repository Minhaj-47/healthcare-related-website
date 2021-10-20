// this is our feedback component ,basically it is form to get feedback , 
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FeedBack = () => {
    return (
        <div className="d-flex justify-content-center align-items-center my-5">
            <div className="shadow-lg p-3 mb-5 bg-body rounded w-50 ">
                <h3 className="border border-1 border-dark p-2 mb-3 rounded bg-secondary text-white">Give Your Valueable Feedback Here</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="d-flex flex-start fw-bold">Your Email address:</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="d-flex flex-start fw-bold">Write Feedback:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="secondary">Submit</Button>
                </Form> 
            </div>
        </div>
    );
};

export default FeedBack;