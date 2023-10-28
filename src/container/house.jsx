import React, { useEffect, useState, Fragment } from "react";
import Card from "../component/card/card";
import './house.scss';
import HouseView from "../component/house/houseView";
import HouseFilter from "../component/house/houseFilter";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button } from '@mui/material';
import AtomicSpinner from 'atomic-spinner'

const House = (props) => {
    const [filteredData, setFilteredData] = useState([]);
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/cdn.number8.com/LA/listings.json')
            .then((response) => response.json())
            .then((response) => {
                setData(response ?? []);
                setFilteredData(response ?? []);
                let maxPrice = getMaxPrice(response);
                setMaxPrice(maxPrice);
                setFilter({ ...filter, price: maxPrice });
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert(error.message);
            });
    }, []);

    const cardItems = () => {
        if (filteredData.length === 0)
            return <h2>No Results</h2>;

        return filteredData.map((item) =>
            <Card key={item.Id} item={item} setSelectedHouse={setSelectedHouse} />
        );
    }; 

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
            openFilter ? <HouseFilter filter={filter} setFilter={setFilter} setFilteredData={setFilteredData} maxPrice={maxPrice} data={data} /> : <></>
        )
    };

    return (
        selectedHouse ?
            <div className='houseContainer'>
                <button className='filterBtn' onClick={getBack}>Back</button>
                <HouseView house={selectedHouse} setSelectedHouse={setSelectedHouse} data={data} setData={setData} filteredData={filteredData} setFilteredData={setFilteredData} />
            </div>
            :
            <Fragment>
                <h2 className='title'>Houses Available</h2>
                <Button color='primary' onClick={() => setOpenFilter(!openFilter)}>
                    <FilterListIcon />
                    Filter
                </Button>
                {getFilter()}
                {
                    loading ? <div className='atomicSpiner'><AtomicSpinner className='atomicSpiner' /></div>
                        :
                        <div className='container'>
                            {cardItems()}
                        </div>
                }
            </Fragment>
    );
}

export default House;