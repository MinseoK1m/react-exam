import React, {useState, useEffect} from "react";

const R031_ReactHook = (props) => {
    const [contents, setContents] = useState('[THIS IS REACT]');

    useEffect(() => {
        console.log('useEffect');
    });

    return (
        <div>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[THIS IS HOOK]') }>버튼</button>
        </div>
    );
};

export default R031_ReactHook;