import {Routes, Route} from 'react-router-dom';
import Home from './components/homepage';
import Authorize from './components/authorize';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/authorize' element={<Authorize/>} />
    </Routes>
  );
}

export default App;
