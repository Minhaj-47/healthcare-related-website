// all services are here
import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] =useServices();
    return (
        <div>
             <h4 className="border border-1 border-dark p-2 mt-3 rounded bg-secondary text-white w-25 mx-auto">ALL<span>Services</span> </h4>
            <Row xs={1} md={2} className="g-4 mt-2">
                {
                    services.map(service=><Service
                    key={service.key}
                    service={service}></Service>)
                }        
            </Row>
            
        </div>
    );
};

export default Services;
