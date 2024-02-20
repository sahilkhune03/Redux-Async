import React, {useState} from "react";
import {useDispatch, useSelector, connect } from 'react-redux';

import {buyCake} from "./cake/cakeActions";
import { buyIceCream } from "./iceCream/iceCreamActions";


function ItemContainer() {
    const [number, setNumber] = useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Items - {numOfCakes}</h2>
        <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cake</button>
        <h2>Items - {numOfIceCream}</h2>
        <button onClick={()=>dispatch(buyIceCream(number))}>Buy {number} Ice Cream</button>
    </div>
  )
}
const mapStateToProps = (state,ownProps)=>{
  const itemState = ownProps.cake ? state.cake.numOfCakes:state.iceCream.numOfIceCream
  return {
    item : itemState
  }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem : dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
