import React from 'react';
import {add} from './actions';

const StrAddButton = (props) => {

  const addString = () => {
    props.store.dispatch(add());
  }
  return (
    <input value='Hello!' type='button' onClick={addString}></input>
  );
};

export default StrAddButton;