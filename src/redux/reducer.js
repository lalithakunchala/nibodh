import {FETCH_USER_REGISTER_FAILURE,FETCH_USER_REGISTER_REQUEST,FETCH_USER_REGISTER_SUCCESS,
    FETCH_USER_LOGIN_FAILURE,FETCH_USER_LOGIN_REQUEST,FETCH_USER_LOGIN_SUCCESS,
    FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,LOGOUT} from './actionTypes'
  
  const initStore = {
    isLoading: false,
    data: [],
    error: "",
    regError:"",
    regSuccess:"",
    logError:"",
    logSuccess:"",
    logUser:"",
    userSuccess:"",
    userError:"",
    token : ""
  };
  
  const reducer = (state = initStore, {type,payload}) => {
    console.log("reducer called");
    switch (type) {
      
        case FETCH_REQUEST:
        console.log("reducer request called");
        return {
          ...state
          
        };


      default:
        console.log("reducer default called");
        return state;
    }
  };
  
  export default reducer;