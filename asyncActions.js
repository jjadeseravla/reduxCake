const redux = require('redux')
const store = redux.store
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersReq = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = () => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const reducer = (state = initialValue, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
    return {
      loading: false,
      users: action.payload,
      error: ''
    }

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
  }
}

//action creator -> returns an action
//thunk allows an action creator to return a fn instead of an action obj
const fetchUsers = () => {
  //before api call dispatch(fetchUsersReq) that will set loading to true
  dispatch(fetchUsersReq)
  return function(dispatch) {
    //use JSON placeholder
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
      //resp.data is the array of users
      const users = resp.data.map((user) => user.id)
      dispatch(fetchUsersSuccess(users))
    })
    .catch(error => {
      //error.message is descrip of error
      dispatch(fetchUsersError(error.message))
    })
  }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
//subscribe to store
store.subscribe(() => { console.log(store.getState()) })
//dispatch this async action
store.dispatch(fetchUsers)