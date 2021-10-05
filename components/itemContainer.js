//this component displays num of icecreams or cake based on
// prop bassed from parent container
import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIcecream } from '../redux'

function itemContainer(props) {
  return (
    <div>
      <h2>Item - (props.item) </h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numCakes : state.icecream.numIcecreams
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake 
  ? () => dispatch(buyCake()) 
  : () => dispatch(buyIcecream())

  return {
    buyItem : dispatchFunction
  }
}

export default connect(null, mapDispatchToProps)(itemContainer)