import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Btech from './components/Btech';
import Bca from './components/Bca';
import Home from './components/Home';
import Mca from './components/Mca';
import Bscit from './components/Bscit';
import Bcom from './components/Bcom';
import Mba from './components/Mba';
import Bjmc from './components/Bjmc';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/*" exact element={<Home />} />
          <Route path="/btech" exact element={<Btech />} />
          <Route path="/bca" exact element={<Bca />} />
          <Route path="/mca" exact element={<Mca />} />
          <Route path="/bscit" exact element={<Bscit />} />
          <Route path="/bcom" exact element={<Bcom />} />
          <Route path="/mba" exact element={<Mba />} />
          <Route path="/bjmc" exact element={<Bjmc />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
