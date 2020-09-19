import axios from "axios";
import {FETCH_REQUEST} from './actionTypes'

const logout = ()=>{
  return {
    type: LOGOUT
  }
}