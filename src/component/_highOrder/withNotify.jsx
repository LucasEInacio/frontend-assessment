import React, { Fragment } from "react";
import Snackbar from '@mui/material/Snackbar';
import { Button } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const WithNotify = (WrappedComponent) => {
    class Notification extends React.Component {
        
        state = {
            error: '',
            severity: '',
            open: false
        };

        handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }

            this.setState({ ...this.state, open: false });
        };

        notify = (message, severity) => {
            this.setState({ ...this.state, error: message, severity: severity, open: true });
        }

        render() {
            return (
                <Fragment>
                    <Snackbar
                        open={this.state.open}
                        autoHideDuration={6000}
                        message={this.state.errorMessage}
                        onClose={this.handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        action={
                            <Button color="inherit" size="small" onClick={this.handleClose}>
                                x
                            </Button>
                        }
                        sx={{ bottom: { xs: 90, sm: 50 } }}
                    >
                        <div>
                            <Alert onClose={this.handleClose} severity={this.state.severity} sx={{ width: '100%' }}>
                                {this.state.error}
                            </Alert>
                        </div>
                    </Snackbar>
                    <WrappedComponent {...this.props} notify={this.notify} />
                </Fragment>)
        }
    }

    return Notification;
}

export default WithNotify;