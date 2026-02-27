import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SheetHolder from './pages/SheetHolder';
import PlierSet from './pages/PlierSet';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carsaf-aparati" element={<SheetHolder />} />
          <Route path="/pense-seti" element={<PlierSet />} />
          <Route path="/tesekkurler" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
