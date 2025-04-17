import React  from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Banner from './Components/banner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() { 

  return (
      <div  className="h-screen w-full ">
        <Navbar/>
        <Home/>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <ToastContainer/>
        <Footer/>
      </div>
  );
}

export default App
