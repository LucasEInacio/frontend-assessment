import React from "react";
import { Modal, Box } from '@mui/material';
import ModalClose from '@mui/joy/ModalClose';
import './site.scss';

const ModalView = (props) => {

    const handleClose = () => props.setOpen(false);

    return (
        <Modal open={props.open}
            onClose={handleClose}
        >
            <Box className='modalStyle'>
                <ModalClose onClick={handleClose} />
                {props.children}
            </Box>
        </Modal>
    );
}

export default ModalView;