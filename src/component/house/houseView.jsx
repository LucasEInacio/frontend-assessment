import React from "react"; 
import './houseView.scss'

const HouseView = (props) => {

    return (
        <div className='houseView'>
            <div className='housePanel'>
                <div className='panelHeaderLeft'>
                    <h2>{props.house.Title}</h2>
                    <p>{props.house.Location}</p>
                </div>
                <div className='panelHeaderRight'>
                    <h2>{ '$' + props.house['Sale Price'] }</h2>
                    <p>{'Date Listed: ' + new Date(props.house.DateListed).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</p>
                </div>
                <div className='panelImg'>
                    <img src={props.house.PictureURL} alt={props.house.Title}></img>
                </div>
                <div className='panelTable'>
                    <div className='panelItem'>
                        <h2>{props.house.Bedrooms}</h2>
                        <p>BED</p>
                    </div>
                    <div className='panelItem'>
                        <h2>{props.house.Bathrooms}</h2>
                        <p>BATH</p>
                    </div>
                    <div className='panelItem'>
                        <h2>{props.house.Parking}</h2>
                        <p>PARKING</p>
                    </div>
                    <div className='panelItem'>
                        <h2>{props.house.Sqft}</h2>
                        <p>SQFT</p>
                    </div>
                    <div className='panelItem'>
                        <h2>{props.house.YearBuilt}</h2>
                        <p>YEAR BUILT</p>
                    </div>
                </div>
                <div className='panelDescription'>
                    <p>{props.house.Description}</p>
                </div>
            </div>
            <div className='contact'>

            </div>
        </div>
    );
};

export default HouseView;