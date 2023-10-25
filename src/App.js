import HomeScreen from './routes/home-screen';
import Education from './routes/education';
import Coursework from './routes/coursework';
import Experience from './routes/experience';
import Contact from './routes/contact';
import './App.css';
import {Routes, Route, Navigate, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/projects" element={<Coursework/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/contact" element={<Contact/>} />
          
          {/* <Route path="/coursework/:label" element={<ProjectDetails/>} /> */}

          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </HashRouter>
      {/* <Footer/> */}
    </div>
   
  );
}

export default App;
