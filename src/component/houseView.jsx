import React from "react"; 

const HouseView = (props) => {

    return (
        <>
            <div>
                <div>
                    <h2>{props.house.Title}</h2>
                    <p>{props.house.Location}</p>
                </div>
                <div>
                    <h2>{props.house['Sale Price']}</h2>
                    <p>{'Date Listed: ' + new Date(props.house.DateListed).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</p>
                </div>
                <img src={props.house.PictureURL} alt={props.house.Title}></img>
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