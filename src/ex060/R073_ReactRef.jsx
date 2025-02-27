import React , {useEffect, useState}from 'react';

const R073_ReactRef = () => {

  const [inputRef, setInputRef] = useState(React.createRef());
  
  const refFocus = e => {
    inputRef.current.focus();
  }
  
  const javascriptFocus = () => {
    document.querySelector('#id').focus();
  }
  return (
    <div>
      <input id='id' type='text' ref={inputRef}></input>
      <input type='button' value='Ref Focus' onClick={refFocus}></input>
      <input type='button' value='Javascript Focus' onClick={javascriptFocus}></input>
    </div>
  );
};

export default R073_ReactRef;