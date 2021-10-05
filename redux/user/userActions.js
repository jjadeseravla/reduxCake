import axios from 'axios'
import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userTypes"

export const featchUserReq = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const featchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,

  }
}

export const featchUserFailure = (e) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: e,
  }
}

//cos of THUNK we can return a fn not just an action
//can have side effects like async api calls
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserReq) //set loading to true
    //get url endpoint for get req
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
      const users = resp.data
      dispatch(fetchUserSuccess(users))
    })
    .catch(e => {
      const errorMsg = e.message
      dispatch(fetchUserFailure(errorMsg))
    })
  }
}