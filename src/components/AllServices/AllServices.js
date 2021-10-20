import React from 'react';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';

const AllServices = () => {
    const [allservices, setAllservices] = useState([]);

    useEffect(() => {
        fetch('/allservices.json')
            .then(res => res.json())
            .then(data => setAllservices(data))
    }, [])
    return (
        <div>
            {
                allservices?.map(allservice =>
                    <AllService
                        key={allservice.id}
                        allservice={allservice}
                    >

                    </AllService>)
            }
            <Footer></Footer>
        </div>
    );
};

export default AllServices;