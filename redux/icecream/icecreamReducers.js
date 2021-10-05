import { BUY_ICECREAM } from './icecreamTypes'

const initialState = {
  icecreamNum: 20
}

const icecreamReducer = (state=initialState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numIcecream: icecreamNum - 1
    }
    default: return state
  }
}

export default icecreamReducer