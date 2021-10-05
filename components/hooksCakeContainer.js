import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function hooksCakeContainer() {
  // like the mapStateToProps fn
  const numOfCakes = useSelector(state => state.cake.numCakes) 

//like mapDispatchToProps fn
  const dispatch = useDispatch()

  return (
    <div>
      <h2>
        cakes numCakes - {numOfCakes}
      </h2>
        <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default hooksCakeContainer;
