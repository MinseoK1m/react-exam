import React, {useState, useEffect} from "react";
const R031_ReactHook2 = (props) => {
    const [count, setCount] = useState(0);
    const [flag,setFlag]=useState(1);
    let buttonClick = ()=>{
        let temp = count;
        temp++;
        setCount(temp);
    }
    let buttonFlag = () =>{
        let temp=flag;
        temp*=-1;
        setFlag(temp);
    }
    useEffect(() => {
        console.log('useEffect');
    },[]);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={buttonClick}>count 버튼</button>
            <button onClick={buttonFlag}>Flag 버튼</button>
        </div>
    );
};
export default R031_ReactHook2;