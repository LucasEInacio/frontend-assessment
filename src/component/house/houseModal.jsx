import React, { useEffect, useState } from "react";
import ModalView from '../_shared/modalView';
import { List, ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WithNotify from '../_highOrder/withNotify';
import './houseView.scss';

const HouseModal = (props) => {
    const [liked, setLiked] = useState([]);

    useEffect(() => {
        filterLiked();
    }, [props.data, JSON.stringify(props.data)]);

    const unlike = (id) => {
        props.data.find(x => x.Id === id).liked = false;
        props.setData(props.data);
        filterLiked();
        props.notify('House unliked!', 'success');
    };

    const filterLiked = () => {
        setLiked(props.data?.filter(x => x.liked) || []);
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