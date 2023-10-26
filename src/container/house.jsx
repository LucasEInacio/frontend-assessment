import React, { useEffect, useState } from "react";
import Card from "../component/card";
import './house.scss';
import { Slider } from '@mui/material';
import HouseView from "../component/houseView";

const House = (props) => {
    const [filteredData, setfilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({
        bedrooms: '',
        bathrooms: '',
        parking: '',
        price: 0
    });
    const [maxPrice, setMaxPrice] = useState(0);
    const [selectedHouse, setSelectedHouse] = useState(null);

    useEffect(() => {
        fetch('/cdn.number8.com/LA/listings.json')
            .then((response) => response.json())
            .then((response) => {
                setData(response ?? []);
                setfilteredData(response ?? []);
                let maxPrice = getMaxPrice(response);
                setMaxPrice(maxPrice);
                setFilter({ ...filter, price: maxPrice });
            })
            .catch((error) => {
                alert(error.message);
            });
    }, []);

    const getMaxPrice = (list) => {
        if (list) {
            let prices = list.map((item) => item['Sale Price']);
            let maxPrice = Math.max(...prices);
            return maxPrice;
        }

        return 0;
    };

    const cardItems = filteredData.map((item) =>
        <Card key={item.Id} item={item} setSelectedHouse={setSelectedHouse} />
    );

    const search = () => {
        let filtered = data.filter(x => {
            if (
                (x.Bedrooms === filter.bedrooms || filter.bedrooms === '')
                && (x.Bathrooms === filter.bathrooms || filter.bathrooms === '')
                && (x.Parking === filter.parking || filter.parking === '')
                && (x['Sale Price'] <= filter.price)
            )
                return x;
            return null;
        });

        setfilteredData(filtered);
    };

    const clearSearch = () => {
        setFilter({
            bedrooms: '',
            bathrooms: '',
            parking: '',
            price: getMaxPrice(data)
        });
        setfilteredData(data);
    };

    const getBack = () => {
        setSelectedHouse(null);
    };

    return (
        selectedHouse?
            <div>
                <button onClick={getBack}>Back</button>
                <HouseView house={selectedHouse} />
            </div>
            :
            <>
                <h2 className='title'>Houses Available</h2>
                <div className='filter'>
                    <div className='filterItem'>
                        <p>Bedrooms: </p>
                        <input className='numberInput' type="number" id="bedroom" name="bedroom" min="1" value={filter.bedrooms} onChange={(event) => setFilter({ ...filter, bedrooms: event.target.value}) } />
                    </div>
                    <div className='filterItem'>
                        <p>Bathrooms: </p>
                        <input className='numberInput' type="number" id="bathroom" name="bathroom" min="1" value={filter.bathrooms} onChange={(event) => setFilter({ ...filter, bathrooms: event.target.value })} />
                    </div>
                    <div className='filterItem'>
                        <p>Parking: </p>
                        <input className='numberInput' type="number" id="parking" name="parking" min="1" value={filter.parking} onChange={(event) => setFilter({ ...filter, parking: event.target.value })} />
                    </div>
                    <div className='filterItem'>
                        <p>Price Range:</p>
                        <Slider
                            className='priceRange'
                            valueLabelDisplay="on"
                            max={maxPrice}
                            value={filter.price}
                            onChange={(event) => setFilter({ ...filter, price: event.target.value })} >
                        </Slider>
                    </div>
                    <button onClick={search}>Search</button>
                    <button onClick={clearSearch}>Clear</button>
                </div>
                <div className='container'>
                    {cardItems}
                </div>
            </>
    );
}

export default House;