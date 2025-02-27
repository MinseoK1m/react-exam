import React from 'react';

const R066_onClick = () => {
  const buttonClick = param => {
    if(typeof param != 'string'){
      param = 'Click a';
    }
    console.log('param: '+param);
  };

  return (
    <div>
      <button onClick={e => buttonClick('Click button')}>Click button</button>
      <div onClick={e => buttonClick('Click div')}>Click div</div>
      <a href='#' onClick={buttonClick}>Click a</a>
    </div>
  );
};

export default R066_onClick;

