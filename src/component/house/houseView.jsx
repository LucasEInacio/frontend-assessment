import React, { useState, useEffect } from "react"; 
import './houseView.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WithNotify from '../_highOrder/withNotify';
import Validator from 'validator';
import HouseModal from './houseModal';

const HouseView = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        comments: ''
    });

    const likeHouse = () => {
        let selectedHouse = { ...props.house, liked: !props.house.liked };
        props.setSelectedHouse(selectedHouse);
        props.data.forEach(x => { if (x.Id === selectedHouse.Id) x.liked = !x.liked; });
        props.setData(props.data);

        setModalOpen(true);
    };

    const contactNow = (event) => {
        event.preventDefault();

        if (validateForm())
            props.notify('Message sent successfully', 'success');
    };

    const validateForm = () => {
        if (!form.name.trim()) {
            props.notify('Name required!', 'error');
            return false;
        }

        if (!form.email.trim()) {
            props.notify('Email required!', 'error');
            return false;
        }

        if (!Validator.isEmail(form.email)) {
            props.notify('Email not valid!', 'error');
            return false;
        }

        if (!form.phone.trim()) {
            props.notify('Phone required!', 'error');
            return false;
        }

        if (!Validator.isMobilePhone(form.phone)) {
            props.notify('Phone not valid!', 'error');
            return false;
        }

        if (!form.comments.trim()) {
            props.notify('Comments required!', 'error');
            return false;
        }

        return true;
    };

    useEffect(() => {
        let selected = props.data.find(x => x.Id === props.house.Id);
        if (selected && selected.liked !== props.house.liked)
            props.setSelectedHouse(selected);
    }, [props.data, JSON.stringify(props.data)]);

    return (
        <div className='houseView'>
            <HouseModal open={modalOpen} setOpen={setModalOpen} data={props.data} setData={props.setData} />
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
                    <button className='saveBtn' onClick={() => { likeHouse(); }}>
                        { props.house.liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
                        Save Property
                    </button>
                </div>
                <div className='contactForm'>
                    <form>
                        <input className='formField' placeholder='Full Name *' value={form.name} onChange={(event) => setForm({...form, name: event.target.value})}></input>
                        <input className='formField' placeholder='Email *' type='email' value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })}></input>
                        <input className='formField' placeholder='Phone Number *' type='number' value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })}></input>
                        <textarea className='formFieldMultiline' rows="5" cols="30" placeholder='Comments *' value={form.comments} onChange={(event) => setForm({ ...form, comments: event.target.value })}></textarea>

                        <button className='contactBtn' onClick={contactNow} >
                            Contact Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WithNotify(HouseView);