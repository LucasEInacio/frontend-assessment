import React, { useEffect, useState } from "react";
import Card from "../component/card";
import './house.scss';
import HouseView from "../component/house/houseView";
import HouseFilter from "../component/house/houseFilter";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button } from '@mui/material';

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
    const [openFilter, setOpenFilter] = useState(false);

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

    const cardItems = filteredData.map((item) =>
        <Card key={item.Id} item={item} setSelectedHouse={setSelectedHouse} data={data}  />
    );

    const getMaxPrice = (list) => {
        if (list) {
            let prices = list.map((item) => item['Sale Price']);
            let maxPrice = Math.max(...prices);
            return maxPrice;
        }

        return 0;
    };

    const getBack = () => {
        setSelectedHouse(null);
    };

    const getFilter = () => {
        return (
            openFilter ? <HouseFilter filter={filter} setFilter={setFilter} setfilteredData={setfilteredData} maxPrice={maxPrice} /> : <></>
        )
    };

    return (
        selectedHouse ?
            <div className='houseContainer'>
                <button className='filterBtn' onClick={getBack}>Back</button>
                <HouseView house={selectedHouse} />
            </div>
            :
            <>
                <h2 className='title'>Houses Available</h2>
                <Button color='primary' onClick={() => setOpenFilter(!openFilter)}>
                    <FilterListIcon />
                    Filter
                </Button>
                {getFilter()}
                <div className='container'>
                    {cardItems}
                </div>
            </>
    );
}

export default House;