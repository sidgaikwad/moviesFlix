import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Summary from './pages/Summary';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary/:id" element={<Summary />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
