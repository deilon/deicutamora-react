import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Nav from './components/Nav'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Home from './components/Home/Home'
import './App.css'

function App() {
  return (
    <div className="App flex flex-col min-h-screen text-customWhite">
      <BrowserRouter>
        <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
