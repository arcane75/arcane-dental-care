import React from 'react';
import useFetch from '../../hooks/useFetch';
import SingleService from '../Service/SingleService';

const ServiceHome = () => {
    const [services] = useFetch();
    return (
        <div>
            {
                services.map(service => 
                <SingleService
                key = {service.id}
                service = {service}
                >

                </SingleService>)
            }
        </div>
    );
};

export default ServiceHome;

