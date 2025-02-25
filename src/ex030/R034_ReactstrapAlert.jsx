import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

class R034_ReactstrapAlert extends Component {
    render() {
        return (
            <div>
                <Alert color='dark'>
                    Simple Alert [color: dark]
                </Alert>
                <UncontrolledAlert color='danger'>
                    Uncontrolled Alert [color: danger]
                </UncontrolledAlert>
            </div>
        );
    }
}

export default R034_ReactstrapAlert;