import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import GameDev from './components/gamedev';
import WebDev from './components/webdev';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gamedev" element={<GameDev />} />
        <Route path="webdev" element={<WebDev />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
