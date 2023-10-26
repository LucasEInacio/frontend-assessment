import React from "react"; 

const HouseView = (props) => {

    return (
        <>
            <div>
                <div>
                    <h2>{props.house.title}</h2>
                    <p>{props.house.location}</p>
                </div>
                <div>
                    <h2>{props.house['Sale Price']}</h2>
                    <p>{ 'Date Listed: ' + props.house.DateListed}</p>
                </div>
                <img src={props.house.PictureURL} alt={props.house.title}></img>
                <div>
                    <h2>{props.house.Bedrooms}</h2>
                    <p>BED</p>
                    <h2>{props.house.Bathrooms}</h2>
                    <p>BATH</p>
                    <h2>{props.house.Parking}</h2>
                    <p>PARKING</p>
                    <h2>{props.house.Sqft}</h2>
                    <p>SQFT</p>
                    <h2>{props.house.YearBuilt}</h2>
                    <p>YEAR BUILT</p>
                </div>
                <div>
                    <p>{props.house.Description}</p>
                </div>
            </div>
            <div>

            </div>
        </>
    );
};

export default HouseView;