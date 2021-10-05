import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducers";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer
})

export default rootReducer