import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import TwoWayBinding from './components/TwoWayBinding';
import TwoWayBindingFormSubmit from './components/TwoWayBindingFormSubmit';
import TwoWayBindingFormSubmit2 from './components/TwoWayBindingFormSubmit2';
import TwoWayBindingFormSubmit3 from './components/TwoWayBindingFormSubmit3';

function App() {
  return (
     <div className='container'>
      {/* <UseState/> */}
      <TwoWayBindingFormSubmit3/>
     </div>
  );
}

export default App;
