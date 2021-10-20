import React from 'react';
import { Button } from 'react-bootstrap';
import AllServices from '../AllServices/AllServices';

import './SingleService.css';

const SingleService = (props) => {
    const { name, img, description } = props.service || {};
    const {} = AllServices();
 
    return (
        <>
            <div className="home-service">
                <div >
                    <img src={img} alt=" " />
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Button className="btn-md btn btn-warning">Explore item</Button>
                </div>
            </div>

        </>
    );
};

export default SingleService;