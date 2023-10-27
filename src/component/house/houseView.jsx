import React, { useState } from "react"; 
import './houseView.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HouseView = (props) => {
    const [liked, setLiked] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        comments: ''
    });

    const validateForm = () => {

    };

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
                <div className='likeDiv'>
                    <button className='saveBtn' onClick={() => { setLiked(!liked) }}>
                        { liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                        Save Property
                    </button>
                </div>
                <div className='contactForm'>
                    <form>
                        <input className='formField' placeholder='Full Name *' value={form.name} onChange={(event) => setForm({...form, name: event.target.value})}></input>
                        <input className='formField' placeholder='Email *' type='email' value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })}></input>
                        <input className='formField' placeholder='Phone Number *' type='number' value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })}></input>
                        <textarea className='formFieldMultiline' rows="5" cols="30" placeholder='Comments *' value={form.comments} onChange={(event) => setForm({ ...form, comments: event.target.value })}></textarea>

                        <button className='contactBtn' onClick={(event) => { event.preventDefault(); alert('Contact Done!' + JSON.stringify(form)) }} >
                            Contact Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HouseView;