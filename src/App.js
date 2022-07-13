import logo from './logo.svg';
import './App.css';
import About from './about/About';
import Home from './home/Home'; 
import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import News from './News/News';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Routes>
        <Route path="news" element={<News/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="contact" element={<About/>}></Route>
        <Route path="about" element={<Contact/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
