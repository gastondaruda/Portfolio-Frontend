import {Suspense} from "react"
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavbarComponent from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Suspense fallback={<h1>Cargando....</h1>}>
        <BrowserRouter >
          <NavbarComponent />
          
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/mywork" element={<MyWork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
