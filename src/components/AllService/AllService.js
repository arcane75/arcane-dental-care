import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const AllService = (props) => {
    const { name, img, description} = props.allservice || {};
    return (
        <>
        <MenuBar></MenuBar>
        <div>
            <img src = {img} alt=" "/>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
        <Footer></Footer>
        </>
    );
};

export default AllService;
