import React from 'react';
import SingleService from '../Service/SingleService';
import { useEffect, useState } from 'react';

const ServiceHome = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div>
            {
                services.map(service =>
                    <SingleService
                        key={service.id}
                        service={service}
                    >

                    </SingleService>)
            }
        </div>
    );
};

export default ServiceHome;

