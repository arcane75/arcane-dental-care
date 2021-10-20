import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const AllService = (props) => {
    const { name, email, phone} = props.allservice || {};
    return (
        <>
        <MenuBar></MenuBar>
        <div>
            <h5> {email} </h5>
            <h4>{name}</h4>
            <p>{phone}</p>
        </div>
        <Footer></Footer>
        </>
    );
};

export default AllService;
