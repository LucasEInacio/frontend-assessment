import React, { useEffect, useState } from "react";
import ModalView from '../_shared/modalView';
import { List, ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WithNotify from '../_highOrder/withNotify';
import './houseView.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setHouses } from '../../store/features/houseSlice';

const HouseModal = (props) => {
    const [liked, setLiked] = useState([]);
    const houses = useSelector((state) => state.house.houses);
    const dispatch = useDispatch();

    useEffect(() => {
        filterLiked();
    }, [houses, JSON.stringify(houses)]);

    const unlike = (id) => {
        let houseList = houses.slice().map((x) => { if (x.Id === id) return { ...x, liked: false }; return x; });
        dispatch(setHouses(houseList));
        filterLiked();
        props.notify('House unliked!', 'success');
    };

    const filterLiked = () => {
        setLiked(houses?.filter(x => x.liked) || []);
    }

    return (
        <ModalView open={props.open} setOpen={props.setOpen} >
            <h2>Houses liked</h2>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    liked.length === 0 ? <p>No Houses Liked</p> : 
                    liked.map((value) => {
                    const labelId = `listSecondaryLabel-${value.Id}`;
                    return (
                        <ListItem
                            key={value.Id}
                            disablePadding
                            onClick={() => { unlike(value.Id) }}
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value.Id}`}
                                        src={value.ThumbnailURL}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={value.Title} />
                                <button className='unlikeBtn'
                                    onClick={() => { unlike(value.Id) }}
                                >
                                    <FavoriteIcon />
                                </button>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </ModalView>
    );
}

export default WithNotify(HouseModal);