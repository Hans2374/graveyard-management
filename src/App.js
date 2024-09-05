import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomepageBefore } from './pages/HomepageBefore';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomepageBefore />} />
      </Routes>
    </div>
  );
}

export default App;
