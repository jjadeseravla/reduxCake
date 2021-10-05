import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function newCakeContainer(props) {

  const [num, setNum] = useState(1)

  return (
    <div>
      <h2>
        new cakes num - {props.numCakes}
      </h2>
      <input type='text' value={num} onChange={(e) => setNum(e.target.value)} />
        <button onClick={() => props.buynewCake(num)}>Buy {num} Cake</button>
    </div>
  )
}

//when you want to use redux state in your coponent as props
const mapStateToProps = state => {
  return {
    numnewCakes: state.newCake.numnewCakes
  }
}

//for using actions eg buynewCake()
 const mapDispatchToProps = dispatch => {
   return {
     buyCake: (num) => dispatch(buyCake(num))
   }
 }

 //connect connects a react component to a redux store eg: newCakeContainer to redux store
export default connect(mapStateToProps, mapDispatchToProps)(newCakeContainer)