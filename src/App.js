import './App.css';
import { Routes, Route } from 'react-router-dom';

import { ScienceProvider } from './context/ScienceContext'
import { AnthroArticleProvider } from './context/AnthroArticleContext'

import NavigationBar from './components/NavigationBar';
import HeroBackground from './components/HeroBackground';

import Anthropologie from './pages/anthropologie/Anthropologie';
import Psychologie from './pages/psychologie/Psychologie';
import Sociologie from './pages/sociologie/Sociologie';

function App() {

  return (
    <div className="App">
      <div className="hero">
        <ScienceProvider>
          <HeroBackground />
          <NavigationBar />
        </ScienceProvider>
      </div>
      <div className="content">
        <Routes>
          <Route path="/Anthropologie" element={
          <><AnthroArticleProvider>
            <Anthropologie />
            </AnthroArticleProvider></>} />

          <Route path="/Psychologie" element={<Psychologie />} />
          <Route path="/Sociologie" element={<Sociologie />} />
        </Routes>
      </div>
    </div>

  );

}

export default App;
