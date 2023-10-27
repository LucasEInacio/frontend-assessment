import React from "react";
import { Modal, Box } from '@mui/material';
import './site.scss';

const ModalView = (props) => {

    const handleClose = () => props.setOpen(false);

    return (
        <Modal open={props.open}
            onClose={handleClose}
        >
            <Box className='modalStyle'>
                {props.children}
            </Box>
        </Modal>
    );
}

export default ModalView;