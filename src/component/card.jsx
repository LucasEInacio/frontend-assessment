import React from "react";

const Card = (props) => {
    const viewDetails = () => {
        props.setSelectedHouse(props.item);
    };

    return (
        <div className='card'>
            <div className='cardImg'>
                <img src={props.item.ThumbnailURL} alt={props.item.Title} />
            </div>
            <div className='cardHeader'>
                <h3>{props.item.Title}</h3>
                <p>{props.item.Location}</p>
                <p>{props.item.Bedrooms + ' beds | ' + props.item.Bathrooms + ' bath'}</p>
                <p className='price'>{'$' + props.item['Sale Price']}</p>
                <button className='btn' onClick={viewDetails}>View Details</button>
            </div>
        </div>
    );
}

export default Card;