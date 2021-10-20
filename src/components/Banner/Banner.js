import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner-pic1.jpg';
import banner2 from '../../images/banner-pic2.jpg';
const Banner = () => {
    return (
        <div>
            <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="pb-md-2 mb-md-2 text-center">
                                    <h1 className="fs-md-1 text-warning my-3">LET US PROTECT YOUR HEALTH</h1>
                                    <Button className="btn btn-warning px-2 rounded">See More </Button>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <div className="pb-md-2 mb-md-2 text-center">
                                    <h1 className="fs-md-1 text-warning my-3">LET US PROTECT YOUR HEALTH</h1>
                                    <Button className="btn btn-warning px-2 rounded">See More </Button>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
    </Carousel>
</div> 
    );  
};

export default Banner;