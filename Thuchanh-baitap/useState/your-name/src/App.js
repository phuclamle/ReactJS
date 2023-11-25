import logo from './logo.svg';
import './App.css';
import SelectedCar from './components/SelectCar';
import Timer from './components/Timer';
import { useState } from 'react';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

export default function App() {

  const [count,setCount] = useState(0)

  const handleIncrease = (addAmount)=>{
    count = addAmount + count

   return [count,handleIncrease()]
  }
  return(
    <>
    <Counter1/>
    <Counter2/>
    </>
  )
  
}


 
