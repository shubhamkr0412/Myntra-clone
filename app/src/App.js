
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from "./Redux/actions/index"

function App() {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
 
     <h1>{myState}</h1>
     <button onClick={()=>dispatch(incNumber())}>Plus</button>
     <button onClick={()=>dispatch(decNumber())}>Minus</button>
    </div>
  );
}

export default App;
