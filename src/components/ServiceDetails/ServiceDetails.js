// by clicking view more buttom you can see this dynamic route information
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { servicesId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Minhaj-47/json/main/services.json')
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            });
    }, []);
    const SingleService = details.filter(service => service.key === servicesId);
    return (
        <div>
            <Col className='mx-auto'>
                <Card className="shadow-lg  bg-body rounded">
                    <Card.Img variant="top"className="w-100" src={SingleService[0]?.img} />
                    <Card.Body>
                    <Card.Title >{SingleService[0]?.servicename}</Card.Title>
                    <Card.Text className="text-start">
                        {SingleService[0]?.aboutservice}
                        <p className="fw-bolder">ExtraInfo:{SingleService[0]?.extraDetails}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
             </Col>
        </div>
    );
};

export default ServiceDetails;