import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux'

function icecreamContainer(props) {
  return (
    <div>
      <h2>
        icecreams numicecreams - {props.numicecreams}
      </h2>
        <button onClick={props.buyIcecream}>Buy icecream</button>
    </div>
  )
}

//when you want to use redux state in your coponent as props
const mapStateToProps = state => {
  return {
    numicecreams: state.icecream.numicecreams
  }
}

//for using actions eg buyIcecream()
 const mapDispatchToProps = dispatch => {
   return {
     buyIcecream: () => dispatch(buyIcecream())
   }
 }

 //connect connects a react component to a redux store eg: icecreamContainer to redux store
export default connect(mapStateToProps, mapDispatchToProps)(icecreamContainer)