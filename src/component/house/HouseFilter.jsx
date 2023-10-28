import React from "react";
import { Slider } from '@mui/material';
import { useSelector } from 'react-redux';
import './houseView.scss';

const HouseFilter = (props) => {
    const houses = useSelector((state) => state.house.houses);
    const search = () => {
        let filtered = houses.filter(x => {
            if (
                (x.Bedrooms == props.filter.bedrooms || props.filter.bedrooms === '')
                && (x.Bathrooms == props.filter.bathrooms || props.filter.bathrooms === '')
                && (x.Parking == props.filter.parking || props.filter.parking === '')
                && (x['Sale Price'] <= props.filter.price)
            )
                return x;
            return null;
        });

        props.setFilteredData(filtered);
    };

    const clearSearch = () => {
        props.setFilter({
            bedrooms: '',
            bathrooms: '',
            parking: '',
            price: getMaxPrice(houses)
        });
        props.setFilteredData(houses);
    };

    const getMaxPrice = (list) => {
        if (list) {
            let prices = list.map((item) => item['Sale Price']);
            let maxPrice = Math.max(...prices);
            return maxPrice;
        }

        return 0;
    };

    return (
        <div className='filter'>
            <div className='filterItem'>
                <p>Bedrooms: </p>
                <input className='numberInput' type="number" id="bedroom" name="bedroom" min="1" value={props.filter.bedrooms} onChange={(event) => props.setFilter({ ...props.filter, bedrooms: event.target.value })} />
            </div>
            <div className='filterItem'>
                <p>Bathrooms: </p>
                <input className='numberInput' type="number" id="bathroom" name="bathroom" min="1" value={props.filter.bathrooms} onChange={(event) => props.setFilter({ ...props.filter, bathrooms: event.target.value })} />
            </div>
            <div className='filterItem'>
                <p>Parking: </p>
                <input className='numberInput' type="number" id="parking" name="parking" min="1" value={props.filter.parking} onChange={(event) => props.setFilter({ ...props.filter, parking: event.target.value })} />
            </div>
            <div className='filterItem'>
                <p>Price Range:</p>
                <Slider
                    className='priceRange'
                    valueLabelDisplay="auto"
                    max={props.maxPrice}
                    value={props.filter.price}
                    step={1000}
                    onChange={(event) => props.setFilter({ ...props.filter, price: event.target.value })} >
                </Slider>
            </div>
            <div className='filterButtons'>
                <button className='filterBtn' onClick={search}>Search</button>
                <button className='filterBtn' onClick={clearSearch}>Clear</button>
            </div>
        </div>
    );
}

export default HouseFilter;