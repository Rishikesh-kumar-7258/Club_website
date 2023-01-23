import {Routes, Route} from 'react-router-dom';
import Home from './components/homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
