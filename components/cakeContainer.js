import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function cakeContainer(props) {
  return (
    <div>
      <h2>
        cakes numCakes - {props.numCakes}
      </h2>
        <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

//when you want to use redux state in your coponent as props
// a 2nd parameter can be passes to mapStateToProps -> the props already passed in
const mapStateToProps = state => {
  return {
    numCakes: state.cake.numCakes
  }
}

//for using actions eg buyCake()
 const mapDispatchToProps = dispatch => {
   return {
     buyCake: () => dispatch(buyCake())
   }
 }

 //connect connects a react component to a redux store eg: cakeContainer to redux store
export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer)