import React from 'react';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';

const AllServices = () => {
    const [allservices, setAllservices] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    
    return (
        <div>
                {
                    allservices?.map(allservice => 
                    <AllService
                    key = {allservice.id}
                    allservice = {allservice}
                    >

                    </AllService>)
                }
            <Footer></Footer>
        </div>
    );
};

export default AllServices;