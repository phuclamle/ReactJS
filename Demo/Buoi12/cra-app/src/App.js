import React from 'react';
import './App.css';
import FormRegister from './components/FormContact/FormContact';
import Profile from './components/Profile/Profile';
import JobList from './components/JobList/JobList';
import Heading from './components/Heading/Heading';
import Form from './components/Form/Form';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';





function App() {
  return (
    <div className="container vh-100">
      {/*function Component phải đặt chữ cái đầu là chữ hoa*/}
      {/* <Heading color="green" backgroundColor="orange">"We are learning CRA"</Heading>
      <Heading color="yellow" backgroundColor="red">"We are learning Vite"</Heading>
     <FormRegister/>
      <Profile/>
      <JobList/> */}
      {/* <Form/> */}
       {/* <Header/> */}
      {/* <JobList/> */}
      <Profile/>
     {/* <FormRegister/> */}
      {/* <Footer/> */}
          </div>
  );
}

export default App;