import React from 'react';
import Children from'./ContextChildren';

const {Provider, Consumer} = React.createContext();
export {Consumer}

const R076_ContextApi = () => {
  return (
    <div>
      <Provider value='React Study'>
        <Children />
      </Provider>
    </div>
  );
};

export default R076_ContextApi;