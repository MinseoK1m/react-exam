import { ACT } from "../actions";
import { combineReducers } from "redux";

const initState = {
  strInStore: 'Welcome',
}

const data = (state = initState, action) => {
  switch (action.type) {
    case ACT:
      return {strInStore: state.strInStore + ', world'};
    default:
      return state;
  }
}

const Reducer = combineReducers({
  data 
});

export default Reducer;