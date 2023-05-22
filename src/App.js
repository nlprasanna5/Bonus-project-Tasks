
import './App.css';
import Home from './components/home/Home';
import Task from './components/task/Task';
import Contact from './components/contact/Contact';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/task' element={<Task/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </>
  );
}

export default App;
