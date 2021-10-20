// single member information are here
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleMember = ({member}) => {
    const{Name,postName,img}=member;
    return (
        <div>
            <Col>
                <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className='fw-bolder' >{Name}</Card.Title>
                    <Card.Text className="text-start fw-bolder">
                    <h3 >Postname:{postName}</h3>
                    </Card.Text>
                    </Card.Body>
                </Card>
             </Col>
            
        </div>
    );
};

export default SingleMember;