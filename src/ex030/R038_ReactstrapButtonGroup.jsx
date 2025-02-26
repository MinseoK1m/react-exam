import React, { useState } from 'react'; //초기상태변수를 만들어야하므로 useState 추가
import {Button, ButtonGroup} from 'reactstrap';

const R038_ReactstrapButtonGroup = () => {
    //ush -> useStateHook으로 상태 생성
    const [number, setNumber] = useState(10);

    const move = (type, e) => {
        if(type === 'Left') {
            //this.setState({number: this.state.number - 1});
            setNumber(number - 1); 
        }else if (type === 'Right') {
            setNumber(number + 1);
        }else {
            setNumber(0);
        }
    }

    return (
        <div>
            <ButtonGroup style={{padding: "0px"}}>
                <Button onClick={e =>move('Left')}>Left</Button>
                <Button onClick={e =>move('Middle')}>Middle</Button>
                <Button onClick={e =>move('Right')}>Right</Button>
            </ButtonGroup>
            <br/>{number}
        </div>
    );
};

export default R038_ReactstrapButtonGroup;