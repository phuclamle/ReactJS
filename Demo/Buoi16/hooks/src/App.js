import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import UseEffect from './components/UseEffect';
import UseEffect2 from './components/UseEffect2';
import UseEffectDOMEvent from './components/UseEffectDOMEvent';
import UseEffectWithDeps from './components/UseEffectWithDeps';

function App() {
  const [toggle,setToogle] = useState(false)
  return (
   <div className='container'>
    <button onClick={()=>setToogle(!toggle)}>Toogle Component</button>
    {toggle && <UseEffectWithDeps/>}
   </div>
  );
}

export default App;
