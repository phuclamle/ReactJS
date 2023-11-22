import logo from './logo.svg';
import './App.css';
import TeacherList from './Teacher/TeacherList';
import {Route, Routes} from 'react-router'
import TeacherDetail from './Teacher/TeacherDetail';
import ModifyTeacher from './Teacher/ModifyTeacher';

function App() {
  return (
    <div className="container">
       <Routes>
        <Route path='/' element={ <TeacherList/>} />
        <Route path='/teacher' element={ <TeacherList/>} />
        <Route path='/teacher/:teacherId' element={<TeacherDetail/>} />
        <Route path = '/teacher/modify/:teacherId' element= {<ModifyTeacher/>} />
       </Routes>
    </div>
  );
}

export default App;
