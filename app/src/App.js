
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from "./Redux/actions/index"
import Navbar from './Components/Navbar/Navbar';
import { Button, Stack } from '@mui/material';
import SideBar from './Components/Navbar/SideBar';
import MensProduct from './Components/Products/MensProduct';
import { Box } from '@mui/system';
import HomePage from './Components/HomePage/HomePage';
import MensPage from './Components/Products/MensPage';


function App() {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    
    <Box>
   {/* <HomePage/> */}
   <MensPage/>
    </Box>
  );
}

export default App;
