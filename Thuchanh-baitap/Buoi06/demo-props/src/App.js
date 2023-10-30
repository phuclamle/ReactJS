import logo from './logo.svg';
import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import AddComponent from './components/AddComponent';

function App() {
  return (
    <>
     {/* Bài thực hành 1 */}
 
      <Welcome name="App"/>
 

    {/*  Bài thực hành 2 */}
    <AddComponent firstNum={1} secondNum={2}/>
    </>
  )
}

export default App;
