import logo from './logo.svg';
import './App.css';
import {useState,createContext} from 'react'
import Panel from './components/Panel';
import LoginForm from './components/LoginForm';

// App -> Panel -> LoginForm
// state theme
// theme -> Panel
//              => theme -> Login

// context API
// 1. createContext
// 2.provider
// 3. consumer

export const ThemeContext = createContext()
function App() {
  const [theme,setTheme] = useState('light')
  const handleChangeTheme = ()=>{
    setTheme(theme === 'light' ? 'dark': 'light')
  }
  console.log(theme);

  const value = {
    theme,
    handleChangeTheme
  }
  return (
    <ThemeContext.Provider value={value}>
    <div className="Container">
   
       <Panel/>
        
    </div>
    </ThemeContext.Provider>
  );
}





export default App;
