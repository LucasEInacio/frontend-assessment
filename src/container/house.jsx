import React, { useEffect, useState } from "react";
import Card from "../component/card";
import './house.scss';

const House = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/cdn.number8.com/LA/listings.json')
            .then((response) => response.json())
            .then((response) => {
                setData(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const cardItems = data.map((item) =>
        <Card key={item.Id} id={item.Id} url={item.ThumbnailURL} title={item.Title} location={item.Location} bedrooms={item.Bedrooms}
            bathrooms={item.Bathrooms} salePrice={item['Sale Price']} />
    );

    return (
        <div className='container'>
            <h2>Houses Available</h2>
            {cardItems}
        </div>
    );
}

export default House;