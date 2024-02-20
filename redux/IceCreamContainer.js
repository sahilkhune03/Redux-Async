import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { buyIceCream } from "./iceCream/iceCreamActions";
import iceCreamReducer from "./iceCream/iceCreamReducer";


function IceCreamContainer() {
    const [number, setNumber] = useState(1)
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of Ice Creams - {numOfIceCream}</h2>
        <button onClick={()=>dispatch(buyIceCream(number))}>Buy {number} Cake</button>
    </div>
  )
}
export default IceCreamContainer;
