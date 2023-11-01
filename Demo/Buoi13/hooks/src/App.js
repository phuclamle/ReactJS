import './App.css';
import AppCount from './components/ApCount';
import AppCountJS from './components/AppCountJS';
import CheckboxGroup from './components/CheckboxGroup';
import RadioGroup from './components/RadioGroup';

function App() {
  return (
    <div className="container">
       {/* <AppCount/> */}
       <CheckboxGroup/>
       {/* <RadioGroup/> */}
    </div>
  );
}

export default App;
