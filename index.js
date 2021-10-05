// import redux from 'redux';
const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICCREAM'

//action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'first redux action'
  }
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  }
}

//reducer
//(prevState, action) => newState

const initialCakeState = {
  numCakes: 10
}

const initialIcecreamState = {
  numIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numCakes: state.numCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numCakes: state.numIceCreams - 1
    }
    default: return state
  }
}

//redux store
//hold app state
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer
})
const store = createStore(rootReducer)

//has getState() access to state
console.log('initial state', state.getState());

//registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

//allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe()
