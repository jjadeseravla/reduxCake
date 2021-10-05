import { createStore } from 'redux'
import thunk from 'react-thunk'
import rootReducer  from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyModdleware(thunk)))

export default store