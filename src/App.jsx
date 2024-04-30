import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Footer from './components/Footer';
import Projetos from './pages/Projetos/Projetos';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills></Skills>}/>
          <Route path="/projects" element={<Projetos></Projetos>}/>
        </Routes>
        <Footer></Footer>
  </BrowserRouter>

    </div>
  );
}

export default App;
