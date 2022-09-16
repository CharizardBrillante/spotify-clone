import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Library from './components/Library';


function App() {
  return (
    <BrowserRouter>
      <div className="app">      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/library" element={<Library/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
