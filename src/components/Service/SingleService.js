import React from 'react';

const SingleService = (props) => {
    const { name, img, description } = props.service || {};

    return (
        <div>
            <img src = {img} alt=" "/>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default SingleService;