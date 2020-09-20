import {FETCHITEM} from './actionTypes'
  
  const initStore = {
    product : ""
  };
  
  const reducer = (state = initStore, {type,payload}) => {
    console.log("reducer called");
    switch (type) {
      
        case FETCHITEM:
        console.log("reducer request called", payload);
        return {
          ...state,
          product:payload
          
        };


      default:
        console.log("reducer default called");
        return state;
    }
  };
  
  export default reducer;