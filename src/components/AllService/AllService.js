import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const AllService = (props) => {
    const { name, img, description} = props.allservice || {};
    return (
        <>
        <div>
            <img src = {img} alt=" "/>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
        </>
    );
};

export default AllService;
