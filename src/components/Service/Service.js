import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{img,servicename,aboutservice,key}=service;
    return (
            <Col>
                <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title >{servicename}</Card.Title>
                    <Card.Text className="text-start">
                        {aboutservice}
                    </Card.Text>
                    <Link to={`/service/${key}`}>
                                <Button className="btn btn-outline-dark px-5 border-2 rounded-4 fw-bold btn-secondary text-white">View More</Button>
                            </Link>
                    </Card.Body>
                </Card>
             </Col>
    );
};

export default Service;