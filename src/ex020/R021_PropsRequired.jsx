import { Component } from "react";
import datatype from 'prop-types';

class R012_PropsRequired extends Component {
    render() {
        let {ReactString, Reactnumber} = this.props;
        return (
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

export default R012_PropsRequired;