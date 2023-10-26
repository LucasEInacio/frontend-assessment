import React from "react";

const Card = (props) => {
    return (
        <div className='card'>
            <div className='cardImg'>
                <img src={props.url} alt={props.title} />
            </div>
            <div className='cardHeader'>
                <h3>{props.title}</h3>
                <p>{props.location}</p>
                <p>{props.bedrooms + ' beds | ' + props.bathrooms + ' bath'}</p>
                <p className='price'>{'$' + props.salePrice}</p>
                <button className='btn'>View Details</button>
            </div>
        </div>
    );
}

export default Card;