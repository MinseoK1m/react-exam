import React from "react";
import { Consumer } from "./R077_ContextApi";

const ContextChildren = () => {
  return (
    <Consumer>
      {(contextValue) => (
        <button onClick={(e) => contextValue.setStateFunc("React class")}>
          {contextValue.name}_button
        </button>
      )}
    </Consumer>
  );
};

export default ContextChildren;
