import axios from "axios";
import {FETCHITEM} from './actionTypes'

const fetchItem = (res)=>{
  return {
    type: FETCHITEM,
    payload : res
  }
}

export {fetchItem}