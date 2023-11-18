import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Panel from './components/Panel';

// App -> Panel -> LoginForm
// state theme
// theme -> Panel
//              => theme -> Login
function App() {
  const [theme,setTheme] = useState('light')
  const handleChangeTheme = ()=>{
    setTheme(theme === 'light' ? 'dark': 'light')
  }
  console.log(theme);
  return (
    <div className="Container">
      {/* <button className="btn btn-sm btn-danger"
      onClick={handleChangeTheme}
      >Dark Mode</button> */}
       <Panel theme = {theme} handleChangeTheme = {handleChangeTheme}/>
    </div>
  );
}





export default App;
