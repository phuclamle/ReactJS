import './App.css';
import EditMovie from './components/Dashboard/MovieCategory/EditMovie';
import MovieCategory from './components/Dashboard/MovieCategory/MovieCategory';
import MoviePage from './pages/MovieHome/MoviePage';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
      <>
      <Routes>
          <Route path = '/' element={<MoviePage/>}/>
          <Route path='/Admin/TraditionalMovie' element={<MovieCategory type="TraditionalMovie"/>}/>
          <Route path='/Admin/TrendingMovie' element={<MovieCategory type="TrendingMovie"/>}/>
          <Route path='/Admin/TopRateMovie' element={<MovieCategory type="TopRateMovie"/>}/>
          <Route path='/Admin/HorrorMovie' element={<MovieCategory type="HorrorMovie"/>}/>
          <Route path='/Admin/ComedyMovie' element={<MovieCategory type="ComedyMovie"/>}/>
          <Route path='/Admin/TraditionalMovie/EditMovie' element={<EditMovie type="TraditionalMovie"/>}/>
          <Route path='/Admin/TrendingMovie/EditMovie' element={<EditMovie type="TrendingMovie"/>}/>
          <Route path='/Admin/TopRateMovie/EditMovie' element={<EditMovie type="TopRateMovie"/>}/>
          <Route path='/Admin/HorrorMovie/EditMovie' element={<EditMovie type="HorrorMovie" />}/>
          <Route path='/Admin/ComedyMovie/EditMovie' element={<EditMovie type="ComedyMovie" />}/>
      </Routes>
      </>
  );
}

export default App;