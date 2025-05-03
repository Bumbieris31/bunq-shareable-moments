import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RainbowBackground from './components/RainbowBackground';

// Pages
import Login from './pages/Login';
import DemoSelection from './pages/DemoSelection';
import SinterklaasDemo from './pages/SinterklaasDemo';
import BirthdayDemo from './pages/BirthdayDemo';

function App() {
  return (
    <Router>
      <RainbowBackground>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/demo-selection" element={<DemoSelection />} />
          <Route path="/sinterklaas-demo" element={<SinterklaasDemo />} />
          <Route path="/birthday-demo" element={<BirthdayDemo />} />
        </Routes>
      </RainbowBackground>
    </Router>
  );
}

export default App;
