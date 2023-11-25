import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Selector from './components/Selector';
import MyClock from './components/MyClock';

function App() {
  return (
    <div className="container">
       {/* <Counter/> */}
       {/* <Selector/> */}
       <MyClock/>
    </div>
  );
}

export default App;
